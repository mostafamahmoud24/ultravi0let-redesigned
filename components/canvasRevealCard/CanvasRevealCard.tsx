"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/UI/canvas-reveal-effect";

interface CanvasRevealCardProps {}

const CanvasRevealCard: React.FC<CanvasRevealCardProps> = ({}) => {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        <Card
          title="Got an idea? Let's make it fly. Whether it's a business venture, a passion project, or a creative pursuit, your online presence is your launchpad.
We turn ideas into digital dynamite. Let's make waves together."
          icon={
            <div>
              <div className="text-[#BE0CEC] text-[40px]">ULTRA</div>
              <div className="text-[white] text-[14px]">Come closer!</div>
            </div>
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [23, 29, 58],
              [178, 15, 218],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>

        <Card
          title="Don't worry about sounding professional. Sound like you. We have about 80 years of tech experience among our team, trust you'll be in safe hands"
          icon={
            <div>
              <div className="text-[#BE0CEC] text-[40px]">VIOLET</div>
              <div className="text-[white] text-[14px]">Come closer!</div>
            </div>
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [23, 29, 58],
              [178, 15, 218],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
      </div>
    </>
  );
};

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex sm:flex-row md:flex-col mb-[130px] items-center justify-center dark:border-white/[0.2]  md:max-w-2xl lg:max-w-md xl:max-w-xl w-full mx-auto p-4 relative h-[30rem] relative cursor-pointer transition-all ease-in-out"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-[#BE0CEC]" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-[#BE0CEC]" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-[#BE0CEC]" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-[#BE0CEC]" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:hidden transition duration-200 w-full h-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl hidden group-hover/canvas-card:block relative z-10 text-black mt-4 p-10 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default CanvasRevealCard;
