import { cn } from "@/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

const DEFAULT_THUMBNAIL = "/banner.png";

export function Thumbnail({
  src,
  alt,
  width,
  height,
  className,
  ...rest
}: { src?: string; alt?: string } & Omit<ImageProps, "src" | "alt">) {
  return (
    <Image
      {...rest}
      src={src ?? DEFAULT_THUMBNAIL}
      alt={alt ?? "thumbnail"}
      width={width ?? 1280}
      height={height ?? 720}
      className={cn("rounded-3xl object-cover", className)}
    />
  );
}
