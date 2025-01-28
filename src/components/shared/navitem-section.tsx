"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Track Package",
    link: "/track-package",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

const NavitemSection = () => {
  const pathname = usePathname();
  return (
    <div className="flex md:flex-row flex-col lg:gap-10 gap-5">
      {navItems.map((item) => {
        const active =
          pathname === item.link ||
          (pathname.startsWith(item.link) && item.link !== "/");
        
        return (
          <div key={item.link}>
            {/* Desktop Link */}
            <Link
              href={item.link}
              className={cn(
                "text-customBlack font-medium md:flex hidden",
                active && "text-red"
              )}
            >
              {item.title}
            </Link>
            {/* Mobile Link */}
            <Link
              href={item.link}
              className={cn(
                "text-customBlack font-medium md:hidden p-2 rounded-lg flex justify-center items-center bg-gray-50",
                active && "text-red bg-gray-100"
              )}
            >
              {item.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavitemSection;