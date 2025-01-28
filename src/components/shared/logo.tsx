import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface LogoProps {
    className?: string
}

const Logo = (
    { className }: LogoProps
) => {
  return (
    <Link href={"/"} className={cn("cursor-pointer", className)}>
        <Image
            src="/logo.svg"
            alt="logo"
            width={150}
            height={150}
            className="shrink-0 md:flex hidden"
        />
        <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="shrink-0 md:hidden"
        />
    </Link>
  )
}

export default Logo
