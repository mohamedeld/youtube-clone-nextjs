import { SidebarProvider } from "@/components/ui/sidebar";
import HomeNavbar from "../components/HomeNavbar";
import HomeSidebar from "../components/HomeSidebar";

interface IProps {
    children: React.ReactNode;
}
const HomeLayout = ({ children }: IProps) => {
    return (
        <SidebarProvider>
            <div className="w-full">
                <HomeNavbar/>
                <div className="flex min-h-screen pt-[4rem]">
                    <HomeSidebar/>
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>
                </div>

            </div>
        </SidebarProvider>
    )
}

export default HomeLayout