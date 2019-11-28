import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/creation-site-internet-ban.png";



class cms extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Content Management System (CMS) : Définition - Création site internet Toulouse - Linkweb"
                    description="Un CMS ou système de gestion de contenu est une solution de création de site internet qui répond aux besoins de nombreux projets web."
                    url="https://linkweb.fr/creation-site-internet-toulouse/cms/"
                    nom="Content Management System"
                    slug="creation-site-internet-toulouse/cms/"
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
                        Système de Gestion de Contenu (CMS)
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                Un <strong>CMS</strong>, ou <strong>système de gestion de contenu</strong>, est une plateforme qui centralise une multitude d’outils permettant à la fois le <strong className="font-normal">développement d’un site web</strong>, mais aussi sa mise à jour. C’est notamment à travers l’utilisation d’un <strong className="font-normal">back-office (interface d’administration)</strong> que la <strong className="font-normal">gestion d’un site</strong> via l’utilisation d’un CMS est facilitée.<br/> 
                            <br/>
                                En effet, <strong className="font-normal">créer un site web</strong> par l’intermédiaire d’un <strong className="font-normal">gestionnaire de contenu</strong> permet d’obtenir de nombreuses fonctionnalités (via des <strong className="font-normal">plugins</strong>) pour une mise en œuvre facilité. Par exemple, le gestionnaire offre la possibilité d’utiliser un <strong>éditeur WYSIWYG</strong> (What You See Is What You Get). Autrement dit, il s’agit d’une <strong className="font-normal">interface utilisateur</strong> qui permet de visualiser directement les modifications apportées à un contenu dans un éditeur dédié à la <strong className="font-normal">création de contenu</strong>. En ce sens, l’utilisation d’un CMS pour <strong className="font-normal">créer un site internet</strong> demande moins de <strong className="font-normal">compétences techniques</strong> que la conception en <strong className="font-normal">HTML/CSS</strong> par exemple. Par ailleurs, cela donne la possibilité de gérer le <strong className="font-normal">contenu dynamique</strong> de façon optimale et simplifiée.<br/>
                            <br/>
                                Parmi les <strong className="font-normal">systèmes de gestion de contenu web</strong>, nous pouvons par exemple citer parmi les plus connus <strong>Wordpress</strong>, <strong>Drupal</strong>, <strong>Joomla</strong>, ou encore <strong>Prestashop</strong>. <strong className="font-normal">Administrer</strong> votre site internet à partir d’un CMS permet d’obtenir une meilleure vision d’ensemble des <strong className="font-normal">interfaces</strong>. Par ailleurs, cela permet une meilleure gestion de son <strong className="font-normal">référencement naturel</strong> on-site.<br/> 
                            <br/>
                                En termes de <strong className="font-normal">développement web</strong>, le <strong className="font-normal">système de gestion de contenus</strong> fait partie des outils de gestion et de création que nous utilisons dans le cadre de <strong><Link className="text-bleu hover:text-black font-bold" to="/creation-site-internet-toulouse/">notre création de site internet à Toulouse</Link></strong>. Cela se justifie vis-à-vis des avantages qu’il procure, mais aussi selon le profil du <strong className="font-normal">site internet</strong>. Chaque <strong className="font-normal">projet web</strong> répond à des besoins spécifiques et le CMS permet de répondre à certains besoins qui relèvent de la <strong className="font-normal">construction des pages web</strong>, de l’aspect <strong className="font-normal">responsive</strong>, ou encore de la gestion du <strong className="font-normal">PHP</strong>. Ceci est important selon la teneur du projet ainsi que ses objectifs.<br/>
                            <br/>
                                Utiliser un CMS est une possibilité, mais peut également ne pas correspondre aux besoins des propriétaires de site. Par exemple, un <strong className="font-normal">site statique</strong> en HTML permet de créer un outil qui donnera un meilleur contrôle sur les ressources du site. Ceci peut également être vrai pour ce qui est des <strong className="font-normal">optimisations SEO</strong>, même si l’utilisation d’un <strong className="font-normal">système CMS</strong> peut totalement suffire pour un site souhaitant obtenir des performances intéressantes.<br/>
                            </p>
                        <img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées au système de gestion de contenu :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/">UI Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/">UX Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/">Développement Web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/">Responsive Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/">Webdesign</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/">Refonte site internet</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/">Maquette de site web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/">HTML/CSS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/">Framework</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/nom-de-domaine/">Nom de domaine</Link></li>
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
query lastsThreePostscms {
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
export default cms;




