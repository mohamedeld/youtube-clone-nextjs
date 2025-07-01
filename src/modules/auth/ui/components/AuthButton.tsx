import { Button } from "@/components/ui/button"
import { UserCircleIcon } from "lucide-react"

const AuthButton = () => {
  return (
    <Button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none cursor-pointer" variant={"outline"}>
        <UserCircleIcon/>
        Sign in
    </Button>
  )
}

export default AuthButton