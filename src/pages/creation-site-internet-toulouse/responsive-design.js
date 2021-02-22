import React, { Component } from 'react';
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class responsiveDesign extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Responsive Design : Définition - Création site internet Toulouse - Linkweb"
                    description="Le Responsive Design est une notion fondamentale dans la création de site internet. Il est indispensable que son site soit accessible sur tous les terminaux."
                    url="https://linkweb.fr/creation-site-internet-toulouse/responsive-design/"
                    nom="Responsive Design"
                    slug="creation-site-internet-toulouse/responsive-design/"
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
                            Responsive Design
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que le Responsive Design ?</h2>
                        <br />
                        <p>
                            Le <strong>Responsive Design</strong> désigne la faculté pour un site internet à adapter et optimiser son affichage en fonction du support de navigation utilisé et plus particulièrement de la <strong className="font-normal">taille de l’écran</strong>. Cette notion est centrale dans notre <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/">méthodologie de création de site internet à Toulouse</Link>. En effet, de plus en plus d’utilisateurs naviguent sur le Web à partir d’<strong className="font-normal">appareils mobiles</strong>, y compris des <strong className="font-normal">smartphones et tablettes</strong>. Il est donc indispensable de disposer d’un <strong className="font-normal">site web adaptatif</strong> que ce soit sur <strong>desktop</strong>, <strong>mobile</strong>, <strong>tablette</strong> ou toute autre <strong>périphérique</strong> de lecture. Celui-ci doit être capable de s’adapter aux <strong className="font-normal">différentes tailles d’écran</strong>.<br />
                            <br />
                            En termes de technique, la mise en place d’un <strong className="font-normal">design responsive</strong> se traduit par la définition d’un design adapté en fonction de la <strong>taille de l’écran</strong>. Chaque terminal dispose d’un ratio d’affichage. Celui-ci s’exprime en fonction de la longueur et de la largeur de l’écran en pixels. Pour adapter l’affichage du site en fonction des différentes tailles d’écran, il est nécessaire de définir ce que l’on appelle des <strong>points de rupture</strong>. Ces derniers sont particulièrement utiles afin de délimiter les formats d’affichage. Ceci va permettre de définir un design précis pour chaque format d’écran. Le <strong className="font-normal">responsive design</strong> fait partie des critères qui permettent d’optimiser l’<strong>expérience utilisateur</strong> grâce à un travail de l’<strong className="font-normal">ergonomie</strong> du site destiné aussi bien aux <strong className="font-normal">mobinautes</strong>, qu’aux utilisateurs de l’<strong className="font-normal">ordinateur de bureau</strong> ainsi que tous les autres <strong className="font-normal">terminaux</strong>.<br />
                            <br />
                            <h2 className="text-xl font-bold text-bleu">Le "Mobile First" plutôt que le "Mobile Friendly"</h2>
                            <br />
                            Par ailleurs, de nos jours, la notion de <strong>mobile friendly</strong> est dépassée par celle de <strong>mobile first</strong>. En effet, la <strong className="font-normal">conception de sites web</strong> est pensée directement pour une navigation sur une <strong className="font-normal">version mobile</strong>. Que ce soit le <strong className="font-normal">contenu du site</strong>, le <strong className="font-normal">temps de chargement</strong>, ou le <strong className="font-normal">webdesign</strong>, chaque élément du site doit favoriser une navigation rapide et optimiser l’<strong className="font-normal">expérience utilisateur</strong> en vue d’apporter une réponse claire et concise à la requête de l’utilisateur. Ceci est d’autant plus vrai que le support utilisé par l’internaute peut influencer son comportement. Par exemple, un utilisateur mobile aura besoin d’une réponse rapide face à son problème, contrairement à un utilisateur sur ordinateur qui sera plus disposé à effectuer de plus amples recherches. Évidemment, ceci n’est pas une vérité absolue, mais il est essentiel de tenir compte de ces éléments pour <strong className="font-normal">créer un site</strong> qui s’adapte à sa cible et des <strong className="font-normal">pages web</strong> pertinentes en fonction du profil de l’utilisateur.<br />
                            <br />
                            Enfin, il faut savoir que le <strong className="font-normal">responsive design</strong> est un des paramètres qui entrent en compte en termes de <strong>référencement naturel</strong>. Il est essentiel de mettre en place un site internet aux affichages <strong className="font-normal">flexibles</strong> pour favoriser l’<strong className="font-normal">expérience utilisateur</strong> et gagner en attractivité aux yeux de <strong className="font-normal">Google</strong>. Un site non responsive pourrait souffrir d’un manque de considération de la part du <strong className="font-normal">moteur de recherche</strong> en raison de l’inconfort qu’il pourrait procurer.<br />
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
                        <h3 className="font-bold">Les notions liées au Responsive Design :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/"><li>UI Design</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/"><li>UX Design</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/"><li>CMS</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/"><li>Framework</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/"><li>Front-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/back-end/"><li>Back-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/"><li>HTML/CSS</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/arborescence-site-internet/"><li>Arborescence de site internet</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/w3c/"><li>W3C</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/"><li>Refonte site internet</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/"><li>Maquette de site web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/"><li>Webdesign</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/nom-de-domaine/"><li>Nom de domaine</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/redaction-web/"><li>Rédaction Web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/charte-graphique/"><li>Charte Graphique</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/"><li>CMS</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/"><li>Développement Web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/mobile-first/"><li>Mobile-First</li></Link>
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
query lastsThreePostsresponsive {
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
export default responsiveDesign;




