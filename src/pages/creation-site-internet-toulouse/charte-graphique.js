import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/creation-site-internet-ban.png";



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

                    <section className="w-full mt-40 text-justify font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <h1 data-aos="fade-up" className="century text-4xl sm:text-5xl text-center text-bleu mt-4 lg:mt-6">
                            Charte Graphique
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
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
                        <img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées à la charte graphique :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/">UI Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/">UX Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/">Développement Web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/">Front-End</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/back-end/">Back-End</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/">Responsive Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/mobile-first/">Mobile First</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/">Webdesign</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/redaction-web/">Rédaction Web</Link></li>
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




