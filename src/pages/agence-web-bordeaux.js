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

import mac from "../images/agence-web-bordeaux.jpg";
import stars from '../images/stars.png';
import arriereplan from "../images/bg-choisir-agence-communication-web.jpg";
import siteinternet from "../images/referencement-site-immobilier.jpg";
import referencement from "../images/freelance.jpg";
import webdesign from "../images/agence-web-specialisee.jpg";




class AgenceWebBordeaux extends Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Web Bordeaux - Création site internet - Linkweb"
                    description="Notre agence web à Bordeaux met tout en oeuvre pour vous proposer une solution web fonctionnelle et adaptée à vos objectifs."
                    url="https://linkweb.fr/agence-web-bordeaux/"
                    nom="Agence Web Bordeaux"
                    slug="agence-web-bordeaux/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Agence web Bordeaux - Création site internet</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Création et refonte de site internet et stratégie web marketing à Bordeaux et dans toute la France</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}

                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Vous souhaitez contacter notre agence web à Bordeaux ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md">Notre <strong className="font-normal">agence spécialisée dans les problématiques du web</strong> vous accompagne pour tous vos projets de <strong className="font-normal">développement et de référencement de sites</strong>. Pour votre entreprise, choisissez des experts du web-marketing.</p>
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
                        Les experts qui composent nos équipes possèdent les connaissances et les compétences nécessaires pour mener à votre projet à la réussite. 
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence web Bordeaux : notre expertise au service de votre projet</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Nous apportons des solutions de communication digitale et un web design fonctionnel pour votre site internet afin de vous permettre de faire toute la différence dans les résultats de recherche des moteurs. Frayez-vous un chemin sur le web grâce aux spécialistes de Linkweb à Bordeaux.</h3>
                    </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Création d'une stratégie de</span><br /><span className="font-bold text-5xl md:text-6xl"> WEBMARKETING</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">Linkweb fait partie des <strong className="font-normal">agences</strong> qui vous proposent une stratégie adaptée à chacune de vos attentes. Votre satisfaction est la priorité de notre <strong className="font-normal">équipe d’experts</strong>. Grâce à un conseil adapté, bénéficiez d’un <strong className="font-normal">site internet sur-mesure</strong>, e-commerce ou vitrine (Wordpress) et gagnez en <strong className="font-normal">visibilité sur les moteurs</strong>. Le développement que vous propose Linkweb sur le secteur de <strong className="font-normal">Bordeaux</strong> notamment, est un travail alliant responsive design, contenus optimisés, image de marque et identité visuelle.<br/><br/>
                        Tout est mis en œuvre pour vous proposer une conception adaptée à votre entreprise et vous apporter de <strong className="font-normal">nouveaux clients</strong> en vous permettant de vous démarquer.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Stratégie de référencement </span><br /><span className="font-bold text-6xl"> NATUREL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                        Notre <strong className="font-normal">agence</strong> vous accompagne dans la <strong className="font-normal">conception de sites ergonomiques</strong> mais également dans votre <strong className="font-normal"><a href="/agence-web-lyon/" className="text-bleu hover:text-white font-bold">stratégie de communication digitale</a></strong>. En définissant vos objectifs avec un spécialiste du digital, mettez en place la solution la plus appropriée pour votre <strong className="font-normal">visibilité sur le web</strong>. Votre <strong className="font-normal">site en ligne</strong> est pertinent, il propose un contenu textuel optimisé et répond aux questions que se posent les utilisateurs. Ces paramètres jouent un rôle dans le positionnement des pages de votre outil dans les <strong className="font-normal">pages de résultats (SERP) de Google</strong>. 
                        <br /><br />Grâce à votre solution de référencement personnalisée, atteignez la <strong className="font-normal">première page des suggestions des moteurs</strong>. L’expertise Linkweb vous aide à atteindre vos objectifs durablement.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Réalisation de campagnes Google </span><br /><span className="font-bold text-6xl">ADWORDS</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                        Linkweb se démarque des autres <strong className="font-normal">agences</strong> par sa grande capacité d’écoute et sa réactivité. Chacun de vos besoins en matière de communication digitale est une priorité pour l’<strong className="font-normal">équipe de notre agence</strong>. De ce fait, la <strong className="font-normal">régie publicitaire Ads (SEA)</strong> est une formule proposée aux entreprises recherchant un <strong className="font-normal">retour sur investissement</strong> rapide et ponctuel. Ce service sur-mesure positionne temporairement votre site en tête de page des résultats des moteurs pour <strong className="font-normal">générer un trafic efficace</strong>.
                        <br /><br />Site vitrine, site e-commerce, votre site personnalisé s’intègre dans une <strong className="font-normal">stratégie adaptée à vos projets</strong>. Notre <a href="/agence-web-marketing-toulouse/" className="text-bleu hover:text-white font-bold">agence web Toulouse</a> maîtrise les outils les plus performants pour vous apporter toutes les retombées souhaitées.</p>
                    </div>
                </section>
                <section className="max-w-4xl w-full mx-auto px-4 py-0 my-0">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
            Disposez d’un support graphique et intuitif à l’image de votre entreprise pour booster votre activité 
        </h2>
        <hr className="blue"></hr>
      </section>
      <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
        <div className="w-full xl:w-1/3 one px-auto">
          <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                <span className="text-bleu">/</span>JE SOUHAITE EN SAVOIR PLUS SUR LES PRESTATIONS DE LINKWEB
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                Linkweb s’adresse aux sociétés présentes sur le secteur de <strong className="font-normal">Bordeaux</strong>, mais également sur toute la France pour apporter la <strong className="font-normal">meilleure visibilité à chaque projet</strong>. Les services proposés par notre équipe ont pour but de vous permettre d’atteindre vos objectifs. Pour une refonte, une création, votre communication, une <strong className="font-normal"><a href="/agence-web-marseille/" className="text-bleu hover:text-black font-bold">solution de web-marketing</a></strong> (SEO ou SEA), les outils et la méthodologie sont adaptés à vos besoins. Identité visuelle, responsive design, gestion de contenu, les <strong className="font-normal">réalisations</strong> sont multiples et personnalisées.
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
                <span className="text-bleu">/</span>JE SOUHAITE ÊTRE ACCOMPAGNÉ POUR TROUVER MA FORMULE
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                Les <strong className="font-normal">conseils et l’expertise de Linkweb</strong> permettent de rendre vos <strong className="font-normal">outils de communication</strong> plus visibles. L’accompagnement proposé par notre <strong className="font-normal">agence digitale</strong> est complet, il se fait en toute transparence et vous offre un regard régulier sur les avancées de votre <strong className="font-normal">site en ligne</strong>. Nous mettons tout en place pour vous apporter les solutions les plus pertinentes et vous faire figurer en <strong className="font-normal">première page de résultats de recherche des moteurs</strong>.
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
                <span className="text-bleu">/</span>JE DONNE VIE À MON PROJET AVEC DES EXPERTS DU DIGITAL
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                La <strong className="font-normal">conception graphique</strong> de votre site internet, votre image de marque, et la stratégie en place sont autant de paramètres essentiels pour <strong className="font-normal">votre projet</strong>. Il doit retranscrire votre professionnalisme et vos valeurs tout en générant des contacts. C’est pour cette raison que les <strong className="font-normal"><a href="/agence-web-nice/" className="text-bleu hover:text-black font-bold">équipes de Linkweb</a></strong> oeuvrent à réaliser un site en ligne performant. Linkweb se compte parmi les <strong className="font-normal">agences web</strong> qui veillent au moindre détail. Dans nos réalisations, rien n’est laissé au hasard : mettez toutes vos chances de votre côté en faisant appel à un <strong className="font-normal">prestataire spécialisé</strong>.
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
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence Web Bordeaux : notre agence digitale est conçue pour votre projet web de création de site internet à Bordeaux</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">De la conception au développement de votre projet, notre équipe vous accompagne pour vous apporter un support de communication performant, fonctionnel et adapté à vos beoins.</h3>
                    </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Agence Web Bordeaux" />
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
                                    <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" >Voilà plus de dix ans que nous accompagnons les professionnels dans le <strong className="font-normal">développement de leur visibilité sur Internet</strong>. À <strong className="font-normal">Bordeaux</strong> comme partout en France, nous conseillons nos clients depuis 2008.</p>
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
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Ce sont tous les jours plus d’une vingtaine de spécialistes qui œuvrent à <strong className="font-normal">rendre vos sites plus performants</strong> afin de vous apporter des résultats concrets et pertinents. </p>
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
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Nous concevons des <strong className="font-normal">sites internet</strong> adaptés, pour des prestataires d’horizons très différents : des indépendants comme des PME ou des TPE, etc.</p>
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
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Nos <strong className="font-normal">clients</strong> sont ravis de nos prestations de <strong className="font-normal"><a href="/agence-web-montpellier/" className="text-bleu hover:text-black font-bold">création web</a></strong> et ils le montrent, notre note Google est calculée à partir de 108 avis sur notre fiche.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence web Bordeaux : notre expertise digitale au service de votre entreprise</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Digitaliser votre entreprise peut être un atout conséquent pour atteindre une notoriété intéressante et dynamiser votre activité.</h3>
                    </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="DÉPLOYEZ VOTRE INFLUENCE ET ATTIREZ LA CURIOSITÉ DES UTILISATEURS">
                                <p>L'élaboration d’une stratégie personnalisée est essentielle pour se faire une place intéressante dans les <strong className="font-normal">pages de résultats des moteurs de recherche</strong>. De ce fait, nos consultants travaillent à mettre en place la meilleure <strong className="font-normal">stratégie de communication en ligne</strong> pour votre <a href="/agence-web-strasbourg/" className="text-bleu hover:text-black font-bold">projet digital</a>. Grâce à la conception d’une arborescence complète et stratégique, chaque <strong className="font-normal">page web</strong> possède une fonction qui lui est propre. 
                                <br/><br/>
                                Les référenceurs Linkweb déterminent les <strong className="font-normal">leviers</strong> à activer pour permettre à votre site d’atteindre le positionnement escompté dans les <strong className="font-normal">SERP des moteurs de recherche</strong>.</p>
                            </div>
                            <div label="GÉNÉREZ UN TRAFIC PERTINENT ET QUALIFIÉ GRÂCE À VOTRE SITE">
                                <p>
                                <strong className="font-normal">Être visible</strong> est essentiel pour transmettre plus efficacement l’information aux potentiels prospects. L'objectif du <strong className="font-normal">référencement</strong> est de simplifier l’accès au contenu recherché par les utilisateurs. C’est pour cette raison qu’il est important d’inclure la question du besoin et de l’<strong className="font-normal">intention de l’utilisateur</strong> dès la réalisation de votre site. 
                                <br/><br/>
                                Parmi les <strong className="font-normal">agences</strong> existantes, Linkweb réalise votre site en s'assurant de son <strong className="font-normal">ergonomie</strong>, mais également de la <strong className="font-normal">fluidité de navigation</strong>. Quant au contenu, il est conçu pour être optimal vis-à-vis des <strong className="font-normal">moteurs</strong> et pertinent pour les utilisateurs. Aussi, il doit mettre en en valeur vos différents savoir-faire.
                                </p>
                            </div>
                            <div label="AUGMENTEZ VOTRE CHIFFRE D'AFFAIRES">
                                <p>En fonction des projets, certaines spécificités interviennent. De ce fait, un <strong className="font-normal">site e-commerce</strong> est approprié pour la vente de produits sur Internet, quand un <strong className="font-normal">site vitrine</strong> sera plus adapté à la présentation de ses prestations et informations pratiques. En fonction des caractéristiques de <strong className="font-normal">votre projet</strong>, nous vous suggérons les solutions les plus adaptées à vos besoins. Dynamisez l’activité de votre société en exploitant tout le potentiel de votre <strong className="font-normal">marché sur le web</strong>. 
                                    <br/><br/>
                                    Nous tenons à privilégier la qualité pour vous permettre d'<strong className="font-normal">accéder à un trafic</strong> en constante augmentation. Obtenez des performances de manière durable grâce au panel de <strong className="font-normal">services</strong> de Linkweb.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="w-full bg-black flex flex-col md:flex-row">
                    <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                    </div>
                    <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Notre savoir-faire dans le domaine du web au service de votre professionnalisme</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Notre <strong className="font-normal">agence Linkweb à Bordeaux</strong> intervient sur toute la France pour fournir un service des plus complets aux entreprises de tous les horizons. Domptez le domaine du <strong className="font-normal">Web</strong> et développez l’activité de votre entreprise de manière durable.</p>
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
query lastsThreePostsAgenceWebBordeaux {
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
export default AgenceWebBordeaux;




