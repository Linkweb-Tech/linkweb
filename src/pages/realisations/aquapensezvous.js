import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";
import RoundButton from "../../components/roundButton";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../../components/seo";
import Barre from "../../components/barre-laterale";
import "../../scss/barre.scss";
import "../../scss/global.scss";

import logolinkweb from "../../images/logo-linkweb.png";
import Bg from "../../images/bg-aquapensezvous.jpg";
import bgbloc from "../../images/bloc-aquapensezvous.jpg";
import smartphone from "../../images/mockup-drive.jpg";
import mockup from "../../images/aquapensezvous-mobile.jpg";
import imac from "../../images/mockup-aquapensezvous.jpg";
import bloccontact from '../../images/aquapensezvous-contact.jpg';
import logo from '../../images/logo-aquapensezvous.png';
import logosia from '../../images/logo-sia.png';
import logoatpt from '../../images/logo-atpt-blanc.png';
import logosdis from '../../images/logo-sdis47-real.png';
import logofaivre from '../../images/faivre-creations.png';
import logogabrielservices from '../../images/logo-gs.png';
import logoledil from '../../images/logo-ledil.png';
import logocsd from '../../images/logo-csd.png';



class aquapensezvous extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Nos Réalisations - Aqua Pensez-Vous - Linkweb"
                    description="Le site de Aqua Pensez-Vous est l'une de nos réalisations. Vous souhaitez un projet similaire ?"
                    keywords={[`Référencement Agen`, `Référencement Toulouse`, `Agence de Référencement Agen`, `Agence de Référencement Toulouse`, `Référencement Google`]}
                    url="https://linkweb.fr/realisations/aquapensezvous/"
                    nom="Aqua Pensez-Vous"
                    slug="/realisations/aquapensezvous/"
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
                    <section className="w-full bloctitrescreen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ background:'#143842d9 url(' + Bg + ')', backgroundRepeat:'no-repeat', backgroundBlendMode:'multiply', backgroundSize:'cover', backgroundPosition:'center' }}>
                            <div>
                                <Link className="invisible md:visible" to="/"><img className="mx-auto block" width="120px" src={logolinkweb} alt="création site internet Toulouse" data-aos="zoom-in"/></Link>
                                <br/>
                                <a href="/agence-de-communication-agen-47-toulouse-31/" className="mt-24 font-normal century text-sm sm:text-md text-center text-white mx-auto block hover:text-bleu" data-aos="zoom-in" data-aos-delay="900"><span className="text-bleu font-bold">>></span> Revenir aux réalisations</a>
                                <h1 data-aos="fade-down" data-aos-delay="500" className="century text-5xl sm:text-6xl md:text-6xl lg:text-6xl text-center text-aquap">
                                    <span className="font-extrabold">AQUA PENSEZ-VOUS</span>
                                </h1>
                                <h3 data-aos="fade-up" className="italic max-w-4xl font-normal text-center text-lg sm:text-2xl text-white mt-8">Développer un projet web favorisant la croissance de l'entreprise grâce à un <span className="text-aquap">gain en visibilité sur Internet</span> et une stratégie de référencement performante.</h3>
                                <br/>
                                <a data-aos="fade-dow" className="mb-12" href="/realisations/aquapensezvous/#start"><svg className="zoombtn mx-auto block" width="60px" viewBox="0 0 100 125"><g><g><path fill="#d33683" d="M59.3,46.5l-8.7,8.7l-8.7-8.7c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l10.1,10.1c0.4,0.4,0.9,0.6,1.4,0.6    s1-0.2,1.4-0.6l10.1-10.1c0.8-0.8,0.8-2,0-2.8C61.4,45.7,60.1,45.7,59.3,46.5z M50.8,5c-24.9,0-45,20.1-45,45    c0,24.9,20.1,45,45,45c24.9,0,45-20.1,45-45C95.8,25.1,75.6,5,50.8,5z M50.8,91c-22.6,0-41-18.4-41-41s18.4-41,41-41    s41,18.4,41,41S73.4,91,50.8,91z"/></g></g></svg></a>
                            </div>
                            <Barre color="ledilbarre"/>
                            {/* <li className="hidden lg:block toggleable">
                                <input type="checkbox" value="selected" id="toggle-one" className="toggle-input hidden"/>
                                    <label for="toggle-one" className="toogle-input block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">
                                        <div className="cursor-pointer fixed h-auto z-40 py-16 font-bold px-2 font-bold" style={{background:'#FFFFFF',bottom:'315px', writingMode:'vertical-rl', textOrientation: 'sideways', borderTopLeftRadius:'15px', borderBottomLeftRadius:'15px'}}>
                                            <p style={{transform:'rotate(180deg'}}>Nos réalisations</p>
                                        </div>
                                    </label>
                                <div role="toggle" className="toggle-input megamenu fixed h-auto z-40 p-2 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800" style={{background:'#23395194', maxWidth:'100px', borderRadius:'15px'}}>
                                    <div className="flex flex-col py-6" style={{overflow:'hidden'}}>
                                        <Link to="/realisations/sia/"><img className="zoom py-3 w-3/4 mx-auto block" src={logosia} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/atpt/"><img className="zoom py-3 w-3/4 mx-auto block" src={logoatpt} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/sdis47/"><img className="zoom py-3 w-3/4 mx-auto block" src={logosdis} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/groupe-faivre-environnement/"><img className="zoom py-3 w-3/4 mx-auto block" src={logofaivre} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/gabriel-services/"><img className="zoom py-3 w-3/4 mx-auto block" src={logogabrielservices} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/ledilimmo/"><img className="zoom py-3 w-3/4 mx-auto block" src={logoledil} alt="Création site internet Toulouse" /></Link>
                                        <Link to="/realisations/csd-menuiserie/"><img className="zoom py-3 w-1/2 mx-auto block" src={logocsd} alt="Création site internet Toulouse" /></Link>
                                    </div>
                                </div>
                            </li> */}
                    </section>
                    <section className="w-full flex flex-col md:flex-row mt-12">
                        <div className="w-full md:w-11/12 px-4 py-2 md:py-6 my-2 ml-0 md:ml-24 lg:ml-32 md:my-4 flex flex-col order-last md:order-first">
                            <h3 data-aos='fade-right' className="text-center text-2xl md:text-4xl mx-12 md:mx-24 century">
                           Mettre en place une solution web performante pour attirer de nouveaux prospects à travers un <span className="text-aquap">nouveau canal d'acquistion</span>.
                            </h3>
                            <br/>
                        </div>
                        <div className="w-full md:w-1/12 mx-auto mr-10 py-6 mb-4 -mt-32 md:-mt-48 lg:-mt-64" id="start" data-aos="zoom-in">
                            <img src={logo} className="w-1/3 md:w-full xl:w-3/4 mx-auto block md:mx-0" />
                        </div>
                    </section>
                    <section className="w-full mt-16 flex flex-col md:flex-row justify-center items-center">
                            <a className="text-white font-bold w-1/2 md:w-1/6 bg-aquap mx-12 p-3 text-center" data-aos="zoom-in" style={{borderRadius:'15px'}} href="https://aquapensezvous.com/" target="blank" rel="noopener noreferrer">Voir le site</a>
                            <Link className="text-white font-bold w-1/2 md:w-1/6 bg-aquap1 mx-12 my-6 text-center p-3" data-aos="zoom-in" data-aos-delay="500" style={{borderRadius:'15px'}} to="/contact-agence-web-toulouse/">J'ai une question</Link>
                    </section>
                    <section className="w-full mt-24">
                        <div className="w-full lg:w-2/3 bg-aquap1 text-white px-12 md:px-24 py-12" data-aos="fade-right" data-aos-delay="100">
                            <h2 className="font-bold text-center md:text-left text-2xl md:text-3xl my-6"><span className="text-aquap">/</span>DÉFINIR UN OUTIL WEB PERFORMANT POUR MAXIMISER LE TAUX DE CONVERSION D'AQUA PENSEZ-VOUS</h2>
                            <br/>
                            <p className="font-normal text-justify">
                                L'entreprise Aqua Pensez-Vous a choisi Linkweb pour développer sa présence sur Internet afin d'investir un nouveau marché et acquérir une visibilité croissante.  
                            </p>
                            <br/>
                            <ul className="font-normal text-justify">
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#d33683" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#d33683" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    <p>Créer un site internet vitrine évolutif.</p>
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#d33683" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#d33683" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    <p>Promouvoir les prestations proposées par Aqua Pensez-Vous au sein d'une stratégie de référencement naturel personnalisée.</p>
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#d33683" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#d33683" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    <p>Développer un webdesign en conformité avec l'image de la marque et les tendances actuelles.</p>
                                </li>
                            </ul>
                            <br/>
                            <element className="flex flex-col md:flex-row mt-24 mb-8">
                                <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up">
                                    <svg width="80px" className="mx-auto block" fill="#d33683" viewBox="0 0 100 125" ><g><path d="M26,73h52V33H26V73z M74.5,55.471c-2.137,0.903-4.278,1.79-6.427,2.669c-0.247-0.805-0.663-1.541-0.931-2.335   c2.153-0.847,4.258-1.813,6.425-2.618C73.907,53.936,74.219,54.698,74.5,55.471z M67.923,45.768   c0.657,0.439,1.32,1.099,1.762,1.755c-1.608,1.636-3.241,3.248-4.858,4.873c-0.564-0.618-1.168-1.195-1.771-1.774   C64.676,49.002,66.289,47.375,67.923,45.768z M59.982,40.958c0.776,0.268,1.532,0.597,2.284,0.922   c-0.822,2.162-1.771,4.276-2.624,6.428c-0.783-0.29-1.533-0.67-2.329-0.933C58.186,45.231,59.068,43.088,59.982,40.958z    M50.749,39.64c0.832-0.112,1.679-0.101,2.511-0.004c0.008,2.311,0.004,4.619,0,6.93c-0.843-0.042-1.686-0.047-2.525,0.023   C50.771,44.271,50.736,41.954,50.749,39.64z M51.899,62.399c0.217,0,0.427,0.025,0.63,0.068l7.319-4.717l-4.952,7.684   c-0.02,1.641-1.352,2.965-2.997,2.965c-1.657,0-3-1.343-3-3S50.243,62.399,51.899,62.399z M44.026,40.947   c0.917,2.135,1.801,4.287,2.674,6.439c-0.808,0.235-1.548,0.642-2.336,0.925c-0.846-2.153-1.799-4.264-2.619-6.427   C42.499,41.558,43.254,41.233,44.026,40.947z M36.079,45.725c1.595,1.678,3.309,3.242,4.874,4.943   c-0.651,0.517-1.193,1.148-1.784,1.732c-1.6-1.64-3.238-3.24-4.845-4.87C34.752,46.84,35.449,46.264,36.079,45.725z M30.444,53.187   c2.166,0.803,4.267,1.771,6.417,2.618c-0.26,0.795-0.691,1.527-0.92,2.338c-2.146-0.89-4.298-1.771-6.441-2.671   C29.791,54.701,30.113,53.941,30.444,53.187z"/><circle cx="62.8" cy="28.4" r="2.4"/><path d="M69.4,30.8c1.322,0,2.399-1.076,2.399-2.4S70.723,26,69.4,26c-1.323,0-2.4,1.076-2.4,2.4S68.077,30.8,69.4,30.8z"/><circle cx="76" cy="28.4" r="2.4"/><path d="M50,0C22.386,0,0,22.386,0,50s22.386,50,50,50s50-22.386,50-50S77.614,0,50,0z M82,73.399C82,75.388,80.389,77,78.4,77   H25.6c-1.988,0-3.6-1.612-3.6-3.601V27.601C22,25.612,23.612,24,25.6,24H78.4c1.988,0,3.6,1.612,3.6,3.601V73.399z"/></g></svg>
                                    <h4 className="text-center mt-4 font-bold text-lg">Performances Web élevées</h4>
                                </div>
                                <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up" data-aos-delay="500">
                                    <svg width="80px" className="mx-auto block" fill="#d33683" viewBox="0 0 100 125"><g><path d="M50,64.24c-5.217,0-9.54,3.76-10.396,8.76h20.791C59.539,68,55.217,64.24,50,64.24z"/><circle cx="60.8" cy="28.4" r="2.4"/><path d="M67.4,30.8c1.322,0,2.399-1.076,2.399-2.4S68.723,26,67.4,26c-1.323,0-2.4,1.076-2.4,2.4S66.077,30.8,67.4,30.8z"/><circle cx="74" cy="28.4" r="2.4"/><path d="M50,0C22.386,0,0,22.386,0,50s22.386,50,50,50s50-22.386,50-50S77.614,0,50,0z M80,73.399C80,75.388,78.389,77,76.4,77   H23.6c-1.988,0-3.6-1.612-3.6-3.601V27.601C20,25.612,21.612,24,23.6,24H76.4c1.988,0,3.6,1.612,3.6,3.601V73.399z"/><path d="M24,71.435C24,70.267,24.546,69,25.712,69h3.838c0.499-2,1.271-3.6,2.265-5.279l-2.721-2.646   c-0.825-0.825-0.824-2.118,0.001-2.943l4.482-4.46c0.824-0.825,2.165-0.814,2.99,0.011l2.854,2.727   C41.1,55.415,43,54.649,45,54.149v-3.838C45,49.146,45.666,48,46.832,48h6.333C54.334,48,55,49.147,55,50.312v3.837   c2,0.5,3.899,1.271,5.579,2.266l2.798-2.722c0.824-0.825,2.193-0.823,3.019,0.001l4.496,4.482c0.825,0.825,0.833,2.165,0.008,2.99   l-2.717,2.554c0.993,1.68,1.769,3.28,2.269,5.28h3.836C75.454,69,76,70.267,76,71.433V33H24V71.435z"/></g></svg>                                    
                                    <h4 className="text-center my-4 font-bold text-lg">Création d'un site vitrine évolutif</h4>
                                </div>
                                <div className="w-full py-6 lg:w-1/3 flex flex-col" data-aos="fade-up" data-aos-delay="1000">
                                    <svg width="80px" className="mx-auto block" viewBox="0 0 100 125" fill="#d33683"><rect x="47.75" y="68.375" width="4.5" height="4.5"/><path d="M17.75,64.625c0,0.414,0.337,0.75,0.75,0.75h27.75h7.5H81.5c0.413,0,0.75-0.336,0.75-0.75v-3.75h-64.5V64.625z"/><polygon points="52.947,44.75 58.447,36.5 34.237,36.5 36.487,44.75 "/><path d="M50,0C22.386,0,0,22.386,0,50c0,27.614,22.386,50,50,50s50-22.386,50-50C100,22.386,77.614,0,50,0z M85.25,64.625  c0,2.068-1.682,3.75-3.75,3.75H55.25v4.5h6v3h-7.5h-7.5h-7.5v-3h6v-4.5H18.5c-2.068,0-3.75-1.682-3.75-3.75v-37.5  c0-1.655,1.346-3,3-3h64.5c1.654,0,3,1.345,3,3V64.625z"/><path d="M65.938,47.563c0.384,0,0.768,0.146,1.061,0.439l3.627,3.627L72.254,50l-3.627-3.627c-0.482-0.482-0.568-1.211-0.256-1.781  l-3.549-0.394l0.394,3.549C65.441,47.624,65.689,47.563,65.938,47.563z"/><path d="M17.75,57.875h64.5v-30.75h-64.5V57.875z M63.291,41.01l8.438,0.938c0.573,0.063,1.059,0.45,1.25,0.994  s0.053,1.149-0.355,1.557l-0.814,0.814l3.627,3.627c0.586,0.586,0.586,1.535,0,2.121l-3.75,3.75  c-0.293,0.293-0.677,0.439-1.061,0.439s-0.768-0.146-1.061-0.439l-3.627-3.627l-0.814,0.814c-0.407,0.408-1.013,0.545-1.557,0.355  c-0.544-0.191-0.931-0.677-0.994-1.25l-0.938-8.438c-0.05-0.453,0.108-0.904,0.43-1.226S62.839,40.958,63.291,41.01z M25.625,29.75  h5.625c0.676,0,1.269,0.453,1.447,1.105l0.721,2.645H61.25c0.553,0,1.062,0.305,1.322,0.792c0.261,0.488,0.233,1.08-0.074,1.54  l-7.5,11.25C54.72,47.5,54.252,47.75,53.75,47.75H37.305l0.716,2.625H53.75v3H36.875c-0.676,0-1.269-0.453-1.447-1.105l-5.324-19.52  h-4.479V29.75z"/></svg>                                    
                                    <h4 className="text-center my-4 font-bold text-lg">Mise en place d'une boutique en ligne</h4>
                                </div>
                            </element>
                        </div>
                    </section>
                    <section className="flex flex-col items-center md:flex-row my-12 md:my-24">
                        <div className="w-full xl:w-1/2" data-aos="fade-right">
                            <img src={imac} className="w-full lg:w-10/12"/>
                        </div>
                        <div className="w-full xl:w-1/2 pt-16" data-aos="fade-left">
                            <h2 className="font-normal text-3xl my-2 px-16"><span className="text-aquap">/</span>POSITIONNEMENT ET VALEURS PARTAGÉES</h2>
                            <br/>
                            <p className="font-bold text-lg px-16">
                                Déployer un <strong>outil web</strong> performant en mesure d'atteindre les objectifs fixés par Aqua Pensez-Vous et en accord avec ses valeurs.
                            </p>
                            <br/>
                            <div className="px-16 my-8">
                                <p className="text-3xl py-2 text-left italic" data-aos="fade-in">PURETÉ</p>
                                <p className="text-3xl py-2 text-right italic" data-aos="fade-in"data-aos-delay="400">PROFESSIONNALISME</p>
                                <p className="text-3xl sm:text-5xl py-2 text-center text-aquap italic font-bold" data-aos="zoom-in" data-aos-delay="1000">EFFICACITÉ</p>
                                <p className="text-3xl py-2 text-right italic" data-aos="fade-in" data-aos-delay="600">PERFORMANCE</p>
                                <p className="text-3xl py-2 text-left italic" data-aos="fade-in" data-aos-delay="200">COMMUNICATION</p>
                            </div>
                        </div>
                    </section>
                    <section className="w-full h-full lg:h-screen flex flex-col items-center" style={{background: '#00000085 url('+ bgbloc +')', backgroundSize:'cover', backgroundBlendMode:'multiply', backgroundRepeat:'no-repeat'}}>
                        <div>
                            <h2 className="font-normal text-3xl max-w-5xl my-6 pt-16 lg:py-32 px-16 text-white text-center uppercase" data-aos="fade-in"><span className="text-aquap">/</span>PROMOUVOIR L'OFFRE D'AQUA PENSEZ-VOUS PAR LA MISE EN PLACE D'UNE PLATEFORME WEB EFFICACE</h2>
                        </div>
                        <div className="w-full lg:w-1/2 mb-12 text-white font-bold text-center flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="200">
                                <svg width="60px" className="mx-auto block" fill="#d33683" viewBox="0 0 100 125"><path d="M96.1,9.3c-3.3-6.4-11.1-9-17.5-5.8c-6.4,3.3-8.9,11.3-5.8,17.5s9.9,19.5,9.9,19.5c0.8,1.4,2.8,1.4,3.4,0  c0,0,8-15.7,9.9-19.5C98,17.3,98,13,96.1,9.3z M84.5,22c-3.8,0-6.8-3-6.8-6.8c0-3.8,3-6.8,6.8-6.8s6.8,3,6.8,6.8  C91.3,19,88.3,22,84.5,22z"/><path d="M24.8,77.3c-0.3-0.7-1.2-1.1-2-0.7c-0.7,0.3-1.1,1.2-0.7,2c0.9,1.9,1.9,3.7,3.1,5.3c0.3,0.4,0.7,0.6,1.2,0.6  c0.3,0,0.6-0.1,0.9-0.3c0.7-0.5,0.8-1.4,0.4-2.1C26.5,80.7,25.6,79,24.8,77.3z"/><path d="M37.2,91c-1.6-0.9-3.2-2-4.6-3.3c-0.6-0.5-1.5-0.5-2.1,0.2c-0.5,0.6-0.5,1.5,0.2,2.1c1.6,1.3,3.2,2.5,5,3.6  c0.2,0.1,0.5,0.2,0.7,0.2c0.5,0,1-0.3,1.3-0.7C38.1,92.3,37.9,91.4,37.2,91z"/><path d="M22.5,70.2c-0.3-1.8-0.5-3.7-0.5-5.6c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5c0,2.1,0.2,4.1,0.6,6.1  c0.1,0.7,0.8,1.2,1.4,1.2c0.1,0,0.2,0,0.3,0C22.1,71.8,22.7,71,22.5,70.2z"/><path d="M62.5,93.4c-1.8,0.6-3.6,1.1-5.5,1.3c-0.8,0.1-1.4,0.9-1.2,1.7c0.1,0.7,0.7,1.3,1.5,1.3c0.1,0,0.1,0,0.2,0  c2-0.3,4-0.8,6-1.5c0.8-0.3,1.2-1.1,0.9-1.9C64.2,93.5,63.3,93.1,62.5,93.4z"/><path d="M49.6,95c-1.9-0.2-3.7-0.5-5.5-1c-0.8-0.2-1.6,0.2-1.8,1c-0.2,0.8,0.2,1.6,1,1.8c2,0.6,4,0.9,6.1,1.1c0,0,0.1,0,0.1,0  c0.8,0,1.4-0.6,1.5-1.3C51,95.8,50.4,95,49.6,95z"/><path d="M84.5,61.4c-0.8,0-1.5,0.7-1.5,1.5v1.8c0,1.3-0.1,2.6-0.3,3.9c-0.1,0.8,0.5,1.5,1.3,1.7c0.1,0,0.1,0,0.2,0  c0.7,0,1.4-0.5,1.5-1.3c0.2-1.4,0.3-2.9,0.3-4.3v-1.8C86,62,85.3,61.4,84.5,61.4z"/><path d="M84.5,47.6c-0.8,0-1.5,0.7-1.5,1.5V55c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5v-5.9C86,48.2,85.3,47.6,84.5,47.6z"/><path d="M82.8,74.9c-0.8-0.3-1.6,0.1-1.9,0.8c-0.7,1.7-1.5,3.4-2.5,5c-0.4,0.7-0.2,1.6,0.5,2c0.2,0.2,0.5,0.2,0.8,0.2  c0.5,0,1-0.2,1.3-0.7c1.1-1.7,2-3.6,2.8-5.5C84,76.1,83.6,75.2,82.8,74.9z"/><path d="M73.6,86.6c-1.4,1.3-2.8,2.5-4.4,3.5c-0.7,0.4-0.9,1.4-0.4,2c0.3,0.4,0.8,0.7,1.2,0.7c0.3,0,0.6-0.1,0.8-0.2  c1.7-1.1,3.3-2.4,4.8-3.8c0.6-0.6,0.6-1.5,0-2.1C75.2,86,74.2,86,73.6,86.6z"/><path d="M20.5,2.1c-9.9,0-18,8.5-18,19l0,19.3c0,10.5,8.1,19,18,19v0c0,0,0,0,0,0s0,0,0,0v0c9.9,0,18-8.5,18-19l0-19.3  C38.6,10.6,30.5,2.1,20.5,2.1z M19.1,56.5c-7.6-0.8-13.6-7.7-13.6-16v-4.2h13.6V56.5z M35.6,40.5c0,8.3-6,15.2-13.6,16V36.3h13.6  V40.5z M35.7,33.3H5.5V21.1c0-8.8,6.7-16,15-16.1c8.3,0,15.1,7.2,15.1,16.1V33.3z M20.5,2.2C20.5,2.2,20.5,2.2,20.5,2.2L20.5,2.2z"/></svg>
                                <h4 className="uppercase font-extrabold">
                                FONCTIONNALITÉ DRIVE
                                </h4>
                                <p className="font-bold">Système de Click & collect</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="600">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 100 125" fill="#d33683"><g><path d="M44.9257813,76.3730469h-1.6201172c-0.5527344,0-1,0.4472656-1,1s0.4472656,1,1,1h1.6201172c0.5527344,0,1-0.4472656,1-1   S45.4785156,76.3730469,44.9257813,76.3730469z"/><path d="M88.0419922,9H26.8652344c-0.5527344,0-1,0.4477539-1,1v11.1044922v4.6743164h-6.9521484c-0.5527344,0-1,0.4477539-1,1   v10.6943359h-1.1357422c-3.2089844,0-5.8193359,2.6108398-5.8193359,5.8203125v34.2592773   c0,3.2089844,2.6103516,5.8203125,5.8193359,5.8203125h18.2402344V89h-2.6904297c-0.5527344,0-1,0.4472656-1,1s0.4472656,1,1,1   h3.6904297H50.59375h3.6914063c0.5527344,0,1-0.4472656,1-1s-0.4472656-1-1-1H51.59375v-5.6269531h18.2363281   c3.2089844,0,5.8193359-2.6113281,5.8193359-5.8203125V65.2421875h4.7509766c4.7646484,0,8.6416016-3.8769531,8.6416016-8.6425781   V21.1044922V10C89.0419922,9.4477539,88.5947266,9,88.0419922,9z M19.9130859,38.4731445V27.7788086h5.9521484v36.4633789   c0,0.5527344,0.4472656,1,1,1h42.4726563v6.1347656H19.9130859V38.4731445z M12.9580078,43.293457   c0-2.1064453,1.7128906-3.8203125,3.8193359-3.8203125h1.1357422v31.9038086h-4.9550781V43.293457z M49.59375,89H37.0175781   v-5.6269531H49.59375V89z M73.6494141,77.5527344c0,2.1064453-1.7128906,3.8203125-3.8193359,3.8203125H50.59375H36.0175781   H16.7773438c-2.1064453,0-3.8193359-1.7138672-3.8193359-3.8203125v-4.1757813h5.9550781h51.4248047h3.3115234V77.5527344z    M73.6494141,71.3769531h-2.3115234v-6.1347656h2.3115234V71.3769531z M87.0419922,56.5996094   c0,3.6630859-2.9794922,6.6425781-6.6416016,6.6425781h-5.7509766h-4.3115234H27.8652344V26.7788086v-4.6743164h59.1767578   V56.5996094z M87.0419922,20.1044922H27.8652344V11h59.1767578V20.1044922z"/><path d="M32.3271484,16.5522461h0.5c0.5527344,0,1-0.4477539,1-1s-0.4472656-1-1-1h-0.5c-0.5527344,0-1,0.4477539-1,1   S31.7744141,16.5522461,32.3271484,16.5522461z"/><path d="M36.0185547,16.5522461h1.0634766c0.5527344,0,1-0.4477539,1-1s-0.4472656-1-1-1h-1.0634766c-0.5527344,0-1,0.4477539-1,1   S35.4658203,16.5522461,36.0185547,16.5522461z"/><path d="M40.2734375,16.5522461h0.5c0.5527344,0,1-0.4477539,1-1s-0.4472656-1-1-1h-0.5c-0.5527344,0-1,0.4477539-1,1   S39.7207031,16.5522461,40.2734375,16.5522461z"/><path d="M51.4326172,42.0297852c1.7568359,1.2875977,3.8369141,1.9682617,6.0175781,1.9682617   c0.2731934,0,0.5447998-0.0106201,0.8143311-0.0317383c1.8868408-0.1478882,3.6733398-0.8094482,5.2071533-1.9331055   c2.6376953-1.9111328,4.2128906-5.0029297,4.2128906-8.2700195c0-5.6391602-4.5908203-10.2270508-10.234375-10.2270508   c-5.6396484,0-10.2275391,4.5878906-10.2275391,10.2270508C47.2226563,37.0297852,48.7978516,40.121582,51.4326172,42.0297852z    M61.4373169,40.9400024c-0.1241455,0.0687866-0.2461548,0.1417847-0.3735962,0.2036133   c-0.282959,0.1365356-0.574585,0.2510376-0.8702393,0.3533325c-0.0890503,0.0309448-0.1754761,0.069397-0.265564,0.097168   c-0.3754883,0.1156006-0.7583618,0.2053833-1.1456909,0.2668457c-0.017395,0.0027466-0.0342407,0.0082397-0.0516968,0.0109253   c-0.8439941,0.12854-1.7067261,0.1290894-2.5514526,0.0006104c-0.006958-0.0010986-0.0136719-0.0032959-0.0205688-0.0043335   c-0.3991089-0.0617065-0.793396-0.1549683-1.1803589-0.274231c-0.081604-0.0252075-0.1598511-0.0602417-0.2407227-0.0880737   c-0.3052368-0.1046753-0.6060791-0.2233276-0.8980713-0.364563c-0.121521-0.059082-0.237793-0.1289063-0.3563843-0.194397   c-0.1622925-0.0890503-0.3185425-0.1897583-0.4750366-0.2905884c0.1080933-2.3580933,2.0578613-4.2442017,4.4422607-4.2442017   c2.3886108,0,4.3415527,1.887085,4.4492188,4.2455444C61.7472534,40.7556763,61.5950928,40.8531494,61.4373169,40.9400024z    M55.1435547,32.1005859c0-1.2729492,1.0361328-2.3085938,2.3095703-2.3085938s2.3085938,1.0356445,2.3085938,2.3085938   c0,1.2734375-1.0351563,2.309082-2.3085938,2.309082S55.1435547,33.3740234,55.1435547,32.1005859z M57.4501953,25.5361328   c4.5400391,0,8.234375,3.6904297,8.234375,8.2270508c0,1.9962769-0.7334595,3.9081421-2.0159912,5.3878784   c-0.475708-1.7232056-1.6459351-3.1601563-3.1951904-3.9842529c0.7936401-0.7819824,1.2883301-1.8665771,1.2883301-3.0662231   c0-2.3759766-1.9326172-4.3085938-4.3085938-4.3085938s-4.3095703,1.9326172-4.3095703,4.3085938   c0,1.1992798,0.4945068,2.2835693,1.2880249,3.0655518c-1.5480347,0.8238525-2.7174072,2.2606812-3.1929321,3.9840088   c-1.2816162-1.4785156-2.0159912-3.390686-2.0159912-5.3869629C49.2226563,29.2265625,52.9130859,25.5361328,57.4501953,25.5361328   z"/><path d="M37.0371094,53.8867188h7.5888672h33.2441406c0.5527344,0,1-0.4472656,1-1v-4.7231445c0-0.5522461-0.4472656-1-1-1   H44.6259766h-7.5888672c-0.5527344,0-1,0.4477539-1,1v4.7231445C36.0371094,53.4394531,36.484375,53.8867188,37.0371094,53.8867188   z M45.6259766,49.1635742h31.2441406v2.7231445H45.6259766V49.1635742z M38.0371094,49.1635742h5.5888672v2.7231445h-5.5888672   V49.1635742z"/><path d="M37.0371094,61.8105469h7.5888672h33.2441406c0.5527344,0,1-0.4472656,1-1v-4.7226563c0-0.5527344-0.4472656-1-1-1   H44.6259766h-7.5888672c-0.5527344,0-1,0.4472656-1,1v4.7226563C36.0371094,61.3632813,36.484375,61.8105469,37.0371094,61.8105469   z M45.6259766,57.0878906h31.2441406v2.7226563H45.6259766V57.0878906z M38.0371094,57.0878906h5.5888672v2.7226563h-5.5888672   V57.0878906z"/></g></svg>                               
                                <h4 className="uppercase font-bold">
                                SITE VITRINE
                                </h4>
                                <p className="font-normal">Conçu pour évoluer</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="400">
                                <svg className="mx-auto block" width="60px" fill="#d33683" viewBox="0 0 90 112.5" ><g><path d="M81.5,34.75H56.9400024c-0.5500488,0-1,0.4500122-1,1v33.8099976c0,0.5499878,0.4499512,1,1,1H81.5   c0.5599976,0,1-0.4500122,1-1V35.75C82.5,35.2000122,82.0599976,34.75,81.5,34.75z"/><path d="M81.7399902,31.0299683h-8.9000244V17.7099609c0-2.5699463-2.0899658-4.6599731-4.6499634-4.6599731H14.0599976   c-2.5700073,0-4.6600342,2.0900269-4.6600342,4.6599731v37.9100342c0,2.5700073,2.0900269,4.6599731,4.6600342,4.6599731   h38.7699585v1h-8.2799683h-6.8599854H8.1399536c-2.0699463,0-3.7599487,1.6799927-3.7599487,3.75s1.6900024,3.75,3.7599487,3.75   h29.5500488h15.1399536v4.2900391c0,2.1099854,1.6800537,3.8200073,3.7700195,3.8699951   c0.0300293,0.0100098,0.0700073,0.0100098,0.0999756,0.0100098h25.0400391c2.1400146,0,3.8800049-1.7400513,3.8800049-3.8800049   V34.8999634C85.6199951,32.7600098,83.8800049,31.0299683,81.7399902,31.0299683z M44.5499878,66.0299683h-6.8599854v-2h6.8599854   V66.0299683z M52.8299561,34.8999634V54.039978H15.1499634V19.2799683h51.9400024v11.75H56.6999512   C54.5700073,31.0299683,52.8299561,32.7600098,52.8299561,34.8999634z M83.6199951,73.0700073   c0,1.039978-0.8500366,1.8800049-1.8800049,1.8800049H56.6999512c-1.0299683,0-1.8699951-0.8400269-1.8699951-1.8800049V60.2799683   V34.8999634c0-1.0299683,0.8400269-1.8699951,1.8699951-1.8699951h25.0400391c1.0299683,0,1.8800049,0.8400269,1.8800049,1.8699951   V73.0700073z"/></g></svg>
                                <h4 className="uppercase font-bold">
                                RESPONSIVE DESIGN
                                </h4>
                                <p className="font-normal">Support des interactions « Touch »</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 text-white text-center flex mb-12 flex-col lg:flex-row">
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="800">
                            <svg width="60px" className="mx-auto block" viewBox="0 0 100 125" fill="#d33683"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><slices/><sliceSourceBounds width="1448.6" height="1442.5" x="0.7" y="-1444.9" bottomLeftOrigin="true"/></sfw></metadata><path d="M94.2,57.4c-0.6-0.8-0.9-1.7-0.9-2.7v-5.5v-1.6V17c0-4.1-3.3-7.5-7.5-7.5H53.7H25.8c-4.1,0-7.5,3.3-7.5,7.5v22.5h0V46h7.4  l0-29.1c0,0,0,0,0,0h24.6h35.5c0,0,0,0,0,0l0,30.7v2v5.7H46.5L46,57.1c-0.1,0.4-0.1,0.8-0.3,1.2l-3.5,12.4h51.2  c2.8,0,5.1-2.3,5.1-5.1v-2.2c0-0.5-0.2-0.9-0.4-1.3L94.2,57.4z M63.9,63.3c0,1.4-1.2,2.6-2.6,2.6h-11c-1.4,0-2.6-1.2-2.6-2.6v-0.6  h16.2V63.3z M49.1,48.3c0.8,0,1.5-0.7,1.5-1.5v-0.2c0-0.8-0.7-1.5-1.5-1.5h-4.4h-2.8h-1.2l-1.9,6.7c-0.7-0.4-1.4-0.6-2.3-0.6H6.7  c-1.4,0-2.7,0.6-3.5,1.7c-0.9,1.1-1.2,2.5-0.8,3.9l4,16.3c0.5,2,2.3,3.4,4.4,3.4h4.7h16.6H35c1,0,1.8,0.8,1.8,1.8  c0,1-0.8,1.8-1.8,1.8H16.8c0,0-0.1,0-0.2,0H6.7c-0.1,0-0.1,0-0.2,0c-2.8,0.1-5,2.4-5,5.2c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2  c0-0.6-0.1-1.2-0.3-1.7h3.7h10.1c-0.2,0.5-0.3,1.1-0.3,1.7c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2c0-0.6-0.1-1.2-0.3-1.7  c2.8-0.2,5-2.5,5-5.3c0-2.5-1.7-4.6-4-5.2l4.6-16.2c0.1-0.3,0.1-0.5,0.2-0.8l2.2-7.8H49.1z M6.7,87C5.8,87,5,86.2,5,85.3  c0-0.9,0.8-1.7,1.7-1.7s1.7,0.8,1.7,1.7S7.7,87,6.7,87z M30.4,87c-0.9,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7s1.7,0.8,1.7,1.7  S31.4,87,30.4,87z M5.7,55.9c-0.1-0.4,0.1-0.7,0.2-0.9c0.1-0.1,0.4-0.4,0.8-0.4h2.9l0.8,4h-4L5.7,55.9z M7.2,62.2h3.9l0.8,3.7H8.2  L7.2,62.2z M10.7,72.9c-0.5,0-0.9-0.3-1-0.8L9,69.4h3.6l0.7,3.5H10.7z M19.7,72.9h-2.7l-0.7-3.5h3.5V72.9z M19.7,65.9h-4.2l-0.8-3.7  h5V65.9z M19.7,58.7h-5.8l-0.8-4h6.6V58.7z M25.7,72.9h-2.5v-3.5h3.2L25.7,72.9z M27.2,65.9h-4v-3.7H28L27.2,65.9z M23.2,58.7  L23.2,58.7l0-4h6.5l-0.9,4H23.2z M32.9,72.2c-0.1,0.4-0.5,0.7-1,0.7h-2.7l0.8-3.5h3.7L32.9,72.2z M34.7,65.9h-3.9l0.8-3.7h4.1  L34.7,65.9z M37.5,55.9l-0.8,2.8h-4.3l0.9-4h3.3c0.4,0,0.7,0.3,0.8,0.4C37.4,55.2,37.6,55.5,37.5,55.9z"/></svg>
                                <h4 className="uppercase font-bold">
                                VENTE EN LIGNE
                                </h4>
                                <p className="font-normal">Création d'un espace e-commerce</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="1000">
                            <svg width="60px" className="mx-auto block" viewBox="0 0 100 125" fill="#d33683"><path d="M90.7,17H9.3c-1.7,0-3.1,1.4-3.1,3.1v50.5c0,1.7,1.4,3.1,3.1,3.1h81.3c1.7,0,3.1-1.4,3.1-3.1V20.1  C93.8,18.4,92.4,17,90.7,17z M50,71.7c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9c1.6,0,2.9,1.3,2.9,2.9C52.9,70.4,51.6,71.7,50,71.7z   M88.6,61.5c0,1.7-1.4,3.1-3.1,3.1h-71c-1.7,0-3.1-1.4-3.1-3.1V25.2c0-1.7,1.4-3.1,3.1-3.1h71c1.7,0,3.1,1.4,3.1,3.1V61.5L88.6,61.5  z"/><path d="M60.5,76.2c-0.3,1.9-2,3.4-4,3.4h-13c-2,0-3.7-1.5-4-3.4H6.3c0,3.8,3,6.8,6.8,6.8H87c3.8,0,6.8-3,6.8-6.8H60.5z"/><path d="M26.3,33.6h11c0.9,0,1.6-0.7,1.6-1.6c0-0.9-0.7-1.6-1.6-1.6h-11c-0.9,0-1.6,0.7-1.6,1.6C24.8,32.9,25.5,33.6,26.3,33.6z"/><path d="M37.3,52.8h-11c-0.9,0-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6h11c0.9,0,1.6-0.7,1.6-1.6C38.8,53.4,38.2,52.8,37.3,52.8z"/><path d="M38.9,43.2c0-0.9-0.7-1.6-1.6-1.6H21.2c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6h16.2C38.2,44.8,38.9,44.1,38.9,43.2z"/><path d="M78.3,39.1h-7.5c0-0.1-0.1-0.2-0.1-0.2l-7.3-11.3c-0.1-0.3-0.3-0.6-0.6-0.8c-0.3-0.2-0.6-0.2-0.9-0.2  c-0.3,0-0.6,0.1-0.9,0.2c-0.3,0.2-0.5,0.5-0.6,0.8l-7.3,11.3C53.1,38.9,53,39,53,39.1h-7.5c-1.2,0-2.1,0.9-2.1,2.1  c0,1.2,0.9,2.1,2.1,2.1h0.1l3.6,14.9c0.2,1,1.2,1.7,2.2,1.7h9h3.1h9c1,0,2-0.8,2.2-1.7l3.6-14.9h0.1c1.2,0,2.1-0.9,2.1-2.1  C80.4,40,79.5,39.1,78.3,39.1z M55.4,56.8c0,0.8-0.6,1.4-1.4,1.4c-0.8,0-1.4-0.6-1.4-1.4V45.2c0-0.8,0.6-1.4,1.4-1.4  c0.8,0,1.4,0.6,1.4,1.4V56.8z M63.2,56.8c0,0.8-0.6,1.4-1.4,1.4c-0.8,0-1.4-0.6-1.4-1.4V45.2c0-0.8,0.6-1.4,1.4-1.4  c0.8,0,1.4,0.6,1.4,1.4V56.8z M71.1,56.8c0,0.8-0.6,1.4-1.4,1.4c-0.8,0-1.4-0.6-1.4-1.4V45.2c0-0.8,0.6-1.4,1.4-1.4  c0.8,0,1.4,0.6,1.4,1.4V56.8z M61.9,30.9l5.3,8.2H56.6L61.9,30.9z"/></svg>                                
                                <h4 className="uppercase font-bold">
                                FICHES PRODUITS
                                </h4>
                                <p className="font-normal">Création de fiches produits sur-mesure</p>
                            </div>
                            <div className="w-full lg:w-1/3 py-5" data-aos="zoom-in" data-aos-delay="1200">
                                <svg width="60px" className="mx-auto block" viewBox="0 0 128 160" fill="#d33683"><g><path d="M89.5,96.7c4.6,0,8.4-3.8,8.4-8.4c0-4.6-3.8-8.4-8.4-8.4c-4.6,0-8.4,3.8-8.4,8.4C81.1,92.9,84.9,96.7,89.5,96.7z    M89.5,82.9c3,0,5.4,2.4,5.4,5.4c0,3-2.4,5.4-5.4,5.4c-3,0-5.4-2.4-5.4-5.4C84.1,85.3,86.5,82.9,89.5,82.9z"/><path d="M15.9,15.5c-0.8,0-1.5,0.7-1.5,1.5v77.9h63.4c2.3,4.1,6.7,6.9,11.8,6.9c1.8,0,3.5-0.4,5-1l10.2,10.2c1,1,2.3,1.5,3.7,1.5   s2.7-0.5,3.7-1.5c2-2,2-5.3,0-7.3L102,93.5c0.7-1.6,1.1-3.4,1.1-5.2c0-7.4-6.1-13.5-13.5-13.5c-3,0-5.8,1-8,2.7V45.5h-9.9v44.1h4.5   c0.1,0.8,0.2,1.5,0.4,2.3H17.4V17C17.4,16.2,16.7,15.5,15.9,15.5z M110,105.8c0.9,0.9,0.9,2.2,0,3.1c-0.8,0.8-2.3,0.8-3.1,0   l-9.6-9.6c1.2-0.9,2.3-1.9,3.1-3.1L110,105.8z M89.5,77.8c5.8,0,10.5,4.7,10.5,10.5s-4.7,10.5-10.5,10.5S79,94,79,88.3   S83.7,77.8,89.5,77.8z M74.6,48.5h3.9v32c-1.3,1.8-2.1,3.9-2.4,6.1h-1.5V48.5z"/><path d="M20.3,89.4h9.9V72.5h-9.9V89.4z M23.3,75.5h3.9v10.9h-3.9V75.5z"/><path d="M54.8,89.4h9.9V54.8h-9.9V89.4z M57.8,57.8h3.9v28.6h-3.9V57.8z"/><path d="M37.3,89.3h10.3V63.9H37.3V89.3z M40.3,66.9h4.3v19.5h-4.3V66.9z"/><path d="M25.7,55.3c-2.7,0-4.9,2.2-4.9,4.9s2.2,4.9,4.9,4.9c2.7,0,4.9-2.2,4.9-4.9c0-0.3,0-0.7-0.1-1l8.4-8.4   c0.9,1.1,2.2,1.7,3.7,1.7c2.4,0,4.4-1.7,4.8-4h7.8c0.7,1.8,2.5,3.1,4.5,3.1c2.7,0,4.9-2.2,4.9-4.9c0-0.3,0-0.6-0.1-0.8l8.7-8.4   c0.8,0.7,1.9,1.1,3.1,1.1c2.7,0,4.9-2.2,4.9-4.9c0-2.7-2.2-4.9-4.9-4.9c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0.1,0.8,0.2,1.2l-8.5,8.2   c-0.9-0.8-2.1-1.3-3.4-1.3c-2.3,0-4.3,1.6-4.8,3.8h-8c-0.8-1.7-2.5-2.8-4.4-2.8c-2.7,0-4.9,2.2-4.9,4.9c0,0,0,0.1,0,0.1l-8.8,8.8   C28.1,55.8,26.9,55.3,25.7,55.3z M76.5,31.7c1.1,0,1.9,0.9,1.9,1.9s-0.9,1.9-1.9,1.9s-1.9-0.9-1.9-1.9S75.4,31.7,76.5,31.7z    M59.8,44.8c1.1,0,1.9,0.9,1.9,1.9s-0.9,1.9-1.9,1.9s-1.9-0.9-1.9-1.9S58.8,44.8,59.8,44.8z M42.6,45.7c1.1,0,1.9,0.9,1.9,1.9   s-0.9,1.9-1.9,1.9s-1.9-0.9-1.9-1.9S41.6,45.7,42.6,45.7z M25.7,62.2c-1.1,0-1.9-0.9-1.9-1.9s0.9-1.9,1.9-1.9s1.9,0.9,1.9,1.9   S26.7,62.2,25.7,62.2z"/></g></svg>                                
                                <h4 className="uppercase font-bold">
                                OPTIMISATION SEO
                                </h4>
                                <p className="font-normal">Définition d'une stratégie de visibilité pour des secteurs ciblés</p>
                            </div>
                        </div>
                    </section>
                    <section className="h-full w-full mt-32 flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2  py-8 px-12 lg:px-24 mb-24 xl:px-48" data-aos="fade-right">
                            <h2 className="font-normal text-3xl my-2 uppercase"><span className="text-aquap">/</span>ACCOMPAGNEMENT À LA MISE EN PLACE D'UN SYSTÈME DE DRIVE</h2>
                            <br/>
                            <p className="font-normal text-justify">
                                Accompagner Aqua Pensez-Vous dans un contexte sociétal inédit. 
                            </p>
                            <br/>
                            <ul className="font-normal text-justify">
                                <li className="flex flex-row">
                                <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#333333" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#333333" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Création d'une boutique permettant la vente en ligne.
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#333333" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#333333" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Développement d'un système sur la base du Click & Collect.
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#3333333" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#333333" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Ajout d'une fenêtre d'information de type pop-up.
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 mx-auto block order-first lg:order-last" data-aos="fade-left">
                            <img width="750px" className="pl-24 md:pr-0 md:ml-64 lg:ml-0 lg:pr-0 lg:pl-24 xl:pl-64 xl:ml-40 xl:pr-0 pb-16 xl:py-0 xl:pb-32" src={smartphone} alt="Création site internet Toulouse"/>
                        </div>
                    </section>
                    <section className="h-full w-full flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 mx-auto block" data-aos="fade-right">
                            <img className="w-full md:w-3/5 lg:w-3/4 xl:w-3/5 xl:-mt-24 mx-auto block px-24 xl:px-32 pb-16 xl:py-0 xl:pb-32" src={mockup} alt="Création site internet Toulouse"/>
                        </div>
                        <div className="w-full lg:w-1/2 px-12 lg:px-24 xl:px-48" data-aos="fade-left">
                            <h2 className="font-normal text-3xl my-2 uppercase"><span className="text-aquap1">/</span>Création d’un site web au caractère évolutif</h2>
                            <br/>
                            <p className="font-normal text-justify">
                                Développer une plateforme web adaptable en fonction de l'évolution des objectifs de l'entreprise.
                            </p>
                            <br/>
                            <ul className="font-normal text-justify">
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#d33683" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#d33683" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Création d'un espace de vente en ligne.
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#d33683" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#d33683" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Création de fiches produits sur-mesure.
                                </li>
                                <br/>
                                <li className="flex flex-row">
                                    <svg style={{maxHeight:'37px', minWidth:'20px'}} className="mr-6" width="20px" viewBox="0 0 100 125"><g><g><path fill="#d33683" d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,88.9     c-21.5,0-38.9-17.5-38.9-38.9S28.5,11.1,50,11.1S88.9,28.5,88.9,50S71.5,88.9,50,88.9z"/><path fill="#d33683" d="M65.5,34L45.3,56.9l-11-11c-1.7-1.7-4.4-1.7-6.1,0c-1.7,1.7-1.7,4.4,0,6l14.2,14.2c0.8,0.8,1.9,1.3,3,1.3     c0,0,0.1,0,0.1,0c1.2,0,2.3-0.6,3.1-1.4l23.1-26.3c1.6-1.8,1.4-4.5-0.4-6C69.7,32.1,67,32.3,65.5,34z"/></g></g></svg>
                                    Déploiement de nouveaux objectifs de visibilité et accompagnement stratégique.
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className=" w-full h-full flex flex-col justify-center items-end px-4 pt-12 pb-0 bg-cover mt-24" style={{ background: '#000000e6 url( ' + bloccontact + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'top' }}>
                        <div className="max-w-5xl mx-auto flex items-center flex-col py-6" data-aos="fade-down" >
                            <br/>
                            <svg className="mx-auto block" width="80px" viewBox="0 0 100 125"><path fill="#FFFFFF" d="M64.84509,52.57434H54.45068c2.20191-7.42346,6.02661-12.75745,10.39441-13.81421Zm0,3.17908H53.63623a52.05778,52.05778,0,0,0-1.14429,9.53711H64.84509Zm0,39.24658V81.18573H54.45068C56.65259,88.60925,60.47729,93.94324,64.84509,95Zm0-26.5304H52.49194a52.05831,52.05831,0,0,0,1.14429,9.53711H64.84509ZM37.86963,65.29053H49.30945a56.25569,56.25569,0,0,1,1.04309-9.53711H40.07544A28.41134,28.41134,0,0,0,37.86963,65.29053Zm2.20581,12.71618h10.2771a56.25569,56.25569,0,0,1-1.04309-9.53711H37.86963A28.41168,28.41168,0,0,0,40.07544,78.00671ZM68.02417,65.29053h12.353a52.02563,52.02563,0,0,0-1.14429-9.53711H68.02417Zm0-26.5304V52.57434H78.41846C76.21667,45.15088,72.39185,39.81689,68.02417,38.76013ZM57.718,39.631A28.74514,28.74514,0,0,0,41.67236,52.57434h9.429C52.57581,47.14423,54.87463,42.65784,57.718,39.631Zm0,54.49811c-2.84339-3.02686-5.14221-7.51318-6.6167-12.94336h-9.429A28.74465,28.74465,0,0,0,57.718,94.12909ZM91.19678,81.18573H81.76807c-1.47461,5.43018-3.77344,9.9165-6.61682,12.94336A28.744,28.744,0,0,0,91.19678,81.18573Zm0-28.61139A28.7445,28.7445,0,0,0,75.15125,39.631c2.84338,3.02686,5.14221,7.51325,6.61682,12.94336Zm1.597,3.17908h-10.277a56.24475,56.24475,0,0,1,1.043,9.53711h11.4397A28.4081,28.4081,0,0,0,92.79382,55.75342ZM68.02417,78.00671H79.23291A52.02616,52.02616,0,0,0,80.3772,68.4696h-12.353ZM94.99951,68.4696H83.55981a56.24475,56.24475,0,0,1-1.043,9.53711h10.277A28.40844,28.40844,0,0,0,94.99951,68.4696ZM68.02417,95c4.36768-1.05676,8.1925-6.39075,10.39429-13.81427H68.02417ZM4.99951,75.85107V12.41455A7.42307,7.42307,0,0,1,12.41455,5H87.58447a7.42307,7.42307,0,0,1,7.415,7.41455v39.708a32.2972,32.2972,0,0,0-5-7.10376V22.553h-80V75.85107a2.41719,2.41719,0,0,0,2.415,2.41456H36.3584a32.05257,32.05257,0,0,0,2.41333,5H12.41455A7.42308,7.42308,0,0,1,4.99951,75.85107Zm45-59.27685A1.51083,1.51083,0,0,0,51.51025,18.085H84.489a1.5107,1.5107,0,0,0,1.5105-1.51074V13.59546A1.5105,1.5105,0,0,0,84.489,12.085H51.51025a1.51062,1.51062,0,0,0-1.51074,1.5105ZM35.61658,15.085a3,3,0,1,0,3-3A3.00007,3.00007,0,0,0,35.61658,15.085Zm-11,0a3,3,0,1,0,3-3A3.00007,3.00007,0,0,0,24.61658,15.085Zm-11,0a3,3,0,1,0,3-3A3.00007,3.00007,0,0,0,13.61658,15.085Z"/></svg>
                            <h2 data-aos='fade-right' className="text-center text-white text-2xl md:text-5xl century">
                                Vous souhaitez mettre en place un projet similaire à celui-ci ? Travaillons ensemble !
                            </h2>
                        </div>
                        <div className="max-w-6xl mx-auto flex text-center my-12" data-aos="zoom-in">
                            {/* <RappelForm /> */}
                            <RoundButton color="white" colortext="black" url="/contact-agence-web-toulouse/" text="Je veux améliorer ma visibilité sur internet" />
                        </div>
                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start text-center my-12">
                            <div className="w-full sm:w-1/3 px-6 sm:px-12 py-2 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                                <Link to="/agence-digitale-toulouse/">
                                    <svg className="mx-auto block" viewBox="0 0 100 125" width="80px"><path fill="#FFFFFF" d="M9.72,57.45a2.31,2.31,0,0,0,.86-3.15l-.58-1,7.8-1.44,1.54,2.69a9.71,9.71,0,0,0,18-6.29l16.9-3.11,1.18,2.06a2.31,2.31,0,1,0,4-2.29L37.67,6.81a2.31,2.31,0,0,0-4,2.29l1,1.71-29.48,34-.38-.66a2.31,2.31,0,1,0-4,2.29L6.57,56.59A2.31,2.31,0,0,0,9.72,57.45Zm23.11-8.37a5.1,5.1,0,0,1-9.48,3.16L22.61,51ZM53.61,23a2.55,2.55,0,0,1,.95-3.48l7.58-4.33a2.55,2.55,0,1,1,2.53,4.42L57.08,24A2.55,2.55,0,0,1,53.61,23Zm-4.19-5.21a2.52,2.52,0,0,1-.27-3.43l5.58-7a2.52,2.52,0,1,1,3.94,3.14l-5.58,7a2.53,2.53,0,0,1-1.77.94h-.19A2.53,2.53,0,0,1,49.42,17.81ZM56,29.27a2.52,2.52,0,0,1,2.11-3L66.94,25a2.52,2.52,0,1,1,.71,5l-8.86,1.26-.35,0A2.53,2.53,0,0,1,56,29.27Zm-30,65.09A2.93,2.93,0,0,1,23,91.42V81.19a2.93,2.93,0,0,1,2.93-2.93h7.94a2.93,2.93,0,0,1,2.93,2.93V91.42a2.93,2.93,0,0,1-2.93,2.93Zm19.67,0a2.93,2.93,0,0,1-2.93-2.93V77.76a2.93,2.93,0,0,1,2.93-2.93h7.94a2.93,2.93,0,0,1,2.93,2.93V91.42a2.93,2.93,0,0,1-2.93,2.93ZM76.17,70V91.42a2.93,2.93,0,0,1-2.93,2.93H65.29a2.93,2.93,0,0,1-2.93-2.93V70a2.93,2.93,0,0,1,2.93-2.93h7.94A2.93,2.93,0,0,1,76.17,70ZM95.84,55.46v35.9a3,3,0,0,1-2.93,3H85a3,3,0,0,1-2.93-3V55.46a3,3,0,0,1,2.93-3H92.9A3,3,0,0,1,95.84,55.46Zm3.63-19A3,3,0,0,1,97.16,40a3,3,0,0,1-3.56-2.3L92.38,32A84.28,84.28,0,0,1,71.72,54.85,79.16,79.16,0,0,1,48.61,66.91,77.28,77.28,0,0,1,25,70.9c-1.35,0-2.15-.05-2.23-.06a3,3,0,0,1,.43-6s.59,0,1.67,0a72.67,72.67,0,0,0,22-3.74c16.92-5.6,30.5-16.48,40.38-32.36L81.71,30a3,3,0,0,1-1.25-5.86l12.73-2.72a3,3,0,0,1,3.56,2.3Z"/></svg>
                                    <p className="text-xl text-white century pt-3">WEBMARKETING</p>
                                </Link>
                            </div>
                            <div className="w-full sm:w-1/3 sm:px-12 py-2 flex flex-col items-center justify-center sm:my-0 my-6" data-aos='zoom-in' data-aos-delay="400">
                                <Link to="/referencement-toulouse/">
                                    <svg className="mx-auto block" width="80px" viewBox="0 0 1024 1280"><g><g><g><path fill="#FFFFFF" d="M746.5,322c11.7,29,19.7,59.3,24,90.3c-0.6-4.4-1.2-8.9-1.8-13.3c4.4,33.2,4.4,66.9,0,100.1     c0.6-4.4,1.2-8.9,1.8-13.3c-4.5,33-13.3,65.2-26.2,95.8c1.7-4,3.4-8,5-11.9c-12.4,29-28.3,56.3-47.5,81.3     c2.6-3.4,5.2-6.7,7.8-10.1c-19.8,25.6-42.7,48.6-68.3,68.4c3.4-2.6,6.7-5.2,10.1-7.8c-25.5,19.6-53.4,35.9-83,48.4     c4-1.7,8-3.4,11.9-5c-30.3,12.6-62,21.3-94.5,25.7c4.4-0.6,8.9-1.2,13.3-1.8c-33.2,4.4-66.8,4.4-100,0c4.4,0.6,8.9,1.2,13.3,1.8     c-32.5-4.4-64.3-13.1-94.5-25.7c4,1.7,8,3.4,11.9,5c-29.6-12.5-57.5-28.8-83-48.4c3.4,2.6,6.7,5.2,10.1,7.8     c-25.4-19.7-48.3-42.6-68-68c2.6,3.4,5.2,6.7,7.8,10.1c-19.6-25.5-35.9-53.4-48.4-83c1.7,4,3.4,8,5,11.9     c-12.6-30.3-21.3-62-25.7-94.5c0.6,4.4,1.2,8.9,1.8,13.3c-4.4-33.2-4.4-66.8,0-100c-0.6,4.4-1.2,8.9-1.8,13.3     c4.4-32.5,13.1-64.3,25.7-94.5c-1.7,4-3.4,8-5,11.9c12.5-29.6,28.8-57.5,48.4-83c-2.6,3.4-5.2,6.7-7.8,10.1     c19.7-25.4,42.6-48.3,68-68c-3.4,2.6-6.7,5.2-10.1,7.8c25.5-19.6,53.4-35.9,83.1-48.4c-4,1.7-8,3.4-11.9,5     c30.4-12.7,62.2-21.3,94.9-25.7c-4.4,0.6-8.9,1.2-13.3,1.8c32.9-4.3,66.2-4.3,99.1,0c-4.4-0.6-8.9-1.2-13.3-1.8     c33.1,4.5,65.5,13.3,96.2,26.2c-4-1.7-8-3.4-11.9-5c3.6,1.6,7.3,3.2,10.9,4.8c5.7,3.7,11.9,5.6,18.6,5.9     c6.6,1.5,13.3,1.2,19.9-0.9c11.6-3.2,24.2-12.2,29.9-23c6.1-11.6,9.2-25.7,5-38.5c-3.8-11.7-11.3-24.5-23-29.9     C595.6,51.1,559,38.5,520.5,32.5c-38.3-6-76.6-8.3-115.2-3.7c-38.8,4.6-76.4,12.7-112.6,27.7c-19.7,8.1-39,16.9-57.4,27.7     c-19,11.2-36.7,24.2-54,38C121.6,169.8,77.6,234.8,51.1,306.2C38.4,340.5,31.5,376.4,28,412.8c-3.6,36.6-1.1,73,4.8,109.2     c5.9,36.4,17.6,71,32.7,104.6c15.4,34.4,36.2,65.5,60.1,94.5c48,58.4,112.6,101.4,183.4,127c34.6,12.5,70.8,19.3,107.4,22.5     c36.3,3.2,72.6,0.5,108.5-5.5c73.5-12.4,141.7-46.6,198.6-94.1c61-51,106-120.7,129.8-196.3c23.3-74.1,24.8-155.2,5.8-230.4     c-4.2-16.6-9.6-32.9-16-48.9c-1.5-6.5-4.5-12.2-8.9-17c-3.5-5.4-8.2-9.7-14-12.9c-10.7-6.3-26.5-8.9-38.5-5     c-12.1,3.9-23.8,11.4-29.9,23C745.7,294.6,741.6,309.8,746.5,322L746.5,322z"/></g></g><g><g><path fill="#FFFFFF" d="M983.2,912.5c-26.5-26.5-53.1-53.1-79.6-79.6c-42.2-42.2-84.4-84.4-126.6-126.6     c-9.6-9.6-19.2-19.2-28.7-28.7c-9.1-9.1-22.5-14.6-35.4-14.6c-12.3,0-26.9,5.4-35.4,14.6c-8.7,9.5-15.2,22-14.6,35.4     c0.6,13.3,5.1,25.8,14.6,35.4c26.5,26.5,53.1,53.1,79.6,79.6c42.2,42.2,84.4,84.4,126.6,126.6c9.6,9.6,19.2,19.2,28.7,28.7     c9.1,9.1,22.5,14.6,35.4,14.6c12.3,0,26.9-5.4,35.4-14.6c8.7-9.5,15.2-22,14.6-35.4C997.2,934.5,992.7,922,983.2,912.5     L983.2,912.5z"/></g></g><g><g><g><path fill="#FFFFFF" d="M322.7,568c22.6-22.6,45.2-45.2,67.8-67.8c36-36,72-72,107.9-107.9c8.2-8.2,16.4-16.4,24.6-24.6      c-23.6,0-47.1,0-70.7,0c15.6,15.6,31.2,31.2,46.8,46.8c24.9,24.9,49.8,49.8,74.7,74.7c5.7,5.7,11.5,11.5,17.2,17.2      c19.1,19.1,51.6,19.1,70.7,0c10.6-10.6,21.3-21.3,31.9-31.9c25.6-25.6,51.1-51.1,76.7-76.7c30.9-30.9,61.8-61.8,92.8-92.8      c26.7-26.7,53.4-53.4,80.1-80.1c12.9-12.9,26.1-25.7,38.8-38.8c0.2-0.2,0.4-0.4,0.6-0.6c9.1-9.1,14.6-22.5,14.6-35.4      c0-12.3-5.4-26.9-14.6-35.4c-9.5-8.7-22-15.2-35.4-14.6c-13.3,0.6-25.8,5.1-35.4,14.6c-10.6,10.6-21.3,21.3-31.9,31.9      c-25.6,25.6-51.1,51.1-76.7,76.7c-30.9,30.9-61.8,61.8-92.8,92.8c-26.7,26.7-53.4,53.4-80.1,80.1      c-12.9,12.9-26.1,25.7-38.8,38.8c-0.2,0.2-0.4,0.4-0.6,0.6c23.6,0,47.1,0,70.7,0c-15.6-15.6-31.2-31.2-46.8-46.8      c-24.9-24.9-49.8-49.8-74.7-74.7c-5.7-5.7-11.5-11.5-17.2-17.2c-19.1-19.1-51.6-19.1-70.7,0c-22.6,22.6-45.2,45.2-67.8,67.8      c-36,36-72,72-107.9,107.9c-8.2,8.2-16.4,16.4-24.6,24.6c-9.1,9.1-14.6,22.5-14.6,35.4c0,12.3,5.4,26.9,14.6,35.4      c9.5,8.7,22,15.2,35.4,14.6C300.6,582,313.1,577.6,322.7,568L322.7,568z"/></g></g><g><g><path fill="#FFFFFF" d="M797.8,199.7c43.7,0,87.5,0,131.2,0c6.3,0,12.5,0,18.8,0c-16.7-16.7-33.3-33.3-50-50      c0,43.7,0,87.5,0,131.2c0,6.3,0,12.5,0,18.8c0,12.8,5.6,26.3,14.6,35.4c8.7,8.7,22.9,15.2,35.4,14.6      c12.9-0.6,26.3-4.8,35.4-14.6c9-9.8,14.6-21.8,14.6-35.4c0-43.7,0-87.5,0-131.2c0-6.3,0-12.5,0-18.8c0-27-22.9-50-50-50      c-43.7,0-87.5,0-131.2,0c-6.3,0-12.5,0-18.8,0c-12.8,0-26.3,5.6-35.4,14.6c-8.7,8.7-15.2,22.9-14.6,35.4      c0.6,12.9,4.8,26.3,14.6,35.4C772.2,194,784.3,199.7,797.8,199.7L797.8,199.7z"/></g></g></g></g></svg>
                                    <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT NATUREL</p>
                                </Link>
                            </div>
                            <div className="w-full sm:w-1/3 px-12 py-2 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="600">
                                <Link to="/agence-adwords-47-31/">
                                    <svg className="mx-auto block" width="80px" viewBox="0 0 100 125"><path fill="#FFFFFF" d="M84.9,18.3l7.2-4c1-0.5,2.2-0.2,2.7,0.8l0,0c0.5,1,0.2,2.2-0.8,2.7l-7.2,4c-1,0.5-2.2,0.2-2.7-0.8l0,0  C83.6,20.1,84,18.8,84.9,18.3z M83.2,15.9l5.3-6.5c0.7-0.8,0.6-2-0.2-2.7c-0.8-0.8-2.2-0.7-2.9,0.2l-5.3,6.5c-0.7,0.8-0.6,2,0.2,2.7  C81.1,16.8,82.5,16.8,83.2,15.9z M98.5,25.2c-0.2-1-1.2-1.7-2.2-1.6l-8.3,1c-1.2,0.1-1.9,1.2-1.7,2.4c0.2,1,1.2,1.7,2.2,1.6l8.3-1  C98,27.5,98.8,26.4,98.5,25.2z M49.8,93.9h8.6c4.6,0,8.3-3.7,8.3-8.3V85l-5,2.5L49.8,93.9z M86.2,41.2c0.5,1,0.3,2.2-0.6,2.8  c-1,0.7-2.3,0.4-2.9-0.6c0,0,0,0,0,0c-8.8-2.3-18.3,0.1-23.8,2.1c0,0,0,0,0,0.1l0.9,1.7c0,0,0,0,0,0.1l-4.2,2.3c0,0,0,0,0,0.1  l4.9,5.3c0,0,0,0,0,0c2-1.5,5.6-3.7,8.1-3.1c2.9,0.7,2.8,3.7,2.8,4c0,0,0,0,0,0c0.4,0.1,4.1,1.2,3,5.5c0,0,0,0,0,0  c0.3,0.2,3.4,2.2,1.6,6.2c0,0,0,0,0,0c0.3,0.3,3.6,3.5-1.5,7.9c-1.6,1.3-3.8,2.6-6,3.5c0,0,0,0,0,0l-8.8,4.4c0,0,0,0,0,0l-8.9,4.8  h0.1l-1.3,0.7l-8.8,4.8c0,0,0,0,0,0h-0.4h-4.5H9.7c-1,0-1.9-0.2-2.8-0.5c-3.2-1.2-5.5-4.2-5.5-7.8V41.7c0-4.7,3.8-8.4,8.4-8.4h22.3  c-0.4,0.7-0.8,1.4-1,2.2c-0.5,1.8-0.5,3.7,0.1,5.5c-0.3,0.5-0.6,1-0.7,1.6c-0.4,1.5-0.3,3.1,0.5,4.5l1.2,2.1H6.9v34.3v1.1  c0,2.1,1.7,3.8,3.8,3.8h4.6l29.3-15.7c1.1-0.6,1.9-1.6,2.3-2.8c0.1-0.5,0.2-0.9,0.2-1.2c0-0.2-0.1-0.4-0.1-0.6v0  c-0.1-0.8-0.1-1.9,0.2-3.1c0,0,2-6.1,6.2-7.8c0,0,0,0,0-0.1L49.4,53c0,0,0,0,0,0l-1,0.5c-2.3,1.3-5.2,0.4-6.5-1.9l-0.8-1.5  c0,0,0,0-0.1,0l-1.2,0.7c-0.8,0.4-1.8,0.1-2.2-0.6L34.8,45c-0.4-0.8-0.1-1.8,0.6-2.2l1.2-0.7c0,0,0,0,0-0.1l-1-1.8  c-1.3-2.3-0.4-5.2,1.9-6.5L49,27.5c0,0,0,0,0.1,0l0.9,1.7c0,0,0,0,0.1,0c4.6-3.6,11.7-10.3,14.5-19c0,0,0,0,0,0  c-0.5-1,0-2.3,1.1-2.8c1-0.4,2.2,0.1,2.7,1L74.1,19c0,0,0,0,0,0c2.8-0.4,5.7,0.9,7.1,3.6c1.4,2.6,1,5.8-0.8,7.9c0,0,0,0,0,0  L86.2,41.2z M53.1,45.2l-6-10.9c0,0,0,0-0.1,0l-6.8,3.8c0,0,0,0,0,0.1l6,10.9c0,0,0,0,0.1,0L53.1,45.2  C53.1,45.3,53.1,45.2,53.1,45.2z M21.9,41.4c0,1.3,1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4  C23,39,21.9,40.1,21.9,41.4z M14.9,41.4c0,1.3,1.1,2.4,2.4,2.4h0c1.2,0,2.1-0.8,2.3-1.9c0-0.2,0-0.3,0-0.5c0-0.2,0-0.3,0-0.5  c-0.2-1.1-1.2-1.9-2.3-1.9h0C16,39,14.9,40.1,14.9,41.4z M8,41.4c0,1.3,1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4  c0-1.3-1.1-2.4-2.4-2.4C9,39,8,40.1,8,41.4z"/></svg>
                                    <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT GOOGLE ADS</p>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-around md:justify-between mt-24">
                            <div className="text-center py-3 px-4 font-bold flex flex-col mx-5 bg-white w-1/3 lg:1/6 xl:w-1/12 hover:text-bleu" ata-aos="fade-right">
                                <Link to="/realisations/csd-menuiserie/"><svg style={{maxWidth:'25px'}} className="mx-auto inline-block align-text-middle" width="20px" viewBox="0 0 40 50" x="0px" y="0px"><g fill="#000000" fill-rule="evenodd"><path fill="#000000" d="m20 0c-11.05 0-20 8.954-20 20 0 11.05 8.954 20 20 20 11.05 0 20-8.954 20-20 0-11.05-8.954-20-20-20m5.056 9.981c.725.715.725 1.874 0 2.588l-7.966 7.853 7.966 7.853c.725.715.725 1.874 0 2.589-.725.715-1.901.715-2.626 0l-9.279-9.147c-.725-.715-.725-1.874 0-2.589l9.279-9.147c.362-.358.838-.536 1.313-.536.475 0 .95.179 1.313.536"/></g></svg></Link>
                                <Link className="mx-auto block" to="/realisations/csd-menuiserie//">Précédent</Link>
                            </div>
                            <div className="text-center py-3 font-bold flex flex-col bg-white w-1/3 lg:1/6 xl:w-1/12 hover:text-bleu" data-aos="fade-left">
                                <Link className="mx-auto block order-last" to="/realisations/conseil-departemental-haute-garonne/">Suivant</Link>
                                <Link className="mx-auto inline-block align-text-middle" to="/realisations/conseil-departemental-haute-garonne/"><svg style={{maxWidth:'25px'}} width="20px" viewBox="0 0 0.689 0.86125" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd"><defs></defs><g><path class="fil0" d="M0.46 0.367l-0.148 0.147c-0.012,0.013 -0.032,0.013 -0.044,0 -0.012,-0.012 -0.012,-0.032 0,-0.044l0.126 -0.125 -0.126 -0.126c-0.012,-0.012 -0.012,-0.032 0,-0.044 0.012,-0.012 0.032,-0.012 0.044,0l0.148 0.147c0.012,0.013 0.012,0.032 0,0.045zm-0.46 -0.022c0,0.095 0.039,0.181 0.101,0.243 0.062,0.063 0.148,0.101 0.244,0.101 0.095,0 0.181,-0.038 0.243,-0.101 0.063,-0.062 0.101,-0.148 0.101,-0.243 0,-0.096 -0.038,-0.182 -0.101,-0.244 -0.062,-0.062 -0.148,-0.101 -0.243,-0.101 -0.096,0 -0.182,0.039 -0.244,0.101 -0.062,0.062 -0.101,0.148 -0.101,0.244z"/></g></svg></Link>
                            </div>
                        </div>
                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsaqua {
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
export default aquapensezvous;
