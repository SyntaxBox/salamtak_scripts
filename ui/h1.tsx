import { cn } from "@/utils";

export function H1({
  children,
  className,
  ...rest
}: JSX.IntrinsicElements["h1"]) {
  return (
    <h1 {...rest} className={cn("text-4xl sm:text-5xl font-bold", className)}>
      {children}
    </h1>
  );
}
