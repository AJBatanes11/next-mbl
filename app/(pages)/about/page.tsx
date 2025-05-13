import Hero from "@/components/reusable/sections/hero";
import RichText from "@/components/reusable/sections/rich-text";
import placeholderImage from "@/public/images/Health and Wellness Banner.avif";

export default function Home() {
  return (
    <>
      <Hero
        heading="About Us"
        subheading="We are a team of passionate individuals dedicated to making a difference."
        image={placeholderImage}
        imageAlt="About Us"
        size="large"
        placement="middle-center" 
        buttonLabel="Learn More"
        buttonLink="/"
      />
      <RichText
        heading="Our Mission"
        subheading="To provide the best services to our customers."
      />
      <RichText
        heading="Our Vision"
        subheading="To be the leading provider in our industry."
        buttonLabel="Learn More"
        buttonLink="/"
      />
      <RichText
        heading="Our Values"
        subheading="Integrity, Excellence, and Innovation."
      />
      <RichText
        heading="Our Team"
        subheading="A diverse group of professionals with a shared goal."
        buttonLabel="Button"
        buttonVariant="tertiary"
      />
    </>
  );
}
