import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';

// Fonts
import { Josefin_Sans } from 'next/font/google';
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

// Global styles
import '@/app/_styles/globals.css';

export const metadata = {
  title: {
    default: 'Welcome | The Wild Oasis',
    template: '%s | The Wild Oasis',
  },
  description: 'Discover luxury cabins in the heart of the Italian Dolomites',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        {/* Logo and Navigation */}
        <header>
          <Logo />
          <Navigation />
        </header>

        {/* Main */}
        <main> {children}</main>

        {/* Footer */}
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
