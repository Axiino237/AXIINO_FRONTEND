import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, CornerDownLeft } from "lucide-react";

const PREDEFINED_QA = [
  {
    question: "What services do you offer?",
    answer: "Axiino Technologies specializes in Full-Stack Web Development (React/Next.js), Mobile Application Development (React Native), AI/LLM Integrations, Cloud DevOps, and Premium UI/UX Product Designs!"
  },
  {
    question: "How can I contact the team?",
    answer: "You can reach us directly via email at axiino237@gmail.com or call our team at +91 93613 95699! You can also submit an inquiry on our Contact page."
  },
  {
    question: "Tell me about UMSHIV Group",
    answer: "Axiino is proud to be part of the UMSHIV Group of Companies, which houses premier brands across technology, travel, design, events, and brand experiences."
  },
  {
    question: "Where are you located?",
    answer: "We are headquartered in Chennai, Tamil Nadu, India, but we serve elite clients across US, EU, and Asian markets."
  }
];

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! I am the Axiino AI Assistant. How can I help fast-track your product today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    if (!textToSend.trim()) return;

    // 1. Add User Message
    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    // 2. Trigger Typing Animation
    setIsTyping(true);

    setTimeout(() => {
      // 3. Find matching response or default response
      const matched = PREDEFINED_QA.find(
        (qa) => qa.question.toLowerCase() === textToSend.toLowerCase()
      );

      let botReplyText = "";
      if (matched) {
        botReplyText = matched.answer;
      } else {
        if (inputLower.includes("current cm")) {
          botReplyText = "The Current CM of Tamil Nadu is Thiru. M. K. Stalin. If you mean UMSHIV Group's Founder & Chief Manager (CM), it is Thiru. Vijay!";
        } else if (inputLower.includes("next cm")) {
          botReplyText = "For Tamil Nadu, the popular discussion for the Next CM (2026 Assembly Elections) centers around TVK Leader Thalapathy Vijay or Udhayanidhi Stalin! For UMSHIV Group, the founder is Vijay.";
        } else if (inputLower.includes("service") || inputLower.includes("stack") || inputLower.includes("offer") || inputLower.includes("skills") || inputLower.includes("tech") || inputLower.includes("develop")) {
          botReplyText = "Axiino Technologies provides elite solutions in Full-Stack Web Development (React, Next.js, Node.js), Mobile App Development (React Native, Expo), AI integrations (LLMs, OpenAI, Supabase Vector search), Cloud Architecture (DevOps, AWS, Vercel), and premium UI/UX Design!";
        } else if (inputLower.includes("contact") || inputLower.includes("phone") || inputLower.includes("number") || inputLower.includes("call") || inputLower.includes("mobile") || inputLower.includes("email") || inputLower.includes("mail") || inputLower.includes("address") || inputLower.includes("location") || inputLower.includes("chennai")) {
          botReplyText = "You can contact Axiino Technologies via phone at +91 93613 95699 or by emailing us at axiino237@gmail.com. Our headquarters are in Chennai, Tamil Nadu, India, and we serve clients globally.";
        } else if (inputLower.includes("umshiv") || inputLower.includes("group") || inputLower.includes("company") || inputLower.includes("travels") || inputLower.includes("weds") || inputLower.includes("arise")) {
          botReplyText = "Axiino is an integral branch of the UMSHIV Group of Companies, which also comprises Uma Travels, Arise Design, Weds Arts, and The First Step Solution. We built the official UMSHIV Group corporate portal at https://www.umshiv.com/.";
        } else if (inputLower.includes("project") || inputLower.includes("work") || inputLower.includes("portfolio") || inputLower.includes("completed") || inputLower.includes("creativix") || inputLower.includes("first step") || inputLower.includes("website")) {
          botReplyText = "Our completed works include: \n1. Creativix Agency: A high-end web presence.\n2. UMSHIV Group: The corporate portal (https://www.umshiv.com/).\n3. The First Step Solutions: Interactive brand activation event showcase (https://thefirstsetpsolution.com).\nYou can view full details in our 'Works' tab!";
        } else if (inputLower.includes("instagram") || inputLower.includes("insta") || inputLower.includes("linkedin") || inputLower.includes("social") || inputLower.includes("page")) {
          botReplyText = "Connect with us on our socials! \n- Instagram: https://www.instagram.com/_axiino_?igsh=MTM2YXcyMzF6ajZ6dA== \n- LinkedIn: https://www.linkedin.com/company/axiino-tech";
        } else if (inputLower.includes("terms") || inputLower.includes("privacy") || inputLower.includes("legal") || inputLower.includes("policy")) {
          botReplyText = "You can review our Terms & Conditions and Privacy Policy by clicking the links directly in our footer. They open clean interactive overview modals on the fly!";
        } else if (inputLower.includes("hello") || inputLower.includes("hi") || inputLower.includes("hey") || inputLower.includes("sup") || inputLower.includes("whatsapp") || inputLower.includes("vanakkam")) {
          botReplyText = "Hello! How can I help you today? Ask me about our projects, contact info, tech stack, or the UMSHIV Group of Companies!";
        } else {
          botReplyText = "Thanks for your inquiry! Our technology directors will reply back shortly. You can also contact us directly via email at axiino237@gmail.com or call +91 93613 95699.";
        }
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: botReplyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 selection:bg-blue-500/30">
      <AnimatePresence>
        {/* Chat Window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 150 }}
            className="w-[90vw] sm:w-[400px] h-[550px] mb-4 bg-[#090f1d]/90 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-blue-900/40 to-fuchsia-900/40 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-slate-900 shadow-[0_0_8px_#4ade80]" />
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400">
                    <Bot size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Axiino AI Client</h4>
                  <p className="text-[10px] text-slate-400">Online | Architecture Support</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Body Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-white/5 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 max-w-[85%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : ""
                    }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-semibold ${msg.sender === "user"
                        ? "bg-fuchsia-500/10 border border-fuchsia-400/20 text-fuchsia-400"
                        : "bg-blue-500/10 border border-blue-400/20 text-blue-400"
                      }`}
                  >
                    {msg.sender === "user" ? <User size={14} /> : <Bot size={14} />}
                  </div>

                  <div className="space-y-1">
                    <div
                      className={`p-3.5 rounded-[1.25rem] text-xs leading-relaxed ${msg.sender === "user"
                          ? "bg-gradient-to-br from-fuchsia-600 to-purple-600 text-white rounded-tr-none"
                          : "bg-white/5 border border-white/5 text-slate-200 rounded-tl-none"
                        }`}
                    >
                      {msg.text}
                    </div>
                    <span className="block text-[9px] text-slate-500 px-1 text-right">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3.5 rounded-[1.25rem] rounded-tl-none flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions Panel */}
            {messages.length === 1 && !isTyping && (
              <div className="px-5 pb-3 pt-1 border-t border-white/5 bg-slate-950/20">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Suggested Questions</p>
                <div className="flex flex-wrap gap-2">
                  {PREDEFINED_QA.map((qa, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(qa.question)}
                      className="text-[10px] font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 border border-white/10 px-3 py-1.5 rounded-full transition-all duration-200"
                    >
                      {qa.question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputText);
              }}
              className="p-4 bg-slate-950/40 border-t border-white/5 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about pricing, stack, availability..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-all duration-200"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shrink-0 transition-colors disabled:opacity-40 disabled:hover:bg-blue-600"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-fuchsia-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(192,132,252,0.6)] border border-white/10 transition-all duration-300 relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-fuchsia-600 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare size={24} />
              {/* Pulsing indicator */}
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 border-2 border-blue-600 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 border-2 border-blue-600 rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

export default Chatbot;
