import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/referencement-ban.jpg";



class optimisationinterne extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Optimisation interne : Définition - Référencement Toulouse - Linkweb"
                    description="L'optimisation interne d'un site internet est une part importante du travail de référencement naturel."
                    url="https://linkweb.fr/referencement-toulouse/optimisation-interne/"
                    nom="Optimisation interne"
                    slug="referencement-toulouse/optimisation-interne/"
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
                            Optimisation SEO interne
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                L’<strong>optimisation interne</strong> d’un site internet pour le <strong className="font-normal">référencement naturel</strong> désigne l’ensemble des techniques visant à faciliter la compréhension du contenu de ses <strong className="font-normal">pages web</strong> par les <strong className="font-normal">moteurs de recherche</strong>. En ce sens, elle désigne l’ensemble des optimisations à réaliser exclusivement sur un <strong className="font-normal">site web</strong> et plus particulièrement sur chaque <strong className="font-normal">page web</strong>. <strong className="font-normal">Optimiser son référencement</strong> via une <strong className="font-normal">stratégie de référencement naturel</strong> adaptée fait partie de nos <strong><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">missions de référencement à Toulouse</Link></strong>.<br/>
                                <br/>
                                Sur un site internet, il y a ce que l’on appelle les zones chaudes. Ces zones sont dites « chaudes », car elles possèdent un potentiel <strong className="font-normal">SEO</strong> élevé. En ce sens, optimisées, elles vont favoriser un <strong className="font-normal">bon positionnement de votre site internet</strong> dans les <strong className="font-normal">pages de résultats de recherches des moteurs (SERP ou Search Engine Results Page)</strong>. Parmi elles, nous pouvons citer la <strong className="font-normal">balise title</strong> d’une page et la <strong className="font-normal">balise H1</strong> comme principales, mais les autres <strong className="font-normal">balises Hn</strong>, l’<strong className="font-normal">attribut alt des images</strong> ou encore les <strong className="font-normal">ancres de liens</strong> en font également partie.<br/>
                                <br/>
                                En optimisant ces zones en fonction de votre <strong className="font-normal">stratégie de référencement web</strong>, vous allez communiquer des informations (à travers la définition des <strong className="font-normal">mots-clés</strong>) qui vont aider les moteurs à classer votre site internet dans un <strong className="font-normal">index</strong>, de façon la plus favorable pour vous. Si ce processus a bien été effectué de manière efficace, les <strong className="font-normal">algorithmes</strong>, lors d’une requête que vous avez ciblée, devraient pouvoir identifier votre site web comme pertinent pour l’utilisateur.<br/>
                                <br/>
                                En plus de cela, pour <strong className="font-normal">positionner</strong> son site de manière visible pour les utilisateurs, il est important de réfléchir à une arborescence adaptée. De ce point de vue, la manière la plus efficace de créer des <strong className="font-normal">backlinks</strong> qui vont transférer du jus de lien à vos pages web est de créer un <strong className="font-normal">maillage interne</strong> entre les pages de votre site. Les <strong className="font-normal">liens internes</strong> vont être bénéfiques en termes de référencement tout d’abord, mais également pour l’<strong className="font-normal">expérience utilisateur</strong> de votre site en créant des liens logiques entre vos pages et en incitant les utilisateurs à naviguer de manière pertinente.<br/>
                                <br/>
                                Par ailleurs, l’<strong className="font-normal">optimisation sémantique des contenus</strong>, l’optimisation des chemins de navigation visant à améliorer son <strong className="font-normal">taux de conversion</strong> ou encore l’optimisation du <strong className="font-normal">temps de chargement</strong> font également partie des <strong className="font-normal">techniques de référencement on-site</strong> qui vont permettre à votre site de bien figurer dans les <strong className="font-normal">résultats des moteurs de recherche</strong>.<br/>
                                <br/>
                                En revanche, apparaître en <strong className="font-normal">première page</strong> avec une optimisation on-site uniquement peut s’avérer laborieux dans le cas d’un <strong className="font-normal">mot-clé</strong> concurrentiel. Il faudra alors travailler son <strong className="font-normal">netlinking</strong> en générant des <strong className="font-normal">liens externes pertinents</strong> pour votre site en vue d’obtenir un <strong className="font-normal">bon référencement SEO</strong> sur le long terme.<br/>
                                <br/>
                                <strong>SEO :</strong> <strong className="font-normal">Search Engine Optimization</strong> ou optimisation pour les moteurs de recherche.<br/>
                        </p>
                        <img
                            src={banniere}
                            alt="Référencement Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées à l'optimisation interne :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/">Référencement local</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/">Backlinks</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/">Techniques de référencement</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/arborescence-seo/">Arborescence SEO</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/serp/">SERP</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/e-reputation/">E-Réputation</Link></li>
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
query lastsThreePostsoptimisationinterne {
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
export default optimisationinterne;




