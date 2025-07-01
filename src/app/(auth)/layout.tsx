interface IProps{
    children: React.ReactNode;
}

const AuthLayout = ({children}:IProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">{children}</div>
  )
}

export default AuthLayout