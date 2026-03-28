import Link from "next/link";
import { getServiceBySlug } from "@/content/services";

export const metadata = {
  title: "TRT for Men | Testosterone Replacement Therapy Miami | Nuceria Health",
  description: "Expert testosterone replacement therapy for men in Miami. Restore energy, strength, and vitality with medically supervised TRT.",
};

export default function HRTMenPage() {
  const service = getServiceBySlug("hormones/men");

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="font-body text-sm">
            <Link href="/" className="text-muted-foreground hover:text-indigo">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link href="/hormones" className="text-muted-foreground hover:text-indigo">Hormones</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-charcoal">HRT for Men</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-slate to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-indigo-light uppercase tracking-widest text-sm mb-4 font-body">
              Testosterone Replacement Therapy
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 leading-tight">
              {service.headline}
            </h1>
            <p className="font-body text-xl text-white/80 leading-relaxed mb-8">
              {service.description}
            </p>
            <Link 
              href="/book?service=hrt-men" 
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* What is TRT */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-6">
              What is Testosterone Replacement Therapy?
            </h2>
            <div className="font-body text-lg text-foreground-secondary leading-relaxed space-y-4">
              <p>
                Testosterone levels naturally decline with age, typically beginning around age 30. 
                This gradual decrease can lead to symptoms that affect your energy, body composition, 
                mood, and overall quality of life.
              </p>
              <p>
                Testosterone Replacement Therapy (TRT) helps restore optimal hormone levels, 
                allowing you to reclaim your vitality. Our comprehensive approach includes 
                thorough testing, personalized treatment plans, and ongoing monitoring to 
                ensure safety and effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              Signs of Low Testosterone
            </h2>
            <p className="font-body text-lg text-foreground-secondary">
              Do you experience any of these symptoms?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              "Fatigue and low energy",
              "Decreased muscle mass",
              "Increased body fat",
              "Low libido",
              "Difficulty concentrating",
              "Mood changes or irritability",
              "Poor sleep quality",
              "Reduced strength",
            ].map((symptom, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-indigo" />
                <span className="font-body text-charcoal">{symptom}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="font-body text-foreground-secondary mb-4">
              If you&apos;re experiencing 3 or more symptoms, TRT might be right for you.
            </p>
            <Link
              href="/book?service=hrt-men"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg"
            >
              Get Tested
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              Benefits of TRT
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-surface p-6 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-indigo-pale flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-indigo" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-body text-charcoal">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-medium text-white mb-4">
            Restore Your Vitality
          </h2>
          <p className="font-body text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Book your free TRT consultation and comprehensive hormone panel today.
          </p>
          <Link
            href="/book?service=hrt-men"
            className="inline-flex items-center justify-center px-10 py-5 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg text-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
