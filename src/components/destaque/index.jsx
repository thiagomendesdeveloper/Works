import { useStaticQuery, graphql } from "gatsby"
import React from 'react'
import { Destaque } from './style'
import Buttom from "../Buttom"
import Container from "../Container"

export default function Header() {
    const img = useStaticQuery(graphql`
    query images {
        file(relativePath: {eq: "foto.jpg"}) {
          id
          childImageSharp {
            fluid(maxWidth: 400) {
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
    `)
    return(
      <Container>
        <Destaque>
            <img src={img.file.childImageSharp.fluid.srcWebp} alt="" />
            <hgroup>
                <h1>Desenvolvedor Web</h1>
                <hr/>
                <h2>Seu site profissional com as melhores ferramentas e tecnologias do mercado </h2>
                <Buttom text="Saiba Mais" link="/#"/>
            </hgroup>
        </Destaque>
        </Container>
    )
  }