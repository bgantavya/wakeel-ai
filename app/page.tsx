import { ChatWrapper } from '@/components/chat/ChatWrapper';
import { AppSidebar } from '@/components/sidebar/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-background text-foreground">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col flex-1">
          <SidebarTrigger />
          <ChatWrapper />
        </main>
      </SidebarProvider>
    </div>
  );
}
