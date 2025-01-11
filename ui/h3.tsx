import { cn } from "@/utils";
import React from "react";
export function H3({
  children,
  className,
  ...rest
}: React.JSX.IntrinsicElements["h3"]) {
  return (
    <h3 {...rest} className={cn("text-2xl font-bold mt-9", className)}>
      {children}
    </h3>
  );
}
