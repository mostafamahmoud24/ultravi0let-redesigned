import type { NextApiRequest, NextApiResponse } from "next";
import { ContactUsEmailTemplate } from "@/emailTemplates/ContactUsEmailTemplate";
import { Resend } from "resend";
import { RESEND_API_KEY } from "@/constants";

const resend = new Resend(RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const reqBody = JSON.parse(req.body);
  const { data, error } = await resend.emails.send({
    //from and to parameters should be changed for PROD
    from: "Ultravi0let <delivered@resend.dev>",
    to: ["mostafamahmoud24@gmail.com"],
    subject: "Ultravi0let contact",
    react: ContactUsEmailTemplate({
      firstName: reqBody.firstName,
      lastName: reqBody.lastName,
      email: reqBody.email,
      message: reqBody.message,
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
