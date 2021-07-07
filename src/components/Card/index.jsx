import React from 'react'
import { Card, Div } from './style'
import SmallButom from '../SmallButom'

export default function card(props){
    return(
        <Card>
            <Div>{ props.children }</Div>
            <h3>{props.title}</h3>
            <article>
                <p>{props.desc}</p>
            </article>
            <SmallButom link="/#" text="Saiba Mais"/>
        </Card>
    )
}