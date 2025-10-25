import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { METHODOLOGY } from "@/constants";

export default function Methodology() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Our Methodology</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {METHODOLOGY.map(m => (
            <Card key={m.title} className="hover:shadow-md transition">
              <CardHeader><CardTitle className="text-base flex items-center gap-2">{m.icon}{m.title}</CardTitle></CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                  {m.points.map(p => (<li key={p}>{p}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
