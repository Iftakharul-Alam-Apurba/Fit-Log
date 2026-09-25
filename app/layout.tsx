import type { Metadata } from 'next';
import './globals.css';
import Nav from './components/shared/nav/Nav';
import Footer from './components/shared/Footer';
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
      <body className="flex min-h-screen flex-col bg-[#0e1015]">
        <Nav />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}