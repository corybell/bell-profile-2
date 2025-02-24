import { ContactFormInput, SendEmailResponse } from "@/types"

export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
export const url = `/api/contact`

export async function sendContactRequest(contactFormInput: ContactFormInput) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactFormInput),
    })

    return (await response.json()) as SendEmailResponse
  } catch (error) {
    console.error('failed to create order', error)
  }
}
