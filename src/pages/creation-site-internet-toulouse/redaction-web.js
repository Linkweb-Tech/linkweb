import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/creation-site-internet-ban.png";



class redactionweb extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Rédaction Web : Définition - Création site internet Toulouse - Linkweb"
                    description="Le travail de rédaction web est essentiel dans la mise en oeuvre d'une stratégie de référencement lors de la création d'un site internet."
                    url="https://linkweb.fr/creation-site-internet-toulouse/redaction-web/"
                    nom="Rédaction Web"
                    slug="creation-site-internet-toulouse/redaction-web/"
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

                    <section className="w-full mt-40 text-justify font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <h1 data-aos="fade-up" className="century text-4xl sm:text-5xl text-center text-bleu mt-4 lg:mt-6">
                            Rédaction Web
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                La <strong>rédaction web</strong> est une discipline ayant pour objectif de <strong className="font-normal">rédiger des contenus</strong> adaptés pour les spécificités du web (nous pouvons également parler de <strong className="font-normal">contenus optimisés</strong>). En ce sens, <strong className="font-normal">écrire pour le web</strong> fait appel à un <strong className="font-normal">style de rédaction</strong> bien particulier et basé sur l’<strong className="font-normal">optimisation du contenu web</strong> pour les <strong className="font-normal">moteurs de recherche</strong>, en même temps que pour les humains à travers le <strong className="font-normal">marketing de contenu (content marketing)</strong>. La mise en place d’une <strong className="font-normal">stratégie éditoriale optimisée</strong> ainsi que la <strong className="font-normal">création de contenu unique</strong> (qu’il s’agisse d’<strong className="font-normal">articles</strong>, de <strong className="font-normal">contenus rédigés</strong> pour un site vitrine et bien d’autres types de <strong className="font-normal">contenus web</strong>) fait partie de notre travail <strong><Link to="/creation-site-internet-toulouse/" className="text-bleu hover:text-black font-bold">de création de site internet à Toulouse</Link></strong>.<br/>
                                <br/>
                                En effet, les <strong className="font-normal">textes produits par les rédacteurs web</strong> doivent être structurés pour une meilleure compréhension des moteurs de recherche. À ce titre, pour <strong className="font-normal">structurer une page web</strong>, il est important de faire appel aux <strong className="font-normal">balises</strong> hn qui correspondent à des niveaux de titres et peuvent contenir certains <strong className="font-normal">mots-clés</strong> imposés par la stratégie de <strong className="font-normal">référencement naturel</strong>, tout en présentant un <strong className="font-normal">contenu de qualité</strong> pour les utilisateurs.<br/>
                                <br/>
                                <strong className="font-normal">Rédiger du contenu pour le web</strong>, c’est aussi être capable d’adapter une <strong className="font-normal">ligne éditoriale</strong> à la méthodologie spécifique avec un <strong className="font-normal">nombre de mots</strong> et de <strong className="font-normal">paragraphes</strong> à minima par exemple, des thématiques engageantes pour les utilisateurs ou encore un ton <strong className="font-normal">pertinent</strong>. La rédaction web regroupe plusieurs types de rédactions, à savoir, l’<strong className="font-normal">article de blog</strong>, le contenu présent sur les pages web d’un site vitrine, les <strong className="font-normal">fiches produits</strong> et a également investi le domaine du <strong className="font-normal">journalisme</strong>.<br/>
                                <br/>
                                Il faut avoir conscience que la <strong className="font-normal">rédaction de contenu sur votre site internet</strong> possède deux objectifs : elle s’adresse à plusieurs types de lectorat, c’est en cela que votre <strong className="font-normal">contenu éditorial</strong> va être adapté à tous les publics. Il est important de bien comprendre cela pour <strong className="font-normal">référencer</strong> son site sur les moteurs de recherche et obtenir une visibilité intéressante avec un contenu qui reste adapté pour les utilisateurs.<br/>
                                <br/>
                                Enfin, outre le contenu <strong className="font-normal">rédigé</strong> en lui-même, le domaine de la rédaction web est un domaine large qui englobe également la mise en place de <strong className="font-normal">stratégie de contenu</strong>. Cette dernière va aboutir à l’établissement d’un <strong className="font-normal">maillage interne</strong> entre les différents contenus présents sur le site, possédant un lien thématique et qui va contribuer à améliorer l’<strong className="font-normal">expérience utilisateur</strong> du site. Intégrer la rédaction web dans le travail de son contenu est indispensable pour proposer du <strong className="font-normal">contenu rédactionnel</strong> adapté et qui vous apportera de la performance.<br/>
                            </p>
                        <img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées au nom de domaine :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/">UI Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/">UX Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/">Développement Web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/">Front-End</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/">Responsive Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/mobile-first/">Mobile First</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/">Webdesign</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/">Refonte site internet</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/">Maquette de site web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/">CMS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/">HTML/CSS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/">Framework</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/moteurs-recherche/">Moteurs de recherche</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/arborescence-site-internet/">Arborescence site internet</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/nom-de-domaine/">Nom de domaine</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/strategie-digitale/">Stratégie Digitale</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webmarketing/">Webmarketing</Link></li>
                            </ul>
                            </div>
                        </div>
                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsredactionweb {
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
export default redactionweb;




