import { Button } from "@/components/ui/button";
export function RegistrationCTA() {
  return (
    <section className="py-16 bg-forest text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          هل أنت مستعد لبدء رحلتك التعليمية؟
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          سجل الآن واستمتع بتجربة تعليمية فريدة مع أفضل المعلمين في مجال القراءة
          والتجويد
        </p>
        <Button className="bg-white text-forest hover:bg-cream text-lg px-8 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
          ابدأ التسجيل الآن
        </Button>
      </div>
    </section>
  );
}
