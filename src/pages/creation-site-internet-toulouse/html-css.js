import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/creation-site-internet-ban.png";



class html extends React.Component {

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

                    <section className="w-full mt-40 text-justify font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <h1 data-aos="fade-up" className="century text-4xl sm:text-5xl text-center text-bleu mt-4 lg:mt-6">
                        HTML/CSS
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                Le <strong>HTML, de l’anglais HyperText Markup Language</strong> (ou Langage de Signalétique <strong className="font-normal">Hypertexte</strong>), est un <strong className="font-normal">langage de programmation web</strong> permettant d’ajouter du contenu sur une <strong className="font-normal">page web</strong> et qui est à la base de la <strong className="font-normal">création de site web</strong>. En effet, une page web est constituée par un <strong className="font-normal">fichier HTML</strong>. Le <strong className="font-normal">code HTML</strong> va permettre de définir le contenu affiché sur une page à partir d’un <strong className="font-normal">navigateur</strong>. C’est d’ailleurs ce contenu HTML affiché par les <strong className="font-normal">navigateurs</strong> qui va être pris en compte par les robots des moteurs de recherche pour extraire le contenu d’une page web. On parle de « <strong className="font-normal">page HTML</strong> ».<br/>
                            <br/>
                                Ce langage est caractérisé par un balisage qui va déclarer le contenu de la page ainsi que sa nature à travers la présence de <strong>balises HTML</strong> et d'<strong>attributs</strong>. Bloc, niveau de titre, liens internes et externes, paragraphes, contenu imagé (<strong className="font-normal">img</strong>) : le <strong className="font-normal">langage HTML</strong> est indispensable à la <strong className="font-normal">création d’une page web</strong>. En revanche, ce langage ne concerne que la partie contenu de la page web, puisque toute la partie stylisation et animation du contenu va dépendre d’autres <strong className="font-normal">langages</strong> qui vont  venir le compléter.<br/>
                            <br/>
                                En effet, la partie de de <strong className="font-normal">mise en forme</strong> de la page, ou en tout cas l’ajout de style va dépendre d’un autre langage qui est le <strong>CSS</strong> ou <strong>« style CSS » (Cascading Style Sheets ou Feuilles de style en cascade)</strong>. Le <strong className="font-normal">angage CSS</strong> se présente sous la forme d’une <strong className="font-normal">feuille de style</strong> dans laquelle, ce que l’on appelle des « classes » vont être définies à partir de plusieurs éléments.<br/>
                            <br/>
                                Les marges, l’<strong className="font-normal">espacement</strong>, les <strong className="font-normal">bordures</strong>, la taille, la couleur, l’interlignage, la forme et bien d’autres paramètres sont autant d’éléments qu’il est possible de définir pour <strong className="font-normal">styliser ses pages web</strong>. De plus, c’est grâce au <strong className="font-normal">CSS</strong> qu’il est possible de rendre un <strong className="font-normal">site internet responsive design</strong>. Par ailleurs, il faut savoir qu’il est possible d’utiliser un <strong>framework CSS</strong> (à l’image de <strong className="font-normal">Bootstrap</strong> ou Tailwind) pour styliser son contenu. Un framework est une forme d’application qui contient des classes pré-existantes pour procurer un gain de temps lors du <strong className="font-normal">développement</strong>. Ainsi, le CSS est indispensable pour travailler l’aspect purement visuel et donc <strong>l’apparence d’un site internet</strong>.<br/>
                            <br/>
                                Enfin, <strong>le langage qui régit les animations visibles</strong> sur un site internet est le <strong>JavaScript</strong>. Ces trois langages sont complémentaires et permettent la <strong className="font-normal">création de sites web variés et sur-mesure</strong>. Il s’agit de l’essence même du <strong className="font-normal">développement web</strong>.<br/>
                            <br/>
                                Dans nos procédés <strong><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/">de création de site internet à Toulouse</Link></strong>, nous sommes en mesure de <strong className="font-normal">créer un site internet en HTML/CSS</strong>, au même titre qu’un site internet créé à partir d’un <strong className="font-normal">CMS</strong>. Si les deux procédés divergent, il n’existe pas de solution technique idéale : <strong>la meilleure solution sera celle qui s’adapte le mieux à votre projet</strong>. Pour <strong className="font-normal">créer un site web</strong>, un <strong className="font-normal">développeur web front end</strong> est chargé de mettre en place chaque élément qui visera à <strong className="font-normal">structurer</strong> chaque page web en <strong className="font-normal">document HTML</strong> : <strong className="font-normal">balise</strong>, <strong className="font-normal">attribut</strong>, etc.<br/>
                            <br/>
                                En définitive, <strong className="font-normal">HTML et CSS</strong> sont des technologies dont la compatibilité est promue et régit par le <strong>World Wide Web Consortium (W3C)</strong>. Il est donc important que le <strong className="font-normal">code</strong> mis en place réponde à certaines normes pour être parfaitement lu et assimilé par les différents acteurs et ainsi éviter les erreurs de <strong className="font-normal">syntaxe</strong>.<br/>
                            </p>
                        <img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées aux langages HTML et CSS :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/">UI Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/">UX Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/">Responsive Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/">Webdesign</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/">Maquette de site web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/">CMS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/">Framework</Link></li>
                                <li>Stratégie Digitale</li>
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
export default html;



