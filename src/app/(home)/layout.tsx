import HomeLayout from "@/modules/home/ui/layouts/HomeLayout";

interface IProps{
    children: React.ReactNode;
}
const Layout = ({children}:IProps) => {
  return (
    <HomeLayout>{children}</HomeLayout>
  )
}

export default Layout