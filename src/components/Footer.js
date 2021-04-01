import React from 'react';
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql } from 'gatsby'
import { theme } from '../utilis/theme'
import LinkedIn from '../images/linkedin-w.png'
import Git from '../images/github-w.png'

const H2 = styled.h2`
text-align:center;
margin:20% 0 1%;
color:white;
letter-spacing:2px;
font-family:${theme.fonts.playf};
font-weight:300;
font-size:16px;

@media(min-width:768px){
  font-size:18px;
}
@media(min-width:1024px){
  font-size:32px;
  margin-top:10%;
}
@media(min-width:1220px){
  font-size:34px;
  margin:10% 0 0 0;
}
`;

const FooterContainer = styled.div`
background-color: ${theme.colors.warmBeige};
margin-top:10%;
text-align:center;


p{
    color:white;
    font-family: ${theme.fonts.lato};
    font-weight:300;
    font-size:11px;
    margin:0;
    padding: 12% 0 2% ;

    @media(min-width:1024px){
      padding: 5% 0 2% ;
      font-size:13px;
}

    @media(min-width:1220px){
      padding: 7% 0 1% ;
      font-size:13px;
      font-weight:400;
      letter-spacing:1px;
}
}

.icon{
    width:22px;
    margin: 2% 1%;

    @media(min-width:1024px){
      margin: 0 0.5%;
}
    @media(min-width:1220px){
      margin: 0.65% 0.25%;
}
    /* box-shadow: 2px 2px 3px rgba(0,0,0,0.05); */
    /* border-radius:10px; */


@media(min-width:768px){
  width:25px;
}
    
}
`;

const BackgroundImageStyle = styled(BackgroundImage)`
  width: 100%;
  height:28vh;
  background-size: cover;
  background-color:transparent;
  background-position: top;

  @media(min-width:1024px){
    height:50vh;
  }

  @media(min-width:1220px){
    height:70vh;
  }
`

const Footer = () => (
  <StaticQuery
    query={graphql`
    query {
        file(relativePath: {eq: "akm3.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2992, maxHeight: 1661) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }   
    `}
    render={data => {
      const imageData = data.file.childImageSharp.fluid
      return (
        <FooterContainer>
          <BackgroundImageStyle
            Tag="footer"
            // className={}
            fluid={imageData}
            backgroundColor={`#040e18`}
          ></BackgroundImageStyle>
          <H2>Aniela Katana-Matłok</H2>

          <a href="https://www.linkedin.com/in/aniela-katana-mat%C5%82ok-92a210181?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmIbmJ%2BkkR6myNOHyCjLOMA%3D%3D" target="_blank">
            <img className="icon" alt="linkedin" loading="eager" src={LinkedIn} />
          </a>

          <a href="https://github.com/anielakm" target="_blank">
            <img className="icon" alt="git" loading="eager" src={Git} />
          </a>
          <p>Template by Aniela Katana-Matłok. All rights reserved. </p>
        </FooterContainer>);
    }}
  />
)

export default Footer;