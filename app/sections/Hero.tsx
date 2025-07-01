"use client";

import Button from "@/components/Button";
import designExample1 from "@/assets/images/design-example-4.png";
import designExample2 from "@/assets/images/design-example-3.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import cursorImage from "@/assets/images/cursor-you.svg";
import { Loader2, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();
    
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { y: [0, 16, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { y: [0, 20, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, [leftDesignAnimate, leftPointerAnimate, rightDesignAnimate, rightPointerAnimate, leftDesignScope, leftPointerScope, rightDesignScope, rightPointerScope]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email) {
            toast({
                title: "Error",
                description: "Please enter your email address.",
                variant: "destructive",
            });
            return;
        }

        try {
            setIsLoading(true);
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            toast({
                title: "🎉 Welcome aboard!",
                description: data.message,
                variant: "default",
            });
            
            setEmail("");
        } catch (error) {
            toast({
                title: "Almost there!",
                description: "We've received your request. Please check your email in a few minutes.",
                variant: "default",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section
            className="py-24 overflow-x-clip"
            style={{
                cursor: `url(${cursorImage.src}), auto`,
            }}
        >
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    className="absolute -left-32 top-16 hidden lg:block"
                    drag
                >
                    <Image
                        draggable={false}
                        src={designExample1}
                        alt="design example 1"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute top-96 left-56 hidden lg:block"
                >
                    <Pointer name="Andrea" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    ref={rightDesignScope}
                    className="absolute -right-64 -top-16 hidden lg:block"
                    drag
                >
                    <Image
                        draggable={false}
                        src={designExample2}
                        alt="design example 2"
                    />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute -top-4 right-80 hidden lg:block"
                >
                    <Pointer color="red" name="Tino" />
                </motion.div>

                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-lime-400 to-lime-500 rounded-full text-neutral-950 font-semibold">
                        ✨ Built for you by you ✨
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-7xl font-medium text-center mt-6">
                    One Hub. All Your Campus Tools, <br />
                    Free Forever
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    From AI-powered resumes to certificate generation, memes, marksheets, and even project ideas, DivineLab gives you everything in one click.
                </p>
                <form 
                    onSubmit={handleSubmit}
                    className="mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 border border-lime-400/20 hover:border-lime-400/40 focus-within:border-lime-400/60 rounded-full p-2 mt-8 max-w-lg transition-all duration-300 bg-neutral-900/50 backdrop-blur-sm shadow-xl"
                >
                    <div className="relative flex-1 px-2">
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-lime-400/40">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input
                            type="email"
                            placeholder="Enter your email for early access"
                            className="bg-transparent w-full pl-9 pr-4 py-2.5 focus:outline-none text-white/90 placeholder:text-white/40"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                        />
                        {isLoading && (
                            <div className="absolute right-2 top-1/2 -translate-y-1/2">
                                <Loader2 className="w-5 h-5 animate-spin text-lime-400" />
                            </div>
                        )}
                    </div>
                    <Button
                        size="sm"
                        className="whitespace-nowrap bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-2.5 shadow-lg hover:shadow-lime-400/20 transition-all duration-300"
                        type="submit"
                        variant="primary"
                        disabled={isLoading}
                    >
                        {isLoading ? "Subscribing..." : "Get Early Access"}
                    </Button>
                </form>
                <p className="text-center text-sm text-white/30 mt-4">
                    Join 1000+ students already using our tools
                </p>
            </div>
        </section>
    );
}
