import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby-plugin-modal-routing"
import Layout from "../components/layout"


export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1 css={css`
                  margin-bottom: ${rhythm(2)};`}>Here are a list of my Github projects</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
              asModal
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.name}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.year}
                </span>
              </h3>
              <p>{node.frontmatter.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            name
            year
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`