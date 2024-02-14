import styled from "styled-components"


export const Container = styled.div`
    padding: 10px;
    width: 20vw;
    border: 2px solid;
    border-radius: 10px;
    box-shadow: 2px 2px 4px;

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
        width: 300px;
    }    
`
