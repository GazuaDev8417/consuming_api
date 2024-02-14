import styled from "styled-components"


export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    height: 13vh;
    box-shadow: 2px 2px 4px;
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-style: normal;

    .icon{
        font-size: 2rem;
        cursor: pointer;
    }

    .user-container{
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 400;
    }

    .login{
        cursor: pointer;
    }

    img{
        border-radius: 50%;
        cursor: pointer;
        width: 50px;
    }
`