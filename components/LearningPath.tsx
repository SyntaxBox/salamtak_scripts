import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const LEARNING_LEVELS = [
  {
    value: "beginner",
    label: "المبتدئ",
    title: "مرحلة الإعداد",
    description: "ابدأ رحلتك في تعلم أساسيات القراءة والتجويد",
    items: [
      "تعلم مخارج الحروف الأساسية",
      "التعرف على قواعد النطق السليم",
      "تمارين لتحسين الطلاقة في القراءة",
    ],
  },
  {
    value: "intermediate",
    label: "المتوسط",
    title: "مرحلة تصحيح النص",
    description: "عزز مهاراتك وتعلم تقنيات متقدمة",
    items: [
      "التعمق في قواعد التجويد",
      "تحسين الأداء الصوتي والنغمة",
      "تدريبات على القراءة بطلاقة وفهم",
    ],
  },
  {
    value: "advanced",
    label: "المتقدم",
    title: "مرحلة الاعتماد",
    description: "صقل مهاراتك واحصل على شهادة معتمدة",
    items: [
      "إتقان جميع قواعد التجويد المتقدمة",
      "تدريب على القراءات المختلفة",
      "إعداد للحصول على شهادة القراءة المعتمدة",
    ],
  },
].reverse();

export function LearningPath() {
  return (
    <Tabs defaultValue="beginner" className="w-full max-w-3xl mx-auto">
      <TabsList className="grid w-full grid-cols-3 bg-sage">
        {LEARNING_LEVELS.map((level) => (
          <TabsTrigger
            key={level.value}
            value={level.value}
            className="text-cream data-[state=active]:text-cream data-[state=active]:bg-forest"
          >
            {level.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {LEARNING_LEVELS.map((level) => (
        <TabsContent key={level.value} value={level.value} className="mt-4">
          <Card dir="rtl">
            <CardHeader>
              <CardTitle>{level.title}</CardTitle>
              <CardDescription>{level.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {level.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
