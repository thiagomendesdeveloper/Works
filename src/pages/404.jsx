import React from 'react'
import Menu from '../components/Menu'
import TItle from '../components/Title'
import Global from '../styles/global'
import Container from '../components/Container'
import Section from '../components/Section'
import Footer from '../components/Footer'
import notFount from '../images/404.png'
import Image from '../components/Image'

export default function teste(){
    return(
        <>
        <Global />
        <Menu />
        <Section>
            <Container direction="row">
                <TItle title="404 - Essa página não existe!"></TItle>
                <Image><img src={notFount} alt="" /></Image>
            </Container>
        </Section>
        <Footer />  
        </>
    )
}