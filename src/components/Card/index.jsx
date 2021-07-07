import React from 'react'
import { Card, Div } from './style'
import Teste from '../Buttom'

export default function card(props){
    return(
        <Card>
            <Div>{ props.children }</Div>
            <h3>{props.title}</h3>
            <article>
                <p>{props.desc}</p>
            </article>
            <Teste link="/#" text="Saiba Mais"/>
        </Card>
    )
}