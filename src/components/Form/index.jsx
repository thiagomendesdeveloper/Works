import React from 'react'
import { Form } from './style'

export default function(){
    return(
        <Form>
            <form name="contact" method="POST" data-netlify="true">
                <h3>Nome completo</h3>
                <input name="nome" type="text" placeholder="Nome completo"/>
                <h3>Email</h3>
                <input name="email" type="email" placeholder="Email"/>
                {/* <h3>Telefone/whatsapp</h3>
                <input name="telefone" type="text" placeholder="Telefone/whatsapp" /><br/> */}
                <h3>Mensagem</h3>
                <textarea name="message" cols="30" rows="10" placeholder="Digite Sua Mensagem"></textarea>
                <input type="submit" value="Enviar" />
            </form>
        </Form>
    )
}