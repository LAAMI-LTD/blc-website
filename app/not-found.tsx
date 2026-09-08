import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="font-display text-6xl font-bold text-[var(--color-green-900)]">404</p>
        <h1 className="text-2xl font-semibold text-[var(--color-green-950)] md:text-3xl">
          We couldn&apos;t find that page
        </h1>
        <p className="max-w-md text-sm text-muted-foreground">
          The page you&apos;re looking for may have moved or no longer exists.
          Try one of the links below.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/courses" variant="ghost">
            Browse Courses
          </Button>
          <Button href="/contact" variant="ghost">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
