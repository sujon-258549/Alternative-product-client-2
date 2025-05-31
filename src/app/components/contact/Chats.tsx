/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  useGetAllUserQuery,
  useGetMeQuery,
} from "@/redux/features/auth/authApi";
import { TUser } from "@/types/user";
import { Search, Send, Trash2 } from "lucide-react";
import Modal from "./Modal";
import {
  useCreateContactMutation,
  useDeleteContactMutation,
  useFindContactHeQuery,
  useFindContactMeQuery,
} from "@/redux/features/contact/contact";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import Swal from "sweetalert2";

type ContactTab = "meContact" | "heContact";
type Contact = {
  _id: string;
  message: string;
  createdAt: string;
};

const Chats = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedUser, setSelectedUser] = useState<TUser | null>(null);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState<ContactTab>("meContact");
  const [isDeleting, setIsDeleting] = useState(false); // New loading state for delete

  // API hooks
  const [createContact] = useCreateContactMutation();
  const [deleteContact, { isLoading: isDeleteLoading }] =
    useDeleteContactMutation();
  const { data: getMe } = useGetMeQuery(undefined);
  const getMyData = getMe?.data;

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [inputValue]);

  // Fetch users
  const {
    data: usersData,
    error: usersError,
    isLoading: isUsersLoading,
  } = useGetAllUserQuery([{ name: "searchTerm", value: searchQuery }]);

  // Filter out current user
  const users = (usersData?.data || []).filter(
    (user: TUser) => user._id !== getMyData?._id
  );

  // Fetch contacts with refetch functions
  const {
    data: contactsMe,
    refetch: refetchMe,
    isLoading: isMeLoading,
  } = useFindContactMeQuery(selectedUser?._id, {
    skip: !selectedUser,
  });
  const {
    data: contactsHe,
    refetch: refetchHe,
    isLoading: isHeLoading,
  } = useFindContactHeQuery(selectedUser?._id, {
    skip: !selectedUser,
  });

  // Message handlers
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim() || !selectedUser) return;

    try {
      const data = {
        sendId: selectedUser._id,
        message: message.trim(),
      };

      const res = await createContact(data).unwrap();
      if (res.success) {
        toast.success(res.message || "Message sent successfully!", {
          duration: 2000,
        });
        setMessage("");
        refetchMe();
        refetchHe();
      }
    } catch (error: any) {
      console.error("Send message error:", error);
      toast.error(
        error?.data?.message ||
          error.message ||
          "Failed to send message. Please try again.",
        { duration: 4000 }
      );
    }
  };

  const handleDeleteMessage = async (id: string) => {
    Swal.fire({
      title: "Confirm Deletion",
      html: `
         <div class="text-center">
           <svg class="w-20 h-20 mx-auto text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
           </svg>
           <h3 class="text-xl font-bold text-gray-800 mt-4">Are you sure?</h3>
           <p class="text-gray-600 mt-2">This action cannot be undone</p>
         </div>
       `,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      buttonsStyling: false,
      customClass: {
        confirmButton:
          "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg mx-2 transition-all duration-300",
        cancelButton:
          "bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg mx-2 transition-all duration-300",
        popup: "rounded-xl border-0 shadow-xl",
      },
      backdrop: `
         rgba(0,0,0,0.4)
         url("/images/trash-icon-animated.gif")
         center top
         no-repeat
       `,
      showClass: {
        popup: "animate__animated animate__fadeIn animate__faster",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOut animate__faster",
      },
      background: "#ffffff",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      reverseButtons: true,
      focusConfirm: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteContact(id);
        Swal.fire({
          title: "Deleted!",
          html: `
             <div class="text-center">
               <svg class="w-20 h-20 mx-auto text-green-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
               </svg>
               <h3 class="text-xl font-bold text-gray-800 mt-4">Successfully deleted!</h3>
               <p class="text-gray-600 mt-2">The item has been removed</p>
             </div>
           `,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
          background: "#ffffff",
          showClass: {
            popup: "animate__animated animate__zoomIn animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__zoomOut animate__faster",
          },
        });
      }
    });
  };

  // Helper functions
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMM dd, yyyy h:mm a");
    } catch {
      return dateString;
    }
  };

  return (
    <div className="bg-gray-800 mt-4 md:mt-0 text-white p-5 rounded-lg max-w-md mx-auto">
      {/* Search Input */}
      <div className="relative w-full mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          value={inputValue}
          placeholder="Search users..."
          className="pl-10 h-10 rounded-full bg-gray-700 border-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
          onChange={(e) => setInputValue(e.target.value)}
          aria-label="Search users"
        />
      </div>

      {/* User List */}
      <div className="max-h-[400px] overflow-y-auto">
        {usersError ? (
          <div className="text-center py-4 text-red-400">
            Error loading users
          </div>
        ) : isUsersLoading ? (
          <div className="text-center py-4 text-gray-400">Loading users...</div>
        ) : users.length > 0 ? (
          users.map((user: TUser) => (
            <div
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className="flex items-center space-x-4 w-full p-3 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedUser(user)}
            >
              <Avatar className="w-10 h-10">
                <AvatarImage src={user?.profileImage} alt={user?.fullName} />
                <AvatarFallback>
                  {user?.fullName
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{user.fullName}</p>
                <p className="text-sm text-gray-400">{user.phone}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-gray-400">
            {searchQuery
              ? "No matching users found"
              : "Start typing to search users"}
          </div>
        )}
      </div>

      {/* Chat Modal */}
      <Modal isOpen={!!selectedUser} onClose={() => setSelectedUser(null)}>
        {selectedUser && (
          <div className="flex flex-col h-[70vh] justify-between">
            {/* Chat Header */}
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src={selectedUser.profileImage}
                  alt={selectedUser.fullName}
                />
                <AvatarFallback>
                  {selectedUser.fullName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">{selectedUser.fullName}</h2>
                <p className="text-sm text-gray-400">{selectedUser.phone}</p>
              </div>
            </div>

            {/* Message List */}
            <div className="flex-1 overflow-y-auto my-4 space-y-2 pr-1">
              <Tabs
                value={activeTab}
                onValueChange={(value) => setActiveTab(value as ContactTab)}
                className="w-full"
              >
                <TabsList className="flex justify-center mx-auto items-center mb-4">
                  <TabsTrigger value="meContact" className="border btn-bg mr-3">
                    My Messages
                  </TabsTrigger>
                  <TabsTrigger value="heContact" className="border btn-bg">
                    Their Messages
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="meContact" className="space-y-3">
                  {isMeLoading ? (
                    <p className="text-center text-gray-400 py-4">Loading...</p>
                  ) : contactsMe?.data?.length ? (
                    contactsMe.data.map((data: Contact) => (
                      <div
                        key={data._id}
                        className="flex justify-between items-start p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <div>
                          <p className="text-white">{data.message}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            {formatDate(data.createdAt)}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteMessage(data._id)}
                          disabled={isDeleting}
                          className="text-red-400 hover:text-red-300 p-1 disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label={`Delete message: ${data.message}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-400 py-4">
                      No messages sent yet
                    </p>
                  )}
                </TabsContent>

                <TabsContent value="heContact" className="space-y-3">
                  {isHeLoading ? (
                    <p className="text-center text-gray-400 py-4">Loading...</p>
                  ) : contactsHe?.data?.length ? (
                    contactsHe.data.map((data: Contact) => (
                      <div
                        key={data._id}
                        className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <p className="text-white">{data.message}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {formatDate(data.createdAt)}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-400 py-4">
                      No messages received yet
                    </p>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            {/* Message Input */}
            <form
              onSubmit={handleSendMessage}
              className="flex items-center gap-2 bg-gray-700 rounded-full px-1 py-2"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-transparent border-none outline-none text-white px-2"
                autoFocus
                spellCheck={false}
                required
                aria-label="Type your message"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="text-blue-400 pr-4 hover:text-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Chats;
