import type { Metadata } from 'next';
import './global.css';
import { poppins, raleway, roboto } from '@/libs/fonts';

export const metadata: Metadata = {
  title: 'Namma Journey',
  description:
    'Namma Journey is a travel app that helps travellers discover travel plans and join rooms to travel together.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${raleway.variable} ${roboto.variable} mx-auto h-screen w-screen bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
