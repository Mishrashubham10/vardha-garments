import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import Link from 'next/link';

export default function NewArrivalsPage() {
  const newArrivals = products.filter((p) => p.isNew);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-playfair font-medium text-foreground mb-3">
            New Arrivals
          </h1>
          <p className="text-muted-foreground">
            Fresh styles just added to our collection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}