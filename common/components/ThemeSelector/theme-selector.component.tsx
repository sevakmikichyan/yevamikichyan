"use client"

import { Theme } from "@/common/utils/theme";
import { useTheme } from "@/context/theme.context";

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <select value={theme} onChange={handleChange} className="p-2 border rounded">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="auto">Auto</option>
    </select>
  );
};