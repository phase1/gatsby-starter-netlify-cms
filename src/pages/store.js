import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const StorePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <div>
        <h1>Store</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
                {edge.node.html}
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default StorePage
