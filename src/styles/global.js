import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    // @import url('https://fonts.googleapis.com/css?family=Roboto');
    // @import url('https://fonts.googleapis.com/css2?family=Bona+Nova&display=swap');
    // @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

    body{
        background:red;
        font-size:14px;
        color:#333;
        font-family:sans-serif;
        background:#1B1B1B;
        color:#fff;
    }

    a{
        text-decoration:none;
        color:black;
    }
`