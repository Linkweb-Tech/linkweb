import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/creation-site-internet-ban.png";



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

                    <section className="w-full mt-40 text-justify font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <h1 data-aos="fade-up" className="century text-4xl sm:text-5xl text-center text-bleu mt-4 lg:mt-6">
                            Refonte site internet
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                La <strong>refonte d’un site internet</strong> consiste, à partir d’un site existant, à modifier la structure ainsi que l’apparence du site. La <strong className="font-normal">refonte d’un site internet</strong> est un moment charnière de la vie de votre site internet : le Web est en constante évolution et de nouvelles tendances apparaissent régulièrement. En ce sens, la <strong className="font-normal">refonte de site</strong> peut se concevoir comme <Link className="text-bleu hover:text-black font-bold" to="/creation-site-internet-toulouse/"><strong>la création de site internet à Toulouse</strong></Link>. La refonte d’un site internet peut intervenir à divers moments comme par exemple :<br/>
                                <br/>
                                <ul className="px-12">
                                   <li className="list-disc">lorsque le <strong className="font-normal">web design</strong> du site est désuet ou que le site n’est pas <strong className="font-normal">responsive design</strong>,</li>
                                   <li className="list-disc">lors d’un changement de <strong className="font-normal">charte graphique</strong> ou <strong className="font-normal">identité visuelle</strong> de la marque,</li>
                                   <li className="list-disc">lors de la mise en place d’une nouvelle <strong className="font-normal">stratégie digitale</strong>,</li>
                                   <li className="list-disc">lors de la mise en place d’une <strong className="font-normal">stratégie de référencement naturel SEO</strong>,</li>
                                   <li className="list-disc">Etc.</li>
                                </ul>
                                <br/>
                                    La mise en place d’un <strong className="font-normal">projet de refonte de votre site web</strong> demande de considérer plusieurs choses. <strong className="font-normal">Refondre un site internet</strong> est proche de la <strong className="font-normal">création de site internet</strong> classique. Ce qui différencie la <strong className="font-normal">refonte d’un sit</strong>e de la <strong className="font-normal">création de site web basique</strong> est la présence d’un historique. En effet, le site internet possède déjà un <strong className="font-normal">nom de domaine</strong>, des <strong className="font-normal">URLs</strong>, mais également des <strong className="font-normal">backlinks</strong> déjà existants. C’est pourquoi, il est indispensable de ne pas occulter les URL existantes, et ce, même dans le cas d’une <strong className="font-normal">refonte complète</strong>. Prendre en compte les <strong className="font-normal">redirections</strong> vers les nouvelles URLs dans la nouvelle stratégie sera nécessaire.<br/>
                                <br/>
                                    De plus, mettre en place un <strong className="font-normal">nouveau site internet</strong> peut permettre de mettre en place de <strong className="font-normal">nouvelles fonctionnalités</strong>. En fonction des besoins, la question de l’<strong className="font-normal">outil de création et de gestion du contenu du site</strong> doit se poser. Il faudra faire le choix entre l’utilisation d’un <strong className="font-normal">CMS</strong> ou du traditionnel duo HTML/CSS.<br/>
                                <br/>
                                    La <strong className="font-normal">refonte de son site</strong> peut-être motivée par la mise en place d’une <strong className="font-normal">expérience utilisateur</strong> optimale en vue d’augmenter son <strong className="font-normal">taux de conversion</strong>. Le travail de l’<strong className="font-normal">ergonomie</strong> et du <strong className="font-normal">webdesign du site</strong> est également une phase importante lors de la <strong className="font-normal">refonte d’un site internet</strong>.<br/>
                                <br/>
                                <strong className="font-normal">Avoir un site</strong> adapté à vos objectifs va permettre de mener à bien votre nouvelle stratégie <strong className="font-normal">webmarketing</strong>. En plus d’une <strong className="font-normal">refonte graphique</strong>, faire une <strong className="font-normal">refonte structurelle</strong> va également demander un travail sur l’<strong className="font-normal">arborescence</strong>. Ce travail est très important en termes de <strong className="font-normal">référencement</strong> pour votre <strong className="font-normal">projet web</strong>.<br/>
                            </p>
                        <img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées à la refonte de site internet :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/">UI Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/">UX Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/">Responsive Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/">Webdesign</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/">Maquette de site web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/">CMS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/">HTML/CSS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/">Framework</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/arborescence-site-internet/">Arborescence site internet</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/nom-de-domaine/">Nom de domaine</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/strategie-digitale/">Stratégie Digitale</Link></li>
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




