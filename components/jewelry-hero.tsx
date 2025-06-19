'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gem, Sparkles, Crown, Heart, Star, Play } from 'lucide-react';
import Link from 'next/link';

const heroSlides = [
  {
    id: 1,
    title: 'Luxury Diamond Collection',
    subtitle: 'Timeless Elegance',
    description: 'Discover our exquisite diamond jewelry crafted with precision and passion',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: 'Shop Diamonds',
    accent: 'from-blue-600 to-purple-600'
  },
  {
    id: 2,
    title: 'Bridal Collection',
    subtitle: 'Your Perfect Day',
    description: 'Make your special moments unforgettable with our bridal jewelry collection',
    image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: 'View Bridal',
    accent: 'from-rose-500 to-pink-600'
  },
  {
    id: 3,
    title: 'Designer Watches',
    subtitle: 'Time Redefined',
    description: 'Luxury timepieces that blend traditional craftsmanship with modern design',
    image: 'https://images.pexels.com/photos/1454178/pexels-photo-1454178.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: 'Explore Watches',
    accent: 'from-amber-500 to-orange-600'
  }
];

export function JewelryHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-pulse">
          <Sparkles className="h-8 w-8 text-yellow-400 opacity-70" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce">
          <Gem className="h-6 w-6 text-pink-400 opacity-60" />
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse">
          <Crown className="h-10 w-10 text-purple-400 opacity-50" />
        </div>
        <div className="absolute bottom-20 right-40 animate-bounce">
          <Star className="h-7 w-7 text-blue-400 opacity-60" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none px-4 py-2">
                <Heart className="h-4 w-4 mr-2" />
                Premium Jewelry Collection
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className={`bg-gradient-to-r ${heroSlides[currentSlide].accent} bg-clip-text text-transparent`}>
                  {heroSlides[currentSlide].title}
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-light text-purple-200">
                {heroSlides[currentSlide].subtitle}
              </h2>
              
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className={`bg-gradient-to-r ${heroSlides[currentSlide].accent} hover:opacity-90 text-white px-8 py-4 text-lg`}>
                  <Gem className="h-5 w-5 mr-2" />
                  {heroSlides[currentSlide].cta}
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg">
                <Play className="h-5 w-5 mr-2" />
                Watch Collection Video
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Featured Product */}
          <div className="relative">
            <Card className="overflow-hidden bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-500">
              <div className="relative aspect-square">
                <img
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 animate-pulse">
                  <Badge className="bg-yellow-500 text-black">
                    <Star className="h-3 w-3 mr-1" />
                    Premium
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Featured Collection</h3>
                <p className="text-gray-300 mb-4">Handcrafted with the finest materials</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-yellow-400">From $299</span>
                  <Button variant="secondary" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse" />
    </div>
  );
}