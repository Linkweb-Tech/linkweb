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

import Bg from "../images/background-agence-communication-toulouse.jpg";
import imac from "../images/agence-communication-toulouse.jpg";
import mac from "../images/agence-communication-digitale-toulouse.jpg";
import lious from "../images/lious-compagnie.png";
import valognes from "../images/valognes-menuiserie.png";
import savi from "../images/savi.png";

// import bgDev from '../images/bg-dev.jpg';
import bgDev from '../images/cta-background-agence-web.jpg';
import scroll from "../images/motiontest.svg";

class AgenceCommunicationToulouse extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence de communication à Toulouse - Linkweb"
                    description="Linkweb est une agence de communication digitale située à Toulouse : création de site internet, référencement naturel, community management."
                    url="https://linkweb.fr/agence-communication-toulouse/"
                    nom="Agence communication Toulouse"
                    slug="agence-communication-toulouse/"
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
                <section className="flex items-center w-full mx-auto pb-0 mt-40 mb-24 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + Bg + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                            <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Agence de Communication à Toulouse</h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Agence de communication à Toulouse spécialisée dans la stratégie digitale</h2>
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
                
                <section className="phototext">
                    <section className="text-center text-black text-4xl mx-auto flex-col flex items-center lg:mx-0 century mb-10">
                        <h2 className="century text-black leading-none">Développez votre communication digitale à Toulouse</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-white"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="text-xl max-w-5xl text-center century text-black px-4 pb-0">Dans un monde en perpétuel mouvement, investir le Web est indispensable pour les entreprises misant sur la communication pour faire de leur marque une référence.</h3>
                    </section>

                    <section className="w-full my-10 flex flex-col xl:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Agence de communication Linkweb" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10 mx-auto flex flex-col">
                            <div className="w-full flex-col flex md:flex-row">
                            <div className="w-full flex-col md:flex-row flex px-auto century">
                                <div className="blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                    <p>1</p>
                                </div>
                                <div className="w-full px-6 lg:px-6 flex flex-col century justify-center" style={{ maxWidth: '1000px' }}>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>DÉVELOPPEMENT DE SITES INTERNET
                                            </h3>

                                    <h4 className="font-bold">La création de site internet est un bon moyen d’installer durablement son entreprise sur le Web.</h4>
                                    <br />
                                    <p className="w-full century pb-4 text-justify">La <strong>création d’un site internet</strong> est indispensable pour promouvoir son activité, ses produits et services. Le site web vous permet d’être accessible auprès des utilisateurs à tout moment de la journée et n’importe quel jour de la semaine.
                                            </p>
                                    {/*<Button url="/referencement-de-site-internet-47-31/" text="Notre formule SEO" position="left" />*/}
                                    <br />
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>2</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col century justify-center">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>RÉFÉRENCEMENT NATUREL ET STRATÉGIE DE VISIBILITÉ
                                                </h3>

                                    <h4 className="font-bold">Avoir un site internet professionnel est fortement recommandé. Toutefois, ce dernier doit nécessairement être visible.</h4>
                                    <br />
                                    <p className="w-full century pb-4 text-justify">La mise en place d’une <strong>stratégie de visibilité basée sur le référencement naturel (SEO)</strong> permet d’exploiter tout le potentiel des <strong>moteurs de recherche</strong> et du trafic qu’ils génèrent quotidiennement. Il constitue l’entrée principale de votre site internet.
                                                </p>
                                    <br />
                                </div>
                            </div>
                            </div>
                            <div className="w-full flex flex-col md:flex-row">
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>3</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col century justify-center">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>SOCIAL MEDIA MARKETING
                                                </h3>

                                    <h4 className="font-bold">Les réseaux sociaux constituent un atout pour les entreprises souhaitant développer leur notoriété et asseoir leur image de marque.</h4>
                                    <br />
                                    <p className="century pb-4 text-justify">Élaborer une stratégie en accord avec des objectifs tels que la <strong>visibilité, la notoriété ou l’engagement</strong> auprès d’un public privilégié peut constituer un moteur pour développer votre <strong>communication digitale</strong>.
                                                </p>
                                    <br />
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>4</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center century">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>CRÉATION DE CONTENUS
                                                </h3>

                                    <h4 className="font-bold">Pour favoriser l’engagement de votre communauté ou sensibiliser les utilisateurs de votre site web à vos produits et services, le contenu est ROI.</h4>
                                    <br />
                                    <p className="century pb-4 text-justify">Produire un contenu engageant et qui répond parfaitement aux attentes des utilisateurs est un premier pas pour <strong>communiquer de manière efficace</strong>. Un contenu efficace est un contenu qui convertit. Pour cela, il est essentiel de <strong>bien connaître son public cible</strong> et de comprendre ses attentes.
                                                </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="bg-black">
                    <section className="sidetitle w-10/12 text-center text-white text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto bg-black">
                        <h2 className="century text-center max-w-5xl lg:text-left text-white text-3xl md:text-4xl leading-none">Notre agence de communication à Toulouse met son expertise au service de votre projet de communication</h2>
                        <br />
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br />
                        </div>
                    </section>
                    <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24 bg-black">
                        <div className="w-full xl:w-1/3 one px-auto">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                                <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                    <h3 className="century capitalize text-white text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>JE SOUHAITE SAVOIR CE QUE LA COMMUNICATION PEUT M’APPORTER
                                    </h3>
                                    <div className="century text-white content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                        La <strong>communication digitale</strong> est une discipline qui regorge de possibilités pour les entreprises. Elle constitue un moteur de développement indispensable pour déployer sa visibilité, sa notoriété et asseoir son <strong>image de marque</strong> auprès du public. En ciblant vos publics de manière astucieuse, vous pourrez développer de nouveaux revenus tout en les diversifiant en vue d’<strong>augmenter votre chiffre d’affaires</strong> et d’intégrer l’esprit des consommateurs.
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3 two px-auto">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
                                <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                    <h3 className="century capitalize text-white text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>JE VEUX ÊTRE ACCOMPAGNÉ POUR DÉVELOPPER MA STRATÉGIE
                                    </h3>
                                    <div className="century text-white content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                        Il existe mille et une façons de développer une <strong>stratégie de communication digitale</strong>. La meilleure stratégie est celle qui répondra à vos objectifs en tenant compte de vos besoins, mais aussi du secteur sur lequel vous souhaitez investir. Il est indispensable de bien comprendre votre marché pour vous <strong>positionner de manière stratégique</strong> au regard du consommateur. Nos experts vous accompagnent pour déterminer les contours de votre projet.
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3 three px-auto">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
                                <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                    <h3 className="century capitalize text-white text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>JE CHOISIS DES EXPERTS DU WEB POUR MON PROJET DIGITAL À TOULOUSE
                                    </h3>
                                    <div className="century text-white content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    Les consultants de notre <strong>agence de communication à Toulouse</strong> possèdent l’expérience et l’expertise pour vous proposer des <strong>solutions clé-en-main</strong>. De la compréhension de vos besoins à la mise en application de votre stratégie en passant par la définition du cadre de votre projet, nous sommes à vos côtés pour vous permettre d’atteindre vos objectifs et développer la renommée de votre entreprise à travers la <strong>communication digitale</strong>.
                                    </div>
                                </section>

                            </div>

                        </div>
                    </section>
                    <section className="-mt-32">
                    <Button url="/contact-agence-web-toulouse/" text="Prendre contact" position="center" color="white" />
                </section>
                </section>
                <section className="flex w-full flex-col mx-auto px-0 py-6 my-4">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10">
                        <h3 className="century max-w-5xl mx-auto items-center flex text-3xl md:text-4xl text-black leading-none">Depuis plus de 10 ans, l'agence de communication Linkweb accompagne les professionnels à Toulouse.</h3>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                    </section>
                </section>
                <section className="bloctextimg w-full md:w-10/12 mx-auto lg:block lg:mx-auto xl:w-full flex flex-col lg:flex-row justify-center">
                    <div className="w-full image lg:w-1/2 xl:w-2/5 lg:absolute flex justify-center lg:mt-48 xl:mt-24 pr-0 md:pr-16 lg:justify-center lg:items-center">
                        <img src={imac} alt="Agence communication Toulouse" style={{ maxHeight: '450px' }} />
                    </div>
                    <div className="text century w-full text-justify mr-16 lg:w-3/5 xl:w-2/5 md:p-20 lg:pl-32 p-10 lg:py-10 text-black text-sm xl:text-md bg-bleu">
                        <h4 className="font-bold text-xl">Spécialisés dans la communication digitale et le webmarketing, nous proposons une large gamme de services à nos clients, de la création de sites internet à la publicité en ligne.</h4>
                        <br />
                        <p style={{ fontSize: '16px' }}>
                                Au fil des années, nous avons eu l'occasion de travailler avec une grande variété d'entreprises, de la petite entreprise à la grande société. Dans chaque projet, notre objectif est d'aider nos clients à <strong>atteindre leurs objectifs de communication</strong>, qu'il s'agisse d'accroître leur visibilité en ligne, de générer des prospects ou des ventes, ou d'améliorer leurs relations avec leurs clients.<br />
                                <br />
                                La <strong>communication digitale</strong> est une nouvelle étape dans le <strong>développement d’une entreprise</strong>. Avec l'avènement de la communication digitale, les entreprises sont désormais en mesure d'atteindre un public plus large, plus rapidement et plus facilement. <br />
                                <br />
                                De plus, elle offre un certain nombre d'avantages, notamment la possibilité de toucher un public mondial, d'entrer en contact avec les clients 24 heures sur 24 et 7 jours sur 7 et de suivre les résultats en temps réel.<br />
                                <br />
                                Faites de votre marque une référence dans votre secteur d’activité et faites grandir votre chiffre d’affaires en développant votre <strong>projet de communication digitale</strong> avec les <strong>experts de Linkweb</strong>.
                        </p>
                    </div>

                    <br />
                </section>
                <section className="bg-darkgrey sidetitle mt-24 py-10">
                    <section className="w-full lg:w-2/3 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
                        <h2 className="century text-center lg:text-left text-white text-3xl md:text-4xl leading-none">La qualité est au coeur des préoccupations de l’agence de communication toulousaine Linkweb</h2>
                        <br />
                        <div className="line-title my-4 ">
                            <br />
                            <hr className="w-1/2 border-bleu lg:w-1/12" />
                            <br />
                            <h3 /*data-aos='fade-left'*/ className="text-xl text-white century pb-0">Notre agence de communication est spécialisée dans les problématiques du web. C’est pourquoi, l’accent est mis sur la qualité de chaque réalisation.</h3>
                        </div>
                    </section>
                    <section className="flex justify-center flex-col items-center">
                        <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 text-white century text-center lg:text-left">
                                <br />
                                <svg width="50px" className="lg:mx-0 -mt-4 mx-auto block" viewBox="0 0 100 125"><g><path fill="#ffffff" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   " /><path fill="#ffffff" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z" /><g><path fill="#ffffff" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z" /><rect x="72.041" y="56.851" width="0.312" height="5.159" /></g><path fill="#ffffff" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z" /><path fill="#ffffff" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z" /></g></svg>                                
                                <h4 className="font-bold century -mt-4 text-bleu"><span className="font-bold">Site internet sur-mesure</span></h4>
                                <p>Les <strong>agences comme Linkweb</strong> définissent le type de site internet adapté à votre structure. Nos réalisations sont originales et ont pour objectif de refléter votre <strong>image de marque</strong> sur un support abouti.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#ffffff" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z"></path></g></g><g><g><path fill="#ffffff" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z"></path></g></g><g><g><path fill="#ffffff" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z"></path></g></g></g></svg>
                                <h4 className="font-bold century -mt-4 text-bleu"><span className="font-bold">Optimisation pour le référencement</span></h4>
                                <p>Nous optimisons chacun des <strong>pages de votre site web</strong> pour le référencement naturel. Ce travail est nécessaire pour facilité l’accessibilité et la lecture de vos pages par les <strong>robots des moteurs de recherche comme Google</strong>.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg viewBox="0 0 28 35" width="30px" className="mx-auto md:ml-0 block"><g fill="#ffffff" ><g><path d="M25.63,8.16 C25.3791233,8.2736063 25.2673479,8.56869337 25.38,8.82 C27.9835268,14.4995076 26.0128726,21.2291511 20.7570105,24.607179 C15.5011485,27.9852068 8.56093161,26.9827248 4.47584423,22.2554403 C0.390756842,17.5281557 0.405052352,10.5159253 4.50938029,5.80533611 C8.61370823,1.09474697 15.5579549,0.120570547 20.8,3.52 L20.23,4.09 C20.1366875,4.18292491 20.082937,4.30834272 20.08,4.44 L20.08,7.21 L19.64,7.65 C16.6439961,4.99569867 12.201052,4.79450437 8.97740753,7.1671551 C5.75376307,9.53980583 4.62518012,13.8417277 6.26892868,17.4913093 C7.91267724,21.1408909 11.882203,23.1466567 15.7953676,22.3049336 C19.7085322,21.4632105 22.5022531,18.0026679 22.5,14 C22.5060564,12.6917472 22.2046221,11.4003755 21.62,10.23 C21.5479513,10.0569807 21.3851924,9.93878386 21.1983704,9.92380916 C21.0115484,9.90883447 20.8320405,9.99959693 20.733352,10.1589308 C20.6346636,10.3182647 20.6333696,10.5194096 20.73,10.68 C22.4788666,14.1666095 21.2961553,18.4112488 17.9962719,20.4910925 C14.6963885,22.5709362 10.3568052,21.8068773 7.96572517,18.7250408 C5.57464511,15.6432043 5.91279959,11.2498661 8.74733809,8.57024454 C11.5818766,5.89062297 15.9872705,5.79966346 18.93,8.36 L16.09,11.21 C14.7906587,10.2456333 12.9988445,10.3008705 11.7613722,11.3434409 C10.5238998,12.3860114 10.1653515,14.1424545 10.8951986,15.58662 C11.6250458,17.0307856 13.2518533,17.7838768 14.8252069,17.4059224 C16.3985604,17.0279679 17.5057779,15.6181031 17.5,14 C17.5,13.7238576 17.2761424,13.5 17,13.5 C16.7238576,13.5 16.5,13.7238576 16.5,14 C16.5,15.3807119 15.3807119,16.5 14,16.5 C12.6192881,16.5 11.5,15.3807119 11.5,14 C11.5,12.6192881 12.6192881,11.5 14,11.5 C14.4897484,11.5018497 14.9686885,11.6441435 15.38,11.91 L13.65,13.65 C13.5533228,13.7407333 13.4984814,13.8674141 13.4984814,14 C13.4984814,14.1325859 13.5533228,14.2592667 13.65,14.35 C13.7407333,14.4466772 13.8674141,14.5015186 14,14.5015186 C14.1325859,14.5015186 14.2592667,14.4466772 14.35,14.35 L20,8.7 L20.78,7.92 L23.55,7.92 C23.6816573,7.917063 23.8070751,7.86331251 23.9,7.77 L27.36,4.31 C27.5066366,4.17107596 27.5506083,3.95521467 27.47,3.77 C27.3919291,3.57989638 27.2054872,3.45692403 27,3.46 L24.54,3.46 L24.54,1 C24.5389924,0.798149057 24.4167128,0.616701799 24.23,0.54 C24.0447853,0.459391664 23.828924,0.503363408 23.69,0.65 L21.52,2.8 C15.9401207,-0.926846735 8.46694245,0.0290172714 4.00472299,5.04030825 C-0.457496475,10.0515992 -0.543590257,17.5851679 3.8029405,22.6971255 C8.14947127,27.809083 15.5988534,28.9354824 21.2624452,25.3371263 C26.9260371,21.7387701 29.0711253,14.516536 26.29,8.41 C26.1763937,8.15912326 25.8813066,8.04734786 25.63,8.16 Z M23.35,6.92 L21.79,6.92 L24.25,4.46 L25.81,4.46 L23.35,6.92 Z M23.54,3.75 L21.08,6.21 L21.08,4.65 L23.54,2.19 L23.54,3.75 Z" /></g></g></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Développement stratégique</span></h4>
                                <p>En tant qu’<strong>agence de conseil en communication digitale à Toulouse</strong>, nous vous accompagnons pour développer une stratégie en total accord avec vos objectifs, vos besoins, vos moyens ainsi que la réalité du marché.</p>
                            </div>
                        </div>
                        <div className="w-full text-white flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                            <div className="w-full svgtransform -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="mx-auto md:ml-0 block" fill="#ffffff" viewBox="0 0 100 125"><path d="M50.3383789,43.5737305c1.6616211,0,3.215332,0.8461914,4.2636719,2.3217773  c0.3208008,0.449707,0.9443359,0.5561523,1.3945312,0.2363281c0.4501953-0.3203125,0.5561523-0.9443359,0.2363281-1.3945312  c-1.4287109-2.0107422-3.5771484-3.1635742-5.8945312-3.1635742c-3.2249756,0-5.9712524,2.2554321-7.0158691,5.3994141H42.043457  c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1h0.859314c-0.0228882,0.260498-0.0365601,0.5240479-0.0365601,0.7910156  c0,0.3817139,0.0322876,0.7545776,0.0786133,1.1225586H42.043457c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1h1.3900146  c1.1224976,2.9710693,3.793457,5.0678711,6.9049072,5.0678711c2.3178711,0,4.4663086-1.1533203,5.8945312-3.1635742  c0.3198242-0.4501953,0.2138672-1.074707-0.2363281-1.3945312c-0.4501953-0.3188477-1.0737305-0.2138672-1.3945312,0.2363281  C53.5541992,55.1083984,52,55.9545898,50.3383789,55.9545898c-2.0101929,0-3.7658691-1.2359009-4.7171631-3.0678711h3.2454834  c0.5522461,0,1-0.4477539,1-1s-0.4477539-1-1-1h-3.9058228c-0.0593872-0.364624-0.0946655-0.7387695-0.0946655-1.1225586  c0-0.2685547,0.0203247-0.5313721,0.0498047-0.7910156h3.9506836c0.5522461,0,1-0.4477539,1-1s-0.4477539-1-1-1h-3.406189  C46.364502,44.9595947,48.2089233,43.5737305,50.3383789,43.5737305z"></path><path d="M50,36.3857422c-7.5068359,0-13.6142578,6.1074219-13.6142578,13.6142578S42.4931641,63.6142578,50,63.6142578  S63.6142578,57.5068359,63.6142578,50S57.5068359,36.3857422,50,36.3857422z M50,61.6142578  c-6.4042969,0-11.6142578-5.2099609-11.6142578-11.6142578S43.5957031,38.3857422,50,38.3857422  S61.6142578,43.5957031,61.6142578,50S56.4042969,61.6142578,50,61.6142578z"></path><path d="M50,31.1928711c-10.362793,0-18.793457,8.4370117-18.793457,18.8071289S39.637207,68.8071289,50,68.8071289  S68.793457,60.3701172,68.793457,50S60.362793,31.1928711,50,31.1928711z M50,66.8071289  c-9.2597656,0-16.793457-7.5395508-16.793457-16.8071289S40.7402344,33.1928711,50,33.1928711S66.793457,40.7324219,66.793457,50  S59.2597656,66.8071289,50,66.8071289z"></path><path d="M56.3666992,16.3364258C56.3666992,12.8422852,53.5107422,10,50,10s-6.3666992,2.8422852-6.3666992,6.3364258  S46.4892578,22.6733398,50,22.6733398S56.3666992,19.8305664,56.3666992,16.3364258z M45.6333008,16.3364258  C45.6333008,13.9453125,47.5922852,12,50,12s4.3666992,1.9453125,4.3666992,4.3364258  c0,2.3916016-1.9589844,4.3369141-4.3666992,4.3369141S45.6333008,18.7280273,45.6333008,16.3364258z"></path><path d="M80.1552734,26.2084961c-0.0048828-1.6953125-0.6694336-3.2910156-1.8710938-4.4926758  s-2.7973633-1.8662109-4.4926758-1.8710938c-0.0063477,0-0.012207,0-0.0185547,0  c-1.690918,0-3.2783203,0.6567383-4.4711914,1.8500977c-1.1977539,1.1972656-1.8544922,2.7919922-1.8496094,4.4892578  c0.0043945,1.6953125,0.6689453,3.2910156,1.8710938,4.4926758c1.2016602,1.2021484,2.7973633,1.8666992,4.4926758,1.8710938  c0.0058594,0,0.012207,0,0.0180664,0c1.690918,0,3.2783203-0.65625,4.4711914-1.8496094  C79.5029297,29.5009766,80.1601562,27.90625,80.1552734,26.2084961z M76.8911133,29.2841797  c-0.8154297,0.8154297-1.9008789,1.2636719-3.0571289,1.2636719c-0.0043945,0-0.0083008,0-0.0126953,0  c-1.1630859-0.0029297-2.2583008-0.4594727-3.0839844-1.2851562s-1.2822266-1.9208984-1.2851562-3.0839844  c-0.003418-1.1611328,0.4453125-2.2514648,1.2636719-3.0698242c0.8154297-0.8154297,1.9008789-1.2641602,3.0576172-1.2641602  c0.0039062,0,0.0083008,0,0.012207,0c1.1635742,0.003418,2.2587891,0.4599609,3.0844727,1.2851562  c0.8251953,0.8256836,1.2817383,1.9208984,1.2851562,3.0844727C78.1586914,27.3754883,77.7094727,28.4658203,76.8911133,29.2841797z  "></path><path d="M83.6635742,43.6333008c-3.4941406,0-6.3369141,2.855957-6.3369141,6.3666992s2.8427734,6.3666992,6.3369141,6.3666992  S90,53.5107422,90,50S87.1577148,43.6333008,83.6635742,43.6333008z M83.6635742,54.3666992  c-2.3916016,0-4.3369141-1.9589844-4.3369141-4.3666992s1.9453125-4.3666992,4.3369141-4.3666992  C86.0546875,45.6333008,88,47.5922852,88,50S86.0546875,54.3666992,83.6635742,54.3666992z"></path><path d="M73.8339844,67.4521484c-0.0058594,0-0.012207,0-0.0180664,0c-1.6953125,0.0043945-3.2910156,0.6689453-4.4926758,1.8710938  c-1.2021484,1.2016602-1.8666992,2.7973633-1.8710938,4.4926758c-0.0048828,1.6972656,0.6518555,3.2919922,1.8496094,4.4892578  c1.1928711,1.1933594,2.7802734,1.8500977,4.4711914,1.8500977c0.0063477,0,0.012207,0,0.0185547,0  c1.6953125-0.0048828,3.2910156-0.6694336,4.4926758-1.8710938s1.8662109-2.7973633,1.8710938-4.4926758  c0.0048828-1.6977539-0.6523438-3.2924805-1.8500977-4.4897461C77.1118164,68.1083984,75.5249023,67.4521484,73.8339844,67.4521484z   M76.8701172,76.8701172c-0.8256836,0.8251953-1.9208984,1.2817383-3.0844727,1.2851562c-0.0039062,0-0.0083008,0-0.012207,0  c-1.1567383,0-2.2421875-0.4487305-3.0576172-1.2641602c-0.8183594-0.8183594-1.2670898-1.9086914-1.2636719-3.0698242  c0.0029297-1.1630859,0.4594727-2.2583008,1.2851562-3.0839844s1.9208984-1.2822266,3.0839844-1.2851562  c0.0043945,0,0.0083008,0,0.0126953,0c1.15625,0,2.2416992,0.4482422,3.0571289,1.2636719  c0.8183594,0.8183594,1.2675781,1.9086914,1.2641602,3.0698242C78.1518555,74.9492188,77.6953125,76.0444336,76.8701172,76.8701172z  "></path><path d="M56.3666992,83.6635742c0-3.4941406-2.855957-6.3369141-6.3666992-6.3369141s-6.3666992,2.8427734-6.3666992,6.3369141  S46.4892578,90,50,90S56.3666992,87.1577148,56.3666992,83.6635742z M50,88c-2.4077148,0-4.3666992-1.9453125-4.3666992-4.3364258  c0-2.3916016,1.9589844-4.3369141,4.3666992-4.3369141s4.3666992,1.9453125,4.3666992,4.3369141  C54.3666992,86.0546875,52.4077148,88,50,88z"></path><path d="M26.184082,67.4521484c-0.0058594,0-0.012207,0-0.0180664,0c-1.690918,0-3.2783203,0.65625-4.4711914,1.8496094  c-1.1977539,1.1972656-1.8549805,2.7919922-1.8500977,4.4897461c0.0048828,1.6953125,0.6694336,3.2910156,1.8710938,4.4926758  s2.7973633,1.8662109,4.4926758,1.8710938c0.0063477,0,0.012207,0,0.0185547,0c1.690918,0,3.2783203-0.6567383,4.4711914-1.8500977  c1.1977539-1.1972656,1.8544922-2.7919922,1.8496094-4.4892578c-0.0043945-1.6953125-0.6689453-3.2910156-1.8710938-4.4926758  C29.4750977,68.1210938,27.8793945,67.456543,26.184082,67.4521484z M29.2841797,76.8911133  c-0.8154297,0.8154297-1.9008789,1.2641602-3.0576172,1.2641602c-0.0039062,0-0.0083008,0-0.012207,0  c-1.1635742-0.003418-2.2587891-0.4599609-3.0844727-1.2851562c-0.8251953-0.8256836-1.2817383-1.9208984-1.2851562-3.0844727  c-0.003418-1.1611328,0.4458008-2.2514648,1.2641602-3.0698242c0.8154297-0.8154297,1.9008789-1.2636719,3.0571289-1.2636719  c0.0043945,0,0.0083008,0,0.0126953,0c1.1630859,0.0029297,2.2583008,0.4594727,3.0839844,1.2851562  s1.2822266,1.9208984,1.2851562,3.0839844C30.5512695,74.9824219,30.1025391,76.0727539,29.2841797,76.8911133z"></path><path d="M10,50c0,3.5107422,2.8422852,6.3666992,6.3364258,6.3666992S22.6733398,53.5107422,22.6733398,50  s-2.8427734-6.3666992-6.3369141-6.3666992S10,46.4892578,10,50z M20.6733398,50  c0,2.4077148-1.9453125,4.3666992-4.3369141,4.3666992C13.9453125,54.3666992,12,52.4077148,12,50  s1.9453125-4.3666992,4.3364258-4.3666992C18.7280273,45.6333008,20.6733398,47.5922852,20.6733398,50z"></path><path d="M30.6982422,21.6948242c-1.1928711-1.1933594-2.7802734-1.8500977-4.4711914-1.8500977c-0.0063477,0-0.012207,0-0.0185547,0  c-1.6953125,0.0048828-3.2910156,0.6694336-4.4926758,1.8710938s-1.8662109,2.7973633-1.8710938,4.4926758  c-0.0048828,1.6977539,0.6523438,3.2924805,1.8500977,4.4897461c1.1933594,1.1933594,2.7802734,1.8496094,4.4711914,1.8496094  c0.0058594,0,0.012207,0,0.0180664,0c1.6953125-0.0043945,3.2910156-0.6689453,4.4926758-1.8710938  c1.2021484-1.2016602,1.8666992-2.7973633,1.8710938-4.4926758C32.5527344,24.4868164,31.8959961,22.8920898,30.6982422,21.6948242z   M29.2626953,29.2626953c-0.8256836,0.8256836-1.9208984,1.2822266-3.0839844,1.2851562c-0.0043945,0-0.0083008,0-0.0126953,0  c-1.15625,0-2.2416992-0.4482422-3.0571289-1.2636719c-0.8183594-0.8183594-1.2675781-1.9086914-1.2641602-3.0698242  c0.003418-1.1635742,0.4599609-2.2587891,1.2851562-3.0844727c0.8256836-0.8251953,1.9208984-1.2817383,3.0844727-1.2851562  c0.0039062,0,0.0083008,0,0.012207,0c1.1567383,0,2.2421875,0.4487305,3.0576172,1.2641602  c0.8183594,0.8183594,1.2670898,1.9086914,1.2636719,3.0698242C30.5449219,27.3417969,30.0883789,28.4370117,29.2626953,29.2626953z  "></path><path d="M32.7509766,21.0688477c0.1831055,0.328125,0.5234375,0.5126953,0.8740234,0.5126953  c0.1650391,0,0.3320312-0.0405273,0.4863281-0.1269531c2.0742188-1.1577148,4.2802734-2.0878906,6.5556641-2.765625  c0.5292969-0.1577148,0.8310547-0.7143555,0.6733398-1.2436523c-0.1582031-0.5302734-0.7167969-0.8320312-1.2436523-0.6733398  c-2.4165039,0.7192383-4.7578125,1.7075195-6.9599609,2.9365234C32.6542969,19.9775391,32.4814453,20.5864258,32.7509766,21.0688477  z"></path><path d="M65.4521484,21.2236328c0.1513672,0.0820312,0.3144531,0.1206055,0.4750977,0.1206055  c0.3554688,0,0.699707-0.1894531,0.8803711-0.5239258c0.2626953-0.4858398,0.0820312-1.0927734-0.4033203-1.3554688  c-2.2148438-1.1987305-4.5688477-2.1557617-6.9970703-2.8452148c-0.5317383-0.1489258-1.0839844,0.1582031-1.2348633,0.6889648  c-0.1508789,0.53125,0.1577148,1.0839844,0.6889648,1.2348633C61.1484375,19.1928711,63.3662109,20.0947266,65.4521484,21.2236328z"></path><path d="M81.1860352,40.5419922c0.1293945,0.4345703,0.5273438,0.715332,0.9580078,0.715332  c0.0947266,0,0.1904297-0.0136719,0.2856445-0.0419922c0.5292969-0.1577148,0.8310547-0.7143555,0.6733398-1.2436523  c-0.7192383-2.4165039-1.7075195-4.7578125-2.9365234-6.9599609c-0.269043-0.4829102-0.8779297-0.6552734-1.3603516-0.3857422  c-0.4824219,0.269043-0.6552734,0.8779297-0.3857422,1.3603516C79.578125,36.0605469,80.5083008,38.2666016,81.1860352,40.5419922z"></path><path d="M79.5297852,66.8032227c0.3554688,0,0.699707-0.1894531,0.8803711-0.5239258  c1.1987305-2.215332,2.15625-4.5693359,2.8452148-6.9970703c0.1508789-0.53125-0.1577148-1.0839844-0.6889648-1.2348633  c-0.5307617-0.1499023-1.0834961,0.1577148-1.2348633,0.6889648c-0.6494141,2.2866211-1.5512695,4.5043945-2.6801758,6.5908203  c-0.2626953,0.4858398-0.0820312,1.0927734,0.4033203,1.3554688C79.2060547,66.7646484,79.3691406,66.8032227,79.5297852,66.8032227  z"></path><path d="M65.8886719,78.2954102c-2.0742188,1.1577148-4.2802734,2.0878906-6.5556641,2.765625  c-0.5292969,0.1577148-0.8310547,0.7143555-0.6733398,1.2436523c0.1293945,0.4345703,0.5273438,0.715332,0.9580078,0.715332  c0.0947266,0,0.1904297-0.0136719,0.2856445-0.0419922c2.4165039-0.7192383,4.7578125-1.7075195,6.9599609-2.9365234  c0.4824219-0.269043,0.6552734-0.8779297,0.3857422-1.3603516C66.9794922,78.1982422,66.3706055,78.0258789,65.8886719,78.2954102z"></path><path d="M40.5927734,83.1303711c0.0913086,0.0258789,0.1831055,0.0385742,0.2734375,0.0385742  c0.4360352,0,0.8364258-0.2875977,0.9614258-0.7275391c0.1508789-0.53125-0.1577148-1.0839844-0.6889648-1.2348633  c-2.2866211-0.6494141-4.5043945-1.5512695-6.5908203-2.6801758c-0.4863281-0.2636719-1.0927734-0.0820312-1.3554688,0.4033203  c-0.2626953,0.4858398-0.0820312,1.0927734,0.4033203,1.3554688C35.8110352,81.4838867,38.1650391,82.4414062,40.5927734,83.1303711  z"></path><path d="M21.1938477,67.1240234c0.4824219-0.269043,0.6552734-0.8779297,0.3857422-1.3603516  c-1.1577148-2.0742188-2.0878906-4.2802734-2.765625-6.5556641c-0.1582031-0.5302734-0.7172852-0.831543-1.2436523-0.6733398  c-0.5292969,0.1577148-0.8310547,0.7143555-0.6733398,1.2436523c0.7192383,2.4165039,1.7075195,4.7578125,2.9365234,6.9599609  c0.1831055,0.328125,0.5234375,0.5126953,0.8740234,0.5126953C20.8725586,67.2509766,21.0395508,67.2104492,21.1938477,67.1240234z"></path><path d="M17.4335938,41.7026367c0.0913086,0.0258789,0.1831055,0.0385742,0.2734375,0.0385742  c0.4360352,0,0.8364258-0.2875977,0.9614258-0.7275391c0.6494141-2.2866211,1.5512695-4.5043945,2.6801758-6.5908203  c0.2626953-0.4858398,0.0820312-1.0927734-0.4033203-1.3554688c-0.4858398-0.2631836-1.0927734-0.0820312-1.3554688,0.4033203  c-1.1987305,2.215332-2.15625,4.5693359-2.8452148,6.9970703C16.59375,40.9990234,16.9023438,41.5517578,17.4335938,41.7026367z"></path></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Gestion de projet publicitaire</span></h4>
                                <p>Nos experts gèrent votre <strong>compte publicitaire Google Ads</strong> pour vous permettre d’obtenir de la visibilité rapidement en fonction de votre budget et des opportunités qui se présentent sur le <strong>moteur de recherche</strong>.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                            <svg width="50px" className="mx-auto md:ml-0 block" fill="#ffffff" viewBox="0 0 700 700">
                                <g><path d="m615.48 543.41h-8.625c0.76953-1.2773 1.2422-2.7539 1.2422-4.3516v-19.52c0-4.668-3.7969-8.4648-8.4609-8.4648-0.53125 0-22.531-0.019531-22.023-0.019531v-364.96c0-11.895-9.6758-21.57-21.57-21.57l-110.3 0.003906c0.027344-0.33203 0.078125-0.65625 0.078125-0.99609v-65.125c0-6.3828-5.1914-11.574-11.574-11.574h-64.77v-22.828c0-6.3711-5.1602-11.559-11.508-11.559h-102.67c-6.375 0-11.562 5.1875-11.562 11.562l0.003906 65.125c0 6.3477 5.1836 11.508 11.562 11.508h7.7266v19.996c0 1.1484 0.93359 2.0742 2.0742 2.0742 0.4375 0 0.875-0.14063 1.2383-0.41016l29.098-21.66h24.609v22.887c0 0.33984 0.050781 0.66406 0.078124 0.99609h-176.21c-11.875 0-21.531 9.6562-21.531 21.527v282.17l-18.723 0.007812c-6.1133 0-11.086 4.9727-11.086 11.086v97.156c0 2.6406 0.96484 5.0352 2.5117 6.9375h-10.574c-1.1445 0-2.0742 0.92578-2.0742 2.0742 0 1.1445 0.92578 2.0742 2.0742 2.0742h530.96c1.1445 0 2.0742-0.92578 2.0742-2.0742-0.003906-1.1445-0.92969-2.0742-2.0781-2.0742zm-59.398-0.042969h-163.9v-11.988l170-0.042969v10.844c-1.9336 0.73438-3.957 1.1875-6.0977 1.1875zm-168.05-0.97266-17.195-6.7695v-12.676l17.195-6.7617zm-33.297-13.109 11.949-4.707v9.4102zm207.44-2.0938h-170v-11.988h170zm24.082-11.969h13.371c2.3789 0 4.3125 1.9375 4.3125 4.3164v19.52c0 2.3789-1.9375 4.3164-4.3125 4.3164h-13.371zm-4.1562 28.172h-15.766v-28.188h5.8086v14.062h4.1484v-14.062h5.8086zm-287.35-446.89c-0.44531 0-0.87891 0.14453-1.2383 0.41016l-26.336 19.605v-17.941c0-1.1445-0.92578-2.0742-2.0742-2.0742h-9.8008c-4.1562 0-7.4141-3.2344-7.4141-7.3594v-65.133c0-4.0859 3.3281-7.4102 7.4141-7.4102h102.67c4.0586 0 7.3594 3.3242 7.3594 7.4141v65.125c0 4.0586-3.3008 7.3594-7.3594 7.3594-6.7812 0.003906-57.473 0.003906-63.219 0.003906zm63.219 4.1484c5.6211 0 10.293-4.0508 11.293-9.3828h47.73c1.1445 0 2.0742-0.92578 2.0742-2.0742 0-1.1445-0.92578-2.0742-2.0742-2.0742h-47.516v-14.23h16.484c1.1445 0 2.0742-0.92578 2.0742-2.0742 0-1.1445-0.92578-2.0742-2.0742-2.0742h-16.484v-17.754h64.77c4.0938 0 7.4258 3.332 7.4258 7.4258v65.125c0 0.85547-0.12891 1.6602-0.38672 2.3945-1.0195 2.9609-3.8516 4.9492-7.0391 4.9492h-9.793c-1.1445 0-2.0742 0.92578-2.0742 2.0742v17.934l-26.352-19.598c-0.35547-0.26562-0.78906-0.41016-1.2344-0.41016h-63.211c-3.168 0-5.9844-1.9883-7-4.9531-0.25391-0.73047-0.38672-1.5352-0.38672-2.3867v-22.891zm65.246 56.035c0.36328 0.26953 0.80078 0.41016 1.2383 0.41016 1.1406 0 2.0742-0.92188 2.0742-2.0742v-3.4023h120.92c4.5977 0 8.3359 3.7578 8.3359 8.4219 0 4.5977-3.7383 8.3359-8.3359 8.3359h-226.53c-4.5977 0-8.3359-3.7383-8.3359-8.3789 0-4.6211 3.7383-8.3789 8.3359-8.3789h95.492zm-279.3-28.004h177.35c1.9297 3.8438 5.8945 6.3477 10.312 6.3477h62.531l16.723 12.445-89.918-0.003906c-6.8828 0-12.484 5.6211-12.484 12.57 0 6.8828 5.6016 12.484 12.484 12.484h226.53c6.8828 0 12.484-5.6016 12.484-12.527 0-6.9062-5.6016-12.527-12.484-12.527h-120.92v-12.445h7.7188c4.4375 0 8.418-2.5039 10.352-6.3477h111.43c9.6094 0 17.422 7.8125 17.422 17.422v45.297h-446.92v-45.336c0-9.582 7.7969-17.379 17.383-17.379zm-17.383 66.863h446.92v315.51c-38.203 0-172.57 0-183.35-0.003906-0.25781 0-0.51953 0.046875-0.76172 0.14453-4.3984 1.7305-43.789 17.258-41.266 16.273l0.003906 0.007812c-1.6016 0.85938-1.2578 3.1875 0.17578 3.75l30.883 12.141h-163.54c1.5234-1.8984 2.4766-4.2773 2.4766-6.8984v-26.246h142.79c1.1445 0 2.0742-0.92578 2.0742-2.0742 0-1.1445-0.92578-2.0742-2.0742-2.0742h-142.79v-21.777h329.16c1.1445 0 2.0742-0.92578 2.0742-2.0742 0-1.1445-0.92578-2.0742-2.0742-2.0742l-329.16 0.003907v-21.777h329.16c1.1445 0 2.0742-0.92578 2.0742-2.0742 0-1.1445-0.92578-2.0742-2.0742-2.0742h-329.16v-14.91c0-2.6055-0.94141-4.9727-2.4531-6.8672h331.61c1.1445 0 2.0742-0.92578 2.0742-2.0742 0-1.1445-0.92578-2.0742-2.0742-2.0742-31.898-0.003906-300.62-0.050781-420.7-0.070313zm-22.871 236.84h49.27c0.11719 0.019531 0.22656 0.070312 0.34766 0.070312h54.41c3.4961 0.35938 6.2383 3.2812 6.2383 6.8672v77.594l-21.965-21.965c-0.80859-0.80859-2.1211-0.80859-2.9336-0.003906l-18.855 18.816-30.906-36.797c-0.39063-0.46094-0.96094-0.73438-1.5664-0.73828-0.51953-0.042969-1.1836 0.25-1.5781 0.70703l-39.398 45.012v-82.629c-0.003907-3.8203 3.1094-6.9336 6.9375-6.9336zm0 111.03c-3.8281 0-6.9375-3.1133-6.9375-6.9375v-8.2305l40.926-46.758c73.801 87.879-10.062-11.965 38.594 45.879 0.75 0.87891 2.0547 0.98047 2.9258 0.24219 0.875-0.73828 0.98047-2.0469 0.24219-2.9219l-6.5508-7.7344 17.637-17.602 23.43 23.434v13.695c0 3.8242-3.1094 6.9375-6.9375 6.9375z"/><path d="m170.83 172.52c6.8906 0 12.492-5.6211 12.492-12.535 0-6.8867-5.6016-12.492-12.492-12.492s-12.492 5.6055-12.492 12.492c0 6.9102 5.6016 12.535 12.492 12.535zm0-20.883c4.6016 0 8.3438 3.7422 8.3438 8.3438 0 4.625-3.7422 8.3867-8.3438 8.3867-4.6016 0-8.3438-3.7617-8.3438-8.3867 0-4.5977 3.7422-8.3438 8.3438-8.3438z"/>
                                <path d="m204.12 172.52c6.8906 0 12.492-5.6211 12.492-12.535 0-6.8867-5.6016-12.492-12.492-12.492s-12.492 5.6055-12.492 12.492c0 6.9102 5.6016 12.535 12.492 12.535zm0-20.883c4.6016 0 8.3438 3.7422 8.3438 8.3438 0 4.625-3.7422 8.3867-8.3438 8.3867s-8.3438-3.7617-8.3438-8.3867c0-4.5977 3.7422-8.3438 8.3438-8.3438z"/>
                                <path d="m237.43 172.52c6.8906 0 12.492-5.6211 12.492-12.535 0-6.8867-5.6016-12.492-12.492-12.492s-12.492 5.6055-12.492 12.492c0 6.9102 5.6016 12.535 12.492 12.535zm0-20.883c4.6016 0 8.3438 3.7422 8.3438 8.3438 0 4.625-3.7422 8.3867-8.3438 8.3867-4.6016 0-8.3438-3.7617-8.3438-8.3867-0.003906-4.5977 3.7422-8.3438 8.3438-8.3438z"/>
                                <path d="m162.9 356.22h125.86c6.457 0 11.711-5.2539 11.711-11.711v-113.46c0-6.457-5.2539-11.711-11.711-11.711h-125.86c-6.457 0-11.711 5.2539-11.711 11.711v113.46c0 6.4609 5.2539 11.715 11.711 11.715zm-7.5625-125.17c0-4.1719 3.3945-7.5625 7.5625-7.5625h125.86c4.168 0 7.5625 3.3945 7.5625 7.5625v113.46c0 4.1719-3.3945 7.5625-7.5625 7.5625l-125.86 0.003906c-4.168 0-7.5625-3.3945-7.5625-7.5625z"/>
                                <path d="m325.92 236.97h221.31c1.1445 0 2.0742-0.92578 2.0742-2.0742 0-1.1445-0.92578-2.0742-2.0742-2.0742h-221.31c-1.1445 0-2.0742 0.92578-2.0742 2.0742 0 1.1484 0.92578 2.0742 2.0742 2.0742z"/>
                                <path d="m325.92 263.41h221.31c1.1445 0 2.0742-0.92578 2.0742-2.0742 0-1.1445-0.92578-2.0742-2.0742-2.0742h-221.31c-1.1445 0-2.0742 0.92578-2.0742 2.0742 0 1.1484 0.92578 2.0742 2.0742 2.0742z"/>
                                <path d="m325.92 289.85h221.31c1.1445 0 2.0742-0.92578 2.0742-2.0742 0-1.1445-0.92578-2.0742-2.0742-2.0742h-221.31c-1.1445 0-2.0742 0.92578-2.0742 2.0742 0 1.1445 0.92578 2.0742 2.0742 2.0742z"/>
                                <path d="m325.92 316.29h221.31c1.1445 0 2.0742-0.92578 2.0742-2.0742 0-1.1445-0.92578-2.0742-2.0742-2.0742h-221.31c-1.1445 0-2.0742 0.92578-2.0742 2.0742 0 1.1445 0.92578 2.0742 2.0742 2.0742z"/>
                                <path d="m325.92 342.72h128.67c1.1445 0 2.0742-0.92578 2.0742-2.0742 0-1.1445-0.92578-2.0742-2.0742-2.0742l-128.67 0.003906c-1.1445 0-2.0742 0.92578-2.0742 2.0742 0 1.1445 0.92578 2.0703 2.0742 2.0703z"/>
                                <path d="m549.31 400.87v-15.254c0-3.4297-2.793-6.2227-6.2227-6.2227l-385.66-0.003906c-3.4297 0-6.2227 2.793-6.2227 6.2227v15.254c0 3.4297 2.793 6.2227 6.2227 6.2227h385.66c3.4336 0 6.2227-2.7891 6.2227-6.2188zm-393.95 0v-15.254c0-1.1445 0.93359-2.0742 2.0742-2.0742h385.66c1.1406 0 2.0742 0.92969 2.0742 2.0742v15.254c0 1.1445-0.93359 2.0742-2.0742 2.0742h-385.66c-1.1406 0-2.0742-0.92969-2.0742-2.0742z"/>
                                <path d="m182.89 271.86h4.3438c1.5273 0 2.9023-0.90625 3.4648-2.2383l7.7188-16.344h16.555v67.672c-1.4492 0.31641-2.6719 0.625-4.3398 0.94141-2.2422 0.58984-4.3047 1.1211-5.9648 1.6328-1.8281 0.55859-3.0547 2.2148-3.0547 4.125v6.6992c0 2.3789 1.9336 4.3125 4.3086 4.3125h40.047c2.3789 0 4.3086-1.9336 4.3086-4.3125v-6.6523c0-2.0586-1.4648-3.8398-3.4883-4.2305l-10.223-1.9922 0.003906-68.199h16.555l7.6836 16.273c0.59375 1.4062 1.9727 2.3125 3.5 2.3125h4.3711c1.9883 0 3.6602-1.5508 3.8125-3.5195 0.71484-8.8594 0.36719-17.293-1.0469-25.762-0.50781-3.2891-3.3125-5.6758-6.6797-5.6758h-77.816c-3.4102 0-6.3594 2.4414-6.8633 5.6914-1.2344 8.4727-1.5703 16.871-1.0195 25.668 0.125 2.0195 1.8047 3.5977 3.8242 3.5977zm1.3008-28.648c0.19141-1.2305 1.3789-2.1602 2.7578-2.1602h77.82c1.3242 0 2.3867 0.88672 2.5859 2.1836 1.3438 8.0586 1.6797 16.066 1.0273 24.484l-3.7891 0.12891-8.2812-17.535c-0.34375-0.72656-1.0742-1.1875-1.875-1.1875h-19.941c-1.1445 0-2.0742 0.92578-2.0742 2.0742v71.977c0 0.99219 0.70312 1.8438 1.6758 2.0352l12.035 2.4805-0.16016 6.8164-40.211-0.16406 0.12109-6.8594c1.3438-0.41016 2.9023-0.82031 4.457-1.2305l1.1992-0.32422c1.9453-0.35156 3.9336-0.89062 5.8789-1.2461 0.98438-0.17969 1.7031-1.0352 1.7031-2.0391l-0.003906-71.445c0-1.1445-0.92578-2.0742-2.0742-2.0742h-19.941c-0.80078 0-1.5312 0.46484-1.875 1.1875l-7.9922 17.398h-4.043c-0.50781-8.4023-0.17969-16.422 1-24.5z"/>
                                <path d="m121.74 473.27c7.7148 0 13.988-6.2734 13.988-13.984 0-7.6719-6.2734-13.91-13.988-13.91-7.6719 0-13.91 6.2422-13.91 13.91 0 7.7109 6.2383 13.984 13.91 13.984zm0-23.75c5.4258 0 9.8398 4.3789 9.8398 9.7617 0 5.5156-4.3242 9.8359-9.8398 9.8359-5.3828 0-9.7617-4.4141-9.7617-9.8359 0-5.3828 4.3789-9.7617 9.7617-9.7617z"/>
                                <path d="m351.87 109.68h65.121c1.1445 0 2.0742-0.92578 2.0742-2.0742 0-1.1445-0.92578-2.0742-2.0742-2.0742h-65.121c-1.1445 0-2.0742 0.92578-2.0742 2.0742 0 1.1484 0.92969 2.0742 2.0742 2.0742z"/>
                                <path d="m274.66 48.902c-4.9297 0-8.9453 4.0117-8.9453 8.9453 0 4.9297 4.0156 8.9414 8.9453 8.9414 4.9297 0 8.9453-4.0117 8.9453-8.9414 0-4.9336-4.0156-8.9453-8.9453-8.9453zm0 13.738c-2.6445 0-4.7969-2.1523-4.7969-4.793 0-2.6445 2.1523-4.7969 4.7969-4.7969 2.6445 0 4.7969 2.1523 4.7969 4.7969 0 2.6445-2.1523 4.793-4.7969 4.793z"/>
                                <path d="m306.61 48.902c-4.9297 0-8.9414 4.0117-8.9414 8.9453 0 4.9297 4.0117 8.9414 8.9414 8.9414s8.9453-4.0117 8.9453-8.9414c0-4.9336-4.0156-8.9453-8.9453-8.9453zm0 13.738c-2.6406 0-4.793-2.1523-4.793-4.793 0-2.6445 2.1523-4.7969 4.793-4.7969 2.6445 0 4.7969 2.1523 4.7969 4.7969 0 2.6445-2.1523 4.793-4.7969 4.793z"/>
                                <path d="m338.56 66.789c4.9297 0 8.9414-4.0117 8.9414-8.9414 0-4.9336-4.0117-8.9453-8.9414-8.9453s-8.9453 4.0117-8.9453 8.9453c0.003906 4.9297 4.0156 8.9414 8.9453 8.9414zm0-13.738c2.6406 0 4.793 2.1523 4.793 4.7969 0 2.6445-2.1523 4.793-4.793 4.793-2.6445 0-4.7969-2.1523-4.7969-4.793 0.003906-2.6445 2.1523-4.7969 4.7969-4.7969z"/>
                                </g>
                            </svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Charte éditoriale</span></h4>
                                <p>Nous vous accompagnons pour définir la <strong>charte éditoriale de votre stratégie de communication</strong> en vue de produire un contenu proche des besoins et des attentes de votre public cible ainsi que des supports sur lesquels vous souhaitez communiquer.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="mx-auto block md:ml-0" fill="#ffffff" viewBox="0 0 140 175"><g><g><g><g><path d="M107.4882812,28.375h-21.375c-0.5527344,0-1-0.4477539-1-1V6c0-0.404541,0.2431641-0.769043,0.6171875-0.9238281      c0.375-0.1540527,0.8046875-0.0695801,1.0898438,0.2167969l21.375,21.375      c0.2861328,0.2858887,0.3720703,0.7160645,0.2167969,1.0895996C108.2578125,28.1313477,107.8925781,28.375,107.4882812,28.375z       M87.1132812,26.375h17.9609375L87.1132812,8.4143066V26.375z" /></g><g><path d="M107.4882812,135H6.5585938c-0.5527344,0-1-0.4477539-1-1V6c0-0.5522461,0.4472656-1,1-1h79.5595703      c0.265625,0,0.5195312,0.1054688,0.7070312,0.2929688l21.3701172,21.3701172      c0.1875,0.1875,0.2929688,0.4418945,0.2929688,0.7070312v19.9699707c0,0.5522461-0.4472656,1-1,1s-1-0.4477539-1-1V27.7844238      L85.7041016,7H7.5585938v126h98.9296875V86.2600098c0-0.5522461,0.4472656-1,1-1s1,0.4477539,1,1V134      C108.4882812,134.5522461,108.0410156,135,107.4882812,135z" /></g></g><g><g><path d="M75.6171875,124.7570801c-0.1679688,0-0.3359375-0.0422363-0.4882812-0.1274414      c-0.3349609-0.1872559-0.5332031-0.5500488-0.5097656-0.9331055l1.3242188-21.826416      c0.0087891-0.1501465,0.0517578-0.2963867,0.125-0.4277344l39.9150391-71.3278809      c0.1953125-0.347168,0.5869141-0.5471191,0.9726562-0.5065918c7.1279297,0.715332,12.9423828,3.9689941,17.28125,9.670166      c0.2412109,0.3168945,0.2714844,0.746582,0.0771484,1.0939941l-39.9150391,71.3278809      c-0.0742188,0.1313477-0.1757812,0.2443848-0.2988281,0.3308105l-17.9091797,12.5454102      C76.0195312,124.6962891,75.8183594,124.7570801,75.6171875,124.7570801z M77.9257812,102.2194824l-1.1845703,19.529541      l16.0244141-11.2250977l39.4785156-70.548584c-3.8085938-4.7553711-8.7949219-7.5456543-14.8398438-8.3044434      L77.9257812,102.2194824z M93.5263672,111.2116699h0.0097656H93.5263672z" /></g><g><path d="M93.5253906,112.2116699c-0.1650391,0-0.3330078-0.0412598-0.4873047-0.1276855      c-1.0625-0.5947266-1.2998047-1.5097656-1.4570312-2.1149902c-0.1337891-0.5161133-0.1962891-0.7033691-0.4990234-0.8728027      c-0.3037109-0.1704102-0.4951172-0.1240234-1.0029297,0.0314941c-0.5986328,0.1835938-1.5029297,0.4599609-2.5654297-0.1352539      c-1.0634766-0.5949707-1.3007812-1.510498-1.4580078-2.1162109c-0.1337891-0.515625-0.1953125-0.7026367-0.4970703-0.8718262      c-0.3017578-0.168457-0.4921875-0.125-1.0048828,0.0319824c-0.5986328,0.1828613-1.5029297,0.4592285-2.5654297-0.1359863      c-1.0634766-0.5949707-1.3017578-1.5102539-1.4599609-2.1159668c-0.1347656-0.5168457-0.1962891-0.7043457-0.5009766-0.8745117      c-0.3046875-0.1706543-0.4960938-0.125-1.0068359,0.0305176c-0.6005859,0.1821289-1.5029297,0.458252-2.5673828-0.1374512      c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2705078-0.4816895,0.8789062-0.6552734,1.3613281-0.3842773      c0.3056641,0.1706543,0.4970703,0.1252441,1.0068359-0.0307617c0.5996094-0.182373,1.5019531-0.4584961,2.5673828,0.1374512      c1.0634766,0.5949707,1.3017578,1.5102539,1.4599609,2.1159668c0.1347656,0.5168457,0.1962891,0.7043457,0.5009766,0.8745117      c0.3027344,0.1699219,0.4951172,0.1237793,1.0039062-0.0314941c0.5996094-0.1826172,1.5039062-0.458252,2.5664062,0.135498      c1.0634766,0.5952148,1.2998047,1.5102539,1.4570312,2.1157227c0.1337891,0.5158691,0.1953125,0.7028809,0.4980469,0.8723145      c0.3027344,0.1696777,0.4941406,0.1245117,1.0029297-0.0317383c0.5996094-0.1826172,1.5039062-0.4592285,2.5654297,0.135498      c1.0634766,0.5947266,1.3007812,1.5100098,1.4580078,2.1157227c0.1337891,0.5158691,0.1953125,0.7028809,0.4980469,0.8723145      c0.4824219,0.2697754,0.6542969,0.8791504,0.3847656,1.361084      C94.2158203,112.0273438,93.8759766,112.2116699,93.5253906,112.2116699z" /></g><g><g><path d="M86.0400391,106.1291504c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855       c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398l32.2480469-57.6271973       c0.2705078-0.4819336,0.8789062-0.6555176,1.3613281-0.3842773c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398       l-32.2480469,57.6271973C86.7304688,105.9445801,86.390625,106.1291504,86.0400391,106.1291504z" /></g></g><g><path d="M81.2548828,120.8110352c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855l-5.2207031-2.9213867      c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2705078-0.4816895,0.8779297-0.6550293,1.3613281-0.3842773      l5.2207031,2.9213867c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398      C81.9453125,120.6264648,81.6054688,120.8110352,81.2548828,120.8110352z" /></g></g><g><g><path d="M61.0966797,89.505127h-8.1464844c-0.4931641,0-0.9121094-0.3591309-0.9882812-0.8461914l-1.1542969-7.4187012      c-1.6474609-0.4711914-3.2314453-1.1269531-4.7236328-1.9555664l-6.0615234,4.4284668      c-0.3974609,0.2907715-0.9492188,0.2485352-1.296875-0.1003418l-5.7607422-5.7607422      c-0.3486328-0.3483887-0.3916016-0.8989258-0.1005859-1.296875l4.4287109-6.0617676      C36.4638672,69,35.8076172,67.4160156,35.3369141,65.7700195l-7.4179688-1.1547852      c-0.4873047-0.0756836-0.8466797-0.4951172-0.8466797-0.9880371v-8.1467285c0-0.4929199,0.359375-0.9123535,0.8457031-0.9880371      l7.4189453-1.1550293c0.4707031-1.6459961,1.1269531-3.2297363,1.9560547-4.7233887l-4.4287109-6.0617676      c-0.2910156-0.3979492-0.2480469-0.9484863,0.1005859-1.296875l5.7607422-5.7602539      c0.3486328-0.3493652,0.8994141-0.3903809,1.296875-0.1003418l6.0615234,4.4282227      c1.4921875-0.8288574,3.0761719-1.4846191,4.7236328-1.9558105l1.1542969-7.4182129      c0.0761719-0.4870605,0.4951172-0.8461914,0.9882812-0.8461914h8.1464844c0.4931641,0,0.9121094,0.3591309,0.9882812,0.8461914      l1.1542969,7.4182129c1.6474609,0.4709473,3.2304688,1.126709,4.7236328,1.9558105l6.0625-4.4284668      c0.3974609-0.2907715,0.9482422-0.248291,1.296875,0.1003418l5.7597656,5.760498      c0.3486328,0.3483887,0.3916016,0.8989258,0.1005859,1.296875l-4.4287109,6.0617676      c0.8291016,1.4916992,1.484375,3.0754395,1.9560547,4.7236328l7.4179688,1.1547852      c0.4873047,0.0756836,0.8466797,0.4951172,0.8466797,0.9880371v8.1467285c0,0.4929199-0.359375,0.9123535-0.8457031,0.9880371      l-7.4189453,1.1550293c-0.4707031,1.6459961-1.1269531,3.2299805-1.9560547,4.7233887l4.4287109,6.0615234      c0.2910156,0.3979492,0.2480469,0.9482422-0.1005859,1.296875l-5.7597656,5.7607422      c-0.3486328,0.348877-0.8994141,0.3911133-1.296875,0.1003418l-6.0625-4.4284668      c-1.4921875,0.8288574-3.0761719,1.4846191-4.7236328,1.9558105l-1.1542969,7.418457      C62.0087891,89.1459961,61.5898438,89.505127,61.0966797,89.505127z M53.8066406,87.505127h6.4335938l1.1230469-7.2143555      c0.0615234-0.395752,0.3535156-0.7165527,0.7412109-0.8151855c1.9082031-0.4855957,3.7285156-1.239502,5.4121094-2.2412109      c0.3447266-0.2043457,0.7783203-0.1845703,1.1015625,0.052002l5.8955078,4.3066406L79.0625,77.043457l-4.3066406-5.8947754      c-0.2363281-0.3234863-0.2568359-0.7565918-0.0517578-1.1008301c1.0019531-1.6850586,1.7558594-3.5061035,2.2412109-5.4123535      c0.0986328-0.3881836,0.4189453-0.6799316,0.8144531-0.7414551l7.2148438-1.123291v-6.4338379l-7.2138672-1.1230469      c-0.3964844-0.0615234-0.7167969-0.3532715-0.8154297-0.7414551c-0.4863281-1.9089355-1.2402344-3.7297363-2.2412109-5.4118652      c-0.2050781-0.3442383-0.1845703-0.777832,0.0517578-1.1013184L79.0625,42.0639648l-4.5488281-4.5493164l-5.8955078,4.3066406      c-0.3232422,0.2365723-0.7578125,0.2565918-1.1015625,0.052002c-1.6845703-1.0021973-3.5048828-1.7561035-5.4111328-2.2409668      c-0.3886719-0.098877-0.6806641-0.4196777-0.7421875-0.8154297l-1.1230469-7.2141113h-6.4335938l-1.1230469,7.2141113      c-0.0615234,0.395752-0.3535156,0.7165527-0.7412109,0.8154297c-1.9082031,0.4853516-3.7285156,1.2392578-5.4121094,2.2409668      c-0.34375,0.204834-0.7783203,0.1848145-1.1015625-0.052002l-5.8945312-4.3063965l-4.5498047,4.5490723l4.3066406,5.8950195      c0.2363281,0.3234863,0.2568359,0.7565918,0.0517578,1.1008301c-1.0019531,1.6853027-1.7558594,3.5063477-2.2412109,5.4123535      c-0.0986328,0.3881836-0.4189453,0.6799316-0.8144531,0.7414551l-7.2148438,1.123291v6.4338379l7.2138672,1.1230469      c0.3964844,0.0615234,0.7167969,0.3532715,0.8154297,0.7414551c0.4853516,1.90625,1.2392578,3.7272949,2.2412109,5.4121094      c0.2050781,0.3444824,0.1845703,0.7775879-0.0517578,1.1010742L34.984375,77.043457l4.5498047,4.5495605l5.8945312-4.3066406      c0.3232422-0.2368164,0.7578125-0.2565918,1.1015625-0.052002c1.6826172,1.0012207,3.5039062,1.7553711,5.4121094,2.2412109      c0.3876953,0.0986328,0.6796875,0.4194336,0.7412109,0.8151855L53.8066406,87.505127z M85.9746094,63.6271973h0.0097656      H85.9746094z" /></g><g><path d="M57.0234375,72.3076172c-7.0322266,0-12.7539062-5.7214355-12.7539062-12.7539062      s5.7216797-12.7536621,12.7539062-12.7536621s12.7539062,5.7211914,12.7539062,12.7536621      S64.0556641,72.3076172,57.0234375,72.3076172z M57.0234375,48.8000488      c-5.9296875,0-10.7539062,4.8239746-10.7539062,10.7536621S51.09375,70.3076172,57.0234375,70.3076172      s10.7539062-4.8242188,10.7539062-10.7539062S62.953125,48.8000488,57.0234375,48.8000488z" /></g></g></g><g><path d="M126.5810547,53.1425781c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855l-16.5859375-9.2810059    c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2695312-0.4816895,0.8779297-0.6550293,1.3613281-0.3842773    l16.5859375,9.2810059c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398    C127.2714844,52.9580078,126.9316406,53.1425781,126.5810547,53.1425781z" /></g></g></svg>
                                <h4 className="font-bold century text-bleu"><span className="font-bold">Reporting</span></h4>
                                <p>Nous monitorons les performances de votre <strong>stratégie</strong> pour vous tenir informés de vos résultats en ligne et effectuer des ajustements stratégiques tout au long de votre projet. Nous sommes réactifs et forces de proposition pour vous fournir les meilleures performances possibles.</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="w-full flex mb-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence de communication à Toulouse</span> ?</h3>
                        <h4>Linkweb soutient les professionnels souhaitant développer leur projet digital.</h4>
                    </div>
                    <div className="w-full mx-auto block lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" />
                    </div>
                </section>
                <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                    Les clients de notre agence de communication à Toulouse sont satisfaits
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
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Maîtrisez la communication digitale de votre entreprise</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                    </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="QUELS SONT LES AVANTAGES DE LA COMMUNICATION DIGITALE ?">
                                <p>Elle s’appuie sur une <strong>stratégie efficace et performante</strong> pour atteindre vos objectifs. Elle permet de toucher votre audience cible, d’optimiser votre visibilité sur internet et d’attirer des clients potentiels.</p>
                                <br />
                                <p>Les réseaux sociaux, la vidéo ou encore le référencement optimisent votre <strong>présence en ligne</strong> et vous permettent de <strong>générer du trafic sur le site web</strong> de votre société.</p>
                                <br />
                                <p>Vous pouvez communiquer avec vos prospects, vos clients et votre communauté en toute simplicité. Le marketing digital, comme la communication digitale permet de développer rapidement votre activité et d’<strong>améliorer votre chiffre d’affaires</strong>. La communication digitale s’adapte à toutes les tailles d’entreprises, de la TPE au grand groupe.</p>
                            </div>
                            <div label="QUELS SONT LES CANAUX DE COMMUNICATION EXISTANTS DANS L'UNIVERS DU DIGITAL ?">
                                <p>Le digital permet de <strong>communiquer avec une grande variété de supports</strong>. Vous pouvez utiliser des sites internet, des applications mobiles ou encore les réseaux sociaux pour atteindre votre audience cible.</p>
                                <br />
                                <p>Si les <strong>canaux de communication</strong> s’étendent aux supports papiers ou encore à l’événementiel, il faut savoir qu’il existe des canaux propres à la <strong>communication digitale</strong>. Parmi eux, nous retrouvons principalement, le site web (et/ou blog) et les réseaux sociaux. À ces deux canaux viennent s’ajouter l’e-mailing (newsletters) ainsi que les médias en ligne.</p>
                                <br />
                                <p>En effet, le site internet est un canal redoutable. Il permet une <strong>communication directe</strong>, rapide et simple avec sa cible. Vous maîtrisez 100% du contenu qui y est publié et vous y êtes facilement identifiable à travers un nom de domaine personnalisé et la présence de votre identité visuelle (et charte graphique).</p>
                            </div>
                            <div label="COMMENT LA COMMUNICATION DIGITALE PEUT-ÊTRE UTILISÉE PLUS EFFICACEMENT ?">
                                <p>La <strong>communication digitale</strong> permet de toucher un large éventail d’audience. Néanmoins, pour mener un projet ambitieux, il est indispensable de prévoir une stratégie complète qui englobe la recherche de visibilité, jusqu’à la conversion et la fidélisation.</p>
                                <br />
                                <p>La <strong>stratégie de communication</strong> est un outil qui permet d’optimiser votre présence en ligne et ainsi toucher un maximum d’audience. Chacune de ses actions doit répondre à un objectif qui vous permettra d’être propulsé au premier plan en vue de générer un trafic ciblé qui vous apportera des ventes afin de <strong>booster votre chiffre d’affaires</strong>.</p>
                                                           
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="w-full bg-black flex flex-col md:flex-row">
                    <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                    </div>
                    <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Vous souhaitez faire appel à notre agence de communication pour mener votre projet à Toulouse ?</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Engager notre <strong>agence de communication à Toulouse</strong> est la prochaine étape de votre projet digital. Contactez-nous, nous définirons ensemble le cadre stratégique de votre projet en fonction de vos objectifs, de vos ambitions ainsi que de votre marché pour vous proposer des <strong>solutions clé-en-main</strong> et parfaitement adaptées à vos besoins.</p>
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
query lastsThreePostsAgenceCommunicationToulouse {
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
export default AgenceCommunicationToulouse;




