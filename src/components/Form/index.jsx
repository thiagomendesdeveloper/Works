import React from 'react'
import { Form } from './style'

export default function(){
    return(
        <Form>
            <form name="contact" method="POST" data-netlify="true">
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>   
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <input type="hidden" name="form-name" value="contact"></input>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
            </form>
        </Form>
    )
}