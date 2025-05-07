import { ChatWrapper } from '@/components/chat/ChatWrapper';




export default function Home() {
  return (
    
        // <>
        // <ChatWrapper />
        // </>
        <div className="flex h-screen w-screen bg-background text-foreground">
        
           <main className="flex  p-20 flex-col flex-1">
           <h1 className="text-3xl justify-center font-semibold text-center mb-5">Apna Wakeel AI</h1>
             <ChatWrapper />
           </main>
           </div>
  );
}
