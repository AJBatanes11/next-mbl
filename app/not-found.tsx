export const metadata = {
  title: "404 - Not Found",
  description: "Page not found",
};

import RichText from "@/components/reusable/sections/rich-text";
import CustomButton from "@/components/reusable/snippets/custom-button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <RichText
        heading="404 - Page not found"
        subheading="The page you are looking for does not exist."
        sectionHeader
        buttonLabel="Go to Home"
        buttonLink="/"
        buttonVariant="primary"
      />
    </>
  );
}