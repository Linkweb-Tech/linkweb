import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";

import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";

import CarouselChocolatier from "../../components/carousel-slides/chocolatier-slides";

import Accordion from "../../components/accordion";
import SEO from "../../components/seo";
import SimpleMap from "../../components/simpleMap";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";

import stars from '../../images/stars.png';
import arriereplan from "../../images/creation-site-internet-chocolatier.jpg";
import siteinternet from "../../images/site-internet-chocolatier.jpg";
import referencement from "../../images/referencement-site-internet-chocolatier.jpg";
import webdesign from "../../images/webdesign-site-internet-chocolatier.jpg";
import realisation1 from "../../images/point-cafe.jpg";
import realisation2 from "../../images/coconuts.jpg";
import realisation3 from "../../images/boulangerie-du-mayne.jpg";
import map from "../../images/map.jpg";
import surmesure from "../../images/web.svg"



class SiteInternetChocolatier extends Component {

    constructor(props) {
        super(props);

        this.metiers = ['chocolatier', 'confiseur', 'pâtissier', 'glacier', 'artisan'];
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
                    title="Création site internet pour Chocolatier à Toulouse - Linkweb"
                    description="Vous souhaitez créer un site web pour votre chocolaterie à Toulouse (31) ou à Agen (47) ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-chocolatier/"
                    nom="Créer un site internet internet Chocolatier"
                    slug="creation-site-internet-toulouse/site-internet-chocolatier/"
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

                <section className="flex items-center justify-start w-full mx-auto pb-0 my-32 md:my-42 lg:my-42 xl:my-48 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + arriereplan + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top' }}>
                    <div className="max-w-6xl mx-auto lg:mx-56 py-2 w-full flex-col items-end">
                        <div className="mt-12 -mb-24 w-full flex flex-col items-center lg:items-start">
                            <div className="w-1/2  text-3xl text-center font-bold text-white century">4.6/5</div>
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Création site internet de <span className="text-bleu">Chocolatier</span></h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-1/2 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Linkweb, partenaire des Chocolatiers à Toulouse et Agen.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-2/3 lg:mx-0 flex flex-col lg:flex-row justify-center pb-24 lg:justify-start">
                            <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-white shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <svg width="80px" viewBox="0 0 100 125" fill="#37cfee" className="mx-auto block mt-4"><g><path d="M42.506,7.319c-0.58-0.033-1.158-0.049-1.736-0.073c-1.156-0.056-2.314-0.066-3.471-0.099   c-0.578-0.013-1.156-0.011-1.734-0.018l-1.736-0.014l-0.595-0.004l0.005,0.596l0.014,1.734c0.007,0.578,0.004,1.157,0.019,1.735   c0.032,1.157,0.044,2.314,0.099,3.471c0.025,0.579,0.041,1.157,0.074,1.735l0.096,1.735l0.127,1.735   c0.045,0.579,0.102,1.156,0.162,1.734c0.063-0.579,0.118-1.156,0.164-1.734l0.125-1.735l0.097-1.735   c0.034-0.579,0.049-1.157,0.074-1.735c0.054-1.157,0.066-2.314,0.099-3.471c0.015-0.579,0.012-1.157,0.019-1.735l0.009-1.148   l1.15-0.009c0.578-0.006,1.156-0.005,1.734-0.018c1.156-0.034,2.314-0.043,3.471-0.098c0.578-0.026,1.156-0.042,1.736-0.074   l1.734-0.097c1.156-0.082,2.314-0.159,3.471-0.29c-1.156-0.131-2.314-0.209-3.471-0.291L42.506,7.319z" /><path d="M64.264,7.319c-0.577-0.033-1.157-0.049-1.734-0.073c-1.157-0.056-2.313-0.066-3.471-0.099   c-0.58-0.013-1.157-0.011-1.735-0.018l-1.735-0.014l-0.596-0.004l0.005,0.596l0.013,1.734c0.008,0.578,0.005,1.157,0.02,1.735   c0.032,1.157,0.045,2.314,0.1,3.471c0.024,0.579,0.04,1.157,0.073,1.735l0.097,1.735l0.125,1.735   c0.047,0.579,0.102,1.156,0.164,1.734c0.062-0.579,0.116-1.156,0.162-1.734l0.126-1.735l0.098-1.735   c0.032-0.579,0.048-1.157,0.073-1.735c0.055-1.157,0.066-2.314,0.099-3.471c0.016-0.579,0.012-1.157,0.02-1.735l0.009-1.148   l1.149-0.009c0.578-0.006,1.155-0.005,1.735-0.018c1.157-0.034,2.313-0.043,3.471-0.098c0.577-0.026,1.157-0.042,1.734-0.074   L66,7.996c1.156-0.082,2.313-0.159,3.47-0.29C68.313,7.575,67.156,7.498,66,7.416L64.264,7.319z" /><polygon points="28.122,96.23 30.545,93.809 33.561,96.822 36.575,93.809 39.59,96.822 42.604,93.809 45.619,96.822 48.634,93.809    51.648,96.822 54.663,93.809 57.678,96.822 60.691,93.809 63.707,96.822 66.722,93.809 69.735,96.822 72.751,93.809 75.175,96.23    75.175,89.086 28.122,89.086  " /><polygon points="66.384,55.687 55.263,65.512 44.5,57.246 34.075,59.25 28.636,53.026 28.122,53.648 28.122,87.904 75.175,87.904    75.175,54.881 71.371,58.201  " /><path d="M77.605,41.618l-3.607,0.342V26.117v-1.182V3.177H52.24h-1.182h-21.76v21.759v1.182v15.275l-2.029-0.173l-3.629-3.558   l-7.516,14.974l4.363,8.414l6.452-7.823v-0.001l1.669-2.024l5.909,6.761l10.28-1.975l10.412,7.995l10.989-9.71l4.993,2.516   l5.163-4.507l0,0l0.966-0.843l3.348,7.394l3.206-9.146L77.605,41.618z M72.816,41.672l-12.271,1.16l-4.901-0.222   c0.037-0.376,0.075-0.752,0.105-1.128l0.125-1.716l0.097-1.717c0.035-0.573,0.05-1.145,0.075-1.717   c0.054-1.145,0.067-2.289,0.098-3.435c0.018-0.572,0.013-1.145,0.021-1.717l0.01-1.131l2.885-0.024   c1.157-0.034,2.313-0.043,3.471-0.098c0.577-0.025,1.157-0.042,1.734-0.074L66,29.756l1.734-0.127   c0.578-0.046,1.157-0.102,1.735-0.165c-0.578-0.063-1.157-0.118-1.735-0.164L66,29.173l-1.736-0.097   c-0.577-0.032-1.157-0.049-1.734-0.074c-1.157-0.055-2.313-0.064-3.471-0.098l-3.471-0.029l-0.595-0.005l0.004,0.594l0.015,1.717   c0.007,0.572,0.003,1.145,0.019,1.717c0.031,1.146,0.045,2.29,0.1,3.435c0.024,0.572,0.04,1.144,0.074,1.717l0.096,1.717   l0.126,1.716c0.029,0.375,0.069,0.749,0.105,1.123l-3.291-0.148V26.117h20.576V41.672z M52.24,4.358h20.576v20.577H52.24V4.358z    M30.48,4.358h20.578v20.577H30.48V4.358z M51.059,26.117v16.286l-11.155-0.504l-6.038-0.515c0.099-0.9,0.172-1.801,0.237-2.7   c0.039-0.513,0.062-1.026,0.095-1.538c0.033-0.511,0.053-1.024,0.074-1.536c0.02-0.513,0.047-1.025,0.061-1.536l0.039-1.538   c0.027-0.829,0.03-1.659,0.037-2.488c0.963,0.003,1.927-0.013,2.891-0.016c0.579-0.002,1.156-0.026,1.735-0.038   c0.579-0.017,1.157-0.024,1.735-0.053l1.736-0.073l1.734-0.102l1.734-0.13c0.58-0.05,1.158-0.106,1.736-0.174   c-0.578-0.066-1.156-0.124-1.736-0.172l-1.734-0.13l-1.734-0.101l-1.736-0.073c-0.578-0.029-1.156-0.036-1.735-0.053   c-0.579-0.012-1.156-0.036-1.735-0.038c-1.156-0.004-2.313-0.035-3.471-0.016l-0.59,0.009l0.006,0.574   c0.014,1.024,0.008,2.049,0.042,3.073l0.038,1.538c0.016,0.511,0.041,1.023,0.063,1.536c0.02,0.511,0.041,1.024,0.074,1.536   c0.031,0.512,0.055,1.025,0.094,1.538c0.065,0.897,0.139,1.795,0.236,2.694l-3.311-0.283V26.117H51.059z" /></g></svg>
                        <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span>&nbsp;?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br /> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour répondre à vos objectifs.</p>
                        <br />
                        <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 512 640" fill="#37cfee"><g><g><g><g><g><path d="M255.938,451.043c-0.768,0-1.536-0.293-2.121-0.879c-26.561-26.56-52.78-50.011-78.136-72.689       C97.563,307.607,35.861,252.421,35.861,169.161c0-61.502,50.036-111.538,111.538-111.538c27.329,0,48.402,6.675,66.318,21.008       c15.041,12.032,28.182,29.671,42.22,56.779c14.037-27.108,27.179-44.747,42.219-56.779       c17.916-14.333,38.989-21.008,66.319-21.008c61.571,0,111.663,50.036,111.663,111.538c0,83.222-61.701,138.382-139.816,208.217       c-25.4,22.707-51.665,46.188-78.264,72.786C257.473,450.75,256.705,451.043,255.938,451.043z M147.399,63.624       c-58.194,0-105.538,47.344-105.538,105.538c0,80.577,60.819,134.974,137.819,203.842       c24.744,22.131,50.306,44.993,76.257,70.803c25.989-25.847,51.599-48.741,76.386-70.9       c76.998-68.836,137.815-123.206,137.815-203.744c0-58.194-47.4-105.538-105.663-105.538c-55.187,0-80.603,29.24-105.854,79.745       c-0.509,1.016-1.547,1.658-2.684,1.658c-1.136,0-2.175-0.642-2.683-1.658C228.001,92.863,202.585,63.624,147.399,63.624z" /></g></g><g><path d="M355.938,277.318c-0.979,0-1.927-0.48-2.497-1.336c-11.466-17.2-48.931-19.057-64.507-19.057      c-7.54,0-12.647,0.395-12.698,0.398c-1.311,0.099-2.537-0.661-3.023-1.883c-0.485-1.223-0.118-2.619,0.907-3.444      c20.164-16.233,42.463-24.464,66.276-24.464c24.42,0,41.227,8.791,41.931,9.165c1.059,0.563,1.681,1.704,1.58,2.899      c-0.1,1.195-0.902,2.216-2.041,2.596l-27.464,9.154l4.477,22.384c0.281,1.404-0.47,2.812-1.793,3.359      C356.712,277.244,356.322,277.318,355.938,277.318z M288.934,250.926c17.362,0,46.008,2.015,62.074,14.047l-3.009-15.047      c-0.297-1.484,0.558-2.956,1.993-3.435l22.394-7.464c-6.854-2.439-18.193-5.495-31.99-5.495      c-19.433,0-37.827,5.852-54.808,17.418C286.638,250.935,287.756,250.926,288.934,250.926z" /></g><g><path d="M261.011,362.25c-1.102,0-2.124-0.606-2.647-1.591c-0.294-0.553-7.222-13.769-8.835-33.768      c-1.488-18.435,1.492-46.313,24.135-74.439c0.825-1.024,2.221-1.394,3.444-0.906c1.223,0.485,1.986,1.711,1.884,3.023      c-0.049,0.615-4.569,61.721,18.657,77.204c1.191,0.794,1.655,2.32,1.107,3.645c-0.547,1.321-1.951,2.08-3.359,1.793      l-22.384-4.477l-9.155,27.464c-0.379,1.139-1.399,1.941-2.595,2.041C261.178,362.246,261.095,362.25,261.011,362.25z       M272.595,263.967c-24.983,36.838-17.07,72.066-11.895,86.731l7.458-22.373c0.478-1.436,1.952-2.295,3.434-1.993l15.038,3.007      C273.633,312.009,272.332,280.13,272.595,263.967z" /></g><g><path d="M243.416,276.938c-10.994,0-20.173-8.285-20.898-18.861c-0.373-5.423,1.483-10.669,5.226-14.771      c3.708-4.064,8.826-6.514,14.411-6.897c5.711-0.398,15.618,4.918,25.149,10.077c3.756,2.032,7.303,3.951,9.911,5.106      c1.017,0.45,1.701,1.426,1.778,2.536c0.076,1.109-0.467,2.17-1.411,2.756c-2.51,1.558-5.826,4.017-9.337,6.621      c-10.254,7.604-17.928,13.015-23.314,13.383C244.424,276.921,243.918,276.938,243.416,276.938z M242.816,242.385      c-0.085,0-0.169,0.002-0.25,0.008c-4.038,0.277-7.728,2.037-10.39,4.955c-2.627,2.88-3.931,6.544-3.672,10.317      c0.533,7.79,7.694,13.806,16.017,13.234c4.05-0.276,13.356-7.178,20.151-12.216c1.864-1.383,3.675-2.726,5.365-3.934      c-1.757-0.916-3.646-1.938-5.589-2.989C257.137,247.804,247.123,242.385,242.816,242.385z" /></g><g><path d="M275.999,257.334c-1.034,0-2.002-0.535-2.551-1.422c-1.886-3.05-4.868-7.115-8.025-11.418      c-7.917-10.791-16.104-21.949-16.584-28.958c-0.464-6.772,1.629-13.324,5.895-18.447c4.299-5.164,10.278-8.254,16.836-8.705      c13.576-0.924,25.301,9.856,26.256,23.792c0.479,7.015-6.103,19.033-12.468,30.654c-2.627,4.796-5.107,9.327-6.617,12.722      c-0.451,1.016-1.429,1.699-2.538,1.774C276.135,257.331,276.067,257.334,275.999,257.334z M273.208,194.328      c-0.407,0-0.816,0.014-1.228,0.042c-4.907,0.336-9.396,2.665-12.636,6.557c-3.273,3.932-4.878,8.974-4.52,14.198      c0.361,5.273,9.073,17.148,15.436,25.819c1.897,2.586,3.733,5.088,5.333,7.372c1.335-2.585,2.893-5.428,4.503-8.368      c5.107-9.326,12.104-22.099,11.743-27.362C291.138,202.348,282.954,194.328,273.208,194.328z" /></g><g><path d="M136,397.334c-0.768,0-1.536-0.293-2.121-0.879c-1.172-1.171-1.172-3.071,0-4.242L437.483,88.608      c1.172-1.171,3.07-1.171,4.242,0c1.172,1.171,1.172,3.071,0,4.242L138.121,396.455C137.536,397.041,136.768,397.334,136,397.334      z" /></g><g><path d="M86,197.333c-0.768,0-1.536-0.293-2.121-0.879c-1.172-1.171-1.172-3.071,0-4.242l150-150      c1.171-1.172,3.071-1.172,4.242,0c1.172,1.171,1.172,3.071,0,4.242l-150,150C87.536,197.041,86.768,197.333,86,197.333z" /></g><g><path d="M76,397.334c-0.768,0-1.536-0.293-2.121-0.879c-1.172-1.171-1.172-3.071,0-4.242l100-100      c1.171-1.172,3.071-1.172,4.242,0c1.172,1.171,1.172,3.071,0,4.242l-100,100C77.536,397.041,76.768,397.334,76,397.334z" /></g><g><path d="M306,167.333c-0.768,0-1.535-0.293-2.121-0.879c-1.172-1.171-1.172-3.071,0-4.242l50-50c1.172-1.172,3.07-1.172,4.242,0      c1.172,1.171,1.172,3.071,0,4.242l-50,50C307.535,167.041,306.768,167.333,306,167.333z" /></g><g><path d="M476,367.334c-0.768,0-1.535-0.293-2.121-0.879l-17.5-17.5c-1.172-1.171-1.172-3.071,0-4.242l15.379-15.379      l-15.379-15.379c-1.172-1.171-1.172-3.071,0-4.242l17.5-17.5c1.172-1.172,3.07-1.172,4.242,0c1.172,1.171,1.172,3.071,0,4.242      l-15.379,15.379l15.379,15.379c1.172,1.171,1.172,3.071,0,4.242l-15.379,15.379l15.379,15.379c1.172,1.171,1.172,3.071,0,4.242      C477.535,367.041,476.768,367.334,476,367.334z" /></g><g><path d="M86.002,470.667c-0.241,0-0.486-0.029-0.73-0.091l-26.667-6.666c-1.048-0.262-1.875-1.067-2.164-2.109      s0.005-2.158,0.77-2.922l16.036-16.036l-27.836-5.567c-1.625-0.324-2.678-1.905-2.354-3.529c0.325-1.625,1.906-2.678,3.53-2.354      l33.333,6.666c1.085,0.217,1.962,1.013,2.283,2.072c0.321,1.059,0.033,2.208-0.75,2.99l-16.253,16.254l21.526,5.381      c1.607,0.401,2.584,2.03,2.183,3.638C88.57,469.757,87.346,470.667,86.002,470.667z" /></g><circle cx="56" cy="54.333" r="10" /><circle cx="276" cy="54.333" r="10" /><circle cx="466" cy="74.333" r="10" /><circle cx="416" cy="354.334" r="10" /><circle cx="346" cy="444.334" r="10" /><circle cx="156" cy="444.334" r="10" /><circle cx="196" cy="274.334" r="10" /><g><path d="M51,337.334c-9.925,0-18-8.075-18-18s8.075-18,18-18s18,8.075,18,18S60.925,337.334,51,337.334z M51,307.334      c-6.617,0-12,5.383-12,12s5.383,12,12,12s12-5.383,12-12S57.617,307.334,51,307.334z" /></g><g><path d="M411,447.334c-15.439,0-28-12.561-28-28s12.561-28,28-28s28,12.561,28,28S426.439,447.334,411,447.334z M411,397.334      c-12.131,0-22,9.869-22,22s9.869,22,22,22s22-9.869,22-22S423.131,397.334,411,397.334z" /></g></g></g></g></svg>
                                <h4>Mise en avant de vos réalisations</h4>
                            </div>
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M93.21,69.76H6.79a3,3,0,0,1-3-3V37.36a3,3,0,0,1,3-3H93.21a3,3,0,0,1,3,3V66.72A3,3,0,0,1,93.21,69.76ZM6.79,35.31a2.05,2.05,0,0,0-2,2V66.72a2,2,0,0,0,2,2H93.21a2,2,0,0,0,2-2V37.36a2.05,2.05,0,0,0-2-2Z" /><path fill="#37cfee" d="M14.73,43.7H9.93V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M17.91,50.86h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M17.91,58h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M17.91,65.17h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M24,43.7H19.21V38.91H24Zm-3.79-1H23V39.91H20.21Z" /><path fill="#37cfee" d="M24,50.86H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M24,58H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M30,58h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M24,65.17H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M30,65.17h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,65.17H31.22v-4.8H60Zm-27.82-1H59v-2.8H32.22Z" /><path fill="#37cfee" d="M36,58h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z" /><path fill="#37cfee" d="M42,58h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z" /><path fill="#37cfee" d="M48,58h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z" /><path fill="#37cfee" d="M54,58h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,58h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z" /><path fill="#37cfee" d="M66,58H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M66,65.17H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M72.05,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M84.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M90.07,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M72.05,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M30,50.86h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M36,50.86h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z" /><path fill="#37cfee" d="M42,50.86h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z" /><path fill="#37cfee" d="M48,50.86h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z" /><path fill="#37cfee" d="M54,50.86h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,50.86h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z" /><path fill="#37cfee" d="M66,50.86H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M72.05,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M90.07,57.83H82.19a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h6.88V47.06H81.39V50.8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V46.06h9.68Z" /><path fill="#37cfee" d="M30,43.7h-4.8V38.91H30Zm-3.8-1H29V39.91h-2.8Z" /><path fill="#37cfee" d="M36,43.7h-4.8V38.91H36Zm-3.8-1H35V39.91h-2.8Z" /><path fill="#37cfee" d="M42,43.7h-4.8V38.91H42Zm-3.8-1H41V39.91h-2.8Z" /><path fill="#37cfee" d="M48,43.7h-4.8V38.91H48Zm-3.8-1H47V39.91h-2.8Z" /><path fill="#37cfee" d="M54,43.7h-4.8V38.91H54Zm-3.8-1H53V39.91h-2.8Z" /><path fill="#37cfee" d="M60,43.7h-4.8V38.91H60Zm-3.8-1H59V39.91h-2.8Z" /><path fill="#37cfee" d="M66,43.7H61.25V38.91H66Zm-3.79-1H65V39.91H62.25Z" /><path fill="#37cfee" d="M72.05,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M78.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M84.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M90.07,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M82.19,57.83a.5.5,0,0,1-.5-.5v-6h-.8a.5.5,0,0,1,0-1h1.8v7A.5.5,0,0,1,82.19,57.83Z" /></svg>
                                <h4>Optimisation pour le référencement naturel</h4>
                            </div>
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 90 112.5" fill="#37cfee"><polygon points="18.173,22.665 0.5,28.181 11.88,64.641 18.173,62.677 " /><polygon points="70.995,43.857 70.995,73.209 48.561,73.209 46.564,79.277 76.632,89.145 89.5,49.932 " /><path d="M68.498,70.6H20.783V0.595h47.715V70.6z M24.104,67.277h41.074V3.917H24.104V67.277z" /><rect x="29.279" y="15.151" width="30.723" height="2.081" /><rect x="29.279" y="19.986" width="30.723" height="2.082" /><rect x="29.279" y="25.114" width="30.723" height="2.081" /><rect x="29.279" y="29.952" width="30.723" height="2.081" /><path d="M44.368,57.577v-1.772c-1.251-0.054-2.461-0.389-3.171-0.802l0.56-2.181c0.783,0.43,1.883,0.82,3.095,0.82  c1.063,0,1.789-0.41,1.789-1.156c0-0.711-0.595-1.155-1.975-1.625c-1.994-0.668-3.356-1.602-3.356-3.408  c0-1.643,1.155-2.928,3.151-3.321v-1.771h1.825v1.641c1.25,0.057,2.09,0.318,2.705,0.615l-0.541,2.107  c-0.485-0.205-1.343-0.636-2.685-0.636c-1.214,0-1.604,0.522-1.604,1.045c0,0.616,0.652,1.009,2.238,1.604  c2.219,0.783,3.113,1.809,3.113,3.486c0,1.66-1.173,3.075-3.32,3.45v1.9h-1.825V57.577z" /></svg>
                                <h4>Obtention de devis et de nouveaux clients</h4>
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
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">La <strong className="font-normal">création de site internet vitrine</strong> est un moyen très efficace pour <strong className="font-normal">développer la communication de son entreprise</strong>. Dans le cadre de l’artisanat et en particulier de la <strong className="font-normal">chocolaterie</strong>, ce <strong className="font-normal">type de site internet</strong> va constituer une plateforme de contact. Non seulement, il permet d’exposer vos réalisations et vos prestations, mais vous offre une <strong className="font-normal">visibilité</strong> importante.
                <br /><br />
                        En effet le <strong className="font-normal">site vitrine</strong> est idéal pour les <strong className="font-normal">artisans</strong> locaux souhaitant se faire connaître dans leur région. Il s’agit d’un <strong className="font-normal">outil de communication</strong> efficace pour <strong className="font-normal">générer des contacts</strong> et <strong className="font-normal">btenir des demandes pertinentes</strong>o.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Référencement</span><br /><span className="font-bold text-6xl">LOCAL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Le <strong className="font-normal">référencement naturel</strong>, ou <strong className="font-normal">SEO</strong>, fait partie des <strong className="font-normal">canaux d’acquisition de trafic principaux sur le Web</strong>. Ainsi, la mise en place d’une <strong className="font-normal">stratégie de référencement local</strong> est un moyen efficace pour <strong className="font-normal">être visible dans les résultats de recherche de Google</strong> pour des requêtes pertinentes.
                <br /><br />
                        Que ce soit au niveau du <strong className="font-normal">choix des mots-clés</strong> ou de la <strong className="font-normal">création des contenus</strong>, le <strong className="font-normal">référencement local</strong> a pour objectif de <strong className="font-normal">générer un trafic qualifié sur votre site internet</strong>. Ainsi, ce sont des utilisateurs présents dans vos secteurs géographiques auprès desquels vous serez en mesure de communiquer.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Design</span><br /><span className="font-bold text-6xl">INTUITIF</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">La <strong className="font-normal">création de site internet</strong> est aussi exigeante en ce qui concerne le <strong className="font-normal">contenu du site</strong> que le <strong className="font-normal">web design</strong>. En effet, établir un <strong className="font-normal">webdesign intuitif</strong>, original et fonctionnel grâce à l'<strong className="font-normal">UI et UX design</strong>, est indispensable pour <strong className="font-normal">guider les utilisateurs durant leur navigation</strong>, mais également mettre en valeur votre entreprise.
                <br /><br />
                        Nous <strong className="font-normal">créons des sites web responsive design</strong> adaptés en fonction du <strong className="font-normal">support de lecture</strong> (<strong className="font-normal">smartphone</strong>, <strong className="font-normal">tablettes</strong>, <strong className="font-normal">ordinateur</strong>, etc.). Aussi, le choix des illustrations et le respect de votre <strong className="font-normal">identité visuelle</strong> sont importants pour apporter une cohérence globale sur <strong className="font-normal">votre site web</strong>.</p>
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
                            <svg width="50px" className="mx-auto block" fill="#37cfee" viewBox="0 0 100 125"><path d="M83.511,74.89c-1.267-0.817-2.846-0.765-4.027,0.138c-0.105,0.079-0.262,0.079-0.365,0c0,0-0.001,0-0.001-0.001  c-1.183-0.9-2.762-0.954-4.027-0.137c-1.402,0.903-2.049,2.617-1.649,4.366c0.521,2.278,2.421,3.854,3.923,4.774  c0.597,0.366,1.267,0.549,1.936,0.549c0.669,0,1.338-0.183,1.935-0.549c1.502-0.921,3.402-2.496,3.923-4.773  C85.56,77.507,84.913,75.793,83.511,74.89z M83.21,78.811c-0.386,1.685-2.057,2.925-3.02,3.515c-0.549,0.339-1.23,0.337-1.78,0  c-0.962-0.59-2.633-1.83-3.019-3.515c-0.255-1.115,0.237-1.889,0.783-2.24c0.271-0.175,0.561-0.262,0.846-0.262  c0.311,0,0.616,0.104,0.886,0.31c0.821,0.625,1.969,0.625,2.79,0c0.518-0.396,1.166-0.413,1.731-0.048  C82.973,76.922,83.465,77.695,83.21,78.811z" /><path d="M53.305,79.256c0.521,2.278,2.421,3.854,3.923,4.774c0.597,0.366,1.266,0.549,1.936,0.549s1.338-0.183,1.935-0.549  c1.502-0.921,3.402-2.496,3.924-4.774c0.4-1.749-0.247-3.463-1.649-4.366c-1.265-0.817-2.845-0.763-4.027,0.138  c-0.105,0.079-0.262,0.079-0.365,0c0,0-0.001,0-0.001-0.001c-1.182-0.9-2.762-0.954-4.027-0.137  C53.552,75.793,52.904,77.507,53.305,79.256z M56.037,76.57c0.271-0.175,0.561-0.262,0.846-0.262c0.311,0,0.616,0.104,0.886,0.31  c0.821,0.625,1.969,0.625,2.79,0c0.518-0.396,1.166-0.413,1.731-0.048c0.546,0.352,1.038,1.125,0.783,2.239  c-0.386,1.686-2.058,2.926-3.02,3.516c-0.549,0.338-1.23,0.336-1.78,0c-0.962-0.59-2.634-1.831-3.02-3.515  C54.999,77.695,55.491,76.922,56.037,76.57z" /><path d="M43.236,74.89c-1.265-0.817-2.846-0.763-4.027,0.138c-0.104,0.078-0.262,0.078-0.365,0c0,0,0-0.001,0-0.001  c-1.181-0.899-2.762-0.954-4.026-0.137c-1.402,0.903-2.05,2.617-1.649,4.366c0.521,2.278,2.421,3.854,3.923,4.774  c0.597,0.366,1.266,0.549,1.936,0.549s1.338-0.183,1.935-0.549c1.502-0.921,3.402-2.496,3.924-4.774  C45.286,77.507,44.638,75.793,43.236,74.89z M42.936,78.81c-0.386,1.686-2.058,2.926-3.02,3.516c-0.549,0.338-1.23,0.336-1.78,0  c-0.962-0.59-2.634-1.831-3.02-3.515c-0.255-1.115,0.237-1.889,0.783-2.24c0.271-0.175,0.561-0.262,0.846-0.262  c0.311,0,0.616,0.104,0.886,0.31c0.821,0.625,1.969,0.625,2.79,0c0.518-0.396,1.165-0.413,1.731-0.048  C42.699,76.922,43.191,77.695,42.936,78.81z" /><path d="M75.091,54.157c-1.402,0.903-2.049,2.617-1.649,4.366c0.521,2.275,2.42,3.853,3.923,4.774  c0.597,0.366,1.267,0.549,1.936,0.549c0.669,0,1.339-0.183,1.936-0.549c1.502-0.922,3.402-2.499,3.923-4.773  c0.401-1.749-0.247-3.464-1.648-4.367c-1.265-0.816-2.845-0.763-4.027,0.137c-0.105,0.079-0.261,0.08-0.366,0  C77.936,53.395,76.356,53.34,75.091,54.157z M77.906,55.886c0.821,0.625,1.969,0.624,2.789-0.001  c0.519-0.396,1.165-0.412,1.732-0.047c0.545,0.352,1.038,1.125,0.783,2.24c-0.385,1.683-2.057,2.924-3.02,3.515  c-0.548,0.338-1.23,0.339-1.78,0c-0.962-0.591-2.634-1.832-3.02-3.515c-0.255-1.115,0.237-1.889,0.783-2.24  c0.271-0.175,0.561-0.262,0.846-0.262C77.331,55.576,77.636,55.68,77.906,55.886L77.906,55.886z" /><path d="M89.274,47.875H77.541l-5.872-37.011c-0.086-0.546-0.599-0.917-1.145-0.831L10.73,19.52  c-0.545,0.086-0.917,0.599-0.831,1.144l6.285,39.619c0.042,0.263,0.186,0.497,0.4,0.653c0.172,0.124,0.377,0.19,0.587,0.19  c0.052,0,0.104-0.004,0.157-0.013L27.75,59.46v29.518c0,0.553,0.448,1,1,1h60.524c0.552,0,1-0.447,1-1V48.875  C90.274,48.322,89.827,47.875,89.274,47.875z M88.274,49.875v18.052H70.392V52.695l6.732-1.068c0.262-0.041,0.497-0.186,0.652-0.399  c0.156-0.215,0.22-0.482,0.179-0.744l-0.096-0.608H88.274z M49.935,67.927V55.94l3.876-0.615c-0.569,0.902-0.771,2.04-0.506,3.198  c0.521,2.275,2.421,3.853,3.923,4.774c0.597,0.366,1.266,0.549,1.936,0.549s1.339-0.183,1.936-0.549  c1.502-0.922,3.402-2.498,3.923-4.774c0.4-1.749-0.247-3.463-1.649-4.366c-0.162-0.104-0.329-0.194-0.499-0.27l5.517-0.875v14.914  H49.935z M68.392,69.927v18.051H49.935V69.927H68.392z M42.936,58.077c-0.386,1.684-2.058,2.925-3.02,3.516  c-0.549,0.338-1.23,0.338-1.779,0c-1.125-0.69-2.516-1.819-2.955-3.312l7.761-1.231C43.009,57.372,43.019,57.713,42.936,58.077z   M44.926,54.71l-2.107-13.281c0.379,0.101,0.772,0.17,1.189,0.17c0.285,0,0.579-0.023,0.879-0.071  c0.727-0.115,1.364-0.357,1.911-0.705L48.9,54.08L44.926,54.71z M34.161,41.178c-1.354,0.212-2.35-0.019-3.047-0.71  c-0.629-0.625-1.062-1.66-1.287-3.08c-0.614-3.869,1.253-4.674,2.948-4.943c0.37-0.059,0.738-0.087,1.101-0.087  c1.115,0,2.179,0.273,3.075,0.801c1.125,0.663,1.843,1.649,2.022,2.779v0.001C39.356,38.345,37.197,40.695,34.161,41.178z   M49.971,31.095c0.92-1.035,2.262-1.737,3.778-1.978c0.309-0.049,0.629-0.083,0.949-0.083c1.449,0,2.907,0.698,3.41,3.867  c0.225,1.418,0.133,2.537-0.275,3.325c-0.453,0.876-1.335,1.407-2.699,1.624c-3.057,0.483-5.853-1.08-6.235-3.487  C48.72,33.234,49.101,32.073,49.971,31.095z M42.237,38.852c-0.584-0.621-1-1.623-1.202-2.898c-0.294-1.851-0.142-4.138,2.25-4.518  c0.197-0.031,0.386-0.047,0.566-0.047c0.715,0,1.298,0.248,1.77,0.749c0.584,0.621,1,1.623,1.202,2.898  c0.294,1.851,0.142,4.138-2.25,4.518C43.592,39.709,42.828,39.479,42.237,38.852z M42.972,29.461  c-0.739,0.117-1.385,0.365-1.938,0.721l-2.081-13.115l3.975-0.631l2.079,13.102C44.379,29.377,43.699,29.344,42.972,29.461z   M63.073,58.077c-0.386,1.684-2.058,2.925-3.02,3.516c-0.549,0.338-1.23,0.338-1.779,0c-1.176-0.722-2.654-1.917-3.02-3.515  c-0.255-1.115,0.237-1.889,0.783-2.24c0.271-0.175,0.561-0.262,0.846-0.262c0.311,0,0.616,0.104,0.886,0.31h0  c0.821,0.625,1.969,0.624,2.789-0.001c0.518-0.396,1.165-0.412,1.732-0.047C62.836,56.189,63.328,56.963,63.073,58.077z   M75.823,49.809l-24.947,3.958l-2.386-15.04c0.095-0.24,0.182-0.485,0.246-0.751c1.324,1.225,3.223,1.962,5.302,1.962  c0.463,0,0.935-0.036,1.41-0.112c2.007-0.318,3.408-1.22,4.163-2.681c0.616-1.191,0.771-2.682,0.474-4.556  c-0.832-5.241-4.074-5.858-6.648-5.446c-1.972,0.312-3.733,1.244-4.96,2.623c-0.419,0.471-0.751,0.978-1.01,1.504  c-0.065-0.089-0.132-0.176-0.201-0.259l-2.362-14.888l24.947-3.958L75.823,49.809z M12.031,21.338l24.947-3.958l2.37,14.94  c-0.018,0.047-0.035,0.096-0.051,0.144c-0.387-0.384-0.828-0.733-1.33-1.029c-1.587-0.936-3.543-1.278-5.505-0.966  c-2.562,0.406-5.442,1.991-4.61,7.231c0.297,1.873,0.903,3.242,1.853,4.186c0.917,0.91,2.104,1.368,3.542,1.368  c0.391,0,0.801-0.034,1.229-0.103c2.543-0.403,4.618-1.842,5.709-3.705c0.113,0.178,0.245,0.327,0.372,0.483l2.395,15.093  l-24.947,3.958L12.031,21.338z M33.19,58.597c0.545,2.234,2.415,3.789,3.9,4.701c0.597,0.366,1.266,0.549,1.936,0.549  s1.339-0.183,1.936-0.549c1.502-0.922,3.402-2.498,3.924-4.774c0.14-0.615,0.154-1.215,0.049-1.79l3.001-0.476v11.669H29.75v-8.784  L33.19,58.597z M29.75,69.927h18.185v18.051H29.75V69.927z M70.392,87.978V69.927h17.883v18.051H70.392z" /></svg>
                            <h4 className="font-bold century"><span className="font-bold">Présentation de vos réalisations</span></h4>
                            <p>Nous mettons en avant vos réalisations ainsi que les spécificités de vos prestations de <strong className="font-normal">chocolatier</strong> au sein de <strong className="font-normal">pages web</strong> dédiées.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="12.937 19.988 486.829 591.2012500000001"><g><path fill="#37cfee" d="M453.892,19.988H58.84c-25.311,0-45.903,20.595-45.903,45.909v263.348c0,25.312,20.592,45.903,45.903,45.903h83.62v81.085   c0,20.245,16.483,36.716,36.744,36.716h152.511c21.244,0,38.528-17.287,38.528-38.535v-79.265h83.648   c25.295,0,45.874-20.592,45.874-45.903V65.897C499.766,40.583,479.187,19.988,453.892,19.988z M58.84,27.988h395.052   c20.884,0,37.874,17.006,37.874,37.909v38.814H20.937V65.897C20.937,44.994,37.94,27.988,58.84,27.988z M237.442,197.73h37.855   c29.951,0,54.318,24.355,54.318,54.291V306.2H183.117v-54.18c0-14.968,6.092-28.54,15.929-38.371   C208.883,203.819,222.465,197.73,237.442,197.73z M362.243,454.414c0,16.837-13.695,30.535-30.528,30.535H179.204   c-15.85,0-28.744-12.882-28.744-28.716v-85.085v-55.511c0-0.806,0.647-1.438,1.474-1.438h26.075   c0.354,0.102,0.72,0.175,1.107,0.175h154.499c0.387,0,0.753-0.072,1.107-0.175h26.076c0.81,0,1.444,0.632,1.444,1.438V454.414z    M453.892,367.149h-83.647v-51.512c0-5.204-4.236-9.438-9.444-9.438h-0.001h-23.183v-54.18c0-34.347-27.956-62.291-62.318-62.291   h-37.855c-17.184,0-32.765,6.986-44.051,18.266c-11.286,11.279-18.276,26.852-18.276,44.026v54.178h-23.182   c-5.224,0-9.474,4.233-9.474,9.438v0.001v51.511H58.84c-20.9,0-37.903-17.003-37.903-37.903V112.711h470.829v216.535   C491.766,350.146,474.775,367.149,453.892,367.149z" /><path fill="#37cfee" d="M256.369,364.854c-11.108,0-20.146,9.034-20.146,20.14c0,7.416,3.978,14.056,10.338,17.592v27.703c0,2.209,1.791,4,4,4   h11.611c2.209,0,4-1.791,4-4v-27.703c6.36-3.537,10.338-10.177,10.338-17.592C276.51,373.888,267.475,364.854,256.369,364.854z    M260.719,396.329c-1.536,0.599-2.547,2.078-2.547,3.727v26.232h-3.611v-26.232c0-1.648-1.011-3.128-2.547-3.727   c-4.66-1.817-7.791-6.373-7.791-11.336c0-6.693,5.449-12.14,12.146-12.14c6.694,0,12.141,5.446,12.141,12.14   C268.51,389.956,265.379,394.512,260.719,396.329z" /><path fill="#37cfee" d="M65.828,82.413c8.805,0,15.969-7.164,15.969-15.969c0-8.809-7.164-15.976-15.969-15.976   c-8.809,0-15.975,7.167-15.975,15.976C49.853,75.25,57.02,82.413,65.828,82.413z M65.828,58.468c4.394,0,7.969,3.578,7.969,7.976   c0,4.394-3.575,7.969-7.969,7.969c-4.397,0-7.975-3.575-7.975-7.969C57.853,62.046,61.431,58.468,65.828,58.468z" /><path fill="#37cfee" d="M114.807,82.413c8.809,0,15.975-7.164,15.975-15.97c-0.002-8.809-7.168-15.975-15.975-15.975   c-8.809,0-15.975,7.167-15.975,15.976C98.832,75.25,105.999,82.413,114.807,82.413z M114.807,58.468   c4.396,0,7.974,3.579,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969s-7.975-3.575-7.975-7.969   C106.832,62.046,110.41,58.468,114.807,58.468z" /><path fill="#37cfee" d="M163.815,82.413c8.809,0,15.975-7.164,15.975-15.969c0-8.809-7.167-15.976-15.975-15.976   c-8.805,0-15.969,7.167-15.969,15.976C147.846,75.25,155.01,82.413,163.815,82.413z M163.815,58.468   c4.397,0,7.975,3.578,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969c-4.394,0-7.969-3.575-7.969-7.969   C155.846,62.046,159.421,58.468,163.815,58.468z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Site internet sécurisé</span></h4>
                            <p>Nous garantissons la mise en place de <strong className="font-normal">certificat sécurisé</strong> pour une navigation en toute confiance.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" viewBox="0 0 64 80" className="mx-auto block" fill="#37cfee"><path d="M7,57h36.434c1.349,1.543,2.92,2.901,4.694,4.01l1.342,0.838C49.632,61.949,49.816,62,50,62s0.368-0.051,0.53-0.152  l1.342-0.838c4.507-2.818,7.76-7.194,9.159-12.322l0.934-3.425c0.144-0.528-0.164-1.074-0.69-1.225l-0.843-0.241  c-3.827-1.094-7.165-3.314-9.651-6.422c-0.379-0.475-1.183-0.475-1.562,0c-0.384,0.48-0.796,0.932-1.219,1.369V26  c0-0.552-0.448-1-1-1h-2v-3c0-11.028-8.972-20-20-20S5,10.972,5,22v3H3c-0.552,0-1,0.448-1,1v26C2,54.757,4.243,57,7,57z M50,39.546  c2.624,2.925,5.979,5.038,9.775,6.144l-0.674,2.472c-1.266,4.642-4.209,8.602-8.289,11.152L50,59.821l-0.812-0.507  c-4.08-2.55-7.024-6.51-8.29-11.152l-0.674-2.472C44.021,44.584,47.376,42.472,50,39.546z M7,22c0-9.925,8.075-18,18-18  s18,8.075,18,18v3h-4v-3c0-7.72-6.28-14-14-14s-14,6.28-14,14v3H7V22z M13,25v-3c0-6.617,5.383-12,12-12s12,5.383,12,12v3H13z M4,27  h42v13.544c-1.902,1.474-4.073,2.579-6.431,3.254l-0.843,0.241c-0.527,0.15-0.834,0.696-0.69,1.225l0.934,3.425  c0.622,2.281,1.629,4.4,2.932,6.312H7c-1.654,0-3-1.346-3-3V27z" /><path d="M48,54c0.256,0,0.512-0.098,0.707-0.293l7-7l-1.414-1.414L48,51.586l-2.293-2.293l-1.414,1.414l3,3  C47.488,53.902,47.744,54,48,54z" /><path d="M6.914,49.836l-0.369,1.98c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L10,51.915l2.037,0.985  c0.139,0.067,0.287,0.1,0.436,0.1c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418  c0.291-0.261,0.403-0.667,0.288-1.039c-0.115-0.373-0.436-0.645-0.823-0.697l-2.257-0.302l-0.994-1.854  c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302c-0.387,0.052-0.708,0.324-0.823,0.697  c-0.115,0.373-0.002,0.778,0.288,1.039L6.914,49.836z M8.896,48.295c0.318-0.042,0.597-0.235,0.749-0.519L10,47.116l0.354,0.661  c0.152,0.283,0.431,0.476,0.749,0.519l0.614,0.082l-0.385,0.345c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345L8.896,48.295z" /><path d="M25.132,46.683l-2.257-0.302l-0.994-1.854c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302  c-0.387,0.052-0.708,0.324-0.823,0.697c-0.115,0.373-0.002,0.778,0.288,1.039l1.582,1.418l-0.369,1.98  c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L21,51.915l2.037,0.985c0.139,0.067,0.287,0.1,0.436,0.1  c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418c0.291-0.261,0.403-0.667,0.288-1.039  C25.841,47.006,25.52,46.734,25.132,46.683z M22.333,48.723c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345l0.614-0.082c0.318-0.042,0.597-0.235,0.749-0.519L21,47.116l0.354,0.661c0.152,0.283,0.431,0.476,0.749,0.519  l0.614,0.082L22.333,48.723z" /><path d="M36.132,46.683l-2.257-0.302l-0.994-1.854c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302  c-0.387,0.052-0.708,0.324-0.823,0.697c-0.115,0.373-0.002,0.778,0.288,1.039l1.582,1.418l-0.369,1.98  c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L32,51.915l2.037,0.985c0.139,0.067,0.287,0.1,0.436,0.1  c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418c0.291-0.261,0.403-0.667,0.288-1.039  C36.841,47.006,36.52,46.734,36.132,46.683z M33.333,48.723c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345l0.614-0.082c0.318-0.042,0.597-0.235,0.749-0.519L32,47.116l0.354,0.661c0.152,0.283,0.431,0.476,0.749,0.519  l0.614,0.082L33.333,48.723z" /><path d="M17,42c2.155,0,4.127-1.158,5.191-3h3.573l1.789,0.895c0.281,0.141,0.613,0.141,0.895,0L30,39.118l1.553,0.776  c0.281,0.141,0.613,0.141,0.895,0L34.236,39H36c0.265,0,0.52-0.105,0.707-0.293l2-2c0.391-0.391,0.391-1.023,0-1.414l-2-2  C36.52,33.105,36.265,33,36,33H22.191c-1.064-1.842-3.036-3-5.191-3c-3.309,0-6,2.691-6,6S13.691,42,17,42z M17,32  c1.586,0,3.023,0.942,3.662,2.401C20.821,34.765,21.181,35,21.578,35h14.008l1,1l-1,1H34c-0.155,0-0.309,0.036-0.447,0.105  L32,37.882l-1.553-0.776c-0.281-0.141-0.613-0.141-0.895,0L28,37.882l-1.553-0.776C26.309,37.036,26.155,37,26,37h-4.422  c-0.397,0-0.757,0.235-0.916,0.599C20.023,39.058,18.586,40,17,40c-2.206,0-4-1.794-4-4S14.794,32,17,32z" /><rect x="15" y="35" width="2" height="2" /></svg>
                            <h4 className="font-bold century"><span className="font-bold">Conformité au RGPD *</span></h4>
                            <p>Nous réalisons le nécessaire pour rendre votre <strong className="font-normal">plateforme web</strong> respectueuse des données personnelles et du RGPD.</p>
                            <br />
                            <p className="text-xs italic">*Réglement général sur la protection des données</p>
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
                            <h4 className="font-bold century"><span className="font-bold">Optimisation SEO *</span></h4>
                            <p>Nous optimisons les contenus de votre site pour une <strong className="font-normal">visibilité maximale</strong> grâce au <strong className="font-normal">référencement naturel</strong>.</p>
                            <br />
                            <p className="text-xs italic">* <strong className="font-normal">Optimisation pour les moteurs de recherche</strong> (<strong className="font-normal">Search Engine Optimization</strong>)</p>
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
                            <a href="https://pointcafe.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Point Café</h4></a>
                        </div>
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation2 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="http://glacier-lecoconuts.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Glacier Le Coconuts</h4></a>
                        </div>
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation3 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            {/* <a href="http://boulangerie-patisserie-du-mayne.fr/" target="_blank" rel="noreferrer noopener"> */}<h4 className="font-bold text-white">Boulangerie du Mayne</h4>{/*</a>*/}
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
                        Création de site internet de Chocolatier :<br /><span className="font-bold">Nos clients sont satisfaits</span>
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
                        <div className="text-lg century my-2">Lacaze et Noel</div>
                        <div className="italic">« Satisfait du travail réalisé par l'entreprise Linkweb, équipe de professionnels  sérieux et à l'écoute. Je la recommande pour la création de site internet. »</div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
                        <img
                            src={stars}
                            alt="Création site internet Toulouse"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">L'Arbre Rouge</div>
                        <div className="italic">« Propriétaire d'une chambre d'hôte, ils m'ont accompagné pour la création de mon site web et ce que j'apprécie beaucoup, c'est le suivi régulier avec des résultats, et leur réactivité. Je ne peux que conseiller. »
                            </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500"*/>
                        <img
                            src={stars}
                            alt="Création site internet Agen"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">CEREM</div>
                        <div className="italic">« Une équipe dynamique et sympathique. Anthony s'occupe du suivi de notre site. Il est à l’écoute et très réactif. Nous sommes satisfaits ! »</div>
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
                        Création de site internet de Chocolatier :<br /><span className="font-bold">Une solution en accord avec vos besoins</span>
                    </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="DÉVELOPPER LA NOTORIÉTÉ DE VOTRE ENTREPRISE SUR LE WEB">
                                <p>Le <strong className="font-bold">site internet vitrine</strong> est l’outil parfait pour <strong>faire connaître son entreprise</strong> et lui apporter de la <strong>visibilité sur le web</strong>. <strong>Avoir un site internet</strong> de ce type permet de présenter son activité et ses prestations au sein de <strong className="font-bold">pages web conçues pour être visibles</strong>.

                                <br /><br />
                                Plus encore le <strong>site internet</strong> permet de travailler son <strong className="font-bold">image de marque</strong> tout en étendant sa <strong className="font-bold">notoriété sur le Web</strong>. Il est important de soigner le <strong>contenu de ses pages</strong> en exposant le maximum d’<strong className="font-bold">informations utiles pour les utilisateurs</strong>.
                                <br /><br />
                                En effet, la <strong className="font-bold">création de contenus de qualité</strong> et qui répondent aux <strong className="font-bold">attentes des internautes</strong> est indispensable pour se démarquer et ainsi <strong className="font-bold">attirer de nouveaux clients</strong>.
                                </p>
                            </div>
                            <div label="GAGNER EN VISIBILITÉ POUR GÉNÉRER DES CONTACTS PERTINENTS PROCHES DE VOUS">
                                <p>Un <strong>site internet performant</strong> est un <strong className="font-bold">site internet visible</strong>. En effet, la <strong>création d’un site internet professionnel</strong> nécessite la mise en place d’une <strong className="font-bold">stratégie de visibilité</strong> adaptée. C’est pourquoi, nous déterminons une <strong>stratégie de référencement naturel</strong> orientée pour <strong className="font-bold">générer du trafic</strong> et <strong className="font-bold">attirer de potentiels clients</strong>.
                            <br /><br />
                                    Par ailleurs, nous proposons des <strong>stratégies de référencement sur-mesure</strong> pour coller au mieux à vos besoins et vous permettre d’<strong>obtenir des premiers résultats</strong> à court ou moyen terme.
                            <br /><br />
                                    C’est pourquoi, nous mettons tout en oeuvre pour vous donner accès à une stratégie évolutive et adaptée en fonction de vos <strong>cibles</strong>. De la mise en place d’un <strong>code HTML</strong> valide vis-à-vis des <strong className="font-bold">standards du web</strong>, à la <strong className="font-bold">rédaction web optimisée pour des mots-clés finement sélectionnés</strong>, notre travail a pour vocation de vous apporter des performances maximales.
                                </p>
                            </div>
                            <div label="DYNAMISER SON ACTIVITÉ GRÂCE À UN SITE WEB PERFORMANT">
                                <p>Outre la mise en place d’une <strong>stratégie de référencement naturel</strong>, la <strong>création d’un site web</strong> doit être réalisée selon certains procédés pour <strong className="font-bold">générer des performances</strong> intéressantes. En effet, le <strong>site web</strong> s’adresse avant tout à des utilisateurs humains, il doit donc être conçu pour eux en priorité.
                                <br /><br />
                                À ce niveau, la mise en place d’un <strong>site web professionnel</strong> doit résulter d’un travail autour de la <strong className="font-bold">création d’une interface intuitive</strong> et d’une <strong className="font-bold">expérience utilisateur</strong> soignée. Ceci est indispensable pour amener les utilisateurs où vous souhaitez qu’ils aillent.
                                <br /><br />
                                De plus, un <strong>site web</strong> dont la <strong>navigation</strong> sera facilitée est un <strong>site web</strong> susceptible d’<strong className="font-bold">obtenir des contacts</strong> et donc de vous permettre d'<strong className="font-bold">atteindre vos objectifs</strong>.
                            </p>
                            </div>
                        </Accordion>
                    </div>
                </section>

                <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselChocolatier />
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
query lastsThreePostsSiteInternetChocolatier {
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
export default SiteInternetChocolatier;




