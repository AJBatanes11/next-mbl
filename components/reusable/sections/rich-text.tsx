import Container from "../snippets/container";
import CustomButton from "../snippets/custom-button";

interface RichTextProps {
  heading?: string;
  subheading?: string;
  sectionHeader?: boolean;
  buttonLabel?: string;
  buttonLink?: string;
  buttonVariant?: "primary" | "secondary";
  buttonSize?: "small" | "base" | "medium" | "large";
};

export default function RichText({ heading, subheading, sectionHeader, buttonLabel, buttonLink, buttonVariant = "primary", buttonSize = "base" }: RichTextProps) {
  return (
    <Container variant={sectionHeader ? "section-header" : "section"}>
      <div className="space-y-3 text-center">
        <p className="text-2xl font-bold text-gray-900">
          {heading}
        </p>
        <div className="text-sm font-medium text-gray-500">
          <span className="text-gray-700">
            {subheading}  
          </span>
        </div>
        {buttonLabel && (
          <CustomButton label={buttonLabel} link={buttonLink} variant={buttonVariant} size={buttonSize} />
        )}
      </div>
    </Container>
  );
}
