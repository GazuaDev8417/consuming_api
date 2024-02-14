import styled from "styled-components"


export const Container = styled.div`
    padding: 10px;
    width: 20vw;
    border: 2px solid;
    border-radius: 10px;
    box-shadow: 2px 2px 4px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;

    h2{
        text-align: center;
        margin-bottom: 20px;
    }

    .product-container{
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 30px;
        flex-wrap: wrap;
    }
    
    img{
        width: 150px;
    }

    figure{
        border: 1px solid;
        box-shadow: 2px 2px 4px;
        border-radius: 5px;
    }

    figcaption{
        padding: 5px;
    }
`
