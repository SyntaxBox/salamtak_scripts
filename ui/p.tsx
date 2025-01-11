import { cn } from "@/utils";
import React from "react";
export function P({
  children,
  className,
  ...rest
}: React.JSX.IntrinsicElements["p"]) {
  return (
    <p {...rest} className={cn("text-lg mt-2", className)}>
      {children}
    </p>
  );
}
