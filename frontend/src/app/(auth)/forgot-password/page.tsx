"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, type ForgotPasswordFormData } from "@/lib/validations/auth";
import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Forgot password data:", data);
      setIsSuccess(true);
      toast.success("Password reset link sent to your email!");
    } catch (error) {
      toast.error("Failed to send reset link. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <AuthLayout
        title="Check Your Email"
        subtitle="We've sent you a password reset link"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary">
              Email Sent Successfully!
            </h3>
            <p className="text-muted">
              We've sent a password reset link to{" "}
              <span className="font-medium text-primary">
                {getValues("email")}
              </span>
            </p>
            <p className="text-sm text-muted">
              Please check your inbox and click the link to reset your password.
              The link will expire in 24 hours.
            </p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => setIsSuccess(false)}
              variant="outline"
              className="w-full"
            >
              Resend Email
            </Button>

            <Link href="/login">
              <Button variant="secondary" className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted">
            Didn't receive the email? Check your spam folder or{" "}
            <button
              onClick={() => setIsSuccess(false)}
              className="text-primary-color hover:underline"
            >
              try again
            </button>
          </p>
        </motion.div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your email to receive a password reset link"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Back to Login */}
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </Link>

        {/* Email */}
        <div>
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="pl-11"
              error={errors.email?.message}
              {...register("email")}
            />
          </div>
          <p className="mt-2 text-sm text-muted">
            We'll send you a link to reset your password
          </p>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full" isLoading={isLoading}>
          Send Reset Link
        </Button>

        {/* Help Text */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted">
            Remember your password?{" "}
            <Link
              href="/login"
              className="text-primary-color font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
          <p className="text-sm text-muted">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-primary-color font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
