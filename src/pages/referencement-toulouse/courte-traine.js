import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";



class courtetraine extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Courte Traîne : Définition - Référencement Toulouse - Linkweb"
                    description="Les requêtes de courte traîne génèrent un trafic généralement plus important, mais moins qualifié que les requêtes de longue traîne."
                    url="https://linkweb.fr/referencement-toulouse/courte-traine/"
                    nom="Courte Traîne"
                    slug="referencement-toulouse/courte-traine/"
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
                            Courte Traîne
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que la courte traîne ?</h2>
                        <br />
                        <p>
                            La notion de <strong>courte traîne</strong> désigne une requête effectuée via la <strong className="font-normal">barre de recherche des moteurs de recherche comme Google</strong> et composée de peu de <strong className="font-normal">mots-clés</strong>. En effet, elles présentent généralement la particularité de constituer des requêtes globales, peu ciblées avec un faible <strong className="font-normal">nombre de mot</strong>s et qui drainent un <strong className="font-normal">volume de recherche</strong> conséquent.<br />
                            <br />
                                Elles s’opposent aux requêtes dites de « <strong className="font-normal">longue traîne</strong> » qui vont être composées de plusieurs mots-clés et qui vont surtout être utiles pour préciser une requête. Ces dernières sont particulièrement intéressantes pour <strong className="font-normal">cibler un trafic qualifié</strong> sur des requêtes <strong className="font-normal">pertinentes</strong> pour votre entreprise. Nous tenons compte des différents critères dans le <strong className="font-normal">choix des mots-clés</strong> de la stratégie de <strong className="font-normal">votre site internet</strong> dans le cadre de notre <strong><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">prestation de référencement à Toulouse</Link></strong>.<br />
                            <br />
                                Si la longue traîne est plus intéressante vis-à-vis de l’<strong className="font-normal">intention de recherche</strong> d’un utilisateur, les requêtes de courte traîne vont également <strong className="font-normal">générer du trafic</strong>, mais un trafic moins « qualifié ». Autrement dit, l’intention de recherche de l’utilisateur sera plus incertaine pour une requête de courte traîne que de longue traîne, c’est pourquoi répondre à ses besoins de façon précise sera également moins aisé.<br />
                            <br />
                                Par ailleurs, il faut savoir que les requêtes de courte traîne vont être plus difficilement accessibles en raison de la forte <strong className="font-normal">concurrence</strong> qui règne sur ce type de mot-clé. En effet, le <strong className="font-normal">nombre de concurrents</strong> actifs sur ces <strong className="font-normal">expressions clés</strong> va engendrer des difficultés à se <strong className="font-normal">positionner</strong> de manière efficace. Ces critères sont particulièrement importants lors de la <strong className="font-normal">recherche de mots-clés</strong> pour mener sa <strong className="font-normal">stratégie de référencement naturel</strong>.<br />
                            <br />
                                Établir une <strong className="font-normal">liste de mots-clés pertinents</strong> et qui suscitent des recherches (et donc de l’intérêt) est nécessaire. En revanche, <strong className="font-normal">trouver les bons mots-clés</strong>, c’est avant tout la recherche d’un équilibre entre le <strong className="font-normal">nombre de recherches</strong> (pour l’intérêt qu’il présente), le <strong className="font-normal">nombre de résultats</strong> (vis-à-vis de l’aspect <strong className="font-normal">concurrentiel</strong>), la <strong className="font-normal">pertinence de la recherche</strong> et sa capacité à <strong className="font-normal">générer du trafic qualifié</strong>.<br />
                            <br />
                                En fonction de ces critères, <strong className="font-normal">choisir ses mots-clés</strong> va potentiellement demander de miser sur une stratégie jouant sur la complémentarité des différents types de recherches : qu’il s’agisse de longue ou de courte traîne. <strong className="font-normal">Identifier les mots-clés</strong> qui vont permettre de donner de la visibilité à <strong className="font-normal">votre site web</strong> est indispensable pour mettre en place une <strong className="font-normal">stratégie de référencement</strong> performante.<br />
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
                        <h3 className="font-bold">Les notions liées à la courte traîne :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/"><li>Optimisation interne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/landing-page/"><li>Landing Page</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/"><li>Longue Traîne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/rapport-positionnement/"><li>Rapport de positionnement</li></Link>
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
query lastsThreePostscourtetraine {
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
export default courtetraine;




