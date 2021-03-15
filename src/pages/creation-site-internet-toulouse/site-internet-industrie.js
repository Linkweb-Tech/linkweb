import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";

import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";

import CarouselIndustriel from "../../components/carousel-slides/industriel-slides";

import Accordion from "../../components/accordion";
import SEO from "../../components/seo";
import SimpleMap from "../../components/simpleMap";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";

import stars from '../../images/stars.png';
import arriereplan from "../../images/site-pour-industrie.jpg";
import siteinternet from "../../images/site-catalogue-industrie.jpg";
import referencement from "../../images/referencement-industrie.jpg";
import webdesign from "../../images/webdesign-industrie.jpg";
import realisation1 from "../../images/mirameca.jpg";
import realisation2 from "../../images/micheletti.jpg";
import realisation3 from "../../images/danhydro.jpg";
import map from "../../images/map.jpg";


class CreationSitePourIndustrie extends React.Component {

    constructor(props) {
        super(props);

        this.metiers = ['industriel', 'plasturgiste', 'métallurgiste', 'chimiste', 'ergonome', 'dessinateur', 'chaudronnier', 'constructeur', 'fabricant', 'appareilleur'];
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
                    title="Création de site internet pour industrie à Toulouse - Linkweb"
                    description="Vous êtes industriel et souhaitez créer un site web pour développer votre visibilité et promouvoir votre production ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-industrie/"
                    nom="Créer un site internet pour industriel"
                    slug="creation-site-internet-toulouse/site-internet-industrie/"
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

                <section className="flex items-center justify-start w-full mx-auto pb-0 my-32 md:my-42 lg:my-42 xl:my-48 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#00000085 url(' + arriereplan + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                            <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Création de site internet pour <span className="text-bleu">Industriel</span></h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-1/2 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">Linkweb, partenaire des industriels à Toulouse et Agen.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-2/3 lg:mx-0 flex flex-col lg:flex-row justify-center pb-24 lg:justify-start">
                            <RoundButtonAccueil url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-end -mt-0 lg:-mt-32">
                    <div className="w-11/12 lg:w-1/3 bg-white shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
                        <svg width="80px" className="mx-auto block pt-4" viewBox="0 0 100 125"><g><g><path fill="#37cfee" d="M40.3,65.7h32.9c0.6,0,1-0.5,1-1c0-0.6-0.5-1-1-1H40.3c-0.6,0-1,0.5-1,1C39.3,65.2,39.8,65.7,40.3,65.7z" /><path fill="#37cfee" d="M87.4,58.7h-9.7v-6.5c0-0.5-0.4-1-1-1H43.4c-0.5,0-1,0.4-1,1v6.5h-3.2L38,31.4c0-0.5-0.5-0.9-1-0.9h-6.7     c-0.5,0-1,0.4-1,0.9l-1.1,23.7l-1.1-23.7c0-0.5-0.5-0.9-1-0.9h-6.7c-0.5,0-1,0.4-1,0.9l-1.3,27.3h-4.8c-0.5,0-1,0.4-1,1V94     c0,0.5,0.4,1,1,1h74.9c0.5,0,1-0.4,1-1V59.7C88.4,59.2,88,58.7,87.4,58.7z M83.1,60.7V93h-1.5V60.7H83.1z M68.6,53.2h7.2v5.5     h-7.2V53.2z M59.4,53.2h7.2v5.5h-7.2V53.2z M50.2,53.2h7.2v5.5h-7.2V53.2z M44.4,53.2h3.8v5.5h-3.8V53.2z M31.3,32.4h4.8     l1.2,26.3h-7.3L31.3,32.4z M20.5,32.4h4.8l1.2,26.3h-7.3L20.5,32.4z M25.9,93h-7.1V79.7h7.1V93z M34.9,93h-7.1V79.7h7.1V93z      M35.9,77.8H17.8c-0.5,0-1,0.4-1,1V93h-3.3V60.7h66.1V93H36.9V78.8C36.9,78.2,36.5,77.8,35.9,77.8z M86.5,93h-1.4V60.7h1.4V93z" /><path fill="#37cfee" d="M28.7,27.6c0.9-0.1,1.7-0.5,2.5-1c1.2,1.1,2.9,1.7,4.6,1.4c0.6-0.1,1.2-0.3,1.7-0.5c0,0,0,0.1,0.1,0.1     c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.2,0.2,0.3,0.4,0.4c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.3,0.3,0.5,0.4     c0.1,0.1,0.2,0.1,0.3,0.2c0.2,0.1,0.4,0.3,0.6,0.4c0.1,0,0.1,0,0.2,0.1c0.8,0.4,1.8,0.7,2.7,0.7c0.3,0,0.6,0,0.9-0.1     c0.1,0,0.1,0,0.2-0.1c0.2,0,0.3-0.1,0.5-0.1c1.6,1.9,3.9,3.1,6.4,3.1c0.4,0,0.8,0,1.2-0.1c1.4-0.2,2.8-0.8,3.9-1.7c0,0,0,0,0,0     c0.4,0.3,0.9,0.5,1.4,0.7c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2,0.1,0.3,0.1c0.2,0.1,0.4,0.1,0.7,0.1c0,0,0,0,0.1,0c0.2,0,0.5,0,0.7,0     c0,0,0,0,0,0c0,0,0,0,0,0c0.3,0,0.6,0,0.9-0.1c2-0.3,3.7-1.5,4.5-3.3c1.1,0.4,2.2,0.5,3.4,0.3c1.9-0.3,3.6-1.3,4.8-2.8     c1.2-1.6,1.6-3.5,1.4-5.4c-0.4-2.5-2.1-4.7-4.4-5.7c0-0.4,0-0.7-0.1-1C69.1,9.4,64.1,5,58.2,5c-0.5,0-1.1,0-1.6,0.1     c0,0,0,0-0.1,0c-0.2,0-0.3,0.1-0.5,0.1c-0.2,0-0.4,0.1-0.7,0.1c-0.2,0-0.3,0.1-0.5,0.1c-0.3,0.1-0.6,0.2-0.9,0.3     c-0.1,0-0.2,0.1-0.2,0.1c-1.7,0.7-3.2,1.7-4.4,3.1c-1.8-0.9-3.9-1.2-6-1c-2.1,0.3-4,1.2-5.5,2.6c-1.4-0.9-3.1-1.3-4.7-1     c-1.9,0.3-3.5,1.2-4.6,2.7c-1.1,1.4-1.5,3.2-1.4,5c-2.8,0.4-4.8,3.1-4.4,5.9C23.2,26,25.8,28,28.7,27.6z M27.5,19.3     c0.3,0,0.5,0,0.8,0c0.3,0,0.6-0.1,0.8-0.4c0.2-0.3,0.3-0.6,0.2-0.9c-0.1-0.2-0.1-0.4-0.2-0.6c-0.4-2.8,1.5-5.3,4.3-5.7     c1.2-0.2,2.3,0.1,3.3,0.7c0,0.3,0.2,0.6,0.4,0.8c0.4,0.3,1,0.2,1.3-0.2c1.3-1.6,3.1-2.6,5.2-2.9c1.5-0.2,3.1,0,4.5,0.6     c-0.2,0.3-0.3,0.5-0.5,0.8c-0.2,0.5-0.1,1.1,0.4,1.3c0.1,0.1,0.3,0.1,0.4,0.1c0.4,0,0.7-0.2,0.9-0.5c0.9-1.8,2.3-3.2,4-4.1     c0,0,0,0,0.1,0c0.3-0.2,0.6-0.3,0.9-0.4c0.1,0,0.2-0.1,0.3-0.1c0.2-0.1,0.4-0.2,0.7-0.2c0.2,0,0.3-0.1,0.5-0.1     c0.1,0,0.2,0,0.3-0.1c0.2,0,0.4-0.1,0.7-0.1C57.3,7,57.8,7,58.2,7c4.9,0,9.1,3.7,9.8,8.5c0.1,0.4,0.1,0.9,0.1,1.4c0,0,0,0,0,0     c0,0,0,0,0,0c0,0.9-0.3,2.3-0.3,2.3c-0.1,0.5,0.2,1,0.8,1.1c0.1,0,0.1,0,0.2,0c0.5,0,0.9-0.3,1-0.8c0,0,0.1-0.6,0.2-1.2     c1.4,0.8,2.3,2.2,2.5,3.8c0.2,1.4-0.2,2.8-1,3.9c-0.8,1.1-2.1,1.9-3.5,2.1c-1.1,0.2-2.2,0-3.2-0.5c-0.3-0.1-0.6-0.1-0.8,0     c-0.3,0.1-0.5,0.3-0.6,0.6c-0.5,1.5-1.8,2.7-3.3,2.9c0,0,0,0,0,0c-0.2,0-0.4,0-0.6,0c0,0,0,0-0.1,0c-0.2,0-0.3,0-0.5,0     c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.3-0.1c-0.5-0.1-1-0.4-1.5-0.7c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1-0.1-0.2-0.1     c-0.3-0.3-0.5-0.6-0.7-0.9c-0.2-0.5-0.8-0.7-1.3-0.4c-0.5,0.2-0.7,0.8-0.4,1.3c0.1,0.2,0.2,0.4,0.3,0.5c-0.8,0.6-1.8,1-2.8,1.2     c-2.4,0.3-4.8-0.7-6.2-2.7c0,0,0,0,0-0.1c-0.5-0.8-0.8-1.6-1-2.6c-0.1-0.5-0.6-0.9-1.1-0.8c-0.5,0.1-0.9,0.6-0.8,1.1     c0.1,0.8,0.3,1.5,0.7,2.3c-1.3,0.1-2.4-0.3-3.3-1.1c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.3-0.3-0.4-0.5c0,0-0.1-0.1-0.1-0.1     c-0.1-0.2-0.2-0.3-0.3-0.5c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.2-0.1-0.3-0.2-0.5c0-0.2-0.1-0.3-0.1-0.5c-0.1-0.5-0.6-0.9-1.1-0.8     c-0.5,0.1-0.8,0.5-0.8,1c-0.4,0.3-0.9,0.4-1.4,0.5c0,0,0,0,0,0c-1.3,0.2-2.7-0.4-3.5-1.5c-0.3-0.4-0.9-0.5-1.4-0.2     c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0-0.1,0.1-0.2,0.1c-0.5,0.5-1.1,0.9-1.9,1c-1.8,0.3-3.4-1-3.7-2.7C24.5,21.2,25.7,19.5,27.5,19.3     z" /><path fill="#37cfee" d="M52.9,23.4c0.3,0,0.6-0.1,0.8-0.4c1.5-2.2,2.2-4.8,1.8-7.4c-0.1-0.5-0.6-0.9-1.1-0.8c-0.5,0.1-0.9,0.6-0.8,1.1     c0.3,2.1-0.2,4.2-1.4,6c-0.3,0.4-0.2,1.1,0.2,1.4C52.5,23.3,52.7,23.4,52.9,23.4z" /><path fill="#37cfee" d="M35.4,22.5c0,0,0.1,0,0.1,0c2.2-0.3,4.2-1.7,5.3-3.7c0.3-0.5,0.1-1.1-0.4-1.3c-0.5-0.3-1.1-0.1-1.3,0.4     c-0.8,1.4-2.2,2.4-3.8,2.7c-0.5,0.1-0.9,0.6-0.8,1.1C34.5,22.1,34.9,22.5,35.4,22.5z" /><path fill="#37cfee" d="M70.9,68.6H42.7c-0.6,0-1,0.5-1,1v18.7c0,0.6,0.5,1,1,1h28.1c0.6,0,1-0.5,1-1V69.6C71.9,69.1,71.4,68.6,70.9,68.6z      M51.1,87.4h-7.4V80h7.4V87.4z M51.1,78h-7.4v-7.4h7.4V78z M60.5,87.4h-7.4V80h7.4V87.4z M60.5,78h-7.4v-7.4h7.4V78z M69.9,87.4     h-7.4V80h7.4V87.4z M69.9,78h-7.4v-7.4h7.4V78z" /></g></g></svg>
                        <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span>&nbsp;?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br /> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour un résultat professionnel.</p>
                        <br />
                        <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                            <div className="w-full md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block pt-0" viewBox="0 0 90 112.5"><path fill="#37cfee" d="M74.004,67.789H61.776v-3.994l10.055-13.316c2.816-1.609,4.724-4.636,4.724-8.105  c0-2.025-0.655-3.896-1.755-5.428L71.269,17.81c-0.068-4.482-3.73-8.109-8.229-8.109c-1.613,0-3.115,0.474-4.388,1.278  l-28.805,4.026c-1.03-0.393-2.144-0.617-3.311-0.617c-5.146,0-9.332,4.187-9.332,9.333h2c0-4.043,3.289-7.333,7.332-7.333  s7.333,3.29,7.333,7.333s-3.29,7.332-7.333,7.332v2c5.146,0,9.333-4.187,9.333-9.332c0-0.21-0.018-0.415-0.031-0.622l19.878-1.413  c0.158,0.307,0.33,0.604,0.523,0.888l2.697,15.521c-0.426,0.821-0.73,1.712-0.896,2.652L48.495,52.66l-2.186-1.006H21.258v16.135  h-7.813v12.51h60.559V67.789z M54.805,17.936c0,0.617,0.074,1.217,0.203,1.796L35.494,21.12c-0.514-1.765-1.533-3.313-2.894-4.479  l23.609-3.301C55.323,14.654,54.805,16.235,54.805,17.936z M74.555,42.374c0,4.042-3.29,7.332-7.333,7.332s-7.332-3.289-7.332-7.332  c0-4.043,3.289-7.333,7.332-7.333S74.555,38.331,74.555,42.374z M56.805,17.936c0-3.438,2.797-6.235,6.235-6.235  s6.235,2.797,6.235,6.235s-2.797,6.235-6.235,6.235S56.805,21.375,56.805,17.936z M58.676,24.908  c1.268,0.796,2.761,1.264,4.364,1.264c2.965,0,5.561-1.58,7.012-3.938l2.275,12.336c-1.469-0.964-3.221-1.529-5.105-1.529  c-2.6,0-4.953,1.071-6.646,2.793L58.676,24.908z M58.034,43.953c0.754,4.395,4.581,7.752,9.188,7.752  c0.424,0,0.838-0.037,1.247-0.092l-6.692,8.863v-1.711L50.367,53.52L58.034,43.953z M23.258,53.654h22.614l13.904,6.393v7.742  H23.258V53.654z M72.004,78.299H15.445v-8.51h56.559V78.299z" /></svg>
                                <h4>Présentation de vos prestations et productions</h4>
                            </div>
                            <div className="w-full md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M93.21,69.76H6.79a3,3,0,0,1-3-3V37.36a3,3,0,0,1,3-3H93.21a3,3,0,0,1,3,3V66.72A3,3,0,0,1,93.21,69.76ZM6.79,35.31a2.05,2.05,0,0,0-2,2V66.72a2,2,0,0,0,2,2H93.21a2,2,0,0,0,2-2V37.36a2.05,2.05,0,0,0-2-2Z" /><path fill="#37cfee" d="M14.73,43.7H9.93V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M17.91,50.86h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M17.91,58h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M17.91,65.17h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M24,43.7H19.21V38.91H24Zm-3.79-1H23V39.91H20.21Z" /><path fill="#37cfee" d="M24,50.86H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M24,58H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M30,58h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M24,65.17H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M30,65.17h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,65.17H31.22v-4.8H60Zm-27.82-1H59v-2.8H32.22Z" /><path fill="#37cfee" d="M36,58h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z" /><path fill="#37cfee" d="M42,58h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z" /><path fill="#37cfee" d="M48,58h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z" /><path fill="#37cfee" d="M54,58h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,58h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z" /><path fill="#37cfee" d="M66,58H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M66,65.17H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M72.05,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M84.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M90.07,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M72.05,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M30,50.86h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M36,50.86h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z" /><path fill="#37cfee" d="M42,50.86h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z" /><path fill="#37cfee" d="M48,50.86h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z" /><path fill="#37cfee" d="M54,50.86h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,50.86h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z" /><path fill="#37cfee" d="M66,50.86H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M72.05,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M90.07,57.83H82.19a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h6.88V47.06H81.39V50.8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V46.06h9.68Z" /><path fill="#37cfee" d="M30,43.7h-4.8V38.91H30Zm-3.8-1H29V39.91h-2.8Z" /><path fill="#37cfee" d="M36,43.7h-4.8V38.91H36Zm-3.8-1H35V39.91h-2.8Z" /><path fill="#37cfee" d="M42,43.7h-4.8V38.91H42Zm-3.8-1H41V39.91h-2.8Z" /><path fill="#37cfee" d="M48,43.7h-4.8V38.91H48Zm-3.8-1H47V39.91h-2.8Z" /><path fill="#37cfee" d="M54,43.7h-4.8V38.91H54Zm-3.8-1H53V39.91h-2.8Z" /><path fill="#37cfee" d="M60,43.7h-4.8V38.91H60Zm-3.8-1H59V39.91h-2.8Z" /><path fill="#37cfee" d="M66,43.7H61.25V38.91H66Zm-3.79-1H65V39.91H62.25Z" /><path fill="#37cfee" d="M72.05,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M78.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M84.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M90.07,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M82.19,57.83a.5.5,0,0,1-.5-.5v-6h-.8a.5.5,0,0,1,0-1h1.8v7A.5.5,0,0,1,82.19,57.83Z" /></svg>
                                <h4>Rédaction optimisée pour maximiser votre visibilité</h4>
                            </div>
                            <div className="w-full md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><polygon fill="#37cfee" points="82.273,66.771 76.002,66.771 76.002,45.637 86.531,45.637 86.531,55.763 86.814,55.763 86.814,45.354   75.719,45.354 75.719,67.054 82.273,67.054 " /><path fill="#37cfee" d="M82.273,69.791h-6.556c-0.685,0-1.24-0.488-1.24-1.088V45.2c0-0.6,0.556-1.088,1.24-1.088h11.098  c0.684,0,1.24,0.488,1.24,1.088v10.563h0.566V45.2c0-0.912-0.811-1.654-1.807-1.654H75.718c-0.996,0-1.807,0.742-1.807,1.654v23.503  c0,0.912,0.811,1.654,1.807,1.654h6.556V69.791z" /><g><polygon fill="#37cfee" points="24.814,27.043 24.814,36.106 25.097,36.106 25.097,27.327 82.635,27.327 82.635,42.313 82.918,42.313    82.918,27.043  " /><rect fill="#37cfee" x="35.06" y="62.473" width="37.618" height="0.283" /></g><g><path fill="#37cfee" d="M59.244,68.371c0,0.313,0.254,0.566,0.566,0.566h8.447v1.203H41.265v-1.203h8.447c0.312,0,0.566-0.254,0.566-0.566v-2.878   H35.06v0.565h14.652v2.313h-8.447c-0.312,0-0.566,0.254-0.566,0.566v1.203c0,0.313,0.254,0.566,0.566,0.566h26.993   c0.312,0,0.566-0.254,0.566-0.566v-1.203c0-0.313-0.255-0.566-0.566-0.566h-8.447v-2.313h12.867v-0.565H59.244V68.371z" /><path fill="#37cfee" d="M83.027,25.288H24.702c-0.937,0-1.699,0.762-1.699,1.699v9.12h0.566v-9.12c0-0.624,0.508-1.132,1.132-1.132h58.326   c0.625,0,1.133,0.508,1.133,1.132v15.327h0.566V26.986C84.727,26.05,83.965,25.288,83.027,25.288z" /></g><path fill="#37cfee" d="M32.181,74.713H6.699C5.762,74.713,5,73.95,5,73.014V39.037c0-0.937,0.762-1.699,1.699-1.699h25.482  c0.937,0,1.699,0.762,1.699,1.699v33.977C33.88,73.95,33.118,74.713,32.181,74.713L32.181,74.713z M6.699,37.905  c-0.625,0-1.132,0.508-1.132,1.132v33.977c0,0.625,0.508,1.133,1.132,1.133h25.482c0.625,0,1.132-0.508,1.132-1.133V39.037  c0-0.624-0.508-1.132-1.132-1.132H6.699L6.699,37.905z" /><path fill="#37cfee" d="M32.124,70.466H6.756V39.149h25.368V70.466L32.124,70.466z M7.039,70.183h24.802v-30.75H7.039V70.183L7.039,70.183z" /><path fill="#37cfee" d="M91.728,74.713h-5.391v-2.479H84.86c-0.788,0-1.429-0.59-1.429-1.315V60.912c0-0.725,0.641-1.313,1.429-1.313h1.477v-2.692  h5.391v2.692h1.477c0.788,0,1.429,0.589,1.429,1.313v1.32H95v1.831h-0.367v1.624h0.237V69h-0.237v1.919  c0,0.726-0.641,1.315-1.429,1.315h-1.477V74.713L91.728,74.713z M86.903,74.146h4.259v-2.479h2.042c0.476,0,0.862-0.336,0.862-0.749  v-2.484h0.237v-2.181h-0.237v-2.756h0.367v-0.699h-0.367v-1.887c0-0.412-0.387-0.747-0.862-0.747h-2.042v-2.692h-4.259v2.692H84.86  c-0.476,0-0.862,0.335-0.862,0.747v10.007c0,0.413,0.387,0.749,0.862,0.749h2.043V74.146L86.903,74.146z" /><path fill="#37cfee" d="M93.219,70.711h-8.373v-9.803h8.373V70.711L93.219,70.711z M85.129,70.428h7.807v-9.236h-7.807V70.428L85.129,70.428z" /></svg>
                                <h4>Création d'un site web accessible tous supports</h4>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
                            <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" text="Votre devis gratuit" />
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-1/2 px-10 mt-16 lg:-mt-64 mb-32">
                    <h3 className="century text-3xl text-center">
                        En 2016, <span className="text-bleu">71 % des TPE de l’industrie</span> ayant un site web y diffusent des descriptions de biens ou de services, ou des listes de prix.
            </h3>
                    <br />
                    <p className="text-center century"><b>Source :</b> <a className="text-bleu hover:text-black" href="https://www.insee.fr/fr/statistiques/4238621?sommaire=4238635" target="_blank" rel="noreferrer">insee.fr</a></p>
                </section>
                <section className="text-center text-black text-2xl century mx-12 mt-8 lg:mx-0">
                    <h2 className="century leading-none">Répondre à vos<br /><span className="text-6xl text-bleu font-bold">BESOINS</span></h2>
                    <hr className="blue"></hr>
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Notre rôle : mettre en place un projet adapté à l'image de votre entreprise.</h3>
                </section>
                <section className="w-full my-10 flex flex-col lg:flex-row">
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + siteinternet + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Site internet</span><br /><span className="font-bold text-5xl md:text-6xl">CATALOGUE</span></h3>
                        <p className="text century -mt-5 lg:mt-0 text-lg lg:text-sm xl:text-lg">Pour un <strong className="font-normal">industriel</strong>, <strong className="font-normal">créer un site internet</strong> doit servir à promouvoir son savoir-faire et ses produits en vue de mettre en avant la qualité de ces derniers. En plus des avantages du <strong className="font-normal">site vitrine</strong>, le <strong className="font-normal">site catalogue</strong> permet de <strong className="font-normal">créer des fiches sur-mesure</strong> adaptées à chaque produit. <br /><br />Le <strong className="font-normal">site internet catalogue</strong> n’est pas destiné à la vente (il est différent du <strong className="font-normal">site e-commerce</strong> consacré à la <strong className="font-normal">vente en ligne</strong>), mais conserve tous les avantages des <strong className="font-normal">sites vitrines et e-commerce</strong>. Le catalogue est parfaitement adapté pour les <strong className="font-normal">industriels</strong> souhaitant promouvoir leurs procédés.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Référencement</span><br /><span className="font-bold text-6xl">NATUREL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg"><strong className="font-normal">Acquérir de la visibilité pour son site web</strong> va permettre de <strong className="font-normal">générer du trafic</strong> ayant pour finalité d'<strong className="font-normal">obtenir des contacts</strong>. Ceci est vrai pour tous les <strong className="font-normal">sites web</strong>. Afin de répondre à ces <strong className="font-normal">objectifs de visibilité</strong>, nous misons sur le <strong className="font-normal">référencement naturel</strong>. <br /><br />Le <strong className="font-normal">référencement naturel</strong> est une discipline qui a pour principe d’<strong className="font-normal">optimiser des pages web</strong> pour faciliter leur lecture ainsi que leur compréhension par les <strong className="font-normal">moteurs de recherche</strong>. Son intérêt réside dans le fait d’<strong className="font-normal">améliorer le positionnement d’une page dans les résultats des moteurs de recherche</strong> en vue de maximiser sa visibilité.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Design</span><br /><span className="font-bold text-6xl">ACTUEL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">L’<strong className="font-normal">ergonomie</strong> et l’<strong className="font-normal">expérience utilisateur</strong> sont deux points clés d’un <strong className="font-normal">site internet</strong> réussi. <strong className="font-normal">Pour créer un site web</strong> à votre image, il est nécessaire de construire un <strong className="font-normal">webdesign</strong> qui va être adapté à votre <strong className="font-normal">charte graphique</strong>, mais également aux dernières <strong className="font-normal">tendances du Web</strong>. <br /><br />De plus, le site doit être rapide à charger et doit bénéficier d’une accessibilité sans faille. Mettre en place un <strong className="font-normal">site web responsive</strong> apporte une expérience adaptée à l’utilisateur quel que soit l’appareil utilisé lors de la visite de <strong className="font-normal">votre site web</strong>.</p>
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
                            <svg width="50px" className="mx-auto block" viewBox="0 0 512 640"><g><g><g><g><path fill="#37cfee" d="M386.333,134.135H45.667c-13.05,0-23.667-10.617-23.667-23.667V49.802c0-13.05,10.617-23.667,23.667-23.667h340.667      c13.05,0,23.667,10.617,23.667,23.667v60.667C410,123.519,399.383,134.135,386.333,134.135z M45.667,34.135      C37.028,34.135,30,41.163,30,49.802v60.667c0,8.639,7.028,15.667,15.667,15.667h340.667c8.639,0,15.667-7.028,15.667-15.667      V49.802c0-8.639-7.028-15.667-15.667-15.667H45.667z" /></g><g><path fill="#37cfee" d="M406,74.135H216c-2.209,0-4-1.791-4-4s1.791-4,4-4h190c2.209,0,4,1.791,4,4S408.209,74.135,406,74.135z" /></g><g><path fill="#37cfee" d="M71,94.135c-4.962,0-9-4.038-9-9s4.038-9,9-9s9,4.038,9,9S75.962,94.135,71,94.135z M71,84.135c-0.551,0-1,0.449-1,1      s0.449,1,1,1s1-0.449,1-1S71.551,84.135,71,84.135z" /></g><g><path fill="#37cfee" d="M131,94.135c-4.962,0-9-4.038-9-9s4.038-9,9-9s9,4.038,9,9S135.962,94.135,131,94.135z M131,84.135      c-0.551,0-1,0.449-1,1s0.449,1,1,1s1-0.449,1-1S131.551,84.135,131,84.135z" /></g><g><path fill="#37cfee" d="M386.333,234.135H45.667c-13.05,0-23.667-10.617-23.667-23.667v-60.667c0-13.05,10.617-23.667,23.667-23.667h340.667      c13.05,0,23.667,10.617,23.667,23.667v60.667C410,223.519,399.383,234.135,386.333,234.135z M45.667,134.135      c-8.639,0-15.667,7.028-15.667,15.667v60.667c0,8.639,7.028,15.667,15.667,15.667h340.667c8.639,0,15.667-7.028,15.667-15.667      v-60.667c0-8.639-7.028-15.667-15.667-15.667H45.667z" /></g><g><path fill="#37cfee" d="M406,174.135H216c-2.209,0-4-1.791-4-4s1.791-4,4-4h190c2.209,0,4,1.791,4,4S408.209,174.135,406,174.135z" /></g><g><path fill="#37cfee" d="M71,194.135c-4.962,0-9-4.038-9-9s4.038-9,9-9s9,4.038,9,9S75.962,194.135,71,194.135z M71,184.135      c-0.551,0-1,0.449-1,1s0.449,1,1,1s1-0.449,1-1S71.551,184.135,71,184.135z" /></g><g><path fill="#37cfee" d="M131,194.135c-4.962,0-9-4.038-9-9s4.038-9,9-9s9,4.038,9,9S135.962,194.135,131,194.135z M131,184.135      c-0.551,0-1,0.449-1,1s0.449,1,1,1s1-0.449,1-1S131.551,184.135,131,184.135z" /></g><g><path fill="#37cfee" d="M406,274.135H216c-2.209,0-4-1.791-4-4s1.791-4,4-4h190c2.209,0,4,1.791,4,4S408.209,274.135,406,274.135z" /></g><g><path fill="#37cfee" d="M71,294.135c-4.962,0-9-4.037-9-9s4.038-9,9-9s9,4.037,9,9S75.962,294.135,71,294.135z M71,284.135      c-0.551,0-1,0.448-1,1s0.449,1,1,1s1-0.448,1-1S71.551,284.135,71,284.135z" /></g><g><path fill="#37cfee" d="M131,294.135c-4.962,0-9-4.037-9-9s4.038-9,9-9s9,4.037,9,9S135.962,294.135,131,294.135z M131,284.135      c-0.551,0-1,0.448-1,1s0.449,1,1,1s1-0.448,1-1S131.551,284.135,131,284.135z" /></g><g><path fill="#37cfee" d="M326,374.135H216c-2.209,0-4-1.791-4-4s1.791-4,4-4h110c2.209,0,4,1.791,4,4S328.209,374.135,326,374.135z" /></g><g><path fill="#37cfee" d="M71,394.135c-4.962,0-9-4.037-9-9s4.038-9,9-9s9,4.037,9,9S75.962,394.135,71,394.135z M71,384.135      c-0.551,0-1,0.448-1,1s0.449,1,1,1s1-0.448,1-1S71.551,384.135,71,384.135z" /></g><g><path fill="#37cfee" d="M131,394.135c-4.962,0-9-4.037-9-9s4.038-9,9-9s9,4.037,9,9S135.962,394.135,131,394.135z M131,384.135      c-0.551,0-1,0.448-1,1s0.449,1,1,1s1-0.448,1-1S131.551,384.135,131,384.135z" /></g><g><path fill="#37cfee" d="M326.01,334.135H45.667c-13.05,0-23.667-10.616-23.667-23.666v-60.667c0-13.05,10.617-23.667,23.667-23.667h340.667      c13.05,0,23.667,10.617,23.667,23.667v45.503c0,1.541-0.886,2.945-2.276,3.609c-0.821,0.393-1.73,0.485-2.585,0.297      c-17.73,11.234-37.115,16.927-57.655,16.927c-5.687,0-11.539-0.438-17.454-1.306c-0.003,4.721-0.01,9.226-0.017,13.536      l-0.003,1.772C330.006,332.348,328.217,334.135,326.01,334.135z M45.667,234.135c-8.639,0-15.667,7.028-15.667,15.667v60.667      c0,8.639,7.028,15.666,15.667,15.666h276.349c0.009-5.063,0.016-10.391,0.016-16.018c0-1.188,0.527-2.314,1.44-3.074      c0.912-0.76,2.114-1.078,3.284-0.859c7.041,1.297,14.015,1.954,20.728,1.954c19.438,0,37.773-5.522,54.517-16.418v-41.918      c0-8.639-7.028-15.667-15.667-15.667H45.667z" /></g><g><path fill="#37cfee" d="M338.357,434.135H45.667c-13.05,0-23.667-10.616-23.667-23.666v-60.666c0-13.051,10.617-23.668,23.667-23.668H326.01      c1.062,0,2.08,0.422,2.83,1.174c0.751,0.751,1.171,1.77,1.17,2.832c-0.007,5.045-0.013,9.831-0.008,14.348      c0.028,31.188,0.554,48.436,3.457,62.106c1.736,8.172,4.294,14.781,8.29,21.42c0.736,1.177,0.813,2.662,0.183,3.916      C341.252,433.282,339.869,434.135,338.357,434.135z M45.667,334.135c-8.639,0-15.667,7.028-15.667,15.668v60.666      c0,8.639,7.028,15.666,15.667,15.666h285.972c-2.669-5.519-4.615-11.333-6.006-17.878c-3.051-14.367-3.602-32.007-3.631-63.761      c-0.004-3.311-0.001-6.766,0.003-10.361H45.667z" /></g><g><path fill="#37cfee" d="M425.21,485.865h-40.388c-1.075,0-2.104-0.433-2.857-1.2c-3.613-3.688-7.004-7.125-10.188-10.351      c-17.729-17.966-29.442-29.835-36.854-42.128c-4.431-7.35-7.383-14.953-9.29-23.93c-3.051-14.366-3.602-32.007-3.631-63.761      c-0.005-5.377,0.003-11.11,0.013-17.24c0.008-5.396,0.017-11.1,0.017-17.139c0-1.188,0.527-2.313,1.44-3.074      c0.912-0.76,2.114-1.078,3.284-0.859c7.042,1.297,14.016,1.954,20.728,1.954c19.75,0,38.363-5.702,55.322-16.948      c1.48-0.98,3.431-0.869,4.787,0.274c7.09,5.969,15.588,10.364,25.26,13.063c8.073,2.252,17.213,3.395,27.166,3.395      c7.176-0.001,14.969-0.594,23.162-1.764c1.151-0.16,2.311,0.179,3.187,0.938s1.379,1.862,1.379,3.021      c0,8.249,0.021,15.864,0.041,22.915c0.103,36.742,0.164,58.92-3.206,75.204c-4.774,23.068-16.608,35.256-42.536,61.958      c-4.159,4.284-8.874,9.14-13.945,14.437C427.345,485.42,426.301,485.865,425.21,485.865z M386.502,477.865h37.001      c4.641-4.838,8.959-9.285,12.803-13.244c25.56-26.322,36.139-37.218,40.441-58.006c3.202-15.472,3.141-37.336,3.04-73.561      c-0.016-5.74-0.033-11.854-0.039-18.379c-6.911,0.827-13.529,1.244-19.729,1.245c-10.68,0-20.543-1.241-29.316-3.689      c-9.756-2.722-18.469-7.015-25.944-12.78c-17.627,11.074-36.881,16.687-57.274,16.687c-5.687,0-11.538-0.438-17.454-1.306      c-0.003,4.319-0.009,8.461-0.015,12.436c-0.009,6.123-0.018,11.85-0.013,17.221c0.028,31.188,0.554,48.436,3.457,62.106      c1.739,8.189,4.304,14.809,8.315,21.461c6.922,11.48,18.369,23.081,35.697,40.64      C380.313,471.575,383.32,474.622,386.502,477.865z" /></g><g><path fill="#37cfee" d="M486,264.135h-30c-2.209,0-4-1.791-4-4s1.791-4,4-4h30c2.209,0,4,1.791,4,4S488.209,264.135,486,264.135z" /></g><g><path fill="#37cfee" d="M486,234.135h-30c-2.209,0-4-1.791-4-4s1.791-4,4-4h30c2.209,0,4,1.791,4,4S488.209,234.135,486,234.135z" /></g><g><path fill="#37cfee" d="M486,204.135h-30c-2.209,0-4-1.791-4-4s1.791-4,4-4h30c2.209,0,4,1.791,4,4S488.209,204.135,486,204.135z" /></g><g><path fill="#37cfee" d="M486,174.135h-30c-2.209,0-4-1.791-4-4s1.791-4,4-4h30c2.209,0,4,1.791,4,4S488.209,174.135,486,174.135z" /></g><g><path fill="#37cfee" d="M486,144.135h-30c-2.209,0-4-1.791-4-4s1.791-4,4-4h30c2.209,0,4,1.791,4,4S488.209,144.135,486,144.135z" /></g><g><path fill="#37cfee" d="M486,114.135h-30c-2.209,0-4-1.791-4-4s1.791-4,4-4h30c2.209,0,4,1.791,4,4S488.209,114.135,486,114.135z" /></g><g><path fill="#37cfee" d="M424.857,434.135c-1.057,0-2.11-0.416-2.896-1.24c-1.524-1.6-1.463-4.132,0.136-5.655      c26.367-25.126,18.91-65.938,18.832-66.348c-0.415-2.168,1.004-4.265,3.171-4.683c2.17-0.414,4.264,0.997,4.684,3.165      c0.357,1.843,8.41,45.472-21.167,73.656C426.842,433.769,425.849,434.135,424.857,434.135z" /></g></g></g></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Conforme à la RGPD</span></h4>
                            <p>Nos <strong className="font-normal">sites web</strong> sont créés dans le respect de la règlementation européenne sur la <strong className="font-normal">protection des données personnelles</strong>.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 100 125"><g><path fill="none" d="M38.661,25.619h22.678c-0.073-0.144-0.124-0.301-0.124-0.474v-4.491c0-0.527,0.39-0.945,0.892-1.03v-1.666   c0-1.634-1.612-2.964-3.594-2.964H41.488c-1.982,0-3.595,1.329-3.595,2.964v1.666c0.502,0.086,0.891,0.503,0.891,1.03v4.491   C38.785,25.317,38.734,25.474,38.661,25.619z" /><rect x="63.345" y="21.719" fill="none" width="3.916" height="2.36" /><path fill="none" d="M35.763,19.589v-1.631c0-2.809,2.568-5.094,5.725-5.094h17.024c3.156,0,5.725,2.285,5.725,5.094v1.631h2.131   v-1.631c0-3.984-3.524-7.225-7.856-7.225H41.488c-4.332,0-7.857,3.241-7.857,7.225v1.631H35.763z" /><rect x="32.739" y="21.719" fill="none" width="3.915" height="2.36" /><path fill="none" d="M87.776,65.219H77.194v4.112c0,2.262-1.84,4.103-4.102,4.103c-2.261,0-4.102-1.84-4.102-4.103v-4.112H31.008   v4.112c0,2.262-1.84,4.103-4.1,4.103c-2.261,0-4.102-1.84-4.102-4.103v-4.112H12.225c-1.986,0-3.787-0.806-5.095-2.108v21.063   c0,2.809,2.285,5.094,5.095,5.094h75.551c2.809,0,5.093-2.285,5.093-5.094V63.112C91.563,64.413,89.762,65.219,87.776,65.219z" /><path fill="none" d="M7.13,57.995c0,2.809,2.285,5.094,5.095,5.094h10.581V59.32c0-2.261,1.84-4.102,4.102-4.102   c2.261,0,4.1,1.84,4.1,4.102v3.769h37.983V59.32c0-2.261,1.84-4.102,4.102-4.102c2.261,0,4.102,1.84,4.102,4.102v3.769h10.582   c2.809,0,5.093-2.285,5.093-5.094V32.844c0-2.81-2.285-5.095-5.093-5.095H12.225c-2.81,0-5.095,2.285-5.095,5.095V57.995z" /><path fill="#37cfee" d="M26.908,71.303c1.086,0,1.97-0.885,1.97-1.972V59.32c0-1.087-0.884-1.971-1.97-1.971   c-1.087,0-1.971,0.884-1.971,1.971v4.829c0,0.002,0.001,0.003,0.001,0.005s-0.001,0.003-0.001,0.005v5.172   C24.937,70.418,25.821,71.303,26.908,71.303z" /><path fill="#37cfee" d="M73.093,71.303c1.087,0,1.971-0.885,1.971-1.972V59.32c0-1.087-0.884-1.971-1.971-1.971   c-1.087,0-1.971,0.884-1.971,1.971v10.011C71.122,70.418,72.006,71.303,73.093,71.303z" /><path fill="#37cfee" d="M94.599,30.491c-0.979-2.831-3.664-4.872-6.823-4.872H69.268c0.073-0.144,0.124-0.301,0.124-0.474v-4.491   c0-0.528-0.39-0.946-0.894-1.031v-1.666c0-5.158-4.48-9.356-9.986-9.356H41.488c-5.507,0-9.987,4.197-9.987,9.356v1.666   c-0.502,0.086-0.892,0.503-0.892,1.03v4.491c0,0.173,0.051,0.33,0.124,0.474H12.225c-3.159,0-5.845,2.042-6.824,4.872   C5.162,30.686,5,30.971,5,31.304v1.539v25.151v26.179c0,3.983,3.241,7.224,7.225,7.224h75.551c3.983,0,7.224-3.241,7.224-7.224   V57.995V32.844v-1.539C95,30.971,94.838,30.686,94.599,30.491z M36.654,21.719v2.36h-3.915v-2.36H36.654z M37.893,19.624v-1.666   c0-1.634,1.613-2.964,3.595-2.964h17.024c1.982,0,3.594,1.329,3.594,2.964v1.666c-0.502,0.086-0.892,0.503-0.892,1.03v4.491   c0,0.173,0.051,0.33,0.124,0.474H38.661c0.073-0.144,0.124-0.301,0.124-0.474v-4.491C38.785,20.127,38.396,19.709,37.893,19.624z    M67.261,21.719v2.36h-3.916v-2.36H67.261z M41.488,10.732h17.024c4.331,0,7.856,3.241,7.856,7.225v1.631h-2.131v-1.631   c0-2.809-2.568-5.094-5.725-5.094H41.488c-3.157,0-5.725,2.285-5.725,5.094v1.631h-2.132v-1.631   C33.631,13.974,37.156,10.732,41.488,10.732z M12.225,27.749h75.551c2.809,0,5.093,2.285,5.093,5.095v25.151   c0,2.809-2.285,5.094-5.093,5.094H77.194V59.32c0-2.261-1.84-4.102-4.102-4.102c-2.261,0-4.102,1.84-4.102,4.102v3.769H31.008   V59.32c0-2.261-1.84-4.102-4.1-4.102c-2.261,0-4.102,1.84-4.102,4.102v3.769H12.225c-2.81,0-5.095-2.285-5.095-5.094V32.844   C7.13,30.034,9.416,27.749,12.225,27.749z M71.122,59.32c0-1.087,0.884-1.971,1.971-1.971c1.087,0,1.971,0.884,1.971,1.971v10.011   c0,1.087-0.884,1.972-1.971,1.972c-1.087,0-1.971-0.885-1.971-1.972V59.32z M24.937,64.159c0-0.002,0.001-0.003,0.001-0.005   s-0.001-0.003-0.001-0.005V59.32c0-1.087,0.884-1.971,1.971-1.971c1.086,0,1.97,0.884,1.97,1.971v10.011   c0,1.087-0.884,1.972-1.97,1.972c-1.087,0-1.971-0.885-1.971-1.972V64.159z M87.776,89.268H12.225c-2.81,0-5.095-2.285-5.095-5.094   V63.111c1.307,1.302,3.109,2.108,5.095,2.108h10.581v4.112c0,2.262,1.84,4.103,4.102,4.103c2.261,0,4.1-1.84,4.1-4.103v-4.112   h37.983v4.112c0,2.262,1.84,4.103,4.102,4.103c2.261,0,4.102-1.84,4.102-4.103v-4.112h10.582c1.986,0,3.786-0.806,5.093-2.108   v21.062C92.87,86.982,90.585,89.268,87.776,89.268z" /></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Mise en avant des réalisations</span></h4>
                            <p>Nous créons un catalogue de produits pour mettre en avant les spécificités techniques et la qualité de vos fabrications.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 512 640"><g><g><g><path fill="#37cfee" d="M341.363,239.523c-1.003,0-2.005-0.382-2.771-1.146c-1.532-1.53-1.534-4.013-0.004-5.546l18.206-18.236     c1.529-1.532,4.013-1.535,5.546-0.004c1.533,1.53,1.535,4.013,0.005,5.546l-18.206,18.236     C343.373,239.139,342.367,239.523,341.363,239.523z" /></g><g><path fill="#37cfee" d="M360.582,264.481c-1.354,0-2.672-0.702-3.398-1.96c-1.084-1.874-0.443-4.272,1.432-5.357l22.277-12.882     c1.873-1.084,4.273-0.443,5.357,1.432s0.443,4.274-1.432,5.358l-22.277,12.882C361.924,264.312,361.248,264.481,360.582,264.481z     " /></g><g><path fill="#37cfee" d="M372.608,293.595c-1.733,0-3.318-1.157-3.787-2.911c-0.558-2.093,0.686-4.241,2.778-4.801l24.87-6.637     c2.092-0.556,4.241,0.685,4.801,2.778c0.558,2.093-0.686,4.241-2.778,4.801l-24.87,6.637     C373.283,293.552,372.943,293.595,372.608,293.595z" /></g><g><path fill="#37cfee" d="M402.446,324.871h-25.709c-2.165,0-3.921-1.756-3.921-3.922s1.756-3.922,3.921-3.922h25.709     c2.165,0,3.921,1.756,3.921,3.922S404.611,324.871,402.446,324.871z" /></g><g><path fill="#37cfee" d="M397.482,362.785c-0.338,0-0.683-0.044-1.025-0.137l-24.869-6.721c-2.09-0.565-3.327-2.719-2.763-4.81     c0.565-2.09,2.714-3.33,4.81-2.762l24.869,6.721c2.091,0.564,3.327,2.718,2.763,4.809     C400.795,361.635,399.212,362.785,397.482,362.785z" /></g><g><path fill="#37cfee" d="M382.852,398.061c-0.666,0-1.341-0.171-1.96-0.528l-22.277-12.885c-1.874-1.085-2.515-3.483-1.431-5.358     c1.084-1.874,3.481-2.516,5.358-1.432l22.277,12.885c1.874,1.085,2.515,3.484,1.431,5.359     C385.523,397.357,384.206,398.061,382.852,398.061z" /></g><g><path fill="#37cfee" d="M359.569,428.369c-1.003,0-2.004-0.382-2.77-1.146l-18.206-18.164c-1.533-1.529-1.536-4.013-0.007-5.546     c1.529-1.534,4.012-1.535,5.546-0.007l18.206,18.164c1.533,1.53,1.536,4.014,0.007,5.546     C361.58,427.985,360.574,428.369,359.569,428.369z" /></g><g><path fill="#37cfee" d="M329.219,451.726c-1.357,0-2.678-0.706-3.402-1.967l-12.839-22.317c-1.08-1.878-0.434-4.275,1.443-5.354     c1.877-1.082,4.275-0.436,5.354,1.442l12.839,22.317c1.08,1.878,0.434,4.274-1.442,5.354     C330.555,451.557,329.883,451.726,329.219,451.726z" /></g><g><path fill="#37cfee" d="M293.897,466.283c-1.732,0-3.316-1.155-3.786-2.908l-6.637-24.799c-0.56-2.092,0.683-4.242,2.775-4.803     c2.094-0.557,4.242,0.682,4.802,2.774l6.637,24.8c0.561,2.092-0.683,4.242-2.774,4.802     C294.574,466.24,294.233,466.283,293.897,466.283z" /></g><g><path fill="#37cfee" d="M255.985,471.316c-2.166,0-3.922-1.756-3.922-3.921v-25.751c0-2.166,1.756-3.922,3.922-3.922s3.921,1.756,3.921,3.922     v25.751C259.906,469.561,258.151,471.316,255.985,471.316z" /></g><g><path fill="#37cfee" d="M218.074,466.283c-0.338,0-0.682-0.044-1.024-0.137c-2.091-0.563-3.328-2.716-2.764-4.807l6.694-24.799     c0.565-2.092,2.719-3.33,4.809-2.765c2.091,0.564,3.328,2.716,2.764,4.808l-6.694,24.799     C221.386,465.132,219.803,466.283,218.074,466.283z" /></g><g><path fill="#37cfee" d="M182.751,451.726c-0.666,0-1.34-0.171-1.958-0.528c-1.875-1.082-2.517-3.481-1.433-5.356l12.896-22.317     c1.084-1.875,3.482-2.517,5.358-1.434c1.875,1.083,2.517,3.482,1.433,5.357l-12.896,22.317     C185.424,451.022,184.106,451.726,182.751,451.726z" /></g><g><path fill="#37cfee" d="M152.459,428.369c-1.004,0-2.008-0.383-2.774-1.15c-1.531-1.531-1.53-4.014,0.002-5.545l18.177-18.164     c1.532-1.531,4.015-1.531,5.546,0.002c1.531,1.532,1.53,4.015-0.002,5.545l-18.178,18.164     C154.465,427.986,153.462,428.369,152.459,428.369z" /></g><g><path fill="#37cfee" d="M129.178,398.061c-1.354,0-2.672-0.703-3.398-1.959c-1.084-1.875-0.444-4.274,1.431-5.359l22.276-12.885     c1.876-1.082,4.274-0.443,5.358,1.432c1.084,1.875,0.444,4.273-1.431,5.358l-22.276,12.885     C130.519,397.89,129.844,398.061,129.178,398.061z" /></g><g><path fill="#37cfee" d="M114.543,362.785c-1.728,0-3.311-1.15-3.783-2.899c-0.565-2.091,0.672-4.244,2.763-4.809l24.872-6.721     c2.09-0.565,4.244,0.672,4.809,2.762c0.565,2.091-0.671,4.244-2.763,4.81l-24.872,6.721     C115.226,362.741,114.881,362.785,114.543,362.785z" /></g><g><path fill="#37cfee" d="M135.292,324.871h-25.737c-2.166,0-3.921-1.756-3.921-3.922s1.756-3.922,3.921-3.922h25.737     c2.166,0,3.922,1.756,3.922,3.922S137.457,324.871,135.292,324.871z" /></g><g><path fill="#37cfee" d="M139.419,293.595c-0.334,0-0.674-0.043-1.013-0.133l-24.872-6.637c-2.092-0.56-3.336-2.708-2.778-4.801     s2.706-3.334,4.8-2.778l24.872,6.637c2.092,0.56,3.336,2.708,2.778,4.801C142.738,292.438,141.152,293.595,139.419,293.595z" /></g><g><path fill="#37cfee" d="M151.446,264.481c-0.666,0-1.342-0.17-1.959-0.527l-22.276-12.882c-1.875-1.084-2.516-3.483-1.432-5.358     c1.084-1.874,3.484-2.516,5.358-1.432l22.276,12.882c1.875,1.085,2.516,3.483,1.432,5.357     C154.118,263.779,152.8,264.481,151.446,264.481z" /></g><g><path fill="#37cfee" d="M170.637,239.523c-1.006,0-2.011-0.384-2.778-1.153l-18.177-18.236c-1.529-1.534-1.525-4.017,0.009-5.546     c1.534-1.528,4.017-1.524,5.546,0.009l18.178,18.236c1.529,1.534,1.525,4.017-0.009,5.546     C172.64,239.142,171.638,239.523,170.637,239.523z" /></g><g><path fill="#37cfee" d="M248.857,172.04c-16.403,0-16.624-0.088-17.553-0.459c-2.012-0.803-2.991-3.084-2.188-5.096     c0.698-1.748,2.515-2.718,4.295-2.414c0.655,0.043,3.478,0.125,15.446,0.125c17.667,0,43.974-0.177,44.237-0.179     c0.01,0,0.019,0,0.028,0c2.153,0,3.906,1.738,3.92,3.895c0.015,2.166-1.729,3.934-3.895,3.948     C292.884,171.862,266.551,172.04,248.857,172.04z" /></g><g><path fill="#37cfee" d="M255.985,428.369c-24.059,0-46.8-7.764-65.766-22.453c-1.712-1.326-2.025-3.79-0.699-5.502     c1.327-1.713,3.791-2.025,5.502-0.698c17.578,13.614,38.659,20.81,60.963,20.81c54.954,0,99.662-44.67,99.662-99.576     c0-36.993-20.295-70.729-52.966-88.044c-1.283-0.68-2.085-2.013-2.085-3.465v-34.223h-89.164v34.223     c0,1.452-0.803,2.785-2.085,3.465c-32.671,17.314-52.967,51.05-52.967,88.044c0,14.801,3.166,29.039,9.409,42.32     c0.921,1.961,0.08,4.296-1.881,5.218c-1.959,0.921-4.295,0.081-5.217-1.88c-6.738-14.335-10.154-29.696-10.154-45.658     c0-39.111,21.033-74.849,55.052-93.84v-35.813c0-2.166,1.756-3.921,3.921-3.921h97.007c2.166,0,3.922,1.756,3.922,3.921v35.813     c34.018,18.992,55.052,54.729,55.052,93.84C363.491,380.181,315.264,428.369,255.985,428.369z" /></g><g><path fill="#37cfee" d="M293.121,195.218h-74.242c-2.166,0-3.921-1.756-3.921-3.922v-36.153c0-2.166,1.756-3.921,3.921-3.921h74.242     c2.165,0,3.921,1.756,3.921,3.921v36.153C297.042,193.462,295.286,195.218,293.121,195.218z M222.801,187.375h66.398v-28.31     h-66.398V187.375z" /></g><g><path fill="#37cfee" d="M286.945,159.064h-61.862c-1.262,0-2.447-0.607-3.184-1.632c-0.737-1.025-0.935-2.342-0.533-3.539l6.319-18.799     c0.537-1.596,2.033-2.672,3.717-2.672h49.195c1.683,0,3.178,1.073,3.716,2.667l6.348,18.799c0.404,1.196,0.207,2.515-0.53,3.541     C289.395,158.456,288.208,159.064,286.945,159.064z M230.539,151.222h50.943l-3.699-10.956h-43.562L230.539,151.222z" /></g><g><path fill="#37cfee" d="M255.985,140.266c-2.166,0-3.922-1.756-3.922-3.921V44.605c0-2.166,1.756-3.922,3.922-3.922s3.921,1.756,3.921,3.922     v91.739C259.906,138.51,258.151,140.266,255.985,140.266z" /></g><g><path fill="#37cfee" d="M209.678,343.901c-1.445,0-2.835-0.802-3.519-2.185c-0.959-1.942-0.164-4.295,1.778-5.254l33.247-16.433V191.296     c0-2.166,1.756-3.921,3.921-3.921c2.166,0,3.922,1.756,3.922,3.921v131.17c0,1.491-0.847,2.854-2.184,3.516l-35.431,17.513     C210.854,343.77,210.262,343.901,209.678,343.901z" /></g><g><path fill="#37cfee" d="M302.292,343.901c-0.584,0-1.176-0.132-1.735-0.407l-35.432-17.513c-1.338-0.661-2.184-2.024-2.184-3.516v-131.17     c0-2.166,1.756-3.921,3.922-3.921c2.165,0,3.921,1.756,3.921,3.921V320.03l33.248,16.433c1.942,0.959,2.737,3.312,1.778,5.254     C305.127,343.099,303.736,343.901,302.292,343.901z" /></g></g></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Promotion du savoir-faire 🇫🇷</span></h4>
                            <p>Le site internet est un très bon moyen pour promouvoir son savoir-faire dans le secteur industriel.</p>
                        </div>
                        <div className="w-full md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#37cfee" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#37cfee" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#37cfee" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>
                            <h4 className="font-bold century"><span className="font-bold">Optimisation SEO</span></h4>
                            <p>Nos sites web sont optimisés pour obtenir une <strong className="font-normal">visibilité maximale</strong> grâce au <strong className="font-normal">référencement naturel</strong>.</p>
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
                    <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center italic century pb-0">Nous travaillons tous les jours avec des industriels <br />pour accroître leur visibilité sur le Web.</h3>
                </section>
                <section className="w-full flex justify-center">
                    <div className="w-full lg:w-2/3 flex flex-col mb-16 lg:flex-row justify-center text-white text-center text-2xl century">
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation1 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="https://mirameca.eu/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Mirameca</h4></a>
                        </div>

                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation2 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="https://sarl-micheletti.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">SARL Micheletti</h4></a>
                        </div>
                        <div className="w-full lg:w-1/3 mx-0 lg:mx-4 mt-8 py-24" style={{ background: '#00000085 url(' + realisation3 + ')', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <a href="https://danhydro.fr/" target="_blank" rel="noreferrer noopener"><h4 className="font-bold text-white hover:text-bleu">Danhydro</h4></a>
                        </div>
                    </div>
                </section>
                <section className="w-full flex my-12 flex-col lg:flex-row text-white bg-bleu century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
                    <div className="w-full lg:w-8/12 text-2xl">
                        <h3>Vous souhaitez travailler avec <span className="font-bold">notre agence</span> ?</h3>
                        <h4>Linkweb est aux côtés des industriels qui souhaitent développer leur projet.</h4>
                    </div>
                    <div className="w-full mx-auto block lg:w-3/12">
                        <RoundButton className="items-center" color="darkgrey" text="Contactez-nous" url="/contact-agence-web-toulouse/" />
                    </div>
                </section>
                <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet pour industriel :<br /><span className="font-bold">Des retours clients positifs</span>
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
                        <div className="text-lg century my-2">Château de Boisverdun</div>
                        <div className="italic">« Nous sommes chez Linkweb depuis 3 ans et je n’ai jamais eu aucun problème les techniciens sont à l’écoute et nous appellent chaque mois pour faire un point! Continuez comme ça ne changez rien!! »</div>
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
                        <div className="text-lg century my-2">Fanny Coiffure</div>
                        <div className="italic">« Ils sont de très bons conseils, le suivi est régulier, si vous voulez changer des choses avant qu’ils ne vous rappellent, c’est toujours possible avec un mail. Je recommande vivement toute l’équipe . »</div>
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
                <section className="max-w-3xl w-full mx-auto px-4 py-0 my-0">
                    <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                        Création de site internet pour industriel :<br /><span className="font-bold">Des spécificités adaptées à votre métier</span>
                    </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="UN SITE WEB POUR PROMOUVOIR LA CRÉATION FRANÇAISE 🇫🇷">
                                <p>Pour un <strong>industriel</strong>, le <strong className="font-normal">site internet</strong> est un outil qui doit être construit à partir de trois axes principaux :
                            <br /><br />
                                    <ul className="px-12 list-decimal">
                                        <li>Mettre en avant son savoir-faire dans son domaine d’activité,</li>
                                        <li>Informer sur les spécificités techniques de ses réalisations,</li>
                                        <li>Promouvoir la qualité de ses fabrications.</li>
                                    </ul><br />
                                    Le site internet va donc être destiné à donner de la <strong className="font-normal">visibilité</strong> à votre entreprise, mais également à <strong className="font-normal">travailler son image</strong>. <strong className="font-normal">Créer un site internet</strong> ouvre la porte à de nouvelles opportunités en termes de <strong className="font-normal">communication</strong> et de développement.
                            <br /><br />
                                    C’est pourquoi, la <strong className="font-normal">création d’un site internet</strong> doit intégrer toutes formes d’opportunités de développement pour votre entreprise. En ce sens, maximiser sa visibilité via le <strong className="font-normal">référencement naturel</strong>, construire un <strong className="font-normal">site web</strong> destiné à promouvoir ses produits et <strong className="font-normal">générer des contacts</strong> vont contribuer à cet idée de développement par le <strong className="font-normal">Web</strong>.</p>
                            </div>
                            <div label="METTRE EN AVANT LES SPÉCIFICITÉS DE SES PRODUITS POUR ATTIRER DE NOUVEAUX PROSPECTS">
                                <p>La promotion de ses produits et de ses méthodes de travail sur son <strong className="font-normal">site web</strong> est indispensable pour un <strong className="font-normal">industriel</strong>. Il est possible de mettre en place ce que l’on appelle des <strong className="font-normal">fiches produits</strong> très similaires à des fiches produits que l’on retrouve sur un <strong className="font-normal">site e-commerce</strong>.
                                <br /><br />
                                    Celles-ci ne sont pas destinées à vendre, mais sont bien présentes pour <strong className="font-normal">informer sur la qualité du produit</strong> et ses spécificités techniques.
                                <br /><br />
                                    Elles sont particulièrement porteuses pour une <strong className="font-normal">entreprise du secteur industriel</strong> souhaitant promouvoir son activité et peuvent donner lieu à des contacts.</p>
                            </div>
                            <div label="METTRE EN PLACE UNE STRATÉGIE ACCROÎTRE SA VISIBILITÉ">
                                <p>Le <strong className="font-normal">référencement naturel</strong> est une porte d’entrée pour les <strong className="font-normal">industriels</strong> souhaitant <strong className="font-normal">développer leur visibilité sur le web</strong>. Le <strong className="font-normal">référencement SEO (Search Engine Optimization)</strong> est une opportunité très pertinente pour se <strong className="font-normal">positionner sur des mots-clés pertinents</strong> et <strong className="font-normal">cibler son audience</strong>.
                            <br /><br />
                                    La <strong className="font-normal">définition d’une stratégie sur-mesure</strong> vous permettra de mettre toutes les chances de votre côté afin d’obtenir des performances le plus rapidement possible et <strong className="font-normal">générer un trafic qualifié</strong> sur <strong className="font-normal">votre site web</strong>, quel que soit votre secteur d'activité (<strong className="font-normal">plasturgiste</strong>, <strong className="font-normal">métallurgiste</strong>, <strong className="font-normal">chimiste</strong>, <strong className="font-normal">ergonome</strong>, <strong className="font-normal">dessinateur</strong>, <strong className="font-normal">chaudronnier</strong>, <strong className="font-normal">constructeur</strong>, <strong className="font-normal">fabricant</strong>, <strong className="font-normal">appareilleur</strong>).</p>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselIndustriel />
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
query lastsThreePostsCreationSitePourIndustrie {
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
export default CreationSitePourIndustrie;




