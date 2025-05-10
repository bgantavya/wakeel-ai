"use client";

import { ChatWrapper } from "@/components/chat/ChatWrapper";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./ModeToggle";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <div className="flex min-h-screen w-screen bg-background text-foreground">
          {/* Sidebar */}
          <AppSidebar />

          {/* Main Content */}
          <div className="flex flex-col flex-1 p-5">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
              <SidebarTrigger className="p-3">
                <Menu className="w-8 h-8" />
              </SidebarTrigger>
              <ModeToggle />
            </div>

            {/* Centered Title */}
            <h1 className="text-7xl font-semibold text-center mx-auto mb-8">
              Vidhi 7.0
            </h1>

            {/* Chat Section */}
            <ChatWrapper />
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
