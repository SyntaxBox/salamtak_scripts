import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
// import { LearningPath } from "@/components/LearningPath";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardDescription,
// } from "@/components/ui/card";
import {
  CheckCircle,
  BookOpen,
  Users,
  Award,
  Star,
  // Target,
  NotebookPen,
} from "lucide-react";
import Link from "next/link";

const FEATURES = [
  {
    icon: CheckCircle,
    title: "منهج متكامل",
    description: "برنامج تعليمي شامل يغطي جميع جوانب القراءة والتجويد",
  },
  {
    icon: BookOpen,
    title: "تعلم تفاعلي",
    description: "أدوات تفاعلية تجعل عملية التعلم ممتعة وفعالة",
  },
  {
    icon: Users,
    title: "مجتمع داعم",
    description: "تواصل مع طلاب آخرين وتبادل الخبرات والمعرفة",
  },
  {
    icon: Award,
    title: "شهادات معتمدة",
    description: "احصل على شهادات معترف بها عند إكمال المراحل المختلفة",
  },
  {
    icon: Star,
    title: "تعليم مخصص",
    description: "دروس مصممة حسب مستواك واحتياجاتك الفردية",
  },
  {
    icon: NotebookPen,
    title: "دورات تعليمية",
    description:
      "دورات مكثفة حضوريا وأونلاين في التجويد وشرح مختلف المتون العلمية",
  },
];

// const STEPS = [
//   {
//     icon: Users,
//     title: "سجل حساباً",
//     description: "أنشئ حسابك الشخصي وابدأ رحلتك التعليمية",
//   },
//   {
//     icon: Target,
//     title: "اختر مستواك",
//     description: "حدد مستواك الحالي وابدأ من حيث تنتمي",
//   },
//   {
//     icon: BookOpen,
//     title: "ابدأ التعلم",
//     description: "استمتع بالدروس التفاعلية وتتبع تقدمك",
//   },
// ];
//
const HeroSection = () => (
  <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-cream to-white">
    <div className="container mx-auto text-center px-4">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-forest leading-tight">
        مقرأةالإمام نافع
      </h1>
      <p className="text-lg sm:text-2xl mb-8 text-mint max-w-3xl mx-auto">
        مدرسة تهتم بتعليم التجويد والقراءات لكامل المستويات والأعمار
      </p>
      <p className="text-md sm:text-lg mb-12 max-w-4xl mx-auto">
        تلاوة القرآن الكريم من أعظم العبادات التي تُقرب العبد من ربه، فهي تهذيب
        للنفس وراحة للقلب. عند التلاوة بتدبر وإتقان للتجويد، يتجلى جمال كلام
        الله ويزداد الإيمان قوة وثباتًا. كما أن الاستماع إلى التلاوة بخشوع يبعث
        في النفس السكينة ويُحيي الروح بمعاني الهداية والرحمة.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button
          asChild
          className="bg-forest hover:bg-mint text-white text-lg px-8 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Link href="/registration">ابدأ رحلتك التعليمية</Link>
        </Button>
        <Button
          variant="outline"
          asChild
          className="border-forest text-forest hover:bg-forest hover:text-white text-lg px-8 py-6 rounded-full transition-all duration-300"
        >
          <Link href="#">تعرف على المزيد</Link>
        </Button>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-forest">
        لماذا مقرأة للإمام نافع؟
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

// const LearningPathSection = () => (
//   <section className="py-16 bg-cream">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-forest">
//         رحلتك التعليمية
//       </h2>
//       <LearningPath />
//     </div>
//   </section>
// );
//
// const GettingStartedSection = () => (
//   <section className="py-16 bg-white">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-forest">
//         كيف تبدأ؟
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {STEPS.map((step, index) => (
//           <Card
//             key={index}
//             className="bg-cream border-none shadow-lg hover:shadow-xl transition-all duration-300"
//           >
//             <CardHeader>
//               <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mx-auto mb-4">
//                 <step.icon className="w-8 h-8 text-white" />
//               </div>
//               <CardTitle className="text-xl font-bold text-center text-forest">
//                 {index + 1}. {step.title}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription className="text-center text-forest text-lg">
//                 {step.description}
//               </CardDescription>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   </section>
// );
//
const CTASection = () => (
  <section className="py-16 bg-forest text-white">
    <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        ابدأ رحلتك التعليمية اليوم
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        انضم إلى الآلاف من الطلاب الذين يحسنون مهاراتهم في القراءة والتجويد مع
        مقرأة للإمام نافع
      </p>
      <Button
        asChild
        className="bg-white text-forest hover:bg-cream text-lg px-8 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Link href="/registration">سجل الآن مجاناً</Link>
      </Button>
    </div>
  </section>
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      {/* <LearningPathSection /> */}
      {/* <GettingStartedSection /> */}
      <CTASection />
    </main>
  );
}
