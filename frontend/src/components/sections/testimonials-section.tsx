"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Travel Blogger",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "TripNest AI completely transformed how I plan my trips. The AI recommendations were spot-on, and I discovered places I would have never found on my own. Absolutely incredible!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Executive",
    avatar: "https://i.pravatar.cc/150?img=13",
    rating: 5,
    text: "As someone who travels frequently for work, TripNest AI saves me hours of planning. The smart itineraries and seamless booking process are game-changers. Highly recommend!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Adventure Seeker",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "I used TripNest AI for my honeymoon in Bali, and it was perfect! Every detail was thoughtfully planned, from romantic dinners to hidden beaches. Best trip ever!",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Family Traveler",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Planning a family vacation with kids is stressful, but TripNest AI made it effortless. The AI found kid-friendly activities and accommodations that fit our budget perfectly.",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Solo Traveler",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    text: "As a solo female traveler, safety is my priority. TripNest AI recommended safe neighborhoods and connected me with verified local guides. I felt secure throughout my journey.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Photographer",
    avatar: "https://i.pravatar.cc/150?img=14",
    rating: 5,
    text: "The AI understood my passion for photography and suggested the best spots for sunrise and sunset shots. My portfolio has never looked better. Thank you, TripNest AI!",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Star className="w-4 h-4 text-sky-500 fill-sky-500" />
            <span className="text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="mb-4">
            Loved by <span className="gradient-text">Travelers Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of happy travelers who trust TripNest AI for their
            adventures.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="card-hover p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-sky-500/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "50K+", label: "Happy Travelers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "150+", label: "Countries" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl glass-card"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
