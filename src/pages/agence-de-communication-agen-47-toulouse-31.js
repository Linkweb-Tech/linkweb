import React from 'react';
import { Link, graphql } from "gatsby";;
import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import Tiles from '../components/gallery/tiles';
import '../scss/tiles.scss';


import Bg from "../images/agence-de-communication-background.jpg";
import bgDev from '../images/bg-dev.jpg';
import stars from '../images/stars.png';
import web from '../images/web.svg';
import laptop from '../images/laptop.svg';
import bullhorn from '../images/bullhorn.svg';




class AgenceDeCommunicationAgen47Toulouse31 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence de Communication Agen - Création Site Internet - Linkweb"
                    description="Linkweb est à l’origine de nombreux projets pour mettre en valeur les professionnels de tous secteurs d’activités. Pourquoi pas le votre ?"
                    keywords={[`Projet web Agen`, `Projet Web Toulouse`, `Création site internet sur-mesure`, `Agence Web Toulouse`]}
                    url="https://linkweb.fr/agence-de-communication-agen-47-toulouse-31"
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
                    <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-bottom flex flex-col justify-center items-center" style={{ background: '#6e6e6e url(' + Bg + ')', backgroundBlendMode: 'multiply', backgroundSize:'cover' }}>
                        <h2 data-aos="fade-up" data-aos-delay="500" className="century text-5xl sm:text-6xl text-center text-white">
                        Nos réalisations à Toulouse<span className="text-bleu">/</span>Agen
                        </h2>
                        <h1 className="italic text-center text-lg sm:text-2xl text-white mt-3 text-center">Agence de communication à Agen/Toulouse</h1>
                        <RoundButton url="/contact-agence-web-toulouse" text="Je suis intéressé par une offre de création de site internet" />
                    </section>
                    
                    
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                        Du mal à vous projeter ? Notre agence de communication digitale a mené de nombreux projets. <span className="text-bleu">Découvrez les.</span>
                        </h2>
                        <hr className="blue"></hr>

                    </section>


                    <section className="w-full mx-auto px-4 pt-12 pb-0 my-2">
                       
                        <Tiles />
                    </section>


                    <section className="flex flex-col lg:flex-row flex-1 max-w-7xl mx-auto home-step mt-24 mb-12 my-12 px-1 xl:my-24 xl:px-24">
                        <div className="w-full xl:w-1/3 one px-12">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="blackBulle my-6" data-aos="fade-up">1</div>
                                <section>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                        <span className="text-bleu">/</span>JE VEUX EN SAVOIR PLUS SUR LA CRÉATION DE SITE INTERNET
                                </h3>
                                    <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                    Prendre conscience de l’intérêt de la <strong>création d’un site internet</strong> pour votre entreprise est essentiel à l’heure où des millions de sites voient le jour. Mettre en place un <strong>site visible sur les moteurs de recherche</strong> permet de toucher une nouvelle cible et favorise le développement de votre entreprise.  
                                    <br/><Button url="/contact-agence-web-toulouse" text="En savoir plus" position="center" />
                                </div>
                                    

                                </section>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3 two px-12">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="blackBulle my-6" data-aos="fade-up">2</div>
                                <section>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                        <span className="text-bleu">/</span>JE SUIS ACCOMPAGNÉ POUR DÉFINIR MES BESOINS
                                </h3>
                                    <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                    Vous souhaitez mettre en place votre <strong>solution web</strong>, mais ne savez pas ce qui vous conviendrez le plus ? Nous définissons votre projet selon vos objectifs, vos besoins, vos cibles, ainsi que vos moyens. <strong><Link to="/">Linkweb</Link></strong> met en place votre <strong>projet web sur-mesure</strong> pour <strong>créer un site internet</strong> qui vous ressemble.
                                    <br/><br/><Button url="/contact-agence-web-toulouse" text="Prendre contact" position="center" />
                                </div>
                                    
                                </section>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3 two px-12">
                            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                                <div className="blackBulle my-6" data-aos="fade-up">3</div>
                                <section>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                        <span className="text-bleu">/</span>JE CHOISIS LINKWEB POUR CRÉER MON SITE INTERNET
                                </h3>
                                    <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                        Faites confiance à l’expertise de <strong><Link to="/">Linkweb</Link></strong> dans la <strong><Link to="/creation-site-internet-toulouse">création de site internet</Link></strong>. <strong>Nos consultants</strong> en <strong><Link to="/referencement-toulouse">référencement</Link></strong> et <strong><Link to="/creation-de-site-internet-47-31/">développement</Link></strong> vous apportent les meilleurs solutions pour concrétiser vos projets et mettre en place un <strong>site internet</strong> qui fonctionne.
                                        <br/><br/><br/><Button url="/contact-agence-web-toulouse" text="Prendre contact" position="center" />
                                </div>
                                    
                                </section>
                            </div>
                        </div>
                    </section>
                    
                    
                    <section className=" w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bgDev + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h2 data-aos='fade-right' className="text-center text-white text-2xl md:text-4xl century">
                                <span className="text-bleu">/</span>Alors, convaincu ? Vous souhaitez être contacté ?


                            </h2>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                            {/* <RappelForm /> */}
                            <RoundButton url="/contact-agence-web-toulouse" text="Je suis intéressé par une offre de création de site internet" />
                        </div>

                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start text-center my-12">
                            <div className="w-full sm:w-1/3 py-2 px-6 sm:px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                                <img src={laptop} width="80px" alt="Agence de communication Agen"/>
                                <p className="text-xl text-white century pt-3">WEBMARKETING</p>
                            </div>
                            <div className="w-full sm:w-1/3 py-2 px-12 flex flex-col items-center justify-center my-6" data-aos='zoom-in' data-aos-delay="400">

                                <img src={web} width="80px" alt="Agence de communication Agen"/>
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT NATUREL</p>
                            </div>
                            <div className="w-full sm:w-1/3 py-2 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="600">
                                <img src={bullhorn} width="80px" alt="Agence de communication Agen"/>
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT GOOGLE ADS</p>
                            </div>
                        </div>
                    </section>
                    
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Ils sont satisfaits par notre offre de création de site internet
                        </h2>
                        <hr className="blue"></hr>

                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-start justify-center text-center mt-3 mb-12">
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-start" data-aos="fade-up">
                            <img
                                src={stars}
                                className="w-32 mx-auto h-auto mt-3"
                                alt="Avis Google"
                            />
                            <div className="text-lg century my-2">Château de Boisverdun</div>
                            <div className="italic">« Nous sommes chez Linkweb depuis 3 ans et je n’ai jamais eu aucun problème les techniciens sont à l’écoute et nous appellent chaque mois pour faire un point! Continuez comme ça ne changez rien!! »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-start" data-aos="fade-up" data-aos-delay="300">
                            <img
                                src={stars}
                                className="w-32 mx-auto h-auto mt-3"
                                alt="Avis Google"
                            />
                            <div className="text-lg century my-2">Fanny Coiffure</div>
                            <div className="italic">« Ils sont de très bons conseils, le suivi est régulier, si vous voulez changer des choses avant qu’ils ne vous rappellent, c’est toujours possible avec un mail. Je recommande vivement toute l’équipe . »</div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-start" data-aos="fade-up" data-aos-delay="500">
                            <img
                                src={stars}
                                className="w-32 mx-auto h-auto mt-3"
                                alt="Avis Google"
                            />
                            <div className="text-lg century my-2">Auto École Anne</div>
                            <div className="italic">« Entreprise très sérieuse. Équipe à l écoute et réactive des changements que je demande tous les mois. Le référencement est bien suivi et j ai un retour d’ Anthony tous les mois. Je recommande ! »</div>
                        </div>

                    </section>
                    <section className="max-w-6xl mx-auto flex align-center justify-center text-center mb-24">
                        <div className="w-full flex flex-col md:flex-row justify-center">
                            <a
                                className="century text-sm hover:text-bleu"
                                target="blank" rel="noreferrer noopener"
                                href="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,"
                            >
                                Voir plus de témoignages
                            </a>&nbsp;
                            |&nbsp;
                            <a
                                className="century text-sm hover:text-bleu"
                                target="blank" rel="noreferrer noopener"
                                href="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,"
                            >
                                Vous êtes déjà clients ? Donnez nous votre avis !
                            </a>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Les dernières actualités
                        </h3>
                        <hr className="blue"></hr>
                        <LastPosts lastposts={this.props.data.allWordpressPost.edges} />

                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsRea {
    allWordpressPost(limit: 3) {
      edges {
        node {
          id
          title
          slug
          modified(locale: "fr", formatString: "DD MMM YYYY")
          link
          featured_media {
            source_url
          }
        }
      }
    }
  }
  
    
`
export default AgenceDeCommunicationAgen47Toulouse31;




