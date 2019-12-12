import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/creation-site-internet-ban.png";



class framework extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Framework : Définition - Création site internet Toulouse - Linkweb"
                    description="Travailler à l'aide de frameworks procure gain de temps et praticité en termes de développement web."
                    url="https://linkweb.fr/creation-site-internet-toulouse/framework/"
                    nom="Framework"
                    slug="creation-site-internet-toulouse/framework/"
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
                        Framework
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                Un <strong>framework</strong> est ce que l’on appelle une infrastructure logicielle qui va prêter assistance lors du <strong className="font-normal">développement d’applications web (Web Apps)</strong> et plus généralement du <strong className="font-normal">développement web</strong>. Dans d’autres termes, le framework web est une forme d’application contenant une bibliothèque (ou <strong className="font-normal">librairies</strong>) <strong className="font-normal">open source</strong> qui va proposer des ressources dans un <strong className="font-normal">langage de programmation</strong> donné pour standardiser et faciliter le travail du <strong className="font-normal">développeur</strong>.<br/>
                                    <br/>
                                Il faut savoir qu’il existe plusieurs types de <strong className="font-normal">frameworks</strong> qui vont être classés en fonction des langages qu’ils traitent. Il va être possible de trouver des <strong className="font-normal">frameworks CSS</strong>, des <strong className="font-normal">frameworks JavaScript</strong>, des <strong className="font-normal">frameworks PHP</strong>, mais ce n’est pas tout. D’autres frameworks, à l’image de <strong className="font-normal">Boostrap</strong> vont contenir à la fois des contenus <strong className="font-normal">HTML, CSS et Java Script</strong>. Parmi les exemples de frameworks, nous pouvons citer <strong>Bootstrap (framework CSS, l’un des plus célèbres)</strong>, <strong>Tailwind CSS (framework CSS)</strong>, <strong>Vue JS (framework JavaScript)</strong>, <strong>AngularJS (framwork JS)</strong>, <strong>Symfony (framework PHP)</strong>, ou encore <strong>Django (framework Python)</strong>.<br/>
                                    <br/>
                                Les frameworks s’apparentent à des <strong className="font-normal">plugins</strong> que l’on va venir greffer au <strong className="font-normal">site internet</strong> ou à l’<strong className="font-normal">application web</strong> pour les rendre utilisables. Ils possèdent généralement un <strong className="font-normal">support de documentation</strong> dans lequel sont indiqués les classes et autres éléments prédéfinis. Ceci est très utile dans le travail des <strong className="font-normal">développeurs front end</strong> en termes de <strong className="font-normal">web design</strong>. Non seulement cela permet de gagner du temps dans la <strong className="font-normal">conception du site</strong>, mais il est également possible de travailler son <strong className="font-normal">responsive design</strong> sans passer nécessairement par les « media queries » pour mettre en place des <strong className="font-normal">interfaces user</strong> friendly.<br/>
                                    <br/>
                                Tout cela est rendu possible grâce aux frameworks. Linkweb est en mesure de travailler avec certains frameworks pour la <strong><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/">création de site internet à Toulouse</Link></strong>.
                            </p>
                        <img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées au Framework :</b></p>
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
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/redaction-web/">Rédaction Web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/">Refonte site internet</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/">Maquette de site web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/">CMS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/">HTML/CSS</Link></li>
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
query lastsThreePostsframework {
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
export default framework;




