import Image from "next/image";

type ShelfCoverProps = {
  imageUrl?: string | null;
  alt: string;
  fallbackText: string;
  aspectRatio?: "2/3" | "square";
};

const aspectClasses = {
  "2/3": "aspect-[2/3]",
  square: "aspect-square",
} as const;

const ShelfCover = ({
  imageUrl,
  alt,
  fallbackText,
  aspectRatio = "2/3",
}: ShelfCoverProps) => {
  const aspectClass = aspectClasses[aspectRatio];

  if (imageUrl) {
    return (
      <div className={`relative ${aspectClass} w-full overflow-hidden rounded-sm`}>
        <Image
          src={imageUrl}
          alt={alt}
          fill
          sizes="(max-width: 576px) 20vw, 115px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`flex ${aspectClass} w-full items-center justify-center rounded-sm bg-accent p-2 text-center`}>
      <p className="line-clamp-5 text-xs font-medium leading-tight">
        {fallbackText}
      </p>
    </div>
  );
};

export default ShelfCover;
