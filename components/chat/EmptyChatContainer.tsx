"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic, Upload } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  onSend: (text: string) => void;
  hasMessages: boolean; // 🔹 Add this prop to track chat state
}

export const EmptyChatContainer = ({ onSend, hasMessages }: Props) => {
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
    <div
    className={`z-10 w-screen w-full px-4 py-3 shadow-md transition-all
      ${
        hasMessages
          ? "fixed bottom-0 left-0 border-t "
          : "absolute top-1/2 left-1/2 w-fit transform -translate-x-1/2 -translate-y-1/2 border rounded-lg"
      }
    `}
  >
    <div className="flex w-full max-w-4xl mx-auto gap-2 p-2 border-2 rounded-lg bg-white dark:bg-gray-900">
      <label htmlFor="myFile" className="cursor-pointer flex items-center">
        <Upload />
      </label>
      <Input
        type="file"
        id="myFile"
        name="filename"
        className="hidden"
      />
      <Textarea
        className="flex-1 h-20 p-2 min-w-[200px]"
        placeholder="Type a legal problem..."
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
