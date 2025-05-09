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
  placement?: 
    | "top-left" | "top-right" | "top-center"
    | "middle-left" | "middle-right" | "middle-center"
    | "bottom-left" | "bottom-right" | "bottom-center";
}

const sizeClass = {
  small: "h-[30dvh]",
  medium: "h-[50dvh]",
  large: "h-[70dvh]",
  fullscreen: "h-dvh",
  natural: ""
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
  imageAlt = "Hero image",
  size = "medium",
  heading,
  subheading,
  buttonLabel,
  buttonLink,
  placement = "middle-center"
}: HeroProps) {
  const isNatural = size === "natural";
  const imageStyles = isNatural ? "object-contain" : "object-cover object-center";

  return (
    <div className={`relative w-full ${isNatural ? "h-auto" : sizeClass[size]}`}>
      {image && (
        <div
          className={`relative w-full ${isNatural ? "" : "h-full"}`}
          style={isNatural ? { aspectRatio: "1280 / 549" } : undefined}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={imageStyles}
            sizes="100vw"
            priority
          />
        </div>
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
