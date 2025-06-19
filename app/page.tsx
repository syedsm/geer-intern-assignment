'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { JewelryHero } from '@/components/jewelry-hero';
import { BrandShowcase } from '@/components/brand-showcase';
import { PromotionalBanner } from '@/components/promotional-banner';
import { JewelryVideoSection } from '@/components/jewelry-video-section';
import { ShoppingBag, Search, Star, Shield, Truck, CreditCard, Gem, Crown, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <JewelryHero />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Jewelry
            </h2>
            <p className="text-xl text-gray-600">
              Experience luxury, quality, and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Gem className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
                <p className="text-gray-600">Handcrafted jewelry using the finest materials and gemstones.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Luxury Brands</h3>
                <p className="text-gray-600">Exclusive collections from world-renowned jewelry houses.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Lifetime Warranty</h3>
                <p className="text-gray-600">Comprehensive warranty and professional maintenance services.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Custom Design</h3>
                <p className="text-gray-600">Personalized jewelry design services for unique pieces.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <PromotionalBanner />

      {/* Brand Showcase */}
      <BrandShowcase />

      {/* Video Section */}
      <JewelryVideoSection />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Discover Your Perfect Jewelry
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Browse our extensive collection of rings, necklaces, earrings, and more. Find the perfect piece that speaks to your style.
            </p>
            <Link href="/products">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white px-8 py-4 text-lg">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Shop Jewelry Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}