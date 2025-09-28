import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react"; // npm i lucide-react framer-motion
import { BsStars } from "react-icons/bs";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-9 left-9 z-59">
      {/* Animated Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-72 h-96 bg-white shadow-xl rounded-xl flex flex-col border border-gray-200"
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] text-white px-3 py-2 rounded-t-xl">
              <h2 className="text-sm font-semibold">
                <div className="flex justify-center items-center gap-2"><BsStars />DishaAI</div></h2>
              <button onClick={() => setOpen(false)}>
                <X size={18} className="cursor-pointer" />
              </button>
            </div>

            {/* Chat content */}
            <div className="flex-1 p-3 overflow-y-auto text-sm">
              <p className="text-gray-600">👋 Hello! How can I help you today?</p>
            </div>

            {/* Input */}
            <div className="p-2 border-t flex">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none"
              />
              <button className="ml-2 px-3 py-1 bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] text-white rounded">
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with bounce animation */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          className="w-15 h-15 bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] rounded-full flex items-center justify-center text-white shadow-lg"
          animate={{
            y: [0, -6, 0], // floating bounce
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <MessageCircle size={27} className="cursor-pointer" />
        </motion.button>
      )}
    </div>
  );
};

export default ChatBot;
