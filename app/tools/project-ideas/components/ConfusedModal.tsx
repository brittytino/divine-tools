// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Bot, Send, Sparkles, MessageSquare, HelpCircle } from "lucide-react";

// export function ConfusedModal() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState("");
//   const [chatHistory, setChatHistory] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [showHelp, setShowHelp] = useState(false);

//   const handleSendMessage = async () => {
//     if (!message.trim()) return;

//     const newMessage = { role: "user" as const, content: message };
//     setChatHistory(prev => [...prev, newMessage]);
//     setMessage("");
//     setIsTyping(true);

//     // Simulate AI response (replace with actual API call)
//     setTimeout(() => {
//       const aiResponse = {
//         role: "assistant" as const,
//         content: "I understand you're looking for project guidance. Based on your interests, I'd recommend exploring a project that combines modern web technologies with practical applications. Would you like me to suggest some specific project ideas in your domain?"
//       };
//       setChatHistory(prev => [...prev, aiResponse]);
//       setIsTyping(false);
//     }, 2000);
//   };

//   return (
//     <>
//       <Button
//         variant="outline"
//         size="icon"
//         className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
//         onClick={() => setShowHelp(true)}
//       >
//         <HelpCircle className="h-5 w-5 text-white/70" />
//       </Button>

//       <Dialog open={showHelp} onOpenChange={setShowHelp}>
//         <DialogContent className="bg-neutral-900/95 backdrop-blur-xl border-white/10">
//           <DialogHeader>
//             <DialogTitle className="text-xl font-bold text-white">
//               Need Help?
//             </DialogTitle>
//             <DialogDescription>
//               <div className="space-y-4 text-white/70">
//                 <p className="text-sm">
//                   Hi! I'm your AI project assistant. I can help you:
//                 </p>
//                 <ul className="list-disc list-inside space-y-1 text-sm">
//                   <li>Understand project requirements</li>
//                   <li>Choose the right tech stack</li>
//                   <li>Break down complex features</li>
//                   <li>Plan project architecture</li>
//                   <li>Estimate timelines</li>
//                 </ul>
//                 <p className="text-sm">
//                   Feel free to ask any questions about your project ideas or
//                   technical challenges. I'm here to guide you through the process!
//                 </p>
//               </div>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>

//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogTrigger asChild>
//           <Button
//             variant="outline"
//             size="icon"
//             className="fixed bottom-6 right-24 h-12 w-12 rounded-full bg-emerald-400 text-black hover:bg-emerald-500 hover:shadow-[0_0_12px_#34d399] transition-all duration-300"
//           >
//             <Bot className="h-5 w-5" />
//           </Button>
//         </DialogTrigger>
//         <DialogContent className="bg-neutral-900/95 backdrop-blur-md border-white/10 rounded-2xl sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle className="text-white flex items-center gap-2">
//               <Bot className="h-5 w-5 text-emerald-400" />
//               AI Project Assistant
//             </DialogTitle>
//           </DialogHeader>
//           <div className="flex flex-col h-[60vh]">
//             <div className="flex-1 overflow-y-auto p-4 space-y-4">
//               <div className="bg-emerald-400/20 text-emerald-400 p-4 rounded-lg border border-emerald-400/30">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Sparkles className="h-4 w-4" />
//                   <span className="font-medium">AI Project Assistant</span>
//                 </div>
//                 <div className="space-y-2">
//                   <p className="text-sm">
//                     Hi! I'm your AI project assistant. I can help you:
//                   </p>
//                   <ul className="list-disc list-inside space-y-1 text-sm">
//                     <li>Understand project requirements</li>
//                     <li>Choose the right tech stack</li>
//                     <li>Break down complex features</li>
//                     <li>Solve technical challenges</li>
//                   </ul>
//                 </div>
//               </div>

//               {chatHistory.map((msg, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div
//                     className={`max-w-[80%] p-3 rounded-lg ${
//                       msg.role === 'user'
//                         ? 'bg-emerald-400 text-black ml-4'
//                         : 'bg-neutral-800 text-white/70 mr-4'
//                     }`}
//                   >
//                     {msg.content}
//                   </div>
//                 </motion.div>
//               ))}

//               {isTyping && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="flex items-center gap-2 text-white/50"
//                 >
//                   <div className="flex gap-1">
//                     <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
//                     <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
//                     <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
//                   </div>
//                   <span className="text-sm">AI is typing...</span>
//                 </motion.div>
//               )}
//             </div>

//             <div className="p-4 border-t border-white/10">
//               <div className="flex gap-2">
//                 <Input
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                   placeholder="Ask anything about your project..."
//                   className="bg-neutral-800 border-white/10 text-white placeholder:text-white/30 focus:ring-2 focus:ring-emerald-400 rounded-lg"
//                 />
//                 <Button
//                   onClick={handleSendMessage}
//                   className="bg-emerald-400 hover:bg-emerald-500 text-black rounded-lg px-4"
//                 >
//                   <Send className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>

//       <AnimatePresence>
//         {!isOpen && chatHistory.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             className="fixed bottom-24 right-24 bg-emerald-400/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-400/30 text-sm backdrop-blur-md"
//           >
//             <MessageSquare className="h-4 w-4" />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// } 