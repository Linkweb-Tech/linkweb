import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/creation-site-internet-ban.png";



class uxDesign extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="UX Design : Définition - Création site internet Toulouse - Linkweb"
                    description="L'UX Design est un concept central dans la conception d'un site internet. Découvrez à quoi se rattache cette notion issue du webdesign."
                    url="https://linkweb.fr/creation-site-internet-toulouse/ux-design/"
                    nom="UX Design"
                    slug="creation-site-internet-toulouse/ux-design/"
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
                            UX Design
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                            L’<strong>UX design (user experience)</strong> est une notion <strong className="font-normal">webmarketing</strong> qui est centrale dans notre <strong><Link className="text-bleu hover:text-black" to="/creation-site-internet-toulouse/">conception de la création de site internet à Toulouse</Link></strong>. En effet, l’UX design est une expression qui désigne l’<strong className="font-normal">expérience d’un utilisateur</strong> passée sur un site web et relève directement du domaine du <strong className="font-normal">web design</strong>. Ce concept se rapporte au fait de penser la conception d’un site internet en fonction de l’expérience qu’un utilisateur va en percevoir. En ce sens, le travail de l’expérience utilisateur d’un <strong className="font-normal">site internet</strong> prévoit la mise en place d’<strong className="font-normal">éléments graphiques</strong> (ou pas), en fonction de la plus-value qu’ils vont apporter pour l’utilisateur et sa navigation sur le <strong className="font-normal">site web</strong>.<br/>
                            <br/>
                            Ce travail est effectué par un <strong className="font-normal">développeur web</strong> et doit être anticipé dès la mise en place des premières <strong className="font-normal">maquettes graphiques</strong>. Le <strong>design d’interface (UI design)</strong> est bien entendu très important au sein même du travail de l’<strong className="font-normal">UX Design</strong> : que ce soit en termes d’ergonomie ou bien de design graphique, l’UI design va jouer un rôle important et favoriser la mise en place d’un <strong className="font-normal">projet web</strong> performant ou d’une <strong className="font-normal">application mobile centrée utilisateur</strong> grâce à un environnement visuel ergonomique, intuitif, fonctionnel.<br/>
                            <br/>
                            Outre la définition d’une <strong>interface ergonomique</strong> et d’une <strong>charte graphique</strong> attrayante, plusieurs éléments font de l’UX design une notion centrale dans la construction d’un site web pensé pour répondre <strong>aux besoins des utilisateurs</strong>. <strong className="font-normal">Créer un site internet responsive design</strong>, avec une <strong className="font-normal">architecture de l’information</strong> approfondie ainsi qu’une <strong className="font-normal">vitesse de chargement</strong> rapide va fortement favoriser l’UX et constitue une part de plus en plus importante dans le cadre du <strong>référencement naturel</strong>. <br/>
                            <br/>
                            Définir une solution efficace demande la mise en place de <strong className="font-normal">tests utilisateurs</strong> et de nombreux <strong className="font-normal">prototypes</strong> pour parvenir à un résultat concluant. En ce sens, l’anticipation est reine dans le travail du <strong className="font-normal">web designer</strong>, <strong className="font-normal">concepteur</strong> ou <strong className="font-normal">UX designer</strong>, avec pour unique objectif de mettre en place un outil digital user friendly à travers des <strong>interfaces web adaptées aux attentes des utilisateurs</strong>.<br/>
                        </p>
                        <img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées à l'UX design :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/">UI Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/">Responsive Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/">Webdesign</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/">Maquette de site web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/">CMS</Link></li>
                                <li>HTML/CSS</li>
                                <li>Framework</li>
                                <li>Stratégie Digitale</li>
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
query lastsThreePostsux {
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
export default uxDesign;




