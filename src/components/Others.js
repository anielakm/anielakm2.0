import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { theme } from '../utilis/theme'

const Container = styled.div`
padding:20% 0 20%;
`
const StyledImg = styled(Img)`
width:60%;
box-shadow: 10px 10px 0px ${theme.colors.baseBeige};

@media(min-width:768px){
  box-shadow: none;
}
`

const Text = styled.div`
width:50%;
padding-right:15px;
text-align:right;
display:${(props) => props.mobile ? 'block' : 'none'};

@media(min-width:768px){
  display:${(props) => props.mobile ? 'none' : 'block'};
  text-align:left;
  padding-left:15px;
}

@media(min-width:1220px){
  display:${(props) => props.mobile ? 'none' : 'flex'};
    flex-direction: column;
    justify-content: flex-end;
}

h4{
    font-size:12px;
    font-weight:300;
    margin:0 0 10px;

    @media(min-width:1220px){
      font-size:22px;
      font-weight:600;
      padding: 0 5% 0 0 ;
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

@media(min-width:678px){
  width:95%;
}



`;
const Others = ({ lang, others }) => {
  const data = useStaticQuery(graphql`
    query OthersImg {
      file(relativePath: {eq: "akm9.jpg"}) {
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
  return (<Container className="others">
    <Inner>
      <Text mobile>
        <h4>{lang === 'pl' ? 'Moje pozostałe umiejętności:' : 'My other skills:'}</h4>
        <ul>

          {lang === 'pl' ? (others.pl.map(item => <li>{item}</li>)) : (others.en.map(item => <li>{item}</li>))}
        </ul>
      </Text>
      <StyledImg fluid={data.file.childImageSharp.fluid} />
      <Text >
        <h4>{lang === 'pl' ? 'Moje pozostałe umiejętności:' : 'My other skills:'}</h4>
        <ul>
          {lang === 'pl' ? (others.pl.map(item => <li>{item}</li>)) : (others.en.map(item => <li>{item}</li>))}
        </ul>
      </Text>
    </Inner>
  </Container>);
}

export default Others;