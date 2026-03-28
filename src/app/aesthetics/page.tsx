import Link from "next/link";
import { getServicesByCategory, getGoalCategoryById } from "@/content/services";

export const metadata = {
  title: "Aesthetic Treatments Miami | Botox, Fillers, Skin & Body | Nuceria",
  description: "Premium aesthetic treatments in Miami. Botox, dermal fillers, HydraFacial, laser treatments & more. Natural-looking results by medical experts.",
};

export default function AestheticsPage() {
  const category = getGoalCategoryById("aesthetics");
  const services = getServicesByCategory("aesthetics");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-slate to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-indigo-light uppercase tracking-widest text-sm mb-4 font-body">
              Look Younger
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 leading-tight">
              {category?.headline}
            </h1>
            <p className="font-body text-xl text-white/80 leading-relaxed mb-8">
              {category?.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/book?goal=aesthetics" 
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg"
              >
                Book Consultation
              </Link>
              <Link 
                href="#treatments" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150"
              >
                View Treatments
              </Link>
            </div>
            <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4">
              <p className="font-display text-3xl font-semibold text-white">{category?.stats.value}</p>
              <p className="font-body text-sm text-white/70 uppercase tracking-wider">{category?.stats.label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section id="treatments" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              Aesthetic Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/aesthetics/injectables"
              className="group bg-white rounded-xl overflow-hidden border border-border hover:border-indigo-light hover:shadow-lg transition-all duration-250"
            >
              <div className="aspect-[4/3] bg-slate" />
              <div className="p-6">
                <h3 className="font-display text-2xl font-medium text-charcoal group-hover:text-indigo transition-colors mb-2">
                  Injectables
                </h3>
                <p className="font-body text-foreground-secondary">
                  Botox, fillers, and more to smooth wrinkles and restore volume
                </p>
              </div>
            </Link>
            <Link
              href="/aesthetics/skin"
              className="group bg-white rounded-xl overflow-hidden border border-border hover:border-indigo-light hover:shadow-lg transition-all duration-250"
            >
              <div className="aspect-[4/3] bg-slate" />
              <div className="p-6">
                <h3 className="font-display text-2xl font-medium text-charcoal group-hover:text-indigo transition-colors mb-2">
                  Skin Treatments
                </h3>
                <p className="font-body text-foreground-secondary">
                  HydraFacial, peels, microneedling, and laser treatments
                </p>
              </div>
            </Link>
            <Link
              href="/aesthetics/body"
              className="group bg-white rounded-xl overflow-hidden border border-border hover:border-indigo-light hover:shadow-lg transition-all duration-250"
            >
              <div className="aspect-[4/3] bg-slate" />
              <div className="p-6">
                <h3 className="font-display text-2xl font-medium text-charcoal group-hover:text-indigo transition-colors mb-2">
                  Body
                </h3>
                <p className="font-body text-foreground-secondary">
                  Body contouring, skin tightening, and laser hair removal
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-medium text-white mb-4">
            Ready to Look Your Best?
          </h2>
          <Link
            href="/book?goal=aesthetics"
            className="inline-flex items-center justify-center px-10 py-5 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg text-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
