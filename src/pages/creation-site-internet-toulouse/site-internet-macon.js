import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";

import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";

import CarouselMacon from "../../components/carousel-slides/macon-slides";

import Accordion from "../../components/accordion";
import SEO from "../../components/seo";
import SimpleMap from "../../components/simpleMap";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";

import stars from '../../images/stars.png';
import arriereplan from "../../images/creation-site-internet-macon.jpg";
import siteinternet from "../../images/site-internet-macon.jpg";
import referencement from "../../images/referencement-site-internet-macon.jpg";
import webdesign from "../../images/webdesign-site-internet-macon.jpg";
import realisation1 from "../../images/fx-home-concept.jpg";
import realisation2 from "../../images/sarl-davezac.jpg";
import realisation3 from "../../images/arn-habitat.jpg";
import map from "../../images/map.jpg";
import surmesure from "../../images/web.svg"



class SiteInternetMacon extends Component {

    constructor(props) {
        super(props);

        this.metiers = ['maçon', 'artisan', 'constructeur', 'charpentier', 'carreleur', 'plaquiste'];
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
                    title="Création site internet Maçon à Toulouse - Linkweb"
                    description="Vous souhaitez créer un site web pour votre entreprise de maçonnerie à Toulouse (31) ou à Agen (47) ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-macon/"
                    nom="Créer un site internet internet Maçon"
                    slug="creation-site-internet-toulouse/site-internet-macon/"
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

                <section className="flex items-center justify-start w-full mx-auto pb-0 my-32 md:my-42 lg:my-42 xl:my-48 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + arriereplan + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Création site internet pour <span className="text-bleu">Maçon</span></h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-1/2 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Linkweb, partenaire des maçons à Toulouse et Agen.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-2/3 lg:mx-0 flex flex-col lg:flex-row justify-center pb-24 lg:justify-start">
                            <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-white shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <svg width="80px" className="mx-auto block" viewBox="0 0 100 125"><rect x="10" y="50" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20" height="9.998" /><rect x="29.999" y="50" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="9.998" /><rect x="50" y="50" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="9.998" /><rect x="70.001" y="50" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="9.998" /><rect x="20" y="60.002" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="19.999" height="9.997" /><rect x="39.999" y="60.002" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="9.997" /><rect x="60" y="60.002" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="9.997" /><rect x="10" y="30" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20" height="10" /><rect x="29.999" y="30" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="10" /><rect x="50" y="30" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="10" /><rect x="20" y="40" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="19.999" height="10" /><rect x="39.999" y="40" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="10" /><rect x="60" y="40" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="10" /><rect x="29.999" y="10" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="10" /><rect x="50" y="10" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="10" /><rect x="39.999" y="20" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="10" /><rect x="60" y="20" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="10" /><rect x="29.999" y="69.999" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="9.998" /><rect x="50" y="69.999" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="9.998" /><rect x="70.001" y="69.999" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="9.998" /><rect x="39.999" y="80.001" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="9.998" /><rect x="60" y="80.001" fill="none" stroke="#37cfee" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="20.001" height="9.998" /></svg>
                        <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span>&nbsp;?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br /> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour répondre à vos objectifs.</p>
                        <br />
                        <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125" fill="#37cfee"><g><path fill="#37cfee" d="M68.6,35.7H15.2V30h53.4V35.7z M16.2,34.7h51.4V31H16.2V34.7z" /></g><g><rect x="71.4" y="30.5" width="11.2" height="4.7" /><path fill="#37cfee" d="M83.1,35.7H70.9V30h12.2V35.7z M71.9,34.7h10.2V31H71.9V34.7z" /></g><g><path fill="#37cfee" d="M20.2,47.7h-3.5c-0.6,0-1-0.4-1-1s0.4-1,1-1h3.5c0.6,0,1,0.4,1,1S20.8,47.7,20.2,47.7z" /></g><g><path fill="#37cfee" d="M80.6,47.2H23.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h56.8c0.3,0,0.5,0.2,0.5,0.5S80.9,47.2,80.6,47.2z" /></g><g><path fill="#37cfee" d="M20.2,52.7h-3.5c-0.6,0-1-0.4-1-1s0.4-1,1-1h3.5c0.6,0,1,0.4,1,1S20.8,52.7,20.2,52.7z" /></g><g><path fill="#37cfee" d="M67.1,52.2H23.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h43.4c0.3,0,0.5,0.2,0.5,0.5S67.4,52.2,67.1,52.2z" /></g><g><path fill="#37cfee" d="M20.2,57.7h-3.5c-0.6,0-1-0.4-1-1s0.4-1,1-1h3.5c0.6,0,1,0.4,1,1S20.8,57.7,20.2,57.7z" /></g><g><path fill="#37cfee" d="M58,57.2H23.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5H58c0.3,0,0.5,0.2,0.5,0.5S58.3,57.2,58,57.2z" /></g><g><path fill="#37cfee" d="M20.2,63.7h-3.5c-0.6,0-1-0.4-1-1s0.4-1,1-1h3.5c0.6,0,1,0.4,1,1S20.8,63.7,20.2,63.7z" /></g><g><path fill="#37cfee" d="M80.6,63.2H23.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h56.8c0.3,0,0.5,0.2,0.5,0.5S80.9,63.2,80.6,63.2z" /></g><g><path fill="#37cfee" d="M20.2,68.7h-3.5c-0.6,0-1-0.4-1-1s0.4-1,1-1h3.5c0.6,0,1,0.4,1,1S20.8,68.7,20.2,68.7z" /></g><g><path fill="#37cfee" d="M80.6,68.2H23.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h56.8c0.3,0,0.5,0.2,0.5,0.5S80.9,68.2,80.6,68.2z" /></g><g><path fill="#37cfee" d="M20.2,73.7h-3.5c-0.6,0-1-0.4-1-1s0.4-1,1-1h3.5c0.6,0,1,0.4,1,1S20.8,73.7,20.2,73.7z" /></g><g><path fill="#37cfee" d="M76,73.2H23.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5H76c0.3,0,0.5,0.2,0.5,0.5S76.3,73.2,76,73.2z" /></g><g><path fill="#37cfee" d="M20.2,79.7h-3.5c-0.6,0-1-0.4-1-1s0.4-1,1-1h3.5c0.6,0,1,0.4,1,1S20.8,79.7,20.2,79.7z" /></g><g><path fill="#37cfee" d="M40.9,79.2H23.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h17.2c0.3,0,0.5,0.2,0.5,0.5S41.2,79.2,40.9,79.2z" /></g><g><path fill="#37cfee" d="M93,88H7V22h86V88z M9,86h82V24H9V86z" /></g><g><path fill="#37cfee" d="M93,24H7v-9.2c0-1.7,1.8-2.8,3.4-2.8h79.2c1.6,0,3.4,1.1,3.4,2.8V24z M9,22h82v-7.2c0-0.4-0.7-0.8-1.4-0.8   H10.4C9.7,14,9,14.4,9,14.8V22z" /></g><g><circle fill="#37cfee" cx="14.2" cy="17.8" r="1.5" /></g><g><circle fill="#37cfee" cx="19.2" cy="17.8" r="1.5" /></g><g><circle fill="#37cfee" cx="24.2" cy="17.8" r="1.5" /></g></svg>
                                <h4>Création d'un site internet original et unique</h4>
                            </div>
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block my-4" fill="#37cfee" viewBox="0 0 243 187.5" ><defs></defs><g><polygon class="fil0" points="0,140 92,61 139,116 215,21 193,27 189,14 243,0 238,54 225,52 227,28 139,137 91,80 9,150 " /></g></svg>
                                <h4>Optimisations pour le référencement naturel local</h4>
                            </div>
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" fill="#37cfee" viewBox="0 0 100 125" ><path d="M68.7,40.3l26.8-26.8l-8.7-8.7L62.9,28.6L54.1,11c-0.8-1.5-2.7-2-4.2-1.1c-1.5,0.8-2,2.7-1.1,4.2l11.4,17.2L50.5,41  l-9.4-9.4l9-13.6l-2.6-3.9c-0.7-1.2-0.5-2.7,0.5-3.7c-0.3,0.2-0.6,0.6-0.9,0.9l-8.8,17.6L14.2,4.7l-8.7,8.7l27.1,27.1l-7.9,15.8  l9.4-14.3l16.4,16.4l16.7-16.7L76.6,56L68.7,40.3z M51.5,13.9c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5  C53,13.3,52.3,13.9,51.5,13.9z" /><path d="M29.2,65.4c0.3,1.4,0.5,3.1,0.8,4.6c0.2,0.8,0.3,1.7-0.1,2.5c-0.2,0.5,0.2,0.7,0.4,0.9c1.3,1,2.6,2,3.9,2.9  c0.2,0.1,0.3,0.3,0.6,0.5c-0.3,0.2-0.5,0.3-0.8,0.4c-3.3,1.5-16.7,7.6-20.2,9.1c-0.4,0.2-0.7,0.2-1-0.1C11.2,84.7,6.6,80.6,6,80  c-0.5-0.5-0.5-0.6,0.1-1c1.1-0.6,16.9-9.8,17.6-10.2c0.3-0.2,0.6-0.2,0.9,0c1.1,0.9,3.7,2.8,3.9,2.9c0.1-0.3,0.3-0.6,0.2-0.8  c-0.2-1.2-0.3-2.5-0.7-3.7c-0.3-1.2-0.3-2.4-0.1-3.5c0.1-0.7,0.6-1.3,1.1-1.9c2-2.4,8.6-7.5,9.9-8.4c1-0.7,1.8-0.5,2.7,0.5  c0.8,0.9,0.9,1.8,0,2.6c-2.4,2.1-8.8,6.9-11,8.3C30.4,65.1,29.8,65.3,29.2,65.4z" /><rect x="59.1" y="58.2" width="11.1" height="4.5" /><rect x="52.7" y="64.2" width="11.1" height="4.5" /><rect x="65.5" y="64.2" width="11.1" height="4.5" /><rect x="46.3" y="70.1" width="11.1" height="4.5" /><rect x="59.1" y="70.1" width="11.1" height="4.5" /><rect x="72" y="70.1" width="11.1" height="4.5" /><rect x="39.8" y="76.4" width="11.1" height="4.5" /><rect x="52.7" y="76.4" width="11.1" height="4.5" /><rect x="65.5" y="76.4" width="11.1" height="4.5" /><rect x="78.4" y="76.4" width="11.1" height="4.5" /><rect x="33.5" y="82.5" width="11.1" height="4.5" /><rect x="46.3" y="82.5" width="11.1" height="4.5" /><rect x="59.2" y="82.5" width="11.1" height="4.5" /><rect x="72" y="82.5" width="11.1" height="4.5" /><rect x="84.7" y="82.5" width="11.1" height="4.5" /></svg>
                                <h4>Présentation de vos prestations</h4>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Votre devis gratuit" />
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-1/2 px-10 mt-16 lg:-mt-64 mb-32">
                    <h3 className="century text-3xl text-center">
                        <span className="text-bleu">46%</span> des requêtes sur Google concernent la recherche d'une entreprise locale.
            </h3>
                    <br />
                    <p className="text-center century"><b>Source :</b> <a className="text-bleu hover:text-black" href="https://fr.semrush.com/blog/50-faits-et-statistiques-incontournables-sur-le-seo-local/" target="_blank" rel="noreferrer">SEO Expert Brad cité par SEMrush</a></p>
                </section>
                <section className="text-center text-black text-2xl century mx-12 mt-8 lg:mx-0">
                    <h2 className="century leading-none">Répondre à vos<br /><span className="text-6xl text-bleu font-bold">BESOINS</span></h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Notre rôle : mettre en place un projet adapté à l'image de votre entreprise.</h3>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Site internet</span><br /><span className="font-bold text-5xl md:text-6xl">VITRINE</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">La <strong className="font-normal">création d’un site internet professionnel</strong> est un <strong className="font-normal">moyen de communication</strong> utile afin de <strong className="font-normal">faire connaître son entreprise et rencontrer de nouveaux clients</strong>. Pour un <strong className="font-normal">maçon</strong>, comme pour tout artisan de façon générale, il est important de <strong className="font-normal">créer un site internet vitrine</strong> pour présenter ses prestations et leurs spécificités. Ceci est également une solution idéale pour <strong className="font-normal">acquérir de la visibilité</strong>.
                <br /><br />
                        En effet, le <strong className="font-normal">site internet vitrine</strong> permet de présenter vos prestations de manière détaillée et de <strong className="font-normal">gagner en visibilité</strong>. Couplé à une <strong className="font-normal">stratégie de référencement naturel</strong> sur-mesure, votre <strong className="font-normal">site internet vitrine</strong> sera un <strong className="font-normal">support de communication</strong> particulièrement efficace, en plus d’être consultable de façon constante.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-0 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Référencement</span><br /><span className="font-bold text-6xl">LOCAL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg"><strong className="font-normal">Créer un site internet</strong> sans une stratégie de visibilité est insuffisant pour rendre un <strong className="font-normal">projet web performant</strong>. Il est nécessaire de <strong className="font-normal">définir une stratégie d'acquisition de visibilité</strong>. Pour cela, le <strong className="font-normal">référencement naturel</strong> fait partie des <strong className="font-normal">canaux d’acquisition de trafic principaux sur le Web</strong>. Investir les <strong className="font-normal">premières positions des résultats</strong> d’un <strong className="font-normal">moteur de recherche</strong> comme <strong className="font-normal">Google</strong> est indispensable.
                <br /><br />
                        Ainsi, il est conseillé de définir une <strong className="font-normal">stratégie de référencement local</strong>. Cela se traduit dans le <strong className="font-normal">choix de mots-clés pertinents</strong> vis-à-vis des <strong className="font-normal">requêtes des utilisateurs</strong>, mais également dans la <strong className="font-normal">création des contenus</strong>. Le <strong className="font-normal">référencement local</strong> permet de <strong className="font-normal">générer un trafic qualifié</strong> sur <strong className="font-normal">votre site web</strong> en fonction de vos <strong className="font-normal">secteurs géographiques</strong>.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Design</span><br /><span className="font-bold text-6xl">ORIGINAL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">La définition du <strong className="font-normal">webdesign</strong> est une étape importante lors de la <strong className="font-normal">création d’un site internet</strong>. En effet, le <strong className="font-normal">design du site internet</strong> doit être à la fois <strong className="font-normal">intuitif</strong>, <strong className="font-normal">fonctionnel</strong> et esthétique visuellement. Aussi, le <strong className="font-normal">webdesign d’un site internet</strong> est pensé pour fluidifier l’<strong className="font-normal">expérience utilisateur</strong> durant la <strong className="font-normal">navigation des internautes</strong>. Par dessus tout, il doit être unique.
                <br /><br />
                        Nous <strong className="font-normal">créons des sites web responsive design</strong> avec un <strong className="font-normal">affichage adapté en fonction du support</strong> utilisé par l’internaute : <strong className="font-normal">smartphone</strong>, <strong className="font-normal">tablettes</strong>, <strong className="font-normal">ordinateur</strong>, etc. Aussi, le <strong className="font-normal">webdesign de votre site internet</strong> est construit en fonction de votre <strong className="font-normal">identité visuelle</strong> avec vos illustrations pour une personnalisation maximale.</p>
                    </div>
                </section>
                <section className="text-center text-black text-2xl mx-auto lg:mx-0 century my-10">
                    <h2 className="century leading-none">Une solution<br /><span className="text-4xl lg:text-6xl text-bleu font-bold">FONCTIONNELLE</span></h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Nous créons un site internet professionnel et qui répond aux problématiques du Web.</h3>
                </section>
                <section className="flex justify-center flex-col items-center">
                    <div className="w-full flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                        <div className="w-full -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="none" stroke-width="2" stroke="#37cfee" d="M37.924,72.5c-3.248,0-3.985-1.851-1.639-4.096l16.046-15.357   c2.348-2.246,6.521-2.676,9.273-0.953l27.566,17.262c2.754,1.723,2.35,3.145-0.898,3.145H37.924z" /><path fill="none" stroke-width="2" stroke="#37cfee" stroke-miterlimit="10" d="M31.221,38.021c0.319-0.909,1.253-1.387,2.162-1.067l1.623,0.595   c-0.236-1.046-0.977-1.957-2.056-2.362l-19.814-7.448c-0.383-0.144-0.774-0.212-1.16-0.212c-1.335,0-2.591,0.816-3.088,2.139   c-0.641,1.705,0.222,3.607,1.927,4.248l19.815,7.448c0.382,0.144,0.774,0.212,1.16,0.212c0.754,0,1.482-0.18,2.063-0.645   l-1.583-0.683C31.361,39.926,30.9,38.93,31.221,38.021z" /><path fill="none" stroke-width="2" stroke="#37cfee" d="M38.927,55.349V39.059l-4.02-1.51l-1.574-0.595   c-0.908-0.319-1.817,0.158-2.137,1.067c-0.32,0.909,0.152,1.905,1.062,2.224l3.669,1.57v3.08v13.211l8.036,2.949l2.829-2.708   L38.927,55.349z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Présentation de vos prestations</span></h4>
                            <p>Nous mettons en avant les spécificités de vos prestations de <strong className="font-normal">maçonnerie</strong> au sein de <strong className="font-normal">pages web</strong> dédiées.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="12.937 19.988 486.829 591.2012500000001"><g><path fill="#37cfee" d="M453.892,19.988H58.84c-25.311,0-45.903,20.595-45.903,45.909v263.348c0,25.312,20.592,45.903,45.903,45.903h83.62v81.085   c0,20.245,16.483,36.716,36.744,36.716h152.511c21.244,0,38.528-17.287,38.528-38.535v-79.265h83.648   c25.295,0,45.874-20.592,45.874-45.903V65.897C499.766,40.583,479.187,19.988,453.892,19.988z M58.84,27.988h395.052   c20.884,0,37.874,17.006,37.874,37.909v38.814H20.937V65.897C20.937,44.994,37.94,27.988,58.84,27.988z M237.442,197.73h37.855   c29.951,0,54.318,24.355,54.318,54.291V306.2H183.117v-54.18c0-14.968,6.092-28.54,15.929-38.371   C208.883,203.819,222.465,197.73,237.442,197.73z M362.243,454.414c0,16.837-13.695,30.535-30.528,30.535H179.204   c-15.85,0-28.744-12.882-28.744-28.716v-85.085v-55.511c0-0.806,0.647-1.438,1.474-1.438h26.075   c0.354,0.102,0.72,0.175,1.107,0.175h154.499c0.387,0,0.753-0.072,1.107-0.175h26.076c0.81,0,1.444,0.632,1.444,1.438V454.414z    M453.892,367.149h-83.647v-51.512c0-5.204-4.236-9.438-9.444-9.438h-0.001h-23.183v-54.18c0-34.347-27.956-62.291-62.318-62.291   h-37.855c-17.184,0-32.765,6.986-44.051,18.266c-11.286,11.279-18.276,26.852-18.276,44.026v54.178h-23.182   c-5.224,0-9.474,4.233-9.474,9.438v0.001v51.511H58.84c-20.9,0-37.903-17.003-37.903-37.903V112.711h470.829v216.535   C491.766,350.146,474.775,367.149,453.892,367.149z" /><path fill="#37cfee" d="M256.369,364.854c-11.108,0-20.146,9.034-20.146,20.14c0,7.416,3.978,14.056,10.338,17.592v27.703c0,2.209,1.791,4,4,4   h11.611c2.209,0,4-1.791,4-4v-27.703c6.36-3.537,10.338-10.177,10.338-17.592C276.51,373.888,267.475,364.854,256.369,364.854z    M260.719,396.329c-1.536,0.599-2.547,2.078-2.547,3.727v26.232h-3.611v-26.232c0-1.648-1.011-3.128-2.547-3.727   c-4.66-1.817-7.791-6.373-7.791-11.336c0-6.693,5.449-12.14,12.146-12.14c6.694,0,12.141,5.446,12.141,12.14   C268.51,389.956,265.379,394.512,260.719,396.329z" /><path fill="#37cfee" d="M65.828,82.413c8.805,0,15.969-7.164,15.969-15.969c0-8.809-7.164-15.976-15.969-15.976   c-8.809,0-15.975,7.167-15.975,15.976C49.853,75.25,57.02,82.413,65.828,82.413z M65.828,58.468c4.394,0,7.969,3.578,7.969,7.976   c0,4.394-3.575,7.969-7.969,7.969c-4.397,0-7.975-3.575-7.975-7.969C57.853,62.046,61.431,58.468,65.828,58.468z" /><path fill="#37cfee" d="M114.807,82.413c8.809,0,15.975-7.164,15.975-15.97c-0.002-8.809-7.168-15.975-15.975-15.975   c-8.809,0-15.975,7.167-15.975,15.976C98.832,75.25,105.999,82.413,114.807,82.413z M114.807,58.468   c4.396,0,7.974,3.579,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969s-7.975-3.575-7.975-7.969   C106.832,62.046,110.41,58.468,114.807,58.468z" /><path fill="#37cfee" d="M163.815,82.413c8.809,0,15.975-7.164,15.975-15.969c0-8.809-7.167-15.976-15.975-15.976   c-8.805,0-15.969,7.167-15.969,15.976C147.846,75.25,155.01,82.413,163.815,82.413z M163.815,58.468   c4.397,0,7.975,3.578,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969c-4.394,0-7.969-3.575-7.969-7.969   C155.846,62.046,159.421,58.468,163.815,58.468z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Site internet sécurisé</span></h4>
                            <p>Nous garantissons la mise en place de <strong className="font-normal">certificat sécurisé</strong> pour une navigation en toute confiance.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" fill="#37cfee" className="mx-auto block" viewBox="0 0 100 125"><g><g><g><g><path d="M84.5,78.07h-69c-1.104,0-2-0.896-2-2V23.93c0-1.104,0.896-2,2-2h69c1.104,0,2,0.896,2,2V76.07      C86.5,77.175,85.604,78.07,84.5,78.07z M17.5,74.07h65V25.93h-65V74.07z" /></g></g><g><g><path d="M50,59.07c-0.499,0-0.998-0.187-1.386-0.558l-34.5-33.141c-0.589-0.565-0.774-1.432-0.47-2.188      c0.305-0.758,1.039-1.254,1.855-1.254h69c0.816,0,1.551,0.496,1.855,1.254c0.305,0.757,0.119,1.623-0.47,2.188l-34.5,33.141      C50.998,58.884,50.499,59.07,50,59.07z M20.469,25.93L50,54.297L79.531,25.93H20.469z" /></g></g></g></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Optimisation des conversions</span></h4>
                            <p>Nous vous donnons accès à une <strong className="font-normal">plateforme web</strong> optimisée pour <strong className="font-normal">générer des contacts</strong> pertinents.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   " /><path fill="#37cfee" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z" /><g><path fill="#37cfee" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z" /><rect x="72.041" y="56.851" width="0.312" height="5.159" /></g><path fill="#37cfee" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z" /><path fill="#37cfee" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Site web accessible tous supports</span></h4>
                            <p>Les sites internet que nous créons s'adaptent au <strong>support de navigation</strong> pour une accessibilité sans faille.</p>
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
                        {/*<div className="w-full flex flex-row one justify-center">*/}
                        <div className="w-full md:w-2/3 px-10 py-10 md:py-16  ml-0">
                            <h3 className="century capitalize text-2xl pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">1/</span>VOUS PRENEZ CONTACT POUR METTRE EN PLACE VOTRE PROJET
                                </h3>
                            <h4 className="century text-lg  pb-3 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">En nous contactant, notre chef de projet étudiera votre demande et vous recontactera pour préciser la définition de vos besoins.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify century">Plus votre demande sera détaillée, plus nous serons à même de vous proposer une solution pertinente et performante. N'hésitez pas à nous renseigner sur vos <strong className="font-normal">objectifs, cibles</strong> et autres motivations à <strong className="font-normal">créer un site web pour votre entreprise</strong>.</p>
                        </div>
                        {/*<div className="w-full md:w-1/3 chiffres century text-bleu -mt-64 mb-6">
                            1
                            </div>
                        </div>*/}
                        {/*<div className="w-full flex flex-row two justify-center">
                            <div className="w-full md:w-1/3 chiffres century text-bleu -mt-64 mb-6">
                                2
                            </div>*/}
                        <div className="w-full md:w-2/3 px-10 py-10 md:py-16 ml-auto">
                            <h3 className="century capitalize text-2xl tracking-wider pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">2/</span>NOUS DÉFINISSONS VOTRE PROJET EN FONCTION DE VOS BESOINS
                                </h3>
                            <h4 className="century text-lg  pb-3 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">Une fois votre demande formulée, nous nous rencontrons pour mieux cerner vos besoins et vous mettre en place une solution qui vous correspond.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify century">Il s'agit d'une étape fondamentale afin de comprendre vos besoins, votre activité ainsi que vos ambitions. C'est à partir de cette étape que nous définissons le mode opératoire pour votre création ainsi que la <strong className="font-normal">stratégie de référencement de site internet</strong>.</p>
                        </div>
                        {/*</div>*/}
                        {/*<div className="w-full flex md:flex-row three justify-center">*/}
                        <div className="w-full md:w-2/3 px-10 py-10 md:py-16 ml-0">
                            <h3 className="century capitalize text-2xl pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">3/</span>VOUS VALIDEZ LE PROJET UNE FOIS QU’IL VOUS CORRESPOND
                                </h3>
                            <h4 className="century text-lg pb-3 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">À la suite de notre rencontre, nous vous proposons une maquette visuelle et des textes rédigés et optimisés spécifiquement pour votre site web.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify century">La livraison de la <strong className="font-normal">maquette</strong> est le moment pour vous de suggérer vos ajustements quant aux textes rédigés ainsi que sur l'aspect visuel du site. Une fois les modifications réalisées, vous serez libres de <strong className="font-normal">valider la maquette de votre futur site web</strong>.</p>
                        </div>
                        {/*<div className="w-full hidden md:block lg:block xl:block md:flex md:w-1/3 chiffres century text-bleu -mt-64 mb-6">
                                    3
                            </div>
                        </div>*/}
                        {/*<div className="w-full flex flex-row two justify-center">
                            <div className="w-full md:w-1/3 chiffres century text-bleu -mt-64 mb-6">
                                4
                            </div>*/}
                        <div className="w-full md:w-2/3 px-10 py-10 md:py-16 ml-auto">
                            <h3 className="century capitalize text-2xl pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">4/</span>NOUS METTONS EN ROUTE LA RÉALISATION DE VOTRE PROJET
                                </h3>
                            <h4 className="century text-lg pb-3 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">Après que vous ayez validé notre proposition graphique et éditoriale, nos techniciens réalisent la mise en ligne votre site internet.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify century">Lorsque <strong className="font-normal">votre site internet</strong> est publié sur le <strong className="font-normal">nom de domaine</strong> choisi, nos <strong className="font-normal">référenceurs web</strong> mettent en place toutes les optimisations nécessaires pour <strong className="font-normal">être visible sur les moteurs de recherche</strong>. Par la suite, des mises à jours et modifications sont régulièrement effectuées grâce au suivi mis en place.</p>
                        </div>
                        {/*</div>*/}
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
                            <a href="http://fxhomeconcept.com" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">FX Home Concept</h4></a>
                        </div>

                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation2 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="https://sarl-davezac.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">SARL Davezac</h4></a>
                        </div>
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation3 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="http://arnhabitat47.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">ARN Habitat 47</h4></a>
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
                <section className="max-w-5xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet pour maçon :<br /><span className="font-bold">Nos clients sont satisfaits</span>
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
                        <div className="text-lg century my-2">HONTANS</div>
                        <div className="italic">« Client depuis 4 ans, très satisfait du travail réalisé par la société Linkweb, à l'écoute, compétente, un vrai plus pour mon entreprise. »</div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
                        <img
                            src={stars}
                            alt="Création site internet Toulouse"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Access Auto</div>
                        <div className="italic">« Entièrement satisfaite de leurs services. Bon référencement et bon suivi du site.
                        Laurie, d'accessauto.fr »
                            </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500"*/>
                        <img
                            src={stars}
                            alt="Création site internet Agen"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Idéo Arrosage</div>
                        <div className="italic">« Je suis très satisfait du site Ideo-Arrosage que Linkweb a réalisé pour nous, le personnel est très réactif et à l'écoute, de la création jusqu'au suivi quotidien. »</div>
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
                <section className="max-w-5xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet pour maçon :<br /><span className="font-bold">Une solution en accord avec vos besoins</span>
                    </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="DYNAMISER SA COMMUNICATION WEB GRÂCE À UN OUTIL WEB ADAPTÉ">
                                <p>Le <strong>développement d’un site internet vitrine</strong> est indispensable pour <strong className="font-bold">dynamiser la communication de son entreprise et investir le web</strong>. <strong>Avoir un site internet</strong> permet de présenter son activité au sein de <strong className="font-bold">pages web détaillées</strong>, mais ce n’est pas tout. <strong>Créer un site internet</strong> est essentiel pour <strong className="font-bold">gagner en notoriété et en visibilité</strong>.
                                <br /><br />
                                Ceci est indispensable en vue du <strong>développement de votre entreprise</strong>. En effet, il est important de travailler son <strong>image de marque</strong> en soignant le <strong>contenu de son site web</strong> et en proposant le <strong className="font-bold">maximum d’informations à destination des utilisateurs</strong>.
                                <br /><br />
                                C'est pourquoi, <strong>mettre en place un site internet</strong> performant suppose la <strong className="font-bold">création de contenus de qualité</strong> en adéquation avec les <strong>attentes des internautes</strong>. C’est de cette façon que vous atteindrez de <strong>nouveaux clients</strong>.
                                </p>
                            </div>
                            <div label="DÉVELOPPER LA VISIBILITÉ DE SON ENTREPRISE AVEC LE RÉFÉRENCEMENT NATUREL">
                                <p>Un <strong className="font-bold">site internet performant</strong> est nécessairement un <strong className="font-bold">site internet visible</strong>. <strong>Être visible sur le Web</strong> est indispensable pour tirer profits des bienfaits d’un <strong>site internet professionnel</strong>. Cela passe par la définition et la <strong className="font-bold">mise en place d’une stratégie de visibilité</strong>. Cette dernière devra être orientée pour <strong className="font-bold">générer du trafic qualifié en vue d’attirer de potentiels clients</strong> pour votre entreprise.
                            <br /><br />
                                Également, il faut savoir qu’il est indispensable de veiller à la diversification des moyens d’actions au sein de sa stratégie. C’est pourquoi, nos <strong>stratégies de référencement</strong> sont sur-mesure et sont pensées pour vous permettre d’obtenir de premiers résultats à court ou moyen terme.
                            <br /><br />
                                Les stratégies que nous menons sont définies en fonction de vos objectifs, de vos cibles, mais pas seulement. De plus, elles sont évolutives. C’est pourquoi, un suivi est effectué pour vous permettre d’envisager des ajustements, mais également pour vous engager dans des opportunités qui s’offriront à vous.
                            <br /><br />
                                De la mise en place d’un <strong>code HTML</strong> valide vis-à-vis des <strong className="font-bold">standards du web</strong>, à la <strong className="font-bold">rédaction web optimisée pour des mots-clés finement sélectionnés</strong>, notre travail a pour vocation de vous apporter des performances maximales.
                                </p>
                            </div>
                            <div label="GÉNÉRER DE L'ACTIVITÉ POUR SON ENTREPRISE GRÂCE À UN SITE WEB PERFORMANT">
                                <p>Il est important de souligner que le fait de <strong className="font-bold">générer des performances sur un site web</strong> ne dépend pas seulement de la mise en place d’une <strong>stratégie de référencement naturel</strong>. En effet, un <strong className="font-bold">site internet est conçu pour des utilisateurs</strong> et doit donc répondre à leurs attentes en matière de contenu, comme d’<strong>expérience utilisateur</strong>. Le travail sur la <strong>visibilité d'un site web</strong> doit donc être accompagné d'un travail de fond au sujet du <strong className="font-bold">webdesign d'un site (UX design et UI design)</strong>.
                                <br /><br />
                                Il est donc nécessaire de veiller à la <strong className="font-bold">création d’une interface intuitive</strong> et d’une <strong className="font-bold">expérience utilisateur</strong> soignée pour <strong className="font-bold">guider l’utilisateur durant sa navigation</strong>. Cela va vous permettre de maintenir un <strong>utilisateur sur votre site web</strong> plus longtemps et ainsi favoriser une navigation suivant votre <strong>tunnel de conversion</strong> en vue d’<strong className="font-bold">obtenir un taux de conversion maximal</strong>.
                                <br /><br />
                                Ceci est particulièrement fondamental si votre objectif consiste à <strong>générer de l'activité sur votre site web</strong> et ainsi <strong className="font-bold">obtenir des contacts pour votre entreprise grâce à votre site internet</strong>.
                            </p>
                            </div>
                        </Accordion>
                    </div>
                </section>

                <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselMacon />
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
query lastsThreePostsSiteInternetMacon {
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
export default SiteInternetMacon;




