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
    z-index:-99;
    background-color:rgba(0,0,0,0.5);

    align-items:center;
    justify-content:center;
 
    opacity:0;
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

    span{

    position:absolute;
    top:0;
    right:0;
    padding:5%;
    font-family:${theme.fonts.lato};
    font-size: 18px;

    }
}

`;

const FormMessage = (props) => {

    const { handleMessage } = props;

    return (<Message id="form-message">
        <div>
            <span onClick={handleMessage}>X</span>
            form message
        </div>
    </Message>);
}

export default FormMessage;