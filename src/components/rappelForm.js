import React, { Component } from 'react';
import axios from 'axios';
import "../scss/form.scss";

class RappelForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            mailSent: false,
            error: null
        }
    }


    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            email: value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault()
        //console.log(JSON.stringify(this.state));

        axios({
            method: 'post',
            url: 'https://linkweb.fr/data/form.php',
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })

            })
            .catch(error => {
                this.setState({
                    error: error.message,
                })
                //console.log(JSON.stringify(this.state));
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="Saisissez votre e-mail"
                    type="email"
                    className="px-12 py-3 border-bottom-bleu"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}

                />
                <button onClick={e => this.handleFormSubmit(e)} className="bg-black century text-white py-3 px-6 uppercase border-bottom-bleu" type="submit">Envoyer</button>
            </form>
        );
    }
}

export default RappelForm;