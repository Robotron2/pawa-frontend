import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {icon && (
          <div className="absolute left-3 text-gray-400">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "flex h-11 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all",
            !!icon && "pl-10",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";
