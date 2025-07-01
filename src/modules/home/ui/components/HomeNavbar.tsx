import { SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import SearchInput from "./SearchInput"
import AuthButton from "@/modules/auth/ui/components/AuthButton"

const HomeNavbar = () => {
  return (
    <nav className="fixed left-0 top-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
        <div className="flex items-center gap-4 w-full">
            <div className="flex items-center flex-shrink-0 ">
                <SidebarTrigger />
                <Link href="/">
                <div className="p-4 flex items-center gap-1">
                    <Image src="/youtube.jpg" alt="youtube image" width={32} height={32} className="object-cover cursor-pointer"/>
                    <p className="text-xl font-semibold tracking-tight">NewTube</p>
                </div>
                </Link>
            </div>
            {/* searchbar */}
            <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
                <SearchInput/>
            </div>
            <div className="flex-shrink-0 items-center flex gap-4">
                <AuthButton/>
            </div>
        </div>
    </nav>
  )
}

export default HomeNavbar