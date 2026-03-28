import Link from "next/link";
import { getServicesByCategory, getGoalCategoryById } from "@/content/services";

export const metadata = {
  title: "Hormone Replacement Therapy | HRT for Men & Women | Nuceria Health",
  description: "Expert hormone replacement therapy in Miami. Balance your hormones, restore energy, and feel like yourself again with personalized HRT for men and women.",
};

export default function HormonesPage() {
  const category = getGoalCategoryById("hormones");
  const services = getServicesByCategory("hormones");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-slate to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-indigo-light uppercase tracking-widest text-sm mb-4 font-body">
              Balance My Hormones
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 leading-tight">
              {category?.headline}
            </h1>
            <p className="font-body text-xl text-white/80 leading-relaxed mb-8">
              {category?.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/book?goal=hormones" 
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg"
              >
                Book Consultation
              </Link>
              <Link 
                href="#symptoms" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150"
              >
                Check Symptoms
              </Link>
            </div>
            <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4">
              <p className="font-display text-3xl font-semibold text-white">{category?.stats.value}</p>
              <p className="font-body text-sm text-white/70 uppercase tracking-wider">{category?.stats.label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gender Selector */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <p className="text-center font-body text-sm uppercase tracking-widest text-muted-foreground mb-6">
            Hormone Therapy For
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="/hormones/women"
              className="group flex-1 max-w-sm p-8 bg-white border-2 border-border rounded-2xl hover:border-indigo transition-all duration-250 text-center"
            >
              <span className="text-6xl mb-4 block">👩</span>
              <h2 className="font-display text-2xl font-medium text-charcoal group-hover:text-indigo transition-colors mb-2">
                Women
              </h2>
              <p className="font-body text-sm text-foreground-secondary">
                Perimenopause, menopause & hormonal imbalance
              </p>
            </Link>
            <Link
              href="/hormones/men"
              className="group flex-1 max-w-sm p-8 bg-white border-2 border-border rounded-2xl hover:border-indigo transition-all duration-250 text-center"
            >
              <span className="text-6xl mb-4 block">👨</span>
              <h2 className="font-display text-2xl font-medium text-charcoal group-hover:text-indigo transition-colors mb-2">
                Men
              </h2>
              <p className="font-body text-sm text-foreground-secondary">
                Low testosterone & male hormonal health
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Symptoms Checker */}
      <section id="symptoms" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
                Is Hormone Imbalance Affecting You?
              </h2>
              <p className="font-body text-lg text-foreground-secondary">
                Check any symptoms you&apos;re experiencing:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category?.symptoms.map((symptom) => (
                <div
                  key={symptom}
                  className="flex items-center gap-3 p-4 bg-white border border-border rounded-lg cursor-pointer hover:border-indigo transition-colors"
                >
                  <div className="w-5 h-5 border-2 border-border rounded flex items-center justify-center hover:border-indigo" />
                  <span className="font-body text-charcoal">{symptom}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="font-body text-foreground-secondary mb-4">
                Experiencing 3 or more symptoms? HRT might be right for you.
              </p>
              <Link
                href="/book?goal=hormones"
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg"
              >
                Book Free HRT Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              Our Hormone Services
            </h2>
            <p className="font-body text-lg text-foreground-secondary max-w-2xl mx-auto">
              Comprehensive hormone therapy solutions tailored to your unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                href={`/${service.slug}`}
                className="group bg-white rounded-xl p-6 border border-border hover:border-indigo-light hover:shadow-md transition-all duration-250"
              >
                <h3 className="font-display text-xl font-medium text-charcoal group-hover:text-indigo transition-colors mb-2">
                  {service.name}
                </h3>
                <p className="font-body text-sm text-foreground-secondary mb-4 line-clamp-2">
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

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              The HRT Process
            </h2>
            <p className="font-body text-lg text-foreground-secondary">
              Simple, personalized, and medically supervised
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Comprehensive Testing", desc: "Complete hormone panel and health evaluation" },
              { step: "02", title: "Personalized Plan", desc: "Custom HRT protocol designed for your body" },
              { step: "03", title: "Ongoing Care", desc: "Regular monitoring and plan adjustments" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="inline-block font-display text-5xl font-bold text-indigo/20 mb-4">
                  {item.step}
                </span>
                <h3 className="font-display text-xl font-medium text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-foreground-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              Your HRT Care Team
            </h2>
            <p className="font-body text-lg text-foreground-secondary max-w-2xl mx-auto">
              Led by board-certified physicians specializing in hormone optimization
            </p>
          </div>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate flex items-center justify-center">
                <span className="font-display text-3xl text-charcoal/30">A</span>
              </div>
              <h3 className="font-display text-lg font-medium text-charcoal">Dr. Alex Alonso</h3>
              <p className="font-body text-sm text-indigo">MD, Medical Director</p>
              <p className="font-body text-xs text-muted-foreground">Hormone Therapy Specialist</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/about/team"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo text-indigo hover:bg-indigo hover:text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150"
            >
              Meet Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-medium text-charcoal text-center mb-12">
              Common Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is HRT safe?",
                  a: "When properly prescribed and monitored by qualified physicians, HRT is safe and effective. We use bioidentical hormones and conduct regular monitoring.",
                },
                {
                  q: "How long until I see results?",
                  a: "Many patients notice improvements in energy and sleep within 2-4 weeks. Full hormonal balance typically takes 3 months.",
                },
                {
                  q: "Do you use bioidentical hormones?",
                  a: "Yes, we primarily use bioidentical hormones that are molecularly identical to those your body naturally produces.",
                },
                {
                  q: "Will insurance cover HRT?",
                  a: "Coverage varies by insurance plan. We provide detailed documentation for insurance submission and offer competitive self-pay options.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-border">
                  <h3 className="font-body font-semibold text-charcoal mb-2">{faq.q}</h3>
                  <p className="font-body text-foreground-secondary">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-medium text-white mb-4">
            Ready to Balance Your Hormones?
          </h2>
          <p className="font-body text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Book your free consultation and take the first step toward feeling energized, balanced, and like yourself again.
          </p>
          <Link
            href="/book?goal=hormones"
            className="inline-flex items-center justify-center px-10 py-5 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg text-lg"
          >
            Book Free HRT Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
