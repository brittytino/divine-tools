"use client";

import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "What is Divine Tools?",
        answer: "Divine Tools is a free platform offering powerful, easy-to-use tools for students, developers, and event organizers — including resume builders, certificate generators, project idea finders, and more.",
    },
    {
        question: "Are these tools really free?",
        answer: "Yes! All our tools are 100% free to use. No hidden charges. We built this to help students and creators save time and stand out.",
    },
    {
        question: "Do I need any technical knowledge to use the tools?",
        answer: "Nope. All our tools are built with simplicity in mind. Whether you’re a first-year student or a hackathon pro, you can use them effortlessly.",
    },
    {
        question: "Can I use Divine Tools for college events?",
        answer: "Absolutely. Our certificate generator and marksheet tools are perfect for clubs, fests, and workshops. Just upload an Excel file and generate 100s of outputs instantly.",
    },
    {
        question: "How often are new tools added?",
        answer: "We’re constantly building! Expect new tools and updates every month — based on student feedback and trending tech needs.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <section className="py-24 ">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We&apos;ve got{" "}
                    <span className="text-lime-400">answers</span>
                </h2>

                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            onClick={() => setSelectedIndex(faqIndex)}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6 "
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="font-medium m-0">
                                    {faq.question}
                                </h3>
                                <Plus
                                    size={30}
                                    className={twMerge(
                                        "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex &&
                                            "rotate-45"
                                    )}
                                />
                            </div>

                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
