import HeroHome from "@/components/hero-home";
import Hero from "@/components/reusable/sections/hero";
import RichText from "@/components/reusable/sections/rich-text";
import Container from "@/components/reusable/snippets/container";
import PrimaryButton from "@/components/reusable/snippets/custom-button";
import PlaceholderImg from "@/public/images/Health and Wellness Banner.avif";

export default function Home() {
  return (
    <>
        {/* <Hero image={PlaceholderImg} imageAlt="Placeholder Image" size="fullscreen" /> */}
        <RichText sectionHeader heading="Development Page" subheading="This is where I usually put and try components that are still under development" />
        {/* <RichText subheading="Testing" />
        <PrimaryButton label="Button"/>
        <PrimaryButton label="Button" variant="secondary" />
        <PrimaryButton label="Button" size="base"/>
        <PrimaryButton label="Button" size="small" />
        <PrimaryButton label="Button" size="medium" />
        <PrimaryButton label="Button" size="large" variant="secondary"/> */}
    </>
  );
}
