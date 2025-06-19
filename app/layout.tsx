import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Gem } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LuxeJewels - Premium Jewelry Collection',
  description: 'Discover exquisite jewelry from world-renowned brands. Luxury rings, necklaces, earrings, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                  <Gem className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  LuxeJewels
                </span>
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  Home
                </Link>
                <Link href="/products" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  Jewelry
                </Link>
                <Link href="/products" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                    <Gem className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">LuxeJewels</span>
                </div>
                <p className="text-gray-300">
                  Premium jewelry collection featuring the world's finest gemstones and craftsmanship.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Collections</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/products" className="hover:text-white transition-colors">Rings</Link></li>
                  <li><Link href="/products" className="hover:text-white transition-colors">Necklaces</Link></li>
                  <li><Link href="/products" className="hover:text-white transition-colors">Earrings</Link></li>
                  <li><Link href="/products" className="hover:text-white transition-colors">Bracelets</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="#" className="hover:text-white transition-colors">Custom Design</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Jewelry Repair</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Appraisal</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Insurance</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>1-800-LUXE-GEM</li>
                  <li>info@luxejewels.com</li>
                  <li>Mon-Sat: 10AM-8PM</li>
                  <li>Sun: 12PM-6PM</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>© 2025 LuxeJewels. Crafted with precision and passion.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}