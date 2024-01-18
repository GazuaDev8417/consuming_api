import styled from "styled-components"


export const Container = styled.div`
    /* position: relative; */
    .modal-container{
        position: absolute;
        right: 1%;
    }

    .name{
        text-align: center;
        margin-top: 20px;
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