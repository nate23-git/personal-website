"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevents hydration mismatch — only render after the page loads
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-auto text-pink-300 hover:text-pink-200 transition text-lg"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    );
}