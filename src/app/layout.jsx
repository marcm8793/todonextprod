import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/lib/provider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NexToDo",
  description: "Get stuff done",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${inter.className}`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </Provider>
    </html>
  );
}
