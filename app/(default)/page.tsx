export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import RichText from "@/components/reusable/sections/rich-text";

export default function Home() {
  return (
    <>
      <Hero />
      <RichText heading="Home Page" subheading="This is the home page" />
      {/* <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />*/}
      <Cta /> 
    </>
  );
}
