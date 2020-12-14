import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class uiDesign extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="UI Design : Définition - Création site internet Toulouse - Linkweb"
                    description="L'UI Design est une notion directement liée à celle d'UX Design (expérience utilisateur). Découvrez à quoi se rattache cette notion issue du webdesign."
                    url="https://linkweb.fr/creation-site-internet-toulouse/ui-design/"
                    nom="UI Design"
                    slug="creation-site-internet-toulouse/ui-design/"
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
                                UI Design
                            </h1>
                        </div>
                    </section>
                    <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que l'UI Design ?</h2>
                            <br/>
                            <p>
                            L’<strong>UI design</strong> ou <strong>interface utilisateur</strong> est un terme <strong className="font-normal">webmarketing</strong> qui désigne la relation qu’un utilisateur peut entretenir avec une plateforme web. En d’autres termes, l’UI design se réfère à l’ensemble des éléments <strong className="font-normal">visuels</strong> et graphiques qui interviennent dans la navigation d’un utilisateur sur un site internet afin d’en optimiser l’expérience.<br/>
                            <br/>
                            En effet, l’UI design a pour objectif de proposer une <strong>expérience utilisateur optimale</strong> sur un site internet. En ce sens, l’<strong className="font-normal">UI design</strong> et l’<strong className="font-normal">UX design</strong> (<strong className="font-normal">user experience</strong>) sont deux notions qui sont parfaitement liées. Il s’agit d’un concept qui entre directement en compte dans notre <Link className="text-bleu hover:text-black" to="/creation-site-internet-toulouse/"><strong>processus de création de site internet à Toulouse</strong></Link>. Ceci permettra de conserver une certaine cohérence sur l’ensemble du site, tout en permettant une navigation fluide, agréable et qui ne laisse pas de place aux problèmes d’<strong className="font-normal">ergonomie</strong>.<br/>
                            <br/>
                            En somme, le travail de l’UI design d’un site internet correspond notamment au travail : des typographies utilisées, de la <strong>charte graphique</strong> du site, des éléments <strong className="font-normal">graphiques</strong> qui entretiennent une bonne navigation entre les contenus (boutons) ainsi que tous les éléments qui procurent une intuitivité et une certaine fluidité dans la navigation sur un site web.<br/>
                            <br/>
                            L’UI design est un concept qui s’applique aussi bien au <strong className="font-normal">web design</strong> d’un site internet, qu’à celui d’une <strong className="font-normal">application mobile</strong>. La <strong className="font-normal">conception</strong> de cette relation entre l’interface et l’utilisateur est le travail de l’<strong>UI designer</strong> avec pour objectif de procurer une expérience utilisateur idéale. Ce travail qui appartient à un <strong className="font-normal">développeur front end</strong> et <strong className="font-normal">webdesigner</strong> peut également être réalisé en collaboration avec un professionnel du <strong className="font-normal">graphisme</strong>.<br/>
                        </p>
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Comment mettre l’UI design en application sur un site internet ?</h2>
                        <br/>
                        <p>
                            Vous l’aurez compris, l’<strong>UI design concerne la partie graphique du site internet</strong>. <strong><a href="https://lapipelette.fr/pourquoi-offrir-a-son-site-internet-une-experience-utilisateur-originale/" target="_blank" rel="noreferer noopener" className="font-bold text-bleu hover:text-black">Construire un webdesign UI UX</a></strong> est entré dans le <strong>processus de création de site internet</strong>. C’est pourquoi, de nouveaux professionnels, parfois issus de domaines artistiques, intègrent ce processus. De ce point de vue, le <strong>site internet est considéré comme un produit</strong>. Le rôle de l’<strong>UI designer</strong> est de travailler son design.<br/>
                            <br/>
                            Pour ce faire, <strong>la définition de l’UI design d’un site web s’établit en plusieurs étapes</strong>. De la <strong className="font-normal">phase conceptuelle jusqu’aux tests utilisateurs</strong>, l’UI designer doit faire preuve de polyvalence et de technicité quant aux différents outils à manier. En effet, <strong>l’utilisation de logiciels tels que ceux de la suite Adobe et l’application de langages de programmation (HTML, CSS, JS, PHP, etc.)</strong>, font appel à des compétences techniques importantes ainsi qu’à une grande polyvalence.<br/>
                            <br/>
                            La première phase de l’<strong>UI design</strong> est une étape conceptuelle. Appelée <strong>« zoning »</strong>, cette étape consiste à <strong>définir grossièrement la structure d’une page web</strong>. Ceci est efficace pour <strong>hiérarchiser les informations présentées sur son site web</strong>, mais aussi avoir une vue d’ensemble de sa page. En plus de hiérarchiser les informations, cela va également permettre d’<strong>organiser les contenus en fonction du type de média mis en avant</strong>. En somme, le <strong>zoning</strong> est utilisé pour <strong>déterminer la forme générale de la page, sa composition, la taille des blocs et leur hiérarchisation</strong>.<br/>
                            <br/>
                            La seconde phase consiste à <strong>déployer l’architecture définie durant le zoning sur une interface web</strong>. Appelée <strong>wireframe</strong>, cette interface est une maquette non-aboutie permettant de <strong>visualiser la page</strong>, mais aussi d’effectuer de <strong>premiers tests</strong>. Les <strong>wireframes</strong> vont permettre de visualiser tous les <strong>types de composants d’une page web</strong> : titre, sous-titre, contenu, menus de navigation, etc. Ces pages, non-définitives, permettent de <strong>réaliser les premiers tests utilisateurs</strong>. En ce sens, il s’agit tout simplement de <strong>donner accès à la maquette à un utilisateur</strong>, issu de votre cœur de cible (de préférence), afin d’observer la manière dont il interagit avec votre plateforme. Si plusieurs <strong>règles <a href="https://adeliom.com/webdesign-ui/" className="font-bold text-bleu hover:text-black" target="_blank" rel="noreferer noopener">web UI design</a></strong> sont définies, il est toujours intéressant de confronter son travail à des utilisateurs directement.<br/>
                            <br/>
                            La dernière phase, une fois la structure visuelle mise en place, consiste à <strong>adapter l’interface en termes de style et de charte graphique</strong>. En effet, l’UI designer procède à <strong>l’ajout des animations, des couleurs et tout autre élément graphique venant enrichir l’expérience utilisateur</strong>. Tout ce travail a pour but de <strong>fluidifier la navigation de l’utilisateur</strong> par la mise en place d’un <strong>site web agréable</strong>. De nouveaux tests peuvent être effectués afin de valider les choix réalisés.<br/>
                            <br/>
                            En définitive, le <strong>travail de l’UI design d’un site internet</strong> fait appel à de nombreuses compétences durant les différentes phases du projet : <strong>conception, élaboration, réalisation technique, etc.</strong> Il est également à souligner que l’<strong>UI designer</strong> devra maîtriser un certain nombre d’outils et <strong>travailler en collaboration avec d’autres acteurs du projet</strong> : <strong>directeur artistique</strong>, <strong>UX designer</strong>, <strong>développeur web</strong>, etc. Le <strong>site internet</strong> devient alors un <strong>produit marketing</strong>. Tout l’intérêt de l’<strong>UI design</strong> repose sur la <strong>conception d’un produit marketing</strong> à la fois <strong>pertinent, intuitif et esthétique pour l’utilisateur</strong>.<br/>
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
                            <h3 className="font-bold">Les notions liées à l'UI Design :</h3>
                            <br/>
                            <hr className="hrblog"></hr>
                            <br/>
                            <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/strategie-digitale/"><li>Stratégie digitale</li></Link>
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
query lastsThreePostsui {
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
export default uiDesign;




