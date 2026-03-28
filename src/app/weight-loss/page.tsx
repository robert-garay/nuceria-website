import Link from "next/link";
import { getServicesByCategory, getGoalCategoryById } from "@/content/services";

export const metadata = {
  title: "Medical Weight Loss Miami | Semaglutide, Tirzepatide & More | Nuceria",
  description: "Physician-supervised medical weight loss in Miami. GLP-1 medications, personalized nutrition plans, and proven results. Book your free consultation.",
};

export default function WeightLossPage() {
  const category = getGoalCategoryById("weight-loss");
  const services = getServicesByCategory("weight-loss");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-slate to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-indigo-light uppercase tracking-widest text-sm mb-4 font-body">
              Lose Weight
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 leading-tight">
              {category?.headline}
            </h1>
            <p className="font-body text-xl text-white/80 leading-relaxed mb-8">
              {category?.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/book?goal=weight-loss" 
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg"
              >
                Start Your Journey
              </Link>
              <Link 
                href="#programs" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150"
              >
                View Programs
              </Link>
            </div>
            <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4">
              <p className="font-display text-3xl font-semibold text-white">{category?.stats.value}</p>
              <p className="font-body text-sm text-white/70 uppercase tracking-wider">{category?.stats.label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              Our Weight Loss Programs
            </h2>
            <p className="font-body text-lg text-foreground-secondary max-w-2xl mx-auto">
              Medical expertise meets personalized care for lasting results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.slice(0, 4).map((service) => (
              <Link
                key={service.id}
                href={`/${service.slug}`}
                className="group bg-white rounded-xl p-8 border-2 border-border hover:border-indigo transition-all duration-250"
              >
                <h3 className="font-display text-2xl font-medium text-charcoal group-hover:text-indigo transition-colors mb-3">
                  {service.name}
                </h3>
                <p className="font-body text-foreground-secondary mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center font-body text-sm text-indigo group-hover:translate-x-1 transition-transform">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              Real Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="font-display text-4xl font-semibold text-indigo mb-2">35 lbs</p>
                <p className="font-body text-charcoal">Average weight loss in 3 months</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="font-display text-4xl font-semibold text-indigo mb-2">15-20%</p>
                <p className="font-body text-charcoal">Body weight reduction with GLP-1s</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="font-display text-4xl font-semibold text-indigo mb-2">90%</p>
                <p className="font-body text-charcoal">Patients reach their goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-medium text-white mb-4">
            Ready to Lose Weight?
          </h2>
          <p className="font-body text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Book your free consultation and start your personalized weight loss journey today.
          </p>
          <Link
            href="/book?goal=weight-loss"
            className="inline-flex items-center justify-center px-10 py-5 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg text-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
