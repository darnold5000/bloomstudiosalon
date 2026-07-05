import Link from "next/link";
import Image from "next/image";
import type { Stylist } from "@/data/stylists";

export default function StylistCard({ stylist }: { stylist: Stylist }) {
  return (
    <Link
      href={`/stylists/${stylist.slug}`}
      className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-background sm:aspect-[3/4]">
        <Image
          src={stylist.image}
          alt={stylist.name}
          fill
          className="object-contain object-top transition duration-500 group-hover:scale-[1.02] sm:object-cover sm:object-top"
          sizes="(max-width: 640px) 50vw, (max-width: 1200px) 33vw, 20vw"
        />
      </div>
      <div className="p-4 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">{stylist.yearsExperience}</p>
        <h3 className="mt-1 font-serif text-xl font-medium text-text sm:text-2xl">{stylist.name}</h3>
        <p className="mt-1 text-sm text-muted">{stylist.title}</p>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted sm:mt-3">{stylist.bio}</p>
        <span className="mt-3 inline-block text-sm font-semibold text-accent transition group-hover:underline sm:mt-4">
          Book with {stylist.preferredName ?? stylist.name.split(" ")[0]} →
        </span>
      </div>
    </Link>
  );
}
