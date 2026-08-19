import type { Metadata } from "next";
import { Playfair_Display, Space_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://anandpandey2005.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anand Pandey | Software Engineer, Full Stack Developer & BCA (GGSIPU)",
    template: "%s | Anand Pandey — Software Engineer",
  },
  description:
    "Official Portfolio & Special Tech Dossier of Anand Pandey — Software Engineer, Full Stack Developer & Freelance Engineer pursuing Bachelor of Computer Applications (BCA) at Guru Gobind Singh Indraprastha University (GGSIPU), Delhi. Specializing in Next.js, React, Node.js, TypeScript, C++, and MongoDB.",
  keywords: [
    // Core Engineering Roles
    "Software Engineer",
    "Software Engineering",
    "Anand Pandey Software Engineer",
    "Software Engineer Delhi NCR",
    "Software Engineer Freelancer",
    "Full Stack Software Engineer",
    "Full Stack Developer",
    "Freelance Developer",
    "Freelance Software Engineer",
    // Name variations
    "Anand Pandey",
    "Anand",
    "Pandey",
    "anandpandey2005",
    "Anand Pandey Developer",
    "Anand Pandey Portfolio",
    "Anand Pandey Freelancer",
    // Education & University
    "Guru Gobind Singh Indraprastha University",
    "GGSIPU",
    "IP University Delhi",
    "Bachelor of Computer Applications",
    "BCA",
    "BCA Anand Pandey",
    "Indraprastha University Computer Science",
    // Geographic Locations
    "Badarpur",
    "Delhi",
    "Badarpur Delhi",
    "Greater Noida",
    "Amethi",
    "Delhi NCR Software Engineer",
    // Tech Stack
    "React Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "Node.js Developer",
    "C++ Programmer",
    "Web Application Developer",
  ],
  authors: [{ name: "Anand Pandey", url: siteUrl }],
  creator: "Anand Pandey",
  publisher: "Anand Pandey",
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
    canonical: siteUrl,
  },
  icons: {
    icon: "/anandpandey.webp",
    shortcut: "/anandpandey.webp",
    apple: "/anandpandey.webp",
  },
  openGraph: {
    title: "Anand Pandey | Software Engineer, Full Stack Developer & BCA (GGSIPU)",
    description:
      "Official Developer Dossier & Portfolio of Anand Pandey. Software Engineer, Full Stack Developer & BCA (GGSIPU) showcasing 18+ public repositories, live web apps, full-stack tech stack & client projects.",
    url: siteUrl,
    siteName: "The Pandey Gazette | Anand Pandey Portfolio",
    images: [
      {
        url: "/anandpandey.webp",
        width: 800,
        height: 800,
        alt: "Anand Pandey - Software Engineer & Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anand Pandey | Software Engineer, Full Stack Developer & BCA (GGSIPU)",
    description:
      "Interactive Developer Dossier showcasing Next.js, React, Node.js & TypeScript projects by Anand Pandey — Software Engineer.",
    creator: "@anandpandey2005",
    images: ["/anandpandey.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://anandpandey2005.vercel.app/#person",
      "name": "Anand Pandey",
      "alternateName": [
        "anandpandey2005",
        "Anand",
        "Pandey",
        "Anand Pandey Freelancer",
        "Anand Pandey Developer",
        "Anand Pandey GGSIPU",
        "Anand Pandey BCA"
      ],
      "url": "https://anandpandey2005.vercel.app",
      "image": "https://anandpandey2005.vercel.app/anandpandey.webp",
      "sameAs": [
        "https://github.com/anandpandey2005",
        "https://linkedin.com/in/anandpandey2005"
      ],
      "jobTitle": "Full Stack Developer & Freelance Software Engineer",
      "description": "Anand Pandey is a Full Stack Developer & Freelance Software Engineer specializing in React, Next.js, TypeScript, Node.js, C++ and MongoDB. Student/Graduate of Bachelor of Computer Applications (BCA) at Guru Gobind Singh Indraprastha University (GGSIPU), Delhi.",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Guru Gobind Singh Indraprastha University (GGSIPU)",
        "url": "https://ipu.ac.in"
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Bachelor of Computer Applications (BCA)"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Badarpur, Delhi",
        "addressRegion": "Delhi NCR / Greater Noida / Amethi",
        "addressCountry": "IN"
      },
      "knowsAbout": [
        "Full Stack Development",
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "C++ Data Structures",
        "Web Architecture",
        "Freelance Software Engineering"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://anandpandey2005.vercel.app/#website",
      "url": "https://anandpandey2005.vercel.app",
      "name": "The Pandey Gazette | Anand Pandey Portfolio",
      "description": "Official Special Edition Tech Dossier & Portfolio of Anand Pandey — Full Stack Developer & BCA (GGSIPU).",
      "publisher": {
        "@id": "https://anandpandey2005.vercel.app/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://anandpandey2005.vercel.app/#profilepage",
      "url": "https://anandpandey2005.vercel.app",
      "name": "Anand Pandey Portfolio Dossier",
      "mainEntity": {
        "@id": "https://anandpandey2005.vercel.app/#person"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${monoFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}

