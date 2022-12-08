import { Layout } from "lib/Layout"
import { LocaLink } from "./LocaLink"

export const Blog: React.FC<{
  locale?: string
  articles: Array<{
    lang: string
    slug: string
    title: string
    date: string
    categories: string[]
  }>
}> = ({ articles }) => {
  return (
    <Layout>
      <h1>Articles</h1>
      {articles.map(({ lang, slug, title, date, categories }) => (
        <article key={slug}>
          <h3>
            <LocaLink href={`/blog/${slug}`}>{`📖 ${title}`}</LocaLink>
          </h3>
          {`Blog » ${new Date(date).toLocaleString(lang, {
            // @ts-ignore It just works
            dateStyle: "medium",
          })} » ${categories.join(" ")}`}
        </article>
      ))}
    </Layout>
  )
}
