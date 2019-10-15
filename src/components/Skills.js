import React from 'react';
import Technologies from './Technologies'
import Programs from './Programs'
import Others from './Others'
import styled from 'styled-components'
import { theme } from '../utilis/theme'

const ProgramsAndOthers = styled.div`
@media(min-width:768px){
    display:flex;
    position:relative;
    height:auto;
    margin:20% 0;
    padding-bottom:5%;

    .programsAndOthers-rectangle{
     
     position:absolute;
     width:85%;
     height:35%;
     bottom:0;
     display:block;
     background-color:${theme.colors.pistachio};
     z-index:-1;

     @media(min-width:1220px){
        width:65%;
     }
 
    }

    .programs, .others{
        width:50%;
        padding:0;
        margin:0;
        top:0;
       }
    .programs{padding-left:3%;}
    .others{padding-right:3%;}

    
}
@media(min-width:1220px){
    margin:20% 0 10%;
    .programs{padding-left:10%;}
    .others{padding-right:10%;}
}
`;


const Skills = ({ lang, others }) => {

    return (<div id="skills">
        <Technologies lang={lang} />
        <ProgramsAndOthers>
            <div className="programsAndOthers-rectangle"></div>
            <Programs lang={lang} />
            <Others lang={lang} others={others} />
        </ProgramsAndOthers>
    </div>);
}

export default Skills;