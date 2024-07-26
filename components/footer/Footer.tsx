import React, { ReactElement } from "react";
import logo from "@/public/Ultraviolet-logo.png";
import Image from "next/image";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandX,
  IconMapPinFilled,
  IconPhoneFilled,
  IconBrandLinkedin,
} from "@tabler/icons-react";

interface FooterProps {}

interface socialMediaDataModel {
  link: string;
  name: string;
  icon: ReactElement;
}

const Footer: React.FC<FooterProps> = ({}) => {
  const socialMediaData = [
    {
      link: "www.facebook.com",
      name: "facebook",
      icon: <IconBrandFacebookFilled size={30} />,
    },
    {
      link: "www.instagram.com",
      name: "instagram",
      icon: <IconBrandInstagram size={30} />,
    },
    {
      link: "www.twitter.com",
      name: "twitter",
      icon: <IconBrandX size={30} />,
    },
    {
      link: "www.linkedin.com",
      name: "linkedin",
      icon: <IconBrandLinkedin size={30} />,
    },
  ];
  return (
    <footer className="relative h-[400px] text-slate-400">
      {/* Gradient top border */}
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent h-[2px] blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px " />
      <div className="absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent h-[2px] blur-sm" />
      <div className="absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />
      <div className="block md:flex justify-center md:justify-between pt-[80px] w-[90%] mr-auto ml-auto">
        <div className="w-full text-center md:w-[30%] mt-auto mb-auto">
          <Image
            src={logo}
            alt="logo"
            width={200}
            className="md:mr-0 md:ml-0 mr-auto ml-auto "
          />
          <div className="text-sm md:text-left mt-4 w-[100%] md:w-[80%] md:text-justify text-center mb-[80px] md:mb-0">
            {"We turn ideas into digital dynamite. Let's make waves together."}
          </div>
        </div>
        <div className="w-full md:w-[40%] mt-auto mb-auto">
          <div className="flex">
            <div className="flex mr-auto ml-auto md:mr-0 md:ml-0">
              <IconMapPinFilled className="mr-2" size={20} />{" "}
              <div className="block md:flex">
                <div>126 Baleegh Hamdy St. Sherouq City,</div>
                <div className="text-center md:text-left ml-0 md:ml-2">
                  Cairo, Egypt
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-6 mb-6">
            <div className="flex mr-auto ml-auto md:mr-0 md:ml-0">
              <IconPhoneFilled className="mr-2" size={20} />{" "}
              <div>+201113337710</div>
            </div>
          </div>
          <div className="flex justify-between ml-auto mr-auto md:ml-0 md:mr-o w-[50%] md:w-[300px]">
            {socialMediaData.map((item: socialMediaDataModel) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                className="cursor-none hover:text-cyan-700"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[80px] text-xs pb-[30px] md:mb-[50px] text-center md:text-left w-[90%] mr-auto ml-auto">
        Copyright © 2024 • Ultravi0let
      </div>
    </footer>
  );
};

export default Footer;
