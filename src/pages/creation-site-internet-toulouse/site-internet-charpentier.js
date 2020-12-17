import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";

import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";

import CarouselCharpentier from "../../components/carousel-slides/charpentier-slides";

import Accordion from "../../components/accordion";
import SEO from "../../components/seo";
import SimpleMap from "../../components/simpleMap";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";

import stars from '../../images/stars.png';
import arriereplan from "../../images/creation-site-internet-charpentier.jpg";
import siteinternet from "../../images/site-internet-charpentier.jpg";
import referencement from "../../images/referencement-site-internet-charpentier.jpg";
import webdesign from "../../images/webdesign-site-internet-charpentier.jpg";
import realisation1 from "../../images/lacaze-noel.jpg";
import realisation2 from "../../images/arn-habitat.jpg";
import realisation3 from "../../images/desmarty.jpg";
import map from "../../images/map.jpg";
import surmesure from "../../images/web.svg"



class SiteInternetCharpentier extends React.Component {

    constructor(props) {
        super(props);

        this.metiers = ['charpentier', 'artisan', 'couvreur', 'poseur', 'constructeur', 'monteur', 'fustier'];
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
                    title="Création site internet Charpentier à Toulouse - Linkweb"
                    description="Vous souhaitez créer un site web pour votre entreprise de charpente à Toulouse (31) ou à Agen (47) ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-charpentier/"
                    nom="Créer un site internet internet Charpentier"
                    slug="creation-site-internet-toulouse/site-internet-charpentier/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Création site internet pour <span className="text-bleu">Charpentier</span></h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-1/2 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Linkweb, partenaire des charpentiers à Toulouse et Agen.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-2/3 lg:mx-0 flex flex-col lg:flex-row justify-center pb-24 lg:justify-start">
                            <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-white shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <svg width="80px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M81.496,57.342c0-0.001,0-0.001,0-0.002L59.141,34.984c0,0,0,0-0.001,0L51,26.875  c-0.036-0.037-0.086-0.059-0.142-0.059s-0.105,0.022-0.142,0.059l-8.14,8.109c0,0,0,0-0.001,0L20.22,57.34c0,0.001,0,0.001,0,0.002  L5.914,71.678c-0.037,0.035-0.059,0.086-0.059,0.141v1.307c0,0.001,0,0.001,0,0.001c0,0.01,0.009,0.017,0.011,0.026  c0.007,0.043,0.019,0.086,0.048,0.115c0.039,0.039,0.09,0.059,0.141,0.059c0.056,0,0.105-0.023,0.142-0.061h0l3.041-3.07h83.241  l3.04,3.07c0,0,0,0,0.001,0c0.035,0.037,0.086,0.061,0.141,0.061c0.051,0,0.102-0.02,0.141-0.059  c0.03-0.029,0.042-0.072,0.049-0.115c0.002-0.01,0.011-0.017,0.011-0.026c0,0,0.001,0,0.001-0.001v-1.307  c0-0.055-0.023-0.105-0.06-0.141L81.496,57.342z M81.555,60.853v-0.636v-0.916l0.511,0.512v7.553h-0.511V60.853z M59.199,37.1  v-0.517v-0.974l21.955,21.955v1.254v0.912l-7.039-7.037c-0.001-0.001-0.002-0.001-0.002-0.001c-0.001-0.001,0-0.001-0.001-0.001  l-0.938-0.91h-0.001l-0.002-0.002L63.029,41.607c0,0,0,0,0,0l-1.428-1.458c-0.001,0-0.002,0-0.002,0s0,0-0.001-0.001l-2.399-2.371  V37.1z M74.559,67.365h-0.385v-0.384l6.847-6.817l0.134,0.135v0.471L74.559,67.365z M81.154,61.336v6.029h-6.029L81.154,61.336z   M74.174,66.417V53.318l6.564,6.562L74.174,66.417z M73.773,52.919v13.979v0.467h-0.541V52.395L73.773,52.919z M50.402,40.49h0.91  h1.064h8.997l1.036,1.057H39.312l1.058-1.057h8.968H50.402z M50.202,39.455l-5.545-2.671h5.545V39.455z M50.603,40.089v-0.316  v-2.989h0.511v2.989v0.316H50.603z M57.98,36.784h0.818v0.191l-6.468,3.115h-0.817v-0.191L57.98,36.784z M51.514,39.455v-2.671  h5.545L51.514,39.455z M62.804,41.947l10.028,10.058v15.36H28.853V52.006l10.059-10.059H62.804z M58.814,37.897  c0.008,0.038,0.018,0.077,0.044,0.104v0l2.112,2.088h-7.718l5.546-2.671v0.441c0,0,0,0,0,0.001  C58.799,37.874,58.812,37.884,58.814,37.897z M51.059,27.497l7.456,7.429H57.77l-0.33-0.306l-0.941-0.942l-5.043-5.042  c-0.001,0-0.001,0-0.002,0l-0.395-0.396V27.497z M50.402,34.02h0.91h4.961l0.541,0.542H44.92l0.523-0.542H50.402z M45.843,33.619  l4.359-4.358v4.358H45.843z M51.514,33.619v-4.358l4.359,4.358H51.514z M50.858,28.605l0.255,0.255v4.759h-0.511v-4.758  L50.858,28.605z M50.658,27.497v0.742l-0.397,0.397l-5.043,5.042c0,0,0,0.001-0.001,0.002c0,0,0,0-0.001,0l-0.903,0.934  l-0.364,0.312h-0.748L50.658,27.497z M42.917,35.326h1.106h13.668h1.107v1.057h-0.863h-6.623h-0.91h-6.622h-0.863V35.326z   M42.917,36.784h0.818l6.467,3.115v0.191h-0.818l-6.467-3.115V36.784z M42.859,38.001c0.039-0.039,0.059-0.09,0.059-0.142v-0.441  l5.545,2.671h-7.691L42.859,38.001z M20.562,58.818v-1.254l21.956-21.955v0.974V37.1v0.676l-2.371,2.372c0,0,0,0,0,0.001  l-1.458,1.456c0,0-0.001,0-0.001,0L28.511,51.781c0,0,0,0,0,0.001l-0.909,0.91c0,0.001,0,0-0.001,0.001l-7.04,7.039V58.818z   M28.453,52.406v14.959h-0.51v-0.467V52.917L28.453,52.406z M27.542,53.318v13.099l-6.564-6.536L27.542,53.318z M20.562,60.299  l0.134-0.135l6.847,6.817v0.384h-0.385l-6.596-6.596V60.299z M20.562,61.336l6.03,6.029h-6.03V61.336z M9.072,69.795  C9.071,69.795,9.072,69.795,9.072,69.795l-2.817,2.844v-0.737l13.906-13.936v0.769l-0.881,0.852c0,0,0,0.001,0,0.001  c0,0.001-0.001,0.001-0.002,0.001l-7.836,7.836L9.072,69.795z M20.161,59.291v0.926v0.636v6.513H19.62v-7.551L20.161,59.291z   M19.219,60.213v7.152h-7.153L19.219,60.213z M9.637,69.795l2.029-2.029h7.753h0.942h6.713h0.668h0.91h44.378h0.941h0.669h6.712  h0.912h7.755l2.055,2.029H9.637z M82.466,67.365v-7.152l7.153,7.152H82.466z M95.461,72.639l-2.816-2.844h-0.001  c0,0-0.001,0-0.001-0.001l-2.398-2.369c0-0.001,0-0.001,0-0.001l-7.837-7.836h-0.001l-0.852-0.852v-0.771l13.906,13.936V72.639z"/></svg>
                        <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span>&nbsp;?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br /> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour répondre à vos objectifs.</p>
                        <br />
                        <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block mb-0" fill="#37cfee" viewBox="0 0 425.2 531.5"><rect x="123.741" y="166.798" width="83.14" height="2.836"/><rect x="219.166" y="166.798" width="35.551" height="5.67"/><rect x="219.166" y="175.302" width="132.281" height="2.834"/><rect x="219.166" y="183.587" width="35.551" height="5.668"/><rect x="219.166" y="192.089" width="132.281" height="2.836"/><rect x="219.166" y="200.416" width="35.551" height="5.67"/><rect x="219.166" y="208.919" width="132.281" height="2.834"/><rect x="219.166" y="217.137" width="35.551" height="5.67"/><rect x="219.166" y="225.643" width="132.281" height="2.836"/><rect x="123.741" y="204.048" width="27" height="5.67"/><rect x="123.741" y="171.22" width="83.14" height="0.85"/><rect x="123.741" y="174.054" width="83.14" height="0.852"/><rect x="123.741" y="176.89" width="83.14" height="0.85"/><rect x="123.741" y="179.724" width="83.14" height="0.85"/><rect x="123.741" y="182.56" width="83.14" height="0.85"/><rect x="123.741" y="185.394" width="83.14" height="0.85"/><rect x="123.741" y="188.228" width="83.14" height="0.85"/><rect x="123.741" y="191.062" width="83.14" height="0.85"/><rect x="123.741" y="193.898" width="83.14" height="0.85"/><rect x="123.741" y="196.732" width="83.14" height="0.85"/><path d="M367.549,265.924h0.002l-0.029-176.053c0-3.107-2.52-5.627-5.627-5.627h-0.008H63.212h-0.008  c-3.107,0-5.626,2.52-5.626,5.627l-0.03,174.639h-0.004v25.219c0,0-0.355,6.34,7.045,6.34c0,0,0.001,0,0.003,0  c0.96,0,115.396-0.004,115.396-0.004c-0.616,7.279-3.382,30.025-3.659,31.65c-0.248,1.463-0.591,2.969-1.78,3.902  c-1.726,1.355-3.547,2.531-5.26,3.6c-0.611,0.381-1.285,0.703-1.938,1.014c-0.53,0.254-1.079,0.514-1.603,0.811l-0.145,0.082  c-0.52,0.287-1.295,0.721-1.127,1.74l-0.001,0.014c-0.096,1.301,0.681,2.117,1.452,2.744l0.096,0.078h93.339l0.08-0.047  c1.248-0.711,1.974-1.494,1.521-2.91c-0.018-0.057-0.025-0.109-0.047-0.168l-0.057-0.15l-0.005-0.006  c-0.082-0.094-0.156-0.203-0.231-0.309c-0.024-0.037-0.052-0.068-0.076-0.104c-0.254-0.363-0.518-0.738-0.918-0.928  c-2.408-1.125-5.18-2.48-7.578-4.309c-1.055-0.805-2.25-1.717-2.639-3.158c-0.186-0.691-0.42-1.604-0.574-2.537  c-0.307-1.84-2.953-23.846-3.567-31.01c0,0,114.245,0.004,115.229,0.004h0.002c7.4,0,7.045-6.34,7.045-6.34V265.924z M70.072,96.796  h284.956v156.243H70.072V96.796z M260.406,339.346c0.078,0.582-0.199,1.051-1.23,1.654h-92.901  c-0.465-0.391-0.886-0.834-1.042-1.418c0.574,0.27,1.185,0.316,1.773,0.316c0.005,0,0.009,0,0.014,0  c30.38-0.012,60.76-0.012,91.141,0.006c0.006,0,0.012,0,0.016,0C258.908,339.904,259.719,339.852,260.406,339.346z M248.148,327.189  c0.162,0.965,0.4,1.898,0.59,2.604c0.451,1.672,1.748,2.66,2.891,3.533c2.453,1.871,5.264,3.244,7.705,4.387  c0.232,0.107,0.43,0.393,0.641,0.693c0.051,0.072,0.102,0.145,0.152,0.217c-0.488,0.439-1.107,0.533-1.967,0.533  c-16.633-0.012-33.264-0.016-49.899-0.016c-13.745,0-27.495,0.002-41.241,0.008c-0.742,0-1.35-0.084-1.867-0.482  c-0.038-0.449,0.27-0.643,0.79-0.93l0.152-0.086c0.502-0.285,1.038-0.541,1.558-0.787c0.67-0.32,1.363-0.65,2.008-1.053  c1.646-1.027,3.565-2.264,5.321-3.643c1.385-1.088,1.778-2.809,2.038-4.336c0.278-1.633,3.062-24.52,3.672-31.764h63.877  C245.178,303.199,247.842,325.342,248.148,327.189z M360.504,295.369h-0.002c-0.986,0-294.951,0-295.909,0c-0.002,0-0.002,0-0.002,0  c-7.012,0-6.298-5.98-6.346-6.023v-22.723H366.85v22.723C366.801,289.389,367.514,295.369,360.504,295.369z"/><circle cx="212.55" cy="280.426" r="5.669"/><rect x="73.653" y="99.632" width="65.673" height="8.504"/><rect x="328.668" y="103.884" width="22.779" height="4.252"/><rect x="234.668" y="103.884" width="22.779" height="4.252"/><rect x="281.668" y="103.884" width="22.779" height="4.252"/><rect x="258.168" y="103.884" width="22.779" height="4.252"/><rect x="305.168" y="103.884" width="22.779" height="4.252"/><rect x="170.383" y="147.557" width="84.333" height="2.836"/><circle cx="93.153" cy="183.464" r="19.5"/><g><g><path d="M212.554,142.368h-0.008c-7.897-0.002-14.323-6.43-14.324-14.322c-0.001-7.902,6.426-14.33,14.327-14.332    c3.829,0,7.424,1.492,10.131,4.199s4.197,6.307,4.197,10.129C226.875,135.944,220.449,142.368,212.554,142.368z M212.553,114.491    c-7.478,0-13.556,6.082-13.555,13.555c0.001,7.467,6.079,13.545,13.548,13.547l0.008,0.389v-0.389    c7.468,0,13.545-6.078,13.546-13.551c0.002-3.615-1.408-7.016-3.969-9.582C219.57,115.901,216.169,114.491,212.553,114.491z     M213.423,139.834v-9.652l6.829,6.828l-0.342,0.271c-1.771,1.4-3.81,2.244-6.055,2.504L213.423,139.834z M214.199,132.059v6.895    c1.785-0.273,3.424-0.951,4.881-2.016L214.199,132.059z M211.675,139.833l-0.43-0.049c-1.07-0.117-2.111-0.377-3.091-0.773    c-1.087-0.439-2.089-1.025-2.978-1.744l-0.336-0.27l6.835-6.832V139.833z M206.006,136.928c0.741,0.551,1.56,1.008,2.438,1.361    c0.783,0.314,1.607,0.541,2.455,0.664v-6.916L206.006,136.928z M221.413,135.85l-0.317-0.494c-2.482-2.479-4.994-4.99-7.507-7.502    c-0.115-0.115-0.173-0.256-0.173-0.42l0.001-11.172l0.426,0.041c4.169,0.414,7.935,3.221,9.595,7.154    c1.68,3.977,1.018,8.682-1.688,11.98L221.413,135.85z M214.191,127.36c2.414,2.412,4.824,4.82,7.235,7.23    c2.291-3.055,2.806-7.256,1.296-10.83c-1.494-3.541-4.812-6.107-8.53-6.633L214.191,127.36z M203.657,135.77l-0.317-0.342    c-2.7-3.295-3.359-7.994-1.68-11.971c1.661-3.934,5.427-6.744,9.595-7.154l0.426-0.041v1.48c0,3.236,0,6.473-0.002,9.705    c0,0.143-0.062,0.291-0.161,0.393l-7.561,7.564L203.657,135.77z M210.905,117.127c-3.718,0.525-7.035,3.092-8.53,6.633    c-1.511,3.578-0.997,7.781,1.295,10.83l7.233-7.232c0.002-3.203,0.002-6.408,0.002-9.615V117.127z"/></g></g></svg>
                                <h4>Création d'un site internet original et unique</h4>
                            </div>
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                            <svg width="60px" className="mx-auto block my-4" fill="#37cfee" viewBox="0 0 243 187.5" ><defs></defs><g><polygon class="fil0" points="0,140 92,61 139,116 215,21 193,27 189,14 243,0 238,54 225,52 227,28 139,137 91,80 9,150 "/></g></svg>
                                <h4>Optimisations pour le référencement naturel</h4>
                            </div>
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block mb-0" fill="#37cfee" viewBox="0 0 100 125"><g><path d="M47.427,50.837v14.116l-1.983-1.924V50.585C46.248,50.667,46.934,50.762,47.427,50.837z M74.898,5.878h-8.804v10.107   H50.222V5.878H23.641L0,35.05h5.018l1.636-2.021v29.954l5.015,0.582c-0.206-0.557-0.239-1.246,0.237-1.98l-3.269-0.375V30.58   l17.5-21.617l19.307,23.843v11.69c0.648,0.129,1.311,0.277,1.983,0.451v-9.691l1.843,2.275l41.263-3.279v25.09l-3.01,0.428   l-2.323,2.4l7.315-1.031V34.113L100,33.529L74.898,5.878z M28.973,63.543l-4.335-0.498c-0.614,0.734-0.873,1.361-0.794,1.936   l10.243,1.189l-1.798-1.797C31.993,64.467,30.457,64.92,28.973,63.543z M67.789,0.005H48.528v4.098h19.261V0.005z M63.517,97.51   l4.053,2.484l5.646-5.646l-2.483-4.053L63.517,97.51z M86.381,58.141l-7.637,7.891c0,0-1.2,1.891-4.834,0.875   c0,0-2.033-0.475-3.461,0.559c-1.429,1.031-2.582,0.264-4.615-1.928c-2.032-2.191-4.779-1.26-5.328-0.822l-5.055-5.203l5.934-6.85   c0,0,0.604-0.768,1.647-0.492c1.044,0.273,8.296-8.438,10.878-10.958c0,0,0.805,1.217,0.549,2.794   c-0.604,3.726,5.934,9.806,7.967,11.998C84.458,58.195,85.447,56.389,86.381,58.141z M58.601,58.324h2.38   c-0.097-0.568-0.592-1.002-1.189-1.002S58.697,57.756,58.601,58.324z M60.98,58.73h-2.38c0.097,0.568,0.593,1.002,1.19,1.002   S60.884,59.299,60.98,58.73z M69.717,64.154h-2.381c0.098,0.568,0.592,1.002,1.19,1.002C69.124,65.156,69.619,64.723,69.717,64.154   z M69.717,63.748c-0.098-0.568-0.593-1.002-1.19-1.002c-0.599,0-1.093,0.434-1.19,1.002H69.717z M78.684,59.602l-7.359-8.355   c-0.915-1.042-2.628-1.034-3.824,0.014c-1.197,1.049-1.426,2.742-0.51,3.781l7.358,8.357c0.915,1.039,2.628,1.033,3.825-0.016   C79.371,62.336,79.599,60.643,78.684,59.602z M74.803,68.332l1.497,1.807l-0.007,1.707l-1.459-0.664l0.094,1.543l-1.459-0.664   l0.094,1.543l-1.459-0.664l0.093,1.543l-1.459-0.662l0.094,1.541l-1.46-0.662l0.094,1.541l-1.459-0.662l0.094,1.543l-1.459-0.664   L66.734,78l-1.461-0.662l0.094,1.541l-1.459-0.662l0.094,1.541l-1.459-0.662l0.094,1.543l-1.459-0.664l0.067,1.104l8.953,8.684   l-7.215,7.215l-9.95-10.975l0.047,0.787l-1.459-0.662l0.094,1.543l-1.459-0.664l0.093,1.543l-1.459-0.662l0.094,1.541l-1.459-0.662   l0.093,1.543l-1.459-0.664l0.093,1.543l-1.458-0.662l0.092,1.541l-1.459-0.662l0.093,1.543l-1.459-0.662l0.093,1.543l-1.459-0.664   l0.093,1.543l-1.458-0.662l0.093,1.541l-1.459-0.662l0.092,1.543l-1.459-0.662l0.093,1.541l-1.46-0.66l0.093,1.541l-1.46-0.662   l0.092,1.543l-1.46-0.662l0.092,1.543l-2.758-0.84l-1.896-2.547c-0.742-1.15,0-1.891,0-1.891l15.6-19.193l-3.804-4.193l1.14-1.141   l-8.31-8.309c-0.204,0.205-0.326,0.326-0.326,0.326s-0.919,0.92-1.961-0.121c-1.042-1.043-4.229-3.004-5.73-1.686   c-1.501,1.316-2.85,2.787-2.636,4.658c0,0,0,0.551-0.275,0.826l-1.808,1.809c0,0-0.771,0.893-1.322,0.34   c-0.552-0.551-4.593-4.6-4.593-4.6s-0.674-0.49,0.062-1.225l1.716-1.717c0,0,0.245-0.367,0.904-0.322   c0.659,0.047,3.325-0.598,3.968-3.385c0,0-0.245-2.391,1.379-3.953c1.625-1.563,5.352-4.639,7.595-5.829s10.731-2.322,19.067,0.313   l0.03,1.746c0,0-11.369-2.176-14.648,1.594c0,0-0.766,1.133,0.828,2.973c1.593,1.838,2.084,2.451,2.084,2.451   s0.582,0.889-0.276,1.746c-0.132,0.133-0.328,0.328-0.563,0.563l8.31,8.309l1.014-1.014l3.442,3.338l6.604-8.123l5.005,5.154   l0.703-0.561c0.243-0.176,2.381-1.008,3.985,0.721c1.05,1.133,1.935,1.973,2.841,2.396c1.052,0.49,2.057,0.332,3.08-0.342   C72.817,67.086,74.592,68.061,74.803,68.332z M32.521,95.205c0-0.752-0.612-1.363-1.367-1.363s-1.367,0.611-1.367,1.363   c0,0.754,0.612,1.363,1.367,1.363S32.521,95.959,32.521,95.205z"/></g></svg>
                                <h4>Présentation de vos prestations</h4>
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
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">La <strong className="font-normal">création d’un site internet professionnel</strong> est un <strong className="font-normal">moyen de communication</strong> permettant de <strong className="font-normal">faire connaître son entreprise et d’attirer de nouveaux clients</strong>. Pour un <strong className="font-normal">charpentier</strong> ou <strong className="font-normal">couvreur</strong>, il est important de <strong className="font-normal">créer un site internet vitrine</strong> pour présenter ses prestations et leurs spécificités. Ceci est également une solution idéale pour <strong className="font-normal">acquérir de la visibilité</strong>.
                <br /><br />
                        En effet, le <strong className="font-normal">site internet vitrine</strong> permet de présenter vos prestations de manière détaillée et de <strong className="font-normal">gagner en visibilité</strong>. Couplé à une <strong className="font-normal">stratégie de référencement naturel</strong> sur-mesure, le <strong className="font-normal">site internet vitrine</strong> est un <strong className="font-normal">support de communication</strong> particulièrement efficace, en plus d’être accessible de manière constante.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-0 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Référencement</span><br /><span className="font-bold text-6xl">LOCAL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg"><strong className="font-normal">Créer un site internet</strong> n'est pas toujours suffisant pour rendre un <strong className="font-normal">projet web performant</strong>. Il est nécessaire de <strong className="font-normal">définir une stratégie de visibilité</strong>. Le <strong className="font-normal">référencement naturel</strong> fait partie des <strong className="font-normal">canaux d’acquisition de trafic principaux sur le Web</strong>. Investir les <strong className="font-normal">premières positions des résultats</strong> d’un <strong className="font-normal">moteur de recherche</strong> comme <strong className="font-normal">Google</strong> est indispensable.
                <br /><br />
                        En vue d'obtenir de la <strong className="font-normal">visibilité</strong>, il est conseillé de définir une <strong className="font-normal">stratégie de référencement local</strong>. Cela se traduit dans le <strong className="font-normal">choix de mots-clés pertinents</strong> vis-à-vis des <strong className="font-normal">requêtes des utilisateurs</strong>, mais également dans la <strong className="font-normal">création des contenus</strong>. Le <strong className="font-normal">référencement local</strong> permet de <strong className="font-normal">générer un trafic qualifié</strong> sur <strong className="font-normal">votre site web</strong> en fonction de vos <strong className="font-normal">secteurs géographiques</strong>.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Design</span><br /><span className="font-bold text-6xl">EFFICACE</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">La définition du <strong className="font-normal">webdesign</strong> est une étape importante lors de la <strong className="font-normal">création d’un site internet</strong>. En effet, le <strong className="font-normal">design du site internet</strong> doit être à la fois <strong className="font-normal">intuitif</strong>, <strong className="font-normal">fonctionnel</strong> et esthétique visuellement. Aussi, le <strong className="font-normal">webdesign d’un site internet</strong> est pensé pour fluidifier l’<strong className="font-normal">expérience utilisateur</strong> durant la <strong className="font-normal">navigation des internautes</strong>.
                <br /><br />
                        Nous <strong className="font-normal">créons des sites web responsive design</strong> avec un <strong className="font-normal">affichage adapté en fonction du support</strong> utilisé par l’internaute : <strong className="font-normal">smartphone</strong>, <strong className="font-normal">tablettes</strong>, <strong className="font-normal">ordinateur</strong>, etc. Par ailleurs, le <strong className="font-normal">webdesign de votre site internet</strong> doit être construit en fonction de votre <strong className="font-normal">identité visuelle</strong> ainsi qu'avec des illustrations de qualité.</p>
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
                            <svg width="90px" className="mx-auto block mb-1 -mt-2" viewBox="0 0 100 125"><path fill="#37cfee" d="M95.82,71.143c-0.015-0.022-0.027-0.04-0.05-0.056c-0.009-0.007-0.011-0.02-0.022-0.024l-2.793-1.367  c-0.016-0.008-0.031,0-0.046-0.004c-0.016-0.003-0.026-0.018-0.042-0.018h-0.059l-14.161-28.32c-0.005-0.01-0.017-0.012-0.023-0.021  c-0.007-0.009-0.004-0.021-0.012-0.029c-0.009-0.009-0.021-0.006-0.031-0.013c-0.01-0.008-0.011-0.021-0.022-0.026L66.348,35.13l0,0  l-15.4-7.686c-0.004-0.002-0.01,0.001-0.014-0.001c-0.015-0.006-0.029-0.005-0.045-0.008c-0.011-0.002-0.018-0.012-0.03-0.012  s-0.019,0.01-0.03,0.012c-0.017,0.003-0.03,0.002-0.046,0.008c-0.004,0.002-0.009-0.001-0.014,0.001L35.369,35.13h0l-12.211,6.135  c-0.011,0.006-0.013,0.019-0.022,0.026c-0.01,0.007-0.023,0.004-0.031,0.013c-0.008,0.008-0.005,0.02-0.012,0.029  c-0.006,0.009-0.019,0.011-0.023,0.021L8.909,69.674H8.85c-0.017,0-0.027,0.014-0.042,0.018c-0.015,0.004-0.031-0.004-0.045,0.004  l-2.795,1.367c-0.011,0.005-0.013,0.018-0.022,0.024c-0.021,0.016-0.035,0.033-0.049,0.056s-0.023,0.041-0.028,0.067  c-0.002,0.012-0.013,0.02-0.013,0.032v1.428c0,0.109,0.09,0.199,0.2,0.199H95.66c0.111,0,0.201-0.09,0.201-0.199v-1.428  c0-0.013-0.012-0.021-0.014-0.032C95.844,71.184,95.834,71.166,95.82,71.143z M92.361,69.674h-1.072l-6.566-13.102  c0-0.001-0.001-0.001-0.002-0.001c0-0.001,0-0.001,0-0.001l-0.514-0.999V55.57l-5.893-11.846c0,0,0,0-0.001,0  c0-0.001,0.001-0.001,0-0.002l-0.632-1.235l0.73-0.709L92.361,69.674z M84.041,56.121l0.281,0.547l-5.86,13.006h-0.126v-0.82  L84.041,56.121z M78.336,67.875v-23.21l5.471,11L78.336,67.875z M84.553,57.127l6.289,12.547H78.9L84.553,57.127z M77.936,43.861  v24.95v0.862h-0.967V42.537v-0.102l0.318,0.16L77.936,43.861z M66.458,36.675v-1.042l11.67,5.863l-0.729,0.708l-0.541-0.271  c0,0-0.001,0-0.001,0c-0.001,0-0.001-0.001-0.001-0.001l-0.882-0.425l-9.516-4.772V36.675z M66.458,37.182l8.583,4.305h-8.583  V37.182z M51.059,27.946l14.351,7.163h-1.05l-0.717-0.345l-1.762-0.85L51.373,28.63l-0.314-0.158V27.946z M50.402,34.293h0.881  h10.465l0.932,0.45H39.023l0.916-0.45H50.402z M40.736,33.893l9.466-4.76v4.76H40.736z M51.483,33.893v-4.76l9.466,4.76H51.483z   M50.855,28.817l0.228,0.114v4.961h-0.48v-4.958L50.855,28.817z M50.658,27.946v0.522l-0.34,0.16c-0.001,0-0.001,0.001-0.002,0.002  c-0.001,0-0.002,0-0.003,0l-10.508,5.284h0l-1.731,0.85c0,0,0,0,0,0l-0.716,0.344h-1.049L50.658,27.946z M35.659,35.509h1.743  h26.913h1.743v0.966h-0.681h-0.91h-8.172h-0.881h-8.201h-0.912h-0.85H37.25h-0.912h-0.68V35.509z M66.058,36.875v4.611h-0.479  v-4.296v-0.315H66.058z M57.155,41.487h-0.661v-0.198l8.023-4.413h0.66v0.197L57.155,41.487z M65.178,37.529v3.958h-7.193  L65.178,37.529z M56.494,40.832v-3.957h7.193L56.494,40.832z M56.094,36.875v4.295v0.316h-0.479V41.17v-4.295H56.094z   M46.501,37.073v-0.197h0.661l8.052,4.413v0.198h-0.661L46.501,37.073z M53.721,41.487h-7.219v-3.958L53.721,41.487z M47.994,36.875  h7.22v3.957L47.994,36.875z M46.101,36.875v0.315v4.296h-0.449V41.17v-4.295H46.101z M36.539,37.073v-0.197H37.2l8.052,4.413v0.198  h-0.661L36.539,37.073z M43.759,41.487h-7.22v-3.958L43.759,41.487z M38.032,36.875h7.22v3.957L38.032,36.875z M35.659,36.875h0.48  v0.315v4.296h-0.48V36.875z M35.458,41.887h0.88h8.201h0.912h0.85h8.201h0.912h0.881h0.911h8.171h0.881h9.583l0.728,0.35v0.1h-51.42  v-0.1l0.726-0.35H35.458z M76.568,42.737v26.937h-51.42V42.737H76.568z M26.674,41.487l8.584-4.305v4.305H26.674z M35.258,35.633  v1.042v0.059l-9.516,4.772l-0.881,0.425c0,0,0,0.001-0.001,0.001c0,0-0.001,0-0.001,0l-0.542,0.271l-0.729-0.708L35.258,35.633z   M24.748,42.436v0.102v27.137h-0.966v-0.862V43.861l0.646-1.265L24.748,42.436z M23.304,41.777l0.731,0.71l-0.631,1.235  c0,0,0,0,0,0.001s0,0,0,0L17.479,55.57c0,0,0,0,0,0.001c0,0.001-0.001,0.001-0.001,0.001l-0.486,1.002v0.001l-6.563,13.099H9.355  L23.304,41.777z M17.393,56.665l0.259-0.533l5.73,12.722v0.82h-0.127L17.393,56.665z M22.816,69.674H10.875l6.287-12.547  L22.816,69.674z M17.879,55.664l5.502-11.004v23.221L17.879,55.664z M95.461,72.469H6.255v-1.103l2.641-1.292h0.137h1.519h12.574  h0.456h1.367h51.819h1.367h0.456h12.575h1.52h0.135l2.641,1.292V72.469z"/></svg>
                            <h4 className="-mt-8 font-bold century"><span className="font-bold">Présentation de vos prestations</span></h4>
                            <p>Nous mettons en avant les spécificités de vos prestations de <strong className="font-normal">charpentier</strong> au sein de <strong className="font-normal">pages web</strong> dédiées.</p>
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
                        {/*<div className="w-full flex flex-row one justify-center">*/}
                            <div className="w-full md:w-2/3 px-10 py-10 md:py-16  ml-0">
                                <h3 className="century capitalize text-2xl pb-6" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">1/</span>VOUS PRENEZ CONTACT POUR METTRE EN PLACE VOTRE PROJET
                                </h3>
                                <h4 className="century text-lg  pb-3 text-justify" /*data-aos='fade-left'*/>
                                    <span className="font-bold">En nous contactant, notre chef de projet étudiera votre demande et vous recontactera pour préciser la définition de vos besoins.</span>
                                </h4>
                                <p /*data-aos='fade-bottom'*/ className="text-justify century">Plus votre demande sera détaillée, plus nous serons à même de vous proposer une solution pertinente et performante. N'hésitez pas à nous renseigner sur vos <strong className="font-normal">objectifs, cibles</strong> et autres motivations à <strong className="font-normal">créer un site web pour votre entreprise</strong>.</p>
                            </div>
                            {/*<div className="w-full md:w-1/3 chiffres century text-bleu -mt-64 mb-6">
                            1
                            </div>
                        </div>*/}
                        {/*<div className="w-full flex flex-row two justify-center">
                            <div className="w-full md:w-1/3 chiffres century text-bleu -mt-64 mb-6">
                                2
                            </div>*/}
                            <div className="w-full md:w-2/3 px-10 py-10 md:py-16 ml-auto">
                                <h3 className="century capitalize text-2xl tracking-wider pb-6" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">2/</span>NOUS DÉFINISSONS VOTRE PROJET EN FONCTION DE VOS BESOINS
                                </h3>
                                <h4 className="century text-lg  pb-3 text-justify" /*data-aos='fade-left'*/>
                                    <span className="font-bold">Une fois votre demande formulée, nous nous rencontrons pour mieux cerner vos besoins et vous mettre en place une solution qui vous correspond.</span>
                                </h4>
                                <p /*data-aos='fade-bottom'*/ className="text-justify century">Il s'agit d'une étape fondamentale afin de comprendre vos besoins, votre activité ainsi que vos ambitions. C'est à partir de cette étape que nous définissons le mode opératoire pour votre création ainsi que la <strong className="font-normal">stratégie de référencement de site internet</strong>.</p>
                            </div>
                        {/*</div>*/}
                        {/*<div className="w-full flex md:flex-row three justify-center">*/}
                            <div className="w-full md:w-2/3 px-10 py-10 md:py-16 ml-0">
                                <h3 className="century capitalize text-2xl pb-6" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">3/</span>VOUS VALIDEZ LE PROJET UNE FOIS QU’IL VOUS CORRESPOND
                                </h3>
                                <h4 className="century text-lg pb-3 text-justify" /*data-aos='fade-left'*/>
                                    <span className="font-bold">À la suite de notre rencontre, nous vous proposons une maquette visuelle et des textes rédigés et optimisés spécifiquement pour votre site web.</span>
                                </h4>
                                <p /*data-aos='fade-bottom'*/ className="text-justify century">La livraison de la <strong className="font-normal">maquette</strong> est le moment pour vous de suggérer vos ajustements quant aux textes rédigés ainsi que sur l'aspect visuel du site. Une fois les modifications réalisées, vous serez libres de <strong className="font-normal">valider la maquette de votre futur site web</strong>.</p>
                            </div>
                            {/*<div className="w-full hidden md:block lg:block xl:block md:flex md:w-1/3 chiffres century text-bleu -mt-64 mb-6">
                                    3
                            </div>
                        </div>*/}
                        {/*<div className="w-full flex flex-row two justify-center">
                            <div className="w-full md:w-1/3 chiffres century text-bleu -mt-64 mb-6">
                                4
                            </div>*/}
                            <div className="w-full md:w-2/3 px-10 py-10 md:py-16 ml-auto">
                                <h3 className="century capitalize text-2xl pb-6" /*data-aos="zoom-in"*/>
                                    <span className="text-bleu">4/</span>NOUS METTONS EN ROUTE LA RÉALISATION DE VOTRE PROJET
                                </h3>
                                <h4 className="century text-lg pb-3 text-justify" /*data-aos='fade-left'*/>
                                    <span className="font-bold">Après que vous ayez validé notre proposition graphique et éditoriale, nos techniciens réalisent la mise en ligne votre site internet.</span>
                                </h4>
                                <p /*data-aos='fade-bottom'*/ className="text-justify century">Lorsque <strong className="font-normal">votre site internet</strong> est publié sur le <strong className="font-normal">nom de domaine</strong> choisi, nos <strong className="font-normal">référenceurs web</strong> mettent en place toutes les optimisations nécessaires pour <strong className="font-normal">être visible sur les moteurs de recherche</strong>. Par la suite, des mises à jours et modifications sont régulièrement effectuées grâce au suivi mis en place.</p>
                            </div>
                        {/*</div>*/}
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
                            <a href="https://lacazenoelcharpente.com/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Lacaze & Noel</h4></a>
                        </div>

                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation2 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="http://arnhabitat47.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">ARN Habitat 47</h4></a>
                        </div>
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation3 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="http://charpente-desmarty.com/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Marc Desmarty</h4></a>
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
                        Création de site internet pour charpentier :<br /><span className="font-bold">Nos clients sont satisfaits</span>
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
                        <div className="text-lg century my-2">HONTANS</div>
                        <div className="italic">« Client depuis 4 ans, très satisfait du travail réalisé par la société Linkweb, à l'écoute, compétente, un vrai plus pour mon entreprise. »</div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
                        <img
                            src={stars}
                            alt="Création site internet Toulouse"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Access Auto</div>
                        <div className="italic">« Entièrement satisfaite de leurs services. Bon référencement et bon suivi du site.
                            Laurie, d'accessauto.fr »
                            </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500"*/>
                        <img
                            src={stars}
                            alt="Création site internet Agen"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Idéo Arrosage</div>
                        <div className="italic">« Je suis très satisfait du site Ideo-Arrosage que Linkweb a réalisé pour nous, le personnel est très réactif et à l'écoute, de la création jusqu'au suivi quotidien. »</div>
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
                        Création de site internet pour charpentier :<br /><span className="font-bold">Une solution en accord avec vos besoins</span>
                    </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="CRÉER UNE PLATEFORME POUR DYNAMISER SA COMMUNICATION WEB">
                                <p>Le <strong>développement d’un site internet vitrine</strong> est indispensable pour <strong className="font-bold">dynamiser la communication de son entreprise et investir le web</strong>. <strong>Avoir un site internet</strong> permet de présenter son activité dans des <strong className="font-bold">pages web détaillées</strong>, mais ce n’est pas tout. <strong>Créer un site internet</strong> est essentiel pour <strong className="font-bold">gagner en notoriété et en visibilité</strong>.
                                <br /><br />
                                Ceci est indispensable en vue du bon <strong>développement de votre entreprise</strong>. Il est important de travailler son <strong>image de marque</strong> en soignant son contenu et en proposant le <strong className="font-bold">maximum d’informations à destination des utilisateurs</strong>.
                                <br/><br/>
                                <strong>Mettre en place un site internet</strong> performant suppose la <strong className="font-bold">création de contenus de qualité</strong> en adéquation avec les <strong>attentes des internautes</strong>. C’est de cette façon que vous attirerez de <strong>nouveaux clients</strong>.
                                </p>
                            </div>
                            <div label="APPORTER DE LA VISIBILITÉ À SON ENTREPRISE">
                                <p>Un <strong className="font-bold">site internet performant</strong> est nécessairement un <strong className="font-bold">site internet visible</strong>. <strong>Être visible sur le Web</strong> est indispensable pour tirer profits des bienfaits d’un <strong>site internet professionnel</strong>. Cela passe par la définition et la <strong className="font-bold">mise en place d’une stratégie de visibilité</strong>. De plus, cette dernière devra être orientée pour <strong className="font-bold">générer du trafic qualifié en vue d’attirer de potentiels clients</strong> pour votre entreprise.
                            <br /><br />
                                Également, il faut savoir qu’il est indispensable de veiller à la diversification des moyens d’actions au sein de sa stratégie. C’est pourquoi, nos stratégies de référencement sont sur-mesure et sont pensées pour vous permettre d’obtenir de premiers résultats à court ou moyen terme.
                            <br/><br/>
                                Les stratégies que nous menons sont définies en fonction de vos objectifs, de vos cibles, mais pas seulement. De plus, elles sont évolutives. C’est pourquoi, un suivi est effectué pour vous permettre d’envisager des ajustements, mais également pour vous engager dans des opportunités qui s’offriront à vous.
                            <br/><br/>
                                De la mise en place d’un <strong>code HTML</strong> valide vis-à-vis des <strong className="font-bold">standards du web</strong>, à la <strong className="font-bold">rédaction web optimisée pour des mots-clés finement sélectionnés</strong>, notre travail a pour vocation de vous apporter des performances maximales.
                                </p>
                            </div>
                            <div label="OBTENIR UN SITE WEB PERFORMANT">
                                <p>Il est important de souligner que <strong className="font-bold">générer des performances sur un site web</strong> ne dépend pas seulement de la mise en place d’une <strong>stratégie de référencement naturel</strong>. En effet, un <strong className="font-bold">site internet est conçu pour des utilisateurs</strong> et doit donc répondre à leurs attentes en matière de contenu, comme d’<strong>expérience utilisateur</strong>. Le travail sur la <strong>visibilité d'un site web</strong> doit donc être accompagné d'un travail de fond au sujet du <strong className="font-bold">webdesign d'un site (UX design et UI design)</strong>.
                                <br /><br />
                                Il est donc nécessaire de veiller à la <strong className="font-bold">création d’une interface intuitive</strong> et d’une <strong className="font-bold">expérience utilisateur</strong> soignée pour <strong className="font-bold">guider l’utilisateur durant sa navigation</strong>. Cela va vous permettre de maintenir un <strong>utilisateur sur votre site web</strong> plus longtemps et ainsi favoriser une navigation suivant votre <strong>tunnel de conversion</strong> en vue d’<strong className="font-bold">obtenir un taux de conversion maximal</strong>.
                                <br/><br/>
                                Ceci est particulièrement fondamental si votre objectif consiste à <strong className="font-bold">obtenir des contacts grâce à votre site internet</strong>.
                            </p>
                            </div>
                        </Accordion>
                    </div>
                </section>

                <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselCharpentier />
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
query lastsThreePostsSiteInternetCharpentier {
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
export default SiteInternetCharpentier;




