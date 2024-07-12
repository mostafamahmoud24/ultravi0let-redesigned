import React from "react";
import CountUp from "react-countup";

interface CounterCardProps {
  label: string;
  fromNumber: number;
  toNumber: number;
  numberText?: string;
  icon: any;
}

const CounterCard: React.FC<CounterCardProps> = ({
  label,
  fromNumber,
  toNumber,
  numberText = "",
  icon,
}) => {
  return (
    <div className="text-center mb-[150px] lg:mb-0">
      <div className="m-auto w-fit mb-[50px]">{icon}</div>
      <div className="flex items-center justify-center text-[#ba0fe2] text-3xl font-semibold mb-[20px]">
        <CountUp
          start={fromNumber}
          end={toNumber}
          duration={4}
          className="text-[40px]"
        />
        {numberText && <div className="ml-[10px]">{numberText}</div>}
      </div>
      <div>{label}</div>
    </div>
  );
};
export default CounterCard;
