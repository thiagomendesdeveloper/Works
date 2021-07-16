import React from 'react'
import { Cardtwo } from './style'

export default function Card(props){
    return(
        <Cardtwo>
            <div>
                <img src={props.thumb} />
                <article>
                    <h3>{props.title}</h3>
                    {/* <hr/> */}
                    <p>{props.desc}</p>
                </article>
            </div>
        </Cardtwo>
    )
}