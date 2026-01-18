import type { Metadata } from 'next';
import './globals.css';
import StructuredData from './components/StructuredData';

export const metadata: Metadata = {
  title: 'White-Label Landing Pages for Marketing Agencies | Mubeen Ahmad',
  description: 'Earn 20% commission on landing pages. Healthcare-focused web developer offering white-label landing pages and clinic websites. 48-72h delivery. Pakistan.',
  keywords: 'landing page developer, white label web developer, healthcare website developer, clinic website, medical landing page, Pakistan web developer, agency partnership, commission based, Mubeen Ahmad',
  authors: [{ name: 'Mubeen Ahmad' }],
  creator: 'Mubeen Ahmad',
  publisher: 'Mubeen Ahmad',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-site.vercel.app',
    siteName: 'Mubeen Ahmad - Web Developer',
    title: 'White-Label Landing Pages for Marketing Agencies',
    description: 'Earn 20% commission on landing pages. Healthcare-focused developer. 48-72h delivery.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White-Label Landing Pages for Marketing Agencies',
    description: 'Earn 20% commission. Healthcare-focused. 48-72h delivery.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://your-site.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <StructuredData />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}