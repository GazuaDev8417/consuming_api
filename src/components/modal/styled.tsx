import styled from "styled-components"


export const Container = styled.div`
    width: 15vw;
    height: 30vh;
    box-shadow: 2px 2px 4px;
    margin: 10px;
    border: 1px solid;
    border-radius: 10px;

    .user{
        text-align: center;
        margin: 30px 0 20px 0;
        font-weight: bold;
        font-size: 1.2rem;
    }

    .item{
        padding: 10px 0;
        margin: 0 5px;
        /* border-bottom: 1px solid; */
        text-align: center;
        transition: .5s;
    }

    .item:hover{
        background-color: lightgray;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 0 5px;
    }
`