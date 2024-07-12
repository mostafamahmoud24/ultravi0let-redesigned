import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/utils/cn";
import React from "react";
import dynamic from "next/dynamic";

interface indexProps {}

const Hero = dynamic(() => import("../components/hero/Hero"), { ssr: false });
const Services = dynamic(() => import("../components/services/Services"), {
  ssr: false,
});
const Achievements = dynamic(
  () => import("../components/achievements/Achievements"),
  {
    ssr: false,
  }
);
const Testimonials = dynamic(
  () => import("../components/testimonials/Testimonials"),
  {
    ssr: false,
  }
);

const HomePage: React.FC<indexProps> = ({}) => {
  return (
    <div>
      <Navbar
        className={cn(
          "sticky top-0 inset-x-0 max-w-2xl mx-auto z-50 max-w-100 flex bg-black center"
        )}
      />
      <Hero />
      <Services />
      <Achievements />
      <Testimonials />
    </div>
  );
};
export default HomePage;
