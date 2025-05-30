import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useGetAllUserQuery } from "@/redux/features/auth/authApi";
import { TUser } from "@/types/user";
import { Search } from "lucide-react";
import { useState } from "react";

const Chats = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<TUser | null>(null);

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = (form.elements.namedItem("input") as HTMLInputElement)?.value;
    setSearchQuery(input);
  };

  const { data: usersData } = useGetAllUserQuery([
    { name: "searchTerm", value: searchQuery },
  ]);

  const users = usersData?.data || [];

  return (
    <div className="bg-[#424242] text-white p-5">
      <form
        onSubmit={handelSubmit}
        className="relative w-full flex border border-white rounded-full"
      >
        <button type="submit">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </button>
        <Input
          type="text"
          name="input"
          placeholder="Search Messenger"
          className="pl-10 h-10 rounded-full bg-muted border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-muted-foreground"
        />
      </form>

      <div className="max-h-[400px] overflow-y-auto mt-4">
        {users.length > 0 ? (
          users.map((user: TUser) => (
            <div
              key={user.phone}
              onClick={() => setSelectedUser(user)}
              className="flex items-center space-x-4 w-full p-2 hover:bg-[#333333] rounded cursor-pointer"
            >
              <Avatar className="w-10 h-10">
                <AvatarImage
                  className="rounded-full"
                  src={user?.profileImage}
                  alt={user?.fullName}
                />
                <AvatarFallback>
                  {user?.fullName?.split(" ")?.[0]?.[0]}
                  {user?.fullName?.split(" ")?.[1]?.[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{user?.fullName}</span>
                <span className="text-xs text-gray-400">{user?.phone}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-gray-400">No users found</div>
        )}
      </div>

      <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <DialogContent className="bg-[#424242] text-white">
          <DialogHeader className="">
            <DialogTitle className="text-center">
              {selectedUser?.fullName}'s Profile
            </DialogTitle>
            <DialogDescription>
              {selectedUser && (
                <div className="space-y-4 ]">
                  <p className="text-center">Phone: {selectedUser.phone}</p>
                  <Avatar className="w-20 h-20 mx-auto">
                    <AvatarImage
                      src={selectedUser.profileImage}
                      alt={selectedUser.fullName}
                    />
                    <AvatarFallback>
                      {selectedUser.fullName?.split(" ")?.[0]?.[0]}
                      {selectedUser.fullName?.split(" ")?.[1]?.[0]}
                    </AvatarFallback>
                  </Avatar>

                  <div className="space-y-2"></div>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Chats;
