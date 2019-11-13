import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/creation-site-internet-ban.png";



class responsiveDesign extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Responsive Design : Définition - Création site internet Toulouse - Linkweb"
                    description="Le Responsive Design est une notion fondamentale dans la création de site internet. Il est indispensable que son site soit accessible sur tous les terminaux."
                    url="https://linkweb.fr/creation-site-internet-toulouse/responsive-design/"
                    nom="Responsive Design"
                    slug="creation-site-internet-toulouse/responsive-design/"
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
                        Responsive Design
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                            Le <strong>Responsive Design</strong> désigne la faculté pour un site internet à adapter et optimiser son affichage en fonction du support de navigation utilisé et plus particulièrement de la <strong className="font-normal">taille de l’écran</strong>. Cette notion est centrale dans notre <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/">méthodologie de création de site internet à Toulouse</Link>. En effet, de plus en plus d’utilisateurs naviguent sur le Web à partir d’<strong className="font-normal">appareils mobiles</strong>, y compris des <strong className="font-normal">smartphones et tablettes</strong>. Il est donc indispensable de disposer d’un <strong className="font-normal">site web adaptatif</strong> que ce soit sur <strong>desktop</strong>, <strong>mobile</strong>, <strong>tablette</strong> ou toute autre <strong>périphérique</strong> de lecture. Celui-ci doit être capable de s’adapter aux <strong className="font-normal">différentes tailles d’écran</strong>.<br/>
                            <br/>
                            En termes de technique, la mise en place d’un <strong className="font-normal">design responsive</strong> se traduit par la définition d’un design adapté en fonction de la <strong>taille de l’écran</strong>. Chaque terminal dispose d’un ratio d’affichage. Celui-ci s’exprime en fonction de la longueur et de la largeur de l’écran en pixels. Pour adapter l’affichage du site en fonction des différentes tailles d’écran, il est nécessaire de définir ce que l’on appelle des <strong>points de rupture</strong>. Ces derniers sont particulièrement utiles afin de délimiter les formats d’affichage. Ceci va permettre de définir un design précis pour chaque format d’écran. Le <strong className="font-normal">responsive design</strong> fait partie des critères qui permettent d’optimiser l’<strong>expérience utilisateur</strong> grâce à un travail de l’<strong className="font-normal">ergonomie</strong> du site destiné aussi bien aux <strong className="font-normal">mobinautes</strong>, qu’aux utilisateurs de l’<strong className="font-normal">ordinateur de bureau</strong> ainsi que tous les autres <strong className="font-normal">terminaux</strong>.<br/>
                            <br/>
                            <h2 className="text-xl font-bold text-bleu">Le "Mobile First" plutôt que le "Mobile Friendly"</h2>
                            <br/>
                            Par ailleurs, de nos jours, la notion de <strong>mobile friendly</strong> est dépassée par celle de <strong>mobile first</strong>. En effet, la <strong className="font-normal">conception de sites web</strong> est pensée directement pour une navigation sur une <strong className="font-normal">version mobile</strong>. Que ce soit le <strong className="font-normal">contenu du site</strong>, le <strong className="font-normal">temps de chargement</strong>, ou le <strong className="font-normal">webdesign</strong>, chaque élément du site doit favoriser une navigation rapide et optimiser l’<strong className="font-normal">expérience utilisateur</strong> en vue d’apporter une réponse claire et concise à la requête de l’utilisateur. Ceci est d’autant plus vrai que le support utilisé par l’internaute peut influencer son comportement. Par exemple, un utilisateur mobile aura besoin d’une réponse rapide face à son problème, contrairement à un utilisateur sur ordinateur qui sera plus disposé à effectuer de plus amples recherches. Évidemment, ceci n’est pas une vérité absolue, mais il est essentiel de tenir compte de ces éléments pour <strong className="font-normal">créer un site</strong> qui s’adapte à sa cible et des <strong className="font-normal">pages web</strong> pertinentes en fonction du profil de l’utilisateur.<br/>
                            <br/>
                            Enfin, il faut savoir que le <strong className="font-normal">responsive design</strong> est un des paramètres qui entrent en compte en termes de <strong>référencement naturel</strong>. Il est essentiel de mettre en place un site internet aux affichages <strong className="font-normal">flexibles</strong> pour favoriser l’<strong className="font-normal">expérience utilisateur</strong> et gagner en attractivité aux yeux de <strong className="font-normal">Google</strong>. Un site non responsive pourrait souffrir d’un manque de considération de la part du <strong className="font-normal">moteur de recherche</strong> en raison de l’inconfort qu’il pourrait procurer.<br/>
                        </p>
                        <img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées au Responsive Design :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/">UI Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/">UX Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/">Webdesign</Link></li>
                                <li>Maquette visuelle</li>
                                <li>CMS</li>
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
query lastsThreePostsresponsive {
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
export default responsiveDesign;




