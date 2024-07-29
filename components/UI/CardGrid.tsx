import { cn } from "@/utils/cn";
import ScrollAnimation from "react-animate-on-scroll";

export function CardGrid({
  cards,
}: {
  cards: {
    title: string;
    description: string;
    icon: any;
  }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {cards.map((card, index) => (
        <Card key={card.title} {...card} index={index} />
      ))}
    </div>
  );
}

const Card = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "border-[#171d3a] flex flex-col lg:border-r  py-10 relative group/feature dark:border-[#171d3a]",
        (index === 0 || index === 4) && "lg:border-l dark:border-[#171d3a]",
        index < 4 && "lg:border-b dark:border-[#171d3a]"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#171d3a] dark:from-[#ba0fe2]  to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#171d3a] dark:from-[#ba0fe2]  to-transparent pointer-events-none" />
      )}
      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce>
        <div className="mb-4 relative z-10 px-10 text-[#ba0fe2] dark:text-[#ba0fe2]">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#171d3a] dark:bg-neutral-700 group-hover/feature:bg-[white] transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#ba0fe2] dark:text-[#ba0fe2]">
            {title}
          </span>
        </div>
        <p className="text-sm text-[white] dark:text-[white] max-w-xs relative z-10 px-10">
          {description}
        </p>
      </ScrollAnimation>
    </div>
  );
};
