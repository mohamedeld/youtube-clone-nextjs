"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface IProps{
    name:string;
    imageUrl:string;
}
const UserAvatar = ({name,imageUrl}:IProps) => {
  return (
    <Avatar>
      <AvatarImage src={imageUrl||"https://github.com/shadcn.png"} />
      <AvatarFallback>{name?.slice(2)?.toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
