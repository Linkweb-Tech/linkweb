import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/creation-site-internet-ban.png";



class maquetteSiteWeb extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Maquette de site web : Définition - Création site internet Toulouse - Linkweb"
                    description="Réaliser une esquisse ou prototype d'un site internet en cours de création est important dans le processus de création de site internet."
                    url="https://linkweb.fr/creation-site-internet-toulouse/maquette-site-web/"
                    nom="Maquette site web"
                    slug="creation-site-internet-toulouse/maquette-site-web/"
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
                        Maquette de site web
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                La <strong>maquette de site web</strong> correspond à une esquisse, voire un <strong className="font-normal">prototype d’un site internet</strong> en création. Le processus de <strong className="font-normal">création graphique</strong> qui donne lieu à la <strong className="font-normal">création de maquettes graphiques></strong> est appelé « <strong>maquettage</strong> ». La <strong className="font-normal">réalisation des maquettes</strong> se concentre principalement sur l’aspect <strong className="font-normal">graphique</strong> et le <strong className="font-normal">design d’un site web</strong> et de ses interfaces. Attention, ceci ne signifie pas l'occultation de tout l'aspect technique et fonctionnel du site dans le travail du maquettage. Avoir recours à un <strong className="font-normal">designer</strong> ou <strong className="font-normal">graphiste</strong> peut s’avérer être utile.<br/>
                                <br/>
                                <strong className="font-normal">Créer une maquette</strong> consiste à mettre en place un <strong className="font-normal">prototype</strong> qui sera nécessaire en termes de <strong className="font-normal">gestion de projet web</strong>, en vue de la validation de l’avancée du projet par le client. En effet, <strong className="font-normal">réaliser des maquettes</strong> durant la <strong className="font-normal">conception de site</strong> internet est très important, à la fois pour visualiser le dessin du projet, mais également pour effectuer des validations progressives. Respect de la <strong className="font-normal">charte graphique</strong>, mise en place des <strong className="font-normal">éléments graphiques</strong>, travail de l’<strong className="font-normal">ergonomie</strong> : le maquettage fait partie du travail de <strong className="font-normal">webdesign</strong>. Travailler le <strong className="font-normal">zoning</strong> puis le <strong className="font-normal">wireframe</strong>, créer des <strong className="font-normal">mockups dynamiques en HTML/CSS</strong> (notamment pour tester l’<strong className="font-normal">arborescence</strong> et l’intuitivité de la navigation sur le site), ou bien utiliser des logiciels de <strong className="font-normal">graphisme</strong> sont autant de façons qui permettent d’obtenir un premier aperçu du <strong className="font-normal">rendu final</strong> du site.<br/>
                                <br/>
                                La <strong className="font-normal">création d’une maquette graphique</strong> permet de tester et évaluer le <strong className="font-normal">web design</strong> du site à travers l’UI (<strong className="font-normal">design d’interface</strong>) et l’UX design (<strong className="font-normal">expérience utilisateur</strong>), mais aussi l’<strong className="font-normal">ergonomie du site</strong> et plus particulièrement des <strong className="font-normal">pages web</strong>. En <strong className="font-normal">agence web</strong>, le <strong className="font-normal">prototypage</strong> appartient aux <strong>intégrateurs</strong>, au <strong>webdesigner</strong> ou <strong>graphiste</strong> ainsi qu’au <strong>développeur front end</strong>. Cette phase est importante dans notre processus de <strong><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/">création de site internet à Toulouse</Link></strong> pour faire de <strong className="font-normal">votre site internet</strong>, un site <strong>responsive</strong>, <strong>ergonomique</strong> et <strong>efficace</strong>. C’est ainsi que nous bâtissons des <strong className="font-normal">solutions web fonctionnelles</strong> et ce, dès la mise en ligne.<br/>
                                <br/>
                                La <strong className="font-normal">création de prototypes de sites internet</strong> est à la croisée entre le <strong className="font-normal">graphisme</strong> et le <strong className="font-normal">développement web</strong> et nous assure la mise en place d’un <strong className="font-normal">site à votre image</strong>. Grâce à une <strong>interface graphique</strong> définie, nous sommes également en mesure de garantir un aspect <strong className="font-normal">fonctionnel</strong> de nos créations en parfaite cohérence avec leur aspect graphique.<br/>
                            </p>
                        <img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées à la maquette de site web :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/">UI Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/">UX Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/">Développement Web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/">Front-End</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/back-end/">Back-End</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/w3c/">W3C</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/">Responsive Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/mobile-first/">Mobile First</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/">Webdesign</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/charte-graphique/">Charte graphique</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/redaction-web/">Rédaction Web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/">Refonte site internet</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/">CMS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/">HTML/CSS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/">Framework</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/nom-de-domaine/">Nom de domaine</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/moteurs-recherche/">Moteurs de recherche</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/arborescence-site-internet/">Arborescence site internet</Link></li>
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
query lastsThreePostsmaquette {
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
export default maquetteSiteWeb;




