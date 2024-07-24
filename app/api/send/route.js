import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/Email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body) {
      return NextResponse.json("No data found for sending email.", {
        status: 500,
      });
    }
    const { name, email, message } = body;

    console.log(name, email, message);

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["sahityakumarchoubey@gmail.com"],
      subject: "IEEE Contact",
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
