import React from 'react'
import { Section } from './style'

export default function section(props){
    return(
        <Section>
            {props.children}
        </Section>
    )
}