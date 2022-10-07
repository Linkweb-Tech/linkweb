import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class maquetteSiteWeb extends Component {

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

                <section className="w-full century mt-40 flex flex-col items-center justify-start bg-bleu" style={{ background: '#00000073 url(' + Bg + ')', minHeight: '300px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                    <div className="topdef">
                        <span className="text-center text-xl font-bold text-white">Définition</span>
                    </div>
                    <div>
                        <h1 data-aos="fade-up" className="century text-5xl sm:text-6xl text-bleu text-center text-white mt-4 lg:mt-6">
                            Maquette de site web
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce qu'une maquette de site web ?</h2>
                        <br />
                        <p>
                            La <strong>maquette de site web</strong> correspond à une esquisse, voire un <strong className="font-normal">prototype d’un site internet</strong> en création. Le processus de <strong className="font-normal">création graphique</strong> qui donne lieu à la <strong className="font-normal">création de maquettes graphiques></strong> est appelé « <strong>maquettage</strong> ». La <strong className="font-normal">réalisation des maquettes</strong> se concentre principalement sur l’aspect <strong className="font-normal">graphique</strong> et le <strong className="font-normal">design d’un site web</strong> et de ses interfaces. Attention, ceci ne signifie pas l'occultation de tout l'aspect technique et fonctionnel du site dans le travail du maquettage. Avoir recours à un <strong className="font-normal">designer</strong> ou <strong className="font-normal">graphiste</strong> peut s’avérer être utile.<br />
                            <br />
                            <strong className="font-normal">Créer une maquette</strong> consiste à mettre en place un <strong className="font-normal">prototype</strong> qui sera nécessaire en termes de <strong className="font-normal">gestion de projet web</strong>, en vue de la validation de l’avancée du projet par le client. En effet, <strong className="font-normal">réaliser des maquettes</strong> durant la <strong className="font-normal">conception de site</strong> internet est très important, à la fois pour visualiser le dessin du projet, mais également pour effectuer des validations progressives. Respect de la <strong className="font-normal">charte graphique</strong>, mise en place des <strong className="font-normal">éléments graphiques</strong>, travail de l’<strong className="font-normal">ergonomie</strong> : le maquettage fait partie du travail de <strong className="font-normal">webdesign</strong>. Travailler le <strong className="font-normal">zoning</strong> puis le <strong className="font-normal">wireframe</strong>, créer des <strong className="font-normal">mockups dynamiques en HTML/CSS</strong> (notamment pour tester l’<strong className="font-normal">arborescence</strong> et l’intuitivité de la navigation sur le site), ou bien utiliser des logiciels de <strong className="font-normal">graphisme</strong> sont autant de façons qui permettent d’obtenir un premier aperçu du <strong className="font-normal">rendu final</strong> du site.<br />
                            <br />
                                La <strong className="font-normal">création d’une maquette graphique</strong> permet de tester et évaluer le <strong className="font-normal">web design</strong> du site à travers l’UI (<strong className="font-normal">design d’interface</strong>) et l’UX design (<strong className="font-normal">expérience utilisateur</strong>), mais aussi l’<strong className="font-normal">ergonomie du site</strong> et plus particulièrement des <strong className="font-normal">pages web</strong>. Dans notre <strong className="font-normal"><Link to="/" className="text-bleu hover:text-black font-bold">agence web à Agen</Link></strong>, le <strong className="font-normal">prototypage</strong> appartient aux <strong>intégrateurs</strong>, au <strong>webdesigner</strong> ou <strong>graphiste</strong> ainsi qu’au <strong>développeur front end</strong>. Cette phase est importante dans notre processus de <strong><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/">création de site internet à Toulouse</Link></strong> pour faire de <strong className="font-normal">votre site internet</strong>, un site <strong>responsive</strong>, <strong>ergonomique</strong> et <strong>efficace</strong>. C’est ainsi que nous bâtissons des <strong className="font-normal">solutions web fonctionnelles</strong> et ce, dès la mise en ligne.<br />
                            <br />
                                La <strong className="font-normal">création de prototypes de sites internet</strong> est à la croisée entre le <strong className="font-normal">graphisme</strong> et le <strong className="font-normal">développement web</strong> et nous assure la mise en place d’un <strong className="font-normal">site à votre image</strong>. Grâce à une <strong>interface graphique</strong> définie, nous sommes également en mesure de garantir un aspect <strong className="font-normal">fonctionnel</strong> de nos créations en parfaite cohérence avec leur aspect graphique.<br />
                        </p>
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Quel est l’intérêt d’une maquette dans le processus de création de site internet ?</h2>
                        <br />
                        <p>
                            Créer une <strong className="font-normal">maquette graphique</strong> permet de travailler à partir d'une <strong className="font-normal">charte graphique</strong> précise, une <strong className="font-normal">intégration des contenus rédigés</strong> de manière ergonomique et fluide. Elle est efficace pour <strong className="font-normal">visualiser le projet</strong> plus facilement et <strong className="font-normal">procéder à des corrections</strong> de manière progressive.<br />
                            <br />
                            Les développeurs vont concevoir la maquette avec un <strong className="font-normal">webdesign adapté</strong> grâce à l'<strong className="font-normal">UI et UX Design</strong> pour offrir une <strong className="font-normal">expérience utilisateur</strong> optimale à l’internaute. Ce prototype est indispensable pour concrétiser la <strong className="font-normal">création du support</strong>.<br />
                            <br />
                            Grâce à cet outil, le client comme le spécialiste vont réaliser l’<strong className="font-normal">agencement du site</strong> et en respectant l'<strong className="font-normal">identité visuelle</strong> à véhiculer pour un site remplissant tous les critères des navigateurs, des <strong className="font-normal">moteurs de recherche</strong> mais surtout du client. Pour une bonne gestion de projet et une collaboration efficace, cette partie focalisée sur l’<strong className="font-normal">aspect design du site</strong> est régulièrement soumise à validation et les consultations peuvent être fréquentes jusqu’à obtenir la formule parfaite en vue de la <Link to="/creation-de-site-internet-a-agen/" className="font-bold text-bleu hover:text-black">création de site internet à Agen</Link>.<br />
                            <br />
                            Le « maquettage » touche surtout à la <strong className="font-normal">production visuelle</strong>, à la <strong className="font-normal">prestation graphique et fonctionnelle du site internet</strong> réalisé. Tout le zoning est défini dans une optique d'<strong className="font-normal">efficacité et de performance</strong>. Grâce aux services de professionnels (<a href="https://www.energiedin.ma/" rel="noopener noreferer" target="_blank" className="text-bleu hover:text-black font-bold">agence web Maroc</a>), les solutions digitales apportées par l’<strong className="font-normal">agence web</strong> sont performantes pour produire un <strong className="font-normal">site responsive design</strong>, esthétique et en cohérence totale avec les besoins de votre cible de clientèle.<br />
                        </p>
                        <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/"><img
                            src={banniere}
                            alt="Création site internet Toulouse"
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
                        <h3 className="font-bold">Les notions liées à la maquette de site web :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/"><li>UI Design</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/"><li>Framework</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/"><li>Front-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/back-end/"><li>Back-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/"><li>HTML/CSS</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/"><li>Refonte site internet</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/"><li>Développement Web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/nom-de-domaine/"><li>Nom de domaine</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webmarketing/"><li>Webmarketing</li></Link>
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
export default maquetteSiteWeb;




