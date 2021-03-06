import React from "react"
import Menu from "../components/Menu"
import { Helmet } from "react-helmet"
import BannerMain from "../components/BannerMain";
import Section from "../components/Section"
import Global from "../styles/global"
import Title from "../components/Title"
import Card from "../components/Card"
import { FaRegFileAlt, FaDesktop, FaPager } from 'react-icons/fa';
import Container from "../components/Container"
import ProgressBar from "../components/ProgressBar"
import AlignBar from "../components/AlignBar"
import Responsive from "../images/responsivo.png"
import Grouptext from "../components/Grouptext"
import Image from "../components/Image"
import Form from "../components/Form"
import Footer from "../components/Footer"

export default function Home() {
  return(
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Global />
      <Menu />
      <BannerMain />
      {/* <Post /> */}
      <Section>
        <Title title="Serviços" align='center'></Title>
        <Container direction='row'>
          <Card title="Landing pages" 
          desc="Sites Com uma página, geralmente apresentando algum tipo de conteudo da empresa"><FaRegFileAlt /></Card>
          <Card title="Desenvolvimento Web"
          desc="Sites com uma página, geralmente apresentando algum tipo de conteudo da empresa"><FaDesktop /></Card>
          <Card title="Hotsites"
          desc="Sites com uma página, geralmente apresentando algum tipo de conteudo da empresa"><FaPager /></Card>
        </Container>
      </Section>

      <Section>
        <Container jcontent="column" direction='row'>
          <Grouptext>
            <Title align='left' title="Sites Responsivos"></Title>
            <p>Tenha seu site em mãos totalmente adaptáveis para celular, tablet e desktop</p>
          </Grouptext>
          <Image>
            <img src={Responsive} width="200" height="200" alt="" />
          </Image>
        </Container>
      </Section>

      <Section>
      <Container jcontent="column-reverse" direction='row'>
          <Form />
          <Grouptext>
            <Title align='left' title="Fale seu problema"></Title>
            <p>Entre em contato e tire suas dúvidas, faça orçamentos ou entenda melhor como funciona nossos serviços</p>
          </Grouptext>
        </Container>
      </Section>

      <Section>
        <Title title="Minhas Habilidades" align="center"></Title>
        <AlignBar>
          <ProgressBar percent={80} item="Javascript"/>
          <ProgressBar percent={85} item="PHP"/>
          <ProgressBar percent={96} item="HTML"/>
          <ProgressBar percent={70} item="React"/>
          <ProgressBar percent={95} item="CSS3"/>
          <ProgressBar percent={60} item="Node js"/>
        </AlignBar>
      </Section>

      <Footer />
    </>
  )
}