import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Button from "../components/button";
import ButtonBlog from "../components/buttonblog";
import RoundButton from "../components/roundButton";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import Accordion from '../components/accordion';
import Partenaires from '../components/partenaires';
import "../scss/home.scss";
import "../scss/global.scss";

// import Bg from "../images/agence-web-bg.jpg";
import Bg from "../images/agence-web-linkweb.jpg";
import imac from "../images/agence-web-ramonville.jpg";
// import bgDev from '../images/bg-dev.jpg';
import bgDev from '../images/cta-background-agence-web.jpg';
import stars from '../images/stars.png';
import bureau from '../images/bureau2-min.jpg';
import siteinternet from "../images/agence-web-specialisee.jpg";
import referencement from "../images/agence-communication-globale.jpg";
import webdesign from "../images/freelance.jpg";

import web from '../images/web.svg';
import laptop from '../images/laptop.svg';
import bullhorn from '../images/bullhorn.svg';


class AgenceWebHauteGaronne extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Web Haute-Garonne - Projets Web sur-mesure - Linkweb"
                    description="L'agence web Linkweb à Haute-Garonne vous accompagne dans le développements de vos projets web sur-mesure : création de site internet, référencement SEO, campagnes sponsorisées Ads."
                    keywords={[`Agence Web Haute-Garonne`, `Agence Web Haute-Garonne`, `Agence digitale Haute-Garonne`, `Agence digitale Haute-Garonne`]}
                    url="https://linkweb.fr/agence-web-haute-garonne/"
                    nom="Agence Web Haute-Garonne"
                    slug="agence-web-haute-garonne/"
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
                <section className="w-full bloctitrescreen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ background: 'rgba(0,0,0,.65) url(' + Bg + ')', backgroundPosition: 'center', backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}>
                    <h1 /*data-aos="fade-up" data-aos-delay="500"*/ className="century text-4xl sm:text-6xl text-center text-white">
                        Agence web Haute-Garonne
                        </h1>
                    <h3 className="italic text-center text-lg sm:text-2xl text-white mt-3">Un projet de création de site ou de refonte ? Besoin d’une communication web plus performante ? <br />Notre agence vous accompagne avec des prestations adaptées à tous vos besoins.</h3>
                    {/* <RoundButton url="/contact-agence-web-toulouse/" text="Je veux developper ma communication en ligne" /> */}
                    <button
                        className="font-light roundedButton bg-bleu text-white hover:text-white flex justify-center mt-3 century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 mt-12"
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/contact-agence-web-toulouse/';
                        }}
                    >
                        Je veux developper ma communication en ligne
                            </button>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                    <h2 className="text-center text-lg sm:text-2xl text-black century mt-3">Pour la conception de sites comme leur référencement, notre agence de développement web vous propose des solutions en fonction de vos ambitions et de vos attentes : nous vous apportons toutes les clés nécessaires à votre stratégie marketing.</h2>
                    <br />
                    <hr style={{ borderTop: '1px solid #37cfee', width: '33%' }} />
                    <br />
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence Web Haute-Garonne : obtenez de la visibilité grâce à nos services</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Notre agence fait partie des agences de France proposant un panel de solutions variées pour chaque projet. Notre équipe de développeurs et de référenceurs web est toujours prête à collaborer avec les entreprises pour trouver LA stratégie de marketing digital qui leur correspond.</h3>
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row mx-8 lg:mx-24 my-0 items-center lg:justify-center">
                    <div data-aos="fade-in" className=" w-full lg:w-3/12 md:w-1/2 bg-white my-4 border border-darkgrey mx-10 hover:shadow-xl py-6 century" style={{ borderRadius: '15px', borderColor: '#d4d4d4', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
                        <svg width="40px" className="cursor-pointer mx-auto block" viewBox="12.938 70.193 487.061 465.68874999999997"><g><path fill="#37cfee" d="M499.811,74.173c-0.011-2.202-1.799-3.98-4-3.98H135.94c-2.209,0-3.999,1.791-3.999,4v70.337   c0,0.003-0.001,0.006-0.001,0.01s0.001,0.006,0.001,0.01v72.281c-1.976-0.103-3.965-0.157-5.967-0.157   c-33.125,0-62.967,14.323-83.661,37.1c-0.173,0.162-0.328,0.34-0.471,0.53c-17.961,20.019-28.905,46.456-28.905,75.405   c0,28.943,10.939,55.375,28.893,75.392c0.146,0.197,0.307,0.38,0.485,0.547c20.693,22.775,50.534,37.096,83.657,37.096   c33.116,0,62.953-14.3,83.655-37.047c0.249-0.224,0.478-0.468,0.664-0.747c6.789-7.592,12.568-16.102,17.127-25.32h268.579   c2.209,0,4-1.791,4-4V112.869L499.811,74.173z M491.83,78.193l0.169,34.695v27.652H139.94l0-62.347H491.83z M230.826,336.737   c-0.027,0.404-0.05,0.809-0.081,1.212c-0.044,0.567-0.098,1.131-0.151,1.695c-0.031,0.331-0.06,0.663-0.094,0.994   c-0.063,0.611-0.136,1.219-0.21,1.827c-0.034,0.278-0.066,0.556-0.101,0.833c-0.084,0.65-0.177,1.297-0.273,1.943   c-0.034,0.227-0.067,0.454-0.102,0.68c-0.107,0.687-0.221,1.371-0.341,2.053c-0.031,0.177-0.062,0.354-0.094,0.531   c-0.132,0.727-0.271,1.451-0.418,2.173c-0.024,0.117-0.048,0.234-0.072,0.35c-0.162,0.783-0.331,1.563-0.511,2.339   c-0.006,0.026-0.012,0.053-0.019,0.079c-3.957,17.051-12.082,32.522-23.237,45.283h-47.846c4.839-19.064,7.468-42.21,7.744-65.022   h65.963c-0.019,0.508-0.035,1.017-0.061,1.525C230.896,335.736,230.859,336.236,230.826,336.737z M46.868,260.688h47.897   c-4.825,19.064-7.445,42.209-7.72,65.021H21.022C21.957,300.876,31.549,278.222,46.868,260.688z M165.02,325.709   c-0.276-22.812-2.904-45.957-7.743-65.021h47.846c15.327,17.534,24.925,40.188,25.86,65.021H165.02z M95.044,325.709   c0.294-25.694,3.406-47.972,7.998-65.021h45.952c4.609,17.05,7.732,39.328,8.028,65.021H95.044z M157.021,333.709   c-0.295,25.694-3.419,47.972-8.028,65.022h-45.952c-4.592-17.05-7.704-39.328-7.998-65.022H157.021z M155.041,252.688   c-3.425-11.13-7.709-20.404-12.812-26.756c21.094,3.287,40.126,12.87,55.117,26.756H155.041z M146.599,252.688h-41.171   c5.853-17.727,13.399-28.014,20.547-28.014C133.149,224.674,140.724,234.96,146.599,252.688z M96.994,252.688H54.64   c14.993-13.896,34.032-23.483,55.133-26.764C104.683,232.276,100.41,241.553,96.994,252.688z M87.045,333.709   c0.275,22.813,2.896,45.958,7.72,65.022H46.869c-15.319-17.535-24.912-40.189-25.847-65.022H87.045z M96.994,406.731   c3.416,11.134,7.689,20.411,12.779,26.763c-21.1-3.281-40.139-12.867-55.132-26.763H96.994z M105.427,406.731h41.171   c-5.875,17.727-13.449,28.013-20.624,28.013C118.826,434.744,111.28,424.458,105.427,406.731z M155.041,406.731h42.304   c-14.99,13.885-34.023,23.468-55.116,26.755C147.332,427.135,151.616,417.861,155.041,406.731z M231.04,371.63   c2.484-6.252,4.388-12.648,5.722-19.156c0.002-0.009,0.004-0.019,0.006-0.029c0.18-0.88,0.35-1.762,0.508-2.646   c0.013-0.072,0.026-0.143,0.038-0.215c0.147-0.825,0.284-1.652,0.412-2.481c0.019-0.122,0.038-0.244,0.057-0.367   c0.118-0.78,0.227-1.561,0.329-2.343c0.022-0.168,0.044-0.335,0.066-0.503c0.093-0.739,0.177-1.48,0.255-2.222   c0.022-0.207,0.045-0.414,0.066-0.621c0.07-0.705,0.132-1.411,0.189-2.118c0.02-0.242,0.042-0.483,0.06-0.725   c0.051-0.683,0.092-1.368,0.131-2.053c0.015-0.261,0.033-0.522,0.046-0.783c0.034-0.69,0.057-1.381,0.079-2.072   c0.008-0.255,0.021-0.509,0.027-0.765c0.023-0.939,0.036-1.88,0.036-2.822c0-0.93-0.013-1.858-0.035-2.786   c-0.008-0.334-0.024-0.665-0.035-0.998c-0.02-0.591-0.039-1.183-0.068-1.773c-0.019-0.396-0.046-0.791-0.069-1.186   c-0.031-0.524-0.062-1.047-0.1-1.57c-0.031-0.42-0.067-0.838-0.103-1.257c-0.042-0.498-0.085-0.995-0.133-1.492   c-0.041-0.423-0.087-0.844-0.133-1.265c-0.054-0.496-0.11-0.992-0.171-1.487c-0.05-0.408-0.103-0.815-0.157-1.222   c-0.069-0.517-0.141-1.034-0.218-1.549c-0.055-0.374-0.112-0.747-0.171-1.12c-0.089-0.565-0.184-1.13-0.281-1.693   c-0.055-0.315-0.109-0.63-0.166-0.943c-0.119-0.655-0.246-1.307-0.376-1.959c-0.043-0.216-0.085-0.433-0.13-0.648   c-0.169-0.817-0.347-1.632-0.534-2.444c-0.01-0.045-0.02-0.09-0.03-0.135c-4.36-18.872-13.53-36.405-26.868-50.92   c-14.275-15.535-32.39-26.606-52.326-32.273c-0.042-0.012-0.083-0.024-0.125-0.036c-1.646-0.466-3.303-0.895-4.973-1.286   c-0.171-0.04-0.341-0.082-0.512-0.122c-2.592-0.595-5.21-1.1-7.852-1.512c-0.49-0.076-0.982-0.145-1.473-0.215   c-0.696-0.099-1.388-0.218-2.088-0.305l0-68.973h352.059v223.09H231.04z" /><path fill="#37cfee" d="M185.225,124.736c8.491,0,15.399-6.908,15.399-15.398c0-8.459-6.908-15.341-15.399-15.341   c-8.459,0-15.341,6.882-15.341,15.341C169.884,117.828,176.766,124.736,185.225,124.736z M185.225,101.997   c4.08,0,7.399,3.293,7.399,7.341c0,4.079-3.319,7.398-7.399,7.398c-4.048,0-7.341-3.319-7.341-7.398   C177.884,105.222,181.108,101.997,185.225,101.997z" /><path fill="#37cfee" d="M261.857,124.736c8.494,0,15.405-6.908,15.405-15.398c0-8.459-6.911-15.341-15.405-15.341   c-8.491,0-15.399,6.882-15.399,15.341C246.458,117.828,253.366,124.736,261.857,124.736z M261.857,101.997   c4.083,0,7.405,3.293,7.405,7.341c0,4.079-3.322,7.398-7.405,7.398c-4.08,0-7.399-3.319-7.399-7.398   C254.458,105.29,257.777,101.997,261.857,101.997z" /><path fill="#37cfee" d="M338.496,124.736c8.456,0,15.335-6.908,15.335-15.398c0-8.459-6.879-15.341-15.335-15.341   c-8.494,0-15.405,6.882-15.405,15.341C323.091,117.828,330.002,124.736,338.496,124.736z M338.496,101.997   c4.113,0,7.335,3.225,7.335,7.341c0,4.079-3.29,7.398-7.335,7.398c-4.083,0-7.405-3.319-7.405-7.398   C331.091,105.29,334.413,101.997,338.496,101.997z" /><path fill="#37cfee" d="M419.925,194.432H259.551c-2.209,0-4,1.791-4,4s1.791,4,4,4h160.374c2.209,0,4-1.791,4-4S422.134,194.432,419.925,194.432z   " /><path fill="#37cfee" d="M419.925,261.972H272.699c-2.209,0-4,1.791-4,4s1.791,4,4,4h147.226c2.209,0,4-1.791,4-4S422.134,261.972,419.925,261.972z   " /><path fill="#37cfee" d="M419.925,329.448H319.612c-2.209,0-4,1.791-4,4s1.791,4,4,4h100.313c2.209,0,4-1.791,4-4S422.134,329.448,419.925,329.448z   " /></g></svg>
                        <h3 className="text-center text-2xl font-bold century">Conception de site internet</h3>
                        <hr className="blue"></hr>
                        <p className="text-center px-6 text-md">Notre <strong className="font-normal">agence internet</strong> réalise votre site internet en fonction de vos besoins : <strong className="font-normal">site vitrine</strong>, <strong className="font-normal">e-commerce</strong> ou administrable.</p>
                        <br />
                        <ul className="text-bold text-center py-2">
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Design et ergonomie sur-mesure</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Sites adaptables sur tous supports</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Choix d’hébergement web et nom de domaine</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Protocole HTTPS, protection de la navigation</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Respect des critères RGPD</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Maintenance technique</div>
                            </li>

                        </ul>
                        <div className="w-1/2 mx-auto block">
                            <br />
                            <button
                                className="w-full font-normal roundedButton bg-darkgrey text-white flex justify-center items-center text-xs md:text-sm px-3 lg:px-4 py-4"
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = '/creation-site-internet-toulouse/';
                                }}
                            > Créer votre site web
                                </button>
                            {/* <ButtonBlog url="/creation-site-internet-toulouse/" text="Créer votre site web" color="darkgrey" /> */}
                        </div>
                    </div>
                    <div data-aos="fade-in" data-aos-delay="300" className=" w-full md:w-1/2 lg:w-3/12 bg-white my-12 border border-darkgrey mx-8 hover:shadow-xl py-6 century" style={{ borderRadius: '15px', borderColor: '#d4d4d4', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
                        <svg className="cursor-pointer mx-auto block" width="40px" viewBox="0 0 48 60"><g><polygon fill="#37cfee" points="47,47 1,47 1,1 3,1 3,45 47,45  " /><g><path fill="#37cfee" d="M15.9,47H7.4V33h8.4V47z M9.4,45h4.4V35H9.4V45z" /><path fill="#37cfee" d="M28.7,47h-8.4V23h8.4V47z M22.3,45h4.4V25h-4.4V45z" /><path fill="#37cfee" d="M41.6,47h-8.4V13h8.4V47z M35.1,45h4.4V15h-4.4V45z" /></g><g><path fill="#37cfee" d="M10.4,26.2l-0.9-1.8c6.4-3.1,14-10.1,18.6-17l1.7,1.1C25.1,15.7,17.1,23,10.4,26.2z" /><g><polygon fill="#37cfee" points="24.4,6 32.8,10.9 31,4.2    " /></g></g></g></svg>
                        <h3 className="text-center text-2xl font-bold century">Référencement Web</h3>
                        <hr className="blue"></hr>
                        <p className="text-center px-6">Pour développer votre visibilité en ligne, nous vous proposons une <strong className="font-normal">stratégie de référencement web</strong> fonction de vos besoins et de votre concurrence.</p>
                        <br />
                        <ul className="text-bold text-center py-2">
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Sélection des <strong className="font-normal">mots-clés</strong></div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left"><strong className="font-normal">Optimisation SEO</strong> on-site</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Rédaction de contenu digital <strong className="font-normal">SEO</strong></div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Netlinking</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Accompagnement sur-mesure</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Campagne Google Ads {/*<a href="/agence-adwords-47-31/"><span className="cursor-pointer text-bleu hover:text-black">(optionnel +)</span></a>*/}</div>
                            </li>
                        </ul>
                        <div className="w-1/2 mx-auto block">
                            <br />
                            <button
                                className="w-full font-normal roundedButton bg-darkgrey text-white flex justify-center items-center text-xs md:text-sm px-3 lg:px-4 py-4"
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = '/referencement-toulouse/';
                                }}
                            > Obtenir de la visibilité
                                </button>
                            {/* <ButtonBlog url="/referencement-toulouse/" text="Obtenir de la visibilité" color="darkgrey" /> */}
                        </div>
                    </div>
                    <div data-aos="fade-in" data-aos-delay="700" className=" w-full md:w-1/2 lg:w-3/12 bg-white my-12 border border-grey mx-8 hover:shadow-xl py-6 century" style={{ borderRadius: '15px', borderColor: '#d4d4d4', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
                        <svg width="40px" className="cursor-pointer mx-auto block" viewBox="0 0 280 350" x="0px" y="0px"><defs></defs><g><path fill="#37cfee" className="fil0" d="M84.998 219.434c-0.016,-0.076 -0.03,-0.153 -0.042,-0.23l-0.018 -0.098c-0.397,-2.118 0.634,-4.173 2.412,-5.174l40.349 -41.05 -24.108 -24.84 -40.292 40.292c-0.77,2.316 -3.162,3.75 -5.618,3.261l-0.384 -0.074c-0.112,-0.017 -0.223,-0.037 -0.334,-0.061 -5.385,-0.96 -10.952,-0.645 -16.214,0.946 -5.289,1.598 -10.275,4.492 -14.461,8.678 -4.124,4.124 -6.992,9.014 -8.604,14.199 -0.62,1.992 -1.056,4.029 -1.309,6.082l15.097 -15.097 0.01 0.01c1.329,-1.327 3.365,-1.825 5.229,-1.104l23.4 9.044c1.337,0.471 2.459,1.515 2.98,2.952l8.104 22.322c0.815,1.808 0.481,4.008 -1.005,5.494l-15.097 15.097c2.054,-0.254 4.09,-0.69 6.082,-1.309 5.185,-1.612 10.075,-4.48 14.199,-8.604 4.156,-4.156 7.036,-9.08 8.64,-14.293 1.639,-5.327 1.967,-10.977 0.984,-16.443zm128.991 -18.803l-142.787 -147.114 -13.131 12.77 142.788 147.114 13.13 -12.77zm-138.498 -151.285l142.787 147.114 9.456 -9.196 -83.481 -86.016c-0.149,-0.118 -0.293,-0.246 -0.431,-0.383 -0.174,-0.175 -0.332,-0.358 -0.475,-0.55l-58.396 -60.17 -9.46 9.201zm121.078 168.226l-142.787 -147.114 -8.823 8.581 142.783 147.119 8.827 -8.586zm38.45 33.987l16.736 -16.248 -20.677 -42.935 -38.336 37.267 42.277 21.916zm23.156 -16.7l15.282 36.651c0.634,1.528 -0.09,3.28 -1.617,3.914 -0.868,0.36 -1.808,0.282 -2.575,-0.133l-34.86 -17.319c-0.069,-0.03 -0.137,-0.062 -0.204,-0.096l-47.891 -24.826c-0.331,-0.17 -0.617,-0.394 -0.852,-0.655l-50.933 -52.479 -39.513 40.199c0.774,6.226 0.229,12.591 -1.632,18.641 -2.073,6.735 -5.76,13.062 -11.059,18.361 -5.272,5.272 -11.551,8.946 -18.229,11.023 -6.909,2.147 -14.246,2.57 -21.336,1.267 -2.66,-0.487 -4.422,-3.039 -3.935,-5.699 0.187,-1.017 0.674,-1.902 1.355,-2.58l-0.011 -0.011 20.877 -20.878 -6.403 -17.636 -18.469 -7.139 -20.829 20.829c-1.919,1.919 -5.029,1.919 -6.948,0 -0.836,-0.836 -1.308,-1.901 -1.415,-2.993 -1.213,-6.965 -0.767,-14.156 1.34,-20.934 2.077,-6.679 5.751,-12.958 11.023,-18.229 5.367,-5.368 11.769,-9.08 18.567,-11.135 5.974,-1.806 12.252,-2.33 18.401,-1.571l40.439 -40.44 -58.161 -59.927 -0.049 -0.053 -0.044 -0.043 -18.217 -18.73c-3.419,-3.523 -5.087,-8.117 -5.021,-12.682 0.066,-4.576 1.866,-9.125 5.383,-12.546l22.99 -22.311c3.527,-3.423 8.131,-5.094 12.706,-5.028 4.585,0.066 9.144,1.869 12.57,5.39l18.205 18.718 0.027 0.029 0.02 0.019 57.504 59.251 38.738 -38.737c-0.8,-6.487 -0.17,-13.122 1.891,-19.394 2.116,-6.439 5.721,-12.481 10.813,-17.573 5.271,-5.271 11.551,-8.945 18.23,-11.022 6.777,-2.108 13.968,-2.554 20.933,-1.34 1.093,0.107 2.157,0.578 2.993,1.415 1.919,1.918 1.919,5.029 0,6.947l-20.828 20.829 7.139 18.47 17.636 6.403 20.877 -20.878 0.011 0.011c0.678,-0.68 1.563,-1.168 2.58,-1.354 2.66,-0.488 5.212,1.274 5.7,3.934 1.302,7.09 0.879,14.428 -1.268,21.336 -2.077,6.679 -5.751,12.958 -11.023,18.229 -5.543,5.544 -12.194,9.321 -19.249,11.332 -6.397,1.823 -13.124,2.186 -19.655,1.088l-38.147 38.809 52.075 53.656 0.01 0.011c0.231,0.237 0.414,0.503 0.55,0.785l23.361 48.506c0.055,0.103 0.104,0.21 0.147,0.318zm-17.484 19.553l24.152 11.999 -10.525 -25.246 -13.627 13.247zm-89.186 -154.283l23.701 24.421 39.649 -40.337c1.156,-1.317 2.981,-1.972 4.806,-1.546 5.753,1.343 11.786,1.202 17.486,-0.423 5.482,-1.562 10.66,-4.508 14.989,-8.837 4.124,-4.124 6.992,-9.014 8.604,-14.199 0.62,-1.992 1.056,-4.028 1.309,-6.081l-15.096 15.097c-1.486,1.485 -3.686,1.82 -5.494,1.005l-22.323 -8.105c-1.436,-0.52 -2.481,-1.643 -2.952,-2.98l-9.044 -23.399c-0.721,-1.865 -0.223,-3.9 1.105,-5.229l-0.011 -0.011 15.097 -15.096c-2.053,0.253 -4.089,0.689 -6.081,1.309 -5.186,1.612 -10.076,4.48 -14.2,8.604 -3.986,3.986 -6.797,8.68 -8.433,13.658 -1.707,5.196 -2.155,10.722 -1.344,16.099 0.027,0.177 0.043,0.354 0.051,0.529 0.518,1.684 0.111,3.591 -1.221,4.923l-40.598 40.598zm-110.806 -25.475l40.034 -38.851 -16.117 -16.57c-2.279,-2.343 -5.308,-3.542 -8.351,-3.585 -3.054,-0.044 -6.121,1.066 -8.465,3.34l-22.99 22.311c-2.337,2.273 -3.534,5.293 -3.578,8.327 -0.044,3.044 1.064,6.102 3.333,8.44l16.134 16.588z" /></g></svg>
                        <h3 className="text-center text-2xl font-bold century">Solution personnalisée</h3>
                        <hr className="blue"></hr>
                        <p className="text-center px-6">Notre <strong className="font-normal">agence web</strong> est à votre écoute pour définir un projet conçu spécialement pour vous en fonction de chacun de vos besoins.</p>
                        <br />
                        <ul className="text-bold text-center py-2">
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Applications Métiers et Intranet</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Web services et API</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Création module de réservation</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Outil de personnalisation des produits</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Générateur de devis</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                                <div className="w-3/12 text-center text-bleu">✔</div>
                                <div className="w-9/12 text-left">Etc.</div>
                            </li>
                        </ul>
                        <div className="w-1/2 mx-auto block">
                            <br />
                            <button
                                className="w-full font-normal roundedButton bg-darkgrey text-white flex justify-center items-center text-xs md:text-sm px-3 lg:px-4 py-4"
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = '/contact-agence-web-toulouse/';
                                }}
                            > Définir votre projet
                                </button>
                            {/* <ButtonBlog url="/contact-agence-web-toulouse/" text="Définir votre projet" color="darkgrey" /> */}
                        </div>
                    </div>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                        Notre agence est taillée pour votre <span className="text-bleu">projet digital</span> en Haute-Garonne
                        </h2>
                    <hr className="blue"></hr>
                    <div className="w-full" /*data-aos='zoom-in'*/>
                        <p className="text-md text-center py-12 century">
                            Vous êtes à la recherche d’une <strong className="font-normal">agence en Haute-Garonne</strong> pour mettre en place votre <strong className="font-normal">solution webmarketing</strong> ? Que vous soyez un organisme privé ou public, notre <strong className="font-normal">entreprise</strong> vous propose une solution élaborée uniquement pour vous et se tient à l’écoute de vos besoins.</p>
                    </div>
                </section>
                <section className="phototext mb-24">
                    <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
                        <div className="w-full flex justify-center items-center lg:w-5/12">
                            <img className="w-full" src={bureau} alt="Agence Web Haute Garonne" />
                        </div>
                        <div className="w-full lg:w-1/2 my-10  flex flex-col">
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                                    <p className="text-center">1</p>
                                </div>
                                <div className="w-full px-6 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>10 ANS D'EXPÉRIENCE
                                </h3>
                                    <br />
                                    <p className="w-full century pb-4 text-justify">Depuis 2008, nos <strong className="font-normal">clients</strong> bénéficient d’un accompagnement pour rendre leurs sites visibles sur les <strong className="font-normal">canaux du Web</strong>.</p>

                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">2</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>20 TECHNICIENS
                                    </h3>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Notre <strong className="font-normal">équipe</strong> est composée de plus d’une vingtaine de techniciens qui oeuvrent à améliorer la performance de vos sites tous les jours.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">3</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>300 SITES EN GESTION
                                    </h3>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Nos réalisations <strong className="font-normal">digitales</strong> répondent à des demandes de professionnels de divers horizons : des TPE, des PME, de l’auto-entreprise, etc.</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                            <div className="w-full flex-col md:flex-row flex px-auto">
                                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                                    <p className="text-center">4</p>
                                </div>
                                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                                    <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                                        <span className="text-bleu">/</span>4,6/5 SUR GOOGLE
                                    </h3>
                                    <br />
                                    <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Les entreprises que nous accompagnons sont satisfaites de nos prestations, la note de notre fiche <strong className="font-normal">Google</strong> est basée sur 107 avis</p>
                                    {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                        Nous apportons une <span className="text-bleu">réponse pertinente</span> à tous vos besoins
                        </h2>
                    <hr className="blue"></hr>
                    <div className="w-full" /*data-aos='zoom-in'*/>
                        <p className="text-md text-center py-12 century">
                            Organisme public ou privé, vous êtes en pleine recherche d’une <strong className="font-normal">agence web</strong> sur le secteur de la <strong className="font-normal">Haute-Garonne</strong> ? Pour vous proposer ses solutions digitales, notre agence définit à partir de vos besoins, un plan de <strong className="font-normal">webmarketing</strong> personnalisé.</p>
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row mt-16 mb-12 my-8 px-4 lg:mt-24 lg:mb-5 lg:px-24">
                    <div className="w-full xl:w-1/2 one px-auto">
                        <div className="flex items-center xl:items-center flex-col xl:flex-row flex-1">
                            <div className="chiffres mx-auto block century text-bleu -mt-64 mb-3" /*data-aos="fade-up"*/>1</div>
                            <section className="w-full lg:w-1/2 absolute z-10 px-auto lg:w-1/2 absolute px-12 lg:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE SUIS UN ORGANISME PUBLIC
                                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    En tant qu’établissement chargé de la culture, conseil départemental ou mairie, vous mettez un point d’honneur à informer vos administrés ? Notre <strong className="font-normal">entreprise de création</strong> établit des propositions concrètes pour y parvenir. Pour mener une campagne de <strong className="font-normal">communication en ligne</strong> performante, mettez toutes vos chances de votre côté.
                                </div>
                                {/* <Button url="/contact-agence-web-toulouse/" text="En savoir plus" position="center" /> */}
                                <button
                                    className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = '/contact-agence-web-toulouse/';
                                    }}
                                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> En savoir plus
                                    </button>
                            </section>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2 two px-auto">
                        <div className="flex items-center xl:items-center flex-col xl:flex-row flex-1">
                            <div className="chiffres mx-auto block century text-bleu -mt-64 mb-0" /*data-aos="fade-up"*/>2</div>
                            <section className="w-full lg:w-1/2 absolute z-10 px-auto lg:w-1/2 absolute px-12 lg:px-24 pt-24">
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">/</span>JE SUIS UNE ENTREPRISE
                                </h3>
                                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                                    Commerçants, PME ou TPE, notre <strong className="font-normal">entreprise</strong> répond à vos besoins pour vous rendre toujours plus <strong className="font-normal">visible sur Internet</strong> et améliorer votre notoriété grâce à la mise en place de <strong className="font-normal">stratégies de communication</strong> efficaces vous rapprochant de votre clientèle. Nous utilisons des <strong className="font-normal">leviers</strong> performants pour développer et <strong className="font-normal">faire connaître votre site</strong>.
                                </div>
                                {/* <Button url="/contact-agence-web-toulouse/" text="Être recontacté" position="center" /> */}
                                <button
                                    className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = '/contact-agence-web-toulouse/';
                                    }}
                                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> Être recontacté
                                    </button>
                            </section>
                        </div>
                    </div>
                </section>
                <section className="max-w-6xl mx-auto flex align-center justify-center text-center mb-6">
                    <div className="w-full flex flex-col md:flex-row justify-center">
                        <button
                            className="century text-sm hover:text-bleu"
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/creation-site-internet-toulouse/';
                            }}
                        >

                            Je souhaite la création de mon site internet
                            {/* </Link> */}</button>&nbsp;
                            |&nbsp;
                            <button
                            className="century text-sm hover:text-bleu"
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/referencement-toulouse/';
                            }}
                        >

                            Je souhaite augmenter la visibilité de mon site existant
                            {/* </Link> */}</button>
                        {/* <Link
                                className="century text-sm hover:text-bleu"
                                to="/creation-site-internet-toulouse/"
                            >
                                Je souhaite une création de site internet
                            </Link>&nbsp;
                            |&nbsp;
                            <Link
                                className="century text-sm hover:text-bleu"
                                to="/referencement-toulouse/"
                            >
                                Je souhaite améliorer la visibilité de mon site existant
                            </Link> */}
                    </div>
                </section>
                <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
                    <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Agence Web Haute-Garonne : nos compétences</h2>
                    <br />
                    <div className="line-title my-4">
                        <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
                        <br />
                        <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Toute l’équipe de notre <Link to="/agence-developpement-web-toulouse/" className="font-bold text-bleu hover:text-black">agence de développement web</Link> met à votre service ses connaissances et son savoir-faire pour vous fournir des prestations complètes et efficaces en fonction de vos attentes : notre agence met tout en œuvre pour vous apporter un site fonctionnel et clé en main.</h3>
                    </div>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Développement </span><br /><span className="font-bold text-5xl md:text-6xl">WEB</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">À partir de la définition de vos besoins, notre <Link to="/agence-web-muret/" className="font-bold text-bleu hover:text-white"><strong>agence web à Muret</strong></Link> vous propose la <strong className="font-normal">création d’un site</strong> à votre image. Grâce à l’ajout de fonctionnalités spécifiques selon votre activité professionnelle, et la <strong className="font-normal">création d’un site unique</strong>, votre <strong className="font-normal">image de marque</strong> est renforcée. Le travail de l'<strong className="font-normal">UX et UI design</strong> est un allié important dans la mise en place d’un <strong className="font-normal">projet fonctionnel</strong> pour les utilisateurs et performants pour les <strong className="font-normal">moteurs de recherche comme Google</strong>.
                        <br /><br />
                        Nos <strong className="font-normal">développeurs</strong> vous fournissent un <strong className="font-normal">web design</strong> accordé à votre <strong className="font-normal">charte graphique</strong> et identité visuelle sur votre site. Cela s’intègre dans la liste d'éléments de <strong className="font-normal">communication</strong> forts : notre équipe de <strong className="font-normal">développement web</strong> permet à votre projet de se démarquer.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Référencement </span><br /><span className="font-bold text-6xl">WEB</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Parmi nos prestations, nous proposons à nos clients deux types de <strong className="font-normal">référencements</strong> distincts. Les référenceurs qualifiés de notre service de <strong className="font-normal">référencement naturel SEO</strong> sont également compétents en termes de référencement payant <strong className="font-normal">Google Ads</strong>. Nous vous aidons à choisir la meilleure formule en fonction des besoins et à partir des opportunités qui s’offrent à vous sur votre marché spécifique.
                        <br /><br />La <strong className="font-normal">campagne Adwords</strong> consiste à louer un espace de publicité en tête des <strong className="font-normal">résultats de recherche</strong> dans les moteurs. Ce système de communication <strong className="font-normal">publicitaire</strong> a pour but de générer du trafic. Il assure rapidement un <strong className="font-normal">retour sur investissement</strong> pour les entreprises en quête de résultats urgents. Contrairement au <strong className="font-normal">référencement SEO</strong>, le service <strong className="font-normal">Google Ads</strong> ne perdure que tant qu’il est financé.
                        </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-tight"><span>Suivi et gestion de </span><br /><span className="font-bold text-6xl">PROJETS</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">
                            Nous mettons en place un suivi adapté pour chaque <strong className="font-normal">type de site</strong> et chaque <strong className="font-normal">méthode de référencement</strong>. Notre priorité pour une gestion de projet optimale est un <strong className="font-normal">contact régulier avec notre client</strong> pour faire un point sur le <strong className="font-normal">trafic de son site</strong>, le <strong className="font-normal">contenu intégré</strong> sur chaque page et procéder si besoin à des modifications.
                        <br /><br />
                        De plus, cette veille mensuelle permet de constater l’<strong className="font-normal">évolution du site</strong> dans les <strong className="font-normal">résultats de recherche</strong> et de définir en suivant, les critères à prioriser pour atteindre le haut de la <strong className="font-normal">page de résultat des moteurs</strong>. Ainsi, notre <Link to="/agence-marketing-toulouse/" className="text-bleu hover:text-white font-bold"><strong>agence de marketing à Toulouse</strong></Link> opte pour la transparence et les explications claires. Nous faisons preuve de pédagogie pour aider notre clientèle à constater le travail de création et les avancées concrètes réalisées sur le <strong className="font-normal">site</strong>.</p>
                    </div>
                </section>
                <section className="flex w-full flex-col mx-auto px-0 py-6 my-4 lg:my-0">
                    <section className="text-center text-black text-2xl mx-auto lg:mx-0 century mt-16 mb-10 lg:mb-2">
                        <h2 className="century text-3xl md:text-5xl text-black leading-none">Où nous trouver ?</h2>
                        <br />
                        <hr className="border-solid w-1/6 border-bleu"></hr>
                        <br />
                        <h3 className="text-black text-xl text-center century">Notre relation est basée sur la confiance et la collaboration.</h3>
                    </section>
                </section>
                <section className="w-full flex flex-col md:flex-row mt-10 bg-bleu">
                    <div className="w-full md:w-1/2 bg-bleu flex flex-col justify-center items-center text-center" style={{ minHeight: '700px' }}>
                        <h2 className="text-2xl text-white century pb-6" ><span className="text-black">/</span>L’AGENCE LINKWEB À AGEN</h2>
                        <p className="text-xl text-white century">10 rue Albert Ferrasse <br />
                                    47550 BOÉ</p>
                        <button
                            className="font-light mx-auto roundedButton bg-black hover:bg-bleu text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4"
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://www.google.com/maps/place/Linkweb/@44.1811928,0.6268053,17z/data=!3m1!4b1!4m5!3m4!1s0x12abb323e4e18603:0xb2f1e6fffa7f9cd4!8m2!3d44.181189!4d0.628994', '_blank')
                            }}
                        >Plus d'informations pratiques</button>
                        {/* <a href="https://www.google.com/maps/place/Linkweb/@44.1811928,0.6268053,17z/data=!3m1!4b1!4m5!3m4!1s0x12abb323e4e18603:0xb2f1e6fffa7f9cd4!8m2!3d44.181189!4d0.628994" target="_blank" rel="noopener noreferrer"><RoundButton color="black" text="Plus d'informations pratiques" /></a> */}
                    </div>
                    <div className="w-full md:w-1/2 bg-black flex flex-col justify-center items-center h-auto text-white text-center" style={{ minHeight: '700px' }}>
                        <h2 className="text-2xl century pb-6" ><span className="text-bleu">/</span>L’AGENCE LINKWEB À TOULOUSE</h2>
                        <p className="text-xl century">44 Rue de Bayard <br />
                                    31000 TOULOUSE</p>
                        <button
                            className="font-light mx-auto roundedButton bg-bleu text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4"
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://www.google.com/maps/place/Linkweb/@43.6099559,1.4478881,17z/data=!3m1!4b1!4m5!3m4!1s0x12aebb43d4c8a751:0xb4abc0044173017!8m2!3d43.6099559!4d1.4500768', '_blank')
                            }}
                        >Plus d'informations pratiques</button>
                        {/* <a href="https://www.google.com/maps/place/Linkweb/@43.6099559,1.4478881,17z/data=!3m1!4b1!4m5!3m4!1s0x12aebb43d4c8a751:0xb4abc0044173017!8m2!3d43.6099559!4d1.4500768" target="_blank" rel="noopener noreferrer"><RoundButton text="Plus d'informations pratiques" /></a>  */}
                    </div>
                </section>
                {/*<section className="flex-wrap flex flex-col md:flex-row md:w-full max-w-5xl mx-auto py-2 my-2 ">
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 mb-12 lg:mb-24">
                        <h2 /*data-aos='fade-right' className="text-center text-3xl century">
                            <span className="text-bleu">/</span>AGENCE WEB À AGEN : OÙ NOUS TROUVER ?
                        </h2>
                        <hr className="blue"></hr>
                        <h4 /*data-aos='fade-left' className="text-xl text-grey text-center century italic pb-2">Notre relation est basée sur la confiance et la collaboration : embarquez avec nous !</h4>
                    </section>
                    <section className="flex flex-col md:flex-row md:w-full max-w-7xl mx-auto py-2 mt-0 md:-mt-24 lg:-mt-16">
                        <div className=" font-bold w-full md:w-1/2 px-6 flex justify-center items-center flex-col mt-24 lg:mt-0 text-center" /*data-aos="zoom-in">
                            <h2 className="text-2xl century pb-6" ><span className="text-black">/</span>L’AGENCE LINKWEB À AGEN</h2>
                            <p className="text-xl century">10 rue Albert Ferrasse <br/>
                            47550 BOÉ</p>
                            <a href="https://www.google.com/maps/place/Linkweb/@44.1811928,0.6268053,17z/data=!3m1!4b1!4m5!3m4!1s0x12abb323e4e18603:0xb2f1e6fffa7f9cd4!8m2!3d44.181189!4d0.628994" target="_blank" rel="noopener noreferrer"><RoundButton color="black" text="Plus d'informations pratiques" /></a>
                        </div>
                        <div>
                            <p className="text-bleu mx-12 hidden md:block" style={{fontSize:'350px'}}>/</p>
                        </div>
                        <div className="font-bold w-full md:w-1/2 px-6 flex justify-center items-center flex-col mt-24 lg:mt-0 text-center" /*data-aos="zoom-in" data-aos-delay="200">
                            <h2 className="text-2xl century pb-6" ><span className="text-bleu">/</span>L’AGENCE LINKWEB À TOULOUSE</h2>
                            <p className="text-xl century">44 Rue de Bayard <br/>
                            31000 TOULOUSE</p>
                            <a href="https://www.google.com/maps/place/Linkweb/@43.6099559,1.4478881,17z/data=!3m1!4b1!4m5!3m4!1s0x12aebb43d4c8a751:0xb4abc0044173017!8m2!3d43.6099559!4d1.4500768" target="_blank" rel="noopener noreferrer"><RoundButton text="Plus d'informations pratiques" /></a> 
                        </div>
                    </section>
                         <div className=" font-bold w-full md:w-1/2 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white bg-bleu" /*data-aos="zoom-in">
                            <h2 className="text-2xl century pb-6" ><span className="text-black">/</span>L’AGENCE LINKWEB À AGEN</h2>
                            <p className="text-xl century">10 rue Albert Ferrasse <br/>
                            47550 BOÉ</p>
                            <a href="https://www.google.com/maps/place/Linkweb/@44.1811928,0.6268053,17z/data=!3m1!4b1!4m5!3m4!1s0x12abb323e4e18603:0xb2f1e6fffa7f9cd4!8m2!3d44.181189!4d0.628994" target="_blank" rel="noopener noreferrer"><RoundButton color="black" text="Plus d'informations pratiques" /></a>
                        </div>
                        <div className="font-bold w-full md:w-1/2 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white bg-black" /*data-aos="zoom-in" data-aos-delay="200">
                            <h2 className="text-2xl century pb-6" ><span className="text-bleu">/</span>L’AGENCE LINKWEB À TOULOUSE</h2>
                            <p className="text-xl century">44 Rue de Bayard <br/>
                            31000 TOULOUSE</p>
                            <a href="https://www.google.com/maps/place/Linkweb/@43.6099559,1.4478881,17z/data=!3m1!4b1!4m5!3m4!1s0x12aebb43d4c8a751:0xb4abc0044173017!8m2!3d43.6099559!4d1.4500768" target="_blank" rel="noopener noreferrer"><RoundButton text="Plus d'informations pratiques" /></a> 
                        </div> 

                    </section>  */}

                <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                    <h2 className="century text-center text-xl md:text-2xl tracking-wider pb-3 leading-tight" /*data-aos="zoom-in"*/>
                        <span className="text-bleu">/</span>Quels avantages à développer une stratégie digitale en Haute-Garonne ?
                        </h2>
                    <hr className="blue"></hr>
                    <h4 /*data-aos='fade-left'*/ className="text-lg md:text-xl text-grey text-center century italic px-6 pb-6">Investir dans la création d'un site internet professionnel pour donner de la visibilité à aux prestations de sa société comporte de multiples avantages.</h4>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="OBTENIR DE LA VISIBILITÉ GRÂCE AU SEO">
                                <p>Pour référencer <strong className="font-normal">votre site</strong> grâce au <strong className="font-normal">SEO</strong> (ou <strong className="font-normal">référencement naturel</strong>), notre <Link to="/strategie-digitale-toulouse/" className="text-bleu hover:text-black font-bold">stratégie digitale</Link> s’appuie sur du <strong className="font-normal">contenu rédigé et optimisé</strong> puis intégré de manière intuitive sur chaque interface en ligne. Nos référenceurs vous apportent un positionnement intéressant dans les <strong className="font-normal">résultats des moteurs</strong> grâce à leur travail régulier et leur audit mensuel.
                                    <br /><br />À l’aide de <strong className="font-normal">mots clés</strong> choisis judicieusement à partir d'<strong className="font-normal">outils</strong> performants qui font état de la concurrence, nous mettons tout en oeuvre pour vous apporter une place de choix dans les <strong className="font-normal">SERP</strong>.
                                    <br /><br />Si la priorité pour votre site est de <strong className="font-normal">générer un retour sur investissement</strong> rapidement, <Link to="/agence-web-ramonville/" className="text-bleu hover:text-black font-bold">agence web à Ramonville</Link> propose l’emploi de <strong className="font-normal">Google Ads</strong>. Utiliser un emplacement de publicité en tête des <strong className="font-normal">requêtes sur Google</strong> est aussi une solution.</p>
                            </div>
                            <div label="MAÎTRISER SA COMMUNICATION ENVERS SES CIBLES">
                                <p>Être plus <strong className="font-normal">visible sur Internet grâce à la <Link to="/creation-de-site-internet-a-agen/" className="text-bleu hover:text-blakc font-bold">création de site internet à Agen</Link></strong> offre une facilité dans la transmission des informations vers son public cible. De ce fait, l’<strong className="font-normal">utilisateur</strong> bénéficie d’un accès simplifié à l'information qu’il recherche sur votre <strong className="font-normal">site</strong> : tout ceci est favorisé par la notion du besoin et de l’<strong className="font-normal">intention de l’utilisateur</strong> dès le moment de la <strong className="font-normal">création du site</strong>. Pour la mise en place de ces éléments, nos équipes s’appuient sur un <strong className="font-normal">webdesign intuitif et ergonomique</strong>, ainsi que le respect de votre <strong className="font-normal">identité visuelle</strong> et de votre <strong className="font-normal">charte graphique</strong> sur-mesure pour un résultat unique. À cela, s'ajoutent des <strong className="font-normal">contenus</strong> rédigés de façon optimisée et pertinents, le <strong className="font-normal">responsive design</strong>, le travail de <strong className="font-normal">maillage interne</strong> et la rapidité de chargement par exemple.
                                    <br /><br />
                                    Toutes ces données sont traitées par notre <Link to="/" className="text-bleu hover:text-black font-bold">agence web à Agen</Link> pour aboutir à une solution complète et assurer une <strong className="font-normal">expérience utilisateur</strong> parfaite.
                                        </p>
                            </div>
                            <div label="DÉVELOPPER SON CHIFFRE D'AFFAIRES">
                                <p>Chaque site créé possède des spécificités : pour de la <strong className="font-normal">vente de produits sur Internet</strong>, nos consultants produisent un <strong className="font-normal">site e-commerce</strong>. Le <strong className="font-normal">site vitrine</strong> sera plus efficace mettre en valeurs vos services et communiquer les coordonnées de votre société à au potentiel <strong className="font-normal">prospect</strong>. Nous mettons à votre disposition tous les <strong className="font-normal">outils</strong> pour garantir à votre entreprise l’exploitation de tout le <strong className="font-normal">potentiel de son marché sur Internet</strong>. Notre objectif est de vous permettre d’obtenir un <strong className="font-normal">trafic de qualité</strong> et une fréquentation constamment en progression pour un résultat optimal. En termes de <strong className="font-normal">webmarketing</strong>, le <strong className="font-normal">site internet</strong> s’intègre dans les <strong className="font-normal">leviers de communication</strong> les plus influents.
                                <br /><br />
                                        Notre <strong className="font-normal"><Link to="/agence-web-design-toulouse/" className="text-bleu hover:text-black font-bold">agence de web design à Toulouse</Link></strong> privilégie la <strong className="font-normal">création d'un site</strong> soigné et de qualité. Nous n’avons qu’un seul but : vous aider à atteindre des cibles de clientèles toujours plus intéressantes en vue d'<strong className="font-normal">augementer votre chiffre d’affaires</strong>.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="w-full flex mt-12 flex-col items-center lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence</span> en Haute-Garonne ?</h3>
                        <h4>Nous soutenons les professionnels soucieux de déployer leur présence sur le net.</h4>
                    </div>
                    <div className="w-full mx-auto block lg:w-3/12">
                        {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
                        <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" />
                    </div>
                </section>
                {/* <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" /*data-aos="zoom-in">
                            <span className="text-bleu">/</span>Les dernières actualités
                        </h3>
                        <hr className="blue"></hr>
                        <LastPosts lastposts={this.props.data.allWpPost.edges} />
                        <Link className="bg-bleu text-white px-16 py-3 block mx-auto hover:bg-black font-normal" to="/actualite-digitale/">Voir l'actualité digitale</Link>
                        <br/>
                    </section> */}
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsAgenceHauteGaronne {
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
export default AgenceWebHauteGaronne;




