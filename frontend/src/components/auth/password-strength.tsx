"use client";

import { calculatePasswordStrength } from "@/lib/validations/auth";
import { motion } from "framer-motion";

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  if (!password) return null;

  const { strength, label, color } = calculatePasswordStrength(password);

  return (
    <div className="mt-2 space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted">Password Strength:</span>
        <span style={{ color }}>{label}</span>
      </div>
      <div className="h-2 bg-surface rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${strength}%` }}
          transition={{ duration: 0.3 }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
