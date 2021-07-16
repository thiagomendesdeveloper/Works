import styled from "styled-components";

export const Article = styled.div`
    border:1px solid #E41F89;
    margin:20px;
    border-radius:5px;
    line-height: 27px;
    color: #d6d6d6;
    font-size: 1.1em;
    min-width:200px;

    img{
        width:100%;
        border-radius:5px 5px 0px 0px;
    }

    article{
        padding:10px;
        border-radius:5px;
    }

    h3{
        margin:20px;
        text-align:center;
    }
`