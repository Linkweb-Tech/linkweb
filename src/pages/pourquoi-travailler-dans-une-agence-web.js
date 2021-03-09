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
import siteinternet from "../images/web-indispensable.jpg";
import referencement from "../images/web-mouvement.jpg";
import webdesign from "../images/freelance.jpg";




class PourquoiTravaillerdansuneAgenceWeb extends React.Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Pourquoi travailler dans une agence web ?"
                    description="Travailler au sein d'une agence web nécessite une rigueur ainsi qu'une connaissance des problématiques du Web particulièrement approfondies."
                    url="https://linkweb.fr/pourquoi-travailler-dans-une-agence-web/"
                    nom="Pourquoi travailler dans une agence web ?"
                    slug="pourquoi-travailler-dans-une-agence-web/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Pourquoi travailler dans une <span className="text-bleu">agence web</span> ?</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Si vous souhaitez vous lancer dans une expérience digitale unique, travailler dans une agence de communication web est fait pour vous.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Vous souhaitez postuler ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md">En postulant auprès de l’agence Linkweb, découvrez les enjeux du web et le travail en équipe. Nous étudions tous les profils.</p>
                        <br />
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                        <button
                            className="font-light mx-auto roundedButton bg-darkgrey text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                            type="button"
                            onClick={(e) => {
                            e.preventDefault();
                            window.location.href='/contact-agence-web-toulouse/';
                            }}
                        >Je propose ma candidature</button>
                            {/* <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" color="darkgrey" text="Je demande un devis" /> */}
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-3/5 px-10 mt-16 lg:-mt-32 mb-16 lg:mb-48">
                    <br/>
                    <h3 className="century text-xl text-center">
                    Appréhender le webmarketing en agence, c’est travailler ensemble à apporter les meilleures solutions et les stratégies les plus pertinentes aux entreprises qui font appel à nos services.
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Le domaine du web : un secteur plein d’avenir</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Le marketing digital est un outil dont il est difficile de se passer dans le monde professionnel comme dans le privé. En constant mouvement, Internet comporte une multitude de spécificités qui ne cessent de rythmer notre quotidien.</h3>
                        </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Le Web est</span><br /><span className="font-bold text-5xl md:text-6xl">INDISPENSABLE</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">Pour une entreprise, le Web est un terrain de jeu qui regorge d'<strong className="font-normal">outils de communication</strong> pour sa <strong className="font-normal">stratégie marketing</strong>. Pour obtenir de la <strong className="font-normal">visibilité</strong>, l’<strong className="font-normal">agence Linkweb</strong> accompagne les professionnels dans leur <strong className="font-normal">référencement naturel SEO et SEA</strong> sur les <strong className="font-normal">moteurs de recherche</strong> (tels que )<strong className="font-normal">Google</strong>). Les <strong className="font-normal">spécialistes du digital</strong> mettente en place des solutions pérennes pour générer du <strong className="font-normal">trafic qualifié sur les sites internet</strong>.
                        <br/><br/>Le <strong className="font-normal">Web</strong> est mobilisé au quotidien. Il permet de répondre à tous les besoins l’internaute. Le développement d'un <strong className="font-normal">support de communication</strong> comportant des fonctionnalités est devenu indispensable. Bien figurer dans les <strong className="font-normal">résultats de recherche</strong> grâce à l’expertise de l’<Link to="/agence-web-marketing-toulouse/" className="text-bleu hover:text-black font-bold"><strong className="font-normal">agence de web marketing</strong></Link> offre une visibilité auprès d'un public qualifié.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Un univers en perpétuel</span><br /><span className="font-bold text-6xl">MOUVEMENT</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Le <strong className="font-normal">Web</strong> ne cesse d’évoluer et de proposer de nouveaux usages. Les <strong className="font-normal">agences</strong> spécialisées aident leurs <strong className="font-normal">clients</strong> à appréhender ce domaine pour en tirer un maximum d’avantages en faveur de leur société. 
                        <br/><br/>L’univers du <strong className="font-normal">digital</strong> est en mouvement. C'est pourquoi, faire une place pour ses <strong className="font-normal">sites web</strong> en s’assurant qu’ils soient bien référencés pour apporter des résultats à son entreprise est une solution durable, mais aussi un recommencement perpétuel. 
                        <br/><br/>Nos <strong className="font-normal">compétences</strong> et notre <strong className="font-normal">expertise</strong> permettent d'apporter aux <strong className="font-normal">projets</strong>que nous menons, une recherche de <strong className="font-normal">conversion</strong> adaptée aux besoins de nos clients, mais tenant compte des évolutions perpétuelles d’<strong className="font-normal">Internet</strong> et du <strong className="font-normal">Web</strong>.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Le Web et les technologies au </span><br /><span className="font-bold text-6xl">QUOTIDIEN</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Au quotidien, nous consacrons une grande place à l’<strong className="font-normal">utilisation des réseaux</strong> et des différents <strong className="font-normal">canaux de communication</strong> du net. Chaque projet de <strong className="font-normal">création de site</strong> doit apporter une réponse à la demande qui émane de l'internaute. Les <strong className="font-normal">requêtes</strong> sont extrêmement variées. Les nombreux<strong className="font-normal">services en ligne</strong> apportent des solutions à toutes sortes de demandes quotidiennes.
                            <br/><br/>Nous constatons également depuis quelques années que nos comportements ont changé face aux <strong className="font-normal">solutions proposées en ligne</strong>. Nos habitudes se sont construites, depuis l’apparition des nouvelles technologies, sur les différents usages proposés par le web et la facilité que cette expérience apporte au quotidien.</p>
                    </div>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Quels sont les pré-requis pour travailler dans une agence web ?</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Le domaine du webmarketing et de la communication web font appel à des savoirs et des compétences bien spécifiques. Intégrer l'équipe de spécialistes d’une agence et être sollicité sur de la création et du développement de site nécessitent la mobilisation de certains pré-requis.</h3>
                        </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                <div className="w-full flex justify-center items-center lg:w-5/12">
                    <img className="w-full" src={mac} alt="Pourquoi travailler dans une Agence Web ?"/>
                </div>
                <div className="w-full lg:w-1/2 my-10  flex flex-col">
                    <div className="w-full flex-col md:flex-row flex px-auto">
                        <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                            <p className="text-center">1</p>
                        </div>
                        <div className="w-full px-6 lg:px-6 flex flex-col justify-center">
                                <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>VOUS DEVEZ ÊTRE FORCE DE PROPOSITION : SOYEZ CRÉATIF
                                </h3>
                                <br/>
                                <p className="w-full century pb-4 text-justify">En intégrant notre <Link to="/comment-choisir-son-agence-de-communication-web/" className="text-bleu hover:text-black font-bold"><strong className="font-normal">agence webmarketing de Toulouse</strong></Link> vous vous impliquez dans des projets créatifs et originaux, Il est important d'apporter de l'originalité et de la nouveauté dans les productions à destination de nos <strong className="font-normal">clients</strong>.<br/><br/>
                                Afin de travailler en contact avec des clients d'horizons différents, il faut savoir faire preuve de créativité, d'initiatives et être force de proposition. Chaque projet est un nouveau <strong className="font-normal">projet</strong> qui doit être unique et original. Chaque activité ainsi que chaque conception sont uniques. C'est pourquoi, il peut être nécessaire de recourir à une offre personnalisée pour une <strong className="font-normal">communication</strong> efficace.</p>
        
                                {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                        </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p className="text-center">2</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>VOUS DEVEZ RÉPONDRE AUX ATTENTES DES ALGORITHMES
                                    </h3>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Sur un site, chaque élément remplit une fonction, notamment en ce qui concerne la <strong className="font-normal">visibilité du site</strong>.<br/><br/>
                                    Pour <strong className="font-normal">générer un trafic</strong> intéressant et remplir les <strong className="font-normal">critères des moteurs</strong> exigeants comme Google, il est nécessaire d'employer des méthodes particulièrement précises et rigoureuses.<br/><br/>
                                    Les <strong className="font-normal">professionnels de l’agence</strong> font preuve de rigueur et ont le sens du détail. En effet, au sein des <strong className="font-normal">solutions</strong> mises en place par l’équipe, chaque élément compte et requiert une attention particulière pour ne rien laisser au hasard dans le cadre du <strong className="font-normal">webmarketing</strong>. </p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p className="text-center">3</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>VOUS DEVEZ ÊTRE L'ÉCOUTE POUR CERNER LES BESOINS DU CLIENT
                                    </h3>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Parmi les compétences les plus importantes pour l’<strong className="font-normal">agence</strong>, être attentif et <strong className="font-normal">à l’écoute vis-à-vis de son client</strong> est impératif. Pour une offre totalement adaptée aux attentes et aux différents besoins des <strong className="font-normal">professionnels</strong>, les entreprises de webmarketing doivent mettre en place une véritable relation de collaboration.<br/><br/>
                                    Pour une efficacité optimale, un interlocuteur unique est attribué pour chaque projet. Ceci permet de créer une proximité avec le <strong className="font-normal">client</strong> et de pouvoir être réactif lors de chacune des étapes de <strong className="font-normal">suivi et de développement</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p className="text-center">4</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>VOUS DEVEZ ÊTRE À L'AFFUT DES DERNIÈRES NOUVEAUTÉS
                                    </h3>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Pour une bonne <strong className="font-normal">gestion de projet en ligne</strong>, le professionnel travaillant au sein de l’<strong className="font-normal">agence</strong> se tient informé des nouveautés du Web. Les fonctionnalités et les <strong className="font-normal">outils</strong> évoluent constamment et peuvent voir le jour à tout moment dans le <strong className="font-normal">développement et la création de sites</strong> comme dans leur <strong className="font-normal">design</strong>.<br/><br/>
                                    C’est la raison pour laquelle, un <strong className="font-normal">consultant</strong> doit toujours être à l'affût de moyens d’améliorer ses connaissances <strong className="font-normal">en ligne</strong> et sa productivité.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                    </div>
            </section>
            </section>
            <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Quelles sont les compétences d'une agence web ?</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Travailler en agence webmarketing, c'est avant tout rendre un service de qualité et adapté à chaque profil d'entreprise. Pour cela, les professionnels qualifiés au sein de l’équipe ont suivi une formation dans chacune des disciplines sur lesquelles ils sont spécialisés. Pour intervenir sur le design de site, sur la visibilité et le taux de conversion des pages, leur savoir-faire est la clé de la réussite.</h3>
                        </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="LE DÉVELOPPEMENT WEB">
                                <p>Formés pour <strong className="font-normal">mettre en place une stratégie de communication efficace</strong> et adaptée à leurs <strong className="font-normal">clients</strong>, les <strong className="font-normal">professionnels du Web</strong> sont compétents dans le <strong className="font-normal">développement de solutions web fonctionnelles</strong>. Notre objectif réside dans la <strong className="font-normal">conception et la concrétisation d'un projet</strong> adapté aux besoins de notre client. 
                                    <br/><br/>
                                    Le travail du <strong className="font-normal">développeur</strong> chez <strong className="font-normal">Linkweb</strong> consiste produire tout <strong className="font-normal">type de site (vitrine, e-commerce, catalogue ou sur-mesure)</strong> et proposer une <strong className="font-normal">stratégie parfaitement fonctionnelle</strong> en fonction de chaque problématique. <strong className="font-normal">Linkweb</strong> est composée de professionnels capables de <strong className="font-normal">créer un site web parfaitement capable d'être adapté à chacune des attentes</strong> d'une entreprise pour un résultat pertinent.
                                </p>
                            </div>
                            <div label="LE RÉFÉRENCEMENT WEB">
                                <p>Le rôle du <strong className="font-normal">référenceur</strong> consiste à établir une méthode capable d'apporter à un site, de la <strong className="font-normal">visibilité</strong> grâce au <strong className="font-normal">Web Marketing</strong>. Son rôle est de mener un <strong className="font-normal">projet digital</strong> de façon à obtenir une place au plus haut des <strong className="font-normal">pages de résultats de recherche des moteurs</strong> et sur des requêtes populaires. <strong className="font-normal">Référencer un site</strong> à travers les prestations des <strong className="font-normal">agences digitales</strong> apporte une visibilité considérable ainsi qu'une <strong className="font-normal">solution de communication</strong> complète. 
                                <br/><br/>
                                Nos <strong className="font-normal">professionnels en gestion du référencement naturel</strong> maîtrisent les techniques pour répondre aux attentes des <strong className="font-normal">algorithmes</strong> et créer du <strong className="font-normal">contenu optimisé</strong> adapté pour les robots commme pour les utilisateurs. 
                                <br/><br/>
                                Pour l’entreprise cliente poursuivant des <strong className="font-normal">objectifs de conversion</strong> élevés et à la recherche d'un <strong className="font-normal">retour sur investissement</strong> rapidement, les consultants proposent aussi du <strong className="font-normal">référencement payant SEA</strong>.
                                </p>
                            </div>
                            <div label="LE SUIVI DES DOSSIERS CLIENTS">
                                <p>Notre <strong className="font-normal">agence</strong> procède à un suivi régulier de l’<strong className="font-normal">activité du site</strong> auprès de l’entreprise cliente. Un point mensuel est réalisé pour rendre compte des interactions observées, du <strong className="font-normal">trafic</strong>, de la conversion et des <strong className="font-normal">techniques marketing</strong> mobilisées.
                                <br/><br/>
                                Grâce à cette veille régulière, le consultant peut cerner les <strong className="font-normal">objectifs atteints</strong>, mais aussi les objectifs à définir au vu de l’avancement du projet tout en conservant une <strong className="font-normal">transparence et une clarté</strong> sur son activité.
                                <br/><br/> 
                                En faisant état des moyens utilisés et des stratégies employées de façon régulière, une relation de confiance s'établit et doit nous amener à apporter une <strong className="font-normal">réponse concrète aux objectifs</strong> de chaque entreprise.
                            </p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="w-full bg-black flex flex-col md:flex-row">
                      <div className="w-full order-last md:order-first md:w-1/4 bg-bleu bordbloc text-white flex flex-col items-center justify-center mx-auto">
                        <span className="my-10"><a href="tel:0533950030" className="text-center text-xl lg:text-3xl xl:text-5xl century"><span className="text-2xl lg:text-6xl font-bold">/</span> 05 33 95 00 30</a></span>
                      </div>
                      <div className="w-full order-first md:order-last md:w-3/4 my-6 text-white p-6 lg:px-24">
                          <h2 className="century text-center md:text-right text-2xl lg:text-3xl xl:text-4xl tracking-wider pb-3 leading-tight">Vous souhaitez postuler auprès d'agences web comme Linkweb ?</h2>
                        <br/>
                        <hr className="border-solid  w-1/2 md:w-1/6 border-bleu mr-auto md:mr-0"/>
                        <br/>
                        <div className="flex items-end my-10 justify-end flex-col">
                            <p className="w-full lg:w-3/4 century text-center md:text-right text-lg md:text-sm lg:text-lg">Travailler au sein de <strong className="font-normal">Linkweb</strong> ouvre à de nouvelles perspectives professionnelles. Si vous devrez être force de proposition, vous devrez également vous investir dans des <strong className="font-normal">projets variés</strong>. En maniant des solutions marketing pointues et performantes, notre objectif prioritaire est d'apporter une <strong className="font-normal">solution parfaitement adaptée aux besoins de nos clients</strong>. Pour nous proposer votre candidature, contactez-nous.</p>
                            <div className="max-w-xs ml-auto mr-auto md:mr-0 md:ml-0 block">
                            <button
                            className="font-light mx-auto roundedButton bg-bleu text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                            type="button"
                            onClick={(e) => {
                            e.preventDefault();
                            window.location.href='/contact-agence-web-toulouse/';
                            }}
                        >Nous contacter</button>
                            </div>
                        </div>
                        
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
query lastsThreePostsPourquoiTravaillerdansuneAgenceWeb {
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
export default PourquoiTravaillerdansuneAgenceWeb;




