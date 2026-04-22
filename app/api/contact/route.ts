import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const CLIENT_EMAIL = process.env.CLIENT_EMAIL || 'zac@zcubed.digital'

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Email not configured' }, { status: 500 })
    }

    const resend = new Resend(apiKey)
    const { name, email, phone, classType, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Amanda Telford Fitness Website <noreply@zcubed.digital>',
      to: CLIENT_EMAIL,
      replyTo: email,
      subject: `New class enquiry from ${name}`,
      html: `
        <h2>New Class Enquiry — Amanda Telford Fitness</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Class:</strong> ${classType || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
