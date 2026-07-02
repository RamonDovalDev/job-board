import AppSidebarClient from "@/components/sidebar/AppSidebarClient";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React, { ReactNode } from "react";

const HomePage = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
        <Sidebar collapsible="icon" className="overflow-hidden">
          <SidebarHeader className="flex-row">
            <SidebarTrigger />
            <span className="text-xl text-nowrap">RD Jobs</span>
          </SidebarHeader>
          <SidebarContent>El contenido que sea</SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>Botón del Footer</SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1">{children}</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
};

export default HomePage;
