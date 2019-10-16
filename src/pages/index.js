import React from "react"
import SEO from "../components/seo"
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Form from '../components/Form'
import Footer from '../components/Footer'
import { createGlobalStyle } from "styled-components";
import MenuIcon from '../components/MenuIcon'
import MenuMobile from '../components/MenuMobile'
import FormMessage from '../components/FormMessage'
import MenuDesktop from "../components/MenuDesktop"
import styled from 'styled-components'

const Global = createGlobalStyle`
body{
  padding:0;
  margin:0;
  font-family: 'Playfair Display', serif;
  background-color: #f6f6f6;
}
*, *::before, *::after{
  box-sizing:border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*:focus {
    outline: none;
}
`;

const GlobalContainer = styled.div`




`;


class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: 'commercial',
      lang: 'pl',
      aboutText: {
        pl: 'Jestem absolwentką studiów magisterskich na kierunku Informatyka i Ekonometria. Zarówno moja praca magisterka jak i licencjacka były poświęcone nowoczesnym technologiom frontendowym. Moja dotychczasowa edukacja z zakresu Informatyki i Ekonometrii oraz realizacja projektów jako freelancer pozwolila mi nabyć wiedzę oraz cenne umiejetności, które obecnie wykorzystuję w realizowanych przeze mnie projektach.',
        en: `I am a graduate of Computer Science and Econometrics studies. Both my Master's and Bachelor's thesis were devoted to modern frontend technologies. My previous education in the field of Information Technology and Econometrics and the implementation of projects as a freelancer allowed me to acquire knowledge and valuable skills that I currently use in my projects.`,
      },

      others: {

        pl: ['Zagadnienia RWD', 'Metodyka BEM', 'Praca z systemami MAacOS / Windows', 'Język Angielski B2+'],
        en: ['RWD issues', 'BEM Methodology', 'Work on MAacOS / Windows operating systems', 'English B2+']

      },
      formMessage: {
        pl: {
          formMessageSuccess: 'Dziękuję, wiadomość wysłana poprawnie.',
          formMessageError: 'Błąd wysyłania wiadomości. Proszę spróbować później.',
        },
        en: {
          formMessageSuccess: 'Thank You. Message sent.',
          formMessageError: 'Error. Please try again later.',
        }

      }

    };

  }

  handleCloseMenu = () => {
    document.querySelector('#menu-mobile').classList.remove("active");
  }

  handleOpenMenu = () => {
    document.querySelector('#menu-mobile').classList.add("active");
  }

  handleProjectsCommercial = (e) => {
    e.preventDefault();
    this.setState({ projects: 'commercial' });

  }

  handleProjectsNonCommercial = (e) => {
    e.preventDefault();
    this.setState({ projects: 'nonCommercial' });
  }

  handleFormMessageOpen = (type) => {

    let lang = this.state.lang;
    let messageContent;

    if (lang === 'pl') {
      type === 'success' ? messageContent = this.state.formMessage.pl.formMessageSuccess : messageContent = this.state.formMessage.pl.formMessageError;
    } else if (lang === 'en') {
      type === 'success' ? messageContent = this.state.formMessage.en.formMessageSuccess : messageContent = this.state.formMessage.en.formMessageError;
    }
    document.querySelector('#form-message').classList.add("active-message");
    document.querySelector('#message-content').innerHTML = messageContent;


  }
  handleFormMessageClose = () => {
    document.querySelector('#form-message').classList.remove("active-message");
  }

  handleLang = (lang) => {
    this.setState({ lang: lang });

  }

  render() {
    return (
      <>
        <GlobalContainer>
          <SEO title="Home" />
          <Global />
          <MenuDesktop handleLang={this.handleLang} lang={this.state.lang} />
          <MenuIcon handleOpenMenu={this.handleOpenMenu} />
          <MenuMobile handleCloseMenu={this.handleCloseMenu} handleLang={this.handleLang} />
          <FormMessage handleMessage={this.handleFormMessageClose} formMessage={this.state.formMessage} lang={this.state.lang} />
          <About text={this.state.aboutText} lang={this.state.lang} />
          <Skills lang={this.state.lang} others={this.state.others} />
          <Portfolio lang={this.state.lang} projects={this.state.projects} handleCommercial={this.handleProjectsCommercial} handleNonCommercial={this.handleProjectsNonCommercial} /><br />
          <Form lang={this.state.lang} handleMessage={this.handleFormMessageOpen} formMessage={this.state.formMessage} />
          <Footer />
        </GlobalContainer>
      </>
    )
  }

}

export default IndexPage
