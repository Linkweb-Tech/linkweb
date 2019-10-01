import React from 'react';
import axios from 'axios';
import "../scss/form.scss";

class ContactForm extends React.Component {

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
            error: null
        }
    }
    



    handleFormSubmit (event) {
        event.preventDefault()
        console.log(JSON.stringify(this.state));

        // axios({
        //     method: 'post',
        //     url:'https://linkweb.fr/data/form.php',
        //     headers: {'content-type': 'application/json' },
        //     data: this.state
        // })
        // .then(result=>{this.setState({
        //     mailSent: result.data.sent
        //     })
            
        // })
        // .catch(error=>{this.setState({
        //     error: error.message,
        //     })
        //     //console.log(JSON.stringify(this.state));
        // });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="flex flex-wrap max-w-5xl px-10 mx-auto">

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
                    onChange={e => this.setState({ telephone: e.target.value })}

                
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
                    <input 
                        placeholder="Message (*)" 
                        type="text" 
                        className="py-3 border-bottom-bleu w-full"
                        name="message"
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value })}

                    />
                </div>
                <div className="w-full flex justify-center mt-12 mb-12">
                     <button onClick={e=>this.handleFormSubmit(e)} className="bg-black century text-white py-3 px-6 uppercase border-bottom-bleu" type="submit">Envoyer</button>
                </div>
               
            </form>
        );
    }
}

export default ContactForm;