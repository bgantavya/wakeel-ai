'use client';

import { useState } from 'react';
import { ChatContainer } from './ChatContainer';
import { EmptyChatContainer } from './EmptyChatContainer';
type Message = {
  id: number;
  sender: string;
  text: string;
};
export const ChatWrapper = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (text: string) => {
    const newMessage = {
      id: Date.now(),
      sender: 'user',
      text,
    };
    setMessages((prev) => [...prev, newMessage]);

  };

  // if (messages.length === 0) {
  //   return ;
  // }

  return(

    <>
    <ChatContainer messages={messages} />
    <EmptyChatContainer onSend={addMessage} />
  </> 
  )
};
