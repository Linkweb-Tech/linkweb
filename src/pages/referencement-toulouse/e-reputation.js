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


class ereputation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="E-Réputation : Définition - Référencement Toulouse - Linkweb"
                    description="L'E-réputation est une notion importante de l'identité numérique d'une entreprise et qui peut également peser en termes de référencement naturel."
                    url="https://linkweb.fr/referencement-toulouse/e-reputation/"
                    nom="E-Réputation"
                    slug="referencement-toulouse/e-reputation/"
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
                                E-Réputation
                            </h1>
                        </div>
                    </section>
                    <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que l'E-Réputation ?</h2>
                            <br/>
                            <p>
                                L’<strong>e-réputation</strong> désigne la <strong className="font-normal">réputation en ligne</strong> d’une personne ou d’une entreprise. Cette dernière se base sur l’ensemble des signaux présents <strong className="font-normal">sur le Web</strong> et qui vont impacter, de façon positive ou négative, la <strong className="font-normal">réputation de l’entreprise</strong>. De part notre travail de <strong><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">référencement à Toulouse</Link></strong>, nous vous conseillons pour permettre de <strong className="font-normal">préserver la réputation</strong> de votre entreprise.<br/>
                                <br/>
                                En effet, la <strong className="font-normal">réputation numérique</strong> d’une entreprise est marquée par des signaux présents sur les <strong>réseaux sociaux</strong>, sur les <strong>moteurs de recherche</strong> (notamment les <strong className="font-normal">avis négatifs</strong> ou positifs) ainsi que sur <strong>l’ensemble des outils présents en ligne</strong>. <strong className="font-normal">Travailler son image sur Internet</strong> fait également partie de la création de l’<strong className="font-normal">identité numérique</strong> d’une entreprise. C’est aussi pourquoi, <strong className="font-normal">gérer sa réputation sur le web</strong> va permettre de ne pas laisser se <strong className="font-normal">ternir votre image</strong>.<br/>
                                <br/>
                                La question de l’e-réputation est essentielle dans la vie d’une entreprise. En effet, la <strong className="font-normal">réputation d’une entreprise sur le web</strong> est l’un des critères qui intervient dans le prise de décision d'un utilisateur par rapport à l’achat d’un produit. C’est pourquoi, il est important de mettre en place des techniques qui vont vous prémunir d’un <strong className="font-normal">bad buzz</strong> et surtout d’avoir une vision précise sur le regard porté sur votre entreprise :<br/>
                                <br/>
                                <ul className="px-12">
                                <li className="list-disc"><strong>Effectuer une veille sur son image de marque :</strong> disposer d’<strong className="font-normal">outils de veille</strong> permet de se tenir informé lorsqu’un commentaire est publié à propos de votre marque. Mettre en place un système d’<strong className="font-normal">alertes</strong> lors de la publication de <strong className="font-normal">commentaires</strong> ou articles à propos de votre nom vous permettra de garder un œil sur <strong className="font-normal">votre image</strong>.</li><br/>

                                <li className="list-disc"><strong>Répondre aux commentaires négatifs comme positifs :</strong> lorsqu’un <strong className="font-normal">avis négatif</strong> est publié à votre encontre, il est indispensable de ne pas le laisser se <strong className="font-normal">dégrader votre réputation sur Internet</strong>. Il est fortement conseillé de répondre aux avis pour exposer votre version des faits. Cela ne supprimera pas l’avis, mais les utilisateurs n’auront pas accès qu’à une seule version des faits. De plus, certains commentaires peuvent être à caractères <strong className="font-normal">diffamatoires</strong>. Développer un argumentaire visant à les réfuter est fortement conseillé.</li><br/>

                                <li className="list-disc">Il est possible de prendre les devants en <strong>s’inscrivant sur des sites d’avis</strong> qui vont permettre de <strong className="font-normal">travailler la réputation de votre entreprise</strong>. En incitant vos clients les plus satisfaits à déposer des avis, vous pourrez <strong className="font-normal">améliorer la réputation de votre entreprise</strong> et vous prémunir d’un impact trop important à la publication d’un <strong className="font-normal">avis négatif</strong>. <strong className="font-normal">Bâtir une réputation</strong> positive est indispensable dans le milieu du e-commerce. Enfin, l’e-réputation à travers les avis présents sur la fiche Google My Business (en première page de <strong className="font-normal">Google</strong>) ou sur des plateformes comme Trustpilot, fait partie des critères pris en compte en <strong className="font-normal">référencement naturel</strong>, dans les lignes directrices de <strong className="font-normal">Google</strong> sur la qualité des sites et des contenus qu'ils présentent.</li><br/>
                                </ul>
                                <br/>
                                Le <strong className="font-normal">community management</strong> est l’un des domaines particulièrement confronté à ce type de problématique. En effet, travailler au contact du public nécessite de mettre en place une modération vis-à-vis des contenus qui pourraient être publiés à votre encontre.<br/>
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
                            <h3 className="font-bold">Les notions liées à l'E-Réputation :</h3>
                            <br/>
                            <hr className="hrblog"></hr>
                            <br/>
                            <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/"><li>Référencement local</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/audit-seo/"><li>Audit SEO</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/"><li>Techniques de référencement</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/"><li>Optimisation interne</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/"><li>Critères de qualité</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/serp/"><li>SERP</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/donnees-structurées/"><li>Données Structurées</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/landing-page/"><li>Landing Page</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/mots-cles/"><li>Mots-clés</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/"><li>Longue Traîne</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/"><li>Backlinks</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/rapport-positionnement/"><li>Rapport de positionnement</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/"><li>courte traîne</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/sur-optimisation/"><li>Sur-Optimisation</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/erreur-404/"><li>Erreurs 404</li></Link>
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
query lastsThreePostsereputation {
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
export default ereputation;




