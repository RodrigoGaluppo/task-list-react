import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: sans-serif;
}
html,body{
    width: 100%;
    height: 100%;
    background-color: #176ca5;
    -webkit-font-smoothing:antialiased;
}
button{
    cursor: pointer;
}
button,input{

}
#root{
    max-width: 900px;
}



`