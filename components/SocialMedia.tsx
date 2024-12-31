import Link from "next/link";
import {
  IconBrandTelegram,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandX,
} from "@tabler/icons-react";

export default function SocialMedia() {
  return (
    <div className="flex space-x-4 space-x-reverse">
      <Link
        href="#"
        className="text-cream hover:text-sage transition-colors duration-300"
      >
        <IconBrandFacebook size={24} />
      </Link>
      <Link
        href="#"
        className="text-cream hover:text-sage transition-colors duration-300"
      >
        <IconBrandInstagram size={24} />
      </Link>
      <Link
        href="#"
        className="text-cream hover:text-sage transition-colors duration-300"
      >
        <IconBrandYoutube size={24} />
      </Link>
      <Link
        href="#"
        className="text-cream hover:text-sage transition-colors duration-300"
      >
        <IconBrandX size={24} />
      </Link>
      <Link
        href="#"
        className="text-cream hover:text-sage transition-colors duration-300"
      >
        <IconBrandTelegram size={24} />
      </Link>
    </div>
  );
}
