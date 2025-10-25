import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TRAINING_OVERVIEW, MODULES } from "@/constants";

export default function Solutions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold">Training Solutions</h2>
            <p className="mt-4 text-gray-600">{TRAINING_OVERVIEW.summary}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {TRAINING_OVERVIEW.audience.map(a => (<Badge key={a}>{a}</Badge>))}
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MODULES.map(mod => (
                <Card key={mod.id} className="hover:shadow-md transition">
                  <CardHeader>
                    <div className="flex items-center gap-2">{mod.icon}<CardTitle className="text-base font-semibold">{mod.title}</CardTitle></div>
                  </CardHeader>
                  <CardContent><p className="text-sm text-gray-600">{mod.synopsis}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-24">
            <Card className="rounded-2xl">
              <CardHeader><CardTitle className="text-base">Expected Outcomes</CardTitle></CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                  {TRAINING_OVERVIEW.outcomes.map((o,i)=>(<li key={i}>{o}</li>))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
