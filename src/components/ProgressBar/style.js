import styled from "styled-components";
import { Progress } from 'semantic-ui-react'

export const Pgress = styled(Progress)`
    border:none;
    border: 2px solid white;
    height: 20px;
    border-radius:10px;

    div{
        border: 1px solid #7EF29B;
        background:#7EF29B;
        text-align: center;
        height: 16px;
        color:black;
        border-radius:10px 0px 0px 10px;
    }
`

export const List = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin:40px 20px;

    @media screen and (min-width:700px){
        grid-template-columns: 1fr 6fr;
    }

    h4{
        font-size:1em;
    }
`