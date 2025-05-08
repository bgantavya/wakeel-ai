import { ChatWrapper } from '@/components/chat/ChatWrapper';

export default function Home() {
  return (
    <div className="flex flex-col p-5 min-h-screen w-screen bg-background text-foreground">
      {/* <main className="flex flex-col flex-1 w-full w-screen p-5"> */}
        <h1 className="text-5xl font-semibold text-center m-5 mx-auto w-fit">Vidhi 7</h1>
        <ChatWrapper />
      {/* </main> */}
    </div>
  );
}
