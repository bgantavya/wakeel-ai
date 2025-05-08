import { ChatMessage } from './ChatMessage';
// import { MoreVertical } from 'lucide-react';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

interface Props {
  messages: { id: number; sender: string; text: string }[];
}

export const ChatContainer = ({ messages }: Props) => {
  return (
    <div className="relative flex absolute top-0 right-0 flex-col m-0  text-center overflow-y-auto ">
      {/* Top-right menu */}
      {/* <div className="absolute top-5 right-0">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <MoreVertical className="w-5 h-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => console.log('Rename chat')}>Rename chat</DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log('Delete chat')}>Delete chat</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}

      {/* Messages */}
      {messages.map((msg) => (
        <ChatMessage key={msg.id} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
};
