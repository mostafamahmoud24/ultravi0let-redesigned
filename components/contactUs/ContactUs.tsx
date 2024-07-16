import React from "react";
import { Lamp } from "../UI/lamp";
import { ContactUsForm } from "@/forms/ContactUsForm";

interface ContactUsProps {}

const ContactUs: React.FC<ContactUsProps> = ({}) => {
  return (
    <div className="pt-[100px]">
      <Lamp
        text="Gain an unfair advantage"
        modalBody={<ContactUsForm />}
      ></Lamp>
    </div>
  );
};
export default ContactUs;
