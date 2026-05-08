import type { ReactNode } from "react";

interface LayoutProps {
  readonly children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#0B1220] text-slate-100">
      <main>{children}</main>
    </div>
  );
};
