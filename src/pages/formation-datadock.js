import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Button from "../components/button";
import ButtonBlog from "../components/buttonblog";
import RoundButton from "../components/roundButton";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import Accordion from '../components/accordion';
import RoundButtonPages from "../components/roundButtonPages";
import RoundButtonPagesMail from "../components/roundButtonPagesMail";
import SimpleMap from "../components/simpleMap";
import Partenaires from '../components/partenaires';

import blocBg from "../images/background.jpg";
// import Bg from "../images/background-referencement.jpg";
import Bg from "../images/formation-datadock.jpg";
import imac from "../images/formation-webmarketing.jpg";
// import bgDev from '../images/bg-dev.jpg';
import mac from "../images/datadock-mac.png";
import qualiopi from "../images/qualiopi.jpg";
import skype from "../images/logo-skype.png";
import whatsapp from "../images/logo-whatsapp.png";
import zoom from "../images/logo-zoom.png";
import Datadock from "../images/../images/logo_datadock.png";


import scroll from "../images/motiontest.svg";
import avsmoto from '../images/avsmoto-avis.png';
import casinobarbotan from '../images/casino-barbotan-avis.png';
import contis from '../images/contis-avis.png';
import "../scss/info.scss";
import '../scss/global.scss';

class FormationDatadock extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Formation Datadock - Faites financer votre formation Linkweb"
                    description="Découvrez notre offre de formation. Linkweb est un organisme référencé Datadock : le financement de votre formation assuré par votre organisme de référence."
                    keywords={[`Formation Datadock`, `Formation Datadock Toulouse`, `Formation Datadock Agen`]}
                    url="https://linkweb.fr/formation-datadock/"
                    nom="Formation Datadock"
                    slug="formation-datadock/"
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
                <section className="flex items-center w-full mx-auto pb-0 mt-40 mb-24 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + Bg + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
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
                            <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Notre offre de formation DataDock</h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Notre offre de formation professionnelle qualifiante au sein d’un organisme de formation certifié et référencé Datadock.</h2>
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
                <section className="blocpresta" style={{ background: 'white', marginTop: '0px', minHeight: '50vh' }}>
                    <section className="text-center mt-0 mb-10 lg:mx-0 century">
                        <h2 className="century text-black text-5xl">L’offre de formation Linkweb</h2>
                        <br />
                        <hr className="border-solid w-1/12 border-1 border-bleu"></hr>
                        <br />
                        <img className="mx-auto block" src={Datadock} width="250px" alt="Formation SEO Toulouse" />
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="text-xl text-black century">Découvrez les différentes offres en matière de formation par Linkweb. <br /><span className="font-bold">Nos formations sont accessibles en présentiel, mais aussi à distance.</span></h3>
                        <br />
                        <section className="w-full md:w-1/2 xl:w-1/5 mx-auto flex flex-row px-6 py-6">
                            <div className="w-full md:w-1/3">
                                <img className="svgtransform mx-auto block mb-4 md:mb-0 " src={skype} alt="logo Skype" width="60px" />
                            </div>
                            <div className="w-full md:w-1/3">
                                <img className="svgtransform mx-auto block mb-4 md:mb-0" src={zoom} alt="logo Zoom" width="80px" />
                            </div>
                            <div className="w-full md:w-1/3">
                                <img className="svgtransform mx-auto block mb-4 md:mb-0" src={whatsapp} alt="logo What's App" width="60px" />
                            </div>
                        </section>
                    </section>
                    <section className="flex flex-col xl:flex-row mx-8 lg:mx-24 my-0 items-center lg:justify-center">
                        <section className="flex flex-col justify-center md:flex-row w-full mx-auto py-0 mt-2 ">
                        <div className="blocliens w-full lg:w-1/2 xl:w-1/2 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{ border: '2px solid #000000' }}>
                                <svg width="40px" className="mx-auto block" viewBox="12.938 70.193 487.061 465.68874999999997"><g><path fill="#37cfee" d="M499.811,74.173c-0.011-2.202-1.799-3.98-4-3.98H135.94c-2.209,0-3.999,1.791-3.999,4v70.337   c0,0.003-0.001,0.006-0.001,0.01s0.001,0.006,0.001,0.01v72.281c-1.976-0.103-3.965-0.157-5.967-0.157   c-33.125,0-62.967,14.323-83.661,37.1c-0.173,0.162-0.328,0.34-0.471,0.53c-17.961,20.019-28.905,46.456-28.905,75.405   c0,28.943,10.939,55.375,28.893,75.392c0.146,0.197,0.307,0.38,0.485,0.547c20.693,22.775,50.534,37.096,83.657,37.096   c33.116,0,62.953-14.3,83.655-37.047c0.249-0.224,0.478-0.468,0.664-0.747c6.789-7.592,12.568-16.102,17.127-25.32h268.579   c2.209,0,4-1.791,4-4V112.869L499.811,74.173z M491.83,78.193l0.169,34.695v27.652H139.94l0-62.347H491.83z M230.826,336.737   c-0.027,0.404-0.05,0.809-0.081,1.212c-0.044,0.567-0.098,1.131-0.151,1.695c-0.031,0.331-0.06,0.663-0.094,0.994   c-0.063,0.611-0.136,1.219-0.21,1.827c-0.034,0.278-0.066,0.556-0.101,0.833c-0.084,0.65-0.177,1.297-0.273,1.943   c-0.034,0.227-0.067,0.454-0.102,0.68c-0.107,0.687-0.221,1.371-0.341,2.053c-0.031,0.177-0.062,0.354-0.094,0.531   c-0.132,0.727-0.271,1.451-0.418,2.173c-0.024,0.117-0.048,0.234-0.072,0.35c-0.162,0.783-0.331,1.563-0.511,2.339   c-0.006,0.026-0.012,0.053-0.019,0.079c-3.957,17.051-12.082,32.522-23.237,45.283h-47.846c4.839-19.064,7.468-42.21,7.744-65.022   h65.963c-0.019,0.508-0.035,1.017-0.061,1.525C230.896,335.736,230.859,336.236,230.826,336.737z M46.868,260.688h47.897   c-4.825,19.064-7.445,42.209-7.72,65.021H21.022C21.957,300.876,31.549,278.222,46.868,260.688z M165.02,325.709   c-0.276-22.812-2.904-45.957-7.743-65.021h47.846c15.327,17.534,24.925,40.188,25.86,65.021H165.02z M95.044,325.709   c0.294-25.694,3.406-47.972,7.998-65.021h45.952c4.609,17.05,7.732,39.328,8.028,65.021H95.044z M157.021,333.709   c-0.295,25.694-3.419,47.972-8.028,65.022h-45.952c-4.592-17.05-7.704-39.328-7.998-65.022H157.021z M155.041,252.688   c-3.425-11.13-7.709-20.404-12.812-26.756c21.094,3.287,40.126,12.87,55.117,26.756H155.041z M146.599,252.688h-41.171   c5.853-17.727,13.399-28.014,20.547-28.014C133.149,224.674,140.724,234.96,146.599,252.688z M96.994,252.688H54.64   c14.993-13.896,34.032-23.483,55.133-26.764C104.683,232.276,100.41,241.553,96.994,252.688z M87.045,333.709   c0.275,22.813,2.896,45.958,7.72,65.022H46.869c-15.319-17.535-24.912-40.189-25.847-65.022H87.045z M96.994,406.731   c3.416,11.134,7.689,20.411,12.779,26.763c-21.1-3.281-40.139-12.867-55.132-26.763H96.994z M105.427,406.731h41.171   c-5.875,17.727-13.449,28.013-20.624,28.013C118.826,434.744,111.28,424.458,105.427,406.731z M155.041,406.731h42.304   c-14.99,13.885-34.023,23.468-55.116,26.755C147.332,427.135,151.616,417.861,155.041,406.731z M231.04,371.63   c2.484-6.252,4.388-12.648,5.722-19.156c0.002-0.009,0.004-0.019,0.006-0.029c0.18-0.88,0.35-1.762,0.508-2.646   c0.013-0.072,0.026-0.143,0.038-0.215c0.147-0.825,0.284-1.652,0.412-2.481c0.019-0.122,0.038-0.244,0.057-0.367   c0.118-0.78,0.227-1.561,0.329-2.343c0.022-0.168,0.044-0.335,0.066-0.503c0.093-0.739,0.177-1.48,0.255-2.222   c0.022-0.207,0.045-0.414,0.066-0.621c0.07-0.705,0.132-1.411,0.189-2.118c0.02-0.242,0.042-0.483,0.06-0.725   c0.051-0.683,0.092-1.368,0.131-2.053c0.015-0.261,0.033-0.522,0.046-0.783c0.034-0.69,0.057-1.381,0.079-2.072   c0.008-0.255,0.021-0.509,0.027-0.765c0.023-0.939,0.036-1.88,0.036-2.822c0-0.93-0.013-1.858-0.035-2.786   c-0.008-0.334-0.024-0.665-0.035-0.998c-0.02-0.591-0.039-1.183-0.068-1.773c-0.019-0.396-0.046-0.791-0.069-1.186   c-0.031-0.524-0.062-1.047-0.1-1.57c-0.031-0.42-0.067-0.838-0.103-1.257c-0.042-0.498-0.085-0.995-0.133-1.492   c-0.041-0.423-0.087-0.844-0.133-1.265c-0.054-0.496-0.11-0.992-0.171-1.487c-0.05-0.408-0.103-0.815-0.157-1.222   c-0.069-0.517-0.141-1.034-0.218-1.549c-0.055-0.374-0.112-0.747-0.171-1.12c-0.089-0.565-0.184-1.13-0.281-1.693   c-0.055-0.315-0.109-0.63-0.166-0.943c-0.119-0.655-0.246-1.307-0.376-1.959c-0.043-0.216-0.085-0.433-0.13-0.648   c-0.169-0.817-0.347-1.632-0.534-2.444c-0.01-0.045-0.02-0.09-0.03-0.135c-4.36-18.872-13.53-36.405-26.868-50.92   c-14.275-15.535-32.39-26.606-52.326-32.273c-0.042-0.012-0.083-0.024-0.125-0.036c-1.646-0.466-3.303-0.895-4.973-1.286   c-0.171-0.04-0.341-0.082-0.512-0.122c-2.592-0.595-5.21-1.1-7.852-1.512c-0.49-0.076-0.982-0.145-1.473-0.215   c-0.696-0.099-1.388-0.218-2.088-0.305l0-68.973h352.059v223.09H231.04z" /><path fill="#37cfee" d="M185.225,124.736c8.491,0,15.399-6.908,15.399-15.398c0-8.459-6.908-15.341-15.399-15.341   c-8.459,0-15.341,6.882-15.341,15.341C169.884,117.828,176.766,124.736,185.225,124.736z M185.225,101.997   c4.08,0,7.399,3.293,7.399,7.341c0,4.079-3.319,7.398-7.399,7.398c-4.048,0-7.341-3.319-7.341-7.398   C177.884,105.222,181.108,101.997,185.225,101.997z" /><path fill="#37cfee" d="M261.857,124.736c8.494,0,15.405-6.908,15.405-15.398c0-8.459-6.911-15.341-15.405-15.341   c-8.491,0-15.399,6.882-15.399,15.341C246.458,117.828,253.366,124.736,261.857,124.736z M261.857,101.997   c4.083,0,7.405,3.293,7.405,7.341c0,4.079-3.322,7.398-7.405,7.398c-4.08,0-7.399-3.319-7.399-7.398   C254.458,105.29,257.777,101.997,261.857,101.997z" /><path fill="#37cfee" d="M338.496,124.736c8.456,0,15.335-6.908,15.335-15.398c0-8.459-6.879-15.341-15.335-15.341   c-8.494,0-15.405,6.882-15.405,15.341C323.091,117.828,330.002,124.736,338.496,124.736z M338.496,101.997   c4.113,0,7.335,3.225,7.335,7.341c0,4.079-3.29,7.398-7.335,7.398c-4.083,0-7.405-3.319-7.405-7.398   C331.091,105.29,334.413,101.997,338.496,101.997z" /><path fill="#37cfee" d="M419.925,194.432H259.551c-2.209,0-4,1.791-4,4s1.791,4,4,4h160.374c2.209,0,4-1.791,4-4S422.134,194.432,419.925,194.432z   " /><path fill="#37cfee" d="M419.925,261.972H272.699c-2.209,0-4,1.791-4,4s1.791,4,4,4h147.226c2.209,0,4-1.791,4-4S422.134,261.972,419.925,261.972z   " /><path fill="#37cfee" d="M419.925,329.448H319.612c-2.209,0-4,1.791-4,4s1.791,4,4,4h100.313c2.209,0,4-1.791,4-4S422.134,329.448,419.925,329.448z   " /></g></svg>
                                <h3 className="text-center text-xl px-4 text-black font-bold century">Formation référencement naturel</h3>
                                <hr />
                                <br />
                                <p className="text-sm px-2 text-black text-center"><span className="font-bold">Sortez de l'ombre et dépassez enfin vos concurrents <br />en atteignant les <strong>premières pages de Google</strong>.</span><br />
                                    <br />
                                    <ul className="text-bold text-center py-2">
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Comprendre le fonctionnement de <strong>Google</strong> et de <strong>Bing</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Maîtriser l’optimisation technique de son <strong>site web</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Apprendre à <strong>rédiger du contenu</strong> adapté pour les <strong>moteurs de recherche</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Connaître les outils indispensables pour mener sa stratégie</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Comprendre tout l’intérêt de développer la <strong>popularité de son site internet</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Augmenter le <strong>trafic de son site</strong> et ses ventes grâce au travail de <strong>référencement</strong></div>
                                        </li>

                                    </ul>
                                    <br />Profitez des opportunités de visibilité offertes par Google pour donner à votre entreprise la <strong>visibilité</strong> qu'elle mérite. </p>
                                <br />
                            </div>
                        </section>
                    </section>
                    {/* <section className="flex flex-col xl:flex-row mx-8 lg:mx-24 my-0 items-center lg:justify-center">
                        <section className="flex flex-col justify-center md:flex-row w-full mx-auto py-0 mt-2 ">
                            <div className="blocliens w-full lg:w-1/2 xl:w-1/4 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{ border: '2px solid #000000' }}>
                                <svg width="40px" className="mx-auto block" viewBox="12.938 70.193 487.061 465.68874999999997"><g><path fill="#37cfee" d="M499.811,74.173c-0.011-2.202-1.799-3.98-4-3.98H135.94c-2.209,0-3.999,1.791-3.999,4v70.337   c0,0.003-0.001,0.006-0.001,0.01s0.001,0.006,0.001,0.01v72.281c-1.976-0.103-3.965-0.157-5.967-0.157   c-33.125,0-62.967,14.323-83.661,37.1c-0.173,0.162-0.328,0.34-0.471,0.53c-17.961,20.019-28.905,46.456-28.905,75.405   c0,28.943,10.939,55.375,28.893,75.392c0.146,0.197,0.307,0.38,0.485,0.547c20.693,22.775,50.534,37.096,83.657,37.096   c33.116,0,62.953-14.3,83.655-37.047c0.249-0.224,0.478-0.468,0.664-0.747c6.789-7.592,12.568-16.102,17.127-25.32h268.579   c2.209,0,4-1.791,4-4V112.869L499.811,74.173z M491.83,78.193l0.169,34.695v27.652H139.94l0-62.347H491.83z M230.826,336.737   c-0.027,0.404-0.05,0.809-0.081,1.212c-0.044,0.567-0.098,1.131-0.151,1.695c-0.031,0.331-0.06,0.663-0.094,0.994   c-0.063,0.611-0.136,1.219-0.21,1.827c-0.034,0.278-0.066,0.556-0.101,0.833c-0.084,0.65-0.177,1.297-0.273,1.943   c-0.034,0.227-0.067,0.454-0.102,0.68c-0.107,0.687-0.221,1.371-0.341,2.053c-0.031,0.177-0.062,0.354-0.094,0.531   c-0.132,0.727-0.271,1.451-0.418,2.173c-0.024,0.117-0.048,0.234-0.072,0.35c-0.162,0.783-0.331,1.563-0.511,2.339   c-0.006,0.026-0.012,0.053-0.019,0.079c-3.957,17.051-12.082,32.522-23.237,45.283h-47.846c4.839-19.064,7.468-42.21,7.744-65.022   h65.963c-0.019,0.508-0.035,1.017-0.061,1.525C230.896,335.736,230.859,336.236,230.826,336.737z M46.868,260.688h47.897   c-4.825,19.064-7.445,42.209-7.72,65.021H21.022C21.957,300.876,31.549,278.222,46.868,260.688z M165.02,325.709   c-0.276-22.812-2.904-45.957-7.743-65.021h47.846c15.327,17.534,24.925,40.188,25.86,65.021H165.02z M95.044,325.709   c0.294-25.694,3.406-47.972,7.998-65.021h45.952c4.609,17.05,7.732,39.328,8.028,65.021H95.044z M157.021,333.709   c-0.295,25.694-3.419,47.972-8.028,65.022h-45.952c-4.592-17.05-7.704-39.328-7.998-65.022H157.021z M155.041,252.688   c-3.425-11.13-7.709-20.404-12.812-26.756c21.094,3.287,40.126,12.87,55.117,26.756H155.041z M146.599,252.688h-41.171   c5.853-17.727,13.399-28.014,20.547-28.014C133.149,224.674,140.724,234.96,146.599,252.688z M96.994,252.688H54.64   c14.993-13.896,34.032-23.483,55.133-26.764C104.683,232.276,100.41,241.553,96.994,252.688z M87.045,333.709   c0.275,22.813,2.896,45.958,7.72,65.022H46.869c-15.319-17.535-24.912-40.189-25.847-65.022H87.045z M96.994,406.731   c3.416,11.134,7.689,20.411,12.779,26.763c-21.1-3.281-40.139-12.867-55.132-26.763H96.994z M105.427,406.731h41.171   c-5.875,17.727-13.449,28.013-20.624,28.013C118.826,434.744,111.28,424.458,105.427,406.731z M155.041,406.731h42.304   c-14.99,13.885-34.023,23.468-55.116,26.755C147.332,427.135,151.616,417.861,155.041,406.731z M231.04,371.63   c2.484-6.252,4.388-12.648,5.722-19.156c0.002-0.009,0.004-0.019,0.006-0.029c0.18-0.88,0.35-1.762,0.508-2.646   c0.013-0.072,0.026-0.143,0.038-0.215c0.147-0.825,0.284-1.652,0.412-2.481c0.019-0.122,0.038-0.244,0.057-0.367   c0.118-0.78,0.227-1.561,0.329-2.343c0.022-0.168,0.044-0.335,0.066-0.503c0.093-0.739,0.177-1.48,0.255-2.222   c0.022-0.207,0.045-0.414,0.066-0.621c0.07-0.705,0.132-1.411,0.189-2.118c0.02-0.242,0.042-0.483,0.06-0.725   c0.051-0.683,0.092-1.368,0.131-2.053c0.015-0.261,0.033-0.522,0.046-0.783c0.034-0.69,0.057-1.381,0.079-2.072   c0.008-0.255,0.021-0.509,0.027-0.765c0.023-0.939,0.036-1.88,0.036-2.822c0-0.93-0.013-1.858-0.035-2.786   c-0.008-0.334-0.024-0.665-0.035-0.998c-0.02-0.591-0.039-1.183-0.068-1.773c-0.019-0.396-0.046-0.791-0.069-1.186   c-0.031-0.524-0.062-1.047-0.1-1.57c-0.031-0.42-0.067-0.838-0.103-1.257c-0.042-0.498-0.085-0.995-0.133-1.492   c-0.041-0.423-0.087-0.844-0.133-1.265c-0.054-0.496-0.11-0.992-0.171-1.487c-0.05-0.408-0.103-0.815-0.157-1.222   c-0.069-0.517-0.141-1.034-0.218-1.549c-0.055-0.374-0.112-0.747-0.171-1.12c-0.089-0.565-0.184-1.13-0.281-1.693   c-0.055-0.315-0.109-0.63-0.166-0.943c-0.119-0.655-0.246-1.307-0.376-1.959c-0.043-0.216-0.085-0.433-0.13-0.648   c-0.169-0.817-0.347-1.632-0.534-2.444c-0.01-0.045-0.02-0.09-0.03-0.135c-4.36-18.872-13.53-36.405-26.868-50.92   c-14.275-15.535-32.39-26.606-52.326-32.273c-0.042-0.012-0.083-0.024-0.125-0.036c-1.646-0.466-3.303-0.895-4.973-1.286   c-0.171-0.04-0.341-0.082-0.512-0.122c-2.592-0.595-5.21-1.1-7.852-1.512c-0.49-0.076-0.982-0.145-1.473-0.215   c-0.696-0.099-1.388-0.218-2.088-0.305l0-68.973h352.059v223.09H231.04z" /><path fill="#37cfee" d="M185.225,124.736c8.491,0,15.399-6.908,15.399-15.398c0-8.459-6.908-15.341-15.399-15.341   c-8.459,0-15.341,6.882-15.341,15.341C169.884,117.828,176.766,124.736,185.225,124.736z M185.225,101.997   c4.08,0,7.399,3.293,7.399,7.341c0,4.079-3.319,7.398-7.399,7.398c-4.048,0-7.341-3.319-7.341-7.398   C177.884,105.222,181.108,101.997,185.225,101.997z" /><path fill="#37cfee" d="M261.857,124.736c8.494,0,15.405-6.908,15.405-15.398c0-8.459-6.911-15.341-15.405-15.341   c-8.491,0-15.399,6.882-15.399,15.341C246.458,117.828,253.366,124.736,261.857,124.736z M261.857,101.997   c4.083,0,7.405,3.293,7.405,7.341c0,4.079-3.322,7.398-7.405,7.398c-4.08,0-7.399-3.319-7.399-7.398   C254.458,105.29,257.777,101.997,261.857,101.997z" /><path fill="#37cfee" d="M338.496,124.736c8.456,0,15.335-6.908,15.335-15.398c0-8.459-6.879-15.341-15.335-15.341   c-8.494,0-15.405,6.882-15.405,15.341C323.091,117.828,330.002,124.736,338.496,124.736z M338.496,101.997   c4.113,0,7.335,3.225,7.335,7.341c0,4.079-3.29,7.398-7.335,7.398c-4.083,0-7.405-3.319-7.405-7.398   C331.091,105.29,334.413,101.997,338.496,101.997z" /><path fill="#37cfee" d="M419.925,194.432H259.551c-2.209,0-4,1.791-4,4s1.791,4,4,4h160.374c2.209,0,4-1.791,4-4S422.134,194.432,419.925,194.432z   " /><path fill="#37cfee" d="M419.925,261.972H272.699c-2.209,0-4,1.791-4,4s1.791,4,4,4h147.226c2.209,0,4-1.791,4-4S422.134,261.972,419.925,261.972z   " /><path fill="#37cfee" d="M419.925,329.448H319.612c-2.209,0-4,1.791-4,4s1.791,4,4,4h100.313c2.209,0,4-1.791,4-4S422.134,329.448,419.925,329.448z   " /></g></svg>
                                <h3 className="text-center text-xl px-4 text-black font-bold century">Formation référencement naturel</h3>
                                <hr />
                                <br />
                                <p className="text-sm px-2 text-black text-center"><span className="font-bold">Sortez de l'ombre et dépassez enfin vos concurrents <br />en atteignant les <strong>premières pages de Google</strong>.</span><br />
                                    <br />
                                    <ul className="text-bold text-center py-2">
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Comprendre le fonctionnement de <strong>Google</strong> et de <strong>Bing</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Maîtriser l’optimisation technique de son <strong>site web</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Apprendre à <strong>rédiger du contenu</strong> adapté pour les <strong>moteurs de recherche</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Connaître les outils indispensables pour mener sa stratégie</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Comprendre tout l’intérêt de développer la <strong>popularité de son site internet</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Augmenter le <strong>trafic de son site</strong> et ses ventes grâce au travail de <strong>référencement</strong></div>
                                        </li>

                                    </ul>
                                    <br />Profitez des opportunités de visibilité offertes par Google pour donner à votre entreprise la <strong>visibilité</strong> qu'elle mérite. </p>
                                <br />
                                {/*}
                                    <div className="w-2/3 mx-auto block">
                                        <br />
                                        {/*<ButtonPage url="/creation-site-internet-vitrine/" text="SÉLECTIONNER" color="bleu" 
                                        <RoundButton url="/creation-site-internet-vitrine/" color="bleu" colortext="black" text="Je découvre la formation" />
                                    </div>
                            </div>
                            <div className="blocliens w-full lg:w-1/2 xl:w-1/4 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{ border: '2px solid #37cfee' }}>
                                <svg width="40px" class="mx-auto block" viewBox="0 0 32 40"><g><path fill="#37cfee" d="M12.7,25.8C12.7,25.8,12.7,25.8,12.7,25.8c-1.1-0.2-2,0.6-2.1,2c-0.1,1.3,0.8,2.1,1.9,2.2c1,0,2-0.7,2-2   C14.4,26.8,13.7,25.9,12.7,25.8z M12.6,29c-0.5,0-1-0.1-1.2-0.8c-0.2-0.8,0.4-1.5,1.1-1.3c0,0,0,0,0,0c0,0,0.1,0,0.1,0   c0.5,0,0.8,0.5,0.9,1C13.7,28.5,13.2,28.9,12.6,29z"></path><path fill="#37cfee" d="M25.2,25.7c-1-0.1-1.9,0.9-1.8,2.1c0,0.7,0.3,1.4,0.7,1.8c0.4,0.3,0.9,0.3,1.3,0.4c1,0.1,1.6-1.3,1.4-2.3   C26.6,26.5,26.2,25.8,25.2,25.7z M25.4,28.9c-0.6,0-1.1-0.1-1.2-1c-0.1-0.8,0.3-1.3,1-1.2c0.5,0,0.6,0.2,0.8,0.8   C26,28.1,26,29,25.4,28.9z"></path><path fill="#37cfee" d="M28.6,8.7c-2.6-0.6-5.4-0.5-8-0.7c-4-0.4-8-0.7-12-0.8C8.5,6.5,8.4,5.9,8.2,5.4c-0.4-1-1.2-1.2-2.1-1.6   c0-0.4-0.1-0.7-0.4-0.9c-0.5-0.3-1-0.5-1.5-0.7C3.5,2,2,1.6,2,3c0,1.1,1.2,1.5,1.9,1.8c0.6,0.2,1.4,0.5,1.9,0   c0.5,0.2,1,0.3,1.4,0.8c0.5,0.6,0.5,1.4,0.6,2.2c0.3,1.7,0.7,3.4,1.1,5c0.6,2.8,1.3,5.6,1.9,8.4c-0.7,0.3-1.2,1-1.2,2   c0,1.5,1.3,1.9,2.3,1.9c4.9,0.1,9.8,0,14.6,0.1c0.6,0,0.6-1,0-1c-2.9,0-5.8,0-8.7,0c-1.5,0-3.1,0-4.6,0c-0.6,0-2.2,0.3-2.6-0.4   c-0.4-0.7,0.1-1.6,0.7-1.6c4.2,0,8.3,0,12.5,0c1,0,2.8,0.2,3.5-0.9c0.3-0.5,0.4-1.2,0.5-1.7c0.3-1.2,0.6-2.3,0.9-3.5   c0.5-1.8,1.2-3.7,1.3-5.6C30.1,9.4,29.6,8.9,28.6,8.7z M4,4C3.7,3.9,2.9,3.6,2.7,3.3C2.6,3,2.9,2.8,3,2.7c0.1,0,0.2,0,0.3,0   c0.3,0.1,0.6,0.2,0.8,0.3C4.5,3.2,4.8,3.3,5,3.5c0.3,0.2,0.5,0.2,0.4,0.6C5.3,4.6,4.2,4.1,4,4z M29.1,10.1c0.2,0.6-0.3,2-0.4,2.6   c0,0.2-0.1,0.3-0.1,0.5c-1.2-0.1-2.4-0.2-3.6-0.3c0.2-1.2,0.5-2.3,0.7-3.5C26.9,9.4,28.8,9.4,29.1,10.1z M27.7,16.3   c-0.1,0.2-0.1,0.5-0.2,0.7c-1.1-0.1-2.2-0.1-3.3-0.1c0.2-1.1,0.4-2.2,0.6-3.4c1.2,0.1,2.4,0.2,3.6,0.3   C28.2,14.7,27.9,15.5,27.7,16.3z M20.7,21.2c0.1-1.2,0.1-2.4,0.2-3.6c0.9,0,1.7,0.1,2.6,0.1c-0.2,1.2-0.4,2.4-0.6,3.5   C22.1,21.2,21.4,21.2,20.7,21.2z M20.9,16.8c0.1-1.2,0.1-2.4,0.2-3.6c1,0.1,2,0.2,3,0.3c-0.2,1.1-0.4,2.3-0.6,3.4   C22.7,16.9,21.8,16.9,20.9,16.8z M11.6,21.1c-0.2-1.3-0.5-2.6-0.8-3.9c0.8,0,1.7,0.1,2.5,0.1c0.2,1.3,0.5,2.5,0.8,3.8   C13.2,21.2,12.4,21.2,11.6,21.1z M9.6,12.1c0.9,0.1,1.9,0.2,2.8,0.3c0.2,1.4,0.4,2.8,0.7,4.2c-0.8,0-1.7-0.1-2.5-0.1   C10.3,15,9.9,13.6,9.6,12.1z M14.7,21.2c-0.3-1.3-0.5-2.5-0.8-3.8c0.9,0,1.8,0.1,2.7,0.1c0.1,1.2,0.1,2.5,0.2,3.7   C16.1,21.2,15.4,21.2,14.7,21.2C14.7,21.2,14.7,21.2,14.7,21.2z M13.8,16.6c-0.2-1.4-0.5-2.8-0.7-4.2c1.1,0.1,2.2,0.2,3.3,0.3   c0.1,1.3,0.2,2.6,0.2,3.9C15.7,16.7,14.7,16.6,13.8,16.6z M13,11.7c-0.2-1.1-0.4-2.2-0.6-3.3c1.2,0.1,2.5,0.2,3.7,0.3   c0.1,1.1,0.1,2.2,0.2,3.4C15.2,11.9,14.1,11.8,13,11.7z M17,12.9c1.2,0.1,2.3,0.2,3.5,0.3c-0.1,1.2-0.2,2.4-0.2,3.6   c-1,0-2-0.1-3-0.1C17.2,15.4,17.1,14.1,17,12.9z M25,9.4c-0.3,1.1-0.5,2.3-0.7,3.4c-1-0.1-2.1-0.2-3.1-0.3c0.1-1.1,0.2-2.3,0.3-3.4   C22.6,9.2,23.8,9.3,25,9.4C24.9,9.4,25,9.4,25,9.4z M20.8,9c-0.1,1.1-0.2,2.3-0.3,3.4c-1.2-0.1-2.4-0.2-3.6-0.4   c-0.1-1.1-0.1-2.3-0.2-3.4c1.2,0.1,2.4,0.2,3.5,0.3C20.4,9,20.6,9,20.8,9z M8.8,8.2c1,0,1.9,0.1,2.9,0.1c0.2,1.1,0.4,2.2,0.6,3.3   c-1-0.1-1.9-0.2-2.9-0.3c-0.1-0.2-0.1-0.5-0.2-0.7C9.1,9.9,9,9,8.8,8.2z M17.5,21.2c-0.1-1.2-0.1-2.5-0.2-3.7c1,0,1.9,0.1,2.9,0.1   c-0.1,1.2-0.1,2.4-0.2,3.6C19.2,21.2,18.3,21.2,17.5,21.2z M26.8,19.6c-0.4,1.6-1.2,1.5-2.5,1.6c-0.3,0-0.5,0-0.8,0   c0.2-1.2,0.4-2.3,0.6-3.5c1.1,0,2.1,0.1,3.2,0.1C27.2,18.4,27,19,26.8,19.6z"></path><path fill="#37cfee" d="M9.8,27.1c0.2-0.5-0.4-0.8-0.6-0.4c-0.4,1-0.2,2.1,0.3,2.9c0.3,0.4,0.7-0.2,0.5-0.5C9.6,28.5,9.5,27.7,9.8,27.1z"></path><path fill="#37cfee" d="M8.5,27.7c0-0.2-0.2-0.4-0.3-0.4c-0.2,0-0.3,0.2-0.3,0.4c0,0.4,0,0.8,0.2,1.1c0.2,0.4,0.8,0,0.6-0.4   C8.5,28.2,8.5,27.9,8.5,27.7z"></path></g></svg>
                                <h3 className="text-center text-black text-xl px-4 font-bold century">Formation rédacteur web</h3>
                                <hr />
                                <br />
                                <p className="text-sm px-4 text-black text-center"><span className="font-bold">Découvrez les secrets de la <strong>rédaction web</strong> et adressez-vous <br />à vos utilisateurs comme aux <strong>moteurs de recherche</strong>.</span><br />
                                    <br />
                                    <ul className="text-bold text-center py-2">
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Comprendre les spécificités de la <strong>rédaction web</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Connaître les publics à qui s’adresse le contenu produit</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Construire une <strong>ligne éditoriale</strong> sur-mesure</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Maîtriser les différents outils de <strong>rédaction web</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Savoir définir un <strong>maillage interne</strong> pertinent</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Produire un contenu lisible et compréhensible pour les <strong>moteurs de recherche</strong></div>
                                        </li>

                                    </ul>
                                    <br />Apprenez à rédiger un texte impactant et professionnel pour vous démarquer de la concurrence <strong>sur le Web</strong>.</p>
                                <br />
                                {/*
                                    <div className="w-2/3 mx-auto block">
                                        <br />
                                        {/*<ButtonPage url="/creer-une-boutique-en-ligne/" text="SÉLECTIONNER" color="bleu" />
                                        <RoundButton url="/creer-une-boutique-en-ligne/" color="bleu" colortext="black" text="Je découvre la formation" />
                                    </div>
                            </div>


                            <div className="blocliens w-full lg:w-1/2 xl:w-1/4 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{ border: '2px solid #000000' }}>
                                <svg width="40px" class="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M10,20v60h80V20H10z M89,79H11V31h78V79z M89,30H11v-9h78V30z"></path><g><polygon fill="#37cfee" points="17,28.031 14,25.516 17,23  "></polygon></g><g><polygon fill="#37cfee" points="20,23 23,25.516 20,28.031  "></polygon></g><path fill="#37cfee" d="M15,35v18h26V35H15z M40,36v15.356c-1.491-1.694-5.104-5.628-6.485-5.628c-0.791,0-1.56,0.598-2.374,1.231  c-0.897,0.698-1.826,1.42-2.792,1.42c-0.703,0-1.765-2.476-2.467-4.115c-1.086-2.534-2.023-4.722-3.387-4.722  c-1.948,0-5.014,7.201-6.495,11.002V36H40z M39.233,52H16.515c2.351-6.245,5.064-11.458,5.98-11.458  c0.704,0,1.766,2.477,2.468,4.116c1.086,2.533,2.023,4.721,3.386,4.721c1.309,0,2.423-0.867,3.406-1.631  c0.645-0.502,1.312-1.021,1.76-1.021C34.177,46.734,36.933,49.393,39.233,52z M39.986,52L40,51.988V52H39.986z"></path><g><path fill="#37cfee" d="M33,44.479c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5S34.379,44.479,33,44.479z M33,40.479   c-0.827,0-1.5,0.673-1.5,1.5s0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S33.827,40.479,33,40.479z"></path></g><path fill="#37cfee" d="M15,57v18h26V57H15z M40,58v15.356c-1.491-1.694-5.104-5.628-6.485-5.628c-0.791,0-1.56,0.598-2.374,1.231  c-0.897,0.698-1.826,1.42-2.792,1.42c-0.703,0-1.765-2.476-2.467-4.115c-1.086-2.534-2.023-4.722-3.387-4.722  c-1.948,0-5.014,7.201-6.495,11.002V58H40z M39.233,74H16.515c2.351-6.245,5.064-11.458,5.98-11.458  c0.704,0,1.766,2.477,2.468,4.116c1.086,2.533,2.023,4.721,3.386,4.721c1.309,0,2.423-0.867,3.406-1.631  c0.645-0.502,1.312-1.021,1.76-1.021C34.177,68.734,36.933,71.393,39.233,74z M39.986,74L40,73.988V74H39.986z"></path><g><path fill="#37cfee" d="M33,66.479c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5S34.379,66.479,33,66.479z M33,62.479   c-0.827,0-1.5,0.673-1.5,1.5s0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S33.827,62.479,33,62.479z"></path></g><g><rect fill="#37cfee" x="45" y="39" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="48" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="42" width="40" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="45" width="30" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="61" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="70" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="64" width="40" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="67" width="30" height="1"></rect></g></svg>
                                <h3 className="text-center text-black text-xl px-4 font-bold century">Formation E-mailing</h3>
                                <hr />
                                <br />
                                <p className="text-sm px-4 text-black text-center"><span className="font-bold">Adressez-vous aux bonnes personnes au bon moment <br />grâce à l'envoi de <strong>newsletters</strong> sur-mesure.</span> <br />
                                    <br />
                                    <ul className="text-bold text-center py-2">
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Créer une <strong>campagne de Marketing Direct</strong> de A à Z</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Maîtriser les principaux outils et indicateurs de statistiques</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Apprendre à cibler son destinataire (votre client idéal)</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Structurer son mail pour ne pas atterrir dans les spams</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Rédiger des emails pertinents et percutants</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Créer une <strong>newsletter</strong> en toute conformité au RGPD</div>
                                        </li>

                                    </ul>
                                    <br />Maîtrisez les secrets de l'<strong>e-mailing</strong> : produisez des <strong>e-mails engageant</strong> pour votre audience.</p>
                                <br />
                                {/*}
                                    <div className="w-2/3 mx-auto block">
                                        <br />
                                        {/*<ButtonPage url="/creation-site-internet-catalogue/" text="SÉLECTIONNER" color="bleu" />
                                        <RoundButton url="/creation-site-internet-catalogue/" color="bleu" colortext="black" text="Je découvre la formation" />
                                    </div>
                            </div>
                        </section>
                    </section> */}
                </section>
                <section className="w-full flex my-12 flex-col items-center lg:flex-row text-white bg-darkgrey century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12 text-2xl">
                        <h3 className="font-bold">Découvrez le programme complet de notre formation en référencement naturel</h3>
                        <h4>Passez au niveau supérieur en SEO que vous soyiez débutant ou confirmé. <br/>Téléchargez notre programme.</h4>
                    </div>
                    <div className="w-full mx-auto block lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <a href="/programme-formation-referencement-naturel.pdf" target="_blank" rel="noopener noreferer" className='font-light roundedButton bg-bleu text-white hover:text-white flex justify-center mt-3 century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 mt-12'>TÉLÉCHARGER LE PROGRAMME</a>
                    </div>
                </section>
                <section className="flex w-full flex-col mx-auto px-0 py-2 my-2">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10">
                        <h2 className="text-bleu text-lg text-center century">Formation DataDock</h2>
                        <br />
                        <h3 className="century text-3xl md:text-5xl text-black leading-none">Organisme de formation DataDock : <br />de quoi s'agit-il ?</h3>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                    </section>
                </section>
                <section className="bloctextimg w-full md:w-10/12 mb-16 mx-auto lg:block lg:mx-auto xl:w-full flex flex-col lg:flex-row justify-center">
                    <div className="w-full image lg:w-1/2 xl:w-2/5 lg:absolute flex justify-center lg:mt-48 xl:mt-16 pr-0 md:pr-0 lg:justify-center lg:items-center">
                        <img src={imac} alt="Organisme de formation DataDock" style={{ maxHeight: '400px' }} />
                    </div>
                    <div className="text century w-full text-justify mr-16 lg:w-3/5 xl:w-2/5 md:p-20 lg:pl-32 p-10 lg:py-10 text-black text-sm xl:text-md" style={{ backgroundColor: '#d3d3d352' }}>
                        <h4 className="century text-xl"><span className="font-bold">L’agence web Linkweb fait partie des organismes de formation référencés DataDock conformément au Décret n°2015-790 du 30 juin 2015 relatif à la qualité des actions de la formation professionnelle continue.</span></h4>
                        <br />
                        <p style={{ fontSize: '16px' }}>
                            <strong>DataDock</strong> est une base de données qui a pour vocation de référencer l’ensemble des <strong>formations professionnelles</strong> de France. L’ensemble des formations référencées sont éligibles au <strong>compte personnel de formation (CPF)</strong>.<br />
                            <br />
                            Le <strong>CPF</strong> permet à chaque actif, dès son entrée sur le marché du travail, d’acquérir des <strong>droits à la formation</strong>, et ce, tout au long de sa carrière professionnelle. Depuis 2019, le CPF est crédité en euros. <br />
                            <br />
                            Autrement dit, les <strong>formations professionnelles</strong> proposées par les <strong>organismes de formation référencés DataDock</strong> peuvent être financées par le <strong>CPF</strong>, mais aussi par l’ensemble des <strong>organismes financiers de la formation professionnelle</strong> tels que les <strong>OPCA</strong> (Organismes Paritaires et Collecteurs Agréés), Pôle Emploi, OPACIF, AGEFIPH. Vous n’avez donc rien à débourser.<br />
                        </p>
                    </div>

                    <br />
                </section>
                <section className="bg-black py-5 text-white">
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 className="text-bleu text-lg text-center century">Formation Datadock</h2>
                        <br />
                        <h3 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                            Pourquoi choisir nos <br /><span className="text-5xl lg:text-6xl text-bleu font-bold uppercase">formations DataDock ?</span>
                        </h3>
                        <hr className="blue border-bleu"></hr>
                    </section>
                    <h4 className="century text-xl text-center max-w-5xl w-full mx-auto px-4 pt-12 pb-0"><span className="font-bold">Dispenser des formations professionnelles fait partie de notre métier. Linkweb vous accompagne grâce à un programme de formation en entreprise adapté à vos besoins.</span></h4><br />
                    <br />
                    <p className="w-full century pb-4 text-center max-w-5xl w-full mx-auto px-4 pb-0 my-2">Nos formations sont dispensées par des <strong>professionnels qualifiés</strong>, compétents et à votre écoute. En choisissant un <strong>organisme référencé Datadock</strong>, vous avez accès à une <strong>formation qualifiante</strong> et qui pourra être financée par l’ensemble des <strong>organismes financiers</strong> : OPCA (Organismes Paritaires et Collecteurs Agréés), Pôle Emploi, OPACIF, AGEFIPH, etc.</p>
                    <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
                        <div className="w-full xl:w-1/3 one px-auto">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                                <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                    <h3 className="century uppercase text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>Des formations qualifiantes via un organisme certifié
                </h3>
                                    <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                        En optant pour la <strong>formation professionnelle</strong> par Linkweb, vous faites appel à un organisme agréé et concourrez à l’obtention de <strong>certifications professionnelles qualifiantes</strong> (par <strong>validation des acquis de l’expérience ou VAE</strong>) pour votre avenir professionnel.
                </div>
                                </section>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3 two px-auto">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
                                <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                    <h3 className="century uppercase text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>Une équipe de professionnels à vos côtés
                </h3>
                                    <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                        Linkweb, c’est avant tout une équipe de professionnels du webmarketing compétents. Nos <strong>formateurs</strong> vous accompagnent en fonction de vos besoins pour vous permettre d’<strong>acquérir les compétences professionnelles</strong> nécessaires à votre évolution professionnelle.
                </div>
                                </section>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3 three px-auto">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
                                <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                    <h3 className="century uppercase text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>Un suivi irréprochable
                </h3>
                                    <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                        En plus de vous apporter une base théorique riche, nos formateurs s’attachent à mettre en place un suivi pour vous permettre d’acquérir des compétences là où vous en avez le plus besoin. Un suivi individuel de formation est réalisé et validé via un <strong>bilan de compétences</strong>.
                </div>
                                </section>

                            </div>

                        </div>
                    </section>
                </section>
                <section className="phototext">
                    <section className="text-center text-black text-2xl mx-auto flex-col flex items-center lg:mx-0 century mt-16 mb-10">
                        <h2 className="century text-black leading-none">Vous souhaitez faire financer votre <br /><span className="text-5xl lg:text-6xl text-bleu font-bold">FORMATION DATADOCK ?</span></h2>
                        <br />
                        <hr className="border-solid w-1/6 border-white"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="text-xl max-w-5xl text-center century text-black px-4 pb-0"><span className="font-bold">En tant qu’organisme référencé DataDock, Linkweb vous permet de bénéficier d’une multitude de solutions pour le financement de la formation de votre choix.</span><br /><br />
                            Se former et obtenir une certification professionnelle est donc accessible à tous en participant à nos formations. Voici les principales solutions de financement des formations.</h3>
                    </section>
                    <section className="w-full my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Datadock" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10  flex flex-col">
                            <Accordion>
                                <div className="w-full" label="PRENEZ CONNAISSANCE DE VOTRE COMPTE DE FORMATION">
                                    <p className="w-full century pb-4 text-justify">Toute personne salariée, tout au long de sa carrière professionnelle, bénéficie d’un <strong>droit à la formation</strong>. Si vous êtes dans ce cas de figure, vous devrez vous rendre sur votre espace personnel à l’aide de votre numéro de sécurité sociale pour consulter vos droits. S’il s’agit de votre première connexion, vous devrez créer un compte. </p>
                                    <br />
                                    <p className="w-full century pb-4 text-justify">Par défaut, <strong>ce dernier est crédité de 500€ par an dans la limite de 5000€ cumulés</strong>. Ce montant peut s’élever <strong>jusqu’à 800€ dans la limite de 8000€ cumulés</strong> si vous êtes considéré comme <strong>salarié non qualifié</strong> (en dessous d’un niveau 3).</p>
                                </div>
                                <div label="L'AIDE INDIVIDUELLE À LA FORMATION (AIF) À DESTINATION DES DEMANDEURS D'EMPLOI AVEC PÔLE EMPLOI">
                                    <p className="w-full century pb-4 text-justify">Si vous êtes en <strong>situation de recherche d’emploi</strong>, <strong>Pôle Emploi</strong> propose une <strong>aide individuelle à la formation (AIF)</strong> en vue de financer vos <strong>actions de formation</strong>. Toutefois, pour y être éligible, la formation sélectionnée doit s’inscrire parfaitement dans votre <strong>projet professionnel</strong>.</p>
                                    <br />
                                    <p className="w-full century pb-4 text-justify">Ce dernier est défini en collaboration avec votre conseiller et doit s’inscrire dans une démarche de professionnalisation et de retour à l’emploi.
                                    </p>
                                </div>
                                <div label="RÉFÉREZ-VOUS AUX MODALITÉS DE FORMATION DE VOTRE ENTREPRISE">
                                    <p className="century pb-4 text-justify">Toutes les entreprises travaillent avec des <strong>organismes financeurs de la formation professionnelle</strong>. Vous pouvez donc vous référer au régime en vigueur au sein de votre entreprise. Dans le cadre du plan de <strong>développement des compétences</strong>, vous êtes en mesure de suivre une <strong>formation qualifiante</strong> sans que vous déboursiez un euro.</p>
                                    <br />
                                    <p className="century pb-4 text-justify">En effet, en faisant appel à un <strong>organisme de formation DataDocké</strong>, vous bénéficiez de la participation d’un organisme pour <strong>financer la formation</strong>. Grâce à son <strong>référencement DataDock</strong>, Linkweb est un <strong>organisme formateur</strong> qui propose des <strong>parcours de formation</strong> éligibles à ces différents financements.
                                    </p>
                                </div>
                            </Accordion>
                            {/*<div className="w-full flex-col md:flex-row flex px-auto">
                        <div className="blocchiffres mx-auto md:mx-0 block century text-bleu ">
                            <p>1</p>
                        </div>
                        <div className="w-full px-6 lg:px-6 flex flex-col justify-center" style={{maxWidth:'1000px'}}>
                                <h3 className="century uppercase text-2xl tracking-wider pb-3 leading-tight text-justify" >
                                    <span className="text-bleu">/</span>Prenez connaissance de votre compte de formation
                                </h3>
                                
                                <p className="w-full century pb-4 text-justify">Toute personne salariée, tout au long de sa carrière professionnelle, bénéficie d’un droit à la formation. Si vous êtes dans ce cas de figure, vous devrez vous rendre sur votre espace personnel à l’aide de votre numéro de sécurité sociale pour consulter vos droits. S’il s’agit de votre première connexion, vous devrez créer un compte. </p>
                                <br/>
                                <p className="w-full century pb-4 text-justify">Par défaut, ce dernier est crédité de 500€ par an dans la limite de 5000€ cumulés. Ce montant peut s’élever jusqu’à 800€ dans la limite de 8000€ cumulés si vous êtes considéré comme salarié non qualifié (en dessous d’un niveau 3).</p>
                                {/*<Button url="/referencement-de-site-internet-47-31/" text="Notre formule SEO" position="left" />
                                <br/>
                        </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" >
                                <p>2</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-2xl tracking-wider pb-3 leading-tight text-justify" >
                                        <span className="text-bleu">/</span>L’aide individuelle à la formation (AIF) à destination des demandeurs d’emploi avec Pôle Emploi
                                    </h3>
                                    
                                    <p className="w-full century pb-4 text-justify">Si vous êtes en situation de recherche d’emploi, Pôle Emploi propose une aide individuelle à la formation (AIF) en vue de financer vos actions de formation. Toutefois, pour y être éligible, la formation sélectionnée doit s’inscrire parfaitement dans votre projet professionnel.</p>                                    
                                    <br/>
                                    <p className="w-full century pb-4 text-justify">Ce dernier est défini en collaboration avec votre conseiller et doit s’inscrire dans une démarche de professionnalisation et de retour à l’emploi.
                                    </p>
                                    {/*<Button url="/agence-adwords-47-31/" text="Notre formule SEA" position="left" />
                                    <br/>
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" >
                                <p>3</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-2xl tracking-wider pb-3 leading-tight text-justify">
                                        <span className="text-bleu">/</span>Référez-vous aux modalités de formation de votre entreprise
                                    </h3>
                                    
                                    <p className="century pb-4 text-justify">Toutes les entreprises travaillent avec des organismes financeurs de la formation professionnelle. Vous pouvez donc vous référer au régime en vigueur au sein de votre entreprise. Dans le cadre du plan de développement des compétences, vous êtes en mesure de suivre une formation qualifiante sans que vous déboursiez un euro.</p>
                                    <br/>
                                    <p className="century pb-4 text-justify">En effet, en faisant appel à un organisme de formation DataDocké, vous bénéficiez de la participation d’un organisme pour financer la formation. Grâce à son référencement DataDock, Linkweb est un organisme formateur qui propose des parcours de formation éligibles à ces différents financements.
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />
                            </div>
                        </div>*/}

                        </div>
                    </section>
                </section>


                {/* <li className="hidden lg:block toggleable">
                                <input type="checkbox" value="selected" id="toggle-one" className="toggle-input1 hidden"/>
                                    <label for="toggle-one" className="toogle-input1 block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">
                                    <svg width="70px" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path d="M 50,7 C 26.2636,7 7,26.26364 7,50 7,73.7364 26.2636,93 50,93 73.736401,93 93,73.7364 93,50 93,26.26364 73.736401,7 50,7 z m 0,2 C 72.655519,9 91,27.34452 91,50 91,72.6556 72.655519,91 50,91 27.344481,91 9,72.6556 9,50 9,27.34452 27.344481,9 50,9 z m 0,22 c -1.104568,0 -2,0.895433 -2,2 0,1.104567 0.895432,2 2,2 1.104568,0 2,-0.895433 2,-2 0,-1.104567 -0.895432,-2 -2,-2 z m -5.1875,10 c -0.523599,0.04909 -0.955337,0.570151 -0.90625,1.09375 C 43.955338,42.617349 44.476401,43.049087 45,43 l 4,0 0,24 c -1.385942,-6e-5 -2.817517,0 -4.1875,0 -0.523599,0.04909 -0.955337,0.570151 -0.90625,1.09375 C 43.955338,68.617349 44.476401,69.049087 45,69 l 10,0 c 0.528313,0.0075 1.014242,-0.471635 1.014242,-1 0,-0.528365 -0.485929,-1.007472 -1.014242,-1 l -4,0 0,-25 c -5.2e-5,-0.523584 -0.476416,-0.999948 -1,-1 -1.719683,-4e-5 -3.48361,0 -5.1875,0 z" transform="translate(0,952.36218)" fill="#37cfee" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg>                        
                                    </label>
                                <div role="toggle" className="toggle-input1 megamenu relative h-auto z-40 p-2 mega-menu mb-16 sm:mb-0">
                                <section className="w-1/2 bg-grey px-16 py-6 flex flex-col">
                                    <h2 className="ml-4 text-xl century text-white">Qu'est-ce que le référencement web ?</h2>
                                    <br/>
                                    <p className="text-white century text-sm text-justify">Le référencement est une notion parfois floue et qui est souvent l'objet d'un abus de langage. En effet, référencer un site web, au sens strict du termes signifie très simplement à l'inscrire dans l'index de Google. C'est grâce à son indexation qu'il sera proposé dans les résultats de recherche. Or, s'il n'est pas indexé, il est comme inconnu aux yeux de Google et ne sera pas pris en compte.<br/><br/>
                                    En revanche, la simple indexation ne suffit pas à rendre un site visible. Le référencement en tant que discipline désigne l'ensemble des pratiques destinées à améliorer le positionnement d'une page web dans les pages de résultats des moteurs. Mieux un site sera positionné (dans les premières pages de résultats) et plus obtiendra de visibilité. Le travail de référencement est effectué sur la base d'optimisations internes et externes au site web, qui vont lui permettre d'obtenir de la crédibilité et de l'autorité auprès de Google.</p>
                                </section>
                                </div>
                            </li> */}

                {/* <div className=" font-bold w-full md:w-1/2 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white" style={{ background: '#00cfff url( ' + blocBg + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                            <h2 className="text-xl pb-6" ><span className="text-bleu">/</span>RÉFÉRENCEMENT NATUREL SEO</h2>
                            <p>Vous souhaitez <strong>augmenter votre visibilité</strong> dans les <strong>pages de recherche de Google</strong> ? Vous souhaitez <strong>générer du trafic sur votre site internet</strong>, vendre vos produits ou obtenir des contacts ? Le <strong>référencement naturel</strong> vous offre la possibilité de mettre en avant votre entreprise.</p>
                            <RoundButton color="darkgrey" url="/referencement-de-site-internet-47-31/" text="Notre offre de Référencement Naturel" />
                        </div>
                        <div className="font-bold w-full md:w-1/2 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white" style={{ background: '#009991 url( ' + blocBg + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                            <h2 className="text-xl pb-6" ><span className="text-bleu">/</span>RÉFÉRENCEMENT ADS SEA</h2>
                            <p>Vous souhaitez obtenir un <strong>retour sur investissement</strong> grâce à votre <strong>boutique en ligne</strong> ou votre <strong>site vitrine</strong> ? Mener une campagne sponsorisée permet de propulser votre visibilité sur Google en un temps record, et ainsi, atteindre vos objectifs de conversion.</p>
                            <RoundButton color="darkgrey" url="/agence-adwords-47-31/" text="Notre offre de Référencement Ads" />
                        </div> */}


                <section className="w-full flex my-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence SEO à Toulouse</span> ?</h3>
                        <h4>Linkweb déploie son offre de formation pour les professionnels souhaitant développer leurs compétences.</h4>
                    </div>
                    <div className="w-full mx-auto block lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" />
                    </div>
                </section>


                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-24 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Linkweb est référencé Datadock : qu’est-ce que cela signifie ?</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Dans une volonté de distinguer les formations professionnelles de qualité de l’ensemble des offres proposées, Datadock a développé sa propre base de données.</h3>
                        <br />
                    </div>
                    <div>
                        <br />
                        <p className="max-w-6xl text-xl text-black text-center lg:text-justify pl-0 xl:pl-40 century ml-0 xl:ml-5 pb-0">Cette base de données est constituée dans une <strong>démarche-qualité</strong> puisque les organismes de formation souhaitant y être référencé doivent répondre à des <strong>critères de qualité</strong>.</p>
                        <br />
                        <p className="max-w-6xl pl-0 xl:pl-40 ml-0 xl:ml-5 text-xl text-black text-center lg:text-justify century pb-0">L’<strong>Agence Linkweb</strong> a donc répondu aux <strong>6 critères exigés</strong> par le décret n°2015-790 du 30/06/2015, à savoir :</p>
                        <br />
                        <ul className="max-w-6xl pl-0 xl:pl-40 ml-0 xl:ml-5 text-lg text-black text-center lg:text-justify century pb-0">
                            <li><span className="text-bleu">✔</span>&nbsp; L’identification précise des <strong>objectifs de la formation</strong> et son adaptation au public formé</li><br />
                            <li><span className="text-bleu">✔</span>&nbsp; L’adaptation des dispositifs d’accueil, de <strong>suivi pédagogique</strong> et d’évaluation aux publics de stagiaires</li><br />
                            <li><span className="text-bleu">✔</span>&nbsp; L’adéquation des moyens pédagogiques, techniques et d’encadrement à l’<strong>offre de formation</strong></li><br />
                            <li><span className="text-bleu">✔</span>&nbsp; La <strong>qualification professionnelle</strong> et la <strong>formation continue</strong> des personnes chargées des formations</li><br />
                            <li><span className="text-bleu">✔</span>&nbsp; Les conditions d’information du public sur l’<strong>offre de formation</strong>, ses délais d’accès et les résultats obtenus</li><br />
                            <li><span className="text-bleu">✔</span>&nbsp; La prise en compte des appréciations rendues par les stagiaires</li><br />
                        </ul>
                    </div>
                </section>

                {/*<section className="max-w-5xl w-full mx-auto px-4 pt-4 pb-0 mt-2">
                        <h2 /*data-aos='fade-right' className="text-center text-3xl century">
                        Agence SEO à Toulouse : la marque de Linkweb
                        </h2>
                        <hr className="blue"></hr>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-10 pb-0">
                    <div className="w-full max-w-5xl" /*data-aos='zoom-in'>
                            <p className="text-md text-center pt-4 century">Depuis plus de dix ans, <strong>Linkweb</strong> a développé sur une expertise dans le <strong>référencement naturel (SEO)</strong>. Notre agence est donc considérée comme <strong>agence SEO</strong> (<strong>Search Engine Optimization</strong>) à part entière.<br/><br/>Ainsi, notre équipe de <strong>référenceurs</strong> est à même de répondre à vos <strong>projets web</strong> par la mise en place de <strong>stratégies SEO</strong> adaptées à vos besoins, que ce soit en <strong className="font-light">refonte</strong> ou en <strong className="font-light">création de site internet</strong>. <br/><br/>Un <strong className="font-light">expert SEO</strong> est chargé de définir une stratégie adaptée pour optimiser l'<strong className="font-light">expérience utilisateur</strong> de votre site ainsi que sa visibilité sur les <strong className="font-light">moteurs de recherche</strong> grâce au <strong className="font-light">marketing digital</strong> et notamment à un <strong className="font-light">bon référencement</strong>.</p>
                            <br/>
                        </div>
                    </section>
                    <br/>
                    <div className="max-w-6xl mx-auto flex text-center my-0">
                            {/* <RappelForm />
                            <RoundButton url="/referencement-toulouse/agence-seo-toulouse/" text="Notre agence SEO à Toulouse" />
                        </div>*/}
                <section className="bg-darkgrey py-12 my-0">
                    <section className="flex w-full flex-col mx-auto px-0 py-2 my-2">
                        <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10">
                            <br />
                            <h2 className="century text-3xl md:text-5xl text-white leading-none">En 2021, DataDock devient Qualiopi</h2>
                            <br />
                            <hr className="border-solid w-1/6 border-bleu"></hr>
                        </section>
                    </section>
                    <section className="bloctextimg w-full md:w-10/12 mb-16 mx-auto lg:block lg:mx-auto xl:w-full flex flex-col lg:flex-row justify-center">
                        <div className="w-full image lg:w-1/2 xl:w-2/5 lg:absolute flex justify-center lg:mt-48 xl:mt-12 pr-0 md:pr-0 lg:justify-center lg:items-center">
                            <img src={qualiopi} alt="Formation DataDock" style={{ maxHeight: '350px' }} />
                        </div>
                        <div className="text text-white century w-full text-justify mr-16 lg:w-3/5 xl:w-2/5 md:p-20 lg:pl-32 p-10 lg:py-10 text-black text-sm xl:text-md" style={{ backgroundColor: '#d3d3d352' }}>
                            <h4 className="century text-white text-xl"><span className="font-bold">Le label qualité DataDock sera remplacé par le référentiel Qualiopi avant la fin de l’année 2021.</span></h4>
                            <br />
                            <p className="text-white" style={{ fontSize: '16px' }}>
                                Cela fait suite à la dernière réforme de la <strong>formation professionnelle</strong>. Dans les faits, <strong>Qualiopi</strong> désigne tout simplement une nouvelle <strong>certification de qualité</strong> pour les <strong>prestataires de formation</strong> assurant une <strong>action de formation</strong>, à l’image de Linkweb.<br />
                                <br />
                            Face à cette évolution, Linkweb est d’ores-et-déjà mobilisé en vue de l’<strong>acquisition de cette certification</strong> pour continuer à proposer des <strong>formations de qualité</strong> financées par les différents <strong>organismes financeurs</strong>.<br />
                            </p>
                        </div>

                        <br />
                    </section>
                </section>
                <section className="flex w-full flex-col mx-auto px-0 py-6 my-4 lg:my-0">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10 lg:mb-2">
                        <h2 className="century text-3xl md:text-5xl text-black leading-none">Les dernières actualités</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>

                    </section>
                </section>
                <section className="max-w-6xl mx-auto flex flex-col align-center flex flex-col justify-center items-center justify-center text-center mt-12 mb-3">
                    <LastPosts lastposts={this.props.data.allWpPost.edges} />
                    <div className="w-2/5 flex flex-row justify-center items-center">
                        <RoundButton url="/actualite-digitale/" text="Accéder au Blog" />
                    </div>
                    <br />
                </section>
                <SimpleMap />
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsFormationDatadock {
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
export default FormationDatadock;
