'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const ChatInput = () => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    // placeholder for send logic
    console.log('User sent:', input);
    setInput('');
  };

  return (
    <div className="flex gap-2 p-4 border-t">
      <Input
        className="flex-1"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleSend}>Send</Button>
    </div>
  );
};
