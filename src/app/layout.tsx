import type { Metadata } from "next";
import { Inter, Calistoga} from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";


const inter = Inter({subsets: ['latin'], variable: "--font-sans"});
const calistoga = Calistoga({
  subsets: ["latin"], 
  variable: "--font-sarif",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Tech By Destiny",
  description: "Full-stack developer specializing in React, Next.js, Django, WordPress and Shopify. I build SEO-optimized, high-performing web experiences that drive traffic and conversions.",
  applicationName: "Dennis Destiny Portfolio",
   keywords: [
    "Full-stack developer",
    "React developer",
    "Next.js developer",
    "Django Developer",
    "Shopify developer",
    "SEO Expert",
    "ecommerce developer",
  ],
  authors: [{ name: "Dennis Destiny" }],
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
