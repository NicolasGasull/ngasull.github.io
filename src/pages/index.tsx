import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"

const IndexPage: React.FC = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Posts</h1>

      {data.allMdx.edges.map(({ node: { frontmatter } }) => (
        <article key={frontmatter.path}>
          <h3>{frontmatter.title}</h3>
          <div>
            Blog » {frontmatter.date} »{" "}
            {frontmatter.categories.split(" ").join(" • ")}
          </div>
          <Link to={frontmatter.path}>📖 Read the article</Link>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query AllPosts {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
            categories
          }
        }
      }
    }
  }
`

export default IndexPage
