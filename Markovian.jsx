import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Markovian – AI solutions for UK SMEs (<£10 m revenue)
 * Raycast‑inspired look with flowing coloured backdrop, hover glows and smooth section transitions.
 */
export default function Markovian() {
  const [page, setPage] = useState("home");
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // simple backdrop component
  const Backdrop = () => (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* swirling gradient blobs */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-purple-800 rounded-full blur-[150px] opacity-20"
        animate={{ y: [0, -100, 0], x: [-50, 50, -50] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 bottom-0 w-[40vw] h-[40vw] bg-gradient-to-br from-teal-600 via-cyan-600 to-sky-600 rounded-full blur-[120px] opacity-20"
        animate={{ y: [0, 120, 0], x: [0, -60, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );

  const GlowCard = ({ children }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-600/20 to-teal-500/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 pointer-events-none" />
      {children}
    </motion.div>
  );

  if (page === "book") {
    return (
      <div className="font-inter text-gray-200 bg-black min-h-screen flex flex-col items-center">
        <Backdrop />
        <header className="w-full px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold" onClick={() => setPage("home")}>Markovian</h1>
        </header>
        <main className="mt-16 text-center max-w-md w-full space-y-6">
          <h2 className="text-4xl font-bold">Book a Call</h2>
          <p className="text-gray-400">Fill in your details and pick a slot that works for you.</p>
          <form className="space-y-4">
            <input className="w-full p-3 rounded-lg bg-neutral-800 placeholder-gray-500" placeholder="Name" />
            <input className="w-full p-3 rounded-lg bg-neutral-800 placeholder-gray-500" placeholder="Email" />
            <input className="w-full p-3 rounded-lg bg-neutral-800 placeholder-gray-500" placeholder="Company" />
            <Button className="w-full py-3 text-lg" onClick={() => window.open("https://calendly.com/", "_blank")}>Pick a slot <Calendar className="ml-2 h-5 w-5" /></Button>
          </form>
        </main>
      </div>
    );
  }

  return (
    <div className="font-inter text-gray-200 bg-black overflow-x-hidden">
      <Backdrop />
      {/* NAV */}
      <nav className="sticky top-0 z-20 flex justify-between items-center px-8 py-4 backdrop-blur-lg/60 bg-black/30">
        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-br from-purple-400 via-fuchsia-400 to-teal-400 bg-clip-text text-transparent">Markovian</h1>
        <div className="space-x-6 hidden md:block">
          <Button variant="ghost" onClick={() => scrollTo("solutions")}>Solutions</Button>
          <Button variant="ghost" onClick={() => scrollTo("why")}>Why AI</Button>
          <Button variant="ghost" onClick={() => scrollTo("pricing")}>Pricing</Button>
          <Button onClick={() => setPage("book")}>Book a Call</Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl">
          Turbocharge your small business with <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">AI‑powered workflows</span>
        </motion.h2>
        <p className="mt-6 text-gray-400 max-w-xl">We help UK companies under £10 m revenue automate routine tasks, uncover insights and scale smarter.</p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" onClick={() => setPage("book")}>Book a Call <ArrowRight className="ml-2 h-5 w-5" /></Button>
          <Button size="lg" variant="secondary" onClick={() => scrollTo("pricing")}>See Pricing</Button>
        </div>
      </section>

      {/* SVG divider */}
      <svg className="w-full" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillOpacity="0.1" d="M0 0h1440v60H0z"/></svg>

      {/* SOLUTIONS */}
      <section id="solutions" className="px-6 py-24 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Solutions</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 group">
          {[
            { title: "AI Email Assistant", desc: "Automate customer support replies & inbound triage with GPT‑powered agents." },
            { title: "Smart Inventory", desc: "Demand forecasting models that cut stock holding costs by up to 30 %." },
            { title: "Predictive Finance", desc: "Rolling cash‑flow predictions & anomaly detection built into your spreadsheets." },
            { title: "Voice‑to‑Workflow", desc: "Turn meeting transcripts into instant tasks inside Slack, Notion, or Asana." },
            { title: "Churn Radar", desc: "Early‑warning system that flags at‑risk clients so you can intervene." },
            { title: "Auto‑Report Builder", desc: "Generate board‑ready PDFs from raw data in seconds—no manual copy‑paste." },
          ].map(({ title, desc }) => (
            <GlowCard key={title}>
              <Card className="rounded-2xl bg-neutral-900/70 backdrop-blur-md hover:ring-1 hover:ring-fuchsia-500/40 transition">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-xl font-semibold">{title}</h4>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </CardContent>
              </Card>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* WHY AI */}
      <section id="why" className="px-6 py-24 bg-neutral-900/40">
        <h3 className="text-4xl font-bold text-center mb-10">Why AI, Why Now?</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { stat: "+14 %", label: "Average UK SME revenue lift after implementing AI (PwC 2023)" },
            { stat: "25 hrs", label: "Weekly admin time saved per employee with automation (ONS data)" },
            { stat: "£120 bn", label: "Projected GDP boost from AI adoption by 2030 (Gov. Digital Econ Review)" },
          ].map(({ stat, label }) => (
            <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl bg-neutral-800/70 p-8 text-center backdrop-blur-md">
              <h4 className="text-5xl font-extrabold text-teal-300 mb-2">{stat}</h4>
              <p className="text-gray-400 text-sm leading-snug">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-24 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Pricing</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "AI Audit", price: "£1,000", desc: "One‑off deep‑dive, custom roadmap & 3‑6 month check‑in." },
            { title: "Improvement Subscription", price: "£349 / mo", desc: "Continuous optimisation & quarterly impact review." },
            { title: "Tailored Partnership", price: "Custom", desc: "End‑to‑end implementation & training. Get a quote." },
          ].map(({ title, price, desc }) => (
            <GlowCard key={title}>
              <Card className="rounded-2xl bg-neutral-900/70 backdrop-blur-md flex flex-col justify-between p-8 hover:ring-1 hover:ring-teal-400/40 transition">
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold mb-2">{title}</h4>
                  <p className="text-4xl font-bold text-gradient bg-gradient-to-r from-teal-400 to-fuchsia-400 bg-clip-text text-transparent">{price}</p>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
                <Button className="mt-6" onClick={() => setPage("book")}>Start</Button>
              </Card>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-24 bg-neutral-900/40">
        <h3 className="text-4xl font-bold text-center mb-12">Testimonials</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { name: "Ella Carter, Founder @ BrightBooks", quote: "Markovian’s audit gave us a 6‑month automation roadmap—invoice processing time dropped by 60 %." },
            { name: "Samir Patel, CTO @ GreenLeaf Logistics", quote: "Their demand‑forecast model shaved £30k off warehouse costs in the first quarter alone." },
            { name: "Lucy Evans, COO @ Shoreline Studios", quote: "The voice‑to‑workflow bot is a game‑changer. Our project managers can finally ditch note‑taking." },
            { name: "Adrian Cole, MD @ DeliDirect", quote: "Subscription support means we tweak models monthly; our online conversion has jumped 18 %." },
          ].map(({ name, quote }) => (
            <GlowCard key={name}>
              <Card className="rounded-2xl bg-neutral-800/60 backdrop-blur-md p-8 hover:ring-1 hover:ring-purple-400/40 transition">
                <p className="text-gray-200 mb-4">“{quote}”</p>
                <p className="text-sm text-gray-400">{name}</p>
              </Card>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <h3 className="text-4xl font-bold mb-6">Ready to unlock AI for your business?</h3>
        <Button size="lg" onClick={() => setPage("book")}>Book a Call <ArrowRight className="ml-2 h-5 w-5" /></Button>
      </section>

      <footer className="px-6 py-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Markovian Ltd. All rights reserved.
      </footer>
    </div>
  );
}

