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



class Serp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="SERP : Définition - Référencement Toulouse - Linkweb"
                    description="Les SERP désignent les pages de résultats des moteurs de recherche qui restituent les pages web selon la requête effectuée par un utilisateur."
                    url="https://linkweb.fr/referencement-toulouse/serp/"
                    nom="SERP"
                    slug="referencement-toulouse/serp/"
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
                                SERP : <br/>les pages de résultats des moteurs de recherche
                            </h1>
                        </div>
                    </section>
                    <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que les SERP ?</h2>
                            <br/>
                            <p>
                                L’acronyme <strong>SERP désigne Search Engine Results Pages</strong>. Il fait référence aux pages présentant les <strong className="font-normal">résultats de recherche</strong> générés par les <strong className="font-normal">moteurs de recherche</strong> pour une requête donnée. L’un des objectifs du <strong className="font-normal">référencement naturel</strong> est d’<strong className="font-normal">améliorer le positionnement</strong> de son site internet (atteindre la <strong className="font-normal">première page</strong> notamment) dans les SERP pour des <strong className="font-normal">mots-clés pertinents</strong> pour <strong className="font-normal">votre site internet</strong> et donc préalablement sélectionnés. L’étude des SERP et donc des <strong className="font-normal">résultats des moteurs de recherche</strong> fait partie intégrante du <strong><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">travail de référencement à Toulouse</Link></strong>.<br/>
                                <br/>
                                Une <strong className="font-normal">page de résultats de recherche</strong> se compose de <strong className="font-normal">résultats naturels</strong> (l’<strong className="font-normal">indexation des pages de votre site</strong> est indispensable afin qu’elles apparaissent dans les SERP), mais également de <strong className="font-normal">liens sponsorisés</strong> (via la plateforme <strong className="font-normal">Google Ads</strong> pour le <strong className="font-normal">moteur de recherche Google</strong>) générés en fonction des critères de pertinence, de qualité ou de popularité (<strong className="font-normal">balises meta</strong>, ou <strong className="font-normal">balise titre</strong>, <strong className="font-normal">backlinks</strong> ou <strong className="font-normal">liens entrants</strong>, <strong className="font-normal">optimisations</strong> du contenu de votre site et de vos pages) mis en avant par les <strong className="font-normal">algorithmes</strong> définis par les moteurs. <br/>
                                <br/>
                                Attention, il faut garder à l’esprit que ce sont les <strong className="font-normal">pages web</strong> qui sont mises en avant et non la globalité du site internet. La page affichée va dépendre du <strong className="font-normal">mot-clé</strong> utilisé. Ainsi, une requête peut donner lieu à un nombre conséquent de <strong className="font-normal">pages de résultats</strong>. À ce niveau, <strong className="font-normal">chaque page de résultats</strong> est composée de 10 <strong className="font-normal">liens naturels</strong>. La présence de <strong className="font-normal">liens sponsorisés</strong> n’est pas systématique.<br/>
                                <br/>
                                Pour ce qui concerne les liens sponsorisés, l’affichage est proche de celui des liens naturels, à la différence que la mention « Annonce sponsorisée » est spécifiée et que le favicon n’est pas présent. <br/>
                                <br/>
                                <h2 className="text-xl font-bold text-bleu">Recherche universelle et position 0</h2> <br/>
                                <br/>
                                En plus des liens naturels et des annonces de <strong className="font-normal">référencement payant</strong>, les <strong className="font-normal">pages de recherche</strong> peuvent également afficher d’autres informations qui proviennent de la « <strong className="font-normal">recherche universelle</strong> » sur Google. Concrètement, les résultats universels relèvent d’extraits provenants de Google Images, Google News, Google Shopping ou encore de Google Maps.<br/>
                                <br/>
                                Il est également possible que <strong className="font-normal">Google</strong> mette en avant une <strong className="font-normal">page web</strong> en position 0 car elle répond de façon claire et concise à une question posée par un internaute. Sur des requêtes commençant par « comment », « comment faire », « pourquoi » ou bien des requêtes nécessitant une réponse rapide, il s’agit d’un bon moyen pour <strong className="font-normal">améliorer la visibilité</strong> de sa page.<br/>
                                <br/>
                                <h2 className="text-xl font-bold text-bleu">Données structurées et résultats enrichis</h2> <br/>
                                <br/>
                                Il faut savoir qu’il est possible de personnaliser l’<strong className="font-normal">affichage de ses pages web dans les résultats de recherche</strong>. En effet, il existe la possibilité de mettre en place des <strong className="font-normal">Rich Snippets</strong> à travers l’utilisation des <strong className="font-normal">données structurées</strong>. Ces dernières permettent de spécifier toute une quantité d’informations à propos de sa page.<br/>
                                <br/>
                                Cela permet, par exemple, de bénéficier d’un affichage particulier pour présenter ses recettes de cuisine, sa foire aux questions ou bien pour ses articles de blog, par exemple. Cela est intéressant afin d’<strong className="font-normal">améliorer sa visibilité sur les pages de recherche</strong> même si les snippets ne permettent pas d’<strong className="font-normal">améliorer son positionnement sur les pages de recherche</strong> directement.<br/>
                            <br/>
                        </p>
                        <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/"><img
                            src={banniere}
                            alt="Référencement Toulouse"
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
                            <h3 className="font-bold">Les notions liées aux SERP :</h3>
                            <br/>
                            <hr className="hrblog"></hr>
                            <br/>
                            <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/rapport-positionnement/"><li>Rapport de Positionnement</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/audit-seo/"><li>Audit SEO</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/"><li>Techniques de référencement</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/mots-cles/"><li>Mots-clés</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/"><li>Critères de qualité</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/"><li>Référencement Local</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/donnees-structurées/"><li>Données Structurées</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/erreur-404/"><li>Erreurs 404</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/landing-page/"><li>Landing Page</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/"><li>Backlinks</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/"><li>Optimisation Interne</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/"><li>Courte traîne</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/"><li>Longue Traîne</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/sur-optimisation/"><li>Sur-Optimisation</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/e-reputation/"><li>E-Réputation</li></Link>
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
query lastsThreePostsSerp {
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
export default Serp;




