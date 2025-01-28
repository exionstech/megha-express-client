"use client"
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'About',
        link: '/about'
    },
    {
        title: 'Track Package',
        link: '/track-package'
    },
    {
        title: 'Contact Us',
        link: '/contact'
    }
]

const NavitemSection = () => {
    const pathname = usePathname();
  return (
    <div className='flex md:flex-row flex-col md:gap-10 gap-6'>
      {navItems.map((item, index) => {
        const active =
        pathname === item.link ||
        (pathname.startsWith(item.link) && item.link !== "/");
        return (
            <a
                key={index}
                href={item.link}
                className={cn("text-black text-lg", active && "text-red")}
            >
                {item.title}
            </a>
        )
      })}
    </div>
  )
}

export default NavitemSection
