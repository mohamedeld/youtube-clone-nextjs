import StudioLayout from "@/modules/studio/ui/layouts/studio-layout";

interface IProps{
    children: React.ReactNode;
}
const Layout = ({children}:IProps) => {
  return (
    <StudioLayout>{children}</StudioLayout>
  )
}

export default Layout