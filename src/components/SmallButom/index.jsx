import React from 'react'
import { Link } from 'gatsby'
import { SmallButom } from './style'

export default function smallButom(props){
    return(
        <Link to={props.link}><SmallButom>{props.text}</SmallButom></Link>
    )
}