"use client";

import { motion } from "framer-motion";
import { Mail, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for subscribing! (Demo)");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>

            {/* Heading */}
            <h2 className="text-white mb-4">
              Get Exclusive Travel Deals
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter and receive personalized travel
              recommendations, exclusive discounts, and insider tips delivered to
              your inbox.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-white text-sky-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-sky-600 border-t-transparent rounded-full animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Sparkles,
                  text: "Exclusive Deals",
                },
                {
                  icon: Mail,
                  text: "Weekly Updates",
                },
                {
                  icon: Send,
                  text: "Travel Tips",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-center gap-2 text-white"
                >
                  <benefit.icon className="w-5 h-5" />
                  <span className="font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Privacy Note */}
            <p className="text-sm text-white/70 mt-8">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
