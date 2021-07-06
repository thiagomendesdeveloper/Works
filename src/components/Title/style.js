import styled from "styled-components";

export const Title = styled.h2`
    text-align: center;
    font-size: 2.9em;

    @media screen and (min-width:700px){
        text-align: ${props => `${props.align}`};
    }
`