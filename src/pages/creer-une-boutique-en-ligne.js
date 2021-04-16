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

import Bg from "../images/background-boutique-en-ligne.jpg";
import imac from "../images/creer-boutique-en-ligne.jpg";
// import bgDev from '../images/bg-dev.jpg';
import bgDev from '../images/cta-background-agence-web.jpg';

class CreerBoutiqueEnLigne extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Créer une Boutique En Ligne - Site E-Commerce - Linkweb Agen"
                    description="Vous souhaitez mettre en place un site internet pour vendre vos produits ? Linkweb vous accompagne pour définir votre projet de boutique en ligne."
                    keywords={[`Créer une boutique en ligne à Agen`, `Créer une boutique en ligne à Toulouse`, `Création site e-commerce Agen`, `Création site e-commerce Toulouse`]}
                    url="https://linkweb.fr/creer-une-boutique-en-ligne/"
                    nom="Boutique en ligne"
                    slug="creer-une-boutique-en-ligne/"
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
                    <section className="w-full mt-24 bloctitrescreen mx-auto px-2 md:px-4 py-6 bg-no-repeat bg-cover bg-center flex md:flex-row flex-col justify-center items-center" style={{background:'#00000098 url(' + Bg +')', backgroundBlendMode:'multiply', backgroundSize:'cover', backgroundPosition:'center', height:'650px'}}>
                        <div className="order-last md:order-first w-full md:w-1/3 max-w-5xl mx-auto p-1 my-4 md:mx-6 mx-2" >
                            <RoundButton url="/contact-agence-web-toulouse/" text="Je veux vendre mes produits en ligne" />
                        </div>
                        <div className="w-full md:w-2/3 mt-6 p-1">
                            <h1 data-aos="fade-up" data-aos-delay="500" className="century text-2xl lg:text-4xl xl:text-6xl text-center text-white">
                            Créer une boutique en ligne<br/> à Agen (47)<span className="text-bleu">/</span>Toulouse(31)
                            </h1>
                            <h2 className="my-3 font-bold century uppercase text-white text-center" data-aos="fade-down">Site internet e-commerce</h2>
                            <br/>
                            <h3 className="italic text-lg text-center lg:text-2xl text-white">Vous souhaitez élargir votre champ d’acquisition pour vendre vos produits ? Créer une boutique en ligne va vous permettre de générer des ventes directement depuis votre site internet et ainsi compléter votre chiffre d’affaires en investissant un nouveau marché.</h3>
                        </div>
                    </section>
                    <SousMenu active="b" />
                    {/* <section className="w-full flex flex-row justify-end h-8 font-medium">
                        <section className="bg-white w-1/5 lg:w-1/12 flex text-center italic text-xs sm:text-sm md:text-md text-darkgrey">
                        <div className="w-full md:w-1/2 p-1 mt-0"><ButtonMenuBack url="/creation-site-internet-toulouse/" position="center"/></div>
                        <div className="w-full md:w-1/2 p-1 text-left mt-0 hidden md:block"><Link className="hover:text-bleu" to="/creation-site-internet-toulouse/">Retour</Link></div>
                        </section>
                        <section className="w-full lg:w-2/5 flex bg-darkgrey text-xs sm:text-sm md:text-md" style={{borderBottomLeftRadius:'27px', minHeight:'48px'}}>
                            <div className="w-full lg:w-1/3 text-white p-1"><ButtonMenu url="/creation-site-internet-vitrine/" text="Site vitrine" position="center" /></div>
                            <div className="w-full lg:w-1/3 text-bleu p-1"><ButtonMenu url="/creer-une-boutique-en-ligne/" text="E-commerce" position="center" /></div>
                            <div className="w-full lg:w-1/3 text-white p-1"><ButtonMenu url="/creation-site-internet-sur-mesure/" text="Site sur-mesure" position="center" /></div>
                        </section>
                    </section> */}
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <br/>
                        <h3 data-aos='fade-right' className="text-center text-4xl century">
                        82,7% des internautes français achètent sur internet ! Vendez vos produits en ligne pour maximiser votre chiffre d’affaires !
                        </h3>
                        <hr className="blue"></hr>
                    </section>
                    <section className="flex flex-col xl:flex-row w-full mx-auto px-4 py-6 my-4">
                        <div className="w-full xl:w-1/2 px-12 xl:px-24 py-12">
                            <h2 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in">
                                <span className="text-bleu">/</span>CRÉER UNE BOUTIQUE EN LIGNE : OPTEZ POUR LE E-COMMERCE
                            </h2>
                            <h4 className="century text-lg tracking-wider pb-6 text-justify" data-aos='fade-left'>
                                <strong className="font-bold">Développer son commerce en ligne, c’est faire appel à un outil puissant pour atteindre une cible élargie et de potentiels nouveaux clients potentiels.</strong>
                            </h4>
                            <p data-aos='fade-bottom' className="text-justify">La <strong>création d’un site de vente en ligne</strong> via la solution <strong>e-commerce</strong> ne remplace pas votre boutique physique : elle est complémentaire ! Avoir sa propre <strong>boutique en ligne</strong> permet d’apporter de la <strong>visibilité à son commerce</strong>, à ses produits, et ainsi acquérir une certaine notoriété pour aller chercher de nouveaux clients.
                            <br/><br/>
                            Un site à la fois rassurant, attractif et intuitif va vous permettre de gagner la confiance des internautes et ainsi, booster votre <strong>taux de conversion</strong>. Faire appel à des professionnels de confiance pour la mise en place de son <strong>site marchand</strong> est fortement recommandé de ce point de vue.
                            <br/><br/>
                            Choix des moyens de paiements, avis clients, gestion des stocks, fiches produits : en développant votre <strong>boutique en ligne</strong>, vous optimisez la vente de vos produits phares.</p>
                        </div>
                        <div className="w-full order-first xl:order-last xl:w-1/2 p-12">
                            <img className="mx-auto block" src={imac} alt="Créer une boutique en ligne à Toulouse"/>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        Linkweb s’engage aux côtés des e-commerçants
                        </h2>
                        <hr className="blue"></hr>
                        
                    </section>
                    <section className="max-w-6xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <p className="text-xl font-bold century text-center">Linkweb accompagne tous les porteurs de projets e-commerce pour mettre en place des sites efficaces et qui généreront du chiffre d’affaires pour votre entreprise.</p>
                        <br/>
                        <div className="w-full flex flex-col sm:flex-row text-center my-6">
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center pt-6" data-aos='zoom-in' data-aos-delay="200">       
                                <svg className="svg-bleu" width="80px" height="80px" version="1.1" x="0px" y="0px" viewBox="0 0 511.999 511.999" >
                                    <g>
                                        <g>
                                            <path d="M150.447,312.003c7.476-3.772,16.448-0.955,20.427,6.413l28.239,52.29c2.176,4.029,6.811,6.063,11.25,4.943    c4.439-1.122,7.549-5.116,7.549-9.695v-76.351c-0.001-5.522-4.478-9.999-10.001-9.999s-10,4.478-10,10v36.79l-9.44-17.48    c-9.162-16.963-29.823-23.452-47.033-14.766c-14.729,7.431-22.314,23.821-18.445,39.858l18.307,75.881    c4.279,17.738,11.908,34.202,22.674,48.935l35.864,49.077c1.958,2.68,4.999,4.101,8.082,4.101c2.047,0,4.113-0.627,5.892-1.927    c4.459-3.259,5.433-9.516,2.174-13.975l-35.864-49.077c-9.202-12.592-15.722-26.663-19.379-41.824l-18.307-75.882    C140.755,322.349,144.05,315.231,150.447,312.003z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M376.225,269.38c-5.901,0-11.456,1.511-16.3,4.164c-4.907-12.782-17.302-21.883-31.791-21.883    c-6.249,0-12.105,1.7-17.144,4.65c-5.386-11.718-17.227-19.88-30.946-19.88c-5.007,0-9.76,1.095-14.045,3.044v-47.811    c0-18.772-15.272-34.045-34.045-34.045c-18.773,0-34.045,15.272-34.045,34.045v17.334c0,5.522,4.477,10,10,10s10-4.478,10-10    v-17.333c0-7.744,6.301-14.045,14.045-14.045c7.744,0,14.045,6.301,14.045,14.045v141.107c0,5.522,4.477,10,10,10    c5.523,0,10-4.478,10-10v-62.297c0-7.744,6.3-14.045,14.045-14.045c7.745,0,14.045,6.301,14.045,14.045v62.297    c0,5.522,4.477,10,10,10c5.523,0,10-4.478,10-10v-47.066c0-7.745,6.3-14.046,14.045-14.046c7.745,0,14.045,6.301,14.045,14.046    v47.066c0,5.522,4.477,10,10,10s10-4.478,10-10v-29.349c0-7.744,6.301-14.045,14.045-14.045s14.045,6.301,14.045,14.045v84.379    c0,22.484-3.412,44.764-10.14,66.218l-14.106,44.982c-1.652,5.27,1.28,10.882,6.55,12.534c0.996,0.313,2.003,0.461,2.995,0.461    c4.254-0.001,8.199-2.737,9.539-7.011l14.106-44.982c7.336-23.394,11.056-47.687,11.056-72.202v-84.379    C410.27,284.653,394.998,269.38,376.225,269.38z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M511.161,53.029c-1.996-6.139-7.205-10.528-13.594-11.455l-30.629-4.441L453.233,9.381C450.376,3.594,444.592,0,438.139,0    c-0.001,0-0.003,0-0.004,0c-6.456,0.001-12.24,3.599-15.095,9.389l-13.69,27.758l-30.627,4.459    c-6.388,0.93-11.595,5.322-13.587,11.463c-1.993,6.14-0.358,12.752,4.265,17.256l22.169,21.598l-5.224,30.506    c-1.089,6.363,1.479,12.672,6.702,16.464c2.95,2.143,6.401,3.23,9.875,3.23c2.677,0,5.368-0.646,7.854-1.953l27.391-14.41    l27.399,14.396c5.714,3.004,12.508,2.51,17.729-1.287c5.221-3.796,7.786-10.105,6.692-16.468l-5.24-30.503l22.157-21.609    C511.526,65.781,513.157,59.167,511.161,53.029z M469.594,78.741c-3.969,3.869-5.777,9.441-4.838,14.903l4.436,25.823    l-23.194-12.186c-4.907-2.58-10.765-2.577-15.67,0.003l-23.188,12.199l4.423-25.827c0.934-5.462-0.877-11.031-4.847-14.899    l-18.768-18.284l25.93-3.774c5.483-0.799,10.221-4.243,12.672-9.214l11.59-23.498l11.602,23.491    c2.454,4.97,7.193,8.411,12.679,9.208l25.93,3.761L469.594,78.741z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M329.01,53.029c-1.996-6.139-7.204-10.529-13.593-11.455l-30.629-4.441L271.083,9.381C268.225,3.594,262.442,0,255.988,0    c-0.001,0-0.003,0-0.005,0c-6.455,0.001-12.239,3.599-15.094,9.389l-13.69,27.758l-30.627,4.459    c-6.388,0.93-11.595,5.322-13.587,11.463c-1.993,6.14-0.358,12.752,4.265,17.256l22.168,21.597l-5.224,30.506    c-1.089,6.363,1.479,12.672,6.702,16.464c2.95,2.143,6.401,3.23,9.875,3.23c2.677,0,5.368-0.646,7.854-1.953l27.392-14.409    l27.399,14.395c5.714,3.004,12.508,2.51,17.729-1.287c5.221-3.796,7.786-10.105,6.692-16.468l-5.24-30.503l22.157-21.609    C329.375,65.781,331.006,59.168,329.01,53.029z M287.444,78.741c-3.968,3.868-5.776,9.439-4.838,14.903l4.436,25.823    l-23.194-12.186c-4.908-2.579-10.767-2.578-15.67,0.003l-23.189,12.199l4.423-25.827c0.934-5.463-0.877-11.032-4.847-14.899    l-18.767-18.284l25.929-3.774c5.483-0.799,10.221-4.243,12.673-9.214l11.59-23.499l11.602,23.492    c2.453,4.969,7.192,8.411,12.679,9.208l25.93,3.761L287.444,78.741z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M146.86,53.029c-1.996-6.139-7.205-10.528-13.594-11.455l-30.629-4.441L88.933,9.381C86.075,3.594,80.292,0,73.838,0    c-0.001,0-0.003,0-0.005,0c-6.455,0.001-12.239,3.599-15.094,9.389l-13.69,27.758l-30.627,4.459    c-6.388,0.93-11.594,5.322-13.587,11.462S0.475,65.82,5.099,70.325l22.169,21.598l-5.224,30.506    c-1.089,6.363,1.479,12.672,6.702,16.465c2.951,2.142,6.401,3.23,9.876,3.229c2.677,0,5.368-0.646,7.854-1.953l27.392-14.409    l27.399,14.395c5.715,3.002,12.508,2.509,17.729-1.286c5.221-3.797,7.785-10.108,6.692-16.47l-5.24-30.503l22.157-21.609    C147.225,65.781,148.856,59.168,146.86,53.029z M105.294,78.74c-3.969,3.868-5.778,9.44-4.839,14.904l4.436,25.823l-23.193-12.186    c-4.907-2.579-10.766-2.578-15.67,0.003l-23.19,12.2l4.422-25.825c0.936-5.462-0.875-11.032-4.846-14.901L23.648,60.473    l25.929-3.774c5.483-0.799,10.221-4.243,12.672-9.214l11.59-23.499l11.602,23.492c2.453,4.969,7.192,8.411,12.679,9.208    l25.931,3.761L105.294,78.74z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M214.981,243.13c-1.86-1.861-4.439-2.93-7.07-2.93c-2.63,0-5.21,1.069-7.07,2.93s-2.93,4.439-2.93,7.07    c0,2.63,1.07,5.21,2.93,7.069c1.86,1.86,4.44,2.931,7.07,2.931c2.63,0,5.21-1.07,7.07-2.931c1.86-1.859,2.93-4.439,2.93-7.069    C217.911,247.568,216.841,244.989,214.981,243.13z"/>
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
                                <p className="text-xl century pt-3">CRÉATION D’UN SITE RASSURANT POUR LES INTERNAUTES</p>
                            </div>
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center pt-6" data-aos='zoom-in' data-aos-delay="400">
                                <svg className="svg-bleu" height="80px" width="80px" version="1.1"  x="0px" y="0px" viewBox="0 0 512 512" >
                                    <g>
                                        <g>
                                            <path d="M498.791,161.127c-17.545-17.546-46.094-17.545-63.645,0.004c-5.398,5.403-39.863,39.896-45.128,45.166V87.426    c0-12.02-4.681-23.32-13.181-31.819L334.412,13.18C325.913,4.68,314.612,0,302.592,0H45.018c-24.813,0-45,20.187-45,45v422    c0,24.813,20.187,45,45,45h300c24.813,0,45-20.187,45-45V333.631L498.79,224.767C516.377,207.181,516.381,178.715,498.791,161.127    z M300.019,30c2.834,0,8.295-0.491,13.18,4.393l42.426,42.427c4.76,4.761,4.394,9.978,4.394,13.18h-60V30z M360.018,467    c0,8.271-6.728,15-15,15h-300c-8.271,0-15-6.729-15-15V45c0-8.271,6.729-15,15-15h225v75c0,8.284,6.716,15,15,15h75v116.323    c0,0-44.254,44.292-44.256,44.293l-21.203,21.204c-1.646,1.646-2.888,3.654-3.624,5.863l-21.214,63.64    c-1.797,5.39-0.394,11.333,3.624,15.35c4.023,4.023,9.968,5.419,15.35,3.624l63.64-21.213c2.209-0.736,4.217-1.977,5.863-3.624    l1.82-1.82V467z M326.378,312.427l21.213,21.213l-8.103,8.103l-31.819,10.606l10.606-31.82L326.378,312.427z M368.8,312.422    l-21.213-21.213c11.296-11.305,61.465-61.517,72.105-72.166l21.213,21.213L368.8,312.422z M477.573,203.558l-15.463,15.476    l-21.213-21.213l15.468-15.481c5.852-5.849,15.366-5.848,21.214,0C483.426,188.19,483.457,197.673,477.573,203.558z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M285.018,150h-210c-8.284,0-15,6.716-15,15s6.716,15,15,15h210c8.284,0,15-6.716,15-15S293.302,150,285.018,150z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M225.018,210h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,210,225.018,210z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M225.018,270h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,270,225.018,270z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M225.018,330h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,330,225.018,330z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M285.018,422h-90c-8.284,0-15,6.716-15,15s6.716,15,15,15h90c8.284,0,15-6.716,15-15S293.302,422,285.018,422z"/>
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
                                <p className="text-xl century pt-3">MISE EN PLACE DE FICHES PRODUITS SUR-MESURE</p>
                            </div>
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center pt-6"  data-aos='zoom-in' data-aos-delay="600">
                                <svg className="svg-bleu" width="80px" height="80px" version="1.1" x="0px" y="0px" viewBox="0 0 512.16 512.16">
                                    <g transform="translate(1 1)">
                                        <g>
                                            <g>
                                                <path d="M272.067,336.147H408.6c5.12,0,8.533-3.413,8.533-8.533v-76.8c0-5.12-3.413-8.533-8.533-8.533H272.067     c-5.12,0-8.533,3.413-8.533,8.533v76.8C263.533,332.733,266.947,336.147,272.067,336.147z M280.6,259.347h119.467v59.733H280.6     V259.347z"/>
                                                <path d="M41.667,225.213h68.267c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533H41.667     c-5.12,0-8.533,3.413-8.533,8.533S36.547,225.213,41.667,225.213z"/>
                                                <path d="M144.067,225.213h68.267c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-68.267     c-5.12,0-8.533,3.413-8.533,8.533S138.947,225.213,144.067,225.213z"/>
                                                <path d="M41.667,259.347H152.6c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533H41.667c-5.12,0-8.533,3.413-8.533,8.533     S36.547,259.347,41.667,259.347z"/>
                                                <path d="M212.333,242.28h-25.6c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h25.6c5.12,0,8.533-3.413,8.533-8.533     S217.453,242.28,212.333,242.28z"/>
                                                <path d="M503.32,136.467c-5.973-7.68-13.653-11.947-23.04-12.8l-20.48-2.482V97.213V80.147c0-18.773-15.36-34.133-34.133-34.133     H33.133C14.36,46.013-1,61.373-1,80.147v17.067v68.267v187.733c0,15.413,10.357,28.518,24.453,32.718     c-0.43,17.262,12.631,32.248,30.161,33.842l394.24,44.373c0.853,0,2.56,0,3.413,0c17.067,0,32.427-12.8,34.133-29.013     l25.6-273.92C511.853,152.68,509.293,143.293,503.32,136.467z M16.067,105.747h426.667v22.187v29.013H16.067V105.747z      M33.133,63.08h392.533c9.387,0,17.067,7.68,17.067,17.067v8.533H16.067v-8.533C16.067,70.76,23.747,63.08,33.133,63.08z      M16.067,353.213v-179.2h426.667v179.2c0,9.387-7.68,17.067-17.067,17.067H33.987h-0.853     C23.747,370.28,16.067,362.6,16.067,353.213z M493.933,157.8l-25.6,273.92c-0.853,9.387-9.387,16.213-18.773,15.36     L56.173,402.707c-8.533-0.853-14.507-7.68-15.36-15.36h384.853c18.773,0,34.133-15.36,34.133-34.133V165.48v-28.16l19.627,1.707     c4.267,0,8.533,2.56,11.093,5.973C493.08,148.413,494.787,153.533,493.933,157.8z"/>
                                            </g>
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
                                <p className="text-xl century pt-3">DÉFINITION DES MOYENS DE PAIEMENT</p>
                            </div>
                        </div>
                    </section>
                    <section className="w-full h-full flex flex-col justify-center items-center px-4 pt-12 pb-0 my-2 bg-bleu text-white">
                        <div className="w-full">
                            <h2 data-aos='fade-right' className="text-center text-3xl century">
                            <span className="text-white">/</span>CRÉER UNE BOUTIQUE EN LIGNE : FAIRE LE CHOIX DE L’EFFICACITÉ
                            </h2>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row mx-auto px-6 lg:px-32 py-6 my-4 lg:mt-10 lg:mb-4 lg:py-2 text-justify">
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            /UN WEBDESIGN INTUITIF ET RASSURANT
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Inciter les internautes à acheter sur votre site internet va nécessiter de mettre en place une plateforme e-commerce qui inspire la confiance.</span>
                            </h4>
                            <p>Nous mettons en place un <strong>site internet au web design ergonomique</strong>, <strong>moderne</strong> et <strong>intuitif</strong>. <strong>Avoir une boutique en ligne</strong> nécessite une certaine exigence pour pousser les utilisateurs à passer commande en toute confiance. Nous mettons en place un visuel attractif pour <strong>votre site e-commerce</strong>.</p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            /DES FICHES PRODUITS SUR MESURE
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Créer une fiche produit, c’est considérer à la fois les besoins des utilisateurs, mais aussi la possibilité d’optimiser votre visibilité via le référencement naturel.</span>
                            </h4>
                            <p>Nous vous donnons la possibilité de <strong>créer des fiches produits</strong> très détaillées, vous permettant d’inclure de nombreuses caractéristiques pour décrire vos produits : des générales aux plus techniques, passez tout en revue pour donner envie à vos utilisateurs de <strong>commander sur votre site</strong>.</p>
                            {/* <Button url="/blog/comment-faire-une-fiche-produit/" color="white" text="En savoir plus sur les fiches produits" position="left" /> */}
                        </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row mx-auto px-6 lg:px-32 py-6 my-4 lg:my-2 lg:py-2 text-justify">
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            /FORMATION À L’UTILISATION DU BACK OFFICE
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Mettre en place une boutique en ligne, c’est être capable de comprendre son interface pour être en mesure de l’appréhender.</span>
                            </h4>
                            <p>Nous vous formerons à l’utilisation du <strong>back office de votre site internet e-commerce</strong> : visualiser les dernières ventes, gérer vos stocks, ajouter ou modifier des fiches produits. Nous vous accompagnons pour mener votre projet clé en main.</p>
                            <Button url="/blog/quest-ce-quun-back-office-et-quelle-est-son-utilite/" color="white" text="En savoir plus sur le back-office" position="left" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            /MAINTENANCE DE VOTRE SITE E-COMMERCE
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Vous n’avez pas confiance dans le commerce électronique ? Linkweb s’occupe d’effectuer la maintenance de votre site pour vous prémunir de tout désagrément.</span>
                            </h4>
                            <p><strong>Prestashop</strong>, <strong>Woocommerce</strong> (<strong>WordPress</strong>), ou encore <strong>Shopify</strong>, nous maîtrisons l’ensemble de ces outils pour vous assurer une <strong>maintenance technique</strong> continue. En cas de problème technique, vous aurez affaire à une équipe réactive et efficace.</p>
                        </div>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        Créer une boutique en ligne en 3 étapes
                        </h2><br/>
                        <hr className="blue"></hr>
                        
                    </section>
                    <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
                        <div className="w-full xl:w-1/3 one px-auto">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">/</span>JE DÉFINIS LES CONTOURS DE MON PROJET
                                </h3>
                                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                    À l’image de l’ensemble des <strong>projets web</strong> que nous mettons en place, nous avons besoin de connaître vos objectifs, vos cibles, votre positionnement et la nature de votre activité pour vous permettre d’accéder à la <strong>solution e-commerce</strong> la plus adaptée à votre entreprise.
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
                                <span className="text-bleu">/</span>JE PRENDS RENDEZ-VOUS AVEC UN PROFESSIONNEL
                                </h3>
                                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                    Une fois vos besoins déterminés, nous établissons les contours de votre projet en déterminant les outils marketing les plus adaptés à votre site. Nos équipes détermineront votre stratégie pour <strong>obtenir un site internet</strong> efficace.
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
                                <span className="text-bleu">/</span>JE SUIS FORMÉ(E) À LA GESTION DE MA BOUTIQUE EN LIGNE
                                </h3>
                                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                    Une fois votre projet bâti et <strong>votre site</strong> prêt à être mis en ligne, nous vous formerons à utiliser la face cachée de votre boutique : gérer vos stocks, ajouter vos produits, suivre l’évolution de vos ventes. Vous pourrez <strong>gérer votre site e-commerce</strong> en totale autonomie.
                                </div>
                                <Button url="/contact-agence-web-toulouse/" text="Prendre rendez-vous" position="center" />
                            </section>
                            
                            </div>
                
                        </div>
                    </section>
                    <section className=" w-full lg:h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{background:'#000000ba url( '+ bgDev +')', backgroundSize:'cover', backgroundBlendMode: 'overlay'}}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h2 data-aos='fade-right' className="text-center text-white text-3xl md:text-4xl century">
                            <span className="text-bleu">/</span>Vous souhaitez opter pour une solution e-commerce ?
                            </h2>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center my-12">
                            {/* <RappelForm /> */}
                            <RoundButton url="/contact-agence-web-toulouse/" text="Je veux vendre mes produits en ligne" />
                        </div>

                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row text-center my-12">
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                                <svg className="svg-white" height="80px" viewBox="0 0 448.941 448.941" width="80px">
                                    <path d="m322.019 392.823c-62.154 0-116.412-33.94-145.576-84.176h146.233v-56.118h-166.476c-1.545-9.147-2.535-18.48-2.535-28.059 0-9.578.99-18.912 2.535-28.059h166.476v-56.118h-146.233c29.163-50.237 83.421-84.176 145.576-84.176 20.606 0 41.019 3.864 60.666 11.481l10.138-52.336c-26.14-10.124-43.239-15.262-70.804-15.262-93.996 0-174.561 58.138-207.944 140.294h-57.957v56.118h43.38c-1.156 9.214-1.949 18.537-1.949 28.059s.793 18.845 1.949 28.059h-43.38v56.118h57.957c33.383 82.156 113.948 140.294 207.944 140.294 27.566 0 44.664-5.138 70.805-15.262l-10.138-52.336c-19.648 7.616-40.061 11.48-60.667 11.479z"/>
                                </svg>
                                <p className="text-xl text-white century pt-3">CRÉATION DE BOUTIQUE EN LIGNE</p>
                            </div>
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center my-6" data-aos='zoom-in' data-aos-delay="400">
                                <svg className="svg-white" wodth="80px" height="80px" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" >
                                    <g>
                                        <g>
                                            <path d="M477.858,8.533H34.142C15.317,8.533,0,23.851,0,42.675v281.591c0,4.71,3.823,8.533,8.533,8.533h494.933    c4.71,0,8.533-3.823,8.533-8.533V42.675C512,23.851,496.683,8.533,477.858,8.533z M494.933,315.733H17.067V42.675    c0-9.421,7.663-17.075,17.075-17.075h443.716c9.412,0,17.075,7.654,17.075,17.075V315.733z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M503.467,315.733H8.533c-4.71,0-8.533,3.823-8.533,8.533v42.658c0,18.825,15.317,34.142,34.142,34.142h443.716    c18.825,0,34.142-15.317,34.142-34.142v-42.658C512,319.556,508.177,315.733,503.467,315.733z M494.933,366.925    c0,9.421-7.663,17.075-17.075,17.075H34.142c-9.412,0-17.075-7.654-17.075-17.075V332.8h477.867V366.925z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M281.6,349.867h-51.2c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h51.2c4.71,0,8.533-3.823,8.533-8.533    S286.31,349.867,281.6,349.867z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M469.333,42.667H42.667c-4.71,0-8.533,3.823-8.533,8.533v273.067c0,4.71,3.823,8.533,8.533,8.533h426.667    c4.71,0,8.533-3.823,8.533-8.533V51.2C477.867,46.49,474.044,42.667,469.333,42.667z M460.8,315.733H51.2v-256h409.6V315.733z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M366.933,452.267H145.067c-14.114,0-25.6,11.486-25.6,25.6s11.486,25.6,25.6,25.6h221.867c14.114,0,25.6-11.486,25.6-25.6    S381.047,452.267,366.933,452.267z M366.933,486.4H145.067c-4.71,0-8.533-3.831-8.533-8.533s3.823-8.533,8.533-8.533h221.867    c4.71,0,8.533,3.831,8.533,8.533S371.644,486.4,366.933,486.4z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M349.867,452.267c-28.314,0-42.667-20.096-42.667-59.733c0-4.71-3.823-8.533-8.533-8.533h-85.333    c-4.71,0-8.533,3.823-8.533,8.533c0,39.637-14.353,59.733-42.667,59.733c-4.71,0-8.533,3.823-8.533,8.533    c0,4.71,3.823,8.533,8.533,8.533h187.733c4.71,0,8.533-3.823,8.533-8.533C358.4,456.09,354.577,452.267,349.867,452.267z     M203.699,452.267c10.505-11.639,16.691-28.971,17.937-51.2h68.736c1.237,22.229,7.424,39.561,17.937,51.2H203.699z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M407.757,259.959l-20.599-20.599l11.46-11.46c2.125-2.125,2.978-5.214,2.244-8.124c-0.734-2.91-2.944-5.214-5.82-6.084    l-85.333-25.6c-3.012-0.905-6.263-0.077-8.482,2.142c-2.227,2.219-3.046,5.478-2.142,8.482l25.6,85.333    c0.862,2.884,3.174,5.094,6.084,5.828c2.901,0.717,5.999-0.12,8.124-2.244l12.066-12.075l20.599,20.608    c1.596,1.604,3.772,2.5,6.033,2.5s4.437-0.896,6.033-2.5l24.132-24.141C411.093,268.689,411.093,263.296,407.757,259.959z     M377.591,278.067l-18.756-18.765c-2.176-2.176-5.026-3.26-7.876-3.26c-2.859,0-5.709,1.092-7.876,3.251l-6.161,6.161    l-16.939-56.465l56.465,16.939l-6.605,6.605c-1.818,1.826-2.816,4.25-2.816,6.827c0,2.586,1.007,5.026,2.833,6.835l19.797,19.797    L377.591,278.067z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M358.4,76.8H119.467c-4.71,0-8.533,3.823-8.533,8.533V128c0,4.71,3.823,8.533,8.533,8.533H358.4    c4.71,0,8.533-3.823,8.533-8.533V85.333C366.933,80.623,363.11,76.8,358.4,76.8z M349.867,119.467H128v-25.6h221.867V119.467z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M221.867,170.667H153.6c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.823,8.533,8.533,8.533h68.267    c4.71,0,8.533-3.823,8.533-8.533V179.2C230.4,174.49,226.577,170.667,221.867,170.667z M213.333,204.8h-51.2v-17.067h51.2V204.8z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M358.4,76.8H119.467c-4.71,0-8.533,3.823-8.533,8.533v162.133c0,4.71,3.823,8.533,8.533,8.533h203.145    c2.705,0,5.239-1.271,6.844-3.439c1.613-2.167,2.108-4.966,1.331-7.552l-10.803-36.019l35.968,10.795    c2.586,0.777,5.385,0.282,7.543-1.331c2.167-1.604,3.439-4.147,3.439-6.844V85.333C366.933,80.623,363.11,76.8,358.4,76.8z     M349.867,200.141L309.7,188.092c-3.012-0.905-6.263-0.077-8.482,2.142c-2.227,2.227-3.046,5.478-2.142,8.491l12.066,40.209H128    V93.867h221.867V200.141z"/>
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
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT DE VOS PRODUITS</p>
                            </div>
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center"  data-aos='zoom-in' data-aos-delay="600">
                                <svg className="svg-white" width="80px" height="80px" version="1.1" x="0px" y="0px" viewBox="0 0 512.16 512.16">
                                    <g transform="translate(1 1)">
                                        <g>
                                            <g>
                                                <path d="M272.067,336.147H408.6c5.12,0,8.533-3.413,8.533-8.533v-76.8c0-5.12-3.413-8.533-8.533-8.533H272.067     c-5.12,0-8.533,3.413-8.533,8.533v76.8C263.533,332.733,266.947,336.147,272.067,336.147z M280.6,259.347h119.467v59.733H280.6     V259.347z"/>
                                                <path d="M41.667,225.213h68.267c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533H41.667     c-5.12,0-8.533,3.413-8.533,8.533S36.547,225.213,41.667,225.213z"/>
                                                <path d="M144.067,225.213h68.267c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-68.267     c-5.12,0-8.533,3.413-8.533,8.533S138.947,225.213,144.067,225.213z"/>
                                                <path d="M41.667,259.347H152.6c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533H41.667c-5.12,0-8.533,3.413-8.533,8.533     S36.547,259.347,41.667,259.347z"/>
                                                <path d="M212.333,242.28h-25.6c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h25.6c5.12,0,8.533-3.413,8.533-8.533     S217.453,242.28,212.333,242.28z"/>
                                                <path d="M503.32,136.467c-5.973-7.68-13.653-11.947-23.04-12.8l-20.48-2.482V97.213V80.147c0-18.773-15.36-34.133-34.133-34.133     H33.133C14.36,46.013-1,61.373-1,80.147v17.067v68.267v187.733c0,15.413,10.357,28.518,24.453,32.718     c-0.43,17.262,12.631,32.248,30.161,33.842l394.24,44.373c0.853,0,2.56,0,3.413,0c17.067,0,32.427-12.8,34.133-29.013     l25.6-273.92C511.853,152.68,509.293,143.293,503.32,136.467z M16.067,105.747h426.667v22.187v29.013H16.067V105.747z      M33.133,63.08h392.533c9.387,0,17.067,7.68,17.067,17.067v8.533H16.067v-8.533C16.067,70.76,23.747,63.08,33.133,63.08z      M16.067,353.213v-179.2h426.667v179.2c0,9.387-7.68,17.067-17.067,17.067H33.987h-0.853     C23.747,370.28,16.067,362.6,16.067,353.213z M493.933,157.8l-25.6,273.92c-0.853,9.387-9.387,16.213-18.773,15.36     L56.173,402.707c-8.533-0.853-14.507-7.68-15.36-15.36h384.853c18.773,0,34.133-15.36,34.133-34.133V165.48v-28.16l19.627,1.707     c4.267,0,8.533,2.56,11.093,5.973C493.08,148.413,494.787,153.533,493.933,157.8z"/>
                                            </g>
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
                                <p className="text-xl century text-white pt-3">BUDGÉTISATION</p>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center px-4 mt-12 mb-3">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>LINKWEB VOUS ACCOMPAGNE POUR CRÉER VOTRE BOUTIQUE EN LIGNE
                        </h2>
                        <hr className="blue"></hr>
                        <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Vous souhaitez développer vos ventes en ligne par l’intermédiaire de la création d’une boutique en ligne ? Nous répondons à vos interrogations.</h4>
                    </section>
                    <section  className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                        <div className="w-full md:w-3/4 py-0 flex justify-end">
                            <Accordion>
                                <div className="w-full" label="QUELS OUTILS UTILISER POUR CRÉER MA BOUTIQUE EN LIGNE ?">
                                <p>Certains outils proposent la <strong>création de votre boutique en ligne</strong> de façon très simple et rapide. Néanmoins, ce type de plateforme va proposer des fonctionnalités qui ne vous permettront pas d’avoir la main totalement <strong>sur votre site internet</strong>. <br/><br/>En tant qu’<strong>agence spécialisée dans la création de site internet e-commerce</strong>, <span className="font-bold">nous recourons à des outils fiables</span> permettant d’obtenir un <span className="font-bold">suivi très détaillé</span>, un <span className="font-bold"><strong>design sur-mesure</strong></span>, une <span className="font-bold"><strong>sécurisation optimale</strong></span> et des <span className="font-bold"><strong>serveurs adaptés</strong></span> pour éviter tout désagrément.<br/><br/> Nous vous donnons également la possibilité de <span className="font-bold"><strong>personnaliser vos fiches produits</strong></span> pour faire de votre <strong>boutique en ligne</strong> un <span className="font-bold">site de confiance, rassurant et fiable.</span></p>
                                </div>
                                <div label="COMMENT DONNER CONFIANCE AUX UTILISATEURS DE MA BOUTIQUE ?">
                                <p>Avant d’<strong>acheter sur Internet</strong>, les consommateurs ont pour habitude de vérifier l’<strong>authenticité d’un site</strong>, ou bien de rechercher l’avis de clients ayant déjà commandé sur ce site pour se tourner vers un <strong>site de confiance</strong>. <br/><br/>Cela passe par un <span className="font-bold"><strong>webdesign ergonomique et intuitif du site internet</strong></span>, les <span className="font-bold"><strong>avis clients</strong></span>, ou encore la <span className="font-bold">transparence des informations</span>. Nous vous accompagnons pour <strong>créer un site internet</strong> rassurant, présentant l’ensemble des informations nécessaires pour conforter les utilisateurs. <br/><br/>Il faudra répondre à leur méfiance par une solution de qualité, pour leur permettre de <strong>commander un produit sur votre site internet</strong> en toute confiance.</p>
                                </div>
                                <div label="COMBIEN DE PRODUITS MA BOUTIQUE EN LIGNE PEUT-ELLE CONTENIR ?">
                                <p><span className="font-bold">Autant que vous le souhaitez !</span><br/><br/> Il n’existe pas de limites quand au nombre de <strong>produits et de fiches produits</strong>. pouvant être créées sur un <strong>site e-commerce</strong>. En revanche, il faudra tenir compte de ce facteur lors du choix de l'<strong>hébergement web</strong>, notamment par rapport à l'espace de stockage disponible. <br/><br/>Nous vous formerons pour vous permettre d’être autonome de ce point de vue et vous offrir la possibilité d’ajouter vos dernières nouveautés de façon régulière afin de mettre en place un site très performant. <br/><br/><span className="font-bold">La régularité de publication sur un site n’est pas gage de qualité, néanmoins, elle contribue très largement à vous apporter une <strong>site web performant</strong>.</span></p>
                                </div>
                            </Accordion>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Les dernières actualités
                        </h3>
                        <hr className="blue"></hr>
                        <LastPosts lastposts={ this.props.data.allWordpressPost.edges } />
                        <Link className="bg-bleu text-white px-16 py-3 block mx-auto hover:bg-black font-normal" to="/actualite-digitale/">Voir l'actualité digitale</Link>
                        <br/>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center px-4 mt-12 mb-3">
                        <h3 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Vous pourriez également être intéressé
                        </h3>
                        <hr className="blue"></hr>
                        <br/>
                        <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">
                            Vous souhaitez en savoir plus sur nos prestations d’agence web à Agen (47) et Toulouse (31) ? Découvrez nos autres prestations, ainsi que nos différentes réalisations.</h4>
                        <br/>
                        <section className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 mr-5 p-2 text-white font-bold" style={{borderRadius:'5px'}}>
                                <Link to="/referencement-toulouse/">Référencement</Link>
                            </div>
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 mr-5 p-2 text-white font-bold" style={{borderRadius:'5px'}}>
                                <Link to="/agence-digitale-toulouse/">Agence Web</Link>
                            </div>
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 mr-5 p-2 text-white font-bold" style={{borderRadius:'5px'}}>
                                <Link to="/agence-de-communication-agen-47-toulouse-31/">Nos réalisations</Link>
                            </div>
                        </section>
                        <br/>
                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsCreerBoutiqueEnLigne {
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
export default CreerBoutiqueEnLigne;




