import React from 'react'
import { Pgress, List } from "./style"


export default function progress(props){
    return(
        <List>
            <h4>{props.item}</h4>
            <Pgress percent={props.percent} progress></Pgress>
        </List>
    )
}