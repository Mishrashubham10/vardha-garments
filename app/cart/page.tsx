'use client';

import { CheckoutPopup } from '@/components/CheckoutPopup';
import { Button } from '@/components/ui/button';
import { useVardha } from '@/context/VardhaContext';
import { ArrowRight, Minus, Plus, ShoppingCart, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

export default function CartPage() {
  const { state, dispatch } = useVardha();
  const [open, setOpen] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
    toast('Item removed', {
      description: 'Item has been removed from your cart.',
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast('Cart cleared', {
      description: 'All items have been removed from your cart.',
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center py-24">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-muted flex items-center justify-center">
                <ShoppingCart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="font-display text-3xl mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Button asChild size="lg">
                <Link href="/products">
                  Start Shopping
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const handleCheckout = () => {
    setIsProcessing(true);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h1 className="font-display text-4xl">Shopping Cart</h1>
              <button
                onClick={clearCart}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear all
              </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {state.items.map((item, index) => (
                  <div
                    key={item.id}
                    className="group relative bg-card rounded-2xl p-6 border border-border/50 hover:border-border transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex gap-6">
                      <div className="relative w-28 h-28 rounded-xl bg-muted overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          fill
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-lg mb-1">
                              {item.name}
                            </h3>
                            {item.size && (
                              <p className="text-sm text-muted-foreground">
                                Size: {item.size}
                              </p>
                            )}
                            {/* {item.color && (
                              <p className="text-sm text-muted-foreground">
                                Color: {item.color}
                              </p>
                            )} */}
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 hover:bg-muted rounded-full transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3 bg-muted rounded-full p-1">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 flex items-center justify-center hover:bg-background rounded-full transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 flex items-center justify-center hover:bg-background rounded-full transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="font-display text-xl">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 bg-card rounded-2xl p-8 border border-border/50">
                  <h2 className="font-display text-xl mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{state.total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-primary">Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span>
                        ₹{Math.round(state.total * 0.18).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between font-display text-xl">
                      <span>Total</span>
                      <span>
                        ₹{Math.round(state.total * 1.18).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <Button
                    className="w-full h-12 text-base"
                    size="lg"
                    onClick={handleCheckout}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
                  </Button>
                  <CheckoutPopup
                    open={open}
                    setOpen={setOpen}
                    title="Order Successful 🎉"
                    description="Thank you for shopping with us. Your order has been placed and
              will be delivered soon!"
                  />

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Free shipping on orders above ₹2,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
