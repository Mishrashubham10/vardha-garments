'use client';

import { Heart, Menu, ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Badge } from './ui/badge';
import { useVardha } from '@/context/VardhaContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/new-arrivals', label: 'New Arrivals' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact Us' },
];

export const Navigation = () => {
  const { state } = useVardha();
  const itemCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="nav-bg sticky top-0 z-50 w-full border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="mt-8 space-y-6">
                <Link
                  href="/"
                  className="block text-2xl font-playfair font-semibold text-foreground"
                >
                  Vardha
                </Link>
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      href={link.to}
                      className="block text-foreground hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-playfair font-semibold text-foreground tracking-wide"
          >
            Vardha
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground hidden sm:flex"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="sm" className='relative'>
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs"
                  >
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground hidden sm:flex"
              >
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};