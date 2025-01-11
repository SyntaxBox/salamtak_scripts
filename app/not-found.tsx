"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div
      className="min-h-[92vh] bg-gradient-to-b from-[#F4F6E8] to-white flex flex-col items-center justify-center text-[#005C41] p-4"
      dir="rtl"
    >
      <div className="text-center">
        <Image
          src="/logo.svg"
          alt="شعار غرفة القراءة للإمام نافع"
          width={150}
          height={150}
          className="mx-auto mb-8"
        />
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          عذرًا، الصفحة غير موجودة
        </h1>
        <p className="text-xl mb-8">
          الصفحة التي تبحث عنها قد تكون قد تم نقلها أو حذفها أو قد لا تكون
          موجودة.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={() => window.history.back()}
            className="bg-[#005C41] hover:bg-[#008037] text-white text-lg px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            العودة للصفحة السابقة
          </Button>
          <Button
            asChild
            className="bg-[#8B9B6E] hover:bg-[#F4F6E8] text-white hover:text-[#005C41] text-lg px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="/">الذهاب للصفحة الرئيسية</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
