import React from 'react'
import Global from '../styles/global'
import { Helmet } from 'react-helmet'
import Menu from '../components/Menu/'
import Title from '../components/Title'
import Container from '../components/Container/'
import { Post } from '../components/Post'
import Flex  from '../components/Flex'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function PageBlog(){
    return(
        <div>
            <Global />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blog</title>
            </Helmet>
            <Menu />
            <Section>
                <Container direction="row">
                    <Title align="center" title="Veja nossas postagens do blog" />
                </Container>
            </Section>
            <Section>
                <Flex>
                    <Post />
                </Flex>
            </Section>
            <Footer />
            
        </div>
    )
}