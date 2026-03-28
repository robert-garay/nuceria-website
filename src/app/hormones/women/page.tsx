import Link from "next/link";
import { getServiceBySlug } from "@/content/services";

export const metadata = {
  title: "HRT for Women | Hormone Replacement Therapy Miami | Nuceria Health",
  description: "Personalized hormone replacement therapy for women in Miami. Relieve menopause symptoms, restore energy, and feel like yourself again with bioidentical HRT.",
};

export default function HRTWomenPage() {
  const service = getServiceBySlug("hormones/women");

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
            <span className="text-charcoal">HRT for Women</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-slate to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-indigo-light uppercase tracking-widest text-sm mb-4 font-body">
              Hormone Replacement Therapy
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 leading-tight">
              {service.headline}
            </h1>
            <p className="font-body text-xl text-white/80 leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/book?service=hrt-women" 
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is HRT */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-6">
              What is HRT for Women?
            </h2>
            <div className="font-body text-lg text-foreground-secondary leading-relaxed space-y-4">
              <p>
                Hormone Replacement Therapy (HRT) for women addresses the hormonal decline that occurs 
                during perimenopause and menopause. As estrogen, progesterone, and testosterone levels 
                naturally decrease, many women experience uncomfortable symptoms that affect their 
                quality of life.
              </p>
              <p>
                Our board-certified physicians create personalized treatment plans using bioidentical 
                hormones — hormones that are molecularly identical to those your body naturally produces. 
                This approach helps restore balance and alleviate symptoms safely and effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              Benefits of HRT
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-6 rounded-xl">
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

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              The HRT Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {service.process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="font-display text-xl font-medium text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-foreground-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-medium text-charcoal text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faq.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-border">
                  <h3 className="font-body font-semibold text-charcoal mb-2">{item.question}</h3>
                  <p className="font-body text-foreground-secondary">{item.answer}</p>
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
            Ready to Feel Like Yourself Again?
          </h2>
          <p className="font-body text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Book your free HRT consultation and take the first step toward hormonal balance and vitality.
          </p>
          <Link
            href="/book?service=hrt-women"
            className="inline-flex items-center justify-center px-10 py-5 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg text-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
