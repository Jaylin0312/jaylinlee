const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(req: any, res: any) {

  const body = await req.text() // Parse the request body as text

  // Assuming the request body is in JSON format
  const { email, subject, message } = JSON.parse(body)

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
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
}
