import React from 'react';
import styled from 'styled-components'
import { theme } from '../utilis/theme'
const H2 = styled.h2`
text-transform:uppercase;
text-align:center;
font-weight:200;
font-size:14px;
letter-spacing:1px;
margin:10% 0 5%;

@media(min-width:768px){
    font-size:16px;
}

@media(min-width:1220px){
    font-size:32px;
    letter-spacing:6px;
}
`;

const FormContainer = styled.form`

padding:0 10%;
text-align:center;
font-size:12px;

@media(min-width:1220px){
    width:90%;
margin:auto;
}

input{
    width:100%;
    background-color:transparent;
    border-bottom: 1px solid lightgray;
   border-top:0;
   border-left:0;
   border-right:0;
   margin: 4% 0;
   font-family: ${theme.fonts.lato};
   padding: 4%;
 

    &#desktop{
        display:none;
    }

   @media(min-width:768px){
       width:48%;
       margin: 0 1%;
       display:inline-block;

       &#desktop{
        display:inline-block;
    }
   }

   @media(min-width:1220px){
    margin: 2% 1%;
    padding: 1%;
    font-size:14px;
    color:rgba(0,0,0,0.65);
    letter-spacing:1px;
   }

}
textarea{
    
    width:100%;
    padding:4%;
    margin: 4% 0;
    border: 1px solid lightgray;
    background-color:transparent;

    @media(min-width:1220px){
    padding:1%;
    margin: 4% 0;
    height:30vh;
    font-size:14px;
    color:rgba(0,0,0,0.65);

    }
}
button{
    cursor: pointer;
    text-transform:lowercase;
    background-color:white;
    font-family: ${theme.fonts.lato};
    color: gray;
    letter-spacing:2px;
    font-size:9px;
    border:0;
    padding:6% 14%;
display:inline-block;
margin: 8% 0 4%;

@media(min-width:768px){
    font-size:10px;
    padding:3% 6%;
}

@media(min-width:1220px){
    font-size:12px;
    padding:1.5% 4%;
    margin-top: 3%;

}
}
`

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            firm: '',
            message: ''
        }
    }

    handleForm = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() => this.props.handleMessage())
            .catch((error) => alert(error))
    }

    render() {
        const { lang } = this.props;
        return (<div id="contact">
            <H2>{lang === "pl" ? 'Zapraszam do kontaktu' : 'Contact me'}</H2>
            <FormContainer
                onSubmit={this.handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <input name="name" onChange={this.handleForm} type="text" value={this.state.name} placeholder={lang === "pl" ? "* Imię" : "* Name"} />
                <input name="email" onChange={this.handleForm} type="email" value={this.state.email} placeholder="* E-mail" />
                <input name="subject" onChange={this.handleForm} type="text" value={this.state.subject} placeholder={lang === 'pl' ? "Temat" : "Subject"} />
                <input name="firm" id="desktop" onChange={this.handleForm} value={this.state.firm} type="text" placeholder={lang === 'pl' ? "Firma" : "Firm"} />
                <textarea name="message" onChange={this.handleForm} value={this.state.text} placeholder={lang === 'pl' ? "* Treść wiadomości ..." : "* Message ..."} id="" cols="30" rows="10"></textarea>
                <button type="submit">{lang === 'pl' ? 'Wyślij wiadomość' : 'Send message'}</button>
            </FormContainer>
        </div>);
    }


}

export default Form;