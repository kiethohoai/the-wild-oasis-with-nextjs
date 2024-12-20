// Fonts
import { Josefin_Sans } from 'next/font/google';
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

// Global styles
import '@/app/_styles/globals.css';
import Header from './_components/Header';

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
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col
          antialiased`}
      >
        {/* Header (Logo and Navigation) */}
        <Header />

        {/* Main */}
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full"> {children}</main>
        </div>
      </body>
    </html>
  );
}
