import type { Metadata } from 'next';
import { Nunito, Quicksand } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import StoreProvider from '@/providers/storeProvider';
import QueryProvider from '@/providers/queryProvider';

const quicksand = Quicksand({
  variable: '--font-quicksand',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const nunito = Nunito({
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Booky',
  description: 'Libary Web Application',
  icons: {
    icon: '/favicon/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-scroll-behavior='smooth'>
      <body className={`${quicksand.variable} ${nunito.variable} antialiased`}>
        <StoreProvider>
          <QueryProvider>
            <Toaster />
            {children}
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
