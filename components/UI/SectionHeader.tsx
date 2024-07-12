import React from "react";

interface HeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div className="pt-[100px] text-white">
      <div className="text-center text-[#ba0fe2] text-[32px] md:text-5xl mb-[30px] transition-all ease-in-out">
        {title}
      </div>
      {description && (
        <div className="text-center text-white text-xs mb-[30px] md:mb-[100px] w-[90%] md:w-[500px] m-auto transition-all ease-in-out">
          {description}
        </div>
      )}
    </div>
  );
};
export default SectionHeader;
