"use client";
import { cn } from "@/utils";
import React, { ReactNode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

export function Copy({
  copy,
  className,
  copyComponent: CopyComponent = "Copy",
  copiedComponent: CopiedComponent = "Copied",
}: {
  copy: ReactNode;
  className?: string;
  copyComponent?: ReactNode;
  copiedComponent?: ReactNode;
}) {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    !isCopied && navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  useEffect(() => {
    const div = document.createElement("div");
    createRoot(div).render(copy);
    const I = setInterval(() => {
      if (div.innerText.length > 0) {
        setText(div.innerText);
        clearInterval(I);
      }
    }, 10);

    return () => {
      div.remove();
    };
  }, [copy]);

  useEffect(() => {
    const t = setTimeout(() => isCopied && setIsCopied(false), 2000);
    return () => clearTimeout(t);
  }, [isCopied]);
  return (
    <button onClick={handleCopy} disabled={isCopied} className={className}>
      {isCopied ? CopiedComponent : CopyComponent}
    </button>
  );
}
