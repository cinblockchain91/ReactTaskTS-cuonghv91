import { create } from "zustand";
import type { Theme } from "./type";

const THEMES: Theme[] = ["light", "dark", "forest", "ocean", "sunset"];
const LOCAL_STORAGE_KEY = "app-theme";

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set, get) => {
  const savedTheme =
    (localStorage.getItem(LOCAL_STORAGE_KEY) as Theme) || "light";
  document.documentElement.classList.add(savedTheme);

  return {
    theme: savedTheme,

    setTheme: (theme) => {
      document.documentElement.classList.remove(...THEMES);
      document.documentElement.classList.add(theme);

      localStorage.setItem(LOCAL_STORAGE_KEY, theme);
      set({ theme });
    },

    toggleTheme: () => {
      const current = get().theme;
      const index = THEMES.indexOf(current);
      const next = THEMES[(index + 1) % THEMES.length];

      document.documentElement.classList.remove(...THEMES);
      document.documentElement.classList.add(next);

      localStorage.setItem(LOCAL_STORAGE_KEY, next);
      set({ theme: next });
    },
  };
});
