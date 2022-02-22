import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";

import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";

import CarouselCoiffure from "../../components/carousel-slides/coiffure-slides";

import Accordion from "../../components/accordion";
import SEO from "../../components/seo";
import SimpleMap from "../../components/simpleMap";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";

import stars from '../../images/stars.png';
import arriereplan from "../../images/creation-site-internet-coiffure.jpg";
import siteinternet from "../../images/site-internet-coiffure-vitrine.jpg";
import referencement from "../../images/referencement-site-internet-coiffeur.jpg";
import webdesign from "../../images/webdesign-site-salon-coiffure.jpg";
import realisation1 from "../../images/fanny-coiffure.jpg";
import realisation2 from "../../images/harmonie-coiffure.jpg";
import realisation3 from "../../images/ludik-coiffure.jpg";
import map from "../../images/map.jpg";
import surmesure from "../../images/web.svg"



class SiteInternetCoiffeur extends Component {

    constructor(props) {
        super(props);

        this.metiers = ['coiffeur', 'artiste', 'barbier', 'capilliculteur', 'créateur', 'chirurgien'];
        this.state = {
            metier: this.metiers[0]
        };
    }

    componentDidMount() {
        let i = 0;
        this.metierInterval = setInterval(() => {
            i++;
            if (this.metiers[i] === undefined) {
                i = 0;
            }
            this.setState({ metier: this.metiers[i] });
        }, 1200);
    }

    componentWillUnmount() {
        clearInterval(this.metierInterval);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Création de site internet pour coiffeur à Toulouse - Linkweb"
                    description="Vous souhaitez créer un site web pour votre salon de coiffure à Toulouse (31) ou à Agen (47) ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-coiffure/"
                    nom="Créer un site internet internet coiffeur"
                    slug="creation-site-internet-toulouse/site-internet-coiffure/"
                />
                {/* <PageTransition
                    defaultStyle={{
                        transition: 'left 200ms cubic-bezier(0.47, 0, 0.75, 0.72)',
                        transitionDuration: '0.5s',
                        transitionDelay: '0.1s',
                        //left: '100%',
                        position: 'relative',
                        width: '100%',
                        zIndex: 20,
                        minHeight: '100vh',
                    }}
                    transitionStyles={{
                        entering: { left: '-100%' },
                        entered: { left: '0' },
                        exiting: { left: '-100%' },

                    }}
                    transitionTime={200}
                > */}

                <section className="flex items-center justify-start w-full mx-auto pb-0 my-32 md:my-42 lg:my-42 xl:my-48 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + arriereplan + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="max-w-6xl mx-auto lg:mx-56 py-2 w-full flex-col items-end">
                        <div className="mt-12 -mb-24 w-full flex flex-col items-center lg:items-start">
                            <div className="w-1/2  text-3xl text-center font-bold text-white century">4.6/5</div>
                            <p className="w-1/2  text-sm text-center font-bold text-white century -mt-2">Avis Google</p>
                            <div className="w-1/2 -mt-8">
                                <svg className="mx-auto block" width="100px" viewBox="0 0 100 125">
                                    <path fill="#FFFFFF" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                    <path fill="#FFFFFF" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                    <path fill="#FFFFFF" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                    <path fill="#FFFFFF" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                    <path fill="#FFFFFF" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z   M89.8,54.7c0.1-0.1,0.4,0,0.4,0l4.2,2.2l-0.8-4.7c0-0.2,0-0.3,0.1-0.4l3.4-3.3l-4.7-0.7c-0.2,0-0.3-0.1-0.4-0.3l-2.1-4.3L89.8,54.7  z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Création de site internet pour <span className="text-bleu">salon de coiffure</span></h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-1/2 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Linkweb, partenaire des coiffeurs à Toulouse et Agen.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-2/3 lg:mx-0 flex flex-col lg:flex-row justify-center pb-24 lg:justify-start">
                            <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                    <div className="w-full bg-bleu century py-2 pl-0 md:pl-48">
                        <Link to="/creation-site-internet-toulouse/" className="px-4 text-md lg:text-lg text-white hover:text-black">Création site internet</Link> <span className=" text-lg text-black"> - </span>
                        <Link to="/creation-site-internet-toulouse/secteurs-activites/" className="px-4 text-md lg:text-lg text-white hover:text-black"> Secteurs d'activités</Link> <span className="text-lg text-black"> - </span>
                        <span className="px-4 text-md lg:text-lg text-white"> Coiffeur</span>
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-white shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <svg width="80px" fill="#37cfee" className="mx-auto block" viewBox="0 0 100 125"><g><path d="M68.544,78.413L21.963,51.949c-0.044-0.025-0.089-0.049-0.135-0.071c-0.646-0.317-1.367-0.484-2.085-0.484   c-1.823,0-3.455,1.016-4.257,2.652l-2.785,5.678c-0.074,0.151-0.131,0.308-0.173,0.469l-4,8.158   c-0.243,0.496-0.038,1.095,0.458,1.338c0.142,0.069,0.292,0.102,0.439,0.102c0.37,0,0.725-0.206,0.899-0.56l3.138-6.399   c0.12,0.089,0.247,0.171,0.383,0.238l0.519,0.254l-3.119,6.359c-0.243,0.496-0.038,1.095,0.458,1.338   c0.142,0.069,0.292,0.102,0.439,0.102c0.37,0,0.725-0.206,0.899-0.56l3.119-6.359l0.921,0.452l-3.119,6.359   c-0.243,0.496-0.038,1.095,0.458,1.338c0.142,0.069,0.292,0.102,0.439,0.102c0.37,0,0.725-0.206,0.899-0.56l3.119-6.359   l0.921,0.452l-3.119,6.359c-0.243,0.496-0.038,1.095,0.458,1.338c0.142,0.069,0.292,0.102,0.439,0.102   c0.37,0,0.725-0.206,0.899-0.56l3.119-6.359l0.921,0.452l-3.119,6.359c-0.243,0.496-0.038,1.095,0.458,1.338   c0.142,0.069,0.292,0.102,0.439,0.102c0.37,0,0.725-0.206,0.899-0.56l3.119-6.359l0.921,0.452l-3.119,6.359   c-0.243,0.496-0.038,1.095,0.458,1.338c0.142,0.069,0.292,0.102,0.439,0.102c0.37,0,0.725-0.206,0.899-0.56l3.119-6.359   l0.921,0.452l-3.119,6.359c-0.243,0.496-0.038,1.095,0.458,1.338c0.142,0.069,0.292,0.102,0.439,0.102   c0.37,0,0.725-0.206,0.899-0.56l3.119-6.359l0.921,0.452l-3.119,6.359c-0.243,0.496-0.038,1.095,0.458,1.338   c0.142,0.069,0.292,0.102,0.439,0.102c0.37,0,0.725-0.206,0.899-0.56l3.119-6.359l0.921,0.452l-3.118,6.359   c-0.243,0.496-0.038,1.095,0.458,1.338c0.142,0.069,0.292,0.102,0.439,0.102c0.37,0,0.725-0.206,0.899-0.56l3.118-6.359   l0.922,0.452l-3.119,6.358c-0.243,0.496-0.038,1.095,0.458,1.338c0.142,0.069,0.292,0.102,0.439,0.102   c0.37,0,0.725-0.206,0.899-0.56l3.119-6.358l0.921,0.452l-3.119,6.359c-0.243,0.496-0.038,1.095,0.458,1.338   c0.142,0.069,0.292,0.102,0.439,0.102c0.37,0,0.725-0.206,0.899-0.56l3.119-6.359l0.921,0.452l-3.119,6.359   c-0.243,0.496-0.038,1.095,0.458,1.338c0.142,0.069,0.292,0.102,0.439,0.102c0.37,0,0.725-0.206,0.899-0.56l3.277-6.681   c0.172-0.015,0.343-0.043,0.51-0.093l3.052-0.917l20.017,9.817c0.349,0.171,0.726,0.255,1.101,0.255   c0.509,0,1.015-0.155,1.445-0.46l0.219-0.155c0.341-0.241,0.616-0.564,0.8-0.939C71.771,82.396,70.833,79.589,68.544,78.413z    M43.5,72.044L18.292,59.681l1.561-3.181l26.075,14.814L43.5,72.044z" /><path d="M64.644,29.712c-0.104,0.542,0.251,1.066,0.793,1.17c0.063,0.012,0.127,0.018,0.189,0.018c0.47,0,0.889-0.333,0.981-0.812   c1.489-7.753-1.404-11.309-1.528-11.457c-0.353-0.42-0.975-0.474-1.398-0.125c-0.423,0.349-0.484,0.977-0.14,1.404   C63.565,19.941,65.937,22.977,64.644,29.712z" /><path d="M95.156,82.461c-6.861-1.083-11.744-7.104-12.778-8.478l0.507-0.44c0.405-0.352,0.451-0.954,0.122-1.37   c-0.003-0.005-0.003-0.01-0.006-0.015c-0.004-0.006-0.008-0.011-0.012-0.017c-0.002-0.002-0.002-0.006-0.005-0.009   c0,0-0.001-0.001-0.002-0.001c-1.914-2.734-3.127-5.097-3.808-7.394c0.56-0.63,0.792-1.519,0.533-2.376   c-0.016-0.052-1.557-5.293-0.271-12.018c0.667-3.494-0.308-5.711-1.091-7.493c-0.91-2.07-1.568-3.565,0.35-7.793   c0.085-0.188,0.138-0.382,0.174-0.578c4.971-1.446,7.706-3.153,7.939-3.303c0.121-0.077,0.234-0.165,0.34-0.262   c0.386-0.354,2.311-2.37,2.311-7.343c0-4.93-2.667-8.396-2.781-8.541c-0.354-0.452-0.852-0.768-1.411-0.896   c-15.811-3.617-22.868-2.259-32.706,2.156c-9.252,4.151-22.607,5.498-22.741,5.511c-0.869,0.085-2.008,0.443-2.697,1.041   c-1.266,1.013-1.604,3.718-1.328,6.201c0.278,2.496,1.18,5.002,2.622,5.733c0.032,0.018,0.066,0.033,0.1,0.05   c0.037,0.016,0.073,0.033,0.109,0.046c0.785,0.356,1.855,0.454,2.658,0.394c0.104-0.009,10.519-0.817,21.971,0.408   c2.937,0.466,5.694,0.716,8.273,0.808c0.695,0.384,1.482,0.817,1.448,0.792c0.056,0.04,1.373,1.012,1.773,4.277   c0.078,0.634,0.154,1.414,0.241,2.301c0.611,6.237,1.634,16.674,6.704,22.387c0.435,0.49,1.032,0.764,1.656,0.818   c0.016,0.079,0.022,0.159,0.059,0.235c1.391,2.908,3.149,5.791,5.225,8.57c0.005,0.007,0.014,0.009,0.02,0.017   c0.002,0.002,0.002,0.006,0.005,0.009c0.016,0.018,0.038,0.024,0.054,0.04c0.194,0.21,0.452,0.336,0.723,0.336   c0.208,0,0.418-0.065,0.598-0.199c0.079-0.059,0.133-0.136,0.189-0.212l0.639-0.555c1.351,1.785,6.503,7.956,13.982,9.136   c0.053,0.008,0.105,0.012,0.157,0.012c0.484,0,0.909-0.352,0.987-0.844C96.074,83.059,95.701,82.547,95.156,82.461z M75.291,66.584   l2.097-0.838c0.7,2.176,1.839,4.399,3.509,6.875l-1.309,1.138C77.912,71.415,76.462,69.009,75.291,66.584z M84.459,23.572   c0,2.111-0.464,3.191-0.687,3.589c-0.131,0.072-0.304,0.164-0.508,0.268c0.49-4.517-0.218-7.252-1.002-8.83   c0.303,0.064,0.59,0.12,0.901,0.188C83.676,19.698,84.459,21.438,84.459,23.572z M32.078,28.602   c0.066,0.591,0.083,1.119,0.075,1.598c-0.11,0.006-0.211,0.013-0.308,0.019c0.01-0.607-0.019-1.229-0.086-1.838   c-0.065-0.583-0.166-1.167-0.297-1.729c0.072-0.008,0.153-0.019,0.23-0.028C31.852,27.179,31.992,27.83,32.078,28.602z    M28.304,24.469c0.381,0.283,1.19,1.649,1.468,4.133c0.288,2.588-0.255,4.12-0.494,4.375c-0.368-0.234-1.211-1.606-1.496-4.153   C27.506,26.339,27.995,24.829,28.304,24.469z M53.852,30.711c-8.11-0.873-15.59-0.773-19.696-0.609   c0.005-0.571-0.026-1.152-0.09-1.723c-0.079-0.707-0.209-1.387-0.376-2.024c4.808-0.689,13.798-2.308,20.918-5.503   c7.906-3.548,13.596-4.844,24.798-2.817c0.062,0.106,0.14,0.205,0.241,0.286c0.027,0.022,2.627,2.23,1.474,10.07   c-4.471,1.812-13.818,4.461-27.143,2.336C53.936,30.722,53.894,30.716,53.852,30.711z M69.966,43.367   c-0.092-0.934-0.172-1.754-0.254-2.422c-0.239-1.944-0.744-3.446-1.322-4.602c1.673-0.13,3.241-0.322,4.697-0.562   c-1.341,4.453-0.24,6.986,0.682,9.083c0.658,1.495,1.133,2.576,0.757,4.542c-0.987,5.164-0.552,9.606-0.108,12.144l-0.011,0.004   C71.269,56.659,70.434,48.145,69.966,43.367z" /></g></svg>
                        <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span>&nbsp;?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br /> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour répondre à vos objectifs.</p>
                        <br />
                        <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 8.4666665 10.583333625"><g transform="translate(0,-288.53332)"><path d="M 21.230469 1.9980469 A 26.150138 26.150138 0 0 0 12.035156 15.113281 L 9.9082031 21.544922 A 2.5688859 2.5688859 0 0 0 10.417969 25.189453 A 3.6916545 3.6916545 0 0 0 10.388672 28.947266 A 0.50016106 0.50016106 0 0 0 11.253906 28.445312 A 2.6916544 2.6916544 0 0 1 11.332031 25.615234 A 2.5688859 2.5688859 0 1 0 12.107422 20.556641 L 12.203125 20.115234 A 1.0000001 1.0000001 0 0 1 12.978516 19.345703 L 13.484375 19.238281 A 1.0000001 1.0000001 0 0 0 14.203125 18.648438 L 21.230469 1.9980469 z M 18.554688 5.7675781 L 13.28125 18.259766 L 12.777344 18.365234 A 1.9999999 1.9999999 0 0 0 11.863281 18.820312 L 12.988281 15.419922 A 25.150137 25.150137 0 0 1 18.554688 5.7675781 z M 11.896484 21.548828 A 1.5688859 1.5688859 0 0 1 13.507812 23.119141 A 1.5688859 1.5688859 0 1 1 10.371094 23.119141 A 1.5688859 1.5688859 0 0 1 11.896484 21.548828 z " transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)" fill="#37cfee" stroke="none" /><path d="m 3.1759776,291.78504 -0.7580948,0.27903 a 0.26458336,0.26458336 0 0 0 -0.164846,0.18294 l -0.033592,0.13178 a 0.26458336,0.26458336 0 0 1 -0.2129049,0.19585 l -0.1183402,0.0201 a 0.6796844,0.6796844 0 1 0 -0.288353,0.56897 l 1.2092279,-0.33848 0.1002532,-0.30282 -0.5648245,0.15812 a 0.52916667,0.52916667 0 0 0 0.1312598,-0.23564 l 0.033589,-0.13229 0.5369163,-0.19794 a 7.1834735,7.1834735 0 0 1 0.1297094,-0.32967 z m -1.9781732,0.40669 a 0.41510106,0.41510106 0 0 1 0.4263284,0.41598 0.4152199,0.4152199 0 1 1 -0.83043983,0 0.41510106,0.41510106 0 0 1 0.40411143,-0.41598 z" fill="#37cfee" stroke="none" /><path d="m 5.9086462,294.63859 -1.27052,1.6183 a 0.13229638,0.13229638 0 0 0 0.20811,0.1634 l 3.06053,-3.8984 a 0.14397429,0.14397429 0 0 0 -0.0243,-0.2021 l -0.63811,-0.501 a 0.13229168,0.13229168 0 0 0 -0.16338,0.2081 l 0.54324,0.4265 -0.0817,0.1041 -0.54325,-0.4265 a 0.13229391,0.13229391 0 0 0 -0.16338,0.2081 l 0.54325,0.4265 -0.0817,0.104 -0.54324,-0.4265 a 0.13229168,0.13229168 0 0 0 -0.16339,0.2081 l 0.54325,0.4265 -0.0817,0.1041 -0.54325,-0.4265 a 0.13229168,0.13229168 0 0 0 -0.16338,0.2081 l 0.54324,0.4265 -0.0817,0.1041 -0.54325,-0.4265 a 0.13229168,0.13229168 0 0 0 -0.16338,0.2081 l 0.54325,0.4265 -0.0817,0.104 -0.54324,-0.4265 a 0.13229168,0.13229168 0 0 0 -0.16339,0.2081 l 0.54325,0.4265 -0.0817,0.1041 -0.54325,-0.4265 a 0.13229168,0.13229168 0 0 0 -0.163391,0.2081 l 0.54325,0.4265 -0.0817,0.104 -0.543249,-0.4264 a 0.13229168,0.13229168 0 0 0 -0.163381,0.2081 z" fill="#37cfee" fill-opacity="1" stroke="none" /><path d="m 4.5685662,292.22779 0.15903,-0.3768 a 6.6543071,6.6543071 0 0 0 1.14853,-0.7782 l -0.97098,0.3575 0.140901,-0.3338 1.859199,-0.6847 a 6.9188904,6.9188904 0 0 1 -2.33668,1.816 z" fill="#37cfee" stroke="none" /></g></svg>
                                <h4>Promotion de vos services</h4>
                            </div>
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M93.21,69.76H6.79a3,3,0,0,1-3-3V37.36a3,3,0,0,1,3-3H93.21a3,3,0,0,1,3,3V66.72A3,3,0,0,1,93.21,69.76ZM6.79,35.31a2.05,2.05,0,0,0-2,2V66.72a2,2,0,0,0,2,2H93.21a2,2,0,0,0,2-2V37.36a2.05,2.05,0,0,0-2-2Z" /><path fill="#37cfee" d="M14.73,43.7H9.93V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M17.91,50.86h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M17.91,58h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M17.91,65.17h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M24,43.7H19.21V38.91H24Zm-3.79-1H23V39.91H20.21Z" /><path fill="#37cfee" d="M24,50.86H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M24,58H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M30,58h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M24,65.17H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M30,65.17h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,65.17H31.22v-4.8H60Zm-27.82-1H59v-2.8H32.22Z" /><path fill="#37cfee" d="M36,58h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z" /><path fill="#37cfee" d="M42,58h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z" /><path fill="#37cfee" d="M48,58h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z" /><path fill="#37cfee" d="M54,58h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,58h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z" /><path fill="#37cfee" d="M66,58H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M66,65.17H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M72.05,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M84.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M90.07,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M72.05,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M30,50.86h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M36,50.86h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z" /><path fill="#37cfee" d="M42,50.86h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z" /><path fill="#37cfee" d="M48,50.86h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z" /><path fill="#37cfee" d="M54,50.86h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,50.86h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z" /><path fill="#37cfee" d="M66,50.86H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M72.05,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M90.07,57.83H82.19a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h6.88V47.06H81.39V50.8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V46.06h9.68Z" /><path fill="#37cfee" d="M30,43.7h-4.8V38.91H30Zm-3.8-1H29V39.91h-2.8Z" /><path fill="#37cfee" d="M36,43.7h-4.8V38.91H36Zm-3.8-1H35V39.91h-2.8Z" /><path fill="#37cfee" d="M42,43.7h-4.8V38.91H42Zm-3.8-1H41V39.91h-2.8Z" /><path fill="#37cfee" d="M48,43.7h-4.8V38.91H48Zm-3.8-1H47V39.91h-2.8Z" /><path fill="#37cfee" d="M54,43.7h-4.8V38.91H54Zm-3.8-1H53V39.91h-2.8Z" /><path fill="#37cfee" d="M60,43.7h-4.8V38.91H60Zm-3.8-1H59V39.91h-2.8Z" /><path fill="#37cfee" d="M66,43.7H61.25V38.91H66Zm-3.79-1H65V39.91H62.25Z" /><path fill="#37cfee" d="M72.05,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M78.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M84.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M90.07,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M82.19,57.83a.5.5,0,0,1-.5-.5v-6h-.8a.5.5,0,0,1,0-1h1.8v7A.5.5,0,0,1,82.19,57.83Z" /></svg>
                                <h4>Rédaction optimisée pour le référencement naturel</h4>
                            </div>
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" fill="#37cfee" viewBox="0 0 32 40.00000125" className="mx-auto block"><g><path d="M 8.4980469 3 A 0.50005 0.50005 0 0 0 8.0058594 3.5078125 L 8.0058594 5 L 3.5 5 A 0.50005 0.50005 0 0 0 3 5.5 L 3 10 L 4 10 L 4 6 L 8.0058594 6 L 8.0058594 7.0917969 C 7.4268315 7.3002802 7.0058594 7.8531634 7.0058594 8.5 C 7.0058594 9.3225 7.6833546 10 8.5058594 10 C 9.3283642 10 10.005859 9.3225 10.005859 8.5 C 10.005859 7.8531634 9.5848871 7.3002802 9.0058594 7.0917969 L 9.0058594 6 L 24.005859 6 L 24.005859 7.0917969 C 23.426832 7.3002802 23.005859 7.8531634 23.005859 8.5 C 23.005859 9.3225 23.683355 10 24.505859 10 C 25.328364 10 26.005859 9.3225 26.005859 8.5 C 26.005859 7.8531634 25.584887 7.3002802 25.005859 7.0917969 L 25.005859 6 L 29.011719 6 L 29.011719 10 L 30.011719 10 L 30.011719 5.5 A 0.50005 0.50005 0 0 0 29.511719 5 L 25.005859 5 L 25.005859 3.5078125 A 0.50005 0.50005 0 0 0 24.498047 3 A 0.50005 0.50005 0 0 0 24.005859 3.5078125 L 24.005859 5 L 9.0058594 5 L 9.0058594 3.5078125 A 0.50005 0.50005 0 0 0 8.4980469 3 z M 8.4511719 8.0097656 A 0.50005 0.50005 0 0 0 8.5585938 8.0097656 C 8.8131823 8.0363022 9.0058594 8.2368365 9.0058594 8.5 C 9.0058594 8.7821 8.7879241 9 8.5058594 9 C 8.2237947 9 8.0058594 8.7821 8.0058594 8.5 C 8.0058594 8.2375107 8.1975675 8.0371578 8.4511719 8.0097656 z M 24.451172 8.0097656 A 0.50005 0.50005 0 0 0 24.558594 8.0097656 C 24.813183 8.0363022 25.005859 8.2368365 25.005859 8.5 C 25.005859 8.7821 24.787924 9 24.505859 9 C 24.223795 9 24.005859 8.7821 24.005859 8.5 C 24.005859 8.2375107 24.197568 8.0371578 24.451172 8.0097656 z M 3.5058594 11 A 0.50004994 0.50004994 0 0 0 3.0058594 11.5 L 3.0058594 29.5 A 0.50004994 0.50004994 0 0 0 3.5058594 30 L 29.505859 30 A 0.50004994 0.50004994 0 0 0 30.005859 29.5 L 30.005859 11.5 A 0.50004994 0.50004994 0 0 0 29.505859 11 L 3.5058594 11 z M 4.0058594 12 L 29.005859 12 L 29.005859 29 L 4.0058594 29 L 4.0058594 12 z M 13.505859 13 A 0.50004997 0.50004997 0 0 0 13.005859 13.5 L 13.005859 15.5 A 0.50004997 0.50004997 0 0 0 13.505859 16 L 15.505859 16 A 0.50004997 0.50004997 0 0 0 16.005859 15.5 L 16.005859 13.5 A 0.50004997 0.50004997 0 0 0 15.505859 13 L 13.505859 13 z M 17.505859 13 A 0.50004997 0.50004997 0 0 0 17.005859 13.5 L 17.005859 15.5 A 0.50004997 0.50004997 0 0 0 17.505859 16 L 19.505859 16 A 0.50004997 0.50004997 0 0 0 20.005859 15.5 L 20.005859 13.5 A 0.50004997 0.50004997 0 0 0 19.505859 13 L 17.505859 13 z M 21.505859 13 A 0.50004997 0.50004997 0 0 0 21.005859 13.5 L 21.005859 15.5 A 0.50004997 0.50004997 0 0 0 21.505859 16 L 23.505859 16 A 0.50004997 0.50004997 0 0 0 24.005859 15.5 L 24.005859 13.5 A 0.50004997 0.50004997 0 0 0 23.505859 13 L 21.505859 13 z M 25.505859 13 A 0.50004997 0.50004997 0 0 0 25.005859 13.5 L 25.005859 15.5 A 0.50004997 0.50004997 0 0 0 25.505859 16 L 27.505859 16 A 0.50004997 0.50004997 0 0 0 28.005859 15.5 L 28.005859 13.5 A 0.50004997 0.50004997 0 0 0 27.505859 13 L 25.505859 13 z M 11.492188 13.683594 A 0.50005 0.50005 0 0 0 11.148438 13.832031 L 10.173828 14.796875 L 9.8613281 14.488281 A 0.50005 0.50005 0 1 0 9.1582031 15.199219 L 9.8222656 15.855469 A 0.50005 0.50005 0 0 0 10.525391 15.855469 L 11.851562 14.542969 A 0.50005 0.50005 0 0 0 11.492188 13.683594 z M 6.0058594 14 L 6.0058594 15 L 7.0058594 15 L 7.0058594 14 L 6.0058594 14 z M 14.005859 14 L 15.005859 14 L 15.005859 15 L 14.005859 15 L 14.005859 14 z M 18.005859 14 L 19.005859 14 L 19.005859 15 L 18.005859 15 L 18.005859 14 z M 22.005859 14 L 23.005859 14 L 23.005859 15 L 22.005859 15 L 22.005859 14 z M 26.005859 14 L 27.005859 14 L 27.005859 15 L 26.005859 15 L 26.005859 14 z M 5.5058594 17 A 0.50004997 0.50004997 0 0 0 5.0058594 17.5 L 5.0058594 19.5 A 0.50004997 0.50004997 0 0 0 5.5058594 20 L 7.5058594 20 A 0.50004997 0.50004997 0 0 0 8.0058594 19.5 L 8.0058594 17.5 A 0.50004997 0.50004997 0 0 0 7.5058594 17 L 5.5058594 17 z M 9.5058594 17 A 0.50004997 0.50004997 0 0 0 9.0058594 17.5 L 9.0058594 19.5 A 0.50004997 0.50004997 0 0 0 9.5058594 20 L 11.505859 20 A 0.50004997 0.50004997 0 0 0 12.005859 19.5 L 12.005859 17.5 A 0.50004997 0.50004997 0 0 0 11.505859 17 L 9.5058594 17 z M 13.505859 17 A 0.50004997 0.50004997 0 0 0 13.005859 17.5 L 13.005859 19.5 A 0.50004997 0.50004997 0 0 0 13.505859 20 L 15.505859 20 A 0.50004997 0.50004997 0 0 0 16.005859 19.5 L 16.005859 17.5 A 0.50004997 0.50004997 0 0 0 15.505859 17 L 13.505859 17 z M 17.505859 17 A 0.50004997 0.50004997 0 0 0 17.005859 17.5 L 17.005859 19.5 A 0.50004997 0.50004997 0 0 0 17.505859 20 L 19.505859 20 A 0.50004997 0.50004997 0 0 0 20.005859 19.5 L 20.005859 17.5 A 0.50004997 0.50004997 0 0 0 19.505859 17 L 17.505859 17 z M 25.505859 17 A 0.50004997 0.50004997 0 0 0 25.005859 17.5 L 25.005859 19.5 A 0.50004997 0.50004997 0 0 0 25.505859 20 L 27.505859 20 A 0.50004997 0.50004997 0 0 0 28.005859 19.5 L 28.005859 17.5 A 0.50004997 0.50004997 0 0 0 27.505859 17 L 25.505859 17 z M 23.494141 17.683594 A 0.50005 0.50005 0 0 0 23.150391 17.832031 L 22.173828 18.796875 L 21.861328 18.488281 A 0.50005 0.50005 0 1 0 21.158203 19.199219 L 21.822266 19.855469 A 0.50005 0.50005 0 0 0 22.525391 19.855469 L 23.853516 18.542969 A 0.50005 0.50005 0 0 0 23.494141 17.683594 z M 6.0058594 18 L 7.0058594 18 L 7.0058594 19 L 6.0058594 19 L 6.0058594 18 z M 10.005859 18 L 11.005859 18 L 11.005859 19 L 10.005859 19 L 10.005859 18 z M 14.005859 18 L 15.005859 18 L 15.005859 19 L 14.005859 19 L 14.005859 18 z M 18.005859 18 L 19.005859 18 L 19.005859 19 L 18.005859 19 L 18.005859 18 z M 26.005859 18 L 27.005859 18 L 27.005859 19 L 26.005859 19 L 26.005859 18 z M 5.5058594 21 A 0.50004997 0.50004997 0 0 0 5.0058594 21.5 L 5.0058594 23.5 A 0.50004997 0.50004997 0 0 0 5.5058594 24 L 7.5058594 24 A 0.50004997 0.50004997 0 0 0 8.0058594 23.5 L 8.0058594 21.5 A 0.50004997 0.50004997 0 0 0 7.5058594 21 L 5.5058594 21 z M 9.5058594 21 A 0.50004997 0.50004997 0 0 0 9.0058594 21.5 L 9.0058594 23.5 A 0.50004997 0.50004997 0 0 0 9.5058594 24 L 11.505859 24 A 0.50004997 0.50004997 0 0 0 12.005859 23.5 L 12.005859 21.5 A 0.50004997 0.50004997 0 0 0 11.505859 21 L 9.5058594 21 z M 17.505859 21 A 0.50004997 0.50004997 0 0 0 17.005859 21.5 L 17.005859 23.5 A 0.50004997 0.50004997 0 0 0 17.505859 24 L 19.505859 24 A 0.50004997 0.50004997 0 0 0 20.005859 23.5 L 20.005859 21.5 A 0.50004997 0.50004997 0 0 0 19.505859 21 L 17.505859 21 z M 21.505859 21 A 0.50004997 0.50004997 0 0 0 21.005859 21.5 L 21.005859 23.5 A 0.50004997 0.50004997 0 0 0 21.505859 24 L 23.505859 24 A 0.50004997 0.50004997 0 0 0 24.005859 23.5 L 24.005859 21.5 A 0.50004997 0.50004997 0 0 0 23.505859 21 L 21.505859 21 z M 25.505859 21 A 0.50004997 0.50004997 0 0 0 25.005859 21.5 L 25.005859 23.5 A 0.50004997 0.50004997 0 0 0 25.505859 24 L 27.505859 24 A 0.50004997 0.50004997 0 0 0 28.005859 23.5 L 28.005859 21.5 A 0.50004997 0.50004997 0 0 0 27.505859 21 L 25.505859 21 z M 15.494141 21.681641 A 0.50005 0.50005 0 0 0 15.148438 21.830078 L 14.173828 22.796875 L 13.861328 22.488281 A 0.50005 0.50005 0 1 0 13.158203 23.199219 L 13.822266 23.855469 A 0.50005 0.50005 0 0 0 14.525391 23.855469 L 15.851562 22.541016 A 0.50005 0.50005 0 0 0 15.494141 21.681641 z M 6.0058594 22 L 7.0058594 22 L 7.0058594 23 L 6.0058594 23 L 6.0058594 22 z M 10.005859 22 L 11.005859 22 L 11.005859 23 L 10.005859 23 L 10.005859 22 z M 18.005859 22 L 19.005859 22 L 19.005859 23 L 18.005859 23 L 18.005859 22 z M 22.005859 22 L 23.005859 22 L 23.005859 23 L 22.005859 23 L 22.005859 22 z M 26.005859 22 L 27.005859 22 L 27.005859 23 L 26.005859 23 L 26.005859 22 z M 5.5058594 25 A 0.50004997 0.50004997 0 0 0 5.0058594 25.5 L 5.0058594 27.5 A 0.50004997 0.50004997 0 0 0 5.5058594 28 L 7.5058594 28 A 0.50004997 0.50004997 0 0 0 8.0058594 27.5 L 8.0058594 25.5 A 0.50004997 0.50004997 0 0 0 7.5058594 25 L 5.5058594 25 z M 9.5058594 25 A 0.50004997 0.50004997 0 0 0 9.0058594 25.5 L 9.0058594 27.5 A 0.50004997 0.50004997 0 0 0 9.5058594 28 L 11.505859 28 A 0.50004997 0.50004997 0 0 0 12.005859 27.5 L 12.005859 25.5 A 0.50004997 0.50004997 0 0 0 11.505859 25 L 9.5058594 25 z M 6.0058594 26 L 7.0058594 26 L 7.0058594 27 L 6.0058594 27 L 6.0058594 26 z M 10.005859 26 L 11.005859 26 L 11.005859 27 L 10.005859 27 L 10.005859 26 z M 14.005859 26 L 14.005859 27 L 15.005859 27 L 15.005859 26 L 14.005859 26 z M 18.005859 26 L 18.005859 27 L 19.005859 27 L 19.005859 26 L 18.005859 26 z M 22.005859 26 L 22.005859 27 L 23.005859 27 L 23.005859 26 L 22.005859 26 z M 26.005859 26 L 26.005859 27 L 27.005859 27 L 27.005859 26 L 26.005859 26 z " /></g></svg>
                                <h4>Outil de prise de rendez-vous en ligne</h4>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Votre devis gratuit" />
                        </div>
                    </div>
                    
                </section>
                <section className="w-full lg:w-1/2 px-10 mt-16 lg:-mt-64 mb-32">
                    <h3 className="century text-3xl text-center">
                        D'après Junto, <span className="text-bleu">78%</span> des recherches mobiles locales ont abouti à un achat hors ligne.
            </h3>
                    <br />
                    <p className="text-center century"><b>Source :</b> <a className="text-bleu hover:text-black" href="https://junto.digital/blog/seo-stats/" target="_blank" rel="noreferrer">Junto, 2017</a></p>
                </section>
                <section className="text-center text-black text-2xl century mx-12 mt-8 lg:mx-0">
                    <h2 className="century leading-none">Répondre à vos<br /><span className="text-6xl text-bleu font-bold">BESOINS</span></h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Notre rôle : mettre en place un projet adapté à l'image de votre entreprise.</h3>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Site internet</span><br /><span className="font-bold text-5xl md:text-6xl">VITRINE</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">La <strong className="font-normal">création d’un site internet vitrine</strong> est essentielle pour <strong className="font-normal">développer sa présence sur le web</strong>. Faire connaître son <strong className="font-normal">salon de coiffure</strong> demande la mise en place d'une interface facilitant l’accès à l’<strong className="font-normal">information que les internautes recherchent</strong>.
                <br /><br />
                            Par ailleurs, le contenu mis en place sur un <strong className="font-normal">site internet vitrine</strong> est réalisé pour <strong className="font-normal">vous rendre visible</strong> tout en présentant votre salon de la manière la plus fidèle possible. Ceci est indispensable pour susciter l’<strong className="font-normal">intérêt des internautes</strong>.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Référencement</span><br /><span className="font-bold text-6xl">LOCAL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Les internautes à la recherche d’un <strong className="font-normal">salon de coiffure professionnel</strong> <strong className="font-normal">sur le Web</strong> doivent être en mesure d’accéder à <strong className="font-normal">votre site web</strong>. Nous mettons en place une <strong className="font-normal">stratégie de référencement local</strong>. Cette dernière vous permettra de <strong className="font-normal">gagner en visibilité auprès d’utilisateurs</strong> ciblés localement.
                <br /><br />
                            Du <strong className="font-normal">choix des mots-clés</strong> à la <strong className="font-normal">création des contenus de la stratégie</strong>, tout est pensé pour vous permettre d’<strong className="font-normal">attirer des utilisateurs ciblés</strong> et ainsi <strong className="font-normal">générer du trafic sur votre site internet</strong>. Le <strong className="font-normal">contenu du site</strong> est travaillé pour permettre à ces derniers de trouver les réponses qu’ils cherchaient et ainsi <strong className="font-normal">prendre contact</strong> avec vous.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Design</span><br /><span className="font-bold text-6xl">PERCUTANT</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">La <strong className="font-normal">création d’un site internet pour un salon de coiffure</strong> doit permettre la bonne lecture des informations principales. Des services proposés à la présentation de ses réalisations, il est important de définir un univers visuel cohérent et efficace.
                <br /><br />
                            Par ailleurs, <strong className="font-normal">nos sites internet sont responsive design</strong>, c’est à dire que l’affichage du site s’adapte en fonction du support de lecture (<strong className="font-normal">smartphone, tablette, ordinateur</strong>, etc.). Le <strong className="font-normal">webdesign d’un site internet pour un salon de coiffure</strong> doit <strong className="font-normal">simplifier la navigation</strong> et <strong className="font-normal">proposer une expérience utilisateur optimale</strong>.</p>
                    </div>
                </section>
                <section className="text-center text-black text-2xl mx-auto lg:mx-0 century my-10">
                    <h2 className="century leading-none">Une solution<br /><span className="text-4xl lg:text-6xl text-bleu font-bold">FONCTIONNELLE</span></h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Nous créons un site internet professionnel et qui répond aux problématiques du Web.</h3>
                </section>
                <section className="flex justify-center flex-col items-center">
                    <div className="w-full flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="12.937 19.988 486.829 591.2012500000001"><g><path fill="#37cfee" d="M453.892,19.988H58.84c-25.311,0-45.903,20.595-45.903,45.909v263.348c0,25.312,20.592,45.903,45.903,45.903h83.62v81.085   c0,20.245,16.483,36.716,36.744,36.716h152.511c21.244,0,38.528-17.287,38.528-38.535v-79.265h83.648   c25.295,0,45.874-20.592,45.874-45.903V65.897C499.766,40.583,479.187,19.988,453.892,19.988z M58.84,27.988h395.052   c20.884,0,37.874,17.006,37.874,37.909v38.814H20.937V65.897C20.937,44.994,37.94,27.988,58.84,27.988z M237.442,197.73h37.855   c29.951,0,54.318,24.355,54.318,54.291V306.2H183.117v-54.18c0-14.968,6.092-28.54,15.929-38.371   C208.883,203.819,222.465,197.73,237.442,197.73z M362.243,454.414c0,16.837-13.695,30.535-30.528,30.535H179.204   c-15.85,0-28.744-12.882-28.744-28.716v-85.085v-55.511c0-0.806,0.647-1.438,1.474-1.438h26.075   c0.354,0.102,0.72,0.175,1.107,0.175h154.499c0.387,0,0.753-0.072,1.107-0.175h26.076c0.81,0,1.444,0.632,1.444,1.438V454.414z    M453.892,367.149h-83.647v-51.512c0-5.204-4.236-9.438-9.444-9.438h-0.001h-23.183v-54.18c0-34.347-27.956-62.291-62.318-62.291   h-37.855c-17.184,0-32.765,6.986-44.051,18.266c-11.286,11.279-18.276,26.852-18.276,44.026v54.178h-23.182   c-5.224,0-9.474,4.233-9.474,9.438v0.001v51.511H58.84c-20.9,0-37.903-17.003-37.903-37.903V112.711h470.829v216.535   C491.766,350.146,474.775,367.149,453.892,367.149z" /><path fill="#37cfee" d="M256.369,364.854c-11.108,0-20.146,9.034-20.146,20.14c0,7.416,3.978,14.056,10.338,17.592v27.703c0,2.209,1.791,4,4,4   h11.611c2.209,0,4-1.791,4-4v-27.703c6.36-3.537,10.338-10.177,10.338-17.592C276.51,373.888,267.475,364.854,256.369,364.854z    M260.719,396.329c-1.536,0.599-2.547,2.078-2.547,3.727v26.232h-3.611v-26.232c0-1.648-1.011-3.128-2.547-3.727   c-4.66-1.817-7.791-6.373-7.791-11.336c0-6.693,5.449-12.14,12.146-12.14c6.694,0,12.141,5.446,12.141,12.14   C268.51,389.956,265.379,394.512,260.719,396.329z" /><path fill="#37cfee" d="M65.828,82.413c8.805,0,15.969-7.164,15.969-15.969c0-8.809-7.164-15.976-15.969-15.976   c-8.809,0-15.975,7.167-15.975,15.976C49.853,75.25,57.02,82.413,65.828,82.413z M65.828,58.468c4.394,0,7.969,3.578,7.969,7.976   c0,4.394-3.575,7.969-7.969,7.969c-4.397,0-7.975-3.575-7.975-7.969C57.853,62.046,61.431,58.468,65.828,58.468z" /><path fill="#37cfee" d="M114.807,82.413c8.809,0,15.975-7.164,15.975-15.97c-0.002-8.809-7.168-15.975-15.975-15.975   c-8.809,0-15.975,7.167-15.975,15.976C98.832,75.25,105.999,82.413,114.807,82.413z M114.807,58.468   c4.396,0,7.974,3.579,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969s-7.975-3.575-7.975-7.969   C106.832,62.046,110.41,58.468,114.807,58.468z" /><path fill="#37cfee" d="M163.815,82.413c8.809,0,15.975-7.164,15.975-15.969c0-8.809-7.167-15.976-15.975-15.976   c-8.805,0-15.969,7.167-15.969,15.976C147.846,75.25,155.01,82.413,163.815,82.413z M163.815,58.468   c4.397,0,7.975,3.578,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969c-4.394,0-7.969-3.575-7.969-7.969   C155.846,62.046,159.421,58.468,163.815,58.468z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Site internet sécurisé</span></h4>
                            <p>Nous garantissons la mise en place de <strong className="font-normal">certificat sécurisé</strong> pour une navigation en toute confiance.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   " /><path fill="#37cfee" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z" /><g><path fill="#37cfee" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z" /><rect x="72.041" y="56.851" width="0.312" height="5.159" /></g><path fill="#37cfee" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z" /><path fill="#37cfee" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Site web accessible tous supports</span></h4>
                            <p>Les sites internet que nous créons s'adaptent au <strong>support de navigation</strong> pour une accessibilité sans faille.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 65 81.25"><g><rect x="16.4" y="3.5" width="10.5" height="1.5" fill="#37cfee" /><rect x="28.6" y="3.5" width="1.5" height="1.5" fill="#37cfee" /><path fill="#37cfee" d="M23.3,56.9c-1.6,0-2.9,1.3-2.9,2.9c0,1.6,1.3,2.9,2.9,2.9c1.6,0,2.9-1.3,2.9-2.9C26.2,58.1,24.9,56.9,23.3,56.9z    M23.3,61.1c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4C24.7,60.5,24,61.1,23.3,61.1z" /><path fill="#37cfee" d="M63.6,21.3h-5v-3.9h-4.8v3.9h-8.5V4.5c0-2.6-2.1-4.8-4.8-4.8H6.2c-2.6,0-4.8,2.1-4.8,4.8v56c0,2.6,2.1,4.8,4.8,4.8h34.3   c2.6,0,4.8-2.1,4.8-4.8V49.8h18.4V21.3z M55.2,18.9h1.8v4.4h-1.8V18.9z M6.2,1.2h34.3c1.8,0,3.3,1.5,3.3,3.3v3.1H2.9V4.5   C2.9,2.7,4.4,1.2,6.2,1.2z M40.4,63.7H6.2c-1.8,0-3.3-1.5-3.3-3.3v-5h40.8v5C43.7,62.3,42.2,63.7,40.4,63.7z M43.7,54H2.9v-45h40.8   v12.3H32.4v-3.9h-4.8v3.9h-5v28.5h21.1V54z M30.9,18.9v4.4h-1.8v-4.4H30.9z M62.1,48.3h-38V22.8h3.5v1.9h4.8v-1.9h21.3v1.9h4.8   v-1.9h3.5V48.3z" /><path fill="#37cfee" d="M26.2,35.2h9.6v-8.5h-9.6V35.2z M27.7,28.2h6.6v5.5h-6.6V28.2z" /><path fill="#37cfee" d="M38.3,35.2h9.6v-8.5h-9.6V35.2z M39.8,28.2h6.6v5.5h-6.6V28.2z" /><path fill="#37cfee" d="M50.3,35.2h9.6v-8.5h-9.6V35.2z M51.8,28.2h6.6v5.5h-6.6V28.2z" /><path fill="#37cfee" d="M26.2,46.2h9.6v-8.5h-9.6V46.2z M27.7,39.2h6.6v5.5h-6.6V39.2z" /><path fill="#37cfee" d="M38.3,46.2h9.6v-8.5h-9.6V46.2z M39.8,39.2h6.6v5.5h-6.6V39.2z" /><path fill="#37cfee" d="M50.3,46.2h9.6v-8.5h-9.6V46.2z M51.8,39.2h6.6v5.5h-6.6V39.2z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Module de réservation en ligne</span></h4>
                            <p>Nous vous permettons de faciliter la prise de rendez-vous via la création d'un module en ligne.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                        <div className="w-full -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" fill="#37cfee" className="mx-auto block" viewBox="0 0 100 125"><path d="M83.722,30.426C79.494,15.966,73.495,10.58,66.171,7.443c-1.097-0.47-2.318-0.788-3.599-0.992  c-2.126-0.339-4.246,0.685-5.572,2.619c-0.459,0.67-1.221,0.992-1.961,0.828c-1.21-0.267-1.933-0.536-5.193-1.752  c-5.964-2.221-9.824,0.255-9.824,0.255s3.112-0.125,4.636,1.318c-1.505-0.764-4.098-1.032-8.426,1.079  c-8.481,4.133-8.329,11.544-14.232,13.816c-6.04,2.332-7.792-0.661-7.792-0.661s2.181,4.343,6.092,5.124l-0.011,0.011  c0,0,0.035-0.001,0.089,0.006c0.036,0.007,0.071,0.017,0.107,0.022c0.437,0.117,1.406,0.742,0.758,4.055l0,0  c-0.429,1.81-0.858,3.957-1.008,5.824c-0.342,4.274,0.727,7.201,1.054,15.205c0.282,6.84,1.813,3.333,3.638,8.374  c0.616,1.69,0.643,3.592,0.643,3.592c0.678,0.199,2.453-4.105,1.177-11.582c-0.518-3.032,0.886-11.343,4.423-16.287v-0.001  l0.002-0.002c0.365-0.51,0.753-0.981,1.164-1.41c10.205-11.754,19.792-3.963,24.331,1.278c1.744,2.013,2.748,3.65,2.748,3.65v0  c5.178,7.414,15.208,25.112,8.053,42.977c0,0,3.824-3.573,6.837-9.397c-0.394,1.586-0.806,2.915-1.161,3.989  c-1.407,4.265-8.616,14.232-8.616,14.232S81.107,78.027,83.7,62.023C84.52,56.97,87.955,44.883,83.722,30.426z" /></svg>
                            <h4 className="font-bold century"><span className="font-bold">Exposition de vos réalisations</span></h4>
                            <p>Nous valorisons votre travail au sein d'un espace dédié pour donner envie aux utilisateurs de travailler avec vous.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#37cfee" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#37cfee" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#37cfee" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Optimisation SEO</span></h4>
                            <p>Nous optimisons les contenus de votre site pour une <strong className="font-normal">visibilité maximale</strong> grâce au <strong className="font-normal">référencement naturel</strong>.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M66.598,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44c-0.556,0.081-1.017,0.47-1.191,1.004  c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014c-0.095,0.554,0.133,1.113,0.587,1.443  c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C67.673,71.235,67.16,70.916,66.598,70.916L66.598,70.916z M50,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169L50,82.719l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C51.074,71.235,50.562,70.916,50,70.916L50,70.916z M33.402,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423  l2.707,1.423c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014  l2.19-2.135c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C34.476,71.235,33.963,70.916,33.402,70.916L33.402,70.916z" /><path fill="#37cfee" d="M72.131,50.738h-25.82v-1.475h25.82V50.738z M50,52.951h-3.689v1.475H50V52.951z M72.131,52.951H53.689v1.475  h18.443V52.951z M61.066,56.639H46.311v1.475h14.754V56.639z M72.131,56.639h-7.377v1.475h7.377V56.639z M57.377,60.328H46.311  v1.475h11.066V60.328z M61.066,27.131H46.311v1.475h14.754V27.131z M72.131,27.131h-7.377v1.475h7.377V27.131z M72.131,30.82h-25.82  v1.475h25.82V30.82z M57.377,34.508H46.311v1.475h11.066V34.508z M72.131,34.508H61.066v1.475h11.066V34.508z M64.754,38.197H46.311  v1.475h18.443V38.197z" /><path fill="#37cfee" d="M75.82,12.377h-4.338c-0.741-1.139-1.62-2.329-2.458-3.404l-0.257-0.33l-0.416,0.052  c-2.313,0.288-8.743,0.858-10.692,0.051c-0.341-0.141-0.869-0.895-1.294-1.501C55.592,6.141,54.793,5,53.689,5h-7.377  c-1.104,0-1.904,1.141-2.677,2.244c-0.425,0.606-0.953,1.36-1.294,1.501c-1.947,0.807-8.379,0.237-10.692-0.051l-0.416-0.052  l-0.257,0.33c-0.838,1.075-1.717,2.265-2.458,3.404H24.18c-2.441,0-4.426,1.986-4.426,4.426v73.77c0,2.441,1.985,4.426,4.426,4.426  H75.82c2.441,0,4.426-1.985,4.426-4.426v-73.77C80.246,14.363,78.26,12.377,75.82,12.377z M31.886,10.208  c1.891,0.218,8.608,0.899,11.02-0.1c0.737-0.305,1.32-1.137,1.937-2.017c0.396-0.564,1.132-1.615,1.469-1.615h7.377  c0.337,0,1.073,1.051,1.469,1.615c0.617,0.88,1.2,1.712,1.937,2.017c2.412,0.999,9.129,0.318,11.02,0.1  c1.698,2.219,3.397,4.834,3.684,5.857H28.201C28.489,15.043,30.188,12.427,31.886,10.208z M78.77,90.574  c0,1.627-1.324,2.951-2.951,2.951H24.18c-1.627,0-2.951-1.324-2.951-2.951v-73.77c0-1.627,1.324-2.951,2.951-2.951h3.449  c-0.727,1.324-1.12,2.457-0.82,3.071c0.192,0.392,0.578,0.618,1.059,0.618h44.262c0.482,0,0.867-0.225,1.059-0.618  c0.3-0.614-0.093-1.746-0.82-3.071h3.449c1.627,0,2.951,1.324,2.951,2.951V90.574z M50,13.115c-1.424,0-2.582-1.158-2.582-2.582  S48.576,7.951,50,7.951s2.582,1.158,2.582,2.582S51.424,13.115,50,13.115z M50,9.426c-0.61,0-1.107,0.496-1.107,1.107  c0,0.61,0.496,1.107,1.107,1.107s1.107-0.496,1.107-1.107C51.107,9.923,50.61,9.426,50,9.426z" /><path fill="#37cfee" d="M38.934,50v11.066H27.869V50H38.934 M38.934,48.525H27.869c-0.815,0-1.475,0.661-1.475,1.475v11.066  c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475V50C40.41,49.185,39.749,48.525,38.934,48.525  L38.934,48.525z M33.483,38.197c-0.008,0-0.016,0-0.024,0c-0.302,0-0.588-0.12-0.792-0.343l-3.77-4.111  c-0.413-0.451-0.382-1.147,0.069-1.559c0.451-0.412,1.151-0.379,1.563,0.071l2.989,3.267l7.698-7.698  c0.432-0.432,1.132-0.432,1.565,0c0.432,0.432,0.432,1.133,0,1.565l-8.516,8.5C34.058,38.097,33.776,38.197,33.483,38.197z   M38.934,34.271v4.664h-5.451H33.45h-5.581V27.869h11.066v1.194l1.45-1.45c-0.122-0.692-0.722-1.22-1.45-1.22H27.869  c-0.815,0-1.475,0.661-1.475,1.475v11.066c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475v-6.136  L38.934,34.271z" /></svg>
                            <h4 className="font-bold century"><span className="font-bold">Appel mensuel et suivi régulier</span></h4>
                            <p>Nous effectuons une <strong className="font-normal">maintenance</strong> et un suivi pour vous tenir informé de l'activité de <strong className="font-normal">votre site web</strong>.</p>
                        </div>
                    </div>
                </section>
                <section className="text-center text-black text-2xl century my-10 mx-12 lg:mx-0">
                    <h2 className="century leading-tight"><Link to="/creation-site-internet-toulouse/" className="text-black hover:text-bleu">Création de site internet à Toulouse</Link> :<br /><span className="text-4xl lg:text-6xl text-bleu font-bold">VOTRE PROJET EN 4 ÉTAPES</span></h2>
                    <hr className="blue"></hr>
                </section>
                <section className="flex justify-center">
                    <div className="w-full md:w-2/3">
                        <div className="w-full md:w-2/3 px-10 py-10 md:py-16  ml-0">
                            <h3 className="century capitalize text-2xl pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">1/</span>VOUS PRENEZ CONTACT POUR METTRE EN PLACE VOTRE PROJET
                    </h3>
                            <h4 className="century text-lg  pb-3 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">En nous contactant, notre chef de projet étudiera votre demande et vous recontactera pour préciser la définition de vos besoins.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify century">Plus votre demande sera détaillée, plus nous serons à même de vous proposer une solution pertinente et performante. N'hésitez pas à nous renseigner sur vos <strong className="font-normal">objectifs, cibles</strong> et autres motivations à <strong className="font-normal">créer un site web pour votre entreprise</strong>.</p>
                        </div>
                        <div className="w-full md:w-2/3 px-10 py-10 md:py-16 ml-auto">
                            <h3 className="century capitalize text-2xl tracking-wider pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">2/</span>NOUS DÉFINISSONS VOTRE PROJET EN FONCTION DE VOS BESOINS
                    </h3>
                            <h4 className="century text-lg  pb-3 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">Une fois votre demande formulée, nous nous rencontrons pour mieux cerner vos besoins et vous mettre en place une solution qui vous correspond.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify century">Il s'agit d'une étape fondamentale afin de comprendre vos besoins, votre activité ainsi que vos ambitions. C'est à partir de cette étape que nous définissons le mode opératoire pour votre création ainsi que la <strong className="font-normal">stratégie de référencement de site internet</strong>.</p>
                        </div>
                        <div className="w-full md:w-2/3 px-10 py-10 md:py-16 ml-0">
                            <h3 className="century capitalize text-2xl pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">3/</span>VOUS VALIDEZ LE PROJET UNE FOIS QU’IL VOUS CORRESPOND
                    </h3>
                            <h4 className="century text-lg pb-3 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">À la suite de notre rencontre, nous vous proposons une maquette visuelle et des textes rédigés et optimisés spécifiquement pour votre site web.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify century">La livraison de la <strong className="font-normal">maquette</strong> est le moment pour vous de suggérer vos ajustements quant aux textes rédigés ainsi que sur l'aspect visuel du site. Une fois les modifications réalisées, vous serez libres de <strong className="font-normal">valider la maquette de votre futur site web</strong>.</p>
                        </div>
                        <div className="w-full md:w-2/3 px-10 py-10 md:py-16 ml-auto">
                            <h3 className="century capitalize text-2xl pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">4/</span>NOUS METTONS EN ROUTE LA RÉALISATION DE VOTRE PROJET
                    </h3>
                            <h4 className="century text-lg pb-3 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">Après que vous ayez validé notre proposition graphique et éditoriale, les techniciens de notre <Link to="/" className="text-bleu hover:text-black font-bold">agence web à Toulouse</Link> réalisent la mise en ligne votre site internet.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify century">Lorsque <strong className="font-normal">votre site internet</strong> est publié sur le <strong className="font-normal">nom de domaine</strong> choisi, nos <strong className="font-normal">référenceurs web</strong> mettent en place toutes les optimisations nécessaires pour <strong className="font-normal">être visible sur les moteurs de recherche</strong>. Par la suite, des mises à jours et modifications sont régulièrement effectuées grâce au suivi mis en place.</p>
                        </div>
                    </div>
                </section>
                <section className="text-center text-black text-2xl century my-10 mx-auto lg:mx-0">
                    <h2 className="century leading-tight">Création de site internet à Toulouse :<br /><span className="text-4xl lg:text-6xl text-bleu font-bold">NOUS LES ACCOMPAGNONS</span></h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Nous travaillons tous les jours avec des professionnels d'horizons différents <br />pour leur proposer une solution Web fonctionnelle.</h3>
                </section>
                <section className="w-full flex justify-center">
                    <div className="w-full lg:w-2/3 flex flex-col mb-16 lg:flex-row justify-center text-white text-center text-2xl century">
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation1 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="http://fanny-coiffure-agen.fr" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Fanny Coiffure</h4></a>
                        </div>

                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation2 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="http://www.harmonie-coiffure-47.fr" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Harmonie Coiffure</h4></a>
                        </div>
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation3 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="http://ludikstyl.fr" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">LudikStyl' Coiffure</h4></a>
                        </div>
                    </div>
                </section>
                <section className="w-full flex my-12 flex-col lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence</span> ?</h3>
                        <h4>Linkweb soutient les professionnels souhaitant développer leur projet sur le Web.</h4>
                    </div>
                    <div className="w-full mx-auto block lg:w-3/12">
                        <RoundButton className="items-center" color="darkgrey" text="Contactez-nous" url="/contact-agence-web-toulouse/" />
                    </div>
                </section>
                <section className="max-w-4xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet pour salon de coiffure :<br /><span className="font-bold">Nos clients sont satisfaits</span>
                    </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-center justify-center century text-center mt-3 px-6 mb-12">
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up"*/>
                        <img
                            src={stars}
                            alt="Création site internet Agen"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">L'Auberge des Compagnons</div>
                        <div className="italic">« Depuis l'ouverture de mon restaurant nous travaillons avec Linkweb, ils ont conçu notre site et géré le référencement, les mises en page et le design... Aujourd'hui grâce à notre site Internet c'est une cinquantaine de nouveaux clients par mois qui poussent la porte de notre établissement. »</div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
                        <img
                            src={stars}
                            alt="Création site internet Toulouse"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Ferme Auberge Marquine</div>
                        <div className="italic">« Très satisfait du site de Linkweb, ils sont très réactifs et surtout à l'écoute. Un grand merci à Anthony qui fait le point chaque mois afin de nous tenir informés de notre visibilité sur le Web. »</div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500"*/>
                        <img
                            src={stars}
                            alt="Création site internet Agen"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Cafétéria La Fontaine</div>
                        <div className="italic">« Très bonne équipe, Anthony mon conseiller m'appelle régulièrement pour faire le point sur l'avancement et le positionnement du site. Je recommande Linweb sans réserve. »</div>
                    </div>
                    <br />
                    {/* <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500">
                            <img 
                                src={ stars }
                                alt="Création site internet Agen"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">De haut en bois</div><br/>
                            <div className="italic text-sm">« Cela fait quelques années que nous travaillons ensemble.
                              Sérieux, créatifs , il vous donnent de bons conseils pour améliorer le site, être très bien positionné dans les pages Google( pour ma part je suis dans la 1ère et même en 1ère position suivant la recherche).
                              Donc j’ai du recul pour dire oui au choix de Linkweb pour la création de site.
                              Merci à RA avec qui je traite.
                               »</div>
                        </div> */}

                </section>
                <section className="max-w-6xl mx-auto flex align-center justify-center text-center mb-24">
                    <div className="w-full flex flex-col md:flex-row justify-center">
                        <a
                            className="century text-sm hover:text-bleu"
                            target="blank" rel="noreferrer noopener"
                            href="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,"
                        >
                            Voir plus de témoignages
                            </a>&nbsp;
                        | &nbsp;
                            <a
                            className="century text-sm hover:text-bleu"
                            target="blank" rel="noreferrer noopener"
                            href="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,"
                        >
                            Vous êtes déjà clients ? Donnez nous votre avis !
                            </a>
                    </div>
                </section>
                <section className="max-w-4xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet pour salon de coiffure :<br /><span className="font-bold">Une solution en accord avec vos besoins</span>
                    </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="UN SITE WEB POUR FAIRE CONNAÎTRE SON ENTREPRISE">
                                <p>Pour faire ses premiers pas <strong>sur le Web</strong>, le <strong>site internet</strong> est un parfait outil afin de <strong>faire connaître son entreprise</strong>. Non seulement il permet de <strong>développer sa notoriété</strong>, mais il peut également permettre de <strong>promouvoir son activité et ses réalisations</strong>.
                            <br /><br />
                            La <strong><Link to="/creation-de-site-internet-a-agen/" className="text-bleu hover:text-black font-bold">création de site internet site internet à Agen</Link></strong> est un bon moyen de <strong>présenter vos services</strong>, <strong>développer votre visibilité grâce au Web</strong> et ainsi mener de nouveaux projets. Faites connaître votre travail avec un <strong>site web</strong> taillé à votre mesure et <strong>à votre image</strong>.
                            </p>
                            </div>
                            <div label="OBTENIR DE LA VISIBILITÉ POUR DÉVELOPPER SON CHIFFRE D'AFFAIRES">
                                <p>Travailler <strong>la visibilité de son site internet sur le web</strong> va permettre de <strong>générer du trafic</strong> et d'attirer de <strong>potentiels clients</strong>. En développant une <strong>stratégie de référencement naturel</strong> adaptée, vous accédez à une visibilité importante auprès d’<strong>utilisateurs qualifiés</strong>.
                            <br /><br />
                                    En générant du <strong>trafic sur votre site web grâce au référencement</strong>, vous apportez une réponse à la requête d’internautes à la recherche d’un service. Ces derniers seront à même de vous contacter et de prendre rendez-vous au sein <strong>votre salon de coiffure</strong>.
                                </p>
                            </div>
                            <div label="EXPOSER SES RÉALISATIONS POUR CONCRÉTISER VIA SON SITE WEB">
                                <p>En présentant <strong>vos réalisations sur votre site web</strong>, non seulement vous démontrez toute la <strong>qualité de votre travail</strong>, mais vous aidez l’utilisateur à se projeter par rapport à votre prestation. Il est important d’apporter des preuves d’un travail bien fait.
                            <br /><br />
                            Ceci a tendance à rassurer l’utilisateur et facilitera la <strong>prise de contact sur votre site web</strong>. Pour ce faire, la <strong>création d’un portfolio</strong> ou d’un espace réalisations pourra terminer de convaincre un utilisateur que vous êtes le <strong>salon de coiffure</strong> qu’il recherche.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>

                <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselCoiffure />
                    </div>
                </div>

                <SimpleMap />
                {/* <section className="w-full flex justify-end py-24" style={{background:'#00000085 url('+ map +')', backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundBlendMode:'cover'}}>
                      <div className="w-full lg:w-1/3 py-10 bg-white shadow-2xl mx-4 lg:mx-32 text-center text-black text-4xl century">
                          <h2 className="max-w-sm mx-auto">Agence Web à <span className="font-bold">Toulouse</span> et <span className="font-bold">Agen</span></h2>
                          <br/>
                          <div className="w-2/3 flex flex-row justify-start mx-auto">
                            <div className="w-2/12 flex items-center">
                               <svg width="25px" viewBox="0 0 1152.7139 1440.550375"><g transform="translate(27692.221,9619.4771)"><path  d="" fill="#37cfee"/><path d="m -27169.027,-8468.7794 c -109.212,-10.8404 -207.531,-48.9146 -293.707,-113.7383 -130.593,-98.2354 -211.705,-244.0654 -227.509,-409.0334 -3.702,-38.636 -2.09,-95.627 3.849,-136.161 28.578,-195.028 157.009,-363.429 338.035,-443.236 45.521,-20.069 99.233,-35.579 147.913,-42.712 52.931,-7.756 116.244,-7.756 169.175,0 195.027,28.578 363.428,157.009 443.236,338.035 20.068,45.521 35.578,99.233 42.711,147.913 7.756,52.931 7.756,116.244 0,169.175 -21.971,149.942 -103.984,287.0324 -226.113,377.9607 -85.78,63.8664 -184.115,101.4195 -292.848,111.8359 -23.892,2.2889 -81.506,2.2675 -104.742,-0.039 z m -18.082,-392.4707 0,-60.625 71.25,0 71.25,0 0,60.625 0,60.625 57.5,0 57.5,0 0,-111.25 0,-111.25 37.5,0 c 20.625,0 37.5,-0.466 37.5,-1.035 0,-1.573 -123.935,-125.215 -125.511,-125.215 -0.755,0 -31.708,-30.34 -68.786,-67.422 l -67.413,-67.422 -130.395,129.456 c -71.717,71.201 -130.395,129.947 -130.395,130.547 0,0.6 17.156,1.091 38.125,1.091 l 38.125,0 0,111.25 0,111.25 56.875,0 56.875,0 0,-60.625 z" fill="#37cfee"/></g></svg>                               
                            </div>
                            <div className="w10/12">
                                <h3 className="text-xl">10 rue Albert Ferrasse, 47550 Boé (près d'Agen)</h3>
                                <hr className="blue"/>
                                <h3 className="text-xl">44 rue de Bayard, 31000 Toulouse</h3>
                            </div>
                          </div>
                          <div className="w-2/3 flex flex-row my-8 justify-start mx-auto">
                              <div className="w-2/12">
                              <svg width="30px" viewBox="0 0 333 416.25"><g><path fill="#37cfee" className="fil0" d="M167 33c73,0 133,60 133,134 0,73 -60,133 -133,133 -74,0 -134,-60 -134,-133 0,-74 60,-134 134,-134zm58 212l22 -22c0,0 3,-7 -2,-13 -5,-5 -32,-19 -32,-19 0,0 -6,-4 -13,4 -8,7 -7,7 -7,7 0,0 -4,3 -9,1 -19,-10 -44,-35 -54,-54 -2,-4 1,-8 1,-8 0,0 0,0 8,-7 7,-8 3,-14 3,-14 0,0 -13,-27 -19,-32 -6,-5 -13,-1 -13,-1l-21 21c-24,49 88,161 136,137z"/></g></svg>
                               </div>
                               <div className="w-10/12">
                               <h3 className="text-xl text-left"><a className="text-bleu hover:text-black" href="tel:0533950030">05 33 95 00 30</a></h3>
                               </div>
                          </div>
                          <div className="w-2/3 flex flex-row my-8 justify-start mx-auto">
                              <div className="w-2/12">
                              <svg width="30px" viewBox="0 0 100 125"><path fill="#37cfee" d="M91.462,32.483c-2.267-5.358-5.511-10.17-9.644-14.303c-4.132-4.132-8.943-7.376-14.303-9.643  C61.967,6.191,56.074,5.001,50,5.001s-11.968,1.19-17.516,3.537c-5.358,2.267-10.171,5.511-14.303,9.643  c-4.133,4.132-7.377,8.944-9.644,14.303C6.191,38.032,5.002,43.925,5.002,50c0,6.075,1.189,11.967,3.536,17.516  c2.267,5.357,5.511,10.17,9.644,14.303c4.132,4.131,8.944,7.375,14.303,9.643c5.548,2.346,11.441,3.537,17.516,3.537  s11.967-1.191,17.516-3.537c5.359-2.268,10.171-5.512,14.303-9.643c4.133-4.133,7.377-8.945,9.644-14.303  c2.347-5.549,3.536-11.441,3.536-17.516C94.998,43.925,93.809,38.032,91.462,32.483z M77.414,66.063  c0,0.201-0.164,0.363-0.365,0.363H22.951c-0.201,0-0.364-0.162-0.364-0.363v-20.91c0-0.131,0.069-0.25,0.182-0.316  c0.112-0.064,0.251-0.064,0.364,0L50,60.295l26.867-15.458c0.113-0.064,0.252-0.064,0.364,0c0.112,0.066,0.183,0.186,0.183,0.316  V66.063z M77.414,38.708c0,0.13-0.07,0.251-0.184,0.315L50.182,54.588c-0.057,0.031-0.119,0.049-0.182,0.049  s-0.125-0.018-0.182-0.049L22.77,39.023c-0.113-0.064-0.183-0.186-0.183-0.315v-4.771c0-0.201,0.163-0.364,0.364-0.364h54.098  c0.201,0,0.365,0.163,0.365,0.364V38.708z"/></svg>              
                               </div>
                               <div className="w-10/12">
                               <h3 className="text-xl text-left"><a className="text-bleu hover:text-black" href="mailto:contact@linkweb.fr">contact@linkweb.fr</a></h3>
                               </div>
                          </div>
                          
                      </div>
                  </section>  */}
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsSiteInternetCoiffeur {
    allWpPost(limit: 3) {
      edges {
        node {
          id
          title
          slug
          modified(locale: "fr", formatString: "DD/MM/YYYY")
          date(locale: "fr", formatString: "dddd DD MMMM YYYY")
          link
          featuredImage {
            node {
                sourceUrl
            }
          }
        }
      }
    }
  }
  
    
`
export default SiteInternetCoiffeur;




