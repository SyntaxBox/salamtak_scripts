import { cn } from "@/utils";

export function H4({
  children,
  className,
  ...rest
}: JSX.IntrinsicElements["h4"]) {
  return (
    <h4 {...rest} className={cn("text-xl font-bold mt-8", className)}>
      {children}
    </h4>
  );
}
