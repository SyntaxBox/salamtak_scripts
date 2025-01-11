import { cn } from "@/utils";
import React from "react";

type Variant = "info" | "danger" | "warning" | "success" | "neutral";

const variants: Record<Variant, string> = {
  info: "bg-cyan-600/40 text-cyan-200",
  danger: "bg-red-600/40 text-red-200",
  warning: "bg-orange-600/40 text-orange-200",
  success: "bg-green-600/40 text-green-200",
  neutral: "bg-slate-700",
};

export function Alert({
  children,
  variant = "success",
  ...rest
}: { variant?: Variant } & JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...rest}
      className={cn(
        "w-full rounded-2xl px-4 pb-2 pt-[2px] my-4",
        variants[variant],
        rest.className
      )}
    >
      {children}
    </div>
  );
}
