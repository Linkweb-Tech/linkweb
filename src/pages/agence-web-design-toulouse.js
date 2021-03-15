import React from "react";
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
import Bg from "../images/agence-web-design-toulouse.jpg";
// import bgDev from '../images/bg-dev.jpg';
import mac from "../images/agence-web-design-linkweb.jpg";
import accompagnement from "../images/solutions-agence-web-design.jpg";
import capconduite from "../images/cap-conduite.png";
import valognes from "../images/valognes-menuiserie.png";
import fromagerie from "../images/fromagerie-emilie-avis.png";
import scroll from "../images/motiontest.svg";



class AgencenWebDesignToulouse extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence de Web Design Toulouse - Linkweb"
                    description="Linkweb est une agence de web design à Toulouse pour les professionnels les plus exigeants."
                    url="https://linkweb.fr/agence-web-design-toulouse/"
                    nom="Agence Web Design"
                    slug="agence-web-design-toulouse/"
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
                <section className="flex items-center w-full mx-auto pb-0 mt-40 mb-24 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{background:'#000000ad url('+ Bg +')', backgroundBlendMode:'overlay', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
            <div className="max-w-6xl mx-auto lg:mx-56 pt-2 lg:w-2/5 w-full flex-col items-end">
                <div className="mt-12 -mb-24 w-full flex flex-col items-center lg:items-start">
                    <div className="w-full  text-3xl text-center font-bold text-white century">4.6/5</div>
                        <p className="w-full  text-sm text-center font-bold text-white century -mt-2">Avis Google</p>
                        <div className="w-full -mt-8">
                            <svg className="mx-auto block" width="100px" viewBox="0 0 100 125">
                                <path fill="#FFFFFF" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                <path fill="#FFFFFF" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                <path fill="#FFFFFF" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                <path fill="#FFFFFF" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                <path fill="#FFFFFF" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z   M89.8,54.7c0.1-0.1,0.4,0,0.4,0l4.2,2.2l-0.8-4.7c0-0.2,0-0.3,0.1-0.4l3.4-3.3l-4.7-0.7c-0.2,0-0.3-0.1-0.4-0.3l-2.1-4.3L89.8,54.7  z"/>
                            </svg>                    
                        </div>
                    </div>
                    <div className="w-full lg:w-full flex justify-center lg:justify-center">
                    <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Agence de Web Design Toulouse</h1>
                    </div>
                    <br/>
                    <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Création de sites internet et mise en place de votre projet web à Toulouse.</h2>
                    {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                    <div className="w-full lg:w-full flex flex-col lg:flex-row justify-center pb-24 lg:justify-center mx-auto" style={{maxWidth:'460px'}}>
                        <RoundButtonPages url="tel:0533950030" text="05 33 95 00 30"/>
                        <RoundButtonPagesMail url="/contact-agence-web-toulouse/" text="Demander un devis"/>
                    </div>
            </div>
                <div className="w-full flex items-end justify-center mx-auto block pb-16">
                    <img src={scroll} alt="Scroll" width="60px"/>
                </div>
        </section>
        <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Développement de sites web <span className="text-bleu">fonctionnels</span> <br/>et d’une <span className="text-bleu">stratégie digitale</span> performante</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">La création d’un site internet professionnel est la première étape pour propulser la visibilité et l’activité de sa société. Nous nous attachons à créer un site web fonctionnel et performant pour dynamiser votre stratégie de communication d’entreprise.</h3>
                        </div>
        </section>
        <section className="phototext mb-24">
        <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                <div className="w-full flex justify-center items-center lg:w-5/12">
                    <img className="w-full" src={mac} alt="Linkweb"/>
                </div>
                <div className="w-full lg:w-1/2 my-10  flex flex-col">
                    <div className="w-full flex-col md:flex-row flex px-auto">
                        <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                            <p className="text-center">1</p>
                        </div>
                        <div className="w-full px-6 lg:px-6 flex flex-col justify-center">
                                <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>CONCEPTION UI & UX DESIGN
                                </h3>
                                <br/>
                                <h4 className="century">Construire un design d’interface intuitif est favorable pour une meilleure interaction avec vos visiteurs.</h4>
                                <br/>
                                <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" >Concevoir un <strong>site internet</strong> au <strong>web design intuitif</strong> est indispensable pour guider vos visiteurs au cours de leur <strong>navigation</strong>. Une <strong>navigation intuitive</strong> facilite grandement l’accès aux informations qui seront utiles pour l’utilisateur.</p>
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
                                        <span className="text-bleu">/</span>IDENTITÉ VISUELLE
                                    </h3>
                                    <br/>
                                    <h4>Votre site internet est à votre image : il est créé en suivant votre charge graphique pour vous permettre d’être connu et reconnu.</h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Un <strong>site internet</strong> à vos couleurs permet d’affirmer votre <strong>identité</strong> de marque à partir d’une <strong>identité visuelle</strong> bien marquée : <strong>application</strong> de votre <strong>charte graphique</strong>, mise en avant de votre logo, polices d’écriture, etc.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p className="text-center">3</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>SEARCH EXPERIENCE OPTIMIZATION (SXO)
                                    </h3>
                                    <br/>
                                    <h4 className="century">Mettre en place une expérience utilisateur favorable est indispensable à la poursuite d’objectifs de communication élevés.</h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Il ne suffit plus de produire du <strong>contenu qualitatif</strong> pour répondre aux attentes des <strong>moteurs de recherche</strong>. Il est désormais indispensable de proposer une <strong>expérience irréprochable à vos utilisateurs</strong> : temps de chargement, accessibilité de vos contenus principaux, etc.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p className="text-center">4</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>WEB ANALYTICS
                                    </h3>
                                    <br/>
                                    <h4 className="century">Le comportement des utilisateurs sur votre site constitue le reflet de votre plateforme. Analyser, c’est être en mesure d’agir pour adapter.</h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">L’analyse statistique se base sur des indicateurs qui permettent d’évaluer le <strong>comportement de vos utilisateurs</strong> en vue de déterminer les facteurs de succès ou les perspectives d’<strong>amélioration sur votre site internet</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                    </div>
            </section>
            </section>
            <section className="bg-black sidetitle py-10">
                        <section className="w-full lg:w-2/3 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
                            <h2 className="century text-center lg:text-left text-white text-3xl md:text-5xl leading-tight">Développement de site internet <span className="text-bleu">performant</span> et <span className="text-bleu">fonctionnel</span></h2>
                            <br/>
                            <div className="line-title my-4 ">
                                <br/>
                                <hr className="w-1/2 border-bleu lg:w-1/12"/>
                                <br/>
                                <h3 /*data-aos='fade-left'*/ className="text-xl text-white century pb-0">Nos <Link to="/comment-notre-agence-de-conception-realise-votre-projet/" className="font-bold text-bleu hover:text-white">méthodes de conception</Link> et de développement sont orientées pour vous donner accès à un site web opérationnel et vous permettre d’obtenir de hautes performances.</h3>
                            </div>
                        </section>
                        <section className="flex justify-center flex-col items-center">
                            <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 text-white century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><g><path fill="#ffffff" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   "/><path fill="#ffffff" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z"/><g><path fill="#ffffff" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z"/><rect x="72.041" y="56.851" width="0.312" height="5.159"/></g><path fill="#ffffff" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z"/><path fill="#ffffff" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z"/></g></svg>
                                    <h4 className="font-bold century text-bleu"><span className="font-bold">Webdesign adapté tous supports</span></h4>
                                    <p>Nous créons des <strong>sites web réactifs</strong> pour toutes les <strong>tailles d’écran (responsive design)</strong> que ce soit sur ordinateur, tablette ou <strong>mobile</strong>.</p>
                                </div>
                                <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" fill="#ffffff" viewBox="0 0 141.7 177.125"><path d="M126.2,93.6h-5.1c0-0.1,0-0.2,0-0.3V39.2c0-1.2-0.9-2.1-2.1-2.1H22.7c-1.2,0-2.1,0.9-2.1,2.1v54.1c0,0.1,0,0.2,0,0.3h-5.1  c-1.1,0-2,0.9-2,2v5.8c0,1.8,1.5,3.3,3.3,3.3h108c1.8,0,3.3-1.5,3.3-3.3v-5.8C128.2,94.4,127.3,93.6,126.2,93.6z M22.7,41.3  c0-1.2,0.9-2.1,2.1-2.1H117c1.2,0,2.1,0.9,2.1,2.1v52.3H116c0-0.1,0-0.2,0-0.3V44.8c0-1.4-1.1-2.5-2.5-2.5H28.1  c-1.4,0-2.5,1.1-2.5,2.5v48.4c0,0.1,0,0.2,0,0.3h-3.1V41.3H22.7z M26.4,93.2V44.8c0-1,0.8-1.7,1.7-1.7h85.5c1,0,1.7,0.8,1.7,1.7  v48.4c0,0.1,0,0.2,0,0.3H26.4C26.4,93.5,26.4,93.4,26.4,93.2z M126.1,101.2c0,0.9-0.6,1.3-1.5,1.4c-0.5,0-1,0-1.5,0  c-17.5,0-35,0-52.5,0c-17.2,0-34.5,0-51.7,0c-0.4,0-0.8,0-1.1,0c-1.8,0-2.2-0.4-2.2-2.2c0-1.2,0-2.5,0-3.7c0-0.7,0.3-1,1-1  c0.4,0,0.9,0,1.3,0c3.2,0,6.4,0,9.6,0c8.3,0,16.6,0,24.9,0c0.4,0,0.8,0,1.2,0.1c0.7,0.1,1.3,0.5,1.8,1.3c0.8,1.3,2.2,1.6,3.6,1.6  c7.6,0,15.2,0,22.8,0c1.6,0,3-0.6,3.8-2c0.3-0.6,0.7-0.8,1.2-0.9c0.3-0.1,0.6-0.1,1-0.1c5.4,0,10.8,0,16.2,0c3.3,0,6.6,0,10,0  c3.2,0,6.3,0,9.5,0c0.5,0,1,0,1.5,0c0.6,0,1,0.2,1,0.9C126.1,98.1,126.1,99.6,126.1,101.2z"/><g><path d="M70.9,48.3c-0.7,0-1.2,0.6-1.2,1.3v3.2c0,0.7,0.6,1.3,1.2,1.3c0.7,0,1.2-0.6,1.2-1.3v-3.2C72.1,48.9,71.5,48.3,70.9,48.3z"/><path d="M70.9,79.5c-0.7,0-1.2,0.6-1.2,1.3V84c0,0.7,0.6,1.3,1.2,1.3c0.7,0,1.2-0.6,1.2-1.3v-3.2C72.1,80.1,71.5,79.5,70.9,79.5z"/><path d="M58.2,66.9c0-0.7-0.6-1.2-1.3-1.2h-3.2c-0.7,0-1.3,0.6-1.3,1.2c0,0.7,0.6,1.2,1.3,1.2h3.2C57.6,68.1,58.2,67.5,58.2,66.9z"/><path d="M88.1,65.6h-3.2c-0.7,0-1.3,0.6-1.3,1.2c0,0.7,0.6,1.2,1.3,1.2h3.2c0.7,0,1.3-0.6,1.3-1.2S88.8,65.6,88.1,65.6z"/><path d="M81.6,57.9l2.3-2.3c0.5-0.5,0.5-1.3,0.1-1.8c-0.5-0.5-1.3-0.5-1.8,0.1l-2.3,2.3c-0.5,0.5-0.5,1.3-0.1,1.8   C80.3,58.4,81.1,58.4,81.6,57.9z"/><path d="M60.1,75.9l-2.3,2.3c-0.5,0.5-0.5,1.3-0.1,1.8c0.5,0.5,1.3,0.5,1.8-0.1l2.3-2.3c0.5-0.5,0.5-1.3,0.1-1.8   C61.4,75.3,60.6,75.4,60.1,75.9z"/><path d="M59.6,53.8c-0.5-0.5-1.3-0.5-1.8-0.1c-0.5,0.5-0.5,1.3,0.1,1.8l2.3,2.3c0.5,0.5,1.3,0.5,1.8,0.1c0.5-0.5,0.5-1.3-0.1-1.8   L59.6,53.8z"/><path d="M81.6,75.9c-0.5-0.5-1.3-0.5-1.8-0.1c-0.5,0.5-0.5,1.3,0.1,1.8l2.3,2.3c0.5,0.5,1.3,0.5,1.8,0.1c0.5-0.5,0.5-1.3-0.1-1.8   L81.6,75.9z"/></g></svg>                    
                                    <h4 className="font-bold century text-bleu -mt-4"><span className="font-bold">Conception d’un design intuitif</span></h4>
                                    <p>Nous concevons un <strong>design intuitif</strong> pour guider vos <strong>utilisateurs</strong> vers les contenus importants pour eux et pour vous.</p>
                                </div>
                                <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" fill="#3c3c3c" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125" ><g><path fill="#ffffff" d="M39.021,26.066c0.207,0.206,0.421,0.308,0.625,0.272c0.099-0.017,0.188-0.065,0.269-0.141   c0.994,3.091,2.898,7.279,5.3,9.118c1.384,1.058,2.934,1.706,4.569,1.706c1.672,0,3.253-0.677,4.66-1.777   c2.36-1.847,4.229-5.996,5.21-9.047c0.08,0.075,0.17,0.124,0.269,0.141c0.176,0.031,0.359-0.04,0.538-0.192   c0.45-0.38,0.871-1.27,1.063-2.351c0.252-1.409,0.025-2.644-0.504-2.891c-0.038-0.018-0.079-0.032-0.121-0.039   c-0.163-0.028-0.334,0.032-0.503,0.164l-0.009,0.011c0-0.001-0.001-0.002-0.001-0.003c-0.002,0.001-0.003,0.002-0.004,0.004   c-0.002-0.01-0.002-0.021-0.003-0.031c-0.639-2.421-1.44-3.904-2.271-4.785c-0.158-0.085-0.326-0.156-0.505-0.208   c-0.022,0.355,0.384,0.897,0.427,1.425c-1.147-0.535-2.244-1.366-3.847-1.425c-0.368-0.014-0.761-0.013-1.168-0.005   c-3.875,1.399-8.149-0.179-8.149-0.179c-4.849-0.449-5.619,4.589-5.678,5.165c-0.001,0.014-0.002,0.028-0.003,0.042c0,0,0,0,0,0v0   v0c-0.172-0.139-0.348-0.203-0.516-0.174c-0.074,0.013-0.143,0.043-0.207,0.089c-0.154,0.111-0.277,0.315-0.366,0.584   c-0.047,0.679-0.072,1.366-0.082,2.075c0.009,0.061,0.018,0.121,0.029,0.182C38.224,24.807,38.604,25.65,39.021,26.066z"/><path fill="#ffffff" d="M25.313,90.725h49.375c1.842,0,3.333-1.476,3.333-3.295l6.732-30.729c0-1.818-1.493-3.294-3.333-3.294h-3.992   h-1.837h-8.927H54.795h-3.277h-3.536h-3.161H22.56h-3.979c-1.841,0-3.334,1.475-3.334,3.294l6.732,30.729   C21.979,89.249,23.471,90.725,25.313,90.725z M50,70.572c0.988,0,1.789,0.801,1.789,1.789S50.988,74.149,50,74.149   c-0.988,0-1.789-0.8-1.789-1.788S49.012,70.572,50,70.572z"/><path fill="#3c3c3c" d="M48.019,52.862L48.019,52.862h3.459h3.712h11.734h8.404h2.021c-0.034-0.179-0.076-0.357-0.127-0.533   c-3.115-10.715-8.869-11.083-10.108-11.373c-2.438-0.572-5.392-0.328-6.967-0.82c-0.276,2.307-4.716,4.141-10.154,4.141   c-5.437,0-9.877-1.834-10.154-4.141c-1.575,0.492-4.528,0.248-6.967,0.82c-1.239,0.289-6.993,0.658-10.108,11.373   c-0.051,0.176-0.093,0.354-0.127,0.533h21.82H48.019z"/><line fill="none" stroke="#000000" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" x1="39.185" y1="21.041" x2="39.185" y2="21.041"/><path d="M37.9,27.247c1.081,2.909,2.793,6.843,4.91,8.91c1.198,1.171,2.526,2.099,3.942,2.659c0.974,0.387,1.988,0.601,3.032,0.601   s2.058-0.214,3.032-0.601c1.466-0.581,2.837-1.553,4.067-2.781c2.064-2.061,3.733-5.952,4.793-8.812   c0.815-0.24,1.671-1.768,2.02-3.718c0.377-2.116,0.022-3.964-0.792-4.274c0.029-0.515,0.045-1.039,0.044-1.573   c-0.02-7.674-4.52-12.136-11.614-12.611c-6.185-0.415-10.845,2.043-12.968,6.127c-0.705,1.358-1.114,3.051-1.275,4.893   c-0.249,0.992-0.381,2.029-0.381,3.098h0.023c-0.001,0.008-0.001,0.016-0.002,0.024c-0.015,0.001-0.03,0.002-0.045,0.005   c-0.905,0.158-1.316,2.088-0.92,4.312C36.129,25.548,37.051,27.127,37.9,27.247z M38.096,21.54   c0.088-0.269,0.211-0.473,0.366-0.584c0.064-0.046,0.133-0.076,0.207-0.089c0.168-0.029,0.344,0.036,0.516,0.174c0,0,0,0,0,0   c0.001-0.014,0.002-0.027,0.003-0.042c0.059-0.576,0.829-5.614,5.678-5.165c0,0,4.273,1.578,8.149,0.179   c0.407-0.008,0.8-0.009,1.168,0.005c1.603,0.059,2.699,0.89,3.847,1.425c-0.043-0.528-0.449-1.069-0.427-1.425   c0.179,0.052,0.347,0.123,0.505,0.208c0.83,0.88,1.632,2.364,2.271,4.785c0.001,0.01,0.001,0.021,0.003,0.031   c0.001-0.001,0.002-0.002,0.004-0.004c0,0.001,0.001,0.002,0.001,0.003l0.009-0.011c0.169-0.132,0.34-0.192,0.503-0.164   c0.042,0.007,0.083,0.021,0.121,0.039c0.529,0.248,0.756,1.482,0.504,2.891c-0.192,1.081-0.613,1.97-1.063,2.351   c-0.179,0.152-0.362,0.223-0.538,0.192c-0.099-0.017-0.188-0.065-0.269-0.141c-0.981,3.051-2.85,7.2-5.21,9.047   c-1.406,1.101-2.987,1.777-4.66,1.777c-1.635,0-3.185-0.648-4.569-1.706c-2.402-1.839-4.307-6.027-5.3-9.118   c-0.081,0.075-0.17,0.124-0.269,0.141c-0.204,0.036-0.418-0.066-0.625-0.272c-0.417-0.416-0.797-1.259-0.978-2.27   c-0.011-0.061-0.02-0.121-0.029-0.182C38.024,22.905,38.049,22.219,38.096,21.54z"/><circle fill="#3c3c3c" cx="50" cy="72.361" r="1.789"/><path fill="#3c3c3c" d="M78.047,92.12H21.955c-0.79,0-1.429,0.646-1.429,1.44S21.165,95,21.955,95h56.092   c0.789,0,1.428-0.645,1.428-1.439C79.474,92.766,78.834,92.12,78.047,92.12z"/><path fill="#3c3c3c" d="M25.009,91.27h49.983c1.858,0,3.365-1.507,3.365-3.366l6.731-31.676c0-1.858-1.507-3.365-3.365-3.365H77.35   h-2.021h-8.404H55.19h-3.712H48.02h-0.001h-3.561h-21.82h-4.36c-1.859,0-3.366,1.506-3.366,3.365l6.731,31.677   C21.642,89.763,23.149,91.27,25.009,91.27z M18.581,53.407h3.979h22.261h3.161h3.536h3.277h11.869h8.927h1.837h3.992   c1.84,0,3.333,1.476,3.333,3.294L78.021,87.43c0,1.819-1.491,3.295-3.333,3.295H25.313c-1.841,0-3.333-1.476-3.333-3.295   l-6.732-30.729C15.247,54.882,16.74,53.407,18.581,53.407z"/></g></svg>
                                    <h4 className="font-bold century text-bleu"><span className="font-bold">Expérience utilisateur optimale</span></h4>
                                    <p>Nous construisons un <strong>site web</strong> qui répond aux préoccupations de vos utilisateurs tout en mettant votre entreprise en avant.</p>
                                </div>
                            </div>
                            <div className="w-full text-white flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                            <div className="w-full svgtransform -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125" fill="#ffffff"><g><g><g><path d="M82.3,81.7c-0.8,0-1.5-0.7-1.5-1.5c0-17-13.8-30.9-30.9-30.9c-17,0-30.9,13.8-30.9,30.9     c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5c0-18.6,15.1-33.8,33.8-33.8s33.8,15.1,33.8,33.8C83.8,81.1,83.1,81.7,82.3,81.7z"/></g><g><path d="M1.5,67.4c-0.1,0-0.3,0-0.4-0.1c-0.8-0.2-1.2-1-1-1.8c1-3.5,2.5-6.9,4.2-10.2c1-1.8,0.6-4.1-0.8-5.5     c-3-3-3-7.8,0-10.7l5.4-5.4c1.4-1.4,3.3-2.2,5.4-2.2c2,0,3.9,0.8,5.3,2.2c0,0,0,0,0,0c1.5,1.5,3.7,1.8,5.5,0.8     c3.2-1.8,6.7-3.2,10.2-4.2c1.9-0.6,3.3-2.4,3.3-4.5c0-4.2,3.4-7.6,7.6-7.6h7.6c4.2,0,7.6,3.4,7.6,7.6c0,2.1,1.4,3.9,3.3,4.5     c3.5,1,6.9,2.5,10.2,4.2c1.8,1,4.1,0.6,5.5-0.8c0,0,0,0,0,0c1.4-1.4,3.3-2.2,5.3-2.2c2,0,3.9,0.8,5.4,2.2l5.4,5.4     c1.4,1.4,2.2,3.3,2.2,5.4s-0.8,3.9-2.2,5.4c-1.5,1.5-1.8,3.7-0.8,5.5c1.8,3.2,3.2,6.6,4.2,10.2c0.2,0.8-0.2,1.6-1,1.8     c-0.8,0.2-1.6-0.2-1.8-1c-1-3.3-2.3-6.6-4-9.6c-1.6-2.9-1.1-6.6,1.3-9c1.8-1.8,1.8-4.8,0-6.6l-5.4-5.4c-0.9-0.9-2.1-1.4-3.3-1.4     c-1.3,0-2.4,0.5-3.3,1.4c0,0,0,0,0,0c-2.4,2.3-6,2.9-8.9,1.3c-3.1-1.7-6.3-3-9.6-4c-3.2-0.9-5.4-3.9-5.4-7.3     c0-2.6-2.1-4.7-4.7-4.7h-7.6c-2.6,0-4.7,2.1-4.7,4.7c0,3.3-2.2,6.3-5.4,7.3c-3.3,1-6.5,2.3-9.6,4c-2.9,1.6-6.6,1.1-8.9-1.3     c0,0,0,0,0,0c-0.9-0.9-2.1-1.4-3.3-1.4c-1.3,0-2.4,0.5-3.3,1.4l-5.4,5.4c-1.8,1.8-1.8,4.8,0,6.6c2.4,2.4,2.9,6.1,1.3,9     c-1.7,3.1-3,6.3-4,9.6C2.7,67,2.1,67.4,1.5,67.4z"/></g></g><g><path d="M98.5,81.7H1.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h97.1c0.8,0,1.5,0.7,1.5,1.5S99.3,81.7,98.5,81.7z    "/></g></g></svg>
                                    <h4 className="font-bold century text-bleu"><span className="font-bold">Maintenance technique</span></h4>
                                    <p>Notre équipe technique assure la <strong>maintenance de votre site internet</strong> et intervient en cas de dysfonctionnement.</p>
                                </div>
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="12.937 19.988 486.829 591.2012500000001"><g><path fill="#ffffff" d="M453.892,19.988H58.84c-25.311,0-45.903,20.595-45.903,45.909v263.348c0,25.312,20.592,45.903,45.903,45.903h83.62v81.085   c0,20.245,16.483,36.716,36.744,36.716h152.511c21.244,0,38.528-17.287,38.528-38.535v-79.265h83.648   c25.295,0,45.874-20.592,45.874-45.903V65.897C499.766,40.583,479.187,19.988,453.892,19.988z M58.84,27.988h395.052   c20.884,0,37.874,17.006,37.874,37.909v38.814H20.937V65.897C20.937,44.994,37.94,27.988,58.84,27.988z M237.442,197.73h37.855   c29.951,0,54.318,24.355,54.318,54.291V306.2H183.117v-54.18c0-14.968,6.092-28.54,15.929-38.371   C208.883,203.819,222.465,197.73,237.442,197.73z M362.243,454.414c0,16.837-13.695,30.535-30.528,30.535H179.204   c-15.85,0-28.744-12.882-28.744-28.716v-85.085v-55.511c0-0.806,0.647-1.438,1.474-1.438h26.075   c0.354,0.102,0.72,0.175,1.107,0.175h154.499c0.387,0,0.753-0.072,1.107-0.175h26.076c0.81,0,1.444,0.632,1.444,1.438V454.414z    M453.892,367.149h-83.647v-51.512c0-5.204-4.236-9.438-9.444-9.438h-0.001h-23.183v-54.18c0-34.347-27.956-62.291-62.318-62.291   h-37.855c-17.184,0-32.765,6.986-44.051,18.266c-11.286,11.279-18.276,26.852-18.276,44.026v54.178h-23.182   c-5.224,0-9.474,4.233-9.474,9.438v0.001v51.511H58.84c-20.9,0-37.903-17.003-37.903-37.903V112.711h470.829v216.535   C491.766,350.146,474.775,367.149,453.892,367.149z"/><path fill="#ffffff" d="M256.369,364.854c-11.108,0-20.146,9.034-20.146,20.14c0,7.416,3.978,14.056,10.338,17.592v27.703c0,2.209,1.791,4,4,4   h11.611c2.209,0,4-1.791,4-4v-27.703c6.36-3.537,10.338-10.177,10.338-17.592C276.51,373.888,267.475,364.854,256.369,364.854z    M260.719,396.329c-1.536,0.599-2.547,2.078-2.547,3.727v26.232h-3.611v-26.232c0-1.648-1.011-3.128-2.547-3.727   c-4.66-1.817-7.791-6.373-7.791-11.336c0-6.693,5.449-12.14,12.146-12.14c6.694,0,12.141,5.446,12.141,12.14   C268.51,389.956,265.379,394.512,260.719,396.329z"/><path fill="#ffffff" d="M65.828,82.413c8.805,0,15.969-7.164,15.969-15.969c0-8.809-7.164-15.976-15.969-15.976   c-8.809,0-15.975,7.167-15.975,15.976C49.853,75.25,57.02,82.413,65.828,82.413z M65.828,58.468c4.394,0,7.969,3.578,7.969,7.976   c0,4.394-3.575,7.969-7.969,7.969c-4.397,0-7.975-3.575-7.975-7.969C57.853,62.046,61.431,58.468,65.828,58.468z"/><path fill="#ffffff" d="M114.807,82.413c8.809,0,15.975-7.164,15.975-15.97c-0.002-8.809-7.168-15.975-15.975-15.975   c-8.809,0-15.975,7.167-15.975,15.976C98.832,75.25,105.999,82.413,114.807,82.413z M114.807,58.468   c4.396,0,7.974,3.579,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969s-7.975-3.575-7.975-7.969   C106.832,62.046,110.41,58.468,114.807,58.468z"/><path fill="#ffffff" d="M163.815,82.413c8.809,0,15.975-7.164,15.975-15.969c0-8.809-7.167-15.976-15.975-15.976   c-8.805,0-15.969,7.167-15.969,15.976C147.846,75.25,155.01,82.413,163.815,82.413z M163.815,58.468   c4.397,0,7.975,3.578,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969c-4.394,0-7.969-3.575-7.969-7.969   C155.846,62.046,159.421,58.468,163.815,58.468z"/></g></svg>
                                    <h4 className="font-bold century text-bleu"><span className="font-bold">Sécurisation HTTPS</span></h4>
                                    <p>Nous mettons en place un <strong>certificat SSL</strong> pour garantir une navigation en parfaite sécurité pour vos utilisateurs.</p>
                                </div>
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" fill="#ffffff"  viewBox="0 0 64 80"><path d="M7,57h36.434c1.349,1.543,2.92,2.901,4.694,4.01l1.342,0.838C49.632,61.949,49.816,62,50,62s0.368-0.051,0.53-0.152  l1.342-0.838c4.507-2.818,7.76-7.194,9.159-12.322l0.934-3.425c0.144-0.528-0.164-1.074-0.69-1.225l-0.843-0.241  c-3.827-1.094-7.165-3.314-9.651-6.422c-0.379-0.475-1.183-0.475-1.562,0c-0.384,0.48-0.796,0.932-1.219,1.369V26  c0-0.552-0.448-1-1-1h-2v-3c0-11.028-8.972-20-20-20S5,10.972,5,22v3H3c-0.552,0-1,0.448-1,1v26C2,54.757,4.243,57,7,57z M50,39.546  c2.624,2.925,5.979,5.038,9.775,6.144l-0.674,2.472c-1.266,4.642-4.209,8.602-8.289,11.152L50,59.821l-0.812-0.507  c-4.08-2.55-7.024-6.51-8.29-11.152l-0.674-2.472C44.021,44.584,47.376,42.472,50,39.546z M7,22c0-9.925,8.075-18,18-18  s18,8.075,18,18v3h-4v-3c0-7.72-6.28-14-14-14s-14,6.28-14,14v3H7V22z M13,25v-3c0-6.617,5.383-12,12-12s12,5.383,12,12v3H13z M4,27  h42v13.544c-1.902,1.474-4.073,2.579-6.431,3.254l-0.843,0.241c-0.527,0.15-0.834,0.696-0.69,1.225l0.934,3.425  c0.622,2.281,1.629,4.4,2.932,6.312H7c-1.654,0-3-1.346-3-3V27z"/><path d="M48,54c0.256,0,0.512-0.098,0.707-0.293l7-7l-1.414-1.414L48,51.586l-2.293-2.293l-1.414,1.414l3,3  C47.488,53.902,47.744,54,48,54z"/><path d="M6.914,49.836l-0.369,1.98c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L10,51.915l2.037,0.985  c0.139,0.067,0.287,0.1,0.436,0.1c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418  c0.291-0.261,0.403-0.667,0.288-1.039c-0.115-0.373-0.436-0.645-0.823-0.697l-2.257-0.302l-0.994-1.854  c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302c-0.387,0.052-0.708,0.324-0.823,0.697  c-0.115,0.373-0.002,0.778,0.288,1.039L6.914,49.836z M8.896,48.295c0.318-0.042,0.597-0.235,0.749-0.519L10,47.116l0.354,0.661  c0.152,0.283,0.431,0.476,0.749,0.519l0.614,0.082l-0.385,0.345c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345L8.896,48.295z"/><path d="M25.132,46.683l-2.257-0.302l-0.994-1.854c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302  c-0.387,0.052-0.708,0.324-0.823,0.697c-0.115,0.373-0.002,0.778,0.288,1.039l1.582,1.418l-0.369,1.98  c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L21,51.915l2.037,0.985c0.139,0.067,0.287,0.1,0.436,0.1  c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418c0.291-0.261,0.403-0.667,0.288-1.039  C25.841,47.006,25.52,46.734,25.132,46.683z M22.333,48.723c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345l0.614-0.082c0.318-0.042,0.597-0.235,0.749-0.519L21,47.116l0.354,0.661c0.152,0.283,0.431,0.476,0.749,0.519  l0.614,0.082L22.333,48.723z"/><path d="M36.132,46.683l-2.257-0.302l-0.994-1.854c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302  c-0.387,0.052-0.708,0.324-0.823,0.697c-0.115,0.373-0.002,0.778,0.288,1.039l1.582,1.418l-0.369,1.98  c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L32,51.915l2.037,0.985c0.139,0.067,0.287,0.1,0.436,0.1  c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418c0.291-0.261,0.403-0.667,0.288-1.039  C36.841,47.006,36.52,46.734,36.132,46.683z M33.333,48.723c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345l0.614-0.082c0.318-0.042,0.597-0.235,0.749-0.519L32,47.116l0.354,0.661c0.152,0.283,0.431,0.476,0.749,0.519  l0.614,0.082L33.333,48.723z"/><path d="M17,42c2.155,0,4.127-1.158,5.191-3h3.573l1.789,0.895c0.281,0.141,0.613,0.141,0.895,0L30,39.118l1.553,0.776  c0.281,0.141,0.613,0.141,0.895,0L34.236,39H36c0.265,0,0.52-0.105,0.707-0.293l2-2c0.391-0.391,0.391-1.023,0-1.414l-2-2  C36.52,33.105,36.265,33,36,33H22.191c-1.064-1.842-3.036-3-5.191-3c-3.309,0-6,2.691-6,6S13.691,42,17,42z M17,32  c1.586,0,3.023,0.942,3.662,2.401C20.821,34.765,21.181,35,21.578,35h14.008l1,1l-1,1H34c-0.155,0-0.309,0.036-0.447,0.105  L32,37.882l-1.553-0.776c-0.281-0.141-0.613-0.141-0.895,0L28,37.882l-1.553-0.776C26.309,37.036,26.155,37,26,37h-4.422  c-0.397,0-0.757,0.235-0.916,0.599C20.023,39.058,18.586,40,17,40c-2.206,0-4-1.794-4-4S14.794,32,17,32z"/><rect x="15" y="35" width="2" height="2"/></svg>
                                    <h4 className="font-bold century text-bleu"><span className="font-bold">Conformité RGPD</span></h4>
                                    <p>Nous respectons les directives issues du RGPD concernant le <strong>respect des données personnelles de vos utilisateurs</strong>.<br/>
                                        <span className="text-xs">(*) Réglement Général pour la Protection des Données</span></p>
                                </div>
                            </div>
                        </section>
                    </section>  
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
            <h2 /*data-aos='fade-right'*/ className="century text-center text-black text-3xl md:text-5xl leading-none">
                Activez tous les leviers pour développer <span className="text-bleu">votre activité sur le Web</span>
                        </h2>
                        <hr className="blue border-bleu"></hr>
                    </section>
                    <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
          <div className="w-full xl:w-1/3 one px-auto">
            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
              <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
              <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                  <span className="text-bleu">/</span>JE SOUHAITE DÉCOUVRIR CE QU’UNE AGENCE WEB DESIGN PEUT M’APPORTER
                </h3>
                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                Lorsque l’on fait appel à une <strong><Link to="/" className="font-bold text-bleu hover:text-black">agence spécialisée</Link> dans la création de sites web</strong>, il est important de fixer des objectifs et un cap. Que ce soit pour développer une plateforme parfaitement opérationnelle, à <strong>votre image</strong> et qui pourra <strong>générer des contacts prospects</strong> pour vous, nos prestations s’adaptent en fonction de vos besoins.
                </div>
  
              </section>
            </div>
          </div>
          <div className="w-full xl:w-1/3 two px-auto">
            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
              <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                  <span className="text-bleu">/</span>JE VEUX ÊTRE ACCOMPAGNER POUR DÉFINIR UN PROJET WEB PERFORMANT
                </h3>
                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                Le <strong>Web</strong> est un univers immense sur lequel il peut-être difficile de se frayer une place. Toutefois, le <strong>développement d’un projet web</strong> performant et cohérent permet d’acquérir de la <strong>visibilité</strong>, ainsi que de <strong>se faire connaître</strong>. Le travail de <strong>référencement</strong> mené sur votre site web joue un rôle crucial dans la réussite de votre projet.
                </div>
                <br/>
                <button
                    className="font-light mx-auto roundedButton bg-bleu text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                    type="button"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/contact-agence-web-toulouse/';
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
                  <span className="text-bleu">/</span>JE CHOISIS DES EXPERTS DU WEB POUR LA CRÉATION DE MON SITE INTERNET
                </h3>
                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                Les services de <strong><Link to="/agence-developpement-web-toulouse/" className="text-bleu font-bold hover:text-black">développement</Link> et de référencement de notre agence</strong> ont un rôle de <strong>conseil</strong> pour vous orienter vers une solution efficace en vue d’obtenir un résultat professionnel. Nous proposons le <strong>développement et la gestion de votre projet (hébergement, maintenance, etc.)</strong> en plus de la définition de votre <strong>stratégie digitale</strong>.
                </div>
              </section>
              
            </div>
          </div>
        </section>

                    <section className="flex w-full flex-col mx-auto px-0 py-6 my-4">
                        <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10">
                            <h2 className="century text-3xl md:text-5xl text-black leading-tight">Linkweb : agence de <span className="text-bleu">web design</span> à Toulouse</h2>
                            <br/>
                            <hr className="border-solid w-1/6 border-bleu"></hr>
                        </section>
                    </section>
                    <section className="bloctextimg w-full md:w-10/12 mx-auto lg:block lg:mx-auto xl:w-full flex flex-col lg:flex-row justify-center">
                        <div className="w-full image lg:w-1/2 xl:w-2/5 lg:absolute flex justify-center lg:mt-64 xl:mt-24 pr-0 md:pr-16 lg:justify-center lg:items-center">
                            <img src={accompagnement} alt="Agence Web Toulouse" style={{ maxHeight: '450px' }} />
                        </div>
                        <div className="text century w-full text-justify mr-16 lg:w-3/5 xl:w-2/5 md:p-20 lg:pl-32 p-10 lg:py-10 text-black text-sm xl:text-md" style={{ backgroundColor: '#d3d3d352'}}>
                            <h4 className="century text-xl"><span className="font-bold">Créer un site internet, c’est anticiper l’ensemble des paramètres qui feront de lui un atout indéniable au sein d’une <Link to="/agence-communication-web-toulouse/" className="text-bleu font-bold hover:text-black">stratégie de communication web</Link>.</span></h4>
                            <br/>
                            <p style={{fontSize:'16px'}}>
                                Du <strong>web design</strong> au <strong>référencement naturel</strong>, notre ligne directrice est consiste à vous apporter un <strong>site internet de qualité</strong> pour vous permettre de franchir un cap en termes de <strong>visibilité et de notoriété</strong> en vue de booster l’activité de votre société.<br/>
                            <br/>
                                Grâce à sa compétence d’<strong>agence spécialisée dans la création de sites internet</strong> dans le <strong>référencement</strong>, <strong>Linkweb</strong> vous apporte une solution concrète que ce soit d’un point de vue <strong>graphique</strong>, comme en termes de <Link to="/agence-web-marketing-toulouse/" className="text-bleu hover:text-black font-bold"><strong>marketing digital</strong></Link>.<br/>
                            <br/>
                                Les <strong>sites</strong> que nous créons sont conçus pour attirer vos futurs <strong>clients</strong>. C’est pourquoi, notre équipe rédige le <strong>contenu de votre site</strong> à destination de <strong>vos utilisateurs</strong>, mais également des <strong>moteurs de recherche Google</strong>. En effet, <strong>concevoir un site performant en SEO (Search Engine Optimization)</strong> permet d’atteindre des utilisateurs pour construire votre <strong>trafic organique</strong>.<br/>
                            <br/>
                                Grâce à l’optimisation du <strong>parcours de navigation de votre site web</strong>, vos visiteurs seront guidés de manière totalement intuitive. C’est ce qui fait de <strong>votre site</strong> une réelle <strong>vitrine</strong> pour votre entreprise, mais également une interface de contact. Linkweb fait partie des <strong>agences</strong> qui s’attachent à investir dans des voies porteuses pour livrer à ses <strong>clients</strong> un projet cohérent avec leurs besoins avec des <strong>solutions</strong> concrètes.
                            </p>
                        </div>

                        <br />
                    </section>
                    <section className="w-full flex my-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                        <div className="w-full lg:w-8/12 text-2xl">
                        <h2>Vous souhaitez travailler avec notre agence de web design à Toulouse ?</h2>
                        <h4>Linkweb soutient les professionnels souhaitant développer leur présence sur Internet.</h4>
                        </div>
                        <div className="w-full mx-auto flex flex-col items-center justify-center lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <button
                            className="font-light mx-auto roundedButton bg-darkgrey text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4"
                            type="button"
                            formtarget="_blank"
                            onClick={(e) => {
                            e.preventDefault();
                            window.location.href='/contact-agence-web-toulouse/';
                            }}
                        >CONTACTEZ-NOUS</button>
                        {/* <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" /> */}
                        </div>
                    </section>
                    <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Ils sont satisfaits par nos <span className="text-bleu">solutions de communication</span></h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        </div>
                    </section>   
                    <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-center justify-center century text-center mt-3 px-6 mb-12">
                <div className="flex flex-row flex-wrap">
                                <article className="w-full md:w-1/2 mt-5 lg:w-1/2 text-left xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                                    <div className="avis" style={{minHeight:'340px'}}>
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={capconduite} alt="Avis Google"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>Cap Conduite</h4>
                                        <p>« Cela fait maintenant 4 ans que nous collaborons ensemble, très bon suivi des clients et excellente <strong>gestion du site internet</strong>. Rapport mensuel des visites.
                                            L’équipe est très professionnelle et à l’écoute de tous nos besoins.
                                            Très Satisfait !!!
                                            Cap'conduite Auto-Ecole »</p>
                                    </div>
                                </article>
                                <article className="w-full md:w-1/2 lg:w-1/2 text-left mt-5 xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                                    <div className="avis" style={{minHeight:'340px'}}>
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={valognes} alt="Avis My Business"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>Valognes Menuiserie</h4>
                                        <p>« Linkweb, partenaire de confiance, nous sommes ravis aujourd'hui de notre collaboration. Merci à Sophie de nous avoir démarché. C'est une affaire qui roule, beaucoup de sérieux, de la réactivité, et Anthony assure très bien le bon suivi de notre dossier au quotidien concernant notre <strong>entreprise</strong>. Nous sommes vraiment très contents de cette entreprise. »</p>
                                    </div>
                                </article>
                                <article className="w-full md:w-1/2 lg:w-1/2 mt-5 text-left xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                                    <div className="avis" style={{minHeight:'340px'}}>
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={fromagerie} alt="Avis My Business"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>Fromagerie Émilie</h4>
                                        <p>« J'ai fait confiance à Linkweb il y a maintenant 6 mois.
                                            J'en suis plus que ravie. L'<strong>agence</strong> est super réactive, à l'écoute des besoins et fait toujours au mieux pour répondre à nos attentes.
                                            Chaque mois un point est fait pour voir l'évolution du <strong>référencement</strong>. 
                                            Très professionnel. Je recommande. »</p>
                                        <br/>
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
                            <h2 className="century text-3xl md:text-5xl text-black leading-tight">Qu’est-ce qu’une <span className="text-bleu">agence de création web</span><br/> peut vous apporter pour <span className="text-bleu">votre communication</span> ?</h2>
                            <br/>
                            <hr className="border-solid w-1/6 border-bleu"></hr>
                            <br/>
                            <h3 className="text-black text-xl text-center century">Internet est l’une des sources principales de visibilité pour une société. Ainsi, portez des projets de <Link to="/agence-digitale-toulouse/" className="font-bold text-bleu hover:text-black">marketing digital</Link> peut devenir un vecteur de succès en ligne important pour votre société.</h3>
                        </section>
                    </section>
                    <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                        <div className="w-full md:w-3/4 py-0 flex justify-end">
                            <Accordion>
                                <div className="w-full" label="MAÎTRISEZ VOTRE COMMUNICATION EN LIGNE">
                                    <p><strong>Avoir un site internet</strong> est un gage de crédibilité pour un professionnel envers les visiteurs. En plus de constituer votre <strong>vitrine sur Internet</strong> et d’être accessible à tout moment de la journée, le site internet est un <strong>support de communication</strong> extrêmement complet.</p>
                                    <br/>
                                    <p>En effet, il vous permettra de maîtriser votre communication externe, de vous adresser plus spécifiquement à vos <strong>cibles</strong>, mais il peut également vous apporter des <strong>solutions</strong> en interne. Grâce à la <strong>création d’une solution sur-mesure</strong>, il est possible de développer une interface vous permettant une gestion optimale de vos <strong>services</strong>. C’est notamment le cas si vous souhaitez la <strong>création d’un intranet</strong> notamment.</p>
                                    <br/>
                                    <p>Quoi qu’il en soit, le <strong>site internet</strong> est un excellent outil pour maîtriser votre <strong>communication</strong> et affirmer votre <strong>identité (graphique, visuelle, valeurs, etc.)</strong> en tant que marque grâce au <strong>marketing digital</strong>. </p>
                                </div>
                                <div label="PROFITEZ DES OPPORTUNITÉS OFFERTES GRÂCE AU RÉFÉRENCEMENT NATUREL">
                                    <p>En plus de constituer un canal direct vers vos cibles, le <strong>site internet</strong> offre également de nouvelles perspectives. En effet, avec le <strong>référencement naturel</strong>, ce n’est plus vous qui cherchez vos prospects, mais bien eux qui vous trouvent.</p>
                                    <br/>
                                    <p>Mettre à profit un <strong>moteur de recherche comme Google</strong> peut être un terrain de jeu très important pour vous et votre <strong>visibilité</strong>. Notre rôle est de vous accompagner dans la détection d’opportunités et le <strong>choix de mots-clés</strong> qui vous rendront accessibles auprès d’un public cible pertinent pour vous.</p>
                                    <br/>
                                    <p>Nous travaillons également la <strong>popularité de votre nom de domaine</strong> pour faire de <strong>votre site</strong> une référence aux <strong>yeux de Google</strong> et vous permettre de gravir les positions afin d’arriver en <strong>première page</strong> sur des <strong>requêtes cibles pertinentes</strong> et porteuses de succès.</p>
                                </div>
                                <div label="FAÎTES LE CHOIX DE PRESTATIONS ADAPTÉES À VOS BESOINS">
                                    <p><strong>Linkweb</strong> fait partie des <strong>agences en France</strong> qui sont à l’écoute de vos besoins et qui ont pleinement conscience de vos objectifs pour <strong>définir une stratégie</strong> qui vous correspond. Nous concevons un <strong>plan d’actions</strong> qui sera tout particulièrement à même de profiter des opportunités qui se dressent pour vous sur <strong>Internet</strong>. De la <strong>création de votre site (hébergement et choix du nom de domaine)</strong> à la réalisation de votre <strong>stratégie de visibilité (marketing digital)</strong> nous vous accompagnons pour vous permettre d’obtenir la meilleure solution possible en fonction de : </p>
                                    <br/>
                                    <ul className="pl-5 list-disc">
                                        <li>Votre offre : avoir une connaissance de vos produits ou services est important pour définir les meilleures opportunités de <strong>mots-clés</strong>.</li>
                                        <li>Vos objectifs : le travail réalisé sur <strong>votre site</strong> est proportionnel à vos ambitions et vos objectifs.</li>
                                        <li>Vos cibles : la <strong>création de votre site internet</strong> et plus particulièrement de ses contenus est orientée en fonction du profil de votre <strong>cible principale</strong>.</li>
                                    </ul>
                                    <br/>
                                    <p>C’est en fonction des <strong>spécificités de votre projet</strong> que nous déterminons ses contours et mettons en place les actions nécessaires à sa réussite. Le tout est réalisé avec le souci de retranscrire votre <strong>identité (visuelle, valeurs, etc.)</strong>.</p>
                                </div>
                            </Accordion>
                        </div>
                    </section>
                    <section className="flex w-full flex-col mx-auto px-0 py-6 my-4 lg:my-0">
                        <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10 lg:mb-2">
                            <h2 className="century text-3xl md:text-5xl text-black leading-none">Où nous trouver ?</h2>
                            <br/>
                            <hr className="border-solid w-1/6 border-bleu"></hr>
                            <br/>
                            <h3 className="text-black text-xl text-center century">Notre relation est basée sur la confiance et la collaboration.</h3>
                        </section>
                    </section>
                    <section className="w-full flex flex-col md:flex-row mt-10 bg-bleu">
                        <div className="w-full md:w-1/2 bg-bleu flex flex-col justify-center items-center text-center" style={{minHeight:'700px'}}>
                        <h2 className="text-2xl text-white century pb-6" ><span className="text-black">/</span>L’AGENCE LINKWEB À AGEN</h2>
                                    <p className="text-xl text-white century">10 rue Albert Ferrasse <br/>
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
                        <div className="w-full md:w-1/2 bg-black flex flex-col justify-center items-center h-auto text-white text-center" style={{minHeight:'700px'}}>
                        <h2 className="text-2xl century pb-6" ><span className="text-bleu">/</span>L’AGENCE LINKWEB À TOULOUSE</h2>
                                    <p className="text-xl century">44 Rue de Bayard <br/>
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
query lastsThreePostsAgenceWebDesign {
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
export default AgencenWebDesignToulouse;




