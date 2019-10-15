import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { theme } from '../utilis/theme'

const Container = styled.div`

position:relative;
margin:20% 0;

.programs-rectangle{
  width:90%;
  height:20%;
  background-color:${theme.colors.pistachio};
  display:block;
  position:absolute;
  bottom:0;
  left:0;
  margin-bottom:-5%;
  z-index:-1;

}
@media(min-width:768px){
  width:100%;
  background:transparent;
  height:auto;

  .programs-rectangle{
  display:none;
}

  .programs-img{
    top:0;
  }
  .programs-text{
    margin:0;
  }

}

`
const StyledImg = styled(Img)`
width:60%;
`

const Text = styled.div`
width:50%;
margin-top:0;
padding-left:3%;
text-align:left;

h4{
    font-size:12px;
    font-weight:300;
    margin:0 0 10px;

    @media(min-width:1220px){
      font-size:22px;
      font-weight:600;
      padding: 0 5% 0 0;
    }
    
}

ul{
    list-style:none;
    font-family: ${theme.fonts.lato};
    font-weight:200;
    font-size:11px;
    padding:0;

    @media(min-width:1220px){
      font-size:16px;
      line-height:22px;
    }

}

`;

const Inner = styled.div`
display:flex;
width:90%;
margin: auto;

@media(min-width:768px){
  width:95%;
}

`;
const Programs = ({ lang }) => {
  const data = useStaticQuery(graphql`
    query ProgramsImg {
      file(relativePath: {eq: "akm.jpg"}) {
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
  return (<Container className="programs">
    <div className="programs-rectangle"></div>
    <Inner className="programs-inner">
      <StyledImg className="programs-img" fluid={data.file.childImageSharp.fluid} />
      <Text className="programs-text">
        <h4>{lang === 'pl' ? 'Programy, które wykorzystuję do projektowania stron:' : 'Programs, which I use to project UI'}</h4>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Lightroom</li>
        </ul>
      </Text>
    </Inner>
  </Container>);
}

export default Programs;