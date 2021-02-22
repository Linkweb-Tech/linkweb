import React, { Component } from 'react';
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class webdesign extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Webdesign : Définition - Création site internet Toulouse - Linkweb"
                    description="Le travail du webdesign d'un site web a pour objectif de faciliter la transmission de l'information présentée par le site internet."
                    url="https://linkweb.fr/creation-site-internet-toulouse/webdesign/"
                    nom="Webdesign"
                    slug="creation-site-internet-toulouse/webdesign/"
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
                            Webdesign
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que le Webdesign ?</h2>
                        <br />
                        <p>
                            Dans notre <strong><Link className="text-bleu hover:text-black font-bold" to="/creation-site-internet-toulouse/">procédé de création de site internet à Toulouse</Link></strong>, une part importante du travail est consacrée au <strong>webdesign</strong>. Comme son nom l’indique, le <strong className="font-normal">web design</strong> désigne littéralement la <strong className="font-normal">conception web</strong>, notamment sur son aspect <strong className="font-normal">graphique</strong>. En effet, cette notion s’attache tout particulièrement à l’aspect visuel, intuitif et <strong className="font-normal">ergonomique d’un site internet</strong>. En ce sens, le web design a pour objectif de mettre en place un site web qui favorise l’<strong className="font-normal">expérience utilisateur</strong> tout en proposant un design d’interface attractif qui facilite l’accès à l’information.<br />
                            <br />
                                Le rôle du web design est d’assurer la transmission de l’information à travers la mise en place de <strong className="font-normal">procédés graphiques et esthétiques</strong> qui vont en faciliter l’accès et la compréhension. Dans le domaine du web design, vont être pris en compte des éléments tels que : l’<strong className="font-bold">UI design</strong> (et ce qui relève de la <strong className="font-normal">charte graphique</strong> et de l’<strong className="font-normal">identité visuelle</strong>), l’<strong className="font-bold">UX design</strong>, le <strong className="font-bold">Responsive design</strong> (l’affichage de votre site internet s’adapte aux <strong className="font-normal">différents supports</strong>), l’<strong className="font-normal">ergonomie du site</strong> et bien plus encore.<br />
                            <br />
                                Tout doit être fait pour proposer une <b>interface facilement navigable, compréhensible et intuitive</b> : l’utilisation de pictogrammes, le choix de la <strong className="font-normal">typographie</strong>, la disposition des différents éléments ou encore la définition d’espaces suffisants autour des boutons cliquables sont des éléments concrets qui permettent de proposer une expérience de navigation favorable pour les utilisateurs et véhiculer l’information de façon limpide.<br />
                        </p>
                        <br />
                        <h2 className="text-xl font-bold text-bleu">Le design web au service de la transmission de l’information</h2>
                        <br />
                        <p>
                            Cette notion est d’autant plus importante qu’elle centralise tout ce qui compose un site internet pour en proposer une <strong className="font-normal">interface graphique</strong> optimale, mais surtout fonctionnelle pour les utilisateurs. Au cours de la phase de <strong className="font-normal">développement web</strong>, <b>la <strong className="font-bold">conception graphique</strong> se travaille à partir de <strong className="font-bold">maquettes</strong></b>. Ce travail est aussi bien celui d’un <strong className="font-normal">développeur web front end</strong>, que d’un <strong className="font-normal">web designer</strong>, auquel un <strong className="font-normal">graphiste</strong> peut potentiellement être associé. Il s’agit, à partir de <strong className="font-normal">visuels</strong>, d’<strong className="font-normal">éléments graphiques</strong> (une <strong className="font-normal">infographie</strong> par exemple) ou tout autre élément se rapportant au domaine du <strong className="font-normal">graphisme</strong> de mettre en place un <strong className="font-normal">design graphique</strong> global cohérent et facilement assimilable.<br />
                            <br />
                                Au cours de la <strong className="font-normal">refonte du site web</strong> ou bien tout simplement pour <strong className="font-normal">créer un site internet</strong>, travailler le <strong className="font-normal">web design de ses pages web</strong> doit permettre de donner lieu à des <strong className="font-bold">interfaces web performantes en termes de webmarketing</strong>. En effet, l’interface web est là pour agencer et habiller le message communiqué de façon à ce que ce dernier soit délivré sans encombre. Ceci est le propre de l’ensemble des <strong className="font-normal">supports de communication</strong> et le site web, en termes de <strong className="font-normal">communication digitale</strong>, ne déroge pas à la règle. En effet, pour mettre en place un <strong className="font-normal">projet web</strong> performant, il est important de prendre en compte aussi bien le contenu que le contenant et le travail de <strong className="font-normal">création graphique</strong> a toute son importance de ce point de vue là.<br />
                            <br />
                                Le travail opéré sur la <strong className="font-normal">maquette</strong>, en termes de <strong className="font-normal">communication visuelle</strong>, inclut des phases de tests pour s’assurer de la <strong className="font-normal">création de sites internet ergonomiques</strong>, assurant une certaine <strong className="font-normal">réactivité</strong> de la plateforme ainsi que l’<strong className="font-normal">interactivité</strong> avec l’utilisateur. Ceci est aussi bien valable pour l’expérience passée sur ordinateur de bureau, que sur le <strong className="font-normal">web mobile</strong>.<br />
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
                        <h3 className="font-bold">Les notions liées au Webdesign :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/strategie-digitale/"><li>Stratégie digitale</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/"><li>UI Design</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ux-design/"><li>UX Design</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/"><li>CMS</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/"><li>Framework</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/"><li>Front-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/back-end/"><li>Back-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/"><li>HTML/CSS</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/arborescence-site-internet/"><li>Arborescence de site internet</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/"><li>Refonte site internet</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/"><li>Maquette de site web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/w3c/"><li>W3C</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/nom-de-domaine/"><li>Nom de domaine</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/redaction-web/"><li>Rédaction Web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/charte-graphique/"><li>Charte Graphique</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/cms/"><li>CMS</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/"><li>Développement Web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/mobile-first/"><li>Mobile-First</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/moteurs-recherche/"><li>Moteurs de recherche</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/responsive-design/"><li>Responsive Design</li></Link>
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
query lastsThreePostswebdesign {
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
export default webdesign;




