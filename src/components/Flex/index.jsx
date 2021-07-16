import React from 'react'
import { PostBlog } from "./style"

export default function Flex(props){
    return(
        <PostBlog>
            {props.children}
        </PostBlog>
    )
}