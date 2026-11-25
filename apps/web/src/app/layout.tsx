import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'bela360 - Automaçêo para Negócios de Beleza',
  description:
    'Plataforma de automaçêo completa para salões, barbearias e clínicas de estética',
  keywords: ['salêo', 'barbearia', 'estética', 'agendamento', 'whatsapp', 'automaçêo'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
