import React from 'react'
import { Form } from './style'

export default function(){
    return(
        
            <Form name="contact" method="POST" data-netlify="true">
                    <h2>Nome</h2>
                    <input type="text" name="name" /> 
                    <h2>Email</h2>
                    <input type="email" name="email" />
                    <h2>Telefone</h2>
                    <input type="text" name="telefone" />
                    <h2>Mensagem</h2>
                    <textarea name="mensagem" cols="30" rows="10"></textarea>
                    <input type="hidden" name="form-name" value="contact"></input>
                    <button type="submit">Enviar</button>
            </Form>
        
    )
}