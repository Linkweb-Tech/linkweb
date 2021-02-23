import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class moteursDeRecherche extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Moteurs de recherche : Définition - Création site internet Toulouse"
                    description="Les moteurs de recherche sont à la base du référencement naturel SEO."
                    url="https://linkweb.fr/creation-site-internet-toulouse/moteurs-recherche/"
                    nom="Moteurs de recherche"
                    slug="creation-site-internet-toulouse/moteurs-recherche/"
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

                {/* </PageTransition> */}
                <section className="w-full century mt-40 flex flex-col items-center justify-start bg-bleu" style={{background:'#00000073 url('+ Bg +')', minHeight:'300px', backgroundPosition:'center', backgroundSize:'cover',backgroundBlendMode:'overlay'}}>
                        <div className="topdef">
                            <h2 className="text-center text-xl font-bold text-white">Définition</h2>
                        </div>
                        <div>
                            <h1 data-aos="fade-up" className="century text-5xl sm:text-6xl text-bleu text-center text-white mt-4 lg:mt-6">
                                Moteurs de recherche
                            </h1>
                        </div>
                    </section>
                    <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce qu'un moteur de recherche ?</h2>
                            <br/>
                            <p>
                                Un <strong>moteur de recherche</strong> est un outil qui permet de rechercher des <strong className="font-normal">contenus</strong>, <strong className="font-normal">documents</strong> et autres types de <strong className="font-normal">ressources</strong>. Ils sont utilisés aussi bien en interne sur les ordinateurs pour retrouver des documents, que sur le <strong className="font-normal">web</strong>. Le travail de <strong className="font-normal">référencement naturel</strong> répond aux critères imposés par les <strong className="font-normal">différents moteurs de recherche</strong>. C’est pourquoi, nous prenons en compte les <strong className="font-normal">algorithmes des moteurs de recherche</strong> dans notre processus de <Link className="text-bleu hover:text-black font-bold" to="/creation-site-internet-toulouse/"><strong>création de site internet à Toulouse</strong></Link>.<br />
                                <br />
                                Sur ce dernier, les <strong className="font-normal">moteurs de recherches</strong> prennent la forme de <strong className="font-normal">site web</strong>, et sont entièrement dédiés à la <strong className="font-normal">recherche web</strong>. Ils sont généralement caractérisés par la présence d’une <strong className="font-normal">barre de recherche</strong> proposant une liste de résultats dès lors qu’une requête est effectuée.<br />
                                <br />
                                Leur principe de fonctionnement est simple. Des robots (qu’on appelle aussi « <strong className="font-normal">bots</strong> », « <strong className="font-normal">spiders</strong> » ou « <strong className="font-normal">agents</strong> »), parcourent régulièrement le web et les (très) nombreux sites web, en <strong className="font-normal">indexant leur contenu</strong> dans une base de données, associant ces sites à des thématiques selon le contenu présent dans les <strong className="font-normal">différentes pages</strong>. (t<strong className="font-normal"></strong>exte, <strong className="font-normal">balises</strong> <strong className="font-normal">méta-title</strong>, <strong className="font-normal">balise alt</strong> des images, etc.).<br />
                                <br />
                                Lorsque des utilisateurs font une <strong className="font-normal">recherche sur Internet</strong>, ils font appel à un <strong className="font-normal">moteur de recherche</strong>, et celui-ci lui proposera des résultats selon les <strong className="font-normal">sites indexés</strong>, avec pour objectif de proposer les <strong className="font-normal">résultats de recherche les plus pertinents possibles</strong>. C’est sur la base de puissants algorithmes qu’est calculé l’<strong className="font-normal">affichage de ces pages de résultats</strong>.<br />
                                <br />
                                Le plus connu est bien évidemment le <strong className="font-normal">moteur de recherche Google</strong>, qui représente à lui seul 62 % de la part du marché des recherches mondiales, suivi de son homologue chinois (Google est, en effet, interdit en Chine) <strong className="font-normal">Baidu</strong> avec presque 20 % des recherches. On retrouve ensuite <strong className="font-normal">Bing</strong> ou encore <strong className="font-normal">Yahoo</strong> avec respectivement 8,1 % et 7,7 % des parts de recherches mondiales.<br />
                                <br />
                                Certains sites ne possédant pas les moyens de proposer des algorithmes aussi complexes que les <strong className="font-normal">meilleurs moteurs de recherche</strong>, ont choisi de devenir des <strong className="font-normal">métamoteurs</strong> (ou <strong className="font-normal">méta-moteurs</strong>) de recherche qui puisent les informations dans plusieurs autres <strong className="font-normal">moteurs de recherche généralistes</strong>, combinant et fusionnant ainsi les résultats.<br />
                                <br />
                              <h2 className="text-xl font-bold text-bleu">Liste des moteurs de recherches alternatifs</h2>
                              <br />
                              <ul className="list-disc pl-12 flex justify-center flex-col">
                                  <li><strong>QWANT :</strong> moteur de recherche français.</li>
                                  <li><strong>DuckDuckGo :</strong> <strong className="font-normal">méta-moteur de recherche alternatif</strong> qui privilégie le respect de la vie privée.</li>
                                  <li><strong>Ecosia :</strong> <strong className="font-normal">moteur de recherche</strong> allemand qui reverse ses bénéfices à un programme de plantation d’arbres.</li>
                                  <li><strong>Yandex :</strong> <strong className="font-normal">moteur de recherche</strong> russe.</li>
                                  <li><strong>Startpage :</strong> <strong className="font-normal">métamoteur de recherche</strong> (anciennement connu sous le nom de Ixquick), qui ne collecte pas d'informations personnelles ou de données privées.</li>
                              </ul>
                              <br />
                                Le moteur de recherche ne doit pas être confondu avec le <strong className="font-normal">navigateur de recherche</strong>, qui est un logiciel utilisé pour <strong className="font-normal">naviguer sur Internet</strong>. Les plus connus sont <strong>Chrome de Google</strong>, <strong>Firefox</strong>, <strong>Microsoft Edge</strong>, ou encore <strong>Safari</strong>. Ils incluent bien souvent par défaut, un moteur de recherche.<br />
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
                            <h3 className="font-bold">Les notions liées aux moteurs de recherche :</h3>
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
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/mobile-first/"><li>Mobile-First</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/strategie-digitale/"><li>Stratégie Digitale</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webmarketing/"><li>Webmarketing</li></Link>
                            </ul>
                            </div>
                        </div>
                    </section>
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsmoteursDeRecherche {
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
export default moteursDeRecherche;




