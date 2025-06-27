import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { fontSans} from "@/config/fonts";
import { cx } from "@/lib/utils";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Nafiralo Christ Isaac Ouattara's portfolio",
  keywords: [
    "Nafiralo",
    "Christ Isaac",
    "Ouattara",
    "Portfolio",
    "Isaac Ouattara",
    "Ouattara Nafiralo Christ Isaac Konan",
    "Software Developer",
    "Software Engineer",
    "Web Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "React Native Developer",
    "Next Js Developer",
    "Express Js Developer",
    "Node Js Developer",
    "MERN Stack Developer",
    "Freelance Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preload" href={fontSans.style.fontFamily} as="font" />
      </head>
      <body
        className={cx(
          jetbrainsMono.variable,
          "min-h-screen font-mono antialiased selection:bg-gradient-to-br from-indigo-950 to-slate-900 text-slate-50 dark:from-slate-100 dark:to-indigo-200 dark:text-slate-400 dark:selection:bg-gradient-to-br dark:selection:text-white",
          "scroll-smooth"
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
