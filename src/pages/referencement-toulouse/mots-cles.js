import React, { Component } from 'react';
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";



class MotsCles extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Mots-clés : Définition - Référencement Toulouse - Linkweb"
                    description="La définition des mots-clés est une étape décisive dans la création d'une stratégie de référencement naturel ou payant."
                    url="https://linkweb.fr/referencement-toulouse/mots-cles/"
                    nom="Mots Clés"
                    slug="referencement-toulouse/mots-cles/"
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
                        <h2 className="text-center text-xl font-bold text-white">Définition</h2>
                    </div>
                    <div>
                        <h1 data-aos="fade-up" className="century text-5xl sm:text-6xl text-bleu text-center text-white mt-4 lg:mt-6">
                            Mots-clés
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que les mots-clés ?</h2>
                        <br />
                        <p>
                            La notion de <strong>mots-clés</strong> désigne les <strong className="font-normal">termes de recherche</strong> utilisés lors d’une requête effectuée sur des <strong className="font-normal">moteurs de recherche</strong> tels que <strong className="font-normal">Google, Bing ou Yahoo!</strong>, par exemple. Ils sont à la base d’une <strong className="font-normal">stratégie de référencement</strong> efficace. En effet, le <strong className="font-normal">choix des mots-clés</strong> sur lesquels se positionner va être décisif pour mener la stratégie de <strong className="font-normal">référencement naturel de votre site internet</strong>.<br />
                            <br />
                                Ce choix doit être dicté par plusieurs éléments qui vont vous permettre de <strong className="font-normal">trouver les mots-clés</strong> qui vous rendront visible et qui généreront du <strong className="font-normal">trafic qualifié sur votre site web</strong>. <strong className="font-normal">Choisir des mots-clés pertinents</strong> et performants fait partie de notre mise en place stratégique de <strong><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">référencement à Toulouse</Link></strong>.<br />
                            <br />
                            <h2 className="text-xl font-bold text-bleu">Choix des mots-clés : les critères</h2>
                            <br />
                                Afin de mettre en place la <strong className="font-normal">liste de mots-clés</strong> pour de la visibilité à son site internet, il faudra également être en mesure de les hiérarchiser : <strong className="font-normal">définir un mot-clé principal</strong> ainsi que des mots-clés secondaires par page est une bonne manière de démarrer.<br />
                            <br />
                                Pour trouver les <strong className="font-normal">bons mots-clés</strong> qui permettront de générer de la visibilité à son <strong className="font-normal">site web</strong> de façon efficace, il faut s’attacher à plusieurs éléments :<br />
                            <br />
                            <ul className="px-12 list-disc">
                                <li>Les <strong className="font-normal">mots-clés</strong> doivent être pertinents par rapport au site internet et aux objectifs de visibilité,</li>
                                <li>Le <strong className="font-normal">volume de recherche</strong>, qui correspond au <strong className="font-normal">nombre de recherches</strong> effectuées pour une <strong className="font-normal">expression clé</strong>, doit être suffisant pour que le <strong className="font-normal">mot-clé</strong> présente un intérêt,</li>
                                <li>Le <strong className="font-normal">nombre de résultats</strong> donnés pour une requête est un bon indicateur afin de mesurer le <strong className="font-normal">niveau de concurrence du mot-clé</strong> (nombre de sites <strong className="font-normal">concurrents</strong> en compétition pour atteindre la <strong className="font-normal">première page</strong>).</li><br />
                            </ul>
                            <br />
                                La <strong className="font-normal">recherche de mots-clés</strong> est une phase extrêmement importante. Les critères cités doivent vous permettre d’obtenir des informations sur la <strong className="font-normal">difficulté du mot-clé</strong> et sur l’intérêt qu’il présente pour votre site web.<br />
                            <br />
                                Il faut savoir qu’il existe des outils qui permettent d’obtenir des informations telles que le <strong className="font-normal">nombre de recherches mensuelles</strong>, des <strong className="font-normal">expressions clés</strong> associées, mais également le <strong className="font-normal">nombre de concurrents</strong>. Parmi eux, il est possible de citer <strong className="font-normal">Semrush</strong>, <strong className="font-normal">Google Trends</strong> ou encore l’<strong className="font-normal">outil de planification de Google Adwords</strong>. Ces outils sont là afin de dénicher des <strong className="font-normal">mots-clés pertinents aux volumes de recherche intéressants</strong>.<br />
                            <br />
                            <h2 className="text-xl font-bold text-bleu">Courte traîne et longue traîne</h2>
                            <br />
                                Les mots-clés à travailler dans une <strong className="font-normal">stratégie de référencement naturel</strong> peuvent être de plusieurs types. Il existe ce que l’on appelle des <strong className="font-normal">mots-clés de courte et longue traînes</strong>. Utiliser des <strong className="font-normal">mots-clés de longue traîne</strong> est tout particulièrement pertinent lorsqu’il s’agit d’<strong className="font-normal">obtenir de la visibilité</strong> rapidement sur des requêtes très ciblées. Elles sont, en général, composées de plusieurs mots au sein d’une expression qui va faire référence à un type de produit bien précis, par exemple.<br />
                            <br />
                                Au contraire, une requête de courte traîne (expression clé plus globale que la requête de longue traîne) possède un <strong className="font-normal">volume de recherche</strong> particulièrement intéressant, mais est plus concurrentielle. Le trafic généré est moins ciblé, mais permet une visibilité accrue. <strong className="font-normal">Cibler</strong> des expressions permettant de combiner les deux stratégies peut être une bonne base pour lancer sa stratégie.<br />
                            <br />
                            <strong className="font-normal">Choisir ses mots-clés</strong> n’est pas l’étape la plus évidente de la <strong className="font-normal">stratégie de référencement</strong>, mais elle est sans doute l’une des plus décisives.<br />
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
                        <h3 className="font-bold">Les notions liées aux Mots-clés :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/"><li>Référencement local</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/audit-seo/"><li>Audit SEO</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/"><li>Techniques de référencement</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/"><li>Optimisation interne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/"><li>Critères de qualité</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/serp/"><li>SERP</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/donnees-structurees/"><li>Données Structurées</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/erreur-404/"><li>Erreurs 404</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/landing-page/"><li>Landing Page</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/"><li>Backlinks</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/rapport-positionnement/"><li>Rapport de positionnement</li></Link>
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
query lastsThreePostsMotsCles {
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
export default MotsCles;




