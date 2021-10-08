import React, { Component } from "react";
import axios from 'axios';
import "../scss/form.scss";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import ReCaptchaBlock from '../components/recaptcha'
import { store } from 'react-notifications-component'
import { loadReCaptcha } from 'react-recaptcha-v3'

class ContactForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            nom: "",
            prenom: "",
            telephone: "",
            ville: "",
            objet: "",
            message: "",
            mailSent: false,
            error: null,
            submitDisplay: "block",
            sent: "",
            fromAds: 'false'
        }
    }
    
    componentDidMount(){
        loadReCaptcha('6LfT84MUAAAAADxf0gSSMIhpMWh2CIAKHdobtTtq')
        if(typeof window !== 'undefined'){
            this.setState({formAds: localStorage.getItem(ads)});
        }
    }

    handleFormSubmit (event) {
        event.preventDefault()
        //console.log(JSON.stringify(this.state.mailSent));
        if( this.state.email == '' && this.state.nom == '' && this.state.prenom == '' && this.state.message == "") {
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
            
            axios({
                method: 'post',
                url:'https://api.linkweb.fr/data/form.php',
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
                            duration: 150000,
                            onScreen: true
                        }
                    })

                    this.setState({
                        email: "",
                        nom: "",
                        prenom: "",
                        telephone: "",
                        ville: "",
                        objet: "",
                        message: "",
                        mailSent: false,
                        error: null,
                        fromAds: 'false'
                    })
    
                } else {
                    let nom = '';
                    let prenom = '';
                    let tel = '';
                    let message = '';
                    let adresse = '';
                    let objet = '';
                    let email = '';
                    if(!result.data.nameMessage === ''){
                        nom = 'Nom ';
                    }
                    if(!result.data.prenomMessage === ''){
                        prenom = 'Prénom ';
                    }
                    if(!result.data.phoneMessage === ''){
                        tel = 'Téléphone ';
                    }
                    if(!result.data.messageMessage === ''){
                        message = 'Message ';
                    }
                    if(!result.data.adresseMessage === ''){
                        adresse = 'Adresse ';
                    }
                    if(!result.data.objetMessage === ''){
                        objet = 'Objet ';
                    }
                    if(!result.data.emailMessage === ''){
                        email = 'Email ';
                    }
                    store.addNotification({
                        id: "notif3",
                        title: "Certains champs sont manquants ou incomplets",
                        message: "Veuillez corriger les champs avant de valider ce formulaire : " + nom + prenom + tel + message + adresse + objet + email ,
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                            duration: 150000,
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
            <form onSubmit={() => this.handleSubmit} className="flex flex-wrap max-w-5xl px-10 mx-auto">

                <div className="w-full md:w-1/2 px-2 py-4">
                <input 
                    placeholder="Nom (*)" 
                    type="text" 
                    className=" border-bottom-bleu py-3 w-full"
                    name="nom"
                    value={this.state.nom}
                    onChange={e => this.setState({ nom: e.target.value })}

                
                />
                </div>
                <div className="w-full md:w-1/2 px-2 py-4">
                <input 
                    placeholder="Prénom (*)" 
                    type="text" 
                    className="py-3 border-bottom-bleu w-full"
                    name="prenom"
                    value={this.state.prenom}
                    onChange={e => this.setState({ prenom: e.target.value })}

                
                />
                </div>
                <div className="w-full md:w-1/3 px-2 py-4">
                <input 
                    placeholder="Email (*)" 
                    type="email" 
                    className="py-3 border-bottom-bleu w-full"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}

                
                />
                </div>
                <div className="w-full md:w-1/3 px-2 py-4">
                <input 
                    placeholder="Téléphone (*)" 
                    type="text" 
                    className="py-3 border-bottom-bleu w-full"
                    name="telephone"
                    value={this.state.telephone}
                    onChange={e => this.setState({ telephone: e.target.value.replace(/\s/g, '') })}

                
                />
                </div>
                <div className="w-full md:w-1/3 px-2 py-4">
                <input 
                    placeholder="Ville (*)" 
                    type="text" 
                    className="py-3 border-bottom-bleu w-full"
                    name="ville"
                    value={this.state.ville}
                    onChange={e => this.setState({ ville: e.target.value })}

                
                />
                </div>
                <div className="w-full  px-2 py-4">
                <input 
                    placeholder="Objet (*)" 
                    type="text" 
                    className="py-3 border-bottom-bleu w-full"
                    name="objet"
                    value={this.state.objet}
                    onChange={e => this.setState({ objet: e.target.value })}

                
                />
                </div>
                <div className="w-full px-2 py-4">
                    <textarea 
                        placeholder="Message (*)" 
                        type="text" 
                        className="py-3 border-bottom-bleu w-full"
                        name="message"
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value })}

                    />
                </div>
                <ReactNotification />
                <ReCaptchaBlock />

                <div className={`w-full flex justify-center mt-12 mb-12 ${ this.state.submitDisplay } `}>
                     <button onClick={e=>this.handleFormSubmit(e)} className="contactForm bg-black century text-white py-3 px-6 uppercase border-bottom-bleu" type="submit">Envoyer</button>
                </div>
            </form>
        );
    }
}

export default ContactForm;

