import React from 'react';
import styled from 'styled-components'
import { theme } from '../utilis/theme'
const H2 = styled.h2`
text-transform:uppercase;
text-align:center;
font-weight:200;
font-size:14px;
letter-spacing:1px;
margin:8% 0 2.5%;

@media(min-width:768px){
    font-size:16px;
}

@media(min-width:1220px){
    font-size:32px;
    letter-spacing:6px;
}
`;

const ContactContainer = styled.div`

text-align: center;
a {
    color: rgba(0,0,0,.65);
    text-decoration: none;
    font-size:13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: ${theme.fonts.lato};
    background-color: ${theme.colors.pistachio};
    padding: 12px 30px;
    box-shadow: 3px 3px 5px rgb(0,0,0,.03);
    transition: all .3s;

    &:hover {
        /* opacity: .8; */
        background-color: ${theme.colors.baseBeige}
    }


}
`

class Form extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { lang } = this.props;
        return (
        <ContactContainer id="contact" >
        {/* <ContactContainer id="contact" data-aos="fade-up" data-aos-duration="2000"> */}
            <H2>{lang === "pl" ? 'Zapraszam do kontaktu' : 'Contact me'}</H2>
           <div>
               <a href="mailto: kontakt@anielakm.pl">kontakt@anielakm.pl</a>
               
           </div>
        </ContactContainer>);
    }


}

export default Form;