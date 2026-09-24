import type { Metadata } from 'next';
import './globals.css';

import Nav from '@/app/components/shared/nav/Nav';
import Footer from '@/app/components/shared/Footer';

export const metadata: Metadata = {
  title: 'FitLog',
  description: 'Workout Library',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0e1015]">
        <Nav />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}