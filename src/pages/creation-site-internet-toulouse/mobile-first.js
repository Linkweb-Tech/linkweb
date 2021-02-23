import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";



class MobileFirst extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Mobile First : Définition - Création site internet Toulouse - Linkweb"
                    description="Le Mobile First est une notion essentielle dans la création de site internet. Il est important d'adapter ses interfaces en fonction des habitudes des utilisateurs."
                    url="https://linkweb.fr/creation-site-internet-toulouse/mobile-first/"
                    nom="Mobile First"
                    slug="creation-site-internet-toulouse/mobile-first/"
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
                                Mobile-First
                            </h1>
                        </div>
                    </section>
                    <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que le Mobile-First ?</h2>
                            <br/>
                            <p>
                                Le concept de <strong>Mobile First</strong> désigne une méthodologie de <strong className="font-normal">conception de sites web</strong> qui fait de l’optimisation pour la <strong className="font-normal">navigation sur les terminaux mobiles</strong> une priorité. Cette notion est proche de la notion de <strong className="font-normal">responsive design</strong>, mais n’y correspond pas totalement. En effet, <strong className="font-normal">créer un site internet responsive design</strong> se rapporte au concept de <strong className="font-normal">Mobile Friendly</strong> tandis que le <strong className="font-normal">Mobile First</strong> est bien plus ferme concernant la <strong className="font-normal">navigation mobile</strong>.<br/>
                                <br/>
                                En ce sens, le <strong className="font-normal">Mobile First</strong> vise, lors de la <strong className="font-normal">création de votre site web</strong>, à considérer exclusivement la navigation en <strong className="font-normal">version mobile</strong> durant la <strong className="font-normal">conception du web design</strong> et la définition des contenus, comme prioritaire. Or, ce n’est pas le cas dans le cadre du <strong className="font-normal">responsive web design</strong>. Ceci va particulièrement influer sur la <strong className="font-normal">définition de l’arborescence</strong>, sur les liens réalisés entre les contenus, mais également sur la structure même des contenus, des éléments que nous prenons en compte <Link to="/creation-site-internet-toulouse/" className="text-bleu hover:text-black font-bold"><strong>dès la création de site internet à Toulouse</strong></Link>.<br/>
                                <br/>
                                En effet, le <strong className="font-normal">Mobile First</strong> va demander d’apporter une réponse claire et concise à une requête posée par un internaute, le plus rapidement possible. Dans ce contexte, <strong className="font-normal">avoir un site au temps de chargement</strong> minimal, qui propose une <strong className="font-normal">expérience utilisateur</strong> et une <strong className="font-normal">ergonomie</strong> travaillées, fluides et intuitives et dont l’affichage s’adapte à la <strong className="font-normal">taille de l’écran</strong> va être nécessaire.<br/>
                                <br/>
                                Attention : la <strong className="font-normal">création de site internet Mobile First</strong> ne signifie pas que l’affichage des pages en version <strong className="font-normal">desktop</strong> doit être négligé. Cela signifie très simplement que le site est pensé d’abord pour les <strong className="font-normal">mobinautes</strong> et pour un affichage sur les <strong className="font-normal">appareils mobiles</strong>. La compatibilité doit être totale, de la <strong className="font-normal">navigation adaptée aux mobiles</strong> à la navigation sur ordinateur.<br/>
                                <br/>
                                Cette notion occupe une place de plus en plus importante aux yeux de <strong className="font-normal">Google</strong>. L’<strong className="font-normal">indexation</strong> de la <strong className="font-normal">Search Console</strong> a d’ailleurs été définie comme <strong className="font-normal">index mobile</strong> prioritaire depuis septembre 2019. À ce titre, chaque fois qu’une <strong className="font-normal">page web</strong> est crawlé par les <strong className="font-normal">robots de Google (Googlebot)</strong>, la navigation est effectuée sur la <strong className="font-normal">version mobile du site</strong> et c’est le comportement d’un <strong className="font-normal">mobinaute</strong> qui est simulé. Ainsi, le <strong className="font-normal">Mobile First</strong> à travers la <strong className="font-normal">création de site compatible mobile</strong> a son importante en termes de <strong className="font-normal">référencement naturel</strong>.<br/>
                                <br/>
                                S’il existe plusieurs façons de rendre <strong className="font-normal">son site internet adapté au mobile</strong> (<strong className="font-normal">création de site mobile</strong>, d’<strong className="font-normal">application mobile</strong> ou mobilisation du responsive design), le Mobile First est une tendance qui prend racine depuis plusieurs mois et qui devrait bénéficier d’un rôle important à l’avenir. C’est une évolution qu’il sera nécessaire de prendre en compte lors de la <strong className="font-normal">refonte de votre site internet</strong>.<br/>
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
                            <h3 className="font-bold">Les notions liées au Mobile-First :</h3>
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
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/redaction-web/"><li>Rédaction Web</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/"><li>Refonte site internet</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/charte-graphique/"><li>Charte Graphique</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/"><li>CMS</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/"><li>Développement Web</li></Link>
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
query lastsThreePostsMobileFirst {
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
export default MobileFirst;




