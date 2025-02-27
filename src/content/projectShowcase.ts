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
      assignment: 'Ssummm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      challenges: 'Challll ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      solution: 'Sol ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      partners: 'Partners ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: '',
      imageCaption: ''
    },
  },
  {
    name: 'Costco',
    slug: 'costco',
    screenshot: 'costco/Costco.png',
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
      assignment: 'I was brought on to help with the modernization efforts for Costco’s consumer and business delivery websites for both the US and Canada.  The primary targets were the home, search, and category pages which included shared components such as the global header and footer.  Business stakeholders were seeking a no-code solution to manage the content, layout, and configuration of the entire UI of the modernized pages.',
      challenges: 'Many;  complexity being the first.  These components were to be shared across four applications and three locales, comprising six variations each component must handle.  Adding to complexity is the size of Costco.  We had dozens of developers spread across several teams all contributing to the same codebase.  The polyrepo project structure compounded complexity and added unnecessary steps to deploying code.  Performance is of course a primary concern for Costco, so we had to be meticulous in following React best practices.',
      solution: 'The high-level architecture was for each modernized page to be a NextJS app which uses a common component library built on MUI and atomic design patterns.  Costco’s existing CDN (Akamai) would glue together all modernized and legacy pages to deliver a cohesive user experience.  We used Contentstack to manage all content, configuration, and language translations for the three locales (en-us, en-ca, fr-ca).  React Server Components were used to fetch and render data server-side which garnered performance and SEO wins.  Storybook and msw were used to demonstrate and test components in a stable and isolated environment.',
      partners: 'Costco has the resources to build teams with all the roles they need to thrive.  It was a pleasure to collaborate with QA, DevOps, UI/UX designers, a11y testers, analytics specialists, product owners, and fellow developers.',
      image: 'costco/costco-footer.png',
      imageCaption: 'Global footer I implemented. The entire component is driven by Contentstack including the configuration, layout, and language translations.'
    },
  },
  {
    name: 'CaringBridge',
    slug: 'caringbridge',
    screenshot: 'caringbridge/Caringbridge.png',
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
      assignment: 'My initial assignment at CaringBridge started as senior frontend engineer working to build the next generation of their health platform, but my role evolved to include architecture as I noticed significant gaps in the proposed frontend stack.',
      challenges: 'Low budget and limited resources were the main challenges, but some of this was overcome by the generous deals we received from vendors.',
      solution: 'A team of just myself and one other frontend developer built the foundation of the new frontend platform which consisted of a NextJS application that used Apollo Client to fetch and cache data from a GraphQL API.  We used AWS Cognito for IDP and I implemented the frontend UI and logic to authenticate and manage user accounts.  I suggested we host the frontend on Vercel since CaringBridge had limited DevOps resources.  Management was receptive to my pitch, marking the start of a common theme, and Vercel was an overwhelming success.  We were tasked with integrating the existing Wordpress CMS, but I suggested we look at a headless CMS.  I evaluated several options by creating POCs, eventually landing on Contentful for its ease of use and rich feature set.  We learned Contentful wanted CaringBridge to be the pilot in their new pro-bono initiative to help nonprofits make an impact.  This led to CaringBridge receiving free software, hosting, and training from Contentful staff on content modelling, platform integration, content migration, content release strategy, and more.  Additionally, CaringBridge was looking to move away from its homegrown asset hosting solution which was buggy, expensive, and primitive.  Again, I evaluated options and Cloudinary was the winner after we negotiated a large nonprofit discount.  My final act was training staff on this magical stack which I had championed from conception to production.',
      partners: 'CaringBridge does a good job of adhering to Agile principles even with their small size and limited resources, so internally I collaborated daily with QA, Product Owners, UI/UX designers, fellow developers, and DevOps.  I also had the opportunity to collaborate with several vendors including Contentful, Cloudinary, and Vercel.',
      image: 'caringbridge/cb-article.png',
      imageCaption: 'An example of a category landing page built from migrated content and rendered in the new platform.'
    },
  },
]
