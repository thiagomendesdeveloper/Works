import styled from "styled-components";

export const Form = styled.form`
    line-height: 2.7em;
    width: 100%;
    font-size: 1.2em;
    padding:10px;
    color:#e91e63;

    @media screen and (min-width:700px){
        width: 400px;
    }
    input[type=text],[type=email],[type=textarea],textarea{
        border:none;
        background: none;
        border:3px solid #A6A6A6;
        height: 40px;
        border-radius:8px;
        width: 100%;
        color:#fff;
        padding:5px;
        margin-top:20px;
        background: #1d2227;

        &::placeholder{
            color:#ffffff70;
        }
        
    }

    textarea{
        height: 100px;
    }
    
    button{
        border:none;
        color:white;
        background: #51BBFE;
        border:1px solid #51BBFE;
        height: 40px;
        font-size:1.1em;
        cursor:pointer;
        width: 100%;
        border-radius:8px;

        &:hover{
            background:#3177a2;
        }
    }

`