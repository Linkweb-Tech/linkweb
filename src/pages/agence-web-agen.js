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

import mac from "../images/agence-web-agen.jpg";
import imac from "../images/agence-web-a-agen.jpg";
import stars from '../images/stars.png';
import arriereplan from "../images/bg-choisir-agence-communication-web.jpg";
import siteinternet from "../images/referencement-site-immobilier.jpg";
import referencement from "../images/freelance.jpg";
import webdesign from "../images/agence-web-specialisee.jpg";




class AgenceWebAgen extends Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Web Agen : Création et référencement de site internet - Linkweb"
                    description="Notre agence web à Agen met tout en oeuvre pour vous proposer une solution web fonctionnelle et adaptée à vos objectifs."
                    url="https://linkweb.fr/agence-web-agen/"
                    nom="Agence Web Agen"
                    slug="agence-web-agen/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Agence web à Agen</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Agence web : refonte, création et référencement de site internet à Agen.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}

                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Vous souhaitez contacter notre agence web à Agen ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md"><strong>Linkweb</strong> conduit tous vos <strong>projets à Agen</strong>, de leur conception à leur mise en oeuvre avec un suivi régulier. Notre équipe vous accompagne dans le choix de <strong>votre stratégie éditoriale et marketing</strong> jusqu’à la mise en route technique de votre projet sur Internet.</p>
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
                    Les équipes de Linkweb sont composées d'experts dans leurs domaines de prédilection pour dynamiser votre communication web et faire de votre projet internet une réussite. 
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence web Agen : votre projet web entre les mains d'experts</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Confier son projet aux professionnels d’une agence web à Agen permet de bénéficier d’une expertise concernant le développement d’une plateforme ergonomique et capable de se hisser en haut des résultats des moteurs de recherche.</h3>
                    </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Stratégie de</span><br /><span className="font-bold text-5xl md:text-6xl"> WEBMARKETING</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg z-50">Linkweb fait partie des <strong className="font-normal"><a href="/agence-web-bordeaux/" className="text-bleu hover:text-white font-bold">agences web proches de Bordeaux</a></strong> qui s’attachent à répondre précisément aux besoins de ses clients. En effet, grâce à nos <strong className="font-normal">expertises dans le web marketing</strong> et notre connaissance d'Internet, nous sommes en mesure de déterminer des solutions pertinentes en fonction des besoins de votre entreprise. De la création de sites internet à la mise en place d’une <strong className="font-normal">stratégie de référencement</strong>, nous vous apportons une réponse concrète selon votre activité et le marché sur lequel vous vous positionnez.<br/><br/>
                        Qu’il s’agisse de publicité en ligne (Google Ads) ou de <strong className="font-normal">référencement naturel</strong> sur Google, nos consultants mettent en place des procédés qui vous permettront d’arriver à vos fins. Nous sommes à votre écoute pour vous apporter les solutions les plus pertinentes en fonction de vos attentes ainsi que des opportunités qui se présentent à vous sur le Web.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Référencement naturel</span><br /><span className="font-bold text-6xl"> SEO</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                        Nos spécialistes du référencement naturel identifient toutes les opportunités de visibilité qui se présentent pour <strong className="font-normal">votre site web</strong>. Chaque jour, ce sont des millions d’utilisateurs qui interagissent avec les moteurs de recherche. C’est pourquoi, il est important de définir une stratégie pertinente pour rendre vos prestations et produits visibles à leurs yeux. De plus, le trafic organique est l’une des premières sources de <strong className="font-normal">trafic sur un site internet</strong>. Ainsi, il est essentiel de songer au référencement SEO dès la création de son site internet. 
                        <br /><br />En générant du trafic sur vos pages web, vous maximisez vos chances d’<strong className="font-normal">attirer de nouveaux clients</strong>. Toutefois, le référencement naturel est une discipline qui demande du temps. C’est pourquoi, il est indispensable de réaliser les bons choix dès le départ. En faisant confiance à une agence, votre référencement sera professionnel.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Campagnes Google </span><br /><span className="font-bold text-6xl">ADWORDS</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                        La <strong className="font-normal">création de campagnes Adwords (Ads)</strong> est une alternative au référencement naturel, mais elle est aussi complémentaire. En effet, se lancer dans la <strong className="font-normal">publicité ciblée en ligne</strong> est une manière pertinente d’obtenir de la visibilité très rapidement lors d'une création de site web. Si ces campagnes Ads ont un coût, notre <strong className="font-normal"><a href="/agence-web-strasbourg/" className="text-bleu hover:text-white font-bold">agence web présente à Strasbourg</a></strong> vous accompagne pour maximiser au mieux vos chances d’obtenir un retour sur investissement avec vos projets web.
                        <br /><br />Investir dans la publicité en ligne sur Google Ads demande d’obtenir une certaine rentabilité. C’est pourquoi, un <strong className="font-normal">expert Adwords</strong> vous accompagne pour paramétrer vos annonces et groupes d’annonces en vue de maximiser vos profits en attirant des utilisateurs prêts à interagir avec votre site internet et à faire appel à vos services.</p>
                    </div>
                </section>
                <section className="-w-full bg-black text-white py-10">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10">
                    <h2 className="century text-3xl md:text-5xl text-white leading-none">L'agence web Linkweb répond à tous types de demandes</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 text-lg pb-0 my-2">
                        <div className="w-full" /*data-aos='zoom-in'*/>
                            <p className="text-md text-center py-12 century">
                                Vous êtes un organisme public ou privé à la recherche d’une <strong><a href="/" className="text-bleu hover:text-white font-bold">agence web à Toulouse</a> ou Agen</strong> pour la mise en place d’une stratégie digitale ? <strong>Linkweb</strong> est à l’écoute de vos besoins pour vous proposer une solution taillée pour vous.</p>
                        </div>
                    </section>
                    <section className="flex flex-col lg:flex-row mt-8 mb-12 my-8 px-4 lg:my-5 lg:px-24">
                        <div className="w-full xl:w-1/2 one px-auto">
                            <div className="flex items-center justify-center xl:items-center flex-col xl:flex-row flex-1">
                                <div className="chiffres mx-auto block century text-bleu -mt-64 mb-3" /*data-aos="fade-up"*/>
                                    1
                                </div>
                                <section className="w-full md:w-1/2 xl:w-1/3 absolute z-10 px-auto absolute px-12 lg:px-24 pt-24">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>JE SUIS UN ORGANISME PUBLIC
                                    </h3>
                                    <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                        Mairie, conseil départemental, établissement culturel : informer les administrés est votre priorité ? Notre <strong>agence de création web</strong> définit des propositions concrètes pour y parvenir. Mettez tous les atouts de votre côté pour <strong>mener votre campagne de communication en ligne</strong>.
                                    </div>
                                    {/* <Button url="/contact-agence-web-toulouse/" text="En savoir plus" color="white" position="center" /> */}
                                    <button
                                        className="link flex  mt-3 items-center text-white text-lg mx-auto block justify-center lg:text-xl"
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = '/contact-agence-web-toulouse/';
                                        }}
                                    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> En savoir plus
                                    </button>

                                </section>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/2 two px-auto">
                            <div className="flex items-center justify-center xl:items-center flex-col xl:flex-row flex-1">
                                <div className="chiffres mx-auto block century text-bleu -mt-64 mb-0" /*data-aos="fade-up"*/>
                                    2
                                </div>
                                <section className="w-full md:w-1/2 xl:w-1/3 absolute z-10 px-auto bsolute px-12 lg:px-24 pt-24">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>JE SUIS UNE ENTREPRISE
                                    </h3>
                                    <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                        TPE, PME, commerçants, l’<strong>agence Linkweb</strong> répond à vos besoins de <strong>visibilité, de notoriété</strong> et de communication web par la <strong>mise en place de stratégies digitales efficaces</strong> et qui vous rapprochent de vos prospects. Nous activons tous les <strong>leviers</strong> pour développer et faire connaître votre <strong>outil en ligne</strong>.
                                    </div>
                                    {/* <Button url="/contact-agence-web-toulouse/" text="En savoir plus" color="white" position="center" /> */}
                                    <button
                                        className="link flex  mt-3 items-center text-white text-lg mx-auto block justify-center lg:text-xl"
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = '/contact-agence-web-toulouse/';
                                        }}
                                    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> En savoir plus
                                    </button>
                                </section>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex align-center my-16 justify-center text-center mb-6">
                        <div className="w-full flex flex-col md:flex-row justify-center">
                            {/* <Link
                                className="century text-sm hover:text-bleu"
                                to="/creation-site-internet-toulouse/"
                            > */}
                            <button
                                className="century text-sm hover:text-bleu"
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = '/creation-site-internet-toulouse/';
                                }}
                            >

                                Je souhaite la création de mon site internet
                            {/* </Link> */}</button>&nbsp;
                            |&nbsp;
                            <button
                                className="century text-sm hover:text-bleu"
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = '/referencement-toulouse/';
                                }}
                            >

                                Je souhaite améliorer la visibilité de mon site existant
                            {/* </Link> */}</button>
                            {/* <Link
                                className="century text-sm hover:text-bleu"
                                to="/referencement-toulouse/"
                            >
                                Je souhaite améliorer la visibilité de mon site existant
                            </Link> */}
                        </div>
                    </section>
                </section>
                
      <section className="my-6 phototext">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-0">
                        <h2 className="century text-3xl md:text-5xl text-black leading-none">Notre agence web est taillée pour votre projet web</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                    </section>
                    <section className="w-full my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Agence web Agen" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10  flex flex-col">
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                    <p className="text-center">+10</p>
                                </div>
                                <div className="w-full px-6 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>+10 ans d'expérience
                                </h3>
                                    <p className="w-full century pb-6 text-lg md:text-xl text-left">Depuis 2008, nous accompagnons nos clients pour développer leur <strong>visibilité sur le Web</strong>.
                                </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">+20</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>+20 TECHNICIENS
                                    </h3>
                                    <p className="w-full century pb-6 text-lg md:text-xl text-justify">Chaque jour, ce sont plus de 20 techniciens qui officient pour rendre <strong>nos sites web performants</strong>.
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">+300</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>+300 sites en gestion
                                    </h3>
                                    <p className="w-full century pb-6 text-lg md:text-xl text-justify">Notre <a href="/agence-web-lyon/" className="text-bleu hover:text-black font-bold">agence web présente à Lyon</a> <strong>crée des sites web</strong> pour des clients d'horizons parfois très différents : TPE, PME, indépendants, etc.
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">+4,6</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>4.6/5 sur Google
                                    </h3>
                                    <p className="w-full century pb-6 text-lg md:text-xl text-justify">Nos clients sont satisfaits du travail engagé sur leur site internet. Note basée sur 116 avis sur Google.
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="flex w-full flex-col mx-auto px-0 py-2 my-2">
                    <section className="text-center text-black text-3xl mx-auto lg:mx-0 century mb-10">
                        <br />
                        <h2 className="century text-3xl md:text-5xl text-black leading-none">Comment travaille notre agence web à Agen ?</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                    </section>
                </section>
                <section className="bloctextimg2 w-full lg:w-10/12 xl:w-8/12 mb-16 mx-auto lg:flex lg:mx-auto xl:w-full flex flex-col lg:flex-row justify-center">
                    <div className="w-full image z-50 lg:w-1/2 xl:w-2/5 flex justify-center lg:mt-48 xl:mt-16 pr-0 md:pr-0 lg:justify-center lg:items-center">
                        <img src={imac} alt="Organisme de formation Qualiopi" style={{ maxHeight: '400px' }} />
                    </div>
                    <div className="text century z-10 w-full text-justify lg:w-3/5 xl:w-3/5 md:p-20 lg:pl-32 p-10 xl:py-24 text-black text-sm xl:text-md" style={{ backgroundColor: '#d3d3d352' }}>
                        <h4 className="century text-xl"><span className="font-bold">En plus de la création de votre site internet, nous définissons votre stratégie de référencement pour générer du trafic qualifié vers votre site internet.</span></h4>
                        <br />
                        <p className="text-lg">
                            Que vous souhaitiez investir dans la <strong>création d’un site internet ou la refonte du site internet</strong> de votre entreprise, notre <strong>agence web</strong> s’attache à vous apporter un conseil en stratégie web pour mener à bien votre projet. Un travail préparatoire est effectué pour cadrer votre stratégie marketing, définir vos objectifs de communication ainsi que vos cibles principales.<br />
                            {/*Le <strong>CPF</strong> permet à chaque actif, dès son entrée sur le marché du travail, d’acquérir des <strong>droits à la formation</strong>, et ce, tout au long de sa carrière professionnelle. Depuis 2019, le CPF est crédité en euros. <br />*/}
                            <br />
                            Nos compétences en développement web ainsi qu’en web marketing nous permettent d’<strong>identifier les meilleures opportunités</strong> de votre marché pour vous offrir la solution la plus pertinente pour vous. Notre agence spécialisée vous oriente vers les solutions les plus à même de répondre à vos objectifs dans le respect de votre budget et de vos ambitions.<br/>
                            <br/>
                            À Linkweb, nous travaillons en étroite collaboration avec nos clients pour fournir un <strong>site web ergonomique</strong>, mais aussi pertinent pour les utilisateurs comme pour les <strong>moteurs de recherche comme Google</strong>.<br />
                            <br/>
                            En cas de modification ou de mise à jour, notre équipe fait preuve de réactivité pour répondre aux mieux à vos attentes, tout en s’assurant de vous livrer une solution fonctionnelle.<br/>
                            <br/>
                            Enfin, en <strong>référencement naturel</strong>, comme en publicité Google Ads, notre équipe de référenceurs est force de proposition avec le souci de faire évoluer votre stratégie avec pour seul objectif d’<strong>élargir votre visibilité en vue d’attirer de nouveaux clients</strong> pour votre entreprise.
                        </p>
                        
                    </div>

                    <br />
                </section>
                <section className="flex w-full flex-col mx-auto px-0 py-6 my-4 lg:my-0">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10 lg:mb-2">
                        <h2 className="century text-3xl md:text-5xl text-black leading-none">Que gagner à lancer sa stratégie digitale ?</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                        <br />
                        <h3 className="text-black text-xl text-center century">Tout ! Ou bien presque. <br />Investir dans la digitalisation de votre société vous confère de nombreux avantages en matière de développement.</h3>
                    </section>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="ÊTRE VISIBLE GRÂCE AU RÉFÉRENCEMENT NATUREL">
                                <p>L’aspect stratégique est essentiel dans la <strong className="font-bold">conception de sites internet</strong>. En effet, c’est dès l’élaboration de <strong>votre projet</strong> que notre <strong>agence de communication digitale</strong> intervient pour <strong className="font-bold">définir votre stratégie SEO</strong>. Nous développons une <strong>arborescence</strong> totalement fonctionnelle et pertinente : <strong>chaque page</strong> dispose d’une fonction précise. Ceci est essentiel dans le cadre du <strong className="font-bold">référencement d'un site internet</strong>.<br />
                                    <br />
                                    En parallèle, les spécialistes de notre <strong>{/*<Link to="/referencement-toulouse/" className="font-bold text-bleu hover:text-black">*/}agence de référencement SEO{/*</Link>*/}</strong> identifient les <strong className="font-bold">expressions clés ou mots-clés ciblés</strong> qui vont déterminer les <strong className="font-bold">objectifs de positionnement de votre stratégie de référencement naturel</strong>. Par la suite, nous définissons un plan d’actions correspondant à vos attentes ainsi qu’à vos moyens pour <strong classname="font-bold">déployer votre projet web</strong>.<br />
                                    <br />
                                    Cependant, s’il est urgent pour vous d’<strong>être visible sur les moteurs de recherche</strong>, nous vous proposons la <strong>{/*<Link to="/agence-adwords-47-31/" className="font-bold text-bleu hover:text-black">*/}création d’une campagne Ads{/*</Link>*/}</strong>, via la plateforme <strong>Google Adwords</strong>, qui vous permettra d’obtenir des résultats plus rapidement grâce au <strong>référencement payant</strong>.<br />
                                    <br />
                                    Notre rôle, en tant qu'<strong><a href="/agence-web-montpellier/" className="text-bleu hover:text-black font-bold">agence web à Montpellier</a>, spécialisée dans la création de sites web</strong>, est de <strong className="font-bold">vous proposer les stratégies les plus performantes</strong>, tout en tenant compte de <strong className="font-bold">vos besoins</strong>. Nous faisons partie des <strong>agences web de France</strong> à placer les besoins de nos clients au centre de nos projets web pour des <strong>réalisations</strong> pertinentes et performantes.
                                    </p>
                            </div>
                            <div label="COMMUNIQUER DE MANIÈRE EFFICACE EN DIRECTION DE VOS CIBLES">
                                <p><strong>Être visible en ligne</strong> permet de faciliter la transmission de l’information. En effet, ceci a pour objectif de <strong>simplifier l’accès à l’information pour un utilisateur</strong>. C’est pourquoi, il est nécessaire d’intégrer la <strong className="font-bold">question du besoin et de l’intention de l’utilisateur</strong>, dès la <strong>création de site internet</strong>. Cela se traduit par un <strong className="font-bold">webdesign ergonomique, intuitif, une identité visuelle et graphique parfaitement reconnaissable ainsi qu’un contenu pertinent</strong>.<br />
                                    <br />
                                    Aussi, l’<strong>accès à l’information</strong> doit être favorisé par la réalisation d’une <strong className="font-bold">expérience utilisateur irréprochable</strong> : <strong>site responsive design</strong>, <strong>maillage interne</strong>, <strong>temps de chargement</strong> limité etc. L’utilisation de <strong>votre charte graphique</strong> et de <strong>votre identité visuelle</strong> (ou identité graphique) nous permet de <strong className="font-bold">créer un outil digital à votre image et au web design sur-mesure</strong> (en totale cohérence visuelle). Cela va permettre de vous rendre identifiable pour l’utilisateur, mais également de vous apporter une <strong>stratégie de communication digitale</strong> en corrélation parfaite avec <strong>votre identité de marque</strong>. Pour ce faire, un <strong>développeur web</strong> de <a href="/agence-web-nice/" className="text-bleu hover:text-black font-bold">notre agence web à Nice</a> effectue un travail précis au niveau de l’<strong>ergonomie, la praticité, l’intuitivité et l'aspect créatif du site</strong>. Ceci vise à <strong className="font-bold">mettre en place un outil utile, original et pertinent pour les visiteurs</strong>.<br />
                                    <br />
                                    Que ce soit à travers l'utilisation de <strong>CMS tels que Joomla, Prestashop, Drupal ou Wordpress</strong>, ou bien via l'<strong>utilisation de frameworks</strong>, <strong className="font-bold">nos spécialistes définiront la meilleure formule pour vous proposer des performances optimales</strong>.
                                    </p>
                            </div>
                            <div label="OBTENIR UN RETOUR SUR INVESTISSEMENT">
                                <p>Chaque projet digital a ses spécificités : un <strong>site e-commerce</strong> cible la <strong>vente en ligne de produits</strong>, un <strong>site vitrine</strong> est plus adapté pour <strong>obtenir des contacts prospects qualifiés</strong> sur Internet. Nous choisissons la formule adaptée pour permettre à <strong>votre société</strong> d’<strong className="font-bold">exploiter tout le potentiel de son marché sur le net</strong>.<br />
                                    <br />
                                    Les <strong>sites internet</strong> que nous créons ont pour objectif d’<strong className="font-bold">obtenir un trafic qualifié et une fréquentation en constante progression</strong> pour votre entreprise. En effet, le <strong>site internet</strong> fait partie des <strong>supports de communication</strong> les plus importants en termes de <strong>webmarketing</strong>. Par ailleurs, nous nous assurons que votre site internet soit bien accessible sur mobile comme sur ordinateur pour un affichage parfaitement adapté à chaque utilisateur grâce au responsive design. Nous effectuons également une prestation de webmaster avec la maintenance de votre site internet pour pallier à tout éventuel problème technique.<br />
                                    <br />
                                    Au sein des <strong><a href="/agence-web-marseille/" className="text-bleu hover:text-black font-bold">agences web à Marseille</a> comme Linkweb</strong> en France, nous privilégions la qualité de votre réalisation. La <strong>création de votre site internet</strong> ou la refonte du site de votre entreprise n’a qu’un seul but : <strong className="font-bold">vous permettre d'atteindre de nouveaux prospects en vue de maximiser vos chances de convertir vos contacts et ainsi augmenter votre chiffre d’affaires.</strong> Ceci doit être permis grâce à la misee en application de votre stratégie de communication web ainsi qu'à la mise en place d'une solution de développement web fonctionnelle.<br />
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
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Votre entreprise est située à Agen ?</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Notre <strong className="font-normal">agence Linkweb</strong> conçoit et mène votre projet web à Agen en Lot-et-Garonne, mais aussi dans toute la France. Profitez de la visibilité offerte par le Web pour dynamiser votre communication et atteindre de nouveaux clients de façon durable.</p>
                            <div className="max-w-xs ml-auto mr-auto md:mr-0 md:ml-0 block">
                                <button
                                    className="font-light mx-auto roundedButton bg-bleu text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = '/contact-agence-web-toulouse/';
                                    }}
                                >CONTACTEZ-NOUS</button>
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
query lastsThreePostsAgenceWebAgen {
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
export default AgenceWebAgen;




