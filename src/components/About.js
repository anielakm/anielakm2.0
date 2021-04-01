import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const AboutContainer = styled.div`
@media(min-width:768px){
  margin:15% 0;
  display:flex;
  position:relative;
  
  .about-img {
    width:55%;
    height:60%;
  }
   .about-text{
      width:45%;
      margin:0;
      text-align:left;

      .about-title{
        margin: 0 4%;
        
        .about-h1{font-size:22px}
        .about-h3{
          font-size:12px;
          letter-spacing:1px;
          }
      }

      .about-text-content{
        font-size:9px;
        position:absolute;
        bottom:0;
        padding: 0 4% 4% 5%;
        letter-spacing:1px;
      }
  }
}

@media(min-width:768px){
  .about-text{
    .about-title{
        .about-h1{font-size:26px}
        .about-h3{font-size:16px;}
      }
    .about-text-content{
        font-size:10px;
        padding: 0 8% 5% 7%;
    }
  }
 
      
}

@media(min-width:1220px){
  margin:10% 0;

  .about-img {
    width:50%;
    height:60%;
  }

   .about-text{
      width:45%;
      margin:0;

      .about-title{
        margin: 0 4%;
        
        .about-h1{
          font-size:40px;
          letter-spacing:6px;}
        .about-h3{
          font-size: 22px;
          font-weight: 400;
          letter-spacing:1px;
          }
      }

      .about-text-content{
        padding: 0 12% 5% 10%;
    font-weight: 400;
    font-size: 11px;
  

        
      }
  }

}

@media(min-width:1440px){
  

   .about-text{

      .about-title{
        
        .about-h1{
          font-size:48px;
       }
        .about-h3{
          font-size: 16px;
          letter-spacing:4px;
          }
      }

      .about-text-content{

        padding: 0 10% 4% 13%;
        font-size: 12px;
        font-weight:500;
        
      }
  }

}
`;

const AboutText = styled.div`

  margin: 10% 0 15%;
  text-align:center;
  padding:0;

  h1{

    font-family:'Playfair Display', serif;
    font-size:15px;
    letter-spacing:2px;
    font-weight:300;
    margin:0;
 
  }

  h3{

    font-family:'Lato', sans-serif;
    font-size:10px;
    font-weight:300;
    margin:0 0 8%;

  }

  p{
    font-family:'Lato', sans-serif;
    font-weight:200;
    font-size:10px;
    line-height:1.8em;
    padding:0 8%;
    text-align:left;
  }
`;



const About = ({ text, lang }) => {

  const data = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "akm4.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2992, maxHeight: 1894) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }   
    `)
  return (
    <AboutContainer id="about" >
      <Img className="about-img" fluid={data.file.childImageSharp.fluid} alt="Akm About" loading="eager"/>
      <AboutText className="about-text"> <div className="about-title"><h1 className="about-h1">Aniela Katana-Matłok</h1><h3 className="about-h3">junior front-end developer</h3></div><p className="about-text-content">{lang === 'pl' ? text.pl : text.en}</p></AboutText>


    </AboutContainer>

  );

}


export default About;