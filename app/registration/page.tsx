import { RegistrationHeader } from "@/components/RegistrationHeader";
import { StageCard } from "@/components/StageCard";
import { RegistrationCTA } from "@/components/RegistrationCTA";

const registrationStages: Stage[] = [
  {
    title: "مرحلة أولى",
    description: "ابدأ رحلتك في تعلم القراءة والتجويد",
    groups: [
      {
        name: "مجموعة الاثنين صباحًا",
        time: "10:00 صباحًا",
        link: "https://forms.gle/example1",
      },
      {
        name: "مجموعة الثلاثاء مساءً",
        time: "6:00 مساءً",
        link: "https://forms.gle/example2",
      },
    ],
  },
  {
    title: "تصحيح الأخطاء: مستوى 1",
    description: "تحسين مهاراتك وتصحيح الأخطاء الشائعة",
    groups: [
      {
        name: "مجموعة الأربعاء صباحًا",
        time: "11:00 صباحًا",
        link: "https://forms.gle/example3",
      },
      {
        name: "مجموعة الخميس مساءً",
        time: "7:00 مساءً",
        link: "https://forms.gle/example4",
      },
    ],
  },
  {
    title: "تصحيح النص: مستوى 2",
    description: "تعلم تقنيات متقدمة في تصحيح النصوص",
    groups: [
      {
        name: "مجموعة السبت صباحًا",
        time: "9:00 صباحًا",
        link: "https://forms.gle/example5",
      },
      {
        name: "مجموعة الأحد مساءً",
        time: "5:00 مساءً",
        link: "https://forms.gle/example6",
      },
    ],
  },
  {
    title: "مرحلة الإجازة",
    description: "الحصول على شهادة معتمدة في القراءة والتجويد",
    groups: [
      {
        name: "مجموعة الاثنين مساءً",
        time: "8:00 مساءً",
        link: "https://forms.gle/example7",
      },
      {
        name: "مجموعة الجمعة صباحًا",
        time: "10:00 صباحًا",
        link: "https://forms.gle/example8",
      },
    ],
  },
  {
    title: "النّاشئة (إبتدائي)",
    description: "دورة مكثفة للمبتدئين في المستوى الابتدائي",
    groups: [
      {
        name: "مجموعة الثلاثاء صباحًا",
        time: "11:00 صباحًا",
        link: "https://forms.gle/example9",
      },
      {
        name: "مجموعة الأربعاء مساءً",
        time: "6:00 مساءً",
        link: "https://forms.gle/example10",
      },
    ],
  },
  {
    title: "النّاشئة (متوسط)",
    description: "دورة متقدمة للمبتدئين في المستوى المتوسط",
    groups: [
      {
        name: "مجموعة الخميس صباحًا",
        time: "10:00 صباحًا",
        link: "https://forms.gle/example11",
      },
      {
        name: "مجموعة السبت مساءً",
        time: "7:00 مساءً",
        link: "https://forms.gle/example12",
      },
    ],
  },
];
export default function Registration() {
  return (
    <main>
      <RegistrationHeader />
      <div className="container mx-auto px-4 pb-16">
        <div className="mx-auto space-y-8 max-w-4xl">
          {registrationStages.map((stage, index) => (
            <StageCard key={index} stage={stage} />
          ))}
        </div>
      </div>
      <RegistrationCTA />
    </main>
  );
}
