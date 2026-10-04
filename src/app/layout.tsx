import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SearchModal from '@/components/modals/SearchModal';
import JoinModal from '@/components/modals/JoinModal';
import Toast from '@/components/shared/Toast';

export const metadata: Metadata = {
  title: "TheBTechGuy — Where India's builders learn, connect, build and launch",
  description: "One ecosystem for India's students, developers, founders, creators, mentors and companies.",
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Instrument+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppProvider>
          <Navbar />
          <main id="app" className="wrap">
            {children}
          </main>
          <Footer />
          <SearchModal />
          <JoinModal />
          <Toast />
        </AppProvider>
      </body>
    </html>
  );
}
