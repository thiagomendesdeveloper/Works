import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Blog from "../blog"

export default function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
              description
              draft
              tags
              thumb {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                  }
                }
              }
            }
            internal {
              content
            }
          }
        }
      }
    }
    
      
  `)
  return ( 
    
    <Blog data={data.allMarkdownRemark.edges} />
    
    )
}