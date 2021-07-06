import styled from "styled-components";

export const Menu = styled.div`
    // width:100%;
    margin:0;
    padding:5px;
    font-family:arial;
    background:#2d2d2d;
    box-shadow: 0 6px 12px 0 rgb(6 43 86 / 8%);
    
`

export const Ul = styled.ul`
    margin:0;
    display: flex;
    justify-content: flex-end;
    margin-right:20px;

    @media screen and (max-width:700px){
        display:block;
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
`