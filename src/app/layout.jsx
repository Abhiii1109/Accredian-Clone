import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Accredian | Future of Learning',
  description: 'Awwwards Winning Upskilling Platform',
};

import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/Cursor';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#0c0c0c] text-[#f2f2f2] noise-bg cursor-none" suppressHydrationWarning>
        <CustomCursor />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
