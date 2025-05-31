import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FaFacebookMessenger } from "react-icons/fa";
import Chats from "./Chats";

const AllUser = () => {
  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center">
          <FaFacebookMessenger className=" text-white mt-1 p-1 text-[37px] border border-white rounded-full cursor-pointer" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="-mr-16 md:-mr-[74px] lg:-mr-4  md:mt-4  border-hidden ">
          <Chats />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AllUser;
