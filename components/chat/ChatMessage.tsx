interface ChatMessageProps {
    sender: string;
    text: string;
  }
  
  export const ChatMessage = ({ sender, text }: ChatMessageProps) => {
    return (
      <div className={`p-1 pl-4 pr-4 rounded-xl my-2 max-w-lg ${
        sender === "user" ? 'ml-auto text-white' : 'mr-auto bg-muted'
      }`}  style={sender === "user" ? { backgroundColor: '#1d90e9' } : {}}>
        {text}
      </div>
    );
  };
  