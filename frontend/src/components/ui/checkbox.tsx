"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2">
        <div className="relative">
          <input
            type="checkbox"
            className={cn(
              "peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-custom bg-background transition-all checked:bg-primary checked:border-primary",
              className
            )}
            ref={ref}
            {...props}
          />
          <Check className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
        </div>
        {label && (
          <label htmlFor={props.id} className="text-sm text-primary cursor-pointer">
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
