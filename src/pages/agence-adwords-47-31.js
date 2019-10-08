import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import Accordion from '../components/accordion';
import ButtonMenu from '../components/buttonmenu.js';
import ButtonMenuBack from '../components/buttonmenuback';

import Bg from "../images/background-campagnes-ads.jpg";
import imac from "../images/analytics-site-internet.jpg";
import bgDev from '../images/bg-dev.jpg';


class ReferencementAds extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Adwords Agen - Toulouse - Gestion Campagne Adwords - Linkweb"
                    description="Création de votre campagne Google Ads sur-mesure - Étude des mots-clés -  Prévision et budgétisation. Notre objectif : générer un retour sur investissement."
                    keywords={[`Agence Adwords Agen`, `Agence Adwords Toulouse`, `Campagne Adwords Agen`, `Campagne Adwords Toulouse`]}
                    url="https://linkweb.fr/agence-adwords-47-31"
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
                    <section className="w-full h-screen mx-auto px-2 md:px-4 py-6 bg-no-repeat bg-cover bg-center flex md:flex-row flex-col justify-center items-center" style={{background:'#000000ba url(' + Bg +')', backgroundBlendMode:'multiply', backgroundSize:'cover', backgroundPosition:'center', height:'650px'}}>
                        <div className="order-last md:order-first w-full md:w-1/3 max-w-5xl mx-auto p-1 my-4 md:mx-6 mx-2" >
                            <RoundButton url="/contact-agence-web-toulouse" text="Je veux propulser mon site sur Google" />
                        </div>
                        <div className="w-full md:w-2/3 mt-6 p-1">
                            <h1 data-aos="fade-up" data-aos-delay="500" className="century text-3xl md:text-6xl text-center text-white">
                            Référencement Adwords<br/> à Agen (47)<span className="text-bleu">/</span>Toulouse(31)
                            </h1>
                            <br/>
                            <h3 className="italic text-lg text-center md:text-2xl text-white">Nous mettons à votre disposition notre expertise en référencement Adwords (Search Engine Advertising) pour créer et diffuser vos annonces publicitaires aux moments les plus opportuns avec un seul objectif : obtenir un retour sur investissement garanti.</h3>
                        </div>
                    </section>
                    <section className="w-full flex flex-row justify-end h-8 font-medium">
                        <section className="bg-white w-1/5 lg:w-1/12 flex text-center italic text-xs sm:text-sm md:text-md text-darkgrey">
                        <div className="w-full md:w-1/2 p-1 mt-0"><ButtonMenuBack url="/referencement-toulouse" position="center"/></div>
                        <div className="w-full md:w-1/2 p-1 text-left mt-0 hidden md:block"><Link className="hover:text-bleu" to="/referencement-toulouse">Retour</Link></div>
                        </section>
                        <section className="w-full lg:w-2/5 flex bg-darkgrey text-xs sm:text-sm md:text-md" style={{ borderBottomLeftRadius:'27px'}}>
                            <div className="w-full lg:w-1/2 text-white p-1"><ButtonMenu url="/referencement-de-site-internet-47-31" text="Référencement Naturel" position="center" /></div>
                            <div className="w-full lg:w-1/2 text-bleu p-1"><ButtonMenu url="/agence-adwords-47-31" text="Référencement Ads" position="center" /></div>
                        </section>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <br/>
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                            Linkweb, une agence dédiée à votre succès pour développer vos contacts, vos prospects, et vos ventes.
                        </h2>
                        <hr className="blue"></hr>
                    </section>
                    <section className="flex flex-col xl:flex-row w-full mx-auto px-4 py-6 my-4">
                        <div className="w-full xl:w-1/2">
                            <img src={imac} alt="Agence Adwords Toulouse"/>
                        </div>
                        <div className="w-full xl:w-1/2 px-12 py-12" >
                            <h2 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in">
                                <span className="text-bleu">/</span>CAMPAGNES ADWORDS : SOYEZ <span className="text-bleu">ROI</span>
                            </h2>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold text-justify">Le référencement payant (SEA) peut-être source de retour sur investissement, encore faut-il bien l’utiliser.</span>
                            </h4>
                            <p data-aos='fade-bottom' className="text-justify">Le <strong>référencement Google Ads</strong> se différencie du <strong>référencement naturel</strong>. En effet, vous allez obtenir une <strong>acquisition de trafic</strong> via des <strong>liens commerciaux</strong> et non pas via les <strong>résultats naturels</strong> sur les pages de Google. Maximisez votre <strong>taux de conversion</strong> et <strong>optimiser votre coût par clic</strong> grâce à notre expertise en <strong>gestion de campagnes Ads</strong> menée à travers une stratégie d’enchères performante. <br /><br />
                            Le <strong>référencement payant</strong>, c’est l’acquisition de méthodes rentables pour mener ses <strong>campagnes Adwords</strong>, afin d’activer tous les leviers du <strong>retour sur investissement</strong> via la sponsorisation, mais aussi effectuer toutes les optimisations nécessaires, en termes de <strong>landing pages</strong> notamment, pour vous permettre de <strong>convertir</strong>.<br/><br/>
                            Le <strong>SEA</strong>, c’est faire le <strong>choix des mots-clés</strong> qualifiés sur lesquels investir. C’est aussi la possibilité d’effectuer un ciblage précis selon divers paramètres dès la création votre <strong>campagne Google Adwords</strong>.</p>
                        </div>
                    </section>
                    <section className="w-full h-full flex flex-col justify-center items-center px-4 pt-12 pb-0 mt-2 bg-darkgrey text-white">
                        <div className="w-full">
                            <h2 data-aos='fade-right' className="text-center text-3xl century">
                            <span className="text-bleu">/</span>Mise en place de votre campagne Adwords
                            </h2>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row mx-auto px-6 lg:px-32 py-6 my-4 lg:mt-10 lg:mb-4 lg:py-2 text-justify">
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>PLANIFICATION DES MOTS-CLÉS
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Nous lançons votre campagne de référencement à la date prévue ensemble et nous démarrons le travail de gestion de votre compte Adwords.</span>
                            </h4>
                            <p>Nous définissons votre <strong>stratégie de visibilité</strong> en déterminant les mots-clés sur lesquels il sera nécessaire de se positionner. Par ailleurs, nous paramètrerons vos campagnes pour vous permettre d’obtenir la stratégie la plus efficace possible.</p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>CRÉATION DE LA CAMPAGNE
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Nous lançons votre campagne de référencement à la date prévue ensemble et nous démarrons le travail de gestion de votre compte.</span>
                            </h4>
                            <p>Nous effectuons une veille permanente sur le déroulé de votre <strong>campagne</strong> et vos dépenses pour ajuster les différents paramètres au besoin. Nos mots d’ordres : analyses, conseils et conversions.</p>
                        </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row mx-auto px-6 lg:px-32 py-6 my-4 lg:my-2 lg:py-2 text-justify">
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>PLAN DE PUBLICATION
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Nous élaborons notre plan de création d’annonces qui vise à déterminer les différents groupes d’annonces et leur fréquence de création.</span>
                            </h4>
                            <p>L’objectif : avoir un <strong>plan de campagne</strong> cohérent par rapport à vos <strong>objectifs de visibilité</strong> à court et moyen terme. La <strong>création de vos liens sponsorisés</strong> sera ajustée dans le temps pour être toujours <strong>visible</strong>, sur des <strong>mots-clés pertinents</strong>, où il faut et quand il faut.</p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>PRÉVISION ET BUDGÉTISATION
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Nous analysons les stratégies web de vos concurrents afin de vous positionner devant eux et d’obtenir une visibilité cohérente et concurrentielle.</span>
                            </h4>
                            <p>Nous mettons à jour <strong>votre site internet</strong> pour garder une pertinence de l’information qui génèrera plus de transformation. <strong>Votre site internet</strong> doit répondre à la question de l’utilisateur tout en référençant vos différents produits ou services, et en leur apportant une <strong>visibilité</strong>.</p>
                        </div>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        Vous êtes un challenge, nous devenons une <span className="text-bleu">plus-value</span>.
                        </h2><br/>
                        <hr className="blue"></hr>
                    </section>
                    <section className="flex flex-col lg:flex-row flex-1 home-step my-12 px-4 xl:my-24 xl:px-24">
                        <div className="w-full xl:w-1/3 one px-12">
                            <div className="flex flex-1 items-center xl:items-start flex-col xl:flex-row">
                                <div className="blackBulle my-6" data-aos="fade-up">1</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>JE DÉCOUVRE LE RÉFÉRENCEMENT ADS
                                </h3>
                                <div className="content text-justify pb-6" style={{textAlignLast:'center'}}>
                                Le <strong>SEA (Search Engine Advertising)</strong>, ou <strong>référencement Google Ads</strong>, est une science à part entière dans le référencement. Il apporte une <strong>visibilité à votre site internet</strong> de façon très rapide, peu importe le nombre de mots clés. Néanmoins, votre budget dit être maitrisé et vous permettre d’obtenir de l’acquisition client.
                                </div>
                                <Button url="/contact-agence-web-toulouse" text="Demander un devis" position="center" />

                                </section>
                            </div>
                            </div>
                            <div className="w-full xl:w-1/3 one px-12">
                            <div className="flex flex-1 items-center xl:items-start flex-col xl:flex-row">
                                <div className="blackBulle my-6" data-aos="fade-up">2</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>JE VEUX ÊTRE ACCOMPAGNÉ POUR DÉFINIR MES BESOINS
                                </h3>
                                <div className="content text-justify pb-6" style={{textAlignLast:'center'}}>
                                <strong>Coût au clic visé</strong>, définition du budget, augmentation de la qualité de ses <strong>annonces</strong> : se lancer dans une <strong>campagne Ads</strong> doit répondre à des objectifs clairs et précis. Nous vous accompagnons pour définir votre projet, des objectifs, aux annonces, en passant par les cibles.
                                </div>
                                <Button url="/contact-agence-web-toulouse" text="Prendre contact" position="center" />
                                </section>
                                </div>
                            </div>
                            <div className="w-full xl:w-1/3 one px-12">
                            <div className="flex flex-1 items-center xl:items-start flex-col xl:flex-row">
                                <div className="blackBulle my-6" data-aos="fade-up">3</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>JE FAIS LE CHOIX DE CONSULTANTS POUR MON SEA
                                </h3>
                                <div className="content text-justify pb-6" style={{textAlignLast:'center'}}>
                                En tant que <strong>professionnels du référencement</strong>, nous vous accompagnons afin de mener vos <strong>campagnes Google Adwords</strong> dans le but d’obtenir un <strong>retour sur investissement</strong>. Pour ce faire, nous paramétrons votre campagne sur-mesure pour atteindre vos objectifs.
                                </div>
                                <Button url="/contact-agence-web-toulouse" text="Prendre rendez-vous" position="center" />
                                </section>                                
                            </div>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        <span className="text-bleu">/</span>Notre expertise Google Adwords
                        </h2>
                        <hr className="blue"></hr>
                        
                    </section>
                    <section className="max-w-6xl w-full mx-auto px-4 pt-12 pb-0 my-2 mb-24">
                        <p className="text-xl font-bold century text-center">
                            Que vous soyez fleuriste, restaurateur, hôtelier, chauffagiste, photographe, que vous vendiez des vêtements ou bien des voitures d’occasions en ligne, nous élaborons votre <strong>stratégie de webmarketing</strong> pour stimuler votre chiffre d’affaires.</p>
                        <br/>
                        <div className="w-full flex flex-col sm:flex-row text-center my-6">
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center pt-6" data-aos='zoom-in' data-aos-delay="200">
        

                            <svg className="svg-bleu" width="80px" height="80px" version="1.1"x="0px" y="0px" viewBox="0 0 512 512">
<g>
	<g>
		<path d="M449.511,137.648v-82.38c0-9.072-4.668-17.227-12.487-21.814c-7.849-4.605-17.29-4.7-25.251-0.247    c-76.024,42.516-158.725,67.345-245.805,73.802c-0.667,0.049-79.372,0.393-79.372,0.393c-19.767,0-36.105,14.923-38.366,34.091    H32.075C14.39,141.493,0,155.881,0,173.567v70.468c0,17.686,14.39,32.075,32.075,32.075h16.153    c1.628,13.795,10.544,25.383,22.785,30.799l57.485,158.648c3.593,9.875,13.067,16.511,23.578,16.511h57.687    c8.178,0,15.86-3.999,20.551-10.697c4.691-6.7,5.822-15.287,3.03-22.96l-49.389-136.237    c80.482,8.361,157.039,32.601,227.817,72.183c3.905,2.184,8.166,3.273,12.42,3.273c4.417-0.001,8.83-1.175,12.829-3.521    c7.819-4.588,12.489-12.742,12.489-21.816v-82.38C484.711,275.353,512,245.204,512,208.781    C512,172.357,484.711,142.207,449.511,137.648z M47.951,251.372H32.075c-4.047,0-7.338-3.291-7.338-7.338v-70.467    c0-4.044,3.291-7.337,7.338-7.337h15.876V251.372z M80.93,284.245c-4.85-2.174-8.242-7.039-8.242-12.688V146.044h0.001    c0-7.667,6.239-13.905,13.906-13.905h67.333v153.324c0,0-67.92-0.026-68.213-0.044C83.234,285.132,82.712,285.004,80.93,284.245z     M210.091,456.853c0.04,0.101,0.066,0.173-0.041,0.324c-0.105,0.151-0.183,0.151-0.288,0.151h-57.687    c-0.147,0-0.282-0.093-0.327-0.215L98.515,310.199h58.411L210.091,456.853z M424.774,362.294c0,0.179,0,0.322-0.267,0.479    c-0.318,0.184-0.508,0.079-0.66-0.006c-76.034-42.52-158.469-68.045-245.182-75.96v-156.04    c86.72-7.927,169.155-33.454,245.179-75.97c0.156-0.085,0.349-0.19,0.663-0.006c0.267,0.157,0.267,0.298,0.267,0.477V362.294z     M449.511,254.873v-92.185c21.503,4.314,37.752,23.339,37.752,46.092C487.263,231.534,471.013,250.56,449.511,254.873z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
                                <p className="text-xl century pt-3">ATTIREZ L'ATTENTION DE TOUS VOS PROSPECTS EN ÉTANT N°1</p>
                            </div>
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center pt-6" data-aos='zoom-in' data-aos-delay="400">
                            <svg className="svg-bleu" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" width="80px" height="80px">
<g>
	<path d="M326.623,133.062c13.785,0,25-11.215,25-25s-11.215-25.001-25-25.001s-25,11.216-25,25.001   c0,5.63,1.872,10.83,5.025,15.014l-41.076,57.401c-2.451-0.805-5.066-1.247-7.784-1.247c-6.569,0-12.551,2.551-17.017,6.709   l-27.379-15.536c0.365-1.696,0.561-3.454,0.561-5.257c0-13.785-11.215-25-25-25s-25,11.215-25,25c0,1.803,0.196,3.561,0.561,5.257   l-27.379,15.536c-4.466-4.158-10.448-6.708-17.017-6.708c-13.785,0-25,11.216-25,25.001s11.215,25.001,25,25.001   s25-11.216,25-25.001c0-1.803-0.196-3.561-0.561-5.257l27.379-15.536c4.466,4.158,10.448,6.709,17.017,6.709   c6.569,0,12.55-2.551,17.017-6.708l27.379,15.536c-0.365,1.696-0.561,3.454-0.561,5.257c0,13.785,11.215,25.001,25,25.001   c13.786,0,25.001-11.216,25.001-25.001c0-5.631-1.873-10.832-5.026-15.016l41.076-57.401   C321.289,132.62,323.905,133.062,326.623,133.062z M326.623,98.061c5.514,0,10,4.486,10,10.001c0,5.514-4.486,10-10,10   s-10-4.486-10-10C316.622,102.547,321.108,98.061,326.623,98.061z M120.115,214.231c-5.514,0-10-4.486-10-10.001   s4.486-10.001,10-10.001s10,4.486,10,10.001S125.629,214.231,120.115,214.231z M188.951,175.146c-5.514,0-10-4.486-10-10.001   c0-5.514,4.486-10,10-10s10,4.486,10,10C198.952,170.66,194.465,175.146,188.951,175.146z M257.787,214.231   c-5.514,0-10-4.486-10-10.001s4.486-10.001,10-10.001c5.515,0,10.001,4.486,10.001,10.001S263.301,214.231,257.787,214.231z"/>
	<path d="M418.796,376.965H366.31H80.428H21.215c-3.427,0-6.215-2.788-6.215-6.215V61.331c0-3.427,2.788-6.215,6.215-6.215h35.356   c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5H21.215C9.517,40.116,0,49.633,0,61.331V370.75c0,11.698,9.517,21.215,21.215,21.215   h51.713v16.506c0,9.403,7.65,17.053,17.053,17.053h75.074l-35.34,68.998c-1.888,3.687-0.431,8.206,3.256,10.095   c1.094,0.561,2.262,0.826,3.413,0.826c2.725,0,5.354-1.49,6.681-4.083l38.843-75.836h82.922l38.843,75.836   c1.328,2.593,3.956,4.083,6.681,4.083c1.151,0,2.319-0.267,3.413-0.826c3.687-1.889,5.145-6.408,3.256-10.095l-35.34-68.998h75.074   c9.403,0,17.053-7.649,17.053-17.053v-16.506h44.986c4.142,0,7.5-3.357,7.5-7.5S422.938,376.965,418.796,376.965z M358.81,408.471   c0,1.132-0.921,2.053-2.053,2.053H89.981c-1.132,0-2.053-0.921-2.053-2.053v-16.506H358.81V408.471z"/>
	<path d="M86.571,55.116h102.672h68.251h168.028c3.427,0,6.215,2.788,6.215,6.215v71.311c0,4.143,3.358,7.5,7.5,7.5   s7.5-3.357,7.5-7.5V61.331c0-11.698-9.517-21.215-21.215-21.215H264.995V25.374c0-10.375-8.441-18.816-18.817-18.816H200.56   c-10.375,0-18.817,8.441-18.817,18.816v14.742H86.571c-4.142,0-7.5,3.357-7.5,7.5S82.429,55.116,86.571,55.116z M196.743,25.374   c0-2.104,1.712-3.816,3.817-3.816h45.618c2.104,0,3.817,1.712,3.817,3.816v14.742h-53.251V25.374z"/>
	<path d="M104.902,267.576c-4.142,0-7.5,3.357-7.5,7.5v66.272c0,4.143,3.358,7.5,7.5,7.5h30.427c4.142,0,7.5-3.357,7.5-7.5v-66.272   c0-4.143-3.358-7.5-7.5-7.5H104.902z M127.829,333.849h-15.427v-51.272h15.427V333.849z"/>
	<path d="M173.737,229.248c-4.142,0-7.5,3.357-7.5,7.5v104.601c0,4.143,3.358,7.5,7.5,7.5h30.427c4.142,0,7.5-3.357,7.5-7.5V236.748   c0-4.143-3.358-7.5-7.5-7.5H173.737z M196.665,333.849h-15.427v-89.601h15.427V333.849z"/>
	<path d="M242.573,267.576c-4.142,0-7.5,3.357-7.5,7.5v66.272c0,4.143,3.358,7.5,7.5,7.5H273c4.142,0,7.5-3.357,7.5-7.5v-66.272   c0-4.143-3.358-7.5-7.5-7.5H242.573z M265.5,333.849h-15.427v-51.272H265.5V333.849z"/>
	<path d="M311.409,311.832c-4.142,0-7.5,3.357-7.5,7.5v22.017c0,4.143,3.358,7.5,7.5,7.5h30.427c4.142,0,7.5-3.357,7.5-7.5   s-3.358-7.5-7.5-7.5h-22.927v-14.517C318.909,315.189,315.551,311.832,311.409,311.832z"/>
	<path d="M508.175,384.019l-43.027-74.526c10.901-11.619,18.839-25.816,23.079-41.64c6.777-25.291,3.299-51.708-9.793-74.384   c-27.026-46.813-87.097-62.906-133.907-35.881c-46.811,27.025-62.906,87.096-35.88,133.907   c13.092,22.676,34.231,38.896,59.522,45.674c8.446,2.263,17.015,3.382,25.53,3.382c7.442,0,14.841-0.856,22.077-2.55l43.018,74.528   c5.273,9.137,14.875,14.25,24.737,14.249c4.833,0,9.729-1.229,14.208-3.813c8.796-5.077,14.261-14.544,14.261-24.706   C512,393.28,510.678,388.357,508.175,384.019z M372.051,322.68c-21.421-5.74-39.326-19.479-50.415-38.685   c-22.89-39.648-9.257-90.526,30.39-113.417c13.043-7.53,27.296-11.106,41.374-11.106c28.715,0,56.683,14.893,72.043,41.497   c11.088,19.206,14.034,41.58,8.294,63.002c-5.74,21.422-19.479,39.325-38.685,50.414   C415.847,325.474,393.473,328.418,372.051,322.68z M490.242,409.973c-6.453,3.726-14.733,1.508-18.456-4.942l-41.388-71.704   c4.148-1.693,8.21-3.673,12.156-5.951c3.949-2.28,7.689-4.818,11.23-7.566l41.4,71.707c1.188,2.061,1.816,4.393,1.816,6.743   C497,403.078,494.41,407.567,490.242,409.973z"/>
	<path d="M461.542,263.611c5.295-17.056,4.034-35.316-3.551-51.416c-1.766-3.748-6.234-5.354-9.981-3.589   c-3.748,1.766-5.354,6.234-3.588,9.981c5.983,12.7,6.976,27.109,2.795,40.575c-4.204,13.54-13.286,24.903-25.573,31.997   c-13.002,7.508-28.151,9.5-42.652,5.615c-14.502-3.886-26.624-13.187-34.13-26.189c-15.497-26.841-6.267-61.285,20.574-76.782   c19.625-11.329,43.98-9.815,62.051,3.857c3.304,2.5,8.007,1.849,10.506-1.455c2.499-3.303,1.848-8.007-1.456-10.506   c-22.891-17.321-53.745-19.238-78.602-4.887c-16.472,9.51-28.255,24.866-33.178,43.238s-2.396,37.562,7.114,54.034   c9.51,16.473,24.866,28.255,43.238,33.179c6.135,1.644,12.361,2.457,18.546,2.457c12.338,0,24.517-3.236,35.488-9.571   C444.71,295.163,456.216,280.767,461.542,263.611z"/>
</g>
</svg>
                                <p className="text-xl century pt-3">MAXIMISER VOTRE PRÉSENCE EN LIGNE OÙ IL FAUT ET QUAND IL FAUT</p>
                            </div>
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center pt-6" data-aos='zoom-in' data-aos-delay="400">
                                <svg className="svg-bleu" height="80px" viewBox="-63 0 510 510.656" width="80px"><path d="m200.328125 414.65625h-16c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h32v-16h-16v-16h-16v16c-13.253906 0-24 10.746094-24 24s10.746094 24 24 24h16c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8h-32v16h16v16h16v-16c13.253906 0 24-10.746094 24-24s-10.746094-24-24-24zm0 0"/><path d="m221.984375 196.3125-11.3125-11.3125-10.34375 10.34375v-52.6875h-16v52.6875l-10.34375-10.34375-11.3125 11.3125 29.65625 29.65625zm0 0"/><path d="m192.328125 334.65625c-48.601563 0-88 39.398438-88 88s39.398437 88 88 88 88-39.398438 88-88c-.058594-48.578125-39.421875-87.941406-88-88zm0 160c-39.765625 0-72-32.234375-72-72s32.234375-72 72-72 72 32.234375 72 72c-.046875 39.746094-32.253906 71.953125-72 72zm0 0"/><path d="m220.769531 13.3125-8.882812-13.3125-19.558594 13.039062-19.558594-13.039062-8.882812 13.3125 28.441406 18.960938zm0 0"/><path d="m220.769531 57.3125-8.882812-13.3125-19.558594 13.039062-19.558594-13.039062-8.882812 13.3125 28.441406 18.960938zm0 0"/><path d="m324.769531 13.3125-8.882812-13.3125-19.558594 13.039062-19.558594-13.039062-8.882812 13.3125 28.441406 18.960938zm0 0"/><path d="m324.769531 57.3125-8.882812-13.3125-19.558594 13.039062-19.558594-13.039062-8.882812 13.3125 28.441406 18.960938zm0 0"/><path d="m116.769531 13.3125-8.882812-13.3125-19.558594 13.039062-19.558594-13.039062-8.882812 13.3125 28.441406 18.960938zm0 0"/><path d="m116.769531 57.3125-8.882812-13.3125-19.558594 13.039062-19.558594-13.039062-8.882812 13.3125 28.441406 18.960938zm0 0"/><path d="m152.328125 320.902344 80-20v-50.933594l104-104v-51.3125h-288v51.3125l104 104zm-88-181.558594v-28.6875h256v28.6875l-104 104v45.0625l-48 12v-57.0625zm0 0"/><path d="m368.328125 318.65625h16v192h-16zm0 0"/><path d="m336.328125 350.65625h16v160h-16zm0 0"/><path d="m.328125 318.65625h16v192h-16zm0 0"/><path d="m32.328125 350.65625h16v160h-16zm0 0"/><path d="m304.328125 382.65625h16v128h-16zm0 0"/><path d="m64.328125 382.65625h16v128h-16zm0 0"/><path d="m64.328125 350.65625h16v16h-16zm0 0"/><path d="m32.328125 318.65625h16v16h-16zm0 0"/><path d="m.328125 286.65625h16v16h-16zm0 0"/><path d="m304.328125 350.65625h16v16h-16zm0 0"/><path d="m336.328125 318.65625h16v16h-16zm0 0"/><path d="m368.328125 286.65625h16v16h-16zm0 0"/></svg>
                                <p className="text-xl century pt-3">ROI : AUGMENTER VOS PERFORMANCES ET VOS VENTES</p>
                            </div>

                        </div>
                    </section>
                    
                    
                    <section className="w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 bg-cover mb-24" style={{background:'#000000ba url( '+ bgDev +')', backgroundSize:'cover', backgroundBlendMode: 'overlay'}}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h2 data-aos='fade-right' className="text-center text-white text-2xl md:text-4xl century">
                            <span className="text-bleu">/</span>Vous souhaitez améliorer votre visibilité dans les résultats de recherche ?<br/> Saisissez votre adresse mail.
                            </h2>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                            <RappelForm />
                        </div>

                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row text-center my-12">
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                            <svg className="svg-white" height="80px" width="80px" version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
<g>
	<g>
		<path d="M375.035,225.124c-2.452-6.204-9.469-9.242-15.675-6.792c-6.204,2.453-9.244,9.471-6.792,15.675    c6.139,15.525,9.25,31.933,9.25,48.77c0,73.14-59.503,132.645-132.645,132.645c-73.147,0-132.658-59.505-132.658-132.645    s59.511-132.645,132.658-132.645c16.896,0,33.332,3.131,48.852,9.306c6.197,2.469,13.222-0.56,15.689-6.757    c2.467-6.199-0.559-13.223-6.757-15.689c-18.374-7.312-37.816-11.019-57.783-11.019c-86.468,0-156.817,70.341-156.817,156.803    S142.703,439.58,229.173,439.58c86.461,0,156.803-70.341,156.803-156.803C385.976,262.886,382.294,243.49,375.035,225.124z"/>
	</g>
</g>
<g>
	<g>
		<path d="M449.506,219.607c-1.835-6.414-8.518-10.121-14.936-8.29c-6.414,1.836-10.125,8.523-8.29,14.936    c5.236,18.302,7.891,37.32,7.891,56.522c0,113.044-91.962,205.014-204.999,205.014c-113.044,0-205.013-91.969-205.013-205.014    S116.127,77.763,229.172,77.763c19.246,0,38.296,2.667,56.618,7.928c6.413,1.84,13.103-1.864,14.943-8.277    c1.841-6.413-1.864-13.103-8.277-14.943c-20.489-5.884-41.782-8.868-63.284-8.868C102.806,53.604,0,156.41,0,282.776    s102.806,229.173,229.172,229.173c126.358,0,229.158-102.806,229.158-229.173C458.33,261.324,455.361,240.071,449.506,219.607z"/>
	</g>
</g>
<g>
	<g>
		<path d="M313.278,275.401c-0.592-6.645-6.463-11.525-13.105-10.958c-6.645,0.593-11.552,6.461-10.958,13.106    c0.153,1.72,0.231,3.479,0.231,5.228c0,33.237-27.04,60.275-60.275,60.275c-33.244,0-60.29-27.04-60.29-60.275    c0.002-33.245,27.047-60.29,60.291-60.29c1.857,0,3.675,0.081,5.406,0.24c6.649,0.61,12.525-4.276,13.138-10.92    c0.612-6.643-4.277-12.524-10.92-13.138c-2.464-0.227-5.029-0.342-7.623-0.342c-46.565,0-84.449,37.882-84.449,84.448    c0,46.558,37.884,84.434,84.449,84.434c46.557,0,84.434-37.876,84.434-84.434C313.606,280.314,313.496,277.831,313.278,275.401z"/>
	</g>
</g>
<g>
	<g>
		<path d="M510.149,81.264c-3.753-9.062-12.517-14.918-22.326-14.918h-42.119V24.228c0-9.81-5.856-18.573-14.918-22.326    c-9.058-3.752-19.391-1.695-26.325,5.239l-70.376,70.377c-6.842,6.841-10.609,15.939-10.609,25.618v68.355l-98.17,98.17    c-4.717,4.717-4.717,12.366,0,17.084c2.358,2.358,5.45,3.538,8.541,3.538c3.091,0,6.183-1.18,8.541-3.538l98.171-98.171h68.355    c9.679,0,18.778-3.768,25.618-10.608l70.377-70.379C511.845,100.652,513.901,90.321,510.149,81.264z M347.635,103.135    c0.001-3.225,1.256-6.257,3.534-8.534l70.376-70.366v49.188l-73.911,73.911V103.135z M417.45,160.882    c-2.244,2.244-5.356,3.533-8.535,3.533h-44.196l73.909-73.909l49.192,0.006L417.45,160.882z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
                                <p className="text-xl text-white century pt-3">CRÉATION DE CAMPAGNE ADWORDS</p>
                            </div>
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center my-6" data-aos='zoom-in' data-aos-delay="400">
                            <svg className="svg-white" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" width="80px" height="80px">
<g>
	<path d="M326.623,133.062c13.785,0,25-11.215,25-25s-11.215-25.001-25-25.001s-25,11.216-25,25.001   c0,5.63,1.872,10.83,5.025,15.014l-41.076,57.401c-2.451-0.805-5.066-1.247-7.784-1.247c-6.569,0-12.551,2.551-17.017,6.709   l-27.379-15.536c0.365-1.696,0.561-3.454,0.561-5.257c0-13.785-11.215-25-25-25s-25,11.215-25,25c0,1.803,0.196,3.561,0.561,5.257   l-27.379,15.536c-4.466-4.158-10.448-6.708-17.017-6.708c-13.785,0-25,11.216-25,25.001s11.215,25.001,25,25.001   s25-11.216,25-25.001c0-1.803-0.196-3.561-0.561-5.257l27.379-15.536c4.466,4.158,10.448,6.709,17.017,6.709   c6.569,0,12.55-2.551,17.017-6.708l27.379,15.536c-0.365,1.696-0.561,3.454-0.561,5.257c0,13.785,11.215,25.001,25,25.001   c13.786,0,25.001-11.216,25.001-25.001c0-5.631-1.873-10.832-5.026-15.016l41.076-57.401   C321.289,132.62,323.905,133.062,326.623,133.062z M326.623,98.061c5.514,0,10,4.486,10,10.001c0,5.514-4.486,10-10,10   s-10-4.486-10-10C316.622,102.547,321.108,98.061,326.623,98.061z M120.115,214.231c-5.514,0-10-4.486-10-10.001   s4.486-10.001,10-10.001s10,4.486,10,10.001S125.629,214.231,120.115,214.231z M188.951,175.146c-5.514,0-10-4.486-10-10.001   c0-5.514,4.486-10,10-10s10,4.486,10,10C198.952,170.66,194.465,175.146,188.951,175.146z M257.787,214.231   c-5.514,0-10-4.486-10-10.001s4.486-10.001,10-10.001c5.515,0,10.001,4.486,10.001,10.001S263.301,214.231,257.787,214.231z"/>
	<path d="M418.796,376.965H366.31H80.428H21.215c-3.427,0-6.215-2.788-6.215-6.215V61.331c0-3.427,2.788-6.215,6.215-6.215h35.356   c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5H21.215C9.517,40.116,0,49.633,0,61.331V370.75c0,11.698,9.517,21.215,21.215,21.215   h51.713v16.506c0,9.403,7.65,17.053,17.053,17.053h75.074l-35.34,68.998c-1.888,3.687-0.431,8.206,3.256,10.095   c1.094,0.561,2.262,0.826,3.413,0.826c2.725,0,5.354-1.49,6.681-4.083l38.843-75.836h82.922l38.843,75.836   c1.328,2.593,3.956,4.083,6.681,4.083c1.151,0,2.319-0.267,3.413-0.826c3.687-1.889,5.145-6.408,3.256-10.095l-35.34-68.998h75.074   c9.403,0,17.053-7.649,17.053-17.053v-16.506h44.986c4.142,0,7.5-3.357,7.5-7.5S422.938,376.965,418.796,376.965z M358.81,408.471   c0,1.132-0.921,2.053-2.053,2.053H89.981c-1.132,0-2.053-0.921-2.053-2.053v-16.506H358.81V408.471z"/>
	<path d="M86.571,55.116h102.672h68.251h168.028c3.427,0,6.215,2.788,6.215,6.215v71.311c0,4.143,3.358,7.5,7.5,7.5   s7.5-3.357,7.5-7.5V61.331c0-11.698-9.517-21.215-21.215-21.215H264.995V25.374c0-10.375-8.441-18.816-18.817-18.816H200.56   c-10.375,0-18.817,8.441-18.817,18.816v14.742H86.571c-4.142,0-7.5,3.357-7.5,7.5S82.429,55.116,86.571,55.116z M196.743,25.374   c0-2.104,1.712-3.816,3.817-3.816h45.618c2.104,0,3.817,1.712,3.817,3.816v14.742h-53.251V25.374z"/>
	<path d="M104.902,267.576c-4.142,0-7.5,3.357-7.5,7.5v66.272c0,4.143,3.358,7.5,7.5,7.5h30.427c4.142,0,7.5-3.357,7.5-7.5v-66.272   c0-4.143-3.358-7.5-7.5-7.5H104.902z M127.829,333.849h-15.427v-51.272h15.427V333.849z"/>
	<path d="M173.737,229.248c-4.142,0-7.5,3.357-7.5,7.5v104.601c0,4.143,3.358,7.5,7.5,7.5h30.427c4.142,0,7.5-3.357,7.5-7.5V236.748   c0-4.143-3.358-7.5-7.5-7.5H173.737z M196.665,333.849h-15.427v-89.601h15.427V333.849z"/>
	<path d="M242.573,267.576c-4.142,0-7.5,3.357-7.5,7.5v66.272c0,4.143,3.358,7.5,7.5,7.5H273c4.142,0,7.5-3.357,7.5-7.5v-66.272   c0-4.143-3.358-7.5-7.5-7.5H242.573z M265.5,333.849h-15.427v-51.272H265.5V333.849z"/>
	<path d="M311.409,311.832c-4.142,0-7.5,3.357-7.5,7.5v22.017c0,4.143,3.358,7.5,7.5,7.5h30.427c4.142,0,7.5-3.357,7.5-7.5   s-3.358-7.5-7.5-7.5h-22.927v-14.517C318.909,315.189,315.551,311.832,311.409,311.832z"/>
	<path d="M508.175,384.019l-43.027-74.526c10.901-11.619,18.839-25.816,23.079-41.64c6.777-25.291,3.299-51.708-9.793-74.384   c-27.026-46.813-87.097-62.906-133.907-35.881c-46.811,27.025-62.906,87.096-35.88,133.907   c13.092,22.676,34.231,38.896,59.522,45.674c8.446,2.263,17.015,3.382,25.53,3.382c7.442,0,14.841-0.856,22.077-2.55l43.018,74.528   c5.273,9.137,14.875,14.25,24.737,14.249c4.833,0,9.729-1.229,14.208-3.813c8.796-5.077,14.261-14.544,14.261-24.706   C512,393.28,510.678,388.357,508.175,384.019z M372.051,322.68c-21.421-5.74-39.326-19.479-50.415-38.685   c-22.89-39.648-9.257-90.526,30.39-113.417c13.043-7.53,27.296-11.106,41.374-11.106c28.715,0,56.683,14.893,72.043,41.497   c11.088,19.206,14.034,41.58,8.294,63.002c-5.74,21.422-19.479,39.325-38.685,50.414   C415.847,325.474,393.473,328.418,372.051,322.68z M490.242,409.973c-6.453,3.726-14.733,1.508-18.456-4.942l-41.388-71.704   c4.148-1.693,8.21-3.673,12.156-5.951c3.949-2.28,7.689-4.818,11.23-7.566l41.4,71.707c1.188,2.061,1.816,4.393,1.816,6.743   C497,403.078,494.41,407.567,490.242,409.973z"/>
	<path d="M461.542,263.611c5.295-17.056,4.034-35.316-3.551-51.416c-1.766-3.748-6.234-5.354-9.981-3.589   c-3.748,1.766-5.354,6.234-3.588,9.981c5.983,12.7,6.976,27.109,2.795,40.575c-4.204,13.54-13.286,24.903-25.573,31.997   c-13.002,7.508-28.151,9.5-42.652,5.615c-14.502-3.886-26.624-13.187-34.13-26.189c-15.497-26.841-6.267-61.285,20.574-76.782   c19.625-11.329,43.98-9.815,62.051,3.857c3.304,2.5,8.007,1.849,10.506-1.455c2.499-3.303,1.848-8.007-1.456-10.506   c-22.891-17.321-53.745-19.238-78.602-4.887c-16.472,9.51-28.255,24.866-33.178,43.238s-2.396,37.562,7.114,54.034   c9.51,16.473,24.866,28.255,43.238,33.179c6.135,1.644,12.361,2.457,18.546,2.457c12.338,0,24.517-3.236,35.488-9.571   C444.71,295.163,456.216,280.767,461.542,263.611z"/>
</g>
</svg>
                                <p className="text-xl century text-white pt-3">PLANIFICATION DES MOTS-CLÉS</p>
                            </div>
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center"  data-aos='zoom-in' data-aos-delay="600">
                            <svg className="svg-white" height="80px" viewBox="0 0 448.941 448.941" width="80px"><path d="m322.019 392.823c-62.154 0-116.412-33.94-145.576-84.176h146.233v-56.118h-166.476c-1.545-9.147-2.535-18.48-2.535-28.059 0-9.578.99-18.912 2.535-28.059h166.476v-56.118h-146.233c29.163-50.237 83.421-84.176 145.576-84.176 20.606 0 41.019 3.864 60.666 11.481l10.138-52.336c-26.14-10.124-43.239-15.262-70.804-15.262-93.996 0-174.561 58.138-207.944 140.294h-57.957v56.118h43.38c-1.156 9.214-1.949 18.537-1.949 28.059s.793 18.845 1.949 28.059h-43.38v56.118h57.957c33.383 82.156 113.948 140.294 207.944 140.294 27.566 0 44.664-5.138 70.805-15.262l-10.138-52.336c-19.648 7.616-40.061 11.48-60.667 11.479z"/></svg>
                                <p className="text-xl century text-white pt-3">BUDGÉTISATION</p>
                            </div>
                        </div>
                    </section>
                    

                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center px-4 mt-12 mb-3">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>LINKWEB VOUS ACCOMPAGNE
                        </h2>
                        <hr className="blue"></hr>
                        <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Les référenceurs et consultants de l’agence de référencement Linkweb vous proposent un suivi de qualité pour un retour sur investissement garanti. Nous vous apportons nos connaissances pour vous aider à accroitre votre clientèle.</h4>
                    </section>
                    <section  className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                        <div className="w-full md:w-3/4 py-0 flex justify-end">
                            <Accordion>
                                <div className="w-full" label="CRÉATION DE VOS ANNONCES ET EXTENSIONS D'ANNONCES SELON VOS OBJECTIFS DE CONVERSION">
                                <p>Nous nous occupons de la <strong>création de vos annonces</strong> en vue de mettre en avant vos produits ou services. Vous êtes à la recherche de <strong>trafic</strong>, <strong>contacts</strong> ou <strong>ventes</strong> ? Nous définissons les paramètres de  campagn sur-mesure pour faciliter et maximiser les interactions avec votre <strong>audience ciblée</strong>.</p>
                                </div>
                                <div label="OPTIMISATION DE VOS CAMPAGNES GOOGLE ADWORDS AJUSTÉES SELON VOS CIBLES">
                                <p><strong>Google Ads</strong> est une plateforme qui vous permet de cibler très précisément votre audience. Nous mettons en place des <strong>campagnes</strong> ajustées en fonction de plusieurs critères : âge, secteur géographique, etc. Par ailleurs, les campagnes, que nous mettons en place, s’adaptent aux terminaux, pour vous permettre de maximiser l’efficacité de votre présence en ligne.</p>
                                </div>
                                <div label="CRÉATION DE VOTRE CAMPAGNE ADS COHÉRENTE AVEC LE CONTENU DE VOTRE SITE INTERNET">
                                <p>Chaque <strong>annonce</strong> créée nécessite la création d’une page adaptée pour obtenir des conversions sur <strong>votre site internet</strong>. Nous nous chargeons de la <strong>création d’une page optimisée</strong> pour répondre aux besoins des utilisateurs : contenu synthétique, <strong>call-to-action</strong>, mise en place d’un circuit de <strong>remplissage des objectifs</strong> optimisé, etc. Ces outils sont adaptés en fonction de votre objectif : appel, demande de devis, contacts, vente de produits (dans le cas d’un <strong>site e-commerce</strong>), etc.</p>
                                </div>
                            </Accordion>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Les dernières actualités
                        </h3>
                        <hr className="blue"></hr>
                        <LastPosts lastposts={ this.props.data.allWordpressPost.edges } />
                        
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center px-4 mt-12 mb-3">
                        <h3 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Vous pourriez également être intéressé
                        </h3>
                        <hr className="blue"></hr>
                        <br/>
                        <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">
                            Vous souhaitez en savoir plus sur nos prestations d’agence web à Agen (47) et Toulouse (31) ? Découvrez nos autres prestations, ainsi que nos différentes réalisations.</h4>
                        <br/>
                        <section className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/3 bg-bleu my-4 text-white" style={{borderRadius:'5px', padding:'10px', marginRight:'20px'}}>
                                <Link to="/creation-site-internet-toulouse">Création site internet</Link>
                            </div>
                            <div className="w-full md:w-1/3 bg-bleu my-4 text-white" style={{borderRadius:'5px', padding:'10px', marginRight:'20px'}}>
                                <Link to="/agence-web-toulouse">Agence Web</Link>
                            </div>
                            <div className="w-full md:w-1/3 bg-bleu my-4 text-white" style={{borderRadius:'5px', padding:'10px', marginRight:'20px'}}>
                                <Link to="/agence-de-communication-agen-47-toulouse-31">Nos réalisations</Link>
                            </div>
                        </section>
                        <br/>
                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsReferencementAds {
    allWordpressPost(limit: 3) {
      edges {
        node {
          id
          title
          slug
          modified(locale: "fr", formatString: "dd MM YYYY")
          link
          featured_media {
            source_url
          }
        }
      }
    }
  }
  
    
`
export default ReferencementAds;




