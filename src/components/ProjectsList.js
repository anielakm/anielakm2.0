import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { theme } from '../utilis/theme'

const PortfolioContainer = styled.div`
display:flex;
width:100%;
flex-wrap:wrap;

div{
    width:47%;
    height:20vh;

    @media(min-width:768px){
      width:50%;
    }

    @media(min-width:1024px){
        height:40vh;
     
    }

    @media(min-width:1220px){
        height:50vh;
     
    }
}
div:nth-child(even){
    margin:1% 2% 1% 2%;
    @media(min-width:768px){
       margin:0;
    }
}
div:nth-child(odd){
    margin:1% 0 1% 2%;
    @media(min-width:768px){
       margin:0;
    }
}

.soon{

background-color:${theme.colors.warmBeige};
color:white;
display:flex;
align-items:center;
justify-content:center;
font-weight:300;
text-transform:uppercase;
font-size:12px;
letter-spacing:1px;

@media(min-width:1220px){
    font-size:24px;
    font-weight:600;
    letter-spacing:2px;
}
}



.project-container{




    display:flex;
    background-color:white;
    width:96%;
    height:92%;
    top:4%;
    left:2%;
    /* width:100%;
    height:100%; */
    z-index:999;
    position:absolute;
    opacity:0;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    

    @media(min-width:768px){
        padding: 4% 6%;
    }

    @media(min-width:1220px){
        padding:10%;
    }

    transition: 1s opacity;
    -webkit-transition: 1s opacity;

    h1{
        font-size: 16px;
    text-align: left;
    width:100%;

    @media(min-width:768px){
        font-size: 12px;
        margin-bottom:1%;

    }

    @media(min-width:1220px){
        padding-right:20%;
        font-size: 16px;
    }
    @media(min-width:1440px){
        font-size: 18px;
    }
    }
    p{
        font-family: lato;
    font-size: 12px;
    font-weight: 200;
    line-height: 16px;
    text-align: left;
    letter-spacing:1px;

    @media(min-width:768px){
        font-size: 9px;
        line-height:12px;
    }

    @media(min-width:1220px){
        padding-right:20%;
        font-size: 10px;
        line-height:14px;
    }


    @media(min-width:1440px){
        font-size: 12px;
    }
    }

    .button-container{
        text-align:left;
        height:auto;
        width:100%;
        margin: 1% 0;

    }

    }

@media(min-width:768px){
    .gatsby-image-wrapper:hover{
    .project-container{
        opacity:.95;
    }
}
}


`;

const Button = styled.button`
    display:${props => props.display ? 'inline-block' : 'none'};
    border: 1px solid black;
    padding:1% 2%;
    margin-right: 1%;
    background-color:black;
    cursor: pointer;
    transition: .5s all;

    a{
        color:white;
        text-decoration:none;
    }

    &:hover{
        background-color:transparent;
       a{ color:black;}
    }
`;

const ProjectsList = ({ projects, lang }) => {


    return (<>
        <PortfolioContainer>

            {projects.map(item => <BackgroundImage fluid={item.img}><article className="project-container"><h1 className="project-title">{item.title}</h1><p className="project-content">{item.content}</p><div className="button-container">
                <Button display={item.url}>
                    <a href={item.url} target="_blank">przejdź na stronę</a></Button><Button display={item.urlGit}><a href={item.urlGit} target="_blank">Github</a></Button></div></article></BackgroundImage>)}
            {(projects.length % 2 === 0) ? null : <div className="soon">{lang === 'pl' ? "Więcej wkrótce ..." : "Cooming soon ..."}</div>}


        </PortfolioContainer>
    </>);
}

export default ProjectsList;