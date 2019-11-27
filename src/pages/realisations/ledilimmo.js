import React from "react";
import { Link, graphql } from "gatsby";
import posed from 'react-pose';
import Layout from "../../components/layout";
import RoundButton from "../../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../../components/seo";


import logolinkweb from "../../images/logo-linkweb.png";
import Bg from "../../images/bg-ledil.jpg";
import bgbloc from "../../images/ledil-bloc.jpg";
import smartphone from "../../images/ledil-pc.jpg";
import mockup from "../../images/ledil-smartphone.jpg";
import imac from "../../images/mockup-ledil.jpg";
import bloccontact from '../../images/ledil-contact.jpg';
import logo from '../../images/logo-ledil.png';


class ledilimmo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Nos Réalisations - Ledil.Immo - Linkweb"
                    description="Le site de Ledil.immo est l'une de nos réalisations. Vous souhaitez un projet similaire ?"
                    keywords={[`Référencement Agen`, `Référencement Toulouse`, `Agence de Référencement Agen`, `Agence de Référencement Toulouse`, `Référencement Google`]}
                    url="https://linkweb.fr/realisations/ledilimmo/"
                    nom="Ledil Immobilier"
                    slug="/realisations/ledilimmo/"
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
                    <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ background:'#233951f0 url(' + Bg + ')', backgroundRepeat:'no-repeat', backgroundBlendMode:'multiply', backgroundSize:'cover', backgroundPosition:'center' }}>
                            <Link className="invisible md:visible" to="/"><img className="mx-auto block" width="120px" src={logolinkweb} alt="création site internet Toulouse" data-aos="zoom-in"/></Link>
                            <br/>
                            <h1 data-aos="fade-down" data-aos-delay="500" className="century mt-24 font-bold text-5xl sm:text-6xl md:text-6xl lg:text-6xl text-center text-white">
                                <b>LEDIL.IMMO</b>
                            </h1>
                            <h3 data-aos="fade-up" className="italic font-normal text-center text-lg sm:text-2xl text-white mt-8">Développer une solution web permettant d’apporter une visibilité à l’offre de Ledil.immo en proposant une solution de gestion du réseau de mandataires.</h3>
                            <br/>
                            <a data-aos="fade-dow" className="mb-12" href="/realisations/ledilimmo/#start"><svg width="60px" viewBox="0 0 100 125"><g><g><path fill="#FFFFFF" d="M59.3,46.5l-8.7,8.7l-8.7-8.7c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l10.1,10.1c0.4,0.4,0.9,0.6,1.4,0.6    s1-0.2,1.4-0.6l10.1-10.1c0.8-0.8,0.8-2,0-2.8C61.4,45.7,60.1,45.7,59.3,46.5z M50.8,5c-24.9,0-45,20.1-45,45    c0,24.9,20.1,45,45,45c24.9,0,45-20.1,45-45C95.8,25.1,75.6,5,50.8,5z M50.8,91c-22.6,0-41-18.4-41-41s18.4-41,41-41    s41,18.4,41,41S73.4,91,50.8,91z"/></g></g></svg></a>
                    </section>
                    <section className="w-full flex flex-col md:flex-row mt-12">
                        <div className="w-full md:w-11/12 px-4 py-2 md:py-6 my-2 ml-0 md:ml-24 lg:ml-32 md:my-4 flex flex-col order-last md:order-first">
                            <h3 data-aos='fade-right' className="text-center text-2xl md:text-4xl mx-12 md:mx-24 century">
                            Proposer une solution concrète pour mettre en avant les biens tout en <span className="text-or">mobilisant le réseau de mandataires.</span>
                            </h3>
                            <br/>
                        </div>
                        <div className="w-full md:w-1/12 mx-auto mr-10 py-6 mb-4 -mt-48" id="start" data-aos="zoom-in">
                            <img src={logo} className="mx-auto block md:mx-0" />
                        </div>
                    </section>
                    <section className="w-full mt-16 flex flex-col md:flex-row justify-center items-center">
                        <div className="w-1/2 md:w-1/6 bg-or mx-12 p-3 text-center" data-aos="zoom-in" style={{borderRadius:'15px'}}>
                            <a className="text-white font-bold" href="https://www.sdis47.fr/">Voir le site</a>
                        </div>
                        <div className="w-1/2 md:w-1/6 bg-ledil mx-12 my-6 text-center p-3" data-aos="zoom-in" data-aos-delay="500" style={{borderRadius:'15px'}}>
                            <Link className="text-white font-bold" to="/contact-agence-web-toulouse/">J'ai une question</Link>
                        </div>
                    </section>
                    <section className="w-full mt-24">
                        <div className="w-full lg:w-2/3 bg-ledil text-white px-12 md:px-24 py-12" data-aos="fade-right" data-aos-delay="100">
                            <h2 className="font-bold text-center md:text-left text-2xl md:text-3xl my-6"><span className="text-or">/</span>ACCOMPAGNER LA REFONTE EN PROFONDEUR DE LEDIL.IMMO</h2>
                            <br/>
                            <p className="font-normal text-justify">
                                Ledil.immo a choisi Linkweb pour être accompagné dans la poursuite de ses nouveaux objectifs de communication :  
                            </p>
                            <br/>
                            <ul className="font-normal text-justify">
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#d0a104" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#d0a104" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Développer un outil d’administration du réseau de mandataires.
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#d0a104" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#d0a104" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Promouvoir les valeurs et le réseau de Ledil.immo.
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#d0a104" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#d0a104" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Accompagner la refonte de la charte graphique de Ledil.immo avec un site internet sur-mesure.
                                </li>
                            </ul>
                            <br/>
                            <element className="flex flex-col md:flex-row mt-24 mb-8">
                                <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up">
                                    <svg className="mx-auto block" width="80px" viewBox="0 0 100 125" ><g><path fill="#d0a104" d="M50,0C22.9,0,1,21.9,1,49s21.9,49,49,49S99,76,99,49S77.1,0,50,0z M66.4,78.2c0,2.2-1.8,3.9-3.9,3.9h-25   c-2.2,0-3.9-1.8-3.9-3.9V21.5c0-2.2,1.8-3.9,3.9-3.9h25c2.2,0,3.9,1.8,3.9,3.9V78.2z"/><rect fill="#d0a104" x="35.9" y="25.9" width="28.3" height="45.5"/><circle fill="#d0a104" cx="50" cy="77.2" r="2.7"/><path fill="#d0a104" d="M44.3,22.7h11.3c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7H44.3c-0.4,0-0.7,0.3-0.7,0.7C43.7,22.4,44,22.7,44.3,22.7z"/></g></svg>
                                    <h4 className="text-center mt-4 font-bold text-lg">Responsive Design</h4>
                                </div>
                                <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up" data-aos-delay="500">
                                    <svg className="mx-auto block" width="80px" viewBox="0 0 256 320"><g><g><path fill="#d0a104" d="M128,3C59,3,3,59,3,128s56,125,125,125s125-56,125-125S197,3,128,3z M152,100c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8    S147.6,100,152,100z M128,102c5.5,0,10,4.5,10,10s-4.5,10-10,10s-10-4.5-10-10S122.5,102,128,102z M104,100c4.4,0,8,3.6,8,8    s-3.6,8-8,8s-8-3.6-8-8S99.6,100,104,100z M100,146H90c-2.2,0-4-1.8-4-4v-8c0-6.2,8.5-11,19-11c6.5,0,12.2,1.8,15.6,4.7    c-3.3,0.6-6.4,1.6-8.9,3.1c-4.4,2.5-7.7,6.4-7.7,11.2C104,144.2,102.2,146,100,146z M149,152c0,2.2-1.8,4-4,4h-34    c-2.2,0-4-1.8-4-4v-10c0-6.9,9.4-12,21-12s21,5.1,21,12V152z M170,142c0,2.2-1.8,4-4,4h-10c-2.2,0-4-1.8-4-4    c0-4.8-3.3-8.8-7.7-11.2c-2.6-1.4-5.6-2.5-8.9-3.1c3.4-2.9,9.1-4.7,15.6-4.7c10.5,0,19,4.8,19,11V142z"/></g></g></svg>                                    
                                    <h4 className="text-center my-4 font-bold text-lg">Création d'un espace membre</h4>
                                </div>
                                <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up" data-aos-delay="1000">
                                    <svg className="mx-auto block" width="80px" viewBox="0 0 100 125"><g><path fill="#d0a104" d="M65.666,25.15c0,0,0.291-1.244,2.611-2.613c0,0-2.446-0.373-3.69,1.659C65.417,24.86,65.666,25.15,65.666,25.15z"/><path fill="#d0a104" d="M50,0C22.386,0,0,22.386,0,50s22.386,50,50,50s50-22.386,50-50S77.614,0,50,0z M70.046,22.253   c1.611,1.298,1.553,4.042-0.128,6.13l-20.027,21.79c-1.682,2.086-1.293,1.993-2.904,0.695c-1.611-1.297-1.62-0.899,0.063-2.985   l17.035-24.202C65.766,21.595,68.435,20.955,70.046,22.253z M46.23,56.444C40.659,58.75,32.679,56.948,36,56.923   c3.321-0.025,3.734-0.826,4.816-4.159C42.812,47.503,51.801,54.141,46.23,56.444z M58.793,78.369c-0.79,0.106-8.242,0.01-8.793,0   c-0.55,0.01-8.003,0.106-8.793,0c-0.82-0.11,0-0.767,1.039-1.531c1.04-0.766,1.148-2.131,1.148-2.131L43.785,72h12.429l0.39,2.708   c0,0,0.11,1.257,1.15,2.022C58.792,77.496,59.612,78.259,58.793,78.369z M80,67.632C80,68.957,78.926,70,77.6,70H22.4   c-1.325,0-2.4-1.043-2.4-2.368v-34.8C20,31.506,21.075,30,22.4,30h34.451l-2.535,4H24v29h52V34h-9.199l3.308-4H77.6   c1.326,0,2.4,1.506,2.4,2.832V67.632z"/></g></svg>                                    
                                    <h4 className="text-center my-4 font-bold text-lg">Webdesign adapté</h4>
                                </div>
                            </element>
                        </div>
                    </section>
                    <section className="flex flex-col items-center md:flex-row my-12 md:my-24">
                        <div className="w-full xl:w-1/2" data-aos="fade-right">
                            <img src={imac} className="w-full lg:w-10/12"/>
                        </div>
                        <div className="w-full xl:w-1/2 pt-16" data-aos="fade-left">
                            <h2 className="font-normal text-3xl my-2 px-16"><span className="text-or">/</span>POSITIONNEMENT ET VALEURS PARTAGÉES</h2>
                            <br/>
                            <p className="font-bold text-lg px-16">
                                Mettre en place un outil de communication multi-fonction capable de transmettre les valeurs d’un réseau immobilier collaboratif.
                            </p>
                            <br/>
                            <div className="px-16 my-8">
                                <p className="text-3xl py-2 text-left italic" data-aos="fade-in">PROXIMITÉ</p>
                                <p className="text-3xl py-2 text-right italic" data-aos="fade-in"data-aos-delay="400">COMMUNICATION</p>
                                <p className="text-3xl sm:text-5xl py-2 text-center text-or italic font-bold" data-aos="zoom-in" data-aos-delay="1000">COLLABORATION</p>
                                <p className="text-3xl py-2 text-right italic" data-aos="fade-in" data-aos-delay="600">GRAPHIQUE</p>
                                <p className="text-3xl py-2 text-left italic" data-aos="fade-in" data-aos-delay="200">PERSONNALISATION</p>
                            </div>
                        </div>
                    </section>
                    <section className="w-full h-full lg:h-screen flex flex-col items-center" style={{background: 'url('+ bgbloc +')', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                        <div>
                            <h2 className="font-normal text-3xl my-6 pt-16 lg:py-32 px-16 text-white text-center uppercase" data-aos="fade-in"><span className="text-ledil">/</span>METTRE EN AVANT LA DIVERSITÉ DE L’OFFRE DE LEDIL.IMMO<br/> TOUT EN FAVORISANT L’UNICITÉ DU RÉSEAU</h2>
                        </div>
                        <div className="w-full lg:w-1/2 mb-12 text-white text-center flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="200">
                                <svg className="mx-auto block" xmlns="http://www.w3.org/2000/svg" width="60px" viewBox="0 0 48 60" x="0px" y="0px"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill-rule="nonzero" fill="#FFFFFF"><path d="M28,28 C32.418278,28 36,24.418278 36,20 C36,15.581722 32.418278,12 28,12 C23.581722,12 20,15.581722 20,20 C20,24.418278 23.581722,28 28,28 Z M37.3504,27.5219729 L46.7321221,36.903695 C47.5108511,37.6824239 47.514416,38.9414282 46.7279221,39.7279221 C45.9468735,40.5089706 44.6811918,40.5096189 43.903695,39.7321221 L34.3535005,30.1819277 C32.5109928,31.33408 30.3332633,32 28,32 C21.372583,32 16,26.627417 16,20 C16,13.372583 21.372583,8 28,8 C34.627417,8 40,13.372583 40,20 C40,22.8479673 39.0078792,25.4642124 37.3504,27.5219729 Z M0,15 C0,13.8954305 0.679554462,13 1.49554521,13 L10.5044548,13 C11.3304216,13 12,13.8877296 12,15 C12,16.1045695 11.3204455,17 10.5044548,17 L1.49554521,17 C0.669578397,17 0,16.1122704 0,15 Z M0,27 C0,25.8954306 0.679554462,25 1.49554521,25 L10.5044548,25 C11.3304216,25 12,25.8877296 12,27 C12,28.1045694 11.3204455,29 10.5044548,29 L1.49554521,29 C0.669578397,29 0,28.1122704 0,27 Z M0,39 C0,37.8954306 0.657922267,37 1.49811914,37 L30.0018808,37 C30.8292691,37 31.5,37.8877296 31.5,39 C31.5,40.1045694 30.8420778,41 30.0018808,41 L1.49811914,41 C0.670730784,41 0,40.1122704 0,39 Z"/></g></g></svg>
                                <h4 className="uppercase font-bold">
                                RECHERCHE AVANCÉE
                                </h4>
                                <p className="font-normal">Module de recherche de biens</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="400">
                                <svg className="mx-auto block" width="60px" viewBox="0 0 90 112.5" ><g><path fill="#FFFFFF" d="M81.5,34.75H56.9400024c-0.5500488,0-1,0.4500122-1,1v33.8099976c0,0.5499878,0.4499512,1,1,1H81.5   c0.5599976,0,1-0.4500122,1-1V35.75C82.5,35.2000122,82.0599976,34.75,81.5,34.75z"/><path fill="#FFFFFF" d="M81.7399902,31.0299683h-8.9000244V17.7099609c0-2.5699463-2.0899658-4.6599731-4.6499634-4.6599731H14.0599976   c-2.5700073,0-4.6600342,2.0900269-4.6600342,4.6599731v37.9100342c0,2.5700073,2.0900269,4.6599731,4.6600342,4.6599731   h38.7699585v1h-8.2799683h-6.8599854H8.1399536c-2.0699463,0-3.7599487,1.6799927-3.7599487,3.75s1.6900024,3.75,3.7599487,3.75   h29.5500488h15.1399536v4.2900391c0,2.1099854,1.6800537,3.8200073,3.7700195,3.8699951   c0.0300293,0.0100098,0.0700073,0.0100098,0.0999756,0.0100098h25.0400391c2.1400146,0,3.8800049-1.7400513,3.8800049-3.8800049   V34.8999634C85.6199951,32.7600098,83.8800049,31.0299683,81.7399902,31.0299683z M44.5499878,66.0299683h-6.8599854v-2h6.8599854   V66.0299683z M52.8299561,34.8999634V54.039978H15.1499634V19.2799683h51.9400024v11.75H56.6999512   C54.5700073,31.0299683,52.8299561,32.7600098,52.8299561,34.8999634z M83.6199951,73.0700073   c0,1.039978-0.8500366,1.8800049-1.8800049,1.8800049H56.6999512c-1.0299683,0-1.8699951-0.8400269-1.8699951-1.8800049V60.2799683   V34.8999634c0-1.0299683,0.8400269-1.8699951,1.8699951-1.8699951h25.0400391c1.0299683,0,1.8800049,0.8400269,1.8800049,1.8699951   V73.0700073z"/></g></svg>
                                <h4 className="uppercase font-bold">
                                RESPONSIVE DESIGN
                                </h4>
                                <p className="font-normal">Support des interactions « Touch »</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="600">
                                <svg className="mx-auto block" width="60px" viewBox="0 0 60 75"><g><path fill="#FFFFFF" d="M55.5,60h-51C2.019,60,0,57.981,0,55.5v-51C0,2.019,2.019,0,4.5,0h51C57.981,0,60,2.019,60,4.5v51   C60,57.981,57.981,60,55.5,60z M4.5,2C3.122,2,2,3.121,2,4.5v51C2,56.879,3.122,58,4.5,58h51c1.379,0,2.5-1.121,2.5-2.5v-51   C58,3.121,56.878,2,55.5,2H4.5z"/><path fill="#FFFFFF" d="M9,10H5c-0.552,0-1-0.447-1-1V5c0-0.553,0.448-1,1-1h4c0.552,0,1,0.447,1,1v4C10,9.553,9.552,10,9,10z M6,8h2V6H6V8z"/><path fill="#FFFFFF" d="M17,10h-4c-0.552,0-1-0.447-1-1V5c0-0.553,0.448-1,1-1h4c0.552,0,1,0.447,1,1v4C18,9.553,17.552,10,17,10z M14,8h2V6h-2V8z   "/><path fill="#FFFFFF" d="M25,10h-4c-0.552,0-1-0.447-1-1V5c0-0.553,0.448-1,1-1h4c0.552,0,1,0.447,1,1v4C26,9.553,25.552,10,25,10z M22,8h2V6h-2V8z   "/><path fill="#FFFFFF" d="M59,14H1c-0.552,0-1-0.447-1-1V4.5C0,2.019,2.019,0,4.5,0h51C57.981,0,60,2.019,60,4.5V13C60,13.553,59.552,14,59,14z    M2,12h56V4.5C58,3.121,56.878,2,55.5,2h-51C3.122,2,2,3.121,2,4.5V12z"/><path fill="#FFFFFF" d="M55.318,60H4.682C2.101,60,0,57.899,0,55.317V36c0-0.553,0.448-1,1-1h58c0.552,0,1,0.447,1,1v19.317   C60,57.899,57.899,60,55.318,60z M2,37v18.317C2,56.797,3.203,58,4.682,58h50.635C56.797,58,58,56.797,58,55.317V37H2z"/><path fill="#FFFFFF" d="M49,31H35c-1.654,0-3-1.346-3-3s1.346-3,3-3h14c1.654,0,3,1.346,3,3S50.654,31,49,31z M35,27c-0.552,0-1,0.448-1,1   s0.448,1,1,1h14c0.552,0,1-0.448,1-1s-0.448-1-1-1H35z"/><path fill="#FFFFFF" d="M51,19H33c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.552,0,1,0.447,1,1S51.552,19,51,19z"/><path fill="#FFFFFF" d="M54,23H33c-0.552,0-1-0.447-1-1s0.448-1,1-1h21c0.552,0,1,0.447,1,1S54.552,23,54,23z"/><path fill="#FFFFFF" d="M28,33H6c-0.552,0-1-0.447-1-1V17c0-0.553,0.448-1,1-1h22c0.552,0,1,0.447,1,1v15C29,32.553,28.552,33,28,33z M7,31h20V18   H7V31z"/><path fill="#FFFFFF" d="M21,29h-8c-0.552,0-1-0.447-1-1v-4c0-0.553,0.448-1,1-1h8c0.552,0,1,0.447,1,1v4C22,28.553,21.552,29,21,29z M14,27h6v-2   h-6V27z"/><path fill="#FFFFFF" d="M49,55H35c-1.654,0-3-1.346-3-3s1.346-3,3-3h14c1.654,0,3,1.346,3,3S50.654,55,49,55z M35,51c-0.552,0-1,0.448-1,1   s0.448,1,1,1h14c0.552,0,1-0.448,1-1s-0.448-1-1-1H35z"/><path fill="#FFFFFF" d="M51,43H33c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.552,0,1,0.447,1,1S51.552,43,51,43z"/><path fill="#FFFFFF" d="M54,47H33c-0.552,0-1-0.447-1-1s0.448-1,1-1h21c0.552,0,1,0.447,1,1S54.552,47,54,47z"/><path fill="#FFFFFF" d="M28,56H6c-0.552,0-1-0.447-1-1V40c0-0.553,0.448-1,1-1h22c0.552,0,1,0.447,1,1v15C29,55.553,28.552,56,28,56z M7,54h20V41   H7V54z"/><path fill="#FFFFFF" d="M19,25h-4c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1h4c0.552,0,1,0.447,1,1v3C20,24.553,19.552,25,19,25z M16,23h2v-1   h-2V23z"/><path fill="#FFFFFF" d="M21,52h-8c-0.552,0-1-0.447-1-1v-4c0-0.553,0.448-1,1-1h8c0.552,0,1,0.447,1,1v4C22,51.553,21.552,52,21,52z M14,50h6v-2   h-6V50z"/><path fill="#FFFFFF" d="M19,48h-4c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1h4c0.552,0,1,0.447,1,1v3C20,47.553,19.552,48,19,48z M16,46h2v-1   h-2V46z"/></g></svg>                               
                                <h4 className="uppercase font-bold">
                                SITE CATALOGUE
                                </h4>
                                <p className="font-normal">Création d'un catalogue de biens</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 text-white text-center flex mb-12 flex-col lg:flex-row">
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="800">
                                <svg className="mx-auto block" width="60px" viewBox="0 0 100 125"><g><path fill="#FFFFFF" d="M35.9,51.2c-1.3-2-3-3.7-5-5c-0.3-0.2-0.6-0.2-0.9,0c-2.5,1.8-5.6,2.9-8.9,2.9c-3.3,0-6.4-1.1-8.9-2.9     c-0.3-0.2-0.6-0.2-0.9,0C5.4,50,2.5,57.4,2.5,66c0,3.6,14.2,5,25,4.2C28,62.1,31,55.4,35.9,51.2z"/><circle fill="#FFFFFF" cx="21.1" cy="34.1" r="11.1"/><path fill="#FFFFFF" d="M88.7,46.2c-0.3-0.2-0.6-0.2-0.9,0c-2.5,1.8-5.6,2.9-8.9,2.9c-3.3,0-6.4-1.1-8.9-2.9c-0.3-0.2-0.6-0.2-0.9,0     c-2,1.3-3.6,3-5,5c4.9,4.2,7.9,10.9,8.4,19c10.9,0.8,25-0.5,25-4.2C97.5,57.4,94.6,50,88.7,46.2z"/><circle fill="#FFFFFF" cx="78.9" cy="34.1" r="11.1"/><path fill="#FFFFFF" d="M59.8,52.8c-0.3-0.2-0.6-0.2-0.9,0c-2.5,1.8-5.6,2.9-8.9,2.9c-3.3,0-6.4-1.1-8.9-2.9c-0.3-0.2-0.6-0.2-0.9,0     c-5.9,3.8-8.8,11.2-8.8,19.8c0,5.9,37.3,5.9,37.3,0C68.6,64.1,65.7,56.6,59.8,52.8z"/><circle fill="#FFFFFF" cx="50" cy="40.7" r="11.1"/></g></svg>
                                <h4 className="uppercase font-bold">
                                ESPACE COLLABORATIF
                                </h4>
                                <p className="font-normal">Favoriser la communication interne</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="1000">
                                <svg className="mx-auto block" width="60px" viewBox="0 0 100 125"><path fill="#FFFFFF" d="M76.6,44.7h-5.3V28.8C71.2,17,61.7,7.5,50,7.5S28.8,17,28.8,28.8v15.9h-5.3c-2.9,0-5.3,2.4-5.3,5.3v37.2  c0,2.9,2.4,5.3,5.3,5.3h53.1c2.9,0,5.3-2.4,5.3-5.3V50C81.9,47.1,79.5,44.7,76.6,44.7z M50,76.6c-2.9,0-5.3-2.4-5.3-5.3  s2.4-5.3,5.3-5.3s5.3,2.4,5.3,5.3S52.9,76.6,50,76.6z M60.6,44.7H39.4V28.8c0-5.9,4.8-10.6,10.6-10.6s10.6,4.8,10.6,10.6V44.7z"/></svg>                                
                                <h4 className="uppercase font-bold">
                                ESPACE MEMBRE
                                </h4>
                                <p className="font-normal">Création d’un espace personnalisé</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="1200">
                                <svg className="mx-auto block" width="60px" viewBox="0 0 100 125"><g><path fill="#FFFFFF" d="M95,21.6l-6.3,5.4v41.1H11.3V25h44.1l5.6-6.4h-52c-2.2,0-4,1.8-4,4.1v55.6c0,2.2,1.8,4,4,4h33v7.4h-7.3c-1.1,0-2,0.9-2,2     v3.8c0,1.1,0.9,2,2,2h30.7c1.1,0,2-0.9,2-2v-3.8c0-1.1-0.9-2-2-2h-7.3v-7.4h33c2.3,0,4.1-1.8,4.1-4V22.6     C95.1,22.3,95.1,22,95,21.6z M50,78c-1.6,0-2.8-1.2-2.8-2.8c0-1.5,1.2-2.8,2.8-2.8c1.5,0,2.8,1.3,2.8,2.8     C52.8,76.7,51.5,78,50,78z"/><path fill="#FFFFFF" d="M62.7,34.2c1.4,1.4,2.5,3,3.2,4.7l25.7-22.3c3.5-3.1,3.7-8.5,0.4-11.8c-3.3-3.3-8.7-3.1-11.8,0.4L58,31     C59.8,31.7,61.4,32.8,62.7,34.2z"/><path fill="#FFFFFF" d="M45.5,38.4c-3.9,3.9-2,10.5-8.4,15.3c-1.2,0.9-0.8,2.7,0.6,3c10,2.1,17.1-1.4,20.8-5.2c3.6-3.6,3.6-9.5,0-13.1     C55,34.7,49.1,34.7,45.5,38.4z"/></g></svg>                                
                                <h4 className="uppercase font-bold">
                                WEBDESIGN
                                </h4>
                                <p className="font-normal">Accompagnement de la refonte graphique</p>
                            </div>
                        </div>
                    </section>
                    <section className="h-full w-full mt-32 flex flex-col lg:flex-row">
                        <div className="w-fulllg:w-1/2  py-8 px-12 lg:px-24 mb-24 xl:px-48" data-aos="fade-right">
                            <h2 className="font-normal text-3xl my-2 uppercase"><span className="text-or">/</span>UN POSITIONNEMENT HAUT DE GAMME</h2>
                            <br/>
                            <p className="font-normal text-justify">
                                Accompagner Ledil.immo par une plateforme adaptée à son positionnement haut de gamme. 
                            </p>
                            <br/>
                            <ul className="font-normal text-justify">
                                <li className="flex flex-row">
                                <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#233951" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#233951" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Accompagnement dans l'application de la nouvelle charte graphique.  
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#233951" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#233951" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Valorisation des biens à travers des fiches de biens sur-mesure.
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#233951" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#233951" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Personnalisation de l’expérience utilisateur avec des modules additionnels.
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 mx-auto block order-first lg:order-last" data-aos="fade-left">
                            <img width="750px" className="pl-24 md:pr-0 md:ml-64 lg:ml-0 lg:pr-0 lg:pl-24 xl:pl-64 xl:ml-40 xl:pr-0 pb-16 xl:py-0 xl:pb-32" src={smartphone} alt="Création site internet Toulouse"/>
                        </div>
                    </section>
                    <section className="h-full w-full flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 mx-auto block" data-aos="fade-right">
                            <img className="w-full lg:w-3/4 mx-auto block px-24 xl:px-32 pb-16 xl:py-0 xl:pb-32" src={mockup} alt="Création site internet Toulouse"/>
                        </div>
                        <div className="w-full lg:w-1/2 px-12 lg:px-24 xl:px-48" data-aos="fade-left">
                            <h2 className="font-normal text-3xl my-2 uppercase"><span className="text-ledil">/</span>Création d’un espace mandataire</h2>
                            <br/>
                            <p className="font-normal text-justify">
                                Mettre en place un espace communautaire accessible aux membres avec la création de profils personnels.
                            </p>
                            <br/>
                            <ul className="font-normal text-justify">
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#d0a104" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#d0a104" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Mise en place d’un tableau de bord individualisé.
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#d0a104" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#d0a104" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Module de suivi des ventes et de l’activité.
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#d0a104" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#d0a104" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Système de foire aux questions visant à favoriser la collaboration entre les membres.
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className=" w-full h-full flex flex-col justify-center items-end px-4 pt-12 pb-0 bg-cover mt-24" style={{ background: '#000000e6 url( ' + bloccontact + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundRepeat:'no-repeat' }}>
                        <div className="max-w-5xl mx-auto flex items-center flex-col py-6" data-aos="fade-down" >
                            <br/>
                            <svg className="mx-auto block" width="80px" viewBox="0 0 100 125"><path fill="#FFFFFF" d="M64.84509,52.57434H54.45068c2.20191-7.42346,6.02661-12.75745,10.39441-13.81421Zm0,3.17908H53.63623a52.05778,52.05778,0,0,0-1.14429,9.53711H64.84509Zm0,39.24658V81.18573H54.45068C56.65259,88.60925,60.47729,93.94324,64.84509,95Zm0-26.5304H52.49194a52.05831,52.05831,0,0,0,1.14429,9.53711H64.84509ZM37.86963,65.29053H49.30945a56.25569,56.25569,0,0,1,1.04309-9.53711H40.07544A28.41134,28.41134,0,0,0,37.86963,65.29053Zm2.20581,12.71618h10.2771a56.25569,56.25569,0,0,1-1.04309-9.53711H37.86963A28.41168,28.41168,0,0,0,40.07544,78.00671ZM68.02417,65.29053h12.353a52.02563,52.02563,0,0,0-1.14429-9.53711H68.02417Zm0-26.5304V52.57434H78.41846C76.21667,45.15088,72.39185,39.81689,68.02417,38.76013ZM57.718,39.631A28.74514,28.74514,0,0,0,41.67236,52.57434h9.429C52.57581,47.14423,54.87463,42.65784,57.718,39.631Zm0,54.49811c-2.84339-3.02686-5.14221-7.51318-6.6167-12.94336h-9.429A28.74465,28.74465,0,0,0,57.718,94.12909ZM91.19678,81.18573H81.76807c-1.47461,5.43018-3.77344,9.9165-6.61682,12.94336A28.744,28.744,0,0,0,91.19678,81.18573Zm0-28.61139A28.7445,28.7445,0,0,0,75.15125,39.631c2.84338,3.02686,5.14221,7.51325,6.61682,12.94336Zm1.597,3.17908h-10.277a56.24475,56.24475,0,0,1,1.043,9.53711h11.4397A28.4081,28.4081,0,0,0,92.79382,55.75342ZM68.02417,78.00671H79.23291A52.02616,52.02616,0,0,0,80.3772,68.4696h-12.353ZM94.99951,68.4696H83.55981a56.24475,56.24475,0,0,1-1.043,9.53711h10.277A28.40844,28.40844,0,0,0,94.99951,68.4696ZM68.02417,95c4.36768-1.05676,8.1925-6.39075,10.39429-13.81427H68.02417ZM4.99951,75.85107V12.41455A7.42307,7.42307,0,0,1,12.41455,5H87.58447a7.42307,7.42307,0,0,1,7.415,7.41455v39.708a32.2972,32.2972,0,0,0-5-7.10376V22.553h-80V75.85107a2.41719,2.41719,0,0,0,2.415,2.41456H36.3584a32.05257,32.05257,0,0,0,2.41333,5H12.41455A7.42308,7.42308,0,0,1,4.99951,75.85107Zm45-59.27685A1.51083,1.51083,0,0,0,51.51025,18.085H84.489a1.5107,1.5107,0,0,0,1.5105-1.51074V13.59546A1.5105,1.5105,0,0,0,84.489,12.085H51.51025a1.51062,1.51062,0,0,0-1.51074,1.5105ZM35.61658,15.085a3,3,0,1,0,3-3A3.00007,3.00007,0,0,0,35.61658,15.085Zm-11,0a3,3,0,1,0,3-3A3.00007,3.00007,0,0,0,24.61658,15.085Zm-11,0a3,3,0,1,0,3-3A3.00007,3.00007,0,0,0,13.61658,15.085Z"/></svg>
                            <h2 data-aos='fade-right' className="text-center text-white text-2xl md:text-5xl century">
                                Vous souhaitez mettre en place un projet similaire à celui-ci ? Travaillons ensemble !
                            </h2>
                        </div>
                        <div className="max-w-6xl mx-auto flex text-center my-12" data-aos="zoom-in">
                            {/* <RappelForm /> */}
                            <RoundButton color="white" colortext="black" url="/contact-agence-web-toulouse/" text="Je veux améliorer ma visibilité sur internet" />
                        </div>
                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start text-center my-12">
                            <div className="w-full sm:w-1/3 px-6 sm:px-12 py-2 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                                <Link to="/agence-web-toulouse/">
                                    <svg className="mx-auto block" viewBox="0 0 100 125" width="80px"><path fill="#FFFFFF" d="M9.72,57.45a2.31,2.31,0,0,0,.86-3.15l-.58-1,7.8-1.44,1.54,2.69a9.71,9.71,0,0,0,18-6.29l16.9-3.11,1.18,2.06a2.31,2.31,0,1,0,4-2.29L37.67,6.81a2.31,2.31,0,0,0-4,2.29l1,1.71-29.48,34-.38-.66a2.31,2.31,0,1,0-4,2.29L6.57,56.59A2.31,2.31,0,0,0,9.72,57.45Zm23.11-8.37a5.1,5.1,0,0,1-9.48,3.16L22.61,51ZM53.61,23a2.55,2.55,0,0,1,.95-3.48l7.58-4.33a2.55,2.55,0,1,1,2.53,4.42L57.08,24A2.55,2.55,0,0,1,53.61,23Zm-4.19-5.21a2.52,2.52,0,0,1-.27-3.43l5.58-7a2.52,2.52,0,1,1,3.94,3.14l-5.58,7a2.53,2.53,0,0,1-1.77.94h-.19A2.53,2.53,0,0,1,49.42,17.81ZM56,29.27a2.52,2.52,0,0,1,2.11-3L66.94,25a2.52,2.52,0,1,1,.71,5l-8.86,1.26-.35,0A2.53,2.53,0,0,1,56,29.27Zm-30,65.09A2.93,2.93,0,0,1,23,91.42V81.19a2.93,2.93,0,0,1,2.93-2.93h7.94a2.93,2.93,0,0,1,2.93,2.93V91.42a2.93,2.93,0,0,1-2.93,2.93Zm19.67,0a2.93,2.93,0,0,1-2.93-2.93V77.76a2.93,2.93,0,0,1,2.93-2.93h7.94a2.93,2.93,0,0,1,2.93,2.93V91.42a2.93,2.93,0,0,1-2.93,2.93ZM76.17,70V91.42a2.93,2.93,0,0,1-2.93,2.93H65.29a2.93,2.93,0,0,1-2.93-2.93V70a2.93,2.93,0,0,1,2.93-2.93h7.94A2.93,2.93,0,0,1,76.17,70ZM95.84,55.46v35.9a3,3,0,0,1-2.93,3H85a3,3,0,0,1-2.93-3V55.46a3,3,0,0,1,2.93-3H92.9A3,3,0,0,1,95.84,55.46Zm3.63-19A3,3,0,0,1,97.16,40a3,3,0,0,1-3.56-2.3L92.38,32A84.28,84.28,0,0,1,71.72,54.85,79.16,79.16,0,0,1,48.61,66.91,77.28,77.28,0,0,1,25,70.9c-1.35,0-2.15-.05-2.23-.06a3,3,0,0,1,.43-6s.59,0,1.67,0a72.67,72.67,0,0,0,22-3.74c16.92-5.6,30.5-16.48,40.38-32.36L81.71,30a3,3,0,0,1-1.25-5.86l12.73-2.72a3,3,0,0,1,3.56,2.3Z"/></svg>
                                    <p className="text-xl text-white century pt-3">WEBMARKETING</p>
                                </Link>
                            </div>
                            <div className="w-full sm:w-1/3 sm:px-12 py-2 flex flex-col items-center justify-center sm:my-0 my-6" data-aos='zoom-in' data-aos-delay="400">
                                <Link to="/referencement-de-site-internet-47-31/">
                                    <svg className="mx-auto block" width="80px" viewBox="0 0 1024 1280"><g><g><g><path fill="#FFFFFF" d="M746.5,322c11.7,29,19.7,59.3,24,90.3c-0.6-4.4-1.2-8.9-1.8-13.3c4.4,33.2,4.4,66.9,0,100.1     c0.6-4.4,1.2-8.9,1.8-13.3c-4.5,33-13.3,65.2-26.2,95.8c1.7-4,3.4-8,5-11.9c-12.4,29-28.3,56.3-47.5,81.3     c2.6-3.4,5.2-6.7,7.8-10.1c-19.8,25.6-42.7,48.6-68.3,68.4c3.4-2.6,6.7-5.2,10.1-7.8c-25.5,19.6-53.4,35.9-83,48.4     c4-1.7,8-3.4,11.9-5c-30.3,12.6-62,21.3-94.5,25.7c4.4-0.6,8.9-1.2,13.3-1.8c-33.2,4.4-66.8,4.4-100,0c4.4,0.6,8.9,1.2,13.3,1.8     c-32.5-4.4-64.3-13.1-94.5-25.7c4,1.7,8,3.4,11.9,5c-29.6-12.5-57.5-28.8-83-48.4c3.4,2.6,6.7,5.2,10.1,7.8     c-25.4-19.7-48.3-42.6-68-68c2.6,3.4,5.2,6.7,7.8,10.1c-19.6-25.5-35.9-53.4-48.4-83c1.7,4,3.4,8,5,11.9     c-12.6-30.3-21.3-62-25.7-94.5c0.6,4.4,1.2,8.9,1.8,13.3c-4.4-33.2-4.4-66.8,0-100c-0.6,4.4-1.2,8.9-1.8,13.3     c4.4-32.5,13.1-64.3,25.7-94.5c-1.7,4-3.4,8-5,11.9c12.5-29.6,28.8-57.5,48.4-83c-2.6,3.4-5.2,6.7-7.8,10.1     c19.7-25.4,42.6-48.3,68-68c-3.4,2.6-6.7,5.2-10.1,7.8c25.5-19.6,53.4-35.9,83.1-48.4c-4,1.7-8,3.4-11.9,5     c30.4-12.7,62.2-21.3,94.9-25.7c-4.4,0.6-8.9,1.2-13.3,1.8c32.9-4.3,66.2-4.3,99.1,0c-4.4-0.6-8.9-1.2-13.3-1.8     c33.1,4.5,65.5,13.3,96.2,26.2c-4-1.7-8-3.4-11.9-5c3.6,1.6,7.3,3.2,10.9,4.8c5.7,3.7,11.9,5.6,18.6,5.9     c6.6,1.5,13.3,1.2,19.9-0.9c11.6-3.2,24.2-12.2,29.9-23c6.1-11.6,9.2-25.7,5-38.5c-3.8-11.7-11.3-24.5-23-29.9     C595.6,51.1,559,38.5,520.5,32.5c-38.3-6-76.6-8.3-115.2-3.7c-38.8,4.6-76.4,12.7-112.6,27.7c-19.7,8.1-39,16.9-57.4,27.7     c-19,11.2-36.7,24.2-54,38C121.6,169.8,77.6,234.8,51.1,306.2C38.4,340.5,31.5,376.4,28,412.8c-3.6,36.6-1.1,73,4.8,109.2     c5.9,36.4,17.6,71,32.7,104.6c15.4,34.4,36.2,65.5,60.1,94.5c48,58.4,112.6,101.4,183.4,127c34.6,12.5,70.8,19.3,107.4,22.5     c36.3,3.2,72.6,0.5,108.5-5.5c73.5-12.4,141.7-46.6,198.6-94.1c61-51,106-120.7,129.8-196.3c23.3-74.1,24.8-155.2,5.8-230.4     c-4.2-16.6-9.6-32.9-16-48.9c-1.5-6.5-4.5-12.2-8.9-17c-3.5-5.4-8.2-9.7-14-12.9c-10.7-6.3-26.5-8.9-38.5-5     c-12.1,3.9-23.8,11.4-29.9,23C745.7,294.6,741.6,309.8,746.5,322L746.5,322z"/></g></g><g><g><path fill="#FFFFFF" d="M983.2,912.5c-26.5-26.5-53.1-53.1-79.6-79.6c-42.2-42.2-84.4-84.4-126.6-126.6     c-9.6-9.6-19.2-19.2-28.7-28.7c-9.1-9.1-22.5-14.6-35.4-14.6c-12.3,0-26.9,5.4-35.4,14.6c-8.7,9.5-15.2,22-14.6,35.4     c0.6,13.3,5.1,25.8,14.6,35.4c26.5,26.5,53.1,53.1,79.6,79.6c42.2,42.2,84.4,84.4,126.6,126.6c9.6,9.6,19.2,19.2,28.7,28.7     c9.1,9.1,22.5,14.6,35.4,14.6c12.3,0,26.9-5.4,35.4-14.6c8.7-9.5,15.2-22,14.6-35.4C997.2,934.5,992.7,922,983.2,912.5     L983.2,912.5z"/></g></g><g><g><g><path fill="#FFFFFF" d="M322.7,568c22.6-22.6,45.2-45.2,67.8-67.8c36-36,72-72,107.9-107.9c8.2-8.2,16.4-16.4,24.6-24.6      c-23.6,0-47.1,0-70.7,0c15.6,15.6,31.2,31.2,46.8,46.8c24.9,24.9,49.8,49.8,74.7,74.7c5.7,5.7,11.5,11.5,17.2,17.2      c19.1,19.1,51.6,19.1,70.7,0c10.6-10.6,21.3-21.3,31.9-31.9c25.6-25.6,51.1-51.1,76.7-76.7c30.9-30.9,61.8-61.8,92.8-92.8      c26.7-26.7,53.4-53.4,80.1-80.1c12.9-12.9,26.1-25.7,38.8-38.8c0.2-0.2,0.4-0.4,0.6-0.6c9.1-9.1,14.6-22.5,14.6-35.4      c0-12.3-5.4-26.9-14.6-35.4c-9.5-8.7-22-15.2-35.4-14.6c-13.3,0.6-25.8,5.1-35.4,14.6c-10.6,10.6-21.3,21.3-31.9,31.9      c-25.6,25.6-51.1,51.1-76.7,76.7c-30.9,30.9-61.8,61.8-92.8,92.8c-26.7,26.7-53.4,53.4-80.1,80.1      c-12.9,12.9-26.1,25.7-38.8,38.8c-0.2,0.2-0.4,0.4-0.6,0.6c23.6,0,47.1,0,70.7,0c-15.6-15.6-31.2-31.2-46.8-46.8      c-24.9-24.9-49.8-49.8-74.7-74.7c-5.7-5.7-11.5-11.5-17.2-17.2c-19.1-19.1-51.6-19.1-70.7,0c-22.6,22.6-45.2,45.2-67.8,67.8      c-36,36-72,72-107.9,107.9c-8.2,8.2-16.4,16.4-24.6,24.6c-9.1,9.1-14.6,22.5-14.6,35.4c0,12.3,5.4,26.9,14.6,35.4      c9.5,8.7,22,15.2,35.4,14.6C300.6,582,313.1,577.6,322.7,568L322.7,568z"/></g></g><g><g><path fill="#FFFFFF" d="M797.8,199.7c43.7,0,87.5,0,131.2,0c6.3,0,12.5,0,18.8,0c-16.7-16.7-33.3-33.3-50-50      c0,43.7,0,87.5,0,131.2c0,6.3,0,12.5,0,18.8c0,12.8,5.6,26.3,14.6,35.4c8.7,8.7,22.9,15.2,35.4,14.6      c12.9-0.6,26.3-4.8,35.4-14.6c9-9.8,14.6-21.8,14.6-35.4c0-43.7,0-87.5,0-131.2c0-6.3,0-12.5,0-18.8c0-27-22.9-50-50-50      c-43.7,0-87.5,0-131.2,0c-6.3,0-12.5,0-18.8,0c-12.8,0-26.3,5.6-35.4,14.6c-8.7,8.7-15.2,22.9-14.6,35.4      c0.6,12.9,4.8,26.3,14.6,35.4C772.2,194,784.3,199.7,797.8,199.7L797.8,199.7z"/></g></g></g></g></svg>
                                    <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT NATUREL</p>
                                </Link>
                            </div>
                            <div className="w-full sm:w-1/3 px-12 py-2 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="600">
                                <Link to="/agence-adwords-47-31/">
                                    <svg className="mx-auto block" width="80px" viewBox="0 0 100 125"><path fill="#FFFFFF" d="M84.9,18.3l7.2-4c1-0.5,2.2-0.2,2.7,0.8l0,0c0.5,1,0.2,2.2-0.8,2.7l-7.2,4c-1,0.5-2.2,0.2-2.7-0.8l0,0  C83.6,20.1,84,18.8,84.9,18.3z M83.2,15.9l5.3-6.5c0.7-0.8,0.6-2-0.2-2.7c-0.8-0.8-2.2-0.7-2.9,0.2l-5.3,6.5c-0.7,0.8-0.6,2,0.2,2.7  C81.1,16.8,82.5,16.8,83.2,15.9z M98.5,25.2c-0.2-1-1.2-1.7-2.2-1.6l-8.3,1c-1.2,0.1-1.9,1.2-1.7,2.4c0.2,1,1.2,1.7,2.2,1.6l8.3-1  C98,27.5,98.8,26.4,98.5,25.2z M49.8,93.9h8.6c4.6,0,8.3-3.7,8.3-8.3V85l-5,2.5L49.8,93.9z M86.2,41.2c0.5,1,0.3,2.2-0.6,2.8  c-1,0.7-2.3,0.4-2.9-0.6c0,0,0,0,0,0c-8.8-2.3-18.3,0.1-23.8,2.1c0,0,0,0,0,0.1l0.9,1.7c0,0,0,0,0,0.1l-4.2,2.3c0,0,0,0,0,0.1  l4.9,5.3c0,0,0,0,0,0c2-1.5,5.6-3.7,8.1-3.1c2.9,0.7,2.8,3.7,2.8,4c0,0,0,0,0,0c0.4,0.1,4.1,1.2,3,5.5c0,0,0,0,0,0  c0.3,0.2,3.4,2.2,1.6,6.2c0,0,0,0,0,0c0.3,0.3,3.6,3.5-1.5,7.9c-1.6,1.3-3.8,2.6-6,3.5c0,0,0,0,0,0l-8.8,4.4c0,0,0,0,0,0l-8.9,4.8  h0.1l-1.3,0.7l-8.8,4.8c0,0,0,0,0,0h-0.4h-4.5H9.7c-1,0-1.9-0.2-2.8-0.5c-3.2-1.2-5.5-4.2-5.5-7.8V41.7c0-4.7,3.8-8.4,8.4-8.4h22.3  c-0.4,0.7-0.8,1.4-1,2.2c-0.5,1.8-0.5,3.7,0.1,5.5c-0.3,0.5-0.6,1-0.7,1.6c-0.4,1.5-0.3,3.1,0.5,4.5l1.2,2.1H6.9v34.3v1.1  c0,2.1,1.7,3.8,3.8,3.8h4.6l29.3-15.7c1.1-0.6,1.9-1.6,2.3-2.8c0.1-0.5,0.2-0.9,0.2-1.2c0-0.2-0.1-0.4-0.1-0.6v0  c-0.1-0.8-0.1-1.9,0.2-3.1c0,0,2-6.1,6.2-7.8c0,0,0,0,0-0.1L49.4,53c0,0,0,0,0,0l-1,0.5c-2.3,1.3-5.2,0.4-6.5-1.9l-0.8-1.5  c0,0,0,0-0.1,0l-1.2,0.7c-0.8,0.4-1.8,0.1-2.2-0.6L34.8,45c-0.4-0.8-0.1-1.8,0.6-2.2l1.2-0.7c0,0,0,0,0-0.1l-1-1.8  c-1.3-2.3-0.4-5.2,1.9-6.5L49,27.5c0,0,0,0,0.1,0l0.9,1.7c0,0,0,0,0.1,0c4.6-3.6,11.7-10.3,14.5-19c0,0,0,0,0,0  c-0.5-1,0-2.3,1.1-2.8c1-0.4,2.2,0.1,2.7,1L74.1,19c0,0,0,0,0,0c2.8-0.4,5.7,0.9,7.1,3.6c1.4,2.6,1,5.8-0.8,7.9c0,0,0,0,0,0  L86.2,41.2z M53.1,45.2l-6-10.9c0,0,0,0-0.1,0l-6.8,3.8c0,0,0,0,0,0.1l6,10.9c0,0,0,0,0.1,0L53.1,45.2  C53.1,45.3,53.1,45.2,53.1,45.2z M21.9,41.4c0,1.3,1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4  C23,39,21.9,40.1,21.9,41.4z M14.9,41.4c0,1.3,1.1,2.4,2.4,2.4h0c1.2,0,2.1-0.8,2.3-1.9c0-0.2,0-0.3,0-0.5c0-0.2,0-0.3,0-0.5  c-0.2-1.1-1.2-1.9-2.3-1.9h0C16,39,14.9,40.1,14.9,41.4z M8,41.4c0,1.3,1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4  c0-1.3-1.1-2.4-2.4-2.4C9,39,8,40.1,8,41.4z"/></svg>
                                    <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT GOOGLE ADS</p>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-around md:justify-between mt-24">
                            <div className="text-center py-3 px-4 font-bold flex flex-col mx-5 bg-white w-1/3 lg:1/6 xl:w-1/12 hover:text-bleu" ata-aos="fade-right">
                                <Link><svg style={{maxWidth:'25px'}} className="mx-auto inline-block align-text-middle" width="20px" viewBox="0 0 40 50" x="0px" y="0px"><g fill="#000000" fill-rule="evenodd"><path fill="#000000" d="m20 0c-11.05 0-20 8.954-20 20 0 11.05 8.954 20 20 20 11.05 0 20-8.954 20-20 0-11.05-8.954-20-20-20m5.056 9.981c.725.715.725 1.874 0 2.588l-7.966 7.853 7.966 7.853c.725.715.725 1.874 0 2.589-.725.715-1.901.715-2.626 0l-9.279-9.147c-.725-.715-.725-1.874 0-2.589l9.279-9.147c.362-.358.838-.536 1.313-.536.475 0 .95.179 1.313.536"/></g></svg></Link>
                                <Link className="mx-auto block" to="/realisations/gabriel-services/">Précédent</Link>
                            </div>
                            <div className="text-center py-3 font-bold flex flex-col bg-white w-1/3 lg:1/6 xl:w-1/12 hover:text-bleu" data-aos="fade-left">
                                <Link className="mx-auto block order-last" to="/realisations/csd-menuiserie/">Suivant</Link>
                                <Link className="mx-auto inline-block align-text-middle"><svg style={{maxWidth:'25px'}} width="20px" viewBox="0 0 0.689 0.86125" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd"><defs></defs><g><path class="fil0" d="M0.46 0.367l-0.148 0.147c-0.012,0.013 -0.032,0.013 -0.044,0 -0.012,-0.012 -0.012,-0.032 0,-0.044l0.126 -0.125 -0.126 -0.126c-0.012,-0.012 -0.012,-0.032 0,-0.044 0.012,-0.012 0.032,-0.012 0.044,0l0.148 0.147c0.012,0.013 0.012,0.032 0,0.045zm-0.46 -0.022c0,0.095 0.039,0.181 0.101,0.243 0.062,0.063 0.148,0.101 0.244,0.101 0.095,0 0.181,-0.038 0.243,-0.101 0.063,-0.062 0.101,-0.148 0.101,-0.243 0,-0.096 -0.038,-0.182 -0.101,-0.244 -0.062,-0.062 -0.148,-0.101 -0.243,-0.101 -0.096,0 -0.182,0.039 -0.244,0.101 -0.062,0.062 -0.101,0.148 -0.101,0.244z"/></g></svg></Link>
                            </div>
                        </div>
                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsledilimmo {
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
export default ledilimmo;
