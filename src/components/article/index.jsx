import React from 'react'
import { Article } from './style'

export default function Card(props){
    return(
        <Article>
            <div>
                <img src={props.thumb} />
                <article>
                    <h3>{props.title}</h3>
                    {/* <hr/> */}
                    <p>{props.desc}</p>
                </article>
            </div>
        </Article>
    )
}