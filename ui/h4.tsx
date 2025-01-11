import { cn } from "@/utils";

import React from "react";
export function H4({
  children,
  className,
  ...rest
}: React.JSX.IntrinsicElements["h4"]) {
  return (
    <h4 {...rest} className={cn("text-xl font-bold mt-8", className)}>
      {children}
    </h4>
  );
}
