
"use client";

import { useState, useRef, useEffect } from "react";

type Msg = { role: "user" | "bot"; text: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;

    const textToSend = input;
    setInput(""); // clear instantly

    const userMsg: Msg = { role: "user", text: textToSend };
    setMessages((prev) => [...prev, userMsg]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, userMsg] }),
    });

    const data = await res.json();
    const botMsg: Msg = { role: "bot", text: data.text };
    setMessages((prev) => [...prev, botMsg]);
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating Button */}
<button
  onClick={() => setOpen(true)}
  className="fixed bottom-6 left-6 w-16 h-16 rounded-full shadow-xl bg-blue-600 flex items-center justify-center hover:scale-105 transition"
>

        <img src="/chat-icon.webp" className="w-9 h-9" alt="chat icon" />
      </button>

      {/* Chat Box */}
      {open && (
<div className="fixed bottom-28 left-6 w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col border">

          {/* Header */}
          <div className="p-3 border-b flex justify-between items-center">
            <span className="font-semibold text-black">Chatbot</span>
            <button onClick={() => setOpen(false)}>
              <span className="text-black text-xl font-bold">✕</span>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-xs px-3 py-2 rounded-xl text-sm ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white self-end ml-auto"
                    : "bg-white border text-blue-600 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2 bg-white">
            <input
              className="flex-1 border px-3 py-2 rounded-lg text-sm text-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
