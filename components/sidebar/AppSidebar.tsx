
import {
  HistoryIcon,
  // HomeIcon,
  // NetworkIcon,
  PersonStanding,
  // Search,
  Settings,
  Plus,
  MoreHorizontal,
  MoreVertical,
  Settings2Icon,
  Scale,
  Scale3DIcon,
  LucideScale,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  SidebarFooter
  ,Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";

const recentChats = [
  { id:1, title: "chat1", url: "#", icon: HistoryIcon, date:"X days ago" },
  { id:2, title: "chat2", url: "#", icon: HistoryIcon, date:"X days ago" },
  { id:3, title: "chat3", url: "#", icon: HistoryIcon, date:"Y days ago" },
  { id:4, title: "chat4", url: "#", icon: HistoryIcon, date:"Y days ago" },
  { id:5, title: "chat5", url: "#", icon: HistoryIcon, date:"Z days ago" },
]

export function AppSidebar() {
  return (
    <Sidebar className="w-72">
      <SidebarHeader>
        <header className="text-center text-2xl font-semibold p-5 pb-0">Vidhi 7.0</header>
        <div className="p-4 border-b border-none">
            <Button
              variant="default"
              className="w-full justify-start gap-2"
              // onClick = {newChat}
            >
              <Plus size={16} />
              New chat
            </Button>
          </div>
      </SidebarHeader>
<SidebarContent>
      {recentChats.map((chat) => (
            <div
              key={chat.id}
              className="p-2 hover:bg-muted flex justify-between items-start cursor-pointer"
              // onClick={() => setSelectedChat(chat.id, dummyMessages[chat.id])}
            >
              <div className="flex flex-col gap-1">
                <span className="font-medium">{chat.title}</span>
                <span className="text-xs text-muted-foreground">
                  {chat.date}
                </span>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    // onClick={(e) => {e.stopPropagation()}} // Prevent chat selection when clicking menu
                    className="p-1 rounded hover:bg-accent"
                  >
                    <MoreHorizontal size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" align="start">
                  <DropdownMenuItem>Rename</DropdownMenuItem>
                  <DropdownMenuItem>Delete Chat</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </SidebarContent>
            <SidebarFooter className="fixed bottom-0">
          <div className="p-4 m-0 border-t border-none pb-0 text-center w-full flex justify-center">
            <Button variant="default" className="gap-2">
              <LucideScale size={20} />
              Consult a Lawyer
            </Button>
          </div>
                <SidebarMenuButton asChild>
                  <a href="#" className="p-5 mb-8 flex ">
                    <Settings2Icon className="w-5 h-5 " />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
            </SidebarFooter>
    </Sidebar>

  );
}
