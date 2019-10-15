import React from 'react';
import styled from 'styled-components'
import { theme } from '../utilis/theme'
import { graphql, useStaticQuery } from 'gatsby'
import ProjectsList from './ProjectsList'


const Container = styled.div`
width:100%;
text-align:center;

@media(min-width:1220px){
margin-top:15%;
}

`
const H2 = styled.h2`
text-transform:uppercase;
text-align:center;
font-weight:200;
letter-spacing:3px;
font-size:14px;

@media(min-width:768px){
  font-size:16px;
}

@media(min-width:1220px){
  font-size:42px;
  letter-spacing:6px;
}
`
const Button = styled.button`
font-family:${theme.fonts.lato};
font-weight:200;
letter-spacing:1px;
text-align:center;
background-color: ${props => props.checked ? 'white' : 'transparent'};
border:none;
padding: 6px 12px;
font-size:11px;
margin:20px 0;
box-shadow:  ${props => props.checked ? '3px 3px 5px rgba(0,0,0,.03)' : 'none'};


@media(min-width:768px){
  margin:2% 0 8%;
    }

    @media(min-width:1220px){
      padding: .75% 2%;
      font-size:14px;
      cursor: pointer;
      margin:2% 0 6%;
    }


`

const Portfolio = ({ lang, projects, handleCommercial, handleNonCommercial }) => {

  const {
    ewi,
    chelminska,
    jawar,
    ngn,
    akm,
    memory
  } = useStaticQuery(
    graphql`
        query {
            ewi: file(relativePath: {eq: "ewi.png"}) {
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
          
          chelminska: file(relativePath: {eq: "chelminska.png"}) {
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

          jawar: file(relativePath: {eq: "jawar.png"}) {
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

          akm: file(relativePath: {eq: "akm.png"}) {
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

          memory: file(relativePath: {eq: "memorygame.png"}) {
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

          ngn: file(relativePath: {eq: "ngn.png"}) {
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
        `
  )

  const commercialProjects = [
    {
      id: 'ewi',
      img: ewi.childImageSharp.fluid,
      title: 'EWI - strona internetowa firmy EWI zajmującej się sprzedażą ubrań i pościeli dla niemowląt.',
      content: 'Technologie wykorzystane do stworzenia strony: Yeoman, Gulp, Bower, HTML, SASS, Bootstrap. Strona jest dostosowana do wyświetlania zarowno na małych jak i dużych urządzeniach (spełnia standardy RWD). Projekt witryny został zaprojektowany i stworzony w programie Adobe Photoshop.',
      url: 'http://ewiradom.pl/',
      urlGit: '',
      isCommercial: true,
    },
    {
      id: 'chelminska',
      img: chelminska.childImageSharp.fluid,
      title: 'Chełmińska - strona internetowa pierkani i cukierni Chełmińska.',
      content: 'Technologie wykorzystane do stworzenia strony: Yeoman, Gulp, Bower, HTML, SASS, Bootstrap. Strona jest dostosowana do wyświetlania zarowno na małych jak i dużych urządzeniach (spełnia standardy RWD). Projekt witryny został zaprojektowany i stworzony w programie Adobe Photoshop.',
      url: 'http://www.chelminska.pl/',
      urlGit: '',
      isCommercial: true,

    },
    {
      id: 'jawar',
      img: jawar.childImageSharp.fluid,
      title: 'Jawar - strona internetowa firmy Jawar zajmującej się sprzedażą nieruchomości.',
      content: 'Technologie wykorzystane do stworzenia strony: Yeoman, Gulp, Bower, HTML, SASS, Bootstrap. Strona jest dostosowana do wyświetlania zarowno na małych jak i dużych urządzeniach (spełnia standardy RWD). Projekt witryny został zaprojektowany i stworzony w programie Adobe Photoshop.',
      url: 'http://nieruchomoscijawar.pl/',
      urlGit: '',
      isCommercial: true,

    }
  ]

  const nonCommercialProjects = [{
    id: 'ngn',
    img: ngn.childImageSharp.fluid,
    title: 'NGNails - blog o tematyce kosmetycznej.',
    content: 'Blog oparty na systemie Wordpress. Technologie wykorzystane w projekcie: HTML, CSS, Bootstrap, PHP. Projekt strony został zaprojektowany i stworzony w programie Adobe Photoshop.',
    url: 'http://ngnails.pl/',
    urlGit: '',
    isCommercial: false,

  }, {
    id: 'akm 1.0',
    img: akm.childImageSharp.fluid,
    title: 'Anielakm 1.0 - strona internetowa portfolio.',
    content: 'Technologie wykorzystane do stworzenia strony: Yeoman, Gulp, Bower, HTML, SASS, Bootstrap. Strona jest dostosowana do wyświetlania zarowno na małych jak i dużych urządzeniach (spełnia standardy RWD). Projekt witryny został zaprojektowany i stworzony w programie Adobe Photoshop.',
    url: '',
    urlGit: 'https://github.com/anielakm/anielakm',
    isCommercial: false,

  },
  {
    id: 'memory',
    img: memory.childImageSharp.fluid,
    title: 'Fruits & Vegetables - Gra typu memory napisana w języku Javascript.',
    content: 'Prosta gra polegająca na zapamiętywaniu i odkrywaniu takich samych kart. Podczas rozgrywki odliczany jest czas, ilość wykonanych ruchów oraz ilość odsłoniętych par. Wykorzystane technologie: HTML, CSS, Bootstrap, JavaScript. Projekt strony został zaprojektowany i stworzony w programie Adobe Photoshop.',
    url: 'http://htmlpreview.github.io/?https://github.com/anielakm/memoryGame/blob/master/index.html',
    urlGit: 'https://github.com/anielakm/memoryGame',
    isCommercial: false,

  }
  ]


  return (
    <Container id="portfolio">

      <H2>Portfolio</H2>
      <Button checked={projects === 'commercial'} onClick={handleCommercial}>{lang === 'pl' ? 'projekty komercyjne' : 'commercial projects'}</Button>
      <Button checked={projects === 'nonCommercial'} onClick={handleNonCommercial}>{lang === 'pl' ? 'projekty niekomercyjne' : 'non-commercial projects'}</Button>

      <ProjectsList projects={projects === 'commercial' ? commercialProjects : nonCommercialProjects} lang={lang} />

    </Container>
  );
}

export default Portfolio;