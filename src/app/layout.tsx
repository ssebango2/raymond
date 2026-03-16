// src/layout.tsx

import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './ui/navbar';
import Footer from './ui/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
