import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";
import RoundButton from "../../components/roundButton";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../../components/seo";
import Barre from "../../components/barre-laterale";
import "../../scss/barre.scss";
import "../../scss/global.scss";

import logolinkweb from "../../images/logo-linkweb.png";
import Bg from "../../images/cd-haute-garonne.jpg";
import bgbloc from "../../images/conseil-departemental-haute-garonne.jpg";
import drupal from "../../images/drupal.jpg";
import mockup from "../../images/tablette-cd-haute-garonne.jpg";
import imac from "../../images/mockup-cd-haute-garonne.jpg";
import bloccontact from '../../images/bloc-cd-haute-garonne.jpg';
import logo from '../../images/logo_cd31.svg';




class HauteGaronne extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    robots="noindex"
                    title="Nos Réalisations - Conseil Départemental de Haute-Garonne - Linkweb"
                    description="Le site du Conseil Départemental de Haute-Garonne est l'une de nos réalisations. Vous souhaitez un projet similaire ?"
                    keywords={[`Création site internet Agen`, `Création site internet Toulouse`, `Agence de Référencement Agen`, `Agence de Référencement Toulouse`, `Référencement Google`]}
                    url="https://linkweb.fr/realisations/conseil-departemental-haute-garonne/"
                    nom="Conseil Départemental de Haute-Garonne"
                    slug="/realisations/conseil-departemental-haute-garonne/"
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
                <section className="w-full bloctitrescreen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ background: '#143842d9 url(' + Bg + ')', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div>
                        <Link className="invisible md:visible" to="/"><img className="mx-auto block" width="120px" src={logolinkweb} alt="création site internet Toulouse" data-aos="zoom-in" /></Link>
                        <br />
                        <a href="/agence-de-communication-agen-47-toulouse-31/" className="mt-24 font-normal century text-sm sm:text-md text-center text-white mx-auto block hover:text-bleu" data-aos="zoom-in" data-aos-delay="900"><span className="text-bleu font-bold">>></span> Revenir aux réalisations</a>
                        <h1 data-aos="fade-down" data-aos-delay="500" className="century text-4xl sm:text-6xl md:text-6xl lg:text-6xl text-center text-white">
                            <span className="font-extrabold">CONSEIL DÉPARTEMENTAL DE HAUTE-GARONNE</span>
                        </h1>
                        <h3 data-aos="fade-up" className="italic max-w-4xl font-normal text-center text-lg sm:text-2xl text-white mx-auto mt-8">Concevoir un site internet intuitif et ergonomique à <span className="text-hg">destination des Haut-Garonnais</span> à travers une solution technique sur-mesure.</h3>
                        <br />
                        <a data-aos="fade-dow" className="mb-12" href="/realisations/conseil-departemental-haute-garonne/#start"><svg className="zoombtn mx-auto block" width="60px" viewBox="0 0 100 125"><g><g><path fill="#0095B4" d="M59.3,46.5l-8.7,8.7l-8.7-8.7c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l10.1,10.1c0.4,0.4,0.9,0.6,1.4,0.6    s1-0.2,1.4-0.6l10.1-10.1c0.8-0.8,0.8-2,0-2.8C61.4,45.7,60.1,45.7,59.3,46.5z M50.8,5c-24.9,0-45,20.1-45,45    c0,24.9,20.1,45,45,45c24.9,0,45-20.1,45-45C95.8,25.1,75.6,5,50.8,5z M50.8,91c-22.6,0-41-18.4-41-41s18.4-41,41-41    s41,18.4,41,41S73.4,91,50.8,91z" /></g></g></svg></a>
                    </div>
                    <Barre color="hg" />
                    {/* <li className="hidden lg:block toggleable">
                                <input type="checkbox" value="selected" id="toggle-one" className="toggle-input hidden"/>
                                    <label for="toggle-one" className="toogle-input block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">
                                        <div className="cursor-pointer fixed h-auto z-40 py-16 font-bold px-2 font-bold" style={{background:'#FFFFFF',bottom:'315px', writingMode:'vertical-rl', textOrientation: 'sideways', borderTopLeftRadius:'15px', borderBottomLeftRadius:'15px'}}>
                                            <p style={{transform:'rotate(180deg'}}>Nos réalisations</p>
                                        </div>
                                    </label>
                                <div role="toggle" className="toggle-input megamenu fixed h-auto z-40 p-2 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800" style={{background:'#23395194', maxWidth:'100px', borderRadius:'15px'}}>
                                    <div className="flex flex-col py-6" style={{overflow:'hidden'}}>
                                        <Link to="/realisations/sia/"><img className="zoom py-3 w-3/4 mx-auto block" src={logosia} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/atpt/"><img className="zoom py-3 w-3/4 mx-auto block" src={logoatpt} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/sdis47/"><img className="zoom py-3 w-3/4 mx-auto block" src={logosdis} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/groupe-faivre-environnement/"><img className="zoom py-3 w-3/4 mx-auto block" src={logofaivre} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/gabriel-services/"><img className="zoom py-3 w-3/4 mx-auto block" src={logogabrielservices} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/ledilimmo/"><img className="zoom py-3 w-3/4 mx-auto block" src={logoledil} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/csd-menuiserie/"><img className="zoom py-3 w-1/2 mx-auto block" src={logocsd} alt="Création site internet Toulouse" /></Link>
                                    </div>
                                </div>
                            </li> */}
                </section>
                <section className="w-full flex flex-col md:flex-row mt-12">
                    <div className="w-full md:w-11/12 px-4 py-2 md:py-6 my-2 ml-0 md:ml-24 lg:ml-32 md:my-4 flex flex-col order-last md:order-first">
                        <h3 data-aos='fade-right' className="text-center text-2xl md:text-4xl mx-12 md:mx-24 century">
                            Définir une solution Drupal pour une <span className="text-hg">refonte de site internet</span> au service des Haut-Garonnais.
                            </h3>
                        <br />
                    </div>
                    <div className="w-full md:w-1/12 mx-auto mr-10 py-6 mb-4 -mt-32 md:-mt-48 lg:-mt-64" id="start" data-aos="zoom-in">
                        <img src={logo} className="w-1/3 md:w-full xl:w-3/4 mx-auto block md:mx-0" />
                    </div>
                </section>
                <section className="w-full mt-16 flex flex-col md:flex-row justify-center items-center">
                    <a className="text-white font-bold w-1/2 md:w-1/6 bg-hg mx-12 p-3 text-center" data-aos="zoom-in" style={{ borderRadius: '15px' }} href="https://www.haute-garonne.fr/" target="blank" rel="noopener noreferrer">Voir le site</a>
                    <Link className="text-white font-bold w-1/2 md:w-1/6 bg-aquap1 mx-12 my-6 text-center p-3" data-aos="zoom-in" data-aos-delay="500" style={{ borderRadius: '15px' }} to="/contact-agence-web-toulouse/">J'ai une question</Link>
                </section>
                <section className="w-full mt-24">
                    <div className="w-full lg:w-2/3 bg-hg text-white px-12 md:px-24 py-12" data-aos="fade-right" data-aos-delay="100">
                        <h2 className="font-bold text-center md:text-left text-2xl md:text-3xl my-6"><span className="text-white">/</span>REFONDRE UN SITE WEB VISANT À PROPOSER UNE INTERFACE INTUITIVE ET ERGONOMIQUE</h2>
                        <br />
                        <p className="font-normal text-justify">
                            Le Conseil Départemental de Haute-Garonne était à la recherche d'une <strong className="font-normal">prestataire web</strong> de confiance, fiable et expert sur <strong className="font-normal">Drupal (CMS)</strong>. Il a choisi <strong className="font-normal">Linkweb</strong> pour la <strong className="font-normal">refonte de son site internet</strong> ainsi que pour continuer la maintenance de l’ancien site sur Drupal 7 durant la phase de réalisation du nouveau site.
                            </p>
                        <br />
                        <ul className="font-normal ">
                            <li className="flex flex-row">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#ffffff" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#ffffff" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                <p><strong className="font-normal">Refondre le site internet</strong>&nbsp; du Conseil Départemental en utilisant <strong className="font-normal">Drupal 8</strong>.</p>
                            </li>
                            <br />
                            <li className="flex flex-row">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#ffffff" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#ffffff" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                <p>Assurer la <strong className="font-normal">maintenance du site</strong>&nbsp; existant durant la phase de transition avec <strong className="font-normal">Drupal 7</strong>.</p>
                            </li>
                            <br />
                            <li className="flex flex-row">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#ffffff" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#ffffff" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                <p>Développer une <strong className="font-normal">interface web ergonomique</strong>,&nbsp; accessible et efficace.</p>
                            </li>
                        </ul>
                        <br />
                        <element className="flex flex-col md:flex-row mt-24 mb-8">
                            <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up">
                                <svg width="80px" className="mx-auto block" fill="#ffffff" viewBox="0 0 100 125"><path d="M50,0C22.386,0,0,22.387,0,50c0,27.615,22.386,50,50,50s50-22.385,50-50C100,22.387,77.614,0,50,0z M49.31,18.111  c0.679,0.299,3.055,2.564,3.65,5.052c0.35,1.466,0.049,2.832-0.871,3.95c-1.44,1.753-1.485,3.956-1.374,5.15h0.334v5.454h-2.096  v-5.454h0.357c-0.115-1.469,0-3.98,1.697-6.041c0.611-0.745,0.816-1.584,0.625-2.563c-0.42-2.149-2.572-4.092-2.901-4.271  L49.31,18.111z M47.76,41.593c0-1.238,1.002-2.241,2.24-2.241s2.24,1.002,2.24,2.241v2.369c0,1.238-1.003,2.24-2.24,2.24  s-2.24-1.002-2.24-2.24V41.593z M65.667,64.225c0,8.653-7.014,15.667-15.667,15.667s-15.667-7.014-15.667-15.667v-9.821h1.716  c-0.05-1.103-0.058-1.424-0.058-2.158v-5.322c0-7.291,4.989-13.398,11.514-14.658v5.92c-0.71,0.666-1.158,1.61-1.158,2.662v3.861  c0,1.05,0.446,1.996,1.158,2.662v8.744c0,1.376,1.117,2.493,2.494,2.493c1.376,0,2.494-1.117,2.494-2.493V47.37  c0.71-0.666,1.157-1.611,1.157-2.662v-3.861c0-1.051-0.447-1.996-1.157-2.662v-5.922c6.525,1.261,11.514,7.368,11.514,14.659v5.323  c0,0.734-0.003,0.807-0.061,2.157h1.721V64.225z" /></svg>
                                <h4 className="w-2/3 mx-auto text-center mt-4 font-bold text-lg">Définition d'un parcours de navigation fluide et intuitif</h4>
                            </div>
                            <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up" data-aos-delay="500">
                                <svg width="80px" className="mx-auto block" viewBox="0 0 128 160" fill="#ffffff"><g><g><path d="M74.813,67.714H42.777c-3.318,0-6.019,2.7-6.019,6.018c0,3.318,2.7,6.018,6.019,6.018h32.036V67.714z" /><path d="M85.966,67.714h-8.152V79.75h8.152c1.123,0,2.171-0.315,3.071-0.852l-2.639-2.582c-0.719,0.485-1.581,0.771-2.509,0.771    c-2.498,0-4.53-2.053-4.53-4.576s2.032-4.575,4.53-4.575s4.53,2.052,4.53,4.575c0,0.478-0.093,0.929-0.228,1.362l2.955,2.891    c0.003,0.002,0.003,0.006,0.006,0.008c0.526-0.893,0.833-1.93,0.833-3.04C91.984,70.414,89.284,67.714,85.966,67.714z" /><path d="M100.463,40.829V27H27.537v13.829H100.463z M63.835,32.432H92.06c0.828,0,1.5,0.671,1.5,1.5s-0.672,1.5-1.5,1.5H63.835    c-0.828,0-1.5-0.671-1.5-1.5S63.007,32.432,63.835,32.432z M46.794,32.432h6.271c0.828,0,1.5,0.671,1.5,1.5s-0.672,1.5-1.5,1.5    h-6.271c-0.828,0-1.5-0.671-1.5-1.5S45.966,32.432,46.794,32.432z M34.29,32.432h6.272c0.828,0,1.5,0.671,1.5,1.5    s-0.672,1.5-1.5,1.5H34.29c-0.828,0-1.5-0.671-1.5-1.5S33.462,32.432,34.29,32.432z" /><ellipse cx="83.889" cy="72.51" rx="1.53" ry="1.575" /><path d="M27.537,43.829V101h72.926V43.829H27.537z M85.966,82.75H42.777c-4.973,0-9.019-4.045-9.019-9.018    c0-4.973,4.046-9.018,9.019-9.018h43.188c4.973,0,9.019,4.045,9.019,9.018C94.984,78.705,90.938,82.75,85.966,82.75z" /><path d="M64,2C29.813,2,2,29.813,2,64s27.813,62,62,62s62-27.813,62-62S98.187,2,64,2z M103.463,102.5c0,0.829-0.672,1.5-1.5,1.5    H26.037c-0.828,0-1.5-0.671-1.5-1.5v-77c0-0.829,0.672-1.5,1.5-1.5h75.926c0.828,0,1.5,0.671,1.5,1.5V102.5z" /></g></g></svg>
                                <h4 className="w-2/3 mx-auto text-center my-4 font-bold text-lg">Mise en place de moteurs de recherche efficaces</h4>
                            </div>
                            <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up" data-aos-delay="1000">
                                <svg width="80px" viewBox="0 0 100 125" className="mx-auto block" fill="#ffffff"><path d="M57.44043,43.023H42.167a.6001.6001,0,0,0,0,1.20019H57.44043a.6001.6001,0,0,0,0-1.20019Z" /><path d="M57.66992,60.3999a.60031.60031,0,0,0-.65039.12989.54162.54162,0,0,0-.12988.20019.5871.5871,0,0,0-.04981.23.47866.47866,0,0,0,.04981.23.50776.50776,0,0,0,.12988.18994.60146.60146,0,0,0,.41992.18018.5918.5918,0,0,0,.23047-.05029.488.488,0,0,0,.18946-.12989.49916.49916,0,0,0,.13085-.18994.64967.64967,0,0,0,.04981-.23.58165.58165,0,0,0-.18066-.43017A.63092.63092,0,0,0,57.66992,60.3999Z" /><path d="M54.667,60.35645H39.583a.6001.6001,0,0,0,0,1.20019H54.667a.6001.6001,0,0,0,0-1.20019Z" /><path d="M57.44043,51.68994H44.583a.6001.6001,0,0,0,0,1.2002H57.44043a.6001.6001,0,0,0,0-1.2002Z" /><path d="M50,2.6001A47.40015,47.40015,0,1,0,97.3999,50,47.45379,47.45379,0,0,0,50,2.6001ZM24.65039,49.37939a6.95264,6.95264,0,1,1,6.95313,6.95215A6.96045,6.96045,0,0,1,24.65039,49.37939Zm6.61816,11.89454-2.377,1.59912V57.05811a8.00082,8.00082,0,0,0,5.42285.00036v5.81458l-2.376-1.59864A.60017.60017,0,0,0,31.26855,61.27393Zm34.0752,11.83593H32.20313V62.89862l2.376,1.59894A.5992.5992,0,0,0,35.51367,64V56.52948a8.14509,8.14509,0,0,0-3.31054-15.272V31.47021H58.59375v6.14991a.59983.59983,0,0,0,.59961.60009h6.15039ZM59.793,37.02V32.31885L64.49512,37.02ZM69.92383,68.52344H66.543V37.62012a.5842.5842,0,0,0-.01508-.07624.5522.5522,0,0,0-.01513-.07635.586.586,0,0,0-.14557-.27173l-6.75-6.75a.59089.59089,0,0,0-.27289-.14569.54867.54867,0,0,0-.07153-.01428.581.581,0,0,0-.07941-.01581H36.79V26.89014H69.92383Z" /></svg>
                                <h4 className="w-2/3 mx-auto text-center my-4 font-bold text-lg">Remontée de contenus pertinents pour les utilisateurs</h4>
                            </div>
                        </element>
                    </div>
                </section>
                <section className="flex flex-col items-center md:flex-row my-12 md:my-24">
                    <div className="w-full xl:w-1/2" data-aos="fade-right">
                        <img src={imac} className="w-full lg:w-10/12" />
                    </div>
                    <div className="w-full xl:w-1/2 pt-16" data-aos="fade-left">
                        <h2 className="font-normal text-3xl my-2 px-16"><span className="text-hg">/</span>POSITIONNEMENT ET VALEURS PARTAGÉES</h2>
                        <br />
                        <p className="font-bold text-lg text-center lg:text-justify px-16">
                            Déployer un <strong className="font-bold">outil web</strong> performant en mesure d'atteindre les objectifs fixés par Aqua Pensez-Vous et en accord avec ses valeurs.
                            </p>
                        <br />
                        <div className="px-16 my-8">
                            <p className="text-3xl py-2 text-left italic" data-aos="fade-in">ERGONOMIE</p>
                            <p className="text-3xl py-2 text-right italic" data-aos="fade-in" data-aos-delay="400">PERTINENCE</p>
                            <p className="text-3xl sm:text-5xl py-2 text-center text-hg italic font-bold" data-aos="zoom-in" data-aos-delay="1000">EFFICACITÉ</p>
                            <p className="text-3xl py-2 text-right italic" data-aos="fade-in" data-aos-delay="600">INTUITIVITÉ</p>
                            <p className="text-3xl py-2 text-left italic" data-aos="fade-in" data-aos-delay="200">CONFIANCE</p>
                        </div>
                    </div>
                </section>
                <section className="w-full h-full lg:h-screen flex flex-col items-center" style={{ background: '#000000d9 url(' + bgbloc + ')', backgroundSize: 'cover', backgroundBlendMode: 'multiply', backgroundRepeat: 'no-repeat' }}>
                    <div>
                        <h2 className="font-normal text-3xl max-w-5xl my-6 pt-16 lg:py-32 px-16 text-white text-center uppercase" data-aos="fade-in"><span className="text-hg">/</span>PROPOSER UNE INTERFACE WEB AU SERVICE DES HAUT-GARONNAIS</h2>
                    </div>
                    <div className="w-full lg:w-1/2 mb-12 text-white font-bold text-center flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="200">
                            <svg width="60px" className="mx-auto block" fill="#ffffff" viewBox="0 0 128 160"><rect x="12" y="88" width="48" height="4" /><rect x="12" y="100" width="48" height="4" /><rect x="68" y="44" width="28" height="4" /><rect x="68" y="56" width="20" height="4" /><polygon points="107.96 55.96 120 68 128 60 116 48 107.96 55.96" /><polygon points="76.58 87.33 72.01 104.01 88.63 99.37 76.58 87.33" /><path d="M60,44H12V80H60Zm-8.15,4L36,59.53,20.15,48ZM16,49.93,32.6,62,16,74.07ZM20.15,76,36,64.47,51.85,76ZM56,74.07,39.4,62,56,49.93Z" /><rect x="80.08" y="69.21" width="36.31" height="17.03" transform="translate(-26.19 92.22) rotate(-45)" /><path d="M116,107.74c0,3.93-4.19,8.26-8,8.26H12c-3.81,0-8-4.32-8-8.26V28H116V44h4V19.88C120,13.94,113.89,8,108,8H12C6,8,0,13.79,0,20v87.74C0,113.87,6,120,12,120h96c6,0,12-6.13,12-12.26V73.47l-4,4ZM109.83,15.5a2,2,0,1,1-2,2A2,2,0,0,1,109.83,15.5Zm-7.94,0a2,2,0,1,1-2,2A2,2,0,0,1,101.9,15.5ZM94,15.5a2,2,0,1,1-2,2A2,2,0,0,1,94,15.5Z" /></svg>
                            <h4 className="uppercase font-extrabold">
                                REFONTE DE SITE INTERNET
                                </h4>
                            <p className="font-bold">Utilisation du CMS Drupal 8</p>
                        </div>
                        <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="600">
                            <svg width="60px" className="mx-auto block" fill="#ffffff" viewBox="0 0 32 40"><path d="M15.383,25.916l-3.354-0.003l-0.359-2.872l-0.299-0.085c-1.281-0.369-2.48-1.063-3.473-2.008l-0.223-0.213L5.012,21.86  l-1.676-2.903l2.311-1.755l-0.074-0.299c-0.166-0.674-0.25-1.346-0.254-1.996c0.002-0.656,0.086-1.311,0.254-2.004l0.074-0.3  l-2.313-1.751L5.012,7.95L7.68,9.077l0.223-0.215c0.971-0.933,2.172-1.627,3.471-2.008l0.297-0.086l0.359-2.871h3.355L15.74,6.77  l0.297,0.086c1.293,0.373,2.494,1.066,3.469,2.004l0.223,0.215L22.4,7.95l1.676,2.906l-2.102,1.592  c0.299,0.171,0.588,0.361,0.855,0.578c-0.004-0.014-0.004-0.027-0.008-0.041l2.482-1.879l-2.504-4.344L19.93,7.97  c-0.965-0.866-2.105-1.525-3.332-1.926l-0.383-3.088l-5.014,0.001l-0.389,3.087C9.582,6.45,8.439,7.11,7.48,7.972L4.613,6.76  l-2.51,4.34l2.486,1.883c-0.141,0.656-0.209,1.287-0.211,1.926c0.002,0.629,0.074,1.271,0.211,1.916l-2.482,1.884l2.506,4.341  l2.865-1.211c0.975,0.871,2.117,1.531,3.334,1.928l0.389,3.087l5.014,0.003l0.367-2.965c-0.309-0.115-0.609-0.251-0.896-0.412  L15.383,25.916z" /><path d="M13.713,10.633c1.193,0,2.271,0.496,3.047,1.291l0.041-0.014c0.322-0.105,0.652-0.186,0.988-0.239  c-0.957-1.202-2.432-1.978-4.09-1.978c-2.871,0-5.207,2.338-5.207,5.211c0,2.564,1.865,4.697,4.309,5.129  c-0.117-0.338-0.203-0.686-0.262-1.039c-1.787-0.511-3.107-2.141-3.107-4.09C9.432,12.549,11.346,10.633,13.713,10.633z" /><path d="M29.236,25.185l-6.105-6.107c0.404-1.541-0.027-3.165-1.162-4.3c-1.186-1.186-2.988-1.608-4.578-1.082l-0.723,0.239  l2.961,2.962l-0.398,1.48l-1.479,0.396l-2.963-2.963l-0.238,0.726c-0.535,1.62-0.121,3.374,1.08,4.577  c1.117,1.116,2.783,1.562,4.303,1.162l6.104,6.105c0.428,0.428,0.996,0.662,1.6,0.662s1.172-0.234,1.6-0.662  C30.115,27.5,30.115,26.067,29.236,25.185z M28.572,27.717c-0.5,0.5-1.371,0.499-1.871,0l-6.506-6.509L19.92,21.3  c-1.254,0.419-2.686,0.086-3.623-0.851c-0.756-0.756-1.117-1.787-1.021-2.821l2.195,2.194l2.527-0.678l0.678-2.529l-2.191-2.193  c1.043-0.098,2.076,0.275,2.818,1.02c0.951,0.951,1.279,2.34,0.854,3.623l-0.092,0.275l6.506,6.51  C29.086,26.365,29.086,27.203,28.572,27.717z" /><path d="M26.906,26.051c-0.268,0.267-0.268,0.701,0,0.969c0.266,0.266,0.697,0.266,0.969,0c0.266-0.268,0.266-0.702,0-0.969  C27.604,25.784,27.172,25.784,26.906,26.051z" /></svg>
                            <h4 className="uppercase font-bold">
                                MAINTENANCE TECHNIQUE
                                </h4>
                            <p className="font-normal">Maintenance de l'ancien site durant la phase transitoire</p>
                        </div>
                        <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="400">
                            <svg className="mx-auto block" width="60px" fill="#ffffff" viewBox="0 0 90 112.5" ><g><path d="M81.5,34.75H56.9400024c-0.5500488,0-1,0.4500122-1,1v33.8099976c0,0.5499878,0.4499512,1,1,1H81.5   c0.5599976,0,1-0.4500122,1-1V35.75C82.5,35.2000122,82.0599976,34.75,81.5,34.75z" /><path d="M81.7399902,31.0299683h-8.9000244V17.7099609c0-2.5699463-2.0899658-4.6599731-4.6499634-4.6599731H14.0599976   c-2.5700073,0-4.6600342,2.0900269-4.6600342,4.6599731v37.9100342c0,2.5700073,2.0900269,4.6599731,4.6600342,4.6599731   h38.7699585v1h-8.2799683h-6.8599854H8.1399536c-2.0699463,0-3.7599487,1.6799927-3.7599487,3.75s1.6900024,3.75,3.7599487,3.75   h29.5500488h15.1399536v4.2900391c0,2.1099854,1.6800537,3.8200073,3.7700195,3.8699951   c0.0300293,0.0100098,0.0700073,0.0100098,0.0999756,0.0100098h25.0400391c2.1400146,0,3.8800049-1.7400513,3.8800049-3.8800049   V34.8999634C85.6199951,32.7600098,83.8800049,31.0299683,81.7399902,31.0299683z M44.5499878,66.0299683h-6.8599854v-2h6.8599854   V66.0299683z M52.8299561,34.8999634V54.039978H15.1499634V19.2799683h51.9400024v11.75H56.6999512   C54.5700073,31.0299683,52.8299561,32.7600098,52.8299561,34.8999634z M83.6199951,73.0700073   c0,1.039978-0.8500366,1.8800049-1.8800049,1.8800049H56.6999512c-1.0299683,0-1.8699951-0.8400269-1.8699951-1.8800049V60.2799683   V34.8999634c0-1.0299683,0.8400269-1.8699951,1.8699951-1.8699951h25.0400391c1.0299683,0,1.8800049,0.8400269,1.8800049,1.8699951   V73.0700073z" /></g></svg>
                            <h4 className="uppercase font-bold">
                                RESPONSIVE DESIGN
                                </h4>
                            <p className="font-normal">Support des interactions « Touch »</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 text-white text-center flex mb-12 flex-col lg:flex-row">
                        <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="800">
                            <svg width="60px" className="mx-auto block" fill="#ffffff" viewBox="0 0 160 200"><path d="M69.818,70.549h-46c-6.497,0-11.783-5.286-11.783-11.783c0-6.497,5.286-11.782,11.783-11.782h45.057  c0.726-2.451,1.688-4.795,2.878-7H23.818c-10.357,0-18.783,8.426-18.783,18.783c0,10.356,8.426,18.782,18.783,18.782h49.64  c-0.351-0.528-0.7-1.058-1.024-1.607C71.405,74.201,70.538,72.397,69.818,70.549z" /><path d="M147.374,58.767c0,5.68-4.041,10.435-9.399,11.54c-0.959,2.529-2.203,4.959-3.724,7.243h1.341  c10.356,0,18.782-8.426,18.782-18.783c0-10.252-8.26-18.598-18.472-18.766c1.313,2.419,2.327,4.927,3.053,7.48  C143.817,48.931,147.374,53.439,147.374,58.767z" /><path d="M22.633,52.395v13c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-13c0-1.381-1.119-2.5-2.5-2.5S22.633,51.015,22.633,52.395  z" /><path d="M153.504,120.726l-14.981-25.337c-2.326-3.933-6.831-5.785-11.077-4.955l-3.397-5.746  c13.822-10.214,17.968-29.495,9.034-44.605c-9.536-16.127-30.415-21.491-46.541-11.955c-7.813,4.619-13.359,12.004-15.617,20.794  s-0.958,17.934,3.662,25.747c6.336,10.714,17.677,16.677,29.305,16.677c4.769,0,9.583-1.023,14.123-3.112l3.408,5.763  c-2.774,3.321-3.322,8.16-0.998,12.092l14.981,25.338c1.429,2.417,3.714,4.133,6.434,4.832c0.873,0.224,1.757,0.335,2.635,0.335  c1.858,0,3.69-0.497,5.332-1.468v-0.001C154.794,132.177,156.454,125.717,153.504,120.726z M117.564,80.599  c-12.806,7.572-29.381,3.313-36.953-9.492c-3.667-6.203-4.7-13.463-2.907-20.442c1.793-6.979,6.196-12.843,12.399-16.511  c12.807-7.571,29.383-3.313,36.953,9.492C134.627,56.451,130.369,73.028,117.564,80.599z M146.242,129.102  c-0.808,0.478-1.753,0.612-2.662,0.378c-0.909-0.233-1.673-0.807-2.15-1.614l-14.981-25.338c-0.985-1.667-0.431-3.826,1.236-4.813  c0.56-0.33,1.175-0.488,1.782-0.488c1.202,0,2.375,0.617,3.03,1.725l14.98,25.336C148.464,125.956,147.909,128.115,146.242,129.102z  " /></svg>
                            <h4 className="uppercase font-bold">
                                MOTEURS DE RECHERCHE EFFICACES
                                </h4>
                            <p className="font-normal">Utilisation de la solution logicielle SOLR (interfacée avec le site)</p>
                        </div>
                        <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="1000">
                            <svg width="60px" className="mx-auto block" fill="#ffffff" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path d="m12.468,973.92c-2.7961,0-5.0625,2.3028-5.0625,5.125v35.656c0,2.7965,2.2681,5.0869,5.0625,5.0937l20.812,0.031-1.4688,5.0938h-0.90625c-0.99012,0-1.8125,0.8223-1.8125,1.8125v2.25c0,0.9902,0.82238,1.8125,1.8125,1.8125h20.094c0.99012,0,1.8125-0.8223,1.8125-1.8125v-2.25c0-0.9902-0.82238-1.8125-1.8125-1.8125h-0.875l-1.5-5.0313h7.6562v7.9063c0,0.7949,0.5815,1.5625,1.4062,1.5625h24.594c0.82475,0,1.375-0.7676,1.375-1.5625v-11.219a0.60006,0.60006,0,0,0,0,-0.062l8.5938-16.25c0.22891-0.43529,0.36549-0.87859,0.34375-1.3125-0.0217-0.434-0.2048-0.92465-0.65625-1.1562a0.60006,0.60006,0,0,0,-0.0312,0l-2.9688-1.5312c-0.22569-0.1158-0.46191-0.1252-0.6875-0.0937-0.22559,0.0314-0.44056,0.10375-0.625,0.21875-0.36888,0.2301-0.67734,0.59585-0.90625,1.0312l-3.0625,5.8125v-6.75c0-0.7949-0.55034-1.5312-1.375-1.5312h-7.7188l-0.0625-15.906c-0.0104-2.8195-2.2664-5.125-5.0625-5.125h-56.969zm0,1.2188,56.969,0c2.1484,0,3.867,1.7216,3.875,3.9062l0.0625,15.906h-3.25v-15.594c-0.003-0.32057-0.30469-0.60709-0.625-0.59375h-57.125c-0.0415-0.004-0.0835-0.004-0.125,0-0.26622,0.0597-0.47249,0.32095-0.46875,0.59375v35c0.003,0.31,0.28376,0.5905,0.59375,0.5938h43.906v3.75l-8.1875-0.031c-0.0929-0.059-0.20237-0.092-0.3125-0.094h-13.688c-0.0208-0.001-0.0417-0.001-0.0625,0-0.0654,0.01-0.12902,0.032-0.1875,0.062l-21.375-0.062c-2.1502-0.01-3.875-1.7262-3.875-3.875v-35.656c0-2.1821,1.7266-3.9062,3.875-3.9062zm0.5,4.8125,55.938,0,0,15-11.219,0c-0.82466,0-1.4062,0.73635-1.4062,1.5312v17.281h-43.312v-33.813zm4.4688,4.7188c-0.76797,0-1.4062,0.64042-1.4062,1.4062v22.813c0,0.7659,0.63816,1.4062,1.4062,1.4062h33.062c0.7681,0,1.4062-0.6403,1.4062-1.4062v-18.656a0.60006,0.60006,0,0,0,0,-0.625v-3.5312c0-0.76583-0.63827-1.4062-1.4062-1.4062h-33.062zm0,1.2188,15.375,0c0.18353,0.0604,0.44437,0.26186,0.5,0.40625l1.1875,3.0312h-17.25v-3.25c0-0.12879,0.0706-0.1875,0.1875-0.1875zm17,0,16.062,0c0.11698,0,0.21875,0.0587,0.21875,0.1875v3.25h-14.938l-1.3438-3.4375zm-16.094,0.9375,0,1.6875,1.5938,0,0-1.6875-1.5938,0zm3.3438,0,0,1.6875,1.625,0,0-1.6875-1.625,0zm3.375,0,0,1.6875,1.5938,0,0-1.6875-1.5938,0zm3.3438,0,0,1.6875,1.625,0,0-1.6875-1.625,0zm-11.156,3.6875,21.656,0,0,18.563-21.469,0c-0.11679,0-0.1875-0.059-0.1875-0.1875v-18.375zm22.844,0,10.625,0,0,18.375c0,0.1288-0.10189,0.1875-0.21875,0.1875h-10.406v-18.563zm1.9375,1.6875a0.61654,0.61654,0,1,0,0.1875,1.2188h6.3438a0.60938,0.60938,0,0,0,0,-1.2188h-6.3438a0.60006,0.60006,0,0,0,-0.125,0,0.61257,0.61257,0,0,0,-0.0625,0zm0.0625,2.7812a0.61257,0.61257,0,1,0,0.125,1.2188h6.3438a0.6094,0.6094,0,0,0,0,-1.2188h-6.3438a0.60006,0.60006,0,0,0,-0.0625,0,0.6102,0.6102,0,0,0,-0.0625,0zm15.594,1.1562,24.594,0c0.0543,0,0.1875,0.087,0.1875,0.34375v9l-4.375,8.3125a0.60006,0.60006,0,0,0,-0.0937,0.2813l-1.2812,7.9062a0.60006,0.60006,0,0,0,1,0.5313l2.5-2.5a0.60006,0.60006,0,0,0,0.21875,-0.2188l2.0312-2v10c0,0.2565-0.13329,0.3438-0.1875,0.3438h-24.594c-0.0542,0-0.1875-0.087-0.1875-0.3438v-31.312c0-0.2565,0.1332-0.34375,0.1875-0.34375zm30.688,1.1875a0.60006,0.60006,0,0,0,0.0312,0l1.0312,0.53125-8.8125,16.594-1.1875-0.625,8.3438-15.844c0.14076-0.2677,0.32519-0.473,0.46875-0.5625,0.14356-0.09,0.16082-0.0747,0.125-0.0937zm-46.281,0.4375a0.61257,0.61257,0,1,0,0.125,1.2188h6.3438a0.6094,0.6094,0,0,0,0,-1.2188h-6.3438a0.60006,0.60006,0,0,0,-0.0625,0,0.6102,0.6102,0,0,0,-0.0625,0zm48.406,0.625,0.84375,0.46875c0.004,0.0205,0.0272,0.0731,0.0312,0.15625,0.008,0.1641-0.0467,0.4197-0.1875,0.6875l-8.375,15.906-1.125-0.5937,8.8125-16.625zm-30.156,2c-0.31089,0.049-0.54909,0.3766-0.5,0.6875,0.0491,0.3108,0.37661,0.549,0.6875,0.5h10.625c0.33961,0.05,0.6875-0.2506,0.6875-0.5938s-0.34789-0.6434-0.6875-0.5937h-10.625-0.125c-0.0208-0.001-0.0417-0.001-0.0625,0zm-18.344,0.1875a0.60374,0.60374,0,1,0,0.21875,1.1875h6.3438a0.60006,0.60006,0,1,0,0,-1.1875h-6.3438a0.60006,0.60006,0,0,0,-0.15625,0,0.60006,0.60006,0,0,0,-0.0625,0zm18.344,6.0312c-0.31089,0.049-0.54909,0.3766-0.5,0.6875,0.0491,0.3109,0.37661,0.5491,0.6875,0.5h18.5c0.33961,0.05,0.6875-0.2505,0.6875-0.5937,0-0.3433-0.34789-0.6434-0.6875-0.5938h-18.5-0.125c-0.0208-0.001-0.0417-0.001-0.0625,0zm0.0937,7.3438c-0.31089,0.049-0.54909,0.3766-0.5,0.6875,0.0491,0.3108,0.37661,0.549,0.6875,0.5h13.156c0.33961,0.05,0.6875-0.2506,0.6875-0.5938s-0.34789-0.6434-0.6875-0.5937h-13.156-0.125c-0.0208-0.001-0.0417-0.001-0.0625,0zm18.625,1.0312,2.9688,1.5938-2.1875,2.1562-1.2812-0.6562,0.5-3.0938zm-0.71875,4.3438,0.59375,0.2812-0.75,0.75,0.15625-1.0312zm-43.781,0.5312,12.812,0,1.5,5.0625-15.844,0,1.5312-5.0625zm25.781,1.25c-0.31089,0.049-0.54909,0.3766-0.5,0.6875,0.0491,0.3109,0.37661,0.5491,0.6875,0.5h14.312c0.33961,0.05,0.6875-0.2505,0.6875-0.5937,0-0.3433-0.34789-0.6434-0.6875-0.5938h-14.312-0.125c-0.0208-0.001-0.0417-0.001-0.0625,0zm-29.438,5,1.2188,0,17.688,0,1.1875,0c0.364,0,0.59375,0.261,0.59375,0.625v2.25c0,0.364-0.22975,0.625-0.59375,0.625h-20.094c-0.364,0-0.625-0.261-0.625-0.625v-2.25c0-0.364,0.261-0.625,0.625-0.625z" /></g></svg>
                            <h4 className="uppercase font-bold">
                                SUGGESTION DE CONTENUS PERTINENTS
                                </h4>
                            <p className="font-normal">Remontée de contenus suggérés à partir d'algorithmes spécifiques</p>
                        </div>
                        <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="1200">
                            <svg width="60px" className="mx-auto block" viewBox="0 0 64 80" fill="#ffffff"><g data-name="Click Page"><path d="M57,7H7a5,5,0,0,0-5,5V52a5,5,0,0,0,5,5H57a5,5,0,0,0,5-5V12A5,5,0,0,0,57,7ZM29,12a2,2,0,1,1-2,2A2,2,0,0,1,29,12Zm-9,0a2,2,0,1,1-2,2A2,2,0,0,1,20,12Zm-9,0a2,2,0,1,1-2,2A2,2,0,0,1,11,12ZM60,52a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V20H60Z" /><path d="M43.71,44l-6.19-6.19,6-3.6a1,1,0,0,0-.24-1.82L21.28,26A1,1,0,0,0,20,27.28l6.38,22a1,1,0,0,0,1.82.24l3.6-6L38,49.71a1,1,0,0,0,1.41,0l4.26-4.26A1,1,0,0,0,43.71,44Z" /></g></svg>
                            <h4 className="uppercase font-bold">
                                NAVIGATION INTUITIVE
                                </h4>
                            <p className="font-normal">Navigation en entonnoir</p>
                        </div>
                    </div>
                </section>
                <section className="h-full w-full mt-32 flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2  py-8 px-12 lg:px-24 mb-24 xl:px-48" data-aos="fade-right">
                        <h2 className="font-normal text-3xl my-2 uppercase"><span className="text-hg">/</span>UTILISATION DU CMS DRUPAL</h2>
                        <br />
                        <p className="font-normal text-justify">
                            Être force de proposition grâce à une expertise fondée sur le <strong className="font-normal">CMS (Content Management System) Drupal></strong>.
                            </p>
                        <br />
                        <ul className="font-normal text-left">
                            <li className="flex flex-row justify-start">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#333333" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#333333" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                <p>Refonte du site internet avec Drupal 8.</p>
                            </li>
                            <br />
                            <li className="flex flex-row justify-start">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#333333" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#333333" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                <p>Maintenance technique de l'ancien site via Drupal 7.</p>
                            </li>
                            <br />
                            <li className="flex flex-row justify-start">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#3333333" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#333333" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                <p>Système de recherche avancée interfacé au CMS.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 mx-auto flex flex-col lg:flex-row justify-center items-center order-first lg:order-last" data-aos="fade-left">
                        <img width="650px" className="w-1/2 lg:w-2/3 xl:w-2/5 mx-auto block" src={drupal} alt="Création site internet Drupal Toulouse" />
                    </div>
                </section>
                <section className="h-full w-full flex flex-col pt-6 lg:pt-24 lg:flex-row">
                    <div className="w-full lg:w-1/2 mx-auto block" data-aos="fade-right">
                        <img className="w-full md:w-3/5 lg:w-4/5 xl:w-3/4 xl:-mt-24 mx-auto px-24 xl:px-32 pb-16 xl:py-0 xl:pb-32" src={mockup} alt="Création site internet Toulouse" />
                    </div>
                    <div className="w-full lg:w-1/2 px-12 lg:px-24 xl:px-48" data-aos="fade-left">
                        <h2 className="font-normal text-3xl my-2 uppercase"><span className="text-aquap1">/</span>Création d’une interface fluide et intuitive</h2>
                        <br />
                        <p className="font-normal text-justify">
                            Développer une plateforme web intuitive pour une navigation fluide.
                            </p>
                        <br />
                        <ul className="font-normal text-left">
                            <li className="flex flex-row justify-start">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#0095B4" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#0095B4" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                <p className="pr-12">Navigation en entonnoir.</p>
                            </li>
                            <br />
                            <li className="flex flex-row justify-start">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#0095B4" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#0095B4" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                <p>Remontée de contenus pertinents pour les utilisateurs.</p>
                            </li>
                            <br />
                            <li className="flex flex-row justify-start items-center">
                                <svg style={{ maxHeight: '37px', minWidth: '20px' }} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#0095B4" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z" /><path fill="#0095B4" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z" /></g></g></svg>
                                <p>Mobilisation d'algorithmes de pertinence.</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className=" w-full h-full flex flex-col justify-center items-end px-4 pt-12 pb-0 bg-cover mt-24" style={{ background: '#000000e6 url( ' + bloccontact + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
                    <div className="max-w-5xl mx-auto flex items-center flex-col py-6" data-aos="fade-down" >
                        <br />
                        <svg className="mx-auto block" width="80px" viewBox="0 0 100 125"><path fill="#FFFFFF" d="M64.84509,52.57434H54.45068c2.20191-7.42346,6.02661-12.75745,10.39441-13.81421Zm0,3.17908H53.63623a52.05778,52.05778,0,0,0-1.14429,9.53711H64.84509Zm0,39.24658V81.18573H54.45068C56.65259,88.60925,60.47729,93.94324,64.84509,95Zm0-26.5304H52.49194a52.05831,52.05831,0,0,0,1.14429,9.53711H64.84509ZM37.86963,65.29053H49.30945a56.25569,56.25569,0,0,1,1.04309-9.53711H40.07544A28.41134,28.41134,0,0,0,37.86963,65.29053Zm2.20581,12.71618h10.2771a56.25569,56.25569,0,0,1-1.04309-9.53711H37.86963A28.41168,28.41168,0,0,0,40.07544,78.00671ZM68.02417,65.29053h12.353a52.02563,52.02563,0,0,0-1.14429-9.53711H68.02417Zm0-26.5304V52.57434H78.41846C76.21667,45.15088,72.39185,39.81689,68.02417,38.76013ZM57.718,39.631A28.74514,28.74514,0,0,0,41.67236,52.57434h9.429C52.57581,47.14423,54.87463,42.65784,57.718,39.631Zm0,54.49811c-2.84339-3.02686-5.14221-7.51318-6.6167-12.94336h-9.429A28.74465,28.74465,0,0,0,57.718,94.12909ZM91.19678,81.18573H81.76807c-1.47461,5.43018-3.77344,9.9165-6.61682,12.94336A28.744,28.744,0,0,0,91.19678,81.18573Zm0-28.61139A28.7445,28.7445,0,0,0,75.15125,39.631c2.84338,3.02686,5.14221,7.51325,6.61682,12.94336Zm1.597,3.17908h-10.277a56.24475,56.24475,0,0,1,1.043,9.53711h11.4397A28.4081,28.4081,0,0,0,92.79382,55.75342ZM68.02417,78.00671H79.23291A52.02616,52.02616,0,0,0,80.3772,68.4696h-12.353ZM94.99951,68.4696H83.55981a56.24475,56.24475,0,0,1-1.043,9.53711h10.277A28.40844,28.40844,0,0,0,94.99951,68.4696ZM68.02417,95c4.36768-1.05676,8.1925-6.39075,10.39429-13.81427H68.02417ZM4.99951,75.85107V12.41455A7.42307,7.42307,0,0,1,12.41455,5H87.58447a7.42307,7.42307,0,0,1,7.415,7.41455v39.708a32.2972,32.2972,0,0,0-5-7.10376V22.553h-80V75.85107a2.41719,2.41719,0,0,0,2.415,2.41456H36.3584a32.05257,32.05257,0,0,0,2.41333,5H12.41455A7.42308,7.42308,0,0,1,4.99951,75.85107Zm45-59.27685A1.51083,1.51083,0,0,0,51.51025,18.085H84.489a1.5107,1.5107,0,0,0,1.5105-1.51074V13.59546A1.5105,1.5105,0,0,0,84.489,12.085H51.51025a1.51062,1.51062,0,0,0-1.51074,1.5105ZM35.61658,15.085a3,3,0,1,0,3-3A3.00007,3.00007,0,0,0,35.61658,15.085Zm-11,0a3,3,0,1,0,3-3A3.00007,3.00007,0,0,0,24.61658,15.085Zm-11,0a3,3,0,1,0,3-3A3.00007,3.00007,0,0,0,13.61658,15.085Z" /></svg>
                        <h2 data-aos='fade-right' className="text-center text-white text-2xl md:text-5xl century">
                            Vous souhaitez mettre en place un projet similaire à celui-ci ? Travaillons ensemble !
                            </h2>
                    </div>
                    <div className="max-w-6xl mx-auto flex text-center my-12" data-aos="zoom-in">
                        {/* <RappelForm /> */}
                        <RoundButton color="white" colortext="black" url="/contact-agence-web-toulouse/" text="Je veux améliorer ma visibilité sur internet" />
                    </div>
                    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start text-center my-12">
                        <div className="w-full sm:w-1/3 px-6 sm:px-12 py-2 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                            <Link to="/">
                                <svg className="mx-auto block" viewBox="0 0 100 125" width="80px"><path fill="#FFFFFF" d="M9.72,57.45a2.31,2.31,0,0,0,.86-3.15l-.58-1,7.8-1.44,1.54,2.69a9.71,9.71,0,0,0,18-6.29l16.9-3.11,1.18,2.06a2.31,2.31,0,1,0,4-2.29L37.67,6.81a2.31,2.31,0,0,0-4,2.29l1,1.71-29.48,34-.38-.66a2.31,2.31,0,1,0-4,2.29L6.57,56.59A2.31,2.31,0,0,0,9.72,57.45Zm23.11-8.37a5.1,5.1,0,0,1-9.48,3.16L22.61,51ZM53.61,23a2.55,2.55,0,0,1,.95-3.48l7.58-4.33a2.55,2.55,0,1,1,2.53,4.42L57.08,24A2.55,2.55,0,0,1,53.61,23Zm-4.19-5.21a2.52,2.52,0,0,1-.27-3.43l5.58-7a2.52,2.52,0,1,1,3.94,3.14l-5.58,7a2.53,2.53,0,0,1-1.77.94h-.19A2.53,2.53,0,0,1,49.42,17.81ZM56,29.27a2.52,2.52,0,0,1,2.11-3L66.94,25a2.52,2.52,0,1,1,.71,5l-8.86,1.26-.35,0A2.53,2.53,0,0,1,56,29.27Zm-30,65.09A2.93,2.93,0,0,1,23,91.42V81.19a2.93,2.93,0,0,1,2.93-2.93h7.94a2.93,2.93,0,0,1,2.93,2.93V91.42a2.93,2.93,0,0,1-2.93,2.93Zm19.67,0a2.93,2.93,0,0,1-2.93-2.93V77.76a2.93,2.93,0,0,1,2.93-2.93h7.94a2.93,2.93,0,0,1,2.93,2.93V91.42a2.93,2.93,0,0,1-2.93,2.93ZM76.17,70V91.42a2.93,2.93,0,0,1-2.93,2.93H65.29a2.93,2.93,0,0,1-2.93-2.93V70a2.93,2.93,0,0,1,2.93-2.93h7.94A2.93,2.93,0,0,1,76.17,70ZM95.84,55.46v35.9a3,3,0,0,1-2.93,3H85a3,3,0,0,1-2.93-3V55.46a3,3,0,0,1,2.93-3H92.9A3,3,0,0,1,95.84,55.46Zm3.63-19A3,3,0,0,1,97.16,40a3,3,0,0,1-3.56-2.3L92.38,32A84.28,84.28,0,0,1,71.72,54.85,79.16,79.16,0,0,1,48.61,66.91,77.28,77.28,0,0,1,25,70.9c-1.35,0-2.15-.05-2.23-.06a3,3,0,0,1,.43-6s.59,0,1.67,0a72.67,72.67,0,0,0,22-3.74c16.92-5.6,30.5-16.48,40.38-32.36L81.71,30a3,3,0,0,1-1.25-5.86l12.73-2.72a3,3,0,0,1,3.56,2.3Z" /></svg>
                                <p className="text-xl text-white century pt-3">AGENCE WEB</p>
                            </Link>
                        </div>
                        <div className="w-full sm:w-1/3 sm:px-12 py-2 flex flex-col items-center justify-center sm:my-0 my-6" data-aos='zoom-in' data-aos-delay="400">
                            <Link to="/referencement-toulouse/">
                                <svg className="mx-auto block" width="80px" viewBox="0 0 1024 1280"><g><g><g><path fill="#FFFFFF" d="M746.5,322c11.7,29,19.7,59.3,24,90.3c-0.6-4.4-1.2-8.9-1.8-13.3c4.4,33.2,4.4,66.9,0,100.1     c0.6-4.4,1.2-8.9,1.8-13.3c-4.5,33-13.3,65.2-26.2,95.8c1.7-4,3.4-8,5-11.9c-12.4,29-28.3,56.3-47.5,81.3     c2.6-3.4,5.2-6.7,7.8-10.1c-19.8,25.6-42.7,48.6-68.3,68.4c3.4-2.6,6.7-5.2,10.1-7.8c-25.5,19.6-53.4,35.9-83,48.4     c4-1.7,8-3.4,11.9-5c-30.3,12.6-62,21.3-94.5,25.7c4.4-0.6,8.9-1.2,13.3-1.8c-33.2,4.4-66.8,4.4-100,0c4.4,0.6,8.9,1.2,13.3,1.8     c-32.5-4.4-64.3-13.1-94.5-25.7c4,1.7,8,3.4,11.9,5c-29.6-12.5-57.5-28.8-83-48.4c3.4,2.6,6.7,5.2,10.1,7.8     c-25.4-19.7-48.3-42.6-68-68c2.6,3.4,5.2,6.7,7.8,10.1c-19.6-25.5-35.9-53.4-48.4-83c1.7,4,3.4,8,5,11.9     c-12.6-30.3-21.3-62-25.7-94.5c0.6,4.4,1.2,8.9,1.8,13.3c-4.4-33.2-4.4-66.8,0-100c-0.6,4.4-1.2,8.9-1.8,13.3     c4.4-32.5,13.1-64.3,25.7-94.5c-1.7,4-3.4,8-5,11.9c12.5-29.6,28.8-57.5,48.4-83c-2.6,3.4-5.2,6.7-7.8,10.1     c19.7-25.4,42.6-48.3,68-68c-3.4,2.6-6.7,5.2-10.1,7.8c25.5-19.6,53.4-35.9,83.1-48.4c-4,1.7-8,3.4-11.9,5     c30.4-12.7,62.2-21.3,94.9-25.7c-4.4,0.6-8.9,1.2-13.3,1.8c32.9-4.3,66.2-4.3,99.1,0c-4.4-0.6-8.9-1.2-13.3-1.8     c33.1,4.5,65.5,13.3,96.2,26.2c-4-1.7-8-3.4-11.9-5c3.6,1.6,7.3,3.2,10.9,4.8c5.7,3.7,11.9,5.6,18.6,5.9     c6.6,1.5,13.3,1.2,19.9-0.9c11.6-3.2,24.2-12.2,29.9-23c6.1-11.6,9.2-25.7,5-38.5c-3.8-11.7-11.3-24.5-23-29.9     C595.6,51.1,559,38.5,520.5,32.5c-38.3-6-76.6-8.3-115.2-3.7c-38.8,4.6-76.4,12.7-112.6,27.7c-19.7,8.1-39,16.9-57.4,27.7     c-19,11.2-36.7,24.2-54,38C121.6,169.8,77.6,234.8,51.1,306.2C38.4,340.5,31.5,376.4,28,412.8c-3.6,36.6-1.1,73,4.8,109.2     c5.9,36.4,17.6,71,32.7,104.6c15.4,34.4,36.2,65.5,60.1,94.5c48,58.4,112.6,101.4,183.4,127c34.6,12.5,70.8,19.3,107.4,22.5     c36.3,3.2,72.6,0.5,108.5-5.5c73.5-12.4,141.7-46.6,198.6-94.1c61-51,106-120.7,129.8-196.3c23.3-74.1,24.8-155.2,5.8-230.4     c-4.2-16.6-9.6-32.9-16-48.9c-1.5-6.5-4.5-12.2-8.9-17c-3.5-5.4-8.2-9.7-14-12.9c-10.7-6.3-26.5-8.9-38.5-5     c-12.1,3.9-23.8,11.4-29.9,23C745.7,294.6,741.6,309.8,746.5,322L746.5,322z" /></g></g><g><g><path fill="#FFFFFF" d="M983.2,912.5c-26.5-26.5-53.1-53.1-79.6-79.6c-42.2-42.2-84.4-84.4-126.6-126.6     c-9.6-9.6-19.2-19.2-28.7-28.7c-9.1-9.1-22.5-14.6-35.4-14.6c-12.3,0-26.9,5.4-35.4,14.6c-8.7,9.5-15.2,22-14.6,35.4     c0.6,13.3,5.1,25.8,14.6,35.4c26.5,26.5,53.1,53.1,79.6,79.6c42.2,42.2,84.4,84.4,126.6,126.6c9.6,9.6,19.2,19.2,28.7,28.7     c9.1,9.1,22.5,14.6,35.4,14.6c12.3,0,26.9-5.4,35.4-14.6c8.7-9.5,15.2-22,14.6-35.4C997.2,934.5,992.7,922,983.2,912.5     L983.2,912.5z" /></g></g><g><g><g><path fill="#FFFFFF" d="M322.7,568c22.6-22.6,45.2-45.2,67.8-67.8c36-36,72-72,107.9-107.9c8.2-8.2,16.4-16.4,24.6-24.6      c-23.6,0-47.1,0-70.7,0c15.6,15.6,31.2,31.2,46.8,46.8c24.9,24.9,49.8,49.8,74.7,74.7c5.7,5.7,11.5,11.5,17.2,17.2      c19.1,19.1,51.6,19.1,70.7,0c10.6-10.6,21.3-21.3,31.9-31.9c25.6-25.6,51.1-51.1,76.7-76.7c30.9-30.9,61.8-61.8,92.8-92.8      c26.7-26.7,53.4-53.4,80.1-80.1c12.9-12.9,26.1-25.7,38.8-38.8c0.2-0.2,0.4-0.4,0.6-0.6c9.1-9.1,14.6-22.5,14.6-35.4      c0-12.3-5.4-26.9-14.6-35.4c-9.5-8.7-22-15.2-35.4-14.6c-13.3,0.6-25.8,5.1-35.4,14.6c-10.6,10.6-21.3,21.3-31.9,31.9      c-25.6,25.6-51.1,51.1-76.7,76.7c-30.9,30.9-61.8,61.8-92.8,92.8c-26.7,26.7-53.4,53.4-80.1,80.1      c-12.9,12.9-26.1,25.7-38.8,38.8c-0.2,0.2-0.4,0.4-0.6,0.6c23.6,0,47.1,0,70.7,0c-15.6-15.6-31.2-31.2-46.8-46.8      c-24.9-24.9-49.8-49.8-74.7-74.7c-5.7-5.7-11.5-11.5-17.2-17.2c-19.1-19.1-51.6-19.1-70.7,0c-22.6,22.6-45.2,45.2-67.8,67.8      c-36,36-72,72-107.9,107.9c-8.2,8.2-16.4,16.4-24.6,24.6c-9.1,9.1-14.6,22.5-14.6,35.4c0,12.3,5.4,26.9,14.6,35.4      c9.5,8.7,22,15.2,35.4,14.6C300.6,582,313.1,577.6,322.7,568L322.7,568z" /></g></g><g><g><path fill="#FFFFFF" d="M797.8,199.7c43.7,0,87.5,0,131.2,0c6.3,0,12.5,0,18.8,0c-16.7-16.7-33.3-33.3-50-50      c0,43.7,0,87.5,0,131.2c0,6.3,0,12.5,0,18.8c0,12.8,5.6,26.3,14.6,35.4c8.7,8.7,22.9,15.2,35.4,14.6      c12.9-0.6,26.3-4.8,35.4-14.6c9-9.8,14.6-21.8,14.6-35.4c0-43.7,0-87.5,0-131.2c0-6.3,0-12.5,0-18.8c0-27-22.9-50-50-50      c-43.7,0-87.5,0-131.2,0c-6.3,0-12.5,0-18.8,0c-12.8,0-26.3,5.6-35.4,14.6c-8.7,8.7-15.2,22.9-14.6,35.4      c0.6,12.9,4.8,26.3,14.6,35.4C772.2,194,784.3,199.7,797.8,199.7L797.8,199.7z" /></g></g></g></g></svg>
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT NATUREL</p>
                            </Link>
                        </div>
                        <div className="w-full sm:w-1/3 px-12 py-2 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="600">
                            <Link to="/agence-adwords-47-31/">
                                <svg className="mx-auto block" width="80px" viewBox="0 0 100 125"><path fill="#FFFFFF" d="M84.9,18.3l7.2-4c1-0.5,2.2-0.2,2.7,0.8l0,0c0.5,1,0.2,2.2-0.8,2.7l-7.2,4c-1,0.5-2.2,0.2-2.7-0.8l0,0  C83.6,20.1,84,18.8,84.9,18.3z M83.2,15.9l5.3-6.5c0.7-0.8,0.6-2-0.2-2.7c-0.8-0.8-2.2-0.7-2.9,0.2l-5.3,6.5c-0.7,0.8-0.6,2,0.2,2.7  C81.1,16.8,82.5,16.8,83.2,15.9z M98.5,25.2c-0.2-1-1.2-1.7-2.2-1.6l-8.3,1c-1.2,0.1-1.9,1.2-1.7,2.4c0.2,1,1.2,1.7,2.2,1.6l8.3-1  C98,27.5,98.8,26.4,98.5,25.2z M49.8,93.9h8.6c4.6,0,8.3-3.7,8.3-8.3V85l-5,2.5L49.8,93.9z M86.2,41.2c0.5,1,0.3,2.2-0.6,2.8  c-1,0.7-2.3,0.4-2.9-0.6c0,0,0,0,0,0c-8.8-2.3-18.3,0.1-23.8,2.1c0,0,0,0,0,0.1l0.9,1.7c0,0,0,0,0,0.1l-4.2,2.3c0,0,0,0,0,0.1  l4.9,5.3c0,0,0,0,0,0c2-1.5,5.6-3.7,8.1-3.1c2.9,0.7,2.8,3.7,2.8,4c0,0,0,0,0,0c0.4,0.1,4.1,1.2,3,5.5c0,0,0,0,0,0  c0.3,0.2,3.4,2.2,1.6,6.2c0,0,0,0,0,0c0.3,0.3,3.6,3.5-1.5,7.9c-1.6,1.3-3.8,2.6-6,3.5c0,0,0,0,0,0l-8.8,4.4c0,0,0,0,0,0l-8.9,4.8  h0.1l-1.3,0.7l-8.8,4.8c0,0,0,0,0,0h-0.4h-4.5H9.7c-1,0-1.9-0.2-2.8-0.5c-3.2-1.2-5.5-4.2-5.5-7.8V41.7c0-4.7,3.8-8.4,8.4-8.4h22.3  c-0.4,0.7-0.8,1.4-1,2.2c-0.5,1.8-0.5,3.7,0.1,5.5c-0.3,0.5-0.6,1-0.7,1.6c-0.4,1.5-0.3,3.1,0.5,4.5l1.2,2.1H6.9v34.3v1.1  c0,2.1,1.7,3.8,3.8,3.8h4.6l29.3-15.7c1.1-0.6,1.9-1.6,2.3-2.8c0.1-0.5,0.2-0.9,0.2-1.2c0-0.2-0.1-0.4-0.1-0.6v0  c-0.1-0.8-0.1-1.9,0.2-3.1c0,0,2-6.1,6.2-7.8c0,0,0,0,0-0.1L49.4,53c0,0,0,0,0,0l-1,0.5c-2.3,1.3-5.2,0.4-6.5-1.9l-0.8-1.5  c0,0,0,0-0.1,0l-1.2,0.7c-0.8,0.4-1.8,0.1-2.2-0.6L34.8,45c-0.4-0.8-0.1-1.8,0.6-2.2l1.2-0.7c0,0,0,0,0-0.1l-1-1.8  c-1.3-2.3-0.4-5.2,1.9-6.5L49,27.5c0,0,0,0,0.1,0l0.9,1.7c0,0,0,0,0.1,0c4.6-3.6,11.7-10.3,14.5-19c0,0,0,0,0,0  c-0.5-1,0-2.3,1.1-2.8c1-0.4,2.2,0.1,2.7,1L74.1,19c0,0,0,0,0,0c2.8-0.4,5.7,0.9,7.1,3.6c1.4,2.6,1,5.8-0.8,7.9c0,0,0,0,0,0  L86.2,41.2z M53.1,45.2l-6-10.9c0,0,0,0-0.1,0l-6.8,3.8c0,0,0,0,0,0.1l6,10.9c0,0,0,0,0.1,0L53.1,45.2  C53.1,45.3,53.1,45.2,53.1,45.2z M21.9,41.4c0,1.3,1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4  C23,39,21.9,40.1,21.9,41.4z M14.9,41.4c0,1.3,1.1,2.4,2.4,2.4h0c1.2,0,2.1-0.8,2.3-1.9c0-0.2,0-0.3,0-0.5c0-0.2,0-0.3,0-0.5  c-0.2-1.1-1.2-1.9-2.3-1.9h0C16,39,14.9,40.1,14.9,41.4z M8,41.4c0,1.3,1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4  c0-1.3-1.1-2.4-2.4-2.4C9,39,8,40.1,8,41.4z" /></svg>
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT GOOGLE ADS</p>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-around md:justify-between mt-24">
                        <div className="text-center py-3 px-4 font-bold flex flex-col mx-5 bg-white w-1/3 lg:1/6 xl:w-1/12 hover:text-bleu" ata-aos="fade-right">
                            <Link to="/realisations/aquapensezvous/"><svg style={{ maxWidth: '25px' }} className="mx-auto inline-block align-text-middle" width="20px" viewBox="0 0 40 50" x="0px" y="0px"><g fill="#000000" fill-rule="evenodd"><path fill="#000000" d="m20 0c-11.05 0-20 8.954-20 20 0 11.05 8.954 20 20 20 11.05 0 20-8.954 20-20 0-11.05-8.954-20-20-20m5.056 9.981c.725.715.725 1.874 0 2.588l-7.966 7.853 7.966 7.853c.725.715.725 1.874 0 2.589-.725.715-1.901.715-2.626 0l-9.279-9.147c-.725-.715-.725-1.874 0-2.589l9.279-9.147c.362-.358.838-.536 1.313-.536.475 0 .95.179 1.313.536" /></g></svg></Link>
                            <Link className="mx-auto block" to="/realisations/aquapensezvous/">Précédent</Link>
                        </div>
                        <div className="text-center py-3 font-bold flex flex-col bg-white w-1/3 lg:1/6 xl:w-1/12 hover:text-bleu" data-aos="fade-left">
                            <Link className="mx-auto block order-last" to="/realisations/sia/">Suivant</Link>
                            <Link className="mx-auto inline-block align-text-middle" to="/realisations/sia/"><svg style={{ maxWidth: '25px' }} width="20px" viewBox="0 0 0.689 0.86125" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd"><defs></defs><g><path class="fil0" d="M0.46 0.367l-0.148 0.147c-0.012,0.013 -0.032,0.013 -0.044,0 -0.012,-0.012 -0.012,-0.032 0,-0.044l0.126 -0.125 -0.126 -0.126c-0.012,-0.012 -0.012,-0.032 0,-0.044 0.012,-0.012 0.032,-0.012 0.044,0l0.148 0.147c0.012,0.013 0.012,0.032 0,0.045zm-0.46 -0.022c0,0.095 0.039,0.181 0.101,0.243 0.062,0.063 0.148,0.101 0.244,0.101 0.095,0 0.181,-0.038 0.243,-0.101 0.063,-0.062 0.101,-0.148 0.101,-0.243 0,-0.096 -0.038,-0.182 -0.101,-0.244 -0.062,-0.062 -0.148,-0.101 -0.243,-0.101 -0.096,0 -0.182,0.039 -0.244,0.101 -0.062,0.062 -0.101,0.148 -0.101,0.244z" /></g></svg></Link>
                        </div>
                    </div>
                </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsHauteGaronne {
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
export default HauteGaronne;
