import Hero from "../components/Hero";
import FeaturedIn from "../components/FeaturedIn";
import Partnerships from "../components/Partnerships";
import { FeatureOne, FeatureTwo } from "../components/Features";
import Booking from "../components/Booking";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedIn />
      <Partnerships />
      <FeatureOne />
      <FeatureTwo />
      <Booking />
      <Testimonials />
    </>
  );
}
