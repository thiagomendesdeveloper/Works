import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Cardtwo from "../Cardtwo"

export function Post(){
    const posts = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            description
            date
            title
            thumb {
              childImageSharp {
                fluid {
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
        }
      }
    }
    
        
        
    `)
    return(
        <>
            {posts.allMarkdownRemark.nodes.map( post => (
                <Cardtwo key={post.id} title={post.frontmatter.title} thumb={post.frontmatter.thumb.childImageSharp.fluid.originalImg}
                 desc={post.frontmatter.description} />
            ) )}
        
        </>
    )
}