"use client";

import { motion } from "framer-motion";
import { Sparkles, Send, Loader2 } from "lucide-react";
import { useState } from "react";

export function AIPlannerSection() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      alert("AI Trip Plan Generated! (Demo)");
    }, 2000);
  };

  return (
    <section id="ai-planner" className="section-padding bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 dark:from-sky-950 dark:via-cyan-950 dark:to-blue-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-sky-400/20 to-cyan-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span className="text-sm font-medium">AI-Powered Planning</span>
            </div>
            <h2 className="mb-4">
              Let AI Plan Your{" "}
              <span className="gradient-text">Perfect Trip</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Describe your dream vacation and watch our AI create a personalized
              itinerary in seconds.
            </p>
          </motion.div>

          {/* AI Input Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card-strong rounded-3xl p-8 shadow-2xl"
          >
            <div className="space-y-6">
              {/* Textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Describe your ideal trip
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Example: I want a 7-day romantic getaway to Europe with my partner. We love art, good food, and scenic views. Budget is around $3000 per person..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating Your Perfect Trip...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate AI Trip Plan
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Example Prompts */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Try these examples:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Beach vacation in Southeast Asia",
                    "Adventure trip to New Zealand",
                    "Cultural tour of Japan",
                    "Family-friendly European cities",
                  ].map((example) => (
                    <button
                      key={example}
                      onClick={() => setPrompt(example)}
                      className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-sky-100 dark:hover:bg-sky-900 text-sm transition-colors"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                title: "Instant Results",
                description: "Get your personalized itinerary in seconds",
              },
              {
                title: "Smart Optimization",
                description: "AI optimizes routes, timing, and budget",
              },
              {
                title: "Fully Customizable",
                description: "Adjust and refine your plan anytime",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl glass-card"
              >
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
