import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RoundButtonPages from "../components/roundButtonPages";
import RoundButtonPagesMail from "../components/roundButtonPagesMail";
import Accordion from '../components/accordion';
import googlePartner from "../images/PartnerBadge-RGB.png";
import "../scss/global.scss";
import "../scss/info.scss";

import Bg from "../images/background-agence-adwords-toulouse.jpg";
import imac from "../images/campagnes-adwords-toulouse.jpg";
import mac from "../images/cta-background-agence-web.jpg";
import lious from "../images/lious-compagnie.png";
import valognes from "../images/valognes-menuiserie.png";
import savi from "../images/savi.png";

// import bgDev from '../images/bg-dev.jpg';
import bgDev from '../images/cta-background-agence-web.jpg';
import scroll from "../images/motiontest.svg";

class ReferencementAds extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Adwords Toulouse - Gestion Campagne Adwords - Linkweb"
                    description="Agence Adwords à Toulouse : gestion de votre campagne Google Ads, étude des mots-clés, prévision et budgétisation."
                    keywords={[`Agence Adwords Agen`, `Agence Adwords Toulouse`, `Campagne Adwords Agen`, `Campagne Adwords Toulouse`]}
                    url="https://linkweb.fr/agence-adwords-47-31/"
                    nom="Référencement Ads"
                    slug="agence-adwords-47-31/"
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
                                    {/*<img  src={googlePartner} alt="Référencement Toulouse" style={{ width: '200px' }} />*/}
            
                                <div className="w-full lg:w-full flex justify-center lg:justify-center">
                                <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Agence Adwords Toulouse <span className="text-bleu">/</span> Agen</h1>
                                </div>
                                <br/>
                                <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Création de campagnes Adwords à Toulouse et Agen.</h2>
                                {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                                <div className="w-full lg:w-full flex flex-col lg:flex-row justify-center pb-24 lg:justify-center mx-auto" style={{maxWidth:'460px'}}>
                                    <RoundButtonPages url="tel:0533950030" text="05 33 95 00 30"/>
                                    <RoundButtonPagesMail url="/contact-agence-web-toulouse/" text="Demander un devis"/>
                                </div>
                            </div>
                            <div className="w-full flex items-end justify-center mx-auto block pb-16 mt-16">
                                <img src={scroll} alt="Scroll" width="60px"/>
                            </div>
                            
                    </section>
                    <div className="max-w-6xl mx-auto flex align-center justify-center text-center">
                                <img src={googlePartner} alt="Google Partner" style={{ width: '175px', marginBottom:'-40px', marginTop:'-30px' }} />
                        </div>
                    <section className="phototext">
                        <section className="text-center text-black text-2xl mx-auto flex-col flex items-center lg:mx-0 century mt-16 mb-10">
                            <h2 className="century text-black leading-none">Création et gestion de votre campagne de <br/><span className="text-5xl lg:text-6xl text-bleu font-bold">RÉFÉRENCEMENT WEB PAYANT</span></h2>
                            <br/>
                            <hr className="border-solid w-1/6 border-white"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="text-xl max-w-5xl text-center century text-black px-4 pb-0">Nos experts vous accompagnent dans votre projet d’acquisition  de visibilité en référencement naturel SEO, comme en référencement payant.</h3>
                        </section>
                    
                    <section className="w-full my-10 flex flex-col lg:flex-row items-center justify-start">
                            <div className="w-full flex justify-center items-center lg:w-5/12">
                                <img className="w-full" src={mac} alt="Linkweb"/>
                            </div>
                            <div className="w-full lg:w-1/2 my-10  flex flex-col">
                                <div className="w-full flex-col md:flex-row flex px-auto century">
                                    <div className="blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                        <p>1</p>
                                    </div>
                                    <div className="w-full px-6 lg:px-6 flex flex-col century justify-center" style={{maxWidth:'1000px'}}>
                                            <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                                <span className="text-bleu">/</span>SÉLECTION DES MOTS-CLÉS
                                            </h3>
                                            
                                            <h4 className="font-bold">Le choix des mots-clés est une étape fondamentale de la définition d’un projet de référencement. En SEO (*) comme en SEA (**), cela détermine les opportunités à saisir sur votre marché.</h4>
                                            <br/>
                                            <p className="w-full century pb-4 text-justify">Le choix des expressions est une étape qui permet de <strong>cibler de manière pertinente les requêtes les plus opportunes sur votre marché</strong>. Apparaissez sur des <strong>termes de recherches</strong> sur lesquels vous n'êtes pas <strong>visible en SEO</strong>. Nous disposons de tous les outils nécessaires pour détecter les meilleures opportunités pour vous.
                                            </p>
                                            <p className="font-bold">(*) <strong>Search Engine Optimization</strong>
                                                (**) <strong>Search Engine Advertising</strong></p>
                                            {/*<Button url="/referencement-de-site-internet-47-31/" text="Notre formule SEO" position="left" />*/}
                                            <br/>
                                    </div>
                                    </div>
                                    <div className="w-full flex-col md:flex-row flex px-auto">
                                        <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                            <p>2</p>
                                        </div>
                                        <div className="w-full px-12 lg:px-6 flex flex-col century justify-center">
                                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                                    <span className="text-bleu">/</span>PARAMÉTRAGE DE CAMPAGNE ADWORDS
                                                </h3>
                                                
                                                <h4 className="font-bold">Nous paramétrons vos campagnes Google Ads à partir d’un arbitrage lié aux choix de vos mots-clés, mais également à votre budget, votre ciblage géographique ainsi qu’à la temporalité.</h4>
                                                <br/>
                                                <p className="w-full century pb-4 text-justify">Les <strong>options de ciblage de Google Ads</strong> permettent d’<strong>optimiser votre visibilité auprès de prospects pertinents</strong> pour vous. Nous configurons <strong>votre campagne</strong> à partir de vos besoins pour déterminer votre <strong>coeur de cible</strong> et répondre à vos <strong>objectifs en fonction de votre budget</strong>.
                                                </p>
                                                <br/>
                                        </div>
                                    </div>
                                    <div className="w-full flex-col md:flex-row flex px-auto">
                                        <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                            <p>3</p>
                                        </div>
                                        <div className="w-full px-12 lg:px-6 flex flex-col century justify-center">
                                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                                    <span className="text-bleu">/</span>PRÉVISION & BUDGÉTISATION
                                                </h3>
                                                
                                                <h4 className="font-bold">Nous utilisons des outils de prévisions de trafic pour estimer votre budget publicitaire à ainsi que votre retour sur investissement (ROI).</h4>
                                                <br/>
                                                <p className="century pb-4 text-justify">Nous nous basons sur les estimations définies par nos <strong>outils professionnels</strong> afin de déterminer les meilleures opérations à réaliser et fixer des <strong>objectifs cohérents avec votre budget</strong>. Nous analysons les possibilités du marché afin d'<strong>établir le possible ROI</strong> en vue d'atteindre vos objectifs.
                                                </p>
                                                <br/>
                                                {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                        </div>
                                    </div>
                                    <div className="w-full flex-col md:flex-row flex px-auto">
                                        <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                            <p>4</p>
                                        </div>
                                        <div className="w-full px-12 lg:px-6 flex flex-col justify-center century">
                                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                                    <span className="text-bleu">/</span>CONFIGURATION DE GROUPES D'ANNONCES
                                                </h3>
                                                
                                                <h4 className="font-bold">Une fois le cadrage de votre plan de publication effectué, nous définissons la structure de vos différents groupes d’annonces. Le classement des annonceurs dans les pages de résultats de recherche est déterminé à partir de critères de qualité.</h4>
                                                <br/>
                                                <p className="century pb-4 text-justify">La <strong>mise en concurrence</strong> entre les différents <strong>annonceurs</strong> est à la base du <strong>système d’annonces de Google Ads</strong>. Nous tâchons d’optimiser votre <strong>fréquence d’apparition</strong> en travaillant au mieux la <strong>qualité de chaque annonce</strong>. Une <strong>annonce de qualité</strong> pourra obtenir une meilleure mise en avant, un <strong>coût par clic</strong> plus bas et un <strong>meilleur CTR (Taux de Clics)</strong>.
                                                </p>
                                                {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section className="bg-black">
                            <section className="sidetitle w-10/12 text-center text-white text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto bg-black">
                                <h2 className="century text-center lg:text-left text-white text-3xl md:text-5xl leading-none">Optimisez votre retour sur investissement</h2>
                                <br/>
                                <div className="line-title my-4">
                                    <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                                    <br/>
                                    <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-white text-center lg:text-justify century pb-0">Vous êtes un challenge, nous sommes votre plus-value.</h3>
                                </div>
                            </section>
                            <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24 bg-black">
                            <div className="w-full xl:w-1/3 one px-auto">
                                <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                                <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                    <h3 className="century capitalize text-white text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE DÉCOUVRE LE RÉFÉRENCEMENT ADS
                                    </h3>
                                    <div className="century text-white content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                        La <strong>publicité en ligne</strong> est une science à part entière dans le <strong>référencement</strong>. Il permet de <strong>maximiser la présence de votre site internet</strong> dans les <strong>pages de résultats</strong> aux moments les plus opportuns. Néanmoins, votre budget doit être maitrisé et déterminé en fonction des meilleures opportunités présentes sur votre marché.
                                    </div>
                                    <Button url="/contact-agence-web-toulouse/" color="white" text="DEMANDEZ UN DEVIS" position="center" />
                    
                                </section>
                                </div>
                            </div>
                            <div className="w-full xl:w-1/3 two px-auto">
                                <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
                                <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                    <h3 className="century capitalize text-white text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE VEUX ÊTRE ACCOMPAGNÉ PAR UN GESTIONNAIRE DE COMPTE ADWORDS
                                    </h3>
                                    <div className="century text-white content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                    <strong>Coût au clic (CPC)</strong> visé, définition du <strong>budget</strong>, augmentation de la <strong>qualité de ses annonces</strong> : se lancer dans une <strong>stratégie de référencement Google Adwords</strong> doit répondre à des objectifs clairs et précis. Nous vous accompagnons pour <strong>définir votre projet</strong>, vos <strong>objectifs</strong>, ainsi que vos <strong>cibles</strong>.
                                    </div>
                                    <Button url="/contact-agence-web-toulouse/" color="white" text="PRENDRE CONTACT" position="center" />
                                </section>
                                </div>
                                </div>
                            <div className="w-full xl:w-1/3 three px-auto">
                                <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
                                <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                    <h3 className="century capitalize text-white text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE SOUHAITE APPARAÎTRE DANS LES LIENS SPONSORISÉS
                                    </h3>
                                    <div className="century text-white content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                        En tant que <strong>professionnels du référencement</strong>, nous vous accompagnons afin de <strong>mener vos campagnes Google Adwords</strong> dans le but d’<strong>obtenir un retour sur investissement</strong>. Pour ce faire, nous mettons tout en oeuvre et mobilisons toutes les données nécessaires pour <strong>atteindre vos objectifs</strong>.
                                    </div>
                                    <Button url="/contact-agence-web-toulouse/" color="white" text="PRENDRE RENDEZ-VOUS" position="center" />
                                </section>
                                
                                </div>
                    
                            </div>
                        </section>
                    </section>
                    <section className="flex w-full flex-col mx-auto px-0 py-6 my-4">
                        <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10">
                            <h3 className="century text-3xl md:text-5xl text-black leading-none">Agence Adwords à Toulouse : Vous êtes ROI <span className="text-bleu">(***)</span></h3>
                            <span className="text-bleu text-lg text-center century">(***) Return on Investment pour <strong>Retour sur investissement</strong></span>
                            <br/>
                            <br/>
                            <hr className="border-solid w-1/6 border-bleu"></hr>
                        </section>
                    </section>
                    <section className="bloctextimg w-full md:w-10/12 mx-auto lg:block lg:mx-auto xl:w-full flex flex-col lg:flex-row justify-center">
                        <div className="w-full image lg:w-1/2 xl:w-2/5 lg:absolute flex justify-center lg:mt-48 xl:mt-24 pr-0 md:pr-16 lg:justify-center lg:items-center">
                            <img src={imac} alt="Référencement Toulouse" style={{ maxHeight: '450px' }} />
                        </div>
                        <div className="text century w-full text-justify mr-16 lg:w-3/5 xl:w-2/5 md:p-20 lg:pl-32 p-10 lg:py-10 text-black text-sm xl:text-md" style={{ backgroundColor: '#37cfee'}}>
                            <h4 className="font-bold text-xl">Le référencement payant doit être une source de retour sur investissement, mais encore faut-il savoir l’utiliser à bon escient.</h4>
                            <br/>
                            <p style={{fontSize:'16px'}}>
                                Le <strong>référencement Google Ads</strong> se différencie du <strong>référencement naturel</strong>. En effet, les motivations à se lancer dans du <strong>naturel</strong> ou du <strong>sponsorisé</strong> vont être différentes. Le <strong>référencement naturel</strong> permet de <strong>générer du trafic</strong> pour <strong>faire connaître ses services</strong> ou <strong>développer sa notoriété</strong> grâce aux <strong>moteurs de recherche</strong>. Le <strong>référencement payant</strong> va plus loin puisqu’il vise la <strong>conversion</strong>. En maximisant <strong>votre taux de conversion</strong>, vous diminuez votre <strong>coût de conversion</strong> et êtes en mesure de <strong>générer un meilleur retour sur investissement</strong>.<br/>
                            <br/>
                                Pour cela, notre agence vous permet de <strong>bénéficier de son expertise</strong> dans la conduite de <strong>campagnes publicitaires</strong> menées à travers une <strong>stratégie d’enchères</strong> performante. L’<strong>optimisation de votre publicité sur les moteurs</strong> est indispensable pour <strong>générer des clics pertinents vers votre site</strong>.<br/>
                            <br/>
                                Le <strong>référencement payant</strong>, c’est l’acquisition de méthodes rentables pour <strong>mener sa stratégie Adwords</strong>, afin d’activer tous les <strong>leviers de la publicité en ligne et du web marketing</strong>. C’est pourquoi, nous effectuons toutes les <strong>optimisations nécessaires</strong> en vue de maximiser vos performances grâce à la <strong>création de landing page sur-mesure</strong> et à une <strong>communication web</strong> adaptée.<br/>
                            </p>
                        </div>
                        
                        <br />
                    </section>
                    <section className="bg-black sidetitle mt-24 py-10">
                        <section className="w-full lg:w-2/3 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
                            <h2 className="century text-center lg:text-left text-white text-3xl md:text-5xl leading-none">Notre agence à Toulouse gère votre compte Google</h2>
                            <br/>
                            <div className="line-title my-4 ">
                                <br/>
                                <hr className="w-1/2 border-bleu lg:w-1/12"/>
                                <br/>
                                <h3 /*data-aos='fade-left'*/ className="text-xl text-white century pb-0">En plus du SEO, notre agence web vous permet d’être visible dans les publicités proposées par les SERP, directement grâce au SEA.</h3>
                            </div>
                        </section>
                        <section className="flex justify-center flex-col items-center">
                            <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 text-white century text-center lg:text-left">
                                    <br/>
                                <svg width="50px" className="lg:mx-0 mx-auto block" fill="#ffffff" viewBox="0 0 800 227.5"><g><path class="fil0" d="M33 0l734 0c18,0 33,15 33,33l0 117c0,17 -15,32 -33,32l-734 0c-18,0 -33,-15 -33,-32l0 -117c0,-18 15,-33 33,-33zm150 17l0 148 584 0c9,0 16,-7 16,-15l0 -117c0,-9 -7,-16 -16,-16l-584 0zm-17 148l0 -148 -133 0c-9,0 -16,7 -16,16l0 117c0,8 7,15 16,15l133 0z"/><path class="fil0" d="M75 46c-18,3 -31,20 -28,39 3,18 20,31 39,28 19,-3 31,-20 28,-39 -3,-18 -20,-31 -39,-28zm46 65l28 34c4,5 -9,16 -14,11l-27 -33c-6,3 -12,6 -19,7 -29,4 -54,-14 -59,-43 -4,-28 15,-54 43,-58 28,-4 54,14 58,43 2,14 -1,27 -10,39z"/></g></svg>
                                    <h4 className="font-bold century text-bleu"><span className="font-bold">Réseau de recherche</span></h4>
                                    <p className="font-bold">Il permet le développement de sa marque directement sur les outils proposés au sein de l’<strong>écosystème de Google</strong>.</p>
                                    <br/>
                                    <p>Un <strong>consultant à Toulouse ou Agen</strong> est chargé de définir la solution la plus pertinente pour vous. Nous engageons votre <strong>développement sur Maps, Shopping ou Groupes</strong>.</p>
                                </div>
                                <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="mx-auto md:mx-0 block" viewBox="0 0 2000 2500" fill="#ffffff"><g><g><path d="M637.697,458.758c-48.37,0-87.721,39.352-87.721,87.722c0,48.369,39.352,87.721,87.721,87.721    c48.369,0,87.721-39.352,87.721-87.721C725.418,498.109,686.066,458.758,637.697,458.758z"/><path d="M1281.883,634.2c48.369,0,87.721-39.352,87.721-87.721c0-48.37-39.352-87.722-87.721-87.722    c-48.37,0-87.722,39.352-87.722,87.722C1194.161,594.849,1233.513,634.2,1281.883,634.2z"/><path d="M1674.336,851.213c-48.37,0-87.722,39.352-87.722,87.721s39.352,87.721,87.722,87.721    c48.369,0,87.721-39.352,87.721-87.721S1722.705,851.213,1674.336,851.213z"/><path d="M1282.761,1242.788c-48.37,0-87.722,39.352-87.722,87.721s39.352,87.721,87.722,87.721    c48.369,0,87.721-39.352,87.721-87.721S1331.13,1242.788,1282.761,1242.788z"/><path d="M325.665,1365.801c-48.37,0-87.722,39.352-87.722,87.721s39.352,87.721,87.722,87.721    c48.369,0,87.721-39.352,87.721-87.721S374.034,1365.801,325.665,1365.801z"/><path d="M825.426,934.934c-48.37,0-87.722,39.352-87.722,87.721s39.352,87.721,87.722,87.721    c48.369,0,87.721-39.352,87.721-87.721S873.795,934.934,825.426,934.934z"/></g><path d="M1677.164,936.105L1284.711,543.65l-2.828,2.829v-4H637.697v4l0,0l-3.783-1.302l-312.032,907.043l3.782,1.301l0,0   l0.51,3.968l957.096-123.013l-0.51-3.968l2.828,2.828l391.575-391.575l-2.828-2.828L1677.164,936.105z M1006.309,1000.796   L835.8,1017.612L935,914.126L1006.309,1000.796z M1015.891,999.852l-75.315-91.541l170.835-178.215l166.749,63.129l0.202,180.741   L1015.891,999.852z M935.457,902.09L650.331,555.539l452.948,171.479L935.457,902.09z M929.882,907.905l-103.025,107.476   L650.718,568.602L929.882,907.905z M836.882,1025.544l175.544-17.313l112.07,136.213l-70.832,27.026L836.882,1025.544z    M1132.381,1141.437l-110.373-134.15l256.362-25.282l0.116,103.686L1132.381,1141.437z M820.663,1021.479l-486.401,419.35   l303.691-882.796L820.663,1021.479z M825.725,1027.678l218.796,147.281l-698.958,266.689L825.725,1027.678z M1061.783,1176.936   l68.074-25.974l132.402,160.925L1061.783,1176.936z M1137.742,1147.953l140.754-53.705l0.252,225.089L1137.742,1147.953z    M1286.483,1082.639l-0.113-101.424l358.628-35.369L1286.483,1082.639z M1286.36,973.177l-0.197-176.922l370.787,140.374   L1286.36,973.177z M1286.153,787.696l-0.26-231.55l372.457,372.458L1286.153,787.696z M1278.149,784.667l-160.723-60.848   l160.467-167.398L1278.149,784.667z M1109.295,720.741L659.56,550.479h612.947L1109.295,720.741z M358.526,1445.265l694.113-264.84   l219.076,147.471L358.526,1445.265z M1286.493,1091.197l371.774-141.852l-371.518,371.518L1286.493,1091.197z"/></g></svg>                    
                                    <h4 className="font-bold century -mt-4 text-bleu"><span className="font-bold">Réseau Display</span></h4>
                                    <p className="font-bold">Il permet de propulser votre marque sur un réseau aussi riche que les <strong>sites de Google</strong> et ses partenaires.</p>
                                    <br/>
                                    <p>D’un point de vue <strong>marketing</strong>, se faire une place sur des plateformes telles que <strong>Youtube, Blogger ou Gmail</strong> est un sacré atout en termes de ciblage. </p>
                                </div>
                                <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg viewBox="0 0 28 35" width="30px" className="mx-auto md:ml-0 block"><g fill="#ffffff" ><g><path d="M25.63,8.16 C25.3791233,8.2736063 25.2673479,8.56869337 25.38,8.82 C27.9835268,14.4995076 26.0128726,21.2291511 20.7570105,24.607179 C15.5011485,27.9852068 8.56093161,26.9827248 4.47584423,22.2554403 C0.390756842,17.5281557 0.405052352,10.5159253 4.50938029,5.80533611 C8.61370823,1.09474697 15.5579549,0.120570547 20.8,3.52 L20.23,4.09 C20.1366875,4.18292491 20.082937,4.30834272 20.08,4.44 L20.08,7.21 L19.64,7.65 C16.6439961,4.99569867 12.201052,4.79450437 8.97740753,7.1671551 C5.75376307,9.53980583 4.62518012,13.8417277 6.26892868,17.4913093 C7.91267724,21.1408909 11.882203,23.1466567 15.7953676,22.3049336 C19.7085322,21.4632105 22.5022531,18.0026679 22.5,14 C22.5060564,12.6917472 22.2046221,11.4003755 21.62,10.23 C21.5479513,10.0569807 21.3851924,9.93878386 21.1983704,9.92380916 C21.0115484,9.90883447 20.8320405,9.99959693 20.733352,10.1589308 C20.6346636,10.3182647 20.6333696,10.5194096 20.73,10.68 C22.4788666,14.1666095 21.2961553,18.4112488 17.9962719,20.4910925 C14.6963885,22.5709362 10.3568052,21.8068773 7.96572517,18.7250408 C5.57464511,15.6432043 5.91279959,11.2498661 8.74733809,8.57024454 C11.5818766,5.89062297 15.9872705,5.79966346 18.93,8.36 L16.09,11.21 C14.7906587,10.2456333 12.9988445,10.3008705 11.7613722,11.3434409 C10.5238998,12.3860114 10.1653515,14.1424545 10.8951986,15.58662 C11.6250458,17.0307856 13.2518533,17.7838768 14.8252069,17.4059224 C16.3985604,17.0279679 17.5057779,15.6181031 17.5,14 C17.5,13.7238576 17.2761424,13.5 17,13.5 C16.7238576,13.5 16.5,13.7238576 16.5,14 C16.5,15.3807119 15.3807119,16.5 14,16.5 C12.6192881,16.5 11.5,15.3807119 11.5,14 C11.5,12.6192881 12.6192881,11.5 14,11.5 C14.4897484,11.5018497 14.9686885,11.6441435 15.38,11.91 L13.65,13.65 C13.5533228,13.7407333 13.4984814,13.8674141 13.4984814,14 C13.4984814,14.1325859 13.5533228,14.2592667 13.65,14.35 C13.7407333,14.4466772 13.8674141,14.5015186 14,14.5015186 C14.1325859,14.5015186 14.2592667,14.4466772 14.35,14.35 L20,8.7 L20.78,7.92 L23.55,7.92 C23.6816573,7.917063 23.8070751,7.86331251 23.9,7.77 L27.36,4.31 C27.5066366,4.17107596 27.5506083,3.95521467 27.47,3.77 C27.3919291,3.57989638 27.2054872,3.45692403 27,3.46 L24.54,3.46 L24.54,1 C24.5389924,0.798149057 24.4167128,0.616701799 24.23,0.54 C24.0447853,0.459391664 23.828924,0.503363408 23.69,0.65 L21.52,2.8 C15.9401207,-0.926846735 8.46694245,0.0290172714 4.00472299,5.04030825 C-0.457496475,10.0515992 -0.543590257,17.5851679 3.8029405,22.6971255 C8.14947127,27.809083 15.5988534,28.9354824 21.2624452,25.3371263 C26.9260371,21.7387701 29.0711253,14.516536 26.29,8.41 C26.1763937,8.15912326 25.8813066,8.04734786 25.63,8.16 Z M23.35,6.92 L21.79,6.92 L24.25,4.46 L25.81,4.46 L23.35,6.92 Z M23.54,3.75 L21.08,6.21 L21.08,4.65 L23.54,2.19 L23.54,3.75 Z"/></g></g></svg>
                                    <h4 className="font-bold century text-bleu"><span className="font-bold">Remarketing</span></h4>
                                    <p className="font-bold">Cibler de nouveau les personnes ayant déjà montré un intérêt pour votre entreprise en visitant <strong>votre site web</strong>.</p>
                                    <br/>
                                    <p>Grâce aux <strong>cookies installés sur votre site</strong>, il est possible de diffuser des <strong>publicités personnalisées</strong> uniquement aux personnes ayant interagit avec <strong>votre site web</strong>.</p>
                                </div>
                            </div>
                            <div className="w-full text-white flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                            <div className="w-full svgtransform -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="mx-auto block md:ml-0" fill="#ffffff" viewBox="0 0 128 160"><rect x="48" y="44" width="28" height="4"/><rect x="48" y="60" width="20" height="4"/><rect x="48" y="76" width="16" height="4"/><polygon points="39.86 40.88 33.53 47.21 29.38 43.05 26.55 45.88 30.7 50.04 33.53 52.87 36.36 50.04 36.36 50.04 42.69 43.71 39.86 40.88"/><polygon points="39.86 57.13 33.53 63.46 29.38 59.3 26.55 62.13 30.7 66.29 33.53 69.12 36.36 66.29 36.36 66.29 42.69 59.96 39.86 57.13"/><polygon points="39.86 73.13 33.53 79.46 29.38 75.31 26.55 78.13 30.7 82.29 33.53 85.12 36.36 82.29 36.36 82.29 42.69 75.96 39.86 73.13"/><circle cx="89.99" cy="76.11" r="9.85"/><path d="M113.17,75.24a4,4,0,0,0-.81-5.63l-1.68-1.22a4,4,0,0,1-1.62-3.55l.18-2.07a4,4,0,0,0-3.72-4.3l-2.07-.12a4,4,0,0,1-3.28-2.11l-1-1.84a4,4,0,0,0-5.45-1.6l-1.8,1a4,4,0,0,1-3.9,0l-1.8-1a4,4,0,0,0-5.45,1.6l-1,1.84a4,4,0,0,1-3.28,2.11l-2.07.12a4,4,0,0,0-3.72,4.3l.18,2.07A4,4,0,0,1,69.3,68.4l-1.68,1.22a4,4,0,0,0-.81,5.63l1.27,1.64a4,4,0,0,1,.56,3.86l-.75,1.93a4,4,0,0,0,2.36,5.17l2,.69a4,4,0,0,1,2.55,2.95l.37,1.83-5,16.19L78,107,83,113.69,87.47,99a3.94,3.94,0,0,0,4.82.19L97,113.69l4.92-6.66,7.9,2.48-5.11-15.68c0-.1.07-.2.09-.3l.41-2a4,4,0,0,1,2.55-2.95l2-.69a4,4,0,0,0,2.36-5.17l-.75-1.93a4,4,0,0,1,.56-3.86ZM90,90a13.85,13.85,0,1,1,13.85-13.85A13.87,13.87,0,0,1,90,90Z"/><path d="M88,118.25V116H84v2.25A5.89,5.89,0,0,1,78,124H26a5.89,5.89,0,0,1-6-5.75V9.75A5.89,5.89,0,0,1,26,4H36a4.16,4.16,0,0,0,4,4H64a4.3,4.3,0,0,0,4-4H78a5.89,5.89,0,0,1,6,5.75V48h4V9.75A9.89,9.89,0,0,0,78,0H26A9.89,9.89,0,0,0,16,9.75v108.5A9.89,9.89,0,0,0,26,128H78A9.89,9.89,0,0,0,88,118.25Z"/></svg>                                
                                    <h4 className="font-bold century text-bleu"><span className="font-bold">Niveau de qualité</span></h4>
                                    <p className="font-bold">Comme en <strong>SEO</strong>, la <strong>qualité et la pertinence de ses contenus</strong> est déterminante pour favoriser un meilleur <strong>positionnement dans les SERP</strong>.</p>
                                    <br/>
                                    <p>Un <strong>niveau de qualité élevé</strong> vous permettra d’obtenir un meilleur classement pour un budget moindre lors de la mise en concurrence avec les autres <strong>annonceurs.</strong></p>
                                </div>
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="mx-auto md:ml-0 block" fill="#ffffff" viewBox="0 0 100 125" ><path d="M50.3383789,43.5737305c1.6616211,0,3.215332,0.8461914,4.2636719,2.3217773  c0.3208008,0.449707,0.9443359,0.5561523,1.3945312,0.2363281c0.4501953-0.3203125,0.5561523-0.9443359,0.2363281-1.3945312  c-1.4287109-2.0107422-3.5771484-3.1635742-5.8945312-3.1635742c-3.2249756,0-5.9712524,2.2554321-7.0158691,5.3994141H42.043457  c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1h0.859314c-0.0228882,0.260498-0.0365601,0.5240479-0.0365601,0.7910156  c0,0.3817139,0.0322876,0.7545776,0.0786133,1.1225586H42.043457c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1h1.3900146  c1.1224976,2.9710693,3.793457,5.0678711,6.9049072,5.0678711c2.3178711,0,4.4663086-1.1533203,5.8945312-3.1635742  c0.3198242-0.4501953,0.2138672-1.074707-0.2363281-1.3945312c-0.4501953-0.3188477-1.0737305-0.2138672-1.3945312,0.2363281  C53.5541992,55.1083984,52,55.9545898,50.3383789,55.9545898c-2.0101929,0-3.7658691-1.2359009-4.7171631-3.0678711h3.2454834  c0.5522461,0,1-0.4477539,1-1s-0.4477539-1-1-1h-3.9058228c-0.0593872-0.364624-0.0946655-0.7387695-0.0946655-1.1225586  c0-0.2685547,0.0203247-0.5313721,0.0498047-0.7910156h3.9506836c0.5522461,0,1-0.4477539,1-1s-0.4477539-1-1-1h-3.406189  C46.364502,44.9595947,48.2089233,43.5737305,50.3383789,43.5737305z"/><path d="M50,36.3857422c-7.5068359,0-13.6142578,6.1074219-13.6142578,13.6142578S42.4931641,63.6142578,50,63.6142578  S63.6142578,57.5068359,63.6142578,50S57.5068359,36.3857422,50,36.3857422z M50,61.6142578  c-6.4042969,0-11.6142578-5.2099609-11.6142578-11.6142578S43.5957031,38.3857422,50,38.3857422  S61.6142578,43.5957031,61.6142578,50S56.4042969,61.6142578,50,61.6142578z"/><path d="M50,31.1928711c-10.362793,0-18.793457,8.4370117-18.793457,18.8071289S39.637207,68.8071289,50,68.8071289  S68.793457,60.3701172,68.793457,50S60.362793,31.1928711,50,31.1928711z M50,66.8071289  c-9.2597656,0-16.793457-7.5395508-16.793457-16.8071289S40.7402344,33.1928711,50,33.1928711S66.793457,40.7324219,66.793457,50  S59.2597656,66.8071289,50,66.8071289z"/><path d="M56.3666992,16.3364258C56.3666992,12.8422852,53.5107422,10,50,10s-6.3666992,2.8422852-6.3666992,6.3364258  S46.4892578,22.6733398,50,22.6733398S56.3666992,19.8305664,56.3666992,16.3364258z M45.6333008,16.3364258  C45.6333008,13.9453125,47.5922852,12,50,12s4.3666992,1.9453125,4.3666992,4.3364258  c0,2.3916016-1.9589844,4.3369141-4.3666992,4.3369141S45.6333008,18.7280273,45.6333008,16.3364258z"/><path d="M80.1552734,26.2084961c-0.0048828-1.6953125-0.6694336-3.2910156-1.8710938-4.4926758  s-2.7973633-1.8662109-4.4926758-1.8710938c-0.0063477,0-0.012207,0-0.0185547,0  c-1.690918,0-3.2783203,0.6567383-4.4711914,1.8500977c-1.1977539,1.1972656-1.8544922,2.7919922-1.8496094,4.4892578  c0.0043945,1.6953125,0.6689453,3.2910156,1.8710938,4.4926758c1.2016602,1.2021484,2.7973633,1.8666992,4.4926758,1.8710938  c0.0058594,0,0.012207,0,0.0180664,0c1.690918,0,3.2783203-0.65625,4.4711914-1.8496094  C79.5029297,29.5009766,80.1601562,27.90625,80.1552734,26.2084961z M76.8911133,29.2841797  c-0.8154297,0.8154297-1.9008789,1.2636719-3.0571289,1.2636719c-0.0043945,0-0.0083008,0-0.0126953,0  c-1.1630859-0.0029297-2.2583008-0.4594727-3.0839844-1.2851562s-1.2822266-1.9208984-1.2851562-3.0839844  c-0.003418-1.1611328,0.4453125-2.2514648,1.2636719-3.0698242c0.8154297-0.8154297,1.9008789-1.2641602,3.0576172-1.2641602  c0.0039062,0,0.0083008,0,0.012207,0c1.1635742,0.003418,2.2587891,0.4599609,3.0844727,1.2851562  c0.8251953,0.8256836,1.2817383,1.9208984,1.2851562,3.0844727C78.1586914,27.3754883,77.7094727,28.4658203,76.8911133,29.2841797z  "/><path d="M83.6635742,43.6333008c-3.4941406,0-6.3369141,2.855957-6.3369141,6.3666992s2.8427734,6.3666992,6.3369141,6.3666992  S90,53.5107422,90,50S87.1577148,43.6333008,83.6635742,43.6333008z M83.6635742,54.3666992  c-2.3916016,0-4.3369141-1.9589844-4.3369141-4.3666992s1.9453125-4.3666992,4.3369141-4.3666992  C86.0546875,45.6333008,88,47.5922852,88,50S86.0546875,54.3666992,83.6635742,54.3666992z"/><path d="M73.8339844,67.4521484c-0.0058594,0-0.012207,0-0.0180664,0c-1.6953125,0.0043945-3.2910156,0.6689453-4.4926758,1.8710938  c-1.2021484,1.2016602-1.8666992,2.7973633-1.8710938,4.4926758c-0.0048828,1.6972656,0.6518555,3.2919922,1.8496094,4.4892578  c1.1928711,1.1933594,2.7802734,1.8500977,4.4711914,1.8500977c0.0063477,0,0.012207,0,0.0185547,0  c1.6953125-0.0048828,3.2910156-0.6694336,4.4926758-1.8710938s1.8662109-2.7973633,1.8710938-4.4926758  c0.0048828-1.6977539-0.6523438-3.2924805-1.8500977-4.4897461C77.1118164,68.1083984,75.5249023,67.4521484,73.8339844,67.4521484z   M76.8701172,76.8701172c-0.8256836,0.8251953-1.9208984,1.2817383-3.0844727,1.2851562c-0.0039062,0-0.0083008,0-0.012207,0  c-1.1567383,0-2.2421875-0.4487305-3.0576172-1.2641602c-0.8183594-0.8183594-1.2670898-1.9086914-1.2636719-3.0698242  c0.0029297-1.1630859,0.4594727-2.2583008,1.2851562-3.0839844s1.9208984-1.2822266,3.0839844-1.2851562  c0.0043945,0,0.0083008,0,0.0126953,0c1.15625,0,2.2416992,0.4482422,3.0571289,1.2636719  c0.8183594,0.8183594,1.2675781,1.9086914,1.2641602,3.0698242C78.1518555,74.9492188,77.6953125,76.0444336,76.8701172,76.8701172z  "/><path d="M56.3666992,83.6635742c0-3.4941406-2.855957-6.3369141-6.3666992-6.3369141s-6.3666992,2.8427734-6.3666992,6.3369141  S46.4892578,90,50,90S56.3666992,87.1577148,56.3666992,83.6635742z M50,88c-2.4077148,0-4.3666992-1.9453125-4.3666992-4.3364258  c0-2.3916016,1.9589844-4.3369141,4.3666992-4.3369141s4.3666992,1.9453125,4.3666992,4.3369141  C54.3666992,86.0546875,52.4077148,88,50,88z"/><path d="M26.184082,67.4521484c-0.0058594,0-0.012207,0-0.0180664,0c-1.690918,0-3.2783203,0.65625-4.4711914,1.8496094  c-1.1977539,1.1972656-1.8549805,2.7919922-1.8500977,4.4897461c0.0048828,1.6953125,0.6694336,3.2910156,1.8710938,4.4926758  s2.7973633,1.8662109,4.4926758,1.8710938c0.0063477,0,0.012207,0,0.0185547,0c1.690918,0,3.2783203-0.6567383,4.4711914-1.8500977  c1.1977539-1.1972656,1.8544922-2.7919922,1.8496094-4.4892578c-0.0043945-1.6953125-0.6689453-3.2910156-1.8710938-4.4926758  C29.4750977,68.1210938,27.8793945,67.456543,26.184082,67.4521484z M29.2841797,76.8911133  c-0.8154297,0.8154297-1.9008789,1.2641602-3.0576172,1.2641602c-0.0039062,0-0.0083008,0-0.012207,0  c-1.1635742-0.003418-2.2587891-0.4599609-3.0844727-1.2851562c-0.8251953-0.8256836-1.2817383-1.9208984-1.2851562-3.0844727  c-0.003418-1.1611328,0.4458008-2.2514648,1.2641602-3.0698242c0.8154297-0.8154297,1.9008789-1.2636719,3.0571289-1.2636719  c0.0043945,0,0.0083008,0,0.0126953,0c1.1630859,0.0029297,2.2583008,0.4594727,3.0839844,1.2851562  s1.2822266,1.9208984,1.2851562,3.0839844C30.5512695,74.9824219,30.1025391,76.0727539,29.2841797,76.8911133z"/><path d="M10,50c0,3.5107422,2.8422852,6.3666992,6.3364258,6.3666992S22.6733398,53.5107422,22.6733398,50  s-2.8427734-6.3666992-6.3369141-6.3666992S10,46.4892578,10,50z M20.6733398,50  c0,2.4077148-1.9453125,4.3666992-4.3369141,4.3666992C13.9453125,54.3666992,12,52.4077148,12,50  s1.9453125-4.3666992,4.3364258-4.3666992C18.7280273,45.6333008,20.6733398,47.5922852,20.6733398,50z"/><path d="M30.6982422,21.6948242c-1.1928711-1.1933594-2.7802734-1.8500977-4.4711914-1.8500977c-0.0063477,0-0.012207,0-0.0185547,0  c-1.6953125,0.0048828-3.2910156,0.6694336-4.4926758,1.8710938s-1.8662109,2.7973633-1.8710938,4.4926758  c-0.0048828,1.6977539,0.6523438,3.2924805,1.8500977,4.4897461c1.1933594,1.1933594,2.7802734,1.8496094,4.4711914,1.8496094  c0.0058594,0,0.012207,0,0.0180664,0c1.6953125-0.0043945,3.2910156-0.6689453,4.4926758-1.8710938  c1.2021484-1.2016602,1.8666992-2.7973633,1.8710938-4.4926758C32.5527344,24.4868164,31.8959961,22.8920898,30.6982422,21.6948242z   M29.2626953,29.2626953c-0.8256836,0.8256836-1.9208984,1.2822266-3.0839844,1.2851562c-0.0043945,0-0.0083008,0-0.0126953,0  c-1.15625,0-2.2416992-0.4482422-3.0571289-1.2636719c-0.8183594-0.8183594-1.2675781-1.9086914-1.2641602-3.0698242  c0.003418-1.1635742,0.4599609-2.2587891,1.2851562-3.0844727c0.8256836-0.8251953,1.9208984-1.2817383,3.0844727-1.2851562  c0.0039062,0,0.0083008,0,0.012207,0c1.1567383,0,2.2421875,0.4487305,3.0576172,1.2641602  c0.8183594,0.8183594,1.2670898,1.9086914,1.2636719,3.0698242C30.5449219,27.3417969,30.0883789,28.4370117,29.2626953,29.2626953z  "/><path d="M32.7509766,21.0688477c0.1831055,0.328125,0.5234375,0.5126953,0.8740234,0.5126953  c0.1650391,0,0.3320312-0.0405273,0.4863281-0.1269531c2.0742188-1.1577148,4.2802734-2.0878906,6.5556641-2.765625  c0.5292969-0.1577148,0.8310547-0.7143555,0.6733398-1.2436523c-0.1582031-0.5302734-0.7167969-0.8320312-1.2436523-0.6733398  c-2.4165039,0.7192383-4.7578125,1.7075195-6.9599609,2.9365234C32.6542969,19.9775391,32.4814453,20.5864258,32.7509766,21.0688477  z"/><path d="M65.4521484,21.2236328c0.1513672,0.0820312,0.3144531,0.1206055,0.4750977,0.1206055  c0.3554688,0,0.699707-0.1894531,0.8803711-0.5239258c0.2626953-0.4858398,0.0820312-1.0927734-0.4033203-1.3554688  c-2.2148438-1.1987305-4.5688477-2.1557617-6.9970703-2.8452148c-0.5317383-0.1489258-1.0839844,0.1582031-1.2348633,0.6889648  c-0.1508789,0.53125,0.1577148,1.0839844,0.6889648,1.2348633C61.1484375,19.1928711,63.3662109,20.0947266,65.4521484,21.2236328z"/><path d="M81.1860352,40.5419922c0.1293945,0.4345703,0.5273438,0.715332,0.9580078,0.715332  c0.0947266,0,0.1904297-0.0136719,0.2856445-0.0419922c0.5292969-0.1577148,0.8310547-0.7143555,0.6733398-1.2436523  c-0.7192383-2.4165039-1.7075195-4.7578125-2.9365234-6.9599609c-0.269043-0.4829102-0.8779297-0.6552734-1.3603516-0.3857422  c-0.4824219,0.269043-0.6552734,0.8779297-0.3857422,1.3603516C79.578125,36.0605469,80.5083008,38.2666016,81.1860352,40.5419922z"/><path d="M79.5297852,66.8032227c0.3554688,0,0.699707-0.1894531,0.8803711-0.5239258  c1.1987305-2.215332,2.15625-4.5693359,2.8452148-6.9970703c0.1508789-0.53125-0.1577148-1.0839844-0.6889648-1.2348633  c-0.5307617-0.1499023-1.0834961,0.1577148-1.2348633,0.6889648c-0.6494141,2.2866211-1.5512695,4.5043945-2.6801758,6.5908203  c-0.2626953,0.4858398-0.0820312,1.0927734,0.4033203,1.3554688C79.2060547,66.7646484,79.3691406,66.8032227,79.5297852,66.8032227  z"/><path d="M65.8886719,78.2954102c-2.0742188,1.1577148-4.2802734,2.0878906-6.5556641,2.765625  c-0.5292969,0.1577148-0.8310547,0.7143555-0.6733398,1.2436523c0.1293945,0.4345703,0.5273438,0.715332,0.9580078,0.715332  c0.0947266,0,0.1904297-0.0136719,0.2856445-0.0419922c2.4165039-0.7192383,4.7578125-1.7075195,6.9599609-2.9365234  c0.4824219-0.269043,0.6552734-0.8779297,0.3857422-1.3603516C66.9794922,78.1982422,66.3706055,78.0258789,65.8886719,78.2954102z"/><path d="M40.5927734,83.1303711c0.0913086,0.0258789,0.1831055,0.0385742,0.2734375,0.0385742  c0.4360352,0,0.8364258-0.2875977,0.9614258-0.7275391c0.1508789-0.53125-0.1577148-1.0839844-0.6889648-1.2348633  c-2.2866211-0.6494141-4.5043945-1.5512695-6.5908203-2.6801758c-0.4863281-0.2636719-1.0927734-0.0820312-1.3554688,0.4033203  c-0.2626953,0.4858398-0.0820312,1.0927734,0.4033203,1.3554688C35.8110352,81.4838867,38.1650391,82.4414062,40.5927734,83.1303711  z"/><path d="M21.1938477,67.1240234c0.4824219-0.269043,0.6552734-0.8779297,0.3857422-1.3603516  c-1.1577148-2.0742188-2.0878906-4.2802734-2.765625-6.5556641c-0.1582031-0.5302734-0.7172852-0.831543-1.2436523-0.6733398  c-0.5292969,0.1577148-0.8310547,0.7143555-0.6733398,1.2436523c0.7192383,2.4165039,1.7075195,4.7578125,2.9365234,6.9599609  c0.1831055,0.328125,0.5234375,0.5126953,0.8740234,0.5126953C20.8725586,67.2509766,21.0395508,67.2104492,21.1938477,67.1240234z"/><path d="M17.4335938,41.7026367c0.0913086,0.0258789,0.1831055,0.0385742,0.2734375,0.0385742  c0.4360352,0,0.8364258-0.2875977,0.9614258-0.7275391c0.6494141-2.2866211,1.5512695-4.5043945,2.6801758-6.5908203  c0.2626953-0.4858398,0.0820312-1.0927734-0.4033203-1.3554688c-0.4858398-0.2631836-1.0927734-0.0820312-1.3554688,0.4033203  c-1.1987305,2.215332-2.15625,4.5693359-2.8452148,6.9970703C16.59375,40.9990234,16.9023438,41.5517578,17.4335938,41.7026367z"/><text x="0" y="120" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>                    
                                    <h4 className="font-bold century text-bleu"><span className="font-bold">Optimisation des budgets</span></h4>
                                    <p className="font-bold">Nous maîtrisons votre budget en sélectionnant des requêtes opportunes et en choisissant les <strong>stratégies d'enchères</strong> les plus adaptées.</p>
                                    <br/>
                                    <p>Un consultant se charge d’étudier les <strong>estimations au coût par clic</strong> proposées par nos <strong>outils de webmarketing</strong> en vue de vous proposer une solution optimale.</p>
                                </div>
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="mx-auto block md:ml-0" fill="#ffffff" viewBox="0 0 140 175"><g><g><g><g><path d="M107.4882812,28.375h-21.375c-0.5527344,0-1-0.4477539-1-1V6c0-0.404541,0.2431641-0.769043,0.6171875-0.9238281      c0.375-0.1540527,0.8046875-0.0695801,1.0898438,0.2167969l21.375,21.375      c0.2861328,0.2858887,0.3720703,0.7160645,0.2167969,1.0895996C108.2578125,28.1313477,107.8925781,28.375,107.4882812,28.375z       M87.1132812,26.375h17.9609375L87.1132812,8.4143066V26.375z"/></g><g><path d="M107.4882812,135H6.5585938c-0.5527344,0-1-0.4477539-1-1V6c0-0.5522461,0.4472656-1,1-1h79.5595703      c0.265625,0,0.5195312,0.1054688,0.7070312,0.2929688l21.3701172,21.3701172      c0.1875,0.1875,0.2929688,0.4418945,0.2929688,0.7070312v19.9699707c0,0.5522461-0.4472656,1-1,1s-1-0.4477539-1-1V27.7844238      L85.7041016,7H7.5585938v126h98.9296875V86.2600098c0-0.5522461,0.4472656-1,1-1s1,0.4477539,1,1V134      C108.4882812,134.5522461,108.0410156,135,107.4882812,135z"/></g></g><g><g><path d="M75.6171875,124.7570801c-0.1679688,0-0.3359375-0.0422363-0.4882812-0.1274414      c-0.3349609-0.1872559-0.5332031-0.5500488-0.5097656-0.9331055l1.3242188-21.826416      c0.0087891-0.1501465,0.0517578-0.2963867,0.125-0.4277344l39.9150391-71.3278809      c0.1953125-0.347168,0.5869141-0.5471191,0.9726562-0.5065918c7.1279297,0.715332,12.9423828,3.9689941,17.28125,9.670166      c0.2412109,0.3168945,0.2714844,0.746582,0.0771484,1.0939941l-39.9150391,71.3278809      c-0.0742188,0.1313477-0.1757812,0.2443848-0.2988281,0.3308105l-17.9091797,12.5454102      C76.0195312,124.6962891,75.8183594,124.7570801,75.6171875,124.7570801z M77.9257812,102.2194824l-1.1845703,19.529541      l16.0244141-11.2250977l39.4785156-70.548584c-3.8085938-4.7553711-8.7949219-7.5456543-14.8398438-8.3044434      L77.9257812,102.2194824z M93.5263672,111.2116699h0.0097656H93.5263672z"/></g><g><path d="M93.5253906,112.2116699c-0.1650391,0-0.3330078-0.0412598-0.4873047-0.1276855      c-1.0625-0.5947266-1.2998047-1.5097656-1.4570312-2.1149902c-0.1337891-0.5161133-0.1962891-0.7033691-0.4990234-0.8728027      c-0.3037109-0.1704102-0.4951172-0.1240234-1.0029297,0.0314941c-0.5986328,0.1835938-1.5029297,0.4599609-2.5654297-0.1352539      c-1.0634766-0.5949707-1.3007812-1.510498-1.4580078-2.1162109c-0.1337891-0.515625-0.1953125-0.7026367-0.4970703-0.8718262      c-0.3017578-0.168457-0.4921875-0.125-1.0048828,0.0319824c-0.5986328,0.1828613-1.5029297,0.4592285-2.5654297-0.1359863      c-1.0634766-0.5949707-1.3017578-1.5102539-1.4599609-2.1159668c-0.1347656-0.5168457-0.1962891-0.7043457-0.5009766-0.8745117      c-0.3046875-0.1706543-0.4960938-0.125-1.0068359,0.0305176c-0.6005859,0.1821289-1.5029297,0.458252-2.5673828-0.1374512      c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2705078-0.4816895,0.8789062-0.6552734,1.3613281-0.3842773      c0.3056641,0.1706543,0.4970703,0.1252441,1.0068359-0.0307617c0.5996094-0.182373,1.5019531-0.4584961,2.5673828,0.1374512      c1.0634766,0.5949707,1.3017578,1.5102539,1.4599609,2.1159668c0.1347656,0.5168457,0.1962891,0.7043457,0.5009766,0.8745117      c0.3027344,0.1699219,0.4951172,0.1237793,1.0039062-0.0314941c0.5996094-0.1826172,1.5039062-0.458252,2.5664062,0.135498      c1.0634766,0.5952148,1.2998047,1.5102539,1.4570312,2.1157227c0.1337891,0.5158691,0.1953125,0.7028809,0.4980469,0.8723145      c0.3027344,0.1696777,0.4941406,0.1245117,1.0029297-0.0317383c0.5996094-0.1826172,1.5039062-0.4592285,2.5654297,0.135498      c1.0634766,0.5947266,1.3007812,1.5100098,1.4580078,2.1157227c0.1337891,0.5158691,0.1953125,0.7028809,0.4980469,0.8723145      c0.4824219,0.2697754,0.6542969,0.8791504,0.3847656,1.361084      C94.2158203,112.0273438,93.8759766,112.2116699,93.5253906,112.2116699z"/></g><g><g><path d="M86.0400391,106.1291504c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855       c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398l32.2480469-57.6271973       c0.2705078-0.4819336,0.8789062-0.6555176,1.3613281-0.3842773c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398       l-32.2480469,57.6271973C86.7304688,105.9445801,86.390625,106.1291504,86.0400391,106.1291504z"/></g></g><g><path d="M81.2548828,120.8110352c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855l-5.2207031-2.9213867      c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2705078-0.4816895,0.8779297-0.6550293,1.3613281-0.3842773      l5.2207031,2.9213867c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398      C81.9453125,120.6264648,81.6054688,120.8110352,81.2548828,120.8110352z"/></g></g><g><g><path d="M61.0966797,89.505127h-8.1464844c-0.4931641,0-0.9121094-0.3591309-0.9882812-0.8461914l-1.1542969-7.4187012      c-1.6474609-0.4711914-3.2314453-1.1269531-4.7236328-1.9555664l-6.0615234,4.4284668      c-0.3974609,0.2907715-0.9492188,0.2485352-1.296875-0.1003418l-5.7607422-5.7607422      c-0.3486328-0.3483887-0.3916016-0.8989258-0.1005859-1.296875l4.4287109-6.0617676      C36.4638672,69,35.8076172,67.4160156,35.3369141,65.7700195l-7.4179688-1.1547852      c-0.4873047-0.0756836-0.8466797-0.4951172-0.8466797-0.9880371v-8.1467285c0-0.4929199,0.359375-0.9123535,0.8457031-0.9880371      l7.4189453-1.1550293c0.4707031-1.6459961,1.1269531-3.2297363,1.9560547-4.7233887l-4.4287109-6.0617676      c-0.2910156-0.3979492-0.2480469-0.9484863,0.1005859-1.296875l5.7607422-5.7602539      c0.3486328-0.3493652,0.8994141-0.3903809,1.296875-0.1003418l6.0615234,4.4282227      c1.4921875-0.8288574,3.0761719-1.4846191,4.7236328-1.9558105l1.1542969-7.4182129      c0.0761719-0.4870605,0.4951172-0.8461914,0.9882812-0.8461914h8.1464844c0.4931641,0,0.9121094,0.3591309,0.9882812,0.8461914      l1.1542969,7.4182129c1.6474609,0.4709473,3.2304688,1.126709,4.7236328,1.9558105l6.0625-4.4284668      c0.3974609-0.2907715,0.9482422-0.248291,1.296875,0.1003418l5.7597656,5.760498      c0.3486328,0.3483887,0.3916016,0.8989258,0.1005859,1.296875l-4.4287109,6.0617676      c0.8291016,1.4916992,1.484375,3.0754395,1.9560547,4.7236328l7.4179688,1.1547852      c0.4873047,0.0756836,0.8466797,0.4951172,0.8466797,0.9880371v8.1467285c0,0.4929199-0.359375,0.9123535-0.8457031,0.9880371      l-7.4189453,1.1550293c-0.4707031,1.6459961-1.1269531,3.2299805-1.9560547,4.7233887l4.4287109,6.0615234      c0.2910156,0.3979492,0.2480469,0.9482422-0.1005859,1.296875l-5.7597656,5.7607422      c-0.3486328,0.348877-0.8994141,0.3911133-1.296875,0.1003418l-6.0625-4.4284668      c-1.4921875,0.8288574-3.0761719,1.4846191-4.7236328,1.9558105l-1.1542969,7.418457      C62.0087891,89.1459961,61.5898438,89.505127,61.0966797,89.505127z M53.8066406,87.505127h6.4335938l1.1230469-7.2143555      c0.0615234-0.395752,0.3535156-0.7165527,0.7412109-0.8151855c1.9082031-0.4855957,3.7285156-1.239502,5.4121094-2.2412109      c0.3447266-0.2043457,0.7783203-0.1845703,1.1015625,0.052002l5.8955078,4.3066406L79.0625,77.043457l-4.3066406-5.8947754      c-0.2363281-0.3234863-0.2568359-0.7565918-0.0517578-1.1008301c1.0019531-1.6850586,1.7558594-3.5061035,2.2412109-5.4123535      c0.0986328-0.3881836,0.4189453-0.6799316,0.8144531-0.7414551l7.2148438-1.123291v-6.4338379l-7.2138672-1.1230469      c-0.3964844-0.0615234-0.7167969-0.3532715-0.8154297-0.7414551c-0.4863281-1.9089355-1.2402344-3.7297363-2.2412109-5.4118652      c-0.2050781-0.3442383-0.1845703-0.777832,0.0517578-1.1013184L79.0625,42.0639648l-4.5488281-4.5493164l-5.8955078,4.3066406      c-0.3232422,0.2365723-0.7578125,0.2565918-1.1015625,0.052002c-1.6845703-1.0021973-3.5048828-1.7561035-5.4111328-2.2409668      c-0.3886719-0.098877-0.6806641-0.4196777-0.7421875-0.8154297l-1.1230469-7.2141113h-6.4335938l-1.1230469,7.2141113      c-0.0615234,0.395752-0.3535156,0.7165527-0.7412109,0.8154297c-1.9082031,0.4853516-3.7285156,1.2392578-5.4121094,2.2409668      c-0.34375,0.204834-0.7783203,0.1848145-1.1015625-0.052002l-5.8945312-4.3063965l-4.5498047,4.5490723l4.3066406,5.8950195      c0.2363281,0.3234863,0.2568359,0.7565918,0.0517578,1.1008301c-1.0019531,1.6853027-1.7558594,3.5063477-2.2412109,5.4123535      c-0.0986328,0.3881836-0.4189453,0.6799316-0.8144531,0.7414551l-7.2148438,1.123291v6.4338379l7.2138672,1.1230469      c0.3964844,0.0615234,0.7167969,0.3532715,0.8154297,0.7414551c0.4853516,1.90625,1.2392578,3.7272949,2.2412109,5.4121094      c0.2050781,0.3444824,0.1845703,0.7775879-0.0517578,1.1010742L34.984375,77.043457l4.5498047,4.5495605l5.8945312-4.3066406      c0.3232422-0.2368164,0.7578125-0.2565918,1.1015625-0.052002c1.6826172,1.0012207,3.5039062,1.7553711,5.4121094,2.2412109      c0.3876953,0.0986328,0.6796875,0.4194336,0.7412109,0.8151855L53.8066406,87.505127z M85.9746094,63.6271973h0.0097656      H85.9746094z"/></g><g><path d="M57.0234375,72.3076172c-7.0322266,0-12.7539062-5.7214355-12.7539062-12.7539062      s5.7216797-12.7536621,12.7539062-12.7536621s12.7539062,5.7211914,12.7539062,12.7536621      S64.0556641,72.3076172,57.0234375,72.3076172z M57.0234375,48.8000488      c-5.9296875,0-10.7539062,4.8239746-10.7539062,10.7536621S51.09375,70.3076172,57.0234375,70.3076172      s10.7539062-4.8242188,10.7539062-10.7539062S62.953125,48.8000488,57.0234375,48.8000488z"/></g></g></g><g><path d="M126.5810547,53.1425781c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855l-16.5859375-9.2810059    c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2695312-0.4816895,0.8779297-0.6550293,1.3613281-0.3842773    l16.5859375,9.2810059c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398    C127.2714844,52.9580078,126.9316406,53.1425781,126.5810547,53.1425781z"/></g></g></svg>                    
                                    <h4 className="font-bold century text-bleu"><span className="font-bold">Gestion de projet publicitaire</span></h4>
                                    <p className="font-bold">Un expert de notre <strong>agence digitale à Toulouse</strong> gère votre <strong>compte publicitaire</strong> en fonction de vos besoins.</p>
                                    <br/>
                                    <p>Il déterminera les meilleures opportunités en fonction de votre <strong>budget</strong>, de vos <strong>objectifs</strong> et des services que vous souhaitez développer.</p>
                                </div>
                            </div>
                        </section>
                    </section>
                    <section className="w-full flex mb-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                        <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence à Toulouse</span> ?</h3>
                        <h4>Linkweb soutient les professionnels souhaitant développer leur présence sur Internet.</h4>
                        </div>
                        <div className="w-full mx-auto block lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" />
                        </div>
                    </section>   
                    <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
                        <h2 className="text-bleu text-lg text-center century">Agence de Référencement Web à Toulouse</h2>
                        <h3 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                            Nos clients sont satisfaits
                        </h3>
                        <br/>
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                        <br/>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-center justify-center century text-center mt-3 px-6 mb-12">
                <div className="flex flex-row flex-wrap">
                <article className="w-full md:w-1/2 lg:w-1/2 text-left mt-5 xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                                    <div className="avis" style={{minHeight:'340px'}}>
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={lious} alt="Avis My Business"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>Lious & Compagnie</h4>
                                        <p>« Nous travaillons avec <strong>Linkweb</strong> depuis 2 ans, nous sommes très satisfait. Leur suivi est très régulier, ils nous appellent tous les mois pour faire un point et demander si nous avons des modifications a faire. À recommander ! »</p>
                                    </div>
                                </article>
                                <article className="w-full md:w-1/2 mt-5 lg:w-1/2 text-left xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                                    <div className="avis" style={{minHeight:'340px'}}>
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={valognes} alt="Avis Google"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>Valognes Menuiserie</h4>
                                        <p>« <strong>Linkweb</strong>, partenaire de confiance, nous sommes ravis aujourd'hui de notre collaboration. Merci à Sophie de nous avoir démarché. C'est une affaire qui roule, beaucoup de sérieux, de la réactivité, et Anthony assure très bien le bon suivi de notre dossier au quotidien concernant notre entreprise. Nous sommes vraiment très content de cette entreprise. »</p>
                                    </div>
                                </article>
                                <article className="w-full md:w-1/2 lg:w-1/2 mt-5 text-left xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                                    <div className="avis" style={{minHeight:'340px'}}>
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={savi} alt="Avis My Business"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>SAVI</h4>
                                        <p>« Merci pour leur gentillesse et leur réactivité. Un site mis au goût du jour avec beaucoup de goût avec un respect de nos valeurs. Un travail de longue haleine mais qui donne ses fruits. Heureux de notre collaboration. »</p>
                                        <br/>
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
                    <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Ce que notre agence Adwords à Toulouse fait pour vous</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Les référenceurs et consultants de notre agence de référencement web vous proposent un suivi de qualité pour un retour sur investissement garanti. Nous vous accompagnons pour vous permettre d’accroitre votre clientèle en complétant votre SEO.</h3>
                        </div>
                    </section>
                    <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                        <div className="w-full md:w-3/4 py-0 flex justify-end">
                            <Accordion>
                                <div className="w-full" label="CONFIGURATION DE VOS MESSAGES PUBLICITAIRES SELON VOS OBJECTIFS DE CONVERSION">
                                    <p><strong>Être visible rapidement dans les SERP de Google</strong> est possible. Pour cela, nos experts doivent connaître <strong>vos objectifs, vos cibles ainsi que votre offre</strong> pour définir un axe stratégique qui vous correspond parfaitement.</p>
                                    <br/>
                                    <p>Si vous êtes en quête de <strong>visiteurs, de contacts ou de ventes</strong>, il existe des solutions précises pour atteindre vos objectifs. Le <strong>marketing publicitaire</strong> payant complète votre <strong>SEO</strong>.</p>
                                    <br/>
                                    <p>Nous paramétrons directement votre <strong>publicité Google sur-mesure</strong> pour faciliter et <strong>maximiser les interactions avec votre audience</strong>.</p>
                                </div>
                                <div label="PERSONNALISATION DE VOS PUBLICITÉS EN FONCTION DE VOTRE CIBLAGE">
                                    <p>Comme le <strong>référencement SEO</strong>, le <strong>référencement payant</strong> permet de cibler très précisément votre audience.</p>
                                    <br/>
                                    <p>Nous adaptons <strong>vos annonces</strong> en fonction de votre audience, mais aussi des <strong>mots-clés</strong> sur lesquels elle est susceptible de convertir.</p>
                                    <br/>
                                    <p>De plus, nous tenons compte des <strong>habitudes de navigation des utilisateurs</strong> afin d'être <strong>responsive sur tous les types d'écrans</strong>, <strong>smartphone</strong> comme <strong>ordinateur</strong>. Ceci vous permettra de maximiser l’efficacité de votre <strong>présence dans les SERP</strong>.</p>
                                </div>
                                <div label="DÉFINITION DE CONTENUS ADAPTÉS À ADWORDS SUR VOTRE SITE INTERNET">
                                    <p>Générer de l’efficacité pour votre <strong>projet webmarketing</strong> sans la réalisation de contenus adaptés est particulièrement compliqué. C’est pourquoi, la <strong>conception d’un contenu sur-mesure</strong> et construit pour <strong>générer des conversions sur votre site internet</strong> est privilégiée.</p>
                                    <br/>
                                    <p>Nous créons directement vos <strong>contenus optimisés</strong> pour répondre aux <strong>besoins des utilisateurs</strong> : de la <strong>définition de vos landing pages</strong> à la mise en place de <strong>call-to-action (CTA)</strong>, nous mettons toutes les chances de votre côté pour <strong>maximiser vos conversions</strong> et faire de votre projet une réussite.</p>
                                    <br/>
                                    <p>Les <strong>objectifs de conversion</strong> proposés seront à la base du paramétrage de votre <strong>affichage publicitaire dans les SERP</strong>, mais également de la <strong>conception de vos contenus web</strong> : appel, demande de devis, contacts, vente de produits, etc.</p>
                                    </div>
                            </Accordion>
                        </div>
                    </section>
                    <section className="flex w-full flex-col mx-auto px-0 py-6 my-4 lg:my-0">
                        <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10 lg:mb-2">
                            <h2 className="century text-3xl md:text-5xl text-black leading-none">Les dernières actualités</h2>
                            <br/>
                            <hr className="border-solid w-1/6 border-bleu"></hr>
                            
                        </section>
                    </section>
                    <section className="max-w-6xl mx-auto  flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <LastPosts lastposts={ this.props.data.allWordpressPost.edges } />
                        <div className="w-2/5 flex mx-auto flex-row justify-center items-center">
                        <RoundButton url="/actualite-digitale/" text="Accéder au Blog"/>
                        </div>
                        <br/>
                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsReferencementAds {
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
export default ReferencementAds;




