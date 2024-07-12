import React from "react";
import "./Achievements.css";
import {
  IconLayout,
  IconWorld,
  IconMoodCheck,
  IconTimeDuration15,
} from "@tabler/icons-react";
import GridComponent from "../UI/GridComponent";
import CounterCard from "../UI/CounterCard";
import SectionHeader from "../UI/SectionHeader";

function Achievements() {
  const content = [
    <CounterCard
      label="Projects Delivered"
      fromNumber={0}
      toNumber={30}
      numberText="+"
      icon={<IconLayout size={50} />}
    />,
    <CounterCard
      label="Countries Worldwide"
      fromNumber={0}
      toNumber={4}
      icon={<IconWorld size={50} />}
    />,
    <CounterCard
      label="Satisfied Customers"
      fromNumber={0}
      toNumber={12}
      numberText="+"
      icon={<IconMoodCheck size={50} />}
    />,
    <CounterCard
      label="Missed Deadlines"
      fromNumber={50}
      toNumber={0}
      numberText=""
      icon={<IconTimeDuration15 size={50} />}
    />,
  ];
  return (
    <div className="pt-[100px] text-white">
      <SectionHeader
        title="We are at a Glance"
        description="Don't worry about sounding professional. Sound like you. We have about 80 years of tech experience among our team, trust you'll be in safe hands."
      />
      <GridComponent content={content} />
    </div>
  );
}

export default Achievements;
