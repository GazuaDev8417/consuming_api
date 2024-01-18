import styled from "styled-components"


export const Container = styled.div`
    /* position: relative; */
    .modal-container{
        position: absolute;
        top: 13%;
        right: 1%;
    }

    .close{
        right: 2%;
        margin: 20px;
        position: absolute;
        cursor: pointer;
        font-weight: bold;
        font-size: 1.2rem;
    }

    .name{
        text-align: center;
        margin-top: 50px;
        font-size: 2rem;
    }

    .profile-container{
        display: flex;
        flex-direction: column;
        box-shadow: 2px 2px 4px;
        padding: 20px;
        border-radius: 10px;
        margin: 5vh 30vw;
        gap: 10px;
        font-size: 1.5rem;
    }
`