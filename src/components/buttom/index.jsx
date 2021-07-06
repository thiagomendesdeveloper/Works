import React from 'react'
import { Link } from 'gatsby'
import { Buttom } from './style'

export default function buttom(props){
    return(
        <Link to={props.link}><Buttom>{props.text}</Buttom></Link>
    )
}