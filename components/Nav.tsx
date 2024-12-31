"use client";
import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import SocialMedia from "@/components/SocialMedia";
import { Menu } from "lucide-react";
const NavLinks = ({ className = "", onClick = () => {} }) => (
  <ul
    className={`space-y-4 md:space-y-0 md:space-x-6 md:space-x-reverse ${className}`}
  >
    <li>
      <Link
        href="/registration"
        className="hover:text-sage transition-colors duration-300 block"
        onClick={onClick}
      >
        التسجيل
      </Link>
    </li>
    <li>
      <Link
        href="/test-results"
        className="hover:text-sage transition-colors duration-300 block"
        onClick={onClick}
      >
        نتائج الاختبار
      </Link>
    </li>
    <li>
      <Link
        href="/subjects"
        className="hover:text-sage transition-colors duration-300 block"
        onClick={onClick}
      >
        المواضيع
      </Link>
    </li>
    <li>
      <Link
        href="/reading-progress"
        className="hover:text-sage transition-colors duration-300 block"
        onClick={onClick}
      >
        نظام تقدم القراءة
      </Link>
    </li>
    <li>
      <Link
        href="/publications"
        className="hover:text-sage transition-colors duration-300 block"
        onClick={onClick}
      >
        المنشورات والمقالات
      </Link>
    </li>
  </ul>
);

export function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center space-x-6 space-x-reverse w-full">
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-bold hover:text-sage transition-colors duration-300"
        >
          مقرأة للإمام نافع
        </Link>
        <NavLinks className="flex" />
        <SocialMedia />
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between w-full">
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-bold hover:text-sage transition-colors duration-300"
        >
          مقرأة للإمام نافع
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-forest text-cream p-6">
            <SheetTitle hidden>Navigation Menu</SheetTitle>
            <SheetDescription hidden>
              Use the menu below to navigate through the application.
            </SheetDescription>
            <div className="flex flex-col h-full mt-8">
              <NavLinks onClick={() => setIsOpen(false)} />
              <div className="mt-8">
                <SocialMedia />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default ResponsiveNavbar;
