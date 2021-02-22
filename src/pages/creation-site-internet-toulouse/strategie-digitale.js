import React, { Component } from 'react';
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class strategieDigitale extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Stratégie Digitale : Définition - Création site internet Toulouse - Linkweb"
                    description="Mettre en place une stratégie digitale peut-être vecteur de visibilité, notoriété et bien plus pour une marque."
                    url="https://linkweb.fr/creation-site-internet-toulouse/strategie-digitale/"
                    nom="Stratégie Digitale"
                    slug="creation-site-internet-toulouse/strategie-digitale/"
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
                            Stratégie Digitale
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce qu'une stratégie digitale ?</h2>
                        <br />
                        <p>
                            Une <strong>stratégie digitale</strong>, ou stratégie numérique, désigne la stratégie de marketing mise en œuvre par une entreprise à travers l’utilisation de <strong className="font-normal">canaux digitaux</strong>. La stratégie digitale poursuit des objectifs relevant du <strong className="font-normal">webmarketing</strong>. Augmenter la <strong className="font-normal">visibilité de sa marque</strong>, sa  <strong className="font-normal">notoriété</strong>, conquérir de <strong className="font-normal">nouveaux clients</strong> ou encore miser sur leur <strong className="font-normal">fidélisation</strong> sont autant d’exemples d’objectifs qui peuvent être poursuivis par la <strong className="font-normal">mise en place d’une stratégie digitale</strong>.<br />
                            <br />
                                Par ailleurs, <strong className="font-normal">mettre en place une stratégie digitale</strong> donne lieu à un ensemble d’actions menées via des outils numériques et répondant un <strong className="font-normal">ciblage</strong>, à un <strong className="font-normal">positionnement</strong> et à la <strong className="font-normal">définition d’un message</strong> spécifiques. Une stratégie digitale valable est une stratégie qu’il est possible d’évaluer et de mesurer à partir d’<strong className="font-normal">indicateurs</strong> objectifs et certains.<br />
                            <br />
                                La stratégie digitale peut être qualifiée de <strong className="font-normal">marketing digital</strong> puisqu’elle recouvre l’ensemble des champs du webmarketing et met en œuvre l’ensemble des <strong className="font-normal">leviers du digital</strong> qui vont permettre de <strong>développer sa communication digitale</strong>, ou la <strong>transformation digitale</strong> d’une entreprise. En ce sens, la stratégie digitale recouvre un bon nombre d’actions liées au <strong className="font-normal">social media marketing (réseaux sociaux)</strong>, au <strong className="font-normal">référencement naturel</strong> ou <strong className="font-normal">Adwords</strong> (potentiellement liés à l’<strong className="font-normal">inbound marketing</strong> et au <strong className="font-normal">content marketing</strong>), l’<strong className="font-normal">emailing</strong>, ou encore l’<strong className="font-normal">e reputation</strong> pour ne citer qu’eux.<br />
                            <br />
                                Il y a plusieurs motivations à se lancer dans la mise en place de <strong className="font-normal">stratégies digitales</strong> comme par exemple, travailler la <strong className="font-normal">relation client</strong>, l’<strong className="font-normal">expérience client</strong>, développer un <strong className="font-normal">projet web</strong> grâce à un <strong className="font-normal">site internet</strong> qui procure du <strong className="font-normal">retour sur investissement</strong> ou encore travailler son <strong className="font-normal">image de marque</strong>. Ce sont les objectifs de la stratégie qui vont déterminer les actions à mettre en place. <strong className="font-normal">Développer la visibilité de sa marque</strong>, <strong className="font-normal">développer votre notoriété</strong>, <strong className="font-normal">générer du trafic</strong> sur son site internet ou <strong className="font-normal">fidéliser les clients de votre marque</strong> sont autant d'objectifs qui vont être entrepris par des actions émanant des divers champs du webmarketing. En ce sens, la <strong><Link className="text-bleu hover:text-black font-bold" to="/creation-site-internet-toulouse/">création de site internet à Toulouse</Link></strong> entreprise par nos soins s’ancre parfaitement dans une <strong className="font-normal">stratégie digitale</strong> rôdée.<br />
                            <br />
                                En ce sens, établir une <strong className="font-normal">véritable stratégie digitale</strong> peut-être un vecteur de croissance pour une entreprise pas encore investie sur le web. Une <strong className="font-normal">agence digitale</strong>, une <strong className="font-normal">agence de marketing digital</strong> ou une <strong className="font-normal">agence web</strong> sera en mesure de mettre en place la <strong className="font-normal">stratégie digitale</strong> qui répondra à vos besoins.<br />
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
                        <h3 className="font-bold">Les notions liées à la stratégie digitale :</h3>
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
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/"><li>Responsive Design</li></Link>
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
query lastsThreePostsstrategieDigitale {
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
export default strategieDigitale;




