'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Crown, Gem, Star, Heart, Sparkles, Award } from 'lucide-react';

const brands = [
  {
    id: 1,
    name: 'Tiffany & Co.',
    logo: Crown,
    description: 'Iconic luxury jewelry since 1837',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Diamond Engagement Rings',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Cartier',
    logo: Gem,
    description: 'French luxury jewelry and watches',
    image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Love Collection',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 3,
    name: 'Bulgari',
    logo: Star,
    description: 'Italian luxury jewelry house',
    image: 'https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Serpenti Collection',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 4,
    name: 'Van Cleef & Arpels',
    logo: Heart,
    description: 'French high jewelry maison',
    image: 'https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Alhambra Collection',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    name: 'Harry Winston',
    logo: Sparkles,
    description: 'King of Diamonds',
    image: 'https://images.pexels.com/photos/1454174/pexels-photo-1454174.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Rare Pink Diamonds',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 6,
    name: 'Graff',
    logo: Award,
    description: 'Exceptional diamonds and jewelry',
    image: 'https://images.pexels.com/photos/1454175/pexels-photo-1454175.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Rare Colored Diamonds',
    color: 'from-gray-600 to-gray-800'
  }
];

export function BrandShowcase() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-purple-100 text-purple-800 mb-4">
            <Crown className="h-4 w-4 mr-2" />
            Luxury Brands
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            World's Most Prestigious Jewelry Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover collections from the most renowned jewelry houses, each with their unique heritage and craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => {
            const IconComponent = brand.logo;
            return (
              <Card key={brand.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${brand.color} text-white`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{brand.name}</h3>
                    <p className="text-sm opacity-90">{brand.description}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
                      {brand.specialty}
                    </Badge>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${brand.color} hover:opacity-90 text-white`}>
                    Explore Collection
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}