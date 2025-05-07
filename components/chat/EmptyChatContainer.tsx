"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  onSend: (text: string) => void;
}

export const EmptyChatContainer = ({ onSend }: Props) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
  };

  return (
    <div className="relative flex flex-col flex-1 items-center justify-center h-full p-4">
      <div className="max-w-2xl w-full">
        <div className="flex gap-2 border rounded-lg p-2">
          <Input
            className="flex-1"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
};
