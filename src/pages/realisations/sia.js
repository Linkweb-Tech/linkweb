import React from "react";
import { Link, graphql } from "gatsby";
import posed from 'react-pose';
import Layout from "../../components/layout";
import RoundButton from "../../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../../components/seo";
import "../../scss/barre.scss";


import logolinkweb from "../../images/logo-linkweb.png";
import Bg from "../../images/background-atpt.jpg";
import bgbloc from "../../images/fond-bloc-sia.jpg";
import mockup from "../../images/mockup-sia.jpg";
import imac from "../../images/accueil-sia.jpg";
import bloccontact from '../../images/sia-chercheur.jpg';
import logo from '../../images/logo-sia.png';
import logosia from '../../images/logo-sia.png';
import logoatpt from '../../images/logo-atpt-blanc.png';
import logosdis from '../../images/logo-sdis47-real.png';
import logofaivre from '../../images/faivre-creations.png';
import logogabrielservices from '../../images/logo-gs.png';
import logoledil from '../../images/logo-ledil.png';
import logocsd from '../../images/logo-csd.png';



class sia extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Nos Réalisations - SIA Échanges Pédagogiques - Linkweb"
                    description="Le site de SIA Échanges Pédagogiques est l'une de nos réalisations. Vous souhaitez un projet similaire ?"
                    keywords={[`Référencement Agen`, `Référencement Toulouse`, `Agence de Référencement Agen`, `Agence de Référencement Toulouse`, `Référencement Google`]}
                    url="https://linkweb.fr/realisations/sia/"
                    nom="SIA Échanges Pédagogiques"
                    slug="/realisations/sia/"
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
                    <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ background:'#bd1120e6 url(' + Bg + ')', backgroundRepeat:'no-repeat', backgroundBlendMode:'overlay', backgroundSize:'cover', backgroundPosition:'center' }}>
                        <div>
                                <Link className="invisible md:visible" to="/"><img className="mx-auto block" width="120px" src={logolinkweb} alt="création site internet Toulouse" data-aos="zoom-in"/></Link>
                            <br/>
                            <a href="/agence-de-communication-agen-47-toulouse-31/" className="mt-24 font-normal century text-sm sm:text-md text-center text-white mx-auto block hover:text-bleu" data-aos="zoom-in" data-aos-delay="900"><span className="text-bleu font-bold">>></span> Revenir aux réalisations</a>
                            <h1 data-aos="fade-down" data-aos-delay="500" className="century pt-16 mx-auto block font-bold text-3xl sm:text-6xl md:text-6xl lg:text-6xl text-center text-white">
                                SIA ÉCHANGES PÉDAGOGIQUES
                            </h1>
                            <h2 className="text-white text-center font-normal"><em><span className="text-xl md:text-4xl sm:text-3xl">Université Fédérale de Toulouse Midi-Pyrénées</span></em></h2>
                            <h3 data-aos="fade-up" className="italic font-normal text-center text-lg sm:text-2xl text-white my-12">Développer une interface d’accompagnement des enseignants chercheurs pour favoriser les échanges pédagogiques.</h3>
                            <br/>
                            <a data-aos="fade-down" href="/realisations/sia/#start"><svg className="mx-auto block" width="60px" viewBox="0 0 100 125"><g><g><path fill="#FFFFFF" d="M59.3,46.5l-8.7,8.7l-8.7-8.7c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l10.1,10.1c0.4,0.4,0.9,0.6,1.4,0.6    s1-0.2,1.4-0.6l10.1-10.1c0.8-0.8,0.8-2,0-2.8C61.4,45.7,60.1,45.7,59.3,46.5z M50.8,5c-24.9,0-45,20.1-45,45    c0,24.9,20.1,45,45,45c24.9,0,45-20.1,45-45C95.8,25.1,75.6,5,50.8,5z M50.8,91c-22.6,0-41-18.4-41-41s18.4-41,41-41    s41,18.4,41,41S73.4,91,50.8,91z"/></g></g></svg></a>
                        </div>
                        <li className="hidden lg:block toggleable">
                                <input type="checkbox" value="selected" id="toggle-one" className="toggle-input hidden"/>
                                    <label for="toggle-one" className="toogle-input block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">
                                        <div className="cursor-pointer fixed h-auto z-40 py-16 font-bold px-2 font-bold" style={{background:'#FFFFFF',bottom:'315px', writingMode:'vertical-rl', textOrientation: 'sideways', borderTopLeftRadius:'15px', borderBottomLeftRadius:'15px'}}>
                                            <p style={{transform:'rotate(180deg'}}>Nos réalisations</p>
                                        </div>
                                    </label>
                                <div role="toggle" className="toggle-input megamenu fixed h-auto z-40 p-2 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800" style={{background:'#b71c3094', maxWidth:'100px', borderRadius:'15px'}}>
                                    <div className="flex flex-col py-6" style={{overflow:'hidden'}}>
                                        <Link to="/realisations/sia/"><img className="zoom py-3 w-3/4 mx-auto block" src={logosia} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/atpt/"><img className="zoom py-3 w-3/4 mx-auto block" src={logoatpt} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/sdis47/"><img className="zoom py-3 w-3/4 mx-auto block" src={logosdis} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/groupe-faivre-environnement/"><img className="zoom py-3 w-3/4 mx-auto block" src={logofaivre} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/gabriel-services/"><img className="zoom py-3 w-3/4 mx-auto block" src={logogabrielservices} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/ledilimmo/"><img className="zoom py-3 w-3/4 mx-auto block" src={logoledil} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/csd-menuiserie/"><img className="zoom py-3 w-1/2 mx-auto block" src={logocsd} alt="Création site internet Toulouse" /></Link>
                                    </div>
                                </div>
                            </li>
                    </section>
                    <section className="w-full flex flex-col md:flex-row mt-12">
                        <div className="w-full md:w-11/12 px-4 py-2 md:py-6 my-2 ml-0 md:ml-24 lg:ml-32 md:my-4 flex flex-col order-last md:order-first">
                            <h3 data-aos='fade-right' className="text-center text-2xl md:text-4xl mx-12 md:mx-24 century">
                            Mise en place d’une <strong className="text-rouge">plateforme de soutien</strong> destinée aux enseignants chercheurs
                            </h3>
                            <br/>
                        </div>
                        <div className="w-full md:w-1/12 mx-auto mr-10 py-6 mb-4 -mt-24" id="start" data-aos="zoom-in">
                            <img src={logo} className="mx-auto block md:mx-0" />
                        </div>
                    </section>
                    <section className="w-full mt-16 flex flex-col md:flex-row justify-center items-center">
                            <a className="text-white font-bold w-1/2 md:w-1/6 bg-rouge mx-12 p-3 text-center" data-aos="zoom-in" style={{borderRadius:'15px'}} href="https://sia.univ-toulouse.fr/" target="blank" rel="noopener noreferrer">Voir le site</a>
                            <Link className="text-white font-bold w-1/2 md:w-1/6 bg-rouge mx-12 my-6 text-center p-3" data-aos="zoom-in" data-aos-delay="500" style={{borderRadius:'15px'}} to="/contact-agence-web-toulouse/">J'ai une question</Link>
                    </section>
                    <section className="w-full mt-24">
                        <div className="w-full lg:w-2/3 bg-rouge text-white px-12 md:px-24 py-12" data-aos="fade-right" data-aos-delay="100">
                            <h2 className="font-bold text-center md:text-left text-2xl md:text-3xl my-6 uppercase"><span className="text-white">/</span>Valoriser l’offre de formation</h2>
                            <br/>
                            <p className="font-normal text-justify">
                            L’Unviersité de Toulouse a confié à Linkweb la création de sa plateforme destinée aux enseignants chercheurs avec une double volonté :  
                            </p>
                            <br/>
                            <br/>
                            <ul className="font-normal text-justify">
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#FFFFFF" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#FFFFFF" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Faire connaître et valoriser l’offre de formation sur la pédagogie 
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#FFFFFF" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#FFFFFF" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Définir un lieu d’échange privilégié à destination des enseignants chercheurs
                                </li>
                            </ul>
                            <br/>
                            <element className="flex flex-col md:flex-row mt-24 mb-8">
                                <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up">
                                    <svg className="mx-auto block" width="80px" viewBox="0 0 100 125" ><g><path fill="#FFFFFF" d="M50,0C22.9,0,1,21.9,1,49s21.9,49,49,49S99,76,99,49S77.1,0,50,0z M66.4,78.2c0,2.2-1.8,3.9-3.9,3.9h-25   c-2.2,0-3.9-1.8-3.9-3.9V21.5c0-2.2,1.8-3.9,3.9-3.9h25c2.2,0,3.9,1.8,3.9,3.9V78.2z"/><rect fill="#FFFFFF" x="35.9" y="25.9" width="28.3" height="45.5"/><circle fill="#FFFFFF" cx="50" cy="77.2" r="2.7"/><path fill="#FFFFFF" d="M44.3,22.7h11.3c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7H44.3c-0.4,0-0.7,0.3-0.7,0.7C43.7,22.4,44,22.7,44.3,22.7z"/></g></svg>
                                    <h4 className="text-center mt-4 font-bold text-lg">Responsive Design</h4>
                                </div>
                                <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up" data-aos-delay="500">
                                    <svg className="mx-auto block" width="80px" viewBox="0 0 64 80" ><g><path fill="#FFFFFF" d="M 32,5 A 26.999998,26.999998 0 0 0 4.9999998,32 26.999998,26.999998 0 0 0 32,59 26.999998,26.999998 0 0 0 59,32 26.999998,26.999998 0 0 0 32,5 Z m -1.8848,11.335938 c 7.5986,0 13.7793,6.180712 13.7793,13.779292 0,3.44001 -1.2756,6.58116 -3.3672,8.99805 l 6.834,6.83399 a 1.0000999,1.0000999 0 1 1 -1.414,1.41406 l -6.834,-6.83399 c -2.4169,2.09159 -5.5581,3.36719 -8.9981,3.36719 -7.5986,0 -13.7793,-6.18071 -13.7793,-13.7793 0,-7.59858 6.1807,-13.779292 13.7793,-13.779292 z m 0,2 c -6.5177,0 -11.7793,5.261592 -11.7793,11.779292 0,6.51771 5.2616,11.7793 11.7793,11.7793 3.1721,0 6.041,-1.25236 8.1563,-3.2832 a 1.0000999,1.0000999 0 0 1 0.3359,-0.33594 c 2.0331,-2.11566 3.2871,-4.98606 3.2871,-8.16016 0,-6.5177 -5.2616,-11.779292 -11.7793,-11.779292 z m 1.459,1.134765 a 1.0000999,1.0000999 0 0 1 0.1992,0.01367 c 5.2345,0.814995 9.1023,5.333065 9.1153,10.628905 v 0.002 0.004 c 0,0.55409 -0.047,1.10527 -0.1328,1.64844 a 1.0000999,1.0000999 0 1 1 -1.9747,-0.3125 c 0.07,-0.44165 0.1075,-0.88866 0.1075,-1.33789 v -0.002 -0.002 c -0.013,-4.32646 -3.15,-7.98691 -7.4239,-8.65234 a 1.0000999,1.0000999 0 0 1 0.1094,-1.990237 z"/></g></svg>                                    
                                    <h4 className="text-center my-4 font-bold text-lg">Système de recherche avancée</h4>
                                </div>
                                <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up" data-aos-delay="1000">
                                    <svg className="mx-auto block" viewBox="0 0 128 160" width="80px"><g><path fill="#FFFFFF" d="M64,4C30.9,4,4,30.9,4,64s26.9,60,60,60s60-26.9,60-60S97.1,4,64,4z M34,47.1V30.9c0-2,1.7-3.7,3.7-3.7H62   c2,0,3.7,1.7,3.7,3.7v16.2c0,2-1.7,3.7-3.7,3.7H37.6C35.6,50.8,34,49.1,34,47.1z M71.4,75.8c0.5,0,1,0.4,1,1c0,0.5-0.4,1-1,1H50.8   v14.2h20.6c0.5,0,1,0.4,1,1c0,0.5-0.4,1-1,1H49.8c-0.5,0-1-0.4-1-1V59.3v-5.4c0-0.5,0.4-1,1-1c0.5,0,1,0.4,1,1v4.4h20.6   c0.5,0,1,0.4,1,1s-0.4,1-1,1H50.8v15.6H71.4z M94,97.1c0,2-1.7,3.7-3.7,3.7H79.5c-2,0-3.7-1.7-3.7-3.7v-6.8c0-2,1.7-3.7,3.7-3.7   h10.8c2,0,3.7,1.7,3.7,3.7V97.1z M94,79.5c0,2-1.7,3.7-3.7,3.7H79.5c-2,0-3.7-1.7-3.7-3.7v-6.8c0-2,1.7-3.7,3.7-3.7h10.8   c2,0,3.7,1.7,3.7,3.7V79.5z M94,62c0,2-1.7,3.7-3.7,3.7H79.5c-2,0-3.7-1.7-3.7-3.7v-6.8c0-2,1.7-3.7,3.7-3.7h10.8   c2,0,3.7,1.7,3.7,3.7V62z"/></g></svg>
                                    <h4 className="text-center my-4 font-bold text-lg">Publications adaptées aux profils d’enseignants</h4>
                                </div>
                            </element>
                        </div>
                    </section>
                    <section className="flex flex-col items-center md:flex-row my-12 md:my-24">
                        <div className="w-full xl:w-1/2" data-aos="fade-right">
                            <img src={imac} className="w-full lg:w-10/12"/>
                        </div>
                        <div className="w-full xl:w-1/2 pt-16" data-aos="fade-left">
                            <h2 className="font-normal text-3xl my-2 px-16"><span className="text-rouge">/</span>POSITIONNEMENT ET VALEURS PARTAGÉES</h2>
                            <br/>
                            <p className="font-bold text-lg px-16">
                                L’Université Fédérale Toulouse Midi Pyrénées a fait le choix du digital pour favoriser les échanges et optimiser le travail de ses chercheurs.
                            </p>
                            <br/>
                            <div className="px-16 my-8">
                                <p className="text-3xl py-2 text-left italic" data-aos="fade-in">COLLABORATION</p>
                                <p className="text-3xl py-2 text-right italic" data-aos="fade-in"data-aos-delay="400">DIGITALISATION</p>
                                <p className="text-5xl py-2 text-center text-rouge italic font-bold" data-aos="zoom-in" data-aos-delay="1000">ÉCHANGES</p>
                                <p className="text-3xl py-2 text-right italic" data-aos="fade-in" data-aos-delay="600">ADAPTABILITÉ</p>
                                <p className="text-3xl py-2 text-left italic" data-aos="fade-in" data-aos-delay="200">PARTAGE</p>
                            </div>
                        </div>
                    </section>
                    <section className="w-full h-full lg:h-screen flex flex-col items-center" style={{background:'#000000e6 url('+ bgbloc +')', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundBlendMode:'multiply'}}>
                        <div>
                            <h2 className="font-normal text-3xl my-6 pt-16 lg:py-32 px-16 text-white text-center" data-aos="fade-in"><span className="text-rouge">/</span>L'ERGONOMIE WEB AU SERVICE D'UNE INTERFACE INTUITIVE</h2>
                        </div>
                        <div className="w-full lg:w-1/2 mb-12 text-white text-center flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="200">
                                <svg className="mx-auto block" width="60px" viewBox="0 0 100 125"><path fill="#FFFFFF" d="M50,3.25C24.22,3.25,3.25,24.22,3.25,50c0,25.78,20.97,46.75,46.75,46.75c25.78,0,46.75-20.97,46.75-46.75  C96.75,24.22,75.78,3.25,50,3.25z M50,21.33c2.88,0,5.22,2.34,5.22,5.22s-2.34,5.22-5.22,5.22s-5.22-2.34-5.22-5.22  S47.12,21.33,50,21.33z M69.81,43.04l-15.15,2.13v9.56l8.17,19.72c0.61,1.46-0.1,3.16-1.56,3.76s-3.16-0.1-3.76-1.56L50,58.53  l-7.51,18.12c-0.61,1.46-2.3,2.16-3.76,1.56s-2.16-2.3-1.56-3.76l8.17-19.72v-9.56l-15.15-2.13c-1.29-0.18-2.16-1.61-1.94-3.18  c0.22-1.57,1.46-2.7,2.75-2.52l14.63,2.06h8.76l14.63-2.06c1.29-0.18,2.53,0.95,2.75,2.52C71.98,41.43,71.1,42.86,69.81,43.04z"/></svg>
                                <h4 className="uppercase font-bold">
                                ACCESSIBILITÉ
                                </h4>
                                <p>Respect du référentiel RGAA</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="400">
                                <svg className="mx-auto block" width="60px" viewBox="0 0 90 112.5" ><g><path fill="#FFFFFF" d="M81.5,34.75H56.9400024c-0.5500488,0-1,0.4500122-1,1v33.8099976c0,0.5499878,0.4499512,1,1,1H81.5   c0.5599976,0,1-0.4500122,1-1V35.75C82.5,35.2000122,82.0599976,34.75,81.5,34.75z"/><path fill="#FFFFFF" d="M81.7399902,31.0299683h-8.9000244V17.7099609c0-2.5699463-2.0899658-4.6599731-4.6499634-4.6599731H14.0599976   c-2.5700073,0-4.6600342,2.0900269-4.6600342,4.6599731v37.9100342c0,2.5700073,2.0900269,4.6599731,4.6600342,4.6599731   h38.7699585v1h-8.2799683h-6.8599854H8.1399536c-2.0699463,0-3.7599487,1.6799927-3.7599487,3.75s1.6900024,3.75,3.7599487,3.75   h29.5500488h15.1399536v4.2900391c0,2.1099854,1.6800537,3.8200073,3.7700195,3.8699951   c0.0300293,0.0100098,0.0700073,0.0100098,0.0999756,0.0100098h25.0400391c2.1400146,0,3.8800049-1.7400513,3.8800049-3.8800049   V34.8999634C85.6199951,32.7600098,83.8800049,31.0299683,81.7399902,31.0299683z M44.5499878,66.0299683h-6.8599854v-2h6.8599854   V66.0299683z M52.8299561,34.8999634V54.039978H15.1499634V19.2799683h51.9400024v11.75H56.6999512   C54.5700073,31.0299683,52.8299561,32.7600098,52.8299561,34.8999634z M83.6199951,73.0700073   c0,1.039978-0.8500366,1.8800049-1.8800049,1.8800049H56.6999512c-1.0299683,0-1.8699951-0.8400269-1.8699951-1.8800049V60.2799683   V34.8999634c0-1.0299683,0.8400269-1.8699951,1.8699951-1.8699951h25.0400391c1.0299683,0,1.8800049,0.8400269,1.8800049,1.8699951   V73.0700073z"/></g></svg>
                                <h4 className="uppercase font-bold">
                                RESPONSIVE DESIGN
                                </h4>
                                <p>Support des interactions "Touch"</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="600">
                                <svg className="mx-auto block" width="60px" viewBox="0 0 100 125" ><g><path fill="#FFFFFF" d="M92.5,28.8c-0.8-1.5-2.7-2.2-4.2-1.4c-1.5,0.8-2.2,2.7-1.4,4.2c2.9,5.7,4.3,11.8,4.3,18.4s-1.5,12.7-4.3,18.4     c-0.8,1.5-0.2,3.4,1.4,4.2c0.5,0.2,0.9,0.3,1.4,0.3c1.1,0,2.2-0.6,2.8-1.7c3.3-6.6,5-13.7,5-21.2S95.8,35.4,92.5,28.8z"/><path fill="#FFFFFF" d="M11.7,27.4c-1.5-0.8-3.4-0.2-4.2,1.4c-3.3,6.6-5,13.7-5,21.2s1.7,14.6,5,21.2c0.5,1.1,1.6,1.7,2.8,1.7     c0.5,0,0.9-0.1,1.4-0.3c1.5-0.8,2.2-2.7,1.4-4.2C10.2,62.7,8.7,56.5,8.7,50s1.5-12.7,4.3-18.4C13.8,30.1,13.2,28.2,11.7,27.4z"/><path fill="#FFFFFF" d="M75.7,33.7c-1.5,0.8-2.2,2.7-1.4,4.2c1.9,3.8,2.9,7.8,2.9,12.1s-1,8.3-2.9,12.1c-0.8,1.5-0.2,3.4,1.4,4.2     c0.5,0.2,0.9,0.3,1.4,0.3c1.1,0,2.2-0.6,2.8-1.7c2.3-4.6,3.5-9.7,3.5-14.9c0-5.2-1.2-10.3-3.5-14.9C79.1,33.6,77.2,33,75.7,33.7z     "/><path fill="#FFFFFF" d="M24.3,33.7c-1.5-0.8-3.4-0.2-4.2,1.4c-2.3,4.6-3.5,9.7-3.5,14.9s1.2,10.3,3.5,14.9c0.5,1.1,1.6,1.7,2.8,1.7     c0.5,0,1-0.1,1.4-0.3c1.5-0.8,2.2-2.7,1.4-4.2c-1.9-3.8-2.9-7.8-2.9-12.1s1-8.3,2.9-12.1C26.5,36.4,25.9,34.5,24.3,33.7z"/><path fill="#FFFFFF" d="M50,30.7c-10.6,0-19.3,8.7-19.3,19.3S39.4,69.3,50,69.3S69.3,60.6,69.3,50S60.7,30.7,50,30.7z M56.4,51l-8.9,5.9     c-0.8,0.5-1.8,0-1.8-1V44.1c0-0.9,1-1.5,1.8-1l8.9,5.9C57,49.5,57,50.5,56.4,51z"/></g></svg>
                                <h4 className="uppercase font-bold">
                                PLATEFORMES DE STREAMING
                                </h4>
                                <p>Codage de connecteurs vidéos personnalisés</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 text-white text-center flex mb-12 flex-col lg:flex-row">
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="800">
                                <svg className="mx-auto block" xmlns="http://www.w3.org/2000/svg" width="60px" viewBox="0 0 48 60" x="0px" y="0px"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill-rule="nonzero" fill="#FFFFFF"><path d="M28,28 C32.418278,28 36,24.418278 36,20 C36,15.581722 32.418278,12 28,12 C23.581722,12 20,15.581722 20,20 C20,24.418278 23.581722,28 28,28 Z M37.3504,27.5219729 L46.7321221,36.903695 C47.5108511,37.6824239 47.514416,38.9414282 46.7279221,39.7279221 C45.9468735,40.5089706 44.6811918,40.5096189 43.903695,39.7321221 L34.3535005,30.1819277 C32.5109928,31.33408 30.3332633,32 28,32 C21.372583,32 16,26.627417 16,20 C16,13.372583 21.372583,8 28,8 C34.627417,8 40,13.372583 40,20 C40,22.8479673 39.0078792,25.4642124 37.3504,27.5219729 Z M0,15 C0,13.8954305 0.679554462,13 1.49554521,13 L10.5044548,13 C11.3304216,13 12,13.8877296 12,15 C12,16.1045695 11.3204455,17 10.5044548,17 L1.49554521,17 C0.669578397,17 0,16.1122704 0,15 Z M0,27 C0,25.8954306 0.679554462,25 1.49554521,25 L10.5044548,25 C11.3304216,25 12,25.8877296 12,27 C12,28.1045694 11.3204455,29 10.5044548,29 L1.49554521,29 C0.669578397,29 0,28.1122704 0,27 Z M0,39 C0,37.8954306 0.657922267,37 1.49811914,37 L30.0018808,37 C30.8292691,37 31.5,37.8877296 31.5,39 C31.5,40.1045694 30.8420778,41 30.0018808,41 L1.49811914,41 C0.670730784,41 0,40.1122704 0,39 Z"/></g></g></svg>
                                <h4 className="uppercase font-bold">
                                RECHERCHE AVANCÉE
                                </h4>
                                <p>Basée sur le logiciel Apach SOLR</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="1000">
                                <svg className="mx-auto block" viewBox="0 0 500 625" width="60px"><g><g><circle fill="#FFFFFF" cx="105.7" cy="98.2" r="58.9"/><g><path fill="#FFFFFF" d="M149.5,98.2c0,1.4,0,2.8-0.1,4.2c0,0.4-0.7,4.9-0.1,1.5c-0.5,2.7-1.1,5.3-1.9,7.9c-0.4,1.3-0.9,2.5-1.3,3.8     c1.2-3.1-0.5,0.9-0.6,1.3c-1.4,2.8-3,5.3-4.7,7.9c-2.3,3.4,2-1.9-0.9,1.1c-0.9,1-1.7,2-2.7,2.9c-0.9,0.9-1.9,1.8-2.8,2.7     c-0.3,0.3-3.7,3-1,1c-2.1,1.6-4.3,3-6.6,4.3c-1.2,0.6-2.3,1.2-3.5,1.8c-1.6,0.7-1.6,0.7-0.1,0.1c-0.6,0.2-1.2,0.5-1.9,0.7     c-2.3,0.8-4.7,1.5-7.1,2c-0.4,0.1-4.8,0.8-1.4,0.4c-1.4,0.2-2.8,0.3-4.2,0.3c-2.8,0.1-5.6,0-8.4-0.2c-4.3-0.3,2.7,0.8-1.5-0.2     c-1.8-0.4-3.5-0.8-5.3-1.3c-1.3-0.4-2.5-0.8-3.8-1.2c-4-1.3,2.4,1.4-1.3-0.5c-2.4-1.2-4.7-2.4-6.9-3.8c-1.1-0.7-2.2-1.5-3.2-2.3     c2.6,2-0.7-0.7-1-1c-2.3-2-4.4-4.3-6.3-6.6c1.7,2.1,0.3,0.4,0-0.1c-0.7-1.1-1.5-2.2-2.2-3.3c-1.4-2.2-2.6-4.6-3.7-7     c1.3,3.1-0.3-1-0.4-1.4c-0.4-1.3-0.8-2.6-1.2-3.9c-0.3-1.3-0.6-2.6-0.9-4c-0.3-1.8-0.3-1.8-0.1-0.1c-0.1-0.9-0.2-1.8-0.3-2.8     c-0.2-2.8-0.2-5.6,0-8.4c0-0.4,0.7-4.9,0.1-1.5c0.2-1.3,0.5-2.7,0.8-4c0.6-2.6,1.4-5.2,2.4-7.7c-1.2,3.1,0.5-0.9,0.6-1.3     c0.8-1.6,1.6-3.1,2.6-4.6c0.6-0.9,1.2-1.8,1.8-2.7c0.4-0.6,2.3-2.8,0.4-0.6c1.7-2,3.4-3.9,5.4-5.7c1-0.9,2-1.7,3-2.6     c-2.5,2.1,0.8-0.6,1.2-0.8c2.6-1.7,5.3-3.2,8-4.6c3.7-1.9-2.7,0.7,1.3-0.5c1.3-0.4,2.5-0.9,3.8-1.2c1.3-0.4,2.6-0.7,3.9-1     c0.4-0.1,4.8-0.8,1.4-0.4c2.8-0.3,5.6-0.5,8.4-0.4c1.4,0,2.8,0.2,4.2,0.2c1.8,0.2,1.8,0.2,0.1,0c0.9,0.1,1.8,0.3,2.7,0.5     c2.6,0.6,5.2,1.4,7.8,2.2c4,1.3-2.4-1.4,1.3,0.5c1.6,0.8,3.2,1.6,4.7,2.5c1.1,0.7,2.2,1.4,3.3,2.1c0.7,0.5,1.4,1,2.1,1.5     c-1.3-1-1.3-1,0,0.1c2.2,2.1,4.4,4.2,6.5,6.5c2.8,3-1.4-2.3,0.9,1.1c1,1.5,2,2.9,2.9,4.4c0.7,1.1,1.3,2.3,1.9,3.5     c0.4,0.8,0.8,1.6,1.1,2.4c-0.6-1.5-0.7-1.5,0,0.1c0.9,3,1.8,6,2.5,9.1c1,4.2,0-2.9,0.2,1.5C149.4,94.5,149.5,96.4,149.5,98.2     c0.1,7.8,6.8,15.4,15,15c8-0.4,15.1-6.6,15-15c-0.4-31.3-19.9-58.6-49.1-69.6c-28-10.5-61.9-1.3-80.9,21.7     c-19.9,24.1-23.5,58.6-7.3,85.7c16.2,27,47.7,40.3,78.5,34.5c34.2-6.5,58.4-38.2,58.8-72.3c0.1-7.8-7-15.4-15-15     C156.3,83.6,149.6,89.8,149.5,98.2z"/></g></g><g><g><path fill="#FFFFFF" d="M164,113.3c29.8,0,59.7,0,89.5,0c4.3,0,8.5,0,12.8,0c-5-5-10-10-15-15c0,36.2,0,72.4,0,108.5c0,57.4,0,114.9,0,172.3     c0,13.2,0,26.3,0,39.5c0,8.1,6.9,15,15,15c27.7,0,55.3,0,83,0c7.8,0,15.4-6.9,15-15c-0.4-8.1-6.6-15-15-15c-27.7,0-55.3,0-83,0     c5,5,10,10,15,15c0-36.2,0-72.4,0-108.5c0-57.4,0-114.9,0-172.3c0-13.2,0-26.3,0-39.5c0-8.1-6.9-15-15-15c-29.8,0-59.7,0-89.5,0     c-4.3,0-8.5,0-12.8,0c-7.8,0-15.4,6.9-15,15C149.4,106.4,155.6,113.3,164,113.3L164,113.3z"/></g></g><g><g><path fill="#FFFFFF" d="M266.7,254.8c27.9,0,55.7,0,83.6,0c7.8,0,15.4-6.9,15-15c-0.4-8.1-6.6-15-15-15c-27.9,0-55.7,0-83.6,0     c-7.8,0-15.4,6.9-15,15C252.1,247.9,258.3,254.8,266.7,254.8L266.7,254.8z"/></g></g><g><g><path fill="#FFFFFF" d="M440.5,358.1c-26.2,0-52.4,0-78.6,0c-3.8,0-7.6,0-11.4,0c-8.1,0-15,6.9-15,15c0,26.1,0,52.1,0,78.2     c0,3.7,0,7.4,0,11.1c0,8.1,6.9,15,15,15c26.2,0,52.4,0,78.6,0c3.8,0,7.6,0,11.4,0c8.1,0,15-6.9,15-15c0-26.1,0-52.1,0-78.2     c0-3.7,0-7.4,0-11.1C455.5,365.2,448.6,357.7,440.5,358.1c-8.1,0.4-15,6.6-15,15c0,26.1,0,52.1,0,78.2c0,3.7,0,7.4,0,11.1     c5-5,10-10,15-15c-26.2,0-52.4,0-78.6,0c-3.8,0-7.6,0-11.4,0c5,5,10,10,15,15c0-26.1,0-52.1,0-78.2c0-3.7,0-7.4,0-11.1     c-5,5-10,10-15,15c26.2,0,52.4,0,78.6,0c3.8,0,7.6,0,11.4,0c7.8,0,15.4-6.9,15-15C455.1,364.9,448.9,358.1,440.5,358.1z"/></g></g><g><g><path fill="#FFFFFF" d="M440.5,180.6c-26.2,0-52.4,0-78.6,0c-3.8,0-7.6,0-11.4,0c-8.1,0-15,6.9-15,15c0,26.1,0,52.1,0,78.2     c0,3.7,0,7.4,0,11.1c0,8.1,6.9,15,15,15c26.2,0,52.4,0,78.6,0c3.8,0,7.6,0,11.4,0c8.1,0,15-6.9,15-15c0-26.1,0-52.1,0-78.2     c0-3.7,0-7.4,0-11.1C455.5,187.7,448.6,180.2,440.5,180.6c-8.1,0.4-15,6.6-15,15c0,26.1,0,52.1,0,78.2c0,3.7,0,7.4,0,11.1     c5-5,10-10,15-15c-26.2,0-52.4,0-78.6,0c-3.8,0-7.6,0-11.4,0c5,5,10,10,15,15c0-26.1,0-52.1,0-78.2c0-3.7,0-7.4,0-11.1     c-5,5-10,10-15,15c26.2,0,52.4,0,78.6,0c3.8,0,7.6,0,11.4,0c7.8,0,15.4-6.9,15-15C455.1,187.4,448.9,180.6,440.5,180.6z"/></g></g></g></svg>
                                <h4 className="uppercase font-bold">
                                WORKFLOW DE PUBLICATION
                                </h4>
                                <p>Adaptation aux différents profils d'enseignants</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="1200">
                                <svg className="mx-auto block" width="60px" viewBox="0 0 100 125"><g><path fill="#FFFFFF" d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"/><path fill="#FFFFFF" d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z"/><path fill="#FFFFFF" d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z"/><path fill="#FFFFFF" d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z"/></g><g><circle cx="17.3" cy="30.1" r="9.7" fill="#FFFFFF"/><path fill="#FFFFFF" d="M32.7,60.2c0.7,0,1.4-0.2,2-0.5l10.6-5.4c2.2-1.1,3-3.8,1.9-5.9c-1.1-2.2-3.8-3-5.9-1.9L33,50.6c0,0-4.6-3.2-6-4.2     c-0.9-0.7-3.6-2.8-6.3-3.8c-2.9-1-10.5-1.6-12.5,3.3c-2.2,5.2-1.8,18.7-1.8,28.3c0,0.8,0.5,1.5,1.4,1.5c2,0,15,0,15.9,0     c1,0,1.3-0.5,1.4-1.3c0.1-0.5,1-11.4,0.9-16.2c0-0.5,0-1.1,0-1.7l4.2,2.8C30.9,59.9,31.8,60.2,32.7,60.2z"/><circle fill="#FFFFFF" cx="82.7" cy="30.1" r="9.7"/><path fill="#FFFFFF" d="M91.9,45.9c-2.1-4.9-9.7-4.3-12.5-3.3c-2.7,0.9-5.4,3.1-6.3,3.8c-1.5,1.1-6,4.2-6,4.2l-8.3-4.2c-2.2-1.1-4.8-0.2-5.9,1.9     c-1.1,2.2-0.2,4.8,1.9,5.9l10.6,5.4c0.6,0.3,1.3,0.5,2,0.5c0.9,0,1.7-0.3,2.5-0.8l4.2-2.8c0,0.6,0,1.2,0,1.7     C74,63,74.9,73.9,74.9,74.4c0.1,0.8,0.5,1.3,1.4,1.3s13.9,0,15.9,0c0.8,0,1.4-0.6,1.4-1.5C93.7,64.6,94.1,51.2,91.9,45.9z"/><path fill="#FFFFFF" d="M28.3,19.5c1.3,0.8,3.1,0.5,4-0.7c3.9-5,9.8-8.1,16.3-8.6c5-0.3,9.9,1,14,3.6l-3.5,0.2c-1.7,0.1-3,1.6-2.9,3.4     c0.1,1.7,1.6,3,3.4,2.9l10.8-0.7c1.7-0.1,3-1.6,2.9-3.4L72.5,5.4c-0.1-1.7-1.6-3-3.4-2.9c-1.7,0.1-3,1.6-2.9,3.4l0.2,3.1     c-5.3-3.6-11.7-5.4-18.3-5c-8.3,0.6-15.8,4.6-20.8,10.9C26.2,16.3,26.6,18.5,28.3,19.5z"/><path fill="#FFFFFF" d="M71.7,80.5c-1.3-0.8-3.1-0.5-4,0.7c-3.9,5-9.8,8.1-16.3,8.6c-5,0.3-9.9-1-14-3.6l3.5-0.2c1.7-0.1,3-1.6,2.9-3.4     c-0.1-1.7-1.6-3-3.4-2.9l-10.8,0.7c-1.7,0.1-3,1.6-2.9,3.4l0.7,10.8c0.1,1.7,1.6,3,3.4,2.9c1.7-0.1,3-1.6,2.9-3.4l-0.2-3.1     c5.3,3.6,11.7,5.4,18.3,5c8.3-0.6,15.8-4.6,20.8-10.9C73.8,83.7,73.4,81.5,71.7,80.5z"/></g></svg>
                                <h4 className="uppercase font-bold">
                                MODES DE CONTRIBUTIONS
                                </h4>
                                <p>Intégration directe au front-office</p>
                            </div>
                        </div>
                    </section>
                    <section className="h-full w-full mt-32 flex flex-col lg:flex-row">
                        <div className="w-fulllg:w-1/2 px-12 lg:px-24 mb-24 xl:px-48" data-aos="fade-right">
                            <h2 className="font-normal text-3xl my-2 uppercase"><span className="text-rouge">/</span>SYSTÈME DE Recherche avancée</h2>
                            <br/>
                            <p className="font-normal text-justify">
                                Optimiser l'accès à l’information grâce à un système de recherche avancée destiné aux enseignants chercheurs. 
                            </p>
                            <br/>
                            <ul className="font-normal text-justify">
                                <br/>
                                <li className="flex flex-row">
                                <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#b71c30" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#b71c30" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Recours au logiciel Apache SOLR  
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#b71c30" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#b71c30" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Système de recherche interfaçé au CMS
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#b71c30" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#b71c30" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Catégorisation de la recherche
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 mx-auto block order-first lg:order-last" data-aos="fade-left">
                            <img width="750px" className="px-24 md:px-0 xl:px-32 pb-16 xl:py-0 xl:pb-32" src={mockup} alt="Création site internet Toulouse"/>
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
                                <Link className="mx-auto block" to="/realisations/csd-menuiserie/">Précédent</Link>
                            </div>
                            <div className="text-center py-3 font-bold flex flex-col bg-white w-1/3 lg:1/6 xl:w-1/12 hover:text-bleu" data-aos="fade-left">
                                <Link className="mx-auto block order-last" to="/realisations/atpt/">Suivant</Link>
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
query lastsThreePostssia {
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
export default sia;
