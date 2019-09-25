import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import Accordion from '../components/accordion';
import ButtonMenu from '../components/buttonmenu.js';


import Bg from "../images/background-campagnes-ads.jpg";
import imac from "../images/analytics-site-internet.jpg";
import bgDev from '../images/bg-dev.jpg';


class ReferencementAds extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Adwords Agen - Toulouse - Gestion Campagne Adwords - Linkweb"
                    description="Création de votre campagne Google Ads sur-mesure - Étude des mots-clés -  Prévision et budgétisation. Notre objectif : générer un retour sur investissement."
                    keywords={[`Agence Adwords Agen`, `Agence Adwords Toulouse`, `Campagne Adwords Agen`, `Campagne Adwords Toulouse`]}
                    url="https://linkweb.fr/agence-adwords-47-31"
                /> 
                <PageTransition
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
                >
                    <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-cover flex flex-row justify-center items-center" style={{backgroundImage:'url(' + Bg +')', backgroundColor:'rgba(55,197,238,0.6)', backgroundBlendMode:'overlay', backgroundPosition:'center', height:'650px'}}>
                        <div className="w-1/3 max-w-5xl mx-auto" style={{marginLeft:'20px', marginRight:'20px', padding:'4%'}} >
                            <RoundButton url="/contact-agence-web-toulouse" text="Je veux propulser mon site sur Google" />
                        </div>
                        <div className="w-2/3" style={{padding:'2%'}}>
                            <h1 data-aos="fade-up" data-aos-delay="500" className="century text-7xl text-center text-white">
                            Référencement Adwords<br/> à Agen (47)<span className="text-bleu">/</span>Toulouse(31)
                            </h1>
                            <br/>
                            <h3 className="italic text-2xl text-white">Nous mettons à votre disposition notre expertise en référencement Adwords (Search Engine Advertising) pour créer et diffuser vos annonces publicitaires aux moments les plus opportuns avec un seul objectif : obtenir un retour sur investissement garanti.</h3>
                        </div>
                    </section>
                    <section className="w-full flex  flex-row justify-end" style={{fontWeight:'500', height: '35px'}}>
                        <section className="bg-white w-1/12 flex" style={{fontSize:'15px', textAlign:'center', color:'#3c3c3c', fontStyle:'italic'}}>
                        <div className="w-full" style={{padding:'5px'}}><ButtonMenu style={{fontSize:'15px', marginTop:'0'}} url="/referencement-toulouse" text="Retour" position="center" /></div>
                        </section>
                        <section className="w-1/3 flex" style={{backgroundColor:'#3c3c3c', borderBottomLeftRadius:'27px', fontSize:'15px'}}>
                            <div className="w-1/2" style={{padding:'5px', color:'white'}}><ButtonMenu url="/referencement-de-site-internet-47-31" text="Référencement Naturel" position="center" /></div>
                            <div className="w-1/2  text-bleu" style={{padding:'5px'}}><ButtonMenu url="/agence-adwords-47-31" text="Référencement Ads" position="center" /></div>
                        </section>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <br/>
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                            Linkweb, une agence dédiée à votre succès pour développer vos contacts, vos prospects, et vos ventes.
                        </h2>
                        <hr className="blue"></hr>
                    </section>
                    <section className="flex w-full mx-auto px-4 py-6 my-4">
                        <div className="w-1/2 mt-6">
                            <img src={imac} alt="Agence Adwords Toulouse"/>
                        </div>
                        <div className="w-1/2 max-w-3xl px-12 py-12" >
                            <h2 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in">
                                <span className="text-bleu">/</span>CAMPAGNES ADWORDS : SOYEZ <span className="text-bleu">ROI</span>
                            </h2>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold text-justify">Le référencement payant (SEA) peut-être source de retour sur investissement, encore faut-il bien l’utiliser.</span>
                            </h4>
                            <p data-aos='fade-bottom' className="text-justify">Le <strong>référencement Google Ads</strong> se différencie du <strong>référencement naturel</strong>. En effet, vous allez obtenir une <strong>acquisition de trafic</strong> via des <strong>liens commerciaux</strong> et non pas via les <strong>résultats naturels</strong> sur les pages de Google. Maximisez votre <strong>taux de conversion</strong> et <strong>optimiser votre coût par clic</strong> grâce à notre expertise en <strong>gestion de campagnes Ads</strong> menée à travers une stratégie d’enchères performante. <br /><br />
                            Le <strong>référencement payant</strong>, c’est l’acquisition de méthodes rentables pour mener ses <strong>campagnes Adwords</strong>, afin d’activer tous les leviers du <strong>retour sur investissement</strong> via la sponsorisation, mais aussi effectuer toutes les optimisations nécessaires, en termes de <strong>landing pages</strong> notamment, pour vous permettre de <strong>convertir</strong>.<br/><br/>
                            Le <strong>SEA</strong>, c’est faire le <strong>choix des mots-clés</strong> qualifiés sur lesquels investir. C’est aussi la possibilité d’effectuer un ciblage précis selon divers paramètres dès la création votre <strong>campagne Google Adwords</strong>.</p>
                        </div>
                    </section>
                    <section className="w-full h-screen flex flex-col justify-center items-center px-4 pt-12 pb-0 bg-cover text-justify" style={{backgroundColor:'#3c3c3c', color:'white'}}>
                        <div className="w-full">
                            <h2 data-aos='fade-right' className="text-center text-3xl century">
                            <span className="text-bleu">/</span>Mise en place de votre campagne Adwords
                            </h2>
                        </div>
                        <div className="w-full flex flex-row mx-auto px-4 py-6 my-4" style={{padding:'25px 200px 25px 200px', marginRight:'300px'}}>
                        <div className="w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>PLANIFICATION DES MOTS-CLÉS
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Nous lançons votre campagne de référencement à la date prévue ensemble et nous démarrons le travail de gestion de votre compte Adwords.</span>
                            </h4>
                            <p>Nous définissons votre <strong>stratégie de visibilité</strong> en déterminant les mots-clés sur lesquels il sera nécessaire de se positionner. Par ailleurs, nous paramètrerons vos campagnes pour vous permettre d’obtenir la stratégie la plus efficace possible.</p>
                        </div>
                        <div className="w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>CRÉATION DE LA CAMPAGNE
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Nous lançons votre campagne de référencement à la date prévue ensemble et nous démarrons le travail de gestion de votre compte.</span>
                            </h4>
                            <p>Nous effectuons une veille permanente sur le déroulé de votre <strong>campagne</strong> et vos dépenses pour ajuster les différents paramètres au besoin. Nos mots d’ordres : analyses, conseils et conversions.</p>
                        </div>
                        </div>
                        <div className="w-full flex flex-row mx-auto px-4 py-6 my-4" style={{padding:'25px 200px 25px 200px', marginRight:'300px'}}>
                        <div className="w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>PLAN DE PUBLICATION
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Nous élaborons notre plan de création d’annonces qui vise à déterminer les différents groupes d’annonces et leur fréquence de création.</span>
                            </h4>
                            <p>L’objectif : avoir un <strong>plan de campagne</strong> cohérent par rapport à vos <strong>objectifs de visibilité</strong> à court et moyen terme. La <strong>création de vos liens sponsorisés</strong> sera ajustée dans le temps pour être toujours <strong>visible</strong>, sur des <strong>mots-clés pertinents</strong>, où il faut et quand il faut.</p>
                        </div>
                        <div className="w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>PRÉVISION ET BUDGÉTISATION
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Nous analysons les stratégies web de vos concurrents afin de vous positionner devant eux et d’obtenir une visibilité cohérente et concurrentielle.</span>
                            </h4>
                            <p>Nous mettons à jour <strong>votre site internet</strong> pour garder une pertinence de l’information qui génèrera plus de transformation. <strong>Votre site internet</strong> doit répondre à la question de l’utilisateur tout en référençant vos différents produits ou services, et en leur apportant une <strong>visibilité</strong>.</p>
                        </div>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        Vous êtes un challenge, nous devenons une <span className="text-bleu">plus-value</span>.
                        </h2><br/>
                        <hr className="blue"></hr>
                    </section>
                    <section className="flex flex-1 home-step my-24 px-24">
                        <div className="w-1/3 one px-12">
                            <div className="flex flex-1">
                                <div className="blackBulle" data-aos="fade-up">1</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>JE DÉCOUVRE LE RÉFÉRENCEMENT ADS
                                </h3>
                                <div className="content text-justify pb-6" style={{textAlignLast:'center'}}>
                                Le <strong>SEA (Search Engine Advertising)</strong>, ou <strong>référencement Google Ads</strong>, est une science à part entière dans le référencement. Il apporte une <strong>visibilité à votre site internet</strong> de façon très rapide, peu importe le nombre de mots clés. Néanmoins, votre budget dit être maitrisé et vous permettre d’obtenir de l’acquisition client.
                                </div>
                                <Button url="/contact-agence-web-toulouse" text="Demander un devis" position="center" />

                                </section>
                            </div>
                            </div>
                            <div className="w-1/3 two px-12">
                            <div className="flex flex-1">
                                <div className="blackBulle" data-aos="fade-up">2</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>JE VEUX ÊTRE ACCOMPAGNÉ POUR DÉFINIR MES BESOINS
                                </h3>
                                <div className="content text-justify pb-6" style={{textAlignLast:'center'}}>
                                <strong>Coût au clic visé</strong>, définition du budget, augmentation de la qualité de ses <strong>annonces</strong> : se lancer dans une <strong>campagne Ads</strong> doit répondre à des objectifs clairs et précis. Nous vous accompagnons pour définir votre projet, des objectifs, aux annonces, en passant par les cibles.
                                </div>
                                <Button url="/contact-agence-web-toulouse" text="Prendre contact" position="center" />
                                </section>
                                </div>
                            </div>
                            <div className="w-1/3 three px-12">
                            <div className="flex flex-1">
                                <div className="blackBulle" data-aos="fade-up">3</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>JE FAIS LE CHOIX DE CONSULTANTS POUR MON SEA
                                </h3>
                                <div className="content text-justify pb-6" style={{textAlignLast:'center'}}>
                                En tant que <strong>professionnels du référencement</strong>, nous vous accompagnons afin de mener vos <strong>campagnes Google Adwords</strong> dans le but d’obtenir un <strong>retour sur investissement</strong>. Pour ce faire, nous paramétrons votre campagne sur-mesure pour atteindre vos objectifs.
                                </div>
                                <Button url="/contact-agence-web-toulouse" text="Prendre rendez-vous" position="center" />
                                </section>                                
                            </div>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        <span className="text-bleu">/</span>Notre expertise Google Adwords
                        </h2>
                        <hr className="blue"></hr>
                        
                    </section>
                    <section className="max-w-6xl w-full mx-auto px-4 pt-12 pb-0 my-2 mb-24">
                        <p className="text-xl font-bold century text-center">
                            Que vous soyez fleuriste, restaurateur, hôtelier, chauffagiste, photographe, que vous vendiez des vêtements ou bien des voitures d’occasions en ligne, nous élaborons votre <strong>stratégie de webmarketing</strong> pour stimuler votre chiffre d’affaires.</p>
                        <br/>
                        <div className="w-full flex text-center my-6">
                            <div className="w-1/3 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
        

                                <svg  id="Layer_3" width="80px" height="80px" viewBox="0 0 64 64" >
                                    <g><path d="m58 31h-25v-27c0-1.654-1.346-3-3-3h-18c-1.654 0-3 1.346-3 3v27h-3c-2.757 0-5 2.243-5 5v22c0 2.757 2.243 5 5 5h52c2.757 0 5-2.243 5-5v-22c0-2.757-2.243-5-5-5zm-46-28h18c.552 0 1 .449 1 1v51h-20v-51c0-.551.448-1 1-1zm49 55c0 1.654-1.346 3-3 3h-52c-1.654 0-3-1.346-3-3v-22c0-1.654 1.346-3 3-3h3v21.816c-1.161-.414-2-1.514-2-2.816v-2h-2v2c0 2.757 2.243 5 5 5h22c2.757 0 5-2.243 5-5v-2h-2v2c0 1.302-.839 2.402-2 2.816v-21.816h25c1.654 0 3 1.346 3 3z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m19 11h4c1.654 0 3-1.346 3-3s-1.346-3-3-3h-4c-1.654 0-3 1.346-3 3s1.346 3 3 3zm0-4h4c.552 0 1 .449 1 1s-.448 1-1 1h-4c-.552 0-1-.449-1-1s.448-1 1-1z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m15 25h12c.553 0 1-.448 1-1v-10c0-.552-.447-1-1-1h-12c-.553 0-1 .448-1 1v10c0 .552.447 1 1 1zm1-10h10v8h-10z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m21 27c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m14 27h2v2h-2z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m26 27h2v2h-2z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m14 33h2v2h-2z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m26 33h2v2h-2z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m19 37h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m25 37h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m13 37h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m19 41h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m25 41h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m13 41h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m19 45h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m25 45h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m13 45h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m19 49h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m25 49h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m13 49h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m58 39h-18c-.553 0-1 .447-1 1v18c0 .553.447 1 1 1h18c.553 0 1-.447 1-1v-18c0-.553-.447-1-1-1zm-1 18h-16v-16h16z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m46 55c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m52 49c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m43 45h2v2h-2z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m53 51h2v2h-2z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/>
                                    </g> 
                                </svg>
                                <p className="text-xl century pt-3">ATTIREZ L'ATTENTION DE TOUS VOS PROSPECTS EN ÉTANT N°1</p>
                            </div>
                            <div className="w-1/3 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="400">
                                <svg width="80px" height="80px" viewBox="-32 0 480 480.23349" >
                                    <g><path d="m208.117188             96c-97.203126 0-176 78.796875-176 176s78.796874 176 176 176c97.203124 0 176-78.796875 176-176-.109376-97.15625-78.84375-175.890625-176-176zm0 336c-88.367188 0-160-71.632812-160-160s71.632812-160 160-160c88.363281 0 160 71.632812 160 160-.101563 88.324219-71.675782 159.898438-160 160zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m371.085938 142.984375 12.367187-12.367187c3.121094-3.125 3.121094-8.1875 0-11.3125l-22.640625-22.640626c-3.125-3.125-8.1875-3.125-11.3125 0l-12.367188 12.367188c-30.246093-24.054688-66.625-39.164062-105.015624-43.605469v-17.425781h8c8.835937 0 16-7.164062 16-16v-16c0-8.835938-7.164063-16-16-16h-64c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h8v17.425781c-38.390626 4.441407-74.769532 19.550781-105.015626 43.605469l-12.367187-12.367188c-3.125-3.125-8.191406-3.125-11.3125 0l-22.640625 22.640626c-3.125 3.125-3.125 8.1875 0 11.3125l12.367188 12.367187c-67.546876 85.167969-58.121094 207.984375 21.628906 281.851563 79.75 73.863281 202.929687 73.863281 282.679687 0 79.75-73.867188 89.175781-196.683594 21.628907-281.851563zm-15.929688-29.382813 11.359375 11.359376-5.832031 5.832031c-3.625-3.921875-7.402344-7.695313-11.328125-11.328125zm-179.039062-97.601562h64v16h-64zm24 32h16v16.199219c-2.65625-.09375-5.320313-.199219-8-.199219-2.679688 0-5.34375.105469-8 .199219zm-150.402344 76.960938 11.363281-11.359376 5.832031 5.832032c-3.921875 3.621094-7.699218 7.394531-11.328125 11.328125zm158.402344 339.039062c-106.039063 0-192-85.960938-192-192s85.960937-192 192-192c106.039062 0 192 85.960938 192 192-.125 105.988281-86.011719 191.875-192 192zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m232.117188 272c0-13.253906-10.746094-24-24-24-13.253907 0-24 10.746094-24 24s10.746093 24 24 24c3.5625-.015625 7.078124-.835938 10.28125-2.398438l48.0625 48.0625 11.3125-11.3125-48.058594-48.070312c1.566406-3.203125 2.386718-6.71875 2.402344-10.28125zm-32 0c0-4.417969 3.582031-8 8-8 4.417968 0 8 3.582031 8 8s-3.582032 8-8 8c-4.417969 0-8-3.582031-8-8zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m242.246094 148.601562-4.257813 15.398438c31.285157 8.679688 57.269531 30.496094 71.230469 59.804688 13.964844 29.308593 14.539062 63.230468 1.570312 92.996093l14.664063 6.398438c7.066406-16.140625 10.699219-33.578125 10.664063-51.199219-.09375-57.523438-38.460938-107.957031-93.871094-123.398438zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m225.171875 145.128906c-5.652344-.753906-11.351563-1.128906-17.054687-1.128906v16c4.996093 0 9.988281.328125 14.945312.984375zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/>
                                    </g> 
                                </svg>
                                <p className="text-xl century pt-3">MAXIMISER VOTRE PRÉSENCE EN LIGNE OÙ IL FAUT ET QUAND IL FAUT</p>
                            </div>
                            <div className="w-1/3 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="400">
                                <svg width="80px" height="80px" viewBox="-32 0 480 480.23349" >
                                    <g><path d="m208.117188             96c-97.203126 0-176 78.796875-176 176s78.796874 176 176 176c97.203124 0 176-78.796875 176-176-.109376-97.15625-78.84375-175.890625-176-176zm0 336c-88.367188 0-160-71.632812-160-160s71.632812-160 160-160c88.363281 0 160 71.632812 160 160-.101563 88.324219-71.675782 159.898438-160 160zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m371.085938 142.984375 12.367187-12.367187c3.121094-3.125 3.121094-8.1875 0-11.3125l-22.640625-22.640626c-3.125-3.125-8.1875-3.125-11.3125 0l-12.367188 12.367188c-30.246093-24.054688-66.625-39.164062-105.015624-43.605469v-17.425781h8c8.835937 0 16-7.164062 16-16v-16c0-8.835938-7.164063-16-16-16h-64c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h8v17.425781c-38.390626 4.441407-74.769532 19.550781-105.015626 43.605469l-12.367187-12.367188c-3.125-3.125-8.191406-3.125-11.3125 0l-22.640625 22.640626c-3.125 3.125-3.125 8.1875 0 11.3125l12.367188 12.367187c-67.546876 85.167969-58.121094 207.984375 21.628906 281.851563 79.75 73.863281 202.929687 73.863281 282.679687 0 79.75-73.867188 89.175781-196.683594 21.628907-281.851563zm-15.929688-29.382813 11.359375 11.359376-5.832031 5.832031c-3.625-3.921875-7.402344-7.695313-11.328125-11.328125zm-179.039062-97.601562h64v16h-64zm24 32h16v16.199219c-2.65625-.09375-5.320313-.199219-8-.199219-2.679688 0-5.34375.105469-8 .199219zm-150.402344 76.960938 11.363281-11.359376 5.832031 5.832032c-3.921875 3.621094-7.699218 7.394531-11.328125 11.328125zm158.402344 339.039062c-106.039063 0-192-85.960938-192-192s85.960937-192 192-192c106.039062 0 192 85.960938 192 192-.125 105.988281-86.011719 191.875-192 192zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m232.117188 272c0-13.253906-10.746094-24-24-24-13.253907 0-24 10.746094-24 24s10.746093 24 24 24c3.5625-.015625 7.078124-.835938 10.28125-2.398438l48.0625 48.0625 11.3125-11.3125-48.058594-48.070312c1.566406-3.203125 2.386718-6.71875 2.402344-10.28125zm-32 0c0-4.417969 3.582031-8 8-8 4.417968 0 8 3.582031 8 8s-3.582032 8-8 8c-4.417969 0-8-3.582031-8-8zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m242.246094 148.601562-4.257813 15.398438c31.285157 8.679688 57.269531 30.496094 71.230469 59.804688 13.964844 29.308593 14.539062 63.230468 1.570312 92.996093l14.664063 6.398438c7.066406-16.140625 10.699219-33.578125 10.664063-51.199219-.09375-57.523438-38.460938-107.957031-93.871094-123.398438zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m225.171875 145.128906c-5.652344-.753906-11.351563-1.128906-17.054687-1.128906v16c4.996093 0 9.988281.328125 14.945312.984375zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/>
                                    </g> 
                                </svg>
                                <p className="text-xl century pt-3">ROI : AUGMENTER VOS PERFORMANCES ET VOS VENTES</p>
                            </div>

                        </div>
                    </section>
                    
                    
                    <section className=" w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 bg-cover mb-24" style={{background:'#37c5ee url( '+ bgDev +')', backgroundSize:'cover', backgroundBlendMode: 'overlay'}}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h2 data-aos='fade-right' className="text-center text-white text-4xl century">
                            <span className="text-bleu">/</span>Vous souhaitez améliorer votre visibilité dans les résultats de recherche ?<br/> Saisissez votre adresse mail.
                            </h2>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                            <RappelForm />
                        </div>

                        <div className="max-w-6xl mx-auto flex text-center my-12">
                            <div className="w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                            <svg x="0px" y="0px" viewBox="0 0 511.998 511.998"  width="80px" height="80px"><g><g>
                                    <g>
                                        <path d="M501.103,464.947h-16.224V326.868c0-5.522-4.477-9.997-9.997-9.997s-9.998,4.476-9.998,9.997v52.101H209.947V223.033    c0-5.522-4.477-9.998-9.998-9.998s-9.997,4.476-9.997,9.998v241.914H46.988V198.913c3.978,0.846,8.098,1.3,12.324,1.3    c20.476,0,38.557-10.452,49.188-26.301c10.63,15.85,28.711,26.301,49.187,26.301c20.476,0,38.557-10.452,49.188-26.301    c10.63,15.85,28.712,26.301,49.188,26.301s38.557-10.452,49.188-26.301c10.63,15.85,28.712,26.301,49.188,26.301    s38.556-10.452,49.187-26.301c10.63,15.85,28.712,26.301,49.188,26.301c4.136,0,8.172-0.43,12.07-1.241v63.358    c0,5.522,4.477,9.997,9.998,9.997s9.997-4.476,9.997-9.997v-71.595c16.302-10.552,27.12-28.885,27.12-49.708    c0-2.049-0.619-3.953-1.677-5.54L462.397,32.824c-1.644-3.519-5.176-5.769-9.06-5.769H59.185c-3.865,0-7.384,2.228-9.037,5.723    L0.96,136.752c-0.917,1.939-1.173,4.086-0.787,6.13c0.619,19.945,11.143,37.429,26.819,47.689v274.375H10.768    c-5.521,0-9.997,4.476-9.997,9.998c0,5.522,4.477,9.997,9.997,9.997H36.99h437.891h26.222c5.521,0,9.998-4.476,9.998-9.997    C511.102,469.423,506.625,464.947,501.103,464.947z M452.814,180.218c-18.156,0-33.463-12.41-37.894-29.193h75.787    C486.276,167.807,470.97,180.218,452.814,180.218z M413.843,47.051h33.129l39.203,83.979h-72.332V47.051z M354.439,180.219    c-18.156,0-33.462-12.411-37.894-29.193h75.786C387.899,167.808,372.593,180.219,354.439,180.219z M315.393,47.051h78.455v83.979    h-78.455V47.051z M256.063,180.219c-18.155,0-33.462-12.411-37.894-29.193h75.787    C289.525,167.808,274.217,180.219,256.063,180.219z M216.946,47.051h78.454v83.979h-0.001h-78.453V47.051z M157.686,180.219    c-18.154,0-33.461-12.411-37.893-29.193h75.786C191.148,167.808,175.842,180.219,157.686,180.219z M118.497,47.051h78.453v83.979    h-78.453V47.051z M65.515,47.051h32.987v83.979H25.786L65.515,47.051z M21.418,151.026h75.787    c-4.432,16.782-19.739,29.193-37.894,29.193C41.156,180.219,25.85,167.808,21.418,151.026z M464.884,464.947H209.947v-65.984    h254.937V464.947z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                    </g>
                                </g><g>
                                    <g>
                                        <path d="M165.138,319.803c-1.861-1.86-4.429-2.929-7.068-2.929c-2.629,0-5.209,1.07-7.067,2.929c-1.86,1.86-2.93,4.429-2.93,7.068    c0,2.629,1.07,5.209,2.93,7.068c1.859,1.859,4.438,2.929,7.067,2.929c2.63,0,5.209-1.07,7.068-2.929    c1.859-1.86,2.929-4.439,2.929-7.068C168.067,324.232,166.998,321.663,165.138,319.803z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                    </g>
                                </g><g>
                                    <g>
                                        <path d="M346.256,241.724c-3.905-3.904-10.233-3.904-14.139,0l-67.722,67.722c-3.904,3.904-3.904,10.234,0,14.14    c1.953,1.953,4.511,2.928,7.069,2.928c2.558,0,5.117-0.976,7.069-2.928l67.722-67.722    C350.161,251.959,350.161,245.628,346.256,241.724z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                    </g>
                                </g><g>
                                    <g>
                                        <path d="M255.205,332.77c-1.859-1.859-4.438-2.919-7.067-2.919c-2.63,0-5.209,1.06-7.068,2.919    c-1.86,1.87-2.929,4.439-2.929,7.068c0,2.639,1.069,5.209,2.929,7.068c1.86,1.87,4.438,2.929,7.068,2.929    c2.629,0,5.209-1.06,7.067-2.929c1.86-1.859,2.93-4.429,2.93-7.068C258.136,337.209,257.066,334.629,255.205,332.77z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                    </g>
                                </g><g>
                                    <g>
                                        <path d="M429.464,232.659c-3.905-3.904-10.233-3.904-14.139,0l-68.248,68.248c-3.904,3.904-3.904,10.234,0,14.139    c1.954,1.952,4.511,2.928,7.07,2.928c2.559,0,5.117-0.976,7.069-2.928l68.248-68.248    C433.368,242.894,433.368,236.564,429.464,232.659z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                    </g>
                                </g><g>
                                    <g>
                                        <path d="M481.949,287.251c-1.859-1.859-4.438-2.929-7.067-2.929s-5.209,1.07-7.068,2.929c-1.86,1.86-2.929,4.429-2.929,7.068    c0,2.629,1.069,5.209,2.929,7.068s4.439,2.929,7.068,2.929s5.209-1.07,7.067-2.929c1.859-1.859,2.93-4.439,2.93-7.068    C484.879,291.69,483.81,289.111,481.949,287.251z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                    </g>
                                </g></g> </svg>
                                <p className="text-xl text-white century pt-3">CRÉATION DE CAMPAGNE ADWORDS</p>
                            </div>
                            <div className="w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="400">
                                <svg  x="0px" y="0px" viewBox="0 0 512 512"  width="80px" height="80px"><g><g>
                                        <g>
                                            <path d="M355.81,402.93c-1.86-1.86-4.44-2.93-7.08-2.93c-2.63,0-5.21,1.069-7.06,2.93c-1.87,1.86-2.93,4.43-2.93,7.07    c0,2.63,1.06,5.21,2.93,7.069c1.86,1.86,4.43,2.931,7.06,2.931c2.64,0,5.21-1.07,7.08-2.931c1.86-1.859,2.93-4.439,2.93-7.069    S357.67,404.79,355.81,402.93z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                        </g>
                                        </g><g>
                                            <g>
                                                <path d="M510.009,204.012C508.121,201.487,505.153,200,502,200h-40.785V10c0-5.522-4.477-10-10-10h-184c-5.523,0-10,4.478-10,10    v77H154.088c-5.523,0-10,4.478-10,10v103H107c-3.153,0-6.121,1.487-8.009,4.012c-1.888,2.525-2.475,5.793-1.583,8.817l58.987,200    c1.254,4.252,5.158,7.171,9.591,7.171H304.5c5.523,0,10-4.478,10-10c0-5.522-4.477-10-10-10H173.464l-53.088-180h33.713H334.08    h117.136h37.409l-53.088,180H399c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h44.013c4.433,0,8.337-2.919,9.591-7.171    l58.987-200C512.483,209.805,511.897,206.537,510.009,204.012z M324.079,200H164.088v-93h103.127h56.864V200z M441.216,200H344.08    V97c0-5.522-4.477-10-10-10h-56.864V20h164V200z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                            </g>
                                        </g><g>
                                            <g>
                                                <path d="M454.101,438H145.552L62.68,157.017c-1.254-4.252-5.158-7.171-9.591-7.171H10c-5.523,0-10,4.478-10,10    c0,5.522,4.477,10,10,10h35.612l82.873,280.983c1.254,4.252,5.158,7.171,9.591,7.171h49.616c-2.647,5.094-4.153,10.873-4.153,17    c0,20.402,16.598,37,37,37c20.402,0,37-16.598,37-37c0-6.127-1.506-11.906-4.153-17h81.856c-2.647,5.094-4.153,10.873-4.153,17    c0,20.402,16.598,37,37,37c20.402,0,37-16.598,37-37c0-6.127-1.506-11.906-4.153-17h53.166c5.523,0,10-4.478,10-10    C464.102,442.478,459.624,438,454.101,438z M220.539,492c-9.374,0-17-7.626-17-17c0-9.374,7.626-17,17-17c9.374,0,17,7.626,17,17    C237.539,484.374,229.913,492,220.539,492z M368.088,492c-9.374,0-17-7.626-17-17c0-9.374,7.626-17,17-17c9.374,0,17,7.626,17,17    C385.088,484.374,377.462,492,368.088,492z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                            </g>
                                        </g><g>
                                            <g>
                                                <path d="M251.16,251.93c-1.86-1.861-4.44-2.93-7.08-2.93c-2.63,0-5.21,1.07-7.07,2.93s-2.92,4.44-2.92,7.07s1.06,5.21,2.92,7.069    c1.87,1.861,4.44,2.931,7.07,2.931c2.64,0,5.21-1.07,7.08-2.931c1.86-1.859,2.92-4.439,2.92-7.069S253.02,253.79,251.16,251.93z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                            </g>
                                        </g><g>
                                            <g>
                                                <path d="M202.021,249h-72.606c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h72.606c5.523,0,10-4.478,10-10    C212.021,253.478,207.544,249,202.021,249z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                            </g>
                                        </g></g>
                                    </svg>
                                <p className="text-xl century text-white pt-3">PLANIFICATION DES MOTS-CLÉS</p>
                            </div>
                            <div className="w-1/3 px-12 flex flex-col items-center justify-center"  data-aos='zoom-in' data-aos-delay="600">
                                <svg  x="0px" y="0px" viewBox="0 0 512 512"  width="80px" height="80px"><g><g>
                                    <g>
                                        <path d="M510.362,215.571l-81.99-125.025c-1.849-2.818-4.991-4.516-8.361-4.516H92.378c-3.363,0-6.5,1.69-8.35,4.499    L1.906,215.181c-0.391,0.539-0.73,1.121-1.013,1.743c-1.621,3.574-1.001,7.765,1.585,10.717l41.625,47.527    c3.639,4.155,9.955,4.573,14.109,0.935c4.154-3.639,4.572-9.956,0.934-14.109l-27.097-30.941h134.501L234.137,461.8    l-76.375-87.205c-3.638-4.155-9.956-4.573-14.109-0.935c-4.154,3.639-4.572,9.956-0.934,14.109l105.79,120.791    c1.898,2.168,4.641,3.412,7.522,3.412c2.882,0,5.623-1.244,7.521-3.413l112.63-128.632c3.639-4.155,3.22-10.472-0.936-14.109    c-4.156-3.639-10.473-3.22-14.109,0.936l-83.21,95.033l67.584-230.735h134.445l-62.183,71.02    c-3.639,4.155-3.22,10.472,0.936,14.109c1.897,1.662,4.245,2.477,6.583,2.477c2.782,0,5.55-1.155,7.526-3.413l76.706-87.605    C512.482,224.262,512.825,219.326,510.362,215.571z M28.573,211.055l63.785-96.821l63.495,96.821H28.573z M110.892,106.029    h126.623l-63.311,96.541L110.892,106.029z M256.03,114.263l63.475,96.792H192.555L256.03,114.263z M256.03,465.403l-68.642-234.35    h137.284L256.03,465.403z M338.02,202.821l-63.475-96.792h126.952L338.02,202.821z M356.535,211.055l63.476-96.792l63.474,96.792    H356.535z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                    </g>
                                    </g><g>
                                    <g>
                                        <path d="M157.189,327.017c-25.793,0-46.778-20.985-46.778-46.778c0-5.522-4.477-9.999-9.999-9.999s-9.999,4.477-9.999,9.999    c0,25.793-20.985,46.778-46.778,46.778c-5.521,0-9.999,4.477-9.999,9.999c0,5.522,4.478,9.999,9.999,9.999    c25.793,0,46.778,20.985,46.778,46.778c0,5.522,4.478,9.999,9.999,9.999s9.999-4.477,9.999-9.999    c0-25.793,20.985-46.778,46.778-46.778c5.522,0,9.999-4.477,9.999-9.999C167.188,331.494,162.711,327.017,157.189,327.017z     M100.412,358.677c-5.451-8.782-12.879-16.209-21.66-21.661c8.781-5.451,16.208-12.878,21.66-21.661    c5.451,8.782,12.879,16.209,21.66,21.661C113.291,342.468,105.864,349.894,100.412,358.677z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                    </g>
                                    </g><g>
                                    <g>
                                        <path d="M502.001,40.023c-16.54,0-29.997-13.457-29.997-29.997c0-5.522-4.478-9.999-9.999-9.999s-9.999,4.477-9.999,9.999    c0,16.54-13.457,29.997-29.997,29.997c-5.521,0-9.999,4.477-9.999,9.999s4.478,9.999,9.999,9.999    c16.54,0,29.997,13.457,29.997,29.997c0,5.522,4.478,9.999,9.999,9.999s9.999-4.477,9.999-9.999    c0-16.54,13.457-29.997,29.997-29.997c5.521,0,9.999-4.477,9.999-9.999S507.522,40.023,502.001,40.023z M462.005,60.052    c-2.853-3.798-6.232-7.177-10.03-10.03c3.798-2.853,7.177-6.232,10.03-10.03c2.853,3.798,6.232,7.177,10.03,10.03    C468.237,52.874,464.857,56.254,462.005,60.052z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                    </g>
                                    </g><g>
                                    <g>
                                        <path d="M402.783,335.371c-1.859-1.87-4.439-2.93-7.068-2.93c-2.631,0-5.199,1.06-7.069,2.93c-1.86,1.86-2.93,4.44-2.93,7.069    s1.069,5.209,2.93,7.069c1.86,1.86,4.438,2.93,7.069,2.93c2.63,0,5.209-1.07,7.068-2.93c1.86-1.86,2.931-4.44,2.931-7.069    S404.644,337.231,402.783,335.371z" data-original="#000000"  data-old_color="#000000" fill="#ffffff"/>
                                    </g>
                                    </g></g> 
                                    </svg>
                                <p className="text-xl century text-white pt-3">BUDGÉTISATION</p>
                            </div>
                        </div>
                    </section>
                    

                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>LINKWEB VOUS ACCOMPAGNE
                        </h2>
                        <hr className="blue"></hr>
                        <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Les référenceurs et consultants de l’agence de référencement Linkweb vous proposent un suivi de qualité pour un retour sur investissement garanti. Nous vous apportons nos connaissances pour vous aider à accroitre votre clientèle.</h4>
                    </section>
                    <section  className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                        <div className="w-3/4 py-0 flex justify-end">
                            <Accordion>
                                <div className="w-full" label="CRÉATION DE VOS ANNONCES ET EXTENSIONS D'ANNONCES SELON VOS OBJECTIFS DE CONVERSION">
                                <p>Nous nous occupons de la <strong>création de vos annonces</strong> en vue de mettre en avant vos produits ou services. Vous êtes à la recherche de <strong>trafic</strong>, <strong>contacts</strong> ou <strong>ventes</strong> ? Nous définissons les paramètres de  campagn sur-mesure pour faciliter et maximiser les interactions avec votre <strong>audience ciblée</strong>.</p>
                                </div>
                                <div label="OPTIMISATION DE VOS CAMPAGNES GOOGLE ADWORDS AJUSTÉES SELON VOS CIBLES">
                                <p><strong>Google Ads</strong> est une plateforme qui vous permet de cibler très précisément votre audience. Nous mettons en place des <strong>campagnes</strong> ajustées en fonction de plusieurs critères : âge, secteur géographique, etc. Par ailleurs, les campagnes, que nous mettons en place, s’adaptent aux terminaux, pour vous permettre de maximiser l’efficacité de votre présence en ligne.</p>
                                </div>
                                <div label="CRÉATION DE VOTRE CAMPAGNE ADS COHÉRENTE AVEC LE CONTENU DE VOTRE SITE INTERNET">
                                <p>Chaque <strong>annonce</strong> créée nécessite la création d’une page adaptée pour obtenir des conversions sur <strong>votre site internet</strong>. Nous nous chargeons de la <strong>création d’une page optimisée</strong> pour répondre aux besoins des utilisateurs : contenu synthétique, <strong>call-to-action</strong>, mise en place d’un circuit de <strong>remplissage des objectifs</strong> optimisé, etc. Ces outils sont adaptés en fonction de votre objectif : appel, demande de devis, contacts, vente de produits (dans le cas d’un <strong>site e-commerce</strong>), etc.</p>
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
                        
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Vous pourriez également être intéressé
                        </h3>
                        <hr className="blue"></hr>
                        <br/>
                        <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">
                            Vous souhaitez en savoir plus sur nos prestations d’agence web à Agen (47) et Toulouse (31) ? Découvrez nos autres prestations, ainsi que nos différentes réalisations.</h4>
                        <br/>
                        <section className="flex flex-row">
                            <div className="w-1/3 bg-bleu" style={{color:'white', borderRadius:'5px', padding:'10px', marginRight:'20px'}}>
                                <Link to="/creation-site-internet-toulouse">Création site internet</Link>
                            </div>
                            <div className="w-1/3 bg-bleu" style={{color:'white', borderRadius:'5px', padding:'10px', marginRight:'20px'}}>
                                <Link to="/agence-web-toulouse">Agence Web</Link>
                            </div>
                            <div className="w-1/3 bg-bleu" style={{color:'white', borderRadius:'5px', padding:'10px', marginRight:'20px'}}>
                                <Link to="/agence-de-communication-agen-47-toulouse-31">Nos réalisations</Link>
                            </div>
                        </section>
                        <br/>
                    </section>
                </PageTransition>
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
          modified(locale: "fr", formatString: "dd MM YYYY")
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




