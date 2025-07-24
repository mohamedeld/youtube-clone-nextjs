"use client";

import { SessionProvider } from "next-auth/react";

interface IProps{
    children:React.ReactNode
}
const SessionClientProvider = ({children}:IProps) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default SessionClientProvider