import { cn } from "@/utils";

export function H3({
  children,
  className,
  ...rest
}: JSX.IntrinsicElements["h3"]) {
  return (
    <h3 {...rest} className={cn("text-2xl font-bold mt-9", className)}>
      {children}
    </h3>
  );
}
