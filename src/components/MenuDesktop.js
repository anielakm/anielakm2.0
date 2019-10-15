import React from 'react';
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { theme } from '../utilis/theme'
import Git from '../images/github-b.png';
import LinkedIn from '../images/linkedin-b.png'

const Nav = styled.nav`
display:none;
@media(min-width:1024px){
    display:block;
    position:fixed;
    background-color:white;
    top:0;
    left:0;
    width:100%;
    z-index:99;
    box-shadow:2px 2px 5px rgba(0,0,0,0.03);


.desktop-ul{
   
    display:flex;
    justify-content:flex-end;
    list-style:none;
    margin: 1% 1%;
    padding:0;

    .desktop-li{
        margin: 0 1%;
        font-family:${theme.fonts.lato};
        font-weight:400;
        font-size:12px;

        &.desktop-img{
            margin: 0 3px;
            img{
            max-width:15px;
        }

        }
        &#img1{
            margin-left:1%;
        }

        &#img2{
            margin-right:1%;
        }        

        a{
            text-decoration:none;
            color:black;
        }
    }
}

}

@media(min-width:1220px){
    .desktop-ul{
        .desktop-li{
        font-size:14px;
        letter-spacing:1px;

        &.desktop-img{
            margin: 0 7px;
            img{min-width:20px;}
            
        }
    }
    } 
}
`;

const Span = styled.span`
opacity: ${props => props.active ? '1' : '0.5'};
cursor:pointer;
`;

const MenuDesktop = ({ handleLang, lang }) => {
    return (<Nav className="desktop-menu">
        <ul className="desktop-ul">
            <li className="desktop-li"><AnchorLink href="#about">o mnie</AnchorLink></li>
            <li className="desktop-li"><AnchorLink href="#skills">umiejętności</AnchorLink></li>
            <li className="desktop-li"><AnchorLink href="#portfolio" >portfolio</AnchorLink></li>
            <li className="desktop-li"><AnchorLink href="#contact">kontakt</AnchorLink></li>
            <li className="desktop-li desktop-img" id="img1"><a href="https://github.com/anielakm" target="_blank"><img src={Git} alt="git" /></a></li>
            <li className="desktop-li desktop-img" id="img2"><a href="https://www.linkedin.com/in/aniela-katana-mat%C5%82ok-92a210181?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmIbmJ%2BkkR6myNOHyCjLOMA%3D%3D" target="_blank"><img src={LinkedIn} alt="git" /></a></li>
            <li className="desktop-li"><Span active={lang === 'en'} onClick={() => handleLang('en')}>EN</Span>&nbsp;&nbsp;|&nbsp;&nbsp;<Span active={lang === 'pl'} onClick={() => handleLang('pl')}>PL</Span></li>

        </ul>
    </Nav>);
}

export default MenuDesktop;