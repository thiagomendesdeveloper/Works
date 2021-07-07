import React from 'react'
import { Section } from './style'

export default function (props){
    return(
        <Section>
            {props.children}
        </Section>
    )
}