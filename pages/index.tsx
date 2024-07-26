import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/utils/cn";
import React from "react";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { FollowerPointerCard } from "@/components/UI/following-pointer";

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
const ContactUs = dynamic(() => import("../components/contactUs/ContactUs"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/footer/Footer"), {
  ssr: false,
});

const HomePage: React.FC<indexProps> = ({}) => {
  return (
    <FollowerPointerCard>
      <div>
        <title>Ultravi0let</title>
        <Toaster />
        <Navbar
          className={cn(
            "sticky top-0 inset-x-0 max-w-2xl mx-auto z-50 max-w-100 flex bg-black center"
          )}
        />
        <Hero />
        <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce>
          <Services />
        </ScrollAnimation>
        <Achievements />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </FollowerPointerCard>
  );
};
export default HomePage;
