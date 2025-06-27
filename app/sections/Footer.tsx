import Image from "next/image";
import siteLogo from "@/assets/images/dlogo.png";

const footerLinks = [
    { id: 1, href: "#contact", label: "Contact" },
    { id: 2, href: "#privacy", label: "Privacy Policy" },
    { id: 3, href: "#terms", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <Image src={siteLogo} alt="DivineLab logo" width={40} height={40} />
                        <span className="text-2xl font-semibold">DivineLab</span>
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className="text-white/50 text-sm hover:text-white/80 transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
