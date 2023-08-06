import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/lib/provider";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextApps",
  description: "Get stuff done with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${inter.className}`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </Provider>
    </html>
  );
}
