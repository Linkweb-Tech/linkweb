import React from "react";
import { Link, graphql } from "gatsby";
import posed from 'react-pose';
import Layout from "../components/layout";
import Button from "../components/button";
import ButtonBlog from "../components/buttonblog";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import Accordion from '../components/accordion';
import Partenaires from '../components/partenaires';

import blocBg from "../images/background.jpg";
// import Bg from "../images/background-referencement.jpg";
import Bg from "../images/referencement-toulouse-bg.jpg";
import imac from "../images/smartphone.jpg";
// import bgDev from '../images/bg-dev.jpg';
import bgDev from '../images/cta-background-agence-web.jpg';
import stars from '../images/stars.png';
import mac from "../images/mac-agence.jpg";


import web from '../images/web.svg';
import laptop from '../images/laptop.svg';
import bullhorn from '../images/bullhorn.svg';
import diagram from '../images/diagram.svg';
import analysis from '../images/analysis.svg';
import contract from '../images/contract.svg';
import "../scss/info.scss";
import '../scss/global.scss';

class ReferencementToulouse extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Référencement Toulouse / Agen - Agence Web Linkweb"
                    description="Définition stratégique et mise en application pour votre projet de référencement naturel ou sponsorisé Google Ads - Suivi régulier."
                    keywords={[`Référencement Agen`, `Référencement Toulouse`, `Agence de Référencement Agen`, `Agence de Référencement Toulouse`, `Référencement Google`]}
                    url="https://linkweb.fr/referencement-toulouse/"
                    nom="Référencement à Toulouse"
                    slug="referencement-toulouse/"
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
                    <section className="w-full bloctitrescreen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ background:'rgba(0,0,0,.65) url(' + Bg + ')', backgroundSize:'cover', backgroundBlendMode:'multiply', backgroundRepeat:'no-repeat',backgroundPosition:'top' }}>
                        <h1 /*data-aos="fade-up" data-aos-delay="500"*/ className="century text-4xl sm:text-6xl md:text-6xl lg:text-6xl text-center text-white">
                            Référencement Toulouse<span className="text-bleu">/</span>Agen
                        </h1>
                        <h3 className="italic text-center text-lg sm:text-2xl text-white mt-3">Sortez de l’ombre, devenez visible sur les moteurs de recherche grâce au référencement</h3>
                        <RoundButton url="/contact-agence-web-toulouse/" text="Je veux améliorer ma visibilité sur internet" />
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <h3 /*data-aos='fade-right'*/ className="text-center text-4xl century">
                            Nous travaillons main dans la main pour améliorer votre visibilité.
                        </h3>
                        <hr className="blue"></hr>

                    </section>
                    <Partenaires />
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
                    <section className="flex-wrap flex-col md:flex-row flex w-full px-2 max-w-5xl mx-auto py-2 mb-2 ">
                        <div className="w-full" /*data-aos='zoom-in'*/>
                            <p className="text-md text-center py-12 century">Avoir un site internet n’est pas une fin en soi : il doit nécessairement être visible sur internet. C’est le principe du référencement web. Faites de votre site une référence pour les moteurs de recherche.</p>
                        </div>
                        <section className="flex flex-col justify-center md:flex-row w-full md:mx-4 mx-auto py-0 mt-2 ">
                            <div data-aos="fade-in" className="blocliens w-full lg:w-1/2 xl:w-6/12 bg-white px-8 my-4 border border-darkgrey mx-auto md:px-2 hover:shadow-xl py-6 century" style={{background:'#37cfee94 url( '+ blocBg +')', backgroundBlendMode: 'multiply', backgroundSize: 'cover', borderRadius: '15px', borderColor: '#d4d4d4', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
                            <svg class="mx-auto block" width="40px" viewBox="0 0 48 60"><g><polygon fill="#ffffff" points="47,47 1,47 1,1 3,1 3,45 47,45  "></polygon><g><path fill="#ffffff" d="M15.9,47H7.4V33h8.4V47z M9.4,45h4.4V35H9.4V45z"></path><path fill="#ffffff" d="M28.7,47h-8.4V23h8.4V47z M22.3,45h4.4V25h-4.4V45z"></path><path fill="#ffffff" d="M41.6,47h-8.4V13h8.4V47z M35.1,45h4.4V15h-4.4V45z"></path></g><g><path fill="#ffffff" d="M10.4,26.2l-0.9-1.8c6.4-3.1,14-10.1,18.6-17l1.7,1.1C25.1,15.7,17.1,23,10.4,26.2z"></path><g><polygon fill="#ffffff" points="24.4,6 32.8,10.9 31,4.2    "></polygon></g></g></g></svg>
                                <h3 className="text-center text-xl px-4 text-white font-bold century">Référencement Naturel SEO</h3>
                                <hr className="blue"></hr>
                                <p className="text-sm px-2 text-white text-center"><span className="font-bold">Vous souhaitez <strong>augmenter votre visibilité</strong> dans les <strong>pages de recherche de Google</strong> ?</span> <br/><br/>Vous souhaitez <strong>générer du trafic sur votre site internet</strong>, vendre vos produits ou obtenir des contacts ? Le <strong>référencement naturel</strong> vous offre la possibilité de mettre en avant votre entreprise.</p>
                                <br />
                                <div className="w-2/3 mx-auto block">
                                    <br />
                                    <ButtonBlog url="/referencement-de-site-internet-47-31/" text="Notre offre de Référencement Naturel" color="bleu" />
                                </div>
                            </div>
                            <div data-aos="fade-in" className="blocliens w-full lg:w-1/2 xl:w-6/12 bg-darkgrey px-8 my-4 border border-darkgrey mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{background:'#00cfffe0 url( '+ blocBg +')', borderRadius: '15px', borderColor: '#d4d4d4', backgroundBlendMode: 'multiply', backgroundSize: 'cover', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
                                <svg width="40px" className="mx-auto block" viewBox="0 0 96 120"><path fill="#ffffff" d="M28.92,36H22.27a1,1,0,1,0,0,2h6.65a1,1,0,0,0,0-2Z"/><path fill="#ffffff" d="M28.92,41.19H22.27a1,1,0,1,0,0,2h6.65a1,1,0,0,0,0-2Z"/><path fill="#ffffff"  d="M92.24,39.46,86.39,38V12.19a1,1,0,0,0-1-1,7.8,7.8,0,0,0-6.88,4.6c-5,10.07-29.65,15.69-41.95,16V30.46a1,1,0,0,0-1-1H15.63a1,1,0,0,0-1,1v2.37a12.62,12.62,0,0,0,0,25.16v2.37a1,1,0,0,0,1,1H18.8L24.41,82.6a5.26,5.26,0,0,0,5.09,3.92h3.23a5.25,5.25,0,0,0,5.08-6.6l-4.9-18.56h2.65a1,1,0,0,0,1-1V59.05c12.3.29,37,5.91,42,16a7.8,7.8,0,0,0,6.88,4.6,1,1,0,0,0,1-1V52.82l5.85-1.46a1,1,0,0,0,.76-1v-10A1,1,0,0,0,92.24,39.46ZM5,45.41a10.64,10.64,0,0,1,9.63-10.58V56A10.64,10.64,0,0,1,5,45.41Zm30.88,35a3.26,3.26,0,0,1-3.15,4.09H29.5a3.25,3.25,0,0,1-3.15-2.43L20.87,61.36h10ZM34.56,59.36H16.63V31.46H34.56v27.9ZM80.31,74.15c-5.73-11.66-32.69-16.8-43.75-17.1V33.77c11.07-.3,38-5.44,43.75-17.1a6,6,0,0,1,4.08-3.38V38.62a.66.66,0,0,0,0,.15V52.05a.66.66,0,0,0,0,.15V77.53A6,6,0,0,1,80.31,74.15ZM91,49.61l-4.61,1.15V40.05L91,41.21Z"/><path fill="#ffffff"  d="M80.32,22.41a1,1,0,0,0-1,1v44a1,1,0,0,0,2,0v-44A1,1,0,0,0,80.32,22.41Z"/></svg>
                                <h3 className="text-center text-white text-xl px-4 font-bold century">Référencement Ads SEA</h3>
                                <hr className="blue"></hr>
                                <p className="text-sm px-4 text-white text-center"><span className="font-bold">Vous souhaitez obtenir un <strong>retour sur investissement</strong> grâce à votre <strong>boutique en ligne</strong> ou votre <strong>site vitrine</strong> ?</span><br/><br/>Mener une campagne sponsorisée permet de propulser votre visibilité sur Google en un temps record, et ainsi, atteindre vos objectifs de conversion.</p>
                                <br />
                                <div className="w-2/3 mx-auto block">
                                    <br />
                                    <ButtonBlog color="bleu" url="/agence-adwords-47-31/" text="Notre offre de Référencement Ads" />
                                </div>
                            </div>
                        </section>
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

                    </section>
                    <section className="flex flex-col lg:flex-row w-full mx-auto px-4 py-6 my-4">
                        <div className="w-full lg:w-1/2">
                            <img src={imac} alt="Référencement Toulouse" />
                        </div>
                        <div className="w-full lg:w-1/2 max-w-3xl px-12 py-12" >
                            <h2 className="century capitalize text-2xl tracking-wider pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">/</span>RÉFÉRENCEMENT TOULOUSE : OBTENIR UNE MEILLEURE VISIBILITÉ GRÂCE AU RÉFÉRENCEMENT
                            </h2>
                            <h4 className="century text-lg tracking-wider pb-6 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">Référencer son site, c’est donner vie à sa communication digitale pour rendre son activité visible. Nous mettons tout en oeuvre pour vous apporter un site internet à votre image grâce à la création de contenu de qualité.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify">
                            <strong>Optimiser le référencement de son site</strong>, en <strong>naturel</strong> ou <strong>sponsorisé</strong>, s’inscrit dans la continuité de la <strong><Link to="/creation-site-internet-toulouse/" className="hover:text-bleu">création de votre site internet</Link></strong>. C’est pourquoi, tout doit être pensé, de la <strong>conception technique</strong> du site, jusqu’à l’<strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/arborescence-seo/">arborescence</Link></strong> et la mise en place de <strong><Link to="/referencement-toulouse/donnees-structurees/" className="text-bleu hover:text-black font-bold">données structurées</Link></strong> afin d’attirer un grand nombre de clients potentiels. <br/><br/>

                            <strong>Nos consultants d’Agen (47)</strong> et de <strong>Toulouse (31)</strong> vous apportent une expertise qualifiée pour vous accompagner au mieux dans le <strong><Link to="/creation-de-site-internet-47-31/" className="hover:text-bleu">développement</Link></strong> et l’<strong>optimisation de votre site internet</strong>. Force de proposition, nous mettons votre site au goût du jour grâce à une veille digitale permanente qui permet de suivre les dernières tendances.<br/><br/>

                                De fait, il est nécessaire de faire preuve de régularité et de rigueur quant au travail qui est à réaliser, aussi bien en termes de <strong><Link to="/referencement-de-site-internet-47-31/" className="hover:text-bleu">référencement naturel</Link></strong>, que de <strong><Link to="/agence-adwords-47-31/" className="hover:text-bleu">référencement payant</Link></strong>. <br/>
                            </p>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        
                        <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                            Sautez le pas, enlevez votre cape d’<span className="text-bleu">invisibilité !</span>
                        </h2>
                        <hr className="blue"></hr>
                        <h3 /*data-aos="fade-in"*/ className="text-center font-normal italic century text-sm">Référencement Toulouse</h3>
                    </section>
                    <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
          <div className="w-full xl:w-1/3 one px-auto">
            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
              <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
              <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                  <span className="text-bleu">/</span>JE DÉCOUVRE LE RÉFÉRENCEMENT
                </h3>
                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                    Faire appel à une <strong>agence de référencement naturel</strong>, c’est faire le choix d’un partenaire pour l’avenir. Une <strong>stratégie de référencement naturel</strong> a plusieurs objectifs. <strong>Acquisition de trafic</strong>, <strong>obtention de contacts</strong>, <strong><Link to="/referencement-toulouse/e-reputation/" className="font-bold text-bleu hover:text-black">e-réputation</Link></strong>. Un <strong>référencement optimal de son site</strong> est essentiel.
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
                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                Plusieurs <strong><Link to="/referencement-toulouse/techniques-referencement/" className="text-bleu hover:text-black font-bold">techniques de référencement</Link></strong> <strong>SEO/SEA</strong> existent pour <strong>positionner son site internet dans les premiers résultats des premières pages</strong> et atteindre la première page ou en <strong>première position des SERP de Google</strong> : nous vous accompagnons pour définir la visibilité dont vous avez besoin.
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
                  <span className="text-bleu">/</span>JE FAIS LE CHOIX D'EXPERTS POUR OPTIMISER MA VISIBILITÉ
                </h3>
                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                  Nos <strong>consultants d’Agen (47)</strong> vous apportent une expertise qualifiée pour vous accompagner au mieux dans le <strong>développement</strong> et l’<strong>optimisation de votre site internet</strong>.
                </div>
                <Button url="/contact-agence-web-toulouse/" text="Prendre rendez-vous" position="center" />
              </section>
              
            </div>
  
          </div>
        </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-4 pb-0 mt-2">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                        Agence SEO à Toulouse : la marque de Linkweb
                        </h2>
                        <hr className="blue"></hr>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-10 pb-0">
                    <div className="w-full max-w-5xl" /*data-aos='zoom-in'*/>
                            <p className="text-md text-center pt-4 century">Depuis plus de dix ans, <strong>Linkweb</strong> a développé sur une expertise dans le <strong>référencement naturel (SEO)</strong>. Notre agence est donc considérée comme <strong>agence SEO</strong> (<strong>Search Engine Optimization</strong>) à part entière.<br/><br/>Ainsi, notre équipe de <strong>référenceurs</strong> est à même de répondre à vos <strong>projets web</strong> par la mise en place de <strong>stratégies SEO</strong> adaptées à vos besoins, que ce soit en <strong className="font-light">refonte</strong> ou en <strong className="font-light">création de site internet</strong>.</p>
                            <br/>
                        </div>
                    </section>
                    <section className="flex w-full flex-col lg:flex-row mx-auto px-4 md:py-6 md:my-4">
                        <div className="w-full lg:w-1/2 pt-6">
                            <img 
                                src={mac}
                                alt="Création site internet Toulouse"
                                /*data-aos="fade-right"*/
                            />
                        </div>
                        <div className="w-full lg:w-1/2 max-w-3xl md:px-10 md:py-32">
                            <h2 className="font-bold px-10 text-xl" /*data-aos="fade-in"*/>1<span className="text-bleu">/</span> APPORTER DE LA VISIBILITÉ À VOTRE PROJET WEB SUR LES MOTEURS DE RECHERCHE</h2>
                            <br/>
                            <p className="text-md text-justify px-10 pt-6 md:py-0" /*data-aos="fade-left"*/>
                                <strong className="font-light">Le canal organique</strong> est l'une des sources de trafic les plus importantes sur un <strong className="font-light">site internet</strong>. C'est pourquoi, l'<strong className="font-light">acquisition de visibilité par le référencement naturel</strong> est l'un des <strong className="font-light">leviers</strong> principaux du <strong className="font-light">webmarketing</strong>. <br/><br/>Nôtre rôle, en tant qu'<strong className="font-light">agence de référencement SEO</strong>, est de vous apporter une visibilité maximale en mettant en place une <strong className="font-light">stratégie digitale</strong> destinée à la fois au visiteur, ainsi qu'à un <strong className="font-light">moteur de recherche</strong>. De plus, notre effort se porte sur la mise en place d'une stratégie pertinente par rapport à <strong className="font-light">vos secteurs (référencement local)</strong> et <strong className="font-light">vos cibles</strong>.
                            </p>
                            <br/>
                            <h2 className="font-bold px-10 text-xl py-6 md:py-0" /*data-aos="fade-in"*/>2<span className="text-bleu">/</span> UNE ÉQUIPE D'EXPERTS EN RÉFÉRENCEMENT</h2>
                            <br/>
                            <p className="text-md text-justify px-10" /*data-aos="fade-left"*/>
                                En choisissant <strong className="font-light">Linkweb</strong>, votre <strong className="font-light">stratégie de référencement naturel</strong> est pilotée par un <strong className="font-light">consultant SEO</strong> compétent <strong className="font-light">expert en référencement</strong>. En effet, nos <strong className="font-light">experts en référencement</strong> sont chargés d'appliquer votre stratégie :<br/><br/>
                                <ul>
                                    <li><span className="text-bleu font-bold">></span> en produisant des <strong className="font-light">contenus sur-mesure, pertinents et optimisés</strong> pour leur visibilité,</li> 
                                    <li><span className="text-bleu font-bold">></span> en réalisant les<strong className="font-light">optimisations techniques nécessaires</strong> sur les <strong className="font-light">pages de votre site</strong>,</li> 
                                    <li><span className="text-bleu font-bold">></span> ainsi qu'en travaillant la <strong className="font-light">popularité de votre site sur le Web</strong> grâce au <strong className="font-light">netlinking</strong> (acquisition de <strong className="font-light">backlinks</strong>.</li> 
                                </ul><br/>
                                Un suivi est réalisé pour veiller au bon déroulement de la stratégie et se tenir au plus près de vos attentes.
                            </p>
                            <br/>
                            <h2 className="font-bold px-10 text-xl py-6 md:py-0" /*data-aos="fade-in"*/>3<span className="text-bleu">/</span>ALGORITHMES ET RESPECT DES CONSIGNES DE QUALITÉ</h2>
                            <br/>
                            <p className="text-md text-justify px-10" /*data-aos="fade-left"*/>
                                Pour <strong className="font-light">positionner vos pages web</strong> dans les meilleurs <strong className="font-light">résultats des moteurs de recherche</strong>, <strong className="font-light">nos consultants SEO</strong> travaillent pour remplir les critères imposés par les <strong className="font-light">algorithmes</strong> de ces derniers. De plus, nous suivons les <strong className="font-light">préconisations de Google</strong> quant à la <strong className="font-light">production d'un contenu pertinent et de qualité</strong>. <br/><br/>Nous nous attachons à répondre aux attentes du moteur en appuyant l'<strong className="font-light">expertise de votre entreprise</strong>, en <strong className="font-light">affirmant son autorité</strong> et en prouvant sa <strong className="font-light">légitimité</strong>. Ce travail est réalisé à partir d'actions réfléchies visant à <strong className="font-light">optimiser le référencement naturel de votre site web</strong> en fonction des objectifs définis et des <strong className="font-light">requêtes visées</strong>.
                            </p>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                            <span className="text-bleu">/</span>QUE FAIT LINKWEB POUR VOTRE RÉFÉRENCEMENT À TOULOUSE<span className="text-bleu">/</span>AGEN ?
                        </h2>
                        <hr className="blue"></hr>

                    </section>
                    <section className="max-w-6xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <p className="text-xl font-bold century text-left">Après notre première rencontre, ainsi que la réunion de cadrage pour votre site internet, Linkweb s’engage à :</p>
                        <ul className="mt-6 pl-1 sm:pl-6">
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792">
                                    <path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z">
                                    </path>
                                </svg>
                                &nbsp;
                                <p><strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/">Optimisation SEO interne</Link> de votre site</strong> : votre contenu doit être le plus <strong>pertinent</strong>.</p>
                            </li>
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792">
                                    <path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z">
                                    </path>
                                </svg>
                                &nbsp;
                                <p><strong>Optimisation des <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/">liens externes</Link></strong> : votre site doit être populaire.</p>
                            </li>
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792">
                                    <path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z">
                                    </path>
                                </svg>
                                &nbsp;
                                <p><strong>Optimisation de la <Link className="text-bleu hover:text-black font-bold" to="/referencement-toulouse/referencement-local/">recherche locale</Link></strong> : votre site doit être vu par vos clients les plus proches.</p>
                            </li>
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792">
                                    <path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z">
                                    </path>
                                </svg>
                                &nbsp;
                                <p><strong><Link className="text-bleu hover:text-black font-bold" to="/agence-adwords-47-31/">Mise en place de vos campagnes Adwords et définition des annonces en référencement SEA.</Link></strong></p>
                            </li>
                        </ul>
                        <div className="w-full flex flex-col md:flex-row text-center my-12">
                            <div className="w-full md:w-1/3 flex flex-col items-center justify-center pt-6" /*data-aos='zoom-in' data-aos-delay="200"*/>
                                <svg id="Layer_3" width="60px" height="60px" viewBox="0 0 64 64" >
                                    <g>
                                        <path d="m58 31h-25v-27c0-1.654-1.346-3-3-3h-18c-1.654 0-3 1.346-3 3v27h-3c-2.757 0-5 2.243-5 5v22c0 2.757 2.243 5 5 5h52c2.757 0 5-2.243 5-5v-22c0-2.757-2.243-5-5-5zm-46-28h18c.552 0 1 .449 1 1v51h-20v-51c0-.551.448-1 1-1zm49 55c0 1.654-1.346 3-3 3h-52c-1.654 0-3-1.346-3-3v-22c0-1.654 1.346-3 3-3h3v21.816c-1.161-.414-2-1.514-2-2.816v-2h-2v2c0 2.757 2.243 5 5 5h22c2.757 0 5-2.243 5-5v-2h-2v2c0 1.302-.839 2.402-2 2.816v-21.816h25c1.654 0 3 1.346 3 3z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m19 11h4c1.654 0 3-1.346 3-3s-1.346-3-3-3h-4c-1.654 0-3 1.346-3 3s1.346 3 3 3zm0-4h4c.552 0 1 .449 1 1s-.448 1-1 1h-4c-.552 0-1-.449-1-1s.448-1 1-1z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m15 25h12c.553 0 1-.448 1-1v-10c0-.552-.447-1-1-1h-12c-.553 0-1 .448-1 1v10c0 .552.447 1 1 1zm1-10h10v8h-10z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m21 27c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m14 27h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m26 27h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m14 33h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m26 33h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m19 37h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m25 37h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m13 37h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m19 41h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m25 41h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m13 41h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m19 45h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m25 45h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m13 45h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m19 49h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m25 49h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m13 49h4v2h-4z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m58 39h-18c-.553 0-1 .447-1 1v18c0 .553.447 1 1 1h18c.553 0 1-.447 1-1v-18c0-.553-.447-1-1-1zm-1 18h-16v-16h16z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m46 55c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m52 49c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                        <path d="m43 45h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" /><path d="m53 51h2v2h-2z" data-original="#000000" data-old_color="#000000" fill="#37C5EE" />
                                    </g>
                                </svg>
                                <p className="text-xl century pt-3">1 contact téléphonique par mois</p>
                            </div>
                            <div className="w-full md:w-1/3 flex flex-col items-center justify-center pt-6" /*data-aos='zoom-in' data-aos-delay="200"*/>


                                <img
                                    src={diagram}
                                    width="60px"
                                    alt="Rapport de positionnement"
                                />
                                <p className="text-xl century pt-3">1 rapport complet sur votre positionnement</p>
                            </div>
                            <div className="w-full md:w-1/3 flex flex-col items-center justify-center pt-6" /*data-aos='zoom-in' data-aos-delay="400"*/>
                                <img
                                    src={analysis}
                                    width="60px"
                                    alt="audit SEO"
                                />
                                <p className="text-xl century pt-3">1 rapport pertinent de vos statistiques de visites</p>
                            </div>
                            <div className="w-full md:w-1/3 flex flex-col items-center justify-center pt-6" /*data-aos='zoom-in' data-aos-delay="600"*/>
                                <img 
                                    src={contract}
                                    width="60px"
                                    alt="Référencement SEO"
                                />
                                <p className="text-xl century pt-3">1 étude des conversions obtenues</p>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col md:flex-row w-full max-w-4xl mx-auto text-center justify-center">
                    <p className="p-6"><strong>Votre site internet</strong> est le reflet de votre entreprise en ligne. Notre <strong>agence SEO</strong> de <strong>référencement web</strong> travaille pour faire progresser la <strong>visibilité</strong> de votre société dans les <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/serp/">résultats de recherche</Link></strong> et ainsi, d’<strong>augmenter votre notoriété</strong> à travers une création au design professionnel, moderne et épuré. <br/><br/>

                        <b>ATTENTION ! Nous ne sommes pas des vendeurs de rêves : le référencement n’est pas une science exacte. Néanmoins, nous mettons tout en oeuvre pour vous apporter un site web optimisé et la meilleure visibilité possible.</b><br/></p>
                    </section>
                    <section className=" w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bgDev + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h2 /*data-aos='fade-right'*/ className="text-center text-white text-2xl md:text-4xl century">
                                <span className="text-bleu">/</span>Alors, convaincu ? Vous souhaitez être contacté ? N’attendez plus et entrez votre adresse mail.
                            </h2>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                            {/* <RappelForm /> */}
                            <RoundButton url="/contact-agence-web-toulouse/" text="Je veux améliorer ma visibilité sur internet" />
                        </div>

                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start text-center my-12">
                            <div className="w-full sm:w-1/3 px-6 sm:px-12 py-2 flex flex-col items-center justify-center" /*data-aos='zoom-in' data-aos-delay="200"*/>
                                <img src={laptop} width="80px" alt="Référencement Naturel" />
                                <p className="text-xl text-white century pt-3">WEBMARKETING</p>
                            </div>
                            <div className="w-full sm:w-1/3 sm:px-12 py-2 flex flex-col items-center justify-center sm:my-0 my-6" /*data-aos='zoom-in' data-aos-delay="400"*/>
                                
                                <img src={web} width="80px" alt="Référencement Naturel"/>
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT NATUREL</p>
                            </div>
                            <div className="w-full sm:w-1/3 px-12 py-2 flex flex-col items-center justify-center" /*data-aos='zoom-in' data-aos-delay="600"*/>
                                <img src={bullhorn} width="80px" alt="Référencement Google Ads" />
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT GOOGLE ADS</p>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>Vous souhaitez en savoir plus sur notre offre de référencement à Toulouse<span className="text-bleu">/</span>Agen ?
                        </h2>
                        <hr className="blue"></hr>
                        <h4 /*data-aos='fade-left'*/ className="text-xl text-grey text-center century italic pb-6">Vous vous demandez encore pourquoi le référencement est utile pour votre site web ? Voici des réponses aux interrogations courantes sur le SEO.</h4>
                    </section>
                    <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                        <div className="w-full md:w-3/4 py-0 flex justify-end">
                            <Accordion>
                                <div className="w-full" label="COMBIEN DE TEMPS FAUT-IL POUR ARRIVER EN PREMIÈRE PAGE DE GOOGLE ?">
                                    <p>Il est <span className="font-bold">quasiment impossible de prédire combien de temps est nécessaire pour apparaître dans les <strong>premiers résultats de Google</strong>.</span> Durant ce processus, plusieurs éléments entrent en compte : le <strong>mot-clé visé</strong>, la quantité de <strong>sites internet positionnés</strong> sur le <strong>mot-clé</strong>, les critères d’<strong>indexation de Google</strong> ou encore la nature du travail effectué. Il faut savoir que le <strong>référencement naturel</strong> est un travail de longue haleine qui nécessite beaucoup de rigueur, de régularité, mais aussi de temps avant d’observer des résultats concrets.<br/><br/>Être bien <strong>positionné</strong> sur un <strong>mot-clé à forte concurrence</strong> peut s’avérer très difficile (voire quasi impossible) sans mettre en place de grands moyens. En tant qu’<strong>agence de référencement à Toulouse et Agen</strong>, <span className="font-bold">notre rôle est de sélectionner les <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/mots-cles/">mots-clés</Link></strong> qui vont vous permettre de vous rendre <strong>visible&nbsp;</strong>le plus rapidement possible à partir de l'étude du comportement des internautes sur les <strong>moteurs de recherche</strong> (expressions clés plus précises)</span>. En combinant des stratégies de <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/courte-traine/">courte traîne</Link></strong> et <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/">longue traine</Link></strong>, nous sommes donc en mesure de vous <strong>référencer sur tous les mots-clés</strong> qui seront à mêmes de vous rendre visible pour vos cibles. <br/><br/>Pour ce faire, <span className="font-bold">nous disposons de tous les outils nécessaires pour déterminer quels sont les facteurs de succès qui feront de votre stratégie, une stratégie efficace.</span></p>
                                </div>
                                <div label="COMMENT SAVOIR SI MON SITE EST BIEN RÉFÉRENCÉ ?">
                                    <p><span className="font-bold">Pour savoir si votre site est <strong>référencé</strong> sur les <strong>moteurs de recherche</strong>, plusieurs critères doivent être pris en compte. Est-ce que le site a bien été <strong>indexé par les robots</strong> ? Est-ce que le <strong>contenu du site est optimisé pour le référencement naturel</strong> ?</span> <br/><br/>Pour assurer une visibilité qualifiée pour sonte site web, il va être est nécessaire de délimiter une stratégie qui correspond à vos objectifs par rapport à vos besoins. Il ne suffit pas d’être <strong>visible</strong>, <span className="font-bold">il faut être&nbsp;visible&nbsp;au bon endroit, autrement dit sur les <strong>bons mots clés</strong>. Il est important, par le choix de ces <strong>mots clés</strong>, de répondre à un besoin qui émane de la demande. <br/><br/>C'est pourquoi, nos référenceurs s'appuient sur une analyse du comportement des utilisateurs sur les moteurs de recherche pour établir la liste d’expressions clés qui vous seront bénéfiques.</span> C'est à ce moment-là qu'il sera possible de connaitre la <strong>position de votre site internet</strong> et de l'évaluer. Nous travaillons pour faire en sorte que votre <strong>nom de domaine</strong> apparaîssent le mieux possible dans les <strong>pages de résultats</strong>. Nous effectuons un suivi à partir de la création d'un <strong><Link to="/referencement-toulouse/rapport-positionnement/" className="text-bleu font-bold hover:text-black">rapport de positionnement</Link></strong>.<br/><br/>La réalisation d'un&nbsp;<Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/audit-seo/"><strong>audit de référencement</strong>&nbsp;(ou&nbsp;<strong>audit SEO</strong></Link>) est conseillée et utile pour prendre connaissance de l'état des lieux et déterminer les perspectives d'améliorations ainsi que les critères à prioriser : <strong>optimisation des contenus</strong>, <strong>URLS</strong>, <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/erreur-404/">liens brisés (erreurs 404)</Link></strong>,&nbsp;… afin de répondre aux exigences des <strong>moteurs de recherche</strong> (attention à la <strong><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/sur-optimisation/">sur-optimisation</Link></strong>).<br/><br/><span className="font-bold">Si ces critères ne sont pas respectés et mis à jour régulièrement, votre&nbsp;site&nbsp;risque de ne pas ressortir dans les&nbsp;résultats de recherche. Il nous revient, en tant qu’<strong>agence de référencement</strong>, de détecter quels sont les facteurs déterminants pour vous permettre d’obtenir un&nbsp;<strong>site optimisé</strong> sur le long terme.</span></p>
                                </div>
                                <div label="EST-CE POSSIBLE D'OBTENIR UNE MEILLEURE VISIBILITÉ SUR GOOGLE ADS AVEC UN PETIT BUDGET ?">
                                    <p>Pour se lancer dans la <strong>mise en place d’une&nbsp;campagne Google Ads</strong>, <span className="font-bold">il faut savoir que cette <strong>plateforme de&nbsp;sponsorisation</strong>&nbsp;fonctionne via un système de <strong>mise en concurrence</strong> sur la base d’enchères</span>.<br/><br/>En effet, une fois votre <strong>campagne</strong> créée et configurée, vos <strong>annonces publicitaires</strong> sont mises en concurrence avec les annonces des&nbsp;<strong>sites internets concurrents</strong>. Ainsi, <strong>Google</strong> effectue un classement des annonces en fonction de <strong>cout au clic</strong> et de <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/"><strong>critères de qualité</strong></Link>. <strong>Google</strong>&nbsp;va, en effet, classer les annonces en attribuant une note de qualité.<br/><br/><span className="font-bold">Si investir un budget conséquent peut-être porteur de succès, ceci est loin d’être une garantie.</span><br/><br/>Pour un moindre investissement et une qualité d’annonce supérieure, il sera possible d’obtenir de meilleurs résultats qu’un site ayant beaucoup de budget mais présentant des campagnes et des annonces mal construites et rédigées.<br/><br/><span className="font-bold"><strong>Linkweb</strong>&nbsp;vous accompagne dans la création et le <strong>lancement de vos campagnes</strong> ainsi que pour la création de vos <strong><Link to="/referencement-toulouse/landing-page/" className="text-bleu font-bold hover:text-black">landing pages</Link></strong> afin de vous apporter un&nbsp;<strong>retour sur investissement</strong>.</span></p>
                                    </div>
                            </Accordion>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>Ils sont satisfaits par notre offre de création de site internet
                        </h2>
                        <hr className="blue"></hr>

                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-center justify-center text-center mt-3 mb-12">
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up"*/>
                            <img
                                src={stars}
                                className="w-32 mx-auto h-auto mt-3"
                                alt="Avis Google"
                            />
                            <div className="text-lg century my-2">Contis Equitation</div>
                            <div className="italic">« Très bonne équipe sérieuse qui est à l’écoute de nos attentes. Le suivi est super, ils ne font pas QUE vous créer un site web, ils conseillent, donnent leurs idées, font des recherches et des créations pour vous et tout ça avec rapidité ! Je recommande cette entreprise qui m’a apporté une bonne partie de ma clientèle »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
                            <img
                                src={stars}
                                className="w-32 mx-auto h-auto mt-3"
                                alt="Avis Google"
                            />
                            <div className="text-lg century my-2">AVS Moto</div>
                            <div className="italic">« Linkweb s’occupe du référencement de notre site depuis 4 ans ! Cette agence Web est très compétente dans le domaine, le suivi ainsi que le rapport avec sa clientèle en font sans nul doute l’une des meilleures agences de la région, je recommande sans hésitation »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500"*/>
                            <img
                                src={stars}
                                className="w-32 mx-auto h-auto mt-3"
                                alt="Avis Google"
                            />
                            <div className="text-lg century my-2">Casino de Barbotan</div>
                            <div className="italic">« Superbe gestion de mon dossier depuis ma prise de poste grâce à Marine et depuis peu Dorian a repris le dossier et tout se passe pour le mieux merci à vous pour l’attention particulière que vous portez à chacun de vos clients, continuez comme ceci. »</div>
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
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" /*data-aos="zoom-in"*/>
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
query lastsThreePostsRef {
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
export default ReferencementToulouse;
