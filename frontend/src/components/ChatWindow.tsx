import MessageBubble from "./MessageBubble";
import InputBox from "./InputBox";
import { useState } from "react";

const ChatWindow = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (userInput: string) => {
    if (!userInput.trim()) return;

    setMessages([
      ...messages,
      `🙋‍♂️ ${userInput}`,
      "⏳ Thinking... It will take some time for solving you problem",
    ]);
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/dharm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev.slice(0, -1), `🧘‍♂️ ${data.output}`]);
    } catch (error) {
      setMessages((prev) => [...prev, "❌ Error getting response"]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} message={msg} />
        ))}
      </div>
      <InputBox onSend={handleSend} disabled={isLoading} />
    </div>
  );
};

export default ChatWindow;
