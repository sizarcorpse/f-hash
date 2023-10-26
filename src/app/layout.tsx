import "@/styles/globals.css";

import { ThemeProvider } from "@/providers/";
import { Montserrat } from "next/font/google";

import config from "@/db/config.json";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: config.meta.company + " - " + config.meta.title,
  description: config.meta.description,
  keywords: config.meta.keywords,
  author: config.meta.author,
  company: config.meta.company,
  robots: config.meta.robots,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
