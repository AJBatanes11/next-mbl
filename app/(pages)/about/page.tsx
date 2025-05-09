import HeroHome from "@/components/hero-home";
import RichText from "@/components/reusable/sections/rich-text";
import PrimaryButton from "@/components/reusable/snippets/custom-button";

export default function Home() {
  return (
    <>
      <HeroHome />
      <RichText heading="About Us" subheading="Manila Bankers Life" />
      <RichText heading="About Us" subheading="Manila Bankers Life" />
      <RichText heading="About Us" subheading="Manila Bankers Life" />
      
      {/* <PrimaryButton label="Button" />
      <PrimaryButton label="Small" size="small" />
      <PrimaryButton label="With Link, Medium, Secondary" link="/" size="medium" variant="secondary" />
      <PrimaryButton label="With Link, Large, Primary" link="/" size="large" variant="primary" />
      <PrimaryButton label="With Link, Large, Primary, Disabled" link="/" size="large" variant="primary" disabled /> */}

      <PrimaryButton label="Button"/>
      <PrimaryButton label="Button" variant="secondary" />
      <PrimaryButton label="Button" size="base"/>
      <PrimaryButton label="Button" size="small" />
      <PrimaryButton label="Button" size="medium" />
      <PrimaryButton label="Button" size="large" variant="secondary"/>
    </>
  );
}
