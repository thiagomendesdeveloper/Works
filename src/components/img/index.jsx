import React from 'react'
import { Img } from './style'

export default function image(props) {
    return(
        <Img>
            {props.children}
        </Img>
    )
}