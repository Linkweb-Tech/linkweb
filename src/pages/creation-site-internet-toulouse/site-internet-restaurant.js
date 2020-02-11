import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';
import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";
import Accordion from "../../components/accordion";
import SEO from "../../components/seo";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";

import stars from '../../images/stars.png';
import arriereplan from "../../images/site-internet-restaurant.jpg";
import siteinternet from "../../images/site-internet-pour-restaurant.jpg";
import referencement from "../../images/creation-site-web-restaurant.jpg";
import webdesign from "../../images/site-web-restaurant.jpg";
import realisation1 from "../../images/coconuts.jpg";
import realisation2 from "../../images/parenthese.jpg";
import realisation3 from "../../images/atelier-pecheur.jpg";
import map from "../../images/map.jpg";
import surmesure from "../../images/web.svg"


class CreationSiteRestaurant extends React.Component {

    constructor(props) {
        super(props);

        this.metiers = ['restaurateur', 'traiteur', 'brasseur', 'pâtissier', 'boulanger', 'fromager', 'charcutier', 'barman', 'pizzaïolo', 'épicier'];
        this.state = {
            metier: this.metiers[0]
        };
    }

    componentDidMount() {
        let i = 0;
        this.metierInterval = setInterval(() => {
            i++;
            if(this.metiers[i] === undefined) {
                i = 0;
            }
            this.setState({metier: this.metiers[i]});
        }, 1200);
    }

    componentWillUnmount() {
        clearInterval(this.metierInterval);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Création de site internet pour restaurant à Toulouse - Linkweb"
                    description="Vous souhaitez créer un site web pour votre restaurant à Toulouse (31) ou à Agen (47) ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-restaurant/"
                    nom="Créer un site internet internet restaurant"
                    slug="creation-site-internet-toulouse/site-internet-restaurant/"
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

<section className="flex items-center justify-start w-full mx-auto pb-0 my-24 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{background:'#000000ad url('+ arriereplan +')', backgroundBlendMode:'overlay', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
            <div className="max-w-6xl mx-auto lg:mx-56 py-2 w-full flex-col items-end">
                <div className="mt-12 -mb-24 w-full flex flex-col items-center lg:items-start">
                    <div className="w-1/2  text-3xl text-center font-bold text-white century">4,4/5</div>
                    <p className="w-1/2  text-sm text-center font-bold text-white century -mt-2">Avis Google</p>
                    <div className="w-1/2 -mt-8">
                        <svg className="mx-auto block" width="100px" viewBox="0 0 100 125">
                            <path fill="#FFFFFF" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                            <path fill="#FFFFFF" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                            <path fill="#FFFFFF" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                            <path fill="#FFFFFF" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                            <path fill="#FFFFFF" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z   M89.8,54.7c0.1-0.1,0.4,0,0.4,0l4.2,2.2l-0.8-4.7c0-0.2,0-0.3,0.1-0.4l3.4-3.3l-4.7-0.7c-0.2,0-0.3-0.1-0.4-0.3l-2.1-4.3L89.8,54.7  z"/>
                        </svg>                    
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                   <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Création de site internet pour <span className="text-bleu">restaurant</span></h1>
                </div>
                <br/>
                <h2 className="flex full lg:w-1/2 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Linkweb, partenaire des métiers de la restauration à Toulouse et Agen.</h2>
                {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                <div className="w-full lg:w-2/3 mx-5 lg:mx-0 flex flex-col lg:flex-row justify-center pb-24 lg:justify-start">
                    <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30"/>
                    <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis"/>
                </div>
            </div>
        </section>
        <section className="w-full flex justify-end -mt-0 lg:-mt-32">
        <div className="w-11/12 lg:w-1/3 bg-white shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
            <svg width="90px" className="mx-auto block" viewBox="0 0 90 112.5"><g><path fill="#37cfee" d="M14.7,41.9c-0.3,0-0.5-0.2-0.6-0.4c-0.1-0.3,0-0.7,0.4-0.8c4.2-1.5,3.6-4.5,3.5-4.6l-1.1-13.7   c0-0.3,0.2-0.6,0.6-0.7c0.3,0,0.6,0.2,0.7,0.6l1.1,13.6l0,0c0,0,1,4-4.3,5.9C14.9,41.9,14.8,41.9,14.7,41.9z"/></g><g><path fill="#37cfee" d="M12.1,41.9c-0.1,0-0.1,0-0.2,0c-5.3-1.9-4.3-6-4.3-6.1l1.1-13.5c0-0.3,0.3-0.6,0.7-0.6   c0.3,0,0.6,0.3,0.6,0.7L8.8,36c0,0.2-0.7,3.1,3.5,4.7c0.3,0.1,0.5,0.5,0.4,0.8C12.6,41.7,12.4,41.9,12.1,41.9z"/></g><g><path fill="#37cfee" d="M11.9,35.5c-0.3,0-0.6-0.3-0.6-0.6V20.8c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6v14.1   C12.5,35.2,12.2,35.5,11.9,35.5z"/></g><g><path fill="#37cfee" d="M14.9,35.5c-0.3,0-0.6-0.3-0.6-0.6V20.8c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6v14.1   C15.5,35.2,15.2,35.5,14.9,35.5z"/></g><g><path fill="#37cfee" d="M78,47.8c-0.2,0-0.3-0.1-0.5-0.2c-0.2-0.2-2.2-2.5-2.6-3.7C73.7,40,75.9,30.4,76,30l0.2-1   c1.8-8.7,1.9-9.1,3.5-9c0.4,0,0.8,0.2,1.1,0.5c0.6,0.7,0.5,1.8,0.5,1.9c0,0.3-0.4,0.6-0.7,0.6c-0.3,0-0.6-0.3-0.6-0.7   c0-0.2,0-0.8-0.2-1c0,0-0.1-0.1-0.2-0.1c-0.2,0-0.2,0-0.2,0c-0.4,0.2-1,3-2,8l-0.2,1c0,0.1-2.2,9.7-1.1,13.3   c0.3,0.9,1.8,2.6,2.3,3.3c0.2,0.3,0.2,0.6,0,0.9C78.3,47.8,78.1,47.8,78,47.8z"/></g><g><path fill="#37cfee" d="M13.4,70.4c-1.1,0-1.9-0.9-1.9-1.9V41.7c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v26.8c0,0.4,0.3,0.7,0.7,0.7   c0.4,0,0.7-0.3,0.7-0.7V41.7c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v26.8C15.4,69.6,14.5,70.4,13.4,70.4z"/></g><g><path fill="#37cfee" d="M79.3,70.2c-1.1,0-1.9-0.9-1.9-1.9V47.4c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6v20.9   c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7V23.1c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6v45.2C81.3,69.3,80.4,70.2,79.3,70.2z"/></g><g><path fill="#37cfee" d="M46.2,69.1c-13.2,0-23.9-10.7-23.9-23.9S33,21.2,46.2,21.2S70.1,32,70.1,45.2S59.4,69.1,46.2,69.1z    M46.2,22.5c-12.5,0-22.7,10.2-22.7,22.7s10.2,22.7,22.7,22.7s22.7-10.2,22.7-22.7S58.7,22.5,46.2,22.5z"/></g><g><path fill="#37cfee" d="M46.2,63.6c-10.1,0-18.4-8.2-18.4-18.4S36,26.8,46.2,26.8c10.1,0,18.4,8.2,18.4,18.4S56.3,63.6,46.2,63.6z    M46.2,28C36.7,28,29,35.7,29,45.2c0,9.5,7.7,17.1,17.2,17.1s17.1-7.7,17.1-17.1C63.3,35.7,55.6,28,46.2,28z"/></g></svg>                
            <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span> ?</span></h2>
            <br/>
            <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br/> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour répondre à vos objectifs.</p>
            <br/>
            <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                <div className="w-full md:w-1/3 flex flex-col font-bold">
                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M67.43,6.61H35.19a7.66,7.66,0,0,0-7.65,7.65v71A7.66,7.66,0,0,0,35.19,93H67.43a7.66,7.66,0,0,0,7.65-7.65v-71A7.66,7.66,0,0,0,67.43,6.61Zm5.65,78.7A5.66,5.66,0,0,1,67.43,91H35.19a5.66,5.66,0,0,1-5.65-5.65v-71a5.66,5.66,0,0,1,5.65-5.65H67.43a5.66,5.66,0,0,1,5.65,5.65v71ZM51.4,78.07a5.35,5.35,0,1,0,5.35,5.35A5.35,5.35,0,0,0,51.4,78.07Zm0,8.7a3.35,3.35,0,1,1,3.35-3.35A3.35,3.35,0,0,1,51.4,86.76ZM43,15.9a1,1,0,0,1,1-1H58.8a1,1,0,1,1,0,2H44A1,1,0,0,1,43,15.9Zm-11,59.49H70.26V23.14H32.05V75.39Zm2-50.25H68.26V73.39H34.05V25.14ZM63.71,53.41A12.55,12.55,0,0,0,53.39,41.8,1,1,0,0,0,53.84,41a2.65,2.65,0,0,0-5.3,0,1,1,0,0,0,.45.84A12.56,12.56,0,0,0,38.68,53.41a2.65,2.65,0,0,0,1,5.11H62.73A2.65,2.65,0,0,0,63.71,53.41ZM51.2,43.6a10.55,10.55,0,0,1,10.49,9.53h-21A10.55,10.55,0,0,1,51.2,43.6ZM62.73,56.51H39.66a0.65,0.65,0,0,1,0-1.3H62.73A0.65,0.65,0,0,1,62.73,56.51Zm34.41-8.74a25.86,25.86,0,0,1-7.62,18.4,1,1,0,0,1-1.41-1.41,24,24,0,0,0,0-34,1,1,0,0,1,1.41-1.41A25.86,25.86,0,0,1,97.13,47.77Zm-6.47,0a18.29,18.29,0,0,1-5.39,13,1,1,0,0,1-1.41-1.41,16.41,16.41,0,0,0,0-23.21,1,1,0,0,1,1.41-1.41A18.29,18.29,0,0,1,90.66,47.77ZM12.62,65a1,1,0,1,1-1.41,1.41,26,26,0,0,1,0-36.81A1,1,0,0,1,12.62,31,24,24,0,0,0,12.62,65Zm4.24-5.39a1,1,0,1,1-1.41,1.41,18.41,18.41,0,0,1,0-26,1,1,0,0,1,1.41,1.41A16.41,16.41,0,0,0,16.86,59.64Z"/></svg>                    
                <h4>Mise en place d'un module de réservation</h4>
                </div>
                <div className="w-full md:w-1/3 flex flex-col font-bold">
                    <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M93.21,69.76H6.79a3,3,0,0,1-3-3V37.36a3,3,0,0,1,3-3H93.21a3,3,0,0,1,3,3V66.72A3,3,0,0,1,93.21,69.76ZM6.79,35.31a2.05,2.05,0,0,0-2,2V66.72a2,2,0,0,0,2,2H93.21a2,2,0,0,0,2-2V37.36a2.05,2.05,0,0,0-2-2Z"/><path fill="#37cfee" d="M14.73,43.7H9.93V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z"/><path fill="#37cfee" d="M17.91,50.86h-8v-4.8h8Zm-7-1h6v-2.8h-6Z"/><path fill="#37cfee" d="M17.91,58h-8v-4.8h8Zm-7-1h6v-2.8h-6Z"/><path fill="#37cfee" d="M17.91,65.17h-8v-4.8h8Zm-7-1h6v-2.8h-6Z"/><path fill="#37cfee" d="M24,43.7H19.21V38.91H24Zm-3.79-1H23V39.91H20.21Z"/><path fill="#37cfee" d="M24,50.86H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z"/><path fill="#37cfee" d="M24,58H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z"/><path fill="#37cfee" d="M30,58h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z"/><path fill="#37cfee" d="M24,65.17H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z"/><path fill="#37cfee" d="M30,65.17h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z"/><path fill="#37cfee" d="M60,65.17H31.22v-4.8H60Zm-27.82-1H59v-2.8H32.22Z"/><path fill="#37cfee" d="M36,58h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z"/><path fill="#37cfee" d="M42,58h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z"/><path fill="#37cfee" d="M48,58h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z"/><path fill="#37cfee" d="M54,58h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z"/><path fill="#37cfee" d="M60,58h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z"/><path fill="#37cfee" d="M66,58H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z"/><path fill="#37cfee" d="M66,65.17H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z"/><path fill="#37cfee" d="M72.05,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M78.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M84.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M90.07,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M72.05,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M78.06,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M30,50.86h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z"/><path fill="#37cfee" d="M36,50.86h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z"/><path fill="#37cfee" d="M42,50.86h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z"/><path fill="#37cfee" d="M48,50.86h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z"/><path fill="#37cfee" d="M54,50.86h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z"/><path fill="#37cfee" d="M60,50.86h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z"/><path fill="#37cfee" d="M66,50.86H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z"/><path fill="#37cfee" d="M72.05,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M78.06,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M90.07,57.83H82.19a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h6.88V47.06H81.39V50.8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V46.06h9.68Z"/><path fill="#37cfee" d="M30,43.7h-4.8V38.91H30Zm-3.8-1H29V39.91h-2.8Z"/><path fill="#37cfee" d="M36,43.7h-4.8V38.91H36Zm-3.8-1H35V39.91h-2.8Z"/><path fill="#37cfee" d="M42,43.7h-4.8V38.91H42Zm-3.8-1H41V39.91h-2.8Z"/><path fill="#37cfee" d="M48,43.7h-4.8V38.91H48Zm-3.8-1H47V39.91h-2.8Z"/><path fill="#37cfee" d="M54,43.7h-4.8V38.91H54Zm-3.8-1H53V39.91h-2.8Z"/><path fill="#37cfee" d="M60,43.7h-4.8V38.91H60Zm-3.8-1H59V39.91h-2.8Z"/><path fill="#37cfee" d="M66,43.7H61.25V38.91H66Zm-3.79-1H65V39.91H62.25Z"/><path fill="#37cfee" d="M72.05,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z"/><path fill="#37cfee" d="M78.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z"/><path fill="#37cfee" d="M84.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z"/><path fill="#37cfee" d="M90.07,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z"/><path fill="#37cfee" d="M82.19,57.83a.5.5,0,0,1-.5-.5v-6h-.8a.5.5,0,0,1,0-1h1.8v7A.5.5,0,0,1,82.19,57.83Z"/></svg>
                    <h4>Rédaction optimisée pour le référencement naturel</h4>
                </div>
                <div className="w-full md:w-1/3 flex flex-col font-bold">
                    <svg width="60px" className="mx-auto block" viewBox="0 0 17639 22048.75"><g><path fill="#37cfee" d="M829 1746l7303 0c243,0 463,99 623,259 30,30 57,61 83,95 25,-34 53,-65 83,-95 160,-160 380,-259 623,-259l7479 0 0 12771 -955 0 2 1340 -7232 -1338 -7232 1338 2 -1340 -955 0 0 -12771 176 0zm4012 6334c-97,0 -176,-79 -176,-176 0,-97 79,-176 176,-176 227,0 437,68 609,183 178,120 313,290 380,489 31,92 -19,192 -111,223 -92,31 -192,-19 -223,-111 -42,-124 -128,-232 -242,-309 -114,-77 -257,-122 -413,-122zm-2272 1175l4287 3c4,-437 -551,-366 -891,-377l-2899 20c-215,2 -487,33 -497,353zm1964 -2132c-74,28 -275,11 -631,171 -561,252 -967,788 -975,1423 53,13 306,14 357,-1 3,-466 306,-847 654,-1041 257,-143 479,-195 782,-190 598,10 1141,276 1351,848 64,178 71,300 77,386l351 4c-20,-885 -727,-1504 -1607,-1596 26,-89 81,-127 19,-246 -83,-158 -308,-163 -395,0 -64,121 -6,155 17,241zm5435 -3938l2752 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-2752 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm4804 9570l917 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-917 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm-4804 0l4028 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-4028 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm4804 -920l917 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-917 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm-4804 0l4028 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-4028 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm4804 -920l917 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-917 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm-4804 0l4028 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-4028 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm0 -1100l2752 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-2752 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm4804 -1850l917 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-917 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm-4804 0l4028 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-4028 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm4804 -920l917 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-917 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm-4804 0l4028 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-4028 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm4804 -920l917 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-917 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm-4804 0l4028 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-4028 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm4804 -920l917 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-917 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm-4804 0l4028 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-4028 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm4804 -920l917 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-917 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm-4804 0l4028 0c97,0 176,79 176,176l0 0c0,97 -79,176 -176,176l-4028 0c-97,0 -176,-79 -176,-176l0 0c0,-97 79,-176 176,-176zm5749 10232l-4958 0 4960 918 -1 -918zm-8798 0l-4958 0 -1 918 4960 -918zm2096 -11889l0 11536 7655 0 0 -12065 -7126 0c-145,0 -278,60 -374,156 -96,96 -156,228 -156,374zm-882 -529l-7126 0 0 12065 7655 0 0 -11536c0,-145 -60,-278 -156,-374 -96,-96 -228,-156 -374,-156z"/></g></svg>                    
                    <h4>Mise en avant de vos menus et produits</h4>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Votre devis gratuit"/>
            </div>
        </div>
        </section>
        <section className="w-full lg:w-1/2 px-10 mt-16 lg:-mt-64 mb-32">
            <h3 className="century text-3xl text-center">
                D'après une étude de 2014, <span className="text-bleu">50%</span> des recherches locales et mobiles entraînaient la visite d'un lieu dans la journée.
            </h3>
            <br/>
            <p className="text-center century"><b>Source :</b> <a className="text-bleu hover:text-black" href="https://think.storage.googleapis.com/docs/how-advertisers-can-extend-their-relevance-with-search_research-studies.pdf/" target="_blank" rel="noreferrer">IPSOS MediaCT/Purchased, 2014</a></p>
        </section>
        <section className="text-center text-black text-2xl century mx-12 mt-8 lg:mx-0">
            <h2 className="century leading-none">Répondre à vos<br/><span className="text-6xl text-bleu font-bold">BESOINS</span></h2>
            <hr className="blue"></hr>
            <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Notre rôle : mettre en place un projet adapté à l'image de votre entreprise.</h3>
        </section>
        <section className="w-full my-10 flex flex-col lg:flex-row">
            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{backgroundImage:'url('+ siteinternet +')'}}>
                <h3 className="text-3xl titre text-center century leading-none"><span>Site internet</span><br/><span className="font-bold text-6xl">VITRINE</span></h3>
                <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">Pour un <strong className="font-normal">restaurateur</strong>, il sera pertinent de profiter de toute la simplicité et l’<strong className="font-normal">efficacité du site internet vitrine</strong>. En effet, les <strong className="font-normal">utilisateurs à la recherche d’un restaurant</strong> seront plus à même de rechercher des <strong className="font-normal">informations pratiques</strong>. <strong className="font-normal">Créer un site internet pour un restaurant</strong> doit nécessairement répondre à ces attentes. <br/><br/>Ce <strong className="font-normal">type de site internet</strong> va permettre de mettre en avant des éléments tels que la <strong className="font-normal">carte proposée par votre restaurant</strong> ou ses <strong className="font-normal">horaires d’ouverture</strong>. Aussi, une présentation de la <strong classname="font-normal">cuisine proposée</strong>, des <strong className="font-normal">retours de clients</strong> ainsi que des <strong className="font-normal">modalités d’accès</strong> devront être présentés.</p>
            </div>
            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{backgroundImage:'url('+ referencement +')'}}>
                <h3 className="text-3xl titre text-center century leading-none"><span>Référencement</span><br/><span className="font-bold text-6xl">LOCAL</span></h3>
                <p className="text century text-lg lg:text-sm xl:text-lg">Il est de plus en plus fréquent d'effectuer une <strong className="font-normal">recherche en ligne</strong> avant de choisir un endroit où déjeuner. En faisant partie des <strong className="font-normal">premiers restaurants proposés par les moteurs de recherche</strong>, vos chances d'être visitées seront élevées. Ceci est d’autant plus vrai <strong className="font-normal">au niveau local</strong>. Mettre en place une <strong className="font-normal">stratégie de référencement naturel</strong> va être un vecteur de <strong className="font-normal">visibilité pour votre établissement</strong>. <br/><br/>En ciblant un <strong className="font-normal">public local</strong>, vous multipliez vos chances de<strong className="font-normal">toucher des prospects</strong> intéressants. Une fois sur <strong className="font-normal">votre site web</strong>, ces derniers devront être convaincus que votre établissement est bien celui qui répondra le mieux à leurs besoins.</p>
            </div>
            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{backgroundImage:'url('+ webdesign +')'}}>
                <h3 className="text-3xl titre text-center century leading-none"><span>Design</span><br/><span className="font-bold text-6xl">EFFICACE</span></h3>
                <p className="text century text-lg lg:text-sm xl:text-lg">Un <strong className="font-normal">utilisateur en quête d’un restaurant</strong> pour déjeuner devra avoir accès à l’ensemble des <strong className="font-normal">informations pratiques</strong> nécessaires. Par ailleurs, ce type de requête, parfois dans l’urgence, pourrait être effectuée via l’utilisation d’un <strong className="font-normal">smartphone</strong>. Afin de répondre à ces besoins précis, nous préconisons la <strong className="font-normal">mise en place d’un webdesign</strong> épuré qui laisse place aux informations essentielles. <br/><br/>De plus, le <strong className="font-normal">site web</strong> devra être parfaitement adapté à une navigation sur <strong className="font-normal">tous les supports</strong> existants. En un clin d’oeil, il sera nécessaire d’apporter à l’utilisateur l’ensemble des réponses aux questions qu’il se pose.</p>
            </div>
        </section>
        <section className="text-center text-black text-2xl mx-auto lg:mx-0 century my-10">
            <h2 className="century leading-none">Une solution<br/><span className="text-4xl lg:text-6xl text-bleu font-bold">FONCTIONNELLE</span></h2>
            <hr className="blue"></hr>
            <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Nous créons un site internet professionnel et qui répond aux problématiques du Web.</h3>
        </section>
        <section className="flex justify-center flex-col items-center">
            <div className="w-full flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                    <svg width="50px" className="mx-auto block" viewBox="12.937 19.988 486.829 591.2012500000001"><g><path fill="#37cfee" d="M453.892,19.988H58.84c-25.311,0-45.903,20.595-45.903,45.909v263.348c0,25.312,20.592,45.903,45.903,45.903h83.62v81.085   c0,20.245,16.483,36.716,36.744,36.716h152.511c21.244,0,38.528-17.287,38.528-38.535v-79.265h83.648   c25.295,0,45.874-20.592,45.874-45.903V65.897C499.766,40.583,479.187,19.988,453.892,19.988z M58.84,27.988h395.052   c20.884,0,37.874,17.006,37.874,37.909v38.814H20.937V65.897C20.937,44.994,37.94,27.988,58.84,27.988z M237.442,197.73h37.855   c29.951,0,54.318,24.355,54.318,54.291V306.2H183.117v-54.18c0-14.968,6.092-28.54,15.929-38.371   C208.883,203.819,222.465,197.73,237.442,197.73z M362.243,454.414c0,16.837-13.695,30.535-30.528,30.535H179.204   c-15.85,0-28.744-12.882-28.744-28.716v-85.085v-55.511c0-0.806,0.647-1.438,1.474-1.438h26.075   c0.354,0.102,0.72,0.175,1.107,0.175h154.499c0.387,0,0.753-0.072,1.107-0.175h26.076c0.81,0,1.444,0.632,1.444,1.438V454.414z    M453.892,367.149h-83.647v-51.512c0-5.204-4.236-9.438-9.444-9.438h-0.001h-23.183v-54.18c0-34.347-27.956-62.291-62.318-62.291   h-37.855c-17.184,0-32.765,6.986-44.051,18.266c-11.286,11.279-18.276,26.852-18.276,44.026v54.178h-23.182   c-5.224,0-9.474,4.233-9.474,9.438v0.001v51.511H58.84c-20.9,0-37.903-17.003-37.903-37.903V112.711h470.829v216.535   C491.766,350.146,474.775,367.149,453.892,367.149z"/><path fill="#37cfee" d="M256.369,364.854c-11.108,0-20.146,9.034-20.146,20.14c0,7.416,3.978,14.056,10.338,17.592v27.703c0,2.209,1.791,4,4,4   h11.611c2.209,0,4-1.791,4-4v-27.703c6.36-3.537,10.338-10.177,10.338-17.592C276.51,373.888,267.475,364.854,256.369,364.854z    M260.719,396.329c-1.536,0.599-2.547,2.078-2.547,3.727v26.232h-3.611v-26.232c0-1.648-1.011-3.128-2.547-3.727   c-4.66-1.817-7.791-6.373-7.791-11.336c0-6.693,5.449-12.14,12.146-12.14c6.694,0,12.141,5.446,12.141,12.14   C268.51,389.956,265.379,394.512,260.719,396.329z"/><path fill="#37cfee" d="M65.828,82.413c8.805,0,15.969-7.164,15.969-15.969c0-8.809-7.164-15.976-15.969-15.976   c-8.809,0-15.975,7.167-15.975,15.976C49.853,75.25,57.02,82.413,65.828,82.413z M65.828,58.468c4.394,0,7.969,3.578,7.969,7.976   c0,4.394-3.575,7.969-7.969,7.969c-4.397,0-7.975-3.575-7.975-7.969C57.853,62.046,61.431,58.468,65.828,58.468z"/><path fill="#37cfee" d="M114.807,82.413c8.809,0,15.975-7.164,15.975-15.97c-0.002-8.809-7.168-15.975-15.975-15.975   c-8.809,0-15.975,7.167-15.975,15.976C98.832,75.25,105.999,82.413,114.807,82.413z M114.807,58.468   c4.396,0,7.974,3.579,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969s-7.975-3.575-7.975-7.969   C106.832,62.046,110.41,58.468,114.807,58.468z"/><path fill="#37cfee" d="M163.815,82.413c8.809,0,15.975-7.164,15.975-15.969c0-8.809-7.167-15.976-15.975-15.976   c-8.805,0-15.969,7.167-15.969,15.976C147.846,75.25,155.01,82.413,163.815,82.413z M163.815,58.468   c4.397,0,7.975,3.578,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969c-4.394,0-7.969-3.575-7.969-7.969   C155.846,62.046,159.421,58.468,163.815,58.468z"/></g></svg>
                    <h4 className="font-bold century"><span className="font-bold">Site internet sécurisé</span></h4>
                    <p>Nous garantissons la mise en place de <strong className="font-normal">certificat sécurisé</strong> pour une navigation en toute confiance.</p>
                </div>
                <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                    <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   "/><path fill="#37cfee" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z"/><g><path fill="#37cfee" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z"/><rect x="72.041" y="56.851" width="0.312" height="5.159"/></g><path fill="#37cfee" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z"/><path fill="#37cfee" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z"/></g></svg>                    
                    <h4 className="font-bold century"><span className="font-bold">Site web accessible tous supports</span></h4>
                    <p>Les sites internet que nous créons s'adaptent au <strong>support de navigation</strong> pour une accessibilité sans faille.</p>
                </div>
                <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                    <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><path fill="none" stroke="#37cfee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M17.06,78.235c0-18.19,14.749-32.939,32.938-32.939c18.198,0,32.941,14.749,32.941,32.939H17.06z"/><polygon fill="none" stroke="#37cfee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="  87.646,78.235 12.354,78.235 10,85.293 90,85.293 "/><path fill="none" stroke="#37cfee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M49.998,45.296c0.709,0,1.4,0.062,2.098,0.106l1.434-7.167h-7.059l1.433,7.167C48.599,45.358,49.292,45.296,49.998,45.296z"/><path fill="none" stroke="#37cfee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M68.821,38.236c-1.508-3.634-1.625-7.843,0-11.764c1.628-3.923,1.51-8.13,0.002-11.765c1.508,3.635,1.626,7.842-0.002,11.765  C67.196,30.393,67.313,34.602,68.821,38.236z"/><path fill="none" stroke="#37cfee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M19.411,52.354c-1.507-3.634-1.625-7.842,0-11.765c1.628-3.921,1.509-8.13,0.002-11.764c1.507,3.634,1.626,7.843-0.002,11.764  C17.786,44.511,17.904,48.72,19.411,52.354z"/><path fill="none" stroke="#37cfee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M31.178,38.236c1.507-3.634,1.626-7.843,0-11.764c-1.627-3.923-1.51-8.13-0.002-11.765c-1.508,3.635-1.625,7.842,0.002,11.765  C32.804,30.393,32.686,34.602,31.178,38.236z"/><path fill="none" stroke="#37cfee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M80.587,52.354c1.508-3.634,1.628-7.842,0-11.765c-1.628-3.921-1.508-8.13,0-11.764c-1.508,3.634-1.628,7.843,0,11.764  C82.215,44.511,82.095,48.72,80.587,52.354z"/></svg>
                    <h4 className="font-bold century"><span className="font-bold">Présentation de votre cuisine</span></h4>
                    <p>Nous créons un contenu pour mettre en avant votre cuisine et la qualité de vos produits.</p>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
            <div className="w-full -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                    <svg width="50px" className="mx-auto block" viewBox="0 0 64 80"><g><path fill="#37cfee" d="M8,55V16H56V35h2V9a3,3,0,0,0-3-3H9A3,3,0,0,0,6,9V55a3,3,0,0,0,3,3H42V56H9A1,1,0,0,1,8,55ZM9,8H55a1,1,0,0,1,1,1v5H8V9A1,1,0,0,1,9,8Z"/><rect fill="#37cfee" x="10" y="10" width="2" height="2"/><rect fill="#37cfee" x="14" y="10" width="2" height="2"/><rect fill="#37cfee" x="18" y="10" width="2" height="2"/><rect fill="#37cfee" x="2" y="31" width="2" height="20"/><polygon fill="#37cfee" points="23 32 23 24 27 24 27 22 17 22 17 24 21 24 21 32 23 32"/><path fill="#37cfee" d="M32,20H30v6H26a1,1,0,0,0-1,1v5h2V28h3v4h2Z"/><path fill="#37cfee" d="M19,32V27a1,1,0,0,0-1-1H14V20H12V32h2V28h3v4Z"/><path fill="#37cfee" d="M57,37a2.967,2.967,0,0,0-1.471.4,2.972,2.972,0,0,0-3.645-1.181A2.95,2.95,0,0,0,48,34.184V32a3,3,0,0,0-6,0v9.382l-1.051.525a5.336,5.336,0,0,0-.573,9.212l2.733,1.822A2,2,0,0,1,44,54.605V62h2v-7.4a3.993,3.993,0,0,0-1.781-3.328l-2.734-1.822a3.336,3.336,0,0,1,.359-5.759L42,43.618V46h2V32a1,1,0,0,1,2,0v9h2V37a1,1,0,0,1,2,0v5h2V39a1,1,0,0,1,2,0v4h2V40a1,1,0,0,1,2,0v4.528a18.03,18.03,0,0,1-1.9,8.025A1,1,0,0,0,56,53v9h2V53.232a20.046,20.046,0,0,0,2-8.7V40A3,3,0,0,0,57,37Z"/><path fill="#37cfee" d="M45,27a5.006,5.006,0,0,1,5,5h2a7,7,0,1,0-13.063,3.5l1.731-1A5,5,0,0,1,45,27Z"/><path fill="#37cfee" d="M17,37a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1Zm-2,3H13V38h2Z"/><rect fill="#37cfee" x="19" y="36" width="2" height="2"/><rect fill="#37cfee" x="23" y="36" width="9" height="2"/><rect fill="#37cfee" x="19" y="40" width="2" height="2"/><rect fill="#37cfee" x="23" y="40" width="9" height="2"/><path fill="#37cfee" d="M16,45H12a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V46A1,1,0,0,0,16,45Zm-1,4H13V47h2Z"/><rect fill="#37cfee" x="19" y="45" width="2" height="2"/><rect fill="#37cfee" x="23" y="45" width="9" height="2"/><rect fill="#37cfee" x="19" y="49" width="2" height="2"/><rect fill="#37cfee" x="23" y="49" width="9" height="2"/><rect fill="#37cfee" x="60" y="9" width="2" height="16"/></g></svg>
                    <h4 className="font-bold century"><span className="font-bold">Module de réservation</span></h4>
                    <p>Nous mettons en place un module de réservation pour vous permettre de mieux organiser votre service.</p>
                </div>
                <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                    <svg width="50px" className="mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#37cfee" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z"/></g></g><g><g><path fill="#37cfee" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z"/></g></g><g><g><path fill="#37cfee" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z"/></g></g></g></svg>                    
                    <h4 className="font-bold century"><span className="font-bold">Optimisation SEO</span></h4>
                    <p>Nous optimisons les contenus de votre site pour une <strong className="font-normal">visibilité maximale</strong> grâce au <strong className="font-normal">référencement naturel</strong>.</p>
                </div>
                <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                    <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M66.598,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44c-0.556,0.081-1.017,0.47-1.191,1.004  c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014c-0.095,0.554,0.133,1.113,0.587,1.443  c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C67.673,71.235,67.16,70.916,66.598,70.916L66.598,70.916z M50,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169L50,82.719l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C51.074,71.235,50.562,70.916,50,70.916L50,70.916z M33.402,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423  l2.707,1.423c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014  l2.19-2.135c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C34.476,71.235,33.963,70.916,33.402,70.916L33.402,70.916z"/><path fill="#37cfee" d="M72.131,50.738h-25.82v-1.475h25.82V50.738z M50,52.951h-3.689v1.475H50V52.951z M72.131,52.951H53.689v1.475  h18.443V52.951z M61.066,56.639H46.311v1.475h14.754V56.639z M72.131,56.639h-7.377v1.475h7.377V56.639z M57.377,60.328H46.311  v1.475h11.066V60.328z M61.066,27.131H46.311v1.475h14.754V27.131z M72.131,27.131h-7.377v1.475h7.377V27.131z M72.131,30.82h-25.82  v1.475h25.82V30.82z M57.377,34.508H46.311v1.475h11.066V34.508z M72.131,34.508H61.066v1.475h11.066V34.508z M64.754,38.197H46.311  v1.475h18.443V38.197z"/><path fill="#37cfee" d="M75.82,12.377h-4.338c-0.741-1.139-1.62-2.329-2.458-3.404l-0.257-0.33l-0.416,0.052  c-2.313,0.288-8.743,0.858-10.692,0.051c-0.341-0.141-0.869-0.895-1.294-1.501C55.592,6.141,54.793,5,53.689,5h-7.377  c-1.104,0-1.904,1.141-2.677,2.244c-0.425,0.606-0.953,1.36-1.294,1.501c-1.947,0.807-8.379,0.237-10.692-0.051l-0.416-0.052  l-0.257,0.33c-0.838,1.075-1.717,2.265-2.458,3.404H24.18c-2.441,0-4.426,1.986-4.426,4.426v73.77c0,2.441,1.985,4.426,4.426,4.426  H75.82c2.441,0,4.426-1.985,4.426-4.426v-73.77C80.246,14.363,78.26,12.377,75.82,12.377z M31.886,10.208  c1.891,0.218,8.608,0.899,11.02-0.1c0.737-0.305,1.32-1.137,1.937-2.017c0.396-0.564,1.132-1.615,1.469-1.615h7.377  c0.337,0,1.073,1.051,1.469,1.615c0.617,0.88,1.2,1.712,1.937,2.017c2.412,0.999,9.129,0.318,11.02,0.1  c1.698,2.219,3.397,4.834,3.684,5.857H28.201C28.489,15.043,30.188,12.427,31.886,10.208z M78.77,90.574  c0,1.627-1.324,2.951-2.951,2.951H24.18c-1.627,0-2.951-1.324-2.951-2.951v-73.77c0-1.627,1.324-2.951,2.951-2.951h3.449  c-0.727,1.324-1.12,2.457-0.82,3.071c0.192,0.392,0.578,0.618,1.059,0.618h44.262c0.482,0,0.867-0.225,1.059-0.618  c0.3-0.614-0.093-1.746-0.82-3.071h3.449c1.627,0,2.951,1.324,2.951,2.951V90.574z M50,13.115c-1.424,0-2.582-1.158-2.582-2.582  S48.576,7.951,50,7.951s2.582,1.158,2.582,2.582S51.424,13.115,50,13.115z M50,9.426c-0.61,0-1.107,0.496-1.107,1.107  c0,0.61,0.496,1.107,1.107,1.107s1.107-0.496,1.107-1.107C51.107,9.923,50.61,9.426,50,9.426z"/><path fill="#37cfee" d="M38.934,50v11.066H27.869V50H38.934 M38.934,48.525H27.869c-0.815,0-1.475,0.661-1.475,1.475v11.066  c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475V50C40.41,49.185,39.749,48.525,38.934,48.525  L38.934,48.525z M33.483,38.197c-0.008,0-0.016,0-0.024,0c-0.302,0-0.588-0.12-0.792-0.343l-3.77-4.111  c-0.413-0.451-0.382-1.147,0.069-1.559c0.451-0.412,1.151-0.379,1.563,0.071l2.989,3.267l7.698-7.698  c0.432-0.432,1.132-0.432,1.565,0c0.432,0.432,0.432,1.133,0,1.565l-8.516,8.5C34.058,38.097,33.776,38.197,33.483,38.197z   M38.934,34.271v4.664h-5.451H33.45h-5.581V27.869h11.066v1.194l1.45-1.45c-0.122-0.692-0.722-1.22-1.45-1.22H27.869  c-0.815,0-1.475,0.661-1.475,1.475v11.066c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475v-6.136  L38.934,34.271z"/></svg>                    
                    <h4 className="font-bold century"><span className="font-bold">Appel mensuel et suivi régulier</span></h4>
                    <p>Nous effectuons une <strong className="font-normal">maintenance</strong> et un suivi pour vous tenir informé de l'activité de <strong className="font-normal">votre site web</strong>.</p>
                </div>
            </div>
        </section>
        <section className="text-center text-black text-2xl century my-10 mx-12 lg:mx-0">
            <h2 className="century leading-tight"><Link to="/creation-site-internet-toulouse/" className="text-black hover:text-bleu">Création de site internet à Toulouse</Link> :<br/><span className="text-4xl lg:text-6xl text-bleu font-bold">VOTRE PROJET EN 4 ÉTAPES</span></h2>
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
                        <span className="font-bold">Après que vous ayez validé notre proposition graphique et éditoriale, nos techniciens réalisent la mise en ligne votre site internet.</span>
                    </h4>
                    <p /*data-aos='fade-bottom'*/ className="text-justify century">Lorsque <strong className="font-normal">votre site internet</strong> est publié sur le <strong className="font-normal">nom de domaine</strong> choisi, nos <strong className="font-normal">référenceurs web</strong> mettent en place toutes les optimisations nécessaires pour <strong className="font-normal">être visible sur les moteurs de recherche</strong>. Par la suite, des mises à jours et modifications sont régulièrement effectuées grâce au suivi mis en place.</p>
                </div>
            </div>
        </section>
        <section className="text-center text-black text-2xl century my-10 mx-auto lg:mx-0">
            <h2 className="century leading-tight">Création de site internet à Toulouse :<br/><span className="text-4xl lg:text-6xl text-bleu font-bold">NOUS LES ACCOMPAGNONS</span></h2>
            <hr className="blue"></hr>
            <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Nous travaillons tous les jours avec des professionnels de la restauration <br/>pour leur proposer une solution Web fonctionnelle.</h3>
        </section>
        <section className="w-full flex justify-center">
            <div className="w-full lg:w-2/3 flex flex-col mb-16 lg:flex-row justify-center text-white text-center text-2xl century">
                    <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{background:'#00000085 url(' + realisation1 + ')', backgroundBlendMode:'overlay', backgroundPosition:'center', backgroundSize:'cover'}}>
                    <a href="http://glacier-lecoconuts.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Le Coconuts</h4></a>
                </div>
                
                    <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{background:'#00000085 url(' + realisation2 + ')', backgroundBlendMode:'overlay', backgroundPosition:'center', backgroundSize:'cover'}}>
                    <a href="http://www.laparenthese-toulouse.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">La Parenthèse !</h4></a>
                </div>
                    <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{background:'#00000085 url(' + realisation3 + ')', backgroundBlendMode:'overlay', backgroundPosition:'center', backgroundSize:'cover'}}>
                    <a href="https://atelier-du-pecheur.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">L'Atelier du Pêcheur</h4></a>
                </div>
            </div>
        </section>
        <section className="w-full flex my-12 flex-col lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
        <div className="w-full lg:w-8/12 text-2xl">
          <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence</span> ?</h3>
          <h4>Linkweb soutient les professionnels souhaitant développer leur projet sur le Web.</h4>
        </div>
        <div className="w-full mx-auto block lg:w-3/12">
          <RoundButton className="items-center" color="darkgrey" text="Contactez-nous" url="/contact-agence-web-toulouse/"/>
        </div>
      </section>
      <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
           Création de site internet pour restaurant :<br/><span className="font-bold">Nos clients sont satisfaits</span>
        </h2>
        <hr className="blue"></hr>
      </section>
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-center justify-center century text-center mt-3 px-6 mb-12">
      <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up"*/>
                            <img 
                                src={ stars }
                                alt="Création site internet Agen"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">L'Auberge des Compagnons</div>
                            <div className="italic">« Depuis l'ouverture de mon restaurant nous travaillons avec Linkweb, ils ont conçu notre site et géré le référencement, les mises en page et le design... Aujourd'hui grâce à notre site Internet c'est une cinquantaine de nouveaux clients par mois qui poussent la porte de notre établissement. »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
                            <img 
                                src={ stars }
                                alt="Création site internet Toulouse"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Ferme Auberge Marquine</div>
                            <div className="italic">« Très satisfait du site de Linkweb, ils sont très réactifs et surtout à l'écoute. Un grand merci à Anthony qui fait le point chaque mois afin de nous tenir informés de notre visibilité sur le Web. »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500"*/>
                            <img 
                                src={ stars }
                                alt="Création site internet Agen"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Cafétéria La Fontaine</div>
                            <div className="italic">« Très bonne équipe, Anthony mon conseiller m'appelle régulièrement pour faire le point sur l'avancement et le positionnement du site. Je recommande Linweb sans réserve. »</div>
                        </div>
                        <br/>
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
                    <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                            Création de site internet pour restaurant :<br/><span className="font-bold">Une solution en accord avec vos besoins</span>
                        </h2>
                        <hr className="blue"></hr>
                    </section>
                    <section  className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                          <div className="w-full" label="PRÉSENTER SA CUISINE ET SON RESTAURANT">
                            <p>Pour un <strong className="font-normal">restaurateur</strong>, l’intérêt d’un <strong className="font-normal">site web</strong> va être double : non seulement il doit susciter l’<strong className="font-normal">intérêt d’un utilisateur</strong> en se rendant <strong className="font-normal">visible dans les résultats de recherche</strong>, mais doit également séduire pour orienter son choix. La <strong className="font-normal">création d’un site internet vitrine</strong> va permettre de mettre en avant sa cuisine en faisant la promotion de son savoir-faire et des produits utilisés.
                            <br/><br/>
                                De plus, le <strong className="font-normal">site web destiné à promouvoir le restaurant</strong> doit être construit de façon à orienter le <strong className="font-normal">parcours de l’utilisateur</strong> de façon habile. Démontrer toute sa compétence avec un <strong className="font-normal">contenu de qualité</strong> et mis en place pour répondre aux <strong className="font-normal">besoins des utilisateurs</strong> va permettre la réalisation d’un <strong className="font-normal">outil web efficace</strong>.
                            </p>
                          </div>
                          <div label="TOUCHER UN PUBLIC LOCAL AVEC UN CONTENU EFFICACE">
                            <p>Lorsqu’un utilisateur est à la <strong className="font-normal">recherche d’un restaurant</strong> où se rendre pour déjeuner ou dîner, celui-ci va être particulièrement attentif à certains détails. Les <strong className="font-normal">horaires d’ouverture</strong>, les <strong className="font-normal">modalités d’accès</strong>, la <strong className="font-normal">carte proposée</strong> ou encore des <strong className="font-normal">retours clients</strong> sont autant d’informations qui vont être déterminantes dans son choix.
                            <br/><br/>
                                Afin de faire de <strong className="font-normal">votre site internet</strong> un outil efficace, son contenu doit être travaillé de façon à ne pas laisser de place au hasard. Ainsi, l’utilisateur doit avoir accès à l’ensemble des informations dont il a besoin pour se décider. Plus il aura d’informations à propos de vous et de ce que vous proposez et plus il sera à même de <strong className="font-normal">réserver une table.</strong>
                                </p>
                          </div>
                          <div label="OBTENIR DES RÉSERVATIONS AVEC UN SITE CONSTRUIT POUR GÉNÉRER DES LEADS">
                            <p><strong className="font-normal">Générer des contacts</strong> avec un <strong className="font-normal">site vitrine</strong> est possible. Pour cela, il est essentiel que tout soit fait pour favoriser les <strong className="font-normal">clics</strong>. Qu’il s’agisse de votre numéro de téléphone ou de votre adresse mail, vos informations de contact doivent être mises en avant. De plus, il est important de faciliter la démarche de l’utilisateur en rendant ces informations directement cliquables.
                            <br/><br/>
                                Enfin, il existe la possibilité de mettre en place un <strong className="font-normal">module de réservation</strong> directement <strong className="font-normal">sur le site web</strong> et qui va vous permettre d’enregistrer ces dernières directement <strong className="font-normal">en ligne</strong>. Il est important de mettre en place toutes les commodités possibles pour proposer une <strong className="font-normal">expérience utilisateur</strong> optimale et pratique.</p>
                          </div>
                        </Accordion>
                    </div>
                  </section>
                  <section className="w-full mb-16 flex justify-center">
                    <div className="carousel century w-full lg:w-1/2 flex-full flex justify-center items-center py-0 lg:py-10 text-black px-10 text-sm xl:text-md" style={{backgroundColor:'#d3d3d352'}}>
                      <div className="carousel-inner">
                        <input className="opacity-0 carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true"  defaultChecked/>
                        <div className="carousel-item">
                            <svg width="80px" className="mx-auto block pt-4" viewBox="0 0 512 640"><g><g><path fill="#37cfee" d="M169.63,412.443c-1.459,0-2.908-0.177-4.308-0.527c-0.075-0.019-0.148-0.04-0.221-0.064    c-10.277-3.426-16.41-13.78-13.962-23.573l68.011-256.042c0.275-1.037,1.083-1.848,2.12-2.127    c1.038-0.278,2.143,0.017,2.901,0.776c8.533,8.533,17.997,13.287,28.128,14.131c0.887,0.074,1.694,0.538,2.206,1.265    c0.512,0.728,0.673,1.645,0.442,2.504l-66.983,248.939C186.034,406.258,178.335,412.443,169.63,412.443z M166.888,406.122    c0.89,0.214,1.812,0.321,2.742,0.321c5.093,0,11.02-3.465,12.491-10.088c0.01-0.044,0.021-0.087,0.032-0.129l66.103-245.667    c-8.769-1.433-17.01-5.441-24.588-11.959L156.95,389.776C155.305,396.357,159.753,403.685,166.888,406.122z"/></g><g><path fill="#37cfee" d="M339.467,412.443c-8.498,0-16.419-5.958-19.263-14.489c-0.021-0.059-0.038-0.119-0.054-0.18l-66-249    c-0.227-0.854-0.065-1.765,0.442-2.488c0.506-0.724,1.307-1.188,2.187-1.268c11.029-1.002,20.835-6.052,26.903-13.854    c0.699-0.897,1.846-1.322,2.961-1.099c1.115,0.225,2.008,1.062,2.304,2.16l69,256c2.462,9.846-3.671,20.2-13.948,23.626    c-0.072,0.024-0.146,0.046-0.221,0.064C342.378,412.267,340.928,412.443,339.467,412.443z M325.925,396.143    c2.062,6.07,7.617,10.301,13.542,10.301c0.932,0,1.854-0.107,2.745-0.321c7.135-2.438,11.583-9.765,9.928-16.389l-67.559-250.65    c-6.238,5.939-14.551,9.967-23.754,11.466L325.925,396.143z"/></g><g><path fill="#37cfee" d="M254.05,151.006c-24.813,0-45-20.187-45-45c0-25.234,19.766-45,45-45c25.794,0,46,19.766,46,45    C300.05,130.819,279.414,151.006,254.05,151.006z M254.05,67.006c-21.869,0-39,17.131-39,39c0,21.505,17.495,39,39,39    c22.056,0,40-17.495,40-39C294.05,83.772,276.854,67.006,254.05,67.006z"/></g><g><path fill="#37cfee" d="M254.05,128.006c-11.72,0-22-10.28-22-22c0-12.467,10.075-23,22-23c12.682,0,23,10.318,23,23    C277.05,117.931,266.518,128.006,254.05,128.006z M254.05,89.006c-8.523,0-16,7.944-16,17c0,8.374,7.626,16,16,16    c9.056,0,17-7.477,17-16C271.05,96.632,263.424,89.006,254.05,89.006z"/></g><g><path fill="#37cfee" d="M266.05,68.006c-0.243,0-0.487-0.029-0.728-0.089c-3.642-0.911-7.348-0.911-11.272-0.911c-2.954,0-6.631,0-10.272,0.911    c-0.896,0.224-1.846,0.023-2.574-0.546c-0.728-0.569-1.154-1.441-1.154-2.365v-28c0-7.72,6.28-14,14-14c8.411,0,15,6.149,15,14v28    c0,0.924-0.426,1.796-1.153,2.365C267.363,67.787,266.712,68.006,266.05,68.006z M254.05,61.006c2.933,0,5.937,0,9,0.395V37.006    c0-4.561-3.869-8-9-8c-4.336,0-8,3.664-8,8v24.392C249.046,61.006,251.839,61.006,254.05,61.006z"/></g><g><path fill="#37cfee" d="M155.052,450.007c-0.276,0-0.557-0.039-0.835-0.119c-1.592-0.461-2.508-2.124-2.048-3.716l11-38    c0.461-1.593,2.127-2.507,3.716-2.048c1.592,0.461,2.508,2.124,2.048,3.716l-11,38    C157.552,449.153,156.353,450.007,155.052,450.007z"/></g><g><path fill="#37cfee" d="M354.049,450.007c-1.302,0-2.501-0.854-2.881-2.167l-11-38c-0.461-1.592,0.456-3.255,2.048-3.716    c1.595-0.458,3.256,0.457,3.716,2.048l11,38c0.461,1.592-0.456,3.255-2.048,3.716    C354.605,449.968,354.324,450.007,354.049,450.007z"/></g><g><path fill="#37cfee" d="M418.378,342.366h-76.67c-1.657,0-3-1.343-3-3s1.343-3,3-3h76.67c1.657,0,3,1.343,3,3S420.035,342.366,418.378,342.366z     M307.958,342.366H267.3c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.658c1.657,0,3,1.343,3,3S309.615,342.366,307.958,342.366z"/></g><g><path fill="#37cfee" d="M244.416,342.366h-43.438c-1.657,0-3-1.343-3-3s1.343-3,3-3h43.438c1.657,0,3,1.343,3,3S246.072,342.366,244.416,342.366z     M167.251,342.366h-69.34c-1.657,0-3-1.343-3-3s1.343-3,3-3h69.34c1.657,0,3,1.343,3,3S168.908,342.366,167.251,342.366z"/></g><g><path fill="#37cfee" d="M431.05,349.006h-13c-1.657,0-3-1.343-3-3v-13c0-1.657,1.343-3,3-3h13c1.657,0,3,1.343,3,3v13    C434.05,347.663,432.707,349.006,431.05,349.006z M421.05,343.006h7v-7h-7V343.006z"/></g><g><path fill="#37cfee" d="M267.05,354.006h-23c-1.657,0-3-1.343-3-3v-23c0-1.657,1.343-3,3-3h23c1.657,0,3,1.343,3,3v23    C270.05,352.663,268.707,354.006,267.05,354.006z M247.05,348.006h17v-17h-17V348.006z"/></g><g><path fill="#37cfee" d="M244.416,341.719c-0.122,0-0.245-0.008-0.368-0.022c-14.586-1.803-28.596-7.322-40.516-15.963    c-1.341-0.972-1.641-2.848-0.668-4.189c0.973-1.341,2.848-1.641,4.19-0.668c10.181,7.379,21.997,12.314,34.362,14.377v-7.341    c0-1.657,1.343-3,3-3H267.3c1.657,0,3,1.343,3,3v6.999c11.364-2.172,22.284-6.813,31.775-13.526    c1.355-0.956,3.226-0.635,4.182,0.717c0.957,1.353,0.636,3.225-0.717,4.182c-11.211,7.931-24.284,13.167-37.807,15.145    c-0.859,0.122-1.735-0.129-2.396-0.699c-0.659-0.569-1.038-1.398-1.038-2.27v-7.547h-16.884v7.807    c0,0.859-0.369,1.678-1.013,2.248C245.851,341.454,245.143,341.719,244.416,341.719z M329.662,297.493    c-0.477,0-0.961-0.114-1.411-0.354c-1.461-0.781-2.013-2.599-1.232-4.061c6.275-11.745,9.592-25.029,9.592-38.418    c0-1.657,1.343-3,3-3s3,1.343,3,3c0,14.371-3.562,28.634-10.299,41.246C331.771,296.917,330.734,297.493,329.662,297.493z     M179.557,296.384c-1.089,0-2.139-0.595-2.671-1.63c-6.414-12.483-9.666-25.974-9.666-40.094c0-1.657,1.343-3,3-3s3,1.343,3,3    c0,13.157,3.029,25.725,9.002,37.352c0.757,1.474,0.176,3.282-1.297,4.039C180.486,296.276,180.018,296.384,179.557,296.384z"/></g><g><path fill="#37cfee" d="M347.05,258.006h-14c-1.657,0-3-1.343-3-3v-14c0-1.657,1.343-3,3-3h14c1.657,0,3,1.343,3,3v14    C350.05,256.663,348.707,258.006,347.05,258.006z M336.05,252.006h8v-8h-8V252.006z"/></g><g><path fill="#37cfee" d="M177.05,258.006h-14c-1.657,0-3-1.343-3-3v-14c0-1.657,1.343-3,3-3h14c1.657,0,3,1.343,3,3v14    C180.05,256.663,178.707,258.006,177.05,258.006z M166.05,252.006h8v-8h-8V252.006z"/></g><g><path fill="#37cfee" d="M98.05,349.006h-13c-1.657,0-3-1.343-3-3v-13c0-1.657,1.343-3,3-3h13c1.657,0,3,1.343,3,3v13    C101.05,347.663,99.707,349.006,98.05,349.006z M88.05,343.006h7v-7h-7V343.006z"/></g><g><path fill="#37cfee" d="M363.05,475.006h-219c-1.657,0-3-1.343-3-3s1.343-3,3-3h219c1.657,0,3,1.343,3,3S364.707,475.006,363.05,475.006z"/></g><g><path fill="#37cfee" d="M418.05,475.006h-25c-1.657,0-3-1.343-3-3s1.343-3,3-3h25c1.657,0,3,1.343,3,3S419.707,475.006,418.05,475.006z"/></g><g><path fill="#37cfee" d="M340.05,489.006h-114c-1.657,0-3-1.343-3-3s1.343-3,3-3h114c1.657,0,3,1.343,3,3S341.707,489.006,340.05,489.006z"/></g><g><path fill="#37cfee" d="M131.05,489.006h-50c-1.657,0-3-1.343-3-3s1.343-3,3-3h50c1.657,0,3,1.343,3,3S132.707,489.006,131.05,489.006z"/></g><g><path fill="#37cfee" d="M199.05,489.006h-23c-1.657,0-3-1.343-3-3s1.343-3,3-3h23c1.657,0,3,1.343,3,3S200.707,489.006,199.05,489.006z"/></g><g><path fill="#37cfee" d="M351.05,376.006c-0.747,0-1.494-0.276-2.076-0.834c-1.195-1.146-1.236-3.046-0.09-4.242    c22.984-23.982,36.166-56.759,36.166-89.924c0-1.657,1.343-3,3-3s3,1.343,3,3c0,34.697-13.79,68.986-37.834,94.076    C352.627,375.696,351.839,376.006,351.05,376.006z"/></g><g><path fill="#37cfee" d="M158.051,375.006c-0.812,0-1.621-0.327-2.212-0.973c-23.724-25.88-36.789-58.918-36.789-93.027c0-1.657,1.343-3,3-3    s3,1.343,3,3c0,32.604,12.505,64.202,35.211,88.973c1.12,1.222,1.037,3.119-0.184,4.239    C159.501,374.745,158.775,375.006,158.051,375.006z"/></g><g><path fill="#37cfee" d="M255.05,416.006c-24.967,0-49.361-6.718-70.543-19.428c-1.421-0.853-1.881-2.695-1.029-4.116    c0.853-1.42,2.695-1.881,4.116-1.028c20.25,12.15,43.577,18.572,67.457,18.572c24.664,0,47.022-5.912,66.456-17.572    c1.422-0.854,3.264-0.392,4.116,1.028c0.853,1.421,0.392,3.264-1.028,4.116C304.214,409.806,280.816,416.006,255.05,416.006z"/></g></g></svg>
                            <h3 className="century text-lg lg:text-2xl tracking-wider pb-2 text-center" /*data-aos="zoom-in"*/>
                                Vous souhaitez créer un site internet pour <br/>votre entreprise <span className="text-bleu">artisanale</span> ?
                            </h3>
                            <div className="w-2/3 mx-auto block mb-16">
                            <RoundButton url="/creation-site-internet-toulouse/creation-site-pour-artisan/" text="Création de site web pour artisan"/>
                            </div>
                        </div>
                        <input className="opacity-0 carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true"/>
                        <div className="carousel-item">
                            <svg width="80px" className="mx-auto block pt-4" viewBox="0 0 100 125"><g><g><path fill="#37cfee" d="M40.3,65.7h32.9c0.6,0,1-0.5,1-1c0-0.6-0.5-1-1-1H40.3c-0.6,0-1,0.5-1,1C39.3,65.2,39.8,65.7,40.3,65.7z"></path><path fill="#37cfee" d="M87.4,58.7h-9.7v-6.5c0-0.5-0.4-1-1-1H43.4c-0.5,0-1,0.4-1,1v6.5h-3.2L38,31.4c0-0.5-0.5-0.9-1-0.9h-6.7     c-0.5,0-1,0.4-1,0.9l-1.1,23.7l-1.1-23.7c0-0.5-0.5-0.9-1-0.9h-6.7c-0.5,0-1,0.4-1,0.9l-1.3,27.3h-4.8c-0.5,0-1,0.4-1,1V94     c0,0.5,0.4,1,1,1h74.9c0.5,0,1-0.4,1-1V59.7C88.4,59.2,88,58.7,87.4,58.7z M83.1,60.7V93h-1.5V60.7H83.1z M68.6,53.2h7.2v5.5     h-7.2V53.2z M59.4,53.2h7.2v5.5h-7.2V53.2z M50.2,53.2h7.2v5.5h-7.2V53.2z M44.4,53.2h3.8v5.5h-3.8V53.2z M31.3,32.4h4.8     l1.2,26.3h-7.3L31.3,32.4z M20.5,32.4h4.8l1.2,26.3h-7.3L20.5,32.4z M25.9,93h-7.1V79.7h7.1V93z M34.9,93h-7.1V79.7h7.1V93z      M35.9,77.8H17.8c-0.5,0-1,0.4-1,1V93h-3.3V60.7h66.1V93H36.9V78.8C36.9,78.2,36.5,77.8,35.9,77.8z M86.5,93h-1.4V60.7h1.4V93z"></path><path fill="#37cfee" d="M28.7,27.6c0.9-0.1,1.7-0.5,2.5-1c1.2,1.1,2.9,1.7,4.6,1.4c0.6-0.1,1.2-0.3,1.7-0.5c0,0,0,0.1,0.1,0.1     c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.2,0.2,0.3,0.4,0.4c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.3,0.3,0.5,0.4     c0.1,0.1,0.2,0.1,0.3,0.2c0.2,0.1,0.4,0.3,0.6,0.4c0.1,0,0.1,0,0.2,0.1c0.8,0.4,1.8,0.7,2.7,0.7c0.3,0,0.6,0,0.9-0.1     c0.1,0,0.1,0,0.2-0.1c0.2,0,0.3-0.1,0.5-0.1c1.6,1.9,3.9,3.1,6.4,3.1c0.4,0,0.8,0,1.2-0.1c1.4-0.2,2.8-0.8,3.9-1.7c0,0,0,0,0,0     c0.4,0.3,0.9,0.5,1.4,0.7c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2,0.1,0.3,0.1c0.2,0.1,0.4,0.1,0.7,0.1c0,0,0,0,0.1,0c0.2,0,0.5,0,0.7,0     c0,0,0,0,0,0c0,0,0,0,0,0c0.3,0,0.6,0,0.9-0.1c2-0.3,3.7-1.5,4.5-3.3c1.1,0.4,2.2,0.5,3.4,0.3c1.9-0.3,3.6-1.3,4.8-2.8     c1.2-1.6,1.6-3.5,1.4-5.4c-0.4-2.5-2.1-4.7-4.4-5.7c0-0.4,0-0.7-0.1-1C69.1,9.4,64.1,5,58.2,5c-0.5,0-1.1,0-1.6,0.1     c0,0,0,0-0.1,0c-0.2,0-0.3,0.1-0.5,0.1c-0.2,0-0.4,0.1-0.7,0.1c-0.2,0-0.3,0.1-0.5,0.1c-0.3,0.1-0.6,0.2-0.9,0.3     c-0.1,0-0.2,0.1-0.2,0.1c-1.7,0.7-3.2,1.7-4.4,3.1c-1.8-0.9-3.9-1.2-6-1c-2.1,0.3-4,1.2-5.5,2.6c-1.4-0.9-3.1-1.3-4.7-1     c-1.9,0.3-3.5,1.2-4.6,2.7c-1.1,1.4-1.5,3.2-1.4,5c-2.8,0.4-4.8,3.1-4.4,5.9C23.2,26,25.8,28,28.7,27.6z M27.5,19.3     c0.3,0,0.5,0,0.8,0c0.3,0,0.6-0.1,0.8-0.4c0.2-0.3,0.3-0.6,0.2-0.9c-0.1-0.2-0.1-0.4-0.2-0.6c-0.4-2.8,1.5-5.3,4.3-5.7     c1.2-0.2,2.3,0.1,3.3,0.7c0,0.3,0.2,0.6,0.4,0.8c0.4,0.3,1,0.2,1.3-0.2c1.3-1.6,3.1-2.6,5.2-2.9c1.5-0.2,3.1,0,4.5,0.6     c-0.2,0.3-0.3,0.5-0.5,0.8c-0.2,0.5-0.1,1.1,0.4,1.3c0.1,0.1,0.3,0.1,0.4,0.1c0.4,0,0.7-0.2,0.9-0.5c0.9-1.8,2.3-3.2,4-4.1     c0,0,0,0,0.1,0c0.3-0.2,0.6-0.3,0.9-0.4c0.1,0,0.2-0.1,0.3-0.1c0.2-0.1,0.4-0.2,0.7-0.2c0.2,0,0.3-0.1,0.5-0.1     c0.1,0,0.2,0,0.3-0.1c0.2,0,0.4-0.1,0.7-0.1C57.3,7,57.8,7,58.2,7c4.9,0,9.1,3.7,9.8,8.5c0.1,0.4,0.1,0.9,0.1,1.4c0,0,0,0,0,0     c0,0,0,0,0,0c0,0.9-0.3,2.3-0.3,2.3c-0.1,0.5,0.2,1,0.8,1.1c0.1,0,0.1,0,0.2,0c0.5,0,0.9-0.3,1-0.8c0,0,0.1-0.6,0.2-1.2     c1.4,0.8,2.3,2.2,2.5,3.8c0.2,1.4-0.2,2.8-1,3.9c-0.8,1.1-2.1,1.9-3.5,2.1c-1.1,0.2-2.2,0-3.2-0.5c-0.3-0.1-0.6-0.1-0.8,0     c-0.3,0.1-0.5,0.3-0.6,0.6c-0.5,1.5-1.8,2.7-3.3,2.9c0,0,0,0,0,0c-0.2,0-0.4,0-0.6,0c0,0,0,0-0.1,0c-0.2,0-0.3,0-0.5,0     c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.3-0.1c-0.5-0.1-1-0.4-1.5-0.7c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1-0.1-0.2-0.1     c-0.3-0.3-0.5-0.6-0.7-0.9c-0.2-0.5-0.8-0.7-1.3-0.4c-0.5,0.2-0.7,0.8-0.4,1.3c0.1,0.2,0.2,0.4,0.3,0.5c-0.8,0.6-1.8,1-2.8,1.2     c-2.4,0.3-4.8-0.7-6.2-2.7c0,0,0,0,0-0.1c-0.5-0.8-0.8-1.6-1-2.6c-0.1-0.5-0.6-0.9-1.1-0.8c-0.5,0.1-0.9,0.6-0.8,1.1     c0.1,0.8,0.3,1.5,0.7,2.3c-1.3,0.1-2.4-0.3-3.3-1.1c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.3-0.3-0.4-0.5c0,0-0.1-0.1-0.1-0.1     c-0.1-0.2-0.2-0.3-0.3-0.5c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.2-0.1-0.3-0.2-0.5c0-0.2-0.1-0.3-0.1-0.5c-0.1-0.5-0.6-0.9-1.1-0.8     c-0.5,0.1-0.8,0.5-0.8,1c-0.4,0.3-0.9,0.4-1.4,0.5c0,0,0,0,0,0c-1.3,0.2-2.7-0.4-3.5-1.5c-0.3-0.4-0.9-0.5-1.4-0.2     c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0-0.1,0.1-0.2,0.1c-0.5,0.5-1.1,0.9-1.9,1c-1.8,0.3-3.4-1-3.7-2.7C24.5,21.2,25.7,19.5,27.5,19.3     z"></path><path fill="#37cfee" d="M52.9,23.4c0.3,0,0.6-0.1,0.8-0.4c1.5-2.2,2.2-4.8,1.8-7.4c-0.1-0.5-0.6-0.9-1.1-0.8c-0.5,0.1-0.9,0.6-0.8,1.1     c0.3,2.1-0.2,4.2-1.4,6c-0.3,0.4-0.2,1.1,0.2,1.4C52.5,23.3,52.7,23.4,52.9,23.4z"></path><path fill="#37cfee" d="M35.4,22.5c0,0,0.1,0,0.1,0c2.2-0.3,4.2-1.7,5.3-3.7c0.3-0.5,0.1-1.1-0.4-1.3c-0.5-0.3-1.1-0.1-1.3,0.4     c-0.8,1.4-2.2,2.4-3.8,2.7c-0.5,0.1-0.9,0.6-0.8,1.1C34.5,22.1,34.9,22.5,35.4,22.5z"></path><path fill="#37cfee" d="M70.9,68.6H42.7c-0.6,0-1,0.5-1,1v18.7c0,0.6,0.5,1,1,1h28.1c0.6,0,1-0.5,1-1V69.6C71.9,69.1,71.4,68.6,70.9,68.6z      M51.1,87.4h-7.4V80h7.4V87.4z M51.1,78h-7.4v-7.4h7.4V78z M60.5,87.4h-7.4V80h7.4V87.4z M60.5,78h-7.4v-7.4h7.4V78z M69.9,87.4     h-7.4V80h7.4V87.4z M69.9,78h-7.4v-7.4h7.4V78z"></path></g></g></svg>                            
                            <h3 className="century text-lg lg:text-2xl tracking-wider pb-2 text-center" /*data-aos="zoom-in"*/>
                                Vous souhaitez créer un site internet pour <br/>votre <span className="text-bleu">entreprise du secteur industriel</span> ?
                            </h3>
                            <div className="w-2/3 mx-auto block mb-16">
                            <RoundButton url="/creation-site-internet-toulouse/site-internet-industrie/" text="Création de site web pour industrie"/>
                            </div>
                        </div>
                        <input className="opacity-0 carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true"/>
                        <div className="carousel-item">
                                <img src={surmesure} width="80px" className="mx-auto block mb-4" alt="Création site internet à Toulouse"/>
                                <h3 className="century text-lg lg:text-2xl tracking-wider pb-2 text-center" /*data-aos="zoom-in"*/>
                                Vous souhaitez créer un site internet pour <br/>votre <span className="text-bleu">entreprise du secteur immobilier</span> ?
                            </h3>
                            <div className="w-2/3 mx-auto block mb-16">
                            <RoundButton url="/creation-site-internet-toulouse/site-internet-immobilier/" text="Création de site web immobilier"/>
                            </div>
                        </div>
                        <input className="opacity-0 carousel-open" type="radio" id="carousel-4" name="carousel" aria-hidden="true"/>
                        <div className="carousel-item">
                                <svg width="70px" className="mx-auto mt-6 mb-2 block" viewBox="0 0 192.721 225.1225" fill="#37cfee"><g><circle fill="#37cfee" cx="19" cy="124.662" r="4.071"/><ellipse fill="#37cfee" cx="19" cy="112.109" rx="2.714" ry="6.447"/><ellipse fill="#37cfee" cx="19" cy="137.216" rx="2.714" ry="6.447"/><ellipse fill="#37cfee" transform="matrix(0.7072 -0.7071 0.7071 0.7072 -73.7034 53.6176)" cx="27.877" cy="115.785" rx="6.446" ry="2.714"/><ellipse fill="#37cfee" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -91.4588 46.2684)" cx="10.124" cy="133.539" rx="6.446" ry="2.714"/><ellipse fill="#37cfee" cx="31.554" cy="124.662" rx="6.446" ry="2.714"/><ellipse fill="#37cfee" cx="6.446" cy="124.662" rx="6.446" ry="2.714"/><ellipse fill="#37cfee" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -86.2635 58.8276)" cx="27.877" cy="133.539" rx="2.714" ry="6.446"/><ellipse fill="#37cfee" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -78.9074 41.0711)" cx="10.124" cy="115.785" rx="2.714" ry="6.446"/><path fill="#37cfee" d="M28.434,180.098c0.002,0,0.004-0.001,0.006-0.001H45c0-4.766-9.989-5.897-14.389-5.992   c0.623-3.465,0.886-6.811,0.885-9.962c-0.004-14.165-5.13-24.412-5.167-24.494c-0.247-0.493-0.848-0.693-1.341-0.446   c-0.495,0.246-0.695,0.846-0.446,1.341h-0.002c0.002,0.002,0.297,0.59,0.759,1.729c1.394,3.419,4.199,11.612,4.199,21.871   c-0.001,3.158-0.275,6.515-0.927,9.989C23.864,174.344,15,175.608,15,180.097h13.428C28.43,180.097,28.432,180.098,28.434,180.098z   "/><path fill="#37cfee" d="M18.972,157.764c5.541,1.897,7.42,0.996,8.003-0.709c0.584-1.705-0.348-3.568-5.889-5.465   c-5.542-1.898-13.594-3.11-14.178-1.406C6.324,151.889,13.431,155.867,18.972,157.764z"/><path fill="#37cfee" d="M34.667,155.949c1.683,0.644,3.579-0.22,5.671-5.691c2.094-5.471,3.593-13.476,1.909-14.119   c-1.683-0.645-5.911,6.316-8.004,11.787C32.149,153.396,32.983,155.305,34.667,155.949z"/><path fill="#37cfee" d="M164.234,137.124c-4.811,2.212-10.838,6.439-10.156,7.919c0.681,1.48,7.812-0.347,12.623-2.56   c4.81-2.212,5.477-3.974,4.796-5.454C170.816,135.55,169.044,134.911,164.234,137.124z"/><path fill="#37cfee" d="M147.993,143.233c1.411-0.642-0.298-7.435-2.384-12.02c-2.085-4.586-3.759-5.229-5.169-4.586   c-1.411,0.641-2.026,2.324,0.059,6.911C142.585,138.122,146.582,143.874,147.993,143.233z"/><path fill="#37cfee" d="M111.115,174.109c-0.191-2.194-0.751-6.124-2.398-10.542c0.023-0.058,0.055-0.111,0.068-0.174   c0-0.002,0.11-0.558,0.422-1.53c0.943-2.93,3.672-9.244,10.081-12.793c0.482-0.268,0.658-0.876,0.388-1.358   c-0.268-0.484-0.877-0.658-1.358-0.39c-6.686,3.742-9.645,9.983-10.818,13.352c-1.615-3.434-3.93-6.986-7.263-10.124   c-0.404-0.377-1.036-0.357-1.414,0.047c-0.378,0.404-0.357,1.036,0.047,1.414c5.151,4.829,7.749,10.816,9.051,15.615   c0.651,2.397,0.975,4.494,1.138,5.983c0.02,0.182,0.037,0.353,0.052,0.515c-4.648,0.184-13.778,1.418-13.778,5.974h30   C125.333,175.393,115.599,174.23,111.115,174.109z"/><path fill="#37cfee" d="M134.689,180.097h30c0-4.371-8.406-5.685-13.193-5.946c-0.131-0.604-0.271-1.293-0.411-2.062   c-0.564-3.078-1.126-7.373-1.126-12.216c-0.002-9.072,1.974-20.007,9.482-28.601c0.363-0.417,0.32-1.048-0.094-1.412   c-0.416-0.363-1.048-0.32-1.41,0.097c-7.96,9.121-9.977,20.577-9.979,29.916c0.001,5.948,0.819,11.047,1.484,14.226   C145.259,174.139,134.689,175.195,134.689,180.097z"/><path fill="#37cfee" d="M159.652,103.885c1.492,2.358,2.898,4.656,4.218,6.893l1.021-0.494c-0.909-2.436-1.824-4.97-2.745-7.605   c-0.919-2.636-1.485-4.171-1.696-4.607c-0.245-0.506-0.607-0.852-1.083-1.035c-0.477-0.184-0.959-0.158-1.448,0.078   c-0.489,0.237-0.807,0.602-0.957,1.095c-0.15,0.491-0.104,0.987,0.136,1.484C157.309,100.129,158.161,101.527,159.652,103.885z"/><path fill="#37cfee" d="M173.368,129.029c0.488-0.237,0.807-0.602,0.957-1.094c0.148-0.492,0.104-0.986-0.137-1.484   c-0.213-0.437-1.063-1.834-2.555-4.191c-1.492-2.358-2.898-4.656-4.217-6.893l-1.021,0.494c0.91,2.436,1.824,4.97,2.745,7.605   c0.92,2.635,1.486,4.17,1.697,4.608c0.244,0.505,0.606,0.851,1.083,1.034C172.395,129.292,172.879,129.265,173.368,129.029z"/><path fill="#37cfee" d="M166.931,95.391c-0.542-0.04-1,0.117-1.376,0.469c-0.374,0.351-0.582,0.802-0.623,1.354   c-0.035,0.484,0.003,2.119,0.116,4.908c0.114,2.788,0.182,5.48,0.206,8.077l1.131,0.083c0.429-2.564,0.905-5.217,1.426-7.96   c0.521-2.741,0.799-4.354,0.834-4.838c0.041-0.56-0.099-1.04-0.42-1.437C167.904,95.648,167.473,95.43,166.931,95.391z"/><path fill="#37cfee" d="M163.475,123.822c-0.522,2.742-0.799,4.354-0.835,4.838c-0.04,0.56,0.1,1.041,0.42,1.437   c0.321,0.397,0.752,0.617,1.294,0.657c0.542,0.039,1-0.117,1.376-0.469c0.375-0.351,0.583-0.802,0.624-1.354   c0.034-0.483-0.004-2.119-0.116-4.907c-0.113-2.789-0.182-5.48-0.207-8.078l-1.131-0.082   C164.47,118.426,163.995,121.079,163.475,123.822z"/><path fill="#37cfee" d="M175.6,98.403c-0.449-0.304-0.925-0.398-1.426-0.282c-0.502,0.117-0.907,0.404-1.217,0.861   c-0.273,0.4-1.058,1.836-2.354,4.308c-1.296,2.471-2.584,4.838-3.861,7.099l0.939,0.637c1.654-2.005,3.392-4.065,5.213-6.18   c1.822-2.114,2.869-3.372,3.141-3.773c0.316-0.465,0.435-0.951,0.355-1.455C176.313,99.114,176.047,98.709,175.6,98.403z"/><path fill="#37cfee" d="M158.39,121.297c-1.822,2.115-2.869,3.373-3.141,3.773c-0.316,0.465-0.435,0.95-0.356,1.455   c0.08,0.506,0.344,0.91,0.793,1.216c0.449,0.305,0.924,0.398,1.425,0.281c0.501-0.116,0.907-0.403,1.217-0.86   c0.272-0.401,1.057-1.837,2.353-4.309c1.295-2.471,2.583-4.837,3.86-7.099l-0.938-0.637   C161.95,117.122,160.211,119.183,158.39,121.297z"/><path fill="#37cfee" d="M180.506,104.39c-0.492-0.148-0.988-0.104-1.484,0.138c-0.438,0.21-1.834,1.062-4.192,2.554   c-2.358,1.492-4.656,2.898-6.893,4.218l0.495,1.021c2.435-0.909,4.97-1.824,7.605-2.745c2.637-0.92,4.172-1.486,4.607-1.698   c0.506-0.244,0.852-0.605,1.035-1.082c0.184-0.477,0.158-0.96-0.078-1.448C181.363,104.858,180.998,104.54,180.506,104.39z"/><path fill="#37cfee" d="M155.248,116.569c-2.635,0.92-4.17,1.485-4.607,1.697c-0.506,0.245-0.85,0.605-1.034,1.083   c-0.184,0.476-0.158,0.959,0.079,1.447c0.236,0.489,0.601,0.808,1.094,0.957c0.493,0.149,0.987,0.104,1.484-0.137   c0.437-0.211,1.834-1.062,4.192-2.555c2.359-1.492,4.656-2.897,6.894-4.217l-0.495-1.021   C160.418,114.733,157.884,115.648,155.248,116.569z"/><path fill="#37cfee" d="M182.668,115.655c0.396-0.321,0.617-0.753,0.654-1.295c0.041-0.541-0.115-0.999-0.467-1.375   c-0.352-0.375-0.803-0.583-1.355-0.624c-0.482-0.036-2.119,0.003-4.906,0.116c-2.789,0.113-5.481,0.182-8.079,0.206l-0.083,1.132   c2.563,0.429,5.217,0.905,7.96,1.426c2.741,0.521,4.355,0.798,4.838,0.834C181.791,116.115,182.27,115.976,182.668,115.655z"/><path fill="#37cfee" d="M149.784,113.782c0.483,0.035,2.119-0.003,4.908-0.117c2.788-0.111,5.48-0.18,8.078-0.205l0.082-1.131   c-2.564-0.43-5.217-0.905-7.96-1.426c-2.741-0.521-4.354-0.8-4.837-0.834c-0.561-0.042-1.041,0.099-1.438,0.419   c-0.397,0.321-0.615,0.753-0.655,1.294c-0.04,0.541,0.117,1,0.469,1.376C148.782,113.534,149.233,113.742,149.784,113.782z"/><path fill="#37cfee" d="M179.096,123.821c0.505-0.079,0.91-0.343,1.215-0.792c0.305-0.449,0.398-0.925,0.282-1.425   c-0.116-0.502-0.404-0.907-0.861-1.219c-0.401-0.271-1.837-1.057-4.308-2.353c-2.472-1.297-4.838-2.583-7.099-3.86l-0.637,0.939   c2.005,1.653,4.065,3.392,6.179,5.214c2.114,1.821,3.373,2.869,3.774,3.141C178.106,123.782,178.591,123.9,179.096,123.821z"/><path fill="#37cfee" d="M151.553,105.758c0.401,0.272,1.838,1.057,4.308,2.353c2.471,1.297,4.838,2.583,7.1,3.86l0.637-0.939   c-2.006-1.654-4.066-3.392-6.181-5.214c-2.114-1.822-3.372-2.869-3.773-3.141c-0.465-0.316-0.95-0.435-1.455-0.356   c-0.504,0.079-0.91,0.343-1.215,0.792c-0.305,0.45-0.399,0.925-0.282,1.425C150.809,105.042,151.096,105.447,151.553,105.758z"/><path fill="#37cfee" d="M115.992,62.857c-18.56,18.602,27.348,18.551,8.744-0.012c18.604,18.563,18.551-27.347-0.01-8.743   c18.561-18.603-27.348-18.55-8.744,0.01C97.378,35.553,97.432,81.46,115.992,62.857z M120.355,55.2   c1.81-0.002,3.28,1.465,3.283,3.275c0.002,1.812-1.465,3.281-3.275,3.283c-1.812,0.002-3.281-1.463-3.284-3.275   C117.077,56.673,118.543,55.202,120.355,55.2z"/><path fill="#37cfee" d="M34.818,65.686c-14.333,14.365,21.119,14.326,6.753-0.01c14.367,14.335,14.326-21.118-0.007-6.751   c14.333-14.366-21.119-14.325-6.752,0.008C20.444,44.6,20.485,80.051,34.818,65.686z M38.188,59.772   c1.398-0.001,2.533,1.131,2.535,2.529c0.002,1.4-1.131,2.535-2.529,2.537c-1.399,0.001-2.534-1.131-2.536-2.53   C35.657,60.91,36.789,59.774,38.188,59.772z"/><path fill="#37cfee" d="M109.083,113.394c-18.873,7.459,13.655,21.559,6.196,2.685c7.459,18.875,21.559-13.655,2.686-6.195   c18.873-7.46-13.655-21.559-6.196-2.686C104.31,88.324,90.211,120.853,109.083,113.394z M111.201,110.631   c0.556-1.283,2.047-1.873,3.33-1.316c1.283,0.556,1.873,2.047,1.316,3.33c-0.556,1.284-2.047,1.873-3.33,1.317   C111.233,113.404,110.645,111.914,111.201,110.631z"/><path fill="#37cfee" d="M49.631,71.703c-0.504-0.227-1.095-0.004-1.323,0.5c-0.228,0.504-0.002,1.095,0.502,1.323   c13.427,6.064,20.326,15.261,23.92,22.969c1.794,3.852,2.753,7.328,3.259,9.833c0.508,2.505,0.557,3.99,0.564,3.992   c0.009,0.212,0.096,0.395,0.214,0.551c-6.928,20.695-7.961,42.823-7.991,54.634c0,5.023,0.195,8.19,0.223,8.61   C64.426,174.268,55,175.468,55,180.097h30c0-4.635-9.448-5.832-14.015-5.982c0.001-0.03,0.013-0.056,0.011-0.086v-0.002   c0-0.008-0.22-3.191-0.22-8.522c-0.017-6.924,0.376-17.406,2.093-29.011c0.025-0.074,0.072-0.204,0.161-0.417   c1.012-2.412,6.364-13.062,26.795-18.833c0.532-0.15,0.839-0.703,0.69-1.232c-0.149-0.532-0.703-0.841-1.232-0.692   c-14.712,4.129-22.019,10.875-25.486,15.533c4.083-22.428,13.419-47.494,34.244-59.032c0.481-0.27,0.655-0.877,0.385-1.36   c-0.269-0.481-0.876-0.655-1.36-0.385c-14.282,8.027-23.271,21.873-28.918,36.893C76.853,99.6,71.487,81.577,49.631,71.703z"/><path fill="#37cfee" d="M64.177,117.191c2.892,1.172,9.009,2.63,9.009,2.63s-1.457-6.117-2.631-9.01c-2.445-6.033-9.401-9.135-12.457-6.079   C55.042,107.789,58.144,114.745,64.177,117.191z"/><path fill="#37cfee" d="M56.207,91.173c2.731-1.511,7.712-5.348,7.712-5.348s-5.672-2.715-8.659-3.623c-6.228-1.895-13.015,1.561-12.562,5.858   C43.151,92.36,50.511,94.324,56.207,91.173z"/><path d="M67.921,82.262c0,0,2.981-5.537,4.031-8.477c2.189-6.13-0.939-13.075-5.253-12.827c-4.315,0.247-6.628,7.505-3.752,13.345   C64.325,77.103,67.921,82.262,67.921,82.262z"/><path d="M88.254,82.262c0,0,2.981-5.537,4.031-8.477c2.19-6.13-0.939-13.075-5.253-12.827c-4.315,0.247-6.628,7.505-3.752,13.345   C84.659,77.103,88.254,82.262,88.254,82.262z"/><path d="M86.419,111.965c0.898,1.825,3.242,5.187,3.242,5.187s1.943-3.608,2.627-5.524c1.427-3.996-0.612-8.521-3.424-8.36   C86.052,103.429,84.545,108.159,86.419,111.965z"/><path d="M90.83,121.913c0,0,1.857,3.653,3.042,5.307c2.471,3.45,7.351,4.354,8.821,1.951c1.47-2.403-1.558-6.337-5.753-6.966   C94.929,121.903,90.83,121.913,90.83,121.913z"/><path d="M115.627,88.21c0.244-4.315-6.704-7.437-12.833-5.242c-2.938,1.053-8.471,4.04-8.471,4.04s5.163,3.59,7.964,4.967   C108.13,94.846,115.384,92.525,115.627,88.21z"/><path d="M102.156,146.986c0.387,1.743,1.686,5.097,1.686,5.097s2.407-2.672,3.388-4.163c2.048-3.11,1.25-7.393-1.18-7.841   C103.619,139.633,101.35,143.352,102.156,146.986z"/><path d="M131.683,142.752c-0.843-2.325-5.199-2.403-7.928,0.129c-1.308,1.215-3.546,4.031-3.546,4.031s3.522,0.727,5.305,0.82   C129.232,147.928,132.525,145.076,131.683,142.752z"/><path d="M117.008,152.453c0,0,2.172,2.866,3.452,4.111c2.67,2.596,7.026,2.618,7.922,0.315c0.896-2.305-2.33-5.232-6.051-5.124   C120.547,151.807,117.008,152.453,117.008,152.453z"/><path d="M113.263,142.363c0.259,1.767,1.31,5.207,1.31,5.207s2.596-2.489,3.684-3.904c2.27-2.952,1.788-7.281-0.603-7.905   C115.261,135.137,112.725,138.679,113.263,142.363z"/><path d="M85.856,146.558c-0.718,2.367,2.722,5.039,6.424,4.647c1.776-0.188,5.254-1.102,5.254-1.102s-2.384-2.693-3.755-3.835   C90.92,143.883,86.575,144.194,85.856,146.558z"/><path d="M100.478,155.543c0,0-3.546-0.599-5.331-0.627c-3.724-0.06-6.91,2.911-5.984,5.202c0.927,2.292,5.283,2.212,7.918-0.417   C98.345,158.439,100.478,155.543,100.478,155.543z"/><path d="M27.342,22.093c1.596,0.851,2.524-0.33,4.548,1.364c0.627,0.527,3.498,3.604,5.945,1.301c0,0-2.028,3.692,1.393,5.651   c3.424,1.961,7.373,1.215,8.35-0.702c0.978-1.918-0.634-6.907-1.153-7.945c0,0,2.009,2.313,2.469,1.9l0.076-0.069   c0.459-0.413-1.627-2.657-1.627-2.657c0.979,0.626,5.77,2.757,7.778,1.99c2.01-0.768,3.172-4.614,1.588-8.226   c-1.585-3.611-5.473-1.988-5.473-1.988c2.551-2.187-0.205-5.369-0.661-6.05c-1.469-2.191-0.197-2.991-0.873-4.667   c-1.286-3.047-2.771-1.699-2.771-1.699c-6.284,6.065-2.853,16.929-2.853,16.929s-0.417-0.48-0.841-0.408   c-0.376-0.865-1.627-3.962-1.067-5.709c-0.051-0.404-0.424-0.24-0.448-0.151c0,0-0.641,2.181,1.488,5.864   c-0.083,0.019-0.167,0.053-0.248,0.126l-0.039,0.034c-0.081,0.072-0.123,0.152-0.15,0.233c-3.435-2.509-5.672-2.104-5.672-2.104   c-0.093,0.014-0.292,0.368,0.102,0.461c1.797-0.37,4.745,1.204,5.563,1.668c-0.116,0.415,0.316,0.88,0.316,0.88   s-10.436-4.567-17.134,1.037C25.949,19.158,24.447,20.49,27.342,22.093z"/><path d="M163.082,39.097c1.853,1.097,6.933-0.195,8.002-0.647c0,0-2.436,1.858-2.053,2.344l0.064,0.08   c0.383,0.484,2.754-1.455,2.754-1.455c-0.687,0.938-3.117,5.584-2.479,7.637c0.639,2.055,4.405,3.458,8.109,2.105   c3.704-1.354,2.331-5.336,2.331-5.336c2.02,2.685,5.371,0.136,6.08-0.276c2.279-1.328,2.996-0.007,4.713-0.576   c3.121-1.09,1.869-2.658,1.869-2.658c-5.654-6.655-16.713-3.919-16.713-3.919s0.506-0.385,0.46-0.813   c0.887-0.321,4.057-1.374,5.765-0.703c0.406-0.025,0.268-0.408,0.18-0.438c0,0-2.136-0.778-5.947,1.113   c-0.014-0.085-0.042-0.171-0.109-0.255l-0.031-0.041c-0.067-0.085-0.144-0.132-0.224-0.165c2.723-3.27,2.46-5.527,2.46-5.527   c-0.009-0.094-0.35-0.315-0.467,0.072c0.254,1.817-1.503,4.659-2.018,5.447c-0.405-0.142-0.898,0.259-0.898,0.259   s5.219-10.126,0.051-17.165c0,0-1.234-1.584-3.017,1.203c-0.951,1.539,0.17,2.54-1.649,4.453c-0.566,0.593-3.819,3.262-1.675,5.851   c0,0-3.556-2.258-5.728,1.032C160.737,34.012,161.231,38.001,163.082,39.097z"/></g></svg>                 
                                <h3 className="century text-lg lg:text-2xl tracking-wider pb-2 text-center" /*data-aos="zoom-in"*/>
                                Vous souhaitez créer un site internet pour <br/>votre <span className="text-bleu">entreprise paysagiste</span> ?
                            </h3>
                            <div className="w-2/3 mx-auto block mb-16">
                            <RoundButton url="/creation-site-internet-toulouse/site-internet-paysagiste/" text="Création de site web pour paysagiste"/>
                            </div>
                        </div>
                        <input className="opacity-0 carousel-open" type="radio" id="carousel-5" name="carousel" aria-hidden="true"/>
                        <div className="carousel-item">
                                <img src={surmesure} width="80px" className="mx-auto block mb-4" alt="Création site internet à Toulouse"/>
                                <h3 className="century text-lg lg:text-2xl tracking-wider pb-2 text-center" /*data-aos="zoom-in"*/>
                                Vous souhaitez créer un site internet <br/><span className="text-bleu">sur-mesure</span> ?
                            </h3>
                            <div className="w-2/3 mx-auto block mb-16">
                            <RoundButton url="/contact-agence-web-toulouse/" text="Contactez-nous"/>
                            </div>
                        </div>
                        <label htmlFor="carousel-5" className="carousel-control prev control-1"><svg width="20px" className="mx-auto block" viewBox="0 0 100 125" style={{marginTop:'10px'}}><g><polygon fill="#FFFFFF" points="2.5,50 46.9,86.5 46.9,64.5 97.5,64.5 97.5,35.5 46.9,35.5 46.9,13.5   "/></g></svg></label>
                        <label htmlFor="carousel-2" className="carousel-control next control-1"><svg width="20px" className="mx-auto block" viewBox="0 0 100 125" style={{marginTop:'10px', transform:'scaleX(-1)'}}><g><polygon fill="#FFFFFF" points="2.5,50 46.9,86.5 46.9,64.5 97.5,64.5 97.5,35.5 46.9,35.5 46.9,13.5   "/></g></svg></label>
                        <label htmlFor="carousel-1" className="carousel-control prev control-2"><svg width="20px" className="mx-auto block" viewBox="0 0 100 125" style={{marginTop:'10px'}}><g><polygon fill="#FFFFFF" points="2.5,50 46.9,86.5 46.9,64.5 97.5,64.5 97.5,35.5 46.9,35.5 46.9,13.5   "/></g></svg></label>
                        <label htmlFor="carousel-3" className="carousel-control next control-2"><svg width="20px" className="mx-auto block" viewBox="0 0 100 125" style={{marginTop:'10px', transform:'scaleX(-1)'}}><g><polygon fill="#FFFFFF" points="2.5,50 46.9,86.5 46.9,64.5 97.5,64.5 97.5,35.5 46.9,35.5 46.9,13.5   "/></g></svg></label>
                        <label htmlFor="carousel-2" className="carousel-control prev control-3"><svg width="20px" className="mx-auto block" viewBox="0 0 100 125" style={{marginTop:'10px'}}><g><polygon fill="#FFFFFF" points="2.5,50 46.9,86.5 46.9,64.5 97.5,64.5 97.5,35.5 46.9,35.5 46.9,13.5   "/></g></svg></label>
                        <label htmlFor="carousel-4" className="carousel-control next control-3"><svg width="20px" className="mx-auto block" viewBox="0 0 100 125" style={{marginTop:'10px', transform:'scaleX(-1)'}}><g><polygon fill="#FFFFFF" points="2.5,50 46.9,86.5 46.9,64.5 97.5,64.5 97.5,35.5 46.9,35.5 46.9,13.5   "/></g></svg></label>
                        <label htmlFor="carousel-3" className="carousel-control prev control-4"><svg width="20px" className="mx-auto block" viewBox="0 0 100 125" style={{marginTop:'10px'}}><g><polygon fill="#FFFFFF" points="2.5,50 46.9,86.5 46.9,64.5 97.5,64.5 97.5,35.5 46.9,35.5 46.9,13.5   "/></g></svg></label>
                        <label htmlFor="carousel-5" className="carousel-control next control-4"><svg width="20px" className="mx-auto block" viewBox="0 0 100 125" style={{marginTop:'10px', transform:'scaleX(-1)'}}><g><polygon fill="#FFFFFF" points="2.5,50 46.9,86.5 46.9,64.5 97.5,64.5 97.5,35.5 46.9,35.5 46.9,13.5   "/></g></svg></label>
                        <label htmlFor="carousel-4" className="carousel-control prev control-5"><svg width="20px" className="mx-auto block" viewBox="0 0 100 125" style={{marginTop:'10px'}}><g><polygon fill="#FFFFFF" points="2.5,50 46.9,86.5 46.9,64.5 97.5,64.5 97.5,35.5 46.9,35.5 46.9,13.5   "/></g></svg></label>
                        <label htmlFor="carousel-1" className="carousel-control next control-5"><svg width="20px" className="mx-auto block" viewBox="0 0 100 125" style={{marginTop:'10px', transform:'scaleX(-1)'}}><g><polygon fill="#FFFFFF" points="2.5,50 46.9,86.5 46.9,64.5 97.5,64.5 97.5,35.5 46.9,35.5 46.9,13.5   "/></g></svg></label>
                        <ol className="carousel-indicators">
                            <li>
                                <label for="carousel-1" className="carousel-bullet">•</label>
                            </li>
                            <li>
                                <label for="carousel-2" className="carousel-bullet">•</label>
                            </li>
                            <li>
                                <label for="carousel-3" className="carousel-bullet">•</label>
                            </li>
                            <li>
                                <label for="carousel-4" className="carousel-bullet">•</label>
                            </li>
                            <li>
                                <label for="carousel-5" className="carousel-bullet">•</label>
                            </li>
                        </ol>
                      </div>
                    </div>
                  </section>
                  <section className="w-full flex justify-end py-24" style={{background:'#00000085 url('+ map +')', backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundBlendMode:'cover'}}>
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
                  </section> 
            {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsCreationSiteRestaurant {
    allWordpressPost(limit: 3) {
      edges {
        node {
          id
          title
          slug
          modified(locale: "fr", formatString: "DD/MM/YYYY")
          date(locale: "fr", formatString: "dddd DD MMMM YYYY")
          link
          featured_media {
            source_url
          }
        }
      }
    }
  }
  
    
`
export default CreationSiteRestaurant;




