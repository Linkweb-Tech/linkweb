import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";

import RoundButtonPages from "../components/roundButtonPages";
import RoundButtonPagesMail from "../components/roundButtonPagesMail";
import RoundButton from "../components/roundButton";
/*import ButtonPage from "../components/buttonPage.js";*/
import Button from "../components/button.js";
import Tiles from '../components/gallery/tiles';
import ModalcreationAgen from '../components/modalcreationagen';

import CarouselToulouse from "../components/carousel-slides/toulouse-slides";

import Accordion from "../components/accordion";
import SEO from "../components/seo";
import SimpleMap from "../components/simpleMap";

import "../scss/global.scss";
import "../scss/info.scss";
import "../scss/blochover.scss";
import "../scss/carousel.scss";
import Bg from "../images/creation-site-web-nice.jpg";
import scroll from "../images/motiontest.svg";
import ludikstyle from "../images/ludikstyle-avis.png";
import tgcm from "../images/tgcm-avis.png";
import contis from "../images/contis-avis.png";
import mac from "../images/mac-linkweb.jpg";
import siteinternet from "../images/creation-site-internet-nice.jpg";
import referencement from "../images/visibilite-site-internet-nice.jpg";
import webdesign from "../images/conversion-site-internet-nice.jpg";


class CreationSiteInternetNicePage extends Component {

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
                    title="Création Site Internet Nice - Développez votre présence en ligne avec Linkweb"
                    description="Création de site internet sur-mesure, e-commerce ou vitrine à Nice. Devis gratuit – Accompagnement professionnel - Suivi régulier et personnalisé."
                    keywords={[`Création site internet Nice`, `Création site internet Nice`, `Création site web Nice`, `Création site web Nice`]}
                    url="https://linkweb.fr/creation-site-internet-nice/"
                    nom="Création de site internet à Nice"
                    slug="creation-site-internet-nice/"
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


                <section className="flex items-center w-full mx-auto pb-0 mt-40 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{background: 'rgba(0,0,0,.65) url(' + Bg + ')', backgroundBlendMode: 'multiply', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <div className="max-w-6xl mx-auto lg:mx-56 pt-2 lg:w-2/5 w-full flex-col items-end">
                        <div className="mt-12 -mb-24 w-full flex flex-col items-center lg:items-start">
                            <div className="w-full  text-3xl text-center font-bold text-white century">4.6/5</div>
                            <p className="w-full  text-sm text-center font-bold text-white century -mt-2">Avis Google</p>
                            <div className="w-full -mt-8">
                                <svg className="mx-auto block" width="100px" viewBox="0 0 100 125">
                                    <path fill="#FFFFFF" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                    <path fill="#FFFFFF" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                    <path fill="#FFFFFF" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                    <path fill="#FFFFFF" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                    <path fill="#FFFFFF" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z   M89.8,54.7c0.1-0.1,0.4,0,0.4,0l4.2,2.2l-0.8-4.7c0-0.2,0-0.3,0.1-0.4l3.4-3.3l-4.7-0.7c-0.2,0-0.3-0.1-0.4-0.3l-2.1-4.3L89.8,54.7  z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full lg:w-full flex justify-center lg:justify-center">
                            <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Création site internet Nice</h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Linkweb, partenaire de votre projet de création de site internet à Nice.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-full flex flex-col lg:flex-row justify-center pb-24 lg:justify-center mx-auto" style={{ maxWidth: '460px' }}>
                            <RoundButtonPages url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonPagesMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                    <div className="w-full flex items-end justify-center mx-auto block pb-16">
                        <img src={scroll} alt="Scroll" width="60px" />
                    </div>
                </section>
                <nav aria-label="breadcrumbs" className="w-full bg-bleu century py-2 px-6 md:pl-48">
                        <Link to="/agence-web-nice/" className="text-md lg:text-lg text-white hover:text-black pr-4">Agence web Nice</Link> <span className=" text-lg text-black"> / </span>
                        <span className="px-4 text-md lg:text-lg text-white"> Création site internet Nice</span>
                    </nav>
                    <section className="bg-white sidetitle mt-16 mb-10">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Accélérez votre croissance grâce à la création d'un site internet professionnel</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                    <br />
                                    <h3 /*data-aos='fade-left'*/ className="text-md text-black century pb-0">Opter pour la création d'un site internet professionnel est crucial pour assurer la réussite et la croissance de votre entreprise en ligne. Ne manquez pas cette opportunité ! Notre <Link to="/agence-web-nice/" className="text-bleu hover:text-black font-bold">agence web à Nice</Link> est spécialisée dans la mise en place de solutions web. Linkweb conçoit et déploie votre projet de création de site internet à Nice.</h3>
                                </div>
                        </section>
                        <section className="w-full my-10 flex flex-col lg:flex-row justify-center">
                            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                                <h3 className="text-3xl titrehover text-center century leading-tight px-6">Développez votre marque en ligne avec la création de site internet <hr className="border-solid mt-3 mx-auto border-2 w-1/6 border-bleu" style={{marginLeft:'auto', marginRight:'auto'}}/></h3>
                                <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                                    Le <strong className="font-normal">site web</strong> est un outil essentiel pour renforcer la présence en ligne de son entreprise et stimuler son activité sur le Web. Il représente une extension digitale de votre société, accessible en permanence pour vos visiteurs. 
                                    <br/><br/>
                                    Un site internet bien conçu renforce la confiance des consommateurs, car il facilite leur recherche et leur accès à vos services ou produits directement en ligne. Il s'agit d'un outil indispensable pour assurer la crédibilité de votre entreprise.
                                    <br/><br/>
                                    Exploiter pleinement le potentiel d'un <strong className="font-normal">site internet professionnel</strong> est indispensable pour <strong className="font-normal">maximiser votre présence en ligne</strong> et faire connaître votre marque.
                                </p>
                            </div>
                            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                                <h3 className="text-3xl titrehover text-center century leading-tight px-6">Optimisez votre visibilité sur le Web et atteignez de nouvelles cibles <hr className="border-solid mt-3 mx-auto border-2 w-1/6 border-bleu" style={{marginLeft:'auto', marginRight:'auto'}}/></h3>
                                <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                                <strong className="font-normal">Avoir un site internet</strong> est essentiel pour accroître sa présence en ligne. En combinant cela avec une stratégie de référencement naturel SEO, la <strong className="font-normal">conception d'un site web</strong> vous offre l'opportunité de générer du trafic et d'atteindre des internautes véritablement intéressés par vos offres et prestations.
                                    <br/><br/>
                                    Étendez votre influence sur le Web en tirant parti de la notoriété d'un moteur de recherche tel que Google. <strong className="font-normal">Linkweb</strong> vous aide à atteindre les meilleures positions de Google pour des requêtes significatives et fréquemment effectuées.
                                </p>
                            </div>
                            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                                <h3 className="text-3xl titrehover text-center century leading-tight">Boostez vos conversions et attirez de nouveaux clients grâce au webmarketing <hr className="border-solid mt-3 mx-auto border-2 w-1/6 border-bleu" style={{marginLeft:'auto', marginRight:'auto'}}/></h3>
                                <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                                    Attirer des visiteurs ciblés sur un site web est indispensable pour <strong className="font-normal">obtenir de nouveaux clients</strong>. Le site internet agit alors comme un outil de génération de leads pour votre société, en convertissant les utilisateurs en prospects intéressés grâce à un contenu intéressant et structuré.
                                    <br/><br/>
                                    Le site internet se positionne au cœur de votre <strong className="font-normal">projet web</strong>, visant spécifiquement à vous aider à atteindre vos objectifs commerciaux. En ce sens, il constitue un outil parfait pour mettre en avant votre entreprise sur la toile, attirer des prospects pertinents, commercialiser vos produits et gérer votre activité.
                                </p>
                            </div>
                        </section>
                        <button
                            className="link flex  mt-3 items-center century text-black text-lg mx-auto block justify-center lg:text-xl"
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/contact-agence-web-toulouse/';
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792">
                            <path
                                d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                            </svg>
                            Demander un devis gratuit
                        </button>
                </section>
                <section className="blocpresta mt-10 pb-12">
                <section className="sidetitle text-white mt-10">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-3xl md:text-5xl leading-none">Création site internet Nice : découvrez nos solutions</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                    <br />
                                    <h3 /*data-aos='fade-left'*/ className="text-md century pb-0">Faites le choix d’une solution de création de site internet à Nice qui répond à vos besoins les plus spécifiques.</h3>
                                </div>
                        </section>
                    </section>
                    {/* <ModalcreationAgen/> */}
                    <section className="flex flex-col xl:flex-row mx-8 lg:mx-24 my-0 items-center lg:justify-center">
                        <section className="flex flex-col justify-center md:flex-row w-full mx-auto py-0 mt-2 ">
                            <div className="blocliens w-full lg:w-1/2 xl:w-6/12 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{ border: '2px solid #ffffff' }}>
                                <div className="flex items-center justify-center flex-col lg:flex-row">
                                    <svg width="40px" className="block" viewBox="12.938 70.193 487.061 465.68874999999997"><g><path fill="#37cfee" d="M499.811,74.173c-0.011-2.202-1.799-3.98-4-3.98H135.94c-2.209,0-3.999,1.791-3.999,4v70.337   c0,0.003-0.001,0.006-0.001,0.01s0.001,0.006,0.001,0.01v72.281c-1.976-0.103-3.965-0.157-5.967-0.157   c-33.125,0-62.967,14.323-83.661,37.1c-0.173,0.162-0.328,0.34-0.471,0.53c-17.961,20.019-28.905,46.456-28.905,75.405   c0,28.943,10.939,55.375,28.893,75.392c0.146,0.197,0.307,0.38,0.485,0.547c20.693,22.775,50.534,37.096,83.657,37.096   c33.116,0,62.953-14.3,83.655-37.047c0.249-0.224,0.478-0.468,0.664-0.747c6.789-7.592,12.568-16.102,17.127-25.32h268.579   c2.209,0,4-1.791,4-4V112.869L499.811,74.173z M491.83,78.193l0.169,34.695v27.652H139.94l0-62.347H491.83z M230.826,336.737   c-0.027,0.404-0.05,0.809-0.081,1.212c-0.044,0.567-0.098,1.131-0.151,1.695c-0.031,0.331-0.06,0.663-0.094,0.994   c-0.063,0.611-0.136,1.219-0.21,1.827c-0.034,0.278-0.066,0.556-0.101,0.833c-0.084,0.65-0.177,1.297-0.273,1.943   c-0.034,0.227-0.067,0.454-0.102,0.68c-0.107,0.687-0.221,1.371-0.341,2.053c-0.031,0.177-0.062,0.354-0.094,0.531   c-0.132,0.727-0.271,1.451-0.418,2.173c-0.024,0.117-0.048,0.234-0.072,0.35c-0.162,0.783-0.331,1.563-0.511,2.339   c-0.006,0.026-0.012,0.053-0.019,0.079c-3.957,17.051-12.082,32.522-23.237,45.283h-47.846c4.839-19.064,7.468-42.21,7.744-65.022   h65.963c-0.019,0.508-0.035,1.017-0.061,1.525C230.896,335.736,230.859,336.236,230.826,336.737z M46.868,260.688h47.897   c-4.825,19.064-7.445,42.209-7.72,65.021H21.022C21.957,300.876,31.549,278.222,46.868,260.688z M165.02,325.709   c-0.276-22.812-2.904-45.957-7.743-65.021h47.846c15.327,17.534,24.925,40.188,25.86,65.021H165.02z M95.044,325.709   c0.294-25.694,3.406-47.972,7.998-65.021h45.952c4.609,17.05,7.732,39.328,8.028,65.021H95.044z M157.021,333.709   c-0.295,25.694-3.419,47.972-8.028,65.022h-45.952c-4.592-17.05-7.704-39.328-7.998-65.022H157.021z M155.041,252.688   c-3.425-11.13-7.709-20.404-12.812-26.756c21.094,3.287,40.126,12.87,55.117,26.756H155.041z M146.599,252.688h-41.171   c5.853-17.727,13.399-28.014,20.547-28.014C133.149,224.674,140.724,234.96,146.599,252.688z M96.994,252.688H54.64   c14.993-13.896,34.032-23.483,55.133-26.764C104.683,232.276,100.41,241.553,96.994,252.688z M87.045,333.709   c0.275,22.813,2.896,45.958,7.72,65.022H46.869c-15.319-17.535-24.912-40.189-25.847-65.022H87.045z M96.994,406.731   c3.416,11.134,7.689,20.411,12.779,26.763c-21.1-3.281-40.139-12.867-55.132-26.763H96.994z M105.427,406.731h41.171   c-5.875,17.727-13.449,28.013-20.624,28.013C118.826,434.744,111.28,424.458,105.427,406.731z M155.041,406.731h42.304   c-14.99,13.885-34.023,23.468-55.116,26.755C147.332,427.135,151.616,417.861,155.041,406.731z M231.04,371.63   c2.484-6.252,4.388-12.648,5.722-19.156c0.002-0.009,0.004-0.019,0.006-0.029c0.18-0.88,0.35-1.762,0.508-2.646   c0.013-0.072,0.026-0.143,0.038-0.215c0.147-0.825,0.284-1.652,0.412-2.481c0.019-0.122,0.038-0.244,0.057-0.367   c0.118-0.78,0.227-1.561,0.329-2.343c0.022-0.168,0.044-0.335,0.066-0.503c0.093-0.739,0.177-1.48,0.255-2.222   c0.022-0.207,0.045-0.414,0.066-0.621c0.07-0.705,0.132-1.411,0.189-2.118c0.02-0.242,0.042-0.483,0.06-0.725   c0.051-0.683,0.092-1.368,0.131-2.053c0.015-0.261,0.033-0.522,0.046-0.783c0.034-0.69,0.057-1.381,0.079-2.072   c0.008-0.255,0.021-0.509,0.027-0.765c0.023-0.939,0.036-1.88,0.036-2.822c0-0.93-0.013-1.858-0.035-2.786   c-0.008-0.334-0.024-0.665-0.035-0.998c-0.02-0.591-0.039-1.183-0.068-1.773c-0.019-0.396-0.046-0.791-0.069-1.186   c-0.031-0.524-0.062-1.047-0.1-1.57c-0.031-0.42-0.067-0.838-0.103-1.257c-0.042-0.498-0.085-0.995-0.133-1.492   c-0.041-0.423-0.087-0.844-0.133-1.265c-0.054-0.496-0.11-0.992-0.171-1.487c-0.05-0.408-0.103-0.815-0.157-1.222   c-0.069-0.517-0.141-1.034-0.218-1.549c-0.055-0.374-0.112-0.747-0.171-1.12c-0.089-0.565-0.184-1.13-0.281-1.693   c-0.055-0.315-0.109-0.63-0.166-0.943c-0.119-0.655-0.246-1.307-0.376-1.959c-0.043-0.216-0.085-0.433-0.13-0.648   c-0.169-0.817-0.347-1.632-0.534-2.444c-0.01-0.045-0.02-0.09-0.03-0.135c-4.36-18.872-13.53-36.405-26.868-50.92   c-14.275-15.535-32.39-26.606-52.326-32.273c-0.042-0.012-0.083-0.024-0.125-0.036c-1.646-0.466-3.303-0.895-4.973-1.286   c-0.171-0.04-0.341-0.082-0.512-0.122c-2.592-0.595-5.21-1.1-7.852-1.512c-0.49-0.076-0.982-0.145-1.473-0.215   c-0.696-0.099-1.388-0.218-2.088-0.305l0-68.973h352.059v223.09H231.04z" /><path fill="#37cfee" d="M185.225,124.736c8.491,0,15.399-6.908,15.399-15.398c0-8.459-6.908-15.341-15.399-15.341   c-8.459,0-15.341,6.882-15.341,15.341C169.884,117.828,176.766,124.736,185.225,124.736z M185.225,101.997   c4.08,0,7.399,3.293,7.399,7.341c0,4.079-3.319,7.398-7.399,7.398c-4.048,0-7.341-3.319-7.341-7.398   C177.884,105.222,181.108,101.997,185.225,101.997z" /><path fill="#37cfee" d="M261.857,124.736c8.494,0,15.405-6.908,15.405-15.398c0-8.459-6.911-15.341-15.405-15.341   c-8.491,0-15.399,6.882-15.399,15.341C246.458,117.828,253.366,124.736,261.857,124.736z M261.857,101.997   c4.083,0,7.405,3.293,7.405,7.341c0,4.079-3.322,7.398-7.405,7.398c-4.08,0-7.399-3.319-7.399-7.398   C254.458,105.29,257.777,101.997,261.857,101.997z" /><path fill="#37cfee" d="M338.496,124.736c8.456,0,15.335-6.908,15.335-15.398c0-8.459-6.879-15.341-15.335-15.341   c-8.494,0-15.405,6.882-15.405,15.341C323.091,117.828,330.002,124.736,338.496,124.736z M338.496,101.997   c4.113,0,7.335,3.225,7.335,7.341c0,4.079-3.29,7.398-7.335,7.398c-4.083,0-7.405-3.319-7.405-7.398   C331.091,105.29,334.413,101.997,338.496,101.997z" /><path fill="#37cfee" d="M419.925,194.432H259.551c-2.209,0-4,1.791-4,4s1.791,4,4,4h160.374c2.209,0,4-1.791,4-4S422.134,194.432,419.925,194.432z   " /><path fill="#37cfee" d="M419.925,261.972H272.699c-2.209,0-4,1.791-4,4s1.791,4,4,4h147.226c2.209,0,4-1.791,4-4S422.134,261.972,419.925,261.972z   " /><path fill="#37cfee" d="M419.925,329.448H319.612c-2.209,0-4,1.791-4,4s1.791,4,4,4h100.313c2.209,0,4-1.791,4-4S422.134,329.448,419.925,329.448z   " /></g></svg>
                                    <h3 className="text-center text-xl px-4 text-white font-bold century">Site Vitrine</h3>
                                </div>
                                <hr />
                                <p className="text-sm px-2 text-white text-center"><span className="font-bold">Il est idéal pour <strong>dynamiser votre <br />communication</strong> online.</span><br /> 
                                    <ul className="text-bold text-center py-2">
                                        <li className="pt2 pb-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Webdesign sur-mesure</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Responsive design</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Contenus personnalisés</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Navigation sécurisée</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Conformité RGPD</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Maintenance technique</div>
                                        </li>

                                    </ul>
                                    <br />Ce type de création permet aux TPE/PME de faire part de leur activité en mettant en avant leurs prestations et ainsi d'acquérir de <strong>nouveaux clients</strong> près de chez eux.</p>
                                {/* <a href="#site-vitrine" className="text-center text-base hover:text-bleu font-bold text-white"><span className="text-bleu font-bold">+</span> En savoir plus</a> */}
                                <div className="w-2/3 mx-auto block">
                                    {/*<ButtonPage url="/creation-site-internet-vitrine/" text="SÉLECTIONNER" color="bleu" />*/}
                                    <RoundButton url="/creation-site-internet-vitrine/" color="bleu" colortext="black" text="Site internet vitrine" />
                                </div>
                            </div>
                            <div className="blocliens w-full lg:w-1/2 xl:w-6/12 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{ border: '2px solid #ffffff' }}>
                                <div className="flex items-center justify-center flex-col lg:flex-row">
                                <svg width="30px" class="block" viewBox="0 0 32 40"><g><path fill="#37cfee" d="M12.7,25.8C12.7,25.8,12.7,25.8,12.7,25.8c-1.1-0.2-2,0.6-2.1,2c-0.1,1.3,0.8,2.1,1.9,2.2c1,0,2-0.7,2-2   C14.4,26.8,13.7,25.9,12.7,25.8z M12.6,29c-0.5,0-1-0.1-1.2-0.8c-0.2-0.8,0.4-1.5,1.1-1.3c0,0,0,0,0,0c0,0,0.1,0,0.1,0   c0.5,0,0.8,0.5,0.9,1C13.7,28.5,13.2,28.9,12.6,29z"></path><path fill="#37cfee" d="M25.2,25.7c-1-0.1-1.9,0.9-1.8,2.1c0,0.7,0.3,1.4,0.7,1.8c0.4,0.3,0.9,0.3,1.3,0.4c1,0.1,1.6-1.3,1.4-2.3   C26.6,26.5,26.2,25.8,25.2,25.7z M25.4,28.9c-0.6,0-1.1-0.1-1.2-1c-0.1-0.8,0.3-1.3,1-1.2c0.5,0,0.6,0.2,0.8,0.8   C26,28.1,26,29,25.4,28.9z"></path><path fill="#37cfee" d="M28.6,8.7c-2.6-0.6-5.4-0.5-8-0.7c-4-0.4-8-0.7-12-0.8C8.5,6.5,8.4,5.9,8.2,5.4c-0.4-1-1.2-1.2-2.1-1.6   c0-0.4-0.1-0.7-0.4-0.9c-0.5-0.3-1-0.5-1.5-0.7C3.5,2,2,1.6,2,3c0,1.1,1.2,1.5,1.9,1.8c0.6,0.2,1.4,0.5,1.9,0   c0.5,0.2,1,0.3,1.4,0.8c0.5,0.6,0.5,1.4,0.6,2.2c0.3,1.7,0.7,3.4,1.1,5c0.6,2.8,1.3,5.6,1.9,8.4c-0.7,0.3-1.2,1-1.2,2   c0,1.5,1.3,1.9,2.3,1.9c4.9,0.1,9.8,0,14.6,0.1c0.6,0,0.6-1,0-1c-2.9,0-5.8,0-8.7,0c-1.5,0-3.1,0-4.6,0c-0.6,0-2.2,0.3-2.6-0.4   c-0.4-0.7,0.1-1.6,0.7-1.6c4.2,0,8.3,0,12.5,0c1,0,2.8,0.2,3.5-0.9c0.3-0.5,0.4-1.2,0.5-1.7c0.3-1.2,0.6-2.3,0.9-3.5   c0.5-1.8,1.2-3.7,1.3-5.6C30.1,9.4,29.6,8.9,28.6,8.7z M4,4C3.7,3.9,2.9,3.6,2.7,3.3C2.6,3,2.9,2.8,3,2.7c0.1,0,0.2,0,0.3,0   c0.3,0.1,0.6,0.2,0.8,0.3C4.5,3.2,4.8,3.3,5,3.5c0.3,0.2,0.5,0.2,0.4,0.6C5.3,4.6,4.2,4.1,4,4z M29.1,10.1c0.2,0.6-0.3,2-0.4,2.6   c0,0.2-0.1,0.3-0.1,0.5c-1.2-0.1-2.4-0.2-3.6-0.3c0.2-1.2,0.5-2.3,0.7-3.5C26.9,9.4,28.8,9.4,29.1,10.1z M27.7,16.3   c-0.1,0.2-0.1,0.5-0.2,0.7c-1.1-0.1-2.2-0.1-3.3-0.1c0.2-1.1,0.4-2.2,0.6-3.4c1.2,0.1,2.4,0.2,3.6,0.3   C28.2,14.7,27.9,15.5,27.7,16.3z M20.7,21.2c0.1-1.2,0.1-2.4,0.2-3.6c0.9,0,1.7,0.1,2.6,0.1c-0.2,1.2-0.4,2.4-0.6,3.5   C22.1,21.2,21.4,21.2,20.7,21.2z M20.9,16.8c0.1-1.2,0.1-2.4,0.2-3.6c1,0.1,2,0.2,3,0.3c-0.2,1.1-0.4,2.3-0.6,3.4   C22.7,16.9,21.8,16.9,20.9,16.8z M11.6,21.1c-0.2-1.3-0.5-2.6-0.8-3.9c0.8,0,1.7,0.1,2.5,0.1c0.2,1.3,0.5,2.5,0.8,3.8   C13.2,21.2,12.4,21.2,11.6,21.1z M9.6,12.1c0.9,0.1,1.9,0.2,2.8,0.3c0.2,1.4,0.4,2.8,0.7,4.2c-0.8,0-1.7-0.1-2.5-0.1   C10.3,15,9.9,13.6,9.6,12.1z M14.7,21.2c-0.3-1.3-0.5-2.5-0.8-3.8c0.9,0,1.8,0.1,2.7,0.1c0.1,1.2,0.1,2.5,0.2,3.7   C16.1,21.2,15.4,21.2,14.7,21.2C14.7,21.2,14.7,21.2,14.7,21.2z M13.8,16.6c-0.2-1.4-0.5-2.8-0.7-4.2c1.1,0.1,2.2,0.2,3.3,0.3   c0.1,1.3,0.2,2.6,0.2,3.9C15.7,16.7,14.7,16.6,13.8,16.6z M13,11.7c-0.2-1.1-0.4-2.2-0.6-3.3c1.2,0.1,2.5,0.2,3.7,0.3   c0.1,1.1,0.1,2.2,0.2,3.4C15.2,11.9,14.1,11.8,13,11.7z M17,12.9c1.2,0.1,2.3,0.2,3.5,0.3c-0.1,1.2-0.2,2.4-0.2,3.6   c-1,0-2-0.1-3-0.1C17.2,15.4,17.1,14.1,17,12.9z M25,9.4c-0.3,1.1-0.5,2.3-0.7,3.4c-1-0.1-2.1-0.2-3.1-0.3c0.1-1.1,0.2-2.3,0.3-3.4   C22.6,9.2,23.8,9.3,25,9.4C24.9,9.4,25,9.4,25,9.4z M20.8,9c-0.1,1.1-0.2,2.3-0.3,3.4c-1.2-0.1-2.4-0.2-3.6-0.4   c-0.1-1.1-0.1-2.3-0.2-3.4c1.2,0.1,2.4,0.2,3.5,0.3C20.4,9,20.6,9,20.8,9z M8.8,8.2c1,0,1.9,0.1,2.9,0.1c0.2,1.1,0.4,2.2,0.6,3.3   c-1-0.1-1.9-0.2-2.9-0.3c-0.1-0.2-0.1-0.5-0.2-0.7C9.1,9.9,9,9,8.8,8.2z M17.5,21.2c-0.1-1.2-0.1-2.5-0.2-3.7c1,0,1.9,0.1,2.9,0.1   c-0.1,1.2-0.1,2.4-0.2,3.6C19.2,21.2,18.3,21.2,17.5,21.2z M26.8,19.6c-0.4,1.6-1.2,1.5-2.5,1.6c-0.3,0-0.5,0-0.8,0   c0.2-1.2,0.4-2.3,0.6-3.5c1.1,0,2.1,0.1,3.2,0.1C27.2,18.4,27,19,26.8,19.6z"></path><path fill="#37cfee" d="M9.8,27.1c0.2-0.5-0.4-0.8-0.6-0.4c-0.4,1-0.2,2.1,0.3,2.9c0.3,0.4,0.7-0.2,0.5-0.5C9.6,28.5,9.5,27.7,9.8,27.1z"></path><path fill="#37cfee" d="M8.5,27.7c0-0.2-0.2-0.4-0.3-0.4c-0.2,0-0.3,0.2-0.3,0.4c0,0.4,0,0.8,0.2,1.1c0.2,0.4,0.8,0,0.6-0.4   C8.5,28.2,8.5,27.9,8.5,27.7z"></path></g></svg>
                                <h3 className="text-center text-white text-xl px-4 font-bold century">E-commerce</h3>
                                </div>
                                <hr />
                                <p className="text-sm px-4 text-white text-center"><span className="font-bold">La <strong>boutique e-commerce</strong> est idéale pour développer la <strong>vente en ligne</strong> pour sa société.</span><br />
                                    <ul className="text-bold text-center py-2">
                                        <li className="pt-2 pb-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Webdesign sur-mesure</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Fiches produits</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Gestion des stocks et ventes</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Navigation sécurisée</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Conformité RGPD</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Back-office</div>
                                        </li>

                                    </ul>
                                    <br />La boutique <strong>E-commerce</strong> s’adresse aux commerçants et boutiques qui souhaitent <strong>développer leur chiffre d’affaire en ciblant une toute nouvelle clientèle</strong>.</p>
                                {/* <a href="#site-ecommerce" className="text-center hover:text-bleu font-bold text-white text-base"><span className="text-bleu font-bold">+</span> En savoir plus</a> */}
                                <div className="w-2/3 mx-auto block">
                                    {/*<ButtonPage url="/creer-une-boutique-en-ligne/" text="SÉLECTIONNER" color="bleu" />*/}
                                    <RoundButton url="/creer-une-boutique-en-ligne/" color="bleu" colortext="black" text="Boutique en ligne" />
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col justify-center md:flex-row w-full mx-auto py-0 mt-2 ">
                            <div className="blocliens w-full lg:w-1/2 xl:w-6/12 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{ border: '2px solid #ffffff' }}>
                            <div className="flex items-center justify-center flex-col lg:flex-row">
                                <svg width="30px" class="block" viewBox="0 0 100 125"><path fill="#37cfee" d="M10,20v60h80V20H10z M89,79H11V31h78V79z M89,30H11v-9h78V30z"></path><g><polygon fill="#37cfee" points="17,28.031 14,25.516 17,23  "></polygon></g><g><polygon fill="#37cfee" points="20,23 23,25.516 20,28.031  "></polygon></g><path fill="#37cfee" d="M15,35v18h26V35H15z M40,36v15.356c-1.491-1.694-5.104-5.628-6.485-5.628c-0.791,0-1.56,0.598-2.374,1.231  c-0.897,0.698-1.826,1.42-2.792,1.42c-0.703,0-1.765-2.476-2.467-4.115c-1.086-2.534-2.023-4.722-3.387-4.722  c-1.948,0-5.014,7.201-6.495,11.002V36H40z M39.233,52H16.515c2.351-6.245,5.064-11.458,5.98-11.458  c0.704,0,1.766,2.477,2.468,4.116c1.086,2.533,2.023,4.721,3.386,4.721c1.309,0,2.423-0.867,3.406-1.631  c0.645-0.502,1.312-1.021,1.76-1.021C34.177,46.734,36.933,49.393,39.233,52z M39.986,52L40,51.988V52H39.986z"></path><g><path fill="#37cfee" d="M33,44.479c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5S34.379,44.479,33,44.479z M33,40.479   c-0.827,0-1.5,0.673-1.5,1.5s0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S33.827,40.479,33,40.479z"></path></g><path fill="#37cfee" d="M15,57v18h26V57H15z M40,58v15.356c-1.491-1.694-5.104-5.628-6.485-5.628c-0.791,0-1.56,0.598-2.374,1.231  c-0.897,0.698-1.826,1.42-2.792,1.42c-0.703,0-1.765-2.476-2.467-4.115c-1.086-2.534-2.023-4.722-3.387-4.722  c-1.948,0-5.014,7.201-6.495,11.002V58H40z M39.233,74H16.515c2.351-6.245,5.064-11.458,5.98-11.458  c0.704,0,1.766,2.477,2.468,4.116c1.086,2.533,2.023,4.721,3.386,4.721c1.309,0,2.423-0.867,3.406-1.631  c0.645-0.502,1.312-1.021,1.76-1.021C34.177,68.734,36.933,71.393,39.233,74z M39.986,74L40,73.988V74H39.986z"></path><g><path fill="#37cfee" d="M33,66.479c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5S34.379,66.479,33,66.479z M33,62.479   c-0.827,0-1.5,0.673-1.5,1.5s0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S33.827,62.479,33,62.479z"></path></g><g><rect fill="#37cfee" x="45" y="39" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="48" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="42" width="40" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="45" width="30" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="61" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="70" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="64" width="40" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="67" width="30" height="1"></rect></g></svg>
                                <h3 className="text-center text-white text-xl px-4 font-bold century">Site sur-mesure</h3>
                            </div>
                                <hr />
                                <p className="text-sm px-4 text-white text-center"><span className="font-bold">Pour vos besoins les plus spécifiques : module de réservation, simulateur, configurateur, CRM, etc.</span> <br />
                                    <ul className="text-bold text-center py-2">
                                        <li className="pt-2 pb-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Webdesign sur-mesure</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Solutions API</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Modules spécifiques</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Navigation sécurisée</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Conformité RGPD</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Maintenance technique</div>
                                        </li>

                                    </ul>
                                    <br />La solution personnalisée vous permet d’obtenir un outil de communication et de gestion parfaitement adapté à vos besoins.</p>
                                {/* <a href="#site-catalogue" className="text-center hover:text-bleu font-bold text-white text-base"><span className="text-bleu font-bold">+</span> En savoir plus</a> */}
                                <div className="w-2/3 mx-auto block">
                                    {/*<ButtonPage url="/creation-site-internet-catalogue/" text="SÉLECTIONNER" color="bleu" />*/}
                                    <RoundButton url="/creation-site-internet-sur-mesure/" color="bleu" colortext="black" text="Site internet sur-mesure" />
                                </div>
                            </div>
                            <div className="blocliens w-full lg:w-1/2 xl:w-6/12 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{ border: '2px solid #ffffff' }}>
                            <div className="flex items-center justify-center flex-col lg:flex-row">
                                <svg width="30px" class="block" viewBox="0 0 280 350" x="0px" y="0px"><defs></defs><g><path fill="#37cfee" class="fil0" d="M84.998 219.434c-0.016,-0.076 -0.03,-0.153 -0.042,-0.23l-0.018 -0.098c-0.397,-2.118 0.634,-4.173 2.412,-5.174l40.349 -41.05 -24.108 -24.84 -40.292 40.292c-0.77,2.316 -3.162,3.75 -5.618,3.261l-0.384 -0.074c-0.112,-0.017 -0.223,-0.037 -0.334,-0.061 -5.385,-0.96 -10.952,-0.645 -16.214,0.946 -5.289,1.598 -10.275,4.492 -14.461,8.678 -4.124,4.124 -6.992,9.014 -8.604,14.199 -0.62,1.992 -1.056,4.029 -1.309,6.082l15.097 -15.097 0.01 0.01c1.329,-1.327 3.365,-1.825 5.229,-1.104l23.4 9.044c1.337,0.471 2.459,1.515 2.98,2.952l8.104 22.322c0.815,1.808 0.481,4.008 -1.005,5.494l-15.097 15.097c2.054,-0.254 4.09,-0.69 6.082,-1.309 5.185,-1.612 10.075,-4.48 14.199,-8.604 4.156,-4.156 7.036,-9.08 8.64,-14.293 1.639,-5.327 1.967,-10.977 0.984,-16.443zm128.991 -18.803l-142.787 -147.114 -13.131 12.77 142.788 147.114 13.13 -12.77zm-138.498 -151.285l142.787 147.114 9.456 -9.196 -83.481 -86.016c-0.149,-0.118 -0.293,-0.246 -0.431,-0.383 -0.174,-0.175 -0.332,-0.358 -0.475,-0.55l-58.396 -60.17 -9.46 9.201zm121.078 168.226l-142.787 -147.114 -8.823 8.581 142.783 147.119 8.827 -8.586zm38.45 33.987l16.736 -16.248 -20.677 -42.935 -38.336 37.267 42.277 21.916zm23.156 -16.7l15.282 36.651c0.634,1.528 -0.09,3.28 -1.617,3.914 -0.868,0.36 -1.808,0.282 -2.575,-0.133l-34.86 -17.319c-0.069,-0.03 -0.137,-0.062 -0.204,-0.096l-47.891 -24.826c-0.331,-0.17 -0.617,-0.394 -0.852,-0.655l-50.933 -52.479 -39.513 40.199c0.774,6.226 0.229,12.591 -1.632,18.641 -2.073,6.735 -5.76,13.062 -11.059,18.361 -5.272,5.272 -11.551,8.946 -18.229,11.023 -6.909,2.147 -14.246,2.57 -21.336,1.267 -2.66,-0.487 -4.422,-3.039 -3.935,-5.699 0.187,-1.017 0.674,-1.902 1.355,-2.58l-0.011 -0.011 20.877 -20.878 -6.403 -17.636 -18.469 -7.139 -20.829 20.829c-1.919,1.919 -5.029,1.919 -6.948,0 -0.836,-0.836 -1.308,-1.901 -1.415,-2.993 -1.213,-6.965 -0.767,-14.156 1.34,-20.934 2.077,-6.679 5.751,-12.958 11.023,-18.229 5.367,-5.368 11.769,-9.08 18.567,-11.135 5.974,-1.806 12.252,-2.33 18.401,-1.571l40.439 -40.44 -58.161 -59.927 -0.049 -0.053 -0.044 -0.043 -18.217 -18.73c-3.419,-3.523 -5.087,-8.117 -5.021,-12.682 0.066,-4.576 1.866,-9.125 5.383,-12.546l22.99 -22.311c3.527,-3.423 8.131,-5.094 12.706,-5.028 4.585,0.066 9.144,1.869 12.57,5.39l18.205 18.718 0.027 0.029 0.02 0.019 57.504 59.251 38.738 -38.737c-0.8,-6.487 -0.17,-13.122 1.891,-19.394 2.116,-6.439 5.721,-12.481 10.813,-17.573 5.271,-5.271 11.551,-8.945 18.23,-11.022 6.777,-2.108 13.968,-2.554 20.933,-1.34 1.093,0.107 2.157,0.578 2.993,1.415 1.919,1.918 1.919,5.029 0,6.947l-20.828 20.829 7.139 18.47 17.636 6.403 20.877 -20.878 0.011 0.011c0.678,-0.68 1.563,-1.168 2.58,-1.354 2.66,-0.488 5.212,1.274 5.7,3.934 1.302,7.09 0.879,14.428 -1.268,21.336 -2.077,6.679 -5.751,12.958 -11.023,18.229 -5.543,5.544 -12.194,9.321 -19.249,11.332 -6.397,1.823 -13.124,2.186 -19.655,1.088l-38.147 38.809 52.075 53.656 0.01 0.011c0.231,0.237 0.414,0.503 0.55,0.785l23.361 48.506c0.055,0.103 0.104,0.21 0.147,0.318zm-17.484 19.553l24.152 11.999 -10.525 -25.246 -13.627 13.247zm-89.186 -154.283l23.701 24.421 39.649 -40.337c1.156,-1.317 2.981,-1.972 4.806,-1.546 5.753,1.343 11.786,1.202 17.486,-0.423 5.482,-1.562 10.66,-4.508 14.989,-8.837 4.124,-4.124 6.992,-9.014 8.604,-14.199 0.62,-1.992 1.056,-4.028 1.309,-6.081l-15.096 15.097c-1.486,1.485 -3.686,1.82 -5.494,1.005l-22.323 -8.105c-1.436,-0.52 -2.481,-1.643 -2.952,-2.98l-9.044 -23.399c-0.721,-1.865 -0.223,-3.9 1.105,-5.229l-0.011 -0.011 15.097 -15.096c-2.053,0.253 -4.089,0.689 -6.081,1.309 -5.186,1.612 -10.076,4.48 -14.2,8.604 -3.986,3.986 -6.797,8.68 -8.433,13.658 -1.707,5.196 -2.155,10.722 -1.344,16.099 0.027,0.177 0.043,0.354 0.051,0.529 0.518,1.684 0.111,3.591 -1.221,4.923l-40.598 40.598zm-110.806 -25.475l40.034 -38.851 -16.117 -16.57c-2.279,-2.343 -5.308,-3.542 -8.351,-3.585 -3.054,-0.044 -6.121,1.066 -8.465,3.34l-22.99 22.311c-2.337,2.273 -3.534,5.293 -3.578,8.327 -0.044,3.044 1.064,6.102 3.333,8.44l16.134 16.588z"></path></g></svg>
                                <h3 className="text-center text-white text-xl px-4 font-bold century">Refonte site internet</h3>
                            </div>
                                <hr />
                                <p className="text-sm px-4 text-white text-center"><span className="font-bold">Le projet de refonte de site internet est idéal pour déployer une nouvelle stratégie webmarketing.</span><br />
                                    <ul className="text-bold text-center py-2">
                                        <li className="pt-2 pb-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Webdesign sur-mesure</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Responsive design</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Arborescence SEO</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Navigation sécurisée</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Conformité RGPD</div>
                                        </li>
                                        <li className="py-0 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Réécriture d’URL</div>
                                        </li>

                                    </ul>
                                    <br />La <strong>refonte d’un site internet</strong> permet de redéfinir les contours du site en adéquation avec ses nouveaux objectifs, en conservant le capital acquis sur le site web.</p>
                                <div className="w-2/3 mx-auto block">

                                    {/*<ButtonPage url="/creation-site-internet-sur-mesure/" text="SÉLECTIONNER" color="bleu" />*/}
                                    <RoundButton url="/creation-site-internet-toulouse/refonte-site-internet/" color="bleu" colortext="black" text="Refonte site internet" />
                                </div>
                            </div>
                        </section>
                    </section>
                </section>  
                <section className="phototext">
                    <section className="bg-white sidetitle mt-16 mb-10">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Linkweb, créateur de site internet à Nice, développe votre solution web clé-en-main</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" style={{marginRight:'40px'}}/>
                                    <br />
                                    <h3 /*data-aos='fade-left'*/ className="text-md text-black century pb-0">Bénéficiez d'un accompagnement sur-mesure en vue du développement de votre solution web clé-en-main avec notre agence de conception de site internet à Nice.</h3>
                                </div>
                        </section>
                    </section>

                    <section className="w-full mb-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Linkweb" />
                        </div>
                        <div className="w-full lg:w-2/3 mx-auto justify-center items-center flex flex-col">
                        <div className="w-full flex flex-col lg:flex-row ">
                            <div className="w-full flex-col md:flex-row flex px-auto century">
                                <div className="blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                    <p>1</p>
                                </div>
                                <div className="w-full px-6 lg:px-6 flex flex-col century justify-center" style={{ maxWidth: '1000px' }}>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>HÉBERGEMENT & NOM DE DOMAINE
                                            </h3>
                                    <p className="w-full text-md century pb-4 text-justify">Bénéficiez d'un <Link to="/creation-site-internet-toulouse/nom-de-domaine/" className="text-bleu hover:text-black font-bold">nom de domaine</Link> personnalisé et d'une solution d'hébergement fiable performante : nom de domaine personnalisé, adresse mail professionnelle, gestion de l'hébergement.
                                    </p>                                
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>2</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col century justify-center">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>UI & UX DESIGN
                                                </h3>
                                    <p className="w-full century pb-4 text-justify">Votre site internet doit proposer une expérience utilisateur et une ergonomie irréprochables en plus d'un design intuitif (<Link to="/creation-site-internet-toulouse/nom-de-domaine/" className="text-bleu hover:text-black font-bold">UI Design</Link>) et adaptable. Nous mettons l'accent sur le responsive design, des parcours de navigation fluides et la réduction du temps de chargement.</p>
                                </div>
                            </div>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row">
                                <div className="w-full my-10 flex flex-col lg:flex-row">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>3</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col century justify-center">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>RÉFÉRENCEMENT NATUREL
                                                </h3>
                                    <p className="century pb-4 text-justify">Les solutions <Link to="/creation-site-internet-toulouse/nom-de-domaine/" className="text-bleu hover:text-black font-bold">webmarketing</Link> menées avec Linkweb tiennent compte des enjeux du SEO (Search Engine Optimization) : architecture SEO friendly, optimisation technique, contenus sur-mesure et acquisition de popularité.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full my-10 flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>4</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center century">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>WEB ANALYTICS
                                                </h3>
                                    <p className="century pb-4 text-justify">Optimisez votre présence en ligne et surpassez vos concurrents grâce au suivi de performances personnalisé : audit de la concurrence, suivi des tendances de trafic et détection des meilleures opportunités pour vous démarquer en ligne.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>
                </section>
                <section className="w-full flex mb-0 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12">
                        <h2 className="text-3xl font-bold md:text-4xl leading-none">Vous souhaitez travailler avec notre agence de création de site internet ?</h2>
                        <br/>
                        <p className="text-md">Linkweb soutient les professionnels souhaitant développer leur <strong>activité sur le Web</strong>.</p>
                    </div>
                    <div className="w-full mx-auto flex flex-col items-center justify-center lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="DEMANDER UN DEVIS" />
                    </div>
                </section>
                    <section className="bg-white sidetitle mt-16">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Découvrez nos réalisations</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                    <br />
                                    <h3 /*data-aos='fade-left'*/ className="text-md text-black century pb-0">Nous travaillons tous les jours avec des entreprises de tous secteurs pour les accompagner dans le développement de leur projet web en vue d’optimiser leur communication Web.</h3>
                                </div>
                        </section>
                    </section>
                <Tiles />
                <div className="w-full flex flex-col lg:flex-row mx-auto justify-center">
                    <button
                            className="link flex  mt-3 items-center century text-black text-lg block justify-center lg:text-xl"
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/agence-de-communication-agen-47-toulouse-31/';
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792">
                            <path
                                d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                            </svg>
                            Découvrir nos réalisations
                        </button>
                        <button
                            className="link flex  mt-3 items-center century text-black text-lg block justify-center lg:text-xl"
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/contact-agence-web-toulouse/';
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792">
                            <path
                                d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                            </svg>
                            Demander un devis gratuit
                        </button>
                </div>
                <section className="bg-white sidetitle mt-16 mb-10">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Vous êtes à la recherche d’une agence de création de site internet à Nice ?</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                    <br />
                                    <h3 /*data-aos='fade-left'*/ className="text-md text-black century pb-0">Nos clients sont satisfaits de nos services.</h3>
                                </div>
                        </section>
                    <section className="flex flex-col md:flex-row flex-wrap justify-center">
                            <div className="w-full sm:w-1/2 lg:w-1/4 mx-0 md:mx-3 border-bleu border-solid border-2 px-12 century bg-bleu text-black py-10">
                                        <div className="flex flex-row">
                                            <img width="50px" height="50px" src={ludikstyle} alt="Avis Google" style={{height:'100%'}}/>
                                            <svg className="-my-6" width="100px" viewBox="0 0 100 125">
                                                <path fill="#000000" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                                <path fill="#000000" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                                <path fill="#000000" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                                <path fill="#000000" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                                <path fill="#000000" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                            </svg>
                                        </div>
                                <h4>LUDIKSTYL</h4>
                                <br/>
                                <p>
                                    Une équipe à l'écoute et très réactive. En collaboration avec <strong>Linkweb</strong> depuis bientôt 8 ans. Je recommande fortement pour leur dynamisme et leur gentillesse. Que cela dure encore longtemps. 😉
                                </p>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/4 mx-0 md:mx-3 border-bleu border-solid border-2 px-12 century bg-bleu text-black py-10">
                                        <div className="flex flex-row">
                                            <img width="50px" height="50px" src={contis} alt="Avis Google" style={{height:'100%'}}/>
                                            <svg className="-my-6" width="100px" viewBox="0 0 100 125">
                                                <path fill="#000000" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                                <path fill="#000000" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                                <path fill="#000000" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                                <path fill="#000000" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                                <path fill="#000000" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                            </svg>
                                        </div>
                                <h4>CONTIS ÉQUITATION</h4>
                                <br/>
                                <p>
                                    Très bonne équipe sérieuse qui est à l'écoute de nos attentes.
                                    <br/><br/>
                                    Le suivi est super, ils ne font pas QUE vous <strong>créer un site web</strong>, ils conseillent, donnent leurs idées, font des recherches et des créations pour vous et tout ça avec rapidité !
                                    <br/><br/>
                                    Je recommande cette entreprise qui m'a apporté une bonne partie de ma clientèle.
                                </p>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/4 mx-0 md:mx-3 border-bleu border-solid border-2 px-12 century bg-bleu text-black py-10">
                                        <div className="flex flex-row">
                                            <img width="50px" height="50px" src={tgcm} alt="Avis Google" style={{height:'100%'}}/>
                                            <svg className="-my-6" width="100px" viewBox="0 0 100 125">
                                                <path fill="#000000" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                                <path fill="#000000" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                                <path fill="#000000" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                                <path fill="#000000" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                                <path fill="#000000" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                            </svg>
                                        </div>
                                <h4>TGCM</h4>
                                <br/>
                                <p>
                                    L'équipe <strong>Linkweb</strong> répond toujours à l'attente de nos demandes et fait vivre le site de façon très dynamique. Par l'étude des visites, des pages vues, de la durée des sessions, Linkweb applique des modifications pour améliorer les statistiques.
                                    <br/><br/>
                                    Depuis le début de notre collaboration, en 2015, nous trouvons des interlocuteurs à notre écoute, compétents et, cerise sur le gâteau, très sympathiques. Cette culture d'entreprise rejaillit de façon positive sur la qualité du travail. Rejoignez les.
                                </p>
                            </div>
                        </section>
                    </section>                
                    <section className="max-w-6xl mx-auto flex align-center justify-center text-center mb-4">
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
                <section className="w-full flex my-16 flex-col items-center lg:flex-row text-white bg-black century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12">
                        <h2 className="text-3xl font-bold md:text-4xl leading-none">Vous avez un projet de site web à Nice ? Obtenez votre estimation gratuite !</h2>
                        <br/>
                        <p className="text-md">Nous réalisons votre devis personnalisé pour la création de votre site internet à Nice. Nous devons comprendre vos attentes afin de concevoir le site qui vous correspond. Vous souhaitez sauter le pas et obtenir une estimation gratuite ? Contactez-nous par téléphone ou demandez à être recontacté via le formulaire de contact de notre site web.</p>
                    </div>
                    <div className="w-full mx-auto flex flex-col items-center justify-center lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <RoundButton url="tel:0533950030" color="bleu" colortext="white" text="05 33 95 00 30" />
                        <RoundButton url="/contact-agence-web-toulouse/" color="bleu" colortext="white" text="Être rappelé" />
                    </div>
                </section>
                <section className="bg-white sidetitle mt-0 lg:mt-16">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Création de site web à Nice avec Linkweb : tout ce qu’il faut connaître</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                </div>
                        </section>
                    </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-10">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="COMMENT CRÉER UN SITE INTERNET AVEC LINKWEB ?">
                                <p>Voici <Link to="/creation-site-internet-toulouse/comment-sont-crees-nos-sites-internet/" className="text-bleu hover:text-black font-bold">comment nous créons nos sites internet</Link> à Nice en plusieurs étapes. Ce travail combine la conception graphique et la création de contenus pour le Web. C’est pourquoi, nos développeurs <Link to="/creation-site-internet-toulouse/front-end/" className="text-bleu hover:text-black font-bold">front-end</Link> et/ou <Link to="/creation-site-internet-toulouse/back-end/" className="text-bleu hover:text-black font-bold">back-end</Link> collaborent avec les webmarketeurs de l’agence.
                                    <br/><br/>
                                    Après avoir déterminé une solution conforme à vos besoins, la première étape consiste à réserver votre <strong className="font-normal">nom de domaine</strong> et à configurer la solution d’hébergement. Ce travail est réalisé par nos experts du <Link to="/creation-site-internet-toulouse/developpement-web/" className="text-bleu hover:text-black font-bold">développement web</Link>. Les contenus de votre futur site web sont ensuite élaborés, puis intégrés sur votre <Link to="/creation-site-internet-toulouse/maquette-site-web/" className="text-bleu hover:text-black font-bold">maquette de site web</Link>. Nos techniciens développent les fonctionnalités demandées avec les technologies web les plus adaptées et créent un webdesign à votre image avec l’intégration de votre <strong className="font-normal">charte graphique</strong> (logo, couleurs, typographies, etc.). Une fois votre projet finalisé, ce dernier vous est présenté pour validation.
                                    <br/><br/>
                                    La <strong className="font-normal">mise en ligne de votre site web</strong> marque le début de la stratégie de référencement. Vos pages sont alors optimisées sur le plan technique, sémantique et de leur popularité.
                                </p>
                            </div>
                            <div label="COMBIEN DE TEMPS EST NÉCESSAIRE POUR CRÉER UN SITE INTERNET ?">
                                <p>La <strong className="font-normal">création d'un site internet</strong> est un processus sur-mesure qui dépend des objectifs et besoins de chaque porteur de projet. Elle implique de nombreuses étapes qui varient selon les caractéristiques du projet. Parmi ces étapes, on peut citer la définition des contenus et des maquettes de site web (UX & UI design), les validations successives, la rédaction des contenus, les ajustements nécessaires, ou encore les contraintes techniques liées à la conception du site (respect du W3C, optimisation mobile first, codage <Link to="/creation-site-internet-toulouse/html-css/" className="text-bleu hover:text-black font-bold">HTML</Link>/CSS, utilisation de <Link to="/creation-site-internet-toulouse/framework/" className="text-bleu hover:text-black font-bold">frameworks</Link>, etc.).
                                    <br/><br/>
                                    La durée de <strong className="font-normal">production d’un site internet</strong> dépend donc de plusieurs facteurs, propres à votre projet, qui nécessitent une adaptation de nos méthodes de production. De plus, faire un site internet requiert une attention particulière aux moindres détails pour garantir une mise en ligne optimale. C’est pourquoi la durée de production est variable en fonction du projet.
                                </p>
                            </div>
                            <div label="POURQUOI CRÉER SON SITE WEB AVEC LINKWEB À NICE ?">
                                <p>
                                    Linkweb privilégie la qualité lors de la <strong className="font-normal">conception de site web</strong> pour ses clients. Par qualité, il faut comprendre que les sites web réalisés par notre agence sont parfaitement adaptés en termes de responsive design (optimisation pour mobile, tablette, ordinateur), de sécurisation et de SEO (référencement naturel). En effet, le site web est un outil indispensable pour le bon déroulement d’une activité sur le Web. Il permet d’<Link to="/creation-site-internet-toulouse/pourquoi-creer-site-internet/" className="text-bleu hover:text-black font-bold">atteindre des objectifs</Link> de différentes natures, à condition que sa conception soit parfaitement effectuée.
                                    <br/><br/>
                                    De plus, nous possédons l’ensemble des <Link to="/creation-site-internet-toulouse/technologies-web/" className="text-bleu hover:text-black font-bold">technologies web</Link> de la conception de site web pour vous offrir une solution clé-en main :
                                    <br/><br/>
                                    <ul className="list-disc">
                                    <li><strong>langages web</strong> (HTML, CSS, JS, PHP, ReactJs, etc.),</li>
                                    <li><strong>CMS</strong> ou système de gestion de contenu (<strong>Wordpress</strong>, Prestashop, Drupal, etc.),</li>
                                    <li><strong>frameworks</strong> (Bootstrap, Tailwind CSS, Vue JS, Laravel, Symfony, etc.) et</li> 
                                    <li>gestionnaires de bases de données (MySQL, PostgreSQL, etc.).</li>
                                    </ul>
                                    <br/><br/>
                                    En optant pour Linkweb pour la <strong className="font-normal">conception de votre site web à Nice</strong>, vous êtes en mesure de développer la solution web qui vous convient avec une parfaite maîtrise des coûts et des délais.
                                </p>
                            </div>
                            <div label="QUEL EST LE PRIX D’UN SITE INTERNET ?">
                                <p>
                                Avant tout, il faut comprendre que le <strong className="font-normal">prix d’un site internet</strong> dépend de plusieurs critères : la complexité du site, les fonctionnalités voulues, le nombre de pages, le graphisme et bien plus encore. Ainsi, il est impossible de donner un prix exact sans avoir défini les détails de votre projet web.
                                <br/><br/>
                                De même l'envergure de la stratégie à mettre en œuvre sur votre site internet est un élément à considérer. Selon vos objectifs, les actions à réaliser seront plus ou moins importantes.
                                <br/><br/>
                                Si vous souhaitez savoir combien coûte votre futur site internet, l'<strong className="font-normal">agence Linkweb</strong> est en mesure de vous faire un devis personnalisé.
                                </p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="text-center flex flex-col justify-center items-center text-black text-2xl mx-auto lg:mx-0 century mt-6 mb-24" style={{zIndex:'100'}}>
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Retrouvez-nous partout en France</h2>
                    <br/>
                    <hr className="border-solid w-1/6 border-bleu"></hr>
                    <br/>
                    <ul className="flex flex-col md:flex-row">
                        <li><Link to="/creation-site-internet-toulouse/" className="text-bleu hover:text-black font-bold px-4">Toulouse</Link></li>
                        <li><Link to="/creation-de-site-internet-a-agen/" className="text-bleu hover:text-black font-bold px-4">Agen</Link></li>
                    </ul>
                </section>
                <section className="w-full bg-black flex flex-col md:flex-row">
                    <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                    </div>
                    <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Vous souhaitez la création de votre site internet à Nice ?</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Linkweb concrétise votre <strong className="font-normal">projet de création de site internet à Nice</strong> dans le sud de la France, de sa conception à sa mise en œuvre. Notre équipe vous accompagne dans la mise en place technique et dans la définition stratégique et éditoriale  de votre site pour atteindre vos objectifs.</p>
                            <div className="max-w-xs ml-auto mr-auto md:mr-0 md:ml-0 block">
                                {/* <RoundButton url="/creation-de-site-internet-a-agen/" color="darkgrey" text="J'AI UN PROJET À AGEN" /> */}
                                <button
                                            className="font-light roundedButton bg-bleu text-white hover:text-white flex justify-center mt-3 century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 mt-12"
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = '/contact-agence-web-toulouse/';
                                            }}>Demander un devis
                                        </button>
                            </div>
                        </div>

                    </div>
                </section>
                

                {/* <SimpleMap /> */}
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
query lastsThreePostsNice {
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
export default CreationSiteInternetNicePage;




