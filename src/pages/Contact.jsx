import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Mail, Phone } from "lucide-react";
import { useMemo } from "react";
import { asset } from "@/lib/asset";

export default function Contact() {
  const CONTACTS = useMemo(() => ([
    { icon: <Mail className="w-4 h-4"/>, label: "info@safetrustconsulting.com", href: "mailto:info@safetrustconsulting.com" },
    { icon: <Mail className="w-4 h-4"/>, label: "mr.oparaobinna@gmail.com", href: "mailto:mr.oparaobinna@gmail.com" },
    { icon: <Phone className="w-4 h-4"/>, label: "+234 813 083 412" },
    { icon: <Phone className="w-4 h-4"/>, label: "+234 703 805 9794" },
  ]), []);

  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Training Inquiry — ${fd.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("phone")}\n\nMessage:\n${fd.get("message")}`
    );
    window.location.href = `mailto:info@safetrustconsulting.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="mt-2 text-gray-600">We'd love to learn about your goals and design a solution tailored to your context.</p>
            <div className="mt-4 space-y-2">
              {CONTACTS.map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  {c.icon}
                  {c.href ? <a href={c.href} className="hover:underline">{c.label}</a> : <span>{c.label}</span>}
                </div>
              ))}
            </div>
            <a href={asset("brochure/behavioral-training-brochure.pdf")} target="_blank" rel="noopener" download className="inline-block mt-6">
              <Button variant="outline"><Download className="mr-2 h-4 w-4"/>Download Course Brochure</Button>
            </a>
          </div>
          <div className="md:col-span-3">
            <Card className="rounded-2xl">
              <CardHeader><CardTitle className="text-base">Send a Message</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="grid gap-3">
                  <Input name="name" placeholder="Your name" required />
                  <Input name="email" type="email" placeholder="Your email" required />
                  <Input name="phone" placeholder="Phone (optional)" />
                  <Textarea name="message" placeholder="Tell us about your objectives…" required rows={6} />
                  <div className="flex justify-end">
                    <Button type="submit">Send</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
