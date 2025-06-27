"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const texts = [
    "Build Resume",
    "Generate Certificate",
    "Get Project Ideas",
    "Make Your Marksheet",
    "Create LinkedIn Banners",
    "Convert CGPA to %",
    "Create Bio Link",
    "All Free Tools by Divine",
];

export default function CallToAction() {
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();
    const [slowDownAnimation, setSlowDownAnimation] = useState(false);

    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 30, ease: "linear", repeat: Infinity }
        );
    }, [animate, scope]);

    useEffect(() => {
        if (animation.current) {
            animation.current.speed = slowDownAnimation ? 0.5 : 1;
        }
    }, [slowDownAnimation]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-6xl md:text-7xl font-semibold whitespace-nowrap"
                    onMouseEnter={() => setSlowDownAnimation(true)}
                    onMouseLeave={() => setSlowDownAnimation(false)}
                >
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="flex items-center gap-10">
                            <span className="text-lime-400 text-5xl">&#10038;</span>
                            <span
                                className={twMerge(
                                    "transition-colors duration-300",
                                    slowDownAnimation && "text-lime-400"
                                )}
                            >
                                {texts[index % texts.length]}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
