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
import Bg from "../images/agence-community-management.jpg";
import imac from "../images/gestion-reseaux-sociaux.jpg";
// import bgDev from '../images/bg-dev.jpg';
import mac from "../images/mac-linkweb.jpg";



import scroll from "../images/motiontest.svg";
import avsmoto from '../images/avsmoto-avis.png';
import casinobarbotan from '../images/casino-barbotan-avis.png';
import contis from '../images/contis-avis.png';
import "../scss/info.scss";
import '../scss/global.scss';

class AgenceCommunityManagement extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence de Community Management - Gestion des réseaux sociaux - Linkweb"
                    description="Définition et mise en application de stratégies de community management : accompagnement, charte éditoriale, création de contenus et reporting."
                    url="https://linkweb.fr/agence-community-management/"
                    nom="Agence community management"
                    slug="agence-community-management/"
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
                <section className="flex items-center w-full mx-auto pb-0 mt-40 mb-24 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + Bg + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
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
                            <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Agence de Community Management et Gestion des réseaux sociaux</h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Notre agence de community management élabore et gère vos réseaux sociaux.</h2>
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
                <section className="phototext">
                    <section className="text-center text-black text-2xl mx-auto flex-col flex items-center lg:mx-0 century mt-16 mb-10">
                        <h2 className="century text-3xl md:text-5xl text-black leading-none">La gestion de vos réseaux sociaux en toute simplicité</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-white"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="text-xl max-w-5xl text-center century text-black px-4 pb-0">Nos experts vous accompagnent dans le développement de votre marque sur les réseaux sociaux afin d’optimiser votre visibilité en toute confiance.</h3>
                    </section>
                    <section className="w-full my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Linkweb" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10  flex flex-col">
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                    <p>1</p>
                                </div>
                                <div className="w-full px-6 lg:px-6 flex flex-col justify-center" style={{ maxWidth: '1000px' }}>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>ÉLABORATION ET APPLICATION DE STRATÉGIE SOCIAL MEDIA
                                </h3>

                                    <h4 className="century">La mise en place d’une stratégie social media est un fort vecteur de visibilité, de notoriété, mais aussi d’engagement autour de votre marque.</h4>
                                    <br />
                                    <p className="w-full century pb-4 text-justify">Nous déterminons, à partir de vos besoins, vos <strong>objectifs marketing</strong>, vos cibles ainsi que les axes de développement de votre <strong>stratégie social media</strong> en fonction des spécificités de chaque réseau social et de chaque public.
                                </p>
                                    {/*<Button url="/referencement-de-site-internet-47-31/" text="Notre formule SEO" position="left" />*/}
                                    <br />
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>2</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>CRÉATION DE CONTENU
                                    </h3>

                                    <h4 className="century">Animer une communauté passe par la conception de contenus engageants et adaptés à son public cible.</h4>
                                    <br />
                                    <p className="w-full century pb-4 text-justify">Nos équipes de webmarketing définissent une <strong>stratégie de contenus</strong> en accord avec votre marque. Nous produisons les contenus textuels comme visuels à mettre en avant sur vos réseaux.
                                    </p>
                                    {/*<Button url="/agence-adwords-47-31/" text="Notre formule Adwords" position="left" />*/}
                                    <br />
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>3</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>PLANIFICATION DE PUBLICATIONS
                                    </h3>

                                    <h4 className="century">La mise en place de votre stratégie de contenus est rythmée par des temps forts suivant un calendrier de publication précis.</h4>
                                    <br />
                                    <p className="century pb-4 text-justify">Nos équipes développent un rétroplanning adapté à partir des temps forts du <strong>calendrier des médias sociaux</strong>. Qu’il s’agisse d’acquérir de la notoriété, d’accroître sa communauté ou bien de la fidéliser, il est essentiel de savoir communiquer au bon moment sur sa page ou son compte.
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            {/*<div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up">
                                    <p>4</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in">
                                        <span className="text-bleu">/</span>CRÉATION ET GESTION DE CAMPAGNES PUBLICITAIRES
                                    </h3>

                                    <h4 className="century">La mise en place en place de campagnes publicitaires nécessite de bien connaître ses cibles en vue de les convertir en prospects.</h4>
                                    <br />
                                    <p className="century pb-4 text-justify">Nous mettons en place et gérons vos <strong>campagnes publicitaires</strong> de façon complète. Du cadrage stratégique de la campagne jusqu’à la définition des ensembles de publicités, nous mettons tout en oeuvre pour atteindre vos objectifs.
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />
                                </div>
                            </div>*/}
                        </div>
                    </section>
                </section>
                <section className="bg-darkgrey sidetitle py-10">
                    <section className="w-full lg:w-2/3 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
                        <h2 className="century text-center lg:text-left text-white text-3xl md:text-5xl leading-none">Tirez le meilleur parti de vos médias sociaux avec Linkweb</h2>
                        <br />
                        <div className="line-title my-4 ">
                            <br />
                            <hr className="w-1/2 border-bleu lg:w-1/12" />
                            <br />
                            <h3 /*data-aos='fade-left'*/ className="text-xl text-white century pb-0">Les experts de notre agence activent tous les leviers pour faire de vos médias sociaux, des générateurs de visibilité et de notoriété pour votre marque.</h3>
                        </div>
                    </section>
                    <section className="flex justify-center flex-col items-center">
                        <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 text-white century text-center lg:text-left">
                            <svg width="50px" fill="#ffffff" className="lg:mx-0 mx-auto block" viewBox="0 0 700 700">
                                <g xmlns="">
                                <path d="m554.4 284.91v-138.14c-0.023438-15.211-6.082-29.793-16.84-40.543-10.762-10.75-25.348-16.793-40.559-16.801h-14.219v-22.234c0-14.004-7.4727-26.945-19.602-33.949-12.125-7-27.07-7-39.199 0-12.129 7.0039-19.598 19.945-19.598 33.949v7.6523c0 7.7305 6.2656 14 14 14 7.7305 0 14-6.2695 14-14v-7.6523c0-6.1836 5.0117-11.199 11.199-11.199 6.1836 0 11.199 5.0156 11.199 11.199v58.051c-0.007812 6.1836-5.0156 11.195-11.199 11.199-7.7344 0-14 6.2695-14 14 0 7.7344 6.2656 14 14 14 10.391-0.011719 20.355-4.1445 27.703-11.492 7.3516-7.3516 11.484-17.312 11.496-27.707v-7.8164h14.219c7.7852 0 15.254 3.0898 20.766 8.5938 5.5117 5.5 8.6172 12.961 8.6328 20.75v38.551h-400.4v-38.551c0.015625-7.7891 3.1211-15.25 8.6328-20.75 5.5117-5.5039 12.98-8.5938 20.766-8.5938h28.227c7.7305 0 14-6.2695 14-14 0-7.7305-6.2695-14-14-14h-28.227c-15.211 0.007812-29.793 6.0508-40.555 16.801s-16.82 25.332-16.844 40.543v266.05c0.015625 15.219 6.0703 29.809 16.832 40.57 10.758 10.762 25.352 16.812 40.566 16.832h188.43c22.809 33.504 58.906 55.602 99.117 60.684 40.211 5.082 80.668-7.3438 111.09-34.121 30.426-26.777 47.891-65.328 47.961-105.86s-17.266-79.141-47.602-106.02zm-399 157.32c-7.793-0.011719-15.266-3.1094-20.777-8.6211-5.5117-5.5117-8.6133-12.984-8.6211-20.781v-199.5h400.4v52.172c-34.23-18.043-74.359-21.258-111.03-8.8984-36.664 12.363-66.66 39.215-82.984 74.301-16.32 35.082-17.543 75.32-3.3828 111.33zm305.2 61.766c-30.078 0-58.922-11.949-80.188-33.215-21.266-21.266-33.215-50.109-33.215-80.184 0-30.078 11.949-58.922 33.215-80.188 21.266-21.266 50.109-33.215 80.188-33.215 30.074 0 58.918 11.949 80.184 33.215 21.266 21.266 33.215 50.109 33.215 80.188-0.035156 30.062-11.992 58.887-33.25 80.148-21.262 21.258-50.086 33.215-80.148 33.25zm66.488-169.29 19.797 19.797-98.805 98.805-49.531-49.535 19.797-19.797 29.734 29.734zm-279.07-267.52v22.207l170.36 0.003906c7.7305 0 14 6.2656 14 14 0 7.7305-6.2695 14-14 14h-170.36v7.8438-0.003906c-0.011719 10.395-4.1484 20.355-11.496 27.707-7.3477 7.3477-17.312 11.48-27.703 11.492-7.7344 0-14-6.2656-14-14 0-7.7305 6.2656-14 14-14 6.1797-0.003907 11.191-5.0156 11.199-11.199v-58.051c0-6.1836-5.0156-11.199-11.199-11.199-6.1875 0-11.203 5.0156-11.203 11.199v7.6523c0 7.7305-6.2656 14-14 14-7.7305 0-14-6.2695-14-14v-7.6523c0-14.004 7.4727-26.945 19.602-33.949 12.129-7 27.07-7 39.199 0 12.129 7.0039 19.602 19.945 19.602 33.949z"/>
                                </g>
                            </svg>
                            <h4 className="font-bold century"><span className="font-bold">Accompagnement one-shot</span></h4>
                                <p>Nous vous accompagnons pour donner de la visibilité à vos événements internes et externes en vue de dynamiser votre <strong>communication d’entreprise</strong>.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" fill="#ffffff" className="lg:mx-0 mx-auto block" viewBox="0 0 1200 1200">
                                    <g>
                                    <path d="m920.4 386.4c-4.8008 0-8.3984 3.6016-8.3984 8.3984v158.4c-1.1992 4.8008 2.3984 9.6016 8.3984 9.6016 4.8008 1.1992 9.6016-2.3984 9.6016-8.3984v-2.3984-157.2c0-4.8008-3.6016-8.4023-9.6016-8.4023 1.2031 0 0 0 0 0z"/>
                                    <path d="m920.4 888c-4.8008 0-8.3984 3.6016-8.3984 8.3984v147.6c0 58.801-48 106.8-106.8 106.8h-626.4c-58.801 1.1992-106.8-46.801-106.8-105.6v-890.4c0-58.801 48-106.8 106.8-106.8h427.2c-7.1992 9.6016-12 21.602-10.801 33.602v207.6c1.1992 27.602 24 50.398 52.801 49.199h264v4.8008c-1.1992 4.8008 2.3984 9.6016 8.3984 9.6016 4.8008 1.1992 9.6016-2.3984 9.6016-8.3984v-2.3984-10.801-1.1992-1.1992-2.3984c-1.1992-6-3.6016-10.801-7.1992-14.398l-270-273.61c-4.8008-6-13.199-8.3984-20.398-8.3984h-453.6c-68.402 0-124.8 56.398-124.8 124.8v890.4c0 69.602 56.398 124.8 124.8 124.8h626.4c69.602 0 124.8-56.398 124.8-124.8v-148.8c0-4.7969-3.6016-8.3984-9.6016-8.3984 1.2031 0 0 0 0 0zm-15.598-567.6h-256.8c-18 1.1992-33.602-13.199-34.801-31.199v-207.6c-2.3984-15.602 8.3984-28.801 24-31.199h2.3984s1.1992 0 1.1992 1.1992z"/>
                                    <path d="m630 795.6h-435.6c-4.8008 1.1992-8.3984 4.8008-8.3984 9.6016 0 3.6016 3.6016 7.1992 8.3984 8.3984h435.6c4.8008 1.1992 9.6016-2.3984 9.6016-8.3984s-2.3984-9.6016-8.3984-9.6016h-1.2031z"/>
                                    <path d="m811.2 645.6c0-4.8008-3.6016-8.3984-8.3984-8.3984l-608.4-0.003906c-4.8008 1.1992-8.3984 4.8008-8.3984 9.6016 0 3.6016 3.6016 7.1992 8.3984 8.3984h607.2c4.8008 0 9.6016-3.5977 9.6016-9.5977v0z"/>
                                    <path d="m801.6 478.8h-607.2c-4.8008 1.1992-8.3984 4.8008-8.3984 9.6016 0 3.6016 3.6016 7.1992 8.3984 8.3984h607.2c4.8008 1.1992 9.6016-2.3984 9.6016-8.3984 1.1992-4.8008-2.3984-9.6016-8.3984-9.6016h-1.1992z"/>
                                    <path d="m194.4 954c-4.8008 1.1992-8.3984 4.8008-8.3984 9.6016 0 3.6016 3.6016 7.1992 8.3984 8.3984h198c4.8008 1.1992 9.6016-2.3984 9.6016-8.3984 1.1992-4.8008-2.3984-9.6016-8.3984-9.6016h-2.3984z"/>
                                    <path d="m630 954h-184.8c-4.8008 1.1992-8.3984 4.8008-8.3984 9.6016 0 3.6016 3.6016 7.1992 8.3984 8.3984h184.8c4.8008 1.1992 9.6016-2.3984 9.6016-8.3984 1.1992-4.8008-2.3984-9.6016-8.3984-9.6016h-1.2031z"/>
                                    <path d="m481.2 328.8c0-4.8008-3.6016-8.3984-8.3984-8.3984l-291.6-0.003906c-4.8008 1.1992-8.3984 4.8008-8.3984 9.6016 0 3.6016 3.6016 7.1992 8.3984 8.3984h290.4c4.8008 0 9.6016-3.5977 9.6016-9.5977v0z"/>
                                    <path d="m1129.2 518.4c-10.801-10.801-25.199-16.801-39.602-16.801-12 0-24 4.8008-33.602 12-9.6016 0-19.199 3.6016-26.398 10.801l-319.2 319.2c-4.8008 4.8008-7.1992 9.6016-8.3984 15.602-1.1992 1.1992-1.1992 2.3984-1.1992 3.6016l-28.801 104.39c-1.1992 3.6016 0 6 2.3984 8.3984 1.1992 1.1992 3.6016 2.3984 6 2.3984h2.3984l50.398-13.199c4.8008-1.1992 7.1992-7.1992 4.8008-12-1.1992-3.6016-6-6-9.6016-6l-36 9.6016 16.801-62.398 45.602 45.602c7.1992 7.1992 15.602 10.801 25.199 10.801 9.6016 0 19.199-3.6016 25.199-10.801l319.2-319.2c7.1992-8.3984 12-19.199 9.6016-30 18.004-21.602 15.605-52.801-4.7969-72.004zm-39.598 1.2031c10.801 0 20.398 3.6016 27.602 10.801 9.6016 9.6016 13.199 24 9.6016 37.199l-48-46.801c4.7969 0 7.1953-1.1992 10.797-1.1992zm24 88.797-319.2 319.2c-7.1992 7.1992-18 7.1992-25.199 0l-45.602-46.801c-3.6016-3.6016-4.8008-8.3984-4.8008-12 0-4.8008 1.1992-9.6016 4.8008-13.199l319.2-319.2c7.1992-7.1992 18-7.1992 25.199 0l45.602 46.801c6.0039 7.1953 6.0039 17.996 0.003906 25.195z"/>
                                    <path d="m1059.6 576-291.6 291.6c-3.6016 3.6016-3.6016 9.6016 0 13.199 3.6016 3.6016 9.6016 3.6016 13.199 0l291.6-291.6c3.6016-3.6016 3.6016-9.6016 0-12-3.6016-3.5977-8.4023-3.5977-13.199-1.1992z"/>
                                    </g>
                                </svg>
                                <h4 className="font-bold century"><span className="font-bold">Charte éditoriale</span></h4>
                                <p>Nous développons une <strong>charte éditoriale</strong> avec une <strong>stratégie de contenu</strong> détaillée qui tient compte des besoins et des attentes de votre public cible.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125" fill="#ffffff"><g><g><g><path d="M82.3,81.7c-0.8,0-1.5-0.7-1.5-1.5c0-17-13.8-30.9-30.9-30.9c-17,0-30.9,13.8-30.9,30.9     c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5c0-18.6,15.1-33.8,33.8-33.8s33.8,15.1,33.8,33.8C83.8,81.1,83.1,81.7,82.3,81.7z" /></g><g><path d="M1.5,67.4c-0.1,0-0.3,0-0.4-0.1c-0.8-0.2-1.2-1-1-1.8c1-3.5,2.5-6.9,4.2-10.2c1-1.8,0.6-4.1-0.8-5.5     c-3-3-3-7.8,0-10.7l5.4-5.4c1.4-1.4,3.3-2.2,5.4-2.2c2,0,3.9,0.8,5.3,2.2c0,0,0,0,0,0c1.5,1.5,3.7,1.8,5.5,0.8     c3.2-1.8,6.7-3.2,10.2-4.2c1.9-0.6,3.3-2.4,3.3-4.5c0-4.2,3.4-7.6,7.6-7.6h7.6c4.2,0,7.6,3.4,7.6,7.6c0,2.1,1.4,3.9,3.3,4.5     c3.5,1,6.9,2.5,10.2,4.2c1.8,1,4.1,0.6,5.5-0.8c0,0,0,0,0,0c1.4-1.4,3.3-2.2,5.3-2.2c2,0,3.9,0.8,5.4,2.2l5.4,5.4     c1.4,1.4,2.2,3.3,2.2,5.4s-0.8,3.9-2.2,5.4c-1.5,1.5-1.8,3.7-0.8,5.5c1.8,3.2,3.2,6.6,4.2,10.2c0.2,0.8-0.2,1.6-1,1.8     c-0.8,0.2-1.6-0.2-1.8-1c-1-3.3-2.3-6.6-4-9.6c-1.6-2.9-1.1-6.6,1.3-9c1.8-1.8,1.8-4.8,0-6.6l-5.4-5.4c-0.9-0.9-2.1-1.4-3.3-1.4     c-1.3,0-2.4,0.5-3.3,1.4c0,0,0,0,0,0c-2.4,2.3-6,2.9-8.9,1.3c-3.1-1.7-6.3-3-9.6-4c-3.2-0.9-5.4-3.9-5.4-7.3     c0-2.6-2.1-4.7-4.7-4.7h-7.6c-2.6,0-4.7,2.1-4.7,4.7c0,3.3-2.2,6.3-5.4,7.3c-3.3,1-6.5,2.3-9.6,4c-2.9,1.6-6.6,1.1-8.9-1.3     c0,0,0,0,0,0c-0.9-0.9-2.1-1.4-3.3-1.4c-1.3,0-2.4,0.5-3.3,1.4l-5.4,5.4c-1.8,1.8-1.8,4.8,0,6.6c2.4,2.4,2.9,6.1,1.3,9     c-1.7,3.1-3,6.3-4,9.6C2.7,67,2.1,67.4,1.5,67.4z" /></g></g><g><path d="M98.5,81.7H1.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h97.1c0.8,0,1.5,0.7,1.5,1.5S99.3,81.7,98.5,81.7z    " /></g></g></svg>
                                <h4 className="font-bold century"><span className="font-bold">Création de contenus</span></h4>
                                <p>Nous créons les contenus visuels et textuels qui seront utilisés dans vos <strong>campagnes de publication</strong> sur vos médias sociaux.</p>
                            </div>
                        </div>
                        <div className="w-full text-white flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                            <div className="w-full svgtransform -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#ffffff" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#ffffff" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#ffffff" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>
                                <h4 className="font-bold century"><span className="font-bold">Analyse de l’activité</span></h4>
                                <p>Nous analysons les statistiques de vos publications pour mesurer l'<strong>engagement</strong> et adapter votre stratégie en fonction des performances de votre contenu.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><path fill="#ffffff" d="M66.598,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44c-0.556,0.081-1.017,0.47-1.191,1.004  c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014c-0.095,0.554,0.133,1.113,0.587,1.443  c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C67.673,71.235,67.16,70.916,66.598,70.916L66.598,70.916z M50,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169L50,82.719l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C51.074,71.235,50.562,70.916,50,70.916L50,70.916z M33.402,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423  l2.707,1.423c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014  l2.19-2.135c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C34.476,71.235,33.963,70.916,33.402,70.916L33.402,70.916z" /><path fill="#ffffff" d="M72.131,50.738h-25.82v-1.475h25.82V50.738z M50,52.951h-3.689v1.475H50V52.951z M72.131,52.951H53.689v1.475  h18.443V52.951z M61.066,56.639H46.311v1.475h14.754V56.639z M72.131,56.639h-7.377v1.475h7.377V56.639z M57.377,60.328H46.311  v1.475h11.066V60.328z M61.066,27.131H46.311v1.475h14.754V27.131z M72.131,27.131h-7.377v1.475h7.377V27.131z M72.131,30.82h-25.82  v1.475h25.82V30.82z M57.377,34.508H46.311v1.475h11.066V34.508z M72.131,34.508H61.066v1.475h11.066V34.508z M64.754,38.197H46.311  v1.475h18.443V38.197z" /><path fill="#ffffff" d="M75.82,12.377h-4.338c-0.741-1.139-1.62-2.329-2.458-3.404l-0.257-0.33l-0.416,0.052  c-2.313,0.288-8.743,0.858-10.692,0.051c-0.341-0.141-0.869-0.895-1.294-1.501C55.592,6.141,54.793,5,53.689,5h-7.377  c-1.104,0-1.904,1.141-2.677,2.244c-0.425,0.606-0.953,1.36-1.294,1.501c-1.947,0.807-8.379,0.237-10.692-0.051l-0.416-0.052  l-0.257,0.33c-0.838,1.075-1.717,2.265-2.458,3.404H24.18c-2.441,0-4.426,1.986-4.426,4.426v73.77c0,2.441,1.985,4.426,4.426,4.426  H75.82c2.441,0,4.426-1.985,4.426-4.426v-73.77C80.246,14.363,78.26,12.377,75.82,12.377z M31.886,10.208  c1.891,0.218,8.608,0.899,11.02-0.1c0.737-0.305,1.32-1.137,1.937-2.017c0.396-0.564,1.132-1.615,1.469-1.615h7.377  c0.337,0,1.073,1.051,1.469,1.615c0.617,0.88,1.2,1.712,1.937,2.017c2.412,0.999,9.129,0.318,11.02,0.1  c1.698,2.219,3.397,4.834,3.684,5.857H28.201C28.489,15.043,30.188,12.427,31.886,10.208z M78.77,90.574  c0,1.627-1.324,2.951-2.951,2.951H24.18c-1.627,0-2.951-1.324-2.951-2.951v-73.77c0-1.627,1.324-2.951,2.951-2.951h3.449  c-0.727,1.324-1.12,2.457-0.82,3.071c0.192,0.392,0.578,0.618,1.059,0.618h44.262c0.482,0,0.867-0.225,1.059-0.618  c0.3-0.614-0.093-1.746-0.82-3.071h3.449c1.627,0,2.951,1.324,2.951,2.951V90.574z M50,13.115c-1.424,0-2.582-1.158-2.582-2.582  S48.576,7.951,50,7.951s2.582,1.158,2.582,2.582S51.424,13.115,50,13.115z M50,9.426c-0.61,0-1.107,0.496-1.107,1.107  c0,0.61,0.496,1.107,1.107,1.107s1.107-0.496,1.107-1.107C51.107,9.923,50.61,9.426,50,9.426z" /><path fill="#ffffff" d="M38.934,50v11.066H27.869V50H38.934 M38.934,48.525H27.869c-0.815,0-1.475,0.661-1.475,1.475v11.066  c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475V50C40.41,49.185,39.749,48.525,38.934,48.525  L38.934,48.525z M33.483,38.197c-0.008,0-0.016,0-0.024,0c-0.302,0-0.588-0.12-0.792-0.343l-3.77-4.111  c-0.413-0.451-0.382-1.147,0.069-1.559c0.451-0.412,1.151-0.379,1.563,0.071l2.989,3.267l7.698-7.698  c0.432-0.432,1.132-0.432,1.565,0c0.432,0.432,0.432,1.133,0,1.565l-8.516,8.5C34.058,38.097,33.776,38.197,33.483,38.197z   M38.934,34.271v4.664h-5.451H33.45h-5.581V27.869h11.066v1.194l1.45-1.45c-0.122-0.692-0.722-1.22-1.45-1.22H27.869  c-0.815,0-1.475,0.661-1.475,1.475v11.066c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475v-6.136  L38.934,34.271z" /></svg>
                                <h4 className="font-bold century"><span className="font-bold">Reporting</span></h4>
                                <p>Nous vous informons des performances de vos campagnes à travers un reporting régulier afin de vous donner toutes les clés pour faire les meilleurs choix pour vos <strong>médias sociaux</strong>.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" fill="#ffffff" className="lg:mx-0 mx-auto block" viewBox="0 0 700 700">
                                    <g>
                                    <path d="m201.6 230.72c0 100.8-22.961 131.6-36.961 140.56-11.762 7.8398-18.48 21.281-18.48 34.719 0 23.52 19.039 42 42 42h323.68c22.961 0 42-19.039 42-42 0-14-6.7188-26.879-18.48-34.719-14-9.5195-36.961-40.32-36.961-140.56 0-94.078-57.121-131.6-99.121-147.28 0.55859-3.3594 1.1211-7.2812 1.1211-10.641 0-28-22.398-50.398-50.398-50.398s-50.398 22.398-50.398 50.398c0 3.3594 0.55859 7.2812 1.1211 10.641-42.004 15.121-99.121 53.203-99.121 147.28zm148.4-185.92c15.68 0 28 12.32 28 28 0 1.6797 0 2.8008-0.55859 4.4805-22.961-5.0391-44.238-2.2383-55.441 0 0-1.6797-0.55859-2.8008-0.55859-4.4805 0.55859-15.68 12.879-28 28.559-28zm-29.68 56h0.55859s12.32-3.9219 29.68-3.9219c8.9609 0 18.48 1.1211 29.121 4.4805h0.55859c43.68 12.32 96.32 44.801 96.32 129.92 0 53.199 6.1602 94.078 18.48 122.08h-229.04c-6.1602 0-11.199 5.0391-11.199 11.199s5.0391 11.199 11.199 11.199h240.8 0.55859c4.4805 6.1602 9.5195 10.641 15.121 14.559 5.6016 3.9219 8.9609 10.078 8.9609 16.238 0 10.641-8.9609 19.602-19.602 19.602l-323.68 0.003906c-10.641 0-19.602-8.9609-19.602-19.602 0-6.7188 3.3594-12.879 8.9609-16.238 30.801-21.281 46.48-74.48 46.48-159.04 0-85.68 52.078-118.16 96.32-130.48z"/>
                                    <path d="m355.6 532c34.719 0 64.398-25.762 69.441-59.922l1.6797-12.879h-142.24l1.6797 12.879c5.0391 34.16 34.719 59.922 69.441 59.922zm43.117-50.398c-7.2812 16.801-24.641 28-43.121 28-18.48 0-35.84-11.199-43.121-28z"/>
                                    <path d="m238 375.2h2.2383c0.55859 0 1.6797-0.55859 2.2383-0.55859 0.55859 0 1.1211-0.55859 1.6797-1.1211 0.55859-0.55859 1.1211-1.1211 1.6797-1.1211 2.2422-2.7969 3.3633-5.5977 3.3633-8.3984s-1.1211-5.6016-3.3594-7.8398c-0.55859-0.55859-1.1211-1.1211-1.6797-1.1211s-1.1211-0.55859-1.6797-1.1211c-0.55859 0-1.1211-0.55859-2.2383-0.55859-3.3594-0.55859-7.2812 0.55859-10.078 2.8008-2.2422 2.2383-3.3633 5.0391-3.3633 7.8398s1.1211 5.6016 3.3594 7.8398c2.2383 2.2383 5.0391 3.3594 7.8398 3.3594z"/>
                                    </g>
                                </svg>
                                <h4 className="font-bold century"><span className="font-bold">Veille digitale</span></h4>
                                <p>Nous menons une veille digitale pour suivre les tendances et pour être au courant de tous les mouvements auxquels vos cibles pourraient être sensibles.</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="max-w-6xl w-full mx-auto px-4 mt-12 pt-12 pb-0 my-2">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-3xl md:text-5xl century">
                        Développez votre communauté et transformez vos utilisateurs en prospects qualifiés
                    </h2>
                    <hr className="blue border-bleu"></hr>
                </section>
                <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
                    <div className="w-full xl:w-1/3 one px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE VEUX EN SAVOIR PLUS SUR LE COMMUNITY MANAGEMENT
                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                La création et l’animation de communauté sur les <strong>réseaux sociaux</strong> sont avantageuses à plusieurs titres. En plus de générer de la visibilité pour votre entreprise, il est également possible d’attirer de nouveaux clients, mais aussi de renforcer la <strong>notoriété de votre marque</strong> auprès d’un public ciblé.
                </div>

                            </section>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 two px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE SOUHAITE ÊTRE ACCOMPAGNÉ POUR TROUVER MA SOLUTION
                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                Avant de se lancer, il est essentiel de savoir où communiquer pour s’adresser au bon public. En fonction de vos besoins et des spécificités de chaque réseau, nous déterminons avec vous la solution la plus pertinente pour vous permettre d’<strong>investir les bons médias</strong> en vue d’optimiser vos résultats.
                </div>
                            </section>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 three px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE FAIS APPEL À UNE AGENCE DE COMMUNITY MANAGEMENT POUR MON PROJET
                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                Les consultants de notre agence sont à l’écoute de vos besoins pour déterminer une solution clé-en-main. Quel que soit votre objectif, nous mettons tout en oeuvre pour vous proposer une solution pertinente, adaptée à votre public et en parfaite adéquation avec votre <strong>stratégie de communication digitale</strong>.
                </div>
                            </section>

                        </div>

                    </div>
                </section>
                <section className="-mt-32">
                    <Button url="/contact-agence-web-toulouse/" text="Prendre contact" position="center" />
                </section>
                <section className="flex w-full flex-col mx-auto px-0  my-4">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10">
                        <h2 className="century text-3xl md:text-5xl text-black leading-none">Pourquoi la gestion des réseaux sociaux est importante ?</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                    </section>
                </section>
                <section className="bloctextimg w-full md:w-10/12 mx-auto lg:block lg:mx-auto xl:w-full flex flex-col lg:flex-row justify-center">
                    <div className="w-full image lg:w-1/2 xl:w-2/5 lg:absolute flex justify-center lg:mt-48 xl:mt-24 pr-0 md:pr-16 lg:justify-center lg:items-center">
                        <img src={imac} alt="Référencement Toulouse" style={{ maxHeight: '450px' }} />
                    </div>
                    <div className="text century w-full text-justify mr-16 lg:w-3/5 xl:w-2/5 md:p-20 lg:pl-32 p-10 lg:py-10 text-black text-sm xl:text-md" style={{ backgroundColor: '#d3d3d352' }}>
                        <h4 className="century text-xl"><span className="font-bold">Le web marketing regorge d’opportunités pour les entreprises. Aujourd’hui, développer sa présence sur le digital est indispensable.</span></h4>
                        <br />
                        <p style={{ fontSize: '16px' }}>
                            L’obtention de visibilité, de notoriété ou encore l’<strong>engagement des utilisateurs</strong> auprès de sa marque sont des enjeux essentiels. Néanmoins, cela nécessite du temps et de connaître les spécificités de chaque outil ainsi que leur fonctionnement. À ce niveau, le recours à une <strong>agence de community management pour la gestion de réseaux sociaux</strong> est un gain de temps non-négligeable.<br />
                            <br />
                            Animer une communauté, c’est avant tout la connaître et maîtriser ses codes. Les experts de notre équipe produisent des solutions en accord avec vos besoins, mais également en parfaite adéquation avec ces codes. La mise en place d’une <strong>stratégie de contenus</strong> et la création de contenus sont à la base de votre projet. En effet, il est essentiel de produire du contenu pour des publications engageantes afin de créer une communauté puis de fidéliser ses utilisateurs.<br />
                            <br />
                            Enfin, la <strong>gestion de réseaux sociaux</strong> nécessite la mise en place d’une stratégie de modération pour chaque média en plus de la création graphique adaptée à chaque plateforme : page Facebook, Twitter, Instagram, TikTok, LinkedIn, etc. Le canal d’acquisition que représente le <strong>réseau social</strong> peut également entrer en parfait accord avec une stratégie de contenus sur-mesure, en place sur un blog en ligne ou sur un site web.<br />
                        </p>
                    </div>

                    <br />
                </section>
                <section className="w-full flex my-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence de gestion de réseaux sociaux à Toulouse</span> ?</h3>
                        <h4>Linkweb fait partie des agences en France qui soutiennent les professionnels souhaitant développer leur activité sur Internet.</h4>
                    </div>
                    <div className="w-full mx-auto block lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" />
                    </div>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Agence community management : faites de votre entreprise une marque connue et reconnue</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Le web marketing est une opportunité de développement importante pour une entreprise. Dynamiser sa communication en ligne et fédérer autour d’une marque est un bon moyen pour faire autorité dans son secteur.</h3>
                    </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="COMMUNIQUER AU BON ENDROIT AU BON MOMENT">
                                <p>
                                Les <strong>réseaux sociaux comme Instagram, Facebook (gestion de page Facebook) ou encore Tik Tok</strong> attirent des millions d’utilisateurs quotidiens. Par ailleurs, chaque réseau atteint un public différent en fonction du contenu mis en avant. L’utilisation de ces réseaux au sein d’une <strong>stratégie social media</strong> va donc dépendre de vos besoins.<br/><br/>
                                Selon le type de personnes à atteindre, l’effort de visibilité devra être ciblé sur un réseau en particulier. En effet, les utilisateurs de Facebook n’ont pas le même profil que les utilisateurs de Tik Tok. De la même façon, le contenu attendu par ces utilisateurs et la manière de communiquer différeront en fonction du profil des personnes face à vous.<br/><br/>
                                C’est pourquoi, les <strong>experts de notre équipe</strong> déterminent les meilleures opportunités pour votre entreprise, en tenant compte de votre ciblage, tout en adaptant le contenu et les publications à proposer.
                                </p>
                            </div>
                            <div label="RENFORCER VOTRE IMAGE DE MARQUE GRÂCE AU DIGITAL">
                                <p>
                                La <strong>publication sur les réseaux sociaux</strong> est également un moyen de façonner son image auprès des utilisateurs. De plus, sur les réseaux, vous êtes en contact direct avec les internautes. Maîtriser sa communication est donc indispensable pour ne pas brouiller le message et <strong>produire un contenu engageant</strong>. En somme, lorsque vous communiquez, c’est l’entièreté de votre marque que vous engagez. Il est donc essentiel de le faire de manière professionnelle, avec des consultants compétents.<br/><br/>
                                À ce niveau, le community management est essentiel car une certaine adaptation du discours doit être réalisée. En effet, sur les réseaux sociaux, la façon de consommer une information est différente d’un site web. Les internautes voient défiler des centaines de publication chaque jour. C’est pourquoi, il est essentiel d’exprimer sa présence en produisant un contenu attractif, parfaitement adapté aux codes du réseau ainsi qu’à sa cible.<br/><br/>
                                Le <strong>community manager</strong> doit donc être informé de toute l’actualité du secteur d’activité et être prêt à réagir quand un événement a lieu. Il est l’interface entre la marque et les utilisateurs. Ce travail s’établit sur le long terme et doit permettre de <strong>transformer votre entreprise en marque</strong>.
                                </p>
                            </div>
                            <div label="FIDÉLISER UNE COMMUNAUTÉ AUTOUR DE VOTRE MARQUE">
                                <p>
                                Le <strong>community management</strong> est un bon moyen de <strong>créer une communauté</strong> pour étendre sa visibilité et développer sa notoriété, mais aussi pour fidéliser son audience. Grâce à une stratégie de contenus taillée pour vos utilisateurs cibles, vous pourrez entretenir votre communauté et la stimuler.<br/><br/>
                                Cette première étape est essentielle pour donner de la visibilité à vos services et à vos produits grâce au trafic généré à partir de ce canal. Lorsque vous communiquez sur les <strong>réseaux sociaux</strong>, vous communiquez auprès d’utilisateurs dont les besoins sont différents. Un des objectifs du community management est de faire en sorte de transformer un utilisateur en prospect dès lors qu’il exprime un besoin auquel votre entreprise répond.<br/><br/>
                                Pour que l’utilisateur interagisse avec votre marque, il sera donc nécessaire l’y avoir familiarisé. C’est tout l’objet du <strong>community management</strong> et de la <strong>gestion de ses réseaux sociaux</strong> pour transformer ses suiveurs en prospects puis en clients.
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
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Vous souhaitez faire appel à notre agence pour la gestion de vos réseaux sociaux ?</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Linkweb est une <strong>agence de community management</strong> à l’écoute de vos besoins ainsi que de vos attentes pour mettre en place un <strong>projet de social media</strong> qui vous ressemble et qui dynamisera votre activité sur le web avec un support digital adapté.</p>
                            <div className="max-w-xs ml-auto mr-auto md:mr-0 md:ml-0 block">
                                <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" text="NOUS CONTACTER" />
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
query lastsThreePostsCM {
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
export default AgenceCommunityManagement;
