import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RoundButtonPages from "../components/roundButtonPages";
import RoundButtonPagesMail from "../components/roundButtonPagesMail";
import Accordion from '../components/accordion';
import "../scss/global.scss";
import "../scss/info.scss";

import Bg from "../images/agence-de-communication-agen.jpg";
import imac from "../images/agence-communication-agen.jpg";
import mac from "../images/agence-communication-digitale-toulouse.jpg";
import lious from "../images/lious-compagnie.png";
import valognes from "../images/valognes-menuiserie.png";
import savi from "../images/savi.png";
import siteinternet from "../images/agence-developpement-web.jpg";
import referencement from "../images/freelance.jpg";
import socialmedia from "../images/social-media.jpg";
import ads from "../images/google-ads.jpg";
import Elsa from "../images/elsa-img.png";
import Marine from "../images/marine-img.png";
import Nicolas from "../images/nicolas-img.png";
import Clarisse from "../images/clarisse-img.png";

// import bgDev from '../images/bg-dev.jpg';
import bgDev from '../images/cta-background-agence-web.jpg';
import scroll from "../images/motiontest.svg";

class AgenceCommunicationAgen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence de communication à Agen - Linkweb"
                    description="Linkweb est une agence de communication digitale située à Agen : création de site internet, référencement naturel, community management."
                    url="https://linkweb.fr/agence-communication-agen/"
                    nom="Agence communication Agen"
                    slug="agence-communication-agen/"
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
                <section className="flex items-center w-full mx-auto pb-0 mt-40 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + Bg + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                        {/*<img  src={googlePartner} alt="Référencement Toulouse" style={{ width: '200px' }} />*/}

                        <div className="w-full lg:w-full flex justify-center lg:justify-center">
                            <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Agence de Communication à Agen</h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Linkweb est une agence web digitale spécialisée dans la communication globale et le marketing digital</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-full flex flex-col lg:flex-row justify-center pb-24 lg:justify-center mx-auto" style={{ maxWidth: '460px' }}>
                            <RoundButtonPages url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonPagesMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                    <div className="w-full flex items-end justify-center mx-auto block pb-16 mt-16">
                        <img src={scroll} alt="Scroll" width="60px" />
                    </div>

                </section>
                <nav aria-label="breadcrumbs" className="w-full bg-bleu century py-2 pl-0 mb-24 md:pl-48">
                        <Link to="/" className="px-4 text-md lg:text-lg text-white hover:text-black">Agence web</Link> <span className=" text-lg text-black"> / </span>
                        <span className="px-4 text-md lg:text-lg text-white"> Agence Communication Agen</span>
                </nav>
                <section className=" w-full mx-auto px-4 py-0 my-0">
                          <h2
                            /*data-aos='fade-right'*/ className="text-center text-black text-4xl century"
                          >
                            Pourquoi choisir notre{" "}
                            <span className="font-bold text-bleu">agence de communication à Agen</span>{" "}
                         ?
                          </h2>
                          <hr className="blue"></hr>
                          <h3
                            /*data-aos='fade-left'*/ className="text-xl text-grey text-center century italic pb-2"
                          >
                            Notre savoir-faire n’est pas une compétence, il est humain.
                          </h3>
                        </section>
                        <section className="w-full flex flex-col py-10 lg:flex-row justify-center items-center century">
                            <div className="w-full sm:w-1/3" style={{ background: '#000000ad url(' + imac + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', minHeight:'450px', height:'450px' }}>
                            </div>
                            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 p-10" style={{backgroundColor: "#d3d3d352"}}>
                            <h4 className="century text-lg">
                              <span className="font-bold">
                              Vous cherchez une agence de communication à Agen capable de concevoir une stratégie digitale performante et adaptée à vos besoins ?
                              </span>
                            </h4>
                            <br />
                            <p className="font-normal" style={{ fontSize: "16px" }}>
                                En tant qu’<strong className="font-normal">agence de conseil en communication</strong> implantée au cœur d’Agen, nous accompagnons les entreprises locales dans la <strong className="font-normal">création de sites internet</strong>, le <strong className="font-normal">référencement naturel (SEO)</strong>, le <strong className="font-normal">community management</strong> et la gestion de campagnes <strong className="font-normal">Google Ads</strong> et <strong className="font-normal">Social Ads</strong>.
                              <br />
                              <br />
                              Avec nos <strong className="font-normal">experts SEO</strong>, <strong className="font-normal">community managers</strong>, <strong className="font-normal">développeurs</strong> et <strong className="font-normal">chefs de projet</strong>, nous passons vite de la stratégie à l’action pour booster <strong className="font-normal">votre image</strong> et votre visibilité sur les <strong className="font-normal">réseaux sociaux</strong> comme sur <strong className="font-normal">Google</strong>.
                              <br />
                            </p>
                            </div>
                        </section>
                        <section className="bg-white sidetitle mt-16 mb-10">
                                                <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Notre savoir-faire au service de votre communication en ligne</h2>
                                                        <br />
                                                        <div className="line-title my-4 ">
                                                            <br />
                                                            <hr className="w-1/2 border-bleu lg:w-1/12" />
                                                            <br />
                                                            <h3 /*data-aos='fade-left'*/ className="text-md text-black century pb-0">Notre <Link to="/" className="text-bleu hover:text-black font-bold">agence web</Link> maîtrise l'ensemble des compétences pour propulser votre communication en ligne.</h3>
                                                        </div>
                                                </section>
                                                <section className="w-full my-10 flex flex-col lg:flex-row justify-center flex-wrap">
                                                    <div className="blochover mx-0 lg:mx-6 my-6 w-full lg:w-1/5 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                                                        <h3 className="text-3xl titrehover text-center century leading-tight px-6">Création de site internet & développement web<hr className="border-solid mt-3 mx-auto border-2 w-1/6 border-bleu" style={{marginLeft:'auto', marginRight:'auto'}}/></h3>
                                                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                                                        Nous concevons des <strong className="font-normal">sites vitrines</strong>, <strong className="font-normal">sites e-commerce</strong> et projets web sur-mesure en <strong className="font-normal">responsive design</strong>, pensés pour l’<strong className="font-normal">expérience utilisateur</strong> et optimisés pour le <strong className="font-normal">référencement SEO</strong>.
                                                        <br/><br/>Que vous ayez besoin d’un <strong className="font-normal">nouveau site internet</strong>, d’une <strong className="font-normal">refonte de site</strong>, notre <strong className="font-normal"><Link to="/agence-web-agen/" className="text-bleu hover:text-white font-bold">agence web à Agen</Link></strong> est spécialisée dans la conception et la réalisation de <strong className="font-normal">supports de communication digitaux</strong>.
                                                        </p>
                                                    </div>
                                                    <div className="blochover mx-0 lg:mx-6 my-6 w-full lg:w-1/5 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                                                        <h3 className="text-3xl titrehover text-center century leading-tight px-6">Référencement naturel & visibilité sur Google <hr className="border-solid mt-3 mx-auto border-2 w-1/6 border-bleu" style={{marginLeft:'auto', marginRight:'auto'}}/></h3>
                                                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                                                        Notre <strong className="font-normal">agence digitale</strong> met en place une stratégie de <strong className="font-normal">référencement SEO</strong> sur les <strong className="font-normal">moteurs de recherche</strong>.
                                                        <br/><br/>Grâce à une méthodologie basée sur l’<strong className="font-normal">audit</strong>, la <strong className="font-normal">réflexion stratégique</strong> et l’<strong className="font-normal">optimisation éditoriale</strong>, nous améliorons la visibilité de votre entreprise et travaillons votre <strong className="font-normal">e-réputation</strong>.
                        
                                                        </p>
                                                    </div>
                                                    <div className="blochover mx-0 lg:mx-6 my-6 w-full lg:w-1/5 text-white" style={{ backgroundImage: 'url(' + socialmedia + ')' }}>
                                                        <h3 className="text-3xl titrehover text-center century leading-tight">Community <br/>Management <hr className="border-solid mt-3 mx-auto border-2 w-1/6 border-bleu" style={{marginLeft:'auto', marginRight:'auto'}}/></h3>
                                                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                                                        Nos <strong className="font-normal">community managers</strong> donnent vie à vos réseaux sociaux : création de contenus engageants, animation quotidienne et campagnes social media percutantes. <br/><br/>
                                                        Nous vous aidons à capter l’attention, créer du lien et fidéliser votre communauté en ligne.
                                                        </p>
                                                    </div>
                                                    <div className="blochover mx-0 lg:mx-6 my-6 w-full lg:w-1/5 text-white" style={{ backgroundImage: 'url(' + ads + ')' }}>
                                                        <h3 className="text-3xl titrehover text-center century leading-tight">Google Ads, Social Ads & webmarketing <hr className="border-solid mt-3 mx-auto border-2 w-1/6 border-bleu" style={{marginLeft:'auto', marginRight:'auto'}}/></h3>
                                                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                                                        Notre <strong className="font-normal">agence de publicité digitale</strong> active les bons <strong className="font-normal">leviers webmarketing</strong> pour générer du trafic qualifié.
                                                        <br/><br/>Qu’il s’agisse de <strong className="font-normal">campagnes Adwords</strong>, de <strong className="font-normal">publicité sur les réseaux sociaux</strong>, d’<strong className="font-normal">emailing</strong> ou de <strong className="font-normal">mailing ciblé</strong>, nous vous proposons un <strong className="font-normal">plan média</strong> adapté à vos objectifs.
                                                        </p>
                                                    </div>
                                                </section>
                                                <button
                                                    className="link flex  mt-3 items-center century text-black text-lg mx-auto block justify-center lg:text-xl"
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        window.location.href = '/contact-agence-web-toulouse/';
                                                    }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792">
                                                    <path
                                                        d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                                                    </svg>
                                                    Demander un devis gratuit
                                                </button>
                                        </section>
                                        <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Votre agence de communication à Agen répond à vos questions !</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                    </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="POURQUOI FAIRE APPEL À UNE AGENCE DE COMMUNICATION À AGEN ?">
                                <p>Pour bénéficier d’une expertise complète en communication digitale et globale, gagner en notoriété et développer votre activité avec des outils de communication efficaces. Vous pouvez également faire appel à notre <Link to="/agence-communication-toulouse/" className="text-bleu font-bold hover:text-black">agence de communication à Toulouse</Link> pour mener votre projet.</p>
                            </div>
                            <div label="QUELLE EST LA DIFFÉRENCE ENTRE SEO ET GOOGLE ADS ?">
                                <p>Le référencement naturel (SEO) agit sur le long terme, tandis que les campagnes Adwords génèrent du trafic immédiat via la publicité payante.</p>
                            </div>
                            <div label="COMBIEN COÛTE LA CRÉATION D'UN SITE INTERNET AVEC LINKWEB ?">
                                <p>Le tarif dépend de votre projet (site vitrine, e-commerce, refonte). Nos consultants en communication établissent un devis personnalisé.</p>
                            </div>
                            <div label="EST-IL POSSIBLE DE CONFIER TOUTE SA COMMUNICATION DIGITALE ET LE COMMUNITY MANAGEMENT À LINKWEB ?">
                                <p>Oui. Notre agence de communication accompagne vos projets web et la gestion de vos réseaux sociaux afin de bâtir une stratégie harmonisée, performante et adaptée à vos objectifs.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                
                <section className="bg-white sidetitle mt-24 py-10">
                    <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-0 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-4xl leading-none">Linkweb, c’est avant tout une équipe humaine et engagée</h2>
                        <br />
                        <div className="line-title my-4 ">
                            <br />
                            <hr className="w-1/2 border-bleu lg:w-1/12" />
                            <br />
                            <h3 /*data-aos='fade-left'*/ className="text-xl text-black century pb-0">Notre équipe est composée d'experts issus des différents domaines de la communication web pour votre proposer la meilleure solution pour votre entreprise.</h3>
                        </div>
                    </section>
                    <section className="flex justify-center flex-wrap flex-col items-center">
                        <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                            <div className="w-full svgtransform flex flex-col lg:flex-row md:w-2/5 mx-auto items-center px-2 mb-10 md:mb-0 text-black century text-center lg:text-left">
                                <br />
                                <img src={Marine} alt="Référencement SEO" className="mb-4" style={{ maxHeight: '250px' }} /> 
                                <div>                               
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Marine</span></h4>
                                <p><strong className="font-normal">Responsable du service référencement</strong>, elle met son expertise SEO au service de nos clients pour booster leur visibilité en ligne.</p>
                                </div>
                            </div>
                            <div className="w-full svgtransform flex flex-col lg:flex-row md:w-2/5 mx-auto items-center px-2 mb-10 md:mb-0 text-black century text-center lg:text-left">
                                <img src={Elsa} alt="Cheffe de projet web" className="mb-4" style={{ maxHeight: '250px' }} />                                 
                                <div>
                                    <h4 className="font-bold century text-bleu"><span className="font-bold">Elsa</span></h4>
                                    <p>Elsa coordonne l’équipe, organise les étapes et reste à l’écoute pour que tout se passe <strong className="font-normal">simplement et efficacement</strong> dans votre projet web.</p>
                                </div>
                            </div>
                            </div>
                            <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                            <div className="w-full svgtransform flex flex-col lg:flex-row md:w-2/5 mx-auto items-center px-2 mb-10 md:mb-0 text-black century text-center lg:text-left">
                                <img src={Nicolas} alt="Développement web" className="mb-4" style={{ maxHeight: '250px' }} />                                 
                                <div>                                    
                                    <h4 className="font-bold century text-bleu"><span className="font-bold">Nicolas</span></h4>
                                        <p>Avec Nicolas, vos idées prennent vie en ligne !
                                        Passionné de code, il conçoit des sites web <strong className="font-normal">modernes, rapides et faciles à utiliser</strong>.</p>
                                </div>
                                </div>
                                <div className="w-full svgtransform flex flex-col lg:flex-row md:w-2/5 mx-auto items-center px-2 mb-10 md:mb-0 text-black century text-center lg:text-left">
                                    <img src={Clarisse} alt="Community management" className="mb-4" style={{ maxHeight: '250px' }} />                                 
                                    <div>                                    
                                        <h4 className="font-bold century text-bleu"><span className="font-bold">Clarisse</span></h4>
                                        <p>Toujours inspirée, Clarisse imagine des posts qui attirent l’œil et suscitent l’envie de réagir avec votre entreprise sur les réseaux.<br/><br/>
                                        </p>
                                    </div>
                                </div>
                            
                        </div>
                    </section>
                </section>
                <section className="w-full flex mb-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence de communication à Agen</span> ?</h3>
                        <h4>Linkweb soutient les professionnels souhaitant développer leur projet digital.</h4>
                    </div>
                    <div className="w-full mx-auto block lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" />
                    </div>
                </section>
                <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                    Les clients de notre agence de communication à Agen sont satisfaits
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
                                    <img width="50px" height="50px" src={lious} alt="Avis My Business" />
                                    <svg width="100px" viewBox="0 0 100 125">
                                        <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                        <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                        <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                        <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                        <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z" />
                                    </svg>
                                </div>
                                <h4>Lious & Compagnie</h4>
                                <p>« Nous travaillons avec <strong>Linkweb</strong> depuis 2 ans, nous sommes très satisfait. Leur suivi est très régulier, ils nous appellent tous les mois pour faire un point et demander si nous avons des modifications a faire. À recommander ! »</p>
                            </div>
                        </article>
                        <article className="w-full md:w-1/2 mt-5 lg:w-1/2 text-left xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                            <div className="avis" style={{ minHeight: '340px' }}>
                                <div className="flex flex-row">
                                    <img width="50px" height="50px" src={valognes} alt="Avis Google" />
                                    <svg width="100px" viewBox="0 0 100 125">
                                        <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                        <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                        <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                        <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                        <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z" />
                                    </svg>
                                </div>
                                <h4>Valognes Menuiserie</h4>
                                <p>« <strong>Linkweb</strong>, partenaire de confiance, nous sommes ravis aujourd'hui de notre collaboration. Merci à Sophie de nous avoir démarché. C'est une affaire qui roule, beaucoup de sérieux, de la réactivité, et Anthony assure très bien le bon suivi de notre dossier au quotidien concernant notre entreprise. Nous sommes vraiment très content de cette entreprise. »</p>
                            </div>
                        </article>
                        <article className="w-full md:w-1/2 lg:w-1/2 mt-5 text-left xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                            <div className="avis" style={{ minHeight: '340px' }}>
                                <div className="flex flex-row">
                                    <img width="50px" height="50px" src={savi} alt="Avis My Business" />
                                    <svg width="100px" viewBox="0 0 100 125">
                                        <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                        <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                        <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                        <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                        <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z" />
                                    </svg>
                                </div>
                                <h4>SAVI</h4>
                                <p>« Merci pour leur gentillesse et leur réactivité. Un site mis au goût du jour avec beaucoup de goût avec un respect de nos valeurs. Un travail de longue haleine mais qui donne ses fruits. Heureux de notre collaboration. »</p>
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
                
                <section className="w-full bg-black flex flex-col md:flex-row">
                    <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                    </div>
                    <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Vous souhaitez faire appel à notre agence de communication pour mener votre projet à Agen ?</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Engager notre <strong>agence de communication à Agen</strong> est la prochaine étape de votre projet digital. Contactez-nous, nous définirons ensemble le cadre stratégique de votre projet en fonction de vos objectifs, de vos ambitions ainsi que de votre marché pour vous proposer des <strong>solutions clé-en-main</strong> et parfaitement adaptées à vos besoins.</p>
                            <div className="max-w-xs ml-auto mr-auto md:mr-0 md:ml-0 block">
                                <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" text="NOUS CONTACTER" />
                            </div>
                        </div>

                    </div>
                </section>
                <section className="flex w-full flex-col mx-auto px-0 py-6 my-4 lg:my-0">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10 lg:mb-2">
                        <h2 className="century text-3xl md:text-5xl text-black leading-none">Les dernières actualités</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>

                    </section>
                </section>
                <section className="max-w-6xl mx-auto  flex flex-col align-center justify-center text-center mt-12 mb-3">
                    <LastPosts lastposts={this.props.data.allWpPost.edges} />
                    <div className="w-2/5 flex mx-auto flex-row justify-center items-center">
                        <RoundButton url="/actualite-digitale/" text="Accéder au Blog" />
                    </div>
                    <br />
                </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsAgenceCommunicationAgen {
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
export default AgenceCommunicationAgen;




