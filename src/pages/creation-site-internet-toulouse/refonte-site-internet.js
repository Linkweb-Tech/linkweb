import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class refonteSiteInternet extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Refonte de site : Définition - Création site internet Toulouse"
                    description="La refonte d'un site internet est une étape clé dans la vie d'un site web."
                    url="https://linkweb.fr/creation-site-internet-toulouse/refonte-site-internet/"
                    nom="Refonte site internet"
                    slug="creation-site-internet-toulouse/refonte-site-internet/"
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
                                Refonte de site internet
                            </h1>
                        </div>
                    </section>
                    <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que la refonte de site internet ?</h2>
                            <br/>
                            <p>
                                La <strong>refonte d’un site internet</strong> consiste, à partir d’un site existant, à modifier la structure ainsi que l’apparence du site. La <strong className="font-normal">refonte d’un site internet</strong> est un moment charnière de la vie de son site internet : le Web est en constante évolution et de nouvelles tendances apparaissent régulièrement. En ce sens, la <strong className="font-normal">refonte de site</strong> peut se concevoir comme <Link className="text-bleu hover:text-black font-bold" to="/creation-site-internet-toulouse/"><strong>la création de site internet à Toulouse</strong></Link>. La refonte d’un site internet peut intervenir à divers moments comme par exemple :<br/>
                                <br/>
                                <ul className="px-12">
                                   <li className="list-disc">lorsque le <strong className="font-normal">web design</strong> de <strong className="font-normal">votre site internet</strong> est désuet ou que le site n’est pas <strong className="font-normal">responsive design</strong>,</li>
                                   <li className="list-disc">lors d’un changement de <strong className="font-normal">charte graphique</strong> ou <strong className="font-normal">identité visuelle</strong> de la marque,</li>
                                   <li className="list-disc">lors de la mise en place d’une nouvelle <strong className="font-normal">stratégie digitale</strong>,</li>
                                   <li className="list-disc">lors de la mise en place d’une <strong className="font-normal">stratégie de référencement naturel SEO</strong>,</li>
                                   <li className="list-disc">Etc.</li>
                                </ul>
                                <br/>
                                    La mise en place d’un <strong className="font-normal">projet de refonte de votre site web</strong> demande de considérer plusieurs éléments. <strong className="font-normal">Refondre un site internet</strong> est proche de la <strong className="font-normal">création d'un nouveau site internet</strong>. Ce qui différencie la <strong className="font-normal">refonte d’un site</strong> de la <strong className="font-normal">création de site web</strong> est la présence d’un historique. En effet, le site internet possède déjà un <strong className="font-normal">nom de domaine</strong>, des <strong className="font-normal">URLs</strong>, mais également des <strong className="font-normal">backlinks</strong> déjà existants. Créer un site internet de toutes pièces donne plus de libertés à ce niveau-là. C’est pourquoi, il est indispensable de ne pas occulter les URL existantes, et ce, même dans le cas d’une <strong className="font-normal">refonte complète</strong>. Prendre en compte les <strong className="font-normal">redirections</strong> vers les nouvelles URLs dans la nouvelle stratégie sera nécessaire.<br/>
                                <br/>
                                    De plus, mettre en place un <strong className="font-normal">nouveau site internet</strong> peut permettre de mettre en place de <strong className="font-normal">nouvelles fonctionnalités</strong>. En fonction des besoins, la question de l’<strong className="font-normal">outil de création et de gestion du contenu du site</strong> doit se poser. Il faudra faire le choix entre l’utilisation d’un <strong className="font-normal">CMS</strong> ou du traditionnel duo HTML/CSS.<br/>
                                <br/>
                                    La <strong className="font-normal">refonte de son site</strong> peut-être motivée par la mise en place d’une <strong className="font-normal">expérience utilisateur</strong> optimale en vue d’augmenter son <strong className="font-normal">taux de conversion</strong>. Le travail de l’<strong className="font-normal">ergonomie</strong> et du <strong className="font-normal">webdesign du site</strong> est également une phase importante lors de la <strong className="font-normal">refonte d’un site internet</strong>.<br/>
                                <br/>
                                <strong className="font-normal">Avoir un site</strong> adapté à vos objectifs va permettre de mener à bien votre nouvelle stratégie <strong className="font-normal">webmarketing</strong>. En plus d’une <strong className="font-normal">refonte graphique</strong>, <strong className="font-normal">faire une refonte structurelle</strong> va également demander un travail sur l’<strong className="font-normal">arborescence</strong>. Ce travail est très important en termes de <strong className="font-normal">référencement</strong> pour votre <strong className="font-normal">projet web</strong>. À ce titre, le travail de refonte incombe au <strong>développeur web</strong> dans le cadre de l'<strong className="font-normal">agence digitale</strong>.<br/>
                            </p>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/"><img
                            src={banniere}
                            alt="Création site internet Toulouse"
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
                            <h3 className="font-bold">Les notions liées à la refonte de site internet :</h3>
                            <br/>
                            <hr className="hrblog"></hr>
                            <br/>
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
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/"><li>Responsive Design</li></Link>
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
query lastsThreePostsrefonte {
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
export default refonteSiteInternet;




