import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-charcoal via-slate to-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
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
              <Link 
                href="/book" 
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg"
              >
                Book Free Consultation
              </Link>
              <Link 
                href="#goals" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150"
              >
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Stats */}
        <div className="absolute bottom-8 right-8 hidden lg:block">
          <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <p className="font-display text-2xl font-semibold text-white">2,000+</p>
              <p className="font-body text-xs text-white/70 uppercase tracking-wider">Patients Treated</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <p className="font-display text-2xl font-semibold text-white">15+</p>
              <p className="font-body text-xs text-white/70 uppercase tracking-wider">Specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-white border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <p className="font-body text-sm text-muted-foreground">Featured on:</p>
            {["MSNBC", "CNN", "Fox News", "CBS", "BuzzFeed"].map((media) => (
              <span key={media} className="font-body text-sm font-medium text-charcoal/60">
                {media}
              </span>
            ))}
            <div className="hidden md:block w-px h-6 bg-border mx-4" />
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-indigo" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-body text-sm text-charcoal">
                <strong>500+</strong> 5-star reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Selector */}
      <section id="goals" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-indigo uppercase tracking-widest text-sm mb-2 font-body">
              What&apos;s Your Goal?
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-charcoal">
              Find Your Treatment
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Balance My Hormones", desc: "HRT for men & women", href: "/hormones", icon: "⚡" },
              { title: "Lose Weight", desc: "Medical weight loss programs", href: "/weight-loss", icon: "💪" },
              { title: "Look Younger", desc: "Aesthetic treatments", href: "/aesthetics", icon: "✨" },
              { title: "Optimize Wellness", desc: "IV therapy & more", href: "/wellness", icon: "🌿" },
            ].map((goal) => (
              <Link
                key={goal.title}
                href={goal.href}
                className="group p-8 bg-white border border-border rounded-2xl hover:border-indigo-light transition-all duration-250 hover:shadow-md hover:-translate-y-1"
              >
                <span className="text-4xl mb-4 block">{goal.icon}</span>
                <h3 className="font-display text-2xl font-medium text-charcoal mb-2 group-hover:text-indigo transition-colors">
                  {goal.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {goal.desc}
                </p>
                <span className="inline-flex items-center mt-4 font-body text-sm text-indigo group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-indigo uppercase tracking-widest text-sm mb-2 font-body">
              Simple Process
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-charcoal">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Consult", desc: "Free initial consultation to discuss your goals and health history" },
              { step: "02", title: "Personalized Plan", desc: "Our medical team creates a customized treatment plan just for you" },
              { step: "03", title: "Feel the Difference", desc: "Begin your journey to feeling younger, more energetic, and confident" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="inline-block font-display text-5xl font-bold text-indigo/20 mb-4">
                  {item.step}
                </span>
                <h3 className="font-display text-2xl font-medium text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-foreground-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-indigo uppercase tracking-widest text-sm mb-2 font-body">
              Our Services
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-charcoal">
              Popular Treatments
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "HRT for Women", result: "Feel balanced & energized", href: "/hormones/women" },
              { title: "Medical Weight Loss", result: "Lost 35 lbs in 3 months", href: "/weight-loss/medical" },
              { title: "Botox & Fillers", result: "Look naturally refreshed", href: "/aesthetics/injectables" },
              { title: "IV Therapy", result: "Immediate energy boost", href: "/wellness/iv-therapy" },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl bg-charcoal aspect-[4/5]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-body text-sm text-indigo-light mb-2">
                    {service.result}
                  </p>
                  <h3 className="font-display text-xl font-medium text-white group-hover:text-indigo-light transition-colors">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Trust Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-indigo uppercase tracking-widest text-sm mb-2 font-body">
              Expert Care
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-charcoal">
              Meet Your Care Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Dr. Alex Alonso", role: "Medical Director", creds: "MD", image: "/images/team/dr-alonso.jpg" },
              { name: "Samantha Fonte", role: "Nurse Practitioner", creds: "MSN, APRN, FNP-BC", image: "/images/team/samantha-fonte.jpg" },
              { name: "Our Specialists", role: "Medical Team", creds: "15+ Experts", image: "/images/team/team.jpg" },
            ].map((member) => (
              <Link
                key={member.name}
                href="/about/team"
                className="text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate group-hover:bg-indigo/20 transition-colors flex items-center justify-center">
                  <span className="font-display text-4xl text-charcoal/30">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-display text-xl font-medium text-charcoal group-hover:text-indigo transition-colors">
                  {member.name}
                </h3>
                <p className="font-body text-sm text-indigo mb-1">{member.creds}</p>
                <p className="font-body text-sm text-muted-foreground">{member.role}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/about/team"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo text-indigo hover:bg-indigo hover:text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150"
            >
              View All Team Members
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-indigo uppercase tracking-widest text-sm mb-2 font-body">
                Learn
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-charcoal">
                Latest Articles
              </h2>
            </div>
            <Link
              href="/learn/blog"
              className="hidden md:inline-flex items-center font-body text-sm text-indigo hover:text-indigo-dark"
            >
              View All Articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "What to Expect from HRT", category: "Hormones", date: "Dec 15, 2025" },
              { title: "Semaglutide vs Tirzepatide: Which is Right?", category: "Weight Loss", date: "Dec 10, 2025" },
              { title: "The Complete Guide to Botox", category: "Aesthetics", date: "Dec 5, 2025" },
            ].map((post, i) => (
              <Link
                key={i}
                href={`/learn/blog/post-${i + 1}`}
                className="group block bg-white border border-border rounded-xl overflow-hidden hover:border-indigo-light transition-all duration-250"
              >
                <div className="aspect-video bg-slate" />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-indigo-pale text-indigo-dark font-body text-xs uppercase tracking-wider rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-display text-xl font-medium text-charcoal group-hover:text-indigo transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-4">
            Ready to Start?
          </h2>
          <p className="font-body text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Your first consultation is free. Take the first step toward feeling like yourself again.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-10 py-5 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg text-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
