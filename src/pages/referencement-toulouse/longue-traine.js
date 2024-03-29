import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class longuetraine extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Longue Traîne : Définition - Référencement Toulouse - Linkweb"
                    description="Les requêtes de longue traîne possèdent un potentiel particulièrement intéressant pour engranger de la visibilité rapidement sur son site internet."
                    url="https://linkweb.fr/referencement-toulouse/longue-traine/"
                    nom="Longue Traîne"
                    slug="referencement-toulouse/longue-traine/"
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
                            Longue Traîne
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que la Longue Traîne ?</h2>
                        <br />
                        <p>
                                La <strong>longue traîne</strong> (notion de « <strong className="font-normal">long tail</strong> » en anglais) est une expression qui désigne des <strong className="font-normal">requêtes effectuées sur les moteurs de recherche comme Google</strong> à partir de plusieurs <strong className="font-normal">termes de recherche</strong> visant à préciser sa recherche. Par définition, la longue traîne s’oppose à la courte traîne, composée de peu de <strong className="font-normal">mots-clés</strong> et qui va désigner une requête plus globale et donc plus ouverte avec l’emploi d’un faible <strong className="font-normal">nombre de mots-clés qui seront également plus génériques</strong> qu'en longue traîne. Nos <strong><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">stratégies de référencement à Toulouse</Link></strong> sont basées sur une étude des mots-clés qui permet de définir la stratégie la plus pertinente pour vous en ce qui concerne le <strong className="font-normal">choix des mots-clés</strong>.<br />
                            <br/>
                                La clé de la stratégie se cache dans les combinaisons de mots clés et les propositions de <strong className="font-normal">contenus pertinents</strong>. Affiner la recherche en choisissant d'utiliser les bons <strong className="font-normal">mots clés de longue traîne</strong> permet de démarquer ses supports réalisés de ceux des sites concurrents. En répondant de la façon la plus juste à chaque requête d'utilisateur dans son contenu, vous pouvez <strong className="font-normal">augmenter votre visibilité sur des requêtes stratégiques</strong> grâce au travail de référencement des équipes de notre <strong className="font-normal">agence web</strong>.
                            <br />
                                En termes de <strong className="font-normal">référencement naturel (SEO)</strong>, les <strong className="font-normal">requêtes de longue traîne</strong> sont généralement caractérisées par l’utilisation de <strong className="font-normal">termes de recherche</strong> plus précis, un <strong className="font-normal">volume de recherche</strong> (<strong className="font-normal">nombre de recherches</strong>) moins important, mais sont susceptibles de présenter un <strong className="font-normal">taux de conversion</strong> ainsi qu’un <strong className="font-normal">taux de clics</strong> plus élevés. Définir un mot clé principal permet la mise en place d'un travail d'optimisation ciblant l'<strong className="font-normal">outil de recherche Google</strong>. Cette stratégie est un atout important pour la <strong className="font-normal">visibilité et la popularité du site web</strong> de votre entreprise.<br />
                            <br />
                                En effet, les <strong className="font-normal">expressions clés</strong> utilisées dans une <strong className="font-normal">requête de longue traîne</strong> sont plus précises et en disent long sur les intentions des utilisateurs parcourant les <strong className="font-normal">SERP (pages de résultats de recherches)</strong>. Le <strong className="font-normal">trafic organique</strong> généré via ce type de recherches correspond à un <strong className="font-normal">trafic qualifié</strong> : la page visitée doit donc répondre à un besoin très précis. Chaque <strong className="font-normal">page du site</strong> proposée est construite en fonction des mots-clés (keywords) employés lors des <strong className="font-normal">recherches des internautes</strong> et à usage stratégique pour une entreprise. Le moteur de recherche a pour priorité de mettre en avant le <strong className="font-normal">contenu pertinent</strong>. C'est pourquoi, il est important de produire un <strong className="font-normal">contenu de qualité</strong> et optimisé pour les bons mots clés.<br />
                            <br />
                                D’autre part, il faut savoir que les mots-clés de longue traîne sont généralement moins <strong className="font-normal">concurrentiels</strong> que les <strong className="font-normal">mots-clés de courte traîne</strong>. Cela s’explique par un <strong className="font-normal">faible volume de recherche</strong> (par rapport à la courte traîne de façon générale) et la précision des recherches effectuées dans le cas de la longue traîne. Par ailleurs, utiliser plusieurs mots clés dans la <strong className="font-normal">barre de recherche d'un outil comme Google</strong> affine les suggestions pour répondre à un besoin précis de l'utilisateur. Une expression-clé bien employée dans l'outil de recherche permettra de trouver les bons sites, comme pour réaliser un achat. C'est pour cela que notre équipe veille à travailler à partir de certains mots en priorité à partir de critères comme le <strong className="font-normal">nombre de résultats de recherches</strong> et les objectifs de votre entreprise.<br />
                            <br />
                                Néanmoins, <strong className="font-normal">cibler</strong> et <strong className="font-normal">trouver des mots-clés de longue traîne</strong> intéressants (en termes de <strong className="font-normal">volumes de recherche</strong> et visibilité potentielle) permet de <strong className="font-normal">se positionner plus rapidement en première page</strong> et donc d’<strong className="font-normal">obtenir plus de trafic qualifié sur votre site internet</strong>. Pour ce faire, utiliser des <strong className="font-normal">outils de recherche de mots-clés</strong> comme <strong className="font-normal">Google Trends</strong>, <strong className="font-normal">Google Adwords</strong> ou <strong className="font-normal">Semrush</strong> permettent de sélectionner une <strong className="font-normal">liste de mots-clés pertinents</strong> et sont également utiles pour la <strong className="font-normal">suggestion d’expressions de recherches associées</strong> qui pourront être pertinentes pour vous et <strong className="font-normal">votre site web</strong>.<br />
                            <br/>
                                Trouver les mots clés les plus pertinents à travailler est notre spécialité, le travail de référencement naturel est influencé par le <strong className="font-normal">choix des mots clés</strong> sur lesquels les contenus sont optimisés. De ce fait, nous vous proposons d'investir les <strong className="font-normal">expressions-clés de longue traîne</strong> les plus pertinentes pour vous apporter un positionnement de choix sur des <strong className="font-normal">requêtes à fort potentiel</strong> en vue de permettre à votre support de vous apporter des performances importantes.
                            <br />
                                Enfin, il reste intéressant de combiner les deux méthodes : si s’appuyer sur des <strong className="font-normal">mots-clés sur lesquels</strong> vous allez obtenir une visibilité rapide va vous être profitable dans un premier temps, miser sur des mots-clés de courte traîne peut également vous rapporter une visibilité supérieure et <strong className="font-normal">générer du trafic</strong> sur votre site web sur le plus long terme.<br />
                        </p>
                        <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/"><img
                            src={banniere}
                            alt="Référencement Toulouse"
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
                        <h3 className="font-bold">Les notions liées à la Longue Traîne :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/"><li>Optimisation interne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/landing-page/"><li>Landing Page</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/rapport-positionnement/"><li>Rapport de positionnement</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/arborescence-seo/"><li>Arborescence SEO</li></Link>
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
query lastsThreePostslonguetraine {
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
export default longuetraine;




