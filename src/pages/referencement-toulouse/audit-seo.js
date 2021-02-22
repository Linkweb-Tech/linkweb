import React, { Component } from 'react';
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";



class AuditSEO extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Audit SEO : Définition - Référencement Toulouse - Linkweb"
                    description="L'audit SEO est un moment clé de la vie d'un site. Il peut-être utile pour apporter un second souffle à son site web."
                    url="https://linkweb.fr/referencement-toulouse/audit-seo/"
                    nom="Audit SEO"
                    slug="referencement-toulouse/audit-seo/"
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
                        <h2 className="text-center text-xl font-bold text-white">Définition</h2>
                    </div>
                    <div>
                        <h1 data-aos="fade-up" className="century text-5xl sm:text-6xl text-bleu text-center text-white mt-4 lg:mt-6">
                            Audit SEO
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que l'Audit SEO ?</h2>
                        <br />
                        <p>
                            L'<strong>audit de référencement</strong> désigne l’analyse globale d’un <strong className="font-normal">site internet</strong> réalisée à partir d’une grille de critères fondés sur le <strong className="font-normal">référencement naturel</strong>. Un <strong className="font-normal">audit SEO</strong> concerne donc plusieurs domaines du référencement : le <strong className="font-normal">positionnement d’un site web</strong> par rapport à un <strong className="font-normal">mot-clé</strong> visé, l’<strong className="font-normal">optimisation technique des pages web</strong>, le <strong className="font-normal">maillage de liens internes</strong> ou l’<strong className="font-normal">expérience utilisateur</strong> mise en place sur le site ainsi que des éléments extérieurs tels que le <strong className="font-normal">netlinking</strong> (étude des <strong className="font-normal">backlink</strong>s ou <strong className="font-normal">liens externes</strong>) et dans certains cas l’e-réputation. L’<strong className="font-normal">audit SEO</strong> est une étape importante dans notre service de <strong><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">référencement à Toulouse</Link></strong>.<br />
                            <br />
                            <strong className="font-normal">Réaliser un audit technique de référencement</strong> est conseillé à divers moments de la vie de votre site web : avant une refonte ou lorsque <strong className="font-normal">votre site internet</strong> n’est pas performant par exemple (si votre site ne génère pas de <strong className="font-normal">trafic</strong>, ni de <strong className="font-normal">visibilité</strong> sur les <strong className="font-normal">moteurs de recherche comme Google</strong>). Il est également possible de mettre en place un audit de référencement en vue d’étudier l’aspect <strong className="font-normal">concurrentiel</strong> que présente un mot-clé, mais également les opportunités à saisir grâce à un bon référencement avant même la <strong className="font-normal">création d’un site internet</strong>.<br />
                            <br />
                                Le travail d’<strong className="font-normal">audit de site internet</strong> est celui d’un <strong className="font-normal">référenceur</strong> ou <strong className="font-normal">consultant SEO</strong>. Ce dernier va analyser l’ensemble des <strong className="font-normal">optimisations</strong> (au niveau des <strong className="font-normal">balises</strong> comme des <strong className="font-normal">contenus</strong>) réalisées sur votre site pour déterminer les perspectives d’amélioration et découvrir les facteurs <strong className="font-normal">bloquants</strong>. Il est important de se baser sur des données concrètes pour <strong className="font-normal">améliorer le référencement d’un site</strong>.<br />
                            <br />
                                C’est pourquoi le travail d’audit va consister à mettre en place diverses évaluations concernant l’<strong className="font-normal">indexation des pages de votre site</strong>, l’existence de <strong className="font-normal">contenu dupliqué</strong> ou encore le <strong className="font-normal">temps de chargement des pages</strong> ainsi que toute une quantité de critères qui vont permettre la définition d’une <strong className="font-normal">stratégie de référencement naturel</strong> qui vous permettra d’obtenir <strong className="font-normal">plus de trafic</strong> organique sur votre site et de proposer une <strong className="font-normal">expérience utilisateur</strong> optimale grâce à une <strong className="font-normal">vitesse de chargement</strong> acceptable.<br />
                            <br />
                                L’audit est intéressant pour mettre au jour des <strong className="font-normal">leviers pertinents</strong> pour votre site web qui vous permettront de gagner en positionnement dans les <strong className="font-normal">pages de résultats</strong> (voire atteindre la <strong className="font-normal">première pag</strong>e lorsque cela est possible). L’<strong className="font-normal">optimisation SEO</strong> proposée à l’issue de cette <strong className="font-normal">analyse de site</strong> doit également être adaptée en fonction des <strong className="font-normal">algorithmes des moteurs de recherche</strong>. C’est pourquoi, l’<strong className="font-normal">audit SEO</strong> est une étape clé dans la vie d’un site web.<br />
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
                        <h3 className="font-bold">Les notions liées à l'audit SEO :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/"><li>Référencement local</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/"><li>Backlinks</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/"><li>Techniques de référencement</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/"><li>Optimisation interne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/donnees-structurees/"><li>Données structurées</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/serp/"><li>SERP</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/e-reputation/"><li>E-Réputation</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/landing-page/"><li>Landing Page</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/mots-cles/"><li>Mots-clés</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/"><li>Longue Traîne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/courte-traine/"><li>Courte Traîne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/rapport-positionnement/"><li>Rapport de positionnement</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/"><li>Critères de qualité</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/sur-optimisation/"><li>Sur-Optimisation</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/erreur-404/"><li>Erreurs 404</li></Link>
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
query lastsThreePostsAuditSEO {
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
export default AuditSEO;




