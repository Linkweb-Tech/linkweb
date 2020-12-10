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

                    <section className="w-full century mt-40 flex flex-col items-center justify-start bg-bleu" style={{background:'#00000073 url('+ Bg +')', minHeight:'300px', backgroundPosition:'center', backgroundSize:'cover',backgroundBlendMode:'overlay'}}>
                        <div className="topdef">
                            <h2 className="text-center text-xl font-bold text-white">Définition</h2>
                        </div>
                        <div>
                            <h1 data-aos="fade-up" className="century text-5xl sm:text-6xl text-bleu text-center text-white mt-4 lg:mt-6">
                                Arborescence SEO
                            </h1>
                        </div>
                    </section>
                    <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que l'Arborescence SEO ?</h2>
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
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Pourquoi l’arborescence SEO doit être anticipée avant la création de son site ?</h2>
                        <br/>
                        <p>
                            En <strong className="font-normal">référencement naturel SEO</strong>, <strong>le contenu est central</strong>. En effet, c’est grâce au <strong className="font-normal">contenu de ses pages web</strong> que ces dernières vont être répertoriées puis classées par les <strong className="font-normal">moteurs de recherche</strong>. Pour mettre en place une <strong className="font-normal">expérience utilisateur optimale</strong>, il est nécessaire d’anticiper l’ensemble des éléments qui vont enrichir cette expérience pour les internautes.<br/>
                            <br/>
                            Cela se matérialise par la <strong>création de liens internes vers des contenus relatifs</strong>, mais également par la <strong>mise en place d’une interface intuitive</strong> ainsi qu’une <strong>segmentation du contenu de sa page</strong>. Ceci permet également de <strong className="font-normal">créer des cocons sémantiques</strong> qui permettront d’<strong className="font-normal">améliorer le classement de vos pages sur des mots-clés concurrentiels</strong> dans les <strong className="font-normal">résultats de recherche de Google</strong>, par exemple.<br/>
                            <br/>
                            Outre le <strong className="font-normal">maillage interne</strong> présent sur son <strong className="font-normal">site internet</strong>, d’autres critères vont également devoir être pris en compte. À ce sujet, le <a href="https://www.netoffensive.blog/referencement-naturel/" target="_blank" rel="noopener noreferer" className="text-bleu font-bold hover:text-black">guide SEO du blog Netoffensive</a> passe les principaux critères en revue. Mettre en place un <strong className="font-normal">contenu de qualité</strong> demande une certaine réflexion. Quelles sont les attentes des internautes ? Quel type de réponse recherchent-ils ? Sous quelle forme souhaitent-ils obtenir leur réponse ?<br/>
                            <br/>
                            Toutes ces questions doivent entrer en compte dans l’<strong className="font-normal">élaboration de votre stratégie et de votre arborescence SEO</strong>. De plus, en réalisant une <strong className="font-normal">optimisation de vos contenus</strong>, vous apportez une valeur ajoutée à <strong className="font-normal">vos pages web</strong>. Cette optimisation vous permettra d’<strong className="font-normal">être classé sur des requêtes périphériques</strong>, que vous ne visiez pas forcément, mais qui vous apporteront du <strong className="font-normal">trafic</strong>.<br/>
                            <br/>
                            De plus, le <strong className="font-normal">référencement de sites internet</strong> est une discipline qui s’établit sur le long terme. C’est pourquoi, avant d’observer vos premiers résultats, un certain délai sera nécessaire. <strong className="font-normal">Anticiper votre arborescence SEO</strong> est un bon moyen de ne pas revenir sur certains points qui invalideraient vos choix précédents. Manque d’ouverture, mauvaise structure, sous-niveaux trop profonds : les problèmes liés à un manque d’anticipation de son <strong className="font-normal">arborescence SEO</strong> sont fréquents.<br/>
                            <br/>
                            En effet, il est très difficile de modifier une arborescence une fois <strong className="font-normal">son site internet en ligne</strong> : <strong className="font-normal">pages indexées</strong> ne correspondant plus à la nouvelle ligne, <strong className="font-normal">redirections 301</strong> dispersant le <strong className="font-normal">jus de lien (Link Juice)</strong>, attente de la <strong className="font-normal">prise en compte des nouveaux contenus par les moteurs de recherche</strong>, etc.<br/>
                            <br/>
                            En définitive, les problèmes liés à une arborescence non pensée pour le <strong className="font-normal">référencement naturel</strong> peuvent être nombreux. En anticipant cette problématique, vous serez en mesure de <strong className="font-normal">développer un site internet</strong> pertinent sur le long terme, mais également de dénicher les meilleures <strong className="font-normal">opportunités de mots-clés pour votre stratégie</strong>. En effet, établir sa <strong className="font-normal">stratégie SEO</strong>, c’est également <strong className="font-normal">cibler des expressions de longue traîne</strong> qui, sur la durée, pourront <strong className="font-normal">générer du trafic vers votre site web</strong> et développer son activité.<br/>
                            <br/>
                            En tant que principal vecteur d’<strong className="font-normal">acquisition de trafic</strong>, le <strong className="font-normal">référencement naturel</strong> doit être considéré avant même la <strong className="font-normal">création de votre site internet</strong> avec pour objectif de mettre en place une stratégie compatible avec vos besoins et votre activité. La <strong className="font-normal">création d’une arborescence SEO Friendly</strong> est l’une des premières étapes de votre stratégie. Au contraire, un manque d’anticipation pourrait causer des troubles ainsi que de nombreux retours en arrière pour la <strong className="font-normal">visibilité de votre site internet</strong> sur le long terme.<br/>
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
                            <h3 className="font-bold">Les notions liées à l'arborescence SEO :</h3>
                            <br/>
                            <hr className="hrblog"></hr>
                            <br/>
                            <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/"><li>Référencement local</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/"><li>Backlinks</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/"><li>Techniques de référencement</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/"><li>Optimisation interne</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/donnees-structurees/"><li>Données structurées</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/serp/"><li>SERP</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/e-reputation/"><li>E-Réputation</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/landing-page/"><li>Landing Page</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/mots-cles/"><li>Mots-clés</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/"><li>Longue Traîne</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/courte-traine/"><li>Courte Traîne</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/rapport-positionnement/"><li>Rapport de positionnement</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/"><li>Critères de qualité</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/sur-optimisation/"><li>Sur-Optimisation</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/erreur-404/"><li>Erreurs 404</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/audit-seo/"><li>Audit SEO</li></Link>
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




