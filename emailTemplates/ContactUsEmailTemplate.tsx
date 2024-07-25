import * as React from "react";

interface ContactUsEmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

//This Template should be enhanced visually for PROD
export const ContactUsEmailTemplate: React.FC<
  Readonly<ContactUsEmailTemplateProps>
> = ({ firstName, lastName, email, message }) => (
  <div>
    <h3>
      Name: {firstName} {lastName}
    </h3>
    <h3>email: {email}</h3>
    <h5>message: {message}</h5>
  </div>
);
