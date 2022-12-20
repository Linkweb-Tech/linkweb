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




class StrategieDigitaleToulouse extends Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Les fondements de la stratégie digitale à Toulouse"
                    description="Le succès d'un projet web passe par la mise en place d'une stratégie digitale adaptée à vos besoins et à vos cibles."
                    url="https://linkweb.fr/strategie-digitale-toulouse/"
                    nom="Les fondements de la stratégie digitale à Toulouse"
                    slug="strategie-digitale-toulouse/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Les fondements de la <span className="text-bleu">stratégie digitale</span> à Toulouse</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Libérez-vous des frontières pour propulser votre communication digitale.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}

                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Vous souhaitez la mise en place de votre stratégie digitale à Toulouse ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md">Notre <Link to="/agence-marketing-toulouse/" className="text-black hover:text-white font-bold"><strong>agence marketing à Toulouse</strong></Link> est compétente dans le développement de solution fonctionnelle et performante pour vous permettre d’atteindre vos <strong className="font-normal">objectifs de communication</strong> et commerciaux.</p>
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
                        La stratégie digitale est efficace pour mettre en avant son entreprise sur le Web.
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">À quels objectifs répond la mise en place d’une stratégie digitale d’entreprise ?</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">La communication en ligne est un parfait moyen pour développer la présence de son entreprise hors des frontières terrestres.</h3>
                    </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span className="font-bold text-5xl md:text-6xl">VISIBILITÉ</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg z-50">En déployant votre présence sur <strong className="font-normal">Internet</strong>, l’un des premiers objectifs va être d’<strong className="font-normal">obtenir de la visibilité</strong>. Si le <strong className="font-normal">site web</strong> est garant de crédibilité pour une entreprise, ceci est insuffisant pour espérer obtenir tout ce que la <strong className="font-normal">communication web</strong> peut vous apporter. La mise en place de techniques d’acquisition de <strong className="font-normal">visibilité</strong> va donc être nécessaire.
                            <br /><br />Ceci est la première étape visant de <strong className="font-normal">générer du trafic sur son site web</strong> en vue d’interagir avec les utilisateurs. De plus, il faut savoir que la <strong className="font-normal">communication web</strong> regorge de techniques d’acquisition de visibilité, par sponsorisation, comme par voie naturelle.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span className="font-bold text-6xl">NOTORIÉTÉ</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">Outre la visibilité, la mise en place d’une <strong className="font-normal">stratégie digitale</strong> a pour objectif de vous procurer de la notoriété. En développant la <strong className="font-normal">visibilité de votre société sur le web</strong> et en communiquant au bon endroit auprès des bonnes personnes, notre objectif est de faire connaître votre société.
                        <br /><br />Se faire connaître auprès d’un public ciblé est envisageable à l’échelle nationale, comme dans toute les localités de France. Nous nous chargeons de définir les priorités en termes de ciblage en fonction des opportunités qui se présentent sur votre marché, en fonction de vos besoins, mais également de la concurrence. La formation de votre <strong className="font-normal">notoriété en ligne</strong> fait partie de nos compétences.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span className="font-bold text-6xl">CONVERSION</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">Faire connaître votre <strong className="font-normal">entreprise</strong> auprès d’une population cible n’est qu’une étape de votre <strong className="font-normal">stratégie digitale</strong>. En effet, cette dernière exige la mise en place de procédés spécifiques pour mener votre <strong className="font-normal">stratégie de l’acquisition de visibilité</strong>, jusqu’à l’obtention de contacts prospects qualifiés et la réalisation de vos objectifs commerciaux.
                        <br /><br />En effet, cette démarche a pour but de vous mettre en relation avec une <strong className="font-normal">portion des visiteurs de votre site</strong> pour lesquels votre société apparaîtra comme une solution à leur besoin. Ceci est le fruit du long terme. C’est pourquoi, le suivi réalisé ne doit pas être négligé afin de comprendre au mieux qui sont vos utilisateurs afin de communiquer envers eux de manière efficace.</p>
                    </div>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Les cinq étapes de la stratégie digitale</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">La définition d’une stratégie de marketing digital efficace nécessite le respect d’une démarche bien précise.</h3>
                    </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={mac} alt="Comment choisir son agence de communication web" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10  flex flex-col">
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                    <p className="text-center">1</p>
                                </div>
                                <div className="w-full px-6 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>ÉTUDE DE CONTEXTE
                                </h3>
                                    <br />
                                    <h4 className="century"><span className="font-bold">Dès lors qu’il est question de mener un projet digital, il est indispensable de réaliser une étude contextuelle.</span></h4>
                                    <br />
                                    <p className="w-full century pb-4 text-justify">Comprendre le marché et le secteur sur lesquels s’inscrit un produit est nécessaire pour définir les opportunités qui s’offrent à vous dans le cadre de la <strong className="font-normal">mise en place de votre projet</strong>. Ceci permet également d’analyser les éventuels risques et menaces qui pourraient entraver votre incursion sur le marché en question.</p>

                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">2</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>DÉFINITION DES CIBLES ET OBJECTIFS
                                    </h3>
                                    <br />
                                    <h4 className="century"><span className="font-bold">Toute communication doit être élaborée pour s’adresser à un public destiné dans un but bien précis.</span></h4>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">La <strong className="font-normal">définition des cibles</strong> et des objectifs est une phase fondamentale du développement d’un <strong className="font-normal">projet digital</strong>. En effet, il est indispensable de bien connaître son audience en vue de lui proposer un message adapté sur la forme comme sur le fond. Enfin, cette <strong className="font-normal">communication</strong> ne peut être dénuée d’objectifs. La formation du cadrage stratégique est indispensable à la réussite de vos <strong className="font-normal">projets de marketing digital</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">3</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>CONCEPTION D’UN PLAN D’ACTIONS
                                    </h3>
                                    <br />
                                    <h4 className="century"><span className="font-bold">Une fois le cadrage de votre projet réalisé, il est nécessaire de définir un plan d’actions cohérent en vue de parvenir à vos fins.</span></h4>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">La formation d’un <strong className="font-normal">plan d’actions</strong> cohérent vis-à-vis de vos objectifs et de cibles doit vous permettre la mise en place d’actions efficaces en direction des utilisateurs. Elles doivent vous permettre de parvenir à vos <strong className="font-normal">objectifs de visibilité</strong>, de <strong className="font-normal">notoriété</strong>, voire d’image. C’est pourquoi, ce dernier doit être minutieusement réfléchi par notre <Link to="/agence-developpement-web-toulouse/" className="text-black hover:text-white font-bold">agence de développement web à Toulouse</Link>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">4</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>LANCEMENT DE LA STRATÉGIE
                                    </h3>
                                    <h4 className="century"><span className="font-bold">La validation du plan d’actions entraîne le lancement de la stratégie à partir des différents supports sélectionnés.</span></h4>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Le lancement de votre <strong className="font-normal">stratégie</strong> doit suivre scrupuleusement le rétro planning défini lors de la phase de conception. En effet, la formation de votre <strong className="font-normal">stratégie de communication</strong> s’établit dans le temps. Un expert <strong className="font-normal">chef de projet en agences internet</strong> est compétent pour la gestion de votre <strong className="font-normal">projet de communication</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">5</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>SUIVI ET ANALYSE
                                    </h3>
                                    <h4 className="century"><span className="font-bold">Dès la phase de conception stratégique, des méthodes d’évaluation et d’analyse doivent être définies.</span></h4>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Il est indispensable de définir des objectifs mesurables et quantifiables pour juger de la performance de son projet. Cette évaluation perpétuelle ainsi que le travail d’analyse sont indispensables dans le cadre du suivi de votre <strong className="font-normal">projet marketing</strong> afin d’adapter votre message en fonction des premières interactions avec les <strong className="font-normal">utilisateurs</strong>. Notre <Link to="/agence-web-design-toulouse/" className="text-bleu hover:text-black font-bold">agence de web design à Toulouse</Link> conçoit une plateforme ergonomique et intuitive pour véhiculer au mieux vos messages.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Les moteurs de la stratégie digitale d’entreprise</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">La mise en place d’un projet de marketing digital repose sur la mobilisation de supports de communication performants.</h3>
                    </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="LA CRÉATION D’UN SITE INTERNET PERFORMANT">
                                <p>Obtenir de la <strong className="font-normal">visibilité</strong> et de la <strong className="font-normal">notoriété sur le Web</strong> nécessite d’employer des <strong className="font-normal">outils de communication</strong> performants. En ce sens, le <strong className="font-normal">site web</strong> est un réel moteur dans le cadre d’une <strong className="font-normal">stratégie de webmarketing</strong>. En effet, le <strong className="font-normal">développement d’un site</strong> fait partie des solutions qui vont vous permettre de maîtriser votre <strong className="font-normal">communication</strong>, tout en tirant profit de la visibilité offerte par les différents <strong className="font-normal">canaux d’acquisition de trafic</strong> tels que les <strong className="font-normal">moteurs de recherche</strong>. Notre <Link to="/agence-web-muret/" className="text-bleu hover:text-black font-bold">agence web à Muret</Link> met tout en oeuvre pour vous fournir la visibilité dont vous avez besoin.
                                    <br /><br />
                                    Un <strong className="font-normal">site</strong> bien construit (au niveau de son <strong className="font-normal">design</strong> comme de son arborescence) peut constituer un moteur pour votre projet en vue de développer votre <strong className="font-normal">visibilité</strong> ainsi que votre notoriété dans toute la <strong className="font-normal">France</strong> dans le but de transformer vos visiteurs en <strong className="font-normal">clients potentiels</strong>.
                                    <br /><br />Il existe une solution pour tous les professionnels à travers la <strong className="font-normal">production de sites web</strong> ainsi que de plateformes visant à la transition numérique au niveau professionnel.
                                </p>
                            </div>
                            <div label="LES MOTEURS DE RECHERCHE">
                                <p>En fonction de votre secteur d’activité et du marché sur lequel votre <strong className="font-normal">société</strong> s’inscrit, la mobilisation des <strong className="font-normal">moteurs de recherche comme Google</strong> peut s’avérer fructueuse. En effet, le <strong className="font-normal">trafic organique</strong> fait partie des principales sources de trafic pour une plateforme <strong className="font-normal">en ligne</strong>. Où que vous soyez en <strong className="font-normal">France</strong> et quelque soit la taille de votre société, il existe des solutions pour toutes les <strong className="font-normal">entreprises</strong>.
                                    <br /><br />
                                    Notre <Link to="/agence-web-haute-garonne/" className="text-bleu font-bold hover:text-black"><strong>agence web en Haute-Garonne</strong></Link> possède toutes les compétences pour vous délivrer un <strong className="font-normal">plan stratégique</strong> adapté à vos ambitions, cibles et besoins. Obtenir de la <strong className="font-normal">visibilité</strong> au niveau de requêtes à fort volume de recherche sur les <strong className="font-normal">moteurs</strong> est totalement possible.
                                    <br /><br />
                                    Le <strong className="font-normal">marketing digital</strong> regorge d’opportunités pour les professionnels de tous secteurs souhaitant développer leur <strong className="font-normal">présence en ligne</strong>.
                                </p>
                            </div>
                            <div label="LES RÉSEAUX SOCIAUX">
                                <p>Si votre axe stratégique est basé sur les <strong className="font-normal">réseaux sociaux (social média marketing)</strong> et non sur les <strong className="font-normal">sites web</strong>, il faut savoir qu’ils constituent également une forte opportunité de visibilité. En effet, bien connaître les différents <strong className="font-normal">réseaux</strong> existants permet de définir celui sur lequel votre cible se trouve et donc sur lequel il sera plus propice, pour vous, de communiquer.
                                    <br /><br />En fonction des entreprises et de leurs publics cibles, les médias sociaux pourront constituer une opportunité de choix en vue de faire connaître sa société et son produit ou bien de travailler son image de marque auprès de millions d’utilisateurs.
                                    <br /><br />En fonction de vos <strong className="font-normal">projets</strong>, de vos besoins et des personnes auprès desquelles vous souhaitez vous adresser, tous les outils et <strong className="font-normal">supports de communication</strong> ne sont pas adaptés. <strong className="font-normal">Linkweb</strong> fait partie des <strong className="font-normal"><Link to="/agence-web-ramonville/" className="font-bold text-bleu hover:text-black">agences à Ramonville</Link></strong> qui, par l’intervention d’un expert, définit une solution pertinente pour vous.
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
query lastsThreePostsStrategieDigitaleToulouse {
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
export default StrategieDigitaleToulouse;




