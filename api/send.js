import nodemailer from 'nodemailer';
import supabase from '../lib/supabaseClient.js';

/**
 * @swagger
 * /api/send:
 *   post:
 *     summary: Send a contact form email
 *     description: Logs the contact to Supabase and sends two emails - one to the admin and one confirmation to the user.
 *     tags:
 *       - Contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, phoneNumber, message]
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john@example.com
 *               phoneNumber:
 *                 type: string
 *                 example: "9876543210"
 *               message:
 *                 type: string
 *                 example: I'd like to discuss a project.
 *     responses:
 *       200:
 *         description: Emails sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Failed to send email
 */

export default async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'https://www.axiino.com'); // Secure for production
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { name, email, phoneNumber, message } = req.body;

  if (!name || !email || !phoneNumber || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Log to Supabase if configured
  if (supabase) {
    try {
      await supabase.from('contacts').insert([
        { name, email, phone: phoneNumber, message }
      ]);
    } catch (dbError) {
      console.error('Failed to log contact to Supabase:', dbError.message);
      // We continue with email sending even if DB logging fails
    }
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s/g, '') : '',
    },
    tls: { rejectUnauthorized: false },
  });

  const userMailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Thanks for contacting us!',
    text: `Hi ${name},

Thank you for reaching out to us. We've received your message and appreciate your interest.

Here’s what we received:
-------------------------------------
Name   : ${name}
Email  : ${email}
Phone  : ${phoneNumber}
Message: ${message}
-------------------------------------

Our team will review your message and respond shortly. If it’s urgent, feel free to reply directly.

Best regards,  
The AXIINO Team`,
  };

  const adminMailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: 'New Contact Form Submission',
    text: `You have received a new message from the website contact form:

Name   : ${name}
Email  : ${email}
Phone  : ${phoneNumber}
Message:
---------
${message}
---------

Please follow up as needed.`,
  };

  try {
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);
    return res.status(200).json({ success: true, message: 'Emails sent successfully.' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email.', details: error.message });
  }
};
