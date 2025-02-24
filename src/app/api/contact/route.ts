import { ContactFormInput } from '@/types'
import { NextRequest, NextResponse } from 'next/server'
import formData from 'form-data'
import Mailgun from 'mailgun.js'

const sendingKey = process.env.EMAIL_KEY ?? ''
const domain = process.env.EMAIL_DOMAIN ?? ''
const from = process.env.EMAIL_FROM ?? ''
const username = process.env.EMAIL_USER ?? ''
const subject = process.env.EMAIL_SUBJECT ?? ''
const to = process.env.EMAIL_TO ?? ''
const mailgun = new Mailgun(formData)
const mg = mailgun.client({ username, key: sendingKey })

const toHtml = (contactForm: ContactFormInput) => `
<div>
  <h1>${contactForm.fullName}</h1>
  <h2>${contactForm.email}</h2>
  <p>${contactForm.message}</p>
</div>
`

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export const OPTIONS = () => {
  return new NextResponse(JSON.stringify({}), {
    headers,
    status: 200,
  })
}

export const POST = async (request: NextRequest) => {
  try {
    const body = (await request.json()) as ContactFormInput

    if (!body) {
      return new NextResponse(JSON.stringify({ error: 'bad request' }), {
        headers,
        status: 400,
      })
    }

    const emailResponse = await mg.messages.create(domain, {
      from,
      to,
      subject,
      html: toHtml(body),
    })

    return new NextResponse(JSON.stringify({ emailResponse }), {
      headers,
      status: 200,
    })
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), { headers, status: 500 })
  }
}
