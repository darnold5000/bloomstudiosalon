import Image from "next/image";

type GalleryProps = {
  images: { src: string; alt: string }[];
};

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <div
          key={image.src}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-background shadow-sm sm:aspect-[3/4]"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain object-center sm:object-cover sm:object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
