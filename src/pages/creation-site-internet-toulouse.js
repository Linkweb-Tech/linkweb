import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";

import RoundButtonPages from "../components/roundButtonPages";
import RoundButtonPagesMail from "../components/roundButtonPagesMail";
import RoundButton from "../components/roundButton";
/*import ButtonPage from "../components/buttonPage.js";*/
import Button from "../components/button.js";
import Tiles from '../components/gallery/tiles';

import CarouselToulouse from "../components/carousel-slides/toulouse-slides";

import Accordion from "../components/accordion";
import SEO from "../components/seo";
import SimpleMap from "../components/simpleMap";


import "../scss/blochover.scss";
import "../scss/carousel.scss";
import scroll from "../images/motiontest.svg";
import climaf from "../images/climaf-avis.png";
import faivre from "../images/faivre-avis.png";
import contis from "../images/contis-avis.png";
import mac from "../images/mac-linkweb.jpg";


class CreationSiteInternetToulousePage extends React.Component {
    
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
                    title="Création Site Internet Toulouse - Agence Web Linkweb"
                    description="Création de site internet sur-mesure, e-commerce ou vitrine. Devis gratuit – Accompagnement professionnel - Suivi régulier et personnalisé."
                    keywords={[`Création site internet Agen`, `Création site internet Toulouse`, `Création site web Agen`, `Création site web Toulouse`]}
                    url="https://linkweb.fr/creation-site-internet-toulouse/"
                    nom="Création de site internet à Toulouse"
                    slug="creation-site-internet-toulouse/"
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


<section className="flex bg-creation items-center w-full mx-auto pb-0 mt-40 mb-24 px-4 py-6 bg-black flex flex-col justify-center items-center">
            <div className="max-w-6xl mx-auto lg:mx-56 pt-2 lg:w-2/5 w-full flex-col items-end">
                <div className="mt-12 -mb-24 w-full flex flex-col items-center lg:items-start">
                    <div className="w-full  text-3xl text-center font-bold text-white century">4.6/5</div>
                        <p className="w-full  text-sm text-center font-bold text-white century -mt-2">Avis Google</p>
                        <div className="w-full -mt-8">
                            <svg className="mx-auto block" width="100px" viewBox="0 0 100 125">
                                <path fill="#FFFFFF" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                <path fill="#FFFFFF" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                <path fill="#FFFFFF" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                <path fill="#FFFFFF" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                <path fill="#FFFFFF" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z   M89.8,54.7c0.1-0.1,0.4,0,0.4,0l4.2,2.2l-0.8-4.7c0-0.2,0-0.3,0.1-0.4l3.4-3.3l-4.7-0.7c-0.2,0-0.3-0.1-0.4-0.3l-2.1-4.3L89.8,54.7  z"/>
                            </svg>                    
                        </div>
                    </div>
                    <div className="w-full lg:w-full flex justify-center lg:justify-center">
                    <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Création site internet Toulouse</h1>
                    </div>
                    <br/>
                    <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Agence spécialisée dans le développement de sites web sur-mesure</h2>
                    {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                    <div className="w-full lg:w-full flex flex-col lg:flex-row justify-center pb-24 lg:justify-center mx-auto" style={{maxWidth:'460px'}}>
                        <RoundButtonPages url="tel:0533950030" text="05 33 95 00 30"/>
                        <RoundButtonPagesMail url="/contact-agence-web-toulouse/" text="Demander un devis"/>
                    </div>
            </div>
                <div className="w-full flex items-end justify-center mx-auto block pb-16">
                    <img src={scroll} alt="Scroll" width="60px"/>
                </div>
        </section>
        <section className="phototext">
                        <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10">
                            <h2 className="century text-black leading-none">Conception et refonte de<br/><span className="text-5xl lg:text-6xl text-bleu font-bold">SITES INTERNET</span></h2>
                            <br/>
                            <hr className="border-solid w-1/6 border-white"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="text-xl text-center century text-black px-4 pb-0"><span className="font-bold">Notre rôle :</span> mettre en place un projet web adapté à l'image de votre société.</h3>
                        </section>
            <section className="w-full my-10 flex flex-col lg:flex-row items-center justify-start">
                <div className="w-full flex justify-center items-center lg:w-5/12">
                    <img className="w-full" src={mac} alt="Linkweb"/>
                </div>
                <div className="w-full lg:w-1/2 my-10  flex flex-col">
                    <div className="w-full flex-col md:flex-row flex px-auto">
                        <div className="blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                            <p>1</p>
                        </div>
                        <div className="w-full px-6 lg:px-6 flex flex-col justify-center" style={{maxWidth:'1000px'}}>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>HÉBERGEMENT & NOM DE DOMAINE
                                </h3>
                                
                                <h4 className="century">Nous choisissons une formule adaptée pour vous et réservons votre nom de domaine dans un bureau d'enregistrement agréé.</h4>
                                <br/>
                                <p className="w-full century pb-6 text-justify">Les services d'<strong>hébergement</strong> sont nombreux et variés. Nous faisons le choix d'un service fiable. Nous gérons également, l'acquisition, le transfert et le renouvellement de votre <strong><Link to="/creation-site-internet-toulouse/nom-de-domaine/" className="text-bleu hover:text-black">nom de domaine</Link></strong>.
                                </p>
                                {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                        </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p>2</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>CONCEPTION UI & UX DESIGN
                                    </h3>
                                    
                                    <h4 className="century">La conception d'un webdesign intuitif offre une ergonomie parfaite et une expérience utilisateur optimale.</h4>
                                    <br/>
                                    <p className="w-full century pb-6 text-justify">La <strong>conception de l'interface</strong> et de l'<strong>expérience utilisateur</strong> a pour objectif d'accompagner l'utilisateur dans sa navigation en lui proposant une expérience totalement intuitive. Ce dernier sera guidé pour accéder aux informations dont il a besoin. Cela vous permet également de faciliter la <strong>navigation entre vos contenus</strong>.
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p>3</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>RÉFÉRENCEMENT SEO
                                    </h3>
                                    
                                    <h4 className="century">La création de votre site internet professionnel doit s'accompagner d'une stratégie de visibilité en vue de l'obtention de hautes performances.</h4>
                                    <br/>
                                    <p className="century pb-6 text-justify">Le <strong>trafic organique</strong> est l'une des sources principales d'<strong>acquisition de trafic sur le Web</strong>. C'est pourquoi, nous misons sur le <strong>référencement naturel</strong> (<strong>Optimisation pour les moteurs de recherche</strong>), dès la définition de l'<strong>arborescence</strong>, afin de rendre <strong>nos sites internet visibles</strong>. La source organique constitue une porte d'entrée non-négligeable et apporte un <strong>trafic qualifié</strong>.
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p>4</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>WEB ANALYTICS
                                    </h3>
                                    
                                    <h4 className="century">Ce travail a pour vocation de définir et adapter nos réalisations pour permettre à chacun de se positionner de façon optimale sur son marché.</h4>
                                    <br/>
                                    <p className="century pb-6 text-justify">Nous utilisons les données en vue de maximiser les performances de nos réalisations. <strong>Audit concurrentiel</strong>, analyse comportementale des utilisateurs et détection d'opportunités sont rendus possibles grâce à l'exploitation des données récoltées.
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                    </div>
            </section>
        </section>
        <section className="bg-bleu sidetitle py-10">
                        <section className="w-full lg:w-2/3 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
                            <h2 className="century text-center lg:text-left text-white text-3xl md:text-5xl leading-none">Production d'une solution fonctionnelle</h2>
                            <br/>
                            <div className="line-title my-4 ">
                                <br/>
                                <hr className="w-1/2 lg:w-1/12"/>
                                <br/>
                                <h3 /*data-aos='fade-left'*/ className="text-xl text-white century pb-0">Nous adaptons nos méthodes aux exigences du net.</h3>
                            </div>
                        </section>
                        <section className="flex justify-center flex-col items-center">
                            <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 text-white century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="12.937 19.988 486.829 591.2012500000001"><g><path fill="#ffffff" d="M453.892,19.988H58.84c-25.311,0-45.903,20.595-45.903,45.909v263.348c0,25.312,20.592,45.903,45.903,45.903h83.62v81.085   c0,20.245,16.483,36.716,36.744,36.716h152.511c21.244,0,38.528-17.287,38.528-38.535v-79.265h83.648   c25.295,0,45.874-20.592,45.874-45.903V65.897C499.766,40.583,479.187,19.988,453.892,19.988z M58.84,27.988h395.052   c20.884,0,37.874,17.006,37.874,37.909v38.814H20.937V65.897C20.937,44.994,37.94,27.988,58.84,27.988z M237.442,197.73h37.855   c29.951,0,54.318,24.355,54.318,54.291V306.2H183.117v-54.18c0-14.968,6.092-28.54,15.929-38.371   C208.883,203.819,222.465,197.73,237.442,197.73z M362.243,454.414c0,16.837-13.695,30.535-30.528,30.535H179.204   c-15.85,0-28.744-12.882-28.744-28.716v-85.085v-55.511c0-0.806,0.647-1.438,1.474-1.438h26.075   c0.354,0.102,0.72,0.175,1.107,0.175h154.499c0.387,0,0.753-0.072,1.107-0.175h26.076c0.81,0,1.444,0.632,1.444,1.438V454.414z    M453.892,367.149h-83.647v-51.512c0-5.204-4.236-9.438-9.444-9.438h-0.001h-23.183v-54.18c0-34.347-27.956-62.291-62.318-62.291   h-37.855c-17.184,0-32.765,6.986-44.051,18.266c-11.286,11.279-18.276,26.852-18.276,44.026v54.178h-23.182   c-5.224,0-9.474,4.233-9.474,9.438v0.001v51.511H58.84c-20.9,0-37.903-17.003-37.903-37.903V112.711h470.829v216.535   C491.766,350.146,474.775,367.149,453.892,367.149z"/><path fill="#ffffff" d="M256.369,364.854c-11.108,0-20.146,9.034-20.146,20.14c0,7.416,3.978,14.056,10.338,17.592v27.703c0,2.209,1.791,4,4,4   h11.611c2.209,0,4-1.791,4-4v-27.703c6.36-3.537,10.338-10.177,10.338-17.592C276.51,373.888,267.475,364.854,256.369,364.854z    M260.719,396.329c-1.536,0.599-2.547,2.078-2.547,3.727v26.232h-3.611v-26.232c0-1.648-1.011-3.128-2.547-3.727   c-4.66-1.817-7.791-6.373-7.791-11.336c0-6.693,5.449-12.14,12.146-12.14c6.694,0,12.141,5.446,12.141,12.14   C268.51,389.956,265.379,394.512,260.719,396.329z"/><path fill="#ffffff" d="M65.828,82.413c8.805,0,15.969-7.164,15.969-15.969c0-8.809-7.164-15.976-15.969-15.976   c-8.809,0-15.975,7.167-15.975,15.976C49.853,75.25,57.02,82.413,65.828,82.413z M65.828,58.468c4.394,0,7.969,3.578,7.969,7.976   c0,4.394-3.575,7.969-7.969,7.969c-4.397,0-7.975-3.575-7.975-7.969C57.853,62.046,61.431,58.468,65.828,58.468z"/><path fill="#ffffff" d="M114.807,82.413c8.809,0,15.975-7.164,15.975-15.97c-0.002-8.809-7.168-15.975-15.975-15.975   c-8.809,0-15.975,7.167-15.975,15.976C98.832,75.25,105.999,82.413,114.807,82.413z M114.807,58.468   c4.396,0,7.974,3.579,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969s-7.975-3.575-7.975-7.969   C106.832,62.046,110.41,58.468,114.807,58.468z"/><path fill="#ffffff" d="M163.815,82.413c8.809,0,15.975-7.164,15.975-15.969c0-8.809-7.167-15.976-15.975-15.976   c-8.805,0-15.969,7.167-15.969,15.976C147.846,75.25,155.01,82.413,163.815,82.413z M163.815,58.468   c4.397,0,7.975,3.578,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969c-4.394,0-7.969-3.575-7.969-7.969   C155.846,62.046,159.421,58.468,163.815,58.468z"/></g></svg>
                                    <h4 className="font-bold century"><span className="font-bold">Sécurisation HTTPS</span></h4>
                                    <p>Nous garantissons l'installation d'un <strong className="font-normal">certificat de sécurité</strong> pour une navigation en toute confiance.</p>
                                </div>
                                <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="60px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><g><path fill="#ffffff" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   "/><path fill="#ffffff" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z"/><g><path fill="#ffffff" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z"/><rect x="72.041" y="56.851" width="0.312" height="5.159"/></g><path fill="#ffffff" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z"/><path fill="#ffffff" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z"/></g></svg>                    
                                    <h4 className="font-bold century -mt-4"><span className="font-bold">Accessibilité tous supports</span></h4>
                                    <p>Nous créons des sites internet adaptés à chaque <strong>support de navigation</strong> et à sa taille d'écran (responsive design).</p>
                                </div>
                                <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" fill="#ffffff"  viewBox="0 0 64 80"><path d="M7,57h36.434c1.349,1.543,2.92,2.901,4.694,4.01l1.342,0.838C49.632,61.949,49.816,62,50,62s0.368-0.051,0.53-0.152  l1.342-0.838c4.507-2.818,7.76-7.194,9.159-12.322l0.934-3.425c0.144-0.528-0.164-1.074-0.69-1.225l-0.843-0.241  c-3.827-1.094-7.165-3.314-9.651-6.422c-0.379-0.475-1.183-0.475-1.562,0c-0.384,0.48-0.796,0.932-1.219,1.369V26  c0-0.552-0.448-1-1-1h-2v-3c0-11.028-8.972-20-20-20S5,10.972,5,22v3H3c-0.552,0-1,0.448-1,1v26C2,54.757,4.243,57,7,57z M50,39.546  c2.624,2.925,5.979,5.038,9.775,6.144l-0.674,2.472c-1.266,4.642-4.209,8.602-8.289,11.152L50,59.821l-0.812-0.507  c-4.08-2.55-7.024-6.51-8.29-11.152l-0.674-2.472C44.021,44.584,47.376,42.472,50,39.546z M7,22c0-9.925,8.075-18,18-18  s18,8.075,18,18v3h-4v-3c0-7.72-6.28-14-14-14s-14,6.28-14,14v3H7V22z M13,25v-3c0-6.617,5.383-12,12-12s12,5.383,12,12v3H13z M4,27  h42v13.544c-1.902,1.474-4.073,2.579-6.431,3.254l-0.843,0.241c-0.527,0.15-0.834,0.696-0.69,1.225l0.934,3.425  c0.622,2.281,1.629,4.4,2.932,6.312H7c-1.654,0-3-1.346-3-3V27z"/><path d="M48,54c0.256,0,0.512-0.098,0.707-0.293l7-7l-1.414-1.414L48,51.586l-2.293-2.293l-1.414,1.414l3,3  C47.488,53.902,47.744,54,48,54z"/><path d="M6.914,49.836l-0.369,1.98c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L10,51.915l2.037,0.985  c0.139,0.067,0.287,0.1,0.436,0.1c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418  c0.291-0.261,0.403-0.667,0.288-1.039c-0.115-0.373-0.436-0.645-0.823-0.697l-2.257-0.302l-0.994-1.854  c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302c-0.387,0.052-0.708,0.324-0.823,0.697  c-0.115,0.373-0.002,0.778,0.288,1.039L6.914,49.836z M8.896,48.295c0.318-0.042,0.597-0.235,0.749-0.519L10,47.116l0.354,0.661  c0.152,0.283,0.431,0.476,0.749,0.519l0.614,0.082l-0.385,0.345c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345L8.896,48.295z"/><path d="M25.132,46.683l-2.257-0.302l-0.994-1.854c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302  c-0.387,0.052-0.708,0.324-0.823,0.697c-0.115,0.373-0.002,0.778,0.288,1.039l1.582,1.418l-0.369,1.98  c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L21,51.915l2.037,0.985c0.139,0.067,0.287,0.1,0.436,0.1  c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418c0.291-0.261,0.403-0.667,0.288-1.039  C25.841,47.006,25.52,46.734,25.132,46.683z M22.333,48.723c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345l0.614-0.082c0.318-0.042,0.597-0.235,0.749-0.519L21,47.116l0.354,0.661c0.152,0.283,0.431,0.476,0.749,0.519  l0.614,0.082L22.333,48.723z"/><path d="M36.132,46.683l-2.257-0.302l-0.994-1.854c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302  c-0.387,0.052-0.708,0.324-0.823,0.697c-0.115,0.373-0.002,0.778,0.288,1.039l1.582,1.418l-0.369,1.98  c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L32,51.915l2.037,0.985c0.139,0.067,0.287,0.1,0.436,0.1  c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418c0.291-0.261,0.403-0.667,0.288-1.039  C36.841,47.006,36.52,46.734,36.132,46.683z M33.333,48.723c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345l0.614-0.082c0.318-0.042,0.597-0.235,0.749-0.519L32,47.116l0.354,0.661c0.152,0.283,0.431,0.476,0.749,0.519  l0.614,0.082L33.333,48.723z"/><path d="M17,42c2.155,0,4.127-1.158,5.191-3h3.573l1.789,0.895c0.281,0.141,0.613,0.141,0.895,0L30,39.118l1.553,0.776  c0.281,0.141,0.613,0.141,0.895,0L34.236,39H36c0.265,0,0.52-0.105,0.707-0.293l2-2c0.391-0.391,0.391-1.023,0-1.414l-2-2  C36.52,33.105,36.265,33,36,33H22.191c-1.064-1.842-3.036-3-5.191-3c-3.309,0-6,2.691-6,6S13.691,42,17,42z M17,32  c1.586,0,3.023,0.942,3.662,2.401C20.821,34.765,21.181,35,21.578,35h14.008l1,1l-1,1H34c-0.155,0-0.309,0.036-0.447,0.105  L32,37.882l-1.553-0.776c-0.281-0.141-0.613-0.141-0.895,0L28,37.882l-1.553-0.776C26.309,37.036,26.155,37,26,37h-4.422  c-0.397,0-0.757,0.235-0.916,0.599C20.023,39.058,18.586,40,17,40c-2.206,0-4-1.794-4-4S14.794,32,17,32z"/><rect x="15" y="35" width="2" height="2"/></svg>
                                    <h4 className="font-bold century"><span className="font-bold">Conformité RGPD</span></h4>
                                    <p>Nous respectons les données personnelles de vos utilisateurs grâce à des procédés en conformité avec le <strong>RGPD</strong> (*).</p>
                                    <p className="text-xs">(*) Réglement Général pour la Protection des Données</p>
                                </div>
                            </div>
                            <div className="w-full text-white flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                            <div className="w-full svgtransform -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125" fill="#ffffff"><g><g><g><path d="M82.3,81.7c-0.8,0-1.5-0.7-1.5-1.5c0-17-13.8-30.9-30.9-30.9c-17,0-30.9,13.8-30.9,30.9     c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5c0-18.6,15.1-33.8,33.8-33.8s33.8,15.1,33.8,33.8C83.8,81.1,83.1,81.7,82.3,81.7z"/></g><g><path d="M1.5,67.4c-0.1,0-0.3,0-0.4-0.1c-0.8-0.2-1.2-1-1-1.8c1-3.5,2.5-6.9,4.2-10.2c1-1.8,0.6-4.1-0.8-5.5     c-3-3-3-7.8,0-10.7l5.4-5.4c1.4-1.4,3.3-2.2,5.4-2.2c2,0,3.9,0.8,5.3,2.2c0,0,0,0,0,0c1.5,1.5,3.7,1.8,5.5,0.8     c3.2-1.8,6.7-3.2,10.2-4.2c1.9-0.6,3.3-2.4,3.3-4.5c0-4.2,3.4-7.6,7.6-7.6h7.6c4.2,0,7.6,3.4,7.6,7.6c0,2.1,1.4,3.9,3.3,4.5     c3.5,1,6.9,2.5,10.2,4.2c1.8,1,4.1,0.6,5.5-0.8c0,0,0,0,0,0c1.4-1.4,3.3-2.2,5.3-2.2c2,0,3.9,0.8,5.4,2.2l5.4,5.4     c1.4,1.4,2.2,3.3,2.2,5.4s-0.8,3.9-2.2,5.4c-1.5,1.5-1.8,3.7-0.8,5.5c1.8,3.2,3.2,6.6,4.2,10.2c0.2,0.8-0.2,1.6-1,1.8     c-0.8,0.2-1.6-0.2-1.8-1c-1-3.3-2.3-6.6-4-9.6c-1.6-2.9-1.1-6.6,1.3-9c1.8-1.8,1.8-4.8,0-6.6l-5.4-5.4c-0.9-0.9-2.1-1.4-3.3-1.4     c-1.3,0-2.4,0.5-3.3,1.4c0,0,0,0,0,0c-2.4,2.3-6,2.9-8.9,1.3c-3.1-1.7-6.3-3-9.6-4c-3.2-0.9-5.4-3.9-5.4-7.3     c0-2.6-2.1-4.7-4.7-4.7h-7.6c-2.6,0-4.7,2.1-4.7,4.7c0,3.3-2.2,6.3-5.4,7.3c-3.3,1-6.5,2.3-9.6,4c-2.9,1.6-6.6,1.1-8.9-1.3     c0,0,0,0,0,0c-0.9-0.9-2.1-1.4-3.3-1.4c-1.3,0-2.4,0.5-3.3,1.4l-5.4,5.4c-1.8,1.8-1.8,4.8,0,6.6c2.4,2.4,2.9,6.1,1.3,9     c-1.7,3.1-3,6.3-4,9.6C2.7,67,2.1,67.4,1.5,67.4z"/></g></g><g><path d="M98.5,81.7H1.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h97.1c0.8,0,1.5,0.7,1.5,1.5S99.3,81.7,98.5,81.7z    "/></g></g></svg>                                
                                    <h4 className="font-bold century"><span className="font-bold">Utilisation d'un CMS <br/><span className="text-xs italic uppercase text-white">(Système de Gestion de Contenu)</span></span></h4>
                                    <p>Nous utilisons un CMS adapté en fonction des besoins techniques de votre interface (<strong>Wordpress</strong>, <strong>Prestashop</strong>, <strong>Joomla</strong>, etc.).</p>
                                </div>
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#ffffff" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z"/></g></g><g><g><path fill="#ffffff" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z"/></g></g><g><g><path fill="#ffffff" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z"/></g></g></g></svg>                    
                                    <h4 className="font-bold century"><span className="font-bold">Optimisation pour le référencement</span></h4>
                                    <p>Nous optimisons vos contenus pour obtenir une <strong className="font-normal">visibilité maximale</strong> grâce au <strong className="font-normal">référencement naturel</strong>.</p>
                                </div>
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><path fill="#ffffff" d="M66.598,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44c-0.556,0.081-1.017,0.47-1.191,1.004  c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014c-0.095,0.554,0.133,1.113,0.587,1.443  c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C67.673,71.235,67.16,70.916,66.598,70.916L66.598,70.916z M50,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169L50,82.719l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C51.074,71.235,50.562,70.916,50,70.916L50,70.916z M33.402,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423  l2.707,1.423c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014  l2.19-2.135c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C34.476,71.235,33.963,70.916,33.402,70.916L33.402,70.916z"/><path fill="#ffffff" d="M72.131,50.738h-25.82v-1.475h25.82V50.738z M50,52.951h-3.689v1.475H50V52.951z M72.131,52.951H53.689v1.475  h18.443V52.951z M61.066,56.639H46.311v1.475h14.754V56.639z M72.131,56.639h-7.377v1.475h7.377V56.639z M57.377,60.328H46.311  v1.475h11.066V60.328z M61.066,27.131H46.311v1.475h14.754V27.131z M72.131,27.131h-7.377v1.475h7.377V27.131z M72.131,30.82h-25.82  v1.475h25.82V30.82z M57.377,34.508H46.311v1.475h11.066V34.508z M72.131,34.508H61.066v1.475h11.066V34.508z M64.754,38.197H46.311  v1.475h18.443V38.197z"/><path fill="#ffffff" d="M75.82,12.377h-4.338c-0.741-1.139-1.62-2.329-2.458-3.404l-0.257-0.33l-0.416,0.052  c-2.313,0.288-8.743,0.858-10.692,0.051c-0.341-0.141-0.869-0.895-1.294-1.501C55.592,6.141,54.793,5,53.689,5h-7.377  c-1.104,0-1.904,1.141-2.677,2.244c-0.425,0.606-0.953,1.36-1.294,1.501c-1.947,0.807-8.379,0.237-10.692-0.051l-0.416-0.052  l-0.257,0.33c-0.838,1.075-1.717,2.265-2.458,3.404H24.18c-2.441,0-4.426,1.986-4.426,4.426v73.77c0,2.441,1.985,4.426,4.426,4.426  H75.82c2.441,0,4.426-1.985,4.426-4.426v-73.77C80.246,14.363,78.26,12.377,75.82,12.377z M31.886,10.208  c1.891,0.218,8.608,0.899,11.02-0.1c0.737-0.305,1.32-1.137,1.937-2.017c0.396-0.564,1.132-1.615,1.469-1.615h7.377  c0.337,0,1.073,1.051,1.469,1.615c0.617,0.88,1.2,1.712,1.937,2.017c2.412,0.999,9.129,0.318,11.02,0.1  c1.698,2.219,3.397,4.834,3.684,5.857H28.201C28.489,15.043,30.188,12.427,31.886,10.208z M78.77,90.574  c0,1.627-1.324,2.951-2.951,2.951H24.18c-1.627,0-2.951-1.324-2.951-2.951v-73.77c0-1.627,1.324-2.951,2.951-2.951h3.449  c-0.727,1.324-1.12,2.457-0.82,3.071c0.192,0.392,0.578,0.618,1.059,0.618h44.262c0.482,0,0.867-0.225,1.059-0.618  c0.3-0.614-0.093-1.746-0.82-3.071h3.449c1.627,0,2.951,1.324,2.951,2.951V90.574z M50,13.115c-1.424,0-2.582-1.158-2.582-2.582  S48.576,7.951,50,7.951s2.582,1.158,2.582,2.582S51.424,13.115,50,13.115z M50,9.426c-0.61,0-1.107,0.496-1.107,1.107  c0,0.61,0.496,1.107,1.107,1.107s1.107-0.496,1.107-1.107C51.107,9.923,50.61,9.426,50,9.426z"/><path fill="#ffffff" d="M38.934,50v11.066H27.869V50H38.934 M38.934,48.525H27.869c-0.815,0-1.475,0.661-1.475,1.475v11.066  c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475V50C40.41,49.185,39.749,48.525,38.934,48.525  L38.934,48.525z M33.483,38.197c-0.008,0-0.016,0-0.024,0c-0.302,0-0.588-0.12-0.792-0.343l-3.77-4.111  c-0.413-0.451-0.382-1.147,0.069-1.559c0.451-0.412,1.151-0.379,1.563,0.071l2.989,3.267l7.698-7.698  c0.432-0.432,1.132-0.432,1.565,0c0.432,0.432,0.432,1.133,0,1.565l-8.516,8.5C34.058,38.097,33.776,38.197,33.483,38.197z   M38.934,34.271v4.664h-5.451H33.45h-5.581V27.869h11.066v1.194l1.45-1.45c-0.122-0.692-0.722-1.22-1.45-1.22H27.869  c-0.815,0-1.475,0.661-1.475,1.475v11.066c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475v-6.136  L38.934,34.271z"/></svg>                    
                                    <h4 className="font-bold century"><span className="font-bold">Appel mensuel et suivi régulier</span></h4>
                                    <p>Nous effectuons une <strong className="font-normal">maintenance</strong> et un suivi de performances pour vous tenir informé de l'évolution de <strong className="font-normal">vos performances online</strong>.</p>
                                </div>
                            </div>
                        </section>
                    </section>   
        <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                        Faites connaître votre entreprise sur <br/><span className="text-5xl sm:text-6xl text-bleu font-bold">(l’)Internet !</span>
                        </h2>
                        <br/>
                        <hr className="border-solid w-1/2 border-bleu"></hr>
                        <br/>
                        <h3 /*data-aos="fade-in"*/ className="text-center uppercase text-darkgrey font-normal italic century text-sm">Création site internet Toulouse</h3>
                    </section>
                    <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-8 xl:px-24">
                        <div className="w-full xl:w-1/3 one px-auto">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">/</span>JE SOUHAITE OBTENIR PLUS D'INFORMATIONS
                                </h3>
                                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                    Le développement d'une interface en ligne ne s'improvise pas. Le public visé, l’utilisateur, les <strong>moteurs de recherche</strong> et le <strong>référencement</strong> sont autant de paramètres qu’il est nécessaire de prendre en compte pour générer des performances ainsi que de l'efficacité.
                                </div>
                                <Button url="/contact-agence-web-toulouse/" text="En savoir plus" position="center" />
                
                            </section>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3 two px-auto">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">/</span>JE VEUX ÊTRE ACCOMPAGNÉ POUR TROUVER MA FORMULE
                                </h3>
                                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                <strong>Vitrine</strong>, <strong>e-commerce</strong> ou sur-mesure, il existe de nombreuses possibilités pour affirmer sa présence <strong>en ligne</strong>. Linkweb fait partie des <strong>agences</strong> qui vous accompagneront pour prendre les meilleures décisions pour votre société, en totale conformité avec vos objectifs de <strong>communication</strong>.

                                </div>
                                <Button url="/contact-agence-web-toulouse/" text="Prendre contact" position="center" />
                            </section>
                            </div>
                            </div>
                        <div className="w-full xl:w-1/3 three px-auto">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">/</span>JE FAIS LE CHOIX D'EXPERTS POUR MENER MON PROJET
                                </h3>
                                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                Les experts de nos services de <strong><Link to="/creation-site-internet-toulouse/developpement-web/" className="text-bleu font-bold hover:text-black">développement web</Link></strong> (<Link to="/creation-site-internet-toulouse/front-end/" className="text-bleu font-bold hover:text-black">front-end</Link> comme <Link to="/creation-site-internet-toulouse/back-end/" className="text-bleu font-bold hover:text-black">back-end</Link>) et <strong>création de contenus optimisés</strong> vous apportent leur expertise pour vous accompagner dans la <strong>définition de votre stratégie</strong> et parvenir à un résultat adapté à vos besoins.
                                </div>
                                <Button url="/contact-agence-web-toulouse/" text="Prendre rendez-vous" position="center" />
                            </section>
                            
                            </div>
                
                        </div>
                    </section>
                    <section className="blocpresta">
                        <section className="text-center my-10 lg:mx-0 century">
                            <h2 className="century text-white text-2xl">Création d'un site internet<br/><span className="text-4xl lg:text-6xl text-bleu font-bold">PROFESSIONNEL</span></h2>
                            <br/>
                            <hr className="border-solid w-1/12 border-1 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="text-xl text-white century">Nous déployons votre visibilité en ligne.</h3>
                        </section>
                        <section className="flex flex-col xl:flex-row mx-8 lg:mx-24 my-0 items-center lg:justify-center">
                            <section className="flex flex-col justify-center md:flex-row w-full mx-auto py-0 mt-2 ">
                                <div className="blocliens w-full lg:w-1/2 xl:w-6/12 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{border:'2px solid #ffffff' }}>
                                    <svg width="40px" className="mx-auto block" viewBox="12.938 70.193 487.061 465.68874999999997"><g><path fill="#37cfee" d="M499.811,74.173c-0.011-2.202-1.799-3.98-4-3.98H135.94c-2.209,0-3.999,1.791-3.999,4v70.337   c0,0.003-0.001,0.006-0.001,0.01s0.001,0.006,0.001,0.01v72.281c-1.976-0.103-3.965-0.157-5.967-0.157   c-33.125,0-62.967,14.323-83.661,37.1c-0.173,0.162-0.328,0.34-0.471,0.53c-17.961,20.019-28.905,46.456-28.905,75.405   c0,28.943,10.939,55.375,28.893,75.392c0.146,0.197,0.307,0.38,0.485,0.547c20.693,22.775,50.534,37.096,83.657,37.096   c33.116,0,62.953-14.3,83.655-37.047c0.249-0.224,0.478-0.468,0.664-0.747c6.789-7.592,12.568-16.102,17.127-25.32h268.579   c2.209,0,4-1.791,4-4V112.869L499.811,74.173z M491.83,78.193l0.169,34.695v27.652H139.94l0-62.347H491.83z M230.826,336.737   c-0.027,0.404-0.05,0.809-0.081,1.212c-0.044,0.567-0.098,1.131-0.151,1.695c-0.031,0.331-0.06,0.663-0.094,0.994   c-0.063,0.611-0.136,1.219-0.21,1.827c-0.034,0.278-0.066,0.556-0.101,0.833c-0.084,0.65-0.177,1.297-0.273,1.943   c-0.034,0.227-0.067,0.454-0.102,0.68c-0.107,0.687-0.221,1.371-0.341,2.053c-0.031,0.177-0.062,0.354-0.094,0.531   c-0.132,0.727-0.271,1.451-0.418,2.173c-0.024,0.117-0.048,0.234-0.072,0.35c-0.162,0.783-0.331,1.563-0.511,2.339   c-0.006,0.026-0.012,0.053-0.019,0.079c-3.957,17.051-12.082,32.522-23.237,45.283h-47.846c4.839-19.064,7.468-42.21,7.744-65.022   h65.963c-0.019,0.508-0.035,1.017-0.061,1.525C230.896,335.736,230.859,336.236,230.826,336.737z M46.868,260.688h47.897   c-4.825,19.064-7.445,42.209-7.72,65.021H21.022C21.957,300.876,31.549,278.222,46.868,260.688z M165.02,325.709   c-0.276-22.812-2.904-45.957-7.743-65.021h47.846c15.327,17.534,24.925,40.188,25.86,65.021H165.02z M95.044,325.709   c0.294-25.694,3.406-47.972,7.998-65.021h45.952c4.609,17.05,7.732,39.328,8.028,65.021H95.044z M157.021,333.709   c-0.295,25.694-3.419,47.972-8.028,65.022h-45.952c-4.592-17.05-7.704-39.328-7.998-65.022H157.021z M155.041,252.688   c-3.425-11.13-7.709-20.404-12.812-26.756c21.094,3.287,40.126,12.87,55.117,26.756H155.041z M146.599,252.688h-41.171   c5.853-17.727,13.399-28.014,20.547-28.014C133.149,224.674,140.724,234.96,146.599,252.688z M96.994,252.688H54.64   c14.993-13.896,34.032-23.483,55.133-26.764C104.683,232.276,100.41,241.553,96.994,252.688z M87.045,333.709   c0.275,22.813,2.896,45.958,7.72,65.022H46.869c-15.319-17.535-24.912-40.189-25.847-65.022H87.045z M96.994,406.731   c3.416,11.134,7.689,20.411,12.779,26.763c-21.1-3.281-40.139-12.867-55.132-26.763H96.994z M105.427,406.731h41.171   c-5.875,17.727-13.449,28.013-20.624,28.013C118.826,434.744,111.28,424.458,105.427,406.731z M155.041,406.731h42.304   c-14.99,13.885-34.023,23.468-55.116,26.755C147.332,427.135,151.616,417.861,155.041,406.731z M231.04,371.63   c2.484-6.252,4.388-12.648,5.722-19.156c0.002-0.009,0.004-0.019,0.006-0.029c0.18-0.88,0.35-1.762,0.508-2.646   c0.013-0.072,0.026-0.143,0.038-0.215c0.147-0.825,0.284-1.652,0.412-2.481c0.019-0.122,0.038-0.244,0.057-0.367   c0.118-0.78,0.227-1.561,0.329-2.343c0.022-0.168,0.044-0.335,0.066-0.503c0.093-0.739,0.177-1.48,0.255-2.222   c0.022-0.207,0.045-0.414,0.066-0.621c0.07-0.705,0.132-1.411,0.189-2.118c0.02-0.242,0.042-0.483,0.06-0.725   c0.051-0.683,0.092-1.368,0.131-2.053c0.015-0.261,0.033-0.522,0.046-0.783c0.034-0.69,0.057-1.381,0.079-2.072   c0.008-0.255,0.021-0.509,0.027-0.765c0.023-0.939,0.036-1.88,0.036-2.822c0-0.93-0.013-1.858-0.035-2.786   c-0.008-0.334-0.024-0.665-0.035-0.998c-0.02-0.591-0.039-1.183-0.068-1.773c-0.019-0.396-0.046-0.791-0.069-1.186   c-0.031-0.524-0.062-1.047-0.1-1.57c-0.031-0.42-0.067-0.838-0.103-1.257c-0.042-0.498-0.085-0.995-0.133-1.492   c-0.041-0.423-0.087-0.844-0.133-1.265c-0.054-0.496-0.11-0.992-0.171-1.487c-0.05-0.408-0.103-0.815-0.157-1.222   c-0.069-0.517-0.141-1.034-0.218-1.549c-0.055-0.374-0.112-0.747-0.171-1.12c-0.089-0.565-0.184-1.13-0.281-1.693   c-0.055-0.315-0.109-0.63-0.166-0.943c-0.119-0.655-0.246-1.307-0.376-1.959c-0.043-0.216-0.085-0.433-0.13-0.648   c-0.169-0.817-0.347-1.632-0.534-2.444c-0.01-0.045-0.02-0.09-0.03-0.135c-4.36-18.872-13.53-36.405-26.868-50.92   c-14.275-15.535-32.39-26.606-52.326-32.273c-0.042-0.012-0.083-0.024-0.125-0.036c-1.646-0.466-3.303-0.895-4.973-1.286   c-0.171-0.04-0.341-0.082-0.512-0.122c-2.592-0.595-5.21-1.1-7.852-1.512c-0.49-0.076-0.982-0.145-1.473-0.215   c-0.696-0.099-1.388-0.218-2.088-0.305l0-68.973h352.059v223.09H231.04z" /><path fill="#37cfee" d="M185.225,124.736c8.491,0,15.399-6.908,15.399-15.398c0-8.459-6.908-15.341-15.399-15.341   c-8.459,0-15.341,6.882-15.341,15.341C169.884,117.828,176.766,124.736,185.225,124.736z M185.225,101.997   c4.08,0,7.399,3.293,7.399,7.341c0,4.079-3.319,7.398-7.399,7.398c-4.048,0-7.341-3.319-7.341-7.398   C177.884,105.222,181.108,101.997,185.225,101.997z" /><path fill="#37cfee" d="M261.857,124.736c8.494,0,15.405-6.908,15.405-15.398c0-8.459-6.911-15.341-15.405-15.341   c-8.491,0-15.399,6.882-15.399,15.341C246.458,117.828,253.366,124.736,261.857,124.736z M261.857,101.997   c4.083,0,7.405,3.293,7.405,7.341c0,4.079-3.322,7.398-7.405,7.398c-4.08,0-7.399-3.319-7.399-7.398   C254.458,105.29,257.777,101.997,261.857,101.997z" /><path fill="#37cfee" d="M338.496,124.736c8.456,0,15.335-6.908,15.335-15.398c0-8.459-6.879-15.341-15.335-15.341   c-8.494,0-15.405,6.882-15.405,15.341C323.091,117.828,330.002,124.736,338.496,124.736z M338.496,101.997   c4.113,0,7.335,3.225,7.335,7.341c0,4.079-3.29,7.398-7.335,7.398c-4.083,0-7.405-3.319-7.405-7.398   C331.091,105.29,334.413,101.997,338.496,101.997z" /><path fill="#37cfee" d="M419.925,194.432H259.551c-2.209,0-4,1.791-4,4s1.791,4,4,4h160.374c2.209,0,4-1.791,4-4S422.134,194.432,419.925,194.432z   " /><path fill="#37cfee" d="M419.925,261.972H272.699c-2.209,0-4,1.791-4,4s1.791,4,4,4h147.226c2.209,0,4-1.791,4-4S422.134,261.972,419.925,261.972z   " /><path fill="#37cfee" d="M419.925,329.448H319.612c-2.209,0-4,1.791-4,4s1.791,4,4,4h100.313c2.209,0,4-1.791,4-4S422.134,329.448,419.925,329.448z   " /></g></svg>
                                    <h3 className="text-center text-xl px-4 text-white font-bold century">Vitrine</h3>
                                    <hr/>
                                    <p className="text-sm px-2 text-white text-center"><span className="font-bold">Il est idéal pour <strong>dynamiser votre <br/>communication</strong> online.</span><br/>
                                    <ul className="text-bold text-center py-2">
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Plateforme ergonomique personnalisée</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Adapté tous supports</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Création de contenus optimisé</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Navigation sécurisée (protocole HTTPS)</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Conformité RGPD</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Maintenance technique</div>
                                        </li>

                                    </ul>
                                    <br/>Ce type de création permet aux TPE/PME de faire part de leur activité en mettant en avant leurs prestations et ainsi d'acquérir de <strong>nouveaux clients</strong> près de chez eux.</p>
                                    <br />
                                    <div className="w-2/3 mx-auto block">
                                        <br />
                                        {/*<ButtonPage url="/creation-site-internet-vitrine/" text="SÉLECTIONNER" color="bleu" />*/}
                                        <RoundButton url="/creation-site-internet-vitrine/" color="bleu" colortext="black" text="SÉLECTIONNER" />
                                    </div>
                                </div>
                                <div className="blocliens w-full lg:w-1/2 xl:w-6/12 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{border:'2px solid #ffffff' }}>
                                    <svg width="40px" class="mx-auto block" viewBox="0 0 32 40"><g><path fill="#37cfee" d="M12.7,25.8C12.7,25.8,12.7,25.8,12.7,25.8c-1.1-0.2-2,0.6-2.1,2c-0.1,1.3,0.8,2.1,1.9,2.2c1,0,2-0.7,2-2   C14.4,26.8,13.7,25.9,12.7,25.8z M12.6,29c-0.5,0-1-0.1-1.2-0.8c-0.2-0.8,0.4-1.5,1.1-1.3c0,0,0,0,0,0c0,0,0.1,0,0.1,0   c0.5,0,0.8,0.5,0.9,1C13.7,28.5,13.2,28.9,12.6,29z"></path><path fill="#37cfee" d="M25.2,25.7c-1-0.1-1.9,0.9-1.8,2.1c0,0.7,0.3,1.4,0.7,1.8c0.4,0.3,0.9,0.3,1.3,0.4c1,0.1,1.6-1.3,1.4-2.3   C26.6,26.5,26.2,25.8,25.2,25.7z M25.4,28.9c-0.6,0-1.1-0.1-1.2-1c-0.1-0.8,0.3-1.3,1-1.2c0.5,0,0.6,0.2,0.8,0.8   C26,28.1,26,29,25.4,28.9z"></path><path fill="#37cfee" d="M28.6,8.7c-2.6-0.6-5.4-0.5-8-0.7c-4-0.4-8-0.7-12-0.8C8.5,6.5,8.4,5.9,8.2,5.4c-0.4-1-1.2-1.2-2.1-1.6   c0-0.4-0.1-0.7-0.4-0.9c-0.5-0.3-1-0.5-1.5-0.7C3.5,2,2,1.6,2,3c0,1.1,1.2,1.5,1.9,1.8c0.6,0.2,1.4,0.5,1.9,0   c0.5,0.2,1,0.3,1.4,0.8c0.5,0.6,0.5,1.4,0.6,2.2c0.3,1.7,0.7,3.4,1.1,5c0.6,2.8,1.3,5.6,1.9,8.4c-0.7,0.3-1.2,1-1.2,2   c0,1.5,1.3,1.9,2.3,1.9c4.9,0.1,9.8,0,14.6,0.1c0.6,0,0.6-1,0-1c-2.9,0-5.8,0-8.7,0c-1.5,0-3.1,0-4.6,0c-0.6,0-2.2,0.3-2.6-0.4   c-0.4-0.7,0.1-1.6,0.7-1.6c4.2,0,8.3,0,12.5,0c1,0,2.8,0.2,3.5-0.9c0.3-0.5,0.4-1.2,0.5-1.7c0.3-1.2,0.6-2.3,0.9-3.5   c0.5-1.8,1.2-3.7,1.3-5.6C30.1,9.4,29.6,8.9,28.6,8.7z M4,4C3.7,3.9,2.9,3.6,2.7,3.3C2.6,3,2.9,2.8,3,2.7c0.1,0,0.2,0,0.3,0   c0.3,0.1,0.6,0.2,0.8,0.3C4.5,3.2,4.8,3.3,5,3.5c0.3,0.2,0.5,0.2,0.4,0.6C5.3,4.6,4.2,4.1,4,4z M29.1,10.1c0.2,0.6-0.3,2-0.4,2.6   c0,0.2-0.1,0.3-0.1,0.5c-1.2-0.1-2.4-0.2-3.6-0.3c0.2-1.2,0.5-2.3,0.7-3.5C26.9,9.4,28.8,9.4,29.1,10.1z M27.7,16.3   c-0.1,0.2-0.1,0.5-0.2,0.7c-1.1-0.1-2.2-0.1-3.3-0.1c0.2-1.1,0.4-2.2,0.6-3.4c1.2,0.1,2.4,0.2,3.6,0.3   C28.2,14.7,27.9,15.5,27.7,16.3z M20.7,21.2c0.1-1.2,0.1-2.4,0.2-3.6c0.9,0,1.7,0.1,2.6,0.1c-0.2,1.2-0.4,2.4-0.6,3.5   C22.1,21.2,21.4,21.2,20.7,21.2z M20.9,16.8c0.1-1.2,0.1-2.4,0.2-3.6c1,0.1,2,0.2,3,0.3c-0.2,1.1-0.4,2.3-0.6,3.4   C22.7,16.9,21.8,16.9,20.9,16.8z M11.6,21.1c-0.2-1.3-0.5-2.6-0.8-3.9c0.8,0,1.7,0.1,2.5,0.1c0.2,1.3,0.5,2.5,0.8,3.8   C13.2,21.2,12.4,21.2,11.6,21.1z M9.6,12.1c0.9,0.1,1.9,0.2,2.8,0.3c0.2,1.4,0.4,2.8,0.7,4.2c-0.8,0-1.7-0.1-2.5-0.1   C10.3,15,9.9,13.6,9.6,12.1z M14.7,21.2c-0.3-1.3-0.5-2.5-0.8-3.8c0.9,0,1.8,0.1,2.7,0.1c0.1,1.2,0.1,2.5,0.2,3.7   C16.1,21.2,15.4,21.2,14.7,21.2C14.7,21.2,14.7,21.2,14.7,21.2z M13.8,16.6c-0.2-1.4-0.5-2.8-0.7-4.2c1.1,0.1,2.2,0.2,3.3,0.3   c0.1,1.3,0.2,2.6,0.2,3.9C15.7,16.7,14.7,16.6,13.8,16.6z M13,11.7c-0.2-1.1-0.4-2.2-0.6-3.3c1.2,0.1,2.5,0.2,3.7,0.3   c0.1,1.1,0.1,2.2,0.2,3.4C15.2,11.9,14.1,11.8,13,11.7z M17,12.9c1.2,0.1,2.3,0.2,3.5,0.3c-0.1,1.2-0.2,2.4-0.2,3.6   c-1,0-2-0.1-3-0.1C17.2,15.4,17.1,14.1,17,12.9z M25,9.4c-0.3,1.1-0.5,2.3-0.7,3.4c-1-0.1-2.1-0.2-3.1-0.3c0.1-1.1,0.2-2.3,0.3-3.4   C22.6,9.2,23.8,9.3,25,9.4C24.9,9.4,25,9.4,25,9.4z M20.8,9c-0.1,1.1-0.2,2.3-0.3,3.4c-1.2-0.1-2.4-0.2-3.6-0.4   c-0.1-1.1-0.1-2.3-0.2-3.4c1.2,0.1,2.4,0.2,3.5,0.3C20.4,9,20.6,9,20.8,9z M8.8,8.2c1,0,1.9,0.1,2.9,0.1c0.2,1.1,0.4,2.2,0.6,3.3   c-1-0.1-1.9-0.2-2.9-0.3c-0.1-0.2-0.1-0.5-0.2-0.7C9.1,9.9,9,9,8.8,8.2z M17.5,21.2c-0.1-1.2-0.1-2.5-0.2-3.7c1,0,1.9,0.1,2.9,0.1   c-0.1,1.2-0.1,2.4-0.2,3.6C19.2,21.2,18.3,21.2,17.5,21.2z M26.8,19.6c-0.4,1.6-1.2,1.5-2.5,1.6c-0.3,0-0.5,0-0.8,0   c0.2-1.2,0.4-2.3,0.6-3.5c1.1,0,2.1,0.1,3.2,0.1C27.2,18.4,27,19,26.8,19.6z"></path><path fill="#37cfee" d="M9.8,27.1c0.2-0.5-0.4-0.8-0.6-0.4c-0.4,1-0.2,2.1,0.3,2.9c0.3,0.4,0.7-0.2,0.5-0.5C9.6,28.5,9.5,27.7,9.8,27.1z"></path><path fill="#37cfee" d="M8.5,27.7c0-0.2-0.2-0.4-0.3-0.4c-0.2,0-0.3,0.2-0.3,0.4c0,0.4,0,0.8,0.2,1.1c0.2,0.4,0.8,0,0.6-0.4   C8.5,28.2,8.5,27.9,8.5,27.7z"></path></g></svg>
                                    <h3 className="text-center text-white text-xl px-4 font-bold century">E-commerce</h3>
                                    <hr/>
                                    <p className="text-sm px-4 text-white text-center"><span className="font-bold">La <strong>boutique e-commerce</strong> est idéale pour développer la <strong>vente en ligne</strong> pour sa société.</span><br/>
                                    <ul className="text-bold text-center py-2">
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Plateforme ergonomique personnalisée</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Création de fiches produits</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Module de gestion des stocks et ventes</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Navigation sécurisée (protocole HTTPS)</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Conformité RGPD</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Formation Back-Office</div>
                                        </li>

                                    </ul>
                                    <br/>La boutique <strong>E-commerce</strong> s’adresse aux commerçants et boutiques qui souhaitent <strong>développer leur chiffre d’affaire en ciblant une toute nouvelle clientèle</strong>.</p>
                                    <br />
                                    <div className="w-2/3 mx-auto block">
                                        <br />
                                        {/*<ButtonPage url="/creer-une-boutique-en-ligne/" text="SÉLECTIONNER" color="bleu" />*/}
                                        <RoundButton url="/creer-une-boutique-en-ligne/" color="bleu" colortext="black" text="SÉLECTIONNER" />
                                    </div>
                                </div>
                            </section>
                            <section className="flex flex-col justify-center md:flex-row w-full mx-auto py-0 mt-2 ">
                                <div className="blocliens w-full lg:w-1/2 xl:w-6/12 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{border:'2px solid #ffffff' }}>
                                    <svg width="40px" class="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M10,20v60h80V20H10z M89,79H11V31h78V79z M89,30H11v-9h78V30z"></path><g><polygon fill="#37cfee" points="17,28.031 14,25.516 17,23  "></polygon></g><g><polygon fill="#37cfee" points="20,23 23,25.516 20,28.031  "></polygon></g><path fill="#37cfee" d="M15,35v18h26V35H15z M40,36v15.356c-1.491-1.694-5.104-5.628-6.485-5.628c-0.791,0-1.56,0.598-2.374,1.231  c-0.897,0.698-1.826,1.42-2.792,1.42c-0.703,0-1.765-2.476-2.467-4.115c-1.086-2.534-2.023-4.722-3.387-4.722  c-1.948,0-5.014,7.201-6.495,11.002V36H40z M39.233,52H16.515c2.351-6.245,5.064-11.458,5.98-11.458  c0.704,0,1.766,2.477,2.468,4.116c1.086,2.533,2.023,4.721,3.386,4.721c1.309,0,2.423-0.867,3.406-1.631  c0.645-0.502,1.312-1.021,1.76-1.021C34.177,46.734,36.933,49.393,39.233,52z M39.986,52L40,51.988V52H39.986z"></path><g><path fill="#37cfee" d="M33,44.479c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5S34.379,44.479,33,44.479z M33,40.479   c-0.827,0-1.5,0.673-1.5,1.5s0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S33.827,40.479,33,40.479z"></path></g><path fill="#37cfee" d="M15,57v18h26V57H15z M40,58v15.356c-1.491-1.694-5.104-5.628-6.485-5.628c-0.791,0-1.56,0.598-2.374,1.231  c-0.897,0.698-1.826,1.42-2.792,1.42c-0.703,0-1.765-2.476-2.467-4.115c-1.086-2.534-2.023-4.722-3.387-4.722  c-1.948,0-5.014,7.201-6.495,11.002V58H40z M39.233,74H16.515c2.351-6.245,5.064-11.458,5.98-11.458  c0.704,0,1.766,2.477,2.468,4.116c1.086,2.533,2.023,4.721,3.386,4.721c1.309,0,2.423-0.867,3.406-1.631  c0.645-0.502,1.312-1.021,1.76-1.021C34.177,68.734,36.933,71.393,39.233,74z M39.986,74L40,73.988V74H39.986z"></path><g><path fill="#37cfee" d="M33,66.479c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5S34.379,66.479,33,66.479z M33,62.479   c-0.827,0-1.5,0.673-1.5,1.5s0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S33.827,62.479,33,62.479z"></path></g><g><rect fill="#37cfee" x="45" y="39" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="48" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="42" width="40" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="45" width="30" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="61" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="70" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="64" width="40" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="67" width="30" height="1"></rect></g></svg>
                                    <h3 className="text-center text-white text-xl px-4 font-bold century">Catalogue</h3>
                                    <hr/>
                                    <p className="text-sm px-4 text-white text-center"><span className="font-bold">Le catalogue s'adresse aux professionnels souhaitant promouvoir leurs articles sans vente en ligne.</span> <br/>
                                    <ul className="text-bold text-center py-2">
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Plateforme ergonomique personnalisée</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Création de fiches produits</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Création de contenus optimisé</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Navigation sécurisée (protocole HTTPS)</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Conformité RGPD</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Formation Back-Office</div>
                                        </li>

                                    </ul>
                                    <br/>Développer ce type d'outil permet de bénéficier des avantages du E-commerce pour présenter votre offre dans le moindre détail au sein de <strong>pages web</strong> dédiées.</p>
                                    <br />
                                    <div className="w-2/3 mx-auto block">
                                        <br />
                                        {/*<ButtonPage url="/creation-site-internet-catalogue/" text="SÉLECTIONNER" color="bleu" />*/}
                                        <RoundButton url="/creation-site-internet-catalogue/" color="bleu" colortext="black" text="SÉLECTIONNER" />
                                    </div>
                                </div>
                                <div className="blocliens w-full lg:w-1/2 xl:w-6/12 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{border:'2px solid #ffffff' }}>
                                    <svg width="35px" class="mx-auto block" viewBox="0 0 280 350" x="0px" y="0px"><defs></defs><g><path fill="#37cfee" class="fil0" d="M84.998 219.434c-0.016,-0.076 -0.03,-0.153 -0.042,-0.23l-0.018 -0.098c-0.397,-2.118 0.634,-4.173 2.412,-5.174l40.349 -41.05 -24.108 -24.84 -40.292 40.292c-0.77,2.316 -3.162,3.75 -5.618,3.261l-0.384 -0.074c-0.112,-0.017 -0.223,-0.037 -0.334,-0.061 -5.385,-0.96 -10.952,-0.645 -16.214,0.946 -5.289,1.598 -10.275,4.492 -14.461,8.678 -4.124,4.124 -6.992,9.014 -8.604,14.199 -0.62,1.992 -1.056,4.029 -1.309,6.082l15.097 -15.097 0.01 0.01c1.329,-1.327 3.365,-1.825 5.229,-1.104l23.4 9.044c1.337,0.471 2.459,1.515 2.98,2.952l8.104 22.322c0.815,1.808 0.481,4.008 -1.005,5.494l-15.097 15.097c2.054,-0.254 4.09,-0.69 6.082,-1.309 5.185,-1.612 10.075,-4.48 14.199,-8.604 4.156,-4.156 7.036,-9.08 8.64,-14.293 1.639,-5.327 1.967,-10.977 0.984,-16.443zm128.991 -18.803l-142.787 -147.114 -13.131 12.77 142.788 147.114 13.13 -12.77zm-138.498 -151.285l142.787 147.114 9.456 -9.196 -83.481 -86.016c-0.149,-0.118 -0.293,-0.246 -0.431,-0.383 -0.174,-0.175 -0.332,-0.358 -0.475,-0.55l-58.396 -60.17 -9.46 9.201zm121.078 168.226l-142.787 -147.114 -8.823 8.581 142.783 147.119 8.827 -8.586zm38.45 33.987l16.736 -16.248 -20.677 -42.935 -38.336 37.267 42.277 21.916zm23.156 -16.7l15.282 36.651c0.634,1.528 -0.09,3.28 -1.617,3.914 -0.868,0.36 -1.808,0.282 -2.575,-0.133l-34.86 -17.319c-0.069,-0.03 -0.137,-0.062 -0.204,-0.096l-47.891 -24.826c-0.331,-0.17 -0.617,-0.394 -0.852,-0.655l-50.933 -52.479 -39.513 40.199c0.774,6.226 0.229,12.591 -1.632,18.641 -2.073,6.735 -5.76,13.062 -11.059,18.361 -5.272,5.272 -11.551,8.946 -18.229,11.023 -6.909,2.147 -14.246,2.57 -21.336,1.267 -2.66,-0.487 -4.422,-3.039 -3.935,-5.699 0.187,-1.017 0.674,-1.902 1.355,-2.58l-0.011 -0.011 20.877 -20.878 -6.403 -17.636 -18.469 -7.139 -20.829 20.829c-1.919,1.919 -5.029,1.919 -6.948,0 -0.836,-0.836 -1.308,-1.901 -1.415,-2.993 -1.213,-6.965 -0.767,-14.156 1.34,-20.934 2.077,-6.679 5.751,-12.958 11.023,-18.229 5.367,-5.368 11.769,-9.08 18.567,-11.135 5.974,-1.806 12.252,-2.33 18.401,-1.571l40.439 -40.44 -58.161 -59.927 -0.049 -0.053 -0.044 -0.043 -18.217 -18.73c-3.419,-3.523 -5.087,-8.117 -5.021,-12.682 0.066,-4.576 1.866,-9.125 5.383,-12.546l22.99 -22.311c3.527,-3.423 8.131,-5.094 12.706,-5.028 4.585,0.066 9.144,1.869 12.57,5.39l18.205 18.718 0.027 0.029 0.02 0.019 57.504 59.251 38.738 -38.737c-0.8,-6.487 -0.17,-13.122 1.891,-19.394 2.116,-6.439 5.721,-12.481 10.813,-17.573 5.271,-5.271 11.551,-8.945 18.23,-11.022 6.777,-2.108 13.968,-2.554 20.933,-1.34 1.093,0.107 2.157,0.578 2.993,1.415 1.919,1.918 1.919,5.029 0,6.947l-20.828 20.829 7.139 18.47 17.636 6.403 20.877 -20.878 0.011 0.011c0.678,-0.68 1.563,-1.168 2.58,-1.354 2.66,-0.488 5.212,1.274 5.7,3.934 1.302,7.09 0.879,14.428 -1.268,21.336 -2.077,6.679 -5.751,12.958 -11.023,18.229 -5.543,5.544 -12.194,9.321 -19.249,11.332 -6.397,1.823 -13.124,2.186 -19.655,1.088l-38.147 38.809 52.075 53.656 0.01 0.011c0.231,0.237 0.414,0.503 0.55,0.785l23.361 48.506c0.055,0.103 0.104,0.21 0.147,0.318zm-17.484 19.553l24.152 11.999 -10.525 -25.246 -13.627 13.247zm-89.186 -154.283l23.701 24.421 39.649 -40.337c1.156,-1.317 2.981,-1.972 4.806,-1.546 5.753,1.343 11.786,1.202 17.486,-0.423 5.482,-1.562 10.66,-4.508 14.989,-8.837 4.124,-4.124 6.992,-9.014 8.604,-14.199 0.62,-1.992 1.056,-4.028 1.309,-6.081l-15.096 15.097c-1.486,1.485 -3.686,1.82 -5.494,1.005l-22.323 -8.105c-1.436,-0.52 -2.481,-1.643 -2.952,-2.98l-9.044 -23.399c-0.721,-1.865 -0.223,-3.9 1.105,-5.229l-0.011 -0.011 15.097 -15.096c-2.053,0.253 -4.089,0.689 -6.081,1.309 -5.186,1.612 -10.076,4.48 -14.2,8.604 -3.986,3.986 -6.797,8.68 -8.433,13.658 -1.707,5.196 -2.155,10.722 -1.344,16.099 0.027,0.177 0.043,0.354 0.051,0.529 0.518,1.684 0.111,3.591 -1.221,4.923l-40.598 40.598zm-110.806 -25.475l40.034 -38.851 -16.117 -16.57c-2.279,-2.343 -5.308,-3.542 -8.351,-3.585 -3.054,-0.044 -6.121,1.066 -8.465,3.34l-22.99 22.311c-2.337,2.273 -3.534,5.293 -3.578,8.327 -0.044,3.044 1.064,6.102 3.333,8.44l16.134 16.588z"></path></g></svg>
                                    <h3 className="text-center text-white text-xl px-4 font-bold century">Sur-mesure</h3>
                                    <hr/>
                                    <p className="text-sm px-4 text-white text-center"><span className="font-bold">Pour concevoir une <strong>interface multifonctions</strong> : réservation, simulation, configurateur, etc.</span><br/>
                                    <ul className="text-bold text-center py-2">
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Plateforme ergonomique personnalisée</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Adapté tous supports</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Modules spécifiques</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Navigation sécurisée (protocole HTTPS)</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Conformité RGPD</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                        <div className="check">✔</div>
                                        <div className="w-9/12 text-left">Mise à jour technique</div>
                                        </li>

                                    </ul>
                                    <br/>De ce fait, vous décidez d’optimiser votre organisation grâce à une interface numérique à la portée de tous, de type <strong>intranet</strong> ou <strong>CRM d'entreprise</strong>.</p>
                                    <br />
                                    <div className="w-2/3 mx-auto block">
                                        <br />
                                        
                                        {/*<ButtonPage url="/creation-site-internet-sur-mesure/" text="SÉLECTIONNER" color="bleu" />*/}
                                        <RoundButton url="/creation-site-internet-sur-mesure" color="bleu" colortext="black" text="SÉLECTIONNER" />
                                    </div>
                                </div>
                            </section>
                        </section>
                    </section>
                    <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-32 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Création site internet à Toulouse : <span className="text-bleu">nous les accompagnons</span></h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Nous travaillons tous les jours avec des entreprises de tous secteurs pour leur proposer une solution fonctionnelle, de qualité et dynamiser leur communication. Nos réalisations :</h3>
                        </div>
                    </section>
                    <Tiles/>
                    <section className="w-full flex my-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                        <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence</span> ?</h3>
                        <h4>Linkweb soutient les professionnels souhaitant développer leur visibilité en ligne.</h4>
                        </div>
                        <div className="w-full mx-auto block lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" />
                        </div>
                    </section>
                    <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création site internet à Toulouse :<br/><span className="font-bold">Nos clients sont satisfaits</span>
                        </h2>
                        <br/>
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                        <br/>
                    </section>
                <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-center justify-center century text-center mt-3 px-6 mb-12">
                <div className="flex flex-row flex-wrap">
                                <article className="w-full md:w-1/2 mt-5 lg:w-1/2 text-left xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                                    <div className="avis" style={{minHeight:'340px'}}>
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={climaf} alt="Avis Google"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>LUDIKSTYL</h4>
                                        <p>Une équipe à l'écoute et très réactive. En collaboration avec <strong>Linkweb</strong> depuis bientôt 8 ans.
                                        Je recommande fortement pour leur dynamisme et leur gentillesse. Que cela dure encore longtemps 😉</p>
                                    </div>
                                </article>
                                <article className="w-full md:w-1/2 lg:w-1/2 text-left mt-5 xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                                    <div className="avis" style={{minHeight:'340px'}}>
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={contis} alt="Avis My Business"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>CONTIS ÉQUITATION</h4>
                                        <p>Très bonne équipe sérieuse qui est à l'écoute de nos attentes.<br/><br/>
                                            Le suivi est super, ils ne font pas QUE vous <strong>créer un site web</strong>, ils conseillent, donnent leurs idées, font des recherches et des créations pour vous et tout ça avec rapidité !<br/><br/>
                                            Je recommande cette entreprise qui m'a apporté une bonne partie de ma clientèle.</p>
                                    </div>
                                </article>
                                <article className="w-full md:w-1/2 lg:w-1/2 mt-5 text-left xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                                    <div className="avis" style={{minHeight:'340px'}}>
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={faivre} alt="Avis My Business"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>FAIVRE CRÉATIONS</h4>
                                        <p>L'<strong>agence Linkweb Agen</strong> est toujours disponible et à l'écoute. Elle contribue à notre développement, et nous accorde du temps et de l'énergie pour nous assurer une bonne <strong>visibilité sur internet</strong>. <br/><br/>Nous sommes très satisfaits de leur travail et souhaitions les en remercier via ce commentaire ! Équipe agréable et bienveillante !</p>
                                        <br/>
                                    </div>
                                </article>
                                </div>
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
                                Vous travaillez déjà avec nous ? Donnez nous votre avis !
                            </a>
                        </div>
                    </section>
                    <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                            Création site internet Toulouse :<br/><span className="font-bold">Un résultat en accord avec vos besoins</span>
                        </h2>
                        <br/>
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                        <br/>
                    </section>
                    <section  className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                    <Accordion>
                                <div className="w-full" label="EST-CE POSSIBLE DE METTRE EN PLACE DES FONCTIONNALITÉS SPÉCIFIQUES ?">
                                    <p>Afin d'<span className="font-bold">obtenir un résultat adapté à ses besoins et une plus-value pour sa société</span>, il faut garder à l'esprit que le site peut avoir plusieurs rôles au sein d’une entreprise et dans une stratégie digitale. Il est à la fois la <strong>vitrine</strong> de sa société, directement accessible pour les utilisateurs et permet de proposer des fonctionnalités. Simulateur de devis, module de réservation, configurateur, <strong>moteur de recherche</strong> adapté, les possibilités en termes de fonctionnalités ne manquent pas.<br/><br/> 
                                    De plus, pour les entreprises souhaitant mettre le <strong>numérique</strong> au coeur de leur fonctionnement, il est possible de <span className="font-bold">concevoir un réel <strong>outil de gestion</strong></span>. À ce niveau, <Link to="/" className="hover:text-bleu"><strong>Linkweb</strong></Link> fait partie des <strong>agences digitales</strong> en mesure de s'adapter <span className="font-bold">à vos besoins, tout en restant en totale cohérence avec <strong>votre image</strong> (charte graphique, valeurs, etc.)</span>. Ceci est valable de la phase de <strong>conception</strong>, jusqu’à la définition des espaces d’administration et de la répartition des rôles et permissions pour les employés de votre entreprise. Nous vous proposons une offre <strong>clé en main</strong> en répondant à vos exigences : <strong>intranet</strong>, <strong>CRM</strong>, etc.<br/><br/>
                                    <span className="font-bold">La <strong><Link to="/creation-site-internet-toulouse/refonte-site-internet/" className="text-bleu hover:text-black">refonte</Link> ou création d'un site internet</strong> ne constitue pas un objectif : il est un MOYEN pour atteindre vos objectifs.</span></p>
                                </div>
                                <div label="UNE PLATEFORME DESTINÉE À LA POPULATION TOULOUSAINE (OCCITANIE)">
                                    <p>Lorsque l’on met en place une <strong>stratégie de communication</strong>, <span className="font-bold">la <strong>définition des cibles</strong> est une étape indispensable</span>. Le <strong>site internet</strong> ne déroge pas à la règle. Pour <strong>créer un site web</strong> efficace en fonction des moyens de déploiement choisis, il faut <span className="font-bold">considérer son public dès l’élaboration du projet, la <strong>la conception du site</strong> et de ses <strong>pages</strong></span>. <br/><br/>
                                    
                                    Par ailleurs, <strong>communiquer</strong> dans un environnement aussi concurrentiel que la <strong>métropole toulousaine</strong> implique d’investir dans le <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webmarketing/"><strong>webmarketing</strong></Link> avec <span className="font-bold">un <strong>site professionnel </strong>et un <strong>référencement</strong> (<strong>référencement naturel</strong> et/ou <strong>campagnes Google Adwords</strong>) soigné</span>. Ceci est vrai pour l'ensemble des métropoles de France où la concurrence sera forte.<br/><br/>     
                                    De plus, les <strong>sites</strong> que nous développons sont créés en vue de répondre à un besoin précis. C’est pourquoi, en choisissant <strong>notre agence digitale à Toulouse</strong>, le positionnement stratégique de <strong>votre site web</strong> est réfléchi et anticipé. <span className="font-bold"><Link to="/" className="hover:text-bleu"><strong>Linkweb</strong></Link> dispose de tous les outils pour évaluer chaque critère et prendre les décisions qui vous permettront d’obtenir un <strong>site internet efficace et performant</strong>.</span> <br/><br/>
                                    
                                    Quelque soit votre secteur d'activité, nous nous engageons à répondre à vos besoins.
                                    <br/>
                                    <section className="flex-artisans capitalize">
                                        <strong><Link to="/creation-site-internet-toulouse/creation-site-pour-artisan/" className="text-bleu hover:text-black">artisan</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-menuisier/" className="text-bleu hover:text-black">menuisier</Link> </strong><strong><Link to="/creation-site-internet-toulouse/site-internet-charpentier/" className="text-bleu hover:text-black">charpentier</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-macon/" className="text-bleu hover:text-black">maçon</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-avocat" className="text-bleu hover:text-black">avocat</Link></strong><strong><Link to="/creation-site-internet-toulouse/site-internet-commerce/" className="text-bleu hover:text-black">commerçant</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-industrie/" className="text-bleu hover:text-black">industriel</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-immobilier/" className="text-bleu hover:text-black">directeur d'une agence immobilière</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-hotel/" className="text-bleu hover:text-black">hôtelier</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-automobile/" className="text-bleu hover:text-black">gérant d'une entreprise automobile</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-photographe/" className="text-bleu hover:text-black">photographe</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-restaurant/" className="text-bleu hover:text-black">restaurateur</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-chocolatier/" className="text-bleu hover:text-black">chocolatier</Link></strong><strong> <Link to="/creation-site-internet-toulouse/site-internet-pisciniste/" className="text-bleu hover:text-black">pisciniste</Link></strong><strong> <Link to="/creation-site-internet-toulouse/site-internet-coiffure/" className="text-bleu hover:text-black">coiffeur</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-cuisiniste/" className="text-bleu hover:text-black">cuisiniste</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-chauffage-climatisation/" className="text-bleu hover:text-black">chauffagiste ou climatiseur</Link></strong><strong><Link to="/creation-site-internet-toulouse/site-internet-ramoneur/" className="text-bleu hover:text-black">ramoneur</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-electricien/" className="text-bleu hover:text-black">électricien</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-serrurier/" className="text-bleu hover:text-black">serrurier</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-paysagiste/" className="text-bleu hover:text-black">paysagiste</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-jardinier/" className="text-bleu hover:text-black">jardinier</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-mode" className="text-bleu hover:text-black">gérant d'une entreprise de la mode</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-banque/" className="text-bleu hover:text-black">banquier</Link></strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-psychologue/" className="text-bleu hover:text-black">psychologue</Link></strong>
                                    </section>
                                    </p>
                                </div>
                                <div label="COMBIEN DE TEMPS NÉCESSITE LE PROCESSUS DE CRÉATION ?">
                                    <p><span className="font-bold">Il n'existe pas de délai précis pour la production d'un <strong>site</strong></span> puisqu’il va dépendre de nombreux critères. En effet, la phase de production va dépendre d'éléments tels que la définition des contenus et des <strong><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/">maquettes</Link></strong> (<Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/">UI</Link> et UX), les échanges en vue de la validation, <strong>la rédaction des contenus</strong>, les éventuelles modifications, ou encore les contraintes liées à la <strong>conception</strong> (respect du W3C, optimisation <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/mobile-first/">mobile first</Link>, codage <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/">HTML/CSS</Link>, utilisation de <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/">frameworks</Link>, etc.), etc. <br/><br/>Il existe de nombreux paramètres, propres à votre projet, qui vont également influer sur le temps de production d’un <strong>site internet</strong>. En effet, nos méthodes de production sont personnalisées en fonction de vos besoins. De plus, <span className="font-bold"><strong>faire un site internet</strong> demande de considérer et de soigner les moindres détails pour une <strong>mise en ligne optimale</strong> ainsi que pour aboutir à un outil qui vous correspond.</span> C’est pourquoi la durée de production est variable en fonction du projet.</p>
                                </div>
                        </Accordion>
                    </div>
                  </section>
                  <section className="w-full bg-black flex flex-col md:flex-row">
                      <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                      </div>
                      <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                          <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Vous portez un projet de création de site internet à Agen ?</h2>
                        <br/>
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0"/>
                        <br/>
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Linkweb conduit votre projet <strong>de création de site internet à Agen</strong> dans le sud de la France, de sa conception à sa réalisation. Notre équipe vous accompagne dans la mise en route technique et dans la définition stratégique éditoriale pour répondre à vos objectifs.</p>
                            <div className="max-w-xs ml-auto mr-auto md:mr-0 md:ml-0 block">
                                <RoundButton url="/creation-de-site-internet-a-agen/" color="darkgrey" text="J'AI UN PROJET À AGEN" />
                            </div>
                        </div>
                        
                      </div>
                    </section>
                  <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselToulouse />
                    </div>
                </div>

                  <SimpleMap/>
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
query lastsThreePosts {
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
export default CreationSiteInternetToulousePage;




