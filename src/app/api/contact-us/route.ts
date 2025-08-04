// app/api/send-email/route.ts
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, contact, companyName, serviceType, date, time, project_brief, contact_method, attachment } = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const message = `
    name: ${name},<br />
    email: ${email}, <br />
    contact: ${contact}, <br />
    company name: ${companyName}, <br />
    service type: ${serviceType}, <br />
    date: ${date}, <br />
    time: ${time}, <br />
    project brief: ${project_brief}, <br />
    contact method: ${contact_method}, <br />
    attachment: ${attachment}, <br />
    `;

    const mailOptions = {
      from: email,
      to: "yash.pantheondigitals@gmail.com",
      subject: `New contact enquiry from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
