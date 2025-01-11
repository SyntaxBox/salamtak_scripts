import { cn } from "@/utils";
import React from "react";

export function Description({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("opacity-60 text-lg", className)}>{children}</p>;
}
