import styled from "styled-components";

export const Menu = styled.div`
    // width:100%;
    margin:0;
    padding:5px;
    font-family:arial;
    background:#2d2d2d;
    box-shadow: 0 6px 12px 0 rgb(6 43 86 / 8%);

    svg{
        font-size: 3em;
        display: none;
    }

    span{
        display:none;
    }
    @media screen and (max-width:700px){
        svg{
            display: block;
        }

        span{
            display: block;
            font-size: 3em;
            margin:10px 15px;
        }
    }    


    
`

export const Ul = styled.ul`
    margin:0;
    display: flex;
    justify-content: flex-end;
    margin-right:20px;

    @media screen and (max-width:700px){
        flex-direction: column;
        display: block;
        z-index: 99;
        position:absolute;
        top:0px;
        left:${props => `${props.display}`};
        width:100%;
        background: #2d2d2d;
        transition: 300ms ease-in-out;
    }
`

export const Li = styled.li`
    margin:0;
    list-style:none;
    display:inline-block;
    font-size:1.3rem;
    margin:20px 10px;
    padding:5px;
    color:#fff;

    &:hover{
        background:#cccccc;
    }

    @media screen and (max-width:700px){
        display:block;
    }
`
