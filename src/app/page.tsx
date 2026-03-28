export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-charcoal via-slate to-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-indigo-light uppercase tracking-widest text-sm mb-4 font-body">
            Miami&apos;s Premier Wellness Center
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold mb-6 leading-tight">
            Feel Like Yourself Again
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Expert hormone therapy, medical weight loss, and aesthetic treatments 
            tailored to help you look and feel your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/book" 
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg"
            >
              Book Free Consultation
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150"
            >
              Explore Treatments
            </a>
          </div>
        </div>
      </section>

      {/* Placeholder for Goal Selector */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-indigo uppercase tracking-widest text-sm mb-2 font-body text-center">
            What&apos;s Your Goal?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-center mb-12 text-charcoal">
            Find Your Treatment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Balance My Hormones", desc: "HRT for men & women", href: "/hormones" },
              { title: "Lose Weight", desc: "Medical weight loss programs", href: "/weight-loss" },
              { title: "Look Younger", desc: "Aesthetic treatments", href: "/aesthetics" },
              { title: "Optimize Wellness", desc: "IV therapy & more", href: "/wellness" },
            ].map((goal) => (
              <a
                key={goal.title}
                href={goal.href}
                className="group p-8 bg-white border border-border rounded-2xl hover:border-indigo-light transition-all duration-250 hover:shadow-md hover:-translate-y-1"
              >
                <h3 className="font-display text-2xl font-medium text-charcoal mb-2 group-hover:text-indigo transition-colors">
                  {goal.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {goal.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer placeholder */}
      <footer className="bg-charcoal text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="font-display text-3xl font-medium mb-4">Nuceria</h3>
            <p className="font-body text-white/60 mb-8">Miami&apos;s Premier Wellness & Aesthetics Center</p>
            <p className="font-body text-sm text-white/40">
              © 2026 Nuceria Health. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
