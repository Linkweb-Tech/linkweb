import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";

import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";

import CarouselBanque from "../../components/carousel-slides/banque-slides";

import Accordion from "../../components/accordion";
import SEO from "../../components/seo";
import SimpleMap from "../../components/simpleMap";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";

import stars from '../../images/stars.png';
import arriereplan from "../../images/creation-site-internet-banque.jpg";
import siteinternet from "../../images/site-internet-banque.jpg";
import referencement from "../../images/referencement-site-internet-banque.jpg";
import webdesign from "../../images/webdesign-site-internet-banque.jpg";
import realisation1 from "../../images/ledilimmo.jpg";
import realisation2 from "../../images/cdh-experts.jpg";
import realisation3 from "../../images/beatrice-fourteau.jpg";
import map from "../../images/map.jpg";
import surmesure from "../../images/web.svg"


class SiteInternetBanque extends React.Component {

    constructor(props) {
        super(props);

        this.metiers = ['banquier', 'courtier', 'cabinet', 'assureur', 'administrateur'];
        this.state = {
            metier: this.metiers[0]
        };
    }

    componentDidMount() {
        let i = 0;
        this.metierInterval = setInterval(() => {
            i++;
            if(this.metiers[i] === undefined) {
                i = 0;
            }
            this.setState({metier: this.metiers[i]});
        }, 1200);
    }

    componentWillUnmount() {
        clearInterval(this.metierInterval);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Création de site internet Banque et Assurance à Toulouse - Linkweb"
                    description="Vous souhaitez créer un site web pour votre cabinet financier à Toulouse (31) ou à Agen (47) ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-banque/"
                    nom="Créer un site internet internet pour Banque et Assurance"
                    slug="creation-site-internet-toulouse/site-internet-banque/"
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

<section className="flex items-center justify-start w-full mx-auto pb-0 my-32 md:my-42 lg:my-42 xl:my-48 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{background:'#000000ad url('+ arriereplan +')', backgroundBlendMode:'overlay', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
            <div className="max-w-6xl mx-auto lg:mx-56 py-2 w-full flex-col items-end">
                <div className="mt-12 -mb-24 w-full flex flex-col items-center lg:items-start">
                    <div className="w-1/2  text-3xl text-center font-bold text-white century">4,5/5</div>
                    <p className="w-1/2  text-sm text-center font-bold text-white century -mt-2">Avis Google</p>
                    <div className="w-1/2 -mt-8">
                        <svg className="mx-auto block" width="100px" viewBox="0 0 100 125">
                            <path fill="#FFFFFF" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                            <path fill="#FFFFFF" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                            <path fill="#FFFFFF" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                            <path fill="#FFFFFF" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                            <path fill="#FFFFFF" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z   M89.8,54.7c0.1-0.1,0.4,0,0.4,0l4.2,2.2l-0.8-4.7c0-0.2,0-0.3,0.1-0.4l3.4-3.3l-4.7-0.7c-0.2,0-0.3-0.1-0.4-0.3l-2.1-4.3L89.8,54.7  z"/>
                        </svg>                    
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                   <h1 className="text-3xl md:text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Création de site internet pour <span className="text-bleu">cabinet financier</span></h1>
                </div>
                <br/>
                <h2 className="flex full lg:w-1/2 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Linkweb, partenaire des métiers de la finance à Toulouse et Agen.</h2>
                {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                <div className="w-full lg:w-2/3 mx-auto lg:mx-0 flex flex-col lg:flex-row justify-center pb-24 lg:justify-start">
                    <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30"/>
                    <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis"/>
                </div>
            </div>
        </section>
        <section className="w-full flex justify-end -mt-0 lg:-mt-32">
        <div className="w-11/12 lg:w-1/3 bg-white shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                <svg width="80px" className="mx-auto block" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><g transform="translate(2.5105792e-4,952.36254)"><path fill="#37cfee" d="m49.828,9.8578a0.85009,0.85009,0,0,0,-0.40625,0.1875l-31.438,24.094a0.85009,0.85009,0,0,0,0.531,1.531h62.875a0.85009,0.85009,0,0,0,0.5,-1.5312l-31.438-24.094a0.85009,0.85009,0,0,0,-0.625,-0.1872zm0.09375,1.9375,28.938,22.156-57.844,0,28.906-22.156zm21.344,28.375a0.85009,0.85009,0,0,0,-0.65625,0.9375v38.938l-20.75-0.094-20.594-0.125v-38.719a0.85009,0.85009,0,0,0,-0.9375,-0.875,0.85009,0.85009,0,0,0,-0.75,0.875v38.719h-2.9688v-38.719a0.85009,0.85009,0,0,0,-0.96875,-0.875,0.85009,0.85009,0,0,0,-0.75,0.875v38.969h-6.4688a0.85009,0.85009,0,0,0,-0.1875,0,0.85009,0.85009,0,0,0,0.1875,1.6875h67.062a0.85009,0.85009,0,1,0,0,-1.6875h-6.5v-38.969a0.85009,0.85009,0,1,0,-1.6875,0v38.969h-3v-38.969a0.85009,0.85009,0,0,0,-1.0312,-0.9375zm-22.625,4.0312,0,3.0938c-1.3395,0.0995-2.5799,0.34183-3.7188,0.8125-1.4428,0.5962-2.53,1.5056-3.2812,2.6563-0.75122,1.151-1.125,2.3638-1.125,3.6875-0.000003,1.2045,0.29216,2.2782,0.90625,3.25,0.61408,0.9719,1.5605,1.8129,2.8125,2.4687,0.87345,0.4637,2.3528,0.9514,4.4062,1.4688v9.4375c-0.7613-0.1278-1.4885-0.3344-2.1562-0.625-1.1924-0.5187-2.0586-1.1906-2.625-2.0313-0.5664-0.8406-0.93874-1.9069-1.0938-3.2187l-3.25,0.2812c0.04769,1.7529,0.52531,3.3295,1.4375,4.7188,0.91218,1.3892,2.1775,2.402,3.7812,3.0937,1.1156,0.4811,2.4184,0.7911,3.9062,0.9375v3.5938h2.5938v-3.5c1.6421-0.064,3.1593-0.3857,4.5-1,1.4964-0.6856,2.6386-1.6407,3.4375-2.875,0.79888-1.2342,1.2187-2.5424,1.2188-3.9375-0.000021-1.4071-0.36641-2.6707-1.0938-3.75-0.72738-1.0792-1.88-1.9839-3.4062-2.6875-0.89485-0.4067-2.4737-0.8511-4.6562-1.375v-8.3438c1.3478,0.1552,2.4366,0.5453,3.2188,1.1875,1.0314,0.8466,1.6336,2.0924,1.8125,3.75l3.3125-0.25c-0.05965-1.5383-0.48236-2.9086-1.2812-4.125-0.79893-1.2164-1.9217-2.1239-3.4062-2.75-1.0882-0.459-2.3214-0.75251-3.6562-0.875v-3.0938h-2.5938zm0,6.1251,0,7.7187c-1.951-0.5119-3.2407-1.0077-3.7812-1.5-0.67968-0.6082-1-1.3705-1-2.3125-0.000006-1.0852,0.47761-2.0121,1.4375-2.7812,0.7587-0.6081,1.8736-0.9976,3.3438-1.125zm2.5938,11.969c1.2349,0.3199,2.2478,0.5978,2.7188,0.7813,1.097,0.4174,1.8668,0.9484,2.3438,1.5625,0.47694,0.6142,0.74998,1.3022,0.75,2.125-0.000019,0.8109-0.25517,1.5644-0.75,2.25-0.49486,0.6857-1.2677,1.2316-2.2812,1.625-0.82036,0.3185-1.7578,0.5017-2.7812,0.5625v-8.9063zm-40.125,21.969a0.85009,0.85009,0,0,0,0.15625,1.6875h77.344a0.85009,0.85009,0,1,0,0,-1.6875h-77.344a0.85009,0.85009,0,0,0,-0.15625,0zm-3.9687,4.1875a0.85009,0.85009,0,0,0,0.15625,1.6875h85.312a0.85009,0.85009,0,1,0,0,-1.6875h-85.314a0.85009,0.85009,0,0,0,-0.15625,0z"/></g></g></svg>                
                <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span>&nbsp;?</span></h2>
            <br/>
            <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br/> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour répondre à vos objectifs.</p>
            <br/>
            <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                <div className="w-full md:w-1/3 flex flex-col font-bold">
                    <svg width="60px" fill="#37cfee" className="mx-auto block" viewBox="0 0 100 125"><path d="M33.13,16.48a10.25,10.25,0,1,0-.33,7.84A10.18,10.18,0,0,0,33.13,16.48Zm-2.15,7a8.25,8.25,0,1,1,.27-6.31A8.2,8.2,0,0,1,31,23.48Z"/><path d="M27,19H24V15a1,1,0,0,0-2,0v5a1,1,0,0,0,1,1h4a1,1,0,0,0,0-2Z"/><path d="M89,28H86.2l1.39-5.76a1,1,0,0,0-.19-.85,1,1,0,0,0-.53-.32L87.17,19H88a1,1,0,0,0,0-2h-.66a5.09,5.09,0,0,0-5.1-4.77l-.15,0-.65-1.88a1,1,0,0,0-1.89.65l.58,1.67a5.1,5.1,0,0,0-1.34.91l-1.07-1.07a1,1,0,0,0-1.41,1.41l1.3,1.3a5.23,5.23,0,0,0-.47,2.52l.48,3.3a1,1,0,0,0-.53.32,1,1,0,0,0-.19.85L78.27,28H71.75l2.06-1.53A1,1,0,0,0,74,25.1L64,10.48a1,1,0,0,0-1.42-.24l-3.07,2.29a1,1,0,0,0-.34.51A1,1,0,0,0,59,13H56V12a1,1,0,0,0-1-1H47a1,1,0,0,0-1,1V28H44a1,1,0,0,0,0,2H89a1,1,0,0,0,0-2ZM80.81,14.6A1,1,0,0,0,82,15a1,1,0,0,0,.63-.72,3.08,3.08,0,0,1,1.91.92A3.13,3.13,0,0,1,85.35,17H85a1,1,0,0,0,0,2h.16l-.29,2H79.6l-.5-3.45a3.14,3.14,0,0,1,.07-.8,1,1,0,0,0,1.24-1.53L80.19,15A3,3,0,0,1,80.81,14.6ZM79.12,23h6.24l-1.21,5H80.33ZM63,12.47l8.88,13-1.47,1.09-8.88-13ZM54,28H52V13h2ZM48,13h2V28H48Zm8,15V15h2V28Zm4-13.08L69,28H60Z"/><path d="M43,65H25a4,4,0,0,0,0,8h8V84.35l-8.41,3.74a1,1,0,0,0,.81,1.83L34,86.09l8.59,3.82a1,1,0,0,0,.81-1.83L35,84.35V73h8a4,4,0,0,0,0-8Zm0,6H25a2,2,0,0,1,0-4H43a2,2,0,0,1,0,4Z"/><path d="M30.46,41.79A1,1,0,0,0,29,40.38l-3.42,3.42A1,1,0,1,0,27,45.21Z"/><path d="M32.79,40.5l-5.87,5.88a1,1,0,1,0,1.41,1.41l5.88-5.87a1,1,0,0,0-1.41-1.41Z"/><path d="M76,65h4a1,1,0,0,0,0-2H76a1,1,0,0,0,0,2Z"/><path d="M80,73H76a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z"/><path d="M80,83H76a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z"/><path d="M90,36a1,1,0,0,0-1-1H68a1,1,0,0,0-1,1V54H60V53a4.92,4.92,0,0,0,0-9.61V43a1,1,0,0,0-1-1H51a1,1,0,0,0-1,1V54H46.93a2.44,2.44,0,0,0,.07-.5A2.5,2.5,0,0,0,45,51s0,0,0,0V38a1,1,0,0,0-1-1H24a1,1,0,0,0-1,1V51s0,0,0,0a2.47,2.47,0,0,0-2,3H11a1,1,0,0,0-1,1V89a1,1,0,0,0,2,0V60H66V89a1,1,0,0,0,1,1H89a1,1,0,0,0,1-1V60a1,1,0,0,0-.15-.5A1,1,0,0,0,90,59V55a1,1,0,0,0-.15-.5A1,1,0,0,0,90,54ZM68,70H88v8H68ZM88,54H83V37h5ZM76,37h5V54H76Zm-7,0h5V54H69ZM61.88,48.19A3,3,0,0,1,60,50.91V45.46A3,3,0,0,1,61.88,48.19ZM52,44h6V54H52ZM25,39H43V51H25ZM23.32,54a.5.5,0,0,1,.18-1h21a.5.5,0,0,1,.22,1l-.06,0H23.37ZM12,58V56H88v2Zm76,2v8H68V60ZM68,88V80H88v8Z"/><path d="M72,50H71a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"/><path d="M79,50H78a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"/><path d="M85,52h1a1,1,0,0,0,0-2H85a1,1,0,0,0,0,2Z"/></svg>                   
                    <h4>Présentation de votre cabinet</h4>
                </div>
                <div className="w-full md:w-1/3 flex pl-4 flex-col font-bold">
                <svg width="60px" className="mx-auto block" fill="#37cfee" viewBox="0 0 6827 8533.75"><g><path d="M1799 3458c0,29 -24,53 -53,53 -29,0 -53,-24 -53,-53l0 -1894c0,-29 24,-53 53,-53l4228 0c29,0 53,24 53,53l0 2807c0,29 -24,53 -53,53l-3308 0c-29,0 -53,-24 -53,-53 0,-29 24,-53 53,-53l3255 0 0 -2701 -4121 0 0 1841z"/><path class="fil0" d="M1746 2274c-29,0 -53,-24 -53,-53 0,-29 24,-53 53,-53l4228 0c29,0 53,24 53,53 0,29 -24,53 -53,53l-4228 0z"/><g><path class="fil0" d="M1754 3969c109,0 207,44 278,115 71,71 115,170 115,278 0,109 -44,207 -115,278 -71,71 -170,115 -278,115 -109,0 -207,-44 -278,-115 -71,-71 -115,-170 -115,-278 0,-109 44,-207 115,-278 71,-71 170,-115 278,-115zm203 191c-52,-52 -124,-84 -203,-84 -79,0 -151,32 -203,84 -52,52 -84,124 -84,203 0,79 32,151 84,203 52,52 124,84 203,84 79,0 151,-32 203,-84 52,-52 84,-124 84,-203 0,-79 -32,-151 -84,-203z"/><path class="fil0" d="M1940 3653c33,9 64,19 95,32 31,13 61,28 90,45l164 -119c22,-16 51,-13 69,5l0 0 143 143c19,19 21,50 4,71l-117 162c17,29 32,59 45,90 13,31 23,62 32,95l200 32c26,4 45,27 45,53l0 0 0 203c0,28 -22,51 -49,53l-195 31c-9,33 -19,64 -32,95 -13,31 -28,61 -45,90l119 164c16,22 13,51 -5,69l0 0 -143 143c-19,19 -50,21 -71,4l-162 -117c-29,17 -59,32 -90,45 -31,13 -62,23 -95,32l-32 200c-4,26 -27,45 -53,45l0 0 -203 0c-28,0 -51,-22 -53,-49l-31 -195c-33,-9 -64,-19 -95,-32 -31,-13 -61,-28 -90,-45l-164 119c-22,16 -51,13 -69,-5l0 0 -143 -143c-19,-19 -21,-50 -4,-71l117 -162c-17,-29 -32,-59 -45,-90 -13,-31 -23,-62 -32,-95l-200 -32c-26,-4 -45,-27 -45,-53l0 0 0 -203c0,-28 22,-51 49,-53l195 -31c9,-33 19,-64 32,-95 13,-31 28,-61 45,-90l-119 -164c-16,-21 -13,-51 5,-69l0 0 143 -143c19,-19 50,-21 71,-4l162 117c29,-17 59,-32 90,-45 31,-13 62,-23 95,-32l32 -200c4,-26 27,-45 53,-45l0 0 203 0c28,0 51,22 53,49l31 195zm54 130c-36,-15 -73,-26 -112,-34l0 0c-21,-4 -38,-21 -42,-44l-30 -190 -112 0 -30 188c-3,22 -19,41 -42,46 -38,8 -76,20 -112,34 -36,15 -71,33 -104,55l0 0c-18,12 -42,12 -60,-1l-156 -113 -79 79 112 155c14,17 15,42 3,62 -21,33 -40,67 -55,104 -15,36 -26,73 -34,112l0 0c-4,21 -21,38 -44,42l-190 30 0 112 188 30c22,3 41,19 46,42 8,38 20,76 34,112 15,36 33,71 55,104l0 0c12,18 12,42 -1,60l-113 156 79 79 155 -112c17,-14 42,-15 62,-3 33,21 67,40 104,55 36,15 73,26 112,34l0 0c21,4 38,21 42,44l30 190 112 0 30 -188c3,-22 19,-41 42,-46 38,-8 76,-20 112,-34 36,-15 71,-33 104,-55l0 0c18,-12 42,-12 60,1l156 113 79 -79 -112 -155c-14,-17 -15,-42 -3,-62 21,-33 40,-67 55,-104 15,-36 26,-73 34,-112l0 0c4,-21 21,-38 44,-42l190 -30 0 -112 -188 -30c-22,-3 -41,-19 -46,-42 -8,-38 -20,-76 -34,-112 -15,-36 -33,-71 -55,-104l0 0c-12,-18 -12,-42 1,-60l113 -156 -79 -79 -155 112c-17,14 -42,15 -62,3 -33,-21 -67,-40 -104,-55z"/></g><g><path class="fil0" d="M3048 3193c70,0 133,28 178,74 46,46 74,109 74,178 0,70 -28,133 -74,178 -46,46 -109,74 -178,74 -70,0 -133,-28 -178,-74 -46,-46 -74,-109 -74,-178 0,-70 28,-133 74,-178 46,-46 109,-74 178,-74zm103 149c-26,-26 -63,-43 -103,-43 -40,0 -77,16 -103,43 -26,26 -43,63 -43,103 0,40 16,77 43,103 26,26 63,43 103,43 40,0 77,-16 103,-43 26,-26 43,-63 43,-103 0,-40 -16,-77 -43,-103z"/><path class="fil0" d="M3176 3012c15,4 30,10 44,16 15,6 29,13 42,20l84 -61c22,-16 51,-13 69,5l0 0 84 84c19,19 21,50 4,71l-60 82c7,14 14,28 20,42 6,14 11,29 16,44l103 16c26,4 45,27 45,53l0 0 0 119c0,28 -22,51 -49,53l-99 16c-4,15 -10,30 -16,44 -6,15 -13,29 -20,42l61 84c16,22 13,51 -5,69l0 0 -84 84c-19,19 -50,21 -71,4l-82 -59c-14,7 -28,14 -42,20 -14,6 -29,11 -44,16l-16 103c-4,26 -27,45 -53,45l0 0 -119 0c-28,0 -51,-22 -53,-49l-16 -99c-15,-4 -30,-10 -44,-16 -15,-6 -29,-13 -42,-20l-84 61c-22,16 -51,13 -69,-5l0 0 -84 -84c-19,-19 -21,-50 -4,-71l60 -82c-7,-14 -14,-28 -20,-42 -6,-14 -11,-29 -16,-44l-103 -16c-26,-4 -45,-27 -45,-53l0 0 0 -119c0,-28 22,-51 49,-53l99 -16c4,-15 10,-30 16,-44 6,-15 13,-29 20,-42l-61 -84c-16,-22 -13,-51 5,-69l0 0 84 -84c19,-19 50,-21 71,-4l82 59c14,-7 28,-14 42,-20 14,-6 29,-11 44,-16l16 -103c4,-26 27,-45 53,-45l0 0 119 0c28,0 51,22 53,49l16 99zm4 114c-20,-8 -40,-15 -61,-19l0 0c-21,-4 -38,-21 -42,-44l-15 -93 -28 0 -14 90c-3,22 -19,41 -42,46 -21,4 -42,11 -61,19 -20,8 -39,18 -57,30l0 0c-18,12 -42,12 -60,-1l-76 -55 -20 20 54 75c14,17 15,42 3,62 -12,18 -22,37 -30,57 -8,20 -15,40 -19,61l0 0c-4,21 -21,38 -44,42l-93 15 0 28 90 14c22,3 41,19 46,42 4,21 11,42 19,61 8,20 18,39 30,57l0 0c12,18 12,42 -1,60l-55 76 20 20 75 -54c17,-14 42,-15 62,-3 18,12 37,22 57,30 20,8 40,15 61,19l0 0c21,4 38,21 42,44l15 93 28 0 14 -90c3,-22 19,-41 42,-46 21,-4 42,-11 61,-19 20,-8 39,-18 57,-30l0 0c18,-12 42,-12 60,1l76 55 20 -20 -54 -75c-14,-17 -15,-42 -3,-62 12,-18 22,-37 30,-57 8,-20 15,-40 19,-61l0 0c4,-21 21,-38 44,-42l93 -15 0 -28 -90 -14c-22,-3 -41,-19 -46,-42 -4,-21 -11,-42 -19,-61 -8,-20 -18,-39 -30,-57l0 0c-12,-18 -12,-42 1,-60l55 -76 -20 -20 -75 54c-17,14 -42,15 -62,3 -18,-12 -37,-22 -57,-30z"/></g><path class="fil0" d="M5508 1716l229 0c29,0 53,24 53,53l0 229c0,29 -24,53 -53,53l-229 0c-29,0 -53,-24 -53,-53l0 -229c0,-29 24,-53 53,-53zm176 107l-122 0 0 122 122 0 0 -122z"/><path class="fil0" d="M5102 1716l229 0c29,0 53,24 53,53l0 229c0,29 -24,53 -53,53l-229 0c-29,0 -53,-24 -53,-53l0 -229c0,-29 24,-53 53,-53zm176 107l-122 0 0 122 122 0 0 -122z"/></g><rect class="fil1" x="12312" y="316" width="6827" height="6827"/></svg>
                    <h4>Optimisation technique pour le référencement naturel</h4>
                </div>
                <div className="w-full md:w-1/3 pl-4 xl:pl-0 flex flex-col font-bold">
                    <svg width="60px" className="mx-auto block" viewBox="-205 207 100 125"><path fill="#37cfee" d="M-107.3,282c-6.3,0-12.6,0-18.8,0c-0.1,0-0.1,0-0.2,0c-6.3,0-12.5,0-18.8,0c-0.1-0.5-0.1-1,0-1.5c0.1-0.8,0.3-1.6,0.7-2.3    c0.4-0.9,1.1-1.4,1.8-2c1.4-0.9,2.9-1.6,4.4-2.2c1.1-0.5,2.2-0.9,3.3-1.4c3.1-1.4,3.5-2.5,3.6-2.6c0-0.1,0-0.2,0-0.3    c0-0.2,0-0.5,0.1-0.7v-0.6c-6.7,0.1-8.7-2.8-8.7-2.8s3.8-0.1,3.6-10.2c-0.2-10.1,4.4-11.8,6.2-12.5c5.1-1.9,7.6,1.1,7.6,1.1    c5.9-0.5,7.5,5.9,6.8,13.2c-0.7,7.3,3.3,8.4,3.3,8.4c-2.8,2.8-8.6,2.6-8.6,2.6v1.2c0,0,0,0.1,0,0.1c0,0.1,0,0.2,0,0.3    c0,0.2,0.5,1.2,3.6,2.6c1.1,0.5,2.2,0.9,3.3,1.4c1.5,0.6,3.1,1.3,4.4,2.2c0.8,0.5,1.5,1.1,1.8,2c0.3,0.7,0.6,1.5,0.7,2.3    C-107.2,281-107.1,281.5-107.3,282z M-160.9,281.2c0-2.3-0.5-5.8-4-6.7c-5.3-1.3-9.6-3.3-9.6-3.3c-0.5-0.7-0.8-2-0.9-2.8    c1.2-1.6,1.8-3.5,2.1-5.2c0.1,0.1,0.2,0.1,0.4,0.1c0.5,0,1.2-0.7,1.9-3.2c0.7-2.7,0.3-3.6-0.4-3.8h0c2.1-10.1-2.7-10.5-2.7-10.5    s-0.7-1.4-2.6-2.5c-1.1-0.7-2.6-1.2-4.5-1.2c-0.3,0-0.6,0-0.9,0c-0.8,0-1.5,0.2-2.1,0.4h0l0,0c-0.9,0.3-1.6,0.7-2.4,1.2    c-0.9,0.6-1.7,1.2-2.4,2c-1.2,1.2-2.2,2.7-2.6,4.7c-0.4,1.6-0.4,3.4,0.2,5.2c-0.1,0-0.1,0-0.2,0c-0.8,0-1.7,0.6-0.8,3.8    c0.7,2.5,1.3,3.2,1.8,3.2c0.3,1.8,0.9,3.9,2.2,5.7c-0.1,0.7-0.3,1.7-0.8,2.5c0,0-4.5,2.2-9.8,3.5c-3.5,0.9-4,4.4-4,6.7    c0,0.3,0,0.5,0,0.8h41.9C-160.9,281.8-160.9,281.5-160.9,281.2z M-142.5,253.9c-1.2-0.6-1.9-1.7-2.4-2.7l0.1-0.1    c4-4.5,3.8-11.5-0.5-15.8c-4.5-4.5-11.8-4.5-16.3,0c-4.5,4.5-4.5,11.8,0,16.3c3.8,3.8,9.6,4.4,14,1.8l0,0c1.7,1.3,3.6,1.5,4.9,1.3    C-142.2,254.7-142.1,254.1-142.5,253.9z M-150.4,247.5c-0.4,0.5-1,0.9-1.7,1.1c-0.3,0.1-0.4,0.2-0.4,0.5c0,0.3,0,0.6,0,0.9    c0,0.3-0.1,0.4-0.4,0.4c-0.3,0-0.6,0-1,0c-0.3,0-0.4-0.2-0.4-0.4c0-0.2,0-0.4,0-0.7c0-0.5,0-0.5-0.5-0.6c-0.6-0.1-1.2-0.2-1.7-0.5    c-0.4-0.2-0.5-0.3-0.3-0.8c0.1-0.3,0.2-0.7,0.3-1c0.1-0.4,0.2-0.4,0.6-0.2c0.6,0.3,1.2,0.5,1.9,0.6c0.4,0.1,0.9,0,1.2-0.2    c0.7-0.3,0.9-1.2,0.2-1.7c-0.2-0.2-0.5-0.3-0.7-0.4c-0.7-0.3-1.3-0.5-1.9-0.9c-1-0.6-1.6-1.4-1.6-2.6c0.1-1.4,0.9-2.2,2.1-2.7    c0.5-0.2,0.5-0.2,0.5-0.7c0-0.2,0-0.4,0-0.6c0-0.4,0.1-0.5,0.5-0.5c0.1,0,0.3,0,0.4,0c0.9,0,0.9,0,0.9,0.9c0,0.6,0,0.6,0.6,0.7    c0.5,0.1,0.9,0.2,1.3,0.4c0.2,0.1,0.3,0.3,0.3,0.5c-0.1,0.4-0.2,0.8-0.3,1.1c-0.1,0.4-0.2,0.4-0.6,0.2c-0.7-0.3-1.4-0.5-2.1-0.4    c-0.2,0-0.4,0-0.6,0.1c-0.6,0.3-0.8,1-0.2,1.4c0.3,0.2,0.6,0.4,0.9,0.5c0.6,0.2,1.2,0.5,1.7,0.8    C-149.7,243.8-149.2,246-150.4,247.5z"/></svg>                    
                    <h4>Présentation de vos domaines de compétences</h4>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Votre devis gratuit"/>
            </div>
        </div>
        </section>
        <section className="w-full lg:w-1/2 px-10 mt-16 lg:-mt-64 mb-32">
            <h3 className="century text-3xl text-center">
                Le référencement naturel génère plus de <span className="text-bleu">300%</span> de trafic de plus que les médias sociaux.
            </h3>
            <br/>
            <p className="text-center century"><b>Source :</b> <a className="text-bleu hover:text-black" href="https://www.ironpaper.com/webintel/articles/2015-critical-seo-statistics-and-trends/" target="_blank" rel="noreferrer">Outbrain, cité par Iron Paper</a></p>
        </section>
        <section className="text-center text-black text-2xl century mx-12 mt-8 lg:mx-0">
            <h2 className="century leading-none">Répondre à vos<br/><span className="text-6xl text-bleu font-bold">BESOINS</span></h2>
            <hr className="blue"></hr>
            <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Notre rôle : mettre en place un projet adapté à l'image de votre entreprise.</h3>
        </section>
        <section className="w-full my-10 flex flex-col lg:flex-row">
            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{backgroundImage:'url('+ siteinternet +')'}}>
                <h3 className="text-3xl titrehover text-center century leading-none"><span>Site internet</span><br/><span className="font-bold text-6xl">SUR-MESURE</span></h3>
                <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">La <strong className="font-normal">création d’un site internet sur-mesure</strong> est fortement conseillée pour un organisme de votre secteur d’activité. En effet, il est important de mettre en place un outil web qui va vous permettre de vous <strong className="font-normal">faire connaître</strong>, de vous apporter de la <strong className="font-normal">visibilité</strong>, mais également de proposer des fonctionnalités bien spécifiques. Pour un <strong className="font-normal">organisme bancaire</strong>, il est nécessaire de développer un projet global. 
                <br/><br/>
                En offrant la possibilité à vos utilisateurs d'effectuer des démarches <strong className="font-normal">en ligne</strong>, ce type de projet nécessite la mise en place d’un espace de gestion en <strong className="font-normal">back-office</strong>. Par ailleurs, comme un <strong className="font-normal">site internet vitrine</strong>, votre <strong className="font-normal">solution sur-mesure</strong> doit constituer une carte de visite pour vous, accessible 24h sur 24 et 7 jours sur 7.</p>
            </div>
            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{backgroundImage:'url('+ referencement +')'}}>
                <h3 className="text-3xl titrehover text-center century leading-none"><span>Référencement</span><br/><span className="font-bold text-6xl">LOCAL</span></h3>
                <p className="text century text-lg lg:text-sm xl:text-lg">Le <strong className="font-normal">référencement local</strong> fait partie des sous-disciplines du <strong className="font-normal">référencement naturel</strong> qui peuvent être particulièrement bénéfiques. En effet, il consiste à <strong className="font-normal">développer votre visibilité sur le Web</strong> dans des secteurs géographiques proches de vous. Le <strong className="font-normal">trafic organique</strong> est l’une des sources principales d’acquisition pour <strong className="font-normal"> un site web</strong>.
                <br/><br/>
                Pour <strong className="font-normal">générer du trafic qualifié sur votre site internet</strong>, il est important d’<strong className="font-normal">être visible</strong> auprès d’utilisateurs pertinents pour vous. Le <strong className="font-normal">référencement SEO</strong> fait partie des portes d’entrée vers votre organisme pour obtenir de <strong className="font-normal">nouveaux clients</strong>.</p>
            </div>
            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{backgroundImage:'url('+ webdesign +')', backgroundPosition:'left'}}>
                <h3 className="text-3xl titrehover text-center century leading-none"><span>Design</span><br/><span className="font-bold text-6xl">SOBRE</span></h3>
                <p className="text century text-lg lg:text-sm xl:text-lg"><strong className="font-normal">Créer un site internet pour un organisme bancaire</strong>, assureur ou pour tout autre cabinet va demander de tenir compte de certains éléments. En effet, ce <strong className="font-normal">type de site internet</strong> présente la particularité de proposer des démarches en ligne et un <strong className="font-normal">maillage interne</strong> important à destination des utilisateurs. Il est donc indispensable de définir un <strong className="font-normal">webdesign clair et optimal</strong>.
                <br/><br/>
                Par ailleurs, <strong className="font-normal">votre site internet</strong> devra être <strong className="font-normal">responsive design</strong> (adapté en fonction des supports de lecture : <strong className="font-normal">smartphone</strong>, <strong className="font-normal">tablette</strong>, etc.), <strong className="font-normal">intuitif</strong> et adapté à votre public. Proposer une <strong className="font-normal">expérience utilisateur</strong> de qualité à partir d’un <strong className="font-normal">design d’interface intuitif</strong> est indispensable.</p>
            </div>
        </section>
        <section className="text-center text-black text-2xl mx-auto lg:mx-0 century my-10">
            <h2 className="century leading-none">Une solution<br/><span className="text-4xl lg:text-6xl text-bleu font-bold">FONCTIONNELLE</span></h2>
            <hr className="blue"></hr>
            <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Nous créons un site internet professionnel et qui répond aux problématiques du Web.</h3>
        </section>
        <section className="flex justify-center flex-col items-center">
            <div className="w-full flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                    <svg width="50px" className="mx-auto block" viewBox="12.937 19.988 486.829 591.2012500000001"><g><path fill="#37cfee" d="M453.892,19.988H58.84c-25.311,0-45.903,20.595-45.903,45.909v263.348c0,25.312,20.592,45.903,45.903,45.903h83.62v81.085   c0,20.245,16.483,36.716,36.744,36.716h152.511c21.244,0,38.528-17.287,38.528-38.535v-79.265h83.648   c25.295,0,45.874-20.592,45.874-45.903V65.897C499.766,40.583,479.187,19.988,453.892,19.988z M58.84,27.988h395.052   c20.884,0,37.874,17.006,37.874,37.909v38.814H20.937V65.897C20.937,44.994,37.94,27.988,58.84,27.988z M237.442,197.73h37.855   c29.951,0,54.318,24.355,54.318,54.291V306.2H183.117v-54.18c0-14.968,6.092-28.54,15.929-38.371   C208.883,203.819,222.465,197.73,237.442,197.73z M362.243,454.414c0,16.837-13.695,30.535-30.528,30.535H179.204   c-15.85,0-28.744-12.882-28.744-28.716v-85.085v-55.511c0-0.806,0.647-1.438,1.474-1.438h26.075   c0.354,0.102,0.72,0.175,1.107,0.175h154.499c0.387,0,0.753-0.072,1.107-0.175h26.076c0.81,0,1.444,0.632,1.444,1.438V454.414z    M453.892,367.149h-83.647v-51.512c0-5.204-4.236-9.438-9.444-9.438h-0.001h-23.183v-54.18c0-34.347-27.956-62.291-62.318-62.291   h-37.855c-17.184,0-32.765,6.986-44.051,18.266c-11.286,11.279-18.276,26.852-18.276,44.026v54.178h-23.182   c-5.224,0-9.474,4.233-9.474,9.438v0.001v51.511H58.84c-20.9,0-37.903-17.003-37.903-37.903V112.711h470.829v216.535   C491.766,350.146,474.775,367.149,453.892,367.149z"/><path fill="#37cfee" d="M256.369,364.854c-11.108,0-20.146,9.034-20.146,20.14c0,7.416,3.978,14.056,10.338,17.592v27.703c0,2.209,1.791,4,4,4   h11.611c2.209,0,4-1.791,4-4v-27.703c6.36-3.537,10.338-10.177,10.338-17.592C276.51,373.888,267.475,364.854,256.369,364.854z    M260.719,396.329c-1.536,0.599-2.547,2.078-2.547,3.727v26.232h-3.611v-26.232c0-1.648-1.011-3.128-2.547-3.727   c-4.66-1.817-7.791-6.373-7.791-11.336c0-6.693,5.449-12.14,12.146-12.14c6.694,0,12.141,5.446,12.141,12.14   C268.51,389.956,265.379,394.512,260.719,396.329z"/><path fill="#37cfee" d="M65.828,82.413c8.805,0,15.969-7.164,15.969-15.969c0-8.809-7.164-15.976-15.969-15.976   c-8.809,0-15.975,7.167-15.975,15.976C49.853,75.25,57.02,82.413,65.828,82.413z M65.828,58.468c4.394,0,7.969,3.578,7.969,7.976   c0,4.394-3.575,7.969-7.969,7.969c-4.397,0-7.975-3.575-7.975-7.969C57.853,62.046,61.431,58.468,65.828,58.468z"/><path fill="#37cfee" d="M114.807,82.413c8.809,0,15.975-7.164,15.975-15.97c-0.002-8.809-7.168-15.975-15.975-15.975   c-8.809,0-15.975,7.167-15.975,15.976C98.832,75.25,105.999,82.413,114.807,82.413z M114.807,58.468   c4.396,0,7.974,3.579,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969s-7.975-3.575-7.975-7.969   C106.832,62.046,110.41,58.468,114.807,58.468z"/><path fill="#37cfee" d="M163.815,82.413c8.809,0,15.975-7.164,15.975-15.969c0-8.809-7.167-15.976-15.975-15.976   c-8.805,0-15.969,7.167-15.969,15.976C147.846,75.25,155.01,82.413,163.815,82.413z M163.815,58.468   c4.397,0,7.975,3.578,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969c-4.394,0-7.969-3.575-7.969-7.969   C155.846,62.046,159.421,58.468,163.815,58.468z"/></g></svg>
                    <h4 className="font-bold century"><span className="font-bold">Site internet sécurisé</span></h4>
                    <p>Nous garantissons la mise en place de <strong className="font-normal">certificat sécurisé</strong> pour une navigation en toute confiance.</p>
                </div>
                <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                    <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   "/><path fill="#37cfee" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z"/><g><path fill="#37cfee" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z"/><rect x="72.041" y="56.851" width="0.312" height="5.159"/></g><path fill="#37cfee" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z"/><path fill="#37cfee" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z"/></g></svg>                    
                    <h4 className="font-bold century"><span className="font-bold">Site web accessible tous supports</span></h4>
                    <p>Les sites internet que nous créons s'adaptent au <strong>support de navigation</strong> pour une accessibilité sans faille.</p>
                </div>
                <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                <svg width="50px" className="mx-auto block" fill="#37cfee" viewBox="0 0 100 125" ><path d="M59.734,75.953H41.957l-0.633,3.25h-8.875v4h36.793v-4h-8.873L59.734,75.953z M80.344,18.488H21.349  c-4.23,0-7.67,3.438-7.67,7.67v39.125c0,4.229,3.439,7.668,7.67,7.668h58.995c4.23,0,7.67-3.439,7.67-7.668V26.158  C88.014,21.929,84.572,18.488,80.344,18.488z M50.846,68.078c-1.034,0-1.875-0.84-1.875-1.875c0-1.037,0.842-1.875,1.875-1.875  c1.035,0,1.875,0.838,1.875,1.875C52.721,67.238,51.881,68.078,50.846,68.078z M84.014,59.654H17.679V26.158  c0-2.023,1.646-3.67,3.668-3.67h58.997c2.023,0,3.67,1.646,3.67,3.67V59.654L84.014,59.654z M50.846,27.145  c-7.68,0-13.926,6.248-13.926,13.927c0,7.682,6.246,13.928,13.926,13.928c7.684,0,13.928-6.248,13.928-13.928  C64.771,33.392,58.525,27.145,50.846,27.145z M50.111,39.039c0.262,0.271,0.688,0.537,1.272,0.783  c0.586,0.25,1.141,0.51,1.658,0.773c0.521,0.271,0.969,0.572,1.35,0.912c0.381,0.342,0.676,0.738,0.893,1.191  c0.211,0.453,0.318,1,0.318,1.635c0,1.078-0.344,1.957-1.023,2.639c-0.686,0.684-1.617,1.078-2.793,1.189v1.9h-1.504v-1.91  c-1.375-0.146-2.432-0.613-3.162-1.414c-0.734-0.795-1.102-1.85-1.102-3.152h3.186c0,0.721,0.158,1.266,0.479,1.641  c0.318,0.375,0.77,0.563,1.356,0.563c0.43,0,0.766-0.127,1.012-0.381c0.246-0.256,0.369-0.607,0.369-1.058  c0-0.498-0.123-0.892-0.369-1.175c-0.246-0.279-0.68-0.551-1.297-0.803c-0.616-0.252-1.188-0.508-1.709-0.768  c-0.521-0.259-0.975-0.559-1.354-0.896s-0.668-0.73-0.869-1.18c-0.203-0.449-0.303-0.99-0.303-1.627  c0-1.064,0.355-1.943,1.076-2.633c0.719-0.689,1.676-1.094,2.873-1.207v-1.992h1.504v2.031c1.15,0.17,2.061,0.645,2.719,1.424  c0.656,0.775,0.984,1.766,0.984,2.963h-3.195c0-0.654-0.121-1.158-0.373-1.512c-0.256-0.354-0.611-0.529-1.076-0.529  c-0.42,0-0.741,0.131-0.975,0.393c-0.229,0.266-0.344,0.621-0.344,1.082C49.712,38.395,49.843,38.763,50.111,39.039z"/></svg>
                    <h4 className="font-bold century -mt-3"><span className="font-bold">Présentation de vos compétences</span></h4>
                    <p>Nous présentons et détaillons les compétences de votre organisme ainsi que les services que vous proposez.</p>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
            <div className="w-full -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                    <svg width="50px" className="mx-auto block" viewBox="0 0 100 125" fill="#37cfee"><rect x="60.2" y="58.2" width="19.5" height="5"/><rect x="60.2" y="48.9" width="23.3" height="5"/><rect x="60.2" y="67.2" width="9.8" height="5"/><path d="M85,13.2H15C7.3,13.2,1.1,20,1.1,28.5v42.5c0,8.5,6.2,15.4,13.9,15.4h70c7.7,0,13.9-6.9,13.9-15.4V28.5  C98.9,20,92.7,13.2,85,13.2z M15,18.6h70c4.6,0,8.4,4.4,8.4,9.9v2.6H6.6v-2.6C6.6,23.1,10.4,18.6,15,18.6z M85,81H15  c-4.6,0-8.4-4.4-8.4-9.9V36.6h86.8v34.5C93.4,76.5,89.6,81,85,81z"/><circle cx="60.2" cy="24.7" r="3.4"/><circle cx="70.7" cy="24.7" r="3.4"/><circle cx="81.8" cy="24.7" r="3.4"/><polygon points="33.8,41.4 15.3,52 52.2,52 "/><path d="M49.3,58.2v-3h2.9v-2H15.3v2h3.2v3h0.9v14.3h-0.9V75h-3.3v2h36.9v-2h-2.9v-2.3h-0.9V58.2H49.3z M20.8,58.9h0.6v13.7h-0.6  V58.9z M23.3,72.5h-0.6V58.9h0.6V72.5z M31.5,72.3h-0.9V75h-5.1v-2.4h-0.9V58.2h0.9v-3h5.1v2.9h0.9V72.3z M32.8,58.1h0.6v14.1h-0.6  V58.1z M35.3,72.3h-0.6V58.1h0.6V72.3z M43.3,72.7h-0.9V75h-5v-2.7h-0.9V58.1h0.9v-2.9h5v3h0.9V72.7z M44.6,58.2h0.6v14.5h-0.6V58.2  z M47.2,72.7h-0.6V58.2h0.6V72.7z"/></svg>
                    <h4 className="font-bold century"><span className="font-bold">Promotion de votre cabinet</span></h4>
                    <p>Nous développons un volet destiné à démontrer votre expertise dans votre secteur d'activité.</p>
                </div>
                <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                    <svg width="50px" className="mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#37cfee" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z"/></g></g><g><g><path fill="#37cfee" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z"/></g></g><g><g><path fill="#37cfee" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z"/></g></g></g></svg>                    
                    <h4 className="font-bold century"><span className="font-bold">Optimisation SEO de vos contenus</span></h4>
                    <p>Nous optimisons chacune des pages web de votre site pour une <strong className="font-normal">visibilité maximale</strong> en termes de <strong className="font-normal">référencement naturel</strong>.</p>
                </div>
                <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                    <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M66.598,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44c-0.556,0.081-1.017,0.47-1.191,1.004  c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014c-0.095,0.554,0.133,1.113,0.587,1.443  c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C67.673,71.235,67.16,70.916,66.598,70.916L66.598,70.916z M50,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169L50,82.719l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C51.074,71.235,50.562,70.916,50,70.916L50,70.916z M33.402,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423  l2.707,1.423c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014  l2.19-2.135c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C34.476,71.235,33.963,70.916,33.402,70.916L33.402,70.916z"/><path fill="#37cfee" d="M72.131,50.738h-25.82v-1.475h25.82V50.738z M50,52.951h-3.689v1.475H50V52.951z M72.131,52.951H53.689v1.475  h18.443V52.951z M61.066,56.639H46.311v1.475h14.754V56.639z M72.131,56.639h-7.377v1.475h7.377V56.639z M57.377,60.328H46.311  v1.475h11.066V60.328z M61.066,27.131H46.311v1.475h14.754V27.131z M72.131,27.131h-7.377v1.475h7.377V27.131z M72.131,30.82h-25.82  v1.475h25.82V30.82z M57.377,34.508H46.311v1.475h11.066V34.508z M72.131,34.508H61.066v1.475h11.066V34.508z M64.754,38.197H46.311  v1.475h18.443V38.197z"/><path fill="#37cfee" d="M75.82,12.377h-4.338c-0.741-1.139-1.62-2.329-2.458-3.404l-0.257-0.33l-0.416,0.052  c-2.313,0.288-8.743,0.858-10.692,0.051c-0.341-0.141-0.869-0.895-1.294-1.501C55.592,6.141,54.793,5,53.689,5h-7.377  c-1.104,0-1.904,1.141-2.677,2.244c-0.425,0.606-0.953,1.36-1.294,1.501c-1.947,0.807-8.379,0.237-10.692-0.051l-0.416-0.052  l-0.257,0.33c-0.838,1.075-1.717,2.265-2.458,3.404H24.18c-2.441,0-4.426,1.986-4.426,4.426v73.77c0,2.441,1.985,4.426,4.426,4.426  H75.82c2.441,0,4.426-1.985,4.426-4.426v-73.77C80.246,14.363,78.26,12.377,75.82,12.377z M31.886,10.208  c1.891,0.218,8.608,0.899,11.02-0.1c0.737-0.305,1.32-1.137,1.937-2.017c0.396-0.564,1.132-1.615,1.469-1.615h7.377  c0.337,0,1.073,1.051,1.469,1.615c0.617,0.88,1.2,1.712,1.937,2.017c2.412,0.999,9.129,0.318,11.02,0.1  c1.698,2.219,3.397,4.834,3.684,5.857H28.201C28.489,15.043,30.188,12.427,31.886,10.208z M78.77,90.574  c0,1.627-1.324,2.951-2.951,2.951H24.18c-1.627,0-2.951-1.324-2.951-2.951v-73.77c0-1.627,1.324-2.951,2.951-2.951h3.449  c-0.727,1.324-1.12,2.457-0.82,3.071c0.192,0.392,0.578,0.618,1.059,0.618h44.262c0.482,0,0.867-0.225,1.059-0.618  c0.3-0.614-0.093-1.746-0.82-3.071h3.449c1.627,0,2.951,1.324,2.951,2.951V90.574z M50,13.115c-1.424,0-2.582-1.158-2.582-2.582  S48.576,7.951,50,7.951s2.582,1.158,2.582,2.582S51.424,13.115,50,13.115z M50,9.426c-0.61,0-1.107,0.496-1.107,1.107  c0,0.61,0.496,1.107,1.107,1.107s1.107-0.496,1.107-1.107C51.107,9.923,50.61,9.426,50,9.426z"/><path fill="#37cfee" d="M38.934,50v11.066H27.869V50H38.934 M38.934,48.525H27.869c-0.815,0-1.475,0.661-1.475,1.475v11.066  c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475V50C40.41,49.185,39.749,48.525,38.934,48.525  L38.934,48.525z M33.483,38.197c-0.008,0-0.016,0-0.024,0c-0.302,0-0.588-0.12-0.792-0.343l-3.77-4.111  c-0.413-0.451-0.382-1.147,0.069-1.559c0.451-0.412,1.151-0.379,1.563,0.071l2.989,3.267l7.698-7.698  c0.432-0.432,1.132-0.432,1.565,0c0.432,0.432,0.432,1.133,0,1.565l-8.516,8.5C34.058,38.097,33.776,38.197,33.483,38.197z   M38.934,34.271v4.664h-5.451H33.45h-5.581V27.869h11.066v1.194l1.45-1.45c-0.122-0.692-0.722-1.22-1.45-1.22H27.869  c-0.815,0-1.475,0.661-1.475,1.475v11.066c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475v-6.136  L38.934,34.271z"/></svg>                    
                    <h4 className="font-bold century"><span className="font-bold">Appel mensuel et suivi régulier</span></h4>
                    <p>Nous effectuons une <strong className="font-normal">maintenance</strong> et un suivi pour vous tenir informé de l'activité de <strong className="font-normal">votre site web</strong>.</p>
                </div>
            </div>
        </section>
        <section className="text-center text-black text-2xl century my-10 mx-12 lg:mx-0">
            <h2 className="century leading-tight"><Link to="/creation-site-internet-toulouse/" className="text-black hover:text-bleu">Création de site internet à Toulouse</Link> :<br/><span className="text-4xl lg:text-6xl text-bleu font-bold">VOTRE PROJET EN 4 ÉTAPES</span></h2>
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
            <h2 className="century leading-tight">Création de site internet à Toulouse :<br/><span className="text-4xl lg:text-6xl text-bleu font-bold">NOUS LES ACCOMPAGNONS</span></h2>
            <hr className="blue"></hr>
            <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Nous travaillons tous les jours avec des professionnels d'horizons différents <br/>pour leur proposer une solution Web fonctionnelle.</h3>
        </section>
        <section className="w-full flex justify-center">
                <div className="w-full lg:w-2/3 flex flex-col mb-16 lg:flex-row justify-center text-white text-center text-2xl century">
                    <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{background:'#00000085 url(' + realisation1 + ')', backgroundBlendMode:'overlay', backgroundPosition:'center', backgroundSize:'cover'}}>
                    <a href="https://ledil.immo/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Ledil.immo</h4></a>
                </div>
                <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{background:'#00000085 url(' + realisation2 + ')', backgroundBlendMode:'overlay', backgroundPosition:'center', backgroundSize:'cover'}}>
                    <a href="https://cabinet-cdh-experts.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">CDH Experts</h4></a>
                </div>
                    <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{background:'#00000085 url(' + realisation3 + ')', backgroundBlendMode:'overlay', backgroundPosition:'center', backgroundSize:'cover'}}>
                    <a href="http://psychologue-clinicienne.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Béatrice Fourteau</h4></a>
                </div>
            </div>
        </section>
        <section className="w-full flex my-12 flex-col lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
        <div className="w-full lg:w-8/12 text-2xl">
          <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence</span> ?</h3>
          <h4>Linkweb soutient les professionnels souhaitant développer leur projet.</h4>
        </div>
        <div className="w-full mx-auto block lg:w-3/12">
          <RoundButton className="items-center" color="darkgrey" text="Contactez-nous" url="/contact-agence-web-toulouse/"/>
        </div>
      </section>
      <section className="max-w-4xl w-full mx-auto px-4 py-0 my-0">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
            Création de site internet pour cabinet financier :<br/><span className="font-bold">Nos clients sont satisfaits</span>
        </h2>
        <hr className="blue"></hr>
      </section>
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-center justify-center century text-center mt-3 px-6 mb-12">
      <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up"*/>
                            <img 
                                src={ stars }
                                alt="Création site internet Agen"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">J-F. Provent</div>
                            <div className="italic">« Une équipe réactive et professionnelle. À l'écoute de notre métier, ce qui a permis un bon référencement de notre activité. Notre confiance est récompensée. »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
                            <img 
                                src={ stars }
                                alt="Création site internet Toulouse"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">ETS Besset</div>
                            <div className="italic">« Agence très sérieuse, avec une équipe dynamique. Toujours à l'écoute de nos besoins. Du vrai professionnalisme ! Je recommande ! »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500"*/>
                            <img 
                                src={ stars }
                                alt="Création site internet Agen"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Cerem </div>
                            <div className="italic">« Une équipe dynamique et sympathique. Anthony s'occupe du suivi de notre site. Il est à l’écoute et très réactif. Nous sommes satisfaits ! »</div>
                        </div>
                        <br/>
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
                    <section className="max-w-4xl w-full mx-auto px-4 py-0 my-0">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                            Création de site internet pour cabinet financier :<br/><span className="font-bold">Une solution en accord avec vos besoins</span>
                        </h2>
                        <hr className="blue"></hr>
                    </section>
                    <section  className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                          <div className="w-full" label="DÉFINITION D'UN PROJET WEB GLOBAL ENCADRANT VOS PROBLÉMATIQUES">
                            <p>La <strong>création d’un site internet</strong> pour une <strong>banque</strong> ou un <strong>assureur</strong> demande d’adopter une vision globale en vue de la mise en place de son <strong>projet web</strong>. En effet, il est recommandé de se tourner vers une <strong>solution sur-mesure</strong> de part les exigences d’une telle <strong>plateforme web</strong>. Ainsi, le <strong>site internet</strong> pourra, en plus d’informer sur votre organisme, proposer des démarches à effectuer directement <strong>en ligne</strong>. 
                            <br/><br/>
                            De ce point de vue, la mise en place d’un <strong>intranet</strong> visant à traiter les données récoltées sera nécessaire. En ce sens, toute la richesse offerte par un <strong>site internet</strong> vous sera accessible. Il est important de <strong>mettre en place un projet web</strong> solide pour tirer un maximum des profits proposés par un tel outil.</p>
                          </div>
                          <div label="UNE STRATÉGIE DE SEO DESTINÉE À METTRE EN AVANT VOTRE EXPERTISE">
                            <p>Il est important d’adapter le <strong>contenu de son site internet</strong> à son activité, mais également à sa cible. En effet, le <strong>site internet</strong> est un <strong>outil de communication</strong> qui vous permet de vous adresser directement à des <strong>utilisateurs</strong> qui pourraient avoir besoin de faire appel à vos services. Il va donc être indispensable de produire un contenu sur lequel vous pourrez être trouvé par des utilisateurs, mais qui pourra également asseoir votre expertise.
                            <br/><br/>
                            Le travail effectué sur <strong>votre image d’expert</strong> est important pour <strong>générer des contacts qualifiés</strong>. Pour cela, les <strong>moteurs de recherche (comme Google)</strong> constituent une porte d’entrée pour <strong>votre site</strong>. Ainsi, le <strong>travail de référencement naturel</strong> doit vous rendre <strong>visible</strong> pour des requêtes stratégiques et des secteurs adéquats. Nous mettons en place votre <strong>stratégie de référencement local</strong> pour vous permettre d’<strong>obtenir de la visibilité dans les premières pages de résultats de recherche</strong> dans des délais raisonnables.</p>
                          </div>
                          <div label="UN SITE WEB ACCESSIBLE 24H/24 POUR EFFECTUER DES DÉMARCHES EN LIGNE">
                            <p>De nos jours, <strong>avoir un site internet</strong> est indispensable pour les professionnels souhaitant développer leur activité. En effet, <strong>créer votre site web</strong> peut vous permettre d’augmenter votre <strong>notoriété</strong> en boostant votre <strong>visibilité</strong>, mais également de soigner <strong>votre image</strong>.
                            <br/><br/>
                            En plus d’être une <strong>carte de visite en ligne</strong>, <strong>votre site internet</strong> doit permettre de répondre aux <strong>attentes des utilisateurs</strong> souhaitant effectuer des <strong>démarches en ligne</strong>. Pour cela, il est nécessaire de penser une mise en œuvre technique fiable. Nos équipes de <strong>développeurs web</strong> définissent la meilleure solution pour <strong>votre site internet</strong>.</p>
                          </div>
                        </Accordion>
                    </div>
                  </section>
                  
                  <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselBanque />
                    </div>
                </div>

                  <SimpleMap/>
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
query lastsThreePostsSiteInternetBanque {
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
export default SiteInternetBanque;




