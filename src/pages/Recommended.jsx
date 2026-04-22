import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { RECOMMENDED } from "@/constants";

export default function Recommended() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Recommended Courses</h2>
          <div className="text-sm text-gray-500">Swipe or scroll</div>
        </div>
        <div className="mt-6 overflow-x-auto">
          <div className="flex gap-4 min-w-max pr-4">
            {RECOMMENDED.map(c => (
              <Card key={c.title} className="w-80 shrink-0 hover:shadow-md transition">
                <CardHeader><CardTitle className="text-base flex items-center gap-2"><BookOpen className="w-4 h-4"/>{c.title}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                    {c.objectives.map(o => (<li key={o}>{o}</li>))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
