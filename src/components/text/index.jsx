import React from 'react'
import { Text } from './style'

export default function(props){
    return(
        <Text>
            {props.children}
        </Text>
    )
}