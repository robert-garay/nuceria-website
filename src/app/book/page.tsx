"use client";

import { useState } from "react";
import Link from "next/link";

const goals = [
  { id: "hormones", label: "Balance My Hormones", icon: "⚡" },
  { id: "weight-loss", label: "Lose Weight", icon: "💪" },
  { id: "aesthetics", label: "Look Younger", icon: "✨" },
  { id: "wellness", label: "Optimize Wellness", icon: "🌿" },
  { id: "unsure", label: "Not Sure — Help Me Decide", icon: "❓" },
];

const servicesByGoal: Record<string, { id: string; name: string }[]> = {
  hormones: [
    { id: "hrt-women", name: "HRT for Women" },
    { id: "hrt-men", name: "HRT for Men" },
    { id: "peptide-therapy", name: "Peptide Therapy" },
    { id: "testosterone", name: "Testosterone Therapy" },
  ],
  "weight-loss": [
    { id: "medical-weight-loss", name: "Medical Weight Loss Program" },
    { id: "semaglutide", name: "Semaglutide / Tirzepatide" },
    { id: "metabolic", name: "Metabolic Health Optimization" },
    { id: "nutrition", name: "Nutrition Coaching" },
  ],
  aesthetics: [
    { id: "botox", name: "Botox & Wrinkle Relaxers" },
    { id: "fillers", name: "Dermal Fillers" },
    { id: "hydrafacial", name: "HydraFacial" },
    { id: "microneedling", name: "Microneedling with PRP" },
    { id: "laser-hair", name: "Laser Hair Removal" },
  ],
  wellness: [
    { id: "iv-therapy", name: "IV Vitamin Therapy" },
    { id: "nad", name: "NAD+ Therapy" },
    { id: "ozone", name: "Ozone Therapy" },
    { id: "exosome", name: "Exosome Therapy" },
  ],
  unsure: [
    { id: "consultation", name: "General Wellness Consultation" },
  ],
};

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: "",
    service: "",
    patientType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    heardFrom: "",
    preferredDate: "",
    preferredTime: "",
    callback: false,
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-border">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-medium text-charcoal mb-4">
              You&apos;re All Set!
            </h1>
            <p className="font-body text-lg text-foreground-secondary mb-6">
              Thanks, {formData.firstName}! We&apos;ve received your appointment request.
            </p>
            <div className="bg-surface rounded-xl p-6 mb-8 text-left">
              <h2 className="font-body font-semibold text-charcoal mb-4">Appointment Summary</h2>
              <div className="space-y-2 font-body text-sm">
                <p><span className="text-muted-foreground">Goal:</span> {goals.find((g) => g.id === formData.goal)?.label}</p>
                <p><span className="text-muted-foreground">Service:</span> {servicesByGoal[formData.goal]?.find((s) => s.id === formData.service)?.name}</p>
                <p><span className="text-muted-foreground">Date:</span> {formData.callback ? "We'll call you to schedule" : formData.preferredDate}</p>
                <p><span className="text-muted-foreground">Email:</span> {formData.email}</p>
              </div>
            </div>
            <p className="font-body text-foreground-secondary mb-8">
              We&apos;ll send a confirmation to {formData.email} within 24 hours.
            </p>
            {formData.goal === "hormones" && (
              <div className="mb-8 p-4 bg-indigo-pale rounded-xl">
                <p className="font-body text-sm text-indigo-dark mb-2">
                  💡 Complete your HRT Assessment for faster processing
                </p>
                <Link
                  href="/book/hrt-intake"
                  className="inline-flex items-center font-body text-sm text-indigo hover:text-indigo-dark underline"
                >
                  Take the 5-minute assessment →
                </Link>
              </div>
            )}
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-medium text-charcoal mb-2">
            Book Your Appointment
          </h1>
          <p className="font-body text-foreground-secondary">
            Your first consultation is free
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="font-body text-sm text-charcoal">
              Step {step} of {totalSteps}
            </span>
            <span className="font-body text-sm text-muted-foreground">
              {Math.round((step / totalSteps) * 100)}% complete
            </span>
          </div>
          <div className="h-2 bg-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-border">
          {/* Step 1: Goal */}
          {step === 1 && (
            <div>
              <h2 className="font-display text-2xl font-medium text-charcoal mb-6">
                What&apos;s your primary goal?
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {goals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => {
                      setFormData({ ...formData, goal: goal.id, service: "" });
                      handleNext();
                    }}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                      formData.goal === goal.id
                        ? "border-indigo bg-indigo-pale"
                        : "border-border hover:border-indigo-light"
                    }`}
                  >
                    <span className="text-2xl">{goal.icon}</span>
                    <span className="font-body font-medium text-charcoal">{goal.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Service */}
          {step === 2 && (
            <div>
              <h2 className="font-display text-2xl font-medium text-charcoal mb-6">
                Which service interests you?
              </h2>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {servicesByGoal[formData.goal]?.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setFormData({ ...formData, service: service.id });
                      handleNext();
                    }}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      formData.service === service.id
                        ? "border-indigo bg-indigo-pale"
                        : "border-border hover:border-indigo-light"
                    }`}
                  >
                    <span className="font-body font-medium text-charcoal">{service.name}</span>
                  </button>
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground">
                Not sure? Don&apos;t worry — we&apos;ll help you decide during your consultation.
              </p>
            </div>
          )}

          {/* Step 3: Patient Type */}
          {step === 3 && (
            <div>
              <h2 className="font-display text-2xl font-medium text-charcoal mb-6">
                Are you a new or returning patient?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setFormData({ ...formData, patientType: "new" });
                    handleNext();
                  }}
                  className={`p-6 rounded-xl border-2 transition-all text-center ${
                    formData.patientType === "new"
                      ? "border-indigo bg-indigo-pale"
                      : "border-border hover:border-indigo-light"
                  }`}
                >
                  <span className="font-display text-xl font-medium text-charcoal block mb-2">
                    New Patient
                  </span>
                  <span className="font-body text-sm text-muted-foreground">
                    First time at Nuceria
                  </span>
                </button>
                <button
                  onClick={() => {
                    setFormData({ ...formData, patientType: "returning" });
                    handleNext();
                  }}
                  className={`p-6 rounded-xl border-2 transition-all text-center ${
                    formData.patientType === "returning"
                      ? "border-indigo bg-indigo-pale"
                      : "border-border hover:border-indigo-light"
                  }`}
                >
                  <span className="font-display text-xl font-medium text-charcoal block mb-2">
                    Returning Patient
                  </span>
                  <span className="font-body text-sm text-muted-foreground">
                    I&apos;ve been here before
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {step === 4 && (
            <div>
              <h2 className="font-display text-2xl font-medium text-charcoal mb-6">
                Tell us about yourself
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-charcoal focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-charcoal focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-charcoal focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(305) 000-0000"
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-charcoal focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-charcoal focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      value={formData.heardFrom}
                      onChange={(e) => setFormData({ ...formData, heardFrom: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-charcoal focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20"
                    >
                      <option value="">Select...</option>
                      <option value="google">Google Search</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Friend/Family Referral</option>
                      <option value="doctor">Doctor Referral</option>
                      <option value="media">TV/Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Scheduling */}
          {step === 5 && (
            <div>
              <h2 className="font-display text-2xl font-medium text-charcoal mb-6">
                When would you like to come in?
              </h2>
              
              <div className="mb-6">
                <label className="flex items-center gap-3 p-4 bg-surface rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.callback}
                    onChange={(e) => setFormData({ ...formData, callback: e.target.checked })}
                    className="w-5 h-5 text-indigo border-border rounded focus:ring-indigo"
                  />
                  <span className="font-body text-charcoal">
                    I&apos;d prefer a callback to schedule my appointment
                  </span>
                </label>
              </div>

              {!formData.callback && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-charcoal focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal mb-2">
                      Preferred Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-charcoal focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20"
                    >
                      <option value="">Select time...</option>
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 4pm)</option>
                      <option value="evening">Evening (4pm - 6pm)</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block font-body text-sm font-medium text-charcoal mb-2">
                  Additional Notes (optional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Anything else we should know?"
                  rows={3}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-charcoal focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 resize-y"
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="px-6 py-3 font-body text-charcoal hover:text-indigo disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ← Back
            </button>
            
            {step < totalSteps ? (
              <button
                onClick={handleNext}
                disabled={
                  (step === 1 && !formData.goal) ||
                  (step === 2 && !formData.service) ||
                  (step === 3 && !formData.patientType) ||
                  (step === 4 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone))
                }
                className="px-8 py-3 bg-indigo hover:bg-indigo-dark disabled:bg-indigo/50 text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all disabled:cursor-not-allowed"
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || (!formData.callback && !formData.preferredDate)}
                className="px-8 py-3 bg-indigo hover:bg-indigo-dark disabled:bg-indigo/50 text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Confirm Appointment"
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
