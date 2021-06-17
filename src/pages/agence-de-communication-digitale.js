import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
import RoundButtonPages from "../components/roundButtonPages";
import RoundButtonPagesMail from "../components/roundButtonPagesMail";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import SimpleMap from "../components/simpleMap";
import Accordion from '../components/accordion';
import Partenaires from '../components/partenaires';
import Carousel from '../components/carousel';

import "../scss/home1.scss";
import "../scss/global.scss";


// import Bg from "../images/agence-web-bg.jpg";
import Bg from "../images/agence-communication-web-toulouse.jpg";
// import bgDev from '../images/bg-dev.jpg';
import mac from "../images/agence-web-linkweb-presentation.jpg";
import accompagnement from "../images/agence-de-communication-web-toulouse.jpg";
import upcp from "../images/un-pourcent-paysages.png";
import aquideconta from "../images/aquideconta.png";
import ludikstyl from "../images/ludikstyl.png";
import scroll from "../images/motiontest.svg";



class AgencedeCommunicationDigitale extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence de communication digitale - Linkweb"
                    description="Linkweb est une agence de communication web à Toulouse qui s'adresse aux professionnels exigeants."
                    url="https://linkweb.fr/agence-de-communication-digitale/"
                    nom="Agence de Communication digitale"
                    slug="agence-de-communication-digitale/"
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
                <section className="flex items-center w-full mx-auto pb-0 mt-40 mb-24 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + Bg + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                            <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Agence de communication digitale</h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Création et développement de votre stratégie digitale.</h2>
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
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Vous êtes porteur d’un projet et souhaitez développer <br /><span className="text-bleu">votre stratégie de communication ?</span></h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Miser sur la communication digitale et le <Link to="/agence-web-marketing-toulouse/" className="text-bleu hover:text-black font-bold">webmarketing</Link> est important pour une entreprise et son identité en tant que marque. Les solutions sont nombreuses en vue de construire votre projet digital adapté.</h3>
                    </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Linkweb" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10  flex flex-col">
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                    <p className="text-center">1</p>
                                </div>
                                <div className="w-full px-6 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>RÉPONDRE À VOS <span className="text-bleu">VOS EXIGENCES</span>
                                    </h3>
                                    <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" >Dans le cadre de la <strong></strong>création ou du développement de votre structure, vous avez besoin de créer un outil répondant à des besoins spécifiques : nous élaborons un <strong>webdesign</strong> unique et original dans le respect de votre identité visuelle et de votre charte de <strong>création graphique</strong>.<br /> <br />L’ergonomie d’un <strong>site professionnel</strong> doit être soignée selon les principes de l’UI/UX et du <strong>responsive design</strong>.<br /> <br />Les spécialistes de notre <strong><a className="text-bleu font-bold" href="/">agence web à Toulouse</a></strong> développent des fonctionnalités pour une <strong><Link to="/comment-notre-agence-de-conception-de-site-internet-realise-votre-projet/" className="text-bleu hover:text-black font-bold">refonte ou création de site internet sur mesure</Link></strong>, tant pour l’administrateur que pour les utilisateurs.</p>
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">2</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>METTRE EN VALEUR <span className="text-bleu">VOTRE OFFRE</span>
                                    </h3>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Vos services, vos prestations, vos produits seront au cœur de l’élaboration de votre projet, auttant sur la partie graphique et ergonomique que fonctionnelle.<br /> L’élaboration d’un cahier des charges détaillé nous permettra de <strong>créer un site internet</strong> qui vous correspondra.</p>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify" >Nous prenons en compte votre positionnement, votre charte graphique ainsi que votre <strong>image de marque</strong>, tout en étudiant votre concurrence pour une <strong>création</strong> ou une refonte qui colle à votre entreprise, que ce soit à Agen, Toulouse, Tonneins, Villeneuve-sur-Lot ou Marmande.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">3</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>CONNAÎTRE ET ATTEINDRE <span className="text-bleu">VOS CIBLES</span>
                                    </h3>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">L’analyse de votre clientèle sera le fil rouge de l’élaboration de votre projet digital.<br /><br /> Votre outil doit répondre aux attentes de vos utilisateurs cibles, tant sur l’aspect visuel comme sur la navigation.<br /> C’est le rôle de notre <strong><Link to="/web-agency-toulouse/" className="text-bleu hover:text-black font-bold">agence de communication digitale</Link></strong> de donner lieu à un <strong>site responsive</strong>.<br /><br /> Les informations communiquées seront intégrées dans le but d’informer et de donner envie à vos futurs clients potentiels de travailler avec vous grâce à une <strong>stratégie de communication créative</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>

                        </div>
                    </section>
                </section>
                <section className="bg-black sidetitle py-10">
                    <section className="w-full lg:w-2/3 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
                        <h2 className="century text-center lg:text-left text-white text-3xl md:text-5xl leading-tight">Que proposons-nous pour concevoir <span className="text-bleu">votre stratégie de communication</span> ?</h2>
                        <br />
                        <div className="line-title my-4 ">
                            <br />
                            <hr className="w-1/2 border-bleu lg:w-1/12" />
                            <br />
                            <h3 /*data-aos='fade-left'*/ className="text-xl text-white century pb-0">Linkweb, agence de communication digitale, met son savoir-faire à profit pour vous proposer un service performant.</h3>
                        </div>
                    </section>
                    <section className="flex justify-center flex-col items-center">
                        <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 text-white century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><g><path fill="#ffffff" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   " /><path fill="#ffffff" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z" /><g><path fill="#ffffff" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z" /><rect x="72.041" y="56.851" width="0.312" height="5.159" /></g><path fill="#ffffff" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z" /><path fill="#ffffff" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z" /></g></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Création sites internet personnalisé</span></h4>
                                <p>Linkweb fait partie des <strong>agences</strong> qui proposent des <Link className="text-bleu hover:text-white font-bold" to="/comment-choisir-son-agence-de-communication-web/">prestations complètes</Link> de l’élaboration à la <strong>gestion de votre site</strong>.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#ffffff" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#ffffff" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#ffffff" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>
                                <h4 className="font-bold century text-bleu -mt-4"><span className="font-bold">Référencement de site internet</span></h4>
                                <p>Devenez <strong>visible sur Google</strong> et rencontrez y vos <strong>nouveaux clients</strong> grâce à une <strong>stratégie SEO (Search Engine Optimization ou optimisation pour les moteurs de recherche)</strong> dédiée.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" fill="#ffffff" className="lg:mx-0 mx-auto block" viewBox="0 0 26.458333 33.0729175"><g transform="translate(0,-270.54165)"><path d="m 5.8714289,272.12915 c -1.8514508,0 -3.3578869,1.50883 -3.3578869,3.36322 0,1.85439 1.5064361,3.36271 3.3578869,3.36271 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36271 0,-0.93619 -0.3850002,-1.78375 -1.0034311,-2.39407 l -2.1329844,3.56079 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869546,-1.24151 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35362 C 7.272958,272.36508 6.5998223,272.12917 5.8714289,272.12917 Z m 5.9146431,2.06968 a 0.25889664,0.25930793 0 0 0 0.02674,0.51792 h 11.867626 a 0.25855123,0.25896196 0 1 0 0,-0.51792 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02674,0 z m 0.02674,2.06866 a 0.25836408,0.25877452 0 1 0 0,0.51741 h 5.668955 a 0.25836408,0.25877452 0 1 0 0,-0.51741 z m -5.9413818,4.14035 c -1.8514508,0 -3.3578869,1.50884 -3.3578869,3.36323 0,1.85439 1.5064361,3.36271 3.3578869,3.36271 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36271 0,-0.9362 -0.3850002,-1.78375 -1.0034311,-2.39407 l -2.1329844,3.56079 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869546,-1.24151 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35362 c -0.5508481,-0.39625 -1.2239838,-0.63216 -1.9523772,-0.63216 z m 5.9156518,2.06969 a 0.25832484,0.25873522 0 0 0 -10e-4,5.1e-4 0.2587086,0.25911959 0 0 0 0.02674,0.51741 h 11.867629 a 0.25836408,0.25877452 0 1 0 0,-0.51741 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02573,-5.1e-4 z m 0.02573,2.06866 a 0.25835919,0.25876963 0 0 0 0,0.51741 h 5.668957 a 0.25835919,0.25876963 0 0 0 0,-0.51741 z m -5.9413807,4.14035 c -1.8514507,0 -3.3578869,1.50884 -3.3578869,3.36322 0,1.8544 1.5064362,3.36272 3.3578869,3.36272 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36272 0,-0.93618 -0.3850002,-1.78374 -1.0034311,-2.39407 l -2.1329844,3.5608 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869543,-1.2415 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35363 C 7.2729607,288.9225 6.599825,288.68658 5.8714316,288.68658 Z m 5.9146427,2.07018 a 0.2587086,0.25911959 0 0 0 0.02674,0.51742 H 23.68044 a 0.25836408,0.25877452 0 1 0 0,-0.51742 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02674,0 z m 0.02674,2.06817 a 0.25836408,0.25877452 0 1 0 0,0.51741 h 5.668956 a 0.25836408,0.25877452 0 1 0 0,-0.51741 z" /></g></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Campagne Google AdWords</span></h4>
                                <p>Nous configurons et gérons vos <strong>campagnes AdWords</strong>. Nous définissons une stratégie opérationnelle et des annonces de qualité pour générer un <strong>retour sur investissement</strong>.</p>
                            </div>
                        </div>
                        <div className="w-full text-white flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                            <div className="w-full svgtransform -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><path fill="#ffffff" d="M66.598,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44c-0.556,0.081-1.017,0.47-1.191,1.004  c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014c-0.095,0.554,0.133,1.113,0.587,1.443  c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C67.673,71.235,67.16,70.916,66.598,70.916L66.598,70.916z M50,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169L50,82.719l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C51.074,71.235,50.562,70.916,50,70.916L50,70.916z M33.402,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423  l2.707,1.423c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014  l2.19-2.135c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C34.476,71.235,33.963,70.916,33.402,70.916L33.402,70.916z" /><path fill="#ffffff" d="M72.131,50.738h-25.82v-1.475h25.82V50.738z M50,52.951h-3.689v1.475H50V52.951z M72.131,52.951H53.689v1.475  h18.443V52.951z M61.066,56.639H46.311v1.475h14.754V56.639z M72.131,56.639h-7.377v1.475h7.377V56.639z M57.377,60.328H46.311  v1.475h11.066V60.328z M61.066,27.131H46.311v1.475h14.754V27.131z M72.131,27.131h-7.377v1.475h7.377V27.131z M72.131,30.82h-25.82  v1.475h25.82V30.82z M57.377,34.508H46.311v1.475h11.066V34.508z M72.131,34.508H61.066v1.475h11.066V34.508z M64.754,38.197H46.311  v1.475h18.443V38.197z" /><path fill="#ffffff" d="M75.82,12.377h-4.338c-0.741-1.139-1.62-2.329-2.458-3.404l-0.257-0.33l-0.416,0.052  c-2.313,0.288-8.743,0.858-10.692,0.051c-0.341-0.141-0.869-0.895-1.294-1.501C55.592,6.141,54.793,5,53.689,5h-7.377  c-1.104,0-1.904,1.141-2.677,2.244c-0.425,0.606-0.953,1.36-1.294,1.501c-1.947,0.807-8.379,0.237-10.692-0.051l-0.416-0.052  l-0.257,0.33c-0.838,1.075-1.717,2.265-2.458,3.404H24.18c-2.441,0-4.426,1.986-4.426,4.426v73.77c0,2.441,1.985,4.426,4.426,4.426  H75.82c2.441,0,4.426-1.985,4.426-4.426v-73.77C80.246,14.363,78.26,12.377,75.82,12.377z M31.886,10.208  c1.891,0.218,8.608,0.899,11.02-0.1c0.737-0.305,1.32-1.137,1.937-2.017c0.396-0.564,1.132-1.615,1.469-1.615h7.377  c0.337,0,1.073,1.051,1.469,1.615c0.617,0.88,1.2,1.712,1.937,2.017c2.412,0.999,9.129,0.318,11.02,0.1  c1.698,2.219,3.397,4.834,3.684,5.857H28.201C28.489,15.043,30.188,12.427,31.886,10.208z M78.77,90.574  c0,1.627-1.324,2.951-2.951,2.951H24.18c-1.627,0-2.951-1.324-2.951-2.951v-73.77c0-1.627,1.324-2.951,2.951-2.951h3.449  c-0.727,1.324-1.12,2.457-0.82,3.071c0.192,0.392,0.578,0.618,1.059,0.618h44.262c0.482,0,0.867-0.225,1.059-0.618  c0.3-0.614-0.093-1.746-0.82-3.071h3.449c1.627,0,2.951,1.324,2.951,2.951V90.574z M50,13.115c-1.424,0-2.582-1.158-2.582-2.582  S48.576,7.951,50,7.951s2.582,1.158,2.582,2.582S51.424,13.115,50,13.115z M50,9.426c-0.61,0-1.107,0.496-1.107,1.107  c0,0.61,0.496,1.107,1.107,1.107s1.107-0.496,1.107-1.107C51.107,9.923,50.61,9.426,50,9.426z" /><path fill="#ffffff" d="M38.934,50v11.066H27.869V50H38.934 M38.934,48.525H27.869c-0.815,0-1.475,0.661-1.475,1.475v11.066  c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475V50C40.41,49.185,39.749,48.525,38.934,48.525  L38.934,48.525z M33.483,38.197c-0.008,0-0.016,0-0.024,0c-0.302,0-0.588-0.12-0.792-0.343l-3.77-4.111  c-0.413-0.451-0.382-1.147,0.069-1.559c0.451-0.412,1.151-0.379,1.563,0.071l2.989,3.267l7.698-7.698  c0.432-0.432,1.132-0.432,1.565,0c0.432,0.432,0.432,1.133,0,1.565l-8.516,8.5C34.058,38.097,33.776,38.197,33.483,38.197z   M38.934,34.271v4.664h-5.451H33.45h-5.581V27.869h11.066v1.194l1.45-1.45c-0.122-0.692-0.722-1.22-1.45-1.22H27.869  c-0.815,0-1.475,0.661-1.475,1.475v11.066c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475v-6.136  L38.934,34.271z" /></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Appel mensuel et suivi régulier</span></h4>
                                <p>Notre équipe de spécialistes de <strong>communication digitale</strong> réalise un suivi des <strong>performances de votre site internet</strong> pour vous proposer des prestations pertinentes.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" fill="#ffffff" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path d="m 74.811558,1040.3426 a 1.0140882,0.98630477 0 0 0 0.9055,-1.1789 l -5.6078,-26.5322 20.5765,-18.27997 a 1.0140882,0.98630477 0 0 0 -0.5696,-1.70442 l -27.7031,-3.02536 -11.493,-24.67154 a 1.0140882,0.98630477 0 0 0 -1.8401,0 l -11.4931,24.67154 -27.70307,3.02536 a 1.0140882,0.98630477 0 0 0 -0.5695396,1.70442 l 20.5765096,18.27997 -5.6078,26.5322 a 1.0140882,0.98630477 0 0 0 1.4896,1.051 l 24.2274,-13.3939 24.2275,13.3939 a 1.0140882,0.98630477 0 0 0 0.5841,0.1279 z m -1.5334,-2.8975 -22.7816,-12.5986 a 1.0140882,0.98630477 0 0 0 -0.9931,0 l -22.7817,12.5986 5.2719,-24.9699 a 1.0140882,0.98630477 0 0 0 -0.3066,-0.9374 l -19.34985,-17.17206 26.03825,-2.84071 a 1.0140882,0.98630477 0 0 0 0.8032,-0.56814 l 10.8213,-23.20859 10.8213,23.20859 a 1.0140882,0.98630477 0 0 0 0.8032,0.56814 l 26.0383,2.84071 -19.3498,17.17206 a 1.0140882,0.98630477 0 0 0 -0.3067,0.9374 l 5.2719,24.9699 z" fill="#ffffff" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible" /></g></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Acquisition de popularité</span></h4>
                                <p>Nous travaillons à la mise en place d’un éco-système autour de votre site pour développer sa <strong>popularité vis-à-vis des outils de recherche</strong>.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125" fill="#ffffff"><g><g><g><path d="M82.3,81.7c-0.8,0-1.5-0.7-1.5-1.5c0-17-13.8-30.9-30.9-30.9c-17,0-30.9,13.8-30.9,30.9     c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5c0-18.6,15.1-33.8,33.8-33.8s33.8,15.1,33.8,33.8C83.8,81.1,83.1,81.7,82.3,81.7z" /></g><g><path d="M1.5,67.4c-0.1,0-0.3,0-0.4-0.1c-0.8-0.2-1.2-1-1-1.8c1-3.5,2.5-6.9,4.2-10.2c1-1.8,0.6-4.1-0.8-5.5     c-3-3-3-7.8,0-10.7l5.4-5.4c1.4-1.4,3.3-2.2,5.4-2.2c2,0,3.9,0.8,5.3,2.2c0,0,0,0,0,0c1.5,1.5,3.7,1.8,5.5,0.8     c3.2-1.8,6.7-3.2,10.2-4.2c1.9-0.6,3.3-2.4,3.3-4.5c0-4.2,3.4-7.6,7.6-7.6h7.6c4.2,0,7.6,3.4,7.6,7.6c0,2.1,1.4,3.9,3.3,4.5     c3.5,1,6.9,2.5,10.2,4.2c1.8,1,4.1,0.6,5.5-0.8c0,0,0,0,0,0c1.4-1.4,3.3-2.2,5.3-2.2c2,0,3.9,0.8,5.4,2.2l5.4,5.4     c1.4,1.4,2.2,3.3,2.2,5.4s-0.8,3.9-2.2,5.4c-1.5,1.5-1.8,3.7-0.8,5.5c1.8,3.2,3.2,6.6,4.2,10.2c0.2,0.8-0.2,1.6-1,1.8     c-0.8,0.2-1.6-0.2-1.8-1c-1-3.3-2.3-6.6-4-9.6c-1.6-2.9-1.1-6.6,1.3-9c1.8-1.8,1.8-4.8,0-6.6l-5.4-5.4c-0.9-0.9-2.1-1.4-3.3-1.4     c-1.3,0-2.4,0.5-3.3,1.4c0,0,0,0,0,0c-2.4,2.3-6,2.9-8.9,1.3c-3.1-1.7-6.3-3-9.6-4c-3.2-0.9-5.4-3.9-5.4-7.3     c0-2.6-2.1-4.7-4.7-4.7h-7.6c-2.6,0-4.7,2.1-4.7,4.7c0,3.3-2.2,6.3-5.4,7.3c-3.3,1-6.5,2.3-9.6,4c-2.9,1.6-6.6,1.1-8.9-1.3     c0,0,0,0,0,0c-0.9-0.9-2.1-1.4-3.3-1.4c-1.3,0-2.4,0.5-3.3,1.4l-5.4,5.4c-1.8,1.8-1.8,4.8,0,6.6c2.4,2.4,2.9,6.1,1.3,9     c-1.7,3.1-3,6.3-4,9.6C2.7,67,2.1,67.4,1.5,67.4z" /></g></g><g><path d="M98.5,81.7H1.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h97.1c0.8,0,1.5,0.7,1.5,1.5S99.3,81.7,98.5,81.7z    " /></g></g></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Maintenance technique</span></h4>
                                <p>Notre service technique est à pied d’oeuvre pour intervenir en cas d’activité malveillante ou de dysfonctionnement sur <strong>votre site internet</strong>.</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                    <h2 /*data-aos='fade-right'*/ className="century text-center text-black text-3xl md:text-5xl leading-none">
                        Démarquez-vous de vos concurrents pour atteindre de <span className="text-bleu">nouveaux clients</span> !
                        </h2>
                    <hr className="blue border-bleu"></hr>
                </section>
                <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
                    <div className="w-full xl:w-1/3 one px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE SOUHAITE DÉCOUVRIR LA COMMUNICATION DIGITALE
                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    <strong>Internet</strong> regorge d’opportunités pour les entreprises. De plus, le <strong>Web</strong> est un excellent terrain de jeu pour les professionnels souhaitant poursuivre des <strong>objectifs de communication : visibilité, notoriété, e-réputation, image de marque</strong>, etc. De nos jours, le développement d’une entreprise passe nécessairement par cette voie.
                </div>

                            </section>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 two px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE VEUX ÊTRE ACCOMPAGNÉ PAR DES PROFESSIONNELS
                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    Contacter une <strong><Link to="/quelle-agence-web-choisir/" className="font-bold text-bleu hover:text-black">agence de communication spécialisée</Link> dans les problématiques du digital</strong> est pertinent en vue d’être accompagné au cours de la construction de son <strong>projet</strong>. Les <strong><Link to="/pourquoi-travailler-dans-une-agence-web/" className="text-bleu hover:text-black font-bold">professionnels de Linkweb</Link></strong> sont formés et compétents pour répondre à votre problématique et atteindre des objectifs qui vous correspondent.
                </div>
                                <br />
                                <button
                                    className="font-light mx-auto roundedButton bg-bleu text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = '/contact-agence-web-toulouse/';
                                    }}
                                >PRENDRE CONTACT</button>
                            </section>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 three px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE SOUHAITE LE LANCEMENT D’UN PROJET SUR-MESURE
                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    En faisant appel à nous, vous faites le choix d’un projet qui vous ressemble, mais également d’un <strong><Link to="/agence-marketing-toulouse/" className="text-bleu hover:text-black font-bold">conseil en marketing</Link></strong> pour déterminer vos facteurs de succès. De plus, nous disposons de tous les outils nécessaires à l’élaboration d’un plan d’actions efficaces en fonction de vos besoins.
                </div>
                            </section>

                        </div>
                    </div>
                </section>

                <section className="flex w-full flex-col mx-auto px-0 py-6 my-4">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10">
                        <h2 className="century text-3xl md:text-5xl text-black leading-tight">Linkweb, avant tout une équipe de <br />spécialistes du <span className="text-bleu">Marketing</span> et de la <span className="text-bleu">Communication en ligne</span></h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                    </section>
                </section>
                <section className="bloctextimg w-full md:w-10/12 mx-auto lg:block lg:mx-auto xl:w-full flex flex-col lg:flex-row justify-center">
                    <div className="w-full image lg:w-1/2 xl:w-2/5 lg:absolute flex justify-center lg:mt-64 xl:mt-24 pr-0 md:pr-16 lg:justify-center lg:items-center">
                        <img src={accompagnement} alt="Agence de communication digitale" style={{ maxHeight: '450px' }} />
                    </div>
                    <div className="text century w-full text-justify mr-16 lg:w-3/5 xl:w-2/5 md:p-20 lg:pl-32 p-10 lg:py-10 text-black text-sm xl:text-md" style={{ backgroundColor: '#d3d3d352' }}>
                        <h4 className="century text-xl"><span className="font-bold">Proposer des solutions fonctionnelles et performantes fait partie de nos priorités. Nos consultants en communication veillent à déceler les meilleures opportunités pour répondre à vos attentes.</span></h4>
                        <br />
                        <p style={{ fontSize: '16px' }}>
                            En tant qu’<strong><Link to="/agence-web-cahors/" className="text-bleu hover:text-black font-bold">agence de conseil en communication</Link></strong>, nous sommes particulièrement exigeants quant à la remise en question permanentes des techniques employées sur les <strong>sites internet</strong> que nous créons. Nos <strong>spécialistes du marketing digital et de la communication internet</strong> sont à l’affut des dernières tendances (<strong>web design</strong>, techniques d’optimisation, émergence d’outils professionnels, etc.) pour rester à la pointe en matière de <strong>référencement naturel</strong> et de <strong><Link to="/agence-creation-site-web-toulouse/" className="text-bleu hover:text-black font-bold">développement web</Link></strong>.<br />
                            <br />
                                Depuis plus de 10 ans et grâce aux centaines de projets traités par l’<strong>agence</strong>, Linkweb propose des solutions uniques et parfaitement adaptées aux besoins de ses <strong>clients</strong>. Nous tenons compte de l’ensemble des paramètres et mettons nos différents savoir-faire à contribution en matière de <strong>développement web</strong>, comme de <strong>référencement naturel</strong>.<br />
                            <br />
                            <strong>Internet</strong> est un vaste terrain de jeu au potentiel infini. Il peut-être une source de développement particulièrement importante pour des entreprises de tous secteurs et présentes dans toute la <strong>France</strong>. La mise en application d’une <strong>solution digitale</strong> est pertinente pour faire connaître sa marque et étendre sa <strong>visibilité</strong>.<br />
                        </p>
                    </div>

                    <br />
                </section>
                <section className="w-full flex my-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12 text-2xl">
                        <h2>Vous souhaitez travailler avec <span className="font-bold">notre agence</span> ?</h2>
                        <h4>Linkweb soutient les professionnels souhaitant développer leur présence en ligne.</h4>
                    </div>
                    <div className="w-full mx-auto flex flex-col items-center justify-center lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <button
                            className="font-light mx-auto roundedButton bg-darkgrey text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4"
                            type="button"
                            formtarget="_blank"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/contact-agence-web-toulouse/';
                            }}
                        >CONTACTEZ-NOUS</button>
                        {/* <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" /> */}
                    </div>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Ils sont satisfaits par nos réalisations</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                    </div>
                </section>
                <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-center justify-center century text-center mt-3 px-6 mb-12">
                    <div className="flex flex-row flex-wrap">
                        <article className="w-full md:w-1/2 mt-5 lg:w-1/2 text-left xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                            <div className="avis" style={{ minHeight: '340px' }}>
                                <div className="flex flex-row">
                                    <img width="50px" height="50px" src={upcp} alt="Avis Google" />
                                    <svg width="100px" viewBox="0 0 100 125">
                                        <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                        <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                        <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                        <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                        <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z" />
                                    </svg>
                                </div>
                                <h4>Un Pour Cent Paysages</h4>
                                <p>« Très bonne collaboration depuis maintenant 4 ans pour le suivi du site de UN POUR CENT PAYSAGES.
                                            Un <strong>suivi personnalisé</strong> avec un interlocuteur identifié, fait avec professionnalisme et réactivité.
                                            Merci à l'équipe ! »</p>
                            </div>
                        </article>
                        <article className="w-full md:w-1/2 lg:w-1/2 text-left mt-5 xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                            <div className="avis" style={{ minHeight: '340px' }}>
                                <div className="flex flex-row">
                                    <img width="50px" height="50px" src={aquideconta} alt="Avis My Business" />
                                    <svg width="100px" viewBox="0 0 100 125">
                                        <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                        <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                        <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                        <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                        <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z" />
                                    </svg>
                                </div>
                                <h4>Aquideconta</h4>
                                <p>« Plus d'un an que <strong>Linkweb</strong> se charge du <strong>référencement de notre site</strong> Aquideconta.
                                            Ce travail est réalisé de manière très professionnelle.
                                            Le suivi est ponctuel, ils sont à l'écoute de nos demandes.
                                            BRAVO. »</p>
                            </div>
                        </article>
                        <article className="w-full md:w-1/2 lg:w-1/2 mt-5 text-left xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                            <div className="avis" style={{ minHeight: '340px' }}>
                                <div className="flex flex-row">
                                    <img width="50px" height="50px" src={ludikstyl} alt="Avis My Business" />
                                    <svg width="100px" viewBox="0 0 100 125">
                                        <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                        <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                        <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                        <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                        <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z" />
                                    </svg>
                                </div>
                                <h4>LudikStyl</h4>
                                <p>« Une équipe à l'écoute et très réactive. En collaboration avec <strong>Linkweb</strong> depuis bientôt 8 ans.
                                            Je recommande fortement pour leur dynamisme et leur gentillesse. Que cela dure encore longtemps 😉. »</p>
                                <br />
                            </div>
                        </article>
                    </div>
                </section>
                <section className="max-w-6xl mx-auto flex align-center justify-center text-center mb-24">
                    <div className="w-full flex flex-col md:flex-row justify-center">
                        <button
                            className="century text-sm hover:text-bleu"
                            type="button"
                            formtarget="_blank"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,', '_blank')
                            }}
                        >Voir plus de témoignages</button>
                            &nbsp;
                            |&nbsp;
                            <button
                            className="century text-sm hover:text-bleu"
                            type="button"
                            target="_blank"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,', '_blank')
                            }}
                        >Vous travaillez déjà avec nous ? Donnez nous votre avis !</button>

                    </div>
                </section>
                <section className="flex w-full flex-col mx-auto px-0 py-6 my-4 lg:my-0">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10 lg:mb-2">
                        <h2 className="century text-3xl md:text-5xl text-black leading-none">Qu’est-ce que la communication digitale peut vous apporter ?</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                        <br />
                        <h3 className="text-black text-xl text-center century">Vous souhaitez faire connaître votre société, développer votre votre identité de marque pour atteindre développer votre société ? <br />Le lancement d’une stratégie digitale est la première étape.</h3>
                    </section>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="PROFITER DU POTENTIEL DE VISIBILITÉ DES SUPPORTS DE COMMUNICATION DIGITAUX">
                                <p>Lorsque l’on se lance dans la mise en place d’une <strong>stratégie digitale</strong>, il est important de bien choisir les axes à développer en vue d’atteindre le maximum d’utilisateurs et donc de potentiels prospects. Ainsi, les différents <strong>supports digitaux</strong> connus (<strong>réseaux sociaux</strong>, <strong>sites internet</strong>, <strong>applications mobiles</strong>, etc.) présentent des spécificités.</p>
                                <br />
                                <p>En fonction de vos ambitions et de vos besoins, la mobilisation d’un support sera plus pertinente qu’un autre. Toutefois, il faut garder à l’esprit que les <strong>réseaux sociaux</strong> comme les <strong>moteurs de recherche</strong> peuvent atteindre des milliards d’utilisateurs à travers le monde, ce qui en fait une véritable mine d’or en vue de <strong>communiquer</strong> et <strong>faire connaître</strong> sa société au plus grand nombre.</p>
                                <br />
                                <p> Nous définissons votre solution en ligne ainsi que le contenu à promouvoir pour développer votre <strong>image de marque</strong>. Nos sites sont adaptés pour ordinateur comme pour <strong>mobile</strong>.</p>
                            </div>
                            <div label="ORIENTER VOTRE COMMUNICATION AUPRÈS DE VOTRE PUBLIC CIBLE PRINCIPAL">
                                <p>La force de la <strong>communication</strong> se concentre également en termes de ciblage. Que ce soit via les <strong>réseaux sociaux</strong> ou le <strong>référencement naturel</strong>, les solutions pour vous adresser à votre cible principale ne manquent pas. Aussi, les différents outils peuvent être complémentaires. Il s’agit là d’un facteur dont il faudra tenir compte lors de l’élaboration de votre stratégie.</p>
                                <br />
                                <p>Des solutions telles que le lancement de <strong>campagnes de Google AdWords</strong>, <strong>Facebook Ads</strong> ou bien le <strong>référencement local</strong> vous permettent d’atteindre un public ciblé en fonction d’un critère géographique, mais pas seulement. Il est important de savoir où se trouve son public cible afin de <strong>véhiculer le bon message, au bon endroit et de la manière la plus efficace</strong>.</p>
                                <br />
                                <p>En plus de contribuer à la <strong>construction de votre identité de marque</strong>, Linkweb détermine les meilleures opportunités en fonction de votre champ de prospection.</p>
                            </div>
                            <div label="DES BÉNÉFICES EN TERMES DE RÉPUTATION, MAIS AUSSI POUR BOOSTER VOTRE ACTIVITÉ">
                                <p>Mettre en avant votre <strong>profil d’expert</strong> dans votre domaine de compétences grâce à la <strong>création de contenu</strong> (media vidéo, illustration, texte, etc.) pertinent pour les utilisateurs vous sera grandement bénéfique pour peaufiner votre <strong>profil d'expert</strong>. Par ailleurs, il s’agit également d’un moyen pour promouvoir votre <strong>identité visuelle</strong> et ainsi <strong>développer la notoriété de votre société</strong>.</p>
                                <br />
                                <p>Ceci vous sera largement bénéfique aux yeux des utilisateurs. Toutefois, il est évident qu’il ne faudra jamais perdre de vue la finalité de votre démarche. <strong>Linkweb</strong> fait partie des <strong>agences</strong> qui vous permettront d’assurer la promotion de votre société par la <strong>création de contenus de qualité</strong>, tout en vous permettant de répondre à vos objectifs commerciaux de manière à <strong>augmenter votre chiffre d’affaires</strong>.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="flex w-full flex-col mx-auto px-0 py-6 my-4 lg:my-0">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10 lg:mb-2">
                        <h2 className="century text-3xl md:text-5xl text-black leading-none">Où nous trouver ?</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                        <br />
                        <h3 className="text-black text-xl text-center century">Notre relation est basée sur la confiance et la collaboration.</h3>
                    </section>
                </section>
                <section className="w-full flex flex-col md:flex-row mt-10 bg-bleu">
                    <div className="w-full md:w-1/2 bg-bleu flex flex-col justify-center items-center text-center" style={{ minHeight: '700px' }}>
                        <h2 className="text-2xl text-white century pb-6" ><span className="text-black">/</span>L’AGENCE LINKWEB À AGEN</h2>
                        <p className="text-xl text-white century">10 rue Albert Ferrasse <br />
                                    47550 BOÉ</p>
                        <button
                            className="font-light mx-auto roundedButton bg-black hover:bg-bleu text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4"
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://www.google.com/maps/place/Linkweb/@44.1811928,0.6268053,17z/data=!3m1!4b1!4m5!3m4!1s0x12abb323e4e18603:0xb2f1e6fffa7f9cd4!8m2!3d44.181189!4d0.628994', '_blank')
                            }}
                        >Plus d'informations pratiques</button>
                        {/* <a href="https://www.google.com/maps/place/Linkweb/@44.1811928,0.6268053,17z/data=!3m1!4b1!4m5!3m4!1s0x12abb323e4e18603:0xb2f1e6fffa7f9cd4!8m2!3d44.181189!4d0.628994" target="_blank" rel="noopener noreferrer"><RoundButton color="black" text="Plus d'informations pratiques" /></a> */}
                    </div>
                    <div className="w-full md:w-1/2 bg-black flex flex-col justify-center items-center h-auto text-white text-center" style={{ minHeight: '700px' }}>
                        <h2 className="text-2xl century pb-6" ><span className="text-bleu">/</span>L’AGENCE LINKWEB À TOULOUSE</h2>
                        <p className="text-xl century">44 Rue de Bayard <br />
                                    31000 TOULOUSE</p>
                        <button
                            className="font-light mx-auto roundedButton bg-bleu text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4"
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://www.google.com/maps/place/Linkweb/@43.6099559,1.4478881,17z/data=!3m1!4b1!4m5!3m4!1s0x12aebb43d4c8a751:0xb4abc0044173017!8m2!3d43.6099559!4d1.4500768', '_blank')
                            }}
                        >Plus d'informations pratiques</button>
                        {/* <a href="https://www.google.com/maps/place/Linkweb/@43.6099559,1.4478881,17z/data=!3m1!4b1!4m5!3m4!1s0x12aebb43d4c8a751:0xb4abc0044173017!8m2!3d43.6099559!4d1.4500768" target="_blank" rel="noopener noreferrer"><RoundButton text="Plus d'informations pratiques" /></a>  */}
                    </div>
                </section>

                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsAgenceComDigitale {
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
export default AgencedeCommunicationDigitale;




