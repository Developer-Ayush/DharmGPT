const MessageBubble = ({ message }: { message: string }) => {
  return (
    <div className="message-bubble">
      {message.split("\n").map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </div>
  );
};

export default MessageBubble;
