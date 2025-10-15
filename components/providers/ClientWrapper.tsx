"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

interface ClientWrapperProps {
  children: React.ReactNode;
  session?: any; // server'dan gelecek session objesi
}

const ClientWrapper = ({ children, session }: ClientWrapperProps) => {
  return (
    <SessionProvider session={session} refetchInterval={60}>
      {children}
      {/* awdwadwa */}
    </SessionProvider>
  );
};

export default ClientWrapper;
