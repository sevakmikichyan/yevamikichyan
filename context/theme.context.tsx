"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark" | "auto";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  oppositeTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const THEME_KEY = "theme";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("auto");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [oppositeTheme, setOppositeTheme] = useState<"light" | "dark">("dark");

  const applyTheme = (theme: Theme) => {
    const html = document.documentElement;
    let actual: "light" | "dark";

    if (theme === "auto") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      html.classList.toggle("dark", prefersDark);
      html.classList.toggle("light", !prefersDark);
      actual = prefersDark ? "dark" : "light";
    } else {
      html.classList.toggle("dark", theme === "dark");
      html.classList.toggle("light", theme === "light");
      actual = theme;
    }

    setResolvedTheme(actual);
    setOppositeTheme(actual === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    if (savedTheme) {
      setThemeState(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme("auto");
    }

    // Listen to system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: MediaQueryListEvent) => {
      if (theme === "auto") applyTheme("auto");
    };
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, oppositeTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
