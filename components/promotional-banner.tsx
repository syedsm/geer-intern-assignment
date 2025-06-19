'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, Sparkles, Clock, Star, Heart, Crown } from 'lucide-react';

const promotions = [
  {
    id: 1,
    title: 'Valentine\'s Day Special',
    subtitle: 'Love is in the Air',
    discount: '40% OFF',
    description: 'Express your love with our romantic jewelry collection',
    image: 'https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Heart,
    color: 'from-pink-500 to-red-500',
    bgColor: 'from-pink-50 to-red-50'
  },
  {
    id: 2,
    title: 'Bridal Season Sale',
    subtitle: 'Your Perfect Day',
    discount: '30% OFF',
    description: 'Complete bridal jewelry sets for your special moment',
    image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Crown,
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'from-purple-50 to-indigo-50'
  },
  {
    id: 3,
    title: 'Limited Time Offer',
    subtitle: 'Exclusive Collection',
    discount: '50% OFF',
    description: 'Rare gemstones and designer pieces at unbeatable prices',
    image: 'https://images.pexels.com/photos/1454174/pexels-photo-1454174.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Sparkles,
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'from-yellow-50 to-orange-50'
  }
];

export function PromotionalBanner() {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const currentPromotion = promotions[currentPromo];
  const IconComponent = currentPromotion.icon;

  return (
    <section className={`py-16 bg-gradient-to-br ${currentPromotion.bgColor} transition-all duration-1000`}>
      <div className="container mx-auto px-4">
        {/* Flash Sale Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-red-500 text-white px-6 py-2 rounded-full animate-pulse mb-4">
            <Clock className="h-4 w-4 mr-2" />
            <span className="font-semibold">FLASH SALE ENDS IN:</span>
          </div>
          
          <div className="flex justify-center space-x-4 mb-6">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-white rounded-lg shadow-lg p-3 min-w-[60px]">
                  <div className="text-2xl font-bold text-gray-900">{value.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-600 uppercase">{unit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className={`bg-gradient-to-r ${currentPromotion.color} text-white border-none px-4 py-2 text-lg`}>
                <IconComponent className="h-5 w-5 mr-2" />
                {currentPromotion.subtitle}
              </Badge>
              
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                {currentPromotion.title}
              </h2>
              
              <div className={`text-6xl font-black bg-gradient-to-r ${currentPromotion.color} bg-clip-text text-transparent`}>
                {currentPromotion.discount}
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                {currentPromotion.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className={`bg-gradient-to-r ${currentPromotion.color} hover:opacity-90 text-white px-8 py-4 text-lg`}>
                <Gift className="h-5 w-5 mr-2" />
                Shop Now
              </Button>
              
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2">
                View All Offers
              </Button>
            </div>

            {/* Promotion Indicators */}
            <div className="flex space-x-2">
              {promotions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPromo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentPromo 
                      ? `bg-gradient-to-r ${currentPromotion.color}` 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Featured Products */}
          <div className="relative">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-square">
                <img
                  src={currentPromotion.image}
                  alt={currentPromotion.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Floating Discount Badge */}
                <div className="absolute top-4 right-4 animate-bounce">
                  <Badge className={`bg-gradient-to-r ${currentPromotion.color} text-white text-xl px-4 py-2`}>
                    <Star className="h-5 w-5 mr-2" />
                    {currentPromotion.discount}
                  </Badge>
                </div>
                
                {/* Sparkle Effects */}
                <div className="absolute top-8 left-8 animate-pulse">
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="absolute bottom-8 right-8 animate-pulse">
                  <Sparkles className="h-8 w-8 text-pink-400" />
                </div>
              </div>
              
              <CardContent className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Featured Collection</h3>
                <p className="text-gray-600 mb-4">Handpicked pieces for this exclusive offer</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500 line-through">$999.99</span>
                    <span className={`text-3xl font-bold ml-2 bg-gradient-to-r ${currentPromotion.color} bg-clip-text text-transparent`}>
                      $599.99
                    </span>
                  </div>
                  <Button className={`bg-gradient-to-r ${currentPromotion.color} text-white`}>
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}