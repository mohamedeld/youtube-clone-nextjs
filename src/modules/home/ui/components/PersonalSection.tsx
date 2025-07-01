"use client";

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuSubItem } from "@/components/ui/sidebar";
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

const items = [
    {
        title: "History",
        url: "/playlist/history",
        icon: HistoryIcon,
        auth:true
    },
    {
        title: "Liked Videos",
        url: "/playlist/liked",
        icon: ThumbsUpIcon,
        auth: true
    },
    {
        title: "All Playlists",
        url: "/playlist/trending",
        icon: ListVideoIcon,
        auth:true
    },

]
const PersonalSection = () => {
    
    return (
        <SidebarGroup>
            <SidebarGroupLabel></SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items?.map((item) => (
                        <SidebarMenuSubItem key={item?.title}>
                            <SidebarMenuButton
                                tooltip={item?.title}
                                asChild
                                isActive={false}
                                onClick={() => { }}
                            >
                                <Link href={item?.url} className="flex items-center gap-4 ">
                                    <item.icon />
                                    <span className="text-sm">{item?.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuSubItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}

export default PersonalSection