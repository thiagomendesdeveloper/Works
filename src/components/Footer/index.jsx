import React from 'react'
import { Footer } from './style'
import Container from '../container'
import { FaLinkedin, FaGithub, FaInstagram, FaGoogle } from 'react-icons/fa'; 
import Back from '../background';

export default function(){
    return(
        <Footer>
            <Container direction="row">

                <div>
                <h2>Redes sociais</h2>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaGoogle /></a>
                </div>

                <div>
                <h2>Contato</h2>
                <p>thiagomendessilva77@gmail.com</p>
                </div>
            </Container>

        </Footer>
    )
}