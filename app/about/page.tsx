import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-luxury-cream to-soft-pink py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-deep-rose to-rose-gold bg-clip-text text-transparent">
              About LuxeBeauty
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting beauty experiences that celebrate your unique elegance
            since 2020
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Our Story
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  LuxeBeauty was born from a passion for creating exceptional
                  beauty products that enhance natural radiance. Our founder,
                  inspired by the timeless elegance of vintage Hollywood
                  glamour, set out to develop a brand that combines luxury with
                  accessibility.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every product in our collection is meticulously crafted using
                  the finest ingredients and materials, ensuring that you
                  receive nothing but the best. From our signature rose gold
                  cosmetics to our handpicked jewelry pieces, each item tells a
                  story of quality and sophistication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-linear-to-r from-luxury-cream to-soft-pink">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-linear-to-r from-deep-rose to-rose-gold rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Quality First
              </h3>
              <p className="text-muted-foreground">
                We source only the finest materials and ingredients, ensuring
                every product meets our exacting standards.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-linear-to-r from-deep-rose to-rose-gold rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Sustainability
              </h3>
              <p className="text-muted-foreground">
                Committed to ethical sourcing and environmentally conscious
                practices in all our operations.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-linear-to-r from-deep-rose to-rose-gold rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Timeless Elegance
              </h3>
              <p className="text-muted-foreground">
                Creating pieces that transcend trends, designed to be cherished
                for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind LuxeBeauty&apos;s success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <Image
                src="/placeholder.svg"
                alt="Elena Rodriguez"
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                width={32}
                height={32}
              />
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Elena Rodriguez
                </h3>
                <p className="text-primary">Founder & Creative Director</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Visionary leader with 15 years in luxury beauty
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Image
                src="/placeholder.svg"
                alt="Marcus Chen"
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                width={32}
                height={32}
              />
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Marcus Chen
                </h3>
                <p className="text-primary">Master Jeweler</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Award-winning artisan specializing in fine jewelry
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Image
                src="/placeholder.svg"
                alt="Sofia Williams"
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                width={32}
                height={32}
              />
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Sofia Williams
                </h3>
                <p className="text-primary">Head of Product Development</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Cosmetic chemist with expertise in luxury formulations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-luxury-cream to-soft-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Join Our Journey
            </h2>
            <p className="text-muted-foreground">
              Experience the LuxeBeauty difference and discover products that
              celebrate your unique beauty.
            </p>
            <Link href="/products">
              <Button
                size="lg"
                className="bg-linear-to-r from-deep-rose to-rose-gold hover:shadow-luxury transition-all"
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}