import Logo from './components/Logo';
import Navigation from './components/Navigation';

export const metadata = {
  title: 'The Wild Oasis',
  description: 'The Best Hotel App in the World',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
