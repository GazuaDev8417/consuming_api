import styled from "styled-components"


export const Container = styled.div`
    background-color: #000035;
    color: black;
    padding: 10px;
    width: 40vw;
    border: 2px solid;
    border-radius: 10px;
    box-shadow: 2px 2px 4px gray;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;

    h2{
        text-align: center;
        margin-bottom: 20px;
        color: whitesmoke;
    }

    .product-container{
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 30px;
        flex-wrap: wrap;
    }
    
    img{
        width: 300px;
    }

    figure{
        border: 1px solid;
        box-shadow: 2px 2px 4px gray;
        border-radius: 5px;
        background-color: whitesmoke;
    }

    figcaption{
        padding: 5px;
    }
`
