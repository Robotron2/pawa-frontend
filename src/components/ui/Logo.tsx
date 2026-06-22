import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type LogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

export const Logo = ({ size = "md", className }: LogoProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  };

  return (
    <div className={cn("relative flex items-center shrink-0", sizeClasses[size], className)}>
      <Image
        src="/logo.png"
        alt="PawaProtocol logo"
        width={431}
        height={412}
        className="w-full h-full object-contain object-left"
        priority
      />
    </div>
  );
};
