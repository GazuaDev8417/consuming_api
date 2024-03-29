import styled from "styled-components"


export const Container = styled.div`
    /* position: relative; */
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

    .image-container{
        text-align: center;
        margin-top: 20px;
    }

    .image-container img{
        border-radius: 5px;
        box-shadow: 2px 2px 4px;
    }

    .name{
        text-align: center;
        margin-top: 10px;
        font-size: 2rem;
    }

    .profile-container{
        background-color: whitesmoke;
        color: black;
        display: flex;
        flex-direction: column;
        box-shadow: 2px 2px 4px gray;
        padding: 20px;
        border-radius: 10px;
        margin: 5vh 30vw;
        gap: 10px;
        font-size: 1.5rem;
    }

    .profile-container .btn-delAccount{
        background-color: red;
        margin-top: 10px;
        padding: 5px;
        border: 1px solid;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 2px 2px 4px;
        font-weight: bold;
    }

    .profile-container .btn-delAccount:hover{
        background-color: rgba(255,0,0,.9);
        box-shadow: 0 0 8px black;
        color: whitesmoke;
    }

    .profile-container .btn-delAccount:active{
        transform: scale(.9);
        transition: .5s;
    }

    .profile-container .login-data{
        text-align: center;
        margin-top: 20px;
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