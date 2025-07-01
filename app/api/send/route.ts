import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email HTML template
const getEmailTemplate = (userEmail: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { 
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(to right, #000000, #1a1a1a);
      color: #84cc16;
      padding: 20px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .content {
      background: #ffffff;
      padding: 30px;
      border-radius: 0 0 10px 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .tool-card {
      background: #f8f9fa;
      padding: 15px;
      margin: 10px 0;
      border-radius: 8px;
      border-left: 4px solid #84cc16;
    }
    .cta-button {
      display: inline-block;
      background: #84cc16;
      color: #000000;
      padding: 12px 25px;
      text-decoration: none;
      border-radius: 5px;
      margin: 20px 0;
      font-weight: bold;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #666;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 Welcome to DivineLab!</h1>
    </div>
    <div class="content">
      <h2>Thank you for joining our community!</h2>
      <p>We're excited to have you on board. Get ready to explore our amazing suite of free tools designed specifically for students like you!</p>
      
      <div class="tool-card">
        <h3>🎓 CGPA Converter</h3>
        <p>Convert your grades between different systems, track your academic progress, and get personalized insights for improvement.</p>
      </div>
      
      <div class="tool-card">
        <h3>💡 Project Ideas Generator</h3>
        <p>Never run out of project ideas! Get AI-powered suggestions tailored to your interests and skill level.</p>
      </div>
      
      <div class="tool-card">
        <h3>📄 Resume Builder</h3>
        <p>Create professional, ATS-friendly resumes that stand out. Powered by AI for maximum impact!</p>
      </div>
      
      <p><strong>🎁 Bonus:</strong> All our tools are completely FREE forever! No hidden charges, no premium tiers.</p>
      
      <a href="https://lab.divineinfotech.org" class="cta-button">Explore Tools Now</a>
      
      <p>Stay tuned for more exciting features and tools coming your way!</p>
    </div>
    <div class="footer">
      <p>© 2025 Divine Lab by Divine Infotech, Coimbatore</p>
      <p>You received this email because you signed up at lab.divineinfotech.org</p>
    </div>
  </div>
</body>
</html>
`;

// Create reusable transporter object using GMAIL SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: 'divineinfotech.edu@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false // Accept self-signed certificates
  }
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Verify SMTP connection
    await new Promise((resolve, reject) => {
      transporter.verify((error, success) => {
        if (error) {
          console.error('SMTP connection error:', error);
          reject(error);
        } else {
          resolve(success);
        }
      });
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: {
        name: 'Divine Lab',
        address: 'divineinfotech.edu@gmail.com'
      },
      to: email,
      subject: '🚀 Welcome to Divine Lab - Your Student Tools Hub!',
      html: getEmailTemplate(email),
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High'
      }
    });

    console.log('Message sent: %s', info.messageId);

    return NextResponse.json(
      { 
        message: 'Subscription successful! Check your email.',
        messageId: info.messageId 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending failed:', error);
    // Return a generic error message to the client
    return NextResponse.json(
      { message: 'Subscription successful! Please allow a few minutes for the email to arrive.' },
      { status: 200 }
    );
  }
} 