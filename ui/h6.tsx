import { cn } from "@/utils";

export function H6({
  children,
  className,
  ...rest
}: JSX.IntrinsicElements["h6"]) {
  return (
    <h6 {...rest} className={cn("text-lg font-bold mt-4", className)}>
      {children}
    </h6>
  );
}
