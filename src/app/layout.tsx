import type { Metadata } from 'next';
import './globals.css';
import { LayoutClient } from './layout.client';

export const metadata: Metadata = {
  title: 'react-state-manager',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <LayoutClient />
        { children }
      </body>
    </html>
  );
}
