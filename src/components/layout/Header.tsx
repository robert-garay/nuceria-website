"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const goals = [
  {
    title: "Balance My Hormones",
    href: "/hormones",
    items: [
      { label: "For Women", href: "/hormones/women" },
      { label: "For Men", href: "/hormones/men" },
      { label: "Peptide Therapy", href: "/hormones/peptides" },
      { label: "Testosterone Therapy", href: "/hormones/testosterone" },
    ],
  },
  {
    title: "Lose Weight",
    href: "/weight-loss",
    items: [
      { label: "Medical Weight Loss", href: "/weight-loss/medical" },
      { label: "Semaglutide / Tirzepatide", href: "/weight-loss/glp1" },
      { label: "Metabolic Health", href: "/weight-loss/metabolic" },
      { label: "Nutrition Coaching", href: "/weight-loss/nutrition" },
    ],
  },
  {
    title: "Look Younger",
    href: "/aesthetics",
    items: [
      { label: "Injectables", href: "/aesthetics/injectables" },
      { label: "Skin Treatments", href: "/aesthetics/skin" },
      { label: "Body", href: "/aesthetics/body" },
    ],
  },
  {
    title: "Optimize Wellness",
    href: "/wellness",
    items: [
      { label: "IV Therapy", href: "/wellness/iv-therapy" },
      { label: "NAD+ Therapy", href: "/wellness/nad" },
      { label: "Ozone Therapy", href: "/wellness/ozone" },
      { label: "Exosome Therapy", href: "/wellness/exosome" },
    ],
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGoal, setActiveGoal] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="font-display text-2xl font-semibold text-charcoal hover:text-indigo transition-colors">
            Nuceria
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Goals Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveGoal('menu')}
              onMouseLeave={() => setActiveGoal(null)}
            >
              <button className="flex items-center gap-1 font-body text-sm font-medium uppercase tracking-wider text-charcoal hover:text-indigo transition-colors">
                Goals
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeGoal === 'menu' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="bg-white rounded-xl shadow-xl border border-border p-6 min-w-[800px]">
                    <div className="grid grid-cols-4 gap-6">
                      {goals.map((goal) => (
                        <div key={goal.title}>
                          <Link 
                            href={goal.href}
                            className="block font-display text-lg font-medium text-charcoal hover:text-indigo mb-3 transition-colors"
                          >
                            {goal.title}
                          </Link>
                          <ul className="space-y-2">
                            {goal.items.slice(0, 3).map((item) => (
                              <li key={item.label}>
                                <Link 
                                  href={item.href}
                                  className="font-body text-sm text-foreground-secondary hover:text-indigo transition-colors"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link 
                            href={goal.href}
                            className="inline-block mt-2 font-body text-xs uppercase tracking-wider text-indigo hover:text-indigo-dark"
                          >
                            View All →
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link 
                        href="/book"
                        className="flex items-center gap-2 font-body text-sm text-indigo hover:text-indigo-dark"
                      >
                        <span>📋</span>
                        Not sure where to start? Take our 2-min quiz →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/shop" 
              className="font-body text-sm font-medium uppercase tracking-wider text-charcoal hover:text-indigo transition-colors"
            >
              Shop
            </Link>
            <Link 
              href="/learn" 
              className="font-body text-sm font-medium uppercase tracking-wider text-charcoal hover:text-indigo transition-colors"
            >
              Learn
            </Link>
            <Link 
              href="/about" 
              className="font-body text-sm font-medium uppercase tracking-wider text-charcoal hover:text-indigo transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://portal.mynuceria.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium uppercase tracking-wider text-charcoal hover:text-indigo transition-colors"
            >
              Patient Portal
            </a>
            <Link 
              href="/book"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-indigo transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Goals Accordion */}
            <div className="space-y-4 mb-6">
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">Goals</p>
              {goals.map((goal) => (
                <div key={goal.title}>
                  <Link
                    href={goal.href}
                    className="block font-display text-xl font-medium text-charcoal hover:text-indigo mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {goal.title}
                  </Link>
                  <ul className="pl-4 space-y-2">
                    {goal.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="font-body text-sm text-foreground-secondary hover:text-indigo"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile Secondary Nav */}
            <div className="space-y-4 pt-6 border-t border-border">
              <Link
                href="/shop"
                className="block font-body text-lg font-medium text-charcoal hover:text-indigo"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/learn"
                className="block font-body text-lg font-medium text-charcoal hover:text-indigo"
                onClick={() => setIsMenuOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/about"
                className="block font-body text-lg font-medium text-charcoal hover:text-indigo"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <a
                href="https://portal.mynuceria.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-lg font-medium text-charcoal hover:text-indigo"
              >
                Patient Portal
              </a>
            </div>

            {/* Mobile CTA */}
            <div className="mt-8 pt-6 border-t border-border">
              <Link
                href="/book"
                className="block w-full text-center px-6 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
