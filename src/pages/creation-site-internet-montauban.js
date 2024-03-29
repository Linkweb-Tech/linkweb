import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import Accordion from '../components/accordion';
import Partenaires from '../components/partenaires';
import "../scss/global.scss";
import blocBg from "../images/background.jpg";
import Bg from "../images/creation-site-internet-montauban.jpg";
import imac from "../images/ecran-imac.jpg";
import bgDev from '../images/cta-background-agence-web.jpg';
import stars from '../images/stars.png';
import mac from "../images/mac-agence.jpg";

class CreationSiteInternetMontaubanPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }


    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Création Site Internet à Montauban - Agence Web Linkweb"
                    description="Création de site internet sur-mesure, e-commerce ou vitrine. Devis gratuit – Accompagnement professionnel - Suivi régulier et personnalisé."
                    keywords={[`Création site internet Montauban`, `Création site internet Montauban`, `Création site web Montauban`, `Création site web Montauban`]}
                    url="https://linkweb.fr/creation-site-internet-montauban/"
                    nom="Création de site internet à Montauban"
                    slug="creation-site-internet-montauban/"
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

                <section className="w-full bloctitrescreen mx-auto px-10 sm:px-4 py-6 bg-no-repeat bg-cover flex flex-col justify-center items-center" style={{ background: '#000000de url(' + Bg + ')', backgroundBlendMode: 'multiply', backgroundPosition: 'top', backgroundSize: 'cover' }}>
                    <h1 /*data-aos="fade-up" data-aos-delay="500"*/ className="century text-4xl sm:text-6xl text-center text-white">
                        Création site internet Montauban (82)
                        </h1>
                    <h3 className="italic text-lg text-center sm:text-2xl text-white mt-2">Tous les jours, des millions de sites internet voient le jour, pourquoi pas le vôtre ?</h3>
                    <RoundButton url="/contact-agence-web-toulouse/" text="Je veux créer mon site internet professionnel" />
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-4xl century">
                        Nous travaillons main dans la main pour mettre en place un site qui vous ressemble.
                        </h2>
                    <hr className="blue"></hr>

                </section>
                <Partenaires />
                <section className="max-w-5xl w-full mx-auto px-12 py-6 my-4 century">
                    <h2 className="text-justify text-xl font-bold" style={{ textAlignLast: 'center' }}>
                        Depuis 2008, Linkweb est à l'origine de la création de sites internet pour des entreprises issues d'horizons différents. Notre rôle, en tant qu'agence web à Montauban, est de vous accompagner pour atteindre vos objectifs de visibilité sur le Web.
                        </h2>
                    <ul className="px-16 list-disc mt-10 max-w-5xl text-xl">
                        <li>Vous avez besoin de <strong className="font-normal">créer un site internet</strong> pour <strong>vendre vos produits en ligne</strong> ?</li><br />
                        <li>Vous souhaitez la <strong className="font-normal">création d'un site internet</strong> pour <strong>présenter votre entreprise</strong> ou les <strong>produits que vous fabriquez</strong> ?</li><br />
                        <li>Vous disposez d'un <strong className="font-normal">site web</strong> qui nécessite <strong>une refonte totale ou partielle</strong> ?</li><br />
                    </ul>
                    <div className="flex justify-center">
                        <RoundButton url="/contact-agence-web-toulouse/" text="Demander un devis" />
                    </div>
                </section>
                <section className="flex-wrap flex flex-col md:flex-row w-full mx-auto py-2 my-2 ">
                    <div className=" font-bold	w-full md:w-1/3 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white" style={{ background: '#00cfffe0 url( ' + blocBg + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <h3 className="text-xl pb-6" >CRÉATION DE SITE INTERNET VITRINE</h3>
                        <p><strong className="font-normal">Dynamiser la communication de son entreprise</strong> à travers la <strong className="font-normal">création d’un site internet vitrine</strong> est déterminant pour les TPE et PME. En effet, <strong className="font-normal">créer un site internet</strong> va permettre d’apporter de la visibilité destinée à <strong className="font-normal">attirer de nouveaux acquéreurs</strong> dans des secteurs géographiques pertinents pour vous.</p>
                        <RoundButton color="darkgrey" url="/creation-site-internet-vitrine/" text="Création de site vitrine" />
                    </div>
                    <div className="font-bold w-full md:w-1/3 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white" style={{ background: '#009991 url( ' + blocBg + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <h3 className="text-xl pb-6" >CRÉATION DE SITE INTERNET E-COMMERCE</h3>
                        <p>Mettre en place un <strong className="font-normal">site e-commerce</strong> va vous permettre de <strong className="font-normal">créer un site internet de vente en ligne</strong> pour vos produits. Le <strong className="font-normal">site e-commerce</strong> s’adresse aux commerçants et magasins souhaitant <strong className="font-normal">augmenter leur chiffre d’affaires</strong> en ciblant une nouvelle clientèle. </p>
                        <RoundButton color="darkgrey" url="/creer-une-boutique-en-ligne/" text="Créer une boutique en ligne" />
                    </div>
                    <div className="font-bold w-full md:w-1/3 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white" style={{ background: '#00b1e2 url( ' + blocBg + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <h3 className="text-xl pb-6" >CRÉATION DE SITE INTERNET SUR-MESURE</h3>
                        <p>Mettre en place un <strong className="font-normal">site web multifonctions</strong> : possibilité de réservation, simulateur, configurateur et plus encore. <strong className="font-normal">Créer un site internet sur-mesure</strong>, c’est aussi faire le choix d’optimiser votre organisation interne grâce à un <strong className="font-normal">outil de type intranet</strong>.</p>
                        <RoundButton color="darkgrey" url="/creation-site-internet-sur-mesure/" text="Créer un site internet sur-mesure" />
                    </div>
                </section>
                <section className="flex w-full flex-col lg:flex-row mx-auto px-4 py-6 my-4">
                    <div className="w-full lg:w-1/2">
                        <img src={imac} alt="Création site internet Toulouse" />
                    </div>
                    <div className="w-full lg:w-1/2 max-w-3xl px-12 py-12" >
                        <h2 className="century capitalize text-2xl tracking-wider pb-6" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>CRÉATION SITE INTERNET MONTAUBAN : OPTER POUR UNE AGENCE WEB PROFESSIONNELLE
                            </h2>
                        <h4 className="century text-lg tracking-wider pb-6 text-justify" /*data-aos='fade-left'*/>
                            <span className="font-bold">La création d'un site internet est un levier d'expansion pour les professionnels ambitieux. Linkweb met en place la plateforme qui vous correspond à Montauban.</span>
                        </h4>
                        <p /*data-aos='fade-bottom'*/ className="text-justify"><Link className="hover:text-bleu" to="/">Linkweb</Link> s'attache à répondre à vos besoins en termes de <strong className="font-light">communication</strong> pour vous proposer une <strong className="font-light">solution web professionnelle</strong>. Nous définissons le projet le plus adapté en fonction de vos besoins pour la <strong className="font-light">création d'un site internet à Montauban</strong> qui vous correspond. Il existe de nombreuses possibilités pour <strong className="font-light">créer un site web</strong> proche de vos besoins : communiquer au sujet de votre activité ou de vos prestations, <strong className="font-light">développer les ventes de vos produits</strong> grâce à un <strong className="font-light">site e-commerce</strong> ou bien ajouter des fonctionnalités pertinentes pour vos utilisateurs. <br /><br />

                            Selon votre demande, nos experts et <strong className="font-light">spécialistes web</strong> définiront la réponse la mieux adaptée selon vos <strong className="font-light">objectifs, la concurrence et de la réalisation technique</strong> en ce qui concerne votre <strong className="font-light">création de site internet à Montauban</strong>. Notre <strong className="font-light">agence de création de sites internet</strong> est à même de développer <strong className="font-light">votre projet web</strong> grâce à nos <strong className="font-light">développeurs web et spécialistes SEO</strong>. Ces derniers sont chargés de fournir des contenus qui vont faire que <strong className="font-light">votre site web vitrine pourra être visible sur les moteurs</strong>. Par ailleurs, le <strong className="font-light">netlinking d'un site internet</strong> est une partie importante du travail qui vous permet de maximiser votre visibilité. De la <strong className="font-light">conception du site à l'<Link to="/creation-site-internet-toulouse/arborescence-site-internet/" className="text-bleu hover:text-black font-bold">arborescence</Link></strong>, nous menons votre projet pour vous apporter un <strong className="font-light">outil efficace pour votre entreprise</strong>.</p><br />
                        {/* <Button url="#" text="En savoir plus sur la création de site internet" position="start" /> */}
                        <br />
                        {/* <button data-aos="fade-left" className="text-md hover:text-bleu" onClick={this.onOpenModal}><span className="text-bleu">>></span> En savoir plus sur la création de site internet</button> */}
                        {/* <Modal open={open} onClose={this.onCloseModal} center>
                                <br/>
                                
                                <br/>
                            </Modal> */}
                    </div>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                        Faites connaître votre entreprise sur (<span className="text-bleu">l’</span>)<span className="text-bleu">Internet</span> !
                        </h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos="fade-in"*/ className="text-center font-normal italic century text-sm">Création de site internet à Montauban</h3>
                </section>
                <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
                    <div className="w-full xl:w-1/3 one px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE VEUX EN SAVOIR PLUS SUR LA CRÉATION DE SITE INTERNET
                                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    La <strong className="font-normal"><Link to="/creation-de-site-internet-a-agen/" className="text-bleu hover:text-black font-bold">création d'un site internet</Link></strong> nécessite un savoir-faire tout particulier. En effet, le site est réalisé en fonction des cibles de votre stratégie, de l’<strong className="font-normal">expérience utilisateur</strong> ou encore des <strong className="font-normal">robots d’indexation des moteurs de recherche (SEO)</strong>. Il est donc déterminant de mettre en place un outil performant de tous points de vue.
                                </div>
                                <Button url="/contact-agence-web-toulouse/" text="En savoir plus" position="center" />

                            </section>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 two px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE VEUX ÊTRE ACCOMPAGNÉ POUR TROUVER MA SOLUTION
                                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    Qu'il s'agisse d'un <strong className="font-normal">site internet vitrine</strong>, <strong className="font-normal">e-commerce</strong> ou <strong className="font-normal">sur-mesure</strong>, tout doit être pensé pour affirmer votre <strong className="font-normal">présence en ligne</strong>. Cela demande de bien définir vos <strong className="font-normal">objectifs de communication</strong> pour vous permettre d'accéder à une <strong className="font-normal">solution efficace et adaptée</strong>.
                                </div>
                                <Button url="/contact-agence-web-toulouse/" text="Prendre contact" position="center" />
                            </section>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 three px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE FAIS LE CHOIX D'EXPERTS POUR MENER MON PROJET
                                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    La <strong className="font-normal">création de votre vitrine professionnel</strong> est réalisée grâce au savoir-faire de nos professionnels en <strong><Link to="/creation-site-internet-toulouse/developpement-web/" className="text-bleu hover:text-black font-bold">développement web</Link></strong> et en <strong className="font-normal">création de contenus optimisés</strong>. <strong className="font-normal">Linkweb</strong> est votre interlocuteur privilégié pour votre <strong className="font-normal">projet de site web professionnel et sur-mesure</strong>.
                                </div>
                                <Button url="/contact-agence-web-toulouse/" text="Prendre rendez-vous" position="center" />
                            </section>

                        </div>

                    </div>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 pt-4 pb-0 mt-2">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                        Création de site internet à Montauban : Linkweb, votre solution web professionnelle
                        </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="max-w-5xl w-full mx-auto px-10 pb-0">
                    <div className="w-full max-w-5xl" /*data-aos='zoom-in'*/>
                        <p className="text-md text-center pt-4 century">Vous souhaitez une création de site internet à Montauban ? Avoir un site internet professionnel est indispensable pour chaque entreprise de nos jours. <br /><br />Notre agence web Linkweb répond à vos attentes pour <strong>créer un site web</strong> qui s’adapte à vos besoins.</p>
                    </div>
                </section>
                <section className="flex w-full flex-col lg:flex-row mx-auto px-4 md:py-6 md:my-4">
                    <div className="w-full lg:w-1/2 pt-6">
                        <img
                            src={mac}
                            alt="Création site internet Montauban"
                        /*data-aos="fade-right"*/
                        />
                    </div>
                    <div className="w-full lg:w-1/2 max-w-3xl md:px-10 md:py-32">
                        <h2 className="font-bold px-10 text-xl" /*data-aos="fade-in"*/>1<span className="text-bleu">/</span> UNE ÉQUIPE À VOTRE ÉCOUTE</h2>
                        <br />
                        <p className="text-md text-justify px-10 pt-6 md:py-0" /*data-aos="fade-left"*/>
                            La coopération avec nos clients constitue une part importante de la réussite de nos <strong className="font-normal">projets web</strong>. Nos <strong className="font-normal">spécialistes en marketing web</strong> s'attachent à répondre à vos besoins avec un <strong className="font-normal">projet web</strong> qui vous ressemble. C'est pourquoi, nous faisons en sorte de <strong className="font-normal">réaliser des sites internet adaptés à votre image</strong>, propres à vos valeurs, en totale corrélation avec votre <strong><Link to="/creation-site-internet-toulouse/charte-graphique/" className="font-bold text-bleu hover:text-black">charte graphique</Link></strong> et votre <strong className="font-normal">identité visuelle</strong>. Il est déterminant pour nous d’être au plus près de vos besoins afin de retranscrire les spécificités de votre société et de votre projet au sein de votre <strong className="font-normal">outil en ligne</strong>. Ceci est aussi vrai pour la création que pour la <strong><Link to="/creation-site-internet-toulouse/refonte-site-internet/" className="text-bleu hover:text-black font-bold">refonte de votre site</Link></strong> existant.
                            </p>
                        <br />
                        <h2 className="font-bold px-10 text-xl py-6 md:py-0" /*data-aos="fade-in"*/>2<span className="text-bleu">/</span> DES EXPERTS QUALIFIÉS</h2>
                        <br />
                        <p className="text-md text-justify px-10" /*data-aos="fade-left"*/>
                            Lors de la <strong className="font-normal">création de votre site internet à Montauban</strong>, les équipes de <strong className="font-normal">référenceurs (spécialisés dans l'optimisation SEO</strong>) et de <strong className="font-normal">développeurs web</strong> <strong><Link to="/creation-site-internet-toulouse/front-end/" className="font-bold text-bleu hover:text-black">front-end</Link></strong> et <strong><Link to="/creation-site-internet-toulouse/back-end/" className="font-bold text-bleu hover:text-black">back-end</Link></strong> (spécialisés dans l'<strong><Link to="/creation-site-internet-toulouse/ui-design/" className="font-bold text-bleu hover:text-black">UI design</Link></strong> ou <strong className="font-normal">design d'interface</strong> et l'<strong><Link to="/creation-site-internet-toulouse/ux-design/" className="font-bold text-bleu hover:text-black">UX design</Link></strong> (<strong className="font-normal">expérience utilisateur</strong>)) de notre société de <strong className="font-normal">communication web</strong> s'attache à élaborer un <strong className="font-normal">site internet</strong> adapté. En effet, les sites que nous créons sont conformes aux standards du web (<strong><Link to="/creation-site-internet-toulouse/w3c/" className="font-bold text-bleu hover:text-black">W3C</Link></strong>) et aux dernières tendances. C'est pourquoi, nos <strong className="font-normal">sites web</strong> sont créés à partir d’un <strong><Link to="/creation-site-internet-toulouse/webdesign/" className="font-bold text-bleu hover:text-black">webdesign</Link></strong> ergonomique, moderne, accessible, intuitif et adapté pour tous les supports grâce au <strong><Link to="/creation-site-internet-toulouse/responsive-design/" className="font-bold text-bleu hover:text-black">responsive design</Link></strong>. Chaque élément est là pour apporter une plus-value à votre <strong className="font-normal">outil en ligne</strong>.
                            </p>
                        <br />
                        <h2 className="font-bold px-10 text-xl py-6 md:py-0" /*data-aos="fade-in"*/>3<span className="text-bleu">/</span> UN SUIVI PRÉCIS DES PERFORMANCES</h2>
                        <br />
                        <p className="text-md text-justify px-10" /*data-aos="fade-left"*/>
                            Le <strong className="font-normal">référencement d'un site internet</strong> est un travail de long terme. Nous avons, à notre disposition, une multitude d'outils utiles à la mise en route d'une stratégie efficace. En effet, ils nous apportent un regard professionnel et concret par rapport au <strong className="font-normal">référencement des pages de votre site</strong> dans les résultats des <strong><Link to="/creation-site-internet-toulouse/moteurs-recherche/" className="text-bleu font-bold hover:text-black">moteurs de recherche</Link></strong>. En fonction de ce suivi, nos <strong className="font-normal">spécialistes à Montauban</strong> vous proposent des perspectives d'améliorations qui vont permettre d'affiner la <strong className="font-normal">stratégie d’optimisation mise en place sur votre site web</strong>.
                            </p>
                    </div>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                        <span className="text-bleu">/</span>Création de site internet à Montauban : <span className="text-bleu">le mode opératoire</span>
                    </h2>
                    <hr className="blue"></hr>

                </section>
                <section className="max-w-6xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                    <p className="text-xl font-bold century text-left">Après notre première rencontre, ainsi que la réunion de cadrage pour votre <strong>site internet professionnel</strong>, Linkweb s’engage à :</p>
                    <ul className="mt-6 pl-1 sm:pl-6">
                        <li className="operatoire flex justify-start items-center pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792">
                                <path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z">
                                </path>
                            </svg>
                                &nbsp;
                                <p>Faire le choix d’un <strong><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/nom-de-domaine/">nom de domaine</Link></strong> qui vous permettra d’être facilement reconnaissable.</p>
                        </li>
                        <li className="operatoire flex justify-start items-center pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792">
                                <path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z">
                                </path>
                            </svg>
                                &nbsp;
                                <p>Faire le choix de l’<strong>outil de création et de gestion du site</strong>, ainsi que de <strong>gestion du contenu</strong> (<strong><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/">CMS</Link></strong>, <strong><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/">HTML/CSS</Link></strong>, <strong><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/">framework</Link></strong>, etc.).</p>
                        </li>
                        <li className="operatoire flex justify-start items-center pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792">
                                <path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z">
                                </path>
                            </svg>
                                &nbsp;
                                <p>Mettre en place un visuel qui fera consensus entre <strong>webdesign</strong> et <strong>expérience utilisateur</strong> pour une interface <strong>responsive design</strong> et/ou <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/mobile-first/"><strong>mobile first</strong></Link>.</p>
                        </li>
                        <li className="operatoire flex justify-start items-center pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792">
                                <path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z">
                                </path>
                            </svg>
                                &nbsp;
                                <p>Créer un ensemble de contenus permettant de <strong>communiquer vos valeurs</strong>.</p>
                        </li>
                        <li className="operatoire flex justify-start items-center pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792">
                                <path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z">
                                </path>
                            </svg>
                                &nbsp;
                                <p><strong className="font-light">Faire un site</strong> adapté pour la mise en place des techniques relatives au <strong>référencement naturel</strong>.</p>
                        </li>
                    </ul>
                    <div className="w-full flex flex-col sm:flex-row text-center my-6">
                        <div className="w-full sm:w-1/3 flex flex-col items-center justify-center pt-6" /*data-aos='zoom-in' data-aos-delay="200"*/>


                            <svg id="Layer_3" width="80px" height="80px" viewBox="0 0 64 64" >
                                <g>
                                    <path d="m58 31h-25v-27c0-1.654-1.346-3-3-3h-18c-1.654 0-3 1.346-3 3v27h-3c-2.757 0-5 2.243-5 5v22c0 2.757 2.243 5 5 5h52c2.757 0 5-2.243 5-5v-22c0-2.757-2.243-5-5-5zm-46-28h18c.552 0 1 .449 1 1v51h-20v-51c0-.551.448-1 1-1zm49 55c0 1.654-1.346 3-3 3h-52c-1.654 0-3-1.346-3-3v-22c0-1.654 1.346-3 3-3h3v21.816c-1.161-.414-2-1.514-2-2.816v-2h-2v2c0 2.757 2.243 5 5 5h22c2.757 0 5-2.243 5-5v-2h-2v2c0 1.302-.839 2.402-2 2.816v-21.816h25c1.654 0 3 1.346 3 3z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m19 11h4c1.654 0 3-1.346 3-3s-1.346-3-3-3h-4c-1.654 0-3 1.346-3 3s1.346 3 3 3zm0-4h4c.552 0 1 .449 1 1s-.448 1-1 1h-4c-.552 0-1-.449-1-1s.448-1 1-1z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m15 25h12c.553 0 1-.448 1-1v-10c0-.552-.447-1-1-1h-12c-.553 0-1 .448-1 1v10c0 .552.447 1 1 1zm1-10h10v8h-10z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m21 27c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m14 27h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m26 27h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m14 33h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m26 33h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m19 37h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m25 37h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m13 37h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m19 41h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m25 41h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m13 41h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m19 45h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m25 45h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m13 45h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m19 49h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m25 49h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m13 49h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m58 39h-18c-.553 0-1 .447-1 1v18c0 .553.447 1 1 1h18c.553 0 1-.447 1-1v-18c0-.553-.447-1-1-1zm-1 18h-16v-16h16z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m46 55c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m52 49c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m43 45h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m53 51h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                </g>
                            </svg>
                            <p className="text-xl century pt-3">1 contact téléphonique par mois</p>
                        </div>
                        <div className="w-full sm:w-1/3 flex flex-col items-center justify-center pt-6" /*data-aos='zoom-in' data-aos-delay="400"*/>
                            <svg width="80px" height="80px" viewBox="-32 0 480 480.23349" >
                                <g>
                                    <path d="m208.117188             96c-97.203126 0-176 78.796875-176 176s78.796874 176 176 176c97.203124 0 176-78.796875 176-176-.109376-97.15625-78.84375-175.890625-176-176zm0 336c-88.367188 0-160-71.632812-160-160s71.632812-160 160-160c88.363281 0 160 71.632812 160 160-.101563 88.324219-71.675782 159.898438-160 160zm0 0" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m371.085938 142.984375 12.367187-12.367187c3.121094-3.125 3.121094-8.1875 0-11.3125l-22.640625-22.640626c-3.125-3.125-8.1875-3.125-11.3125 0l-12.367188 12.367188c-30.246093-24.054688-66.625-39.164062-105.015624-43.605469v-17.425781h8c8.835937 0 16-7.164062 16-16v-16c0-8.835938-7.164063-16-16-16h-64c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h8v17.425781c-38.390626 4.441407-74.769532 19.550781-105.015626 43.605469l-12.367187-12.367188c-3.125-3.125-8.191406-3.125-11.3125 0l-22.640625 22.640626c-3.125 3.125-3.125 8.1875 0 11.3125l12.367188 12.367187c-67.546876 85.167969-58.121094 207.984375 21.628906 281.851563 79.75 73.863281 202.929687 73.863281 282.679687 0 79.75-73.867188 89.175781-196.683594 21.628907-281.851563zm-15.929688-29.382813 11.359375 11.359376-5.832031 5.832031c-3.625-3.921875-7.402344-7.695313-11.328125-11.328125zm-179.039062-97.601562h64v16h-64zm24 32h16v16.199219c-2.65625-.09375-5.320313-.199219-8-.199219-2.679688 0-5.34375.105469-8 .199219zm-150.402344 76.960938 11.363281-11.359376 5.832031 5.832032c-3.921875 3.621094-7.699218 7.394531-11.328125 11.328125zm158.402344 339.039062c-106.039063 0-192-85.960938-192-192s85.960937-192 192-192c106.039062 0 192 85.960938 192 192-.125 105.988281-86.011719 191.875-192 192zm0 0" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m232.117188 272c0-13.253906-10.746094-24-24-24-13.253907 0-24 10.746094-24 24s10.746093 24 24 24c3.5625-.015625 7.078124-.835938 10.28125-2.398438l48.0625 48.0625 11.3125-11.3125-48.058594-48.070312c1.566406-3.203125 2.386718-6.71875 2.402344-10.28125zm-32 0c0-4.417969 3.582031-8 8-8 4.417968 0 8 3.582031 8 8s-3.582032 8-8 8c-4.417969 0-8-3.582031-8-8zm0 0" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m242.246094 148.601562-4.257813 15.398438c31.285157 8.679688 57.269531 30.496094 71.230469 59.804688 13.964844 29.308593 14.539062 63.230468 1.570312 92.996093l14.664063 6.398438c7.066406-16.140625 10.699219-33.578125 10.664063-51.199219-.09375-57.523438-38.460938-107.957031-93.871094-123.398438zm0 0" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    <path d="m225.171875 145.128906c-5.652344-.753906-11.351563-1.128906-17.054687-1.128906v16c4.996093 0 9.988281.328125 14.945312.984375zm0 0" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                </g>
                            </svg>
                            <p className="text-xl century pt-3">Disponibilité et réactivité</p>
                        </div>
                        <div className="w-full sm:w-1/3 flex flex-col items-center justify-center pt-6"  /*data-aos='zoom-in' data-aos-delay="600"*/>
                            <svg version="1.1" width="80px" height="80px" id="Capa_1" x="0px" y="0px" className="svg-bleu" viewBox="0 0 512 512" >
                                <g>
                                    <g>
                                        <g>
                                            <path d="M469.333,0H42.667C19.114,0.028,0.028,19.114,0,42.667v426.667C0.028,492.886,19.114,511.972,42.667,512h426.667     c23.552-0.028,42.638-19.114,42.667-42.667V42.667C511.972,19.114,492.886,0.028,469.333,0z M494.933,469.333     c0,14.138-11.461,25.6-25.6,25.6H42.667c-14.138,0-25.6-11.461-25.6-25.6v-384h477.867V469.333z M494.933,68.267H17.067v-25.6     c0-14.138,11.462-25.6,25.6-25.6h426.667c14.138,0,25.6,11.462,25.6,25.6V68.267z" />
                                            <path d="M59.733,34.133H51.2c-4.713,0-8.533,3.82-8.533,8.533S46.487,51.2,51.2,51.2h8.533c4.713,0,8.533-3.82,8.533-8.533     S64.446,34.133,59.733,34.133z" />
                                            <path d="M99.925,36.608c-3.422-3.157-8.695-3.157-12.117,0c-0.753,0.83-1.359,1.782-1.792,2.816     c-0.911,2.066-0.911,4.419,0,6.485c0.435,1.033,1.041,1.985,1.792,2.816c2.443,2.443,6.126,3.153,9.301,1.792     c1.033-0.435,1.985-1.041,2.816-1.792c0.751-0.831,1.357-1.783,1.792-2.816c0.91-2.066,0.91-4.419,0-6.485     C101.284,38.39,100.678,37.438,99.925,36.608z" />
                                            <path d="M134.059,36.608c-3.422-3.157-8.695-3.157-12.117,0c-0.753,0.83-1.359,1.782-1.792,2.816     c-1.361,3.175-0.651,6.859,1.792,9.301c0.83,0.753,1.782,1.359,2.816,1.792c2.066,0.911,4.419,0.911,6.485,0     c1.043-0.414,1.999-1.022,2.816-1.792c1.602-1.607,2.494-3.789,2.475-6.059c0.025-1.119-0.208-2.229-0.683-3.243     C135.418,38.39,134.812,37.438,134.059,36.608z" />
                                            <path d="M460.8,34.133H170.667c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533H460.8c4.713,0,8.533-3.82,8.533-8.533     S465.513,34.133,460.8,34.133z" />
                                            <path d="M51.2,315.733h119.467c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H67.14L128,207.36v65.707     c0,4.713,3.82,8.533,8.533,8.533s8.533-3.821,8.533-8.533V179.2c0-0.282-0.137-0.512-0.162-0.794     c-0.051-0.58-0.165-1.152-0.341-1.707c-0.154-0.508-0.357-0.999-0.606-1.468c-0.242-0.464-0.528-0.904-0.853-1.314     c-0.366-0.456-0.781-0.871-1.237-1.237c-0.213-0.179-0.333-0.418-0.563-0.572c-0.23-0.154-0.478-0.162-0.708-0.29     c-0.512-0.276-1.053-0.497-1.613-0.657c-0.537-0.165-1.088-0.276-1.647-0.333c-0.264-0.068-0.532-0.122-0.802-0.162     c-0.282,0-0.529,0.137-0.802,0.162c-0.579,0.058-1.15,0.172-1.707,0.341c-0.503,0.155-0.992,0.355-1.459,0.597     c-0.475,0.257-0.924,0.56-1.34,0.905c-0.444,0.367-0.853,0.776-1.22,1.22c-0.171,0.213-0.418,0.341-0.572,0.572l-85.333,128     c-1.747,2.619-1.911,5.986-0.426,8.762C45.16,314.001,48.052,315.734,51.2,315.733z" />
                                            <path d="M136.533,332.8c-4.713,0-8.533,3.821-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6     C145.067,336.621,141.246,332.8,136.533,332.8z" />
                                            <path d="M332.8,315.733h119.467c4.713,0,8.533-3.82,8.533-8.533s-3.821-8.533-8.533-8.533H348.74l60.86-91.307v65.707     c0,4.713,3.82,8.533,8.533,8.533s8.533-3.821,8.533-8.533V179.2c0-0.282-0.137-0.512-0.162-0.794     c-0.051-0.58-0.165-1.152-0.341-1.707c-0.154-0.508-0.357-0.999-0.606-1.468c-0.242-0.464-0.528-0.904-0.853-1.314     c-0.366-0.456-0.781-0.871-1.237-1.237c-0.213-0.179-0.333-0.418-0.563-0.572c-0.23-0.154-0.478-0.162-0.708-0.29     c-0.512-0.276-1.053-0.497-1.613-0.657c-0.537-0.165-1.088-0.276-1.647-0.333c-0.264-0.068-0.532-0.122-0.802-0.162     c-0.282,0-0.529,0.137-0.802,0.162c-0.579,0.056-1.151,0.171-1.707,0.341c-0.508,0.152-1,0.355-1.468,0.606     c-0.474,0.251-0.92,0.551-1.331,0.896c-0.451,0.363-0.863,0.772-1.229,1.22c-0.171,0.213-0.418,0.341-0.572,0.572l-85.333,128     c-1.748,2.62-1.911,5.989-0.424,8.766C326.755,314.006,329.651,315.737,332.8,315.733z" />
                                            <path d="M418.133,332.8c-4.713,0-8.533,3.821-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6     C426.667,336.621,422.846,332.8,418.133,332.8z" />
                                            <path d="M230.4,375.467h42.667c18.851,0,34.133-15.282,34.133-34.133V204.8c0-18.851-15.282-34.133-34.133-34.133H230.4     c-18.851,0-34.133,15.282-34.133,34.133v136.533C196.267,360.185,211.549,375.467,230.4,375.467z M213.333,204.8     c0-9.426,7.641-17.067,17.067-17.067h42.667c9.426,0,17.067,7.641,17.067,17.067v136.533c0,9.426-7.641,17.067-17.067,17.067     H230.4c-9.426,0-17.067-7.641-17.067-17.067V204.8z" />
                                            <path d="M341.333,418.133H170.667c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h170.667     c4.713,0,8.533-3.82,8.533-8.533S346.046,418.133,341.333,418.133z" />
                                            <path d="M307.2,452.267H204.8c-4.713,0-8.533,3.821-8.533,8.533s3.82,8.533,8.533,8.533h102.4c4.713,0,8.533-3.82,8.533-8.533     S311.913,452.267,307.2,452.267z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p className="text-xl century pt-3">Maintenance technique</p>
                        </div>
                    </div>
                </section>
                <section className=" w-full lg:h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bgDev + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                    <div className="max-w-5xl mx-auto flex items-center">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-white text-3xl md:text-4xl century">
                            <span className="text-bleu">/</span>Alors, convaincu ? Vous souhaitez être contacté ?
                            </h2>

                    </div>

                    <div className="max-w-6xl mx-auto flex text-center my-12">
                        {/* <RappelForm /> */}
                        <RoundButton url="/contact-agence-web-toulouse/" text="Je souhaite créer mon site internet professionnel" />
                    </div>

                    <div className="max-w-6xl mx-auto flex text-center my-12 flex-col sm:flex-row">
                        <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center" /*data-aos='zoom-in' data-aos-delay="200"*/>
                            <svg x="0px" y="0px" viewBox="0 0 511.998 511.998" width="80px" height="80px">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M501.103,464.947h-16.224V326.868c0-5.522-4.477-9.997-9.997-9.997s-9.998,4.476-9.998,9.997v52.101H209.947V223.033    c0-5.522-4.477-9.998-9.998-9.998s-9.997,4.476-9.997,9.998v241.914H46.988V198.913c3.978,0.846,8.098,1.3,12.324,1.3    c20.476,0,38.557-10.452,49.188-26.301c10.63,15.85,28.711,26.301,49.187,26.301c20.476,0,38.557-10.452,49.188-26.301    c10.63,15.85,28.712,26.301,49.188,26.301s38.557-10.452,49.188-26.301c10.63,15.85,28.712,26.301,49.188,26.301    s38.556-10.452,49.187-26.301c10.63,15.85,28.712,26.301,49.188,26.301c4.136,0,8.172-0.43,12.07-1.241v63.358    c0,5.522,4.477,9.997,9.998,9.997s9.997-4.476,9.997-9.997v-71.595c16.302-10.552,27.12-28.885,27.12-49.708    c0-2.049-0.619-3.953-1.677-5.54L462.397,32.824c-1.644-3.519-5.176-5.769-9.06-5.769H59.185c-3.865,0-7.384,2.228-9.037,5.723    L0.96,136.752c-0.917,1.939-1.173,4.086-0.787,6.13c0.619,19.945,11.143,37.429,26.819,47.689v274.375H10.768    c-5.521,0-9.997,4.476-9.997,9.998c0,5.522,4.477,9.997,9.997,9.997H36.99h437.891h26.222c5.521,0,9.998-4.476,9.998-9.997    C511.102,469.423,506.625,464.947,501.103,464.947z M452.814,180.218c-18.156,0-33.463-12.41-37.894-29.193h75.787    C486.276,167.807,470.97,180.218,452.814,180.218z M413.843,47.051h33.129l39.203,83.979h-72.332V47.051z M354.439,180.219    c-18.156,0-33.462-12.411-37.894-29.193h75.786C387.899,167.808,372.593,180.219,354.439,180.219z M315.393,47.051h78.455v83.979    h-78.455V47.051z M256.063,180.219c-18.155,0-33.462-12.411-37.894-29.193h75.787    C289.525,167.808,274.217,180.219,256.063,180.219z M216.946,47.051h78.454v83.979h-0.001h-78.453V47.051z M157.686,180.219    c-18.154,0-33.461-12.411-37.893-29.193h75.786C191.148,167.808,175.842,180.219,157.686,180.219z M118.497,47.051h78.453v83.979    h-78.453V47.051z M65.515,47.051h32.987v83.979H25.786L65.515,47.051z M21.418,151.026h75.787    c-4.432,16.782-19.739,29.193-37.894,29.193C41.156,180.219,25.85,167.808,21.418,151.026z M464.884,464.947H209.947v-65.984    h254.937V464.947z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M165.138,319.803c-1.861-1.86-4.429-2.929-7.068-2.929c-2.629,0-5.209,1.07-7.067,2.929c-1.86,1.86-2.93,4.429-2.93,7.068    c0,2.629,1.07,5.209,2.93,7.068c1.859,1.859,4.438,2.929,7.067,2.929c2.63,0,5.209-1.07,7.068-2.929    c1.859-1.86,2.929-4.439,2.929-7.068C168.067,324.232,166.998,321.663,165.138,319.803z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M346.256,241.724c-3.905-3.904-10.233-3.904-14.139,0l-67.722,67.722c-3.904,3.904-3.904,10.234,0,14.14    c1.953,1.953,4.511,2.928,7.069,2.928c2.558,0,5.117-0.976,7.069-2.928l67.722-67.722    C350.161,251.959,350.161,245.628,346.256,241.724z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M255.205,332.77c-1.859-1.859-4.438-2.919-7.067-2.919c-2.63,0-5.209,1.06-7.068,2.919    c-1.86,1.87-2.929,4.439-2.929,7.068c0,2.639,1.069,5.209,2.929,7.068c1.86,1.87,4.438,2.929,7.068,2.929    c2.629,0,5.209-1.06,7.067-2.929c1.86-1.859,2.93-4.429,2.93-7.068C258.136,337.209,257.066,334.629,255.205,332.77z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M429.464,232.659c-3.905-3.904-10.233-3.904-14.139,0l-68.248,68.248c-3.904,3.904-3.904,10.234,0,14.139    c1.954,1.952,4.511,2.928,7.07,2.928c2.559,0,5.117-0.976,7.069-2.928l68.248-68.248    C433.368,242.894,433.368,236.564,429.464,232.659z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M481.949,287.251c-1.859-1.859-4.438-2.929-7.067-2.929s-5.209,1.07-7.068,2.929c-1.86,1.86-2.929,4.429-2.929,7.068    c0,2.629,1.069,5.209,2.929,7.068s4.439,2.929,7.068,2.929s5.209-1.07,7.067-2.929c1.859-1.859,2.93-4.439,2.93-7.068    C484.879,291.69,483.81,289.111,481.949,287.251z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <Link to="/creation-site-internet-vitrine/"><p className="text-xl text-white century pt-3">SITE INTERNET VITRINE</p></Link>
                        </div>
                        <div className="w-full my-6 sm:w-1/3 px-12 flex flex-col items-center justify-center" /*data-aos='zoom-in' data-aos-delay="400"*/>
                            <svg x="0px" y="0px" viewBox="0 0 512 512" width="80px" height="80px">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M355.81,402.93c-1.86-1.86-4.44-2.93-7.08-2.93c-2.63,0-5.21,1.069-7.06,2.93c-1.87,1.86-2.93,4.43-2.93,7.07    c0,2.63,1.06,5.21,2.93,7.069c1.86,1.86,4.43,2.931,7.06,2.931c2.64,0,5.21-1.07,7.08-2.931c1.86-1.859,2.93-4.439,2.93-7.069    S357.67,404.79,355.81,402.93z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M510.009,204.012C508.121,201.487,505.153,200,502,200h-40.785V10c0-5.522-4.477-10-10-10h-184c-5.523,0-10,4.478-10,10    v77H154.088c-5.523,0-10,4.478-10,10v103H107c-3.153,0-6.121,1.487-8.009,4.012c-1.888,2.525-2.475,5.793-1.583,8.817l58.987,200    c1.254,4.252,5.158,7.171,9.591,7.171H304.5c5.523,0,10-4.478,10-10c0-5.522-4.477-10-10-10H173.464l-53.088-180h33.713H334.08    h117.136h37.409l-53.088,180H399c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h44.013c4.433,0,8.337-2.919,9.591-7.171    l58.987-200C512.483,209.805,511.897,206.537,510.009,204.012z M324.079,200H164.088v-93h103.127h56.864V200z M441.216,200H344.08    V97c0-5.522-4.477-10-10-10h-56.864V20h164V200z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M454.101,438H145.552L62.68,157.017c-1.254-4.252-5.158-7.171-9.591-7.171H10c-5.523,0-10,4.478-10,10    c0,5.522,4.477,10,10,10h35.612l82.873,280.983c1.254,4.252,5.158,7.171,9.591,7.171h49.616c-2.647,5.094-4.153,10.873-4.153,17    c0,20.402,16.598,37,37,37c20.402,0,37-16.598,37-37c0-6.127-1.506-11.906-4.153-17h81.856c-2.647,5.094-4.153,10.873-4.153,17    c0,20.402,16.598,37,37,37c20.402,0,37-16.598,37-37c0-6.127-1.506-11.906-4.153-17h53.166c5.523,0,10-4.478,10-10    C464.102,442.478,459.624,438,454.101,438z M220.539,492c-9.374,0-17-7.626-17-17c0-9.374,7.626-17,17-17c9.374,0,17,7.626,17,17    C237.539,484.374,229.913,492,220.539,492z M368.088,492c-9.374,0-17-7.626-17-17c0-9.374,7.626-17,17-17c9.374,0,17,7.626,17,17    C385.088,484.374,377.462,492,368.088,492z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M251.16,251.93c-1.86-1.861-4.44-2.93-7.08-2.93c-2.63,0-5.21,1.07-7.07,2.93s-2.92,4.44-2.92,7.07s1.06,5.21,2.92,7.069    c1.87,1.861,4.44,2.931,7.07,2.931c2.64,0,5.21-1.07,7.08-2.931c1.86-1.859,2.92-4.439,2.92-7.069S253.02,253.79,251.16,251.93z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M202.021,249h-72.606c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h72.606c5.523,0,10-4.478,10-10    C212.021,253.478,207.544,249,202.021,249z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <Link to="/creer-une-boutique-en-ligne/"><p className="text-xl century text-white pt-3">SITE INTERNET E-COMMERCE</p></Link>
                        </div>
                        <div className="w-full my-6 sm:w-1/3 px-12 flex flex-col items-center justify-center"  /*data-aos='zoom-in' data-aos-delay="600"*/>
                            <svg x="0px" y="0px" viewBox="0 0 512 512" width="80px" height="80px">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M510.362,215.571l-81.99-125.025c-1.849-2.818-4.991-4.516-8.361-4.516H92.378c-3.363,0-6.5,1.69-8.35,4.499    L1.906,215.181c-0.391,0.539-0.73,1.121-1.013,1.743c-1.621,3.574-1.001,7.765,1.585,10.717l41.625,47.527    c3.639,4.155,9.955,4.573,14.109,0.935c4.154-3.639,4.572-9.956,0.934-14.109l-27.097-30.941h134.501L234.137,461.8    l-76.375-87.205c-3.638-4.155-9.956-4.573-14.109-0.935c-4.154,3.639-4.572,9.956-0.934,14.109l105.79,120.791    c1.898,2.168,4.641,3.412,7.522,3.412c2.882,0,5.623-1.244,7.521-3.413l112.63-128.632c3.639-4.155,3.22-10.472-0.936-14.109    c-4.156-3.639-10.473-3.22-14.109,0.936l-83.21,95.033l67.584-230.735h134.445l-62.183,71.02    c-3.639,4.155-3.22,10.472,0.936,14.109c1.897,1.662,4.245,2.477,6.583,2.477c2.782,0,5.55-1.155,7.526-3.413l76.706-87.605    C512.482,224.262,512.825,219.326,510.362,215.571z M28.573,211.055l63.785-96.821l63.495,96.821H28.573z M110.892,106.029    h126.623l-63.311,96.541L110.892,106.029z M256.03,114.263l63.475,96.792H192.555L256.03,114.263z M256.03,465.403l-68.642-234.35    h137.284L256.03,465.403z M338.02,202.821l-63.475-96.792h126.952L338.02,202.821z M356.535,211.055l63.476-96.792l63.474,96.792    H356.535z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M157.189,327.017c-25.793,0-46.778-20.985-46.778-46.778c0-5.522-4.477-9.999-9.999-9.999s-9.999,4.477-9.999,9.999    c0,25.793-20.985,46.778-46.778,46.778c-5.521,0-9.999,4.477-9.999,9.999c0,5.522,4.478,9.999,9.999,9.999    c25.793,0,46.778,20.985,46.778,46.778c0,5.522,4.478,9.999,9.999,9.999s9.999-4.477,9.999-9.999    c0-25.793,20.985-46.778,46.778-46.778c5.522,0,9.999-4.477,9.999-9.999C167.188,331.494,162.711,327.017,157.189,327.017z     M100.412,358.677c-5.451-8.782-12.879-16.209-21.66-21.661c8.781-5.451,16.208-12.878,21.66-21.661    c5.451,8.782,12.879,16.209,21.66,21.661C113.291,342.468,105.864,349.894,100.412,358.677z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M502.001,40.023c-16.54,0-29.997-13.457-29.997-29.997c0-5.522-4.478-9.999-9.999-9.999s-9.999,4.477-9.999,9.999    c0,16.54-13.457,29.997-29.997,29.997c-5.521,0-9.999,4.477-9.999,9.999s4.478,9.999,9.999,9.999    c16.54,0,29.997,13.457,29.997,29.997c0,5.522,4.478,9.999,9.999,9.999s9.999-4.477,9.999-9.999    c0-16.54,13.457-29.997,29.997-29.997c5.521,0,9.999-4.477,9.999-9.999S507.522,40.023,502.001,40.023z M462.005,60.052    c-2.853-3.798-6.232-7.177-10.03-10.03c3.798-2.853,7.177-6.232,10.03-10.03c2.853,3.798,6.232,7.177,10.03,10.03    C468.237,52.874,464.857,56.254,462.005,60.052z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M402.783,335.371c-1.859-1.87-4.439-2.93-7.068-2.93c-2.631,0-5.199,1.06-7.069,2.93c-1.86,1.86-2.93,4.44-2.93,7.069    s1.069,5.209,2.93,7.069c1.86,1.86,4.438,2.93,7.069,2.93c2.63,0,5.209-1.07,7.068-2.93c1.86-1.86,2.931-4.44,2.931-7.069    S404.644,337.231,402.783,335.371z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <Link to="/creation-site-internet-sur-mesure/"><p className="text-xl century text-white pt-3">SITE SUR-MESURE</p></Link>
                        </div>
                    </div>
                </section>
                <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                    <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" /*data-aos="zoom-in"*/>
                        <span className="text-bleu">/</span>Vous souhaitez en savoir plus sur la création de site internet à Montauban ?
                        </h2>
                    <hr className="blue"></hr>
                    <h4 /*data-aos='fade-left'*/ className="text-lg px-6 md:text-xl text-grey text-center century italic pb-6">Vous souhaitez en savoir plus sur votre future création de sites web ?
                        Nous répondons à vos interrogations sur la mise en place de votre site internet professionnel et sur-mesure.</h4>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="EST-CE POSSIBLE DE METTRE EN PLACE DES FONCTIONNALITÉS SUR-MESURE POUR MON SITE ?">
                                <p><strong className="font-normal">Avoir un site internet professionnel</strong> répond à des nombreux besoins au sein d'une entreprise et notamment dans le cadre d'une <strong><Link to="/creation-site-internet-toulouse/strategie-digitale/" className="text-bleu hover:text-black font-bold">stratégie digitale</Link></strong>. Il peut avoir plusieurs rôles et c'est ce qui fait de lui un outil principalement performant. Il constitue aussi bien la <strong className="font-normal">vitrine d'une entreprise</strong> et peut même présenter des fonctionnalités selon la solution en place. Grâce à un <strong className="font-normal">site web sur-mesure</strong>, les opportunités sont nombreuses : <strong className="font-normal">simulateur de devis</strong>, <strong className="font-normal">module de réservation</strong>, <strong className="font-normal">configurateur de produits</strong>, <strong className="font-normal">outil de recherche</strong>, etc.
                                <br /><br />
                                Par ailleurs, la <strong className="font-normal">plateforme web</strong> peut aussi constituer un <strong className="font-normal">outil de gestion pour les professionnels</strong> souhaitant mettre le numérique au centre même de leur fonctionnement. L’<strong><Link to="/">agence web Linkweb à Agen</Link></strong> <strong className="font-normal">crée un site internet</strong> adapté à votre entreprise et à vos besoins. Nous nous attachons à apporter une réponse à vos objectifs, dès la <strong className="font-normal">conception du site</strong>, jusqu'à la définition des espaces d'administration et la répartition des rôles et permissions. En effet, nous accomplissons votre <strong className="font-normal">CRM ou intranet</strong> en répondant à vos besoins.
                                <br /><br />
                                    <span className="font-bold"><strong>Créer un site</strong> n'est pas un objectif : il constitue un moyen pour vous permettre d'atteindre vos objectifs.</span></p>
                            </div>
                            <div label="COMMENT CRÉER UN SITE WEB DESTINÉ À LA POPULATION MONTALBANAISE (OCCITANIE) ?">
                                <p><strong className="font-normal">Définir ses cibles</strong> dès l’élaboration du projet est l'une des étapes les plus importantes. En effet, la <strong className="font-normal">création d'un site internet</strong>, au même titre que toute <strong className="font-normal">définition d’une stratégie de communication</strong>, n'échappe pas à cette norme. <strong className="font-normal">Créer un site efficace</strong> demande de penser son public dès la <strong className="font-normal">conception du projet</strong> et des contenus destinés à être publiés.
                                <br /><br />
                                Également, le fait de interagir dans un environnement aussi concurrentiel que l’<strong className="font-normal">agglomération montalbanaise</strong> demande un certain investissement dans le <strong><Link to="/creation-site-internet-toulouse/webmarketing/" className="text-bleu hover:text-black font-bold">webmarketing</Link></strong> : il est nécessaire de mettre en place un <strong className="font-normal">site professionnel</strong> mais aussi un <strong className="font-normal">référencement web</strong> (<strong className="font-normal">optimisation de site ou gestion de campagnes Google Adwords</strong>) soigné.
                                <br /><br />
                                Les professionnels de notre <strong className="font-normal">agence web à Montauban</strong> anticipent et déterminent votre <strong className="font-normal">stratégie de référencement</strong> en fonction des critères liés à vos cibles et à la concurrence. Linkweb dispose de tous les outils afin de prendre des décisions qui vous permettront d'<strong className="font-normal">obtenir un site efficace et fiable</strong>. <br /><br />

                                Que vous soyez <strong><Link to="/creation-site-internet-toulouse/creation-site-pour-artisan/" className="text-bleu hover:text-black">artisan</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-menuisier/" className="text-bleu hover:text-black">menuisier</Link>, </strong><strong><Link to="/creation-site-internet-toulouse/site-internet-charpentier/" className="text-bleu hover:text-black">charpentier</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-avocat" className="text-bleu hover:text-black">avocat</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-commerce/" className="text-bleu hover:text-black">commerçant</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-industrie/" className="text-bleu hover:text-black">industriel</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-immobilier/" className="text-bleu hover:text-black">directeur d'une agence immobilière</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-hotel/" className="text-bleu hover:text-black">hôtelier</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-automobile/" className="text-bleu hover:text-black">gérant d'une entreprise automobile</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-photographe/" className="text-bleu hover:text-black">photographe</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-restaurant/" className="text-bleu hover:text-black">restaurateur</Link></strong>, <Link to="/creation-site-internet-toulouse/site-internet-pisciniste/" className="text-bleu hover:text-black"><strong>pisciniste</strong></Link>, <Link to="/creation-site-internet-toulouse/site-internet-coiffure/" className="text-bleu hover:text-black"><strong>coiffeur</strong></Link>, <strong><Link to="/creation-site-internet-toulouse/site-internet-cuisiniste/" className="text-bleu hover:text-black">cuisiniste</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-chauffage-climatisation/" className="text-bleu hover:text-black">chauffagiste ou climatiseur</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-ramoneur/" className="text-bleu hover:text-black">ramoneur</Link>,</strong> <strong><Link to="/creation-site-internet-toulouse/site-internet-electricien/" className="text-bleu hover:text-black">électricien</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-serrurier/" className="text-bleu hover:text-black">serrurier</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-paysagiste/" className="text-bleu hover:text-black">paysagiste</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-mode" className="text-bleu hover:text-black">gérant d'une entreprise de la mode</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-banque/" className="text-bleu hover:text-black">banquier</Link></strong>, <strong><Link to="/creation-site-internet-toulouse/site-internet-psychologue/" className="text-bleu hover:text-black">psychologue</Link></strong> ou issu de tout autre secteur professionnel, vous trouverez une solution adaptée à vos besoins.
                                </p>
                            </div>
                            <div label="COMBIEN DE TEMPS EST NÉCESSAIRE POUR OBTENIR UNE VERSION DÉFINITIVE DE MON SITE ?">
                                <p>La durée de <strong className="font-normal">production d'un site internet</strong> varie en fonction de nombreux critères. En effet, des éléments comme la <strong className="font-normal">définition des contenus</strong>, la <strong className="font-normal">création des <Link to="/creation-site-internet-toulouse/maquette-site-web/" className="font-bold text-bleu hover:text-black">maquettes</Link></strong>, le retour client, la <strong><Link to="/creation-site-internet-toulouse/redaction-web/" className="text-bleu hover:text-black font-bold">rédaction des textes</Link></strong>, les modifications à effectuer ou encore le <strong className="font-normal">développement web</strong> vont impacter ce temps.
                                <br /><br />
                                Par ailleurs, d'autres éléments propres à votre projet peuvent aussi influer sur le <strong className="font-normal">temps de production</strong>, comme l'<strong className="font-normal">installation de fonctionnalités particulières</strong>, par exemple. Il est déterminant de soigner les détails en vue d'établir un <strong className="font-normal">outil professionnel</strong> et adapté à votre entreprise. Il n’existe, à ce titre, pas de durée prédéfinie pour la <strong className="font-normal">création d’un site internet</strong> : ceci va varier selon votre projet.<br />
                                    <br />
                                Enfin, il faut savoir que ces délais peuvent varier selon les agences et leurs modes de fonctionnement. En effet, les <strong className="font-normal">agences</strong> s’organisent généralement en services délimités par leur compétence principale. C’est notamment le cas pour le <strong>graphisme, le développement web ou encore le référencement naturel et sponsorisé</strong>.<br />
                                    <br />
                                Chaque projet doit être traité par chacun de ces services et coordonné par un chef de projet. En fonction des <strong className="font-normal">délais de production</strong>, le temps de passage d’un service à l’autre peut varier en fonction des <strong className="font-normal">agences web</strong>. Ceci est valable pour tous types d’agence. <a href="https://bleu-communication.ch/creation-de-site-internet/" className="font-bold text-bleu hover:text-black" target="_blank" rel="noopener noreferer">Découvrez les sites web qu’ils créent</a> à ce propos.<br />
                                    <br />
                                De la <strong>phase d’analyse (audit concurrentiel, audit technique)</strong>, jusqu’à la <strong>phase opérationnelle</strong> et en passant par la <strong>mise en place stratégique</strong>, les <strong>délais de création d’un site internet</strong> vont être plus ou moins allongés.<br />
                                    <br />
                                Ainsi, de nombreux paramètres, qu’ils soient <strong>inhérents à votre projet</strong> ou bien au <strong>fonctionnement du prestataire web vont influer sur la mise en place de votre site web</strong>. Les différents types d’organisation ont pour vocation de <strong>raccourcir au maximum les délais tout en garantissant une qualité de rendu</strong>. Toutefois, la poursuite de votre projet nécessite le passage d’étapes importantes et qui ne peuvent être galvaudées. C’est pourquoi, <strong>la création d’un site web peut durer plusieurs semaines, comme parfois plusieurs mois</strong>.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                    <h3 className="century text-center text-2xl tracking-wider pb-3 leading-tight" /*data-aos="zoom-in"*/>
                        <span className="text-bleu">/</span>Ils sont satisfaits par notre offre de création de site internet
                        </h3>
                    <hr className="blue"></hr>

                </section>
                <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-center justify-center text-center mt-3 px-6 mb-12">
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up"*/>
                        <img
                            src={stars}
                            alt="Création site internet Agen"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Château de Boisverdun</div>
                        <div className="italic">« Nous sommes chez Linkweb depuis 3 ans et je n’ai jamais eu aucun problème les techniciens sont à l’écoute et nous appellent chaque mois pour faire un point! Continuez comme ça ne changez rien!! »</div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
                        <img
                            src={stars}
                            alt="Création site internet Toulouse"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Auto École Anne</div>
                        <div className="italic">« Entreprise très sérieuse. Équipe à l écoute et réactive des changements que je demande tous les mois. Le référencement est bien suivi et j ai un retour d’ Anthony tous les mois. Je recommande ! »</div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500"*/>
                        <img
                            src={stars}
                            alt="Création site internet Agen"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Fanny Coiffure</div>
                        <div className="italic">« Ils sont de très bons conseils, le suivi est régulier, si vous voulez changer des choses avant qu’ils ne vous rappellent, c’est toujours possible avec un mail. Je recommande vivement toute l’équipe . »</div>
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
                            Vous êtes déjà clients ? Donnez nous votre avis !
                            </a>
                    </div>
                </section>
                <section className="max-w-5xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3 bg-gris p-10">
                    <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight"><span className="text-bleu">/</span>Vous portez un projet de création de site internet à Toulouse ?</h2>
                    <br />
                    <p className="century text-center text-md">Linkweb conduit votre projet <strong>de création de site internet à Toulouse</strong>, de sa conception à sa réalisation. Notre équipe vous accompagne dans la mise en route technique et dans le choix de la stratégie éditoriale à adopter pour répondre à vos objectifs.</p>
                    <div className="max-w-sm mx-auto block">
                        <RoundButton url="/creation-site-internet-toulouse/" text="J'ai un projet de création à Toulouse" />
                    </div>
                </section>
                <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                    <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" /*data-aos="zoom-in"*/>
                        <span className="text-bleu">/</span>Les dernières actualités
                        </h3>
                    <hr className="blue"></hr>
                    <LastPosts lastposts={this.props.data.allWpPost.edges} />
                    <Link className="bg-bleu text-white px-16 py-3 block mx-auto hover:bg-black font-normal" to="/actualite-digitale/">Voir l'actualité digitale</Link>
                    <br />
                </section>

                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsMontauban {
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
export default CreationSiteInternetMontaubanPage;




