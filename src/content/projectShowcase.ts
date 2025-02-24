import { Project } from '@/types'

export const PROJECT_LIST: Project[] = [
  {
    name: 'Hello Mello',
    slug: 'hello-mello',
    screenshot: 'HelloMello.png',
    tile: {
      text: 'A way for users to order product from a small business while navigating the unique restrictions for cannabis sales in Minnesota.',
      shape: 'rectangle-1.svg',
    },
    detail: {
      description: 'Minnesota Cannabis Retailer',
      stack: [
        'NextJS',
        'TypeScript',
        'Tailwind',
        'Contentful',
        'Vercel',
        'Redis',
        'Upstash',
        'Mailgun',
      ],
      url: 'mellomn.com',
      summary: '',
      challenges: '',
      solution: '',
      partners: '',
      image: '',
    },
  },
  {
    name: 'Costco',
    slug: 'costco',
    screenshot: 'Costco.png',
    tile: {
      text: 'Adding to the heart of the website with new functionality in both the main navigation and footer for a Fortune 500 company.',
      shape: 'rectangle-2.svg',
    },
    detail: {
      description: 'Wholesale Retailer',
      stack: [
        'NextJS',
        'TypeScript',
        'MUI',
        'GraphQL',
        'Storybook',
        'Contentstack',
        'Adobe Target',
        'Azure',
      ],
      url: 'costco.com',
      summary: '',
      challenges: '',
      solution: '',
      partners: '',
      image: '',
    },
  },
  {
    name: 'CaringBridge',
    slug: 'caringbridge',
    screenshot: 'Caringbridge.png',
    tile: {
      text: 'Advancing the tech stack of a nonprofit to provide users the care and help they need.',
      shape: 'rectangle-3.svg',
    },
    detail: {
      description: 'Non-profit Health Platform',
      stack: [
        'NextJS',
        'TypeScript',
        'Apollo',
        'GraphQL',
        'Storybook',
        'Contentful',
        'Cloudinary',
        'Vercel',
      ],
      url: 'caringbridge.org',
      summary: '',
      challenges: '',
      solution: '',
      partners: '',
      image: '',
    },
  },
]
