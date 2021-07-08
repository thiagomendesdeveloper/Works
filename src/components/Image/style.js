import styled from 'styled-components';

export const Image= styled.div`

    img{
        width: 200px;
        height:200px;
    }

    @media screen and (min-width:700px){
        img{
            width: 400px;
            height:auto;
        }
    }
`