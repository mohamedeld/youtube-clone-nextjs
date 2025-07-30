"use client";
import { Button } from "@/components/ui/button"
import { ClapperboardIcon, UserCircleIcon } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import UserAvatar from "./UserAvatar";

const AuthButton = () => {
  const {data:session} = useSession();
    return (
    <>
    {session?.user ? <div className="flex items-center gap-3">
        <Link href="/studio" className="text-xs flex items-center gap-2 p-2 rounded-md shadow border">
        <ClapperboardIcon className="w-4 h-4"/>
        
        Studio</Link>
      <UserAvatar name={session?.user?.name} imageUrl={session?.user?.imageUrl}/>
    
    </div> : <Button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none cursor-pointer" variant={"outline"} asChild>
       <Link href="/login">
        <UserCircleIcon/>
        Sign in
        </Link>
    </Button>}
    </>
  )
}

export default AuthButton