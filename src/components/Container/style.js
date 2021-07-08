import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: ${props => `${props.jcontent}`};
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
    max-width: 1000px;

    @media screen and (min-width:700px){
        flex-direction: ${props => `${props.direction}`};
        justify-content: space-evenly;
        
    }
`