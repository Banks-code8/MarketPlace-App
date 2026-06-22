import { Lato } from 'next/font/google';
import './globals.css';
import Headers from '@/components/partials/Headers';
import { Toaster } from 'react-hot-toast';
import 'flowbite';
import Footer from '@/components/partials/Footer';

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato-sans',
  weight: ['100', '300', '400', '700', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} overflow-x-hidden`}>
        <Headers />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
