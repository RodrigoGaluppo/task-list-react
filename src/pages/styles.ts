import styled from "styled-components"

export const Main = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    max-width:50%;
    min-width:350px;
    width:100%;
    margin: 0 auto;
    padding: 40px 4%;
    background-color:white;
    border-radius:20px;
`
export const Title = styled.h1`
    margin-top:10px;
    color:black;
    margin: 0 auto;
`
export const Input = styled.div`
    margin-top:10px;
    width: 75%;
    text-align: left;
    display:flex;
    input{
        text-align:left;
        padding:5px 10px;
        font-size:23px;
        width:75%;
    }
    button{
        margin-left:5%;
        font-size:16px;
        width:25%;
        background-color: #ddd;
        border:0;
        &:hover{
            background-color: #ccc;
        }
    }
`
export const List = styled.div`

    max-width: 100%;
    padding: 20px 2%;
    ul{
        text-decoration:none;
        list-style-type:none;

        li{ 
            &:hover{
                button{
                    display:inline-block;
                }
            }
            margin-top:10px;
            position:relative;
            left:-10px;
            font-size:15px;
            
            p{
                margin-left:5px;
                display:inline-block;
                font-size:23px;
            }
            button{
                border:0;
                display:none;

            }
        }
        
    }

`