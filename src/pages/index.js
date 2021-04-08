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
import { Helmet } from "react-helmet"
import Icon from '../images/ikonka.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

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

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: 'commercial',
      lang: 'pl',
      aboutText: {
        pl: 'W trakcie mojej dotychczasowej praktyki jako front-end developer miałam przyjemność realizować m.in. projekty związane z&nbsp;tworzeniem blogów, stron firmowych, stron typu landing page, czy też sklepów internetowych. ',
        en: `During my current practice as&nbsp;a&nbsp;front-end developer I&nbsp;had the&nbsp;pleasure to&nbsp;implement projects related to&nbsp;the creation of blogs, corporate websites, landing pages and online stores.`,
      },

      others: {

        pl: ['Zagadnienia RWD', 'Metodyka BEM', 'Praca z systemami Mac OS / Windows', 'Język Angielski B2+'],
        en: ['RWD issues', 'BEM Methodology', 'Work on MAacOS / Windows operating systems', 'English B2+']

      },
    

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



  handleLang = (lang) => {
    this.setState({ lang: lang });

  }

  componentDidMount() {
    const AOS = require('aos');
    this.aos = AOS
    this.aos.init()
  }

  componentDidUpdate() {
    this.aos.refresh()
  }



  render() {

    return (
      <>
        <div>
          <SEO title="Home" />
          <Helmet>
            <meta property="og:image" content={`https://anielakm.pl${Icon}`} />
            <meta property="og:image:type" content="image/png" />
          </Helmet>
          <Global />
          <MenuDesktop handleLang={this.handleLang} lang={this.state.lang} />
          <MenuIcon handleOpenMenu={this.handleOpenMenu} />
          <MenuMobile handleCloseMenu={this.handleCloseMenu} handleLang={this.handleLang} />
         
          <About text={this.state.aboutText} lang={this.state.lang} />
          <Skills lang={this.state.lang} others={this.state.others} />
          <Portfolio lang={this.state.lang} projects={this.state.projects} handleCommercial={this.handleProjectsCommercial} handleNonCommercial={this.handleProjectsNonCommercial} /><br />
          <Form lang={this.state.lang}/>
          <Footer />
        </div>
      </>
    )
  }

}

export default IndexPage
