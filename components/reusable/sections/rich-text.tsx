import Container from "../snippets/container";

interface RichTextProps {
  heading?: string;
  subheading?: string;
  sectionHeader?: boolean;
};

export default function RichText({ heading, subheading, sectionHeader }: RichTextProps) {
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
      </div>
    </Container>
  );
}
