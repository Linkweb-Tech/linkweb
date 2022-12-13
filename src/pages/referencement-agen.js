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
import Bg from "../images/referencement-toulouse-bg.jpg";
import imac from "../images/agence-seo-agen.jpg";
// import bgDev from '../images/bg-dev.jpg';
import mac from "../images/referencement-agen.jpg";



import scroll from "../images/motiontest.svg";
import charpentelacaze from '../images/charpente-lacaze-noel-avis.png';
import sarlbesset from '../images/sarlbesset-avis.png';
import danhydro from '../images/danhydro-avis.png';
import "../scss/info.scss";
import '../scss/global.scss';

class ReferencementAgen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Référencement SEO de Site Internet à Agen - Agence SEO Linkweb"
                    description="Définition stratégique et mise en application pour votre projet de référencement naturel avec Linkweb, agence SEO à Agen."
                    keywords={[`Référencement Agen`, `Référencement Agen`, `Agence de Référencement Agen`, `Agence de Référencement Agen`, `Référencement Google`]}
                    url="https://linkweb.fr/referencement-agen/"
                    nom="Référencement à Agen"
                    slug="referencement-agen/"
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
                            <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Agence SEO Agen - Référencement Agen</h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Agence de référencement naturel à Agen.</h2>
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
                        <span className="px-4 text-md lg:text-lg text-white"> Référencement Agen</span>
                    </nav>
                <section className="phototext">
                    <section className="text-center text-black text-2xl mx-auto flex-col flex items-center lg:mx-0 century mt-16 mb-10">
                        <h2 className="century text-black leading-none">Définition et application de votre stratégie de <br /><span className="text-5xl lg:text-6xl text-bleu font-bold">RÉFÉRENCEMENT NATUREL</span></h2>
                        <br />
                        <hr className="border-solid w-1/6 border-white"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="text-xl max-w-5xl text-center century text-black px-4 pb-0">Générez de la visibilité pour votre entreprise en optimisant le positionnement de votre site internet dans les résultats des moteurs de recherche. Nos experts définissent votre stratégie de référencement naturel SEO.</h3>
                    </section>
                    <section className="w-full my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Agence SEO Linkweb à Agen" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10  flex flex-col">
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                    <p>1</p>
                                </div>
                                <div className="w-full px-6 lg:px-6 flex flex-col justify-center" style={{ maxWidth: '1000px' }}>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>DÉFINITION STRATÉGIQUE
                                    </h3>

                                    <h4 className="century">Notre agence SEO définit votre stratégie SEO à partir de vos besoins et des opportunités présentes sur votre marché.</h4>
                                    <br />
                                    <p className="w-full century pb-4 text-justify">La <strong>définition d’une stratégie SEO</strong> nécessite de s’appuyer sur des critères objectifs. Mener un <strong>audit SEO</strong>, <strong>étudier la concurrence</strong>, détecter les opportunités en s’appuyant sur vos besoins réels sont autant d’actions qui permettent d’aboutir à une <strong>stratégie SEO performante</strong>.
                                </p>
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>2</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>SEARCH EXPERIENCE OPTIMIZATION
                                    </h3>

                                    <h4 className="century">Nous concevons votre site internet pour les robots de recherche, mais aussi et surtout pour vos utilisateurs.</h4>
                                    <br />
                                    <p className="w-full century pb-4 text-justify">Le <strong>contenu optimisé</strong> ne suffit plus pour garantir des <strong>performances SEO élevées</strong>. Vos <strong>pages web</strong> doivent présenter une <strong>expérience utilisateur (UX design) optimale</strong> : <strong>temps de chargement rapide</strong>, <strong>maillage interne</strong> structuré, <strong>ergonomie</strong> soignée et intuitive, etc.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>3</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>CRÉATION DE CONTENUS SEO
                                    </h3>

                                    <h4 className="century">Nos consultants SEO structurent et rédigent les textes de votre site web pour générer des performances de visibilité maximales.</h4>
                                    <br />
                                    <p className="century pb-4 text-justify">Nos <strong>spécialistes de la rédaction SEO</strong> définissent des <strong>pages web optimisées pour les robots et algorithmes</strong>, mais surtout pour vos utilisateurs. Les textes que nous créons sont générés pour <strong>engager vos utilisateurs</strong>.
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
                                        <span className="text-bleu">/</span>ACQUISITION DE LIENS EXTERNES
                                    </h3>

                                    <h4 className="century">Plus un nom de domaine reçoit de liens externes, plus il est considéré comme populaire. La popularité d’un nom de domaine est déterminante aux yeux de Google.</h4>
                                    <br />
                                    <p className="century pb-4 text-justify">Obtenir des <strong>liens externes (backlinks)</strong> en provenance de <strong>sites internet à forte autorité</strong> constitue un signal positif pour les <strong>algorithmes des moteurs</strong>. Cette discipline, appelée <strong>Netlinking</strong>, demande une technicité qui vise à ne pas être assimilée à de la tentative de spam.
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                        Vous souhaitez améliorer votre visibilité sur Internet ? <br /><span className="text-5xl lg:text-6xl text-bleu font-bold uppercase">SOYEZ NATUREL !</span>
                    </h2>
                    <hr className="blue border-bleu"></hr>
                </section>
                <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
                    <div className="w-full xl:w-1/3 one px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE DÉCOUVRE LE RÉFÉRENCEMENT NATUREL
                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    Le <strong>référencement naturel (SEO)</strong> se distingue du <strong>référencement payant</strong> ou <strong>référencement Google Ads (SEA)</strong>. Si ce dernier se concentre sur la <strong>sponsorisation d’annonces</strong>, le <strong>SEO</strong> demande rigueur et patience pour <strong>faire progresser un site web dans les classement des moteurs</strong>.
                </div>
                                <Button url="/contact-agence-web-toulouse/" text="En savoir plus sur le SEO" position="center" />

                            </section>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 two px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE VEUX ÊTRE ACCOMPAGNÉ POUR DÉFINIR MES BESOINS
                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    Vous souhaitez opter pour notre offre de <strong>référencement naturel SEO</strong> pour étendre la <strong>visibilité en ligne de votre site internet</strong> ? Nous définissons les contours de votre projet pour vous mettre en place une solution efficace et adaptée à vos besoins.
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
                                    <span className="text-bleu">/</span>JE FAIS LE CHOIX DE CONSULTANTS POUR MON SEO
                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    Nos <strong>consultants SEO à Agen</strong> vous accompagnent pour déterminer les <strong>objectifs de votre <Link to="/creation-de-site-internet-a-agen/" className="text-bleu hover:text-black font-bold">création de votre site internet à Agen</Link></strong>. Ceci doit conduire à <strong>optimiser votre présence en ligne</strong>, dans le but d'<strong>obtenir des contacts</strong>, ou bien de <strong>vendre vos produits</strong>.
                </div>
                                <Button url="/contact-agence-web-toulouse/" text="Prendre rendez-vous" position="center" />
                            </section>

                        </div>

                    </div>
                </section>
                <section className="bg-darkgrey sidetitle py-10">
                    <section className="w-full lg:w-2/3 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
                        <h2 className="century text-center lg:text-left text-white text-3xl md:text-5xl leading-none">En SEO, ce n’est plus vous qui cherchez vos clients : <span className="text-bleu">ce sont eux qui vous trouvent</span> !</h2>
                        <br />
                        <div className="line-title my-4 ">
                            <br />
                            <hr className="w-1/2 border-bleu lg:w-1/12" />
                            <br />
                            <h3 /*data-aos='fade-left'*/ className="text-xl text-white century pb-0">Notre agence SEO de référencement web travaille dans le but de faire progresser la visibilité de votre société en première page des résultats.</h3>
                        </div>
                    </section>
                    <section className="flex justify-center flex-col items-center">
                        <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 text-white century text-center lg:text-left">
                                <svg width="50px" fill="#ffffff" className="lg:mx-0 mx-auto block" viewBox="0 0 26.458333 33.0729175"><g transform="translate(0,-270.54165)"><path d="m 5.8714289,272.12915 c -1.8514508,0 -3.3578869,1.50883 -3.3578869,3.36322 0,1.85439 1.5064361,3.36271 3.3578869,3.36271 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36271 0,-0.93619 -0.3850002,-1.78375 -1.0034311,-2.39407 l -2.1329844,3.56079 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869546,-1.24151 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35362 C 7.272958,272.36508 6.5998223,272.12917 5.8714289,272.12917 Z m 5.9146431,2.06968 a 0.25889664,0.25930793 0 0 0 0.02674,0.51792 h 11.867626 a 0.25855123,0.25896196 0 1 0 0,-0.51792 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02674,0 z m 0.02674,2.06866 a 0.25836408,0.25877452 0 1 0 0,0.51741 h 5.668955 a 0.25836408,0.25877452 0 1 0 0,-0.51741 z m -5.9413818,4.14035 c -1.8514508,0 -3.3578869,1.50884 -3.3578869,3.36323 0,1.85439 1.5064361,3.36271 3.3578869,3.36271 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36271 0,-0.9362 -0.3850002,-1.78375 -1.0034311,-2.39407 l -2.1329844,3.56079 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869546,-1.24151 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35362 c -0.5508481,-0.39625 -1.2239838,-0.63216 -1.9523772,-0.63216 z m 5.9156518,2.06969 a 0.25832484,0.25873522 0 0 0 -10e-4,5.1e-4 0.2587086,0.25911959 0 0 0 0.02674,0.51741 h 11.867629 a 0.25836408,0.25877452 0 1 0 0,-0.51741 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02573,-5.1e-4 z m 0.02573,2.06866 a 0.25835919,0.25876963 0 0 0 0,0.51741 h 5.668957 a 0.25835919,0.25876963 0 0 0 0,-0.51741 z m -5.9413807,4.14035 c -1.8514507,0 -3.3578869,1.50884 -3.3578869,3.36322 0,1.8544 1.5064362,3.36272 3.3578869,3.36272 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36272 0,-0.93618 -0.3850002,-1.78374 -1.0034311,-2.39407 l -2.1329844,3.5608 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869543,-1.2415 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35363 C 7.2729607,288.9225 6.599825,288.68658 5.8714316,288.68658 Z m 5.9146427,2.07018 a 0.2587086,0.25911959 0 0 0 0.02674,0.51742 H 23.68044 a 0.25836408,0.25877452 0 1 0 0,-0.51742 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02674,0 z m 0.02674,2.06817 a 0.25836408,0.25877452 0 1 0 0,0.51741 h 5.668956 a 0.25836408,0.25877452 0 1 0 0,-0.51741 z" /></g></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Audit SEO</span></h4>
                                <p className="font-bold">Cela permet d’effectuer un état des lieux afin de comprendre et déterminer les opportunités pour votre site internet.</p>
                                <br />
                                <p>Nous disposons d’outils professionnels permettant d’<strong>auditer votre site internet d’un point de vue technique</strong>, mais également d’un point de vue <strong>sémantique</strong>. Ceci a pour vocation de déterminer un plan d’actions permettant d’<strong>améliorer votre positionnement dans les pages de résultats</strong>.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" fill="#ffffff" viewBox="0 0 96 120"><path d="M22.424,18.98c0-1.484-1.207-2.691-2.691-2.691h-1.72v-1.575c1.232-0.805,1.985-2.166,1.985-3.664  c0-2.421-1.969-4.39-4.39-4.39c-2.42,0-4.389,1.969-4.389,4.39c0,1.498,0.75,2.857,1.979,3.664v1.575h-1.715  c-1.484,0-2.691,1.207-2.691,2.691v8.592h13.632V18.98z M12.719,11.051c0-1.594,1.296-2.89,2.889-2.89c1.594,0,2.89,1.296,2.89,2.89  c0,1.092-0.604,2.078-1.576,2.573c-0.614,0.313-1.323,0.391-1.988,0.235c-0.222-0.052-0.439-0.131-0.647-0.236  C13.32,13.129,12.719,12.144,12.719,11.051z M16.513,15.346v0.944h-1.814v-0.943c0.024,0.005,0.049,0.003,0.073,0.008  c0.275,0.053,0.553,0.087,0.837,0.087c0.279,0,0.557-0.034,0.831-0.087C16.464,15.349,16.489,15.351,16.513,15.346z M20.924,26.073  H10.292V18.98c0-0.657,0.534-1.191,1.191-1.191h1.715h4.814h1.72c0.657,0,1.191,0.534,1.191,1.191V26.073z" /><path d="M23.247,23.632l-0.536,1.4c1.663,0.637,2.256,1.343,2.256,1.79c0,0.796-1.682,1.913-4.897,2.503  c-2.765,0.508-6.139,0.509-8.935,0c-3.207-0.589-4.884-1.706-4.884-2.503c0-0.448,0.593-1.153,2.256-1.792l-0.537-1.4  C5.309,24.651,4.75,25.93,4.75,26.823c0,1.814,2.228,3.265,6.114,3.979c1.496,0.272,3.092,0.41,4.744,0.41  c1.657,0,3.249-0.138,4.732-0.41c3.894-0.716,6.126-2.167,6.126-3.979C26.467,25.93,25.908,24.651,23.247,23.632z" /><path d="M11.483,45.354c-1.484,0-2.691,1.207-2.691,2.69v8.592h13.632v-8.592c0-1.483-1.207-2.69-2.691-2.69h-1.72v-1.575  c1.232-0.807,1.985-2.167,1.985-3.664c0-2.421-1.97-4.39-4.391-4.39c-2.42,0-4.389,1.969-4.389,4.39c0,1.497,0.75,2.857,1.979,3.663  v1.575H11.483z M12.719,40.115c0-1.594,1.296-2.89,2.889-2.89c1.594,0,2.891,1.296,2.891,2.89c0,1.091-0.604,2.077-1.576,2.573  c-0.617,0.313-1.323,0.392-1.988,0.235c-0.222-0.053-0.439-0.131-0.648-0.236C13.32,42.192,12.719,41.207,12.719,40.115z   M16.514,44.409v0.944h-1.815V44.41c0.024,0.005,0.049,0.003,0.073,0.007c0.274,0.053,0.553,0.087,0.836,0.087  c0.279,0,0.556-0.034,0.83-0.087C16.463,44.412,16.489,44.415,16.514,44.409z M18.014,46.854h1.72c0.657,0,1.191,0.534,1.191,1.19  v7.092H10.292v-7.092c0-0.656,0.534-1.19,1.191-1.19h1.715H18.014z" /><path d="M23.248,52.695l-0.537,1.4c1.663,0.638,2.256,1.343,2.256,1.79c0,0.797-1.682,1.914-4.897,2.504  c-2.775,0.507-6.128,0.509-8.935,0c-3.207-0.589-4.885-1.706-4.885-2.504c0-0.448,0.593-1.153,2.256-1.791l-0.537-1.4  c-2.66,1.02-3.219,2.298-3.219,3.191c0,1.815,2.228,3.266,6.115,3.98c1.501,0.272,3.097,0.41,4.743,0.41  c1.651,0,3.243-0.138,4.732-0.41c3.894-0.716,6.126-2.167,6.126-3.98C26.467,54.994,25.908,53.716,23.248,52.695z" /><path d="M11.483,74.417c-1.484,0-2.691,1.207-2.691,2.691V85.7h13.632v-8.592c0-1.484-1.207-2.691-2.691-2.691h-1.72v-1.575  c1.232-0.805,1.985-2.166,1.985-3.664c0-2.42-1.969-4.389-4.39-4.389c-2.42,0-4.389,1.969-4.389,4.389  c0,1.498,0.75,2.858,1.979,3.664v1.575H11.483z M12.719,69.178c0-1.593,1.296-2.889,2.889-2.889c1.594,0,2.89,1.296,2.89,2.889  c0,1.092-0.604,2.078-1.577,2.573c-0.611,0.313-1.323,0.391-1.988,0.234c-0.222-0.052-0.439-0.131-0.646-0.235c0,0,0,0,0,0l0,0  C13.32,71.255,12.719,70.271,12.719,69.178z M16.513,73.473v0.943h-1.814v-0.943c0.024,0.005,0.05,0.003,0.075,0.008  c0.274,0.053,0.552,0.086,0.835,0.086c0.279,0,0.556-0.034,0.83-0.087C16.463,73.476,16.489,73.479,16.513,73.473z M18.013,75.917  h1.72c0.657,0,1.191,0.534,1.191,1.191V84.2H10.292v-7.092c0-0.657,0.534-1.191,1.191-1.191h1.715H18.013z" /><path d="M23.248,81.759l-0.537,1.4c1.664,0.638,2.256,1.343,2.256,1.79c0,0.796-1.683,1.913-4.897,2.504  c-2.766,0.506-6.137,0.508-8.935,0c-3.207-0.59-4.884-1.706-4.884-2.504c0-0.448,0.593-1.153,2.256-1.792l-0.537-1.4  C5.309,82.778,4.75,84.057,4.75,84.95c0,1.814,2.228,3.265,6.115,3.979c1.497,0.272,3.092,0.41,4.743,0.41  c1.656,0,3.248-0.138,4.732-0.41c3.894-0.717,6.126-2.167,6.126-3.979C26.467,84.057,25.908,82.779,23.248,81.759z" /><path d="M63.989,13.401H34.308v11.072h29.681V13.401z M62.489,22.973H35.808v-8.072h26.681V22.973z" /><path d="M34.308,53.536H91.25V42.465H34.308V53.536z M35.808,43.965H89.75v8.071H35.808V43.965z" /><path d="M34.308,82.6h48.059V71.528H34.308V82.6z M35.808,73.028h45.059V81.1H35.808V73.028z" /></svg>
                                <h4 className="font-bold century -mt-4 text-bleu"><span className="font-bold">Étude de la concurrence</span></h4>
                                <p className="font-bold">Comprendre la structure de la concurrence présente sur un marché permet de mieux l’appréhender et de définir une ligne directrice qui aura pour but de la surmonter.</p>
                                <br />
                                <p>En <strong>référencement SEO</strong>, la concurrence est un critère important qui peut influer sur vos décisions. La concurrence n’est pas un frein, mais doit être vue comme une opportunité pour se positionner de façon précise sur des secteurs porteurs pour votre entreprise.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" fill="#ffffff" viewBox="0 0 800 227.5"><g><path class="fil0" d="M33 0l734 0c18,0 33,15 33,33l0 117c0,17 -15,32 -33,32l-734 0c-18,0 -33,-15 -33,-32l0 -117c0,-18 15,-33 33,-33zm150 17l0 148 584 0c9,0 16,-7 16,-15l0 -117c0,-9 -7,-16 -16,-16l-584 0zm-17 148l0 -148 -133 0c-9,0 -16,7 -16,16l0 117c0,8 7,15 16,15l133 0z" /><path class="fil0" d="M75 46c-18,3 -31,20 -28,39 3,18 20,31 39,28 19,-3 31,-20 28,-39 -3,-18 -20,-31 -39,-28zm46 65l28 34c4,5 -9,16 -14,11l-27 -33c-6,3 -12,6 -19,7 -29,4 -54,-14 -59,-43 -4,-28 15,-54 43,-58 28,-4 54,14 58,43 2,14 -1,27 -10,39z" /></g></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Choix des mots-clés</span></h4>
                                <p className="font-bold">Choisir des mots-clés pertinents pour vous et recherchés par les internautes est à la base d’un cadrage stratégique réussi.</p>
                                <br />
                                <p>Si le <strong>choix des mots-clés</strong> est une étape importante dans la <strong>phase de définition stratégique SEO</strong>, il en reste que la compréhension de l’<strong>intention de l’utilisateur</strong> est toute aussi importante en vue de proposer des <strong>contenus pertinents</strong>.</p>
                            </div>
                        </div>
                        <div className="w-full text-white flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                            <div className="w-full svgtransform -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg viewBox="0 0 100 125" width="50px" className="lg:mx-0 mx-auto block" fill="#ffffff" ><g><path d="M53.676,13.5c-0.18-0.15-0.407-0.233-0.642-0.233H11.229c-0.553,0-1,0.448-1,1v71.467c0,0.552,0.447,1,1,1h57.173   c0.553,0,1-0.448,1-1V27.129c0-0.296-0.131-0.577-0.358-0.767L53.676,13.5z M53.86,16.262l11.977,10.023H53.86V16.262z    M12.229,84.733V15.267H51.86v12.019c0,0.552,0.447,1,1,1h14.542v56.448H12.229z" /><path d="M19.002,27.684h23.734c0.553,0,1-0.448,1-1s-0.447-1-1-1H19.002c-0.553,0-1,0.448-1,1S18.449,27.684,19.002,27.684z" /><path d="M61.078,40.424H19.002c-0.553,0-1,0.448-1,1s0.447,1,1,1h42.076c0.553,0,1-0.448,1-1S61.631,40.424,61.078,40.424z" /><path d="M61.078,47.258H19.002c-0.553,0-1,0.448-1,1s0.447,1,1,1h42.076c0.553,0,1-0.448,1-1S61.631,47.258,61.078,47.258z" /><path d="M61.078,54.092H19.002c-0.553,0-1,0.448-1,1s0.447,1,1,1h42.076c0.553,0,1-0.448,1-1S61.631,54.092,61.078,54.092z" /><path d="M43.277,60.926H19.002c-0.553,0-1,0.448-1,1s0.447,1,1,1h24.275c0.553,0,1-0.448,1-1S43.83,60.926,43.277,60.926z" /><path d="M88.771,23.629h-8.932c-0.553,0-1,0.448-1,1v54.672c0,0.197,0.059,0.39,0.168,0.554l4.283,6.432   c0.182,0.273,0.485,0.439,0.813,0.446c0.007,0,0.013,0,0.02,0c0.32,0,0.622-0.154,0.811-0.414l4.648-6.432   c0.123-0.171,0.189-0.375,0.189-0.586V24.629C89.771,24.077,89.323,23.629,88.771,23.629z M80.839,77.766V32.775h6.932v44.991   H80.839z M87.771,25.629v5.146h-6.932v-5.146H87.771z M84.155,83.979l-2.806-4.214h5.852L84.155,83.979z" /></g></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Rédaction optimisée</span></h4>
                                <p className="font-bold"><strong>Rédiger pour le Web</strong> demande de tenir compte de ses cibles. Dans le cadre du <strong>référencement naturel SEO</strong>, il en existe deux.</p>
                                <br />
                                <p>La <strong>rédaction optimisée</strong> est une sous-discipline du <strong>référencement naturel</strong> qui demande de la précision car elle s’adresse à la fois aux <strong>robots de recherche</strong> et aux <strong>utilisateurs</strong>. Il est question de produire des <strong>pages web compréhensibles pour les robots</strong> et qui répondent aux <strong>interrogations des internautes</strong>.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#ffffff" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#ffffff" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#ffffff" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Suivi de performances</span></h4>
                                <p className="font-bold">Monitorer son <strong>positionnement dans la recherche</strong> est important, mais ne suffit pas pour évaluer l’efficacité de son <strong>référencement SEO</strong>.</p>
                                <br />
                                <p>Pour juger de l’efficacité de votre <strong>stratégie de référencement naturel</strong>, notre <Link to="/agence-web-agen/" className="text-bleu hover:text-white font-bold">agence web à Agen</Link> évalue le <strong>comportement des internautes sur votre site web</strong> : nombre de visiteurs généré et d’utilisateurs uniques, pages les plus vues, etc.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" fill="#ffffff" viewBox="0 0 512 640" ><g><g><g><g><path d="M361.333,490H150.667C132.103,490,117,474.897,117,456.333V55.667C117,37.103,132.103,22,150.667,22h210.667      C379.897,22,395,37.103,395,55.667v400.667C395,474.897,379.897,490,361.333,490z M150.667,30C136.514,30,125,41.514,125,55.667      v400.667C125,470.485,136.514,482,150.667,482h210.667C375.485,482,387,470.485,387,456.333V55.667      C387,41.514,375.485,30,361.333,30H150.667z" /></g><g><path d="M287.25,60h-62.5C214.962,60,207,52.038,207,42.25V26c0-2.209,1.791-4,4-4h90c2.209,0,4,1.791,4,4v16.25      C305,52.038,297.037,60,287.25,60z M215,30v12.25c0,5.376,4.374,9.75,9.75,9.75h62.5c5.376,0,9.75-4.374,9.75-9.75V30H215z" /></g><path d="M281,196L281,196c-5.522,0-10-4.477-10-10l0,0c0-5.523,4.478-10,10-10l0,0c5.522,0,10,4.477,10,10l0,0     C291,191.523,286.522,196,281,196z" /><rect x="211" y="386" width="20" height="20" /><rect x="241" y="386" width="20" height="20" /><rect x="271" y="386" width="20" height="20" /><g><path d="M206,215c-1.024,0-2.047-0.391-2.829-1.171c-1.562-1.563-1.562-4.095,0-5.657l75-75c1.561-1.562,4.096-1.562,5.656,0      c1.563,1.563,1.563,4.095,0,5.657l-75,75C208.047,214.609,207.024,215,206,215z" /></g><g><path d="M201,270c-1.024,0-2.047-0.391-2.829-1.172c-1.562-1.562-1.562-4.095,0-5.656l60-60c1.561-1.562,4.096-1.562,5.656,0      c1.563,1.563,1.563,4.095,0,5.657l-60,60C203.047,269.609,202.024,270,201,270z" /></g><g><path d="M401,180h-10c-2.209,0-4-1.791-4-4v-60c0-2.209,1.791-4,4-4h10c2.209,0,4,1.791,4,4v60C405,178.209,403.209,180,401,180      z M395,172h2v-52h-2V172z" /></g><g><path d="M121,130h-10c-2.209,0-4-1.791-4-4v-10c0-2.209,1.791-4,4-4h10c2.209,0,4,1.791,4,4v10C125,128.209,123.209,130,121,130      z M115,122h2v-2h-2V122z" /></g><g><path d="M121,170h-10c-2.209,0-4-1.791-4-4v-10c0-2.209,1.791-4,4-4h10c2.209,0,4,1.791,4,4v10C125,168.209,123.209,170,121,170      z M115,162h2v-2h-2V162z" /></g><g><path d="M341,440H121c-2.209,0-4-1.791-4-4s1.791-4,4-4h220c2.209,0,4,1.791,4,4S343.209,440,341,440z" /></g></g></g></g></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Appel mensuel</span></h4>
                                <p className="font-bold">Chaque mois, un <strong>consultant en référencement naturel de notre agence à Agen</strong> vous contacte pour vous faire part de l’avancée de votre stratégie.</p>
                                <br />
                                <p>En choisissant notre <strong>agence SEO à Agen</strong>, vous bénéficiez d’un suivi personnalisé par téléphone ou par mail, selon vos préférences. L’objectif est de vous permettre de <strong>comprendre votre prestation de référencement</strong> et son avancée, mais également de nous tenir informés de vos dernières actualités.</p>
                            </div>
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

                <section className="flex w-full flex-col mx-auto px-0 py-6 my-4">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10">
                        <h2 className="century text-3xl md:text-5xl text-black leading-none">Référencement Agen : optez pour le Naturel</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                    </section>
                </section>
                <section className="bloctextimg w-full md:w-10/12 mx-auto lg:block lg:mx-auto xl:w-full flex flex-col lg:flex-row justify-center">
                    <div className="w-full image lg:w-1/2 xl:w-2/5 lg:absolute flex justify-center lg:mt-48 xl:mt-24 pr-0 md:pr-16 lg:justify-center lg:items-center">
                        <img src={imac} alt="Référencement Agen" style={{ maxHeight: '450px' }} />
                    </div>
                    <div className="text century w-full text-justify mr-16 lg:w-3/5 xl:w-2/5 md:p-20 lg:pl-32 p-10 lg:py-10 text-black text-sm xl:text-md" style={{ backgroundColor: '#d3d3d352' }}>
                        <h4 className="century text-xl"><span className="font-bold">Être visible sur les moteurs de recherche demande un travail de référencement précis pour améliorer son classement et générer du trafic vers son site.</span></h4>
                        <br />
                        <p style={{ fontSize: '16px' }}>
                            Le <strong>référencement naturel SEO</strong> fait appel à de la régularité et de la persévérance pour <strong>obtenir le meilleur classement possible sur un outil comme Google</strong>. Il se distingue du <strong>référencement payant Google Adwords</strong> qui fait également partie des <strong>leviers du marketing digital (webmarketing)</strong>. Pour développer un <strong>SEO</strong> efficace, un <strong>consultant SEO</strong> tient compte des objectifs de développement de votre entreprise dès le cadrage de votre <strong>plan de référencement naturel</strong>.<br />
                            <br />
                            Nous maintenons à jour les <strong>pages web de votre site internet</strong> de façon régulière. Aussi, nous nous chargeons de la <strong>conception de votre interface jusqu’à la gestion de votre référencement naturel</strong>. C’est pourquoi, un <strong>expert SEO de notre agence SEO</strong> est chargé d'éliminer tous les facteurs bloquants de votre site.<br />
                            <br />
                            <h3 className="century text-xl md:text-2xl text-black leading-none"><span className="font-bold">Chaque page est construite pour générer des performances</span></h3>
                            <br />
                            Une fois ces éléments parasites supprimés, il procède aux différentes <strong>optimisations (balises, meta-données, images, etc.)</strong> et applique des <strong>techniques de référencement adaptées aux besoins de votre site internet</strong> (<strong>maillage interne</strong>, <strong>backlinks</strong>, <strong>balise meta</strong>, évaluation de la <strong>pertinence</strong> et de la <strong>qualité</strong>).<br />
                            <br />
                            <p>Ce travail doit vous permettre de positionner durablement les <strong>pages de votre site dans les premiers résultats naturels</strong>. Nous menons un <strong>audit SEO</strong> de façon régulière pour une maîtrise parfaite du <strong>travail effectué sur votre site</strong>. Tout ce travail vise à générer un <strong>trafic organique pertinent</strong> pour maximiser votre <strong>taux de conversion</strong> en ligne.</p>
                        </p>
                    </div>

                    <br />
                </section>
                <section className="w-full flex my-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence à Agen</span> ?</h3>
                        <h4>Linkweb soutient les professionnels souhaitant développer leur présence en ligne.</h4>
                    </div>
                    <div className="w-full mx-auto block lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" />
                    </div>
                </section>
                <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
                    <h2 className="text-bleu text-lg text-center century">Agence SEO Agen</h2>
                    <br />
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
                                    <img width="50px" height="50px" src={danhydro} alt="Avis My Business" />
                                    <svg width="100px" viewBox="0 0 100 125">
                                        <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                        <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                        <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                        <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                        <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z" />
                                    </svg>
                                </div>
                                <h4>Danhydro</h4>
                                <p>« Ravie de notre collaboration. Équipe très présente. Beau professionnalisme. Site évoluant régulièrement avec de belles retombées clientèle. »</p>
                            </div>
                        </article>
                        <article className="w-full md:w-1/2 mt-5 lg:w-1/2 text-left xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                            <div className="avis" style={{ minHeight: '340px' }}>
                                <div className="flex flex-row">
                                    <img width="50px" height="50px" src={charpentelacaze} alt="Avis Google" />
                                    <svg width="100px" viewBox="0 0 100 125">
                                        <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                        <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                        <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                        <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                        <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z" />
                                    </svg>
                                </div>
                                <h4>Charpente Lacaze & Noel</h4>
                                <p>« Satisfait du travail réalisé par l'entreprise <strong>Linkweb</strong>, équipe de professionnels sérieux et à l'écoute. Je la recommande pour la <strong>création de site internet</strong>. »</p>
                            </div>
                        </article>
                        <article className="w-full md:w-1/2 lg:w-1/2 mt-5 text-left xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                            <div className="avis" style={{ minHeight: '340px' }}>
                                <div className="flex flex-row">
                                    <img width="50px" height="50px" src={sarlbesset} alt="Avis My Business" />
                                    <svg width="100px" viewBox="0 0 100 125">
                                        <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                        <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                        <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                        <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                        <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z" />
                                    </svg>
                                </div>
                                <h4>ETS Besset & Fils</h4>
                                <p>« Agence très sérieuse, avec une équipe dynamique. Toujours à l'écoute de nos besoins. Du vrai professionnalisme ! Je recommande ! »</p>
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
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Agence SEO à Agen : notre agence répond à vos attentes</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Le référencement SEO est une discipline qui demande du temps et de la rigueur. De par sa technicité, il est parfois difficile d'assimiler toutes les subtilités dont il regorge. Nous tâchons de faire preuve de la plus grande transparence à cet égard.</h3>
                    </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="CE QUE LE RÉFÉRENCEMENT PEUT APPORTER À VOTRE ENTREPRISE À AGEN">
                                <p>Le référencement naturel est un véritable moteur pour <strong>développer sa visibilité en ligne</strong>. En effet, les moteurs de recherche sont utilisés quotidiennement par des millions d'utilisateurs. Par ailleurs, le <strong>référencement naturel</strong> est parfait pour les sociétés souhaitant étendre leur prospection en ligne. En effet, le référencement naturel vous permet d'<strong>être visible</strong> sur vos secteurs de prédilection, mais également d'étendre votre visibilité à d'autres secteurs. <br/><br/>De plus, il faut savoir que le référencment naturel est une discipline très particulière. Les utilisateurs que vous atteindrez grâce à votre <strong>bon positionnement</strong> ont un besoin. En effet, ils sont dans une démarche de recherche et votre objectif est de répondre à ce besoin de façon pertinente. Cela permet donc d'atteindre des prospects en recherche active d'un produit ou service, ce qui favorise les chances de conversion en ligne. <br/><br/>Pour espérer atteindre des objectifs intéressants pour votre société à Agen, il faut savoir que le <strong>référencement de votre site</strong> doit être pensé dès sa création. À ce niveau, nos consultants vous accompagnent pour vous proposer la meilleure solution en fonction de vos attentes et de vos besoins.</p>
                            </div>
                            <div className="w-full" label="UNE VEILLE POUR MONITORER LES NOUVEAUTÉS DU WEB MARKETING">
                                <p>Nos <strong>consultants en référencement</strong> effectuent une veille permanente pour se tenir informés des dernières nouveautés présentées dans le secteur du Web. <br /><br />C’est grâce à cette veille en <strong>communication digitale et marketing</strong> que nous adaptons nos méthodes de travail pour un rendu conforme à la fois avec vos besoins, mais aussi ceux des robots.</p>
                            </div>
                            <div label="ANALYSE DE L’ACTUALITÉ DES ALGORITHMES DE GOOGLE">
                                <p>En tant qu’<strong>agence spécialisée à Agen</strong>, nous menons une analyse de l’<strong>actualité des algorithmes</strong> pour comprendre quels sont les <strong>leviers</strong> à activer pour <strong>référencer les sites de nos clients</strong>. <br /><br /><strong>Google Panda</strong>, <strong>Google Penguin</strong>, <strong>Google Pigeon</strong> ou dernièrement <strong>BERT</strong> sont autant d’<strong>algorithmes</strong> que nous suivons attentivement. <br /><br />En raison de la confiance que vous accordez à notre agence, nous nous devons d’adopter la mise en place de <strong>procédés de veille</strong> et d’analyse pour maintenir notre connaissance de la discipline à jour et <strong>garantir des prestations de qualité</strong>.</p>
                            </div>
                            <div label="NOTRE AGENCE EST DATADOCKÉE POUR VOTRE FORMATION SEO À AGEN">
                                <p>Nous disposons d’une certification et faisons partie des établissements référencés auprès de l’<strong>organisme Datadock</strong>. <br /><br />Nous sommes donc en mesure de vous proposer un <strong>service de formation à la communication et au référencement</strong>. <br /><br />Les formations que nous proposons sont éligibles vis-à-vis du <strong>compte personnel de formation (CPF)</strong>.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="w-full bg-black flex flex-col md:flex-row">
                    <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                    </div>
                    <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Vous souhaitez développer votre référencement à Toulouse ?</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Linkweb conduit votre projet <strong>de référencement à Toulouse en Haute-Garonne</strong>, de la définition de votre stratégie jusqu'à sa mise en place. Notre équipe vous accompagne durant chaque étape de votre projet pour répondre à vos objectifs.</p>
                            <div className="max-w-xs ml-auto mr-auto md:mr-0 md:ml-0 block">
                                <RoundButton url="/referencement-toulouse/" color="darkgrey" text="RÉFÉRENCEMENT À TOULOUSE" />
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
query lastsThreePostsRefAgen {
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
export default ReferencementAgen;
