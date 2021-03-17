import React from "react";
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
import imac from "../images/redaction.jpg";
// import bgDev from '../images/bg-dev.jpg';
import bgDev from '../images/cta-background-agence-web.jpg';
import stars from '../images/stars.png';
import bureau from '../images/bureau2-min.jpg';

import web from '../images/web.svg';
import laptop from '../images/laptop.svg';
import bullhorn from '../images/bullhorn.svg';


class AgenceWebMarmande extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Web Marmande - Projets Web sur-mesure - Linkweb"
                    description="L'agence web Linkweb à Marmande vous accompagne dans le développements de vos projets web sur-mesure : création de site internet, référencement SEO, campagnes sponsorisées Ads."
                    keywords={[`Agence Web Marmande`, `Agence Web Agen`, `Agence digitale Agen`, `Agence digitale Marmande`]}
                    url="https://linkweb.fr/agence-web-marmande/"
                    nom="Agence Web Marmande"
                    slug="agence-web-marmande/"
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
                    <section className="w-full bloctitrescreen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ background: 'rgba(0,0,0,.65) url(' + Bg + ')', backgroundPosition:'center', backgroundSize:'cover', backgroundBlendMode:'multiply' }}>
                        <h1 /*data-aos="fade-up" data-aos-delay="500"*/ className="century text-4xl sm:text-6xl text-center text-white">
                            Agence web Marmande
                        </h1>
                        <h3 className="italic text-center text-lg sm:text-2xl text-white mt-3">Pour vous rapprocher de l’essentiel, faites le choix du savoir-faire et de l’expérience.</h3>
                        {/* <RoundButton url="/contact-agence-web-toulouse/" text="Je veux developper ma communication en ligne" /> */}
                        <button
                                        className="font-light roundedButton bg-bleu text-white hover:text-white flex justify-center mt-3 century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 mt-12"                    
                                        type="button"
                                        onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/contact-agence-web-toulouse/';
                                        }}
                                    >
                                    Je veux developper ma communication en ligne
                            </button>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <h2 className="text-center text-lg sm:text-2xl text-black century mt-3">Linkweb est l'<Link to="/agence-web-cahors/" className="font-bold text-bleu hover:text-black">agence web</Link> qui vous accompagne dans la conception, la mise en oeuvre et le suivi de votre projet web ainsi que de votre communication digitale.</h2>
                        <br/>
                        <hr style={{borderTop:'1px solid #37cfee', width:'33%'}}/>
                        <br/>
                    </section>
                    <section className="flex flex-col lg:flex-row mx-8 lg:mx-24 my-0 items-center lg:justify-center">
                        <div data-aos="fade-in" className=" w-full lg:w-3/12 md:w-1/2 bg-white my-4 border border-darkgrey mx-10 hover:shadow-xl py-6 century" style={{ borderRadius: '15px', borderColor: '#d4d4d4', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
                        <svg width="40px" className="cursor-pointer mx-auto block" viewBox="12.938 70.193 487.061 465.68874999999997"><g><path fill="#37cfee" d="M499.811,74.173c-0.011-2.202-1.799-3.98-4-3.98H135.94c-2.209,0-3.999,1.791-3.999,4v70.337   c0,0.003-0.001,0.006-0.001,0.01s0.001,0.006,0.001,0.01v72.281c-1.976-0.103-3.965-0.157-5.967-0.157   c-33.125,0-62.967,14.323-83.661,37.1c-0.173,0.162-0.328,0.34-0.471,0.53c-17.961,20.019-28.905,46.456-28.905,75.405   c0,28.943,10.939,55.375,28.893,75.392c0.146,0.197,0.307,0.38,0.485,0.547c20.693,22.775,50.534,37.096,83.657,37.096   c33.116,0,62.953-14.3,83.655-37.047c0.249-0.224,0.478-0.468,0.664-0.747c6.789-7.592,12.568-16.102,17.127-25.32h268.579   c2.209,0,4-1.791,4-4V112.869L499.811,74.173z M491.83,78.193l0.169,34.695v27.652H139.94l0-62.347H491.83z M230.826,336.737   c-0.027,0.404-0.05,0.809-0.081,1.212c-0.044,0.567-0.098,1.131-0.151,1.695c-0.031,0.331-0.06,0.663-0.094,0.994   c-0.063,0.611-0.136,1.219-0.21,1.827c-0.034,0.278-0.066,0.556-0.101,0.833c-0.084,0.65-0.177,1.297-0.273,1.943   c-0.034,0.227-0.067,0.454-0.102,0.68c-0.107,0.687-0.221,1.371-0.341,2.053c-0.031,0.177-0.062,0.354-0.094,0.531   c-0.132,0.727-0.271,1.451-0.418,2.173c-0.024,0.117-0.048,0.234-0.072,0.35c-0.162,0.783-0.331,1.563-0.511,2.339   c-0.006,0.026-0.012,0.053-0.019,0.079c-3.957,17.051-12.082,32.522-23.237,45.283h-47.846c4.839-19.064,7.468-42.21,7.744-65.022   h65.963c-0.019,0.508-0.035,1.017-0.061,1.525C230.896,335.736,230.859,336.236,230.826,336.737z M46.868,260.688h47.897   c-4.825,19.064-7.445,42.209-7.72,65.021H21.022C21.957,300.876,31.549,278.222,46.868,260.688z M165.02,325.709   c-0.276-22.812-2.904-45.957-7.743-65.021h47.846c15.327,17.534,24.925,40.188,25.86,65.021H165.02z M95.044,325.709   c0.294-25.694,3.406-47.972,7.998-65.021h45.952c4.609,17.05,7.732,39.328,8.028,65.021H95.044z M157.021,333.709   c-0.295,25.694-3.419,47.972-8.028,65.022h-45.952c-4.592-17.05-7.704-39.328-7.998-65.022H157.021z M155.041,252.688   c-3.425-11.13-7.709-20.404-12.812-26.756c21.094,3.287,40.126,12.87,55.117,26.756H155.041z M146.599,252.688h-41.171   c5.853-17.727,13.399-28.014,20.547-28.014C133.149,224.674,140.724,234.96,146.599,252.688z M96.994,252.688H54.64   c14.993-13.896,34.032-23.483,55.133-26.764C104.683,232.276,100.41,241.553,96.994,252.688z M87.045,333.709   c0.275,22.813,2.896,45.958,7.72,65.022H46.869c-15.319-17.535-24.912-40.189-25.847-65.022H87.045z M96.994,406.731   c3.416,11.134,7.689,20.411,12.779,26.763c-21.1-3.281-40.139-12.867-55.132-26.763H96.994z M105.427,406.731h41.171   c-5.875,17.727-13.449,28.013-20.624,28.013C118.826,434.744,111.28,424.458,105.427,406.731z M155.041,406.731h42.304   c-14.99,13.885-34.023,23.468-55.116,26.755C147.332,427.135,151.616,417.861,155.041,406.731z M231.04,371.63   c2.484-6.252,4.388-12.648,5.722-19.156c0.002-0.009,0.004-0.019,0.006-0.029c0.18-0.88,0.35-1.762,0.508-2.646   c0.013-0.072,0.026-0.143,0.038-0.215c0.147-0.825,0.284-1.652,0.412-2.481c0.019-0.122,0.038-0.244,0.057-0.367   c0.118-0.78,0.227-1.561,0.329-2.343c0.022-0.168,0.044-0.335,0.066-0.503c0.093-0.739,0.177-1.48,0.255-2.222   c0.022-0.207,0.045-0.414,0.066-0.621c0.07-0.705,0.132-1.411,0.189-2.118c0.02-0.242,0.042-0.483,0.06-0.725   c0.051-0.683,0.092-1.368,0.131-2.053c0.015-0.261,0.033-0.522,0.046-0.783c0.034-0.69,0.057-1.381,0.079-2.072   c0.008-0.255,0.021-0.509,0.027-0.765c0.023-0.939,0.036-1.88,0.036-2.822c0-0.93-0.013-1.858-0.035-2.786   c-0.008-0.334-0.024-0.665-0.035-0.998c-0.02-0.591-0.039-1.183-0.068-1.773c-0.019-0.396-0.046-0.791-0.069-1.186   c-0.031-0.524-0.062-1.047-0.1-1.57c-0.031-0.42-0.067-0.838-0.103-1.257c-0.042-0.498-0.085-0.995-0.133-1.492   c-0.041-0.423-0.087-0.844-0.133-1.265c-0.054-0.496-0.11-0.992-0.171-1.487c-0.05-0.408-0.103-0.815-0.157-1.222   c-0.069-0.517-0.141-1.034-0.218-1.549c-0.055-0.374-0.112-0.747-0.171-1.12c-0.089-0.565-0.184-1.13-0.281-1.693   c-0.055-0.315-0.109-0.63-0.166-0.943c-0.119-0.655-0.246-1.307-0.376-1.959c-0.043-0.216-0.085-0.433-0.13-0.648   c-0.169-0.817-0.347-1.632-0.534-2.444c-0.01-0.045-0.02-0.09-0.03-0.135c-4.36-18.872-13.53-36.405-26.868-50.92   c-14.275-15.535-32.39-26.606-52.326-32.273c-0.042-0.012-0.083-0.024-0.125-0.036c-1.646-0.466-3.303-0.895-4.973-1.286   c-0.171-0.04-0.341-0.082-0.512-0.122c-2.592-0.595-5.21-1.1-7.852-1.512c-0.49-0.076-0.982-0.145-1.473-0.215   c-0.696-0.099-1.388-0.218-2.088-0.305l0-68.973h352.059v223.09H231.04z" /><path fill="#37cfee" d="M185.225,124.736c8.491,0,15.399-6.908,15.399-15.398c0-8.459-6.908-15.341-15.399-15.341   c-8.459,0-15.341,6.882-15.341,15.341C169.884,117.828,176.766,124.736,185.225,124.736z M185.225,101.997   c4.08,0,7.399,3.293,7.399,7.341c0,4.079-3.319,7.398-7.399,7.398c-4.048,0-7.341-3.319-7.341-7.398   C177.884,105.222,181.108,101.997,185.225,101.997z" /><path fill="#37cfee" d="M261.857,124.736c8.494,0,15.405-6.908,15.405-15.398c0-8.459-6.911-15.341-15.405-15.341   c-8.491,0-15.399,6.882-15.399,15.341C246.458,117.828,253.366,124.736,261.857,124.736z M261.857,101.997   c4.083,0,7.405,3.293,7.405,7.341c0,4.079-3.322,7.398-7.405,7.398c-4.08,0-7.399-3.319-7.399-7.398   C254.458,105.29,257.777,101.997,261.857,101.997z" /><path fill="#37cfee" d="M338.496,124.736c8.456,0,15.335-6.908,15.335-15.398c0-8.459-6.879-15.341-15.335-15.341   c-8.494,0-15.405,6.882-15.405,15.341C323.091,117.828,330.002,124.736,338.496,124.736z M338.496,101.997   c4.113,0,7.335,3.225,7.335,7.341c0,4.079-3.29,7.398-7.335,7.398c-4.083,0-7.405-3.319-7.405-7.398   C331.091,105.29,334.413,101.997,338.496,101.997z" /><path fill="#37cfee" d="M419.925,194.432H259.551c-2.209,0-4,1.791-4,4s1.791,4,4,4h160.374c2.209,0,4-1.791,4-4S422.134,194.432,419.925,194.432z   " /><path fill="#37cfee" d="M419.925,261.972H272.699c-2.209,0-4,1.791-4,4s1.791,4,4,4h147.226c2.209,0,4-1.791,4-4S422.134,261.972,419.925,261.972z   " /><path fill="#37cfee" d="M419.925,329.448H319.612c-2.209,0-4,1.791-4,4s1.791,4,4,4h100.313c2.209,0,4-1.791,4-4S422.134,329.448,419.925,329.448z   " /></g></svg>
                        <h3 className="text-center text-2xl font-bold century">Création de site internet</h3>
                        <hr className="blue"></hr>
                        <p className="text-center px-6 text-md">Site internet <strong>vitrine</strong>, <strong>e-commerce</strong> ou <strong>administrable</strong>, Linkweb crée votre site internet à Marmande.</p>
                        <br />
                        <ul className="text-bold text-center py-2">
                            <li className="py-2 flex flex-row justify-center">
                            <div className="w-3/12 text-center text-bleu">✔</div>
                            <div className="w-9/12 text-left">Design ergonomique sur-mesure</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                            <div className="w-3/12 text-center text-bleu">✔</div>
                            <div className="w-9/12 text-left">Site adapté tous supports</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                            <div className="w-3/12 text-center text-bleu">✔</div>
                            <div className="w-9/12 text-left">Hébergement et nom de domaine</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                            <div className="w-3/12 text-center text-bleu">✔</div>
                            <div className="w-9/12 text-left">Navigation sécurisée (protocole HTTPS)</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                            <div className="w-3/12 text-center text-bleu">✔</div>
                            <div className="w-9/12 text-left">Conformité RGPD</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                            <div className="w-3/12 text-center text-bleu">✔</div>
                            <div className="w-9/12 text-left">Mise à jour technique</div>
                            </li>

                        </ul>
                        <div className="w-1/2 mx-auto block">
                            <br />
                            <button
                                    className="w-full font-normal roundedButton bg-darkgrey text-white flex justify-center items-center text-xs md:text-sm px-3 lg:px-4 py-4"                    
                                    type="button"
                                    onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='/creation-site-internet-toulouse/';
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
                        <p className="text-center px-6">Nous définissons et appliquons une stratégie de référencement web adaptée à vos besoins et à la concurrence.</p>
                        <br />
                        <ul className="text-bold text-center py-2">
                            <li className="py-2 flex flex-row justify-center">
                            <div className="w-3/12 text-center text-bleu">✔</div>
                            <div className="w-9/12 text-left">Choix des mots-clés</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                            <div className="w-3/12 text-center text-bleu">✔</div>
                            <div className="w-9/12 text-left">Optimisation on-site</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                            <div className="w-3/12 text-center text-bleu">✔</div>
                            <div className="w-9/12 text-left">Rédaction Web SEO</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                            <div className="w-3/12 text-center text-bleu">✔</div>
                            <div className="w-9/12 text-left">Netlinking</div>
                            </li>
                            <li className="py-2 flex flex-row justify-center">
                            <div className="w-3/12 text-center text-bleu">✔</div>
                            <div className="w-9/12 text-left">Accompagnement personnalisé</div>
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
                                    window.location.href='/referencement-toulouse/';
                                    }}
                                > Obtenir de la visibilité
                                </button>
                            {/* <ButtonBlog url="/referencement-toulouse/" text="Obtenir de la visibilité" color="darkgrey" /> */}
                        </div>
                        </div>
                        <div data-aos="fade-in" data-aos-delay="700" className=" w-full md:w-1/2 lg:w-3/12 bg-white my-12 border border-grey mx-8 hover:shadow-xl py-6 century" style={{ borderRadius: '15px', borderColor: '#d4d4d4', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
                        <svg width="40px" className="cursor-pointer mx-auto block" viewBox="0 0 280 350" x="0px" y="0px"><defs></defs><g><path fill="#37cfee" className="fil0" d="M84.998 219.434c-0.016,-0.076 -0.03,-0.153 -0.042,-0.23l-0.018 -0.098c-0.397,-2.118 0.634,-4.173 2.412,-5.174l40.349 -41.05 -24.108 -24.84 -40.292 40.292c-0.77,2.316 -3.162,3.75 -5.618,3.261l-0.384 -0.074c-0.112,-0.017 -0.223,-0.037 -0.334,-0.061 -5.385,-0.96 -10.952,-0.645 -16.214,0.946 -5.289,1.598 -10.275,4.492 -14.461,8.678 -4.124,4.124 -6.992,9.014 -8.604,14.199 -0.62,1.992 -1.056,4.029 -1.309,6.082l15.097 -15.097 0.01 0.01c1.329,-1.327 3.365,-1.825 5.229,-1.104l23.4 9.044c1.337,0.471 2.459,1.515 2.98,2.952l8.104 22.322c0.815,1.808 0.481,4.008 -1.005,5.494l-15.097 15.097c2.054,-0.254 4.09,-0.69 6.082,-1.309 5.185,-1.612 10.075,-4.48 14.199,-8.604 4.156,-4.156 7.036,-9.08 8.64,-14.293 1.639,-5.327 1.967,-10.977 0.984,-16.443zm128.991 -18.803l-142.787 -147.114 -13.131 12.77 142.788 147.114 13.13 -12.77zm-138.498 -151.285l142.787 147.114 9.456 -9.196 -83.481 -86.016c-0.149,-0.118 -0.293,-0.246 -0.431,-0.383 -0.174,-0.175 -0.332,-0.358 -0.475,-0.55l-58.396 -60.17 -9.46 9.201zm121.078 168.226l-142.787 -147.114 -8.823 8.581 142.783 147.119 8.827 -8.586zm38.45 33.987l16.736 -16.248 -20.677 -42.935 -38.336 37.267 42.277 21.916zm23.156 -16.7l15.282 36.651c0.634,1.528 -0.09,3.28 -1.617,3.914 -0.868,0.36 -1.808,0.282 -2.575,-0.133l-34.86 -17.319c-0.069,-0.03 -0.137,-0.062 -0.204,-0.096l-47.891 -24.826c-0.331,-0.17 -0.617,-0.394 -0.852,-0.655l-50.933 -52.479 -39.513 40.199c0.774,6.226 0.229,12.591 -1.632,18.641 -2.073,6.735 -5.76,13.062 -11.059,18.361 -5.272,5.272 -11.551,8.946 -18.229,11.023 -6.909,2.147 -14.246,2.57 -21.336,1.267 -2.66,-0.487 -4.422,-3.039 -3.935,-5.699 0.187,-1.017 0.674,-1.902 1.355,-2.58l-0.011 -0.011 20.877 -20.878 -6.403 -17.636 -18.469 -7.139 -20.829 20.829c-1.919,1.919 -5.029,1.919 -6.948,0 -0.836,-0.836 -1.308,-1.901 -1.415,-2.993 -1.213,-6.965 -0.767,-14.156 1.34,-20.934 2.077,-6.679 5.751,-12.958 11.023,-18.229 5.367,-5.368 11.769,-9.08 18.567,-11.135 5.974,-1.806 12.252,-2.33 18.401,-1.571l40.439 -40.44 -58.161 -59.927 -0.049 -0.053 -0.044 -0.043 -18.217 -18.73c-3.419,-3.523 -5.087,-8.117 -5.021,-12.682 0.066,-4.576 1.866,-9.125 5.383,-12.546l22.99 -22.311c3.527,-3.423 8.131,-5.094 12.706,-5.028 4.585,0.066 9.144,1.869 12.57,5.39l18.205 18.718 0.027 0.029 0.02 0.019 57.504 59.251 38.738 -38.737c-0.8,-6.487 -0.17,-13.122 1.891,-19.394 2.116,-6.439 5.721,-12.481 10.813,-17.573 5.271,-5.271 11.551,-8.945 18.23,-11.022 6.777,-2.108 13.968,-2.554 20.933,-1.34 1.093,0.107 2.157,0.578 2.993,1.415 1.919,1.918 1.919,5.029 0,6.947l-20.828 20.829 7.139 18.47 17.636 6.403 20.877 -20.878 0.011 0.011c0.678,-0.68 1.563,-1.168 2.58,-1.354 2.66,-0.488 5.212,1.274 5.7,3.934 1.302,7.09 0.879,14.428 -1.268,21.336 -2.077,6.679 -5.751,12.958 -11.023,18.229 -5.543,5.544 -12.194,9.321 -19.249,11.332 -6.397,1.823 -13.124,2.186 -19.655,1.088l-38.147 38.809 52.075 53.656 0.01 0.011c0.231,0.237 0.414,0.503 0.55,0.785l23.361 48.506c0.055,0.103 0.104,0.21 0.147,0.318zm-17.484 19.553l24.152 11.999 -10.525 -25.246 -13.627 13.247zm-89.186 -154.283l23.701 24.421 39.649 -40.337c1.156,-1.317 2.981,-1.972 4.806,-1.546 5.753,1.343 11.786,1.202 17.486,-0.423 5.482,-1.562 10.66,-4.508 14.989,-8.837 4.124,-4.124 6.992,-9.014 8.604,-14.199 0.62,-1.992 1.056,-4.028 1.309,-6.081l-15.096 15.097c-1.486,1.485 -3.686,1.82 -5.494,1.005l-22.323 -8.105c-1.436,-0.52 -2.481,-1.643 -2.952,-2.98l-9.044 -23.399c-0.721,-1.865 -0.223,-3.9 1.105,-5.229l-0.011 -0.011 15.097 -15.096c-2.053,0.253 -4.089,0.689 -6.081,1.309 -5.186,1.612 -10.076,4.48 -14.2,8.604 -3.986,3.986 -6.797,8.68 -8.433,13.658 -1.707,5.196 -2.155,10.722 -1.344,16.099 0.027,0.177 0.043,0.354 0.051,0.529 0.518,1.684 0.111,3.591 -1.221,4.923l-40.598 40.598zm-110.806 -25.475l40.034 -38.851 -16.117 -16.57c-2.279,-2.343 -5.308,-3.542 -8.351,-3.585 -3.054,-0.044 -6.121,1.066 -8.465,3.34l-22.99 22.311c-2.337,2.273 -3.534,5.293 -3.578,8.327 -0.044,3.044 1.064,6.102 3.333,8.44l16.134 16.588z" /></g></svg>
                        <h3 className="text-center text-2xl font-bold century">Solution sur-mesure</h3>
                        <hr className="blue"></hr>
                        <p className="text-center px-6">Linkweb est à votre écoute pour la définition de votre projet sur-mesure en fonction de vos besoins.</p>
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
                                    window.location.href='/contact-agence-web-toulouse/';
                                    }}
                                > Définir votre projet
                                </button>
                            {/* <ButtonBlog url="/contact-agence-web-toulouse/" text="Définir votre projet" color="darkgrey" /> */}
                        </div>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                            Notre agence est taillée pour <span className="text-bleu">votre projet web</span>
                        </h2>
                        <hr className="blue"></hr>
                        <div className="w-full" /*data-aos='zoom-in'*/>
                            <p className="text-md text-center py-12 century">
                                Vous êtes un organisme public ou privé à la recherche d’une <strong>agence web à Marmande</strong> pour la mise en place d’une stratégie digitale ? <strong><Link to="/quelle-agence-web-choisir/" className="text-bleu hover:text-black font-bold">Linkweb</Link></strong> est à l’écoute de vos besoins pour vos proposer une solution taillée pour vous.</p>
                        </div>
                    </section>
                    <section className="w-full flex flex-1 mt-6 equipe min-h-0 lg:min-h-600">
                        <div className="w-1/4 bg-cover  imageDouble"  >
                        </div>
                        <div className="w-3/4 ">
                        <div className="content">
                            <h3 className="century capitalize text-2xl tracking-wider pb-3" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>LINKWEB C’EST 20 TECHNICIENS
                            </h3>
                            <p /*data-aos='fade-left'*/><span className="text-bleu text-4xl">8</span>  développeurs Front-End & Back-End</p>
                            <p /*data-aos='fade-left'*/><span className="text-bleu text-4xl">3</span>  spécialistes UI & <strong>UX design</strong> et professionnels du <strong>développement web</strong></p>
                            <p /*data-aos='fade-left'*/><span className="text-bleu text-4xl">6</span>  professionnels du <strong>référencement web</strong> SEO & SEA pour l'optimisation des <strong>pages</strong> web.</p> 
                            <p /*data-aos='fade-left'*/><span className="text-bleu text-4xl">3</span>  rédacteurs web spécialisés dans la rédaction et la <strong>gestion de contenu</strong> optimisé</p>
                        </div>
                        <div className="pictures w-full flex-1 sm:hidden lg:flex xl:flex">
                            <div className="w-1/3 bg-cover bg-black imageSimple "></div>
                            <div className="w-1/3 bg-cover bg-white imageSimple "></div>
                            <div className="w-1/3 bg-cover bg-bleu imageSimple "></div>
                        </div>
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
                                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                    Mairie, conseil départemental, établissement culturel : informer les administrés est votre priorité ? Notre <strong>agence de création</strong> vous propose des solutions pour y parvenir. Mettez tous les atouts de votre côté pour mener votre campagne de <strong>communication web</strong>.
                                </div>
                                {/* <Button url="/contact-agence-web-toulouse/" text="En savoir plus" position="center" /> */}
                                <button
                                        className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"                    
                                        type="button"
                                        onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/contact-agence-web-toulouse/';
                                        }}
                                    ><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> En savoir plus
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
                                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                TPE, PME, commerçants, l’<strong>agence web Linkweb</strong> répond à vos besoins de <strong>visibilité</strong> et de <strong>notoriété</strong> grâce à la mise en place de <strong>stratégies digitales</strong> efficaces et qui vous rapprochent de vos prospects. Nous activons tous les leviers pour développer et faire connaître votre <strong>outil en ligne</strong>.
                                </div>
                                {/* <Button url="/contact-agence-web-toulouse/" text="Être recontacté" position="center" /> */}
                                <button
                                        className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"                    
                                        type="button"
                                        onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/contact-agence-web-toulouse/';
                                        }}
                                    ><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> Être recontacté
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
                                        window.location.href='/creation-site-internet-toulouse/';
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
                                        window.location.href='/referencement-toulouse/';
                                        }}
                                    >
                                    
                                Je souhaite améliorer la visibilité de mon site existant
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
                    <section className="flex w-full flex-col lg:flex-row mx-auto px-0 py-6 my-4">
                        <div className="w-full lg:w-1/2 ">
                            <img src={imac} alt="Agence Web Marmande" />
                        </div>
                        <div className="w-full lg:w-1/2 max-w-3xl px-12 py-12" >
                            <h2 className="century capitalize text-2xl tracking-wider pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">/</span>AGENCE WEB À MARMANDE : NOTRE CRÉATIVITÉ AU SERVICE DE VOTRE EFFICACITÉ
                            </h2>
                            <h4 className="century text-lg tracking-wider pb-6 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">Notre vocation : développer votre projet web pour faire émerger votre professionnalisme et apporter à votre entreprise la visibilité qu’elle mérite.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify">
                                Depuis plus de 10 ans, notre expérience dans la <strong>création de sites internet</strong> nous a permis de développer nos compétences<strong> en tant qu'agence de conseil en communication</strong> pour d’envisager les <strong>projets web</strong> comme des solutions uniques répondant aux besoins de chaque <strong>client</strong>.<br /><br/>

                                Présente à <strong>Marmande</strong> en <strong>Lot-et-Garonne (47)</strong>, l’<strong>agence web Linkweb</strong> développe sa filiale <strong>toulousaine</strong>. Spécialisée dans le secteur des <strong>marchés publics</strong> comme dans les <strong>marchés privés</strong>, notre <strong>agence de communication web</strong> est particulièrement active pour répondre aux demandes émanant de tous types d’organismes en faisant du <strong>marketing digital</strong>, un atout considérable. <strong>Linkweb</strong> déploie son offre de <strong>création de site web</strong>, <strong>refonte de site internet</strong> et de <strong>référencement web</strong> à <strong>Marmande</strong> et ses alentours.<br /><br/>

                                De part son savoir-faire en tant qu’<strong>agence digitale</strong>, Linkweb met en place votre <strong>site internet</strong> grâce à des solutions de <strong>développement web</strong> récentes et optimise votre <strong>référencement naturel</strong> grâce à une veille permanente en <strong>web marketing</strong>. Quelle que soit la nature de votre activité, nous avons le savoir-faire  et les <strong>expertises</strong> pour vous permettre d’atteindre vos objectifs.<br />
                            </p>
                            
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
                    <section className=" w-full lg:h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bgDev + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h2 /*data-aos='fade-right'*/ className="text-center text-white text-2xl md:text-4xl century">
                                <span className="text-bleu">/</span>Alors, convaincu ? Vous souhaitez être contacté ?


                            </h2>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center my-12">
                            {/* <RappelForm /> */}
                            {/* <RoundButton url="/contact-agence-web-toulouse/" text="Je veux developper ma communication en ligne" /> */}
                            <button
                                        className="font-light roundedButton bg-bleu text-white hover:text-white flex justify-center mt-3 century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 mt-12"                    
                                        type="button"
                                        onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/contact-agence-web-toulouse/';
                                        }}
                                    >
                                    
                                    Je veux developper ma communication en ligne
                            </button>
                        </div>

                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start text-center my-12">
                            <div className="w-full my-6 sm:w-1/3 px-6 sm:px-12 flex flex-col items-center justify-center" /*data-aos='zoom-in' data-aos-delay="200"*/>
                                <img src={laptop} alt="Agence Web Agen" width="80px" />
                                <p className="text-xl text-white century pt-3">CRÉATION SITE INTERNET</p>
                            </div>
                            <div className="w-full my-6 sm:w-1/3 px-6 sm:px-12 flex flex-col items-center justify-center" /*data-aos='zoom-in' data-aos-delay="400"*/>

                                <img src={web} alt="Agence Web Marmande" width="80px" />
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT NATUREL</p>
                            </div>
                            <div className="w-full my-6 sm:w-1/3 px-6 sm:px-12 flex flex-col items-center justify-center" /*data-aos='zoom-in' data-aos-delay="600"*/>
                                <img src={bullhorn} alt="Agence Web Marmande" width="80px" />
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT GOOGLE ADS</p>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 lg:pt-2 pb-0 my-2">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-3xl century">
                            <span className="text-bleu">/</span>AGENCE WEB À MARMANDE : QUI SOMMES-NOUS ?
                        </h2>
                        <hr className="blue"></hr>
                        <h3 /*data-aos="fade-in"*/ className="text-center font-normal italic century text-sm">Agence Web Marmande</h3>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-0 pb-0 my-2">
                        <ul className="mt-6 pl-1 sm:pl-6">
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792"><path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>&nbsp;
                                <p>Une équipe de <strong>développeurs web</strong> qualifiés pour la mise en place de votre <strong>site internet</strong>.</p>
                            </li>
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792"><path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>&nbsp;
                                <p>Des <strong>consultants SEO</strong> pour vous apporter de la <strong>visibilité sur Google</strong>.</p>
                            </li>
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792"><path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>&nbsp;
                                <p>Un suivi technique et statistique pour opter pour la bonne stratégie et les meilleures <strong>solutions digitales</strong>.</p>
                            </li>
                            <li className="operatoire flex justify-start items-center pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1792"><path fill="#37c5ee" d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>&nbsp;
                               <p>Un contact régulier pour connaître votre ressenti et être force de proposition.</p>
                            </li>
                        </ul>
                        <div className="w-full flex flex-col sm:flex-row text-center my-12">
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center my-6" /*data-aos='zoom-in' data-aos-delay="400"*/>
                                <svg width="60px" height="60px" viewBox="-32 0 480 480.23349" >
                                    <g>
                                        <path d="m208.117188             96c-97.203126 0-176 78.796875-176 176s78.796874 176 176 176c97.203124 0 176-78.796875 176-176-.109376-97.15625-78.84375-175.890625-176-176zm0 336c-88.367188 0-160-71.632812-160-160s71.632812-160 160-160c88.363281 0 160 71.632812 160 160-.101563 88.324219-71.675782 159.898438-160 160zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/>
                                        <path d="m371.085938 142.984375 12.367187-12.367187c3.121094-3.125 3.121094-8.1875 0-11.3125l-22.640625-22.640626c-3.125-3.125-8.1875-3.125-11.3125 0l-12.367188 12.367188c-30.246093-24.054688-66.625-39.164062-105.015624-43.605469v-17.425781h8c8.835937 0 16-7.164062 16-16v-16c0-8.835938-7.164063-16-16-16h-64c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h8v17.425781c-38.390626 4.441407-74.769532 19.550781-105.015626 43.605469l-12.367187-12.367188c-3.125-3.125-8.191406-3.125-11.3125 0l-22.640625 22.640626c-3.125 3.125-3.125 8.1875 0 11.3125l12.367188 12.367187c-67.546876 85.167969-58.121094 207.984375 21.628906 281.851563 79.75 73.863281 202.929687 73.863281 282.679687 0 79.75-73.867188 89.175781-196.683594 21.628907-281.851563zm-15.929688-29.382813 11.359375 11.359376-5.832031 5.832031c-3.625-3.921875-7.402344-7.695313-11.328125-11.328125zm-179.039062-97.601562h64v16h-64zm24 32h16v16.199219c-2.65625-.09375-5.320313-.199219-8-.199219-2.679688 0-5.34375.105469-8 .199219zm-150.402344 76.960938 11.363281-11.359376 5.832031 5.832032c-3.921875 3.621094-7.699218 7.394531-11.328125 11.328125zm158.402344 339.039062c-106.039063 0-192-85.960938-192-192s85.960937-192 192-192c106.039062 0 192 85.960938 192 192-.125 105.988281-86.011719 191.875-192 192zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/>
                                        <path d="m232.117188 272c0-13.253906-10.746094-24-24-24-13.253907 0-24 10.746094-24 24s10.746093 24 24 24c3.5625-.015625 7.078124-.835938 10.28125-2.398438l48.0625 48.0625 11.3125-11.3125-48.058594-48.070312c1.566406-3.203125 2.386718-6.71875 2.402344-10.28125zm-32 0c0-4.417969 3.582031-8 8-8 4.417968 0 8 3.582031 8 8s-3.582032 8-8 8c-4.417969 0-8-3.582031-8-8zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/>
                                        <path d="m242.246094 148.601562-4.257813 15.398438c31.285157 8.679688 57.269531 30.496094 71.230469 59.804688 13.964844 29.308593 14.539062 63.230468 1.570312 92.996093l14.664063 6.398438c7.066406-16.140625 10.699219-33.578125 10.664063-51.199219-.09375-57.523438-38.460938-107.957031-93.871094-123.398438zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/>
                                        <path d="m225.171875 145.128906c-5.652344-.753906-11.351563-1.128906-17.054687-1.128906v16c4.996093 0 9.988281.328125 14.945312.984375zm0 0" data-original="#000000"  data-old_color="#000000" fill="#37C5EE"/>
                                    </g> 
                                </svg>
                                <p className="text-xl century pt-3">Réactivité et efficacité</p>
                            </div>
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center my-6" /*data-aos='zoom-in' data-aos-delay="200"*/>
                                <svg  viewBox="0 0 511.999 511.999" width="60px" height="60px">
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M511.939,330.321c-0.638-11.442-6.281-21.921-15.485-28.749c-14.892-11.05-35.555-9.898-49.128,2.742l-82.559,76.887    c0.503-16.916-10.616-31.846-27.269-36.071L236.67,319.539c-17.681-4.488-36.197-3.883-53.548,1.751l-69.703,22.63v-20.057    c0-5.522-4.478-9.999-9.999-9.999H9.999c-5.522,0-9.999,4.478-9.999,9.999V501.98c0,5.522,4.478,9.999,9.999,9.999h93.422    c5.522,0,9.999-4.478,9.999-9.999V364.947l75.878-24.635c13.756-4.467,28.436-4.945,42.453-1.39l100.829,25.591    c7.831,1.988,12.933,9.266,12.13,17.308c-0.83,8.314-7.758,14.585-16.114,14.585h-80.282c-5.522,0-9.999,4.478-9.999,9.999    c0,5.522,4.478,9.999,9.999,9.999h31.542c0.376,0.043,0.757,0.07,1.145,0.07h49.589c16.54,0,32.315-6.209,44.421-17.481    l85.947-80.044c6.515-6.068,16.434-6.62,23.584-1.316c4.418,3.277,7.126,8.307,7.432,13.8c0.307,5.493-1.828,10.792-5.854,14.541    L367.72,456.194c-8.167,7.602-18.811,11.789-29.968,11.789H182.796c-5.522,0-9.999,4.478-9.999,9.999    c0,5.522,4.478,9.999,9.999,9.999h154.958c16.23,0,31.712-6.091,43.594-17.15l118.397-110.22    C508.132,352.803,512.577,341.763,511.939,330.321z M93.422,491.981H19.998V333.863h73.423V491.981z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M149.517,470.913c-1.859-1.861-4.439-2.93-7.078-2.93c-2.631,0-5.21,1.069-7.069,2.93c-1.86,1.861-2.93,4.44-2.93,7.069    s1.069,5.21,2.93,7.068c1.87,1.86,4.439,2.931,7.069,2.931c2.64,0,5.21-1.07,7.078-2.931c1.86-1.859,2.931-4.439,2.931-7.068    S151.378,472.773,149.517,470.913z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M63.785,460.574c-1.87-1.86-4.45-2.92-7.079-2.92c-2.63,0-5.21,1.06-7.069,2.92c-1.86,1.87-2.93,4.45-2.93,7.079    s1.069,5.2,2.93,7.069c1.87,1.86,4.44,2.93,7.069,2.93c2.63,0,5.21-1.07,7.079-2.93c1.859-1.86,2.92-4.44,2.92-7.069    C66.705,465.013,65.644,462.444,63.785,460.574z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M217.555,0.02h-10.862c-48.595,0-88.13,39.535-88.13,88.13v25.981c-31.379,3.028-55.996,29.54-55.996,61.7    c0,34.183,27.812,61.994,61.995,61.994h4c5.522,0,9.999-4.478,9.999-9.999V88.15c0-37.567,30.564-68.132,68.132-68.132h10.862    c5.522,0,9.999-4.478,9.999-9.999C227.554,4.497,223.077,0.02,217.555,0.02z M118.563,200.539v16.86    c-20.325-2.92-35.997-20.448-35.997-41.569s15.672-38.649,35.997-41.569V200.539z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M256.405,0.02h-0.425c-5.522,0-9.999,4.478-9.999,9.999c0,5.522,4.478,9.999,9.999,9.999h0.425    c5.522,0,9.999-4.478,9.999-9.999C266.404,4.497,261.927,0.02,256.405,0.02z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M393.396,114.129V88.15c0-48.595-39.535-88.13-88.13-88.13h-11.207c-5.522,0-9.999,4.478-9.999,9.999    c0,5.522,4.479,9.999,10,9.999h11.207c37.567,0,68.132,30.564,68.132,68.132v167.68c0,3.402-2.768,6.17-6.169,6.17H292.8    C288.878,252.614,279.605,246,268.814,246h-22.881c-14.328,0-25.985,11.657-25.985,25.985v0.025    c0,14.328,11.657,25.985,25.985,25.985h22.881c10.787,0,20.057-6.608,23.982-15.999h74.433c14.429,0,26.167-11.739,26.167-26.168    v-18.3c31.379-3.028,55.996-29.54,55.996-61.7S424.775,117.158,393.396,114.129z M268.814,277.998h-22.881    c-3.302,0-5.987-2.686-5.987-5.987v-0.025c0-3.302,2.686-5.987,5.987-5.987h22.881c3.302,0,5.987,2.686,5.987,6.013    C274.801,275.312,272.116,277.998,268.814,277.998z M393.397,217.399v-16.86v-66.278c20.325,2.92,35.997,20.448,35.997,41.569    S413.723,214.479,393.397,217.399z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M343.973,110.809h-9.332c-1.311-4.016-2.926-7.918-4.839-11.686l6.599-6.598c1.875-1.876,2.929-4.419,2.929-7.07    s-1.054-5.196-2.929-7.07l-22.258-22.257c-3.905-3.905-10.235-3.904-14.141,0l-6.599,6.597c-3.768-1.912-7.67-3.528-11.685-4.838    v-9.333c0-5.522-4.478-9.999-9.999-9.999H240.24c-5.522,0-9.999,4.478-9.999,9.999v9.362c-4.006,1.312-7.897,2.928-11.655,4.839    l-6.626-6.626c-3.905-3.903-10.234-3.904-14.142,0l-22.258,22.257c-1.875,1.875-2.929,4.419-2.929,7.07s1.054,5.195,2.929,7.07    l6.659,6.659c-1.9,3.75-3.506,7.631-4.808,11.625h-9.423c-5.522,0-9.999,4.478-9.999,9.999v31.477    c0,5.522,4.478,9.999,9.999,9.999h9.453c1.305,3.984,2.91,7.854,4.809,11.595l-6.688,6.688c-1.875,1.875-2.929,4.419-2.929,7.07    s1.054,5.195,2.929,7.07l22.258,22.258c3.906,3.904,10.235,3.904,14.142,0l6.688-6.688c3.74,1.899,7.61,3.505,11.595,4.81v9.452    c0,5.522,4.478,9.999,9.999,9.999h31.478c5.522,0,9.999-4.478,9.999-9.999v-9.423c3.994-1.303,7.875-2.908,11.625-4.809    l6.657,6.659c3.906,3.904,10.235,3.904,14.142,0l22.258-22.258c1.875-1.876,2.929-4.419,2.929-7.07s-1.054-5.196-2.93-7.07    l-6.628-6.628c1.912-3.758,3.528-7.649,4.839-11.655h9.361c5.522,0,9.999-4.478,9.999-9.999v-31.477    C353.972,115.287,349.495,110.809,343.973,110.809z M333.974,142.285h-6.949c-4.699,0-8.798,3.302-9.805,7.883    c-1.587,7.142-4.393,13.89-8.337,20.057c-2.53,3.956-1.968,9.139,1.354,12.459l4.953,4.953l-8.116,8.116l-4.975-4.975    c-3.315-3.315-8.489-3.881-12.443-1.362c-6.182,3.938-12.938,6.731-20.084,8.304c-4.585,1.01-7.85,5.072-7.85,9.766v7.052H250.24    v-7.071c0-4.689-3.259-8.748-7.837-9.763c-7.137-1.581-13.885-4.38-20.054-8.317c-3.954-2.525-9.133-1.962-12.451,1.357    l-5.01,5.01l-8.116-8.116l5.009-5.009c3.318-3.317,3.884-8.495,1.358-12.451c-3.938-6.169-6.735-12.917-8.316-20.055    c-1.015-4.579-5.074-7.837-9.763-7.837h-7.072v-11.478h7.033c4.51,0,8.483-3.037,9.67-7.387c0.044-0.158,0.083-0.318,0.118-0.479    c1.573-7.138,4.365-13.891,8.301-20.069c2.519-3.954,1.952-9.127-1.363-12.442l-4.975-4.975l8.116-8.116l4.953,4.954    c3.32,3.32,8.503,3.883,12.458,1.354c6.133-3.923,12.838-6.719,19.929-8.309c4.569-0.925,8.012-4.967,8.012-9.807v-6.977h11.479    v6.903c0,4.641,3.249,8.741,7.766,9.805c0.044,0.011,0.089,0.021,0.133,0.03c7.146,1.578,13.904,4.379,20.084,8.323    c3.953,2.521,9.132,1.96,12.449-1.358l4.92-4.919l8.116,8.116l-4.905,4.905c-3.337,3.338-3.878,8.565-1.345,12.507    c3.906,6.13,6.687,12.829,8.269,19.914c0.918,4.577,4.962,8.026,9.808,8.026h6.957V142.285z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M255.98,98.55c-20.951,0-37.997,17.046-37.997,37.997c0,20.951,17.046,37.997,37.997,37.997    c20.951,0,37.997-17.046,37.997-37.997C293.977,115.596,276.931,98.55,255.98,98.55z M255.98,154.546    c-9.924,0-17.999-8.074-17.999-17.999c0-9.924,8.074-17.999,17.999-17.999c9.924,0,17.999,8.074,17.999,17.999    C273.979,146.471,265.904,154.546,255.98,154.546z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M56.711,351.992c-5.522,0-9.999,4.478-9.999,9.999v68.995c0,5.522,4.477,9.999,9.999,9.999    c5.522,0,9.999-4.478,9.999-9.999v-68.995C66.71,356.47,62.232,351.992,56.711,351.992z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                            </g>
                                        </g>
                                    </g> 
                                </svg>
                                <p className="text-xl century pt-3">Relation client</p>
                            </div>
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center my-6" /*data-aos='zoom-in' data-aos-delay="400"*/>
                                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="-4 0 511 511.99964" width="60px">
                                    <g>
                                        <path d="m498.429688 219.339844c-5.308594-8.015625-13.355469-13.539063-22.710938-15.632813 6.035156-11.542969 5.789062-25.945312-1.898438-37.550781-5.46875-8.261719-13.71875-13.597656-22.699218-15.617188 1.601562-3.054687 2.785156-6.351562 3.492187-9.828124 1.960938-9.667969.046875-19.519532-5.402343-27.742188-5.308594-8.019531-13.355469-13.542969-22.710938-15.632812 6.035156-11.542969 5.789062-25.945313-1.898438-37.554688-11.238281-16.972656-34.199218-21.640625-51.175781-10.398438l-36.757812 24.34375c-19.59375-9.9375-40.433594-16.988281-62.0625-21.003906-6.835938-10.378906-14.785157-20.027344-23.683594-28.652344l-15.207031-14.738281c-11.136719-10.796875-28.601563-12.417969-41.53125-3.851562-15.296875 10.128906-19.5 30.816406-9.371094 46.113281.398438.605469.789062 1.214844 1.175781 1.824219-49.847656 10.085937-95.277343 36.539062-128.902343 75.300781-36.488282 42.066406-56.585938 95.941406-56.585938 151.699219 0 10.6875.730469 21.394531 2.175781 31.816406 11.136719 81.019531 65.105469 150.839844 140.839844 182.21875 28.085937 11.640625 57.886719 17.546875 88.5625 17.546875 48.582031 0 95.085937-14.878906 134.488281-43.023438 38.546875-27.539062 67.386719-65.542968 83.40625-109.902343 1.496094-4.132813-.648437-8.699219-4.78125-10.191407-4.136718-1.492187-8.699218.648438-10.191406 4.785157-14.917969 41.308593-41.78125 76.699219-77.691406 102.351562-36.683594 26.207031-79.988282 40.058594-125.230469 40.058594-23.390625 0-46.230469-3.691406-68.089844-10.972656l64.773438-42.894531c.003906-.003907.007812-.003907.011719-.007813.003906 0 .003906-.003906.007812-.007813l53.832031-35.648437h.003907c4.832031-3.203125 8.132812-8.09375 9.289062-13.777344 1.15625-5.683593.03125-11.480469-3.171875-16.3125l-.710937-1.078125 10.457031-6.925781c7.460937-4.941406 16.433593-6.878906 25.269531-5.460937 12.792969 2.054687 25.785156-.757813 36.582031-7.910157l86.734375-57.4375c-.59375 7.523438-1.570312 15.003907-2.933594 22.359375-.804687 4.324219 2.050782 8.480469 6.375 9.28125.488282.09375.980469.136719 1.460938.136719 3.761719 0 7.105469-2.679687 7.816406-6.511719 2.207032-11.871094 3.476563-24.03125 3.804688-36.207031l24.441406-16.1875c8.222656-5.445313 13.835938-13.769531 15.796875-23.433594 1.964844-9.667969.046875-19.519531-5.398437-27.742187zm-177.21875-135.378906-24.324219 16.109374-4.789063-12.902343c-2-5.382813-4.292968-10.660157-6.832031-15.824219 12.339844 3.128906 24.355469 7.347656 35.945313 12.617188zm-252.097657 55.191406c32.316407-37.253906 76.335938-62.296875 124.492188-70.980469 7.726562 18.71875 9.578125 39.632813 4.960937 59.566406l-19.410156 83.855469c-3.050781-3.257812-7.011719-5.503906-11.472656-6.410156-5.6875-1.160156-11.480469-.03125-16.3125 3.171875l-54.980469 36.40625c-.003906 0-.003906 0-.007813.003906 0 0-.003906 0-.003906.003906l-79.296875 52.511719c-.433593-5.59375-.660156-11.230469-.660156-16.863281 0-51.921875 18.714844-102.09375 52.691406-141.265625zm207.191407 250.441406c-.308594 1.515625-1.191407 2.824219-2.484376 3.679688h.003907l-47.28125 31.308593-87.753907-130.871093c-2.449218-3.652344-7.394531-4.625-11.046874-2.175782-3.648438 2.449219-4.625 7.390625-2.175782 11.042969l87.699219 130.796875-67.496094 44.699219c-67.070312-29.335938-115.066406-91.289063-126.605469-163.378907l79.390626-52.402343 9.136718 13.632812c1.539063 2.289063 4.054688 3.527344 6.621094 3.527344 1.523438 0 3.066406-.433594 4.425781-1.347656 3.652344-2.449219 4.628907-7.394531 2.179688-11.046875l-9.074219-13.535156 48.320312-31.894532c1.285157-.855468 2.828126-1.152344 4.34375-.84375 1.515626.308594 2.824219 1.191406 3.679688 2.480469l107.273438 161.984375c.851562 1.285156 1.152343 2.828125.84375 4.34375zm211.921874-145.683594c-1.117187 5.5-4.308593 10.234375-8.988281 13.332032l-27.941406 18.503906c-.007813.003906-.015625.011718-.027344.015625l-99.730469 66.046875c-7.460937 4.941406-16.433593 6.882812-25.269531 5.460937-12.789062-2.050781-25.78125.757813-36.582031 7.910157l-10.457031 6.925781-87.859375-132.667969 22.710937-98.105469c5.847657-25.273437 2.765625-51.894531-8.375-75.085937-.101562-.242188-.210937-.476563-.335937-.707032-2.140625-4.382812-4.570313-8.636718-7.285156-12.738281-5.28125-7.976562-3.089844-18.761719 4.890624-24.046875 6.742188-4.464844 15.851563-3.621094 21.65625 2.007813l15.207032 14.742187c16.449218 15.949219 29.359375 35.730469 37.328125 57.207032l8.28125 22.308593c.015625.042969.03125.078125.046875.117188.019531.050781.042968.105469.0625.15625.058594.136719.113281.261719.171875.367187.160156.335938.335937.667969.546875.984375 2.429687 3.667969 7.367187 4.671875 11.03125 2.242188l84.910156-56.226563c9.65625-6.394531 22.714844-3.742187 29.109375 5.914063s3.742187 22.714843-5.914063 29.109375l-7.371093 4.882812s-.003907 0-.007813.003906l-16.441406 10.890626c-.023438.015624-.039062.03125-.0625.042968-.09375.066406-.183594.128906-.257812.191406-3.398438 2.496094-4.277344 7.242188-1.921876 10.796876 2.425782 3.667968 7.367188 4.671874 11.035157 2.242187l16.453125-10.898437c4.675781-3.089844 10.273437-4.179688 15.769531-3.0625 5.496094 1.117187 10.234375 4.308593 13.328125 8.988281 3.097656 4.675781 4.191406 10.28125 3.074219 15.777343-1.117188 5.5-4.308594 10.234376-8.988281 13.332032l-23.820313 15.777344c-3.667969 2.425781-4.671875 7.363281-2.242187 11.03125 1.53125 2.3125 4.0625 3.566406 6.644531 3.566406 1.507812 0 3.035156-.429688 4.386719-1.324219l3.6875-2.441406 12.757812-8.449219c9.660156-6.394531 22.714844-3.742188 29.109375 5.914062 6.394531 9.660157 3.742187 22.714844-5.914063 29.113282l-11.898437 7.878906c-.0625.039062-.125.082031-.1875.125l-11.734375 7.769531c-3.667969 2.425781-4.671875 7.367188-2.242188 11.035157 1.53125 2.3125 4.0625 3.566406 6.644532 3.566406 1.507812 0 3.035156-.429688 4.386718-1.324219l3.6875-2.441406s0-.003907.003907-.003907l12.757812-8.445312c4.675781-3.097656 10.277344-4.191406 15.777344-3.070312 5.5 1.113281 10.234375 4.308593 13.332031 8.984374 3.09375 4.675782 4.183594 10.28125 3.066406 15.777344zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#37C5EE"/>
                                    </g> 
                                </svg>
                                <p className="text-xl century pt-3">Collaboration et confiance</p>
                            </div>
                            
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <h3 /*data-aos='fade-right'*/ className="text-center text-4xl century">
                            Nous les accompagnons depuis plusieurs années pour servir l’intérêt général.
                        </h3>
                        <hr className="blue"></hr>
                    </section>
                    <Partenaires/>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>Ils sont satisfaits par nos services d’agence web
                        </h2>
                        <hr className="blue"></hr>

                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-start justify-center text-center mt-3 mb-12">
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-start" /*data-aos="fade-up"*/>
                            <img
                                src={stars}
                                alt="avis Google"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Midi Pneu Occaz 47</div>
                            <div className="italic">« Très bon relationnel, Gabriel est très agréable que ce soit par téléphone ou par mail, très professionnel,
                            une personne très a l’écoute. Nous le recommandons car nous sommes vraiment très satisfaits de ses prestations. »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-start" /*data-aos="fade-up" data-aos-delay="300"*/>
                            <img
                                src={stars}
                                alt="avis Google"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Agen Diesel</div>
                            <div className="italic">« La prise en charge de mon dossier par Anthony est impeccable. Très bon accueil téléphonique, il répond à mes demandes et mes exigences. Un rapport mensuel est effectué tout les mois pour voir l’évolution de notre entreprise en référencement sur internet. »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-start" /*data-aos="fade-up" data-aos-delay="500"*/>
                            <img
                                src={stars}
                                alt="avis Google"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Psychologue Fourteau Béatrice</div>
                            <div className="italic">« Depuis trois ans, je travaille avec Linkweb. Une équipe sérieuse, rigoureuse, qui répond très rapidement en cas de souci. Je suis très satisfaite de leur travail de suivi et de référencement. Tous les mois nous faisons le point par téléphone. Nous décidons ensemble des pistes d’amélioration. Ils sont toujours à l’écoute et réactif. Je recommande sans réserve ! »</div>
                        </div>

                    </section>
                    <section className="max-w-6xl mx-auto flex align-center justify-center text-center mb-24">
                        <div className="w-full flex flex-col md:flex-row justify-center">
                            
                        <button
                            className="century text-sm hover:text-bleu"
                            type="button"
                            formtarget="_blank"
                            onClick={(e) => {
                            e.preventDefault();
                            window.open('https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,', '_blank')
                            }}
                        >Voir plus de témoignages</button>
                            &nbsp;
                            |&nbsp;
                            <button
                            className="century text-sm hover:text-bleu"
                            type="button"
                            target="_blank"
                            onClick={(e) => {
                            e.preventDefault();
                            window.open('https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,', '_blank')
                        }}
                        >Vous travaillez déjà avec nous ? Donnez nous votre avis !</button>{/* <a
                                className="century text-sm hover:text-bleu"
                                target="blank" rel="noreferrer noopener"
                                href="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,"
                            >
                                Voir plus de témoignages
                            </a>&nbsp;
                            |&nbsp;
                            <a
                                className="century text-sm hover:text-bleu"
                                target="blank" rel="noreferrer noopener"
                                href="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,"
                            >
                                Vous êtes déjà clients ? Donnez nous votre avis !
                            </a> */}
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h2 className="century text-center text-xl md:text-2xl tracking-wider pb-3 leading-tight" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>Agence Web Marmande : que gagner à se lancer dans un projet web ?
                        </h2>
                        <hr className="blue"></hr>
                        <h4 /*data-aos='fade-left'*/ className="text-lg md:text-xl text-grey text-center century italic px-6 pb-6">Tout ! Ou bien presque. Investir dans un site web vous confère de nombreux avantages pour le développement de votre société, et d’abord celui de montrer que vous êtes bien présent.</h4>
                    </section>
                    <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                        <div className="w-full md:w-3/4 py-0 flex justify-end">
                            <Accordion>
                                <div className="w-full" label="ÊTRE VISIBLE GRÂCE AU RÉFÉRENCEMENT NATUREL">
                                    <p>Dans la&nbsp;<strong><Link to="/comment-notre-agence-de-conception-de-site-internet-realise-votre-projet/" className="text-bleu hover:text-black font-bold">conception de sites internet</Link></strong>, <span className="font-bold">une part importante de la réflexion est accordée à l'&nbsp;aspect stratégique.</span> Dès l’élaboration de votre <strong>projet web</strong>, notre <strong>agence de communication digitale</strong> attribue, à chaque page et éléments de contenus, une fonction précise. Le fait de traduire clairement vos prestations et services en les segmentant par thématiques permet d'opter pour une approche adaptée. Ceci est essentiel dans le cadre du <strong>référencement d'un site internet</strong>.<br/><br/> <span className="font-bold">Les spécialistes de notre <strong>agence de référencement</strong> identifierons alors les <strong>expressions clés ciblées</strong> qui vont déterminer votre <strong>stratégie de référencement naturel</strong> pour la déployer au fil des semaines. Nous définissons un plan d’actions selon vos attentes et vos moyens à consacrer aux <strong>outils digitaux</strong>.</span><br/><br/>Cependant, s’il est urgent pour vous d’<strong>être visible sur les moteurs de recherche</strong>, nous vous proposons la <strong>création d’une campagne Ads</strong>, via la plateforme <strong>Google Adwords</strong>, qui vous donnera une <strong>visibilité immédiate</strong> grâce au <strong>référencement payant</strong>. <br/><br/>
                                    <span className="font-bold">C'est nôtre rôle, en tant qu'<strong>agence spécialisée dans la création de sites web</strong>, de vous proposer <strong>nos solutions</strong> les plus performantes et qui seront les mieux adaptées à vos besoins.</span></p>
                                </div>
                                <div label="COMMUNIQUER DE MANIÈRE EFFICACE EN DIRECTION DE VOS CIBLES">
                                    <p>Lorsque l’on souhaite <strong>communiquer</strong>, <span className="font-bold"><strong>être visible en ligne</strong>&nbsp;va permettre à tout un chacun d’accéder rapidement à l’information qu'il recherche à votre sujet.</span> La&nbsp;<strong>création de site internet</strong>&nbsp;doit être pensée dans cette direction afin de mettre en place une <strong>arborescence</strong> limpide et qui répondra aux besoins de vos utilisateurs. Cela se traduit par un <strong>webdesign</strong> <strong>ergonomique</strong> et <strong>intuitif</strong>&nbsp;de <strong>votre site internet</strong> pour permettre à l’utilisateur d’accéder rapidement à l’information qu’il recherche sur votre <strong>site internet</strong>.<br/><br/>
                                    En effet, l’accès à l’information doit être favorisé grâce à la mise en place d’un <strong>site responsive design</strong> pour permettre de gagner en lisibilité. De plus, à travers <span className="font-bold">l’utilisation de <strong>votre charte graphique</strong> et de votre <strong>identité visuelle</strong>, nous créons un <strong>outil digital à votre image</strong> avec un <strong><Link to="/agence-web-design-toulouse/" className="text-bleu hover:text-black font-bold">web design</Link></strong> sur-mesure pour répondre à votre <strong>stratégie de communication digitale </strong>et permettre aux utilisateurs de vous identifier clairement.</span> Cet aspect est indispensable en ce qui concerne <strong>votre identité de marque</strong>. Pour ce faire, un <strong>développeur web</strong> va définir la solution la plus à même de développer une <strong>expérience utilisateur</strong> adaptée sur <strong>votre site internet</strong> en travaillant à la fois l’<strong>ergonomie</strong>, la praticité, l’intuitivité et l'aspect <strong>créatif</strong>du site. <span className="font-bold">Ceci vise à mettre en place un outil utile, original et pertinent pour les visiteurs.</span><br/><br/><span className="font-bold">Que ce soit à travers l'utilisation de <strong>CMS</strong> tels que <strong>Joomla</strong>, <strong>Prestashop</strong>, <strong>Drupal</strong> ou <strong>Wordpress</strong>, ou bien via l'utilisation de frameworks, nos spécialistes définieront la meilleure solution pour vous proposer des performances optimales.</span></p>
                                </div>
                                <div label="OBTENIR UN RETOUR SUR INVESTISSEMENT">
                                    <p>Chaque projet a ses spécificités, si un&nbsp;<strong>site e-commerce</strong> va viser la vente en ligne de produits, un <strong>site vitrine</strong> sera plus adapté pour obtenir des <strong>contacts prospects qualifiés</strong>. <span className="font-bold">C’est pourquoi nous mettons en place des solutions web adaptées à votre ambition pour votre entreprise.</span><br/><br/>Les <strong>sites internet</strong> de nos clients obtiennent un <strong>trafic</strong> <strong>qualifié</strong> et une frénquente en constante progression. En effet, le site internet fait partie des <strong>supports de communication</strong> les plus importants en termes de <strong>webmarketing</strong>.<br/><br/><span className="font-bold">Chez <strong>Linkweb</strong>, nous privilégions la qualité. La <strong>création de votre site internet</strong> n’a qu’un seul but : vous permettre d'atteindre de nouveaux prospects en vue de maximiser vos chances de <strong>convertir vos contacts</strong> grâce au site web et de vous apporter de <strong>nouveaux clients</strong> pour augmenter votre chiffre d’affaires.</span></p>
                                </div>
                            </Accordion>
                        </div>
                    </section>
                    <section className=" w-full h-screen flex flex-col justify-center bg-bottom items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bureau + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <div className="max-w-5xl mx-auto flex flex-col items-center">
                            <h2 /*data-aos='fade-right'*/ className="text-center text-white text-2xl md:text-4xl century">
                                <span className="text-bleu">/</span>Vous souhaitez intégrer l’équipe de Linkweb ?
                                Nous recrutons des développeurs et référenceurs web à Agen.
                            </h2>
                             {/* <RoundButton url="/recrutement-creation-site-internet-agen/" text="Voir notre page recrutement" /> */}
                             <button
                                        className="font-light roundedButton bg-bleu text-white hover:text-white flex justify-center mt-3 century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 mt-12"                    
                                        type="button"
                                        onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/recrutement-creation-site-internet-agen/';
                                        }}
                                    >
                                    
                                    Voir notre page recrutement
                            </button>
                        </div>
                    </section>
                    <section className="max-w-5xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3 bg-gris p-10">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight"><span className="text-bleu">/</span>Vous souhaitez faire appel à notre agence web à Agen ?</h2>
                        <br/>
                        <p className="century text-center text-md">Linkweb conduit tous vos <strong>projets web à Agen</strong>, de leur conception à la mise en oeuvre avec un suivi régulier. Notre équipe vous accompagne dans la mise en route technique et dans le choix de la stratégie éditoriale à adopter pour répondre à vos objectifs.</p>
                        <div className="max-w-sm mx-auto block">
                            {/* <RoundButton url="/agence-digitale-toulouse/" text="Faire appel à l'agence web à Agen" /> */}
                            <button
                                        className="font-light roundedButton bg-bleu text-white hover:text-white flex justify-center mt-3 century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 mt-12"                    
                                        type="button"
                                        onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/agence-digitale-toulouse/';
                                        }}
                                    >
                                    
                                    Faire appel à l'agence web à Toulouse
                            </button>
                        </div>
                    </section>
                    {/* <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" /*data-aos="zoom-in">
                            <span className="text-bleu">/</span>Les dernières actualités
                        </h3>
                        <hr className="blue"></hr>
                        <LastPosts lastposts={this.props.data.allWordpressPost.edges} />
                        <Link className="bg-bleu text-white px-16 py-3 block mx-auto hover:bg-black font-normal" to="/actualite-digitale/">Voir l'actualité digitale</Link>
                        <br/>
                    </section> */}
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsAgenceMarmande {
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
export default AgenceWebMarmande;




