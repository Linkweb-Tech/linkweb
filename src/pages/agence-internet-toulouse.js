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

import mac from "../images/agence-web-design-linkweb.jpg";
import stars from '../images/stars.png';
import arriereplan from "../images/bg-choisir-agence-communication-web.jpg";
import siteinternet from "../images/agence-web-specialisee.jpg";
import referencement from "../images/agence-communication-globale.jpg";
import webdesign from "../images/freelance.jpg";




class AgenceInternetToulouse extends Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Internet à Toulouse - Linkweb"
                    description="Notre agence internet vous accompagne pour tous vos projets de développement web à Toulouse."
                    url="https://linkweb.fr/agence-internet-toulouse/"
                    nom="Agence internet à Toulouse"
                    slug="agence-internet-toulouse/"
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
                        <div className="w-full lg:w-3/5 flex justify-center lg:justify-start">
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Agence <span className="text-bleu">Internet</span> à Toulouse</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Agence de création de sites internet et de référencement web dans le secteur de Toulouse.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl mx-4 lg:text-4xl century text-center mt-12"><span className="font-bold">Vous souhaitez faire appel aux services de notre agence internet à Toulouse ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md">Linkweb offre à votre entreprise des solutions digitales viables et une stratégie adaptée pour chaque activité professionnelle.</p>
                        <br />
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                        <button
                            className="font-light mx-auto roundedButton bg-darkgrey text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                            type="button"
                            onClick={(e) => {
                            e.preventDefault();
                            window.location.href='/contact-agence-web-toulouse/';
                            }}
                        >Demander un devis</button>
                            {/* <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" color="darkgrey" text="Je demande un devis" /> */}
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-3/5 px-10 mt-16 lg:-mt-48 mb-16 lg:mb-48">
                    <br/>
                    <h3 className="century text-xl text-center">
                    Pour un projet de refonte, de création ou de référencement de sites web, Linkweb propose son savoir-faire en matière de solutions web aux alentours de Toulouse et d’Agen mais aussi partout en France.
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence Internet Toulouse : nous répondons à vos objectifs</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Parmi les agences existantes, notre agence spécialisée apporte une stratégie web-marketing personnalisée à chacun de ses clients. Nous accompagnons chaque projet en ligne durablement dans une recherche de visibilité, de notoriété et de retour sur investissement. </h3>
                        </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Mise en place d’un outil </span><br /><span className="font-bold text-5xl md:text-6xl">PERFORMANT</span></h3>
                        <p className="text century z-50 lg:mt-0 text-lg lg:text-sm xl:text-lg">Un site internet adaptée à votre activité (e-commerce avec le CMS prestashop, vitrine ou catalogue avec le CMS Wordpress) peut-être un support de communication fort pour une <strong className="font-normal">entreprise</strong>.
                            En France, Linkweb fait partie des <Link to="/agence-communication-web-toulouse/" className="font-bold text-bleu hover:text-white">agences web</Link> méticuleuses et attentives aux moindres détails dès la <strong className="font-normal">conception du site internet</strong> de chacun de ses clients.<br/><br/>
                            L’objectif de notre <strong className="font-normal">agence internet</strong> est de fournir à chaque entreprise un <strong className="font-normal">outil digital</strong> pertinent qui se démarque, de par son <strong className="font-normal">identité visuelle</strong> comme de son contenu optimisé. Un site internet ergonomique et adapté aux besoins de chaque client est nécessaire pour une <strong className="font-normal">stratégie web-marketing</strong> performante et complète : il est la vitrine de chaque entreprise sur le net.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Développement de la visibilité </span><br /><span className="font-bold text-6xl">SUR LE WEB</span></h3>
                        <p className="text century text-lg z-50 lg:text-sm xl:text-lg">La définition et la <strong className="font-normal">conception du projet digital</strong> seront déterminantes pour la performance de votre communication via votre site. Linkweb accompagne les professionnels souhaitant devenir <strong className="font-normal">visibles sur le web</strong> dans toute la France. Les équipes de <Link to="/agence-web-balma/" className="text-bleu hover:text-white font-bold">nos agences</Link> sont à l'écoute de vos attentes pour déterminer la <strong className="font-normal">stratégie de référencement</strong> la plus judicieuse (<strong className="font-normal">SEO</strong>, <strong className="font-normal">SEA</strong>, respect des critères des <strong className="font-normal">moteurs comme Google</strong>). <br/><br/>Nos référenceurs expérimentés rédigent ensuite des <strong className="font-normal">contenus optimisés</strong> pour les <strong className="font-normal">moteurs de recherche comme Google</strong> afin de vous apporter des solutions pertinentes pour votre entreprise dans votre recherche de <strong className="font-normal">notoriété</strong> en France. Le travail de <strong className="font-normal">référencement naturel</strong> proposé par <strong className="font-normal">Linkweb</strong> est clair et durable dans le temps : nous réalisons un suivi régulier de votre projet.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Réalisation de supports </span><br /><span className="font-bold text-6xl">RENTABLES</span></h3>
                        <p className="text century text-lg z-50 lg:text-sm xl:text-lg">À travers la création ou la refonte de votre <strong className="font-normal">site internet</strong> et le travail de communication, Linkweb veille à apporter des retombées financières intéressantes à sa clientèle. En réalisant des sites appropriés comme un site de boutique en ligne, un <strong className="font-normal">site vitrine Wordpress</strong> ou tout autre site sur-mesure, notre <strong className="font-normal"><Link to="/agence-web-albi/" className="text-bleu hover:text-white font-bold">agence</Link></strong> vous permet d’atteindre vos prospects cibles et de les fidéliser.<br/><br/>
                            Nous mettons tout en oeuvre pour votre projet en vue d'obtenir un <strong className="font-normal">retour sur investissement</strong> rapide : nos professionnels du Web manipulent parfaitement des outils comme <strong className="font-normal">Google Adwords</strong>. Parmi les agences de France, Linkweb met tout en œuvre pour vous assurer des services efficaces et un <strong className="font-normal">projet professionnel</strong> performant.
                        </p>
                    </div>
                </section>
                <section className="bg-bleu sidetitle py-10">
                        <section className="w-full lg:w-2/3 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
                            <h2 className="century text-center lg:text-left text-white text-3xl md:text-5xl leading-none">Une prestation de création complète et adaptés pour chaque projet</h2>
                            <br/>
                            <div className="line-title my-4 ">
                                <br/>
                                <hr className="w-1/2 lg:w-1/12"/>
                                <br/>
                                <h3 /*data-aos='fade-left'*/ className="text-xl text-white century pb-0">Nos réalisations sont conçues pour chaque professionnel en fonction de son activité et de ses objectifs : de la création d’une boutique en ligne à celle d’un catalogue de prestations.</h3>
                            </div>
                        </section>
                        <section className="flex justify-center flex-col items-center">
                            <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 text-white century text-center lg:text-left">
                                    <svg width="50px" fill="#ffffff" className="lg:mx-0 mx-auto block" viewBox="0 0 26.458333 33.0729175"><g transform="translate(0,-270.54165)"><path  d="m 5.8714289,272.12915 c -1.8514508,0 -3.3578869,1.50883 -3.3578869,3.36322 0,1.85439 1.5064361,3.36271 3.3578869,3.36271 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36271 0,-0.93619 -0.3850002,-1.78375 -1.0034311,-2.39407 l -2.1329844,3.56079 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869546,-1.24151 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35362 C 7.272958,272.36508 6.5998223,272.12917 5.8714289,272.12917 Z m 5.9146431,2.06968 a 0.25889664,0.25930793 0 0 0 0.02674,0.51792 h 11.867626 a 0.25855123,0.25896196 0 1 0 0,-0.51792 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02674,0 z m 0.02674,2.06866 a 0.25836408,0.25877452 0 1 0 0,0.51741 h 5.668955 a 0.25836408,0.25877452 0 1 0 0,-0.51741 z m -5.9413818,4.14035 c -1.8514508,0 -3.3578869,1.50884 -3.3578869,3.36323 0,1.85439 1.5064361,3.36271 3.3578869,3.36271 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36271 0,-0.9362 -0.3850002,-1.78375 -1.0034311,-2.39407 l -2.1329844,3.56079 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869546,-1.24151 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35362 c -0.5508481,-0.39625 -1.2239838,-0.63216 -1.9523772,-0.63216 z m 5.9156518,2.06969 a 0.25832484,0.25873522 0 0 0 -10e-4,5.1e-4 0.2587086,0.25911959 0 0 0 0.02674,0.51741 h 11.867629 a 0.25836408,0.25877452 0 1 0 0,-0.51741 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02573,-5.1e-4 z m 0.02573,2.06866 a 0.25835919,0.25876963 0 0 0 0,0.51741 h 5.668957 a 0.25835919,0.25876963 0 0 0 0,-0.51741 z m -5.9413807,4.14035 c -1.8514507,0 -3.3578869,1.50884 -3.3578869,3.36322 0,1.8544 1.5064362,3.36272 3.3578869,3.36272 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36272 0,-0.93618 -0.3850002,-1.78374 -1.0034311,-2.39407 l -2.1329844,3.5608 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869543,-1.2415 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35363 C 7.2729607,288.9225 6.599825,288.68658 5.8714316,288.68658 Z m 5.9146427,2.07018 a 0.2587086,0.25911959 0 0 0 0.02674,0.51742 H 23.68044 a 0.25836408,0.25877452 0 1 0 0,-0.51742 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02674,0 z m 0.02674,2.06817 a 0.25836408,0.25877452 0 1 0 0,0.51741 h 5.668956 a 0.25836408,0.25877452 0 1 0 0,-0.51741 z"/></g></svg>
                                    <h4 className="font-bold century"><span className="font-bold">Hébergement web & Nom de domaine</span></h4>
                                    <p>L’équipe Linkweb propose un service d’accompagnement dans le choix de l’<strong className="font-normal">hébergement web</strong> et du nom de domaine de chaque <strong className="font-normal">site en ligne</strong> réalisé.</p>
                                </div>
                                <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="60px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><g><path fill="#ffffff" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   "/><path fill="#ffffff" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z"/><g><path fill="#ffffff" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z"/><rect x="72.041" y="56.851" width="0.312" height="5.159"/></g><path fill="#ffffff" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z"/><path fill="#ffffff" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z"/></g></svg>                    
                                    <h4 className="font-bold century -mt-4"><span className="font-bold">Ergonomie, UI & UX Design</span></h4>
                                    <p>Notre <strong className="font-normal">service de création</strong> développe un projet performant grâce à l'<strong className="font-normal">UI et UX design</strong>. Les supports de communication réalisés sont responsives pour une accessibilité sur ordinateur, mobile ou tablette.</p>
                                </div>
                                <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" fill="#ffffff"  viewBox="0 0 64 80"><path d="M7,57h36.434c1.349,1.543,2.92,2.901,4.694,4.01l1.342,0.838C49.632,61.949,49.816,62,50,62s0.368-0.051,0.53-0.152  l1.342-0.838c4.507-2.818,7.76-7.194,9.159-12.322l0.934-3.425c0.144-0.528-0.164-1.074-0.69-1.225l-0.843-0.241  c-3.827-1.094-7.165-3.314-9.651-6.422c-0.379-0.475-1.183-0.475-1.562,0c-0.384,0.48-0.796,0.932-1.219,1.369V26  c0-0.552-0.448-1-1-1h-2v-3c0-11.028-8.972-20-20-20S5,10.972,5,22v3H3c-0.552,0-1,0.448-1,1v26C2,54.757,4.243,57,7,57z M50,39.546  c2.624,2.925,5.979,5.038,9.775,6.144l-0.674,2.472c-1.266,4.642-4.209,8.602-8.289,11.152L50,59.821l-0.812-0.507  c-4.08-2.55-7.024-6.51-8.29-11.152l-0.674-2.472C44.021,44.584,47.376,42.472,50,39.546z M7,22c0-9.925,8.075-18,18-18  s18,8.075,18,18v3h-4v-3c0-7.72-6.28-14-14-14s-14,6.28-14,14v3H7V22z M13,25v-3c0-6.617,5.383-12,12-12s12,5.383,12,12v3H13z M4,27  h42v13.544c-1.902,1.474-4.073,2.579-6.431,3.254l-0.843,0.241c-0.527,0.15-0.834,0.696-0.69,1.225l0.934,3.425  c0.622,2.281,1.629,4.4,2.932,6.312H7c-1.654,0-3-1.346-3-3V27z"/><path d="M48,54c0.256,0,0.512-0.098,0.707-0.293l7-7l-1.414-1.414L48,51.586l-2.293-2.293l-1.414,1.414l3,3  C47.488,53.902,47.744,54,48,54z"/><path d="M6.914,49.836l-0.369,1.98c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L10,51.915l2.037,0.985  c0.139,0.067,0.287,0.1,0.436,0.1c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418  c0.291-0.261,0.403-0.667,0.288-1.039c-0.115-0.373-0.436-0.645-0.823-0.697l-2.257-0.302l-0.994-1.854  c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302c-0.387,0.052-0.708,0.324-0.823,0.697  c-0.115,0.373-0.002,0.778,0.288,1.039L6.914,49.836z M8.896,48.295c0.318-0.042,0.597-0.235,0.749-0.519L10,47.116l0.354,0.661  c0.152,0.283,0.431,0.476,0.749,0.519l0.614,0.082l-0.385,0.345c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345L8.896,48.295z"/><path d="M25.132,46.683l-2.257-0.302l-0.994-1.854c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302  c-0.387,0.052-0.708,0.324-0.823,0.697c-0.115,0.373-0.002,0.778,0.288,1.039l1.582,1.418l-0.369,1.98  c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L21,51.915l2.037,0.985c0.139,0.067,0.287,0.1,0.436,0.1  c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418c0.291-0.261,0.403-0.667,0.288-1.039  C25.841,47.006,25.52,46.734,25.132,46.683z M22.333,48.723c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345l0.614-0.082c0.318-0.042,0.597-0.235,0.749-0.519L21,47.116l0.354,0.661c0.152,0.283,0.431,0.476,0.749,0.519  l0.614,0.082L22.333,48.723z"/><path d="M36.132,46.683l-2.257-0.302l-0.994-1.854c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302  c-0.387,0.052-0.708,0.324-0.823,0.697c-0.115,0.373-0.002,0.778,0.288,1.039l1.582,1.418l-0.369,1.98  c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L32,51.915l2.037,0.985c0.139,0.067,0.287,0.1,0.436,0.1  c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418c0.291-0.261,0.403-0.667,0.288-1.039  C36.841,47.006,36.52,46.734,36.132,46.683z M33.333,48.723c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345l0.614-0.082c0.318-0.042,0.597-0.235,0.749-0.519L32,47.116l0.354,0.661c0.152,0.283,0.431,0.476,0.749,0.519  l0.614,0.082L33.333,48.723z"/><path d="M17,42c2.155,0,4.127-1.158,5.191-3h3.573l1.789,0.895c0.281,0.141,0.613,0.141,0.895,0L30,39.118l1.553,0.776  c0.281,0.141,0.613,0.141,0.895,0L34.236,39H36c0.265,0,0.52-0.105,0.707-0.293l2-2c0.391-0.391,0.391-1.023,0-1.414l-2-2  C36.52,33.105,36.265,33,36,33H22.191c-1.064-1.842-3.036-3-5.191-3c-3.309,0-6,2.691-6,6S13.691,42,17,42z M17,32  c1.586,0,3.023,0.942,3.662,2.401C20.821,34.765,21.181,35,21.578,35h14.008l1,1l-1,1H34c-0.155,0-0.309,0.036-0.447,0.105  L32,37.882l-1.553-0.776c-0.281-0.141-0.613-0.141-0.895,0L28,37.882l-1.553-0.776C26.309,37.036,26.155,37,26,37h-4.422  c-0.397,0-0.757,0.235-0.916,0.599C20.023,39.058,18.586,40,17,40c-2.206,0-4-1.794-4-4S14.794,32,17,32z"/><rect x="15" y="35" width="2" height="2"/></svg>
                                    <h4 className="font-bold century"><span className="font-bold">Site internet conforme et sécurisé</span></h4>
                                    <p>Nos <strong className="font-normal">développeurs</strong> mettent en place un <strong className="font-normal">protocole HTTPS</strong> pour sécuriser la navigation sur votre site, mais veillent également à une parfaite <strong className="font-normal">conformité au RGPD</strong>.</p>
                                </div>
                            </div>
                            <div className="w-full text-white flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#ffffff" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z"/></g></g><g><g><path fill="#ffffff" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z"/></g></g><g><g><path fill="#ffffff" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z"/></g></g></g></svg>
                                    <h4 className="font-bold century"><span className="font-bold">Solution de Référencement Naturel<br/></span></h4>
                                    <p>Le développement de votre <strong className="font-normal">présence sur le web</strong> passe par une stratégie de <strong className="font-normal">référencement naturel</strong> pertinente et appropriée. L’équipe de <strong className="font-normal">référenceurs Linkweb</strong> vous accompagne dans votre quête de visibilité.</p>
                                </div>
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125" fill="#ffffff"><g><g><g><path d="M82.3,81.7c-0.8,0-1.5-0.7-1.5-1.5c0-17-13.8-30.9-30.9-30.9c-17,0-30.9,13.8-30.9,30.9     c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5c0-18.6,15.1-33.8,33.8-33.8s33.8,15.1,33.8,33.8C83.8,81.1,83.1,81.7,82.3,81.7z"/></g><g><path d="M1.5,67.4c-0.1,0-0.3,0-0.4-0.1c-0.8-0.2-1.2-1-1-1.8c1-3.5,2.5-6.9,4.2-10.2c1-1.8,0.6-4.1-0.8-5.5     c-3-3-3-7.8,0-10.7l5.4-5.4c1.4-1.4,3.3-2.2,5.4-2.2c2,0,3.9,0.8,5.3,2.2c0,0,0,0,0,0c1.5,1.5,3.7,1.8,5.5,0.8     c3.2-1.8,6.7-3.2,10.2-4.2c1.9-0.6,3.3-2.4,3.3-4.5c0-4.2,3.4-7.6,7.6-7.6h7.6c4.2,0,7.6,3.4,7.6,7.6c0,2.1,1.4,3.9,3.3,4.5     c3.5,1,6.9,2.5,10.2,4.2c1.8,1,4.1,0.6,5.5-0.8c0,0,0,0,0,0c1.4-1.4,3.3-2.2,5.3-2.2c2,0,3.9,0.8,5.4,2.2l5.4,5.4     c1.4,1.4,2.2,3.3,2.2,5.4s-0.8,3.9-2.2,5.4c-1.5,1.5-1.8,3.7-0.8,5.5c1.8,3.2,3.2,6.6,4.2,10.2c0.2,0.8-0.2,1.6-1,1.8     c-0.8,0.2-1.6-0.2-1.8-1c-1-3.3-2.3-6.6-4-9.6c-1.6-2.9-1.1-6.6,1.3-9c1.8-1.8,1.8-4.8,0-6.6l-5.4-5.4c-0.9-0.9-2.1-1.4-3.3-1.4     c-1.3,0-2.4,0.5-3.3,1.4c0,0,0,0,0,0c-2.4,2.3-6,2.9-8.9,1.3c-3.1-1.7-6.3-3-9.6-4c-3.2-0.9-5.4-3.9-5.4-7.3     c0-2.6-2.1-4.7-4.7-4.7h-7.6c-2.6,0-4.7,2.1-4.7,4.7c0,3.3-2.2,6.3-5.4,7.3c-3.3,1-6.5,2.3-9.6,4c-2.9,1.6-6.6,1.1-8.9-1.3     c0,0,0,0,0,0c-0.9-0.9-2.1-1.4-3.3-1.4c-1.3,0-2.4,0.5-3.3,1.4l-5.4,5.4c-1.8,1.8-1.8,4.8,0,6.6c2.4,2.4,2.9,6.1,1.3,9     c-1.7,3.1-3,6.3-4,9.6C2.7,67,2.1,67.4,1.5,67.4z"/></g></g><g><path d="M98.5,81.7H1.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h97.1c0.8,0,1.5,0.7,1.5,1.5S99.3,81.7,98.5,81.7z    "/></g></g></svg>                                    
                                    <h4 className="font-bold century"><span className="font-bold">Optimisation on-site</span></h4>
                                    <p>Création d’une optimisation interne au site à partir des requêtes cibles définies lors de la conception de <strong className="font-normal">stratégies de communication web-marketing</strong>.</p>
                                </div>
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><path fill="#ffffff" d="M66.598,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44c-0.556,0.081-1.017,0.47-1.191,1.004  c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014c-0.095,0.554,0.133,1.113,0.587,1.443  c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C67.673,71.235,67.16,70.916,66.598,70.916L66.598,70.916z M50,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169L50,82.719l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C51.074,71.235,50.562,70.916,50,70.916L50,70.916z M33.402,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423  l2.707,1.423c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014  l2.19-2.135c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C34.476,71.235,33.963,70.916,33.402,70.916L33.402,70.916z"/><path fill="#ffffff" d="M72.131,50.738h-25.82v-1.475h25.82V50.738z M50,52.951h-3.689v1.475H50V52.951z M72.131,52.951H53.689v1.475  h18.443V52.951z M61.066,56.639H46.311v1.475h14.754V56.639z M72.131,56.639h-7.377v1.475h7.377V56.639z M57.377,60.328H46.311  v1.475h11.066V60.328z M61.066,27.131H46.311v1.475h14.754V27.131z M72.131,27.131h-7.377v1.475h7.377V27.131z M72.131,30.82h-25.82  v1.475h25.82V30.82z M57.377,34.508H46.311v1.475h11.066V34.508z M72.131,34.508H61.066v1.475h11.066V34.508z M64.754,38.197H46.311  v1.475h18.443V38.197z"/><path fill="#ffffff" d="M75.82,12.377h-4.338c-0.741-1.139-1.62-2.329-2.458-3.404l-0.257-0.33l-0.416,0.052  c-2.313,0.288-8.743,0.858-10.692,0.051c-0.341-0.141-0.869-0.895-1.294-1.501C55.592,6.141,54.793,5,53.689,5h-7.377  c-1.104,0-1.904,1.141-2.677,2.244c-0.425,0.606-0.953,1.36-1.294,1.501c-1.947,0.807-8.379,0.237-10.692-0.051l-0.416-0.052  l-0.257,0.33c-0.838,1.075-1.717,2.265-2.458,3.404H24.18c-2.441,0-4.426,1.986-4.426,4.426v73.77c0,2.441,1.985,4.426,4.426,4.426  H75.82c2.441,0,4.426-1.985,4.426-4.426v-73.77C80.246,14.363,78.26,12.377,75.82,12.377z M31.886,10.208  c1.891,0.218,8.608,0.899,11.02-0.1c0.737-0.305,1.32-1.137,1.937-2.017c0.396-0.564,1.132-1.615,1.469-1.615h7.377  c0.337,0,1.073,1.051,1.469,1.615c0.617,0.88,1.2,1.712,1.937,2.017c2.412,0.999,9.129,0.318,11.02,0.1  c1.698,2.219,3.397,4.834,3.684,5.857H28.201C28.489,15.043,30.188,12.427,31.886,10.208z M78.77,90.574  c0,1.627-1.324,2.951-2.951,2.951H24.18c-1.627,0-2.951-1.324-2.951-2.951v-73.77c0-1.627,1.324-2.951,2.951-2.951h3.449  c-0.727,1.324-1.12,2.457-0.82,3.071c0.192,0.392,0.578,0.618,1.059,0.618h44.262c0.482,0,0.867-0.225,1.059-0.618  c0.3-0.614-0.093-1.746-0.82-3.071h3.449c1.627,0,2.951,1.324,2.951,2.951V90.574z M50,13.115c-1.424,0-2.582-1.158-2.582-2.582  S48.576,7.951,50,7.951s2.582,1.158,2.582,2.582S51.424,13.115,50,13.115z M50,9.426c-0.61,0-1.107,0.496-1.107,1.107  c0,0.61,0.496,1.107,1.107,1.107s1.107-0.496,1.107-1.107C51.107,9.923,50.61,9.426,50,9.426z"/><path fill="#ffffff" d="M38.934,50v11.066H27.869V50H38.934 M38.934,48.525H27.869c-0.815,0-1.475,0.661-1.475,1.475v11.066  c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475V50C40.41,49.185,39.749,48.525,38.934,48.525  L38.934,48.525z M33.483,38.197c-0.008,0-0.016,0-0.024,0c-0.302,0-0.588-0.12-0.792-0.343l-3.77-4.111  c-0.413-0.451-0.382-1.147,0.069-1.559c0.451-0.412,1.151-0.379,1.563,0.071l2.989,3.267l7.698-7.698  c0.432-0.432,1.132-0.432,1.565,0c0.432,0.432,0.432,1.133,0,1.565l-8.516,8.5C34.058,38.097,33.776,38.197,33.483,38.197z   M38.934,34.271v4.664h-5.451H33.45h-5.581V27.869h11.066v1.194l1.45-1.45c-0.122-0.692-0.722-1.22-1.45-1.22H27.869  c-0.815,0-1.475,0.661-1.475,1.475v11.066c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475v-6.136  L38.934,34.271z"/></svg>                    
                                    <h4 className="font-bold century"><span className="font-bold">Suivi régulier</span></h4>
                                    <p>Linkweb propose un <strong className="font-normal">suivi des performances du site</strong> et une <strong className="font-normal">maintenance technique</strong> régulière pour une bonne gestion de la <strong className="font-normal">collaboration avec nos clients</strong>. De plus, le contenu peut être modifié à tout moment au cours de la collaboration pour une <strong className="font-normal">prestation web</strong> adaptée à vos besoins.</p>
                                </div>
                            </div>
                        </section>
                    </section>  
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Le développement de votre projet en quatre étapes</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Notre méthodologie de création de <Link to="/agence-site-web-toulouse/" className="text-bleu hover:text-black font-bold">site internet</Link> est adaptée pour vous fournir une prestation complète et en totale conformité avec les acteurs du Web.</h3>
                        </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                <div className="w-full flex justify-center items-center lg:w-5/12">
                    <img className="w-full" src={mac} alt="Agence SEA Toulouse"/>
                </div>
                <div className="w-full lg:w-1/2 my-10  flex flex-col">
                    <div className="w-full flex-col md:flex-row flex px-auto">
                        <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                            <p className="text-center">1</p>
                        </div>
                        <div className="w-full px-6 lg:px-6 flex flex-col justify-center">
                                <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>VOUS NOUS CONTACTEZ POUR LA MISE EN PLACE DE VOTRE PROJET
                                </h3>
                                <br/>
                                <h4 className="century"><span className="font-bold">Lors de votre prise de contact avec Linkweb, nous définissons vos besoins. Notre chef de projet étudie avec soin pour vous recontacter ensuite et définir vos besoins.</span></h4>
                                <br/>
                                <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" >La prise de contact est un moment important pour que notre équipe comprenne les attentes de votre <strong className="font-normal">entreprise</strong>. Ceci est fondamental pour vous proposer la solution la plus pertinente et la plus efficace. Nous devons connaître vos objectifs, vos ambitions et clients cibles pour <strong className="font-normal">créer le site internet</strong> à l’image de votre société.</p>
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
                                        <span className="text-bleu">/</span>NOUS DÉFINISSONS VOTRE PROJET EN FONCTION DE VOS BESOINS
                                    </h3>
                                    <br/>
                                    <h4 className="century"><span className="font-bold">Lors de notre rencontre, nous cernons ensemble vos attentes en vue de la mise en place de la solution la plus appropriée.</span></h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Cette étape est essentielle pour comprendre vos critères en termes réalisation, de besoins et d'ambitions. C’est à partir de là que nous pouvons établir ensemble une méthode opérationnelle adaptée et ainsi que des <strong className="font-normal">stratégies d’optimisation de contenu viables</strong> et pertinentes.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p className="text-center">3</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>VOUS VALIDEZ LA CRÉATION UNE FOIS QU'ELLE RÉPOND À VOS ATTENTES
                                    </h3>
                                    <br/>
                                    <h4 className="century"><span className="font-bold">Nous réalisons une proposition de maquette sur laquelle sont intégrés des contenus rédigés et optimisés et respectant la charte graphique de votre entreprise.</span></h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">La présentation de la maquette est un moment important pour déterminer les ajustements à réaliser, mais aussi pour concrétiser <strong className="font-normal">votre projet</strong>. Une fois les modifications prises en compte, vous pourrez valider à nouveau la maquette pour aboutir à la <strong className="font-normal">publication de votre site</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p className="text-center">4</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>NOUS METTONS VOTRE SITE EN LIGNE
                                    </h3>
                                    <h4 className="century"><span className="font-bold">La proposition visuelle et éditoriale validée, nos équipes de techniciens publient votre site sur Internet.</span></h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Une fois validé, votre site passe entre les mains de nos <strong className="font-normal">référenceurs</strong> en vue de lancer la phase d'optimisation utile à rendre <strong className="font-normal">votre site visible sur les moteurs de recherche</strong>s tels que Google. Par la suite, nous mettons en place un suivi régulier des mises à jour et avancées de <strong className="font-normal">votre site</strong>, tout en nous tenant informés de l'évolution de votre activité pour une prestation cohérente avec vos besoins.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                    </div>
            </section>
            </section>
            <section className="w-full flex mt-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                        <div className="w-full lg:w-8/12 text-2xl">
                        <h2>Vous souhaitez travailler avec <span className="font-bold">notre agence</span> ?</h2>
                        <h4>Linkweb est à votre écoute pour vous proposer un accompagnement sur-mesure.</h4>
                        </div>
                        <div className="w-full mx-auto block lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        {/* <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" /> */}
                        <button
                                    className="font-light mx-auto roundedButton bg-darkgrey text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                                    type="button"
                                    onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='/contact-agence-web-toulouse/';
                                    }}
                                >CONTACTEZ-NOUS</button>
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
query lastsThreePostsAgenceInternetToulouse {
    allWordpressPost(limit: 3) {
      edges {
        node {
          id
          title
          slug
          modified(locale: "fr", formatString: "DD/MM/YYYY")
          date(locale: "fr", formatString: "dddd DD MMMM YYYY")
          link
          featured_media {
            source_url
          }
        }
      }
    }
  }
  
    
`
export default AgenceInternetToulouse;




