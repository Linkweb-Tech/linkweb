import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class nomdedomaine extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Nom de domaine : Définition - Création site internet Toulouse - Linkweb"
                    description="Choisir le futur nom de domaine de son site internet fait appel à plusieurs choix qui seront déterminants pour votre site."
                    url="https://linkweb.fr/creation-site-internet-toulouse/nom-de-domaine/"
                    nom="Nom de domaine"
                    slug="creation-site-internet-toulouse/nom-de-domaine/"
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
                            Nom de domaine
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce qu'un nom de domaine ?</h2>
                        <br />
                        <p>
                            Le <strong>nom de domaine</strong> désigne les coordonnées d’un <strong className="font-normal">site web</strong>. Le nom de domaine correspond à l’adresse sur laquelle votre <strong className="font-normal">site internet</strong> sera consultable. À l’image d’une adresse postale par exemple, le nom de domaine d’un site internet correspond à son <strong className="font-normal">adresse internet</strong>. Chaque nom de domaine est unique et ne vous appartient que pour une durée donnée. Pour <strong className="font-normal">enregistrer un nom de domaine</strong>, il faudra avant tout veiller à ce qu’il s’agisse d’un <strong className="font-normal">nom de domaine disponible</strong>.<br />
                            <br />
                            <b>Un nom de domaine est composé de :</b><br />
                            <br />
                            <ul className="px-12">
                                <li className="list-disc">Un <strong>préfixe (HTTP(S))</strong> qui, s’il possède un <strong className="font-normal">certificat SSL</strong>, sera considéré comme sécurisé,</li><br />
                                <li className="list-disc">www ou <strong>sous-domaine</strong> : le sigle de World Wide Web peut-être présent dans un nom de domaine, mais il faut savoir qu’il est facultatif. En termes de technique, le www est considéré comme un sous-domaine.</li><br />
                                <li className="list-disc">Une <strong>racine</strong> : qui correspond à votre marque ou au <strong className="font-normal">nom de l’entreprise</strong>, ou bien au nom choisi. Toutes les URLs de votre site internet dépendront de cette racine.</li><br />
                                <li className="list-disc">Une <strong>extension</strong> : il existe des <strong className="font-normal">extensions génériques</strong> en fonction du pays dans lequel est hébergé le site (.fr en France, .es en Espagne ou .pt au Portugal par exemple).</li><br />
                            </ul>
                            <br />
                                De plus, chaque nom de domaine est configuré pour obtenir une <strong className="font-normal">adresse IP (Internet Protocol)</strong> qui lui est propre. Cette liaison entre le nom de domaine et l’adresse IP est rendue possible grâce aux <strong className="font-normal">serveurs DNS (Domain Name System)</strong>. Afin de <strong className="font-normal">choisir votre nom de domaine</strong> et de l’enregistrer, il est nécessaire de faire appel à un <strong className="font-normal">bureau d’enregistrement</strong> habilité par l’<strong className="font-normal">AFNIC</strong>. Pour <strong className="font-normal">acheter un nom de domaine</strong>, il est nécessaire d’en <strong className="font-normal">vérifier la disponibilité</strong>, mais également de faire en sorte de ne pas <strong className="font-normal">réserver un nom de domaine</strong> qui correspondrait déjà à une <strong className="font-normal">marque déposée</strong> auprès d’un organisme compétent. Il faudra veiller à cela durant la <strong className="font-normal">recherche de nom de domaine</strong>.<br />
                            <br />
                                Pour <strong className="font-normal">créer un site web</strong>, il faut savoir que le nom de domaine peut également être déterminant en termes de <strong className="font-normal">référencement naturel</strong>. C’est pourquoi au cours de nos projets de <strong><Link className="text-bleu hover:text-black font-bold">création de site internet à Toulouse</Link></strong>, nous vous accompagnons pour choisir une <strong className="font-normal">solution d’hébergement</strong>, mais aussi pour <strong className="font-normal">choisir un nom de domaine</strong> qui vous correspond et sur lequel vous serez facilement accessibles pour vos utilisateurs. Plusieurs choix doivent être réalisés au moment d’<strong className="font-normal">enregistrer un nom de domaine</strong> tels que l’utilisation de <strong className="font-normal">tirets</strong> comme séparateurs ou non, le choix du <strong className="font-normal">nom de l’entreprise</strong> ou d’un mot-clé dans la racine ou encore le choix de l’extension.<br />
                            <br />
                                Se poser les bonnes questions avant d'<strong className="font-normal">enregistrer un nom de domaine</strong> sera d’autant plus important si vous souhaitez créer un site multilingue. En effet, la question des <strong className="font-normal">noms de domaines</strong> va se poser au moment du choix de la stratégie à adopter et sera décisive en vue de mettre en place votre site internet multilingue.<br />
                            <br />
                                Enfin, il faut savoir qu’il est possible de changer de nom de domaine. Toutefois, il sera nécessaire de mettre en place une <strong className="font-normal">redirection</strong> pour faire <strong className="font-normal">pointer</strong> l’ancien nom de domaine vers votre <strong className="font-normal">nouveau nom de domaine</strong>. En termes de référencement, il est conseillé de limiter les redirections (dans la mesure du possible), au risque de perdre l’autorité de domaine acquise sur le domaine d’origine.<br />
                        </p>
                        <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/"><img
                            src={banniere}
                            alt="Création site internet Toulouse"
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
                        <h3 className="font-bold">Les notions liées au nom de domaine :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/"><li>UI Design</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/"><li>Framework</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/"><li>Front-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/back-end/"><li>Back-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/"><li>HTML/CSS</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/"><li>Maquette de site web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/"><li>Refonte site internet</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/"><li>Développement Web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webmarketing/"><li>Webmarketing</li></Link>
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
query lastsThreePostsnomdedomaine {
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
export default nomdedomaine;




