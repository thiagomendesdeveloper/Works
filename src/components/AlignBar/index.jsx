import React from 'react'
import { AlignBar } from './style'

export default function alignBar(props){
    return(
        <AlignBar>
            {props.children}
        </AlignBar>
    )
} 