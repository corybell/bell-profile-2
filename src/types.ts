export type ProjectTileType = {
  title: string
  slug: string
  description: string
  screenshot: string
  shape: string
}

export type ContactFormInput = {
  fullName: string
  email: string
  message: string
}

export type SendEmailResponse = {
  emailResponse: {
    status: number
    id: string
    message: string
  }
}