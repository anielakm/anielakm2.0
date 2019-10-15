import React from 'react';
import styled from 'styled-components'
import { theme } from '../utilis/theme'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = styled.nav`

    background-color:white;
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    z-index:-99;
    opacity: 0;
    -webkit-transition: opacity .3s linear;
    transition: opacity .3s linear;
    
    &.active{
        opacity:1;
        z-index:99;
       
    }

    #menu-close{

        position:absolute;
        top:0;
        right:0;
        padding:6%;
        font-family:${theme.fonts.lato};
        font-size:22px;
        font-weight:300;
        text-transform:uppercase;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
        -webkit-font-smoothing: antialiased;
        
    }

    ul{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        list-style: none;
        padding:0;
        margin:0;
        height:100vh;

        li{

            margin: 4% 0;
            padding:2% 0;

            a{

                font-size:14px;
                text-decoration:none;
                color:black;
                letter-spacing:1px;
            }

            &#lang{
                
                font-size:12px;
                letter-spacing:2px;
                
                span{
                    margin: 0 4px;
                    font-size:14px;
                }
            }
        }
    }
`;

const MenuMobile = ({ handleCloseMenu, handleLang }) => {


    return (<Nav id="menu-mobile">
        <span id="menu-close" onClick={handleCloseMenu}>x</span>
        <ul>
            <li onClick={handleCloseMenu}><AnchorLink href="#about">o mnie</AnchorLink></li>
            <li onClick={handleCloseMenu}><AnchorLink href="#skills">umiejętności</AnchorLink></li>
            <li onClick={handleCloseMenu}><AnchorLink href="#portfolio" >portfolio</AnchorLink></li>
            <li onClick={handleCloseMenu}><AnchorLink href="#contact">kontakt</AnchorLink></li>
            <li onClick={handleCloseMenu} id="lang"><span onClick={() => handleLang('en')}>EN</span> | <span onClick={() => handleLang("pl")}>PL</span></li>

        </ul>
    </Nav>);
}

export default MenuMobile;