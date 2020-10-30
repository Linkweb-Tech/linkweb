import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';
import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";

import CarouselChauffage from "../../components/carousel-slides/chauffage-slides";

import Accordion from "../../components/accordion";
import SEO from "../../components/seo";
import SimpleMap from "../../components/simpleMap";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";

import stars from '../../images/stars.png';
import arriereplan from "../../images/creation-site-internet-chauffagiste-clim.jpg";
import siteinternet from "../../images/site-internet-climatisation.jpg";
import referencement from "../../images/referencement-site-photovoltaique.jpg";
import webdesign from "../../images/webdesign-site-ventilation.jpg";
import realisation1 from "../../images/climaf.jpg";
import realisation2 from "../../images/artfroid.jpg";
import realisation3 from "../../images/eurotech.jpg";
import map from "../../images/map.jpg";
import surmesure from "../../images/web.svg"


class SiteInternetchauffageclim extends React.Component {

    constructor(props) {
        super(props);

        this.metiers = ['chauffagiste', 'climatiseur', 'installateur', 'plombier', 'technicien froid', 'installateur', 'dépanneur', 'mécanicien', 'réparateur', 'opérateur'];
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
                    title="Création de site internet pour chauffagiste/climatiseur à Toulouse - Linkweb"
                    description="Vous souhaitez créer un site web pour votre entreprise de chauffage ou de froid à Toulouse (31) ou à Agen (47) ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-chauffage-climatisation/"
                    nom="Créer un site internet internet pour chauffagiste/climatiseur"
                    slug="creation-site-internet-toulouse/site-internet-chauffage-climatisation/"
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
                   <h1 className="text-3xl md:text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Création de site internet pour votre entreprise de <span className="text-bleu">chauffage/climatisation</span></h1>
                </div>
                <br/>
                <h2 className="flex full lg:w-1/2 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Linkweb, partenaire des métiers du secteur du HVAC (*) à Toulouse et Agen.</h2>
                {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                <br/>
                <p className="text-white century text-xs">(*) HVAC (Heating, ventilation and air-conditioning) : chauffage, ventilation et climatisation.</p>
                <div className="w-full lg:w-2/3 mx-auto lg:mx-0 flex flex-col lg:flex-row justify-center pb-24 lg:justify-start">
                    <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30"/>
                    <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis"/>
                </div>
            </div>
        </section>
        <section className="w-full flex justify-end -mt-0 lg:-mt-32">
        <div className="w-11/12 lg:w-1/3 bg-white shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                <svg width="80px" className="mx-auto block mt-6" viewBox="0 0 60000 75000"><g><path fill="#37cfee" d="M55661 21713l0 -5667c-8267,-903 -16960,-1355 -25658,-1355 -8700,0 -17396,452 -25665,1356l0 13305c0,1028 245,1890 741,2473 446,525 1114,831 2008,831l45826 0c894,0 1561,-306 2008,-831 496,-583 741,-1446 741,-2473l0 -7639zm-14358 17199c13,13 20,19 31,29 169,155 779,713 1175,1419 531,947 699,2135 -874,3017 -1682,943 -1182,2343 -796,3032 113,202 214,342 257,401l18 25c962,950 1200,1449 1052,1529 64,130 19,134 -164,-13 -267,-99 -759,-502 -1264,-1187l-2 -2c-54,-54 -414,-452 -723,-1002 -240,-428 -456,-956 -491,-1506 -37,-571 118,-1158 627,-1677 190,-194 430,-377 726,-543 1299,-729 1147,-1650 784,-2299 -144,-256 -318,-474 -458,-627 -4,-4 -6,-9 -6,-15 -86,-84 -155,-147 -195,-185l-44 -41c-122,-120 -116,-247 -10,-357l2 -2c15,-15 139,-19 291,38 13,-45 36,-66 67,-35zm87 4029c741,-416 985,-918 971,-1411 -141,463 -510,928 -1244,1340 -255,143 -457,297 -615,457 -358,365 -489,773 -488,1177 151,-548 550,-1099 1375,-1562zm-22471 -4029c12,12 20,19 31,29 169,155 779,713 1175,1419 531,947 699,2135 -874,3017 -1682,943 -1182,2343 -796,3032 113,202 214,342 257,401l18 25c963,951 1202,1451 1054,1530 64,130 19,134 -164,-13 -267,-100 -760,-502 -1265,-1188l-2 -2c-54,-54 -414,-452 -723,-1002 -240,-428 -456,-956 -491,-1506 -37,-571 118,-1158 627,-1677 190,-194 430,-376 726,-543 1299,-729 1147,-1650 784,-2299 -144,-256 -318,-474 -458,-627 -4,-4 -6,-9 -6,-15 -86,-84 -155,-147 -195,-185l-44 -41c-122,-120 -116,-247 -10,-357l2 -2c15,-15 139,-19 291,38 13,-45 36,-66 67,-35zm87 4029c741,-416 985,-918 971,-1411 -142,463 -510,928 -1244,1340 -255,143 -457,297 -615,457 -358,365 -489,773 -488,1177 151,-548 550,-1099 1375,-1562zm11082 -5074c15,15 27,25 43,41 223,204 1026,939 1547,1868 687,1225 904,2762 -1132,3904 -2303,1292 -1620,3207 -1091,4149 152,272 289,461 347,542l28 39c948,937 1185,1429 1042,1511 75,147 27,152 -180,-18 -268,-108 -747,-502 -1237,-1163l-7 -7c-71,-70 -542,-591 -949,-1316 -315,-562 -597,-1252 -643,-1970 -47,-739 152,-1499 811,-2169 248,-253 560,-491 948,-708 1789,-1004 1578,-2276 1075,-3173 -195,-347 -432,-642 -620,-850 -8,-9 -15,-20 -20,-31 -111,-109 -201,-191 -254,-240 -31,-29 -54,-50 -57,-52 -124,-122 -117,-251 -11,-360l1 -1c14,-14 133,-9 289,53 13,-53 37,-81 71,-47zm215 5377c1287,-722 1487,-1632 1258,-2472 -44,758 -486,1551 -1701,2232 -346,194 -622,403 -837,622 -543,553 -708,1179 -668,1789 10,154 33,307 66,459 44,-899 508,-1858 1883,-2630zm21024 -15649l873 0c221,0 400,179 400,400l0 1191c0,221 -179,400 -400,400l-873 0c-221,0 -400,-179 -400,-400l0 -1191c0,-221 179,-400 400,-400zm473 800l-73 0 0 391 73 0 0 -391zm-28 -5415c0,-83 67,-150 150,-150 83,0 150,67 150,150l0 661c0,83 -67,150 -150,150 -83,0 -150,-67 -150,-150l0 -661zm-3986 0c0,-83 67,-150 150,-150 83,0 150,67 150,150l0 661c0,83 -67,150 -150,150 -83,0 -150,-67 -150,-150l0 -661zm-3986 0c0,-83 67,-150 150,-150 83,0 150,67 150,150l0 661c0,83 -67,150 -150,150 -83,0 -150,-67 -150,-150l0 -661zm-3986 0c0,-83 67,-150 150,-150 83,0 150,67 150,150l0 661c0,83 -67,150 -150,150 -83,0 -150,-67 -150,-150l0 -661zm-3986 0c0,-83 67,-150 150,-150 83,0 150,67 150,150l0 661c0,83 -67,150 -150,150 -83,0 -150,-67 -150,-150l0 -661zm-3986 0c0,-83 67,-150 150,-150 83,0 150,67 150,150l0 661c0,83 -67,150 -150,150 -83,0 -150,-67 -150,-150l0 -661zm-3986 0c0,-83 67,-150 150,-150 83,0 150,67 150,150l0 661c0,83 -67,150 -150,150 -83,0 -150,-67 -150,-150l0 -661zm-3986 0c0,-83 67,-150 150,-150 83,0 150,67 150,150l0 661c0,83 -67,150 -150,150 -83,0 -150,-67 -150,-150l0 -661zm-3986 0c0,-83 67,-150 150,-150 83,0 150,67 150,150l0 661c0,83 -67,150 -150,150 -83,0 -150,-67 -150,-150l0 -661zm-3986 0c0,-83 67,-150 150,-150 83,0 150,67 150,150l0 661c0,83 -67,150 -150,150 -83,0 -150,-67 -150,-150l0 -661zm-3986 0c0,-83 67,-150 150,-150 83,0 150,67 150,150l0 661c0,83 -67,150 -150,150 -83,0 -150,-67 -150,-150l0 -661zm-3986 0c0,-83 67,-150 150,-150 83,0 150,67 150,150l0 661c0,83 -67,150 -150,150 -83,0 -150,-67 -150,-150l0 -661zm13554 4073l0 593 12059 0 0 -593 -12059 0zm0 1393l0 629 12059 0 0 -629 -12059 0zm0 1429l0 435 12059 0 0 -435 -12059 0zm-800 435l0 -435 -14881 0 0 435 14881 0zm0 -1235l0 -629 -14881 0 0 629 14881 0zm0 -1429l0 -593 -14881 0 0 593 14881 0zm13659 -593l0 593 14616 0 0 -593 -14616 0zm0 1393l0 629 14616 0 0 -629 -14616 0zm0 1429l0 435 14616 0 0 -435 -14616 0zm15116 -2822l0 3257 4421 0 0 -3257 -4421 0zm-43906 -500l48578 0c138,0 250,112 250,250l0 3757c0,138 -112,250 -250,250l-48578 0c-138,0 -250,-112 -250,-250l0 -3757c0,-138 112,-250 250,-250zm1669 -14529c-138,0 -249,-112 -249,-249 0,-138 112,-249 249,-249l45614 53c138,0 249,112 249,249 0,138 -112,249 -249,249l-45614 -53zm48437 3215l0 -1168c0,-1028 -245,-1890 -741,-2473 -446,-525 -1114,-831 -2008,-831l-45826 0c-894,0 -1561,306 -2008,831 -496,583 -741,1446 -741,2473l0 1169c8280,-902 16975,-1353 25665,-1353 8688,0 17380,451 25658,1352zm800 -1168l0 15278c0,1215 -308,2256 -931,2989 -599,705 -1470,1115 -2617,1115l-45826 0c-1147,0 -2018,-411 -2617,-1115 -623,-733 -931,-1774 -931,-2989l0 -15278c0,-1215 308,-2256 931,-2989 599,-705 1470,-1115 2617,-1115l45826 0c1147,0 2018,411 2617,1115 623,733 931,1774 931,2989z"/></g></svg>                
                <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span>&nbsp;?</span></h2>
            <br/>
            <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br/> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour répondre à vos objectifs.</p>
            <br/>
            <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                <div className="w-full md:w-1/3 flex flex-col font-bold">
                    <svg width="60px" className="mx-auto block" viewBox="0 0 200 250"><g><path fill="#37cfee" d="M189,170H21c-0.6,0-1-0.4-1-1V71c0-0.6,0.4-1,1-1h168c0.6,0,1,0.4,1,1v98C190,169.6,189.6,170,189,170z M22,168h166V72H22   V168z"/><path fill="#37cfee" d="M100,60c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.3-1,0.1-1.4c4.4-3.9,2.2-8-0.2-12.7c-2.5-4.8-5.4-10.2,0.2-15.3   c0.4-0.4,1-0.3,1.4,0.1c0.4,0.4,0.3,1-0.1,1.4c-4.4,4-2.3,8.1,0.2,12.9c2.5,4.8,5.3,10.2-0.2,15.1C100.5,59.9,100.3,60,100,60z"/><path fill="#37cfee" d="M80,60c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.3-1,0.1-1.4c4.4-3.9,2.2-8-0.2-12.7c-2.5-4.8-5.4-10.2,0.2-15.3   c0.4-0.4,1-0.3,1.4,0.1c0.4,0.4,0.3,1-0.1,1.4c-4.4,4-2.3,8.1,0.2,12.9c2.5,4.8,5.3,10.2-0.2,15.1C80.5,59.9,80.3,60,80,60z"/><path fill="#37cfee" d="M120,60c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.3-1,0.1-1.4c4.4-3.9,2.2-8-0.2-12.7c-2.5-4.8-5.4-10.2,0.2-15.3   c0.4-0.4,1-0.3,1.4,0.1s0.3,1-0.1,1.4c-4.4,4-2.3,8.1,0.2,12.9c2.5,4.8,5.3,10.2-0.2,15.1C120.5,59.9,120.3,60,120,60z"/><path fill="#37cfee" d="M10,82c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S5.6,82,10,82 M10,80C4.5,80,0,84.5,0,90s4.5,10,10,10s10-4.5,10-10   S15.5,80,10,80L10,80z"/><path fill="#37cfee" d="M199,160h-10c-0.6,0-1-0.4-1-1v-18c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1v18C200,159.6,199.6,160,199,160z M190,158h8v-16h-8   V158z"/><path fill="#37cfee" d="M179,82H31c-0.6,0-1-0.4-1-1s0.4-1,1-1h148c0.6,0,1,0.4,1,1S179.6,82,179,82z"/><path fill="#37cfee" d="M49,160h-8c-0.6,0-1-0.4-1-1V91c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v68C50,159.6,49.6,160,49,160z M42,158h6V92h-6V158z"/><path fill="#37cfee" d="M69,160h-8c-0.6,0-1-0.4-1-1V91c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v68C70,159.6,69.6,160,69,160z M62,158h6V92h-6V158z"/><path fill="#37cfee" d="M89,160h-8c-0.6,0-1-0.4-1-1V91c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v68C90,159.6,89.6,160,89,160z M82,158h6V92h-6V158z"/><path fill="#37cfee"  d="M109,160h-8c-0.6,0-1-0.4-1-1V91c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v68C110,159.6,109.6,160,109,160z M102,158h6V92h-6V158   z"/><path fill="#37cfee" d="M129,160h-8c-0.6,0-1-0.4-1-1V91c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v68C130,159.6,129.6,160,129,160z M122,158h6V92h-6V158   z"/><path fill="#37cfee" d="M149,160h-8c-0.6,0-1-0.4-1-1V91c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v68C150,159.6,149.6,160,149,160z M142,158h6V92h-6V158   z"/><path fill="#37cfee" d="M169,160h-8c-0.6,0-1-0.4-1-1V91c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v68C170,159.6,169.6,160,169,160z M162,158h6V92h-6V158   z"/><path fill="#37cfee" d="M45,91c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1s1,0.4,1,1v9C46,90.6,45.6,91,45,91z"/><path fill="#37cfee" d="M65,91c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1s1,0.4,1,1v9C66,90.6,65.6,91,65,91z"/><path fill="#37cfee" d="M85,91c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1s1,0.4,1,1v9C86,90.6,85.6,91,85,91z"/><path fill="#37cfee" d="M105,91c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1s1,0.4,1,1v9C106,90.6,105.6,91,105,91z"/><path fill="#37cfee" d="M125,91c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1s1,0.4,1,1v9C126,90.6,125.6,91,125,91z"/><path fill="#37cfee" d="M145,91c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1s1,0.4,1,1v9C146,90.6,145.6,91,145,91z"/><path fill="#37cfee" d="M165,91c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1s1,0.4,1,1v9C166,90.6,165.6,91,165,91z"/></g></svg>                   
                    <h4>Présentation de votre offre de services</h4>
                </div>
                <div className="w-full md:w-1/3 flex pl-4 flex-col font-bold">
                    <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M93.21,69.76H6.79a3,3,0,0,1-3-3V37.36a3,3,0,0,1,3-3H93.21a3,3,0,0,1,3,3V66.72A3,3,0,0,1,93.21,69.76ZM6.79,35.31a2.05,2.05,0,0,0-2,2V66.72a2,2,0,0,0,2,2H93.21a2,2,0,0,0,2-2V37.36a2.05,2.05,0,0,0-2-2Z"/><path fill="#37cfee" d="M14.73,43.7H9.93V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z"/><path fill="#37cfee" d="M17.91,50.86h-8v-4.8h8Zm-7-1h6v-2.8h-6Z"/><path fill="#37cfee" d="M17.91,58h-8v-4.8h8Zm-7-1h6v-2.8h-6Z"/><path fill="#37cfee" d="M17.91,65.17h-8v-4.8h8Zm-7-1h6v-2.8h-6Z"/><path fill="#37cfee" d="M24,43.7H19.21V38.91H24Zm-3.79-1H23V39.91H20.21Z"/><path fill="#37cfee" d="M24,50.86H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z"/><path fill="#37cfee" d="M24,58H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z"/><path fill="#37cfee" d="M30,58h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z"/><path fill="#37cfee" d="M24,65.17H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z"/><path fill="#37cfee" d="M30,65.17h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z"/><path fill="#37cfee" d="M60,65.17H31.22v-4.8H60Zm-27.82-1H59v-2.8H32.22Z"/><path fill="#37cfee" d="M36,58h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z"/><path fill="#37cfee" d="M42,58h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z"/><path fill="#37cfee" d="M48,58h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z"/><path fill="#37cfee" d="M54,58h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z"/><path fill="#37cfee" d="M60,58h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z"/><path fill="#37cfee" d="M66,58H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z"/><path fill="#37cfee" d="M66,65.17H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z"/><path fill="#37cfee" d="M72.05,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M78.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M84.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M90.07,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M72.05,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M78.06,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M30,50.86h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z"/><path fill="#37cfee" d="M36,50.86h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z"/><path fill="#37cfee" d="M42,50.86h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z"/><path fill="#37cfee" d="M48,50.86h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z"/><path fill="#37cfee" d="M54,50.86h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z"/><path fill="#37cfee" d="M60,50.86h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z"/><path fill="#37cfee" d="M66,50.86H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z"/><path fill="#37cfee" d="M72.05,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M78.06,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z"/><path fill="#37cfee" d="M90.07,57.83H82.19a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h6.88V47.06H81.39V50.8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V46.06h9.68Z"/><path fill="#37cfee" d="M30,43.7h-4.8V38.91H30Zm-3.8-1H29V39.91h-2.8Z"/><path fill="#37cfee" d="M36,43.7h-4.8V38.91H36Zm-3.8-1H35V39.91h-2.8Z"/><path fill="#37cfee" d="M42,43.7h-4.8V38.91H42Zm-3.8-1H41V39.91h-2.8Z"/><path fill="#37cfee" d="M48,43.7h-4.8V38.91H48Zm-3.8-1H47V39.91h-2.8Z"/><path fill="#37cfee" d="M54,43.7h-4.8V38.91H54Zm-3.8-1H53V39.91h-2.8Z"/><path fill="#37cfee" d="M60,43.7h-4.8V38.91H60Zm-3.8-1H59V39.91h-2.8Z"/><path fill="#37cfee" d="M66,43.7H61.25V38.91H66Zm-3.79-1H65V39.91H62.25Z"/><path fill="#37cfee" d="M72.05,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z"/><path fill="#37cfee" d="M78.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z"/><path fill="#37cfee" d="M84.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z"/><path fill="#37cfee" d="M90.07,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z"/><path fill="#37cfee" d="M82.19,57.83a.5.5,0,0,1-.5-.5v-6h-.8a.5.5,0,0,1,0-1h1.8v7A.5.5,0,0,1,82.19,57.83Z"/></svg>
                    <h4>Rédaction optimisée pour le référencement naturel</h4>
                </div>
                <div className="w-full md:w-1/3 flex pl-4 flex-col font-bold">
                    <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M92.48,72.15h-85A2.53,2.53,0,0,1,5,69.62V16.69a2.53,2.53,0,0,1,2.52-2.52h85A2.53,2.53,0,0,1,95,16.69V69.62A2.53,2.53,0,0,1,92.48,72.15Zm-85-56.71a1.26,1.26,0,0,0-1.25,1.25V69.62a1.26,1.26,0,0,0,1.25,1.25h85a1.26,1.26,0,0,0,1.25-1.25V16.69a1.26,1.26,0,0,0-1.25-1.25Z"/><path fill="#37cfee" d="M51.48,72.22V84.49h-3V72.22h3m.3-1.27H48.22a1,1,0,0,0-1,1V84.79a1,1,0,0,0,1,1h3.56a1,1,0,0,0,1-1V71.92a1,1,0,0,0-1-1Z"/><path fill="#37cfee" d="M61.36,85.83h-28a.63.63,0,0,1,0-1.27h28a.63.63,0,1,1,0,1.27Z"/><path fill="#37cfee" d="M70,85.83H66.89a.63.63,0,1,1,0-1.27H70a.63.63,0,1,1,0,1.27Z"/><path fill="#37cfee" d="M64.83,85.83H63.26a.63.63,0,1,1,0-1.27h1.57a.63.63,0,1,1,0,1.27Z"/><rect fill="#37cfee" x="5.63" y="65.24" width="88.73" height="1.27"/><path fill="#37cfee" d="M58.32,24.68a.35.35,0,0,1-.25-.1l-1.13-1.13a.35.35,0,0,1,.5-.5l1.13,1.13a.35.35,0,0,1-.25.6Z"/><path fill="#37cfee" d="M57.19,24.68a.35.35,0,0,1-.25-.6l1.13-1.13a.35.35,0,0,1,.5.5l-1.13,1.13A.35.35,0,0,1,57.19,24.68Z"/><path fill="#37cfee" d="M59.92,60.86H13.84a2.07,2.07,0,0,1-2.07-2.07V22.59a2.07,2.07,0,0,1,2.07-2.07H59.92A2.07,2.07,0,0,1,62,22.59V58.79A2.07,2.07,0,0,1,59.92,60.86ZM13.84,21.79a.8.8,0,0,0-.8.8V58.79a.8.8,0,0,0,.8.8H59.92a.8.8,0,0,0,.8-.8V22.59a.8.8,0,0,0-.8-.8Z"/><path fill="#37cfee" d="M39,45.82H17.88a2.21,2.21,0,0,1-2.21-2.21V31.37a1.87,1.87,0,0,1,1.87-1.87H39a2.21,2.21,0,0,1,2.21,2.21v11.9A2.21,2.21,0,0,1,39,45.82ZM17.55,30.58a.79.79,0,0,0-.79.79V43.61a1.13,1.13,0,0,0,1.13,1.13H39a1.13,1.13,0,0,0,1.13-1.13V31.71A1.13,1.13,0,0,0,39,30.58Z"/><path fill="#37cfee" d="M56.21,57.45H17.84a2.1,2.1,0,0,1-2.09-2.09V50.28a2.1,2.1,0,0,1,2.09-2.09H56.21a2.1,2.1,0,0,1,2.09,2.09v5.08A2.1,2.1,0,0,1,56.21,57.45ZM17.84,49.27a1,1,0,0,0-1,1v5.08a1,1,0,0,0,1,1H56.21a1,1,0,0,0,1-1V50.28a1,1,0,0,0-1-1Z"/><path fill="#37cfee" d="M61.36,27.29H12.41a.63.63,0,1,1,0-1.27H61.36a.63.63,0,1,1,0,1.27Z"/><path fill="#37cfee" d="M56.91,30.51H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z"/><path fill="#37cfee" d="M56.91,34.32H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z"/><path fill="#37cfee" d="M56.91,38.12H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z"/><path fill="#37cfee" d="M56.91,41.93H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z"/><path fill="#37cfee" d="M56.91,45.74H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z"/><path fill="#37cfee" d="M85,60.7H76.39a1.22,1.22,0,0,1-1.22-1.22v-4a1.08,1.08,0,0,1,1.08-1.08H85a1.22,1.22,0,0,1,1.22,1.22v3.86A1.22,1.22,0,0,1,85,60.7Zm-8.72-5.22v4a.14.14,0,0,0,.14.14H85a.14.14,0,0,0,.14-.14V55.62a.14.14,0,0,0-.14-.14Z"/><path fill="#37cfee" d="M86.72,60.86H68.29a2.07,2.07,0,0,1-2.07-2.07V22.59a2.07,2.07,0,0,1,2.07-2.07H86.72a2.07,2.07,0,0,1,2.07,2.07V58.79A2.07,2.07,0,0,1,86.72,60.86ZM68.29,21.79a.8.8,0,0,0-.8.8V58.79a.8.8,0,0,0,.8.8H86.72a.8.8,0,0,0,.8-.8V22.59a.8.8,0,0,0-.8-.8Z"/><path fill="#37cfee" d="M85.13,24.68a.35.35,0,0,1-.25-.1l-1.13-1.13a.35.35,0,0,1,.5-.5l1.13,1.13a.35.35,0,0,1-.25.6Z"/><path fill="#37cfee" d="M84,24.68a.35.35,0,0,1-.25-.6l1.13-1.13a.35.35,0,0,1,.5.5l-1.13,1.13A.35.35,0,0,1,84,24.68Z"/><path fill="#37cfee" d="M83.29,57.73H77.93a.54.54,0,0,1,0-1.08h5.36a.54.54,0,1,1,0,1.08Z"/><path fill="#37cfee" d="M83.29,59.43h-3a.54.54,0,1,1,0-1.08h3a.54.54,0,1,1,0,1.08Z"/><path fill="#37cfee" d="M85,36.72H76.39a1.22,1.22,0,0,1-1.22-1.22v-5a1.08,1.08,0,0,1,1.08-1.08H85a1.22,1.22,0,0,1,1.22,1.22V35.5A1.22,1.22,0,0,1,85,36.72Zm-8.72-6.21v5a.14.14,0,0,0,.14.14H85a.14.14,0,0,0,.14-.14V30.65a.14.14,0,0,0-.14-.14Z"/><path fill="#37cfee" d="M82.87,32.34H77.51a.54.54,0,1,1,0-1.08h5.36a.54.54,0,1,1,0,1.08Z"/><path fill="#37cfee" d="M79.91,34.32h-2.4a.54.54,0,1,1,0-1.08h2.4a.54.54,0,1,1,0,1.08Z"/><path fill="#37cfee" d="M78.48,45H69.9a1.22,1.22,0,0,1-1.22-1.22v-5a1.08,1.08,0,0,1,1.08-1.08h8.72A1.22,1.22,0,0,1,79.71,39v4.85A1.22,1.22,0,0,1,78.48,45Zm-8.72-6.21v5a.14.14,0,0,0,.14.14h8.58a.14.14,0,0,0,.14-.14V39a.14.14,0,0,0-.14-.14Z"/><path fill="#37cfee" d="M74.69,40.66H71a.54.54,0,1,1,0-1.08h3.67a.54.54,0,0,1,0,1.08Z"/><path fill="#37cfee" d="M76.38,42.64H71a.54.54,0,1,1,0-1.08h5.36a.54.54,0,1,1,0,1.08Z"/><path fill="#37cfee" d="M78.48,53.36H69.9a1.22,1.22,0,0,1-1.22-1.22v-5a1.08,1.08,0,0,1,1.08-1.08h8.72a1.22,1.22,0,0,1,1.22,1.22v4.85A1.22,1.22,0,0,1,78.48,53.36Zm-8.72-6.21v5a.14.14,0,0,0,.14.14h8.58a.14.14,0,0,0,.14-.14V47.29a.14.14,0,0,0-.14-.14Z"/><path fill="#37cfee" d="M76.38,49H71a.54.54,0,1,1,0-1.08h5.36a.54.54,0,1,1,0,1.08Z"/><path fill="#37cfee" d="M75.39,51H71a.54.54,0,1,1,0-1.08h4.37a.54.54,0,0,1,0,1.08Z"/><path fill="#37cfee" d="M88.09,27.12H66.93a.54.54,0,0,1,0-1.08H88.09a.54.54,0,1,1,0,1.08Z"/></svg>                    
                    <h4>Optimisation de l'expérience utilisateur</h4>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Votre devis gratuit"/>
            </div>
        </div>
        </section>
        <section className="w-full lg:w-1/2 px-10 mt-16 lg:-mt-64 mb-32">
            <h3 className="century text-3xl text-center">
                D'après France Numérique, <span className="text-bleu">97%</span> des internautes utilisent la recherche locale sur un moteur de recherche ou un annuaire.
            </h3>
            <br/>
            <p className="text-center century"><b>Source :</b> <a className="text-bleu hover:text-black" href="https://www.francenum.gouv.fr/comprendre-le-numerique/comment-ameliorer-votre-referencement-local" target="_blank" rel="noreferrer">francenum.gouv.fr, 2020</a></p>
        </section>
        <section className="text-center text-black text-2xl century mx-12 mt-8 lg:mx-0">
            <h2 className="century leading-none">Répondre à vos<br/><span className="text-6xl text-bleu font-bold">BESOINS</span></h2>
            <hr className="blue"></hr>
            <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Notre rôle : mettre en place un projet adapté à l'image de votre entreprise.</h3>
        </section>
        <section className="w-full my-10 flex flex-col lg:flex-row">
            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{backgroundImage:'url('+ siteinternet +')'}}>
                <h3 className="text-3xl titrehover text-center century leading-none"><span>Site internet</span><br/><span className="font-bold text-6xl">VITRINE</span></h3>
                <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">Si vous cherchez à faire connaître votre entreprise, alors le <strong className="font-normal">site internet vitrine</strong> est l’outil professionnel qu’il vous faut. La <strong className="font-normal">création d’un site internet</strong> de ce type répond parfaitement aux besoins d’un <strong className="font-normal">chauffagiste ou climatiseur</strong> souhaitant présenter son activité, mais pas seulement. 
                <br/><br/>
                Le <strong className="font-normal">site internet vitrine</strong> est une <strong className="font-normal">carte de visite en ligne</strong>. En ce sens, il est disponible 24h sur 24 et 7 jours sur 7. C’est pourquoi, il reste une source de contacts importante pour une <strong className="font-normal">entreprise de chauffage ou de climatisation</strong>. Il offre également la possibilité de présenter vos précédentes réalisations comme références.</p>
            </div>
            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{backgroundImage:'url('+ referencement +')'}}>
                <h3 className="text-3xl titrehover text-center century leading-none"><span>Référencement</span><br/><span className="font-bold text-6xl">LOCAL</span></h3>
                <p className="text century text-lg lg:text-sm xl:text-lg">Pour un artisan prestataire de services, <strong className="font-normal">acquérir de la visibilité en ligne</strong> va être important en vue d’obtenir de <strong className="font-normal">nouveaux clients</strong>. Cela sera d’autant plus pertinent grâce au <strong className="font-normal">référencement local</strong>. En plus d’apporter de la <strong className="font-normal">visibilité sur les moteurs de recherche</strong>, le référencement local vous permet d’être accessible et de <strong className="font-normal">générer un trafic qualifié</strong>.
                <br/><br/>
                En effet, le <strong className="font-normal">référencement SEO local</strong> permet d’<strong className="font-normal">être visible</strong> auprès d’utilisateurs de votre <strong className="font-normal">secteur géographique</strong>. Cela permet d’éviter les demandes non pertinentes et auxquelles vous ne pourrez pas répondre. Définissez vos secteurs pour obtenir des <strong className="font-normal">contacts qualifiés</strong>.</p>
            </div>
            <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{backgroundImage:'url('+ webdesign +')', backgroundPosition:'left'}}>
                <h3 className="text-3xl titrehover text-center century leading-none"><span>Design</span><br/><span className="font-bold text-6xl">EFFICACE</span></h3>
                <p className="text century text-lg lg:text-sm xl:text-lg">Pour <strong className="font-normal">créer un site internet</strong> performant, le <strong className="font-normal">webdesign</strong> doit être construit en total accord avec vos objectifs. Il doit donc générer de l’efficacité. Pour cela, nous mettons en place une plateforme <strong className="font-normal">responsive design</strong>, intuitive et dans l’air du temps. En effet, <strong className="font-normal">nos sites internet</strong> sont aussi bien travaillés sur le fond que sur la forme.
                <br/><br/>
                La réalisation technique doit donner lieu à un outil qui va fluidifier la <strong className="font-normal">navigation sur le site web</strong> et proposer une <strong className="font-normal">expérience utilisateur optimale</strong>. Du <strong className="font-normal">mobile à l’écran d’ordinateur</strong>, <strong className="font-normal">votre site internet</strong> doit être accessible pour répondre au mieux aux <strong className="font-normal">besoins des utilisateurs</strong>.</p>
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
                    <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" clip-rule="evenodd" d="M59.15,60.95c0.1-0.233,0.267-0.367,0.5-0.4c0.166-0.033,0.333,0,0.5,0.101   c2,1.233,4.467,2.233,7.399,3c0.233,0.033,0.4,0.149,0.5,0.35c0.101,0.167,0.134,0.333,0.101,0.5c-0.067,0.2-0.2,0.366-0.4,0.5   c-0.167,0.101-0.35,0.116-0.55,0.05c-3.134-0.766-5.733-1.8-7.8-3.1c-0.2-0.1-0.317-0.25-0.351-0.45   C59.017,61.267,59.05,61.083,59.15,60.95z M54.101,52.4c0.199-0.034,0.383,0,0.55,0.1c0.133,0.134,0.217,0.3,0.25,0.5   c0.333,2.134,1.217,3.983,2.649,5.55c0.134,0.134,0.2,0.301,0.2,0.5c0,0.2-0.083,0.367-0.25,0.5c-0.133,0.134-0.3,0.2-0.5,0.2   s-0.383-0.066-0.55-0.2c-1.634-1.8-2.634-3.916-3-6.35c-0.033-0.2,0.017-0.367,0.15-0.5C53.733,52.5,53.9,52.4,54.101,52.4z    M70.3,56.9c0.167,0.066,0.317,0.2,0.45,0.399c0.066,0.167,0.083,0.351,0.05,0.551c-0.066,0.166-0.199,0.333-0.399,0.5   c-0.2,0.066-0.384,0.083-0.55,0.05c-1.534-0.5-2.801-1.067-3.801-1.7L64.4,58.4c-0.134,0.134-0.283,0.2-0.45,0.2   c-0.2,0.033-0.367,0-0.5-0.101c-0.134-0.1-0.233-0.25-0.3-0.45l-1.45-5.5c-0.033-0.166-0.017-0.333,0.05-0.5   c0.101-0.166,0.233-0.283,0.4-0.35c0.133-0.1,0.283-0.117,0.45-0.05l5.449,1.399c0.167,0.066,0.301,0.167,0.4,0.301   c0.1,0.166,0.133,0.35,0.1,0.55c0,0.134-0.05,0.267-0.149,0.399l-1.3,1.301C68,56.134,69.066,56.567,70.3,56.9z M90.7,58.15   c0.133,0.167,0.2,0.333,0.2,0.5c0.033,0.2-0.017,0.384-0.15,0.55c-0.133,0.133-0.3,0.217-0.5,0.25c-2.7,0.2-5.184,0.316-7.45,0.35   c-0.233,0-0.416-0.066-0.55-0.199c-0.133-0.167-0.2-0.334-0.2-0.5c0-0.234,0.067-0.417,0.2-0.551c0.134-0.133,0.3-0.199,0.5-0.199   c2.267-0.066,4.733-0.2,7.4-0.4C90.351,57.917,90.533,57.983,90.7,58.15z M94.95,65.75c-0.066,0.167-0.167,0.3-0.3,0.4l-4.8,3   c-0.167,0.1-0.334,0.134-0.5,0.1c-0.2-0.033-0.367-0.116-0.5-0.25c-0.134-0.134-0.2-0.283-0.2-0.45v-1.949   c-2.601,0.1-5.05,0.133-7.351,0.1c-0.233,0-0.416-0.084-0.55-0.25c-0.133-0.133-0.2-0.3-0.2-0.5s0.067-0.383,0.2-0.55   c0.167-0.134,0.351-0.2,0.55-0.2c2.301,0,4.733-0.033,7.301-0.1l-0.051-2.25c0-0.167,0.067-0.334,0.2-0.5   c0.101-0.134,0.25-0.217,0.45-0.25c0.167-0.033,0.333,0,0.5,0.1l4.9,2.65c0.166,0.066,0.283,0.184,0.35,0.35   C95.017,65.4,95.017,65.583,94.95,65.75z M9.851,57.95c2.666,0.2,5.133,0.334,7.399,0.4c0.2,0,0.367,0.066,0.5,0.199   c0.134,0.134,0.2,0.316,0.2,0.551c0,0.166-0.066,0.333-0.2,0.5c-0.133,0.133-0.3,0.199-0.5,0.199c-2.3-0.033-4.8-0.149-7.5-0.35   c-0.2-0.033-0.366-0.117-0.5-0.25c-0.133-0.166-0.184-0.35-0.149-0.55c0-0.167,0.083-0.333,0.25-0.5   C9.483,57.983,9.65,57.917,9.851,57.95z M10.8,62.101c0.2,0.033,0.367,0.116,0.5,0.25c0.101,0.166,0.15,0.333,0.15,0.5l-0.05,2.25   c2.566,0.066,5,0.1,7.3,0.1c0.2,0,0.383,0.066,0.55,0.2c0.134,0.167,0.2,0.35,0.2,0.55s-0.066,0.367-0.2,0.5   c-0.133,0.166-0.3,0.25-0.5,0.25c-2.333,0.033-4.783,0-7.35-0.1l-0.05,1.949c0,0.167-0.067,0.316-0.2,0.45   c-0.134,0.134-0.283,0.217-0.45,0.25c-0.2,0.034-0.384,0-0.55-0.1l-4.8-3c-0.134-0.101-0.233-0.233-0.301-0.4   c-0.066-0.167-0.066-0.35,0-0.55c0.067-0.166,0.184-0.283,0.351-0.35L10.3,62.2C10.467,62.101,10.634,62.067,10.8,62.101z    M38.25,52.05c0.066,0.167,0.083,0.334,0.05,0.5l-1.449,5.5c-0.067,0.2-0.15,0.351-0.25,0.45c-0.167,0.101-0.334,0.134-0.5,0.101   c-0.2,0-0.351-0.066-0.45-0.2L34,56.7c-1.066,0.633-2.333,1.2-3.8,1.7c-0.2,0.033-0.4,0.017-0.6-0.05   c-0.2-0.167-0.317-0.334-0.351-0.5c-0.066-0.2-0.05-0.384,0.05-0.551c0.101-0.199,0.25-0.333,0.45-0.399   c1.2-0.333,2.25-0.767,3.15-1.3L31.65,54.3c-0.134-0.133-0.2-0.266-0.2-0.399c-0.033-0.2,0-0.384,0.1-0.55   c0.101-0.134,0.25-0.234,0.45-0.301l5.4-1.399c0.166-0.067,0.333-0.05,0.5,0.05C38.033,51.767,38.15,51.884,38.25,52.05z    M40.4,60.55c0.2,0.033,0.35,0.167,0.45,0.4c0.1,0.133,0.133,0.316,0.1,0.55c-0.033,0.2-0.15,0.351-0.35,0.45   c-2.067,1.3-4.667,2.334-7.801,3.1c-0.199,0.066-0.383,0.051-0.55-0.05c-0.2-0.134-0.333-0.3-0.399-0.5   c-0.034-0.167,0-0.333,0.1-0.5c0.1-0.2,0.267-0.316,0.5-0.35c2.934-0.767,5.4-1.767,7.4-3C40.017,60.55,40.2,60.517,40.4,60.55z    M49.05,53.2c0-0.2,0.084-0.367,0.25-0.5c0.134-0.133,0.301-0.2,0.5-0.2c0.2,0,0.384,0.067,0.551,0.2   c0.1,0.166,0.149,0.35,0.149,0.55l-0.1,10.9l2-0.05c0.166,0,0.333,0.05,0.5,0.149c0.1,0.101,0.183,0.233,0.25,0.4   c0.033,0.2,0,0.366-0.101,0.5L50.4,70.05c-0.067,0.2-0.184,0.334-0.351,0.4c-0.166,0.066-0.333,0.066-0.5,0   c-0.166-0.033-0.3-0.15-0.399-0.35l-3.05-4.801C46,65.134,45.967,64.967,46,64.8c0.033-0.166,0.101-0.3,0.2-0.399   c0.133-0.134,0.316-0.2,0.55-0.2l2.2-0.05L49.05,53.2z M45.4,52.5c0.133-0.1,0.316-0.134,0.55-0.1c0.167,0,0.316,0.1,0.45,0.3   c0.133,0.133,0.2,0.3,0.2,0.5c-0.4,2.434-1.434,4.55-3.101,6.35c-0.133,0.134-0.3,0.2-0.5,0.2s-0.366-0.066-0.5-0.2   c-0.167-0.133-0.25-0.3-0.25-0.5c0-0.199,0.066-0.366,0.2-0.5c1.434-1.566,2.316-3.416,2.65-5.55   C45.134,52.8,45.233,52.634,45.4,52.5z M60.5,46.5c0.167,0.167,0.25,0.351,0.25,0.55c0,0.167-0.083,0.334-0.25,0.5   c-0.167,0.134-0.35,0.2-0.55,0.2h-21.1c-0.2,0-0.367-0.066-0.5-0.2c-0.167-0.166-0.25-0.333-0.25-0.5   c0-0.199,0.083-0.383,0.25-0.55c0.133-0.167,0.3-0.25,0.5-0.25h21.1C60.15,46.25,60.333,46.333,60.5,46.5z M62.9,40.15v8.75   c0.066,1.167-0.617,1.75-2.05,1.75h-23.2c-1.467,0-2.167-0.583-2.101-1.75v-8.75c-0.066-1.233,0.634-1.851,2.101-1.851h23.2   C62.283,38.3,62.967,38.917,62.9,40.15z M61.45,48.9v-8.75c-0.033-0.233-0.233-0.351-0.6-0.351h-23.2   c-0.367,0-0.567,0.117-0.601,0.351v8.75c0.033,0.2,0.233,0.3,0.601,0.3h23.2C61.217,49.2,61.417,49.101,61.45,48.9z M61.5,31.65   c-0.133,0.1-0.3,0.167-0.5,0.2c-0.2,0-0.383-0.051-0.55-0.15l-10.4-8.5L20.9,47h3.7c0.199,0,0.399,0.067,0.6,0.2   c0.133,0.133,0.2,0.3,0.2,0.5v10.1c0.5-0.066,0.983-0.133,1.45-0.199c0.199-0.066,0.383-0.033,0.55,0.1   c0.2,0.133,0.316,0.3,0.35,0.5s0,0.383-0.1,0.55c-0.167,0.167-0.351,0.284-0.55,0.351c-0.534,0.1-1.101,0.184-1.7,0.25V64.8   c1.5-0.166,2.916-0.35,4.25-0.55c0.2-0.066,0.383-0.033,0.55,0.101c0.167,0.1,0.283,0.25,0.35,0.449   c0.033,0.2-0.017,0.384-0.149,0.551c-0.134,0.199-0.3,0.316-0.5,0.35c-1.4,0.267-2.9,0.467-4.5,0.6V67   c0,2.567,0.483,4.65,1.45,6.25c1.566,2.5,4.416,3.75,8.55,3.75h29.25c3.967-0.1,6.717-1.35,8.25-3.75c0.967-1.6,1.45-3.7,1.45-6.3   V66.3c-1.534-0.166-2.95-0.366-4.25-0.6c-0.2-0.033-0.367-0.15-0.5-0.35C69.467,65.184,69.434,65,69.5,64.8   c0.033-0.199,0.134-0.35,0.3-0.449c0.167-0.134,0.351-0.167,0.551-0.101c1.232,0.2,2.566,0.366,4,0.5V59.3   c-0.5-0.066-0.983-0.133-1.45-0.199c-0.2-0.066-0.367-0.184-0.5-0.351c-0.134-0.167-0.184-0.35-0.15-0.55s0.15-0.367,0.351-0.5   c0.166-0.133,0.35-0.166,0.55-0.1c0.366,0.066,0.767,0.133,1.2,0.199V47.7c0-0.2,0.066-0.367,0.199-0.5   c0.134-0.133,0.317-0.2,0.551-0.2h4.1l-7.7-6.3c-0.066-0.066-0.133-0.15-0.2-0.25c-0.033-0.1-0.05-0.2-0.05-0.3V28.4h-9.6v2.7   C61.65,31.3,61.601,31.483,61.5,31.65z M50.05,21.5c0.167,0,0.317,0.05,0.45,0.15l9.65,7.899V27.65c0-0.2,0.083-0.384,0.25-0.55   c0.133-0.134,0.316-0.2,0.55-0.2h11c0.2,0,0.4,0.066,0.6,0.2c0.134,0.166,0.2,0.35,0.2,0.55V39.8l9.05,7.351   c0.101,0.1,0.2,0.216,0.301,0.35c0.033,0.167,0.033,0.317,0,0.45C82,48.083,81.884,48.2,81.75,48.3   c-0.133,0.101-0.267,0.15-0.399,0.15h-5.5v9.5c1.033,0.1,2.116,0.184,3.25,0.25c0.199,0.033,0.366,0.133,0.5,0.3   c0.133,0.134,0.199,0.317,0.199,0.55c0,0.167-0.083,0.316-0.25,0.45c-0.166,0.134-0.35,0.2-0.55,0.2   c-1.1-0.033-2.149-0.117-3.149-0.25v5.45c0.466,0.033,0.982,0.066,1.55,0.1c0.2,0.034,0.366,0.116,0.5,0.25   c0.133,0.167,0.183,0.366,0.149,0.601c0,0.166-0.066,0.333-0.199,0.5C77.684,66.483,77.5,66.534,77.3,66.5   c-0.5-0.033-0.983-0.066-1.449-0.1v0.55c0,2.934-0.567,5.3-1.7,7.1c-1.767,2.867-4.917,4.351-9.45,4.45H35.4   c-4.733,0-8-1.483-9.8-4.45c-1.134-1.8-1.7-4.149-1.7-7.05v-0.55c-0.367,0-0.767,0.017-1.2,0.05c-0.2,0.034-0.384-0.017-0.55-0.149   c-0.134-0.167-0.2-0.334-0.2-0.5c-0.033-0.234,0.017-0.434,0.15-0.601c0.133-0.134,0.3-0.216,0.5-0.25   c0.466-0.033,0.899-0.05,1.3-0.05V59.5c-0.934,0.101-1.9,0.167-2.9,0.2c-0.2,0-0.383-0.066-0.55-0.2s-0.25-0.283-0.25-0.45   c0-0.232,0.066-0.416,0.2-0.55c0.133-0.167,0.316-0.267,0.55-0.3c1-0.033,1.983-0.1,2.95-0.2v-9.55H18.8   c-0.166,0-0.3-0.05-0.399-0.15c-0.134-0.1-0.233-0.217-0.3-0.35c-0.101-0.133-0.101-0.283,0-0.45c0.033-0.134,0.116-0.25,0.25-0.35   l31.199-25.5C49.684,21.55,49.851,21.5,50.05,21.5z"/></g></svg>
                    <h4 className="font-bold century -mt-3"><span className="font-bold">Présentation de vos prestations</span></h4>
                    <p>Nous mettons en avant les services que vous proposez pour répondre au mieux à la demande des utilisateurs.</p>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
            <div className="w-full -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
            <svg width="50px" className="mx-auto block" viewBox="0 0 58 85"><g stroke="none" stroke-width="1" fill="#37cfee" fill-rule="evenodd"><path d="M53.6707377,16.777214 C53.0082462,17.5343471 51.9687657,18.0059778 50.9277077,18.0059778 C50.4544996,18.0059778 49.9797141,17.9113362 49.5080833,17.8166946 L34.2707808,35.3253962 L51.116991,59.6482952 C52.7258987,62.014336 52.1564716,65.2321514 49.8866498,66.8394817 C48.9402335,67.5019732 47.8991756,67.7858981 46.8581176,67.7858981 C45.1545683,67.7858981 43.6403022,66.9341234 42.5992443,65.5144989 L29.8226242,47.0609584 L30.0119074,50.7519819 L17.4245706,65.2321514 C15.8156629,67.028765 13.6389054,67.9751813 11.2728646,67.9751813 C9.28696774,67.9751813 7.39413513,67.3126899 5.87986904,65.9877071 C2.47277035,63.0538165 2.09420383,57.8485269 5.122736,54.4430055 L17.7100728,40.0574777 L22.4421544,39.5842696 L23.6709182,38.2592867 L16.9513624,28.5111988 L16.0995878,29.0790486 L15.3440321,28.3219156 C15.3440321,28.3219156 13.6389054,26.9022911 11.7476501,26.9022911 C11.2728646,26.9022911 10.8958755,26.9022911 10.5173089,27.0915744 C8.71911795,27.7540658 6.0691523,31.4450894 5.21580027,33.6218469 L4.83881111,34.852188 L1.52635405,34.095055 L0.29601285,33.9057717 L0.390654481,32.5807889 C0.390654481,32.3915057 0.863862633,26.8076495 3.8923948,20.7505851 C7.58184103,13.368538 13.6389054,8.54181481 21.3048774,6.55591793 L20.9278883,5.98806815 L19.9798946,4.85079122 L21.2102358,3.99901655 L24.7119761,1.53991152 L25.9423173,0.782778476 L26.794092,1.91847804 L32.945798,10.7201497 L33.7975726,11.8542719 L28.2137164,15.7345787 L27.4565834,14.5058149 L26.5101671,13.2738963 C25.3744675,14.0310294 23.8602015,15.3575896 23.4816349,16.5863534 C23.3869933,17.0595615 23.4816349,17.5343471 23.8602015,18.0059778 L25.7530341,20.8452268 L26.6048087,22.0755679 L25.5637508,22.7380594 L32.7565147,33.1486387 L47.6136733,16.1131452 C46.763476,14.7881624 46.8581176,12.9915488 47.9938172,11.7596302 L52.6312571,7.69161749 L57.0778363,11.4772827 L53.6707377,16.777214 L53.6707377,16.777214 Z M15.8156629,26.9022911 L15.627957,26.6183662 L23.9548431,20.8452268 L22.6314376,18.8577525 C19.885253,14.9774457 26.9833753,11.3826411 26.9833753,11.3826411 L28.592283,13.7486818 L31.8100984,11.4772827 L25.5637508,2.77025271 L22.0620105,5.13629347 L23.8602015,7.50233423 C3.41918665,11.0024972 1.81027894,32.7700722 1.81027894,32.7700722 L3.8923948,33.1486387 C4.74416948,31.0665228 7.48877676,26.6183662 10.0441008,25.6719499 C10.6119506,25.4826666 11.1798003,25.4826666 11.7476501,25.4826666 C13.5458411,25.4826666 15.0601072,26.3344413 15.8156629,26.9022911 L15.8156629,26.9022911 Z M28.4976413,45.1681258 L29.4440576,44.0324262 L31.7154568,41.4771022 L32.3779482,40.7199691 L33.1350812,39.8681945 C34.1761392,38.6378533 33.2297229,37.3128704 33.0404396,37.0289455 L30.5797572,34.9468297 C30.2011907,34.6629048 29.8226242,34.4736215 29.5386993,34.4736215 C28.9708495,34.4736215 28.592283,34.852188 28.4029997,35.0414713 L28.3083581,35.1361129 L27.8351499,35.7039627 L25.5637508,38.3539284 L24.5226929,39.4896279 L23.19771,41.003894 L18.3709869,41.3824605 L6.16379393,55.3894218 C3.70311154,58.2270934 4.08167807,62.4875441 6.82628535,64.9466491 C8.05662654,65.9877071 9.66553426,66.5571342 11.2728646,66.5571342 C13.1672746,66.5571342 15.0601072,65.7053595 16.2904484,64.2841577 L28.4976413,50.2771964 L28.3083581,45.4520506 L28.4976413,45.1681258 L28.4976413,45.1681258 Z M8.2459098,59.5520762 L7.48877676,58.9858038 L17.4245706,47.5341665 L18.1817036,48.1966579 L8.2459098,59.5520762 L8.2459098,59.5520762 Z M10.4226673,61.5395504 L9.75859853,60.877059 L19.6959697,49.4254218 L20.3584611,50.0894905 L10.4226673,61.5395504 L10.4226673,61.5395504 Z M22.8191435,52.266248 L12.8817723,63.6216663 L12.1246393,63.0538165 L22.0620105,51.6037566 L22.8191435,52.266248 L22.8191435,52.266248 Z M26.8887336,34.5682632 L22.0620105,27.4701409 L22.8191435,26.9022911 L27.6458667,33.8111301 C27.9297916,33.4325636 28.592283,33.0539971 29.5386993,33.0539971 C30.2011907,33.0539971 30.8636821,33.337922 31.5261735,33.9057717 L24.3334096,23.589834 L18.1817036,27.7540658 L24.6173345,37.1235872 L26.8887336,34.5682632 L26.8887336,34.5682632 Z M49.9797141,60.5000699 L35.0279138,38.9217782 C34.9332722,39.5842696 34.7439889,40.1521193 34.2707808,40.7199691 L33.2297229,41.9503103 L46.3849095,60.973278 L45.6277764,61.5395504 L32.5672314,42.6128017 L30.2958323,45.2627674 L43.8295855,64.7573659 C44.4920769,65.7053595 45.6277764,66.3662736 46.8581176,66.3662736 C47.6136733,66.3662736 48.3723837,66.0823487 49.0348751,65.7053595 C50.7368471,64.473441 51.116991,62.1074002 49.9797141,60.5000699 L49.9797141,60.5000699 Z M52.6312571,9.58287274 L49.0348751,12.8022655 C48.1831005,13.7486818 48.3723837,15.1683063 49.3188,16.020081 C49.7920082,16.3970701 50.359858,16.5863534 50.9277077,16.5863534 C51.5901991,16.5863534 52.1564716,16.3024285 52.6312571,15.8292203 L55.1850037,11.7596302 L52.6312571,9.58287274 L52.6312571,9.58287274 Z" fill="#37cfee" /></g></svg>
                    <h4 className="font-bold century"><span className="font-bold">Exposition de vos réalisations</span></h4>
                    <p>Nous valorisons votre travail au sein d'un espace dédié pour donner envie aux utilisateurs de travailler avec vous.</p>
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
            <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Nous travaillons tous les jours avec des professionnels du chauffage et de la climatisation d'horizons différents <br/>pour leur proposer une solution Web fonctionnelle.</h3>
        </section>
        <section className="w-full flex justify-center">
            <div className="w-full lg:w-2/3 flex flex-col mb-16 lg:flex-row justify-center text-white text-center text-2xl century">
                    <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{background:'#00000085 url(' + realisation1 + ')', backgroundBlendMode:'overlay', backgroundPosition:'center', backgroundSize:'cover'}}>
                    <a href="https://climaf-47.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Climaf</h4></a>
                </div>
                
                    <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{background:'#00000085 url(' + realisation2 + ')', backgroundBlendMode:'overlay', backgroundPosition:'center', backgroundSize:'cover'}}>
                    <a href="http://www.artfroid-climatisation-tarn.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Art Froid Climatisation</h4></a>
                </div>
                    <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{background:'#00000085 url(' + realisation3 + ')', backgroundBlendMode:'overlay', backgroundPosition:'center', backgroundSize:'cover'}}>
                    <a href="http://www.eurotech47.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Eurotech 47</h4></a>
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
      <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
            Création de site internet pour chauffagiste <span className="text-bleu">/</span> climatiseur :<br/><span className="font-bold">Nos clients sont satisfaits</span>
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
                            <div className="text-lg century my-2">Art Froid Climatisation</div>
                            <div className="italic">« Bonjour je voulais faire partager ma satisfaction envers LINKWEB. Je suis très satisfaite de leurs services proposés. J'ai toujours la même interlocutrice qui se prénomme Marine et cela chaque mois pour faire le point sur mon référencement. <a className="text-bleu hover:text-black font-bold" target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=linkweb+toulouse&rlz=1C5CHFA_enFR832FR832&oq=linkweb+toulouse&aqs=chrome..69i57j69i60l3.2474j0j1&sourceid=chrome&ie=UTF-8#lrd=0x12aebb43d4c8a751:0xb4abc0044173017,1,,,">[...]</a> »</div>
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
                    <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                            Création de site internet pour chauffagiste <span className="text-bleu">/</span> climatiseur :<br/><span className="font-bold">Une solution en accord avec vos besoins</span>
                        </h2>
                        <hr className="blue"></hr>
                    </section>
                    <section  className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                          <div className="w-full" label="UN SITE WEB POUR PROMOUVOIR SES PRODUITS ET SERVICES">
                            <p>Lorsque l’on souhaite donner de la visibilité et <strong>promouvoir son entreprise de chauffage et/ou de climatisation</strong>, la <strong>création d’un site internet</strong> est un moyen pertinent d’atteindre ses objectifs. En effet, <strong>créer un site internet</strong>, c’est permettre aux utilisateurs de vous trouver et de vous contacter. De nos jours, le <strong>site web est un gage de confiance et de crédibilité</strong> pour un professionnel. 
                            <br/><br/>
                            En plus de mettre en lumière l’ensemble des informations vous permettant d’être contacté, le <strong>site web est un outil de communication</strong> parfaitement maîtrisable. Il vous permettra de promouvoir aussi bien vos services que votre entreprise. Ceci est important pour obtenir la confiance des utilisateurs et se montrer professionnel dans sa démarche.</p>
                          </div>
                          <div label="UNE STRATÉGIE DE RÉFÉRENCEMENT NATUREL TOURNÉE VERS LE LOCAL">
                            <p><strong>Développer une stratégie de visibilité</strong> est important pour <strong>rendre votre site accessible</strong> dans les <strong>pages de résultats des moteurs de recherche</strong>. <strong>Opter pour le référencement local</strong> vous permettra de délimiter votre <strong>visibilité</strong> en rapport avec vos secteurs d’intervention pour un <strong>référencement sur-mesure</strong>.
                            <br/><br/>
                            Les <strong>moteurs de recherche</strong>, dont <strong>Google</strong>, constituent une porte d’entrée <strong>sur le Web</strong> pour les utilisateurs à la recherche de professionnels. À ce titre, le <strong>travail de référencement naturel</strong> doit vous permettre de présenter un <strong>contenu sur votre site web</strong> qui vous rendra <strong>visible dans les premières pages de résultats</strong>. Ce travail est nécessaire en vue de <strong>générer du trafic</strong> et <strong>obtenir des conversions grâce à votre site</strong>. Ceci est d’autant plus vrai pour une <strong>entreprise locale</strong>.</p>
                          </div>
                          <div label="UN ESPACE DE RÉALISATIONS POUR METTRE EN AVANT SES RÉFÉRENCES">
                            <p>Une image vaut mille mots. Quoi de mieux pour démontrer toute son expertise qu’un espace accordé à ses <strong>réalisations</strong> ? En effet, montrer le travail déjà effectué lors de la réalisation d’autres projets permet aux <strong>utilisateurs à la recherche d’un professionnel</strong> de se faire une idée concrète sur le travail pouvant être réalisé.
                            <br/><br/>
                            Ceci peut également leur permettre de préciser leur projet en observant les possibilités qui s’offrent à eux. Il est important d’exposer son travail pour, une nouvelle fois, <strong>apporter de la confiance aux utilisateurs</strong>. Cela démontre tout votre sérieux et votre capacité à produire un travail bien fait.</p>
                          </div>
                        </Accordion>
                    </div>
                  </section>
                  
                  <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselChauffage />
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
query lastsThreePostsSiteInternetchauffageclim {
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
export default SiteInternetchauffageclim;




