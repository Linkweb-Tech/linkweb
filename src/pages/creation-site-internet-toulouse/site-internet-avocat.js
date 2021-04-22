import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";

import RoundButtonAccueil from "../../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../../components/roundButtonAccueilMail";
import RoundButton from "../../components/roundButton";



import Accordion from "../../components/accordion";
import SEO from "../../components/seo";
import SimpleMap from "../../components/simpleMap";
import "../../scss/blochover.scss";
import "../../scss/carousel.scss";

import stars from '../../images/stars.png';
import arriereplan from "../../images/creation-site-internet-avocat.jpg";
import siteinternet from "../../images/site-internet-avocat.jpg";
import referencement from "../../images/referencement-site-avocat.jpg";
import webdesign from "../../images/webdesign-site-avocat.jpg";
import realisation1 from "../../images/ledilimmo.jpg";
import realisation2 from "../../images/cdh-experts.jpg";
import realisation3 from "../../images/beatrice-fourteau.jpg";
import map from "../../images/map.jpg";
import surmesure from "../../images/web.svg"
import CarouselAvocat from "../../components/carousel-slides/avocat-slides";

class SiteInternetAvocat extends Component {

    constructor(props) {
        super(props);

        this.metiers = ['avocat', 'juriste', 'pénaliste', 'administrateur', 'notaire', 'huissier'];
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
                    title="Création de site internet Avocat à Toulouse - Linkweb"
                    description="Vous souhaitez créer un site web pour votre cabinet d'avocats à Toulouse (31) ou à Agen (47) ? Linkweb le crée pour vous."
                    url="https://linkweb.fr/creation-site-internet-toulouse/site-internet-avocat/"
                    nom="Créer un site internet internet pour Avocat"
                    slug="creation-site-internet-toulouse/site-internet-avocat/"
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
                            <h1 className="text-3xl md:text-5xl my-10 font-bold text-center lg:text-left text-white century leading-none">Création de site internet pour <span className="text-bleu">cabinet d'avocat</span></h1>
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
                        <svg width="80px" viewBox="0 0 100 125" className="mx-auto block" fill="#37cfee"><g><g><path d="M18.2050781,79.921875c-1.4462891,0-3.1865234-0.6489258-4.046875-1.5092773    c-0.7646484-0.7646484-1.2275391-2.1582031-1.4052734-3.2070313c-0.15625-0.9287109-0.2714844-2.6352539,0.7246094-3.6308594    l32.5556641-29.8623047l4.7753906,4.7753906L20.5507813,79.0668945    C19.984375,79.6352539,19.1816406,79.921875,18.2050781,79.921875z M45.9726563,44.480957L14.8603516,73.0185547    c-0.1357422,0.137207-0.3173828,0.7758789-0.1347656,1.8530273c0.1689453,1.0004883,0.5625,1.8427734,0.8466797,2.1269531    c0.4365234,0.4365234,1.6259766,0.9233398,2.6328125,0.9233398c0.421875,0,0.7519531-0.0883789,0.90625-0.2426758    L48.03125,46.5395508L45.9726563,44.480957z" /></g><g><path d="M55.4550781,53.9628906L38.6074219,37.1152344L54.5546875,21.168457l16.8476563,16.8481445L55.4550781,53.9628906z     M41.4355469,37.1152344l14.0195313,14.0195313l13.1191406-13.1181641L54.5546875,23.996582L41.4355469,37.1152344z" /></g><g><path d="M40.7714844,37.8647461l-3.8457031-3.8457031l14.3828125-14.3823242l3.8457031,3.8457031L40.7714844,37.8647461z     M39.7539063,34.019043l1.0175781,1.0175781l11.5546875-11.5541992l-1.0175781-1.0175781L39.7539063,34.019043z" /></g><g><path d="M58.4492188,55.5419922l-3.6865234-3.6860352l14.3818359-14.3823242l3.6865234,3.6860352L58.4492188,55.5419922z     M57.5908203,51.855957l0.8583984,0.8579102L70.0029297,41.159668l-0.8583984-0.8579102L57.5908203,51.855957z" /></g><g><path d="M36.8447266,36.9287109l-5.2841797-5.284668l17.3544922-17.3549805l5.2841797,5.284668L36.8447266,36.9287109z     M34.3886719,31.644043l2.4560547,2.456543l14.5263672-14.5268555l-2.4560547-2.456543L34.3886719,31.644043z" /></g><g><path d="M60.7685547,60.8525391l-5.2841797-5.284668l17.3544922-17.3549805l5.2841797,5.284668L60.7685547,60.8525391z     M58.3125,55.5678711l2.4560547,2.456543l14.5263672-14.5268555l-2.4560547-2.456543L58.3125,55.5678711z" /></g><g><path d="M87.3505859,85.296875H52.625v-2.9555664c0-2.7124023,2.2070313-4.9194336,4.9199219-4.9194336h24.8867188    c2.7119141,0,4.9189453,2.2070313,4.9189453,4.9194336V85.296875z M54.625,83.296875h30.7255859v-0.9555664    c0-1.6098633-1.3095703-2.9194336-2.9189453-2.9194336H57.5449219c-1.6103516,0-2.9199219,1.3095703-2.9199219,2.9194336    V83.296875z" /></g><g><path d="M82.9755859,79.421875H57v-6.875h25.9755859V79.421875z M59,77.421875h21.9755859v-2.875H59V77.421875z" /></g></g></svg>
                        <h2 className="flex text-black justify-center text-3xl lg:text-4xl century text-center -mt-4"><span className="font-bold">Vous êtes un <span className="text-bleu">{this.state.metier}</span>&nbsp;?</span></h2>
                        <br />
                        <p className="px-8 lg:px-16 text-center century text-md">Vous souhaitez <strong className="font-normal">créer un site internet</strong> pour votre entreprise ?<br /> <strong className="font-normal">Linkweb</strong> vous accompagne dans la mise en oeuvre de votre <strong className="font-normal">projet web</strong> pour répondre à vos objectifs.</p>
                        <br />
                        <div className="flex flex-col md:flex-row text-center pb-6 century px-2 lg:px-5 text-sm">
                            <div className="w-full md:w-1/3 flex flex-col font-bold">
                                <svg width="60px" viewBox="0 0 100 125" className="mx-auto block" fill="#37cfee"><path fill="none" d="M40.741,26.748c0-0.655-0.448-1.186-1.001-1.186c-0.552,0-1.001,0.531-1.001,1.186  c0,0.196,0.05,0.373,0.121,0.536l-0.229,15.064l1.108,1.407l1.109-1.407L40.62,27.284C40.691,27.121,40.741,26.944,40.741,26.748z" /><rect x="52.227" y="42.792" fill="none" width="1.531" height="1.531" /><rect x="52.227" y="51.607" fill="none" width="1.531" height="1.531" /><rect x="52.227" y="33.978" fill="none" width="1.531" height="1.531" /><path fill="none" d="M32.968,36.947c-0.588-0.946-0.986-2.02-1.145-3.172c-0.739,0.49-1.427,0.936-1.913,1.236  c-0.522,0.322-1.305,0.738-2.149,1.119c1.092,1.568,3.307,4.85,4.531,7.373c0.08-0.173,0.16-0.347,0.251-0.513l0-0.002  c0.334-1.073,0.632-2.675,0.632-3.893C33.174,38.354,33.096,37.638,32.968,36.947z" /><path fill="none" d="M68.851,26.049H58.708v-1.038H49.37v40.62h28.819v-40.62h-9.338V26.049z M57.681,35.226h5.675v0.604h-5.675  V35.226z M57.681,44.041h5.675v0.604h-5.675V44.041z M54.4,53.46c0,0.177-0.144,0.321-0.321,0.321h-2.174  c-0.177,0-0.321-0.144-0.321-0.321v-2.174c0-0.178,0.144-0.321,0.321-0.321h2.174c0.177,0,0.321,0.144,0.321,0.321V53.46z   M54.4,44.645c0,0.178-0.144,0.321-0.321,0.321h-2.174c-0.177,0-0.321-0.144-0.321-0.321v-2.174c0-0.177,0.144-0.321,0.321-0.321  h2.174c0.177,0,0.321,0.144,0.321,0.321V44.645z M54.4,35.83c0,0.177-0.144,0.321-0.321,0.321h-2.174  c-0.177,0-0.321-0.144-0.321-0.321v-2.174c0-0.178,0.144-0.321,0.321-0.321h2.174c0.177,0,0.321,0.144,0.321,0.321V35.83z   M63.357,53.46h-5.675v-0.604h5.675V53.46z M73.802,51.89h-16.12v-0.604h16.12V51.89z M73.802,43.075h-16.12v-0.604h16.12V43.075z   M73.802,34.26h-16.12v-0.604h16.12V34.26z" /><circle cx="39.889" cy="14.568" r="7.736" /><path d="M54.079,33.335h-2.174c-0.177,0-0.321,0.144-0.321,0.321v2.174c0,0.177,0.144,0.321,0.321,0.321h2.174  c0.177,0,0.321-0.144,0.321-0.321v-2.174C54.4,33.479,54.257,33.335,54.079,33.335z M53.758,35.509h-1.531v-1.531h1.531V35.509z" /><path d="M54.079,42.15h-2.174c-0.177,0-0.321,0.144-0.321,0.321v2.174c0,0.178,0.144,0.321,0.321,0.321h2.174  c0.177,0,0.321-0.144,0.321-0.321v-2.174C54.4,42.294,54.257,42.15,54.079,42.15z M53.758,44.324h-1.531v-1.531h1.531V44.324z" /><path d="M54.079,50.965h-2.174c-0.177,0-0.321,0.144-0.321,0.321v2.174c0,0.177,0.144,0.321,0.321,0.321h2.174  c0.177,0,0.321-0.144,0.321-0.321v-2.174C54.4,51.109,54.257,50.965,54.079,50.965z M53.758,53.139h-1.531v-1.531h1.531V53.139z" /><rect x="57.681" y="33.656" width="16.12" height="0.604" /><rect x="57.681" y="35.226" width="5.675" height="0.604" /><rect x="57.681" y="42.471" width="16.12" height="0.604" /><rect x="57.681" y="44.041" width="5.675" height="0.604" /><rect x="57.681" y="51.286" width="16.12" height="0.604" /><rect x="57.681" y="52.856" width="5.675" height="0.604" /><path d="M59.323,23.061c0.395,0,0.729-0.204,0.946-0.499c0.693,0.48,1.814,0.795,3.087,0.795c2.107,0,3.815-0.854,3.815-1.907  c0-1.053-1.708-1.907-3.815-1.907c-1.628,0-3.007,0.512-3.555,1.23c-0.147-0.065-0.308-0.103-0.479-0.103  c-0.661,0-1.196,0.535-1.196,1.196C58.127,22.525,58.662,23.061,59.323,23.061z" /><path d="M80.766,21.864h-5.952h-5.963h-0.71c-0.316,1.464-2.256,2.526-4.784,2.526c-1.095,0-2.134-0.207-2.963-0.58  c-0.324,0.185-0.69,0.285-1.071,0.285c-1.229,0-2.231-1.001-2.231-2.231v0H54.4h-7.607c-0.622,0-1.126,0.504-1.126,1.126v44.662  c0,0.622,0.504,1.126,1.126,1.126h33.972c0.622,0,1.126-0.504,1.126-1.126V22.991C81.892,22.369,81.388,21.864,80.766,21.864z   M78.189,65.632H49.37v-40.62h9.338v1.038h10.143v-1.038h9.338V65.632z" /><path d="M51.765,70.331h-4.972c-1.477,0-2.678-1.201-2.678-2.678V25.258c-0.41-0.135-0.719-0.213-0.88-0.221  c-0.105-0.051-0.217-0.089-0.325-0.135l0.014-0.003l-0.734-1.195h-1.588h-1.871h-1.588l-0.735,1.195l0.001,0  c-2.536,0.71-11.565,4.861-13.11,10.948c-0.004,0.017-0.002,0.029-0.006,0.045c-0.185,0.63-0.091,1.333,0.328,1.902  c0,0,4.891,6.49,7.69,8.459c-0.117,0.397-0.237,0.839-0.357,1.3c-0.006-0.024-0.014-0.044-0.02-0.068  c-0.016,0.114-0.031,0.219-0.047,0.33c-0.659,2.587-1.293,6.041-1.376,9.743c-0.045,0.32-0.045,0.32-0.045,0.32l-3.323,24.629  c2.03,0.592,3.972,1.028,5.819,1.339c0.498,4.853,1.384,9.387,2.958,9.387c1.508,0,2.384-4.161,2.893-8.776  c1.313,0.052,2.555,0.044,3.723-0.01c0.513,4.518,1.385,8.534,2.866,8.534c1.558,0,2.441-4.438,2.942-9.232  c3.877-0.773,6.045-1.869,6.045-1.869L51.765,70.331z M32.542,42.988c-0.092,0.167-0.171,0.34-0.251,0.513  c-1.223-2.522-3.438-5.805-4.531-7.373c0.844-0.38,1.627-0.796,2.149-1.119c0.487-0.3,1.175-0.746,1.913-1.236  c0.159,1.152,0.557,2.226,1.145,3.172c0.129,0.692,0.206,1.407,0.206,2.147c0,1.218-0.298,2.82-0.632,3.893L32.542,42.988z   M36.957,33.36c-0.686,0.457-1.6-0.449-2.289-0.006v1.166c0,0.059-0.037,0.166-0.096,0.166s-0.117-0.107-0.117-0.166v-3.046  c0-0.059,0.048-0.107,0.106-0.107s0.106,0.048,0.106,0.107v0.041c0.689-0.444,1.602,0.463,2.289,0.006  C36.957,32.21,37.187,32.9,36.957,33.36z M39.74,43.756l-1.108-1.407l0.229-15.064c-0.071-0.163-0.121-0.34-0.121-0.536  c0-0.655,0.448-1.186,1.001-1.186c0.553,0,1.001,0.531,1.001,1.186c0,0.196-0.05,0.373-0.121,0.536l0.229,15.064L39.74,43.756z" /></svg>
                                <h4>Présentation de vos domaines de compétences</h4>
                            </div>
                            <div className="w-full md:w-1/3 flex pl-4 flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M93.21,69.76H6.79a3,3,0,0,1-3-3V37.36a3,3,0,0,1,3-3H93.21a3,3,0,0,1,3,3V66.72A3,3,0,0,1,93.21,69.76ZM6.79,35.31a2.05,2.05,0,0,0-2,2V66.72a2,2,0,0,0,2,2H93.21a2,2,0,0,0,2-2V37.36a2.05,2.05,0,0,0-2-2Z" /><path fill="#37cfee" d="M14.73,43.7H9.93V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M17.91,50.86h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M17.91,58h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M17.91,65.17h-8v-4.8h8Zm-7-1h6v-2.8h-6Z" /><path fill="#37cfee" d="M24,43.7H19.21V38.91H24Zm-3.79-1H23V39.91H20.21Z" /><path fill="#37cfee" d="M24,50.86H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M24,58H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M30,58h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M24,65.17H19.21v-4.8H24Zm-3.79-1H23v-2.8H20.21Z" /><path fill="#37cfee" d="M30,65.17h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,65.17H31.22v-4.8H60Zm-27.82-1H59v-2.8H32.22Z" /><path fill="#37cfee" d="M36,58h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z" /><path fill="#37cfee" d="M42,58h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z" /><path fill="#37cfee" d="M48,58h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z" /><path fill="#37cfee" d="M54,58h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,58h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z" /><path fill="#37cfee" d="M66,58H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M66,65.17H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M72.05,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M84.06,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M90.07,65.17h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M72.05,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,58h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M30,50.86h-4.8v-4.8H30Zm-3.8-1H29v-2.8h-2.8Z" /><path fill="#37cfee" d="M36,50.86h-4.8v-4.8H36Zm-3.8-1H35v-2.8h-2.8Z" /><path fill="#37cfee" d="M42,50.86h-4.8v-4.8H42Zm-3.8-1H41v-2.8h-2.8Z" /><path fill="#37cfee" d="M48,50.86h-4.8v-4.8H48Zm-3.8-1H47v-2.8h-2.8Z" /><path fill="#37cfee" d="M54,50.86h-4.8v-4.8H54Zm-3.8-1H53v-2.8h-2.8Z" /><path fill="#37cfee" d="M60,50.86h-4.8v-4.8H60Zm-3.8-1H59v-2.8h-2.8Z" /><path fill="#37cfee" d="M66,50.86H61.25v-4.8H66Zm-3.79-1H65v-2.8H62.25Z" /><path fill="#37cfee" d="M72.05,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M78.06,50.86h-4.8v-4.8h4.8Zm-3.8-1h2.8v-2.8h-2.8Z" /><path fill="#37cfee" d="M90.07,57.83H82.19a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h6.88V47.06H81.39V50.8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V46.06h9.68Z" /><path fill="#37cfee" d="M30,43.7h-4.8V38.91H30Zm-3.8-1H29V39.91h-2.8Z" /><path fill="#37cfee" d="M36,43.7h-4.8V38.91H36Zm-3.8-1H35V39.91h-2.8Z" /><path fill="#37cfee" d="M42,43.7h-4.8V38.91H42Zm-3.8-1H41V39.91h-2.8Z" /><path fill="#37cfee" d="M48,43.7h-4.8V38.91H48Zm-3.8-1H47V39.91h-2.8Z" /><path fill="#37cfee" d="M54,43.7h-4.8V38.91H54Zm-3.8-1H53V39.91h-2.8Z" /><path fill="#37cfee" d="M60,43.7h-4.8V38.91H60Zm-3.8-1H59V39.91h-2.8Z" /><path fill="#37cfee" d="M66,43.7H61.25V38.91H66Zm-3.79-1H65V39.91H62.25Z" /><path fill="#37cfee" d="M72.05,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M78.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M84.06,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M90.07,43.7h-4.8V38.91h4.8Zm-3.8-1h2.8V39.91h-2.8Z" /><path fill="#37cfee" d="M82.19,57.83a.5.5,0,0,1-.5-.5v-6h-.8a.5.5,0,0,1,0-1h1.8v7A.5.5,0,0,1,82.19,57.83Z" /></svg>
                                <h4>Rédaction optimisée pour le référencement naturel</h4>
                            </div>
                            <div className="w-full md:w-1/3 flex pl-4 flex-col font-bold">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125"><path fill="#37cfee" d="M92.48,72.15h-85A2.53,2.53,0,0,1,5,69.62V16.69a2.53,2.53,0,0,1,2.52-2.52h85A2.53,2.53,0,0,1,95,16.69V69.62A2.53,2.53,0,0,1,92.48,72.15Zm-85-56.71a1.26,1.26,0,0,0-1.25,1.25V69.62a1.26,1.26,0,0,0,1.25,1.25h85a1.26,1.26,0,0,0,1.25-1.25V16.69a1.26,1.26,0,0,0-1.25-1.25Z" /><path fill="#37cfee" d="M51.48,72.22V84.49h-3V72.22h3m.3-1.27H48.22a1,1,0,0,0-1,1V84.79a1,1,0,0,0,1,1h3.56a1,1,0,0,0,1-1V71.92a1,1,0,0,0-1-1Z" /><path fill="#37cfee" d="M61.36,85.83h-28a.63.63,0,0,1,0-1.27h28a.63.63,0,1,1,0,1.27Z" /><path fill="#37cfee" d="M70,85.83H66.89a.63.63,0,1,1,0-1.27H70a.63.63,0,1,1,0,1.27Z" /><path fill="#37cfee" d="M64.83,85.83H63.26a.63.63,0,1,1,0-1.27h1.57a.63.63,0,1,1,0,1.27Z" /><rect fill="#37cfee" x="5.63" y="65.24" width="88.73" height="1.27" /><path fill="#37cfee" d="M58.32,24.68a.35.35,0,0,1-.25-.1l-1.13-1.13a.35.35,0,0,1,.5-.5l1.13,1.13a.35.35,0,0,1-.25.6Z" /><path fill="#37cfee" d="M57.19,24.68a.35.35,0,0,1-.25-.6l1.13-1.13a.35.35,0,0,1,.5.5l-1.13,1.13A.35.35,0,0,1,57.19,24.68Z" /><path fill="#37cfee" d="M59.92,60.86H13.84a2.07,2.07,0,0,1-2.07-2.07V22.59a2.07,2.07,0,0,1,2.07-2.07H59.92A2.07,2.07,0,0,1,62,22.59V58.79A2.07,2.07,0,0,1,59.92,60.86ZM13.84,21.79a.8.8,0,0,0-.8.8V58.79a.8.8,0,0,0,.8.8H59.92a.8.8,0,0,0,.8-.8V22.59a.8.8,0,0,0-.8-.8Z" /><path fill="#37cfee" d="M39,45.82H17.88a2.21,2.21,0,0,1-2.21-2.21V31.37a1.87,1.87,0,0,1,1.87-1.87H39a2.21,2.21,0,0,1,2.21,2.21v11.9A2.21,2.21,0,0,1,39,45.82ZM17.55,30.58a.79.79,0,0,0-.79.79V43.61a1.13,1.13,0,0,0,1.13,1.13H39a1.13,1.13,0,0,0,1.13-1.13V31.71A1.13,1.13,0,0,0,39,30.58Z" /><path fill="#37cfee" d="M56.21,57.45H17.84a2.1,2.1,0,0,1-2.09-2.09V50.28a2.1,2.1,0,0,1,2.09-2.09H56.21a2.1,2.1,0,0,1,2.09,2.09v5.08A2.1,2.1,0,0,1,56.21,57.45ZM17.84,49.27a1,1,0,0,0-1,1v5.08a1,1,0,0,0,1,1H56.21a1,1,0,0,0,1-1V50.28a1,1,0,0,0-1-1Z" /><path fill="#37cfee" d="M61.36,27.29H12.41a.63.63,0,1,1,0-1.27H61.36a.63.63,0,1,1,0,1.27Z" /><path fill="#37cfee" d="M56.91,30.51H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z" /><path fill="#37cfee" d="M56.91,34.32H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z" /><path fill="#37cfee" d="M56.91,38.12H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z" /><path fill="#37cfee" d="M56.91,41.93H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z" /><path fill="#37cfee" d="M56.91,45.74H44.5a.54.54,0,1,1,0-1.08H56.91a.54.54,0,0,1,0,1.08Z" /><path fill="#37cfee" d="M85,60.7H76.39a1.22,1.22,0,0,1-1.22-1.22v-4a1.08,1.08,0,0,1,1.08-1.08H85a1.22,1.22,0,0,1,1.22,1.22v3.86A1.22,1.22,0,0,1,85,60.7Zm-8.72-5.22v4a.14.14,0,0,0,.14.14H85a.14.14,0,0,0,.14-.14V55.62a.14.14,0,0,0-.14-.14Z" /><path fill="#37cfee" d="M86.72,60.86H68.29a2.07,2.07,0,0,1-2.07-2.07V22.59a2.07,2.07,0,0,1,2.07-2.07H86.72a2.07,2.07,0,0,1,2.07,2.07V58.79A2.07,2.07,0,0,1,86.72,60.86ZM68.29,21.79a.8.8,0,0,0-.8.8V58.79a.8.8,0,0,0,.8.8H86.72a.8.8,0,0,0,.8-.8V22.59a.8.8,0,0,0-.8-.8Z" /><path fill="#37cfee" d="M85.13,24.68a.35.35,0,0,1-.25-.1l-1.13-1.13a.35.35,0,0,1,.5-.5l1.13,1.13a.35.35,0,0,1-.25.6Z" /><path fill="#37cfee" d="M84,24.68a.35.35,0,0,1-.25-.6l1.13-1.13a.35.35,0,0,1,.5.5l-1.13,1.13A.35.35,0,0,1,84,24.68Z" /><path fill="#37cfee" d="M83.29,57.73H77.93a.54.54,0,0,1,0-1.08h5.36a.54.54,0,1,1,0,1.08Z" /><path fill="#37cfee" d="M83.29,59.43h-3a.54.54,0,1,1,0-1.08h3a.54.54,0,1,1,0,1.08Z" /><path fill="#37cfee" d="M85,36.72H76.39a1.22,1.22,0,0,1-1.22-1.22v-5a1.08,1.08,0,0,1,1.08-1.08H85a1.22,1.22,0,0,1,1.22,1.22V35.5A1.22,1.22,0,0,1,85,36.72Zm-8.72-6.21v5a.14.14,0,0,0,.14.14H85a.14.14,0,0,0,.14-.14V30.65a.14.14,0,0,0-.14-.14Z" /><path fill="#37cfee" d="M82.87,32.34H77.51a.54.54,0,1,1,0-1.08h5.36a.54.54,0,1,1,0,1.08Z" /><path fill="#37cfee" d="M79.91,34.32h-2.4a.54.54,0,1,1,0-1.08h2.4a.54.54,0,1,1,0,1.08Z" /><path fill="#37cfee" d="M78.48,45H69.9a1.22,1.22,0,0,1-1.22-1.22v-5a1.08,1.08,0,0,1,1.08-1.08h8.72A1.22,1.22,0,0,1,79.71,39v4.85A1.22,1.22,0,0,1,78.48,45Zm-8.72-6.21v5a.14.14,0,0,0,.14.14h8.58a.14.14,0,0,0,.14-.14V39a.14.14,0,0,0-.14-.14Z" /><path fill="#37cfee" d="M74.69,40.66H71a.54.54,0,1,1,0-1.08h3.67a.54.54,0,0,1,0,1.08Z" /><path fill="#37cfee" d="M76.38,42.64H71a.54.54,0,1,1,0-1.08h5.36a.54.54,0,1,1,0,1.08Z" /><path fill="#37cfee" d="M78.48,53.36H69.9a1.22,1.22,0,0,1-1.22-1.22v-5a1.08,1.08,0,0,1,1.08-1.08h8.72a1.22,1.22,0,0,1,1.22,1.22v4.85A1.22,1.22,0,0,1,78.48,53.36Zm-8.72-6.21v5a.14.14,0,0,0,.14.14h8.58a.14.14,0,0,0,.14-.14V47.29a.14.14,0,0,0-.14-.14Z" /><path fill="#37cfee" d="M76.38,49H71a.54.54,0,1,1,0-1.08h5.36a.54.54,0,1,1,0,1.08Z" /><path fill="#37cfee" d="M75.39,51H71a.54.54,0,1,1,0-1.08h4.37a.54.54,0,0,1,0,1.08Z" /><path fill="#37cfee" d="M88.09,27.12H66.93a.54.54,0,0,1,0-1.08H88.09a.54.54,0,1,1,0,1.08Z" /></svg>
                                <h4>Optimisation de l'expérience utilisateur</h4>
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
                        <p className="text century lg:mt-0 text-lg lg:text-sm xl:text-lg">La <strong className="font-normal">création d’un site internet vitrine</strong> permet à chaque professionnel de <strong className="font-normal">développer une plateforme web</strong> qui parle de vous, qui vous apporte de la <strong className="font-normal">visibilité</strong> et qui vous permet de rester <strong className="font-normal">en contact avec vos clients</strong>. Pour un <strong className="font-normal">avocat</strong>, la <strong className="font-normal">création d’un site vitrine</strong> est idéale en vue de présenter ses domaines de compétences ainsi que son <strong className="font-normal">expertise</strong>.
                <br /><br />
                En somme, le <strong className="font-normal">site internet vitrine</strong> est une <strong className="font-normal">carte de visite en ligne</strong>, accessible 24h sur 24 et 7 jours sur 7. Il permet de <strong className="font-normal">générer des contacts pertinents</strong> dans le cadre de son activité. De plus, le <strong className="font-normal">site vitrine</strong> est façonnable et il est possible de lui greffer des modules pour l’adapter à votre entreprise.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + referencement + ')' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Référencement</span><br /><span className="font-bold text-6xl">LOCAL</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg">Le <strong className="font-normal">référencement local</strong> est une branche du <strong className="font-normal">référencement naturel</strong> qui permet de <strong className="font-normal">propulser la visibilité de son site internet</strong> auprès de personnes présentes dans votre zone géographique. <strong className="font-normal">Obtenir de la visibilité en ligne</strong> est essentiel pour qu’un <strong className="font-normal">site web</strong> puisse générer du trafic.
                <br /><br />
                Le <strong className="font-normal">référencement SEO local</strong> permet d’<strong className="font-normal">être visible en ligne</strong> auprès d’un public pertinent pour vous, tout en contribuant au <strong className="font-normal">développement de votre stratégie de visibilité</strong> de manière sereine. Ceci est important en vue d’<strong className="font-normal">obtenir des premiers résultats</strong> à court ou moyen terme et notamment de <strong className="font-normal">nouveaux clients</strong>.</p>
                    </div>
                    <div className="blochover mx-0 lg:mx-6 w-full lg:w-1/3 text-white" style={{ backgroundImage: 'url(' + webdesign + ')', backgroundPosition: 'left' }}>
                        <h3 className="text-3xl titrehover text-center century leading-none"><span>Design</span><br /><span className="font-bold text-6xl">EFFICACE</span></h3>
                        <p className="text century text-lg lg:text-sm xl:text-lg"><strong className="font-normal">Créer un site internet</strong> performant passe par la <strong className="font-normal">définition d’un webdesign</strong> soigné. En effet, <strong className="font-normal">votre site internet</strong> devra être <strong className="font-normal">responsive design</strong> (adapté en fonction des supports de lecture : smartphone, tablette, etc.), <strong className="font-normal">intuitif</strong> et adapté à votre public. Lorsqu’un utilisateur est à la recherche d’un <strong className="font-normal">avocat</strong>, il est nécessaire que son expérience et sa <strong className="font-normal">navigation sur votre site web</strong> soient parfaitement fluides.
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
                            <svg width="50px" className="mx-auto block" fill="#37cfee" viewBox="0 0 100 125"><g data-name="Group"><path data-name="Compound Path" d="M94.5,86V14H5.5V86Zm-87-2V38h85V84Zm85-68V36H7.5V16Z" /><circle data-name="Path" cx="31.5" cy="26" r="5" /><circle data-name="Path" cx="44.5" cy="26" r="5" /><circle data-name="Path" cx="18.5" cy="26" r="5" /><path data-name="Compound Path" d="M65.1,56.6l-9.8-1.4-4.4-8.9a1,1,0,0,0-1.8,0l-4.4,8.9-9.8,1.4a1,1,0,0,0-.6,1.7l7.1,6.9-1.7,9.7A1,1,0,0,0,41.3,76L50,71.4,58.7,76h.5l.6-.2a1,1,0,0,0,.4-1l-1.7-9.7,7.1-6.9a1,1,0,0,0-.6-1.7Zm-8.3,7.5a1,1,0,0,0-.3.9l1.4,8.3-7.4-3.9h-.9l-7.4,3.9L43.5,65a1,1,0,0,0-.3-.9l-6-5.9L45.5,57a1,1,0,0,0,.8-.5L50,49l3.7,7.5a1,1,0,0,0,.8.5l8.3,1.2Z" /></g></svg>
                            <h4 className="font-bold century -mt-3"><span className="font-bold">Présentation de vos domaines de compétences</span></h4>
                            <p>Nous présentons et mettons en avant vos domaines de compétences juridiques au sein de pages web dédiées.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                        <div className="w-full -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center">
                            <svg width="50px" className="mx-auto block" fill="#37cfee" viewBox="0 0 846.66 1058.325"><g><path class="fil0" d="M469.1 599.6l18.26 0 0 -58.93c0,-20.55 19.16,-50.94 35.31,-73.57l-6.37 -20.72c39.72,-12.23 79.51,-18.99 119.33,-20.19l0 -14.21 25 0 0 14.19c39.85,1.13 79.66,7.83 119.38,20.21l-6.45 20.69c16.15,22.64 35.33,53.04 35.33,73.6l0 58.93 18.26 0c0,21.15 -9.48,39.95 -33.51,39.95l-61.98 0c-24.03,0 -33.51,-18.8 -33.51,-39.95l18.26 0 0 -58.93c0,-21.28 20.56,-53.11 37.04,-75.97 -30.99,-8.16 -61.93,-12.69 -92.82,-13.63l0 196.58 30.6 51.27 28.84 0 0 33.9 -143.83 0 0 -33.9 28.79 0 30.6 -51.27 0 -196.55c-30.89,0.99 -61.83,5.56 -92.8,13.64 16.48,22.85 37.01,54.66 37.01,75.93l0 58.93 18.27 0c0,20.94 -9.28,39.95 -33.53,39.95l-61.97 0c-24.02,0 -33.51,-18.8 -33.51,-39.95zm-171.4 -99.9l33.15 0 3.37 -35.33c15.12,-2.62 28.78,-8.19 41.03,-16.02l-3.63 38.18 105.78 46.67c-2.32,15.27 -0.61,39.63 -0.61,55.83l-18.27 0 0 17c0,12.1 4.97,23.14 12.97,31.12 4.09,4.1 -41.31,85.48 -46.61,95.67l-221.22 0 -76.01 -146.16c-26.48,11.68 -68.66,27.29 -68.66,62.25l0 83.91 -39.47 0 0 -83.91c0,-55.98 47.8,-78.73 91.99,-98.22l145.41 -64.16 -3.63 -38.18c12.25,7.83 25.91,13.39 41.04,16.02l3.37 35.33zm-119 -240.8c0,-83.05 49.42,-145.06 135.57,-145.06 86.15,0 135.57,62 135.57,145.06 0,78.6 -41.28,197.28 -135.57,197.28 -94.29,0 -135.57,-118.68 -135.57,-197.28zm39.51 -3.28c48.64,-12.07 120.65,-30.72 183.37,-47.11 5.86,14.7 8.79,31.76 8.79,50.39 0,54.11 -26.97,157.81 -96.1,157.81 -70.22,0 -96.6,-105.86 -96.06,-161.09zm2.24 290.1l32.9 63.27 -12.16 47.18c15.82,10.73 29.74,18.91 48.76,23.2l24.32 46.78 24.61 -47.34c18.49,-4.5 32.7,-12.42 48.54,-22.37l-12.23 -47.44 32.9 -63.28 -66.99 -29.56 35.01 135.77c-41.23,25.9 -82.46,27.98 -123.68,0l34.99 -135.76 -66.97 29.55zm515.75 53.88l52.89 0 0 -58.93c0,-14.41 -16.31,-40.36 -26.45,-55.1 -10.12,14.74 -26.44,40.69 -26.44,55.1l0 58.93zm-229.04 0l52.88 0 0 -58.93c0,-14.41 -16.31,-40.36 -26.44,-55.1 -10.14,14.74 -26.44,40.69 -26.44,55.1l0 58.93z" /></g></svg>
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
                        Création de site internet pour cabinet d'avocat :<br /><span className="font-bold">Nos clients sont satisfaits</span>
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
                        Création de site internet pour cabinet d'avocat :<br /><span className="font-bold">Une solution en accord avec vos besoins</span>
                    </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="tabPanel flex flex-1 w-full justify-end ml-0 mb-24">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="METTRE EN AVANT VOS DOMAINES DE COMPÉTENCES">
                                <p>La <strong>création d’un site internet</strong> est un moyen pertinent de <strong>faire connaître son activité</strong> professionnelle. Au-delà de présenter votre activité, le <strong>site internet</strong> vous permet de mettre en avant vos <strong>domaines de compétences</strong> pour permettre aux utilisateurs d’accéder à un <strong>avocat</strong> comme vous. Ceci est important en vue de <strong>proposer un contenu pertinent</strong> vis-à-vis des <strong>requêtes des utilisateurs sur les moteurs de recherche</strong>.
                            <br /><br />
                            Par ailleurs, le <strong>site web</strong> est un parfait moyen de <strong>communication</strong> pour exposer et démontrer votre <strong>expertise</strong> dans votre <strong>domaine de compétences</strong>. En effet, ceci est important pour montrer votre crédibilité à l’ensemble des <strong>acteurs présents sur le Web</strong>. De ce point de vue, le <strong>site web</strong> est un outil particulièrement complet.</p>
                            </div>
                            <div label="UNE STRATÉGIE DE SEO LOCAL POUR GÉNÉRER DES CONTACTS QUALIFIÉS">
                                <p>Il est important d’adapter le <strong>contenu de son site internet à son activité</strong>, mais également à sa <strong>cible</strong>. En effet, le <strong>site internet</strong> est un <strong>outil de communication</strong> qui vous permet de vous adresser directement à des utilisateurs qui pourraient nécessiter de faire appel à vos services. Il est donc important de vous adresser à des utilisateurs <strong>présents dans votre secteur géographique</strong> et à la recherche d’un <strong>professionnel</strong> comme vous.
                            <br /><br />
                            Ceci est important pour <strong>générer des contacts qualifiés</strong>. Pour cela, les <strong>moteurs de recherche</strong> (comme <strong>Google</strong>) constituent une porte d’entrée à <strong>votre site</strong>. Ainsi, le travail de <strong>référencement naturel</strong> doit vous <strong>rendre visible</strong> pour des <strong>requêtes stratégiques</strong> et des secteurs adéquats. Nous mettons en place <strong>votre stratégie de référencement local</strong> pour vous permettre d’<strong>obtenir de la visibilité dans les premières pages de résultats de recherche</strong> dans des délais raisonnables.</p>
                            </div>
                            <div label="UN SITE WEB DISPONIBLE 24H/24 POUR ÊTRE ACCESSIBLE EN LIGNE">
                                <p>De nos jours, <strong>avoir un site internet</strong> est indispensable pour les professionnels souhaitant développer leur activité. En effet, <strong>créer votre site web</strong> peut vous permettre d’augmenter votre <strong>notoriété</strong> en boostant votre <strong>visibilité</strong>, mais également de soigner <strong>votre image</strong>.
                            <br /><br />
                            Les <strong>sites web</strong> sont des <strong>cartes de visite en ligne</strong> qui présentent l’avantage d’être accessibles à tout moment de la journée. Ceci est important en vue de <strong>déployer sa visibilité</strong> et ouvrir ses frontières à de nouveaux horizons grâce au <strong>Web</strong>.</p>
                            </div>
                        </Accordion>
                    </div>
                </section>

                <div className="w-full flex justify-center my-20">
                    <div className="w-4/5 lg:w-1/2">
                        <CarouselAvocat />
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
query lastsThreePostsSiteInternetAvocat {
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
export default SiteInternetAvocat;




