import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";



class CriteresQualite extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Critères de qualité : Définition - Référencement Toulouse - Linkweb"
                    description="Les critères de qualité permettent de mettre en place un contenu parfaitement en accord avec Google, mais également avec les attentes des utilisateurs."
                    url="https://linkweb.fr/referencement-toulouse/criteres-qualite/"
                    nom="Critères de Qualité"
                    slug="referencement-toulouse/criteres-qualite/"
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

                    <section className="w-full century mt-40 flex flex-col items-center justify-start bg-bleu" style={{background:'#00000073 url('+ Bg +')', minHeight:'300px', backgroundPosition:'center', backgroundSize:'cover',backgroundBlendMode:'overlay'}}>
                        <div className="topdef">
                            <h2 className="text-center text-xl font-bold text-white">Définition</h2>
                        </div>
                        <div>
                            <h1 data-aos="fade-up" className="century text-5xl sm:text-6xl text-bleu text-center text-white mt-4 lg:mt-6">
                                Critères de qualité
                            </h1>
                        </div>
                    </section>
                    <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que les critères de qualité ?</h2>
                            <br/>
                            <p>
                                <strong className="font-normal">Créer du contenu optimisé pour le référencement naturel (SEO)</strong> a pour finalité de produire un <strong className="font-normal">contenu éditorial</strong> performant aussi bien pour les <strong className="font-normal">moteurs de recherche</strong> que pour les utilisateurs. C’est pourquoi, développer une <strong className="font-normal">stratégie de contenus</strong> performante doit permettre de réaliser un <strong className="font-normal">contenu utile</strong>, mais aussi un <strong className="font-normal">contenu engageant</strong> et donc un <strong className="font-normal">contenu de grande qualité</strong> comme nous sommes tenus de réaliser dans notre travail <Link className="font-bold text-bleu hover:text-black" to="/referencement-toulouse/"><strong>de référencement à Toulouse</strong></Link>.<br/>
                                <br/>
                                C’est pourquoi le <strong className="font-normal">content marketing (marketing de contenu)</strong> s’appuie des <strong>critères de qualité</strong> pour <strong className="font-normal">rédiger du contenu de qualité</strong> selon la perception des <strong className="font-normal">moteurs de recherche</strong>, mais également rédiger des <strong className="font-normal">contenus pertinents</strong> pour vos utilisateurs. La <strong className="font-normal">stratégie éditoriale de votre site internet</strong>, visant à <strong className="font-normal">proposer du contenu de qualité</strong> doit être construite aussi bien en adéquation avec les attentes des utilisateurs, qu’en accord avec les <strong className="font-normal">critères de qualité de Google</strong>, par exemple.<br/>
                                <br/>
                                Une <strong className="font-normal">bonne stratégie de contenu</strong> doit permettre d’adapter sa production selon le <strong className="font-normal">type de contenu</strong> : <strong className="font-normal">contenu rédactionnel</strong>, <strong className="font-normal">contenu illustré</strong> (comme les <strong className="font-normal">infographies</strong> notamment), etc. Un <strong className="font-normal">contenu à forte valeur ajoutée aux yeux de Google</strong>, c’est avant tout un <strong className="font-normal">contenu intéressant</strong>, un <strong className="font-normal">contenu compréhensible</strong>, rapidement accessible et un <strong className="font-normal">contenu pertinent</strong> vis-à-vis de la requête des utilisateurs. En ce sens, la qualité des contenus est régie ou, en tout cas, orientée par les critères de qualité exposés dans les <strong className="font-normal">Quality Guidelines de Google</strong>.<br/>
                                <br/>
                                Il convient au <strong className="font-normal">rédacteur web</strong>, spécialisé dans la <strong className="font-normal">création de contenu web</strong>, de définir le <strong className="font-normal">contenu de votre site</strong> dans le respect de votre <strong className="font-normal">ligne éditoriale</strong>. Cette stratégie devra forcément être adaptée en fonction de vos <strong className="font-normal">mots-clés</strong> (en termes de <strong className="font-normal">contenu SEO</strong>). La <strong className="font-normal">rédaction web</strong> est un domaine très particulier du travail à effectuer sur un site internet puisqu’il doit, à la fois, permettre de <strong className="font-normal">fidéliser</strong> ses lecteurs, tout en proposant un contenu qui permettra à votre page web de <strong className="font-normal">gagner en performance SEO</strong>.<br/>
                        </p>
                        <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/"><img
                            src={banniere}
                            alt="Référencement Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        /></Link>
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start" >
                            <div className="bloccontactblog w-full lg:w-full flex flex-col justify-center items-center century text-justify flex" style={{background:'#3c3c3cfa url(' + bgbloc +')', backgroundBlendMode:'overlay', backgroundSize:'cover', backgroundPosition:'center'}}>
                                <h2>Vous souhaitez mettre en place un projet web ?</h2>
                                <br/>
                                <h3>Linkweb met en place votre projet de création de site web.</h3>
                                <br/>
                                <div className="w-1/2 flex flex-row justify-center items-center">
                                <br/>
                                    <BoutonBlog  url="/contact-agence-web-toulouse/" text="Contactez-nous" position="center" />
                                </div>
                            </div>
                            <br/>
                            <hr className="hrblog"></hr>
                            <br/>
                            <h3 className="font-bold">Les notions liées aux critères de qualité :</h3>
                            <br/>
                            <hr className="hrblog"></hr>
                            <br/>
                            <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/"><li>Référencement local</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/audit-seo/"><li>Audit SEO</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/"><li>Techniques de référencement</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/"><li>Optimisation interne</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/donnees-structurees/"><li>Données structurées</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/serp/"><li>SERP</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/e-reputation/"><li>E-Réputation</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/landing-page/"><li>Landing Page</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/mots-cles/"><li>Mots-clés</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/"><li>Longue Traîne</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/"><li>Backlinks</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/rapport-positionnement/"><li>Rapport de positionnement</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/"><li>courte traîne</li></Link>
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
query lastsThreePostsCriteresQualite {
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
export default CriteresQualite;




