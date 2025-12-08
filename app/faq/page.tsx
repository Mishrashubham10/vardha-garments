import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQPage() {
  const faqs = [
    {
      question: 'How do I track my order?',
      answer:
        "Once your order is shipped, you'll receive an email with a tracking link. You can also track your order by logging into your account and visiting 'My Orders'.",
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept Credit/Debit cards, UPI, Net Banking, and Cash on Delivery (COD) on select pin codes. All online payments are processed securely.',
    },
    {
      question: 'How long does delivery take?',
      answer:
        'Delivery typically takes 3-5 business days for metro cities and 5-7 business days for other locations. Remote areas may take up to 10 business days.',
    },
    {
      question: 'Can I modify or cancel my order?',
      answer:
        "Orders can be modified or cancelled within 2 hours of placing them. After that, once the order is processed, modifications aren't possible but you can return the item after delivery.",
    },
    {
      question: 'What is your return policy?',
      answer:
        'We offer a 7-day return policy. Items must be unused, unwashed, and in original condition with all tags intact. Certain items like customized products are non-returnable.',
    },
    {
      question: 'How do exchanges work?',
      answer:
        'You can exchange items for a different size or color within 7 days of delivery. Exchange is free and subject to availability.',
    },
    {
      question: 'Are the colors accurate?',
      answer:
        'We try to display accurate colors, but due to monitor variations, actual colors may slightly differ. We recommend checking product descriptions for detailed color information.',
    },
    {
      question: 'Do you offer gift wrapping?',
      answer:
        'Yes, we offer gift wrapping for an additional ₹99. You can select this option during checkout.',
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'You can reach us at support@vardha.com or call +91 98765 43210. Our support team is available Monday to Saturday, 10 AM to 7 PM.',
    },
    {
      question: 'Do you ship internationally?',
      answer:
        "Currently, we only ship within India. We're working on expanding our shipping to international destinations soon.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-playfair font-medium text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground mb-10">
            Find answers to common questions about orders, shipping, returns,
            and more.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-card rounded-lg p-8 text-center">
            <h2 className="text-xl font-playfair font-medium text-foreground mb-3">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find what you&apos;re looking for? Our support team is
              here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}