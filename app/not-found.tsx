'use client';

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, RotateCcw, RotateCw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export default function NotFound() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const createParticles = () => {
    if (!containerRef.current) return [];
    const rect = containerRef.current.getBoundingClientRect();
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      size: Math.random() * 10 + 5,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      setParticles(createParticles());
    };

    // Initial creation
    setParticles(createParticles());

    // Handle window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-neutral-950 to-black flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full opacity-60"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              left: particle.x,
              top: particle.y,
            }}
            animate={{
              x: particle.x + particle.speedX * 50,
              y: particle.y + particle.speedY * 50,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating islands */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-lime-900 to-lime-700 opacity-30 blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "20%", left: "15%" }}
      />
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-cyan-900 to-cyan-700 opacity-30 blur-xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "15%", right: "20%" }}
      />

      <div className="max-w-2xl w-full space-y-8 text-center relative z-10">
        {/* Animated 404 Text */}
        <div className="relative flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="absolute -top-8 -right-8"
          >
            <Sparkles className="w-24 h-24 text-lime-400 opacity-70" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.h1
              className="text-[10rem] md:text-[12rem] font-bold text-lime-500/10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              404
            </motion.h1>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Page Not Found
            </motion.h2>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/70 text-xl max-w-xl mx-auto"
        >
          We can&apos;t seem to find the page you&apos;re looking for.
        </motion.p>

        {/* Interactive Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, type: "spring", bounce: 0.4 }}
          className="relative p-px rounded-2xl overflow-hidden"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-lime-400 via-lime-500 to-lime-400 animate-gradient"
            animate={{
              opacity: isHovered ? 0.9 : 0.7,
              scale: isHovered ? 1.02 : 1,
            }}
          />
          <div className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-2xl p-8 md:p-10">
            <motion.p
              className="text-white/90 mb-6 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Let's get you back on track to creating amazing projects!
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                onClick={() => router.back()}
                variant="outline"
                className="group hover:bg-white/5 backdrop-blur-sm bg-black/30 border-white/10"
              >
                <motion.span
                  animate={{ x: isHovered ? [-2, 2, -2] : 0 }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                >
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                </motion.span>
                Go Back
              </Button>
              
              <Button
                onClick={handleReload}
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm"
              >
                <motion.span
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <RotateCcw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform" />
                </motion.span>
                Reload
              </Button>
              
              <Button
                onClick={() => router.push("/")}
                className="bg-lime-400 hover:bg-lime-500 text-black group shadow-lg shadow-lime-500/20 hover:shadow-lime-500/40 transition-all"
              >
                <motion.span
                  animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                </motion.span>
                Return Home
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional decorative elements */}
        <motion.div
          className="mt-12 text-white/40 text-sm flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="flex items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-3 h-3 rounded-full bg-lime-500 mr-2"
            />
            Status: Lost in space
          </span>
          <span>•</span>
          <span>Error code: 0x404</span>
        </motion.div>
      </div>

      {/* Floating astronaut */}
      <motion.div
        className="absolute bottom-10 right-10 md:right-20 z-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="relative">
          <div className="w-16 h-16 bg-white rounded-full opacity-20" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-300 rounded-full" />
          <div className="absolute top-3 left-3 w-3 h-3 bg-black rounded-full" />
          <div className="absolute top-3 right-3 w-3 h-3 bg-black rounded-full" />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}