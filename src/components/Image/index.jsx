import React from 'react'
import { Image } from './style'

export default function image(props) {
    return(
        <Image>
            {props.children}
        </Image>
    )
}