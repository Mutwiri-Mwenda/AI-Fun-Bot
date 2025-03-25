import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const FunBot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch (error) {
      setResponse("Oops! Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-2xl shadow-xl">
        <h2 className="text-xl font-bold mb-4">🤖 Fun Bot</h2>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask me something..." />
        <Button onClick={sendMessage} disabled={loading}>
          {loading ? "Thinking..." : "Send"}
        </Button>
        {response && <p className="mt-4 text-lg font-semibold text-blue-300">{response}</p>}
      </div>
    </div>
  );
};

export default FunBot;
