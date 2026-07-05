import Link from "next/link";
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export default function ServiceCard({ title, description, href, image }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium text-text">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-accent transition group-hover:underline">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
