import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import Pill from "@/components/Pill";
import { BRAND } from "@/constants";
import { asset } from "@/lib/asset";

export default function Home() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background hero image (put file at public/hero/landing.jpg) */}
      <img
        src={asset("hero/landing.jpg")}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-44 text-white">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            >
              Transforming Performance with <span className="opacity-95">Behavioral Training</span>
            </motion.h1>

            <p className="mt-5 max-w-2xl text-base md:text-lg text-white/90">
              We partner with organizations to co-create practical learning experiences that deliver measurable
              outcomes and long-term cultural impact.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#/courses" className="inline-block">
                <Button size="lg" className="bg-[#6436d8] hover:bg-[#5830c3] text-white shadow-lg shadow-black/20">
                  <ChevronRight className="mr-2 h-5 w-5" />
                  Explore Modules
                </Button>
              </a>

              <a
                href={asset("brochure/behavioral-training-brochure.pdf")}
                target="_blank"
                rel="noopener"
                download
                className="inline-block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border-white/40"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Course Brochure
                </Button>
              </a>
            </div>
          </div>

          <div className="md:justify-self-end">
            <Card className="rounded-2xl shadow-2xl bg-white/90 backdrop-blur border-white/60">
              <CardHeader>
                <CardTitle className="text-lg">Strategic Focus</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-3">
                <Pill label="Technology" />
                <Pill label="Strategy" />
                <Pill label="People" tone="accent" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style>{`
        .brand-chip{ background: linear-gradient(135deg, ${BRAND.colors.secondary}, ${BRAND.colors.primary}); }
      `}</style>
    </section>
  );
}


