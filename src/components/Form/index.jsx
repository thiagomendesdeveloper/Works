import React from 'react'
import { Form } from './style'

export default function(){
    return(
        
            <Form name="contact" method="POST" data-netlify="true">
                    {/* <h2>Nome</h2> */}
                    <input require type="text" placeholder="Nome" name="name" /> 
                    {/* <h2>Email</h2> */}
                    <input require type="email" placeholder="Email"  name="email" />
                    {/* <h2>Telefone</h2> */}
                    <input require type="text" placeholder="Telefone" name="telefone" />
                    {/* <h2>Mensagem</h2> */}
                    <textarea require name="mensagem" placeholder="Mensagem" cols="30" rows="10"></textarea>
                    <input type="hidden" name="form-name" value="contact"></input>
                    <button type="submit">Enviar</button>
            </Form>
        
    )
}