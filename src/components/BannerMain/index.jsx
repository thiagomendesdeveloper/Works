import React from 'react'
// import { useStaticQuery, graphql } from "gatsby"
import { BannerMain } from './style'
import SmallButom from "../SmallButom"
import Container from "../Container"
import thumbfoto from "../../images/foto.jpeg"

export default function bannerMain() {
    // const thumb = useStaticQuery(graphql`
    // query images {
    //     file(relativePath: {eq: "foto.jpg"}) {
    //       id
    //       childImageSharp {
    //         fluid(maxWidth: 400) {
    //           base64
    //           tracedSVG
    //           srcWebp
    //           srcSetWebp
    //           originalImg
    //           originalName
    //         }
    //       }
    //     }
    //   }
    // `)
    return(
      <Container>
        <BannerMain>
            {/* <img src={thumb.file.childImageSharp.fluid.srcWebp} alt="" /> */}
            <img src={thumbfoto} width="200" height="200" alt="" />
            <hgroup>
                <h1>Desenvolvedor Web</h1>
                <hr/>
                <h2>Seu site profissional com as melhores ferramentas e tecnologias do mercado </h2>
                <SmallButom text="Saiba Mais" link="/#"/>
            </hgroup>
        </BannerMain>
      </Container>
    )
}