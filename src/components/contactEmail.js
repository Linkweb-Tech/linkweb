import React, { Component } from "react";
import axios from "axios";
import "../scss/form.scss";
import "react-notifications-component/dist/theme.css";
import ReCaptchaBlock from "../components/recaptcha";
import { store } from "react-notifications-component";
import { loadReCaptcha } from "react-recaptcha-v3";
import { setTimeout } from "core-js";



class ContactEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false,  
      email: "",
      url: "",
      mailSent: false,
      error: null,
      submitDisplay: "block",
      urlDisplay: "block",
      emailDisplay: "hidden",
      sent: "",
    };
  }

  componentDidMount() {
    loadReCaptcha("6LfT84MUAAAAADxf0gSSMIhpMWh2CIAKHdobtTtq");
  }

  handleFormSubmit(event) {
    event.preventDefault();
    //console.log(JSON.stringify(this.state.mailSent));
    if (
      this.state.email == "" &&
      this.state.url == "" 
    ) {
      store.addNotification({
        id: "notif",
        title: "Le formulaire est vide",
        message:
          "Veuillez saisir les champs obligatoire avant de soumettre le formulaire",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    } else {
      if(this.state.emailDisplay === 'hidden' ){
        axios({
          method: "post",
          url: "https://api.linkweb.fr/data/formEmail.php",
          headers: { "content-type": "application/json" },
          data: this.state,
        })
        .then((result) => {
          this.setState({loading : true});
          setTimeout(() => {
            this.setState({ emailDisplay: 'block' });
            this.setState({ urlDisplay: 'hidden' });
            this.setState({loading : false});
          }, 2000);
        })
        .catch((error) => {
          this.setState({
            error: error.message,
          });
          //console.log(JSON.stringify(this.state));
        });
      }
      if(this.state.urlDisplay === 'hidden'){
        if (
          this.state.email == "" &&
          this.state.url == "" 
        ) {
          store.addNotification({
            id: "notif",
            title: "Le formulaire est vide",
            message:
              "Veuillez saisir les champs obligatoire avant de soumettre le formulaire",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
        } else {
          axios({
            method: "post",
            url: "https://api.linkweb.fr/data/formEmail.php",
            // url:'../form.php',
            headers: { "content-type": "application/json" },
            data: this.state,
          })
          .then((result) => {
            this.setState({ mailSent: result.data.sent });
            this.setState({ emailDisplay: 'block' });
            this.setState({urlDisplay: 'hidden' });
            console.log(result);
            let isOK = result.data.sent;
            if (isOK === true) {
              this.setState({ submitDisplay: "hidden" });
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
                  onScreen: true,
                },
              });
  
              this.setState({
                email: "",
                url: "",
                mailSent: false,
                error: null,
              });
            } else {
  
              let email = "";
              if (!result.data.emailMessage === "") {
                email = "Email ";
              }
              if (!result.data.urlMessage === "") {
                url = "URL ";
              }
              store.addNotification({
                id: "notif3",
                title: "Certains champs sont manquants ou incomplets",
                message:
                  "Veuillez corriger les champs avant de valider ce formulaire : " +
                  url +
                  email,
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 150000,
                  onScreen: true,
                },
              });
            }
          })
          .catch((error) => {
            this.setState({
              error: error.message,
            });
            //console.log(JSON.stringify(this.state));
          });
        }
      }
    }
  }

  // handleFormSubmit(event) {
  //   event.preventDefault();
  //   //console.log(JSON.stringify(this.state.mailSent));
  //   if (
  //     this.state.email == "" &&
  //     this.state.url == "" 
  //   ) {
  //     store.addNotification({
  //       id: "notif",
  //       title: "Le formulaire est vide",
  //       message:
  //         "Veuillez saisir les champs obligatoire avant de soumettre le formulaire",
  //       type: "danger",
  //       insert: "top",
  //       container: "top-right",
  //       animationIn: ["animated", "fadeIn"],
  //       animationOut: ["animated", "fadeOut"],
  //       dismiss: {
  //         duration: 5000,
  //         onScreen: true,
  //       },
  //     });
  //   } else {
  //     axios({
  //       method: "post",
  //       url: "https://api.linkweb.fr/data/formEmail.php",
  //       // url:'../form.php',
  //       headers: { "content-type": "application/json" },
  //       data: this.state,
  //     })
  //       .then((result) => {
  //         this.setState({ mailSent: result.data.sent });
  //         this.setState({ emailDisplay: 'block' });
  //         this.setState({urlDisplay: 'hidden' });
  //         console.log(result);
  //         let isOK = result.data.sent;
  //         if (isOK === true) {
  //           this.setState({ submitDisplay: "hidden" });
  //           store.addNotification({
  //             id: "notif2",
  //             title: "Votre message a bien été pris en compte!",
  //             message: "Nous reviendrons vers vous d'ici les prochaines 24h",
  //             type: "success",
  //             insert: "top",
  //             container: "top-right",
  //             animationIn: ["animated", "fadeIn"],
  //             animationOut: ["animated", "fadeOut"],
  //             dismiss: {
  //               duration: 5000,
  //               onScreen: true,
  //             },
  //           });

  //           this.setState({
  //             email: "",
  //             url: "",
  //             mailSent: false,
  //             error: null,
  //           });
  //         } else {

  //           let email = "";
  //           if (!result.data.emailMessage === "") {
  //             email = "Email ";
  //           }
  //           if (!result.data.urlMessage === "") {
  //             url = "URL ";
  //           }
  //           store.addNotification({
  //             id: "notif3",
  //             title: "Certains champs sont manquants ou incomplets",
  //             message:
  //               "Veuillez corriger les champs avant de valider ce formulaire : " +
  //               url +
  //               email,
  //             type: "danger",
  //             insert: "top",
  //             container: "top-right",
  //             animationIn: ["animated", "fadeIn"],
  //             animationOut: ["animated", "fadeOut"],
  //             dismiss: {
  //               duration: 150000,
  //               onScreen: true,
  //             },
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         this.setState({
  //           error: error.message,
  //         });
  //         //console.log(JSON.stringify(this.state));
  //       });
  //   }
  // }

  render() {
    return (
      <section >
        <h2  className="text-center  text-2xl lg:text-4xl century">
            Vous souhaitez un audit de votre site web ?
        </h2>
      <form
        onSubmit={() => this.handleSubmit}
        className="flex flex-wrap max-w-5xl px-10 mx-auto relative "
      >

        {this.state.loading ?  <div className="loader-wrapper" ><div class="loader"></div></div> : '' }
        
        <div className={`w-full md:w-full px-2 py-4 ${this.state.urlDisplay} `}>
          <input
            placeholder="URL"
            type="text"
            className=" border-bottom-bleu pl-4 py-3 w-full"
            name="nom"
            value={this.state.url}
            onChange={(e) => this.setState({ url: e.target.value })}
          />
        </div>
        <div className={`w-full md:w-full px-2 py-4 ${this.state.emailDisplay} `}>
          <p className="text-center">Afin de vous envoyé l'audit, merci de nous communiquer votre adresse email.</p>
          <input
            placeholder="Email"
            type="email"
            className="py-3 border-bottom-bleu pl-4 w-full"
            name="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        {/* <ReactNotification /> */}
        <ReCaptchaBlock />

        <div
          className={`w-full flex justify-center mt-12 mb-2 ${this.state.submitDisplay} `}
        >
          <button
            onClick={(e) => this.handleFormSubmit(e)}
            className=" bg-black century text-white py-3 px-6 uppercase border-bottom-bleu"
            type="submit"
          >
            Envoyer
          </button>
        </div>
      </form>
  
      </section>
    );
  }
}

export default ContactEmail;
