import React, { Component } from "react";
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
                        <span className="text-center text-xl font-bold text-white">Définition</span>
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
                                Tout cela est rendu possible grâce aux frameworks. Linkweb est une <Link to="/agence-digitale-toulouse/" className="text-bleu hover:text-black font-bold">agence web</Link> en mesure de travailler avec certains frameworks pour la <strong>{/*<Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/">*/}création de site internet à Toulouse{/*</Link>*/}</strong>.
                            </p>
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Quels sont les différents Frameworks existants ?</h2>
                        <br />
                        <p>Il existe des <strong className="font-normal">frameworks</strong> adaptés à la variété de <strong className="font-normal">langages de programmation</strong> sur le web.<br />
                            <br />
                            Ainsi, un <strong className="font-normal">développeur web</strong> va utiliser des outils appropriés en fonction des spécifications du site à créer et en vue des supports souhaités.<br />
                            <br />
                            Le <strong className="font-normal">spécialiste du développement</strong> va déterminer l’ergonomie de chaque <strong className="font-normal">projet web</strong>, il va notamment concevoir une interface-utilisateur accessible depuis tous les supports grâce aux <strong className="font-normal">langages informatiques</strong>.<br />
                            <br />
                            Pour l’assister dans sa phase de développement, les <strong className="font-normal">Frameworks de type Bootstrap ou Tailwind</strong> l’accompagnent en catégorisant des classes de style CSS. Ces outils peuvent tout autant être performants pour du HTML et CSS, ils sont un soutien important dans le <strong className="font-normal">développement de pages web et de site web mobile</strong>.<br />
                            <br />
                            Parmi les <strong className="font-normal">frameworks</strong> et leurs environnements, le développeur informatique va également rencontrer le <strong className="font-normal">langage PHP</strong>. Les <strong className="font-normal">interfaces web codées en PHP</strong> sont souvent accompagnées du <strong className="font-normal">framework Symfony ou Laravel</strong>. Ce dernier s’avère utile pour développer des applications notamment des <strong className="font-normal">applications mobiles</strong>, alors que Symfony va aider à apporter des fonctionnalités supplémentaires aux <strong className="font-normal">sites web</strong>.<br />
                            <br />
                            Maîtriser les <strong className="font-normal">langages du web</strong> et les diverses solutions techniques est primordial dans le <strong className="font-normal">métier de développeur</strong> : chacun possède ses spécificités. Parmi les autres types de frameworks existants, on trouve le <strong className="font-normal">React JS</strong> auquel s’associe très bien le <strong className="font-normal">framework Gatsby JS</strong>. Celui-ci va trouver fonction sur des <strong className="font-normal">sites statiques</strong> mis à jour peu souvent.<br />
                            <br />
                            Enfin, le <strong className="font-normal">langage web JavaScript</strong> se lie à l’utilisation du <strong className="font-normal">framework Vue JS</strong>, il améliore grandement l’<strong className="font-normal">expérience utilisateur</strong> grâce à la fluidité qu'il apporte aux sites internet. Toutefois, le JavaScript est à utiliser avec précaution de par la difficulté qu'ont les <strong className="font-normal">moteurs de recherche</strong> à le comprendre.<br />
                            <br />
                            Les <strong className="font-normal">technologies du web</strong> sont extrêmement variées et comportent toutes des architectures et des caractéristiques différentes. Les <strong className="font-normal">sites internet</strong> font appel à une gestion de contenu codé avec précision. Etre un développeur qualifié, maniant le <strong className="font-normal">code HTML</strong> et autres langages de programmation web demande une certaine adaptabilité, bien que l’organisation des lignes soit optimisée grâce aux divers Frameworks.<br />
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
    allWpPost(limit: 3) {
      edges {
        node {
          id
          title
          slug
          modified(locale: "fr", formatString: "DD/MM/YYYY")
          date(locale: "fr", formatString: "dddd DD MMMM YYYY")
          link
          featuredImage {
            node {
                sourceUrl
            }
          }
        }
      }
    }
  }
  
    
`
export default framework;




