"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useMDXComponent } from "@/hooks";

import { cn } from "@/utils";
import { H1, H2, H3, H4, H5, H6, P } from "@/ui";

const components = {
  h1: ({ ...props }: React.JSX.IntrinsicElements["h1"]) => <H1 {...props} />,
  h2: ({ ...props }: React.JSX.IntrinsicElements["h2"]) => <H2 {...props} />,
  h3: ({ ...props }: React.JSX.IntrinsicElements["h3"]) => <H3 {...props} />,
  h4: ({ ...props }: React.JSX.IntrinsicElements["h4"]) => <H4 {...props} />,
  h5: ({ ...props }: React.JSX.IntrinsicElements["h5"]) => <H5 {...props} />,
  h6: ({ ...props }: React.JSX.IntrinsicElements["h6"]) => <H6 {...props} />,
  a: ({ ...props }: React.JSX.IntrinsicElements["a"]) =>
    props.href ? (
      <Link href={props.href}>{props.children}</Link>
    ) : (
      <a {...props} />
    ),
  p: ({ ...props }: React.JSX.IntrinsicElements["p"]) => <P {...props} />,
  ul: ({ className, ...props }: any) => (
    <ul className={cn("my-3 mr-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: any) => (
    <ol className={cn("my-3 mr-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: any) => (
    <li className={cn("mb-2", className)} {...props} />
  ),
  img: ({
    className,
    alt,
    width,
    height,
    src,
  }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    if (typeof width === "undefined" || typeof width === "string") width = 600;
    if (typeof height === "undefined" || typeof height === "string")
      height = 600;

    return (
      <Image
        className={cn("rounded-md border overflow-hidden", className)}
        alt={alt ?? ""}
        width={width}
        height={height}
        src={src ?? ""}
      />
    );
  },
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
