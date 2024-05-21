import { Roboto } from 'next/font/google';
import { Header } from 'app/components/home/Header';
import { Footer } from 'app/components/home/Footer';
import 'app/sass/globals.sass';
import Head from 'next/head';
import { Metadata } from 'next';

const roboto = Roboto({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My Content Feeds',
  description: 'Application to view my content feeds',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
