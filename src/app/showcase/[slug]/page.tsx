import { PROJECT_SHOWCASE_LIST } from "@/content/projectShowcase"

export async function generateStaticParams() {
  return PROJECT_SHOWCASE_LIST.map((project) => ({
    slug: project.slug,
  }))
}

export default async function Showcase({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  return <div>{slug}</div>
}
