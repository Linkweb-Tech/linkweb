import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/creation-site-internet-ban.png";



class W3C extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="W3C : Définition - Création site internet Toulouse - Linkweb"
                    description="Le W3C est un organisme international de standardisation chargé de favoriser l'accessibilité des sites internet sur le Web."
                    url="https://linkweb.fr/creation-site-internet-toulouse/w3c/"
                    nom="World Wide Web Consortium (W3C)"
                    slug="creation-site-internet-toulouse/w3c/"
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
                        W3C : World Wide Web Consortium
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                Le <strong>World Wide Web Consortium</strong>, également connu sous l’abréviation <strong className="font-normal">W3C</strong>, est un organisme international qui est chargé de la <strong className="font-normal">standardisation du Web</strong>. Créé en 1994 par <strong className="font-normal">Tim Berners-Lee (fondateur du Web au CERN en 1989)</strong>, le W3C a pour rôle de valoriser des technologies en vue de favoriser la compatibilité et l’uniformisation des contenus présents sur le Web.<br/>
                                <br/>
                                Nos <strong><Link className="text-bleu hover:text-black font-bold" to="/creation-site-internet-toulouse/">projets de création de site internet à Toulouse</Link></strong> sont menés avec le respect des <strong className="font-normal">standards du web</strong> en vue de garantir l’<strong className="font-normal">accessibilité du site internet</strong> créé, quel que soit le <strong className="font-normal">navigateur</strong> utilisé.<br/>
                                <br/>
                                En effet, la popularisation du Web durant les années 1990 a imposé la création d’un standard pour permettre l’homogénéisation de l’affichage des <strong className="font-normal">pages web</strong> sur les différents <strong className="font-normal">navigateurs web</strong> utilisés (<strong className="font-normal">Firefox</strong>, <strong className="font-normal">Chrome</strong>, Edge (ex-Internet Explorer), <strong className="font-normal">Safari</strong>, etc.).<br/>
                                <br/>
                                Les langages <strong className="font-normal">HTML et HTML5</strong>, <strong className="font-normal">CSS</strong> (pour les <strong className="font-normal">feuilles de style</strong>), <strong className="font-normal">XML</strong>, <strong className="font-normal">XHTML</strong>, <strong className="font-normal">SVG</strong> ou <strong className="font-normal">PNG</strong> sont des exemples de <strong className="font-normal">technologies web</strong> promues par le W3C pour la mise en place d’un Web ouvert (<strong className="font-normal">Open Web</strong>).<br/>
                                <br/>
                                La compatibilité de chaque <strong className="font-normal">page web</strong> avec les <strong className="font-normal">standards</strong> promus par le W3C (en termes de <strong className="font-normal">balises</strong>, attributs et autres <strong className="font-normal">spécifications liées à la syntaxe</strong> du <strong className="font-normal">document HTML</strong>) est important pour faciliter la lecture et la compréhension de son site web pour les moteurs de recherche notamment.<br/>
                                <br/>
                                En effet, un <strong className="font-normal">code source</strong> optimal, en matière de <strong className="font-normal">développement web</strong>, est important afin de ne pas constituer un barrage pour Google et les navigateurs, mais également ne pas entraver l'expérience des utilisateurs.<br/>
                                <br/>
                            </p>
                        <img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées au W3C :</b></p>
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
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/charte-graphique/">Charte graphique</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/redaction-web/">Rédaction Web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/">Refonte site internet</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/">Maquette de site web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/">CMS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/">HTML/CSS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/">Framework</Link></li>
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
query lastsThreePostsW3C {
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
export default W3C;



