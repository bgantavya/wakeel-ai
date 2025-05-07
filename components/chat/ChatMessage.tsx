interface ChatMessageProps {
    sender: string;
    text: string;
  }
  
  export const ChatMessage = ({ sender, text }: ChatMessageProps) => {
    return (
      <div className={`p-3 rounded-xl my-2 max-w-lg ${
        sender === "user" ? 'ml-auto bg-blue-600 text-white' : 'mr-auto bg-muted'
      }`}>
        {text}
      </div>
    );
  };
  