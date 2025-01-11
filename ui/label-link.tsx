import { cn } from "@/utils";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

export function LabelLink({
  children,
  className,
  ...rest
}: LinkProps & { children: ReactNode; className?: string }) {
  return (
    <Link
      {...rest}
      className={cn(
        "bg-slate-700 py-1 px-2 rounded-lg hover:text-green-400",
        className
      )}
    >
      {children}
    </Link>
  );
}
