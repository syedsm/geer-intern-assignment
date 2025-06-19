import { Product } from '@/types/product';

export let products: Product[] = [
  // Luxury Diamond Collection
  {
    id: '1',
    name: 'Eternal Diamond Solitaire Ring',
    price: 2499.99,
    imageUrl: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Rings',
    description: 'Exquisite 1.5 carat diamond solitaire ring set in 18k white gold. Perfect for engagements and special occasions.',
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '2',
    name: 'Royal Sapphire Tennis Bracelet',
    price: 1899.99,
    imageUrl: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bracelets',
    description: 'Stunning tennis bracelet featuring premium sapphires and diamonds in 14k yellow gold setting.',
    inStock: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: '3',
    name: 'Vintage Pearl Drop Earrings',
    price: 599.99,
    imageUrl: 'https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Earrings',
    description: 'Elegant freshwater pearl drop earrings with vintage-inspired design in sterling silver.',
    inStock: true,
    rating: 4.7,
    reviews: 234
  },
  {
    id: '4',
    name: 'Infinity Love Necklace',
    price: 899.99,
    imageUrl: 'https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Necklaces',
    description: 'Beautiful infinity symbol necklace with micro-pave diamonds in rose gold plating.',
    inStock: true,
    rating: 4.6,
    reviews: 178
  },
  {
    id: '5',
    name: 'Emerald Cocktail Ring',
    price: 1299.99,
    imageUrl: 'https://images.pexels.com/photos/1454174/pexels-photo-1454174.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Rings',
    description: 'Statement emerald cocktail ring surrounded by brilliant cut diamonds in platinum setting.',
    inStock: false,
    rating: 4.9,
    reviews: 67
  },
  {
    id: '6',
    name: 'Art Deco Diamond Brooch',
    price: 1599.99,
    imageUrl: 'https://images.pexels.com/photos/1454175/pexels-photo-1454175.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Brooches',
    description: 'Vintage-inspired Art Deco brooch featuring geometric diamond patterns in white gold.',
    inStock: true,
    rating: 4.8,
    reviews: 45
  },
  {
    id: '7',
    name: 'Rose Gold Chain Bracelet',
    price: 449.99,
    imageUrl: 'https://images.pexels.com/photos/1454176/pexels-photo-1454176.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bracelets',
    description: 'Delicate rose gold chain bracelet with adjustable length and secure clasp.',
    inStock: true,
    rating: 4.5,
    reviews: 312
  },
  {
    id: '8',
    name: 'Crystal Chandelier Earrings',
    price: 799.99,
    imageUrl: 'https://images.pexels.com/photos/1454177/pexels-photo-1454177.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Earrings',
    description: 'Glamorous chandelier earrings with cascading crystals perfect for evening wear.',
    inStock: true,
    rating: 4.7,
    reviews: 123
  },
  {
    id: '9',
    name: 'Luxury Watch Collection',
    price: 3299.99,
    imageUrl: 'https://images.pexels.com/photos/1454178/pexels-photo-1454178.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Watches',
    description: 'Premium Swiss-made timepiece with diamond hour markers and leather strap.',
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: '10',
    name: 'Birthstone Pendant Set',
    price: 349.99,
    imageUrl: 'https://images.pexels.com/photos/1454179/pexels-photo-1454179.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Necklaces',
    description: 'Personalized birthstone pendant with matching chain in your choice of metal.',
    inStock: true,
    rating: 4.6,
    reviews: 267
  }
];

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function addProduct(product: Omit<Product, 'id'>): Product {
  const newProduct: Product = {
    ...product,
    id: Date.now().toString()
  };
  products.push(newProduct);
  return newProduct;
}

export function deleteProduct(id: string): boolean {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    return true;
  }
  return false;
}