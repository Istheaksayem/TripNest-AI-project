"use client";

import { motion } from "framer-motion";
import { Star, MapPin, TrendingUp } from "lucide-react";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 2847,
    price: 899,
    tag: "Trending",
  },
  {
    id: 2,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 3521,
    price: 1299,
    tag: "Popular",
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 2156,
    price: 1499,
    tag: "Hot Deal",
  },
  {
    id: 4,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 1893,
    price: 1099,
    tag: "Romantic",
  },
  {
    id: 5,
    name: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 2634,
    price: 1199,
    tag: "Luxury",
  },
  {
    id: 6,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
    rating: 5.0,
    reviews: 1567,
    price: 2499,
    tag: "Premium",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function DestinationsSection() {
  return (
    <section id="destinations" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <TrendingUp className="w-4 h-4 text-sky-500" />
            <span className="text-sm font-medium">Popular Destinations</span>
          </div>
          <h2 className="mb-4">
            Explore <span className="gradient-text">Top Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Handpicked destinations loved by travelers worldwide. Find your next adventure.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              className="group card-hover overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-card-strong text-sm font-medium">
                  {destination.tag}
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-semibold text-lg">{destination.name}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{destination.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      ({destination.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold gradient-text">
                      ${destination.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
                      / person
                    </span>
                  </div>
                  <button className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition-all duration-300 hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary px-8 py-3">
            View All Destinations
          </button>
        </motion.div>
      </div>
    </section>
  );
}
