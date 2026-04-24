import type { ReactNode } from "react";

interface LayoutProps {
  readonly children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">{children}</main>
    </div>
  );
};
