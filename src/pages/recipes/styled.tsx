import styled from "styled-components"



export const Container = styled.div`
    .recipes-container{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-container{
        position: absolute;
        top: 13%;
        right: 1%;
    }
    
    .close{
        color: whitesmoke;
        right: 2%;
        margin: 20px;
        position: absolute;
        cursor: pointer;
        font-weight: bold;
        font-size: 1.2rem;
    }
    
    footer{
        font-family: 'Cormorant Garamond', serif;
        font-size: 13pt;
        font-style: italic;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10vh;
    }
`