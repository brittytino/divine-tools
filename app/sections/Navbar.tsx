"use client";

import logoImage from "@/assets/images/dlogo.png";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "@/components/Button";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const mobileMenuVariants = {
        hidden: { 
            opacity: 0,
            height: 0,
            y: -10
        },
        visible: { 
            opacity: 1,
            height: "auto",
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        },
        exit: { 
            opacity: 0,
            height: 0,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    const menuItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <>
            <motion.section 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                    scrolled ? 'py-2 lg:py-4' : 'py-4 lg:py-8'
                }`}
            >
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className={`
                        relative border border-white/20 rounded-2xl lg:rounded-full 
                        ${scrolled 
                            ? 'bg-neutral-950/90 backdrop-blur-xl shadow-2xl' 
                            : 'bg-neutral-950/70 backdrop-blur-lg shadow-xl'
                        }
                        transition-all duration-300 hover:border-white/30 hover:shadow-2xl
                    `}>
                        <div className="grid grid-cols-2 lg:grid-cols-3 items-center py-3 px-4 lg:px-8">
                            
                            {/* LOGO + TITLE */}
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <Image
                                        src={logoImage}
                                        alt="Divine Tools Logo"
                                        className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                DivineLab
                                </h1>
                            </div>

                            {/* NAV LINKS (DESKTOP) */}
                            <div className="hidden lg:flex justify-center items-center">
                                <nav className="flex items-center gap-8">
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.href}
                                            href={link.href}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative text-white/90 hover:text-white font-medium text-sm lg:text-base transition-all duration-300 group"
                                        >
                                            {link.label}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                        </motion.a>
                                    ))}
                                </nav>
                            </div>

                            {/* ACTION BUTTONS + MOBILE MENU */}
                            <div className="flex justify-end items-center gap-3 lg:gap-4">
                                
                                {/* Desktop Auth Buttons */}
                                <div className="hidden lg:flex items-center gap-3">
                                    <Button 
                                        variant="secondary" 
                                        className="px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    >
                                        Login
                                    </Button>
                                    <Button 
                                        variant="primary" 
                                        className="px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                                    >
                                        Sign Up
                                    </Button>
                                </div>

                                {/* Mobile Menu Toggle */}
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                                    aria-label="Toggle menu"
                                >
                                    <AnimatePresence mode="wait">
                                        {!isOpen ? (
                                            <motion.div
                                                key="menu"
                                                initial={{ rotate: 90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: -90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Menu className="text-white" size={24} />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="close"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <X className="text-white" size={24} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>
                        </div>

                        {/* MOBILE MENU */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    variants={mobileMenuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="lg:hidden overflow-hidden border-t border-white/10"
                                >
                                    <div className="px-4 py-6 space-y-4">
                                        {/* Mobile Navigation Links */}
                                        <div className="space-y-3">
                                            {navLinks.map((link, index) => (
                                                <motion.a
                                                    key={link.href}
                                                    href={link.href}
                                                    variants={menuItemVariants}
                                                    onClick={closeMenu}
                                                    className="block text-white/90 hover:text-white font-medium text-lg py-2 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                                                >
                                                    {link.label}
                                                </motion.a>
                                            ))}
                                        </div>
                                        
                                        {/* Mobile Auth Buttons */}
                                        <div className="space-y-3 pt-4 border-t border-white/10">
                                            <motion.div variants={menuItemVariants}>
                                                <Button 
                                                    variant="secondary" 
                                                    className="w-full py-3 text-base font-medium transition-all duration-300 hover:scale-105"
                                                    onClick={closeMenu}
                                                >
                                                    Login
                                                </Button>
                                            </motion.div>
                                            <motion.div variants={menuItemVariants}>
                                                <Button 
                                                    variant="primary" 
                                                    className="w-full py-3 text-base font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                                                    onClick={closeMenu}
                                                >
                                                    Sign Up
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.section>

            {/* Spacer to prevent content overlap */}
            <div className={`transition-all duration-300 ${
                scrolled ? 'pb-20 md:pb-24' : 'pb-24 md:pb-32'
            }`}></div>
        </>
    );
}