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

import mac from "../images/agence-web-marseille.jpg";
import stars from '../images/stars.png';
import arriereplan from "../images/bg-choisir-agence-communication-web.jpg";
import siteinternet from "../images/agence-web-specialisee.jpg";
import referencement from "../images/agence-communication-globale.jpg";
import webdesign from "../images/freelance.jpg";




class AgenceWebMarseille extends Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Web Marseille - Création site internet - Linkweb"
                    description="Notre agence web à Marseille met tout en oeuvre pour vous proposer une solution web fonctionnelle et adaptée à vos objectifs."
                    url="https://linkweb.fr/agence-web-marseille/"
                    nom="Agence Web Marseille"
                    slug="agence-web-marseille/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Agence web Marseille - Création site internet</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Agence web spécialisée dans la création et le référencement de sites internet</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}

                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Vous souhaitez contacter notre agence web à Marseille ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md">L’<strong className="font-normal">agence Linkweb intervient à Marseille</strong> et partout en France pour vous apporter un accompagnement pertinent. Pour mener à bien votre <strong className="font-normal">projet web</strong>, contactez-nous.</p>
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
                        Agence Web Marseille : nous vous accompagnons dans le développement et la refonte de sites, ainsi que pour vos stratégies de communication et de webmarketing.
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Des services adaptés à vos besoins : stratégie de référencement, refonte de site et création de site internet à Marseille</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Notre équipe d’experts du digital vous accompagne pour mettre en application des solutions web appropriées. Avec l'<a href="/agence-web-marketing-toulouse/" className="text-bleu hover:text-black font-bold">agence web Linkweb à Toulouse</a>, bénéficiez d’une création de site basée sur l'ergonomie et la performance avec des services de référencement pertinents.</h3>
                    </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Développement de votre site web</span><br /><span className="font-bold text-5xl md:text-6xl"> PERFORMANT</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg z-50">Pour vous aider à atteindre vos objectifs, Linkweb fait partie des <strong className="font-normal">agences</strong> qui activent tous les leviers nécessaires. Ainsi, notre <strong className="font-normal">agence digitale</strong> vous propose une création de site internet à partir de vos besoins. Disposer d’un <strong className="font-normal"><a href="/agence-web-nice/" className="text-bleu hover:text-white font-bold">support de communication web</a></strong> fonctionnel, à la charte graphique unique est un élément clef de la <strong className="font-normal">stratégie digitale</strong> qui est mise en place.<br/><br/>
                        Nos réalisations intègrent le choix de l’<strong className="font-normal">hébergement de votre site</strong>, le respect de votre identité visuelle, une ergonomie irréprochable, notamment au travers d’un design responsive (pour mobile, tablette ou ordinateur). De cette façon, <strong className="font-normal">gagner en visibilité sur le web</strong> dans le cadre du SEO, en améliorant son positionnement dans les <strong className="font-normal">résultats des moteurs comme Google</strong>, devient plus accessible. </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Sratégie de référencement naturel</span><br /><span className="font-bold text-6xl">PERTINENTE</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                        Notre agence spécialisée vous apporte son expertise pour référencer efficacement les <strong className="font-normal">pages de votre site internet</strong>. Du choix de votre nom de domaine au choix de la <strong className="font-normal">stratégie de référencement</strong> qui vous convient, le conseil en <a href="/agence-web-montpellier/" className="text-bleu hover:text-white font-bold">webmarketing</a> dont vous bénéficiez est cohérent et adapté à vos objectifs. 
                        <br /><br />Grâce au référencement naturel proposé par <strong className="font-normal">Linkweb à Marseille</strong> comme partout ailleurs, hissez-vous en tête de la première page des suggestions de Google pour générer un maximum de trafic. Les <strong className="font-normal"><a href="/agence-web-strasbourg/" className="text-bleu hover:text-white font-bold">solutions digitales</a></strong> apportées par notre agence sont pertinentes pour dynamiser l’activité de votre entreprise sur le long terme.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Création de votre campagne Adwords </span><br /><span className="font-bold text-6xl">SUR-MESURE</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                            Les <strong className="font-normal">prestations Google Adwords</strong> sont intéressantes pour acquérir rapidement du <strong className="font-normal">trafic</strong> et <strong className="font-normal">générer des ventes</strong> ponctuellement. Grâce aux connaissances de notre <strong className="font-normal"><a href="/agence-web-bordeaux/" className="text-bleu hover:text-white font-bold">agence en webmarketing</a></strong>, le référencement payant vous apporte des clients efficacement et est créé en fonction de vos ambitions.
                            <br /><br />Linkweb propose des prestations de ce type, à toute entreprise recherchant un <strong className="font-normal">retour sur investissement</strong> rapide. Chaque projet bénéficie de sa <strong className="font-normal">solution de référencement</strong> pour répondre aux attentes de chacun. Grâce à des campagnes de qualité et un paramétrage sur-mesure, vous disposez d’un <strong className="font-normal">site vitrine, e-commerce ou catalogue</strong> performant.</p>
                    </div>
                </section>
                <section className="max-w-xl w-full mx-auto px-4 py-0 my-0">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
            Gagnez en visibilité sur internet grâce à l’expertise de Linkweb à <span className="font-bold text-bleu">Marseille</span>
        </h2>
        <hr className="blue"></hr>
      </section>
      <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
        <div className="w-full xl:w-1/3 one px-auto">
          <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                <span className="text-bleu">/</span>JE SOUHAITE CONNAÎTRE LES SERVICES DE L'AGENCE
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                La création d’une <strong className="font-normal">interface en ligne</strong> implique un savoir-faire et une expérience importante. Votre cible de clientèle, l’expérience de l’utilisateur, les critères des <strong className="font-normal">moteurs comme Google</strong> et le référencement font partie des paramètres incontournables dans une <strong className="font-normal">stratégie de communication</strong> ou webmarketing performante.
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
                <span className="text-bleu">/</span>JE SUIS ACCOMPAGNÉ POUR TROUVER MA SOLUTION
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
              Site vitrine, catalogue, e-commerce ou sur-mesure, les réalisations sont multiples pour vous être de la plus grande utilité. L'équipe de <strong className="font-normal"><a href="/agence-web-lyon/" className="text-bleu hover:text-black font-bold">Linkweb</a></strong> vous offre son expertise et son conseil pour <strong className="font-normal">mettre en application la stratégie de communication digitale</strong> qui vous correspond. À travers ses prestations, notre entreprise vous apporte tous les outils pour <strong className="font-normal">atteindre vos objectifs sur Internet</strong>. 
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
                <span className="text-bleu">/</span>JE CHOISIS DES SPÉCIALISTES POUR DONNER VIE À MON PROJET
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                Linkweb fait partie des <strong className="font-normal">agences digitales</strong> qui offrent une grande écoute à leurs <strong className="font-normal">clients</strong>. Les <strong className="font-normal">experts du développement web</strong> de l’agence manient savamment les aspects front-end et back-end de la <strong className="font-normal">création de sites</strong>. De la même façon, les <strong className="font-normal">équipes de référencement</strong> sont en mesure d’apporter des contenus optimisés et un suivi en toute transparence à chaque entreprise. C’est de cette façon que nous vous accompagnons dans la <strong className="font-normal">définition de la stratégie</strong> qui vous apportera des résultats.
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
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence web Marseille : notre agence est conçue pour votre projet</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                    </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Agence Web Marseille" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10  flex flex-col">
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                    <p className="text-center">1</p>
                                </div>
                                <div className="w-full century px-6 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>Plus de 10 ans d'expérience
                                </h3>
                                    <br />
                                    <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" >Nous apportons une solution performante à nos <strong className="font-normal">clients</strong> pour leur offrir une meilleure <strong className="font-normal">visibilité sur le web</strong> depuis 2008.</p>
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
                                        <span className="text-bleu">/</span>Plus de 20 techniciens
                                    </h3>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Linkweb c’est plus de vingt spécialistes du <strong className="font-normal">développement et du référencement web</strong> qui œuvrent chaque jour à augmenter les performances des <strong className="font-normal">sites</strong> réalisés.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">3</p>
                                </div>
                                <div className="w-full century px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>Plus de 300 sites en gestion
                                    </h3>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Tous les profils sont les bienvenus : TPE, PME, freelances, nous créons des <strong className="font-normal">supports de communication digitale</strong> pour des entreprises d'horizons variés.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">4</p>
                                </div>
                                <div className="w-full century px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>Une note de 4,6/5 (Google)
                                    </h3>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Les entreprises que nous accompagnons sont satisfaites de nos prestations. D’après la note basée sur les 108 avis de nos <strong className="font-normal">clients</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Vous souhaitez en apprendre plus sur ce que le domaine du web marketing peut offrir à votre société ?</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Apportez une nouvelle force à votre communication sur le web en activant tous les leviers nécessaires. Soigner chaque détail de votre stratégie de marketing digital vous permettra de générer un retour sur investissement à la hauteur de vos attentes.</h3>
                    </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="DEVENEZ PLUS VISIBLE GRÂCE À UN SITE INTERNET FONCTIONNEL">
                                <p>En optant pour les <strong className="font-normal">solutions de développement et de référencement web</strong>, vous offrez à votre entreprise une notoriété plus importante. Internet est un des <strong className="font-normal">canaux de communication</strong> les plus sollicités aujourd’hui. 
                                <br/><br/>
                                C’est en exploitant tout le potentiel de ce canal que vous gagnez en <strong className="font-normal">visibilité </strong>et attirez la curiosité de nouveaux clients régulièrement. Générer du profit avec le <strong className="font-normal">marketing digital</strong> repose sur votre positionnement au sein des moteurs de recherche, au même titre que sur votre notoriété sur chaque média social et donc sur des services sur mesure, mis en place spécialement pour vous par des <strong className="font-normal">experts du digital</strong>.</p>
                            </div>
                            <div label="GÉNÉREZ DU TRAFIC PERTINENT SUR VOS PAGES">
                                <p>
                                Grâce au web design, au respect de votre charte graphique et de votre identité visuelle, chacune des pages de votre site offre une <strong className="font-normal">expérience utilisateur optimale</strong>. Les développeurs des agences internet manient les CMS comme Wordpress pour vous fournir des <strong className="font-normal">supports ergonomiques</strong> au tunnel de navigation intuitif. 
                                <br/><br/>
                                C’est en mettant en application tout le travail stratégique de <strong className="font-normal">conception web</strong> que vous pouvez générer un <strong className="font-normal">trafic de qualité</strong> sur vos supports. À l’aide de la <strong className="font-normal">publicité Adwords</strong> ou du <strong className="font-normal">référencement naturel</strong>, les cibles de clientèle qui explorent vos pages sont susceptibles de générer une conversion grâce aux dispositifs mis en place sur votre site. Obtenir de la transformation sur votre <strong className="font-normal">site internet</strong> est une priorité pour générer des résultats.
                                </p>
                            </div>
                            <div label="BOOSTEZ VOTRE CHIFFRE D'AFFAIRES">
                                <p>La <strong className="font-normal">rentabilité du site</strong> est un paramètre à ne pas négliger. Les <strong className="font-normal">outils digitaux</strong> sont maîtrisés par les professionnels des <strong className="font-normal">agences digitales</strong> pour vous permettre de disposer d’un support fonctionnel et de qualité. Linkweb fait partie de celles-ci et vous apporte, grâce à ses réalisations, toutes les retombées attendues. 
                                <br/><br/>
                                Dynamisez votre activité et augmentez votre chiffre d’affaires en faisant confiance à un <strong className="font-normal">prestataire web</strong>. Présentez une <strong className="font-normal">image de marque</strong> unique et puissante sur les moteurs pour <strong className="font-normal">générer un taux de conversion</strong> conséquent. L’accompagnement que vous propose notre <strong className="font-normal">équipe d’experts</strong> vous aide à atteindre vos objectifs.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="w-full bg-black flex flex-col md:flex-row">
                    <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                    </div>
                    <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Vous souhaitez faire appel à nos services à Marseille et partout en France ?</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Choisissez l’écoute et le conseil de spécialistes pour mener votre projet à la réussite que vous convoitez. Pour votre <strong className="font-normal">site en ligne</strong>, optez pour ce qu’il y a de meilleur, alliez design, contenus optimisés et suivi stratégique des avancées : faites confiance à un prestataire spécialisé dans le <strong className="font-normal">domaine du web</strong> pour atteindre vos objectifs.</p>
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
query lastsThreePostsAgenceWebMarseille {
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
export default AgenceWebMarseille;




