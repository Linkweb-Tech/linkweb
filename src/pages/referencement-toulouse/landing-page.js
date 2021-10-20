import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";



class landingPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Landing Page : Définition - Référencement Toulouse - Linkweb"
                    description="Une page de destination est une page sur laquelle des utilisateurs vont atterrir après avoir cliqué sur une publicité."
                    url="https://linkweb.fr/referencement-toulouse/landing-page/"
                    nom="Landing Page"
                    slug="referencement-toulouse/landing-page/"
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
                        <span className="text-center text-xl font-bold text-white">Définition</span>
                    </div>
                    <div>
                        <h1 data-aos="fade-up" className="century text-5xl sm:text-6xl text-bleu text-center text-white mt-4 lg:mt-6">
                            Landing Page : Définition
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Landing Page : définition</h2>
                        <br />
                        <p>
                                La landing page est une page d'atterrissage pensée pour <strong className="font-normal">attirer les visiteurs et les convaincre de passer à l'action</strong>. La landing page peut être utilisée comme un outil marketing ou comme un moyen d’acquisition de trafic. On peut également l'appeler « page de destination ». Cet élément fait partie intégrante de la <strong className="font-normal">stratégie de marketing digital</strong>, elle est un des piliers les plus efficaces pour atteindre la cible qualifiée.<br/>
                            <br/>
                                En d'autres termes, la <strong>landing page</strong>, ou <strong className="font-normal">page d’atterrissage</strong>, est une <strong className="font-normal">page web</strong> sur laquelle vont directement atterrir des utilisateurs après <strong className="font-normal">avoir cliqué</strong> sur un lien sponsorisé, par exemple. En ce sens, ce type de page répond à une cible très particulière ainsi qu’à un objectif donné sur un <strong className="font-normal">site web</strong>. La <strong className="font-normal">page d’atterrissage</strong> n’est pas une page de présentation d’un produit ou service. C’est une page qui va être construite pour pousser l’utilisateur à <strong className="font-normal">convertir</strong>. Dans la mise en oeuvre du <strong><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">travail de référencement à Toulouse</Link></strong>, nous réalisons des <strong className="font-normal">landing pages</strong> pour votre <strong className="font-normal">campagne Ads</strong>.<br />
                            <br />
                            </p>
                            <br/>
                            <h2 className="text-3xl text-bleu font-bold">Générer des clics et collecter des emails grâce à une landing page taillée sur-mesure</h2>
                            <br/>
                        <p>
                            Ainsi, la création de ce type de page va être nécessaire lors de la mise en place d’une <strong className="font-normal">campagne Adwords</strong>. En effet, les utilisateurs ayant cliqué sur une annonce souhaitent généralement obtenir une <strong className="font-normal">réponse rapide à leur requête</strong>. Ceci va être vrai pour les demandes à caractère urgent et qui dépendent, par exemple, d’un problème de plomberie, d’une coupure de courant ou de tout autre type de désagrément. De plus, il faut rappeler que mettre en place votre stratégie liée au référencement payant Google AdWords est idéale pour développer votre visibilité et générer des clics. Ce tunnel de conversion réalisé en complément du référencement naturel est bénéfique pour votre site internet et doit pousser les utilisateurs à l'action.<br />
                            <br />
                                Toutefois, cette pratique <strong className="font-normal">marketing</strong> s’étend à de très nombreux domaines puis qu’elle va également être utile pour <strong className="font-normal">récolter des informations de contact</strong> et obtenir de nouveaux <strong className="font-normal">prospects</strong>, notamment dans le cadre d’une <strong className="font-normal">stratégie d’emailing</strong> (<strong className="font-normal">guide à télécharger</strong>, inscription à une <strong className="font-normal">newsletter</strong>, essai gratuit d’un logiciel, etc.). Vos pages web ont tout intérêt à encourager les nouveaux utilisateurs à suivre votre parcours d'achat dédié grâce à une bonne <strong className="font-normal">stratégie digitale</strong> à laquelle s'intègrent les pages d'atterrissage. N'hésitez pas à proposer un bouton d'appel à action sur les pages de votre site pour transformer vos utilisateurs en <strong className="font-normal">nouveaux clients</strong>. Multipliez les possibilités de conversions grâce à votre campagne d'acquisition client et devenez influant sur de nombreux <strong className="font-normal">canaux digitaux</strong>.<br />
                            <br />
                                Pour ce faire, le contenu d’une <strong className="font-normal">page de destination</strong> va être travaillé pour <strong className="font-normal">favoriser un taux de conversion élevé</strong>. En effet, il est nécessaire de porter une attention toute particulière à certains détails lorsque l’on crée des <strong className="font-normal">pages de destination</strong>. Chaque élément présent doit être pertinent et ne pas alourdir inutilement la page. En ce sens, tous les éléments présents sur une page de destination doivent lui apporter une plus-value avec pour seul objectif de <strong className="font-normal">favoriser les conversions</strong>.<br />
                            <br />
                        </p>
                        <h2 className="text-xl font-bold text-bleu">Qu’est-ce qui compose une landing page ?</h2>
                        <br />
                        <p>
                                Pour construire une <strong className="font-normal">landing page performante</strong>, la première étape consiste à <strong className="font-normal">cibler les attentes des potentiels clients</strong> pour définir une <strong className="font-normal">proposition de valeur</strong> pertinente et attractive. En ce qui concerne l’aspect visuel, la prise en compte d’éléments tels que le caractère <strong className="font-normal">responsive</strong> design, la <strong className="font-normal">ligne de flottaison de la page</strong> ou encore le choix des <strong className="font-normal">visuels</strong> vont être décisifs.<br />
                            <br />
                                L’<strong className="font-normal">expérience utilisateur</strong> des <strong className="font-normal">landing pages</strong> doit être soignée pour ne pas perdre d’utilisateurs en cours de route et maximiser le nombre de <strong className="font-normal">clics</strong>. En termes de contenu, ce type de page met en avant une promesse qui correspond aux <strong className="font-normal">attentes de ses cibles</strong> (c’est en quoi la proposition de valeur est importante). Cette promesse, qui apparaît donc comme une solution, peut prendre plusieurs formes : <strong className="font-normal">newsletter</strong>, <strong className="font-normal">ebook</strong>, <strong className="font-normal">livre blanc</strong>, etc. Si l'internaute clique sur le bouton d'appel à action, vous avez toutes vos chances de <strong className="font-normal">convertir et de fidéliser votre clientèle</strong> cible grâce à des contenus pertinents. Les livres blancs sont des éléments qui sollicitent le processus de conversion par exemple, il ne faut pas hésiter à mettre en place une <strong className="font-normal">stratégie de inbound marketing</strong> pour réussir sa stratégie. Les pages optimisées de vos sites vous permettent d'<strong className="font-normal">atteindre votre cible de clientèle</strong>, misez sur le contenu digital pour accéder à sa fidélisation.<br />
                            <br />
                                Par exemple, un <strong className="font-normal">site web</strong> dont la cible est composée de photographes pourra proposer un guide intitulé « comment réussir ses photos en basse lumière ? ». Ici, le problème de l’utilisateur ciblé va être la difficulté à réaliser des photographies en basse lumière. La promesse est incarnée par le guide qui présente des solutions qui vont, à coup sûr, être bénéfiques pour l’utilisateur et l’inciter à télécharger ce guide.<br />
                            <br />
                                En échange du téléchargement gratuit, l’utilisateur fournit des données personnelles en fonction du ou des <strong className="font-normal">formulaires</strong> présents. Ces données permettront de connaître chaque <strong className="font-normal">prospect</strong> et ses attentes, en vue de produire un contenu personnalisé. Dans le cas des <strong className="font-normal">pages d’atterrissage</strong> présentes sur des sites web de prestataires de services d’urgence, la mise en avant de <strong className="font-normal">boutons d’appels à action</strong> va s’avérer nécessaire.<br />
                            <br />
                                Ici, la promesse ne correspond pas au téléchargement de quelconque document, mais bien à la prestation d’un service. Les informations principales telles que les coordonnées de l’entreprise ou les services proposés seront amplement suffisantes. Un <strong className="font-normal">bouton d’appel</strong> ainsi qu’un formulaire pourront également être utiles pour l’utilisateur souhaitant effectuer une demande de devis rapidement.<br />
                            <br />
                            <h2 className="text-xl font-bold text-bleu">Multipliez vos actions marketing pour générer un retour sur investissement</h2>
                            <br />
                                En somme, utiliser une stratégie destinée à améliorer le <strong className="font-normal">taux de conversion</strong> et qui incite à l'action booste l'activité de votre entreprise. La création de <strong className="font-normal">pages d’atterrissage</strong> s’inscrit dans une <strong className="font-normal">stratégie marketing</strong> destinée à la <strong className="font-normal">récolte de données</strong> et la construction d’une base de données de <strong className="font-normal">clients potentiels</strong>. Générer ce répertoire permet d'optimiser vos actions visant à la conversion et à la fidélisation. Ceci est une technique de <strong className="font-normal">marketing digital</strong> qui va être utile pour tout ce qui relève de l’e-mailing.<br />
                            <br />
                                Toutefois, une <strong className="font-normal">landing page efficace</strong> répond aussi aux besoins de la mise en place d’une <strong className="font-normal">campagne sponsorisée</strong> ayant pour objectif de <strong className="font-normal">favoriser la conversion</strong> et donc vendre des produits ou services.  Augmenter votre <strong className="font-normal">taux de conversion</strong>, c'est augmenter vos ventes et donc votre chiffre d'affaires pour développer votre entreprise. Créer des pages dédiées au sein de votre <strong className="font-normal">campagne marketing</strong> est enrichissant et efficace pour multiplier vos performances.<br />
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
                        <h3 className="font-bold">Les notions liées à la Landing Page :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/"><li>Optimisation interne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/"><li>Longue Traîne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/rapport-positionnement/"><li>Rapport de positionnement</li></Link>
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
query lastsThreePostslandingPage {
    allWpPost(limit: 3) {
      edges {
        node {
          id
          title
          slug
          modified(locale: "fr", formatString: "DD/MM/YYYY")
          date(locale: "fr", formatString: "dddd DD MMMM YYYY")
          link
          featuredImage {
            node {
                sourceUrl
            }
          }
        }
      }
    }
  }
  
    
`
export default landingPage;




