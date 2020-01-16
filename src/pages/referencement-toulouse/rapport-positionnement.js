import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/referencement-ban.jpg";



class RapportdePositionnement extends React.Component {

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

                    <section className="w-full mt-40 text-justify font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <h1 data-aos="fade-up" className="century text-4xl sm:text-5xl text-center text-bleu mt-4 lg:mt-6">
                            Rapport de positionnement
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                            Un <strong>rapport de positionnement</strong> est un document primordial dans le suivi et l’évaluation d’une <strong className="font-normal">stratégie de référencement naturel</strong>. En effet, ce document va contenir des informations telles que :<br/>
                            <br/>
                            <ul className="px-12 list-disc">
                            <li>La liste des <strong className="font-normal">mots-clés</strong> ciblés,</li>
                            <li>La <strong className="font-normal">position des pages du site</strong> dans les <strong className="font-normal">pages de recherche des moteurs</strong>,</li>
                            <li>L’<strong className="font-normal">évolution du positionnement</strong> par rapport au précédent export d’informations,</li>
                            <li>l’<strong className="font-normal">URL des pages</strong> présentées dans les <strong className="font-normal">pages de résultats de recherche</strong>,</li>
                            <li>Ainsi que de nombreuses informations en relation avec la <strong className="font-normal">visibilité globale du site</strong>, le rapport avec les <strong className="font-normal">sites concurrents</strong>, etc.</li>
                            </ul><br/>
                            Si le <strong className="font-normal">positionnement d’un site sur les moteurs de recherche</strong> est un critère insuffisant pour l’<strong className="font-normal">évaluation d’une stratégie de référencement naturel</strong>, il reste un indice particulièrement utile pour évaluer la progression de la stratégie mise en œuvre. En effet, il est un indicateur que l’on peut considérer comme concret et observable.<br/>
                            <br/>
                            Cet outil est indispensable pour justifier et évaluer les actions mises en place dans le cadre d’une <strong className="font-normal">optimisation de site web pour le référencement naturel</strong>. Attention, le <strong className="font-normal">positionnement d’un site</strong> peut varier en fonction des données de localisation de l’utilisateur ou de son historique de navigation.<br/>
                            <br/>
                            Le <strong className="font-normal">rapport de positionnement</strong> est un outil particulièrement important que nous utilisons dans notre <strong><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">travail de référencement à Toulouse</Link></strong> pour évaluer les optimisations mises en place et définir la pertinence de nos actions pour des <strong className="font-normal">stratégies de référencement naturel</strong> efficaces.<br/>
                        </p>
                        <img
                            src={banniere}
                            alt="Référencement Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées au Rapport de positionnement :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/">Référencement Local</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/">Backlinks</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/">Techniques de référencement</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/">Optimisation interne</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/arborescence-seo/">Arborescence SEO</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/serp/">SERP</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/e-reputation/">E-Réputation</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/landing-page/">Landing Page</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/mots-cles/">Mots-clés</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/">Longue Traîne</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/courte-traine/">Courte Traîne</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/">Critères de qualité</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/sur-optimisation/">Sur-Optimisation</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/audit-seo/">Audit SEO</Link></li>
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
export default RapportdePositionnement;




