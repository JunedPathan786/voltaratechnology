import { Analytics } from '@vercel/analytics/next';
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { MotionProvider } from '@/components/motion/motion-provider';
import { PageEntrance } from '@/components/motion/page-entrance';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap'
});
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap'
});
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://voltaratechnologies.com'),
  title: 'Voltara Technologies | Embedded Systems, IoT & Automation Company',
  description: 'Voltara Technologies provides embedded systems, IoT, PCB design, industrial automation, robotics and custom electronics solutions for startups, students and industrial teams.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.png'
  },
  openGraph: {
    images: [{
      url: '/images/logo.png'
    }]
  }
};
export const viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0c10'
};
export default function RootLayout({
  children
}) {
  return <html lang="en" className={`dark bg-background ${spaceGrotesk.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased">
        <meta name="google-site-verification" content="ULJH0iEknE-ONZjfPEvb_K-dIlrrjjFok6H0YeRsIeM" />
        <MotionProvider>
          <SiteHeader />
          <SmoothScroll>
            <PageEntrance>{children}</PageEntrance>
          </SmoothScroll>
          <SiteFooter />
        </MotionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>;
}
