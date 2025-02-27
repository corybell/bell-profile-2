export type Project = {
  name: string
  slug: string
  screenshot: string
  tile: {
    text: string
    shape: string
  }
  detail: {
    description: string
    stack: string[]
    url: string
    summary: string
    assignment: string
    solution: string
    partners: string
    image: string
    imageCaption: string
  }
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
