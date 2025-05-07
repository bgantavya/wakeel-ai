'use client';

import { useState } from 'react';
import { ChatContainer } from './ChatContainer';
import { EmptyChatContainer } from './EmptyChatContainer';

export const ChatWrapper = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text: string) => {
    const newMessage = {
      id: Date.now(),
      sender: 'user',
      text,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  if (messages.length === 0) {
    return <EmptyChatContainer onSend={addMessage} />;
  }

  return <ChatContainer messages={messages} />;
};
