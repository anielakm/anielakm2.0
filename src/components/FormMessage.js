import React from 'react';
import styled from 'styled-components'
import { theme } from '../utilis/theme'

const Message = styled.div`

    display:flex;
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;

    background-color:rgba(0,0,0,0.5);

    align-items:center;
    justify-content:center;
 
    opacity:0;
    z-index:-99;
    -webkit-transition: opacity .3s linear;
    transition: opacity .3s linear;

    &.active-message{
        opacity:1;
        z-index:99;

    }


div{

    display:flex;
    align-items:center;
    justify-content:center;

    background-color:white;
    height:30vh;
    width:80%;
    position:relative;
    letter-spacing:1px;

    @media(min-width:1024px){
        width:60%;
        font-size:12px;
    }

    @media(min-width:1220px){
        width:40%;
        font-size:14px;
    }


    span{

    position:absolute;
    top:0;
    right:0;
    padding:5%;
    font-family:${theme.fonts.lato};
    font-size: 18px;
    cursor: pointer;

    @media(min-width:1220px){
        padding:3%;
        font-size:22px;
    }

    }
}

`;

const FormMessage = ({ handleMessage }) => {

    return (<Message id="form-message">
        <div>
            <span onClick={handleMessage}>X</span>
            <p id="message-content">Błąd wysyłania wiadomości. Proszę spróbować później.</p>

        </div>
    </Message>);
}

export default FormMessage;