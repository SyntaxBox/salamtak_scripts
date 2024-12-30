import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GroupsList } from "./GroupsList";
type StageCardProps = {
  stage: Stage;
};

export function StageCard({ stage }: StageCardProps) {
  return (
    <Card className="overflow-hidden bg-white border-2 border-sage shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="bg-forest text-white">
        <CardTitle className="text-2xl font-bold">{stage.title}</CardTitle>
        <CardDescription className="text-cream">
          {stage.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="groups">
            <AccordionTrigger className="text-forest text-2xl font-bold hover:text-forest/80">
              المجموعات المتاحة
              <p className="text-sm font-normal">أنقر لعرض المجموعات المتاحة</p>
            </AccordionTrigger>
            <AccordionContent>
              <GroupsList groups={stage.groups} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
