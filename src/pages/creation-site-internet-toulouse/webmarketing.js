import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class webmarketing extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Webmarketing : Définition - Création site internet Toulouse - Linkweb"
                    description="Utilisé à bon escient, le webmarketing peut-être un véritable vecteur de croissance pour une entreprise."
                    url="https://linkweb.fr/creation-site-internet-toulouse/webmarketing/"
                    nom="Webmarketing"
                    slug="creation-site-internet-toulouse/webmarketing/"
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

                    <section className="w-full century mt-40 flex flex-col items-center justify-start bg-bleu" style={{background:'#00000073 url('+ Bg +')', minHeight:'300px', backgroundPosition:'center', backgroundSize:'cover',backgroundBlendMode:'overlay'}}>
                        <div className="topdef">
                            <h2 className="text-center text-xl font-bold text-white">Définition</h2>
                        </div>
                        <div>
                            <h1 data-aos="fade-up" className="century text-5xl sm:text-6xl text-bleu text-center text-white mt-4 lg:mt-6">
                                Webmarketing
                            </h1>
                        </div>
                    </section>
                    <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que le Webmarketing ?</h2>
                            <br/>
                            <p>
                                Le <strong>web marketing</strong> est une discipline qui désigne l’ensemble des <strong className="font-normal">pratiques promotionnelles (et publicitaires)</strong> mises en œuvre par un annonce via l’utilisation d’<strong className="font-normal">outils en ligne</strong>. Le <strong className="font-normal">webmarketing</strong> est une notion large pour désigner tous les <strong className="font-normal">leviers</strong> permettant de remplir des objectifs relavant d’une <strong className="font-normal">stratégie digitale</strong>. Les <strong className="font-normal">réseaux sociaux</strong> (<strong className="font-normal">community management</strong>), le <strong className="font-normal">référencement naturel (SEO)</strong>, l’<strong className="font-normal">emailing</strong>, la <strong className="font-normal">sponsorisation</strong> ou le <strong className="font-normal">content marketing</strong> sont des exemples de domaines qui prennent part au webmarketing et relèvent de la <strong className="font-normal">communication digitale</strong>.<br/>
                                <br/>
                                L’ensemble des actions menées <strong className="font-normal">sur le web</strong>, de la <strong className="font-normal">création de site web</strong> à la définition de <strong className="font-normal">stratégie social media</strong>, doivent permettre de remplir des objectifs qui relèvent de la <strong>notoriété</strong>, la <strong>visibilité</strong>, l’<strong>image de marque</strong> ou de la <strong>fidélisation</strong>. C’est pourquoi mettre en place une <strong className="font-normal">stratégie marketing digital</strong> demande une certaine expertise pour utiliser les différents outils à bon escient. Lancer une campagne de <strong className="font-normal">liens sponsorisés (Adwords)</strong> demande une certaine préparation en amont, tout autant que mener une campagne de <strong className="font-normal">mailing</strong> par exemple.<br/>
                                <br/>
                                Notre <strong><Link className="text-bleu hover:text-black font-bold" to="/creation-site-internet-toulouse/">solution de création de site internet à Toulouse</Link></strong> s’inscrit dans un <strong className="font-normal">projet web</strong> global qui doit vous permettre de tirer profit d’<strong className="font-normal">actions marketing</strong> qui vous correspondent. La mise en place d’une <strong className="font-normal">stratégie web</strong> basée sur la <strong className="font-normal">création d’un site internet</strong> peut permettre de :<br/>
                                <br/>
                                <ul className="list-disc pl-12">
                                <li>rendre visible <strong className="font-normal">votre site web</strong> grâce au référencement,</li>
                                <li><strong className="font-normal">générer du trafic sur votre site internet</strong> vitrine ou <strong className="font-normal">e commerce</strong>,</li>
                                <li>ou bien augmenter votre <strong className="font-normal">taux de conversion</strong> grâce à un <strong className="font-normal">ciblage</strong> pertinent.</li>
                                </ul>
                                <br/>
                                En somme, la <strong className="font-normal">création de site web</strong> appuyée par le <strong className="font-normal">référencement naturel</strong> fait partie des <strong className="font-normal">techniques de marketing web</strong> qui permettent à une entreprise de tirer profit de l’utilisation des <strong className="font-normal">outils digitaux</strong> et de générer de la croissance. Le <strong className="font-normal">digital marketing</strong> a pour objectif de procurer un <strong className="font-normal">retour sur investissement</strong> via un <strong className="font-normal">projet digital</strong> taillé sur-mesure.<br/>
                            </p>
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/"><img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        /></Link>
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start" >
                            <div className="bloccontactblog w-full lg:w-full flex flex-col justify-center items-center century text-justify flex" style={{background:'#3c3c3cfa url(' + bgbloc +')', backgroundBlendMode:'overlay', backgroundSize:'cover', backgroundPosition:'center'}}>
                                <h2>Vous souhaitez mettre en place un projet web ?</h2>
                                <br/>
                                <h3>Linkweb met en place votre projet de création de site web.</h3>
                                <br/>
                                <div className="w-1/2 flex flex-row justify-center items-center">
                                <br/>
                                    <BoutonBlog  url="/contact-agence-web-toulouse/" text="Contactez-nous" position="center" />
                                </div>
                            </div>
                            <br/>
                            <hr className="hrblog"></hr>
                            <br/>
                            <h3 className="font-bold">Les notions liées au Webmarketing :</h3>
                            <br/>
                            <hr className="hrblog"></hr>
                            <br/>
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
                            <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webdesign/"><li>Webdesign</li></Link>
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
query lastsThreePostswebmarketing {
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
export default webmarketing;




