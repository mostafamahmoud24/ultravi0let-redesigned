import React from "react";
import { Lamp } from "../UI/lamp";

interface ContactUsProps {}

const ContactUs: React.FC<ContactUsProps> = ({}) => {
  return (
    <div className="pt-[100px]">
      <Lamp text="Gain an unfair advantage" />
    </div>
  );
};
export default ContactUs;
