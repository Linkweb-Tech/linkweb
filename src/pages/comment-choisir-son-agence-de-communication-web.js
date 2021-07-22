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




class CommentChoisirSonAgenceDeCommunicationWeb extends Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Comment choisir son agence de communication web ?"
                    description="Nombreux sont les acteurs en mesure de vous accompagner pour la mise en place de votre projet. Voici comment choisir votre agence de communication web."
                    url="https://linkweb.fr/comment-choisir-son-agence-de-communication-web/"
                    nom="Comment choisir son agence de communication web ?"
                    slug="comment-choisir-son-agence-de-communication-web/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Comment choisir son <span className="text-bleu">agence de communication web</span> ?</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Pour votre projet de création digitale ou de référencement internet : pensez aux agences web.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}

                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Vous souhaitez nous contacter ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md">Pour vous projeter et obtenir un chiffrage de votre projet n’hésitez pas à nous contacter. <br /><br />Notre agence de communication web, vous accompagne pour définir votre stratégie web marketing.</p>
                        <br />
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                            <button
                                className="font-light mx-auto roundedButton bg-darkgrey text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = '/contact-agence-web-toulouse/';
                                }}
                            >Je demande un devis</button>
                            {/* <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" color="darkgrey" text="Je demande un devis" /> */}
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-3/5 px-10 mt-16 lg:-mt-48 mb-16 lg:mb-48">
                    <br />
                    <h3 className="century text-xl text-center">
                        Faire appel à des professionnels de la création web et du référencement SEO est essentiel pour recourir à des compétences spécifiques et faire le choix d'interlocuteurs qualifiés.
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Quels sont les différents prestataires web ?</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Il existe plusieurs solutions pour établir un plan de webmarketing. Parmi les entreprises existantes, certaines se spécialisent dans des disciplines comme le développement web, la <Link to="/agence-de-communication-digitale/" className="text-bleu hover:text-black font-bold">communication digitale</Link> ou les réseaux sociaux. D’autres professionnels fournissent des solutions plus globales : cela dépend du type de société à qui vous faites appel pour la mise en place de votre projet.</h3>
                    </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Agence web</span><br /><span className="font-bold text-5xl md:text-6xl">SPÉCIALISÉE</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg z-50">Les <strong className="font-normal">agences web</strong> proposent la <strong className="font-normal">création de sites web</strong>, mais apportent également un <Link to="/quelle-agence-web-choisir/" className="text-bleu font-bold hover:text-white"><strong className="font-bold">conseil</strong> et une <strong className="font-bold">expertise</strong></Link> solides à ses <strong className="font-normal">clients</strong>. Ses compétences en communication sont mises au service de l’entreprise cliente pour lui apporter des <strong className="font-normal">solutions</strong> pérennes et fiables.
                        <br /><br />De plus, l’<strong className="font-normal">agence web spécialisée</strong> réunit tous les domaines qui gravitent autour des <strong className="font-normal">sites internet</strong> et de leur conception pour fournir une <strong className="font-normal">stratégie</strong> performante.
                        <br /><br />Elle fournit des <strong className="font-normal">solutions sur-mesure</strong> grâce au <strong className="font-normal">webmarketing</strong>. Il peut s'agir de la <strong className="font-normal">création de site</strong>, de <strong className="font-normal">référencement naturel</strong> ou de <strong className="font-normal">référencement payant</strong>, du <strong className="font-normal">webdesign</strong> (<strong className="font-normal">UX Design</strong> et ergonomie des pages) ou encore de la gestion des <strong className="font-normal">réseaux sociaux</strong>.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Agence de communication</span><br /><span className="font-bold text-6xl">GLOBALE</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">Ce type d’<strong className="font-normal">agence de communication 360</strong> est une agence pluridisciplinaire : on regroupe en son sein une grande diversité de savoirs-faire et d’outils qui permettent d’apporter des <strong className="font-normal">solutions globales</strong>.
                        <br /><br />Elle détermine des objectifs globaux en fonction des moyens de porteurs de projets. Elle peut comporter un service <strong className="font-normal">graphisme</strong> et dédié à l’<strong className="font-normal">identité visuelle</strong> du site, à la <strong className="font-normal">création d’une image de marque</strong>, l'événementiel mais peut également oeuvrer dans le domaine du <strong className="font-normal">digital</strong>.
                        <br /><br />En apportant un regard global, elles ne se spécialisent pas, ce qui pourrait se ressentir dans la mise en place stratégique liée aux problématiques du <strong className="font-normal">web</strong>.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Professionnel </span><br /><span className="font-bold text-6xl">FREELANCE</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg z-50">Le <strong className="font-normal">professionnel Freelance</strong> se montre polyvalent, il peut apporter sa maîtrise sur divers éléments : l’<strong className="font-normal">infographie</strong>, le développement, ou encore la <strong className="font-normal">rédaction de contenu</strong>, etc.
                            <br /><br />Certains travailleurs indépendants vont être amenés à s’associer pour varier leurs services et utiliser plusieurs <strong className="font-normal">outils</strong> pour répondre à la <strong className="font-normal">demande du client</strong>.
                            <br /><br />Ce prestataire a pour avantage d’<strong className="font-normal">être réactif</strong> et va être en mesure d’adapter ses horaires en cas d’urgence. Toutefois, son mode d'organisation pourra se ressentir dans la <strong className="font-normal">définition de sa stratégie web</strong>, puisque le <strong className="font-normal">Freelance</strong> doit oeuvrer dans de nombreux domaines avec des ressources limitées.</p>
                    </div>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Quels sont les critères pour choisir <br />son agence de communication web ?</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Choisir son agence est une étape déterminante pour son son projet de communication internet. Pour faire les bons choix et décider de l’entreprise avec laquelle vous vous lancerez dans une collaboration de qualité, définissez vos attentes et contrôlez que l’agence remplissent bien certains critères indispensables.</h3>
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
                                        <span className="text-bleu">/</span>LA COMPÉTENCE
                                </h3>
                                    <br />
                                    <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" >Le domaine du <a href="/agence-web-marketing-toulouse/" className="text-bleu hover:text-black font-bold"><strong>marketing digital</strong></a> demande un <strong className="font-normal">savoir-faire</strong> exigeant aux <strong className="font-normal">consultants</strong>, ainsi qu'une grande précision et enfin de la rigueur. Que cela concerne l’<strong className="font-normal">élaboration de site internet</strong>, la <strong className="font-normal">stratégie de communication pour gagner en visibilité</strong>, ainsi que les nombreux autres <strong className="font-normal">leviers du webmarketing</strong>, les <strong className="font-normal"><Link to="/agence-web-cahors/" className="text-bleu hover:text-black font-bold">professionnels de l’agence digitale</Link></strong> répondent à une méthodologie très précise.</p>
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
                                        <span className="text-bleu">/</span>L'EXPÉRIENCE
                                    </h3>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Lorsque l'on porte un <strong className="font-normal">projet de communication internet</strong>, il est rassurant de s’adresser à un consultant aguerri et expérimenté. Cette <strong className="font-normal">expérience professionnelle</strong> compte au moment de <strong className="font-normal">choisir son agence</strong>, elle témoigne d’une bonne connaissance du milieu et de ses complexités. Lors de votre rencontre avec le <strong className="font-normal">spécialiste du web</strong>, vous serez en mesure d'estimer son objectivité et sa performance.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">3</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>L'ÉCOUTE ET LA COLLABORATION
                                    </h3>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">La <strong className="font-normal">collaboration avec votre agence digitale</strong> va avoir un impact fort sur le rendu final de <strong className="font-normal">votre site internet</strong>. Pour obtenir un <strong className="font-normal">site à votre image</strong>, il est indispensable d’avoir en face de vous, une équipe à l’<strong className="font-normal">écoute de vos besoins</strong> et de vos envies. L’agence doit vous apporter des <strong className="font-normal">conseils</strong> en tenant compte de vos attentes et vos critères.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">4</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>LA PERTINENCE DE LA SOLUTION
                                    </h3>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">L’objectif premier en faisant appel à un spécialiste est de <strong className="font-normal">trouver des réponses pertinentes relativement à vos besoins</strong>. La stratégie qui vous est alors proposée peut-être perfectionnée, modifiée : elle doit s’être appuyée sur le <strong className="font-normal">cahier des charges</strong> établi avec l’<strong className="font-normal">entreprise digitale</strong>. En fonction de votre activité, des <strong className="font-normal">conseils de l’agence</strong> et de son analyse, le plan proposé doit être adapté à vos <strong className="font-normal">objectifs</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">5</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>LA RÉACTIVITÉ ET LA TRANSPARENCE
                                    </h3>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Une <strong className="font-normal">agence digitale</strong> doit être <strong className="font-normal">réactive</strong> : responsable de votre <strong className="font-normal">communication sur Internet</strong>, elle doit être en mesure d'intervenir lorsque des urgences surviennent. En effet, lorsqu’un problème perturbe le <strong className="font-normal">bon fonctionnement des sites</strong>, que du <strong className="font-normal">contenu</strong> doit être rectifié ou mis à jour, le <strong className="font-normal">consultant spécialisé sur Internet</strong> doit intervenir rapidement. De plus, il est impératif qu’elle fasse preuve de <strong className="font-normal">clarté</strong> et de <strong className="font-normal">transparence</strong> avec vous sur les démarches entreprises.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Que peut-on attendre d’une agence de communication web ?</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Il existe de nombreuses raisons de se tourner vers une agence web pour son projet. Parmi elles, le conseil et l’accompagnement du prestataire sont importants. Le support de l’agence de communication vous offre l’accès à de plus grandes connaissances sur les divers aspects d’internet et du webmarketing. Il s'agit là d'un élément incontournable pour mener à bien votre plan de communication.</h3>
                    </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="LA MAÎTRISE DU WEB MARKETING">
                                <p>En proposant ses services aux entreprises, l’<strong className="font-normal">équipe de l’agence</strong> met à la disposition du client, tout son professionnalisme et sa <strong className="font-normal">maîtrise du sujet</strong>.
                                    <br /><br />
                                    Elle démontre qu’elle possède une grande <strong className="font-normal">expérience</strong> et des <strong className="font-normal">qualifications pertinentes</strong> pour fournir des résultats pertinents à ses <strong className="font-normal">clients</strong>.
                                    <br /><br />
                                    Son but, au travers des <strong className="font-normal">sites mis en ligne</strong>, est de vous mener à des <strong className="font-normal">résultats visibles sur le Web</strong> grâce au <strong className="font-normal">marketing digital</strong> avec un <strong className="font-normal">conseil</strong> et une analyse fondés.
                                </p>
                            </div>
                            <div label="DES PROFESSIONNELS COMPÉTENTS ET EXPÉRIMENTÉS">
                                <p>Concernant la <Link to="/comment-notre-agence-de-conception-de-site-internet-realise-votre-projet/" className="text-bleu hover:text-black font-bold"><strong className="font-normal">conception de votre site</strong></Link>, de votre <strong className="font-normal">webdesign</strong>, le <strong className="font-normal">référencement SEO ou SEA</strong>, les <strong className="font-normal">consultants</strong> mettent tout en œuvre pour vous permettre d’atteindre les <strong className="font-normal">objectifs</strong> que vous vous êtes fixé.
                                <br /><br />
                                Les <strong className="font-normal">professionnels de l’agence</strong> mettent à profit leurs connaissances ainsi que leur <strong className="font-normal">expérience</strong> pour mener à bien <strong className="font-normal">votre projet</strong>. Grâce à cette expérience, les choix qui seront effectués seront fondés grâce à une connaissance parfaite du domaine et donneront lieu à la mise en place de services adaptés pour votre société.
                                <br /><br />
                                Les collaborateurs savent appréhender les spécificités techniques d’<strong className="font-normal">Internet</strong> et de l’<strong className="font-normal">activité en ligne</strong> pour un résultat cohérent avec toutes vos attentes.
                                </p>
                            </div>
                            <div label="UN INTERLOCUTEUR UNIQUE POUR UN SUIVI PERSONNALISÉ">
                                <p>La <strong className="font-normal">proximité</strong> avec votre consultant est un élément clé pour la qualité de son travail.
                                <br /><br />
                                En effet, le <strong className="font-normal">prestataire chargé de votre site</strong> entretient une relation unique avec vous pour mener votre site à l’effet escompté : <strong className="font-normal">obtenir une visibilité sur-mesure</strong>.
                                <br /><br />
                                Sa priorité est de vous apporter un soutien constant dans le temps, de vous accompagner dans l’avancement du <Link to="/pourquoi-travailler-dans-une-agence-web/" className="text-bleu hover:text-black font-bold"><strong className="font-normal">travail de référencement SEO et SEA</strong></Link> sur des <strong className="font-normal">moteurs de recherche</strong> influents comme <strong className="font-normal">Google</strong>.
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
query lastsThreePostsCommentChoisirSonAgenceDeCommunicationWeb {
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
export default CommentChoisirSonAgenceDeCommunicationWeb;




