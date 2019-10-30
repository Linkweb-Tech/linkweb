import React from "react";
import { Link, graphql } from "gatsby";
import posed from 'react-pose';
import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import Accordion from '../components/accordion';

import tlse from "../images/logo_universite-federale.png";
import peugeot from "../images/peugeot.png";
import onco from "../images/logo-onco.png";
import sdis from "../images/logo-sdis47.png";
import normand from "../images/normandie.png";
import blocBg from "../images/background.jpg";
import Bg from "../images/agence-web-bg.jpg";
import imac from "../images/redaction.jpg";
import bgDev from '../images/bg-dev.jpg';
import stars from '../images/stars.png';
import bureau from '../images/bureau2-min.jpg';

import web from '../images/web.svg';
import laptop from '../images/laptop.svg';
import bullhorn from '../images/bullhorn.svg';
import diagram from '../images/diagram.svg';
import analysis from '../images/analysis.svg';
import contract from '../images/contract.svg';
import hg from "../images/logo_cd31.svg";


class AgenceWebToulouse extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Web Toulouse - Projets Web sur-mesure - Linkweb"
                    description="L'agence web Linkweb déploie son offre en termes de communication web à Toulouse (31) : création de site internet, référencement naturel et ads."
                    keywords={[`Agence Web Toulouse`, `Agence Web Agen`, `Agence digitale Agen`, `Agence digitale Toulouse`]}
                    url="https://linkweb.fr/agence-web-toulouse/"
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
                    <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ background: '#00000096 url(' + Bg + ')', backgroundPosition:'center', backgroundSize:'cover', backgroundBlendMode:'multiply' }}>
                        <h1 data-aos="fade-up" data-aos-delay="500" className="century text-5xl sm:text-6xl text-center text-white">
                            Agence web Toulouse<span className="text-bleu">/</span>Agen
                        </h1>
                        <h3 className="italic text-center text-lg sm:text-2xl text-white mt-3">Pour vous rapprocher de l’essentiel, faites le choix du savoir-faire et de l’expérience.</h3>
                        <RoundButton url="/contact-agence-web-toulouse/" text="Je veux developper ma communication en ligne" />
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <h3 data-aos='fade-right' className="text-center text-4xl century">
                            Nous les accompagnons depuis plusieurs années pour servir l’intérêt général.
                        </h3>
                        <hr className="blue"></hr>
                        
                    </section>
                    <section className="max-w-5xl flex-wrap jusitfy-center flex w-full mx-auto px-4 py-2 my-2">
                        <div className="w-1/3 md:w-1/6 mb-10" data-aos='fade-up'>
                            <img
                                src={peugeot}
                                alt="Agence Web Toulouse"
                            />
                        </div>
                        <div className="w-1/3 md:w-1/6" data-aos='fade-up' data-aos-delay='200'>
                            <img
                                src={normand}
                                alt="Agence Web Agen"
                            />
                        </div>
                        <div className="w-1/3 md:w-1/6" data-aos='fade-up' data-aos-delay='400'>
                            <img
                                src={onco}
                                alt="Agence Web Toulouse"
                            />
                        </div>
                        <div className="w-1/3 md:w-1/6 mx-auto block" data-aos='fade-up' data-aos-delay='600'>
                            <img
                                src={tlse}
                                alt="Agence Web Agen"
                            />
                        </div>
                        <div className="w-1/3 md:w-1/6 mx-auto block" data-aos='fade-up' data-aos-delay='800'>
                            <img
                                src={sdis}
                                alt="Agence Web Agen"
                            />
                        </div>
                        <div className="w-1/3 md:w-1/6 mx-auto block" data-aos='fade-up' data-aos-delay='1000'>
                        <img 
                            className="mx-12"
                            src={hg}
                            alt="Réalisations Site Web Agen"
                            width="65px"
                        />
                        </div>
                        <div className="w-full" data-aos='zoom-in'>
                            <p className="text-md text-center py-12 century">
                                Vous êtes un organisme public ou privé à la recherche d’une <strong>agence web à Toulouse</strong> pour la mise en place d’une stratégie digitale ? <strong>Linkweb</strong> est à l’écoute de vos besoins pour vos proposer une solution taillée pour vous.</p>
                        </div>
                    </section>
                    <section className="flex-wrap flex flex-col md:flex-row md:w-full max-w-5xl mx-auto py-2 my-2 ">
                        <div className=" font-bold w-full md:w-1/2 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white bg-bleu" data-aos="zoom-in">
                            <h2 className="text-2xl century pb-6" ><span className="text-black">/</span>L’AGENCE LINKWEB À AGEN</h2>
                            <p className="text-xl century">10 rue Albert Ferrasse <br/>
                            47550 BOÉ</p>
                            <RoundButton color="black" href="https://www.google.com/maps/place/Linkweb/@44.1811928,0.6268053,17z/data=!3m1!4b1!4m5!3m4!1s0x12abb323e4e18603:0xb2f1e6fffa7f9cd4!8m2!3d44.181189!4d0.628994" text="Plus d'informations pratiques" />
                        </div>
                        <div className="font-bold w-full md:w-1/2 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white bg-black" data-aos="zoom-in" data-aos-delay="200">
                            <h2 className="text-2xl century pb-6" ><span className="text-bleu">/</span>L’AGENCE LINKWEB À TOULOUSE</h2>
                            <p className="text-xl century">44 Rue de Bayard <br/>
                            31000 TOULOUSE</p>
                            <RoundButton href="https://www.google.com/maps/place/Linkweb/@43.6099559,1.4478881,17z/data=!3m1!4b1!4m5!3m4!1s0x12aebb43d4c8a751:0xb4abc0044173017!8m2!3d43.6099559!4d1.4500768" text="Plus d'informations pratiques" />
                        </div>

                    </section>
                    <section className="flex w-full flex-col lg:flex-row mx-auto px-0 py-6 my-4">
                        <div className="w-full lg:w-1/2 ">
                            <img src={imac} alt="Agence Web Toulouse" />
                        </div>
                        <div className="w-full lg:w-1/2 max-w-3xl px-12 py-12" >
                            <h2 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in">
                                <span className="text-bleu">/</span>AGENCE WEB À TOULOUSE : NOTRE CRÉATIVITÉ AU SERVICE DE VOTRE EFFICACITÉ
                            </h2>
                            <h4 className="century text-lg tracking-wider pb-6 text-justify" data-aos='fade-left'>
                                <span className="font-bold">Notre vocation : développer votre projet web pour faire émerger votre professionnalisme et apporter à votre entreprise la visibilité qu’elle mérite.</span>
                            </h4>
                            <p data-aos='fade-bottom' className="text-justify">
                                Depuis plus de 10 ans, notre expérience dans la <strong><Link to="creation-site-internet-toulouse/" className="hover:text-bleu">création de sites internet</Link></strong> nous a permis de développer nos compétences<strong> en tant qu'agence de conseil en communication</strong> pour d’envisager les <strong>projets web</strong> comme des solutions uniques répondant aux besoins de chaque <strong>client</strong>.<br /><br/>

                                Présente à <strong>Agen</strong> en <strong>Lot-et-Garonne</strong>, l’<strong>agence web Linkweb</strong> développe sa filiale <strong>toulousaine</strong>. Spécialisée dans le secteur des <strong>marchés publics</strong> comme dans les <strong>marchés privés</strong>, notre <strong>agence de communication web</strong> est particulièrement active pour répondre aux demandes émanant de tous types d’organismes en faisant du <strong>marketing digital</strong>, un atout considérable. <strong><Link to="/" className="hover:text-bleu">Linkweb</Link></strong> déploie son offre de <strong>création de site web</strong>, <strong>refonte de site internet</strong> et de <strong>référencement web</strong> à la <strong>ville Rose</strong> et ses alentours.<br /><br/>

                                De part son savoir-faire en tant qu’<strong>agence digitale</strong>, Linkweb met en place votre <strong>site internet</strong> grâce à des solutions de <strong><Link to="/creation-de-site-internet-47-31/" className="hover:text-bleu">développement web</Link></strong> récentes et optimise votre <strong><Link to="/referencement-de-site-internet-47-31/" className="hover:text-bleu">référencement naturel</Link></strong> grâce à une veille permanente en <strong>web marketing</strong>. Quelle que soit la nature de votre activité, nous avons le savoir-faire  et les <strong>expertises</strong> pour vous permettre d’atteindre vos objectifs.<br />
                            </p>
                            
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                            Notre agence est taillée pour <span className="text-bleu">votre projet web</span>
                        </h2>
                        <hr className="blue"></hr>

                    </section>
                    <section className="flex flex-col md:flex-row flex-1 max-w-6xl mx-auto home-step mt-24 mb-12 my-12 px-4 lg:my-24 lg:px-24">
                        <div className="w-full md:w-1/2 one px-12">
                            <div className="flex items-center lg:items-start flex-col lg:flex-row flex-1">
                                <div className="blackBulle my-6" data-aos="fade-up">1</div>
                                <section>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                        <span className="text-bleu">/</span>JE SUIS UN ORGANISME PUBLIC
                                </h3>
                                    <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                       Mairie, conseil départemental, établissement culturel : informer les administrés est votre priorité ? Notre <strong>agence de création</strong> vous propose des solutions pour y parvenir. Mettez tous les atouts de votre côté pour mener votre campagne de <strong>communication web</strong>.
                                </div>
                                    

                                </section>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 two px-12">
                            <div className="flex items-center lg:items-start flex-col lg:flex-row flex-1">
                                <div className="blackBulle my-6" data-aos="fade-up">2</div>
                                <section>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                        <span className="text-bleu">/</span>JE SUIS UNE ENTREPRISE
                                </h3>
                                    <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                        TPE, PME, commerçants, l’<strong>agence web Linkweb</strong> répond à vos besoins de <strong>visibilité</strong> et de <strong>notoriété</strong> grâce à la mise en place de <strong>stratégies digitales</strong> efficaces et qui vous rapprochent de vos prospects. Nous activons tous les <strong>leviers</strong> pour développer et faire connaître votre <strong>outil en ligne</strong>.
                                </div>
                                    
                                </section>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex align-center justify-center text-center mb-6">
                        <div className="w-full flex flex-col md:flex-row justify-center">
                            <Link
                                className="century text-sm hover:text-bleu"
                                to="/creation-site-internet-toulouse/"
                            >
                                Je souhaite une création de site internet
                            </Link>&nbsp;
                            |&nbsp;
                            <Link
                                className="century text-sm hover:text-bleu"
                                to="/referencement-toulouse/"
                            >
                                Je souhaite améliorer la visibilité de mon site existant
                            </Link>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                            <span className="text-bleu">/</span>AGENCE WEB À TOULOUSE : QUI SOMMES-NOUS ?
                        </h2>
                        <hr className="blue"></hr>
                        <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Notre relation est basée sur la confiance et la collaboration : embarquez avec nous !</h4>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-0 pb-0 my-2">
                        <ul className="mt-6 pl-1 sm:pl-6">
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792"><path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>&nbsp;
                                <p>Une équipe de <strong>développeurs web</strong> qualifiés pour la mise en place de votre <strong>site internet</strong>.</p>
                            </li>
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792"><path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>&nbsp;
                                <p>Des <strong>consultants SEO</strong> pour vous apporter de la <strong>visibilité sur Google</strong>.</p>
                            </li>
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792"><path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>&nbsp;
                                <p>Un suivi technique et statistique pour opter pour la bonne stratégie et les meilleures <strong>solutions digitales</strong>.</p>
                            </li>
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792"><path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>&nbsp;
                               <p>Un contact régulier pour connaître votre ressenti et être force de proposition.</p>
                            </li>
                        </ul>
                        <div className="w-full flex flex-col sm:flex-row text-center my-12">
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center my-6" data-aos='zoom-in' data-aos-delay="400">
                                <svg width="60px" height="60px" viewBox="-32 0 480 480.23349" >
                                    <g><path d="m208.117188             96c-97.203126 0-176 78.796875-176 176s78.796874 176 176 176c97.203124 0 176-78.796875 176-176-.109376-97.15625-78.84375-175.890625-176-176zm0 336c-88.367188 0-160-71.632812-160-160s71.632812-160 160-160c88.363281 0 160 71.632812 160 160-.101563 88.324219-71.675782 159.898438-160 160zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m371.085938 142.984375 12.367187-12.367187c3.121094-3.125 3.121094-8.1875 0-11.3125l-22.640625-22.640626c-3.125-3.125-8.1875-3.125-11.3125 0l-12.367188 12.367188c-30.246093-24.054688-66.625-39.164062-105.015624-43.605469v-17.425781h8c8.835937 0 16-7.164062 16-16v-16c0-8.835938-7.164063-16-16-16h-64c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h8v17.425781c-38.390626 4.441407-74.769532 19.550781-105.015626 43.605469l-12.367187-12.367188c-3.125-3.125-8.191406-3.125-11.3125 0l-22.640625 22.640626c-3.125 3.125-3.125 8.1875 0 11.3125l12.367188 12.367187c-67.546876 85.167969-58.121094 207.984375 21.628906 281.851563 79.75 73.863281 202.929687 73.863281 282.679687 0 79.75-73.867188 89.175781-196.683594 21.628907-281.851563zm-15.929688-29.382813 11.359375 11.359376-5.832031 5.832031c-3.625-3.921875-7.402344-7.695313-11.328125-11.328125zm-179.039062-97.601562h64v16h-64zm24 32h16v16.199219c-2.65625-.09375-5.320313-.199219-8-.199219-2.679688 0-5.34375.105469-8 .199219zm-150.402344 76.960938 11.363281-11.359376 5.832031 5.832032c-3.921875 3.621094-7.699218 7.394531-11.328125 11.328125zm158.402344 339.039062c-106.039063 0-192-85.960938-192-192s85.960937-192 192-192c106.039062 0 192 85.960938 192 192-.125 105.988281-86.011719 191.875-192 192zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m232.117188 272c0-13.253906-10.746094-24-24-24-13.253907 0-24 10.746094-24 24s10.746093 24 24 24c3.5625-.015625 7.078124-.835938 10.28125-2.398438l48.0625 48.0625 11.3125-11.3125-48.058594-48.070312c1.566406-3.203125 2.386718-6.71875 2.402344-10.28125zm-32 0c0-4.417969 3.582031-8 8-8 4.417968 0 8 3.582031 8 8s-3.582032 8-8 8c-4.417969 0-8-3.582031-8-8zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m242.246094 148.601562-4.257813 15.398438c31.285157 8.679688 57.269531 30.496094 71.230469 59.804688 13.964844 29.308593 14.539062 63.230468 1.570312 92.996093l14.664063 6.398438c7.066406-16.140625 10.699219-33.578125 10.664063-51.199219-.09375-57.523438-38.460938-107.957031-93.871094-123.398438zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m225.171875 145.128906c-5.652344-.753906-11.351563-1.128906-17.054687-1.128906v16c4.996093 0 9.988281.328125 14.945312.984375zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/>
                                    </g> 
                                </svg>
                                <p className="text-xl century pt-3">Réactivité et efficacité</p>
                            </div>
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center my-6" data-aos='zoom-in' data-aos-delay="200">
                                <svg  viewBox="0 0 511.999 511.999" width="60px" height="60px"><g><g>
                                <g>
                                    <path d="M511.939,330.321c-0.638-11.442-6.281-21.921-15.485-28.749c-14.892-11.05-35.555-9.898-49.128,2.742l-82.559,76.887    c0.503-16.916-10.616-31.846-27.269-36.071L236.67,319.539c-17.681-4.488-36.197-3.883-53.548,1.751l-69.703,22.63v-20.057    c0-5.522-4.478-9.999-9.999-9.999H9.999c-5.522,0-9.999,4.478-9.999,9.999V501.98c0,5.522,4.478,9.999,9.999,9.999h93.422    c5.522,0,9.999-4.478,9.999-9.999V364.947l75.878-24.635c13.756-4.467,28.436-4.945,42.453-1.39l100.829,25.591    c7.831,1.988,12.933,9.266,12.13,17.308c-0.83,8.314-7.758,14.585-16.114,14.585h-80.282c-5.522,0-9.999,4.478-9.999,9.999    c0,5.522,4.478,9.999,9.999,9.999h31.542c0.376,0.043,0.757,0.07,1.145,0.07h49.589c16.54,0,32.315-6.209,44.421-17.481    l85.947-80.044c6.515-6.068,16.434-6.62,23.584-1.316c4.418,3.277,7.126,8.307,7.432,13.8c0.307,5.493-1.828,10.792-5.854,14.541    L367.72,456.194c-8.167,7.602-18.811,11.789-29.968,11.789H182.796c-5.522,0-9.999,4.478-9.999,9.999    c0,5.522,4.478,9.999,9.999,9.999h154.958c16.23,0,31.712-6.091,43.594-17.15l118.397-110.22    C508.132,352.803,512.577,341.763,511.939,330.321z M93.422,491.981H19.998V333.863h73.423V491.981z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                </g>
                            </g><g>
                                <g>
                                    <path d="M149.517,470.913c-1.859-1.861-4.439-2.93-7.078-2.93c-2.631,0-5.21,1.069-7.069,2.93c-1.86,1.861-2.93,4.44-2.93,7.069    s1.069,5.21,2.93,7.068c1.87,1.86,4.439,2.931,7.069,2.931c2.64,0,5.21-1.07,7.078-2.931c1.86-1.859,2.931-4.439,2.931-7.068    S151.378,472.773,149.517,470.913z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                </g>
                            </g><g>
                                <g>
                                    <path d="M63.785,460.574c-1.87-1.86-4.45-2.92-7.079-2.92c-2.63,0-5.21,1.06-7.069,2.92c-1.86,1.87-2.93,4.45-2.93,7.079    s1.069,5.2,2.93,7.069c1.87,1.86,4.44,2.93,7.069,2.93c2.63,0,5.21-1.07,7.079-2.93c1.859-1.86,2.92-4.44,2.92-7.069    C66.705,465.013,65.644,462.444,63.785,460.574z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                </g>
                            </g><g>
                                <g>
                                    <path d="M217.555,0.02h-10.862c-48.595,0-88.13,39.535-88.13,88.13v25.981c-31.379,3.028-55.996,29.54-55.996,61.7    c0,34.183,27.812,61.994,61.995,61.994h4c5.522,0,9.999-4.478,9.999-9.999V88.15c0-37.567,30.564-68.132,68.132-68.132h10.862    c5.522,0,9.999-4.478,9.999-9.999C227.554,4.497,223.077,0.02,217.555,0.02z M118.563,200.539v16.86    c-20.325-2.92-35.997-20.448-35.997-41.569s15.672-38.649,35.997-41.569V200.539z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                </g>
                            </g><g>
                                <g>
                                    <path d="M256.405,0.02h-0.425c-5.522,0-9.999,4.478-9.999,9.999c0,5.522,4.478,9.999,9.999,9.999h0.425    c5.522,0,9.999-4.478,9.999-9.999C266.404,4.497,261.927,0.02,256.405,0.02z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                </g>
                            </g><g>
                                <g>
                                    <path d="M393.396,114.129V88.15c0-48.595-39.535-88.13-88.13-88.13h-11.207c-5.522,0-9.999,4.478-9.999,9.999    c0,5.522,4.479,9.999,10,9.999h11.207c37.567,0,68.132,30.564,68.132,68.132v167.68c0,3.402-2.768,6.17-6.169,6.17H292.8    C288.878,252.614,279.605,246,268.814,246h-22.881c-14.328,0-25.985,11.657-25.985,25.985v0.025    c0,14.328,11.657,25.985,25.985,25.985h22.881c10.787,0,20.057-6.608,23.982-15.999h74.433c14.429,0,26.167-11.739,26.167-26.168    v-18.3c31.379-3.028,55.996-29.54,55.996-61.7S424.775,117.158,393.396,114.129z M268.814,277.998h-22.881    c-3.302,0-5.987-2.686-5.987-5.987v-0.025c0-3.302,2.686-5.987,5.987-5.987h22.881c3.302,0,5.987,2.686,5.987,6.013    C274.801,275.312,272.116,277.998,268.814,277.998z M393.397,217.399v-16.86v-66.278c20.325,2.92,35.997,20.448,35.997,41.569    S413.723,214.479,393.397,217.399z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                </g>
                            </g><g>
                                <g>
                                    <path d="M343.973,110.809h-9.332c-1.311-4.016-2.926-7.918-4.839-11.686l6.599-6.598c1.875-1.876,2.929-4.419,2.929-7.07    s-1.054-5.196-2.929-7.07l-22.258-22.257c-3.905-3.905-10.235-3.904-14.141,0l-6.599,6.597c-3.768-1.912-7.67-3.528-11.685-4.838    v-9.333c0-5.522-4.478-9.999-9.999-9.999H240.24c-5.522,0-9.999,4.478-9.999,9.999v9.362c-4.006,1.312-7.897,2.928-11.655,4.839    l-6.626-6.626c-3.905-3.903-10.234-3.904-14.142,0l-22.258,22.257c-1.875,1.875-2.929,4.419-2.929,7.07s1.054,5.195,2.929,7.07    l6.659,6.659c-1.9,3.75-3.506,7.631-4.808,11.625h-9.423c-5.522,0-9.999,4.478-9.999,9.999v31.477    c0,5.522,4.478,9.999,9.999,9.999h9.453c1.305,3.984,2.91,7.854,4.809,11.595l-6.688,6.688c-1.875,1.875-2.929,4.419-2.929,7.07    s1.054,5.195,2.929,7.07l22.258,22.258c3.906,3.904,10.235,3.904,14.142,0l6.688-6.688c3.74,1.899,7.61,3.505,11.595,4.81v9.452    c0,5.522,4.478,9.999,9.999,9.999h31.478c5.522,0,9.999-4.478,9.999-9.999v-9.423c3.994-1.303,7.875-2.908,11.625-4.809    l6.657,6.659c3.906,3.904,10.235,3.904,14.142,0l22.258-22.258c1.875-1.876,2.929-4.419,2.929-7.07s-1.054-5.196-2.93-7.07    l-6.628-6.628c1.912-3.758,3.528-7.649,4.839-11.655h9.361c5.522,0,9.999-4.478,9.999-9.999v-31.477    C353.972,115.287,349.495,110.809,343.973,110.809z M333.974,142.285h-6.949c-4.699,0-8.798,3.302-9.805,7.883    c-1.587,7.142-4.393,13.89-8.337,20.057c-2.53,3.956-1.968,9.139,1.354,12.459l4.953,4.953l-8.116,8.116l-4.975-4.975    c-3.315-3.315-8.489-3.881-12.443-1.362c-6.182,3.938-12.938,6.731-20.084,8.304c-4.585,1.01-7.85,5.072-7.85,9.766v7.052H250.24    v-7.071c0-4.689-3.259-8.748-7.837-9.763c-7.137-1.581-13.885-4.38-20.054-8.317c-3.954-2.525-9.133-1.962-12.451,1.357    l-5.01,5.01l-8.116-8.116l5.009-5.009c3.318-3.317,3.884-8.495,1.358-12.451c-3.938-6.169-6.735-12.917-8.316-20.055    c-1.015-4.579-5.074-7.837-9.763-7.837h-7.072v-11.478h7.033c4.51,0,8.483-3.037,9.67-7.387c0.044-0.158,0.083-0.318,0.118-0.479    c1.573-7.138,4.365-13.891,8.301-20.069c2.519-3.954,1.952-9.127-1.363-12.442l-4.975-4.975l8.116-8.116l4.953,4.954    c3.32,3.32,8.503,3.883,12.458,1.354c6.133-3.923,12.838-6.719,19.929-8.309c4.569-0.925,8.012-4.967,8.012-9.807v-6.977h11.479    v6.903c0,4.641,3.249,8.741,7.766,9.805c0.044,0.011,0.089,0.021,0.133,0.03c7.146,1.578,13.904,4.379,20.084,8.323    c3.953,2.521,9.132,1.96,12.449-1.358l4.92-4.919l8.116,8.116l-4.905,4.905c-3.337,3.338-3.878,8.565-1.345,12.507    c3.906,6.13,6.687,12.829,8.269,19.914c0.918,4.577,4.962,8.026,9.808,8.026h6.957V142.285z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                </g>
                            </g><g>
                                <g>
                                    <path d="M255.98,98.55c-20.951,0-37.997,17.046-37.997,37.997c0,20.951,17.046,37.997,37.997,37.997    c20.951,0,37.997-17.046,37.997-37.997C293.977,115.596,276.931,98.55,255.98,98.55z M255.98,154.546    c-9.924,0-17.999-8.074-17.999-17.999c0-9.924,8.074-17.999,17.999-17.999c9.924,0,17.999,8.074,17.999,17.999    C273.979,146.471,265.904,154.546,255.98,154.546z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                </g>
                            </g><g>
                                <g>
                                    <path d="M56.711,351.992c-5.522,0-9.999,4.478-9.999,9.999v68.995c0,5.522,4.477,9.999,9.999,9.999    c5.522,0,9.999-4.478,9.999-9.999v-68.995C66.71,356.47,62.232,351.992,56.711,351.992z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                </g>
                            </g></g> 
                            </svg>
                                <p className="text-xl century pt-3">Relation client</p>
                            </div>
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center my-6" data-aos='zoom-in' data-aos-delay="400">
                                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="-4 0 511 511.99964" width="60px"><g><path d="m498.429688 219.339844c-5.308594-8.015625-13.355469-13.539063-22.710938-15.632813 6.035156-11.542969 5.789062-25.945312-1.898438-37.550781-5.46875-8.261719-13.71875-13.597656-22.699218-15.617188 1.601562-3.054687 2.785156-6.351562 3.492187-9.828124 1.960938-9.667969.046875-19.519532-5.402343-27.742188-5.308594-8.019531-13.355469-13.542969-22.710938-15.632812 6.035156-11.542969 5.789062-25.945313-1.898438-37.554688-11.238281-16.972656-34.199218-21.640625-51.175781-10.398438l-36.757812 24.34375c-19.59375-9.9375-40.433594-16.988281-62.0625-21.003906-6.835938-10.378906-14.785157-20.027344-23.683594-28.652344l-15.207031-14.738281c-11.136719-10.796875-28.601563-12.417969-41.53125-3.851562-15.296875 10.128906-19.5 30.816406-9.371094 46.113281.398438.605469.789062 1.214844 1.175781 1.824219-49.847656 10.085937-95.277343 36.539062-128.902343 75.300781-36.488282 42.066406-56.585938 95.941406-56.585938 151.699219 0 10.6875.730469 21.394531 2.175781 31.816406 11.136719 81.019531 65.105469 150.839844 140.839844 182.21875 28.085937 11.640625 57.886719 17.546875 88.5625 17.546875 48.582031 0 95.085937-14.878906 134.488281-43.023438 38.546875-27.539062 67.386719-65.542968 83.40625-109.902343 1.496094-4.132813-.648437-8.699219-4.78125-10.191407-4.136718-1.492187-8.699218.648438-10.191406 4.785157-14.917969 41.308593-41.78125 76.699219-77.691406 102.351562-36.683594 26.207031-79.988282 40.058594-125.230469 40.058594-23.390625 0-46.230469-3.691406-68.089844-10.972656l64.773438-42.894531c.003906-.003907.007812-.003907.011719-.007813.003906 0 .003906-.003906.007812-.007813l53.832031-35.648437h.003907c4.832031-3.203125 8.132812-8.09375 9.289062-13.777344 1.15625-5.683593.03125-11.480469-3.171875-16.3125l-.710937-1.078125 10.457031-6.925781c7.460937-4.941406 16.433593-6.878906 25.269531-5.460937 12.792969 2.054687 25.785156-.757813 36.582031-7.910157l86.734375-57.4375c-.59375 7.523438-1.570312 15.003907-2.933594 22.359375-.804687 4.324219 2.050782 8.480469 6.375 9.28125.488282.09375.980469.136719 1.460938.136719 3.761719 0 7.105469-2.679687 7.816406-6.511719 2.207032-11.871094 3.476563-24.03125 3.804688-36.207031l24.441406-16.1875c8.222656-5.445313 13.835938-13.769531 15.796875-23.433594 1.964844-9.667969.046875-19.519531-5.398437-27.742187zm-177.21875-135.378906-24.324219 16.109374-4.789063-12.902343c-2-5.382813-4.292968-10.660157-6.832031-15.824219 12.339844 3.128906 24.355469 7.347656 35.945313 12.617188zm-252.097657 55.191406c32.316407-37.253906 76.335938-62.296875 124.492188-70.980469 7.726562 18.71875 9.578125 39.632813 4.960937 59.566406l-19.410156 83.855469c-3.050781-3.257812-7.011719-5.503906-11.472656-6.410156-5.6875-1.160156-11.480469-.03125-16.3125 3.171875l-54.980469 36.40625c-.003906 0-.003906 0-.007813.003906 0 0-.003906 0-.003906.003906l-79.296875 52.511719c-.433593-5.59375-.660156-11.230469-.660156-16.863281 0-51.921875 18.714844-102.09375 52.691406-141.265625zm207.191407 250.441406c-.308594 1.515625-1.191407 2.824219-2.484376 3.679688h.003907l-47.28125 31.308593-87.753907-130.871093c-2.449218-3.652344-7.394531-4.625-11.046874-2.175782-3.648438 2.449219-4.625 7.390625-2.175782 11.042969l87.699219 130.796875-67.496094 44.699219c-67.070312-29.335938-115.066406-91.289063-126.605469-163.378907l79.390626-52.402343 9.136718 13.632812c1.539063 2.289063 4.054688 3.527344 6.621094 3.527344 1.523438 0 3.066406-.433594 4.425781-1.347656 3.652344-2.449219 4.628907-7.394531 2.179688-11.046875l-9.074219-13.535156 48.320312-31.894532c1.285157-.855468 2.828126-1.152344 4.34375-.84375 1.515626.308594 2.824219 1.191406 3.679688 2.480469l107.273438 161.984375c.851562 1.285156 1.152343 2.828125.84375 4.34375zm211.921874-145.683594c-1.117187 5.5-4.308593 10.234375-8.988281 13.332032l-27.941406 18.503906c-.007813.003906-.015625.011718-.027344.015625l-99.730469 66.046875c-7.460937 4.941406-16.433593 6.882812-25.269531 5.460937-12.789062-2.050781-25.78125.757813-36.582031 7.910157l-10.457031 6.925781-87.859375-132.667969 22.710937-98.105469c5.847657-25.273437 2.765625-51.894531-8.375-75.085937-.101562-.242188-.210937-.476563-.335937-.707032-2.140625-4.382812-4.570313-8.636718-7.285156-12.738281-5.28125-7.976562-3.089844-18.761719 4.890624-24.046875 6.742188-4.464844 15.851563-3.621094 21.65625 2.007813l15.207032 14.742187c16.449218 15.949219 29.359375 35.730469 37.328125 57.207032l8.28125 22.308593c.015625.042969.03125.078125.046875.117188.019531.050781.042968.105469.0625.15625.058594.136719.113281.261719.171875.367187.160156.335938.335937.667969.546875.984375 2.429687 3.667969 7.367187 4.671875 11.03125 2.242188l84.910156-56.226563c9.65625-6.394531 22.714844-3.742187 29.109375 5.914063s3.742187 22.714843-5.914063 29.109375l-7.371093 4.882812s-.003907 0-.007813.003906l-16.441406 10.890626c-.023438.015624-.039062.03125-.0625.042968-.09375.066406-.183594.128906-.257812.191406-3.398438 2.496094-4.277344 7.242188-1.921876 10.796876 2.425782 3.667968 7.367188 4.671874 11.035157 2.242187l16.453125-10.898437c4.675781-3.089844 10.273437-4.179688 15.769531-3.0625 5.496094 1.117187 10.234375 4.308593 13.328125 8.988281 3.097656 4.675781 4.191406 10.28125 3.074219 15.777343-1.117188 5.5-4.308594 10.234376-8.988281 13.332032l-23.820313 15.777344c-3.667969 2.425781-4.671875 7.363281-2.242187 11.03125 1.53125 2.3125 4.0625 3.566406 6.644531 3.566406 1.507812 0 3.035156-.429688 4.386719-1.324219l3.6875-2.441406 12.757812-8.449219c9.660156-6.394531 22.714844-3.742188 29.109375 5.914062 6.394531 9.660157 3.742187 22.714844-5.914063 29.113282l-11.898437 7.878906c-.0625.039062-.125.082031-.1875.125l-11.734375 7.769531c-3.667969 2.425781-4.671875 7.367188-2.242188 11.035157 1.53125 2.3125 4.0625 3.566406 6.644532 3.566406 1.507812 0 3.035156-.429688 4.386718-1.324219l3.6875-2.441406s0-.003907.003907-.003907l12.757812-8.445312c4.675781-3.097656 10.277344-4.191406 15.777344-3.070312 5.5 1.113281 10.234375 4.308593 13.332031 8.984374 3.09375 4.675782 4.183594 10.28125 3.066406 15.777344zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/></g> </svg>
                                <p className="text-xl century pt-3">Collaboration et confiance</p>
                            </div>
                            
                        </div>
                    </section>
                    
                    <section className=" w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bgDev + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h2 data-aos='fade-right' className="text-center text-white text-2xl md:text-4xl century">
                                <span className="text-bleu">/</span>Alors, convaincu ? Vous souhaitez être contacté ?


                            </h2>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                            {/* <RappelForm /> */}
                            <RoundButton url="/contact-agence-web-toulouse/" text="Je veux developper ma communication en ligne" />
                        </div>

                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start text-center my-12">
                            <div className="w-full my-6 sm:w-1/3 px-6 sm:px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                                <img src={laptop} alt="Agence Web Agen" width="80px" />
                                <p className="text-xl text-white century pt-3">CRÉATION SITE INTERNET</p>
                            </div>
                            <div className="w-full my-6 sm:w-1/3 px-6 sm:px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="400">

                                <img src={web} alt="Agence Web Toulouse" width="80px" />
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT NATUREL</p>
                            </div>
                            <div className="w-full my-6 sm:w-1/3 px-6 sm:px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="600">
                                <img src={bullhorn} alt="Agence Web Agen" width="80px" />
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT GOOGLE ADS</p>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h2 className="century text-center text-xl md:text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Agence Web Toulouse : que gagner à se lancer dans un projet web ?
                        </h2>
                        <hr className="blue"></hr>
                        <h4 data-aos='fade-left' className="text-lg md:text-xl text-grey text-center century italic px-6 pb-6">Tout ! Ou bien presque. Investir dans un site web vous confère de nombreux avantages pour le développement de votre société, et d’abord celui de montrer que vous êtes bien présent.</h4>
                    </section>
                    <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                        <div className="w-full md:w-3/4 py-0 flex justify-end">
                            <Accordion>
                                <div className="w-full" label="ÊTRE VISIBLE GRÂCE AU RÉFÉRENCEMENT NATUREL">
                                    <p>Dans la&nbsp;<strong>conception de sites internet</strong>, une part importante est accordée à la&nbsp;réflexion stratégique. Dès l’élaboration de votre <strong>projet web</strong>, chaque page et éléments de contenus doivent avoir un objectif précis.</p><p>Il est nécessaire de traduire clairement vos prestations et services et les segmentant par thématiques. Ceci est essentiel dans le cadre du <strong>référencement d'un site internet</strong>. Les spécialistes de notre <strong><Link className="hover:text-bleu" to="/referencement-toulouse/">agence de référencement</Link></strong> identifierons alors les <strong>expressions clés ciblées</strong> qui vont déterminer votre <strong>stratégie de référencement naturel</strong> pour la déployer au fil des semaines. Nous définissons un plan d’actions selon vos attentes et vos moyens à consacrer aux <strong>outils digitaux</strong>.</p><p>Cependant, s’il est urgent pour vous d’<strong>être visible sur les moteurs de recherche</strong>, nous vous proposons la <strong><Link className="hover:text-bleu" to="/agence-adwords-47-31/">création d’une campagne Ads</Link></strong>, via la plateforme <strong>Google Adwords</strong>, qui vous donnera une <strong>visibilité immédiate</strong>. C'est nôtre rôle, en tant qu'<strong>agence spécialisée dans la création de sites web</strong>, de vous proposer <strong>nos solutions</strong> les plus performantes et qui seront les mieux adaptées à vos besoins.</p>
                                </div>
                                <div label="COMMUNIQUER DE MANIÈRE EFFICACE ENVERS VOS CIBLES">
                                    <p>Lorsque l’on souhaite <strong>communiquer</strong>, <strong>être visible en ligne</strong>&nbsp;va permettre à tout un chacun d’accéder rapidement à l’information. La&nbsp;<Link to="/creation-site-internet-toulouse/" className="hover:text-bleu"><strong>création de site internet</strong></Link>&nbsp;doit être pensée en ce sens afin de mettre en place une <strong>arborescence</strong> limpide. Cela se traduit par un <strong>webdesign</strong> <strong>ergonomique</strong> et <strong>intuitif</strong>&nbsp;de <strong>votre site internet</strong> pour permettre à l’utilisateur d’accéder rapidement à l’information qu’il recherche sur votre <strong>site internet</strong>.</p><p>En effet, l’accès à l’information doit être favorisé par la mise en place d’un <strong>site responsive design</strong> pour en permettre la lisibilité. De plus, de par l’utilisation de <strong>votre charte graphique</strong> et de votre <strong>identité visuelle</strong>, nous créons un <strong>outil digital à votre image</strong> avec un <strong>web design</strong> sur-mesure pour répondre à votre <strong>stratégie de communication digitale </strong>et permettre aux utilisateurs de vous identifier clairement. Pour ce faire, un développeur web va définir la solution la plus à même d’améliorer l’<strong>expérience utilisateur</strong> sur <strong>votre site internet</strong> en travaillant à la fois l’<strong>ergonomie</strong>, la praticité et l’intuitivité du site pour mettre en place un outil utile et pertinent pour les visiteurs. Que ce soit à travers l'utilisation de <strong>CMS</strong> tels que <strong>Joomla</strong>, <strong>Drupal</strong> ou <strong>Wordpress</strong>, ou bien via l'utilisation de frameworks, nos spécialistes définieront la meilleure solution pour vous proposer des performances optimales.</p>
                                </div>
                                <div label="OBTENIR UN RETOUR SUR INVESTISSEMENT">
                                    <p>Chaque projet a ses spécificités, si un&nbsp;<strong>site e-commerce</strong> va viser la vente en ligne de produits, un <strong>site vitrine</strong> sera plus adapté pour obtenir des <strong>contacts prospects qualifiés</strong>. C’est pourquoi nous mettons en place des solutions web adaptées à l’ambition de chaque entreprise. Les <strong>sites internet</strong> de nos clients obtiennent un <strong>trafic</strong> <strong>qualifié</strong> et une progression constante de la fréquentation de leur site. En effet, le site internet fait partie des <strong>supports de communication</strong> les plus importants en termes de <strong>webmarketing</strong>.</p><p>Chez <strong>Linkweb</strong>, nous privilégions la qualité. La <strong>création de votre site internet</strong> n’a qu’un seul but : vous permettre de <strong>convertir vos contacts</strong> pour vous apporter de <strong>nouveaux clients</strong> et augmenter votre chiffre d’affaires.</p>
                                </div>
                            </Accordion>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Ils sont satisfaits par nos services d’agence web
                        </h2>
                        <hr className="blue"></hr>

                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-start justify-center text-center mt-3 mb-12">
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-start" data-aos="fade-up">
                            <img
                                src={stars}
                                alt="avis Google"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Midi Pneu Occaz 47</div>
                            <div className="italic">« Très bon relationnel, Gabriel est très agréable que ce soit par téléphone ou par mail, très professionnel,
                            une personne très a l’écoute. Nous le recommandons car nous sommes vraiment très satisfaits de ses prestations. »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-start" data-aos="fade-up" data-aos-delay="300">
                            <img
                                src={stars}
                                alt="avis Google"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Agen Diesel</div>
                            <div className="italic">« La prise en charge de mon dossier par Anthony est impeccable. Très bon accueil téléphonique, il répond à mes demandes et mes exigences. Un rapport mensuel est effectué tout les mois pour voir l’évolution de notre entreprise en référencement sur internet. »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-start" data-aos="fade-up" data-aos-delay="500">
                            <img
                                src={stars}
                                alt="avis Google"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Psychologue Fourteau Béatrice</div>
                            <div className="italic">« Depuis trois ans, je travaille avec Linkweb. Une équipe sérieuse, rigoureuse, qui répond très rapidement en cas de souci. Je suis très satisfaite de leur travail de suivi et de référencement. Tous les mois nous faisons le point par téléphone. Nous décidons ensemble des pistes d’amélioration. Ils sont toujours à l’écoute et réactif. Je recommande sans réserve ! »</div>
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
                            |&nbsp;
                            <a
                                className="century text-sm hover:text-bleu"
                                target="blank" rel="noreferrer noopener"
                                href="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,"
                            >
                                Vous êtes déjà clients ? Donnez nous votre avis !
                            </a>
                        </div>
                    </section>

                    <section className=" w-full h-screen flex flex-col justify-center bg-bottom items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bureau + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <div className="max-w-5xl mx-auto flex flex-col items-center">
                            <h2 data-aos='fade-right' className="text-center text-white text-2xl md:text-4xl century">
                                <span className="text-bleu">/</span>Vous souhaitez intégrer l’équipe de Linkweb ?
                                Nous recrutons des développeurs et référenceurs web à Agen.
                            </h2>
                             <RoundButton url="/recrutement-creation-site-internet-agen/" text="Voir notre page recrutement" />
                        </div>
                    </section>

                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Les dernières actualités
                        </h3>
                        <hr className="blue"></hr>
                        <LastPosts lastposts={this.props.data.allWordpressPost.edges} />
                        <Link className="bg-bleu text-white px-16 py-3 block mx-auto hover:bg-black font-normal" to="/actualite-digitale/">Voir l'actualité digitale</Link>
                        <br/>
                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsAgence {
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
export default AgenceWebToulouse;




