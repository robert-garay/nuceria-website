import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Nuceria Health",
  description: "Nuceria Health's privacy policy. Learn how we protect your personal information and health data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-medium text-charcoal mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="font-body text-foreground-secondary mb-6">
            Last updated: March 27, 2026
          </p>

          <p className="font-body text-foreground-secondary mb-6">
            Nuceria Health (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website or use our services.
          </p>

          <h2 className="font-display text-2xl font-medium text-charcoal mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p className="font-body text-foreground-secondary mb-4">
            We may collect information about you in a variety of ways. The information we may collect includes:
          </p>
          <ul className="font-body text-foreground-secondary list-disc pl-6 mb-6 space-y-2">
            <li><strong>Personal Data:</strong> Name, email address, phone number, date of birth, and demographic information.</li>
            <li><strong>Health Information:</strong> Medical history, symptoms, treatment preferences, and health goals.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
          </ul>

          <h2 className="font-display text-2xl font-medium text-charcoal mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="font-body text-foreground-secondary mb-4">
            We use the information we collect to:
          </p>
          <ul className="font-body text-foreground-secondary list-disc pl-6 mb-6 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Process appointments and consultations</li>
            <li>Communicate with you about your care</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Send promotional communications (with your consent)</li>
          </ul>

          <h2 className="font-display text-2xl font-medium text-charcoal mt-8 mb-4">
            3. HIPAA Compliance
          </h2>
          <p className="font-body text-foreground-secondary mb-6">
            As a healthcare provider, we are subject to the Health Insurance Portability and Accountability Act (HIPAA). 
            We maintain strict security measures to protect your Protected Health Information (PHI) and comply with 
            all HIPAA regulations regarding privacy and security.
          </p>

          <h2 className="font-display text-2xl font-medium text-charcoal mt-8 mb-4">
            4. Information Sharing
          </h2>
          <p className="font-body text-foreground-secondary mb-6">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="font-body text-foreground-secondary list-disc pl-6 mb-6 space-y-2">
            <li>Healthcare providers involved in your care</li>
            <li>Service providers who assist our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Insurance companies (with your authorization)</li>
          </ul>

          <h2 className="font-display text-2xl font-medium text-charcoal mt-8 mb-4">
            5. Your Rights
          </h2>
          <p className="font-body text-foreground-secondary mb-4">
            You have the right to:
          </p>
          <ul className="font-body text-foreground-secondary list-disc pl-6 mb-6 space-y-2">
            <li>Access your personal information</li>
            <li>Request corrections to your information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>File a complaint about our privacy practices</li>
          </ul>

          <h2 className="font-display text-2xl font-medium text-charcoal mt-8 mb-4">
            6. Security Measures
          </h2>
          <p className="font-body text-foreground-secondary mb-6">
            We implement appropriate technical and organizational security measures to protect your information, 
            including encryption, secure servers, and access controls. However, no method of transmission over 
            the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-display text-2xl font-medium text-charcoal mt-8 mb-4">
            7. Cookies and Tracking
          </h2>
          <p className="font-body text-foreground-secondary mb-6">
            We use cookies and similar tracking technologies to improve your browsing experience, 
            analyze website traffic, and understand where our visitors are coming from. 
            You can control cookies through your browser settings.
          </p>

          <h2 className="font-display text-2xl font-medium text-charcoal mt-8 mb-4">
            8. Children's Privacy
          </h2>
          <p className="font-body text-foreground-secondary mb-6">
            Our services are not intended for individuals under 18 years of age. 
            We do not knowingly collect personal information from children under 18.
          </p>

          <h2 className="font-display text-2xl font-medium text-charcoal mt-8 mb-4">
            9. Changes to This Policy
          </h2>
          <p className="font-body text-foreground-secondary mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="font-display text-2xl font-medium text-charcoal mt-8 mb-4">
            10. Contact Us
          </h2>
          <p className="font-body text-foreground-secondary mb-6">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="font-body text-foreground-secondary mb-6">
            <p>Nuceria Health</p>
            <p>8500 SW 8th St, Suite 105</p>
            <p>Miami, FL 33144</p>
            <p>Phone: <a href="tel:+13053984370" className="text-indigo hover:underline">(305) 398-4370</a></p>
            <p>Email: <a href="mailto:privacy@mynuceria.com" className="text-indigo hover:underline">privacy@mynuceria.com</a></p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150"
          >
            Contact Us with Questions
          </Link>
        </div>
      </div>
    </div>
  );
}
