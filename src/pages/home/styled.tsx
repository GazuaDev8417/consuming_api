import styled from "styled-components"


export const Container = styled.div`
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

    .content{
        margin: 10vh 10px 0 10px;
        display: flex;
        justify-content: space-between;
    }
`