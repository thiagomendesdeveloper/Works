import React from 'react'
import { Text } from './style'

export default function text(props){
    return(
        <Text>
            {props.children}
        </Text>
    )
}