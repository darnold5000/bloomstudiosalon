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
          className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
