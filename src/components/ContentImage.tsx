import Image from "next/image";

type ContentImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
};

export default function ContentImage({
  src,
  alt,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className = "",
}: ContentImageProps) {
  return (
    <div
      className={`relative aspect-[3/2] overflow-hidden rounded-2xl bg-background shadow-md sm:aspect-[4/3] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-center sm:object-cover sm:object-center"
        sizes={sizes}
      />
    </div>
  );
}
