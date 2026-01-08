import { Outlet } from "react-router-dom";

export function LayoutDark() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-14 flex items-center px-6 bg-background border-b shadow-md z-50">
        <h1 className="text-lg font-semibold">React Tasks - WINTER layout</h1>
      </header>

      {/* Main content */}
      <main className="flex-1 p-6 pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="h-12 border-t flex items-center justify-center text-sm text-muted-foreground">
        © 2026 React Tasks
      </footer>
    </div>
  );
}
