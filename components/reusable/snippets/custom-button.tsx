import Link from "next/link";

interface CustomButtonProps {
  label?: string;
  link?: string;
  onClick?: () => void;
  disabled?: boolean;
  customClass?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "base" | "medium" | "large";
};

export default function CustomButton({ label, link, onClick, disabled,customClass, variant = "primary", size = "base" }: CustomButtonProps) {

  const disabledClass = disabled ? " opacity-50 cursor-not-allowed" : "";

  const sizeClass = size === "small" ? "text-xs" : size === "base" ? "text-sm" : size === "medium" ? "text-base" : "text-lg";

  const primaryClass = `btn group mb-4 w-full bg-gradient-to-t from-blue-900 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto ${disabledClass} ${sizeClass}`;

  const secondaryClass = `btn group mb-4 w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:mb-0 sm:w-auto ${disabledClass} ${sizeClass}`;

  const className = customClass || (variant === "primary" ? primaryClass : secondaryClass);

  if (link) {
    return (
      <Link href={link} className={className}>
        <span className="relative inline-flex items-center">
          {label}
        </span>
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      <span className="relative inline-flex items-center">
        {label}
      </span>
    </button>
  );
}
