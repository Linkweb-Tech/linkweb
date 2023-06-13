import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Button from "../components/button";
import ButtonBlog from "../components/buttonblog";
import RoundButton from "../components/roundButton";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import Accordion from '../components/accordion';
import RoundButtonPages from "../components/roundButtonPages";
import RoundButtonPagesMail from "../components/roundButtonPagesMail";
import SimpleMap from "../components/simpleMap";
import Partenaires from '../components/partenaires';
import ModalRefAgen from '../components/modalrefagen';

import blocBg from "../images/background.jpg";
// import Bg from "../images/background-referencement.jpg";
import Bg from "../images/referencement-toulouse-bg.jpg";
import imac from "../images/agence-seo-agen.jpg";
// import bgDev from '../images/bg-dev.jpg';
import mac from "../images/referencement-agen.jpg";
import siteinternet from "../images/referencement-a-agen.jpg";
import referencement from "../images/freelance.jpg";
import webdesign from "../images/atteindre-nouveaux-clients.jpg";

import ideo from "../images/ideo-arrosage-avis.png";
import dixdoigts from "../images/dixdoigts-deuxpieds-avis.png";
import hontans from "../images/hontans-avis.png";

import scroll from "../images/motiontest.svg";
import charpentelacaze from '../images/charpente-lacaze-noel-avis.png';
import sarlbesset from '../images/sarlbesset-avis.png';
import danhydro from '../images/danhydro-avis.png';
import "../scss/info.scss";
import '../scss/global.scss';
import "../scss/blochover.scss";


class ReferencementAgen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Référencement Agen - Optimisez votre visibilité en ligne avec Linkweb"
                    description="Devis personnalisé pour la définition de votre stratégie de référencement naturel SEO à Agen."
                    keywords={[`Référencement Agen`, `Référencement Agen`, `Agence de Référencement Agen`, `Agence de Référencement Agen`, `Référencement Google`]}
                    url="https://linkweb.fr/referencement-agen/"
                    nom="Référencement à Agen"
                    slug="referencement-agen/"
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
                <section className="flex items-center w-full mx-auto pb-0 mt-40 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + Bg + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
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
                            <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Agence Référencement Agen (47)</h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Boostez votre visibilité en ligne avec Linkweb, l’agence spécialisée en référencement naturel à Agen.</h2>
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
                <nav aria-label="breadcrumbs" className="w-full bg-bleu century py-2 pl-0 md:pl-48">
                        <Link to="/agence-web-agen/" className="px-3 lg:px-4 text-md lg:text-lg text-white hover:text-black">Agence web Agen</Link> <span className=" text-lg text-black"> / </span>
                        <span className="px-3 lg:px-4 text-md lg:text-lg text-white">Référencement Agen</span>
                </nav>
                <ModalRefAgen/>
                    <section className="bg-white sidetitle mt-16 mb-10">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Optimisez votre visibilité sur Internet grâce au référencement naturel SEO</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                    <br />
                                    <h3 /*data-aos='fade-left'*/ className="text-md text-black century pb-0">Vous voulez développer la présence de votre entreprise sur Internet en vue de développer votre chiffre d’affaires ? Le référencement naturel (SEO) est la solution pour améliorer votre visibilité sur les moteurs de recherche et attirer une clientèle qualifiée sur votre site internet. Notre <Link to="/agence-web-agen/" className="text-bleu hover:text-black font-bold">agence web à Agen</Link> vous accompagne tout au long de votre projet.</h3>
                                </div>
                        </section>
                        {/* <section className="bg-bleu text-white century w-full lg:w-3/4 flex flex-col justify-center century my-10 py-6 px-4 lg:px-32 md:mx-auto sm:mx-12 mt-2">
                            <h4 className="text-3xl titrehover text-center century leading-tight">Qu'est-ce que le référencement naturel ?</h4>
                            <br/>
                            <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">Le référencement naturel SEO (Search Engine Optimization) est un processus visant à optimiser un site internet pour maximiser son classement par les moteurs de recherche sur des requêtes opportunes. Il s’articule autour de 3 facteurs clés, à savoir :</p>
                            <div className="w-full flex text-center flex-col mx-auto md:flex-row justify-center items-center py-6 px-4 mt-2">
                                <div className="w-1/3">
                                    <h5 className="font-bold">Un contenu de qualité</h5>
                                    <br/>
                                    <p className="text-sm">Le contenu d’un site internet doit être créé pour vos utilisateurs en tenant compte des robots de recherche. Il doit, non seulement, répondre à une problématique, mais aussi être structuré et optimisé d’un point de vue sémantique autour d’un ou plusieurs mots-clés. Mailler vos différentes pages web entre elles par critère de pertinence permet également de renforcer l’expérience utilisateur et de favoriser la bonne navigation des robots « crawlers » sur votre site web.</p>
                                </div>
                                <div className="w-1/3">
                                    <h5 className="font-bold">Une optimisation technique performante</h5>
                                    <br/>
                                    <p className="text-sm">Chacune des pages web de votre site internet doit être techniquement optimisée pour les moteurs. Vos pages contiennent des zones chaudes auxquelles les robots accordent une importance toute particulière. De l’URL aux attributs des images, il existe plusieurs centaines de critères d’optimisation. Ce travail est indispensable pour faciliter l’indexation et maximiser le positionnement de vos pages web sur des requêtes stratégiques.</p>
                                </div>
                                <div className="w-1/3">
                                    <h5 className="font-bold">Un netlinking efficace</h5>
                                    <br/>
                                    <p className="text-sm">Le netlinking consiste à accroître la popularité de votre site internet. En recevant des liens externes (backlinks) en provenance de sites web possédant une forte autorité aux yeux de Google, votre site internet devient une référence dans votre secteur d’activité. Il s’agit d’un signal très favorable puisque votre site acquiert un capital de confiance non-négligeable auprès des moteurs, ce qui favorise un bon classement.</p>
                                </div>
                            </div>
                        </section> */}
                        <section className="w-full my-10 flex flex-col lg:flex-row justify-center">
                            {/* <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                                <h3 className="text-3xl titrehover text-center century leading-tight">Optimisez votre site internet pour les moteurs de recherche <hr className="border-solid mt-3 mx-auto border-2 w-1/6 border-bleu"/></h3>

                                <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg z-50">Le référencement naturel SEO (Search Engine Optimization) est un processus visant à optimiser un site internet pour maximiser son classement par les moteurs de recherche sur des requêtes opportunes. Il s’articule autour de 3 facteurs clés, à savoir :
                                <br/><br/>
                                <ul>
                                    <li><h5>Un contenu de qualité</h5></li>
                                    <br/>
                                    <p className="text-sm">Le contenu d’un site internet doit être créé pour vos utilisateurs en tenant compte des robots de recherche. Il doit, non seulement, répondre à une problématique, mais aussi être structuré et optimisé d’un point de vue sémantique autour d’un ou plusieurs mots-clés. Mailler vos différentes pages web entre elles par critère de pertinence permet également de renforcer l’expérience utilisateur et de favoriser la bonne navigation des robots « crawlers » sur votre site web.</p>
                                    <br/>
                                    <li><h5>Une optimisation technique performante</h5></li>
                                    <br/>
                                    <p className="text-sm">Chacune des pages web de votre site internet doit être techniquement optimisée pour les moteurs. Vos pages contiennent des zones chaudes auxquelles les robots accordent une importance toute particulière. De l’URL aux attributs des images, il existe plusieurs centaines de critères d’optimisation. Ce travail est indispensable pour faciliter l’indexation et maximiser le positionnement de vos pages web sur des requêtes stratégiques.</p>
                                    <br/>
                                    <li><h5>Un netlinking efficace</h5></li>
                                    <br/>
                                    <p className="text-sm">Le netlinking consiste à accroître la popularité de votre site internet. En recevant des liens externes (backlinks) en provenance de sites web possédant une forte autorité aux yeux de Google, votre site internet devient une référence dans votre secteur d’activité. Il s’agit d’un signal très favorable puisque votre site acquiert un capital de confiance non-négligeable auprès des moteurs, ce qui favorise un bon classement.</p>
                                </ul>
                                </p>
                            </div> */}
                            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                                <h3 className="text-3xl titrehover text-center century leading-tight px-6">Optimisez votre site internet pour les moteurs de recherche <hr className="border-solid mt-3 mx-auto border-2 w-1/6 border-bleu" style={{marginLeft:'auto', marginRight:'auto'}}/></h3>
                                <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                                    Le <strong className="font-normal">référencement naturel SEO</strong> (Search Engine Optimization) est un processus visant à <strong className="font-normal">optimiser un site internet pour maximiser son classement</strong> par les moteurs de recherche sur des requêtes opportunes. Il s’articule autour de 3 facteurs clés, à savoir :
                                    <br/><br/>
                                    <ul>
                                        <li><a href="#contenu" className="text-center text-base hover:text-bleu font-bold text-white">Un <strong>contenu de qualité</strong></a></li>
                                        <li><a href="#optimisation" className="text-center text-base hover:text-bleu font-bold text-white">Une <strong>optimisation technique</strong> performante</a></li>
                                        <li><a href="#netlinking" className="text-center text-base hover:text-bleu font-bold text-white">Un <strong>netlinking</strong> efficace</a></li>
                                    </ul>
                                </p>
                            </div>
                            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                                <h3 className="text-3xl titrehover text-center century leading-tight px-6">Positionnez-vous en tête des résultats de recherche sur des mots-clés à haut potentiel de visibilité <hr className="border-solid mt-3 mx-auto border-2 w-1/6 border-bleu" style={{marginLeft:'auto', marginRight:'auto'}}/></h3>
                                <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                                    Le <strong className="font-normal">référencement naturel</strong> est une mine d’or quand on sait l’exploiter. En positionnant votre site en tête des moteurs sur des <strong className="font-normal">requêtes stratégiques</strong>, communiquez auprès d’une audience élargie et ciblée et donnez accès à vos produits et prestations rapidement.
                                    <br/><br/>
                                    Avec un <strong className="font-normal">bon positionnement</strong> dans les pages de résultats de recherches, atteignez un taux de clics important qui vous permettra de <strong className="font-normal">générer du trafic</strong> vers votre site et d’accroître votre notoriété sur le long terme.
                                    <br/><br/>
                                    Gagnez en crédibilité auprès des utilisateurs : les premiers résultats de Google sont souvent les plus fiables et les plus pertinents. Être bien positionné sur les moteurs génère plus de trafic vers votre site et améliore votre <strong className="font-normal">e-réputation</strong>.
                                </p>
                            </div>
                            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                                <h3 className="text-3xl titrehover text-center century leading-tight">Attirez une clientèle qualifiée sur votre site internet <hr className="border-solid mt-3 mx-auto border-2 w-1/6 border-bleu" style={{marginLeft:'auto', marginRight:'auto'}}/></h3>
                                <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                                    Optimisez votre rentabilité grâce à <strong className="font-normal">une stratégie SEO</strong>. Attirez des utilisateurs qui recherchent précisément vos produits et services, et augmentez votre <strong className="font-normal">chiffre d'affaires</strong> en convertissant ces visiteurs en nouveaux clients fidèles.
                                    <br/><br/>
                                    Maximisez vos conversions en ciblant les <strong className="font-normal">mots-clés</strong> importants pour vos cibles et pertinents pour votre entreprise grâce à l'expertise de notre <strong className="font-normal">agence de référencement spécialisée en SEO à Agen</strong>. Nos consultants effectuent un travail précis et rigoureux pour vous permettre d’obtenir des résultats concrets et durables au sein d’un site web à votre image.
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
                <section className="bg-white sidetitle pt-10 pb-0 md:pt-10">
                <section className="bg-darkgrey sidetitle py-10">
                    <section className="w-full lg:w-2/3 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
                        <h2 className="century text-center lg:text-left text-white text-3xl md:text-5xl leading-none">Les services de notre agence de référencement à Agen</h2>
                        <br />
                        <div className="line-title my-4 ">
                            <br />
                            <hr className="w-1/2 border-bleu lg:w-1/12" />
                            <br />
                            <h3 /*data-aos='fade-left'*/ className="text-xl text-white century pb-0">Depuis près de 15 ans, l’agence de référencement Linkweb accompagne les professionnels dans le développement de leur stratégie de webmarketing. Développez votre présence sur le web et pérennisez vos positions en première page de Google avec une prestation et un accompagnement sur-mesure.</h3>
                        </div>
                    </section>
                    <section className="flex justify-center flex-col items-center">
                        <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 text-white century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#ffffff" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#ffffff" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#ffffff" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>
                                <h4 className="-mt-4 font-bold century text-bleu"><span className="font-bold">Stratégie SEO</span></h4>
                                <p>Développement de <strong className="font-normal">stratégies de référencement sur-mesure</strong> avec audit SEO régulier et recherche de mots-clés opportuns pour votre site internet vitrine, e-commerce ou solution personnalisée.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg viewBox="0 0 100 125" width="50px" className="lg:mx-0 mx-auto block" fill="#ffffff" ><g><path d="M53.676,13.5c-0.18-0.15-0.407-0.233-0.642-0.233H11.229c-0.553,0-1,0.448-1,1v71.467c0,0.552,0.447,1,1,1h57.173   c0.553,0,1-0.448,1-1V27.129c0-0.296-0.131-0.577-0.358-0.767L53.676,13.5z M53.86,16.262l11.977,10.023H53.86V16.262z    M12.229,84.733V15.267H51.86v12.019c0,0.552,0.447,1,1,1h14.542v56.448H12.229z" /><path d="M19.002,27.684h23.734c0.553,0,1-0.448,1-1s-0.447-1-1-1H19.002c-0.553,0-1,0.448-1,1S18.449,27.684,19.002,27.684z" /><path d="M61.078,40.424H19.002c-0.553,0-1,0.448-1,1s0.447,1,1,1h42.076c0.553,0,1-0.448,1-1S61.631,40.424,61.078,40.424z" /><path d="M61.078,47.258H19.002c-0.553,0-1,0.448-1,1s0.447,1,1,1h42.076c0.553,0,1-0.448,1-1S61.631,47.258,61.078,47.258z" /><path d="M61.078,54.092H19.002c-0.553,0-1,0.448-1,1s0.447,1,1,1h42.076c0.553,0,1-0.448,1-1S61.631,54.092,61.078,54.092z" /><path d="M43.277,60.926H19.002c-0.553,0-1,0.448-1,1s0.447,1,1,1h24.275c0.553,0,1-0.448,1-1S43.83,60.926,43.277,60.926z" /><path d="M88.771,23.629h-8.932c-0.553,0-1,0.448-1,1v54.672c0,0.197,0.059,0.39,0.168,0.554l4.283,6.432   c0.182,0.273,0.485,0.439,0.813,0.446c0.007,0,0.013,0,0.02,0c0.32,0,0.622-0.154,0.811-0.414l4.648-6.432   c0.123-0.171,0.189-0.375,0.189-0.586V24.629C89.771,24.077,89.323,23.629,88.771,23.629z M80.839,77.766V32.775h6.932v44.991   H80.839z M87.771,25.629v5.146h-6.932v-5.146H87.771z M84.155,83.979l-2.806-4.214h5.852L84.155,83.979z" /></g></svg>
                                <h4 className="font-bold century -mt-4 text-bleu"><span className="font-bold">Production de contenus</span></h4>
                                <p>Production et rédaction de <strong className="font-normal">contenus optimisés</strong> techniquement et sémantiquement en fonction de l’intention de recherche et du mot-clé ciblé.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" fill="#ffffff" className="lg:mx-0 mx-auto block" viewBox="0 0 26.458333 33.0729175"><g transform="translate(0,-270.54165)"><path d="m 5.8714289,272.12915 c -1.8514508,0 -3.3578869,1.50883 -3.3578869,3.36322 0,1.85439 1.5064361,3.36271 3.3578869,3.36271 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36271 0,-0.93619 -0.3850002,-1.78375 -1.0034311,-2.39407 l -2.1329844,3.56079 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869546,-1.24151 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35362 C 7.272958,272.36508 6.5998223,272.12917 5.8714289,272.12917 Z m 5.9146431,2.06968 a 0.25889664,0.25930793 0 0 0 0.02674,0.51792 h 11.867626 a 0.25855123,0.25896196 0 1 0 0,-0.51792 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02674,0 z m 0.02674,2.06866 a 0.25836408,0.25877452 0 1 0 0,0.51741 h 5.668955 a 0.25836408,0.25877452 0 1 0 0,-0.51741 z m -5.9413818,4.14035 c -1.8514508,0 -3.3578869,1.50884 -3.3578869,3.36323 0,1.85439 1.5064361,3.36271 3.3578869,3.36271 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36271 0,-0.9362 -0.3850002,-1.78375 -1.0034311,-2.39407 l -2.1329844,3.56079 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869546,-1.24151 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35362 c -0.5508481,-0.39625 -1.2239838,-0.63216 -1.9523772,-0.63216 z m 5.9156518,2.06969 a 0.25832484,0.25873522 0 0 0 -10e-4,5.1e-4 0.2587086,0.25911959 0 0 0 0.02674,0.51741 h 11.867629 a 0.25836408,0.25877452 0 1 0 0,-0.51741 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02573,-5.1e-4 z m 0.02573,2.06866 a 0.25835919,0.25876963 0 0 0 0,0.51741 h 5.668957 a 0.25835919,0.25876963 0 0 0 0,-0.51741 z m -5.9413807,4.14035 c -1.8514507,0 -3.3578869,1.50884 -3.3578869,3.36322 0,1.8544 1.5064362,3.36272 3.3578869,3.36272 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36272 0,-0.93618 -0.3850002,-1.78374 -1.0034311,-2.39407 l -2.1329844,3.5608 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869543,-1.2415 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35363 C 7.2729607,288.9225 6.599825,288.68658 5.8714316,288.68658 Z m 5.9146427,2.07018 a 0.2587086,0.25911959 0 0 0 0.02674,0.51742 H 23.68044 a 0.25836408,0.25877452 0 1 0 0,-0.51742 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02674,0 z m 0.02674,2.06817 a 0.25836408,0.25877452 0 1 0 0,0.51741 h 5.668956 a 0.25836408,0.25877452 0 1 0 0,-0.51741 z" /></g></svg>
                                <h4 className="-mt-4 font-bold century text-bleu"><span className="font-bold">Optimisation de site internet</span></h4>
                                <p>Mise en place d’une <a href="/referencement-toulouse/arborescence-seo/" className="text-bleu hover:text-white font-bold">arborescence SEO</a>, <strong className="font-normal">maillage interne</strong> et application des critères d’optimisation technique sur chacune des pages de votre site internet.</p>                              
                            </div>
                        </div>
                        <div className="w-full text-white flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                            <div className="w-full svgtransform -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg viewBox="0 0 28 35" width="30px" className="-mt-2 lg:mx-0 mx-auto block"><g fill="#ffffff" ><g><path d="M25.63,8.16 C25.3791233,8.2736063 25.2673479,8.56869337 25.38,8.82 C27.9835268,14.4995076 26.0128726,21.2291511 20.7570105,24.607179 C15.5011485,27.9852068 8.56093161,26.9827248 4.47584423,22.2554403 C0.390756842,17.5281557 0.405052352,10.5159253 4.50938029,5.80533611 C8.61370823,1.09474697 15.5579549,0.120570547 20.8,3.52 L20.23,4.09 C20.1366875,4.18292491 20.082937,4.30834272 20.08,4.44 L20.08,7.21 L19.64,7.65 C16.6439961,4.99569867 12.201052,4.79450437 8.97740753,7.1671551 C5.75376307,9.53980583 4.62518012,13.8417277 6.26892868,17.4913093 C7.91267724,21.1408909 11.882203,23.1466567 15.7953676,22.3049336 C19.7085322,21.4632105 22.5022531,18.0026679 22.5,14 C22.5060564,12.6917472 22.2046221,11.4003755 21.62,10.23 C21.5479513,10.0569807 21.3851924,9.93878386 21.1983704,9.92380916 C21.0115484,9.90883447 20.8320405,9.99959693 20.733352,10.1589308 C20.6346636,10.3182647 20.6333696,10.5194096 20.73,10.68 C22.4788666,14.1666095 21.2961553,18.4112488 17.9962719,20.4910925 C14.6963885,22.5709362 10.3568052,21.8068773 7.96572517,18.7250408 C5.57464511,15.6432043 5.91279959,11.2498661 8.74733809,8.57024454 C11.5818766,5.89062297 15.9872705,5.79966346 18.93,8.36 L16.09,11.21 C14.7906587,10.2456333 12.9988445,10.3008705 11.7613722,11.3434409 C10.5238998,12.3860114 10.1653515,14.1424545 10.8951986,15.58662 C11.6250458,17.0307856 13.2518533,17.7838768 14.8252069,17.4059224 C16.3985604,17.0279679 17.5057779,15.6181031 17.5,14 C17.5,13.7238576 17.2761424,13.5 17,13.5 C16.7238576,13.5 16.5,13.7238576 16.5,14 C16.5,15.3807119 15.3807119,16.5 14,16.5 C12.6192881,16.5 11.5,15.3807119 11.5,14 C11.5,12.6192881 12.6192881,11.5 14,11.5 C14.4897484,11.5018497 14.9686885,11.6441435 15.38,11.91 L13.65,13.65 C13.5533228,13.7407333 13.4984814,13.8674141 13.4984814,14 C13.4984814,14.1325859 13.5533228,14.2592667 13.65,14.35 C13.7407333,14.4466772 13.8674141,14.5015186 14,14.5015186 C14.1325859,14.5015186 14.2592667,14.4466772 14.35,14.35 L20,8.7 L20.78,7.92 L23.55,7.92 C23.6816573,7.917063 23.8070751,7.86331251 23.9,7.77 L27.36,4.31 C27.5066366,4.17107596 27.5506083,3.95521467 27.47,3.77 C27.3919291,3.57989638 27.2054872,3.45692403 27,3.46 L24.54,3.46 L24.54,1 C24.5389924,0.798149057 24.4167128,0.616701799 24.23,0.54 C24.0447853,0.459391664 23.828924,0.503363408 23.69,0.65 L21.52,2.8 C15.9401207,-0.926846735 8.46694245,0.0290172714 4.00472299,5.04030825 C-0.457496475,10.0515992 -0.543590257,17.5851679 3.8029405,22.6971255 C8.14947127,27.809083 15.5988534,28.9354824 21.2624452,25.3371263 C26.9260371,21.7387701 29.0711253,14.516536 26.29,8.41 C26.1763937,8.15912326 25.8813066,8.04734786 25.63,8.16 Z M23.35,6.92 L21.79,6.92 L24.25,4.46 L25.81,4.46 L23.35,6.92 Z M23.54,3.75 L21.08,6.21 L21.08,4.65 L23.54,2.19 L23.54,3.75 Z" /></g></g></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Netlinking</span></h4>
                                <p>Recherche de sites internet partenaires et création de backlinks de qualité et pertinents en direction de votre site web.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" fill="#ffffff" viewBox="0 0 800 227.5"><g><path class="fil0" d="M33 0l734 0c18,0 33,15 33,33l0 117c0,17 -15,32 -33,32l-734 0c-18,0 -33,-15 -33,-32l0 -117c0,-18 15,-33 33,-33zm150 17l0 148 584 0c9,0 16,-7 16,-15l0 -117c0,-9 -7,-16 -16,-16l-584 0zm-17 148l0 -148 -133 0c-9,0 -16,7 -16,16l0 117c0,8 7,15 16,15l133 0z" /><path class="fil0" d="M75 46c-18,3 -31,20 -28,39 3,18 20,31 39,28 19,-3 31,-20 28,-39 -3,-18 -20,-31 -39,-28zm46 65l28 34c4,5 -9,16 -14,11l-27 -33c-6,3 -12,6 -19,7 -29,4 -54,-14 -59,-43 -4,-28 15,-54 43,-58 28,-4 54,14 58,43 2,14 -1,27 -10,39z" /></g></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Référencement local</span></h4>
                                <p>Valorisation de votre fiche entreprise <a href="/referencement-toulouse/comment-apparaitre-en-premier-sur-google-my-business/" className="text-bleu hover:text-white font-bold"><strong>Google My Business</strong></a> et création de pages web destinées à vos secteurs de prédilection.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto -mt-6 block" viewBox="0 0 100 125"><path fill="#ffffff" d="M66.598,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44c-0.556,0.081-1.017,0.47-1.191,1.004  c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014c-0.095,0.554,0.133,1.113,0.587,1.443  c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C67.673,71.235,67.16,70.916,66.598,70.916L66.598,70.916z M50,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169L50,82.719l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C51.074,71.235,50.562,70.916,50,70.916L50,70.916z M33.402,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423  l2.707,1.423c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014  l2.19-2.135c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C34.476,71.235,33.963,70.916,33.402,70.916L33.402,70.916z" /><path fill="#ffffff" d="M72.131,50.738h-25.82v-1.475h25.82V50.738z M50,52.951h-3.689v1.475H50V52.951z M72.131,52.951H53.689v1.475  h18.443V52.951z M61.066,56.639H46.311v1.475h14.754V56.639z M72.131,56.639h-7.377v1.475h7.377V56.639z M57.377,60.328H46.311  v1.475h11.066V60.328z M61.066,27.131H46.311v1.475h14.754V27.131z M72.131,27.131h-7.377v1.475h7.377V27.131z M72.131,30.82h-25.82  v1.475h25.82V30.82z M57.377,34.508H46.311v1.475h11.066V34.508z M72.131,34.508H61.066v1.475h11.066V34.508z M64.754,38.197H46.311  v1.475h18.443V38.197z" /><path fill="#ffffff" d="M75.82,12.377h-4.338c-0.741-1.139-1.62-2.329-2.458-3.404l-0.257-0.33l-0.416,0.052  c-2.313,0.288-8.743,0.858-10.692,0.051c-0.341-0.141-0.869-0.895-1.294-1.501C55.592,6.141,54.793,5,53.689,5h-7.377  c-1.104,0-1.904,1.141-2.677,2.244c-0.425,0.606-0.953,1.36-1.294,1.501c-1.947,0.807-8.379,0.237-10.692-0.051l-0.416-0.052  l-0.257,0.33c-0.838,1.075-1.717,2.265-2.458,3.404H24.18c-2.441,0-4.426,1.986-4.426,4.426v73.77c0,2.441,1.985,4.426,4.426,4.426  H75.82c2.441,0,4.426-1.985,4.426-4.426v-73.77C80.246,14.363,78.26,12.377,75.82,12.377z M31.886,10.208  c1.891,0.218,8.608,0.899,11.02-0.1c0.737-0.305,1.32-1.137,1.937-2.017c0.396-0.564,1.132-1.615,1.469-1.615h7.377  c0.337,0,1.073,1.051,1.469,1.615c0.617,0.88,1.2,1.712,1.937,2.017c2.412,0.999,9.129,0.318,11.02,0.1  c1.698,2.219,3.397,4.834,3.684,5.857H28.201C28.489,15.043,30.188,12.427,31.886,10.208z M78.77,90.574  c0,1.627-1.324,2.951-2.951,2.951H24.18c-1.627,0-2.951-1.324-2.951-2.951v-73.77c0-1.627,1.324-2.951,2.951-2.951h3.449  c-0.727,1.324-1.12,2.457-0.82,3.071c0.192,0.392,0.578,0.618,1.059,0.618h44.262c0.482,0,0.867-0.225,1.059-0.618  c0.3-0.614-0.093-1.746-0.82-3.071h3.449c1.627,0,2.951,1.324,2.951,2.951V90.574z M50,13.115c-1.424,0-2.582-1.158-2.582-2.582  S48.576,7.951,50,7.951s2.582,1.158,2.582,2.582S51.424,13.115,50,13.115z M50,9.426c-0.61,0-1.107,0.496-1.107,1.107  c0,0.61,0.496,1.107,1.107,1.107s1.107-0.496,1.107-1.107C51.107,9.923,50.61,9.426,50,9.426z" /><path fill="#ffffff" d="M38.934,50v11.066H27.869V50H38.934 M38.934,48.525H27.869c-0.815,0-1.475,0.661-1.475,1.475v11.066  c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475V50C40.41,49.185,39.749,48.525,38.934,48.525  L38.934,48.525z M33.483,38.197c-0.008,0-0.016,0-0.024,0c-0.302,0-0.588-0.12-0.792-0.343l-3.77-4.111  c-0.413-0.451-0.382-1.147,0.069-1.559c0.451-0.412,1.151-0.379,1.563,0.071l2.989,3.267l7.698-7.698  c0.432-0.432,1.132-0.432,1.565,0c0.432,0.432,0.432,1.133,0,1.565l-8.516,8.5C34.058,38.097,33.776,38.197,33.483,38.197z   M38.934,34.271v4.664h-5.451H33.45h-5.581V27.869h11.066v1.194l1.45-1.45c-0.122-0.692-0.722-1.22-1.45-1.22H27.869  c-0.815,0-1.475,0.661-1.475,1.475v11.066c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475v-6.136  L38.934,34.271z" /></svg>
                                <h4 className="-mt-6 font-bold century text-bleu"><span className="font-bold">Accompagnement personnalisé</span></h4>
                                <p>Reporting régulier, veille concurrentielle, suivi du travail effectué et <a href="/referencement-toulouse/rapport-positionnement/" className="text-bleu hover:text-white font-bold"><strong>rapport de positionnement</strong></a> selon les objectifs définis en début de prestation.</p>
                            </div>
                        </div>
                    </section>
                </section>
                </section>
                <section className="w-full flex mb-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12">
                        <h2 className="text-3xl font-bold md:text-4xl leading-none">Demandez un audit de référencement de votre site internet professionnel</h2>
                        <br/>
                        <p className="text-md">Vous vous demandez comment <strong>créer un site internet optimisé pour le SEO</strong> ? Notre agence spécialisée dans le webmarketing vous propose un <a href="/referencement-toulouse/pourquoi-faire-un-audit-seo/" className="text-black hover:text-white font-bold">audit SEO</a> de votre site web et détermine les optimisations nécessaires pour vous permettre d’atteindre vos objectifs sur le web : balises hn, maillage interne, analyse sémantique, redirections, erreurs 404 et bien plus encore.</p>
                    </div>
                    <div className="w-full mx-auto block lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="DEMANDER UN AUDIT" />
                    </div>
                </section>
                <section className="bg-white sidetitle mt-16 mb-10">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Vous êtes à la recherche d’une agence de référencement à Agen spécialiste du SEO ?</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                    <br />
                                    <h3 /*data-aos='fade-left'*/ className="text-md text-black century pb-0">Ils ont fait appel aux services de notre agence de référencement à Agen et sont satisfaits.</h3>
                                </div>
                        </section>
                        <section className="flex flex-col md:flex-row flex-wrap justify-center">
                            <div className="w-full sm:w-1/2 lg:w-1/4 mx-0 md:mx-3 border-bleu border-solid border-2 px-12 century bg-bleu text-black py-10">
                                        <div className="flex flex-row">
                                            <img width="50px" height="50px" src={ideo} alt="Avis Google" style={{height:'100%'}}/>
                                            <svg className="-my-6" width="100px" viewBox="0 0 100 125">
                                                <path fill="#000000" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                                <path fill="#000000" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                                <path fill="#000000" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                                <path fill="#000000" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                                <path fill="#000000" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                            </svg>
                                        </div>
                                <h4>IDÉO ARROSAGE</h4>
                                <br/>
                                <p>
                                Je suis très satisfait du site Ideo-arrosage que <strong>Linkweb</strong> a réalisé pour nous, le personnel est très réactif et à l'écoute, de la création jusqu'au suivi quotidien.
                                </p>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/4 mx-0 md:mx-3 border-bleu border-solid border-2 px-12 century bg-bleu text-black py-10">
                                        <div className="flex flex-row">
                                            <img width="50px" height="50px" src={hontans} alt="Avis Google" style={{height:'100%'}}/>
                                            <svg className="-my-6" width="100px" viewBox="0 0 100 125">
                                                <path fill="#000000" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                                <path fill="#000000" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                                <path fill="#000000" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                                <path fill="#000000" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                                <path fill="#000000" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                            </svg>
                                        </div>
                                <h4>SARL HONTANS</h4>
                                <br/>
                                <p>
                                Client depuis 4 ans, très satisfait du travail réalisé par la société Linkweb, à l'écoute, compétent, un vrai plus pour mon entreprise.
                                </p>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/4 mx-0 md:mx-3 border-bleu border-solid border-2 px-12 century bg-bleu text-black py-10">
                                        <div className="flex flex-row">
                                            <img width="50px" height="50px" src={dixdoigts} alt="Avis Google" style={{height:'100%'}}/>
                                            <svg className="-my-6" width="100px" viewBox="0 0 100 125">
                                                <path fill="#000000" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                                <path fill="#000000" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                                <path fill="#000000" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                                <path fill="#000000" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                                <path fill="#000000" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                            </svg>
                                        </div>
                                <h4>DIX DOIGTS DEUX PIEDS</h4>
                                <br/>
                                <p>
                                Equipe sérieuse. Partenaire à l'écoute, réactif et de bons conseils. Travail satisfaisant et un bon suivi du site chaque mois. Je recommande !!!
                                </p>
                            </div>
                        </section>
                    </section>                
                    <section className="max-w-6xl mx-auto flex align-center justify-center text-center mb-4">
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
                <section className="bg-white sidetitle mt-16 mb-10">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Les expertises de notre agence webmarketing à Agen</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                    <br />
                                    <h3 /*data-aos='fade-left'*/ className="text-md text-black century pb-0">Linkweb, c’est de multiples solutions pour mener votre projet web sur-mesure au-delà du référencement à Agen.</h3>
                                </div>
                        </section>
                    <section className="w-full">
                        <div className="w-full px-4 md:px-0 lg:px-0 flex justify-center mx-auto flex-col md:flex-row lg:w-full mt-5 flex-wrap">
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform mx-auto lg:mx-4 px-2 mb-10 text-black century text-center  border-bleu border-solid border py-4">
                                <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   " /><path fill="#37cfee" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z" /><g><path fill="#37cfee" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z" /><rect x="72.041" y="56.851" width="0.312" height="5.159" /></g><path fill="#37cfee" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z" /><path fill="#37cfee" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z" /></g></svg>
                                <h4 className="font-bold century text-xl"><span className="font-bold">Création de site internet</span></h4>
                                <p className="text-md">Création ou <strong>refonte de votre site internet</strong> sur-mesure.</p>
                                <Button url="/creation-de-site-internet-a-agen/" text="Création site internet Agen" size="md" position="center"/>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform text-black mx-auto lg:mx-4 px-2 mb-10 century text-center border-bleu border-solid border py-4">
                                <svg width="50px" className="mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#37cfee" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#37cfee" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#37cfee" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>                                
                                <h4 className="font-bold century -mt-4 text-xl"><span className="font-bold">Social Media Marketing</span></h4>
                                <p className="text-md">Développement stratégique, <strong>création de contenus</strong> et community management.</p>
                                <Button url="/referencement-agen/" text="Agence social media Agen" size="md" position="center"/>
                            </div>
                        {/* </div>
                        <div className="w-full text-black flex flex-col md:flex-row mx-auto justify-center lg:w-full mt-5 px-4 md:px-0 lg:px-0 md:mt-10 mb-12"> */}
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform justify-center text-black px-2 mb-10 mx-auto lg:mx-4 century text-center border-bleu border-solid border py-4">
                                <svg width="50px" class="mx-auto block" fill="#37cfee" viewBox="0 0 100 125"><path d="M50.3383789,43.5737305c1.6616211,0,3.215332,0.8461914,4.2636719,2.3217773  c0.3208008,0.449707,0.9443359,0.5561523,1.3945312,0.2363281c0.4501953-0.3203125,0.5561523-0.9443359,0.2363281-1.3945312  c-1.4287109-2.0107422-3.5771484-3.1635742-5.8945312-3.1635742c-3.2249756,0-5.9712524,2.2554321-7.0158691,5.3994141H42.043457  c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1h0.859314c-0.0228882,0.260498-0.0365601,0.5240479-0.0365601,0.7910156  c0,0.3817139,0.0322876,0.7545776,0.0786133,1.1225586H42.043457c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1h1.3900146  c1.1224976,2.9710693,3.793457,5.0678711,6.9049072,5.0678711c2.3178711,0,4.4663086-1.1533203,5.8945312-3.1635742  c0.3198242-0.4501953,0.2138672-1.074707-0.2363281-1.3945312c-0.4501953-0.3188477-1.0737305-0.2138672-1.3945312,0.2363281  C53.5541992,55.1083984,52,55.9545898,50.3383789,55.9545898c-2.0101929,0-3.7658691-1.2359009-4.7171631-3.0678711h3.2454834  c0.5522461,0,1-0.4477539,1-1s-0.4477539-1-1-1h-3.9058228c-0.0593872-0.364624-0.0946655-0.7387695-0.0946655-1.1225586  c0-0.2685547,0.0203247-0.5313721,0.0498047-0.7910156h3.9506836c0.5522461,0,1-0.4477539,1-1s-0.4477539-1-1-1h-3.406189  C46.364502,44.9595947,48.2089233,43.5737305,50.3383789,43.5737305z"></path><path d="M50,36.3857422c-7.5068359,0-13.6142578,6.1074219-13.6142578,13.6142578S42.4931641,63.6142578,50,63.6142578  S63.6142578,57.5068359,63.6142578,50S57.5068359,36.3857422,50,36.3857422z M50,61.6142578  c-6.4042969,0-11.6142578-5.2099609-11.6142578-11.6142578S43.5957031,38.3857422,50,38.3857422  S61.6142578,43.5957031,61.6142578,50S56.4042969,61.6142578,50,61.6142578z"></path><path d="M50,31.1928711c-10.362793,0-18.793457,8.4370117-18.793457,18.8071289S39.637207,68.8071289,50,68.8071289  S68.793457,60.3701172,68.793457,50S60.362793,31.1928711,50,31.1928711z M50,66.8071289  c-9.2597656,0-16.793457-7.5395508-16.793457-16.8071289S40.7402344,33.1928711,50,33.1928711S66.793457,40.7324219,66.793457,50  S59.2597656,66.8071289,50,66.8071289z"></path><path d="M56.3666992,16.3364258C56.3666992,12.8422852,53.5107422,10,50,10s-6.3666992,2.8422852-6.3666992,6.3364258  S46.4892578,22.6733398,50,22.6733398S56.3666992,19.8305664,56.3666992,16.3364258z M45.6333008,16.3364258  C45.6333008,13.9453125,47.5922852,12,50,12s4.3666992,1.9453125,4.3666992,4.3364258  c0,2.3916016-1.9589844,4.3369141-4.3666992,4.3369141S45.6333008,18.7280273,45.6333008,16.3364258z"></path><path d="M80.1552734,26.2084961c-0.0048828-1.6953125-0.6694336-3.2910156-1.8710938-4.4926758  s-2.7973633-1.8662109-4.4926758-1.8710938c-0.0063477,0-0.012207,0-0.0185547,0  c-1.690918,0-3.2783203,0.6567383-4.4711914,1.8500977c-1.1977539,1.1972656-1.8544922,2.7919922-1.8496094,4.4892578  c0.0043945,1.6953125,0.6689453,3.2910156,1.8710938,4.4926758c1.2016602,1.2021484,2.7973633,1.8666992,4.4926758,1.8710938  c0.0058594,0,0.012207,0,0.0180664,0c1.690918,0,3.2783203-0.65625,4.4711914-1.8496094  C79.5029297,29.5009766,80.1601562,27.90625,80.1552734,26.2084961z M76.8911133,29.2841797  c-0.8154297,0.8154297-1.9008789,1.2636719-3.0571289,1.2636719c-0.0043945,0-0.0083008,0-0.0126953,0  c-1.1630859-0.0029297-2.2583008-0.4594727-3.0839844-1.2851562s-1.2822266-1.9208984-1.2851562-3.0839844  c-0.003418-1.1611328,0.4453125-2.2514648,1.2636719-3.0698242c0.8154297-0.8154297,1.9008789-1.2641602,3.0576172-1.2641602  c0.0039062,0,0.0083008,0,0.012207,0c1.1635742,0.003418,2.2587891,0.4599609,3.0844727,1.2851562  c0.8251953,0.8256836,1.2817383,1.9208984,1.2851562,3.0844727C78.1586914,27.3754883,77.7094727,28.4658203,76.8911133,29.2841797z  "></path><path d="M83.6635742,43.6333008c-3.4941406,0-6.3369141,2.855957-6.3369141,6.3666992s2.8427734,6.3666992,6.3369141,6.3666992  S90,53.5107422,90,50S87.1577148,43.6333008,83.6635742,43.6333008z M83.6635742,54.3666992  c-2.3916016,0-4.3369141-1.9589844-4.3369141-4.3666992s1.9453125-4.3666992,4.3369141-4.3666992  C86.0546875,45.6333008,88,47.5922852,88,50S86.0546875,54.3666992,83.6635742,54.3666992z"></path><path d="M73.8339844,67.4521484c-0.0058594,0-0.012207,0-0.0180664,0c-1.6953125,0.0043945-3.2910156,0.6689453-4.4926758,1.8710938  c-1.2021484,1.2016602-1.8666992,2.7973633-1.8710938,4.4926758c-0.0048828,1.6972656,0.6518555,3.2919922,1.8496094,4.4892578  c1.1928711,1.1933594,2.7802734,1.8500977,4.4711914,1.8500977c0.0063477,0,0.012207,0,0.0185547,0  c1.6953125-0.0048828,3.2910156-0.6694336,4.4926758-1.8710938s1.8662109-2.7973633,1.8710938-4.4926758  c0.0048828-1.6977539-0.6523438-3.2924805-1.8500977-4.4897461C77.1118164,68.1083984,75.5249023,67.4521484,73.8339844,67.4521484z   M76.8701172,76.8701172c-0.8256836,0.8251953-1.9208984,1.2817383-3.0844727,1.2851562c-0.0039062,0-0.0083008,0-0.012207,0  c-1.1567383,0-2.2421875-0.4487305-3.0576172-1.2641602c-0.8183594-0.8183594-1.2670898-1.9086914-1.2636719-3.0698242  c0.0029297-1.1630859,0.4594727-2.2583008,1.2851562-3.0839844s1.9208984-1.2822266,3.0839844-1.2851562  c0.0043945,0,0.0083008,0,0.0126953,0c1.15625,0,2.2416992,0.4482422,3.0571289,1.2636719  c0.8183594,0.8183594,1.2675781,1.9086914,1.2641602,3.0698242C78.1518555,74.9492188,77.6953125,76.0444336,76.8701172,76.8701172z  "></path><path d="M56.3666992,83.6635742c0-3.4941406-2.855957-6.3369141-6.3666992-6.3369141s-6.3666992,2.8427734-6.3666992,6.3369141  S46.4892578,90,50,90S56.3666992,87.1577148,56.3666992,83.6635742z M50,88c-2.4077148,0-4.3666992-1.9453125-4.3666992-4.3364258  c0-2.3916016,1.9589844-4.3369141,4.3666992-4.3369141s4.3666992,1.9453125,4.3666992,4.3369141  C54.3666992,86.0546875,52.4077148,88,50,88z"></path><path d="M26.184082,67.4521484c-0.0058594,0-0.012207,0-0.0180664,0c-1.690918,0-3.2783203,0.65625-4.4711914,1.8496094  c-1.1977539,1.1972656-1.8549805,2.7919922-1.8500977,4.4897461c0.0048828,1.6953125,0.6694336,3.2910156,1.8710938,4.4926758  s2.7973633,1.8662109,4.4926758,1.8710938c0.0063477,0,0.012207,0,0.0185547,0c1.690918,0,3.2783203-0.6567383,4.4711914-1.8500977  c1.1977539-1.1972656,1.8544922-2.7919922,1.8496094-4.4892578c-0.0043945-1.6953125-0.6689453-3.2910156-1.8710938-4.4926758  C29.4750977,68.1210938,27.8793945,67.456543,26.184082,67.4521484z M29.2841797,76.8911133  c-0.8154297,0.8154297-1.9008789,1.2641602-3.0576172,1.2641602c-0.0039062,0-0.0083008,0-0.012207,0  c-1.1635742-0.003418-2.2587891-0.4599609-3.0844727-1.2851562c-0.8251953-0.8256836-1.2817383-1.9208984-1.2851562-3.0844727  c-0.003418-1.1611328,0.4458008-2.2514648,1.2641602-3.0698242c0.8154297-0.8154297,1.9008789-1.2636719,3.0571289-1.2636719  c0.0043945,0,0.0083008,0,0.0126953,0c1.1630859,0.0029297,2.2583008,0.4594727,3.0839844,1.2851562  s1.2822266,1.9208984,1.2851562,3.0839844C30.5512695,74.9824219,30.1025391,76.0727539,29.2841797,76.8911133z"></path><path d="M10,50c0,3.5107422,2.8422852,6.3666992,6.3364258,6.3666992S22.6733398,53.5107422,22.6733398,50  s-2.8427734-6.3666992-6.3369141-6.3666992S10,46.4892578,10,50z M20.6733398,50  c0,2.4077148-1.9453125,4.3666992-4.3369141,4.3666992C13.9453125,54.3666992,12,52.4077148,12,50  s1.9453125-4.3666992,4.3364258-4.3666992C18.7280273,45.6333008,20.6733398,47.5922852,20.6733398,50z"></path><path d="M30.6982422,21.6948242c-1.1928711-1.1933594-2.7802734-1.8500977-4.4711914-1.8500977c-0.0063477,0-0.012207,0-0.0185547,0  c-1.6953125,0.0048828-3.2910156,0.6694336-4.4926758,1.8710938s-1.8662109,2.7973633-1.8710938,4.4926758  c-0.0048828,1.6977539,0.6523438,3.2924805,1.8500977,4.4897461c1.1933594,1.1933594,2.7802734,1.8496094,4.4711914,1.8496094  c0.0058594,0,0.012207,0,0.0180664,0c1.6953125-0.0043945,3.2910156-0.6689453,4.4926758-1.8710938  c1.2021484-1.2016602,1.8666992-2.7973633,1.8710938-4.4926758C32.5527344,24.4868164,31.8959961,22.8920898,30.6982422,21.6948242z   M29.2626953,29.2626953c-0.8256836,0.8256836-1.9208984,1.2822266-3.0839844,1.2851562c-0.0043945,0-0.0083008,0-0.0126953,0  c-1.15625,0-2.2416992-0.4482422-3.0571289-1.2636719c-0.8183594-0.8183594-1.2675781-1.9086914-1.2641602-3.0698242  c0.003418-1.1635742,0.4599609-2.2587891,1.2851562-3.0844727c0.8256836-0.8251953,1.9208984-1.2817383,3.0844727-1.2851562  c0.0039062,0,0.0083008,0,0.012207,0c1.1567383,0,2.2421875,0.4487305,3.0576172,1.2641602  c0.8183594,0.8183594,1.2670898,1.9086914,1.2636719,3.0698242C30.5449219,27.3417969,30.0883789,28.4370117,29.2626953,29.2626953z  "></path><path d="M32.7509766,21.0688477c0.1831055,0.328125,0.5234375,0.5126953,0.8740234,0.5126953  c0.1650391,0,0.3320312-0.0405273,0.4863281-0.1269531c2.0742188-1.1577148,4.2802734-2.0878906,6.5556641-2.765625  c0.5292969-0.1577148,0.8310547-0.7143555,0.6733398-1.2436523c-0.1582031-0.5302734-0.7167969-0.8320312-1.2436523-0.6733398  c-2.4165039,0.7192383-4.7578125,1.7075195-6.9599609,2.9365234C32.6542969,19.9775391,32.4814453,20.5864258,32.7509766,21.0688477  z"></path><path d="M65.4521484,21.2236328c0.1513672,0.0820312,0.3144531,0.1206055,0.4750977,0.1206055  c0.3554688,0,0.699707-0.1894531,0.8803711-0.5239258c0.2626953-0.4858398,0.0820312-1.0927734-0.4033203-1.3554688  c-2.2148438-1.1987305-4.5688477-2.1557617-6.9970703-2.8452148c-0.5317383-0.1489258-1.0839844,0.1582031-1.2348633,0.6889648  c-0.1508789,0.53125,0.1577148,1.0839844,0.6889648,1.2348633C61.1484375,19.1928711,63.3662109,20.0947266,65.4521484,21.2236328z"></path><path d="M81.1860352,40.5419922c0.1293945,0.4345703,0.5273438,0.715332,0.9580078,0.715332  c0.0947266,0,0.1904297-0.0136719,0.2856445-0.0419922c0.5292969-0.1577148,0.8310547-0.7143555,0.6733398-1.2436523  c-0.7192383-2.4165039-1.7075195-4.7578125-2.9365234-6.9599609c-0.269043-0.4829102-0.8779297-0.6552734-1.3603516-0.3857422  c-0.4824219,0.269043-0.6552734,0.8779297-0.3857422,1.3603516C79.578125,36.0605469,80.5083008,38.2666016,81.1860352,40.5419922z"></path><path d="M79.5297852,66.8032227c0.3554688,0,0.699707-0.1894531,0.8803711-0.5239258  c1.1987305-2.215332,2.15625-4.5693359,2.8452148-6.9970703c0.1508789-0.53125-0.1577148-1.0839844-0.6889648-1.2348633  c-0.5307617-0.1499023-1.0834961,0.1577148-1.2348633,0.6889648c-0.6494141,2.2866211-1.5512695,4.5043945-2.6801758,6.5908203  c-0.2626953,0.4858398-0.0820312,1.0927734,0.4033203,1.3554688C79.2060547,66.7646484,79.3691406,66.8032227,79.5297852,66.8032227  z"></path><path d="M65.8886719,78.2954102c-2.0742188,1.1577148-4.2802734,2.0878906-6.5556641,2.765625  c-0.5292969,0.1577148-0.8310547,0.7143555-0.6733398,1.2436523c0.1293945,0.4345703,0.5273438,0.715332,0.9580078,0.715332  c0.0947266,0,0.1904297-0.0136719,0.2856445-0.0419922c2.4165039-0.7192383,4.7578125-1.7075195,6.9599609-2.9365234  c0.4824219-0.269043,0.6552734-0.8779297,0.3857422-1.3603516C66.9794922,78.1982422,66.3706055,78.0258789,65.8886719,78.2954102z"></path><path d="M40.5927734,83.1303711c0.0913086,0.0258789,0.1831055,0.0385742,0.2734375,0.0385742  c0.4360352,0,0.8364258-0.2875977,0.9614258-0.7275391c0.1508789-0.53125-0.1577148-1.0839844-0.6889648-1.2348633  c-2.2866211-0.6494141-4.5043945-1.5512695-6.5908203-2.6801758c-0.4863281-0.2636719-1.0927734-0.0820312-1.3554688,0.4033203  c-0.2626953,0.4858398-0.0820312,1.0927734,0.4033203,1.3554688C35.8110352,81.4838867,38.1650391,82.4414062,40.5927734,83.1303711  z"></path><path d="M21.1938477,67.1240234c0.4824219-0.269043,0.6552734-0.8779297,0.3857422-1.3603516  c-1.1577148-2.0742188-2.0878906-4.2802734-2.765625-6.5556641c-0.1582031-0.5302734-0.7172852-0.831543-1.2436523-0.6733398  c-0.5292969,0.1577148-0.8310547,0.7143555-0.6733398,1.2436523c0.7192383,2.4165039,1.7075195,4.7578125,2.9365234,6.9599609  c0.1831055,0.328125,0.5234375,0.5126953,0.8740234,0.5126953C20.8725586,67.2509766,21.0395508,67.2104492,21.1938477,67.1240234z"></path><path d="M17.4335938,41.7026367c0.0913086,0.0258789,0.1831055,0.0385742,0.2734375,0.0385742  c0.4360352,0,0.8364258-0.2875977,0.9614258-0.7275391c0.6494141-2.2866211,1.5512695-4.5043945,2.6801758-6.5908203  c0.2626953-0.4858398,0.0820312-1.0927734-0.4033203-1.3554688c-0.4858398-0.2631836-1.0927734-0.0820312-1.3554688,0.4033203  c-1.1987305,2.215332-2.15625,4.5693359-2.8452148,6.9970703C16.59375,40.9990234,16.9023438,41.5517578,17.4335938,41.7026367z"></path></svg>
                                <h4 className="font-bold century text-xl"><span className="font-bold">Référencement Payant</span></h4>
                                <p className="text-md">Création de <strong>campagnes Google Adwords</strong> et stratégies de retour sur investissement.</p>
                                <Button url="/agence-adwords-47-31/" text="Agence Adwords Agen" size="md" position="center"/>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform justify-center px-2 mb-10 mx-auto lg:mx-4 century text-center border-bleu border-solid border py-4">
                                <svg width="50px" className="mx-auto block" fill="#37cfee" viewBox="0 0 140 175"><g><g><g><g><path d="M107.4882812,28.375h-21.375c-0.5527344,0-1-0.4477539-1-1V6c0-0.404541,0.2431641-0.769043,0.6171875-0.9238281      c0.375-0.1540527,0.8046875-0.0695801,1.0898438,0.2167969l21.375,21.375      c0.2861328,0.2858887,0.3720703,0.7160645,0.2167969,1.0895996C108.2578125,28.1313477,107.8925781,28.375,107.4882812,28.375z       M87.1132812,26.375h17.9609375L87.1132812,8.4143066V26.375z" /></g><g><path d="M107.4882812,135H6.5585938c-0.5527344,0-1-0.4477539-1-1V6c0-0.5522461,0.4472656-1,1-1h79.5595703      c0.265625,0,0.5195312,0.1054688,0.7070312,0.2929688l21.3701172,21.3701172      c0.1875,0.1875,0.2929688,0.4418945,0.2929688,0.7070312v19.9699707c0,0.5522461-0.4472656,1-1,1s-1-0.4477539-1-1V27.7844238      L85.7041016,7H7.5585938v126h98.9296875V86.2600098c0-0.5522461,0.4472656-1,1-1s1,0.4477539,1,1V134      C108.4882812,134.5522461,108.0410156,135,107.4882812,135z" /></g></g><g><g><path d="M75.6171875,124.7570801c-0.1679688,0-0.3359375-0.0422363-0.4882812-0.1274414      c-0.3349609-0.1872559-0.5332031-0.5500488-0.5097656-0.9331055l1.3242188-21.826416      c0.0087891-0.1501465,0.0517578-0.2963867,0.125-0.4277344l39.9150391-71.3278809      c0.1953125-0.347168,0.5869141-0.5471191,0.9726562-0.5065918c7.1279297,0.715332,12.9423828,3.9689941,17.28125,9.670166      c0.2412109,0.3168945,0.2714844,0.746582,0.0771484,1.0939941l-39.9150391,71.3278809      c-0.0742188,0.1313477-0.1757812,0.2443848-0.2988281,0.3308105l-17.9091797,12.5454102      C76.0195312,124.6962891,75.8183594,124.7570801,75.6171875,124.7570801z M77.9257812,102.2194824l-1.1845703,19.529541      l16.0244141-11.2250977l39.4785156-70.548584c-3.8085938-4.7553711-8.7949219-7.5456543-14.8398438-8.3044434      L77.9257812,102.2194824z M93.5263672,111.2116699h0.0097656H93.5263672z" /></g><g><path d="M93.5253906,112.2116699c-0.1650391,0-0.3330078-0.0412598-0.4873047-0.1276855      c-1.0625-0.5947266-1.2998047-1.5097656-1.4570312-2.1149902c-0.1337891-0.5161133-0.1962891-0.7033691-0.4990234-0.8728027      c-0.3037109-0.1704102-0.4951172-0.1240234-1.0029297,0.0314941c-0.5986328,0.1835938-1.5029297,0.4599609-2.5654297-0.1352539      c-1.0634766-0.5949707-1.3007812-1.510498-1.4580078-2.1162109c-0.1337891-0.515625-0.1953125-0.7026367-0.4970703-0.8718262      c-0.3017578-0.168457-0.4921875-0.125-1.0048828,0.0319824c-0.5986328,0.1828613-1.5029297,0.4592285-2.5654297-0.1359863      c-1.0634766-0.5949707-1.3017578-1.5102539-1.4599609-2.1159668c-0.1347656-0.5168457-0.1962891-0.7043457-0.5009766-0.8745117      c-0.3046875-0.1706543-0.4960938-0.125-1.0068359,0.0305176c-0.6005859,0.1821289-1.5029297,0.458252-2.5673828-0.1374512      c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2705078-0.4816895,0.8789062-0.6552734,1.3613281-0.3842773      c0.3056641,0.1706543,0.4970703,0.1252441,1.0068359-0.0307617c0.5996094-0.182373,1.5019531-0.4584961,2.5673828,0.1374512      c1.0634766,0.5949707,1.3017578,1.5102539,1.4599609,2.1159668c0.1347656,0.5168457,0.1962891,0.7043457,0.5009766,0.8745117      c0.3027344,0.1699219,0.4951172,0.1237793,1.0039062-0.0314941c0.5996094-0.1826172,1.5039062-0.458252,2.5664062,0.135498      c1.0634766,0.5952148,1.2998047,1.5102539,1.4570312,2.1157227c0.1337891,0.5158691,0.1953125,0.7028809,0.4980469,0.8723145      c0.3027344,0.1696777,0.4941406,0.1245117,1.0029297-0.0317383c0.5996094-0.1826172,1.5039062-0.4592285,2.5654297,0.135498      c1.0634766,0.5947266,1.3007812,1.5100098,1.4580078,2.1157227c0.1337891,0.5158691,0.1953125,0.7028809,0.4980469,0.8723145      c0.4824219,0.2697754,0.6542969,0.8791504,0.3847656,1.361084      C94.2158203,112.0273438,93.8759766,112.2116699,93.5253906,112.2116699z" /></g><g><g><path d="M86.0400391,106.1291504c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855       c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398l32.2480469-57.6271973       c0.2705078-0.4819336,0.8789062-0.6555176,1.3613281-0.3842773c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398       l-32.2480469,57.6271973C86.7304688,105.9445801,86.390625,106.1291504,86.0400391,106.1291504z" /></g></g><g><path d="M81.2548828,120.8110352c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855l-5.2207031-2.9213867      c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2705078-0.4816895,0.8779297-0.6550293,1.3613281-0.3842773      l5.2207031,2.9213867c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398      C81.9453125,120.6264648,81.6054688,120.8110352,81.2548828,120.8110352z" /></g></g><g><g><path d="M61.0966797,89.505127h-8.1464844c-0.4931641,0-0.9121094-0.3591309-0.9882812-0.8461914l-1.1542969-7.4187012      c-1.6474609-0.4711914-3.2314453-1.1269531-4.7236328-1.9555664l-6.0615234,4.4284668      c-0.3974609,0.2907715-0.9492188,0.2485352-1.296875-0.1003418l-5.7607422-5.7607422      c-0.3486328-0.3483887-0.3916016-0.8989258-0.1005859-1.296875l4.4287109-6.0617676      C36.4638672,69,35.8076172,67.4160156,35.3369141,65.7700195l-7.4179688-1.1547852      c-0.4873047-0.0756836-0.8466797-0.4951172-0.8466797-0.9880371v-8.1467285c0-0.4929199,0.359375-0.9123535,0.8457031-0.9880371      l7.4189453-1.1550293c0.4707031-1.6459961,1.1269531-3.2297363,1.9560547-4.7233887l-4.4287109-6.0617676      c-0.2910156-0.3979492-0.2480469-0.9484863,0.1005859-1.296875l5.7607422-5.7602539      c0.3486328-0.3493652,0.8994141-0.3903809,1.296875-0.1003418l6.0615234,4.4282227      c1.4921875-0.8288574,3.0761719-1.4846191,4.7236328-1.9558105l1.1542969-7.4182129      c0.0761719-0.4870605,0.4951172-0.8461914,0.9882812-0.8461914h8.1464844c0.4931641,0,0.9121094,0.3591309,0.9882812,0.8461914      l1.1542969,7.4182129c1.6474609,0.4709473,3.2304688,1.126709,4.7236328,1.9558105l6.0625-4.4284668      c0.3974609-0.2907715,0.9482422-0.248291,1.296875,0.1003418l5.7597656,5.760498      c0.3486328,0.3483887,0.3916016,0.8989258,0.1005859,1.296875l-4.4287109,6.0617676      c0.8291016,1.4916992,1.484375,3.0754395,1.9560547,4.7236328l7.4179688,1.1547852      c0.4873047,0.0756836,0.8466797,0.4951172,0.8466797,0.9880371v8.1467285c0,0.4929199-0.359375,0.9123535-0.8457031,0.9880371      l-7.4189453,1.1550293c-0.4707031,1.6459961-1.1269531,3.2299805-1.9560547,4.7233887l4.4287109,6.0615234      c0.2910156,0.3979492,0.2480469,0.9482422-0.1005859,1.296875l-5.7597656,5.7607422      c-0.3486328,0.348877-0.8994141,0.3911133-1.296875,0.1003418l-6.0625-4.4284668      c-1.4921875,0.8288574-3.0761719,1.4846191-4.7236328,1.9558105l-1.1542969,7.418457      C62.0087891,89.1459961,61.5898438,89.505127,61.0966797,89.505127z M53.8066406,87.505127h6.4335938l1.1230469-7.2143555      c0.0615234-0.395752,0.3535156-0.7165527,0.7412109-0.8151855c1.9082031-0.4855957,3.7285156-1.239502,5.4121094-2.2412109      c0.3447266-0.2043457,0.7783203-0.1845703,1.1015625,0.052002l5.8955078,4.3066406L79.0625,77.043457l-4.3066406-5.8947754      c-0.2363281-0.3234863-0.2568359-0.7565918-0.0517578-1.1008301c1.0019531-1.6850586,1.7558594-3.5061035,2.2412109-5.4123535      c0.0986328-0.3881836,0.4189453-0.6799316,0.8144531-0.7414551l7.2148438-1.123291v-6.4338379l-7.2138672-1.1230469      c-0.3964844-0.0615234-0.7167969-0.3532715-0.8154297-0.7414551c-0.4863281-1.9089355-1.2402344-3.7297363-2.2412109-5.4118652      c-0.2050781-0.3442383-0.1845703-0.777832,0.0517578-1.1013184L79.0625,42.0639648l-4.5488281-4.5493164l-5.8955078,4.3066406      c-0.3232422,0.2365723-0.7578125,0.2565918-1.1015625,0.052002c-1.6845703-1.0021973-3.5048828-1.7561035-5.4111328-2.2409668      c-0.3886719-0.098877-0.6806641-0.4196777-0.7421875-0.8154297l-1.1230469-7.2141113h-6.4335938l-1.1230469,7.2141113      c-0.0615234,0.395752-0.3535156,0.7165527-0.7412109,0.8154297c-1.9082031,0.4853516-3.7285156,1.2392578-5.4121094,2.2409668      c-0.34375,0.204834-0.7783203,0.1848145-1.1015625-0.052002l-5.8945312-4.3063965l-4.5498047,4.5490723l4.3066406,5.8950195      c0.2363281,0.3234863,0.2568359,0.7565918,0.0517578,1.1008301c-1.0019531,1.6853027-1.7558594,3.5063477-2.2412109,5.4123535      c-0.0986328,0.3881836-0.4189453,0.6799316-0.8144531,0.7414551l-7.2148438,1.123291v6.4338379l7.2138672,1.1230469      c0.3964844,0.0615234,0.7167969,0.3532715,0.8154297,0.7414551c0.4853516,1.90625,1.2392578,3.7272949,2.2412109,5.4121094      c0.2050781,0.3444824,0.1845703,0.7775879-0.0517578,1.1010742L34.984375,77.043457l4.5498047,4.5495605l5.8945312-4.3066406      c0.3232422-0.2368164,0.7578125-0.2565918,1.1015625-0.052002c1.6826172,1.0012207,3.5039062,1.7553711,5.4121094,2.2412109      c0.3876953,0.0986328,0.6796875,0.4194336,0.7412109,0.8151855L53.8066406,87.505127z M85.9746094,63.6271973h0.0097656      H85.9746094z" /></g><g><path d="M57.0234375,72.3076172c-7.0322266,0-12.7539062-5.7214355-12.7539062-12.7539062      s5.7216797-12.7536621,12.7539062-12.7536621s12.7539062,5.7211914,12.7539062,12.7536621      S64.0556641,72.3076172,57.0234375,72.3076172z M57.0234375,48.8000488      c-5.9296875,0-10.7539062,4.8239746-10.7539062,10.7536621S51.09375,70.3076172,57.0234375,70.3076172      s10.7539062-4.8242188,10.7539062-10.7539062S62.953125,48.8000488,57.0234375,48.8000488z" /></g></g></g><g><path d="M126.5810547,53.1425781c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855l-16.5859375-9.2810059    c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2695312-0.4816895,0.8779297-0.6550293,1.3613281-0.3842773    l16.5859375,9.2810059c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398    C127.2714844,52.9580078,126.9316406,53.1425781,126.5810547,53.1425781z" /></g></g></svg>
                                <h4 className="font-bold century text-xl"><span className="font-bold">Formation SEO</span></h4>
                                <p className="text-md">Formation qualifiante dans divers secteurs du <strong>webmarketing</strong>.</p>
                                <Button url="/formation-referencement/referencement-naturel-google-seo/" text="Formation SEO" size="md" position="center"/>
                            </div>
                        </div>
                        </section>
                    </section>
                    <section className="text-center flex flex-col justify-center items-center text-black text-2xl mx-auto lg:mx-0 century mt-6 mb-24" style={{zIndex:'100'}}>
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Retrouvez-nous partout en France</h2>
                    <br/>
                    <hr className="border-solid w-1/6 border-bleu"></hr>
                    <br/>
                    <ul className="flex flex-col md:flex-row">
                        <li><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold px-4">Agence SEO Toulouse</Link></li>
                        <li><Link to="/agence-seo-lyon/" className="text-bleu hover:text-black font-bold px-4">Agence SEO Lyon</Link></li>
                    </ul>
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

                
                <section className="w-full bg-black flex flex-col md:flex-row">
                    <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                    </div>
                    <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Vous souhaitez développer votre référencement à Toulouse ?</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Linkweb conduit votre <strong>stratégie de référencement à Toulouse en Haute-Garonne</strong>, de sa définition jusqu'à sa mise en place. Notre équipe vous accompagne durant chaque étape de votre projet pour répondre à vos objectifs.</p>
                            <div className="max-w-xs ml-auto mr-auto md:mr-0 md:ml-0 block">
                                <RoundButton url="/referencement-toulouse/" color="darkgrey" text="RÉFÉRENCEMENT TOULOUSE" />
                            </div>
                        </div>

                    </div>
                </section>
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
                {/* <section className="flex w-full flex-col mx-auto px-0 py-6 my-4 lg:my-0">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10 lg:mb-2">
                        <h2 className="century text-3xl md:text-5xl text-black leading-none">Les dernières actualités</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>

                    </section>
                </section>
                <section className="max-w-6xl mx-auto flex flex-col align-center flex flex-col justify-center items-center justify-center text-center mt-12 mb-3">
                    <LastPosts lastposts={this.props.data.allWpPost.edges} />
                    <div className="w-2/5 flex flex-row justify-center items-center">
                        <RoundButton url="/actualite-digitale/" text="Accéder au Blog" />
                    </div>
                    <br />
                </section>
                <SimpleMap /> */}
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsRefAgen {
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
export default ReferencementAgen;
