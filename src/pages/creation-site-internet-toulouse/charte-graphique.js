import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class charteGraphique extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Charte Graphique : Définition - Création site internet Toulouse - Linkweb"
                    description="La charte graphique est un outil indispensable pour veiller à la cohérence et à la bonne utilisation de l'identité visuelle d'une entreprise."
                    url="https://linkweb.fr/creation-site-internet-toulouse/charte-graphique/"
                    nom="Charte Graphique"
                    slug="creation-site-internet-toulouse/charte-graphique/"
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
                                Charte Graphique
                            </h1>
                        </div>
                    </section>
                    <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce qu'une charte graphique ?</h2>
                            <br/>
                            <p>
                                Une <strong>charte graphique</strong> est un document technique contenant des informations concernant l’utilisation des <strong className="font-normal">éléments graphiques</strong> propres à une marque. Ce document est essentiel pour conserver une <strong className="font-normal">cohérence visuelle</strong> entre les différents <strong className="font-normal">supports de communication</strong> d’une entreprise. Le <strong className="font-normal">site internet</strong> fait partie de ces supports et n’échappe donc pas à la règle. C’est pourquoi Linkweb respecte la <strong className="font-normal">charte graphique</strong> et l’<strong className="font-normal">identité de marque</strong> de ses clients durant <Link to="/creation-site-internet-toulouse/" className="text-bleu hover:text-black font-bold"><strong>la création de site internet à Toulouse</strong></Link>.<br/>
                                <br/>
                                De fait, la <strong className="font-normal">charte graphique</strong> définit l’ensemble des <strong className="font-normal">éléments graphiques</strong> tels que le <strong>logo</strong> et son utilisation, les <strong>couleurs</strong> ou encore la <strong>typographie</strong> (différentes <strong className="font-normal">polices</strong>). Toutefois, ce document ne se contente pas de présenter simplement ces éléments. La charte graphique contient l’ensemble des <strong className="font-normal">règles d’utilisation de l’identité graphique</strong> de l’entreprise. Elle va donc indiquer ce qu’il est possible de faire ou non. En ce qui concerne les couleurs, la charte graphique a pour rôle de spécifier l’ensemble des informations nécessaires à une reproduction à l’identique à travers la communication du code <strong className="font-normal">Pantone</strong> par exemple.<br/>
                                <br/>
                                <h2 className="text-xl font-bold text-bleu">La charte graphique pour créer une identité visuelle cohérente</h2><br/>
                                
                                En termes de <strong className="font-normal">communication</strong>, la charte graphique est un élément indispensable pour une entreprise. C’est elle qui va garantir l’unité et la <strong className="font-normal">cohérence</strong> de la <strong className="font-normal">communication visuelle</strong>, mais également permettre d’<strong className="font-normal">identifier la marque</strong> en la rendant reconnaissable. Au cours de la <strong className="font-normal">création d’un site internet</strong>, la charte graphique et l’<strong className="font-normal">identité visuelle</strong> d’une entreprise sont des éléments essentiels pour construire un <strong className="font-normal">web design</strong> ainsi qu'un visuel en totale cohérence avec l’entreprise. C’est notamment ce qui nous permet de <strong className="font-normal">créer un site web</strong> adapté à <strong className="font-normal">votre image de marque</strong> et qui vous ressemble, que ce soit pour promouvoir vos produits et services ou bien les vendre.<br/>
                                <br/>
                                <strong className="font-normal">Créer une charte graphique</strong> relève de la compétence d’un <strong className="font-normal">graphiste</strong>. C’est donc lui qui est chargé de définir les <strong className="font-normal">éléments visuels</strong> (<strong className="font-normal">logos</strong>, <strong className="font-normal">palette de couleurs</strong>, <strong className="font-normal">polices de caractères</strong>) propres à une <strong className="font-normal">stratégie de communication</strong>, ainsi que leur <strong className="font-normal">déclinaison</strong>.<br/>
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
                            <h3 className="font-bold">Les notions liées à la charte graphique :</h3>
                            <br/>
                            <hr className="hrblog"></hr>
                            <br/>
                            <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/"><li>UI Design</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/"><li>UX Design</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/"><li>Développement Web</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/"><li>Front-End</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/back-end/"><li>Back-End</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/arborescence-site-internet/"><li>Arborescence de site internet</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/w3c/"><li>W3C</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/"><li>Responsive Design</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/mobile-first/"><li>Mobile First</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/"><li>Webdesign</li></Link>
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
query lastsThreePostscharteGraphique {
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
export default charteGraphique;




