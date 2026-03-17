import Image from "next/image";

interface FullBleedImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  aspectRatio?: "cinematic" | "square" | "portrait" | "full";
  overlay?: boolean;
}

const aspectClasses = {
  cinematic: "aspect-[21/9]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  full: "h-screen",
};

export function FullBleedImage({
  src,
  alt,
  priority = false,
  aspectRatio = "cinematic",
  overlay = false,
}: FullBleedImageProps) {
  return (
    <div className={`relative w-full overflow-hidden ${aspectClasses[aspectRatio]}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="img-full-bleed"
        sizes="100vw"
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/10" />
      )}
    </div>
  );
}
