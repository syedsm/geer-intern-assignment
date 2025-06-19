'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Trash2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onDelete?: (id: string) => void;
  showDeleteButton?: boolean;
}

export function ProductCard({ product, onDelete, showDeleteButton }: ProductCardProps) {
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onDelete) {
      onDelete(product.id);
    }
  };

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
        {showDeleteButton && onDelete && (
          <Button
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
        
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Badge variant="secondary" className="bg-red-100 text-red-800">
                Out of Stock
              </Badge>
            </div>
          )}
          <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              {product.category}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          
          {product.rating && product.reviews && (
            <div className="flex items-center gap-1 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating!)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            {product.inStock && (
              <Badge variant="outline" className="text-green-600 border-green-600">
                In Stock
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}