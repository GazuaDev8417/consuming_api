import styled from "styled-components"



export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .form-style fieldset{
        background-color: #010133;
        color: black;
        width: 30vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        padding: 30px 10px;
        border-radius: 10px;
        box-shadow: 2px 2px 4px gray;
    }

    .form-style fieldset legend{
        text-align: center;
        font-size: 1.5rem;
        color: whitesmoke;
    }

    .form-style .input-container{
        position: relative;
    }

    .input-container .icon{
        position: absolute;
        right: 3%;
        top: 27%;
        cursor: pointer;
    }

    .form-style input{
        width: 28vw;
        height: 35px;
        border-radius: 10px;
        border: 1px solid;
        outline: none;
        padding-left: 10px;
        box-shadow: 2px 2px 4px gray;
    }

    .form-style .btn-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        width: 28vw;
    }

    .btn-container button{
        padding: 10px 5px;
        border-radius: 10px;
        border: 1px solid;
        width: 100px;
        box-shadow: 2px 2px 4px gray;
        color: whitesmoke;
        cursor: pointer;
        transition: .3s;
        background-color: rgba(8, 138, 181, 0.5);
    }

    .btn-container button:hover{
        background-color: green;
        box-shadow: 0 0 8px;
    }

    .btn-container button:active{
        transform: scale(.9);
    }
`