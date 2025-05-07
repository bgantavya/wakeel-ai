"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

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
  const speechToText = () => {
    return 0;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full px-4 py-3  border-t shadow-md">
  <div className="flex w-full max-w-4xl mx-auto gap-2 border-2 rounded-lg p-2">
    <Input
      className="flex-1 p-5 min-w-[200px]"
      placeholder="Type a message..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
    />
    <Button onClick={handleSend}>Send</Button>
    <Button onClick={speechToText} size="icon">
      <Mic />
    </Button>
  </div>
</div>

  );
};
