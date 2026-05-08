"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  Sparkles,
  Wallet,
  Clock,
  HeadphonesIcon,
  Globe,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Trip Planner",
    description:
      "Let our advanced AI create personalized itineraries based on your preferences, budget, and travel style.",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description:
      "Book with confidence. Your payments and personal data are protected with bank-level encryption.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description:
      "Discover hidden gems and popular spots tailored to your interests with our intelligent recommendation engine.",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    icon: Wallet,
    title: "Budget Friendly",
    description:
      "Find the best deals and optimize your travel budget with our price comparison and smart booking tools.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always available to help you before, during, and after your trip.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Access thousands of destinations worldwide with local insights and authentic experiences.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Guidance",
    description:
      "Get advice from travel experts and local guides to make the most of your journey.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description:
      "We guarantee the best prices. Find a lower price elsewhere and we'll match it plus give you extra credit.",
    gradient: "from-red-500 to-pink-500",
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

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
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
            <Sparkles className="w-4 h-4 text-sky-500" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="mb-4">
            Everything You Need for{" "}
            <span className="gradient-text">Perfect Travel</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience seamless travel planning with cutting-edge technology and
            personalized service.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group card-hover p-6 text-center"
            >
              {/* Icon */}
              <div className="relative inline-flex mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
