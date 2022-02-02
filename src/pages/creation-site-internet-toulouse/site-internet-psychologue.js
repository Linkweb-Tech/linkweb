import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";

import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";

import CarouselPsychologue from "../../components/carousel-slides/psychologue-slides";

import Accordion from "../../components/accordion";
import SEO from "../../components/seo";
import SimpleMap from "../../components/simpleMap";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";

import stars from '../../images/stars.png';
import arriereplan from "../../images/creation-site-internet-psychologue.jpg";
import siteinternet from "../../images/site-internet-psychologue.jpg";
import referencement from "../../images/referencement-site-internet-psychologue.jpg";
import webdesign from "../../images/webdesign-site-internet-psychologue.jpg";
import realisation1 from "../../images/ledilimmo.jpg";
import realisation2 from "../../images/cdh-experts.jpg";
import realisation3 from "../../images/beatrice-fourteau.jpg";
import map from "../../images/map.jpg";
import surmesure from "../../images/web.svg"


class SiteInternetPsychologue extends Component {

    constructor(props) {
        super(props);

        this.metiers = ['psychologue', 'psychothérapeute', 'clinicien', 'pédopsychiatre', 'psychanalyste', 'chercheur'];
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
                    title="Création de site internet Psychologue à Toulouse - Linkweb"
                    description="Vous souhaitez créer un site web pour votre cabinet de Psychologue à Toulouse (31) ou à Agen (47) ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-psychologue/"
                    nom="Créer un site internet internet pour Psychologue"
                    slug="creation-site-internet-toulouse/site-internet-psychologue/"
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
                            <h1 className="text-3xl md:text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Création de site internet pour <span className="text-bleu">Psychologue</span></h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-1/2 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Linkweb, partenaire des professions libérales à Toulouse et Agen.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-2/3 mx-auto lg:mx-0 flex flex-col lg:flex-row justify-center pb-24 lg:justify-start">
                            <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-white shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <svg width="80px" className="mx-auto block mt-4" viewBox="0 0 90 112.5" fill="#37cfee"><g><path d="M51.1,39.7C51.1,39.7,51.1,39.7,51.1,39.7C51.1,39.7,51.1,39.7,51.1,39.7z" /><path d="M51.2,39.7C51.1,39.7,51.1,39.7,51.2,39.7C51.1,39.7,51.1,39.7,51.2,39.7z" /><path d="M85.7,51.4c-0.4-0.6-0.9-1.2-1.3-1.8c-3-4.1-3.5-8.5-1.9-13.4c2.4-7.3,0.5-19.8-3.7-26.2c-0.3-0.5-0.7-0.9-1-1.3   c1,2.2,2.1,4.3,2.8,6.6c0.8,2.3,1,4.8-0.6,7.1c0-12.1-7.1-18.2-17.5-21.6C69.3,3.3,74.7,7.4,77,14.9c1.2,4.2,0.6,10-1.5,13.4   c0-1.1,0-1.8,0-2.5c0.8-9.3-3.5-15.8-11.4-20.4C58.1,2,53.8,0.6,44.1,1.8c-7.5,0.9-14,3.9-19.2,9.4c-8.6,8.9-9.3,23.5-1.5,33.2   c0.3,0.4,0.7,0.8,1,1.2c0,0,0,0,0,0c2.3,2.2,5.9,4.7,5.9,4.7l0,0c0.1,0.1,0.2,0.2,0.3,0.2c14.6,7.7,28-2.8,30.6-7.8c0,0,0,0,0-0.1   c2.9-5.3,3.8-10.7,2.1-16.4c-2.1-7.1-6.9-11.5-13.2-13.3c1.8,1.3,4.4,2.8,6.4,4.8c6.6,6.8,5.7,17.4,4.3,21.1   c-0.2,0.5-0.4,0.9-0.5,1.3c0,0,0,0,0,0c-5.2,10.7-21.1,13.1-26.7,9.3c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0l0,0c0,0-0.1,0-0.1-0.1   c-4.5-2.2-8.7-7.2-8.7-7.2l-0.1,0c-0.2-0.3-0.4-0.6-0.6-0.9c-6-8.8-4.2-21.9,3.9-29.2c10.8-9.7,26.7-9.7,37.3,0   c5.3,4.9,7.6,11.2,7.1,18.3c-0.2,3.7-0.7,10.7-6.8,20.5c-0.8,1.2-1.7,2.7-2.7,4.1c-2.5,3.3-5,6.4-7.6,9.6c-5.1,6.2-4.9,13.4,0.8,19   c2.5,2.4,5.4,4.4,8.1,6.6c0.2-0.2,0.3-0.3,0.5-0.5c-0.7-0.9-1.5-1.9-2.2-2.8c-2.2-3-3.6-6.1-2.9-9.9c0.6-3,1.3-3.5,4.1-2.5   c2.4,0.8,4.8,1.6,7.2,2.2c1.2,0.3,2.6,0.2,3.9,0c3-0.6,4.4-3,4-6c-0.1-0.9,0.1-2.1,0.6-2.9c0.7-1.1,1-2,0.6-3.4   c-0.2-0.5,0.3-1.6,0.8-1.9c1.1-0.6,1.5-1.3,1.3-2.5c-0.2-1.3,0.4-2.2,1.6-2.7c0.3-0.1,0.6-0.3,0.9-0.5   C87.1,55.1,87.4,53.8,85.7,51.4z" /><path d="M53.1,18.8c4.1,4.3,4.7,8,4,12.7c-0.9,5.9-4.5,8.3-4.5,8.3C45.1,46,33.4,43.2,31,35c-1.4-4.7-0.5-8.8,3.1-12.1   c3.4-3.2,7.4-4,11.8-2.2c4.6,1.9,7,7,5.8,11.6c-1.2,4.5-5.3,7.3-10.1,6.8c-3.9-0.4-7-4-7.1-8.1c0-3.8,2.9-7,6.8-7.4   c3.5-0.4,6.7,2.2,7.3,5.9c0.5,3.2-1.8,6.1-5,6.7c-2.8,0.5-5.6-1.4-6.2-4.2c-0.6-2.7,1-5.1,3.7-5.7c1.8-0.4,3.1,0.2,4.2,1.6   c0.8,1.1,0.3,2.3,0.2,2.4c-0.9,1.4-2.9,2.3-4.6,1.9C40.1,32,39.2,31,40.2,30c-0.8,0.3-1.4,1.5,0.2,2.2c1.9,0.9,4.2,0.2,5.5-1.2   c1.3-1.4,1.2-3.5-1-4.9c-2-1.2-3.7-1.2-5.7-0.1c-2.1,1.2-2.9,3.1-2.7,5.4c0.3,3.6,3.4,6,7,5.6c3.9-0.5,6.6-3.9,6.1-7.8   c-0.5-3.8-3.4-6.6-7.1-6.8c-4.2-0.2-7.9,2.4-8.9,6.4c-0.9,4,0.8,8.1,4.3,10.3c3.5,2.2,8.5,1.7,11.8-1.1c3.8-3.2,4.9-8.8,2.6-13.3   c-2.4-4.8-7.9-7.4-13.2-6.2c-5.4,1.2-9.4,5.4-10.2,10.9c-0.8,5.1,1.9,11.5,6.4,13.8c10.6,5.6,18.9-2.3,19.4-2.7c0,0,0,0,0,0   C59.8,35.3,60.2,23.4,53.1,18.8z" /></g><g><path d="M40.2,39C40.2,39,40.2,39,40.2,39C40.3,39,40.2,39,40.2,39z" /><path d="M40.2,39C40.2,39,40.3,39,40.2,39C40.3,39,40.2,39,40.2,39z" /><path d="M5.7,50.7c0.4-0.6,0.9-1.2,1.3-1.8c3-4.1,3.5-8.5,1.9-13.4c-2.4-7.3-0.5-19.8,3.7-26.2c0.3-0.5,0.7-0.9,1-1.3   c-1,2.2-2.1,4.3-2.8,6.6c-0.8,2.3-1,4.8,0.6,7.1C11.3,9.5,18.5,3.4,28.9,0c-6.8,2.6-12.3,6.8-14.5,14.2c-1.2,4.2-0.6,10,1.5,13.4   c0-1.1,0-1.8,0-2.5c-0.8-9.3,3.5-15.8,11.4-20.4c6.3-3.6,16.2-5.3,26.1-3.3c7.4,1.5,13.1,10.2,6.5,6.4c-6.7-3.9-23-6.4-33.6,3.4   c-5.3,4.9-7.6,11.2-7.1,18.3c0.2,3.7,0.7,10.7,6.8,20.5c0.8,1.2,1.7,2.7,2.7,4.1c2.5,3.3,5,6.4,7.6,9.6c5.1,6.2,4.9,13.4-0.8,19   c-2.5,2.4-5.4,4.4-8.1,6.6c-0.2-0.2-0.3-0.3-0.5-0.5c0.7-0.9,1.5-1.9,2.2-2.8c2.2-3,3.6-6.1,2.9-9.9c-0.6-3-1.3-3.5-4.1-2.5   c-2.4,0.8-4.8,1.6-7.2,2.2c-1.2,0.3-2.6,0.2-3.9,0c-3-0.6-4.4-3-4-6c0.1-0.9-0.1-2.1-0.6-2.9c-0.7-1.1-1-2-0.6-3.4   c0.2-0.5-0.3-1.6-0.8-1.9c-1.1-0.6-1.5-1.3-1.3-2.5c0.2-1.3-0.4-2.2-1.6-2.7c-0.3-0.1-0.6-0.3-0.9-0.5C4.3,54.4,4,53.1,5.7,50.7z" /></g></svg>
                        <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span>&nbsp;?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br /> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour répondre à vos objectifs.</p>
                        <br />
                        <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                            <div className="w-full md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M91.445,8.264c-1.469-0.04-2.937-0.039-4.405,0.132c-1.638,0.19-3.239,0.547-4.778,1.206   c-1.972,0.844-3.42,2.276-4.306,4.378c-0.585,1.387-1.021,2.825-1.35,4.304c-0.824,3.709-1.154,7.489-1.341,11.288   c-0.138,2.791-0.138,5.585-0.158,8.379C75.083,41.493,75,45.032,74.484,48.54c-0.24,1.634-0.598,3.237-1.273,4.733   c-1.207,2.674-3.098,4.609-5.536,5.924c-3.594,1.94-7.457,2.703-11.417,3.032c-0.243,0.02-0.272-0.065-0.272-0.298   c0.006-7.205,0.005-14.41,0.005-21.615c0.001,0,0.002,0,0.003,0c0-6.719-0.004-13.438,0.004-20.157   c0.002-1.308,0.049-2.621,0.414-3.881c0.458-1.585,1.271-2.87,2.733-3.551c0.714-0.333,1.464-0.537,2.226-0.683   c1.122-0.215,2.252-0.33,3.385-0.374h2.067V8.232h-0.306c-0.013,0-0.024-0.002-0.037-0.002c-2.084,0.002-4.169,0-6.253,0.002   H33.196v3.437h1.936c1.497,0.056,2.982,0.227,4.454,0.592c1.837,0.456,3.142,1.57,3.839,3.485c0.352,0.966,0.469,1.984,0.531,3.011   c0.074,1.223,0.053,2.447,0.053,3.671c0,13.148,0,26.297,0,39.445c0,0.361-0.001,0.369-0.344,0.345   c-1.297-0.092-2.586-0.26-3.867-0.501c-2.36-0.444-4.662-1.105-6.85-2.186c-2.149-1.062-3.963-2.567-5.322-4.686   c-1.098-1.712-1.66-3.648-2.008-5.671c-0.452-2.625-0.581-5.282-0.672-7.943c-0.081-2.363-0.047-4.728-0.081-7.091   c-0.062-4.403-0.269-8.794-0.956-13.143c-0.336-2.126-0.816-4.207-1.538-6.225c-0.957-2.675-2.65-4.471-5.161-5.39   c-2.135-0.781-4.331-1.104-6.568-1.134C10.101,8.241,9.56,8.244,9.019,8.252H4.642v3.275h4.663   c1.011,0.138,1.782,0.723,2.329,1.737c0.135,0.25,0.251,0.509,0.35,0.778c0.534,1.456,0.686,2.986,0.693,4.531   c0.024,4.953,0.046,9.906,0.022,14.858c-0.019,3.877,0.326,7.699,1.245,11.45c0.865,3.531,2.136,6.866,4.115,9.847   c0.898,1.353,1.885,2.623,3.125,3.631c1.588,1.292,3.367,2.196,5.207,2.965c3.701,1.547,7.543,2.527,11.432,3.311   c1.97,0.397,3.949,0.733,5.941,0.979c0.213,0.026,0.251,0.106,0.25,0.322c-0.007,4.327-0.007,8.653-0.004,12.98   c0.001,0.917-0.038,1.83-0.159,2.738c-0.227,1.712-0.699,3.326-1.65,4.738c-0.673,0.998-1.472,1.821-2.607,2.176   c-0.762,0.239-1.536,0.403-2.321,0.515c-1.315,0.187-2.635,0.27-3.958,0.289h-1.208v2.399h35.791v-2.399H66.63   c-1.814-0.035-3.621-0.155-5.401-0.574c-0.765-0.18-1.522-0.405-2.153-0.949c-0.717-0.617-1.29-1.369-1.742-2.23   c-0.938-1.791-1.309-3.752-1.326-5.777c-0.039-4.663-0.015-9.326-0.023-13.989c0-0.175,0.052-0.209,0.198-0.228   c0.717-0.095,1.433-0.2,2.148-0.31c3.355-0.518,6.678-1.208,9.955-2.147c2.517-0.722,4.993-1.578,7.354-2.787   c1.475-0.755,2.894-1.615,4.078-2.853c2.113-2.209,3.636-4.856,4.786-7.764c1.82-4.604,2.693-9.435,2.767-14.427   c0.062-4.167,0.016-8.335,0.035-12.503c0.009-1.952-0.072-3.907,0.098-5.855c0.099-1.147,0.302-2.27,0.765-3.32   c0.58-1.314,1.483-2.058,2.78-2.153h2.17c0.654,0,1.309-0.002,1.963,0.005c0.027,0,0.045-0.003,0.068-0.005h0.206V8.264H91.445z" /></g></svg>
                                <h4>Présentation de vos domaines de compétences</h4>
                            </div>
                            <div className="w-full md:w-1/3 flex pl-4 flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M93.21,69.76H6.79a3,3,0,0,1-3-3V37.36a3,3,0,0,1,3-3H93.21a3,3,0,0,1,3,3V66.72A3,3,0,0,1,93.21,69.76ZM6.79,35.31a2.05,2.05,0,0,0-2,2V66.72a2,2,0,0,0,2,2H93.21a2,2,0,0,0,2-2V37.36a2.05,2.05,0,0,0-2-2Z" /><path fill="#37cfee" d="M14.73,43.7H9.93V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M17.91,50.86h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M17.91,58h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M17.91,65.17h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M24,43.7H19.21V38.91H24Zm-3.79-1H23V39.91H20.21Z" /><path fill="#37cfee" d="M24,50.86H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M24,58H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M30,58h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M24,65.17H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M30,65.17h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,65.17H31.22v-4.8H60Zm-27.82-1H59v-2.8H32.22Z" /><path fill="#37cfee" d="M36,58h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z" /><path fill="#37cfee" d="M42,58h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z" /><path fill="#37cfee" d="M48,58h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z" /><path fill="#37cfee" d="M54,58h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,58h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z" /><path fill="#37cfee" d="M66,58H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M66,65.17H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M72.05,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M84.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M90.07,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M72.05,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M30,50.86h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M36,50.86h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z" /><path fill="#37cfee" d="M42,50.86h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z" /><path fill="#37cfee" d="M48,50.86h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z" /><path fill="#37cfee" d="M54,50.86h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,50.86h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z" /><path fill="#37cfee" d="M66,50.86H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M72.05,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M90.07,57.83H82.19a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h6.88V47.06H81.39V50.8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V46.06h9.68Z" /><path fill="#37cfee" d="M30,43.7h-4.8V38.91H30Zm-3.8-1H29V39.91h-2.8Z" /><path fill="#37cfee" d="M36,43.7h-4.8V38.91H36Zm-3.8-1H35V39.91h-2.8Z" /><path fill="#37cfee" d="M42,43.7h-4.8V38.91H42Zm-3.8-1H41V39.91h-2.8Z" /><path fill="#37cfee" d="M48,43.7h-4.8V38.91H48Zm-3.8-1H47V39.91h-2.8Z" /><path fill="#37cfee" d="M54,43.7h-4.8V38.91H54Zm-3.8-1H53V39.91h-2.8Z" /><path fill="#37cfee" d="M60,43.7h-4.8V38.91H60Zm-3.8-1H59V39.91h-2.8Z" /><path fill="#37cfee" d="M66,43.7H61.25V38.91H66Zm-3.79-1H65V39.91H62.25Z" /><path fill="#37cfee" d="M72.05,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M78.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M84.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M90.07,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M82.19,57.83a.5.5,0,0,1-.5-.5v-6h-.8a.5.5,0,0,1,0-1h1.8v7A.5.5,0,0,1,82.19,57.83Z" /></svg>
                                <h4>Rédaction optimisée pour le référencement naturel</h4>
                            </div>
                            <div className="w-full md:w-1/3 flex pl-4 flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M92.48,72.15h-85A2.53,2.53,0,0,1,5,69.62V16.69a2.53,2.53,0,0,1,2.52-2.52h85A2.53,2.53,0,0,1,95,16.69V69.62A2.53,2.53,0,0,1,92.48,72.15Zm-85-56.71a1.26,1.26,0,0,0-1.25,1.25V69.62a1.26,1.26,0,0,0,1.25,1.25h85a1.26,1.26,0,0,0,1.25-1.25V16.69a1.26,1.26,0,0,0-1.25-1.25Z" /><path fill="#37cfee" d="M51.48,72.22V84.49h-3V72.22h3m.3-1.27H48.22a1,1,0,0,0-1,1V84.79a1,1,0,0,0,1,1h3.56a1,1,0,0,0,1-1V71.92a1,1,0,0,0-1-1Z" /><path fill="#37cfee" d="M61.36,85.83h-28a.63.63,0,0,1,0-1.27h28a.63.63,0,1,1,0,1.27Z" /><path fill="#37cfee" d="M70,85.83H66.89a.63.63,0,1,1,0-1.27H70a.63.63,0,1,1,0,1.27Z" /><path fill="#37cfee" d="M64.83,85.83H63.26a.63.63,0,1,1,0-1.27h1.57a.63.63,0,1,1,0,1.27Z" /><rect fill="#37cfee" x="5.63" y="65.24" width="88.73" height="1.27" /><path fill="#37cfee" d="M58.32,24.68a.35.35,0,0,1-.25-.1l-1.13-1.13a.35.35,0,0,1,.5-.5l1.13,1.13a.35.35,0,0,1-.25.6Z" /><path fill="#37cfee" d="M57.19,24.68a.35.35,0,0,1-.25-.6l1.13-1.13a.35.35,0,0,1,.5.5l-1.13,1.13A.35.35,0,0,1,57.19,24.68Z" /><path fill="#37cfee" d="M59.92,60.86H13.84a2.07,2.07,0,0,1-2.07-2.07V22.59a2.07,2.07,0,0,1,2.07-2.07H59.92A2.07,2.07,0,0,1,62,22.59V58.79A2.07,2.07,0,0,1,59.92,60.86ZM13.84,21.79a.8.8,0,0,0-.8.8V58.79a.8.8,0,0,0,.8.8H59.92a.8.8,0,0,0,.8-.8V22.59a.8.8,0,0,0-.8-.8Z" /><path fill="#37cfee" d="M39,45.82H17.88a2.21,2.21,0,0,1-2.21-2.21V31.37a1.87,1.87,0,0,1,1.87-1.87H39a2.21,2.21,0,0,1,2.21,2.21v11.9A2.21,2.21,0,0,1,39,45.82ZM17.55,30.58a.79.79,0,0,0-.79.79V43.61a1.13,1.13,0,0,0,1.13,1.13H39a1.13,1.13,0,0,0,1.13-1.13V31.71A1.13,1.13,0,0,0,39,30.58Z" /><path fill="#37cfee" d="M56.21,57.45H17.84a2.1,2.1,0,0,1-2.09-2.09V50.28a2.1,2.1,0,0,1,2.09-2.09H56.21a2.1,2.1,0,0,1,2.09,2.09v5.08A2.1,2.1,0,0,1,56.21,57.45ZM17.84,49.27a1,1,0,0,0-1,1v5.08a1,1,0,0,0,1,1H56.21a1,1,0,0,0,1-1V50.28a1,1,0,0,0-1-1Z" /><path fill="#37cfee" d="M61.36,27.29H12.41a.63.63,0,1,1,0-1.27H61.36a.63.63,0,1,1,0,1.27Z" /><path fill="#37cfee" d="M56.91,30.51H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z" /><path fill="#37cfee" d="M56.91,34.32H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z" /><path fill="#37cfee" d="M56.91,38.12H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z" /><path fill="#37cfee" d="M56.91,41.93H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z" /><path fill="#37cfee" d="M56.91,45.74H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z" /><path fill="#37cfee" d="M85,60.7H76.39a1.22,1.22,0,0,1-1.22-1.22v-4a1.08,1.08,0,0,1,1.08-1.08H85a1.22,1.22,0,0,1,1.22,1.22v3.86A1.22,1.22,0,0,1,85,60.7Zm-8.72-5.22v4a.14.14,0,0,0,.14.14H85a.14.14,0,0,0,.14-.14V55.62a.14.14,0,0,0-.14-.14Z" /><path fill="#37cfee" d="M86.72,60.86H68.29a2.07,2.07,0,0,1-2.07-2.07V22.59a2.07,2.07,0,0,1,2.07-2.07H86.72a2.07,2.07,0,0,1,2.07,2.07V58.79A2.07,2.07,0,0,1,86.72,60.86ZM68.29,21.79a.8.8,0,0,0-.8.8V58.79a.8.8,0,0,0,.8.8H86.72a.8.8,0,0,0,.8-.8V22.59a.8.8,0,0,0-.8-.8Z" /><path fill="#37cfee" d="M85.13,24.68a.35.35,0,0,1-.25-.1l-1.13-1.13a.35.35,0,0,1,.5-.5l1.13,1.13a.35.35,0,0,1-.25.6Z" /><path fill="#37cfee" d="M84,24.68a.35.35,0,0,1-.25-.6l1.13-1.13a.35.35,0,0,1,.5.5l-1.13,1.13A.35.35,0,0,1,84,24.68Z" /><path fill="#37cfee" d="M83.29,57.73H77.93a.54.54,0,0,1,0-1.08h5.36a.54.54,0,1,1,0,1.08Z" /><path fill="#37cfee" d="M83.29,59.43h-3a.54.54,0,1,1,0-1.08h3a.54.54,0,1,1,0,1.08Z" /><path fill="#37cfee" d="M85,36.72H76.39a1.22,1.22,0,0,1-1.22-1.22v-5a1.08,1.08,0,0,1,1.08-1.08H85a1.22,1.22,0,0,1,1.22,1.22V35.5A1.22,1.22,0,0,1,85,36.72Zm-8.72-6.21v5a.14.14,0,0,0,.14.14H85a.14.14,0,0,0,.14-.14V30.65a.14.14,0,0,0-.14-.14Z" /><path fill="#37cfee" d="M82.87,32.34H77.51a.54.54,0,1,1,0-1.08h5.36a.54.54,0,1,1,0,1.08Z" /><path fill="#37cfee" d="M79.91,34.32h-2.4a.54.54,0,1,1,0-1.08h2.4a.54.54,0,1,1,0,1.08Z" /><path fill="#37cfee" d="M78.48,45H69.9a1.22,1.22,0,0,1-1.22-1.22v-5a1.08,1.08,0,0,1,1.08-1.08h8.72A1.22,1.22,0,0,1,79.71,39v4.85A1.22,1.22,0,0,1,78.48,45Zm-8.72-6.21v5a.14.14,0,0,0,.14.14h8.58a.14.14,0,0,0,.14-.14V39a.14.14,0,0,0-.14-.14Z" /><path fill="#37cfee" d="M74.69,40.66H71a.54.54,0,1,1,0-1.08h3.67a.54.54,0,0,1,0,1.08Z" /><path fill="#37cfee" d="M76.38,42.64H71a.54.54,0,1,1,0-1.08h5.36a.54.54,0,1,1,0,1.08Z" /><path fill="#37cfee" d="M78.48,53.36H69.9a1.22,1.22,0,0,1-1.22-1.22v-5a1.08,1.08,0,0,1,1.08-1.08h8.72a1.22,1.22,0,0,1,1.22,1.22v4.85A1.22,1.22,0,0,1,78.48,53.36Zm-8.72-6.21v5a.14.14,0,0,0,.14.14h8.58a.14.14,0,0,0,.14-.14V47.29a.14.14,0,0,0-.14-.14Z" /><path fill="#37cfee" d="M76.38,49H71a.54.54,0,1,1,0-1.08h5.36a.54.54,0,1,1,0,1.08Z" /><path fill="#37cfee" d="M75.39,51H71a.54.54,0,1,1,0-1.08h4.37a.54.54,0,0,1,0,1.08Z" /><path fill="#37cfee" d="M88.09,27.12H66.93a.54.54,0,0,1,0-1.08H88.09a.54.54,0,1,1,0,1.08Z" /></svg>
                                <h4>Solution web fonctionnelle et ergonomique</h4>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Votre devis gratuit" />
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-1/2 px-10 mt-16 lg:-mt-64 mb-32">
                    <h3 className="century text-3xl text-center">
                        D'après France Numérique, <span className="text-bleu">97%</span> des internautes utilisent la recherche locale sur un moteur de recherche ou un annuaire.
            </h3>
                    <br />
                    <p className="text-center century"><b>Source :</b> <a className="text-bleu hover:text-black" href="https://www.francenum.gouv.fr/comprendre-le-numerique/comment-ameliorer-votre-referencement-local" target="_blank" rel="noreferrer">francenum.gouv.fr, 2020</a></p>
                </section>
                <section className="text-center text-black text-2xl century mx-12 mt-8 lg:mx-0">
                    <h2 className="century leading-none">Répondre à vos<br /><span className="text-6xl text-bleu font-bold">BESOINS</span></h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Notre rôle : mettre en place un projet adapté à l'image de votre entreprise.</h3>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Site internet</span><br /><span className="font-bold text-6xl">VITRINE</span></h3>
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">La <strong className="font-normal">création d’un site internet vitrine</strong> permet à chaque professionnel de <strong className="font-normal">développer une plateforme web</strong> qui parle de lui, apporte de la <strong className="font-normal">visibilité</strong> et  permet de rester <strong className="font-normal">en contact avec ses clients</strong>. Pour un <strong className="font-normal">psychologue</strong>, la <strong className="font-normal">création d’un site vitrine</strong> est idéale en vue de présenter ses domaines de compétences ainsi que son <strong className="font-normal">expertise</strong> parmi les nombreuses spécialisations existantes (<strong className="font-normal">criminologie</strong>, <strong className="font-normal">traumatologie</strong>, <strong className="font-normal">victimologie</strong>, <strong className="font-normal">risques psycho-sociaux</strong>, etc.).
                <br /><br />
                En somme, le <strong className="font-normal">site internet vitrine</strong> est une <strong className="font-normal">carte de visite en ligne</strong>, accessible 24h sur 24 et 7 jours sur 7. Il permet de <strong className="font-normal">générer des contacts pertinents</strong> dans le cadre de son activité. De plus, le <strong className="font-normal">site vitrine</strong> est façonnable. Il peut être adapté en fonction de vos besoins.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Référencement</span><br /><span className="font-bold text-6xl">LOCAL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Le <strong className="font-normal">référencement local</strong> est une branche du <strong className="font-normal">référencement naturel</strong> qui permet de <strong className="font-normal">propulser la visibilité de son site internet</strong> auprès de personnes présentes dans votre zone géographique. <strong className="font-normal">Obtenir de la visibilité en ligne</strong> est essentiel pour qu’un <strong className="font-normal">site web</strong> puisse générer du trafic.
                <br /><br />
                Le <strong className="font-normal">référencement SEO local</strong> permet d’<strong className="font-normal">être visible en ligne</strong> auprès d’un public pertinent pour vous, tout en contribuant au <strong className="font-normal">développement de votre stratégie de visibilité</strong> de manière sereine. Ceci est important en vue d’<strong className="font-normal">obtenir des premiers résultats</strong> à court ou moyen terme et notamment de <strong className="font-normal">nouveaux clients</strong>.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')', backgroundPosition: 'left' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Design</span><br /><span className="font-bold text-6xl">EFFICACE</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg"><strong className="font-normal">Créer un site internet</strong> performant passe par la <strong className="font-normal">définition d’un webdesign</strong> soigné. En effet, <strong className="font-normal">votre site internet</strong> devra être <strong className="font-normal">responsive design</strong> (adapté en fonction des supports de lecture : smartphone, tablette, etc.), <strong className="font-normal">intuitif</strong> et adapté à votre public. Lorsqu’un utilisateur est à la recherche d’un <strong className="font-normal">psychologue</strong>, il est nécessaire que son expérience et sa <strong className="font-normal">navigation sur votre site web</strong> soient parfaitement fluides et le guident vers le contenu qu'il recherche.
                <br /><br />
                En effet, la <strong className="font-normal">navigation entre les pages internes de votre site web</strong> doit être facilitée par la <strong className="font-normal">création d’un design</strong> intuitif et clair. Ceci est important pour répondre aux <strong className="font-normal">besoins des utilisateurs</strong> et proposer une <strong className="font-normal">expérience utilisateur</strong> de qualité.</p>
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
                            <svg width="50px" className="mx-auto block" fill="#37cfee" viewBox="0 0 100 125"><path d="M80.07,56.68c4.52-16.62,3.44-31-3-39.34C73,11.92,66.78,9.17,58.75,9.17a52.52,52.52,0,0,0-18.36,3A26.4,26.4,0,0,0,24,32C21.9,42.69,22.88,44,23.3,44.62A7.06,7.06,0,0,1,24,49.94a7.9,7.9,0,0,1-4.2,5.32c-1.78.94-2.64,2.07-2.55,3.35.16,2.47,4,4.12,5.17,4.56,1.51,1.31,2.87,3,2.83,3.49a2.59,2.59,0,0,1-.63,1c-.56.69-1.61,2-.3,3.61a10.31,10.31,0,0,0,1.91,1.67C27.64,74,28.58,74.79,28.58,76c0,.49,0,1.06-.06,1.66-.14,3-.32,6.74,2.36,7.62,1.62.53,11-1.55,19.13-5.5.68,4.6.77,8.1.27,10a1,1,0,0,0,.18.87,1,1,0,0,0,.79.39H79.69a1,1,0,0,0,.79-1.61C78.38,86.66,75,69.1,78,62.32A41.24,41.24,0,0,0,80.07,56.68ZM78,89H52.46a40.71,40.71,0,0,0-.57-10.18C56.79,76.19,61,72.87,62.26,69c3.55-10.47,2.8-11.52,2.56-11.87a1,1,0,0,0-1.39-.25,1,1,0,0,0-.37,1.15c0,.27,0,2.24-2.69,10.33-1.19,3.49-5.13,6.53-9.74,8.94a1,1,0,0,0-.53.28C42.35,81.54,33,83.75,31.51,83.38c-1.24-.41-1.09-3.55-1-5.63,0-.63.06-1.23.06-1.75,0-2.31-1.77-3.62-3.19-4.67A8.87,8.87,0,0,1,25.85,70c-.29-.37-.3-.38.29-1.08a4.42,4.42,0,0,0,1-1.87c.4-1.9-2.41-4.51-3.63-5.54a1.11,1.11,0,0,0-.3-.17c-1.65-.6-4-1.94-4-2.88,0-.4.53-.94,1.5-1.45a9.88,9.88,0,0,0,5.21-6.63,9.07,9.07,0,0,0-1-6.95c-.09-.13-.83-1.55,1-11.09A24.43,24.43,0,0,1,41.09,14a50.43,50.43,0,0,1,17.66-2.87c7.37,0,13,2.48,16.76,7.39,5.94,7.76,6.92,21.82,2.63,37.6a40,40,0,0,1-2,5.37C73.19,68.31,75.75,83.48,78,89Z" /><path d="M70.64,22.71C69.14,20.5,64,22.3,58.92,25c-.66-5.72-2.06-11-4.74-11s-4.08,5.25-4.74,11c-5.09-2.67-10.22-4.47-11.73-2.26-1.65,2.43,2.82,7.18,7.73,11.21-4.91,4-9.38,8.77-7.73,11.21a2.65,2.65,0,0,0,2.36,1,14.88,14.88,0,0,0,5.1-1.28,44.66,44.66,0,0,0,4.27-2c.66,5.71,2.06,11,4.74,11s4.08-5.25,4.74-11a45.71,45.71,0,0,0,4.26,2,15,15,0,0,0,5.11,1.28,2.62,2.62,0,0,0,2.35-1c1.66-2.44-2.81-7.18-7.73-11.21C67.83,29.89,72.3,25.14,70.64,22.71ZM39.37,44c-.37-.8,2.12-4.3,7.67-8.82.66.51,1.31,1,2,1.47,0,1.3.12,2.68.24,4.06C43.63,43.72,39.93,44.59,39.37,44ZM49,34.14l-.29-.22L49,33.7c0,.07,0,.15,0,.22S49,34.07,49,34.14Zm0-3c-.64.46-1.29,1-2,1.46-5.55-4.51-8-8-7.68-8.8a1,1,0,0,1,.68-.18c1.4,0,4.68,1,9.19,3.45C49.11,28.5,49,29.87,49,31.18Zm8.32-1.46-.19-.13-1.07-.71,1.16-.69C57.25,28.68,57.28,29.19,57.31,29.72ZM54.18,16c.8.14,2.17,3.68,2.84,10-1,.55-1.93,1.12-2.84,1.68-.91-.56-1.86-1.13-2.84-1.68C52,19.68,53.37,16.14,54.18,16Zm-3,12.19c.39.22.77.45,1.17.69l-1.08.71-.18.13Q51.1,28.93,51.14,28.19Zm-.09,9.93.18.13,1.08.71c-.39.24-.79.47-1.17.69C51.11,39.16,51.08,38.64,51.05,38.12Zm3.13,13.72c-.8-.14-2.17-3.68-2.84-10,.93-.52,1.88-1.08,2.84-1.68,1,.6,1.91,1.16,2.84,1.68C56.35,48.16,55,51.7,54.18,51.84Zm3-12.18L56.05,39l1.07-.71.19-.13C57.28,38.64,57.25,39.16,57.21,39.66Zm.18-4-1.39,1L54.18,37.8l-1.82-1.21-1.4-1c0-.56,0-1.12,0-1.7s0-1.14,0-1.7c.46-.32.92-.65,1.4-1s1.22-.82,1.82-1.21c.59.39,1.2.78,1.82,1.21s.94.65,1.39,1c0,.56,0,1.12,0,1.7S57.4,35.06,57.39,35.62ZM69,44c-.56.59-4.26-.28-9.86-3.28.12-1.38.19-2.76.24-4.06.63-.46,1.29-1,1.94-1.47C66.87,39.71,69.35,43.21,69,44ZM59.41,33.7l.29.22-.29.22V33.7Zm1.9-1.06c-.65-.51-1.31-1-1.94-1.46,0-1.31-.12-2.68-.24-4.07,4.52-2.42,7.8-3.45,9.19-3.45a1,1,0,0,1,.67.17C69.35,24.62,66.87,28.13,61.31,32.64Z" /></svg>
                            <h4 className="font-bold century -mt-3"><span className="font-bold">Présentation de vos domaines de compétences</span></h4>
                            <p>Nous présentons et mettons en avant vos domaines de compétences en tant que psychologue au sein de pages web dédiées.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="65px" className="mx-auto block" viewBox="0 0 476.323 372.94625" fill="#37cfee"><g><path d="M375.575,233.099l11.083-6.017l-3.338-1.113l-33.877,4.034l11.797,58.329c1.199,5.93,6.412,10.024,12.236,10.025   c0.822,0,1.655-0.082,2.492-0.251c6.767-1.368,11.143-7.964,9.775-14.729L375.575,233.099z" /><path d="M385.658,236.189c-2.577,0-2.577,9.332,0,9.332h42.667c2.577,0,4.667-2.088,4.667-4.666c0-2.578-2.09-4.666-4.667-4.666   H385.658z" /><path d="M346.992,245.521c2.577,0,2.577-9.332,0-9.332h-12.667c-2.577,0-4.667,2.088-4.667,4.666c0,2.578,2.09,4.666,4.667,4.666   H346.992z" /><path d="M473.046,134.419l-49-8.999c-2.172-0.398-4.258,1.039-4.656,3.214c-0.399,2.172,1.038,4.257,3.213,4.655l43.537,7.996   c-7.008,13.327-24.943,51.87-24.984,98.235c0,2.209,1.793,4.001,4.002,4.001c2.209,0,4-1.792,4-4.001   c-0.006-27.435,6.654-52.294,13.332-70.252c3.338-8.979,6.675-16.229,9.167-21.218c1.245-2.492,2.28-4.419,2.999-5.715   c0.357-0.645,0.637-1.135,0.823-1.456c0.186-0.322,0.271-0.457,0.271-0.459c0.676-1.122,0.76-2.514,0.221-3.708   C475.433,135.518,474.335,134.656,473.046,134.419z" /><polygon points="387.492,263.855 404.572,263.855 406.491,297.355 412.825,297.355 414.744,263.855 429.234,263.855    438.54,297.598 444.733,296.266 439.677,263.855 447.492,263.855 447.492,248.855 384.825,248.855  " /><polygon points="347.825,248.855 333.159,248.855 333.159,263.855 336.579,263.855 332.785,296.529 339.025,297.617    346.931,263.855 350.492,263.855  " /><path d="M410.783,198.97l1.527,6.772l-2.56,0.577l-20.973-6.989c-1.731-0.578-3.617-0.77-5.431-0.555l-13.217,1.574   c0.568,2.277,0.329,4.66-0.714,6.793c-1.171,2.404-3.205,4.203-5.73,5.074c-1.05,0.363-2.146,0.549-3.256,0.549   c-4.266,0-8.065-2.711-9.456-6.748c-0.377-1.095-0.727-2.181-1.061-3.261l-22.566,2.687c-6.855,0.814-11.752,7.033-10.934,13.889   c0.816,6.854,7.034,11.75,13.889,10.936l53.225-6.338l15.506,5.17l8.84,2.947v0.002c1.31,0.438,2.643,0.645,3.954,0.645   c5.233,0,10.111-3.314,11.856-8.551c0.897-2.688,0.816-5.459-0.027-7.949c0.049-0.284,0.084-0.571,0.101-0.865l1.219-21.985   C420.832,195.355,416.118,197.222,410.783,198.97z" /><path d="M348.661,169.723c-0.466,2.82-0.724,5.842-0.724,9.055c0,7.738,1.475,16.559,4.929,26.588   c1.142,3.316,4.244,5.398,7.563,5.398c0.864,0,1.742-0.141,2.605-0.438c4.178-1.439,6.397-5.994,4.96-10.172   c-2.974-8.629-4.054-15.676-4.054-21.377c0-2.359,0.185-4.495,0.505-6.435c0-0.005,0.002-0.01,0.003-0.015   c0.321-1.906,0.768-3.626,1.304-5.191c1.743-5.105,4.443-8.514,6.965-10.92c0.051-0.048,0.1-0.086,0.15-0.133l-2.34,42.205   l11.881-1.414l-5.285-23.432l26.552-5.987l2.685,11.902c5.811-2.008,10.7-4.181,14.335-6.407c2.911-1.774,4.639-3.329,5.661-4.49   l0.52-9.368c1.047,1.077,1.897,2.244,2.418,3.295c0.535,1.079,0.74,1.98,0.742,2.778c-0.008,0.695-0.129,1.387-0.622,2.391v-0.002   c-0.155,0.315-0.362,0.667-0.626,1.049c-1.1,1.592-3.217,3.719-7.049,6.055c-4.721,2.893-11.94,6.023-22.19,8.937   c-4.252,1.209-6.715,5.637-5.504,9.887c1.002,3.518,4.207,5.809,7.691,5.811c0.726,0,1.463-0.1,2.195-0.309   c11.22-3.203,19.689-6.734,26.15-10.674c2.802-1.715,5.225-3.531,7.311-5.456c2.699-2.489,4.817-5.165,6.302-8.085v-0.001   c0.002-0.002,0.003-0.004,0.004-0.006c1.566-3.093,2.344-6.424,2.336-9.597c0-4.196-1.283-7.972-3.046-11.089   c-2.679-4.692-6.368-8.144-10.028-10.682c-1.846-1.263-3.693-2.288-5.569-3.07c-1.913-0.76-3.728-1.381-6.315-1.424   c-0.174,0-0.344,0.015-0.515,0.026c-0.103-0.01-0.204-0.027-0.308-0.033l-13.419-0.743c-4.388,4.106-10.274,6.61-16.718,6.61   c-0.455,0-0.913-0.014-1.376-0.039c-6.378-0.354-12.056-3.133-16.192-7.389c-0.023,0.009-0.048,0.015-0.072,0.024   c-0.634,0.262-5.396,2.206-10.727,7.207c-4.307,4.019-8.951,10.212-11.592,18.76c-0.617,2-1.127,4.127-1.495,6.388   C348.662,169.716,348.662,169.72,348.661,169.723z" /><ellipse transform="matrix(0.0553 -0.9985 0.9985 0.0553 248.4325 503.106)" cx="390.098" cy="120.261" rx="22.499" ry="22.5" /><path d="M280.415,223.264c0-0.002-126.913-0.002-158.001-0.002c-0.269,0.11-3.415-0.579-7.546-3.115   c-7.337-4.305-17.507-13.137-27.845-23.77c-15.604-15.97-32.029-36.002-44.439-51.945c-6.208-7.977-11.43-14.938-15.086-19.892   c-1.827-2.479-3.266-4.455-4.242-5.804c-0.977-1.352-1.471-2.05-1.473-2.052c-3.842-5.401-11.33-6.667-16.734-2.828   c-5.401,3.838-6.668,11.331-2.828,16.732c0.117,0.159,20.068,28.247,44.186,56.633c12.084,14.207,25.164,28.475,37.684,39.58   c6.279,5.558,12.403,10.34,18.531,13.985c6.158,3.569,12.291,6.365,19.793,6.478c31.088-0.002,158.001-0.002,158.001-0.002   c6.626,0,11.999-5.373,11.999-11.999C292.414,228.637,287.04,223.264,280.415,223.264z" /><polygon points="120.081,296.334 128.748,296.334 131.748,253 117.081,253  " /><polygon points="261.248,296.334 269.915,296.334 272.915,253 258.248,253  " /><ellipse transform="matrix(0.6745 -0.7382 0.7382 0.6745 -73.694 94.0321)" cx="69.798" cy="130.595" rx="22.495" ry="22.494" /><path d="M130.916,217.236c10.221,3.383,16.681,0.749,21.153-3.736h100.512c6.903,0,12.498-5.597,12.498-12.501   c0-6.903-5.595-12.5-12.498-12.5h-82.248c0.073,0.249,0.141,0.502,0.195,0.76c1.146,5.391-2.309,10.71-7.703,11.855   c-5.514,1.172-11.01,1.765-16.342,1.765h-0.051c-19.849-0.002-34.42-8.149-43.145-14.986c-8.618-6.735-13.357-13.389-14.602-15.267   c-1.492-2.317-1.978-4.992-1.412-7.602c0.564-2.611,2.113-4.845,4.359-6.289c1.62-1.042,3.488-1.594,5.41-1.594   c3.404,0,6.543,1.704,8.393,4.561c0.131,0.188,0.264,0.377,0.447,0.63c0.547,0.741,1.174,1.525,1.858,2.324   c1.588,1.854,4.234,4.654,7.847,7.465c7.686,5.967,16.223,9.467,25.436,10.459c-12.424-7.175-23.8-17.6-32.461-24.967   c-7.273-7.375-19.498-9.934-25.531-3.531c-6.035,6.402-8.051,19.463,2.252,31.021C99.545,200.912,110.28,208.615,130.916,217.236z" /><path d="M106.225,165.958c-0.892-1.039-1.545-1.89-1.956-2.447c-0.203-0.279-0.348-0.484-0.431-0.606   c-0.038-0.052-0.062-0.088-0.073-0.108c-0.004-0.008-0.004-0.008-0.004-0.008l-0.002,0.001c-2.396-3.699-7.334-4.761-11.042-2.372   c-3.716,2.391-4.788,7.341-2.396,11.056H90.32c0.333,0.498,4.941,7.607,14.2,14.846c9.204,7.209,23.356,14.561,41.913,14.562   c0.018,0,0.033,0,0.05,0c5.021,0,10.343-0.534,15.927-1.721c4.32-0.919,7.082-5.167,6.164-9.487   c-0.917-4.321-5.164-7.082-9.488-6.164c-4.525,0.96-8.715,1.371-12.603,1.374c-14.285-0.014-24.837-5.526-32.122-11.181   C110.743,170.882,108.007,168.041,106.225,165.958z" /><path d="M170.748,31.668c-34.794,0-63,22.609-63,50.5c0,13.074,6.199,24.988,16.369,33.957   c-0.156,3.947-2.301,14.816-20.702,18.875c9.985,3.804,23.733-0.092,34.949-9.513c9.464,4.557,20.54,7.181,32.384,7.181   c34.794,0,63-22.609,63-50.5C233.748,54.277,205.541,31.668,170.748,31.668z M170.239,126c-31.016,0-56.158-18.914-56.158-42.25   c0-23.334,25.143-42.25,56.158-42.25c31.017,0,56.158,18.916,56.158,42.25C226.397,107.086,201.255,126,170.239,126z" /><path d="M359.914,110.834c-14.688-3.239-19.014-10.814-20.242-15.749c19.875-8.493,33.409-25.27,33.409-44.585   c0-27.891-28.206-50.5-63-50.5c-34.794,0-63,22.609-63,50.5s28.206,50.5,63,50.5c4.353,0,8.603-0.354,12.708-1.028   C334.232,109.109,350.206,114.532,359.914,110.834z M255.598,52.75c0-23.334,25.143-42.25,56.158-42.25   c31.016,0,56.158,18.916,56.158,42.25S342.772,95,311.756,95C280.741,95,255.598,76.084,255.598,52.75z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Promotion de votre expertise</span></h4>
                            <p>Nous développons un volet destiné à démontrer votre expertise dans votre secteur d'activité.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#37cfee" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#37cfee" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#37cfee" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Optimisation SEO de vos contenus</span></h4>
                            <p>Nous optimisons chacune des pages web de votre site pour une <strong className="font-normal">visibilité maximale</strong> en termes de <strong className="font-normal">référencement naturel</strong>.</p>
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
                            <a href="https://ledil.immo/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Ledil.immo</h4></a>
                        </div>
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation2 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="https://cabinet-cdh-experts.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">CDH Experts</h4></a>
                        </div>
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation3 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
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
                        <RoundButton className="items-center" color="darkgrey" text="Contactez-nous" url="/contact-agence-web-toulouse/" />
                    </div>
                </section>
                <section className="max-w-4xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet pour Psychologue :<br /><span className="font-bold">Nos clients sont satisfaits</span>
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
                        <div className="text-lg century my-2">Art Froid Climatisation</div>
                        <div className="italic">« Bonjour je voulais faire partager ma satisfaction envers LINKWEB. Je suis très satisfaite de leurs services proposés. J'ai toujours la même interlocutrice qui se prénomme Marine et cela chaque mois pour faire le point sur mon référencement. <a className="text-bleu hover:text-black font-bold" target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=linkweb+toulouse&rlz=1C5CHFA_enFR832FR832&oq=linkweb+toulouse&aqs=chrome..69i57j69i60l3.2474j0j1&sourceid=chrome&ie=UTF-8#lrd=0x12aebb43d4c8a751:0xb4abc0044173017,1,,,">[...]</a> »</div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
                        <img
                            src={stars}
                            alt="Création site internet Toulouse"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Auto École Anne</div>
                        <div className="italic">« Entreprise très sérieuse. Équipe à l écoute et réactive des changements que je demande tous les mois. Le référencement est bien suivi et j ai un retour d’ Anthony tous les mois. Je recommande ! »</div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500"*/>
                        <img
                            src={stars}
                            alt="Création site internet Agen"
                            className="w-32 mx-auto h-auto mt-3"
                        />
                        <div className="text-lg century my-2">Cerem </div>
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
                <section className="max-w-4xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet pour Psychologue :<br /><span className="font-bold">Une solution en accord avec vos besoins</span>
                    </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="PROMOUVOIR VOS EXPERTISES">
                                <p>La <strong><Link to="/creation-de-site-internet-a-agen/" className="text-bleu hover:text-black font-bold">création d’un site internet à Agen</Link></strong> est un moyen pertinent de <strong>faire connaître son activité</strong> professionnelle. Au-delà de présenter votre activité, le <strong>site internet</strong> vous permet de mettre en avant vos <strong>domaines d'expertise</strong> pour faciliter la mise en relation entre les utilisateurs et un <strong>psychologue</strong> comme vous. Ceci est important en vue de <strong>proposer un contenu pertinent</strong> vis-à-vis des <strong>requêtes des utilisateurs sur les moteurs de recherche</strong>.
                            <br /><br />
                            Par ailleurs, le <strong>site web</strong> est un parfait moyen de <strong>communication</strong> pour exposer et démontrer votre <strong>expertise</strong> dans votre <strong>domaine de compétences</strong>. En effet, ceci est important pour montrer votre crédibilité à l’ensemble des <strong>acteurs présents sur le Web</strong>. De ce point de vue, le <strong>site web</strong> est un outil particulièrement complet.</p>
                            </div>
                            <div label="UNE STRATÉGIE DE SEO LOCAL POUR GÉNÉRER DES CONTACTS QUALIFIÉS">
                                <p>Il est important d’adapter le <strong>contenu de son site internet à son activité</strong>, mais également à sa <strong>cible</strong>. En effet, le <strong>site internet</strong> est un <strong>outil de communication</strong> qui vous permet de vous adresser directement à des utilisateurs qui pourraient nécessiter de faire appel à vos services. Il est donc important de vous adresser à des utilisateurs <strong>présents dans votre secteur géographique</strong> et à la recherche d’un <strong>professionnel</strong> comme vous. À ce niveau, une <Link to="/" className="text-bleu hover:text-black font-bold">agence web comme Linkweb à Agen</Link> vous accompagne pour définir votre stratégie.
                            <br /><br />
                            Ceci est important pour <strong>générer des contacts qualifiés</strong>. Pour cela, les <strong>moteurs de recherche</strong> (comme <strong>Google</strong>) constituent une porte d’entrée à <strong>votre site</strong>. Ainsi, le travail de <strong>référencement naturel</strong> doit vous <strong>rendre visible</strong> pour des <strong>requêtes stratégiques</strong> et des secteurs adéquats. Nous mettons en place <strong>votre stratégie de référencement local</strong> pour vous permettre d’<strong>obtenir de la visibilité dans les premières pages de résultats de recherche</strong> dans des délais raisonnables.</p>
                            </div>
                            <div label="UN SITE WEB ACCESSIBLE EN LIGNE 24H/24 ET 7J/7">
                                <p>De nos jours, <strong>avoir un site internet</strong> est indispensable pour les professionnels ayant pour ambition développer leur activité au-delà des barrières géographiques. Ceci est également le cas des psychologues souhaitant favoriser la <strong>prise de rendez-vous en ligne</strong>, par exemple. En effet, <strong>créer votre site web</strong> peut vous permettre d’augmenter votre <strong>notoriété</strong> en boostant votre <strong>visibilité</strong>, mais également de soigner <strong>votre image</strong>.
                            <br /><br />
                            Les <strong>sites web</strong> sont des <strong>cartes de visite en ligne</strong> qui présentent l’avantage d’être accessibles à tout moment de la journée. Ceci est important en vue de <strong>déployer sa visibilité</strong> et ouvrir ses frontières à de nouveaux horizons grâce au <strong>Web</strong>.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>

                <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselPsychologue />
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
query lastsThreePostsSiteInternetPsychologue {
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
export default SiteInternetPsychologue;




