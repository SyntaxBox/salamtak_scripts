import { cn } from "@/utils";

export function H2({
  children,
  className,
  ...rest
}: JSX.IntrinsicElements["h2"]) {
  return (
    <h2 {...rest} className={cn("text-3xl font-bold mt-14", className)}>
      {children}
    </h2>
  );
}
