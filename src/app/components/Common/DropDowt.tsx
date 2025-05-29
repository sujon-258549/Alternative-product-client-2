import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";
import { IoIosNotifications } from "react-icons/io";
import { Button } from "@/components/ui/button";
import LogoutButton from "./LogoutButton";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
const DropDown = () => {
  const { data: userData } = useGetMeQuery(undefined);

  const user = userData?.data;
  return (
    <div className="flex gap-1">
      <DropdownMenu>
        <DropdownMenuTrigger>
          {" "}
          <IoIosNotifications className="text-white cursor-pointer text-3xl" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#424242] text-white overflow-y-auto max-h-[350px] mt-5 w-[350px]">
          <DropdownMenuSeparator />

          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {" "}
          <img
            src={
              user?.profileImage
                ? user.profileImage
                : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R190067195&ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740"
            } // Replace with actual path
            alt="Profile"
            className="w-10 h-10 cursor-pointer mx-auto rounded-full object-cover bg-blue-500"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-4 w-[250px] bg-[#424242] text-white ">
          <DropdownMenuLabel>
            <div className="flex justify-center flex-col">
              <img
                src={
                  user?.profileImage
                    ? user.profileImage
                    : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R190067195&ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740"
                } // Replace with actual path
                alt="Profile"
                className="w-16 h-16 mx-auto rounded-full object-cover bg-blue-500"
              />
              <h2 className="mt-1 text-white text-xl text-center font-bold">
                {user?.fullName || "Name Not Available"}
              </h2>
              <p className="text-gray-400 text-center text-sm mt-1">
                {user?.email || "Email Not Available"}
              </p>
              <Link to={"/profile"}>
                <Button className="mt-2 cursor-pointer text-center flex justify-center  px-6 py-3 w-[120px] btn-bg mx-auto btn-bg font-bold rounded-lg hover:scale-105 transition-transform">
                  View Profile
                </Button>
              </Link>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="" />
          <DropdownMenuItem>
            <Link to={"/My-product"}>My Products</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={"/my-recommended"}>My Recommended</Link>
          </DropdownMenuItem>

          <DropdownMenuItem>Subscription </DropdownMenuItem>
          <DropdownMenuSeparator className="" />
          <DropdownMenuItem className="w-full">
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDown;
