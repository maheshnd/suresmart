import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { Email, Subject, Name, Phone, Message } = await request.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "maheshddeshmukh068@gmail.com",
        pass: "yeriztzkclrwjwhq",
      },
    });

    const mailOption = {
      from: "deshmukh.mahesh.n@gmail.com",
      to: "deshmukh.mahesh.n@gmail.com",
      subject: "Counseling Session Enquiry",
      html: `
        <h3>Hello Mahesh</h3>
        <li> Name: ${Name}</li>
        <li> Email: ${Email}</li>
        <li> Phone: ${Phone}</li>
        <li> Subject: ${Subject}</li>
        <li> Message: ${Message}</li> 
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
