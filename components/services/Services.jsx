import React from "react";
import "./Services.css";
import { CardGrid } from "../UI/CardGrid";
import SectionHeader from "../UI/SectionHeader";
import { cards } from "@/constants";

function Services() {
  return (
    <div className="pt-[50px]">
      <SectionHeader
        title="Our solutions"
        description="Got an idea? Let's make it fly. Whether it's a business venture, a
        passion project, or a creative pursuit, your online presence is your
        launchpad. We turn ideas into digital dynamite. Let's make waves
        together."
      />
      <CardGrid cards={cards} />
    </div>
  );
}

export default Services;
