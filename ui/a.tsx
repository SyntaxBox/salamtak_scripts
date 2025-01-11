import React from "react";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export function A({ children, ...rest }: { children: ReactNode } & LinkProps) {
  // check if children is an empty span return null
  if (!children) return null;
  if (typeof children === "object") {
    if ("props" in children) {
      if (!children.props.children) return null;
    }
  }
  const target = rest.href.toString().startsWith("https://blog.syntaxbox.dev")
    ? "_self"
    : "_blank";
  return (
    <Link
      {...rest}
      target={target}
      className="text-lg text-emerald-400 underline hover:text-green-300"
    >
      {children}
    </Link>
  );
}
