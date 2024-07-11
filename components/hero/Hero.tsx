import { getWindowDimensions } from "@/utils/domUtils";
import React, { useEffect, useState } from "react";
import { Vortex } from "../UI/vortex";
import { FlipWords } from "../UI/flip-words";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(window)
  );

  const words = [
    "light\xa0speed\xa0code",
    "rock\xa0star\xa0designs",
    "unparalleled\xa0innovation",
  ];

  useEffect(() => {
    function handleResize() {
      if (typeof window !== "undefined") {
        setWindowDimensions(getWindowDimensions(window));
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(windowDimensions?.height);

  return (
    <div
      style={{
        height: `calc(${windowDimensions?.height}px - 70px)`,
        overflow: "hidden",
      }}
    >
      <Vortex
        rangeY={200}
        className="flex items-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="h-[40rem] flex items-center px-4">
          <div className="text-[30px] md:text-[60px] lg:text-[90px] mx-auto font-normal text-[white] text-center transition-all ease-in-out">
            Capitalizing on your ideas with
            <FlipWords fadeColor="#BE0CEC" words={words} />
          </div>
        </div>
      </Vortex>
    </div>
  );
};
export default Hero;
