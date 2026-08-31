import Image from "next/image";
import { Wifi, Tv, UtensilsCrossed, CookingPot } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { contact } from "@/config/institution";

const features = [
  { icon: Wifi, label: "Free Wi-Fi Access" },
  { icon: Tv, label: "TV & Entertainment" },
  { icon: UtensilsCrossed, label: "Daily Meals" },
  { icon: CookingPot, label: "Optional Cooking" },
];

export function HostelSection() {
  return (
    <section className="bg-[var(--color-paper-dim)] py-20 md:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Accommodation"
            title="Hostels Available Within CBD"
            description="Comfort, convenience and security — for students who need accommodation close to their courses."
          />
          <ul className="mt-6 grid grid-cols-2 gap-4">
            {features.map((f) => (
              <li key={f.label} className="flex items-center gap-3 text-sm text-[var(--color-ink)]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-green-900)] text-[var(--color-orange-400)]">
                  <f.icon size={16} />
                </span>
                {f.label}
              </li>
            ))}
          </ul>
          <Button href={contact.whatsapp.href} size="lg" className="mt-8">
            Enquire About Accommodation
          </Button>
        </div>

        {/* Uses the exact supplied hostel advertisement asset — no stock imagery. */}
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)] shadow-[var(--shadow-lg)]">
          <Image
            src="/marketing/hostel-ad.png"
            alt="BBTI hostel advertisement: comfort, convenient, security — Free Wi-Fi access, TV & entertainment, daily meals, optional cooking, KES 7,000 monthly"
            width={569}
            height={330}
            className="h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
