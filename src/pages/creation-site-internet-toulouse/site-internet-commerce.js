import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';
import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";

import CarouselCommerce from "../../components/carousel-slides/commerce-slides"

import Accordion from "../../components/accordion";
import SEO from "../../components/seo";
import SimpleMap from "../../components/simpleMap";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";

import stars from '../../images/stars.png';
import arriereplan from "../../images/site-internet-boutique.jpg";
import siteinternet from "../../images/site-internet-ecommerce.jpg";
import referencement from "../../images/referencement-ecommerce.jpg";
import webdesign from "../../images/webdesign-ecommerce.jpg";
import realisation1 from "../../images/1001-piles.jpg";
import realisation2 from "../../images/speed-wheel.jpg";
import realisation3 from "../../images/cote-arkad.jpg";
import map from "../../images/map.jpg";



class SiteInternetCommercant extends React.Component {

    constructor(props) {
        super(props);

        this.metiers = ['commerçant', 'bijoutier', 'antiquaire', 'libraire', 'revendeur', 'parfumier', 'vendeur', 'fleuriste', 'épicier', 'concept store'];
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
                    title="Création de site internet pour boutique en ligne - Linkweb"
                    description="Vous souhaitez créer un site web pour votre boutique en ligne à Toulouse (31) ou à Agen (47) ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-commerce/"
                    nom="Créer un site internet internet boutique en ligne"
                    slug="creation-site-internet-toulouse/site-internet-commerce/"
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Création de site internet  <span className="text-bleu">boutique en ligne</span></h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-1/2 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Linkweb, partenaire des commerçants à Toulouse et Agen.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-center pb-24 lg:justify-start">
                            <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-white shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <svg width="80px" className="mx-auto pt-6 block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M93.4,88.1h-6.8V32.4c2.3-2.6,3.8-6.4,4-10.8c0-0.3-0.1-0.6-0.3-0.9c-0.2-0.2-0.5-0.4-0.8-0.4H9.6c-0.3,0-0.6,0.1-0.8,0.4   c-0.2,0.2-0.3,0.5-0.3,0.9c0.2,4.8,2,8.9,4.7,11.5v55.1h-5c-0.6,0-1.2,0.5-1.2,1.2s0.5,1.2,1.2,1.2h6.2h71.2h7.9   c0.6,0,1.2-0.5,1.2-1.2S94,88.1,93.4,88.1z M84.3,88.1H15.4V34.8c1.2,0.7,2.6,1,4,1c2.8,0,5.5-1.5,7.5-4c2,2.6,4.7,4,7.5,4   c2.8,0,5.5-1.5,7.5-4c2,2.6,4.7,4,7.5,4s5.5-1.5,7.5-4c2,2.6,4.7,4,7.5,4c2.8,0,5.5-1.5,7.5-4c2,2.6,4.7,4,7.5,4   c1.7,0,3.2-0.5,4.7-1.4V88.1z M85.4,30.2c-0.4,0.5-0.7,0.9-1.2,1.3c-1.4,1.3-3,2-4.7,2c-2.5,0-4.9-1.6-6.5-4.4   c-0.2-0.3-0.6-0.6-1-0.6s-0.8,0.2-1,0.6c-1.7,2.8-4,4.4-6.5,4.4c-2.5,0-4.9-1.6-6.5-4.4c-0.4-0.7-1.6-0.7-2,0   c-1.7,2.8-4,4.4-6.5,4.4c-2.5,0-4.9-1.6-6.5-4.4c-0.4-0.7-1.6-0.7-2,0c-1.7,2.8-4,4.4-6.5,4.4c-2.5,0-4.9-1.6-6.5-4.4   c-0.2-0.3-0.6-0.6-1-0.6c-0.4,0-0.8,0.2-1,0.6c-1.7,2.8-4,4.4-6.5,4.4c-1.4,0-2.8-0.5-4-1.4c-0.4-0.3-0.8-0.7-1.2-1.1   c-0.4-0.4-0.8-1-1.2-1.5c-1.2-1.8-2-4.2-2.3-6.8h77.3c-0.2,2.2-0.8,4.2-1.7,5.8C86.2,29.1,85.8,29.7,85.4,30.2z"/><path fill="#37cfee" d="M11.3,18.4h76.5c0.6,0,1.2-0.5,1.2-1.2s-0.5-1.2-1.2-1.2H11.3c-0.6,0-1.2,0.5-1.2,1.2S10.6,18.4,11.3,18.4z"/><path fill="#37cfee" d="M36.8,49.8H21.8c-1.3,0-2.3,1-2.3,2.3V83c0,1.3,1,2.3,2.3,2.3h15.1c1.3,0,2.3-1,2.3-2.3V52.1   C39.2,50.8,38.1,49.8,36.8,49.8z M36.8,83H21.8V52.1h15.1L36.8,83z"/><path fill="#37cfee" d="M44.9,40.9c-1.3,0-2.3,1-2.3,2.3V77c0,1.3,1,2.3,2.3,2.3h34.6c1.3,0,2.3-1,2.3-2.3V43.3c0-1.3-1-2.3-2.3-2.3H44.9z    M79.4,77H44.9V43.3h34.6L79.4,77z"/><circle fill="#37cfee" cx="32.7" cy="68.9" r="1.5"/><path fill="#37cfee" d="M57,68.2c0.2,0.2,0.5,0.3,0.8,0.3s0.6-0.1,0.8-0.3L72.8,54c0.5-0.5,0.5-1.2,0-1.6c-0.5-0.5-1.2-0.5-1.6,0L57,66.6   C56.5,67,56.5,67.8,57,68.2z"/><path fill="#37cfee" d="M72.3,60.1l-9.5,9.5c-0.5,0.5-0.5,1.2,0,1.6c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.8-0.3l9.5-9.5c0.5-0.5,0.5-1.2,0-1.6   C73.5,59.7,72.7,59.7,72.3,60.1z"/><path fill="#37cfee" d="M54.1,62.1c0.3,0,0.6-0.1,0.8-0.3l9.5-9.5c0.5-0.5,0.5-1.2,0-1.6s-1.2-0.5-1.6,0l-9.5,9.5c-0.5,0.5-0.5,1.2,0,1.6   C53.5,62,53.8,62.1,54.1,62.1z"/></g></svg>
                        <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span> ?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br /> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour répondre à vos objectifs.</p>
                        <br />
                        <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                            <div className="w-full md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M95.08,35.26l-5.93-16.9H10.85L5,34.85l-0.07.41a6.73,6.73,0,0,0,4.8,6.44V81.64H90.28V41.69A6.73,6.73,0,0,0,95.08,35.26ZM87.43,20.81l3.69,10.4H81.54l-2.61-10.4h8.5ZM20.34,33.66h9.87L30,35.26a4.26,4.26,0,0,1-4.24,4.27H24.16A4.27,4.27,0,0,1,19.9,35.4Zm12.34,0h9.9L42.5,35.26a4.26,4.26,0,0,1-4.24,4.27H36.69a4.26,4.26,0,0,1-4.28-4.08Zm12.35,0H55L55,35.26a4.27,4.27,0,0,1-4.26,4.27H49.21a4.26,4.26,0,0,1-4.27-4.2Zm12.39,0h9.91l0.24,1.59a4.27,4.27,0,0,1-4.27,4.27H61.74A4.28,4.28,0,0,1,57.5,35.2Zm12.38,0h9.86L80.1,35.4a4.27,4.27,0,0,1-4.26,4.12H74.27A4.32,4.32,0,0,1,70,35.07Zm6.6-12.85L78,26.92,79,31.21H69.43l-1.58-10.4H76.4Zm-11,0L67,31.21H57.3l-0.53-10.4h8.59Zm-11,0,0.53,10.4H45.16l0.53-10.4h8.63Zm-11.08,0L42.7,31.21H33.05l1.58-10.4h8.59Zm-11.07,0-1.58,10.4H21l0.86-3.37,1.78-7h8.56Zm-19.59,0h8.5l-2.64,10.4H8.88ZM7.37,35.46L8,33.66h9.8L17.48,35l0,0.3a4.27,4.27,0,0,1-4.26,4.27H11.63A4.27,4.27,0,0,1,7.37,35.46ZM18.6,79.19V46.07H33.92V79.19H18.6Zm17.77,0V43.62H16.15V79.19h-4V42h1a6.71,6.71,0,0,0,5.49-2.86A6.71,6.71,0,0,0,24.16,42h1.57a6.74,6.74,0,0,0,5.48-2.84A6.71,6.71,0,0,0,36.69,42h1.57a6.7,6.7,0,0,0,5.48-2.85A6.71,6.71,0,0,0,49.21,42h1.57a6.68,6.68,0,0,0,5.48-2.87A6.68,6.68,0,0,0,61.74,42h1.57a6.63,6.63,0,0,0,5.47-2.88A6.68,6.68,0,0,0,74.27,42h1.57a6.71,6.71,0,0,0,5.49-2.86A6.71,6.71,0,0,0,86.82,42h1V79.19H36.37Zm52-39.67H86.82a4.27,4.27,0,0,1-4.26-4.27l-0.4-1.59H92l0.64,1.79A4.27,4.27,0,0,1,88.37,39.52Z"/><path fill="#37cfee" d="M44,64.62H83.55V44.4H44V64.62Zm2.45-17.77H81.1V62.17H46.48V46.85Z"/><rect fill="#37cfee" x="30.4" y="59.71" width="1" height="7.73"/></svg>
                                <h4>Votre boutique accessible 24h/24 et 7J/7</h4>
                            </div>
                            <div className="w-full md:w-1/3 mr-2 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 512 640"><path d=" M 44.319 404 L 472 404 L 476.667 212.004 L 495.193 212.004 L 495.193 425 L 44.319 425 L 44.319 404 Z " fill="#37cfee" /><path d=" M 17.02 162.71 L 479.9 162.71 L 479.9 409 L 17.02 409 L 17.02 162.71 Z  M 29.02 174.71 L 467.9 174.71 L 467.9 397 L 29.02 397 L 29.02 174.71 Z " fill-rule="evenodd" fill="#37cfee" /><path d=" M 49.399 167.718 L 447.523 167.718 L 447.523 146.817 L 49.399 146.817 L 49.399 167.718 L 49.399 167.718 L 49.399 167.718 L 49.399 167.718 Z  M 405 113.22 L 424.965 113.22 L 424.965 129.382 L 405 129.382 L 405 113.22 L 405 113.22 L 405 113.22 Z  M 429.971 113.22 L 449.936 113.22 L 449.936 129.382 L 429.971 129.382 L 429.971 113.22 L 429.971 113.22 Z  M 17.125 168.714 L 479.797 168.714 L 479.797 108 L 17.125 108 L 17.125 168.714 L 17.125 168.714 L 17.125 168.714 L 17.125 168.714 Z  M 454.739 113.22 L 474.704 113.22 L 474.704 129.382 L 454.739 129.382 L 454.739 113.22 Z " fill-rule="evenodd" fill="#37cfee" /><path d=" M 215.452 303.217 L 215.452 303.217 L 215.452 303.217 Q 215.452 312.061 209.057 317.095 L 209.057 317.095 L 209.057 317.095 Q 202.662 322.13 191.414 322.13 L 191.414 322.13 L 191.414 322.13 Q 180.166 322.13 173 318.637 L 173 318.637 L 173 308.387 L 173 308.387 Q 177.536 310.519 182.638 311.743 L 182.638 311.743 L 182.638 311.743 Q 187.74 312.968 192.14 312.968 L 192.14 312.968 L 192.14 312.968 Q 198.58 312.968 201.642 310.519 L 201.642 310.519 L 201.642 310.519 Q 204.703 308.07 204.703 303.942 L 204.703 303.942 L 204.703 303.942 Q 204.703 300.223 201.891 297.638 L 201.891 297.638 L 201.891 297.638 Q 199.079 295.053 190.28 291.515 L 190.28 291.515 L 190.28 291.515 Q 181.209 287.841 177.49 283.124 L 177.49 283.124 L 177.49 283.124 Q 173.771 278.407 173.771 271.786 L 173.771 271.786 L 173.771 271.786 Q 173.771 263.486 179.667 258.723 L 179.667 258.723 L 179.667 258.723 Q 185.563 253.961 195.496 253.961 L 195.496 253.961 L 195.496 253.961 Q 205.021 253.961 214.455 258.134 L 214.455 258.134 L 211.008 266.978 L 211.008 266.978 Q 202.163 263.259 195.224 263.259 L 195.224 263.259 L 195.224 263.259 Q 189.963 263.259 187.242 265.549 L 187.242 265.549 L 187.242 265.549 Q 184.52 267.84 184.52 271.604 L 184.52 271.604 L 184.52 271.604 Q 184.52 274.189 185.609 276.026 L 185.609 276.026 L 185.609 276.026 Q 186.697 277.863 189.192 279.496 L 189.192 279.496 L 189.192 279.496 Q 191.686 281.129 198.172 283.805 L 198.172 283.805 L 198.172 283.805 Q 205.474 286.843 208.876 289.474 L 208.876 289.474 L 208.876 289.474 Q 212.278 292.105 213.865 295.416 L 213.865 295.416 L 213.865 295.416 Q 215.452 298.727 215.452 303.217 Z  M 265.797 312.016 L 265.797 321.223 L 228.288 321.223 L 228.288 254.913 L 265.797 254.913 L 265.797 264.075 L 239.128 264.075 L 239.128 282.127 L 264.119 282.127 L 264.119 291.198 L 239.128 291.198 L 239.128 312.016 L 265.797 312.016 Z  M 339 287.977 L 339 287.977 L 339 287.977 Q 339 304.169 330.904 313.149 L 330.904 313.149 L 330.904 313.149 Q 322.808 322.13 307.977 322.13 L 307.977 322.13 L 307.977 322.13 Q 292.964 322.13 284.914 313.217 L 284.914 313.217 L 284.914 313.217 Q 276.863 304.305 276.863 287.887 L 276.863 287.887 L 276.863 287.887 Q 276.863 271.468 284.959 262.669 L 284.959 262.669 L 284.959 262.669 Q 293.055 253.87 308.068 253.87 L 308.068 253.87 L 308.068 253.87 Q 322.854 253.87 330.927 262.805 L 330.927 262.805 L 330.927 262.805 Q 339 271.74 339 287.977 Z  M 288.384 287.977 L 288.384 287.977 L 288.384 287.977 Q 288.384 300.223 293.327 306.55 L 293.327 306.55 L 293.327 306.55 Q 298.271 312.877 307.977 312.877 L 307.977 312.877 L 307.977 312.877 Q 317.638 312.877 322.559 306.618 L 322.559 306.618 L 322.559 306.618 Q 327.48 300.359 327.48 287.977 L 327.48 287.977 L 327.48 287.977 Q 327.48 275.777 322.604 269.472 L 322.604 269.472 L 322.604 269.472 Q 317.728 263.168 308.068 263.168 L 308.068 263.168 L 308.068 263.168 Q 298.316 263.168 293.35 269.472 L 293.35 269.472 L 293.35 269.472 Q 288.384 275.777 288.384 287.977 Z " fill-rule="evenodd" fill="#37cfee" /></svg>
                                <h4>Optimisation technique pour le référencement naturel</h4>
                            </div>
                            <div className="w-full md:w-1/3 mr-2 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 32 40"><g><path fill="#37cfee" d="M12.7,25.8C12.7,25.8,12.7,25.8,12.7,25.8c-1.1-0.2-2,0.6-2.1,2c-0.1,1.3,0.8,2.1,1.9,2.2c1,0,2-0.7,2-2   C14.4,26.8,13.7,25.9,12.7,25.8z M12.6,29c-0.5,0-1-0.1-1.2-0.8c-0.2-0.8,0.4-1.5,1.1-1.3c0,0,0,0,0,0c0,0,0.1,0,0.1,0   c0.5,0,0.8,0.5,0.9,1C13.7,28.5,13.2,28.9,12.6,29z"/><path fill="#37cfee" d="M25.2,25.7c-1-0.1-1.9,0.9-1.8,2.1c0,0.7,0.3,1.4,0.7,1.8c0.4,0.3,0.9,0.3,1.3,0.4c1,0.1,1.6-1.3,1.4-2.3   C26.6,26.5,26.2,25.8,25.2,25.7z M25.4,28.9c-0.6,0-1.1-0.1-1.2-1c-0.1-0.8,0.3-1.3,1-1.2c0.5,0,0.6,0.2,0.8,0.8   C26,28.1,26,29,25.4,28.9z"/><path fill="#37cfee" d="M28.6,8.7c-2.6-0.6-5.4-0.5-8-0.7c-4-0.4-8-0.7-12-0.8C8.5,6.5,8.4,5.9,8.2,5.4c-0.4-1-1.2-1.2-2.1-1.6   c0-0.4-0.1-0.7-0.4-0.9c-0.5-0.3-1-0.5-1.5-0.7C3.5,2,2,1.6,2,3c0,1.1,1.2,1.5,1.9,1.8c0.6,0.2,1.4,0.5,1.9,0   c0.5,0.2,1,0.3,1.4,0.8c0.5,0.6,0.5,1.4,0.6,2.2c0.3,1.7,0.7,3.4,1.1,5c0.6,2.8,1.3,5.6,1.9,8.4c-0.7,0.3-1.2,1-1.2,2   c0,1.5,1.3,1.9,2.3,1.9c4.9,0.1,9.8,0,14.6,0.1c0.6,0,0.6-1,0-1c-2.9,0-5.8,0-8.7,0c-1.5,0-3.1,0-4.6,0c-0.6,0-2.2,0.3-2.6-0.4   c-0.4-0.7,0.1-1.6,0.7-1.6c4.2,0,8.3,0,12.5,0c1,0,2.8,0.2,3.5-0.9c0.3-0.5,0.4-1.2,0.5-1.7c0.3-1.2,0.6-2.3,0.9-3.5   c0.5-1.8,1.2-3.7,1.3-5.6C30.1,9.4,29.6,8.9,28.6,8.7z M4,4C3.7,3.9,2.9,3.6,2.7,3.3C2.6,3,2.9,2.8,3,2.7c0.1,0,0.2,0,0.3,0   c0.3,0.1,0.6,0.2,0.8,0.3C4.5,3.2,4.8,3.3,5,3.5c0.3,0.2,0.5,0.2,0.4,0.6C5.3,4.6,4.2,4.1,4,4z M29.1,10.1c0.2,0.6-0.3,2-0.4,2.6   c0,0.2-0.1,0.3-0.1,0.5c-1.2-0.1-2.4-0.2-3.6-0.3c0.2-1.2,0.5-2.3,0.7-3.5C26.9,9.4,28.8,9.4,29.1,10.1z M27.7,16.3   c-0.1,0.2-0.1,0.5-0.2,0.7c-1.1-0.1-2.2-0.1-3.3-0.1c0.2-1.1,0.4-2.2,0.6-3.4c1.2,0.1,2.4,0.2,3.6,0.3   C28.2,14.7,27.9,15.5,27.7,16.3z M20.7,21.2c0.1-1.2,0.1-2.4,0.2-3.6c0.9,0,1.7,0.1,2.6,0.1c-0.2,1.2-0.4,2.4-0.6,3.5   C22.1,21.2,21.4,21.2,20.7,21.2z M20.9,16.8c0.1-1.2,0.1-2.4,0.2-3.6c1,0.1,2,0.2,3,0.3c-0.2,1.1-0.4,2.3-0.6,3.4   C22.7,16.9,21.8,16.9,20.9,16.8z M11.6,21.1c-0.2-1.3-0.5-2.6-0.8-3.9c0.8,0,1.7,0.1,2.5,0.1c0.2,1.3,0.5,2.5,0.8,3.8   C13.2,21.2,12.4,21.2,11.6,21.1z M9.6,12.1c0.9,0.1,1.9,0.2,2.8,0.3c0.2,1.4,0.4,2.8,0.7,4.2c-0.8,0-1.7-0.1-2.5-0.1   C10.3,15,9.9,13.6,9.6,12.1z M14.7,21.2c-0.3-1.3-0.5-2.5-0.8-3.8c0.9,0,1.8,0.1,2.7,0.1c0.1,1.2,0.1,2.5,0.2,3.7   C16.1,21.2,15.4,21.2,14.7,21.2C14.7,21.2,14.7,21.2,14.7,21.2z M13.8,16.6c-0.2-1.4-0.5-2.8-0.7-4.2c1.1,0.1,2.2,0.2,3.3,0.3   c0.1,1.3,0.2,2.6,0.2,3.9C15.7,16.7,14.7,16.6,13.8,16.6z M13,11.7c-0.2-1.1-0.4-2.2-0.6-3.3c1.2,0.1,2.5,0.2,3.7,0.3   c0.1,1.1,0.1,2.2,0.2,3.4C15.2,11.9,14.1,11.8,13,11.7z M17,12.9c1.2,0.1,2.3,0.2,3.5,0.3c-0.1,1.2-0.2,2.4-0.2,3.6   c-1,0-2-0.1-3-0.1C17.2,15.4,17.1,14.1,17,12.9z M25,9.4c-0.3,1.1-0.5,2.3-0.7,3.4c-1-0.1-2.1-0.2-3.1-0.3c0.1-1.1,0.2-2.3,0.3-3.4   C22.6,9.2,23.8,9.3,25,9.4C24.9,9.4,25,9.4,25,9.4z M20.8,9c-0.1,1.1-0.2,2.3-0.3,3.4c-1.2-0.1-2.4-0.2-3.6-0.4   c-0.1-1.1-0.1-2.3-0.2-3.4c1.2,0.1,2.4,0.2,3.5,0.3C20.4,9,20.6,9,20.8,9z M8.8,8.2c1,0,1.9,0.1,2.9,0.1c0.2,1.1,0.4,2.2,0.6,3.3   c-1-0.1-1.9-0.2-2.9-0.3c-0.1-0.2-0.1-0.5-0.2-0.7C9.1,9.9,9,9,8.8,8.2z M17.5,21.2c-0.1-1.2-0.1-2.5-0.2-3.7c1,0,1.9,0.1,2.9,0.1   c-0.1,1.2-0.1,2.4-0.2,3.6C19.2,21.2,18.3,21.2,17.5,21.2z M26.8,19.6c-0.4,1.6-1.2,1.5-2.5,1.6c-0.3,0-0.5,0-0.8,0   c0.2-1.2,0.4-2.3,0.6-3.5c1.1,0,2.1,0.1,3.2,0.1C27.2,18.4,27,19,26.8,19.6z"/><path fill="#37cfee" d="M9.8,27.1c0.2-0.5-0.4-0.8-0.6-0.4c-0.4,1-0.2,2.1,0.3,2.9c0.3,0.4,0.7-0.2,0.5-0.5C9.6,28.5,9.5,27.7,9.8,27.1z"/><path fill="#37cfee" d="M8.5,27.7c0-0.2-0.2-0.4-0.3-0.4c-0.2,0-0.3,0.2-0.3,0.4c0,0.4,0,0.8,0.2,1.1c0.2,0.4,0.8,0,0.6-0.4   C8.5,28.2,8.5,27.9,8.5,27.7z"/></g></svg>
                                <h4>Vente de vos produits directement en ligne</h4>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Votre devis gratuit" />
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-1/2 px-10 mt-16 lg:-mt-64 mb-32">
                    <h3 className="century text-3xl text-center">
                        D'après SEMrush, <span className="text-bleu">40% </span>du trafic d'un site internet e-commerce est d'origine organique, ce qui en fait la source principale de trafic.
            </h3>
                    <br />
                    <p className="text-center century"><b>Source :</b> <a className="text-bleu hover:text-black" href="https://fr.semrush.com/blog/50-faits-incontournables-sur-e-commerce-en-2017/" target="_blank" rel="noreferrer">SEMrush,2019.</a></p>
                </section>
                <section className="text-center text-black text-2xl century mx-12 mt-8 lg:mx-0">
                    <h2 className="century leading-none">Répondre à vos<br /><span className="text-6xl text-bleu font-bold">BESOINS</span></h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Notre rôle : mettre en place un projet adapté à l'image de votre entreprise.</h3>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titre text-center century leading-none"><span>Site internet</span><br /><span className="font-bold text-5xl md:text-6xl">E-COMMERCE</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg"><strong className="font-normal">Créer un site internet e-commerce</strong> est idéal lorsqu’il s’agit de rendre votre <strong className="font-normal">boutique ou votre commerce</strong> accessible 24h sur 24 et 7 jours sur 7. Ce <strong className="font-normal">type de site internet</strong> vous permet de <strong className="font-normal">vendre vos produits directement en ligne</strong>. À l’image du <strong className="font-normal">site internet catalogue</strong>, il est possible de mettre en place des <strong className="font-normal">fiches produits détaillées</strong>.
                        <br/><br/>
                        Un <strong className="font-normal">site internet e-commerce</strong> doit donner confiance à l’utilisateur : un protocole de <strong className="font-normal">paiement sécurisé</strong>, des <strong className="font-normal">avis de clients satisfaits</strong>, une transparence sans faille et une allure irréprochable feront de <strong className="font-normal">votre site e-commerce</strong> un outil efficace.
                </p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titre text-center century leading-none"><span>Référencement</span><br /><span className="font-bold text-6xl">LOCAL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg"><strong className="font-normal">Avoir un site internet de type marchand</strong> est un atout considérable pour toucher un nouveau public, plus éloigné géographiquement. Toutefois, il reste essentiel d’<strong className="font-normal">apporter de la visibilité à son commerce</strong> d’un point de vue local en vue d’<strong className="font-normal">améliorer sa notoriété</strong>. Nous mettons en place une <strong className="font-normal">stratégie de référencement naturel local</strong> pour <strong className="font-normal">apporter de la visibilité à votre commerce en ligne</strong>.
                        <br/><br/>
                        <strong className="font-normal">Obtenir un bon positionnement sur les moteurs de recherche</strong> est important pour <strong className="font-normal">générer du trafic sur votre site internet</strong>. En effet, c’est ce qui va permettre de développer vos premières ventes en vue de faire grimper votre <strong className="font-normal">chiffre d’affaires</strong>.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titre text-center century leading-none"><span>Design</span><br /><span className="font-bold text-6xl">EFFICACE</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Le <strong className="font-normal">webdesign d’un site e-commerce</strong> est une partie essentielle du travail du site. En effet, il est indispensable que l’allure générale du <strong className="font-normal">site web</strong> inspire confiance aux utilisateurs pour que ces derniers <strong className="font-normal">commandent en ligne</strong>.
                        <br/><br/>
                            Ceci passe par un design soigné, adapté à tous les supports (<strong className="font-normal">responsive design</strong>) et fluide. Il doit accompagner l’<strong className="font-normal">expérience utilisateur</strong> et rassurer les internautes en fournissant le maximum d’informations de la manière la plus intuitive possible.</p>
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
                            <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path d="m 7.0006532,963.36217 c -0.5938,0 -1.0179,0.4983 -1.0001,1 0.01,0.5373 0.4171,1.0126 1.0001,1 l 10.2193998,0 2.8126,11.1875 c 3.0624,15.3269 6.2041,30.88443 8.8444,44.00003 0.088,0.4584 0.5334,0.8207 1.0001,0.8125 l 54.2535,0 c 0.4666,0.01 0.9125,-0.3541 1,-0.8125 l 8.8444,-44.00003 c 0.148,-0.5951 -0.3869,-1.1796 -0.9688,-1.1875 l -71.2235,0 -2.8126,-11.25 c -0.1101,-0.4256 -0.5293,-0.7502 -0.9688,-0.75 l -11.0006998,0 z m 15.2197998,14 69.5669,0 -8.4693,42.00003 -52.6284,0 -8.4692,-42.00003 z m 34.6896,4 c -0.1356,0.013 -0.2331,0.068 -0.2812,0.094 l -12.0008,5 c -0.3698,0.1496 -0.6291,0.5385 -0.625,0.9374 l 0,14.03133 c 0,3.0867 1.8237,5.6341 4.219,7.8125 2.3953,2.1783 5.4254,4.0766 8.2193,5.9688 0.3293,0.224 0.7957,0.224 1.1251,0 2.7939,-1.8922 5.824,-3.7905 8.2192,-5.9688 2.3953,-2.1784 4.2191,-4.7258 4.2191,-7.8125 l 0,-14.03133 c 0,-0.3989 -0.2553,-0.7878 -0.6251,-0.9374 l -12.0008,-5 c -0.1593,-0.078 -0.3331,-0.1068 -0.4688,-0.094 z m 0.094,2.0938 11.0007,4.5937 0,13.37503 c 0,2.2974 -1.364,4.3443 -3.5627,6.3437 -2.0441,1.859 -4.7919,3.5964 -7.438,5.375 -2.6461,-1.7786 -5.3937,-3.516 -7.438,-5.375 -2.1987,-1.9994 -3.5627,-4.0463 -3.5627,-6.3437 l 0,-13.37503 11.0007,-4.5937 z m -13.5009,42.90623 c -4.1305,0 -7.5004,3.3698 -7.5004,7.5 0,4.1303 3.3699,7.5 7.5004,7.5 4.1306,0 7.5005,-3.3697 7.5005,-7.5 0,-4.1302 -3.3699,-7.5 -7.5005,-7.5 z m 27.0018,0 c -4.1306,0 -7.5005,3.3698 -7.5005,7.5 0,4.1303 3.3699,7.5 7.5005,7.5 4.1306,0 7.5005,-3.3697 7.5005,-7.5 0,-4.1302 -3.3699,-7.5 -7.5005,-7.5 z m -27.0018,2 c 3.0496,0 5.5004,2.4506 5.5004,5.5 0,3.0495 -2.4508,5.5 -5.5004,5.5 -3.0496,0 -5.5003,-2.4505 -5.5003,-5.5 0,-3.0494 2.4507,-5.5 5.5003,-5.5 z m 27.0018,0 c 3.0496,0 5.5004,2.4506 5.5004,5.5 0,3.0495 -2.4508,5.5 -5.5004,5.5 -3.0496,0 -5.5004,-2.4505 -5.5004,-5.5 0,-3.0494 2.4508,-5.5 5.5004,-5.5 z" fill="#37cfee" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg>
                            <h4 className="font-bold century -mt-2"><span className="font-bold">Paiement en ligne sécurisé</span></h4>
                            <p>Nous mettons en place un système de paiement adapté pour la sécurisation des transactions.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                        <div className="w-full -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="60px" className="mx-auto block mt-2" viewBox="0 0 100 125"><path fill="#37cfee" d="M10,20v60h80V20H10z M89,79H11V31h78V79z M89,30H11v-9h78V30z"/><g><polygon fill="#37cfee" points="17,28.031 14,25.516 17,23  "/></g><g><polygon fill="#37cfee" points="20,23 23,25.516 20,28.031  "/></g><path fill="#37cfee" d="M15,35v18h26V35H15z M40,36v15.356c-1.491-1.694-5.104-5.628-6.485-5.628c-0.791,0-1.56,0.598-2.374,1.231  c-0.897,0.698-1.826,1.42-2.792,1.42c-0.703,0-1.765-2.476-2.467-4.115c-1.086-2.534-2.023-4.722-3.387-4.722  c-1.948,0-5.014,7.201-6.495,11.002V36H40z M39.233,52H16.515c2.351-6.245,5.064-11.458,5.98-11.458  c0.704,0,1.766,2.477,2.468,4.116c1.086,2.533,2.023,4.721,3.386,4.721c1.309,0,2.423-0.867,3.406-1.631  c0.645-0.502,1.312-1.021,1.76-1.021C34.177,46.734,36.933,49.393,39.233,52z M39.986,52L40,51.988V52H39.986z"/><g><path fill="#37cfee" d="M33,44.479c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5S34.379,44.479,33,44.479z M33,40.479   c-0.827,0-1.5,0.673-1.5,1.5s0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S33.827,40.479,33,40.479z"/></g><path fill="#37cfee" d="M15,57v18h26V57H15z M40,58v15.356c-1.491-1.694-5.104-5.628-6.485-5.628c-0.791,0-1.56,0.598-2.374,1.231  c-0.897,0.698-1.826,1.42-2.792,1.42c-0.703,0-1.765-2.476-2.467-4.115c-1.086-2.534-2.023-4.722-3.387-4.722  c-1.948,0-5.014,7.201-6.495,11.002V58H40z M39.233,74H16.515c2.351-6.245,5.064-11.458,5.98-11.458  c0.704,0,1.766,2.477,2.468,4.116c1.086,2.533,2.023,4.721,3.386,4.721c1.309,0,2.423-0.867,3.406-1.631  c0.645-0.502,1.312-1.021,1.76-1.021C34.177,68.734,36.933,71.393,39.233,74z M39.986,74L40,73.988V74H39.986z"/><g><path fill="#37cfee" d="M33,66.479c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5S34.379,66.479,33,66.479z M33,62.479   c-0.827,0-1.5,0.673-1.5,1.5s0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S33.827,62.479,33,62.479z"/></g><g><rect fill="#37cfee" x="45" y="39" width="16" height="1"/></g><g><rect fill="#37cfee" x="45" y="48" width="16" height="1"/></g><g><rect fill="#37cfee" x="45" y="42" width="40" height="1"/></g><g><rect fill="#37cfee" x="45" y="45" width="30" height="1"/></g><g><rect fill="#37cfee" x="45" y="61" width="16" height="1"/></g><g><rect fill="#37cfee" x="45" y="70" width="16" height="1"/></g><g><rect fill="#37cfee" x="45" y="64" width="40" height="1"/></g><g><rect fill="#37cfee" x="45" y="67" width="30" height="1"/></g></svg>
                            <h4 className="font-bold century -mt-3"><span className="font-bold">Création des fiches produits</span></h4>
                            <p>Nous définissons des fiches produits pour donner confiance aux utilisateurs avec transparence de l'information.</p>
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
                            <a href="https://www.1001-piles-batteries-agen.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">1001 Piles</h4></a>
                        </div>

                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation2 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="https://speed-wheel.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Speed Wheel</h4></a>
                        </div>
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation3 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="http://cotearkad.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Côté Arkad</h4></a>
                        </div>
                    </div>
                </section>
                <section className="w-full flex my-12 flex-col lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence</span> ?</h3>
                        <h4>Linkweb soutient les commerçants souhaitant développer leur projet sur le Web.</h4>
                    </div>
                    <div className="w-full mx-auto block lg:w-3/12">
                        <RoundButton className="items-center" color="darkgrey" text="Contactez-nous" url="/contact-agence-web-toulouse/" />
                    </div>
                </section>
                <section className="max-w-4xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet pour boutique en ligne :<br /><span className="font-bold">Nos clients sont satisfaits</span>
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
                        <div className="text-lg century my-2">Roques et Lecoeur</div>
                        <div className="italic">« Je suis très satisfait des services de la societé LINKWEB cela depuis plusieurs années maintenant.»</div>
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
                        Création de site internet pour boutique en ligne :<br /><span className="font-bold">Une solution en accord avec vos besoins</span>
                    </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="UN SITE E-COMMERCE POUR UN ACCÈS 24H/24 ET 7J/7">
                                <p>Le principal avantage d’une <strong>boutique en ligne</strong> est son accessibilité 24h/24 et 7J/7. Toutefois, <strong>créer un site internet e-commerce pour sa boutique</strong> ne remplace pas une <strong>boutique physique</strong>. En revanche, elle constitue un très certain atout pour <strong>développer son chiffre d’affaires</strong>.
                                <br/><br/>
                                Ceci va être réalisable en touchant une cible qui était encore inaccessible sans le recours au <strong>web</strong>. Dans tous les cas, le <strong>site web marchand</strong> vous permettra d’exposer vos références en tout temps.
                            </p>
                            </div>
                            <div label="DÉVELOPPER SON CHIFFRE D'AFFAIRES AVEC UN SITE DE VENTE EN LIGNE">
                                <p>La mise en place d’une <strong>stratégie de webmarketing</strong> sur son <strong>site internet e-commerce</strong> est importante <strong>développer votre chiffre d’affaires</strong>. Grâce à la <strong>visibilité obtenue via les moteurs de recherche</strong>, nous ciblons des utilisateurs de façon pertinente pour faire d’eux vos futurs clients. La mise en place d'un <strong>site e-commerce</strong> efficace va vous permettre d'<strong>accroître votre chiffre d'affaires</strong> tout en <strong>gérant vos stocks</strong>.
                            <br /><br />
                                    Le <strong>e-commerce</strong> permet en effet une gestion totale de son commerce grâce à son <strong>site web</strong>. Évaluer et <strong>analyser les ventes</strong>, <strong>gérer ses stocks et sa comptabilité</strong> : il existe des solutions très fonctionnelles pour vous permettre d'avoir la main sur votre <strong>commerce en en ligne</strong>. Nous définissons la stratégie qui vous permettra d'obtenir un outil très efficace grâce à l'étude des <strong>statistiques de votre site web</strong>.
                                </p>
                            </div>
                            <div label="OBTENIR DE LA VISIBILITÉ DANS UN SECTEUR PROCHE DE SOI">
                                <p>Non seulement la <strong>création d’un site internet de type e-commerce</strong> va vous permettre de <strong>communiquer</strong> auprès d’une nouvelle cible, mais il va aussi conforter votre <strong>stratégie de développement local</strong>. En effet, grâce à la <strong>stratégie de référencement naturel</strong> que nous mettons en place, c’est aussi votre <strong>magasin physique</strong> qui va bénéficier de retombées en termes de <strong>visibilité</strong>.
                                <br/><br/>
                                Vous serez donc en mesure d’<strong>acquérir un trafic qualifié</strong> en vue d’<strong>obtenir des contacts</strong> et de potentiels <strong>nouveaux clients</strong> grâce à votre nouvelle <strong>présence en ligne</strong>. <strong>Avoir un site internet</strong> est également important pour travailler son <strong>image de marque</strong> et <strong>fidéliser ses clients</strong>. En somme, le <strong>site internet</strong> est un outil très complet et qui peut être très performant pour un <strong>commerce</strong>.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>

                <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselCommerce />
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
query lastsThreePostsSiteInternetCommercant {
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
export default SiteInternetCommercant;




