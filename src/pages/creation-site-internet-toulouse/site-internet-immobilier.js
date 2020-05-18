import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';
import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";

import CarouselImmobilier from "../../components/carousel-slides/immobilier-slides";

import Accordion from "../../components/accordion";
import SEO from "../../components/seo";
import SimpleMap from "../../components/simpleMap";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";

import stars from '../../images/stars.png';
import arriereplan from "../../images/creation-site-immobilier.jpg";
import siteinternet from "../../images/site-immobilier.jpg";
import referencement from "../../images/referencement-site-immobilier.jpg";
import webdesign from "../../images/design-site-immobilier.jpg";
import realisation1 from "../../images/ledilimmo.jpg";
import realisation2 from "../../images/bien-trouve.jpg";
import realisation3 from "../../images/cdh-experts.jpg";
import map from "../../images/map.jpg";


class CreationSiteImmobilier extends React.Component {

    constructor(props) {
        super(props);

        this.metiers = ['mandataire', 'promoteur', 'prospecteur', 'agent', 'notaire', 'directeur', 'architecte', 'négociateur', 'expert', 'conseiller'];
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
                    title="Création de site internet immobilier à Toulouse - Linkweb"
                    description="Vous souhaitez créer un site web pour développer votre visibilité et promouvoir votre entreprise immobilière ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-immobilier/"
                    nom="Créer un site internet internet immobilier"
                    slug="creation-site-internet-toulouse/site-internet-immobilier/"
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

<section className="flex items-center justify-start w-full mx-auto pb-0 my-24 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{background:'#000000ad url('+ arriereplan +')', backgroundBlendMode:'overlay', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
            <div className="max-w-6xl mx-auto lg:mx-56 py-2 w-full flex-col items-end">
                <div className="mt-12 -mb-24 w-full flex flex-col items-center lg:items-start">
                    <div className="w-1/2  text-3xl text-center font-bold text-white century">4,4/5</div>
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
                   <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Création de site internet <span className="text-bleu">Immobilier</span></h1>
                </div>
                <br/>
                <h2 className="flex full lg:w-1/2 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Linkweb, partenaire des métiers de l'immobilier à Toulouse et Agen.</h2>
                {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                <div className="w-full lg:w-2/3 lg:mx-0 flex flex-col lg:flex-row justify-center pb-24 lg:justify-start">
                    <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30"/>
                    <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis"/>
                </div>
            </div>
        </section>
        <section className="w-full flex justify-end -mt-0 lg:-mt-32">
        <div className="w-11/12 lg:w-1/3 bg-white shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                <svg width="70px" className="mx-auto block pt-4" viewBox="0 0 64 80"><g><path fill="#37cfee" d="M47.131,15.395l3.451,6.065c0.278,0.489,0.982,0.489,1.261,0l3.451-6.065c2.477-1.427,4.151-4.091,4.151-7.152   c0-4.852-4.207-8.733-9.167-8.192c-3.62,0.396-6.632,3.253-7.202,6.85C42.505,10.508,44.286,13.775,47.131,15.395z M51.202,4.518   c2.051,0,3.715,1.674,3.715,3.725c0,2.05-1.664,3.715-3.715,3.715c-2.051,0-3.715-1.664-3.715-3.715   C47.487,6.192,49.152,4.518,51.202,4.518z"/><path fill="#37cfee" d="M1.909,33.581h47.5c1.226,0,2.097-1.196,1.701-2.364l-3.758-11.086c-0.247-0.722-0.93-1.216-1.691-1.216H38.64v9.316   H12.689v-9.316H5.667c-0.771,0-1.444,0.494-1.701,1.216L0.218,31.217C-0.177,32.385,0.683,33.581,1.909,33.581z"/><path fill="#37cfee" d="M12.894,15.275L25.47,2.699c0.105-0.105,0.28-0.105,0.393,0l12.576,12.576c0.482,0.499,1.323,0.529,1.853,0   c0.507-0.507,0.507-1.337,0-1.853L27.716,0.845c-1.128-1.127-2.972-1.127-4.099,0L11.041,13.422c-0.528,0.547-0.498,1.355,0,1.853   C11.548,15.79,12.378,15.79,12.894,15.275z"/><path fill="#37cfee" d="M14.672,16.411v9.837h21.99v-9.837l-11-11.001L14.672,16.411z M24.938,22.595h-3.619V17.81   c0-2.138,1.563-3.917,3.619-4.268V22.595z M26.396,13.54c0.906,0.153,1.725,0.575,2.353,1.203c0.772,0.782,1.266,1.873,1.266,3.066   v4.785h-3.619V13.54z"/><path fill="#37cfee" d="M49.204,61.297h-1.288V35.559H2.592v25.738H1.425c-0.723,0-1.308,0.575-1.308,1.298c0,0.713,0.584,1.298,1.308,1.298   h47.779c0.713,0,1.298-0.584,1.298-1.298C50.501,61.871,49.917,61.297,49.204,61.297z M15.854,59.631H6.459v-7.153h9.395V59.631z    M15.854,51.118H6.459v-7.647h9.395V51.118z M30.857,61.297H19.651V43.145h11.205V61.297z M44.04,59.631h-9.395v-7.153h9.395   V59.631z M44.04,51.118h-9.395v-7.647h9.395V51.118z"/><path fill="#37cfee" d="M60.389,53.138c-1.487,0-2.775,0.808-3.464,2.017c-0.769-0.629-1.747-1.018-2.835-1.018c-0.05,0-0.1,0-0.14,0.01   c-0.519-2.116-2.037-3.843-4.033-4.642v9.874c1.477,0.329,2.586,1.647,2.586,3.214c0,0.509-0.11,0.979-0.319,1.408h11.7v-8.775   C63.204,53.987,61.906,53.138,60.389,53.138z"/></g></svg>            
                <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span>&nbsp;?</span></h2>
            <br/>
            <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br/> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour répondre à vos objectifs.</p>
            <br/>
            <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                <div className="w-full md:w-1/3 flex flex-col font-bold">
                    <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M18,44c0.234375,0,0.4697266-0.081543,0.6591797-0.2480469L21,41.7005615V58c0,0.5522461,0.4472656,1,1,1h22   c0.5527344,0,1-0.4477539,1-1V41.4221191l2.2939453,2.286377c0.3916016,0.3901367,1.0244141,0.3886719,1.4140625-0.0024414   c0.390625-0.3911133,0.3886719-1.0244141-0.0019531-1.4145508l-3.9706421-3.9568481   c-0.0227661-0.0252075-0.0454712-0.0476685-0.0706787-0.0704346l-1.4401245-1.4351196l-9.1669922-8.5600586   c-0.3847656-0.3583984-0.9804688-0.3583984-1.3652344,0l-9.1435547,8.5390625l-6.2080078,5.4399414   c-0.4150391,0.3637695-0.4570313,0.9956055-0.0927734,1.4111328C17.4453125,43.8847656,17.7226563,44,18,44z M23,39.947876   l1.890625-1.6568604L33.375,30.3681641l8.4609375,7.9003906L43,39.428772V57H23V39.947876z"/><path fill="#37cfee" d="M52.3720703,69.3608398L54,67.8309326V80c0,0.5522461,0.4472656,1,1,1h16c0.5527344,0,1-0.4477539,1-1V68.3724365   l0.9863281,0.9713135c0.1943359,0.1918945,0.4482422,0.2875977,0.7011719,0.2875977   c0.2587891,0,0.5166016-0.0996094,0.7128906-0.2983398c0.3867188-0.3935547,0.3818359-1.0268555-0.0117188-1.4140625   L63.7070313,57.2929688c-0.3837891-0.3828125-0.9990234-0.3911133-1.3925781-0.0214844L51.0029297,67.9018555   c-0.4023438,0.3779297-0.4228516,1.0107422-0.0449219,1.4135742C51.3369141,69.71875,51.96875,69.7387695,52.3720703,69.3608398z    M56,67.1601563l7.0273438-6.4799805L70,66.5981445V79H56V67.1601563z"/><path fill="#37cfee" d="M89,10H11c-0.5527344,0-1,0.4477539-1,1v14v64c0,0.5522461,0.4472656,1,1,1h78c0.5527344,0,1-0.4477539,1-1V25V11   C90,10.4477539,89.5527344,10,89,10z M88,88H12V26h76V88z M88,24H12V12h76V24z"/><path fill="#37cfee" d="M23.5,22c2.4814453,0,4.5-2.0185547,4.5-4.5S25.9814453,13,23.5,13S19,15.0185547,19,17.5S21.0185547,22,23.5,22z M23.5,15   c1.3789063,0,2.5,1.121582,2.5,2.5S24.8789063,20,23.5,20S21,18.878418,21,17.5S22.1210938,15,23.5,15z"/><path fill="#37cfee" d="M33.5,22c2.4814453,0,4.5-2.0185547,4.5-4.5S35.9814453,13,33.5,13S29,15.0185547,29,17.5S31.0185547,22,33.5,22z M33.5,15   c1.3789063,0,2.5,1.121582,2.5,2.5S34.8789063,20,33.5,20S31,18.878418,31,17.5S32.1210938,15,33.5,15z"/><path fill="#37cfee" d="M43.5,22c2.4814453,0,4.5-2.0185547,4.5-4.5S45.9814453,13,43.5,13S39,15.0185547,39,17.5S41.0185547,22,43.5,22z M43.5,15   c1.3789063,0,2.5,1.121582,2.5,2.5S44.8789063,20,43.5,20S41,18.878418,41,17.5S42.1210938,15,43.5,15z"/><path fill="#37cfee" d="M55,36h20c0.5527344,0,1-0.4477539,1-1s-0.4472656-1-1-1H55c-0.5527344,0-1,0.4477539-1,1S54.4472656,36,55,36z"/><path fill="#37cfee" d="M55,41h20c0.5527344,0,1-0.4477539,1-1s-0.4472656-1-1-1H55c-0.5527344,0-1,0.4477539-1,1S54.4472656,41,55,41z"/><path fill="#37cfee" d="M55,46h20c0.5527344,0,1-0.4477539,1-1s-0.4472656-1-1-1H55c-0.5527344,0-1,0.4477539-1,1S54.4472656,46,55,46z"/><path fill="#37cfee"  d="M45,67H25c-0.5527344,0-1,0.4477539-1,1s0.4472656,1,1,1h20c0.5527344,0,1-0.4477539,1-1S45.5527344,67,45,67z"/><path fill="#37cfee" d="M45,72H25c-0.5527344,0-1,0.4477539-1,1s0.4472656,1,1,1h20c0.5527344,0,1-0.4477539,1-1S45.5527344,72,45,72z"/><path fill="#37cfee" d="M45,77H25c-0.5527344,0-1,0.4477539-1,1s0.4472656,1,1,1h20c0.5527344,0,1-0.4477539,1-1S45.5527344,77,45,77z"/></g></svg>                    
                    <h4>Mise en place d'un catalogue de biens</h4>
                </div>
                <div className="w-full md:w-1/3 flex flex-col font-bold">
                    <svg width="60px" className="mx-auto block" viewBox="0 0 64 80"><g><g><g><g><path fill="#37cfee" d="M43.6,14.1h1.2c0.2,0,0.3-0.1,0.3-0.3V13c0-0.2-0.1-0.3-0.3-0.3h-1.2c-0.2,0-0.3,0.1-0.3,0.3v0.8      C43.4,13.9,43.5,14.1,43.6,14.1z"/><path fill="#37cfee" d="M45.3,13v0.8c0,0.2,0.1,0.3,0.3,0.3h1.2c0.2,0,0.3-0.1,0.3-0.3V13c0-0.2-0.1-0.3-0.3-0.3h-1.2      C45.4,12.7,45.3,12.8,45.3,13z"/><path fill="#37cfee" d="M43.6,15.6h1.2c0.2,0,0.3-0.1,0.3-0.3v-0.8c0-0.2-0.1-0.3-0.3-0.3h-1.2c-0.2,0-0.3,0.1-0.3,0.3v0.8      C43.4,15.5,43.5,15.6,43.6,15.6z"/><path fill="#37cfee" d="M45.6,15.6h1.2c0.2,0,0.3-0.1,0.3-0.3v-0.8c0-0.2-0.1-0.3-0.3-0.3h-1.2c-0.2,0-0.3,0.1-0.3,0.3v0.8      C45.3,15.5,45.4,15.6,45.6,15.6z"/></g><g><path fill="#37cfee" d="M55,16.6c0,0.1-0.1,0.2-0.2,0.2c-0.4,0.3-1,0.3-1.3,0l-7.4-6.6c-0.5-0.5-1.3-0.5-1.9,0l-7.4,6.6      c-0.2,0.2-0.4,0.2-0.7,0.2c-0.3,0-0.5-0.1-0.7-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.2,0.1-0.3,0.2-0.5l8.1-7.2      c0.8-0.8,2.3-0.8,3.1,0l8.1,7.2c0.1,0.1,0.2,0.3,0.2,0.5C55.1,16.4,55,16.5,55,16.6z"/><polygon fill="#37cfee" points="43.3,14.1 43.3,14.1 43.3,14.1     "/><polygon fill="#37cfee" points="43.3,14.1 43.3,14.1 43.3,14.1     "/><path fill="#37cfee" d="M47.4,20.3v5.1H43v-5.1c0-1.1,0.9-2,2-2h0.5C46.5,18.4,47.4,19.2,47.4,20.3z"/></g></g><path fill="#37cfee" d="M33.2,37.2v-8c0-0.2-0.2-0.4-0.4-0.4h-4.5c-0.2,0-0.4-0.2-0.4-0.4V5.1c0-0.2,0.2-0.4,0.4-0.4h33.8c0.2,0,0.4,0.2,0.4,0.4    v23.3c0,0.2-0.2,0.4-0.4,0.4H41.2c-0.1,0-0.2,0.1-0.3,0.2L34,37.5C33.7,37.8,33.2,37.6,33.2,37.2z M30.3,26.8h4.5    c0.2,0,0.4,0.2,0.4,0.4v4.4c0,0.4,0.5,0.6,0.8,0.3l4-5c0.1-0.1,0.2-0.2,0.3-0.2h19.8c0.2,0,0.4-0.2,0.4-0.4V7.1    c0-0.2-0.2-0.4-0.4-0.4H30.3c-0.2,0-0.4,0.2-0.4,0.4v19.3C29.8,26.6,30,26.8,30.3,26.8z"/></g><g><path fill="#37cfee" d="M51.4,30.6v15.1H11.9V20.5H26v-3.7H11.4c-1.8,0-3.2,1.4-3.2,3.2v31.7h46.9V30.6H51.4z"/><path fill="#37cfee" d="M60,54H3.2c-0.9,0-1.7,0.8-1.7,1.7c0,0.9,0.8,1.7,1.7,1.7H5c0.1,1.1,1,1.9,2.1,1.9h49c1.1,0,2-0.8,2.1-1.9H60    c0.9,0,1.7-0.8,1.7-1.7C61.7,54.8,61,54,60,54z M35.8,57.8h-8.3c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8    c0-0.6,0.5-1.2,1.2-1.2h8.3c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8C36.9,57.3,36.4,57.8,35.8,57.8z"/></g></g></svg>
                    <h4>Optimisation de vos fiches de biens pour le SEO</h4>
                </div>
                <div className="w-full md:w-1/3 flex flex-col font-bold">
                    <svg width="65px" className="mx-auto block" viewBox="0 0 66 77.5"><path fill="#37cfee" d="M418,779 L482,779 C482.552285,779 483,779.447715 483,780 L483,802 C483,802.552285 482.552285,803 482,803 L418,803 C417.447715,803 417,802.552285 417,802 L417,780 C417,779.447715 417.447715,779 418,779 Z M419,781 L419,801 L481,801 L481,781 L419,781 Z M473.171603,792.75739 L475.207107,794.792893 C475.597631,795.183418 475.597631,795.816582 475.207107,796.207107 C474.816582,796.597631 474.183418,796.597631 473.792893,796.207107 L471.75739,794.171603 C470.966957,794.695123 470.019082,795 469,795 C466.238576,795 464,792.761424 464,790 C464,787.238576 466.238576,785 469,785 C471.761424,785 474,787.238576 474,790 C474,791.019082 473.695123,791.966957 473.171603,792.75739 Z M469,793 C470.656854,793 472,791.656854 472,790 C472,788.343146 470.656854,787 469,787 C467.343146,787 466,788.343146 466,790 C466,791.656854 467.343146,793 469,793 Z M428,823 C425.238576,823 423,820.761424 423,818 C423,815.238576 425.238576,813 428,813 C430.761424,813 433,815.238576 433,818 C433,820.761424 430.761424,823 428,823 Z M428,821 C429.656854,821 431,819.656854 431,818 C431,816.343146 429.656854,815 428,815 C426.343146,815 425,816.343146 425,818 C425,819.656854 426.343146,821 428,821 Z M442,819 C441.447715,819 441,818.552285 441,818 C441,817.447715 441.447715,817 442,817 L472,817 C472.552285,817 473,817.447715 473,818 C473,818.552285 472.552285,819 472,819 L442,819 Z M428,841 C425.238576,841 423,838.761424 423,836 C423,833.238576 425.238576,831 428,831 C430.761424,831 433,833.238576 433,836 C433,838.761424 430.761424,841 428,841 Z M428,839 C429.656854,839 431,837.656854 431,836 C431,834.343146 429.656854,833 428,833 C426.343146,833 425,834.343146 425,836 C425,837.656854 426.343146,839 428,839 Z M442,837 C441.447715,837 441,836.552285 441,836 C441,835.447715 441.447715,835 442,835 L462,835 C462.552285,835 463,835.447715 463,836 C463,836.552285 462.552285,837 462,837 L442,837 Z" transform="translate(-417 -779)"/></svg>                    
                    <h4>Module de recherche avancée adapté</h4>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Votre devis gratuit"/>
            </div>
        </div>
        </section>
        <section className="w-full lg:w-1/2 px-10 mt-16 lg:-mt-64 mb-32">
            <h3 className="century text-3xl text-center">
                En 2016, <span className="text-bleu">90 %</span>  des projets immobiliers concrétisés<br/> ont trouvé leur <span className="text-bleu">point de départ sur le Web</span>.
            </h3>
            <br/>
            <p className="text-center century"><b>Source :</b> <a className="text-bleu hover:text-black" href="https://immo2.pro/tendances-immobilier/les-statistiques-les-plus-percutantes-pour-faire-valoir-votre-offre-de-services-aupres-de-vos-acheteurs-vendeurs/" target="_blank" rel="noreferrer">Médiamétrie/Realtor, 2016</a></p>
        </section>
        <section className="text-center text-black text-2xl century mx-12 mt-8 lg:mx-0">
            <h2 className="century leading-none">Répondre à vos<br/><span className="text-6xl text-bleu font-bold">BESOINS</span></h2>
            <hr className="blue"></hr>
            <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Notre rôle : mettre en place un projet adapté à l'image de votre entreprise.</h3>
        </section>
        <section className="w-full my-10 flex flex-col lg:flex-row">
            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{backgroundImage:'url('+ siteinternet +')'}}>
                <h3 className="text-3xl titre text-center century leading-none"><span>Site internet</span><br/><span className="font-bold text-5xl md:text-6xl">CATALOGUE</span></h3>
                <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">La <strong className="font-normal">création d’un site internet catalogue</strong> correspond parfaitement aux besoins d’une <strong className="font-normal">agence immobilière</strong> par exemple. En effet, le <strong className="font-normal">site catalogue</strong> va permettre de lister les <strong className="font-normal">biens immobiliers</strong> proposés, mais également de les filtrer selon des <strong className="font-normal">critères pertinents pour l’utilisateur</strong> : lieu, prix, surface, type de bien, etc. <br/><br/>Par ailleurs, le catalogue offre la possibilité de <strong className="font-normal">créer des fiches de biens sur-mesure</strong> permettant de faire figurer toutes les informations utiles pour l’utilisateur. Les <strong className="font-normal">fiches de biens</strong> sont conçues pour répondre aux interrogations des utilisateurs et mettre vos biens en valeur.</p>
            </div>
            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{backgroundImage:'url('+ referencement +')'}}>
                <h3 className="text-3xl titre text-center century leading-none"><span>Référencement</span><br/><span className="font-bold text-6xl">NATUREL</span></h3>
                <p className="text century text-lg lg:text-sm xl:text-lg"><strong className="font-normal">Acquérir de la visibilité sur les moteurs de recherche</strong> pour un <strong className="font-normal">site web issu du secteur l’immobilier</strong> demande une <strong className="font-normal">stratégie de référencement naturel</strong> adaptée. En effet, le <strong className="font-normal">travail de référencement naturel d’un site immobilier</strong> passe aussi bien par l’<strong className="font-normal">optimisation des fiches de biens</strong> que par la <strong className="font-normal">création de contenus optimisés</strong>. <br/><br/>C’est pourquoi, <strong className="font-normal">référencer un site internet</strong> du domaine de l’<strong className="font-normal">immobilier</strong> demande beaucoup de rigueur pour <strong className="font-normal">améliorer son positionnement dans les résultats de Google</strong>. Néanmoins, cette visibilité est nécessaire afin de <strong className="font-normal">générer du trafic</strong> et de l'efficacité sur son <strong className="font-normal">site web</strong>.</p>
            </div>
            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{backgroundImage:'url('+ webdesign +')', backgroundPosition:'left'}}>
                <h3 className="text-3xl titre text-center century leading-none"><span>Design</span><br/><span className="font-bold text-6xl">INTUITIF</span></h3>
                <p className="text century text-lg lg:text-sm xl:text-lg">De la recherche de biens à la phase de contact, chaque étape de l’<strong className="font-normal">expérience utilisateur</strong> doit être orientée pour faciliter la <strong className="font-normal">navigation entre les pages web</strong>. C’est pourquoi, la <strong className="font-normal">création d’un site internet</strong> destiné au secteur de l’<strong className="font-normal">immobilier</strong> doit donner lieu à une plateforme <strong className="font-normal">ergonomique et intutive</strong>. <br/><br/>De plus, une grande partie des utilisateurs effectuent leur recherche depuis un smartphone. À ce titre, le <strong className="font-normal">site web</strong> doit présenter une accessibilité sans faille pour que l’expérience passée soit adaptée quelque soit le <strong className="font-normal">support de navigation</strong> utilisé.</p>
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
                    <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M83,17h-4v-6c0-0.5522461-0.4472656-1-1-1H21c-2.7568359,0-5,2.2431641-5,5v70c0,2.7568359,2.2431641,5,5,5h62   c0.1087646,0,0.2131348-0.0214844,0.3129883-0.0546875c0.0092773-0.0029907,0.0187988-0.0016479,0.027832-0.0048828   c0.0297852-0.0108032,0.0529785-0.031311,0.0812988-0.0446777c0.0522461-0.0246582,0.1032715-0.0494385,0.1503906-0.0826416   c0.0356445-0.0251465,0.0661621-0.0542603,0.0979004-0.0835571c0.0395508-0.036377,0.0771484-0.0732422,0.1107178-0.1159668   c0.0281982-0.0358887,0.0511475-0.0736694,0.0740967-0.1130371c0.015625-0.0264282,0.0368652-0.0481567,0.0500488-0.0762329   c0.0096436-0.0205078,0.0112305-0.0427246,0.0194092-0.0635986c0.0164795-0.0420532,0.0285645-0.0844116,0.0391846-0.1287842   c0.0131836-0.0546875,0.0217285-0.1085815,0.0256348-0.1640015C83.9910889,89.0447388,84,89.0234985,84,89V18   C84,17.4477539,83.5527344,17,83,17z M18,15c0-1.6542969,1.3457031-3,3-3h56v6v64H19   c-0.1928711,0-0.380249,0.0219116-0.5629883,0.0568848c-0.0599365,0.0114136-0.1162109,0.0308228-0.1748047,0.0457764   C18.1745605,82.125061,18.0843506,82.1414795,18,82.1713867V15z M21,88c-1.6542969,0-3-1.3457031-3-3c0-0.5512695,0.4482422-1,1-1   h58.53125l0.416748,0.5l2.916748,3.5H21z M82,86.2376099l-3-3.6000366V19h3V86.2376099z"/><path fill="#37cfee" d="M28,29h38c0.5527344,0,1-0.4477539,1-1v-6c0-0.5522461-0.4472656-1-1-1H28c-0.5527344,0-1,0.4477539-1,1v6   C27,28.5522461,27.4472656,29,28,29z M29,23h36v4H29V23z"/><path fill="#37cfee" d="M24,78.5400391h2.9003906h3.4794922h18.3300781h18.0800781c0.5527344,0,1-0.4477539,1-1V58.6601563H71   c0.4277344,0,0.8076172-0.2714844,0.9462891-0.6757813s0.0048828-0.8520508-0.3330078-1.1142578L58.1455078,46.4018555   l-2.828125-2.2060547c-0.3623047-0.2763672-0.8652344-0.2734375-1.2236328,0.0068359l-4.3837891,3.411377V36.5698242   c0-0.5522461-0.4472656-1-1-1h-0.8125V33c0-0.5522461-0.4472656-1-1-1h-3.0126953c-0.5527344,0-1,0.4477539-1,1v2.5698242   h-2.2177734V33c0-0.5522461-0.4472656-1-1-1s-1,0.4477539-1,1v2.5698242h-2.8212891V34.078125   c0-1.1459961-0.9316406-2.078125-2.0771484-2.078125h-6.2802734c-1.1455078,0-2.078125,0.9321289-2.078125,2.078125v1.4916992H24   c-0.5527344,0-1,0.4477539-1,1v40.9702148C23,78.0922852,23.4472656,78.5400391,24,78.5400391z M62.6884766,76.5161133h-4.2294922   v-9.4199219h4.2294922V76.5161133z M49.7099609,50.1509399l5.0019531-3.8931274l13.3701172,10.4023438h-1.2919922h-1.7304688   l-8.8798828-6.3460693l-0.8779297-0.6275635c-0.0427246-0.0305176-0.0936279-0.0454102-0.140625-0.0682373   c-0.0480957-0.0233765-0.0924072-0.0543213-0.1437988-0.0696411c-0.0515137-0.0153809-0.105957-0.0150146-0.1594238-0.0222778   c-0.0518799-0.0070801-0.1025391-0.0220337-0.1550293-0.0214233c-0.0922852,0.0010376-0.1831055,0.0194702-0.2717285,0.0441895   c-0.0136719,0.0038452-0.0285645,0.0025024-0.0422363,0.006897c-0.1010742,0.0328979-0.1970215,0.081543-0.2824707,0.1461182   l-4.3964844,3.1432495V50.1509399z M49.7099609,62.1052246c1.3024902,0.3554077,2.3295898,1.3832397,2.6826172,2.685791h-2.6826172   V62.1052246z M49.7099609,66.7910156h2.6826172c-0.3530273,1.3025513-1.380127,2.3303833-2.6826172,2.685791V66.7910156z    M49.7099609,71.5183716c2.730957-0.4782715,4.8154297-2.8612061,4.8154297-5.727356s-2.0844727-5.2490845-4.8154297-5.727356   v-4.7575684l5.015625-3.5702515l9.4345703,6.7387695c0.0002441,0.0001221,0.0004883,0.0001831,0.0007324,0.0003052   l0.0021973,0.0016479c0.0668945,0.0476685,0.142334,0.0794067,0.2182617,0.1088867   c0.019043,0.0073242,0.0351563,0.0210571,0.0545654,0.0272217c0.0977783,0.031189,0.2003174,0.0474854,0.3043213,0.0474854   h1.0498047v17.8798828h-1.1015625V66.0961914c0-0.5522461-0.4472656-1-1-1h-6.2294922c-0.5527344,0-1,0.4477539-1,1v10.4438477   h-6.7490234V71.5183716z M29.3798828,76.5400391h-1.4794922v-4.2402344h1.4794922V76.5400391z M44.8847656,34h1.0126953v1.5698242   h-1.0126953V34z M27.4101563,34.078125c0-0.0429688,0.0351563-0.078125,0.078125-0.078125h6.2802734   c0.0429688,0,0.0771484,0.0351563,0.0771484,0.078125v1.4916992h-6.4355469V34.078125z M25,37.5698242h1.4052734   c0.001709,0,0.0031738,0.0009766,0.0048828,0.0009766h8.4355469c0.001709,0,0.0031738-0.0009766,0.0048828-0.0009766h4.8115234   c0.001709,0,0.0031738,0.0009766,0.0048828,0.0009766s0.0031738-0.0009766,0.0048828-0.0009766h4.2080078   c0.001709,0,0.0031738,0.0009766,0.0048828,0.0009766h3.0126953c0.001709,0,0.0031738-0.0009766,0.0048828-0.0009766h0.8076172   v11.9512329c-0.0102539,0.0575562-0.0400391,0.1094971-0.0400391,0.1688843v5.1298828   c0,0.0915527,0.0144043,0.1801147,0.0400391,0.2645264v5.8621826c-0.0002441,0.0085449-0.0048828,0.015564-0.0048828,0.0241699   v4.8203125v4.8203125c0,0.008606,0.0046387,0.015625,0.0048828,0.0241699v5.904541H31.3798828v-5.2402344   c0-0.5522461-0.4472656-1-1-1h-3.4794922c-0.5527344,0-1,0.4477539-1,1v5.2402344H25V37.5698242z"/><path fill="#37cfee" d="M27.6152344,46.0068359h3.0126953c0.5527344,0,1-0.4477539,1-1v-3.0131836c0-0.5522461-0.4472656-1-1-1h-3.0126953   c-0.5527344,0-1,0.4477539-1,1v3.0131836C26.6152344,45.559082,27.0625,46.0068359,27.6152344,46.0068359z M28.6152344,42.9936523   h1.0126953v1.0131836h-1.0126953V42.9936523z"/><path fill="#37cfee" d="M34.8457031,46.0068359h3.0136719c0.5527344,0,1-0.4477539,1-1v-3.0131836c0-0.5522461-0.4472656-1-1-1h-3.0136719   c-0.5527344,0-1,0.4477539-1,1v3.0131836C33.8457031,45.559082,34.2929688,46.0068359,34.8457031,46.0068359z    M35.8457031,42.9936523h1.0136719v1.0131836h-1.0136719V42.9936523z"/><path fill="#37cfee" d="M42.0771484,46.0068359h3.0126953c0.5527344,0,1-0.4477539,1-1v-3.0131836c0-0.5522461-0.4472656-1-1-1h-3.0126953   c-0.5527344,0-1,0.4477539-1,1v3.0131836C41.0771484,45.559082,41.5244141,46.0068359,42.0771484,46.0068359z    M43.0771484,42.9936523h1.0126953v1.0131836h-1.0126953V42.9936523z"/><path fill="#37cfee" d="M27.6152344,53.2373047h3.0126953c0.5527344,0,1-0.4477539,1-1v-3.0126953c0-0.5522461-0.4472656-1-1-1h-3.0126953   c-0.5527344,0-1,0.4477539-1,1v3.0126953C26.6152344,52.7895508,27.0625,53.2373047,27.6152344,53.2373047z M28.6152344,50.2246094   h1.0126953v1.0126953h-1.0126953V50.2246094z"/><path fill="#37cfee" d="M34.8457031,53.2373047h3.0136719c0.5527344,0,1-0.4477539,1-1v-3.0126953c0-0.5522461-0.4472656-1-1-1h-3.0136719   c-0.5527344,0-1,0.4477539-1,1v3.0126953C33.8457031,52.7895508,34.2929688,53.2373047,34.8457031,53.2373047z    M35.8457031,50.2246094h1.0136719v1.0126953h-1.0136719V50.2246094z"/><path fill="#37cfee" d="M42.0771484,53.2373047h3.0126953c0.5527344,0,1-0.4477539,1-1v-3.0126953c0-0.5522461-0.4472656-1-1-1h-3.0126953   c-0.5527344,0-1,0.4477539-1,1v3.0126953C41.0771484,52.7895508,41.5244141,53.2373047,42.0771484,53.2373047z    M43.0771484,50.2246094h1.0126953v1.0126953h-1.0126953V50.2246094z"/><path fill="#37cfee" d="M27.6152344,60.4682617h3.0126953c0.5527344,0,1-0.4477539,1-1v-3.0126953c0-0.5522461-0.4472656-1-1-1h-3.0126953   c-0.5527344,0-1,0.4477539-1,1v3.0126953C26.6152344,60.0205078,27.0625,60.4682617,27.6152344,60.4682617z M28.6152344,57.4555664   h1.0126953v1.0126953h-1.0126953V57.4555664z"/><path fill="#37cfee" d="M34.8457031,60.4682617h3.0136719c0.5527344,0,1-0.4477539,1-1v-3.0126953c0-0.5522461-0.4472656-1-1-1h-3.0136719   c-0.5527344,0-1,0.4477539-1,1v3.0126953C33.8457031,60.0205078,34.2929688,60.4682617,34.8457031,60.4682617z    M35.8457031,57.4555664h1.0136719v1.0126953h-1.0136719V57.4555664z"/><path fill="#37cfee" d="M42.0771484,60.4682617h3.0126953c0.5527344,0,1-0.4477539,1-1v-3.0126953c0-0.5522461-0.4472656-1-1-1h-3.0126953   c-0.5527344,0-1,0.4477539-1,1v3.0126953C41.0771484,60.0205078,41.5244141,60.4682617,42.0771484,60.4682617z    M43.0771484,57.4555664h1.0126953v1.0126953h-1.0126953V57.4555664z"/><path fill="#37cfee" d="M27.6152344,68.9042969h3.0126953c0.5527344,0,1-0.4477539,1-1V62.480957c0-0.5522461-0.4472656-1-1-1h-3.0126953   c-0.5527344,0-1,0.4477539-1,1v5.4233398C26.6152344,68.456543,27.0625,68.9042969,27.6152344,68.9042969z M28.6152344,63.480957   h1.0126953v3.4233398h-1.0126953V63.480957z"/><path fill="#37cfee" d="M34.8457031,68.9042969h3.0136719c0.5527344,0,1-0.4477539,1-1V62.480957c0-0.5522461-0.4472656-1-1-1h-3.0136719   c-0.5527344,0-1,0.4477539-1,1v5.4233398C33.8457031,68.456543,34.2929688,68.9042969,34.8457031,68.9042969z    M35.8457031,63.480957h1.0136719v3.4233398h-1.0136719V63.480957z"/><path fill="#37cfee" d="M42.0771484,68.9042969h3.0126953c0.5527344,0,1-0.4477539,1-1V62.480957c0-0.5522461-0.4472656-1-1-1h-3.0126953   c-0.5527344,0-1,0.4477539-1,1v5.4233398C41.0771484,68.456543,41.5244141,68.9042969,42.0771484,68.9042969z    M43.0771484,63.480957h1.0126953v3.4233398h-1.0126953V63.480957z"/></g></svg>
                    <h4 className="font-bold century"><span className="font-bold">Catalogue de biens</span></h4>
                    <p>Nous créons un catalogue de biens immobiliers pour mettre en avant toutes les spécificités de chaque bien.</p>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
            <div className="w-full -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                    <svg width="80px" className="mx-auto block" viewBox="0 0 128 160"><path fill="#37cfee" d="M100,88H28c-1.9,0-3.5-1.6-3.5-3.5v-52c0-1.9,1.6-3.5,3.5-3.5h72c1.9,0,3.5,1.6,3.5,3.5v52C103.5,86.4,101.9,88,100,88z   M28,30c-1.4,0-2.5,1.1-2.5,2.5v52c0,1.4,1.1,2.5,2.5,2.5h72c1.4,0,2.5-1.1,2.5-2.5v-52c0-1.4-1.1-2.5-2.5-2.5H28z"/><path fill="#37cfee" d="M70.5,97h-13V87h13V97z M58.5,96h11v-8h-11V96z"/><path fill="#37cfee" d="M78.5,99h-29v-3h29V99z M50.5,98h27v-1h-27V98z"/><path fill="#37cfee" d="M87.5,58h-8v-5h8V58z M80.5,57h6v-3h-6V57z"/><rect fill="#37cfee" x="32" y="36" width="2" height="1"/><path fill="#37cfee" d="M80.5,58H70.4l0.1-0.6c0.1-0.5,0.1-1,0.1-1.4c0-0.8-0.1-1.6-0.2-2.4L70.2,53h10.3V58z M71.5,57h8v-3h-8.1  c0.1,0.7,0.1,1.3,0.1,2C71.5,56.3,71.5,56.7,71.5,57z"/><path fill="#37cfee" d="M43.6,58H39v-5h4.8l-0.1,0.6c-0.2,0.8-0.2,1.6-0.2,2.4c0,0.5,0,0.9,0.1,1.4L43.6,58z M40,57h2.5c0-0.3,0-0.7,0-1  c0-0.7,0-1.3,0.1-2H40V57z"/><path fill="#37cfee" d="M83.6,85.2L65.2,66.8l3.5-3.5l18.4,18.4L83.6,85.2z M66.6,66.8l17,17l2.1-2.1l-17-17L66.6,66.8z"/><polygon fill="#37cfee" points="99.5,77 82.9,77 82.9,76 98.5,76 98.5,34 29.5,34 29.5,76 73.2,76 73.2,77 28.5,77 28.5,33 99.5,33 "/><path fill="#37cfee" d="M57,70.5c-8,0-14.5-6.5-14.5-14.5S49,41.5,57,41.5S71.5,48,71.5,56S65,70.5,57,70.5z M57,42.5c-7.4,0-13.5,6.1-13.5,13.5  S49.6,69.5,57,69.5S70.5,63.4,70.5,56S64.4,42.5,57,42.5z"/><path fill="#37cfee" d="M57,66.5c-5.8,0-10.5-4.7-10.5-10.5S51.2,45.5,57,45.5S67.5,50.2,67.5,56S62.8,66.5,57,66.5z M57,46.5  c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5s9.5-4.3,9.5-9.5S62.2,46.5,57,46.5z"/></svg>                    
                    <h4 className="-mt-6 font-bold century"><span className="font-bold">Module de recherche avancée</span></h4>
                    <p>Nous créons un module de recherche avancée pour filtrer par ville, type de bien, surface, budget, etc.</p>
                </div>
                <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                    <svg width="50px" className="mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#37cfee" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z"/></g></g><g><g><path fill="#37cfee" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z"/></g></g><g><g><path fill="#37cfee" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z"/></g></g></g></svg>                    
                    <h4 className="font-bold century"><span className="font-bold">Optimisation SEO des fiches</span></h4>
                    <p>Nous optimisons chaque fiche de description d'un bien pour une <strong className="font-normal">visibilité maximale</strong> grâce au <strong className="font-normal">référencement naturel</strong>.</p>
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
            <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Nous travaillons tous les jours avec des professionnels de l'immobilier <br/>pour leur proposer une solution Web fonctionnelle.</h3>
        </section>
        <section className="w-full flex justify-center">
            <div className="w-full lg:w-2/3 flex flex-col mb-16 lg:flex-row justify-center text-white text-center text-2xl century">
                    <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{background:'#00000085 url(' + realisation1 + ')', backgroundBlendMode:'overlay', backgroundPosition:'center', backgroundSize:'cover'}}>
                    <a href="https://ledil.immo/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Ledil.immo</h4></a>
                </div>
                
                    <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{background:'#00000085 url(' + realisation2 + ')', backgroundBlendMode:'overlay', backgroundPosition:'center', backgroundSize:'cover'}}>
                    <a href="http://bien-trouve.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Bien Trouvé !</h4></a>
                </div>
                    <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{background:'#00000085 url(' + realisation3 + ')', backgroundBlendMode:'overlay', backgroundPosition:'center', backgroundSize:'cover'}}>
                    <a href="https://cabinet-cdh-experts.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">CDH Experts</h4></a>
                </div>
            </div>
        </section>
        <section className="w-full flex my-12 flex-col lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
        <div className="w-full lg:w-8/12 text-2xl">
          <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence</span> ?</h3>
          <h4>Linkweb soutient les professionnels de l'immobilier souhaitant développer leur projet.</h4>
        </div>
        <div className="w-full mx-auto block lg:w-3/12">
          <RoundButton className="items-center" color="darkgrey" text="Contactez-nous" url="/contact-agence-web-toulouse/"/>
        </div>
      </section>
      <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
           Création de site internet immobilier :<br/><span className="font-bold">Nos clients sont satisfaits</span>
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
                            <div className="text-lg century my-2">Château de Boisverdun</div>
                            <div className="italic">« Nous sommes chez Linkweb depuis 3 ans et je n’ai jamais eu aucun problème les techniciens sont à l’écoute et nous appellent chaque mois pour faire un point! Continuez comme ça ne changez rien!! »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
                            <img 
                                src={ stars }
                                alt="Création site internet Toulouse"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Auto École Anne</div>
                            <div className="italic">« Entreprise très sérieuse. Équipe à l écoute et réactive des changements que je demande tous les mois. Le référencement est bien suivi et j ai un retour d’ Anthony tous les mois. Je recommande ! »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500"*/>
                            <img 
                                src={ stars }
                                alt="Création site internet Agen"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Fanny Coiffure</div>
                            <div className="italic">« Ils sont de très bons conseils, le suivi est régulier, si vous voulez changer des choses avant qu’ils ne vous rappellent, c’est toujours possible avec un mail. Je recommande vivement toute l’équipe . »</div>
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
                    <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                            Création de site internet immobilier :<br/><span className="font-bold">Une solution en accord avec vos besoins</span>
                        </h2>
                        <hr className="blue"></hr>
                    </section>
                    <section  className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                          <div className="w-full" label="UN SITE WEB POUR PRÉSENTER SES BIENS IMMOBILIERS">
                            <p>Lorsqu’un <strong>utilisateur</strong> est à la recherche d’un <strong>bien immobilier à vendre ou à louer</strong>, il va consulter une <strong>multitude de sites web</strong> pour effectuer un premier tri dans sa recherche. Il est donc indispensable de favoriser une <strong>navigation intuitive</strong> sur une <strong>plateforme ergonomique et parfaitement fonctionnelle</strong>. La mise en place d’un <strong>moteur de recherche avancée</strong> directement en page d’accueil est une option tout à fait pertinente pour donner à l’utilisateur ce qu’il vient chercher.
                            <br/><br/>
                                La configuration du moteur devra être suffisamment bien ficelée pour donner accès aux <strong>fiches de description des biens</strong> pertinentes par rapport à la <strong>requête de l’utilisateur</strong>. La <strong>construction de ces fiches</strong> va donc être essentielle. Elle va non seulement faciliter la configuration et le filtrage des biens, mais également apporter une somme d’informations pertinentes pour l’utilisateur. Ceci est indispensable pour que ce dernier possède l’ensemble des informations qui feront de lui un potentiel <strong>prospect</strong>.</p>
                          </div>
                          <div label="CRÉER DES FICHES DÉTAILLÉES EN ACCORD AVEC LES BESOINS DES UTILISATEURS">
                            <p>Répondre aux besoins et interrogations d’un utilisateur va passer par la <strong>création d’un contenu adapté</strong>. Pour une <strong>agence immobilière</strong>, il va être essentiel de rendre accessibles les biens mis à disposition que ce soit à la vente ou à la location pour <strong>maximiser leur visibilité</strong>. La <strong>création de fiches de biens immobiliers</strong> exhaustives va permettre d’apporter l’ensemble des informations nécessaires aux utilisateurs, mais également de gagner en crédibilité.
                            <br/><br/>
                                Une fiche de bien construite de manière correcte va comporter des informations telles que le <strong>type de bien</strong>, sa <strong>situation géographique</strong>, la <strong>surface habitable</strong> (et <strong>surface totale</strong>), le <strong>bilan énergétique</strong>, le nombre et la catégorisation des pièces, etc. Mieux une fiche sera remplie et plus elle sera susceptible de correspondre aux <strong>besoins d’un utilisateur</strong>.</p>
                          </div>
                          <div label="OPTIMISER LES FICHES DE BIEN POUR ACCROÎTRE SA VISIBILITÉ SUR LES MOTEURS DE RECHERCHE">
                            <p>Le <strong>référencement naturel</strong> représente une <strong>source d’acquisition de trafic</strong> non négligeable pour un <strong>site web</strong>. Mettre en place une <strong>stratégie pour développer la visibilité d’un site internet</strong> du <strong>secteur de l’immobilier</strong> va être adapté à son contenu. C’est pourquoi, l’<strong>optimisation des fiches de biens</strong>, en fonction des <strong>mots-clés</strong> et des secteurs visés, va représenter une part importante du <strong>travail de référencement</strong>.
                                <br/><br/>
                                Ce travail est indispensable pour rendre visibles les biens que vous publiez sur <strong>votre site internet</strong> et <strong>générer un trafic de qualité</strong> qui répondra à vos attentes. Il existe des solutions de visibilité pour tous, que vous soyez <strong>mandataire</strong>, <strong>promoteur</strong>, <strong>prospecteur</strong>, <strong>agent immobilier</strong>, <strong>notaire</strong>, <strong>directeur d’agence</strong>, <strong>architecte</strong>, <strong>négociateur</strong>, <strong>expert</strong>, <strong>conseiller</strong> et bien plus encore.</p>
                          </div>
                        </Accordion>
                    </div>
                  </section>
                  <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselImmobilier />
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
query lastsThreePostsCreationSiteImmobilier {
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
export default CreationSiteImmobilier;




