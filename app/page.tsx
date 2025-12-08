import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&h=1080&fit=crop"
              alt="Vardha Collection"
              className="object-cover"
              fill
            />
          </div>
          <div className="absolute inset-0 bg-foreground/40" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-xl text-background">
            <p className="text-sm uppercase tracking-widest mb-4 opacity-90 animate-fade-up">
              New Collection 2024
            </p>
            <h1 className="text-4xl md:text-6xl font-playfair font-medium leading-tight mb-6 animate-fade-up stagger-1">
              Crafted with Care, Worn with Pride
            </h1>
            <p className="text-lg opacity-90 mb-8 animate-fade-up stagger-2">
              Discover our handcrafted garments that celebrate tradition and
              contemporary elegance.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up stagger-3">
              <Link href="/new-arrivals">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  Shop New Arrivals
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background text-background hover:bg-background hover:text-foreground"
                >
                  Explore Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-medium text-foreground mb-3">
              Shop by Category
            </h2>
            <p className="text-muted-foreground">Find your perfect style</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-playfair font-medium text-foreground mb-2">
                Featured Products
              </h2>
              <p className="text-muted-foreground">Handpicked for you</p>
            </div>
            <Link href="/new-arrivals">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-medium text-foreground mb-3">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive updates on new arrivals and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}