import React from 'react';
import axios from 'axios';

class RappelForm extends React.Component {

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

    handleFormSubmit (event) {
        event.preventDefault()
        console.log(JSON.stringify(this.state));

        axios({
            method: 'post',
            url:'https://linkweb/data/form.php',
            headers: {'content-type': 'application/json' },
            data: this.state
        })
        .then(result=>{this.setState({
            mailSent: result.data.sent
            })
            
        })
        .catch(error=>{this.setState({
            error: error.message,
            })
            console.log(JSON.stringify(this.state));
        });


        //const form = new FormData();
        // fetch('https://linkweb.fr/form.php', {
        //     method: "POST", // *GET, POST, PUT, DELETE, etc.
        //     mode: "no-cors", // no-cors, cors, *same-origin
        //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: "omit", // include, *same-origin, omit
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     redirect: "follow", // manual, *folslow, error
        //     referrer: "client", // no-referrer, *client
        //     body: JSON.stringify(this.state), // body data type must match "Content-Type" header
        // }).then(
        //     function(response){
        //         console.log(response)
        //     }
            
        // );
        // const json =  response.json().then(
        //     setSubmitStatus(response.status == 200 ? 'success' : 'error')
        // );
        
        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="Saisissez votre e-mail" 
                    type="email" 
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange} 
                
                />
                <button onClick={e=>this.handleFormSubmit(e)} type="submit">Envoyer</button>
            </form>
        );
    }
}

export default RappelForm;