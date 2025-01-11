import React from "react";
import type { Metadata } from "next";
import { Amiri } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
});
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SocialMedia from "@/components/SocialMedia";
import Nav from "@/components/Nav";
export const metadata: Metadata = {
  title: "مقرأة إبن نافع",
  description:
    "مدرسة تهتم بتعليم التجويد والقراءات لكامل المستويات والأعمار تلاوة القرآن الكريم من أعظم العبادات التي تُقرب العبد من ربه، فهي تهذيب للنفس وراحة للقلب. عند التلاوة بتدبر وإتقان للتجويد، يتجلى جمال كلام الله ويزداد الإيمان قوة وثباتًا. كما أن الاستماع إلى التلاوة بخشوع يبعث في النفس السكينة ويُحيي الروح بمعاني الهداية والرحمة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={amiri.className}>
        <div className="min-h-screen flex flex-col bg-cream text-forest font-arabic">
          <header className="bg-forest text-cream py-4 sticky top-0 z-50 shadow-md">
            <Nav />
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="bg-forest text-cream py-12">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    عن مقرأة
                  </h3>
                  <p className="mb-4">
                    نحن نسعى لتوفير أفضل تجربة تعليمية في مجال القراءة والتجويد
                    للطلاب في جميع أنحاء العالم.
                  </p>
                  <SocialMedia />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    روابط سريعة
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/about"
                        className="hover:text-sage transition-colors duration-300"
                      >
                        عن الغرفة
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/courses"
                        className="hover:text-sage transition-colors duration-300"
                      >
                        الدورات
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/teachers"
                        className="hover:text-sage transition-colors duration-300"
                      >
                        المعلمون
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="hover:text-sage transition-colors duration-300"
                      >
                        الأسئلة الشائعة
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    اتصل بنا
                  </h3>
                  <p>البريد الإلكتروني: info@imamnafi.com</p>
                  <p>الهاتف: +123 456 7890</p>
                  <p>العنوان: شارع القراء، المدينة المنورة</p>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    النشرة الإخبارية
                  </h3>
                  <p className="mb-4">
                    اشترك للحصول على آخر الأخبار والتحديثات
                  </p>
                  <form className="flex space-x-2 space-x-reverse">
                    <Input
                      type="email"
                      placeholder="بريدك الإلكتروني"
                      className="bg-cream text-forest"
                    />
                    <Button
                      type="submit"
                      className="bg-sage hover:bg-cream hover:text-forest"
                    >
                      اشتراك
                    </Button>
                  </form>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-sage text-center">
                <p>
                  &copy; {new Date().getFullYear()} مقرأة للإمام نافع. جميع
                  الحقوق محفوظة.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
