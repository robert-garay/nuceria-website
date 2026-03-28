import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Team | Meet the Experts at Nuceria Health Miami",
  description: "Meet the board-certified physicians and medical specialists at Nuceria Health. Our expert team provides hormone therapy, weight loss, and aesthetic treatments in Miami.",
};

const team = {
  medical: [
    {
      name: "Dr. Alex Alonso",
      role: "Medical Director",
      credentials: "MD",
      bio: "Board-certified physician specializing in hormone optimization and anti-aging medicine. Dr. Alonso leads our medical team with over 15 years of experience.",
      specialties: ["Hormone Therapy", "Medical Weight Loss", "Anti-Aging"],
      image: "/images/team/dr-alonso.jpg",
    },
    {
      name: "Samantha Fonte",
      role: "Nurse Practitioner",
      credentials: "MSN, APRN, FNP-BC",
      bio: "Samantha specializes in hormone replacement therapy and wellness optimization. She provides personalized care plans for each patient.",
      specialties: ["HRT for Women", "Wellness Optimization", "Patient Education"],
      image: "/images/team/samantha-fonte.jpg",
    },
  ],
  executive: [
    {
      name: "Michael Rodriguez",
      role: "Chief Operating Officer",
      bio: "Michael oversees operations and ensures every patient receives exceptional care and service.",
    },
    {
      name: "Sarah Chen",
      role: "Director of Patient Experience",
      bio: "Sarah is dedicated to making every visit to Nuceria seamless and comfortable.",
    },
  ],
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-indigo-light uppercase tracking-widest text-sm mb-4 font-body">
              Our Team
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 leading-tight">
              Your Care Is in Expert Hands
            </h1>
            <p className="font-body text-xl text-white/80 leading-relaxed">
              Meet the board-certified physicians and medical professionals dedicated to 
              helping you look and feel your best.
            </p>
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              Medical Team
            </h2>
            <p className="font-body text-lg text-foreground-secondary max-w-2xl mx-auto">
              Board-certified physicians and practitioners specializing in hormone therapy, 
              weight loss, and aesthetics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.medical.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden border border-border">
                <div className="aspect-square bg-slate" />
                <div className="p-8">
                  <p className="font-body text-sm text-indigo uppercase tracking-wider mb-1">
                    {member.credentials}
                  </p>
                  <h3 className="font-display text-2xl font-medium text-charcoal mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">{member.role}</p>
                  <p className="font-body text-foreground-secondary mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-indigo-pale text-indigo-dark font-body text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
              Leadership Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.executive.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-display text-xl font-medium text-charcoal mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-indigo text-sm mb-3">{member.role}</p>
                <p className="font-body text-foreground-secondary text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-medium text-white mb-4">
            Ready to Meet Your Care Team?
          </h2>
          <p className="font-body text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Book your free consultation and start your wellness journey with our expert team.
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
