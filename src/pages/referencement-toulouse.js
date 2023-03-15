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
import Modalagenceseo from "../components/modalboxes";
import Partenaires from '../components/partenaires';

import blocBg from "../images/background.jpg";
// import Bg from "../images/background-referencement.jpg";
import Bg from "../images/referencement-toulouse-bg.jpg";
import imac from "../images/agence-referencement-a-toulouse.jpg";
// import bgDev from '../images/bg-dev.jpg';
import mac from "../images/mac-linkweb.jpg";
import agenceseo from "../images/choix-agence-seo-toulouse.jpg";
import google from "../images/agence-referencement-google.jpg";


import scroll from "../images/motiontest.svg";
import avsmoto from '../images/avsmoto-avis.png';
import casinobarbotan from '../images/casino-barbotan-avis.png';
import contis from '../images/contis-avis.png';
import "../scss/info.scss";
import '../scss/global.scss';

class ReferencementToulouse extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Référencement SEO Toulouse - Linkweb"
                    description="Agence SEO Toulouse : Définition stratégique et mise en application pour votre projet de référencement naturel ou sponsorisé Google Ads - Suivi régulier."
                    keywords={[`Référencement Agen`, `Référencement Toulouse`, `Agence de Référencement Agen`, `Agence de Référencement Toulouse`, `Référencement Google`]}
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
                <section className="flex items-center w-full mx-auto pb-0 mt-40 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + Bg + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
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
                            <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Agence de Référencement SEO Toulouse</h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Agence SEO & SEA spécialisée en stratégie de référencement à Toulouse.</h2>
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
                <nav aria-label="breadcrumbs" className="w-full bg-bleu century py-2 pl-0 md:pl-48">
                        <Link to="/" className="px-4 text-md lg:text-lg text-white hover:text-black">Agence web</Link> <span className=" text-lg text-black"> / </span>
                        <span className="px-4 text-md lg:text-lg text-white"> Agence SEO Toulouse</span>

                    </nav>
                    <section className="flex w-full flex-col mx-auto px-0 py-6 my-4">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10">
                        <h2 className="century text-3xl md:text-5xl text-black leading-none">Agence SEO à Toulouse : faites le choix de la compétence</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                        <br/>
                        <h3 className="century text-xl mx-auto max-w-6xl"><span className="font-bold">Se lancer dans un projet de référencement n'est pas toujours simple. Identifier ses besoins, fixer ses objectifs et mettre en place des actions pertinentes sont autant d'éléments qui nécessitent une expertise. Linkweb, <Link to="/" className="text-bleu hover:text-black font-bold">agence web à Toulouse</Link>, développe et met en place votre stratégie de référencement SEO sur votre site internet professionnel.</span></h3>
                    </section>
                </section>
                <section className="bloctextimg w-full md:w-full mx-auto lg:block lg:mx-auto xl:w-full flex flex-col lg:flex-row justify-center">
                    <div className="w-full image lg:w-1/2 xl:w-2/5 lg:absolute flex justify-center lg:mt-48 xl:mt-24 pr-0 md:pr-8 lg:justify-center lg:items-center">
                        <img src={agenceseo} alt="Agence SEO Toulouse" style={{ maxHeight: '450px', boxShadow:'none' }} />
                    </div>
                    <div className="text century w-full text-justify mr-16 lg:w-3/5 xl:w-2/5 md:p-20 lg:pl-32 p-10 lg:py-10 text-black text-sm xl:text-md" style={{ backgroundColor: '#ffffff', border:'2px solid #37cfee' }}>
                        <br />
                        <p style={{ fontSize: '16px' }}>
                            <h4 className="text-bleu mx-auto text-xl font-bold">Avec Linkweb, tout est plus simple.</h4><br/>Notre agence SEO est entièrement à l’écoute de vos besoins pour identifier des opportunités réelles en vue de développer votre visibilité. Mais cela va plus loin ! En générant de la visibilité pour votre entreprise, notre objectif est de vous permettre d’accroître votre chiffre d’affaires grâce à votre site internet.<br />
                            <br />
                            <h4 className="text-bleu mx-auto text-xl font-bold">Nous allons toujours plus loin</h4><br/>
                            Nous ne nous contentons pas d’une offre d’optimisation SEO basique pour vous proposer des solutions performantes en termes : d’expérience utilisateur, de parcours de navigation, mais aussi d’accroissement de votre popularité sur le Web.<br/>
                            <br/>
                            Vous souhaitez discuter de votre projet autour d’un café ? Nous vous accueillons au sein de nos locaux pour vous proposer des solutions concrètes afin de propulser votre visibilité sur le Web.<br />
                        </p>
                        <br/>
                        <Button url="/contact-agence-web-toulouse/" text="Commencer dès maintenant !" position="center" />
                    </div>

                    <br />
                </section>
            {/* <section id="agenceseo" className="flex flex-col xl:flex-row w-full justify-center mx-auto py-6">
                <div className="flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-left" className="w-full xl:flex hidden lg:mt-0 mt-48 xl:w-auto">
                        <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse" /> 
                    </div>
                    <div className="blocref w-10/12 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-black flex flex-col justify-center" /*data-aos="fade-right" >
                        <Link to={this.props.linkTitle}>
                        </Link>
                        <h2 className="century leading-none text-center text-3xl md:text-5xl">Comparer les meilleures agences SEO à Toulouse</h2>
                        <br/><br/>
                        <table className="w-full century text-sm text-center py-2">
                            <tbody>
                                <tr className="bg-bleu headertable font-black h-16 py-2 md:py-0">
                                    <th>Nom de l'agence</th>
                                    <th>Services</th>
                                    <th>Localisation</th>
                                    <th>Adresse</th>
                                    <th>Site internet</th>
                                </tr>
                                <tr className="flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td className="font-bold">LINKWEB ⭐</td>
                                    <td>Référencement SEO<br/>Référencement SEA <br/>Création de site internet <br/>Community Management <br/>Formation SEO </td>
                                    <td>Toulouse</td>
                                    <td>44 rue Bayard</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = '/';
                                            }}>linkweb.fr
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-bleu flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td className="font-bold">VELCOME SEO</td>
                                    <td>Référencement SEO <br/>Référencement SEA <br/>Formation SEO</td>
                                    <td>Toulouse</td>
                                    <td>150 Rue Louis Nicolas Vauquelin</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://velcomeseo.fr/';
                                            }}>velcomeseo.fr
                                        </button>
                                    </td>
                                </tr>
                                <tr className="flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td className="font-bold">VALE TUDO</td>
                                    <td>Création de site internet <br/>Référencement SEO</td>
                                    <td>Toulouse</td>
                                    <td>2 rue d’Austerlitz</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://www.valetudo.io/';
                                            }}>valetudo.io
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-bleu flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td className="font-bold">YUMENS</td>
                                    <td>Référencement SEO <br/>Veille stratégique <br/>Social Media <br/>Formation SEO</td>
                                    <td>Toulouse</td>
                                    <td>5 rue du Moulin Bayard</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://www.yumens.fr/';
                                            }}>yumens.fr
                                        </button>
                                    </td>
                                </tr>
                                <tr className="flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td className="font-bold">LA MANDRETTE</td>
                                    <td>Référencement SEO <br/>E-Réputation <br/>Formation SEO</td>
                                    <td>Toulouse</td>
                                    <td>272, route de Launaguet</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://www.lamandrette.com/';
                                            }}>lamandrette.com
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-bleu flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td className="font-bold">TRANSFONUMÉRIQUE</td>
                                    <td>Référencement SEO <br/>Référencement SEA <br/>Création de site internet</td>
                                    <td>Balma</td>
                                    <td>12 Av. Charles de Gaulle</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://transfonumerique.fr';
                                            }}>transfonumerique.fr
                                        </button>
                                    </td>
                                </tr>
                                <tr className="flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td className="font-bold">MERIDIGITAL</td>
                                    <td>Référencement SEO <br/>Rédaction Web</td>
                                    <td>Toulouse</td>
                                    <td>19 Rue de la Concorde</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://www.meridigital.com/';
                                            }}>meridigital.com
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section> */}

                    {/* <Modalagenceseo/> */}
                <section className="phototext">
                    <section className="text-center text-black text-2xl mx-auto flex-col flex items-center lg:mx-0 century mt-16 mb-10">
                        <h2 className="century text-black leading-none">Sortez de l’ombre,<br /><span className="text-5xl lg:text-6xl text-bleu font-bold">DEVENEZ VISIBLES</span></h2>
                        <br />
                        <hr className="border-solid w-1/6 border-white"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="text-xl max-w-5xl text-center century text-black px-4 pb-0">Avoir un site internet n’est pas une fin en soi : il doit nécessairement être visible. C’est le principe du référencement web. Faites de votre site une référence pour les moteurs de recherche.</h3>
                    </section>
                    <section className="w-full my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className=" w-full flex justify-center items-center lg:w-5/12" style={{ background: 'url( ' + google + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover', height:'100vh' }}>
                            {/* <img className="w-full" src={agenceseo} alt="Linkweb" /> */}
                        </div>
                        <div className="w-full lg:w-1/2 my-10  flex flex-col">
                            <div className="blocnum w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                    <p>1</p>
                                </div>
                                <div className="w-full px-6 lg:px-6 flex flex-col justify-center" style={{ maxWidth: '1000px' }}>
                                <h4 className="century capitalize text-sm tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/><span className="text-bleu">/</span>RÉFÉRENCEMENT NATUREL SEO</h4>
                                <h3 className="century text-2xl tracking-wider leading-tight text-justify">Vous souhaitez augmenter votre visibilité dans les pages de recherche de Google ?</h3> 
                                    <p className="w-full century pb-4 text-justify">Le référencement naturel SEO permet aux professionnels d’exploiter tout le potentiel qu’offre un <strong>moteur comme Google</strong> pour acquérir de nouvelles parts de marché grâce au Web. De plus, avec une stratégie bien construite, le SEO vous permettra de <strong>faire connaître votre entreprise</strong> et d’<strong>accroître votre chiffre d’affaires</strong> sur le long terme.
                                </p>
                                    {/*<Button url="/referencement-de-site-internet-47-31/" text="Notre formule SEO" position="left" />*/}
                                    <br />
                                </div>
                            </div>
                            <div className="blocnum w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>2</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                <h4 className="century capitalize text-sm tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>RÉFÉRENCEMENT GOOGLE ADS
                                    </h4>
                                    <h3 className="century text-2xl tracking-wider leading-tight text-justify">Vous souhaitez obtenir un retour sur investissement grâce à votre boutique en ligne ou votre site vitrine ?</h3>
                                    <p className="w-full century pb-4 text-justify">Le <strong>référencement payant ou publicité sur le Web</strong> permet de maximiser sa <strong>présence dans les résultats de recherche</strong> grâce à l’instauration de <strong>campagnes sponsorisées</strong>. Cette solution est recommandée pour les entreprises souhaitant <strong>obtenir un retour sur investissement</strong> en un temps record.
                                    </p>
                                    <Button url="/agence-adwords-47-31/" text="Notre formule Adwords" position="left" />
                                </div>
                            </div>
                            <div className="blocnum w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>3</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                <h4 className="century capitalize text-sm tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>SEARCH EXPERIENCE OPTIMISATION
                                    </h4>
                                <h3 className="century text-2xl tracking-wider leading-tight text-justify">Vous souhaitez proposer l'expérience utilisateur la plus aboutie pour les visiteurs de votre site internet ?</h3>
                                <p className="century pb-4 text-justify">Le <strong>SXO</strong> est né de la rencontre entre le <strong><Link to="/referencement-toulouse/comment-ameliorer-son-referencement-naturel/" className="text-bleu hover:text-black font-bold">référencement naturel</Link></strong> et l’<strong>UX Design</strong>. Il consiste à développer une <strong>expérience utilisateur</strong> adaptée au <strong>comportement des utilisateurs</strong> : <strong>temps de chargement optimal</strong>, compatibilité sur tous les supports de lecture, etc. Rendre l’expérience utilisateur optimale est, aujourd’hui, indispensable.
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="blocnum w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>4</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                <h4 className="century capitalize text-sm tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>E-RÉPUTATION
                                    </h4>
                                <h3 className="century text-2xl tracking-wider leading-tight text-justify">Vous souhaitez parfaire l'image de votre entreprise en travaillant son e-réputation ?</h3>
                                    <p className="century pb-4 text-justify">La <strong>popularité</strong> et la <strong>réputation d’une marque en ligne</strong> est un paramètre à prendre en compte pour rendre son <strong>projet web performant grâce au SEO</strong>. Les avis constituent un élément déclencheur, voire un véritable moteur en vue de la <strong>conversion</strong>. De plus, l’E-réputation fait partie des piliers du référencement naturel SEO et du travail de son image de marque sur le Web. Il est donc indispensable de <strong>soigner son image pour dynamiser son activité</strong> grâce au marketing de contenu ainsi qu'à une stratégie <Link to="/agence-community-management/" className="text-bleu hover:text-black font-bold">social media</Link>.
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="bg-darkgrey sidetitle py-10">
                    <section className="w-full lg:w-2/3 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
                        <h2 className="century text-center lg:text-left text-white text-3xl md:text-5xl leading-none">Que fait <span className="text-bleu">notre agence</span> pour <span className="text-bleu">votre référencement</span> SEO à Toulouse ?</h2>
                        <br />
                        <div className="line-title my-4 ">
                            <br />
                            <hr className="w-1/2 border-bleu lg:w-1/12" />
                            <br />
                            <h3 /*data-aos='fade-left'*/ className="text-xl text-white century pb-0">En tant qu’agence de référencement spécialisée dans le SEO, Linkweb s’engage à produire un travail de qualité pour vous offrir des performances optimales à travers nos prestations SEO et SEA.</h3>
                        </div>
                    </section>
                    <section className="flex justify-center flex-col items-center">
                        <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 text-white century text-center lg:text-left">
                                <svg width="50px" fill="#ffffff" className="lg:mx-0 mx-auto block" viewBox="0 0 26.458333 33.0729175"><g transform="translate(0,-270.54165)"><path d="m 5.8714289,272.12915 c -1.8514508,0 -3.3578869,1.50883 -3.3578869,3.36322 0,1.85439 1.5064361,3.36271 3.3578869,3.36271 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36271 0,-0.93619 -0.3850002,-1.78375 -1.0034311,-2.39407 l -2.1329844,3.56079 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869546,-1.24151 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35362 C 7.272958,272.36508 6.5998223,272.12917 5.8714289,272.12917 Z m 5.9146431,2.06968 a 0.25889664,0.25930793 0 0 0 0.02674,0.51792 h 11.867626 a 0.25855123,0.25896196 0 1 0 0,-0.51792 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02674,0 z m 0.02674,2.06866 a 0.25836408,0.25877452 0 1 0 0,0.51741 h 5.668955 a 0.25836408,0.25877452 0 1 0 0,-0.51741 z m -5.9413818,4.14035 c -1.8514508,0 -3.3578869,1.50884 -3.3578869,3.36323 0,1.85439 1.5064361,3.36271 3.3578869,3.36271 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36271 0,-0.9362 -0.3850002,-1.78375 -1.0034311,-2.39407 l -2.1329844,3.56079 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869546,-1.24151 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35362 c -0.5508481,-0.39625 -1.2239838,-0.63216 -1.9523772,-0.63216 z m 5.9156518,2.06969 a 0.25832484,0.25873522 0 0 0 -10e-4,5.1e-4 0.2587086,0.25911959 0 0 0 0.02674,0.51741 h 11.867629 a 0.25836408,0.25877452 0 1 0 0,-0.51741 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02573,-5.1e-4 z m 0.02573,2.06866 a 0.25835919,0.25876963 0 0 0 0,0.51741 h 5.668957 a 0.25835919,0.25876963 0 0 0 0,-0.51741 z m -5.9413807,4.14035 c -1.8514507,0 -3.3578869,1.50884 -3.3578869,3.36322 0,1.8544 1.5064362,3.36272 3.3578869,3.36272 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36272 0,-0.93618 -0.3850002,-1.78374 -1.0034311,-2.39407 l -2.1329844,3.5608 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869543,-1.2415 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35363 C 7.2729607,288.9225 6.599825,288.68658 5.8714316,288.68658 Z m 5.9146427,2.07018 a 0.2587086,0.25911959 0 0 0 0.02674,0.51742 H 23.68044 a 0.25836408,0.25877452 0 1 0 0,-0.51742 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02674,0 z m 0.02674,2.06817 a 0.25836408,0.25877452 0 1 0 0,0.51741 h 5.668956 a 0.25836408,0.25877452 0 1 0 0,-0.51741 z" /></g></svg>
                                <h4 className="font-bold century"><span className="font-bold">Optimisation interne (on-site)</span></h4>
                                <p>Conception des <Link to="/referencement-toulouse/optimisation-interne/" className="font-bold text-bleu hover:text-white"><strong>pages web de votre site internet</strong></Link> en fonction des <strong>requêtes cibles</strong> intégrées à votre <strong>stratégie de référencement SEO</strong>.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" fill="#ffffff" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path d="m 74.811558,1040.3426 a 1.0140882,0.98630477 0 0 0 0.9055,-1.1789 l -5.6078,-26.5322 20.5765,-18.27997 a 1.0140882,0.98630477 0 0 0 -0.5696,-1.70442 l -27.7031,-3.02536 -11.493,-24.67154 a 1.0140882,0.98630477 0 0 0 -1.8401,0 l -11.4931,24.67154 -27.70307,3.02536 a 1.0140882,0.98630477 0 0 0 -0.5695396,1.70442 l 20.5765096,18.27997 -5.6078,26.5322 a 1.0140882,0.98630477 0 0 0 1.4896,1.051 l 24.2274,-13.3939 24.2275,13.3939 a 1.0140882,0.98630477 0 0 0 0.5841,0.1279 z m -1.5334,-2.8975 -22.7816,-12.5986 a 1.0140882,0.98630477 0 0 0 -0.9931,0 l -22.7817,12.5986 5.2719,-24.9699 a 1.0140882,0.98630477 0 0 0 -0.3066,-0.9374 l -19.34985,-17.17206 26.03825,-2.84071 a 1.0140882,0.98630477 0 0 0 0.8032,-0.56814 l 10.8213,-23.20859 10.8213,23.20859 a 1.0140882,0.98630477 0 0 0 0.8032,0.56814 l 26.0383,2.84071 -19.3498,17.17206 a 1.0140882,0.98630477 0 0 0 -0.3067,0.9374 l 5.2719,24.9699 z" fill="#ffffff" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible" /></g></svg>
                                <h4 className="font-bold century -mt-4"><span className="font-bold">Acquisition de popularité</span></h4>
                                <p>Inscription de <strong>votre site internet</strong> sur des annuaires et <strong>sites à forte autorité</strong> pour permettre à <strong>vos noms de domaine</strong> de générer des <strong>backlinks de qualité</strong>.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><path fill="#ffffff" d="M66.598,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44c-0.556,0.081-1.017,0.47-1.191,1.004  c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014c-0.095,0.554,0.133,1.113,0.587,1.443  c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C67.673,71.235,67.16,70.916,66.598,70.916L66.598,70.916z M50,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169L50,82.719l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C51.074,71.235,50.562,70.916,50,70.916L50,70.916z M33.402,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423  l2.707,1.423c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014  l2.19-2.135c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C34.476,71.235,33.963,70.916,33.402,70.916L33.402,70.916z" /><path fill="#ffffff" d="M72.131,50.738h-25.82v-1.475h25.82V50.738z M50,52.951h-3.689v1.475H50V52.951z M72.131,52.951H53.689v1.475  h18.443V52.951z M61.066,56.639H46.311v1.475h14.754V56.639z M72.131,56.639h-7.377v1.475h7.377V56.639z M57.377,60.328H46.311  v1.475h11.066V60.328z M61.066,27.131H46.311v1.475h14.754V27.131z M72.131,27.131h-7.377v1.475h7.377V27.131z M72.131,30.82h-25.82  v1.475h25.82V30.82z M57.377,34.508H46.311v1.475h11.066V34.508z M72.131,34.508H61.066v1.475h11.066V34.508z M64.754,38.197H46.311  v1.475h18.443V38.197z" /><path fill="#ffffff" d="M75.82,12.377h-4.338c-0.741-1.139-1.62-2.329-2.458-3.404l-0.257-0.33l-0.416,0.052  c-2.313,0.288-8.743,0.858-10.692,0.051c-0.341-0.141-0.869-0.895-1.294-1.501C55.592,6.141,54.793,5,53.689,5h-7.377  c-1.104,0-1.904,1.141-2.677,2.244c-0.425,0.606-0.953,1.36-1.294,1.501c-1.947,0.807-8.379,0.237-10.692-0.051l-0.416-0.052  l-0.257,0.33c-0.838,1.075-1.717,2.265-2.458,3.404H24.18c-2.441,0-4.426,1.986-4.426,4.426v73.77c0,2.441,1.985,4.426,4.426,4.426  H75.82c2.441,0,4.426-1.985,4.426-4.426v-73.77C80.246,14.363,78.26,12.377,75.82,12.377z M31.886,10.208  c1.891,0.218,8.608,0.899,11.02-0.1c0.737-0.305,1.32-1.137,1.937-2.017c0.396-0.564,1.132-1.615,1.469-1.615h7.377  c0.337,0,1.073,1.051,1.469,1.615c0.617,0.88,1.2,1.712,1.937,2.017c2.412,0.999,9.129,0.318,11.02,0.1  c1.698,2.219,3.397,4.834,3.684,5.857H28.201C28.489,15.043,30.188,12.427,31.886,10.208z M78.77,90.574  c0,1.627-1.324,2.951-2.951,2.951H24.18c-1.627,0-2.951-1.324-2.951-2.951v-73.77c0-1.627,1.324-2.951,2.951-2.951h3.449  c-0.727,1.324-1.12,2.457-0.82,3.071c0.192,0.392,0.578,0.618,1.059,0.618h44.262c0.482,0,0.867-0.225,1.059-0.618  c0.3-0.614-0.093-1.746-0.82-3.071h3.449c1.627,0,2.951,1.324,2.951,2.951V90.574z M50,13.115c-1.424,0-2.582-1.158-2.582-2.582  S48.576,7.951,50,7.951s2.582,1.158,2.582,2.582S51.424,13.115,50,13.115z M50,9.426c-0.61,0-1.107,0.496-1.107,1.107  c0,0.61,0.496,1.107,1.107,1.107s1.107-0.496,1.107-1.107C51.107,9.923,50.61,9.426,50,9.426z" /><path fill="#ffffff" d="M38.934,50v11.066H27.869V50H38.934 M38.934,48.525H27.869c-0.815,0-1.475,0.661-1.475,1.475v11.066  c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475V50C40.41,49.185,39.749,48.525,38.934,48.525  L38.934,48.525z M33.483,38.197c-0.008,0-0.016,0-0.024,0c-0.302,0-0.588-0.12-0.792-0.343l-3.77-4.111  c-0.413-0.451-0.382-1.147,0.069-1.559c0.451-0.412,1.151-0.379,1.563,0.071l2.989,3.267l7.698-7.698  c0.432-0.432,1.132-0.432,1.565,0c0.432,0.432,0.432,1.133,0,1.565l-8.516,8.5C34.058,38.097,33.776,38.197,33.483,38.197z   M38.934,34.271v4.664h-5.451H33.45h-5.581V27.869h11.066v1.194l1.45-1.45c-0.122-0.692-0.722-1.22-1.45-1.22H27.869  c-0.815,0-1.475,0.661-1.475,1.475v11.066c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475v-6.136  L38.934,34.271z" /></svg>
                                <h4 className="font-bold century"><span className="font-bold">Audit SEO</span></h4>
                                <p>Nous disposons de tous les outils pour déterminer les opportunités de votre site, compte tenu de <strong>votre marché</strong> ainsi que de <strong>votre concurrence</strong>.</p>
                            </div>
                        </div>
                        <div className="w-full text-white flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                            <div className="w-full svgtransform -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125" fill="#ffffff"><g><g><g><path d="M82.3,81.7c-0.8,0-1.5-0.7-1.5-1.5c0-17-13.8-30.9-30.9-30.9c-17,0-30.9,13.8-30.9,30.9     c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5c0-18.6,15.1-33.8,33.8-33.8s33.8,15.1,33.8,33.8C83.8,81.1,83.1,81.7,82.3,81.7z" /></g><g><path d="M1.5,67.4c-0.1,0-0.3,0-0.4-0.1c-0.8-0.2-1.2-1-1-1.8c1-3.5,2.5-6.9,4.2-10.2c1-1.8,0.6-4.1-0.8-5.5     c-3-3-3-7.8,0-10.7l5.4-5.4c1.4-1.4,3.3-2.2,5.4-2.2c2,0,3.9,0.8,5.3,2.2c0,0,0,0,0,0c1.5,1.5,3.7,1.8,5.5,0.8     c3.2-1.8,6.7-3.2,10.2-4.2c1.9-0.6,3.3-2.4,3.3-4.5c0-4.2,3.4-7.6,7.6-7.6h7.6c4.2,0,7.6,3.4,7.6,7.6c0,2.1,1.4,3.9,3.3,4.5     c3.5,1,6.9,2.5,10.2,4.2c1.8,1,4.1,0.6,5.5-0.8c0,0,0,0,0,0c1.4-1.4,3.3-2.2,5.3-2.2c2,0,3.9,0.8,5.4,2.2l5.4,5.4     c1.4,1.4,2.2,3.3,2.2,5.4s-0.8,3.9-2.2,5.4c-1.5,1.5-1.8,3.7-0.8,5.5c1.8,3.2,3.2,6.6,4.2,10.2c0.2,0.8-0.2,1.6-1,1.8     c-0.8,0.2-1.6-0.2-1.8-1c-1-3.3-2.3-6.6-4-9.6c-1.6-2.9-1.1-6.6,1.3-9c1.8-1.8,1.8-4.8,0-6.6l-5.4-5.4c-0.9-0.9-2.1-1.4-3.3-1.4     c-1.3,0-2.4,0.5-3.3,1.4c0,0,0,0,0,0c-2.4,2.3-6,2.9-8.9,1.3c-3.1-1.7-6.3-3-9.6-4c-3.2-0.9-5.4-3.9-5.4-7.3     c0-2.6-2.1-4.7-4.7-4.7h-7.6c-2.6,0-4.7,2.1-4.7,4.7c0,3.3-2.2,6.3-5.4,7.3c-3.3,1-6.5,2.3-9.6,4c-2.9,1.6-6.6,1.1-8.9-1.3     c0,0,0,0,0,0c-0.9-0.9-2.1-1.4-3.3-1.4c-1.3,0-2.4,0.5-3.3,1.4l-5.4,5.4c-1.8,1.8-1.8,4.8,0,6.6c2.4,2.4,2.9,6.1,1.3,9     c-1.7,3.1-3,6.3-4,9.6C2.7,67,2.1,67.4,1.5,67.4z" /></g></g><g><path d="M98.5,81.7H1.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h97.1c0.8,0,1.5,0.7,1.5,1.5S99.3,81.7,98.5,81.7z    " /></g></g></svg>
                                <h4 className="font-bold century"><span className="font-bold">Création et configuration de votre fiche My Business</span></h4>
                                <p>Nous créons et paramétrons votre <strong>profil d’entreprise sur Google My Business</strong> pour <strong>obtenir des contacts</strong> proches de chez vous.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#ffffff" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#ffffff" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#ffffff" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>
                                <h4 className="font-bold century"><span className="font-bold">Définition et configuration de campagnes Google Ads</span></h4>
                                <p>Définition de votre <strong>stratégie de publicité</strong>, ajout et <Link to="/agence-adwords-47-31/" className="font-bold text-bleu hover:text-white"><strong>configuration de vos annonces et groupes d’annonces</strong></Link> sur <strong>Ads</strong>.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><g><path fill="#ffffff" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   " /><path fill="#ffffff" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z" /><g><path fill="#ffffff" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z" /><rect x="72.041" y="56.851" width="0.312" height="5.159" /></g><path fill="#ffffff" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z" /><path fill="#ffffff" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z" /></g></svg>
                                <h4 className="font-bold century"><span className="font-bold">UX Design</span></h4>
                                <p>Minimisation la <strong>vitesse de chargement de votre site web</strong>, adaptation pour <strong>tous les supports (responsive design)</strong> et définition de <strong>parcours de navigation</strong>.</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                    <h2 className="text-bleu text-lg text-center century">Référencement Toulouse</h2>
                    <br />
                    <h3 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                        Sautez le pas, enlevez votre <br /><span className="text-5xl lg:text-6xl text-bleu font-bold uppercase">cape d’invisibilité !</span>
                    </h3>
                    <hr className="blue border-bleu"></hr>
                </section>
                <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
                    <div className="w-full xl:w-1/3 one px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE DÉCOUVRE LE RÉFÉRENCEMENT
                                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    Faire appel à une <strong>agence de référencement naturel SEO</strong>, c’est faire le choix d’un partenaire pour l’avenir. Une <strong>stratégie de référencement naturel</strong> a plusieurs objectifs. <strong>Génération de visites</strong>, <strong>obtention de contacts</strong>, <strong>e-réputation</strong>. Nos prestations permettent d'accéder à un <strong>solution optimale pour son site</strong>.
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 two px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE VEUX ÊTRE ACCOMPAGNÉ POUR TROUVER MA SOLUTION
                                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    Plusieurs techniques de référencement <strong>SEO</strong> existent pour <strong>positionner son site dans les meilleures positions </strong> en atteignant la première page et les <strong>premières positions dans les SERP</strong> : nous vous accompagnons pour définir la formule dont vous avez besoin.
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 three px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>AGENCE SEO TOULOUSE : JE FAIS LE CHOIX D'EXPERTS POUR MON RÉFÉRENCEMENT
                                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    Nos <strong>consultants en référencement SEO</strong>, d’<strong>Agen (47)</strong> et de <strong>Toulouse (31)</strong> dans le Sud de la France, sont <strong>certifiés par Google</strong> et vous apportent une expertise qualifiée pour vous accompagner au mieux dans le développement et le <strong>référencement de votre site internet</strong>.
                                </div>
                            </section>

                        </div>

                    </div>
                </section>
                <section className="-mt-32">
                    <Button url="/contact-agence-web-toulouse/" text="Je souhaite être recontacté" position="center" />
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

                <section className="flex w-full flex-col mx-auto px-0 py-6 my-4">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10">
                        <h2 className="text-bleu text-lg text-center century">Agence Référencement Toulouse</h2>
                        <br />
                        <h3 className="century text-3xl md:text-5xl text-black leading-none">Développer sa présence en ligne grâce au référencement</h3>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                    </section>
                </section>
                <section className="bloctextimg w-full md:w-10/12 mx-auto lg:block lg:mx-auto xl:w-full flex flex-col lg:flex-row justify-center">
                    <div className="w-full image lg:w-1/2 xl:w-2/5 lg:absolute flex justify-center lg:mt-48 xl:mt-24 pr-0 md:pr-16 lg:justify-center lg:items-center">
                        <img src={imac} alt="Référencement Toulouse" style={{ maxHeight: '450px' }} />
                    </div>
                    <div className="text century w-full text-justify mr-16 lg:w-3/5 xl:w-2/5 md:p-20 lg:pl-32 p-10 lg:py-10 text-black text-sm xl:text-md" style={{ backgroundColor: '#d3d3d352' }}>
                        <h4 className="century text-xl"><span className="font-bold">Référencer son site, c’est donner vie à sa communication digitale pour rendre son activité visible. Notre agence spécialisée en SEO et SEA à Toulouse met tout en oeuvre pour vous apporter un site internet à votre image grâce à la production de contenus pertinents.</span></h4>
                        <br />
                        <p style={{ fontSize: '16px' }}>
                            Optimiser le <strong>référencement de son site</strong>, en <strong>naturel</strong> ou <strong>sponsorisé</strong>, s’inscrit dans la continuité de la <Link to="/creation-site-internet-toulouse/" className="text-bleu hover:text-black font-bold"><strong>création de site internet à Toulouse</strong></Link>. C’est pourquoi, dans notre prestation de web marketing, tout doit être pensé, de la <strong>conception technique du site</strong>, jusqu’à l’<Link to="/referencement-toulouse/arborescence-seo/" className="text-bleu hover:text-black font-bold"><strong>arborescence</strong></Link> et la configuration de <strong>données structurées</strong> afin d’attirer un grand nombre de <strong>clients potentiels</strong>.<br />
                            <br />
                                Nos <strong>consultants d’Agen (47) et de Toulouse (31)</strong> vous apportent une expertise qualifiée pour vous accompagner au mieux dans le <strong>développement de votre site internet professionnel</strong>. En étant force de proposition, nous mettons <strong>votre site</strong> au goût du jour grâce à une veille permanente qui permet de suivre les <strong>dernières tendances</strong> et d'éliminer les <strong>facteurs bloquants sur votre site</strong>. De plus, nos <strong>référenceurs</strong> sont tous <strong>certifiés Google</strong>.<br />
                            <br />
                            De fait, il est nécessaire de faire preuve de régularité et de rigueur quant au travail qui est à réaliser, aussi bien en termes de <strong>référencement naturel</strong>, que de <strong>référencement payant</strong>.<br />
                        </p>
                    </div>

                    <br />
                </section>
                <section className="w-full flex my-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence SEO à Toulouse</span> ?</h3>
                        <h4>Linkweb fait partie des agences qui soutiennent les professionnels souhaitant développer leur présence sur Internet.</h4>
                    </div>
                    <div className="w-full mx-auto block lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" />
                    </div>
                </section>
                <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Ils sont satisfaits par nos services<br /><span className="text-5xl lg:text-6xl text-bleu font-bold uppercase">SEO & SEA</span>
                    </h2>
                    <br />
                    <hr className="border-solid w-1/6 border-bleu"></hr>
                    <br />
                </section>
                <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-center justify-center century text-center mt-3 px-6 mb-12">
                    <div className="flex flex-row flex-wrap">
                        <article className="w-full md:w-1/2 lg:w-1/2 text-left mt-5 xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                            <div className="avis" style={{ minHeight: '340px' }}>
                                <div className="flex flex-row">
                                    <img width="50px" height="50px" src={contis} alt="Avis My Business" />
                                    <svg width="100px" viewBox="0 0 100 125">
                                        <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                        <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                        <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                        <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                        <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z" />
                                    </svg>
                                </div>
                                <h4>CONTIS ÉQUITATION</h4>
                                <p>« Très bonne équipe sérieuse qui est à l’écoute de nos attentes. Le suivi est super, ils ne font pas QUE vous <strong>créer un site web</strong>, ils conseillent, donnent leurs idées, font des recherches et des créations pour vous et tout ça avec rapidité !<br /><br /> Je recommande cette entreprise qui m’a apporté une bonne partie de ma clientèle. »</p>
                            </div>
                        </article>
                        <article className="w-full md:w-1/2 mt-5 lg:w-1/2 text-left xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                            <div className="avis" style={{ minHeight: '340px' }}>
                                <div className="flex flex-row">
                                    <img width="50px" height="50px" src={avsmoto} alt="Avis Google" />
                                    <svg width="100px" viewBox="0 0 100 125">
                                        <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                        <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                        <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                        <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                        <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z" />
                                    </svg>
                                </div>
                                <h4>AVS Moto</h4>
                                <p>« <strong>Linkweb</strong> s’occupe du <strong>référencement de notre site</strong> depuis 4 ans ! Cette <strong>agence Web</strong> est très compétente dans le domaine, le suivi ainsi que le rapport avec sa clientèle en font sans nul doute l’<strong>une des meilleures agences de la région</strong>, je recommande sans hésitation. »</p>
                            </div>
                        </article>
                        <article className="w-full md:w-1/2 lg:w-1/2 mt-5 text-left xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                            <div className="avis" style={{ minHeight: '340px' }}>
                                <div className="flex flex-row">
                                    <img width="50px" height="50px" src={casinobarbotan} alt="Avis My Business" />
                                    <svg width="100px" viewBox="0 0 100 125">
                                        <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                        <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                        <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                        <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                        <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z" />
                                    </svg>
                                </div>
                                <h4>Casino de Barbotan</h4>
                                <p>« Superbe gestion de mon dossier depuis ma prise de poste grâce à Marine et depuis peu Dorian a repris le dossier et tout se passe pour le mieux merci à vous pour l’attention particulière que vous portez à chacun de vos <strong>clients</strong>, continuez comme ceci. »</p>
                                <br />
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
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Vous souhaitez aller plus loin ? Notre agence SEO à Toulouse répond à toutes vos questions.</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Le référencement SEO, au même titre que la publicité en ligne, est un véritable atout pour dynamiser sa communication. Toutefois, il demande du temps et de la rigueur. <span className="text-bleu font-bold">Pas d'inquiétude ! Linkweb gère votre projet de A à Z.</span> <br/>Pour bien comprendre toutes les subtilités de notre travail de référencement, notre agence SEO à Toulouse répond à vos interrogations les plus courantes.</h3>
                    </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="COMBIEN DE TEMPS FAUT-IL POUR ARRIVER EN 1ÈRE PAGE DE GOOGLE ?">
                                <p>Il est <span className="font-bold">complexe de prédire combien de temps est nécessaire pour apparaître dans les <strong>premiers résultats de Google</strong>.</span> Durant ce processus, plusieurs éléments entrent en compte : le <strong>mot-clé visé</strong>, le nombre de <strong>sites internet positionnés</strong>, les critères d’<strong>indexation</strong> ou encore la nature du travail effectué. Il faut savoir que le <strong>référencement naturel</strong> est un travail de longue haleine qui nécessite beaucoup de rigueur, de régularité, mais aussi de temps avant d’observer des performances intéressantes.<br /><br />Être bien <strong>positionné</strong> sur un <strong>mot-clé à forte concurrence</strong> peut s’avérer très difficile (voire quasi impossible) sans mettre en place de grands moyens. En tant qu’<strong>agence de référencement à Toulouse et Agen</strong> dans le Sud de la France, <span className="font-bold">notre rôle est de sélectionner les <strong>mots-clés</strong> qui vont vous permettre de vous rendre <strong>visible&nbsp;</strong>le plus rapidement possible à partir de l'étude du comportement des internautes sur le <strong>Web</strong> (expressions les plus précises)</span>. En combinant des stratégies de <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/courte-traine/">courte traîne</Link></strong> et <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/">longue traine</Link></strong>, nous sommes en mesure de vous <strong>référencer sur toutes les requêtes cibles</strong> qui seront à mêmes de vous rendre visible pour les utilisateurs. <br /><br />Pour ce faire, <span className="font-bold">notre agence SEO dispose de tous les outils nécessaires pour déterminer quels sont les facteurs de succès qui feront de votre stratégie, une stratégie efficace.</span> Un <strong>consultant SEO</strong> se charge d’identifier les opportunités à exploiter pour <strong>maximiser votre présence en première page</strong>.</p>
                            </div>
                            <div label="COMMENT SAVOIR SI MON SITE EST BIEN RÉFÉRENCÉ ?">
                                <p><span className="font-bold">Pour savoir si votre site est bien <strong>référencé</strong>, plusieurs critères doivent être pris en compte. Est-ce que le site a bien été <strong>indexé par les robots</strong> ? Est-ce que le <strong>contenu du site est optimisé pour le référencement naturel</strong> ?</span> <br /><br />Pour s'assurer de la présence en ligne de son site web, il va être nécessaire de délimiter une stratégie qui correspond à des objectifs en rapport avec vos besoins. Il ne suffit pas d’être <strong>visible</strong>, <span className="font-bold">il faut être&nbsp;visible&nbsp;au bon endroit, autrement dit sur les <strong>bons mots clés</strong> avec un bon positionnement. Il est important, par le choix de ces <strong>requêtes</strong>, de répondre à un besoin qui émane de la demande. <br /><br />Le <strong>référencement d'un site</strong> peut demander du temps. C'est pourquoi, nos référenceurs s'appuient sur une analyse du comportement des utilisateurs pour établir la liste d’expressions clés qui vous seront bénéfiques à court et moyen termes.</span> C'est à ce moment-là qu'il sera possible de connaître le <strong>positionnement de votre site internet</strong> et de l'évaluer. Nous menons des actions visant à faire en sorte que votre <strong>nom de domaine</strong> apparaissent de la meilleure manière possible sur Google. Nous effectuons un suivi à partir de la génération d'un <strong><Link to="/referencement-toulouse/rapport-positionnement/" className="text-bleu font-bold hover:text-black">rapport de positionnement</Link></strong>.<br /><br />La réalisation d'un&nbsp;<strong>audit de référencement</strong>&nbsp;(ou&nbsp;audit SEO) est conseillée et utile pour prendre connaissance de l'état des lieux et déterminer les perspectives d'améliorations à partir d'une analyse de critères tels que : <strong>l'optimisation des contenus</strong> (visant à générer du trafic), <strong>les URLS</strong>, <strong>les liens brisés (erreurs 404)</strong>, le netlinking&nbsp;, etc., afin de répondre aux exigences des <strong>moteurs de recherche</strong> (attention à la <strong>sur-optimisation</strong>) en vue de vous permettre d'atteindre de nouveaux clients.<br /><br /><span className="font-bold">Si ces critères ne sont pas respectés et mis à jour régulièrement, votre&nbsp;site&nbsp;risque de ne pas ressortir dans les&nbsp;résultats de recherche. Il nous revient, en tant qu’<strong>agence de référencement</strong>, de détecter quels sont les facteurs déterminants pour vous permettre d’obtenir un&nbsp;<strong>site optimisé</strong> sur le long terme.</span></p>
                            </div>
                            <div label="EST-CE POSSIBLE D'OBTENIR UNE BONNE VISIBILITÉ AVEC UN PETIT BUDGET ?">
                                <p>Pour se lancer dans la <strong>mise en place d’une&nbsp;stratégie de référencement</strong> naturel, comme Google Ads (anciennement <strong>Google AdWords</strong>), <span className="font-bold">il est nécessaire de définir des objectifs cohérents vis-à-vis de vos besoins. En effet, gagner en présence grâce au référencement est possible pour les gros comme pour les petits budgets. En adaptant nos méthodes à votre projet digital et à vos moyens, nous sommes en mesure de vous procurer une visibilité ciblée de façon pertinente sur plan national, comme local.</span> {/*savoir que cette <strong>plateforme de&nbsp;sponsorisation</strong>&nbsp;fonctionne via un système de <strong>mise en concurrence</strong> sur la base d’enchères.<br /><br />En effet, une fois votre <strong>campagne</strong> créée et configurée, vos <strong>annonces publicitaires</strong> sont mises en concurrence avec les annonces des&nbsp;<strong>sites internets concurrents</strong>. Ainsi, <strong>Google</strong> effectue un classement des annonces en fonction de <strong>critères de qualité</strong> et détermine un <strong>coût au clic</strong>. En effet, <strong>Google</strong> va classer les annonces en leur attribuant une note à partir de ces critères.<br /><br /><span className="font-bold">Si investir un budget conséquent peut-être porteur de succès, ceci est loin d’être une garantie.</span>*/}<br /><br />Pour cela, il est nécessaire de rechercher les <strong>meilleures opportunités de mots-clés</strong> à travers les requêtes locales notamment. En vous positionnant directement là où vos cibles sont présentes, vous maximisez vos chances d’atteindre vos objectifs.<br/><br/>Par ailleurs, en produisant des annonces Ads très qualitatives, il sera possible d’obtenir de meilleures performances que vos concurrents.<br/><br/>Nos experts en référencement déterminent la solution la plus pertinente quelques soient vos moyens pour vous apporter de la visibilité, mais pas seulement. Cette dernière doit permettre de <strong>générer du trafic sur votre site web</strong> afin de faire connaître votre entreprise et ainsi vendre vos produits et services en ligne. Aussi, nous proposons une <Link to="/formation-referencement/referencement-naturel-google-seo/" className="text-bleu hover:text-black font-bold">formation en référencement naturel en ligne</Link> pour vous permettre de tirer profit du SEO. <br /><br /><span className="font-bold"><strong>Linkweb, à Toulouse comme Agen</strong>, fait partie des agences qui vous accompagnent dans la création et le <strong>lancement de vos campagnes</strong> ainsi que pour la création de vos <strong><Link to="/referencement-toulouse/landing-page/" className="text-bleu font-bold hover:text-black">landing pages</Link></strong> afin de vous apporter un&nbsp;<strong>retour sur investissement</strong>.</span></p>
                            </div>
                            <div label="QUELS SONT LES OBJECTIFS D'UNE CAMPAGNE DE RÉFÉRENCEMENT NATUREL ?">
                                <ol className="list-decimal">
                                    <li>Améliorer le positionnement d'un site dans les résultats des moteurs de recherche ;</li>
                                    <li>Augmenter le trafic organique d'un site pour attirer des prospects.</li>
                                </ol>
                                <br/><br/>
                                <p>Le référencement naturel est l’ensemble des techniques qui visent à améliorer les performances d’un site sur les résultats de recherche des moteurs de recherche (indexation et positionnement), sans passer par la case « annonce ». Le but principal d’une campagne de référencement naturel est donc d’améliorer le positionnement du site sur les résultats de recherche, afin que celui-ci soit le plus visible possible par les internautes. Cela passe notamment par une optimisation du contenu et des balises, ainsi qu’une veille permanente sur les algorithmes et bonnes pratiques en vigueur. Une campagne bien menée peut permettre à un site de gagner des places précieuses sur les SERP, et donc d’augmenter considérablement son trafic. Elle doit cependant être menée sur le long terme, car il s’agit d’un travail continu qui nécessite une veille constante pour rester au top. Le trafic généré doit vous permettre d'atteindre des utilisateurs à même de faire appel à vos services.</p>
                            </div>
                            <div label="QUELS SONT LES FONDAMENTAUX DU TRAVAIL D'UNE AGENCE SEO À TOULOUSE">
                                <p>Une agence SEO à Toulouse travaille en premier lieu sur les fondamentaux du référencement naturel. En effet, le but est d’améliorer la visibilité d’un site dans les résultats de recherche des moteurs de recherche (principalement Google). 
                                    <br/><br/>
                                    Pour cela, il est nécessaire de travailler sur différents éléments tels que le contenu, les balises (SEO technique), ou encore les backlinks (le netlinking). 
                                    <br/><br/>
                                    <ul className="list-disc">
                                    <li>Technique : Le contenu doit être optimisé pour le référencement naturel. Il faut donc qu’il soit riche en mots-clés pertinents et qu’il apporte une réelle valeur ajoutée aux internautes.</li> 
                                    <li>Contenu : Les balises (titres, sous-titres...) jouent également un rôle important dans le classement des pages par les moteurs de recherche. Elles doivent donc être soigneusement choisies et utilisées de manière judicieuse.</li> 
                                    <li>Netlinking : Les backlinks sont des liens entrants vers un site Web. Ils permettent notamment aux moteurs de recherche de comprendre la qualité et la popularité d’un site. Plus un site a de backlinks provenant de sites populaires et bien positionnés, plus il sera considéré comme pertinent par les moteurs de recherche et aura donc tendance à se positionner au top des résultats.</li> 
                                    </ul>
                                    <br/><br/>
                                    Enfin, il est important de mentionner que le travail d’une agence SEO ne s’arrête pas lorsque le site est bien positionné dans les résultats des moteurs de recherche. En effet, ce travail doit être maintenu afin que le site conserve sa position face à la concurrence.</p>
                            </div>
                            <div label="COMMENT ÉVALUER LE TRAVAIL DE RÉFÉRENCEMENT NATUREL SEO ?">
                                <p>Le travail d'une agence SEO pour votre site web est important, mais comment pouvez-vous savoir si l'agence fait un bon travail ou non? Vous ne voulez pas investir votre argent durement gagné dans une agence qui n'est pas à la hauteur de vos attentes. Voici quelques conseils sur ce que vous devriez regarder lorsque vous essayez de déterminer si une agence SEO fait un bon travail. 
                                    <br/><br/>
                                    Tout d'abord, assurez-vous que les résultats sont mesurables. Une bonne agence SEO à Toulouse sera en mesure de vous montrer les résultats du référencement naturel au fur et à mesure qu'ils arrivent. Ils devraient être en mesure de fournir des rapports détaillés sur les mots clés utilisés et où ils ont eu le plus grand impact. Les rapports doivent également inclure le nombre total de visites sur votre site, ainsi que le temps passé par les visiteurs sur chaque page. 
                                    <br/><br/>
                                    Si l'agence ne peut pas fournir ces données, alors il est impossible d'attester des résultats du travail effectué et donc de l'efficacité réelle de l'agence.</p>
                            </div>
                            <div label="COMBIEN DE TEMPS ATTENDRE AVANT D'OBTENIR DES RÉSULTATS SEO ?">
                                <p>Le positionnement SEO d'un site web est un travail à long terme. Il faut du temps pour que les moteurs de recherche comprennent le contenu et l'organisation de votre site, et il faut encore plus de temps pour que votre site se positionne dans les résultats de recherche. Cependant, avec une bonne agence SEO à Toulouse, vous pouvez réduire considérablement le temps nécessaire pour obtenir des résultats en termes de trafic et de positions. 
                                    <br/><br/>
                                    Une agence SEO expérimentée saura comment optimiser votre site web pour les moteurs de recherche, ce qui permettra aux robots des moteurs de recherche d'indexer rapidement et efficacement votre contenu. De plus, une agence SEO sera en mesure de vous aider à produire du contenu optimisé sur votre site web, ce qui permettra également aux moteurs de recherche de mieux comprendre votre site et d'afficher vos pages dans les résultats de recherche plus rapidement. 
                                    <br/><br/>
                                    En général, il faudra quelques mois avant que les effets du travail SEO ne se manifestent pleinement en termes de trafic et de positions dans les résultats de recherche.</p>
                            </div>
                            <div label="QUELS SONT LES MÉTIERS DU RÉFÉRENCEMENT NATUREL ?">
                                <p>Une agence SEO met en place une stratégie globale pour améliorer les performances d’un site sur les moteurs de recherche. Elle analyse le marché, la concurrence et détermine les meilleures pratiques à mettre en œuvre pour atteindre les objectifs fixés avec le client. Au cours d'un projet SEO, plusieurs compétences et donc plusieurs professions interviennent pour donner vie à votre site internet et le rendre optimal pour les moteurs de recherche.
                                    <br/><br/>
                                    <ul className="list-disc">
                                    <li>Chef de projet SEO : Le chef de projet SEO a pour mission d'étudier tous vos besoins en vue de définir une stratégie pertinente et performante, puis d'organiser les tâches entre les membres de l'équipe SEO.</li>

                                    <li>Consultant SEO : Le consultant en référencement est un expert SEO qui intervient pour définir les optimisations à effectuer selon les diverses techniques de référencement et mettre en place une campagne qui vous permettra d'atteindre vos objectifs.</li>

                                    <li>UX Designer : L'UX Designer a pour rôle d'optimiser l'expérience utilisateur de votre site internet pour le rendre aussi bien accessible pour les utilisateurs que pour les robots des moteurs de recherche. L'expérience utilisateur proposée sur un site web est un critère qui influe sur son positionnement dans la recherche, c'est pourquoi, il s'agit d'un facteur à ne pas négliger.</li>
                                </ul></p>
                            </div>
                            <div label="COMMENT IDENTIFIIER LA MEILLEURE AGENCE SEO À TOULOUSE ?">
                                <p>Il existe de nombreuses agences SEO à Toulouse, mais comment savoir laquelle est la meilleure ?
                                <br/><br/>
                                    Voici quelques critères à prendre en compte pour vous aider à faire votre choix :
                                <br/><br/>
                                <ul className="list-disc">
                                    <li>La réputation de l'agence : renseignez-vous auprès de connaissances ou faites des recherches sur internet pour vous faire une idée de son travail et de sa réputation.</li>

                                    <li>Les compétences et l'expérience de l'équipe : assurez-vous que l'agence dispose d'une équipe expérimentée et compétente, capable de mettre en place les stratégies adéquates pour améliorer votre visibilité en ligne.</li>

                                    <li>La qualité des services proposés : prenez le temps de vérifier les différentes prestations proposées par l'agence et assurez-vous qu'elles correspondent bien à vos besoins. En suivant ces quelques conseils, vous devriez pouvoir identifier facilement la meilleure agence SEO à Toulouse pour votre entreprise.</li>
                                </ul>
                                </p>
                            </div>
                            <div label="QU'EST-CE QU'UNE AGENCE SEO TOULOUSAINE PEUT VOUS APPORTER ?">
                                <p>Une agence SEO à Toulouse peut vous aider à améliorer votre visibilité en ligne et à attirer plus de clients sur votre site web.
                                <br/><br/>
                                    Voici quelques-uns des avantages que vous pouvez obtenir en travaillant avec une agence professionnelle :
                                    <br/><br/>
                                    <ul className="list-disc">
                                    <li>Une meilleure visibilité sur les moteurs de recherche,</li>

                                    <li>Un trafic ciblé et qualifié vers votre site web,</li>

                                    <li>Des outils et des stratégies pour promouvoir efficacement votre entreprise en ligne.</li>
                                </ul></p>
                            </div>
                            <div label="POURQUOI FAIRE APPEL À UNE AGENCE SEO SUR TOULOUSE ?">
                                <p>Quand il s'agit d'optimisation pour les moteurs de recherche (SEO), de nombreuses entreprises se tournent vers des agences spécialisées dans le domaine. Cependant, certaines entreprises peuvent ne pas connaître tous les avantages qu'une agence peut offrir.
                                <br/><br/>
                                Voici quatre raisons pour lesquelles votre entreprise devrait envisager de travailler avec une agence de référencement comme Linkweb pour votre prochaine campagne de marketing numérique  :
                                <br/><br/>
                                <h4 className="font-bold">Expérience et expertise</h4>
                                <br/><br/>
                                L'un des plus grands avantages de travailler avec une agence SEO comme Linkweb est que vous avez accès à une équipe de professionnels expérimentés. Ceci est particulièrement avantageux si votre entreprise ne dispose pas d'une expertise SEO interne. L'agence pourra s'appuyer sur les connaissances et l'expérience collectives de son équipe pour développer une campagne efficace adaptée aux besoins de votre entreprise.
                                <br/><br/>
                                <h4 className="font-bold">Gain de temps</h4>
                                <br/><br/>
                                Un autre avantage de faire appel à une agence est qu'elle peut vous faire gagner du temps. Développer et mettre en œuvre une stratégie de référencement efficace nécessite beaucoup de temps et d'efforts. En externalisant ce travail à une agence, vous pouvez libérer du temps pour d'autres tâches liées à la gestion de votre entreprise.
                                <br/><br/>
                                <h4 className="font-bold">Rentabilité</h4>
                                <br/><br/>
                                Travailler avec une agence peut également être plus rentable que d'essayer de tout gérer en interne. En effet, les agences ont généralement des économies d'échelle qui leur permettent d'offrir leurs services à des tarifs inférieurs à ce qui serait possible pour la plupart des entreprises opérant à plus petite échelle. En outre, les agences proposent généralement des forfaits comprenant plusieurs services, ce qui peut réduire davantage les coûts.
                                <br/><br/>
                                <h4 className="font-bold">Approche axée sur les résultats</h4>
                                <br/><br/>
                                Enfin, l'un des principaux avantages de travailler avec une agence est qu'elle est axée sur les résultats. Cela signifie qu'ils travailleront sans relâche pour assurer le succès de votre campagne. Ils suivront les progrès et feront le long du chemin pour vous aider à atteindre les résultats souhaités.
                                </p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="w-full bg-black flex flex-col md:flex-row">
                    <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                    </div>
                    <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Vous souhaitez développer votre référencement à Agen ?</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Linkweb conduit votre projet <strong>de référencement à Agen en Lot-et-Garonne</strong>, de la définition de votre stratégie jusqu'à sa mise en place. Notre équipe vous accompagne durant chaque étape de votre projet pour répondre à vos objectifs.</p>
                            <div className="max-w-xs ml-auto mr-auto md:mr-0 md:ml-0 block">
                                <RoundButton url="/referencement-agen/" color="darkgrey" text="RÉFÉRENCEMENT À AGEN" />
                            </div>
                        </div>

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
                <section className="bg-white sidetitle mt-0 lg:mt-16 mb-10">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Les expertises de notre agence SEO à Toulouse</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                    <br />
                                    <h3 /*data-aos='fade-left'*/ className="text-md text-black century pb-0">Linkweb vous propose de nombreuses solutions pour développer votre projet web à Toulouse.</h3>
                                </div>
                        </section>
                    <section className="w-full">
                        <div className="w-full px-4 md:px-0 lg:px-0 flex justify-center mx-auto flex-col md:flex-row lg:w-full mt-5 flex-wrap">
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform mx-auto lg:mx-4 px-2 mb-10 text-black century text-center  border-bleu border-solid border py-4">
                                <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   " /><path fill="#37cfee" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z" /><g><path fill="#37cfee" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z" /><rect x="72.041" y="56.851" width="0.312" height="5.159" /></g><path fill="#37cfee" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z" /><path fill="#37cfee" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z" /></g></svg>
                                <h4 className="font-bold century text-xl"><span className="font-bold">Création site internet</span></h4>
                                <p className="text-md">Création de site internet professionnel et développement web à Toulouse.</p>
                                <Button url="/creation-site-internet-toulouse/" text="Création site internet Toulouse" size="md" position="center"/>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform text-black mx-auto lg:mx-4 px-2 mb-10 century text-center border-bleu border-solid border py-4">
                                <svg width="50px" className="mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#37cfee" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#37cfee" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#37cfee" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>                                
                                <h4 className="font-bold century -mt-4 text-xl"><span className="font-bold">Référencement payant</span></h4>
                                <p className="text-md">Création de campagnes Google Ads et stratégies de ROI (retour sur investissement) à Toulouse.</p>
                                <Button url="/agence-adwords-47-31/" text="Agence Adwords Toulouse" size="md" position="center"/>
                            </div>
                        {/* </div>
                        <div className="w-full text-black flex flex-col md:flex-row mx-auto justify-center lg:w-full mt-5 px-4 md:px-0 lg:px-0 md:mt-10 mb-12"> */}
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform justify-center text-black px-2 mb-10 mx-auto lg:mx-4 century text-center border-bleu border-solid border py-4">
                                <svg width="50px" class="mx-auto block" fill="#37cfee" viewBox="0 0 100 125"><path d="M50.3383789,43.5737305c1.6616211,0,3.215332,0.8461914,4.2636719,2.3217773  c0.3208008,0.449707,0.9443359,0.5561523,1.3945312,0.2363281c0.4501953-0.3203125,0.5561523-0.9443359,0.2363281-1.3945312  c-1.4287109-2.0107422-3.5771484-3.1635742-5.8945312-3.1635742c-3.2249756,0-5.9712524,2.2554321-7.0158691,5.3994141H42.043457  c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1h0.859314c-0.0228882,0.260498-0.0365601,0.5240479-0.0365601,0.7910156  c0,0.3817139,0.0322876,0.7545776,0.0786133,1.1225586H42.043457c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1h1.3900146  c1.1224976,2.9710693,3.793457,5.0678711,6.9049072,5.0678711c2.3178711,0,4.4663086-1.1533203,5.8945312-3.1635742  c0.3198242-0.4501953,0.2138672-1.074707-0.2363281-1.3945312c-0.4501953-0.3188477-1.0737305-0.2138672-1.3945312,0.2363281  C53.5541992,55.1083984,52,55.9545898,50.3383789,55.9545898c-2.0101929,0-3.7658691-1.2359009-4.7171631-3.0678711h3.2454834  c0.5522461,0,1-0.4477539,1-1s-0.4477539-1-1-1h-3.9058228c-0.0593872-0.364624-0.0946655-0.7387695-0.0946655-1.1225586  c0-0.2685547,0.0203247-0.5313721,0.0498047-0.7910156h3.9506836c0.5522461,0,1-0.4477539,1-1s-0.4477539-1-1-1h-3.406189  C46.364502,44.9595947,48.2089233,43.5737305,50.3383789,43.5737305z"></path><path d="M50,36.3857422c-7.5068359,0-13.6142578,6.1074219-13.6142578,13.6142578S42.4931641,63.6142578,50,63.6142578  S63.6142578,57.5068359,63.6142578,50S57.5068359,36.3857422,50,36.3857422z M50,61.6142578  c-6.4042969,0-11.6142578-5.2099609-11.6142578-11.6142578S43.5957031,38.3857422,50,38.3857422  S61.6142578,43.5957031,61.6142578,50S56.4042969,61.6142578,50,61.6142578z"></path><path d="M50,31.1928711c-10.362793,0-18.793457,8.4370117-18.793457,18.8071289S39.637207,68.8071289,50,68.8071289  S68.793457,60.3701172,68.793457,50S60.362793,31.1928711,50,31.1928711z M50,66.8071289  c-9.2597656,0-16.793457-7.5395508-16.793457-16.8071289S40.7402344,33.1928711,50,33.1928711S66.793457,40.7324219,66.793457,50  S59.2597656,66.8071289,50,66.8071289z"></path><path d="M56.3666992,16.3364258C56.3666992,12.8422852,53.5107422,10,50,10s-6.3666992,2.8422852-6.3666992,6.3364258  S46.4892578,22.6733398,50,22.6733398S56.3666992,19.8305664,56.3666992,16.3364258z M45.6333008,16.3364258  C45.6333008,13.9453125,47.5922852,12,50,12s4.3666992,1.9453125,4.3666992,4.3364258  c0,2.3916016-1.9589844,4.3369141-4.3666992,4.3369141S45.6333008,18.7280273,45.6333008,16.3364258z"></path><path d="M80.1552734,26.2084961c-0.0048828-1.6953125-0.6694336-3.2910156-1.8710938-4.4926758  s-2.7973633-1.8662109-4.4926758-1.8710938c-0.0063477,0-0.012207,0-0.0185547,0  c-1.690918,0-3.2783203,0.6567383-4.4711914,1.8500977c-1.1977539,1.1972656-1.8544922,2.7919922-1.8496094,4.4892578  c0.0043945,1.6953125,0.6689453,3.2910156,1.8710938,4.4926758c1.2016602,1.2021484,2.7973633,1.8666992,4.4926758,1.8710938  c0.0058594,0,0.012207,0,0.0180664,0c1.690918,0,3.2783203-0.65625,4.4711914-1.8496094  C79.5029297,29.5009766,80.1601562,27.90625,80.1552734,26.2084961z M76.8911133,29.2841797  c-0.8154297,0.8154297-1.9008789,1.2636719-3.0571289,1.2636719c-0.0043945,0-0.0083008,0-0.0126953,0  c-1.1630859-0.0029297-2.2583008-0.4594727-3.0839844-1.2851562s-1.2822266-1.9208984-1.2851562-3.0839844  c-0.003418-1.1611328,0.4453125-2.2514648,1.2636719-3.0698242c0.8154297-0.8154297,1.9008789-1.2641602,3.0576172-1.2641602  c0.0039062,0,0.0083008,0,0.012207,0c1.1635742,0.003418,2.2587891,0.4599609,3.0844727,1.2851562  c0.8251953,0.8256836,1.2817383,1.9208984,1.2851562,3.0844727C78.1586914,27.3754883,77.7094727,28.4658203,76.8911133,29.2841797z  "></path><path d="M83.6635742,43.6333008c-3.4941406,0-6.3369141,2.855957-6.3369141,6.3666992s2.8427734,6.3666992,6.3369141,6.3666992  S90,53.5107422,90,50S87.1577148,43.6333008,83.6635742,43.6333008z M83.6635742,54.3666992  c-2.3916016,0-4.3369141-1.9589844-4.3369141-4.3666992s1.9453125-4.3666992,4.3369141-4.3666992  C86.0546875,45.6333008,88,47.5922852,88,50S86.0546875,54.3666992,83.6635742,54.3666992z"></path><path d="M73.8339844,67.4521484c-0.0058594,0-0.012207,0-0.0180664,0c-1.6953125,0.0043945-3.2910156,0.6689453-4.4926758,1.8710938  c-1.2021484,1.2016602-1.8666992,2.7973633-1.8710938,4.4926758c-0.0048828,1.6972656,0.6518555,3.2919922,1.8496094,4.4892578  c1.1928711,1.1933594,2.7802734,1.8500977,4.4711914,1.8500977c0.0063477,0,0.012207,0,0.0185547,0  c1.6953125-0.0048828,3.2910156-0.6694336,4.4926758-1.8710938s1.8662109-2.7973633,1.8710938-4.4926758  c0.0048828-1.6977539-0.6523438-3.2924805-1.8500977-4.4897461C77.1118164,68.1083984,75.5249023,67.4521484,73.8339844,67.4521484z   M76.8701172,76.8701172c-0.8256836,0.8251953-1.9208984,1.2817383-3.0844727,1.2851562c-0.0039062,0-0.0083008,0-0.012207,0  c-1.1567383,0-2.2421875-0.4487305-3.0576172-1.2641602c-0.8183594-0.8183594-1.2670898-1.9086914-1.2636719-3.0698242  c0.0029297-1.1630859,0.4594727-2.2583008,1.2851562-3.0839844s1.9208984-1.2822266,3.0839844-1.2851562  c0.0043945,0,0.0083008,0,0.0126953,0c1.15625,0,2.2416992,0.4482422,3.0571289,1.2636719  c0.8183594,0.8183594,1.2675781,1.9086914,1.2641602,3.0698242C78.1518555,74.9492188,77.6953125,76.0444336,76.8701172,76.8701172z  "></path><path d="M56.3666992,83.6635742c0-3.4941406-2.855957-6.3369141-6.3666992-6.3369141s-6.3666992,2.8427734-6.3666992,6.3369141  S46.4892578,90,50,90S56.3666992,87.1577148,56.3666992,83.6635742z M50,88c-2.4077148,0-4.3666992-1.9453125-4.3666992-4.3364258  c0-2.3916016,1.9589844-4.3369141,4.3666992-4.3369141s4.3666992,1.9453125,4.3666992,4.3369141  C54.3666992,86.0546875,52.4077148,88,50,88z"></path><path d="M26.184082,67.4521484c-0.0058594,0-0.012207,0-0.0180664,0c-1.690918,0-3.2783203,0.65625-4.4711914,1.8496094  c-1.1977539,1.1972656-1.8549805,2.7919922-1.8500977,4.4897461c0.0048828,1.6953125,0.6694336,3.2910156,1.8710938,4.4926758  s2.7973633,1.8662109,4.4926758,1.8710938c0.0063477,0,0.012207,0,0.0185547,0c1.690918,0,3.2783203-0.6567383,4.4711914-1.8500977  c1.1977539-1.1972656,1.8544922-2.7919922,1.8496094-4.4892578c-0.0043945-1.6953125-0.6689453-3.2910156-1.8710938-4.4926758  C29.4750977,68.1210938,27.8793945,67.456543,26.184082,67.4521484z M29.2841797,76.8911133  c-0.8154297,0.8154297-1.9008789,1.2641602-3.0576172,1.2641602c-0.0039062,0-0.0083008,0-0.012207,0  c-1.1635742-0.003418-2.2587891-0.4599609-3.0844727-1.2851562c-0.8251953-0.8256836-1.2817383-1.9208984-1.2851562-3.0844727  c-0.003418-1.1611328,0.4458008-2.2514648,1.2641602-3.0698242c0.8154297-0.8154297,1.9008789-1.2636719,3.0571289-1.2636719  c0.0043945,0,0.0083008,0,0.0126953,0c1.1630859,0.0029297,2.2583008,0.4594727,3.0839844,1.2851562  s1.2822266,1.9208984,1.2851562,3.0839844C30.5512695,74.9824219,30.1025391,76.0727539,29.2841797,76.8911133z"></path><path d="M10,50c0,3.5107422,2.8422852,6.3666992,6.3364258,6.3666992S22.6733398,53.5107422,22.6733398,50  s-2.8427734-6.3666992-6.3369141-6.3666992S10,46.4892578,10,50z M20.6733398,50  c0,2.4077148-1.9453125,4.3666992-4.3369141,4.3666992C13.9453125,54.3666992,12,52.4077148,12,50  s1.9453125-4.3666992,4.3364258-4.3666992C18.7280273,45.6333008,20.6733398,47.5922852,20.6733398,50z"></path><path d="M30.6982422,21.6948242c-1.1928711-1.1933594-2.7802734-1.8500977-4.4711914-1.8500977c-0.0063477,0-0.012207,0-0.0185547,0  c-1.6953125,0.0048828-3.2910156,0.6694336-4.4926758,1.8710938s-1.8662109,2.7973633-1.8710938,4.4926758  c-0.0048828,1.6977539,0.6523438,3.2924805,1.8500977,4.4897461c1.1933594,1.1933594,2.7802734,1.8496094,4.4711914,1.8496094  c0.0058594,0,0.012207,0,0.0180664,0c1.6953125-0.0043945,3.2910156-0.6689453,4.4926758-1.8710938  c1.2021484-1.2016602,1.8666992-2.7973633,1.8710938-4.4926758C32.5527344,24.4868164,31.8959961,22.8920898,30.6982422,21.6948242z   M29.2626953,29.2626953c-0.8256836,0.8256836-1.9208984,1.2822266-3.0839844,1.2851562c-0.0043945,0-0.0083008,0-0.0126953,0  c-1.15625,0-2.2416992-0.4482422-3.0571289-1.2636719c-0.8183594-0.8183594-1.2675781-1.9086914-1.2641602-3.0698242  c0.003418-1.1635742,0.4599609-2.2587891,1.2851562-3.0844727c0.8256836-0.8251953,1.9208984-1.2817383,3.0844727-1.2851562  c0.0039062,0,0.0083008,0,0.012207,0c1.1567383,0,2.2421875,0.4487305,3.0576172,1.2641602  c0.8183594,0.8183594,1.2670898,1.9086914,1.2636719,3.0698242C30.5449219,27.3417969,30.0883789,28.4370117,29.2626953,29.2626953z  "></path><path d="M32.7509766,21.0688477c0.1831055,0.328125,0.5234375,0.5126953,0.8740234,0.5126953  c0.1650391,0,0.3320312-0.0405273,0.4863281-0.1269531c2.0742188-1.1577148,4.2802734-2.0878906,6.5556641-2.765625  c0.5292969-0.1577148,0.8310547-0.7143555,0.6733398-1.2436523c-0.1582031-0.5302734-0.7167969-0.8320312-1.2436523-0.6733398  c-2.4165039,0.7192383-4.7578125,1.7075195-6.9599609,2.9365234C32.6542969,19.9775391,32.4814453,20.5864258,32.7509766,21.0688477  z"></path><path d="M65.4521484,21.2236328c0.1513672,0.0820312,0.3144531,0.1206055,0.4750977,0.1206055  c0.3554688,0,0.699707-0.1894531,0.8803711-0.5239258c0.2626953-0.4858398,0.0820312-1.0927734-0.4033203-1.3554688  c-2.2148438-1.1987305-4.5688477-2.1557617-6.9970703-2.8452148c-0.5317383-0.1489258-1.0839844,0.1582031-1.2348633,0.6889648  c-0.1508789,0.53125,0.1577148,1.0839844,0.6889648,1.2348633C61.1484375,19.1928711,63.3662109,20.0947266,65.4521484,21.2236328z"></path><path d="M81.1860352,40.5419922c0.1293945,0.4345703,0.5273438,0.715332,0.9580078,0.715332  c0.0947266,0,0.1904297-0.0136719,0.2856445-0.0419922c0.5292969-0.1577148,0.8310547-0.7143555,0.6733398-1.2436523  c-0.7192383-2.4165039-1.7075195-4.7578125-2.9365234-6.9599609c-0.269043-0.4829102-0.8779297-0.6552734-1.3603516-0.3857422  c-0.4824219,0.269043-0.6552734,0.8779297-0.3857422,1.3603516C79.578125,36.0605469,80.5083008,38.2666016,81.1860352,40.5419922z"></path><path d="M79.5297852,66.8032227c0.3554688,0,0.699707-0.1894531,0.8803711-0.5239258  c1.1987305-2.215332,2.15625-4.5693359,2.8452148-6.9970703c0.1508789-0.53125-0.1577148-1.0839844-0.6889648-1.2348633  c-0.5307617-0.1499023-1.0834961,0.1577148-1.2348633,0.6889648c-0.6494141,2.2866211-1.5512695,4.5043945-2.6801758,6.5908203  c-0.2626953,0.4858398-0.0820312,1.0927734,0.4033203,1.3554688C79.2060547,66.7646484,79.3691406,66.8032227,79.5297852,66.8032227  z"></path><path d="M65.8886719,78.2954102c-2.0742188,1.1577148-4.2802734,2.0878906-6.5556641,2.765625  c-0.5292969,0.1577148-0.8310547,0.7143555-0.6733398,1.2436523c0.1293945,0.4345703,0.5273438,0.715332,0.9580078,0.715332  c0.0947266,0,0.1904297-0.0136719,0.2856445-0.0419922c2.4165039-0.7192383,4.7578125-1.7075195,6.9599609-2.9365234  c0.4824219-0.269043,0.6552734-0.8779297,0.3857422-1.3603516C66.9794922,78.1982422,66.3706055,78.0258789,65.8886719,78.2954102z"></path><path d="M40.5927734,83.1303711c0.0913086,0.0258789,0.1831055,0.0385742,0.2734375,0.0385742  c0.4360352,0,0.8364258-0.2875977,0.9614258-0.7275391c0.1508789-0.53125-0.1577148-1.0839844-0.6889648-1.2348633  c-2.2866211-0.6494141-4.5043945-1.5512695-6.5908203-2.6801758c-0.4863281-0.2636719-1.0927734-0.0820312-1.3554688,0.4033203  c-0.2626953,0.4858398-0.0820312,1.0927734,0.4033203,1.3554688C35.8110352,81.4838867,38.1650391,82.4414062,40.5927734,83.1303711  z"></path><path d="M21.1938477,67.1240234c0.4824219-0.269043,0.6552734-0.8779297,0.3857422-1.3603516  c-1.1577148-2.0742188-2.0878906-4.2802734-2.765625-6.5556641c-0.1582031-0.5302734-0.7172852-0.831543-1.2436523-0.6733398  c-0.5292969,0.1577148-0.8310547,0.7143555-0.6733398,1.2436523c0.7192383,2.4165039,1.7075195,4.7578125,2.9365234,6.9599609  c0.1831055,0.328125,0.5234375,0.5126953,0.8740234,0.5126953C20.8725586,67.2509766,21.0395508,67.2104492,21.1938477,67.1240234z"></path><path d="M17.4335938,41.7026367c0.0913086,0.0258789,0.1831055,0.0385742,0.2734375,0.0385742  c0.4360352,0,0.8364258-0.2875977,0.9614258-0.7275391c0.6494141-2.2866211,1.5512695-4.5043945,2.6801758-6.5908203  c0.2626953-0.4858398,0.0820312-1.0927734-0.4033203-1.3554688c-0.4858398-0.2631836-1.0927734-0.0820312-1.3554688,0.4033203  c-1.1987305,2.215332-2.15625,4.5693359-2.8452148,6.9970703C16.59375,40.9990234,16.9023438,41.5517578,17.4335938,41.7026367z"></path></svg>
                                <h4 className="font-bold century text-xl"><span className="font-bold">Social Media Marketing</span></h4>
                                <p className="text-md">Stratégies de notoriété, création de contenus et community management à Toulouse.</p>
                                <Button url="/agence-community-management/" text="Agence social media Toulouse" size="md" position="center"/>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform justify-center px-2 mb-10 mx-auto lg:mx-4 century text-center border-bleu border-solid border py-4">
                                <svg width="50px" className="mx-auto block" fill="#37cfee" viewBox="0 0 140 175"><g><g><g><g><path d="M107.4882812,28.375h-21.375c-0.5527344,0-1-0.4477539-1-1V6c0-0.404541,0.2431641-0.769043,0.6171875-0.9238281      c0.375-0.1540527,0.8046875-0.0695801,1.0898438,0.2167969l21.375,21.375      c0.2861328,0.2858887,0.3720703,0.7160645,0.2167969,1.0895996C108.2578125,28.1313477,107.8925781,28.375,107.4882812,28.375z       M87.1132812,26.375h17.9609375L87.1132812,8.4143066V26.375z" /></g><g><path d="M107.4882812,135H6.5585938c-0.5527344,0-1-0.4477539-1-1V6c0-0.5522461,0.4472656-1,1-1h79.5595703      c0.265625,0,0.5195312,0.1054688,0.7070312,0.2929688l21.3701172,21.3701172      c0.1875,0.1875,0.2929688,0.4418945,0.2929688,0.7070312v19.9699707c0,0.5522461-0.4472656,1-1,1s-1-0.4477539-1-1V27.7844238      L85.7041016,7H7.5585938v126h98.9296875V86.2600098c0-0.5522461,0.4472656-1,1-1s1,0.4477539,1,1V134      C108.4882812,134.5522461,108.0410156,135,107.4882812,135z" /></g></g><g><g><path d="M75.6171875,124.7570801c-0.1679688,0-0.3359375-0.0422363-0.4882812-0.1274414      c-0.3349609-0.1872559-0.5332031-0.5500488-0.5097656-0.9331055l1.3242188-21.826416      c0.0087891-0.1501465,0.0517578-0.2963867,0.125-0.4277344l39.9150391-71.3278809      c0.1953125-0.347168,0.5869141-0.5471191,0.9726562-0.5065918c7.1279297,0.715332,12.9423828,3.9689941,17.28125,9.670166      c0.2412109,0.3168945,0.2714844,0.746582,0.0771484,1.0939941l-39.9150391,71.3278809      c-0.0742188,0.1313477-0.1757812,0.2443848-0.2988281,0.3308105l-17.9091797,12.5454102      C76.0195312,124.6962891,75.8183594,124.7570801,75.6171875,124.7570801z M77.9257812,102.2194824l-1.1845703,19.529541      l16.0244141-11.2250977l39.4785156-70.548584c-3.8085938-4.7553711-8.7949219-7.5456543-14.8398438-8.3044434      L77.9257812,102.2194824z M93.5263672,111.2116699h0.0097656H93.5263672z" /></g><g><path d="M93.5253906,112.2116699c-0.1650391,0-0.3330078-0.0412598-0.4873047-0.1276855      c-1.0625-0.5947266-1.2998047-1.5097656-1.4570312-2.1149902c-0.1337891-0.5161133-0.1962891-0.7033691-0.4990234-0.8728027      c-0.3037109-0.1704102-0.4951172-0.1240234-1.0029297,0.0314941c-0.5986328,0.1835938-1.5029297,0.4599609-2.5654297-0.1352539      c-1.0634766-0.5949707-1.3007812-1.510498-1.4580078-2.1162109c-0.1337891-0.515625-0.1953125-0.7026367-0.4970703-0.8718262      c-0.3017578-0.168457-0.4921875-0.125-1.0048828,0.0319824c-0.5986328,0.1828613-1.5029297,0.4592285-2.5654297-0.1359863      c-1.0634766-0.5949707-1.3017578-1.5102539-1.4599609-2.1159668c-0.1347656-0.5168457-0.1962891-0.7043457-0.5009766-0.8745117      c-0.3046875-0.1706543-0.4960938-0.125-1.0068359,0.0305176c-0.6005859,0.1821289-1.5029297,0.458252-2.5673828-0.1374512      c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2705078-0.4816895,0.8789062-0.6552734,1.3613281-0.3842773      c0.3056641,0.1706543,0.4970703,0.1252441,1.0068359-0.0307617c0.5996094-0.182373,1.5019531-0.4584961,2.5673828,0.1374512      c1.0634766,0.5949707,1.3017578,1.5102539,1.4599609,2.1159668c0.1347656,0.5168457,0.1962891,0.7043457,0.5009766,0.8745117      c0.3027344,0.1699219,0.4951172,0.1237793,1.0039062-0.0314941c0.5996094-0.1826172,1.5039062-0.458252,2.5664062,0.135498      c1.0634766,0.5952148,1.2998047,1.5102539,1.4570312,2.1157227c0.1337891,0.5158691,0.1953125,0.7028809,0.4980469,0.8723145      c0.3027344,0.1696777,0.4941406,0.1245117,1.0029297-0.0317383c0.5996094-0.1826172,1.5039062-0.4592285,2.5654297,0.135498      c1.0634766,0.5947266,1.3007812,1.5100098,1.4580078,2.1157227c0.1337891,0.5158691,0.1953125,0.7028809,0.4980469,0.8723145      c0.4824219,0.2697754,0.6542969,0.8791504,0.3847656,1.361084      C94.2158203,112.0273438,93.8759766,112.2116699,93.5253906,112.2116699z" /></g><g><g><path d="M86.0400391,106.1291504c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855       c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398l32.2480469-57.6271973       c0.2705078-0.4819336,0.8789062-0.6555176,1.3613281-0.3842773c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398       l-32.2480469,57.6271973C86.7304688,105.9445801,86.390625,106.1291504,86.0400391,106.1291504z" /></g></g><g><path d="M81.2548828,120.8110352c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855l-5.2207031-2.9213867      c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2705078-0.4816895,0.8779297-0.6550293,1.3613281-0.3842773      l5.2207031,2.9213867c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398      C81.9453125,120.6264648,81.6054688,120.8110352,81.2548828,120.8110352z" /></g></g><g><g><path d="M61.0966797,89.505127h-8.1464844c-0.4931641,0-0.9121094-0.3591309-0.9882812-0.8461914l-1.1542969-7.4187012      c-1.6474609-0.4711914-3.2314453-1.1269531-4.7236328-1.9555664l-6.0615234,4.4284668      c-0.3974609,0.2907715-0.9492188,0.2485352-1.296875-0.1003418l-5.7607422-5.7607422      c-0.3486328-0.3483887-0.3916016-0.8989258-0.1005859-1.296875l4.4287109-6.0617676      C36.4638672,69,35.8076172,67.4160156,35.3369141,65.7700195l-7.4179688-1.1547852      c-0.4873047-0.0756836-0.8466797-0.4951172-0.8466797-0.9880371v-8.1467285c0-0.4929199,0.359375-0.9123535,0.8457031-0.9880371      l7.4189453-1.1550293c0.4707031-1.6459961,1.1269531-3.2297363,1.9560547-4.7233887l-4.4287109-6.0617676      c-0.2910156-0.3979492-0.2480469-0.9484863,0.1005859-1.296875l5.7607422-5.7602539      c0.3486328-0.3493652,0.8994141-0.3903809,1.296875-0.1003418l6.0615234,4.4282227      c1.4921875-0.8288574,3.0761719-1.4846191,4.7236328-1.9558105l1.1542969-7.4182129      c0.0761719-0.4870605,0.4951172-0.8461914,0.9882812-0.8461914h8.1464844c0.4931641,0,0.9121094,0.3591309,0.9882812,0.8461914      l1.1542969,7.4182129c1.6474609,0.4709473,3.2304688,1.126709,4.7236328,1.9558105l6.0625-4.4284668      c0.3974609-0.2907715,0.9482422-0.248291,1.296875,0.1003418l5.7597656,5.760498      c0.3486328,0.3483887,0.3916016,0.8989258,0.1005859,1.296875l-4.4287109,6.0617676      c0.8291016,1.4916992,1.484375,3.0754395,1.9560547,4.7236328l7.4179688,1.1547852      c0.4873047,0.0756836,0.8466797,0.4951172,0.8466797,0.9880371v8.1467285c0,0.4929199-0.359375,0.9123535-0.8457031,0.9880371      l-7.4189453,1.1550293c-0.4707031,1.6459961-1.1269531,3.2299805-1.9560547,4.7233887l4.4287109,6.0615234      c0.2910156,0.3979492,0.2480469,0.9482422-0.1005859,1.296875l-5.7597656,5.7607422      c-0.3486328,0.348877-0.8994141,0.3911133-1.296875,0.1003418l-6.0625-4.4284668      c-1.4921875,0.8288574-3.0761719,1.4846191-4.7236328,1.9558105l-1.1542969,7.418457      C62.0087891,89.1459961,61.5898438,89.505127,61.0966797,89.505127z M53.8066406,87.505127h6.4335938l1.1230469-7.2143555      c0.0615234-0.395752,0.3535156-0.7165527,0.7412109-0.8151855c1.9082031-0.4855957,3.7285156-1.239502,5.4121094-2.2412109      c0.3447266-0.2043457,0.7783203-0.1845703,1.1015625,0.052002l5.8955078,4.3066406L79.0625,77.043457l-4.3066406-5.8947754      c-0.2363281-0.3234863-0.2568359-0.7565918-0.0517578-1.1008301c1.0019531-1.6850586,1.7558594-3.5061035,2.2412109-5.4123535      c0.0986328-0.3881836,0.4189453-0.6799316,0.8144531-0.7414551l7.2148438-1.123291v-6.4338379l-7.2138672-1.1230469      c-0.3964844-0.0615234-0.7167969-0.3532715-0.8154297-0.7414551c-0.4863281-1.9089355-1.2402344-3.7297363-2.2412109-5.4118652      c-0.2050781-0.3442383-0.1845703-0.777832,0.0517578-1.1013184L79.0625,42.0639648l-4.5488281-4.5493164l-5.8955078,4.3066406      c-0.3232422,0.2365723-0.7578125,0.2565918-1.1015625,0.052002c-1.6845703-1.0021973-3.5048828-1.7561035-5.4111328-2.2409668      c-0.3886719-0.098877-0.6806641-0.4196777-0.7421875-0.8154297l-1.1230469-7.2141113h-6.4335938l-1.1230469,7.2141113      c-0.0615234,0.395752-0.3535156,0.7165527-0.7412109,0.8154297c-1.9082031,0.4853516-3.7285156,1.2392578-5.4121094,2.2409668      c-0.34375,0.204834-0.7783203,0.1848145-1.1015625-0.052002l-5.8945312-4.3063965l-4.5498047,4.5490723l4.3066406,5.8950195      c0.2363281,0.3234863,0.2568359,0.7565918,0.0517578,1.1008301c-1.0019531,1.6853027-1.7558594,3.5063477-2.2412109,5.4123535      c-0.0986328,0.3881836-0.4189453,0.6799316-0.8144531,0.7414551l-7.2148438,1.123291v6.4338379l7.2138672,1.1230469      c0.3964844,0.0615234,0.7167969,0.3532715,0.8154297,0.7414551c0.4853516,1.90625,1.2392578,3.7272949,2.2412109,5.4121094      c0.2050781,0.3444824,0.1845703,0.7775879-0.0517578,1.1010742L34.984375,77.043457l4.5498047,4.5495605l5.8945312-4.3066406      c0.3232422-0.2368164,0.7578125-0.2565918,1.1015625-0.052002c1.6826172,1.0012207,3.5039062,1.7553711,5.4121094,2.2412109      c0.3876953,0.0986328,0.6796875,0.4194336,0.7412109,0.8151855L53.8066406,87.505127z M85.9746094,63.6271973h0.0097656      H85.9746094z" /></g><g><path d="M57.0234375,72.3076172c-7.0322266,0-12.7539062-5.7214355-12.7539062-12.7539062      s5.7216797-12.7536621,12.7539062-12.7536621s12.7539062,5.7211914,12.7539062,12.7536621      S64.0556641,72.3076172,57.0234375,72.3076172z M57.0234375,48.8000488      c-5.9296875,0-10.7539062,4.8239746-10.7539062,10.7536621S51.09375,70.3076172,57.0234375,70.3076172      s10.7539062-4.8242188,10.7539062-10.7539062S62.953125,48.8000488,57.0234375,48.8000488z" /></g></g></g><g><path d="M126.5810547,53.1425781c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855l-16.5859375-9.2810059    c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2695312-0.4816895,0.8779297-0.6550293,1.3613281-0.3842773    l16.5859375,9.2810059c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398    C127.2714844,52.9580078,126.9316406,53.1425781,126.5810547,53.1425781z" /></g></g></svg>
                                <h4 className="font-bold century text-xl"><span className="font-bold">Formation SEO</span></h4>
                                <p className="text-md">Formation qualifiante dans divers secteurs du <strong>webmarketing</strong>.</p>
                                <Button url="/formation-referencement/referencement-naturel-google-seo/" text="Formation SEO" size="md" position="center"/>
                            </div>
                        </div>
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
query lastsThreePostsRef {
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
export default ReferencementToulouse;
