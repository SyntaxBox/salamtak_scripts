import { cn } from "@/utils";

export function P({
  children,
  className,
  ...rest
}: JSX.IntrinsicElements["p"]) {
  return (
    <p {...rest} className={cn("text-lg mt-2", className)}>
      {children}
    </p>
  );
}
