import React from "react"
import Menu from "../components/Menu"
import { Helmet } from "react-helmet"
import Destaque from "../components/destaque"
import Back from "../components/background"
import Global from "../styles/global"
import Title from "../components/Title"
import Card from "../components/Card"
import { FaRegFileAlt, FaDesktop, FaPager, FaBloggerB } from 'react-icons/fa';
import Container from "../components/Container"
import ProgressBar from "../components/ProgressBar"
import AlignBar from "../components/AlignBar"
import Responsive from "../images/responsivo.png"
import Text from "../components/text"
import Img from "../components/img"
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
      <Menu>
      </Menu>
      <Destaque />
      {/* <Post /> */}
      <Back>
        <Title title="Serviços" align='center'></Title>
        <Container direction='row'>
          <Card title="Landing pages" 
          desc="Sites com uma página, geralmente apresentando algum tipo de conteudo da empresa"><FaRegFileAlt /></Card>
          <Card title="Desenvolvimento Web"
          desc="Sites com uma página, geralmente apresentando algum tipo de conteudo da empresa"><FaDesktop /></Card>
          <Card title="Hotsites"
          desc="Sites com uma página, geralmente apresentando algum tipo de conteudo da empresa"><FaPager /></Card>
          {/* <Card title="Blogs"
          desc="Sites com uma página, geralmente apresentando algum tipo de conteudo da empresa"><FaBloggerB /></Card> */}
        </Container>
      </Back>

      <Back>
        <Container direction='row'>
          <Text>
            <Title align='left' title="Sites Responsivos"></Title>
            <p>Tenha seu site em mãos totalmente adaptáveis para celular, tablet e desktop</p>
          </Text>
          <Img>
            <img src={Responsive} alt="" />
          </Img>
        </Container>
      </Back>

      <Back>
      <Container direction='row'>
          <Form />
          <Text>
            <Title align='left' title="Fale seu problema"></Title>
            <p>Entre em contato e tire suas dúvidas, faça orçamentos ou entenda melhor como funciona nossos serviços</p>
          </Text>
        </Container>
      </Back>

      <Back>
        <Title title="Minhas Habilidades" align="center"></Title>
        <AlignBar>
          <ProgressBar percent={80} item="Javascript"/>
          <ProgressBar percent={85} item="PHP"/>
          <ProgressBar percent={96} item="HTML"/>
          <ProgressBar percent={70} item="React"/>
          <ProgressBar percent={95} item="CSS3"/>
          <ProgressBar percent={60} item="Node js"/>
        </AlignBar>
      </Back>

      <Footer />
    </>
  )
}