import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://lab.divineinfotech.org"),
    title: {
        template: "%s | Divine Lab by Divine Infotech",
        default: "Divine Infotech - Leading Product Company & Free Student Tools in Coimbatore"
    },
    description: "Divine Infotech: Coimbatore's premier product & edutech company offering free tools for students. Access resume builders, project generators & more. Leading innovation in Tamil Nadu's tech ecosystem since 2023.",
    keywords: [
        "Divine Infotech",
        "divine infotech coimbatore",
        "free student tools",
        "coimbatore edutech company",
        "coimbatore product company",
        "student tools tamil nadu",
        "free educational tools coimbatore",
        "divine lab",
        "best product company coimbatore",
        "tech company coimbatore",
        "software company tamil nadu",
        "student resources coimbatore",
        "educational technology tamil nadu",
        "free project ideas generator",
        "resume builder coimbatore",
        "certificate generator tamil nadu",
        "placement preparation tools",
        "engineering student resources",
        "coimbatore tech ecosystem",
        "tamil nadu software development"
    ],
    authors: [{ name: "Divine Infotech", url: "https://divineinfotech.org" }],
    creator: "Divine Infotech",
    publisher: "Divine Infotech",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [
            { url: "/icons/dlogo.png", type: "image/png" },
            { url: "/favicon.ico" },
        ],
        apple: [
            { url: "/icons/dlogo.png", type: "image/png" },
        ],
        other: [
            {
                rel: "apple-touch-icon",
                url: "/icons/dlogo.png",
            },
        ],
    },
    manifest: "/manifest.json",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://lab.divineinfotech.org",
        siteName: "Divine Infotech Lab",
        title: "Divine Infotech - Leading Product Company & Free Student Tools in Coimbatore",
        description: "Divine Infotech: Coimbatore's premier product & edutech company offering free tools for students. Access resume builders, project generators & more. Leading innovation in Tamil Nadu's tech ecosystem since 2023.",
        images: [
            {
                url: "/icons/dlogo.png",
                width: 512,
                height: 512,
                alt: "Divine Infotech Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Divine Infotech - Leading Product Company & Free Student Tools in Coimbatore",
        description: "Divine Infotech: Coimbatore's premier product & edutech company offering free tools for students. Access resume builders, project generators & more. Leading innovation in Tamil Nadu's tech ecosystem since 2023.",
        images: ["/icons/dlogo.png"],
        creator: "@divineinfotech",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://lab.divineinfotech.org"
    },
    verification: {
        google: "your-google-verification-code",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const currentYear = new Date().getFullYear();
    
    return (
        <html lang="en">
            <head>
                <link rel="canonical" href="https://lab.divineinfotech.org" />
                <meta name="theme-color" content="#000000" />
                <meta name="geo.region" content="IN-TN" />
                <meta name="geo.placename" content="Coimbatore" />
                <meta name="geo.position" content="11.0168;76.9558" />
                <meta name="ICBM" content="11.0168, 76.9558" />
                <meta name="copyright" content={`© ${currentYear} Divine Infotech. All rights reserved.`} />
                <meta name="rating" content="General" />
                <meta name="revisit-after" content="7 days" />
                <meta name="target" content="all" />
                <meta name="audience" content="all" />
                <meta name="coverage" content="Worldwide" />
                <meta name="distribution" content="Global" />
                <meta name="category" content="Technology" />
                <meta name="topic" content="Educational Technology, Software Development" />
                <meta name="og:locality" content="Coimbatore" />
                <meta name="og:region" content="Tamil Nadu" />
                <meta name="og:country-name" content="India" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "name": "Divine Infotech",
                                "url": "https://lab.divineinfotech.org",
                                "logo": "https://lab.divineinfotech.org/icons/dlogo.png",
                                "description": "Divine Infotech is a leading product and edutech company in Coimbatore, offering innovative software solutions and free educational tools for students.",
                                "foundingDate": "2023",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Coimbatore",
                                    "addressRegion": "Tamil Nadu",
                                    "addressCountry": "IN"
                                },
                                "sameAs": [
                                    "https://divineinfotech.org",
                                    "https://linkedin.com/company/divine-infotech",
                                    "https://twitter.com/divineinfotech"
                                ]
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "WebApplication",
                                "name": "Divine Lab",
                                "url": "https://lab.divineinfotech.org",
                                "description": "Free online tools for students in Coimbatore and Tamil Nadu. Create resumes, certificates, project ideas, and more.",
                                "applicationCategory": "EducationalApplication",
                                "operatingSystem": "Any",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "0",
                                    "priceCurrency": "INR"
                                },
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Divine Infotech",
                                    "url": "https://divineinfotech.org"
                                },
                                "audience": {
                                    "@type": "EducationalAudience",
                                    "educationalRole": "student"
                                },
                                "areaServed": {
                                    "@type": "State",
                                    "name": "Tamil Nadu"
                                }
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "SoftwareApplication",
                                "name": "Divine Lab Tools",
                                "operatingSystem": "Any",
                                "applicationCategory": "EducationalApplication",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "0",
                                    "priceCurrency": "INR"
                                },
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.8",
                                    "ratingCount": "150"
                                }
                            }
                        ])
                    }}
                />
            </head>
            <body className={`${inter.className} font-sans antialiased bg-neutral-950 text-white`}>
                {children}
            </body>
        </html>
    );
}
