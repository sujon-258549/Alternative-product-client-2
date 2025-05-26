import { LogInIcon, Menu } from "lucide-react";
import { NavLink as RouterNavLink } from "react-router-dom";
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import DropDown from "./DropDowt";
import { useAppSelector } from "@/redux/features/hooks";
import { userCurrentUser } from "@/redux/features/auth/authSlice";
import { TUser, UserTokenPayload } from "@/types/user";
import { useGetMeQuery } from "@/redux/features/auth/authApi";

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

type TUserData = {
  data: TUser;
};

const Navbar = ({
  logo = {
    url: "/",
    src: "https://i.ibb.co.com/Z6Yz672w/image-removebg-preview-2.png",
    alt: "logo",
    title: "Product",
  },
  menu,
  auth = {
    login: { title: "Login", url: "/login" },
  },
}: Navbar1Props) => {
  const userData = useAppSelector(userCurrentUser) as UserTokenPayload;
  const email = userData?.userInfo?.email;
  const { data } = useGetMeQuery(undefined);
  const user = data as TUserData | undefined;
  console.log(user?.data);
  // Default menu if not provided
  const computedMenu = menu ?? [
    { title: "Home", url: "/" },
    { title: "All Product", url: "/all-product" },
    ...(email ? [{ title: "Add Product", url: "/add-product" }] : []),
    { title: "About", url: "/about-page" },
  ];
  // const pathname = usePathname();
  const CustomNavLink = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2.5 text-white font-medium no-underline transition-colors rounded-md
        hover:text-yellow-300 hover:bg-white/10
        ${isActive ? "text-yellow-300 font-bold bg-white/20 border-l-6 border-yellow-300" : ""}`
      }
    >
      {children}
    </RouterNavLink>
  );

  const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger className="text-white">
            {item.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#424242] text-white">
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title}>
                <CustomNavLink to={subItem.url}>
                  <div className="flex items-center gap-2">
                    {subItem.icon}
                    {subItem.title}
                  </div>
                </CustomNavLink>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem key={item.title}>
        <CustomNavLink to={item.url}>{item.title}</CustomNavLink>
      </NavigationMenuItem>
    );
  };

  const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <AccordionItem
          key={item.title}
          value={item.title}
          className="border-b-0"
        >
          <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline text-white">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2 pl-4">
            {item.items.map((subItem) => (
              <CustomNavLink key={subItem.title} to={subItem.url}>
                <div className="flex items-center gap-2 py-2">
                  {subItem.icon}
                  {subItem.title}
                </div>
              </CustomNavLink>
            ))}
          </AccordionContent>
        </AccordionItem>
      );
    }

    return (
      <CustomNavLink key={item.title} to={item.url}>
        {item.title}
      </CustomNavLink>
    );
  };

  return (
    <section className="py-4 border-b border-white bg-[#424242]">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between items-center lg:flex">
          <a href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} className="max-h-10" alt={logo.alt} />
            <span className="text-2xl -ml-2 text-white font-bold tracking-tighter">
              {logo.title}
            </span>
          </a>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-2 nav">
              {computedMenu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex gap-2 items-center">
            {email && <DropDown />}
            {!email && (
              <CustomNavLink to={auth.login.url}>
                <Button
                  className="border btn-bg cursor-pointer ml-2.5 rounded-md border-white text-white p-4"
                  style={{ boxShadow: "1px 1px 10px" }}
                >
                  {auth.login.title} <LogInIcon className="ml-3" />
                </Button>
              </CustomNavLink>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
            </a>
            <div className="flex gap-5">
              {email && <DropDown />}
              <Sheet>
                <SheetTrigger className="text-white btn-bg" asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto bg-[#424242]">
                  <SheetHeader className="border-b-white border-b mx-2">
                    <SheetTitle>
                      <a href={logo.url} className="flex items-center gap-2">
                        <img
                          src={logo.src}
                          className="max-h-8"
                          alt={logo.alt}
                        />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4 text-white">
                    <Accordion
                      type="single"
                      className="flex w-full flex-col gap-4"
                    >
                      {computedMenu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                    {!email && (
                      <CustomNavLink to={auth.login.url}>
                        <Button
                          className="border btn-bg cursor-pointer w-full rounded-md border-white text-white p-4"
                          style={{ boxShadow: "1px 1px 10px" }}
                        >
                          {auth.login.title} <LogInIcon className="ml-3" />
                        </Button>
                      </CustomNavLink>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Navbar };
