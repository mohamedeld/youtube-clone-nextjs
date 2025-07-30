import { cva, VariantProps } from "class-variance-authority";
import { Avatar, AvatarImage } from "./avatar";
import { cn } from "@/lib/utils";

const avatarVariants = cva("",{
    variants:{
        size:{
            default:"h-9 w-9",
            xs:"h-4 w-4",
            sm:"h-6 w-6",
            lg:"x-10 h-10",
            xl:"x-[160px] h-[160px]"
        }
    },
    defaultVariants:{
        size:"default"
    }
})

interface IProps extends VariantProps<typeof avatarVariants>{
    imageUrl:string;
    name:string;
    className?:string;
    onClick?:()=>void;
}

const CustomUserAvatar = ({imageUrl,name,size,className,onClick}:IProps) => {
  return (
    <Avatar className={cn(avatarVariants({size,className}))} onClick={onClick}>
        <AvatarImage src={imageUrl} alt={name}/>
    </Avatar>
  )
}

export default CustomUserAvatar