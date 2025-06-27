import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Share2, Copy, CheckCircle, Linkedin, Share, Twitter } from "lucide-react";

export function ShareWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Project Ideas Generator',
          text: 'Check out this awesome project ideas generator!',
          url: shareUrl,
        });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      handleCopy();
    }
  };

  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareToTwitter = () => {
    const text = encodeURIComponent('Check out this awesome project ideas generator! 🚀');
    const url = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-lime-400 text-black hover:bg-lime-500 hover:shadow-[0_0_12px_#84cc16] transition-all duration-300"
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-neutral-900/95 backdrop-blur-md border-white/10 rounded-2xl sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white flex items-center gap-2">
              <Share2 className="h-5 w-5 text-lime-400" />
              Share Project Ideas Generator
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 p-4">
            <div className="flex items-center space-x-2">
              <Input
                value={shareUrl}
                readOnly
                className="bg-neutral-800 border-white/10 text-white placeholder:text-white/30 focus:ring-2 focus:ring-lime-400 rounded-lg"
              />
              <Button
                size="icon"
                variant="outline"
                onClick={handleCopy}
                className={`shrink-0 bg-neutral-800 border-white/10 text-white hover:bg-lime-400/20 hover:text-lime-400 hover:border-lime-400/30 rounded-lg ${
                  isCopied ? 'text-lime-400 border-lime-400/30' : ''
                }`}
              >
                {isCopied ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                onClick={shareToTwitter}
                className="bg-neutral-800 border-white/10 text-white hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30 rounded-lg"
              >
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button
                variant="outline"
                onClick={shareToLinkedIn}
                className="bg-neutral-800 border-white/10 text-white hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 rounded-lg"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </div>
            <Button
              className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold rounded-lg hover:shadow-[0_0_12px_#84cc16] transition-all duration-300"
              onClick={handleShare}
            >
              <Share className="h-4 w-4 mr-2" />
              Share Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 bg-lime-400/20 text-lime-400 px-4 py-2 rounded-lg border border-lime-400/30 backdrop-blur-md"
          >
            Shared successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 