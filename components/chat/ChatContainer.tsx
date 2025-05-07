import { ChatMessage } from './ChatMessage';
import { MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Props {
  messages: { id: number; sender: string; text: string }[];
}

export const ChatContainer = ({ messages }: Props) => {
  return (
    <div className="relative flex flex-col p-4 overflow-y-auto h-[calc(100vh-120px)]">
      {/* Top-right menu */}
      <div className="absolute top-4 right-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <MoreVertical className="w-5 h-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => console.log('Rename chat')}>Rename chat</DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log('Delete chat')}>Delete chat</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Messages */}
      {messages.map((msg) => (
        <ChatMessage key={msg.id} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
};
