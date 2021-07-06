import styled from "styled-components";

export const Destaque = styled.div`

    width:100%;
    height:70vh;
    background:#1B1B1B;
    text-align:center;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap:wrap;
    
    hgroup{
        width: 489px;
        line-height: 30px;
        text-align:left;
        font-size:1.2em;
    }

    hr{
        border:1px solid #D918A5;
        margin-top:20px;
        width:360px;
    }

    h1{
        font-weight: 500;
        // font-family: 'Roboto Slab', serif;    
        font-family: 'Rubik', sans-serif;
    }

    h2{
        margin-top:2rem;
        font-weight: 100;
        font-size: 1.2em;
        margin-bottom:20px;
    }

    img{
        border-radius:50%;
        width:200px;
        border: 3px solid #D918A5;
    }

    @media screen and (max-width:700px){
        h1, h2{
            text-align: center;
        }

        h1{
            font-size: 1.6em;
            margin-top: 10px;
        }

        hr{
            width:80%;
            margin:auto;
        }

        div{
            padding:10px;
        }

        a{
            display:flex;
            justify-content: center;
        }

        img{
            margin-top:3rem;
        }

    }
`