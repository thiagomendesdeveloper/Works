import React from 'react'
import { Cards } from './style'

export default function Card(props){
    return(
        <Cards>
            <div>
                <img src={props.thumb} />
                <article>
                    <h3>{props.title}</h3>
                    {/* <hr/> */}
                    <p>{props.desc}</p>
                </article>
            </div>
        </Cards>
    )
}