import { useThemeStore } from "@/features/theme/hook";
import type { Theme } from "@/features/theme/type";

import { Outlet } from "react-router-dom";

export function LayoutDark() {
  const { theme, setTheme } = useThemeStore();

  const THEMES: Theme[] = ["light", "dark", "forest", "ocean", "sunset"];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-14 border-b flex items-center px-6 bg-background shadow-md z-50">
        <h1 className="text-lg font-semibold flex-1">
          React Tasks - DARK layout
        </h1>

        {/* Theme buttons */}
        <div className="flex gap-2">
          {THEMES.map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                theme === t
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 p-6 mt-14">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="h-12 border-t flex items-center justify-center text-sm text-muted-foreground">
        © 2026 React Tasks
      </footer>
    </div>
  );
}
