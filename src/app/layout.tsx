import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mateusalmeida.vercel.app"),
  title: {
    default: "Mateus Almeida | QA Engineer & Full-Stack Developer (AI-Driven Delivery)",
    template: "%s | Mateus Almeida",
  },
  description:
    "Aplicações Web e APIs prontas em dias, não semanas. Engenharia de software moderna com Next.js, Supabase e Vercel unida a rigoroso padrão de QA. Serviços rápidos no Fiverr e contratos de baixo risco.",
  keywords: [
    "Mateus Almeida",
    "QA Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "Supabase Expert",
    "Vercel Deploy",
    "Fiverr Freelancer",
    "Bug Fixing Emergencial",
    "Auditoria de QA",
    "API Testing Postman",
    "TypeScript",
    "Tailwind CSS",
    "Desenvolvedor Web Portugal",
    "Montijo TI",
    "Contratos de Baixo Risco"
  ],
  authors: [{ name: "Mateus Almeida", url: "https://github.com/teusbraga" }],
  creator: "Mateus Almeida",
  publisher: "Mateus Almeida",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mateus Almeida | Full-Stack & AI-Driven Delivery (QA Rigor)",
    description:
      "Aplicações Web, CRUDs e APIs prontas em dias. Engenharia ágil com Next.js, Supabase, Vercel e padrão de testes industriais.",
    url: "https://mateusalmeida.vercel.app",
    siteName: "Mateus Almeida - Full-Stack & QA",
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Almeida | Full-Stack & AI-Driven Delivery",
    description:
      "Aplicações Web e APIs com entrega rápida e zero bugs em produção. Next.js, Supabase e Vercel.",
    creator: "@teusbraga",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mateusalmeida.vercel.app/#person",
      name: "Mateus Almeida",
      jobTitle: "QA Engineer & Full-Stack Developer",
      url: "https://mateusalmeida.vercel.app",
      sameAs: [
        "https://github.com/teusbraga",
        "https://cert.efset.org/pspgCD"
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montijo",
        addressCountry: "Portugal"
      },
      email: "mts.almeida7@gmail.com",
      telephone: "+351924689447",
      knowsAbout: [
        "Quality Assurance",
        "Manual Testing",
        "API Testing",
        "Next.js",
        "TypeScript",
        "Supabase",
        "Vercel Deployment",
        "Tailwind CSS",
        "Postman",
        "Jira",
        "Bug Fixing",
        "SEO Optimization"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://mateusalmeida.vercel.app/#service",
      name: "Mateus Almeida - AI-Driven Delivery & Software QA",
      url: "https://mateusalmeida.vercel.app",
      founder: {
        "@id": "https://mateusalmeida.vercel.app/#person"
      },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Desenvolvimento e QA",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Apps & Micro-tarefas Full-Stack (Next.js + Supabase)"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Plantão Emergencial de Bug Fixing (24h/48h)"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Auditoria de QA, Segurança & Performance"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Otimização Técnica de SEO & Vercel Edge"
            }
          }
        ]
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
    <html lang="pt" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark-bg text-gray-100 font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300 min-h-screen relative">
        <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-40 z-0" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none radial-glow-emerald z-0" />
        <div className="fixed top-60 right-0 w-[500px] h-[500px] pointer-events-none radial-glow-blue z-0 opacity-60" />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
