// Service data structure for Nuceria Health
// This file contains all 35+ services organized by goal category

export type ServiceCategory = "hormones" | "weight-loss" | "aesthetics" | "wellness";

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: ServiceCategory;
  subcategory?: string;
  headline: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  expectations: {
    before: string;
    during: string;
    after: string;
  };
  idealFor: string[];
  contraindications: string[];
  pricing: {
    startingAt?: number;
    note?: string;
  };
  duration: string;
  results: string;
  faq: {
    question: string;
    answer: string;
  }[];
  relatedServices: string[];
  meta: {
    title: string;
    description: string;
  };
}

export interface GoalCategory {
  id: ServiceCategory;
  title: string;
  headline: string;
  description: string;
  symptoms: string[];
  stats: {
    label: string;
    value: string;
  };
  image: string;
}

export const goalCategories: GoalCategory[] = [
  {
    id: "hormones",
    title: "Balance My Hormones",
    headline: "Feel Energized, Balanced & Like Yourself Again",
    description: "Our personalized hormone replacement therapy programs help men and women restore optimal hormone levels, alleviating symptoms of hormonal imbalance and aging.",
    symptoms: [
      "Fatigue and low energy",
      "Difficulty sleeping",
      "Decreased libido",
      "Mood swings or irritability",
      "Weight gain",
      "Brain fog",
      "Muscle loss",
      "Hot flashes (women)",
    ],
    stats: {
      label: "Patients treated",
      value: "1,000+",
    },
    image: "/images/goals/hormones.jpg",
  },
  {
    id: "weight-loss",
    title: "Lose Weight",
    headline: "Achieve Your Weight Loss Goals with Medical Expertise",
    description: "Medically supervised weight loss programs including GLP-1 medications like Semaglutide and Tirzepatide, personalized nutrition plans, and metabolic optimization.",
    symptoms: [
      "Difficulty losing weight",
      "Slow metabolism",
      "Emotional eating",
      "Low energy",
      "Yo-yo dieting",
      "Cravings",
    ],
    stats: {
      label: "Avg weight loss",
      value: "35 lbs",
    },
    image: "/images/goals/weight-loss.jpg",
  },
  {
    id: "aesthetics",
    title: "Look & Feel Younger",
    headline: "Natural-Looking Results That Enhance Your Beauty",
    description: "From injectables like Botox and fillers to advanced skin treatments and body contouring, our aesthetic services help you look refreshed and confident.",
    symptoms: [
      "Fine lines and wrinkles",
      "Volume loss",
      "Uneven skin tone",
      "Acne scars",
      "Unwanted body hair",
      "Loose skin",
    ],
    stats: {
      label: "Procedures performed",
      value: "5,000+",
    },
    image: "/images/goals/aesthetics.jpg",
  },
  {
    id: "wellness",
    title: "Optimize My Wellness",
    headline: "Boost Energy, Immunity & Overall Health",
    description: "IV therapy, NAD+, ozone therapy, and other advanced wellness treatments to optimize your health from the inside out.",
    symptoms: [
      "Chronic fatigue",
      "Weak immune system",
      "Dehydration",
      "Poor recovery",
      "Nutrient deficiencies",
      "Brain fog",
    ],
    stats: {
      label: "IV treatments",
      value: "3,000+",
    },
    image: "/images/goals/wellness.jpg",
  },
];

// Sample services data - full data would include all 35+ services
export const services: Service[] = [
  // Hormones
  {
    id: "hrt-women",
    name: "HRT for Women",
    slug: "hormones/women",
    category: "hormones",
    headline: "Reclaim Your Energy, Mood & Vitality",
    description: "Personalized hormone replacement therapy for women experiencing perimenopause, menopause, or hormonal imbalance.",
    fullDescription: `Hormone Replacement Therapy (HRT) for women addresses the hormonal decline that occurs during perimenopause and menopause. Our board-certified physicians create personalized treatment plans using bioidentical hormones to restore balance and alleviate symptoms like hot flashes, night sweats, mood changes, and low energy.`,
    benefits: [
      "Reduced hot flashes and night sweats",
      "Improved energy and mood",
      "Better sleep quality",
      "Enhanced libido",
      "Maintained bone density",
      "Clearer thinking and memory",
    ],
    process: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "Comprehensive health history review and hormone level testing",
      },
      {
        step: 2,
        title: "Customized Plan",
        description: "Personalized HRT protocol designed for your specific needs",
      },
      {
        step: 3,
        title: "Ongoing Monitoring",
        description: "Regular follow-ups to optimize your treatment",
      },
    ],
    expectations: {
      before: "Initial consultation with hormone testing",
      during: "Treatment begins after reviewing your personalized protocol",
      after: "Most patients notice improvements within 2-4 weeks",
    },
    idealFor: [
      "Women experiencing menopause symptoms",
      "Those with low energy and mood changes",
      "Women with decreased libido",
      "Patients seeking natural hormone balance",
    ],
    contraindications: [
      "History of certain cancers",
      "Active blood clots",
      "Severe liver disease",
    ],
    pricing: {
      note: "Contact us for pricing - varies by treatment plan",
    },
    duration: "Ongoing treatment with regular monitoring",
    results: "Most patients report significant improvement in symptoms within 2-4 weeks, with optimal results at 3 months",
    faq: [
      {
        question: "Is HRT safe?",
        answer: "When properly prescribed and monitored by qualified physicians, HRT is safe and effective. We use bioidentical hormones and conduct regular monitoring to ensure safety.",
      },
      {
        question: "How long until I feel results?",
        answer: "Many patients notice improvements in energy and sleep within 2-4 weeks. Full hormonal balance typically takes 3 months.",
      },
      {
        question: "Will I need HRT forever?",
        answer: "Treatment duration varies by individual. Some women need long-term therapy while others may taper off. We regularly reassess your needs.",
      },
    ],
    relatedServices: ["hrt-men", "peptide-therapy", "iv-therapy"],
    meta: {
      title: "HRT for Women | Hormone Replacement Therapy Miami | Nuceria",
      description: "Personalized hormone replacement therapy for women in Miami. Relieve menopause symptoms and restore vitality with bioidentical HRT.",
    },
  },
  {
    id: "hrt-men",
    name: "HRT for Men",
    slug: "hormones/men",
    category: "hormones",
    headline: "Restore Your Strength, Energy & Confidence",
    description: "Testosterone replacement therapy and comprehensive hormone optimization for men experiencing low T symptoms.",
    fullDescription: `Testosterone levels naturally decline with age, leading to symptoms like fatigue, low libido, muscle loss, and mood changes. Our testosterone replacement therapy (TRT) programs help men restore optimal hormone levels and reclaim their vitality.`,
    benefits: [
      "Increased energy and stamina",
      "Improved muscle mass and strength",
      "Enhanced libido and sexual function",
      "Better mood and mental clarity",
      "Improved sleep quality",
      "Reduced body fat",
    ],
    process: [
      {
        step: 1,
        title: "Comprehensive Evaluation",
        description: "Health history, physical exam, and complete hormone panel",
      },
      {
        step: 2,
        title: "Treatment Initiation",
        description: "Begin your personalized testosterone therapy protocol",
      },
      {
        step: 3,
        title: "Monitoring & Optimization",
        description: "Regular labs and adjustments to maintain optimal levels",
      },
    ],
    expectations: {
      before: "Complete hormone panel and health evaluation",
      during: "Weekly or bi-weekly treatments depending on protocol",
      after: "Energy improvements typically seen within 2-3 weeks",
    },
    idealFor: [
      "Men with low testosterone symptoms",
      "Those experiencing fatigue and low libido",
      "Men seeking improved body composition",
      "Patients with confirmed low T levels",
    ],
    contraindications: [
      "Prostate cancer history",
      "Severe sleep apnea",
      "Elevated red blood cell count",
    ],
    pricing: {
      note: "Contact us for pricing - varies by treatment protocol",
    },
    duration: "Ongoing treatment with regular monitoring",
    results: "Energy and mood improvements within 2-3 weeks; muscle and body composition changes within 3-6 months",
    faq: [
      {
        question: "How do I know if I have low testosterone?",
        answer: "Symptoms include fatigue, low libido, difficulty building muscle, and mood changes. We confirm with comprehensive blood testing.",
      },
      {
        question: "What are the treatment options?",
        answer: "Options include injections, topical gels, and pellets. We'll recommend the best option based on your lifestyle and preferences.",
      },
      {
        question: "Are there side effects?",
        answer: "When properly monitored, side effects are minimal. We conduct regular lab work to ensure optimal dosing and safety.",
      },
    ],
    relatedServices: ["hrt-women", "peptide-therapy", "sexual-performance"],
    meta: {
      title: "TRT for Men | Testosterone Replacement Therapy Miami | Nuceria",
      description: "Expert testosterone replacement therapy for men in Miami. Restore energy, strength, and vitality with personalized TRT.",
    },
  },
  // Weight Loss
  {
    id: "medical-weight-loss",
    name: "Medical Weight Loss",
    slug: "weight-loss/medical",
    category: "weight-loss",
    headline: "Physician-Supervised Weight Loss That Works",
    description: "Comprehensive medical weight loss programs combining nutrition, exercise guidance, and metabolic optimization.",
    fullDescription: `Our medical weight loss program provides comprehensive support for sustainable weight loss. Under physician supervision, we address the underlying factors affecting your weight and create a personalized plan for lasting results.`,
    benefits: [
      "Clinically proven weight loss results",
      "Personalized nutrition plans",
      "Ongoing medical supervision",
      "Metabolic optimization",
      "Long-term weight maintenance support",
    ],
    process: [
      {
        step: 1,
        title: "Initial Assessment",
        description: "Comprehensive health evaluation and metabolic testing",
      },
      {
        step: 2,
        title: "Custom Plan Creation",
        description: "Personalized weight loss protocol designed for your body",
      },
      {
        step: 3,
        title: "Weekly Check-ins",
        description: "Regular monitoring and plan adjustments",
      },
    ],
    expectations: {
      before: "Complete health assessment and metabolic panel",
      during: "Weekly visits for the first month, then bi-weekly",
      after: "Average weight loss of 2-5 lbs per week",
    },
    idealFor: [
      "Individuals with 20+ lbs to lose",
      "Those who have struggled with diet programs",
      "Patients with metabolic conditions",
      "Anyone seeking medical supervision",
    ],
    contraindications: [
      "Severe eating disorders",
      "Active substance abuse",
      "Uncontrolled medical conditions",
    ],
    pricing: {
      note: "Program fees vary by duration and services included",
    },
    duration: "3-6 month programs with maintenance options",
    results: "Average weight loss of 10-15% of body weight over 6 months",
    faq: [
      {
        question: "How much weight can I expect to lose?",
        answer: "Most patients lose 2-5 pounds per week, with an average of 10-15% of body weight over 6 months.",
      },
      {
        question: "Do you prescribe weight loss medications?",
        answer: "Yes, when appropriate we may prescribe FDA-approved weight loss medications as part of your comprehensive plan.",
      },
      {
        question: "Is this program covered by insurance?",
        answer: "Some services may be covered. We provide documentation for insurance reimbursement when applicable.",
      },
    ],
    relatedServices: ["glp1-medications", "metabolic-health", "iv-therapy"],
    meta: {
      title: "Medical Weight Loss Miami | Physician-Supervised Programs | Nuceria",
      description: "Achieve lasting weight loss with our physician-supervised programs in Miami. Personalized plans with proven results.",
    },
  },
  {
    id: "glp1-medications",
    name: "Semaglutide / Tirzepatide",
    slug: "weight-loss/glp1",
    category: "weight-loss",
    subcategory: "GLP-1 Medications",
    headline: "Game-Changing Weight Loss Medications",
    description: "Prescription GLP-1 medications that reduce appetite, increase satiety, and help you achieve significant weight loss.",
    fullDescription: `GLP-1 medications like Semaglutide (Wegovy/Ozempic) and Tirzepatide (Mounjaro/Zepbound) represent a breakthrough in medical weight loss. These medications mimic natural hormones that regulate appetite and blood sugar, helping you feel full longer and reducing food cravings.`,
    benefits: [
      "Significant weight loss (15-20% of body weight)",
      "Reduced appetite and cravings",
      "Improved blood sugar control",
      "Better cardiovascular health markers",
      "Sustained long-term results",
    ],
    process: [
      {
        step: 1,
        title: "Eligibility Screening",
        description: "Medical evaluation to determine if GLP-1 therapy is right for you",
      },
      {
        step: 2,
        title: "Prescription & Training",
        description: "Receive prescription and learn self-administration technique",
      },
      {
        step: 3,
        title: "Monthly Monitoring",
        description: "Regular follow-ups to optimize dosing and monitor progress",
      },
    ],
    expectations: {
      before: "Medical screening and lab work",
      during: "Weekly self-injections at home",
      after: "Gradual weight loss starting week 2-4",
    },
    idealFor: [
      "Adults with BMI 30+ (or 27+ with conditions)",
      "Those who have struggled with traditional dieting",
      "Patients seeking significant weight loss",
    ],
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma",
      "Multiple endocrine neoplasia syndrome type 2",
      "Pregnancy or breastfeeding",
    ],
    pricing: {
      note: "Price varies by medication and insurance coverage. We help with prior authorizations.",
    },
    duration: "Ongoing treatment for 6-12+ months",
    results: "Clinical studies show 15-20% body weight loss at 12 months",
    faq: [
      {
        question: "Are these the same as Ozempic or Wegovy?",
        answer: "Semaglutide is the active ingredient in both Ozempic and Wegovy. We work with compounded and brand-name options based on availability and insurance.",
      },
      {
        question: "Do I have to give myself shots?",
        answer: "Yes, these are once-weekly subcutaneous injections. We provide training and most patients find it easy and painless.",
      },
      {
        question: "What happens when I stop taking it?",
        answer: "Without lifestyle changes, weight may be regained. We provide transition support and maintenance plans.",
      },
    ],
    relatedServices: ["medical-weight-loss", "metabolic-health", "nutrition-coaching"],
    meta: {
      title: "Semaglutide & Tirzepatide Miami | GLP-1 Weight Loss | Nuceria",
      description: "Get Semaglutide and Tirzepatide prescriptions in Miami. Medical supervision for safe, effective weight loss.",
    },
  },
  // Add more services as needed...
];

// Helper function to get services by category
export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

// Helper function to get goal category by ID
export function getGoalCategoryById(id: ServiceCategory): GoalCategory | undefined {
  return goalCategories.find((g) => g.id === id);
}
