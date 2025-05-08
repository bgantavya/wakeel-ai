
import {
  HistoryIcon,
  HomeIcon,
  // NetworkIcon,
  PersonStanding,
  // Search,
  Settings,
  MoreVertical,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "#", icon: HomeIcon },
  { title: "Hire A Lawyer", url: "#", icon: PersonStanding },
  // { title: "History", url: "#recentChats", icon: HistoryIcon },
  // { title: "My Organisation", url: "#", icon: NetworkIcon },
  // { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

const recentChats = [
  { title: "chat1", url: "#", icon: HistoryIcon },
  { title: "chat2", url: "#", icon: HistoryIcon },
  { title: "chat3", url: "#", icon: HistoryIcon },
  { title: "chat4", url: "#", icon: HistoryIcon },
  { title: "chat5", url: "#", icon: HistoryIcon },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Vidhi 7.0</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarGroupLabel>Recent Chats</SidebarGroupLabel>
              {recentChats.map((chat) => (
                <SidebarMenuItem key={chat.title} className="relative">
                  <SidebarMenuButton asChild>
                    <a href={chat.url} className="flex items-center gap-2 pr-8">
                      <chat.icon className="w-5 h-5" />
                      <span>{chat.title}</span>
                    </a>
                  </SidebarMenuButton>

                  {/* Dropdown menu button in the top right of the item */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="focus:outline-none">
                        <MoreVertical className="w-4 h-4 text-muted-foreground" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          Rename chat
                        </DropdownMenuItem>
                        <DropdownMenuItem >
                          Delete chat
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </SidebarMenuItem>
              
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
