import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class developpementWeb extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Développement Web : Définition - Création site internet Toulouse - Linkweb"
                    description="Le développement web est au coeur du travail de création de site internet sur-mesure."
                    url="https://linkweb.fr/creation-site-internet-toulouse/developpement-web/"
                    nom="Développement Web"
                    slug="creation-site-internet-toulouse/developpement-web/"
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
                            Développement Web
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que le développement web ?</h2>
                        <br />
                        <p>
                            Le <strong>développement web</strong> est une discipline qui consiste, par l’usage de <strong className="font-normal">langages de programmation web</strong>, à <strong className="font-normal">programmer des sites web</strong> ou <strong className="font-normal">applications web (ou web mobile)</strong> destinés à être publiés sur des serveurs. Le métier de développeur web demande de savoir manier des outils tels que les <strong className="font-normal">CMS</strong> ou les <strong className="font-normal">frameworks</strong> (comme <strong className="font-normal">Bootstrap</strong> ou bien le <strong className="font-normal">framework Symfony</strong> par exemple). De plus, <strong className="font-normal">maîtriser les langages</strong> tels que le <strong className="font-normal">HTML et CSS</strong>, le <strong className="font-normal">JavaScript</strong> ou bien le <strong className="font-normal">PHP</strong> est nécessaire pour être en mesure de répondre aux <strong className="font-normal">besoins du client</strong> d'une <Link to="/" className="text-bleu hover:text-black font-bold">agence comme Linkweb</Link>. <strong className="font-normal">Coder</strong> fait partie du quotidien d’un développeur. Également, le rôle de <strong className="font-normal">concepteur du développeur</strong> fait de lui une pièce incontournable <Link className="text-bleu hover:text-black font-bold" to="/creation-site-internet-toulouse/"><strong>dans la création de site internet à Toulouse</strong></Link>.<br />
                            <br />
                                Il est possible de scinder le métier de développeur en deux parties bien distinctes, à savoir le back-end et le front-end :<br />
                            <br />
                            <ul className="list-disc pl-12">
                                <li><strong>Back-End :</strong> le <strong className="font-normal">développeur back-end</strong> est chargé de fournir des <strong className="font-normal">solutions techniques</strong> concernant le travail relevant de la partie <strong className="font-normal">back office</strong>. Il s’agit d’un travail de l’ombre qui doit développer des interfaces fonctionnelles pour l’administration d’un site internet. Un développeur back-end peut être amené à réaliser un intranet par exemple.</li><br />
                                <li><strong>Front-End :</strong> le <strong className="font-normal">développeur front-end</strong>, ou <strong className="font-normal">développeur intégrateur web</strong>, est chargé de définir le <strong className="font-normal">web design du site internet</strong>. En somme, il réalise tout le travail inhérent à l’<strong className="font-normal">interface utilisateur</strong> avec également une réflexion portée sur l’<strong className="font-normal">expérience utilisateur</strong>, le <strong className="font-normal">responsive design</strong> ou encore l’<strong className="font-normal">ergonomie</strong>.</li><br />
                            </ul>
                            <br />
                                Dans la <strong className="font-normal">création d’un projet web</strong>, il est parfois nécessaire de faire appel à la complémentarité des <strong className="font-normal">compétences techniques</strong> des deux types de <strong className="font-normal">développeurs web</strong>. Ceci est particulièrement pertinent lorsqu’il s’agit de développer un projet portant des <strong className="font-normal">spécifications techniques</strong> en vue de mettre en place une plateforme sur-mesure. Le travail de <strong className="font-normal">développement web</strong> possède une place considérable dans le contexte d’une <strong className="font-normal">agence web</strong>. Le développement, de part le maniement du <strong className="font-normal">langage de programmation</strong>, permet de <strong className="font-normal">créer un site internet</strong> ou une <strong className="font-normal">application web</strong> sur-mesure et qui colle parfaitement aux besoins des professionnels.<br />
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
                        <h3 className="font-bold">Les notions liées au Développement Web :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/"><li>UI Design</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/"><li>Front-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/back-end/"><li>Back-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/"><li>Refonte site internet</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/"><li>Maquette de site web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/"><li>HTML/CSS</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/"><li>Framework</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/nom-de-domaine/"><li>Nom de domaine</li></Link>
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
query lastsThreePostsdeveloppementWeb {
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
export default developpementWeb;




