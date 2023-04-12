import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";

import Accordion from '../components/accordion';
import RoundButtonPages from "../components/roundButtonPages";
import RoundButtonPagesMail from "../components/roundButtonPagesMail";
import Modalagenceseo from "../components/modalboxes";
import Tiles from '../components/gallery/tiles';

// import Bg from "../images/background-referencement.jpg";
import Bg from "../images/agence-seo-toulouse.jpg";
// import bgDev from '../images/bg-dev.jpg';
import mac from "../images/mac-linkweb.jpg";
import referencement from "../images/agence-referencement-toulouse.jpg";
import agencereferencement from "../images/referencement-toulouse.jpg";

import scroll from "../images/motiontest.svg";
import ideo from "../images/ideo-arrosage-avis.png";
import cerem from "../images/cerem-avis.png";
import hontans from "../images/hontans-avis.png";
import "../scss/info.scss";
import '../scss/global.scss';

class ReferencementToulouse extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence SEO Toulouse - Optimisez votre référencement à Toulouse - Linkweb"
                    description="Agence SEO Toulouse : Définition stratégique et mise en application pour votre projet de référencement naturel ou sponsorisé Google Ads - Suivi régulier."
                    keywords={[`Référencement Agen`, `Référencement Toulouse`, `Agence de Référencement Agen`, `Agence de Référencement Toulouse`, `Référencement Google`]}
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
                <section className="flex items-center w-full mx-auto pb-0 mt-40 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + Bg + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                    <div className="max-w-6xl mx-auto lg:mx-56 pt-2 lg:w-2/5 w-full flex-col items-end">
                        <div className="mt-12 -mb-24 w-full flex flex-col items-center lg:items-start">
                            <div className="w-full  text-3xl text-center font-bold text-white century">4.6/5</div>
                            <p className="w-full  text-sm text-center font-bold text-white century -mt-2">Avis Google</p>
                            <div className="w-full -mt-8">
                                <svg className="mx-auto block" width="100px" viewBox="0 0 100 125">
                                    <path fill="#FFFFFF" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                    <path fill="#FFFFFF" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                    <path fill="#FFFFFF" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                    <path fill="#FFFFFF" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                    <path fill="#FFFFFF" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z   M89.8,54.7c0.1-0.1,0.4,0,0.4,0l4.2,2.2l-0.8-4.7c0-0.2,0-0.3,0.1-0.4l3.4-3.3l-4.7-0.7c-0.2,0-0.3-0.1-0.4-0.3l-2.1-4.3L89.8,54.7  z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full lg:w-full flex justify-center lg:justify-center">
                            <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Agence SEO Toulouse - Référencement</h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Devenez visible sur Google avec notre accompagnement SEO sur-mesure</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-full flex flex-col lg:flex-row justify-center pb-24 lg:justify-center mx-auto" style={{ maxWidth: '460px' }}>
                            <RoundButtonPages url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonPagesMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                    <div className="w-full flex items-end justify-center mx-auto block pb-16">
                        <img src={scroll} alt="Scroll" width="60px" />
                    </div>
                </section>
                <nav aria-label="breadcrumbs" className="w-full bg-bleu century py-2 pl-0 md:pl-48">
                        <Link to="/" className="px-4 text-md lg:text-lg text-white hover:text-black">Agence web</Link> <span className=" text-lg text-black"> / </span>
                        <span className="px-4 text-md lg:text-lg text-white"> Agence SEO Toulouse</span>

                    </nav>
                    
                <section className="phototext">
                    <section className="bg-white sidetitle mt-16 mb-10">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Développez le trafic de votre site internet grâce au référencement naturel</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" style={{marginRight:'40px'}}/>
                                    <br />
                                    <h3 /*data-aos='fade-left'*/ className="text-md text-black century pb-0">L’agence SEO Linkweb à Toulouse définit votre stratégie de référencement naturel pour vous positionner dans les premiers résultats de Google.</h3>
                                </div>
                        </section>
                    </section>

                    <section className="w-full mb-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Linkweb" />
                        </div>
                        <div className="w-full lg:w-2/3 mx-auto justify-center items-center flex flex-col">
                        <div className="w-full flex flex-col lg:flex-row ">
                            <div className="w-full flex-col md:flex-row flex px-auto century">
                                <div className="blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                    <p>1</p>
                                </div>
                                <div className="w-full px-6 lg:px-6 flex flex-col century justify-center" style={{ maxWidth: '1000px' }}>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>OBTENEZ DE LA VISIBILITÉ EN LIGNE
                                            </h3>
                                    <p className="w-full text-md century pb-4 text-justify">Le <strong>référencement naturel SEO</strong> est un moyen pour les professionnels d’obtenir de la <strong>visibilité en ligne</strong>. En déployant une <strong>stratégie SEO</strong>, vous vous donnez toutes les chances d’acquérir de nouvelles parts de marché grâce au Web en exploitant le potentiel d’un <strong>moteur comme Google</strong>.
                                    </p>                                
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>2</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col century justify-center">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>DÉVELOPPEZ DU TRAFIC QUALIFIÉ
                                                </h3>
                                    <p className="w-full century pb-4 text-justify">Pour obtenir du trafic qualifié sur son <strong>site internet</strong>, il faut démultiplier sa présence dans les meilleurs résultats des moteurs de recherche pour des requêtes à fort potentiel. Pour cela, notre <Link to="/" className="text-bleu hover:text-black font-bold">agence web à Toulouse</Link> sélectionne les mots-clés qui vous permettront d’atteindre des prospects qualifiés selon vos objectifs.</p>
                                </div>
                            </div>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row">
                                <div className="w-full my-10 flex flex-col lg:flex-row">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>3</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col century justify-center">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>RENFORCEZ VOTRE IMAGE DE MARQUE
                                                </h3>
                                    <p className="century pb-4 text-justify">Développez une image d’expert dans votre domaine grâce à la <strong>création de contenu de qualité</strong> et à haute valeur ajoutée. Répondez aux besoins de vos utilisateurs cibles et devenez une référence dans votre secteur d’activité sur le Web, tout en maximisant vos positions sur Google.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full my-10 flex-col md:flex-row flex px-auto">
                                <div className="blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p>4</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center century">
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-justify" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>BOOSTEZ VOTRE CHIFFRE D'AFFAIRES
                                                </h3>
                                    <p className="century pb-4 text-justify">Atteignez de <strong>nouveaux prospects</strong> en générant du trafic auprès d'utilisateurs qualifiés qui présentent un intérêt direct pour votre offre de produits et services. Élargissez votre notoriété grâce au canal de trafic organique et fidélisez vos consommateurs pour qu’ils deviennent de vrais clients.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>
                </section>
                <section className="w-full flex my-16 flex-col items-center lg:flex-row text-white bg-black century text-center mx-auto px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12">
                        <h2 className="text-3xl font-bold md:text-4xl leading-none lg:text-left">Vous souhaitez développer votre stratégie de référencement à Toulouse ? Demandez un devis gratuit !</h2>
                        <br/>
                        <p className="text-md lg:text-justify">Nos experts étudieront votre demande afin de vous fournir un devis détaillé pour la <strong>mise en place de votre stratégie SEO</strong>. Nous devons connaître vos besoins afin de définir les contours de votre projet. Vous souhaitez obtenir un <strong>devis gratuit</strong> ? Contactez-nous par téléphone ou demandez à être recontacté via le formulaire de contact de notre site web.</p>
                    </div>
                    <div className="w-full mx-auto flex flex-col items-center justify-center lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <RoundButton url="tel:0533950030" color="bleu" colortext="white" text="05 33 95 00 30" />
                        <RoundButton url="/contact-agence-web-toulouse/" color="bleu" colortext="white" text="Être rappelé" />
                    </div>
                </section>
                <section className="bg-white sidetitle mt-16 mb-10">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Atteignez vos objectifs grâce à un accompagnement sur-mesure par une agence SEO spécialisée</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                    <br />
                                </div>
                        </section>
                        <Modalagenceseo/>
                        <section className="w-full my-10 flex flex-col lg:flex-row justify-center">
                            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/2 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                                <h3 className="text-3xl titrehover text-center century leading-tight px-6">Qu’est-ce que le SEO et comment ça marche ? <hr className="border-solid mt-3 mx-auto border-2 w-1/6 border-bleu" style={{marginLeft:'auto', marginRight:'auto'}}/></h3>
                                <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                                    Le <Link to="/referencement-toulouse/quest-ce-que-le-referencement-naturel/" className="text-bleu hover:text-white font-bold">référencement naturel SEO</Link> (Search Engine Optimization) est un processus visant à optimiser un site internet pour maximiser son classement par les moteurs de recherche sur des requêtes opportunes. Il s’articule autour de 3 facteurs clés, à savoir :
                                    <br/><br/>
                                    <ul>
                                    <li><a href="#contenu" className="text-center text-base hover:text-white font-bold text-bleu"><h4>➜ Un contenu de qualité</h4></a></li>
                                    <li><a href="#optimisation" className="text-center text-base hover:text-white font-bold text-bleu"><h4>➜ Une optimisation technique performante</h4></a></li>
                                    <li><a href="#netlinking" className="text-center text-base hover:text-white font-bold text-bleu"><h4>➜ Un netlinking efficace</h4></a></li>
                                    </ul>

                                    
                                </p>
                            </div>
                            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/2 text-white" style={{ backgroundImage: 'url(' + agencereferencement + ')' }}>
                                <h3 className="text-3xl titrehover text-center century leading-tight px-6">Linkweb positionne efficacement votre site web en tête des résultats des moteurs de recherche <hr className="border-solid mt-3 mx-auto border-2 w-1/6 border-bleu" style={{marginLeft:'auto', marginRight:'auto'}}/></h3>
                                <p className="text century text-lg lg:text-sm xl:text-lg z-50">
                                    Notre <strong className="font-normal">agence de référencement</strong> met en place la meilleure stratégie de SEO pour votre site web. Linkweb, c’est près de 15 ans d’expertise dans les <strong className="font-normal">problématiques du SEO</strong>. À partir d’un <Link to="/referencement-toulouse/pourquoi-faire-un-audit-seo/" className="text-bleu hover:text-white font-bold">audit SEO</Link> de votre site, mais aussi de votre environnement concurrentiel, nous déterminons les opportunités qui vous permettront d’atteindre vos objectifs à court, moyen et long termes.
                                    <br/><br/>
                                    <ul>
                                        <li><a href="#concurrence" className="text-center text-base hover:text-white font-bold text-bleu"><h4>➜ Notre <strong>agence SEO à Toulouse</strong> analyse votre environnement concurrentiel.</h4></a></li>
                                        <li><a href="#production" className="text-center text-base hover:text-white font-bold text-bleu"><h4>➜ Nous sommes spécialisés dans la <strong>production de contenus SEO</strong>.</h4></a></li>
                                        <li><a href="#popularite" className="text-center text-base hover:text-white font-bold text-bleu"><h4>➜ Nous développons votre <strong>popularité en ligne</strong> de manière maîtrisée.</h4></a></li>
                                    </ul>
                                </p>
                            </div>
                        </section>
                </section>
                <section className="bg-darkgrey sidetitle py-10">
                    <section className="w-full lg:w-2/3 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
                        <h2 className="century text-center lg:text-left text-white text-3xl md:text-5xl leading-none">Que fait <span className="text-bleu">notre agence</span> pour <span className="text-bleu">votre référencement</span> SEO à Toulouse ?</h2>
                        <br />
                        <div className="line-title my-4 ">
                            <br />
                            <hr className="w-1/2 border-bleu lg:w-1/12" />
                            <br />
                            <h3 /*data-aos='fade-left'*/ className="text-xl text-white century pb-0">En tant qu’agence de référencement spécialisée dans le SEO, Linkweb s’engage à produire un travail de qualité pour vous offrir des performances optimales à travers nos prestations SEO et SEA.</h3>
                        </div>
                    </section>
                    <section className="flex justify-center flex-col items-center">
                        <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 text-white century text-center lg:text-left">
                                <svg width="50px" fill="#ffffff" className="lg:mx-0 mx-auto block" viewBox="0 0 26.458333 33.0729175"><g transform="translate(0,-270.54165)"><path d="m 5.8714289,272.12915 c -1.8514508,0 -3.3578869,1.50883 -3.3578869,3.36322 0,1.85439 1.5064361,3.36271 3.3578869,3.36271 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36271 0,-0.93619 -0.3850002,-1.78375 -1.0034311,-2.39407 l -2.1329844,3.56079 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869546,-1.24151 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35362 C 7.272958,272.36508 6.5998223,272.12917 5.8714289,272.12917 Z m 5.9146431,2.06968 a 0.25889664,0.25930793 0 0 0 0.02674,0.51792 h 11.867626 a 0.25855123,0.25896196 0 1 0 0,-0.51792 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02674,0 z m 0.02674,2.06866 a 0.25836408,0.25877452 0 1 0 0,0.51741 h 5.668955 a 0.25836408,0.25877452 0 1 0 0,-0.51741 z m -5.9413818,4.14035 c -1.8514508,0 -3.3578869,1.50884 -3.3578869,3.36323 0,1.85439 1.5064361,3.36271 3.3578869,3.36271 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36271 0,-0.9362 -0.3850002,-1.78375 -1.0034311,-2.39407 l -2.1329844,3.56079 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869546,-1.24151 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35362 c -0.5508481,-0.39625 -1.2239838,-0.63216 -1.9523772,-0.63216 z m 5.9156518,2.06969 a 0.25832484,0.25873522 0 0 0 -10e-4,5.1e-4 0.2587086,0.25911959 0 0 0 0.02674,0.51741 h 11.867629 a 0.25836408,0.25877452 0 1 0 0,-0.51741 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02573,-5.1e-4 z m 0.02573,2.06866 a 0.25835919,0.25876963 0 0 0 0,0.51741 h 5.668957 a 0.25835919,0.25876963 0 0 0 0,-0.51741 z m -5.9413807,4.14035 c -1.8514507,0 -3.3578869,1.50884 -3.3578869,3.36322 0,1.8544 1.5064362,3.36272 3.3578869,3.36272 1.8514497,0 3.3578868,-1.50832 3.3578868,-3.36272 0,-0.93618 -0.3850002,-1.78374 -1.0034311,-2.39407 l -2.1329844,3.5608 a 0.25832484,0.25873522 0 0 1 -0.4005653,0.0536 l -1.2869543,-1.2415 a 0.25892219,0.25933351 0 1 1 0.3581881,-0.37442 l 1.0543845,1.01816 2.0058532,-3.35363 C 7.2729607,288.9225 6.599825,288.68658 5.8714316,288.68658 Z m 5.9146427,2.07018 a 0.2587086,0.25911959 0 0 0 0.02674,0.51742 H 23.68044 a 0.25836408,0.25877452 0 1 0 0,-0.51742 H 11.81281 a 0.25832484,0.25873522 0 0 0 -0.02674,0 z m 0.02674,2.06817 a 0.25836408,0.25877452 0 1 0 0,0.51741 h 5.668956 a 0.25836408,0.25877452 0 1 0 0,-0.51741 z" /></g></svg>
                                <h4 className="font-bold century"><span className="font-bold">Optimisation technique</span></h4>
                                <p><strong>Optimisation technique</strong> de votre site web, de l'<strong>arborescence SEO</strong> au balisage sémantique de vos pages, pour faciliter la lisibilité et la compréhension par les moteurs de recherche.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                            <svg width="50px" fill="#FFFFFF" className="lg:mx-0 mx-auto block" viewBox="0 0 700 700"><g><path d="m313.59 209.43c-22.645 0-45.273 8.6328-62.527 25.887l-72.918 72.871c-34.504 34.504-34.504 90.594 0 125.1l6.8828 6.9258c34.504 34.504 90.59 34.508 125.1 0l53.094-53.137-16.496-16.5-53.094 53.141c-25.652 25.648-66.453 25.648-92.102 0l-6.8828-6.9258c-25.652-25.648-25.652-66.449 0-92.105l72.918-72.871c25.652-25.652 66.406-25.648 92.059 0l6.9258 6.8828c9.1836 9.1875 15 20.262 17.59 31.949l22.785-5.0156c-3.5234-15.887-11.527-31.074-23.879-43.43l-6.9258-6.8828c-17.254-17.254-39.883-25.887-62.527-25.887z"/><path d="m429.07 93.906c-22.645 0-45.273 8.6328-62.527 25.887l-53.504 53.504 16.496 16.496 53.504-53.504c25.652-25.648 66.453-25.648 92.102 0l6.8828 6.9258c25.652 25.652 25.652 66.449 0 92.105l-72.918 72.871c-25.652 25.652-66.406 25.652-92.059 0l-6.9258-6.8828c-9.3906-9.3906-15.273-20.789-17.773-32.766l-22.832 4.7852c3.3984 16.285 11.473 31.844 24.109 44.477l6.9258 6.8828c34.504 34.508 90.547 34.508 125.05 0l72.918-72.871c34.504-34.504 34.504-90.59 0-125.1l-6.8828-6.9258c-17.254-17.254-39.926-25.887-62.57-25.887z"/></g></svg>
                                <h4 className="font-bold century mt-4"><span className="font-bold">Netlinking</span></h4>
                                <p>Inscription de <strong>votre site internet</strong> sur des annuaires et <strong>sites à forte autorité</strong> pour permettre à <strong>vos noms de domaine</strong> d'obtenir des <strong>backlinks de qualité</strong> grâce au netlinking.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                            <svg width="40px" fill="#ffffff" className="lg:mx-0 mx-auto block" viewBox="0 0 1200 1200"><g><path d="m920.4 386.4c-4.8008 0-8.3984 3.6016-8.3984 8.3984v158.4c-1.1992 4.8008 2.3984 9.6016 8.3984 9.6016 4.8008 1.1992 9.6016-2.3984 9.6016-8.3984v-2.3984-157.2c0-4.8008-3.6016-8.4023-9.6016-8.4023 1.2031 0 0 0 0 0z"/>
                                    <path d="m920.4 888c-4.8008 0-8.3984 3.6016-8.3984 8.3984v147.6c0 58.801-48 106.8-106.8 106.8h-626.4c-58.801 1.1992-106.8-46.801-106.8-105.6v-890.4c0-58.801 48-106.8 106.8-106.8h427.2c-7.1992 9.6016-12 21.602-10.801 33.602v207.6c1.1992 27.602 24 50.398 52.801 49.199h264v4.8008c-1.1992 4.8008 2.3984 9.6016 8.3984 9.6016 4.8008 1.1992 9.6016-2.3984 9.6016-8.3984v-2.3984-10.801-1.1992-1.1992-2.3984c-1.1992-6-3.6016-10.801-7.1992-14.398l-270-273.61c-4.8008-6-13.199-8.3984-20.398-8.3984h-453.6c-68.402 0-124.8 56.398-124.8 124.8v890.4c0 69.602 56.398 124.8 124.8 124.8h626.4c69.602 0 124.8-56.398 124.8-124.8v-148.8c0-4.7969-3.6016-8.3984-9.6016-8.3984 1.2031 0 0 0 0 0zm-15.598-567.6h-256.8c-18 1.1992-33.602-13.199-34.801-31.199v-207.6c-2.3984-15.602 8.3984-28.801 24-31.199h2.3984s1.1992 0 1.1992 1.1992z"/><path d="m630 795.6h-435.6c-4.8008 1.1992-8.3984 4.8008-8.3984 9.6016 0 3.6016 3.6016 7.1992 8.3984 8.3984h435.6c4.8008 1.1992 9.6016-2.3984 9.6016-8.3984s-2.3984-9.6016-8.3984-9.6016h-1.2031z"/><path d="m811.2 645.6c0-4.8008-3.6016-8.3984-8.3984-8.3984l-608.4-0.003906c-4.8008 1.1992-8.3984 4.8008-8.3984 9.6016 0 3.6016 3.6016 7.1992 8.3984 8.3984h607.2c4.8008 0 9.6016-3.5977 9.6016-9.5977v0z"/><path d="m801.6 478.8h-607.2c-4.8008 1.1992-8.3984 4.8008-8.3984 9.6016 0 3.6016 3.6016 7.1992 8.3984 8.3984h607.2c4.8008 1.1992 9.6016-2.3984 9.6016-8.3984 1.1992-4.8008-2.3984-9.6016-8.3984-9.6016h-1.1992z"/><path d="m194.4 954c-4.8008 1.1992-8.3984 4.8008-8.3984 9.6016 0 3.6016 3.6016 7.1992 8.3984 8.3984h198c4.8008 1.1992 9.6016-2.3984 9.6016-8.3984 1.1992-4.8008-2.3984-9.6016-8.3984-9.6016h-2.3984z"/><path d="m630 954h-184.8c-4.8008 1.1992-8.3984 4.8008-8.3984 9.6016 0 3.6016 3.6016 7.1992 8.3984 8.3984h184.8c4.8008 1.1992 9.6016-2.3984 9.6016-8.3984 1.1992-4.8008-2.3984-9.6016-8.3984-9.6016h-1.2031z"/><path d="m481.2 328.8c0-4.8008-3.6016-8.3984-8.3984-8.3984l-291.6-0.003906c-4.8008 1.1992-8.3984 4.8008-8.3984 9.6016 0 3.6016 3.6016 7.1992 8.3984 8.3984h290.4c4.8008 0 9.6016-3.5977 9.6016-9.5977v0z"/><path d="m1129.2 518.4c-10.801-10.801-25.199-16.801-39.602-16.801-12 0-24 4.8008-33.602 12-9.6016 0-19.199 3.6016-26.398 10.801l-319.2 319.2c-4.8008 4.8008-7.1992 9.6016-8.3984 15.602-1.1992 1.1992-1.1992 2.3984-1.1992 3.6016l-28.801 104.39c-1.1992 3.6016 0 6 2.3984 8.3984 1.1992 1.1992 3.6016 2.3984 6 2.3984h2.3984l50.398-13.199c4.8008-1.1992 7.1992-7.1992 4.8008-12-1.1992-3.6016-6-6-9.6016-6l-36 9.6016 16.801-62.398 45.602 45.602c7.1992 7.1992 15.602 10.801 25.199 10.801 9.6016 0 19.199-3.6016 25.199-10.801l319.2-319.2c7.1992-8.3984 12-19.199 9.6016-30 18.004-21.602 15.605-52.801-4.7969-72.004zm-39.598 1.2031c10.801 0 20.398 3.6016 27.602 10.801 9.6016 9.6016 13.199 24 9.6016 37.199l-48-46.801c4.7969 0 7.1953-1.1992 10.797-1.1992zm24 88.797-319.2 319.2c-7.1992 7.1992-18 7.1992-25.199 0l-45.602-46.801c-3.6016-3.6016-4.8008-8.3984-4.8008-12 0-4.8008 1.1992-9.6016 4.8008-13.199l319.2-319.2c7.1992-7.1992 18-7.1992 25.199 0l45.602 46.801c6.0039 7.1953 6.0039 17.996 0.003906 25.195z"/><path d="m1059.6 576-291.6 291.6c-3.6016 3.6016-3.6016 9.6016 0 13.199 3.6016 3.6016 9.6016 3.6016 13.199 0l291.6-291.6c3.6016-3.6016 3.6016-9.6016 0-12-3.6016-3.5977-8.4023-3.5977-13.199-1.1992z"/></g></svg>
                                <h4 className="font-bold century mt-6"><span className="font-bold">Création de contenu SEO</span></h4>
                                <p>Conception et rédaction du contenu des pages de votre site en tenant compte des attentes de l'utilisateur et des <strong>algorithmes</strong> des moteurs de recherche.</p>
                            </div>
                        </div>
                        <div className="w-full text-white flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                            <div className="w-full svgtransform -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125" fill="#ffffff"><g><g><g><path d="M82.3,81.7c-0.8,0-1.5-0.7-1.5-1.5c0-17-13.8-30.9-30.9-30.9c-17,0-30.9,13.8-30.9,30.9     c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5c0-18.6,15.1-33.8,33.8-33.8s33.8,15.1,33.8,33.8C83.8,81.1,83.1,81.7,82.3,81.7z" /></g><g><path d="M1.5,67.4c-0.1,0-0.3,0-0.4-0.1c-0.8-0.2-1.2-1-1-1.8c1-3.5,2.5-6.9,4.2-10.2c1-1.8,0.6-4.1-0.8-5.5     c-3-3-3-7.8,0-10.7l5.4-5.4c1.4-1.4,3.3-2.2,5.4-2.2c2,0,3.9,0.8,5.3,2.2c0,0,0,0,0,0c1.5,1.5,3.7,1.8,5.5,0.8     c3.2-1.8,6.7-3.2,10.2-4.2c1.9-0.6,3.3-2.4,3.3-4.5c0-4.2,3.4-7.6,7.6-7.6h7.6c4.2,0,7.6,3.4,7.6,7.6c0,2.1,1.4,3.9,3.3,4.5     c3.5,1,6.9,2.5,10.2,4.2c1.8,1,4.1,0.6,5.5-0.8c0,0,0,0,0,0c1.4-1.4,3.3-2.2,5.3-2.2c2,0,3.9,0.8,5.4,2.2l5.4,5.4     c1.4,1.4,2.2,3.3,2.2,5.4s-0.8,3.9-2.2,5.4c-1.5,1.5-1.8,3.7-0.8,5.5c1.8,3.2,3.2,6.6,4.2,10.2c0.2,0.8-0.2,1.6-1,1.8     c-0.8,0.2-1.6-0.2-1.8-1c-1-3.3-2.3-6.6-4-9.6c-1.6-2.9-1.1-6.6,1.3-9c1.8-1.8,1.8-4.8,0-6.6l-5.4-5.4c-0.9-0.9-2.1-1.4-3.3-1.4     c-1.3,0-2.4,0.5-3.3,1.4c0,0,0,0,0,0c-2.4,2.3-6,2.9-8.9,1.3c-3.1-1.7-6.3-3-9.6-4c-3.2-0.9-5.4-3.9-5.4-7.3     c0-2.6-2.1-4.7-4.7-4.7h-7.6c-2.6,0-4.7,2.1-4.7,4.7c0,3.3-2.2,6.3-5.4,7.3c-3.3,1-6.5,2.3-9.6,4c-2.9,1.6-6.6,1.1-8.9-1.3     c0,0,0,0,0,0c-0.9-0.9-2.1-1.4-3.3-1.4c-1.3,0-2.4,0.5-3.3,1.4l-5.4,5.4c-1.8,1.8-1.8,4.8,0,6.6c2.4,2.4,2.9,6.1,1.3,9     c-1.7,3.1-3,6.3-4,9.6C2.7,67,2.1,67.4,1.5,67.4z" /></g></g><g><path d="M98.5,81.7H1.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h97.1c0.8,0,1.5,0.7,1.5,1.5S99.3,81.7,98.5,81.7z    " /></g></g></svg>
                                <h4 className="font-bold century"><span className="font-bold">Création et configuration de votre fiche My Business</span></h4>
                                <p>Nous créons et paramétrons votre <strong>profil d’entreprise sur <Link to="/referencement-toulouse/comment-apparaitre-en-premier-sur-google-my-business/" className="text-bleu hover:text-white font-bold">Google My Business</Link></strong> pour <strong>obtenir des contacts</strong> proches de chez vous.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" fill="#FFFFFF" viewBox="0 0 700 700"><g><path d="m560 291.67h46.668c6.4375 0 11.664-5.2266 11.664-11.668s-5.2266-11.668-11.664-11.668h-46.668c-6.4414 0-11.668 5.2266-11.668 11.668s5.2266 11.668 11.668 11.668z" fill-rule="evenodd"/><path d="m568.25 218.25 46.664-46.668c4.5508-4.5508 4.5508-11.945 0-16.496-4.5508-4.5508-11.945-4.5508-16.496 0l-46.668 46.664c-4.5469 4.5508-4.5469 11.949 0 16.5 4.5508 4.5469 11.949 4.5469 16.5 0z" fill-rule="evenodd"/><path d="m551.75 358.25 46.668 46.664c4.5508 4.5508 11.945 4.5508 16.496 0 4.5508-4.5508 4.5508-11.945 0-16.496l-46.664-46.668c-4.5508-4.5469-11.949-4.5469-16.5 0-4.5469 4.5508-4.5469 11.949 0 16.5z" fill-rule="evenodd"/><path d="m245 431.67h11.668c9.2852 0 18.188-3.6875 24.742-10.258 5.1562-5.1445 8.543-11.746 9.7539-18.84l114.31 76.219c11.445 15.223 24.648 22.879 37.855 22.879 14.828 0 29.656-9.6484 41.977-28.816 23.242-36.168 39.691-108.93 39.691-192.85s-16.449-156.68-39.691-192.85c-12.32-19.168-27.148-28.816-41.977-28.816-13.207 0-26.41 7.6562-37.855 22.879l-175.68 117.12h-89.797c-15.469 0-30.309 6.1484-41.254 17.082-10.93 10.941-17.078 25.781-17.078 41.254v46.664c0 15.473 6.1484 30.312 17.078 41.254 10.945 10.934 25.785 17.082 41.254 17.082h11.668v105c0 19.332 15.668 35 35 35h23.332c19.332 0 35-15.668 35-35zm142.6-95.098c4.1523 43.879 13.043 81.715 25.023 108.06 5.1133 11.246 10.699 20.277 16.836 26.402 4.4336 4.4336 8.9492 7.3008 13.871 7.3008 4.9258 0 9.4414-2.8672 13.871-7.3008 6.1367-6.125 11.727-15.156 16.836-26.402 16.883-37.125 27.629-97.078 27.629-164.63s-10.746-127.5-27.629-164.63c-5.1094-11.246-10.699-20.277-16.836-26.402-4.4297-4.4336-8.9453-7.3008-13.871-7.3008-4.9219 0-9.4375 2.8672-13.871 7.3008-6.1367 6.125-11.723 15.156-16.836 26.402-11.98 26.344-20.871 64.18-25.023 108.06 25.305 6.3789 44.066 29.305 44.066 56.57s-18.762 50.191-44.066 56.57zm-212.6 25.098h46.668v105c0 6.4375-5.2266 11.664-11.668 11.664h-23.332c-6.4414 0-11.668-5.2266-11.668-11.664zm209.44-238.39-139.44 92.961v127.52l139.44 92.961c-13.906-39.516-22.773-95.105-22.773-156.72s8.8672-117.2 22.773-156.72zm-139.44 285.05h11.668c3.0898 0 6.0664-1.2227 8.2461-3.418 2.1953-2.1797 3.418-5.1562 3.418-8.2461v-9.3125l-23.332-15.551zm-23.332-186.66v116.66h-81.668c-9.2852 0-18.188-3.6836-24.746-10.254-6.5664-6.5547-10.254-15.457-10.254-24.746v-46.664c0-9.2891 3.6875-18.191 10.254-24.746 6.5586-6.5703 15.461-10.254 24.746-10.254zm164.18 25.641c-0.55859 10.652-0.85156 21.562-0.85156 32.691s0.29297 22.039 0.85156 32.691c13.148-5.043 22.48-17.781 22.48-32.691s-9.332-27.648-22.48-32.691z" fill-rule="evenodd"/></g></svg>
                                <h4 className="font-bold century"><span className="font-bold">Définition et configuration de campagnes Google Ads</span></h4>
                                <p>Définition de votre <strong>stratégie de publicité</strong>, ajout et <strong>configuration de vos annonces et groupes d’annonces</strong> sur <strong>Google Ads</strong>.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><g><path fill="#ffffff" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   " /><path fill="#ffffff" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z" /><g><path fill="#ffffff" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z" /><rect x="72.041" y="56.851" width="0.312" height="5.159" /></g><path fill="#ffffff" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z" /><path fill="#ffffff" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z" /></g></svg>
                                <h4 className="-mt-3 font-bold century"><span className="font-bold">Expérience Utilisateur</span></h4>
                                <p>Maximisation la <strong>vitesse de chargement de votre site web</strong>, adaptation pour <strong>tous les supports (responsive design)</strong> et définition de <strong>parcours de navigation</strong>.</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="bg-white sidetitle mt-16 mb-10">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Vous êtes à la recherche d’une agence SEO à Toulouse ?</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                    <br />
                                    <h3 /*data-aos='fade-left'*/ className="text-md text-black century pb-0">Ils ont fait appel aux services de notre agence de référencement Google à Toulouse et sont satisfaits.</h3>
                                </div>
                        </section>
                    <section className="flex flex-col md:flex-row flex-wrap justify-center">
                            <div className="w-full sm:w-1/2 lg:w-1/4 mx-0 md:mx-3 border-bleu border-solid border-2 px-12 century bg-bleu text-black py-10">
                                        <div className="flex flex-row">
                                            <img width="50px" height="50px" src={ideo} alt="Avis Google" style={{height:'100%'}}/>
                                            <svg className="-my-6" width="100px" viewBox="0 0 100 125">
                                                <path fill="#000000" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                                <path fill="#000000" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                                <path fill="#000000" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                                <path fill="#000000" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                                <path fill="#000000" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                            </svg>
                                        </div>
                                <h4>IDÉO ARROSAGE</h4>
                                <br/>
                                <p>
                                    Je suis très satisfait du site Ideo-arrosage que <strong>Linkweb</strong> a réalisé pour nous, le personnel est très réactif et à l'écoute, de la création jusqu'au suivi quotidien.
                                </p>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/4 mx-0 md:mx-3 border-bleu border-solid border-2 px-12 century bg-bleu text-black py-10">
                                        <div className="flex flex-row">
                                            <img width="50px" height="50px" src={cerem} alt="Avis Google" style={{height:'100%'}}/>
                                            <svg className="-my-6" width="100px" viewBox="0 0 100 125">
                                                <path fill="#000000" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                                <path fill="#000000" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                                <path fill="#000000" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                                <path fill="#000000" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                                <path fill="#000000" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                            </svg>
                                        </div>
                                <h4>CEREM</h4>
                                <br/>
                                <p>
                                    Une équipe dynamique et sympathique. Anthony s'occupe du suivi de notre site. Il est à l’écoute et très réactif. Nous sommes satisfaits !
                                </p>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/4 mx-0 md:mx-3 border-bleu border-solid border-2 px-12 century bg-bleu text-black py-10">
                                        <div className="flex flex-row">
                                            <img width="50px" height="50px" src={hontans} alt="Avis Google" style={{height:'100%'}}/>
                                            <svg className="-my-6" width="100px" viewBox="0 0 100 125">
                                                <path fill="#000000" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                                <path fill="#000000" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                                <path fill="#000000" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                                <path fill="#000000" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                                <path fill="#000000" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                            </svg>
                                        </div>
                                <h4>SARL HONTANS</h4>
                                <br/>
                                <p>
                                Client depuis 4 ans, très satisfait du travail réalisé par la société <strong>Linkweb</strong>, à l'écoute, compétent, un vrai plus pour mon entreprise.
                                </p>
                            </div>
                        </section>
                    </section>                
                    <section className="max-w-6xl mx-auto flex align-center justify-center text-center mb-4">
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
                            Vous travaillez déjà avec nous ? Donnez nous votre avis !
                            </a>
                    </div>
                </section>
                <section className="bg-white sidetitle mt-16">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Ils ont fait confiance à notre agence SEO. Vous souhaitez en faire de même ?</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                    <br />
                                </div>
                        </section>
                    </section>
                <Tiles />
                <button
                            className="link flex  mt-3 items-center century text-black text-lg mx-auto block justify-center lg:text-xl"
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/contact-agence-web-toulouse/';
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792">
                            <path
                                d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                            </svg>
                            Demander un devis gratuit
                        </button>
                <section className="bg-white sidetitle mt-0 lg:mt-16">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">FAQ : nos réponses aux questions les plus courantes</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                </div>
                        </section>
                    </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="QUEL EST LE RÔLE D'UNE AGENCE SEO ?">
                                <p>Une agence SEO est une agence de communication web spécialisée dans les problématiques du SEO et dont les rôles sont multiples. En effet, l’agence SEO a particulièrement trois rôles, à savoir :
                                    <br/><br/>
                                    <ul className="list-disc">
                                        <li>un rôle de conseil : en tant qu’<strong>agence SEO</strong>, nous orientons nos clients vers la <strong>stratégie de référencement</strong> la mieux adaptée à leurs objectifs ainsi qu’à leur secteur d’activité.</li>
                                        <li>un rôle d’expert : notre rôle est également d’apporter toute l’expertise nécessaire concernant le <Link to="/referencement-toulouse/comment-fonctionne-un-moteur-de-recherche/" className="text-bleu hover:text-black font-bold">fonctionnement d’un moteur de recherche</Link> et plus largement en référencement SEO en vue de faciliter la prise de décision pour définir les  actions qui vous permettront d’<strong>améliorer votre visibilité en ligne</strong>.</li>
                                        <li>un rôle d’exécutant : enfin, nous mettons en œuvre votre plan d’actions en créant vos contenus, en <Link to="/referencement-toulouse/optimisation-interne/" className="text-bleu hover:text-black font-bold">optimisant votre site</Link>, ainsi qu’en mettant en œuvre vos actions de <strong>netlinking</strong>.</li>
                                    </ul>
                                </p>
                            </div>
                            <div label="COMBIEN COÛTE UNE PRESTATION DE RÉFÉRENCEMENT NATUREL ?">
                                <p>Le coût d’une <strong>prestation de SEO</strong> dépend de plusieurs facteurs. Tout d’abord, nous déterminons les moyens nécessaires en fonction de vos <strong>mots-clés cibles</strong>. Cela inclut le travail de production, la définition de l’<Link to="/referencement-toulouse/arborescence-seo/" className="text-bleu hover:text-black font-bold">arborescence SEO</Link>, mais aussi le travail d’<strong>optimisation technique</strong> et d’acquisition de liens. Le <strong>tarif de la prestation</strong> dépend également de l’envergure du projet. Plus celui-ci sera important et plus la charge de travail sera élevée, ce qui se reportera sur le prix.</p>
                            </div>
                            <div label="COMBIEN DE TEMPS FAUT-IL AVANT D'OBSERVER DES RÉSULTATS ?">
                                <p>Le SEO est une discipline qui s’établit sur le long terme. Il faut parfois des mois, voire des années pour obtenir une visibilité importante. Néanmoins, il est tout à fait possible d’obtenir des résultats à moyen, voire court termes. Notre travail consiste donc à cibler des opportunités qui vous permettront d’obtenir rapidement de premiers résultats, tout en asseyant votre stratégie sur le long terme en combinant l’utilisation de mots-clés de <Link to="/referencement-toulouse/longue-traine/" className="text-bleu hover:text-black font-bold">longue traine</Link> et de <Link to="/referencement-toulouse/courte-traine/" className="text-bleu hover:text-black font-bold">courte traine</Link>. Un suivi est réalisé à travers un appel mensuel ainsi qu’un <Link to="/referencement-toulouse/rapport-positionnement/" className="text-bleu hover:text-black font-bold">rapport de positionnement</Link> régulier pour vous tenir informés des nouvelles opportunités et des actions réalisées.</p>
                            </div>
                            <div label="QUELLE EST LA DIFFÉRENCE ENTRE LE SEO ET LE SEA ?">
                                <p>Le <strong>SEO et le SEA</strong> désignent deux stratégies d’acquisition de trafic qui s’appuient sur les moteurs de recherche. Néanmoins, ces deux approches se distinguent à plusieurs niveaux. En effet, le SEO nécessite du temps et permet de développer une <strong>image de marque</strong> solidement ancrée. Le <strong>référencement payant</strong> permet d’obtenir une visibilité immédiate via une <Link to="/referencement-toulouse/landing-page/" className="text-bleu hover:text-black font-bold">landing page</Link> (page d'atterrissage), mais éphémère et qui peut être particulièrement coûteuse. La <Link to="/referencement-toulouse/difference-seo-sea/" className="text-bleu hover:text-black font-bold">différence entre le SEO et le SEA</Link> n’empêche pas de miser sur la complémentarité de ces deux approches en les combinant pour maximiser ses chances de conversion.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="bg-white sidetitle mt-0 lg:mt-16 mb-10">
                        <section className="w-full lg:w-3/4 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-48">
                                <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-none">Les expertises de notre agence SEO à Toulouse</h2>
                                <br />
                                <div className="line-title my-4 ">
                                    <br />
                                    <hr className="w-1/2 border-bleu lg:w-1/12" />
                                    <br />
                                    <h3 /*data-aos='fade-left'*/ className="text-md text-black century pb-0">Linkweb vous propose de nombreuses solutions pour développer votre projet web à Toulouse.</h3>
                                </div>
                        </section>
                    <section className="w-full">
                        <div className="w-full px-4 md:px-0 lg:px-0 flex justify-center mx-auto flex-col md:flex-row lg:w-full mt-5 flex-wrap">
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform mx-auto lg:mx-4 px-2 mb-10 text-black century text-center  border-bleu border-solid border py-4">
                                <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   " /><path fill="#37cfee" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z" /><g><path fill="#37cfee" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z" /><rect x="72.041" y="56.851" width="0.312" height="5.159" /></g><path fill="#37cfee" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z" /><path fill="#37cfee" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z" /></g></svg>
                                <h4 className="font-bold century text-xl"><span className="font-bold">Création site internet</span></h4>
                                <p className="text-md">Création de site internet professionnel et développement web à Toulouse.</p>
                                <Button url="/creation-site-internet-toulouse/" text="Création site internet Toulouse" size="md" position="center"/>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform text-black mx-auto lg:mx-4 px-2 mb-10 century text-center border-bleu border-solid border py-4">
                                <svg width="50px" className="mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#37cfee" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#37cfee" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#37cfee" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>                                
                                <h4 className="font-bold century -mt-4 text-xl"><span className="font-bold">Référencement payant</span></h4>
                                <p className="text-md">Création de campagnes Google Ads et stratégies de ROI (retour sur investissement) à Toulouse.</p>
                                <Button url="/agence-adwords-47-31/" text="Agence Adwords Toulouse" size="md" position="center"/>
                            </div>
                        {/* </div>
                        <div className="w-full text-black flex flex-col md:flex-row mx-auto justify-center lg:w-full mt-5 px-4 md:px-0 lg:px-0 md:mt-10 mb-12"> */}
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform justify-center text-black px-2 mb-10 mx-auto lg:mx-4 century text-center border-bleu border-solid border py-4">
                                <svg width="50px" class="mx-auto block" fill="#37cfee" viewBox="0 0 100 125"><path d="M50.3383789,43.5737305c1.6616211,0,3.215332,0.8461914,4.2636719,2.3217773  c0.3208008,0.449707,0.9443359,0.5561523,1.3945312,0.2363281c0.4501953-0.3203125,0.5561523-0.9443359,0.2363281-1.3945312  c-1.4287109-2.0107422-3.5771484-3.1635742-5.8945312-3.1635742c-3.2249756,0-5.9712524,2.2554321-7.0158691,5.3994141H42.043457  c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1h0.859314c-0.0228882,0.260498-0.0365601,0.5240479-0.0365601,0.7910156  c0,0.3817139,0.0322876,0.7545776,0.0786133,1.1225586H42.043457c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1h1.3900146  c1.1224976,2.9710693,3.793457,5.0678711,6.9049072,5.0678711c2.3178711,0,4.4663086-1.1533203,5.8945312-3.1635742  c0.3198242-0.4501953,0.2138672-1.074707-0.2363281-1.3945312c-0.4501953-0.3188477-1.0737305-0.2138672-1.3945312,0.2363281  C53.5541992,55.1083984,52,55.9545898,50.3383789,55.9545898c-2.0101929,0-3.7658691-1.2359009-4.7171631-3.0678711h3.2454834  c0.5522461,0,1-0.4477539,1-1s-0.4477539-1-1-1h-3.9058228c-0.0593872-0.364624-0.0946655-0.7387695-0.0946655-1.1225586  c0-0.2685547,0.0203247-0.5313721,0.0498047-0.7910156h3.9506836c0.5522461,0,1-0.4477539,1-1s-0.4477539-1-1-1h-3.406189  C46.364502,44.9595947,48.2089233,43.5737305,50.3383789,43.5737305z"></path><path d="M50,36.3857422c-7.5068359,0-13.6142578,6.1074219-13.6142578,13.6142578S42.4931641,63.6142578,50,63.6142578  S63.6142578,57.5068359,63.6142578,50S57.5068359,36.3857422,50,36.3857422z M50,61.6142578  c-6.4042969,0-11.6142578-5.2099609-11.6142578-11.6142578S43.5957031,38.3857422,50,38.3857422  S61.6142578,43.5957031,61.6142578,50S56.4042969,61.6142578,50,61.6142578z"></path><path d="M50,31.1928711c-10.362793,0-18.793457,8.4370117-18.793457,18.8071289S39.637207,68.8071289,50,68.8071289  S68.793457,60.3701172,68.793457,50S60.362793,31.1928711,50,31.1928711z M50,66.8071289  c-9.2597656,0-16.793457-7.5395508-16.793457-16.8071289S40.7402344,33.1928711,50,33.1928711S66.793457,40.7324219,66.793457,50  S59.2597656,66.8071289,50,66.8071289z"></path><path d="M56.3666992,16.3364258C56.3666992,12.8422852,53.5107422,10,50,10s-6.3666992,2.8422852-6.3666992,6.3364258  S46.4892578,22.6733398,50,22.6733398S56.3666992,19.8305664,56.3666992,16.3364258z M45.6333008,16.3364258  C45.6333008,13.9453125,47.5922852,12,50,12s4.3666992,1.9453125,4.3666992,4.3364258  c0,2.3916016-1.9589844,4.3369141-4.3666992,4.3369141S45.6333008,18.7280273,45.6333008,16.3364258z"></path><path d="M80.1552734,26.2084961c-0.0048828-1.6953125-0.6694336-3.2910156-1.8710938-4.4926758  s-2.7973633-1.8662109-4.4926758-1.8710938c-0.0063477,0-0.012207,0-0.0185547,0  c-1.690918,0-3.2783203,0.6567383-4.4711914,1.8500977c-1.1977539,1.1972656-1.8544922,2.7919922-1.8496094,4.4892578  c0.0043945,1.6953125,0.6689453,3.2910156,1.8710938,4.4926758c1.2016602,1.2021484,2.7973633,1.8666992,4.4926758,1.8710938  c0.0058594,0,0.012207,0,0.0180664,0c1.690918,0,3.2783203-0.65625,4.4711914-1.8496094  C79.5029297,29.5009766,80.1601562,27.90625,80.1552734,26.2084961z M76.8911133,29.2841797  c-0.8154297,0.8154297-1.9008789,1.2636719-3.0571289,1.2636719c-0.0043945,0-0.0083008,0-0.0126953,0  c-1.1630859-0.0029297-2.2583008-0.4594727-3.0839844-1.2851562s-1.2822266-1.9208984-1.2851562-3.0839844  c-0.003418-1.1611328,0.4453125-2.2514648,1.2636719-3.0698242c0.8154297-0.8154297,1.9008789-1.2641602,3.0576172-1.2641602  c0.0039062,0,0.0083008,0,0.012207,0c1.1635742,0.003418,2.2587891,0.4599609,3.0844727,1.2851562  c0.8251953,0.8256836,1.2817383,1.9208984,1.2851562,3.0844727C78.1586914,27.3754883,77.7094727,28.4658203,76.8911133,29.2841797z  "></path><path d="M83.6635742,43.6333008c-3.4941406,0-6.3369141,2.855957-6.3369141,6.3666992s2.8427734,6.3666992,6.3369141,6.3666992  S90,53.5107422,90,50S87.1577148,43.6333008,83.6635742,43.6333008z M83.6635742,54.3666992  c-2.3916016,0-4.3369141-1.9589844-4.3369141-4.3666992s1.9453125-4.3666992,4.3369141-4.3666992  C86.0546875,45.6333008,88,47.5922852,88,50S86.0546875,54.3666992,83.6635742,54.3666992z"></path><path d="M73.8339844,67.4521484c-0.0058594,0-0.012207,0-0.0180664,0c-1.6953125,0.0043945-3.2910156,0.6689453-4.4926758,1.8710938  c-1.2021484,1.2016602-1.8666992,2.7973633-1.8710938,4.4926758c-0.0048828,1.6972656,0.6518555,3.2919922,1.8496094,4.4892578  c1.1928711,1.1933594,2.7802734,1.8500977,4.4711914,1.8500977c0.0063477,0,0.012207,0,0.0185547,0  c1.6953125-0.0048828,3.2910156-0.6694336,4.4926758-1.8710938s1.8662109-2.7973633,1.8710938-4.4926758  c0.0048828-1.6977539-0.6523438-3.2924805-1.8500977-4.4897461C77.1118164,68.1083984,75.5249023,67.4521484,73.8339844,67.4521484z   M76.8701172,76.8701172c-0.8256836,0.8251953-1.9208984,1.2817383-3.0844727,1.2851562c-0.0039062,0-0.0083008,0-0.012207,0  c-1.1567383,0-2.2421875-0.4487305-3.0576172-1.2641602c-0.8183594-0.8183594-1.2670898-1.9086914-1.2636719-3.0698242  c0.0029297-1.1630859,0.4594727-2.2583008,1.2851562-3.0839844s1.9208984-1.2822266,3.0839844-1.2851562  c0.0043945,0,0.0083008,0,0.0126953,0c1.15625,0,2.2416992,0.4482422,3.0571289,1.2636719  c0.8183594,0.8183594,1.2675781,1.9086914,1.2641602,3.0698242C78.1518555,74.9492188,77.6953125,76.0444336,76.8701172,76.8701172z  "></path><path d="M56.3666992,83.6635742c0-3.4941406-2.855957-6.3369141-6.3666992-6.3369141s-6.3666992,2.8427734-6.3666992,6.3369141  S46.4892578,90,50,90S56.3666992,87.1577148,56.3666992,83.6635742z M50,88c-2.4077148,0-4.3666992-1.9453125-4.3666992-4.3364258  c0-2.3916016,1.9589844-4.3369141,4.3666992-4.3369141s4.3666992,1.9453125,4.3666992,4.3369141  C54.3666992,86.0546875,52.4077148,88,50,88z"></path><path d="M26.184082,67.4521484c-0.0058594,0-0.012207,0-0.0180664,0c-1.690918,0-3.2783203,0.65625-4.4711914,1.8496094  c-1.1977539,1.1972656-1.8549805,2.7919922-1.8500977,4.4897461c0.0048828,1.6953125,0.6694336,3.2910156,1.8710938,4.4926758  s2.7973633,1.8662109,4.4926758,1.8710938c0.0063477,0,0.012207,0,0.0185547,0c1.690918,0,3.2783203-0.6567383,4.4711914-1.8500977  c1.1977539-1.1972656,1.8544922-2.7919922,1.8496094-4.4892578c-0.0043945-1.6953125-0.6689453-3.2910156-1.8710938-4.4926758  C29.4750977,68.1210938,27.8793945,67.456543,26.184082,67.4521484z M29.2841797,76.8911133  c-0.8154297,0.8154297-1.9008789,1.2641602-3.0576172,1.2641602c-0.0039062,0-0.0083008,0-0.012207,0  c-1.1635742-0.003418-2.2587891-0.4599609-3.0844727-1.2851562c-0.8251953-0.8256836-1.2817383-1.9208984-1.2851562-3.0844727  c-0.003418-1.1611328,0.4458008-2.2514648,1.2641602-3.0698242c0.8154297-0.8154297,1.9008789-1.2636719,3.0571289-1.2636719  c0.0043945,0,0.0083008,0,0.0126953,0c1.1630859,0.0029297,2.2583008,0.4594727,3.0839844,1.2851562  s1.2822266,1.9208984,1.2851562,3.0839844C30.5512695,74.9824219,30.1025391,76.0727539,29.2841797,76.8911133z"></path><path d="M10,50c0,3.5107422,2.8422852,6.3666992,6.3364258,6.3666992S22.6733398,53.5107422,22.6733398,50  s-2.8427734-6.3666992-6.3369141-6.3666992S10,46.4892578,10,50z M20.6733398,50  c0,2.4077148-1.9453125,4.3666992-4.3369141,4.3666992C13.9453125,54.3666992,12,52.4077148,12,50  s1.9453125-4.3666992,4.3364258-4.3666992C18.7280273,45.6333008,20.6733398,47.5922852,20.6733398,50z"></path><path d="M30.6982422,21.6948242c-1.1928711-1.1933594-2.7802734-1.8500977-4.4711914-1.8500977c-0.0063477,0-0.012207,0-0.0185547,0  c-1.6953125,0.0048828-3.2910156,0.6694336-4.4926758,1.8710938s-1.8662109,2.7973633-1.8710938,4.4926758  c-0.0048828,1.6977539,0.6523438,3.2924805,1.8500977,4.4897461c1.1933594,1.1933594,2.7802734,1.8496094,4.4711914,1.8496094  c0.0058594,0,0.012207,0,0.0180664,0c1.6953125-0.0043945,3.2910156-0.6689453,4.4926758-1.8710938  c1.2021484-1.2016602,1.8666992-2.7973633,1.8710938-4.4926758C32.5527344,24.4868164,31.8959961,22.8920898,30.6982422,21.6948242z   M29.2626953,29.2626953c-0.8256836,0.8256836-1.9208984,1.2822266-3.0839844,1.2851562c-0.0043945,0-0.0083008,0-0.0126953,0  c-1.15625,0-2.2416992-0.4482422-3.0571289-1.2636719c-0.8183594-0.8183594-1.2675781-1.9086914-1.2641602-3.0698242  c0.003418-1.1635742,0.4599609-2.2587891,1.2851562-3.0844727c0.8256836-0.8251953,1.9208984-1.2817383,3.0844727-1.2851562  c0.0039062,0,0.0083008,0,0.012207,0c1.1567383,0,2.2421875,0.4487305,3.0576172,1.2641602  c0.8183594,0.8183594,1.2670898,1.9086914,1.2636719,3.0698242C30.5449219,27.3417969,30.0883789,28.4370117,29.2626953,29.2626953z  "></path><path d="M32.7509766,21.0688477c0.1831055,0.328125,0.5234375,0.5126953,0.8740234,0.5126953  c0.1650391,0,0.3320312-0.0405273,0.4863281-0.1269531c2.0742188-1.1577148,4.2802734-2.0878906,6.5556641-2.765625  c0.5292969-0.1577148,0.8310547-0.7143555,0.6733398-1.2436523c-0.1582031-0.5302734-0.7167969-0.8320312-1.2436523-0.6733398  c-2.4165039,0.7192383-4.7578125,1.7075195-6.9599609,2.9365234C32.6542969,19.9775391,32.4814453,20.5864258,32.7509766,21.0688477  z"></path><path d="M65.4521484,21.2236328c0.1513672,0.0820312,0.3144531,0.1206055,0.4750977,0.1206055  c0.3554688,0,0.699707-0.1894531,0.8803711-0.5239258c0.2626953-0.4858398,0.0820312-1.0927734-0.4033203-1.3554688  c-2.2148438-1.1987305-4.5688477-2.1557617-6.9970703-2.8452148c-0.5317383-0.1489258-1.0839844,0.1582031-1.2348633,0.6889648  c-0.1508789,0.53125,0.1577148,1.0839844,0.6889648,1.2348633C61.1484375,19.1928711,63.3662109,20.0947266,65.4521484,21.2236328z"></path><path d="M81.1860352,40.5419922c0.1293945,0.4345703,0.5273438,0.715332,0.9580078,0.715332  c0.0947266,0,0.1904297-0.0136719,0.2856445-0.0419922c0.5292969-0.1577148,0.8310547-0.7143555,0.6733398-1.2436523  c-0.7192383-2.4165039-1.7075195-4.7578125-2.9365234-6.9599609c-0.269043-0.4829102-0.8779297-0.6552734-1.3603516-0.3857422  c-0.4824219,0.269043-0.6552734,0.8779297-0.3857422,1.3603516C79.578125,36.0605469,80.5083008,38.2666016,81.1860352,40.5419922z"></path><path d="M79.5297852,66.8032227c0.3554688,0,0.699707-0.1894531,0.8803711-0.5239258  c1.1987305-2.215332,2.15625-4.5693359,2.8452148-6.9970703c0.1508789-0.53125-0.1577148-1.0839844-0.6889648-1.2348633  c-0.5307617-0.1499023-1.0834961,0.1577148-1.2348633,0.6889648c-0.6494141,2.2866211-1.5512695,4.5043945-2.6801758,6.5908203  c-0.2626953,0.4858398-0.0820312,1.0927734,0.4033203,1.3554688C79.2060547,66.7646484,79.3691406,66.8032227,79.5297852,66.8032227  z"></path><path d="M65.8886719,78.2954102c-2.0742188,1.1577148-4.2802734,2.0878906-6.5556641,2.765625  c-0.5292969,0.1577148-0.8310547,0.7143555-0.6733398,1.2436523c0.1293945,0.4345703,0.5273438,0.715332,0.9580078,0.715332  c0.0947266,0,0.1904297-0.0136719,0.2856445-0.0419922c2.4165039-0.7192383,4.7578125-1.7075195,6.9599609-2.9365234  c0.4824219-0.269043,0.6552734-0.8779297,0.3857422-1.3603516C66.9794922,78.1982422,66.3706055,78.0258789,65.8886719,78.2954102z"></path><path d="M40.5927734,83.1303711c0.0913086,0.0258789,0.1831055,0.0385742,0.2734375,0.0385742  c0.4360352,0,0.8364258-0.2875977,0.9614258-0.7275391c0.1508789-0.53125-0.1577148-1.0839844-0.6889648-1.2348633  c-2.2866211-0.6494141-4.5043945-1.5512695-6.5908203-2.6801758c-0.4863281-0.2636719-1.0927734-0.0820312-1.3554688,0.4033203  c-0.2626953,0.4858398-0.0820312,1.0927734,0.4033203,1.3554688C35.8110352,81.4838867,38.1650391,82.4414062,40.5927734,83.1303711  z"></path><path d="M21.1938477,67.1240234c0.4824219-0.269043,0.6552734-0.8779297,0.3857422-1.3603516  c-1.1577148-2.0742188-2.0878906-4.2802734-2.765625-6.5556641c-0.1582031-0.5302734-0.7172852-0.831543-1.2436523-0.6733398  c-0.5292969,0.1577148-0.8310547,0.7143555-0.6733398,1.2436523c0.7192383,2.4165039,1.7075195,4.7578125,2.9365234,6.9599609  c0.1831055,0.328125,0.5234375,0.5126953,0.8740234,0.5126953C20.8725586,67.2509766,21.0395508,67.2104492,21.1938477,67.1240234z"></path><path d="M17.4335938,41.7026367c0.0913086,0.0258789,0.1831055,0.0385742,0.2734375,0.0385742  c0.4360352,0,0.8364258-0.2875977,0.9614258-0.7275391c0.6494141-2.2866211,1.5512695-4.5043945,2.6801758-6.5908203  c0.2626953-0.4858398,0.0820312-1.0927734-0.4033203-1.3554688c-0.4858398-0.2631836-1.0927734-0.0820312-1.3554688,0.4033203  c-1.1987305,2.215332-2.15625,4.5693359-2.8452148,6.9970703C16.59375,40.9990234,16.9023438,41.5517578,17.4335938,41.7026367z"></path></svg>
                                <h4 className="font-bold century text-xl"><span className="font-bold">Social Media Marketing</span></h4>
                                <p className="text-md">Stratégies de notoriété, création de contenus et community management à Toulouse.</p>
                                <Button url="/agence-community-management/" text="Agence social media Toulouse" size="md" position="center"/>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 svgtransform justify-center px-2 mb-10 mx-auto lg:mx-4 century text-center border-bleu border-solid border py-4">
                                <svg width="50px" className="mx-auto block" fill="#37cfee" viewBox="0 0 140 175"><g><g><g><g><path d="M107.4882812,28.375h-21.375c-0.5527344,0-1-0.4477539-1-1V6c0-0.404541,0.2431641-0.769043,0.6171875-0.9238281      c0.375-0.1540527,0.8046875-0.0695801,1.0898438,0.2167969l21.375,21.375      c0.2861328,0.2858887,0.3720703,0.7160645,0.2167969,1.0895996C108.2578125,28.1313477,107.8925781,28.375,107.4882812,28.375z       M87.1132812,26.375h17.9609375L87.1132812,8.4143066V26.375z" /></g><g><path d="M107.4882812,135H6.5585938c-0.5527344,0-1-0.4477539-1-1V6c0-0.5522461,0.4472656-1,1-1h79.5595703      c0.265625,0,0.5195312,0.1054688,0.7070312,0.2929688l21.3701172,21.3701172      c0.1875,0.1875,0.2929688,0.4418945,0.2929688,0.7070312v19.9699707c0,0.5522461-0.4472656,1-1,1s-1-0.4477539-1-1V27.7844238      L85.7041016,7H7.5585938v126h98.9296875V86.2600098c0-0.5522461,0.4472656-1,1-1s1,0.4477539,1,1V134      C108.4882812,134.5522461,108.0410156,135,107.4882812,135z" /></g></g><g><g><path d="M75.6171875,124.7570801c-0.1679688,0-0.3359375-0.0422363-0.4882812-0.1274414      c-0.3349609-0.1872559-0.5332031-0.5500488-0.5097656-0.9331055l1.3242188-21.826416      c0.0087891-0.1501465,0.0517578-0.2963867,0.125-0.4277344l39.9150391-71.3278809      c0.1953125-0.347168,0.5869141-0.5471191,0.9726562-0.5065918c7.1279297,0.715332,12.9423828,3.9689941,17.28125,9.670166      c0.2412109,0.3168945,0.2714844,0.746582,0.0771484,1.0939941l-39.9150391,71.3278809      c-0.0742188,0.1313477-0.1757812,0.2443848-0.2988281,0.3308105l-17.9091797,12.5454102      C76.0195312,124.6962891,75.8183594,124.7570801,75.6171875,124.7570801z M77.9257812,102.2194824l-1.1845703,19.529541      l16.0244141-11.2250977l39.4785156-70.548584c-3.8085938-4.7553711-8.7949219-7.5456543-14.8398438-8.3044434      L77.9257812,102.2194824z M93.5263672,111.2116699h0.0097656H93.5263672z" /></g><g><path d="M93.5253906,112.2116699c-0.1650391,0-0.3330078-0.0412598-0.4873047-0.1276855      c-1.0625-0.5947266-1.2998047-1.5097656-1.4570312-2.1149902c-0.1337891-0.5161133-0.1962891-0.7033691-0.4990234-0.8728027      c-0.3037109-0.1704102-0.4951172-0.1240234-1.0029297,0.0314941c-0.5986328,0.1835938-1.5029297,0.4599609-2.5654297-0.1352539      c-1.0634766-0.5949707-1.3007812-1.510498-1.4580078-2.1162109c-0.1337891-0.515625-0.1953125-0.7026367-0.4970703-0.8718262      c-0.3017578-0.168457-0.4921875-0.125-1.0048828,0.0319824c-0.5986328,0.1828613-1.5029297,0.4592285-2.5654297-0.1359863      c-1.0634766-0.5949707-1.3017578-1.5102539-1.4599609-2.1159668c-0.1347656-0.5168457-0.1962891-0.7043457-0.5009766-0.8745117      c-0.3046875-0.1706543-0.4960938-0.125-1.0068359,0.0305176c-0.6005859,0.1821289-1.5029297,0.458252-2.5673828-0.1374512      c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2705078-0.4816895,0.8789062-0.6552734,1.3613281-0.3842773      c0.3056641,0.1706543,0.4970703,0.1252441,1.0068359-0.0307617c0.5996094-0.182373,1.5019531-0.4584961,2.5673828,0.1374512      c1.0634766,0.5949707,1.3017578,1.5102539,1.4599609,2.1159668c0.1347656,0.5168457,0.1962891,0.7043457,0.5009766,0.8745117      c0.3027344,0.1699219,0.4951172,0.1237793,1.0039062-0.0314941c0.5996094-0.1826172,1.5039062-0.458252,2.5664062,0.135498      c1.0634766,0.5952148,1.2998047,1.5102539,1.4570312,2.1157227c0.1337891,0.5158691,0.1953125,0.7028809,0.4980469,0.8723145      c0.3027344,0.1696777,0.4941406,0.1245117,1.0029297-0.0317383c0.5996094-0.1826172,1.5039062-0.4592285,2.5654297,0.135498      c1.0634766,0.5947266,1.3007812,1.5100098,1.4580078,2.1157227c0.1337891,0.5158691,0.1953125,0.7028809,0.4980469,0.8723145      c0.4824219,0.2697754,0.6542969,0.8791504,0.3847656,1.361084      C94.2158203,112.0273438,93.8759766,112.2116699,93.5253906,112.2116699z" /></g><g><g><path d="M86.0400391,106.1291504c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855       c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398l32.2480469-57.6271973       c0.2705078-0.4819336,0.8789062-0.6555176,1.3613281-0.3842773c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398       l-32.2480469,57.6271973C86.7304688,105.9445801,86.390625,106.1291504,86.0400391,106.1291504z" /></g></g><g><path d="M81.2548828,120.8110352c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855l-5.2207031-2.9213867      c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2705078-0.4816895,0.8779297-0.6550293,1.3613281-0.3842773      l5.2207031,2.9213867c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398      C81.9453125,120.6264648,81.6054688,120.8110352,81.2548828,120.8110352z" /></g></g><g><g><path d="M61.0966797,89.505127h-8.1464844c-0.4931641,0-0.9121094-0.3591309-0.9882812-0.8461914l-1.1542969-7.4187012      c-1.6474609-0.4711914-3.2314453-1.1269531-4.7236328-1.9555664l-6.0615234,4.4284668      c-0.3974609,0.2907715-0.9492188,0.2485352-1.296875-0.1003418l-5.7607422-5.7607422      c-0.3486328-0.3483887-0.3916016-0.8989258-0.1005859-1.296875l4.4287109-6.0617676      C36.4638672,69,35.8076172,67.4160156,35.3369141,65.7700195l-7.4179688-1.1547852      c-0.4873047-0.0756836-0.8466797-0.4951172-0.8466797-0.9880371v-8.1467285c0-0.4929199,0.359375-0.9123535,0.8457031-0.9880371      l7.4189453-1.1550293c0.4707031-1.6459961,1.1269531-3.2297363,1.9560547-4.7233887l-4.4287109-6.0617676      c-0.2910156-0.3979492-0.2480469-0.9484863,0.1005859-1.296875l5.7607422-5.7602539      c0.3486328-0.3493652,0.8994141-0.3903809,1.296875-0.1003418l6.0615234,4.4282227      c1.4921875-0.8288574,3.0761719-1.4846191,4.7236328-1.9558105l1.1542969-7.4182129      c0.0761719-0.4870605,0.4951172-0.8461914,0.9882812-0.8461914h8.1464844c0.4931641,0,0.9121094,0.3591309,0.9882812,0.8461914      l1.1542969,7.4182129c1.6474609,0.4709473,3.2304688,1.126709,4.7236328,1.9558105l6.0625-4.4284668      c0.3974609-0.2907715,0.9482422-0.248291,1.296875,0.1003418l5.7597656,5.760498      c0.3486328,0.3483887,0.3916016,0.8989258,0.1005859,1.296875l-4.4287109,6.0617676      c0.8291016,1.4916992,1.484375,3.0754395,1.9560547,4.7236328l7.4179688,1.1547852      c0.4873047,0.0756836,0.8466797,0.4951172,0.8466797,0.9880371v8.1467285c0,0.4929199-0.359375,0.9123535-0.8457031,0.9880371      l-7.4189453,1.1550293c-0.4707031,1.6459961-1.1269531,3.2299805-1.9560547,4.7233887l4.4287109,6.0615234      c0.2910156,0.3979492,0.2480469,0.9482422-0.1005859,1.296875l-5.7597656,5.7607422      c-0.3486328,0.348877-0.8994141,0.3911133-1.296875,0.1003418l-6.0625-4.4284668      c-1.4921875,0.8288574-3.0761719,1.4846191-4.7236328,1.9558105l-1.1542969,7.418457      C62.0087891,89.1459961,61.5898438,89.505127,61.0966797,89.505127z M53.8066406,87.505127h6.4335938l1.1230469-7.2143555      c0.0615234-0.395752,0.3535156-0.7165527,0.7412109-0.8151855c1.9082031-0.4855957,3.7285156-1.239502,5.4121094-2.2412109      c0.3447266-0.2043457,0.7783203-0.1845703,1.1015625,0.052002l5.8955078,4.3066406L79.0625,77.043457l-4.3066406-5.8947754      c-0.2363281-0.3234863-0.2568359-0.7565918-0.0517578-1.1008301c1.0019531-1.6850586,1.7558594-3.5061035,2.2412109-5.4123535      c0.0986328-0.3881836,0.4189453-0.6799316,0.8144531-0.7414551l7.2148438-1.123291v-6.4338379l-7.2138672-1.1230469      c-0.3964844-0.0615234-0.7167969-0.3532715-0.8154297-0.7414551c-0.4863281-1.9089355-1.2402344-3.7297363-2.2412109-5.4118652      c-0.2050781-0.3442383-0.1845703-0.777832,0.0517578-1.1013184L79.0625,42.0639648l-4.5488281-4.5493164l-5.8955078,4.3066406      c-0.3232422,0.2365723-0.7578125,0.2565918-1.1015625,0.052002c-1.6845703-1.0021973-3.5048828-1.7561035-5.4111328-2.2409668      c-0.3886719-0.098877-0.6806641-0.4196777-0.7421875-0.8154297l-1.1230469-7.2141113h-6.4335938l-1.1230469,7.2141113      c-0.0615234,0.395752-0.3535156,0.7165527-0.7412109,0.8154297c-1.9082031,0.4853516-3.7285156,1.2392578-5.4121094,2.2409668      c-0.34375,0.204834-0.7783203,0.1848145-1.1015625-0.052002l-5.8945312-4.3063965l-4.5498047,4.5490723l4.3066406,5.8950195      c0.2363281,0.3234863,0.2568359,0.7565918,0.0517578,1.1008301c-1.0019531,1.6853027-1.7558594,3.5063477-2.2412109,5.4123535      c-0.0986328,0.3881836-0.4189453,0.6799316-0.8144531,0.7414551l-7.2148438,1.123291v6.4338379l7.2138672,1.1230469      c0.3964844,0.0615234,0.7167969,0.3532715,0.8154297,0.7414551c0.4853516,1.90625,1.2392578,3.7272949,2.2412109,5.4121094      c0.2050781,0.3444824,0.1845703,0.7775879-0.0517578,1.1010742L34.984375,77.043457l4.5498047,4.5495605l5.8945312-4.3066406      c0.3232422-0.2368164,0.7578125-0.2565918,1.1015625-0.052002c1.6826172,1.0012207,3.5039062,1.7553711,5.4121094,2.2412109      c0.3876953,0.0986328,0.6796875,0.4194336,0.7412109,0.8151855L53.8066406,87.505127z M85.9746094,63.6271973h0.0097656      H85.9746094z" /></g><g><path d="M57.0234375,72.3076172c-7.0322266,0-12.7539062-5.7214355-12.7539062-12.7539062      s5.7216797-12.7536621,12.7539062-12.7536621s12.7539062,5.7211914,12.7539062,12.7536621      S64.0556641,72.3076172,57.0234375,72.3076172z M57.0234375,48.8000488      c-5.9296875,0-10.7539062,4.8239746-10.7539062,10.7536621S51.09375,70.3076172,57.0234375,70.3076172      s10.7539062-4.8242188,10.7539062-10.7539062S62.953125,48.8000488,57.0234375,48.8000488z" /></g></g></g><g><path d="M126.5810547,53.1425781c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855l-16.5859375-9.2810059    c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2695312-0.4816895,0.8779297-0.6550293,1.3613281-0.3842773    l16.5859375,9.2810059c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398    C127.2714844,52.9580078,126.9316406,53.1425781,126.5810547,53.1425781z" /></g></g></svg>
                                <h4 className="font-bold century text-xl"><span className="font-bold">Formation SEO</span></h4>
                                <p className="text-md">Formation qualifiante dans divers secteurs du <strong>webmarketing</strong>.</p>
                                <Button url="/formation-referencement/referencement-naturel-google-seo/" text="Formation SEO" size="md" position="center"/>
                            </div>
                        </div>
                        </section>
                    </section>
                    <section className="w-full bg-black flex flex-col md:flex-row">
                    <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                    </div>
                    <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                        <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Vous souhaitez développer votre référencement à Agen ?</h2>
                        <br />
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0" />
                        <br />
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Linkweb conduit votre projet <strong>de référencement à Agen en Lot-et-Garonne</strong>, de la définition de votre stratégie jusqu'à sa mise en place. Notre équipe vous accompagne durant chaque étape de votre projet pour répondre à vos attentes.</p>
                            <div className="max-w-xs ml-auto mr-auto md:mr-0 md:ml-0 block">
                                <RoundButton url="/referencement-agen/" color="darkgrey" text="RÉFÉRENCEMENT À AGEN" />
                            </div>
                        </div>

                    </div>
                </section>
            {/* <section id="agenceseo" className="flex flex-col xl:flex-row w-full justify-center mx-auto py-6">
                <div className="flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-left" className="w-full xl:flex hidden lg:mt-0 mt-48 xl:w-auto">
                        <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse" /> 
                    </div>
                    <div className="blocref w-10/12 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-black flex flex-col justify-center" /*data-aos="fade-right" >
                        <Link to={this.props.linkTitle}>
                        </Link>
                        <h2 className="century leading-none text-center text-3xl md:text-5xl">Comparer les meilleures agences SEO à Toulouse</h2>
                        <br/><br/>
                        <table className="w-full century text-sm text-center py-2">
                            <tbody>
                                <tr className="bg-bleu headertable font-black h-16 py-2 md:py-0">
                                    <th>Nom de l'agence</th>
                                    <th>Services</th>
                                    <th>Localisation</th>
                                    <th>Adresse</th>
                                    <th>Site internet</th>
                                </tr>
                                <tr className="flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td className="font-bold">LINKWEB ⭐</td>
                                    <td>Référencement SEO<br/>Référencement SEA <br/>Création de site internet <br/>Community Management <br/>Formation SEO </td>
                                    <td>Toulouse</td>
                                    <td>44 rue Bayard</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = '/';
                                            }}>linkweb.fr
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-bleu flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td className="font-bold">VELCOME SEO</td>
                                    <td>Référencement SEO <br/>Référencement SEA <br/>Formation SEO</td>
                                    <td>Toulouse</td>
                                    <td>150 Rue Louis Nicolas Vauquelin</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://velcomeseo.fr/';
                                            }}>velcomeseo.fr
                                        </button>
                                    </td>
                                </tr>
                                <tr className="flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td className="font-bold">VALE TUDO</td>
                                    <td>Création de site internet <br/>Référencement SEO</td>
                                    <td>Toulouse</td>
                                    <td>2 rue d’Austerlitz</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://www.valetudo.io/';
                                            }}>valetudo.io
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-bleu flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td className="font-bold">YUMENS</td>
                                    <td>Référencement SEO <br/>Veille stratégique <br/>Social Media <br/>Formation SEO</td>
                                    <td>Toulouse</td>
                                    <td>5 rue du Moulin Bayard</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://www.yumens.fr/';
                                            }}>yumens.fr
                                        </button>
                                    </td>
                                </tr>
                                <tr className="flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td className="font-bold">LA MANDRETTE</td>
                                    <td>Référencement SEO <br/>E-Réputation <br/>Formation SEO</td>
                                    <td>Toulouse</td>
                                    <td>272, route de Launaguet</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://www.lamandrette.com/';
                                            }}>lamandrette.com
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-bleu flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td className="font-bold">TRANSFONUMÉRIQUE</td>
                                    <td>Référencement SEO <br/>Référencement SEA <br/>Création de site internet</td>
                                    <td>Balma</td>
                                    <td>12 Av. Charles de Gaulle</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://transfonumerique.fr';
                                            }}>transfonumerique.fr
                                        </button>
                                    </td>
                                </tr>
                                <tr className="flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td className="font-bold">MERIDIGITAL</td>
                                    <td>Référencement SEO <br/>Rédaction Web</td>
                                    <td>Toulouse</td>
                                    <td>19 Rue de la Concorde</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://www.meridigital.com/';
                                            }}>meridigital.com
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section> */}

                    {/* <Modalagenceseo/> */}
                    
                
                
                {/*<section className="max-w-5xl w-full mx-auto px-4 pt-4 pb-0 mt-2">
                        <h2 /*data-aos='fade-right' className="text-center text-3xl century">
                        Agence SEO à Toulouse : la marque de Linkweb
                        </h2>
                        <hr className="blue"></hr>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-10 pb-0">
                    <div className="w-full max-w-5xl" /*data-aos='zoom-in'>
                            <p className="text-md text-center pt-4 century">Depuis plus de dix ans, <strong>Linkweb</strong> a développé sur une expertise dans le <strong>référencement naturel (SEO)</strong>. Notre agence est donc considérée comme <strong>agence SEO</strong> (<strong>Search Engine Optimization</strong>) à part entière.<br/><br/>Ainsi, notre équipe de <strong>référenceurs</strong> est à même de répondre à vos <strong>projets web</strong> par la mise en place de <strong>stratégies SEO</strong> adaptées à vos besoins, que ce soit en <strong className="font-light">refonte</strong> ou en <strong className="font-light">création de site internet</strong>. <br/><br/>Un <strong className="font-light">expert SEO</strong> est chargé de définir une stratégie adaptée pour optimiser l'<strong className="font-light">expérience utilisateur</strong> de votre site ainsi que sa visibilité sur les <strong className="font-light">moteurs de recherche</strong> grâce au <strong className="font-light">marketing digital</strong> et notamment à un <strong className="font-light">bon référencement</strong>.</p>
                            <br/>
                        </div>
                    </section>
                    <br/>
                    <div className="max-w-6xl mx-auto flex text-center my-0">
                            {/* <RappelForm />
                            <RoundButton url="/referencement-toulouse/agence-seo-toulouse/" text="Notre agence SEO à Toulouse" />
                        </div>*/}
                
                
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsRef {
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
export default ReferencementToulouse;
