import { cn } from "@/utils";
import React from "react";

export function H6({
  children,
  className,
  ...rest
}: React.JSX.IntrinsicElements["h6"]) {
  return (
    <h6 {...rest} className={cn("text-lg font-bold mt-4", className)}>
      {children}
    </h6>
  );
}
