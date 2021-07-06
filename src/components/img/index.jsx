import React from 'react'
import { Img } from './style'

export default function(props) {
    return(
        <Img>
            {props.children}
        </Img>
    )
}

