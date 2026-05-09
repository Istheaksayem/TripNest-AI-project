"use client";

import { motion } from "framer-motion";
import { Plane, Sparkles } from "lucide-react";
import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Promotional */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Video or Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 hero-pattern opacity-30" />
          
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 left-20 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400/20 backdrop-blur-sm rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                <Plane className="w-7 h-7" />
              </div>
              <span className="text-3xl font-bold">TripNest AI</span>
            </div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Your AI-Powered
              <br />
              Travel Companion
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-md">
              Discover amazing destinations, plan perfect trips, and create
              unforgettable memories with intelligent recommendations.
            </p>

            <div className="space-y-4">
              {[
                "AI-powered trip planning",
                "Personalized recommendations",
                "Secure booking system",
                "24/7 customer support",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Sparkles className="w-5 h-5 text-orange-300" />
                  <span className="text-white/90">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Mobile Logo */}
          <Link href="/" className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary">TripNest AI</span>
          </Link>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">{title}</h2>
            <p className="text-muted">{subtitle}</p>
          </div>

          {/* Form Content */}
          {children}
        </motion.div>
      </div>
    </div>
  );
}
