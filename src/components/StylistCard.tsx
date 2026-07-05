import Link from "next/link";
import Image from "next/image";
import type { Stylist } from "@/data/stylists";

export default function StylistCard({ stylist }: { stylist: Stylist }) {
  return (
    <Link
      href={`/stylists/${stylist.slug}`}
      className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={stylist.image}
          alt={stylist.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">{stylist.yearsExperience}</p>
        <h3 className="mt-1 font-serif text-2xl font-medium text-text">{stylist.name}</h3>
        <p className="mt-1 text-sm text-muted">{stylist.title}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{stylist.bio}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-accent transition group-hover:underline">
          View profile →
        </span>
      </div>
    </Link>
  );
}
