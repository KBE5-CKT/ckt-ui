import type { Metadata } from "next";
import "./reset.css";

import GlobalStyle from '@/styles/globalStyles';
import { ThemeProviderWrapper } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "CKT UI Kit",
  description: "CKT 차량 관제 UI Kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ThemeProviderWrapper>
          <GlobalStyle />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}

