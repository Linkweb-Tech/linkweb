import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/creation-site-internet-ban.png";



class frontend extends React.Component {

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

                    <section className="w-full mt-40 text-justify font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <h1 data-aos="fade-up" className="century text-4xl sm:text-5xl text-center text-bleu mt-4 lg:mt-6">
                            Front-end
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                En <strong className="font-normal">développement web</strong>, la notion de <strong>« front end »</strong> fait référence à l’ensemble des éléments visibles et accessibles directement sur un <strong className="font-normal">site web</strong> (voire sur une <strong className="font-normal">application web</strong> ou une <strong className="font-normal">application web mobile</strong>). Il s’oppose par définition au « <strong className="font-normal">back-end</strong> » qui concerne toute la partie invisible de la <strong className="font-normal">conception d’un site internet</strong>, tel que le <strong className="font-normal">développement de bases de données</strong>, par exemple.<br/>
                                <br/>
                                Pour mener à bien un <strong className="font-normal">projet web</strong>, les notions de <strong className="font-normal">backend</strong> et de <strong className="font-normal">front-end</strong> vont être parfaitement complémentaires, c’est pourquoi, au sein de notre <strong className="font-normal">agence web</strong>, nous sommes en mesure de faire appel aux <strong className="font-normal">compétences</strong> de chacun dans nos <strong><Link to="/creation-site-internet-toulouse/" className="text-bleu hover:text-black font-bold">projets de création de site internet à Toulouse</Link></strong>.<br/>
                                <br/>
                                Le <strong className="font-normal">développement informatique</strong> implique une parfaite maîtrise des <strong className="font-normal">langages de programmation</strong> :  le <strong className="font-normal">métier de développeur</strong> demande, en effet, de savoir <strong className="font-normal">coder</strong> en <strong>PHP</strong>, <strong>JavaScript</strong>, <strong>HTML et CSS</strong>, mais également de maîtriser des <strong>frameworks</strong> (<strong className="font-normal">framework Bootstrap</strong>) ou autres <strong>CMS</strong> (Content Management System). <br/>
                                <br/>
                                Un <strong className="font-normal">développeur front-end</strong> possède un rôle de <strong className="font-normal">web designer (ou webdesigner)</strong> ainsi que d’<strong className="font-normal">intégrateur web</strong> dans le sens où c’est lui qui va être chargé de la définition du <strong className="font-normal">webdesign des pages web</strong> avec pour objectif de mettre en place les <strong className="font-normal">solutions techniques</strong> nécessaires pour une <strong className="font-normal">expérience utilisateur</strong> optimale et un design d’<strong className="font-normal">interfaces</strong> intuitif.<br/>
                                <br/>
                                L’aspect <strong className="font-normal">responsive web design</strong> d’un site internet, aussi bien que son <strong className="font-normal">ergonomie</strong> incombe au travail d’un <strong className="font-normal">développeur web front-end</strong>. Si cela est applicable pour un site web, c’est également vrai pour des <strong className="font-normal">applications web</strong>, comme pour des <strong className="font-normal">applications mobiles</strong>. Il est donc responsable de la création des <strong className="font-normal">maquettes</strong> puis de la <strong className="font-normal">programmation web</strong> visant à créer un site en corrélation avec les <strong className="font-normal">besoins du client</strong>.<br/>
                            </p>
                        <img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées au Front-End :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/">UI Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/">UX Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/">Développement Web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/">Responsive Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/mobile-first/">Mobile First</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/">Webdesign</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/">Refonte site internet</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/">Maquette de site web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/">CMS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/">Framework</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/">HTML/CSS</Link></li>
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
query lastsThreePostsfrontend {
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
export default frontend;




