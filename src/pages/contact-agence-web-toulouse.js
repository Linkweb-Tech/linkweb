import React from "react";
import { Link } from "gatsby";
import posed from 'react-pose';
import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import ContactForm from "../components/contactForm";

import blocBg from "../images/background.jpg";
import Bg from "../images/img_9245.jpg";
import bureau from '../images/bureau2-min.jpg';


class ContactAgenceWebToulouse extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Web Toulouse - Agen - Création Site - Référencement - Linkweb"
                    description="Demande de devis - Projet de création de site internet ou de référencement à Agen ou Toulouse - Contactez-nous."
                    keywords={[`Devis site internet`, `Projet Web Toulouse`, `Projet Web Agen`]}
                    url="https://linkweb.fr/contact-agence-web-toulouse"
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
                    <section className="w-full h-screen mx-auto px-10 sm:px-4 pb-6 pt-24 bg-no-repeat bg-cover bg-bottom flex flex-col justify-center items-center" style={{ background: '#6e6e6e url(' + Bg + ')', backgroundBlendMode: 'multiply', backgroundRepeat:'none', backgroundPosition:'center', backgroundSize:'cover'}}>
                        <h1 data-aos="fade-up" data-aos-delay="500" className="century text-4xl sm:text-6xl text-center text-white">
                            Une question ? Un devis ? Une candidature ?
                        </h1>
                        <h3 className="italic text-center text-lg sm:text-2xl text-white mt-3">Contactez-nous, un spécialiste de notre agence web reviendra vers vous.</h3>
                        
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                            <span className="text-bleu">/</span>Nous contacter
                        </h2>
                        <hr className="blue"></hr>
                        <h4 data-aos='fade-left' className="text-lg md:text-xl text-grey text-center century italic pb-6">
                            Vous souhaitez faire appel à notre agence web à Agen et Toulouse pour réaliser un devis, envoyer votre candidature ou être contacté ? Nous vous invitons à nous contacter par le biais du formulaire ci-dessous, un spécialiste de l’agence Linkweb vous répondra dans les meilleurs délais.
                        </h4>
                    </section>
                    
                    <section className="flex-wrap flex w-full mx-auto py-2 my-2 flex-col md:flex-row ">
                        <div className=" font-bold	w-full md:w-1/2 px-12 py-24 flex justify-center items-center flex-col min-h-400 text-center text-white bg-bleu" data-aos="zoom-in">
                            <h3 className="text-2xl century pb-6" ><span className="text-black">/</span>L’AGENCE LINKWEB À AGEN</h3>
                            <div className="flex item-center pt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1408 1792" width="20px"><path d="M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5t-57.5-12.5-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5t-215.5-264.5q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47.5-12.5-57.5-3.5-52.5q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z" fill="#ffffff"></path></svg>
                                
                                <a className="pl-3 text-xl century" href="tel:0533950030">0533950030</a>
                            </div>
                            <div className="flex item-center pt-6">
                                <svg viewBox="0 0 1792 1792" width="20px"><path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" fill="#ffffff"></path></svg>
                                
                                <a className="pl-3  text-xl century" href="mailto:contact@linkweb.fr">contact@linkweb.fr</a>
                            </div>
                            <div className="flex item-center pt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1792" width="20px"><path d="M1408 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" fill="#ffffff"></path></svg>
                                
                                <p className="pl-3 text-lg century leading-none">10 rue Albert Ferrasse <br />
                                    47550 BOE</p>
                            </div>
                            <div className="flex item-center pt-6">
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
                        <div className="font-bold w-full md:w-1/2 px-6 py-24 flex justify-center items-center flex-col min-h-400 text-center text-white bg-black" data-aos="zoom-in" data-aos-delay="200">
                            <h3 className="text-2xl century pb-6" ><span className="text-bleu">/</span>L’AGENCE LINKWEB À TOULOUSE</h3>
                            <div className="flex item-center pt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1408 1792" width="20px"><path d="M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5t-57.5-12.5-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5t-215.5-264.5q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47.5-12.5-57.5-3.5-52.5q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z" fill="#ffffff"></path></svg>
                                
                                <a className="pl-3 text-xl century" href="tel:0533950030">0533950030</a>
                            </div>
                            <div className="flex item-center pt-6">
                                <svg viewBox="0 0 1792 1792" width="20px"><path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" fill="#ffffff"></path></svg>
                                
                                <a className="pl-3  text-xl century" href="mailto:contact@linkweb.fr">contact@linkweb.fr</a>
                            </div>
                            <div className="flex item-center pt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1792" width="20px"><path d="M1408 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" fill="#ffffff"></path></svg>
                                
                                <p className="pl-3 text-lg century leading-none">44 Rue de Bayard <br />
                                    31000 TOULOUSE</p>
                            </div>
                            <div className="flex item-center pt-6">
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
                    
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h3 data-aos='fade-right' className="text-center text-3xl century">
                            Notre agence est taillée pour <span className="text-bleu">votre projet web</span>
                        </h3>
                        <hr className="blue"></hr>

                    </section>
                    
                    <ContactForm />       
                    
                    
                </PageTransition>
            </Layout>
        );
    }
};



export default ContactAgenceWebToulouse;




