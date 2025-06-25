import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";

// NEW ICONS (you mentioned these)
import whatsappIcon from "@/assets/images/whatsapp-logo.svg";
import linkedinIcon from "@/assets/images/linkedin-logo.svg";
import canvaIcon from "@/assets/images/canva-logo.svg";
import chatgptIcon from "@/assets/images/chatgpt-logo.svg";
import googleSheetsIcon from "@/assets/images/google-sheets.svg";

import IntegrationColumn from "@/components/IntegrationColumn";

const integrations = [
    {
        name: "WhatsApp",
        icon: whatsappIcon,
        description: "Share your certificates and resumes directly with event groups or friends in 1 tap.",
    },
    {
        name: "Google Sheets",
        icon: googleSheetsIcon,
        description: "Upload Excel/Sheets to auto-generate certificates, mark sheets, or event results.",
    },
    {
        name: "LinkedIn",
        icon: linkedinIcon,
        description: "Post your auto-generated banners and student memes directly to LinkedIn.",
    },
    {
        name: "ChatGPT",
        icon: chatgptIcon,
        description: "Use AI to help generate resume content or final year project topics in seconds.",
    },
    {
        name: "Canva",
        icon: canvaIcon,
        description: "Take your resume or banner designs into Canva to customize further.",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        description: "Host and show off your project ideas with instant GitHub links.",
    },
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Export UI ideas or references from your projects directly into Figma.",
    },
    {
        name: "Notion",
        icon: notionIcon,
        description: "Organize your project tasks, idea lists, and club management notes.",
    },
    {
        name: "Slack",
        icon: slackIcon,
        description: "Collaborate with your college or freelance teams on tool-generated content.",
    },
    {
        name: "Framer",
        icon: framerIcon,
        description: "Perfect for showcasing your projects or portfolios in one click.",
    },
    {
        name: "Relume",
        icon: relumeIcon,
        description: "Use website builders like Relume to create student portfolios instantly.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Works with your daily{" "}
                            <span className="text-lime-400">college & tech tools</span>
                        </h2>

                        <p className="text-white/50 mt-4 text-lg">
                            Divine Tools connects with the platforms you already use — from Excel sheets for certificates to ChatGPT for ideas and even WhatsApp for quick sharing. No boring steps, just plug and go!
                        </p>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 gap-4 lg:h-[800px] h-[400px] lg:mt-0 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationColumn integrations={integrations} />
                            <IntegrationColumn
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                                reverse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
