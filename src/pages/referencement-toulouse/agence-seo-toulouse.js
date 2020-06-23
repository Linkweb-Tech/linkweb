import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Button from "../../components/button";
import RoundButton from "../../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../../components/seo";
import LastPosts from '../../components/lastposts';

import "../../scss/global.scss";

import Bg from "../../images/agence-seo-toulouse-bg.jpg";
import visibilite from "../../images/etre-visible-referencement-naturel.jpg";
import performance from "../../images/performances-referencement-naturel.jpg";
import moteur from "../../images/moteurs-referencement-naturel.jpg";
import utilisateur from "../../images/utilisateurs-seo.jpg";
import concurrence from "../../images/concurrence-referencement-naturel.jpg";
import opportunité from "../../images/opportunites-seo.jpg";
// import bgDev from '../../images/bg-dev.jpg';
import bgDev from '../../images/cta-background-agence-web.jpg';


class AgenceSEOToulouse extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence SEO Toulouse - Agence de Référencement Linkweb"
                    description="Définition et application de votre stratégie de référencement naturel. Linkweb est une agence SEO spécialisée dans le référencement depuis plus de 10 ans."
                    keywords={[`Agence SEO à Agen`, `Agence SEO  à Toulouse`, `Référencement SEO Toulouse`, `Référencement SEO Agen`]}
                    url="https://linkweb.fr/referencement-toulouse/agence-seo-toulouse/"
                    nom="Agence SEO à Toulouse"
                    slug="referencement-toulouse/agence-seo-toulouse/"
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
                    <section className="w-full bloctitrescreen mx-auto px-2 md:px-4 py-6 bg-no-repeat bg-cover bg-center flex md:flex-row flex-col justify-center items-center" style={{backgroundImage:'url(' + Bg +')', backgroundColor:'rgba(0,0,0,0.2)', backgroundBlendMode:'overlay', backgroundPosition:'center bottom', height:'650px'}}>
                        <div className="order-last md:order-first w-full md:w-1/3 max-w-5xl mx-auto p-1 my-4 md:mx-6 mx-2" >
                            <RoundButton url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                        <div className="w-full md:w-2/3 mt-6 p-1">
                            <h1 data-aos="fade-up" data-aos-delay="500" className="century text-2xl sm:text-3xl md:text-5xl text-center text-white">
                            Agence SEO à Toulouse <span className="text-bleu">(31)</span>
                            </h1>
                            <br/>
                            <h3 className="italic text-lg max-w-4xl text-center md:text-2xl text-white mx-auto block">Maîtrisez votre communication digitale et atteignez la première page des moteurs de recherche. L'agence SEO Linkweb met en œuvre votre stratégie de référencement naturel.</h3>
                        </div>
                    </section>
                    <section className="max-w-5xl century text-center w-full mx-auto px-4 py-6 my-4">
                        <br/>
                        <h2 data-aos='fade-right' className="text-4xl">
                            Avoir un site internet contribue à développer l'image de marque et le chiffre d'affaires de son entreprise. Mais que serait un site internet s'il n'était pas visible ? 
                        </h2>
                        <br/><br/>
                        <hr className="bleu w-1/3" style={{borderTop:'1px solid #37cfee'}}/>
                        <br/><br/>
                        <p>Le <strong>référencement naturel</strong> fait partie des <strong>canaux d'acquisition de trafic</strong> les plus importants sur le <strong>Web</strong>.</p>
                        <p>Investir les <strong>premières positions des résultats de recherche des moteurs</strong> contribue à <strong>générer du trafic qualifié</strong> pour vous permettre d'<strong>atteindre vos objectifs</strong>.</p>
                    </section>
                    <section className="flex flex-col items-center lg:flex-row text-justify w-full mx-auto px-4 py-6 my-4">
                        <div className="w-full lg:w-1/2 px-12 xl:px-24 py-12" >
                            <h2 className="century uppercase text-2xl tracking-wider pb-6" data-aos="zoom-in">
                                <span className="text-bleu">/</span>Agence SEO Toulouse : Pourquoi choisir le référencement naturel ?
                            </h2>
                            <h4 className="century text-lg tracking-wider pb-6 text-justify" data-aos='fade-left'>
                                <span className="font-bold">Il existe plusieurs façons d'obtenir de la visibilité pour son site internet. Le référencement naturel est une solution d'avenir.</span>
                            </h4>
                            <p>Non seulement, il fait partie des principaux <strong>générateurs de trafic en ligne</strong>, mais il faut savoir qu'il est accessible à tous.</p>
                            <br/>
                            <p>Que vous soyez auto-entrepreneur, issu d'une profession libérale ou à la tête d'un groupe international, vous pourrez tirer bénéfice du <strong>SEO (Search Engine Optimization)</strong>. Mais alors, quelle est la recette ? </p>
                            
                        </div>
                        <div className="w-full lg:w-1/2 py-12 flex flex-col justify-center order-first lg:order-last">
                            <img className="mx-auto block" src={visibilite} alt="Référencement Naturel Toulouse" />
                        </div>
                    </section>
                    <section className="flex flex-col items-center lg:flex-row text-justify w-full mx-auto px-4 py-6 my-4">
                        <div className="w-full lg:w-1/2 py-12 flex flex-col justify-center order-first">
                            <img className="mx-auto block" src={performance} alt="Référencement Toulouse" />
                        </div>
                        <div className="w-full lg:w-1/2 px-12 xl:px-24 py-12" >
                            <h3 className="century uppercase text-2xl tracking-wider pb-6" data-aos="zoom-in">
                                <span className="text-bleu">/</span>Pourquoi le référencement naturel est un générateur de visibilité puissant ?
                            </h3>
                            <p>Le <strong>référencement naturel</strong> est une discipline issue du <strong>webmarketing</strong> qui consiste à construire sa <strong>visibilité sur le Web</strong> à partir de l'analyse de la demande. En mettant en place une <strong>stratégie de référencement sur votre site web</strong>, ce sont désormais les utilisateurs qui vous trouvent et qui viennent à vous.</p>
                            <br/>
                            <p>Pour cela, un <strong>référenceur</strong> ou <strong>consultant SEO</strong>, réalise un audit avant de déterminer les <strong>mots-clés</strong> générant des <strong>requêtes</strong> fréquemment effectuées et qui pourront vous apporter de la visibilité. Ceci a également pour but de vous procurer un <strong>trafic qualifié</strong> : notre travail est de vous permettre d'<strong>être visible sur des requêtes stratégiques</strong> qui vous permettront d'attirer des personnes présentes dans votre secteur géographique et pertinentes en fonction du profil que vous avez ciblé.</p>
                            <br/>
                            <p>En ce sens, le <strong>référencement naturel</strong> est un vecteur de développement important pour une entreprise. Pour en tirer profit, l'<strong>optimisation technique et éditoriale de son site web</strong> va être nécessaire.</p>
                            
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century uppercase">
                        <span className="text-bleu">/</span>Agence SEO Toulouse : les solutions de référencement naturel de Linkweb
                        </h2>
                        <hr className="blue"></hr>
                        
                    </section>
                    <section className="max-w-6xl w-full mx-auto px-4 pt-12 pb-0 my-2 text-xl font-bold century text-center">
                        <p className="font-bold"><strong>Linkweb</strong> est depuis plus de dix ans une <strong>agence spécialisée en référencement SEO</strong>. Le <strong>référencement naturel</strong> est un des <strong>leviers</strong> principaux dans l'<strong>acquisition de visibilité sur le Web</strong> grâce aux <strong>moteurs de recherche</strong>.</p>
                        <br/>
                        <p className="text-lg">C'est pourquoi, nous accompagnons les professionnels qui souhaitent se lancer pour investir cette discipline en vue d'obtenir un <strong>retour sur investissement</strong> pour leur entreprise. De la <strong>définition de la stratégie de visibilité</strong> jusqu'à la mise en place des différentes <strong>techniques de référencement</strong>, notre <strong>agence de référencement</strong> vous accompagne pour vous permettre d'effectuer les choix qui feront grandir votre entreprise.</p>
                        <br/>
                        <hr className="bleu w-1/3" style={{borderTop:'1px solid #37cfee'}}/>
                        <br/>
                    </section>
                    <section className="flex flex-wrap justify-center text-justify px-8 flex-col md:flex-row items-center">
                        <div className="w-full service-seo px-6 lg:px-8 md:w-1/2 lg:w-1/4 century">
                            <br/>
                            <svg width="60px" className="mx-auto block" fill="#37cfee" viewBox="0 0 64 80"><g><path d="M10.302,29.014c0,0.001,0.001,0.002,0.001,0.003C10.303,29.016,10.303,29.015,10.302,29.014z M10.292,28.977L10.292,28.977   L10.292,28.977z M24.28,58.273c-0.429-0.498-1.189-1.121-2.835-0.795c-0.508,0.122-2.197,0.495-4.129,0.585   c-2.746,0.128-4.8-0.369-6.104-1.479c-1.132-0.964-1.686-2.375-1.56-3.971l0.024-0.293l0.096-0.265   c0.173-0.515,0.366-1.72-0.117-2.241c-0.809-0.765-1.362-2.094-1.005-3.55c-0.582-0.912-0.832-1.846-0.728-2.732   c0.038-0.316,0.119-0.618,0.24-0.902c-1.201-0.505-2.384-1.309-2.907-2.577c-0.279-0.676-0.582-2.044,0.521-3.62L5.91,36.26   c1.104-1.275,2.261-2.868,3.096-4.258c1.289-2.145,1.292-2.916,1.286-3.014c-0.446-1.191-0.943-2.532-0.765-4.062   c0.405-4.64,2.924-15.798,17.477-19.688l0.276-0.074c0.112-0.034,0.25-0.071,0.409-0.097c5.234-1.266,10.547-0.889,15.367,1.091   c4.51,1.852,8.41,4.999,11.277,9.103c2.858,4.091,4.468,8.817,4.655,13.668c0.202,5.22-1.287,10.351-4.305,14.839   c-0.892,1.399-1.961,2.885-3.091,4.298l-0.095,0.12l-0.092,0.087c-0.157,0.163-2.292,2.531,0.161,7.912   c0.554,1.216,0.121,2.655-1.015,3.361l0,0l-0.016-0.025c-2.089-3.502-2.928-6.675-2.496-9.43c0.348-2.214,1.418-3.368,1.634-3.581   c1.076-1.346,2.089-2.756,2.933-4.082l0.018-0.026c2.73-4.053,4.076-8.679,3.894-13.376c-0.169-4.376-1.626-8.646-4.213-12.348   c-2.594-3.713-6.118-6.559-10.19-8.231c-4.351-1.787-9.156-2.119-13.898-0.963l-0.066,0.017l-0.067,0.009   c-0.033,0.004-0.107,0.029-0.167,0.048l-0.243,0.081h-0.073c-13.028,3.501-15.26,13.418-15.615,17.522L11.984,25.2   c-0.115,0.953,0.248,1.92,0.631,2.943c0.257,0.672,0.396,1.92-1.36,4.913c-0.912,1.555-2.202,3.345-3.454,4.796l-0.018,0.023   c-0.317,0.463-0.397,0.867-0.244,1.237c0.258,0.627,1.241,1.223,2.629,1.595l0.917,0.245v1.97l-0.416,0.369   c-0.172,0.153-0.268,0.327-0.293,0.533c-0.046,0.388,0.177,0.923,0.611,1.465l0.471,0.59l-0.308,0.688   c-0.391,0.871,0.146,1.4,0.208,1.457l0.047,0.046c1.665,1.7,0.825,4.426,0.708,4.777c-0.054,0.79,0.182,1.414,0.701,1.856   c1.676,1.427,6.014,0.864,8.074,0.367l0.044-0.011c2.704-0.548,4.331,0.569,5.221,1.601c0.623,0.724,0.982,1.513,1.164,2.008   c0.093,0.253-0.053,0.531-0.315,0.597l-1.528,0.387c-0.22,0.056-0.446-0.059-0.532-0.269C24.822,59.085,24.61,58.656,24.28,58.273z   "/><g><path d="M40.483,22.096c-0.293-0.88-0.587-1.761-1.027-2.494l0.88-2.054l-2.935-2.935l-2.054,0.88    c-0.88-0.44-1.614-0.734-2.494-1.027l-0.734-2.054h-4.255l-0.734,2.054c-0.88,0.293-1.761,0.587-2.494,1.027l-2.054-0.88    l-2.935,2.935l0.88,2.054c-0.44,0.734-0.734,1.614-1.027,2.494l-2.054,0.734v4.255l2.054,0.734    c0.293,0.88,0.587,1.761,1.027,2.494l-0.88,2.054l2.935,2.935l2.054-0.88c0.734,0.44,1.614,0.734,2.494,1.027l0.734,2.054h4.255    l0.734-2.054c0.88-0.293,1.761-0.587,2.494-1.027l2.054,0.88l2.935-2.935l-0.88-2.054c0.44-0.734,0.734-1.614,1.027-2.494    l2.054-0.734v-4.255L40.483,22.096z M29.918,30.166c-2.788,0-5.136-2.348-5.136-5.136s2.348-5.136,5.136-5.136    s5.136,2.348,5.136,5.136S32.706,30.166,29.918,30.166z"/><path d="M41.657,41.904c0-0.44,0-0.88,0-1.174l0.734-0.734l-0.734-1.761H40.63c-0.293-0.293-0.587-0.587-0.88-0.88v-1.027    l-1.761-0.734l-0.734,0.734c-0.44,0-0.88,0-1.174,0l-0.734-0.734l-1.761,0.734v1.027c-0.293,0.293-0.587,0.587-0.88,0.88h-1.027    l-0.734,1.761l0.734,0.734c0,0.44,0,0.88,0,1.174l-0.587,0.734l0.734,1.761h1.027c0.293,0.293,0.587,0.587,0.88,0.88v1.027    l1.761,0.734l0.734-0.734c0.44,0,0.88,0,1.174,0l0.734,0.734l1.761-0.734v-1.027c0.293-0.293,0.587-0.587,0.88-0.88h1.027    l0.734-1.761L41.657,41.904z M35.787,43.518c-1.174-0.44-1.761-1.907-1.321-3.081c0.44-1.174,1.907-1.761,3.081-1.321    s1.761,1.907,1.321,3.081C38.429,43.372,37.108,43.958,35.787,43.518z"/><path d="M51.047,32.514c0-0.44,0-0.88,0-1.174l0.734-0.734l-0.734-1.761H50.02c-0.293-0.293-0.587-0.587-0.88-0.88v-1.027    l-1.761-0.734l-0.734,0.734c-0.44,0-0.88,0-1.174,0l-0.734-0.587l-1.761,0.734v1.027c-0.293,0.293-0.587,0.587-0.88,0.88H41.07    l-0.734,1.761l0.734,0.734c0,0.44,0,0.88,0,1.174l-0.734,0.734l0.734,1.761h1.027c0.293,0.293,0.587,0.587,0.88,0.88v1.027    l1.761,0.734l0.734-0.734c0.44,0,0.88,0,1.174,0l0.734,0.734l1.761-0.734v-1.027c0.293-0.293,0.587-0.587,0.88-0.88h1.027    l0.734-1.761L51.047,32.514z M45.178,34.128c-1.174-0.44-1.761-1.907-1.321-3.081s1.907-1.761,3.081-1.321    s1.761,1.907,1.321,3.081C47.819,33.981,46.352,34.568,45.178,34.128z"/></g></g></svg>
                            <h3 className="text-2xl text-center font-bold">Définition de votre stratégie de référencement</h3>
                            <br/>
                            <h4 className="font-bold">Qu'il s'agisse d'une création de site internet ou d'une refonte, il est nécessaire de développer une stratégie de visibilité de part le travail apporté au référencement d'un site.</h4>
                            <br/>
                            <p>Nous développons votre <strong>stratégie de référencement web</strong> pour développer votre visibilité dans les <strong>premiers résultats d'un moteur de recherche comme Google</strong>. <br/><br/>Pour cela, un <strong>expert SEO</strong> réalise un <strong>audit SEO (audit de référencement) de votre site web</strong> et de votre <strong>concurrence</strong> pour dénicher des requêtes qui constitueront des opportunités pour vous.</p>
                        </div>
                        <div className="w-full service-seo px-8 md:w-1/2 lg:w-1/4 century">
                            <br/>
                            <svg width="60px" className="mx-auto block" fill="#37cfee" viewBox="0 0 64 80"><path d="M5.427,52.722c0.156,0.49,0.353,0.962,0.587,1.412c0.204,0.393,0.156,0.868-0.157,1.181l-1.756,1.756l2.828,2.828  l1.756-1.756c0.313-0.313,0.788-0.361,1.181-0.157c0.45,0.234,0.922,0.431,1.412,0.587C11.699,58.707,12,59.076,12,59.517V62h4  v-2.483c0-0.442,0.301-0.811,0.722-0.945c0.49-0.156,0.962-0.353,1.412-0.587c0.393-0.204,0.868-0.156,1.181,0.157l1.756,1.756  l2.828-2.828l-1.756-1.756c-0.313-0.313-0.361-0.788-0.157-1.181c0.234-0.45,0.431-0.922,0.587-1.412  C22.707,52.301,23.076,52,23.518,52H26v-4h-2.482c-0.442,0-0.811-0.301-0.945-0.722c-0.156-0.49-0.353-0.962-0.587-1.412  c-0.204-0.393-0.156-0.868,0.157-1.181l1.756-1.756L21.071,40.1l-1.756,1.756c-0.313,0.313-0.788,0.361-1.181,0.157  c-0.45-0.234-0.922-0.431-1.412-0.587C16.301,41.293,16,40.924,16,40.482V38h-4v2.482c0,0.442-0.301,0.811-0.722,0.945  c-0.49,0.156-0.962,0.353-1.412,0.587c-0.393,0.204-0.868,0.156-1.181-0.157L6.929,40.1l-2.828,2.828l1.756,1.756  c0.313,0.313,0.361,0.788,0.157,1.181c-0.234,0.45-0.431,0.922-0.587,1.412C5.293,47.699,4.924,48,4.482,48H2v4h2.482  C4.924,52,5.293,52.301,5.427,52.722z M14,44c3.314,0,6,2.686,6,6s-2.686,6-6,6s-6-2.686-6-6S10.686,44,14,44z"/><path d="M37.427,47.278C37.293,47.699,36.924,48,36.482,48H34v4h2.482c0.442,0,0.811,0.301,0.945,0.722  c0.156,0.49,0.353,0.962,0.587,1.412c0.204,0.393,0.156,0.868-0.157,1.181l-1.756,1.756l2.828,2.828l1.756-1.756  c0.313-0.313,0.788-0.361,1.181-0.157c0.45,0.234,0.922,0.431,1.412,0.587C43.699,58.707,44,59.076,44,59.517V62h4v-2.483  c0-0.442,0.301-0.811,0.722-0.945c0.49-0.156,0.962-0.353,1.412-0.587c0.393-0.204,0.868-0.156,1.181,0.157l1.756,1.756l2.828-2.828  l-1.756-1.756c-0.313-0.313-0.361-0.788-0.157-1.181c0.234-0.45,0.431-0.922,0.587-1.412C54.707,52.301,55.076,52,55.518,52H58v-4  h-2.482c-0.442,0-0.811-0.301-0.945-0.722c-0.156-0.49-0.353-0.962-0.587-1.412c-0.204-0.393-0.156-0.868,0.157-1.181l1.756-1.756  L53.071,40.1l-1.756,1.756c-0.313,0.313-0.788,0.361-1.181,0.157c-0.45-0.234-0.922-0.431-1.412-0.587  C48.301,41.293,48,40.924,48,40.482V38h-4v2.482c0,0.442-0.301,0.811-0.722,0.945c-0.49,0.156-0.962,0.353-1.412,0.587  c-0.393,0.204-0.868,0.156-1.181-0.157L38.929,40.1l-2.828,2.828l1.756,1.756c0.313,0.313,0.361,0.788,0.157,1.181  C37.78,46.316,37.583,46.787,37.427,47.278z M46,44c3.314,0,6,2.686,6,6s-2.686,6-6,6s-6-2.686-6-6S42.686,44,46,44z"/><path d="M5.427,16.722c0.156,0.49,0.353,0.962,0.587,1.412c0.204,0.393,0.156,0.868-0.157,1.181l-1.756,1.756l2.828,2.828  l1.756-1.756c0.313-0.313,0.788-0.361,1.181-0.157c0.45,0.234,0.922,0.431,1.412,0.587C11.699,22.707,12,23.076,12,23.517V26h4  v-2.483c0-0.442,0.301-0.811,0.722-0.945c0.49-0.156,0.962-0.353,1.412-0.587c0.393-0.204,0.868-0.156,1.181,0.157l1.756,1.756  l2.828-2.828l-1.756-1.756c-0.313-0.313-0.361-0.788-0.157-1.181c0.234-0.45,0.431-0.922,0.587-1.412  C22.707,16.301,23.076,16,23.518,16H26v-4h-2.482c-0.442,0-0.811-0.301-0.945-0.722c-0.156-0.49-0.353-0.962-0.587-1.412  c-0.204-0.393-0.156-0.868,0.157-1.181l1.756-1.756L21.071,4.1l-1.756,1.756c-0.313,0.313-0.788,0.361-1.181,0.157  c-0.45-0.234-0.922-0.431-1.412-0.587C16.301,5.293,16,4.924,16,4.482V2h-4v2.482c0,0.442-0.301,0.811-0.722,0.945  c-0.49,0.156-0.962,0.353-1.412,0.587C9.473,6.218,8.998,6.17,8.685,5.857L6.929,4.1L4.101,6.929l1.756,1.756  C6.17,8.998,6.218,9.473,6.014,9.866c-0.234,0.45-0.431,0.922-0.587,1.412C5.293,11.699,4.924,12,4.482,12H2v4h2.482  C4.924,16,5.293,16.301,5.427,16.722z M14,8c3.314,0,6,2.686,6,6s-2.686,6-6,6s-6-2.686-6-6S10.686,8,14,8z"/><rect x="28" y="49" width="4" height="2"/><path d="M62,31H15v-2h-2v3c0,0.552,0.447,1,1,1h47v16h-1v2h2c0.553,0,1-0.448,1-1V32C63,31.448,62.553,31,62,31z"/><polygon points="41,17 45,14 41,11 41,13 28,13 28,15 41,15 "/><path d="M51,23c2.761,0,5-1.343,5-3c0-1.451-1.718-2.661-4-2.94V2h-2v15.06c-2.282,0.278-4,1.488-4,2.94C46,21.657,48.239,23,51,23z  "/><polygon points="58,9 62,9 62,3 58,3 58,2 53,2 53,8 58,8 "/><circle cx="14" cy="49" r="2"/><path d="M17.648,53.399C17.027,51.99,15.64,51,14,51c-1.1,0-2.1,0.45-2.83,1.17c-0.347,0.352-0.622,0.768-0.824,1.222  C11.259,54.375,12.552,55,14,55C15.445,55,16.736,54.378,17.648,53.399z"/><path d="M45.445,50.832l3,2l1.109-1.664L47,49.465V46h-2v4C45,50.334,45.167,50.646,45.445,50.832z"/><rect x="11" y="14" width="2" height="2"/><rect x="15" y="12" width="2" height="4"/></svg>
                            <h3 className="text-2xl text-center font-bold">Mise en place des optimisations nécessaires</h3>
                            <br/>
                            <h4 className="font-bold">Dès la création du site et le déploiement de la nouvelle arborescence, il est indispensable de mettre en place des optimisations techniques afin de ne pas perdre de temps en vue du positionnement dans les résultats de recherche.</h4>
                            <br/>
                            <p>Une fois votre stratégie définie, votre <strong>consultant en référencement naturel</strong> se chargera de l'<strong>optimisation SEO de votre site web</strong> vis-à-vis des <strong>algorithmes des moteurs de recherche</strong> (<strong>balises</strong>, <strong>indexation des pages</strong>, <strong>maillage interne</strong>, etc.). <br/><br/>En se pliant aux critères techniques imposés, vous pourrez investir les <strong>résultats des moteurs de recherche</strong> pour des <strong>mots-clés recherchés</strong>.</p>
                        </div>
                        <div className="w-full service-seo px-8 md:w-1/2 lg:w-1/4 century">
                            <br/>
                            <svg width="60px" className="mx-auto block" fill="#37cfee" viewBox="0 0 128 160"><circle cx="110" cy="22" r="2"/><circle cx="102" cy="22" r="2"/><circle cx="94" cy="22" r="2"/><rect x="60" y="56" width="32" height="4"/><rect x="60.12" y="32" width="47.88" height="4"/><path d="M12,32V60H52V32ZM28.39,46,16,54.26V37.74ZM20.61,36H43.39L32,43.6ZM32,48.4,43.39,56H20.61ZM35.61,46,48,37.74V54.26Z"/><rect x="12" y="68" width="64" height="4"/><rect x="12" y="80" width="64" height="4"/><rect x="60" y="44" width="48" height="4"/><path d="M5.7,100H48v12H28v4H92v-4H72V100h4V96H5.7A1.7,1.7,0,0,1,4,94.3V17.7A1.7,1.7,0,0,1,5.7,16H114.3a1.7,1.7,0,0,1,1.7,1.7V66h4V17.7a5.7,5.7,0,0,0-5.7-5.7H5.7A5.7,5.7,0,0,0,0,17.7V94.3A5.7,5.7,0,0,0,5.7,100Z"/><path d="M124.11,71.14l-6.48,1.43a20,20,0,0,0-7.74-4.48l-2-6.32a26,26,0,0,0-7.78,0l-2,6.32a20,20,0,0,0-7.74,4.48l-6.48-1.43A25.73,25.73,0,0,0,80,77.87l4.48,4.89a20,20,0,0,0,0,8.94L80,96.6a25.73,25.73,0,0,0,3.89,6.74l6.48-1.43a20,20,0,0,0,7.74,4.48l2,6.32a26,26,0,0,0,7.78,0l2-6.32a20,20,0,0,0,7.74-4.48l6.48,1.43A25.73,25.73,0,0,0,128,96.6l-4.48-4.89a20,20,0,0,0,0-8.94L128,77.87A25.73,25.73,0,0,0,124.11,71.14ZM104,96a8.8,8.8,0,1,1,8.8-8.8A8.8,8.8,0,0,1,104,96Z"/></svg>
                            <h3 className="text-2xl text-center font-bold">Création de contenus optimisés et Netlinking</h3>
                            <br/>
                            <h4 className="font-bold">Parallèlement, un expert en référencement naturel SEO est chargé de créer des contenus optimisés et de développer la popularité de votre site internet sur le Web.</h4>
                            <br/>
                            <p>Un <strong>bon référencement</strong> n'est possible qu'avec un <strong>contenu de qualité</strong>. Pour cela, nos référenceurs produisent un <strong>texte optimisé</strong> en accord avec le <strong>champ sémantique de vos mots-clés</strong>, tout en répondant aux <strong>interrogations de vos cibles</strong>. <br/><br/>Les contenus sont produits en fonction des <strong>intentions de recherche des utilisateurs</strong>. De plus, nous déployons une <strong>stratégie d'acquisition de backlinks (liens entrants ou liens externes)</strong> pour <strong>améliorer la popularité de votre site web</strong>.</p>
                        </div>
                        <div className="w-full service-seo px-8 md:w-1/2 lg:w-1/4 century">
                            <br/>
                            <svg width="60px" className="mx-auto block" fill="#37cfee" viewBox="0 0 128 160"><path d="M126,103H2c-1.104,0-2-0.9-2-2.014C0,99.875,0.896,99,2,99h124c1.104,0,2,0.875,2,1.986C128,102.1,127.104,103,126,103z"/><path d="M111.197,49.587l-19.193-15.25l-5.379,4.332c-0.434,0.348-1.061,0.275-1.406-0.157c-0.345-0.435-0.273-1.067,0.156-1.416  l6.621-5.33l18.807,14.944l15.389-21.295c0.324-0.451,0.949-0.549,1.396-0.223c0.447,0.326,0.546,0.957,0.221,1.406L111.197,49.587z  "/><polygon points="61.296,58.349 60.005,56.812 63.139,54.146 64.43,55.683 "/><polygon points="75.861,47.184 74.57,45.646 77.704,42.98 78.995,44.518 "/><path d="M76,45.934"/><path d="M65,54.792"/><path d="M65,54.792"/><path d="M62,57.206"/><path d="M1,80.689c-0.279,0-0.557-0.116-0.755-0.348c-0.362-0.419-0.318-1.056,0.099-1.42L28.965,53.89L46.991,68l5.384-4.336  c0.433-0.347,1.06-0.276,1.406,0.157c0.345,0.435,0.274,1.066-0.156,1.414l-6.616,5.328L29.035,56.496L1.656,80.443  C1.467,80.607,1.233,80.689,1,80.689z"/><ellipse cx="29" cy="55.193" rx="3" ry="3.02"/><ellipse cx="46.5" cy="68.78" rx="3" ry="3.02"/><ellipse transform="matrix(-0.9988 -0.0497 0.0497 -0.9988 135.482 103.6438)" cx="69.03" cy="50.137" rx="5" ry="5.032"/><ellipse cx="92" cy="33.052" rx="3" ry="3.02"/><ellipse cx="110.5" cy="47.646" rx="3" ry="3.019"/><path d="M69.139,36.014c7.721,0,14,6.321,14,14.091s-6.279,14.09-14,14.09c-7.72,0-14-6.32-14-14.09S61.419,36.014,69.139,36.014   M69.139,31.988c-9.939,0-18,8.11-18,18.116c0,10.005,8.059,18.116,18,18.116c9.941,0,18-8.111,18-18.116  S79.08,31.988,69.139,31.988L69.139,31.988z"/><path d="M94.001,81.361c-0.569,0-1.136-0.244-1.53-0.719L78.357,63.752c-0.711-0.85-0.604-2.12,0.242-2.835  c0.849-0.717,2.107-0.606,2.817,0.244l14.112,16.89c0.712,0.852,0.604,2.12-0.242,2.838C94.912,81.206,94.455,81.361,94.001,81.361z  "/></svg>
                            <h3 className="text-2xl text-center font-bold">Suivi de performances et de positionnement</h3>
                            <br/>
                            <h4 className="font-bold">Nous réalisons un suivi afin d'évaluer votre stratégie digitale et éliminer les facteurs bloquants pour assurer le meilleur classement possible de votre site dans les pages de résultats.</h4>
                            <br/>
                            <p className="text-base">Nous mettons tout en œuvre pour vous permettre d'<strong>être visible sur des mots-clés pertinents</strong> et vous assurer un nombre maximal de <strong>conversions</strong> en fonction de vos objectifs. <br/><br/>Ce travail est indispensable pour évaluer votre stratégie sur le long terme et ouvrir <strong>votre site web</strong> à des perspectives d'évolution grâce au <strong>marketing digital</strong>.</p>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <br/>
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        Vous souhaitez améliorer votre visibilité sur Internet ?<br/>SOYEZ <span className="text-bleu">NATUREL !</span>
                        </h2><br/>
                        <hr className="blue"></hr>
                    </section>
                    <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
                    <div className="w-full xl:w-1/3 one px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                        <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                        <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                            <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>JE DÉCOUVRE LE RÉFÉRENCEMENT NATUREL
                            </h3>
                            <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                            Le <strong>référencement naturel (SEO)</strong> se distingue du <strong>référencement payant</strong> ou <strong>référencement Google Ads</strong>. Si ce dernier se concentre sur la <strong>sponsorisation de liens</strong>, le <strong>SEO</strong> demande d’être rigoureux, régulier et attentif pour faire progresser un site sur les <strong>moteurs de recherche</strong>.
                            </div>
                            <Button url="/contact-agence-web-toulouse/" text="Découvrir le SEO" position="center" />
            
                        </section>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 two px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                        <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
                        <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                            <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>JE VEUX ÊTRE ACCOMPAGNÉ POUR DÉFINIR MES BESOINS
                            </h3>
                            <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                            Vous souhaitez mettre en place une <strong>stratégie de référencement naturel</strong> pour <strong>améliorer la visibilité de votre site internet</strong> ? Nous définissons les contours de votre projet pour vous permettre de mettre en place une stratégie efficace selon vos besoins.
                            </div>
                            <Button url="/contact-agence-web-toulouse/" text="Prendre contact" position="center" />
                        </section>
                        </div>
                        </div>
                    <div className="w-full xl:w-1/3 three px-auto">
                        <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                        <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
                        <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                            <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>JE FAIS LE CHOIX DE CONSULTANTS POUR MON SEO
                            </h3>
                            <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                Optez pour la mise en place de votre <strong>stratégie de référencement naturel</strong>. Des <strong>consultants SEO</strong> vous accompagnent pour déterminer les objectifs de la <strong>création de votre site internet</strong> qui vous permettra d’<strong>optimiser votre visibilité en ligne</strong>, dans le but d'obtenir des contacts, ou bien de vendre vos produits.
                            </div>
                            <Button url="/contact-agence-web-toulouse/" text="Prendre rendez-vous" position="center" />
                        </section>
                        
                        </div>
            
                    </div>
                    </section>
                    <section className="w-full h-full flex flex-col justify-center items-center px-4 pt-12 pb-0 mt-2 bg-darkgrey text-center text-white">
                        <div className="w-full">
                            <h2 data-aos='fade-right' className="uppercase text-3xl century">
                            <span className="text-bleu">/</span>Les 4 piliers du référencement naturel
                            </h2>
                            <br/>
                            <p className="century max-w-4xl mx-auto block">Avant d'<strong>attirer les utilisateurs</strong> en provenance des <strong>moteurs de recherches</strong> vers votre site web, il va falloir réaliser un <strong>travail d'optimisation</strong> qui se plie aux critères imposés par l'<strong>algorithme</strong>.</p>
                            <br/>
                            <p className="century max-w-4xl mx-auto block">En <strong>référencement naturel</strong>, il existe 4 piliers fondamentaux pour développer une stratégie efficace grâce au <strong>web marketing</strong>. Nos <strong>consultants SEO</strong> travaillent dans cette direction pour vous donner accès à une <strong>plateforme web</strong> adaptée.</p>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row mx-auto px-6 lg:px-32 py-6 my-4 lg:mt-10 lg:mb-4 lg:py-2 text-justify">
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>DÉFINIR VOTRE VISIBILITÉ POUR ÉTENDRE VOTRE NOTORIÉTÉ ET VOTRE E RÉPUTATION
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Avoir recours à une campagne sponsorisée de référencement payant Google Ads (anciennement Google Adwords), n'est pas l'unique solution. </span>
                            </h4>
                            <p>Le <strong>référencement naturel</strong> vous permet de <strong>développer votre visibilité</strong> grâce au contenu présent sur les <strong>pages de votre site</strong>, mais également grâce aux différentes opportunités qui existent : <strong>longue traîne</strong>, <strong>référencement local</strong>, etc.</p>
                            <br/>
                            <p>Il est important de <strong>cibler des requêtes</strong> et des secteurs de manière extrêmement précise tout en étant en possession de l'ensemble des informations nécessaires afin de mettre en place une <strong>solution web</strong> qui vous permettra d'étendre votre <strong>notoriété et votre e-réputation</strong>, dans les <strong>SERP (pages de résultats de recherche)</strong>, comme en dehors.</p>
                        </div>
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>AFFIRMER VOTRE EXPERTISE DANS VOTRE DOMAINE DE PRÉDILECTION
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Du point de vue des moteurs de recherche, il est indispensable d'être considéré comme légitime, de porter une expertise et de faire autorité pour aborder un sujet en particulier sur le Web.</span>
                            </h4>
                            <p>Prouver sa compétence et son expertise dans son domaine d'activité est indispensable pour répondre aux <strong>exigences des moteurs de recherche</strong>. Ce travail passe par la construction d'un <strong>contenu éditorial</strong> soigné ainsi que par la mise en avant de son expérience et de sa compétence dans son domaine.</p>
                            <br/>
                            <p>Notre travail d'<strong>agence web</strong> est de retranscrire ce qui fait de vous l'un des experts de votre secteur d'activité par la production d'un contenu adapté et la mise en avant d'éléments essentiels. Il est important que <strong>votre site web</strong> retranscrive au mieux l'esprit et les valeurs de votre entreprise.</p>
                        </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row mx-auto px-6 lg:px-32 py-6 my-4 lg:my-2 lg:py-2 text-justify">
                        
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>ANCRER VOTRE PRÉSENCE DANS DES SECTEURS PORTEURS
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Miser sur une stratégie de référencement local permet d'obtenir plus de trafic, plus rapidement. Nous tenons compte de ce facteur dans la définition de nos stratégies pour améliorer la visibilité d'un site.</span>
                            </h4>
                            <p>Si l'efficacité d'un <strong>projet web</strong> se mesure dans le temps, certaines techniques permettent de <strong>positionner favorablement votre site web</strong> de manière rapide. Combiner des méthodes de court ou moyen terme, avec des méthodes de plus long terme est indispensable pour <strong>améliorer la visibilité d'un site web</strong> et mettre en place une stratégie avantageuse pour vous.</p>
                            <br/>
                            <p>Nous définissons les secteurs présentant le plus de potentiel, en fonction de vos zones de chalandise et de votre secteur d'activité pour vous permettre de <strong>bien figurer rapidement dans les résultats naturels</strong>. L'<strong>optimisation du référencement de votre site web</strong> sur de tels secteurs est indispensable pour mener une <strong>campagne de référencement</strong> efficace.</p>
                        </div>
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>DÉVELOPPER LA POPULARITÉ DE VOTRE SITE WEB
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">La présence d'un réseau de liens à destination de vos pages web constitue un indice sur la crédibilité et la popularité de votre site web pour les moteurs de recherche.</span>
                            </h4>
                            <p><strong>Acquérir des liens</strong> en provenance de sites faisant autorité dans votre domaine thématique est une bonne manière de <strong>prouver à Google que votre site web est fiable</strong>. Cela influe directement sur le <strong>classement de votre site web dans les résultats de recherche</strong> et va permettre de le <strong>positionner durablement</strong>.</p>
                            <br/>
                            <p>Travailler la <strong>popularité d'un site web</strong> fait partie des <strong>services SEO</strong> principaux dans le cadre du <strong>travail de référencement naturel sur un site web</strong>. Il existe toute une batterie d'<strong>outils SEO</strong> performants pour déceler les <strong>sites de qualité</strong> parmi la masse d'informations présente sur <strong>Internet</strong>. Ce travail est important en vue d'<strong>acquérir du trafic naturel</strong>, c'est pourquoi la génération de <strong>liens de qualité vers votre site</strong> contribue au succès de votre stratégie.</p>
                        </div>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century uppercase">
                        <span className="text-bleu">/</span>Référencement Naturel : comment ça marche ?
                        </h2>
                        <br/>
                        <hr className="bleu w-1/3" style={{borderTop: '1px solid #37cfee'}}/>
                        <br/>
                    </section>
                    <section className="flex my-4 flex-col md:flex-row items-center justify-center mx-auto max-w-5xl century px-5 text-justify">
                        <div className="w-full md:w-1/2 px-5">
                            <h3 className="text-xl font-bold">Répondre aux attentes des moteurs de recherche...</h3>
                            <br/>
                            <p>Pour développer une <strong>stratégie de référencement naturel</strong> efficace et <strong>générer du trafic organique vers ses pages web</strong>, il va être nécessaire que votre site soit parfaitement <strong>optimisé pour les moteurs de recherche</strong>. S'adapter aux <strong>algorithmes des moteurs</strong> est indispensable pour <strong>bien figurer dans les pages de résultats</strong>, que ce soit en termes d'<strong>optimisation SEO</strong> ou d'<strong>expérience utilisateur</strong>.</p>
                            <br/>
                        </div>
                        <div className="w-full md:w-1/2 px-5 order-first md:order-last">
                            <img src={moteur} alt="agence SEO Toulouse"/>
                            <br/>
                        </div>
                    </section>
                    <section className="flex my-4 md:my-16 flex-col md:flex-row justify-center items-center mx-auto max-w-5xl century px-5 text-justify">
                        <div className="w-full md:w-1/2 px-5">
                            <img src={utilisateur} alt="agence de Référencement à Toulouse"/>
                            <br/>
                        </div>
                        <div className="w-full md:w-1/2 px-5">
                            <h3 className="text-xl font-bold">...Sans laisser de côté les internautes</h3>
                            <br/>
                            <p>Mais ce sont bien des <strong>utilisateurs</strong> réels qui feront de votre stratégie un succès. C'est pourquoi, il est indispensable de <strong>proposer un contenu adapté, intéressant et qui répondra à leurs interrogations</strong>. Les <strong>moteurs de recherche</strong> sont particulièrement intransigeants quant à la <strong>qualité du contenu</strong> qui doit être proposé.</p>
                            <br/>
                        </div>
                    </section>
                    <section className="flex my-4 flex-col md:flex-row items-center justify-center mx-auto max-w-5xl century px-5 text-justify">
                        <div className="w-full md:w-1/2 px-5">
                            <h3 className="text-xl font-bold">Une discipline marquée par une forte concurrence...</h3>
                            <br/>
                            <p><strong>Référencer un site internet</strong> n'est pas une chose aisée. En effet, le <strong>référencement naturel</strong> est une discipline fortement marquée par une rude concurrence exercée par les autres <strong>acteurs du Web</strong>. C'est en cela qu'<strong>établir une stratégie de référencement</strong> doit être anticipé sur le long terme.</p>
                            <br/>
                        </div>
                        <div className="w-full md:w-1/2 px-5 order-first md:order-last">
                            <img src={concurrence} alt="agence SEO Toulouse"/>
                            <br/>
                        </div>
                    </section>
                    <section className="flex my-4 flex-col md:flex-row justify-center items-center mx-auto max-w-5xl century px-5 text-justify">
                        <div className="w-full md:w-1/2 px-5">
                            <img src={opportunité} alt="agence SEO à Toulouse"/>
                            <br/>
                        </div>
                        <div className="w-full md:w-1/2 px-5">
                            <h3 className="text-xl font-bold">...mais également par des opportunités de se démarquer</h3>
                            <br/>
                            <p>À <strong>Linkweb</strong>, nous avons conscience de cette particularité. C'est pourquoi, nos <strong>stratégies de référencement naturel</strong> sont pensées pour vous <strong>apporter des résultats et de la visibilité</strong> à moyen ou court terme. En effet, certaines opportunités permettent de <strong>gagner une visibilité</strong> ciblée dans des délais raisonnables.</p>
                            <br/>
                        </div>
                    </section>
                    <section className="w-full lg:h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 bg-cover mb-24" style={{background:'#000000ba url( '+ bgDev +')', backgroundSize:'cover', backgroundBlendMode: 'overlay'}}>
                        <div className="max-w-5xl mx-auto flex flex-col items-center text-center century text-white">
                            <h2 data-aos='fade-right' className="text-3xl md:text-4xl ">
                            <span className="text-bleu">/</span>Vous souhaitez améliorer votre visibilité dans les résultats de recherche ?
                            </h2>
                            <br/>
                            <p className="max-w-3xl">Nos <strong>professionnels du référencement naturel</strong> vous accompagnent dans le <strong>développement de votre stratégie de référencement naturel</strong> pour cibler les <strong>expressions clés</strong> qui vous permettront, à terme, d'obtenir de <strong>nouveaux clients</strong>.</p>
                            <br/>
                            <p className="max-w-3xl">Qu'il s'agisse d'une <strong>refonte du site</strong> existant de votre entreprise ou d'une création, <strong>nos référenceurs</strong> définiront et mettront en place une stratégie adaptée aux <strong>moteurs de recherche</strong> tout <strong>en intégrant les spécificités de votre entreprise</strong>.</p>
                        </div>

                        <div className="max-w-6xl mx-auto flex text-center my-12">
                            {/* <RappelForm /> */}
                            <RoundButton url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>

                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row text-center my-12">
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                                <svg className="svg-white" width="80px" height="80px" version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
                                    <g>
                                        <g>
                                            <path d="M503.983,4.276H256H8.017C3.589,4.276,0,7.865,0,12.292v102.614v384.802c0,4.427,3.589,8.017,8.017,8.017H256h247.983    c4.427,0,8.017-3.589,8.017-8.017V114.906V12.292C512,7.865,508.411,4.276,503.983,4.276z M495.967,491.691H256H16.033V122.923    H256h239.967V491.691z M495.967,106.889H256H16.033v-86.58H256h239.967V106.889z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M427.023,38.48H332.96c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h94.063    c4.427,0,8.017-3.589,8.017-8.017C435.04,42.07,431.45,38.48,427.023,38.48z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M469.779,38.48h-17.102c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h17.102    c4.427,0,8.017-3.589,8.017-8.017C477.795,42.07,474.206,38.48,469.779,38.48z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M264.551,29.929c-3.835,0-7.612,0.647-11.222,1.924c-0.009,0.003-0.016,0.008-0.025,0.01    c-13.412,4.754-22.423,17.504-22.423,31.737c0,14.232,9.011,26.982,22.422,31.737c0.009,0.003,0.016,0.008,0.025,0.011    c3.611,1.276,7.387,1.924,11.222,1.924c18.566,0,33.67-15.105,33.67-33.67S283.117,29.929,264.551,29.929z M264.551,81.236    c-2.011,0-3.988-0.339-5.88-1.007c-0.001,0-0.002-0.001-0.003-0.001c-7.03-2.488-11.754-9.17-11.754-16.629    s4.723-14.14,11.755-16.629c0.001,0,0.002,0,0.003-0.001c1.891-0.669,3.869-1.007,5.88-1.007c9.725,0,17.637,7.912,17.637,17.637    S274.276,81.236,264.551,81.236z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M170.489,29.929c-18.566,0-33.67,15.105-33.67,33.67s15.105,33.67,33.67,33.67s33.67-15.104,33.67-33.67    S189.054,29.929,170.489,29.929z M170.489,81.236c-9.725,0-17.637-7.912-17.637-17.637s7.912-17.637,17.637-17.637    s17.637,7.912,17.637,17.637S180.213,81.236,170.489,81.236z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M76.426,29.929c-18.566,0-33.67,15.105-33.67,33.67s15.105,33.67,33.67,33.67s33.67-15.104,33.67-33.67    S94.992,29.929,76.426,29.929z M76.426,81.236c-9.725,0-17.637-7.912-17.637-17.637s7.912-17.637,17.637-17.637    s17.637,7.912,17.637,17.637S86.151,81.236,76.426,81.236z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M480.454,214.537l-84.651-84.653c-3.131-3.131-8.207-3.131-11.338,0L330.5,183.85H256H72.15    c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H256h58.466l-64.135,64.135l-56.65,56.65H72.15    c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h105.497l-17.278,17.278c-0.009,0.009-0.017,0.017-0.027,0.027    l-0.014,0.014c-0.025,0.025-0.045,0.051-0.069,0.077c-0.159,0.164-0.314,0.332-0.461,0.51c-0.055,0.065-0.1,0.135-0.153,0.202    c-0.108,0.14-0.216,0.28-0.315,0.429c-0.065,0.097-0.122,0.199-0.183,0.299c-0.074,0.122-0.151,0.243-0.218,0.37    c-0.068,0.128-0.127,0.26-0.188,0.39c-0.049,0.105-0.102,0.207-0.146,0.315c-0.067,0.162-0.124,0.329-0.181,0.495    c-0.028,0.082-0.06,0.161-0.086,0.245c-0.064,0.212-0.117,0.426-0.162,0.642c-0.009,0.042-0.022,0.081-0.031,0.123l-0.005,0.025    c-0.002,0.01-0.004,0.019-0.005,0.029l-19.862,99.316H72.15c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017    h72.641c0.012,0,0.023,0.001,0.036,0.001c0.003,0,0.005,0,0.009,0c0.003,0,0.005,0,0.009,0c0.012,0,0.024-0.001,0.036-0.001h6.276    c2.139,0,4.077-0.843,5.514-2.208l35.038-7.008c0.005-0.001,0.01-0.002,0.015-0.003l0.032-0.006l60.415-12.083    c0.007-0.001,0.015-0.003,0.023-0.004l0.028-0.005c0.047-0.01,0.091-0.025,0.138-0.035c0.21-0.046,0.419-0.096,0.625-0.158    c0.088-0.027,0.171-0.061,0.258-0.09c0.161-0.056,0.324-0.11,0.482-0.175c0.112-0.047,0.219-0.102,0.328-0.153    c0.126-0.059,0.253-0.115,0.377-0.182c0.13-0.07,0.253-0.148,0.378-0.223c0.097-0.059,0.197-0.114,0.291-0.177    c0.149-0.099,0.29-0.208,0.431-0.316c0.066-0.051,0.136-0.097,0.201-0.152c0.175-0.144,0.341-0.297,0.503-0.455    c0.027-0.027,0.057-0.048,0.082-0.075l0.016-0.016c0.009-0.009,0.017-0.016,0.025-0.025l5.309-5.309l110.306-110.306    l48.015-48.015l60.465-60.465C483.584,222.743,483.584,217.667,480.454,214.537z M202.669,334.353    c0.001-0.001,0.002-0.002,0.003-0.002l58.998-58.998l68-68l15.872,15.873L193.208,375.56l-15.873-15.873L202.669,334.353z     M356.878,234.564l18.896,18.896l-69.556,69.556l-55.886,55.886l-26.891,26.891l-18.896-18.896L356.878,234.564z M155.055,455.283    l3.774-18.869l15.095,15.095L155.055,455.283z M192.819,447.731l-30.211-30.211l8.314-41.57l16.618,16.618l30.233,30.233    l16.618,16.617L192.819,447.731z M360.637,323.016L250.65,433.002l-15.873-15.872l26.891-26.891l55.886-55.886l69.556-69.556    l15.872,15.872L360.637,323.016z M414.32,269.332l-21.54-21.54l-30.234-30.233l-21.54-21.541l49.129-49.128l73.314,73.314    L414.32,269.332z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M394.211,169.096c-3.13-3.131-8.207-3.131-11.337,0l-19.24,19.24c-3.131,3.131-3.131,8.207,0,11.337    c1.565,1.565,3.617,2.348,5.668,2.348s4.103-0.782,5.668-2.348l19.24-19.24C397.342,177.302,397.342,172.225,394.211,169.096z"/>
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
                                <p className="text-xl text-white century pt-3">CONTENUS OPTIMISÉS</p>
                            </div>
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center my-6" data-aos='zoom-in' data-aos-delay="400">
                                <svg className="svg-white" viewBox="0 0 64 64" width="80px" height="80px">
                                    <g id="Keyboard"><path d="M42,31H22a1,1,0,0,1,0-2H42a1,1,0,0,1,0,2Z"/>
                                        <path d="M42,26H22a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1H42a1,1,0,0,1,1,1v3A1,1,0,0,1,42,26ZM23,24H41V23H23Z"/>
                                        <path d="M49,26H46a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,49,26Zm-2-2h1V23H47Z"/>
                                        <path d="M56,26H53a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,56,26Zm-2-2h1V23H54Z"/>
                                        <path d="M18,26H15a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,18,26Zm-2-2h1V23H16Z"/>
                                        <path d="M11,26H8a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,11,26ZM9,24h1V23H9Z"/>
                                        <path d="M48,19H45a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,48,19Zm-2-2h1V16H46Z"/>
                                        <path d="M55,19H52a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,55,19Zm-2-2h1V16H53Z"/>
                                        <path d="M34,19H31a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,34,19Zm-2-2h1V16H32Z"/>
                                        <path d="M41,19H38a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,41,19Zm-2-2h1V16H39Z"/>
                                        <path d="M13,19H10a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,13,19Zm-2-2h1V16H11Z"/>
                                        <path d="M27,19H24a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,27,19Zm-2-2h1V16H25Z"/>
                                        <path d="M20,19H17a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,20,19Zm-2-2h1V16H18Z"/>
                                        <path d="M48,12H45a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,48,12Zm-2-2h1V9H46Z"/>
                                        <path d="M55,12H52a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,55,12Zm-2-2h1V9H53Z"/>
                                        <path d="M34,12H31a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,34,12Zm-2-2h1V9H32Z"/>
                                        <path d="M41,12H38a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,41,12Zm-2-2h1V9H39Z"/>
                                        <path d="M13,12H10a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,13,12Zm-2-2h1V9H11Z"/>
                                        <path d="M27,12H24a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,27,12Zm-2-2h1V9H25Z"/>
                                        <path d="M20,12H17a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,20,12Zm-2-2h1V9H18Z"/>
                                        <path d="M21.261,38.011A3.043,3.043,0,0,0,20,38.17V33.112a3.077,3.077,0,0,0-2.739-3.1,3.026,3.026,0,0,0-1.388.207,3.034,3.034,0,0,0-2.612-2.207,3.027,3.027,0,0,0-3.157,2.2,3.063,3.063,0,0,0-3.212.664A2.944,2.944,0,0,0,6,33v1.171a3.058,3.058,0,0,0-3.108.7A2.944,2.944,0,0,0,2,37V51.343a4.966,4.966,0,0,0,1.464,3.535l.658.658A3.02,3.02,0,0,1,5,57.657V61a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V57.657a3.02,3.02,0,0,1,.878-2.121l.658-.658A4.966,4.966,0,0,0,24,51.343V41.112A3.077,3.077,0,0,0,21.261,38.011ZM22,51.343a3.02,3.02,0,0,1-.878,2.121l-.658.658A4.966,4.966,0,0,0,19,57.657V60H7V57.657a4.966,4.966,0,0,0-1.464-3.535l-.658-.658A3.02,3.02,0,0,1,4,51.343V37a.974.974,0,0,1,.306-.712A.957.957,0,0,1,5,36a1,1,0,0,1,1,1v6a1,1,0,0,0,2,0V33a.974.974,0,0,1,.306-.712A.957.957,0,0,1,9,32a1,1,0,0,1,1,1V43a1,1,0,0,0,2,0V31a.974.974,0,0,1,.306-.712A.938.938,0,0,1,13.092,30,1.082,1.082,0,0,1,14,31.112V43a1,1,0,0,0,2,0V33a.974.974,0,0,1,.306-.712A.953.953,0,0,1,17.092,32,1.082,1.082,0,0,1,18,33.112V49a1,1,0,0,0,2,0V41a.974.974,0,0,1,.306-.712A.943.943,0,0,1,21.092,40,1.082,1.082,0,0,1,22,41.112Z"/>
                                        <path d="M58,34.171V33a2.925,2.925,0,0,0-.873-2.108A3.063,3.063,0,0,0,53.9,30.21a2.874,2.874,0,0,0-.769-1.318,2.975,2.975,0,0,0-2.389-.881,3.033,3.033,0,0,0-2.611,2.208,3.029,3.029,0,0,0-1.389-.208A3.077,3.077,0,0,0,44,33.112v5.059a2.99,2.99,0,0,0-1.262-.16A3.077,3.077,0,0,0,40,41.112V51.343a4.972,4.972,0,0,0,1.464,3.535l.657.658A3.017,3.017,0,0,1,43,57.657V61a1,1,0,0,0,1,1H58a1,1,0,0,0,1-1V57.657a3.017,3.017,0,0,1,.88-2.122l.655-.657A4.968,4.968,0,0,0,62,51.343V37a2.925,2.925,0,0,0-.873-2.108A3.057,3.057,0,0,0,58,34.171Zm2,17.172a3.017,3.017,0,0,1-.88,2.122l-.655.657A4.968,4.968,0,0,0,57,57.657V60H45V57.657a4.972,4.972,0,0,0-1.464-3.535l-.657-.658A3.017,3.017,0,0,1,42,51.343V41.112A1.082,1.082,0,0,1,42.907,40,1.011,1.011,0,0,1,44,41v8a1,1,0,0,0,2,0V33.112A1.082,1.082,0,0,1,46.907,32a.975.975,0,0,1,.806.3A.965.965,0,0,1,48,33V43a1,1,0,0,0,2,0V31.112A1.082,1.082,0,0,1,50.907,30a.977.977,0,0,1,.806.3A.965.965,0,0,1,52,31V43a1,1,0,0,0,2,0V33a1,1,0,0,1,1-1,.976.976,0,0,1,.713.306A.965.965,0,0,1,56,33V43a1,1,0,0,0,2,0V37a1,1,0,0,1,1-1,.976.976,0,0,1,.713.306A.965.965,0,0,1,60,37Z"/>
                                        <path d="M59,2H5A3,3,0,0,0,2,5V27a3,3,0,0,0,3,3,1,1,0,0,0,0-2,1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H59a1,1,0,0,1,1,1V27a1,1,0,0,1-1,1,1,1,0,0,0,0,2,3,3,0,0,0,3-3V5A3,3,0,0,0,59,2Z"/>
                                        <path d="M42,31H22a1,1,0,0,1,0-2H42a1,1,0,0,1,0,2Z"/>
                                        <path d="M42,26H22a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1H42a1,1,0,0,1,1,1v3A1,1,0,0,1,42,26ZM23,24H41V23H23Z"/>
                                        <path d="M49,26H46a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,49,26Zm-2-2h1V23H47Z"/>
                                        <path d="M56,26H53a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,56,26Zm-2-2h1V23H54Z"/>
                                        <path d="M18,26H15a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,18,26Zm-2-2h1V23H16Z"/>
                                        <path d="M11,26H8a1,1,0,0,1-1-1V22a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,11,26ZM9,24h1V23H9Z"/>
                                        <path d="M48,19H45a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,48,19Zm-2-2h1V16H46Z"/>
                                        <path d="M55,19H52a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,55,19Zm-2-2h1V16H53Z"/>
                                        <path d="M34,19H31a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,34,19Zm-2-2h1V16H32Z"/>
                                        <path d="M41,19H38a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,41,19Zm-2-2h1V16H39Z"/>
                                        <path d="M13,19H10a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,13,19Zm-2-2h1V16H11Z"/>
                                        <path d="M27,19H24a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,27,19Zm-2-2h1V16H25Z"/>
                                        <path d="M20,19H17a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,20,19Zm-2-2h1V16H18Z"/>
                                        <path d="M48,12H45a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,48,12Zm-2-2h1V9H46Z"/>
                                        <path d="M55,12H52a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,55,12Zm-2-2h1V9H53Z"/>
                                        <path d="M34,12H31a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,34,12Zm-2-2h1V9H32Z"/>
                                        <path d="M41,12H38a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,41,12Zm-2-2h1V9H39Z"/>
                                        <path d="M13,12H10a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,13,12Zm-2-2h1V9H11Z"/>
                                        <path d="M27,12H24a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,27,12Zm-2-2h1V9H25Z"/>
                                        <path d="M20,12H17a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v3A1,1,0,0,1,20,12Zm-2-2h1V9H18Z"/>
                                    </g>
                                </svg>
                                <p className="text-xl century text-white pt-3">MOTS-CLÉS PERTINENTS</p>
                            </div>
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center"  data-aos='zoom-in' data-aos-delay="600">
                                <svg className="svg-white" height="80px" viewBox="0 0 512 512" width="80px">
                                    <path d="m504.5 0h-312.832031c-4.144531 0-7.5 3.355469-7.5 7.5s3.355469 7.5 7.5 7.5h305.332031v65h-374.742188v-65h38.5c4.144532 0 7.5-3.355469 7.5-7.5s-3.355468-7.5-7.5-7.5h-46c-4.140624 0-7.5 3.355469-7.5 7.5l.003907 119.5h-99.761719c-4.144531 0-7.5 3.355469-7.5 7.5v313.167969c0 4.140625 3.355469 7.5 7.5 7.5s7.5-3.359375 7.5-7.5v-225.667969h433c4.144531 0 7.5-3.355469 7.5-7.5s-3.355469-7.5-7.5-7.5h-433v-65h482v65h-17.167969c-4.140625 0-7.5 3.355469-7.5 7.5s3.359375 7.5 7.5 7.5h17.167969v275h-482v-17c0-4.144531-3.355469-7.5-7.5-7.5s-7.5 3.355469-7.5 7.5v24.5c0 4.144531 3.355469 7.5 7.5 7.5h497c4.144531 0 7.5-3.355469 7.5-7.5v-497c0-4.144531-3.355469-7.5-7.5-7.5zm-382.238281 127v-32h374.738281v32zm0 0"/>
                                    <path d="m138.257812 47c0 12.40625 10.09375 22.5 22.5 22.5s22.5-10.09375 22.5-22.5-10.09375-22.5-22.5-22.5-22.5 10.09375-22.5 22.5zm30 0c0 4.136719-3.363281 7.5-7.5 7.5-4.136718 0-7.5-3.363281-7.5-7.5s3.363282-7.5 7.5-7.5c4.136719 0 7.5 3.363281 7.5 7.5zm0 0"/>
                                    <path d="m243.257812 47c0-12.40625-10.09375-22.5-22.5-22.5s-22.5 10.09375-22.5 22.5 10.09375 22.5 22.5 22.5 22.5-10.09375 22.5-22.5zm-30 0c0-4.136719 3.363282-7.5 7.5-7.5 4.136719 0 7.5 3.363281 7.5 7.5s-3.363281 7.5-7.5 7.5c-4.136718 0-7.5-3.363281-7.5-7.5zm0 0"/>
                                    <path d="m303.257812 47c0-12.40625-10.09375-22.5-22.5-22.5s-22.5 10.09375-22.5 22.5 10.09375 22.5 22.5 22.5 22.5-10.09375 22.5-22.5zm-30 0c0-4.136719 3.363282-7.5 7.5-7.5 4.136719 0 7.5 3.363281 7.5 7.5s-3.363281 7.5-7.5 7.5c-4.136718 0-7.5-3.363281-7.5-7.5zm0 0"/>
                                    <path d="m31 174c0 12.40625 10.09375 22.5 22.5 22.5s22.5-10.09375 22.5-22.5-10.09375-22.5-22.5-22.5-22.5 10.09375-22.5 22.5zm30 0c0 4.136719-3.363281 7.5-7.5 7.5s-7.5-3.363281-7.5-7.5 3.363281-7.5 7.5-7.5 7.5 3.363281 7.5 7.5zm0 0"/>
                                    <path d="m91 174c0 12.40625 10.09375 22.5 22.5 22.5s22.5-10.09375 22.5-22.5-10.09375-22.5-22.5-22.5-22.5 10.09375-22.5 22.5zm30 0c0 4.136719-3.363281 7.5-7.5 7.5s-7.5-3.363281-7.5-7.5 3.363281-7.5 7.5-7.5 7.5 3.363281 7.5 7.5zm0 0"/>
                                    <path d="m151 174c0 12.40625 10.09375 22.5 22.5 22.5s22.5-10.09375 22.5-22.5-10.09375-22.5-22.5-22.5-22.5 10.09375-22.5 22.5zm30 0c0 4.136719-3.363281 7.5-7.5 7.5s-7.5-3.363281-7.5-7.5 3.363281-7.5 7.5-7.5 7.5 3.363281 7.5 7.5zm0 0"/>
                                    <path d="m231.902344 268.027344h-176c-4.140625 0-7.5 3.359375-7.5 7.5v148c0 4.144531 3.359375 7.5 7.5 7.5h176c4.144531 0 7.5-3.355469 7.5-7.5v-148c0-4.140625-3.355469-7.5-7.5-7.5zm-7.5 15v63.082031l-45.96875 39.960937-60.355469-46.183593c-4.285156-3.277344-10.339844-3.078125-14.398437.484375l-40.277344 35.34375v-92.6875zm-161 133v-20.355469l47.929687-42.058594 81.566407 62.414063zm161 0h-6.816406l-26.992188-20.648438 33.808594-29.394531zm0 0"/>
                                    <path d="m184.203125 342.207031c14.5625 0 26.414063-11.851562 26.414063-26.417969 0-14.5625-11.851563-26.414062-26.414063-26.414062-14.566406 0-26.417969 11.851562-26.417969 26.414062 0 14.566407 11.851563 26.417969 26.417969 26.417969zm0-37.832031c6.292969 0 11.414063 5.121094 11.414063 11.414062 0 6.296876-5.121094 11.417969-11.414063 11.417969-6.296875 0-11.417969-5.121093-11.417969-11.417969 0-6.292968 5.121094-11.414062 11.417969-11.414062zm0 0"/>
                                    <path d="m283.703125 344.5h163.964844c4.140625 0 7.5-3.359375 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5h-163.964844c-4.144531 0-7.5 3.355469-7.5 7.5 0 4.140625 3.355469 7.5 7.5 7.5zm0 0"/>
                                    <path d="m283.703125 301.953125h81.980469c4.144531 0 7.5-3.355469 7.5-7.5 0-4.140625-3.355469-7.5-7.5-7.5h-81.980469c-4.144531 0-7.5 3.359375-7.5 7.5 0 4.144531 3.355469 7.5 7.5 7.5zm0 0"/>
                                    <path d="m283.703125 380.5h163.964844c4.140625 0 7.5-3.359375 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5h-163.964844c-4.144531 0-7.5 3.355469-7.5 7.5 0 4.140625 3.355469 7.5 7.5 7.5zm0 0"/>
                                    <path d="m283.703125 416.5h163.964844c4.140625 0 7.5-3.359375 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5h-163.964844c-4.144531 0-7.5 3.355469-7.5 7.5 0 4.140625 3.355469 7.5 7.5 7.5zm0 0"/>
                                    <path d="m54.472656 463.894531c0 4.140625 3.355469 7.5 7.5 7.5h385.695313c4.140625 0 7.5-3.359375 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5h-385.695313c-4.144531 0-7.5 3.355469-7.5 7.5zm0 0"/>
                                </svg>
                                <p className="text-xl century text-white pt-3">PAGES OPTIMISÉES</p>
                            </div>
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
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 text-white mr-5 p-2 font-bold" style={{borderRadius:'5px'}}>
                                <Link to="/creation-site-internet-toulouse/">Création site internet</Link>
                            </div>
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 text-white mr-5 p-2 font-bold" style={{borderRadius:'5px'}}>
                                <Link to="/agence-web-toulouse/">Agence Web</Link>
                            </div>
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 text-white mr-5 p-2 font-bold" style={{borderRadius:'5px'}}>
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
query lastsThreePostsAgenceSEOToulouse {
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
export default AgenceSEOToulouse;




