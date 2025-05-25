import { LogInIcon, Menu } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { IoIosNotifications } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "https://i.ibb.co.com/Z6Yz672w/image-removebg-preview-2.png",
    alt: "logo",
    title: "Product",
  },
  menu = [
    { title: "Home", url: "/" },

    {
      title: "Add Product",
      url: "/add-product",
    },
    {
      title: "All Product",
      url: "/all-product",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
  },
}: Navbar1Props) => {
  return (
    <section className="py-4 border-b border-white ">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between items-center lg:flex">
          <a href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} className="max-h-10" alt={logo.alt} />
            <span className="text-2xl -ml-2 text-white font-bold tracking-tighter">
              {logo.title}
            </span>
          </a>
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="text-white">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                {" "}
                <IoIosNotifications className="text-white text-3xl" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#424242] text-white overflow-y-auto max-h-[350px] mt-5 w-[350px]">
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Profile Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Assumenda eum quis beatae magni iure modi eius quia
                  repellat eos! Cupiditate animi magni corporis earum aliquam
                  nam iste unde laudantium nisi cumque porro aperiam modi
                  provident tempora natus, eveniet quam dolorum quidem
                  reprehenderit obcaecati debitis ex deserunt? Reprehenderit
                  quos ad assumenda quod numquam aliquam fugit velit, nam culpa
                  laudantium iure earum deleniti natus recusandae consequatur
                  laboriosam nisi magni cumque, modi dolor sit nihil? Repellat
                  nisi officiis distinctio, explicabo, numquam quas laboriosam
                  rem illum et aperiam labore? Odio, veritatis! Esse saepe cum
                  consequatur modi cupiditate ducimus eaque ullam, soluta
                  suscipit assumenda tempora velit ipsa, ab fugiat ad sequi
                  distinctio dicta, quis eius itaque optio quas. Adipisci earum
                  voluptates in quos nulla repellendus dignissimos ut cum quod,
                  ipsa facere iusto temporibus aspernatur harum, distinctio
                  quibusdam eius eum, vitae eos? Quis rem hic et amet ducimus
                  aperiam praesentium est ratione labore ipsa expedita ad facere
                  sit ipsum, fugit libero fugiat illo exercitationem numquam cum
                  magnam mollitia, officia nostrum. Perferendis natus aperiam
                  dolor voluptates quod quam voluptas quas officia. Reiciendis
                  earum dicta optio? Debitis nostrum corrupti sequi molestias
                  mollitia saepe pariatur rerum nisi asperiores possimus
                  provident dicta voluptatum atque sapiente eos vitae qui,
                  numquam ullam dolorum. Quas, expedita officiis, vitae aut
                  atque asperiores itaque dolore dolorum quidem repudiandae
                  sequi? Ad veniam minus sed ratione. Laboriosam molestiae
                  provident aut ratione, voluptatem veritatis eligendi cumque
                  earum animi ipsum sint! Ut quos ducimus iure eligendi nostrum.
                  Maiores aliquid assumenda rerum aspernatur incidunt ratione
                  corporis voluptate ipsum vero cupiditate.
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
                  <AvatarImage src="https://img.freepik.com/premium-vector/user-circle-outline-gradient-style_78370-7034.jpg?ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-4 w-[250px] bg-[#424242] text-white ">
                <DropdownMenuLabel>
                  <div className="flex justify-center flex-col">
                    <img
                      src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R190067195&ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740" // Replace with actual path
                      alt="Profile"
                      className="w-16 h-16 mx-auto rounded-full object-cover bg-blue-500"
                    />
                    <h2 className="mt-1 text-white text-xl text-center font-bold">
                      Md Sujon Mia
                    </h2>
                    <p className="text-gray-400 text-center text-sm mt-1">
                      sujan25854@gmail.com
                    </p>

                    <Button className="mt-2 px-6 py-3 w-[120px] btn-bg mx-auto btn-bg font-bold rounded-lg hover:scale-105 transition-transform">
                      View Profile
                    </Button>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="" />
                <DropdownMenuItem>
                  {" "}
                  <Link to={"/my-product"}>My Product</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription </DropdownMenuItem>
                <DropdownMenuSeparator className="" />
                <DropdownMenuItem>
                  <Button className="bg-red-500 w-full text-white">
                    Log Out
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              className="border btn-bg  ml-2.5 rounded-md border-white text-white p-4"
              style={{ boxShadow: "1px 1px 10px" }}
            >
              <a href={auth.login.url}>{auth.login.title}</a>{" "}
              <LogInIcon className="ml-3" />
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden ">
          <div className="flex items-center justify-between">
            <a href="#" className=" text-white">
              <IoIosNotifications />
            </a>
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
            </a>
            <Sheet>
              <SheetTrigger className="text-white btn-bg" asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-white">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full  flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col btn-bg text-white rounded-md gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild></Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex text-white flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground ">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar };
