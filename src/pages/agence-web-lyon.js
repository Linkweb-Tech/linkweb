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

import mac from "../images/agence-web-lyon.jpg";
import stars from '../images/stars.png';
import arriereplan from "../images/bg-choisir-agence-communication-web.jpg";
import siteinternet from "../images/projet-web-montpellier.jpg";
import referencement from "../images/referencement-web-montpellier.jpg";
import webdesign from "../images/agence-web-specialisee.jpg";




class AgenceWebLyon extends Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Web Lyon - Création site internet - Linkweb"
                    description="Notre agence web à Lyon met tout en oeuvre pour vous proposer une solution web fonctionnelle et adaptée à vos objectifs."
                    url="https://linkweb.fr/agence-web-lyon/"
                    nom="Agence Web Lyon"
                    slug="agence-web-lyon/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Agence web Lyon - Création site internet</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Agence spécialisée dans la création de sites internet et le référencement web</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}

                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Vous souhaitez contacter notre agence web à Lyon ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md">Pour mener à bien votre projet, notre <strong className="font-normal">agence Linkweb à Lyon</strong> et partout en France vous propose des <strong className="font-normal">solutions de développement</strong>, de communication et de webmarketing pertinentes.</p>
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
                        Faites appel aux prestations de notre agence web pour mettre en place une stratégie de communication digitale pérenne et attirer l'œil de nouveaux prospects régulièrement.
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence web Lyon : nos experts vous accompagnent dans vos projets de marketing digital</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Site vitrine, site e-commerce, grâce à nos réalisations sur-mesure, disposez d’un support de communication digitale au web-design soigné et au contenu optimisé pour atteindre vos objectifs.</h3>
                    </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Développement de </span><br /><span className="font-bold text-5xl md:text-6xl">SITES WEB</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg z-50">Donnez vie à votre projet en faisant appel à Linkweb sur le secteur de <strong className="font-normal">Lyon</strong> mais également partout en France. Site e-commerce, catalogue ou vitrine, nous répondons à vos attentes pour vous fournir un <strong className="font-normal">outil digital</strong> des plus performants, au web-design intuitif. Grâce aux solutions apportées par ses <strong className="font-normal">experts du web</strong>, notre <a href="/" className="text-bleu hover:text-white font-bold">agence web de Toulouse</a> comme celle de Lyon, vous propose une réalisation adaptée à vos besoins pour obtenir des performances élevées. <br/><br/>
                        Pour une refonte comme pour un nouveau site, les compétences de l’<strong className="font-normal">équipe de Linkweb</strong> sont à votre disposition pour vous aider à atteindre vos objectifs.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Sratégie de référencement</span><br /><span className="font-bold text-6xl"> NATUREL SEO</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                        Pour vous accompagner dans la mise en application de votre <strong className="font-normal">stratégie de référencement naturel</strong>, Linkweb, <Link to="/agence-seo-lyon/" className="text-bleu hover:text-white font-bold">agence SEO à Lyon</Link>, fait partie des <a href="/agence-web-marseille/" className="text-bleu hover:text-white font-bold">agences web à Marseille</a> qui se montrent à votre écoute. Selon vos ambitions et vos besoins, nous vous apportons un conseil pertinent. Notre objectif est de proposer une <strong className="font-normal">expérience utilisateur</strong> optimale sur les pages de votre site et vous positionner sur la <strong className="font-normal">première page dans les résultats de recherche</strong> des moteurs pour des mots-clés opportuns.   
                        <br /><br />Les compétences et le professionnalisme de Linkweb vous permettent de bénéficier d’une <strong className="font-normal">stratégie de communication digitale</strong> adaptée et durable.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Création de campagne </span><br /><span className="font-bold text-6xl">GOOGLE ADS (SEA)</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                        Apportez un <strong className="font-normal">retour sur investissement</strong> rapide à votre entreprise en optant pour la création d'une <strong className="font-normal">campagne Adwords</strong> pour votre projet. Hissez-vous en tête de page de résultats des moteurs de recherche rapidement : bénéficiez d’une transformation boostée grâce à la <strong className="font-normal">régie publicitaire de Google</strong>. Le <strong className="font-normal">référencement payant SEA</strong> est proposé aux entreprises en quête d’une performance rapide et rentable.
                            <br /><br />Linkweb se démarque des autres <strong className="font-normal"><a href="/agence-web-strasbourg/" className="text-bleu hover:text-white font-bold">agences web à Strasbourg</a></strong> de par sa capacité à apporter des solutions sur-mesure et un conseil adapté à tous les projets de <strong>communication</strong> et de <strong className="font-normal">webmarketing</strong>.</p>
                    </div>
                </section>
                <section className="max-w-4xl w-full mx-auto px-4 py-0 my-0">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
            Disposez de <span className="text-bleu font-bold">supports de communication</span> performants grâce aux prestations de l’équipe de Linkweb en matière de création de site internet à Lyon.
        </h2>
        <hr className="blue"></hr>
      </section>
      <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
        <div className="w-full xl:w-1/3 one px-auto">
          <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                <span className="text-bleu">/</span>JE SOUHAITE EN SAVOIR PLUS
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
              Pour tout profil d’<strong className="font-normal">entreprise</strong> (PME, TPE, indépendants), Linkweb met à votre disposition, tout le savoir-faire de son équipe : chef de projet, développeurs et référenceurs travaillent tous les jours à <strong className="font-normal">améliorer les performances des sites réalisés</strong>. Les services qui vous sont proposés par notre <a href="/agence-web-montpellier/" className="text-bleu hover:text-black font-bold">agence web à Montpellier</a> pour votre <strong className="font-normal">site en ligne</strong> sont adaptés à chacune de vos attentes pour vous fournir un outil adapté. Design graphique et <strong className="font-normal">responsive design</strong> (ergonomie et adaptation tous supports : <strong className="font-normal">mobile</strong>, tablette, ordinateur) à partir de l'identité visuelle de votre entreprise, réalisations de <strong className="font-normal">contenus optimisés</strong> pour les moteurs comme pour les utilisateurs : la <strong className="font-normal">stratégie de communication web</strong> qui vous est proposée est pensée spécialement pour vous.
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
                <span className="text-bleu">/</span>JE SOUHAITE ÊTRE ACCOMPAGNÉ POUR CHOISIR MA FORMULE
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
              Définissez votre <strong className="font-normal">stratégie de développement web et de communication</strong> grâce au conseil de notre <a href="/agence-web-nice/" className="text-bleu hover:text-black font-bold">agence web près de Nice</a>. Linkweb fait partie des <strong className="font-normal">agences</strong> qui maîtrisent parfaitement les outils web digitaux (framework, CMS Wordpress, maîtrise du code HTML) pour apporter toute la visibilité nécessaire aux entreprises sur <strong className="font-normal">Internet</strong>. En apportant une formule webmarketing adaptée à votre <strong className="font-normal">support digital</strong>, vous devenez <strong className="font-normal">visible sur le web</strong>. Pour un projet de refonte comme pour les créations de sites web, la réalisation de vos supports se fait en toute transparence grâce à la réactivité et à l'écoute des consultants de notre <strong className="font-normal">agence</strong>.
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
                <span className="text-bleu">/</span>J'OPTE POUR L'EXPERTISE D'UNE AGENCE WEB SPÉCIALISÉE
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                À <strong className="font-normal">Lyon</strong> comme dans toute la France, l’expertise de notre agence vous permet de vous développer pertinemment sur <strong className="font-normal">Internet</strong> en activant tous les leviers nécessaires. Sélectionnez vos cibles, nous définissons la <strong className="font-normal">stratégie digitale</strong> la plus appropriée pour votre entreprise. Notre agence se charge de sa mise en place pour vous faire profitez d’un <strong className="font-normal">retour sur investissement</strong> conséquent et régulier grâce à votre support digital. Notre <strong className="font-normal">agence</strong> vous offre un suivi de projet en toute transparence, notamment grâce à des outils de veille performants pour vous apporter un maximum de retombées.
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
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence Web Lyon : Linkweb vous apporte de la visibilité partout en France</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">La solution de Linkweb est une solution complète qui répond à de nombreuses problématiques du web. Faites vivre votre projet de marketing digital, positionnez-vous dans le haut de la liste des résultats de recherche et devenez visible sur les moteurs.</h3>
                    </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Agence Web Lyon" />
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
                                    <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" >Notre <a href="/agence-web-bordeaux/" className="text-bleu hover:text-black font-bold">agence web à Bordeaux</a> accompagne ses <strong className="font-normal">clients</strong> dans leurs projets depuis 2008, pour répondre à leurs besoins en matière de conception et <strong className="font-normal">communication digitale</strong>.</p>
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
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Plus de 20 spécialistes mettent tout en œuvre, au quotidien, pour dynamiser et améliorer constamment les <strong className="font-normal">performances des sites</strong>.</p>
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
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">PME, TPE ou freelances, notre savoir est au service d'<strong className="font-normal">entreprises</strong> de tous les horizons pour rendre leurs sites internet visibles et performants.</p>
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
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Notre <strong className="font-normal"><Link to="/" className="text-bleu hover:text-black font-bold">agence web à Agen</Link></strong> reçoit une note basée sur 118 avis laissés par nos clients sur sa fiche <strong className="font-normal">Google</strong> : celle-ci témoigne de leur satisfaction.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Vous souhaitez en savoir plus sur ce que le marketing digital peut apporter à votre société ?</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Développeurs et référenceurs s’affairent chaque jour à proposer des supports des plus performants, à Lyon comme sur tout le territoire français.</h3>
                    </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="DÉPLOYEZ VOTRE VISIBILITÉ SUR DE NOUVEAUX CANAUX">
                                <p>Grâce à la performance générée par le travail de notre <strong className="font-normal">agence web</strong>, améliorez votre visibilité et captez l'attention de vos prospects cibles. Améliorez votre notoriété en activant de nombreux <strong className="font-normal">leviers</strong> et en exploitant tout le potentiel qu’offre Internet pour dynamiser l’<strong className="font-normal">activité de votre entreprise</strong>. En atteignant la tête de liste des <strong className="font-normal">résultats de recherches</strong> des moteurs, vous gagnez en visibilité.</p>
                            </div>
                            <div label="DÉVELOPPEZ VOTRE ACTIVITÉ SUR LA SPHÈRE DIGITALE">
                                <p>
                                La <strong className="font-normal">mise en application de votre stratégie</strong> de SEO ou de SEA vous permet de <strong className="font-normal">générer un trafic</strong> pertinent sur les pages de votre site. La fréquentation des utilisateurs sur votre interface est source de transformation et doit vous mener à un <strong className="font-normal">taux de conversion</strong> intéressant. Le but étant de répondre aux attentes des moteurs, des navigateurs et surtout, des internautes, <strong className="font-normal">Linkweb à Lyon</strong> définit les formules les plus adaptées pour maximiser vos chances de <strong className="font-normal">retour sur investissement</strong>.
                                </p>
                            </div>
                            <div label="AUGMENTEZ VOTRE CHIFFRE D'AFFAIRES">
                                <p>Grâce à un <strong className="font-normal">site responsive</strong> accessible sur mobile, tablette et ordinateur, une interface graphique et intuitive ainsi qu’un contenu optimisé et pertinent, vous êtes en capacité de <strong className="font-normal">transformer vos visiteurs en clients</strong>. L’évolution de votre <strong className="font-normal">site en ligne sur le web</strong> vous permet de rentabiliser son développement et d'augmenter votre <strong className="font-normal">chiffre d’affaires</strong>. Nos <strong className="font-normal">réalisations sur-mesure</strong> sont pensées pour vous apporter un maximum de résultats et vous satisfaire sur tous les plans. La <Link to="/creation-de-site-internet-a-agen/" className="text-bleu hover:text-black font-bold">création de votre site internet à Agen</Link> est un atout pour votre stratégie.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="text-center flex flex-col justify-center items-center text-black text-2xl mx-auto lg:mx-0 century mt-6 mb-24" style={{zIndex:'100'}}>
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Retrouvez-nous partout en France</h2>
                    <br/>
                    <hr className="border-solid w-1/6 border-bleu"></hr>
                    <br/>
                    <ul className="flex flex-col md:flex-row">
                        <li><Link to="/" className="text-bleu hover:text-black font-bold px-4">Toulouse</Link></li>
                        <li><Link to="/agence-web-agen/" className="text-bleu hover:text-black font-bold px-4">Agen</Link></li>
                        <li><Link to="/agence-web-bordeaux/" className="text-bleu hover:text-black font-bold px-4">Bordeaux</Link></li>
                        <li><Link to="/agence-web-la-rochelle/" className="text-bleu hover:text-black font-bold px-4">La Rochelle</Link></li>
                        <li><Link to="/agence-web-strasbourg/" className="text-bleu hover:text-black font-bold px-4">Strasbourg</Link></li>
                        <li><Link to="/agence-web-marseille/" className="text-bleu hover:text-black font-bold px-4">Marseille</Link></li>
                        <li><Link to="/agence-web-nice/" className="text-bleu hover:text-black font-bold px-4">Nice</Link></li>
                        <li><Link to="/agence-web-montpellier/" className="text-bleu hover:text-black font-bold px-4">Montpellier</Link></li>
                    </ul>
                </section>
                <section className="w-full bg-black flex flex-col md:flex-row">
                    <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                    </div>
                    <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Linkweb fait partie des agences qui vous apportent une écoute active et un conseil avisé</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Choisissez la <strong className="font-normal">mise en application de votre stratégie</strong> avec notre agence et bénéficiez d’un suivi régulier et en toute transparence. Déployez votre <strong className="font-normal">visibilité sur le web</strong> en optant pour les services d’un <strong className="font-normal">expert digital</strong> comme Linkweb.</p>
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
query lastsThreePostsAgenceWebLyon {
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
export default AgenceWebLyon;




