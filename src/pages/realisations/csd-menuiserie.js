import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";
import RoundButton from "../../components/roundButton";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../../components/seo";
import Barre from "../../components/barre-laterale";
import "../../scss/barre.scss";
import "../../scss/global.scss";

import logolinkweb from "../../images/logo-linkweb.png";
import Bg from "../../images/bg-csd.jpg";
import bgbloc from "../../images/bloc-csd.jpg";
import mockup1 from "../../images/mockup-csd1.jpg";
import mockup2 from "../../images/mockup-csd.jpg";
import imac from "../../images/mockup-csd-menuiserie.jpg";
import bloccontact from '../../images/csd-contact.jpg';
import logo from '../../images/logo-csd.png';
import logosia from '../../images/logo-sia.png';
import logoatpt from '../../images/logo-atpt-blanc.png';
import logosdis from '../../images/logo-sdis47-real.png';
import logofaivre from '../../images/faivre-creations.png';
import logogabrielservices from '../../images/logo-gs.png';
import logoledil from '../../images/logo-ledil.png';
import logocsd from '../../images/logo-csd.png';


class csdmenuiserie extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Nos Réalisations - CSD Menuiserie - Linkweb"
                    description="Le site de CSD Menuiserie est l'une de nos réalisations. Vous souhaitez un projet similaire ?"
                    keywords={[`Référencement Agen`, `Référencement Toulouse`, `Agence de Référencement Agen`, `Agence de Référencement Toulouse`, `Référencement Google`]}
                    url="https://linkweb.fr/realisations/csd-menuiserie/"
                    nom="CSD Menuiserie"
                    slug="/realisations/csd-menuiserie/"
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
                    <section className="w-full bloctitrescreen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ background:'#aace57fa url(' + Bg + ')', backgroundRepeat:'no-repeat', backgroundBlendMode:'multiply', backgroundSize:'cover', backgroundPosition:'center' }}>
                            <div>
                                <Link className="invisible md:visible" to="/"><img className="mx-auto block" width="120px" src={logolinkweb} alt="création site internet Toulouse" data-aos="zoom-in"/></Link>
                                <br/>
                                <a href="/agence-de-communication-agen-47-toulouse-31/" className="font-normal mt-24 century text-sm sm:text-md text-center text-white mx-auto block hover:text-bleu" data-aos="zoom-in" data-aos-delay="900"><span className="text-bleu font-bold">>></span> Revenir aux réalisations</a>
                                <h1 data-aos="fade-down" data-aos-delay="500" className="century font-bold text-4xl sm:text-6xl md:text-6xl lg:text-6xl text-center text-white">
                                    <b>CSD MENUISERIE</b>
                                </h1>
                                <h3 data-aos="fade-up" className="italic text-center font-normal text-lg sm:text-2xl text-white my-12">Dynamiser la communication en ligne de CSD Menuiserie grâce à un outil clair et efficace pour mettre en lumière l’activité de l’entreprise.</h3>
                                <br/>
                                <a className="mb-12" data-aos="fade-down" href="/realisations/csd-menuiserie/#start"><svg className="zoombtn mx-auto block" width="60px" viewBox="0 0 100 125"><g><g><path fill="#FFFFFF" d="M59.3,46.5l-8.7,8.7l-8.7-8.7c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l10.1,10.1c0.4,0.4,0.9,0.6,1.4,0.6    s1-0.2,1.4-0.6l10.1-10.1c0.8-0.8,0.8-2,0-2.8C61.4,45.7,60.1,45.7,59.3,46.5z M50.8,5c-24.9,0-45,20.1-45,45    c0,24.9,20.1,45,45,45c24.9,0,45-20.1,45-45C95.8,25.1,75.6,5,50.8,5z M50.8,91c-22.6,0-41-18.4-41-41s18.4-41,41-41    s41,18.4,41,41S73.4,91,50.8,91z"/></g></g></svg></a>
                            </div>
                            <Barre color="csdbarre"/>
                            {/* <li className="hidden lg:block toggleable">
                                <input type="checkbox" value="selected" id="toggle-one" className="toggle-input hidden"/>
                                    <label for="toggle-one" className="toogle-input block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">
                                        <div className="cursor-pointer fixed h-auto z-40 py-16 font-bold px-2 font-bold" style={{background:'#FFFFFF',bottom:'315px', writingMode:'vertical-rl', textOrientation: 'sideways', borderTopLeftRadius:'15px', borderBottomLeftRadius:'15px'}}>
                                            <p style={{transform:'rotate(180deg'}}>Nos réalisations</p>
                                        </div>
                                    </label>
                                <div role="toggle" className="toggle-input megamenu fixed h-auto z-40 p-2 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800" style={{background:'#5a4d4694', maxWidth:'100px', borderRadius:'15px'}}>
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
                            </li> */}
                    </section>
                    <section className="w-full flex flex-col md:flex-row mt-12">
                        <div className="w-full md:w-11/12 px-4 py-2 md:py-6 my-2 ml-0 md:ml-24 lg:ml-32 md:my-4 flex flex-col order-last md:order-first">
                            <h3 data-aos='fade-right' className="text-center text-2xl md:text-4xl mx-12 md:mx-24 century">
                            Valoriser le travail réalisé à travers un site internet <span className="text-csd">épuré</span> et <span className="text-csd">illustré</span>
                            </h3>
                            <br/>
                        </div>
                        <div className="w-10/12 md:w-1/12 mx-auto mr-10 py-6 mb-4 -mt-40" id="start" data-aos="zoom-in">
                            <img src={logo} className="mx-auto block md:mx-0" />
                        </div>
                    </section>
                    <section className="w-full mt-16 flex flex-col md:flex-row justify-center items-center">
                            <a className="text-white font-boldw-1/2 md:w-1/6 bg-csd1 mx-12 p-3 text-center" data-aos="zoom-in" style={{borderRadius:'15px'}} href="http://www.csdmenuiserie.fr/" target="blank" rel="noopener noreferrer">Voir le site</a>
                            <Link className="text-white font-boldw-1/2 md:w-1/6 bg-csd mx-12 my-6 text-center p-3" to="/contact-agence-web-toulouse/" data-aos="zoom-in" data-aos-delay="500" style={{borderRadius:'15px'}}>
                                J'ai une question
                            </Link>
                    </section>
                    <section className="w-full mt-24">
                        <div className="w-full lg:w-2/3 bg-csd1 text-white px-12 md:px-24 py-12" data-aos="fade-right" data-aos-delay="100">
                            <h2 className="font-bold text-center md:text-left text-2xl md:text-3xl my-6"><span className="text-csd">/</span>VALORISER LES RÉALISATIONS EFFECTUÉES PAR L'ENTREPRISE</h2>
                            <br/>
                            <p className="font-normal text-justify">
                            Entreprise de menuiserie extérieure et intérieure dans le sud de la France, CSD Menuiserie a fait le choix d’un site internet vitrine pour dynamiser son activité : 
                            </p>
                            <br/>
                            <ul className="font-normal text-justify">
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#FFFFFF" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#FFFFFF" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    <p>Valoriser les réalisations à travers un espace adapté</p>
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#FFFFFF" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#FFFFFF" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    <p>Mettre en place des techniques de référencement naturel pour travailler la visibilité en recherche organique</p>
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#FFFFFF" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#FFFFFF" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    <p>Permettre à l’entreprise d’obtenir des prospects qualifiés grâce au le site internet</p>
                                </li>
                            </ul>
                            <br/>
                            <element className="flex flex-col md:flex-row mt-24 mb-8">
                                <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up">
                                    <svg className="mx-auto block" width="80px" viewBox="0 0 9.33333 11.666662500000001"><path fill="#FFFFFF" d="M4.66667 0l0 0c2.56667,0 4.66667,2.1 4.66667,4.66667l0 0c0,2.56667 -2.1,4.66667 -4.66667,4.66667l0 0c-2.56667,0 -4.66667,-2.1 -4.66667,-4.66667l0 0c0,-2.56667 2.1,-4.66667 4.66667,-4.66667zm0 0.479996l0 0c2.30267,0 4.18667,1.884 4.18667,4.18667l0 0c0,2.30267 -1.884,4.18667 -4.18667,4.18667l0 0c-2.30267,0 -4.18667,-1.884 -4.18667,-4.18667l0 0c0,-2.30267 1.884,-4.18667 4.18667,-4.18667z"/><g><path fill="#5a4d46" d="M4.20063 6.07217l0.932079 0c0.0441811,0 0.08,0.0358189 0.08,0.08l0 0.524291c0,0.0441811 -0.0358189,0.08 -0.08,0.08l-0.932079 0c-0.0441811,0 -0.08,-0.0358189 -0.08,-0.08l0 -0.524291c0,-0.0441811 0.0358189,-0.08 0.08,-0.08z"/><path fill="#5a4d46" d="M3.42863 6.59646c-0.0441811,0 -0.08,0.0358189 -0.08,0.08 0,0.0441811 0.0358189,0.08 0.08,0.08l2.47607 0c0.0441811,0 0.08,-0.0358189 0.08,-0.08 0,-0.0441811 -0.0358189,-0.08 -0.08,-0.08l-2.47607 0z"/><path fill="#5a4d46" d="M7.22667 6.15217l0 -3.4953c0,-0.0441811 -0.0358189,-0.08 -0.08,-0.08l-4.96 0c-0.0441811,0 -0.08,0.0358189 -0.08,0.08l0 3.4953c0,0.0441811 0.0358189,0.08 0.08,0.08 1.8211,0 3.1389,0 4.96,0 0.0441811,0 0.08,-0.0358189 0.08,-0.08zm-3.89881 -1.80855l0.68365 0c0.0336339,0 0.0609016,0.0272677 0.0609016,0.0609016l0 1.0326c0,0.0336339 -0.0272677,0.0608976 -0.0609016,0.0608976l-0.68365 0c-0.0336339,0 -0.0609016,-0.0272638 -0.0609016,-0.0608976l0 -1.0326c0,-0.0336339 0.0272677,-0.0609016 0.0609016,-0.0609016zm1.99397 -1.03259l0.68365 0c0.0336339,0 0.0609016,0.0272638 0.0609016,0.0608976l0 2.0652c0,0.0336339 -0.0272677,0.0608976 -0.0609016,0.0608976l-0.68365 0c-0.0336339,0 -0.0609016,-0.0272638 -0.0609016,-0.0608976l0 -2.0652c0,-0.0336339 0.0272677,-0.0608976 0.0609016,-0.0608976zm-0.996988 0.518075l0.683654 0c0.0336339,0 0.0609016,0.0272677 0.0609016,0.0609016l0 1.54712c0,0.0336339 -0.0272677,0.0608976 -0.0609016,0.0608976l-0.683654 0c-0.0336339,0 -0.0609016,-0.0272638 -0.0609016,-0.0608976l0 -1.54712c0,-0.0336339 0.0272677,-0.0609016 0.0609016,-0.0609016z"/><path fill="#5a4d46" d="M6.30295 6.5655c0.00982677,0.035311 0.0150827,0.0725236 0.0150827,0.110957 0,0.228157 -0.185173,0.413331 -0.413331,0.413331l-0.770173 0c-0.000606299,3.93701e-006 -0.00121654,3.93701e-006 -0.00182283,3.93701e-006l-0.932079 0c-0.000606299,0 -0.00121654,0 -0.00182283,-3.93701e-006l-0.770177 0c-0.228157,0 -0.413331,-0.185173 -0.413331,-0.413331 0,-0.0384331 0.00525591,-0.0756457 0.0150827,-0.110957 -0.281236,0 -0.562476,0 -0.843713,0 -0.228157,0 -0.413331,-0.185173 -0.413331,-0.413331l0 -3.4953c0,-0.228157 0.185173,-0.413331 0.413331,-0.413331l4.96 0c0.228157,0 0.413331,0.185173 0.413331,0.413331l0 3.4953c0,0.228157 -0.185173,0.413331 -0.413331,0.413331 -0.28124,0 -0.562476,0 -0.843717,0zm0 -0.166665c0.28124,0 0.562476,0 0.843717,0 0.136161,0 0.246665,-0.110504 0.246665,-0.246665l0 -3.4953c0,-0.136161 -0.110504,-0.246665 -0.246665,-0.246665l-4.96 0c-0.136161,0 -0.246665,0.110504 -0.246665,0.246665l0 3.4953c0,0.136161 0.110504,0.246665 0.246665,0.246665 0.281236,0 0.562476,0 0.843713,0l0.219382 0 -0.0588189 0.21135c-0.00600787,0.0215866 -0.00898031,0.0438661 -0.00898031,0.0662717 0,0.136161 0.110504,0.246665 0.246665,0.246665l0.770177 0c0.000610236,0 0.00121654,3.93701e-006 0.00183071,3.93701e-006l0.932063 0c0.000614173,0 0.00122047,-3.93701e-006 0.00183071,-3.93701e-006l0.770173 0c0.136161,0 0.246665,-0.110504 0.246665,-0.246665 0,-0.0224055 -0.00297244,-0.044685 -0.00898031,-0.0662717l-0.0588189 -0.21135 0.219382 0z"/></g></svg>
                                    <h4 className="text-center mt-4 font-bold text-lg">Stratégie SEO</h4>
                                </div>
                                <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up" data-aos-delay="500">
                                    <svg className="mx-auto block" width="80px" viewBox="0 0 128 160"><g><path fill="#FFFFFF" d="M56.89014,67.05164H30.18188a1.03348,1.03348,0,1,0,0,2.067H56.89014a1.03348,1.03348,0,0,0,0-2.067Z"/><path fill="#FFFFFF" d="M56.16412,73.5509H30.18188a1.03348,1.03348,0,1,0,0,2.067H56.16412a1.03348,1.03348,0,1,0,0-2.067Z"/><path fill="#FFFFFF" d="M62.48138,39.5188H77.01605a1.03348,1.03348,0,0,0,0-2.067H62.48138a1.03348,1.03348,0,0,0,0,2.067Z"/><path fill="#FFFFFF" d="M56.16412,80.05017H30.18188a1.03348,1.03348,0,1,0,0,2.067H56.16412a1.03348,1.03348,0,1,0,0-2.067Z"/><path fill="#FFFFFF" d="M62.48138,46.01807H77.01605a1.03348,1.03348,0,0,0,0-2.067H62.48138a1.03348,1.03348,0,0,0,0,2.067Z"/><path fill="#FFFFFF" d="M47.04065,44.27277a5.75073,5.75073,0,1,0-9.52246-.00012A8.76361,8.76361,0,0,0,33.361,51.73987v1.87756a1.03352,1.03352,0,0,0,1.03345,1.03351h15.77a1.03357,1.03357,0,0,0,1.03351-1.03351V51.73987A8.763,8.763,0,0,0,47.04065,44.27277ZM42.27948,37.323a3.70265,3.70265,0,0,1,2.29388,6.59412,3.45969,3.45969,0,0,1-.36908.2691c-.03448.02148-.07184.03833-.10706.05865a3.77679,3.77679,0,0,1-3.63007.003c-.03833-.022-.07886-.04028-.11627-.06372a3.46084,3.46084,0,0,1-.36-.26263A3.70276,3.70276,0,0,1,42.27948,37.323ZM49.131,52.584H35.428v-.84412a6.70352,6.70352,0,0,1,3.59161-5.94818l.00146.00079a5.70256,5.70256,0,0,0,6.51807-.00092,6.70491,6.70491,0,0,1,3.59186,5.9483Z"/><path fill="#FFFFFF" d="M54.98871,58.60016a1.03352,1.03352,0,0,0,1.03345-1.03351V32.34027a1.03351,1.03351,0,0,0-1.03345-1.03345H29.56958a1.03356,1.03356,0,0,0-1.03351,1.03345V57.56665a1.03357,1.03357,0,0,0,1.03351,1.03351ZM30.603,33.37378H53.9552V56.5332H30.603Z"/><path fill="#FFFFFF" d="M56.16412,86.54944H30.18188a1.03348,1.03348,0,1,0,0,2.067H56.16412a1.03348,1.03348,0,1,0,0-2.067Z"/><path fill="#FFFFFF" d="M78.0495,51.48389a1.03352,1.03352,0,0,0-1.03345-1.03351H62.48138a1.03348,1.03348,0,0,0,0,2.067H77.01605A1.03351,1.03351,0,0,0,78.0495,51.48389Z"/><path fill="#FFFFFF" d="M64,2.5A61.5,61.5,0,1,0,125.5,64,61.56976,61.56976,0,0,0,64,2.5ZM60.53894,75.57281V97.50391H23.69434V23.69434h58.479v41.6991H78.49695A3.11694,3.11694,0,0,0,75.35278,68.55v3.017H64.52686A4.0013,4.0013,0,0,0,60.53894,75.57281Zm43.76672,26.794a1.90927,1.90927,0,0,1-1.921,1.93878H64.52686a1.90927,1.90927,0,0,1-1.921-1.93878V90.02466H78.645v1.4715a2.279,2.279,0,0,0,2.2998,2.3075h5.022a2.279,2.279,0,0,0,2.29974-2.3075v-1.4715h16.03912ZM80.71191,91.49615v-5.053a.2173.2173,0,0,1,.23285-.24017H85.925a.306.306,0,0,1,.27454.24017v5.053a.2174.2174,0,0,1-.23279.24054h-5.022A.21741.21741,0,0,1,80.71191,91.49615ZM104.30566,87.915H88.26587l-.00134-1.53607A2.371,2.371,0,0,0,85.925,84.136H80.94476a2.27872,2.27872,0,0,0-2.2998,2.30713V87.915H62.6059V75.57281a1.90932,1.90932,0,0,1,1.921-1.93884H76.4444V68.55a2.03672,2.03672,0,0,1,2.05249-2.06488h9.49554A2.06089,2.06089,0,0,1,90.04492,68.55v5.084h12.29736a1.90932,1.90932,0,0,1,1.921,1.93884.96063.96063,0,0,0,.04242.28253Z"/><path fill="#FFFFFF" d="M87.99243,68.43542H78.49689c-.05139,0-.10217.00885-.10217.11456v5.084H88.0946V68.55A.11041.11041,0,0,0,87.99243,68.43542Z"/></g></svg>                                    
                                    <h4 className="text-center my-4 font-bold text-lg">Portfolio de réalisations</h4>
                                </div>
                                <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up" data-aos-delay="1000">
                                    <svg className="mx-auto block" width="80px" viewBox="0 0 825.27 1031.5875"><g><g><path fill="#FFFFFF" d="M506,359.17q0,3.4-.25,6.75a94.39,94.39,0,0,1-188.3,0q-.25-3.35-.25-6.75a94.4,94.4,0,0,1,188.8,0Z"/><path fill="#FFFFFF" d="M412.64,0C184.74,0,0,184.74,0,412.63S184.74,825.27,412.64,825.27,825.27,640.53,825.27,412.63,640.53,0,412.64,0ZM603,370.91a225.64,225.64,0,0,1-3.4,38.5c-.1.75-.5,3-1.3,6.86a209.64,209.64,0,0,1-12.8,40.43c-20.6,52-66,131.91-165.3,217.48a12.83,12.83,0,0,1-17,0c-99.4-85.57-144.7-165.47-165.3-217.48a211.86,211.86,0,0,1-12.8-40.43c-.8-3.86-1.2-6.11-1.3-6.86a216,216,0,0,1-3.4-38.5q0-3.6.12-7.17-.12-3.35-.12-6.67c0-102.95,81.86-187.2,183.88-191l2.41-.08,2.44-.05,2.47,0,2.47,0,2.44.05L419,166c102,3.85,183.88,88.1,184.08,191q0,3.33-.13,6.67C603,366.12,603,368.51,603,370.91Z"/></g></g></svg>                                    
                                    <h4 className="text-center my-4 font-bold text-lg">Promotion de l'activité au niveau local</h4>
                                </div>
                            </element>
                        </div>
                    </section>
                    <section className="flex flex-col items-center md:flex-row my-12 md:my-24">
                        <div className="w-full xl:w-1/2" data-aos="fade-right">
                            <img src={imac} className="w-full lg:w-10/12"/>
                        </div>
                        <div className="w-full xl:w-1/2 pt-16" data-aos="fade-left">
                            <h2 className="font-normal text-3xl my-2 px-16"><span className="text-csd">/</span>POSITIONNEMENT ET VALEURS PARTAGÉES</h2>
                            <br/>
                            <p className="font-bold text-lg px-16">
                            Proposer un outil adapté pour obtenir des contacts qualifiés, tout en introduisant l’activité d’un professionnel de l’artisanat.
                            </p>
                            <br/>
                            <div className="px-16 my-8">
                                <p className="text-3xl py-2 text-left italic" data-aos="fade-in">QUALITÉ</p>
                                <p className="text-3xl py-2 text-right italic" data-aos="fade-in"data-aos-delay="400">TRANSPARENCE</p>
                                <p className="text-5xl py-2 text-center text-csd italic font-bold" data-aos="zoom-in" data-aos-delay="1000">PROXIMITÉ</p>
                                <p className="text-3xl py-2 text-right italic" data-aos="fade-in" data-aos-delay="600">POLYVALENCE</p>
                                <p className="text-3xl py-2 text-left italic" data-aos="fade-in" data-aos-delay="200">PROFESSIONNALISME</p>
                            </div>
                        </div>
                    </section>
                    <section className="w-full h-full lg:h-screen flex flex-col items-center" style={{background:'#aace57fa url('+ bgbloc +')', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundBlendMode:'multiply'}}>
                        <div>
                            <h2 className="font-normal text-3xl my-6 pt-16 lg:py-32 px-16 text-white text-center uppercase" data-aos="fade-in"><span className="text-csd1">/</span>Valoriser la qualité du travail effectué avec<br/> un outil axé sur la transparence</h2>
                        </div>
                        <div className="w-full lg:w-1/2 mb-12 text-white text-center flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="200">
                            <svg className="mx-auto block" width="60px" viewBox="0 0 512 640"><g><g><polygon fill="#FFFFFF" points="190.334,389.092 190.334,485.631 280.327,485.631 280.327,337.613 190.334,337.613   "/><path fill="#FFFFFF" d="M312.9,160.176l35.937,24.904l2.205-157.477L204.361,84.949l6.622,4.586c8.802,6.092,17.612,12.189,26.414,18.305    l0.457,0.369c7.493,7.039,9.853,16.436,6.827,27.176c-9.121,32.373-65.205,73.002-97.823,94.34    c-38.014,24.867-80.876,47.551-104.824,55.869c7.667,3.301,16.798,4.969,27.267,4.969c33.801,0.002,82.538-17.668,137.231-49.758    c49.854-29.248,88.864-60.924,104.014-77.977L312.9,160.176z"/><rect fill="#FFFFFF" x="92.341" y="397.092" width="89.993" height="88.539"/><polygon fill="#FFFFFF" points="288.327,329.613 288.327,485.631 378.321,485.631 378.321,254.771 288.327,254.771   "/><polygon fill="#FFFFFF" points="476.314,157.502 386.321,157.502 386.321,246.771 386.321,485.631 476.314,485.631   "/></g></g></svg>
                                <h4 className="uppercase font-bold">
                                STRATÉGIE SEO LOCALE
                                </h4>
                                <p>Stratégie de visibilité et prospection</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="400">
                                <svg className="mx-auto block" width="60px" viewBox="0 0 90 112.5" ><g><path fill="#FFFFFF" d="M81.5,34.75H56.9400024c-0.5500488,0-1,0.4500122-1,1v33.8099976c0,0.5499878,0.4499512,1,1,1H81.5   c0.5599976,0,1-0.4500122,1-1V35.75C82.5,35.2000122,82.0599976,34.75,81.5,34.75z"/><path fill="#FFFFFF" d="M81.7399902,31.0299683h-8.9000244V17.7099609c0-2.5699463-2.0899658-4.6599731-4.6499634-4.6599731H14.0599976   c-2.5700073,0-4.6600342,2.0900269-4.6600342,4.6599731v37.9100342c0,2.5700073,2.0900269,4.6599731,4.6600342,4.6599731   h38.7699585v1h-8.2799683h-6.8599854H8.1399536c-2.0699463,0-3.7599487,1.6799927-3.7599487,3.75s1.6900024,3.75,3.7599487,3.75   h29.5500488h15.1399536v4.2900391c0,2.1099854,1.6800537,3.8200073,3.7700195,3.8699951   c0.0300293,0.0100098,0.0700073,0.0100098,0.0999756,0.0100098h25.0400391c2.1400146,0,3.8800049-1.7400513,3.8800049-3.8800049   V34.8999634C85.6199951,32.7600098,83.8800049,31.0299683,81.7399902,31.0299683z M44.5499878,66.0299683h-6.8599854v-2h6.8599854   V66.0299683z M52.8299561,34.8999634V54.039978H15.1499634V19.2799683h51.9400024v11.75H56.6999512   C54.5700073,31.0299683,52.8299561,32.7600098,52.8299561,34.8999634z M83.6199951,73.0700073   c0,1.039978-0.8500366,1.8800049-1.8800049,1.8800049H56.6999512c-1.0299683,0-1.8699951-0.8400269-1.8699951-1.8800049V60.2799683   V34.8999634c0-1.0299683,0.8400269-1.8699951,1.8699951-1.8699951h25.0400391c1.0299683,0,1.8800049,0.8400269,1.8800049,1.8699951   V73.0700073z"/></g></svg>
                                <h4 className="uppercase font-bold">
                                RESPONSIVE DESIGN
                                </h4>
                                <p>Webdesign adaptable à la taille de l'écran</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="600">
                                <svg className="mx-auto block" width="60px" viewBox="0 0 100 125"><g><g><path fill="#FFFFFF" d="M87,53.9c-1.1,0.1-2.1,0.2-3.2,0.4c-7.5,1.1-14.5,3.7-19.7,7.3c2.8,1.6,5.4,3.4,7.9,5.3c1,0.7,1.1,2.1,0.4,3.1     c-0.4,0.6-1.1,0.9-1.8,0.9c-0.5,0-0.9-0.1-1.4-0.5c-3.1-2.4-6.5-4.6-10.2-6.5c-3.2-1.8-6.7-3.4-10.4-4.8     c-7.1-2.7-14.2-4.4-20.9-5v25.1H87V53.9z"/><circle fill="#FFFFFF" cx="76.9" cy="43.7" r="6.3"/><path fill="#FFFFFF" d="M94.4,25.1H82.7V13.4c0-1.7-1.4-3.1-3.1-3.1H5.6c-1.7,0-3.1,1.4-3.1,3.1v58.4c0,1.7,1.4,3.1,3.1,3.1h11.7v11.7     c0,1.7,1.4,3.1,3.1,3.1h74.1c1.7,0,3.1-1.4,3.1-3.1V28.2C97.5,26.5,96.1,25.1,94.4,25.1z M17.3,28.2v40.6H8.7V16.5h67.9v8.6H20.4     C18.7,25.1,17.3,26.5,17.3,28.2z M91.3,83.5H23.4V31.2h67.9V83.5z"/></g></g></svg>                                
                                <h4 className="uppercase font-bold">
                                    GALERIE PHOTOS
                                </h4>
                                <p>Galerie photos à 3 niveaux</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 text-white text-center flex mb-12 flex-col lg:flex-row">
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="800">
                                <svg className="mx-auto block" width="60px" viewBox="0 0 160 200"><g><path fill="#FFFFFF" d="M98.6,35c2,0,3.7,1.5,4.1,3.4h6c-0.4-5.2-4.8-9.4-10.1-9.4H71.7v6H98.6z"/><ellipse fill="#FFFFFF" cx="73.8" cy="130.2" rx="4" ry="4"/><path fill="#FFFFFF" d="M58.8,15.5h-45C9,15.5,5,19.5,5,24.3v26.3c0,4.9,4,8.8,8.8,8.8h30.8l8.3,9c0.6,0.6,1.4,1,2.2,1c0.4,0,0.7-0.1,1.1-0.2   c1.2-0.4,1.9-1.6,1.9-2.8v-6.9h0.7c4.9,0,8.8-3.9,8.8-8.8V24.3C67.7,19.5,63.7,15.5,58.8,15.5z M61.7,50.6c0,1.5-1.3,2.8-2.8,2.8   h-3.7c-1.7,0-3,1.3-3,3v2.3l-4-4.3c-0.6-0.6-1.4-1-2.2-1H13.8c-1.6,0-2.8-1.3-2.8-2.8V24.3c0-1.5,1.3-2.8,2.8-2.8h45   c1.6,0,2.8,1.3,2.8,2.8V50.6z"/><path fill="#FFFFFF" d="M48.1,32.8H43c-0.3,0-0.6,0.1-0.8,0.2l-0.5-0.5c-0.6-0.6-1-1.2-1.3-2c0,0,0,0,0,0c-0.3-0.7-0.5-1.5-0.5-2.3l0-2   c0-0.7-0.4-1.4-1-1.7l-0.7-0.4c-0.3-0.2-0.7-0.4-1.1-0.5c-1.2-0.3-2.6,0.1-3.5,1.1c-0.9,0.9-1.3,2-1.4,3.2l0,0.2   c-0.1,1.5,0,2.9,0.2,4.4l-5.1,0c0,0,0,0,0,0c-0.7,0-1.3,0.2-1.9,0.5c-1.3,0.7-2.1,2.1-2.1,3.6c0,0.3,0,0.8,1.8,8.8   c0.2,1.1,0.8,2,1.5,2.8c1.1,1.1,2.6,1.7,4.1,1.7h8.8c0.6,0,1.2-0.1,1.7-0.2c0.3,0.7,1,1.1,1.8,1.1h5.1c1.1,0,2-0.9,2-2v-14   C50.1,33.7,49.2,32.8,48.1,32.8z M30.7,45.9c-0.5,0-0.9-0.2-1.2-0.5c-0.2-0.2-0.4-0.5-0.5-0.8c-1.1-4.7-1.6-7.3-1.7-8   c0,0,0,0,0.1-0.1l7.5,0h0c0.6,0,1.2-0.3,1.5-0.7c0.4-0.5,0.5-1.1,0.4-1.6L36.6,33c-0.1-0.7-0.2-1.4-0.3-2.1   c0.1,0.4,0.2,0.7,0.4,1.1c0,0,0,0,0,0c0.5,1.2,1.2,2.3,2.2,3.3l2.2,2.2v8.2c-0.5,0.1-1,0.2-1.5,0.2H30.7z"/><path fill="#FFFFFF" d="M144.5,42.4H86.3c-5.8,0-10.5,4.7-10.5,10.5v34c0,5.8,4.7,10.5,10.5,10.5h1.8v9.9c0,1.2,0.8,2.3,1.9,2.8   c0.4,0.1,0.7,0.2,1.1,0.2c0.8,0,1.6-0.3,2.2-1l11-11.9h40.2c5.8,0,10.5-4.7,10.5-10.5v-34C155,47.1,150.3,42.4,144.5,42.4z    M149,86.9c0,2.5-2,4.5-4.5,4.5H103c-0.8,0-1.6,0.4-2.2,1l-6.6,7.2v-5.2c0-1.7-1.3-3-3-3h-4.8c-2.5,0-4.5-2-4.5-4.5v-34   c0-2.5,2-4.5,4.5-4.5h58.2c2.5,0,4.5,2,4.5,4.5V86.9z"/><path fill="#FFFFFF" d="M129.2,64.6c-0.7-0.4-1.4-0.6-2.2-0.6l-7.3,0c0.3-2.1,0.4-4.2,0.4-6.3l0-0.2c-0.1-1.4-0.6-2.8-1.7-3.8   c-1-1.1-2.6-1.5-4-1.2c-0.5,0.1-0.9,0.3-1.3,0.5l-0.9,0.5c-0.6,0.4-1,1-1,1.7l0,2.5c0,1.1-0.2,2.2-0.6,3.2c0,0,0,0,0,0   c-0.4,1-1,2-1.8,2.8l-1,1c-0.3-0.2-0.7-0.4-1.1-0.4h-6.6c-1.1,0-2,0.9-2,2v18.1c0,1.1,0.9,2,2,2h6.6c0.9,0,1.7-0.7,1.9-1.5   c0.9,0.2,1.7,0.3,2.6,0.3h11.4c1.8,0,3.6-0.7,4.9-2c0.9-0.9,1.5-2.1,1.8-3.3c2.3-10.3,2.3-11,2.3-11.3   C131.7,67,130.8,65.5,129.2,64.6z M125.5,79.2c-0.1,0.5-0.4,1-0.8,1.4c-0.5,0.5-1.3,0.8-2,0.8h-11.4c-0.9,0-1.7-0.1-2.6-0.4V69.7   l3-3c1.2-1.2,2.1-2.5,2.7-4c0,0,0,0,0,0c0.6-1.5,0.9-3.1,0.9-4.8l0-1.4c0,0,0.1,0,0.2,0.1c0.3,0.3,0.5,0.8,0.5,1.2l0,0.2   c0.1,2.1-0.1,4.2-0.4,6.3l-0.3,1.5c-0.1,0.6,0,1.2,0.4,1.6c0.4,0.5,0.9,0.7,1.5,0.7h0l9.7,0c0.1,0,0.2,0,0.3,0.1   c0.2,0.1,0.4,0.3,0.4,0.6C127.6,69.3,127,72.4,125.5,79.2z"/><path fill="#FFFFFF" d="M102.8,104.9v12.4H44.9V65.6l-2-2.2h-4v70.9c0,5.6,4.6,10.2,10.2,10.2h49.6c5.6,0,10.2-4.6,10.2-10.2v-32.9H106   L102.8,104.9z M102.8,134.3c0,2.3-1.9,4.2-4.2,4.2H49c-2.3,0-4.2-1.9-4.2-4.2v-13h57.9V134.3z"/></g></svg>
                                <h4 className="uppercase font-bold">
                                COMMUNITY MANAGEMENT
                                </h4>
                                <p>Alimentation de comptes Instagram et Pinterest</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="1000">
                                <svg className="mx-auto block" width="60px" viewBox="0 0 100 125"><g><g><path fill="#FFFFFF" d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"/><path fill="#FFFFFF" d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z"/><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z"/><path fill="#FFFFFF" d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z"/></g><g><path fill="#FFFFFF" d="M43.9,72.7c-2.9,1.9-6.4,3-10.1,3c-3.7,0-7.2-1.1-10.1-3c-5.8,1.8-10.2,6.8-11.1,13.2l-0.6,7.5c-0.2,2.2,1.6,4.1,3.8,4.1     h35.8c2.2,0,4-1.9,3.8-4.1l-0.6-7.5C54.2,79.6,49.7,74.5,43.9,72.7z"/><circle fill="#FFFFFF" cx="33.8" cy="57.3" r="13.6"/><path fill="#FFFFFF" d="M82.6,2.5H49.5c-2.9,0-5.3,2.4-5.3,5.3v27.8c0,2.9,2.4,5.3,5.3,5.3h4.9v8.8c0,1.7,2.1,2.6,3.3,1.4l10.6-10.2h14.2     c2.9,0,5.3-2.4,5.3-5.3V7.8C87.8,4.9,85.5,2.5,82.6,2.5z M77.8,19.2l-5.2,4.5c-0.3,0.2-0.4,0.6-0.3,0.9l1.6,6.7     c0.2,0.8-0.7,1.4-1.4,1l-5.9-3.6c-0.3-0.2-0.7-0.2-1,0l-5.9,3.6c-0.7,0.4-1.6-0.2-1.4-1l1.6-6.7c0.1-0.3,0-0.7-0.3-0.9l-5.2-4.5     c-0.6-0.5-0.3-1.6,0.5-1.6l6.9-0.6c0.3,0,0.7-0.2,0.8-0.6l2.7-6.4c0.3-0.8,1.4-0.8,1.7,0l2.7,6.4c0.1,0.3,0.4,0.5,0.8,0.6     l6.9,0.6C78.1,17.7,78.4,18.7,77.8,19.2z"/></g></g></svg>                                
                                <h4 className="uppercase font-bold">
                                EXPERTISE
                                </h4>
                                <p>Mise en avant des certifications professionnelles</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="1200">
                            <svg className="mx-auto block" width="60px" viewBox="0 0 100 125"><g><path fill="#FFFFFF" d="M18.192,25.448L50,51.955l31.808-26.507c0.203-0.168,0.427-0.292,0.656-0.395C81.938,24.889,81.378,24.8,80.8,24.8H19.2   c-0.579,0-1.138,0.089-1.664,0.254C17.767,25.156,17.989,25.28,18.192,25.448z"/><path fill="#FFFFFF" d="M14.54,70.308l23.581-20.962L14.607,29.751c-0.34-0.283-0.586-0.634-0.755-1.013C13.688,29.264,13.6,29.822,13.6,30.4V69.6   c0,0.575,0.089,1.13,0.251,1.653C14.008,70.903,14.234,70.579,14.54,70.308z"/><path fill="#FFFFFF" d="M81.74,74.492L57.528,52.972l-5.736,4.779C51.273,58.184,50.637,58.4,50,58.4s-1.273-0.217-1.792-0.649l-5.736-4.779   L18.26,74.492c-0.22,0.195-0.466,0.341-0.721,0.455c0.525,0.164,1.083,0.253,1.661,0.253h61.6c0.578,0,1.137-0.089,1.661-0.253   C82.205,74.833,81.96,74.688,81.74,74.492z"/><path fill="#FFFFFF" d="M86.147,28.738c-0.169,0.379-0.415,0.729-0.755,1.013L61.879,49.346L85.46,70.308c0.306,0.271,0.532,0.596,0.689,0.945   c0.162-0.523,0.251-1.078,0.251-1.653V30.4C86.4,29.822,86.312,29.264,86.147,28.738z"/></g></svg>
                                <h4 className="uppercase font-bold">
                                FACILITÉ DE CONTACT
                                </h4>
                                <p>Numéro de téléphone et adresse mail cliquables</p>
                            </div>
                        </div>
                    </section>
                    <section className="h-full w-full mt-32 flex flex-col lg:flex-row">
                        <div className="w-fulllg:w-1/2 px-12 lg:px-24 mb-24 xl:px-48" data-aos="fade-right">
                            <h2 className="font-normal text-3xl my-2 uppercase"><span className="text-csd">/</span>Des contenus optimisés pour le SEO</h2>
                            <br/>
                            <p className="font-normal text-justify">
                                Apporter une visibilité optimale par le biais du référencement naturel pour générer du trafic qualifié et obtenir des contacts. 
                            </p>
                            <br/>
                            <ul className="font-normal text-justify">
                                <li className="flex flex-row">
                                <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#5a4d46" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#5a4d46" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Définition d’une stratégie et d’une arborescence SEO-friendly.  
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#5a4d46" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#5a4d46" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Créations de contenus textuels optimisés.
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#5a4d46" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#5a4d46" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Optimisation on-site sur tout le site.
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 mx-auto block order-first lg:order-last" data-aos="fade-left">
                            <img className="px-24 md:px-0 xl:px-32 pb-16 xl:py-0 xl:pb-32" src={mockup1} alt="Création site internet Toulouse"/>
                        </div>
                    </section>
                    <section className="h-full w-full flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 mx-auto block" data-aos="fade-right">
                            <img className="mx-auto block px-24 xl:px-32 pb-16 xl:py-0 xl:pb-32" src={mockup2} alt="Création site internet Toulouse"/>
                        </div>
                        <div className="w-full lg:w-1/2 py-0 lg:py-24 px-12 lg:px-24 xl:px-48" data-aos="fade-left">
                            <h2 className="font-normal text-3xl my-2 uppercase"><span className="text-csd1">/</span>Une galerie photos à différents niveaux</h2>
                            <br/>
                            <p className="font-normal text-justify">
                                Définir un outil permettant de mettre en lumière la qualité du travail effectué près de chez soi en précissant les zones d’intervention.
                            </p>
                            <br/>
                            <ul className="font-normal text-justify">
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#aace57" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#aace57" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Catégorisation des réalisations par types et par villes.
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#aace57" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#aace57" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Création de vignettes cliquables.
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#aace57" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#aace57" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Mise en avant des contenus photographiques réalisés par l’entreprise.
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className=" w-full h-full flex flex-col justify-center items-end px-4 pt-12 pb-0 bg-cover mt-24" style={{ background: '#00000090 url( ' + bloccontact + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundRepeat:'no-repeat' }}>
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
                                <Link to="/agence-digitale-toulouse/">
                                    <svg className="mx-auto block" viewBox="0 0 100 125" width="80px"><path fill="#FFFFFF" d="M9.72,57.45a2.31,2.31,0,0,0,.86-3.15l-.58-1,7.8-1.44,1.54,2.69a9.71,9.71,0,0,0,18-6.29l16.9-3.11,1.18,2.06a2.31,2.31,0,1,0,4-2.29L37.67,6.81a2.31,2.31,0,0,0-4,2.29l1,1.71-29.48,34-.38-.66a2.31,2.31,0,1,0-4,2.29L6.57,56.59A2.31,2.31,0,0,0,9.72,57.45Zm23.11-8.37a5.1,5.1,0,0,1-9.48,3.16L22.61,51ZM53.61,23a2.55,2.55,0,0,1,.95-3.48l7.58-4.33a2.55,2.55,0,1,1,2.53,4.42L57.08,24A2.55,2.55,0,0,1,53.61,23Zm-4.19-5.21a2.52,2.52,0,0,1-.27-3.43l5.58-7a2.52,2.52,0,1,1,3.94,3.14l-5.58,7a2.53,2.53,0,0,1-1.77.94h-.19A2.53,2.53,0,0,1,49.42,17.81ZM56,29.27a2.52,2.52,0,0,1,2.11-3L66.94,25a2.52,2.52,0,1,1,.71,5l-8.86,1.26-.35,0A2.53,2.53,0,0,1,56,29.27Zm-30,65.09A2.93,2.93,0,0,1,23,91.42V81.19a2.93,2.93,0,0,1,2.93-2.93h7.94a2.93,2.93,0,0,1,2.93,2.93V91.42a2.93,2.93,0,0,1-2.93,2.93Zm19.67,0a2.93,2.93,0,0,1-2.93-2.93V77.76a2.93,2.93,0,0,1,2.93-2.93h7.94a2.93,2.93,0,0,1,2.93,2.93V91.42a2.93,2.93,0,0,1-2.93,2.93ZM76.17,70V91.42a2.93,2.93,0,0,1-2.93,2.93H65.29a2.93,2.93,0,0,1-2.93-2.93V70a2.93,2.93,0,0,1,2.93-2.93h7.94A2.93,2.93,0,0,1,76.17,70ZM95.84,55.46v35.9a3,3,0,0,1-2.93,3H85a3,3,0,0,1-2.93-3V55.46a3,3,0,0,1,2.93-3H92.9A3,3,0,0,1,95.84,55.46Zm3.63-19A3,3,0,0,1,97.16,40a3,3,0,0,1-3.56-2.3L92.38,32A84.28,84.28,0,0,1,71.72,54.85,79.16,79.16,0,0,1,48.61,66.91,77.28,77.28,0,0,1,25,70.9c-1.35,0-2.15-.05-2.23-.06a3,3,0,0,1,.43-6s.59,0,1.67,0a72.67,72.67,0,0,0,22-3.74c16.92-5.6,30.5-16.48,40.38-32.36L81.71,30a3,3,0,0,1-1.25-5.86l12.73-2.72a3,3,0,0,1,3.56,2.3Z"/></svg>
                                    <p className="text-xl text-white century pt-3">WEBMARKETING</p>
                                </Link>
                            </div>
                            <div className="w-full sm:w-1/3 sm:px-12 py-2 flex flex-col items-center justify-center sm:my-0 my-6" data-aos='zoom-in' data-aos-delay="400">
                                <Link to="/referencement-toulouse/">
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
                                <Link to="/realisations/ledilimmo/"><svg style={{maxWidth:'25px'}} className="mx-auto inline-block align-text-middle" width="20px" viewBox="0 0 40 50" x="0px" y="0px"><g fill="#000000" fill-rule="evenodd"><path fill="#000000" d="m20 0c-11.05 0-20 8.954-20 20 0 11.05 8.954 20 20 20 11.05 0 20-8.954 20-20 0-11.05-8.954-20-20-20m5.056 9.981c.725.715.725 1.874 0 2.588l-7.966 7.853 7.966 7.853c.725.715.725 1.874 0 2.589-.725.715-1.901.715-2.626 0l-9.279-9.147c-.725-.715-.725-1.874 0-2.589l9.279-9.147c.362-.358.838-.536 1.313-.536.475 0 .95.179 1.313.536"/></g></svg></Link>
                                <Link className="mx-auto block" to="/realisations/ledilimmo/">Précédent</Link>
                            </div>
                            <div className="text-center py-3 font-bold flex flex-col bg-white w-1/3 lg:1/6 xl:w-1/12 hover:text-bleu" data-aos="fade-left">
                                <Link className="mx-auto block order-last" to="/realisations/aquapensezvous/">Suivant</Link>
                                <Link to="/realisations/aquapensezvous/" className="mx-auto inline-block align-text-middle"><svg style={{maxWidth:'25px'}} width="20px" viewBox="0 0 0.689 0.86125" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd"><defs></defs><g><path class="fil0" d="M0.46 0.367l-0.148 0.147c-0.012,0.013 -0.032,0.013 -0.044,0 -0.012,-0.012 -0.012,-0.032 0,-0.044l0.126 -0.125 -0.126 -0.126c-0.012,-0.012 -0.012,-0.032 0,-0.044 0.012,-0.012 0.032,-0.012 0.044,0l0.148 0.147c0.012,0.013 0.012,0.032 0,0.045zm-0.46 -0.022c0,0.095 0.039,0.181 0.101,0.243 0.062,0.063 0.148,0.101 0.244,0.101 0.095,0 0.181,-0.038 0.243,-0.101 0.063,-0.062 0.101,-0.148 0.101,-0.243 0,-0.096 -0.038,-0.182 -0.101,-0.244 -0.062,-0.062 -0.148,-0.101 -0.243,-0.101 -0.096,0 -0.182,0.039 -0.244,0.101 -0.062,0.062 -0.101,0.148 -0.101,0.244z"/></g></svg></Link>
                            </div>
                        </div>
                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostscsdmenuiserie {
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
export default csdmenuiserie;
