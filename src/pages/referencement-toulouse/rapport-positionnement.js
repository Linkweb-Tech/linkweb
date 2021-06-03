import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";



class RapportdePositionnement extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Rapport de positionnement : Définition - Référencement"
                    description="Le rapport de positionnement est un document pertinent pour évaluer les actions de référencement naturel mises en place sur un site."
                    url="https://linkweb.fr/referencement-toulouse/rapport-positionnement/"
                    nom="Rapport de Positionnement"
                    slug="referencement-toulouse/rapport-positionnement/"
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

                <section className="w-full century mt-40 flex flex-col items-center justify-start bg-bleu" style={{ background: '#00000073 url(' + Bg + ')', minHeight: '300px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                    <div className="topdef">
                        <span className="text-center text-xl font-bold text-white">Définition</span>
                    </div>
                    <div>
                        <h1 data-aos="fade-up" className="century text-5xl sm:text-6xl text-bleu text-center text-white mt-4 lg:mt-6">
                            Rapport de Positionnement
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce qu'un rapport de positionnement ?</h2>
                        <br />
                        <p>
                            Un <strong>rapport de positionnement</strong> est un document primordial dans le suivi et l’évaluation d’une <strong className="font-normal">stratégie de référencement naturel</strong>. En effet, ce document va contenir des informations telles que :<br />
                            <br />
                            <ul className="px-12 list-disc">
                                <li>La liste des <strong className="font-normal">mots-clés</strong> ciblés,</li>
                                <li>La <strong className="font-normal">position des pages du site</strong> dans les <strong className="font-normal">pages de recherche des moteurs</strong>,</li>
                                <li>L’<strong className="font-normal">évolution du positionnement</strong> par rapport au précédent export d’informations,</li>
                                <li>l’<strong className="font-normal">URL des pages</strong> présentées dans les <strong className="font-normal">pages de résultats de recherche</strong>,</li>
                                <li>Ainsi que de nombreuses informations en relation avec la <strong className="font-normal">visibilité globale du site</strong>, le rapport avec les <strong className="font-normal">sites concurrents</strong>, etc.</li>
                            </ul><br />
                            Si le <strong className="font-normal">positionnement d’un site sur les moteurs de recherche</strong> est un critère insuffisant pour l’<strong className="font-normal">évaluation d’une stratégie de référencement naturel</strong>, il reste un indice particulièrement utile pour évaluer la progression de la stratégie mise en œuvre. En effet, il est un indicateur que l’on peut considérer comme concret et observable.<br />
                            <br />
                            Cet outil est indispensable pour justifier et évaluer les actions mises en place dans le cadre d’une <strong className="font-normal">optimisation de site web pour le référencement naturel</strong>. Attention, le <strong className="font-normal">positionnement d’un site</strong> peut varier en fonction des données de localisation de l’utilisateur ou de son historique de navigation.<br />
                            <br />
                            Le <strong className="font-normal">rapport de positionnement</strong> est un outil particulièrement important que nous utilisons dans notre <strong><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">travail de référencement à Toulouse</Link></strong> pour évaluer les optimisations mises en place et définir la pertinence de nos actions pour des <strong className="font-normal">stratégies de référencement naturel</strong> efficaces.<br />
                        </p>
                        <br />
                        <h2 className="text-xl font-bold text-bleu">Pourquoi utiliser le rapport de positionnement ?</h2>
                        <br />
                        <p>
                            Lorsque l’on se lance dans une <strong className="font-normal">stratégie de référencement naturel</strong>, il est important de se doter d’<strong>outils professionnels</strong>. Ceci est particulièrement valable pour le <strong className="font-normal">suivi et l’évaluation de sa stratégie par le prisme du positionnement</strong>.<br />
                            <br />
                            Maîtriser sa <strong className="font-normal">stratégie de référencement</strong> pour <a href="https://startleader.fr/" target="_blank" rel="noopener noreferer" className="font-bold text-bleu hover:text-black"><strong>améliorer son positionnement</strong></a>, c’est avant tout être en mesure d’anticiper, mais aussi de réagir. Pour évaluer les effets du travail et des investissements réalisés, ce suivi va être important.<br />
                            <br />
                            En ce sens, le <strong>rapport de positionnement</strong> est exhaustif et doit faire partie des outils que vous vous appropriez. En revanche, <strong>mesurer sa stratégie de référencement uniquement par le biais de son positionnement reste insuffisant</strong>. En effet, un <strong className="font-normal">expert en référencement</strong> se base sur d’autres critères pour juger de la pertinence de votre <strong className="font-normal">stratégie SEO</strong> :<br />
                            <br />
                            <ul className="px-12 list-disc">
                                <li>le <strong className="font-normal">trafic généré</strong>,</li>
                                <li>le <strong className="font-normal">nombre de mots-clés positionnés</strong>,</li>
                                <li>les <strong className="font-normal">objectifs réalisés sur votre site</strong>,</li>
                                <li>le <strong className="font-normal">comportement des utilisateurs</strong> sur votre site,</li>
                                <li>etc.</li>
                            </ul>
                            <br />
                            En somme, il ne faut jamais perdre de vue que le <strong className="font-normal">travail de référencement naturel est un travail de long terme</strong> et que toutes les actions que vous mènerez pourront jouer un rôle. C’est pourquoi, le travail de suivi et d’évaluation est important afin de <strong>maîtriser au mieux sa stratégie en vue de l’infirmer, la confirmer ou l’ajuster</strong>.<br />
                        </p>
                        <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/"><img
                            src={banniere}
                            alt="Référencement Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        /></Link>
                    </div>
                    <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start" >
                        <div className="bloccontactblog w-full lg:w-full flex flex-col justify-center items-center century text-justify flex" style={{ background: '#3c3c3cfa url(' + bgbloc + ')', backgroundBlendMode: 'overlay', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                        <hr className="hrblog"></hr>
                        <br />
                        <h3 className="font-bold">Les notions liées au rapport de positionnement :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/landing-page/"><li>Landing Page</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/"><li>Optimisation Interne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/courte-traine/"><li>Courte traîne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/"><li>Longue Traîne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/arborescence-seo/"><li>Arborescence SEO</li></Link>
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
query lastsThreePostsRapportdePositionnement {
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
export default RapportdePositionnement;




