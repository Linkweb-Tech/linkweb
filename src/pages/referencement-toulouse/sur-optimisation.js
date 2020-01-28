import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/referencement-ban.jpg";



class suroptimisation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Sur-optimisation : Définition - Référencement Toulouse - Linkweb"
                    description="Le travail de référencement naturel demande beaucoup de rigueur et de mesure dans l'optimisation des contenus, balises et autres zones chaudes."
                    url="https://linkweb.fr/referencement-toulouse/sur-optimisation/"
                    nom="Sur-Optimisation"
                    slug="referencement-toulouse/sur-optimisation/"
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
                            Sur-Optimisation
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                La <strong>sur-optimisation d’un site web</strong> pour le <strong className="font-normal">référencement naturel</strong> peut avoir des conséquences nocives en termes de performances. Elle se caractérise par une utilisation intempestive et excessive des <strong className="font-normal">techniques de référencement naturel</strong>. Veiller à <strong className="font-normal">concevoir un site web pertinent</strong> et <strong className="font-normal">adapté aux utilisateurs</strong> est l’une de nos préoccupations dans notre manière de travailler le <strong><Link to="/referencement-toulouse/" className="font-bold text-bleu hover:text-black">référencement à Toulouse</Link></strong>.<br/>
                                <br/>
                                S’il est fortement conseillé d’<strong className="font-normal">optimiser le contenu de son site web</strong>, les différentes <strong className="font-normal">balises</strong> ainsi que l’ensemble de ses zones dites « chaudes », il est indispensable de faire preuve de mesure et de bon sens. L’<strong className="font-normal">optimisation pour les moteurs de recherche (SEO)</strong> a pour objectif principal de faciliter la lecture et la compréhension des <strong className="font-normal">pages web</strong> par les <strong className="font-normal">robots des moteurs</strong>.<br/>
                                <br/>
                                De plus, ces derniers sont capables d’identifier les pratiques abusives (<strong className="font-normal">répétition non-pertinente de mots-clés</strong>, liens de mauvaise qualité, contenu caché, etc.). C’est pourquoi, il est indispensable de veiller à ce que l’<strong className="font-normal">intégration de mots-clés</strong> dans les différentes zones de vos pages soit pertinente et justifiée. Chaque titre est présent pour résumer le <strong className="font-normal">contenu de la page</strong> ou plus particulièrement d’un paragraphe. Ce dernier doit donc être en parfaite corrélation avec le contenu qu’il présente.<br/>
                                <br/>
                                La question des <strong className="font-normal">liens</strong> est également importante à ce niveau. S’ils vont vous permettre d’<strong className="font-normal">améliorer votre positionnement</strong> au sein des <strong className="font-normal">pages de recherche</strong>, il est indispensable de veiller à ce qu’ils soient bien soignés. À ce niveau, le <strong className="font-normal">profil de lien</strong> est une notion importante pour évaluer leur qualité. Le profil d’un lien désigne l’ensemble des éléments qui vont concerner son <strong className="font-normal">ancrage</strong>, ses propriétés, le contexte dans lequel il s’inscrit, etc. Ainsi, un lien de mauvaise qualité pourra nuire à <strong className="font-normal">votre référencement</strong>. Il faut savoir que l’<strong className="font-normal">ancre de lien</strong> est l’un des aspects principaux du profil de lien. Il s’agit du texte sur lequel le lien est présent. Ce texte doit donc être soigné et optimisé, mais il est impératif que l’ancre soit naturelle et pertinente.<br/>
                                <br/>
                                Un <strong className="font-normal">contenu sur-optimisé</strong> pourra se voir <strong className="font-normal">pénalisé par Google</strong>. Les sanctions infligées par le <strong className="font-normal">moteur de recherche</strong> se traduisent par un <strong className="font-normal">déclassement dans les pages de recherche</strong> et peuvent aller jusqu’au placement en <strong className="font-normal">liste noire</strong> en fonction de l'importance de la pratique pénalisée. En vue d’éviter ce type de désagrément, il est important d’<strong className="font-normal">adopter un comportement naturel</strong> lors de la <strong className="font-normal">construction de ses pages</strong> et la <strong className="font-normal">création de ses liens</strong>. En effet, le contenu présenté doit être adapté avant tout à un utilisateur humain, avant d’être <strong className="font-normal">optimisé pour les moteurs de recherche</strong>.<br/>
                        </p>
                        <img
                            src={banniere}
                            alt="Référencement Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées à la sur-optimisation :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/">Référencement local</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/">Backlinks</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/">Techniques de référencement</Link></li>
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
query lastsThreePostssuroptimisation {
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
export default suroptimisation;




