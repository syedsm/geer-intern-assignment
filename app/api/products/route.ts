import { NextRequest, NextResponse } from 'next/server';
import { getProducts, addProduct } from '@/lib/products-data';
import { Product } from '@/types/product';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    
    let products = getProducts();
    
    // Apply search filter
    if (search) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Apply category filter
    if (category && category !== 'all') {
      products = products.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, price, imageUrl, category, description, inStock } = body;
    
    if (!name || !price || !imageUrl || !category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const newProduct = addProduct({
      name,
      price: parseFloat(price),
      imageUrl,
      category,
      description: description || '',
      inStock: inStock !== false,
      rating: 0,
      reviews: 0
    });
    
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}