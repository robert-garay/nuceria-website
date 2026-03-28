import Link from "next/link";
import { getServicesByCategory, getGoalCategoryById } from "@/content/services";

export const metadata = {
  title: "IV Therapy & Wellness Miami | NAD+, Ozone & More | Nuceria",
  description: "Advanced wellness treatments in Miami. IV therapy, NAD+, ozone therapy, exosomes & more. Optimize your health and energy levels.",
};

export default function WellnessPage() {
  const category = getGoalCategoryById("wellness");
  const services = getServicesByCategory("wellness");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-slate to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-indigo-light uppercase tracking-widest text-sm mb-4 font-body">
              Optimize Wellness
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 leading-tight">
              {category?.headline}
            </h1>
            <p className="font-body text-xl text-white/80 leading-relaxed mb-8">
              {category?.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/book?goal=wellness" 
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg"
              >
                Book Treatment
              </Link>
            </div>
            <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4">
              <p className="font-display text-3xl font-semibold text-white">{category?.stats.value}</p>
              <p className="font-body text-sm text-white/70 uppercase tracking-wider">{category?.stats.label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              Wellness Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "IV Vitamin Therapy", desc: "Boost energy, immunity & hydration", href: "/wellness/iv-therapy" },
              { name: "NAD+ Therapy", desc: "Cellular repair & anti-aging", href: "/wellness/nad" },
              { name: "Ozone Therapy", desc: "Immune support & detoxification", href: "/wellness/ozone" },
              { name: "Exosome Therapy", desc: "Regenerative medicine", href: "/wellness/exosome" },
              { name: "Sexual Performance", desc: "Treatments for men & women", href: "/wellness/sexual-performance" },
              { name: "Medical Screening", desc: "Comprehensive health assessments", href: "/wellness/screening" },
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group bg-white rounded-xl p-6 border border-border hover:border-indigo-light hover:shadow-md transition-all duration-250"
              >
                <h3 className="font-display text-xl font-medium text-charcoal group-hover:text-indigo transition-colors mb-2">
                  {service.name}
                </h3>
                <p className="font-body text-sm text-foreground-secondary">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-medium text-white mb-4">
            Ready to Optimize Your Health?
          </h2>
          <Link
            href="/book?goal=wellness"
            className="inline-flex items-center justify-center px-10 py-5 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg text-lg"
          >
            Book Treatment
          </Link>
        </div>
      </section>
    </div>
  );
}
