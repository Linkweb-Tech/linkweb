import React, { Component } from 'react';
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import Postune from '../components/postune';
import ButtonBlog from "../components/buttonblog";
import BoutonBlog from '../components/boutonBlog.js';
import RoundButton from '../components/roundButton.js';
// import RappelForm from "../components/rappelForm";
import CategoriesList from "../components/categoriesList";
import LastPostsMini from '../components/lastpostsmini';
import LastPostsList from '../components/lastpostslist';
import LastPostsTendances from '../components/lastpoststendances';


import { Timeline } from 'react-twitter-widgets';
import ButtonMenu from '../components/buttonmenu.js';
import BlogMenu from '../components/menublog.js';
import '../scss/global.scss';

import bgbloc from "../images/creation-sites-web-toulouse.jpg";
import background from "../images/background-blog.jpg";
import blocBg from "../images/background.jpg";
import CreerSite from "../images/besoins.jpg";
import RefSite from "../images/referencement-google-toulouse.jpg";
import AgenceAds from "../images/analytics-site-internet.jpg";
import world from "../images/grid-world.png";
import iconseo from "../images/seo-performance-marketing-graphic.png";
import iconsea from "../images/waving-flag.png";
import fbIcon from "../images/facebook-logo.svg";
import twitterIcon from "../images/twitter-logo.svg";
import instaIcon from "../images/instagram-logo.svg";




class ActualiteDigitale extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Actualité Digitale | Blog Numérique | Agence Web Linkweb à Agen (47)"
                    description="Suivez l'actualité digitale grâce au blog de l'Agence Web Linkweb située à Agen (47) et Toulouse (31), agence spécialisée dans la création de site internet."
                    keywords={[`Actualité Digitale`, `Blog SEO`, `Actualités SEO`]}
                    url="https://linkweb.fr/actualite-digitale/"
                    nom="Blog"
                    slug="actualite-digitale/"
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

                <section className="w-full mx-auto pb-0 px-4 bg-black flex flex-col justify-center items-center" style={{ background: '#000000d9 url(' + background + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundPosition: 'center', height: '450px', minHeight: '550px' }}>
                    <Link to="/actualite-digitale/"><h2 data-aos="fade-down" data-aos-delay="500" className="century text-4xl sm:text-6xl text-center text-white mt-40">
                        Le Blog<span className="text-bleu">/</span>Linkweb
                    </h2></Link>
                    <h1 className="century text-lg sm:text-2xl text-center text-white" data-aos="fade-up" data-aos-delay="500">Toute l'Actualité digitale</h1>
                    <br />
                    {/* Réseaux Sociaux */}
                    <section className="w-full flex flex-row justify-center text-white ">
                        <div className="w-1/3 md:w-1/6 lg:w-1/12 flex flex-row">
                            <div className="blocauteur mx-auto" data-aos="fade-left">
                                <a href="https://facebook.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex justify-center no-underline text-white">
                                    <img
                                        src={fbIcon}
                                        alt="Réseaux sociaux"
                                        className="w-6 fill-current"
                                    />
                                </a>
                            </div>
                            <div className="blocauteur mx-auto" data-aos="fade-up">
                                <a href="https://twitter.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex justify-center no-underline text-white">
                                    <img
                                        src={twitterIcon}
                                        alt="Réseaux sociaux"
                                        className="w-6 fill-current"
                                    />
                                </a>
                            </div>
                            <div className="blocauteur mx-auto" data-aos="fade-right">
                                <a href="https://instagram.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex justify-center no-underline text-white">
                                    <img
                                        src={instaIcon}
                                        alt="Réseaux sociaux"
                                        className="w-6 fill-current"
                                        style={{ maxHeight: '50px', minWidth: '15px' }}
                                    />
                                </a>
                            </div>
                        </div>
                    </section>
                    {/* FIN Réseaux Sociaux */}
                </section>
                {/* Menu de catégories 
                <section className="flex flex-row justify-center" data-aos="zoom-in">
                    <div className="w-full menublog century uppercase lg:w-3/4 bg-bleu flex flex-row text-md text-center text-white p-3 py-4 font-bold -mt-6">
                        <div className="itemmenublog w-full lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/actus/">Actualités</Link></div>|
                        <div className="itemmenublog w-full lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/agence/">Agence</Link></div>|
                        <div className="itemmenublog w-full lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/referencement/"><span className="opacity-0 absolute md:opacity-100 md:ml-6 lg:ml-10 md:-mr-8 md:relative mx-auto">Référencement</span><span className="opacity-100 relative md:opacity-0">SEO/SEA</span></Link></div>|
                        <div className="itemmenublog w-full lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/tendances/">Tendances</Link></div>
                    </div>
                </section>
                FIN Menu de catégories 
                <section className="w-full flex flex-row justify-end h-4 mb-10 font-medium">
                        <section className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 flex bg-bleu text-white text-center text-xs sm:text-sm md:text-md" style={{borderBottomLeftRadius:'27px', minHeight:'48px'}}>
                            <ul className="flex flex-row w-full text-xs md:text-base uppercase font-bold mx-auto items-center text-center">
                                <li className=" w-full md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/actus/">Actualités</Link></li>
                                <li className=" w-full md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/agence/">Agence</Link></li>
                                <li className=" w-full md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/referencement/">Référencement</Link></li>
                                <li className=" w-full md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/tendances/">Tendances</Link></li>
                            </ul>
                        </section>
                </section>*/}
                <BlogMenu />
                <section className=" flex flex-col xl:flex-row flex justify-center mb-10 px-12 md:px-24 lg:px-32 xl:px-48">
                    <div className="w-full xl:w-3/5">
                        <section className=" flex flex-col align-center justify-center text-center md:mt-12 my-0 sm:mb-3">
                            <div className="flex flex-row items-center">
                                <Link className="text-bleu hover:text-white hover:bg-bleu" to="/blog/referencement/" style={{ transition: 'all ease 0.5s' }}>
                                    <h2 className="font-bold century text-3xl py-2 justify-start flex px-6">
                                        À la Une
                                            </h2>
                                </Link>
                                <hr className="hrblog mt-1 px-6 mr-6" style={{ width: '70%' }}></hr>
                            </div>
                            <Postune postune={this.props.data.allWordpressPost.edges} />
                            <div className="flex flex-row items-center">
                                <Link className="text-bleu hover:text-white hover:bg-bleu" to="/blog/actus/" style={{ transition: 'all ease 0.5s' }}><h3 className="font-bold century text-xl py-2 justify-start flex px-6">Actualités</h3></Link>
                                <hr className="hrblog mt-1 px-6 mr-6"></hr>
                            </div>
                            <LastPosts wrap='false' lastposts={this.props.data.actus.edges} />
                            {/* <section className="flex justify-center ">
                                <div className="w-2/3 lg:w-1/4" data-aos="fade-up">
                                    <RoundButtonBlog className="rounded-none century font-thin " url="/blog/tous-articles/" text="Voir tous les articles"/><br/>
                                </div>
                            </section> */}
                            <section className="blocblog w-full flex flex-col justify-center bg-bleu items-end px-4 pt-12 pb-0 sm:my-2 bg-cover my-24" style={{ background: '#37cfeede url(' + blocBg + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', borderRadius: '15px' }}>
                                <div className="max-w-5xl mx-auto flex items-center">
                                    <h2 data-aos='fade-right' className="text-center text-white text-2xl lg:text-4xl century">
                                        Vous souhaitez être recontacté pour la mise en place de votre solution web ?
                                        </h2>
                                </div>
                                <div className="max-w-6xl mx-auto flex text-center mb-12">
                                    {/* <RappelForm /> */}
                                    <RoundButton color="darkgrey" url="/contact-agence-web-toulouse/" text="Contactez-nous" />
                                </div>
                            </section>
                            <section className="w-full mx-auto py-6 mt-4 mb-0">
                                <div className="flex flex-row items-center">
                                    <Link to="/blog/referencement/" className="text-bleu hover:text-white hover:bg-bleu" style={{ transition: 'all ease 0.5s' }}>
                                        <h2 className="font-bold century text-xl py-2 justify-start flex px-6">
                                            À propos de Référencement
                                            </h2>
                                    </Link>
                                    <hr className="hrblog mt-1 px-6 mr-6" style={{ width: '55%' }}></hr>
                                </div>
                                <br />
                                <LastPostsList lastposts={this.props.data.ref.edges} />
                            </section>
                            <section className="flex flex-col md:flex-row justify-center px-5 xl:px-0 mr-0">
                                <div data-aos="fade-in" className="blocliens w-full lg:w-1/2 xl:w-6/12 bg-darkgrey my-4 border border-darkgrey mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{ background: '#00cfffe0 url( ' + blocBg + ')', borderRadius: '15px', borderColor: '#d4d4d4', backgroundBlendMode: 'multiply', backgroundSize: 'cover', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
                                    <svg width="60px" className="mx-auto block" fill="#fffff" viewBox="-949 951 100 125"><switch><g><g><path fill="#ffffff" d="M-899.6,1026.9c2.2,0,4.2-0.3,6.2-1c-1-0.4-1.7-1.2-2.1-2.2l-0.8-2.4c-0.6,1-1.4,2-2.1,2.9c-0.1,0.1-0.1,0.2-0.2,0.2     c-0.3,0-0.6,0-0.9,0c-0.3,0-0.6,0-0.9,0c-0.1-0.1-0.1-0.2-0.2-0.2c-1.8-2.1-3.3-4.7-4.4-7.5c1.8-0.3,3.6-0.5,5.6-0.5     c0.5,0,1,0,1.5,0l-0.9-2.5c-0.2,0-0.4,0-0.6,0c-2.2,0-4.3,0.2-6.3,0.6c-0.6-2-0.9-4.2-1-6.4h5.9l-0.4-1.2     c-0.2-0.4-0.2-0.8-0.2-1.3h-5.3c0.1-2.2,0.4-4.4,1-6.4c2,0.4,4.1,0.6,6.3,0.6c2.2,0,4.3-0.2,6.3-0.6c0.4,1.4,0.7,3,0.8,4.5     l2.5,0.9c-0.1-2.1-0.5-4.1-1-6c1.9-0.6,3.8-1.3,5.5-2.2c0.1,0,0.1-0.1,0.2-0.1c1.9,2.6,3.2,5.8,3.4,9.3h-5.1l7.2,2.5     c0.1,0,0.2,0.1,0.3,0.1c0-0.5,0.1-0.9,0.1-1.4c0-11.2-9.1-20.3-20.3-20.3c-11.2,0-20.3,9.1-20.3,20.3     C-919.9,1017.8-910.8,1026.9-899.6,1026.9z M-904.3,1023.5c0.1,0.1,0.1,0.2,0.2,0.3c-3.2-0.8-6-2.5-8.2-4.8     c0.1,0,0.1-0.1,0.2-0.1c1.4-0.7,3-1.3,4.6-1.8C-906.8,1019.5-905.7,1021.6-904.3,1023.5z M-886.9,994.1c-0.1,0-0.1,0.1-0.2,0.1     c-1.4,0.7-3,1.3-4.6,1.7c-0.8-2.3-1.9-4.4-3.3-6.3c-0.1-0.1-0.1-0.2-0.2-0.3C-892,990.2-889.2,991.9-886.9,994.1z M-900.6,988.8     c0.3,0,0.6,0,0.9,0c0.3,0,0.6,0,0.9,0c0.1,0.1,0.1,0.1,0.2,0.2c1.8,2.1,3.3,4.7,4.4,7.5c-1.8,0.3-3.6,0.5-5.5,0.5     c-1.9,0-3.8-0.2-5.6-0.5c1.1-2.9,2.6-5.4,4.4-7.5C-900.7,988.9-900.6,988.9-900.6,988.8z M-904.2,989.4c-0.1,0.1-0.1,0.2-0.2,0.3     c-1.3,1.9-2.4,4-3.3,6.4c-1.6-0.5-3.1-1-4.6-1.7c-0.1,0-0.1-0.1-0.2-0.1C-910.1,991.9-907.3,990.2-904.2,989.4z M-914,996     c0.1,0,0.1,0.1,0.2,0.1c1.7,0.9,3.5,1.6,5.5,2.2c-0.6,2.2-1,4.6-1.1,7h-8C-917.2,1001.9-915.9,998.7-914,996z M-909.4,1007.8     c0.1,2.4,0.5,4.8,1.1,7c-1.9,0.6-3.8,1.3-5.5,2.2c-0.1,0-0.1,0.1-0.2,0.1c-1.9-2.6-3.2-5.8-3.4-9.3H-909.4z" /><path fill="#ffffff" d="M-880.5,1012.1c0.7-0.3,0.6-1.3-0.1-1.6l-17.1-5.9c-0.7-0.2-1.3,0.4-1.1,1.1l5.9,17.1c0.3,0.7,1.3,0.8,1.6,0.1l2.1-4.1     l8.4,8.4c0.3,0.3,0.9,0.3,1.2,0l3.4-3.4c0.3-0.3,0.3-0.9,0-1.2l-8.4-8.4L-880.5,1012.1z" /><path fill="#ffffff" d="M-855.3,964.1h-87.3c-2.9,0-5.3,2.4-5.3,5.3v63.1c0,2.9,2.4,5.3,5.3,5.3h87.3c2.9,0,5.3-2.4,5.3-5.3v-63.1     C-850,966.5-852.4,964.1-855.3,964.1z M-852.8,1032.6c0,1.4-1.1,2.5-2.5,2.5h-87.3c-1.4,0-2.5-1.1-2.5-2.5v-54.7h92.4V1032.6z      M-852.8,975.1h-92.4v-5.7c0-1.4,1.1-2.5,2.5-2.5h87.3c1.4,0,2.5,1.1,2.5,2.5V975.1z" /><path fill="#ffffff" d="M-881.4,969.6h-35.3c-0.8,0-1.4,0.6-1.4,1.4s0.6,1.4,1.4,1.4h35.3c0.8,0,1.4-0.6,1.4-1.4S-880.6,969.6-881.4,969.6z" /><circle fill="#ffffff" cx="-941.2" cy="971" r="1.4" /><circle fill="#ffffff" cx="-936.6" cy="971" r="1.4" /><circle fill="#ffffff" cx="-931.9" cy="971" r="1.4" /></g></g></switch></svg>
                                    {/* <img src={world} className="w-9 h-10 mx-auto block" alt="Création site internet Toulouse/"/><br/> */}
                                    <Link className="w-2/3 font-bold hover:text-bleu text-left" to="/creation-site-internet-toulouse/"><h2 className="text-center text-white text-xl px-4 font-bold century">Création Web</h2></Link>
                                    <hr className="blue"></hr>
                                    <p className="text-xs px-4 text-white text-center">L’<strong>Agence web</strong> est spécialisée dans la <strong>création de site internet à Agen (47) et Toulouse (31)</strong>. <strong>Site vitrine, e-commerce ou administrable</strong>, notre équipe est en mesure de mettre en place la solution qui s’impose en fonction de vos besoins, de vos envies mais aussi des dernières <strong>tendances digitales</strong>.</p>
                                    <br />
                                    <div className="w-2/3 mx-auto block">
                                        <br />
                                        <BoutonBlog url="/creation-site-internet-toulouse/" text="Créer son site web" color="bleu" />
                                    </div>
                                </div>
                                <div data-aos="fade-in" className="blocliens w-full lg:w-1/2 xl:w-6/12 bg-darkgrey my-4 border border-darkgrey mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{ background: '#00b1e2 url( ' + blocBg + ')', borderRadius: '15px', borderColor: '#d4d4d4', backgroundBlendMode: 'multiply', backgroundSize: 'cover', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
                                    <svg width="60px" className="mx-auto block" fill="#ffffff" viewBox="0 0 128 160"><g><path d="M52.5,35.2h-5.2V47h5.2c0.5,1.7,1.2,3.4,2,4.9l-3.7,3.7l8.3,8.3l3.7-3.7c1.5,0.9,3.2,1.6,4.9,2v5.2h11.7v-5.2   c1.7-0.5,3.4-1.2,4.9-2l3.7,3.7l8.3-8.3l-3.7-3.7c0.9-1.5,1.6-3.2,2-4.9h5.2V35.2h-5.2c-0.5-1.7-1.2-3.4-2-4.9l3.7-3.7l-8.3-8.3   l-3.7,3.7c-1.5-0.9-3.2-1.6-4.9-2v-5.2H67.8V20c-1.7,0.5-3.4,1.2-4.9,2l-3.7-3.7l-8.3,8.3l3.7,3.7C53.7,31.9,53,33.5,52.5,35.2z    M55.1,26.7l4-4l3.2,3.2l1-0.6c1.9-1.2,4-2.1,6.2-2.5l1.2-0.3v-4.6h5.7v4.6l1.2,0.3c2.2,0.5,4.3,1.3,6.2,2.5l1,0.7l3.2-3.3l4,4   l-3.2,3.2l0.6,1c1.2,1.9,2.1,4,2.5,6.2l0.3,1.2h4.6V44h-4.6l-0.3,1.2c-0.5,2.2-1.3,4.3-2.5,6.2l-0.7,1l3.2,3.2l-4,4l-3.2-3.2   l-1,0.6c-1.9,1.2-4,2.1-6.2,2.5l-1.2,0.3v4.6h-5.7v-4.6l-1.2-0.3c-2.2-0.5-4.3-1.3-6.2-2.5l-1-0.7l-3.2,3.2l-4-4l3.2-3.2l-0.6-1   c-1.2-1.9-2.1-4-2.5-6.2L54.9,44h-4.6v-5.7h4.6l0.3-1.2c0.5-2.2,1.3-4.3,2.5-6.2l0.7-1L55.1,26.7z" /><path d="M73.6,56.3c8.4,0,15.2-6.8,15.2-15.2S82,25.9,73.6,25.9s-15.2,6.8-15.2,15.2S65.2,56.3,73.6,56.3z M73.6,28.9   c6.7,0,12.2,5.5,12.2,12.2s-5.5,12.2-12.2,12.2s-12.2-5.5-12.2-12.2S66.9,28.9,73.6,28.9z" /><path d="M53.9,93c6.8,0,13.3-2,18.7-5.5l23.6,23.6c1.4,1.4,3.3,2.1,5.1,2.1c1.8,0,3.7-0.7,5.1-2.1c2.8-2.8,2.8-7.4,0-10.2   L82.8,77.2c1.6-2.4,2.9-5.1,3.8-7.9c0.3-1,0.6-2.1,0.9-3.1c0.2-0.8-0.3-1.6-1.1-1.8c-0.8-0.2-1.6,0.3-1.8,1.1   c-0.2,1-0.5,1.9-0.8,2.9C79.5,81.3,67.5,90,53.9,90c-17.3,0-31.4-14.1-31.4-31.4c0-15.4,11.4-28.7,26.6-31.1   c0.8-0.1,1.4-0.9,1.3-1.7c-0.1-0.8-0.9-1.4-1.7-1.3c-16.6,2.6-29.2,17.2-29.2,34C19.5,77.5,34.9,93,53.9,93z M104.3,108.9   c-1.6,1.6-4.3,1.6-6,0L75.5,86.1l6-6l22.9,22.9C105.9,104.6,105.9,107.3,104.3,108.9z" /><path d="M45.6,35.9c0.8-0.3,1.1-1.2,0.8-2c-0.3-0.8-1.2-1.1-2-0.8c-10.1,4.1-16.6,13.8-16.6,24.6c0,14.7,11.9,26.6,26.6,26.6   c9.5,0,18.4-5.1,23.1-13.4c0.4-0.7,0.2-1.6-0.6-2s-1.6-0.2-2,0.6c-4.2,7.3-12,11.9-20.5,11.9c-13,0-23.6-10.6-23.6-23.6   C30.9,48.1,36.7,39.5,45.6,35.9z" /></g></svg>
                                    {/* <img src={iconseo} className="w-9 h-10 mx-auto block" alt="Création site internet Toulouse/"/><br/> */}
                                    <Link className="w-2/3 font-bold hover:text-bleu text-left" to="/referencement-toulouse/"><h2 className="text-center text-white text-xl px-4 font-bold century">Référencement Naturel</h2></Link>
                                    <hr className="blue"></hr>
                                    <p className="text-xs px-4 text-white text-center">Notre <strong>agence de référencement</strong> apporte de la <strong>visibilité</strong> à <strong>votre site internet</strong> grâce à la méthode du <strong>référencement naturel (SEO)</strong>. Notre équipe de spécialistes effectue un travail à la fois technique et éditorial régulier pour vous permettre d’avoir un site qui répondant aux canons de <strong>Google</strong>.</p>
                                    <br />
                                    <div className="w-2/3 mx-auto block">
                                        <br />
                                        <BoutonBlog url="/referencement-toulouse/" text="Développer son SEO" color="bleu" />
                                    </div>
                                </div>
                                <div data-aos="fade-in" className="blocliens w-full lg:w-1/2 xl:w-6/12 bg-darkgrey my-4 border border-darkgrey mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{ background: '#057898 url( ' + blocBg + ')', borderRadius: '15px', borderColor: '#d4d4d4', backgroundBlendMode: 'multiply', backgroundSize: 'cover', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
                                    <svg width="60px" className="mx-auto block" fill="#ffffff" viewBox="0 0 70 87.5"><g><g><g><path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="     M11,27.9023037v11.4893436c0,0.9677048,0.6433992,1.7521858,1.4370718,1.7521858h11.0287695V26.1501198H12.4370718     C11.6433992,26.1501198,11,26.9345989,11,27.9023037z" /><path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="     M23.4658413,26.1501198v14.9937134c11.1650333,0,21.916132,4.3558006,29.8110332,12.1091156V14.0407305     C45.3819733,21.7941818,34.6309967,26.1501198,23.4658413,26.1501198z" /><path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="     M27.4612389,29.9713554c7.7992516-0.6778984,15.3473396-3.3212166,21.8205452-7.5934429" /></g><polygon fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="    23.4626102,55.9592705 16.930397,55.9592705 13.4545794,41.1469345 19.9867325,41.1469345   " /></g><path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M53.2768745,27.3235264C56.4430656,27.3235264,59,29.890398,59,33.0566483c0,3.1562538-2.5569344,5.7231255-5.7231255,5.7231255   V27.3235264z" /></g></svg>
                                    {/* <img src={iconsea} className="w-9 h-10 mx-auto block" alt="Création site internet Toulouse/"/><br/> */}
                                    <Link className="w-2/3 font-bold hover:text-bleu text-left" to="/agence-adwords-47-31/"><h2 className="text-center text-white text-xl px-4 font-bold century">Référencement Payant</h2></Link>
                                    <hr className="blue"></hr>
                                    <p className="text-xs px-4 text-white text-center">Vous souhaitez <strong>générer du trafic</strong>, attirer de nouveaux prospects ou bien convertir vos utilisateurs ? Nous mettons en place vos <strong>campagnes Google Ads</strong> basées sur la qualité et la pertinence des annonces afin de vous permettre de maximiser votre <strong>retour sur investissement</strong> grâce à votre site.</p>
                                    <br />
                                    <div className="w-2/3 mx-auto block">
                                        <br />
                                        <BoutonBlog url="/agence-adwords-47-31/" text="Créer une campagne Ads" color="bleu" />
                                    </div>
                                </div>
                            </section>
                        </section>
                    </div>
                    <div className="w-full xl:w-1/3 mt-0 mb-3 px-12 mt-0 xl:mt-16">
                        <div className="bloccontactblog w-full lg:w-full flex flex-col justify-center items-center century text-justify order-first lg:order-last flex" style={{ background: '#3c3c3cfa url(' + bgbloc + ')', backgroundBlendMode: 'overlay', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <h2>Vous souhaitez mettre en place un projet web ?</h2>
                            <br />
                            <h3>Linkweb met en place votre projet de création de site web.</h3>
                            <br />
                            <div className="w-1/2 flex flex-row justify-center items-center">
                                <br />
                                <BoutonBlog url="/contact-agence-web-toulouse/" text="Contactez-nous" position="center" />
                            </div>
                        </div>
                        <br />
                        {/* <h3 className="font-bold pb-3">CATÉGORIES</h3>
                        <CategoriesList list={ this.props.data.allWordpressCategory.edges} /> */}
                        <hr className="hrblog"></hr>
                        <h3 className="font-bold century text-bleu pt-3 pb-3">Toute l'Actualité Digitale</h3>
                        <hr className="hrblog"></hr>
                        <LastPostsMini lastposts={this.props.data.lastmini.edges} />
                        <section className="flex -mt-4 justify-center mb-3 " >
                            <div className="w-1/2 md:w-full py-2 hover:bg-bleu text-bleu hover:text-white" style={{ border: 'solid 1px #37cfee', transition: 'all ease 0.5s' }}>
                                <Link className="text-sm century font-thin" to="/blog/tous-articles/"><span className="font-bold py-2 mx-auto flex justify-center">Voir tous les articles</span></Link>
                            </div>
                        </section>
                        <br />
                        <Link to="/creation-site-internet-toulouse/"><section className="sidebarlinks century uppercase" style={{ background: '#000000cf url(' + CreerSite + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}><h4>Créer un site internet</h4></section></Link>
                        <Link to="/referencement-toulouse/"><section className="sidebarlinks century uppercase" style={{ background: '#000000cf url(' + RefSite + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}><h4>Optimiser mon référencement naturel</h4></section></Link>
                        <Link to="/agence-adwords-47-31/"><section className="sidebarlinks century uppercase" style={{ background: '#000000cf url(' + AgenceAds + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}><h4>Lancer une campagne Google Ads</h4></section></Link>
                        <br />
                        <hr className="hrblog"></hr>
                        <Link to="/blog/tendances/" className="text-bleu"><h3 className="font-bold century pt-3 pb-3">Tendances</h3></Link>
                        <hr className="hrblog"></hr>
                        <LastPostsTendances lastposts={this.props.data.tendances.edges} />
                        <br />
                        <hr className="hrblog"></hr>
                        <h3 className="font-bold century text-bleu pt-3 ">Retrouvez Linkweb sur Twitter</h3><br />
                        <hr className="hrblog"></hr>
                        <Timeline
                            dataSource={{
                                sourceType: 'profile',
                                screenName: 'AgenceLinkweb'
                            }}
                            options={{
                                username: 'AgenceLinkweb',
                                height: '600',
                                lang: 'fr'
                            }}
                            onLoad={() => console.log('Timeline is loaded!')}
                        />
                    </div>
                </section>



                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsActualitedigitale {
   actus: allWordpressPost(limit: 4, filter: {categories: {elemMatch: {slug: {eq: "actus"}}}}) {
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
    allWordpressPost(limit: 1) {
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
    lastmini: allWordpressPost(limit: 5) {
        edges {
            node {
            id
            title
            slug
            modified(locale: "fr", formatString: "DD/MM/YYYY")
            link
            featured_media {
                source_url
            }
            }
        }
    }
    allWordpressCategory {
        edges {
            node {
            slug
            name
            link
            }
        }
    }
    tendances: allWordpressPost(limit:3, filter: {categories: {elemMatch: {slug: {eq: "tendances"}}}}) {
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
    ref: allWordpressPost(limit: 4, filter: {categories: {elemMatch: {slug: {eq: "referencement"}}}}) {
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
export default ActualiteDigitale;
