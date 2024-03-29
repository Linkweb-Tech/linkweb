import React, { Component } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import RoundButtonPages from "../components/roundButtonPages";
import RoundButtonPagesMail from "../components/roundButtonPagesMail";
import ContactForm from "../components/contactForm";

import blocBg from "../images/background.jpg";
import Bg from "../images/img_9245.jpg";
import bureau from '../images/bureau2-min.jpg';
import scroll from "../images/motiontest.svg";


class ContactAgenceWebToulouse extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef()
    }



    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Contact - Devis Site Internet Sur Mesure - Agence Linkweb"
                    description="Demande de devis sur-mesure - Réponse rapide et concrète pour vos projets de création et référencement de site internet."
                    keywords={[`Devis site internet`, `Projet Web Toulouse`, `Projet Web Agen`]}
                    url="https://linkweb.fr/contact-agence-web-toulouse/"
                    nom="Demander un devis"
                    slug="contact-agence-web-toulouse/"
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
                    <section className="flex items-center w-full mx-auto pb-0 mt-40 mb-24 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{background:'#000000ad url('+ Bg +')', backgroundBlendMode:'overlay', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center top'}}>
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
                                <div className="w-full lg:w-full flex justify-center lg:justify-center">
                                <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Une question ? Un devis ? Une candidature ?</h1>
                                </div>
                                <br/>
                                <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Contactez-nous, un spécialiste de notre agence web reviendra vers vous.</h2>
                                {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                                <div className="w-full lg:w-full flex flex-col lg:flex-row justify-center pb-24 lg:justify-center mx-auto" style={{maxWidth:'460px'}}>
                                    <RoundButtonPages url="tel:0533950030" text="05 33 95 00 30"/>
                                    <RoundButtonPagesMail url="#contactForm" onClick={this.executeScroll} text="Demander un devis"/>
                                </div>
                        </div>
                            <div className="w-full flex items-end justify-center mx-auto block pb-16">
                                <img src={scroll} alt="Scroll" width="60px"/>
                            </div>
                    </section>
                    <section className="phototext">
                        <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10">
                            <h2 className="century text-3xl md:text-5xl text-black leading-none">Nous contacter</h2>
                            <br/>
                            <hr className="border-solid w-1/6 border-white"></hr>
                            <br/>
                            <h3 id="contactForm"  /*data-aos='fade-left'*/ className="text-xl text-center century text-black px-4 pb-0">Vous souhaitez faire appel à notre agence web à Agen et Toulouse pour réaliser un devis, envoyer votre candidature ou être contacté ? <br/>Nous vous invitons à nous contacter par le biais du formulaire ci-dessous, un spécialiste de l’agence Linkweb vous répondra dans les meilleurs délais.</h3>
                            <br/>
                        </section>
                    </section>
                    
                    <ContactForm id="contactForm" ref={this.myRef}  />
                    <section className="phototext">
                        <section className="max-w-5xl text-center w-full mx-auto px-4 pt-12 pb-0 mb-16 mt-2">
                            <h3 data-aos='fade-right' className="century text-black leading-none">
                                Notre agence est taillée pour <br/><span className="text-3xl md:text-5xl lg:text-6xl text-bleu font-bold">VOTRE PROJET WEB</span>
                            </h3>
                            <hr className="border-solid w-1/6 border-white"></hr>

                        </section>
                    </section>
                    {/* Espace Pictos */}
                    <section className="w-full flex items-center flex-col text-center font-bold century">
                        <div className="w-full lg:w-2/3 justify-center items-center flex flex-col md:flex-row md:mb-12 lg:mb-24">
                            <div className="w-1/2 lg:w-1/3 flex flex-col mb-10 lg:mb-0" data-aos="fade-right">
                                <svg className="mx-auto block" fill="#37C5EE" viewBox="0 0 100 125" width="50px">
                                    <path d="M51,37.9c-11.8,0-21.5,10.1-21.5,22.5c0,1.7,0.2,3.5,0.6,5.3l0.6,2l0,0c0,0.1,0,0.1,0,0.1c0.3,0.9,0.6,1.7,1,2.5  c0.9,2.2,2.3,5.4,3.6,7.9c0.9,1.7,1.6,4.5,2,7.8c0.1,1.2,0.2,2,0.2,2.1l0,0.8c0,1,0.9,1.8,1.8,1.8h23.3c1,0,1.8-0.8,1.8-1.8l0-0.8  c0-0.7,0.4-6.5,2.2-9.8c1.3-2.5,2.6-5.7,3.5-7.8c0.4-0.8,0.7-1.7,1-2.5c0-0.1,0.1-0.2,0.1-0.2v0l0.6-2.1c0.4-1.7,0.6-3.4,0.6-5.2  C72.5,48,62.8,37.9,51,37.9z M68.3,64.7l-0.5,2c0,0,0,0,0,0c-0.2,0.7-0.5,1.5-0.9,2.2c-0.9,2.2-2.2,5.2-3.4,7.6  c-1.7,3.3-2.3,8.1-2.5,10.4H41.1c0-0.4-0.1-0.8-0.1-1.3c-0.3-2.6-1-6.3-2.4-9c-1.2-2.4-2.5-5.4-3.5-7.7c-0.3-0.7-0.6-1.3-0.9-2.1  l-0.5-1.9c-0.3-1.4-0.5-2.9-0.5-4.4c0-10.4,8-18.8,17.8-18.8S68.8,50,68.8,60.4C68.8,61.9,68.6,63.3,68.3,64.7z M61.1,95H40.9  c-1,0-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8h20.2c1,0,1.8,0.8,1.8,1.8S62.1,95,61.1,95z M61.1,99.4H40.9c-1,0-1.8-0.8-1.8-1.8  c0-1,0.8-1.8,1.8-1.8h20.2c1,0,1.8,0.8,1.8,1.8C63,98.6,62.1,99.4,61.1,99.4z M59.7,103.8H42.3c-1,0-1.8-0.8-1.8-1.8  c0-1,0.8-1.8,1.8-1.8h17.3c1,0,1.8,0.8,1.8,1.8C61.5,103,60.7,103.8,59.7,103.8z M42.9,73.6c-0.6,0-1.2-0.3-1.6-0.9  c-9.4-14.8-0.2-23.5,1.8-25.1c0.8-0.6,2-0.5,2.6,0.3c0.6,0.8,0.5,2-0.3,2.6c-1.5,1.3-8.8,8.1-1,20.3c0.5,0.9,0.3,2-0.6,2.6  C43.6,73.5,43.2,73.6,42.9,73.6z M91.7,62H81.1c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8h10.6c1,0,1.8,0.8,1.8,1.8  C93.5,61.2,92.7,62,91.7,62z M20.9,62H10.3c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8h10.6c1,0,1.8,0.8,1.8,1.8  C22.8,61.2,21.9,62,20.9,62z M51,31.4c-1,0-1.8-0.8-1.8-1.8V19c0-1,0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8v10.6  C52.8,30.6,52,31.4,51,31.4z M72.5,41.6c-0.5,0-0.9-0.2-1.3-0.5c-0.7-0.7-0.7-1.9,0-2.6l7.5-7.5c0.7-0.7,1.9-0.7,2.6,0  c0.7,0.7,0.7,1.9,0,2.6L73.8,41C73.4,41.4,72.9,41.6,72.5,41.6z M29.5,41.2c-0.5,0-0.9-0.2-1.3-0.5l-7.5-7.5c-0.7-0.7-0.7-1.9,0-2.6  s1.9-0.7,2.6,0l7.5,7.5c0.7,0.7,0.7,1.9,0,2.6C30.5,41,30,41.2,29.5,41.2z M22.1,92.3c-0.5,0-0.9-0.2-1.3-0.5  c-0.7-0.7-0.7-1.9,0-2.6l7.5-7.5c0.7-0.7,1.9-0.7,2.6,0c0.7,0.7,0.7,1.9,0,2.6l-7.5,7.5C23,92.1,22.5,92.3,22.1,92.3z M79.9,92.7  c-0.5,0-0.9-0.2-1.3-0.5l-7.5-7.5c-0.7-0.7-0.7-1.9,0-2.6s1.9-0.7,2.6,0l7.5,7.5c0.7,0.7,0.7,1.9,0,2.6  C80.9,92.5,80.4,92.7,79.9,92.7z"/>
                                </svg>
                                <h4>Créations sur-mesure</h4>
                            </div>
                            <div className="w-1/2 lg:w-1/3 flex flex-col mb-10 lg:mb-0" data-aos="fade-down">
                                <svg className="mx-auto block" fill="#37C5EE" viewBox="0 0 846.7 1058.3" width="50px">
                                    <g>
	                                    <path className="st0" d="M342.7,262.7c90.7,0,171.7,41.7,224.8,107l-55.4,32c-41.5-46.6-102-76-169.4-76   c-125.3,0-226.8,101.5-226.8,226.8s101.6,226.8,226.8,226.8c125.3,0,226.8-101.5,226.8-226.8c0-25.5-4.2-50.1-12-73l55.4-32   c12.7,32.5,19.6,68,19.6,105c0,160-129.8,289.8-289.8,289.8S52.9,712.5,52.9,552.5S182.6,262.7,342.7,262.7L342.7,262.7z    M617,342.5l6.1-81.7l112-64.7l-6.1,81.7L617,342.5z M660.9,418.4l73.8,35.6l112-64.7l-73.8-35.6L660.9,418.4z M763.1,335.6   L388.8,551.7l0,0.8c0,25.5-20.6,46.1-46.1,46.1s-46.1-20.7-46.1-46.1c0-25.5,20.6-46.1,46.1-46.1c8,0,15.5,2,22,5.6l375.2-216.6   L763.1,335.6L763.1,335.6z M342.7,384.6c45.4,0,86.6,18.1,116.9,47.4l-58.1,33.6c-16.8-11.4-37-18-58.7-18   c-58,0-104.9,47-104.9,104.9c0,58,47,104.9,104.9,104.9c57.9,0,104.9-47,104.9-104.9c0-3.1-0.1-6.2-0.4-9.3l57.9-33.4   c3.6,13.6,5.5,28,5.5,42.7c0,92.7-75.2,167.9-167.9,167.9s-167.9-75.2-167.9-167.9S250,384.6,342.7,384.6L342.7,384.6z"/>
                                    </g>
                                </svg>
                                <h4>Définition stratégique</h4>
                            </div>
                            <div className="w-1/2 lg:w-1/3 flex flex-col mb-10 lg:mb-0" data-aos="fade-left">
                                <svg className="mx-auto block" fill="#37C5EE" viewBox="0 0 100 125" width="50px">
                                    <path d="M67.2,101.4l1-0.5l26.6-15.6c1.3-0.8,2.2-2.1,2.3-3.6c0.1-1.8-1-3.8-3.5-3.9c-1.8-0.1-5.5,1.9-6.5,2.4  c-3.6,1.8-8.7,4.7-12,7c-0.2,0.2-0.5,0.4-0.8,0.5c-1.5,1-3.1,1.6-4.8,2C59.9,91.8,45.8,92,45.8,92H45c-0.6,0-1.2-0.4-1.3-1  c-0.1-0.7,0.4-1.3,1.1-1.3l20.9-2c2.3-0.2,4.1-2.4,3.9-4.8s-2.5-4.2-4.8-3.9l-18.6-0.3c-1.3,0-3.3-0.3-4.5-0.7  c-12-3.5-18.7-0.2-22.3,1.3c-0.8-1.3-2.3-2.2-4-2.1l-8,0.5c-2.7,0.2-4.7,2.4-4.5,5l1.3,17.8c0.2,2.6,2.5,4.5,5.2,4.3l8-0.5  c1.7-0.1,3.1-1.2,3.7-2.6l35.2,1.5C60.1,103.6,63.8,103.2,67.2,101.4z M12.3,100.6c-1.5,0-2.7-1.2-2.7-2.6c0-1.5,1.2-2.6,2.7-2.6  S15,96.6,15,98C15,99.4,13.8,100.6,12.3,100.6z M73.8,83.9c0-0.5,0-1,0-1.5c-0.1-0.6-0.2-1.2-0.4-1.8v-0.1c2.8-1.5,8.3-4.2,11.3-5.4  c1.5-0.6,3-0.6,4.3,0.4c-1.1,0.4-2.1,0.9-3,1.3c-3.1,1.6-8.7,4.6-11.4,6.5C74.4,83.5,74.1,83.7,73.8,83.9z M69.8,76.1  c1.8-1,6-2.3,7.8-3c1.5-0.6,2.9-0.5,4.3,0.3c-2.2,1-6.3,2.4-8.3,3.5l-1.3,0.7c-0.1,0.1-0.2,0.2-0.4,0.2  C71.2,77.2,70.5,76.6,69.8,76.1z M31.4,62.5l1.8,1.8l1.8,1.8c0.7,0.7,1.8,0.8,2.6,0.2l4.3-3.1c1.8,1,3.7,1.8,5.6,2.3l0.9,5.2  c0.2,1,1,1.7,2,1.7H53h2.6c1,0,1.8-0.7,2-1.7l0.9-5.2c1.9-0.5,3.8-1.3,5.5-2.3l4.3,3.1c0.8,0.6,1.9,0.5,2.6-0.2l1.8-1.8l1.8-1.8  c0.7-0.7,0.8-1.8,0.2-2.6l-3.1-4.3c1-1.8,1.8-3.7,2.3-5.6l5.2-0.9c1-0.2,1.7-1,1.7-2v-2.6v-2.6c0-1-0.7-1.8-1.7-2L74,39  c-0.5-2-1.3-3.8-2.3-5.6l3.1-4.3c0.6-0.8,0.5-1.9-0.2-2.6l-2-1.8l-1.8-1.8c-0.7-0.6-1.8-0.7-2.6-0.2l-4.3,3.1  c-1.8-1-3.7-1.8-5.6-2.3l-0.9-5.2c-0.2-1-1-1.7-2-1.7h-2.6h-2.6c-1,0-1.8,0.7-2,1.7l-0.9,5.2c-2,0.5-3.9,1.3-5.7,2.4l-4.3-3  c-0.8-0.6-1.9-0.5-2.6,0.2L33,24.9l-1.8,1.8c-0.7,0.7-0.8,1.8-0.2,2.6l3,4.4c-1,1.8-1.8,3.7-2.3,5.6l-5.2,0.8c-1,0.2-1.7,1-1.7,2  v2.6v2.6c0,1,0.7,1.8,1.7,2l5.2,0.9c0.5,1.9,1.3,3.8,2.4,5.6l-3,4.3C30.6,60.7,30.7,61.8,31.4,62.5z M46.1,41.1l4,4l9.6-9.5l4.1,4.2  l-9.5,9.5l-4.2,4.1L46,49.2l-4-4L46.1,41.1z"/>
                                </svg>
                                <h4>Conseil stratégique</h4>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 justify-center items-center flex flex-col md:flex-row md:mb-12 lg:mb-24">
                            <div className="w-1/2 lg:w-1/3 flex flex-col mb-10 lg:mb-0" data-aos="fade-right">
                                <svg className="mx-auto block" width="50px" viewBox="0 0 100 125" fill="#37C5EE">
                                    <path d="M88.9,23h-78c-4.4,0-8,3.6-8,8v60c0,4.4,3.6,8,8,8h78c4.4,0,8-3.6,8-8V31C96.9,26.6,93.2,23,88.9,23z M92.9,91  c0,2.2-1.8,4-4,4h-78c-2.2,0-4-1.8-4-4V43h77c1.1,0,2-0.9,2-2s-0.9-2-2-2h-77v-8c0-2.2,1.8-4,4-4h78c2.2,0,4,1.8,4,4V91z"/>
                                    <path d="M15.9,31h-1c-1.1,0-2,0.9-2,2s0.9,2,2,2h1c1.1,0,2-0.9,2-2S17,31,15.9,31z"/>
                                    <path d="M25.9,31h-1c-1.1,0-2,0.9-2,2s0.9,2,2,2h1c1.1,0,2-0.9,2-2S27,31,25.9,31z"/>
                                    <path d="M35.9,31h-1c-1.1,0-2,0.9-2,2s0.9,2,2,2h1c1.1,0,2-0.9,2-2S37,31,35.9,31z"/>
                                    <path d="M67.9,62.1h-3c-0.1-0.2-0.2-0.4-0.3-0.6l2.1-2.1c0.8-0.8,0.8-2,0-2.8l-5.5-5.5c-0.8-0.8-2-0.8-2.8,0l-2.1,2.1  c-0.2-0.1-0.4-0.2-0.6-0.3v-3c0-1.1-0.9-2-2-2H46c-1.1,0-2,0.9-2,2v3c-0.2,0.1-0.4,0.2-0.6,0.3l-2.1-2.1c-0.8-0.8-2-0.8-2.8,0  L33,56.6c-0.8,0.8-0.8,2,0,2.8l2.1,2.1c-0.1,0.2-0.2,0.4-0.3,0.6h-3c-1.1,0-2,0.9-2,2v7.7c0,1.1,0.9,2,2,2h3  c0.1,0.2,0.2,0.4,0.3,0.6L33,76.6c-0.8,0.8-0.8,2,0,2.8l5.5,5.5c0.8,0.8,2,0.8,2.8,0l2.1-2.1c0.2,0.1,0.4,0.2,0.6,0.3v3  c0,1.1,0.9,2,2,2h7.7c1.1,0,2-0.9,2-2V83c0.2-0.1,0.4-0.2,0.6-0.3l2.1,2.1c0.8,0.8,2,0.8,2.8,0l5.5-5.5c0.4-0.4,0.6-0.9,0.6-1.4  c0-1.1-0.9-2-2-2c-0.5,0-1.1,0.2-1.4,0.6l-4,4l-1.7-1.7c-0.6-0.6-1.6-0.8-2.4-0.3c-0.8,0.5-1.7,0.8-2.6,1.1c-0.9,0.2-1.5,1-1.5,1.9  V84H48v-2.4c0-0.9-0.6-1.7-1.5-1.9c-0.9-0.3-1.8-0.6-2.6-1.1c-0.8-0.4-1.8-0.3-2.4,0.3l-1.7,1.7L37.2,78l1.7-1.7  c0.6-0.6,0.8-1.6,0.3-2.4c-0.5-0.8-0.8-1.7-1.1-2.6c-0.2-0.9-1-1.5-1.9-1.4h-2.4v-3.7h2.4c0.9,0,1.7-0.6,1.9-1.4  c0.3-0.9,0.6-1.8,1.1-2.6c0.4-0.8,0.3-1.8-0.3-2.4L37.2,58l2.6-2.6l1.7,1.7c0.6,0.6,1.6,0.8,2.4,0.3c0.8-0.5,1.7-0.8,2.6-1.1  c0.9-0.2,1.5-1,1.5-1.9V52h3.7v2.4c0,0.9,0.6,1.7,1.5,1.9c0.9,0.3,1.8,0.6,2.6,1.1c0.8,0.4,1.8,0.3,2.4-0.3l1.7-1.7l2.6,2.6  l-1.7,1.7c-0.6,0.6-0.8,1.6-0.3,2.4c0.5,0.8,0.8,1.7,1.1,2.6c0.2,0.9,1,1.5,1.9,1.4h2.4v3.7h-2.4c-1.1,0-2,0.9-2,2s0.9,2,2,2h4.4  c1.1,0,2-0.9,2-2v-7.7C69.9,63,69,62.1,67.9,62.1z"/>
                                    <path d="M44.1,68c0,3.2,2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8s-2.6-5.8-5.8-5.8C46.7,62.2,44.1,64.8,44.1,68z M51.7,68  c0,1-0.8,1.8-1.8,1.8S48.1,69,48.1,68s0.8-1.8,1.8-1.8S51.7,67,51.7,68z"/>
                                </svg>
                                <h4>Optimisation technique</h4>
                            </div>
                            <div className="w-1/2 lg:w-1/3 flex flex-col mb-10 lg:mb-0" data-aos="fade-up">
                                <svg className="mx-auto block" width="50px" fill="#37C5EE" viewBox="0 0 100 125" >
                                    <g>
	                                    <path d="M89.8,61.5c0,0.1,1.5-1.3,1.5-1.2h8.7L84.9,77.8L69.6,60.3h8.7c0-0.1,1.9,1.3,1.9,1.2c0-16.7-12.9-30.2-28.8-30.2   c-7.2,0-13.8,2.8-18.8,7.4l-6.4-7.6c6.8-6.2,15.6-9.9,25.2-9.9C72.6,21.2,89.8,39.3,89.8,61.5z"/>
	                                    <path d="M10.2,63.5c0-0.1-1.5,1.3-1.5,1.2H0l15.1-17.5l15.3,17.5h-8.7c0,0.1-1.9-1.3-1.9-1.2c0,16.7,12.9,30.2,28.8,30.2   c7.2,0,13.8-2.8,18.8-7.4l6.4,7.6c-6.8,6.2-15.6,9.9-25.2,9.9C27.4,103.8,10.2,85.7,10.2,63.5z"/>
                                    </g>
                                </svg>
                                <h4>Mise à jour régulière</h4>
                            </div>
                            <div className="w-1/2 lg:w-1/3 flex flex-col mb-10 lg:mb-0" data-aos="fade-left">
                                <svg className="mx-auto block" width="50px" fill="#37C5EE" viewBox="0 0 64 80">
                                    <g>
	                                    <path d="M52.8,43.8L52.8,43.8c2.2,0.4,4.2-0.9,4.6-3l1-4.6c0.4-2-0.8-3.9-2.7-4.5C55,19.2,44.6,9.2,31.9,9.2S8.8,19.2,8.1,31.7   c-1.9,0.6-3.1,2.5-2.7,4.5l1,4.6c0.4,2.1,2.5,3.4,4.5,3l0.5-0.1c1.6-0.3,2.6-1.8,2.2-3.4l-1.3-6.5C12.1,33,11.7,32.4,11,32   c0.3-5.4,2.7-10.2,6.3-13.8c0.4-0.4,0.9-0.5,1.4-0.3c0.2,0.1,0.3,0.1,0.5,0.1c0.2,0,0.5-0.1,0.7-0.2c3.8-1.9,7.8-2.9,12.1-2.9   c3.9,0,7.6,0.8,11.1,2.4c0.4,0.2,0.9,0.2,1.3,0c0.5-0.2,1-0.1,1.4,0.2c4,3.6,6.7,8.7,7,14.5c-0.6,0.4-1.1,1-1.3,1.8l-1.3,6.5   c-0.2,0.7,0,1.5,0.3,2.1c-2,3.2-5,6.7-9,8.6c-2.9-0.9-8.6-0.4-10.4,0.2c-2.4,0.7-3.8,3.3-3,5.7c0.4,1.3,1.3,2.2,2.4,2.8   c0.7,0.3,1.5,0.5,2.4,0.4c0.3,0,0.6-0.1,0.9-0.2c2-0.6,7.9-3.9,9.3-6.4C44.8,52.5,49.1,49.6,52.8,43.8z"/>
	                                    <path d="M46.6,53.1c-0.8,0.6-1.6,1.2-2.3,1.5c-2,2.9-7.8,6.1-10,6.7c-0.4,0.1-0.8,0.2-1.2,0.2c-0.2,0-0.4,0-0.6,0   c-0.9,0-1.9-0.2-2.7-0.6c-1.6-0.8-2.8-2.2-3.3-3.8c-0.5-1.6-0.3-3.3,0.5-4.8c0.8-1.5,2.1-2.6,3.7-3.1c1.2-0.4,3.9-0.7,6.6-0.7   c1.5,0,2.9,0.1,4.1,0.4c3.2-1.7,5.6-4.6,7.2-6.9c-0.2-0.7-0.2-1.5-0.1-2.2l1.3-6.5c0.1-0.6,0.4-1.2,0.8-1.7   c0.3-0.4,0.4-0.9,0.3-1.3c-0.6-4.1-2.6-8-5.6-10.9c-0.3-0.3-0.7-0.4-1.1-0.3c-0.2,0-0.4,0-0.6,0c-0.5,0-0.9-0.1-1.4-0.3   c-3.3-1.5-6.7-2.3-10.4-2.3c-4,0-7.8,0.9-11.3,2.7c-0.5,0.2-1,0.4-1.5,0.4c-0.1,0-0.2,0-0.3,0c-0.4,0-0.8,0.1-1,0.3   c-2.7,2.9-4.5,6.5-5,10.4c-0.1,0.5,0,1,0.3,1.3c0.4,0.5,0.6,1.1,0.8,1.7l1.3,6.5c0.2,1.2,0,2.4-0.7,3.4c-0.4,0.5-0.8,1-1.3,1.3   c3.5,9.9,10.5,19.7,18.6,19.7C37.6,64.4,42.8,59.5,46.6,53.1z M22.3,57c-2.7-3.1-5-7.2-6.8-11.8c0.3-0.3,0.6-0.7,0.9-1.1   c0.9-1.4,1.1-3.2,0.7-4.8L17,38.9c5.2-2.8,7.9-6.2,8.6-9.6c0.1-0.5,0.7-0.6,1-0.2c5.4,7.5,15.9,10,20,10.7c-0.1,0.6-0.1,1.2,0,1.9   c-1.3,1.8-3.2,4-5.6,5.4c-1.1-0.2-2.4-0.3-3.8-0.3c-2.6,0-5.6,0.3-7.2,0.8c-2.1,0.6-3.8,2-4.8,4c-1,1.9-1.2,4.1-0.6,6.2   c0.3,1,0.8,2,1.5,2.8C24.6,59.5,23.3,58.2,22.3,57z"/>
	                                    <path d="M17,70.1c0.1,0,0.2-0.1,0.3-0.1c3.3-1.3,5.1-4.7,4.7-8c-4.6-4.1-8.2-10.6-10.3-16.5c0,0,0,0,0-0.1l-0.4,0.1   c-2,0.4-3.9-0.2-5.2-1.6c-0.4,0.9-1.1,10.3-1.5,16.8C4.1,67.6,10.7,72.6,17,70.1z"/>
	                                    <path d="M59.5,60.9c-0.4-6.5-1.1-16.1-1.6-17c-1,1.1-2.5,1.8-4.1,1.8c-1.7,2.4-3.5,4.4-5.2,6c-0.3,0.2-0.3,0.6-0.2,0.9c0,0,0,0,0,0   c0,0.1,0.1,0.5,0.1,0.5c0,0.3-0.3,1-0.3,1.1c-2.2,3.7-4.7,6.6-7.3,8.6c0,0.1,0,0.2,0,0.3c0.2,2.5,1.6,4.7,3.8,5.9   c0.8,0.5,1.6,0.8,2.4,1.1C53.3,72.6,59.9,67.6,59.5,60.9z"/>
                                    </g>
                                </svg>
                                <h4>Support technique</h4>
                            </div>
                        </div>
                    </section>
                    {/* Fin Espace Pictos */}
                    <section className="flex-wrap flex w-full mx-auto pt-2 mt-2 flex-col md:flex-row ">
                        <div className=" font-bold	w-full md:w-1/2 px-12 py-24 flex justify-center items-center flex-col min-h-400 text-center text-white bg-bleu" data-aos="zoom-in">
                            <h3 className="text-2xl century pb-6" ><span className="text-darkgrey">/</span>L’AGENCE LINKWEB À AGEN</h3>
                            <div className="flex flex-row pt-6">
                                    <svg style={{maxHeight:'37px'}} className="mx-auto block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1408 1792" width="20px">
                                        <path d="M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5t-57.5-12.5-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5t-215.5-264.5q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47.5-12.5-57.5-3.5-52.5q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z" fill="#ffffff">
                                        </path>
                                    </svg>
                                    <a className="pl-3 text-xl century" href="tel:0533950030" >05 33 95 00 30</a>
                            </div>
                            <div className="flex flex-row pt-6">
                                <svg style={{maxHeight:'37px'}} viewBox="0 0 1792 1792" width="20px">
                                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" fill="#ffffff">
                                    </path>
                                </svg>
                                
                                <a className="pl-3  text-xl century" href="mailto:contact@linkweb.fr">contact@linkweb.fr</a>
                            </div>
                            <div className="flex flex-row pt-6">
                                <svg style={{maxHeight:'25px'}} className="mx-auto block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1792" width="20px">
                                    <path d="M1408 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" fill="#ffffff">
                                    </path>
                                </svg>
                                
                                <p className="pl-3 text-lg century leading-none">10 rue Albert Ferrasse <br />
                                    47550 BOE</p>
                            </div>
                            <div className="flex flex-row pt-6">
                                <svg className="mx-auto block" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 97.16 97.16" >
                                    <g>
                                        <g>
                                            <path fill="#ffffff" d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z"/>
                                            <path fill="#ffffff" d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z"/>
                                        </g>
                                    </g>
                                </svg>
                                <p className="pl-3 text-lg century leading-none">
                                    Lundi – Jeudi : 9h 12h – 14h 18h <br />
                                    Vendredi : 9h 12h – 13h 17h 
                                </p>
                            </div>
                            
                        </div>
                        <div className="font-bold w-full md:w-1/2 px-6 py-24 flex justify-center items-center flex-col min-h-400 text-center text-white bg-black" data-aos="zoom-in" data-aos-delay="200">
                            <h3 className="text-2xl century pb-6" ><span className="text-bleu">/</span>L’AGENCE LINKWEB À TOULOUSE</h3>
                            <div className="flex pt-6">
                                <svg style={{maxHeight:'37px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1408 1792" width="20px">
                                    <path d="M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5t-57.5-12.5-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5t-215.5-264.5q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47.5-12.5-57.5-3.5-52.5q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z" fill="#ffffff">
                                    </path>
                                </svg>
                                
                                <a className="pl-3 text-xl century" href="tel:0533950030">05 33 95 00 30</a>
                            </div>
                            <div className="flex pt-6">
                                <svg style={{maxHeight:'37px'}} viewBox="0 0 1792 1792" width="20px">
                                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" fill="#ffffff">
                                    </path>
                                </svg>
                                
                                <a className="pl-3  text-xl century" href="mailto:contact@linkweb.fr">contact@linkweb.fr</a>
                            </div>
                            <div className="flex pt-6">
                                <svg style={{maxHeight:'25px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1792" width="20px">
                                    <path d="M1408 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" fill="#ffffff">
                                    </path>
                                </svg>
                                
                                <p className="pl-3 text-lg century leading-none">44 Rue de Bayard <br />
                                    31000 TOULOUSE</p>
                            </div>
                            <div className="flex pt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 97.16 97.16" >
                                    <g>
                                        <g>
                                            <path fill="#ffffff" d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z"/>
                                            <path fill="#ffffff" d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z"/>
                                        </g>
                                    </g>
                                </svg>
                                <p className="pl-3 text-lg century leading-none">
                                    Lundi – Jeudi : 9h 12h – 14h 18h <br />
                                    Vendredi : 9h 12h – 13h 17h 
                                </p>
                            </div>
                            
                           
                            
                        </div>

                    </section>
                    
                          
                    
                    
                {/* </PageTransition> */}
            </Layout>
        );
    }
    executeScroll = () => this.myRef.current.scrollIntoView();
};



export default ContactAgenceWebToulouse;




