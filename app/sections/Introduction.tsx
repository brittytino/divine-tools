"use client";

import Tag from "@/components/Tag";
import {
    useMotionValue,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

// 10 different pain texts that are attractive and manipulative
const painTexts = [
    `You're juggling college, placements, and last-minute projects yet tools to help you are scattered, complex, or just plain boring.`,
    `Deadlines are crushing you, assignments pile up endlessly, and every productivity app feels like it was designed by someone who never faced real student pressure.`,
    `You're drowning in a sea of tabs, forgetting passwords, switching between apps, while your GPA slowly bleeds away with each wasted minute.`,
    `Your dream job slips further away each day as you waste precious hours on clunky tools instead of actually learning and growing.`,
    `Everyone else seems to have it figured out while you're still wrestling with basic tools that should just work but never do.`,
    `You're spending more time fighting with your tools than actually using them, watching opportunities pass by as you struggle with the basics.`,
    `Your productivity setup is a house of cards—one crashed app, one lost file, one forgotten password away from complete chaos.`,
    `You're paying for subscriptions to tools you barely use, apps that don't talk to each other, and solutions that create more problems than they solve.`,
    `Every semester starts with new resolutions and ends with the same digital mess, the same scattered workflow, the same stress-induced breakdowns.`,
    `You know you're capable of more, but your current tools are holding you back from reaching your true potential and achieving the success you deserve.`
];

// Function to get a random pain text
const getRandomPainText = () => {
    const randomIndex = Math.floor(Math.random() * painTexts.length);
    return painTexts[randomIndex];
};

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    
    // Initialize with first text to prevent hydration error
    const [currentText, setCurrentText] = useState(painTexts[0]);
    const words = currentText.split(" ");
    
    // Set random text only on client side after hydration
    useEffect(() => {
        setCurrentText(getRandomPainText());
    }, []);

    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const [currentWord, setCurrentWord] = useState(0);

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);

    useMotionValueEvent(scrollYProgress, "change", (latest) =>
        console.log(latest)
    );

    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-28 md:top-32">
                    <div className="flex justify-center">
                        <Tag>Welcome to Divine Tools</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>Students deserve smarter tools.&nbsp;</span>
                        <span className="text-white/15">
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        index < currentWord && "text-white"
                                    )}
                                >
                                    {`${word} `}
                                </span>
                            ))}
                        </span>
                        <span className="text-lime-400 block mt-4">
                            That&apos;s why we built Divine Tools.
                        </span>
                    </div>
                </div>
                <div ref={scrollTarget} className="h-[150vh]"></div>
            </div>
        </section>
    );
}