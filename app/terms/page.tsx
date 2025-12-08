import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-luxury-cream to-soft-pink py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-deep-rose to-rose-gold bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Terms and conditions for using LuxeBeauty products and services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-8">
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>

            <Card className="shadow-lg border-0 bg-linear-to-b from-luxury-cream to-card">
              <CardHeader>
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By accessing and using LuxeBeauty&apos;s website and services, you
                  accept and agree to be bound by the terms and provision of
                  this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-linear-to-b from-luxury-cream to-card">
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We strive to ensure that product information on our website is
                  accurate. However:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Product colors may vary slightly due to monitor settings
                  </li>
                  <li>
                    Jewelry pieces may have natural variations in materials
                  </li>
                  <li>Product availability is subject to stock levels</li>
                  <li>We reserve the right to modify product specifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-linear-to-b from-luxury-cream to-card">
              <CardHeader>
                <CardTitle>Orders and Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  When you place an order with us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    You are making an offer to purchase products at the listed
                    prices
                  </li>
                  <li>We reserve the right to accept or decline your order</li>
                  <li>Payment is required at the time of order placement</li>
                  <li>All prices are in USD and subject to applicable taxes</li>
                  <li>
                    We may cancel orders due to pricing errors or product
                    unavailability
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-linear-to-b from-luxury-cream to-card">
              <CardHeader>
                <CardTitle>Returns and Refunds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our return policy includes the following terms:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Cosmetic products: 30-day return policy for unopened items
                  </li>
                  <li>
                    Jewelry: 14-day return policy with authenticity certificate
                  </li>
                  <li>Items must be in original condition and packaging</li>
                  <li>Personalized or custom items are non-returnable</li>
                  <li>
                    Return shipping costs are the responsibility of the customer
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-linear-to-b from-luxury-cream to-card">
              <CardHeader>
                <CardTitle>User Accounts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  When creating an account:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>You must provide accurate and complete information</li>
                  <li>You are responsible for maintaining account security</li>
                  <li>
                    You must notify us immediately of any unauthorized use
                  </li>
                  <li>One account per person is permitted</li>
                  <li>We may suspend accounts that violate our terms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-linear-to-b from-luxury-cream to-card">
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  All content on our website is protected by intellectual
                  property rights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>LuxeBeauty trademarks and logos are our property</li>
                  <li>Product images and descriptions are copyrighted</li>
                  <li>Website design and functionality are protected</li>
                  <li>Users may not reproduce content without permission</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-linear-to-b from-luxury-cream to-card">
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our liability is limited as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    We are not liable for indirect or consequential damages
                  </li>
                  <li>
                    Our maximum liability is limited to the purchase price of
                    products
                  </li>
                  <li>
                    We do not guarantee uninterrupted website availability
                  </li>
                  <li>Users assume responsibility for proper product use</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-linear-to-b from-luxury-cream to-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: legal@luxebeauty.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Luxury Lane, Beverly Hills, CA 90210</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}