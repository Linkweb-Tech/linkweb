import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/referencement-ban.jpg";



class DonneesStructurees extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Données structurées : Définition - Référencement Toulouse - Linkweb"
                    description="Les données structurées permettent de communiquer un maximum d'informations à propos d'une page web et développer des résultats enrichis."
                    url="https://linkweb.fr/referencement-toulouse/donnees-structurees/"
                    nom="Données Structurées"
                    slug="referencement-toulouse/donnees-structurees/"
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
                            Données Structurées
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                Les <strong>données structurées</strong> désignent des données qui vont donner de la visibilité à <strong className="font-normal">votre site web dans les SERP (Search Engine Page Results)</strong> et donc être très utiles en termes de <strong className="font-normal">référencement naturel</strong>. Elles sont utilisées par <strong className="font-normal">Google</strong> pour deux raisons principales :<br/>
                                <br/>
                                <ul className="px-12 list-disc">
                                    <li>Mieux comprendre le <strong className="font-normal">contenu d’une page web</strong>,</li>
                                    <li>Permettre un affichage enrichi dans les <strong className="font-normal">pages de résultats</strong> de Google.</li>
                                </ul>
                                    <br/>
                                Elles se traduisent par la mise en place d’un <strong className="font-normal">script de type JSON</strong> dans la balise head d’une page web. Ce script contient un <strong className="font-normal">schéma</strong> qui va être choisi en fonction des informations que vous souhaitez attribuer à <strong className="font-normal">votre page web</strong>. Nos référenceurs se chargent de la mise en place de vos données structurées dans le cadre <strong className="font-normal"><Link className="text-bleu hover:text-black font-bold" to="/referencement-toulouse/">de notre travail de référencement à Toulouse</Link></strong>.<br/>
                                <br/>
                                Si les données structurées peuvent intervenir sur la <strong className="font-normal">manière dont les pages web vont être présentées sur les pages de résultats des moteurs de recherche</strong>, elles ne permettent en rien de gagner en <strong className="font-normal">positionnement</strong>. En effet, la visibilité apportée sur les <strong className="font-normal">pages de recherche</strong> ne concerne que le format que va prendre le lien vers votre page web dans les <strong className="font-normal">pages de résultats</strong> pour favoriser un <strong className="font-normal">taux de clics</strong> intéressant. Les données structurées font partie des <strong className="font-normal">balises</strong> qui vont permettre de personnaliser l’affichage de vos pages dans les <strong className="font-normal">résultats naturels</strong>.<br/>
                                <br/>
                                Pour mettre en place des données structurées sur les <strong className="font-normal">pages web de son site internet</strong>, il va donc falloir leur appliquer un schéma. À ce niveau, Google préconise l’utilisation des ressources proposées par <strong><a className="text-bleu hover:text-black font-bold" href="https://schema.org/" target="_blank" rel="noopener noreferrer">schema.org</a></strong>. Le choix du type de schéma à mettre en place va dépendre des informations à mettre en surbrillance à propos de la page. Il existe plusieurs types de schémas en fonction du contenu présenté.<br/>
                            </p>
                            <br/>
                            <h2 className="text-xl font-bold text-bleu">Améliorer la visibilité des pages de votre site grâce aux données structurées</h2>
                            <br/>
                            <p>
                                Personnaliser l’affichage de vos recettes, des produits vendus sur votre site, de vos articles de blog ou bien de votre foire aux questions dans les <strong className="font-normal">résultats de recherche de Google</strong>, c’est possible. En effet, il existe de nombreuses façons d’apparaître dans les <strong className="font-normal">>résultats enrichis</strong> (comme l’<strong className="font-normal">Open Graph</strong> par exemple) de Google pour augmenter son <strong className="font-normal">taux de clic</strong>.<br/>
                                <br/>
                                Pour ce faire, il va falloir intégrer le bon type de schéma dans le script JSON présent dans la partie head du <strong className="font-normal">code HTML</strong> de <strong className="font-normal">chaque page de votre site internet</strong>. Le site web schema.org propose une documentation très riche dans laquelle seront disponibles de nombreux exemples de balisage. Parmi les plus fréquents, nous pouvons noter les schémas :<br/>
                                <br/>
                                <ul className="px-12 list-disc">
                                    <li>Event pour un événement,</li>
                                    <li> Organisation pour une entreprise,</li>
                                    <li>Person,</li>
                                    <li>Product pour un produit,</li>
                                    <li>Review pour un avis,</li>
                                    <li>Recipe pour ses recettes,</li>
                                    <li>Book pour un livre,</li>
                                    <li>et ainsi de suite.</li>
                                    </ul>
                                <br/>
                                L’ensemble des schémas proposés par schema.org est disponible directement dans la documentation proposée par le site web. Ainsi, les données structurées constituent un très bon moyen de développer son <strong className="font-normal">référencement web</strong> sur les <strong className="font-normal">pages de résultats des moteurs de recherches</strong> de façon très simple.<br/>
                                <br/>
                                Enfin, il faut savoir que Google offre la possibilité de contrôler la validité de son balisage grâce à la mise à disposition d'un <strong><a className="text-bleu hover:text-black font-bold" href="https://search.google.com/structured-data/testing-tool/u/0/?hl=frs" target="_blank" rel="noopener noreferrer">outil de test des données structurées</a></strong>.<br/>
                        </p>
                        <img
                            src={banniere}
                            alt="Référencement Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées aux Données structurées :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/">Référencement local</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/">Backlinks</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/">Techniques de référencement</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/">Optimisation interne</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/arborescence-seo/">Arborescence SEO</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/serp/">SERP</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/e-reputation/">E-Réputation</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/landing-page/">Landing Page</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/mots-cles/">Mots-clés</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/">Longue Traîne</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/courte-traine/">Courte Traîne</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/rapport-positionnement/">Rapport de positionnement</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/">Critères de qualité</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/sur-optimisation/">Sur-Optimisation</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/audit-seo/">Audit SEO</Link></li>
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
query lastsThreePostsDonneesStructurees {
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
export default DonneesStructurees;



