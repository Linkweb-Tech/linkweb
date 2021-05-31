import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import RoundButtonAccueilMail from "../components/roundButtonAccueilMail";
import RoundButton from "../components/roundButton";

import Accordion from "../components/accordion";
import SEO from "../components/seo";
import SimpleMap from "../components/simpleMap";
import "../scss/blochover.scss";
import "../scss/carousel.scss";

import mac from "../images/projet-web-nice.jpg";
import stars from '../images/stars.png';
import arriereplan from "../images/bg-choisir-agence-communication-web.jpg";
import siteinternet from "../images/agence-web-nice.jpg";
import referencement from "../images/freelance.jpg";
import webdesign from "../images/agence-web-specialisee.jpg";




class AgenceWebNice extends Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Web Nice - Création site internet - Linkweb"
                    description="Notre agence web à Nice met tout en oeuvre pour vous proposer une solution web fonctionnelle et adaptée à vos objectifs."
                    url="https://linkweb.fr/agence-web-nice/"
                    nom="Agence Web Nice"
                    slug="agence-web-nice/"
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

                <section className="flex items-center justify-start w-full mx-auto pb-0 my-32 md:my-42 lg:my-42 xl:my-48 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + arriereplan + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="max-w-6xl mx-auto lg:mx-56 py-2 w-full flex-col items-end">
                        <div className="w-full lg:w-2/3 flex justify-center lg:justify-start">
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Agence web Nice - Création site internet</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Agence web spécialisée dans la création de sites et le référencement web à Nice</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}

                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Vous souhaitez contacter notre agence web à Nice ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md">Pour votre <strong className="font-normal">projet de refonte ou de création</strong>, Linkweb à Nice et partout en France vous accompagne. Définissez votre stratégie web-marketing auprès de <strong className="font-normal">spécialistes du digital</strong>.</p>
                        <br />
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                            <button
                                className="font-light mx-auto roundedButton bg-darkgrey text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = '/contact-agence-web-toulouse/';
                                }}
                            >Je demande un devis</button>
                            {/* <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" color="darkgrey" text="Je demande un devis" /> */}
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-3/5 px-10 mt-16 lg:-mt-48 mb-16 lg:mb-48">
                    <br />
                    <h3 className="century text-xl text-center">
                        Agence Web Nice : Faites confiance à l’équipe de Linkweb Nice pour mettre en application votre stratégie de développement et de référencement. 
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Linkweb vous apporte des solutions adaptées à vos besoins en matière de création de site internet à Nice</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Faites les meilleurs choix pour votre entreprise : choisissez les services d’experts en communication digitale pour mener à bien votre projet. Nos réalisations vous permettent de disposer d’un support performant et adapté qui dynamise l’activité en ligne de votre entreprise.</h3>
                    </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Conception et refonte de</span><br /><span className="font-bold text-5xl md:text-6xl">SITES INTERNET</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg z-50">L’<a href="/agence-web-strasbourg/" className="text-bleu hover:text-white font-bold">équipe Linkweb</a> vous accompagne dans la <strong className="font-normal">création de supports web-design et responsive-design</strong> (ergonomie sur mobile, tablette, tous supports) pour une navigation en toute ergonomie. Les experts en <strong className="font-normal">développement de site web</strong> vous apportent leur expertise, du choix de l’hébergement à l’intégration de contenus optimisés pour <strong className="font-normal">être visible sur Google</strong>. Que vous optiez pour un site vitrine ou e-commerce, voire un site sur-mesure, apparaissez en première page dans les résultats proposés par les <strong className="font-normal">moteurs comme Google</strong>.<br/><br/>
                        Les services que vous propose Linkweb vous permettent d’<strong className="font-normal">acquérir un trafic pertinent</strong>. Notre <a href="/agence-digitale-toulouse/" className="text-bleu hover:text-white font-bold">agence web à Toulouse</a> fait partie des <strong className="font-normal">agences web</strong> qui activent tous les leviers de la communication digitale pour permettre à leurs clients d’atteindre leurs objectifs.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Sratégie de référencement naturel</span><br /><span className="font-bold text-6xl">SEO</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                        Les solutions que vous propose notre équipe sont pertinentes et répondent à vos attentes pour <strong className="font-normal">gagner en visibilité efficacement sur le web</strong>. Mettez toutes les chances de votre côté et faites les meilleurs choix pour acquérir le trafic recherché et générer de l'activité sur votre site. Bénéficiez ainsi d’un <strong className="font-normal">taux de conversion</strong> conséquent et attirez la curiosité de nouveaux clients régulièrement.  
                        <br /><br />Le travail de <strong className="font-normal">référencement naturel</strong> vous rend visible sur le long terme. À partir d’un travail de recherche de mots-clés stratégique et d’un suivi détaillé des performances du site, votre <strong className="font-normal"><a href="/agence-web-montpellier/" className="text-bleu hover:text-white font-bold">communication digitale</a></strong> vous permet d’atteindre vos cibles.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Service de création de </span><br /><span className="font-bold text-6xl">CAMPAGNE ADS</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                        Linkweb vous propose un <strong className="font-normal">service de référencement payant</strong> qui vous permet de vous placer en tête de suggestions de recherche sur les moteurs comme Google. Ainsi, votre site génère plus facilement des retombées et bénéficie d’une <strong className="font-normal">visibilité importante</strong>. En fonction de vos besoins, votre site en ligne génère rapidement un <strong className="font-normal">retour sur investissement</strong> conséquent grâce au <strong className="font-normal">référencement Ads</strong>.
                            <br /><br />Cette stratégie est définie par notre <strong className="font-normal"><a href="/agence-web-bordeaux/" className="text-bleu hover:text-white font-bold">agence Linkweb</a></strong> grâce à une écoute et un conseil adapté à chaque projet. Nous mettons un point d’honneur à vous apporter un service des plus pertinents.</p>
                    </div>
                </section>
                <section className="max-w-4xl w-full mx-auto px-4 py-0 my-0">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
            Activez les <span className="text-bleu">leviers du web-marketing</span> pour le développement de votre entreprise
        </h2>
        <hr className="blue"></hr>
      </section>
      <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
        <div className="w-full xl:w-1/3 one px-auto">
          <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                <span className="text-bleu">/</span>JE SOUHAITE OBTENIR PLUS D'INFORMATIONS SUR LES SERVICES DE LINKWEB À NICE
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                Pour disposer d’un <strong className="font-normal">site internet performant</strong>, il est indispensable de définir des paramètres à exploiter pour obtenir un maximum de résultats. Le public cible, l’<strong className="font-normal">expérience utilisateur</strong> qui répond aux attentes de celui-ci comme à celles des moteurs de recherche, le travail de <strong className="font-normal">référencement</strong>, tous ces éléments ne laissent pas sa place au hasard. Pour permettre à votre <strong className="font-normal">site en ligne</strong> de générer la performance que vous recherchez, Linkweb à <strong className="font-normal">Nice</strong>, à Monaco et partout en France vous apporte ses connaissances.
                </div>
              {/* <Button url="/blog/foire-aux-questions/" text="En savoir plus" position="center" /> */}
              <button
                    className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"                    
                    type="button"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/faq/';
                    }}
                ><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> En savoir plus
                </button>
            </section>
          </div>
        </div>
        <div className="w-full xl:w-1/3 two px-auto">
          <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                <span className="text-bleu">/</span>JE SUIS ACCOMPAGNÉ POUR LA RÉALISATION DE MON PROJET
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
              Site e-commerce, vitrine ou sur-mesure, votre site peut prendre de multiples formes pour vous apporter un <strong className="font-normal">trafic de qualité</strong>. Affirmez votre <strong className="font-normal">présence en ligne</strong> grâce à l’<a href="/agence-web-marseille/" className="text-bleu hover:text-black font-bold">expertise de Linkweb</a>. Nous faisons partie des <strong className="font-normal">agences</strong> qui vous aident à prendre les meilleures décisions pour disposer d’un support performant et conforme à vos ambitions en matière de <strong className="font-normal">communication digitale</strong>. La <strong className="font-normal">réalisation de votre projet web</strong> vous garantit un travail de développement à partir de vos besoins, une réactivité et une transparence considérable de la part de notre équipe.
                </div>
              {/* <Button url="/contact-agence-web-toulouse/" text="Être recontacté" position="center" /> */}
              <button
                    className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"                    
                    type="button"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/contact-agence-web-toulouse/';
                    }}
                ><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> Être recontacté
                </button>
            </section>
          </div>
        </div>
        <div className="w-full xl:w-1/3 three px-auto">
          <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                <span className="text-bleu">/</span>JE CHOISIS DES EXPERTS DU DIGITAL POUR DONNER VIE À MON PROJET
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
              Les <strong className="font-normal"><a href="/agence-web-lyon/" className="text-bleu hover:text-black font-bold">spécialistes de notre agence</a></strong> vous offrent tout leur savoir-faire et leur conseil pour mener à bien votre <strong className="font-normal">projet de site internet</strong>. À travers la <strong className="font-normal">création de site</strong> et la gestion de contenus optimisés, définissez votre stratégie et atteignez vos objectifs en toute confiance. Linkweb fait partie des <strong className="font-normal">agences web</strong> qui se montrent à l’écoute et qui fournissent des services sur-mesure à partir de vos besoins. La <strong className="font-normal">conception de site</strong> que vous propose notre <strong className="font-normal">agence web</strong> est réalisée de manière à susciter l'intérêt de <strong className="font-normal">nouveaux clients</strong> pour vous apporter de la rentabilité. Dans les mains d'experts, la <strong className="font-normal">gestion de votre communication</strong> est optimale.
                </div>
              {/* <Button url="/contact-agence-web-toulouse/" text="Demander un devis" position="center" /> */}
              <button
                    className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"                    
                    type="button"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/contact-agence-web-toulouse/';
                    }}
                ><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> Demander un devis
                </button>
            </section>

          </div>

        </div>
      </section>
                
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence web Nice : faites confiance à un prestataire qualifié pour mener à bien votre stratégie de marketing digital</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Notre agence Linkweb se tient à votre écoute pour donner vie à vos projets webmarketing. L’équipe de spécialistes de la communication et de la création web dispose d’un savoir-faire et d’une expérience qui sont des atouts majeurs pour un accompagnement optimal.</h3>
                    </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Agence Web Nice" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10  flex flex-col">
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                    <p className="text-center">1</p>
                                </div>
                                <div className="w-full century px-6 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>+ de 10 ans d'expérience
                                </h3>
                                    <br />
                                    <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" >C’est depuis 2008 que nous œuvrons à accompagner nos clients dans le <strong className="font-normal">développement de leur visibilité sur Internet</strong>.</p>
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full century md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">2</p>
                                </div>
                                <div className="w-full century px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>+ de 20 techniciens
                                    </h3>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Tous les jours, plus de 20 spécialistes mettent tout en place pour rendre les <strong className="font-normal">sites web</strong> toujours plus performants.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">3</p>
                                </div>
                                <div className="w-full century px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>+ de 300 sites en gestion
                                    </h3>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">TPE, PME, prestataires indépendants, nous proposons des solutions pertinentes à tous les profils de <strong className="font-normal">professionnels</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">4</p>
                                </div>
                                <div className="w-full century px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>L'agence obtient 4,6/5 sur Google
                                    </h3>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Sur 108 avis, la note que nous avons reçue sur Google témoigne de la satisfaction de nos <strong className="font-normal">clients</strong> quant au travail réalisé sur leurs sites.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Vous souhaitez découvrir tout ce que la réalisation d'un projet webmarketing peut apporter à votre entreprise ? </h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">En disposant d’un site responsive accessible sur mobile et autres supports, en optant pour la stratégie de référencement qui vous correspond, choisissez de développer votre visibilité, notoriété ou votre e-réputation. Grâce à la visibilité acquise et au trafic généré sur votre site, obtenez un retour sur investissement pertinent.</h3>
                    </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="DEVENEZ VISIBLE SUR LE WEB GRÂCE À VOTRE SUPPORT DE COMMUNICATION">
                                <p>Mettez en application votre <strong className="font-normal">stratégie de marketing digital</strong> grâce à l’accompagnement de votre prestataire digital. Ainsi, atteignez de nouvelles cibles de clientèle en vous positionnant en tête des <strong className="font-normal">résultats de recherche sur les moteurs</strong>. Nous œuvrons pour la réussite de vos projets. 
                                <br/><br/>
                                Référencement naturel, référencement Ads, la <strong className="font-normal">définition de vos besoins</strong> détermine la stratégie à adopter. Vos objectifs sont ceux de notre agence, où que vous soyez en <strong className="font-normal">France</strong>.</p>
                            </div>
                            <div label="DÉVELOPPEZ UNE ACTIVITÉ DIGITALE GRÂCE À VOTRE SITE INTERNET">
                                <p>
                                Grâce à du contenu pertinent ainsi qu'au <strong className="font-normal">webdesign unique de votre site</strong>, chacune des pages est conçue pour apporter un <strong className="font-normal">tunnel de navigation</strong> fluide à l’utilisateur. En mettant en application la stratégie définie pour vous, votre site rencontre un <strong className="font-normal">trafic pertinent</strong>. Cette activité est indispensable pour porter votre <strong className="font-normal">support de communication web</strong> au sommet des résultats des moteurs comme Google. 
                                <br/><br/>
                                Après définition de vos cibles, vous adaptez les méthodes à employer avec les professionnels de l’<strong className="font-normal">agence internet</strong>. Accédez à une transformation intéressante et fidélisez l’internaute pour bénéficier d’un projet pérenne.
                                </p>
                            </div>
                            <div label="AUGMENTEZ VOTRE CHIFFRE D'AFFAIRES">
                                <p>L’importance de la <strong className="font-normal">rentabilité de votre site</strong> est un paramètre important pour votre société. La maîtrise des outils par les experts du web vous permet d'obtenir un <strong className="font-normal">retour sur investissement</strong> pertinent. Faire appel à la compétence de notre agence est un moyen sûr, de <strong className="font-normal">disposer d’un site fonctionnel</strong> et de qualité ainsi que d’un travail stratégique régulièrement réévalué et réadapté. 
                                <br/><br/>
                                Boostez votre activité professionnelle et augmentez efficacement votre <strong className="font-normal">chiffre d’affaires</strong> grâce à un spécialiste du <strong className="font-normal">marketing digital</strong>. Affichez une image de marque et un professionnalisme qui se démarque de la concurrence pour parvenir aux retombées attendues.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="w-full bg-black flex flex-col md:flex-row">
                    <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                    </div>
                    <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Agence web Nice : vous souhaitez faire appel à nos services ?</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Nous dédions une méthodologie propre à chacun des <strong className="font-normal">projets</strong> que nous portons. Notre but : vous aider à <strong className="font-normal">atteindre vos objectifs</strong> et cela, en totale conformité avec vos attentes. Nous donnons vie à un <strong className="font-normal">support fonctionnel</strong> qui vous correspond.</p>
                            <div className="max-w-xs ml-auto mr-auto md:mr-0 md:ml-0 block">
                                <button
                                    className="font-light mx-auto roundedButton bg-bleu text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = '/contact-agence-web-toulouse/';
                                    }}
                                >JE VEUX MON SITE INTERNET</button>
                            </div>
                        </div>

                    </div>
                </section>

                {/* <section className="w-full flex justify-end py-24" style={{background:'#00000085 url('+ map +')', backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundBlendMode:'cover'}}>
                      <div className="w-full lg:w-1/3 py-10 bg-white shadow-2xl mx-4 lg:mx-32 text-center text-black text-4xl century">
                          <h2 className="max-w-sm mx-auto">Agence Web à <span className="font-bold">Toulouse</span> et <span className="font-bold">Agen</span></h2>
                          <br/>
                          <div className="w-2/3 flex flex-row justify-start mx-auto">
                            <div className="w-2/12 flex items-center">
                               <svg width="25px" viewBox="0 0 1152.7139 1440.550375"><g transform="translate(27692.221,9619.4771)"><path  d="" fill="#37cfee"/><path d="m -27169.027,-8468.7794 c -109.212,-10.8404 -207.531,-48.9146 -293.707,-113.7383 -130.593,-98.2354 -211.705,-244.0654 -227.509,-409.0334 -3.702,-38.636 -2.09,-95.627 3.849,-136.161 28.578,-195.028 157.009,-363.429 338.035,-443.236 45.521,-20.069 99.233,-35.579 147.913,-42.712 52.931,-7.756 116.244,-7.756 169.175,0 195.027,28.578 363.428,157.009 443.236,338.035 20.068,45.521 35.578,99.233 42.711,147.913 7.756,52.931 7.756,116.244 0,169.175 -21.971,149.942 -103.984,287.0324 -226.113,377.9607 -85.78,63.8664 -184.115,101.4195 -292.848,111.8359 -23.892,2.2889 -81.506,2.2675 -104.742,-0.039 z m -18.082,-392.4707 0,-60.625 71.25,0 71.25,0 0,60.625 0,60.625 57.5,0 57.5,0 0,-111.25 0,-111.25 37.5,0 c 20.625,0 37.5,-0.466 37.5,-1.035 0,-1.573 -123.935,-125.215 -125.511,-125.215 -0.755,0 -31.708,-30.34 -68.786,-67.422 l -67.413,-67.422 -130.395,129.456 c -71.717,71.201 -130.395,129.947 -130.395,130.547 0,0.6 17.156,1.091 38.125,1.091 l 38.125,0 0,111.25 0,111.25 56.875,0 56.875,0 0,-60.625 z" fill="#37cfee"/></g></svg>                               
                            </div>
                            <div className="w10/12">
                                <h3 className="text-xl">10 rue Albert Ferrasse, 47550 Boé (près d'Agen)</h3>
                                <hr className="blue"/>
                                <h3 className="text-xl">44 rue de Bayard, 31000 Toulouse</h3>
                            </div>
                          </div>
                          <div className="w-2/3 flex flex-row my-8 justify-start mx-auto">
                              <div className="w-2/12">
                              <svg width="30px" viewBox="0 0 333 416.25"><g><path fill="#37cfee" className="fil0" d="M167 33c73,0 133,60 133,134 0,73 -60,133 -133,133 -74,0 -134,-60 -134,-133 0,-74 60,-134 134,-134zm58 212l22 -22c0,0 3,-7 -2,-13 -5,-5 -32,-19 -32,-19 0,0 -6,-4 -13,4 -8,7 -7,7 -7,7 0,0 -4,3 -9,1 -19,-10 -44,-35 -54,-54 -2,-4 1,-8 1,-8 0,0 0,0 8,-7 7,-8 3,-14 3,-14 0,0 -13,-27 -19,-32 -6,-5 -13,-1 -13,-1l-21 21c-24,49 88,161 136,137z"/></g></svg>
                               </div>
                               <div className="w-10/12">
                               <h3 className="text-xl text-left"><a className="text-bleu hover:text-black" href="tel:0533950030">05 33 95 00 30</a></h3>
                               </div>
                          </div>
                          <div className="w-2/3 flex flex-row my-8 justify-start mx-auto">
                              <div className="w-2/12">
                              <svg width="30px" viewBox="0 0 100 125"><path fill="#37cfee" d="M91.462,32.483c-2.267-5.358-5.511-10.17-9.644-14.303c-4.132-4.132-8.943-7.376-14.303-9.643  C61.967,6.191,56.074,5.001,50,5.001s-11.968,1.19-17.516,3.537c-5.358,2.267-10.171,5.511-14.303,9.643  c-4.133,4.132-7.377,8.944-9.644,14.303C6.191,38.032,5.002,43.925,5.002,50c0,6.075,1.189,11.967,3.536,17.516  c2.267,5.357,5.511,10.17,9.644,14.303c4.132,4.131,8.944,7.375,14.303,9.643c5.548,2.346,11.441,3.537,17.516,3.537  s11.967-1.191,17.516-3.537c5.359-2.268,10.171-5.512,14.303-9.643c4.133-4.133,7.377-8.945,9.644-14.303  c2.347-5.549,3.536-11.441,3.536-17.516C94.998,43.925,93.809,38.032,91.462,32.483z M77.414,66.063  c0,0.201-0.164,0.363-0.365,0.363H22.951c-0.201,0-0.364-0.162-0.364-0.363v-20.91c0-0.131,0.069-0.25,0.182-0.316  c0.112-0.064,0.251-0.064,0.364,0L50,60.295l26.867-15.458c0.113-0.064,0.252-0.064,0.364,0c0.112,0.066,0.183,0.186,0.183,0.316  V66.063z M77.414,38.708c0,0.13-0.07,0.251-0.184,0.315L50.182,54.588c-0.057,0.031-0.119,0.049-0.182,0.049  s-0.125-0.018-0.182-0.049L22.77,39.023c-0.113-0.064-0.183-0.186-0.183-0.315v-4.771c0-0.201,0.163-0.364,0.364-0.364h54.098  c0.201,0,0.365,0.163,0.365,0.364V38.708z"/></svg>              
                               </div>
                               <div className="w-10/12">
                               <h3 className="text-xl text-left"><a className="text-bleu hover:text-black" href="mailto:contact@linkweb.fr">contact@linkweb.fr</a></h3>
                               </div>
                          </div>
                          
                      </div>
                  </section>  */}
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsAgenceWebNice {
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
export default AgenceWebNice;




