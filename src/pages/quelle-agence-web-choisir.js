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




class QuelleAgenceWebChoisir extends Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Quelle agence web choisir ?"
                    description="L'offre est grandissante dans le secteur du Web. Pour trouver la bonne agence web pour mener votre projet, suivez nos conseils."
                    url="https://linkweb.fr/quelle-agence-web-choisir/"
                    nom="Quelle agence web choisir ?"
                    slug="quelle-agence-web-choisir/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Quelle <span className="text-bleu">agence web</span> choisir ?</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Agence spécialisée dans la création et le référencement web. Mise en place d’une solution fonctionnelle sur-mesure, en marketing et en communication digitale.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}

                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Vous souhaitez lancer la mise en place de votre projet web ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md">Vous êtes un prestataire désirant établir une stratégie de communication digitale pour faire connaître votre entreprise ? Nous mettons nos compétences au service de votre projet.</p>
                        <br />
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                            <button
                                className="font-light mx-auto roundedButton bg-darkgrey text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = '/contact-agence-web-toulouse/';
                                }}
                            >Demander un devis</button>
                            {/* <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" color="darkgrey" text="Je demande un devis" /> */}
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-3/5 px-10 mt-16 lg:-mt-48 mb-16 lg:mb-48">
                    <br />
                    <h3 className="century text-xl text-center">
                        Pour débuter sur le web, il est indispensable de se tourner vers les bons partenaires. Bien s’entourer lors du lancement de son projet de site web garantit la pérennité de votre démarche et des retombées pertinentes.
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Quels sont les différents types d’agences web ?</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Les services proposés par les agences (ou freelance) dépendent de leur domaine de spécialisation. Les stratégies web proposées sont adaptées selon vos objectifs grâce à une expertise spécifique dans le domaine. Dans le cadre de votre recherche de prestataire digital, il vous faut veiller à choisir parmi les agences web, celle qui sera la plus disposée à répondre à votre cahier des charges et qui satisfera vos attentes. </h3>
                    </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Agence spécialisée dans le</span><br /><span className="font-bold text-5xl md:text-6xl">DIGITAL</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg z-50">Les <strong className="font-normal">agences digitales</strong> proposent un savoir-faire en matière de <strong className="font-normal">marketing</strong> pour communiquer via les <strong className="font-normal">réseaux sociaux</strong>, les newsletters ou via les campagnes de SMS, par exemple. Ce type d’<strong className="font-normal">agence spécialisée</strong> offre des solutions concernant les problématiques du <strong className="font-normal">Web</strong> pour dynamiser son <strong className="font-normal">marketing digital</strong>.
                            <br /><br />En effet, il est possible de faire appel à ce type d'<Link to="/agence-de-communication-digitale/" className="text-bleu hover:text-white font-bold">agence de communication digitale</Link> pour la mise en place de <strong className="font-normal">newsletter (campagne de mailing)</strong> ou pour mobiliser ses <strong className="font-normal">réseaux sociaux comme Twitter ou Facebook</strong> pour développer l'activité en ligne du <strong className="font-normal">client</strong>. De la même façon, la promotion d'<strong className="font-normal">actions de communication sur le Web</strong> peut passer par des campagnes marketing sur-mesure comme par la création d’une <strong className="font-normal">application mobile</strong>. Ce type d’agence se charge de toute la communication qui gravite autour d’un <strong className="font-normal">projet digital</strong>.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Agence de développement de </span><br /><span className="font-bold text-6xl">SITES WEB</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">Linkweb fait partie des <strong className="font-normal"><Link to="/agence-web-cahors/" className="text-bleu hover:text-white font-bold">agences web à Cahors</Link></strong> spécialisées dans la définition et l’accompagnement de <strong className="font-normal">projets web sur-mesure</strong>. En effet, les prestations proposées sont garantes de qualité sur le plan de la réalisation (travail du <strong className="font-normal">webdesign</strong>, mobilisation de <strong className="font-normal">CMS</strong>, création de <strong className="font-normal">liens externes</strong>, optimisation interne <strong className="font-normal">SEO</strong>) et du suivi. Les consultants des <strong className="font-normal">agences de développement de sites internet</strong> possèdent une grande marge de manœuvre pour leurs interventions en fonction des <strong className="font-normal">types de sites</strong>.
                        <br /><br />Ils adaptent les technologies utilisées en fonction du <strong className="font-normal">projet web</strong> qui leur est confié. En effet, ce type d'agence vous accompagne du choix de la réalisation au <strong className="font-normal">référencement naturel SEO du site</strong> en passant par un suivi régulier pour toujours produire une <strong className="font-normal">solution web</strong> adaptée à son client.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Agence de communication </span><br /><span className="font-bold text-6xl">GLOBALE</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">Souvent appelées « <strong className="font-normal">agences de communication 360°</strong> », elles proposent de nombreux services différents en termes de <strong className="font-normal">communication en ligne</strong> : ses services vont du webmarketing à l'événementiel en passant par le graphisme.
                        Ces <strong className="font-normal">agences</strong> sont pluridisciplinaires, elles basent leurs interventions sur la communication globale autour des projets de leurs <strong className="font-normal">clients</strong>.
                        <br /><br />Enfin, elles proposent des services permettant à une entreprise de se positionner de manière pertinente en termes de <strong className="font-normal">communication</strong> et en fonction des objectifs définis (mobilisation des canaux de <strong className="font-normal">communication web</strong>). Cependant, les <strong className="font-normal">agences de communication</strong> ne fournissent pas forcément de solutions spécifiques à des problématiques particulières tel que cela pourrait l'être avec le <strong className="font-normal">digital</strong>.</p>
                    </div>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Quelle agence web choisir dans le cadre des problématiques du Web ?</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Notre agence web met un point d’honneur à vous apporter des solutions conçues spécialement pour vous. Notre savoir-faire et nos compétences nous permettent de vous fournir une prestation complète et de qualité répondant efficacement à votre cahier des charges. </h3>
                    </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Comment choisir son agence de communication web" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10  flex flex-col">
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                    <p className="text-center">1</p>
                                </div>
                                <div className="w-full px-6 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>CONCEPTION DE SITES INTERNET SUR-MESURE
                                </h3>
                                    <br />
                                    <h4 className="century"><span className="font-bold">Notre équipe de développeurs produit une navigation accessible et simplifiée sur votre site. Notre agence définit un design de plateforme pour rendre votre site internet intuitif et accessibles pour vos visiteurs.</span></h4>
                                    <br />
                                    <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" >Grâce à nos compétences en <strong className="font-normal">UI et UX design</strong>, nous garantissons l'ergonomie et la fluidité de navigation pour votre <strong className="font-normal">projet web</strong> afin de produire une accessibilité conforme en direction des <strong className="font-normal">moteurs de recherche comme Google</strong>, des navigateurs mais aussi des utilisateurs. Pour sécuriser la navigation sur <strong className="font-normal">votre site en ligne</strong>, nous respectons les conformités RGPD et la sécurisation HTTPS. </p>
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
                                        <span className="text-bleu">/</span>DÉFINITION D'UNE STRATÉGIE DE VISIBILITÉ SUR-MESURE
                                    </h3>
                                    <br />
                                    <h4 className="century"><span className="font-bold">En contactant l’équipe de Linkweb pour la réalisation de votre projet, il faut savoir qu'il est essentiel de travailler ensemble pour comprendre et préciser vos besoins.</span></h4>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Notre <strong className="font-normal">agence</strong> prend en compte chacune de vos demandes, étudie la concurrence et vous suggère un <strong className="font-normal">plan d’actions SEO et/ou SEA</strong> selon vos <strong className="font-normal">objectifs</strong>, vos cibles et les moyens à investir dans la stratégie.
                                        Grâce à notre expertise et nos compétences dans le domaine, nous faisons tout pour vous apporter la <strong className="font-normal">visibilité</strong> que vous méritez.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">3</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>ACCOMPAGNEMENT DANS LA PRISE DE DÉCISION
                                    </h3>
                                    <br />
                                    <h4 className="century"><span className="font-bold">Pour répondre à votre recherche de visibilité et dynamiser votre activité, notre entreprise spécialisée déploie toute son expertise dans le webmarketing.</span></h4>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Notre <strong className="font-normal">équipe de consultants</strong> utilise des <strong className="font-normal">outils professionnels</strong> (CMS, suivi de positionnement, audit SEO, outil d'analyse de mots-clés, etc.) performants pour vous guider vers la décision la plus appropriée en fonction de vos attentes.
                                        Nous vous fournissons toutes les clés pour faire évoluer constamment vos <strong className="font-normal">projets en ligne</strong> et vous accompagner régulièrement dans le domaine du <strong className="font-normal">digital</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">4</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>SUIVI ET GESTION DE PROJET
                                    </h3>
                                    <h4 className="century"><span className="font-bold">En faisant le choix de collaborer avec notre agence pour vos projets, vous misez sur un développement régulier de votre activité web.</span></h4>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Grâce au suivi effectué, nos <strong className="font-normal">clients</strong> sont informés de l’activité et des résultats du <strong className="font-normal">référencement naturel de leur site</strong> par nos consultants qualifiés. 
                                    &nbsp;<Link to="/comment-choisir-son-agence-de-communication-web/" className="text-bleu hover:text-black font-bold">Choisir notre <strong>agence</strong></Link>, c’est choisir une expertise et des stratégies évolutives viables pour <strong className="font-normal">votre site internet</strong>. Nous travaillons à répondre ensemble à votre cahier des charges performants tout en améliorant votre <strong className="font-normal">positionnement dans les résultats de Google</strong> (utilisation de CMS, contenus éditoriaux, design, budget, etc.).</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Quelles sont les différences entre les différents types d'agence web ?</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Le fonctionnement des agences web offre la possibilité de mettre en place un travail d’équipe permettant une polyvalence dans leurs prestations, à la différence d'une prestation en freelance. Ces entreprises font appel à des techniques spécifiques et des procédés variés, ce qui explique la différence entre les prestations proposées.</h3>
                    </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="DES PRESTATIONS DIFFÉRENTES PROPOSÉES">
                                <p>Dans la présentation des différents services que l'agence peut vous proposer, il faut savoir que la formulation des engagements ainsi que les tarifs avancés ont une importance toute particulière. Certaines propositions peuvent sembler similaires d’une agence à l’autre, mais ne sont pas exécutés de la même façon et le budget à prévoir diffère, de la même façon que le résultat attendu. Cela dépend principalement des <strong className="font-normal">moyens engagés dans la stratégie</strong>.
                                    <br /><br />
                                    Linkweb est une <strong className="font-normal"><Link to="/comment-notre-agence-de-conception-de-site-internet-realise-votre-projet/" className="font-bold text-bleu hover:text-black">agence de conception de site internet</Link></strong> qui veille à fournir de la <strong className="font-normal">visibilité</strong> et une parfaite transparence quant à la <strong className="font-normal">qualité du contenu</strong> et de la rigueur dans sa <strong className="font-normal">conception de site</strong>.
                                </p>
                            </div>
                            <div label="DU SUIVI DE PROJET DE L'ENTREPRISE">
                                <p>Une entreprise <strong className="font-bold">Web</strong> doit faire preuve de pédagogie et afficher une méthode claire pour rendre son domaine de compétence accessible à ses <strong className="font-normal">clients</strong>.
                                    Il existe plusieurs méthodes pour une offrir un <strong className="font-normal">suivi régulier et constructif</strong>. Les techniques diffèrent, mais toujours avec transparence et clarté.
                                    Le <strong className="font-normal">suivi personnalisé de Linkweb</strong> a pour but de répondre aux attentes de nos <strong className="font-normal">clients</strong> en proposant un <strong className="font-normal">travail de référencement</strong> régulier (au sein de <strong className="font-normal">Google</strong>, par exemple) et d'effectuer les modifications à la demande pour des sites bien parfaitement à jour et toujours à l'image de nos clients.
                                </p>
                            </div>
                            <div label="RÉACTIVITÉ ET COLLABORATION">
                                <p>L’<strong className="font-normal">agence</strong> doit être un véritable partenaire de travail. Pour ce faire, elle se doit d'être réactive et de faire preuve d’initiative pour répondre aux attentes définies. C'est pourquoi, <Link to="/pourquoi-travailler-dans-une-agence-web/" className="text-bleu hover:text-black font-bold">travailler dans une agence web</Link> nécessite une connaissance parfaite de ce domaine ainsi que des méthodologies employées. L'<strong className="font-normal">agence web</strong> doit également mettre son expérience à rude épreuve pour s’adapter aux imprévus qui peuvent survenir. Force de proposition, elle doit apporter son savoir-faire de manière continue en direction de ses <strong className="font-normal">clients</strong> pour ne jamais les laisser sans solution. En somme, elle doit faire preuve d'une capacité d'adaptation sans faille.
                                    Faire le choix de confier la <strong className="font-normal">réalisation de son site à Linkweb</strong>, c’est se lancer dans une <strong className="font-normal">collaboration de qualité</strong> et pérenne.
                            </p>
                            </div>
                        </Accordion>
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
query lastsThreePostsQuelleAgenceWebChoisir {
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
export default QuelleAgenceWebChoisir;




