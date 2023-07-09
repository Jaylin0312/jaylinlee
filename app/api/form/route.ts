const mail = require('@sendgrid/mail')
import { NextApiRequest, NextApiResponse } from 'next'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(req: NextApiRequest, res: NextApiResponse) {

  const { email, subject, message } = req.body

  const emailContent = `
      Email: ${email}\r\n
      Subject: ${subject}\r\n
      Message: ${message}
    `

  const data = {
    to: 'jielinglee01@gmail.com',
    from: `${email}`,
    subject: `${subject}`,
    text: emailContent,
    html: emailContent.replace(/\r\n/g, '<br />'),
  }

  try {
    await mail.send(data)
    res.status(200).json({ status: 'OK' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
}
