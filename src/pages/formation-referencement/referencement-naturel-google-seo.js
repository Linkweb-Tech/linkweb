import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";
import Button from "../../components/button";
import ButtonBlog from "../../components/buttonblog";
import RoundButton from "../../components/roundButton";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../../components/seo";
import LastPosts from '../../components/lastposts';
import RappelForm from "../../components/rappelForm";
import Accordion from '../../components/accordion';
import RoundButtonPages from "../../components/roundButtonPages";
import RoundButtonPagesMail from "../../components/roundButtonPagesMail";
import SimpleMap from "../../components/simpleMap";
import Partenaires from '../../components/partenaires';
import Modalformation from "../../components/modalformation";
import blocBg from "../../images/background.jpg";
// import Bg from "../images/background-referencement.jpg";
import Bg from "../../images/formation-datadock.jpg";
import imac from "../../images/formation-webmarketing.jpg";
// import bgDev from '../images/bg-dev.jpg';
import mac from "../../images/qualiopi-mac.png";
import formaref from "../../images/formation-referencement-google.jpg";
import skype from "../../images/logo-skype.png";
import whatsapp from "../../images/logo-whatsapp.png";
import zoom from "../../images/logo-zoom.png";
import Googlepartner from "../../images/../images/logo-partner2022.png";
import Qualiopicertif from "../../images/logo-qualiopi.png";

import scroll from "../../images/motiontest.svg";
import formanat from '../../images/formation-referencement-naturel.jpg';
import "../../scss/info.scss";
import '../../scss/global.scss';

class FormationReferencementNaturelGoogleSEO extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Formation Référencement Naturel (SEO) sur Google - Linkweb"
                    description="Sortez de l'ombre et dépassez enfin vos concurrents en atteignant les premières pages de Google avec notre formation au référencement naturel."
                    keywords={[`Formation SEO`, `Formation Référencement Toulouse`, `Formation Référencement Agen`]}
                    url="https://linkweb.fr/formation-referencement/referencement-naturel-google-seo/"
                    nom="Formation Référencement Naturel SEO sur Google"
                    slug="formation-referencement/referencement-naturel-google-seo/"
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
                <section className="flex items-center w-full mx-auto pb-0 mt-40 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + Bg + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
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
                            <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Formation Référencement Naturel sur Google</h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Une formation au référencement naturel SEO accessible et qualifiante.</h2>
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
                <nav aria-label="breadcrumbs"  className="w-full bg-bleu century py-2 pl-0 md:pl-48">
                        <Link to="/" className="px-4 text-md lg:text-lg text-white hover:text-black">Agence web</Link> <span className=" text-lg text-black"> / </span>
                        <span className="px-4 text-md lg:text-lg text-white"> Formation référencement naturel</span>
                    </nav>
                {/* <section style={{ background: 'white', marginTop: '0px'}}>
                    <section className="text-center my-0 lg:mx-0 century">
                        <h2 className="century text-black text-5xl">Formation Référencement naturel</h2>
                        <br />
                        <hr className="border-solid w-1/12 border-1 border-bleu"></hr>
                        <br />
                    </section>
                </section> */}
                <section className="w-full my-10 flex flex-col lg:flex-row century items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={formanat} alt="formation référencement Google" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10 lg:my-0 flex flex-col">
                            <div className="flex justify-center">
                                <p className="max-w-2xl text-xl px-2 text-black text-center"><span className="font-bold">Objectif de la formation : comprendre les enjeux du référencement naturel SEO pour gagner en visibilité en ligne.</span></p><br />
                            </div> 
                                    <br />
                                    <ul className="text-bold text-center py-2">
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check w-1/6 text-center text-bleu">✔</div>
                                            <div className="w-9/12 text-left">Public cible : Les particuliers ou toute personne en poste en entreprise.</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check w-1/6 text-center text-bleu">✔</div>
                                            <div className="w-9/12 text-left">Prérequis : Aucun.</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check w-1/6 text-center text-bleu">✔</div>
                                            <div className="w-9/12 text-left">Durée de la formation : 35 heures (5 jours).</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check w-1/6 text-center text-bleu">✔</div>
                                            <div className="w-9/12 text-left">Modalité d’évaluation : QCM / Travaux pratiques.</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check w-1/6 text-center text-bleu">✔</div>
                                            <div className="w-9/12 text-left"><strong>Formation à distance</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check w-1/6 text-center text-bleu">✔</div>
                                            <div className="w-9/12 text-left">Formateur certifié.</div>
                                        </li>
                                    </ul>
                        </div>
                    </section>
                    <section className="w-full flex mt-12 flex-col items-center lg:flex-row text-white bg-darkgrey century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                        <div className="w-full lg:w-8/12 text-2xl">
                            <h3 className="font-bold">Découvrez le programme complet de notre formation en référencement naturel</h3>
                            <h4>Passez au niveau supérieur en SEO que vous soyiez débutant ou confirmé. <br/>Téléchargez notre programme.</h4>
                        </div>
                        <div className="w-full mx-auto block lg:w-3/12">
                            {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                            <a href="/programme-formation-referencement-naturel-a-distance.pdf" target="_blank" rel="noopener noreferer" className='font-light roundedButton bg-bleu text-white hover:text-white flex justify-center mt-3 century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 mt-12'>TÉLÉCHARGER LE PROGRAMME</a>
                            <a href="/conditions-generales-de-vente.pdf" target="_blank" rel="noopener noreferer" className='font-light roundedButton bg-bleu text-white hover:text-white flex justify-center mt-3 century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 mt-12'>TÉLÉCHARGER NOS CGV</a>
                        </div>
                    </section>
                    <section className="w-full flex mb-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                        <div className="w-full lg:w-8/12 text-2xl">
                            <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence SEO à Toulouse</span> ?</h3>
                            <h4>Linkweb déploie son offre de formation pour les professionnels souhaitant développer leurs compétences.</h4>
                        </div>
                        <div className="w-full mx-auto block lg:w-3/12">
                            {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                            <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" />
                        </div>
                    </section>
                    <section className="phototext">
                    <section className="text-center text-black text-4xl mx-auto lg:mx-0 century mt-16 mb-10">
                        <h2 className="century text-black leading-none">Les spécificités de la formation au référencement web<br /></h2>
                        <br />
                        <hr className="border-solid w-1/6 border-white"></hr>
                        <br />
                    </section>
                    <section className="w-full my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={formaref} alt="Formation référencement" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10  flex flex-col">
                        <Accordion>
                            <div label="FORMATION RÉFÉRENCEMENT GOOGLE">
                                    <h4>Une formation au référencement Google, premier générateur de trafic sur le Web.</h4>
                                    <br/>
                                    <p className="century pb-4 text-justify">La formation est centrée sur <strong>premier moteur de recherche au monde : Google</strong>. Leader sur le marché des moteurs de recherche, il est utilisé par des milliards de personnes chaque jour. Il est donc fondamental d’exploiter tout le potentiel qu’il peut offrir à <strong>votre site internet</strong>. La formation vous permettra également d’explorer l’ensemble des outils proposés par Google (de Google My Business à Google Analytics ou Pagespeed pour mesurer le temps de chargement sur ordinateur, comme sur mobile, les possibilités sont nombreuses) ainsi que de dompter les algorithmes du moteur pour <strong>atteindre les premiers résultats de la première page de recherches</strong>.</p>
                                    <br />
                                    <p className="century pb-4 text-justify">Notre rôle est de vous amener à comprendre et maîtriser le potentiel qu’un outil tel que Google peut vous apporter pour <strong>générer du trafic organique vers votre site internet</strong> grâce à l’optimisation de votre contenu tout en tenant compte d’autres moteurs de recherche tels que Bing. Ce gain de visibilité doit vous permettre de <strong>dynamiser votre stratégie digitale</strong> à partir des conseils fournis au sein de chaque module, grâce à une bonne utilisation du marketing web.

                                    </p>
                            </div>
                            <div label="FORMATION RÉFÉRENCEMENT NATUREL EN LIGNE">
                                    <h4>Une formation au référencement naturel accessible en ligne.</h4>
                                    <br/>
                                    <p className="century pb-4 text-justify">La <strong>formation au référencement naturel (SEO ou optimisation pour les moteurs de recherche)</strong> est accessible en ligne. Il est possible d’assister à la formation via Skype, Zoom ou encore What’s App. Vous n’aurez besoin que d’un ordinateur ainsi que d’une connexion à Internet pour <strong>réaliser votre formation à distance</strong> et suivre chaque module avec notre formateur.</p>
                                    <br />
                                    <p className="century pb-4 text-justify">Les modalités d’évaluation ainsi que le <strong>contenu de la formation</strong> vous seront transmis par votre formateur à distance pour assurer le bon déroulement de la formation.
                                    </p>
                                    <br/>
                                    <a href="#formationseo" className="text-bleu hover:text-black">
                                        En savoir plus
                                    </a>
                                    <br/>
                                    <section className="w-full md:w-1/2 xl:w-1/2 mx-auto flex flex-row px-6 py-6">
                                    <div className="w-full md:w-1/3">
                                        <img className="svgtransform mx-auto block mb-4 md:mb-0 " src={skype} alt="logo Skype" width="60px" />
                                    </div>
                                    <div className="w-full md:w-1/3">
                                        <img className="svgtransform mx-auto block mb-4 md:mb-0" src={zoom} alt="logo Zoom" width="80px" />
                                    </div>
                                    <div className="w-full md:w-1/3">
                                        <img className="svgtransform mx-auto block mb-4 md:mb-0" src={whatsapp} alt="logo What's App" width="60px" />
                                    </div>
                                </section>
                            </div>
                            <div label="FORMATION PROFESSIONNALISANTE ET QUALIFIANTE">
                                    <h4>Une formation adaptée aux professionnels souhaitant développer leur projet en ligne.</h4>
                                    <br/>
                                    <p className="century pb-4 text-justify">Notre <strong>organisme de formation</strong> est certifié Qualiopi. Nous dispensons des formations professionnalisantes et qualifiantes. Notre objectif est de proposer aux particuliers, comme aux professionnels, la possibilité d’acquérir des <strong>compétences ciblées permettant d’évoluer au sein d’un emploi</strong>, mais également de disposer de toutes les clés pour mettre le webmarketing au centre de leur projet. À la fin de la formation, vous disposerez d’une attestation qui justifiera de votre participation.</p>
                                    <br />
                                    <p className="century pb-4 text-justify">Grâce à l’acquisition de ces compétences, vous serez en mesure de mettre au point une <strong>stratégie de référencement naturel SEO pour rendre votre site internet visible</strong> auprès de milliers de personnes et attirer de nouveaux prospects pour votre entreprise.
                                    </p>
                            </div>
                            <div label="FORMATION RÉFÉRENCEMENT WORDPRESS">
                                    <h4>Une formation au référencement Wordpress et tous types de sites.</h4>
                                    <br/>
                                    <p className="century pb-4 text-justify">Que vous disposiez d’une <strong>solution CMS de type Wordpress pour votre site internet</strong> ou bien de tout autre type d'outil, nous vous apportons des réponses adaptées. En effet, le référencement de sites dynamiques tient compte des spécificités du système de gestion utilisé. Cela se traduit par l’ajout d’extensions <strong>Wordpress</strong> utiles pour optimiser le travail de référencement d’un site, par exemple.</p>
                                    <br />
                                    <p className="century pb-4 text-justify">Toutes les solutions de création de sites web donnent accès à l’<strong>optimisation pour les moteurs de recherche</strong> de chaque média et de chacun des contenus. Si elles ne procurent aucun avantage particulier, chacune possède des spécificités qui sont importantes à saisir pour être en mesure d’adapter son travail d’optimisation, quelque soit le support. Cette problématique fait partie de notre formation.
                                    </p>
                                    <a href="#formationwp" className="text-bleu hover:text-black">
                                        En savoir plus
                                    </a>
                            </div>
                        </Accordion>
                        </div>
                    </section>
                </section>
                <Modalformation/>

                    
                    {/* <section className="flex flex-col xl:flex-row mx-8 lg:mx-24 my-0 items-center lg:justify-center">
                        <section className="flex flex-col justify-center md:flex-row w-full mx-auto py-0 mt-2 ">
                            <div className="blocliens w-full lg:w-1/2 xl:w-1/4 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{ border: '2px solid #000000' }}>
                                <svg width="40px" className="mx-auto block" viewBox="12.938 70.193 487.061 465.68874999999997"><g><path fill="#37cfee" d="M499.811,74.173c-0.011-2.202-1.799-3.98-4-3.98H135.94c-2.209,0-3.999,1.791-3.999,4v70.337   c0,0.003-0.001,0.006-0.001,0.01s0.001,0.006,0.001,0.01v72.281c-1.976-0.103-3.965-0.157-5.967-0.157   c-33.125,0-62.967,14.323-83.661,37.1c-0.173,0.162-0.328,0.34-0.471,0.53c-17.961,20.019-28.905,46.456-28.905,75.405   c0,28.943,10.939,55.375,28.893,75.392c0.146,0.197,0.307,0.38,0.485,0.547c20.693,22.775,50.534,37.096,83.657,37.096   c33.116,0,62.953-14.3,83.655-37.047c0.249-0.224,0.478-0.468,0.664-0.747c6.789-7.592,12.568-16.102,17.127-25.32h268.579   c2.209,0,4-1.791,4-4V112.869L499.811,74.173z M491.83,78.193l0.169,34.695v27.652H139.94l0-62.347H491.83z M230.826,336.737   c-0.027,0.404-0.05,0.809-0.081,1.212c-0.044,0.567-0.098,1.131-0.151,1.695c-0.031,0.331-0.06,0.663-0.094,0.994   c-0.063,0.611-0.136,1.219-0.21,1.827c-0.034,0.278-0.066,0.556-0.101,0.833c-0.084,0.65-0.177,1.297-0.273,1.943   c-0.034,0.227-0.067,0.454-0.102,0.68c-0.107,0.687-0.221,1.371-0.341,2.053c-0.031,0.177-0.062,0.354-0.094,0.531   c-0.132,0.727-0.271,1.451-0.418,2.173c-0.024,0.117-0.048,0.234-0.072,0.35c-0.162,0.783-0.331,1.563-0.511,2.339   c-0.006,0.026-0.012,0.053-0.019,0.079c-3.957,17.051-12.082,32.522-23.237,45.283h-47.846c4.839-19.064,7.468-42.21,7.744-65.022   h65.963c-0.019,0.508-0.035,1.017-0.061,1.525C230.896,335.736,230.859,336.236,230.826,336.737z M46.868,260.688h47.897   c-4.825,19.064-7.445,42.209-7.72,65.021H21.022C21.957,300.876,31.549,278.222,46.868,260.688z M165.02,325.709   c-0.276-22.812-2.904-45.957-7.743-65.021h47.846c15.327,17.534,24.925,40.188,25.86,65.021H165.02z M95.044,325.709   c0.294-25.694,3.406-47.972,7.998-65.021h45.952c4.609,17.05,7.732,39.328,8.028,65.021H95.044z M157.021,333.709   c-0.295,25.694-3.419,47.972-8.028,65.022h-45.952c-4.592-17.05-7.704-39.328-7.998-65.022H157.021z M155.041,252.688   c-3.425-11.13-7.709-20.404-12.812-26.756c21.094,3.287,40.126,12.87,55.117,26.756H155.041z M146.599,252.688h-41.171   c5.853-17.727,13.399-28.014,20.547-28.014C133.149,224.674,140.724,234.96,146.599,252.688z M96.994,252.688H54.64   c14.993-13.896,34.032-23.483,55.133-26.764C104.683,232.276,100.41,241.553,96.994,252.688z M87.045,333.709   c0.275,22.813,2.896,45.958,7.72,65.022H46.869c-15.319-17.535-24.912-40.189-25.847-65.022H87.045z M96.994,406.731   c3.416,11.134,7.689,20.411,12.779,26.763c-21.1-3.281-40.139-12.867-55.132-26.763H96.994z M105.427,406.731h41.171   c-5.875,17.727-13.449,28.013-20.624,28.013C118.826,434.744,111.28,424.458,105.427,406.731z M155.041,406.731h42.304   c-14.99,13.885-34.023,23.468-55.116,26.755C147.332,427.135,151.616,417.861,155.041,406.731z M231.04,371.63   c2.484-6.252,4.388-12.648,5.722-19.156c0.002-0.009,0.004-0.019,0.006-0.029c0.18-0.88,0.35-1.762,0.508-2.646   c0.013-0.072,0.026-0.143,0.038-0.215c0.147-0.825,0.284-1.652,0.412-2.481c0.019-0.122,0.038-0.244,0.057-0.367   c0.118-0.78,0.227-1.561,0.329-2.343c0.022-0.168,0.044-0.335,0.066-0.503c0.093-0.739,0.177-1.48,0.255-2.222   c0.022-0.207,0.045-0.414,0.066-0.621c0.07-0.705,0.132-1.411,0.189-2.118c0.02-0.242,0.042-0.483,0.06-0.725   c0.051-0.683,0.092-1.368,0.131-2.053c0.015-0.261,0.033-0.522,0.046-0.783c0.034-0.69,0.057-1.381,0.079-2.072   c0.008-0.255,0.021-0.509,0.027-0.765c0.023-0.939,0.036-1.88,0.036-2.822c0-0.93-0.013-1.858-0.035-2.786   c-0.008-0.334-0.024-0.665-0.035-0.998c-0.02-0.591-0.039-1.183-0.068-1.773c-0.019-0.396-0.046-0.791-0.069-1.186   c-0.031-0.524-0.062-1.047-0.1-1.57c-0.031-0.42-0.067-0.838-0.103-1.257c-0.042-0.498-0.085-0.995-0.133-1.492   c-0.041-0.423-0.087-0.844-0.133-1.265c-0.054-0.496-0.11-0.992-0.171-1.487c-0.05-0.408-0.103-0.815-0.157-1.222   c-0.069-0.517-0.141-1.034-0.218-1.549c-0.055-0.374-0.112-0.747-0.171-1.12c-0.089-0.565-0.184-1.13-0.281-1.693   c-0.055-0.315-0.109-0.63-0.166-0.943c-0.119-0.655-0.246-1.307-0.376-1.959c-0.043-0.216-0.085-0.433-0.13-0.648   c-0.169-0.817-0.347-1.632-0.534-2.444c-0.01-0.045-0.02-0.09-0.03-0.135c-4.36-18.872-13.53-36.405-26.868-50.92   c-14.275-15.535-32.39-26.606-52.326-32.273c-0.042-0.012-0.083-0.024-0.125-0.036c-1.646-0.466-3.303-0.895-4.973-1.286   c-0.171-0.04-0.341-0.082-0.512-0.122c-2.592-0.595-5.21-1.1-7.852-1.512c-0.49-0.076-0.982-0.145-1.473-0.215   c-0.696-0.099-1.388-0.218-2.088-0.305l0-68.973h352.059v223.09H231.04z" /><path fill="#37cfee" d="M185.225,124.736c8.491,0,15.399-6.908,15.399-15.398c0-8.459-6.908-15.341-15.399-15.341   c-8.459,0-15.341,6.882-15.341,15.341C169.884,117.828,176.766,124.736,185.225,124.736z M185.225,101.997   c4.08,0,7.399,3.293,7.399,7.341c0,4.079-3.319,7.398-7.399,7.398c-4.048,0-7.341-3.319-7.341-7.398   C177.884,105.222,181.108,101.997,185.225,101.997z" /><path fill="#37cfee" d="M261.857,124.736c8.494,0,15.405-6.908,15.405-15.398c0-8.459-6.911-15.341-15.405-15.341   c-8.491,0-15.399,6.882-15.399,15.341C246.458,117.828,253.366,124.736,261.857,124.736z M261.857,101.997   c4.083,0,7.405,3.293,7.405,7.341c0,4.079-3.322,7.398-7.405,7.398c-4.08,0-7.399-3.319-7.399-7.398   C254.458,105.29,257.777,101.997,261.857,101.997z" /><path fill="#37cfee" d="M338.496,124.736c8.456,0,15.335-6.908,15.335-15.398c0-8.459-6.879-15.341-15.335-15.341   c-8.494,0-15.405,6.882-15.405,15.341C323.091,117.828,330.002,124.736,338.496,124.736z M338.496,101.997   c4.113,0,7.335,3.225,7.335,7.341c0,4.079-3.29,7.398-7.335,7.398c-4.083,0-7.405-3.319-7.405-7.398   C331.091,105.29,334.413,101.997,338.496,101.997z" /><path fill="#37cfee" d="M419.925,194.432H259.551c-2.209,0-4,1.791-4,4s1.791,4,4,4h160.374c2.209,0,4-1.791,4-4S422.134,194.432,419.925,194.432z   " /><path fill="#37cfee" d="M419.925,261.972H272.699c-2.209,0-4,1.791-4,4s1.791,4,4,4h147.226c2.209,0,4-1.791,4-4S422.134,261.972,419.925,261.972z   " /><path fill="#37cfee" d="M419.925,329.448H319.612c-2.209,0-4,1.791-4,4s1.791,4,4,4h100.313c2.209,0,4-1.791,4-4S422.134,329.448,419.925,329.448z   " /></g></svg>
                                <h3 className="text-center text-xl px-4 text-black font-bold century">Formation référencement naturel</h3>
                                <hr />
                                <br />
                                <p className="text-sm px-2 text-black text-center"><span className="font-bold">Sortez de l'ombre et dépassez enfin vos concurrents <br />en atteignant les <strong>premières pages de Google</strong>.</span><br />
                                    <br />
                                    <ul className="text-bold text-center py-2">
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Comprendre le fonctionnement de <strong>Google</strong> et de <strong>Bing</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Maîtriser l’optimisation technique de son <strong>site web</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Apprendre à <strong>rédiger du contenu</strong> adapté pour les <strong>moteurs de recherche</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Connaître les outils indispensables pour mener sa stratégie</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Comprendre tout l’intérêt de développer la <strong>popularité de son site internet</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Augmenter le <strong>trafic de son site</strong> et ses ventes grâce au travail de <strong>référencement</strong></div>
                                        </li>

                                    </ul>
                                    <br />Profitez des opportunités de visibilité offertes par Google pour donner à votre entreprise la <strong>visibilité</strong> qu'elle mérite. </p>
                                <br />
                                {/*}
                                    <div className="w-2/3 mx-auto block">
                                        <br />
                                        {/*<ButtonPage url="/creation-site-internet-vitrine/" text="SÉLECTIONNER" color="bleu" 
                                        <RoundButton url="/creation-site-internet-vitrine/" color="bleu" colortext="black" text="Je découvre la formation" />
                                    </div>
                            </div>
                            <div className="blocliens w-full lg:w-1/2 xl:w-1/4 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{ border: '2px solid #37cfee' }}>
                                <svg width="40px" class="mx-auto block" viewBox="0 0 32 40"><g><path fill="#37cfee" d="M12.7,25.8C12.7,25.8,12.7,25.8,12.7,25.8c-1.1-0.2-2,0.6-2.1,2c-0.1,1.3,0.8,2.1,1.9,2.2c1,0,2-0.7,2-2   C14.4,26.8,13.7,25.9,12.7,25.8z M12.6,29c-0.5,0-1-0.1-1.2-0.8c-0.2-0.8,0.4-1.5,1.1-1.3c0,0,0,0,0,0c0,0,0.1,0,0.1,0   c0.5,0,0.8,0.5,0.9,1C13.7,28.5,13.2,28.9,12.6,29z"></path><path fill="#37cfee" d="M25.2,25.7c-1-0.1-1.9,0.9-1.8,2.1c0,0.7,0.3,1.4,0.7,1.8c0.4,0.3,0.9,0.3,1.3,0.4c1,0.1,1.6-1.3,1.4-2.3   C26.6,26.5,26.2,25.8,25.2,25.7z M25.4,28.9c-0.6,0-1.1-0.1-1.2-1c-0.1-0.8,0.3-1.3,1-1.2c0.5,0,0.6,0.2,0.8,0.8   C26,28.1,26,29,25.4,28.9z"></path><path fill="#37cfee" d="M28.6,8.7c-2.6-0.6-5.4-0.5-8-0.7c-4-0.4-8-0.7-12-0.8C8.5,6.5,8.4,5.9,8.2,5.4c-0.4-1-1.2-1.2-2.1-1.6   c0-0.4-0.1-0.7-0.4-0.9c-0.5-0.3-1-0.5-1.5-0.7C3.5,2,2,1.6,2,3c0,1.1,1.2,1.5,1.9,1.8c0.6,0.2,1.4,0.5,1.9,0   c0.5,0.2,1,0.3,1.4,0.8c0.5,0.6,0.5,1.4,0.6,2.2c0.3,1.7,0.7,3.4,1.1,5c0.6,2.8,1.3,5.6,1.9,8.4c-0.7,0.3-1.2,1-1.2,2   c0,1.5,1.3,1.9,2.3,1.9c4.9,0.1,9.8,0,14.6,0.1c0.6,0,0.6-1,0-1c-2.9,0-5.8,0-8.7,0c-1.5,0-3.1,0-4.6,0c-0.6,0-2.2,0.3-2.6-0.4   c-0.4-0.7,0.1-1.6,0.7-1.6c4.2,0,8.3,0,12.5,0c1,0,2.8,0.2,3.5-0.9c0.3-0.5,0.4-1.2,0.5-1.7c0.3-1.2,0.6-2.3,0.9-3.5   c0.5-1.8,1.2-3.7,1.3-5.6C30.1,9.4,29.6,8.9,28.6,8.7z M4,4C3.7,3.9,2.9,3.6,2.7,3.3C2.6,3,2.9,2.8,3,2.7c0.1,0,0.2,0,0.3,0   c0.3,0.1,0.6,0.2,0.8,0.3C4.5,3.2,4.8,3.3,5,3.5c0.3,0.2,0.5,0.2,0.4,0.6C5.3,4.6,4.2,4.1,4,4z M29.1,10.1c0.2,0.6-0.3,2-0.4,2.6   c0,0.2-0.1,0.3-0.1,0.5c-1.2-0.1-2.4-0.2-3.6-0.3c0.2-1.2,0.5-2.3,0.7-3.5C26.9,9.4,28.8,9.4,29.1,10.1z M27.7,16.3   c-0.1,0.2-0.1,0.5-0.2,0.7c-1.1-0.1-2.2-0.1-3.3-0.1c0.2-1.1,0.4-2.2,0.6-3.4c1.2,0.1,2.4,0.2,3.6,0.3   C28.2,14.7,27.9,15.5,27.7,16.3z M20.7,21.2c0.1-1.2,0.1-2.4,0.2-3.6c0.9,0,1.7,0.1,2.6,0.1c-0.2,1.2-0.4,2.4-0.6,3.5   C22.1,21.2,21.4,21.2,20.7,21.2z M20.9,16.8c0.1-1.2,0.1-2.4,0.2-3.6c1,0.1,2,0.2,3,0.3c-0.2,1.1-0.4,2.3-0.6,3.4   C22.7,16.9,21.8,16.9,20.9,16.8z M11.6,21.1c-0.2-1.3-0.5-2.6-0.8-3.9c0.8,0,1.7,0.1,2.5,0.1c0.2,1.3,0.5,2.5,0.8,3.8   C13.2,21.2,12.4,21.2,11.6,21.1z M9.6,12.1c0.9,0.1,1.9,0.2,2.8,0.3c0.2,1.4,0.4,2.8,0.7,4.2c-0.8,0-1.7-0.1-2.5-0.1   C10.3,15,9.9,13.6,9.6,12.1z M14.7,21.2c-0.3-1.3-0.5-2.5-0.8-3.8c0.9,0,1.8,0.1,2.7,0.1c0.1,1.2,0.1,2.5,0.2,3.7   C16.1,21.2,15.4,21.2,14.7,21.2C14.7,21.2,14.7,21.2,14.7,21.2z M13.8,16.6c-0.2-1.4-0.5-2.8-0.7-4.2c1.1,0.1,2.2,0.2,3.3,0.3   c0.1,1.3,0.2,2.6,0.2,3.9C15.7,16.7,14.7,16.6,13.8,16.6z M13,11.7c-0.2-1.1-0.4-2.2-0.6-3.3c1.2,0.1,2.5,0.2,3.7,0.3   c0.1,1.1,0.1,2.2,0.2,3.4C15.2,11.9,14.1,11.8,13,11.7z M17,12.9c1.2,0.1,2.3,0.2,3.5,0.3c-0.1,1.2-0.2,2.4-0.2,3.6   c-1,0-2-0.1-3-0.1C17.2,15.4,17.1,14.1,17,12.9z M25,9.4c-0.3,1.1-0.5,2.3-0.7,3.4c-1-0.1-2.1-0.2-3.1-0.3c0.1-1.1,0.2-2.3,0.3-3.4   C22.6,9.2,23.8,9.3,25,9.4C24.9,9.4,25,9.4,25,9.4z M20.8,9c-0.1,1.1-0.2,2.3-0.3,3.4c-1.2-0.1-2.4-0.2-3.6-0.4   c-0.1-1.1-0.1-2.3-0.2-3.4c1.2,0.1,2.4,0.2,3.5,0.3C20.4,9,20.6,9,20.8,9z M8.8,8.2c1,0,1.9,0.1,2.9,0.1c0.2,1.1,0.4,2.2,0.6,3.3   c-1-0.1-1.9-0.2-2.9-0.3c-0.1-0.2-0.1-0.5-0.2-0.7C9.1,9.9,9,9,8.8,8.2z M17.5,21.2c-0.1-1.2-0.1-2.5-0.2-3.7c1,0,1.9,0.1,2.9,0.1   c-0.1,1.2-0.1,2.4-0.2,3.6C19.2,21.2,18.3,21.2,17.5,21.2z M26.8,19.6c-0.4,1.6-1.2,1.5-2.5,1.6c-0.3,0-0.5,0-0.8,0   c0.2-1.2,0.4-2.3,0.6-3.5c1.1,0,2.1,0.1,3.2,0.1C27.2,18.4,27,19,26.8,19.6z"></path><path fill="#37cfee" d="M9.8,27.1c0.2-0.5-0.4-0.8-0.6-0.4c-0.4,1-0.2,2.1,0.3,2.9c0.3,0.4,0.7-0.2,0.5-0.5C9.6,28.5,9.5,27.7,9.8,27.1z"></path><path fill="#37cfee" d="M8.5,27.7c0-0.2-0.2-0.4-0.3-0.4c-0.2,0-0.3,0.2-0.3,0.4c0,0.4,0,0.8,0.2,1.1c0.2,0.4,0.8,0,0.6-0.4   C8.5,28.2,8.5,27.9,8.5,27.7z"></path></g></svg>
                                <h3 className="text-center text-black text-xl px-4 font-bold century">Formation rédacteur web</h3>
                                <hr />
                                <br />
                                <p className="text-sm px-4 text-black text-center"><span className="font-bold">Découvrez les secrets de la <strong>rédaction web</strong> et adressez-vous <br />à vos utilisateurs comme aux <strong>moteurs de recherche</strong>.</span><br />
                                    <br />
                                    <ul className="text-bold text-center py-2">
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Comprendre les spécificités de la <strong>rédaction web</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Connaître les publics à qui s’adresse le contenu produit</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Construire une <strong>ligne éditoriale</strong> sur-mesure</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Maîtriser les différents outils de <strong>rédaction web</strong></div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Savoir définir un <strong>maillage interne</strong> pertinent</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Produire un contenu lisible et compréhensible pour les <strong>moteurs de recherche</strong></div>
                                        </li>

                                    </ul>
                                    <br />Apprenez à rédiger un texte impactant et professionnel pour vous démarquer de la concurrence <strong>sur le Web</strong>.</p>
                                <br />
                                {/*
                                    <div className="w-2/3 mx-auto block">
                                        <br />
                                        {/*<ButtonPage url="/creer-une-boutique-en-ligne/" text="SÉLECTIONNER" color="bleu" />
                                        <RoundButton url="/creer-une-boutique-en-ligne/" color="bleu" colortext="black" text="Je découvre la formation" />
                                    </div>
                            </div>


                            <div className="blocliens w-full lg:w-1/2 xl:w-1/4 my-4 border mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{ border: '2px solid #000000' }}>
                                <svg width="40px" class="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M10,20v60h80V20H10z M89,79H11V31h78V79z M89,30H11v-9h78V30z"></path><g><polygon fill="#37cfee" points="17,28.031 14,25.516 17,23  "></polygon></g><g><polygon fill="#37cfee" points="20,23 23,25.516 20,28.031  "></polygon></g><path fill="#37cfee" d="M15,35v18h26V35H15z M40,36v15.356c-1.491-1.694-5.104-5.628-6.485-5.628c-0.791,0-1.56,0.598-2.374,1.231  c-0.897,0.698-1.826,1.42-2.792,1.42c-0.703,0-1.765-2.476-2.467-4.115c-1.086-2.534-2.023-4.722-3.387-4.722  c-1.948,0-5.014,7.201-6.495,11.002V36H40z M39.233,52H16.515c2.351-6.245,5.064-11.458,5.98-11.458  c0.704,0,1.766,2.477,2.468,4.116c1.086,2.533,2.023,4.721,3.386,4.721c1.309,0,2.423-0.867,3.406-1.631  c0.645-0.502,1.312-1.021,1.76-1.021C34.177,46.734,36.933,49.393,39.233,52z M39.986,52L40,51.988V52H39.986z"></path><g><path fill="#37cfee" d="M33,44.479c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5S34.379,44.479,33,44.479z M33,40.479   c-0.827,0-1.5,0.673-1.5,1.5s0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S33.827,40.479,33,40.479z"></path></g><path fill="#37cfee" d="M15,57v18h26V57H15z M40,58v15.356c-1.491-1.694-5.104-5.628-6.485-5.628c-0.791,0-1.56,0.598-2.374,1.231  c-0.897,0.698-1.826,1.42-2.792,1.42c-0.703,0-1.765-2.476-2.467-4.115c-1.086-2.534-2.023-4.722-3.387-4.722  c-1.948,0-5.014,7.201-6.495,11.002V58H40z M39.233,74H16.515c2.351-6.245,5.064-11.458,5.98-11.458  c0.704,0,1.766,2.477,2.468,4.116c1.086,2.533,2.023,4.721,3.386,4.721c1.309,0,2.423-0.867,3.406-1.631  c0.645-0.502,1.312-1.021,1.76-1.021C34.177,68.734,36.933,71.393,39.233,74z M39.986,74L40,73.988V74H39.986z"></path><g><path fill="#37cfee" d="M33,66.479c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5S34.379,66.479,33,66.479z M33,62.479   c-0.827,0-1.5,0.673-1.5,1.5s0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S33.827,62.479,33,62.479z"></path></g><g><rect fill="#37cfee" x="45" y="39" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="48" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="42" width="40" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="45" width="30" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="61" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="70" width="16" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="64" width="40" height="1"></rect></g><g><rect fill="#37cfee" x="45" y="67" width="30" height="1"></rect></g></svg>
                                <h3 className="text-center text-black text-xl px-4 font-bold century">Formation E-mailing</h3>
                                <hr />
                                <br />
                                <p className="text-sm px-4 text-black text-center"><span className="font-bold">Adressez-vous aux bonnes personnes au bon moment <br />grâce à l'envoi de <strong>newsletters</strong> sur-mesure.</span> <br />
                                    <br />
                                    <ul className="text-bold text-center py-2">
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Créer une <strong>campagne de Marketing Direct</strong> de A à Z</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Maîtriser les principaux outils et indicateurs de statistiques</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Apprendre à cibler son destinataire (votre client idéal)</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Structurer son mail pour ne pas atterrir dans les spams</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Rédiger des emails pertinents et percutants</div>
                                        </li>
                                        <li className="py-2 flex flex-row justify-center">
                                            <div className="check">✔</div>
                                            <div className="w-9/12 text-left">Créer une <strong>newsletter</strong> en toute conformité au RGPD</div>
                                        </li>

                                    </ul>
                                    <br />Maîtrisez les secrets de l'<strong>e-mailing</strong> : produisez des <strong>e-mails engageant</strong> pour votre audience.</p>
                                <br />
                                {/*}
                                    <div className="w-2/3 mx-auto block">
                                        <br />
                                        {/*<ButtonPage url="/creation-site-internet-catalogue/" text="SÉLECTIONNER" color="bleu" />
                                        <RoundButton url="/creation-site-internet-catalogue/" color="bleu" colortext="black" text="Je découvre la formation" />
                                    </div>
                            </div>
                        </section>
                        </section> */}                
                <section className="flex w-full flex-col mx-auto px-0 py-2 my-2">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10">
                        <br />
                        <h2 className="century text-3xl md:text-4xl text-black leading-none">Pourquoi se former au référencement naturel SEO ?</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                    </section>
                </section>
                <section className="bloctextimg2 w-full lg:w-10/12 xl:w-8/12 mb-16 mx-auto lg:flex lg:mx-auto xl:w-full flex flex-col lg:flex-row justify-center">
                    <div className="w-full image z-50 lg:w-1/2 xl:w-2/5 flex justify-center lg:mt-48 xl:mt-16 pr-0 md:pr-0 lg:justify-center lg:items-center">
                        <img src={imac} alt="Organisme de formation Qualiopi" style={{ maxHeight: '400px' }} />
                    </div>
                    <div className="text century z-10 w-full text-justify lg:w-3/5 xl:w-3/5 md:p-20 lg:pl-32 p-10 xl:py-24 text-black text-sm xl:text-md" style={{ backgroundColor: '#d3d3d352' }}>
                        <h4 className="century text-lg"><span className="font-bold">Le référencement naturel SEO (Search Engine Optimization) est une discipline du marketing digital qui possède un fort potentiel dans la quête de visibilité en ligne. </span></h4>
                        <br />
                        <p style={{ fontSize: '16px' }}>
                            Il fait partie des leviers qui permettent de <strong>rendre un site internet visible auprès d’un public ciblé</strong> grâce à l’optimisation SEO de ses pages web pour les moteurs de recherches. Il se différencie du référencement SEA (Search Engine Advertising) qui consiste à réaliser des campagnes publicitaires via la régie Google Ads.<br />
                            {/*Le <strong>CPF</strong> permet à chaque actif, dès son entrée sur le marché du travail, d’acquérir des <strong>droits à la formation</strong>, et ce, tout au long de sa carrière professionnelle. Depuis 2019, le CPF est crédité en euros. <br />*/}
                            <br />
                            Notre rôle est de vous accompagner en vue de <strong>comprendre les enjeux du SEO</strong> et ainsi maîtriser le travail et les pratiques d’optimisation, comme la compréhension des attentes des utilisateurs des moteurs de recherche.<br/>
                            <br/>
                            Notre spécialisation dans le <strong>référencement naturel</strong> vous permettra de vous former à des techniques diverses, mais surtout efficaces. Qu’il s’agisse de la recherche de mots-clés comme la mise en place d’une stratégie de netlinking, nous vous donnons les clés pour optimiser au mieux votre site.<br />
                            <br/>
                            Par ailleurs, apprendre à identifier les opportunités de visibilité est essentiel pour permettre le développement de son activité en ligne et prendre l’avantage sur ses concurrents directs. Du choix des mots-clés jusqu’au positionnement, nous vous donnons tous les éléments afin d’<strong>optimiser la présence des pages de votre site dans les résultats de recherche d’un moteur comme Google</strong> par le biais du marketing digital au cours de la formation.
                            <br/><br/>
                            <a href="#formationref" className="text-bleu hover:text-black">
                            En savoir plus
                            </a>
                        </p>
                        
                    </div>

                    <br />
                </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 className="century text-3xl md:text-5xl text-black leading-none text-center">Nos certifications</h2>
                        <br />
                        <hr className="blue border-bleu"></hr>
                        <br/>
                        <div className="w-full md:w-1/2 flex justify-center items-center mx-auto flex-col md:flex-row">
                            <div className="w-1/2 flex justify-center items-center">
                                <img className="mx-auto block" src={Qualiopicertif} width="400px" alt="Formation SEO Toulouse" />
                            </div>
                            <div className="w-1/2 flex justify-center items-center">
                                <img className="mx-auto block" src={Googlepartner} width="400px" alt="Formation SEO Toulouse" />
                            </div>
                        </div>
                    </section>
                <section className="phototext">
                    <section className="text-center text-black text-2xl mx-auto flex-col flex items-center lg:mx-0 century mt-16 mb-10">
                        <h2 className="century text-black leading-none">Vous souhaitez faire financer votre <br /><span className="text-5xl lg:text-6xl text-bleu font-bold">FORMATION QUALIOPI ?</span></h2>
                        <br />
                        <hr className="border-solid w-1/6 border-white"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="text-xl max-w-5xl text-center century text-black px-4 pb-0"><span className="font-bold">En tant qu’organisme référencé Qualiopi, Linkweb vous permet de bénéficier d’une multitude de solutions pour le financement de la formation de votre choix.</span><br /><br />
                            Se former professionnellement est donc accessible à tous en participant à nos formations. Voici les principales solutions de financement des formations.</h3>
                    </section>
                    <section className="w-full my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Datadock" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10  flex flex-col">
                            <Accordion>
                            {/*  <div className="w-full" label="PRENEZ CONNAISSANCE DE VOTRE COMPTE DE FORMATION">
                                    <p className="w-full century pb-4 text-justify">Toute personne salariée, tout au long de sa carrière professionnelle, bénéficie d’un <strong>droit à la formation</strong>. Si vous êtes dans ce cas de figure, vous devrez vous rendre sur votre espace personnel à l’aide de votre numéro de sécurité sociale pour consulter vos droits. S’il s’agit de votre première connexion, vous devrez créer un compte. </p>
                                    <br />
                                    <p className="w-full century pb-4 text-justify">Par défaut, <strong>ce dernier est crédité de 500€ par an dans la limite de 5000€ cumulés</strong>. Ce montant peut s’élever <strong>jusqu’à 800€ dans la limite de 8000€ cumulés</strong> si vous êtes considéré comme <strong>salarié non qualifié</strong> (en dessous d’un niveau 3).</p>
                                </div>
                            */}
                                <div label="L'AIDE INDIVIDUELLE À LA FORMATION (AIF) À DESTINATION DES DEMANDEURS D'EMPLOI AVEC PÔLE EMPLOI">
                                    <p className="w-full century pb-4 text-justify">Si vous êtes en <strong>situation de recherche d’emploi</strong>, <strong>Pôle Emploi</strong> propose une <strong>aide individuelle à la formation (AIF)</strong> en vue de financer vos <strong>actions de formation</strong>. Toutefois, pour y être éligible, la formation sélectionnée doit s’inscrire parfaitement dans votre <strong>projet professionnel</strong>.</p>
                                    <br />
                                    <p className="w-full century pb-4 text-justify">Ce dernier est défini en collaboration avec votre conseiller et doit s’inscrire dans une démarche de professionnalisation et de retour à l’emploi.
                                    </p>
                                </div>
                                <div label="RÉFÉREZ-VOUS AUX MODALITÉS DE FORMATION DE VOTRE ENTREPRISE">
                                    <p className="century pb-4 text-justify">Toutes les entreprises travaillent avec des <strong>organismes financeurs de la formation professionnelle</strong>. Vous pouvez donc vous référer au régime en vigueur au sein de votre entreprise. Dans le cadre du plan de <strong>développement des compétences</strong>, vous êtes en mesure de suivre une <strong>formation qualifiante</strong> sans que vous déboursiez un euro.</p>
                                    <br />
                                    <p className="century pb-4 text-justify">En effet, en faisant appel à un <strong>organisme de formation certifié Qualiopi</strong>, vous bénéficiez de la participation d’un organisme pour <strong>financer la formation</strong>. Grâce à sa <strong>certification Qualiopi</strong>, Linkweb est un <strong>organisme formateur</strong> qui propose des <strong>parcours de formation</strong> éligibles à ces différents financements.
                                    </p>
                                </div>
                            </Accordion>
                            {/*<div className="w-full flex-col md:flex-row flex px-auto">
                        <div className="blocchiffres mx-auto md:mx-0 block century text-bleu ">
                            <p>1</p>
                        </div>
                        <div className="w-full px-6 lg:px-6 flex flex-col justify-center" style={{maxWidth:'1000px'}}>
                                <h3 className="century uppercase text-2xl tracking-wider pb-3 leading-tight text-justify" >
                                    <span className="text-bleu">/</span>Prenez connaissance de votre compte de formation
                                </h3>
                                
                                <p className="w-full century pb-4 text-justify">Toute personne salariée, tout au long de sa carrière professionnelle, bénéficie d’un droit à la formation. Si vous êtes dans ce cas de figure, vous devrez vous rendre sur votre espace personnel à l’aide de votre numéro de sécurité sociale pour consulter vos droits. S’il s’agit de votre première connexion, vous devrez créer un compte. </p>
                                <br/>
                                <p className="w-full century pb-4 text-justify">Par défaut, ce dernier est crédité de 500€ par an dans la limite de 5000€ cumulés. Ce montant peut s’élever jusqu’à 800€ dans la limite de 8000€ cumulés si vous êtes considéré comme salarié non qualifié (en dessous d’un niveau 3).</p>
                                {/*<Button url="/referencement-de-site-internet-47-31/" text="Notre formule SEO" position="left" />
                                <br/>
                        </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" >
                                <p>2</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-2xl tracking-wider pb-3 leading-tight text-justify" >
                                        <span className="text-bleu">/</span>L’aide individuelle à la formation (AIF) à destination des demandeurs d’emploi avec Pôle Emploi
                                    </h3>
                                    
                                    <p className="w-full century pb-4 text-justify">Si vous êtes en situation de recherche d’emploi, Pôle Emploi propose une aide individuelle à la formation (AIF) en vue de financer vos actions de formation. Toutefois, pour y être éligible, la formation sélectionnée doit s’inscrire parfaitement dans votre projet professionnel.</p>                                    
                                    <br/>
                                    <p className="w-full century pb-4 text-justify">Ce dernier est défini en collaboration avec votre conseiller et doit s’inscrire dans une démarche de professionnalisation et de retour à l’emploi.
                                    </p>
                                    {/*<Button url="/agence-adwords-47-31/" text="Notre formule SEA" position="left" />
                                    <br/>
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" >
                                <p>3</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-2xl tracking-wider pb-3 leading-tight text-justify">
                                        <span className="text-bleu">/</span>Référez-vous aux modalités de formation de votre entreprise
                                    </h3>
                                    
                                    <p className="century pb-4 text-justify">Toutes les entreprises travaillent avec des organismes financeurs de la formation professionnelle. Vous pouvez donc vous référer au régime en vigueur au sein de votre entreprise. Dans le cadre du plan de développement des compétences, vous êtes en mesure de suivre une formation qualifiante sans que vous déboursiez un euro.</p>
                                    <br/>
                                    <p className="century pb-4 text-justify">En effet, en faisant appel à un organisme de formation DataDocké, vous bénéficiez de la participation d’un organisme pour financer la formation. Grâce à son référencement DataDock, Linkweb est un organisme formateur qui propose des parcours de formation éligibles à ces différents financements.
                                    </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />
                            </div>
                        </div>*/}

                        </div>
                    </section>
                </section>
                <section className="bg-black py-5 text-white">
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                            Pourquoi choisir nos <br /><span className="text-5xl lg:text-6xl text-bleu font-bold uppercase">formations Qualiopi ?</span>
                        </h2>
                        <hr className="blue border-bleu"></hr>
                    </section>
                    <h4 className="century text-xl text-center max-w-5xl w-full mx-auto px-4 pt-12 pb-0"><span className="font-bold">Dispenser des formations professionnelles fait partie de notre métier. Linkweb vous accompagne grâce à un programme de formation en entreprise adapté à vos besoins.</span></h4><br />
                    <br />
                    <p className="w-full century pb-4 text-center max-w-5xl w-full mx-auto px-4 pb-0 my-2">Nos formations sont dispensées par des <strong>professionnels qualifiés</strong>, compétents et à votre écoute. En choisissant un <strong>organisme référencé Qualiopi</strong>, vous avez accès à une <strong>formation qualifiante</strong> et qui pourra être financée par l’ensemble des <strong>organismes financiers</strong> : OPCA (Organismes Paritaires et Collecteurs Agréés), Pôle Emploi, OPACIF, AGEFIPH, etc.</p>
                    <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
                        <div className="w-full xl:w-1/3 one px-auto">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                                <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                    <h3 className="century uppercase text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>Des formations qualifiantes via un organisme certifié
                </h3>
                                    <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                        En optant pour la <strong>formation professionnelle</strong> par Linkweb, vous faites appel à un organisme agréé et concourrez à la réalisation de <strong>formations professionnelles</strong> (par <strong>validation des acquis de l’expérience ou VAE</strong>) pour votre avenir en entreprise.
                </div>
                                </section>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3 two px-auto">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
                                <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                    <h3 className="century uppercase text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>Une équipe de professionnels à vos côtés
                </h3>
                                    <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                        Linkweb, c’est avant tout une équipe de professionnels du webmarketing compétents. Nos <strong>formateurs</strong> vous accompagnent en fonction de vos besoins pour vous permettre d’<strong>acquérir les compétences professionnelles</strong> nécessaires à votre évolution professionnelle.
                </div>
                                </section>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3 three px-auto">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
                                <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                    <h3 className="century uppercase text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>Un suivi irréprochable
                </h3>
                                    <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                        En plus de vous apporter une base théorique riche, nos formateurs s’attachent à mettre en place un suivi pour vous permettre d’acquérir des compétences là où vous en avez le plus besoin. Un suivi individuel de formation est réalisé et validé via un <strong>bilan de compétences</strong>.
                </div>
                                </section>

                            </div>

                        </div>
                    </section>
                </section>

                {/* <li className="hidden lg:block toggleable">
                                <input type="checkbox" value="selected" id="toggle-one" className="toggle-input1 hidden"/>
                                    <label for="toggle-one" className="toogle-input1 block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">
                                    <svg width="70px" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path d="M 50,7 C 26.2636,7 7,26.26364 7,50 7,73.7364 26.2636,93 50,93 73.736401,93 93,73.7364 93,50 93,26.26364 73.736401,7 50,7 z m 0,2 C 72.655519,9 91,27.34452 91,50 91,72.6556 72.655519,91 50,91 27.344481,91 9,72.6556 9,50 9,27.34452 27.344481,9 50,9 z m 0,22 c -1.104568,0 -2,0.895433 -2,2 0,1.104567 0.895432,2 2,2 1.104568,0 2,-0.895433 2,-2 0,-1.104567 -0.895432,-2 -2,-2 z m -5.1875,10 c -0.523599,0.04909 -0.955337,0.570151 -0.90625,1.09375 C 43.955338,42.617349 44.476401,43.049087 45,43 l 4,0 0,24 c -1.385942,-6e-5 -2.817517,0 -4.1875,0 -0.523599,0.04909 -0.955337,0.570151 -0.90625,1.09375 C 43.955338,68.617349 44.476401,69.049087 45,69 l 10,0 c 0.528313,0.0075 1.014242,-0.471635 1.014242,-1 0,-0.528365 -0.485929,-1.007472 -1.014242,-1 l -4,0 0,-25 c -5.2e-5,-0.523584 -0.476416,-0.999948 -1,-1 -1.719683,-4e-5 -3.48361,0 -5.1875,0 z" transform="translate(0,952.36218)" fill="#37cfee" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg>                        
                                    </label>
                                <div role="toggle" className="toggle-input1 megamenu relative h-auto z-40 p-2 mega-menu mb-16 sm:mb-0">
                                <section className="w-1/2 bg-grey px-16 py-6 flex flex-col">
                                    <h2 className="ml-4 text-xl century text-white">Qu'est-ce que le référencement web ?</h2>
                                    <br/>
                                    <p className="text-white century text-sm text-justify">Le référencement est une notion parfois floue et qui est souvent l'objet d'un abus de langage. En effet, référencer un site web, au sens strict du termes signifie très simplement à l'inscrire dans l'index de Google. C'est grâce à son indexation qu'il sera proposé dans les résultats de recherche. Or, s'il n'est pas indexé, il est comme inconnu aux yeux de Google et ne sera pas pris en compte.<br/><br/>
                                    En revanche, la simple indexation ne suffit pas à rendre un site visible. Le référencement en tant que discipline désigne l'ensemble des pratiques destinées à améliorer le positionnement d'une page web dans les pages de résultats des moteurs. Mieux un site sera positionné (dans les premières pages de résultats) et plus obtiendra de visibilité. Le travail de référencement est effectué sur la base d'optimisations internes et externes au site web, qui vont lui permettre d'obtenir de la crédibilité et de l'autorité auprès de Google.</p>
                                </section>
                                </div>
                            </li> */}

                {/* <div className=" font-bold w-full md:w-1/2 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white" style={{ background: '#00cfff url( ' + blocBg + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                            <h2 className="text-xl pb-6" ><span className="text-bleu">/</span>RÉFÉRENCEMENT NATUREL SEO</h2>
                            <p>Vous souhaitez <strong>augmenter votre visibilité</strong> dans les <strong>pages de recherche de Google</strong> ? Vous souhaitez <strong>générer du trafic sur votre site internet</strong>, vendre vos produits ou obtenir des contacts ? Le <strong>référencement naturel</strong> vous offre la possibilité de mettre en avant votre entreprise.</p>
                            <RoundButton color="darkgrey" url="/referencement-de-site-internet-47-31/" text="Notre offre de Référencement Naturel" />
                        </div>
                        <div className="font-bold w-full md:w-1/2 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white" style={{ background: '#009991 url( ' + blocBg + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                            <h2 className="text-xl pb-6" ><span className="text-bleu">/</span>RÉFÉRENCEMENT ADS SEA</h2>
                            <p>Vous souhaitez obtenir un <strong>retour sur investissement</strong> grâce à votre <strong>boutique en ligne</strong> ou votre <strong>site vitrine</strong> ? Mener une campagne sponsorisée permet de propulser votre visibilité sur Google en un temps record, et ainsi, atteindre vos objectifs de conversion.</p>
                            <RoundButton color="darkgrey" url="/agence-adwords-47-31/" text="Notre offre de Référencement Ads" />
                        </div> */}

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
                <section className="w-full bg-darkgrey flex flex-col md:flex-row">
                    <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                    </div>
                    <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Vous êtes intéressé par la formation au référencement naturel SEO ?</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Si vous avez des interrogations à propos de la formation au référencement naturel SEO, ou souhaitez vous y inscrire, nous vous invitons à nous contacter par téléphone, ou bien via le formulaire de contact de notre site internet.</p>
                            <div className="max-w-xs ml-auto mr-auto md:mr-0 md:ml-0 block">
                                <RoundButton url="/contact-agence-web-toulouse/" color="bleu" text="JE VEUX EN SAVOIR PLUS" />
                            </div>
                        </div>

                    </div>
                </section>
                <section className="bg-white sidetitle mt-0 lg:mt-16 mb-10">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Les expertises de notre organisme de formation SEO</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                    <br />
                                    <h3 /*data-aos='fade-left'*/ className="text-md text-black century pb-0">Linkweb vous propose de nombreuses solutions pour développer votre projet web à Toulouse.</h3>
                                </div>
                        </section>
                    <section className="w-full">
                        <div className="w-full px-4 md:px-0 lg:px-0 flex justify-center mx-auto flex-col md:flex-row lg:w-full mt-5 flex-wrap">
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform mx-auto lg:mx-4 px-2 mb-10 text-black century text-center  border-bleu border-solid border py-4">
                                <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   " /><path fill="#37cfee" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z" /><g><path fill="#37cfee" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z" /><rect x="72.041" y="56.851" width="0.312" height="5.159" /></g><path fill="#37cfee" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z" /><path fill="#37cfee" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z" /></g></svg>
                                <h4 className="font-bold century text-xl"><span className="font-bold">Création site internet</span></h4>
                                <p className="text-md">Création de site internet professionnel et développement web à Toulouse.</p>
                                <Button url="/creation-site-internet-toulouse/" text="Création site internet Toulouse" size="md" position="center"/>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform justify-center text-black px-2 mb-10 mx-auto lg:mx-4 century text-center border-bleu border-solid border py-4">
                                <svg width="50px" className="mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#37cfee" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#37cfee" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#37cfee" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>                                
                                <h4 className="font-bold century text-xl"><span className="font-bold">Référencement naturel</span></h4>
                                <p className="text-md">Développement de votre stratégie de référencement à Toulouse.</p>
                                <Button url="/referencement-toulouse/" text="Référencement Toulouse" size="md" position="center"/>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform text-black mx-auto lg:mx-4 px-2 mb-10 century text-center border-bleu border-solid border py-4">
                                <svg viewBox="0 0 28 35" width="40px" className="mx-auto block"><g fill="#37cfee" ><g><path d="M25.63,8.16 C25.3791233,8.2736063 25.2673479,8.56869337 25.38,8.82 C27.9835268,14.4995076 26.0128726,21.2291511 20.7570105,24.607179 C15.5011485,27.9852068 8.56093161,26.9827248 4.47584423,22.2554403 C0.390756842,17.5281557 0.405052352,10.5159253 4.50938029,5.80533611 C8.61370823,1.09474697 15.5579549,0.120570547 20.8,3.52 L20.23,4.09 C20.1366875,4.18292491 20.082937,4.30834272 20.08,4.44 L20.08,7.21 L19.64,7.65 C16.6439961,4.99569867 12.201052,4.79450437 8.97740753,7.1671551 C5.75376307,9.53980583 4.62518012,13.8417277 6.26892868,17.4913093 C7.91267724,21.1408909 11.882203,23.1466567 15.7953676,22.3049336 C19.7085322,21.4632105 22.5022531,18.0026679 22.5,14 C22.5060564,12.6917472 22.2046221,11.4003755 21.62,10.23 C21.5479513,10.0569807 21.3851924,9.93878386 21.1983704,9.92380916 C21.0115484,9.90883447 20.8320405,9.99959693 20.733352,10.1589308 C20.6346636,10.3182647 20.6333696,10.5194096 20.73,10.68 C22.4788666,14.1666095 21.2961553,18.4112488 17.9962719,20.4910925 C14.6963885,22.5709362 10.3568052,21.8068773 7.96572517,18.7250408 C5.57464511,15.6432043 5.91279959,11.2498661 8.74733809,8.57024454 C11.5818766,5.89062297 15.9872705,5.79966346 18.93,8.36 L16.09,11.21 C14.7906587,10.2456333 12.9988445,10.3008705 11.7613722,11.3434409 C10.5238998,12.3860114 10.1653515,14.1424545 10.8951986,15.58662 C11.6250458,17.0307856 13.2518533,17.7838768 14.8252069,17.4059224 C16.3985604,17.0279679 17.5057779,15.6181031 17.5,14 C17.5,13.7238576 17.2761424,13.5 17,13.5 C16.7238576,13.5 16.5,13.7238576 16.5,14 C16.5,15.3807119 15.3807119,16.5 14,16.5 C12.6192881,16.5 11.5,15.3807119 11.5,14 C11.5,12.6192881 12.6192881,11.5 14,11.5 C14.4897484,11.5018497 14.9686885,11.6441435 15.38,11.91 L13.65,13.65 C13.5533228,13.7407333 13.4984814,13.8674141 13.4984814,14 C13.4984814,14.1325859 13.5533228,14.2592667 13.65,14.35 C13.7407333,14.4466772 13.8674141,14.5015186 14,14.5015186 C14.1325859,14.5015186 14.2592667,14.4466772 14.35,14.35 L20,8.7 L20.78,7.92 L23.55,7.92 C23.6816573,7.917063 23.8070751,7.86331251 23.9,7.77 L27.36,4.31 C27.5066366,4.17107596 27.5506083,3.95521467 27.47,3.77 C27.3919291,3.57989638 27.2054872,3.45692403 27,3.46 L24.54,3.46 L24.54,1 C24.5389924,0.798149057 24.4167128,0.616701799 24.23,0.54 C24.0447853,0.459391664 23.828924,0.503363408 23.69,0.65 L21.52,2.8 C15.9401207,-0.926846735 8.46694245,0.0290172714 4.00472299,5.04030825 C-0.457496475,10.0515992 -0.543590257,17.5851679 3.8029405,22.6971255 C8.14947127,27.809083 15.5988534,28.9354824 21.2624452,25.3371263 C26.9260371,21.7387701 29.0711253,14.516536 26.29,8.41 C26.1763937,8.15912326 25.8813066,8.04734786 25.63,8.16 Z M23.35,6.92 L21.79,6.92 L24.25,4.46 L25.81,4.46 L23.35,6.92 Z M23.54,3.75 L21.08,6.21 L21.08,4.65 L23.54,2.19 L23.54,3.75 Z" /></g></g></svg>
                                <h4 className="font-bold century -mt-4 text-xl"><span className="font-bold">Référencement payant</span></h4>
                                <p className="text-md">Création de campagnes Google Ads et stratégies de ROI (retour sur investissement) à Toulouse.</p>
                                <Button url="/agence-adwords-47-31/" text="Agence Adwords Toulouse" size="md" position="center"/>
                            </div>
                        {/* </div>
                        <div className="w-full text-black flex flex-col md:flex-row mx-auto justify-center lg:w-full mt-5 px-4 md:px-0 lg:px-0 md:mt-10 mb-12"> */}
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform justify-center text-black px-2 mb-10 mx-auto lg:mx-4 century text-center border-bleu border-solid border py-4">
                                <svg width="50px" class="mx-auto block" fill="#37cfee" viewBox="0 0 100 125"><path d="M50.3383789,43.5737305c1.6616211,0,3.215332,0.8461914,4.2636719,2.3217773  c0.3208008,0.449707,0.9443359,0.5561523,1.3945312,0.2363281c0.4501953-0.3203125,0.5561523-0.9443359,0.2363281-1.3945312  c-1.4287109-2.0107422-3.5771484-3.1635742-5.8945312-3.1635742c-3.2249756,0-5.9712524,2.2554321-7.0158691,5.3994141H42.043457  c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1h0.859314c-0.0228882,0.260498-0.0365601,0.5240479-0.0365601,0.7910156  c0,0.3817139,0.0322876,0.7545776,0.0786133,1.1225586H42.043457c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1h1.3900146  c1.1224976,2.9710693,3.793457,5.0678711,6.9049072,5.0678711c2.3178711,0,4.4663086-1.1533203,5.8945312-3.1635742  c0.3198242-0.4501953,0.2138672-1.074707-0.2363281-1.3945312c-0.4501953-0.3188477-1.0737305-0.2138672-1.3945312,0.2363281  C53.5541992,55.1083984,52,55.9545898,50.3383789,55.9545898c-2.0101929,0-3.7658691-1.2359009-4.7171631-3.0678711h3.2454834  c0.5522461,0,1-0.4477539,1-1s-0.4477539-1-1-1h-3.9058228c-0.0593872-0.364624-0.0946655-0.7387695-0.0946655-1.1225586  c0-0.2685547,0.0203247-0.5313721,0.0498047-0.7910156h3.9506836c0.5522461,0,1-0.4477539,1-1s-0.4477539-1-1-1h-3.406189  C46.364502,44.9595947,48.2089233,43.5737305,50.3383789,43.5737305z"></path><path d="M50,36.3857422c-7.5068359,0-13.6142578,6.1074219-13.6142578,13.6142578S42.4931641,63.6142578,50,63.6142578  S63.6142578,57.5068359,63.6142578,50S57.5068359,36.3857422,50,36.3857422z M50,61.6142578  c-6.4042969,0-11.6142578-5.2099609-11.6142578-11.6142578S43.5957031,38.3857422,50,38.3857422  S61.6142578,43.5957031,61.6142578,50S56.4042969,61.6142578,50,61.6142578z"></path><path d="M50,31.1928711c-10.362793,0-18.793457,8.4370117-18.793457,18.8071289S39.637207,68.8071289,50,68.8071289  S68.793457,60.3701172,68.793457,50S60.362793,31.1928711,50,31.1928711z M50,66.8071289  c-9.2597656,0-16.793457-7.5395508-16.793457-16.8071289S40.7402344,33.1928711,50,33.1928711S66.793457,40.7324219,66.793457,50  S59.2597656,66.8071289,50,66.8071289z"></path><path d="M56.3666992,16.3364258C56.3666992,12.8422852,53.5107422,10,50,10s-6.3666992,2.8422852-6.3666992,6.3364258  S46.4892578,22.6733398,50,22.6733398S56.3666992,19.8305664,56.3666992,16.3364258z M45.6333008,16.3364258  C45.6333008,13.9453125,47.5922852,12,50,12s4.3666992,1.9453125,4.3666992,4.3364258  c0,2.3916016-1.9589844,4.3369141-4.3666992,4.3369141S45.6333008,18.7280273,45.6333008,16.3364258z"></path><path d="M80.1552734,26.2084961c-0.0048828-1.6953125-0.6694336-3.2910156-1.8710938-4.4926758  s-2.7973633-1.8662109-4.4926758-1.8710938c-0.0063477,0-0.012207,0-0.0185547,0  c-1.690918,0-3.2783203,0.6567383-4.4711914,1.8500977c-1.1977539,1.1972656-1.8544922,2.7919922-1.8496094,4.4892578  c0.0043945,1.6953125,0.6689453,3.2910156,1.8710938,4.4926758c1.2016602,1.2021484,2.7973633,1.8666992,4.4926758,1.8710938  c0.0058594,0,0.012207,0,0.0180664,0c1.690918,0,3.2783203-0.65625,4.4711914-1.8496094  C79.5029297,29.5009766,80.1601562,27.90625,80.1552734,26.2084961z M76.8911133,29.2841797  c-0.8154297,0.8154297-1.9008789,1.2636719-3.0571289,1.2636719c-0.0043945,0-0.0083008,0-0.0126953,0  c-1.1630859-0.0029297-2.2583008-0.4594727-3.0839844-1.2851562s-1.2822266-1.9208984-1.2851562-3.0839844  c-0.003418-1.1611328,0.4453125-2.2514648,1.2636719-3.0698242c0.8154297-0.8154297,1.9008789-1.2641602,3.0576172-1.2641602  c0.0039062,0,0.0083008,0,0.012207,0c1.1635742,0.003418,2.2587891,0.4599609,3.0844727,1.2851562  c0.8251953,0.8256836,1.2817383,1.9208984,1.2851562,3.0844727C78.1586914,27.3754883,77.7094727,28.4658203,76.8911133,29.2841797z  "></path><path d="M83.6635742,43.6333008c-3.4941406,0-6.3369141,2.855957-6.3369141,6.3666992s2.8427734,6.3666992,6.3369141,6.3666992  S90,53.5107422,90,50S87.1577148,43.6333008,83.6635742,43.6333008z M83.6635742,54.3666992  c-2.3916016,0-4.3369141-1.9589844-4.3369141-4.3666992s1.9453125-4.3666992,4.3369141-4.3666992  C86.0546875,45.6333008,88,47.5922852,88,50S86.0546875,54.3666992,83.6635742,54.3666992z"></path><path d="M73.8339844,67.4521484c-0.0058594,0-0.012207,0-0.0180664,0c-1.6953125,0.0043945-3.2910156,0.6689453-4.4926758,1.8710938  c-1.2021484,1.2016602-1.8666992,2.7973633-1.8710938,4.4926758c-0.0048828,1.6972656,0.6518555,3.2919922,1.8496094,4.4892578  c1.1928711,1.1933594,2.7802734,1.8500977,4.4711914,1.8500977c0.0063477,0,0.012207,0,0.0185547,0  c1.6953125-0.0048828,3.2910156-0.6694336,4.4926758-1.8710938s1.8662109-2.7973633,1.8710938-4.4926758  c0.0048828-1.6977539-0.6523438-3.2924805-1.8500977-4.4897461C77.1118164,68.1083984,75.5249023,67.4521484,73.8339844,67.4521484z   M76.8701172,76.8701172c-0.8256836,0.8251953-1.9208984,1.2817383-3.0844727,1.2851562c-0.0039062,0-0.0083008,0-0.012207,0  c-1.1567383,0-2.2421875-0.4487305-3.0576172-1.2641602c-0.8183594-0.8183594-1.2670898-1.9086914-1.2636719-3.0698242  c0.0029297-1.1630859,0.4594727-2.2583008,1.2851562-3.0839844s1.9208984-1.2822266,3.0839844-1.2851562  c0.0043945,0,0.0083008,0,0.0126953,0c1.15625,0,2.2416992,0.4482422,3.0571289,1.2636719  c0.8183594,0.8183594,1.2675781,1.9086914,1.2641602,3.0698242C78.1518555,74.9492188,77.6953125,76.0444336,76.8701172,76.8701172z  "></path><path d="M56.3666992,83.6635742c0-3.4941406-2.855957-6.3369141-6.3666992-6.3369141s-6.3666992,2.8427734-6.3666992,6.3369141  S46.4892578,90,50,90S56.3666992,87.1577148,56.3666992,83.6635742z M50,88c-2.4077148,0-4.3666992-1.9453125-4.3666992-4.3364258  c0-2.3916016,1.9589844-4.3369141,4.3666992-4.3369141s4.3666992,1.9453125,4.3666992,4.3369141  C54.3666992,86.0546875,52.4077148,88,50,88z"></path><path d="M26.184082,67.4521484c-0.0058594,0-0.012207,0-0.0180664,0c-1.690918,0-3.2783203,0.65625-4.4711914,1.8496094  c-1.1977539,1.1972656-1.8549805,2.7919922-1.8500977,4.4897461c0.0048828,1.6953125,0.6694336,3.2910156,1.8710938,4.4926758  s2.7973633,1.8662109,4.4926758,1.8710938c0.0063477,0,0.012207,0,0.0185547,0c1.690918,0,3.2783203-0.6567383,4.4711914-1.8500977  c1.1977539-1.1972656,1.8544922-2.7919922,1.8496094-4.4892578c-0.0043945-1.6953125-0.6689453-3.2910156-1.8710938-4.4926758  C29.4750977,68.1210938,27.8793945,67.456543,26.184082,67.4521484z M29.2841797,76.8911133  c-0.8154297,0.8154297-1.9008789,1.2641602-3.0576172,1.2641602c-0.0039062,0-0.0083008,0-0.012207,0  c-1.1635742-0.003418-2.2587891-0.4599609-3.0844727-1.2851562c-0.8251953-0.8256836-1.2817383-1.9208984-1.2851562-3.0844727  c-0.003418-1.1611328,0.4458008-2.2514648,1.2641602-3.0698242c0.8154297-0.8154297,1.9008789-1.2636719,3.0571289-1.2636719  c0.0043945,0,0.0083008,0,0.0126953,0c1.1630859,0.0029297,2.2583008,0.4594727,3.0839844,1.2851562  s1.2822266,1.9208984,1.2851562,3.0839844C30.5512695,74.9824219,30.1025391,76.0727539,29.2841797,76.8911133z"></path><path d="M10,50c0,3.5107422,2.8422852,6.3666992,6.3364258,6.3666992S22.6733398,53.5107422,22.6733398,50  s-2.8427734-6.3666992-6.3369141-6.3666992S10,46.4892578,10,50z M20.6733398,50  c0,2.4077148-1.9453125,4.3666992-4.3369141,4.3666992C13.9453125,54.3666992,12,52.4077148,12,50  s1.9453125-4.3666992,4.3364258-4.3666992C18.7280273,45.6333008,20.6733398,47.5922852,20.6733398,50z"></path><path d="M30.6982422,21.6948242c-1.1928711-1.1933594-2.7802734-1.8500977-4.4711914-1.8500977c-0.0063477,0-0.012207,0-0.0185547,0  c-1.6953125,0.0048828-3.2910156,0.6694336-4.4926758,1.8710938s-1.8662109,2.7973633-1.8710938,4.4926758  c-0.0048828,1.6977539,0.6523438,3.2924805,1.8500977,4.4897461c1.1933594,1.1933594,2.7802734,1.8496094,4.4711914,1.8496094  c0.0058594,0,0.012207,0,0.0180664,0c1.6953125-0.0043945,3.2910156-0.6689453,4.4926758-1.8710938  c1.2021484-1.2016602,1.8666992-2.7973633,1.8710938-4.4926758C32.5527344,24.4868164,31.8959961,22.8920898,30.6982422,21.6948242z   M29.2626953,29.2626953c-0.8256836,0.8256836-1.9208984,1.2822266-3.0839844,1.2851562c-0.0043945,0-0.0083008,0-0.0126953,0  c-1.15625,0-2.2416992-0.4482422-3.0571289-1.2636719c-0.8183594-0.8183594-1.2675781-1.9086914-1.2641602-3.0698242  c0.003418-1.1635742,0.4599609-2.2587891,1.2851562-3.0844727c0.8256836-0.8251953,1.9208984-1.2817383,3.0844727-1.2851562  c0.0039062,0,0.0083008,0,0.012207,0c1.1567383,0,2.2421875,0.4487305,3.0576172,1.2641602  c0.8183594,0.8183594,1.2670898,1.9086914,1.2636719,3.0698242C30.5449219,27.3417969,30.0883789,28.4370117,29.2626953,29.2626953z  "></path><path d="M32.7509766,21.0688477c0.1831055,0.328125,0.5234375,0.5126953,0.8740234,0.5126953  c0.1650391,0,0.3320312-0.0405273,0.4863281-0.1269531c2.0742188-1.1577148,4.2802734-2.0878906,6.5556641-2.765625  c0.5292969-0.1577148,0.8310547-0.7143555,0.6733398-1.2436523c-0.1582031-0.5302734-0.7167969-0.8320312-1.2436523-0.6733398  c-2.4165039,0.7192383-4.7578125,1.7075195-6.9599609,2.9365234C32.6542969,19.9775391,32.4814453,20.5864258,32.7509766,21.0688477  z"></path><path d="M65.4521484,21.2236328c0.1513672,0.0820312,0.3144531,0.1206055,0.4750977,0.1206055  c0.3554688,0,0.699707-0.1894531,0.8803711-0.5239258c0.2626953-0.4858398,0.0820312-1.0927734-0.4033203-1.3554688  c-2.2148438-1.1987305-4.5688477-2.1557617-6.9970703-2.8452148c-0.5317383-0.1489258-1.0839844,0.1582031-1.2348633,0.6889648  c-0.1508789,0.53125,0.1577148,1.0839844,0.6889648,1.2348633C61.1484375,19.1928711,63.3662109,20.0947266,65.4521484,21.2236328z"></path><path d="M81.1860352,40.5419922c0.1293945,0.4345703,0.5273438,0.715332,0.9580078,0.715332  c0.0947266,0,0.1904297-0.0136719,0.2856445-0.0419922c0.5292969-0.1577148,0.8310547-0.7143555,0.6733398-1.2436523  c-0.7192383-2.4165039-1.7075195-4.7578125-2.9365234-6.9599609c-0.269043-0.4829102-0.8779297-0.6552734-1.3603516-0.3857422  c-0.4824219,0.269043-0.6552734,0.8779297-0.3857422,1.3603516C79.578125,36.0605469,80.5083008,38.2666016,81.1860352,40.5419922z"></path><path d="M79.5297852,66.8032227c0.3554688,0,0.699707-0.1894531,0.8803711-0.5239258  c1.1987305-2.215332,2.15625-4.5693359,2.8452148-6.9970703c0.1508789-0.53125-0.1577148-1.0839844-0.6889648-1.2348633  c-0.5307617-0.1499023-1.0834961,0.1577148-1.2348633,0.6889648c-0.6494141,2.2866211-1.5512695,4.5043945-2.6801758,6.5908203  c-0.2626953,0.4858398-0.0820312,1.0927734,0.4033203,1.3554688C79.2060547,66.7646484,79.3691406,66.8032227,79.5297852,66.8032227  z"></path><path d="M65.8886719,78.2954102c-2.0742188,1.1577148-4.2802734,2.0878906-6.5556641,2.765625  c-0.5292969,0.1577148-0.8310547,0.7143555-0.6733398,1.2436523c0.1293945,0.4345703,0.5273438,0.715332,0.9580078,0.715332  c0.0947266,0,0.1904297-0.0136719,0.2856445-0.0419922c2.4165039-0.7192383,4.7578125-1.7075195,6.9599609-2.9365234  c0.4824219-0.269043,0.6552734-0.8779297,0.3857422-1.3603516C66.9794922,78.1982422,66.3706055,78.0258789,65.8886719,78.2954102z"></path><path d="M40.5927734,83.1303711c0.0913086,0.0258789,0.1831055,0.0385742,0.2734375,0.0385742  c0.4360352,0,0.8364258-0.2875977,0.9614258-0.7275391c0.1508789-0.53125-0.1577148-1.0839844-0.6889648-1.2348633  c-2.2866211-0.6494141-4.5043945-1.5512695-6.5908203-2.6801758c-0.4863281-0.2636719-1.0927734-0.0820312-1.3554688,0.4033203  c-0.2626953,0.4858398-0.0820312,1.0927734,0.4033203,1.3554688C35.8110352,81.4838867,38.1650391,82.4414062,40.5927734,83.1303711  z"></path><path d="M21.1938477,67.1240234c0.4824219-0.269043,0.6552734-0.8779297,0.3857422-1.3603516  c-1.1577148-2.0742188-2.0878906-4.2802734-2.765625-6.5556641c-0.1582031-0.5302734-0.7172852-0.831543-1.2436523-0.6733398  c-0.5292969,0.1577148-0.8310547,0.7143555-0.6733398,1.2436523c0.7192383,2.4165039,1.7075195,4.7578125,2.9365234,6.9599609  c0.1831055,0.328125,0.5234375,0.5126953,0.8740234,0.5126953C20.8725586,67.2509766,21.0395508,67.2104492,21.1938477,67.1240234z"></path><path d="M17.4335938,41.7026367c0.0913086,0.0258789,0.1831055,0.0385742,0.2734375,0.0385742  c0.4360352,0,0.8364258-0.2875977,0.9614258-0.7275391c0.6494141-2.2866211,1.5512695-4.5043945,2.6801758-6.5908203  c0.2626953-0.4858398,0.0820312-1.0927734-0.4033203-1.3554688c-0.4858398-0.2631836-1.0927734-0.0820312-1.3554688,0.4033203  c-1.1987305,2.215332-2.15625,4.5693359-2.8452148,6.9970703C16.59375,40.9990234,16.9023438,41.5517578,17.4335938,41.7026367z"></path></svg>
                                <h4 className="font-bold century text-xl"><span className="font-bold">Social Media Marketing</span></h4>
                                <p className="text-md">Stratégies de notoriété, création de contenus et community management à Toulouse.</p>
                                <Button url="/agence-community-management/" text="Agence social media Toulouse" size="md" position="center"/>
                            </div>
                        </div>
                        </section>
                    </section>
                <SimpleMap />
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsFormationReferencementNaturelGoogleSEO {
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
export default FormationReferencementNaturelGoogleSEO;
