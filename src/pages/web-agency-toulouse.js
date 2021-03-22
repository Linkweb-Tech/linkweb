import React from "react";
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




class WebAgencyToulouse extends React.Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Web Agency Toulouse : quels avantages ?"
                    description="Linkweb à Toulouse travaille au quotidien avec des professionnels d'horizons différents en vue de leur apporter une solution web adaptée à leurs besoins."
                    url="https://linkweb.fr/web-agency-toulouse/"
                    nom="Web Agency Toulouse"
                    slug="web-agency-toulouse/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Web Agency Toulouse : quels <span className="text-bleu">avantages</span> ?</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">AGENCE DE CRÉATION ET DE RÉFÉRENCEMENT DE SITE INTERNET LOCALISÉE À TOULOUSE EN FRANCE POUR VOUS ACCOMPAGNER DANS VOS PROJETS WEB-MARKETING.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Web Agency Toulouse : vous souhaitez faire appel à notre savoir-faire ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md">Notre <strong className="font-normal">agence web à Toulouse</strong> vous propose une stratégie adaptée à votre projet pour atteindre vos objectifs. Nous vous accompagnons dans le <strong className="font-normal">développement de votre site</strong> et son <strong className="font-normal">référencement</strong> pour rendre votre entreprise plus visible sur <strong className="font-normal">Internet</strong>.</p>
                        <br />
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                        <button
                            className="font-light mx-auto roundedButton bg-darkgrey text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                            type="button"
                            onClick={(e) => {
                            e.preventDefault();
                            window.location.href='/contact-agence-web-toulouse/';
                            }}
                        >Demander un devis</button>
                            {/* <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" color="darkgrey" text="Je demande un devis" /> */}
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-3/5 px-10 mt-16 lg:-mt-48 mb-16 lg:mb-48">
                    <br/>
                    <h3 className="century text-xl text-center">
                        Faire appel à une <Link to="/agence-web-montauban/" className="text-bleu hover:text-black font-bold">agence web</Link> pour mener sa stratégie de communication digitale apporte de nombreux avantages pour le développement de son activité.
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Web Agency Toulouse : une réponse pertinente à votre projet digital</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Linkweb vous fournit une prestation complète, répondant aux nombreux critères du web en s’appuyant sur chacun de vos objectifs. Les réalisations de notre équipe de professionnels du Web sont fonctionnelles et sur-mesure pour chacun des projets que nous menons.</h3>
                        </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Création de </span><br /><span className="font-bold text-5xl md:text-6xl">SITE INTERNET</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">Notre <strong className="font-normal">service de création de sites</strong> définit une ergonomie et un design uniques avec un parcours de navigation fluide pour <strong className="font-normal">votre site</strong>. Les <strong className="font-normal">développeurs de Linkweb</strong> favorisent l'accessibilité des interfaces et apportent une <strong className="font-normal">expérience utilisateur optimale</strong> grâce au travail de l'<strong className="font-normal">UX et UI design</strong> (<strong className="font-normal">responsive design</strong> adapté pour un <strong className="font-normal">site mobile</strong>, ordinateur ou tablette). De plus, ils mobilisent les outils les plus performants pour répondre à vos attentes en termes de visuel comme de performances. 
                            <br/><br/>Notre expérience et nos outils nous permettent de jouer un rôle de <strong className="font-normal">conseil</strong> sur la création des différents <strong className="font-normal">types de sites</strong>. Qu'il s'agisse d'un professionnel proposant de la <strong className="font-normal">vente en ligne</strong> (une boutique en ligne créée avec un <strong className="font-normal">CMS</strong> comme <strong className="font-normal">Prestashop</strong> sera approprié), d'une prestation de service (un site vitrine ou catalogue avec un <strong className="font-normal">CMS</strong> type <strong className="font-normal">Wordpress</strong>), il existe autant de solutions que de projets.
                            <br/><br/>Toutes nos réalisations sont pensées pour offrir la meilleure <strong className="font-normal">expérience utilisateur</strong>, une identité visuelle respectant une <strong className="font-normal">charte graphique</strong> précise et répondre aux besoins de nos <strong className="font-normal">clients</strong>. Notre priorité est de vous apporter des solutions pertinentes du choix de l’<strong className="font-normal">hébergement</strong> à la maintenance régulière du site en passant par le choix et la gestion de votre <strong className="font-normal">nom de domaine</strong>.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Stratégie Web</span> <br /><span className="font-bold text-6xl">MARKETING</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Notre <strong className="font-normal">agence internet Toulouse</strong> définit votre <strong className="font-normal">stratégie digitale</strong> personnalisée pour dynamiser votre <strong className="font-normal">communication en ligne</strong>. Pour cela, nos <strong className="font-normal">services de référencement</strong> oeuvrent à définir vos besoins et proposer des solutions pertinentes : une entreprise souhaitant un <strong className="font-normal">retour sur investissement</strong> rapide et ponctuel utilisera le <strong className="font-normal">référencement payant Google Adwords (SEA)</strong> alors que pour un positionnement durable, le <strong className="font-normal">référencement naturel SEO</strong> sera mieux approprié. 
                            <br/><br/>Parmi les <strong className="font-normal">agences</strong> existantes en France, Linkweb fait partie des prestataires qui veillent à réaliser une conception de projet qui correspond entièrement à ses <strong className="font-normal">clients</strong>. 
                            <br/><br/>Nous sommes à l’écoute pour mettre en place les meilleures solutions en fonction de votre demande : le contenu rédigé est optimisé par nos <strong className="font-normal">référenceurs</strong> puis présenté plusieurs fois au porteur de projet en vue d'être validé. De plus, nos <strong className="font-normal">clients</strong> bénéficient d’un point mensuel pour un travail de <strong className="font-normal">communication et webmarketing</strong> totalement transparent et adapté à l'évolution de votre société. 
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Popularité et </span><br /><span className="font-bold text-6xl">E-RÉPUTATION</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">L'<strong className="font-normal">E-réputation</strong> est un facteur clé pour le <strong className="font-normal">référencement naturel d’un site</strong>. Quel que soit le type de site (produit par exemple avec Wordpress), il est particulièrement utile pour travailler son <strong className="font-normal">image de marque</strong> et son autorité sur <strong className="font-normal">Internet</strong>. Les avis clients sont des éléments déclencheurs dans une stratégie. Ils peuvent même devenir de vrais moteurs pour la <strong className="font-normal">conversion</strong>. <strong className="font-normal">Linkweb</strong> vous aide à parfaire votre image sur le Web pour un maximum de retombées économique et la dynamisation de votre activité <strong className="font-normal">en ligne</strong>.
                            <br/><br/>L'E-réputation est un élément tout aussi important lorsque l'on choisit de faire appel à <strong className="font-normal">Google Ads</strong> notamment pour un <strong className="font-normal">site e-commerce</strong> (via Prestashop ou WooCommerce). La sponsorisation permet de placer des annonces en tête des <strong className="font-normal">résultats de recherche de moteurs comme Google</strong>. Notre <strong className="font-normal">agence</strong> spécialisée met ses compétences au profit de votre réputation : la <strong className="font-normal">e-réputation sur le Web</strong> fait partie des <strong className="font-normal">leviers de communication et webmarketing</strong> pour avoir un impact sur ses cibles de clientèles.
                            </p>
                    </div>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Faites confiance à une équipe de professionnels qualifiés</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Linkweb fait partie des agences web en France qui mettent à profit leur savoir-faire ainsi que leur expérience. Nous sommes à l'écoute et faisons preuve de transparence pour vous fournir une prestation de service digital complète et adaptée à vos besoins.</h3>
                        </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                <div className="w-full flex justify-center items-center lg:w-5/12">
                    <img className="w-full" src={mac} alt="Web Agency Toulouse"/>
                </div>
                <div className="w-full lg:w-1/2 my-10  flex flex-col">
                    <div className="w-full flex-col md:flex-row flex px-auto">
                        <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                            <p className="text-center">1</p>
                        </div>
                        <div className="w-full px-6 lg:px-6 flex flex-col justify-center">
                                <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>UNE ÉQUIPE EXPÉRIEMENTÉE
                                </h3>
                                <br/>
                                <h4 className="century"><span className="font-bold">Depuis 2008, nous oeuvrons à rendre la conception de vos sites la plus adaptée et performante</span></h4>
                                <br/>
                                <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" >De part son expérience, notre <strong className="font-normal">agence internet</strong> est en mesure de vous apporter une solution performance, marquée par le respect de votre <strong className="font-normal">identité visuelle</strong> et des techniques <strong className="font-normal">marketing</strong> adaptées à vos besoins. Nous vous apportons un accompagnement dans la gestion de votre <strong className="font-normal">projet en ligne</strong> ainsi qu'un <strong className="font-normal">conseil</strong> dans le développement d'un projet pertinent et sur-mesure.</p>
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
                                        <span className="text-bleu">/</span>DES PROFESSIONNELS COMPÉTENTS
                                    </h3>
                                    <br/>
                                    <h4 className="century"><span className="font-bold">Notre <Link to="/agence-digitale-toulouse/" className="font-bold text-bleu hover:text-black">agence digitale</Link> qualifiée vous offre la mise en place de solutions de développement et de communication digitale fonctionnelles.</span></h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify"><strong className="font-normal">Linkweb</strong> est en capacité de manipuler tous les outils efficaces (des <strong className="font-normal">CMS</strong> comme <strong className="font-normal">Wordpress</strong>, <strong className="font-normal">Prestashop</strong>, des régies publicitaires comme <strong className="font-normal">Google Ads</strong>) en vue de la conception et à la gestion de votre <strong className="font-normal">projet</strong>. Nos équipes sont qualifiées pour la production d’une <strong className="font-normal">interface visuelle</strong> et graphique fonctionnelle, ainsi que dans la mise en place et le développement d’une <strong className="font-normal"><Link to="/strategie-digitale-toulouse/" className="font-bold text-bleu hover:text-black">stratégie webmarketing</Link></strong> performante.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p className="text-center">3</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>DU CONSEIL À L'ACCOMPAGNEMENT
                                    </h3>
                                    <br/>
                                    <h4 className="century"><span className="font-bold">Grâce à notre suivi mensuel, vous êtes tenu informé de notre travail de création dans le cadre de votre projet de communication et webmarketing</span></h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Nous réalisons une veille détaillée et régulière au sujet des avancées du <strong className="font-normal">site</strong> et de l’activité constatée sur vos <strong className="font-normal">pages</strong>. Pour atteindre vos objectifs, nous tenons à vous apporter tout le conseil nécessaire sur la gestion du projet en termes de <strong className="font-normal">stratégie</strong> et de <strong className="font-normal">contenu</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p className="text-center">4</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>DES INTERLOCUTEURS RÉACTIFS
                                    </h3>
                                    <h4 className="century"><span className="font-bold">L’équipe de Linkweb est réactive fait preuve d’adaptabilité vis-à-vis des problématiques du web. </span></h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Notre <strong className="font-normal">entreprise digitale</strong> met un point d’honneur à faire preuve de réactivité et à répondre à vos demandes dans les meilleurs délais. Les <strong className="font-normal">référenceurs</strong> et <strong className="font-normal">développeurs</strong> de Linkweb veillent à ce que la navigation sur <strong className="font-normal">votre site</strong> soit constamment optimale pour les utilisateurs. </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                    </div>
            </section>
            </section>
            <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Web Agency Toulouse : nos process sont adaptés pour mener votre projet web</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">L'administration de vos projets vise un maximum de performance dans des délais des plus brefs. Notre <Link to="/agence-web-ramonville/" className="font-bold text-bleu hover:text-black">agence spécialisée</Link> consacre tout son temps et son efficacité à la réalisation de vos projets professionnels.</h3>
                        </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="UN INVESTISSEMENT EN TEMPS">
                                <p>Le travail méticuleux qu’implique la <strong className="font-normal">production web</strong>, tant du point de vue graphique que technique et stratégique, nécessite de la rigueur et de la précision. Linkweb fait partie des <strong className="font-normal">agences de France</strong> qui sont en mesure de mobiliser des spécificités techniques en même temps que des compétences en <strong className="font-normal">communication</strong> en vue de soigner les sites qui lui sont confiés. 
                                <br/><br/>En faisant appel à l'<strong className="font-normal">équipe de Linkweb</strong>, notre client souscrit à du temps de travail exclusivement dédié au projet.
                                </p>
                            </div>  
                            <div label="UNE SOLUTION ADAPTÉE À VOS AMBITIONS">
                                <p>
                                Parmi l'ensemble des <strong className="font-normal">agences de France</strong>, les professionnels de <strong className="font-normal">Linkweb</strong> sont à votre écoute et vous conseillent pour vous apporter les résultats attendus. Notre <strong className="font-normal">équipe</strong> veille à répondre à votre recherche de <strong className="font-normal">retour sur investissement</strong> en optimisant les méthodes employées pour chaque plan d’actions. 
                                </p>
                            </div>
                            <div label="UNE MISE EN PLACE STRATÉGIQUE PERFORMANTE">
                                <p>
                                Le savoir-faire et les qualifications des <strong className="font-normal">agences</strong> comme Linkweb font de nos consultants, des interlocuteurs aptes à définir une <strong className="font-normal">stratégie marketing</strong> adaptée à vos besoins. Grâce à notre <strong className="font-normal">expérience</strong> et au soin mobilisé dans notre manière de travailler, notre <strong className="font-normal">agence</strong> est en mesure d'apporter une solution parfaitement appropriée au projet de chacun de nos <strong className="font-normal">clients</strong>. 
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
query lastsThreePostsWebAgencyToulouse {
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
export default WebAgencyToulouse;




