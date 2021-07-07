import React from 'react'
import { Container } from './style'

export default function container(props){
    return(
        <Container jcontent={props.jcontent} direction={props.direction}>{props.children }</Container>
    )
}