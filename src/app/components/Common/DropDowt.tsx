import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import LoadingSpinner from "./LoadingSpinner";
const DropDown = () => {
  const { data: userData, isLoading } = useGetMeQuery(undefined);
  if (isLoading) {
    return <LoadingSpinner />;
  }
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
          <DropdownMenuItem>
            Profile Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Assumenda eum quis beatae magni iure modi eius quia repellat eos!
            Cupiditate animi magni corporis earum aliquam nam iste unde
            laudantium nisi cumque porro aperiam modi provident tempora natus,
            eveniet quam dolorum quidem reprehenderit obcaecati debitis ex
            deserunt? Reprehenderit quos ad assumenda quod numquam aliquam fugit
            velit, nam culpa laudantium iure earum deleniti natus recusandae
            consequatur laboriosam nisi magni cumque, modi dolor sit nihil?
            Repellat nisi officiis distinctio, explicabo, numquam quas
            laboriosam rem illum et aperiam labore? Odio, veritatis! Esse saepe
            cum consequatur modi cupiditate ducimus eaque ullam, soluta suscipit
            assumenda tempora velit ipsa, ab fugiat ad sequi distinctio dicta,
            quis eius itaque optio quas. Adipisci earum voluptates in quos nulla
            repellendus dignissimos ut cum quod, ipsa facere iusto temporibus
            aspernatur harum, distinctio quibusdam eius eum, vitae eos? Quis rem
            hic et amet ducimus aperiam praesentium est ratione labore ipsa
            expedita ad facere sit ipsum, fugit libero fugiat illo
            exercitationem numquam cum magnam mollitia, officia nostrum.
            Perferendis natus aperiam dolor voluptates quod quam voluptas quas
            officia. Reiciendis earum dicta optio? Debitis nostrum corrupti
            sequi molestias mollitia saepe pariatur rerum nisi asperiores
            possimus provident dicta voluptatum atque sapiente eos vitae qui,
            numquam ullam dolorum. Quas, expedita officiis, vitae aut atque
            asperiores itaque dolore dolorum quidem repudiandae sequi? Ad veniam
            minus sed ratione. Laboriosam molestiae provident aut ratione,
            voluptatem veritatis eligendi cumque earum animi ipsum sint! Ut quos
            ducimus iure eligendi nostrum. Maiores aliquid assumenda rerum
            aspernatur incidunt ratione corporis voluptate ipsum vero
            cupiditate.
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {" "}
          <Avatar>
            <AvatarImage
              src={
                user?.profileImage
                  ? user.profileImage
                  : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R190067195&ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740"
              } // Replace with actual path
              alt="Profile"
              className="w-16 cursor-pointer h-16 mx-auto rounded-full object-cover bg-blue-500"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
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
                {user?.name || "Name Not Available"}
              </h2>
              <p className="text-gray-400 text-center text-sm mt-1">
                {user?.email || "Email Not Available"}
              </p>
              <Link to={"/profile"}>
                <Button className="mt-2 text-center flex justify-center  px-6 py-3 w-[120px] btn-bg mx-auto btn-bg font-bold rounded-lg hover:scale-105 transition-transform">
                  View Profile
                </Button>
              </Link>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="" />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
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
