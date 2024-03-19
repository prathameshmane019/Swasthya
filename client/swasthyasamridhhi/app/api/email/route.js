import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'SwasthyaSamridhi',
      host: 'deshmukhaishwarya484@gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'maneprathamesh019@gmail.com',
        pass: process.env.NEXT_PUBLIC_PASSWORD
      }
    });

    const mailOptions = {
      from: 'deshmukhaishwarya484@gmail.com',
      to: 'maneprathamesh019@gmail.com',
      subject: 'Send Email Tutorial',
      html: `
        <h3>Hello</h3>
        <li>Title: ${subject}</li>
        <li>Message: ${message}</li>
      `
    };

    await transporter.sendMail(mailOptions);
    
    return new Response(
      JSON.stringify({ message: "Email Sent Successfully" }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
