import React from 'react'
import { Form } from './style'

export default function form(){
    return(
        <Form name="contact" method="POST" data-netlify="true">
            <input require type="text" placeholder="Nome" name="name" /> 
            <input require type="email" placeholder="Email"  name="email" />
            <input require type="text" placeholder="Telefone" name="telefone" />
            <textarea require name="mensagem" placeholder="Mensagem" cols="30" rows="10"></textarea>
            <input type="hidden" name="form-name" value="contact"></input>
            <button type="submit">Enviar</button>
        </Form>
    )
}