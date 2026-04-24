import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Ciekawostki Kognitywistyczne Dnia",
  description: "Codzienna, naukowo potwierdzona ciekawostka o tym, jak dziala umysl.",
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
