import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";



class backend extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Back-End : Définition - Création site internet Toulouse - Linkweb"
                    description="La partie back-end d'un site internet fait référence à l'ensemble des éléments qui ne sont pas visibles directement sur le site web."
                    url="https://linkweb.fr/creation-site-internet-toulouse/back-end/"
                    nom="Back-end"
                    slug="creation-site-internet-toulouse/back-end/"
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
                                Back-End
                            </h1>
                        </div>
                    </section>
                    <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que le développement back-end ?</h2>
                            <br/>
                            <p>
                                Dans le cadre du <strong className="font-normal">développement web</strong>, la notion de <strong>« back-end »</strong> se réfère au travail effectué sur des <strong className="font-normal">applications web</strong>, <strong className="font-normal">applications mobiles</strong> ou <strong className="font-normal">sites web</strong> au même titre que le <strong className="font-normal">développeur front-end</strong>. Toutefois, à la différence du développeur front-end, le <strong className="font-normal">développeur back-end</strong> maîtrise toute la partie invisible pour l’utilisateur, mais qui va permettre le bon fonctionnement d’un site internet.<br/>
                                <br/>
                                Au contraire, le <strong className="font-normal">développeur front-end</strong> a un rôle d’<strong className="font-normal">intégrateur web</strong> : la conception des <strong className="font-normal">interfaces</strong> et du <strong className="font-normal">webdesign</strong> des <strong className="font-normal">pages web</strong> est de son ressort, ce qui n’est pas le cas des <strong className="font-normal">développeurs web back-end</strong>.<br/>
                                <br/>
                                Ce sont des spécificités qui sont prises en compte dans la réalisation de nos <strong><Link to="/creation-site-internet-toulouse/" className="text-bleu hover:text-black font-bold">projets de création de site internet à Toulouse</Link></strong>.<br/>
                                <br/>
                                La maîtrise des <strong className="font-normal">langages de programmation</strong>, librairies (<strong className="font-normal">jQuery</strong>) et des <strong className="font-normal">frameworks</strong> (<strong className="font-normal">framework</strong> Bootstrap en CSS par exemple) fait également partie des <strong className="font-normal">compétences techniques</strong> du <strong className="font-normal">métier de développeur</strong> back-end (<strong className="font-normal">PHP</strong>, <strong className="font-normal">JavaScript</strong>, <strong className="font-normal">HTML et CSS</strong>). Savoir <strong className="font-normal">coder</strong> est indispensable pour mener à bien un <strong className="font-normal">projet web</strong> comme la <strong className="font-normal">création d’un site web</strong> ou d’une <strong className="font-normal">application web</strong> par exemple.<br/>
                                <br/>
                                Toutefois, la majeure partie du travail du <strong className="font-normal">développeur back-end</strong> se concentre sur la mise en place de l’<strong className="font-normal">hébergement web</strong> ou encore de la <strong className="font-normal">gestion de bases de données</strong> (notamment avec l’outil <strong className="font-normal">MySQL</strong>). Ici le travail du <strong className="font-normal">développeur web</strong> consiste à trouver des <strong className="font-normal">solutions techniques</strong> pour développer des dispositifs fonctionnels sur le site web en fonction des <strong className="font-normal">besoins du client</strong>.<br/>
                                <br/>
                                Ainsi, les développeurs web backend possèdent donc une spécialisation dans la <strong className="font-normal">programmation web</strong> de sites dits « dynamiques ». Tout le travail lié au <strong className="font-normal">responsive design</strong>, à l’ergonomie web et au design d’interface ne lui incombe pas, à la différence du développeur front-end.<br/>
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
                            <h3 className="font-bold">Les notions liées au back-end :</h3>
                            <br/>
                            <hr className="hrblog"></hr>
                            <br/>
                            <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/"><li>UI Design</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/"><li>UX Design</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/"><li>Développement Web</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/"><li>Front-End</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/arborescence-site-internet/"><li>Arborescence de site internet</li></Link>
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
query lastsThreePostsbackend {
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
export default backend;




