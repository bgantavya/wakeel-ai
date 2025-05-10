"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic, SendIcon, Upload } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  onSend: (text: string) => void;
  hasMessages: boolean;
}

export const EmptyChatContainer = ({ onSend, hasMessages }: Props) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
   <div
  className={` max-w-3xl w-full border border-[hsl(var(--border))] mx-auto bg-[hsl(var(--input))] dark:bg-[hsl(var(--input))] ${
    hasMessages
      ? "fixed bottom-5 left-1/2 -translate-x-1/2 w-full border-t rounded-xl"
      : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-xl"
  }`}
>
  <form action="" method="get" className="space-y-3 w-full max-w-4xl mb-4 mx-auto">
    {/* Text input container */}
    <div className="flex items-center gap-2 rounded-xl bg-inherit px-3 pt-2 border border-border">
      <Textarea
        className="flex-1 h-5 resize-none border-none bg-inherit text-[hsl(var(--foreground))] placeholder-[hsl(var(--muted-foreground))] focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Type your legal problem here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>

    {/* File upload + buttons */}
    <div className="flex items-center gap-2 px-3">
      <label htmlFor="fileUpload" className="cursor-pointer rounded-full p-2 hover:bg-muted transition-colors">
        <Upload className="w-5 h-5" />
      </label>
      <Input type="file" id="fileUpload" className="hidden" />

    <p className="text-xs text-muted-foreground text-center ml-auto pb-2">
      AI Assistant can make mistakes. Consider checking important information.
    </p>
      <div className="ml-auto flex gap-2">
        <Button type="button" onClick={handleSend} className="rounded-full">
          <SendIcon className="w-4 h-4" />
        </Button>
        <Button type="button" onClick={() => {}} size="icon" className="rounded-full">
          <Mic className="w-4 h-4" />
        </Button>
      </div>
    </div>

    {/* Disclaimer */}
  </form>
</div>
  );
};
