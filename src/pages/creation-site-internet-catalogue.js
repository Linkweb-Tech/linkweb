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
import ButtonMenu from '../components/buttonmenu.js';
import ButtonMenuBack from '../components/buttonmenuback.js';
import SousMenu from '../components/sousmenu.js';
import "../scss/global.scss";

import Bg from "../images/creation-site-internet-catalogue.jpg";
import imac from "../images/site-internet-catalogue.jpg";
// import bgDev from '../images/bg-dev.jpg';
import bgDev from '../images/cta-background-agence-web.jpg';


class CreationSiteInternetCatalogue extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Création site internet Catalogue à Toulouse (31) et Agen (47) - Linkweb"
                    description="Linkweb est spécialisée dans la création de site internet : nous mettons en place votre projet de site catalogue pour vous permettre de gagner en visibilité."
                    keywords={[`Création site internet vitrine Agen`, `Création site internet vitrine Toulouse`, `Création site internet Lot-et-Garonne`, `Création site web 47`]}
                    url="https://linkweb.fr/creation-site-internet-catalogue/"
                    nom="Création de site catalogue"
                    slug="creation-site-internet-catalogue/"
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
                <section className="w-full mt-24 bloctitrescreen mx-auto px-2 md:px-4 py-6 bg-no-repeat bg-cover bg-center flex md:flex-row flex-col justify-center items-center" style={{ background: '#00000094 url(' + Bg + ')', backgroundBlendMode: 'multiply', backgroundPosition: 'center', backgroundSize: 'cover', height: '650px' }}>
                    <div className="order-last md:order-first w-full md:w-1/3 max-w-5xl mx-auto p-1 my-4 md:mx-6 mx-2" >
                        <RoundButton url="/contact-agence-web-toulouse/" text="Créer mon site internet catalogue" />
                    </div>
                    <div className="w-full md:w-2/3 mt-6 p-1">
                        <h1 data-aos="fade-up" data-aos-delay="500" className="century text-2xl sm:text-4xl md:text-4xl xl:text-6xl text-center text-white">
                            Création site internet catalogue<br /> à Toulouse (31)<span className="text-bleu">/</span>Agen(47)
                            </h1>
                        <br />
                        <h3 className="italic text-lg text-center md:text-2xl text-white">Vous souhaitez promouvoir vos biens et services ? Le site internet catalogue s'intègre parfaitement dans une stratégie de promotion en vue de l'acquisition de nouveaux clients sur le Web.</h3>
                    </div>
                </section>
                <SousMenu active="c" />
                {/* <section className="w-full flex flex-row justify-end h-8 font-medium">
                        <section className="bg-white w-1/5 lg:w-1/12 flex text-center italic text-xs sm:text-sm md:text-md text-darkgrey">
                        <div className="w-full md:w-1/2 p-1 mt-0"><ButtonMenuBack url="/creation-site-internet-toulouse/" position="center"/></div>
                        <div className="w-full md:w-1/2 p-1 text-left mt-0 hidden md:block"><Link className="hover:text-bleu" to="/creation-site-internet-toulouse/">Retour</Link></div>
                        </section>
                        <section className="w-full lg:w-2/5 flex bg-darkgrey text-xs sm:text-sm md:text-md" style={{borderBottomLeftRadius:'27px', minHeight:'48px'}}>
                            <div className="w-full lg:w-1/3 text-bleu p-1"><ButtonMenu url="/creation-site-internet-agen/" text="Site vitrine" position="center" /></div>
                            <div className="w-full lg:w-1/3 text-white p-1"><ButtonMenu url="/creer-une-boutique-en-ligne/" text="E-commerce" position="center" /></div>
                            <div className="w-full lg:w-1/3 text-white p-1"><ButtonMenu url="/creation-de-site-internet-47-31/" text="Site sur-mesure" position="center" /></div>
                        </section>
                    </section> */}
                <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                    <br />
                    <h3 data-aos='fade-right' className="text-center text-4xl century">
                        Du <span className="font-bold">choix du nom de domaine</span> à la <span className="font-bold">mise en ligne de votre site internet</span>, Linkweb vous accompagne pour dynamiser votre <span className="font-bold">communication digitale d'entreprise</span>.
                        </h3>
                    <hr className="blue"></hr>
                </section>
                <section className="flex flex-col xl:flex-row w-full mx-auto px-4 py-6 my-4">
                    <div className="w-full century xl:w-1/2 px-12 md:px-24 py-12">
                        <h2 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in">
                            <span className="text-bleu">/</span>CRÉATION DE SITE INTERNET CATALOGUE : METTRE EN AVANT SON SAVOIR-FAIRE ET LA QUALITÉ DE SES PRODUITS
                            </h2>
                        <h4 className="century text-lg tracking-wider pb-6 text-justify" data-aos='fade-left'>
                            <span className="font-bold">La création d’un site internet catalogue offre la possibilité de promouvoir ses produits tout en obtenant de la visibilité sur les moteurs de recherche.</span>
                        </h4>
                        <p data-aos='fade-bottom' className="text-justify text-md">Le <strong>site internet catalogue</strong> regroupe tous les avantages du <strong>site internet vitrine</strong> et du <strong>site internet e-commerce</strong>, sans pour autant proposer de fonctionnalités lourdes en termes de gestion telles que la <strong>vente en ligne</strong>. Ce <strong>type de site internet</strong> est à privilégier lorsqu’il s’agit de <strong>mettre en avant vos produits et services</strong> à travers la mise en place de <strong>pages web</strong> de présentation fournies et très détaillées.
                            <br /><br />
                            La <strong>création d’un site internet catalogue</strong> s’adresse tout particulièrement à des <Link to="/creation-site-internet-toulouse/site-internet-immobilier/" className="text-bleu hover:text-black"><strong>agences immobilières</strong></Link> ou encore des <Link to="/creation-site-internet-toulouse/site-internet-industrie/" className="text-bleu hover:text-black"><strong>industriels</strong></Link> nécessitant la mise en avant de nombreuses informations à propos de leurs bien et produits.
                            <br /><br />
                            À ce niveau, le <strong>site internet catalogue</strong> s’organise de la même façon que le <strong>site internet e-commerce</strong> : les produits sont classés au sein de catégories, ce qui lui permet d’arborer une certaine clarté. De plus, la <strong>construction des pages produits</strong> va être essentielle dans la mise en oeuvre de ce <strong>type de site web</strong>.</p>
                    </div>
                    <div className="order-first xl:order-last w-full xl:w-1/2 p-0 xl:p-12">
                        <img className="mx-auto block" src={imac} alt="Création site internet Toulouse" />
                    </div>
                </section>
                <section className="w-full h-full flex flex-col century justify-center items-center px-4 pt-12 pb-0 my-2 text-white" style={{ background: '#00475a' }}>
                    <div className="w-full">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                            <span className="text-bleu">/</span>CRÉER UN SITE INTERNET CATALOGUE POUR VOTRE ENTREPRISE
                            </h2>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row mx-auto px-6 lg:px-32 py-6 my-4 lg:mt-10 lg:mb-4 lg:py-2 text-justify" >
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                                <span className="text-bleu">/</span>DES FICHES PRODUITS SUR-MESURE
                            </h3>
                            <br />
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Mettre en place des fiches produits exhaustives et ergonomiques pour fluidifier la transmission du message.</span>
                            </h4>
                            <p>Nous créons des <strong>fiches produits</strong> favorisant la mise en avant des caractéristiques techniques les plus précises jusqu'aux informations les plus globales concernant vos produits et services.</p>
                            {/* <Button url="/ergonomie-site-web-agen-toulouse/" text="En savoir plus sur l’ergonomie web" position="left" /> */}
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                                <span className="text-bleu">/</span>CRÉATION D'UN WEBDESIGN RESPONSIVE DESIGN
                            </h3>
                            <br />
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Créer un site internet adapté à tous les supports pour une expérience utilisateur sans faille. Nos sites web sont pensés pour être accessibles sur tous les appareils (smartphones, tablettes, ordinateur).</span>
                            </h4>
                            <p>Qu'il s'adresse aux utilisateurs ou aux <strong className="font-normal">moteurs de recherche</strong>, <strong className="font-normal">votre site internet</strong> doit proposer une <strong className="font-normal">expérience utilisateur</strong> de haute qualité grâce à la mise en place d'une <strong className="font-normal">plateforme web intuitive</strong> et performante.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row mx-auto px-6 lg:px-32 py-6 my-4 lg:my-2 lg:py-2 text-justify">
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                                <span className="text-bleu">/</span>UN SITE INTERNET ADMINISTRABLE
                            </h3>
                            <br />
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Mettre à disposition un outil de gestion et de mise à jour de ses biens et produits avec une main-mise sur la gestion des rôles d’administration du site web.</span>
                            </h4>
                            <p>Nous vous formons à la <strong className="font-normal">mise en ligne</strong> ainsi qu’à la <strong className="font-normal">mise à jour de vos produits</strong> pour vous permettre d’effectuer vos propres modifications. Nous vous donnons également la possibilité de contrôler les <strong className="font-normal">permissions des administrateurs du site</strong>.</p>
                            {/* <Button url="/blog/comment-optimiser-le-parcours-client-dun-site-internet/" text="En savoir plus sur le le parcours client" position="left" /> */}
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                                <span className="text-bleu">/</span>PROTOCOLE DE SÉCURISATION HTTPS
                            </h3>
                            <br />
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Mettre en place un site internet sécurisé, et rassurant pour les visiteurs via la mise en place d’un protocole HTTPS.</span>
                            </h4>
                            <p>Nous sécurisons votre domaine par la mise en place de <strong className="font-normal">protocole de sécurisation HTTPS (HyperText Transfer Protocole Secure)</strong> qui permet à chaque utilisateur de vérifier l’authenticité du site internet pour s’assurer qu’il s’agit bien d’un <strong className="font-normal">site de confiance</strong>.</p>
                            {/* <Button url="/blog/protocole-https-a-quoi-ca-sert/" color="white" text="En savoir plus sur le le protocole de sécurisation HTTPS" position="left" /> */}
                        </div>
                    </div>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                    <h2 data-aos='fade-right' className="text-center text-3xl century">
                        Vous souhaitez la création de votre site internet catalogue ?<br /> <span className="text-bleu">Nous le créons pour vous !</span>
                    </h2><br />
                    <hr className="blue"></hr>

                </section>
                <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
                    <div className="w-full xl:w-1/3 one px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE DÉFINIS MES BESOINS DE COMMUNICATION WEB
                                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    Afin d’obtenir un <strong>site internet</strong> à votre image, il est important de définir ses besoins de la manière la plus précise possible. En effet, la collaboration est fortement recommandée pour mettre au point une solution au plus proche de vos besoins en vue d’y répondre.
                                </div>
                                <Button url="/contact-agence-web-toulouse/" text="Prendre contact" position="center" />

                            </section>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 two px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE PRENDS RENDEZ-VOUS POUR DÉFINIR MON PROJET
                                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    Une fois vos besoins déterminés, nous vous invitons à nous rencontrer pour définir plus précisément votre <strong>projet de site internet vitrine</strong>. Nous vous proposerons la solution la plus à même de vous apporter un <strong>site web efficace</strong>.
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
                                    <span className="text-bleu">/</span>JE PROMEUS MON ACTIVITÉ SUR MON SITE INTERNET CATALOGUE
                                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    Une fois le projet établi, nous vous proposons une <strong>maquette visuelle et des contenus rédigés et optimisés pour le référencement naturel</strong>, en respectant une arborescence créée tout particulièrement pour rendre <strong>votre site internet visible</strong>.
                                </div>
                                <Button url="/contact-agence-web-toulouse/" text="Prendre rendez-vous" position="center" />
                            </section>

                        </div>

                    </div>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                    <h2 data-aos='fade-right' className="text-center text-3xl century">
                        <span className="text-bleu">/</span>Linkweb, agence de création de site internet à Agen et Toulouse
                        </h2>
                    <hr className="blue"></hr>

                </section>
                <section className="max-w-6xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                    <p className="text-xl font-bold century text-center">Pour la <strong><Link to="/creation-de-site-internet-a-agen/" className="text-bleu hover:text-black font-bold">création de votre site internet à Agen</Link></strong>, faites confiance à un spécialiste de la <strong>création de sites internet à Agen et Toulouse</strong> depuis plus de dix ans.</p>
                    <br />
                    <div className="w-full flex flex-col sm:flex-row text-center my-6">
                        <div className="w-full sm:w-1/3 flex flex-col items-center justify-center my-6 px-12" data-aos='zoom-in' data-aos-delay="200">
                            <svg className="svg-bleu" version="1.1" width="80px" height="80px" x="0px" y="0px" viewBox="0 0 511.999 511.999">
                                <g>
                                    <g>
                                        <path d="M481.091,27.937H30.909C13.866,27.937,0,41.803,0,58.846v310.819c0,17.043,13.866,30.909,30.909,30.909h154.26v22.49    c0,20.617-16.774,37.391-37.391,37.391h-33.997c-6.518,0-11.803,5.284-11.803,11.803c0,6.519,5.285,11.803,11.803,11.803h284.436    c6.518,0,11.803-5.284,11.803-11.803c0-6.519-5.285-11.803-11.803-11.803h-33.998c-20.617,0-37.391-16.774-37.391-37.391v-22.489    h154.26c17.043,0,30.91-13.866,30.91-30.909V58.846C512,41.803,498.134,27.937,481.091,27.937z M195.92,460.457    c8.046-10.336,12.857-23.308,12.857-37.391v-22.49h94.447v22.49c0,14.083,4.811,27.056,12.857,37.391H195.92z M488.394,369.666    c0,4.027-3.276,7.304-7.304,7.304H30.909c-4.027,0-7.304-3.276-7.304-7.304v-62.033h464.789V369.666z M488.394,284.026H23.606    V58.846c0-4.027,3.276-7.304,7.304-7.304h450.18c4.027,0,7.305,3.276,7.305,7.304V284.026z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <circle cx="256.003" cy="342.305" r="12.738" fill="#37cfee" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M276.238,109.254c-4.61-4.609-12.081-4.609-16.693,0l-83.414,83.414c-4.609,4.609-4.609,12.083,0,16.693    c2.306,2.305,5.325,3.457,8.347,3.457c3.022,0,6.041-1.152,8.346-3.457l83.414-83.414    C280.847,121.338,280.847,113.864,276.238,109.254z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M325.678,157.593c-4.608-4.609-12.079-4.609-16.692-0.001l-33.23,33.228c-4.609,4.61-4.609,12.084,0,16.693    c2.305,2.305,5.325,3.457,8.346,3.457c3.02,0,6.041-1.152,8.346-3.457l33.23-33.228    C330.287,169.676,330.287,162.202,325.678,157.593z" />
                                    </g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                            </svg>
                            <p className="text-xl century pt-3">INTERFACE INTUITIVE</p>
                        </div>
                        <div className="w-full sm:w-1/3 flex flex-col items-center justify-center px-12 my-6" data-aos='zoom-in' data-aos-delay="400">
                            <svg className="svg-bleu" width="80px" height="80px" viewBox="0 0 60 60" version="1.1">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="001---Insurance-Document" fill="#000000" fill-rule="nonzero">
                                        <path d="M6,11 L12,11 C12.5522847,11 13,10.5522847 13,10 C13,9.44771525 12.5522847,9 12,9 L6,9 C5.44771525,9 5,9.44771525 5,10 C5,10.5522847 5.44771525,11 6,11 Z" />
                                        <path d="M17,11 L26,11 C26.5522847,11 27,10.5522847 27,10 C27,9.44771525 26.5522847,9 26,9 L17,9 C16.4477153,9 16,9.44771525 16,10 C16,10.5522847 16.4477153,11 17,11 Z" />
                                        <path d="M6,22 L38,22 C38.5522847,22 39,21.5522847 39,21 C39,20.4477153 38.5522847,20 38,20 L6,20 C5.44771525,20 5,20.4477153 5,21 C5,21.5522847 5.44771525,22 6,22 Z" />
                                        <path d="M6,26 L20,26 C20.5522847,26 21,25.5522847 21,25 C21,24.4477153 20.5522847,24 20,24 L6,24 C5.44771525,24 5,24.4477153 5,25 C5,25.5522847 5.44771525,26 6,26 Z" />
                                        <path d="M6,34 L20,34 C20.5522847,34 21,33.5522847 21,33 C21,32.4477153 20.5522847,32 20,32 L6,32 C5.44771525,32 5,32.4477153 5,33 C5,33.5522847 5.44771525,34 6,34 Z" />
                                        <path d="M6,42 L20,42 C20.5522847,42 21,41.5522847 21,41 C21,40.4477153 20.5522847,40 20,40 L6,40 C5.44771525,40 5,40.4477153 5,41 C5,41.5522847 5.44771525,42 6,42 Z" />
                                        <path d="M6,50 L20,50 C20.5522847,50 21,49.5522847 21,49 C21,48.4477153 20.5522847,48 20,48 L6,48 C5.44771525,48 5,48.4477153 5,49 C5,49.5522847 5.44771525,50 6,50 Z" />
                                        <path d="M59.4,29.13 L48,24.207 L48,3 C48,1.34314575 46.6568542,1.01453063e-16 45,0 L7,0 C5.34314575,-1.01453063e-16 4,1.34314575 4,3 L4,4 L3,4 C1.34314575,4 2.02906125e-16,5.34314575 0,7 L0,57 C2.02906125e-16,58.6568542 1.34314575,60 3,60 L41,60 C41.8090309,59.9981857 42.5828431,59.6688195 43.145,59.087 L43.965,59.67 C44.5848485,60.1100206 45.4151515,60.1100206 46.035,59.67 L55.71,52.783 C58.3920283,50.8794247 59.9897805,47.7978858 60,44.509 L60,30.048 C60.000591,29.649839 59.7649212,29.2892641 59.4,29.13 Z M6,3 C6,2.44771525 6.44771525,2 7,2 L45,2 C45.5522847,2 46,2.44771525 46,3 L46,23.343 L45.4,23.082 C45.1472508,22.9730007 44.8607492,22.9730007 44.608,23.082 L44.008,23.343 L44.008,17 C44.008,16.978 43.997,16.957 43.995,16.935 C43.990041,16.8512265 43.9738978,16.7684928 43.947,16.689 C43.94,16.666 43.941,16.642 43.932,16.62 C43.923,16.598 43.916,16.598 43.911,16.586 C43.8623283,16.4771943 43.7945961,16.3779666 43.711,16.293 L31.711,4.293 C31.6260334,4.20940395 31.5268057,4.14167171 31.418,4.093 C31.405,4.087 31.396,4.077 31.384,4.072 C31.372,4.067 31.338,4.064 31.316,4.057 C31.2354177,4.03015853 31.1517441,4.01369264 31.067,4.008 C31.042,4.011 31.022,4 31,4 L6,4 L6,3 Z M32,7.414 L40.586,16 L33,16 C32.4477153,16 32,15.5522847 32,15 L32,7.414 Z M41,58 L3,58 C2.44771525,58 2,57.5522847 2,57 L2,7 C2,6.44771525 2.44771525,6 3,6 L30,6 L30,15 C30,16.6568542 31.3431458,18 33,18 L42,18 L42,24.207 L38.781,25.6 C38.9191601,25.4301844 38.9962835,25.2188875 39,25 C39,24.4477153 38.5522847,24 38,24 L24,24 C23.4477153,24 23,24.4477153 23,25 C23,25.5522847 23.4477153,26 24,26 L37.849,26 L33.219,28 L6,28 C5.44771525,28 5,28.4477153 5,29 C5,29.5522847 5.44771525,30 6,30 L30.007,30 C30.007,30.016 30,30.031 30,30.048 L30,32 L24,32 C23.4477153,32 23,32.4477153 23,33 C23,33.5522847 23.4477153,34 24,34 L30,34 L30,36 L6,36 C5.44771525,36 5,36.4477153 5,37 C5,37.5522847 5.44771525,38 6,38 L30,38 L30,40 L24,40 C23.4477153,40 23,40.4477153 23,41 C23,41.5522847 23.4477153,42 24,42 L30,42 L30,44 L6,44 C5.44771525,44 5,44.4477153 5,45 C5,45.5522847 5.44771525,46 6,46 L30.125,46 C30.2244326,46.682295 30.3939971,47.3525102 30.631,48 L24,48 C23.4477153,48 23,48.4477153 23,49 C23,49.5522847 23.4477153,50 24,50 L31.641,50 C32.1135779,50.7357522 32.6785144,51.4078957 33.322,52 L6,52 C5.44771525,52 5,52.4477153 5,53 C5,53.5522847 5.44771525,54 6,54 L36,54 L41.448,57.878 C41.310655,57.9541131 41.1569731,57.995964 41,58 Z M58,44.509 C57.9902639,47.1505786 56.7057822,49.624947 54.551,51.153 L45,57.952 L35.449,51.152 C33.2945042,49.624152 32.0100584,47.1502252 32,44.509 L32,30.709 L33.81,29.927 L33.829,29.919 L45,25.089 L58,30.705 L58,44.509 Z" />
                                        <path d="M44.6,27.439 L34.6,31.759 C34.2350788,31.9182641 33.999409,32.278839 34,32.677 L34,44.509 C34.009086,46.503312 34.9803344,48.3705817 36.608,49.523 L44.42,55.084 C44.7671643,55.331178 45.2328357,55.331178 45.58,55.084 L53.392,49.523 C55.0194082,48.3703573 55.9905824,46.5032302 56,44.509 L56,32.677 C56.000591,32.278839 55.7649212,31.9182641 55.4,31.759 L45.4,27.439 C45.1449495,27.3276869 44.8550505,27.3276869 44.6,27.439 Z M54,33.339 L54,44.509 C53.9926973,45.8587211 53.3337961,47.1217704 52.231,47.9 L45,53.042 L37.769,47.894 C36.6675346,47.1173365 36.0087381,45.8567225 36,44.509 L36,33.334 L45,29.447 L54,33.339 Z" />
                                        <path d="M39.6,42.2 C39.3141875,41.9856406 38.9357266,41.9400436 38.6071797,42.0803848 C38.2786328,42.2207259 38.0499141,42.5256842 38.0071797,42.8803848 C37.9644453,43.2350853 38.1141875,43.5856406 38.4,43.8 L42.4,46.8 C42.8320438,47.1242308 43.4434866,47.0467489 43.781,46.625 L51.781,36.625 C52.126178,36.1936656 52.0563344,35.564178 51.625,35.219 C51.1936656,34.873822 50.564178,34.9436656 50.219,35.375 L42.825,44.619 L39.6,42.2 Z" />
                                    </g>
                                </g>
                            </svg>
                            <p className="text-xl century pt-3">RESPECT DE LA CHARTE GRAPHIQUE ET IDENTITÉ VISUELLE</p>
                        </div>
                        <div className="w-full sm:w-1/3 flex flex-col items-center justify-center px-12 my-6" data-aos='zoom-in' data-aos-delay="600">
                            <svg width="80px" height="80px" x="0px" y="0px" viewBox="0 0 480 480" className="svg-bleu">
                                <g>
                                    <g>
                                        <path d="M456,240h-8V72c-0.026-22.08-17.92-39.974-40-40H72c-22.08,0.026-39.974,17.92-40,40v120h-8c-13.255,0-24,10.745-24,24    v208c0,13.255,10.745,24,24,24h304c4.418,0,8-3.582,8-8c-0.026-22.08-17.92-39.974-40-40h-24v-48h96v72c0,13.255,10.745,24,24,24    h64c13.255,0,24-10.745,24-24V264C480,250.745,469.255,240,456,240z M176,424c0,4.418-3.582,8-8,8H24c-4.418,0-8-3.582-8-8v-8h160    V424z M176,400H16V216c0-4.418,3.582-8,8-8h144c4.418,0,8,3.582,8,8V400z M296,416c10.168,0.012,19.229,6.418,22.632,16H190.528    c0.948-2.562,1.445-5.268,1.472-8v-8H296z M192,400v-48h16v48H192z M224,400v-48h32v48H224z M368,336H192v-48h176V336z M368,264v8    H192v-56c-0.027-3.796-0.966-7.53-2.736-10.888c0.12-0.112,0.28-0.144,0.392-0.264l79.2-79.2c3.07-3.178,2.982-8.243-0.196-11.312    c-3.1-2.994-8.015-2.994-11.116,0l-79.2,79.2c-0.192,0.2-0.272,0.456-0.44,0.664c-3.104-1.44-6.483-2.19-9.904-2.2H48V72    c0-13.255,10.745-24,24-24h336c13.255,0,24,10.745,24,24v168h-40C378.745,240,368,250.745,368,264z M464,424c0,4.418-3.582,8-8,8    h-64c-4.418,0-8-3.582-8-8v-8h80V424z M464,400h-80V264c0-4.418,3.582-8,8-8h64c4.418,0,8,3.582,8,8V400z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M95.592,289.376c-3.124-3.123-8.188-3.123-11.312,0l-33.936,33.936c-3.178,3.07-3.266,8.134-0.196,11.312    c3.07,3.178,8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196l33.936-33.936    C97.02,298.213,94.15,293.508,95.592,289.376z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M143.396,289.376c-3.1-2.994-8.015-2.994-11.116,0l-33.936,33.936c-3.178,3.069-3.266,8.134-0.196,11.312    c3.069,3.178,8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196l33.936-33.936    C146.661,297.51,146.574,292.445,143.396,289.376z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M317.46,114.344c-3.1-2.994-8.015-2.994-11.116,0l-79.2,79.2c-3.178,3.069-3.266,8.134-0.197,11.312    c3.069,3.178,8.134,3.266,11.312,0.197c0.067-0.064,0.132-0.13,0.197-0.197l79.2-79.2    C320.726,122.478,320.638,117.413,317.46,114.344z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M440.772,311.032c-3.1-2.995-8.016-2.995-11.116,0l-22.624,22.624c-3.178,3.07-3.266,8.134-0.196,11.312    c3.07,3.178,8.134,3.266,11.312,0.196c0.066-0.064,0.132-0.13,0.196-0.196l22.624-22.624    C444.038,319.166,443.95,314.102,440.772,311.032z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M240.16,304h-0.08c-4.418,0.022-7.982,3.622-7.96,8.04s3.622,7.982,8.04,7.96c4.418,0,8-3.582,8-8S244.578,304,240.16,304    z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M256,64h-32c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S260.418,64,256,64z" />
                                    </g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                            </svg>
                            <p className="text-xl century pt-3">ADAPTATION AU RESPONSIVE DESIGN</p>
                        </div>
                    </div>
                </section>
                <section className=" w-full lg:h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#000000ba url( ' + bgDev + ')', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                    <div className="max-w-5xl mx-auto flex items-center">
                        <h2 data-aos='fade-right' className="text-center text-white text-3xl md:text-4xl century">
                            <span className="text-bleu">/</span>Vous souhaitez opter pour une création de site vitrine ?
                            </h2>

                    </div>

                    <div className="max-w-6xl mx-auto flex text-center my-12">
                        {/* <RappelForm /> */}
                        <RoundButton url="/contact-agence-web-toulouse/" text="Je veux la création de mon site internet catalogue" />
                    </div>

                    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row text-center my-12">
                        <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                            <svg className="svg-white" width="80px" height="80px" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.002 512.002">
                                <g>
                                    <g>
                                        <path d="M502.002,10.249H10c-5.523,0-10,4.478-10,10v102.859c0,5.522,4.477,10,10,10h492.002c5.523,0,10-4.478,10-10V20.249    C512.002,14.727,507.525,10.249,502.002,10.249z M492.002,113.108H20V30.249h472.002V113.108z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M469.41,90.394l-8.167-8.167c2.229-4.408,3.416-9.306,3.416-14.388c0-8.533-3.323-16.557-9.357-22.591    c-12.456-12.455-32.723-12.456-45.18,0c-6.034,6.034-9.357,14.058-9.357,22.591c0,8.533,3.324,16.557,9.357,22.59    c6.035,6.034,14.058,9.357,22.591,9.357c5.083,0,9.98-1.188,14.388-3.416l8.167,8.167c1.953,1.952,4.512,2.929,7.071,2.929    s5.119-0.977,7.071-2.929C473.315,100.632,473.315,94.3,469.41,90.394z M441.161,76.286c-2.256,2.257-5.256,3.5-8.448,3.5    c-3.192,0-6.191-1.243-8.448-3.5c-2.256-2.257-3.5-5.256-3.5-8.447s1.244-6.192,3.5-8.448c2.329-2.329,5.389-3.493,8.448-3.493    c3.059,0,6.119,1.164,8.448,3.493c2.256,2.257,3.5,5.257,3.5,8.448S443.418,74.03,441.161,76.286z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M358.341,87.831c-0.13-0.641-0.32-1.271-0.57-1.87c-0.25-0.601-0.56-1.19-0.92-1.73c-0.36-0.54-0.78-1.06-1.24-1.52    c-0.46-0.46-0.97-0.88-1.52-1.24c-0.54-0.36-1.12-0.67-1.73-0.92c-0.6-0.25-1.23-0.44-1.87-0.57c-1.29-0.26-2.62-0.26-3.91,0    c-0.64,0.13-1.27,0.32-1.87,0.57c-0.6,0.25-1.18,0.56-1.72,0.92c-0.55,0.36-1.06,0.78-1.53,1.24c-0.46,0.46-0.87,0.979-1.24,1.52    c-0.36,0.54-0.67,1.13-0.92,1.73c-0.25,0.6-0.44,1.229-0.57,1.87c-0.13,0.649-0.19,1.3-0.19,1.96c0,0.649,0.06,1.3,0.19,1.95    c0.13,0.64,0.32,1.27,0.57,1.869c0.25,0.601,0.56,1.181,0.92,1.73c0.37,0.54,0.78,1.06,1.24,1.52c0.47,0.46,0.98,0.881,1.53,1.24    c0.54,0.36,1.12,0.67,1.72,0.92c0.61,0.25,1.24,0.44,1.87,0.57c0.65,0.13,1.31,0.19,1.96,0.19c0.65,0,1.31-0.061,1.95-0.19    c0.64-0.129,1.27-0.32,1.87-0.57c0.6-0.25,1.19-0.56,1.73-0.92c0.55-0.359,1.06-0.78,1.52-1.24c1.86-1.869,2.93-4.439,2.93-7.069    C358.541,89.131,358.471,88.48,358.341,87.831z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M310.627,79.786H102.794c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h207.833c5.523,0,10-4.478,10-10    C320.627,84.264,316.15,79.786,310.627,79.786z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M314.821,147.364H11.181c-5.523,0-10,4.478-10,10v197.199c0,5.523,4.477,10,10,10h303.64c5.523,0,10-4.478,10-10V157.364    C324.821,151.842,320.344,147.364,314.821,147.364z M121.806,344.562H36.925l57.165-66.186l41.4,47.94L121.806,344.562z     M146.806,344.562l18.646-24.861h48.489c5.523,0,10-4.478,10-10c0-5.522-4.477-10-10-10h-33.488l7.016-9.354h62.789l40.665,54.215    H146.806z M202.468,270.347l16.395-21.859l16.395,21.859H202.468z M304.821,329.76l-77.958-103.94c-1.889-2.518-4.853-4-8-4    c-3.147,0-6.111,1.482-8,4l-63.09,84.119l-46.114-53.4c-1.899-2.199-4.662-3.464-7.568-3.464s-5.668,1.265-7.568,3.464    l-65.342,75.653V167.364h283.64V329.76z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M137.648,178.846c-19.494,0-35.353,15.859-35.353,35.353c0,19.494,15.86,35.353,35.353,35.353    c19.494,0,35.353-15.859,35.353-35.353C173.001,194.705,157.142,178.846,137.648,178.846z M137.648,229.553    c-8.466,0-15.353-6.887-15.353-15.353s6.888-15.353,15.353-15.353c8.465,0,15.353,6.887,15.353,15.353    S146.114,229.553,137.648,229.553z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M502.002,147.364h-153.69c-5.523,0-10,4.478-10,10v197.199c0,5.522,4.477,10,10,10h153.69c5.523,0,10-4.478,10-10V157.364    C512.002,151.842,507.525,147.364,502.002,147.364z M492.002,344.563h-133.69V167.364h133.69V344.563z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M468.719,183.835h-87.124c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h87.124c5.523,0,10-4.478,10-10    C478.719,188.313,474.242,183.835,468.719,183.835z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M468.719,223.969h-87.124c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h87.124c5.523,0,10-4.478,10-10    C478.719,228.447,474.242,223.969,468.719,223.969z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M468.719,264.103h-87.124c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h87.124c5.523,0,10-4.478,10-10    C478.719,268.581,474.242,264.103,468.719,264.103z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M391.401,312.281c-0.13-0.641-0.32-1.271-0.57-1.87c-0.25-0.601-0.56-1.181-0.92-1.73c-0.37-0.54-0.78-1.06-1.25-1.52    c-2.32-2.32-5.77-3.391-9.02-2.73c-0.64,0.13-1.27,0.32-1.87,0.57c-0.6,0.25-1.18,0.56-1.73,0.92c-0.54,0.36-1.06,0.78-1.52,1.24    c-0.46,0.46-0.88,0.979-1.24,1.52c-0.36,0.55-0.67,1.13-0.92,1.73c-0.25,0.6-0.44,1.229-0.57,1.87c-0.13,0.649-0.2,1.3-0.2,1.949    c0,0.66,0.07,1.311,0.2,1.96c0.13,0.641,0.32,1.271,0.57,1.871c0.25,0.601,0.56,1.181,0.92,1.73c0.36,0.54,0.78,1.06,1.24,1.52    c0.46,0.46,0.98,0.88,1.52,1.24c0.55,0.36,1.13,0.67,1.73,0.92c0.6,0.25,1.23,0.44,1.87,0.57c0.65,0.13,1.3,0.2,1.96,0.2    c2.63,0,5.2-1.07,7.06-2.931c0.46-0.46,0.88-0.979,1.25-1.52c0.36-0.55,0.67-1.13,0.92-1.73c0.25-0.6,0.44-1.229,0.57-1.87    c0.13-0.649,0.19-1.3,0.19-1.96C391.591,313.581,391.531,312.93,391.401,312.281z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M468.719,304.236h-49.214c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h49.214c5.523,0,10-4.478,10-10    C478.719,308.714,474.242,304.236,468.719,304.236z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M164.871,378.751H11.181c-5.523,0-10,4.478-10,10v103.002c0,5.522,4.477,10,10,10h153.69c5.523,0,10-4.478,10-10V388.751    C174.871,383.229,170.394,378.751,164.871,378.751z M154.871,481.753H21.181v-83.002h133.69V481.753z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M502.002,378.751H199.728c-5.523,0-10,4.478-10,10v103.002c0,5.522,4.477,10,10,10h302.274c5.523,0,10-4.478,10-10    V388.751C512.002,383.229,507.525,378.751,502.002,378.751z M492.002,481.753H209.728v-83.002h282.274V481.753z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M255.281,438.302c-0.13-0.639-0.32-1.27-0.57-1.87c-0.25-0.61-0.56-1.189-0.92-1.729c-0.36-0.551-0.78-1.061-1.24-1.521    c-0.46-0.46-0.97-0.88-1.52-1.24c-0.54-0.359-1.12-0.67-1.73-0.92c-0.6-0.25-1.23-0.45-1.87-0.58c-1.29-0.25-2.62-0.25-3.91,0    c-0.63,0.13-1.26,0.33-1.87,0.58c-0.6,0.25-1.18,0.561-1.72,0.92c-0.55,0.36-1.06,0.78-1.52,1.24c-0.46,0.46-0.88,0.97-1.25,1.521    c-0.36,0.54-0.67,1.119-0.92,1.729c-0.25,0.601-0.44,1.23-0.57,1.87c-0.13,0.64-0.19,1.3-0.19,1.95c0,0.649,0.06,1.31,0.19,1.95    c0.13,0.639,0.32,1.269,0.57,1.879c0.25,0.6,0.56,1.18,0.92,1.72c0.37,0.55,0.79,1.06,1.25,1.52c1.86,1.86,4.44,2.931,7.07,2.931    c0.65,0,1.31-0.061,1.95-0.19c0.64-0.13,1.27-0.33,1.87-0.58c0.61-0.25,1.19-0.55,1.73-0.92c0.55-0.359,1.06-0.779,1.52-1.24    c0.46-0.46,0.88-0.97,1.24-1.52c0.36-0.54,0.67-1.12,0.92-1.72c0.25-0.61,0.44-1.24,0.57-1.88c0.13-0.641,0.2-1.301,0.2-1.95    C255.481,439.602,255.411,438.941,255.281,438.302z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M451.319,430.252h-167.93c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h167.93c5.523,0,10-4.478,10-10    C461.319,434.73,456.842,430.252,451.319,430.252z" />
                                    </g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                            </svg>
                            <p className="text-xl text-white century pt-3">SITE ERGONOMIQUE ET INTUITIF</p>
                        </div>
                        <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center my-6" data-aos='zoom-in' data-aos-delay="400">
                            <svg className="svg-white" width="80px" height="80px" version="1.1" x="0px" y="0px" viewBox="0 0 60.017 60.017" >
                                <path d="M59.144,3.731l-2.85-2.851c-1.164-1.161-3.057-1.162-4.221,0.001l-3.126,3.126H0v56h56V11.097l0.305-0.305l0,0l2.839-2.839  C60.308,6.789,60.308,4.895,59.144,3.731z M20.047,36.759l3.22,3.22l-4.428,1.208L20.047,36.759z M52.062,12.206L47.82,7.964  l1.414-1.414l4.243,4.242L52.062,12.206z M50.648,13.62L25.192,39.076l-4.242-4.242L46.406,9.378L50.648,13.62z M54,13.097v44.91H2  v-52h44.947L18.829,34.127l-0.188,0.188l-2.121,7.779l-1.226,1.226c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l1.226-1.226l7.779-2.123l26.351-26.35h0l0.447-0.447L54,13.097z   M57.73,6.539l-2.839,2.839l-4.243-4.243l2.839-2.839c0.384-0.384,1.009-0.383,1.393,0l2.85,2.85  C58.114,5.529,58.114,6.155,57.73,6.539z" />
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                            </svg>
                            <p className="text-xl century text-white pt-3">CONTENUS OPTIMISÉS POUR VOTRE RÉFÉRENCEMENT SEO</p>
                        </div>
                        <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="600">
                            <svg className="svg-white" width="80px" viewBox="0 0 64 80"><g><path d="M61,3.994H3c-1.654,0-3,1.346-3,3v52.004c0,0.553,0.447,1,1,1h7.961C8.975,59.999,8.986,60.006,9,60.006h8.002   c0.014,0,0.025-0.007,0.039-0.008H27.96c0.014,0.001,0.025,0.008,0.039,0.008h8.002c0.014,0,0.025-0.007,0.039-0.008h10.919   c0.014,0.001,0.025,0.008,0.039,0.008H55c0.014,0,0.025-0.007,0.039-0.008H63c0.553,0,1-0.447,1-1V6.994   C64,5.34,62.654,3.994,61,3.994z M47.998,57.998v-2.99H54v2.99H47.998z M49.999,53.008c0-0.552,0.448-1,1-1s1,0.448,1,1H49.999z    M55,53.008h-1.001c0-1.654-1.346-3-3-3s-3,1.346-3,3h-1.001c-0.553,0-1,0.447-1,1v3.99h-1.999v-8.992h14v8.992H56v-3.99   C56,53.455,55.553,53.008,55,53.008z M58.999,47.006h-16c-0.553,0-1,0.447-1,1v9.992H41v-9.992c0-0.553-0.447-1-1-1H24   c-0.553,0-1,0.447-1,1v9.992h-0.999v-9.992c0-0.553-0.447-1-1-1h-16c-0.553,0-1,0.447-1,1v9.992H2V9.994h60v48.004h-2.001v-9.992   C59.999,47.453,59.552,47.006,58.999,47.006z M28.999,57.998v-2.99h6.002v2.99H28.999z M31,53.008c0-0.552,0.448-1,1-1s1,0.448,1,1   H31z M36.001,53.008H35c0-1.654-1.346-3-3-3s-3,1.346-3,3h-1.001c-0.553,0-1,0.447-1,1v3.99H25v-8.992h14v8.992h-1.999v-3.99   C37.001,53.455,36.554,53.008,36.001,53.008z M10,57.998v-2.99h6.002v2.99H10z M12,53.008c0-0.552,0.448-1,1-1s1,0.448,1,1H12z    M17.002,53.008H16c0-1.654-1.346-3-3-3s-3,1.346-3,3H9c-0.553,0-1,0.447-1,1v3.99H6.001v-8.992h14v8.992h-1.999v-3.99   C18.002,53.455,17.555,53.008,17.002,53.008z M3,5.994h1.02c-0.552,0-0.994,0.447-0.994,1s0.452,1,1.005,1c0.552,0,1-0.447,1-1   s-0.448-1-1-1h2.988c-0.552,0-0.994,0.447-0.994,1s0.452,1,1.005,1c0.552,0,1-0.447,1-1s-0.448-1-1-1h2.992   c-0.552,0-0.994,0.447-0.994,1s0.452,1,1.005,1c0.552,0,1-0.447,1-1s-0.448-1-1-1H61c0.552,0,1,0.448,1,1v1H10.032H7.029H4.03H2v-1   C2,6.442,2.448,5.994,3,5.994z" /><path d="M40,11.994H5.001c-0.553,0-1,0.447-1,1v31c0,0.553,0.447,1,1,1H40c0.553,0,1-0.447,1-1v-31   C41,12.441,40.553,11.994,40,11.994z M39,42.994H6.001v-29H39V42.994z" /><path d="M43,22.998h15.999c0.553,0,1-0.447,1-1s-0.447-1-1-1H43c-0.553,0-1,0.447-1,1S42.447,22.998,43,22.998z" /><path d="M43,19.998h15.999c0.553,0,1-0.447,1-1s-0.447-1-1-1H43c-0.553,0-1,0.447-1,1S42.447,19.998,43,19.998z" /><path d="M43,25.998h7.991c0.553,0,1-0.447,1-1s-0.447-1-1-1H43c-0.553,0-1,0.447-1,1S42.447,25.998,43,25.998z" /><path d="M43,30.996h7.991c0.553,0,1-0.447,1-1s-0.447-1-1-1H43c-0.553,0-1,0.447-1,1S42.447,30.996,43,30.996z" /><path d="M60,34.994c0-0.553-0.447-1-1-1H43c-0.553,0-1,0.447-1,1v3c0,0.553,0.447,1,1,1h16c0.553,0,1-0.447,1-1V34.994z M58,36.994   H44v-1h14V36.994z" /><path d="M56,28.998c0-0.553-0.447-1-1-1h-0.999c-0.012,0-0.021,0.006-0.032,0.007c-0.064,0.002-0.125,0.023-0.188,0.038   c-0.067,0.016-0.136,0.024-0.197,0.053c-0.009,0.004-0.02,0.003-0.029,0.008c-0.045,0.022-0.073,0.061-0.112,0.088   c-0.061,0.042-0.121,0.079-0.17,0.133c-0.044,0.047-0.072,0.103-0.106,0.157c-0.033,0.055-0.07,0.104-0.093,0.165   c-0.026,0.068-0.032,0.14-0.043,0.212c-0.007,0.048-0.028,0.09-0.028,0.14c0,0.011,0.006,0.02,0.006,0.03   c0.002,0.066,0.024,0.13,0.04,0.196c0.016,0.065,0.023,0.131,0.052,0.19c0.004,0.01,0.003,0.021,0.008,0.03l0.362,0.726   c-0.275,0.178-0.468,0.473-0.468,0.825c0,0.553,0.447,1,1,1H55l0,0c0.001,0,0.001,0,0.001,0c0.002,0,0.004-0.001,0.006-0.001   c0.148-0.001,0.286-0.039,0.413-0.098c0.009-0.005,0.019-0.003,0.027-0.007c0.045-0.022,0.073-0.061,0.113-0.088   c0.06-0.042,0.12-0.079,0.169-0.133c0.044-0.047,0.072-0.103,0.106-0.157c0.033-0.055,0.07-0.104,0.094-0.166   c0.025-0.067,0.031-0.139,0.042-0.211c0.007-0.048,0.028-0.09,0.028-0.14c0-0.011-0.006-0.02-0.006-0.03   c-0.002-0.066-0.024-0.13-0.04-0.195s-0.023-0.132-0.052-0.192c-0.004-0.009-0.003-0.02-0.008-0.029l-0.362-0.726   C55.807,29.646,56,29.351,56,28.998z" /><path d="M11,40.994h22.999c0.553,0,1-0.447,1-1v-17c0-0.553-0.447-1-1-1h-2.997v-0.002c0-0.004,0.002-0.006,0.002-0.01   c0-3.309-2.691-6-6-6c-0.894,0-1.739,0.202-2.502,0.554c-0.764-0.352-1.609-0.554-2.503-0.554c-3.309,0-6,2.691-6,6v0.012H11   c-0.553,0-1,0.447-1,1v17C10,40.547,10.447,40.994,11,40.994z M32.999,38.994h-3v-15h3V38.994z M29.003,21.976   c0,0.003-0.001,0.005-0.001,0.007v0.012h-3.001v-0.012c0-0.005-0.003-0.009-0.003-0.013c-0.003-1.508-0.569-2.884-1.493-3.937   c0.165-0.021,0.328-0.051,0.499-0.051C27.208,17.982,29,19.773,29.003,21.976z M21.004,21.982c0-1.254,0.592-2.361,1.498-3.096   c0.905,0.734,1.497,1.842,1.497,3.096c0,0.004,0.002,0.006,0.002,0.01v0.002h-2.999C21.002,21.99,21.004,21.986,21.004,21.982z    M19.999,17.982c0.171,0,0.334,0.029,0.499,0.051c-0.922,1.05-1.486,2.421-1.493,3.924c0,0.009-0.005,0.017-0.005,0.025v0.012   h-3.001v-0.012C15.999,19.776,17.793,17.982,19.999,17.982z M12,23.994h15.999v15H12V23.994z" /></g></svg>
                            <p className="text-xl century text-white pt-3">FICHES PRODUITS CRÉÉES SUR-MESURE</p>
                        </div>
                    </div>
                </section>
                <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center px-4 mt-12 mb-3">
                    <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                        <span className="text-bleu">/</span>Linkweb est à vos côtés pour la création de votre site internet catalogue
                        </h2>
                    <hr className="blue"></hr>
                    <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Le site internet catalogue est un support de communication en ligne indispensable pour une entreprise. Accessible de jour, comme de nuit, il vous apporte une visibilité considérable pour promouvoir vos produits et services.</h4>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="POURQUOI CRÉER UN SITE INTERNET CATALOGUE ?">
                                <p><span className="font-bold">La <strong>création d’un site internet catalogue</strong> est particulièrement recommandée si vous souhaitez <strong>obtenir de nouveaux contacts</strong> et <strong>demandes de devis</strong> pour vos produits ou services</span>.
                                    <br /><br />
                                    En effet, le <span className="font-bold"><strong>site internet catalogue</strong> n’a pas pour vocation de <strong>vendre en ligne</strong></span>. Toutefois, il constitue un intermédiaire qui doit <strong>proposer une présentation exhaustive de vos produits et services</strong>, tout en <strong>répondant aux attentes d’un utilisateur d’un point de vue technique</strong>.
                                    <br /><br />
                                    <span className="font-bold">Le <strong>site internet catalogue</strong> tire le meilleur du <strong>site internet vitrine</strong> et du <strong>site internet e-commerce</strong></span> sans fonctionnalité de <strong>vente en ligne</strong>. Ainsi, il est très utile lorsqu’il s’agit de mettre en avant des caractéristiques d’un produit ou d’un service.
                                    <br /><br />
                                    De ce fait, le <strong>site internet catalogue</strong> est parfaitement adapté pour une <strong>agence immobilière</strong> ou encore une <Link to="/creation-site-internet-toulouse/site-internet-cuisiniste/" className="text-bleu hover:text-black"><strong>entreprise cuisiniste</strong></Link> qui souhaitent <span className="font-bold"><strong>présenter leurs catalogues de biens et produits</strong></span> sans restriction de contenus.
                                    <br /><br />
                                    Disposer d’un outil fonctionnel est indispensable pour <strong>développer votre image</strong> et votre <strong>notoriété</strong> en vue d’<strong>acquérir de nouveaux clients</strong>.</p>
                            </div>
                            <div label="DE QUOI SONT CONSTITUÉES LES FICHES PRODUITS ?">
                                <p>Les <strong>fiches produits</strong> ou <strong>pages produits</strong> sont au cœur de la <span className="font-bold">mise en place d’une plateforme performante</span>. Elles doivent être suffisamment exhaustives concernant le produit ou service présenté, les modalités de souscription ou d’achat ainsi que sur la livraison.
                                    <br /><br />
                                    En ce sens, le <strong>web design des fiches produits</strong> est travaillé en vue de mettre en avant les informations essentielles et ainsi ne pas brouiller le message. Tous ces éléments doivent être identifiables au sein d’une <span className="font-bold"><strong>plateforme ergonomique</strong> et claire</span>.
                                    <br /><br />
                                    Par ailleurs, les <strong>fiches produits</strong> doivent également contenir du texte de description. Ce texte est d’autant plus important qu’<span className="font-bold">il s’adresse aux utilisateurs ainsi qu’aux <strong>moteurs de recherche</strong></span>.
                                    <br /><br />
                                    Il va être optimisé pour vous permettre de <span className="font-bold">vous <strong>positionner sur les moteurs de recherches</strong> pour des requêtes stratégiques.</span></p>
                            </div>
                            <div label="J'AI UN BESOIN PARTICULIER, EST-CE POSSIBLE D'ADAPTER UN SITE CATALOGUE ?">
                                <p><strong>Avoir un site internet</strong> permet la mise en place de nombreuses fonctionnalités favorisant l’<strong>expérience utilisateur</strong>. En termes d’évolutivité, le <span className="font-bold"><strong>site internet catalogue</strong>n’échappe pas à la règle</span>.
                                    <br /><br />
                                    En effet, il est tout à fait possible de mettre en place des fonctionnalités spécifiques dans le cadre d’une <Link to="/creation-site-internet-sur-mesure/" className="text-bleu hover:text-black"><strong>création de site web sur-mesure</strong></Link>.
                                    <br /><br />
                                    Que ce soit au niveau de l’<strong>éditeur du site</strong>, de la mise en place d’un <strong>module de recherche</strong> ou bien d’un <strong>simulateur de devis</strong> par exemple, le <strong>site catalogue</strong> permet l’ajout de ce type d’outils. Pour <strong>créer son site internet professionnel</strong>, il est important d’<span className="font-bold">anticiper l’évolution de son <strong>projet web</strong> dans le temps</span>.
                                    <br /><br />
                                    À ce niveau, le <strong>site internet catalogue</strong> n’est pas une <strong>solution web</strong> limitée. Il peut également convenir de se tourner vers une <span className="font-bold"><strong>solution sur-mesure pour un projet web</strong> de plus grande ampleur.</span></p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                    <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                        <span className="text-bleu">/</span>Les dernières actualités
                        </h3>
                    <hr className="blue"></hr>
                    <LastPosts lastposts={this.props.data.allWpPost.edges} />
                    <Link className="bg-bleu text-white px-16 py-3 block mx-auto hover:bg-black font-normal" to="/actualite-digitale/">Voir l'actualité digitale</Link>
                    <br />
                </section>
                <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center px-4 mt-12 mb-3">
                    <h3 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                        <span className="text-bleu">/</span>Vous pourriez également être intéressé
                        </h3>
                    <hr className="blue"></hr>
                    <br />
                    <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">
                        Vous souhaitez en savoir plus sur nos prestations d’<Link to="/" className="text-bleu hover:text-black font-bold">agence web à Agen</Link> (47) et Toulouse (31) ? Découvrez nos autres prestations, ainsi que nos différentes réalisations.</h4>
                    <br />
                    <section className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 mr-5 p-2 font-bold text-white" style={{ borderRadius: '5px' }}>
                            <Link to="/referencement-toulouse/">Référencement</Link>
                        </div>
                        <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 mr-5 p-2 font-bold text-white" style={{ borderRadius: '5px' }}>
                            <Link to="/">Agence Web</Link>
                        </div>
                        <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 mr-5 p-2 font-bold text-white" style={{ borderRadius: '5px' }}>
                            <Link to="/agence-de-communication-agen-47-toulouse-31/">Nos réalisations</Link>
                        </div>
                    </section>
                    <br />
                </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsCreationSiteInternetCatalogue {
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
export default CreationSiteInternetCatalogue;




