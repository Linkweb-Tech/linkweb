import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/referencement-ban.jpg";



class techniquesreferencement extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Techniques de référencement : Définition - Référencement Toulouse - Linkweb"
                    description="On entend par techniques de référencement, l'ensemble des actions portées sur un site web visant à faciliter sa compréhension par les moteurs de recherche."
                    url="https://linkweb.fr/referencement-toulouse/techniques-referencement/"
                    nom="Techniques de référencement"
                    slug="referencement-toulouse/techniques-referencement/"
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
                            Techniques de référencement
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                Lorsque l’on parle de <strong>techniques de référencement</strong>, elles correspondent à l’ensemble du travail d’<strong className="font-normal">optimisation</strong> réalisé sur un <strong className="font-normal">site web</strong> avec pour objectif d’<strong className="font-normal">améliorer son positionnement</strong> dans les <strong className="font-normal">résultats des moteurs de recherche</strong>. Cette visibilité dans les <strong className="font-normal">résultats naturels</strong> doit permettre de <strong className="font-normal">générer un trafic qualifié d’origine organique</strong>. Nous tâchons de mettre en place des procédés dans cette direction au sein de nos stratégies de <strong><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">référencement à Toulouse</Link></strong>.<br/>
                                <br/>
                                Ainsi, les <strong className="font-normal">techniques de référencement</strong> ou d’optimisation vont concerner tout un travail effectué au niveau du <strong className="font-normal">contenu des pages web de votre site web</strong>, des <strong className="font-normal">balises</strong> de toutes sortes, du <strong className="font-normal">maillage interne</strong> et des <strong className="font-normal">liens entrants</strong> ou encore des URL. L’optimisation réalisée doit être conforme au choix du <strong className="font-normal">mot-clé</strong> visé en vue d’atteindre la <strong className="font-normal">première page</strong>.<br/>
                                <br/>
                                Toutes ces <strong className="font-normal">optimisations</strong> ont pour finalité d’<strong className="font-normal">améliorer la visibilité de votre site internet</strong> dans les <strong className="font-normal">résultats naturels</strong> en mettant en place des éléments qui vont favoriser la compréhension de votre site par les <strong className="font-normal">algorithmes</strong> des moteurs.<br/>
                                <br/>
                                Le <strong className="font-normal">SEO (Search Engine Optimization)</strong> désigne littéralement l’optimisation d’un site pour les <strong className="font-normal">moteurs de recherche</strong>. Les techniques de référencement mises en œuvre sur un site doivent donner accès à des <strong className="font-normal">contenus pertinents</strong> et répondant aux interrogations des utilisateurs pour <strong className="font-normal">référencer</strong> le site de la meilleure des manières dans les <strong className="font-normal">pages de résultats (ou SERP)</strong> pour des <strong className="font-normal">mots-clés</strong> visés. En effet, un <strong className="font-normal">bon référencement</strong> passe avant tout par une bonne compréhension de l’objectif de votre site par les <strong className="font-normal">moteurs de recherches</strong> lors de l’<strong className="font-normal">indexation</strong>. Notre travail est de faciliter cette lecture par la mise en avant de certains éléments explicites pour les <strong className="font-normal">algorithmes</strong>.<br/>
                                <br/>
                                L’<strong className="font-normal">optimisation SEO des pages de votre site</strong> (remplissage des <strong className="font-normal">balises</strong>, optimisation <strong className="font-normal">sémantique</strong>, <strong className="font-normal">liens internes</strong>, etc.), le <strong className="font-normal">netlinking</strong> (permettant d’obtenir des <strong className="font-normal">backlinks</strong> ou <strong className="font-normal">liens externes</strong>), le <strong className="font-normal">référencement local</strong> avec Google My Business, le travail de l’<strong className="font-normal">expérience utilisateur</strong> (<strong className="font-normal">temps de chargement</strong>, navigation intuitive, etc.) de votre site sont autant de <strong className="font-normal">leviers</strong> qui vous permettront de gagner en visibilité grâce au <strong className="font-normal">webmarketing</strong> et plus particulièrement au <strong className="font-normal">référencement naturel</strong>.<br/>
                        </p>
                        <img
                            src={banniere}
                            alt="Référencement Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées aux techniques de référencement :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/">Référencement Local</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/">Backlinks</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/">Optimisation interne</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/donnees-structurees/">Données structurées</Link></li>
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
query lastsThreePoststechniquesreferencement {
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
export default techniquesreferencement;



