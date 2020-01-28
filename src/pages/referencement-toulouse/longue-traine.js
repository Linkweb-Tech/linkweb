import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/referencement-ban.jpg";



class longuetraine extends React.Component {

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

                    <section className="w-full mt-40 text-justify font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <h1 data-aos="fade-up" className="century text-4xl sm:text-5xl text-center text-bleu mt-4 lg:mt-6">
                            Longue Traîne
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                La <strong>longue traîne</strong> (notion de « <strong className="font-normal">long tail</strong> » en anglais) est une expression qui désigne des <strong className="font-normal">requêtes effectuées sur les moteurs de recherche comme Google</strong> à partir de plusieurs <strong className="font-normal">termes de recherche</strong> visant à préciser sa recherche. Par définition, la longue traîne s’oppose à la courte traîne, composée de peu de <strong className="font-normal">mots-clés</strong> et qui va désigner une requête plus globale et donc plus ouverte avec l’emploi d’un faible <strong className="font-normal">nombre de mots-clés qui seront également plus génériques</strong> qu'en longue traîne. Nos <strong><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">stratégies de référencement à Toulouse</Link></strong> sont basées sur une étude des mots-clés qui permet de définir la stratégie la plus pertinente pour vous en ce qui concerne le <strong className="font-normal">choix des mots-clés</strong>.<br/>
                                <br/>
                                En termes de <strong className="font-normal">référencement naturel (SEO)</strong>, les <strong className="font-normal">requêtes de longue traîne</strong> sont généralement caractérisées par l’utilisation de <strong className="font-normal">termes de recherche</strong> plus précis, un <strong className="font-normal">volume de recherche</strong> (<strong className="font-normal">nombre de recherches</strong>) moins important, mais sont susceptibles de présenter un <strong className="font-normal">taux de conversion</strong> ainsi qu’un <strong className="font-normal">taux de clics</strong> plus élevés.<br/>
                                <br/>
                                En effet, les <strong className="font-normal">expressions clés</strong> utilisées dans une <strong className="font-normal">requête de longue traîne</strong> sont plus précises et en disent long sur les intentions des utilisateurs parcourant les <strong className="font-normal">SERP (pages de résultats de recherches)</strong>. Le <strong className="font-normal">trafic organique</strong> généré via ce type de recherches correspond à un <strong className="font-normal">trafic qualifié</strong> : la page visitée doit donc répondre à un besoin très précis.<br/>
                                <br/>
                                D’autre part, il faut savoir que les mots-clés de longue traîne sont généralement moins <strong className="font-normal">concurrentiels</strong> que les <strong className="font-normal">mots-clés de courte traîne</strong>. Cela s’explique par un <strong className="font-normal">faible volume de recherche</strong> (par rapport à la courte traîne de façon générale) et la précision des recherches effectuées dans le cas de la longue traîne.<br/>
                                <br/>
                                Néanmoins, <strong className="font-normal">cibler</strong> et <strong className="font-normal">trouver des mots-clés de longue traîne</strong> intéressants (en termes de <strong className="font-normal">volumes de recherche</strong> et visibilité potentielle) permet de <strong className="font-normal">se positionner plus rapidement en première page</strong> et donc d’<strong className="font-normal">obtenir plus de trafic qualifié sur votre site internet</strong>. Pour ce faire, utiliser des <strong className="font-normal">outils de recherche de mots-clés</strong> comme <strong className="font-normal">Google Trends</strong>, <strong className="font-normal">Google Adwords</strong> ou <strong className="font-normal">Semrush</strong> permettent de sélectionner une <strong className="font-normal">liste de mots-clés pertinents</strong> et sont également utiles pour la <strong className="font-normal">suggestion d’expressions de recherches associées</strong> qui pourront être pertinentes pour vous et <strong className="font-normal">votre site web</strong>.<br/>
                                <br/>
                                Enfin, il reste intéressant de combiner les deux méthodes : si s’appuyer sur des <strong className="font-normal">mots-clés sur lesquels</strong> vous allez obtenir une visibilité rapide va vous être profitable dans un premier temps, miser sur des mots-clés de courte traîne peut également vous rapporter une visibilité supérieure et <strong className="font-normal">générer du trafic</strong> sur votre site web sur le plus long terme.<br/>
                        </p>
                        <img
                            src={banniere}
                            alt="Référencement Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées à la longue traîne :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/">Référencement Local</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/">Backlinks</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/">Techniques de référencement</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/">Optimisation interne</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/donnees-structurees/">Données structurées</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/arborescence-seo/">Arborescence SEO</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/serp/">SERP</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/e-reputation/">E-Réputation</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/landing-page/">Landing Page</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/mots-cles/">Mots-clés</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/courte-traine/">Courte Traîne</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/rapport-positionnement/">Rapport de positionnement</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/">Critères de qualité</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/sur-optimisation/">Sur-Optimisation</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/erreur-404/">Erreurs 404</Link></li>
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
query lastsThreePostslonguetraine {
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
export default longuetraine;




