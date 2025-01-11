import Image from "next/image";
import React from "react";
import Link from "next/link";

const DEFAULT_AVATAR = "/profile.jpg";

export function Avatar({
  name,
  src,
  href,
  size,
}: {
  src?: string;
  size?: number;
  name?: string;
  href?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <Image
        className="rounded-full aspect-square"
        src={src ?? DEFAULT_AVATAR}
        alt={name ?? "avatar"}
        width={size ?? 48}
        height={size ?? 48}
      />
      {name && (
        <div className="font-bold dark:text-white capitalize text-xl ">
          {href ? (
            <Link href={href} className="hover:underline hover:text-green-400">
              {name}
            </Link>
          ) : (
            <span>{name}</span>
          )}
        </div>
      )}
    </div>
  );
}
