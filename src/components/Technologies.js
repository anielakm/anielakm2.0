import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { theme } from '../utilis/theme'

const Container = styled.div`

.technologies-content{

  display:flex;
  width:90%;
  margin: auto;
  padding:20% 0 5%;

.technologies-text, .technologies-img{
  width:50%;

  @media(min-width:1220px){
    display:flex;
    flex-direction:column;
    justify-content:center;
  }
}

@media(min-width:768px){
  width:80%;
}

@media(min-width:1220px){
  width:60%;
  padding:8% 0 5%;
}

}


@media(min-width:768px){
  margin: 20% 0 25%;
.technologies{
  display:flex;

  .technologies-text, .technologies-img{
    width:50%;
  }
  .technologies-text{

    padding-left:10%;
    padding-right:4%;

  
    .technologies-text-content{
      font-size:13px;

      
      li{
        margin:  2% 0;
        span {
        font-size: 12px;
      } 
      }
    }
  }
}
}

@media(min-width:1220px){

  margin: 10% 0 ;

}

margin: 20% 0 30%;
background: ${`linear-gradient(90deg, transparent 70%, ${theme.colors.baseBeige} 30%)`};  
`
const StyledImg = styled(Img)`
width:100%;
height:100%;

`

const Text = styled.div`
padding-right:3%;
text-align:right;

@media(min-width:1220px){
  padding: 0 10% 0 5%;
    }

.technologies-title{
    font-size:12px;
    font-weight:300;
    margin:0 0 10px;

    @media(min-width:768px){
      font-size:15px;
    }

    @media(min-width:1220px){
      font-size:24px;
      font-weight:600;
    }
    
}

.technologies-text-content{
    list-style:none;
    font-family: ${theme.fonts.lato};
    font-weight:200;
    font-size:11px;
    padding:0;

    @media(min-width:768px){
      font-size:12px;
      line-height:18px;
    }

    @media(min-width:1220px){
      font-size: 18px;
    line-height: 26px;
    font-weight: 200;
    
    span {
      font-size: 15px;
    }
    }
}

`;

const Technologies = ({ lang }) => {
  const data = useStaticQuery(graphql`
    query TechnologiesImg {
      file(relativePath: {eq: "akm2.jpg"}) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }   
      `)
  return (<Container className="technologies" data-aos="fade-left" >
    <div className="technologies-content">

      <Text className="technologies-text" >
        <h4 className="technologies-title">{lang === 'pl' ? 'Technologie, których używam przy tworzeniu stron:' : 'Technologies, which I use creating web apps'}</h4>
        <ul className="technologies-text-content">
          <li>HTML5, CSS3/SASS, JavaScript&nbsp;(ES6)</li>
          <li>Bootstrap</li>
          <li>React <span>(Gatsby.js/Next.js)</span></li>
          <li>Vue.js</li>
          <li>Wordpress <br/><span>{lang === 'pl' ? '(podstawy PHP, wtyczki: ACF, Woocommerce)':'(PHP basics, plugins: ACF, Woocommerce)'}</span></li>
          <li>Angular <span>{lang === 'pl' ? '(podstawy)':'(basics)'}</span></li>
          <li>React Native <span>{lang === 'pl' ? '(podstawy)':'(basics)'}</span></li>
          <li>Typescript <span>{lang === 'pl' ? '(podstawy)':'(basics)'}</span></li>
        </ul>
      </Text>
      <StyledImg className="technologies-img" fluid={data.file.childImageSharp.fluid} />

    </div>
  </Container>);
}

export default Technologies;