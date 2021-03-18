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




class AgenceSEAToulouse extends React.Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence SEA Toulouse : confiez vos campagnes marketing à des professionnels"
                    description="L'agence Linkweb vous accompagne dans la création et la gestion de vos campagnes publicitaires Google Ads."
                    url="https://linkweb.fr/agence-sea-toulouse/"
                    nom="Agence SEA Toulouse"
                    slug="agence-sea-toulouse/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Agence <span className="text-bleu">SEA</span> Toulouse</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">NOTRE AGENCE DE RÉFÉRENCEMENT À TOULOUSE VOUS ACCOMPAGNE POUR METTRE EN PLACE VOS CAMPAGNES SEA ADWORDS</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Vous souhaitez développer votre visibilité en ligne ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md">Nous mettons en place et gérons vos <strong className="font-normal">campagnes de référencement payant</strong> pour une visibilité maximale et rapide. Nos prestations prennent en charge le paramètrage, la gestion et le suivi de vos <strong className="font-normal">campagnes Adwords</strong>.</p>
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
                    Linkweb fait partie des agences qui mènent vos campagnes publicitaires dans le but de vous procurer un retour sur investissement.
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Réaliser un investissement maîtrisé avec l’accompagnement d’une agence de référencement</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">La mise en place de campagnes Adwords permet d’obtenir de la visibilité sur le Web en un temps record. Cette visibilité est nécessaire pour vous permettre de déclencher un retour sur investissement.</h3>
                        </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Choix des</span><br /><span className="font-bold text-5xl md:text-6xl">MOTS-CLÉS</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">L’une des premières étapes consiste à déceler les <strong className="font-normal">opportunités de mots-clés</strong> les plus importantes. En ce sens, le <strong className="font-normal">choix des mots-clés</strong> est une étude décisive qui nécessite une étude de votre marché. En tant qu’<strong className="font-normal">agence de référencement</strong>, nous disposons d’outils professionnels nous permettant d’obtenir des données à propos de ces opportunités afin de ne sélectionner que les meilleures.
                        <br/><br/>En apparaissant sur des requêtes fortement effectuées par les utilisateurs, vous multipliez vos chances de réussite et donc d’obtenir un retour sur investissement grâce au référencement payant.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Paramètrage des</span><br /><span className="font-bold text-6xl">CAMPAGNES</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">S’il est un élément à ne pas négliger lors de la mise en place de <strong className="font-normal">campagnes Ads</strong>, il s’agit bien évidemment du ciblage. Bien connaître les profils de personnes à qui vous souhaitez vous adresser est essentiel pour <strong className="font-normal">diffuser vos annonces</strong>. Qu’il s’agisse de <strong className="font-normal">Google Ads</strong> ou de <strong className="font-normal">Facebook Ads</strong>, le <strong className="font-normal">paramétrage des campagnes</strong> tient compte de ce facteur et propose de nombreuses options pour cibler très précisément la diffusion de vos publicités. 
                        <br/><br/>C’est en fonction de critères propres à <strong className="font-normal">votre projet</strong> (critère géographique, critère démographique, votre budget, coût au clic, etc.) que nous mettons en place une <strong className="font-normal">campagne publicitaire</strong> construite pour le succès.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Prévision & </span><br /><span className="font-bold text-6xl">BUDGÉTISATION</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">S'il est parfois difficile d’estimer les potentielles retombées d’une <strong className="font-normal">campagne de publicité en ligne sur Google Adwords</strong>. C’est pourquoi, nous détenons des outils qui nous permettent de réaliser des estimations ainsi que des <strong className="font-normal">prévisions de trafic</strong> fiables. C’est ce qui nous permet de réaliser l’estimation de votre budget, ainsi que de votre <strong className="font-normal">retour sur investissement</strong> la plus précise possible.
                        <br/><br/>En fonction de ces éléments, nous sommes en mesure de définir des objectifs réalistes en selon le budget mobilisé et les <strong className="font-normal">prévisions de trafic</strong> dès le paramètrage de votre <strong className="font-normal">campagne de publicité</strong>.</p>
                    </div>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence SEA à Toulouse : Soyez ROI !</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Grâce à une visibilité supérieure vis à vis des liens issus du référencement naturel (SEO), les liens sponsorisés répondent à un besoin précis et sont une source importante de conversion sur un site internet.</h3>
                        </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                <div className="w-full flex justify-center items-center lg:w-5/12">
                    <img className="w-full" src={mac} alt="Agence SEA Toulouse"/>
                </div>
                <div className="w-full lg:w-1/2 my-10  flex flex-col">
                    <div className="w-full flex-col md:flex-row flex px-auto">
                        <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                            <p className="text-center">1</p>
                        </div>
                        <div className="w-full px-6 lg:px-6 flex flex-col justify-center">
                                <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>VISER JUSTE ET DANS LE BON TIMING
                                </h3>
                                <br/>
                                <h4 className="century"><span className="font-bold">En SEA, tout est question d’opportunité. Il est important de répondre à un besoin précis des utilisateurs et au bon moment.</span></h4>
                                <br/>
                                <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" >En fonction de la période de l’année, vos <strong className="font-normal">campagnes</strong> auront plus ou moins de poids. C’est pourquoi, il est important de bien connaître le profil précis de sa cible en vue d’<strong className="font-normal">identifier des tendances de recherche</strong> et communiquer au bon moment. Par ailleurs, grâce aux <strong className="font-normal">réseaux de recherche et Display</strong>, <strong className="font-normal">Google</strong> offre la possibilité de communiquer envers sa cible, directement là où elle est.</p>
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
                                        <span className="text-bleu">/</span>PRODUIRE UN CONTENU ADAPTÉ
                                    </h3>
                                    <br/>
                                    <h4 className="century"><span className="font-bold">Le SEA permet de répondre à un besoin précis. C’est pourquoi, il est indispensable de proposer un contenu sur-mesure à destination de sa cible.</span></h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Lorsqu’un <strong className="font-normal">utilisateur</strong> recherche un artisan en urgence, ce dernier doit bénéficier de toutes les informations dont il a besoin, mais pas plus. Cela nécessite la <strong className="font-normal">création de pages d’atterrissage (ou landing pages)</strong> spécifiques et qui répondent pertinemment aux <strong className="font-normal">attentes d’un utilisateur</strong> pris dans une situation d’urgence.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p className="text-center">3</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>ÉVALUER POUR AFFINER
                                    </h3>
                                    <br/>
                                    <h4 className="century"><span className="font-bold">Lorsqu’une stratégie publicitaire est définie et que les annonces sont en ligne, il n’est pas trop tard pour revenir dessus, bien au contraire.</span></h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">La première diffusion de vos <strong className="font-normal">annonces</strong> est, en quelque sorte, un premier saut dans le grand bain. Il s’agit d’observer l’<strong className="font-normal">interaction des utilisateurs avec vos publicités</strong>, puis de l’analyser en vue de l’évaluer afin d’affiner votre stratégie jusqu’à trouver la formule la plus performante à destination des utilisateurs.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p className="text-center">4</p>
                            </div>
                            <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>CIBLER À NOUVEAU
                                    </h3>
                                    <h4 className="century"><span className="font-bold">Le Remarketing permet d’afficher des contenus personnalisés à des utilisateurs ayant déjà visité votre site web.</span></h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Il est parfaitement possible de <strong className="font-normal">diffuser des publicités personnalisées</strong> en ciblant des personnes ayant déjà montré un intérêt pour votre <strong className="font-normal">entreprise</strong>. Grâce au Remarketing, vous êtes en mesure d’adresser un message parfaitement adapté à un public spécifique, pour raviver l’intérêt porté en votre direction.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                    </div>
            </section>
            </section>
            <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Une offre complète pour gérer vos investissements publicitaires Google Adwords (SEA)</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Notre équipe d’experts et de consultants met tout en oeuvre pour vous permettre d’atteindre votre objectif grâce à des services adaptés.</h3>
                        </div>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="GESTION DE PROJET PUBLICITAIRE">
                                <p>Lorsque vous faites appel à l’<strong className="font-normal"><Link to="/agence-web-marketing-toulouse/" className="text-bleu hover:text-black font-bold">agence web Linkweb</Link></strong> pour gérer votre <strong className="font-normal">projet publicitaire</strong>, un <strong className="font-normal">consultant SEA</strong> gère votre compte publicitaire. Selon des objectifs et cibles de votre projet, ainsi que de votre <strong className="font-normal">investissement</strong>, le <strong className="font-normal">consultant</strong> sera en mesure d’identifier les meilleures opportunités pour vous.
                                    <br/><br/>
                                    <Link to="/agence-marketing-toulouse/" className="text-bleu hover:text-black font-bold">Notre <strong className="font-normal">agence</strong></Link> met en place une prestation d’accompagnement pour <strong className="font-normal">accroître votre présence sur Google</strong> en vue d’obtenir des <strong className="font-normal">résultats pertinents</strong> relativement à votre investissement. Nous proposons une <strong className="font-normal">prestation de référencement</strong> globale pour vous permettre de profiter de toute la complémentarité du <strong className="font-normal">référencement naturel (SEO)</strong> et de la <strong className="font-normal">publicité sur le web</strong>.
                                    <br/><br/>
                                    Tout ceci s’inscrit dans une volonté de <strong className="font-normal"><Link to="/comment-choisir-son-agence-de-communication-web/" className="text-bleu hover:text-black font-bold">dynamiser votre communication web d’entreprise</Link></strong> grâce à des <strong className="font-normal">techniques marketing</strong> appropriées (via les <strong className="font-normal">moteurs de recherche</strong>).
                                </p>
                            </div>  
                            <div label="PERTINENCE ET QUALITÉ DES PUBLICITÉS">
                                <p>
                                Comme pour le <strong className="font-normal">référencement naturel SEO</strong>, les <strong className="font-normal">publicités</strong> sont classées selon leur pertinence et leur qualité. Qu’il s’agisse de <strong className="font-normal">Facebook</strong> ou de <strong className="font-normal">Google</strong>, les <strong className="font-normal">plateformes web</strong> utilise la mise en concurrences entre les publicités de plusieurs annonceurs différents pour afficher le contenu le plus pertinent à destination des utilisateurs.
                                <br/><br/>
                                Lorsqu’il est question d’apparaître dans les <strong className="font-normal">résultats de moteurs de recherche comme Google</strong>, il est nécessaire de se frayer un chemin parmi tous les concurrents. Notre objectif est de définir les publicités les plus qualitatives et pertinentes possibles en vue de maximiser la fréquence de leur apparition dans les <strong className="font-normal">résultats de recherche</strong> lorsque les utilisateurs sont à la recherche d’entreprises en France comme la votre.
                                <br/><br/>
                                Nos <strong className="font-normal">services</strong> misent sur la conception et le <strong className="font-normal">développement de publicités optimales</strong> pour les <strong className="font-normal">algorithmes des moteurs</strong>, comme pour les utilisateurs. La qualité portée sur le <Link to="/pourquoi-travailler-dans-une-agence-web/" className="text-bleu hover:text-black font-bold">travail effectué</Link> (autant en <strong className="font-normal">marketing</strong> qu’en <strong className="font-normal">communication</strong>) fait partie de nos priorités pour proposer à nos clients une prestation en total accord avec leurs attentes (sur les sites en <strong className="font-normal">SEO</strong> comme pour les publicités).
                                </p>
                            </div>
                            <div label="CONSEIL ET ACCOMPAGNEMENT DANS LA PRISE DE DÉCISION">
                                <p>
                                <strong className="font-normal">Linkweb</strong> fait partie des <strong className="font-normal">agences</strong> qui mettent tout en oeuvre pour apporter des solutions concrètes aux entreprises souhaitant obtenir un <strong className="font-normal">retour sur investissement</strong>. C’est pourquoi, l’activité de notre équipe d’experts et de consultants est basée sur une étude de marché, une <strong className="font-normal">étude de la concurrence</strong> ainsi qu’une étude des opportunités en vue de la conception d’un modèle gagnant.
                                <br/><br/>
                                Ceci a pour but de vous offrir toutes les clés nécessaires en vue de vous faciliter votre prise de décision en fonction de critères objectifs et concrets. En ce sens, nous faisons partie des <strong className="font-normal">agences en France</strong> qui ont un rôle de <strong className="font-normal">conseil en communication</strong> ainsi qu’en <strong className="font-normal">marketing web</strong> pour vous accompagner dans l’établissement de votre <strong className="font-normal">plan d’actions publicitaire</strong> comme <strong className="font-normal">SEO</strong>. 
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
query lastsThreePostsQuelleAgenceSEAToulouse {
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
export default AgenceSEAToulouse;




