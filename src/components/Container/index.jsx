import React from 'react'
import { Container } from './style'

export default function(props){
    return(
        <Container direction={props.direction}>{props.children }</Container>
    )
}