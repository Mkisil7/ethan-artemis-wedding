"use client";

import { useChat } from "ai/react";

export default function FAQ() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className="min-h-screen bg-sand text-med pb-24">
      <div className="pt-32 pb-12 text-center px-4">
        <h1 className="font-cursive text-5xl md:text-7xl mb-4 text-aegean">Guest Support</h1>
        <p className="text-med/70 font-medium tracking-widest uppercase text-sm">Ask our digital wedding assistant anything</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="bg-white border border-med/10 shadow-sm h-[600px] flex flex-col">
          
          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            <div className="flex self-start max-w-[80%] md:max-w-[70%]">
              <div className="bg-sand-dark px-6 py-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border border-med/5 shadow-sm text-med/90">
                Hi! I'm the digital assistant for Ethan & Artemis's wedding. Ask me any questions about the schedule, travel, dress code, or accommodations!
              </div>
            </div>

            {messages.map((m) => (
              <div 
                key={m.id} 
                className={`flex max-w-[80%] md:max-w-[70%] ${m.role === 'user' ? 'self-end' : 'self-start'}`}
              >
                <div 
                  className={`px-6 py-4 border shadow-sm text-sm md:text-base leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-aegean text-sand border-aegean rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl' 
                      : 'bg-sand-dark text-med border-med/5 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex self-start max-w-[80%]">
                <div className="bg-sand-dark px-5 py-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border border-med/5 text-med/50 flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 bg-med/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-med/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-med/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-med/10 bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
            <form onSubmit={handleSubmit} className="relative flex">
              <input
                className="flex-1 bg-sand/30 border border-med/20 py-4 pl-6 pr-28 outline-none focus:border-aegean transition-colors text-med placeholder:text-med/40 rounded-sm"
                value={input}
                onChange={handleInputChange}
                placeholder="What's the dress code again?"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 bottom-2 bg-med text-sand px-6 font-semibold tracking-wider uppercase text-xs hover:bg-aegean transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-sm"
              >
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
