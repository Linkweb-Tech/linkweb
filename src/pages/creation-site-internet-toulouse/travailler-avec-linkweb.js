import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../../components/seo";
import ButtonBlog from "../../components/buttonblog";
import "../../scss/faqpages.scss";


import background from "../../images/foire-aux-questions.jpg";

import fbIcon from "../../images/facebook-logo.svg";
import twitterIcon from "../../images/twitter-logo.svg";
import instaIcon from "../../images/instagram-logo.svg";
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";
import BoutonBlog from '../../components/boutonBlog.js';



class TravaillerAvecLinkweb extends React.Component {

    constructor(props) {
        super(props);
    
    }

render() {
    return (
        <Layout location={this.props.location}>

            <SEO
                title="Pourquoi travailler avec Linkweb ? | Agence Web à Toulouse (31)"
                description="Linkweb est une agence web à taille humaine située à Toulouse et Agen. Voici les 6 raisons de travailler avec nous pour mener votre projet web."
                keywords={[`Agence Web Toulouse`, `Agence Web Agen`, `Création site internet Toulouse`, `Création site internet Agen`]}
                url="https://linkweb.fr/creation-site-internet-toulouse/travailler-avec-linkweb/"
                nom="Travailler avec Linkweb"
                slug="creation-site-internet-toulouse/travailler-avec-linkweb/"
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
                <section className="w-full bloctitrespages mx-auto pb-0 px-4 pt-6 bg-blackflex flex-col justify-center items-center" style={{background:'#00000094 url(' + background +')', backgroundBlendMode:'multiply', backgroundSize:'cover', backgroundPosition:'center', height:'450px'}}>
                    <h2 data-aos="fade-down" data-aos-delay="500" className="century text-5xl sm:text-6xl text-center text-white mt-64">
                    Pourquoi travailler avec Linkweb ?
                    </h2>
                    <Link to="/"><h1 className="century text-xl sm:text-2xl text-center text-white hover:text-bleu" data-aos="fade-up" data-aos-delay="500">Agence Web Toulouse</h1></Link>
                    <br/>
                    {/* Réseaux Sociaux */}
                    <section className="w-full flex flex-row justify-center text-white ">
                            <div className="w-1/3 md:w-1/6 lg:w-1/12 flex flex-row">
                                <div className="w-1/3 block mx-auto" data-aos="fade-left">
                                    <a href="https://facebook.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex justify-center no-underline text-white">
                                    <img 
                                    src={ fbIcon }
                                    alt="Réseaux sociaux"
                                    className="w-6 fill-current"
                                    />
                                    </a>
                                </div>
                                <div className="w-1/3 block, mx-auto" data-aos="fade-up">
                                    <a href="https://twitter.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex justify-center no-underline text-white">
                                    <img 
                                    src={ twitterIcon }
                                    alt="Réseaux sociaux"
                                    className="w-6 fill-current"
                                    />
                                    </a>
                                </div>
                                <div className="w-1/3 block, mx-auto" data-aos="fade-right">
                                    <a href="https://instagram.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex justify-center no-underline text-white">
                                    <img 
                                    src={ instaIcon }
                                    alt="Réseaux sociaux"
                                    className="w-6 fill-current"
                                    style={{maxHeight:'50px', minWidth:'15px'}}
                                    />
                                    </a>
                                </div>
                            </div>
                    </section>
                    {/* FIN Réseaux Sociaux */}
                </section>
                
                <section className="w-full  flex flex-col xl:flex-row flex justify-center">
                    
                    {/* <div className="w-full century lg:w-1/4 order-last lg:order-first">
                        <ul>
                            <li>
                                <div className="titre flex flex-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#37cfee" viewBox="0 0 128 160" x="0px" y="0px" width="25px"><path d="M42.53,47.7a2,2,0,0,0,2.83-2.83L27.69,27.2A2,2,0,0,0,24.87,30Z"/><path d="M79.95,38.95a2,2,0,0,0,2-2V12.28a2,2,0,1,0-4,0V36.95A2,2,0,0,0,79.95,38.95Z"/><path d="M53.06,26.48a2,2,0,1,0,3.88-1l-6-24a2,2,0,1,0-3.88,1Z"/><path d="M103.62,91.71a9,9,0,0,0-4.5-2.45A8.14,8.14,0,0,0,92.2,79a8.38,8.38,0,0,0,.5-2.8,9,9,0,0,0-7.24-8.85L96.31,56.46a9.05,9.05,0,1,0-13-12.59C71.42,56.56,56.64,71,50.81,73.37c-3.4,1.4-4.22.31-6.85-4a31.62,31.62,0,0,0-7.16-8.9c-3.46-2.81-7.53-2.89-10.9-.22-3.82,3.05-4.37,8.23-1.33,12.59,6.28,9,6.23,13.06,6.19,17C30.46,118.44,50.31,127.29,62.1,128c.9.05,1.77.08,2.64.08a38.56,38.56,0,0,0,29-12.63l6.55-7.22.11-.13,3.25-3.59A9.07,9.07,0,0,0,103.62,91.71ZM90.71,112.8l-.08.09A35.08,35.08,0,0,1,62.34,124a31.27,31.27,0,0,1-14.44-5c.31,0,.63,0,.95,0l.85,0c5-.32,9.57-3.35,13.65-9a2,2,0,0,0-3.25-2.33c-3.33,4.64-6.9,7.12-10.62,7.37-5.19.34-9.18-3.81-9.24-3.87a2,2,0,0,0-.29-.25c-3.13-4.94-5.28-11.72-5.18-21.09.06-5.29-.42-10.07-6.91-19.35-1.5-2.16-1.91-5.21.54-7.17,1.92-1.52,3.85-1.46,5.89.19a27.89,27.89,0,0,1,6.26,7.86A21.25,21.25,0,0,0,44,76.14a2,2,0,0,0,.12.16c.17.18,4,4.37.1,10.46a2,2,0,0,0,3.37,2.15,13,13,0,0,0,1.84-11,11.37,11.37,0,0,0,2.88-.79c7.87-3.23,26.32-22.38,33.9-30.47a5,5,0,0,1,3.6-1.6,5.07,5.07,0,0,1,3.66,1.48,5.05,5.05,0,0,1,0,7.15L73.11,74a8.86,8.86,0,0,0,0,12.56l.11.11a8.78,8.78,0,0,0,5.11,2.51,8.7,8.7,0,0,0,2.28,8.17l.08.07.08.08A8.63,8.63,0,0,0,86.87,100a8.59,8.59,0,0,0,2.48,7l.15.17a8.68,8.68,0,0,0,4.21,2.32Z"/><polygon points="58.31 44.54 57.55 48.94 61.5 46.86 65.45 48.94 64.69 44.54 67.89 41.42 63.47 40.78 61.5 36.78 59.53 40.78 55.11 41.42 58.31 44.54"/><polygon points="65.96 16.73 67.31 19.77 68.91 16.84 72.22 16.5 69.93 14.08 70.63 10.82 67.62 12.25 64.73 10.58 65.16 13.89 62.68 16.12 65.96 16.73"/><polygon points="37.3 22.64 39.53 20.16 42.84 20.6 41.17 17.71 42.61 14.71 39.35 15.39 36.94 13.1 36.58 16.41 33.65 18 36.69 19.36 37.3 22.64"/></svg>
                                    <p>Pour démarrer</p>
                                </div>
                                <ul className="bastitre">
                                <button onclick="fonction"><li><span className="text-bleu">></span> Pourquoi créer un site internet ?</li></button><hr/>
                                    <li><span className="text-bleu">></span> À qui s’adresse la création de site internet ?</li><hr/>
                                    <li><span className="text-bleu">></span> Qui contacter pour créer un site internet ?</li><hr/>
                                    <li><span className="text-bleu">></span> Qu’est-ce que le référencement naturel ?</li><hr/>
                                    <li><span className="text-bleu">></span> À quoi sert le référencement naturel ?</li><hr/>
                                    <li><span className="text-bleu">></span> Quelle est la différence entre le SEO et le SEA ?</li>
                                </ul>
                            </li>
                            <li><div className="titre flex flex-row">
                                    <svg width="20px" fill="#37cfee" stroke="4px" viewBox="0 0 66 82.5" ><g><g><g><path d="M54.944,54.685c-1.313,1.313-1.317,3.443-0.007,4.753c1.315,1.304,3.45,1.305,4.758-0.002     c1.313-1.313,1.313-3.448,0-4.761C58.391,53.371,56.255,53.372,54.944,54.685z M58.634,58.374c-0.724,0.724-1.909,0.723-2.639,0     c-0.722-0.722-0.718-1.902,0.01-2.629c0.727-0.727,1.905-0.733,2.629-0.01C59.361,56.462,59.361,57.647,58.634,58.374z"/></g><g><path d="M63.084,53.584l-8.583-8.583c1.123-1.994,1.967-4.054,2.488-6.144l5.645-0.994c0.358-0.063,0.62-0.375,0.62-0.739v-9.45     c0-0.363-0.26-0.674-0.617-0.738l-5.631-1.014c-0.582-2.264-1.495-4.459-2.719-6.538l3.282-4.711     c0.208-0.298,0.172-0.704-0.086-0.96l-6.7-6.67c-0.257-0.254-0.66-0.291-0.957-0.085l-4.701,3.263     c-2.058-1.212-4.247-2.113-6.52-2.682l-1.014-5.667c-0.064-0.358-0.375-0.618-0.738-0.618h-9.45c-0.363,0-0.674,0.26-0.738,0.618     l-1.014,5.667c-2.269,0.569-4.461,1.469-6.529,2.683l-4.712-3.265c-0.297-0.205-0.7-0.17-0.957,0.086l-6.68,6.67     c-0.257,0.257-0.293,0.661-0.085,0.959l3.282,4.711c-1.224,2.079-2.137,4.274-2.719,6.538l-5.631,1.014     c-0.357,0.065-0.617,0.375-0.617,0.738v9.45c0,0.364,0.261,0.675,0.62,0.739l5.637,0.995c0.569,2.249,1.48,4.446,2.711,6.545     l-3.283,4.702c-0.208,0.298-0.172,0.702,0.084,0.959l6.68,6.69c0.257,0.258,0.661,0.292,0.959,0.085l4.713-3.283     c2.061,1.202,4.252,2.105,6.526,2.69l1.014,5.661c0.064,0.357,0.375,0.618,0.738,0.618h9.45c0.363,0,0.674-0.26,0.738-0.618     l1.014-5.661c2.277-0.586,4.466-1.489,6.517-2.69l1.488,1.036l7.232,7.232c2.542,2.542,6.673,2.579,9.25,0     C65.633,60.286,65.629,56.141,63.084,53.584z M37.782,55.905c-0.291,0.069-0.513,0.304-0.566,0.598l-0.989,5.523h-8.195     l-0.989-5.523c-0.053-0.294-0.275-0.529-0.566-0.598c-2.448-0.579-4.801-1.548-6.993-2.881c-0.254-0.155-0.575-0.144-0.818,0.025     l-4.594,3.201l-5.792-5.801l3.2-4.585c0.171-0.244,0.181-0.566,0.025-0.82c-1.367-2.238-2.343-4.596-2.899-7.007     c-0.068-0.293-0.304-0.518-0.601-0.57l-5.5-0.971v-8.193l5.493-0.989c0.294-0.053,0.529-0.275,0.597-0.566     c0.573-2.432,1.552-4.787,2.909-7c0.156-0.254,0.146-0.576-0.024-0.821l-3.201-4.594l5.793-5.784l4.595,3.184     c0.245,0.168,0.566,0.178,0.819,0.023c2.197-1.346,4.547-2.311,6.985-2.869c0.293-0.067,0.518-0.303,0.571-0.599l0.99-5.532     h8.194l0.99,5.532c0.053,0.296,0.278,0.532,0.571,0.599c2.443,0.559,4.79,1.524,6.974,2.868c0.253,0.156,0.576,0.148,0.821-0.023     l4.587-3.184l5.81,5.785l-3.2,4.594c-0.17,0.245-0.18,0.567-0.024,0.821c1.357,2.213,2.336,4.568,2.909,7     c0.068,0.291,0.303,0.513,0.597,0.566l5.493,0.989v8.193l-5.511,0.971c-0.297,0.053-0.535,0.279-0.601,0.574     c-0.449,1.988-1.2,3.958-2.235,5.868l-3.946-3.946c1.05-2.392,1.583-4.942,1.583-7.587c0-10.427-8.488-18.91-18.92-18.91     c-10.427,0-18.91,8.483-18.91,18.91c0,10.449,8.483,18.95,18.91,18.95c2.878,0,5.734-0.661,8.295-1.915l3.891,3.885     C42.26,54.488,40.066,55.365,37.782,55.905z M48.296,38.796l-3.685-3.685c0.335-1.193,0.499-2.403,0.499-3.601     c0-3.933-1.765-7.728-4.973-10.328c-3.022-2.451-6.976-3.431-10.844-2.684c-0.589,0.113-0.814,0.841-0.389,1.267l5.852,5.852     l-1.208,7.897l-7.664,0.99l-5.869-5.869c-0.427-0.43-1.155-0.196-1.267,0.389c-0.841,4.366,0.55,8.816,3.656,11.922     c3.407,3.407,8.334,4.692,12.956,3.405l3.933,3.933c-2.247,1.023-4.653,1.541-7.168,1.541c-9.6,0-17.41-7.828-17.41-17.45     c0-9.6,7.81-17.41,17.41-17.41c9.605,0,17.42,7.81,17.42,17.41C49.544,34.607,49.108,36.757,48.296,38.796z M62.034,61.764     c-1.988,1.988-5.169,1.961-7.129,0c-3.849-3.853-15.405-15.398-18.8-18.79c-0.197-0.197-0.49-0.269-0.755-0.185     c-4.213,1.325-8.767,0.213-11.885-2.905c-2.399-2.399-3.652-5.707-3.432-9.111l5.052,5.051c0.164,0.164,0.393,0.245,0.627,0.213     l8.59-1.11c0.332-0.042,0.595-0.3,0.645-0.63c1.458-9.557,1.359-8.84,1.359-8.943c0-0.197-0.078-0.389-0.22-0.53l-5.043-5.043     c2.95-0.201,5.854,0.704,8.15,2.566c2.851,2.31,4.417,5.68,4.417,9.171c0,1.191-0.183,2.396-0.56,3.579     c-0.023,0.075-0.035,0.151-0.035,0.227c0,0.196,0.077,0.388,0.22,0.531c3.419,3.419-3.463-3.463,18.789,18.789     C63.984,56.614,63.989,59.809,62.034,61.764z"/></g></g></g></svg>
                                    <p>Questions techniques</p>
                                </div>
                                <ul>
                                    <li><p className="soustitre">Définition du projet</p>
                                        <ul className="bastitre">
                                            <li><span className="text-bleu">></span> À quels objectifs répond la création d’un site internet ?</li><hr/>
                                            <li><span className="text-bleu">></span> Quels types de sites internet sommes-nous en mesure de créer ?</li><hr/>
                                            <li><span className="text-bleu">></span> Pourquoi mettre en place une refonte de site internet ?</li><hr/>
                                            <li><span className="text-bleu">></span> Quelles fonctionnalités existent pour mon projet de site web ?</li>
                                        </ul>
                                    </li>
                                    <li><p className="soustitre">Nom de domaine et hébergement</p>
                                        <ul className="bastitre">
                                            <li><span className="text-bleu">></span> Comment choisir son nom de domaine et son hébergement ?</li><hr/>
                                            <li><span className="text-bleu">></span> Je possède déjà un nom de domaine, puis-je l’utiliser pour mon nouveau site ?</li>
                                        </ul>
                                    </li>
                                    <li><p className="soustitre">Développement du site</p>
                                        <ul className="bastitre">
                                            <li><span className="text-bleu">></span> Comment sont créés les sites internet ?</li><hr/>
                                            <li><span className="text-bleu">></span> Quelles sont les technologies utilisées et maîtrisées ?</li><hr/>
                                            <li><span className="text-bleu">></span> Combien de temps pour créer unsite internet ?</li><hr/>
                                            <li><span className="text-bleu">></span> Dois-je fournir les contenus du site ?</li>
                                        </ul>
                                    </li>
                                    <li><p className="soustitre">Référencement du site</p>
                                        <ul className="bastitre">
                                            <li><span className="text-bleu">></span> En quoi consiste le travail de référencement naturel ?</li><hr/>
                                            <li><span className="text-bleu">></span> Comment sont définis les mots-clés de ma stratégie de référencement ?</li><hr/>
                                            <li><span className="text-bleu">></span> Sur quels secteurs est orientée ma stratégie de référencement naturel ?</li><hr/>
                                            <li><span className="text-bleu">></span> Quels sont les moyens mis en place pour atteindre mes objectifs ?</li><hr/>
                                            <li><span className="text-bleu">></span> Je ne trouve pas mon site sur les moteurs de recherche. Que dois-faire ?</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p className="soustitre">Suivi du site</p>
                                        <ul className="bastitre">
                                            <li><span className="text-bleu">></span> En quoi consiste le suivi de référencement effectué ?</li><hr/>
                                            <li><span className="text-bleu">></span> À quelle fréquence est effectué le suivi de référencement ?</li><hr/>
                                            <li><span className="text-bleu">></span> Un problème est survenu sur mon site, que dois-je faire ?</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="titre flex flex-row">
                                    <svg width="20px" viewBox="0 0 100 125" fill="#37cfee"><g><path fill="none" d="M58.212,42.35c-0.028-0.014-0.059-0.024-0.09-0.029l-0.893,0.862l-11.009-5.667   c-0.12-0.011-0.237-0.017-0.351-0.017c-3.08,0-3.743,3.959-3.849,4.796c-0.007,0.056-0.011,0.098-0.014,0.124   c-0.002,0.021-0.004,0.031-0.004,0.031c-0.107-0.087-0.216-0.134-0.323-0.134c-0.02,0-0.04,0.001-0.059,0.005   c-0.055,0.009-0.106,0.032-0.153,0.066c-0.348,0.25-0.488,1.122-0.311,2.109c0.134,0.75,0.417,1.376,0.726,1.685   c0.132,0.133,0.27,0.208,0.403,0.208c0.02,0,0.041-0.002,0.061-0.005c0.073-0.013,0.14-0.049,0.2-0.104   c0.731,2.275,2.127,4.542,3.89,5.911c1.038,0.807,2.204,1.302,3.436,1.302c1.224,0,2.383-0.488,3.417-1.286   c1.771-1.368,3.176-3.643,3.91-5.926c0.06,0.056,0.127,0.092,0.2,0.104c0.02,0.003,0.04,0.005,0.06,0.005   c0.111,0,0.227-0.051,0.34-0.147c0.332-0.283,0.646-0.943,0.788-1.745C58.774,43.451,58.605,42.534,58.212,42.35z"/><path fill="none" d="M55.102,52.823c-0.006-0.003-0.012-0.006-0.018-0.009c-0.898,0.885-1.896,1.586-2.961,2.008   c-0.723,0.287-1.476,0.446-2.251,0.446c-0.774,0-1.528-0.159-2.25-0.446c-1.075-0.427-2.082-1.136-2.986-2.032   c-0.001,0-0.001,0-0.001,0c0,1.104-0.843,1.732-1.416,2.032c-0.067,0.036-0.133,0.067-0.191,0.094   c-0.143,0.065-0.251,0.104-0.299,0.119c0,0,0,0,0,0.001c0.034,0.282,0.159,0.556,0.361,0.814c0.946,1.21,3.606,2.958,6.741,2.958   c3.135,0,5.795-1.748,6.74-2.958c0.203-0.259,0.328-0.532,0.362-0.814c0.001-0.009,0.002-0.017,0.003-0.024   C56.551,54.869,55.124,54.245,55.102,52.823z"/><path fill="none" d="M73.066,46.29c0.123,0.124,0.252,0.185,0.374,0.163c0.06-0.01,0.112-0.039,0.162-0.084   c0.595,1.853,1.736,3.699,3.177,4.802c0.83,0.635,1.759,1.023,2.738,1.023c1.002,0,1.95-0.406,2.794-1.066   c1.414-1.106,2.535-2.93,3.122-4.759c0.049,0.045,0.103,0.074,0.162,0.084c0.105,0.019,0.215-0.024,0.323-0.115   c0.269-0.228,0.522-0.761,0.638-1.408c0.15-0.845,0.015-1.585-0.304-1.733c-0.022-0.011-0.047-0.019-0.071-0.023   c-0.098-0.018-0.201,0.019-0.302,0.098l-0.005,0.006c0-0.001-0.001-0.001-0.001-0.002c-0.001,0.001-0.002,0.002-0.002,0.002   c-0.002-0.005-0.002-0.011-0.003-0.018c-0.381-1.448-0.861-2.334-1.357-2.862c-0.097-0.053-0.196-0.099-0.307-0.13   c-0.013,0.214,0.23,0.538,0.257,0.854c-0.688-0.32-1.346-0.819-2.307-0.854c-0.226-0.008-0.468-0.006-0.718-0.001   c-2.318,0.828-4.867-0.108-4.867-0.108c-2.907-0.27-3.368,2.75-3.403,3.095c-0.002,0.009-0.002,0.018-0.003,0.025l0,0   c-0.104-0.083-0.209-0.122-0.311-0.104c-0.044,0.008-0.086,0.026-0.123,0.054c-0.091,0.065-0.162,0.187-0.214,0.343   c-0.029,0.407-0.048,0.817-0.054,1.242c0.007,0.04,0.01,0.078,0.018,0.118C72.589,45.535,72.816,46.04,73.066,46.29z"/><path fill="none" d="M13.995,46.51c0.122,0.123,0.249,0.183,0.37,0.162c0.059-0.01,0.111-0.038,0.16-0.083   c0.589,1.833,1.718,3.658,3.142,4.748c0.821,0.628,1.74,1.013,2.709,1.013c0.991,0,1.929-0.401,2.763-1.055   c1.399-1.094,2.507-2.897,3.089-4.707c0.047,0.045,0.101,0.074,0.16,0.084c0.104,0.018,0.212-0.025,0.319-0.114   c0.266-0.225,0.517-0.753,0.631-1.393c0.149-0.835,0.015-1.567-0.299-1.715c-0.022-0.01-0.046-0.019-0.071-0.023   c-0.097-0.017-0.199,0.019-0.298,0.098l-0.006,0.006c0-0.001,0-0.001,0-0.002c-0.001,0.001-0.002,0.002-0.003,0.002   c0-0.005,0-0.012-0.001-0.018c-0.377-1.432-0.852-2.31-1.343-2.832c-0.096-0.051-0.194-0.097-0.302-0.128   c-0.013,0.211,0.228,0.533,0.253,0.845c-0.681-0.317-1.332-0.81-2.282-0.845c-0.223-0.008-0.463-0.006-0.709-0.001   c-2.294,0.819-4.814-0.107-4.814-0.107c-2.875-0.267-3.331,2.72-3.366,3.062c0,0.008-0.001,0.017-0.002,0.025h0   c-0.103-0.083-0.207-0.121-0.306-0.103c-0.044,0.007-0.085,0.025-0.123,0.052c-0.09,0.065-0.16,0.185-0.212,0.34   c-0.028,0.402-0.046,0.809-0.053,1.228c0.006,0.039,0.01,0.077,0.017,0.117C13.523,45.764,13.748,46.263,13.995,46.51z"/><path d="M33.183,55.79c-1.426-1.531-2.841-1.649-3.273-1.75c-1.362-0.319-3.013-0.183-3.893-0.458   c-0.154,1.289-2.635,2.314-5.673,2.314c-3.038,0-5.519-1.025-5.673-2.314c-0.88,0.276-2.529,0.139-3.893,0.458   c-0.691,0.161-3.907,0.368-5.646,6.354c-0.236,0.813-0.153,1.697,0.231,2.421c1.425,2.696,8.921,3.526,14.981,3.524   c2.771,0.001,5.843-0.174,8.498-0.62c-0.148-0.881-0.104-1.801,0.15-2.677C29.939,59.782,31.344,57.36,33.183,55.79z"/><path d="M13.331,47.21c0.641,1.725,1.656,3.4,2.911,4.626c0.71,0.694,1.498,1.243,2.337,1.577c0.577,0.228,1.179,0.355,1.797,0.355   c0.619,0,1.221-0.128,1.798-0.355c0.869-0.345,1.683-0.921,2.412-1.65c1.224-1.222,2.214-2.872,2.842-4.567   c0.483-0.142,0.99-1.048,1.196-2.205c0.225-1.254,0.013-2.35-0.471-2.532c0.017-0.307,0.029-0.616,0.028-0.935   c-0.012-4.55-2.679-7.554-6.886-7.836c-3.667-0.247-6.43,1.211-7.688,3.632c-0.424,0.815-0.666,2.194-0.758,3.302   c-0.141,0.576-0.224,1.175-0.224,1.795h0.014c0,0.004-0.001,0.009-0.001,0.015c-0.009,0-0.018,0-0.027,0.002   c-0.537,0.094-0.781,1.238-0.546,2.556C12.28,46.202,12.826,47.14,13.331,47.21z M13.452,43.82c0.052-0.155,0.122-0.275,0.212-0.34   c0.038-0.026,0.079-0.044,0.123-0.052c0.099-0.018,0.204,0.02,0.306,0.103h0c0-0.008,0.001-0.017,0.002-0.025   c0.035-0.342,0.491-3.329,3.366-3.062c0,0,2.521,0.926,4.814,0.107c0.247-0.005,0.487-0.007,0.709,0.001   c0.95,0.036,1.601,0.528,2.282,0.845c-0.026-0.313-0.267-0.634-0.253-0.845c0.108,0.031,0.207,0.078,0.302,0.128   c0.491,0.522,0.966,1.4,1.343,2.832c0.001,0.005,0.001,0.012,0.001,0.018c0.001,0,0.002-0.001,0.003-0.002c0,0.001,0,0.001,0,0.002   l0.006-0.006c0.099-0.079,0.201-0.114,0.298-0.098c0.025,0.004,0.049,0.013,0.071,0.023c0.313,0.147,0.448,0.88,0.299,1.715   c-0.114,0.64-0.365,1.168-0.631,1.393c-0.106,0.089-0.215,0.132-0.319,0.114c-0.059-0.01-0.112-0.039-0.16-0.084   c-0.582,1.81-1.69,3.613-3.089,4.707c-0.834,0.653-1.772,1.055-2.763,1.055c-0.969,0-1.888-0.385-2.709-1.013   c-1.424-1.09-2.553-2.916-3.142-4.748c-0.048,0.045-0.101,0.073-0.16,0.083c-0.121,0.021-0.248-0.039-0.37-0.162   c-0.247-0.247-0.472-0.747-0.58-1.346c-0.007-0.04-0.01-0.078-0.017-0.117C13.406,44.628,13.423,44.222,13.452,43.82z"/><path d="M94.866,60.328c-1.76-6.054-5.011-6.262-5.711-6.425c-1.377-0.322-3.045-0.185-3.936-0.462   c-0.104,0.872-2.644,3.744-4.308,5.545l-0.722-2.78c0.543-0.32,0.66-1.026,0.66-1.612h-2.733c0,0.582,0.117,1.28,0.647,1.604   l-0.708,2.788c-1.665-1.801-4.203-4.672-4.309-5.545c-0.889,0.278-2.559,0.141-3.936,0.463c-0.443,0.104-1.912,0.228-3.377,1.845   c1.861,1.57,3.28,4.008,4.236,7.297c0.252,0.869,0.296,1.781,0.152,2.656c2.699,0.46,5.834,0.639,8.66,0.639   c6.128,0.001,13.707-0.838,15.148-3.563C95.021,62.044,95.105,61.15,94.866,60.328z"/><path d="M72.394,46.997c0.648,1.744,1.674,3.437,2.943,4.677c0.718,0.702,1.514,1.258,2.362,1.595   c0.583,0.231,1.193,0.359,1.817,0.359c0.626,0,1.235-0.128,1.818-0.359c0.878-0.348,1.701-0.931,2.438-1.668   c1.238-1.236,2.238-2.904,2.873-4.618c0.489-0.144,1.002-1.06,1.21-2.229c0.228-1.269,0.013-2.376-0.477-2.561   c0.018-0.31,0.029-0.623,0.028-0.945c-0.012-4.6-2.709-7.275-6.962-7.56c-3.708-0.249-6.502,1.224-7.774,3.673   c-0.428,0.824-0.673,1.854-0.766,2.975c-0.144,0.583-0.227,1.189-0.227,1.815h0.013c0,0.005,0,0.01-0.001,0.014   c-0.009,0.001-0.018,0.001-0.027,0.003c-0.542,0.094-0.789,1.251-0.551,2.584C71.331,45.979,71.884,46.925,72.394,46.997z    M72.517,43.569c0.052-0.156,0.123-0.278,0.214-0.343c0.037-0.028,0.079-0.046,0.123-0.054c0.102-0.018,0.207,0.021,0.311,0.104   l0,0c0.001-0.008,0.001-0.017,0.003-0.025c0.035-0.345,0.496-3.365,3.403-3.095c0,0,2.549,0.937,4.867,0.108   c0.25-0.005,0.492-0.007,0.718,0.001c0.961,0.035,1.618,0.534,2.307,0.854c-0.026-0.316-0.27-0.64-0.257-0.854   c0.11,0.031,0.21,0.078,0.307,0.13c0.496,0.528,0.977,1.415,1.357,2.862c0.001,0.007,0.001,0.013,0.002,0.019   c0,0,0.002-0.001,0.003-0.002c0,0,0.001,0.001,0.001,0.002l0.005-0.006c0.101-0.079,0.204-0.116,0.302-0.098   c0.024,0.004,0.049,0.012,0.071,0.023c0.318,0.148,0.454,0.889,0.304,1.733c-0.115,0.647-0.369,1.181-0.638,1.408   c-0.108,0.091-0.218,0.134-0.323,0.115c-0.06-0.01-0.113-0.039-0.162-0.084c-0.587,1.829-1.708,3.652-3.122,4.759   c-0.844,0.66-1.792,1.066-2.794,1.066c-0.979,0-1.908-0.389-2.738-1.023c-1.44-1.103-2.582-2.949-3.177-4.802   c-0.05,0.045-0.103,0.074-0.162,0.084c-0.122,0.022-0.251-0.039-0.374-0.163c-0.25-0.25-0.478-0.755-0.586-1.361   c-0.008-0.041-0.011-0.079-0.018-0.118C72.469,44.386,72.487,43.976,72.517,43.569z"/><path d="M61.808,55.608c-0.101-0.023-0.202-0.045-0.305-0.064c-2.63-2.43-0.835-12.572-0.835-12.572   c0-12.917-7.301-13.979-9.702-13.979c-0.472,0-0.755,0.041-0.755,0.041c-0.128-0.007-0.254-0.012-0.379-0.017   c-0.125,0.004-0.251,0.01-0.379,0.017c0,0-0.282-0.041-0.755-0.041c-2.4,0-9.702,1.061-9.702,13.979c0,0,1.794,10.143-0.835,12.572   c-0.103,0.02-0.205,0.041-0.304,0.064c-0.868,0.202-4.893,0.461-7.072,7.956c-0.295,1.018-0.19,2.124,0.29,3.031   c1.783,3.371,11.154,4.412,18.737,4.412c0.007,0,0.013,0,0.02,0c0.006,0,0.013,0,0.02,0c7.584,0,16.955-1.04,18.738-4.412   c0.479-0.907,0.583-2.014,0.288-3.031C66.699,56.069,62.675,55.811,61.808,55.608z M56.935,55.036   c-0.034,0.282-0.159,0.556-0.362,0.814c-0.945,1.21-3.605,2.958-6.74,2.958c-3.135,0-5.795-1.748-6.741-2.958   c-0.202-0.259-0.327-0.532-0.361-0.814c0-0.001,0-0.001,0-0.001c0.048-0.016,0.156-0.054,0.299-0.119   c0.058-0.026,0.124-0.058,0.191-0.094c0.573-0.3,1.416-0.929,1.416-2.032c0,0,0,0,0.001,0c0.904,0.896,1.911,1.605,2.986,2.032   c0.722,0.287,1.476,0.446,2.25,0.446c0.775,0,1.528-0.159,2.251-0.446c1.064-0.422,2.063-1.123,2.961-2.008   c0.006,0.003,0.012,0.006,0.018,0.009c0.022,1.422,1.449,2.046,1.836,2.188C56.937,55.02,56.936,55.027,56.935,55.036z    M58.586,44.496c-0.142,0.802-0.456,1.462-0.788,1.745c-0.113,0.096-0.229,0.147-0.34,0.147c-0.02,0-0.04-0.001-0.06-0.005   c-0.073-0.012-0.141-0.049-0.2-0.104c-0.734,2.283-2.139,4.558-3.91,5.926c-1.033,0.798-2.192,1.286-3.417,1.286   c-1.231,0-2.397-0.495-3.436-1.302c-1.762-1.369-3.159-3.636-3.89-5.911c-0.06,0.055-0.127,0.092-0.2,0.104   c-0.02,0.003-0.041,0.005-0.061,0.005c-0.133,0-0.271-0.075-0.403-0.208c-0.309-0.309-0.592-0.935-0.726-1.685   c-0.177-0.987-0.037-1.859,0.311-2.109c0.047-0.034,0.099-0.057,0.153-0.066c0.02-0.003,0.04-0.005,0.059-0.005   c0.107,0,0.216,0.047,0.323,0.134c0,0,0.001-0.01,0.004-0.031c0.003-0.026,0.007-0.068,0.014-0.124   c0.106-0.837,0.769-4.796,3.849-4.796c0.113,0,0.231,0.005,0.351,0.017l11.009,5.667l0.893-0.862   c0.031,0.005,0.062,0.016,0.09,0.029C58.605,42.534,58.774,43.451,58.586,44.496z"/></g></svg>
                                    <p>Travailler avec Linkweb</p>
                                </div>
                                <ul className="bastitre">
                                    <li><span className="text-bleu">></span> Pourquoi travailler avec Linkweb ?</li><hr/>
                                    <li><span className="text-bleu">></span> Comment se déroule mon projet de création de site web ?</li><hr/>
                                    <li><span className="text-bleu">></span> Suis-je propriétaire de mon site web ?</li><hr/>
                                    <li><span className="text-bleu">></span> Combien coûte un site web ?</li><hr/>
                                    <li><span className="text-bleu">></span> Existe-t-il des facilités de paiement ?</li><hr/>
                                    <li><span className="text-bleu">></span> Que pensent nos clients de nos services ?</li><hr/>
                                    <li><span className="text-bleu">></span> Où découvrir des sites internet créés par Linkweb ?</li>
                                </ul>
                            </li>
                        </ul>
                    </div> */}
                    <div className="bloctextpages w-full lg:w-1/2 flex flex-col justify-center century text-justify">
                        
                        <p style={{marginBottom:'50px'}}><Link to="/faq/" className="text-bleu hover:text-black">Foire aux questions</Link> <span className="text-bleu">></span> Travailler avec Linkweb <span className="text-bleu">></span> Pourquoi travailler avec Linkweb ?</p>
                        <h3>De nombreuses entreprises ont déjà choisi Linkweb pour mener leur projet de développement à travers le webmarketing. De la création sites internet à la mise en place de votre stratégie de référencement, Linkweb met en œuvre votre communication digitale pour apporter de la visibilité à votre entreprise.</h3>
                        <br/>
                        <p>Choisir une <strong>agence web</strong> pour développer son projet de <strong>création de site internet</strong> ou de développement de <strong>stratégie digitale</strong> peut parfois s'avérer laborieux. Pour comprendre pourquoi <strong>Linkweb</strong> est l'<strong>agence web</strong> qu'il vous faut pour mener votre <strong>projet web</strong>, voici 6 raisons de travailler avec <strong>Linkweb</strong>.</p>
                        <br/>
                        <h2>1/ Une agence web experte dans son domaine d'activité</h2>
                        <br/>
                            <p>La première raison qui doit vous encourager à choisir Linkweb est que vous avez affaire à une <strong>agence spécialisée dans la création de sites internet et le référencement SEO (Search Engine Optimization)</strong> depuis plus de dix ans.</p>
                            <p>En effet, <strong>créer des sites internet</strong> fait partie de notre quotidien. C'est pourquoi, <strong>notre agence</strong> est à même de vous proposer un service de qualité pour atteindre vos <strong>objectifs de communication web</strong> et obtenir de <strong>nouveaux clients</strong>.</p>
                            <p>Linkweb est experte dans trois domaines d'activité en particulier : </p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Création de site web</h3>
                        <br/>
                        <p>Tout d'abord, notre <Link to="/" className="text-bleu hover:text-black font-bold"><strong>agence web à Toulouse</strong></Link> est compétente pour la <strong>création de votre site internet</strong>. Qu'il s'agisse d'un <strong>site vitrine</strong>, d'un <strong>site administrable</strong>, d'un <strong>site e commerce</strong> ou tout autre <strong>type de site internet</strong>, <strong>nos développeurs</strong> réalisent le <strong>développement sur mesure de sites web</strong> à <strong>votre image</strong> et qui respectent votre <strong>identité visuelle</strong>. Par l'utilisation de <strong>CMS</strong> (<strong>système de gestion de contenu</strong>comme <strong>Wordpress</strong>) ou bien par la <strong>création de sites "en dur"</strong>, nous proposons des <strong>solutions web</strong> variées et qui répondent à vos besoins.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Référencement Naturel</h3>
                        <br/>
                        <p><strong>Linkweb</strong> est également spécialisée dans le développement et l'application de <strong>stratégies de référencement naturel</strong>. Qu'il s'agisse d'une <strong>création de site</strong> ou bien de la réalisation d'une <strong>refonte du site</strong> de votre entreprise, <strong>nos solutions</strong> vous donnent accès à un <strong>site web visible dans les résultats des moteurs de recherche</strong> pour des <strong>requêtes recherchées</strong>. Nous mettons le <strong>web marketing</strong> à votre service en vous proposant des contenus et une <strong>optimisation technique</strong> qui vous permettront d'acquérir de la <strong>visibilité</strong>, de la <strong>notoriété</strong> et de la<strong>popularité sur le Web</strong>.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Gestion de campagnes Ads</h3>
                        <br/>
                        <p>Notre <strong>agence de communication web</strong> est également spécialisée dans la <strong>création de campagnes sponsorisées</strong> pour maximiser votre visibilité dans les <strong>pages de résultats de recherche</strong> grâce au <strong>référencement payant</strong>. Nous vous accompagnons dans la création de vos <strong>annonces Google Ads (anciennement Google Adwords)</strong> pour vous permettre d'obtenir un <strong>retour sur investissement</strong> grâce à des annonces de qualité et qui boosteront le <strong>taux de clics vers votre site web</strong>.</p>
                        <br/>
                        <h2>2/ Une agence web de proximité avec des interlocuteurs privilégiés</h2>
                        <br/>
                            <p><strong>Linkweb</strong> est une <strong>agence web</strong> à taille humaine située à <strong>Toulouse</strong> et <strong>Agen</strong>. Vous aurez affaire à des interlocuteurs à l'écoute et disponibles pour répondre à vos attentes et faire mûrir votre projet.</p>
                            <p>Un suivi régulier est mis en place pour que vous soyez au plus proche des avancées effectuées sur <strong>votre site internet</strong>.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Une agence web à taille humaine à Toulouse et Agen</h3>
                        <br/>
                        <p>Notre agence est une agence à taille humaine. Nous attachons une importance toute particulière aux relations entretenues avec nos partenaires. Nous pensons que la mise en place d'une <strong>collaboration de qualité</strong> est indispensable à la réussite de vos <strong>projets web</strong>. C'est pourquoi, nos collaborateurs font preuve d'accessibilité, d'écoute et de <strong>réactivité</strong> pour répondre à vos besoins.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Un référent unique pour suivre votre projet</h3>
                        <br/>
                        <p>Lorsque vous vous engagez avec <strong>Linkweb</strong>, un référent de votre projet est désigné pour assurer à la fois le <strong>travail sur votre site web</strong>, mais également le suivi vous permettant de vous tenir informé de l'avancée du projet. Des points réguliers sont fixés pour vous exposer le travail effectué et veiller à ce que des perspectives d'évolution en accord avec vos objectifs soient fixées. Ce suivi est important à la fois pour vous, comme pour nous. Nous devons connaître votre ressenti pour réaliser un travail qui collera au mieux à vos attentes.</p>
                        <br/>
                        <h2>3/ Une agence web proche des besoins de ses clients</h2>
                        <br/>
                        <p>Nos professionnels spécialisés dans le <strong>Web</strong> mettent leur <strong>expertise</strong> ainsi que leur expérience à votre profit pour vous permettre d'accéder à une <strong>stratégie web</strong> fondée sur vos besoins. Ceci est indispensable afin que vous vous y retrouviez lorsque vous ferez le bilan de votre projet.</p>
                        <p>Par ailleurs, il est indispensable de tenir compte des <strong>spécificités de votre entreprise</strong>, de <strong>votre projet</strong> et du contexte dans lequel il doit s'ancrer en vue de mettre en place une <strong>stratégie de communication digitale</strong> la plus adaptée possible.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Une agence à l'écoute face à vos problématique</h3>
                        <br/>
                        <p>Chaque projet est différent. Cette différence est ce qui constitue leur force. Pour <strong>développer un projet</strong> au plus près de vos besoins et qui vous ressemble, <strong>nos professionnels</strong> sont à l'écoute de vos problématiques. Un état des lieux est réalisé pour englober tous les paramètres nécessaires à la <strong>définition d'une stratégie sur-mesure</strong> déployée pour vous et vos clients. Le <strong>marketing digital</strong> est un outil qui doit vous permettre de répondre à vos besoins les plus spécifiques en termes de <strong>communication</strong>.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Des professionnels forces de proposition</h3>
                        <br/>
                        <p>Grâce à leurs connaissances aiguisées du <strong>Web</strong> et des problématiques <strong>digitales</strong>, nos professionnels sont forces de proposition pour vous donner accès à des <strong>améliorations techniques et éditoriales</strong>. En effet, grâce à leur expérience, ils vous proposeront de nouvelles évolutions pour faire vivre votre projet et <strong>atteindre efficacement vos cibles</strong>. Cela passe notamment par la mise en place d'une <strong>expérience utilisateur</strong> et d'une <strong>ergonomie</strong> de plateforme soignées.</p>
                        <br/>
                        <h2>4/ Des spécialistes du référencement et de la création de site internet</h2>
                        <br/>
                        <p>La <strong>conception de sites internet</strong> fait partie de notre quotidien. En choisissant <strong>Linkweb</strong>, vous bénéficierez d'un contact privilégié avec des <strong>spécialistes du référencement</strong> et du <strong>développement web</strong>. Cette approche est essentielle pour définir des projets réalistes.</p>
                        <p>Que ce soit pour la définition du <strong>webdesign</strong> ou le <strong>référencement d'un site internet</strong>, <strong>nos compétences</strong> nous permettent de <strong>développer des projets globaux maîtrisés</strong>. Nous définissons les opportunités qui vous permettront de tirer profit d'une <strong>stratégie marketing</strong> conçue pour le succès.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Des professionnels compétents...</h3>
                        <br/>
                        <p>Les professionnels de notre <strong>agence digitale à Toulouse</strong> sont formés pour mettre en place des plateformes de qualité qui répondent aux <strong>attentes des utilisateurs</strong>, comme celles des <strong>robots</strong>. <strong>Créer un site internet responsive design</strong> est devenue la norme à l'heure où les robots sont plus que jamais attentifs à la <strong>qualité des sites web</strong>. De plus, nous nous adonnons à la <strong>création de contenus optimisés</strong> pour vous, pour les <strong>utilisateurs</strong> et pour les <strong>moteurs de recherche</strong>. Un <strong>développeur web</strong> est chargé de la <strong>conception de site internet vitrine</strong>, <strong>e-commerce</strong> ou tout simplement qui vous correspond.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>...pour la mise en place d'un projet web maîtrisé</h3>
                        <br/>
                        <p>Le souci apporté au travail réalisé <strong>sur le site</strong> est tel qu'il est indispensable d'accorder une importance toute particulière aux détails pour <strong>être visible en première page des résultats de recherche</strong> pour des <strong>mots clés</strong> recherchés. Il n'est pas question de laisser de place au hasard pour vous permettre d'<strong>atteindre vos objectifs digitaux</strong>. Le <strong>site internet</strong> fait partie des <strong>supports de communication</strong> qui peuvent être particulièrement opportuns que ce soit en matière de <strong>visibilité</strong>, <strong>notoriété</strong>, <strong>image de marque</strong> ou <strong>e réputation</strong>.</p>
                        <br/>
                        <h2>5/ Un rôle de conseil dans le développement de votre entreprise sur le Web</h2>
                        <br/>
                        <p>Chaque <strong>nouveau site</strong> que nous créons répond à une nécessité bien spécifique. Pour mener à bien nos <strong>projets web</strong>, nous exerçons un rôle de <strong>conseil en stratégie digitale</strong>. Nous déterminerons parmi les différents <strong>moyens de communication</strong>, ceux qui seront les plus à même de répondre à vos besoins.</p>
                        <p>En effet, il peut-être souhaitable pour une entreprise d'intégrer des <strong>médias sociaux</strong> dans sa stratégie, par exemple, avec une <strong>visée de communication globale</strong>. Le <strong>webmarketing</strong> propose de nombreuses <strong>solutions digitales</strong> qui permettent de <strong>générer du trafic</strong> et de <strong>fidéliser</strong> les utilisateurs. Grâce à nos différentes <strong>expertises</strong>, nous chercherons la meilleure manière pour vous, de tirer profit des <strong>nombreux outils</strong> qui s'offrent à vous.</p>
                        <p>Du <strong>choix du nom de domaine de votre site</strong>, jusqu'à la <strong>conception web</strong> et la <strong>recherche de visibilité</strong>, notre <strong>agence web</strong> remplit un rôle de <strong>conseil en stratégie</strong> et de <strong>conseil en communication web</strong>. Il est important d'activer tous les <strong>leviers</strong> qui vous seront bénéfiques. Il en va de notre position de vous donner accès aux solutions les plus performantes possibles.</p>
                        <br/>
                        <h2>6/ Plus de 300 clients ont fait confiance à Linkweb</h2>
                        <br/>
                        <p>Avec plus de dix années d'ancienneté, ce sont déjà des <strong>centaines de clients qui ont fait confiance à Linkweb</strong> pour le <strong>développement de leur projet web</strong>. Qu'il s'agisse de la <strong>création de sites web</strong> ou de l'application de <strong>stratégies de visibilité</strong>, notre <strong>agence web</strong> a déjà contribué à de très nombreux projets.</p>
                        <p>C'est notamment grâce à cette expérience acquise auprès de <strong>professionnels issus de tous secteurs d'activité</strong> que notre <strong>agence de référencement</strong> est à même de proposer des services complets et qualifiés.</p>
                        <p>Du <strong>web design</strong> à la <strong>création graphique</strong> des éléments de <strong>votre site web</strong> en passant par la délimitation de son <strong>hébergement web</strong>, <strong>Linkweb</strong> est le <strong>prestataire web</strong> qui vous accompagne dans la <strong>réalisation d'un site web</strong> taillé pour vous.</p>
                        <div className="w-1/2">
                            <ButtonBlog  url="/agence-de-communication-agen-47-toulouse-31/" text="Consulter nos réalisations" position="center" />
                        </div>
                    </div>
                    <div className="w-full mx-auto lg:w-1/2 xl:w-1/4 px-0 md:px-24 lg:px-10 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start" >
                        <div className="bloccontactsticky w-full lg:w-full flex flex-col justify-center items-center century text-justify flex" style={{background:'#3c3c3cfa url(' + bgbloc +')', backgroundBlendMode:'overlay', backgroundSize:'cover', backgroundPosition:'center'}}>
                                    <h2>Vous souhaitez mettre en place un projet web ?</h2>
                                    <br/>
                                    <h3>Linkweb met en place votre projet de création de site web.</h3>
                                    <br/>
                                    <div className="w-1/2 flex flex-row justify-center items-center">
                                    <br/>
                                        <BoutonBlog  url="/contact-agence-web-toulouse/" text="Contactez-nous" position="center" />
                                    </div>
                        </div>
                    </div>
                    
                </section>

                
                
            {/* </PageTransition> */}
        </Layout>
    );
}
};



export default TravaillerAvecLinkweb;
