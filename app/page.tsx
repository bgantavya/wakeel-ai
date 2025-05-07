
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
// import Image from "next/image";
import {Button} from "@/components/ui/button"
import {ModeToggle} from "./ModeToggle"
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>
        Wakeel AI
      </h1>
      <ModeToggle/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button>
          ShadCN@2.3.0(Next.js)
        </Button>
      </main>

    </div>
  );
  
}
