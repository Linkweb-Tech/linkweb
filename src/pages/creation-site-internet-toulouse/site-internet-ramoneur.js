import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';
import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";

import CarouselRamoneur from "../../components/carousel-slides/ramoneur-slides";

import Accordion from "../../components/accordion";
import SEO from "../../components/seo";
import SimpleMap from "../../components/simpleMap";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";

import stars from '../../images/stars.png';
import arriereplan from "../../images/background-site-internet-ramoneur.jpg";
import siteinternet from "../../images/creation-site-internet-ramoneur.jpg";
import referencement from "../../images/referencement-site-internet-ramoneur.jpg";
import webdesign from "../../images/webdesign-site-internet-ramoneur.jpg";
import realisation1 from "../../images/cheminees-albret.jpg";
import realisation2 from "../../images/godin-agen.jpg";
import realisation3 from "../../images/cheminees-philippe.jpg";
import map from "../../images/map.jpg";
import surmesure from "../../images/web.svg"



class SiteInternetRamoneur extends React.Component {

    constructor(props) {
        super(props);

        this.metiers = ['ramoneur', 'artisan', 'cheministe', 'façonnier', 'créateur', 'fumiste'];
        this.state = {
            metier: this.metiers[0]
        };
    }

    componentDidMount() {
        let i = 0;
        this.metierInterval = setInterval(() => {
            i++;
            if (this.metiers[i] === undefined) {
                i = 0;
            }
            this.setState({ metier: this.metiers[i] });
        }, 1200);
    }

    componentWillUnmount() {
        clearInterval(this.metierInterval);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Créer un site de ramoneur à Toulouse - Linkweb"
                    description="Vous souhaitez créer un site web pour votre entreprise de ramonage à Toulouse (31) ou à Agen (47) ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-ramoneur/"
                    nom="Créer un site internet internet Ramoneur"
                    slug="creation-site-internet-toulouse/site-internet-ramoneur/"
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

                <section className="flex items-center justify-start w-full mx-auto pb-0 my-24 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + arriereplan + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="max-w-6xl mx-auto lg:mx-56 py-2 w-full flex-col items-end">
                        <div className="mt-12 -mb-24 w-full flex flex-col items-center lg:items-start">
                            <div className="w-1/2  text-3xl text-center font-bold text-white century">4,5/5</div>
                            <p className="w-1/2  text-sm text-center font-bold text-white century -mt-2">Avis Google</p>
                            <div className="w-1/2 -mt-8">
                                <svg className="mx-auto block" width="100px" viewBox="0 0 100 125">
                                    <path fill="#FFFFFF" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                    <path fill="#FFFFFF" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                    <path fill="#FFFFFF" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                    <path fill="#FFFFFF" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                    <path fill="#FFFFFF" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z   M89.8,54.7c0.1-0.1,0.4,0,0.4,0l4.2,2.2l-0.8-4.7c0-0.2,0-0.3,0.1-0.4l3.4-3.3l-4.7-0.7c-0.2,0-0.3-0.1-0.4-0.3l-2.1-4.3L89.8,54.7  z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Créer un site internet de <span className="text-bleu">ramoneur</span></h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-1/2 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Linkweb, partenaire des ramoneurs à Toulouse et Agen.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-2/3 lg:mx-0 flex flex-col lg:flex-row justify-center pb-24 lg:justify-start">
                            <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-white shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <svg width="80px" className="mx-auto block" viewBox="0 0 25 31.25" fill="#37cfee"><g><rect x="13" y="17" width="4" height="2"/><rect x="6" y="14" width="3" height="2"/><path d="M18.428,9a1.55,1.55,0,0,0,1.5531-1.188,1.5237,1.5237,0,0,0-.2224-1.1534.5006.5006,0,0,1,.249-.7567A1.4978,1.4978,0,0,0,19.51,2.99a1.5332,1.5332,0,0,0-1.3187.78.5.5,0,0,1-.8143.0768,2.4944,2.4944,0,0,0-4.37,1.462.5009.5009,0,0,1-.8358.3361A2.4859,2.4859,0,0,0,8.1442,6.6674.507.507,0,0,1,7.59,7H7.5831A1.5,1.5,0,0,0,6.0742,9ZM13.5205,4.9731A2.5,2.5,0,0,1,18,6.5a.5.5,0,0,1-1,0,1.5,1.5,0,0,0-2.688-.9155.5.5,0,0,1-.7915-.6114ZM8.6221,6.8491a2.5729,2.5729,0,0,1,3.646-.1167.5.5,0,0,1-.708.7071A1.5416,1.5416,0,0,0,9.373,7.51a.5.5,0,1,1-.7509-.6612Z"/><rect x="10" y="14" width="5" height="2"/><rect x="6" y="20" width="3" height="2"/><rect x="8" y="17" width="4" height="2"/><rect x="16" y="14" width="3" height="2"/><rect x="6" y="17" width="1" height="2"/><polygon points="18.5 10 5.77 10 3 10 3 13 5.5 13 19.5 13 22 13 22 10 18.5 10"/><rect x="18" y="17" width="1" height="2"/><rect x="10" y="20" width="5" height="2"/><rect x="16" y="20" width="3" height="2"/></g></svg>
                        <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span>&nbsp;?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br /> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour répondre à vos objectifs.</p>
                        <br />
                        <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" fill="#37cfee" viewBox="0 0 100 125"><path d="M97,12.583h-4.875c-0.021,0-0.041,0.011-0.063,0.013c-0.021-0.002-0.041-0.013-0.063-0.013H80.25H68.5H56.75H45H33.25H21.5  H9.75H3c-0.414,0-0.75,0.336-0.75,0.75v7.084V27.5c0,0.32,0.202,0.588,0.484,0.696c-0.005,0.026-0.005,0.054-0.01,0.081l0.069-0.069  C2.86,28.228,2.927,28.25,3,28.25h9.25v52.02l-0.147,0.147H5.937c-0.414,0-0.75,0.336-0.75,0.75v5.5  c0,0.186,0.075,0.349,0.186,0.479l-0.024,0.024c0.013,0,0.026-0.001,0.04-0.001c0.137,0.149,0.33,0.247,0.549,0.247h88.125  c0.414,0,0.75-0.336,0.75-0.75v-5.5c0-0.414-0.336-0.75-0.75-0.75H87.75V28.251H97c0.414,0,0.75-0.336,0.75-0.75v-7.084v-7.084  C97.75,12.919,97.414,12.583,97,12.583z M22.575,14.083h4.949l-5.274,5.274v-4.949L22.575,14.083z M21.5,21.167h4.25v0.348  l-5.236,5.235h-4.95l5.583-5.583H21.5z M33.25,21.167h4.162l-5.583,5.583H27.25v-0.372l5.211-5.211H33.25z M79.5,14.083v4.592  l-0.991,0.992h-4.948l5.584-5.584H79.5z M91.25,14.083v4.156l-1.428,1.428H85.25h-0.377l5.584-5.584H91.25z M75.75,79.702  l10.5-10.501v4.951l-6.265,6.265H75.75V79.702z M47.163,80.006l12.693-12.692c0.122,0.576,0.223,1.174,0.272,1.818  c0,0.004,0.062,0.809,0.062,1.098c0,0.643-0.066,1.27-0.182,1.88l-8.123,8.124c-0.604,0.113-1.224,0.182-1.859,0.184H50v-0.001  C49.015,80.416,48.064,80.269,47.163,80.006z M14.064,28.25h0.684c0.001,0,0.001,0,0.002,0h4.264l-5.264,5.264v-4.95L14.064,28.25z   M26.5,28.25h3.829L13.75,44.828v-4.95L25.378,28.25H26.5z M13.75,39.172v-4.95l5.972-5.972h4.95L13.75,39.172z M31.035,28.25h4.95  L24.771,39.463c-0.228,0.074-0.401,0.248-0.475,0.475L13.75,50.484v-4.949L31.035,28.25z M38.25,28.25h3.393L30.476,39.417h-4.951  L36.691,28.25H38.25z M49.25,26.299l-0.451,0.451H43.85l5.4-5.4V26.299z M50.75,21.167h3.632l-3.632,3.632V21.167z M47.299,28.25  L36.132,39.417h-4.95L42.35,28.25H47.299z M13.75,56.85l10.5-10.5v4.95l-10.5,10.5V56.85z M25.75,44.849l3.933-3.933h4.95  l-8.883,8.883V44.849z M25.75,44.143v-3.227h3.227L25.75,44.143z M24.25,40.692v4.951l-10.5,10.5v-4.95L24.25,40.692z M13.75,62.506  l10.5-10.5v4.95l-10.5,10.501V62.506z M25.75,50.506l9.59-9.59h4.95l-14.54,14.54V50.506z M36.839,39.417L48.006,28.25H50h2.955  L41.789,39.417H36.839z M53.662,28.25h4.951L47.446,39.417h-4.951L53.662,28.25z M61,21.167v4.696l-0.887,0.887h-4.951l5.583-5.583  H61z M61,26.571v0.179h-0.18L61,26.571z M59.32,28.25h2.43h2.52L53.103,39.417h-4.949L59.32,28.25z M64.978,28.25h4.948  L58.759,39.417h-4.948L64.978,28.25z M72.75,21.167v4.258l-1.324,1.325h-4.948l5.583-5.583H72.75z M84.5,21.167v3.822l-1.761,1.761  H77.79l5.583-5.583H84.5z M84.5,25.697v1.053h-1.053L84.5,25.697z M56.128,60.043c0.632,0.851,1.293,1.745,1.896,2.737  L43.101,77.703c-0.868-0.802-1.597-1.747-2.146-2.805L55.993,59.86C56.038,59.922,56.082,59.981,56.128,60.043z M40.725,74.422  c-0.562-1.238-0.885-2.604-0.906-4.045l4.356-4.355c0.509,0.579,1.167,1.05,2.023,1.232l0.902,0.193l0.006-0.922  c0.006-0.995,0.038-2.289,0.188-3.623l6.492-6.491c0.508,1.071,1.182,2.057,1.907,3.043L40.725,74.422z M52.9,52.886  c0.035,1.126,0.283,2.119,0.662,3.041l-6.16,6.16c0.079-0.521,0.179-1.041,0.306-1.544C48.428,57.701,50.452,54.727,52.9,52.886z   M46.254,60.174c-0.299,1.185-0.455,2.436-0.542,3.604l-0.762,0.762c-0.666-1.058-0.894-2.384-0.896-2.402  c-0.06-0.409-0.308-0.768-0.671-0.979l4.125-4.125C46.959,58.062,46.52,59.124,46.254,60.174z M45.664,64.533  c-0.014,0.274-0.03,0.554-0.037,0.812c-0.14-0.115-0.266-0.25-0.383-0.392L45.664,64.533z M42.603,62.557  c0.1,0.521,0.434,1.92,1.26,3.07l-4.039,4.038c0.001-0.013,0-0.023,0.001-0.036C39.968,64.654,41.999,62.954,42.603,62.557z   M54.914,55.282l14.367-14.366h4.949L56.765,58.382C55.994,57.326,55.339,56.347,54.914,55.282z M54.735,54.754  c-0.21-0.663-0.339-1.363-0.339-2.145c0-0.51-0.28-0.971-0.736-1.209c-0.125-0.063-0.26-0.102-0.396-0.123l10.36-10.361h4.949  L54.735,54.754z M65.123,39.417L76.29,28.25h4.949L70.072,39.417H65.123z M77.084,26.75H74.25v-2.118l3.465-3.465h2.535h2.416  L77.084,26.75z M74.25,23.925v-2.758h2.759L74.25,23.925z M72.75,26.132v0.618h-0.618L72.75,26.132z M70.632,28.25H73.5h2.084  L64.416,39.417h-4.951L70.632,28.25z M62.918,40.916l-10.5,10.499c-0.057,0.029-0.117,0.052-0.169,0.089  c-1.35,0.966-2.586,2.254-3.605,3.686l-5.8,5.801c-0.252-0.024-0.508,0.01-0.724,0.117c-0.099,0.047-1.685,0.854-2.776,3.383  L25.75,78.084v-4.951l32.216-32.217H62.918z M24.25,79.584l-0.833,0.833h-4.95l5.783-5.783V79.584z M24.25,80.29v0.127h-0.126  L24.25,80.29z M25.75,78.79l13.186-13.186c-0.328,1.071-0.562,2.37-0.607,3.956c-0.014,0.224-0.015,0.444-0.015,0.667  c0,0.302,0.039,0.593,0.061,0.888l-9.3,9.301H25.75V78.79z M38.419,71.777c0.179,1.34,0.603,2.597,1.196,3.754l-4.885,4.885h-4.95  L38.419,71.777z M39.855,75.999c0.588,1.03,1.326,1.96,2.185,2.764l-1.653,1.653h-4.95L39.855,75.999z M42.42,79.09  c0.576,0.494,1.183,0.951,1.846,1.326h-3.172L42.42,79.09z M43.471,78.039L58.279,63.23c0.591,1.037,1.098,2.191,1.439,3.513  L46.63,79.831C45.468,79.422,44.398,78.815,43.471,78.039z M86.25,45.867l-10.5,10.5v-4.949l10.5-10.5V45.867z M74.25,57.867  L61.673,70.445c0.001-0.073,0.015-0.143,0.015-0.216c0-0.318-0.063-1.208-0.063-1.21c-0.083-1.078-0.269-2.053-0.521-2.955  L74.25,52.918V57.867z M59.786,73.039c-0.968,3.354-3.614,6.002-6.972,6.972L59.786,73.039z M61.62,71.204l12.63-12.629v4.948  L57.357,80.417H55.71C59.004,78.563,61.289,75.155,61.62,71.204z M74.25,64.229v4.952L63.016,80.417h-4.952L74.25,64.229z   M74.25,69.889v4.949l-5.579,5.579h-4.949L74.25,69.889z M74.25,75.545v4.872h-4.872L74.25,75.545z M75.75,74.045l10.5-10.5v4.949  l-10.5,10.5V74.045z M86.25,62.838l-10.5,10.5v-4.949l10.5-10.5V62.838z M75.75,67.682v-4.952l10.5-10.5v4.952L75.75,67.682z   M75.75,62.023v-4.948l10.5-10.5v4.948L75.75,62.023z M86.25,40.212l-10.5,10.5V45.76l10.5-10.5V40.212z M74.25,52.212  L60.937,65.525c-0.407-1.271-0.944-2.393-1.551-3.401L74.25,47.26V52.212z M59.111,61.691c-0.576-0.909-1.188-1.748-1.78-2.543  c-0.091-0.123-0.177-0.24-0.266-0.36L74.25,41.604v4.949L59.111,61.691z M75.519,39.628c-0.136-0.129-0.316-0.211-0.519-0.211  h-4.221L81.947,28.25h3.303h1v0.646L75.519,39.628z M87.002,26.751c0,0-0.001,0-0.002,0h-1v-2.554l3.029-3.03H92h0.125h1.854  l-5.584,5.584H87.002z M86,23.489v-2.322h2.322L86,23.489z M91.25,19.667h-0.721l0.721-0.72V19.667z M84.166,19.667H81v-1.786  l3.799-3.798h4.951L84.166,19.667z M79.5,19.667h-0.285l0.285-0.286V19.667z M72.853,19.667H69.25v-1.346l4.238-4.238h4.948  L72.853,19.667z M68.5,21.167h2.853L65.77,26.75H62.5v-1.679l3.903-3.904H68.5z M62.5,24.363v-3.196h3.196L62.5,24.363z   M67.196,19.667h-4.951l5.505-5.505v4.951L67.196,19.667z M61.538,19.667H57.5v-0.911l4.674-4.673h4.948L61.538,19.667z   M56.75,21.167h3.288l-5.583,5.583H50.75v-1.244l4.339-4.339H56.75z M55.882,19.667h-4.949L56,14.6v4.949L55.882,19.667z   M50.226,19.667H50h-4.25v-0.476l5.107-5.108h4.952L50.226,19.667z M45,21.167h3.726l-5.583,5.583H39v-0.809l4.774-4.774H45z   M39,25.235v-4.068h4.068L39,25.235z M39.618,19.667l4.632-4.632v4.632H39.618z M37.5,26.735l-0.015,0.015h-4.95l4.965-4.965V26.735  z M27.25,25.672v-4.505h4.504L27.25,25.672z M32.5,19.667h-4.196l4.196-4.196V19.667z M34,14.083h4.838L34,18.921V14.083z   M25.75,26.75h-4.528l4.528-4.529V26.75z M20.75,19.667h-3.759l3.759-3.759V19.667z M20.44,21.167l-4.94,4.94v-4.94H20.44z   M13.75,68.162l10.5-10.5v4.951l-10.5,10.5V68.162z M25.75,56.162l15.246-15.246h4.951L25.75,61.113V56.162z M46.654,40.916h4.949  L25.75,66.77V61.82L46.654,40.916z M52.312,40.916h4.948l-31.51,31.51v-4.948L52.312,40.916z M24.25,73.926l-6.491,6.491H13.75  v-0.939l10.5-10.5V73.926z M13,81.917h3.259l-4,4H7.31l4-4H13z M16.967,81.917h4.95l-4,4h-4.95L16.967,81.917z M22.624,81.917h4.949  l-4,4h-4.949L22.624,81.917z M28.28,81.917h4.95l-4,4h-4.95L28.28,81.917z M33.937,81.917h4.95l-4,4h-4.95L33.937,81.917z   M39.593,81.917h4.952l-4,4h-4.952L39.593,81.917z M45.251,81.917h4.949l-4,4h-4.949L45.251,81.917z M50.908,81.917h4.949l-4,4  h-4.95L50.908,81.917z M56.563,81.917h4.952l-4,4h-4.952L56.563,81.917z M62.222,81.917h4.949l-4,4h-4.949L62.222,81.917z   M67.878,81.917h4.949l-4,4h-4.949L67.878,81.917z M73.535,81.917h4.95l-4,4h-4.95L73.535,81.917z M79.192,81.917h4.949l-4,4h-4.949  L79.192,81.917z M80.692,80.417l5.558-5.558v4.949l-0.608,0.608H80.692z M86.25,34.553l-10.5,10.5v-4.886  c0-0.019-0.01-0.034-0.011-0.053L86.25,29.604V34.553z M94.687,21.167h1.563v3.386l-2.198,2.198h-4.949L94.687,21.167z   M96.187,19.667l0.063-0.063v0.063H96.187z M96.25,14.083v4.813l-0.771,0.771h-2.604v-2.345l3.238-3.239H96.25z M95.406,14.083  l-2.531,2.531v-2.531H95.406z M84.092,14.083L81,17.175v-3.092H84.092z M72.779,14.083l-3.529,3.53v-3.53H72.779z M61.466,14.083  L57.5,18.049v-3.966H61.466z M50.152,14.083l-4.402,4.402v-4.402H50.152z M44.25,14.329l-5.338,5.338H38.25H34v-0.039l5.545-5.545  h4.705V14.329z M32.5,14.765l-4.902,4.902H26.5h-3.853l5.584-5.584H32.5V14.765z M20.75,15.201l-4.466,4.466H14.75h-3.416  l5.584-5.584h3.832V15.201z M4.177,21.167h4.95L3.75,26.544v-4.95L4.177,21.167z M5.677,19.667L9,16.344v3.323H5.677z M10.5,19.667  v-4.823l0.761-0.761h4.95l-5.584,5.584H10.5z M10.553,14.083L10.5,14.136v-0.053H10.553z M3.75,14.083H9v1.553l-4.03,4.031H3.75  V14.083z M9.834,21.167H14v0.784L9.201,26.75h-4.95L9.834,21.167z M9.908,26.75L14,22.658v4.092h-1H9.908z M13.75,73.82l10.5-10.5  v4.949l-10.5,10.5V73.82z M6.688,81.917h3.915l-3.915,3.915V81.917z M93.313,85.917h-6.808l4-4h2.808V85.917z M89.798,81.917l-4,4  H80.85l4.001-4H87H89.798z M94.759,26.751l1.491-1.491v1.491H94.759z"/></svg>
                                <h4>Présentation de vos prestations</h4>
                            </div>
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M93.21,69.76H6.79a3,3,0,0,1-3-3V37.36a3,3,0,0,1,3-3H93.21a3,3,0,0,1,3,3V66.72A3,3,0,0,1,93.21,69.76ZM6.79,35.31a2.05,2.05,0,0,0-2,2V66.72a2,2,0,0,0,2,2H93.21a2,2,0,0,0,2-2V37.36a2.05,2.05,0,0,0-2-2Z" /><path fill="#37cfee" d="M14.73,43.7H9.93V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M17.91,50.86h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M17.91,58h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M17.91,65.17h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M24,43.7H19.21V38.91H24Zm-3.79-1H23V39.91H20.21Z" /><path fill="#37cfee" d="M24,50.86H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M24,58H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M30,58h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M24,65.17H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M30,65.17h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,65.17H31.22v-4.8H60Zm-27.82-1H59v-2.8H32.22Z" /><path fill="#37cfee" d="M36,58h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z" /><path fill="#37cfee" d="M42,58h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z" /><path fill="#37cfee" d="M48,58h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z" /><path fill="#37cfee" d="M54,58h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,58h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z" /><path fill="#37cfee" d="M66,58H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M66,65.17H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M72.05,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M84.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M90.07,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M72.05,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M30,50.86h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M36,50.86h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z" /><path fill="#37cfee" d="M42,50.86h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z" /><path fill="#37cfee" d="M48,50.86h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z" /><path fill="#37cfee" d="M54,50.86h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,50.86h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z" /><path fill="#37cfee" d="M66,50.86H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M72.05,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M90.07,57.83H82.19a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h6.88V47.06H81.39V50.8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V46.06h9.68Z" /><path fill="#37cfee" d="M30,43.7h-4.8V38.91H30Zm-3.8-1H29V39.91h-2.8Z" /><path fill="#37cfee" d="M36,43.7h-4.8V38.91H36Zm-3.8-1H35V39.91h-2.8Z" /><path fill="#37cfee" d="M42,43.7h-4.8V38.91H42Zm-3.8-1H41V39.91h-2.8Z" /><path fill="#37cfee" d="M48,43.7h-4.8V38.91H48Zm-3.8-1H47V39.91h-2.8Z" /><path fill="#37cfee" d="M54,43.7h-4.8V38.91H54Zm-3.8-1H53V39.91h-2.8Z" /><path fill="#37cfee" d="M60,43.7h-4.8V38.91H60Zm-3.8-1H59V39.91h-2.8Z" /><path fill="#37cfee" d="M66,43.7H61.25V38.91H66Zm-3.79-1H65V39.91H62.25Z" /><path fill="#37cfee" d="M72.05,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M78.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M84.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M90.07,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M82.19,57.83a.5.5,0,0,1-.5-.5v-6h-.8a.5.5,0,0,1,0-1h1.8v7A.5.5,0,0,1,82.19,57.83Z" /></svg>
                                <h4>Optimisations pour le référencement naturel</h4>
                            </div>
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" fill="#37cfee" viewBox="0 0 100 125"><path d="M22.27539,67.04688a1,1,0,0,0,0,2h9.3125v7.48535a2.41959,2.41959,0,0,0,2.417,2.4165H76.30762a2.41959,2.41959,0,0,0,2.417-2.4165V23.46777a2.41959,2.41959,0,0,0-2.417-2.4165H34.00488a2.41959,2.41959,0,0,0-2.417,2.4165v5.916h-9.3125a1,1,0,0,0,0,2h9.3125v7.41553h-9.3125a1,1,0,0,0,0,2h9.3125v7.416h-9.3125a1,1,0,0,0,0,2h9.3125v7.416h-9.3125a1,1,0,0,0,0,2h9.3125v7.41553Zm11.3125-7.41553h7.0708a1,1,0,0,0,0-2h-7.0708v-7.416h7.0708a1,1,0,0,0,0-2h-7.0708v-7.416h7.0708a1,1,0,0,0,0-2h-7.0708V31.38379h7.0708a1,1,0,0,0,0-2h-7.0708v-5.916a.4173.4173,0,0,1,.417-.4165H76.30762a.4173.4173,0,0,1,.417.4165V76.53223a.4173.4173,0,0,1-.417.4165H34.00488a.4173.4173,0,0,1-.417-.4165V69.04688h7.0708a1,1,0,0,0,0-2h-7.0708Z"/><path d="M62.19922,62.78125a4.94808,4.94808,0,0,0,6.99756,0l4.10059-4.1001a.99964.99964,0,0,0,0-1.41406l-5.72754-5.72754a1.02932,1.02932,0,0,0-1.41406,0l-3.07861,3.0791L52.98584,44.52734l3.07861-3.0791a.99964.99964,0,0,0,0-1.41406L50.3374,34.30713a1.02932,1.02932,0,0,0-1.41406,0l-4.1001,4.10059a4.94808,4.94808,0,0,0,0,6.99756ZM46.2373,39.82178l3.39307-3.39355,4.313,4.313-3.07861,3.0791a.99964.99964,0,0,0,0,1.41406L62.37012,56.73975a1.02932,1.02932,0,0,0,1.41406,0l3.07861-3.0791,4.31348,4.31348-3.39355,3.39307a3.02,3.02,0,0,1-4.16943,0l-17.376-17.376a2.94881,2.94881,0,0,1,0-4.16943Z"/></svg>
                                <h4>Mise en relation avec les utilisateurs</h4>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Votre devis gratuit" />
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-1/2 px-10 mt-16 lg:-mt-64 mb-32">
                    <h3 className="century text-3xl text-center">
                        <span className="text-bleu">46%</span> des requêtes sur Google concernent la recherche d'une entreprise locale.
            </h3>
                    <br />
                    <p className="text-center century"><b>Source :</b> <a className="text-bleu hover:text-black" href="https://fr.semrush.com/blog/50-faits-et-statistiques-incontournables-sur-le-seo-local/" target="_blank" rel="noreferrer">SEO Expert Brad cité par SEMrush</a></p>
                </section>
                <section className="text-center text-black text-2xl century mx-12 mt-8 lg:mx-0">
                    <h2 className="century leading-none">Répondre à vos<br /><span className="text-6xl text-bleu font-bold">BESOINS</span></h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Notre rôle : mettre en place un projet adapté à l'image de votre entreprise.</h3>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Site internet</span><br /><span className="font-bold text-5xl md:text-6xl">VITRINE</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">La <strong className="font-normal">création d’un site internet</strong> est un <strong className="font-normal">moyen de communication</strong> efficace pour les professionnels issus du <strong className="font-normal">ramonage</strong> et travail avec différents <strong className="font-normal">appareils de chauffage</strong>. Ce <strong className="font-normal">type de site internet</strong> permet de faire connaître son entreprise, tout en présentant ses prestations de manière détaillée.
                <br /><br />
                        Le <strong className="font-normal">site internet vitrine</strong> permet d’exposer concrètement les types de produits avec lesquels vous travaillez, mais également les techniques de pose que vous êtes susceptibles de pratiquer. Enfin, le <strong className="font-normal">site internet vitrine</strong> est un parfait moyen pour <strong className="font-normal">obtenir des contacts</strong> avec des demandes pertinentes.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Référencement</span><br /><span className="font-bold text-6xl">LOCAL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Le <strong className="font-normal">référencement naturel</strong> est l’un des <strong className="font-normal">canaux d’acquisition de trafic</strong> principaux sur <strong className="font-normal">Internet</strong>. <strong className="font-normal">Être visible</strong> grâce à une <strong className="font-normal">stratégie de référencement local</strong> permet d’être présent dans les <strong className="font-normal">résultats de recherche de Google</strong> pour des <strong className="font-normal">requêtes pertinentes</strong>.
                <br /><br />
                        Ce travail se traduit tout d’abord dans le <strong className="font-normal">choix des mots-clés</strong>, mais également dans la <strong className="font-normal">création des contenus</strong>. Grâce au <strong className="font-normal">référencement local</strong>, il est possible de <strong className="font-normal">générer un trafic qualifié</strong> sur <strong className="font-normal">votre site internet</strong>. En effet, les utilisateurs qui vous trouveront seront des personnes présentes dans vos secteurs géographiques, et à même de faire appel à vos services.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Design</span><br /><span className="font-bold text-6xl">ORIGINAL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Lors de la <strong className="font-normal">création d’un site internet</strong>, il est important de définir un <strong className="font-normal">webdesign</strong> fonctionnel, <strong className="font-normal">intuitif</strong> et unique. Le <strong className="font-normal">design du site internet</strong> a pour vocation d’inspirer confiance aux utilisateurs et de les guider au cours de leur navigation.
                <br /><br />
                        Nos <strong className="font-normal">sites web</strong> sont <strong className="font-normal">responsive design</strong> puisque l'<strong className="font-normal">affichage du site</strong> s'adapte en fonction du support utilisé (<strong className="font-normal">smartphone</strong>, <strong className="font-normal">tablettes</strong>, <strong className="font-normal">ordinateur</strong>, etc.). Par ailleurs, nous respectons votre <strong className="font-normal">identité visuelle</strong> et illustrons <strong className="font-normal">votre site web</strong> avec des images d’illustration qualitatives.</p>
                    </div>
                </section>
                <section className="text-center text-black text-2xl mx-auto lg:mx-0 century my-10">
                    <h2 className="century leading-none">Une solution<br /><span className="text-4xl lg:text-6xl text-bleu font-bold">FONCTIONNELLE</span></h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Nous créons un site internet professionnel et qui répond aux problématiques du Web.</h3>
                </section>
                <section className="flex justify-center flex-col items-center">
                    <div className="w-full flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                        <div className="w-full -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 64 80" fill="#37cfee"><g data-name="Layer 25"><path d="M46.46,29.17h-32V24.94a1,1,0,1,0-2,0v5.23a1,1,0,0,0,1,1h3v1.5a1,1,0,0,0,2,0v-1.5H26v6.21H18.54V35.94a1,1,0,0,0-2,0v4.94a1,1,0,0,0,2,0v-1.5h2.51v6.2H18.54V43.75a1,1,0,0,0-2,0V63a1,1,0,0,0,1,1H46.46a1,1,0,0,0,1-1V30.17A1,1,0,0,0,46.46,29.17ZM32,53.79H28V47.58H40.45v6.21ZM32,62h-9V55.79H35.54V62ZM18.54,55.79h2.51V62H18.54ZM45.46,39.38v6.2H37.54v-6.2Zm-3,8.2h3v6.21h-3Zm3-10.2h-3V31.17h3ZM28,31.17H40.45v6.21H28Zm-4.91,8.21H35.54v6.2H23.05ZM26,47.58v6.21H18.54V47.58ZM37.54,62V55.79h7.92V62ZM52.75,20.2v10a1,1,0,0,1-1,1H49.33a1,1,0,0,1,0-2h1.42v-8H14.5v.43a1,1,0,0,1-2,0V20.2a1,1,0,0,1,1-1h5.41c-.84-2.47-1.1-6.08,1.44-8.87C16.87,9.54,12.62,7,12.5,1a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1c.15,7.45,7.92,7.64,8.25,7.65a1,1,0,0,1,.95.72,1,1,0,0,1-.42,1.12c-4.27,2.73-2.87,7.2-2.22,8.73H44.18c.6-1.17,2.54-5.67-1.53-8.78a1,1,0,0,1,.6-1.79h0s3.91,0,5.48-2.24c.85-1.2.91-2.9.16-5.06A1,1,0,1,1,50.78.67c1,2.82.83,5.13-.42,6.89a7.92,7.92,0,0,1-4.9,2.82,8.68,8.68,0,0,1,.92,8.82h5.37A1,1,0,0,1,52.75,20.2ZM38.32,11a.94.94,0,0,1,0-.76.83.83,0,0,1,.22-.33,1,1,0,0,1,1.41,0,1,1,0,0,1,.22.33,1.07,1.07,0,0,1,0,.76,1.19,1.19,0,0,1-.22.33,1,1,0,0,1-.71.29,1,1,0,0,1-.92-.62ZM18.75.92A1,1,0,0,1,19.83,0a1,1,0,0,1,.92,1.05c0,.1.06,1.34,2.56,1.92a1,1,0,0,1-.23,2l-.22,0C18.57,3.92,18.74,1,18.75.92ZM40.42,12.79a1,1,0,0,1,1.35.45,6.15,6.15,0,0,1,.35,4.24,1,1,0,0,1-.95.7,1,1,0,0,1-.3,0,1,1,0,0,1-.66-1.26A4.11,4.11,0,0,0,40,14.14,1,1,0,0,1,40.42,12.79Z"/></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Présentation de vos prestations</span></h4>
                            <p>Nous mettons en avant les spécificités de vos prestations de <strong className="font-normal">ramonage</strong> au sein de <strong className="font-normal">pages web</strong> dédiées.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="12.937 19.988 486.829 591.2012500000001"><g><path fill="#37cfee" d="M453.892,19.988H58.84c-25.311,0-45.903,20.595-45.903,45.909v263.348c0,25.312,20.592,45.903,45.903,45.903h83.62v81.085   c0,20.245,16.483,36.716,36.744,36.716h152.511c21.244,0,38.528-17.287,38.528-38.535v-79.265h83.648   c25.295,0,45.874-20.592,45.874-45.903V65.897C499.766,40.583,479.187,19.988,453.892,19.988z M58.84,27.988h395.052   c20.884,0,37.874,17.006,37.874,37.909v38.814H20.937V65.897C20.937,44.994,37.94,27.988,58.84,27.988z M237.442,197.73h37.855   c29.951,0,54.318,24.355,54.318,54.291V306.2H183.117v-54.18c0-14.968,6.092-28.54,15.929-38.371   C208.883,203.819,222.465,197.73,237.442,197.73z M362.243,454.414c0,16.837-13.695,30.535-30.528,30.535H179.204   c-15.85,0-28.744-12.882-28.744-28.716v-85.085v-55.511c0-0.806,0.647-1.438,1.474-1.438h26.075   c0.354,0.102,0.72,0.175,1.107,0.175h154.499c0.387,0,0.753-0.072,1.107-0.175h26.076c0.81,0,1.444,0.632,1.444,1.438V454.414z    M453.892,367.149h-83.647v-51.512c0-5.204-4.236-9.438-9.444-9.438h-0.001h-23.183v-54.18c0-34.347-27.956-62.291-62.318-62.291   h-37.855c-17.184,0-32.765,6.986-44.051,18.266c-11.286,11.279-18.276,26.852-18.276,44.026v54.178h-23.182   c-5.224,0-9.474,4.233-9.474,9.438v0.001v51.511H58.84c-20.9,0-37.903-17.003-37.903-37.903V112.711h470.829v216.535   C491.766,350.146,474.775,367.149,453.892,367.149z" /><path fill="#37cfee" d="M256.369,364.854c-11.108,0-20.146,9.034-20.146,20.14c0,7.416,3.978,14.056,10.338,17.592v27.703c0,2.209,1.791,4,4,4   h11.611c2.209,0,4-1.791,4-4v-27.703c6.36-3.537,10.338-10.177,10.338-17.592C276.51,373.888,267.475,364.854,256.369,364.854z    M260.719,396.329c-1.536,0.599-2.547,2.078-2.547,3.727v26.232h-3.611v-26.232c0-1.648-1.011-3.128-2.547-3.727   c-4.66-1.817-7.791-6.373-7.791-11.336c0-6.693,5.449-12.14,12.146-12.14c6.694,0,12.141,5.446,12.141,12.14   C268.51,389.956,265.379,394.512,260.719,396.329z" /><path fill="#37cfee" d="M65.828,82.413c8.805,0,15.969-7.164,15.969-15.969c0-8.809-7.164-15.976-15.969-15.976   c-8.809,0-15.975,7.167-15.975,15.976C49.853,75.25,57.02,82.413,65.828,82.413z M65.828,58.468c4.394,0,7.969,3.578,7.969,7.976   c0,4.394-3.575,7.969-7.969,7.969c-4.397,0-7.975-3.575-7.975-7.969C57.853,62.046,61.431,58.468,65.828,58.468z" /><path fill="#37cfee" d="M114.807,82.413c8.809,0,15.975-7.164,15.975-15.97c-0.002-8.809-7.168-15.975-15.975-15.975   c-8.809,0-15.975,7.167-15.975,15.976C98.832,75.25,105.999,82.413,114.807,82.413z M114.807,58.468   c4.396,0,7.974,3.579,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969s-7.975-3.575-7.975-7.969   C106.832,62.046,110.41,58.468,114.807,58.468z" /><path fill="#37cfee" d="M163.815,82.413c8.809,0,15.975-7.164,15.975-15.969c0-8.809-7.167-15.976-15.975-15.976   c-8.805,0-15.969,7.167-15.969,15.976C147.846,75.25,155.01,82.413,163.815,82.413z M163.815,58.468   c4.397,0,7.975,3.578,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969c-4.394,0-7.969-3.575-7.969-7.969   C155.846,62.046,159.421,58.468,163.815,58.468z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Site internet sécurisé</span></h4>
                            <p>Nous garantissons la mise en place de <strong className="font-normal">certificat sécurisé</strong> pour une navigation en toute confiance.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" fill="#37cfee" className="mx-auto block" viewBox="0 0 100 125"><g><g><g><g><path d="M84.5,78.07h-69c-1.104,0-2-0.896-2-2V23.93c0-1.104,0.896-2,2-2h69c1.104,0,2,0.896,2,2V76.07      C86.5,77.175,85.604,78.07,84.5,78.07z M17.5,74.07h65V25.93h-65V74.07z"/></g></g><g><g><path d="M50,59.07c-0.499,0-0.998-0.187-1.386-0.558l-34.5-33.141c-0.589-0.565-0.774-1.432-0.47-2.188      c0.305-0.758,1.039-1.254,1.855-1.254h69c0.816,0,1.551,0.496,1.855,1.254c0.305,0.757,0.119,1.623-0.47,2.188l-34.5,33.141      C50.998,58.884,50.499,59.07,50,59.07z M20.469,25.93L50,54.297L79.531,25.93H20.469z"/></g></g></g></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Optimisation des conversions</span></h4>
                            <p>Nous vous donnons accès à une <strong className="font-normal">plateforme web</strong> optimisée pour <strong className="font-normal">générer des contacts</strong> pertinents.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   " /><path fill="#37cfee" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z" /><g><path fill="#37cfee" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z" /><rect x="72.041" y="56.851" width="0.312" height="5.159" /></g><path fill="#37cfee" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z" /><path fill="#37cfee" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Site web accessible tous supports</span></h4>
                            <p>Les sites internet que nous créons s'adaptent au <strong>support de navigation</strong> pour une accessibilité sans faille.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#37cfee" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#37cfee" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#37cfee" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Optimisation SEO</span></h4>
                            <p>Nous optimisons les contenus de votre site pour une <strong className="font-normal">visibilité maximale</strong> grâce au <strong className="font-normal">référencement naturel</strong>.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M66.598,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44c-0.556,0.081-1.017,0.47-1.191,1.004  c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014c-0.095,0.554,0.133,1.113,0.587,1.443  c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C67.673,71.235,67.16,70.916,66.598,70.916L66.598,70.916z M50,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169L50,82.719l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C51.074,71.235,50.562,70.916,50,70.916L50,70.916z M33.402,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423  l2.707,1.423c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014  l2.19-2.135c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C34.476,71.235,33.963,70.916,33.402,70.916L33.402,70.916z" /><path fill="#37cfee" d="M72.131,50.738h-25.82v-1.475h25.82V50.738z M50,52.951h-3.689v1.475H50V52.951z M72.131,52.951H53.689v1.475  h18.443V52.951z M61.066,56.639H46.311v1.475h14.754V56.639z M72.131,56.639h-7.377v1.475h7.377V56.639z M57.377,60.328H46.311  v1.475h11.066V60.328z M61.066,27.131H46.311v1.475h14.754V27.131z M72.131,27.131h-7.377v1.475h7.377V27.131z M72.131,30.82h-25.82  v1.475h25.82V30.82z M57.377,34.508H46.311v1.475h11.066V34.508z M72.131,34.508H61.066v1.475h11.066V34.508z M64.754,38.197H46.311  v1.475h18.443V38.197z" /><path fill="#37cfee" d="M75.82,12.377h-4.338c-0.741-1.139-1.62-2.329-2.458-3.404l-0.257-0.33l-0.416,0.052  c-2.313,0.288-8.743,0.858-10.692,0.051c-0.341-0.141-0.869-0.895-1.294-1.501C55.592,6.141,54.793,5,53.689,5h-7.377  c-1.104,0-1.904,1.141-2.677,2.244c-0.425,0.606-0.953,1.36-1.294,1.501c-1.947,0.807-8.379,0.237-10.692-0.051l-0.416-0.052  l-0.257,0.33c-0.838,1.075-1.717,2.265-2.458,3.404H24.18c-2.441,0-4.426,1.986-4.426,4.426v73.77c0,2.441,1.985,4.426,4.426,4.426  H75.82c2.441,0,4.426-1.985,4.426-4.426v-73.77C80.246,14.363,78.26,12.377,75.82,12.377z M31.886,10.208  c1.891,0.218,8.608,0.899,11.02-0.1c0.737-0.305,1.32-1.137,1.937-2.017c0.396-0.564,1.132-1.615,1.469-1.615h7.377  c0.337,0,1.073,1.051,1.469,1.615c0.617,0.88,1.2,1.712,1.937,2.017c2.412,0.999,9.129,0.318,11.02,0.1  c1.698,2.219,3.397,4.834,3.684,5.857H28.201C28.489,15.043,30.188,12.427,31.886,10.208z M78.77,90.574  c0,1.627-1.324,2.951-2.951,2.951H24.18c-1.627,0-2.951-1.324-2.951-2.951v-73.77c0-1.627,1.324-2.951,2.951-2.951h3.449  c-0.727,1.324-1.12,2.457-0.82,3.071c0.192,0.392,0.578,0.618,1.059,0.618h44.262c0.482,0,0.867-0.225,1.059-0.618  c0.3-0.614-0.093-1.746-0.82-3.071h3.449c1.627,0,2.951,1.324,2.951,2.951V90.574z M50,13.115c-1.424,0-2.582-1.158-2.582-2.582  S48.576,7.951,50,7.951s2.582,1.158,2.582,2.582S51.424,13.115,50,13.115z M50,9.426c-0.61,0-1.107,0.496-1.107,1.107  c0,0.61,0.496,1.107,1.107,1.107s1.107-0.496,1.107-1.107C51.107,9.923,50.61,9.426,50,9.426z" /><path fill="#37cfee" d="M38.934,50v11.066H27.869V50H38.934 M38.934,48.525H27.869c-0.815,0-1.475,0.661-1.475,1.475v11.066  c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475V50C40.41,49.185,39.749,48.525,38.934,48.525  L38.934,48.525z M33.483,38.197c-0.008,0-0.016,0-0.024,0c-0.302,0-0.588-0.12-0.792-0.343l-3.77-4.111  c-0.413-0.451-0.382-1.147,0.069-1.559c0.451-0.412,1.151-0.379,1.563,0.071l2.989,3.267l7.698-7.698  c0.432-0.432,1.132-0.432,1.565,0c0.432,0.432,0.432,1.133,0,1.565l-8.516,8.5C34.058,38.097,33.776,38.197,33.483,38.197z   M38.934,34.271v4.664h-5.451H33.45h-5.581V27.869h11.066v1.194l1.45-1.45c-0.122-0.692-0.722-1.22-1.45-1.22H27.869  c-0.815,0-1.475,0.661-1.475,1.475v11.066c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475v-6.136  L38.934,34.271z" /></svg>
                            <h4 className="font-bold century"><span className="font-bold">Appel mensuel et suivi régulier</span></h4>
                            <p>Nous effectuons une <strong className="font-normal">maintenance</strong> et un suivi pour vous tenir informé de l'activité de <strong className="font-normal">votre site web</strong>.</p>
                        </div>
                    </div>
                </section>
                <section className="text-center text-black text-2xl century my-10 mx-12 lg:mx-0">
                    <h2 className="century leading-tight"><Link to="/creation-site-internet-toulouse/" className="text-black hover:text-bleu">Création de site internet à Toulouse</Link> :<br /><span className="text-4xl lg:text-6xl text-bleu font-bold">VOTRE PROJET EN 4 ÉTAPES</span></h2>
                    <hr className="blue"></hr>
                </section>
                <section className="flex justify-center">
                    <div className="w-full md:w-2/3">
                        <div className="w-full md:w-2/3 px-10 py-10 md:py-16  ml-0">
                            <h3 className="century capitalize text-2xl pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">1/</span>VOUS PRENEZ CONTACT POUR METTRE EN PLACE VOTRE PROJET
                    </h3>
                            <h4 className="century text-lg  pb-3 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">En nous contactant, notre chef de projet étudiera votre demande et vous recontactera pour préciser la définition de vos besoins.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify century">Plus votre demande sera détaillée, plus nous serons à même de vous proposer une solution pertinente et performante. N'hésitez pas à nous renseigner sur vos <strong className="font-normal">objectifs, cibles</strong> et autres motivations à <strong className="font-normal">créer un site web pour votre entreprise</strong>.</p>
                        </div>
                        <div className="w-full md:w-2/3 px-10 py-10 md:py-16 ml-auto">
                            <h3 className="century capitalize text-2xl tracking-wider pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">2/</span>NOUS DÉFINISSONS VOTRE PROJET EN FONCTION DE VOS BESOINS
                    </h3>
                            <h4 className="century text-lg  pb-3 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">Une fois votre demande formulée, nous nous rencontrons pour mieux cerner vos besoins et vous mettre en place une solution qui vous correspond.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify century">Il s'agit d'une étape fondamentale afin de comprendre vos besoins, votre activité ainsi que vos ambitions. C'est à partir de cette étape que nous définissons le mode opératoire pour votre création ainsi que la <strong className="font-normal">stratégie de référencement de site internet</strong>.</p>
                        </div>
                        <div className="w-full md:w-2/3 px-10 py-10 md:py-16 ml-0">
                            <h3 className="century capitalize text-2xl pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">3/</span>VOUS VALIDEZ LE PROJET UNE FOIS QU’IL VOUS CORRESPOND
                    </h3>
                            <h4 className="century text-lg pb-3 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">À la suite de notre rencontre, nous vous proposons une maquette visuelle et des textes rédigés et optimisés spécifiquement pour votre site web.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify century">La livraison de la <strong className="font-normal">maquette</strong> est le moment pour vous de suggérer vos ajustements quant aux textes rédigés ainsi que sur l'aspect visuel du site. Une fois les modifications réalisées, vous serez libres de <strong className="font-normal">valider la maquette de votre futur site web</strong>.</p>
                        </div>
                        <div className="w-full md:w-2/3 px-10 py-10 md:py-16 ml-auto">
                            <h3 className="century capitalize text-2xl pb-6" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">4/</span>NOUS METTONS EN ROUTE LA RÉALISATION DE VOTRE PROJET
                    </h3>
                            <h4 className="century text-lg pb-3 text-justify" /*data-aos='fade-left'*/>
                                <span className="font-bold">Après que vous ayez validé notre proposition graphique et éditoriale, nos techniciens réalisent la mise en ligne votre site internet.</span>
                            </h4>
                            <p /*data-aos='fade-bottom'*/ className="text-justify century">Lorsque <strong className="font-normal">votre site internet</strong> est publié sur le <strong className="font-normal">nom de domaine</strong> choisi, nos <strong className="font-normal">référenceurs web</strong> mettent en place toutes les optimisations nécessaires pour <strong className="font-normal">être visible sur les moteurs de recherche</strong>. Par la suite, des mises à jours et modifications sont régulièrement effectuées grâce au suivi mis en place.</p>
                        </div>
                    </div>
                </section>
                <section className="text-center text-black text-2xl century my-10 mx-auto lg:mx-0">
                    <h2 className="century leading-tight">Création de site internet à Toulouse :<br /><span className="text-4xl lg:text-6xl text-bleu font-bold">NOUS LES ACCOMPAGNONS</span></h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Nous travaillons tous les jours avec des professionnels d'horizons différents <br />pour leur proposer une solution Web fonctionnelle.</h3>
                </section>
                <section className="w-full flex justify-center">
                    <div className="w-full lg:w-2/3 flex flex-col mb-16 lg:flex-row justify-center text-white text-center text-2xl century">
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation1 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="https://chemineesalbret.com/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Cheminées d'Albret</h4></a>
                        </div>

                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation2 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="http://www.godin-agen.com/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Godin Agen</h4></a>
                        </div>
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation3 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="http://www.chemineesphilippe47.com/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Cheminées Philippe</h4></a>
                        </div>
                    </div>
                </section>
                <section className="w-full flex my-12 flex-col lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence</span> ?</h3>
                        <h4>Linkweb soutient les professionnels souhaitant développer leur projet sur le Web.</h4>
                    </div>
                    <div className="w-full mx-auto block lg:w-3/12">
                        <RoundButton className="items-center" color="darkgrey" text="Contactez-nous" url="/contact-agence-web-toulouse/" />
                    </div>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet de ramoneur :<br /><span className="font-bold">Nos clients sont satisfaits</span>
                    </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-center justify-center century text-center mt-3 px-6 mb-12">
                <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up"*/>
                        <img
                            src={stars}
                            alt="Création site internet Agen"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">JUST'LUI</div>
                        <div className="italic">« Une équipe sérieuse, efficace et en plus très sympathique. Anthony qui assure le suivi, toujours à l'écoute et très réactif, ne manque pas de me contacter tous les mois pour faire le point. Très satisfaite, je recommande !
                                JUST'LUI remercie l'équipe Linkweb. »</div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
                        <img
                            src={stars}
                            alt="Création site internet Toulouse"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Dix doigts deux pieds</div>
                        <div className="italic">« Equipe sérieuse.
                            Partenaire à l'écoute, réactif et de bon conseil.
                            Travail satisfaisant et un bon suivi du site chaque mois 
                            Je recommande !!! »
                            </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500"*/>
                        <img
                            src={stars}
                            alt="Création site internet Agen"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Fanny Coiffure</div>
                        <div className="italic">« Ils sont de très bons conseils, le suivi est régulier. Si vous voulez changer des choses avant qu'ils ne vous rappellent, c'est possible avec un mail. Je recommande vivement toute l'équipe. »</div>
                    </div>
                    <br />
                    {/* <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500">
                            <img 
                                src={ stars }
                                alt="Création site internet Agen"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">De haut en bois</div><br/>
                            <div className="italic text-sm">« Cela fait quelques années que nous travaillons ensemble.
                              Sérieux, créatifs , il vous donnent de bons conseils pour améliorer le site, être très bien positionné dans les pages Google( pour ma part je suis dans la 1ère et même en 1ère position suivant la recherche).
                              Donc j’ai du recul pour dire oui au choix de Linkweb pour la création de site.
                              Merci à RA avec qui je traite.
                               »</div>
                        </div> */}

                </section>
                <section className="max-w-6xl mx-auto flex align-center justify-center text-center mb-24">
                    <div className="w-full flex flex-col md:flex-row justify-center">
                        <a
                            className="century text-sm hover:text-bleu"
                            target="blank" rel="noreferrer noopener"
                            href="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,"
                        >
                            Voir plus de témoignages
                            </a>&nbsp;
                        | &nbsp;
                            <a
                            className="century text-sm hover:text-bleu"
                            target="blank" rel="noreferrer noopener"
                            href="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,"
                        >
                            Vous êtes déjà clients ? Donnez nous votre avis !
                            </a>
                    </div>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet de ramoneur :<br /><span className="font-bold">Une solution en accord avec vos besoins</span>
                    </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="POPULARISER SON ENTREPRISE SUR LE WEB">
                                <p>Le <strong className="font-bold">site internet vitrine</strong> est l’outil parfait pour <strong>faire connaître son entreprise</strong> et lui apporter de la <strong>visibilité sur le web</strong>. <strong>Avoir un site internet</strong> de ce type permet de présenter son activité et ses prestations au sein de <strong className="font-bold">pages web conçues pour être visibles</strong>.

                                <br /><br />
                                Plus encore le <strong>site internet</strong> permet de travailler son <strong className="font-bold">image de marque</strong> tout en étendant sa <strong className="font-bold">notoriété sur le Web</strong>. Il est important de soigner le <strong>contenu de ses pages</strong> en exposant le maximum d’<strong className="font-bold">informations utiles pour les utilisateurs</strong>.
                                <br/><br/>
                                En effet, la <strong className="font-bold">création de contenus de qualité</strong> et qui répondent aux <strong className="font-bold">attentes des internautes</strong> est indispensable pour se démarquer et ainsi <strong className="font-bold">attirer de nouveaux clients</strong>.
                                </p>
                            </div>
                            <div label="OBTENIR DE LA VISIBILITÉ POUR GÉNÉRER DES CONTACTS PERTINENTS">
                                <p>Un <strong>site internet performant</strong> est un <strong className="font-bold">site internet visible</strong>. En effet, la <strong>création d’un site internet professionnel</strong> nécessite la mise en place d’une <strong className="font-bold">stratégie de visibilité</strong> adaptée. C’est pourquoi, nous déterminons une <strong>stratégie de référencement naturel</strong> orientée pour <strong className="font-bold">générer du trafic</strong> et <strong className="font-bold">attirer de potentiels clients</strong>.
                            <br /><br />
                                    Par ailleurs, nous proposons des <strong>stratégies de référencement sur-mesure</strong> pour coller au mieux à vos besoins et vous permettre d’<strong>obtenir des premiers résultats</strong> à court ou moyen terme.
                            <br/><br/>
                                    C’est pourquoi, nous mettons tout en oeuvre pour vous donner accès à une stratégie évolutive et adaptée en fonction de vos <strong>cibles</strong>. De la mise en place d’un <strong>code HTML</strong> valide vis-à-vis des <strong className="font-bold">standards du web</strong>, à la <strong className="font-bold">rédaction web optimisée pour des mots-clés finement sélectionnés</strong>, notre travail a pour vocation de vous apporter des performances maximales.
                                </p>
                            </div>
                            <div label="DYNAMISER SON ACTIVITÉ GRÂCE À UN SITE WEB PERFORMANT">
                                <p>Outre la mise en place d’une <strong>stratégie de référencement naturel</strong>, la <strong>création d’un site web</strong> doit être réalisée selon certains procédés pour <strong className="font-bold">générer des performances</strong> intéressantes. En effet, le <strong>site web</strong> s’adresse avant tout à des utilisateurs humains, il doit donc être conçu pour eux en priorité.
                                <br /><br />
                                À ce niveau, la mise en place d’un <strong>site web professionnel</strong> doit résulter d’un travail autour de la <strong className="font-bold">création d’une interface intuitive</strong> et d’une <strong className="font-bold">expérience utilisateur</strong> soignée. Ceci est indispensable pour amener les utilisateurs où vous souhaitez qu’ils aillent.
                                <br/><br/>
                                De plus, un <strong>site web</strong> dont la <strong>navigation</strong> sera facilitée est un <strong>site web</strong> susceptible d’<strong className="font-bold">obtenir des contacts</strong> et donc de vous permettre d'<strong className="font-bold">atteindre vos objectifs</strong>.
                            </p>
                            </div>
                        </Accordion>
                    </div>
                </section>

                <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselRamoneur />
                    </div>
                </div>

                <SimpleMap />
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
query lastsThreePostsSiteInternetRamoneur {
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
export default SiteInternetRamoneur;




