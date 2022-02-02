import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";

import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";

import CarouselHotel from "../../components/carousel-slides/hotel-slides";

import Accordion from "../../components/accordion";
import SEO from "../../components/seo";
import SimpleMap from "../../components/simpleMap";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";

import stars from '../../images/stars.png';
import arriereplan from "../../images/creation-site-internet-hotel.jpg";
import siteinternet from "../../images/site-internet-hotel.jpg";
import referencement from "../../images/referencement-site-internet-hotel.jpg";
import webdesign from "../../images/webdesign-site-internet-hotel.jpg";
import realisation1 from "../../images/3baudets.jpg";
import realisation2 from "../../images/arbre-rouge.jpg";
import realisation3 from "../../images/camping-etang-d-ardy.jpg";
import map from "../../images/map.jpg";
import surmesure from "../../images/web.svg"



class SiteInternetHotel extends Component {

    constructor(props) {
        super(props);

        this.metiers = ['hôtelier', 'restaurateur', 'exploitant', 'camping'];
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
                    title="Création de site internet pour Hôtel à Toulouse - Linkweb"
                    description="Vous souhaitez créer un site web pour votre hôtel ou chambre d'hôtes à Toulouse (31) ou à Agen (47) ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-hotel/"
                    nom="Créer un site internet internet Hôtel"
                    slug="creation-site-internet-toulouse/site-internet-hotel/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Création de site internet pour <span className="text-bleu">Hôtel</span></h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-1/2 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Linkweb, partenaire des hôteliers à Toulouse et Agen.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-2/3 lg:mx-0 flex flex-col lg:flex-row justify-center pb-24 lg:justify-start">
                            <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-white shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <svg width="80px" className="mx-auto block" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><g transform="translate(-2421,1727.0002)"><path d="m 2436,-753.6378 a 1.0001,1.0001 0 0 0 -1,1 l 0,74 a 1.0001,1.0001 0 0 0 1,1 l 70,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-74 a 1.0001,1.0001 0 0 0 -1,-1 l -70,0 z m 1,2 68,0 0,72 -22,0 0,-19 a 1.0001,1.0001 0 0 0 -1,-1 l -22,0 a 1.0001,1.0001 0 0 0 -1,1 l 0,19 -22,0 0,-72 z m 5,4 a 1.0001,1.0001 0 0 0 -1,1 l 0,10 a 1.0001,1.0001 0 0 0 1,1 l 10,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-10 a 1.0001,1.0001 0 0 0 -1,-1 l -10,0 z m 16,0 a 1.0001,1.0001 0 0 0 -1,1 l 0,10 a 1.0001,1.0001 0 0 0 1,1 l 10,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-10 a 1.0001,1.0001 0 0 0 -1,-1 l -10,0 z m 16,0 a 1.0001,1.0001 0 0 0 -1,1 l 0,10 a 1.0001,1.0001 0 0 0 1,1 l 10,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-10 a 1.0001,1.0001 0 0 0 -1,-1 l -10,0 z m 16,0 a 1.0001,1.0001 0 0 0 -1,1 l 0,10 a 1.0001,1.0001 0 0 0 1,1 l 10,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-10 a 1.0001,1.0001 0 0 0 -1,-1 l -10,0 z m -47,2 8,0 0,8 -8,0 0,-8 z m 16,0 8,0 0,8 -8,0 0,-8 z m 16,0 8,0 0,8 -8,0 0,-8 z m 16,0 8,0 0,8 -8,0 0,-8 z m -49,14 a 1.0001,1.0001 0 0 0 -1,1 l 0,10 a 1.0001,1.0001 0 0 0 1,1 l 10,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-10 a 1.0001,1.0001 0 0 0 -1,-1 l -10,0 z m 16,0 a 1.0001,1.0001 0 0 0 -1,1 l 0,10 a 1.0001,1.0001 0 0 0 1,1 l 10,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-10 a 1.0001,1.0001 0 0 0 -1,-1 l -10,0 z m 16,0 a 1.0001,1.0001 0 0 0 -1,1 l 0,10 a 1.0001,1.0001 0 0 0 1,1 l 10,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-10 a 1.0001,1.0001 0 0 0 -1,-1 l -10,0 z m 16,0 a 1.0001,1.0001 0 0 0 -1,1 l 0,10 a 1.0001,1.0001 0 0 0 1,1 l 10,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-10 a 1.0001,1.0001 0 0 0 -1,-1 l -10,0 z m -47,2 8,0 0,8 -8,0 0,-8 z m 16,0 8,0 0,8 -8,0 0,-8 z m 16,0 8,0 0,8 -8,0 0,-8 z m 16,0 8,0 0,8 -8,0 0,-8 z m -49,14 a 1.0001,1.0001 0 0 0 -1,1 l 0,10 a 1.0001,1.0001 0 0 0 1,1 l 10,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-10 a 1.0001,1.0001 0 0 0 -1,-1 l -10,0 z m 16,0 a 1.0001,1.0001 0 0 0 -1,1 l 0,10 a 1.0001,1.0001 0 0 0 1,1 l 10,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-10 a 1.0001,1.0001 0 0 0 -1,-1 l -10,0 z m 16,0 a 1.0001,1.0001 0 0 0 -1,1 l 0,10 a 1.0001,1.0001 0 0 0 1,1 l 10,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-10 a 1.0001,1.0001 0 0 0 -1,-1 l -10,0 z m 16,0 a 1.0001,1.0001 0 0 0 -1,1 l 0,10 a 1.0001,1.0001 0 0 0 1,1 l 10,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-10 a 1.0001,1.0001 0 0 0 -1,-1 l -10,0 z m -47,2 8,0 0,8 -8,0 0,-8 z m 16,0 8,0 0,8 -8,0 0,-8 z m 16,0 8,0 0,8 -8,0 0,-8 z m 16,0 8,0 0,8 -8,0 0,-8 z m -49,14 a 1.0001,1.0001 0 0 0 -1,1 l 0,10 a 1.0001,1.0001 0 0 0 1,1 l 10,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-10 a 1.0001,1.0001 0 0 0 -1,-1 l -10,0 z m 48,0 a 1.0001,1.0001 0 0 0 -1,1 l 0,10 a 1.0001,1.0001 0 0 0 1,1 l 10,0 a 1.0001,1.0001 0 0 0 1,-1 l 0,-10 a 1.0001,1.0001 0 0 0 -1,-1 l -10,0 z m -47,2 8,0 0,8 -8,0 0,-8 z m 18,0 9,0 0,18 -9,0 0,-18 z m 11,0 9,0 0,18 -9,0 0,-18 z m 19,0 8,0 0,8 -8,0 0,-8 z" fill="#37cfee" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible" /><path d="m 2471,-771.63814 -2.25,4.6875 -5.25,0.6562 3.8438,3.5625 -0.9688,5.0938 4.625,-2.4688 4.625,2.4688 -0.9688,-5.0938 3.8438,-3.5625 -5.25,-0.6562 -2.25,-4.6875 z m -15.5,3 -1.5938,3.4375 -3.9062,0.375 2.9375,2.5 -0.8437,3.6875 3.4062,-1.9063 3.4062,1.9063 -0.8437,-3.6875 2.9375,-2.5 -3.9062,-0.375 -1.5938,-3.4375 z m 31,0 -1.5938,3.4375 -3.9062,0.375 2.9375,2.5 -0.8437,3.6875 3.4062,-1.9063 3.4062,1.9063 -0.8437,-3.6875 2.9375,-2.5 -3.9062,-0.375 -1.5938,-3.4375 z" fill="#37cfee" fill-opacity="1" fill-rule="nonzero" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible" /></g></g></svg>
                        <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span>&nbsp;?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br /> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour répondre à vos objectifs.</p>
                        <br />
                        <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 120 150"><path fill="#37cfee" d="M964.1-5.4v-47.1h-6.6c-5.1,0-9.6-3.8-9.9-8.9c-0.4-5.5,4.1-10.1,9.6-10.1h1.5v-3.3c0-5.1,3.9-9.5,9-9.8  c5.6-0.4,10.2,4,10.2,9.5v3.7h1.1c5.1,0,9.6,3.8,9.9,8.9c0.4,5.5-4.1,10.1-9.6,10.1h-6.9v0V7.3c0,2.3-1.8,4.1-4.1,4.1l0,0  c-2.3,0-4.1-1.8-4.1-4.1V4H952v-9.3H964.1z" /><ellipse fill="#37cfee" cx="968.3" cy="-63.8" rx="3.3" ry="3.3" /><g><path fill="#37cfee" d="M36.8,18.9c-4.4,0-8,3.6-8,8s3.6,8,8,8c2.9,0,5.5-1.6,6.9-4h-6.9c-1.6,0-3-1-3.6-2.4c-0.2-0.5-0.4-1.1-0.4-1.6   s0.1-1.1,0.4-1.6c0.6-1.4,2-2.4,3.6-2.4h6.9C42.4,20.5,39.8,18.9,36.8,18.9z" /><path fill="#37cfee" d="M83.5,33.8c3.9,0,7-3.1,7-7s-3.1-7-7-7c-2.4,0-4.5,1.2-5.7,3h5.7c2.2,0,4,1.8,4,4s-1.8,4-4,4h-5.7   C79.1,32.6,81.2,33.8,83.5,33.8z" /><path fill="#37cfee" d="M54.4,31.4c0,7-4.2,13.3-10.8,16c-0.8,0.3-1.3,1-1.3,1.9v50.9l-5.5,5.1l-5.5-5.1V49.3c0-0.8-0.5-1.6-1.3-1.9   c-6.5-2.7-10.7-9-10.7-16c0-9.6,7.9-17.4,17.5-17.4c6.5,0,12.2,3.6,15.3,8.8h4.5C53.3,15.3,45.7,10,36.8,10   C25,10,15.3,19.6,15.3,31.4c0,8.2,4.7,15.6,12,19.2V101c0,0.6,0.2,1.1,0.6,1.5l7.5,7c0.4,0.4,0.9,0.5,1.4,0.5s1-0.2,1.4-0.5l7.5-7   c0.4-0.4,0.6-0.9,0.6-1.5V50.6c7.3-3.6,12-11,12-19.2c0-0.2,0-0.4,0-0.5h-4C54.4,31,54.4,31.2,54.4,31.4z" /><path fill="#37cfee" d="M99.7,19.2l-7.2-6c-5.2-4.3-12.7-4.3-17.9,0l-7.2,6c-1.2,1-2.3,2.3-3.1,3.6h5.1c0.2-0.2,0.4-0.4,0.6-0.5l7.2-6   c1.9-1.5,4.1-2.3,6.4-2.3c2.3,0,4.6,0.8,6.4,2.3l7.2,6c2.3,1.9,3.6,4.7,3.6,7.7v43.3c0,3.1-2.5,5.7-5.7,5.7H72   c-3.1,0-5.7-2.5-5.7-5.7V30.8h-4v42.5c0,5.3,4.3,9.7,9.7,9.7h23c5.3,0,9.7-4.3,9.7-9.7V30C104.7,25.8,102.9,21.9,99.7,19.2z" /><g><path fill="#37cfee" d="M83.5,28.8H36.8c-1.1,0-2-0.9-2-2s0.9-2,2-2h46.7c1.1,0,2,0.9,2,2S84.6,28.8,83.5,28.8z" /></g></g></svg>
                                <h4>Présentation de vos prestations</h4>
                            </div>
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M93.21,69.76H6.79a3,3,0,0,1-3-3V37.36a3,3,0,0,1,3-3H93.21a3,3,0,0,1,3,3V66.72A3,3,0,0,1,93.21,69.76ZM6.79,35.31a2.05,2.05,0,0,0-2,2V66.72a2,2,0,0,0,2,2H93.21a2,2,0,0,0,2-2V37.36a2.05,2.05,0,0,0-2-2Z" /><path fill="#37cfee" d="M14.73,43.7H9.93V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M17.91,50.86h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M17.91,58h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M17.91,65.17h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M24,43.7H19.21V38.91H24Zm-3.79-1H23V39.91H20.21Z" /><path fill="#37cfee" d="M24,50.86H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M24,58H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M30,58h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M24,65.17H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M30,65.17h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,65.17H31.22v-4.8H60Zm-27.82-1H59v-2.8H32.22Z" /><path fill="#37cfee" d="M36,58h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z" /><path fill="#37cfee" d="M42,58h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z" /><path fill="#37cfee" d="M48,58h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z" /><path fill="#37cfee" d="M54,58h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,58h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z" /><path fill="#37cfee" d="M66,58H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M66,65.17H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M72.05,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M84.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M90.07,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M72.05,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M30,50.86h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M36,50.86h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z" /><path fill="#37cfee" d="M42,50.86h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z" /><path fill="#37cfee" d="M48,50.86h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z" /><path fill="#37cfee" d="M54,50.86h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,50.86h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z" /><path fill="#37cfee" d="M66,50.86H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M72.05,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M90.07,57.83H82.19a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h6.88V47.06H81.39V50.8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V46.06h9.68Z" /><path fill="#37cfee" d="M30,43.7h-4.8V38.91H30Zm-3.8-1H29V39.91h-2.8Z" /><path fill="#37cfee" d="M36,43.7h-4.8V38.91H36Zm-3.8-1H35V39.91h-2.8Z" /><path fill="#37cfee" d="M42,43.7h-4.8V38.91H42Zm-3.8-1H41V39.91h-2.8Z" /><path fill="#37cfee" d="M48,43.7h-4.8V38.91H48Zm-3.8-1H47V39.91h-2.8Z" /><path fill="#37cfee" d="M54,43.7h-4.8V38.91H54Zm-3.8-1H53V39.91h-2.8Z" /><path fill="#37cfee" d="M60,43.7h-4.8V38.91H60Zm-3.8-1H59V39.91h-2.8Z" /><path fill="#37cfee" d="M66,43.7H61.25V38.91H66Zm-3.79-1H65V39.91H62.25Z" /><path fill="#37cfee" d="M72.05,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M78.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M84.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M90.07,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M82.19,57.83a.5.5,0,0,1-.5-.5v-6h-.8a.5.5,0,0,1,0-1h1.8v7A.5.5,0,0,1,82.19,57.83Z" /></svg>
                                <h4>Rédaction optimisée pour le référencement naturel</h4>
                            </div>
                            <div className="w-full mx-3 md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 66 82.5"><g><g><path fill="#37cfee" d="M61.25,5.1699h-7.2515V3.8984c0-2.1504-1.7495-3.9004-3.9004-3.9004H15.9028c-2.1509,0-3.9004,1.75-3.9004,3.9004v1.2715    H4.75c-2.0679,0-3.75,1.6826-3.75,3.75c0,9.451,0,34.5382,0,44.0625c0,2.0674,1.6821,3.75,3.75,3.75h19.6915    c-0.8954,2.931-2.7081,4.9595-5.9279,7.7695h-3.0625c-0.4141,0-0.75,0.3359-0.75,0.75s0.3359,0.75,0.75,0.75h35.0981    c0.4141,0,0.75-0.3359,0.75-0.75s-0.3359-0.75-0.75-0.75h-3.0626c-3.2197-2.8092-5.0323-4.8384-5.9278-7.7695H61.25    c2.0679,0,3.75-1.6826,3.75-3.75c0-9.5245,0-34.6122,0-44.0625C65,6.8525,63.3179,5.1699,61.25,5.1699z M13.5024,41.1123V10.6699    h38.9961v30.4424H13.5024z M12.0024,41.1504h-5.502V10.6699h5.502V41.1504z M53.9985,10.6699h5.502v30.4805h-5.502V10.6699z     M15.9028,1.498h34.1953c1.3237,0,2.4004,1.0771,2.4004,2.4004v4.7637H13.5024V3.8984C13.5024,2.5752,14.5791,1.498,15.9028,1.498    z M4.75,6.6699h7.2524v2.5h-6.252c-0.4141,0-0.75,0.3359-0.75,0.75v31.9805c0,0.4141,0.3359,0.75,0.75,0.75h54.5    c0.4141,0,0.75-0.3359,0.75-0.75V9.9199c0-0.4141-0.3359-0.75-0.75-0.75h-6.252v-2.5H61.25c1.2407,0,2.25,1.0098,2.25,2.25    v36.2266h-61V8.9199C2.5,7.6797,3.5093,6.6699,4.75,6.6699z M45.2324,64.5H20.7681c2.7618-2.5519,4.4211-4.7057,5.2476-7.7676    h13.9691C40.8109,59.7943,42.4702,61.9481,45.2324,64.5z M61.25,55.2324H40.5873c-0.0059-0.0001-0.0111-0.0029-0.017-0.0029    H25.4302c-0.0059,0-0.0111,0.0028-0.017,0.0029H4.75c-1.2407,0-2.25-1.0098-2.25-2.25v-6.333h61v6.333    C63.5,54.2227,62.4907,55.2324,61.25,55.2324z" /><path fill="#37cfee" d="M33,48.3652c-1.4189,0-2.5737,1.1553-2.5737,2.5742S31.5811,53.5127,33,53.5127c1.4189,0,2.5737-1.1543,2.5737-2.5732    S34.4189,48.3652,33,48.3652z M33,52.0127c-0.5923,0-1.0737-0.4814-1.0737-1.0732c0-0.5928,0.4814-1.0742,1.0737-1.0742    s1.0737,0.4814,1.0737,1.0742C34.0737,51.5313,33.5923,52.0127,33,52.0127z" /><path fill="#37cfee" d="M38.0625,6.9258c1.0176,0,1.8452-0.8271,1.8452-1.8447s-0.8276-1.8447-1.8452-1.8447    c-1.0171,0-1.8447,0.8271-1.8447,1.8447S37.0454,6.9258,38.0625,6.9258z M38.0625,4.0156c0.5874,0,1.0649,0.4785,1.0649,1.0654    s-0.4775,1.0654-1.0649,1.0654c-0.5869,0-1.0645-0.4785-1.0645-1.0654S37.4756,4.0156,38.0625,4.0156z" /><path fill="#37cfee" d="M42.9204,6.9258c1.0176,0,1.8452-0.8271,1.8452-1.8447s-0.8276-1.8447-1.8452-1.8447s-1.8452,0.8271-1.8452,1.8447    S41.9028,6.9258,42.9204,6.9258z M42.9204,4.0156c0.5874,0,1.0649,0.4785,1.0649,1.0654s-0.4775,1.0654-1.0649,1.0654    s-1.0649-0.4785-1.0649-1.0654S42.333,4.0156,42.9204,4.0156z" /><path fill="#37cfee" d="M47.7783,6.9258c1.0176,0,1.8452-0.8271,1.8452-1.8447s-0.8276-1.8447-1.8452-1.8447s-1.8452,0.8271-1.8452,1.8447    S46.7607,6.9258,47.7783,6.9258z M47.7783,4.0156c0.5874,0,1.0649,0.4785,1.0649,1.0654s-0.4775,1.0654-1.0649,1.0654    s-1.0649-0.4785-1.0649-1.0654S47.1909,4.0156,47.7783,4.0156z" /><path fill="#37cfee" d="M18.96,26.6357V22.96h9.7261v3.6758c0,0.2158,0.1748,0.3896,0.3901,0.3896h2.0947c0.2153,0,0.3901-0.1738,0.3901-0.3896    c0-0.1012-0.001-5.3572-0.001-5.1553c0-1.8691-1.521-3.3896-3.3901-3.3896h-7.998v-2.5371c0-1.5488-1.2603-2.8086-2.8091-2.8086    h-0.8877c-0.2153,0-0.3901,0.1738-0.3901,0.3896c0,1.4476-0.0001,13.6471,0,13.501c0,0.2158,0.1748,0.3896,0.3901,0.3896h2.0947    C18.7852,27.0254,18.96,26.8516,18.96,26.6357z M29.4663,26.2461V22.96h1.3145v3.2861H29.4663z M30.7798,21.4805v0.6992    c0.1006,0-3.636,0.0008-13.9102,0v-3.3096c2.6721,0,8.5681,0,11.3003,0C29.6089,18.8701,30.7798,20.041,30.7798,21.4805z     M16.8652,13.5244h0.4976c1.1187,0,2.0288,0.9102,2.0288,2.0293v2.5371h-2.5264V13.5244z M16.8652,26.2461V22.96h1.3145v3.2861    H16.8652z" /><path fill="#37cfee" d="M49.0479,37.2715H16.9531c-0.2153,0-0.3901,0.1738-0.3901,0.3896s0.1748,0.3896,0.3901,0.3896h32.0947    c0.2153,0,0.3901-0.1738,0.3901-0.3896S49.2632,37.2715,49.0479,37.2715z" /><path fill="#37cfee" d="M49.0479,33.1035H16.9531c-0.2153,0-0.3901,0.1738-0.3901,0.3896s0.1748,0.3896,0.3901,0.3896h32.0947    c0.2153,0,0.3901-0.1738,0.3901-0.3896S49.2632,33.1035,49.0479,33.1035z" /><path fill="#37cfee" d="M49.0479,28.9355H16.9531c-0.2153,0-0.3901,0.1738-0.3901,0.3896s0.1748,0.3896,0.3901,0.3896h32.0947    c0.2153,0,0.3901-0.1738,0.3901-0.3896S49.2632,28.9355,49.0479,28.9355z" /><path fill="#37cfee" d="M49.0479,24.3838H37.1904c-0.2153,0-0.3901,0.1738-0.3901,0.3896s0.1748,0.3896,0.3901,0.3896h11.8574    c0.2153,0,0.3901-0.1738,0.3901-0.3896S49.2632,24.3838,49.0479,24.3838z" /><path fill="#37cfee" d="M49.0479,19.4951H37.1904c-0.2153,0-0.3901,0.1738-0.3901,0.3896s0.1748,0.3896,0.3901,0.3896h11.8574    c0.2153,0,0.3901-0.1738,0.3901-0.3896S49.2632,19.4951,49.0479,19.4951z" /><path fill="#37cfee" d="M49.0479,14.6074H37.1904c-0.2153,0-0.3901,0.1738-0.3901,0.3896s0.1748,0.3896,0.3901,0.3896h11.8574    c0.2153,0,0.3901-0.1738,0.3901-0.3896S49.2632,14.6074,49.0479,14.6074z" /></g></g></svg>
                                <h4>Outil de réservation en ligne</h4>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Votre devis gratuit" />
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-1/2 px-10 mt-16 lg:-mt-64 mb-32">
                    <h3 className="century text-3xl text-center">
                        D'après la DGCCRF, <span className="text-bleu">93%</span> de la clientèle hôtelière utilise internet pour rechercher un hôtel.
            </h3>
                    <br />
                    <p className="text-center century"><b>Source :</b> <a className="text-bleu hover:text-black" href="https://www.economie.gouv.fr/dgccrf/Publications/Vie-pratique/Fiches-pratiques/plateformes-reservation-en-ligne-hotels-et-restaurants/" target="_blank" rel="noreferrer">DGCCRF, 2019</a></p>
                </section>
                <section className="text-center text-black text-2xl century mx-12 mt-8 lg:mx-0">
                    <h2 className="century leading-none">Répondre à vos<br /><span className="text-6xl text-bleu font-bold">BESOINS</span></h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Notre rôle : mettre en place un projet adapté à l'image de votre entreprise.</h3>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Site internet</span><br /><span className="font-bold text-5xl md:text-6xl">VITRINE</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">La <strong className="font-normal">création d’un site internet vitrine</strong> est essentielle pour faire connaître son établissement <strong className="font-normal">sur le Web</strong>, mais permet également de présenter ses prestations offrir la possibilité aux internautes de vous contacter.
                <br /><br />
                            Par ailleurs, le contenu mis en place sur un <strong className="font-normal">site internet vitrine</strong> est réalisé pour vous <strong className="font-normal">rendre visible</strong> tout en présentant votre établissement de la manière la plus complète possible. Ceci est indispensable pour susciter l’<strong className="font-normal">intérêt des internautes</strong>.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Référencement</span><br /><span className="font-bold text-6xl">LOCAL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Les internautes ont pour habitude d’effectuer une <strong className="font-normal">recherche sur le Web</strong> avant de choisir un <strong className="font-normal">service d’hébergement</strong>. Le <strong className="font-normal">référencement naturel d'un hôtel</strong> doit donc être anticipé. Nous mettons en place une <strong className="font-normal">stratégie de référencement local</strong> qui vous permettra d’<strong className="font-normal">être visible</strong> pour ses utilisateurs directement dans les <strong className="font-normal">résultats de recherche de Google</strong>.
                <br /><br />
                            Du <strong className="font-normal">choix des mots-clés</strong> à la <strong className="font-normal">création des contenus de la stratégie</strong>, tout est pensé pour vous permettre d’attirer des utilisateurs ciblés et ainsi <strong className="font-normal">générer du trafic sur votre site internet</strong>. Le <strong className="font-normal">contenu du site</strong> est travaillé pour permettre à ces derniers de trouver le service qu’ils cherchaient et ainsi prendre contact avec vous.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Design</span><br /><span className="font-bold text-6xl">EFFICACE</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Lorsqu’un <strong className="font-normal">internaute recherche un hôtel</strong>, il va accorder une importance toute particulière aux services et prestations proposés, mais également à l’environnement dans lequel l’établissement s’inscrit. Ceci est aussi vrai lorsqu’il recherche une <strong className="font-normal">maison d’hôtes ou un camping</strong>.
                <br /><br />
                            C’est pourquoi, nous <strong className="font-normal">créons des sites internet</strong> au <strong className="font-normal">webdesign efficace</strong>. Non seulement nos <strong className="font-normal">sites internet</strong> sont <strong className="font-normal">responsive design</strong>, c’est à dire que l’affichage s’adapte en fonction du support de lecture (<strong className="font-normal">smartphone, tablette, ordinateur</strong>, etc.), mais ils proposent des illustrations de haute qualité pour séduire vos <strong className="font-normal">prospects</strong>.</p>
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
                            <svg width="50px" className="mx-auto block" viewBox="0 0 65 81.25"><g><rect x="16.4" y="3.5" width="10.5" height="1.5" fill="#37cfee" /><rect x="28.6" y="3.5" width="1.5" height="1.5" fill="#37cfee" /><path fill="#37cfee" d="M23.3,56.9c-1.6,0-2.9,1.3-2.9,2.9c0,1.6,1.3,2.9,2.9,2.9c1.6,0,2.9-1.3,2.9-2.9C26.2,58.1,24.9,56.9,23.3,56.9z    M23.3,61.1c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4C24.7,60.5,24,61.1,23.3,61.1z" /><path fill="#37cfee" d="M63.6,21.3h-5v-3.9h-4.8v3.9h-8.5V4.5c0-2.6-2.1-4.8-4.8-4.8H6.2c-2.6,0-4.8,2.1-4.8,4.8v56c0,2.6,2.1,4.8,4.8,4.8h34.3   c2.6,0,4.8-2.1,4.8-4.8V49.8h18.4V21.3z M55.2,18.9h1.8v4.4h-1.8V18.9z M6.2,1.2h34.3c1.8,0,3.3,1.5,3.3,3.3v3.1H2.9V4.5   C2.9,2.7,4.4,1.2,6.2,1.2z M40.4,63.7H6.2c-1.8,0-3.3-1.5-3.3-3.3v-5h40.8v5C43.7,62.3,42.2,63.7,40.4,63.7z M43.7,54H2.9v-45h40.8   v12.3H32.4v-3.9h-4.8v3.9h-5v28.5h21.1V54z M30.9,18.9v4.4h-1.8v-4.4H30.9z M62.1,48.3h-38V22.8h3.5v1.9h4.8v-1.9h21.3v1.9h4.8   v-1.9h3.5V48.3z" /><path fill="#37cfee" d="M26.2,35.2h9.6v-8.5h-9.6V35.2z M27.7,28.2h6.6v5.5h-6.6V28.2z" /><path fill="#37cfee" d="M38.3,35.2h9.6v-8.5h-9.6V35.2z M39.8,28.2h6.6v5.5h-6.6V28.2z" /><path fill="#37cfee" d="M50.3,35.2h9.6v-8.5h-9.6V35.2z M51.8,28.2h6.6v5.5h-6.6V28.2z" /><path fill="#37cfee" d="M26.2,46.2h9.6v-8.5h-9.6V46.2z M27.7,39.2h6.6v5.5h-6.6V39.2z" /><path fill="#37cfee" d="M38.3,46.2h9.6v-8.5h-9.6V46.2z M39.8,39.2h6.6v5.5h-6.6V39.2z" /><path fill="#37cfee" d="M50.3,46.2h9.6v-8.5h-9.6V46.2z M51.8,39.2h6.6v5.5h-6.6V39.2z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Module de réservation en ligne</span></h4>
                            <p>Nous vous permettons de faciliter la réservation via la création d'un module en ligne.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                        <div className="w-full -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 86.882 111.4925"><path fill="#37cfee" d="M55.556,79.33c-.052,0-.106,0-.159,0L31.455,77.231A.5.5,0,0,1,31,76.689a.508.508,0,0,1,.541-.455l23.93,2.094c.034,0,.07,0,.1,0,2.756,0,7.332-6.62,11.375-12.47.523-.757,1.047-1.514,1.567-2.26a2.536,2.536,0,0,0-.328-3.392,1.591,1.591,0,0,0-2.228-.032c-.9.867-1.8,1.784-2.682,2.681-3.383,3.445-6.31,6.423-8.8,6.423H54.4L42.133,68.208a.5.5,0,0,1-.075-.983l13.21-3.232c1-.3,1.229-1.715.924-2.9-.273-1.065-1.008-2.042-2.018-1.814-.982.256-2.021.536-3.059.817C45.1,61.723,41.36,62.654,40.164,61.96a14.717,14.717,0,0,0-14.93-.387.5.5,0,1,1-.455-.89,15.662,15.662,0,0,1,15.89.414c.921.537,6.059-.851,10.185-1.964,1.041-.281,2.083-.563,3.086-.824,1.684-.368,2.827,1.007,3.221,2.537.431,1.678.01,3.63-1.633,4.112l-10.29,2.518,9.217.806c2.061.03,4.992-2.949,8.112-6.124.888-.9,1.795-1.828,2.714-2.714a2.588,2.588,0,0,1,3.57.015,3.524,3.524,0,0,1,.488,4.712c-.521.747-1.043,1.5-1.566,2.259C63.19,73.061,58.857,79.33,55.556,79.33Z" /><path fill="#37cfee" d="M76.6,43.606H70.026a.5.5,0,0,1,0-1H76.1A33.155,33.155,0,0,0,46.844,10.171a.506.506,0,0,1-.337-.19.5.5,0,0,1-.1-.373,3.631,3.631,0,0,0,.05-.479,3.532,3.532,0,1,0-7.064,0,2.843,2.843,0,0,0,.038.393.6.6,0,0,1-.093.416.545.545,0,0,1-.332.233A33.155,33.155,0,0,0,9.757,42.606H50.6a.5.5,0,0,1,0,1H9.253a.5.5,0,0,1-.5-.5A34.153,34.153,0,0,1,38.4,9.24q0-.056,0-.111a4.532,4.532,0,1,1,9.064,0c0,.037,0,.074,0,.11A34.156,34.156,0,0,1,77.1,43.106.5.5,0,0,1,76.6,43.606Z" /><path fill="#37cfee" d="M59.688,49.009a.5.5,0,0,1-.355-.852c1.9-1.927,1.885-4.1-.053-6.847-1.384-1.97-1.385-3.534-.006-5.577a.5.5,0,1,1,.828.56c-1.144,1.7-1.145,2.816,0,4.441,2.2,3.121,2.188,5.855-.053,8.126A.5.5,0,0,1,59.688,49.009Z" /><path fill="#37cfee" d="M54.868,49.009a.5.5,0,0,1-.356-.852c1.9-1.927,1.886-4.1-.052-6.847-1.384-1.97-1.385-3.534-.006-5.577a.5.5,0,1,1,.828.56c-1.145,1.7-1.146,2.816,0,4.441,2.2,3.122,2.187,5.856-.054,8.126A.5.5,0,0,1,54.868,49.009Z" /><path fill="#37cfee" d="M64.508,49.009a.5.5,0,0,1-.355-.852c1.9-1.927,1.886-4.1-.053-6.847-1.384-1.97-1.385-3.534-.006-5.577a.5.5,0,1,1,.828.56c-1.144,1.7-1.145,2.816,0,4.441,2.2,3.121,2.187,5.855-.054,8.126A.5.5,0,0,1,64.508,49.009Z" /><path fill="#37cfee" d="M81.906,53.962H4.976a.5.5,0,0,1-.5-.5V48.117a.5.5,0,0,1,.5-.5H50.642a.5.5,0,0,1,0,1H5.476v4.345h75.93V48.617H69.771a.5.5,0,0,1,0-1H81.906a.5.5,0,0,1,.5.5v5.345A.5.5,0,0,1,81.906,53.962Z" /><path fill="#37cfee" d="M23.839,84.553a1.945,1.945,0,0,1-.76-.157,1.923,1.923,0,0,1-1.037-1.057L13.775,62.771a1.938,1.938,0,0,1,1.073-2.517l4.641-1.865a1.936,1.936,0,0,1,2.516,1.073L30.273,80.03A1.936,1.936,0,0,1,29.2,82.547l-4.641,1.865A1.91,1.91,0,0,1,23.839,84.553Zm-3.631-25.3a.923.923,0,0,0-.346.068l-4.641,1.865A.941.941,0,0,0,14.7,62.4L22.97,82.966h0a.931.931,0,0,0,.5.51.917.917,0,0,0,.714.008l4.641-1.865a.935.935,0,0,0,.519-1.216L21.078,59.835a.933.933,0,0,0-.5-.51A.944.944,0,0,0,20.208,59.249Z" /></svg>
                            <h4 className="font-bold century"><span className="font-bold">Exposition de vos prestations</span></h4>
                            <p>Nous mettons en avant vos prestations pour donner envie aux utilisateurs de travailler avec vous.</p>
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
                                <span className="font-bold">À la suite de notre rencontre, notre <Link to="/" className="text-bleu hover:text-black font-bold">agence web à Toulouse</Link> vous propose une maquette visuelle et des textes rédigés et optimisés spécifiquement pour votre site web.</span>
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
                            <a href="http://www.3baudets.com/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Les 3 Baudets</h4></a>
                        </div>

                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation2 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="https://www.larbrerouge.com/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">L'Arbre Rouge</h4></a>
                        </div>
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation3 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="https://camping-ardy.com/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Camping L'étang d'Ardy</h4></a>
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
                <section className="max-w-4xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet pour Hôtel :<br /><span className="font-bold">Nos clients sont satisfaits</span>
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
                        <div className="text-lg century my-2">L'Auberge des Compagnons</div>
                        <div className="italic">« Depuis l'ouverture de mon restaurant nous travaillons avec Linkweb, ils ont conçu notre site et géré le référencement, les mises en page et le design... Aujourd'hui grâce à notre site Internet c'est une cinquantaine de nouveaux clients par mois qui poussent la porte de notre établissement. »</div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
                        <img
                            src={stars}
                            alt="Création site internet Toulouse"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Ferme Auberge Marquine</div>
                        <div className="italic">« Très satisfait du site de Linkweb, ils sont très réactifs et surtout à l'écoute. Un grand merci à Anthony qui fait le point chaque mois afin de nous tenir informés de notre visibilité sur le Web. »</div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500"*/>
                        <img
                            src={stars}
                            alt="Création site internet Agen"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Cafétéria La Fontaine</div>
                        <div className="italic">« Très bonne équipe, Anthony mon conseiller m'appelle régulièrement pour faire le point sur l'avancement et le positionnement du site. Je recommande Linweb sans réserve. »</div>
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
                <section className="max-w-4xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet pour Hôtel :<br /><span className="font-bold">Une solution en accord avec vos besoins</span>
                    </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="FAIRE CONNAÎTRE SON HÔTEL AVEC UN SITE WEB">
                                <p>Pour faire ses premiers pas <strong>sur le Web</strong>, le <strong>site internet</strong> est un parfait outil afin de <strong>faire connaître son établissement</strong>. Non seulement il permet de <strong>développer sa notoriété</strong>, mais il peut également permettre de <strong>promouvoir ses prestations</strong> et l’environnement dans lequel il s’inscrit.
                            <br /><br />
                                    La <strong><Link to="/creation-de-site-internet-a-agen/" className="text-bleu hover:text-black font-bold">création d'un site internet à Agen</Link></strong> est un bon moyen de <strong>présenter vos prestations</strong> et <strong>développer votre visibilité grâce au Web</strong> afin d’<strong>atteindre vos objectifs</strong>. Faites connaître votre travail avec un <strong>site web</strong> taillé à votre mesure et <strong>à votre image</strong>.
                            </p>
                            </div>
                            <div label="OBTENIR DE LA VISIBILITÉ POUR DÉVELOPPER SON CHIFFRE D'AFFAIRES">
                                <p>Travailler <strong>la visibilité de son site internet sur le web</strong> va permettre de <strong>générer du trafic</strong> et d'attirer de <strong>potentiels clients</strong>. En développant une <strong>stratégie de référencement naturel</strong> adaptée, vous accédez à une visibilité importante auprès d’<strong>utilisateurs qualifiés</strong>, c’est-à-dire, qui seront à même de correspondre à votre cible.
                            <br /><br />
                                    En générant du <strong>trafic sur votre site web grâce au référencement</strong>, vous apportez une réponse à la requête d’internautes à la recherche d’un service. Ces derniers seront à même de vous contacter et de <strong>réserver une chambre au sein de votre établissement</strong>.
                                </p>
                            </div>
                            <div label="DÉVELOPPER UNE PLATEFORME CLAIRE POUR DONNER ACCÈS À SES PRESTATIONS">
                                <p><strong>Votre site web</strong> doit vous permettre de présenter de présenter vos prestations de manière claire et concise. Cela vous permet de démontrer toute la <strong>richesse de vos services</strong>, mais vous aidez l’utilisateur à se projeter par rapport à votre prestation. Développer un univers visuel cohérent avec les <strong>attentes des internautes</strong> sera également utile à ce niveau-là.
                            <br /><br />
                                    La mise en place d'une plateforme claire et efficace doit permettre de faciliter la <strong>prise de contact sur votre site web</strong> et ainsi augmenter votre nombre de <strong>réservations en ligne</strong>. Pour ce faire, le <strong>webdesign</strong> en place sur <strong>votre site web</strong> doit accompagner l'utilisateur pour le convaincre qu'il trouvera ce qu'il attend dans votre <strong>hôtel</strong>, <strong>maison d'hôtes</strong> ou <strong>camping</strong>.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>

                <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselHotel />
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
query lastsThreePostsSiteInternetHotel {
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
export default SiteInternetHotel;




