import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/creation-site-internet-ban.png";



class nomdedomaine extends React.Component {

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

                    <section className="w-full mt-40 text-justify font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <h1 data-aos="fade-up" className="century text-4xl sm:text-5xl text-center text-bleu mt-4 lg:mt-6">
                            Nom de domaine
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                Le <strong>nom de domaine</strong> désigne les coordonnées d’un <strong className="font-normal">site web</strong>. Le nom de domaine correspond à l’adresse sur laquelle votre <strong className="font-normal">site internet</strong> sera consultable. À l’image d’une adresse postale par exemple, le nom de domaine d’un site internet correspond à son <strong className="font-normal">adresse internet</strong>. Chaque nom de domaine est unique et ne vous appartient que pour une durée donnée. Pour <strong className="font-normal">enregistrer un nom de domaine</strong>, il faudra avant tout veiller à ce qu’il s’agisse d’un <strong className="font-normal">nom de domaine disponible</strong>.<br/>
                                <br/>
                                <b>Un nom de domaine est composé de :</b><br/>
                                <br/>
                                <ul className="px-12">
                                    <li className="list-disc">Un <strong>préfixe (HTTP(S))</strong> qui, s’il possède un <strong className="font-normal">certificat SSL</strong>, sera considéré comme sécurisé,</li><br/>
                                    <li className="list-disc">www ou <strong>sous-domaine</strong> : le sigle de World Wide Web peut-être présent dans un nom de domaine, mais il faut savoir qu’il est facultatif. En termes de technique, le www est considéré comme un sous-domaine.</li><br/>
                                    <li className="list-disc">Une <strong>racine</strong> : qui correspond à votre marque ou au <strong className="font-normal">nom de l’entreprise</strong>, ou bien au nom choisi. Toutes les URLs de votre site internet dépendront de cette racine.</li><br/>
                                    <li className="list-disc">Une <strong>extension</strong> : il existe des <strong className="font-normal">extensions génériques</strong> en fonction du pays dans lequel est hébergé le site (.fr en France, .es en Espagne ou .pt au Portugal par exemple).</li><br/>
                                </ul>
                                <br/>
                                De plus, chaque nom de domaine est configuré pour obtenir une <strong className="font-normal">adresse IP (Internet Protocol)</strong> qui lui est propre. Cette liaison entre le nom de domaine et l’adresse IP est rendue possible grâce aux <strong className="font-normal">serveurs DNS (Domain Name System)</strong>. Afin de <strong className="font-normal">choisir votre nom de domaine</strong> et de l’enregistrer, il est nécessaire de faire appel à un <strong className="font-normal">bureau d’enregistrement</strong> habilité par l’<strong className="font-normal">AFNIC</strong>. Pour <strong className="font-normal">acheter un nom de domaine</strong>, il est nécessaire d’en <strong className="font-normal">vérifier la disponibilité</strong>, mais également de faire en sorte de ne pas <strong className="font-normal">réserver un nom de domaine</strong> qui correspondrait déjà à une <strong className="font-normal">marque déposée</strong> auprès d’un organisme compétent. Il faudra veiller à cela durant la <strong className="font-normal">recherche de nom de domaine</strong>.<br/>
                                <br/>
                                Pour <strong className="font-normal">créer un site web</strong>, il faut savoir que le nom de domaine peut également être déterminant en termes de <strong className="font-normal">référencement naturel</strong>. C’est pourquoi au cours de nos projets de <strong><Link className="text-bleu hover:text-black font-bold">création de site internet à Toulouse</Link></strong>, nous vous accompagnons pour choisir une <strong className="font-normal">solution d’hébergement</strong>, mais aussi pour <strong className="font-normal">choisir un nom de domaine</strong> qui vous correspond et sur lequel vous serez facilement accessibles pour vos utilisateurs. Plusieurs choix doivent être réalisés au moment d’<strong className="font-normal">enregistrer un nom de domaine</strong> tels que l’utilisation de <strong className="font-normal">tirets</strong> comme séparateurs ou non, le choix du <strong className="font-normal">nom de l’entreprise</strong> ou d’un mot-clé dans la racine ou encore le choix de l’extension.<br/>
                                <br/>
                                Se poser les bonnes questions avant d'<strong className="font-normal">enregistrer un nom de domaine</strong> sera d’autant plus important si vous souhaitez créer un site multilingue. En effet, la question des <strong className="font-normal">noms de domaines</strong> va se poser au moment du choix de la stratégie à adopter et sera décisive en vue de mettre en place votre site internet multilingue.<br/>
                                <br/>
                                Enfin, il faut savoir qu’il est possible de changer de nom de domaine. Toutefois, il sera nécessaire de mettre en place une <strong className="font-normal">redirection</strong> pour faire <strong className="font-normal">pointer</strong> l’ancien nom de domaine vers votre <strong className="font-normal">nouveau nom de domaine</strong>. En termes de référencement, il est conseillé de limiter les redirections (dans la mesure du possible), au risque de perdre l’autorité de domaine acquise sur le domaine d’origine.<br/>
                            </p>
                        <img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées au nom de domaine :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/">UI Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/">UX Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/">Développement Web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/">Front-End</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/">Responsive Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/mobile-first/">Mobile First</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/">Webdesign</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/">Refonte site internet</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/">Maquette de site web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/">CMS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/">HTML/CSS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/">Framework</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/moteurs-recherche/">Moteurs de recherche</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/arborescence-site-internet/">Arborescence site internet</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/strategie-digitale/">Stratégie Digitale</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webmarketing/">Webmarketing</Link></li>
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
export default nomdedomaine;




