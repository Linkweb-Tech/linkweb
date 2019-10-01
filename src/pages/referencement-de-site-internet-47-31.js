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


import Bg from "../images/background-referencement-naturel.jpg";
import imac from "../images/referencement-google.jpg";
import bgDev from '../images/bg-dev.jpg';


class ReferencementNaturel extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Référencement Agen Toulouse - Référencement Naturel - Linkweb"
                    description="Définition de votre stratégie de référencement naturel (SEO) - Étude de contexte - Choix des mots-clés - Création de contenus optimisés et originaux."
                    keywords={[`Référencement Naturel à Agen`, `Référencement Naturel à Toulouse`, `Référencement SEO Toulouse`, `Référencement SEO Agen`]}
                    url="https://linkweb.fr/referencement-de-site-internet-47-31"
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
                    <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-cover flex flex-row justify-center items-center" style={{backgroundImage:'url(' + Bg +')', backgroundColor:'rgba(0,0,0,0.2)', backgroundBlendMode:'overlay', backgroundPosition:'center', height:'650px'}}>
                        <div className="w-1/3 max-w-5xl mx-auto" style={{marginLeft:'20px', marginRight:'20px', padding:'4%'}} >
                            <RoundButton url="/contact-agence-web-toulouse" text="Je veux améliorer la visibilité de mon site internet" />
                        </div>
                        <div className="w-2/3" style={{padding:'2%'}}>
                            <h1 data-aos="fade-up" data-aos-delay="500" className="century text-7xl text-center text-white">
                            Agence de référencement<br/> à Agen (47)<span className="text-bleu">/</span>Toulouse(31)
                            </h1>
                            <br/>
                            <h3 className="italic text-2xl text-white">Les référenceurs de l’agence de référencement Linkweb, en charge de la gestion de votre référencement naturel, réalisent un plan de communication digital afin d’être toujours en première page de Google et des moteurs de recherche.</h3>
                        </div>
                    </section>
                    <section className="w-full flex  flex-row justify-end" style={{fontWeight:'500', height: '35px'}}>
                        <section className="bg-white w-1/12 flex" style={{fontSize:'15px', textAlign:'center', color:'#3c3c3c', fontStyle:'italic'}}>
                        <div className="w-full" style={{padding:'5px'}}><ButtonMenu style={{fontSize:'15px', marginTop:'0'}} url="/referencement-toulouse" text="Retour" position="center" /></div>
                        </section>
                        <section className="w-1/3 flex" style={{backgroundColor:'#3c3c3c', borderBottomLeftRadius:'27px', fontSize:'15px'}}>
                            <div className="w-1/2 text-bleu" style={{padding:'5px'}}><ButtonMenu url="/referencement-de-site-internet-47-31" text="Référencement Naturel" position="center" /></div>
                            <div className="w-1/2" style={{padding:'5px', color:'white'}}><ButtonMenu url="/agence-adwords-47-31" text="Référencement Ads" position="center" /></div>
                        </section>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <br/>
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                        Avec Linkweb, votre agence de communication digitale à Agen et Toulouse, vous ne cherchez plus vos clients, ce sont eux qui vous trouvent grâce à votre site web.
                        </h2>
                        <hr className="blue"></hr>
                    </section>
                    <section className="flex w-full mx-auto px-4 py-6 my-4" style={{marginLeft:'50px'}}>
                        <div className="w-1/2 px-12 py-12" style={{padding:'3% 9%'}} >
                            <h2 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in">
                                <span className="text-bleu">/</span>AGENCE DE RÉFÉRENCEMENT : OPTEZ POUR LE NATUREL AVEC NOTRE AGENCE À AGEN
                            </h2>
                            <h4 className="century text-lg tracking-wider pb-6 text-justify" data-aos='fade-left'>
                                <span className="font-bold">Être visible sur les moteurs de recherche demande un travail de référencement précis pour améliorer son positionnement.</span>
                            </h4>
                            <p data-aos='fade-bottom' className="text-justify">Le <strong>référencement naturel SEO</strong> de votre <strong>site internet</strong>, qui se distingue du <strong><Link className="hover:text-bleu" to="/agence-adwords-47-31">référencement payant Google Adwords</Link></strong> est travaillé de manière régulière et constante pour obtenir le meilleur classement, et cela toujours en prenant en compte les objectifs de développement de votre entreprise.
                            <br/><br/>
                            Nous maintenons une <strong>mise à jour régulière des pages web de votre site internet</strong>, de la conception technique à la gestion de votre <strong>référencement naturel</strong> avec les <strong>optimisations de balises</strong> et autres <strong>techniques de référencement</strong> (<strong>maillage interne</strong>, <strong>liens entrants</strong>, <strong>balise meta</strong>, contenu de qualité) qui vous permettront de vous <strong>positionner dans les premiers résultats naturels des pages de résultats des moteurs de recherche</strong> pour un mot clé donné en vue d’une <strong>acquisition de trafic</strong> et de maximiser votre <strong>taux de conversion</strong>.</p>
                        </div>
                        <div className="w-1/2" style={{padding:'5% 0%'}}>
                            <img src={imac} alt="Référencement Naturel Agen" />
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        <span className="text-bleu">/</span>NOS SOLUTIONS DE RÉFÉRENCEMENT À AGEN (47) ET TOULOUSE (31)
                        </h2>
                        <hr className="blue"></hr>
                        
                    </section>
                    <section className="max-w-6xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <p className="text-xl font-bold century text-center"><strong>Votre site internet</strong> est le reflet de votre entreprise en ligne. Notre <strong>agence SEO de référencement web</strong> travaille dans le but de faire progresser la visibilité de votre société dans les <strong>résultats de recherche</strong> et votre notoriété à travers une création au design professionnel, moderne et épuré.</p>
                        <br/>
                        <div className="w-full flex text-center my-6">
                            <div className="w-1/4 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
        

                                <svg  id="Layer_3" width="80px" height="80px" viewBox="0 0 64 64" >
                                    <g><path d="m58 31h-25v-27c0-1.654-1.346-3-3-3h-18c-1.654 0-3 1.346-3 3v27h-3c-2.757 0-5 2.243-5 5v22c0 2.757 2.243 5 5 5h52c2.757 0 5-2.243 5-5v-22c0-2.757-2.243-5-5-5zm-46-28h18c.552 0 1 .449 1 1v51h-20v-51c0-.551.448-1 1-1zm49 55c0 1.654-1.346 3-3 3h-52c-1.654 0-3-1.346-3-3v-22c0-1.654 1.346-3 3-3h3v21.816c-1.161-.414-2-1.514-2-2.816v-2h-2v2c0 2.757 2.243 5 5 5h22c2.757 0 5-2.243 5-5v-2h-2v2c0 1.302-.839 2.402-2 2.816v-21.816h25c1.654 0 3 1.346 3 3z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m19 11h4c1.654 0 3-1.346 3-3s-1.346-3-3-3h-4c-1.654 0-3 1.346-3 3s1.346 3 3 3zm0-4h4c.552 0 1 .449 1 1s-.448 1-1 1h-4c-.552 0-1-.449-1-1s.448-1 1-1z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m15 25h12c.553 0 1-.448 1-1v-10c0-.552-.447-1-1-1h-12c-.553 0-1 .448-1 1v10c0 .552.447 1 1 1zm1-10h10v8h-10z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m21 27c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m14 27h2v2h-2z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m26 27h2v2h-2z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m14 33h2v2h-2z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m26 33h2v2h-2z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m19 37h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m25 37h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m13 37h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m19 41h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m25 41h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m13 41h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m19 45h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m25 45h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m13 45h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m19 49h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m25 49h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m13 49h4v2h-4z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m58 39h-18c-.553 0-1 .447-1 1v18c0 .553.447 1 1 1h18c.553 0 1-.447 1-1v-18c0-.553-.447-1-1-1zm-1 18h-16v-16h16z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m46 55c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m52 49c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m43 45h2v2h-2z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m53 51h2v2h-2z" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/>
                                    </g> 
                                </svg>
                                <p className="text-xl century pt-3">DÉFINITION STRATÉGIQUE</p>
                            </div>
                            <div className="w-1/4 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="400">
                                <svg width="80px" height="80px" viewBox="-32 0 480 480.23349" >
                                    <g><path d="m208.117188             96c-97.203126 0-176 78.796875-176 176s78.796874 176 176 176c97.203124 0 176-78.796875 176-176-.109376-97.15625-78.84375-175.890625-176-176zm0 336c-88.367188 0-160-71.632812-160-160s71.632812-160 160-160c88.363281 0 160 71.632812 160 160-.101563 88.324219-71.675782 159.898438-160 160zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m371.085938 142.984375 12.367187-12.367187c3.121094-3.125 3.121094-8.1875 0-11.3125l-22.640625-22.640626c-3.125-3.125-8.1875-3.125-11.3125 0l-12.367188 12.367188c-30.246093-24.054688-66.625-39.164062-105.015624-43.605469v-17.425781h8c8.835937 0 16-7.164062 16-16v-16c0-8.835938-7.164063-16-16-16h-64c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h8v17.425781c-38.390626 4.441407-74.769532 19.550781-105.015626 43.605469l-12.367187-12.367188c-3.125-3.125-8.191406-3.125-11.3125 0l-22.640625 22.640626c-3.125 3.125-3.125 8.1875 0 11.3125l12.367188 12.367187c-67.546876 85.167969-58.121094 207.984375 21.628906 281.851563 79.75 73.863281 202.929687 73.863281 282.679687 0 79.75-73.867188 89.175781-196.683594 21.628907-281.851563zm-15.929688-29.382813 11.359375 11.359376-5.832031 5.832031c-3.625-3.921875-7.402344-7.695313-11.328125-11.328125zm-179.039062-97.601562h64v16h-64zm24 32h16v16.199219c-2.65625-.09375-5.320313-.199219-8-.199219-2.679688 0-5.34375.105469-8 .199219zm-150.402344 76.960938 11.363281-11.359376 5.832031 5.832032c-3.921875 3.621094-7.699218 7.394531-11.328125 11.328125zm158.402344 339.039062c-106.039063 0-192-85.960938-192-192s85.960937-192 192-192c106.039062 0 192 85.960938 192 192-.125 105.988281-86.011719 191.875-192 192zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m232.117188 272c0-13.253906-10.746094-24-24-24-13.253907 0-24 10.746094-24 24s10.746093 24 24 24c3.5625-.015625 7.078124-.835938 10.28125-2.398438l48.0625 48.0625 11.3125-11.3125-48.058594-48.070312c1.566406-3.203125 2.386718-6.71875 2.402344-10.28125zm-32 0c0-4.417969 3.582031-8 8-8 4.417968 0 8 3.582031 8 8s-3.582032 8-8 8c-4.417969 0-8-3.582031-8-8zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m242.246094 148.601562-4.257813 15.398438c31.285157 8.679688 57.269531 30.496094 71.230469 59.804688 13.964844 29.308593 14.539062 63.230468 1.570312 92.996093l14.664063 6.398438c7.066406-16.140625 10.699219-33.578125 10.664063-51.199219-.09375-57.523438-38.460938-107.957031-93.871094-123.398438zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m225.171875 145.128906c-5.652344-.753906-11.351563-1.128906-17.054687-1.128906v16c4.996093 0 9.988281.328125 14.945312.984375zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/>
                                    </g> 
                                </svg>
                                <p className="text-xl century pt-3">CHOIX DES MOTS-CLÉS</p>
                            </div>
                            <div className="w-1/4 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="400">
                                <svg width="80px" height="80px" viewBox="-32 0 480 480.23349" >
                                    <g><path d="m208.117188             96c-97.203126 0-176 78.796875-176 176s78.796874 176 176 176c97.203124 0 176-78.796875 176-176-.109376-97.15625-78.84375-175.890625-176-176zm0 336c-88.367188 0-160-71.632812-160-160s71.632812-160 160-160c88.363281 0 160 71.632812 160 160-.101563 88.324219-71.675782 159.898438-160 160zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m371.085938 142.984375 12.367187-12.367187c3.121094-3.125 3.121094-8.1875 0-11.3125l-22.640625-22.640626c-3.125-3.125-8.1875-3.125-11.3125 0l-12.367188 12.367188c-30.246093-24.054688-66.625-39.164062-105.015624-43.605469v-17.425781h8c8.835937 0 16-7.164062 16-16v-16c0-8.835938-7.164063-16-16-16h-64c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h8v17.425781c-38.390626 4.441407-74.769532 19.550781-105.015626 43.605469l-12.367187-12.367188c-3.125-3.125-8.191406-3.125-11.3125 0l-22.640625 22.640626c-3.125 3.125-3.125 8.1875 0 11.3125l12.367188 12.367187c-67.546876 85.167969-58.121094 207.984375 21.628906 281.851563 79.75 73.863281 202.929687 73.863281 282.679687 0 79.75-73.867188 89.175781-196.683594 21.628907-281.851563zm-15.929688-29.382813 11.359375 11.359376-5.832031 5.832031c-3.625-3.921875-7.402344-7.695313-11.328125-11.328125zm-179.039062-97.601562h64v16h-64zm24 32h16v16.199219c-2.65625-.09375-5.320313-.199219-8-.199219-2.679688 0-5.34375.105469-8 .199219zm-150.402344 76.960938 11.363281-11.359376 5.832031 5.832032c-3.921875 3.621094-7.699218 7.394531-11.328125 11.328125zm158.402344 339.039062c-106.039063 0-192-85.960938-192-192s85.960937-192 192-192c106.039062 0 192 85.960938 192 192-.125 105.988281-86.011719 191.875-192 192zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m232.117188 272c0-13.253906-10.746094-24-24-24-13.253907 0-24 10.746094-24 24s10.746093 24 24 24c3.5625-.015625 7.078124-.835938 10.28125-2.398438l48.0625 48.0625 11.3125-11.3125-48.058594-48.070312c1.566406-3.203125 2.386718-6.71875 2.402344-10.28125zm-32 0c0-4.417969 3.582031-8 8-8 4.417968 0 8 3.582031 8 8s-3.582032 8-8 8c-4.417969 0-8-3.582031-8-8zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m242.246094 148.601562-4.257813 15.398438c31.285157 8.679688 57.269531 30.496094 71.230469 59.804688 13.964844 29.308593 14.539062 63.230468 1.570312 92.996093l14.664063 6.398438c7.066406-16.140625 10.699219-33.578125 10.664063-51.199219-.09375-57.523438-38.460938-107.957031-93.871094-123.398438zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/><path d="m225.171875 145.128906c-5.652344-.753906-11.351563-1.128906-17.054687-1.128906v16c4.996093 0 9.988281.328125 14.945312.984375zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/>
                                    </g> 
                                </svg>
                                <p className="text-xl century pt-3">RÉDACTION WEB OPTIMISÉE</p>
                            </div>
                            <div className="w-1/4 flex flex-col items-center justify-center"  data-aos='zoom-in' data-aos-delay="600">
                            <svg  version="1.1" width="80px" height="80px" id="Capa_1" x="0px" y="0px" className="svg-bleu" viewBox="0 0 512 512" >
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M469.333,0H42.667C19.114,0.028,0.028,19.114,0,42.667v426.667C0.028,492.886,19.114,511.972,42.667,512h426.667     c23.552-0.028,42.638-19.114,42.667-42.667V42.667C511.972,19.114,492.886,0.028,469.333,0z M494.933,469.333     c0,14.138-11.461,25.6-25.6,25.6H42.667c-14.138,0-25.6-11.461-25.6-25.6v-384h477.867V469.333z M494.933,68.267H17.067v-25.6     c0-14.138,11.462-25.6,25.6-25.6h426.667c14.138,0,25.6,11.462,25.6,25.6V68.267z"/>
                                                <path d="M59.733,34.133H51.2c-4.713,0-8.533,3.82-8.533,8.533S46.487,51.2,51.2,51.2h8.533c4.713,0,8.533-3.82,8.533-8.533     S64.446,34.133,59.733,34.133z"/>
                                                <path d="M99.925,36.608c-3.422-3.157-8.695-3.157-12.117,0c-0.753,0.83-1.359,1.782-1.792,2.816     c-0.911,2.066-0.911,4.419,0,6.485c0.435,1.033,1.041,1.985,1.792,2.816c2.443,2.443,6.126,3.153,9.301,1.792     c1.033-0.435,1.985-1.041,2.816-1.792c0.751-0.831,1.357-1.783,1.792-2.816c0.91-2.066,0.91-4.419,0-6.485     C101.284,38.39,100.678,37.438,99.925,36.608z"/>
                                                <path d="M134.059,36.608c-3.422-3.157-8.695-3.157-12.117,0c-0.753,0.83-1.359,1.782-1.792,2.816     c-1.361,3.175-0.651,6.859,1.792,9.301c0.83,0.753,1.782,1.359,2.816,1.792c2.066,0.911,4.419,0.911,6.485,0     c1.043-0.414,1.999-1.022,2.816-1.792c1.602-1.607,2.494-3.789,2.475-6.059c0.025-1.119-0.208-2.229-0.683-3.243     C135.418,38.39,134.812,37.438,134.059,36.608z"/>
                                                <path d="M460.8,34.133H170.667c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533H460.8c4.713,0,8.533-3.82,8.533-8.533     S465.513,34.133,460.8,34.133z"/>
                                                <path d="M51.2,315.733h119.467c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H67.14L128,207.36v65.707     c0,4.713,3.82,8.533,8.533,8.533s8.533-3.821,8.533-8.533V179.2c0-0.282-0.137-0.512-0.162-0.794     c-0.051-0.58-0.165-1.152-0.341-1.707c-0.154-0.508-0.357-0.999-0.606-1.468c-0.242-0.464-0.528-0.904-0.853-1.314     c-0.366-0.456-0.781-0.871-1.237-1.237c-0.213-0.179-0.333-0.418-0.563-0.572c-0.23-0.154-0.478-0.162-0.708-0.29     c-0.512-0.276-1.053-0.497-1.613-0.657c-0.537-0.165-1.088-0.276-1.647-0.333c-0.264-0.068-0.532-0.122-0.802-0.162     c-0.282,0-0.529,0.137-0.802,0.162c-0.579,0.058-1.15,0.172-1.707,0.341c-0.503,0.155-0.992,0.355-1.459,0.597     c-0.475,0.257-0.924,0.56-1.34,0.905c-0.444,0.367-0.853,0.776-1.22,1.22c-0.171,0.213-0.418,0.341-0.572,0.572l-85.333,128     c-1.747,2.619-1.911,5.986-0.426,8.762C45.16,314.001,48.052,315.734,51.2,315.733z"/>
                                                <path d="M136.533,332.8c-4.713,0-8.533,3.821-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6     C145.067,336.621,141.246,332.8,136.533,332.8z"/>
                                                <path d="M332.8,315.733h119.467c4.713,0,8.533-3.82,8.533-8.533s-3.821-8.533-8.533-8.533H348.74l60.86-91.307v65.707     c0,4.713,3.82,8.533,8.533,8.533s8.533-3.821,8.533-8.533V179.2c0-0.282-0.137-0.512-0.162-0.794     c-0.051-0.58-0.165-1.152-0.341-1.707c-0.154-0.508-0.357-0.999-0.606-1.468c-0.242-0.464-0.528-0.904-0.853-1.314     c-0.366-0.456-0.781-0.871-1.237-1.237c-0.213-0.179-0.333-0.418-0.563-0.572c-0.23-0.154-0.478-0.162-0.708-0.29     c-0.512-0.276-1.053-0.497-1.613-0.657c-0.537-0.165-1.088-0.276-1.647-0.333c-0.264-0.068-0.532-0.122-0.802-0.162     c-0.282,0-0.529,0.137-0.802,0.162c-0.579,0.056-1.151,0.171-1.707,0.341c-0.508,0.152-1,0.355-1.468,0.606     c-0.474,0.251-0.92,0.551-1.331,0.896c-0.451,0.363-0.863,0.772-1.229,1.22c-0.171,0.213-0.418,0.341-0.572,0.572l-85.333,128     c-1.748,2.62-1.911,5.989-0.424,8.766C326.755,314.006,329.651,315.737,332.8,315.733z"/>
                                                <path d="M418.133,332.8c-4.713,0-8.533,3.821-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6     C426.667,336.621,422.846,332.8,418.133,332.8z"/>
                                                <path d="M230.4,375.467h42.667c18.851,0,34.133-15.282,34.133-34.133V204.8c0-18.851-15.282-34.133-34.133-34.133H230.4     c-18.851,0-34.133,15.282-34.133,34.133v136.533C196.267,360.185,211.549,375.467,230.4,375.467z M213.333,204.8     c0-9.426,7.641-17.067,17.067-17.067h42.667c9.426,0,17.067,7.641,17.067,17.067v136.533c0,9.426-7.641,17.067-17.067,17.067     H230.4c-9.426,0-17.067-7.641-17.067-17.067V204.8z"/>
                                                <path d="M341.333,418.133H170.667c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h170.667     c4.713,0,8.533-3.82,8.533-8.533S346.046,418.133,341.333,418.133z"/>
                                                <path d="M307.2,452.267H204.8c-4.713,0-8.533,3.821-8.533,8.533s3.82,8.533,8.533,8.533h102.4c4.713,0,8.533-3.82,8.533-8.533     S311.913,452.267,307.2,452.267z"/>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-xl century pt-3">OPTIMISATION DES BALISES</p>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        Vous souhaitez améliorer votre visibilité sur Internet ?<br/>SOYEZ <span className="text-bleu">NATUREL !</span>
                        </h2><br/>
                        <hr className="blue"></hr>
                    </section>
                    <section className="flex flex-1 home-step my-24 px-24">
                        <div className="w-1/3 one px-12">
                            <div className="flex flex-1">
                                <div className="blackBulle" data-aos="fade-up">1</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>JE DÉCOUVRE LE RÉFÉRENCEMENT NATUREL
                                </h3>
                                <div className="content text-justify pb-6" style={{textAlignLast:'center'}}>
                                Le <strong>référencement naturel (SEO)</strong> se distingue du <strong>référencement payant</strong> ou <strong>référencement Google Ads</strong>. Si ce dernier se concentre sur la <strong>sponsorisation de liens</strong>, le <strong>SEO</strong> demande d’être rigoureux, régulier et attentif pour faire progresser un site sur les <strong>moteurs de recherche</strong>.
                                </div>
                                <Button url="/contact-agence-web-toulouse" text="Découvrir le SEO" position="center" />

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
                                Vous souhaitez mettre en place une <strong>stratégie de référencement naturel</strong> pour <strong>améliorer la visibilité de votre site internet</strong> ? Nous définissons les contours de votre projet pour vous permettre de mettre en place une stratégie efficace selon vos besoins.
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
                                    <span className="text-bleu">/</span>JE FAIS LE CHOIX DE CONSULTANTS POUR MON SEO
                                </h3>
                                <div className="content text-justify pb-6" style={{textAlignLast:'center'}}>
                                Optez pour la mise en place de votre <strong>stratégie de référencement naturel</strong>. Des <strong>consultants SEO</strong> vous accompagnent pour déterminer les objectifs de la <strong>création de votre site internet</strong> qui vous permettra d’<strong>optimiser votre visibilité en ligne</strong>, dans le but d'obtenir des contacts, ou bien de vendre vos produits.
                                </div>
                                <Button url="/contact-agence-web-toulouse" text="Prendre rendez-vous" position="center" />
                                </section>
                                
                            </div>

                        </div>
                    </section>
                    <section className="w-full h-screen flex flex-col justify-center items-center px-4 pt-12 pb-0 bg-cover text-justify" style={{backgroundColor:'#3c3c3c', color:'white'}}>
                        <div className="w-full">
                            <h2 data-aos='fade-right' className="text-center text-3xl century">
                            <span className="text-bleu">/</span>RÉFÉRENCEMENT SEO (Search Engine Optimization)
                            </h2>
                        </div>
                        <div className="w-full flex flex-row mx-auto px-4 py-6 my-4" style={{padding:'25px 200px 25px 200px', marginRight:'300px'}}>
                        <div className="w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>RÉFÉRENCEMENT : DÉFINIR SES BESOINS
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Définir vos besoins de façon précise, en termes de visibilité, est important pour faire le choix des priorités pour déterminer la structure de votre site.</span>
                            </h4>
                            <p>Nous mettons en place une <strong>stratégie de référencement naturel</strong> basée sur vos besoins en termes de <strong>visibilité</strong>. C’est pourquoi il est important de les définir le plus précisément possible, et ce, dès le départ. Le <strong>référencement naturel</strong> est un travail de longue haleine, c’est pourquoi il est nécessaire de s’appuyer sur des bases pérennes.</p>
                        </div>
                        <div className="w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>RÉFÉRENCEMENT : ÉTUDE DE LA CONCURRENCE
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Réaliser une étude de la concurrence est nécessaire pour se positionner le plus précisément sur les bons mots-clés et être visible.</span>
                            </h4>
                            <p>Nous disposons d’un outil complet pour étudier votre <strong>concurrence en ligne</strong> afin d’être toujours en <strong>première page</strong> et <strong>référencer votre site</strong> sur les mots clés de vos concurrents. Nous devons savoir contre quoi et contre qui nous nous battons.</p>
                        </div>
                        </div>
                        <div className="w-full flex flex-row mx-auto px-4 py-6 my-4" style={{padding:'25px 200px 25px 200px', marginRight:'300px'}}>
                        <div className="w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>RÉFÉRENCEMENT : INDICATEURS DE PERFORMANCE
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <strong className="font-bold">Maîtriser son SEO, c’est vous permettre de connaître le potentiel de votre site internet en termes de retour sur investissement.</strong>
                            </h4>
                            <p>Votre <strong>référencement Google</strong> doit être pertinent, il est étudié en fonction d’indicateurs de performance. Notre objectif est de vous apporter un maximum de contacts pour vous permettre d’obtenir un <strong>retour sur investissement</strong> sur le long terme grâce à votre présence dans les <strong>premiers résultats des moteurs de recherches</strong>.</p>
                        </div>
                        <div className="w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>RÉFÉRENCEMENT : STATISTIQUES DE RÉFÉRENCEMENT NATUREL
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Évaluer sa stratégie de référencement naturel est essentiel pour déterminer son efficacité. Les statistiques sont là pour vous guider.</span>
                            </h4>
                            <p>Nous élaborons une <strong>stratégie de référencement naturel</strong> cohérente avec vos objectifs. Grâce à une collaboration constante et régulière avec votre <strong>référenceur</strong>, le <strong>référencement d’un site</strong> se fait selon le développement de votre entreprise et son activité.</p>
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
                                <p className="text-xl text-white century pt-3">CONTENUS OPTIMISÉS</p>
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
                                <p className="text-xl century text-white pt-3">MOTS-CLÉS PERTINENTS</p>
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
                                <p className="text-xl century text-white pt-3">PAGES OPTIMISÉES</p>
                            </div>
                        </div>
                    </section>
                    

                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Référencement à Toulouse : Que faisons-nous ?
                        </h2>
                        <hr className="blue"></hr>
                        <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Pour gagner en visibilité, nous devons rendre les contenus de votre site internet pertinents pour répondre aux attentes de vos utilisateurs, mais aussi de Google par le biais de l’optimisation SEO :</h4>
                    </section>
                    <section  className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                        <div className="w-3/4 py-0 flex justify-end">
                            <Accordion>
                                <div className="w-full" label="GOOGLE PANDA">
                                <p>nous impose une qualité irréprochable du contenu avec un champ sémantique riche autour des mots clés. Nous devons rédiger du <strong>contenu optimisé selon les mots clés</strong> à travailler en lien avec la thématique de chaque page. Nos mots d’ordres : rédaction, rédaction et rédaction.</p>
                                </div>
                                <div label="GOOGLE PINGOUIN">
                                <p>analyse les <strong>liens externes</strong> c’est à dire les liens qui renvoient vers votre site internet. Ces <strong>backlinks</strong> (liens retours) doivent être qualitatifs : s’ils sont de mauvaises qualités, <strong>Penguin</strong> vous pénalise, sinon cela apporte de la popularité et de la force à votre site internet.
                                Nos objectifs : <strong>créer votre réseau de netlinking</strong> en vous inscrivant sur tous les <strong>sites internet et annuaires</strong> qui parlent d’entreprises comme la vôtre évoluant dans le même secteur d’activité… nous vous mêlons à vos concurrents présents <strong>sur le web</strong> !</p>
                                </div>
                                <div label="GOOGLE PIGEON">
                                <p>se concentre sur le <strong>référencement local</strong> en utilisant les informations des établissements en fonction de leurs lieux géographiques. La personne qui cherche un professionnel comme vous en se trouvant près de chez vous… doit tout simplement vous trouver !</p>
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
query lastsThreePostsReferencementNaturel {
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
export default ReferencementNaturel;



