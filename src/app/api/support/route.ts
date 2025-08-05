import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, contact, companyName, issueType, issue_description,projectId, priority_level, attachment } = await req.json();

    const transporter = nodemailer.createTransport({
         host: 'smtp.hostinger.com',
         port: 465,
         auth: {
           user: process.env.EMAIL_USER,
           pass: process.env.EMAIL_PASS,
         },
       });

    const today = new Date(Date.now());
    const formattedDate = today.toISOString().split("T")[0];


    const message = `
    Support:-
    name: ${name}
    email: ${email}
    contact: ${contact}
    company name: ${companyName}
    issue type: ${issueType} 
    project id/name: ${projectId}
    date: ${formattedDate}
    issue description: ${issue_description}
    priority level: ${priority_level}
    attachment: ${attachment}
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "atul@pantheondigitals.com, admin@pantheondigitals.com, ashutosh@pantheondigitals.com, yash.pantheondigitals@gmail.com",
      // to: "yash.pantheondigitals@gmail.com",
      subject: `New support enquiry from ${name}`,
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
