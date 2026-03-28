import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | Nuceria Health",
  description: "Learn about Nuceria Health's mission to help you feel like yourself again through expert hormone therapy, medical weight loss, and aesthetic treatments in Miami.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-indigo-light uppercase tracking-widest text-sm mb-4 font-body">
              About Us
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 leading-tight">
              Your Care Is in Expert Hands
            </h1>
            <p className="font-body text-xl text-white/80 leading-relaxed">
              Nuceria Health was founded on a simple belief: everyone deserves to feel like themselves again. 
              We combine medical expertise with personalized care to help you look and feel your best.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-medium text-charcoal mb-6">
                Our Mission
              </h2>
              <p className="font-body text-lg text-foreground-secondary leading-relaxed mb-6">
                To provide exceptional wellness and aesthetic care that empowers our patients to live 
                healthier, more vibrant lives. We believe in treating the root cause, not just the symptoms, 
                using evidence-based medicine and cutting-edge treatments.
              </p>
              <p className="font-body text-lg text-foreground-secondary leading-relaxed">
                Every patient deserves a personalized approach. That&apos;s why we take time to understand 
                your unique health history, goals, and concerns before creating a treatment plan tailored specifically for you.
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-8">
              <h3 className="font-display text-2xl font-medium text-charcoal mb-6">
                Core Values
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Patient-First Care", desc: "Your health and satisfaction are our top priorities" },
                  { title: "Medical Excellence", desc: "Board-certified physicians and evidence-based treatments" },
                  { title: "Personalized Approach", desc: "No one-size-fits-all solutions — every plan is unique" },
                  { title: "Continuous Innovation", desc: "Staying at the forefront of wellness and aesthetics" },
                ].map((value) => (
                  <div key={value.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-indigo mt-2" />
                    <div>
                      <h4 className="font-body font-semibold text-charcoal">{value.title}</h4>
                      <p className="font-body text-sm text-foreground-secondary">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              What Makes Us Different
            </h2>
            <p className="font-body text-lg text-foreground-secondary max-w-2xl mx-auto">
              We&apos;re not just another medspa. Our medical-led approach ensures you receive 
              safe, effective treatments with real results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "2,000+", label: "Patients Treated", desc: "Trusted by thousands in Miami" },
              { stat: "15+", label: "Medical Specialists", desc: "Board-certified experts" },
              { stat: "35+", label: "Services Offered", desc: "Comprehensive wellness & aesthetics" },
              { stat: "10+", label: "Years of Excellence", desc: "Serving Miami since 2015" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-6 text-center">
                <p className="font-display text-4xl font-semibold text-indigo mb-2">{item.stat}</p>
                <p className="font-body font-semibold text-charcoal mb-1">{item.label}</p>
                <p className="font-body text-sm text-foreground-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              Featured In
            </h2>
            <p className="font-body text-lg text-foreground-secondary max-w-2xl mx-auto">
              Our expertise has been recognized by leading media outlets nationwide.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["MSNBC", "CNN", "Fox News", "CBS", "BuzzFeed", "Forbes", "Vogue"].map((media) => (
              <span 
                key={media} 
                className="font-display text-2xl text-charcoal/30 hover:text-charcoal/60 transition-colors"
              >
                {media}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-4xl font-medium text-charcoal mb-6">
                Visit Our Miami Clinic
              </h2>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-body font-semibold text-charcoal mb-1">Address</p>
                  <p className="font-body text-foreground-secondary">
                    8500 SW 8th St, Suite 105<br />
                    Miami, FL 33144
                  </p>
                </div>
                <div>
                  <p className="font-body font-semibold text-charcoal mb-1">Hours</p>
                  <p className="font-body text-foreground-secondary">
                    Monday – Friday: 9:00 AM – 6:00 PM<br />
                    Saturday: 10:00 AM – 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
                <div>
                  <p className="font-body font-semibold text-charcoal mb-1">Contact</p>
                  <p className="font-body text-foreground-secondary">
                    <a href="tel:+13053984370" className="hover:text-indigo transition-colors">(305) 398-4370</a><br />
                    <a href="mailto:info@mynuceria.com" className="hover:text-indigo transition-colors">info@mynuceria.com</a>
                  </p>
                </div>
              </div>
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg"
              >
                Book a Consultation
              </Link>
            </div>
            <div className="bg-slate rounded-2xl aspect-square lg:aspect-auto" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-medium text-white mb-4">
            Meet Our Team
          </h2>
          <p className="font-body text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Get to know the medical professionals dedicated to your care and wellness journey.
          </p>
          <Link
            href="/about/team"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-charcoal font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150"
          >
            View Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
