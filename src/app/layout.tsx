import '@/app/globals.css';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto();

export const metadata: Metadata = {
  title: {
    template: '%s | Basic Todo',
    default: 'Basic Todo'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased ${roboto.className}`}>
      <body>{children}</body>
    </html>
  );
}
