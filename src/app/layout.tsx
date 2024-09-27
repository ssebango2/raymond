// src/layout.tsx

import { Lusitana } from '@next/font/google';
import './globals.css';
import Navbar from './ui/navbar';

const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className={lusitana.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
