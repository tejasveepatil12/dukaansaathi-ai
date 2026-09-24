"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Chat() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Namaste! I am your DukaanSaathi. I can help you analyze today's sales, generate a list of low-stock items, or draft promotional messages for your customers. How can I assist you today?" }
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      
      setMessages((prev) => [...prev, { role: 'ai', content: data.text }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'ai', content: "Sorry, I am having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 bg-gradient-to-br from-[#012B72] to-[#00BAF2] font-sans">
      <div className="max-w-2xl w-full bg-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[85vh]">
        
        {/* Header */}
        <div className="bg-[#012B72] p-4 flex items-center justify-between shadow-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner">
              <span className="text-xl font-extrabold text-[#012B72]">DS</span>
            </div>
            <div>
              <h2 className="text-white font-bold tracking-wide">DukaanSaathi AI</h2>
              <p className="text-[#00BAF2] text-xs font-semibold">● Online</p>
            </div>
          </div>
          <Link href="/" className="text-white text-sm font-medium hover:text-[#00BAF2] transition-colors">
            &larr; Back to Home
          </Link>
        </div>

        {/* Chat Message Area */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50 flex flex-col gap-4">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-2xl max-w-[80%] ${
                msg.role === 'ai' 
                  ? 'bg-white rounded-tl-none shadow-sm self-start border border-gray-100 text-gray-700' 
                  : 'bg-[#00BAF2] rounded-tr-none shadow-md self-end text-white'
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.content}</p>
            </div>
          ))}
          
          {isLoading && (
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] self-start border border-gray-100">
              <p className="text-sm text-gray-500 animate-pulse font-medium">Thinking...</p>
            </div>
          )}
        </div>

        {/* User Input Area */}
        <div className="p-4 bg-white border-t border-gray-100 flex gap-3">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask about sales, inventory, or customers..." 
            className="flex-1 bg-gray-100 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BAF2] transition-all"
          />
          <button 
            onClick={sendMessage}
            disabled={isLoading}
            className="bg-[#00BAF2] hover:bg-[#0096C7] disabled:opacity-50 text-white rounded-full px-6 py-3 font-semibold transition-all shadow-md"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}