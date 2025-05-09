import "./css/style.css";

import { Inter } from "next/font/google";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import AOSInit from "@/components/aosinit"; // ← client-side hook

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Manila Bankers Life",
  description: "The Best Way to Show your Love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-blue-900 antialiased`}
      >
        <AOSInit /> {/* client-side AOS only */}
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <main className="grow">{children}</main>
          <Footer border={true} />
        </div>
      </body>
    </html>
  );
}
