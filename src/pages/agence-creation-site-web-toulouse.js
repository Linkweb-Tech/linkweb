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




class AgenceCreaSiteWeb extends Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence de création de site web Toulouse"
                    description="Notre agence de création de site web à Toulouse mène votre projet web : site vitrine, e-commerce et solution sur-mesure."
                    url="https://linkweb.fr/agence-creation-site-web-toulouse/"
                    nom="Agence de création de site web à Toulouse"
                    slug="agence-creation-site-web-toulouse/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Agence de <span className="text-bleu">création site web</span> à Toulouse</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Agence de création de site web et de refonte de site internet à Toulouse</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}

                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Vous portez un projet de création de site internet ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md">Nous définissons et mettons en application les <strong>projet de création web et de référencement sur Google</strong> pour nos clients souhaitant développer leur visibilité en ligne.</p>
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
                        Bénéficier d’un accompagnement professionnel pour le développement de son projet en ligne avec une <a href="/" className="text-bleu font-bold hover:text-black">agence web à Toulouse</a> : de son design jusqu’à sa stratégie marketing.
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence création site web : produire une solution fonctionnelle</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">En tant qu’<Link to="/agence-site-web-toulouse/" className="text-bleu hover:text-black font-bold">agence spécialisée dans le développement web</Link> et la conception de sites internet, nous nous attachons à livrer un résultat parfaitement fonctionnel et qui répond à vos attentes.</h3>
                    </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Conception</span><br /><span className="font-bold text-5xl md:text-6xl">UI & UX DESIGN</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg z-50">Notre rôle est de concevoir une interface parfaitement fonctionnelle pour vos utilisateurs. En ce sens, nous mettons l’accent sur l’<strong className="font-normal">ergonomie de votre plateforme</strong> en définissant un <strong className="font-normal">webdesign</strong> parfaitement intuitif. L’objectif est de proposer une <strong className="font-normal">expérience utilisateur</strong> irréprochable afin de guider vos visiteurs tout au long de leur navigation sur <strong className="font-normal">votre site web</strong>.
                        <br /><br />Cela passe par la <strong className="font-normal">conception d’un design</strong> adapté pour tous les supports (<strong className="font-normal">mobile</strong>, tablette, écran d’ordinateur, etc.), mais également par la mise en place d’un temps de chargement optimal ou d’une <strong className="font-normal">navigation sécurisée</strong>. Chaque détail est important pour proposer l’expérience la plus adaptée aux utilisateurs à la recherche d’une information sur votre site.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Conformité du</span><br /><span className="font-bold text-6xl">SITE INTERNET</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">En plus d’être conçu à destination de vos utilisateurs, <strong className="font-normal">votre site web</strong> doit également en totale compatibilité vis-à-vis de l’ensemble des acteurs du <strong className="font-normal">web</strong> : navigateurs, <strong className="font-normal">moteurs de recherche</strong> et bien plus encore. C’est pourquoi, les sites que nous créons sont conçus en parfaite conformité avec le World Wide Web Consortium (W3C) pour une parfaite interprétation de votre site.
                        <br /><br />Ceci est important pour proposer une expérience parfaitement homogène, quel que soit le navigateur utilisé. Également, cela facilite la lecture de votre page pour les robots des <strong className="font-normal">moteurs de recherche</strong> pour une parfaite interprétation du contenu mis en avant sur l’ensemble de vos <strong className="font-normal">pages web</strong>.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Vision </span><br /><span className="font-bold text-6xl">WEBMARKETING</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">Lorsque nous développons un <strong className="font-normal">site internet</strong>, nous développons avant tout un <strong className="font-normal">outil de communication</strong> apte à jouer un rôle dans le <strong className="font-normal">développement de votre entreprise en ligne</strong>. C’est pourquoi, nous intégrons à la conception de votre site, la définition d’une <strong className="font-normal">stratégie de référencement naturel (SEO)</strong> en vue de vous permettre d’acquérir de la visibilité sur votre secteur de prédilection (Paris, comme partout en France).
                        <br /><br />En somme, le <strong className="font-normal">site internet</strong> est un support de communication qui doit permettre de véhiculer votre message. Il est donc indispensable de <strong className="font-normal">définir une stratégie de visibilité</strong> pour générer du trafic afin d’attirer de potentiels prospects. Nous activons tous les <strong className="font-normal"><Link to="/agence-marketing-toulouse/" className="text-bleu hover:text-white font-bold">leviers du web marketing</Link></strong> qui vous permettront d’atteindre vos objectifs commerciaux.</p>
                    </div>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">La méthode Linkweb : mener votre projet avec notre agence</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Linkweb fait partie des <Link to="/agence-web-marmande/" className="text-bleu hover:text-black font-bold">agences en France</Link> qui s’attachent à cerner les besoins de ses clients avant d’envisager les solutions les plus pertinentes par rapport à leur activité ainsi qu’à leurs opportunités en ligne.</h3>
                    </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Agence SEA Toulouse" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10  flex flex-col">
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                    <p className="text-center">1</p>
                                </div>
                                <div className="w-full px-6 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>PRENEZ CONTACT POUR NOUS PRÉSENTER VOTRE PROJET
                                </h3>
                                    <br />
                                    <h4 className="century"><span className="font-bold">En prenant contact avec Linkweb, un expert étudiera votre demande en vue de vous contacter pour mieux cerner vos besoins.</span></h4>
                                    <br />
                                    <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" >Nous devons connaître vos objectifs, vos cibles, mais également votre activité ainsi que vos motivations. Plus votre demande sera détaillée, plus nous serons prompts à vous proposer une <strong className="font-normal">solution pertinente</strong>.</p>
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
                                        <span className="text-bleu">/</span>NOUS ÉTUDIONS L’ENSEMBLE DE VOS BESOINS POUR DÉFINIR VOTRE PROJET WEB
                                    </h3>
                                    <br />
                                    <h4 className="century"><span className="font-bold">Un rendez-vous est fixé pour définir vos besoins ainsi que pour formuler une proposition fonctionnelle, pertinente et de qualité.</span></h4>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Cette étape est fondamentale pour comprendre vos besoins, mais également évaluer l’environnement concurrentiel autour de <strong className="font-normal">votre marché en ligne</strong>. En effet, de cette étape doit résulter la <strong className="font-normal">définition d’une stratégie</strong> parfaitement adaptée à votre projet.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">3</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>VOUS VALIDEZ LE PROJET UNE FOIS QU’IL VOUS CORRESPOND
                                    </h3>
                                    <br />
                                    <h4 className="century"><span className="font-bold">Une fois la stratégie validée, nous vous proposons une maquette visuelle ainsi que des contenus parfaitement originaux et optimisés pour être visibles.</span></h4>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Dès lors que la <strong className="font-normal">maquette du site</strong> vous est livrée, un circuit de validation se met en place pour chaque page. À la suite d’échanges et d’ajustements réalisés à partir de la maquette, une version définitive est sélectionnée en vue d’être mise en ligne.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">4</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>NOUS LANÇONS LA PRODUCTION DE VOTRE PROJET
                                    </h3>
                                    <h4 className="century"><span className="font-bold">Dès que la proposition est validée, nos développeurs se chargent de mettre en production votre site ainsi que d’envisager sa mise en ligne.</span></h4>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Les <strong className="font-normal">experts de notre <Link to="/agence-web-montauban/" className="text-bleu hover:text-black font-bold">agence de création de site web</Link></strong> mettent votre <strong className="font-normal">site en ligne</strong> sur le nom de domaine sélectionné. Par ailleurs, nos référenceurs réalisent toutes les optimisations nécessaires pour rendre votre <strong className="font-normal">site web visible via les moteurs de recherche</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Un accompagnement professionnel pour une solution complète</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Faire le choix d’agences spécialisées dans la création de site internet comme Linkweb permet d’accéder à une prestation totale et parfaitement ajustée en fonction des besoins de son entreprise.</h3>
                    </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="DES EXPERTS COMPÉTENTS EN DÉVELOPPEMENT WEB">
                                <p>En faisant le choix d’une <strong className="font-normal"><Link to="/entreprise-developpement-web-toulouse/" className="font-bold text-bleu hover:text-black">agence comme Linkweb</Link></strong>, vous faites appel à des spécialistes de la <strong className="font-normal">création de sites internet en France</strong>. Nos <strong className="font-normal">développeurs</strong> maîtrisent parfaitement les rouages du net sont compétents pour mettre en place votre <strong className="font-normal">solution sur-mesure</strong>.
                                    <br /><br />
                                    Grâce à sa parfaite connaissance des nombreuses <strong className="font-normal">technologies web</strong>, notre <strong className="font-normal">équipe de développeurs</strong> est apte à prendre les meilleures décisions en vue de vous livrer l’<strong className="font-normal">outil de communication</strong> qui vous correspond le mieux en fonction de vos objectifs. Aussi, ils vous accompagnent dans le cadre d’un <strong className="font-normal">contrat de gestion</strong> pour sélectionner l’offre d’hébergement ainsi que le <strong className="font-normal">nom de domaine</strong> qui collent le plus à vos besoins.
                                    <br /><br />
                                    Quel que soit le <strong className="font-normal">type de site (vitrine, ecommerce, administrable ou catalogue)</strong> ou bien la technologie utilisée (système de gestion de contenu CMS comme le <strong className="font-normal">CMS Wordpress</strong>, application web, langage HTML/CSS, etc.), nos experts sont en mesure de mettre en place la solution qui vous correspond (pour mettre en avant vos services et produits, <strong className="font-normal">développer votre <Link to="/agence-de-communication-digitale/" className="font-bold text-bleu hover:text-black">communication digitale</Link></strong> corporate ou proposer un outil complémentaire à vos <strong className="font-normal">réseaux sociaux</strong>).
                                </p>
                            </div>
                            <div label="UN PROJET CONÇU AUTOUR DE LA CRÉATION DE SON SITE">
                                <p>
                                    Notre <strong className="font-normal">agence</strong> fait partie <Link to="/agence-web-balma/" className="text-bleu hover:text-black font-bold"><strong className="font-bold">des agences</strong></Link> structurées à partir de procédés spécifiques à la <strong className="font-normal">création web</strong> (ou refonte de sites web) en vue d’optimiser la <strong className="font-normal">réalisation de votre projet</strong>. C’est pourquoi, de la conception à la structure votre interface, tout est pensé pour vous permettre de tirer profit d’un outil au potentiel aussi fort qu’un <strong className="font-normal">site internet</strong>.
                                <br /><br />
                                Cette organisation spécifique nous permet de mettre en oeuvre votre projet dans des conditions optimales afin de vous fournir une <strong className="font-normal">solution de qualité</strong> et durable. Chaque critère est analysé pour vous proposer une interface en totale conformité avec les attentes de vos futurs utilisateurs, comme de chaque <strong className="font-normal">acteur du web</strong>. C’est pourquoi, toutes nos réalisations sont soignées pour une accessibilité optimale.
                                <br /><br />
                                Dès le cadrage de votre <strong className="font-normal">stratégie</strong>, notre <strong className="font-normal">équipe</strong> est en mesure d’estimer le temps de production nécessaire pour vous proposer une solution en total accord avec vos attentes. Ceci nous permet alors de vous fournir un devis détaillé selon les besoins que requiert un <strong className="font-normal">projet digital</strong> comme le votre : utilisation de <strong className="font-normal">CMS comme Wordpress</strong>, optimisation pour mobile, module ecommerce, création d’une vitrine de votre société, <strong className="font-normal">référencement naturel</strong>, etc.
                                </p>
                            </div>
                            <div label="UN SITE INTERNET POUR DYNAMISER VOTRE STRATÉGIE DE MARKETING DIGITAL">
                                <p>
                                    Lorsque vous faites le choix d’une <Link to="/agence-web-albi/" className="font-bold text-bleu hover:text-black"><strong className="font-normal">agence comme Linkweb</strong></Link>, vous optez également pour la mise en place d’une réelle de <strong className="font-normal">stratégie marketing</strong>. En ce sens votre site est un support et non un objectif. En effet, nous pensons que le <strong className="font-normal">site internet</strong> est un véritable moteur pour développer la visibilité et la <strong className="font-normal">notoriété d’une entreprise</strong> sur le net.
                                <br /><br />
                                Par ailleurs, ne pas exploiter le potentiel de <strong className="font-normal">visibilité</strong> qu’offre le web peut être une erreur. C’est pourquoi, notre <strong className="font-normal">équipe de référenceurs</strong> met en place des procédés propres au <strong className="font-normal">référencement naturel SEO</strong> pour vous permettre de <strong className="font-normal">rendre les pages de votre site visibles</strong> via un <strong className="font-normal">moteur de recherche comme Google</strong> sur votre secteur géographique (Paris et l’ensemble de la France).
                                <br /><br />
                                Toutefois, le <strong className="font-normal">référencement de votre interface</strong> doit être défini en fonction des habitudes des utilisateurs. Ceci vous permettra d’identifier les <strong className="font-normal">opportunités de visibilité</strong> en termes de <strong className="font-normal">mots-clés</strong> afin de promouvoir votre activité et vos solutions auprès d’un public ciblé. Tout ceci a pour but de drainer du <strong className="font-normal">trafic qualifié vers votre site</strong> afin de gagner en <strong className="font-normal">notoriété</strong>. Rendez vos produits <strong className="font-normal">visibles</strong> sur des requêtes pertinentes sur <strong className="font-normal">Google</strong>, que vous soyez à Paris comme partout en France.
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
query lastsThreePostsQuelleAgenceCreaSiteWeb {
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
export default AgenceCreaSiteWeb;




