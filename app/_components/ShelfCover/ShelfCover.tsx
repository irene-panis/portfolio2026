import Image from "next/image";

type ShelfCoverProps = {
  imageUrl?: string | null;
  alt: string;
  fallbackText: string;
};

const ShelfCover = ({ imageUrl, alt, fallbackText }: ShelfCoverProps) => {
  if (imageUrl) {
    return (
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm">
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
    <div className="flex aspect-[2/3] w-full items-center justify-center rounded-sm bg-accent p-2 text-center">
      <p className="line-clamp-5 text-xs font-medium leading-tight">
        {fallbackText}
      </p>
    </div>
  );
};

export default ShelfCover;
