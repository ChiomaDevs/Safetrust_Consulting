import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MODULES } from "@/constants";

export default function Courses() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Course Details</h2>
        <p className="mt-2 text-gray-600">Click to expand each module for a quick synopsis.</p>
        <Accordion type="single" collapsible className="mt-6">
          {MODULES.map((m, idx) => (
            <AccordionItem key={m.id} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">{m.title}</AccordionTrigger>
              <AccordionContent><p className="text-sm text-gray-700">{m.synopsis}</p></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
