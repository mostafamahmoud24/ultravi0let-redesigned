import React, { useEffect, useState } from "react";
import SectionHeader from "../UI/SectionHeader";
import { InfiniteMovingCards } from "../UI/infinite-moving-cards";
import { testimonials } from "@/constants";

interface TestimonialsProps {}

const Testimonials: React.FC<TestimonialsProps> = ({}) => {
  return (
    <div className="pt-[50px] md:pt-[100px]">
      <SectionHeader
        title="Testimonials"
        description="Don't Just take our word for it, here is what other people think of our services"
      />
      <div className="rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
    </div>
  );
};
export default Testimonials;
