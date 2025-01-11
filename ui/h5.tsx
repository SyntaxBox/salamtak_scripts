import { cn } from "@/utils";

import React from "react";
export function H5({
  children,
  className,
  ...rest
}: React.JSX.IntrinsicElements["h5"]) {
  return (
    <h5 {...rest} className={cn("text-lg font-bold mt-6", className)}>
      {children}
    </h5>
  );
}
