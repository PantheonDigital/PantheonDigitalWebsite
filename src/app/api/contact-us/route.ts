import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, contact, companyName, serviceType, date, time, project_brief, contact_method, attachment } = await req.json();


    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const message = `
    Contact:-
    name: ${name}
    email: ${email} 
    contact: ${contact}
    company name: ${companyName}
    service type: ${serviceType}
    date: ${date}
    time: ${time}
    project brief: ${project_brief}
    contact method: ${contact_method}
    attachment: ${attachment}
    `;

    //  
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "atul@pantheondigitals.com, admin@pantheondigitals.com, ashutosh@pantheondigitals.com, yash.pantheondigitals@gmail.com",
      // to: "yash.pantheondigitals@gmail.com",
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
