import React from "react";
import "./Services.css";
import {
  IconCloud,
  IconCurrencyDollar,
  IconHelp,
  IconTerminal2,
  IconIcons,
  IconChartGridDots,
  IconTopologyStar3,
  IconShieldLock,
} from "@tabler/icons-react";
import { CardGrid } from "../UI/CardGrid";

function Services() {
  const cards = [
    {
      title: "Design",
      description: "UI/UX designs that will stun your users.",
      icon: <IconIcons />,
    },
    {
      title: "Development",
      description:
        "Weather it's for the web or mobile devices we've got you covered with scalable software to meet all your needs.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Cloud based services",
      description: "Secure, faster and cheaper cloud servicess.",
      icon: <IconCloud />,
    },
    {
      title: "Architecture Design",
      description:
        "From simple to complex we got you covered with architecture designs that will optimise your application.",
      icon: <IconChartGridDots />,
    },
    {
      title: "Security",
      description: "Sleep safe knowing your data is secure",
      icon: <IconShieldLock />,
    },

    {
      title: "Integration",
      description: "Enjoy seamless 3rd party integrations.",
      icon: <IconTopologyStar3 />,
    },
    {
      title: "24/7 Support",
      description:
        "We are available a 100% of the time to make sure you never miss a beat.",
      icon: <IconHelp />,
    },
    {
      title: "Pricing like no other",
      description: "Combining high quality with affordable prices",
      icon: <IconCurrencyDollar />,
    },
  ];
  return (
    <div className="pt-[50px]">
      <div className="text-center text-[#ba0fe2] text-4xl md:text-5xl mb-[30px] transition-all ease-in-out">
        Our solutions
      </div>
      <div className="text-center text-white text-xs mb-[30px] md:mb-[100px] w-[90%] md:w-[500px] m-auto transition-all ease-in-out">
        Got an idea? Let's make it fly. Whether it's a business venture, a
        passion project, or a creative pursuit, your online presence is your
        launchpad. We turn ideas into digital dynamite. Let's make waves
        together.
      </div>
      <CardGrid cards={cards} />
    </div>
  );
}

export default Services;
