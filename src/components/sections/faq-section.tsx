"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How does the AI trip planner work?",
    answer:
      "Our AI analyzes your preferences, budget, travel dates, and interests to create a personalized itinerary. It considers factors like weather, local events, travel times, and user reviews to optimize your trip. Simply describe your ideal vacation, and our AI does the rest!",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely! We use bank-level encryption (SSL/TLS) to protect all transactions. We're PCI DSS compliant and never store your full credit card details. All payments are processed through secure, trusted payment gateways.",
  },
  {
    question: "Can I modify my trip after booking?",
    answer:
      "Yes! You can modify most bookings through your dashboard. Changes depend on the cancellation policy of your accommodation and activities. Our 24/7 support team is always available to help you make changes.",
  },
  {
    question: "What if I need to cancel my trip?",
    answer:
      "Cancellation policies vary by booking. Most accommodations offer free cancellation up to 24-48 hours before check-in. You can view specific cancellation terms before booking, and we'll help you process any eligible refunds.",
  },
  {
    question: "Do you offer travel insurance?",
    answer:
      "Yes! We partner with leading travel insurance providers to offer comprehensive coverage including trip cancellation, medical emergencies, lost baggage, and more. You can add insurance during the booking process.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "We offer 24/7 customer support via live chat, email (hello@tripnest.ai), and phone. You can also access our comprehensive help center with guides and FAQs. Our average response time is under 2 minutes!",
  },
  {
    question: "Can I book for a group or family?",
    answer:
      "Absolutely! Our platform supports group bookings of any size. The AI planner can create itineraries for families, friend groups, or corporate retreats. You'll get group discounts on many accommodations and activities.",
  },
  {
    question: "What makes TripNest AI different from other booking sites?",
    answer:
      "Unlike traditional booking sites, we use advanced AI to understand your unique preferences and create truly personalized experiences. We don't just show you options—we curate the perfect trip for you, considering factors other platforms miss.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
              <HelpCircle className="w-4 h-4 text-sky-500" />
              <span className="text-sm font-medium">FAQ</span>
            </div>
            <h2 className="mb-4">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to know about TripNest AI
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-sky-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center p-8 rounded-2xl glass-card"
          >
            <h3 className="text-2xl font-semibold mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our support team is here to help you 24/7
            </p>
            <button className="btn-primary px-8 py-3">Contact Support</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
