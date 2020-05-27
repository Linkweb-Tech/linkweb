import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import "../scss/faq.scss"

import LastPosts from '../components/lastposts';
import ButtonBlog from "../components/buttonblog";
import RoundButton from "../components/roundButton.js";
// import RappelForm from "../components/rappelForm";
import CategoriesList from "../components/categoriesList";
import LastPostsMini from '../components/lastpostsmini';
import { Timeline } from 'react-twitter-widgets';

import Question from '../components/question';
import Answer from '../components/answer';
import FaqBtn from '../components/faqButton';

import climaf from "../images/climaf-avis.png";
import tgcm from "../images/tgcm-avis.png";
import avs from "../images/avsmoto-avis.png";
import contis from "../images/contis-avis.png";
import hautenbois from "../images/hautenbois-avis.png";
import faivre from "../images/faivre-avis.png";

import background from "../images/foire-aux-questions.jpg";

import fbIcon from "../images/facebook-logo.svg";
import twitterIcon from "../images/twitter-logo.svg";
import instaIcon from "../images/instagram-logo.svg";




class FAQ extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: 1
        };
    }

    setActive = (id) => {
        this.setState({ active: id });
    }

    setNext = (id) => {
        let newId = id + 1;
        if (newId > 31) {
            newId = 1
        }
        this.setState({ active: newId });
        this.scrollToElement(newId);
    }

    setPrec = (id) => {
        let newId = id - 1;
        if (newId == 0) {
            newId = 31
        }
        this.setState({ active: newId });
        this.scrollToElement(newId);
    }

    scrollToElement = (id) => {
        document.getElementById("q" + id).scrollIntoView({behavior: "smooth", block: "center"});
    }



    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Foire aux Questions | Agence Web Linkweb à Toulouse (31)"
                    description="Nous répondons aux questions les plus courantes concernant la création de vos projets web."
                    keywords={[`Création site internet Toulouse`, `Création site internet Agen`, `Agence Web Toulouse`]}
                    url="https://linkweb.fr/faq/"
                    nom="F.A.Q."
                    slug="faq/"
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
                <section className="w-full mx-auto pb-0 px-4 pt-6 bg-blackflex flex-col justify-center items-center" style={{ background: '#00000094 url(' + background + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundPosition: 'center', height: '450px' }}>
                    <h2 data-aos="fade-down" data-aos-delay="500" className="century text-5xl sm:text-6xl text-center text-white mt-40">
                        Foire aux Questions
                    </h2>
                    <h1 className="century text-xl sm:text-2xl text-center text-white" data-aos="fade-up" data-aos-delay="500">Réponse aux questions les plus fréquentes</h1>
                    <br />
                    {/* Réseaux Sociaux */}
                    <section className="w-full flex flex-row justify-center text-white ">
                        <div className="w-1/3 md:w-1/6 lg:w-1/12 flex flex-row">
                            <div className="w-1/3 block mx-auto" data-aos="fade-left">
                                <a href="https://facebook.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex justify-center no-underline text-white">
                                    <img
                                        src={fbIcon}
                                        alt="Réseaux sociaux"
                                        className="w-6 fill-current"
                                    />
                                </a>
                            </div>
                            <div className="w-1/3 block, mx-auto" data-aos="fade-up">
                                <a href="https://twitter.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex justify-center no-underline text-white">
                                    <img
                                        src={twitterIcon}
                                        alt="Réseaux sociaux"
                                        className="w-6 fill-current"
                                    />
                                </a>
                            </div>
                            <div className="w-1/3 block, mx-auto" data-aos="fade-right">
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

                <section className="w-full flex flex-col lg:flex-row mx-auto block flex justify-center justify-content-center" style={{backgroundColor:'#000000'}}>

                    <div className="w-full century lg:w-1/3 order-last lg:order-first">
                        <ul>
                            <li>
                                <div className="titre flex flex-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#37cfee" viewBox="0 0 128 160" x="0px" y="0px" width="25px"><path d="M42.53,47.7a2,2,0,0,0,2.83-2.83L27.69,27.2A2,2,0,0,0,24.87,30Z" /><path d="M79.95,38.95a2,2,0,0,0,2-2V12.28a2,2,0,1,0-4,0V36.95A2,2,0,0,0,79.95,38.95Z" /><path d="M53.06,26.48a2,2,0,1,0,3.88-1l-6-24a2,2,0,1,0-3.88,1Z" /><path d="M103.62,91.71a9,9,0,0,0-4.5-2.45A8.14,8.14,0,0,0,92.2,79a8.38,8.38,0,0,0,.5-2.8,9,9,0,0,0-7.24-8.85L96.31,56.46a9.05,9.05,0,1,0-13-12.59C71.42,56.56,56.64,71,50.81,73.37c-3.4,1.4-4.22.31-6.85-4a31.62,31.62,0,0,0-7.16-8.9c-3.46-2.81-7.53-2.89-10.9-.22-3.82,3.05-4.37,8.23-1.33,12.59,6.28,9,6.23,13.06,6.19,17C30.46,118.44,50.31,127.29,62.1,128c.9.05,1.77.08,2.64.08a38.56,38.56,0,0,0,29-12.63l6.55-7.22.11-.13,3.25-3.59A9.07,9.07,0,0,0,103.62,91.71ZM90.71,112.8l-.08.09A35.08,35.08,0,0,1,62.34,124a31.27,31.27,0,0,1-14.44-5c.31,0,.63,0,.95,0l.85,0c5-.32,9.57-3.35,13.65-9a2,2,0,0,0-3.25-2.33c-3.33,4.64-6.9,7.12-10.62,7.37-5.19.34-9.18-3.81-9.24-3.87a2,2,0,0,0-.29-.25c-3.13-4.94-5.28-11.72-5.18-21.09.06-5.29-.42-10.07-6.91-19.35-1.5-2.16-1.91-5.21.54-7.17,1.92-1.52,3.85-1.46,5.89.19a27.89,27.89,0,0,1,6.26,7.86A21.25,21.25,0,0,0,44,76.14a2,2,0,0,0,.12.16c.17.18,4,4.37.1,10.46a2,2,0,0,0,3.37,2.15,13,13,0,0,0,1.84-11,11.37,11.37,0,0,0,2.88-.79c7.87-3.23,26.32-22.38,33.9-30.47a5,5,0,0,1,3.6-1.6,5.07,5.07,0,0,1,3.66,1.48,5.05,5.05,0,0,1,0,7.15L73.11,74a8.86,8.86,0,0,0,0,12.56l.11.11a8.78,8.78,0,0,0,5.11,2.51,8.7,8.7,0,0,0,2.28,8.17l.08.07.08.08A8.63,8.63,0,0,0,86.87,100a8.59,8.59,0,0,0,2.48,7l.15.17a8.68,8.68,0,0,0,4.21,2.32Z" /><polygon points="58.31 44.54 57.55 48.94 61.5 46.86 65.45 48.94 64.69 44.54 67.89 41.42 63.47 40.78 61.5 36.78 59.53 40.78 55.11 41.42 58.31 44.54" /><polygon points="65.96 16.73 67.31 19.77 68.91 16.84 72.22 16.5 69.93 14.08 70.63 10.82 67.62 12.25 64.73 10.58 65.16 13.89 62.68 16.12 65.96 16.73" /><polygon points="37.3 22.64 39.53 20.16 42.84 20.6 41.17 17.71 42.61 14.71 39.35 15.39 36.94 13.1 36.58 16.41 33.65 18 36.69 19.36 37.3 22.64" /></svg>
                                    <p>Pour démarrer</p>
                                </div>
                                <ul className="bastitre">
                                    <Question responseId={1} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Pourquoi créer un site internet ?</Question>
                                    <Question responseId={2} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>À qui s’adresse la création de site internet ?</Question>
                                    <Question responseId={3} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Qui contacter pour créer un site internet ?</Question>
                                    <Question responseId={4} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Qu’est-ce que le référencement naturel ?</Question>
                                    <Question responseId={5} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>À quoi sert le référencement naturel ?</Question>
                                    <Question responseId={6} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Quelle est la différence entre le SEO et le SEA ?</Question>
                                </ul>
                            </li>
                            <li><div className="titre flex flex-row">
                                <svg width="20px" fill="#37cfee" stroke="4px" viewBox="0 0 66 82.5" ><g><g><g><path d="M54.944,54.685c-1.313,1.313-1.317,3.443-0.007,4.753c1.315,1.304,3.45,1.305,4.758-0.002     c1.313-1.313,1.313-3.448,0-4.761C58.391,53.371,56.255,53.372,54.944,54.685z M58.634,58.374c-0.724,0.724-1.909,0.723-2.639,0     c-0.722-0.722-0.718-1.902,0.01-2.629c0.727-0.727,1.905-0.733,2.629-0.01C59.361,56.462,59.361,57.647,58.634,58.374z" /></g><g><path d="M63.084,53.584l-8.583-8.583c1.123-1.994,1.967-4.054,2.488-6.144l5.645-0.994c0.358-0.063,0.62-0.375,0.62-0.739v-9.45     c0-0.363-0.26-0.674-0.617-0.738l-5.631-1.014c-0.582-2.264-1.495-4.459-2.719-6.538l3.282-4.711     c0.208-0.298,0.172-0.704-0.086-0.96l-6.7-6.67c-0.257-0.254-0.66-0.291-0.957-0.085l-4.701,3.263     c-2.058-1.212-4.247-2.113-6.52-2.682l-1.014-5.667c-0.064-0.358-0.375-0.618-0.738-0.618h-9.45c-0.363,0-0.674,0.26-0.738,0.618     l-1.014,5.667c-2.269,0.569-4.461,1.469-6.529,2.683l-4.712-3.265c-0.297-0.205-0.7-0.17-0.957,0.086l-6.68,6.67     c-0.257,0.257-0.293,0.661-0.085,0.959l3.282,4.711c-1.224,2.079-2.137,4.274-2.719,6.538l-5.631,1.014     c-0.357,0.065-0.617,0.375-0.617,0.738v9.45c0,0.364,0.261,0.675,0.62,0.739l5.637,0.995c0.569,2.249,1.48,4.446,2.711,6.545     l-3.283,4.702c-0.208,0.298-0.172,0.702,0.084,0.959l6.68,6.69c0.257,0.258,0.661,0.292,0.959,0.085l4.713-3.283     c2.061,1.202,4.252,2.105,6.526,2.69l1.014,5.661c0.064,0.357,0.375,0.618,0.738,0.618h9.45c0.363,0,0.674-0.26,0.738-0.618     l1.014-5.661c2.277-0.586,4.466-1.489,6.517-2.69l1.488,1.036l7.232,7.232c2.542,2.542,6.673,2.579,9.25,0     C65.633,60.286,65.629,56.141,63.084,53.584z M37.782,55.905c-0.291,0.069-0.513,0.304-0.566,0.598l-0.989,5.523h-8.195     l-0.989-5.523c-0.053-0.294-0.275-0.529-0.566-0.598c-2.448-0.579-4.801-1.548-6.993-2.881c-0.254-0.155-0.575-0.144-0.818,0.025     l-4.594,3.201l-5.792-5.801l3.2-4.585c0.171-0.244,0.181-0.566,0.025-0.82c-1.367-2.238-2.343-4.596-2.899-7.007     c-0.068-0.293-0.304-0.518-0.601-0.57l-5.5-0.971v-8.193l5.493-0.989c0.294-0.053,0.529-0.275,0.597-0.566     c0.573-2.432,1.552-4.787,2.909-7c0.156-0.254,0.146-0.576-0.024-0.821l-3.201-4.594l5.793-5.784l4.595,3.184     c0.245,0.168,0.566,0.178,0.819,0.023c2.197-1.346,4.547-2.311,6.985-2.869c0.293-0.067,0.518-0.303,0.571-0.599l0.99-5.532     h8.194l0.99,5.532c0.053,0.296,0.278,0.532,0.571,0.599c2.443,0.559,4.79,1.524,6.974,2.868c0.253,0.156,0.576,0.148,0.821-0.023     l4.587-3.184l5.81,5.785l-3.2,4.594c-0.17,0.245-0.18,0.567-0.024,0.821c1.357,2.213,2.336,4.568,2.909,7     c0.068,0.291,0.303,0.513,0.597,0.566l5.493,0.989v8.193l-5.511,0.971c-0.297,0.053-0.535,0.279-0.601,0.574     c-0.449,1.988-1.2,3.958-2.235,5.868l-3.946-3.946c1.05-2.392,1.583-4.942,1.583-7.587c0-10.427-8.488-18.91-18.92-18.91     c-10.427,0-18.91,8.483-18.91,18.91c0,10.449,8.483,18.95,18.91,18.95c2.878,0,5.734-0.661,8.295-1.915l3.891,3.885     C42.26,54.488,40.066,55.365,37.782,55.905z M48.296,38.796l-3.685-3.685c0.335-1.193,0.499-2.403,0.499-3.601     c0-3.933-1.765-7.728-4.973-10.328c-3.022-2.451-6.976-3.431-10.844-2.684c-0.589,0.113-0.814,0.841-0.389,1.267l5.852,5.852     l-1.208,7.897l-7.664,0.99l-5.869-5.869c-0.427-0.43-1.155-0.196-1.267,0.389c-0.841,4.366,0.55,8.816,3.656,11.922     c3.407,3.407,8.334,4.692,12.956,3.405l3.933,3.933c-2.247,1.023-4.653,1.541-7.168,1.541c-9.6,0-17.41-7.828-17.41-17.45     c0-9.6,7.81-17.41,17.41-17.41c9.605,0,17.42,7.81,17.42,17.41C49.544,34.607,49.108,36.757,48.296,38.796z M62.034,61.764     c-1.988,1.988-5.169,1.961-7.129,0c-3.849-3.853-15.405-15.398-18.8-18.79c-0.197-0.197-0.49-0.269-0.755-0.185     c-4.213,1.325-8.767,0.213-11.885-2.905c-2.399-2.399-3.652-5.707-3.432-9.111l5.052,5.051c0.164,0.164,0.393,0.245,0.627,0.213     l8.59-1.11c0.332-0.042,0.595-0.3,0.645-0.63c1.458-9.557,1.359-8.84,1.359-8.943c0-0.197-0.078-0.389-0.22-0.53l-5.043-5.043     c2.95-0.201,5.854,0.704,8.15,2.566c2.851,2.31,4.417,5.68,4.417,9.171c0,1.191-0.183,2.396-0.56,3.579     c-0.023,0.075-0.035,0.151-0.035,0.227c0,0.196,0.077,0.388,0.22,0.531c3.419,3.419-3.463-3.463,18.789,18.789     C63.984,56.614,63.989,59.809,62.034,61.764z" /></g></g></g></svg>
                                <p>Questions techniques</p>
                            </div>
                                <ul>
                                    <li><p className="soustitre">Définition du projet</p>
                                        <ul className="bastitre">
                                            <Question responseId={7} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>À quels objectifs répond la création d’un site internet ?</Question>
                                            <Question responseId={8} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Quels types de sites internet sommes-nous en mesure de créer ?</Question>
                                            <Question responseId={9} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Pourquoi mettre en place une refonte de site internet ?</Question>
                                            <Question responseId={10} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Quelles fonctionnalités existent pour mon projet de site web ?</Question>
                                        </ul>
                                    </li>
                                    <li><p className="soustitre">Nom de domaine et hébergement</p>
                                        <ul className="bastitre">
                                            <Question responseId={11} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Comment choisir son nom de domaine et son hébergement ?</Question>
                                            <Question responseId={12} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Je possède déjà un nom de domaine, puis-je l’utiliser pour mon nouveau site ?</Question>
                                        </ul>
                                    </li>
                                    <li><p className="soustitre">Développement du site</p>
                                        <ul className="bastitre">
                                            <Question responseId={13} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Comment sont créés les sites internet ?</Question>
                                            <Question responseId={14} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Quelles sont les technologies utilisées et maîtrisées ?</Question>
                                            <Question responseId={15} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Combien de temps pour créer un site internet ?</Question>
                                            <Question responseId={16} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Dois-je fournir les contenus du site ?</Question>
                                        </ul>
                                    </li>
                                    <li><p className="soustitre">Référencement du site</p>
                                        <ul className="bastitre">
                                            <Question responseId={17} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>En quoi consiste le travail de référencement naturel ?</Question>
                                            <Question responseId={18} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Comment sont définis les mots-clés de ma stratégie de référencement ?</Question>
                                            <Question responseId={19} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Sur quels secteurs est orientée ma stratégie de référencement naturel ?</Question>
                                            <Question responseId={20} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Quels sont les moyens mis en place pour atteindre mes objectifs ?</Question>
                                            <Question responseId={21} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Je ne trouve pas mon site sur les moteurs de recherche. Que dois-faire ?</Question>
                                        </ul>
                                    </li>
                                    <li>
                                        <p className="soustitre">Suivi du site</p>
                                        <ul className="bastitre">
                                            <Question responseId={22} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>En quoi consiste le suivi de référencement effectué ?</Question>
                                            <Question responseId={23} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>À quelle fréquence est effectué le suivi de référencement ?</Question>
                                            <Question responseId={24} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Un problème est survenu sur mon site, que dois-je faire ?</Question>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="titre flex flex-row">
                                    <svg width="20px" viewBox="0 0 100 125" fill="#37cfee"><g><path fill="none" d="M58.212,42.35c-0.028-0.014-0.059-0.024-0.09-0.029l-0.893,0.862l-11.009-5.667   c-0.12-0.011-0.237-0.017-0.351-0.017c-3.08,0-3.743,3.959-3.849,4.796c-0.007,0.056-0.011,0.098-0.014,0.124   c-0.002,0.021-0.004,0.031-0.004,0.031c-0.107-0.087-0.216-0.134-0.323-0.134c-0.02,0-0.04,0.001-0.059,0.005   c-0.055,0.009-0.106,0.032-0.153,0.066c-0.348,0.25-0.488,1.122-0.311,2.109c0.134,0.75,0.417,1.376,0.726,1.685   c0.132,0.133,0.27,0.208,0.403,0.208c0.02,0,0.041-0.002,0.061-0.005c0.073-0.013,0.14-0.049,0.2-0.104   c0.731,2.275,2.127,4.542,3.89,5.911c1.038,0.807,2.204,1.302,3.436,1.302c1.224,0,2.383-0.488,3.417-1.286   c1.771-1.368,3.176-3.643,3.91-5.926c0.06,0.056,0.127,0.092,0.2,0.104c0.02,0.003,0.04,0.005,0.06,0.005   c0.111,0,0.227-0.051,0.34-0.147c0.332-0.283,0.646-0.943,0.788-1.745C58.774,43.451,58.605,42.534,58.212,42.35z" /><path fill="none" d="M55.102,52.823c-0.006-0.003-0.012-0.006-0.018-0.009c-0.898,0.885-1.896,1.586-2.961,2.008   c-0.723,0.287-1.476,0.446-2.251,0.446c-0.774,0-1.528-0.159-2.25-0.446c-1.075-0.427-2.082-1.136-2.986-2.032   c-0.001,0-0.001,0-0.001,0c0,1.104-0.843,1.732-1.416,2.032c-0.067,0.036-0.133,0.067-0.191,0.094   c-0.143,0.065-0.251,0.104-0.299,0.119c0,0,0,0,0,0.001c0.034,0.282,0.159,0.556,0.361,0.814c0.946,1.21,3.606,2.958,6.741,2.958   c3.135,0,5.795-1.748,6.74-2.958c0.203-0.259,0.328-0.532,0.362-0.814c0.001-0.009,0.002-0.017,0.003-0.024   C56.551,54.869,55.124,54.245,55.102,52.823z" /><path fill="none" d="M73.066,46.29c0.123,0.124,0.252,0.185,0.374,0.163c0.06-0.01,0.112-0.039,0.162-0.084   c0.595,1.853,1.736,3.699,3.177,4.802c0.83,0.635,1.759,1.023,2.738,1.023c1.002,0,1.95-0.406,2.794-1.066   c1.414-1.106,2.535-2.93,3.122-4.759c0.049,0.045,0.103,0.074,0.162,0.084c0.105,0.019,0.215-0.024,0.323-0.115   c0.269-0.228,0.522-0.761,0.638-1.408c0.15-0.845,0.015-1.585-0.304-1.733c-0.022-0.011-0.047-0.019-0.071-0.023   c-0.098-0.018-0.201,0.019-0.302,0.098l-0.005,0.006c0-0.001-0.001-0.001-0.001-0.002c-0.001,0.001-0.002,0.002-0.002,0.002   c-0.002-0.005-0.002-0.011-0.003-0.018c-0.381-1.448-0.861-2.334-1.357-2.862c-0.097-0.053-0.196-0.099-0.307-0.13   c-0.013,0.214,0.23,0.538,0.257,0.854c-0.688-0.32-1.346-0.819-2.307-0.854c-0.226-0.008-0.468-0.006-0.718-0.001   c-2.318,0.828-4.867-0.108-4.867-0.108c-2.907-0.27-3.368,2.75-3.403,3.095c-0.002,0.009-0.002,0.018-0.003,0.025l0,0   c-0.104-0.083-0.209-0.122-0.311-0.104c-0.044,0.008-0.086,0.026-0.123,0.054c-0.091,0.065-0.162,0.187-0.214,0.343   c-0.029,0.407-0.048,0.817-0.054,1.242c0.007,0.04,0.01,0.078,0.018,0.118C72.589,45.535,72.816,46.04,73.066,46.29z" /><path fill="none" d="M13.995,46.51c0.122,0.123,0.249,0.183,0.37,0.162c0.059-0.01,0.111-0.038,0.16-0.083   c0.589,1.833,1.718,3.658,3.142,4.748c0.821,0.628,1.74,1.013,2.709,1.013c0.991,0,1.929-0.401,2.763-1.055   c1.399-1.094,2.507-2.897,3.089-4.707c0.047,0.045,0.101,0.074,0.16,0.084c0.104,0.018,0.212-0.025,0.319-0.114   c0.266-0.225,0.517-0.753,0.631-1.393c0.149-0.835,0.015-1.567-0.299-1.715c-0.022-0.01-0.046-0.019-0.071-0.023   c-0.097-0.017-0.199,0.019-0.298,0.098l-0.006,0.006c0-0.001,0-0.001,0-0.002c-0.001,0.001-0.002,0.002-0.003,0.002   c0-0.005,0-0.012-0.001-0.018c-0.377-1.432-0.852-2.31-1.343-2.832c-0.096-0.051-0.194-0.097-0.302-0.128   c-0.013,0.211,0.228,0.533,0.253,0.845c-0.681-0.317-1.332-0.81-2.282-0.845c-0.223-0.008-0.463-0.006-0.709-0.001   c-2.294,0.819-4.814-0.107-4.814-0.107c-2.875-0.267-3.331,2.72-3.366,3.062c0,0.008-0.001,0.017-0.002,0.025h0   c-0.103-0.083-0.207-0.121-0.306-0.103c-0.044,0.007-0.085,0.025-0.123,0.052c-0.09,0.065-0.16,0.185-0.212,0.34   c-0.028,0.402-0.046,0.809-0.053,1.228c0.006,0.039,0.01,0.077,0.017,0.117C13.523,45.764,13.748,46.263,13.995,46.51z" /><path d="M33.183,55.79c-1.426-1.531-2.841-1.649-3.273-1.75c-1.362-0.319-3.013-0.183-3.893-0.458   c-0.154,1.289-2.635,2.314-5.673,2.314c-3.038,0-5.519-1.025-5.673-2.314c-0.88,0.276-2.529,0.139-3.893,0.458   c-0.691,0.161-3.907,0.368-5.646,6.354c-0.236,0.813-0.153,1.697,0.231,2.421c1.425,2.696,8.921,3.526,14.981,3.524   c2.771,0.001,5.843-0.174,8.498-0.62c-0.148-0.881-0.104-1.801,0.15-2.677C29.939,59.782,31.344,57.36,33.183,55.79z" /><path d="M13.331,47.21c0.641,1.725,1.656,3.4,2.911,4.626c0.71,0.694,1.498,1.243,2.337,1.577c0.577,0.228,1.179,0.355,1.797,0.355   c0.619,0,1.221-0.128,1.798-0.355c0.869-0.345,1.683-0.921,2.412-1.65c1.224-1.222,2.214-2.872,2.842-4.567   c0.483-0.142,0.99-1.048,1.196-2.205c0.225-1.254,0.013-2.35-0.471-2.532c0.017-0.307,0.029-0.616,0.028-0.935   c-0.012-4.55-2.679-7.554-6.886-7.836c-3.667-0.247-6.43,1.211-7.688,3.632c-0.424,0.815-0.666,2.194-0.758,3.302   c-0.141,0.576-0.224,1.175-0.224,1.795h0.014c0,0.004-0.001,0.009-0.001,0.015c-0.009,0-0.018,0-0.027,0.002   c-0.537,0.094-0.781,1.238-0.546,2.556C12.28,46.202,12.826,47.14,13.331,47.21z M13.452,43.82c0.052-0.155,0.122-0.275,0.212-0.34   c0.038-0.026,0.079-0.044,0.123-0.052c0.099-0.018,0.204,0.02,0.306,0.103h0c0-0.008,0.001-0.017,0.002-0.025   c0.035-0.342,0.491-3.329,3.366-3.062c0,0,2.521,0.926,4.814,0.107c0.247-0.005,0.487-0.007,0.709,0.001   c0.95,0.036,1.601,0.528,2.282,0.845c-0.026-0.313-0.267-0.634-0.253-0.845c0.108,0.031,0.207,0.078,0.302,0.128   c0.491,0.522,0.966,1.4,1.343,2.832c0.001,0.005,0.001,0.012,0.001,0.018c0.001,0,0.002-0.001,0.003-0.002c0,0.001,0,0.001,0,0.002   l0.006-0.006c0.099-0.079,0.201-0.114,0.298-0.098c0.025,0.004,0.049,0.013,0.071,0.023c0.313,0.147,0.448,0.88,0.299,1.715   c-0.114,0.64-0.365,1.168-0.631,1.393c-0.106,0.089-0.215,0.132-0.319,0.114c-0.059-0.01-0.112-0.039-0.16-0.084   c-0.582,1.81-1.69,3.613-3.089,4.707c-0.834,0.653-1.772,1.055-2.763,1.055c-0.969,0-1.888-0.385-2.709-1.013   c-1.424-1.09-2.553-2.916-3.142-4.748c-0.048,0.045-0.101,0.073-0.16,0.083c-0.121,0.021-0.248-0.039-0.37-0.162   c-0.247-0.247-0.472-0.747-0.58-1.346c-0.007-0.04-0.01-0.078-0.017-0.117C13.406,44.628,13.423,44.222,13.452,43.82z" /><path d="M94.866,60.328c-1.76-6.054-5.011-6.262-5.711-6.425c-1.377-0.322-3.045-0.185-3.936-0.462   c-0.104,0.872-2.644,3.744-4.308,5.545l-0.722-2.78c0.543-0.32,0.66-1.026,0.66-1.612h-2.733c0,0.582,0.117,1.28,0.647,1.604   l-0.708,2.788c-1.665-1.801-4.203-4.672-4.309-5.545c-0.889,0.278-2.559,0.141-3.936,0.463c-0.443,0.104-1.912,0.228-3.377,1.845   c1.861,1.57,3.28,4.008,4.236,7.297c0.252,0.869,0.296,1.781,0.152,2.656c2.699,0.46,5.834,0.639,8.66,0.639   c6.128,0.001,13.707-0.838,15.148-3.563C95.021,62.044,95.105,61.15,94.866,60.328z" /><path d="M72.394,46.997c0.648,1.744,1.674,3.437,2.943,4.677c0.718,0.702,1.514,1.258,2.362,1.595   c0.583,0.231,1.193,0.359,1.817,0.359c0.626,0,1.235-0.128,1.818-0.359c0.878-0.348,1.701-0.931,2.438-1.668   c1.238-1.236,2.238-2.904,2.873-4.618c0.489-0.144,1.002-1.06,1.21-2.229c0.228-1.269,0.013-2.376-0.477-2.561   c0.018-0.31,0.029-0.623,0.028-0.945c-0.012-4.6-2.709-7.275-6.962-7.56c-3.708-0.249-6.502,1.224-7.774,3.673   c-0.428,0.824-0.673,1.854-0.766,2.975c-0.144,0.583-0.227,1.189-0.227,1.815h0.013c0,0.005,0,0.01-0.001,0.014   c-0.009,0.001-0.018,0.001-0.027,0.003c-0.542,0.094-0.789,1.251-0.551,2.584C71.331,45.979,71.884,46.925,72.394,46.997z    M72.517,43.569c0.052-0.156,0.123-0.278,0.214-0.343c0.037-0.028,0.079-0.046,0.123-0.054c0.102-0.018,0.207,0.021,0.311,0.104   l0,0c0.001-0.008,0.001-0.017,0.003-0.025c0.035-0.345,0.496-3.365,3.403-3.095c0,0,2.549,0.937,4.867,0.108   c0.25-0.005,0.492-0.007,0.718,0.001c0.961,0.035,1.618,0.534,2.307,0.854c-0.026-0.316-0.27-0.64-0.257-0.854   c0.11,0.031,0.21,0.078,0.307,0.13c0.496,0.528,0.977,1.415,1.357,2.862c0.001,0.007,0.001,0.013,0.002,0.019   c0,0,0.002-0.001,0.003-0.002c0,0,0.001,0.001,0.001,0.002l0.005-0.006c0.101-0.079,0.204-0.116,0.302-0.098   c0.024,0.004,0.049,0.012,0.071,0.023c0.318,0.148,0.454,0.889,0.304,1.733c-0.115,0.647-0.369,1.181-0.638,1.408   c-0.108,0.091-0.218,0.134-0.323,0.115c-0.06-0.01-0.113-0.039-0.162-0.084c-0.587,1.829-1.708,3.652-3.122,4.759   c-0.844,0.66-1.792,1.066-2.794,1.066c-0.979,0-1.908-0.389-2.738-1.023c-1.44-1.103-2.582-2.949-3.177-4.802   c-0.05,0.045-0.103,0.074-0.162,0.084c-0.122,0.022-0.251-0.039-0.374-0.163c-0.25-0.25-0.478-0.755-0.586-1.361   c-0.008-0.041-0.011-0.079-0.018-0.118C72.469,44.386,72.487,43.976,72.517,43.569z" /><path d="M61.808,55.608c-0.101-0.023-0.202-0.045-0.305-0.064c-2.63-2.43-0.835-12.572-0.835-12.572   c0-12.917-7.301-13.979-9.702-13.979c-0.472,0-0.755,0.041-0.755,0.041c-0.128-0.007-0.254-0.012-0.379-0.017   c-0.125,0.004-0.251,0.01-0.379,0.017c0,0-0.282-0.041-0.755-0.041c-2.4,0-9.702,1.061-9.702,13.979c0,0,1.794,10.143-0.835,12.572   c-0.103,0.02-0.205,0.041-0.304,0.064c-0.868,0.202-4.893,0.461-7.072,7.956c-0.295,1.018-0.19,2.124,0.29,3.031   c1.783,3.371,11.154,4.412,18.737,4.412c0.007,0,0.013,0,0.02,0c0.006,0,0.013,0,0.02,0c7.584,0,16.955-1.04,18.738-4.412   c0.479-0.907,0.583-2.014,0.288-3.031C66.699,56.069,62.675,55.811,61.808,55.608z M56.935,55.036   c-0.034,0.282-0.159,0.556-0.362,0.814c-0.945,1.21-3.605,2.958-6.74,2.958c-3.135,0-5.795-1.748-6.741-2.958   c-0.202-0.259-0.327-0.532-0.361-0.814c0-0.001,0-0.001,0-0.001c0.048-0.016,0.156-0.054,0.299-0.119   c0.058-0.026,0.124-0.058,0.191-0.094c0.573-0.3,1.416-0.929,1.416-2.032c0,0,0,0,0.001,0c0.904,0.896,1.911,1.605,2.986,2.032   c0.722,0.287,1.476,0.446,2.25,0.446c0.775,0,1.528-0.159,2.251-0.446c1.064-0.422,2.063-1.123,2.961-2.008   c0.006,0.003,0.012,0.006,0.018,0.009c0.022,1.422,1.449,2.046,1.836,2.188C56.937,55.02,56.936,55.027,56.935,55.036z    M58.586,44.496c-0.142,0.802-0.456,1.462-0.788,1.745c-0.113,0.096-0.229,0.147-0.34,0.147c-0.02,0-0.04-0.001-0.06-0.005   c-0.073-0.012-0.141-0.049-0.2-0.104c-0.734,2.283-2.139,4.558-3.91,5.926c-1.033,0.798-2.192,1.286-3.417,1.286   c-1.231,0-2.397-0.495-3.436-1.302c-1.762-1.369-3.159-3.636-3.89-5.911c-0.06,0.055-0.127,0.092-0.2,0.104   c-0.02,0.003-0.041,0.005-0.061,0.005c-0.133,0-0.271-0.075-0.403-0.208c-0.309-0.309-0.592-0.935-0.726-1.685   c-0.177-0.987-0.037-1.859,0.311-2.109c0.047-0.034,0.099-0.057,0.153-0.066c0.02-0.003,0.04-0.005,0.059-0.005   c0.107,0,0.216,0.047,0.323,0.134c0,0,0.001-0.01,0.004-0.031c0.003-0.026,0.007-0.068,0.014-0.124   c0.106-0.837,0.769-4.796,3.849-4.796c0.113,0,0.231,0.005,0.351,0.017l11.009,5.667l0.893-0.862   c0.031,0.005,0.062,0.016,0.09,0.029C58.605,42.534,58.774,43.451,58.586,44.496z" /></g></svg>
                                    <p>Travailler avec Linkweb</p>
                                </div>
                                <ul className="bastitre">
                                    <Question responseId={25} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Pourquoi travailler avec Linkweb ?</Question>
                                    <Question responseId={26} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Comment se déroule mon projet de création de site web ?</Question>
                                    <Question responseId={27} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Suis-je propriétaire de mon site web ?</Question>
                                    <Question responseId={28} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Combien coûte un site web ?</Question>
                                    <Question responseId={29} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Existe-t-il des facilités de paiement ?</Question>
                                    <Question responseId={30} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Que pensent nos clients de nos services ?</Question>
                                    <Question responseId={31} scrollToElement={this.scrollToElement} setActive={this.setActive} active={this.state.active}>Où découvrir des sites internet créés par Linkweb ?</Question>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div id="answer-section" className="bloctext w-full lg:w-3/4 century text-justify order-first lg:order-last">
                    <FaqBtn setNext={this.setNext} setPrec={this.setPrec} responseId={this.state.active} />
                        <Answer id={1} activeId={this.state.active} >
                            <h2>Pourquoi créer un site internet ?</h2>
                            <h3>Avoir un site internet est indispensable pour tous les professionnels ayant pour ambition de développer leur société. Le Web est un parfait moyen de sortir de ses frontières pour apporter une  véritable plus-value à son entreprise.</h3>
                            <p>Le <strong>site internet</strong> est un <strong>outil de communication</strong> qui coche toutes les cases pour une entreprise souhaitant se développer. Que ce soit en termes de <strong>visibilité</strong>, de <strong>notoriété</strong>, de <strong>réputation</strong> ou même en vue d'acquérir de <strong>nouveaux clients</strong>, le <strong>site internet</strong> possède un poids considérable dans le développement d'une <strong>stratégie digitale</strong>.</p>
                            <p>À ce titre, la création d’un site internet procure plusieurs avantages et répond à plusieurs objectifs :</p>
                            <ul>
                                <li><span className="text-bleu">></span> Disposer d’un outil pour <strong>maîtriser sa communication</strong></li>
                                <li><span className="text-bleu">></span> <strong>Accroître sa visibilité</strong> et sa notoriété</li>
                                <li><span className="text-bleu">></span> Obtenir de nouveaux clients</li>
                                <li><span className="text-bleu">></span> <strong>Fidéliser</strong> ses clients</li>
                                <li><span className="text-bleu">></span> Optimiser le fonctionnement de son entreprise</li>
                            </ul>
                            {/* <h4>Lire la suite de « Pourquoi créer un site internet ? ».</h4> */}
                        </Answer>

                        <Answer id={2} activeId={this.state.active}>
                            <h2>À qui s’adresse la création de site internet ?</h2>
                            <h3>De l’artisan indépendant à la PME, en passant par les multinationales, tous les professionnels peuvent postuler à la création d’un site internet pour leur entreprise.</h3>
                            <p>La <strong>création d’un site internet</strong> répond aux besoins de très nombreux acteurs de notre société. En effet, il existe des <strong>sites web de toutes les tailles</strong> et pour tous les secteurs d’activités. <strong>Faire connaître</strong> localement son entreprise, mettre en place un <strong>outil de réservation</strong> de tables pour son restaurant, définir un <strong>outil interne d’entreprise</strong> : le <strong>site web</strong> peut répondre à de vastes besoins.</p>
                            <p>Il existe des solutions pour tous les professionnels, quelle que soit la taille de <strong>votre entreprise</strong>, vos <strong>objectifs</strong> ainsi que votre budget.</p>
                        </Answer>
                        <Answer id={3} activeId={this.state.active}>
                            <h2>Qui contacter pour créer un site internet ?</h2>
                            <h3>Il existe des entreprises spécialisées dans la création de sites internet, mais il également possible de se tourner vers des free-lances indépendants.</h3>
                            <p>Les solutions pour <strong>créer un site internet</strong> ne manquent pas. Des plateformes de <strong>création de site internet gratuit</strong> aux <strong>agences spécialisée</strong>s, il existe une infinité de possibilités. Toutefois, que valent-elles ? En faisant le choix de la <strong>création d’un site internet sur un outil gratuit en ligne</strong>, vous développez un <strong>support de communication</strong> qui pourra être limité pour atteindre certains objectifs.</p>
                            <p>Il reste conseillé de contacter un Freelance ou une <strong>agence web spécialisée dans la création de site internet</strong>. En faisant ce choix, vous faites appel à des <strong>professionnels qualifiés</strong> qui sauront répondre précisément à vos besoins. De plus, la collaboration est un aspect indispensable à la mise en place d’un <strong>projet web</strong> réussi. Pour cela, faire appel à un interlocuteur qualifié est très fortement recommandé.</p>
                        </Answer>
                        <Answer id={4} activeId={this.state.active}>
                            <h2>Qu’est-ce que le référencement naturel ?</h2>
                            <h3>Le référencement naturel est une notion de plus en plus courante, mais souvent mal interprétée. Toutefois, il s’agit d’un concept clé qui vaut son pesant d’or en termes de webmarketing.</h3>
                            <p>Le <strong>référencement naturel</strong> désigne la faculté d’un <strong>site web</strong> à être proposé dans les <strong>résultats de recherche des moteurs de recherche</strong>. Pourquoi est-ce si important ? <strong>97% des expériences sur le web commencent par un moteur de recherche</strong>. Être présent et <strong>optimiser sa présence</strong> dans les résultats proposés aux internautes est donc une manière essentielle pour <strong>accroître sa visibilité sur le web</strong>.</p>
                            <p>Le <strong>trafic organique</strong> représente une porte d’entrée redoutable pour un <strong>site internet</strong>. En effet, le <strong>trafic généré grâce au référencement naturel</strong> fait partie des <strong>canaux d’acquisition principaux</strong> sur un <strong>site internet</strong>. Pour postuler à un <strong>bon positionnement dans les premières pages de résultats</strong>, un travail doit être effectué au niveau du <strong>choix des mots-clés</strong> de la stratégie, au niveau de l’<strong>optimisation technique du site web</strong>, mais également de ses <strong>contenus</strong>.</p>
                            <h4>Lire la suite de <Link to="/referencement-toulouse/quest-ce-que-le-referencement-naturel/" className="text-bleu hover:text-black">« Qu’est-ce que le référencement naturel ? »</Link>.</h4>
                        </Answer>
                        <Answer id={5} activeId={this.state.active}>
                            <h2>À quoi sert le référencement naturel ?</h2>
                            <h3>Le référencement naturel est une discipline issue du webmarketing qui permet aux professionnels de développer leur visibilité sur le Web grâce à leur site internet.</h3>
                            <p>En somme, le <strong>référencement naturel</strong> va permettre d’<strong>accroître la visibilité de son entreprise sur le Web</strong> grâce à la mise en place de procédés stratégiques :</p>
                            <ul>
                                <li><span className="text-bleu">></span> L’<strong>optimisation de son site web</strong> pour le respect de critères imposés par les <strong>algorithmes des moteurs de recherche</strong>,</li>
                                <li><span className="text-bleu">></span> L’<strong>optimisation de son site web</strong> en fonction des habitudes et du <strong>comportement des utilisateurs</strong>.</li>
                                <br />
                                <p>Selon les objectifs définis, le <strong>référencement naturel</strong> est utile pour <strong>développer sa visibilité</strong> auprès d’une cible définie et dans un secteur géographique donné. Il permet également d’<strong>élargir ses zones de prospection</strong> simplement et rapidement grâce au <strong>référencement local</strong>.</p>
                                {/* <h4>Lire la suite de « À quoi sert le référencement naturel ? ».</h4> */}
                            </ul>
                        </Answer>
                        <Answer id={6} activeId={this.state.active}>
                            <h2>Quelle est la différence entre le SEO et le SEA ?</h2>
                            <h3>Alors que le référencement naturel est désigné par le sigle SEO (Search Engine Optimization), le SEA (Search Engine Advertising) désigne le référencement sponsorisé par la publication d’annonces payantes.</h3>
                            <p>Le <strong>SEO</strong> et le <strong>SEA</strong> constituent deux branches du <strong>référencement web</strong>. En effet, si l’investissement dans le <strong>référencement naturel</strong> correspond à du temps de travail et à une connaissance spécifique du sujet, le <strong>SEA</strong> est régulièrement appelé « <strong>référencement payant</strong> ». En effet, le SEA permet d’<strong>être visible sur les moteurs de recherche</strong> par l’<strong>achat d’annonce sponsorisée</strong>. L’objectif du <strong>référencement payant</strong> est donc d’<strong>obtenir un retour sur investissement</strong> à travers la mise en place de <strong>campagnes ciblées</strong>.</p>
                            <p>La réussite du projet, en termes de <strong>référencement naturel</strong>, s’évalue à partir du <strong>positionnement de vos pages dans les résultats de recherche</strong>, du <strong>trafic généré sur le site</strong> ou encore des <strong>demandes de contact obtenues</strong> en fonction de vos objectifs.</p>
                            <h4>Lire la suite de <Link to="/referencement-toulouse/difference-seo-sea/" className="text-bleu hover:text-black">« Quelle est la différence entre le SEO et le SEA ? »</Link>.</h4>
                        </Answer>


                        {/** QUESTIONS TECHNIQUES **/}

                        {/** DÉFINITION DU PROJET **/}

                        <Answer id={7} activeId={this.state.active}>
                            <h2>À quels objectifs répond la création d’un site internet ?</h2>
                            <h3>Le site internet est un outil de communication incontournable dans le cadre du développement stratégique d’une entreprise. Non seulement, il constitue une base pour communiquer, mais peut également contribuer au développement de votre chiffre d'affaires.</h3>
                            <p>Le <strong>site internet</strong> est devenu un outil indispensable pour les entreprises. Envisager la <strong>création d’un site web professionnel</strong> et adapté à ses besoins peut être porteur de succès. En effet, de la visibilité obtenue à la notoriété développée, en passant par la possibilité de <strong>fidéliser ses clients</strong> en définissant un parcours pertinent, la <strong>création d’un site internet</strong> répond à des objectifs de tous types.</p>
                            <p>Il faut également savoir que le <strong>site internet</strong> peut être utilisé comme <strong>plateforme web interne à une entreprise</strong> et destinée à optimiser son fonctionnement. De part la praticité qu’il apporte, l’<strong>intranet</strong> ou le <strong>CRM d’entreprise</strong> joue un rôle particulier dans le fonctionnement des organisations. Ouvrant à de nouvelles perspectives, il permet de faciliter bon nombre de tâches comme la <strong>réservation de salles de réunion</strong>, la <strong>gestion de ses stocks</strong>, la consultation de documents partagés <strong>en ligne</strong>.</p>
                            <p>La <strong>création d’un site internet</strong> répond à des <strong>objectifs de communication</strong> aussi bien externe qu’interne.</p>
                        </Answer>
                        <Answer id={8} activeId={this.state.active}>
                            <h2>Quels sont les types de sites internet qu’il est possible de créer ?</h2>
                            <h3>Il n’existe pas un seul type de site internet, mais bien plusieurs. Tous présentent des spécificités pour répondre aux attentes de chaque professionnel.</h3>
                            <p><strong>Présenter son entreprise</strong>, <strong>vendre ses produits</strong>, promouvoir son <strong>savoir-faire</strong>, optimiser la gestion de son entreprise ou <strong>développer des fonctionnalités</strong> sur-mesure : il existe des <strong>solutions web</strong> pour tous les professionnels. Pour cela, différents <strong>types de sites internet</strong> existent pour répondre aux besoins les plus particuliers. Parmi eux, nous retrouvons :</p>
                            <ul>
                                <li><span className="text-bleu">></span> Le <strong>site internet vitrine</strong>,</li>
                                <li><span className="text-bleu">></span> Le <strong>site internet e-commerce</strong>,</li>
                                <li><span className="text-bleu">></span> Le <strong>site internet administrable</strong>,</li>
                                <li><span className="text-bleu">></span> Le <strong>site internet catalogue</strong>,</li>
                                <li><span className="text-bleu">></span> Mais aussi le <strong>site internet sur-mesure</strong>.</li>
                            </ul>
                            <h4>Lire la suite de <Link to="/creation-site-internet-toulouse/types-sites-internet/" className="text-bleu hover:text-black">« Quels sont les types de sites internet qu’il est possible de créer ? »</Link>.</h4>
                        </Answer>
                        <Answer id={9} activeId={this.state.active}>
                            <h2>Pourquoi et quand mettre en place une refonte de site internet ?</h2>
                            <h3>La mise en place d’une refonte de site internet peut intervenir lors d’un changement de stratégie, lorsqu’une société connaît de larges transformations ou bien lorsque sont site web est tout simplement désuet.</h3>
                            <p>La réalisation d’une <strong>refonte de site internet</strong> est un moment particulièrement important dans la vie d’un <strong>site web</strong>. En effet, celle-ci intervient à un moment-clé pour une entreprise : redéfinition stratégique, nouvel élan donné à sa communication, changements majeurs au sein de l’organigramme, etc. Tout le défi va être de développer une nouvelle <strong>plateforme en ligne</strong> en suivant de <strong>nouveaux objectifs</strong>, tout en tenant compte du contenu déjà existant et <strong>présent sur le web</strong> depuis, parfois, des années.</p>
                            <p>La <strong>refonte d’un site internet</strong> est donc un travail délicat qui demande de bien faire mûrir son projet avant de se lancer sur une nouvelle ligne directrice. Dans tous les cas, la <strong>refonte de site web</strong> est une opportunité à saisir pour les entreprises souhaitant <strong>dynamiser leur communication sur le web</strong>.</p>
                            {/* <h4>Lire la suite de « Pourquoi et quand mettre en place une refonte de site internet ? ».</h4> */}
                        </Answer>
                        <Answer id={10} activeId={this.state.active}>
                            <h2>Est-il possible de mettre en place des fonctionnalités particulières pour mon projet de site web ?</h2>
                            <h3>La création d’un site internet présente l’intérêt d’y ajouter des fonctionnalités destinées à vos utilisateurs ou tout simplement pour vous faciliter la tâche.</h3>
                            <p>La <strong>mise en place de fonctionnalités spécifiques</strong> est totalement possible sur un <strong>site web</strong>. Il faudra vous diriger vers un <strong>projet de création de site web sur-mesure</strong> afin de définir très précisément vos besoins. Ceci est important pour que nous soyons en mesure de répondre à vos attentes de la manière la plus précise possible.</p>
                            <p>Qu’il s’agisse de <strong>mettre en place un système de réservations de tables pour son restaurant</strong>, un <strong>espace d’administration</strong> ou encore des <strong>comptes clients</strong>, il existe des solutions pratiques pour <strong>votre entreprise</strong>. Celles-ci peuvent vous permettre d’<strong>optimiser vos processus de travail</strong> et de <strong>gagner en productivité</strong>. C’est pourquoi, l’<strong>ajout de fonctionnalités sur votre site internet</strong> peut vous procurer de très nombreux avantages.</p>
                        </Answer>
                        {/** NOM DE DOMAINE ET HÉBERGEMENT **/}

                        <Answer id={11} activeId={this.state.active}>
                            <h2>Comment choisir son nom de domaine et son hébergement ?</h2>
                            <h3>Le choix de son hébergement ainsi que de son nom de domaine constitue la première étape du développement de son projet web. Le nom de domaine constitue l’adresse digitale de votre site internet.</h3>
                            <p>Le <strong>choix de l’hébergement web</strong> de votre futur <strong>site internet</strong> va être lié à de nombreux critères. La <strong>qualité des serveurs</strong>, l’<strong>espace de stockage</strong> qui vous est dédié où encore les fonctionnalités proposées sont autant d’éléments sur lesquels votre choix devra s’appuyer. En somme, il est indispensable de déterminer une solution en totale cohérence avec <strong>vos ambitions sur le Web</strong>. Un <strong>expert en création de site internet</strong> vous conseillera sur cette question.</p>
                            <p>En ce qui concerne le <strong>choix du nom de domaine</strong>, celui-ci doit être réalisé selon plusieurs principes. Il peut contenir le nom de votre entreprise, mais ce n’est pas une obligation. Toutefois, il est important de veiller à ce que le nom de domaine choisi soit bien <strong>disponible et non protégé par un dépôt de marque</strong>. Enfin, pour un nom de domaine de qualité, il est important de choisir un nom facilement identifiable, mémorable, accessible et avec une extension adaptée.</p>
                            {/* <h4>Lire la suite de « Comment choisir son nom de domaine et son hébergement ? ».</h4> */}
                        </Answer>
                        <Answer id={12} activeId={this.state.active}>
                            <h2>Je possède déjà un nom de domaine, puis-je l’utiliser pour mon nouveau site ?</h2>
                            <p>Si vous avez souscris à un <strong>nom de domaine</strong> et que sa propriété est toujours en cours de validité, il est totalement possible de l’utiliser pour <strong>votre nouveau site internet</strong>. Conserver votre <strong>nom de domaine</strong> vous permettra de créer un repère pour les utilisateurs ayant l’habitude de <strong>visiter votre site web</strong>.</p>
                        </Answer>
                        {/** DÉVELOPPEMENT DU SITE **/}

                        <Answer id={13} activeId={this.state.active}>
                            <h2>Comment sont créés les sites internet ?</h2>
                            <h3>Nos sites web sont le résultat de projets web stratégiquement menés en fonction de vos objectifs, vos besoins, votre concurrence et le contexte dans lequel est ancré votre projet.</h3>
                            <p>C’est pourquoi, c’est une fois après vous avoir rencontré que nous démarrons la <strong>définition de votre stratégie digitale</strong>. En fonction de vos besoins, nous déterminons la solution la mieux adaptée à vos besoins, en termes de <strong>plateforme web</strong>, mais également pour <strong>développer votre visibilité</strong>. Nous choisissons les <strong>mots-clés</strong> sur lesquels nous développerons <strong>votre présence grâce au référencement naturel</strong> ainsi que l’<strong>arborescence de votre site internet</strong>.</p>
                            <p>Parallèlement, nos équipes de <strong>développeurs web</strong> se chargent de <strong>définir le web design de votre site internet</strong> à travers la <strong>création d’une maquette</strong>, ainsi que de développer les fonctionnalités sélectionnées. Une fois le site prêt à être <strong>mis en ligne</strong>, nos <strong>référenceurs</strong> se chargent, en post-production, de l’<strong>optimisation technique de votre site pour les moteurs de recherche</strong>.</p>
                            {/* <h4>Lire la suite de « Comment sont créés les sites internet ? ».</h4> */}
                        </Answer>
                        <Answer id={14} activeId={this.state.active}>
                            <h2>Quelles sont les technologies utilisées et maîtrisées ?</h2>
                            <h3>Nos équipes techniques sont spécialisées dans la création de site internet et maîtrisent de nombreuses technologies web pour définir les solutions les plus adaptées en fonction de vos besoins.</h3>
                            <p>Qu’ils s’agissent des <strong>langages web</strong>, des <strong>gestionnaires de bases de données</strong>, de <strong>systèmes de gestion de contenus (CMS)</strong> ou de <strong>frameworks</strong>, <strong>nos développeurs</strong> sont polyvalents et maîtrisent des technologies diverses et variées. Du <strong>HTML/CSS</strong> au <strong>JavaScript</strong>, de <strong>Wordpress</strong> à <strong>Prestashop</strong> ou encore de <strong>Symfony</strong> à <strong>Gatsby JS</strong>, nos équipes définiront la solution la plus adaptée pour votre <strong>création de site internet</strong>.</p>
                            {/* <h4>Lire la suite de « Quelles sont les technologies utilisées et maîtrisées ? ».</h4> */}
                        </Answer>
                        <Answer id={15} activeId={this.state.active}>
                            <h2>Combien de temps pour créer un site internet ?</h2>
                            <h3>Le délai de production d’un site internet n’est pas fixe. Il varie en fonction de multiples critères liés à votre projet notamment.</h3>
                            <p>Il n’existe pas de réponse précise à cette question. De nombreux paramètres entrent en jeu lorsqu’il s’agit de <strong>mettre en place un projet web</strong>. De fait, la <strong>définition des besoins</strong>, le <strong>développement technique</strong>, la <strong>création des contenus</strong> et les différents allers/retours sont autant d’éléments qui vont nécessairement jouer sur la durée du <strong>processus de création du site</strong>.</p>
                            <p>Selon les <strong>spécificités techniques de votre projet</strong>, le <strong>délai de mise en ligne</strong> peut être d’une durée plus ou moins importante. C’est pourquoi, une <strong>création de site internet</strong> peut se compter en nombre de semaines comme en nombre de mois pour mettre en place une solution parfaitement au point et prête pour un lancement. Nous serons toutefois en mesure de vous communiquer une estimation du <strong>délai de création</strong> et de lancement une fois le <strong>cadrage du projet</strong> effectué.</p>
                        </Answer>
                        <Answer id={16} activeId={this.state.active}>
                            <h2>Dois-je fournir les contenus du site internet ?</h2>
                            <h3>Lorsque l’on crée un site internet, le contenu présent est aussi, voire plus, important que le site internet en lui-même.</h3>
                            <p>Non. Nos <strong>équipes de référenceurs</strong> se chargent de la <strong>rédaction des contenus de votre site internet</strong>. Ces derniers sont rédigés en fonction des informations que vous nous communiquerez, en fonction du type de réponse qu’ils apportent aux utilisateurs, mais également en fonction des <strong>moteurs de recherche</strong>. Ainsi, les contenus que nous mettons en ligne sont uniques et <strong>rédigés spécifiquement pour votre site web</strong>. Ils vous seront soumis à validation avant leur publication.</p>
                            <p>En revanche, il est conseillé de nous fournir le maximum d’informations, de photographies et d’éléments constituant votre <strong>identité visuelle</strong> dans la mesure du possible. Ceci est particulièrement utile pour <strong>développer un site internet à votre image</strong> et fidèle à vos valeurs.</p>
                        </Answer>
                        {/** TRAVAIL DE RÉFÉRENCEMENT **/}

                        <Answer id={17} activeId={this.state.active}>
                            <h2>En quoi consiste le travail de référencement naturel ?</h2>
                            <h3>Le travail de référencement mené sur les sites internet de nos clients est un travail de longue haleine et qui fait appel à beaucoup de rigueur et de compétences.</h3>
                            <p>Travailler le <strong>référencement d’un site web</strong> est essentiel pour <strong>développer sa visibilité dans les résultats des moteurs de recherche</strong>. Ce travail consiste à développer un <strong>contenu à destination des algorithmes des moteurs de recherche comme Google</strong>, mais également à destination des utilisateurs. Plus que les contenus, l’ensemble des <strong>pages web sont optimisées</strong> pour être sélectionnées dans l’<strong>index de Google</strong> et être proposées pour des <strong>requêtes stratégiques</strong>. Ceci a pour but de <strong>générer du trafic sur votre site internet</strong>.</p>
                            <p>Le travail de mise à jour est régulier et conséquent en termes de <strong>référencement naturel</strong>. Il est important d’envoyer des signaux positifs à destination des <strong>robots d’indexation des moteurs de recherche</strong>. De la <strong>création de nouveaux contenus</strong> à l’<strong>optimisation des pages existantes</strong> et en passant par la <strong>création de liens externes</strong> pour affirmer la <strong>popularité du site</strong>, le travail de <strong>référencement naturel</strong> est un travail continu, régulier et qui fait appel à beaucoup de rigueur.</p>
                        </Answer>
                        <Answer id={18} activeId={this.state.active}>
                            <h2>Comment sont définis les mots-clés de ma stratégie de référencement ?</h2>
                            <h3>Le choix des mots-clés est une étape fondamentale dans la définition d’une stratégie de référencement. C’est sur leur capacité à vous apporter de la visibilité que la pérennité de la stratégie va dépendre.</h3>
                            <p>Le <strong>choix des mots-clés</strong> est une étape cruciale dans la <strong>définition d’une stratégie de référencement naturel</strong>. Il faut savoir qu’il en existe plusieurs types. Nous pouvons par exemple citer les <strong>mots-clés génériques</strong> ou encore les <strong>mots-clés de longue traine</strong>. Le fait de recourir à un mot-clé plutôt qu’un autre durant une stratégie se base sur plusieurs éléments :</p>
                            <ul>
                                <li><span className="text-bleu">></span> Les <strong>habitudes de recherche des utilisateurs</strong> : plus un mot-clé sera recherché, plus son <strong>volume de recherche</strong> sera élevé et donc porteur pour le <strong>site web à positionner</strong>.</li>
                                <li><span className="text-bleu">></span> L’<strong>intention de recherche des utilisateurs</strong> : le <strong>type de mot-clé</strong> peut dépendre de l’<strong>intention de recherche de l’utilisateur</strong>. Autrement dit, lorsqu’un utilisateur effectue une recherche, il attend une certaine réponse, ceci est important pour <strong>définir le contenu de la page</strong> à positionner.</li>
                                <li><span className="text-bleu">></span> La concurrence : il s’agit du <strong>nombre de pages web déjà positionnées</strong>. Plus la concurrence est élevée, plus difficile il sera de <strong>positionner sa page web dans les résultats les plus visibles</strong> et cela prendra d'autant plus de temps.</li>
                                <li><span className="text-bleu">></span> Le <strong>taux de conversion</strong> : en fonction du type de requête et de l’intention de recherche de l’utilisateur, certains mots-clés vont être porteurs de <strong>clics vers votre site web</strong>, alors que d’autres possèderont un <strong>taux de conversion faible</strong>. Par exemple, un utilisateur effectuant une requête très précise sait déjà ce qu’il cherche et sera plus à même de convertir par la suite.</li>
                                <li><span className="text-bleu">></span> Le lien avec votre activité : nous tâchons de choisir des mots-clés qui correspondent exactement à ce que vous proposez.</li>
                            </ul>
                            <p>Nous disposons d’outils professionnels nous permettant d’obtenir des données précises à ce sujet. C’est seulement à la suite de l’étude de ces différents éléments que nous choisissons les <strong>mots-clés</strong> qui seront liés à votre stratégie.</p>
                        </Answer>
                        <Answer id={19} activeId={this.state.active}>
                            <h2>Sur quels secteurs est orientée ma stratégie de référencement naturel ?</h2>
                            <h3>Une stratégie de référencement naturel peut être portée sur le plan national comme sur le plan local. Nous définissons les secteurs géographiques stratégiques pour vous apporter une visibilité qualifiée.</h3>
                            <p>Le <strong>référencement national est un secteur particulièrement concurrentiel</strong> et qui demande beaucoup de temps avant d’apporter des résultats satisfaisants. C’est pourquoi, nous orientons principalement nos <strong>stratégies de référencement</strong> sur du <strong>référencement local</strong>. Cela consiste à rendre <strong>votre site web visible auprès d’un public géographiquement ciblé</strong>. Le <strong>référencement local</strong> présente l’avantage de vous rendre visible auprès d’utilisateurs potentiellement plus réceptifs à vos produits et services.</p>
                            <p>C’est ce qui vous permet d’<strong>obtenir un trafic qualifié</strong> en vue d’<strong>obtenir des contacts</strong> près de chez vous ainsi que sur des secteurs que vous couvrez. Votre site apparaît donc comme pertinent pour les utilisateurs et les <strong>contacts obtenus</strong> sont cohérents avec vos objectifs.</p>
                        </Answer>
                        <Answer id={20} activeId={this.state.active}>
                            <h2>Quels sont les moyens mis en place pour atteindre mes objectifs ?</h2>
                            <h3>Notre agence web est composée de spécialistes dotés d’outils professionnels pour développer des stratégies basées sur des fondations solides.</h3>
                            <p>L’<strong>agence web Linkweb</strong> met à disposition ses compétences dans la <strong>création de site internet</strong> du point de vue technique (<strong>responsive design</strong>, <strong>ergonomie web</strong>, <strong>UX design</strong>, etc.) comme du point de vue éditorial (<strong>rédaction web optimisée</strong>, <strong>définition des contenus</strong>, <strong>navigation intuitive</strong>, etc.). Nos spécialistes formés aux problématiques du <strong>développement web</strong> et du <strong>référencement naturel</strong> mettent en œuvre vos stratégies en fonction de vos objectifs.</p>
                            <p>Pour ce faire, nous disposons d’outils permettant de réaliser des <strong>audits de site web</strong>, mais également de <strong>suivre les performances de votre site</strong> à travers l’<strong>analyse du comportement des utilisateurs</strong>. Nous disposons également d’outils permettant de <strong>monitorer le positionnement des pages web de votre site internet professionnel</strong> dans les <strong>pages de résultats de recherche</strong>.</p>
                            <p>Par ailleurs, nous collaborons avec nos clients pour adapter chaque stratégie en fonction de ses résultats, mais également effectuer un <strong>suivi de performances</strong> visant à définir la mise en place de nouvelles actions.</p>
                        </Answer>
                        <Answer id={21} activeId={this.state.active}>
                            <h2>Je ne trouve pas mon site sur les moteurs de recherche. Que dois-je faire ?</h2>
                            <p>Il n’est pas impossible qu’en essayant de <strong>rechercher votre site web sur Google</strong>, vous ne le trouviez pas. Si c’est le cas pour vous, nous vous invitons à nous contacter en vue d’éclaircir cette situation.</p>
                            <p>Toutefois et avant toute chose, il sera nécessaire de vérifier plusieurs éléments : le <strong>mot-clé recherché</strong> est-il un mot-clé travaillé par nos services ? Est-ce que le <strong>secteur géographique</strong> a bien été indiqué lors de la demande de <strong>référencement</strong> ? Effectuez-vous la recherche sur le <strong>bon moteur de recherche</strong> ?</p>
                            <p>Dans tous les cas, nous vous encourageons à nous contacter au moindre doute afin d’obtenir une réponse précise à votre interrogation.</p>
                            <div className="w-1/2 lg:w-1/3">
                                <RoundButton url="/contact-agence-web-toulouse/" text="Nous contacter" />
                            </div>
                        </Answer>
                        {/** SUIVI DU SITE **/}

                        <Answer id={22} activeId={this.state.active}><h2>En quoi consiste le suivi de référencement effectué ?</h2>
                            <p>Afin d’évaluer les <strong>stratégies de référencement mises en place sur les sites internet</strong> de nos clients, nos <strong>référenceurs web</strong> effectuent un suivi régulier des performances. Ce suivi nous permet d’évaluer si les moyens mis en place sont en adéquation avec les <strong>objectifs de la stratégie</strong>.</p>
                            <p>Pour ce faire, nous disposons d’<strong>outils professionnels</strong> nous permettant de suivre les statistiques relatives au <strong>comportement des utilisateurs</strong>. Il est également possible de <strong>suivre le positionnement des pages web</strong> référencées dans les <strong>pages de recherche de Google</strong> et pour les <strong>mots-clés ciblés</strong>.</p>
                            <p>Le suivi est effectué de manière régulière afin d’ajuster la stratégie en fonction des résultats. Enfin, ce suivi est exposé à nos clients au cours des appels mensuels en vue de toujours garder une certaine conformité avec vos besoins.</p>
                        </Answer>
                        <Answer id={23} activeId={this.state.active}><h2>À quelle fréquence est effectué le suivi de référencement ?</h2>
                            <p>Afin de nous assurer que la prestation effectuée correspond bien à vos attentes, nous effectuons un point mensuel pour vous tenir informés de l’<strong>activité de votre site web</strong>. Ressentez-vous les effets du travail mis en place ? Le <strong>contenu créé sur votre site</strong> est-il cohérent par rapport à vos attentes ? Y a-t-il des nouveautés au sujet de votre entreprise à mettre en avant ?</p>

                            <p>Nous vous tenons informés et nous tenons informés de votre actualité afin de vous proposer de <strong>nouveaux contenus</strong> en accord vos besoins.</p>
                        </Answer>
                        <Answer id={24} activeId={this.state.active}>
                            <h2>Un problème est survenu sur mon site, que dois-je faire ?</h2>
                            <p>Un problème de nature inconnue affecte le <strong>fonctionnement de votre site web</strong> ? Une mauvaise manipulation a été réalisée <strong>sur votre site web</strong> et vous ne savez pas comment y remédier ? Notre service technique assure la <strong>maintenance de votre site</strong> : n’hésitez à nous contacter en cas de problème rendant l’<strong>accès à votre site internet</strong> impossible.</p>
                            <div className="w-1/2 lg:w-1/3">
                                <RoundButton url="/contact-agence-web-toulouse/" text="Nous contacter" />
                            </div>
                        </Answer>

                        {/** TRAVAILLER AVEC LINKWEB **/}

                        <Answer id={25} activeId={this.state.active}>
                            <h2>Pourquoi travailler avec Linkweb ?</h2>
                            <p>L’investissement lié à la <strong>mise en place d’un projet web</strong> nécessite une relation de confiance et de collaboration entre les différents acteurs du projet. À ce titre, il est important de bien choisir ses interlocuteurs pour maximiser ses chances de réussite.</p>
                            <h3>Travailler avec une agence web de proximité à Toulouse et Agen</h3>
                            <p><strong>Linkweb</strong> est une <strong>agence web</strong> à taille humaine. Présente à <strong>Agen (47)</strong> et <strong>Toulouse (31)</strong>, notre est agence est une <strong>agence de proximité</strong>. Nous misons sur une relation de confiance avec <strong>nos clients</strong> pour maximiser la réussite de nos <strong>projets web</strong>.</p>
                            <p>Que ce soit lors de la <strong>création de votre site internet</strong> ou bien durant son <strong>référencement</strong>, nos professionnels sont accessibles pour répondre à vos attentes, ainsi que vous accompagner dans la <strong>définition de votre projet</strong>.</p>
                            <h3>Travailler avec des professionnels du développement et référencement de sites web</h3>
                            <p>Les équipes de notre <strong>agence web</strong> sont composées de <strong>professionnels compétents en développement web et en référencement naturel</strong>. Ainsi, nous sommes en mesure de répondre à vos demandes que ce soit d’un point de vue technique, mais également éditorial.</p>
                            <p>Nous vous donnons accès à une plateforme optimale d’un point de vue technique et adaptée pour <strong>acquérir de la visibilité</strong> grâce aux <strong>moteurs de recherche</strong> comme <strong>Google</strong>.</p>
                            <h3>Travailler avec un interlocuteur privilégié pour un suivi régulier</h3>
                            <p>Une fois le projet lancé, un professionnel dédié à votre projet est chargé de mettre en place un suivi régulier. Ce <strong>suivi de projet</strong> vous permettra d’être tenu(e) informé(e) de l’<strong>activité de votre site web</strong> à travers : le travail effectué durant le mois écoulé, les performances (trafic, entrées, objectifs, etc.) ainsi que les perspectives d’évolution.</p>
                            <p>Travailler avec un interlocuteur privilégié est à la base d’une bonne collaboration. C’est pourquoi, vous profiterez d’une <strong>gestion de projet sur-mesure</strong> de la <strong>création au référencement de votre site internet</strong>.</p>
                        </Answer>
                        <Answer id={26} activeId={this.state.active}>
                            <h2>Comment se déroule mon projet de création de site web ?</h2>
                            <p>Lorsque vous décidez de <strong>créer votre site internet avec Linkweb</strong>, nous vous accompagnons, étape par étape, dans la <strong>mise en œuvre de votre projet</strong>. En effet, la première étape consiste à <strong>définir le cadre de votre projet de site internet</strong>, à savoir vos <strong>objectifs</strong>, <strong>cibles</strong>, mais également le contexte dans lequel va s’inscrire <strong>votre site web</strong> (vis-à-vis de la <strong>concurrence</strong> et vis-à-vis de votre <strong>stratégie de communication globale</strong>).</p>
                            <p>Dès lors que la <strong>stratégie de votre site internet</strong> est fixée, nos services <strong>développement</strong> et <strong>référencement</strong> se chargent de réaliser l’<strong>aspect visuel et fonctionnalités</strong> d’une part et l’<strong>aspect éditorial</strong> d’autre part.</p>
                            <p>Une fois les contenus produits et mis en page, le site est soumis à votre validation. Si la proposition vous convient, alors le <strong>processus de mise en ligne</strong> peut-être lancé. Si vous avez des remarques à effectuer, nos équipes se chargeront de la réalisation des ajustements.</p>
                            <p>Enfin, la <strong>mise en ligne de votre site internet</strong> n’est pas la dernière étape puisqu’un collaborateur sera chargé, chaque mois, de <strong>travailler sur votre site</strong> afin de l’<strong>optimiser pour le référencement naturel</strong>. Un suivi sera alors effectué pour vous permettre d’être au courant des actions menées sur <strong>votre site web</strong> et des performances qui en découlent.</p>
                        </Answer>
                        <Answer id={27} activeId={this.state.active}>
                            <h2>Suis-je propriétaire de mon site web ?</h2>
                            <p>Lorsque vous souscrivez à un <strong>projet de site web avec Linkweb</strong>, il faut savoir que le <strong>site internet</strong> créé vous appartient. Vous en êtes donc propriétaire.</p>
                        </Answer>
                        <Answer id={28} activeId={this.state.active}>
                            <h2>Combien coûte un site web ?</h2>
                            <p>Il est difficile de chiffrer le <strong>prix d’un site internet</strong> car il n’existe pas un <strong>type de site internet</strong>. Ainsi, le prix de la création va varier en fonction de différents postes qui composeront le <strong>tarif de votre projet web</strong>. En fonction du <strong>type de site internet</strong>, la mise en place de certaines fonctionnalités demande plus de temps et de compétences.</p>
                            <p>Ceci est également valable en ce qui concerne la <strong>stratégie à mettre en œuvre</strong>. En fonction de vos objectifs ou encore de votre concurrence, les actions à mettre en place pourront être plus ou moins conséquentes.</p>
                            <p>Ainsi, il n’existe pas de tarif exact pour <strong>créer un site internet</strong>. Celui-ci est déterminé en fonction des spécificités de votre projet. C’est pourquoi, <strong>Linkweb</strong> est en mesure de vous réaliser un <strong>devis sur-mesure</strong>.</p>
                            <div className="w-1/2 lg:w-1/2">
                                <RoundButton url="/contact-agence-web-toulouse/" text="Demander un devis" />
                            </div>
                        </Answer>
                        <Answer id={29} activeId={this.state.active}>
                            <h2>Existe-t-il des facilités de paiement ?</h2>
                            <p>Oui. Chaque <strong>projet de création et référencement naturel</strong> est porté sur une année. Ainsi, nous vous donnons la possibilité de régler le montant de votre projet sous forme de mensualités.</p>
                            <p>De plus, en fonction de votre demande, nous avons la possibilité d’adapter les modalités de paiement au cas par cas pour vous permettre de <strong>disposer d’un site internet</strong> avec une méthode de paiement qui vous convient.</p>
                        </Answer>
                        <Answer id={30} activeId={this.state.active}>
                            <h2>Que pensent nos clients de nos services ?</h2>
                            <div className="flex flex-1 flex-wrap flex-col md:flex-row w-full mt-6 mb-6">
                                <article className="w-full md:w-1/2 mt-5 lg:w-1/2 xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                                    <div className="avis">
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={climaf} alt="Avis Google"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>CLIMAF SARL</h4>
                                        <p>Linkweb Agen est un site internet avec un très bon suivi commercial et technique régulier.<br/>
                                        <br/>
                                        L'équipe est fort sympathique toujours à l'écoute du client.<br/><br/>
                                        La création du site a beaucoup apporté à notre entreprise, je les recommande sans hésitation.<br/><br/>
                                        Bravo à toute l'équipe.</p>
                                    </div>
                                </article>
                                <article className="w-full md:w-1/2 lg:w-1/2 mt-5 xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                                    <div className="avis">
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={contis} alt="Avis Google"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>CONTIS ÉQUITATION</h4>
                                        <p>Très bonne équipe sérieuse qui est à l'écoute de nos attentes.<br/><br/>
                                            Le suivi est super, ils ne font pas QUE vous créer un site web, ils conseillent, donnent leurs idées, font des recherches et des créations pour vous et tout ça avec rapidité !<br/><br/>
                                            Je recommande cette entreprise qui m'a apporté une bonne partie de ma clientèle.</p>
                                    </div>
                                </article>
                                <article className="w-full md:w-1/2 lg:w-1/2 mt-5 xl:w-1/3 century w-1/2 mx-0 md:px-2 pb-4 flex flex-col align-center">
                                    <div className="avis">
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={faivre} alt="Avis Google"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>FAIVRE CRÉATIONS</h4>
                                        <p>L'agence Linkweb Agen est toujours disponible et à l'écoute. Elle contribue à notre développement, et nous accorde du temps et de l'énergie pour nous assurer une bonne visibilité sur internet. <br/><br/>Nous sommes très satisfaits de leur travail et souhaitions les en remercier via ce commentaire ! Équipe agréable et bienveillante !</p>
                                        <br/>
                                    </div>
                                </article>
                                {/* <article className="w-full md:w-1/2 lg:w-1/2 mt-5 xl:w-1/3 century w-1/2 mx-0 md:px-6 pb-4 flex flex-col align-center">
                                    <div className="avis">
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={avs} alt="Avis Google"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>AVS MOTO</h4>
                                        <p>Linkweb s'occupe du référencement de notre site depuis 4 ans ! <br/><br/>Cette agence Web est très compétente dans le domaine, le suivi ainsi que le rapport avec sa clientèle en font sans nul doute l'une des meilleures agences de la région, je recommande sans hésitation.</p>
                                    </div>
                                </article>
                                
                                
                                <article className="w-full md:w-1/2 lg:w-1/2 mt-5 xl:w-1/3 century w-1/2 mx-0 md:px-6 pb-4 flex flex-col align-center">
                                    <div className="avis">
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={tgcm} alt="Avis Google"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>TGCM</h4>
                                        <p>L'équipe Linkweb répond toujours à l'attente de nos demandes et fait vivre le site de façon très dynamique. <br/><br/>Par l'étude des visites, des pages vues, de la durée des sessions, Linkweb applique des modifications pour améliorer les statistiques. <br/><br/>Depuis le début de notre collaboration, en 2015, nous trouvons des interlocuteurs à notre écoute, compétents et, cerise sur le gâteau , très sympathiques. <br/><br/>Cette culture d'entreprise rejaillit de façon positive sur la qualité du travail. Rejoignez les.</p>
                                    </div>
                                </article>
                                <article className="w-full md:w-1/2 lg:w-1/2 mt-5 xl:w-1/3 century w-1/2 mx-0 md:px-6 pb-4 flex flex-col align-center">
                                    <div className="avis">
                                        <div className="flex flex-row">
                                        <img width="50px" height="50px" src={hautenbois} alt="Avis Google"/>
                                        <svg width="100px" viewBox="0 0 100 125">
                                            <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                        </svg>
                                        </div>
                                        <h4>DE HAUT EN BOIS</h4>
                                        <p>Cela fait quelques années que nous travaillons ensemble.<br/><br/>
                                            Sérieux, créatifs, il vous donnent de bons conseils pour améliorer le site, être très bien positionné dans les pages Google (pour ma part je suis dans la 1ère et même en 1ère position suivant la recherche).<br/><br/>
                                            Donc j’ai du recul pour dire oui au choix de Linkweb pour la création de site.<br/><br/>
                                            Merci à Anthony avec qui je traite.</p>
                                    </div>
                                </article> */}
                                
                            </div>
                            <div className="w-full lg:w-3/4">
                                <RoundButton url="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,," text="Ce que pensent nos clients de nos services de création et référencement de sites internet" />
                            </div>
                        </Answer>
                        <Answer id={31} activeId={this.state.active}>
                            <h2>Où découvrir des sites internet créés par Linkweb ?</h2>
                            <p>Vous pourrez retrouver un échantillon de <strong>nos créations</strong> sur la page de présentation de nos réalisations sur notre <strong>site internet</strong>.</p>
                            <p>Paysagistes, artisans, agences immobilières, commerces, etc. Nous collaborons avec des professionnels issus de tous types de secteurs d’activités et de toutes zones géographiques.</p>
                            <p>C’est en cela que nous sommes en mesure d’<strong>adapter nos créations en fonction de vos cibles</strong> et de vos spécificités en construisant chaque <strong>site web</strong> pour apporter une réponse claire et précise aux <strong>requêtes des utilisateurs</strong>.</p>
                            <div className="w-1/2 lg:w-1/3">
                                <RoundButton url="/agence-de-communication-agen-47-toulouse-31/" text="Nos réalisations" />
                            </div>
                        </Answer>
                    </div>
                </section>



                {/* </PageTransition> */}
            </Layout>
        );
    }
};



export default FAQ;