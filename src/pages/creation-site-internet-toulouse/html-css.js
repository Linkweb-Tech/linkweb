import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class html extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="HTML/CSS : Définition - Création site internet Toulouse - Linkweb"
                    description="Le langage HTML et le langage CSS sont à la base de la création de sites internet."
                    url="https://linkweb.fr/creation-site-internet-toulouse/html-css/"
                    nom="HTML/CSS"
                    slug="creation-site-internet-toulouse/html-css/"
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
                            HTML/CSS
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que le HTML/CSS ?</h2>
                        <br />
                        <p>
                            Le <strong>HTML, de l’anglais HyperText Markup Language</strong> (ou Langage de Signalétique <strong className="font-normal">Hypertexte</strong>), est un <strong className="font-normal">langage de programmation web</strong> permettant d’ajouter du contenu sur une <strong className="font-normal">page web</strong> et qui est à la base de la <strong className="font-normal">création de site web</strong>. En effet, une page web est constituée par un <strong className="font-normal">fichier HTML</strong>. Le <strong className="font-normal">code HTML</strong> va permettre de définir le contenu affiché sur une page à partir d’un <strong className="font-normal">navigateur</strong>. C’est d’ailleurs ce contenu HTML affiché par les <strong className="font-normal">navigateurs</strong> qui va être pris en compte par les robots des moteurs de recherche pour extraire le contenu d’une page web. On parle de « <strong className="font-normal">page HTML</strong> ».<br />
                            <br />
                                Ce langage est caractérisé par un balisage qui va déclarer le contenu de la page ainsi que sa nature à travers la présence de <strong>balises HTML</strong> et d'<strong>attributs</strong>. Bloc, niveau de titre, liens internes et externes, paragraphes, contenu imagé (<strong className="font-normal">img</strong>) : le <strong className="font-normal">langage HTML</strong> est indispensable à la <strong className="font-normal">création d’une page web</strong>. En revanche, ce langage ne concerne que la partie contenu de la page web, puisque toute la partie stylisation et animation du contenu va dépendre d’autres <strong className="font-normal">langages</strong> qui vont  venir le compléter.<br />
                            <br />
                                En effet, la partie de de <strong className="font-normal">mise en forme</strong> de la page, ou en tout cas l’ajout de style va dépendre d’un autre langage qui est le <strong>CSS</strong> ou <strong>« style CSS » (Cascading Style Sheets ou Feuilles de style en cascade)</strong>. Le <strong className="font-normal">angage CSS</strong> se présente sous la forme d’une <strong className="font-normal">feuille de style</strong> dans laquelle, ce que l’on appelle des « classes » vont être définies à partir de plusieurs éléments.<br />
                            <br />
                                Les marges, l’<strong className="font-normal">espacement</strong>, les <strong className="font-normal">bordures</strong>, la taille, la couleur, l’interlignage, la forme et bien d’autres paramètres sont autant d’éléments qu’il est possible de définir pour <strong className="font-normal">styliser ses pages web</strong>. De plus, c’est grâce au <strong className="font-normal">CSS</strong> qu’il est possible de rendre un <strong className="font-normal">site internet responsive design</strong>. Par ailleurs, il faut savoir qu’il est possible d’utiliser un <strong>framework CSS</strong> (à l’image de <strong className="font-normal">Bootstrap</strong> ou Tailwind) pour styliser son contenu. Un framework est une forme d’application qui contient des classes pré-existantes pour procurer un gain de temps lors du <strong className="font-normal">développement</strong>. Ainsi, le CSS est indispensable pour travailler l’aspect purement visuel et donc <strong>l’apparence d’un site internet</strong>.<br />
                            <br />
                                Il faut savoir que l’<strong className="font-normal">apprentissage du CSS</strong> est parfaitement lié à l’apprentissage du HTML. Il est l’une des bases du développement web. C’est pourquoi, il est important de se former à la réalisation de feuilles de style en cascade et à son application pour réaliser des <strong className="font-normal">pages web sur-mesure</strong>. Par ailleurs, le <strong className="font-normal">CSS</strong> est directement lié à des principes fondamentaux du développement web et de l’UI et UX Design. En effet, il permet notamment de rendre des <strong className="font-normal">pages web responsive design</strong>, mais également de réaliser un design d’interface parfaitement adapté pour les utilisateurs. C'est ce à quoi nous nous attelons au sein de notre <Link to="/" className="text-bleu hover:text-black font-bold">agence web à Toulouse</Link>.
                            <br />
                                Il est possible d’apprendre à maîtriser le <strong><a className="font-bold text-bleu hover:text-black" href="https://fr.tuto.com/css/" target="_blank" rel="noopener noreferer">CSS</a></strong> dans le cadre de formations, mais également par l’intermédiaire de tutoriels accessibles en ligne. Toutefois, cela demande des connaissances en matière de <strong className="font-normal">HTML</strong>. Aussi, la création de feuilles de style est un travail particulièrement fastidieux puisqu’il fait appel à une importante rigueur ainsi qu’à une certaine technicité. En effet, il est nécessaire de connaître les différentes techniques de sélection pour effectuer des modifications précises. Aussi, la mobilisation de ressources telles que les documentations est nécessaire pour s’assurer d’une parfaite <strong className="font-normal">compatibilité vis-à-vis des différents navigateurs</strong>. Le travail du CSS peut également être conditionné à partir de l’utilisation de différents <strong className="font-normal">frameworks</strong> dont il est nécessaire de connaître et de comprendre le fonctionnement.
                            <br />
                                Enfin, <strong>le langage qui régit les animations visibles</strong> sur un site internet est le <strong>JavaScript</strong>. Ces trois langages sont complémentaires et permettent la <strong className="font-normal">création de sites web variés et sur-mesure</strong>. Il s’agit de l’essence même du <strong className="font-normal">développement web</strong>.<br />
                            <br />
                                Dans nos procédés <strong><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/">de création de site internet à Toulouse</Link></strong>, nous sommes en mesure de <strong className="font-normal">créer un site internet en HTML/CSS</strong>, au même titre qu’un site internet créé à partir d’un <strong className="font-normal">CMS</strong>. Si les deux procédés divergent, il n’existe pas de solution technique idéale : <strong>la meilleure solution sera celle qui s’adapte le mieux à votre projet</strong>. Pour <strong className="font-normal">créer un site web</strong>, un <strong className="font-normal">développeur web front end</strong> est chargé de mettre en place chaque élément qui visera à <strong className="font-normal">structurer</strong> chaque page web en <strong className="font-normal">document HTML</strong> : <strong className="font-normal">balise</strong>, <strong className="font-normal">attribut</strong>, etc.<br />
                            <br />
                                En définitive, <strong className="font-normal">HTML et CSS</strong> sont des technologies dont la compatibilité est promue et régit par le <strong>World Wide Web Consortium (W3C)</strong>. Il est donc important que le <strong className="font-normal">code</strong> mis en place réponde à certaines normes pour être parfaitement lu et assimilé par les différents acteurs et ainsi éviter les erreurs de <strong className="font-normal">syntaxe</strong>.<br />
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
                        <h3 className="font-bold">Les notions liées au HTML/CSS :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/"><li>UI Design</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/"><li>Framework</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/"><li>Front-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/back-end/"><li>Back-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/"><li>Refonte site internet</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/"><li>Maquette de site web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/"><li>Développement Web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/nom-de-domaine/"><li>Nom de domaine</li></Link>
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
query lastsThreePostshtml {
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
export default html;




