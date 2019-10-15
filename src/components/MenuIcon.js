import React from 'react';
import styled from 'styled-components'
import Burger from '../images/menu.png'

const MenuIconContainer = styled.div`
position:fixed;
top:0;
left:0;
background-color:white;
z-index:99;
width:50px;
height:50px;
display:flex;
align-items:center;
justify-content:center;
padding:3%;


img{
    max-width:60%;
}

@media(min-width:768px){
    padding:2%;
img{
    max-width:90%;
}
}

@media(min-width:1024px){
    display:none;
}
`;

const MenuIcon = (props) => {
    const { handleOpenMenu } = props;
    return (<MenuIconContainer onClick={handleOpenMenu}><img src={Burger} alt="" /></MenuIconContainer>);
}

export default MenuIcon;