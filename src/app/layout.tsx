import type { Metadata } from 'next';
import './reset.css';

import GlobalStyle from '@/styles/globalStyles';
import { ThemeProviderWrapper } from '@/context/ThemeContext';
import StyledComponentsRegistry from '@/lib/registry';

export const metadata: Metadata = {
  title: 'CKT UI Kit',
  description: 'CKT 차량 관제 UI Kit',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>
            <GlobalStyle />
            {children}
          </ThemeProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
