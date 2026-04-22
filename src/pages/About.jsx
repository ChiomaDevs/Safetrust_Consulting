import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TEAM, VISION, MISSION, VALUES } from "@/constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p className="mt-4 text-gray-600">
              We are a Management Consulting firm committed to transforming organizational performance through
              impact-driven content and exceptional delivery. Every engagement is customized to your context—with a
              long-term commitment to the growth and development of your people and your business.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Card>
                <CardHeader><CardTitle className="text-base">Vision</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">{VISION}</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-base">Mission</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">{MISSION}</p></CardContent>
              </Card>
            </div>
            <div className="mt-6">
              <h3 className="font-medium mb-2">Core Values</h3>
              <div className="flex flex-wrap gap-2">
                {VALUES.map(v => (<Badge key={v} variant="secondary">{v}</Badge>))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Our Team</h3>
            <p className="mt-2 text-gray-600">Seasoned industry professionals and subject-matter experts.</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {TEAM.map(m => (
                <motion.div key={m.name} whileHover={{ y: -4 }} className="rounded-2xl border overflow-hidden group bg-white">
                  <div className="h-64 bg-white overflow-hidden flex items-center justify-center">
                    <img src={m.photo} alt={m.name} className="max-h-full max-w-full object-contain object-center transition" />
                  </div>
                  <div className="p-4">
                    <div className="font-medium">{m.name}</div>
                    <div className="text-xs text-gray-500">{m.title}</div>
                    <Separator className="my-3" />
                    <p className="text-sm text-gray-600 line-clamp-4 group-hover:line-clamp-none transition-all">{m.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
        