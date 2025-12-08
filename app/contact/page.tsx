import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-luxury-cream to-soft-pink py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-deep-rose to-rose-gold bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-luxury border-0 bg-linear-to-b from-luxury-cream to-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      className="min-h-32"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-linear-to-r from-deep-rose to-rose-gold hover:shadow-luxury transition-all"
                  >
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-linear-to-b from-luxury-cream to-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-linear-to-r from-deep-rose to-rose-gold rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Visit Our Store
                      </h3>
                      <p className="text-muted-foreground">
                        104D Riddhisiddhi complex, Kamrajnagar Uttannagarrad2,
                        <br />
                        Goregaon West (Mumbai),
                        <br />
                        Mumbai - 400104
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-linear-to-b from-luxury-cream to-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-linear-to-r from-deep-rose to-rose-gold rounded-full flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Call Us
                      </h3>
                      <p className="text-muted-foreground">
                        +91 9975161448
                        <br />
                        Monday - Friday: 9am - 6pm PST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-linear-to-b from-luxury-cream to-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-linear-to-r from-deep-rose to-rose-gold rounded-full flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Email Us
                      </h3>
                      <p className="text-muted-foreground">
                        arments66@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-linear-to-b from-luxury-cream to-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-linear-to-r from-deep-rose to-rose-gold rounded-full flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Store Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 10:30am - 6:30pm
                        <br />
                        Sunday: 11am - 4pm
                        <br />
                        Holiday hours may vary
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-linear-to-r from-luxury-cream to-soft-pink">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">
                What is your return policy?
              </h3>
              <p className="text-muted-foreground">
                We offer a 30-day return policy for unopened products in
                original condition. Jewelry items can be returned within 14 days
                with authenticity certificate.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">
                Do you offer international shipping?
              </h3>
              <p className="text-muted-foreground">
                Yes, we ship worldwide! International shipping rates and
                delivery times vary by location. Please contact us for specific
                information about your country.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">
                Are your products cruelty-free?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! All Vardha&apos;s products are cruelty-free
                and we never test on animals.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">
                How can I track my order?
              </h3>
              <p className="text-muted-foreground">
                Once your order ships, you&apos;ll receive a tracking number via
                email. You can also track your order status in your account
                dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}