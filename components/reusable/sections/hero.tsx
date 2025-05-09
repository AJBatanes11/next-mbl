import { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  image?: StaticImageData | string;
  imageAlt?: string;
  size?: "small" | "medium" | "large" | "fullscreen" | "natural";
  heading?: string;
  subheading?: string;
  buttonLabel?: string;
  buttonLink?: string;
  placement?: "top-left" | "top-right" | "top-center" | "middle-left" | "middle-right" | "middle-center" | "bottom-left" | "bottom-right" | "bottom-center";
}

const sizeClass = {
  small: "h-48",
  medium: "h-64",
  large: "h-96",
  fullscreen: "h-[100dvh]",
  natural: "" // we'll handle this one differently
};

const placementClass = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "top-center": "top-0 left-1/2 -translate-x-1/2",
  "middle-left": "top-1/2 left-0 -translate-y-1/2",
  "middle-right": "top-1/2 right-0 -translate-y-1/2",
  "middle-center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2"
};

export default function Hero({
  image,
  imageAlt,
  size = "medium",
  heading,
  subheading,
  buttonLabel,
  buttonLink,
  placement = "middle-center"
}: HeroProps) {
  const aspectRatio = image ? image.width / image.height : 1280 / 549; // fallback

  return (
    
    <div className={`relative w-full ${size === "natural" ? "h-auto" : sizeClass[size]}`}>

    {size === "natural" ? (
    <div
        className="relative w-full"
        style={{ aspectRatio: `${aspectRatio}` }}
    >
        <Image
        src={image}
        alt={imageAlt || "Hero image"}
        fill
        className="object-contain"
        sizes="100vw"
        priority
        />
    </div>
    ) : (
    <Image
        src={image}
        alt={imageAlt || "Hero image"}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
    />
    )}



      {(heading || subheading || buttonLabel) && (
        <div className={`absolute ${placementClass[placement]} z-10 text-center text-white p-4`}>
          {heading && <h1 className="text-3xl md:text-5xl font-bold">{heading}</h1>}
          {subheading && <p className="mt-2 text-lg md:text-xl">{subheading}</p>}
          {buttonLabel && buttonLink && (
            <a
              href={buttonLink}
              className="inline-block mt-4 bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
            >
              {buttonLabel}
            </a>
          )}
        </div>
      )}
    </div>
    
  );
}
