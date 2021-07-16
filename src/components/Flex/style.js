import styled from "styled-components";

export const PostBlog = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    
    

    @media screen and (min-width:700px){
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
    }
`