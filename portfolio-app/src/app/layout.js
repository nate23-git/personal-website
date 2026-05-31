import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nathan Perez",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col transition-colors duration-300">

        <ThemeProvider>

          {/* HEADER */}
          <header className="sticky top-0 z-50 bg-pink-50/80 dark:bg-black/20 backdrop-blur-md border-b border-pink-200/40 dark:border-white/5">
            <nav className="flex items-center gap-6 px-6 py-4 text-pink-500 dark:text-pink-300 text-sm">

              {/* FIX: now works from ANY page (homepage + project pages) */}
              <a
                href="/#about"
                className="hover:text-pink-700 dark:hover:text-pink-200 transition"
              >
                About Me
              </a>

              <a
                href="/#projects"
                className="hover:text-pink-700 dark:hover:text-pink-200 transition"
              >
                Projects
              </a>

              <a
                href="/#contact"
                className="hover:text-pink-700 dark:hover:text-pink-200 transition"
              >
                Contact
              </a>

              <a
                href="/Resume.pdf"
                target="_blank"
                className="hover:text-pink-700 dark:hover:text-pink-200 transition"
              >
                Resume
              </a>

              <ThemeToggle />

            </nav>
          </header>

          {children}

        </ThemeProvider>

      </body>
    </html>
  );
}