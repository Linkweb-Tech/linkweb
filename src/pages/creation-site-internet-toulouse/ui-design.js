import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/creation-site-internet-ban.png";



class uiDesign extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="UI Design : Définition - Création site internet Toulouse - Linkweb"
                    description="L'UI Design est une notion directement liée à celle d'UX Design (expérience utilisateur). Découvrez à quoi se rattache cette notion issue du webdesign."
                    url="https://linkweb.fr/creation-site-internet-toulouse/ui-design/"
                    nom="UI Design"
                    slug="creation-site-internet-toulouse/ui-design/"
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
                            UI Design
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                            L’<strong>UI design</strong> ou <strong>interface utilisateur</strong> est un terme <strong className="font-normal">webmarketing</strong> qui désigne la relation qu’un utilisateur peut entretenir avec une plateforme web. En d’autres termes, l’UI design se réfère à l’ensemble des éléments <strong className="font-normal">visuels</strong> et graphiques qui interviennent dans la navigation d’un utilisateur sur un site internet afin d’en optimiser l’expérience.<br/>
                            <br/>
                            En effet, l’UI design a pour objectif de proposer une <strong>expérience utilisateur optimale</strong> sur un site internet. En ce sens, l’<strong className="font-normal">UI design</strong> et l’<strong className="font-normal">UX design</strong> (<strong className="font-normal">user experience</strong>) sont deux notions qui sont parfaitement liées. Il s’agit d’un concept qui entre directement en compte dans notre <Link className="text-bleu hover:text-black" to="/creation-site-internet-toulouse/"><strong>processus de création de site internet à Toulouse</strong></Link>. Ceci permettra de conserver une certaine cohérence sur l’ensemble du site, tout en permettant une navigation fluide, agréable et qui ne laisse pas de place aux problèmes d’<strong className="font-normal">ergonomie</strong>.<br/>
                            <br/>
                            En somme, le travail de l’UI design d’un site internet correspond notamment au travail : des typographies utilisées, de la <strong>charte graphique</strong> du site, des éléments <strong className="font-normal">graphiques</strong> qui entretiennent une bonne navigation entre les contenus (boutons) ainsi que tous les éléments qui procurent une intuitivité et une certaine fluidité dans la navigation sur un site web.<br/>
                            <br/>
                            L’UI design est un concept qui s’applique aussi bien au <strong className="font-normal">web design</strong> d’un site internet, qu’à celui d’une <strong className="font-normal">application mobile</strong>. La <strong className="font-normal">conception</strong> de cette relation entre l’interface et l’utilisateur est le travail de l’<strong>UI designer</strong> avec pour objectif de procurer une expérience utilisateur idéale. Ce travail qui appartient à un <strong className="font-normal">développeur front end</strong> et <strong className="font-normal">webdesigner</strong> peut également être réalisé en collaboration avec un professionnel du <strong className="font-normal">graphisme</strong>.<br/>
                        </p>
                        <img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées à l'UI design :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/">UX Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/">Responsive Design</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/">Webdesign</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/">Maquette de site web</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/">CMS</Link></li>
                                <li><Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/">HTML/CSS</Link></li>
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
query lastsThreePostsui {
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
export default uiDesign;




