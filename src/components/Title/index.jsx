import React from 'react'
import { Title } from './style'

export default function titulo(props){
    return(
        <Title align={props.align}>{props.title}</Title>
    )    
}