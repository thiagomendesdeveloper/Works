import styled from "styled-components";

export const Form = styled.div`
    line-height: 2.7em;
    width: 100%;
    font-size: 1.2em;
    padding:10px;

    @media screen and (min-width:700px){
        width: 400px;
    }
    input[type=text],[type=email],[type=submit],[type=textarea],textarea{
        border:none;
        background: none;
        border:3px solid #A6A6A6;
        height: 30px;
        border-radius:5px;
        width: 100%;
        color:#fff;

        &::placeholder{
            color:#ffffff70;
        }
        
    }
    


    textarea{
        height: 100px;
    }

    
    input[type=submit]{
        color:white;
        background: #51BBFE;
        border:1px solid #51BBFE;
        height: 40px;
        font-size:1.1em;
        cursor:pointer;

        &:hover{
            background:#3177a2;     
        }
    }

`