import styled from "styled-components"



export const Container = styled.div`
    padding: 10px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
    width: 70vw;
    
    h1{
        text-align: center;
        margin: 40px;
    }

    .product-container{
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 30px;
        flex-wrap: wrap;
    }

    img{
        width: 100%;
        object-fit: cover;
    } 

    figure{
        border: 1px solid;
        box-shadow: 2px 2px 4px;
        border-radius: 5px;
    }

    figcaption{
        padding: 5px;
        text-align: center;
    }

    figcaption .title{
        font-size: 1.5rem;
    }

    figcaption .caption-content{
        text-align: left;
    }
`