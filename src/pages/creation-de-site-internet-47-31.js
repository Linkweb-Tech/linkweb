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
import ButtonMenuBack from '../components/buttonmenuback.js';

import Bg from "../images/creation-site-sur-mesure-background.jpg";
import imac from "../images/creation-site-sur-mesure.jpg";
import bgDev from '../images/bg-dev.jpg';


class CreationSiteSurMesure extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Création Site Internet sur mesure à Agen (47) et Toulouse (31) - Linkweb"
                    description="Vous souhaitez développer un projet sur-mesure ? Linkweb crée le site web de vos envies ! Définissez un projet, nous vous apportons une solution concrète."
                    keywords={[`Création site internet sur-mesure Agen`, `Création site internet sur-mesure Toulouse`, `Créer un site internet sur-mesure`, `Développement solution web`]}
                    url="https://linkweb.fr/creation-de-site-internet-47-31/"
                    nom="Site sur-mesure"
                    slug="creation-de-site-internet-47-31/"
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
                    <section className="w-full h-screen mx-auto px-2 md:px-4 py-6 bg-no-repeat bg-cover bg-center flex md:flex-row flex-col justify-center items-center" style={{background:'#00000094 url(' + Bg +')', backgroundBlendMode:'multiply', backgroundPosition:'center', backgroundSize:'cover', height:'650px'}}>
                        <div className="order-last md:order-first w-full md:w-1/3 max-w-5xl mx-auto p-1 my-4 md:mx-6 mx-2" >
                            <RoundButton url="/contact-agence-web-toulouse/" text="Je veux la création de mon site sur-mesure"/>
                        </div>
                        <div className="w-full md:w-2/3 mt-6 p-1">
                            <h1 data-aos="fade-up" data-aos-delay="500" className="century text-2xl sm:text-3xl md:text-6xl text-center text-white">
                            Création site internet sur-mesure<br/> à Agen (47)<span className="text-bleu">/</span>Toulouse(31)
                            </h1>
                            <br/>
                            <h3 className="italic text-lg text-center md:text-2xl text-white">Nous élaborons votre projet de création de site internet sur-mesure selon vos objectifs de communication d’entreprise. Site administrable, fonctionnalités sur-mesure : nous développons des solutions qui vous correspondent.</h3>
                        </div>
                    </section>
                    <section className="w-full flex flex-row justify-end h-8 font-medium">
                        <section className="bg-white w-1/5 lg:w-1/12 flex text-center italic text-xs sm:text-sm md:text-md text-darkgrey" >
                        <div className="w-full md:w-1/2 p-1 mt-0"><ButtonMenuBack url="/creation-site-internet-toulouse/" position="center"/></div>
                        <div className="w-full md:w-1/2 p-1 text-left mt-0 hidden md:block"><Link className="hover:text-bleu" to="/creation-site-internet-toulouse/">Retour</Link></div>
                        </section>
                        <section className="w-full lg:w-2/5 flex bg-darkgrey text-xs sm:text-sm md:text-md" style={{borderBottomLeftRadius:'27px'}}>
                            <div className="w-full lg:w-1/3 text-white p-1"><ButtonMenu url="/creation-site-internet-agen/" text="Site vitrine" position="center" /></div>
                            <div className="w-full lg:w-1/3 text-white p-1"><ButtonMenu url="/creer-une-boutique-en-ligne/" text="E-commerce" position="center" /></div>
                            <div className="w-full lg:w-1/3 text-bleu p-1"><ButtonMenu url="/creation-de-site-internet-47-31/" text="Site sur-mesure" position="center" /></div>
                        </section>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <br/>
                        <h3 data-aos='fade-right' className="text-center text-3xl md:text-4xl century">
                        Vous souhaitez ouvrir les réservations en ligne pour votre restaurant ? Vous voulez présenter vos gammes de produits sur un catalogue en ligne ? Linkweb le réalise pour vous.
                        </h3>
                        <hr className="blue"></hr>
                    </section>
                    <section className="flex flex-col xl:flex-row w-full mx-auto px-4 py-6 my-4">
                        <div className="w-full xl:w-1/2">
                            <br/><br/>
                            <img className="mx-auto block" src={imac} alt="Création site internet Toulouse" />
                        </div>
                        <div className="w-full xl:w-1/2 px-6 lg:pr-32 py-12" >
                            <h2 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in">
                                <span className="text-bleu">/</span>CRÉATION DE SITE INTERNET SUR-MESURE : DÉVELOPPEZ VOS FONCTIONNALITÉS
                            </h2>
                            <h4 className="century text-lg tracking-wider pb-6 text-justify" data-aos='fade-left'>
                                <span className="font-bold">Créer un site sur-mesure apporte une réponse aux demandes les plus particulières. En effet, le sur-mesure vous offre la possibilité de développer des fonctionnalités de tout type.</span>
                            </h4>
                            <p data-aos='fade-bottom' className="text-justify">Chez <strong>Linkweb</strong>, nous faisons de <strong>votre site web</strong> une solution fonctionnelle. Grâce à nos équipes de techniciens, nous sommes en mesure de mettre en place vos projets les plus particuliers. Qu’il s’agisse de fonctionnalités à destination de vos utilisateurs, ou bien pour favoriser votre communication interne, il sera possible de procéder à la <strong>création d’un site internet sur mesure à Agen et Toulouse</strong>.<br /><br />

                            Outil de réservation en ligne, simulation de devis, configurateur de produits, nous vous proposons des solutions pour <strong>améliorer l’expérience de vos utilisateurs</strong> et vous permettre d’obtenir de nouveaux clients efficacement.<br/><br/>

                            Par ailleurs, il est également possible de mettre en place votre <strong>solution de gestion interne</strong> par l’intermédiaire d’un <strong>intranet</strong> avec attributions personnalisées, ou encore un <strong>site internet administrable</strong> avec accès au <strong>back office</strong> pour gérer votre affaire en toute autonomie. Les solutions ne manquent pas, il ne tient qu’à vous d’opter pour un <strong>site internet sur-mesure à Agen et Toulouse</strong>.</p>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        Création de site internet sur-mesure à Agen et Toulouse :<br/> simple et rapide !
                        </h2><br/>
                        <hr className="blue"></hr>
                        
                    </section>
                    <section className="flex flex-col lg:flex-row flex-1 home-step my-12 px-4 xl:my-24 xl:px-24">
                        <div className="w-full xl:w-1/3 one px-12">
                            <div className="flex flex-1 items-center xl:items-start flex-col xl:flex-row">
                                <div className="blackBulle my-6" data-aos="fade-up">1</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>JE DÉFINIS LES SPÉCIFICITÉS DE MON PROJET WEB
                                </h3>
                                <div className="content text-justify pb-6" style={{textAlignLast:'center'}}>
                                Il est important de bien connaître ses besoins en termes de <strong>communication web</strong>, mais aussi ce que l’on souhaite mettre en avant sur son <strong>site internet</strong>. Nous développons la solution la plus adaptée et la plus proche de vos besoins.
                                </div>
                                <Button url="/contact-agence-web-toulouse/" text="Prendre contact" position="center" />

                                </section>
                            </div>
                            </div>
                            <div className="w-full xl:w-1/3 one px-12">
                            <div className="flex flex-1 items-center xl:items-start flex-col xl:flex-row">
                                <div className="blackBulle my-6" data-aos="fade-up">2</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>JE PRENDS RENDEZ-VOUS POUR PRÉCISER MON PROJET
                                </h3>
                                <div className="content text-justify pb-6" style={{textAlignLast:'center'}}>
                                Une fois les contours de votre projet définis, nous vous accompagnons pour faire de votre idée, une projection technique concrète en corrélation avec votre demande. C’est à partir d’ici que votre <strong>projet web</strong> se concrétise.
                                </div>
                                <Button url="/contact-agence-web-toulouse/" text="Prendre contact" position="center" />
                                </section>
                                </div>
                            </div>
                            <div className="w-full xl:w-1/3 one px-12">
                            <div className="flex flex-1 items-center xl:items-start flex-col xl:flex-row">
                                <div className="blackBulle my-6" data-aos="fade-up">3</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>JE CRÉE MON SITE INTERNET SUR-MESURE
                                </h3>
                                <div className="content text-justify pb-6" style={{textAlignLast:'center'}}>
                                Votre projet est enfin défini ? Nous procédons à la <strong>création de votre site internet sur-mesure</strong> en vous proposant une <strong>maquette graphique</strong>, des <strong>contenus éditoriaux</strong>, et la mise en avant des <strong>fonctionnalités de votre site</strong>.
                                </div>
                                <Button url="/contact-agence-web-toulouse/" text="Prendre rendez-vous" position="center" />
                                </section>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        <span className="text-bleu">/</span>Agence de création de site internet sur-mesure à Agen et Toulouse 
                        </h2>
                        <hr className="blue"></hr>
                        
                    </section>
                    <section className="max-w-6xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <p className="text-xl font-bold century text-center">
                            Nous développons vos <strong>solutions web</strong> les plus innovantes pour communiquer envers vos cibles. Votre réussite construit la nôtre.</p>
                        <br/>
                        <div className="w-full flex flex-col sm:flex-row text-center my-6">
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center pt-6" data-aos='zoom-in' data-aos-delay="200">        
                                <svg className="svg-bleu" width="80px" height="80px" version="1.1" x="0px" y="0px" viewBox="0 0 480.3 480.3">
                                    <g>
                                        <g>
                                            <path d="M254.15,234.1V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v220.6c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v98.2    c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-98.2c31.3-6.3,55-34,55-67.2C309.15,268.2,285.55,240.4,254.15,234.1z M240.65,342.8    c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S263.55,342.8,240.65,342.8z"/>
                                            <path d="M88.85,120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v107.4c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v211.4    c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V255.2c31.3-6.3,55-34,55-67.2S120.15,127.2,88.85,120.9z M75.35,229.6    c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S98.15,229.6,75.35,229.6z"/>
                                            <path d="M418.45,120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v107.4c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v211.5    c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V255.2c31.3-6.3,55-34,55-67.2S449.85,127.2,418.45,120.9z M404.95,229.6    c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S427.85,229.6,404.95,229.6z"/>
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
                                <p className="text-xl century pt-3">FONCTIONNALITÉS UTILISATEURS</p>
                            </div>
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center pt-6" data-aos='zoom-in' data-aos-delay="400">
                                <svg className="svg-bleu" height="80px" viewBox="-10 0 512 512.00102" width="80px">
                                    <path d="m173.828125 34.796875h-71.835937c-5.652344 0-10.234376 4.582031-10.234376 10.234375s4.582032 10.234375 10.234376 10.234375h71.835937c5.652344 0 10.234375-4.582031 10.234375-10.234375s-4.582031-10.234375-10.234375-10.234375zm0 0"/>
                                    <path d="m454.769531 292.871094-81.539062-81.539063c-16.527344-16.527343-42.589844-17.359375-58.09375-1.855469-5.273438 5.269532-8.78125 11.832032-10.292969 19.058594-6.070312-3.558594-12.871094-5.601562-19.890625-5.898437-3.125-.132813-6.183594.09375-9.136719.636719v-47.085938h88.480469c5.652344 0 10.234375-4.578125 10.234375-10.230469 0-5.652343-4.582031-10.234375-10.234375-10.234375h-88.480469v-110.402344c0-24.992187-20.328125-45.320312-45.320312-45.320312h-185.175782c-24.988281 0-45.320312 20.328125-45.320312 45.320312v72.125c0 5.652344 4.582031 10.234376 10.234375 10.234376 5.648437 0 10.230469-4.582032 10.230469-10.234376v-27.128906h234.886718v143.929688c-4.917968 5.109375-8.308593 11.644531-9.757812 18.578125-15.9375-9.328125-36.125-7.730469-49.015625 5.160156-4.953125 4.949219-8.234375 10.976563-9.875 17.421875l-34.839844-34.839844c-15.496093-15.496094-39.367187-17.195312-55.070312-4.570312-1.046875.839844-2.054688 1.746094-3.023438 2.714844-15.503906 15.507812-14.671875 41.566406 1.855469 58.09375l48.132812 48.132812h-123.292968v-145.421875c0-5.652344-4.582032-10.234375-10.230469-10.234375-5.652344 0-10.234375 4.582031-10.234375 10.234375v231.789063c0 24.992187 20.332031 45.320312 45.320312 45.320312h117.917969c2.617188 19.894531 19.667969 35.304688 40.261719 35.304688 0 0 159.023438.070312 160.429688.070312 33.917968 0 66.808593-13.558594 90.839843-37.589844 50.050781-50.050781 50.050781-131.488281 0-181.539062zm-434.304687-223.023438v-24.527344c0-13.703124 11.152344-24.855468 24.855468-24.855468h185.179688c13.703125 0 24.851562 11.152344 24.851562 24.855468v24.527344zm.003906 361.457032v-65.898438h143.753906l58.421875 58.421875c-5.828125 0-11.660156 0-17.488281 0-4.5 0-8.90625.421875-13.246094 1.695313-6.59375 1.9375-12.667968 5.652343-17.457031 10.574218-5.375 5.519532-9.148437 12.515625-10.722656 20.0625h-118.410157c-13.703124 0-24.851562-11.152344-24.851562-24.855468zm419.828125 28.632812c-21.070313 21.074219-50.234375 32.570312-80.0625 31.53125-.117187-.003906-156.730469-.003906-156.730469-.003906-10.425781 0-19.375-8.328125-20.105468-18.730469-.191407-2.710937-.066407-5.472656-.050782-8.1875.023438-4.957031 1.785156-9.75 5.085938-13.464844 3.800781-4.28125 9.34375-6.785156 15.070312-6.785156h39.609375l15.46875 15.46875c2 2 4.617188 3 7.238281 3 2.617188 0 5.234376-1 7.234376-3 3.996093-3.996094 3.996093-10.476563 0-14.472656l-162.957032-162.957031c-5.464844-5.464844-8.382812-13.667969-6.355468-21.28125.996093-3.746094 3.21875-7.195313 6.378906-9.46875 3.910156-2.816407 8.617187-3.898438 13.386718-3.382813 5.234376.570313 10.179688 3.132813 13.882813 6.835937l112.53125 112.53125c2 1.996094 4.617187 2.996094 7.234375 2.996094 2.621094 0 5.238281-1 7.238281-2.996094 3.996094-3.996093 3.996094-10.476562 0-14.472656l-51.488281-51.488281c-8.550781-8.546875-9.382812-21.625-1.855469-29.152344 7.523438-7.523437 20.601563-6.691406 29.148438 1.855469l50.90625 50.90625c2 2 4.617187 2.996094 7.234375 2.996094 2.621094 0 5.238281-.996094 7.238281-2.996094 3.996094-3.996094 3.996094-10.476562 0-14.472656l-33.394531-33.394532c-1.601563-1.601562-2.933594-3.363281-3.992188-5.21875-2.109375-3.707031-3.121094-7.789062-2.996094-11.710937.148438-4.574219 1.839844-8.925781 5.132813-12.21875.382813-.382813.789063-.738281 1.203125-1.082031.097656-.078125.191406-.160156.289062-.238282 3.359376-2.652343 7.652344-3.992187 12.261719-3.800781 5.671875.242188 11.140625 2.71875 15.398438 6.976563l33.390625 33.390625c2 2 4.617187 3 7.238281 3 2.617187 0 5.234375-1 7.234375-3 3.996094-3.992188 3.996094-10.472657 0-14.46875l-15.917969-15.917969c-4.234375-4.25-6.695312-9.703125-6.9375-15.359375-.226562-5.339844 1.589844-10.226563 5.117188-13.753906 7.527343-7.527344 20.601562-6.695313 29.152343 1.855469l81.539063 81.539062c42.070313 42.070312 42.070313 110.523438 0 152.59375zm0 0"/>
                                    <path d="m.785156 162.398438c1.636719 3.960937 5.671875 6.503906 9.949219 6.300781 4.269531-.199219 8.050781-3.164063 9.289063-7.25 1.1875-3.90625-.136719-8.292969-3.300782-10.878907-3.457031-2.820312-8.453125-3.054687-12.171875-.59375-4.027343 2.667969-5.601562 7.976563-3.765625 12.421876zm0 0"/>
                                    <path d="m137.910156 381.617188c-16.035156 0-29.082031 13.046874-29.082031 29.082031 0 16.03125 13.046875 29.078125 29.082031 29.078125s29.078125-13.042969 29.078125-29.078125c0-16.035157-13.042969-29.082031-29.078125-29.082031zm0 37.695312c-4.75 0-8.613281-3.863281-8.613281-8.613281s3.863281-8.617188 8.613281-8.617188 8.613282 3.867188 8.613282 8.617188-3.863282 8.613281-8.613282 8.613281zm0 0"/>
                                    <path d="m81.070312 214.101562c-3.996093-3.996093-10.472656-3.996093-14.472656 0-14.113281 14.113282-21.886718 32.878907-21.886718 52.835938 0 19.960938 7.773437 38.722656 21.886718 52.835938 2 2 4.617188 3 7.234375 3 2.621094 0 5.238281-1 7.238281-3 3.996094-3.996094 3.996094-10.476563 0-14.472657-10.246093-10.246093-15.890624-23.871093-15.890624-38.363281s5.644531-28.117188 15.890624-38.363281c3.996094-3.996094 3.996094-10.476563 0-14.472657zm0 0"/>
                                    <path d="m306.605469 133.574219h84.089843c5.652344 0 10.234376-4.582031 10.234376-10.234375s-4.582032-10.234375-10.234376-10.234375h-84.089843c-5.648438 0-10.234375 4.582031-10.234375 10.234375s4.582031 10.234375 10.234375 10.234375zm0 0"/>
                                    <path d="m422.253906 127.257812c1.648438 3.988282 5.785156 6.574219 10.101563 6.292969 4.210937-.269531 7.910156-3.207031 9.136719-7.242187 1.246093-4.105469-.277344-8.695313-3.75-11.21875-3.355469-2.4375-7.914063-2.597656-11.4375-.433594-4.226563 2.597656-5.9375 8.042969-4.050782 12.601562zm0 0"/>
                                </svg>
                                <p className="text-xl century pt-3">INTERFACE INTUITIVE</p>
                            </div>
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center pt-6"  data-aos='zoom-in' data-aos-delay="600">
                                <svg className="svg-bleu" height="80px" viewBox="0 0 496 496.01195" width="80px">
                                    <path d="m451.023438 405.316406c7.925781-7.3125 12.984374-17.695312 12.984374-29.304687v-16c0-22.054688-17.945312-40-40-40-19.3125 0-35.472656 13.769531-39.195312 32h-26.277344c-3.3125-9.289063-12.113281-16-22.527344-16-10.417968 0-19.21875 6.710937-22.53125 16h-26.277343c-3.191407-15.648438-15.546875-28-31.191407-31.191407v-17.945312c13.765626-3.574219 24-15.992188 24-30.863281h8c4.421876 0 8-3.574219 8-8v-24h16v-16h-16v-.085938c0-15.304687 7.253907-30.347656 19.902344-41.242187 22.9375-19.785156 36.097656-48.457032 36.097656-78.671875 0-28.574219-11.355468-55.214844-31.96875-75.015625-20.601562-19.800782-47.832031-30.136719-76.320312-28.894532-54 2.175782-98.730469 47.941407-99.695312 102.015626-.554688 30.605468 12.351562 59.757812 35.40625 79.984374 12.6875 11.117188 20.0625 26.328126 20.496093 41.910157h-15.917969v16h16v24c0 4.425781 3.574219 8 8 8h8c0 14.871093 10.230469 27.289062 24 30.863281v17.945312c-15.648437 3.191407-28 15.542969-31.195312 31.191407h-26.277344c-3.3125-9.289063-12.113281-16-22.527344-16-10.417968 0-19.21875 6.710937-22.53125 16h-26.277343c-3.722657-18.230469-19.875-32-39.191407-32-22.058593 0-40 17.945312-40 40v16c0 11.609375 5.054688 21.992187 12.980469 29.304687-26.34375 10.710938-44.9804685 36.550782-44.9804685 66.695313v16c0 4.425781 3.5742185 8 7.9999995 8h128c4.421876 0 8-3.574219 8-8v-16c0-30.144531-18.640624-55.984375-44.984374-66.695313 7.925781-7.3125 12.984374-17.695312 12.984374-29.304687v-8h25.46875c3.3125 9.289062 12.113282 16 22.53125 16 10.414063 0 19.214844-6.710938 22.527344-16h25.472656v8c0 11.609375 5.054688 21.992187 12.980469 29.304687-26.34375 10.710938-44.980469 36.550782-44.980469 66.695313v16c0 4.425781 3.574219 8 8 8h128c4.421876 0 8-3.574219 8-8v-16c0-30.144531-18.640624-55.984375-44.984374-66.695313 7.925781-7.3125 12.984374-17.695312 12.984374-29.304687v-8h25.46875c3.3125 9.289062 12.113282 16 22.53125 16 10.414063 0 19.214844-6.710938 22.527344-16h25.472656v8c0 11.609375 5.054688 21.992187 12.980469 29.304687-26.34375 10.710938-44.980469 36.550782-44.980469 66.695313v16c0 4.425781 3.574219 8 8 8h128c4.421876 0 8-3.574219 8-8v-16c0-30.144531-18.640624-55.984375-44.984374-66.695313zm-323.015626 66.695313v8h-16v-16h-16v16h-48v-16h-16v16h-16v-8c0-30.871094 25.125-56 56-56 30.871094 0 56 25.128906 56 56zm-80-96v-16c0-13.230469 10.765626-24 24-24 13.230469 0 24 10.769531 24 24v16c0 13.230469-10.769531 24-24 24-13.234374 0-24-10.769531-24-24zm112-8c-4.417968 0-8-3.582031-8-8 0-4.414063 3.582032-8 8-8 4.414063 0 8 3.585937 8 8 0 4.417969-3.585937 8-8 8zm29.964844-197.945313c-19.503906-17.109375-30.421875-41.773437-29.949218-67.671875.824218-45.75 38.65625-84.46875 84.335937-86.3125 24.40625-.886719 47.167969 7.714844 64.589844 24.457031 17.449219 16.746094 27.058593 39.296876 27.058593 63.472657 0 25.558593-11.136718 49.816406-30.546874 66.542969-16.175782 13.953124-25.453126 33.402343-25.453126 53.371093v.085938h-64.082031c-.433593-20.183594-9.792969-39.785157-25.953125-53.945313zm90.035156 69.945313v16h-64v-16zm-48 32h32c0 8.824219-7.179687 16-16 16-8.824218 0-16-7.175781-16-16zm72 200v8h-16v-16h-16v16h-48v-16h-16v16h-16v-8c0-30.871094 25.125-56 56-56 30.871094 0 56 25.128906 56 56zm-80-96v-16c0-13.230469 10.765626-24 24-24 13.230469 0 24 10.769531 24 24v16c0 13.230469-10.769531 24-24 24-13.234374 0-24-10.769531-24-24zm112-8c-4.417968 0-8-3.582031-8-8 0-4.414063 3.582032-8 8-8 4.414063 0 8 3.585937 8 8 0 4.417969-3.585937 8-8 8zm64 8v-16c0-13.230469 10.765626-24 24-24 13.230469 0 24 10.769531 24 24v16c0 13.230469-10.769531 24-24 24-13.234374 0-24-10.769531-24-24zm80 104h-16v-16h-16v16h-48v-16h-16v16h-16v-8c0-30.871094 25.125-56 56-56 30.871094 0 56 25.128906 56 56zm0 0"/>
                                    <path d="m232.007812 192.011719h32v16h-32zm0 0"/>
                                    <path d="m240.007812 143.203125v16.808594h16v-16.808594c5.09375-1.039063 9.832032-3.070313 14.023438-5.855469l12.320312 12.320313 11.308594-11.3125-12.316406-12.320313c2.78125-4.191406 4.8125-8.925781 5.855469-14.023437h16.808593v-16h-16.808593c-1.042969-5.097657-3.074219-9.832031-5.855469-14.023438l12.316406-12.320312-11.308594-11.3125-12.320312 12.320312c-4.191406-2.785156-8.929688-4.816406-14.023438-5.855469v-16.808593h-16v16.808593c-5.097656 1.039063-9.832031 3.070313-14.027343 5.855469l-12.320313-12.320312-11.308594 11.3125 12.320313 12.320312c-2.785156 4.191407-4.816406 8.925781-5.859375 14.023438h-16.804688v16h16.804688c1.042969 5.097656 3.074219 9.832031 5.859375 14.023437l-12.320313 12.320313 11.308594 11.3125 12.320313-12.320313c4.195312 2.785156 8.929687 4.816406 14.027343 5.855469zm8-63.191406c13.230469 0 24 10.769531 24 24s-10.769531 24-24 24c-13.234374 0-24-10.769531-24-24s10.765626-24 24-24zm0 0"/>
                                </svg>
                                <p className="text-xl century pt-3">OUTIL DE GESTION INTERNE</p>
                            </div>
                        </div>
                    </section>
                    <section className="w-full h-full flex flex-col justify-center items-center px-4 pt-12 pb-0 mt-24 bg-black text-white">
                        <div className="w-full">
                            <h2 data-aos='fade-right' className="text-center text-3xl century">
                            <span className="text-bleu">/</span>DÉFINISSEZ LE CONCEPT, NOUS NOUS CHARGEONS DU RESTE
                            </h2>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row mx-auto px-6 lg:px-32 py-6 my-4 lg:mt-10 lg:mb-4 lg:py-2 text-justify text-white">
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>FONCTIONNALITÉS PERSONNALISABLES
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Développer l’interaction avec les utilisateurs pour améliorer l’expérience passée sur votre site internet.</span>
                            </h4>
                            <p>Qu’il s’agisse de mettre en place un configurateur, un <strong>outil de réservation en ligne</strong> ou bien un simulateur de devis, il est possible d’optimiser votre organisation tout en facilitant l’accès à vos prestations pour les utilisateurs.</p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>INTRANET D’ENTREPRISE
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Mettre en place un outil de gestion en interne pour automatiser ou optimiser la réalisation des missions internes à votre entreprise via le numérique.</span>
                            </h4>
                            <p>En optant pour un <strong>outil interne en ligne</strong>, vous optimiserez votre manière de travailler ensemble. Il est possible de développer de nombreuses fonctionnalités pour simplifier l’organisation interne de vos collaborateurs.</p>
                        </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row mx-auto px-6 lg:px-32 py-6 my-4 lg:my-2 lg:py-2 text-justify">
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>MAINTENANCE TECHNIQUE
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Réagir à tout potentiel désagrément pour assurer un fonctionnement optimal, et ce, durant toute l’année.</span>
                            </h4>
                            <p>Nous sommes réactifs lorsqu’il s’agit de répondre à un besoin urgent lié à un dysfonctionnement <strong>sur votre site internet</strong>, ou à tout type de désagrément causé sur les fonctionnalités de votre site. Nous vous apportons une solution concrète et rapide.</p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>SUIVI DE PROJET
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Mettre en place un suivi étape par étape pour s’assurer du bon déroulement de votre projet de création de site internet sur-mesure.</span>
                            </h4>
                            <p>Un <strong>suivi régulier</strong> est effectué pour permettre le bon déroulement de votre projet de façon à respecter les délais, mais également d’être en mesure d’anticiper chaque étape en ne laissant aucun détail de côté.</p>
                        </div>
                        </div>
                    </section>
                    
                    
                    <section className=" w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 bg-cover mb-24" style={{background:'#000000ba url( '+ bgDev +')', backgroundSize:'cover', backgroundBlendMode: 'overlay'}}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h2 data-aos='fade-right' className="text-center text-white text-2xl md:text-4xl century">
                            <span className="text-bleu">/</span>Vous souhaitez opter pour une création de site sur-mesure ?
                            </h2>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                            {/* <RappelForm /> */}
                            <RoundButton url="/contact-agence-web-toulouse/" text="Je veux la création de mon site sur-mesure"/>
                        </div>

                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row text-center my-12">
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                                <svg className="svg-white" width="80px" height="80px" version="1.1" x="0px" y="0px" viewBox="0 0 60 60">
                                    <path d="M53,41V29H31V19h7V3H22v16h7v10H7v12H0v16h16V41H9V31h20v10h-7v16h16V41h-7V31h20v10h-7v16h16V41H53z M24,5h12v12H24V5z   M14,55H2V43h12V55z M36,55H24V43h12V55z M58,55H46V43h12V55z"/>
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
                                <p className="text-xl text-white century pt-3">OUTIL DE GESTION DE TYPE INTRANET</p>
                            </div>
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center my-6" data-aos='zoom-in' data-aos-delay="400">
                                <svg className="svg-white" height="80px" viewBox="0 0 512 512" width="80px">
                                    <path d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.640625 74.980469-181.019531s-26.628906-132.667969-74.980469-181.019531zm-181.019531 397.019531c-119.101562 0-216-96.898438-216-216s96.898438-216 216-216 216 96.898438 216 216-96.898438 216-216 216zm20-236.019531h90v40h-90v90h-40v-90h-90v-40h90v-90h40zm0 0"/>
                                </svg>
                                <p className="text-xl century text-white pt-3">FONCTIONNALITÉS UTILISATEURS</p>
                            </div>
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center"  data-aos='zoom-in' data-aos-delay="600">
                                <svg className="svg-white" height="80px" viewBox="0 -25 424 424" width="80px">
                                    <path d="m167.289062 272.132812c-1.601562 0-3.214843-.550781-4.53125-1.671874l-45.296874-38.570313c-1.5625-1.332031-2.460938-3.277344-2.460938-5.332031 0-2.050782.902344-3.996094 2.460938-5.328125l45.296874-38.570313c2.941407-2.507812 7.359376-2.152344 9.867188.789063 2.503906 2.945312 2.152344 7.363281-.792969 9.867187l-39.035156 33.242188 39.035156 33.242187c2.945313 2.507813 3.296875 6.925781.792969 9.867188-1.386719 1.628906-3.355469 2.464843-5.335938 2.464843zm0 0"/>
                                    <path d="m256.710938 272.132812c-1.980469 0-3.949219-.835937-5.332032-2.464843-2.507812-2.941407-2.152344-7.359375.789063-9.867188l39.035156-33.242187-39.035156-33.242188c-2.941407-2.503906-3.296875-6.921875-.789063-9.867187 2.503906-2.941407 6.925782-3.296875 9.863282-.789063l45.296874 38.570313c1.5625 1.332031 2.460938 3.277343 2.460938 5.328125 0 2.054687-.898438 4-2.460938 5.332031l-45.296874 38.570313c-1.316407 1.121093-2.929688 1.671874-4.53125 1.671874zm0 0"/>
                                    <path d="m195.964844 301.0625c-.480469 0-.964844-.050781-1.453125-.152344-3.78125-.796875-6.203125-4.511718-5.40625-8.292968l28.230469-134.035157c.796874-3.78125 4.507812-6.203125 8.292968-5.40625 3.78125.796875 6.203125 4.507813 5.40625 8.292969l-28.230468 134.035156c-.695313 3.296875-3.601563 5.558594-6.839844 5.558594zm0 0"/>
                                    <path d="m377 374.085938h-330c-25.914062 0-47-21.082032-47-47v-280.085938c0-25.914062 21.085938-47 47-47h330c25.914062 0 47 21.085938 47 47v280.085938c0 25.917968-21.085938 47-47 47zm-330-360.085938c-18.195312 0-33 14.804688-33 33v280.085938c0 18.195312 14.804688 33 33 33h330c18.195312 0 33-14.804688 33-33v-280.085938c0-18.195312-14.804688-33-33-33zm0 0"/>
                                    <path d="m417 112.089844h-410c-3.867188 0-7-3.132813-7-7 0-3.863282 3.132812-7 7-7h410c3.867188 0 7 3.136718 7 7 0 3.867187-3.132812 7-7 7zm0 0"/>
                                    <path d="m119.601562 78.59375c-12.210937 0-22.152343-9.941406-22.152343-22.152344 0-12.214844 9.941406-22.152344 22.152343-22.152344 12.214844 0 22.152344 9.9375 22.152344 22.152344 0 12.210938-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.152343 3.65625-8.152343 8.152344s3.660156 8.152344 8.152343 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0"/>
                                    <path d="m51.539062 78.378906c-12.214843 0-22.152343-9.9375-22.152343-22.152344 0-12.214843 9.9375-22.152343 22.152343-22.152343 12.214844 0 22.152344 9.9375 22.152344 22.152343 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304687c-4.492187 0-8.152343 3.660156-8.152343 8.152343 0 4.496094 3.660156 8.152344 8.152343 8.152344 4.496094 0 8.152344-3.65625 8.152344-8.152344 0-4.492187-3.65625-8.152343-8.152344-8.152343zm0 0"/>
                                    <path d="m187.664062 78.804688c-12.210937 0-22.148437-9.9375-22.148437-22.152344 0-12.210938 9.9375-22.148438 22.148437-22.148438 12.214844 0 22.152344 9.9375 22.152344 22.148438 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.148437 3.65625-8.148437 8.152344s3.65625 8.152344 8.148437 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0"/>
                                </svg>
                                <p className="text-xl century text-white pt-3">DÉVELOPPEMENT WEB</p>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center px-4 mt-12 mb-3">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Linkweb concrétise votre projet de site internet sur-mesure à Agen et Toulouse
                        </h2>
                        <hr className="blue"></hr>
                        <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Créer un site internet sur-mesure répond à un besoin précis en termes de communication en ligne. Il est important de soigner les détails pour vous permettre de profiter d’un outil pleinement adapté à votre activité professionnelle.</h4>
                    </section>
                    <section  className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                        <div className="w-full md:w-3/4 py-0 flex justify-end">
                            <Accordion>
                                <div className="w-full" label="QUELS SONT LES CRITÈRES POUR DÉFINIR MES BESOINS ?">
                                <p>Pour bien définir vos besoins relatifs à votre <strong>communication web</strong>, il est important de déterminer plusieurs éléments : l’existence (ou non) de votre <strong>site internet</strong> est le premier. Il est essentiel également de savoir si vous souhaitez vendre vos produits ou promouvoir vos services. Pour un <strong>site internet sur-mesure</strong>, définir le concept global des possibilités offertes à vos utilisateurs ou définir la problématique organisationnelle de votre entreprise en interne vont également être nécessaires. C’est ce qui va nous permettre de bien comprendre la problématique globale afin d’envisager très précisément les solutions qui pourraient être adaptées à vos besoins d’un point de vue graphique, mais aussi technique.</p>
                                </div>
                                <div label="QU'EST-CE QUI DIFFÉRENCIE UN SITE VITRINE D'UN SITE SUR-MESURE ?">
                                <p>Un <strong>site internet vitrine</strong>, de façon générale, présente les services ou produits d’une entreprise et permet de travailler principalement les objectifs relevant de l’image de l’entreprise. Par ailleurs, il permet d’obtenir des prospects qui pourraient se transformer en clients puis en clients selon le tunnel de conversion. Un <strong>site sur-mesure</strong> peut répondre à cela. Néanmoins, ce qui le différencie, c’est l’originalité apportée et la mise en place de fonctionnalités propres qui vont vous permettre de distinguer les simples contacts, des prospects très intéressés, par exemple. De plus, qu’il s’agisse de fonctionnalités destinées aux utilisateurs ou bien destinées à la gestion interne de votre entreprise, la <strong>création d’un site internet sur-mesure</strong> peut vous permettre d’optimiser le fonctionnement et l’organisation de votre entreprise : réservations en ligne, demande de devis, etc. Le sur-mesure correspond à la plus-value apportée en rapport à un <strong>site internet</strong> dit « classique ».</p>
                                </div>
                                <div label="QUEL AVANTAGE À METTRE EN PLACE UN SITE INTERNET SUR-MESURE ?">
                                <p>La <strong>création d’un site internet sur-mesure</strong> permet à tout un chacun de mettre en place la solution qui lui correspondra et ce, de façon exacte. En effet, selon votre secteur d’activité, l’ajout de fonctionnalités additionnelles peut-être fortement recommandé. C’est le cas pour un fleuriste, ou un restaurant avec ce qui relève des réservations en ligne, mais ceci peut être décliné en fonction des besoins de chacun. De plus, il est également possible de rendre le <strong>site internet administrable</strong> afin de vous faire profiter pleinement de vos fonctionnalités et de leur gestion. Contrôlez vos réservations, vos demandes de contacts, l’ajout d’actualités sur <strong>votre site internet</strong>, nous vous formerons pour vous offrir la possibilité de travailler en totale autonomie de ce point de vue.</p>
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
                        <Link className="bg-bleu text-white px-16 py-3 block mx-auto hover:bg-black font-normal" to="/actualite-digitale/">Voir l'actualité digitale</Link>
                        <br/>
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
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 mr-5 p-2 text-white font-bold" style={{borderRadius:'5px'}}>
                                <Link to="/referencement-toulouse/">Référencement</Link>
                            </div>
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 mr-5 p-2 text-white font-bold" style={{borderRadius:'5px'}}>
                                <Link to="/agence-web-toulouse/">Agence Web</Link>
                            </div>
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 mr-5 p-2 text-white font-bold" style={{borderRadius:'5px'}}>
                                <Link to="/agence-de-communication-agen-47-toulouse-31/">Nos réalisations</Link>
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
query lastsThreePostsCreationSiteSurMesure {
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
export default CreationSiteSurMesure;




