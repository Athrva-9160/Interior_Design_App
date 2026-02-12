import nodemailer from "nodemailer";

export const sendConsultEmail = async (email, date) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Consultation Booked",
    html: `<h2>Your consultation is booked!</h2>
           <p>Date: <b>${date}</b></p>`,
  });
};
