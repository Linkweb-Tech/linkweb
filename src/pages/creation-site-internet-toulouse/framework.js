import React, { Component } from 'react';
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class framework extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Framework : Définition - Création site internet Toulouse - Linkweb"
                    description="Travailler à l'aide de frameworks procure gain de temps et praticité en termes de développement web."
                    url="https://linkweb.fr/creation-site-internet-toulouse/framework/"
                    nom="Framework"
                    slug="creation-site-internet-toulouse/framework/"
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
                            Framework
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-center" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce qu'un framework ?</h2>
                        <br />
                        <p>
                            Un <strong>framework</strong> est ce que l’on appelle une infrastructure logicielle qui va prêter assistance lors du <strong className="font-normal">développement d’applications web (Web Apps)</strong> et plus généralement du <strong className="font-normal">développement web</strong>. Dans d’autres termes, le framework web est une forme d’application contenant une bibliothèque (ou <strong className="font-normal">librairies</strong>) <strong className="font-normal">open source</strong> qui va proposer des ressources dans un <strong className="font-normal">langage de programmation</strong> donné pour standardiser et faciliter le travail du <strong className="font-normal">développeur</strong>.<br />
                            <br />
                                Il faut savoir qu’il existe plusieurs types de <strong className="font-normal">frameworks</strong> qui vont être classés en fonction des langages qu’ils traitent. Il va être possible de trouver des <strong className="font-normal">frameworks CSS</strong>, des <strong className="font-normal">frameworks JavaScript</strong>, des <strong className="font-normal">frameworks PHP</strong>, mais ce n’est pas tout. D’autres frameworks, à l’image de <strong className="font-normal">Boostrap</strong> vont contenir à la fois des contenus <strong className="font-normal">HTML, CSS et Java Script</strong>. Parmi les exemples de frameworks, nous pouvons citer <strong>Bootstrap (framework CSS, l’un des plus célèbres)</strong>, <strong>Tailwind CSS (framework CSS)</strong>, <strong>Vue JS (framework JavaScript)</strong>, <strong>AngularJS (framwork JS)</strong>, <strong>Symfony (framework PHP)</strong>, ou encore <strong>Django (framework Python)</strong>.<br />
                            <br />
                                Les frameworks s’apparentent à des <strong className="font-normal">plugins</strong> que l’on va venir greffer au <strong className="font-normal">site internet</strong> ou à l’<strong className="font-normal">application web</strong> pour les rendre utilisables. Ils possèdent généralement un <strong className="font-normal">support de documentation</strong> dans lequel sont indiqués les classes et autres éléments prédéfinis. Ceci est très utile dans le travail des <strong className="font-normal">développeurs front end</strong> en termes de <strong className="font-normal">web design</strong>. Non seulement cela permet de gagner du temps dans la <strong className="font-normal">conception du site</strong>, mais il est également possible de travailler son <strong className="font-normal">responsive design</strong> sans passer nécessairement par les « media queries » pour mettre en place des <strong className="font-normal">interfaces user</strong> friendly.<br />
                            <br />
                                Tout cela est rendu possible grâce aux frameworks. Linkweb est une <Link to="/" className="text-bleu hover:text-black font-bold">agence web</Link> en mesure de travailler avec certains frameworks pour la <strong>{/*<Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/">*/}création de site internet à Toulouse{/*</Link>*/}</strong>.
                            </p>
                        {/*<Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/"><img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                            /></Link>*/}
                    </div>
                    {/*<div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start" >
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
                            <h3 className="font-bold">Les notions liées au framework :</h3>
                            <br/>
                            <hr className="hrblog"></hr>
                            <br/>
                            <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/"><li>UI Design</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/"><li>UX Design</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/"><li>CMS</li></Link>
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
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/charte-graphique/"><li>Charte Graphique</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/"><li>CMS</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/"><li>HTML/CSS</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/"><li>Développement Web</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/nom-de-domaine/"><li>Nom de domaine</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/moteurs-recherche/"><li>Moteurs de recherche</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/strategie-digitale/"><li>Stratégie Digitale</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webmarketing/"><li>Webmarketing</li></Link>
                            </ul>
                            </div>
                        </div>*/}
                </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsframework {
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
export default framework;




