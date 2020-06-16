import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import Accordion from '../components/accordion';
import ButtonMenu from '../components/buttonmenu.js';
import ButtonMenuBack from '../components/buttonmenuback.js';
import "../scss/global.scss";

import Bg from "../images/background-referencement-naturel.jpg";
import imac from "../images/referencement-google.jpg";
// import bgDev from '../images/bg-dev.jpg';
import bgDev from '../images/cta-background-agence-web.jpg';


class ReferencementNaturel extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Référencement Agen Toulouse - Référencement Naturel - Linkweb"
                    description="Définition de votre stratégie de référencement naturel (SEO) - Étude de contexte - Choix des mots-clés - Création de contenus optimisés et originaux."
                    keywords={[`Référencement Naturel à Agen`, `Référencement Naturel à Toulouse`, `Référencement SEO Toulouse`, `Référencement SEO Agen`]}
                    url="https://linkweb.fr/referencement-de-site-internet-47-31/"
                    nom="Référencement Naturel"
                    slug="referencement-de-site-internet-47-31/"
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
                    <section className="w-full bloctitrescreen mx-auto px-2 md:px-4 py-6 bg-no-repeat bg-cover bg-center flex md:flex-row flex-col justify-center items-center" style={{backgroundImage:'url(' + Bg +')', backgroundColor:'rgba(0,0,0,0.2)', backgroundBlendMode:'overlay', backgroundPosition:'center', height:'650px'}}>
                        <div className="order-last md:order-first w-full md:w-1/3 max-w-5xl mx-auto p-1 my-4 md:mx-6 mx-2" >
                            <RoundButton url="/contact-agence-web-toulouse/" text="Je veux améliorer la visibilité de mon site internet" />
                        </div>
                        <div className="w-full md:w-2/3 mt-6 p-1">
                            <h1 data-aos="fade-up" data-aos-delay="500" className="century text-2xl sm:text-3xl md:text-5xl text-center text-white">
                            Agence de référencement<br/> à Agen (47)<span className="text-bleu">/</span>Toulouse(31)
                            </h1>
                            <br/>
                            <h3 className="italic text-lg text-center md:text-2xl text-white">Les référenceurs de l’agence de référencement Linkweb, en charge de la gestion de votre référencement naturel, réalisent un plan de communication digitale pour vous permettre d'atteindre la première page de Google et des moteurs de recherche.</h3>
                        </div>
                    </section>
                    <section className="w-full flex flex-row justify-end h-8 font-medium">
                        <section className="bg-white w-1/5 lg:w-1/12 flex text-center italic text-xs sm:text-sm md:text-md text-darkgrey">
                        <div className="w-full md:w-1/2 p-1 mt-0"><ButtonMenuBack url="/referencement-toulouse/" position="center"/></div>
                        <div className="w-full md:w-1/2 p-1 text-left mt-0 hidden md:block"><Link className="hover:text-bleu" to="/referencement-toulouse/">Retour</Link></div>
                        </section>
                        <section className="w-full lg:w-2/5 flex bg-darkgrey text-xs sm:text-sm md:text-md" style={{borderBottomLeftRadius:'27px', minHeight:'48px'}}>
                            <div className="w-full lg:w-1/2 text-bleu p-1"><ButtonMenu url="/referencement-de-site-internet-47-31/" text="Référencement Naturel" position="center" /></div>
                            <div className="w-full lg:w-1/2 text-white p-1"><ButtonMenu url="/agence-adwords-47-31/" text="Référencement Ads" position="center" /></div>
                        </section>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <br/>
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                        Avec Linkweb, votre agence de communication digitale à Agen et Toulouse, vous ne cherchez plus vos clients, ce sont eux qui vous trouvent grâce à votre site web.
                        </h2>
                        <hr className="blue"></hr>
                    </section>
                    <section className="flex flex-col xl:flex-row w-full mx-auto px-4 py-6 my-4">
                        <div className="w-full xl:w-1/2 px-12 xl:px-24 py-12" >
                            <h2 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in">
                                <span className="text-bleu">/</span>AGENCE DE RÉFÉRENCEMENT : OPTEZ POUR LE NATUREL AVEC NOTRE AGENCE À AGEN
                            </h2>
                            <h4 className="century text-lg tracking-wider pb-6 text-justify" data-aos='fade-left'>
                                <span className="font-bold">Être visible sur les moteurs de recherche demande un travail de référencement précis pour améliorer son positionnement.</span>
                            </h4>
                            <p data-aos='fade-bottom' className="text-justify">Le <strong>référencement naturel SEO</strong> de votre <strong>site internet</strong>, qui se distingue du <strong><Link className="hover:text-bleu" to="/agence-adwords-47-31/">référencement payant Google Adwords</Link></strong> est travaillé de manière régulière et constante pour obtenir le meilleur classement, et cela toujours en prenant en compte les objectifs de développement de votre entreprise.
                            <br/><br/>
                            Nous maintenons une <strong>mise à jour régulière des pages web de votre site internet</strong>, de la conception technique à la gestion de votre <strong>référencement naturel</strong> avec les <strong>optimisations de balises</strong> et autres <strong>techniques de référencement</strong> (<strong>maillage interne</strong>, <strong>liens entrants</strong>, <strong>balise meta</strong>, contenu de qualité) qui vous permettront de vous <strong>positionner dans les premiers résultats naturels des pages de résultats des moteurs de recherche</strong> pour un mot clé donné en vue d’une <strong>acquisition de trafic</strong> et de maximiser votre <strong>taux de conversion</strong>.</p>
                        </div>
                        <div className="w-full xl:w-1/2 py-12 order-first xl:order-last">
                            <img className="mx-auto block" src={imac} alt="Référencement Naturel Agen" />
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        <span className="text-bleu">/</span>NOS SOLUTIONS DE RÉFÉRENCEMENT À AGEN (47) ET TOULOUSE (31)
                        </h2>
                        <hr className="blue"></hr>
                        
                    </section>
                    <section className="max-w-6xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <p className="text-xl font-bold century text-center"><strong>Votre site internet</strong> est le reflet de votre entreprise en ligne. Notre <strong>agence SEO de référencement web</strong> travaille dans le but de faire progresser la visibilité de votre société dans les <strong>résultats de recherche</strong> et votre notoriété à travers une création au design professionnel, moderne et épuré.</p>
                        <br/>
                        <div className="w-full flex flex-col sm:flex-row text-center my-6">
                            <div className="w-full sm:w-1/4 flex flex-col items-center justify-center pt-6" data-aos='zoom-in' data-aos-delay="200">
                                <svg className="svg-bleu" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" width="80px" height="80px">
                                    <g>
                                        <path d="M326.623,133.062c13.785,0,25-11.215,25-25s-11.215-25.001-25-25.001s-25,11.216-25,25.001   c0,5.63,1.872,10.83,5.025,15.014l-41.076,57.401c-2.451-0.805-5.066-1.247-7.784-1.247c-6.569,0-12.551,2.551-17.017,6.709   l-27.379-15.536c0.365-1.696,0.561-3.454,0.561-5.257c0-13.785-11.215-25-25-25s-25,11.215-25,25c0,1.803,0.196,3.561,0.561,5.257   l-27.379,15.536c-4.466-4.158-10.448-6.708-17.017-6.708c-13.785,0-25,11.216-25,25.001s11.215,25.001,25,25.001   s25-11.216,25-25.001c0-1.803-0.196-3.561-0.561-5.257l27.379-15.536c4.466,4.158,10.448,6.709,17.017,6.709   c6.569,0,12.55-2.551,17.017-6.708l27.379,15.536c-0.365,1.696-0.561,3.454-0.561,5.257c0,13.785,11.215,25.001,25,25.001   c13.786,0,25.001-11.216,25.001-25.001c0-5.631-1.873-10.832-5.026-15.016l41.076-57.401   C321.289,132.62,323.905,133.062,326.623,133.062z M326.623,98.061c5.514,0,10,4.486,10,10.001c0,5.514-4.486,10-10,10   s-10-4.486-10-10C316.622,102.547,321.108,98.061,326.623,98.061z M120.115,214.231c-5.514,0-10-4.486-10-10.001   s4.486-10.001,10-10.001s10,4.486,10,10.001S125.629,214.231,120.115,214.231z M188.951,175.146c-5.514,0-10-4.486-10-10.001   c0-5.514,4.486-10,10-10s10,4.486,10,10C198.952,170.66,194.465,175.146,188.951,175.146z M257.787,214.231   c-5.514,0-10-4.486-10-10.001s4.486-10.001,10-10.001c5.515,0,10.001,4.486,10.001,10.001S263.301,214.231,257.787,214.231z"/>
                                        <path d="M418.796,376.965H366.31H80.428H21.215c-3.427,0-6.215-2.788-6.215-6.215V61.331c0-3.427,2.788-6.215,6.215-6.215h35.356   c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5H21.215C9.517,40.116,0,49.633,0,61.331V370.75c0,11.698,9.517,21.215,21.215,21.215   h51.713v16.506c0,9.403,7.65,17.053,17.053,17.053h75.074l-35.34,68.998c-1.888,3.687-0.431,8.206,3.256,10.095   c1.094,0.561,2.262,0.826,3.413,0.826c2.725,0,5.354-1.49,6.681-4.083l38.843-75.836h82.922l38.843,75.836   c1.328,2.593,3.956,4.083,6.681,4.083c1.151,0,2.319-0.267,3.413-0.826c3.687-1.889,5.145-6.408,3.256-10.095l-35.34-68.998h75.074   c9.403,0,17.053-7.649,17.053-17.053v-16.506h44.986c4.142,0,7.5-3.357,7.5-7.5S422.938,376.965,418.796,376.965z M358.81,408.471   c0,1.132-0.921,2.053-2.053,2.053H89.981c-1.132,0-2.053-0.921-2.053-2.053v-16.506H358.81V408.471z"/>
                                        <path d="M86.571,55.116h102.672h68.251h168.028c3.427,0,6.215,2.788,6.215,6.215v71.311c0,4.143,3.358,7.5,7.5,7.5   s7.5-3.357,7.5-7.5V61.331c0-11.698-9.517-21.215-21.215-21.215H264.995V25.374c0-10.375-8.441-18.816-18.817-18.816H200.56   c-10.375,0-18.817,8.441-18.817,18.816v14.742H86.571c-4.142,0-7.5,3.357-7.5,7.5S82.429,55.116,86.571,55.116z M196.743,25.374   c0-2.104,1.712-3.816,3.817-3.816h45.618c2.104,0,3.817,1.712,3.817,3.816v14.742h-53.251V25.374z"/>
                                        <path d="M104.902,267.576c-4.142,0-7.5,3.357-7.5,7.5v66.272c0,4.143,3.358,7.5,7.5,7.5h30.427c4.142,0,7.5-3.357,7.5-7.5v-66.272   c0-4.143-3.358-7.5-7.5-7.5H104.902z M127.829,333.849h-15.427v-51.272h15.427V333.849z"/>
                                        <path d="M173.737,229.248c-4.142,0-7.5,3.357-7.5,7.5v104.601c0,4.143,3.358,7.5,7.5,7.5h30.427c4.142,0,7.5-3.357,7.5-7.5V236.748   c0-4.143-3.358-7.5-7.5-7.5H173.737z M196.665,333.849h-15.427v-89.601h15.427V333.849z"/>
                                        <path d="M242.573,267.576c-4.142,0-7.5,3.357-7.5,7.5v66.272c0,4.143,3.358,7.5,7.5,7.5H273c4.142,0,7.5-3.357,7.5-7.5v-66.272   c0-4.143-3.358-7.5-7.5-7.5H242.573z M265.5,333.849h-15.427v-51.272H265.5V333.849z"/>
                                        <path d="M311.409,311.832c-4.142,0-7.5,3.357-7.5,7.5v22.017c0,4.143,3.358,7.5,7.5,7.5h30.427c4.142,0,7.5-3.357,7.5-7.5   s-3.358-7.5-7.5-7.5h-22.927v-14.517C318.909,315.189,315.551,311.832,311.409,311.832z"/>
                                        <path d="M508.175,384.019l-43.027-74.526c10.901-11.619,18.839-25.816,23.079-41.64c6.777-25.291,3.299-51.708-9.793-74.384   c-27.026-46.813-87.097-62.906-133.907-35.881c-46.811,27.025-62.906,87.096-35.88,133.907   c13.092,22.676,34.231,38.896,59.522,45.674c8.446,2.263,17.015,3.382,25.53,3.382c7.442,0,14.841-0.856,22.077-2.55l43.018,74.528   c5.273,9.137,14.875,14.25,24.737,14.249c4.833,0,9.729-1.229,14.208-3.813c8.796-5.077,14.261-14.544,14.261-24.706   C512,393.28,510.678,388.357,508.175,384.019z M372.051,322.68c-21.421-5.74-39.326-19.479-50.415-38.685   c-22.89-39.648-9.257-90.526,30.39-113.417c13.043-7.53,27.296-11.106,41.374-11.106c28.715,0,56.683,14.893,72.043,41.497   c11.088,19.206,14.034,41.58,8.294,63.002c-5.74,21.422-19.479,39.325-38.685,50.414   C415.847,325.474,393.473,328.418,372.051,322.68z M490.242,409.973c-6.453,3.726-14.733,1.508-18.456-4.942l-41.388-71.704   c4.148-1.693,8.21-3.673,12.156-5.951c3.949-2.28,7.689-4.818,11.23-7.566l41.4,71.707c1.188,2.061,1.816,4.393,1.816,6.743   C497,403.078,494.41,407.567,490.242,409.973z"/>
                                        <path d="M461.542,263.611c5.295-17.056,4.034-35.316-3.551-51.416c-1.766-3.748-6.234-5.354-9.981-3.589   c-3.748,1.766-5.354,6.234-3.588,9.981c5.983,12.7,6.976,27.109,2.795,40.575c-4.204,13.54-13.286,24.903-25.573,31.997   c-13.002,7.508-28.151,9.5-42.652,5.615c-14.502-3.886-26.624-13.187-34.13-26.189c-15.497-26.841-6.267-61.285,20.574-76.782   c19.625-11.329,43.98-9.815,62.051,3.857c3.304,2.5,8.007,1.849,10.506-1.455c2.499-3.303,1.848-8.007-1.456-10.506   c-22.891-17.321-53.745-19.238-78.602-4.887c-16.472,9.51-28.255,24.866-33.178,43.238s-2.396,37.562,7.114,54.034   c9.51,16.473,24.866,28.255,43.238,33.179c6.135,1.644,12.361,2.457,18.546,2.457c12.338,0,24.517-3.236,35.488-9.571   C444.71,295.163,456.216,280.767,461.542,263.611z"/>
                                    </g>
                                </svg>
                                <p className="text-xl century pt-3">DÉFINITION STRATÉGIQUE</p>
                            </div>
                            <div className="w-full sm:w-1/4 flex flex-col items-center justify-center pt-6" data-aos='zoom-in' data-aos-delay="400">
                                <svg className="svg-bleu" widh="80px" height="80px" version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
                                    <g>
                                        <g>
                                            <path d="M375.035,225.124c-2.452-6.204-9.469-9.242-15.675-6.792c-6.204,2.453-9.244,9.471-6.792,15.675    c6.139,15.525,9.25,31.933,9.25,48.77c0,73.14-59.503,132.645-132.645,132.645c-73.147,0-132.658-59.505-132.658-132.645    s59.511-132.645,132.658-132.645c16.896,0,33.332,3.131,48.852,9.306c6.197,2.469,13.222-0.56,15.689-6.757    c2.467-6.199-0.559-13.223-6.757-15.689c-18.374-7.312-37.816-11.019-57.783-11.019c-86.468,0-156.817,70.341-156.817,156.803    S142.703,439.58,229.173,439.58c86.461,0,156.803-70.341,156.803-156.803C385.976,262.886,382.294,243.49,375.035,225.124z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M449.506,219.607c-1.835-6.414-8.518-10.121-14.936-8.29c-6.414,1.836-10.125,8.523-8.29,14.936    c5.236,18.302,7.891,37.32,7.891,56.522c0,113.044-91.962,205.014-204.999,205.014c-113.044,0-205.013-91.969-205.013-205.014    S116.127,77.763,229.172,77.763c19.246,0,38.296,2.667,56.618,7.928c6.413,1.84,13.103-1.864,14.943-8.277    c1.841-6.413-1.864-13.103-8.277-14.943c-20.489-5.884-41.782-8.868-63.284-8.868C102.806,53.604,0,156.41,0,282.776    s102.806,229.173,229.172,229.173c126.358,0,229.158-102.806,229.158-229.173C458.33,261.324,455.361,240.071,449.506,219.607z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M313.278,275.401c-0.592-6.645-6.463-11.525-13.105-10.958c-6.645,0.593-11.552,6.461-10.958,13.106    c0.153,1.72,0.231,3.479,0.231,5.228c0,33.237-27.04,60.275-60.275,60.275c-33.244,0-60.29-27.04-60.29-60.275    c0.002-33.245,27.047-60.29,60.291-60.29c1.857,0,3.675,0.081,5.406,0.24c6.649,0.61,12.525-4.276,13.138-10.92    c0.612-6.643-4.277-12.524-10.92-13.138c-2.464-0.227-5.029-0.342-7.623-0.342c-46.565,0-84.449,37.882-84.449,84.448    c0,46.558,37.884,84.434,84.449,84.434c46.557,0,84.434-37.876,84.434-84.434C313.606,280.314,313.496,277.831,313.278,275.401z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M510.149,81.264c-3.753-9.062-12.517-14.918-22.326-14.918h-42.119V24.228c0-9.81-5.856-18.573-14.918-22.326    c-9.058-3.752-19.391-1.695-26.325,5.239l-70.376,70.377c-6.842,6.841-10.609,15.939-10.609,25.618v68.355l-98.17,98.17    c-4.717,4.717-4.717,12.366,0,17.084c2.358,2.358,5.45,3.538,8.541,3.538c3.091,0,6.183-1.18,8.541-3.538l98.171-98.171h68.355    c9.679,0,18.778-3.768,25.618-10.608l70.377-70.379C511.845,100.652,513.901,90.321,510.149,81.264z M347.635,103.135    c0.001-3.225,1.256-6.257,3.534-8.534l70.376-70.366v49.188l-73.911,73.911V103.135z M417.45,160.882    c-2.244,2.244-5.356,3.533-8.535,3.533h-44.196l73.909-73.909l49.192,0.006L417.45,160.882z"/>
                                        </g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                </svg>
                                <p className="text-xl century pt-3">CHOIX DES MOTS-CLÉS</p>
                            </div>
                            <div className="w-full sm:w-1/4 flex flex-col items-center justify-center pt-6" data-aos='zoom-in' data-aos-delay="400">
                                <svg className="svg-bleu" version="1.1" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 484.178 484.179">
                                    <g>
                                        <g>
                                            <path d="M408.792,0H141.352c-19.038,0-34.531,15.498-34.531,34.531v22.053H75.386c-19.038,0-34.53,15.498-34.53,34.531v358.533    c0,19.033,15.492,34.531,34.53,34.531h267.449c19.039,0,34.531-15.498,34.531-34.531v-22.053h31.426    c19.041,0,34.531-15.498,34.531-34.53V34.531C443.323,15.498,427.833,0,408.792,0z M349.743,449.648    c0,3.804-3.105,6.907-6.908,6.907H75.386c-3.802,0-6.907-3.104-6.907-6.907V91.115c0-3.807,3.105-6.907,6.907-6.907h31.435    v308.856c0,19.032,15.493,34.53,34.531,34.53h208.391V449.648L349.743,449.648z M415.7,393.065c0,3.803-3.098,6.907-6.908,6.907    H141.352c-3.811,0-6.906-3.104-6.906-6.907V34.531c0-3.806,3.096-6.907,6.906-6.907h267.439c3.811,0,6.908,3.102,6.908,6.907    V393.065z"/>
                                            <path d="M376.36,85.786H173.785c-7.628,0-13.813,6.19-13.813,13.811c0,7.636,6.186,13.813,13.813,13.813h202.573    c7.629,0,13.812-6.178,13.812-13.813C390.172,91.977,383.987,85.786,376.36,85.786z"/>
                                            <path d="M376.36,151.529H173.785c-7.628,0-13.813,6.188-13.813,13.811c0,7.634,6.186,13.813,13.813,13.813h202.573    c7.629,0,13.812-6.18,13.812-13.813C390.172,157.718,383.987,151.529,376.36,151.529z"/>
                                            <path d="M376.36,217.27H173.785c-7.628,0-13.813,6.191-13.813,13.814c0,7.633,6.186,13.811,13.813,13.811h202.573    c7.629,0,13.812-6.178,13.812-13.811C390.172,223.461,383.987,217.27,376.36,217.27z"/>
                                            <path d="M376.36,283.014H173.785c-7.628,0-13.813,6.191-13.813,13.811c0,7.638,6.186,13.813,13.813,13.813h202.573    c7.629,0,13.812-6.177,13.812-13.813C390.172,289.205,383.987,283.014,376.36,283.014z"/>
                                        </g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                </svg>
                                <p className="text-xl century pt-3">RÉDACTION WEB OPTIMISÉE</p>
                            </div>
                            <div className="w-full sm:w-1/4 flex flex-col items-center justify-center pt-6"  data-aos='zoom-in' data-aos-delay="600">
                                <svg className="svg-bleu" height="80px" viewBox="0 -25 424 424" width="80px">
                                    <path d="m167.289062 272.132812c-1.601562 0-3.214843-.550781-4.53125-1.671874l-45.296874-38.570313c-1.5625-1.332031-2.460938-3.277344-2.460938-5.332031 0-2.050782.902344-3.996094 2.460938-5.328125l45.296874-38.570313c2.941407-2.507812 7.359376-2.152344 9.867188.789063 2.503906 2.945312 2.152344 7.363281-.792969 9.867187l-39.035156 33.242188 39.035156 33.242187c2.945313 2.507813 3.296875 6.925781.792969 9.867188-1.386719 1.628906-3.355469 2.464843-5.335938 2.464843zm0 0"/>
                                    <path d="m256.710938 272.132812c-1.980469 0-3.949219-.835937-5.332032-2.464843-2.507812-2.941407-2.152344-7.359375.789063-9.867188l39.035156-33.242187-39.035156-33.242188c-2.941407-2.503906-3.296875-6.921875-.789063-9.867187 2.503906-2.941407 6.925782-3.296875 9.863282-.789063l45.296874 38.570313c1.5625 1.332031 2.460938 3.277343 2.460938 5.328125 0 2.054687-.898438 4-2.460938 5.332031l-45.296874 38.570313c-1.316407 1.121093-2.929688 1.671874-4.53125 1.671874zm0 0"/>
                                    <path d="m195.964844 301.0625c-.480469 0-.964844-.050781-1.453125-.152344-3.78125-.796875-6.203125-4.511718-5.40625-8.292968l28.230469-134.035157c.796874-3.78125 4.507812-6.203125 8.292968-5.40625 3.78125.796875 6.203125 4.507813 5.40625 8.292969l-28.230468 134.035156c-.695313 3.296875-3.601563 5.558594-6.839844 5.558594zm0 0"/>
                                    <path d="m377 374.085938h-330c-25.914062 0-47-21.082032-47-47v-280.085938c0-25.914062 21.085938-47 47-47h330c25.914062 0 47 21.085938 47 47v280.085938c0 25.917968-21.085938 47-47 47zm-330-360.085938c-18.195312 0-33 14.804688-33 33v280.085938c0 18.195312 14.804688 33 33 33h330c18.195312 0 33-14.804688 33-33v-280.085938c0-18.195312-14.804688-33-33-33zm0 0"/>
                                    <path d="m417 112.089844h-410c-3.867188 0-7-3.132813-7-7 0-3.863282 3.132812-7 7-7h410c3.867188 0 7 3.136718 7 7 0 3.867187-3.132812 7-7 7zm0 0"/>
                                    <path d="m119.601562 78.59375c-12.210937 0-22.152343-9.941406-22.152343-22.152344 0-12.214844 9.941406-22.152344 22.152343-22.152344 12.214844 0 22.152344 9.9375 22.152344 22.152344 0 12.210938-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.152343 3.65625-8.152343 8.152344s3.660156 8.152344 8.152343 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0"/>
                                    <path d="m51.539062 78.378906c-12.214843 0-22.152343-9.9375-22.152343-22.152344 0-12.214843 9.9375-22.152343 22.152343-22.152343 12.214844 0 22.152344 9.9375 22.152344 22.152343 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304687c-4.492187 0-8.152343 3.660156-8.152343 8.152343 0 4.496094 3.660156 8.152344 8.152343 8.152344 4.496094 0 8.152344-3.65625 8.152344-8.152344 0-4.492187-3.65625-8.152343-8.152344-8.152343zm0 0"/>
                                    <path d="m187.664062 78.804688c-12.210937 0-22.148437-9.9375-22.148437-22.152344 0-12.210938 9.9375-22.148438 22.148437-22.148438 12.214844 0 22.152344 9.9375 22.152344 22.148438 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.148437 3.65625-8.148437 8.152344s3.65625 8.152344 8.148437 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0"/>
                                </svg>
                                <p className="text-xl century pt-3">OPTIMISATION DES BALISES</p>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        Vous souhaitez améliorer votre visibilité sur Internet ?<br/>SOYEZ <span className="text-bleu">NATUREL !</span>
                        </h2><br/>
                        <hr className="blue"></hr>
                    </section>
                    <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
                    <div className="w-full xl:w-1/3 one px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                        <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                        <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                            <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>JE DÉCOUVRE LE RÉFÉRENCEMENT NATUREL
                            </h3>
                            <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                            Le <strong>référencement naturel (SEO)</strong> se distingue du <strong>référencement payant</strong> ou <strong>référencement Google Ads</strong>. Si ce dernier se concentre sur la <strong>sponsorisation de liens</strong>, le <strong>SEO</strong> demande d’être rigoureux, régulier et attentif pour faire progresser un site sur les <strong>moteurs de recherche</strong>.
                            </div>
                            <Button url="/contact-agence-web-toulouse/" text="Découvrir le SEO" position="center" />
            
                        </section>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 two px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                        <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
                        <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                            <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>JE VEUX ÊTRE ACCOMPAGNÉ POUR DÉFINIR MES BESOINS
                            </h3>
                            <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                            Vous souhaitez mettre en place une <strong>stratégie de référencement naturel</strong> pour <strong>améliorer la visibilité de votre site internet</strong> ? Nous définissons les contours de votre projet pour vous permettre de mettre en place une stratégie efficace selon vos besoins.
                            </div>
                            <Button url="/contact-agence-web-toulouse/" text="Prendre contact" position="center" />
                        </section>
                        </div>
                        </div>
                    <div className="w-full xl:w-1/3 three px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                        <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
                        <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                            <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>JE FAIS LE CHOIX DE CONSULTANTS POUR MON SEO
                            </h3>
                            <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                Optez pour la mise en place de votre <strong>stratégie de référencement naturel</strong>. Des <strong>consultants SEO</strong> vous accompagnent pour déterminer les objectifs de la <strong>création de votre site internet</strong> qui vous permettra d’<strong>optimiser votre visibilité en ligne</strong>, dans le but d'obtenir des contacts, ou bien de vendre vos produits.
                            </div>
                            <Button url="/contact-agence-web-toulouse/" text="Prendre rendez-vous" position="center" />
                        </section>
                        
                        </div>
            
                    </div>
                    </section>
                    <section className="w-full h-full flex flex-col justify-center items-center px-4 pt-12 pb-0 mt-2 bg-darkgrey text-white">
                        <div className="w-full">
                            <h2 data-aos='fade-right' className="text-center text-3xl century">
                            <span className="text-bleu">/</span>RÉFÉRENCEMENT SEO (Search Engine Optimization)
                            </h2>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row mx-auto px-6 lg:px-32 py-6 my-4 lg:mt-10 lg:mb-4 lg:py-2 text-justify">
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>RÉFÉRENCEMENT : DÉFINIR SES BESOINS
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Définir vos besoins de façon précise, en termes de visibilité, est important pour faire le choix des priorités pour déterminer la structure de votre site.</span>
                            </h4>
                            <p>Nous mettons en place une <strong>stratégie de référencement naturel</strong> basée sur vos besoins en termes de <strong>visibilité</strong>. C’est pourquoi il est important de les définir le plus précisément possible, et ce, dès le départ. Le <strong>référencement naturel</strong> est un travail de longue haleine, c’est pourquoi il est nécessaire de s’appuyer sur des bases pérennes.</p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>RÉFÉRENCEMENT : ÉTUDE DE LA CONCURRENCE
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Réaliser une étude de la concurrence est nécessaire pour se positionner le plus précisément sur les bons mots-clés et être visible.</span>
                            </h4>
                            <p>Nous disposons d’un outil complet pour étudier votre <strong>concurrence en ligne</strong> afin d’être toujours en <strong>première page</strong> et <strong>référencer votre site</strong> sur les mots clés de vos concurrents. Nous devons savoir contre quoi et contre qui nous nous battons.</p>
                        </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row mx-auto px-6 lg:px-32 py-6 my-4 lg:my-2 lg:py-2 text-justify">
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>RÉFÉRENCEMENT : INDICATEURS DE PERFORMANCE
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <strong className="font-bold">Maîtriser son SEO, c’est vous permettre de connaître le potentiel de votre site internet en termes de retour sur investissement.</strong>
                            </h4>
                            <p>Votre <strong>référencement Google</strong> doit être pertinent, il est étudié en fonction d’indicateurs de performance. Notre objectif est de vous apporter un maximum de contacts pour vous permettre d’obtenir un <strong>retour sur investissement</strong> sur le long terme grâce à votre présence dans les <strong>premiers résultats des moteurs de recherches</strong>.</p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>RÉFÉRENCEMENT : STATISTIQUES DE RÉFÉRENCEMENT NATUREL
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Évaluer sa stratégie de référencement naturel est essentiel pour déterminer son efficacité. Les statistiques sont là pour vous guider.</span>
                            </h4>
                            <p>Nous élaborons une <strong>stratégie de référencement naturel</strong> cohérente avec vos objectifs. Grâce à une collaboration constante et régulière avec votre <strong>référenceur</strong>, le <strong>référencement d’un site</strong> se fait selon le développement de votre entreprise et son activité.</p>
                        </div>
                        </div>
                    </section>
                    <section className="w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 bg-cover mb-24" style={{background:'#000000ba url( '+ bgDev +')', backgroundSize:'cover', backgroundBlendMode: 'overlay'}}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h2 data-aos='fade-right' className="text-center text-white text-2xl md:text-4xl century">
                            <span className="text-bleu">/</span>Vous souhaitez améliorer votre visibilité dans les résultats de recherche ?
                            </h2>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                            {/* <RappelForm /> */}
                            <RoundButton url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>

                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row text-center my-12">
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                                <svg className="svg-white" width="80px" height="80px" version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
                                    <g>
                                        <g>
                                            <path d="M503.983,4.276H256H8.017C3.589,4.276,0,7.865,0,12.292v102.614v384.802c0,4.427,3.589,8.017,8.017,8.017H256h247.983    c4.427,0,8.017-3.589,8.017-8.017V114.906V12.292C512,7.865,508.411,4.276,503.983,4.276z M495.967,491.691H256H16.033V122.923    H256h239.967V491.691z M495.967,106.889H256H16.033v-86.58H256h239.967V106.889z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M427.023,38.48H332.96c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h94.063    c4.427,0,8.017-3.589,8.017-8.017C435.04,42.07,431.45,38.48,427.023,38.48z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M469.779,38.48h-17.102c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h17.102    c4.427,0,8.017-3.589,8.017-8.017C477.795,42.07,474.206,38.48,469.779,38.48z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M264.551,29.929c-3.835,0-7.612,0.647-11.222,1.924c-0.009,0.003-0.016,0.008-0.025,0.01    c-13.412,4.754-22.423,17.504-22.423,31.737c0,14.232,9.011,26.982,22.422,31.737c0.009,0.003,0.016,0.008,0.025,0.011    c3.611,1.276,7.387,1.924,11.222,1.924c18.566,0,33.67-15.105,33.67-33.67S283.117,29.929,264.551,29.929z M264.551,81.236    c-2.011,0-3.988-0.339-5.88-1.007c-0.001,0-0.002-0.001-0.003-0.001c-7.03-2.488-11.754-9.17-11.754-16.629    s4.723-14.14,11.755-16.629c0.001,0,0.002,0,0.003-0.001c1.891-0.669,3.869-1.007,5.88-1.007c9.725,0,17.637,7.912,17.637,17.637    S274.276,81.236,264.551,81.236z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M170.489,29.929c-18.566,0-33.67,15.105-33.67,33.67s15.105,33.67,33.67,33.67s33.67-15.104,33.67-33.67    S189.054,29.929,170.489,29.929z M170.489,81.236c-9.725,0-17.637-7.912-17.637-17.637s7.912-17.637,17.637-17.637    s17.637,7.912,17.637,17.637S180.213,81.236,170.489,81.236z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M76.426,29.929c-18.566,0-33.67,15.105-33.67,33.67s15.105,33.67,33.67,33.67s33.67-15.104,33.67-33.67    S94.992,29.929,76.426,29.929z M76.426,81.236c-9.725,0-17.637-7.912-17.637-17.637s7.912-17.637,17.637-17.637    s17.637,7.912,17.637,17.637S86.151,81.236,76.426,81.236z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M480.454,214.537l-84.651-84.653c-3.131-3.131-8.207-3.131-11.338,0L330.5,183.85H256H72.15    c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H256h58.466l-64.135,64.135l-56.65,56.65H72.15    c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h105.497l-17.278,17.278c-0.009,0.009-0.017,0.017-0.027,0.027    l-0.014,0.014c-0.025,0.025-0.045,0.051-0.069,0.077c-0.159,0.164-0.314,0.332-0.461,0.51c-0.055,0.065-0.1,0.135-0.153,0.202    c-0.108,0.14-0.216,0.28-0.315,0.429c-0.065,0.097-0.122,0.199-0.183,0.299c-0.074,0.122-0.151,0.243-0.218,0.37    c-0.068,0.128-0.127,0.26-0.188,0.39c-0.049,0.105-0.102,0.207-0.146,0.315c-0.067,0.162-0.124,0.329-0.181,0.495    c-0.028,0.082-0.06,0.161-0.086,0.245c-0.064,0.212-0.117,0.426-0.162,0.642c-0.009,0.042-0.022,0.081-0.031,0.123l-0.005,0.025    c-0.002,0.01-0.004,0.019-0.005,0.029l-19.862,99.316H72.15c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017    h72.641c0.012,0,0.023,0.001,0.036,0.001c0.003,0,0.005,0,0.009,0c0.003,0,0.005,0,0.009,0c0.012,0,0.024-0.001,0.036-0.001h6.276    c2.139,0,4.077-0.843,5.514-2.208l35.038-7.008c0.005-0.001,0.01-0.002,0.015-0.003l0.032-0.006l60.415-12.083    c0.007-0.001,0.015-0.003,0.023-0.004l0.028-0.005c0.047-0.01,0.091-0.025,0.138-0.035c0.21-0.046,0.419-0.096,0.625-0.158    c0.088-0.027,0.171-0.061,0.258-0.09c0.161-0.056,0.324-0.11,0.482-0.175c0.112-0.047,0.219-0.102,0.328-0.153    c0.126-0.059,0.253-0.115,0.377-0.182c0.13-0.07,0.253-0.148,0.378-0.223c0.097-0.059,0.197-0.114,0.291-0.177    c0.149-0.099,0.29-0.208,0.431-0.316c0.066-0.051,0.136-0.097,0.201-0.152c0.175-0.144,0.341-0.297,0.503-0.455    c0.027-0.027,0.057-0.048,0.082-0.075l0.016-0.016c0.009-0.009,0.017-0.016,0.025-0.025l5.309-5.309l110.306-110.306    l48.015-48.015l60.465-60.465C483.584,222.743,483.584,217.667,480.454,214.537z M202.669,334.353    c0.001-0.001,0.002-0.002,0.003-0.002l58.998-58.998l68-68l15.872,15.873L193.208,375.56l-15.873-15.873L202.669,334.353z     M356.878,234.564l18.896,18.896l-69.556,69.556l-55.886,55.886l-26.891,26.891l-18.896-18.896L356.878,234.564z M155.055,455.283    l3.774-18.869l15.095,15.095L155.055,455.283z M192.819,447.731l-30.211-30.211l8.314-41.57l16.618,16.618l30.233,30.233    l16.618,16.617L192.819,447.731z M360.637,323.016L250.65,433.002l-15.873-15.872l26.891-26.891l55.886-55.886l69.556-69.556    l15.872,15.872L360.637,323.016z M414.32,269.332l-21.54-21.54l-30.234-30.233l-21.54-21.541l49.129-49.128l73.314,73.314    L414.32,269.332z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M394.211,169.096c-3.13-3.131-8.207-3.131-11.337,0l-19.24,19.24c-3.131,3.131-3.131,8.207,0,11.337    c1.565,1.565,3.617,2.348,5.668,2.348s4.103-0.782,5.668-2.348l19.24-19.24C397.342,177.302,397.342,172.225,394.211,169.096z"/>
                                        </g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                </svg>
                                <p className="text-xl text-white century pt-3">CONTENUS OPTIMISÉS</p>
                            </div>
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center my-6" data-aos='zoom-in' data-aos-delay="400">
                                <svg className="svg-white" viewBox="0 0 64 64" width="80px" height="80px">
                                    <g id="Keyboard"><path d="M42,31H22a1,1,0,0,1,0-2H42a1,1,0,0,1,0,2Z"/>
                                        <path d="M42,26H22a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1H42a1,1,0,0,1,1,1v3A1,1,0,0,1,42,26ZM23,24H41V23H23Z"/>
                                        <path d="M49,26H46a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,49,26Zm-2-2h1V23H47Z"/>
                                        <path d="M56,26H53a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,56,26Zm-2-2h1V23H54Z"/>
                                        <path d="M18,26H15a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,18,26Zm-2-2h1V23H16Z"/>
                                        <path d="M11,26H8a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,11,26ZM9,24h1V23H9Z"/>
                                        <path d="M48,19H45a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,48,19Zm-2-2h1V16H46Z"/>
                                        <path d="M55,19H52a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,55,19Zm-2-2h1V16H53Z"/>
                                        <path d="M34,19H31a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,34,19Zm-2-2h1V16H32Z"/>
                                        <path d="M41,19H38a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,41,19Zm-2-2h1V16H39Z"/>
                                        <path d="M13,19H10a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,13,19Zm-2-2h1V16H11Z"/>
                                        <path d="M27,19H24a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,27,19Zm-2-2h1V16H25Z"/>
                                        <path d="M20,19H17a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,20,19Zm-2-2h1V16H18Z"/>
                                        <path d="M48,12H45a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,48,12Zm-2-2h1V9H46Z"/>
                                        <path d="M55,12H52a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,55,12Zm-2-2h1V9H53Z"/>
                                        <path d="M34,12H31a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,34,12Zm-2-2h1V9H32Z"/>
                                        <path d="M41,12H38a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,41,12Zm-2-2h1V9H39Z"/>
                                        <path d="M13,12H10a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,13,12Zm-2-2h1V9H11Z"/>
                                        <path d="M27,12H24a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,27,12Zm-2-2h1V9H25Z"/>
                                        <path d="M20,12H17a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,20,12Zm-2-2h1V9H18Z"/>
                                        <path d="M21.261,38.011A3.043,3.043,0,0,0,20,38.17V33.112a3.077,3.077,0,0,0-2.739-3.1,3.026,3.026,0,0,0-1.388.207,3.034,3.034,0,0,0-2.612-2.207,3.027,3.027,0,0,0-3.157,2.2,3.063,3.063,0,0,0-3.212.664A2.944,2.944,0,0,0,6,33v1.171a3.058,3.058,0,0,0-3.108.7A2.944,2.944,0,0,0,2,37V51.343a4.966,4.966,0,0,0,1.464,3.535l.658.658A3.02,3.02,0,0,1,5,57.657V61a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V57.657a3.02,3.02,0,0,1,.878-2.121l.658-.658A4.966,4.966,0,0,0,24,51.343V41.112A3.077,3.077,0,0,0,21.261,38.011ZM22,51.343a3.02,3.02,0,0,1-.878,2.121l-.658.658A4.966,4.966,0,0,0,19,57.657V60H7V57.657a4.966,4.966,0,0,0-1.464-3.535l-.658-.658A3.02,3.02,0,0,1,4,51.343V37a.974.974,0,0,1,.306-.712A.957.957,0,0,1,5,36a1,1,0,0,1,1,1v6a1,1,0,0,0,2,0V33a.974.974,0,0,1,.306-.712A.957.957,0,0,1,9,32a1,1,0,0,1,1,1V43a1,1,0,0,0,2,0V31a.974.974,0,0,1,.306-.712A.938.938,0,0,1,13.092,30,1.082,1.082,0,0,1,14,31.112V43a1,1,0,0,0,2,0V33a.974.974,0,0,1,.306-.712A.953.953,0,0,1,17.092,32,1.082,1.082,0,0,1,18,33.112V49a1,1,0,0,0,2,0V41a.974.974,0,0,1,.306-.712A.943.943,0,0,1,21.092,40,1.082,1.082,0,0,1,22,41.112Z"/>
                                        <path d="M58,34.171V33a2.925,2.925,0,0,0-.873-2.108A3.063,3.063,0,0,0,53.9,30.21a2.874,2.874,0,0,0-.769-1.318,2.975,2.975,0,0,0-2.389-.881,3.033,3.033,0,0,0-2.611,2.208,3.029,3.029,0,0,0-1.389-.208A3.077,3.077,0,0,0,44,33.112v5.059a2.99,2.99,0,0,0-1.262-.16A3.077,3.077,0,0,0,40,41.112V51.343a4.972,4.972,0,0,0,1.464,3.535l.657.658A3.017,3.017,0,0,1,43,57.657V61a1,1,0,0,0,1,1H58a1,1,0,0,0,1-1V57.657a3.017,3.017,0,0,1,.88-2.122l.655-.657A4.968,4.968,0,0,0,62,51.343V37a2.925,2.925,0,0,0-.873-2.108A3.057,3.057,0,0,0,58,34.171Zm2,17.172a3.017,3.017,0,0,1-.88,2.122l-.655.657A4.968,4.968,0,0,0,57,57.657V60H45V57.657a4.972,4.972,0,0,0-1.464-3.535l-.657-.658A3.017,3.017,0,0,1,42,51.343V41.112A1.082,1.082,0,0,1,42.907,40,1.011,1.011,0,0,1,44,41v8a1,1,0,0,0,2,0V33.112A1.082,1.082,0,0,1,46.907,32a.975.975,0,0,1,.806.3A.965.965,0,0,1,48,33V43a1,1,0,0,0,2,0V31.112A1.082,1.082,0,0,1,50.907,30a.977.977,0,0,1,.806.3A.965.965,0,0,1,52,31V43a1,1,0,0,0,2,0V33a1,1,0,0,1,1-1,.976.976,0,0,1,.713.306A.965.965,0,0,1,56,33V43a1,1,0,0,0,2,0V37a1,1,0,0,1,1-1,.976.976,0,0,1,.713.306A.965.965,0,0,1,60,37Z"/>
                                        <path d="M59,2H5A3,3,0,0,0,2,5V27a3,3,0,0,0,3,3,1,1,0,0,0,0-2,1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H59a1,1,0,0,1,1,1V27a1,1,0,0,1-1,1,1,1,0,0,0,0,2,3,3,0,0,0,3-3V5A3,3,0,0,0,59,2Z"/>
                                        <path d="M42,31H22a1,1,0,0,1,0-2H42a1,1,0,0,1,0,2Z"/>
                                        <path d="M42,26H22a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1H42a1,1,0,0,1,1,1v3A1,1,0,0,1,42,26ZM23,24H41V23H23Z"/>
                                        <path d="M49,26H46a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,49,26Zm-2-2h1V23H47Z"/>
                                        <path d="M56,26H53a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,56,26Zm-2-2h1V23H54Z"/>
                                        <path d="M18,26H15a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,18,26Zm-2-2h1V23H16Z"/>
                                        <path d="M11,26H8a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,11,26ZM9,24h1V23H9Z"/>
                                        <path d="M48,19H45a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,48,19Zm-2-2h1V16H46Z"/>
                                        <path d="M55,19H52a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,55,19Zm-2-2h1V16H53Z"/>
                                        <path d="M34,19H31a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,34,19Zm-2-2h1V16H32Z"/>
                                        <path d="M41,19H38a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,41,19Zm-2-2h1V16H39Z"/>
                                        <path d="M13,19H10a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,13,19Zm-2-2h1V16H11Z"/>
                                        <path d="M27,19H24a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,27,19Zm-2-2h1V16H25Z"/>
                                        <path d="M20,19H17a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,20,19Zm-2-2h1V16H18Z"/>
                                        <path d="M48,12H45a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,48,12Zm-2-2h1V9H46Z"/>
                                        <path d="M55,12H52a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,55,12Zm-2-2h1V9H53Z"/>
                                        <path d="M34,12H31a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,34,12Zm-2-2h1V9H32Z"/>
                                        <path d="M41,12H38a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,41,12Zm-2-2h1V9H39Z"/>
                                        <path d="M13,12H10a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,13,12Zm-2-2h1V9H11Z"/>
                                        <path d="M27,12H24a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,27,12Zm-2-2h1V9H25Z"/>
                                        <path d="M20,12H17a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,20,12Zm-2-2h1V9H18Z"/>
                                    </g>
                                </svg>
                                <p className="text-xl century text-white pt-3">MOTS-CLÉS PERTINENTS</p>
                            </div>
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center"  data-aos='zoom-in' data-aos-delay="600">
                                <svg className="svg-white" height="80px" viewBox="0 0 512 512" width="80px">
                                    <path d="m504.5 0h-312.832031c-4.144531 0-7.5 3.355469-7.5 7.5s3.355469 7.5 7.5 7.5h305.332031v65h-374.742188v-65h38.5c4.144532 0 7.5-3.355469 7.5-7.5s-3.355468-7.5-7.5-7.5h-46c-4.140624 0-7.5 3.355469-7.5 7.5l.003907 119.5h-99.761719c-4.144531 0-7.5 3.355469-7.5 7.5v313.167969c0 4.140625 3.355469 7.5 7.5 7.5s7.5-3.359375 7.5-7.5v-225.667969h433c4.144531 0 7.5-3.355469 7.5-7.5s-3.355469-7.5-7.5-7.5h-433v-65h482v65h-17.167969c-4.140625 0-7.5 3.355469-7.5 7.5s3.359375 7.5 7.5 7.5h17.167969v275h-482v-17c0-4.144531-3.355469-7.5-7.5-7.5s-7.5 3.355469-7.5 7.5v24.5c0 4.144531 3.355469 7.5 7.5 7.5h497c4.144531 0 7.5-3.355469 7.5-7.5v-497c0-4.144531-3.355469-7.5-7.5-7.5zm-382.238281 127v-32h374.738281v32zm0 0"/>
                                    <path d="m138.257812 47c0 12.40625 10.09375 22.5 22.5 22.5s22.5-10.09375 22.5-22.5-10.09375-22.5-22.5-22.5-22.5 10.09375-22.5 22.5zm30 0c0 4.136719-3.363281 7.5-7.5 7.5-4.136718 0-7.5-3.363281-7.5-7.5s3.363282-7.5 7.5-7.5c4.136719 0 7.5 3.363281 7.5 7.5zm0 0"/>
                                    <path d="m243.257812 47c0-12.40625-10.09375-22.5-22.5-22.5s-22.5 10.09375-22.5 22.5 10.09375 22.5 22.5 22.5 22.5-10.09375 22.5-22.5zm-30 0c0-4.136719 3.363282-7.5 7.5-7.5 4.136719 0 7.5 3.363281 7.5 7.5s-3.363281 7.5-7.5 7.5c-4.136718 0-7.5-3.363281-7.5-7.5zm0 0"/>
                                    <path d="m303.257812 47c0-12.40625-10.09375-22.5-22.5-22.5s-22.5 10.09375-22.5 22.5 10.09375 22.5 22.5 22.5 22.5-10.09375 22.5-22.5zm-30 0c0-4.136719 3.363282-7.5 7.5-7.5 4.136719 0 7.5 3.363281 7.5 7.5s-3.363281 7.5-7.5 7.5c-4.136718 0-7.5-3.363281-7.5-7.5zm0 0"/>
                                    <path d="m31 174c0 12.40625 10.09375 22.5 22.5 22.5s22.5-10.09375 22.5-22.5-10.09375-22.5-22.5-22.5-22.5 10.09375-22.5 22.5zm30 0c0 4.136719-3.363281 7.5-7.5 7.5s-7.5-3.363281-7.5-7.5 3.363281-7.5 7.5-7.5 7.5 3.363281 7.5 7.5zm0 0"/>
                                    <path d="m91 174c0 12.40625 10.09375 22.5 22.5 22.5s22.5-10.09375 22.5-22.5-10.09375-22.5-22.5-22.5-22.5 10.09375-22.5 22.5zm30 0c0 4.136719-3.363281 7.5-7.5 7.5s-7.5-3.363281-7.5-7.5 3.363281-7.5 7.5-7.5 7.5 3.363281 7.5 7.5zm0 0"/>
                                    <path d="m151 174c0 12.40625 10.09375 22.5 22.5 22.5s22.5-10.09375 22.5-22.5-10.09375-22.5-22.5-22.5-22.5 10.09375-22.5 22.5zm30 0c0 4.136719-3.363281 7.5-7.5 7.5s-7.5-3.363281-7.5-7.5 3.363281-7.5 7.5-7.5 7.5 3.363281 7.5 7.5zm0 0"/>
                                    <path d="m231.902344 268.027344h-176c-4.140625 0-7.5 3.359375-7.5 7.5v148c0 4.144531 3.359375 7.5 7.5 7.5h176c4.144531 0 7.5-3.355469 7.5-7.5v-148c0-4.140625-3.355469-7.5-7.5-7.5zm-7.5 15v63.082031l-45.96875 39.960937-60.355469-46.183593c-4.285156-3.277344-10.339844-3.078125-14.398437.484375l-40.277344 35.34375v-92.6875zm-161 133v-20.355469l47.929687-42.058594 81.566407 62.414063zm161 0h-6.816406l-26.992188-20.648438 33.808594-29.394531zm0 0"/>
                                    <path d="m184.203125 342.207031c14.5625 0 26.414063-11.851562 26.414063-26.417969 0-14.5625-11.851563-26.414062-26.414063-26.414062-14.566406 0-26.417969 11.851562-26.417969 26.414062 0 14.566407 11.851563 26.417969 26.417969 26.417969zm0-37.832031c6.292969 0 11.414063 5.121094 11.414063 11.414062 0 6.296876-5.121094 11.417969-11.414063 11.417969-6.296875 0-11.417969-5.121093-11.417969-11.417969 0-6.292968 5.121094-11.414062 11.417969-11.414062zm0 0"/>
                                    <path d="m283.703125 344.5h163.964844c4.140625 0 7.5-3.359375 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5h-163.964844c-4.144531 0-7.5 3.355469-7.5 7.5 0 4.140625 3.355469 7.5 7.5 7.5zm0 0"/>
                                    <path d="m283.703125 301.953125h81.980469c4.144531 0 7.5-3.355469 7.5-7.5 0-4.140625-3.355469-7.5-7.5-7.5h-81.980469c-4.144531 0-7.5 3.359375-7.5 7.5 0 4.144531 3.355469 7.5 7.5 7.5zm0 0"/>
                                    <path d="m283.703125 380.5h163.964844c4.140625 0 7.5-3.359375 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5h-163.964844c-4.144531 0-7.5 3.355469-7.5 7.5 0 4.140625 3.355469 7.5 7.5 7.5zm0 0"/>
                                    <path d="m283.703125 416.5h163.964844c4.140625 0 7.5-3.359375 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5h-163.964844c-4.144531 0-7.5 3.355469-7.5 7.5 0 4.140625 3.355469 7.5 7.5 7.5zm0 0"/>
                                    <path d="m54.472656 463.894531c0 4.140625 3.355469 7.5 7.5 7.5h385.695313c4.140625 0 7.5-3.359375 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5h-385.695313c-4.144531 0-7.5 3.355469-7.5 7.5zm0 0"/>
                                </svg>
                                <p className="text-xl century text-white pt-3">PAGES OPTIMISÉES</p>
                            </div>
                        </div>
                    </section>
                    

                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center px-4 mt-12 mb-3">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Référencement à Toulouse : Que faisons-nous ?
                        </h2>
                        <hr className="blue"></hr>
                        <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Pour gagner en visibilité, nous devons rendre les contenus de votre site internet pertinents pour répondre aux attentes de vos utilisateurs, mais aussi de Google par le biais de l’optimisation SEO :</h4>
                    </section>
                    <section  className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                        <div className="w-full md:w-3/4 py-0 flex justify-end">
                            <Accordion>
                                <div className="w-full" label="GOOGLE PANDA">
                                <svg width="30px" className="mx-auto block" viewBox="0 0 100 125"><g><path d="M22.295,30.17c0,0-8.622-6.287-5.826-12.936c1.604-3.815,5.134-7.046,9.494-6.831c4.934,0.244,6.606,4.383,7.739,8.539   C33.703,18.942,26.944,22.818,22.295,30.17z"/><path d="M66.727,24.139c0,0,4.728,4.679,6.915,12.948c0,0,11.213,1.549,11.812-7.874c0.6-9.424-8.004-11.486-12.613-10.119   C68.084,20.504,66.772,22.941,66.727,24.139z"/><path d="M20.353,36.684c-9.789,14.062-8.016,41.907,11.094,49.619c9.117,3.68,24.254,4.998,33.073,0.196   c6.449-3.508,10.448-11.523,11.524-18.096c0.444-2.709,0.914-5.322,0.952-8.06c0.027-1.977,0.042-6.647-1.081-8.935   c0,0-1.984-2.668-2.17,0.291c-0.518,8.285-1.304,17.588-10.548,22.032c-8.312,3.997-19.357,3.775-27.741-0.024   c-8.501-3.854-16.037-11.842-17.084-20.635c-0.67-5.625,1.364-10.127,3.053-15.307C21.926,36.229,21.022,35.722,20.353,36.684z"/><path d="M26.079,41.48c1.437-2.335,4.875-4.96,6.403-6.218c1.527-1.257,6.801-4.471,7.61,5.589   c0.808,10.06-6.198,13.833-7.995,13.744C30.3,54.505,21.587,52.079,26.079,41.48"/><path d="M54.168,43.804c0,0-3.735-5.749,0-8.084c3.737-2.336,6.123-2.503,10.445,2.886c4.321,5.389,4.07,11.129,1.914,13.643   c-2.155,2.515-7.364,3.104-9.521-2.042S54.168,43.804,54.168,43.804z"/><path d="M52.487,56.574c-0.27-2.965-1.078-4.223-5.4-4.312c-4.323-0.09-4.212,4.312-4.212,4.312c0,3.952,3.233,4.67,5.39,4.671   C50.421,61.245,52.757,59.538,52.487,56.574z"/></g></svg>
                                <br/>
                                <p><span className="font-bold"><strong>Google Panda</strong> est un filtre appliqué à l'<strong>algorithme de Google</strong> en 2011.</span> Ce <strong>filtre algorithmique</strong> concerne le contenu présent sur les <strong>pages web</strong>. <br/><br/> <strong>Google Panda</strong> nous impose une qualité irréprochable du contenu avec l'utilisation d'un champ sémantique riche autour des <strong>mots clés</strong>. Nous devons rédiger du <strong>contenu optimisé pour les mots clés</strong> stratégiques à travailler et en lien avec la thématique de chaque page. <span className="font-bold">Les <strong>rédactions SEO</strong> que nous vous proposons sont effectuées par nos <strong>référenceurs web</strong> pour la <strong>création d'un contenu unique</strong> et parfaitement adapté à <strong>votre site web</strong> ainsi qu'à votre entreprise.</span> <br/><br/><span className="font-bold">Nos mots d’ordres : rédaction, rédaction et rédaction.</span></p>
                                </div>
                                <div label="GOOGLE PINGOUIN">
                                  <svg width="30px" className="mx-auto block" viewBox="0 0 100 125"><g><g><path d="M85.774,67.693c-3.098-10.841-17.553-23.748-22.2-34.589c-1.38-2.601-3.248-7.922-3.613-10.842    c-0.517-4.13,1.238-9.499,2.064-10.325c1.549-1.548,8.262-5.162,8.777-6.195c0.245-0.49-1.048-1.329-1.549-1.549    c-1.539-0.673-5.163,0-6.712-0.258C56.863,1.096,52.733,0.58,49.12,2.128c-5.679,2.582-6.711,9.292-6.711,11.874    c0,2.328-0.131,6.999-0.517,9.292c-0.156,0.927-0.666,2.75-1.032,3.615c-1.033,3.614-3.615,7.228-5.68,9.809    c-1.486,1.859-13.939,16.005-16.004,20.135c-1.854,3.593-6.711,11.874-4.646,14.971c2.106,0.302,2.581-6.711,12.927-14.971    c5.141-4.646,5.141-6.194,6.045-9.293c-0.904,15.489,1.521,23.777,2.968,31.493c0.774,4.13,0.808,5.611,0,7.228    c-2.324,4.646-6.454,4.646-7.486,6.454c1.549,2.322,9.83-0.971,12.907,0c0,2.839,6.195,2.839,8.776,3.354    c0.532,0.208,1.033,0.517,1.548,1.033c0.517,0,0.517-0.517,1.549-0.517c1.033,0,1.033,0.646,2.065,0.646    c0.517,0,0.302-0.645,1.033-0.645c0.517,0,1.032,0.258,1.549,0.258c0.517-0.258,0.517-0.774,0.517-1.29    c0-0.204-0.358-0.665,0-0.517c0.421,0.175,1.291,1.001,1.549,1.032c0.258-0.031,0.774-0.79,1.032-1.032    c0.259-0.273,1.549,0.513,2.064,0.517c0.517-0.52,0-1.032,0.516-1.548c0.518-0.518,1.55,0.514,2.066,0.516    c0.516-0.518,0.516-1.549,0-2.066c-0.517-0.517-5.164-2.065-7.745-2.581c-0.717-0.485,3.82-9.533,4.646-11.874    c3.099-8.777,3.099-26.329,3.099-26.329c1.032,3.098,5.306,6.3,7.227,8.26c2.893,2.95,9.809,13.422,11.357,11.873    C85.258,71.308,86.06,68.694,85.774,67.693z M63.574,67.693c-0.516,6.195-5.678,23.232-8.775,20.651    c-1.122-0.936-0.517-3.614-1.549-8.26c-0.517,3.613-0.517,7.743-2.065,9.292c-1.486,1.486-6.636-0.215-8.26-1.549    c-3.222-2.647-5.736-11.343-6.196-15.488c-1.032-9.292,3.099-17.036,3.615-19.101c0.751-3.005-0.517-9.294-0.775-11.875    c-0.396-3.963,1.808-11.357,3.727-15.487c1.02-2.194,1.179-8.777,2.695-9.293c1.797-0.611,3.729,4.466,6.743,4.13    c4.646-0.516,4.646-4.13,5.55-4.13c0.129,0.516-0.137,5.438,0.129,7.227c0.667,4.484,4.936,12.567,5.679,17.037    C65.192,47.47,64.132,61.005,63.574,67.693z"/></g><g><path d="M-71.226,71.693c-3.098-10.841-17.553-23.748-22.2-34.589c-1.38-2.601-3.248-7.922-3.613-10.842    c-0.517-4.13,1.238-9.499,2.064-10.325c1.549-1.548,8.262-5.162,8.777-6.195c0.245-0.49-1.048-1.329-1.549-1.549    c-1.539-0.673-5.163,0-6.712-0.258c-5.679-2.839-9.809-3.355-13.422-1.807c-5.679,2.582-6.711,9.292-6.711,11.874    c0,2.328-0.131,6.999-0.517,9.292c-0.156,0.927-0.666,2.75-1.032,3.615c-1.033,3.614-3.615,7.228-5.68,9.809    c-1.486,1.859-13.939,16.005-16.004,20.135c-1.854,3.593-6.711,11.874-4.646,14.971c2.106,0.302,2.581-6.711,12.927-14.971    c5.141-4.646,5.141-6.194,6.045-9.294c-0.904,15.489,1.521,23.777,2.968,31.493c0.774,4.13,0.808,5.611,0,7.228    c-2.324,4.646-6.454,4.646-7.486,6.454c1.549,2.322,9.83-0.971,12.907,0c0,2.839,6.195,2.839,8.776,3.354    c0.532,0.208,1.033,0.517,1.548,1.033c0.517,0,0.517-0.517,1.549-0.517c1.033,0,1.033,0.646,2.065,0.646    c0.517,0,0.302-0.645,1.033-0.645c0.517,0,1.032,0.258,1.549,0.258c0.517-0.258,0.517-0.774,0.517-1.29    c0-0.204-0.358-0.665,0-0.517c0.421,0.175,1.291,1.001,1.549,1.032c0.258-0.031,0.774-0.79,1.032-1.032    c0.259-0.273,1.549,0.513,2.064,0.517c0.517-0.52,0-1.032,0.516-1.548c0.518-0.518,1.55,0.514,2.066,0.516    c0.516-0.518,0.516-1.549,0-2.066c-0.517-0.517-5.164-2.065-7.745-2.581c-0.717-0.485,3.82-9.533,4.646-11.874    c3.099-8.777,3.099-26.329,3.099-26.329c1.032,3.098,5.306,6.3,7.227,8.26c2.893,2.95,9.809,13.422,11.357,11.873    C-71.742,75.308-70.94,72.694-71.226,71.693z M-93.426,71.693c-0.516,6.195-5.678,23.232-8.775,20.651    c-1.122-0.936-0.517-3.614-1.549-8.26c-0.517,3.613-0.517,7.743-2.065,9.292c-1.486,1.486-6.636-0.215-8.26-1.549    c-3.222-2.647-5.736-11.343-6.196-15.488c-1.032-9.292,3.099-17.036,3.615-19.101c0.751-3.005-0.517-9.294-0.775-11.875    c-0.396-3.963,1.808-11.357,3.727-15.487c1.02-2.194,1.179-8.777,2.695-9.293c1.797-0.611,3.729,4.466,6.743,4.13    c4.646-0.516,4.646-4.13,5.55-4.13c0.129,0.516-0.137,5.438,0.129,7.227c0.667,4.484,4.936,12.567,5.679,17.037    C-91.808,51.471-92.868,65.005-93.426,71.693z"/><path fill="#000000" d="M-98.588,27.811c-0.266-1.79,0-6.711-0.129-7.227c-0.904,0-0.904,3.614-5.55,4.13    c-3.015,0.336-4.946-4.741-6.743-4.13c-1.517,0.516-1.676,7.099-2.695,9.293c-1.919,4.13-4.123,11.524-3.727,15.487    c0.259,2.581,1.526,8.87,0.775,11.875c-0.517,2.064-4.647,9.809-3.615,19.101c0.46,4.146,2.974,12.841,6.196,15.488    c1.624,1.334,6.774,3.035,8.26,1.549c1.549-1.549,1.549-5.679,2.065-9.292c1.032,4.646,0.427,7.324,1.549,8.26    c3.098,2.581,8.26-14.456,8.775-20.651c0.558-6.688,1.618-20.223,0.517-26.846C-93.652,40.377-97.921,32.294-98.588,27.811z"/></g></g></svg>  
                                    <br/>
                                    <p><span className="font-bold"><strong>Google Pingouin (ou Penguin)</strong> est une <strong>mise à jour majeure de l'algorithme de Google</strong> déployée en 2012.</span> Cette mise à jour concerne l'analyse les <strong>liens externes</strong> (ou <strong>backlinks</strong>), c’est à dire les <span className="font-bold">liens présents sur le Web qui renvoient vers <strong>votre site internet</strong>.</span> <br/><br/>Ces <strong>backlinks</strong> (liens retours) doivent être qualitatifs : s’ils sont de mauvaises qualités, <strong>Penguin</strong> est en mesure de <strong>pénaliser votre nom de domaine</strong>. En effet, <span className="font-bold">les <strong>liens externes</strong> apportent de la popularité et de la force à <strong>votre site internet</strong> par l'intermédiaire de son <strong>nom de domaine</strong>.</span> <br/><br/><span className="font-bold">Google est donc intransigeant avec les <strong>sites web</strong> tentant de tromper son algorithme.</span>
                                    Nos objectifs : <strong>créer votre réseau de netlinking</strong> en vous inscrivant sur tous les <strong>sites internet et annuaires</strong> qui parlent d’entreprises comme la vôtre évoluant dans le même secteur d’activité… nous vous mêlons à vos concurrents présents <strong>sur le web</strong> !</p>
                                </div>
                                <div label="GOOGLE PIGEON">
                                <svg className="mx-auto block" width="30px" viewBox="0 0 50 62.5"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M39.286,6.702c-0.684,0.087-1.309-0.397-1.396-1.082   c-0.086-0.685,0.398-1.31,1.082-1.397c0.685-0.087,1.31,0.398,1.397,1.082C40.456,5.99,39.971,6.616,39.286,6.702 M32.875,7.238   c-0.135,6.715-3.385,9.139-7.437,12.162c-2.429,1.811-5.119,3.818-7.686,6.937c-0.788,0.958-1.549,1.989-2.206,3.043   c9.549-0.056,14.264-0.511,22.706-8.091C33.158,32.377,23.732,32.07,13.427,32.21c-1.533,1.697-4.218,4.16-9.741,8.499   c-1.193,0.938-0.643,2.596,0.718,2.628l1.379,0.029l-3.666,4.296c-0.861,1.007,0.021,2.522,1.297,2.32   c9.743-1.317,13.56-3.812,16.52-5.748c3.746-2.45,4.609-2.044,8.551-3.001l0.416,2.282h-0.983c-0.78,0-1.415,0.634-1.415,1.415   c0,0.78,0.634,1.415,1.415,1.415l6.63,0.001c0.781,0,1.415-0.633,1.415-1.415c0-0.78-0.634-1.415-1.415-1.415l-2.771-0.001   l-0.552-3.025c4.613-1.388,9.411-3.596,12.67-7.219c2.403-2.672,3.868-5.982,3.978-10.065c0.054-2.032-0.232-4.251-0.914-6.672   c-0.565-2.01-1.111-3.069-1.803-4.838c-0.478-1.219-0.685-2.149-0.437-3.448l3.095-0.392c0.302-0.039,0.488-0.346,0.382-0.632   c-0.51-1.373-2.154-2.918-3.589-3.041c-0.581-2.067-2.04-3.612-4.206-4.048c-2.484-0.5-5.234,0.389-6.528,2.694   C33.161,4.098,32.907,5.651,32.875,7.238z"/></g></svg>
                                <br/>
                                <p><span className="font-bold">Google Pigeon désigne une mise à jour majeure de l'algorithme de Goolge déployée en 2014.</span> Elle se concentre principalement sur le <strong>référencement local</strong> en utilisant les informations des établissements en fonction de leurs situation géographique. <br/><br/><span className="font-bold">Une personne qui cherche un professionnel comme vous en se trouvant près de chez vous… doit tout simplement vous trouver !</span></p>
                                </div>
                            </Accordion>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Les dernières actualités
                        </h3>
                        <hr className="blue"></hr>
                        <LastPosts lastposts={ this.props.data.allWordpressPost.edges } />
                        <Link className="bg-bleu text-white px-16 py-3 block mx-auto hover:bg-black font-normal" to="/actualite-digitale/">Voir l'actualité digitale</Link>
                        <br/>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center px-4 mt-12 mb-3">
                        <h3 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Vous pourriez également être intéressé
                        </h3>
                        <hr className="blue"></hr>
                        <br/>
                        <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">
                            Vous souhaitez en savoir plus sur nos prestations d’agence web à Agen (47) et Toulouse (31) ? Découvrez nos autres prestations, ainsi que nos différentes réalisations.</h4>
                        <br/>
                        <section className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 text-white mr-5 p-2 font-bold" style={{borderRadius:'5px'}}>
                                <Link to="/creation-site-internet-toulouse/">Création site internet</Link>
                            </div>
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 text-white mr-5 p-2 font-bold" style={{borderRadius:'5px'}}>
                                <Link to="/agence-web-toulouse/">Agence Web</Link>
                            </div>
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 text-white mr-5 p-2 font-bold" style={{borderRadius:'5px'}}>
                                <Link to="/agence-de-communication-agen-47-toulouse-31/">Nos réalisations</Link>
                            </div>
                        </section>
                        <br/>
                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsReferencementNaturel {
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
export default ReferencementNaturel;




