import React from "react";
import { Link, graphql } from "gatsby";
import posed from 'react-pose';
import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import Accordion from '../components/accordion';

import tlse from "../images/logo_universite-federale.png";
import peugeot from "../images/peugeot.png";
import onco from "../images/logo-onco.png";
import sdis from "../images/logo-sdis47.png";
import normand from "../images/normandie.png";
import blocBg from "../images/background.jpg";
import Bg from "../images/background-referencement.jpg";
import imac from "../images/smartphone.jpg";
import bgDev from '../images/bg-dev.jpg';
import stars from '../images/stars.png';

import web from '../images/web.svg';
import laptop from '../images/laptop.svg';
import bullhorn from '../images/bullhorn.svg';
import diagram from '../images/diagram.svg';
import analysis from '../images/analysis.svg';
import contract from '../images/contract.svg';
import hg from "../images/logo_cd31.svg";


class ReferencementToulouse extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Référencement Toulouse / Agen - Agence Web Linkweb"
                    description="Définition stratégique et mise en application pour votre projet de référencement naturel ou sponsorisé Google Ads - Suivi régulier."
                    keywords={[`Référencement Agen`, `Référencement Toulouse`, `Agence de Référencement Agen`, `Agence de Référencement Toulouse`, `Référencement Google`]}
                    url="https://linkweb.fr/referencement-toulouse/"
                    nom="Référencement à Toulouse"
                    slug="referencement-toulouse/"
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
                    <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ background:'#00000094 url(' + Bg + ')', backgroundBlendMode:'multiply', backgroundPosition:'bottom' }}>
                        <h1 /*data-aos="fade-up" data-aos-delay="500"*/ className="century text-5xl sm:text-6xl md:text-6xl lg:text-6xl text-center text-white">
                            Référencement Toulouse<span className="text-bleu">/</span>Agen
                        </h1>
                        <h3 className="italic text-center text-lg sm:text-2xl text-white mt-3">Sortez de l’ombre, devenez visible sur les moteurs de recherche grâce au référencement</h3>
                        <RoundButton url="/contact-agence-web-toulouse/" text="Je veux améliorer ma visibilité sur internet" />
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <h3 /*data-aos='fade-right'*/ className="text-center text-4xl century">
                            Nous travaillons main dans la main pour améliorer votre visibilité.
                        </h3>
                        <hr className="blue"></hr>

                    </section>
                    <section className="max-w-5xl flex-wrap jusitfy-center flex w-full mx-auto px-4 py-2 my-2">
                        <div className="w-1/3 md:w-1/6 mb-10" /*data-aos='fade-up'*/>
                            <img
                                src={peugeot}
                                alt="Référencement Toulouse"
                            />
                        </div>
                        <div className="w-1/3 md:w-1/6" /*data-aos='fade-up' data-aos-delay='200'*/>
                            <img
                                src={normand}
                                alt="Référencement Agen"
                            />
                        </div>
                        <div className="w-1/3 md:w-1/6" /*data-aos='fade-up' data-aos-delay='400'*/>
                            <img
                                src={onco}
                                alt="Agence Référencement Toulouse"
                            />
                        </div>
                        <div className="w-1/3 md:w-1/6 mx-auto block" /*data-aos='fade-up' data-aos-delay='600'*/>
                            <img
                                src={tlse}
                                alt="Référencement Toulouse"
                            />
                        </div>
                        <div className="w-1/3 md:w-1/6 mx-auto block" /*data-aos='fade-up' data-aos-delay='800'*/>
                            <img
                                src={sdis}
                                alt="Référencement Agen"
                            />
                        </div>
                        <div className="w-1/3 md:w-1/6 mx-auto block" /*data-aos='fade-up' data-aos-delay='1000'*/>
                        <img 
                            className="mx-12"
                            src={hg}
                            alt="Réalisations Site Web Agen"
                            width="65px"
                        />
                        </div>
                        <div className="w-full" /*data-aos='zoom-in'*/>
                            <p className="text-md text-center py-12 century">Avoir un site internet n’est pas une fin en soi : il doit nécessairement être visible sur internet. C’est le principe du référencement web. Faites de votre site une référence pour les moteurs de recherche.</p>
                        </div>
                    </section>
                    <section className="flex-wrap flex-col md:flex-row flex w-full max-w-5xl mx-auto py-2 my-2 ">
                        <div className=" font-bold w-full md:w-1/2 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white" style={{ background: '#00cfff url( ' + blocBg + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                            <h2 className="text-xl pb-6" ><span className="text-bleu">/</span>RÉFÉRENCEMENT NATUREL SEO</h2>
                            <p>Vous souhaitez <strong>augmenter votre visibilité</strong> dans les <strong>pages de recherche de Google</strong> ? Vous souhaitez <strong>générer du trafic sur votre site internet</strong>, vendre vos produits ou obtenir des contacts ? Le <strong>référencement naturel</strong> vous offre la possibilité de mettre en avant votre entreprise.</p>
                            <RoundButton color="darkgrey" url="/referencement-de-site-internet-47-31/" text="Notre offre de Référencement Naturel" />
                        </div>
                        <div className="font-bold w-full md:w-1/2 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white" style={{ background: '#009991 url( ' + blocBg + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                            <h2 className="text-xl pb-6" ><span className="text-bleu">/</span>RÉFÉRENCEMENT ADS SEA</h2>
                            <p>Vous souhaitez obtenir un <strong>retour sur investissement</strong> grâce à votre <strong>boutique en ligne</strong> ou votre <strong>site vitrine</strong> ? Mener une campagne sponsorisée permet de propulser votre visibilité sur Google en un temps record, et ainsi, atteindre vos objectifs de conversion.</p>
                            <RoundButton color="darkgrey" url="/agence-adwords-47-31/" text="Notre offre de Référencement Ads" />
                        </div>

                    </section>
                    <section className="flex flex-col lg:flex-row w-full mx-auto px-4 py-6 my-4">
                        <div className="w-full lg:w-1/2">
                            <img src={imac} alt="Référencement Toulouse" />
                        </div>
                        <div className="w-full lg:w-1/2 max-w-3xl px-12 py-12" >
                            <h2 className="century capitalize text-2xl tracking-wider pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">/</span>RÉFÉRENCEMENT TOULOUSE : OBTENIR UNE MEILLEURE VISIBILITÉ GRÂCE AU RÉFÉRENCEMENT
                            </h2>
                            <h4 className="century text-lg tracking-wider pb-6 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">Référencer son site, c’est donner vie à sa communication digitale pour rendre son activité visible. Nous mettons tout en oeuvre pour vous apporter un site internet à votre image grâce à la création de contenu de qualité.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify">
                            <strong>Optimiser le référencement de son site</strong>, en <strong>naturel</strong> ou <strong>sponsorisé</strong>, s’inscrit dans la continuité de la <strong><Link to="/creation-site-internet-toulouse/" className="hover:text-bleu">création de votre site internet</Link></strong>. C’est pourquoi, tout doit être pensé, de la <strong>conception technique</strong> du site, jusqu’à l’<strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/arborescence-seo/">arborescence</Link></strong> et la mise en place de <strong><Link to="/referencement-toulouse/donnees-structurees/" className="text-bleu hover:text-black font-bold">données structurées</Link></strong> afin d’attirer un grand nombre de clients potentiels. <br/><br/>

                            <strong>Nos consultants d’Agen (47)</strong> et de <strong>Toulouse (31)</strong> vous apportent une expertise qualifiée pour vous accompagner au mieux dans le <strong><Link to="/creation-de-site-internet-47-31/" className="hover:text-bleu">développement</Link></strong> et l’<strong>optimisation de votre site internet</strong>. Force de proposition, nous mettons votre site au goût du jour grâce à une veille digitale permanente qui permet de suivre les dernières tendances.<br/><br/>

                                De fait, il est nécessaire de faire preuve de régularité et de rigueur quant au travail qui est à réaliser, aussi bien en termes de <strong><Link to="/referencement-de-site-internet-47-31/" className="hover:text-bleu">référencement naturel</Link></strong>, que de <strong><Link to="/agence-adwords-47-31/" className="hover:text-bleu">référencement payant</Link></strong>. <br/>
                            </p>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        
                        <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                            Sautez le pas, enlevez votre cape d’<span className="text-bleu">invisibilité !</span>
                        </h2>
                        <hr className="blue"></hr>
                        <h3 /*data-aos="fade-in"*/ className="text-center font-normal italic century text-sm">Référencement Toulouse</h3>
                    </section>
                    <section className="flex flex-col lg:flex-row flex-1 home-step my-12 px-4 sm:px-12 xl:my-24 xl:px-24">
                        <div className="w-full xl:w-1/3 one px-12">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="blackBulle my-6" /*data-aos="fade-up"*/>1</div>
                                <section>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>JE DÉCOUVRE LE RÉFÉRENCEMENT
                                </h3>
                                    <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                        Faire appel à une <strong>agence de référencement naturel</strong>, c’est faire le choix d’un partenaire pour l’avenir. Une <strong>stratégie de référencement naturel</strong> a plusieurs objectifs. Acquisition de <strong>trafic</strong>, obtention de <strong>contacts</strong>, <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/e-reputation/">e-réputation</Link></strong>. Un <strong>référencement optimal de son site</strong> est essentiel.
                                </div>
                                    <Button url="/contact-agence-web-toulouse/" text="En savoir plus" position="center" />

                                </section>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3 two px-12">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="blackBulle my-6" /*data-aos="fade-up"*/>2</div>
                                <section>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>JE SUIS ACCOMPAGNÉ POUR TROUVER MA SOLUTION
                                </h3>
                                    <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                        Plusieurs <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/">techniques de référencement</Link> SEO/SEA</strong> existent pour positionner son <strong>site internet</strong> dans les <strong>premiers résultats des premières pages et atteindre la première page</strong> ou en <strong>première position</strong> des <strong>SERP de Google</strong> : nous vous accompagnons pour définir la visibilité dont vous avez besoin.
                                </div>
                                    <Button url="/contact-agence-web-toulouse/" text="Prendre contact" position="center" />
                                </section>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3 three px-12">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="blackBulle my-6" /*data-aos="fade-up"*/>3</div>
                                <section>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>JE FAIS LE CHOIX D’EXPERTS POUR OPTIMISER MA VISIBILITÉ
                                </h3>
                                <br/><div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                <strong>Nos consultants d’Agen (47)</strong> vous apportent une expertise qualifiée pour vous accompagner au mieux dans le <strong>développement</strong> et l’<strong>optimisation de votre site internet</strong>.
                                </div>
                                    <br/><Button url="/contact-agence-web-toulouse/" text="Prendre rendez-vous" position="center" />
                                </section>

                            </div>

                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                            <span className="text-bleu">/</span>QUE FAIT LINKWEB POUR VOTRE RÉFÉRENCEMENT À TOULOUSE<span className="text-bleu">/</span>AGEN ?
                        </h2>
                        <hr className="blue"></hr>

                    </section>
                    <section className="max-w-6xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <p className="text-xl font-bold century text-left">Après notre première rencontre, ainsi que la réunion de cadrage pour votre site internet, Linkweb s’engage à :</p>
                        <ul className="mt-6 pl-1 sm:pl-6">
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792">
                                    <path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z">
                                    </path>
                                </svg>
                                &nbsp;
                                <p><strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/">Optimisation interne</Link> de votre site</strong> : votre contenu doit être le plus <strong>pertinent</strong>.</p>
                            </li>
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792">
                                    <path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z">
                                    </path>
                                </svg>
                                &nbsp;
                                <p><strong>Optimisation des <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/">liens externes</Link></strong> : votre site doit être populaire.</p>
                            </li>
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792">
                                    <path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z">
                                    </path>
                                </svg>
                                &nbsp;
                                <p><strong>Optimisation de la <Link className="text-bleu hover:text-black font-bold" to="/referencement-toulouse/referencement-local/">recherche locale</Link></strong> : votre site doit être vu par vos clients les plus proches.</p>
                            </li>
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792">
                                    <path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z">
                                    </path>
                                </svg>
                                &nbsp;
                                <p><strong><Link className="text-bleu hover:text-black font-bold" to="/agence-adwords-47-31/">Mise en place de vos campagnes Adwords et définition des annonces en référencement SEA.</Link></strong></p>
                            </li>
                        </ul>
                        <div className="w-full flex flex-col md:flex-row text-center my-12">
                            <div className="w-full md:w-1/3 flex flex-col items-center justify-center pt-6" /*data-aos='zoom-in' data-aos-delay="200"*/>
                                <svg id="Layer_3" width="60px" height="60px" viewBox="0 0 64 64" >
                                    <g>
                                        <path d="m58 31h-25v-27c0-1.654-1.346-3-3-3h-18c-1.654 0-3 1.346-3 3v27h-3c-2.757 0-5 2.243-5 5v22c0 2.757 2.243 5 5 5h52c2.757 0 5-2.243 5-5v-22c0-2.757-2.243-5-5-5zm-46-28h18c.552 0 1 .449 1 1v51h-20v-51c0-.551.448-1 1-1zm49 55c0 1.654-1.346 3-3 3h-52c-1.654 0-3-1.346-3-3v-22c0-1.654 1.346-3 3-3h3v21.816c-1.161-.414-2-1.514-2-2.816v-2h-2v2c0 2.757 2.243 5 5 5h22c2.757 0 5-2.243 5-5v-2h-2v2c0 1.302-.839 2.402-2 2.816v-21.816h25c1.654 0 3 1.346 3 3z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m19 11h4c1.654 0 3-1.346 3-3s-1.346-3-3-3h-4c-1.654 0-3 1.346-3 3s1.346 3 3 3zm0-4h4c.552 0 1 .449 1 1s-.448 1-1 1h-4c-.552 0-1-.449-1-1s.448-1 1-1z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m15 25h12c.553 0 1-.448 1-1v-10c0-.552-.447-1-1-1h-12c-.553 0-1 .448-1 1v10c0 .552.447 1 1 1zm1-10h10v8h-10z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m21 27c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m14 27h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m26 27h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m14 33h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m26 33h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m19 37h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m25 37h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m13 37h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m19 41h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m25 41h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m13 41h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m19 45h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m25 45h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m13 45h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m19 49h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m25 49h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m13 49h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m58 39h-18c-.553 0-1 .447-1 1v18c0 .553.447 1 1 1h18c.553 0 1-.447 1-1v-18c0-.553-.447-1-1-1zm-1 18h-16v-16h16z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m46 55c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m52 49c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m43 45h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m53 51h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    </g>
                                </svg>
                                <p className="text-xl century pt-3">1 contact téléphonique par mois</p>
                            </div>
                            <div className="w-full md:w-1/3 flex flex-col items-center justify-center pt-6" /*data-aos='zoom-in' data-aos-delay="200"*/>


                                <img
                                    src={diagram}
                                    width="60px"
                                    alt="Rapport de positionnement"
                                />
                                <p className="text-xl century pt-3">1 rapport complet sur votre positionnement</p>
                            </div>
                            <div className="w-full md:w-1/3 flex flex-col items-center justify-center pt-6" /*data-aos='zoom-in' data-aos-delay="400"*/>
                                <img
                                    src={analysis}
                                    width="60px"
                                    alt="audit SEO"
                                />
                                <p className="text-xl century pt-3">1 rapport pertinent de vos statistiques de visites</p>
                            </div>
                            <div className="w-full md:w-1/3 flex flex-col items-center justify-center pt-6" /*data-aos='zoom-in' data-aos-delay="600"*/>
                                <img 
                                    src={contract}
                                    width="60px"
                                    alt="Référencement SEO"
                                />
                                <p className="text-xl century pt-3">1 étude des conversions obtenues</p>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col md:flex-row w-full max-w-4xl mx-auto text-center justify-center">
                    <p className="p-6"><strong>Votre site internet</strong> est le reflet de votre entreprise en ligne. Notre <strong>agence SEO</strong> de <strong>référencement web</strong> travaille pour faire progresser la <strong>visibilité</strong> de votre société dans les <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/serp/">résultats de recherche</Link></strong> et ainsi, d’<strong>augmenter votre notoriété</strong> à travers une création au design professionnel, moderne et épuré. <br/><br/>

                        <b>ATTENTION ! Nous ne sommes pas des vendeurs de rêves : le référencement n’est pas une science exacte. Néanmoins, nous mettons tout en oeuvre pour vous apporter un site web optimisé et la meilleure visibilité possible.</b><br/></p>
                    </section>
                    <section className=" w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bgDev + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h2 /*data-aos='fade-right'*/ className="text-center text-white text-2xl md:text-4xl century">
                                <span className="text-bleu">/</span>Alors, convaincu ? Vous souhaitez être contacté ? N’attendez plus et entrez votre adresse mail.
                            </h2>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                            {/* <RappelForm /> */}
                            <RoundButton url="/contact-agence-web-toulouse/" text="Je veux améliorer ma visibilité sur internet" />
                        </div>

                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start text-center my-12">
                            <div className="w-full sm:w-1/3 px-6 sm:px-12 py-2 flex flex-col items-center justify-center" /*data-aos='zoom-in' data-aos-delay="200"*/>
                                <img src={laptop} width="80px" alt="Référencement Naturel" />
                                <p className="text-xl text-white century pt-3">WEBMARKETING</p>
                            </div>
                            <div className="w-full sm:w-1/3 sm:px-12 py-2 flex flex-col items-center justify-center sm:my-0 my-6" /*data-aos='zoom-in' data-aos-delay="400"*/>
                                
                                <img src={web} width="80px" alt="Référencement Naturel"/>
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT NATUREL</p>
                            </div>
                            <div className="w-full sm:w-1/3 px-12 py-2 flex flex-col items-center justify-center" /*data-aos='zoom-in' data-aos-delay="600"*/>
                                <img src={bullhorn} width="80px" alt="Référencement Google Ads" />
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT GOOGLE ADS</p>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>Vous souhaitez en savoir plus sur notre offre de référencement à Toulouse<span className="text-bleu">/</span>Agen ?
                        </h2>
                        <hr className="blue"></hr>
                        <h4 /*data-aos='fade-left'*/ className="text-xl text-grey text-center century italic pb-6">Vous vous demandez encore pourquoi le référencement est utile pour votre site web ? Voici des réponses aux interrogations courantes sur le SEO.</h4>
                    </section>
                    <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                        <div className="w-full md:w-3/4 py-0 flex justify-end">
                            <Accordion>
                                <div className="w-full" label="COMBIEN DE TEMPS FAUT-IL POUR ARRIVER EN PREMIÈRE PAGE DE GOOGLE ?">
                                    <p>Il est difficile de savoir très précisément combien de temps est nécessaire pour apparaître dans les <strong>premiers résultats de Google</strong>. Durant ce processus, plusieurs éléments entrent en compte : quantité de <strong>sites internet positionnés</strong> sur le <strong>mot-clé</strong>, critères d’<strong>indexation de Google</strong>, la nature du travail effectué. Le <strong>référencement naturel</strong> est un travail de longue haleine qui nécessite beaucoup de rigueur mais aussi de temps afin d’observer des résultats concrets.</p><p>Bien être <strong>positionné</strong> sur un mot-clé à forte <strong>concurrence</strong> peut s’avérer très difficile (voire quasi impossible) sans mettre en place de grands moyens. En tant qu’<strong>agence de référencement à Toulouse et Agen</strong>, notre rôle est de sélectionner les <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/mots-cles/">mots-clés</Link></strong> qui vont vous permettre de vous rendre <strong>visible&nbsp;</strong>le plus rapidement possible (expressions clés plus précises). En combinant des stratégies de <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/courte-traine/">courte traîne</Link></strong> et <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/">longue traine</Link></strong>, nous sommes donc en mesure de vous référencer sur tous les mots-clés qui toucheront vos cibles. Pour ce faire, nous disposons de tous les outils nécessaires pour déterminer quels sont les facteurs de succès qui feront de votre stratégie, une stratégie efficace.</p>
                                </div>
                                <div label="COMMENT SAVOIR SI MON SITE EST BIEN RÉFÉRENCÉ ?">
                                    <p>Pour savoir si votre site est convenablement <strong>référencé</strong>, il est nécessaire de délimiter la stratégie. Il ne suffit pas d’être <strong>visible</strong>, il faut être&nbsp;visible&nbsp;au bon endroit, autrement dit sur les bons mots clés.<br /> Il est important, par le choix de ces <strong>mots clés</strong>, de répondre à un besoin qui émane de la demande.</p><p>Une fois la liste d’expressions clés établie, il sera possible connaitre la <strong>position de votre site internet</strong> en se basant sur votre <strong>nom de domaine</strong> pour obtenir un <strong><Link to="/referencement-toulouse/rapport-positionnement/" className="text-bleu font-bold hover:text-black">rapport de positionnement</Link></strong>.</p><p>Un&nbsp;<Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/audit-seo/"><strong>audit de référencement</strong>&nbsp;(ou&nbsp;<strong>audit SEO</strong></Link>) sera également utile pour connaitre les éléments à améliorer et les critères à travailler particulièrement : <strong>optimisation des contenus</strong>, <strong>URLS</strong>, <strong>liens brisés</strong>,&nbsp;… afin de répondre aux exigences des <strong>moteurs de recherche</strong> (attention à la <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/sur-optimisation/">sur-optimisation</Link></strong>).</p><p>Si ces critères ne sont pas respectés et mis à jour régulièrement, votre&nbsp;site&nbsp;risque de ne pas ressortir dans les&nbsp;résultats de recherche. Il nous revient, en tant qu’<strong>agence de référencement</strong>, de détecter quels sont les facteurs déterminants pour vous permettre d’obtenir un&nbsp;<strong>site optimisé</strong> sur le long terme.</p>
                                </div>
                                <div label="EST-CE POSSIBLE D'OBTENIR UNE MEILLEURE VISIBILITÉ SUR GOOGLE ADS AVEC UN PETIT BUDGET ?">
                                    <p>Avant de se lancer dans la <strong>mise en place d’une&nbsp;campagne Google Ads</strong>, il faut savoir que cette <strong>plateforme de&nbsp;sponsorisation</strong>&nbsp;fonctionne via un système de <strong>mise en concurrence</strong> sur la base d’enchères.</p><p>En effet, une fois votre <strong>campagne</strong> créée et configurée, vos <strong>annonces publicitaires</strong> sont mises en concurrence avec les annonces des&nbsp;<strong>sites internets concurrents</strong>. Ainsi, <strong>Google</strong> effectue un classement des annonces en fonction de <strong>cout au clic</strong> et de <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/"><strong>critères de qualité</strong></Link>. <strong>Google</strong>&nbsp;va, en effet, classer les annonces en attribuant une note de qualité.</p><p>Si investir un budget conséquent peut-être porteur de succès, ceci est loin d’être une garantie.</p><p>Pour un moindre investissement et une qualité d’annonce supérieure, il sera possible d’obtenir de meilleurs résultats qu’un site ayant beaucoup de budget mais présentant des campagnes et des annonces mal construites et rédigées.&nbsp;<strong>Linkweb</strong>&nbsp;vous accompagne dans la création et le <strong>lancement de vos campagnes</strong> ainsi que pour la création de vos <strong><Link to="/referencement-toulouse/landing-page/" className="text-bleu font-bold hover:text-black">landing pages</Link></strong> afin de vous apporter un&nbsp;<strong>retour sur investissement</strong>.</p>
                                    </div>
                            </Accordion>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>Ils sont satisfaits par notre offre de création de site internet
                        </h2>
                        <hr className="blue"></hr>

                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-center justify-center text-center mt-3 mb-12">
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up"*/>
                            <img
                                src={stars}
                                className="w-32 mx-auto h-auto mt-3"
                                alt="Avis Google"
                            />
                            <div className="text-lg century my-2">Contis Equitation</div>
                            <div className="italic">« Très bonne équipe sérieuse qui est à l’écoute de nos attentes. Le suivi est super, ils ne font pas QUE vous créer un site web, ils conseillent, donnent leurs idées, font des recherches et des créations pour vous et tout ça avec rapidité ! Je recommande cette entreprise qui m’a apporté une bonne partie de ma clientèle »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
                            <img
                                src={stars}
                                className="w-32 mx-auto h-auto mt-3"
                                alt="Avis Google"
                            />
                            <div className="text-lg century my-2">AVS Moto</div>
                            <div className="italic">« Linkweb s’occupe du référencement de notre site depuis 4 ans ! Cette agence Web est très compétente dans le domaine, le suivi ainsi que le rapport avec sa clientèle en font sans nul doute l’une des meilleures agences de la région, je recommande sans hésitation »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500"*/>
                            <img
                                src={stars}
                                className="w-32 mx-auto h-auto mt-3"
                                alt="Avis Google"
                            />
                            <div className="text-lg century my-2">Casino de Barbotan</div>
                            <div className="italic">« Superbe gestion de mon dossier depuis ma prise de poste grâce à Marine et depuis peu Dorian a repris le dossier et tout se passe pour le mieux merci à vous pour l’attention particulière que vous portez à chacun de vos clients, continuez comme ceci. »</div>
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
                            |&nbsp;
                            <a
                                className="century text-sm hover:text-bleu"
                                target="blank" rel="noreferrer noopener"
                                href="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,"
                            >
                                Vous êtes déjà clients ? Donnez nous votre avis !
                            </a>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>Les dernières actualités
                        </h3>
                        <hr className="blue"></hr>
                        <LastPosts lastposts={this.props.data.allWordpressPost.edges} /> 
                        <Link className="bg-bleu text-white px-16 py-3 block mx-auto hover:bg-black font-normal" to="/actualite-digitale/">Voir l'actualité digitale</Link>
                        <br/>
                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsRef {
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
export default ReferencementToulouse;
