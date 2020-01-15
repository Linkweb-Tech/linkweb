import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/referencement-ban.jpg";



class ArborescenceSEO extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Arborescence SEO : Définition - Référencement Toulouse - Linkweb"
                    description="L'arborescence SEO a pour vocation de construire un site web destiné prioritairement au référencement naturel."
                    url="https://linkweb.fr/referencement-toulouse/arborescence-seo/"
                    nom="Arborescence SEO"
                    slug="referencement-toulouse/arborescence-seo/"
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
                            Arborescence SEO
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                L’<strong>arborescence d’un site internet</strong> reflète son architecture. En effet, l’arborescence désigne les <strong className="font-normal">liens existants entre les pages du site</strong> en fonction de leur hiérarchisation. En ce qui concerne l’<strong>arborescence SEO (Search Engine Optimization)</strong>, elle se caractérise par une <strong className="font-normal">construction du site web</strong> avec pour unique vocation le <strong className="font-normal">SEO</strong>.<br/>
                                <br/>
                                Cette dernière va donc être mise en place à partir de plusieurs critères qui vont favoriser le <strong className="font-normal">bon référencement d’un site internet</strong> dans les <strong className="font-normal">résultats naturels des moteurs de recherche</strong>. En fonction de chaque projet, nous sommes en mesure de mettre en place une arborescence SEO dans le cadre d’une stratégie <strong><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">de référencement à Toulouse</Link></strong>.<br/>
                                <br/>
                                En somme, mettre en place une <strong className="font-normal">arborescence optimisée</strong> pour <strong className="font-normal">améliorer le positionnement de votre site internet sur Google</strong> et accroître votre <strong className="font-normal">visibilité</strong> demande des bases stratégiques solides. Ce type d’arborescence répond à une <strong className="font-normal">stratégie de référencement naturel</strong> où les objectifs ont été clairement définis et les <strong className="font-normal">mots-clés</strong> stratégiques ciblés. En effet, le premier niveau de l’arborescence correspond aux pages principales qui vont concentrer une partie du travail de <strong className="font-normal">référencement SEO</strong>.<br/>
                                <br/>
                                Ces dernières devront être fortes d’<strong className="font-normal">optimisations</strong> soignées et de <strong className="font-normal">backlinks (liens retours)</strong> de qualité. Ce sont elles qui devront paraître dans les <strong className="font-normal">pages de résultats des moteurs de recherche</strong> pour leur requête cible. Le restant des <strong className="font-normal">pages du site web</strong> pourra être crée pour améliorer la performance des pages principales grâce au <strong className="font-normal">maillage interne</strong> ou encore favoriser une certaine visibilité sur des requêtes de longue traîne, par exemple.<br/>
                                <br/>
                                Si l’arborescence SEO a une visée de <strong className="font-normal">référencement web</strong> pour les moteurs de recherches principalement, cette dernière doit répondre à l’ensemble des préoccupations des utilisateurs du site. Ainsi, elle doit nécessairement être pensée en fonction de l’<strong className="font-normal">expérience utilisateur</strong> en apportant une réponse riche et intuitive aux questions que se posera un visiteur arrivant sur le site. Elle dépendra donc du <strong className="font-normal">contenu</strong> déployé sur le site pour apporter une réponse pertinente et favoriser la navigation des utilisateurs entre les <strong className="font-normal">pages de votre site</strong>.<br/>
                                <br/>
                                L’<strong className="font-normal">optimisation SEO de son site internet</strong> passe avant tout par une construction interne irréprochable (de la <strong className="font-normal">définition des pages web</strong> à leur <strong className="font-normal">optimisation sémantique</strong>). Ceci est aussi, voire plus important qu’une discipline telle que le <strong className="font-normal">netlinking</strong>. C’est en ce sens que devra être déployée une <strong className="font-normal">stratégie de contenus</strong> qui va générer de la performance (<strong className="font-normal">visibilité, trafic, contacts</strong>) et permettre d’activer tous les <strong className="font-normal">leviers</strong> pour <strong className="font-normal">améliorer le référencement Google</strong> du site en question. Cela témoigne de l'importance d'une arborescence bien pensée dès le départ.<br/>
                        </p>
                        <img
                            src={banniere}
                            alt="Référencement Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées à l'arborescence SEO :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/">Référencement local</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/">Backlinks</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/">Techniques de référencement</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/">Optimisation interne</Link></li>
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
query lastsThreePostsArborescenceSEO {
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
export default ArborescenceSEO;




