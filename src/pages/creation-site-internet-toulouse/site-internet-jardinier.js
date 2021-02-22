import React, { Component } from 'react';
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";

import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";

import CarouselJardinier from "../../components/carousel-slides/jardinier-slides";

import Accordion from "../../components/accordion";
import SimpleMap from "../../components/simpleMap";
import SEO from "../../components/seo";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";


import stars from '../../images/stars.png';
import arriereplan from "../../images/creation-site-internet-jardinier.jpg";
import siteinternet from "../../images/creation-site-vitrine-jardinier.jpg";
import referencement from "../../images/referencement-site-jardinier.jpg";
import webdesign from "../../images/webdesign-site-internet-jardinier.jpg";
import realisation1 from "../../images/faivre-creations-paysagiste.jpg";
import realisation2 from "../../images/nastep.jpg";
import realisation3 from "../../images/jardinier-createur.jpg";
import map from "../../images/map.jpg";
import surmesure from "../../images/web.svg"


class CreationSiteJardinier extends Component {

    constructor(props) {
        super(props);

        this.metiers = ['jardinier', 'paysagiste', 'pépiniériste', 'élagueur', 'aménageur'];
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
                    title="Création de site internet pour Jardinier à Toulouse - Linkweb"
                    description="Vous souhaitez créer un site web pour développer votre visibilité et promouvoir votre entreprise Jardinier ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-jardinier/"
                    nom="Créer un site internet internet pour Jardinier"
                    slug="creation-site-internet-toulouse/site-internet-jardinier/"
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
                            <h1 className="text-4xl md:text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Création de site internet pour <span className="text-bleu">Jardinier</span></h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-1/2 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Linkweb, partenaire des métiers du jardin à Toulouse et Agen.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-center pb-24 lg:justify-start">
                            <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-white shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <svg width="80px" fill="#37cfee" className="mx-auto block mt-4" viewBox="0 0 96 120"><g><rect x="51.2874" y="81.3015" width="2.8796" height="1.9232" /><path d="M29.6312,4.069V2.1458c-1.7499,0-3.1675,0.5334-4.2131,1.5851c-0.3099,0.3119-0.5624,0.6491-0.7714,0.9926   c-0.2089-0.3432-0.4613-0.6804-0.771-0.9921c-1.0457-1.0522-2.4627-1.5856-4.2131-1.5856V4.069   c3.9004,0,4.0215,3.6093,4.0225,4.0211h0.0001c0,0.0016-0.0001,0.0068-0.0001,0.008l1.1629-0.0048l0.7603,0.0048   c0-0.0012-0.0001-0.0063-0.0001-0.008h0.0001C25.6092,7.6783,25.7303,4.069,29.6312,4.069z" /><path d="M13.1586,12.914c0.5606-0.5644,1.3663-0.8503,2.3946-0.8503v-1.9232c-1.5593,0-2.8242,0.477-3.7591,1.418   c-0.2305,0.2319-0.4172,0.4808-0.5841,0.7341c-0.1669-0.2533-0.3536-0.5022-0.5841-0.7341   c-0.9348-0.9409-2.1993-1.418-3.7586-1.418v1.9232c3.2741,0,3.3797,3.0337,3.3811,3.3797h0.0002   c0,0.0009-0.0002,0.0068-0.0002,0.0068l0.9616-0.0054l0.9616,0.0061c0-0.0012-0.0003-0.0106-0.0003-0.0122h0.0003   C12.1716,15.4237,12.189,13.8897,13.1586,12.914z" /><path d="M77.8794,5.0869c0.671-0.6757,1.6293-1.0179,2.8487-1.0179V2.1458c-1.7504,0-3.1675,0.5334-4.2131,1.5856   c-0.3097,0.3118-0.5621,0.6488-0.771,0.9921c-0.2089-0.3433-0.4613-0.6804-0.771-0.9921   c-1.0456-1.0522-2.4627-1.5856-4.2131-1.5856V4.069c3.9004,0,4.0216,3.6093,4.0225,4.0211h0.0001   c0,0.0016-0.0001,0.0068-0.0001,0.008l0.9616-0.0061l0.9616,0.0061c0-0.0016-0.0001-0.0093-0.0001-0.0122h0.0001   C76.7056,8.0675,76.7262,6.2471,77.8794,5.0869z" /><path d="M91.1292,12.914c0.5606-0.5644,1.3663-0.8503,2.3946-0.8503v-1.9232c-1.5593,0-2.8242,0.477-3.7591,1.418   c-0.2305,0.2319-0.4172,0.4808-0.5841,0.7341c-0.1669-0.2533-0.3536-0.5022-0.5841-0.7341   c-0.9348-0.9409-2.1993-1.418-3.7586-1.418v1.9232c3.2741,0,3.3797,3.0337,3.3811,3.3797h0.0002   c0,0.0009-0.0002,0.0068-0.0002,0.0068l0.9616-0.0054l0.9616,0.0061c0-0.0012-0.0003-0.0106-0.0003-0.0122h0.0003   C90.1422,15.4237,90.1596,13.8897,91.1292,12.914z" /><rect x="6.0484" y="76.0583" width="1.9232" height="1.9119" /><path d="M13.0205,76.9316c0-3.537-2.0448-11.8271-6.0105-11.8271c-3.9652,0-6.01,8.2901-6.01,11.8271   c0,3.758,2.1911,6.8754,5.0484,7.4576v7.5421h-2.397v1.9232h35.3671h24.5383H95v-1.9232h-6.0105v-5.6189   c2.8575-0.5822,5.0489-3.6996,5.0489-7.4576c0-3.537-2.0448-11.8271-6.0105-11.8271s-6.0105,8.2901-6.0105,11.8271   c0,3.758,2.1914,6.8754,5.0489,7.4576v5.6189H62.8329c-2.9823-8.0067-4.6304-16.0857-4.9299-24.1248   c2.7248,3.8298,7.1749,6.2239,12.0371,6.2239c8.2485,0,15.1844-6.8777,14.7508-15.6129   c10.0314-4.2002,12.2627-17.576,3.9957-24.7998c0.6329-8.3617-5.8094-15.5275-14.1287-15.8632   C71.9726,6.3328,57.6461,2.3848,49.5971,10.6983c-7.9673-6.2226-19.906-2.6759-23.0728,7.0463   c-8.9722,0.1335-15.6587,8.1551-14.4316,16.7464C0.9205,37.7325-2.4555,52.3827,6.7865,60.0533   c3.1454,2.6106,7.2139,3.7783,11.2984,3.2792c1.4588,6.6772,7.4942,11.6003,14.4212,11.6003c4.9471,0,9.4213-2.4326,12.1331-6.3353   c-0.3752,7.7772-2.0128,15.5888-4.8972,23.3338H23.091v-2.8367c2.3158-0.5625,4.0704-3.1119,4.0704-6.1661   c0-2.6773-1.5471-9.7212-5.032-9.7212s-5.032,7.0439-5.032,9.7212c0,3.0542,1.7546,5.6036,4.0704,6.1661v2.8367H7.9716v-7.5421   C10.8291,83.8069,13.0205,80.6896,13.0205,76.9316z M83.9406,78.8548c0-3.9103,2.1923-9.9039,4.0873-9.9039   s4.0873,5.9936,4.0873,9.9039c0,2.6524-1.3353,4.8772-3.1257,5.4763v-2.8821h-1.9232v2.8821   C85.2759,83.7319,83.9406,81.5072,83.9406,78.8548z M44.4348,83.2247h5.3355v-1.9232h-4.8899   c1.2336-5.6506,1.821-11.3129,1.7606-16.9501l0.0027-0.0183h-0.0029c-0.0181-1.6481-0.0847-3.2942-0.214-4.9371h2.2073v-1.9232   h-4.3108c0.0478,0.628,0.3437,3.0203,0.3924,6.7241c-1.7567,5.276-6.6418,8.8128-12.2096,8.8128   c-6.0101,0-11.2385-4.2631-12.5231-10.0473c1.6589-0.3425,3.2387-0.9421,4.6983-1.8206l-0.9917-1.6481   c-1.5241,0.9175-3.1924,1.5067-4.9587,1.7509l0.0055,0.0399c-0.0965-0.0033-5.7411,1.4224-10.7217-2.7111   c-8.0121-6.6496-5.137-19.3847,4.6021-22.222c2.1136,5.0221,7.0467,8.3394,12.557,8.3394v-1.9232   c-4.9807,0-9.415-3.153-11.0523-7.8496c-1.5645-7.7858,4.4945-15.2518,12.6266-15.2518c0.1254-0.0019,0.2531-0.0023,0.3799,0.0122   l0.8198,0.0925l0.216-0.7968c2.3835-8.8012,12.9872-12.3384,20.1863-6.7754c-1.7523,2.4172-2.715,5.3288-2.715,8.3112   c0,5.1113,2.8083,9.8766,7.3294,12.436l0.9475-1.6734c-3.9192-2.219-6.3537-6.3429-6.3537-10.7626   c0-2.8656,1.0217-5.6616,2.8773-7.8736l-0.0012-0.0009c6.9929-8.1743,20.5417-4.4931,22.3847,6.2321l0.1371,0.7987h1.009   c7.6052,0,13.6115,6.6096,12.7619,14.2564l-0.0582,0.5207l0.4061,0.331c7.818,6.3711,5.5739,18.7499-3.7257,22.1023l-0.2026,0.073   c-3.7129,1.3565-7.9316,0.9804-11.3301-1.0365l-0.9813,1.6537c3.4727,2.0607,7.8241,2.7044,11.9477,1.5281   c0.0005,0.0521,0.0033,0.0944,0.0033,0.1486c0,7.0932-5.763,12.8638-12.8464,12.8638c-5.4016,0-10.2251-3.391-12.0712-8.4532   c0.0355-1.7131,0.125-3.4238,0.2841-5.1303l0.0981-1.0508H50.501v1.9232h5.6471c-0.8499,10.8002,0.7057,21.7342,4.6291,32.5353   H41.7977C42.8488,89.0368,43.7243,86.1329,44.4348,83.2247z M19.0207,82.9284c0-3.0083,1.6974-7.798,3.1088-7.798   s3.1088,4.7897,3.1088,7.798c0,1.9308-0.9053,3.5537-2.1472,4.1257v-2.0339h-1.9232v2.0251   C19.939,86.4599,19.0207,84.8214,19.0207,82.9284z M6.0484,79.5257v2.882c-1.79-0.5991-3.1252-2.8238-3.1252-5.4762   c0-3.9103,2.1922-9.9039,4.0868-9.9039c1.895,0,4.0873,5.9936,4.0873,9.9039c0,2.6524-1.3353,4.8772-3.1257,5.4763v-2.8821H6.0484z   " /><rect x="21.1678" y="82.2246" width="1.9232" height="1.5415" /><rect x="87.0663" y="77.9814" width="1.9232" height="1.9119" /><path d="M60.2823,32.9401c-1.2612,0-2.5059-0.1794-3.7004-0.5339l-0.5465,1.8443c1.372,0.4066,2.8008,0.6127,4.2469,0.6127V32.9401   z" /><path d="M25.9843,57.7399l1.3297,1.3898c0.7123-0.6818,1.3588-1.4372,1.9218-2.2448l-1.5776-1.0996   C27.168,56.4886,26.6046,57.1464,25.9843,57.7399z" /><path d="M69.3828,54.0601c-1.3114-1.2598-2.3336-2.7435-3.0388-4.4099l-1.7711,0.7494c0.8071,1.9077,1.9772,3.606,3.4774,5.0475   L69.3828,54.0601z" /></g></svg>
                        <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span>&nbsp;?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br /> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour répondre à vos objectifs.</p>
                        <br />
                        <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                            <div className="w-full md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 60 75"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(1.000000, 1.000000)" stroke="#000000" stroke-width="2"><path stroke="#37cfee" d="M58,55 C57.9988957,51.973754 55.7433865,49.4224411 52.74011,49.05029 C52.2512824,47.5930843 51.0484972,46.4889318 49.5548862,46.1262656 C48.0612751,45.7635994 46.486071,46.1932239 45.38342,47.264 C44.5256618,45.636909 42.7178193,44.7471072 40.90527,45.0599 C40.5908502,43.4042919 39.4622158,42.0191354 37.9042423,41.3767829 C36.3462688,40.7344304 34.5693526,40.9216282 33.17944,41.87454 C31.7432374,38.8238521 28.6380666,36.9119763 25.267447,37.0030694 C21.8968274,37.0941624 18.8994531,39.1709634 17.63012,42.29477 C15.1222639,41.384867 12.3461325,42.6392297 11.37151,45.12265 C10.4066657,44.8574728 9.37416377,45.025879 8.54358696,45.5838984 C7.71301015,46.1419178 7.16681091,47.034155 7.0476,48.02765 C6.86664,48.01251 6.68488,48 6.5,48 C2.91014913,48 2.22044605e-16,50.9101491 0,54.5 L0,58 L58,58 L58,55 Z" /><path stroke="#37cfee" d="M21.2561,43.99988 C21.7434373,42.622597 22.8688698,41.5674814 24.2746893,41.1698916 C25.6805088,40.7723019 27.1918473,41.0816938 28.32834,41.99973" /><path stroke="#37cfee" d="M39.99972,49.26773 C40.6186172,48.9106547 41.380974,48.9107735 41.99976,49.2680416 C42.6185459,49.6253097 42.9998082,50.2854816 43,51" /><path stroke="#37cfee" d="M50.99972,53.26773 C51.6186172,52.9106547 52.380974,52.9107735 52.99976,53.2680416 C53.6185459,53.6253097 53.9998082,54.2854816 54,55" /><path stroke="#37cfee" d="M10.05,52 C9.88305719,51.177594 10.1394837,50.3262621 10.7328729,49.7328729 C11.3262621,49.1394837 12.177594,48.8830572 13,49.05" /><path stroke="#37cfee" d="M27,48.2561 C28.6348907,47.6798509 30.4554041,48.0931941 31.681155,49.318945 C32.9069059,50.5446959 33.3202491,52.3652093 32.744,54.0001" /><path stroke="#37cfee" d="M32.25,40.35 C34.6606303,37.1912815 35.9770051,33.3334258 36,29.36 L36,28.78 C36.0057192,28.3113775 35.8241459,27.8598576 35.4955833,27.5256625 C35.1670207,27.1914674 34.718652,27.0022463 34.25,27 L23.75,27 C23.281348,27.0022463 22.8329793,27.1914674 22.5044167,27.5256625 C22.1758541,27.8598576 21.9942808,28.3113775 22,28.78 L22,29.36 C22.002566,31.748442 22.4854745,34.1119728 23.42,36.31 L23.81,37.17" /><path stroke="#37cfee" d="M27,27 L31,27 L31,31 C31,32.1045695 30.1045695,33 29,33 C27.8954305,33 27,32.1045695 27,31 L27,27 Z" /><polyline stroke="#37cfee" points="31 4.59 31 26.997 27 26.997 27 4.59" /><path stroke="#37cfee" d="M34,0 C34,2.76142375 31.7614237,5 29,5 C26.2385763,5 24,2.76142375 24,0 L34,0 Z" /></g></g></svg>
                                <h4>Mise en avant de vos réalisations</h4>
                            </div>
                            <div className="w-full md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 64 80"><g data-name="Layer 10"><path fill="#37cfee" d="M63.96,32.679A1,1,0,0,0,63.267,32L45.961,27.212C45.182,21.484,44.088,13.39,44.05,13c0-3.283-6.062-5-12.05-5S19.95,9.717,19.953,12.933c-.041.454-1.135,8.551-1.914,14.279L.733,32a1,1,0,0,0-.477,1.632c2.972,3.31,8.582,6.022,15.832,7.672a15.962,15.962,0,0,0,31.824,0c7.25-1.65,12.86-4.362,15.832-7.672A1,1,0,0,0,63.96,32.679ZM41.24,12H34.414l1.7-1.7A12.956,12.956,0,0,1,41.24,12Zm-7.7-1.955L32,11.586l-1.541-1.541C30.958,10.019,31.468,10,32,10S33.042,10.019,33.541,10.045ZM29.586,12H22.76a12.956,12.956,0,0,1,5.129-1.7Zm0,2-1.7,1.7A12.956,12.956,0,0,1,22.76,14ZM32,14.414l1.541,1.541c-.5.026-1.009.045-1.541.045s-1.042-.019-1.541-.045ZM36.111,15.7l-1.7-1.7H41.24A12.956,12.956,0,0,1,36.111,15.7ZM32,54A13.918,13.918,0,0,1,18.12,41.719c.245.047.5.08.746.125.733.132,1.467.262,2.215.372.523.077,1.056.138,1.587.2.635.078,1.266.161,1.91.223.715.069,1.442.114,2.168.163.494.033.98.078,1.479.1,1.245.059,2.5.093,3.775.093s2.53-.034,3.775-.093c.5-.023.985-.068,1.479-.1.726-.049,1.453-.094,2.168-.163.644-.062,1.275-.145,1.91-.223.531-.066,1.064-.127,1.587-.2.748-.11,1.482-.24,2.215-.372.247-.045.5-.078.746-.125A13.918,13.918,0,0,1,32,54ZM46.833,39.495h0c-.022,0-.043-.006-.065,0A69.87,69.87,0,0,1,32,41a69.87,69.87,0,0,1-14.764-1.505c-.022,0-.043,0-.064,0h0c-6.143-1.326-11.2-3.486-14.213-6.037l1.7-.472C11,36.754,21.17,39,32,39a73.645,73.645,0,0,0,13.179-1.146l-.358-1.967A71.788,71.788,0,0,1,32,37c-9.525,0-18.475-1.767-24.565-4.781l11.773-3.255a1,1,0,0,0,.724-.829c.914-6.715,1.413-10.429,1.687-12.5C23.811,17.2,27.922,18,32,18s8.189-.8,10.381-2.362c.274,2.068.773,5.782,1.687,12.5a1,1,0,0,0,.724.829l16.254,4.494C58.031,36.009,52.976,38.169,46.833,39.495Z" /><path fill="#37cfee" d="M55.382,34.954l-.764-1.848a41.178,41.178,0,0,1-3.906,1.379l.576,1.916A43.267,43.267,0,0,0,55.382,34.954Z" /><path fill="#37cfee" d="M49.248,36.967l-.5-1.937q-.962.246-1.964.464l.424,1.954Q48.252,37.223,49.248,36.967Z" /></g></svg>
                                <h4>Promotion de vos services et de votre savoir-faire</h4>
                            </div>
                            <div className="w-full md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 66 82.5"><g><g><g><path fill="#37cfee" d="M29.959,38.024l-1.663-0.3c-0.176-0.607-0.427-1.214-0.75-1.813l0.96-1.379c0.208-0.299,0.171-0.704-0.087-0.961     l-2.321-2.306c-0.255-0.255-0.66-0.289-0.956-0.084l-1.375,0.957c-0.584-0.32-1.191-0.571-1.814-0.749l-0.286-1.657     c-0.063-0.359-0.374-0.622-0.739-0.622h-3.29c-0.365,0-0.677,0.263-0.739,0.622l-0.286,1.658     c-0.626,0.181-1.234,0.431-1.815,0.749l-1.391-0.959c-0.297-0.205-0.7-0.17-0.956,0.087l-2.306,2.306     c-0.257,0.257-0.293,0.66-0.085,0.959l0.957,1.375c-0.319,0.582-0.569,1.19-0.748,1.817l-1.648,0.299     C8.259,38.09,8,38.4,8,38.763v3.275c0,0.364,0.262,0.677,0.622,0.739l1.642,0.285c0.179,0.632,0.429,1.243,0.749,1.827     l-0.954,1.36c-0.208,0.297-0.175,0.699,0.08,0.958l2.306,2.336c0.255,0.257,0.66,0.297,0.96,0.09l1.396-0.963     c0.586,0.314,1.192,0.561,1.811,0.737l0.286,1.658c0.062,0.359,0.374,0.622,0.739,0.622h3.29c0.365,0,0.677-0.263,0.739-0.622     l0.286-1.657c0.614-0.174,1.219-0.421,1.809-0.736l1.38,0.96c0.3,0.208,0.704,0.171,0.96-0.088l2.321-2.336     c0.256-0.258,0.291-0.662,0.082-0.959l-0.957-1.364c0.324-0.601,0.575-1.211,0.75-1.822l1.657-0.286     c0.36-0.063,0.622-0.374,0.622-0.739v-3.275C30.576,38.399,30.316,38.089,29.959,38.024z M29.076,41.405l-1.514,0.262     c-0.3,0.052-0.54,0.28-0.605,0.578c-0.169,0.764-0.485,1.536-0.941,2.296c-0.152,0.254-0.141,0.574,0.029,0.816l0.869,1.239     l-1.435,1.444l-1.251-0.871c-0.243-0.168-0.562-0.18-0.815-0.026c-0.748,0.449-1.494,0.752-2.28,0.925     c-0.297,0.065-0.526,0.305-0.578,0.604l-0.261,1.515h-2.027l-0.261-1.515c-0.052-0.299-0.279-0.538-0.576-0.604     c-0.785-0.175-1.553-0.486-2.283-0.925c-0.252-0.153-0.569-0.143-0.812,0.025l-1.266,0.872l-1.424-1.443l0.87-1.24     c0.173-0.246,0.182-0.57,0.023-0.826c-0.443-0.715-0.758-1.484-0.934-2.286c-0.066-0.298-0.304-0.525-0.604-0.578l-1.5-0.261     v-2.018l1.505-0.272c0.297-0.054,0.532-0.28,0.598-0.574c0.178-0.796,0.493-1.562,0.935-2.274     c0.158-0.255,0.149-0.578-0.021-0.824l-0.872-1.252l1.42-1.421l1.269,0.875c0.246,0.171,0.568,0.178,0.821,0.021     c0.713-0.442,1.479-0.758,2.275-0.937c0.296-0.066,0.523-0.305,0.575-0.604l0.261-1.515h2.027l0.261,1.515     c0.052,0.3,0.28,0.539,0.578,0.604c0.798,0.176,1.541,0.482,2.272,0.936c0.253,0.157,0.578,0.148,0.823-0.021l1.255-0.873     l1.431,1.422l-0.871,1.25c-0.168,0.243-0.179,0.561-0.027,0.814c0.455,0.758,0.772,1.526,0.941,2.284     c0.066,0.294,0.302,0.521,0.599,0.574l1.519,0.273V41.405z" /></g><g><path fill="#37cfee" d="M19.28,34.308c-3.355,0-6.084,2.729-6.084,6.084c0,3.363,2.729,6.1,6.084,6.1c3.363,0,6.1-2.736,6.1-6.1     C25.379,37.037,22.643,34.308,19.28,34.308z M19.28,44.991c-2.528,0-4.584-2.063-4.584-4.6c0-2.527,2.057-4.584,4.584-4.584     c2.536,0,4.6,2.057,4.6,4.584C23.879,42.928,21.816,44.991,19.28,44.991z" /></g><g><path fill="#37cfee" d="M63.473,54.412h-1.949V30.708c0-0.003-0.002-0.006-0.002-0.01v-0.17C63.693,27.724,65,24.217,65,20.402     c0-9.137-7.433-16.569-16.569-16.569c-5.197,0-9.872,2.311-12.975,6.289H7.212c-2.156,0-3.922,1.756-3.922,3.925v40.365H1.75     c-0.414,0-0.75,0.336-0.75,0.75c0,3.862,3.143,7.005,7.005,7.005h49.212c3.863,0,7.005-3.143,7.005-7.005     C64.223,54.748,63.887,54.412,63.473,54.412z M31.93,18.722H4.792v-4.68c0-1.337,1.089-2.418,2.42-2.418h27.192     c-0.174,0.28-0.343,0.563-0.503,0.856C32.816,14.476,32.161,16.59,31.93,18.722z M4.792,20.222h27.054     c-0.046,3.074,0.78,6.134,2.483,8.879l-2.441,8.962c-0.152,0.56,0.365,1.076,0.924,0.92l10.34-2.871     c5.989,2.022,12.451,0.457,16.87-3.881v22.182H4.792V20.222z M48.431,5.333c12.683,0,19.681,14.829,11.651,24.622     c-0.016,0.019-0.031,0.038-0.05,0.057c-0.005,0.005-0.006,0.011-0.011,0.016c-4.011,4.83-10.58,6.718-16.594,4.592     c-0.145-0.052-0.303-0.058-0.451-0.016l-9.294,2.581l2.181-8.009c0.056-0.206,0.022-0.426-0.094-0.605     c-2.081-3.212-2.376-5.742-2.376-9.099c0-0.015-0.008-0.028-0.009-0.043c0.15-2.126,0.755-4.243,1.835-6.231     C37.896,8.272,42.835,5.333,48.431,5.333z M57.217,60.667H8.005c-2.781,0-5.087-2.073-5.455-4.755c27.744,0-0.285,0,60.121,0     C62.305,58.594,59.999,60.667,57.217,60.667z" /></g><g><path fill="#37cfee" d="M32.611,56.474c-1.001,0-1.815,0.814-1.815,1.815s0.814,1.815,1.815,1.815c1.001,0,1.815-0.814,1.815-1.815     S33.612,56.474,32.611,56.474z M32.611,58.604c-0.174,0-0.315-0.142-0.315-0.315c0-0.174,0.142-0.315,0.315-0.315     c0.174,0,0.315,0.142,0.315,0.315C32.927,58.463,32.785,58.604,32.611,58.604z" /></g><g><path fill="#37cfee" d="M10.384,12.789C9.069,12.789,8,13.858,8,15.173c0,1.315,1.069,2.385,2.384,2.385c1.315,0,2.385-1.069,2.385-2.385     C12.769,13.858,11.699,12.789,10.384,12.789z M10.384,16.058c-0.488,0-0.884-0.396-0.884-0.885c0-0.487,0.396-0.884,0.884-0.884     s0.885,0.396,0.885,0.884C11.269,15.661,10.872,16.058,10.384,16.058z" /></g><g><path fill="#37cfee" d="M16.847,12.789c-1.315,0-2.384,1.069-2.384,2.384c0,1.315,1.069,2.385,2.384,2.385c1.315,0,2.385-1.069,2.385-2.385     C19.232,13.858,18.162,12.789,16.847,12.789z M16.847,16.058c-0.488,0-0.884-0.396-0.884-0.885c0-0.487,0.397-0.884,0.884-0.884     c0.488,0,0.885,0.396,0.885,0.884C17.732,15.661,17.335,16.058,16.847,16.058z" /></g><g><path fill="#37cfee" d="M23.311,12.789c-1.315,0-2.384,1.069-2.384,2.384c0,1.315,1.069,2.385,2.384,2.385c1.315,0,2.385-1.069,2.385-2.385     C25.695,13.858,24.626,12.789,23.311,12.789z M23.311,16.058c-0.488,0-0.884-0.396-0.884-0.885c0-0.487,0.396-0.884,0.884-0.884     c0.488,0,0.885,0.396,0.885,0.884C24.195,15.661,23.798,16.058,23.311,16.058z" /></g><g><path fill="#37cfee" d="M35.655,20.775c3.396,4.682,7.934,7.261,12.776,7.261s9.379-2.579,12.794-7.287l0.082-0.123     c0.337-0.508-0.063-0.877-0.1-0.977c-3.397-4.682-7.934-7.26-12.776-7.26s-9.379,2.578-12.794,7.286     c-0.035,0.1-0.41,0.456-0.082,0.951L35.655,20.775z M48.431,13.889c4.248,0,8.265,2.25,11.328,6.322     c-3.078,4.082-7.087,6.325-11.328,6.325c-4.248,0-8.265-2.251-11.328-6.323C40.181,16.131,44.19,13.889,48.431,13.889z" /></g><g><path fill="#37cfee" d="M48.431,25.437c2.882,0,5.226-2.345,5.226-5.227s-2.344-5.226-5.226-5.226c-2.882,0-5.226,2.344-5.226,5.226     S45.549,25.437,48.431,25.437z M48.431,16.484c2.055,0,3.726,1.671,3.726,3.726s-1.671,3.727-3.726,3.727     s-3.726-1.672-3.726-3.727S46.376,16.484,48.431,16.484z" /></g><g><path fill="#37cfee" d="M48.431,22.634c1.336,0,2.423-1.087,2.423-2.424c0-1.336-1.087-2.423-2.423-2.423c-1.336,0-2.423,1.087-2.423,2.423     C46.008,21.547,47.095,22.634,48.431,22.634z M48.431,19.287c0.509,0,0.923,0.414,0.923,0.923c0,0.51-0.414,0.924-0.923,0.924     s-0.923-0.414-0.923-0.924C47.508,19.701,47.922,19.287,48.431,19.287z" /></g></g></g></svg>
                                <h4>Développement de votre visibilité grâce au SEO</h4>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Votre devis gratuit" />
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-1/2 px-10 mt-16 lg:-mt-64 mb-32">
                    <h3 className="century text-3xl text-center">
                        <span className="text-bleu">68 %</span> des TPE/PME mènent des actions en vue d'améliorer leur référencement naturel d'après une étude réalisée par France Num en 2018.
            </h3>
                    <br />
                    <p className="text-center century"><b>Source :</b> <a className="text-bleu hover:text-black" href="https://www.francenum.gouv.fr/comprendre-le-numerique/20-chiffres-cles-sur-la-presence-sur-internet-des-tpe-pme-en-2018" target="_blank" rel="noreferrer">France Num, 2018</a></p>
                </section>
                <section className="text-center text-black text-2xl century mx-12 mt-8 lg:mx-0">
                    <h2 className="century leading-none">Répondre à vos<br /><span className="text-6xl text-bleu font-bold">BESOINS</span></h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Notre rôle : mettre en place un projet adapté à l'image de votre entreprise.</h3>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Site internet</span><br /><span className="font-bold text-6xl">VITRINE</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">La <strong className="font-normal">création d’un site internet</strong> destiné à promouvoir son <strong className="font-normal">entreprise d’aménagement paysager</strong> dépend des <strong className="font-normal">objectifs</strong> stratégiques. Il est important pour un <strong className="font-normal">jardinier</strong> de présenter ses services proposés, mettre en avant les situations dans lesquelles il sera possible d’être sollicité ainsi que de démontrer sa <strong className="font-normal">compétence et son savoir-faire</strong>.
                <br /><br />
                            Pour ce faire, le <strong className="font-normal">site internet vitrine</strong> va constituer une solution parfaitement adaptée. Il sera pertinent de mettre en avant ses informations pratiques ainsi que ses réalisations dans un espace dédié pour <strong className="font-normal">faciliter les prises de contact</strong>.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Référencement</span><br /><span className="font-bold text-6xl">LOCAL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Pour <strong className="font-normal">donner de la visibilité à son site web</strong>, le développement d’une <strong className="font-normal">stratégie de référencement naturel</strong> efficace va s’imposer. En effet, l’<strong className="font-normal">optimisation de ses contenus</strong> présents en ligne va permettre d’investir les <strong className="font-normal">pages de résultats de recherche des moteurs comme Google</strong> de façon pertinente.
                <br /><br />
                            Ainsi, le <strong className="font-normal">référencement local</strong> apparaît comme une réelle opportunité d’<strong className="font-normal">obtenir de la visibilité</strong> auprès d’un public géographiquement ciblé et donc à même d’interagir avec <strong className="font-normal">votre site web</strong>. De plus, se positionner sur son secteur, pour un <strong className="font-normal">jardinier</strong>, évite la réception de demandes non pertinentes.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')', backgroundPosition: 'right' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Design</span><br /><span className="font-bold text-6xl">INTUITIF</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Le <strong className="font-normal">webdesign d’un site web</strong> destiné à promouvoir une <strong className="font-normal">entreprise d’aménagement paysager</strong> doit faire preuve de simplicité. Dans ce type de cas, le <strong className="font-normal">design du site</strong> va répondre à 2 objectifs. Le premier est de ne pas entraver l’<strong className="font-normal">expérience utilisateur</strong> (<strong className="font-normal">responsive design</strong>, <strong className="font-normal">identité visuelle</strong> cohérente relatiement à la <strong className="font-normal">charte graphique</strong>, etc.). Il doit accompagner le visiteur dans sa navigation.
                <br /><br />
                            Le second objectif, dans le cas d’un <strong className="font-normal">site internet de jardinier</strong>, va être d’accompagner l’<strong className="font-normal">expérience de l’utilisateur</strong> dans un environnement très visuel basé sur la mise en avant de vos réalisations effectuées en tant que professionnel.</p>
                    </div>
                </section>
                <section className="text-center text-black text-2xl mx-auto lg:mx-0 century my-10">
                    <h2 className="century leading-none">Une solution<br /><span className="text-4xl lg:text-6xl text-bleu font-bold">FONCTIONNELLE</span></h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Nous créons un site internet professionnel et qui répond aux problématiques du Web.</h3>
                </section>
                <section className="flex justify-center flex-col items-center">
                    <div className="w-full flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="12.937 19.988 486.829 591.2012500000001"><g><path fill="#37cfee" d="M453.892,19.988H58.84c-25.311,0-45.903,20.595-45.903,45.909v263.348c0,25.312,20.592,45.903,45.903,45.903h83.62v81.085   c0,20.245,16.483,36.716,36.744,36.716h152.511c21.244,0,38.528-17.287,38.528-38.535v-79.265h83.648   c25.295,0,45.874-20.592,45.874-45.903V65.897C499.766,40.583,479.187,19.988,453.892,19.988z M58.84,27.988h395.052   c20.884,0,37.874,17.006,37.874,37.909v38.814H20.937V65.897C20.937,44.994,37.94,27.988,58.84,27.988z M237.442,197.73h37.855   c29.951,0,54.318,24.355,54.318,54.291V306.2H183.117v-54.18c0-14.968,6.092-28.54,15.929-38.371   C208.883,203.819,222.465,197.73,237.442,197.73z M362.243,454.414c0,16.837-13.695,30.535-30.528,30.535H179.204   c-15.85,0-28.744-12.882-28.744-28.716v-85.085v-55.511c0-0.806,0.647-1.438,1.474-1.438h26.075   c0.354,0.102,0.72,0.175,1.107,0.175h154.499c0.387,0,0.753-0.072,1.107-0.175h26.076c0.81,0,1.444,0.632,1.444,1.438V454.414z    M453.892,367.149h-83.647v-51.512c0-5.204-4.236-9.438-9.444-9.438h-0.001h-23.183v-54.18c0-34.347-27.956-62.291-62.318-62.291   h-37.855c-17.184,0-32.765,6.986-44.051,18.266c-11.286,11.279-18.276,26.852-18.276,44.026v54.178h-23.182   c-5.224,0-9.474,4.233-9.474,9.438v0.001v51.511H58.84c-20.9,0-37.903-17.003-37.903-37.903V112.711h470.829v216.535   C491.766,350.146,474.775,367.149,453.892,367.149z" /><path fill="#37cfee" d="M256.369,364.854c-11.108,0-20.146,9.034-20.146,20.14c0,7.416,3.978,14.056,10.338,17.592v27.703c0,2.209,1.791,4,4,4   h11.611c2.209,0,4-1.791,4-4v-27.703c6.36-3.537,10.338-10.177,10.338-17.592C276.51,373.888,267.475,364.854,256.369,364.854z    M260.719,396.329c-1.536,0.599-2.547,2.078-2.547,3.727v26.232h-3.611v-26.232c0-1.648-1.011-3.128-2.547-3.727   c-4.66-1.817-7.791-6.373-7.791-11.336c0-6.693,5.449-12.14,12.146-12.14c6.694,0,12.141,5.446,12.141,12.14   C268.51,389.956,265.379,394.512,260.719,396.329z" /><path fill="#37cfee" d="M65.828,82.413c8.805,0,15.969-7.164,15.969-15.969c0-8.809-7.164-15.976-15.969-15.976   c-8.809,0-15.975,7.167-15.975,15.976C49.853,75.25,57.02,82.413,65.828,82.413z M65.828,58.468c4.394,0,7.969,3.578,7.969,7.976   c0,4.394-3.575,7.969-7.969,7.969c-4.397,0-7.975-3.575-7.975-7.969C57.853,62.046,61.431,58.468,65.828,58.468z" /><path fill="#37cfee" d="M114.807,82.413c8.809,0,15.975-7.164,15.975-15.97c-0.002-8.809-7.168-15.975-15.975-15.975   c-8.809,0-15.975,7.167-15.975,15.976C98.832,75.25,105.999,82.413,114.807,82.413z M114.807,58.468   c4.396,0,7.974,3.579,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969s-7.975-3.575-7.975-7.969   C106.832,62.046,110.41,58.468,114.807,58.468z" /><path fill="#37cfee" d="M163.815,82.413c8.809,0,15.975-7.164,15.975-15.969c0-8.809-7.167-15.976-15.975-15.976   c-8.805,0-15.969,7.167-15.969,15.976C147.846,75.25,155.01,82.413,163.815,82.413z M163.815,58.468   c4.397,0,7.975,3.578,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969c-4.394,0-7.969-3.575-7.969-7.969   C155.846,62.046,159.421,58.468,163.815,58.468z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Site internet sécurisé</span></h4>
                            <p>Nous garantissons la mise en place de <strong className="font-normal">certificat sécurisé</strong> pour une navigation en toute confiance.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   " /><path fill="#37cfee" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z" /><g><path fill="#37cfee" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z" /><rect x="72.041" y="56.851" width="0.312" height="5.159" /></g><path fill="#37cfee" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z" /><path fill="#37cfee" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Site web accessible tous supports</span></h4>
                            <p>Les sites internet que nous créons s'adaptent au <strong>support de navigation</strong> pour une accessibilité sans faille.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 512 640"><g><g><g><path fill="#37cfee" d="M273,338c-1.101,0-2.19-0.37-3.061-1.05l-18.87-14.58l-17.92,14.52c-1.62,1.3-4.02,1.45-5.78,0.36l-189-117     c-2.35-1.45-3.07-4.54-1.62-6.88c0.92-1.48,2.51-2.37,4.25-2.37c0.93,0,1.84,0.26,2.63,0.75l185.98,115.13l18.24-14.771     c1.76-1.42,4.41-1.449,6.21-0.069l19.31,14.93L462.35,215.3c0.771-0.45,1.65-0.69,2.54-0.69c1.76,0,3.41,0.94,4.311,2.45     c0.68,1.15,0.869,2.5,0.54,3.79c-0.341,1.29-1.15,2.38-2.301,3.06L275.54,337.31C274.77,337.76,273.89,338,273,338z" /></g><g><path fill="#37cfee" d="M330.81,491c-2.75,0-5-2.24-5-5s2.25-5,5-5h125.54L251.07,322.37L55.12,481h215.7c2.75,0,4.99,2.24,4.99,5     s-2.24,5-4.99,5H41c-2.11,0-4.01-1.34-4.71-3.33c-0.71-1.99-0.08-4.23,1.57-5.561l209.99-170c1.76-1.42,4.42-1.449,6.21-0.069     l220,170c1.69,1.31,2.36,3.55,1.67,5.569C475.04,489.64,473.14,491,471,491H330.83C330.819,491,330.819,491,330.81,491z      M300.81,491c-2.75,0-5-2.24-5-5s2.25-5,5-5c2.76,0,5,2.24,5,5S303.569,491,300.81,491z" /></g><g><path fill="#37cfee" d="M131,221H41c-2.03,0-3.84-1.21-4.62-3.09c-0.78-1.87-0.35-4.01,1.08-5.45l90-89.99c1.41-1.42,3.61-1.86,5.45-1.09     c1.88,0.78,3.09,2.59,3.09,4.62v90c0,1.32-0.53,2.61-1.47,3.54C133.61,220.47,132.32,221,131,221z M53.07,211H126v-72.93     L53.07,211z" /></g><g><path fill="#37cfee" d="M471,221h-90c-1.32,0-2.601-0.53-3.54-1.46c-0.93-0.94-1.46-2.22-1.46-3.54v-85.91c0-2,1.189-3.81,3.03-4.6     c1.819-0.77,3.989-0.38,5.42,0.98l90,85.91l0,0c1.47,1.4,1.939,3.6,1.189,5.48S473.02,221,471,221z M386,211h72.52L386,141.77     V211z" /></g><g><path fill="#37cfee" d="M313.859,71H191c-2.22,0-4.14-1.43-4.79-3.55c-0.64-2.13,0.17-4.38,2.02-5.61l60-40c1.61-1.08,3.82-1.1,5.46-0.06     l62.85,40c1.859,1.19,2.729,3.5,2.12,5.62C318.04,69.52,316.069,71,313.859,71z M207.51,61h89.18L251.06,31.97L207.51,61z" /></g><g><path fill="#37cfee" d="M221,491c-2.76,0-5-2.24-5-5s2.24-5,5-5h245V236c0-2.76,2.24-5,5-5s5,2.24,5,5v250c0,1.33-0.521,2.59-1.47,3.54     c-0.94,0.939-2.19,1.46-3.53,1.46H221.01H221z M191,491c-2.76,0-5-2.24-5-5s2.24-5,5-5c2.76,0,5,2.24,5,5S193.76,491,191,491z      M161,491H41c-1.32,0-2.61-0.53-3.54-1.46C36.53,488.609,36,487.319,36,486V216c0-1.32,0.53-2.6,1.46-3.53     C38.4,211.53,39.68,211,41,211h90c1.32,0,2.6,0.53,3.54,1.47c0.93,0.93,1.46,2.22,1.46,3.53v20c0,2.76-2.24,5-5,5     c-2.76,0-5-2.24-5-5v-15H46v260h115c2.76,0,5,2.24,5,5S163.76,491,161,491z M381,241c-2.76,0-5-2.24-5-5v-20     c0-1.32,0.53-2.6,1.46-3.53c0.93-0.94,2.22-1.47,3.54-1.47h50c2.76,0,5,2.24,5,5c0,2.76-2.24,5-5,5h-45v15     C386,238.76,383.76,241,381,241z M461,221c-2.76,0-5-2.24-5-5c0-2.76,2.24-5,5-5s5,2.24,5,5C466,218.76,463.76,221,461,221z" /></g><g><path fill="#37cfee" d="M381,271c-2.76,0-5-2.24-5-5V71H136v45c0,2.76-2.24,5-5,5c-2.76,0-5-2.24-5-5V66c0-1.31,0.53-2.6,1.46-3.54     C128.4,61.53,129.69,61,131,61h250c1.319,0,2.6,0.53,3.53,1.47C385.47,63.39,386,64.68,386,66v199.99c0,0,0,0,0,0.01     C386,268.76,383.76,271,381,271z M131,271c-2.76,0-5-2.24-5-5v-90c0-2.76,2.24-5,5-5c2.76,0,5,2.24,5,5v90     C136,268.76,133.76,271,131,271z M131,151c-2.76,0-5-2.24-5-5c0-2.76,2.24-5,5-5c2.76,0,5,2.24,5,5     C136,148.76,133.76,151,131,151z" /></g><rect fill="#37cfee" x="191" y="436" width="20" height="20" /><rect fill="#37cfee" x="221" y="436" width="20" height="20" /><rect fill="#37cfee" x="251" y="436" width="20" height="20" /><rect fill="#37cfee" x="281" y="436" width="20" height="20" /><g><path fill="#37cfee" d="M256,281c-9.45,0-18.62-1.851-27.25-5.5c-8.33-3.53-15.82-8.58-22.25-15c-6.43-6.43-11.47-13.92-15-22.25     c-3.65-8.63-5.5-17.8-5.5-27.25c0-9.45,1.85-18.62,5.5-27.25c3.53-8.33,8.57-15.82,15-22.25c6.43-6.42,13.92-11.47,22.25-15     c8.63-3.65,17.8-5.5,27.25-5.5s18.62,1.85,27.25,5.5c8.33,3.53,15.819,8.57,22.25,15c6.42,6.43,11.47,13.92,15,22.25     c3.649,8.63,5.5,17.8,5.5,27.25c0,9.45-1.851,18.62-5.5,27.25c-3.53,8.33-8.58,15.82-15,22.25c-6.431,6.42-13.92,11.47-22.25,15     C274.62,279.149,265.45,281,256,281z M256,151c-16.02,0-31.09,6.24-42.43,17.57C202.24,179.91,196,194.98,196,211     s6.24,31.09,17.57,42.43C224.91,264.76,239.98,271,256,271c16.02,0,31.09-6.24,42.43-17.57C309.76,242.09,316,227.02,316,211     s-6.24-31.09-17.57-42.43C287.09,157.24,272.02,151,256,151z" /></g><g><path fill="#37cfee" d="M241.01,241c-0.26,0-0.52-0.02-0.78-0.06c-1.4-0.22-2.6-0.99-3.39-2.17l-20-30c0,0-0.01,0-0.01-0.01     c-0.73-1.11-0.99-2.44-0.73-3.74c0.26-1.31,1.02-2.44,2.13-3.18c0.82-0.55,1.78-0.84,2.77-0.84c1.67,0,3.23,0.83,4.16,2.23     l16.97,25.46l45.75-36.6c0.89-0.71,1.97-1.09,3.12-1.09c1.52,0,2.95,0.68,3.899,1.88c1.73,2.15,1.381,5.3-0.779,7.03l-50,39.99     C243.23,240.62,242.15,241,241.01,241z" /></g><g><path fill="#37cfee" d="M281,111H171c-2.76,0-5-2.24-5-5c0-2.76,2.24-5,5-5h110c2.76,0,5,2.24,5,5C286,108.76,283.76,111,281,111z" /></g></g></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Informations pratiques</span></h4>
                            <p>Nous mettons en place tous les dispositifs visant à favoriser la prise de contact sur votre site web.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                        <div className="w-full -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><g><path strokeWidth="2px" fill="#fff" stroke="#37cfee" d="M76.4610596,44.875061c-3.9941406-1.6642456-18.1400146-4.3269653-18.1400146-8.6539917   c0-4.3269043,31.1209717-12.6480713,31.1209717-12.6480713s-27.7926025,4.6598511-37.2785645,7.8218994   c-9.486084,3.1619263-4.8262939,8.9867554,2.1634521,12.1488037c6.9897461,3.1619873,5.9912109,5.1590576,5.9912109,5.1590576   c-1.164917,6.1576538-35.9472656,13.1473999-52.2565918,16.3093872l24.2976074,19.9706421   c6.3239746-1.9969482,16.642334-4.65979,40.6071777-15.31073C108.2476807,53.5290527,80.621582,46.5393066,76.4610596,44.875061z" /><path fill="#fff" strokeWidth="2px" stroke="#37cfee" d="M44.0087891,44.5421753c-2.9956055-0.4992065-5.8249512-1.4977417-8.321167-2.9955444   c1.9970703-1.3313599,3.6612549-2.8292236,5.1590576-4.6598511c-3.494873-0.6657104-6.6569824-1.9970703-9.3195801-4.1605225   c2.1633301-0.8320923,3.9941406-2.4963379,5.4919434-4.3269653c-6.4904785-1.164978-11.6496582-6.1576538-13.1474609-12.4816895   c-1.3314209,6.1575928-6.3240967,10.9838867-12.4816895,12.3152466c1.3314209,1.6641846,2.9956055,3.1620483,4.9926758,4.1605225   c-2.4963379,1.9970703-5.4919434,3.4949341-8.8203125,4.3270264c1.3312988,1.6642456,2.9956055,3.1619873,4.8261719,4.4933472   c-2.329834,1.4978638-4.9926758,2.4963379-7.8217773,3.1620483c4.659668,5.8248291,11.815918,9.6525269,19.8041992,9.6525269   C32.192749,54.1947632,39.348877,50.3670044,44.0087891,44.5421753z" /><path fill="#fff" strokeWidth="2px" stroke="#37cfee" d="M91.9383545,36.5539551c0.8321533-0.4992676,1.4978027-1.164978,2.1634521-1.8306274   c-1.3312988-0.1665039-2.6627197-0.8320923-3.8276367-1.6641846c0.8320312-0.4992676,1.6641846-0.9985962,2.1633301-1.8307495   c-2.6625977-0.4992065-4.8261719-2.4963379-5.3254395-4.9926758c-0.4992676,2.4963379-2.4963379,4.4934692-4.9926758,4.9926758   c0.4992676,0.6657715,1.1650391,1.3314819,1.9970703,1.6642456c-0.9985352,0.8320923-2.1634521,1.4978027-3.494873,1.6641846   c0.4992676,0.6657715,1.1650391,1.3314819,1.9970703,1.8307495c-0.9985352,0.6655884-1.9970703,0.9984741-3.1619873,1.3313599   c1.8306885,2.3299561,4.8262939,3.9941406,7.9881592,3.9941406c3.1621094,0,6.1577148-1.4978027,7.9885254-3.8277588   C94.1018066,37.5525513,92.9370117,37.0531616,91.9383545,36.5539551z" /><path fill="#fff" strokeWidth="2px" stroke="#37cfee" d="M56.3239746,24.5715332c1.9970703,0,3.8276367-0.9985352,4.8261719-2.329895   c-0.6655273-0.1664429-1.4976807-0.3328247-1.9970703-0.6657104c0.4993896-0.3328857,0.9985352-0.6656494,1.331543-1.164978   c-0.8321533-0.1663818-1.6643066-0.4992676-2.3300781-0.9984741c0.4992676-0.3328857,0.9985352-0.6657715,1.3314209-1.164978   c-1.6641846-0.3328857-2.9954834-1.4977417-3.3284912-3.1619873c-0.3327637,1.4977417-1.4976807,2.8291016-3.1618652,3.1619873   c0.3327637,0.4992065,0.8320312,0.8320923,1.1647949,0.9985962c-0.6655273,0.4992065-1.3312988,0.8320923-2.1634521,0.9984741   c0.3328857,0.4992676,0.6657715,0.8320923,1.164917,1.164978c-0.6656494,0.3328857-1.3312988,0.6656494-1.9970703,0.8320923   C52.4962158,23.572998,54.3269043,24.5715332,56.3239746,24.5715332z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Exposition des réalisations</span></h4>
                            <p>Nous dédions un espace consacré à la présentation de vos réalisations pour présenter l'aspect concret à votre travail.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#37cfee" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#37cfee" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#37cfee" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Optimisation SEO des pages</span></h4>
                            <p>Nous optimisons les pages de votre site web pour obtenir une <strong className="font-normal">visibilité maximale</strong> grâce au <strong className="font-normal">référencement naturel</strong>.</p>
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
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Nous travaillons tous les jours avec des professionnels de l'aménagement paysager <br />pour leur proposer une solution Web fonctionnelle.</h3>
                </section>
                <section className="w-full flex justify-center">
                    <div className="w-full lg:w-2/3 flex flex-col mb-16 lg:flex-row justify-center text-white text-center text-2xl century">
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation1 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="https://creations.faivre-environnement.com/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Faivre Créations</h4></a>
                        </div>

                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#000000ad url(' + realisation2 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="https://nastep.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Nastep Services</h4></a>
                        </div>
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation3 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="http://jardinier-createur.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Jardinier Créateur</h4></a>
                        </div>
                    </div>
                </section>
                <section className="w-full flex my-12 flex-col lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence</span> ?</h3>
                        <h4>Linkweb soutient les jardiniers souhaitant développer leur visibilité sur le Web.</h4>
                    </div>
                    <div className="w-full mx-auto block lg:w-3/12">
                        <RoundButton className="items-center" color="darkgrey" text="Contactez-nous" url="/contact-agence-web-toulouse/" />
                    </div>
                </section>
                <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet pour Jardinier :<br /><span className="font-bold">Nos clients sont satisfaits</span>
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
                        <div className="text-lg century my-2">Cypière Paysages</div>
                        <div className="italic">« Bravo!!! Une équipe dynamique, disponible, à notre écoute. Nos sites sont parfaits, le référencement et la mise à jour sont suivis, grâce à vous nos sites sont vus, merci pour votre travail. »</div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
                        <img
                            src={stars}
                            alt="Création site internet Toulouse"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Faivre Créations</div>
                        <div className="italic">« L'agence Linkweb Agen est toujours disponible et a l'écoute. Elle contribue à notre développement, et nous accorde du temps et de l'énergie pour nous assurer une bonne visibilité sur internet.[...] Équipe agréable et bienveillante ! »</div>
                    </div>
                    {/* <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500">
                            <img 
                                src={ stars }
                                alt="Création site internet Agen"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Fanny Coiffure</div>
                            <div className="italic">« Ils sont de très bons conseils, le suivi est régulier, si vous voulez changer des choses avant qu’ils ne vous rappellent, c’est toujours possible avec un mail. Je recommande vivement toute l’équipe . »</div>
                        </div> */}
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
                <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet pour Jardinier :<br /><span className="font-bold">Une solution en accord avec vos besoins</span>
                    </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="UN SITE WEB POUR ÊTRE ACCESSIBLE AUPRÈS DE VISITEURS LOCAUX">
                                <p><strong>Développer la visibilité</strong> de son entreprise grâce à une <strong>stratégie digitale</strong> réfléchie va permettre de se rendre accessible et disponible <strong>via le Web</strong>. De plus, <strong>cibler des utilisateurs de manière géographique</strong> va permettre de <strong>générer des contacts qualifiés</strong>. Ces derniers seront plus à même d’interagir avec <strong>votre site</strong> et d’effectuer des demandes pertinentes par rapport à vos conditions d’intervention.
                            <br /><br />
                                    Le choix des localités sur lesquelles vous allez donner de la <strong>visibilité à votre entreprise</strong> va être basé sur vos secteurs d’intervention. Par ailleurs, c’est le <strong>référencement naturel local</strong> qui va vous permettre de <strong>développer un site web</strong> efficace pour votre entreprise.</p>
                            </div>
                            <div label="UN ESPACE PORTFOLIO POUR DONNER DU CACHET À VOS RÉALISATIONS">
                                <p><strong>La création de site internet</strong> pour un <strong>jardinier</strong> est l’occasion de valoriser le travail effectué sur vos chantiers. En mettant en avant des <strong>réalisations</strong> diverses et variées telles que la pose de clôtures, de revêtement extérieur ou encore un aménagement de jardin, vous apportez un aspect concret au discours porté <strong>sur votre site web</strong>.
                            <br /><br />
                                    Aussi, un utilisateur qui aura la possibilité de consulter le travail que vous avez déjà réalisé sera plus à même de prendre contact avec vous pour vous exposer son projet. À ce niveau, la <strong>communication web</strong> est un <strong>vecteur de visibilité</strong> et de demandes de contact très important.
                            </p>
                            </div>
                            <div label="UN SITE INTERNET POUR PRÉSENTER VOTRE SAVOIR-FAIRE, VOTRE ENTREPRISE ET VOS PRESTATIONS">
                                <p>Également, pour un professionnel de l’<strong>aménagement paysager</strong>, il va être important de se servir de <strong>son site internet</strong> comme la vitrine de son entreprise. Ce dernier devra apporter des réponses aux <strong>interrogations des utilisateurs</strong>. Votre manière de travailler, vos délais d’intervention ou encore le matériel utilisé sont autant d’éléments qui permettent d’affiner <strong>votre image aux yeux des utilisateurs</strong>.
                            <br /><br />
                                    Le <strong>site internet vitrine</strong> est un outil parfait pour <strong>travailler son image de marque</strong> et <strong>atteindre de nouveaux clients</strong>. En communiquant le plus d’informations possibles, non seulement vous répondrez aux besoins des utilisateurs, mais vous démontrerez également toute votre compétence. Maîtriser son sujet sur <strong>son site web</strong> est un signe particulièrement habile pour démontrer tout son savoir-faire et sa connaissance du métier.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>

                <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselJardinier />
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
query lastsThreePostsCreationSiteJardinier {
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
export default CreationSiteJardinier;




