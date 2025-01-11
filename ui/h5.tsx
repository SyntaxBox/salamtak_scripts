import { cn } from "@/utils";

export function H5({
  children,
  className,
  ...rest
}: JSX.IntrinsicElements["h5"]) {
  return (
    <h5 {...rest} className={cn("text-lg font-bold mt-6", className)}>
      {children}
    </h5>
  );
}
