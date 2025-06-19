'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/product-card';
import { ProductSearch } from '@/components/product-search';
import { AddProductForm } from '@/components/add-product-form';
import { Badge } from '@/components/ui/badge';
import { Loader2, Gem, Crown, Sparkles } from 'lucide-react';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const fetchProducts = async () => {
    try {
      const params = new URLSearchParams();
      if (searchQuery) params.append('search', searchQuery);
      if (selectedCategory !== 'all') params.append('category', selectedCategory);
      
      const response = await fetch(`/api/products?${params}`);
      
      if (response.ok) {
        const data = await response.json();
        // Ensure data is an array before setting products
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('API returned non-array data:', data);
          setProducts([]);
        }
      } else {
        console.error('API request failed with status:', response.status);
        setProducts([]);
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        await fetchProducts();
      }
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, selectedCategory]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin mb-4">
            <Gem className="h-12 w-12 text-purple-600 mx-auto" />
          </div>
          <p className="text-gray-600 text-lg">Loading jewelry collection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 text-lg">
              <Crown className="h-5 w-5 mr-2" />
              Premium Collection
            </Badge>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Luxury Jewelry Collection
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our exquisite selection of handcrafted jewelry featuring the finest gemstones, 
            precious metals, and timeless designs from renowned artisans worldwide.
          </p>
          
          <div className="flex items-center justify-center space-x-6 mt-6">
            <div className="flex items-center text-gray-600">
              <Sparkles className="h-5 w-5 mr-2 text-yellow-500" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Crown className="h-5 w-5 mr-2 text-purple-500" />
              <span>Luxury Brands</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Gem className="h-5 w-5 mr-2 text-pink-500" />
              <span>Certified Authentic</span>
            </div>
          </div>
        </div>

        <ProductSearch
          onSearch={setSearchQuery}
          onCategoryFilter={setSelectedCategory}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />

        <AddProductForm onProductAdded={fetchProducts} />

        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-6">
              <Gem className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No jewelry found</h3>
            <p className="text-gray-500 text-lg">Try adjusting your search criteria or browse all categories</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                {products.length} {products.length === 1 ? 'Piece' : 'Pieces'} Found
              </h2>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-purple-600 border-purple-600">
                  {selectedCategory === 'all' ? 'All Categories' : selectedCategory}
                </Badge>
                {searchQuery && (
                  <Badge variant="outline" className="text-pink-600 border-pink-600">
                    "{searchQuery}"
                  </Badge>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onDelete={handleDeleteProduct}
                  showDeleteButton={true}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}