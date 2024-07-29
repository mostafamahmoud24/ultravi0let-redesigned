import { FormEvent, useState } from "react";
import { Lamp } from "../UI/lamp";
import { ContactUsForm } from "@/forms/ContactUsForm";
import Modal from "../UI/Modal";

interface ContactUsProps {}

const ContactUs: React.FC<ContactUsProps> = ({}) => {
  const [firstName, setFirstname] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const resetFormData = () => {
    setFirstname("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const handleOpenModal = (opened: boolean) => {
    opened
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    setIsOpen(opened);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("/api/send/email", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
        }),
      });

      if (!response.ok) {
        alert("Failed to submit the data. Please try again.");
      } else {
        setIsOpen(false);
        handleOpenModal(false);
        resetFormData();
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dark:bg-black">
      <Lamp text="Gain an unfair advantage" handleOpenModal={handleOpenModal} />
      <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
        <ContactUsForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          message={message}
          setFirstName={setFirstname}
          setLastName={setLastName}
          setEmail={setEmail}
          setMessage={setMessage}
          submitHandler={handleFormSubmit}
          isLoading={isLoading}
        />
      </Modal>
    </div>
  );
};
export default ContactUs;
