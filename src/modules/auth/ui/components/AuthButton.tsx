"use client";
import { Button } from "@/components/ui/button"
import { UserCircleIcon } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import UserAvatar from "./UserAvatar";

const AuthButton = () => {
  const {data:session} = useSession();
    return (
    <>
    {session?.user ? <UserAvatar name={session?.user?.name} imageUrl={session?.user?.imageUrl}/> : <Button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none cursor-pointer" variant={"outline"} asChild>
       <Link href="/login">
        <UserCircleIcon/>
        Sign in
        </Link>
    </Button>}
    </>
  )
}

export default AuthButton