import React from 'react'
import { Background } from './style'

export default function back(props){
    return(
        <Background>
            {props.children}
        </Background>
    )
}