import React, { Component } from 'react';
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";
import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";



class arborescenceSiteInternet extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Arborescence site : Définition - Création site internet Toulouse"
                    description="La définition de l'arborescence d'un site internet est une étape décisive au cours de la création d'un site internet."
                    url="https://linkweb.fr/creation-site-internet-toulouse/arborescence-site-internet/"
                    nom="Arborescence site internet"
                    slug="creation-site-internet-toulouse/arborescence-site-internet/"
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
                        <h1 data-aos="fade-up" className="century text-5xl sm:text-4xl text-center text-white mt-4 lg:mt-6">
                            Arborescence <br /><span className="uppercase text-6xl font-bold text-bleu">site internet</span>
                        </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que l'arborescence d'un site internet ?</h2>
                        <br />
                        <p>
                            L’<strong>arborescence d’un site internet</strong> correspond à l’<strong className="font-normal">architecture du site</strong> représentant l’organisation des contenus présents sur le <strong className="font-normal">site web</strong> par ordre de <strong className="font-normal">hiérarchisation</strong>. En ce sens, l’arborescence est une représentation schématique qui reflète la <strong className="font-normal">hiérarchisation des pages</strong> de votre site en fonction de la <strong className="font-normal">profondeur de clics</strong> et du <strong className="font-normal">maillage interne</strong> effectué entre les <strong className="font-normal">différentes pages</strong>.<br />
                            <br />
                                La création de l’<strong className="font-normal">arborescence d’un site web</strong> est l’une des phases prédominantes dans le processus de <strong><Link className="text-bleu hover:text-black font-bold" to="/creation-site-internet-toulouse/">création de site internet à Toulouse</Link></strong>. En effet, certains critères vont amener à réaliser des choix qui vont conditionner la <strong className="font-normal">structuration du contenu de son site</strong> de façon pertinente. En effet, il est possible de <strong className="font-normal">structurer le contenu du site</strong> et la création de <strong className="font-normal">liens internes pertinents</strong> en fonction du <strong className="font-normal">référencement naturel (SEO)</strong> et la répartition des <strong className="font-normal">mots-clés</strong>, de l’<strong className="font-normal">expérience utilisateur</strong> (en termes d’<strong className="font-normal">ergonomie</strong>) et du fait de <strong className="font-normal">naviguer</strong> de façon cohérente ou encore en fonction de <strong className="font-normal">votre image</strong> ainsi que de la présentation de vos services.<br />
                            <br />
                                Toutefois, pour mettre en place une arborescence cohérente, il sera nécessaire de procéder à certains choix qui vont dépendre des objectifs globaux de <strong className="font-normal">votre site internet</strong> et plus amplement de <strong className="font-normal">votre projet web</strong>. Si l’objectif est d’<strong className="font-normal">être visible sur les moteurs de recherche</strong>, alors il faudra créer une arborescence totalement dédiée à cet objectif. Cela peut être perçu comme contraignant en termes de communication dans certains cas où il vaudra mieux mettre en avant les <strong className="font-normal">expressions clés</strong> travaillées plutôt que le slogan de l’entreprise par exemple.<br />
                            <br />
                                La <strong className="font-normal">définition de l’arborescence</strong> peut-être nécessaire dans le cas d’une <strong>refonte du site</strong> et évidemment dans la <strong>création de site internet</strong>. <strong className="font-normal">Hiérarchiser l’architecture de l’information sur son site internet</strong> à travers la définition de <strong className="font-normal">catégories</strong> et <strong className="font-normal">sous-catégories</strong> doit permettre de <strong>créer un site internet performant</strong> et d’<strong>améliorer le référencement du site</strong> également. Il peut-être intéressant de créer un <strong className="font-normal">menu principal</strong> qui va lister et <strong className="font-normal">regrouper les pages web</strong> que vous définissez comme principales afin de gagner en clarté. À partir de là, <strong className="font-normal">différents niveaux</strong> de hiérarchisation peuvent être mis en place et la <strong className="font-normal">structure du site</strong> se dessine en fonction des liens effectués entre les <strong className="font-normal">différentes pages du site web</strong>. <strong className="font-normal">Chaque page web du site</strong> doit être liée à la structure pour ne pas perdre en cohérence, ni en pertinence.<br />
                            <br />
                            <strong className="font-normal">Avoir un site web</strong> dont l’arborescence a été réfléchie et organisée en fonction de vos objectifs dès le départ vous permettra de gagner un temps précieux. En termes de référencement, travailler la structure d’un site web est décisif pour créer un site prêt à l’<strong className="font-normal">indexation</strong> et à obtenir de la visibilité sur les <strong className="font-normal">moteurs de recherches</strong>.<br />
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
                        <h3 className="font-bold">Les notions liées à l'arborescence d'un site web :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/"><li>UI Design</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/"><li>UX Design</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/"><li>Développement Web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/"><li>Front-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/back-end/"><li>Back-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/w3c/"><li>W3C</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/"><li>Responsive Design</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/mobile-first/"><li>Mobile First</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/"><li>Webdesign</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/charte-graphique/"><li>Charte graphique</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/redaction-web/"><li>Rédaction Web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/"><li>Refonte site internet</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/"><li>Maquette de site web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/"><li>CMS</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/"><li>HTML/CSS</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/"><li>Framework</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/nom-de-domaine/"><li>Nom de domaine</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/moteurs-recherche/"><li>Moteurs de recherche</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/strategie-digitale/"><li>Stratégie Digitale</li></Link>
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
query lastsThreePostsarborescence {
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
export default arborescenceSiteInternet;




