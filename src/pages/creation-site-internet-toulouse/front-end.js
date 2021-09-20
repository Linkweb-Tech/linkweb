import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class frontend extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Front-End : Définition - Création site internet Toulouse - Linkweb"
                    description="La partie front-end d'un site internet fait référence à l'ensemble des éléments visibles sur le site web."
                    url="https://linkweb.fr/creation-site-internet-toulouse/front-end/"
                    nom="Front-end"
                    slug="creation-site-internet-toulouse/front-end/"
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
                            Front-End
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que le Front-End ?</h2>
                        <br />
                        <p>
                            En <strong className="font-normal">développement web</strong>, la notion de <strong>« front end »</strong> fait référence à l’ensemble des éléments visibles et accessibles directement sur un <strong className="font-normal">site web</strong> (voire sur une <strong className="font-normal">application web</strong> ou une <strong className="font-normal">application web mobile</strong>). Il s’oppose par définition au « <strong className="font-normal">back-end</strong> » qui concerne toute la partie invisible de la <strong className="font-normal">conception d’un site internet</strong>, tel que le <strong className="font-normal">développement de bases de données</strong>, par exemple.<br />
                            <br />
                                Pour mener à bien un <strong className="font-normal">projet web</strong>, les notions de <strong className="font-normal">backend</strong> et de <strong className="font-normal">front-end</strong> vont être parfaitement complémentaires, c’est pourquoi, au sein de notre <strong className="font-normal"><Link to="/" className="text-bleu hover:text-black font-bold">agence web à Toulouse</Link></strong>, nous sommes en mesure de faire appel aux <strong className="font-normal">compétences</strong> de chacun dans nos <strong><Link to="/creation-site-internet-toulouse/" className="text-bleu hover:text-black font-bold">projets de création de site internet à Toulouse</Link></strong>.<br />
                            <br />
                                Le <strong className="font-normal">développement informatique</strong> implique une parfaite maîtrise des <strong className="font-normal">langages de programmation</strong> :  le <strong className="font-normal">métier de développeur</strong> demande, en effet, de savoir <strong className="font-normal">coder</strong> en <strong>PHP</strong>, <strong>JavaScript</strong>, <strong>HTML et CSS</strong>, Python, mais également de maîtriser des <strong>frameworks</strong> (<strong className="font-normal">framework Bootstrap</strong>, Symphony) ou autres <strong>CMS</strong> (Content Management System) et systèmes de gestion de bases de données (<strong className="font-normal">MySQL</strong>). <br />
                            <br />
                            <h2 className="text-3xl text-bleu font-bold">Front End : des spécifications à maîtriser pour le chef de projet web</h2>
                            <br/>
                                Pour le bon déroulement d’un projet web, il est important d’optimiser l’attribution des tâches et mission. En effet, devenir développeur full stack, front-end ou back-end ne fait pas appel aux mêmes compétences. À ce niveau, le développeur front end devra maîtriser chaque langage de programmation et l’ensemble des technologies web liées à l’expérience utilisateur et au design. Il est un concepteur-développeur.
                            <br/>
                                Un <strong className="font-normal">développeur front-end</strong> possède un rôle de <strong className="font-normal">web designer (ou webdesigner)</strong> ainsi que d’<strong className="font-normal">intégrateur web</strong> dans le sens où c’est lui qui va être chargé de la définition du <strong className="font-normal">webdesign des pages web</strong> avec pour objectif de mettre en place les <strong className="font-normal">solutions techniques</strong> nécessaires pour une <strong className="font-normal">expérience utilisateur</strong> optimale (notamment en termes de <strong className="font-normal">responsive design</strong>) et un design d’<strong className="font-normal">interfaces</strong> intuitif.<br />
                            <br />
                                L’aspect <strong className="font-normal">responsive web design</strong> d’un site internet, aussi bien que son <strong className="font-normal">ergonomie</strong> incombe au travail d’un <strong className="font-normal">développeur web front-end</strong>. Si cela est applicable pour un site web, c’est également vrai pour des <strong className="font-normal">applications web</strong>, comme pour des <strong className="font-normal">applications mobiles</strong>. Il est donc responsable de la création des <strong className="font-normal">maquettes</strong> puis de la <strong className="font-normal">programmation web</strong> visant à créer un site en corrélation avec les <strong className="font-normal">besoins du client</strong>.<br />
                            <br/>
                                Enfin, il faut savoir que le poste de <strong className="font-normal">développeur informatique</strong> comme de développeur web peut être pratiqué en tant que <strong className="font-normal">freelance</strong> ou bien au sein d’une agence. L’acquisition de ses compétences peut se faire au travers d’une <strong className="font-normal">formation supérieure de programmeur web</strong>, mais il est tout à fait possible d’être <strong className="font-normal">autodidacte</strong>. 
                            <br/>
                                Le rôle du développeur est important en termes de <strong className="font-normal">gestion de projet</strong>, car c’est lui qui concrétise toutes les solutions permettant de répondre aux <strong className="font-normal">besoins des utilisateurs</strong>. Il s’intègre dans une parfaite complémentarité avec le développeur back end. <strong className="font-normal">Travailler en équipe</strong> est indispensable pour les <strong className="font-normal">développeurs intégrateurs</strong> comme pour les <strong className="font-normal">programmeurs</strong> en vue d’une réalisation complète, pertinente et fonctionnelle.
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
                        <h3 className="font-bold">Les notions liées au Front-end :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/"><li>UI Design</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/"><li>Framework</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/back-end/"><li>Back-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/"><li>Refonte site internet</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/"><li>Maquette de site web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/"><li>HTML/CSS</li></Link>
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
query lastsThreePostsfrontend {
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
export default frontend;




