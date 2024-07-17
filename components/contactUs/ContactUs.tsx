import React, { useState } from "react";
import { Lamp } from "../UI/lamp";
import { ContactUsForm } from "@/forms/ContactUsForm";
import Modal from "../UI/Modal";

interface ContactUsProps {}

const ContactUs: React.FC<ContactUsProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = (opened: boolean) => {
    opened ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto" 
    setIsOpen(opened);
  };
  return (
    <div className="pt-[100px]">
      <Lamp text="Gain an unfair advantage" handleOpenModal={handleOpenModal} />
      <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
        <ContactUsForm />
      </Modal>
    </div>
  );
};
export default ContactUs;
