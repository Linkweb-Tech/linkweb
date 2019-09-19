import React from "react";
import { Link, graphql } from "gatsby";;
import Layout from "../components/layout";
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
                    title="Création de site internet Toulouse"
                    keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                />
                <PageTransition
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
                >
                    <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ background: '#6e6e6e url(' + Bg + ')', backgroundBlendMode: 'multiply' }}>
                        <h1 data-aos="fade-up" data-aos-delay="500" className="century text-7xl text-center text-white">
                        Nos réalisations à Toulouse<span className="text-bleu">/</span>Agen
                        </h1>
                        <h3 className="italic text-2xl text-white">Agence de communication à Agen/Toulouse</h3>
                        <RoundButton url="#" text="Je suis intéressé par une offre de création de site internet" />
                    </section>
                    
                    
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                        Du mal à vous projeter ? Notre agence de communication digitale a mené de nombreux projets. <span className="text-bleu">Découvrez les.</span>
                        </h2>
                        <hr className="blue"></hr>

                    </section>


                    <section className="max-w-7xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <Tiles />
                    </section>


                    <section className="flex flex-1 max-w-7xl mx-auto home-step mt-24 mb-12 px-48">
                        <div className="w-1/3 one px-12">
                            <div className="flex flex-1">
                                <div className="blackBulle" data-aos="fade-up">1</div>
                                <section>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                                        <span className="text-bleu">/</span>JE VEUX EN SAVOIR PLUS SUR LA CRÉATION DE SITE INTERNET
                                </h3>
                                    <div className="content pb-6">
                                    Prendre conscience de l’intérêt de la création d’un site internet pour votre entreprise est essentiel à l’heure où des millions de sites voient le jour. Mettre en place un site visible sur les moteurs de recherche permet de toucher une nouvelle cible et favorise le développement de votre entreprise.  
                                </div>
                                    

                                </section>
                            </div>
                        </div>
                        <div className="w-1/3 two px-12">
                            <div className="flex flex-1">
                                <div className="blackBulle" data-aos="fade-up">2</div>
                                <section>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                                        <span className="text-bleu">/</span>JE SUIS ACCOMPAGNÉ POUR DÉFINIR MES BESOINS
                                </h3>
                                    <div className="content pb-6">
                                    Vous souhaitez mettre en place votre solution web, mais ne savez pas ce qui vous conviendrez le plus ? Nous définissons votre projet selon vos objectifs, vos besoins, vos cibles, ainsi que vos moyens. Linkweb met en place votre projet web sur-mesure pour créer un site internet qui vous ressemble.
                                </div>
                                    
                                </section>
                            </div>
                        </div>
                        <div className="w-1/3 two px-12">
                            <div className="flex flex-1">
                                <div className="blackBulle" data-aos="fade-up">3</div>
                                <section>
                                    <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                                        <span className="text-bleu">/</span>JE CHOISIS LINKWEB POUR CRÉER MON SITE INTERNET
                                </h3>
                                    <div className="content pb-6">
                                        Faites confiance à l’expertise de Linkweb dans la création de site internet. Nos consultants en référencement et développement vous apportent les meilleurs solutions pour concrétiser vos projets et mettre en place un site internet qui fonctionne.
                                </div>
                                    
                                </section>
                            </div>
                        </div>
                    </section>
                    
                    
                    <section className=" w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bgDev + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h3 data-aos='fade-right' className="text-center text-white text-4xl century">
                                <span className="text-bleu">/</span>Alors, convaincu ? Vous souhaitez être contacté ? N’attendez plus et entrez votre adresse mail.


                            </h3>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                            <RappelForm />
                        </div>

                        <div className="max-w-6xl mx-auto flex items-start text-center my-12">
                            <div className="w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                                <img src={laptop} width="80px" />
                                <p className="text-xl text-white century pt-3">WEBMARKETING</p>
                            </div>
                            <div className="w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="400">

                                <img src={web} width="80px" />
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT NATUREL</p>
                            </div>
                            <div className="w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="600">
                                <img src={bullhorn} width="80px" />
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT GOOGLE ADS</p>
                            </div>
                        </div>
                    </section>
                    
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Ils sont satisfaits par notre offre de création de site internet
                        </h3>
                        <hr className="blue"></hr>

                    </section>
                    <section className="max-w-6xl mx-auto flex align-start justify-center text-center mt-3 mb-12">
                        <div className="w-1/3 px-3 flex flex-col align-center justify-start" data-aos="fade-up">
                            <img
                                src={stars}
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Château de Boisverdun</div>
                            <div className="italic">« Nous sommes chez Linkweb depuis 3 ans et je n’ai jamais eu aucun problème les techniciens sont à l’écoute et nous appellent chaque mois pour faire un point! Continuez comme ça ne changez rien!! »</div>
                        </div>
                        <div className="w-1/3 px-3 flex flex-col align-center justify-start" data-aos="fade-up" data-aos-delay="300">
                            <img
                                src={stars}
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Fanny Coiffure</div>
                            <div className="italic">« Ils sont de très bons conseils, le suivi est régulier, si vous voulez changer des choses avant qu’ils ne vous rappellent, c’est toujours possible avec un mail. Je recommande vivement toute l’équipe . »</div>
                        </div>
                        <div className="w-1/3 px-3 flex flex-col align-center justify-start" data-aos="fade-up" data-aos-delay="500">
                            <img
                                src={stars}
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">Auto École Anne</div>
                            <div className="italic">« Entreprise très sérieuse. Équipe à l écoute et réactive des changements que je demande tous les mois. Le référencement est bien suivi et j ai un retour d’ Anthony tous les mois. Je recommande ! »</div>
                        </div>

                    </section>
                    <section className="max-w-6xl mx-auto flex align-center justify-center text-center mb-24">
                        <div className="w-full flex justify-center">
                            <Link
                                className="century text-sm hover:text-bleu"
                                to="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,"
                            >
                                Voir plus de témoignages
                            </Link>
                            |
                            <Link
                                className="century text-sm hover:text-bleu"
                                to="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,"
                            >
                                Vous êtes déjà clients ? Donnez nous votre avis !
                            </Link>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Les dernières actualités
                        </h3>
                        <hr className="blue"></hr>
                        <LastPosts lastposts={this.props.data.allWordpressPost.edges} />

                    </section>
                </PageTransition>
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




