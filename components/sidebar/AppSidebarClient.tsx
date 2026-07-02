"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import React, { ReactNode } from "react";
import { SidebarTrigger } from "../ui/sidebar";

const AppSidebarClient = ({ children }: { children: ReactNode }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full flex flex-col">
        <div className="p-2 border-b flex items-center gap-1">
          <SidebarTrigger />
          <span className="text-xl">RD Jobs</span>
        </div>
        <div className="flex flex-1">{children}</div>
      </div>
    );
  }

  return children;
};

export default AppSidebarClient;
