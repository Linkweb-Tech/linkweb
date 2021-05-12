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

import mac from "../images/agence-web-montpellier.jpg";
import stars from '../images/stars.png';
import arriereplan from "../images/bg-choisir-agence-communication-web.jpg";
import siteinternet from "../images/projet-web-montpellier.jpg";
import referencement from "../images/referencement-web-montpellier.jpg";
import webdesign from "../images/agence-web-specialisee.jpg";




class AgenceWebMontpellier extends Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Web Montpellier - Projets sur-mesure - Linkweb"
                    description="Notre agence web à Montpellier met tout en oeuvre pour vous proposer une solution web fonctionnelle et adaptée à vos objectifs."
                    url="https://linkweb.fr/agence-web-montpellier/"
                    nom="Agence Web Montpellier"
                    slug="agence-web-montpellier/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Agence web Montpellier</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Agence spécialisée dans le référencement web, la refonte et la création de site internet</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}

                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Vous souhaitez contacter notre agence web à Montpellier ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md">Notre <strong className="font-normal"><a href="/agence-digitale-toulouse/" className="text-bleu hover:text-black font-bold">agence web Toulouse</a></strong> vous propose des services de <strong className="font-normal">développement sur-mesure</strong> pour répondre à tous vos besoins en termes de <strong className="font-normal">communication digitale</strong>.</p>
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
                        Linkweb, à Montpellier, fait partie des agences qui mettent tout en œuvre pour vous apporter la solution de web-marketing qui vous correspond.  
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence Web Montpellier : nous sommes à votre écoute pour vous fournir une stratégie digitale adaptée à vos besoins</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Linkweb intervient à Montpellier comme partout en France et vous propose des prestations adaptées à vos ambitions et vos besoins. Notre priorité est de vous apporter toute notre expertise pour la réalisation de votre projet.</h3>
                    </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Refonte et création de sites web </span><br /><span className="font-bold text-5xl md:text-6xl">FONCTIONNELS</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">Les <strong className="font-normal"><a href="/agence-web-strasbourg/" className="text-bleu hover:text-black font-bold">équipes Linkweb</a></strong> vous accompagnent pour donner vie à votre <strong className="font-normal">projet sur le web</strong>. Site vitrine ou e-commerce, vous disposez d’un site performant et pensé pour vous grâce au travail de l’<strong className="font-normal">équipe de développement</strong> et à la <strong className="font-normal">stratégie de référencement</strong> qui vous est proposée par les référenceurs de l’agence. Votre <strong className="font-normal">site en ligne</strong> reprend votre identité visuelle, il présente une <strong className="font-normal">image de marque</strong> qui vous est propre et qui se démarque des autres.<br/><br/>
                        Responsive design et webdesign sont des clefs importantes pour fournir une <strong className="font-normal">expérience utilisateur</strong> optimale sur les sites. Gagnez en visibilité et générez de l'activité grâce à la qualité de votre support graphique et visuel.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Sratégie de contenu pour référencement</span><br /><span className="font-bold text-6xl"> NATUREL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">
                        Votre <strong className="font-normal"><a href="/agence-web-bordeaux/" className="text-bleu hover:text-black font-bold">projet de communication web</a></strong> implique de vous faire une place de choix au sein des <strong className="font-normal">résultats des moteurs de recherche</strong> ? L’interface visuelle et ergonomique dont vous disposez se doit d’être parmi les plus visibles et les plus attirantes pour l’utilisateur. Grâce à une <strong className="font-normal">stratégie de référencement naturel SEO</strong>, vous bénéficiez d’un contenu rédigé pour votre entreprise et qui répond aux critères de l’optimisation demandée par les moteurs pour favoriser un classement en <strong className="font-normal">première page</strong> de leurs suggestions.  
                        <br /><br />La conception de <strong className="font-normal">contenus optimisés</strong> est une des solutions les plus pertinentes pour un référencement durable dans le temps et qui portera ses fruits de manière pérenne.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Campagnes Adwords </span><br /><span className="font-bold text-6xl">SUR-MESURE</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">
                        Le <strong className="font-normal">référencement payant</strong> que permet Adwords est une solution qui vous est proposée lorsque votre <strong className="font-normal">retour sur investissement</strong> de veut urgent. Cette campagne de communication publicitaire vous permet de vous faire une place ponctuelle en tête de <strong className="font-normal">première page des résultats des moteurs comme Google</strong>. Notre <strong className="font-normal">agence web</strong> vous apporte son conseil et son expertise pour utiliser stratégiquement ce type de référencement.
                            <br /><br />Pour être plus visible temporairement et attirer l'œil de <strong className="font-normal">nouveaux clients</strong> plus facilement, les solutions que vous proposent nos équipes sont adaptées à vos attentes.</p>
                    </div>
                </section>
                <section className="max-w-4xl w-full mx-auto px-4 py-0 my-0">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
            Linkweb offre aux entreprises <span className="text-bleu">la visibilité</span> qu'elles méritent
        </h2>
        <hr className="blue"></hr>
      </section>
      <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
        <div className="w-full xl:w-1/3 one px-auto">
          <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                <span className="text-bleu">/</span>JE SOUHAITE DÉCOUVRIR LES SERVICES DE LINKWEB
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                L'<strong className="font-normal"><a href="/agence-web-lyon/" className="text-bleu hover:text-black font-bold">agence internet Linkweb</a></strong> vous suggère de nombreuses formules pour vous accompagner dans la création, la refonte et le <strong className="font-normal">référencement de sites web</strong>. Découvrez avec une équipe experte comment mener à bien votre projet et dynamiser l’<strong className="font-normal">activité de votre entreprise</strong>. Optimisation de contenu, webdesign et design responsive, la stratégie que Linkweb vous propose à <strong className="font-normal">Montpellier</strong> et sur tous les secteurs de France, est pensée pour vous permettre d’atteindre vos objectifs.
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
                <span className="text-bleu">/</span>JE TROUVE UNE SOLUTION QUI RÉPOND À MES BESOINS
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                De par son rôle de conseil, otre équipe définit le service le plus pertinent pour vous et se charge de la <strong className="font-normal">mise en application de votre <a href="/agence-web-nice/" className="text-bleu hover:text-black font-bold">stratégie web</a></strong>. Linkweb met tout en œuvre pour vous apporter une place bien visible dans les suggestions d’un <strong className="font-normal">moteur de recherche comme Google</strong> et vous apporter de <strong className="font-normal">nouveaux clients</strong> cibles. Votre support est étudié et analysé grâce à nos <strong className="font-normal">outils performants</strong> pour apporter une solution de <strong className="font-normal">marketing digital</strong> bénéfique à votre entreprise.
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
                <span className="text-bleu">/</span>JE FAIS LE CHOIX D'EXPERTS DU WEB POUR MON PROJET
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                La <strong className="font-normal">réalisation de votre projet</strong> est étudiée pour mener à une solution performante grâce à la collaboration entre le <strong className="font-normal">service de développement</strong> et le <strong className="font-normal">service de référencement</strong> de Linkweb. Tous les leviers de la <strong className="font-normal">communication digitale</strong> sont activés pour votre support de communication grâce à un <a href="/agence-web-marseille/" className="text-bleu hover:text-black font-bold">expert du web</a>. La mise en place de votre <strong className="font-normal">stratégie web-marketing</strong> est réalisée dans l’écoute et le conseil pour vous apporter tous les résultats escomptés. Identité visuelle, service de gestion de contenu, design de site, Linkweb fait partie des <strong className="font-normal">agences de France</strong> qui ne laissent rien au hasard.
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
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence web Montpellier : notre agence web donne vie à vos projets sur Internet</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Sur le marché des agences de France, Linkweb se démarque de par son expérience, son savoir-faire et son professionnalisme. Les équipes de l’agence sont à votre écoute pour vous mener, à travers leurs réalisations, à la réussite de tous vos projets.</h3>
                    </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Agence Web Montpellier" />
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
                                    <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" >Nous travaillons depuis 2008 à fournir tout l’accompagnement nécessaire à nos clients, pour leur <strong className="font-normal">conception web</strong> et leur <strong className="font-normal">communication sur Internet</strong>.</p>
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
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Ce sont plus de 20 experts dans le milieu du <strong className="font-normal">digital</strong> qui activent tous les leviers nécessaires pour fournir toujours plus de performances à vos sites.</p>
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
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Prestataires en freelance, PME, TPE, des entreprises de tous les horizons bénéficient des <strong className="font-normal">solutions de Linkweb</strong> pour leurs sites internet. </p>
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
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">La note attribuée à l’<strong className="font-normal">agence</strong> sur Google est basée sur 108 avis reçus. Nos clients sont satisfaits de nos services et ils le montrent !</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence Web Montpellier : découvrez les avantages du web marketing pour votre entreprise</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Grâce aux compétences des développeurs Linkweb et à leur maîtrise des outils comme Wordpress ou du code HTML, choisissez de disposer d’un support performant. Bénéficiez de services complets pour profiter d’un retour sur investissement intéressant et rentabiliser votre site web.</h3>
                    </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="DEVENEZ PLUS VISIBLE : CHOISISSEZ LE RÉFÉRENCEMENT QUI VOUS CORRESPOND">
                                <p>En favorisant l’<strong className="font-normal">expérience utilisateur</strong> grâce au webdesign de votre site vitrine, e-commerce ou sur-mesure, vous optimisez vos chances d’apparaître en tête des <strong className="font-normal">SERP</strong>. Les entreprises qui se démarquent sur le web par leur identité graphique et éditoriale possèdent toutes leurs chances d’acquérir un <strong className="font-normal">trafic pertinent</strong> et de profiter d’un <strong className="font-normal">taux de conversion</strong> optimal.</p>
                            </div>
                            <div label="GÉNÉRER DE L'ACTIVITÉ SUR LE WEB : DÉFINISSEZ VOS CIBLES ET OBTENEZ UN TRAFIC PERTINENT">
                                <p>
                                En offrant un <strong className="font-normal">tunnel de navigation fluide et intuitif</strong> aux utilisateurs, permettez-leur de trouver toutes les réponses qu’ils recherchent et enregistrez une transformation intéressante. L’interface responsive dont vous disposez doit vous permettre de tirer bénéfice du <strong className="font-normal">trafic de votre site</strong>. Une fois vos cibles de clientèle définies, votre <strong className="font-normal">support en ligne</strong> bénéficie de stratégies spécialement conçues pour développer son activité.
                                </p>
                            </div>
                            <div label="BOOSTER VOTRE CHIFFRE D'AFFAIRES : RENTABILISEZ VOTRE SITE GRÂCE À VOTRE STRATÉGIE DE MARKETING">
                                <p>Apportez à votre entreprise une <strong className="font-normal">notoriété</strong> nouvelle pour maximiser votre <strong className="font-normal">taux de conversion</strong> lors des visites des internautes sur vos pages. L’interface que vous proposez est un <strong className="font-normal">levier webmarketing</strong> des plus efficaces s’il est confectionné par des <strong className="font-normal">experts</strong>. Faites confiance à Linkweb à <strong className="font-normal">Montpellier</strong> et partout en France pour permettre à vos <strong className="font-normal">projets</strong> de vous apporter un chiffre d’affaires important et dynamiser l’activité de votre société.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="w-full bg-black flex flex-col md:flex-row">
                    <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                    </div>
                    <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Faites le choix des expertises de notre agence pour atteindre vos objectifs</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Parmi les <strong className="font-normal">agences de France</strong>, Linkweb se démarque de par sa capacité d’écoute et sa réactivité sans faille. Nos équipes vous apportent toutes les formules qui répondent à vos besoins et vous accompagnent dans la réussite de votre <strong className="font-normal">projet</strong>.</p>
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
query lastsThreePostsAgenceWebMontpellier {
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
export default AgenceWebMontpellier;




