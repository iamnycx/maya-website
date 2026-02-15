import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/common/navbar";
import { Satoshi } from "@/fonts";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Maya Reynolds, PsyD",
  description: "Psychologist in Santa Monica, California",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${Satoshi.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
