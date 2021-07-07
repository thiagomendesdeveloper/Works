import React from 'react'
import Card from '../Card'
import { Container } from './style';

export default function postblog({data}) {
    // const title = data[0].node.frontmatter.title;
    // const desc = data[0].node.frontmatter.description;
    // const img = data[0].node.frontmatter.thumb.childImageSharp.fluid.srcWebp;

    const event = data;
    const posts = event.map(( {node} ) => {
        return(
        <Card key={node.id} title={node.frontmatter.title} 
            desc={node.frontmatter.description} thumb={node.frontmatter.thumb.childImageSharp.fluid.srcWebp}
        />
        )
    });

    return(
        // <Card title={title} desc={desc} img={img} />
        <Container>{posts}{console.log(posts)}</Container>
    )
}