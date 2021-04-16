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




class CommentNotreAgenceDeConceptionDeSiteInternetRealiseVotreProjet extends Component {

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Comment notre agence de conception de site internet réalise votre projet ?"
                    description="Notre agence de conception de site internet met tout en oeuvre pour vous proposer une solution fonctionnelle et adaptée à vos objectifs."
                    url="https://linkweb.fr/comment-notre-agence-de-conception-de-site-internet-realise-votre-projet/"
                    nom="Comment notre agence de conception de site internet réalise votre projet ?"
                    slug="comment-notre-agence-de-conception-de-site-internet-realise-votre-projet/"
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
                        <div className="w-full lg:w-2/3 flex justify-center lg:justify-start">
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Comment notre <span className="text-bleu">agence de conception de site internet</span> réalise votre projet ?</h1>
                        </div>
                        <br />
                        <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Agence de création de site web et de référencement naturel : vous apporter une stratégie digitale sur-mesure est notre priorité.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Vous souhaitez démarrer un projet de création de site internet ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-white text-center century text-md">En tant qu'<strong className="font-normal"><Link to="/agence-web-marmande/" className="text-white hover:text-black font-bold">agence spécialisée dans le développement de sites</Link></strong>, Linkweb vous apporte tout son savoir-faire digital pour faire fructifier votre <strong className="font-normal">projet de communication</strong> et de <strong className="font-normal">marketing web</strong>.</p>
                        <br />
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                        <button
                            className="font-light mx-auto roundedButton bg-darkgrey text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                            type="button"
                            onClick={(e) => {
                            e.preventDefault();
                            window.location.href='/contact-agence-web-toulouse/';
                            }}
                        >Je demande un devis</button>
                            {/* <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" color="darkgrey" text="Je demande un devis" /> */}
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-3/5 px-10 mt-16 lg:-mt-48 mb-16 lg:mb-48">
                    <br/>
                    <h3 className="century text-xl text-center">
                    Vous souhaitez la création de votre site internet d’entreprise ou la refonte de votre site existant ? Notre agence digitale spécialisée vous accompagne dans le développement de votre stratégie digitale sur-mesure. De la conception de sites à la recherche du meilleur positionnement SEO ou SEA sur les moteurs de recherche, atteindre vos objectifs de communication est notre priorité. 
                    </h3>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Comment sont créés nos sites web ?</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Chaque site est unique car il est conçu à partir des besoins de chaque client pour correspondre au mieux à tous types d’activité. Parmi les agences existantes en France, Linkweb se veut toujours en parfaite adéquation avec les attentes de ses clients. Nous manipulons les outils les plus performants pour créer un site web et une stratégie marketing soignés et influents. </h3>
                        </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>En fonction de</span><br /><span className="font-bold text-5xl md:text-6xl">VOS BESOINS</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">Avec l’usage de <strong className="font-normal">CMS</strong> comme <strong className="font-normal">Wordpress</strong> ou <strong className="font-normal">Prestashop</strong> ou purement de <strong className="font-normal">code HTML</strong>, le type de site internet que notre agence conçoit pour vous est adapté aux <strong className="font-normal">services de votre entreprise</strong>. Nos solutions sont sur-mesure : que ce soit pour la conception de votre <strong className="font-normal">boutique en ligne</strong>, <strong className="font-normal">site vitrine</strong> ou catalogue, nous sélectionnons la meilleure solution en fonction de vos priorités (afficher un contact, lister les produits avec ou sans option d’achat depuis vos <strong className="font-normal">pages web</strong>).
                        <br/><br/>Nos réalisations mettent en avant votre professionnalisme dans le but de <strong className="font-normal">développer votre image de marque</strong> et faire en sorte que votre <strong className="font-normal">stratégie de communication en ligne</strong> soit pertinente.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Selon notre</span><br /><span className="font-bold text-6xl">MÉTHODOLOGIE</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Grâce à une méthodologie et une organisation de travail soignée, le rendu de notre travail est parfaitement <strong className="font-normal">fonctionnel, intuitif et taillé exclusivement pour vous</strong>. Pour toute <strong className="font-normal">création de site internet</strong>, qu'il s'agisse d'un <strong className="font-normal">site vitrine</strong>, ou d'un <strong className="font-normal">site catalogue</strong>, Linkweb maîtrise des outils qui seront parfaitement adaptés (<strong className="font-normal">CMS comme Wordpress</strong>). 
                        Notre savoir-faire et nos compétences mis au service de vos objectifs vous procurent des <strong className="font-normal">solutions marketing judicieuses</strong>, un <strong className="font-normal">suivi de qualité</strong> en parfaite adéquation avec votre <strong className="font-normal">identité visuelle</strong>. 
                        <br/><br/>Nos compétences en <strong className="font-normal">développement de site et en communication web</strong> vous permettent d’<strong className="font-normal">obtenir la visibilité</strong> et le <strong className="font-normal">trafic</strong> que votre entreprise mérite. Notre <strong className="font-normal">équipe de développeurs</strong> rigoureux et créatifs définit une <strong className="font-normal">navigation fluide grâce à la maîtrise de nombreux outils et langages</strong>. Notre entreprise spécialisée soigne l'aspect visuel (le <strong className="font-normal">design</strong>) de votre site pour apporter aux internautes une <strong className="font-normal">expérience utilisateur</strong> irréprochable.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Pour développer une solution </span><br /><span className="font-bold text-6xl">FONCTIONNELLE</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Les <strong className="font-normal">standards du Web</strong> ne cessent d’évoluer, il existe un nombre considérable de critères imposés par des <strong className="font-normal">moteurs comme Google</strong>. Parmi eux, la qualité de l’<strong className="font-normal">expérience des utilisateurs</strong> (rapidité et la réactivité du site) ou encore le <strong className="font-normal">responsive design</strong> qui peut permettre d’<strong className="font-normal">accéder au site sur mobile</strong>, sont des éléments clés.
                            Pour cela, le travail de <strong className="font-normal">conception UI et UX design</strong> s’intègre dans la phase de <strong className="font-normal">réalisation du site</strong> telle que mise en place par notre <strong className="font-normal">agence</strong>.
                            <br/><br/>En développant votre <strong className="font-normal">site internet</strong>, notre <strong className="font-normal"><Link to="/quelle-agence-web-choisir/" className="font-bold text-bleu hover:text-black">agence web</Link></strong> travaille aussi bien l'<strong className="font-normal">ergonomie</strong> que la <strong className="font-normal">sécurisation de la navigation</strong> (protocole HTTPS) de votre site. Nous concevons, en accord avec le besoin de nos <strong className="font-normal">clients</strong>, des pages fonctionnelles (critères W3C qui régissent la compatibilité du langage sur les <strong className="font-normal">navigateurs web</strong>) et soignées.
                            Cette conformité participe à la visibilité du site et de ce fait, à la génération de trafic pour aboutir à une conversion intéressante.</p>
                    </div>
                </section>
                <section className="bg-bleu sidetitle py-10">
                        <section className="w-full lg:w-2/3 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
                            <h2 className="century text-center lg:text-left text-white text-3xl md:text-5xl leading-none">Un service de qualité pour une prestation complète</h2>
                            <br/>
                            <div className="line-title my-4 ">
                                <br/>
                                <hr className="w-1/2 lg:w-1/12"/>
                                <br/>
                                <h3 /*data-aos='fade-left'*/ className="text-xl text-white century pb-0">En faisant appel à notre <Link to="/agence-web-design-toulouse/" className="text-white hover:text-black font-bold">agence de conception</Link> de site internet, vous faites le choix d'une solution pérenne et qualitative. </h3>
                            </div>
                        </section>
                        <section className="flex justify-center flex-col items-center">
                            <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 text-white century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="12.937 19.988 486.829 591.2012500000001"><g><path fill="#ffffff" d="M453.892,19.988H58.84c-25.311,0-45.903,20.595-45.903,45.909v263.348c0,25.312,20.592,45.903,45.903,45.903h83.62v81.085   c0,20.245,16.483,36.716,36.744,36.716h152.511c21.244,0,38.528-17.287,38.528-38.535v-79.265h83.648   c25.295,0,45.874-20.592,45.874-45.903V65.897C499.766,40.583,479.187,19.988,453.892,19.988z M58.84,27.988h395.052   c20.884,0,37.874,17.006,37.874,37.909v38.814H20.937V65.897C20.937,44.994,37.94,27.988,58.84,27.988z M237.442,197.73h37.855   c29.951,0,54.318,24.355,54.318,54.291V306.2H183.117v-54.18c0-14.968,6.092-28.54,15.929-38.371   C208.883,203.819,222.465,197.73,237.442,197.73z M362.243,454.414c0,16.837-13.695,30.535-30.528,30.535H179.204   c-15.85,0-28.744-12.882-28.744-28.716v-85.085v-55.511c0-0.806,0.647-1.438,1.474-1.438h26.075   c0.354,0.102,0.72,0.175,1.107,0.175h154.499c0.387,0,0.753-0.072,1.107-0.175h26.076c0.81,0,1.444,0.632,1.444,1.438V454.414z    M453.892,367.149h-83.647v-51.512c0-5.204-4.236-9.438-9.444-9.438h-0.001h-23.183v-54.18c0-34.347-27.956-62.291-62.318-62.291   h-37.855c-17.184,0-32.765,6.986-44.051,18.266c-11.286,11.279-18.276,26.852-18.276,44.026v54.178h-23.182   c-5.224,0-9.474,4.233-9.474,9.438v0.001v51.511H58.84c-20.9,0-37.903-17.003-37.903-37.903V112.711h470.829v216.535   C491.766,350.146,474.775,367.149,453.892,367.149z"/><path fill="#ffffff" d="M256.369,364.854c-11.108,0-20.146,9.034-20.146,20.14c0,7.416,3.978,14.056,10.338,17.592v27.703c0,2.209,1.791,4,4,4   h11.611c2.209,0,4-1.791,4-4v-27.703c6.36-3.537,10.338-10.177,10.338-17.592C276.51,373.888,267.475,364.854,256.369,364.854z    M260.719,396.329c-1.536,0.599-2.547,2.078-2.547,3.727v26.232h-3.611v-26.232c0-1.648-1.011-3.128-2.547-3.727   c-4.66-1.817-7.791-6.373-7.791-11.336c0-6.693,5.449-12.14,12.146-12.14c6.694,0,12.141,5.446,12.141,12.14   C268.51,389.956,265.379,394.512,260.719,396.329z"/><path fill="#ffffff" d="M65.828,82.413c8.805,0,15.969-7.164,15.969-15.969c0-8.809-7.164-15.976-15.969-15.976   c-8.809,0-15.975,7.167-15.975,15.976C49.853,75.25,57.02,82.413,65.828,82.413z M65.828,58.468c4.394,0,7.969,3.578,7.969,7.976   c0,4.394-3.575,7.969-7.969,7.969c-4.397,0-7.975-3.575-7.975-7.969C57.853,62.046,61.431,58.468,65.828,58.468z"/><path fill="#ffffff" d="M114.807,82.413c8.809,0,15.975-7.164,15.975-15.97c-0.002-8.809-7.168-15.975-15.975-15.975   c-8.809,0-15.975,7.167-15.975,15.976C98.832,75.25,105.999,82.413,114.807,82.413z M114.807,58.468   c4.396,0,7.974,3.579,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969s-7.975-3.575-7.975-7.969   C106.832,62.046,110.41,58.468,114.807,58.468z"/><path fill="#ffffff" d="M163.815,82.413c8.809,0,15.975-7.164,15.975-15.969c0-8.809-7.167-15.976-15.975-15.976   c-8.805,0-15.969,7.167-15.969,15.976C147.846,75.25,155.01,82.413,163.815,82.413z M163.815,58.468   c4.397,0,7.975,3.578,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969c-4.394,0-7.969-3.575-7.969-7.969   C155.846,62.046,159.421,58.468,163.815,58.468z"/></g></svg>
                                    <h4 className="font-bold century"><span className="font-bold">Sécurisation HTTPS</span></h4>
                                    <p>Notre agence vous garantit l’utilisation d’un <strong className="font-normal">certificat de sécurité pour vos sites</strong> afin de proposer une navigation protégée à l’utilisateur.</p>
                                </div>
                                <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="60px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><g><path fill="#ffffff" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   "/><path fill="#ffffff" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z"/><g><path fill="#ffffff" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z"/><rect x="72.041" y="56.851" width="0.312" height="5.159"/></g><path fill="#ffffff" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z"/><path fill="#ffffff" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z"/></g></svg>                    
                                    <h4 className="font-bold century -mt-4"><span className="font-bold">Accessibilité tous supports</span></h4>
                                    <p>Les sites web de nos clients sont adaptés à chaque <strong className="font-normal">support de navigation</strong> et à la taille de chaque écran grâce au <strong className="font-normal">responsive design</strong>.</p>
                                </div>
                                <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" fill="#ffffff"  viewBox="0 0 64 80"><path d="M7,57h36.434c1.349,1.543,2.92,2.901,4.694,4.01l1.342,0.838C49.632,61.949,49.816,62,50,62s0.368-0.051,0.53-0.152  l1.342-0.838c4.507-2.818,7.76-7.194,9.159-12.322l0.934-3.425c0.144-0.528-0.164-1.074-0.69-1.225l-0.843-0.241  c-3.827-1.094-7.165-3.314-9.651-6.422c-0.379-0.475-1.183-0.475-1.562,0c-0.384,0.48-0.796,0.932-1.219,1.369V26  c0-0.552-0.448-1-1-1h-2v-3c0-11.028-8.972-20-20-20S5,10.972,5,22v3H3c-0.552,0-1,0.448-1,1v26C2,54.757,4.243,57,7,57z M50,39.546  c2.624,2.925,5.979,5.038,9.775,6.144l-0.674,2.472c-1.266,4.642-4.209,8.602-8.289,11.152L50,59.821l-0.812-0.507  c-4.08-2.55-7.024-6.51-8.29-11.152l-0.674-2.472C44.021,44.584,47.376,42.472,50,39.546z M7,22c0-9.925,8.075-18,18-18  s18,8.075,18,18v3h-4v-3c0-7.72-6.28-14-14-14s-14,6.28-14,14v3H7V22z M13,25v-3c0-6.617,5.383-12,12-12s12,5.383,12,12v3H13z M4,27  h42v13.544c-1.902,1.474-4.073,2.579-6.431,3.254l-0.843,0.241c-0.527,0.15-0.834,0.696-0.69,1.225l0.934,3.425  c0.622,2.281,1.629,4.4,2.932,6.312H7c-1.654,0-3-1.346-3-3V27z"/><path d="M48,54c0.256,0,0.512-0.098,0.707-0.293l7-7l-1.414-1.414L48,51.586l-2.293-2.293l-1.414,1.414l3,3  C47.488,53.902,47.744,54,48,54z"/><path d="M6.914,49.836l-0.369,1.98c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L10,51.915l2.037,0.985  c0.139,0.067,0.287,0.1,0.436,0.1c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418  c0.291-0.261,0.403-0.667,0.288-1.039c-0.115-0.373-0.436-0.645-0.823-0.697l-2.257-0.302l-0.994-1.854  c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302c-0.387,0.052-0.708,0.324-0.823,0.697  c-0.115,0.373-0.002,0.778,0.288,1.039L6.914,49.836z M8.896,48.295c0.318-0.042,0.597-0.235,0.749-0.519L10,47.116l0.354,0.661  c0.152,0.283,0.431,0.476,0.749,0.519l0.614,0.082l-0.385,0.345c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345L8.896,48.295z"/><path d="M25.132,46.683l-2.257-0.302l-0.994-1.854c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302  c-0.387,0.052-0.708,0.324-0.823,0.697c-0.115,0.373-0.002,0.778,0.288,1.039l1.582,1.418l-0.369,1.98  c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L21,51.915l2.037,0.985c0.139,0.067,0.287,0.1,0.436,0.1  c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418c0.291-0.261,0.403-0.667,0.288-1.039  C25.841,47.006,25.52,46.734,25.132,46.683z M22.333,48.723c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345l0.614-0.082c0.318-0.042,0.597-0.235,0.749-0.519L21,47.116l0.354,0.661c0.152,0.283,0.431,0.476,0.749,0.519  l0.614,0.082L22.333,48.723z"/><path d="M36.132,46.683l-2.257-0.302l-0.994-1.854c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302  c-0.387,0.052-0.708,0.324-0.823,0.697c-0.115,0.373-0.002,0.778,0.288,1.039l1.582,1.418l-0.369,1.98  c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L32,51.915l2.037,0.985c0.139,0.067,0.287,0.1,0.436,0.1  c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418c0.291-0.261,0.403-0.667,0.288-1.039  C36.841,47.006,36.52,46.734,36.132,46.683z M33.333,48.723c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345l0.614-0.082c0.318-0.042,0.597-0.235,0.749-0.519L32,47.116l0.354,0.661c0.152,0.283,0.431,0.476,0.749,0.519  l0.614,0.082L33.333,48.723z"/><path d="M17,42c2.155,0,4.127-1.158,5.191-3h3.573l1.789,0.895c0.281,0.141,0.613,0.141,0.895,0L30,39.118l1.553,0.776  c0.281,0.141,0.613,0.141,0.895,0L34.236,39H36c0.265,0,0.52-0.105,0.707-0.293l2-2c0.391-0.391,0.391-1.023,0-1.414l-2-2  C36.52,33.105,36.265,33,36,33H22.191c-1.064-1.842-3.036-3-5.191-3c-3.309,0-6,2.691-6,6S13.691,42,17,42z M17,32  c1.586,0,3.023,0.942,3.662,2.401C20.821,34.765,21.181,35,21.578,35h14.008l1,1l-1,1H34c-0.155,0-0.309,0.036-0.447,0.105  L32,37.882l-1.553-0.776c-0.281-0.141-0.613-0.141-0.895,0L28,37.882l-1.553-0.776C26.309,37.036,26.155,37,26,37h-4.422  c-0.397,0-0.757,0.235-0.916,0.599C20.023,39.058,18.586,40,17,40c-2.206,0-4-1.794-4-4S14.794,32,17,32z"/><rect x="15" y="35" width="2" height="2"/></svg>
                                    <h4 className="font-bold century"><span className="font-normal">Conformité RGPD</span></h4>
                                    <p>Nous respectons les données personnelles de vos utilisateurs grâce à des procédés en conformité avec le <strong className="font-normal">RGPD</strong> (*).</p>
                                    <p className="text-xs">(*) Réglement Général pour la Protection des Données</p>
                                </div>
                            </div>
                            <div className="w-full text-white flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                            <div className="w-full svgtransform -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125" fill="#ffffff"><g><g><g><path d="M82.3,81.7c-0.8,0-1.5-0.7-1.5-1.5c0-17-13.8-30.9-30.9-30.9c-17,0-30.9,13.8-30.9,30.9     c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5c0-18.6,15.1-33.8,33.8-33.8s33.8,15.1,33.8,33.8C83.8,81.1,83.1,81.7,82.3,81.7z"/></g><g><path d="M1.5,67.4c-0.1,0-0.3,0-0.4-0.1c-0.8-0.2-1.2-1-1-1.8c1-3.5,2.5-6.9,4.2-10.2c1-1.8,0.6-4.1-0.8-5.5     c-3-3-3-7.8,0-10.7l5.4-5.4c1.4-1.4,3.3-2.2,5.4-2.2c2,0,3.9,0.8,5.3,2.2c0,0,0,0,0,0c1.5,1.5,3.7,1.8,5.5,0.8     c3.2-1.8,6.7-3.2,10.2-4.2c1.9-0.6,3.3-2.4,3.3-4.5c0-4.2,3.4-7.6,7.6-7.6h7.6c4.2,0,7.6,3.4,7.6,7.6c0,2.1,1.4,3.9,3.3,4.5     c3.5,1,6.9,2.5,10.2,4.2c1.8,1,4.1,0.6,5.5-0.8c0,0,0,0,0,0c1.4-1.4,3.3-2.2,5.3-2.2c2,0,3.9,0.8,5.4,2.2l5.4,5.4     c1.4,1.4,2.2,3.3,2.2,5.4s-0.8,3.9-2.2,5.4c-1.5,1.5-1.8,3.7-0.8,5.5c1.8,3.2,3.2,6.6,4.2,10.2c0.2,0.8-0.2,1.6-1,1.8     c-0.8,0.2-1.6-0.2-1.8-1c-1-3.3-2.3-6.6-4-9.6c-1.6-2.9-1.1-6.6,1.3-9c1.8-1.8,1.8-4.8,0-6.6l-5.4-5.4c-0.9-0.9-2.1-1.4-3.3-1.4     c-1.3,0-2.4,0.5-3.3,1.4c0,0,0,0,0,0c-2.4,2.3-6,2.9-8.9,1.3c-3.1-1.7-6.3-3-9.6-4c-3.2-0.9-5.4-3.9-5.4-7.3     c0-2.6-2.1-4.7-4.7-4.7h-7.6c-2.6,0-4.7,2.1-4.7,4.7c0,3.3-2.2,6.3-5.4,7.3c-3.3,1-6.5,2.3-9.6,4c-2.9,1.6-6.6,1.1-8.9-1.3     c0,0,0,0,0,0c-0.9-0.9-2.1-1.4-3.3-1.4c-1.3,0-2.4,0.5-3.3,1.4l-5.4,5.4c-1.8,1.8-1.8,4.8,0,6.6c2.4,2.4,2.9,6.1,1.3,9     c-1.7,3.1-3,6.3-4,9.6C2.7,67,2.1,67.4,1.5,67.4z"/></g></g><g><path d="M98.5,81.7H1.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h97.1c0.8,0,1.5,0.7,1.5,1.5S99.3,81.7,98.5,81.7z    "/></g></g></svg>                                
                                    <h4 className="font-bold century"><span className="font-bold">Intégration de contenus optimisés</span> <br/></h4>
                                    <p>Pour votre <strong className="font-normal">référencement naturel</strong>, nous rédigeons des contenus optimisés qui permettent aux <strong className="font-normal">sites internet</strong> d’être bien visibles et de ce fait, <strong className="font-normal">générer du trafic de qualité</strong>.</p>
                                </div>
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#ffffff" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z"/></g></g><g><g><path fill="#ffffff" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z"/></g></g><g><g><path fill="#ffffff" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z"/></g></g></g></svg>                    
                                    <h4 className="font-bold century"><span className="font-bold">Suivi Statistiques</span></h4>
                                    <p>Bénéficiez d’un <strong className="font-normal">suivi régulier</strong> faisant état de l’<strong className="font-normal">activité du site</strong> et des interactions entre les <strong className="font-normal">utilisateurs et le site</strong>. Cette stratégie évolutive permet de réaliser des ajustements sur les pages à tout moment.</p>
                                </div>
                                <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                    <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><path fill="#ffffff" d="M66.598,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44c-0.556,0.081-1.017,0.47-1.191,1.004  c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014c-0.095,0.554,0.133,1.113,0.587,1.443  c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C67.673,71.235,67.16,70.916,66.598,70.916L66.598,70.916z M50,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169L50,82.719l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C51.074,71.235,50.562,70.916,50,70.916L50,70.916z M33.402,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423  l2.707,1.423c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014  l2.19-2.135c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C34.476,71.235,33.963,70.916,33.402,70.916L33.402,70.916z"/><path fill="#ffffff" d="M72.131,50.738h-25.82v-1.475h25.82V50.738z M50,52.951h-3.689v1.475H50V52.951z M72.131,52.951H53.689v1.475  h18.443V52.951z M61.066,56.639H46.311v1.475h14.754V56.639z M72.131,56.639h-7.377v1.475h7.377V56.639z M57.377,60.328H46.311  v1.475h11.066V60.328z M61.066,27.131H46.311v1.475h14.754V27.131z M72.131,27.131h-7.377v1.475h7.377V27.131z M72.131,30.82h-25.82  v1.475h25.82V30.82z M57.377,34.508H46.311v1.475h11.066V34.508z M72.131,34.508H61.066v1.475h11.066V34.508z M64.754,38.197H46.311  v1.475h18.443V38.197z"/><path fill="#ffffff" d="M75.82,12.377h-4.338c-0.741-1.139-1.62-2.329-2.458-3.404l-0.257-0.33l-0.416,0.052  c-2.313,0.288-8.743,0.858-10.692,0.051c-0.341-0.141-0.869-0.895-1.294-1.501C55.592,6.141,54.793,5,53.689,5h-7.377  c-1.104,0-1.904,1.141-2.677,2.244c-0.425,0.606-0.953,1.36-1.294,1.501c-1.947,0.807-8.379,0.237-10.692-0.051l-0.416-0.052  l-0.257,0.33c-0.838,1.075-1.717,2.265-2.458,3.404H24.18c-2.441,0-4.426,1.986-4.426,4.426v73.77c0,2.441,1.985,4.426,4.426,4.426  H75.82c2.441,0,4.426-1.985,4.426-4.426v-73.77C80.246,14.363,78.26,12.377,75.82,12.377z M31.886,10.208  c1.891,0.218,8.608,0.899,11.02-0.1c0.737-0.305,1.32-1.137,1.937-2.017c0.396-0.564,1.132-1.615,1.469-1.615h7.377  c0.337,0,1.073,1.051,1.469,1.615c0.617,0.88,1.2,1.712,1.937,2.017c2.412,0.999,9.129,0.318,11.02,0.1  c1.698,2.219,3.397,4.834,3.684,5.857H28.201C28.489,15.043,30.188,12.427,31.886,10.208z M78.77,90.574  c0,1.627-1.324,2.951-2.951,2.951H24.18c-1.627,0-2.951-1.324-2.951-2.951v-73.77c0-1.627,1.324-2.951,2.951-2.951h3.449  c-0.727,1.324-1.12,2.457-0.82,3.071c0.192,0.392,0.578,0.618,1.059,0.618h44.262c0.482,0,0.867-0.225,1.059-0.618  c0.3-0.614-0.093-1.746-0.82-3.071h3.449c1.627,0,2.951,1.324,2.951,2.951V90.574z M50,13.115c-1.424,0-2.582-1.158-2.582-2.582  S48.576,7.951,50,7.951s2.582,1.158,2.582,2.582S51.424,13.115,50,13.115z M50,9.426c-0.61,0-1.107,0.496-1.107,1.107  c0,0.61,0.496,1.107,1.107,1.107s1.107-0.496,1.107-1.107C51.107,9.923,50.61,9.426,50,9.426z"/><path fill="#ffffff" d="M38.934,50v11.066H27.869V50H38.934 M38.934,48.525H27.869c-0.815,0-1.475,0.661-1.475,1.475v11.066  c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475V50C40.41,49.185,39.749,48.525,38.934,48.525  L38.934,48.525z M33.483,38.197c-0.008,0-0.016,0-0.024,0c-0.302,0-0.588-0.12-0.792-0.343l-3.77-4.111  c-0.413-0.451-0.382-1.147,0.069-1.559c0.451-0.412,1.151-0.379,1.563,0.071l2.989,3.267l7.698-7.698  c0.432-0.432,1.132-0.432,1.565,0c0.432,0.432,0.432,1.133,0,1.565l-8.516,8.5C34.058,38.097,33.776,38.197,33.483,38.197z   M38.934,34.271v4.664h-5.451H33.45h-5.581V27.869h11.066v1.194l1.45-1.45c-0.122-0.692-0.722-1.22-1.45-1.22H27.869  c-0.815,0-1.475,0.661-1.475,1.475v11.066c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475v-6.136  L38.934,34.271z"/></svg>                    
                                    <h4 className="font-bold century"><span className="font-bold">Optimisation Technique</span></h4>
                                    <p>Les <strong className="font-normal">consultants de notre entreprise digitale</strong> soignent chacune des <strong className="font-normal">pages web</strong> pour une accessibilité parfaite et une lecture fluide par les utilisateurs, mais aussi par les <strong className="font-normal">moteurs de recherche</strong> et <strong className="font-normal">navigateurs</strong>.</p>
                                </div>
                            </div>
                        </section>
                    </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                        <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Les étapes de notre processus de création</h2>
                        <br/>
                        <div className="line-title my-4">
                            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                            <br/>
                            <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Nos équipes de spécialistes au sein des agences de Toulouse et Agen font preuve de rigueur pour créer un site en parfaite corrélation avec votre identité visuelle et répondant à toutes vos attentes ainsi qu'à celles des différents acteurs du web.</h3>
                        </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                <div className="w-full flex justify-center items-center lg:w-5/12">
                    <img className="w-full" src={mac} alt="Comment choisir son agence de communication web"/>
                </div>
                <div className="w-full lg:w-1/2 my-10  flex flex-col">
                    <div className="w-full flex-col md:flex-row flex px-auto">
                        <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                            <p className="text-center">1</p>
                        </div>
                        <div className="w-full century px-6 lg:px-6 flex flex-col justify-center">
                                <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>Vous prenez contact pour mettre en place votre projet
                                </h3>
                                <br/>
                                <h4 className="font-bold">Lors de votre prise de contact notre chef de projet étudie rigoureusement votre demande et vous recontacte par la suite pour définir clairement vos besoins.</h4>
                                <br/>
                                <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" >N’hésitez pas à nous fournir un maximum d’informations, de cette façon nous vous apportons une solution précise et en adéquation avec vos besoins. Parmi les détails importants, vos <strong className="font-normal">objectifs</strong>, vos <strong className="font-normal">cibles de clientèle</strong> et motivations à <strong className="font-normal">créer un site internet</strong> nous importent tout particulièrement.</p>
                                </p>
                                {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                        </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="w-full century md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p className="text-center">2</p>
                            </div>
                            <div className="w-full century px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>Nous définissons votre projet en fonction de vos besoins
                                    </h3>
                                    <br/>
                                    <h4 className="font-bold">Une fois votre demande de création définie, nous vous accueillons pour mieux fixer ensemble vos besoins et vous proposer une solution adaptée.</h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Cette étape est fondamentale pour la compréhension de vos attentes, de votre domaine professionnel et de vos ambitions. C’est à partir de ce procédé que nous établissons un mode opératoire adapté en vue de <strong className="font-normal">développer une stratégie pertinente</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p className="text-center">3</p>
                            </div>
                            <div className="w-full century px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>Vous validez le projet une fois qu’il vous correspond
                                    </h3>
                                    <br/>
                                    <h4 className="font-bold">À la suite de notre rencontre, nous vous proposons une maquette visuelle ainsi que des textes rédigés optimisés et pensés pour vos pages web.</h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Lors de la présentation de la <strong className="font-normal">maquette</strong>, nous intégrons vos différents retours pour vous suggérer des ajustements sur nos réalisations. Que cela concerne les <strong className="font-normal">contenus rédigés</strong> ou le <strong className="font-normal">webdesign du site</strong>, vous serez en mesure de <strong className="font-normal">valider la maquette</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                        <div className="w-full flex-col md:flex-row flex px-auto">
                            <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                <p className="text-center">4</p>
                            </div>
                            <div className="w-full century px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>Nous lançons la réalisation de votre projet
                                    </h3>
                                    <br/>
                                    <h4 className="font-bold">Après avoir validé la proposition graphique et éditoriale, nos spécialistes se chargent de la mise en ligne de votre site web.</h4>
                                    <br/>
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Une fois publié sur le <strong className="font-normal">nom de domaine</strong> sélectionné, nos <strong className="font-normal">référenceurs web</strong> déploient toutes leurs <strong className="font-normal">techniques de marketing</strong> pour vous apporter un <strong className="font-normal">positionnement optimal sur les moteurs de recherche comme Google</strong>. Ensuite, des mises à jour et des modifications sont régulièrement effectuées grâce au suivi établi par l’<strong className="font-normal">équipe de Linkweb</strong>.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="w-full flex mt-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                        <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez faire appel à notre <Link to="/agence-web-cahors/" className="text-white hover:text-black font-bold">agence web spécialisée</Link> pour atteindre vos objectifs ?</h3>
                        <h4>Linkweb fait partie des agences qui proposent des solutions personnalisées aux professionnels souhaitant s’investir dans une création web ou une refonte de site.</h4>
                        </div>
                        <div className="w-full mx-auto block lg:w-3/12">
                        <button
                            className="font-light mx-auto roundedButton bg-darkgrey text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                            type="button"
                            onClick={(e) => {
                            e.preventDefault();
                            window.location.href='/contact-agence-web-toulouse/';
                            }}
                        >CONTACTEZ-NOUS</button>
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        {/* <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" /> */}
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
query lastsThreePostsCommentNotreAgenceDeConceptionDeSiteInternetRealiseVotreProjet {
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
export default CommentNotreAgenceDeConceptionDeSiteInternetRealiseVotreProjet;




