import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";
import RoundButton from "../../components/roundButton";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../../components/seo";
import Barre from "../../components/barre-laterale";
import "../../scss/barre.scss";
import "../../scss/global.scss";

import Bg from "../../images/bg-faivre.jpg";
import bgbloc from "../../images/bloc-faivre.jpg";
import smartphone from "../../images/mockup1-faivre-creation.jpg";
import mockup from "../../images/mockup-tablette-faivre-services.jpg";
import imac from "../../images/mockup-faivre-services.jpg";
import bloccontact from '../../images/faivre-contact.jpg';
import logo from '../../images/faivre-service.png';
import logo1 from '../../images/faivre-creation.png';
import logo2 from '../../images/faivre-paysage.png';
import logo3 from '../../images/very-garden.png';



class faivre extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Nos Réalisations - Faivre Environnement - Linkweb"
                    description="Les sites du groupe Faivre Environnement fait partie de nos réalisations. Vous souhaitez un projet similaire ?"
                    keywords={[`Référencement Agen`, `Référencement Toulouse`, `Agence de Référencement Agen`, `Agence de Référencement Toulouse`, `Référencement Google`]}
                    url="https://linkweb.fr/realisations/groupe-faivre-environnement/"
                    nom="Faivre Environnement"
                    slug="/realisations/groupe-faivre-environnement/"
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
                <section className="w-full bloctitrescreen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ background: '#f2f2f2e6 url(' + Bg + ')', height: '125vh', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <br />
                    <div>
                        <a href="/agence-de-communication-agen-47-toulouse-31/" className="mt-24 font-normal century text-sm sm:text-md text-center text-black mx-auto block hover:text-bleu" data-aos="zoom-in" data-aos-delay="900"><span className="text-bleu font-bold">>></span> Revenir aux réalisations</a>
                        <h1 data-aos="fade-down" data-aos-delay="500" className="century font-bold text-4xl sm:text-6xl md:text-6xl lg:text-6xl text-center text-csd1">
                            FAIVRE ENVIRONNEMENT
                            </h1>
                        <h3 data-aos="fade-up" className="italic font-bold text-center text-lg sm:text-2xl text-csd1 mt-8">Développer la visibilité en ligne du groupe Faivre Environnement et de ses trois filiales </h3>
                        <br />
                        <a data-aos="fade-dow" href="/realisations/groupe-faivre-environnement/#start"><svg className="zoombtn mx-auto block" width="60px" viewBox="0 0 100 125"><g><g><path fill="#5a4d46" d="M59.3,46.5l-8.7,8.7l-8.7-8.7c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l10.1,10.1c0.4,0.4,0.9,0.6,1.4,0.6    s1-0.2,1.4-0.6l10.1-10.1c0.8-0.8,0.8-2,0-2.8C61.4,45.7,60.1,45.7,59.3,46.5z M50.8,5c-24.9,0-45,20.1-45,45    c0,24.9,20.1,45,45,45c24.9,0,45-20.1,45-45C95.8,25.1,75.6,5,50.8,5z M50.8,91c-22.6,0-41-18.4-41-41s18.4-41,41-41    s41,18.4,41,41S73.4,91,50.8,91z" /></g></g></svg></a>
                        <div className="flex flex-wrap flex-col justify-center items-center md:flex-row">
                            <div className="w-1/2 md:w-1/4 mx-auto px-4 py-2 mb-4" id="start" data-aos="zoom-in">
                                <img src={logo1} width="300px" className="mx-auto block md:mx-0" />
                            </div>
                            <div className="w-1/2 md:w-1/4 mx-auto px-4 py-2 mb-4" id="start" data-aos="zoom-in">
                                <img src={logo} width="300px" className="mx-auto block md:mx-0" />
                            </div>
                            <div className="w-1/2 md:w-1/4 mx-auto px-4 py-2 mb-4" id="start" data-aos="zoom-in">
                                <img src={logo2} width="300px" className="mx-auto block md:mx-0" />
                            </div>
                            <div className="w-1/2 md:w-1/4 mx-auto px-4 py-2 mb-4" id="start" data-aos="zoom-in">
                                <img src={logo3} width="150px" className="mx-auto block md:mx-0" />
                            </div>
                        </div>
                    </div>
                    <Barre color="faivrebarre" />
                    {/* <li className="hidden lg:block toggleable">
                                <input type="checkbox" value="selected" id="toggle-one" className="toggle-input hidden"/>
                                    <label for="toggle-one" className="toogle-input block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">
                                        <div className="cursor-pointer fixed h-auto z-40 py-16 font-bold px-2 font-bold" style={{background:'#FFFFFF',bottom:'315px', writingMode:'vertical-rl', textOrientation: 'sideways', borderTopLeftRadius:'15px', borderBottomLeftRadius:'15px'}}>
                                            <p style={{transform:'rotate(180deg'}}>Nos réalisations</p>
                                        </div>
                                    </label>
                                <div role="toggle" className="toggle-input megamenu fixed h-auto z-40 p-2 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800" style={{background:'#aace5794', maxWidth:'100px', borderRadius:'15px'}}>
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
                        <h3 data-aos='fade-right' className="text-center text-2xl md:text-4xl text-csd font-bold mx-12 md:mx-24 century">
                            Promouvoir et apporter de la visibilité aux services proposés par le groupe
                            </h3>
                        <br />
                    </div>
                </section>
                <section className="w-full mt-16 flex flex-col md:flex-row justify-center items-center">
                    <a className="text-white font-bold w-1/2 md:w-1/6 bg-csd1 mx-12 p-3 text-center" data-aos="zoom-in" style={{ borderRadius: '15px' }} href="https://faivre-environnement.com/" target="blank" rel="noopener noreferrer">Voir le site</a>
                    <Link className="text-white font-bold w-1/2 md:w-1/6 bg-csd mx-12 my-6 text-center p-3" data-aos="zoom-in" data-aos-delay="500" style={{ borderRadius: '15px' }} to="/contact-agence-web-toulouse/">J'ai une question</Link>
                </section>
                <section className="w-full mt-24">
                    <div className="w-full lg:w-2/3 bg-csd text-white px-12 md:px-24 py-12" data-aos="fade-right" data-aos-delay="100">
                        <h2 className="font-bold text-center md:text-left text-2xl md:text-3xl my-6"><span className="text-csd1">/</span>MISE EN PLACE D’UN PROJET MULTISITE AVEC ACCÈS FACILITÉ À L’ADMINISTRATION</h2>
                        <br />
                        <p className="font-normal text-justify">
                            Faivre Environnement a choisi Linkweb pour la mise en place d’une interface multisite visant à promouvoir ses différents domaines d'activités  :
                            </p>
                        <br />
                        <ul className="font-normal text-justify">
                            <li className="flex flex-row">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#FFFFFF" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#FFFFFF" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                <p>Mettre en place une interface conservant la vision groupe du projet.</p>
                            </li>
                            <br />
                            <li className="flex flex-row">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#FFFFFF" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#FFFFFF" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                <p>Optimiser la gestion des sites par la mise en place d’un portail</p>
                            </li>
                            <br />
                            <li className="flex flex-row">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#FFFFFF" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#FFFFFF" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                <p>Générer de la visibilité pour attirer des prospects grâce à un référencement au détail</p>
                            </li>
                        </ul>
                        <br />
                        <element className="flex flex-col md:flex-row mt-24 mb-8">
                            <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up">
                                <svg className="mx-auto block" width="80px" viewBox="0 0 100 125" ><g><path fill="#FFFFFF" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50c0,26.2,21.3,47.5,47.5,47.5S97.5,76.2,97.5,50C97.5,23.8,76.2,2.5,50,2.5z M50,28.1    c8.2,0,14.9,6.7,14.9,14.9S58.2,57.9,50,57.9c-8.2,0-14.9-6.7-14.9-14.9S41.8,28.1,50,28.1z M24.7,79.4c1.1-9,8.8-16,18.1-16h14.4    c9.3,0,17,7,18.1,16c-6.8,5.9-15.6,9.4-25.3,9.4C40.3,88.8,31.5,85.3,24.7,79.4z" /></g></svg>
                                <h4 className="text-center mt-4 font-bold text-lg">Portail d'administration</h4>
                            </div>
                            <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up" data-aos-delay="500">
                                <svg className="mx-auto block" width="80px" viewBox="0 0 9.33333 11.666662500000001"><path fill="#FFFFFF" d="M4.66667 0l0 0c2.56667,0 4.66667,2.1 4.66667,4.66667l0 0c0,2.56667 -2.1,4.66667 -4.66667,4.66667l0 0c-2.56667,0 -4.66667,-2.1 -4.66667,-4.66667l0 0c0,-2.56667 2.1,-4.66667 4.66667,-4.66667zm0 0.479996l0 0c2.30267,0 4.18667,1.884 4.18667,4.18667l0 0c0,2.30267 -1.884,4.18667 -4.18667,4.18667l0 0c-2.30267,0 -4.18667,-1.884 -4.18667,-4.18667l0 0c0,-2.30267 1.884,-4.18667 4.18667,-4.18667z" /><g><path fill="#aace57" d="M4.20063 6.07217l0.932079 0c0.0441811,0 0.08,0.0358189 0.08,0.08l0 0.524291c0,0.0441811 -0.0358189,0.08 -0.08,0.08l-0.932079 0c-0.0441811,0 -0.08,-0.0358189 -0.08,-0.08l0 -0.524291c0,-0.0441811 0.0358189,-0.08 0.08,-0.08z" /><path fill="#aace57" d="M3.42863 6.59646c-0.0441811,0 -0.08,0.0358189 -0.08,0.08 0,0.0441811 0.0358189,0.08 0.08,0.08l2.47607 0c0.0441811,0 0.08,-0.0358189 0.08,-0.08 0,-0.0441811 -0.0358189,-0.08 -0.08,-0.08l-2.47607 0z" /><path fill="#aace57" d="M7.22667 6.15217l0 -3.4953c0,-0.0441811 -0.0358189,-0.08 -0.08,-0.08l-4.96 0c-0.0441811,0 -0.08,0.0358189 -0.08,0.08l0 3.4953c0,0.0441811 0.0358189,0.08 0.08,0.08 1.8211,0 3.1389,0 4.96,0 0.0441811,0 0.08,-0.0358189 0.08,-0.08zm-3.89881 -1.80855l0.68365 0c0.0336339,0 0.0609016,0.0272677 0.0609016,0.0609016l0 1.0326c0,0.0336339 -0.0272677,0.0608976 -0.0609016,0.0608976l-0.68365 0c-0.0336339,0 -0.0609016,-0.0272638 -0.0609016,-0.0608976l0 -1.0326c0,-0.0336339 0.0272677,-0.0609016 0.0609016,-0.0609016zm1.99397 -1.03259l0.68365 0c0.0336339,0 0.0609016,0.0272638 0.0609016,0.0608976l0 2.0652c0,0.0336339 -0.0272677,0.0608976 -0.0609016,0.0608976l-0.68365 0c-0.0336339,0 -0.0609016,-0.0272638 -0.0609016,-0.0608976l0 -2.0652c0,-0.0336339 0.0272677,-0.0608976 0.0609016,-0.0608976zm-0.996988 0.518075l0.683654 0c0.0336339,0 0.0609016,0.0272677 0.0609016,0.0609016l0 1.54712c0,0.0336339 -0.0272677,0.0608976 -0.0609016,0.0608976l-0.683654 0c-0.0336339,0 -0.0609016,-0.0272638 -0.0609016,-0.0608976l0 -1.54712c0,-0.0336339 0.0272677,-0.0609016 0.0609016,-0.0609016z" /><path fill="#aace57" d="M6.30295 6.5655c0.00982677,0.035311 0.0150827,0.0725236 0.0150827,0.110957 0,0.228157 -0.185173,0.413331 -0.413331,0.413331l-0.770173 0c-0.000606299,3.93701e-006 -0.00121654,3.93701e-006 -0.00182283,3.93701e-006l-0.932079 0c-0.000606299,0 -0.00121654,0 -0.00182283,-3.93701e-006l-0.770177 0c-0.228157,0 -0.413331,-0.185173 -0.413331,-0.413331 0,-0.0384331 0.00525591,-0.0756457 0.0150827,-0.110957 -0.281236,0 -0.562476,0 -0.843713,0 -0.228157,0 -0.413331,-0.185173 -0.413331,-0.413331l0 -3.4953c0,-0.228157 0.185173,-0.413331 0.413331,-0.413331l4.96 0c0.228157,0 0.413331,0.185173 0.413331,0.413331l0 3.4953c0,0.228157 -0.185173,0.413331 -0.413331,0.413331 -0.28124,0 -0.562476,0 -0.843717,0zm0 -0.166665c0.28124,0 0.562476,0 0.843717,0 0.136161,0 0.246665,-0.110504 0.246665,-0.246665l0 -3.4953c0,-0.136161 -0.110504,-0.246665 -0.246665,-0.246665l-4.96 0c-0.136161,0 -0.246665,0.110504 -0.246665,0.246665l0 3.4953c0,0.136161 0.110504,0.246665 0.246665,0.246665 0.281236,0 0.562476,0 0.843713,0l0.219382 0 -0.0588189 0.21135c-0.00600787,0.0215866 -0.00898031,0.0438661 -0.00898031,0.0662717 0,0.136161 0.110504,0.246665 0.246665,0.246665l0.770177 0c0.000610236,0 0.00121654,3.93701e-006 0.00183071,3.93701e-006l0.932063 0c0.000614173,0 0.00122047,-3.93701e-006 0.00183071,-3.93701e-006l0.770173 0c0.136161,0 0.246665,-0.110504 0.246665,-0.246665 0,-0.0224055 -0.00297244,-0.044685 -0.00898031,-0.0662717l-0.0588189 -0.21135 0.219382 0z" /></g></svg>
                                <h4 className="text-center my-4 font-bold text-lg">Référencement Naturel</h4>
                            </div>
                            <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up" data-aos-delay="1000">
                                <svg className="mx-auto block" width="80px" viewBox="0 0 100 125"><g><rect fill="#FFFFFF" x="31.913" y="43.701" width="36.173" height="19.853" /><path fill="#FFFFFF" d="M31.913,42.424h36.174v-5.978H31.913V42.424z M62.528,38.114l0.902-0.903l1.109,1.109l1.108-1.109l0.903,0.903   l-1.109,1.108l1.109,1.109l-0.903,0.903l-1.108-1.109l-1.109,1.109l-0.902-0.903l1.108-1.109L62.528,38.114z M32.444,38.584h16.885   v1.277H32.444V38.584z" /><path fill="#FFFFFF" d="M50,10c-22.092,0-40,17.908-40,40s17.908,40,40,40s40-17.908,40-40S72.092,10,50,10z M70.214,64.617   c0,0.588-0.476,1.064-1.064,1.064H30.849c-0.588,0-1.064-0.476-1.064-1.064V35.382c0-0.588,0.476-1.064,1.064-1.064h38.302   c0.587,0,1.064,0.477,1.063,1.064C70.214,35.382,70.214,64.617,70.214,64.617z" /></g></svg>
                                <h4 className="text-center my-4 font-bold text-lg">Site internet vitrine</h4>
                            </div>
                        </element>
                    </div>
                </section>
                <section className="flex flex-col items-center md:flex-row my-12 md:my-24">
                    <div className="w-full xl:w-1/2" data-aos="fade-right">
                        <img src={imac} className="w-full lg:w-10/12" />
                    </div>
                    <div className="w-full xl:w-1/2 pt-16" data-aos="fade-left">
                        <h2 className="font-normal text-black text-3xl my-2 px-16"><span className="text-csd">/</span>POSITIONNEMENT ET VALEURS PARTAGÉES</h2>
                        <br />
                        <p className="font-bold text-black text-lg px-16">
                            Mettre en place une solution web qui répond aux besoins de visibilité de 3 filiales aux objectifs différents.
                            </p>
                        <br />
                        <div className="px-16 my-8 text-black">
                            <p className="text-3xl py-2 text-left italic" data-aos="fade-in">PROFESSIONNALISME</p>
                            <p className="text-3xl py-2 text-right italic" data-aos="fade-in" data-aos-delay="400">INFORMATION</p>
                            <p className="text-3xl sm:text-5xl py-2 text-center text-csd italic font-bold" data-aos="zoom-in" data-aos-delay="1000">CLARTÉ</p>
                            <p className="text-3xl py-2 text-right italic" data-aos="fade-in" data-aos-delay="600">UNICITÉ</p>
                            <p className="text-3xl py-2 text-left italic" data-aos="fade-in" data-aos-delay="200">COMPLÉMENTARITÉ</p>
                        </div>
                    </div>
                </section>
                <section className="w-full h-full lg:h-screen flex flex-col items-center" style={{ background: 'url(' + bgbloc + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div>
                        <h2 className="font-normal text-3xl my-6 pt-16 lg:py-32 px-16 text-csd1 text-center uppercase" data-aos="fade-in"><span className="text-csd">/</span>PROPOSER UNE SOLUTION DIGITALE GLOBALE TOUT EN ACTIVANT LES LEVIERS DU RÉFÉRENCEMENT AU DÉTAIL</h2>
                    </div>
                    <div className="w-full lg:w-1/2 mb-12 text-csd1 text-center flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="200">
                            <svg className="mx-auto block" xmlns="http://www.w3.org/2000/svg" width="60px" viewBox="0 0 48 60" x="0px" y="0px"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill-rule="nonzero" fill="#5a4d46"><path d="M28,28 C32.418278,28 36,24.418278 36,20 C36,15.581722 32.418278,12 28,12 C23.581722,12 20,15.581722 20,20 C20,24.418278 23.581722,28 28,28 Z M37.3504,27.5219729 L46.7321221,36.903695 C47.5108511,37.6824239 47.514416,38.9414282 46.7279221,39.7279221 C45.9468735,40.5089706 44.6811918,40.5096189 43.903695,39.7321221 L34.3535005,30.1819277 C32.5109928,31.33408 30.3332633,32 28,32 C21.372583,32 16,26.627417 16,20 C16,13.372583 21.372583,8 28,8 C34.627417,8 40,13.372583 40,20 C40,22.8479673 39.0078792,25.4642124 37.3504,27.5219729 Z M0,15 C0,13.8954305 0.679554462,13 1.49554521,13 L10.5044548,13 C11.3304216,13 12,13.8877296 12,15 C12,16.1045695 11.3204455,17 10.5044548,17 L1.49554521,17 C0.669578397,17 0,16.1122704 0,15 Z M0,27 C0,25.8954306 0.679554462,25 1.49554521,25 L10.5044548,25 C11.3304216,25 12,25.8877296 12,27 C12,28.1045694 11.3204455,29 10.5044548,29 L1.49554521,29 C0.669578397,29 0,28.1122704 0,27 Z M0,39 C0,37.8954306 0.657922267,37 1.49811914,37 L30.0018808,37 C30.8292691,37 31.5,37.8877296 31.5,39 C31.5,40.1045694 30.8420778,41 30.0018808,41 L1.49811914,41 C0.670730784,41 0,40.1122704 0,39 Z" /></g></g></svg>
                            <h4 className="uppercase font-bold">
                                RÉFÉRENCEMENT AU DÉTAIL
                                </h4>
                            <p className="font-normal">Définition de stratégies propres à chaque filiale</p>
                        </div>
                        <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="400">
                            <svg className="mx-auto block" width="60px" viewBox="0 0 100 125"><g><path fill="#5a4d46" d="M59.646,7.411H40.354c-3.537,0-6.415,2.878-6.415,6.416v19.292c0,3.537,2.878,6.414,6.415,6.414h19.293   c3.537,0,6.415-2.877,6.415-6.414V13.827C66.062,10.289,63.184,7.411,59.646,7.411z M62.878,33.119c0,1.781-1.449,3.23-3.231,3.23   H40.354c-1.782,0-3.231-1.449-3.231-3.23V13.827c0-1.782,1.449-3.232,3.231-3.232h19.293c1.782,0,3.231,1.45,3.231,3.232V33.119z" /><path fill="#5a4d46" d="M83.759,66.881h0.006c0.878,0,1.589-0.711,1.589-1.589v-5.646c0-3.538-2.878-6.415-6.415-6.415H51.592v-8.877   c0-0.878-0.711-1.589-1.589-1.589h-0.006c-0.878,0-1.589,0.711-1.589,1.589v8.877H21.062c-3.537,0-6.415,2.877-6.415,6.415v5.646   c0,0.878,0.711,1.589,1.589,1.589h0.006c0.878,0,1.589-0.711,1.589-1.589v-5.646c0-1.783,1.448-3.231,3.231-3.231h27.347v8.877   c0,0.878,0.711,1.589,1.589,1.589h0.006c0.878,0,1.589-0.711,1.589-1.589v-8.877h27.347c1.783,0,3.231,1.448,3.231,3.231v5.646   C82.17,66.17,82.881,66.881,83.759,66.881z" /><path fill="#5a4d46" d="M90.193,70.111H77.33c-2.649,0-4.807,2.156-4.807,4.807V87.78c0,2.651,2.157,4.808,4.807,4.808h12.863   c2.65,0,4.807-2.156,4.807-4.808V74.918C95,72.268,92.844,70.111,90.193,70.111z M91.816,87.78c0,0.896-0.729,1.624-1.623,1.624   H77.33c-0.895,0-1.623-0.729-1.623-1.624V74.918c0-0.896,0.729-1.621,1.623-1.621h12.863c0.895,0,1.623,0.726,1.623,1.621V87.78z" /><path fill="#5a4d46" d="M43.568,70.111c-2.649,0-4.807,2.156-4.807,4.807V87.78c0,2.651,2.157,4.808,4.807,4.808h12.863   c2.65,0,4.807-2.156,4.807-4.808V74.918c0-2.65-2.156-4.807-4.807-4.807H43.568z M58.055,74.918V87.78   c0,0.896-0.729,1.624-1.623,1.624H43.568c-0.896,0-1.623-0.729-1.623-1.624V74.918c0-0.896,0.728-1.621,1.623-1.621h12.863   C57.326,73.297,58.055,74.022,58.055,74.918z" /><path fill="#5a4d46" d="M9.807,92.588H22.67c2.649,0,4.807-2.156,4.807-4.808V74.918c0-2.65-2.157-4.807-4.807-4.807H9.807   C7.157,70.111,5,72.268,5,74.918V87.78C5,90.432,7.157,92.588,9.807,92.588z M8.184,74.918c0-0.896,0.728-1.621,1.623-1.621H22.67   c0.896,0,1.623,0.726,1.623,1.621V87.78c0,0.896-0.728,1.624-1.623,1.624H9.807c-0.896,0-1.623-0.729-1.623-1.624V74.918z" /></g></svg>
                            <h4 className="uppercase font-bold">
                                CRÉATION DE SOUS-DOMAINES
                                </h4>
                            <p className="font-normal">Esprit groupe sous un domaine racine commun</p>
                        </div>
                        <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="600">
                            <svg className="mx-auto block" width="60px" viewBox="0 0 100 125"><g><g><g><g><path fill="#5a4d46" d="M89.7,63c0,4.5-3.7,8.2-8.2,8.2H20.2c-4.5,0-8.2-3.7-8.2-8.2V28.3c0-4.5,3.7-8.2,8.2-8.2h61.3      c4.5,0,8.2,3.7,8.2,8.2V63z M82.6,62.6V28.3c0-1-0.7-1.7-1.7-1.7H20.3c-1,0-1.7,0.8-1.7,1.7v34.3c0,1,0.8,1.7,1.7,1.7h60.6      C81.9,64.4,82.6,63.6,82.6,62.6z" /><path fill="#5a4d46" d="M95.2,77c0,2.5-2.1,4.6-4.6,4.6h-80C8.1,81.6,6,79.5,6,77v-3.4h89.2L95.2,77L95.2,77z" /></g></g></g><g><g><g><path fill="#5a4d46" d="M71.5,44.6l-2.8,0.2c-0.3,0.5-0.6,0.9-1,1.3l0.5,2.8c-0.7,0.5-1.5,1-2.3,1.3l-2.1-1.9c-0.5,0.1-1.1,0.2-1.7,0.2L60.4,51      c-0.4-0.1-0.9-0.1-1.3-0.3c-0.4-0.1-0.9-0.3-1.3-0.4l-0.2-2.8c-0.5-0.3-0.9-0.7-1.3-1l-2.8,0.5c-0.5-0.7-1-1.5-1.3-2.3l1.8-2.1      c-0.1-0.5-0.2-1.1-0.2-1.7l-2.3-1.6c0.1-0.4,0.1-0.9,0.3-1.3s0.3-0.9,0.4-1.3l2.8-0.2c0.3-0.5,0.6-0.9,1-1.3l-0.5-2.8      c0.7-0.5,1.5-1,2.3-1.3l2.1,1.9c0.6-0.1,1.1-0.2,1.7-0.2l1.6-2.3c0.4,0.1,0.9,0.1,1.3,0.3c0.4,0.1,0.9,0.3,1.3,0.4l0.2,2.8      c0.5,0.3,0.9,0.6,1.3,1l2.8-0.5c0.5,0.7,1,1.5,1.3,2.3l-1.8,2.1c0.1,0.5,0.2,1.1,0.2,1.7l2.3,1.6c-0.1,0.4-0.1,0.9-0.3,1.3      C71.8,43.8,71.7,44.2,71.5,44.6z M64.5,42.9c1.3-1.4,1.2-3.7-0.3-4.9c-1.4-1.3-3.7-1.2-4.9,0.3c-1.3,1.4-1.2,3.7,0.3,4.9      C60.9,44.5,63.2,44.4,64.5,42.9z" /></g></g><g><g><path fill="#5a4d46" d="M41.2,60.8l-1.1-2.6c-0.6-0.1-1.1-0.3-1.6-0.5L36,59.1c-0.7-0.5-1.4-1.1-2-1.7l1-2.6c-0.3-0.5-0.6-1-0.8-1.5l-2.7-0.8      c-0.1-0.4-0.2-0.9-0.2-1.3c0-0.4,0-0.9,0-1.3l2.6-1.1c0.1-0.6,0.3-1.1,0.5-1.6l-1.4-2.5c0.5-0.7,1.1-1.4,1.7-2l2.6,1      c0.5-0.3,1-0.6,1.5-0.8l0.8-2.7c0.4-0.1,0.9-0.2,1.3-0.2c0.5,0,0.9,0,1.3,0l1.1,2.6c0.6,0.1,1.1,0.3,1.6,0.5l2.5-1.4      c0.7,0.5,1.4,1.1,2,1.7l-1,2.6c0.3,0.5,0.6,1,0.8,1.5l2.7,0.8c0.1,0.4,0.2,0.9,0.2,1.3c0,0.5,0,0.9,0,1.3L49.7,52      c-0.1,0.6-0.3,1.1-0.5,1.6l1.4,2.5c-0.5,0.7-1.1,1.4-1.7,2l-2.6-1c-0.5,0.3-1,0.6-1.5,0.8l-0.8,2.7c-0.4,0.1-0.9,0.2-1.3,0.2      C42.1,60.8,41.7,60.8,41.2,60.8z M40.5,53.6c1.8,0.7,3.8-0.1,4.6-1.9c0.7-1.8-0.1-3.8-1.9-4.6c-1.8-0.7-3.8,0.1-4.6,1.9      C37.8,50.8,38.7,52.8,40.5,53.6z" /></g></g></g></g></svg>
                            <h4 className="uppercase font-bold">
                                PORTAIL D'ADMINISTRATION
                                </h4>
                            <p className="font-normal">Accès rapide à l'administration des différents sites</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 text-csd1 text-center flex mb-12 flex-col lg:flex-row">
                        <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="800">
                            <svg className="mx-auto block" width="60px" viewBox="0 0 100 125"><g><path fill="#5a4d46" d="M90.737,95H55.234c-2.354,0-4.263-1.909-4.263-4.263c0-2.354,1.909-4.263,4.263-4.263h31.241v-72.95h-72.95v30.154   c0,2.354-1.909,4.263-4.263,4.263S5,46.032,5,43.679V9.262C5,6.908,6.909,5,9.263,5h81.475C93.091,5,95,6.908,95,9.262v81.475   C95,93.092,93.091,95,90.737,95z" /></g><g><g><path fill="#5a4d46" d="M76.211,28.048v15.601c0,2.355-1.907,4.263-4.263,4.263s-4.263-1.907-4.263-4.263v-5.307L49.879,56.148    c-0.831,0.831-1.918,1.247-3.016,1.247c-1.087,0-2.174-0.416-3.005-1.247c-1.673-1.662-1.673-4.369,0-6.031L61.654,32.31h-5.296    c-2.355,0-4.263-1.907-4.263-4.263c0-2.355,1.907-4.263,4.263-4.263h15.59C74.303,23.785,76.211,25.693,76.211,28.048z" /></g></g><g><path fill="#5a4d46" d="M38.568,95H9.263C6.909,95,5,93.092,5,90.738V61.433c0-2.354,1.909-4.263,4.263-4.263h29.305   c2.354,0,4.263,1.909,4.263,4.263v29.305C42.83,93.092,40.922,95,38.568,95z M13.525,86.475h20.78v-20.78h-20.78V86.475z" /></g></svg>
                            <h4 className="uppercase font-bold">
                                MISE EN PLACE D'UN POP-UP
                                </h4>
                            <p className="font-normal">Conservation du lien entre les différents sous-domaines</p>
                        </div>
                        <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="1000">
                            <svg width="60px" className="mx-auto block" viewBox="0 0 99.402 125"><path fill="#5a4d46" d="M99.402,76.974v-3.939h-0.558v-5.006h-3.939v5.006H83.089v-5.006H79.15v5.006H67.333v-5.006h-3.939v5.006h-9.85  l-0.509-8.346c3.41-0.779,6.484-2.739,8.62-5.553c1.641,0.604,3.356,0.91,5.12,0.91c8.241,0,14.948-6.707,14.948-14.95  c0-3.277-1.05-6.398-2.993-8.973c2.633-2.763,4.11-6.415,4.11-10.287c0-8.243-6.707-14.95-14.95-14.95  c-1.169,0-2.321,0.135-3.445,0.4C62.794,4.794,56.844,0,49.963,0c-7.007,0-12.95,4.862-14.526,11.468  c-1.333-0.387-2.708-0.582-4.112-0.582c-8.243,0-14.95,6.707-14.95,14.95c0,4.171,1.755,8.131,4.776,10.942  c-1.65,2.453-2.543,5.342-2.543,8.318c0,8.243,6.707,14.95,14.95,14.95c1.522,0,3.015-0.229,4.454-0.681  c2.081,2.65,4.953,4.483,8.171,5.269l-0.512,8.402h-9.85v-5.006h-3.939v5.006H20.067v-5.006h-3.939v5.006H4.311v-5.006H0.372v5.006  H0v3.939h0.372v13.982H0v3.939h0.372v4.129h3.939v-4.129h11.817v4.129h3.939v-4.129h11.817v4.129h3.939v-4.129h8.517L44.028,100  h11.16l-0.311-5.105h8.517v4.129h3.939v-4.129H79.15v4.129h3.939v-4.129h11.817v4.129h3.939v-4.129h0.558v-3.939h-0.558V76.974  H99.402z M4.311,90.956V76.974h11.817v13.982H4.311z M20.067,90.956V76.974h11.817v13.982H20.067z M35.822,90.956V76.974h9.61  L44.58,90.956H35.822z M54.637,90.956l-0.852-13.982h9.61v13.982H54.637z M67.333,90.956V76.974H79.15v13.982H67.333z   M94.906,90.956H83.089V76.974h11.817V90.956z" /></svg>
                            <h4 className="uppercase font-bold">
                                VITRINE DES ACTIVITÉS DU GROUPE
                                </h4>
                            <p className="font-normal">Promotion des différentes prestations proposées</p>
                        </div>
                        <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="1200">
                            <svg className="mx-auto block" width="60px" viewBox="0 0 100 125"><g><path fill="#5a4d46" d="M89.8,49c0,0.1,1.5-1.3,1.5-1.2h8.7L84.9,65.3L69.6,47.8h8.7c0-0.1,1.9,1.3,1.9,1.2c0-16.7-12.9-30.2-28.8-30.2   c-7.2,0-13.8,2.8-18.8,7.4l-6.4-7.6c6.8-6.2,15.6-9.9,25.2-9.9C72.6,8.7,89.8,26.8,89.8,49z" /><path fill="#5a4d46" d="M10.2,51c0-0.1-1.5,1.3-1.5,1.2H0l15.1-17.5l15.3,17.5h-8.7c0,0.1-1.9-1.3-1.9-1.2c0,16.7,12.9,30.2,28.8,30.2   c7.2,0,13.8-2.8,18.8-7.4l6.4,7.6c-6.8,6.2-15.6,9.9-25.2,9.9C27.4,91.3,10.2,73.2,10.2,51z" /></g></svg>
                            <h4 className="uppercase font-bold">
                                MISES À JOUR
                                </h4>
                            <p className="font-normal">Mises à jour régulières du site conformes au SEO</p>
                        </div>
                    </div>
                </section>
                <section className="h-full w-full mt-32 flex flex-col lg:flex-row">
                    <div className="w-fulllg:w-1/2 text-black  py-8 px-12 lg:px-24 mb-24 xl:px-48" data-aos="fade-right">
                        <h2 className="font-normal text-3xl my-2 uppercase"><span className="text-csd">/</span>Un accès facilité à l’administration</h2>
                        <br />
                        <p className="font-normal text-justify">
                            Un seul portail permet un accès direct à l’administration des trois sous-domaines du groupe.
                            </p>
                        <br />
                        <ul className="font-normal text-justify">
                            <li className="flex flex-row">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#5a4d46" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#5a4d46" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                    Mise en place d’un espace d’administration multisite.
                                </li>
                            <br />
                            <li className="flex flex-row">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#5a4d46" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#5a4d46" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                    Accès direct à chaque sous-domaine.
                                </li>
                            <br />
                            <li className="flex flex-row">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#5a4d46" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#5a4d46" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                    Espaces d’administration propres à chaque sous-domaine.
                                </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 mx-auto block order-first lg:order-last" data-aos="fade-left">
                        <img className="pl-24 md:pr-0 lg:ml-0 lg:pr-0 xl:pr-0 pb-16 xl:py-0 xl:pb-32" src={smartphone} width="700px" alt="Création site internet Toulouse" />
                    </div>
                </section>
                <section className="h-full w-full flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 mx-auto block" data-aos="fade-right">
                        <img className="mx-auto block px-24 xl:px-32 pb-16 xl:py-0 xl:pb-32" src={mockup} alt="Création site internet Toulouse" />
                    </div>
                    <div className="w-full lg:w-1/2 mt-5 lg:mt-8 text-black px-12 lg:px-24 xl:px-48" data-aos="fade-left">
                        <h2 className="font-normal text-3xl my-2 uppercase"><span className="text-csd1">/</span>une stratégie de référencement au détail</h2>
                        <br />
                        <p className="font-normal text-justify">
                            Définition de stratégies de référencement propres à chaque filiale du groupe Faivre Environnement.
                            </p>
                        <br />
                        <ul className="font-normal text-justify">
                            <li className="flex flex-row">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#aace57" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#aace57" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                    Ciblage géographique personnalisé.
                                </li>
                            <br />
                            <li className="flex flex-row">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#aace57" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#aace57" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                    Mise en place d’objectifs SEO sur-mesure.
                                </li>
                            <br />
                            <li className="flex flex-row">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#aace57" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#aace57" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                    Création de contenus textuels optimisés et adaptés pour chaque filiale.
                                </li>
                        </ul>
                    </div>
                </section>
                <section className=" w-full h-full flex flex-col justify-center items-end px-4 pt-12 pb-0 bg-cover mt-24" style={{ background: 'url( ' + bloccontact + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className="max-w-5xl mx-auto flex items-center flex-col py-6" data-aos="fade-down" >
                        <br />
                        <svg className="mx-auto block" width="80px" viewBox="0 0 100 125"><path fill="#5a4d46" d="M64.84509,52.57434H54.45068c2.20191-7.42346,6.02661-12.75745,10.39441-13.81421Zm0,3.17908H53.63623a52.05778,52.05778,0,0,0-1.14429,9.53711H64.84509Zm0,39.24658V81.18573H54.45068C56.65259,88.60925,60.47729,93.94324,64.84509,95Zm0-26.5304H52.49194a52.05831,52.05831,0,0,0,1.14429,9.53711H64.84509ZM37.86963,65.29053H49.30945a56.25569,56.25569,0,0,1,1.04309-9.53711H40.07544A28.41134,28.41134,0,0,0,37.86963,65.29053Zm2.20581,12.71618h10.2771a56.25569,56.25569,0,0,1-1.04309-9.53711H37.86963A28.41168,28.41168,0,0,0,40.07544,78.00671ZM68.02417,65.29053h12.353a52.02563,52.02563,0,0,0-1.14429-9.53711H68.02417Zm0-26.5304V52.57434H78.41846C76.21667,45.15088,72.39185,39.81689,68.02417,38.76013ZM57.718,39.631A28.74514,28.74514,0,0,0,41.67236,52.57434h9.429C52.57581,47.14423,54.87463,42.65784,57.718,39.631Zm0,54.49811c-2.84339-3.02686-5.14221-7.51318-6.6167-12.94336h-9.429A28.74465,28.74465,0,0,0,57.718,94.12909ZM91.19678,81.18573H81.76807c-1.47461,5.43018-3.77344,9.9165-6.61682,12.94336A28.744,28.744,0,0,0,91.19678,81.18573Zm0-28.61139A28.7445,28.7445,0,0,0,75.15125,39.631c2.84338,3.02686,5.14221,7.51325,6.61682,12.94336Zm1.597,3.17908h-10.277a56.24475,56.24475,0,0,1,1.043,9.53711h11.4397A28.4081,28.4081,0,0,0,92.79382,55.75342ZM68.02417,78.00671H79.23291A52.02616,52.02616,0,0,0,80.3772,68.4696h-12.353ZM94.99951,68.4696H83.55981a56.24475,56.24475,0,0,1-1.043,9.53711h10.277A28.40844,28.40844,0,0,0,94.99951,68.4696ZM68.02417,95c4.36768-1.05676,8.1925-6.39075,10.39429-13.81427H68.02417ZM4.99951,75.85107V12.41455A7.42307,7.42307,0,0,1,12.41455,5H87.58447a7.42307,7.42307,0,0,1,7.415,7.41455v39.708a32.2972,32.2972,0,0,0-5-7.10376V22.553h-80V75.85107a2.41719,2.41719,0,0,0,2.415,2.41456H36.3584a32.05257,32.05257,0,0,0,2.41333,5H12.41455A7.42308,7.42308,0,0,1,4.99951,75.85107Zm45-59.27685A1.51083,1.51083,0,0,0,51.51025,18.085H84.489a1.5107,1.5107,0,0,0,1.5105-1.51074V13.59546A1.5105,1.5105,0,0,0,84.489,12.085H51.51025a1.51062,1.51062,0,0,0-1.51074,1.5105ZM35.61658,15.085a3,3,0,1,0,3-3A3.00007,3.00007,0,0,0,35.61658,15.085Zm-11,0a3,3,0,1,0,3-3A3.00007,3.00007,0,0,0,24.61658,15.085Zm-11,0a3,3,0,1,0,3-3A3.00007,3.00007,0,0,0,13.61658,15.085Z" /></svg>
                        <h2 data-aos='fade-right' className="text-center text-csd1 text-2xl md:text-5xl century">
                            Vous souhaitez mettre en place un projet similaire à celui-ci ? Travaillons ensemble !
                            </h2>
                    </div>
                    <div className="max-w-6xl mx-auto flex text-center my-12" data-aos="zoom-in">
                        {/* <RappelForm /> */}
                        <RoundButton color="csd1" colortext="white" url="/contact-agence-web-toulouse/" text="Je veux améliorer ma visibilité sur internet" />
                    </div>
                    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start text-center my-12">
                        <div className="w-full sm:w-1/3 px-6 sm:px-12 py-2 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                            <Link to="/agence-digitale-toulouse/">
                                <svg className="mx-auto block" viewBox="0 0 100 125" width="80px"><path fill="#5a4d46" d="M9.72,57.45a2.31,2.31,0,0,0,.86-3.15l-.58-1,7.8-1.44,1.54,2.69a9.71,9.71,0,0,0,18-6.29l16.9-3.11,1.18,2.06a2.31,2.31,0,1,0,4-2.29L37.67,6.81a2.31,2.31,0,0,0-4,2.29l1,1.71-29.48,34-.38-.66a2.31,2.31,0,1,0-4,2.29L6.57,56.59A2.31,2.31,0,0,0,9.72,57.45Zm23.11-8.37a5.1,5.1,0,0,1-9.48,3.16L22.61,51ZM53.61,23a2.55,2.55,0,0,1,.95-3.48l7.58-4.33a2.55,2.55,0,1,1,2.53,4.42L57.08,24A2.55,2.55,0,0,1,53.61,23Zm-4.19-5.21a2.52,2.52,0,0,1-.27-3.43l5.58-7a2.52,2.52,0,1,1,3.94,3.14l-5.58,7a2.53,2.53,0,0,1-1.77.94h-.19A2.53,2.53,0,0,1,49.42,17.81ZM56,29.27a2.52,2.52,0,0,1,2.11-3L66.94,25a2.52,2.52,0,1,1,.71,5l-8.86,1.26-.35,0A2.53,2.53,0,0,1,56,29.27Zm-30,65.09A2.93,2.93,0,0,1,23,91.42V81.19a2.93,2.93,0,0,1,2.93-2.93h7.94a2.93,2.93,0,0,1,2.93,2.93V91.42a2.93,2.93,0,0,1-2.93,2.93Zm19.67,0a2.93,2.93,0,0,1-2.93-2.93V77.76a2.93,2.93,0,0,1,2.93-2.93h7.94a2.93,2.93,0,0,1,2.93,2.93V91.42a2.93,2.93,0,0,1-2.93,2.93ZM76.17,70V91.42a2.93,2.93,0,0,1-2.93,2.93H65.29a2.93,2.93,0,0,1-2.93-2.93V70a2.93,2.93,0,0,1,2.93-2.93h7.94A2.93,2.93,0,0,1,76.17,70ZM95.84,55.46v35.9a3,3,0,0,1-2.93,3H85a3,3,0,0,1-2.93-3V55.46a3,3,0,0,1,2.93-3H92.9A3,3,0,0,1,95.84,55.46Zm3.63-19A3,3,0,0,1,97.16,40a3,3,0,0,1-3.56-2.3L92.38,32A84.28,84.28,0,0,1,71.72,54.85,79.16,79.16,0,0,1,48.61,66.91,77.28,77.28,0,0,1,25,70.9c-1.35,0-2.15-.05-2.23-.06a3,3,0,0,1,.43-6s.59,0,1.67,0a72.67,72.67,0,0,0,22-3.74c16.92-5.6,30.5-16.48,40.38-32.36L81.71,30a3,3,0,0,1-1.25-5.86l12.73-2.72a3,3,0,0,1,3.56,2.3Z" /></svg>
                                <p className="text-xl text-csd1 century pt-3">WEBMARKETING</p>
                            </Link>
                        </div>
                        <div className="w-full sm:w-1/3 sm:px-12 py-2 flex flex-col items-center justify-center sm:my-0 my-6" data-aos='zoom-in' data-aos-delay="400">
                            <Link to="/referencement-toulouse/">
                                <svg className="mx-auto block" width="80px" viewBox="0 0 1024 1280"><g><g><g><path fill="#5a4d46" d="M746.5,322c11.7,29,19.7,59.3,24,90.3c-0.6-4.4-1.2-8.9-1.8-13.3c4.4,33.2,4.4,66.9,0,100.1     c0.6-4.4,1.2-8.9,1.8-13.3c-4.5,33-13.3,65.2-26.2,95.8c1.7-4,3.4-8,5-11.9c-12.4,29-28.3,56.3-47.5,81.3     c2.6-3.4,5.2-6.7,7.8-10.1c-19.8,25.6-42.7,48.6-68.3,68.4c3.4-2.6,6.7-5.2,10.1-7.8c-25.5,19.6-53.4,35.9-83,48.4     c4-1.7,8-3.4,11.9-5c-30.3,12.6-62,21.3-94.5,25.7c4.4-0.6,8.9-1.2,13.3-1.8c-33.2,4.4-66.8,4.4-100,0c4.4,0.6,8.9,1.2,13.3,1.8     c-32.5-4.4-64.3-13.1-94.5-25.7c4,1.7,8,3.4,11.9,5c-29.6-12.5-57.5-28.8-83-48.4c3.4,2.6,6.7,5.2,10.1,7.8     c-25.4-19.7-48.3-42.6-68-68c2.6,3.4,5.2,6.7,7.8,10.1c-19.6-25.5-35.9-53.4-48.4-83c1.7,4,3.4,8,5,11.9     c-12.6-30.3-21.3-62-25.7-94.5c0.6,4.4,1.2,8.9,1.8,13.3c-4.4-33.2-4.4-66.8,0-100c-0.6,4.4-1.2,8.9-1.8,13.3     c4.4-32.5,13.1-64.3,25.7-94.5c-1.7,4-3.4,8-5,11.9c12.5-29.6,28.8-57.5,48.4-83c-2.6,3.4-5.2,6.7-7.8,10.1     c19.7-25.4,42.6-48.3,68-68c-3.4,2.6-6.7,5.2-10.1,7.8c25.5-19.6,53.4-35.9,83.1-48.4c-4,1.7-8,3.4-11.9,5     c30.4-12.7,62.2-21.3,94.9-25.7c-4.4,0.6-8.9,1.2-13.3,1.8c32.9-4.3,66.2-4.3,99.1,0c-4.4-0.6-8.9-1.2-13.3-1.8     c33.1,4.5,65.5,13.3,96.2,26.2c-4-1.7-8-3.4-11.9-5c3.6,1.6,7.3,3.2,10.9,4.8c5.7,3.7,11.9,5.6,18.6,5.9     c6.6,1.5,13.3,1.2,19.9-0.9c11.6-3.2,24.2-12.2,29.9-23c6.1-11.6,9.2-25.7,5-38.5c-3.8-11.7-11.3-24.5-23-29.9     C595.6,51.1,559,38.5,520.5,32.5c-38.3-6-76.6-8.3-115.2-3.7c-38.8,4.6-76.4,12.7-112.6,27.7c-19.7,8.1-39,16.9-57.4,27.7     c-19,11.2-36.7,24.2-54,38C121.6,169.8,77.6,234.8,51.1,306.2C38.4,340.5,31.5,376.4,28,412.8c-3.6,36.6-1.1,73,4.8,109.2     c5.9,36.4,17.6,71,32.7,104.6c15.4,34.4,36.2,65.5,60.1,94.5c48,58.4,112.6,101.4,183.4,127c34.6,12.5,70.8,19.3,107.4,22.5     c36.3,3.2,72.6,0.5,108.5-5.5c73.5-12.4,141.7-46.6,198.6-94.1c61-51,106-120.7,129.8-196.3c23.3-74.1,24.8-155.2,5.8-230.4     c-4.2-16.6-9.6-32.9-16-48.9c-1.5-6.5-4.5-12.2-8.9-17c-3.5-5.4-8.2-9.7-14-12.9c-10.7-6.3-26.5-8.9-38.5-5     c-12.1,3.9-23.8,11.4-29.9,23C745.7,294.6,741.6,309.8,746.5,322L746.5,322z" /></g></g><g><g><path fill="#5a4d46" d="M983.2,912.5c-26.5-26.5-53.1-53.1-79.6-79.6c-42.2-42.2-84.4-84.4-126.6-126.6     c-9.6-9.6-19.2-19.2-28.7-28.7c-9.1-9.1-22.5-14.6-35.4-14.6c-12.3,0-26.9,5.4-35.4,14.6c-8.7,9.5-15.2,22-14.6,35.4     c0.6,13.3,5.1,25.8,14.6,35.4c26.5,26.5,53.1,53.1,79.6,79.6c42.2,42.2,84.4,84.4,126.6,126.6c9.6,9.6,19.2,19.2,28.7,28.7     c9.1,9.1,22.5,14.6,35.4,14.6c12.3,0,26.9-5.4,35.4-14.6c8.7-9.5,15.2-22,14.6-35.4C997.2,934.5,992.7,922,983.2,912.5     L983.2,912.5z" /></g></g><g><g><g><path fill="#5a4d46" d="M322.7,568c22.6-22.6,45.2-45.2,67.8-67.8c36-36,72-72,107.9-107.9c8.2-8.2,16.4-16.4,24.6-24.6      c-23.6,0-47.1,0-70.7,0c15.6,15.6,31.2,31.2,46.8,46.8c24.9,24.9,49.8,49.8,74.7,74.7c5.7,5.7,11.5,11.5,17.2,17.2      c19.1,19.1,51.6,19.1,70.7,0c10.6-10.6,21.3-21.3,31.9-31.9c25.6-25.6,51.1-51.1,76.7-76.7c30.9-30.9,61.8-61.8,92.8-92.8      c26.7-26.7,53.4-53.4,80.1-80.1c12.9-12.9,26.1-25.7,38.8-38.8c0.2-0.2,0.4-0.4,0.6-0.6c9.1-9.1,14.6-22.5,14.6-35.4      c0-12.3-5.4-26.9-14.6-35.4c-9.5-8.7-22-15.2-35.4-14.6c-13.3,0.6-25.8,5.1-35.4,14.6c-10.6,10.6-21.3,21.3-31.9,31.9      c-25.6,25.6-51.1,51.1-76.7,76.7c-30.9,30.9-61.8,61.8-92.8,92.8c-26.7,26.7-53.4,53.4-80.1,80.1      c-12.9,12.9-26.1,25.7-38.8,38.8c-0.2,0.2-0.4,0.4-0.6,0.6c23.6,0,47.1,0,70.7,0c-15.6-15.6-31.2-31.2-46.8-46.8      c-24.9-24.9-49.8-49.8-74.7-74.7c-5.7-5.7-11.5-11.5-17.2-17.2c-19.1-19.1-51.6-19.1-70.7,0c-22.6,22.6-45.2,45.2-67.8,67.8      c-36,36-72,72-107.9,107.9c-8.2,8.2-16.4,16.4-24.6,24.6c-9.1,9.1-14.6,22.5-14.6,35.4c0,12.3,5.4,26.9,14.6,35.4      c9.5,8.7,22,15.2,35.4,14.6C300.6,582,313.1,577.6,322.7,568L322.7,568z" /></g></g><g><g><path fill="#5a4d46" d="M797.8,199.7c43.7,0,87.5,0,131.2,0c6.3,0,12.5,0,18.8,0c-16.7-16.7-33.3-33.3-50-50      c0,43.7,0,87.5,0,131.2c0,6.3,0,12.5,0,18.8c0,12.8,5.6,26.3,14.6,35.4c8.7,8.7,22.9,15.2,35.4,14.6      c12.9-0.6,26.3-4.8,35.4-14.6c9-9.8,14.6-21.8,14.6-35.4c0-43.7,0-87.5,0-131.2c0-6.3,0-12.5,0-18.8c0-27-22.9-50-50-50      c-43.7,0-87.5,0-131.2,0c-6.3,0-12.5,0-18.8,0c-12.8,0-26.3,5.6-35.4,14.6c-8.7,8.7-15.2,22.9-14.6,35.4      c0.6,12.9,4.8,26.3,14.6,35.4C772.2,194,784.3,199.7,797.8,199.7L797.8,199.7z" /></g></g></g></g></svg>
                                <p className="text-xl century text-csd1 pt-3">RÉFÉRENCEMENT NATUREL</p>
                            </Link>
                        </div>
                        <div className="w-full sm:w-1/3 px-12 py-2 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="600">
                            <Link to="/agence-adwords-47-31/">
                                <svg className="mx-auto block" width="80px" viewBox="0 0 100 125"><path fill="#5a4d46" d="M84.9,18.3l7.2-4c1-0.5,2.2-0.2,2.7,0.8l0,0c0.5,1,0.2,2.2-0.8,2.7l-7.2,4c-1,0.5-2.2,0.2-2.7-0.8l0,0  C83.6,20.1,84,18.8,84.9,18.3z M83.2,15.9l5.3-6.5c0.7-0.8,0.6-2-0.2-2.7c-0.8-0.8-2.2-0.7-2.9,0.2l-5.3,6.5c-0.7,0.8-0.6,2,0.2,2.7  C81.1,16.8,82.5,16.8,83.2,15.9z M98.5,25.2c-0.2-1-1.2-1.7-2.2-1.6l-8.3,1c-1.2,0.1-1.9,1.2-1.7,2.4c0.2,1,1.2,1.7,2.2,1.6l8.3-1  C98,27.5,98.8,26.4,98.5,25.2z M49.8,93.9h8.6c4.6,0,8.3-3.7,8.3-8.3V85l-5,2.5L49.8,93.9z M86.2,41.2c0.5,1,0.3,2.2-0.6,2.8  c-1,0.7-2.3,0.4-2.9-0.6c0,0,0,0,0,0c-8.8-2.3-18.3,0.1-23.8,2.1c0,0,0,0,0,0.1l0.9,1.7c0,0,0,0,0,0.1l-4.2,2.3c0,0,0,0,0,0.1  l4.9,5.3c0,0,0,0,0,0c2-1.5,5.6-3.7,8.1-3.1c2.9,0.7,2.8,3.7,2.8,4c0,0,0,0,0,0c0.4,0.1,4.1,1.2,3,5.5c0,0,0,0,0,0  c0.3,0.2,3.4,2.2,1.6,6.2c0,0,0,0,0,0c0.3,0.3,3.6,3.5-1.5,7.9c-1.6,1.3-3.8,2.6-6,3.5c0,0,0,0,0,0l-8.8,4.4c0,0,0,0,0,0l-8.9,4.8  h0.1l-1.3,0.7l-8.8,4.8c0,0,0,0,0,0h-0.4h-4.5H9.7c-1,0-1.9-0.2-2.8-0.5c-3.2-1.2-5.5-4.2-5.5-7.8V41.7c0-4.7,3.8-8.4,8.4-8.4h22.3  c-0.4,0.7-0.8,1.4-1,2.2c-0.5,1.8-0.5,3.7,0.1,5.5c-0.3,0.5-0.6,1-0.7,1.6c-0.4,1.5-0.3,3.1,0.5,4.5l1.2,2.1H6.9v34.3v1.1  c0,2.1,1.7,3.8,3.8,3.8h4.6l29.3-15.7c1.1-0.6,1.9-1.6,2.3-2.8c0.1-0.5,0.2-0.9,0.2-1.2c0-0.2-0.1-0.4-0.1-0.6v0  c-0.1-0.8-0.1-1.9,0.2-3.1c0,0,2-6.1,6.2-7.8c0,0,0,0,0-0.1L49.4,53c0,0,0,0,0,0l-1,0.5c-2.3,1.3-5.2,0.4-6.5-1.9l-0.8-1.5  c0,0,0,0-0.1,0l-1.2,0.7c-0.8,0.4-1.8,0.1-2.2-0.6L34.8,45c-0.4-0.8-0.1-1.8,0.6-2.2l1.2-0.7c0,0,0,0,0-0.1l-1-1.8  c-1.3-2.3-0.4-5.2,1.9-6.5L49,27.5c0,0,0,0,0.1,0l0.9,1.7c0,0,0,0,0.1,0c4.6-3.6,11.7-10.3,14.5-19c0,0,0,0,0,0  c-0.5-1,0-2.3,1.1-2.8c1-0.4,2.2,0.1,2.7,1L74.1,19c0,0,0,0,0,0c2.8-0.4,5.7,0.9,7.1,3.6c1.4,2.6,1,5.8-0.8,7.9c0,0,0,0,0,0  L86.2,41.2z M53.1,45.2l-6-10.9c0,0,0,0-0.1,0l-6.8,3.8c0,0,0,0,0,0.1l6,10.9c0,0,0,0,0.1,0L53.1,45.2  C53.1,45.3,53.1,45.2,53.1,45.2z M21.9,41.4c0,1.3,1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4  C23,39,21.9,40.1,21.9,41.4z M14.9,41.4c0,1.3,1.1,2.4,2.4,2.4h0c1.2,0,2.1-0.8,2.3-1.9c0-0.2,0-0.3,0-0.5c0-0.2,0-0.3,0-0.5  c-0.2-1.1-1.2-1.9-2.3-1.9h0C16,39,14.9,40.1,14.9,41.4z M8,41.4c0,1.3,1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4  c0-1.3-1.1-2.4-2.4-2.4C9,39,8,40.1,8,41.4z" /></svg>
                                <p className="text-xl century text-csd1 pt-3">RÉFÉRENCEMENT GOOGLE ADS</p>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-around md:justify-between mt-24">
                        <div className="text-center py-3 px-4 font-bold text-black flex flex-col mx-5 bg-white w-1/3 lg:1/6 xl:w-1/12 hover:text-bleu" ata-aos="fade-right">
                            <Link to="/realisations/sdis47/"><svg style={{ maxWidth: '25px' }} className="mx-auto inline-block align-text-middle" width="20px" viewBox="0 0 40 50" x="0px" y="0px"><g fill="#000000" fill-rule="evenodd"><path fill="#000000" d="m20 0c-11.05 0-20 8.954-20 20 0 11.05 8.954 20 20 20 11.05 0 20-8.954 20-20 0-11.05-8.954-20-20-20m5.056 9.981c.725.715.725 1.874 0 2.588l-7.966 7.853 7.966 7.853c.725.715.725 1.874 0 2.589-.725.715-1.901.715-2.626 0l-9.279-9.147c-.725-.715-.725-1.874 0-2.589l9.279-9.147c.362-.358.838-.536 1.313-.536.475 0 .95.179 1.313.536" /></g></svg></Link>
                            <Link className="mx-auto block" to="/realisations/sdis47/">Précédent</Link>
                        </div>
                        <div className="text-center py-3 font-bold text-black flex flex-col bg-white w-1/3 lg:1/6 xl:w-1/12 hover:text-bleu" data-aos="fade-left">
                            <Link className="mx-auto block order-last" to="/realisations/gabriel-services/">Suivant</Link>
                            <Link className="mx-auto inline-block align-text-middle" to="/realisations/gabriel-services/"><svg style={{ maxWidth: '25px' }} width="20px" viewBox="0 0 0.689 0.86125" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd"><defs></defs><g><path class="fil0" d="M0.46 0.367l-0.148 0.147c-0.012,0.013 -0.032,0.013 -0.044,0 -0.012,-0.012 -0.012,-0.032 0,-0.044l0.126 -0.125 -0.126 -0.126c-0.012,-0.012 -0.012,-0.032 0,-0.044 0.012,-0.012 0.032,-0.012 0.044,0l0.148 0.147c0.012,0.013 0.012,0.032 0,0.045zm-0.46 -0.022c0,0.095 0.039,0.181 0.101,0.243 0.062,0.063 0.148,0.101 0.244,0.101 0.095,0 0.181,-0.038 0.243,-0.101 0.063,-0.062 0.101,-0.148 0.101,-0.243 0,-0.096 -0.038,-0.182 -0.101,-0.244 -0.062,-0.062 -0.148,-0.101 -0.243,-0.101 -0.096,0 -0.182,0.039 -0.244,0.101 -0.062,0.062 -0.101,0.148 -0.101,0.244z" /></g></svg></Link>
                        </div>
                    </div>
                </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsfaivre {
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
export default faivre;
