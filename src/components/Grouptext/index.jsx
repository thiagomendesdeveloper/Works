import React from 'react'
import { Grouptext } from './style'

export default function grouptex(props){
    return(
        <Grouptext>
            {props.children}
        </Grouptext>
    )
}