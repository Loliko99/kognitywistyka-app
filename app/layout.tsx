import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: " Codzienna dawka kognitywistycznej wiedzy",
  description: "Potwierdzone naukowo ciekawostki o tym, jak dziala umysl.",
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
