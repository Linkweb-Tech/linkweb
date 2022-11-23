import React, { Component } from "react";
import axios from 'axios';
import "../scss/form.scss";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import ReCaptchaBlock from '../components/recaptcha'
import { store } from 'react-notifications-component'
import { loadReCaptcha } from 'react-recaptcha-v3'

class ContactLanding extends Component {

    constructor(props) {

        super(props)
        this.state = {
            //email: "",
            nom: "",
            //url: "",
            telephone: "",
            // message: "",
            mailSent: false,
            error: null,
            submitDisplay: "block",
            sent: "",
            origin: props.origin,
        }
    }
    
    componentDidMount(){
        loadReCaptcha('6LfT84MUAAAAADxf0gSSMIhpMWh2CIAKHdobtTtq')
    }

    handleFormSubmit (event) {
        event.preventDefault()
        console.log(this.state.origin);
        
        //console.log(JSON.stringify(this.state.mailSent));
        if( this.state.url == '' && this.state.telephone
         == '' ) {
            store.addNotification({
                id: "notif",
                title: "Le formulaire est vide",
                message: "Veuillez saisir les champs obligatoire avant de soumettre le formulaire" ,
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        } else {
            console.log(this.state);
            axios({
                method: 'post',
                url:'https://api.linkweb.fr/data/formLanding.php',
                // url:'../form.php',
                headers: {'content-type': 'application/json' },
                data: this.state
            })
            .then( result => {
                this.setState({ mailSent: result.data.sent })
                console.log(result)
                let isOK = result.data.sent
                if (isOK === true) {
                    this.setState({submitDisplay: "hidden"})
                    store.addNotification({
                        id: "notif2",
                        title: "Votre message a bien été pris en compte!",
                        message: "Nous reviendrons vers vous d'ici les prochaines 24h",
                        type: "success",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    })

                    this.setState({
                        //email: "",
                        nom: "",
                        //prenom: "",
                        //url: "",
                        telephone: "",
                        // ville: "",
                        // objet: "",
                        // message: "",
                        mailSent: false,
                        error: null,
                        
                    })
    
                } else {
                    let tel = '';
                    let nom = "";
                    if(!result.data.phoneMessage === ''){
                        tel = 'téléphone ';
                    }
                    if(!result.data.nomMessage === ''){
                        nom = 'nom ';
                    }
                    store.addNotification({
                        id: "notif3",
                        title: "Certains champs sont manquants ou incomplets",
                        message: "Veuillez corriger les champs avant de valider ce formulaire : " + result.data.phoneMessage +" "+ result.data.nomMessage ,
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });
                }
    
            })
            .catch(error=>{this.setState({
                error: error.message,
                })
                //console.log(JSON.stringify(this.state));
            });
        }
        
    }

    render(){
        
        return(
            <form onSubmit={() => this.handleSubmit} className="flex flex-wrap max-w-5xl px-6 mx-auto landing">

                <div className="w-full md:w-1/2 px-1 py-4">
                <input 
                    placeholder="Nom (*)" 
                    type="text" 
                    className=" border-bottom-bleu pl-4 py-3 w-full text-black"
                    name="nom"
                    value={this.state.nom}
                    onChange={e => this.setState({ nom: e.target.value })}

                
                />
                </div>
                {/* <div className="w-full md:w-1/3 px-1 py-4">
                <input 
                    placeholder="Email" 
                    type="email" 
                    className="py-3 border-bottom-bleu pl-4 w-full text-black"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}

                
                />
                </div> */}
                <div className="w-full md:w-1/2 px-1 py-4">
                <input 
                    placeholder="Téléphone (*)" 
                    type="text" 
                    className="py-3 border-bottom-bleu pl-4 w-full text-black"
                    name="telephone"
                    value={this.state.telephone}
                    onChange={e => this.setState({ telephone: e.target.value.replace(/\s/g, '') })}

                
                />
                </div>
                {/* <div className="w-full px-1 py-4">
                <input 
                    placeholder="URL de votre site internet" 
                    type="text" 
                    className="py-3 border-bottom-bleu pl-4 w-full text-black"
                    name="url"
                    value={this.state.url}
                    onChange={e => this.setState({ url: e.target.value })}

                
                />
                </div> */}
                {/* <div className="w-full px-1 py-4">
                    <textarea 
                        placeholder="Message (*)" 
                        type="text" 
                        className="py-3 border-bottom-bleu pl-4 w-full text-black"
                        name="message"
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value })}

                    />
                </div> */}
                <ReactNotification />
                <ReCaptchaBlock />

                <div className={`w-full flex justify-center mt-12 mb-2 ${ this.state.submitDisplay } `}>
                     <button onClick={e=>this.handleFormSubmit(e)} className="landing contactForm bg-black century text-white py-3 px-6 uppercase border-bottom-bleu" type="submit">Envoyer</button>
                </div>
            </form>
        );
    }
}

export default ContactLanding;

