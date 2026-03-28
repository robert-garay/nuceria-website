import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="font-display text-6xl md:text-8xl font-semibold text-charcoal mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl md:text-3xl font-medium text-charcoal mb-4">
          Page Not Found
        </h2>
        <p className="font-body text-muted-foreground max-w-md mx-auto mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          Let&apos;s get you back on track.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
