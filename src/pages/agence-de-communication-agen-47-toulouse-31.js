import React from 'react';
import { Link, graphql } from "gatsby";;
import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import Tiles from '../components/gallery/tiles';
import "../scss/global.scss";
import scroll from "../images/motiontest.svg";
import RoundButtonPages from "../components/roundButtonPages";
import RoundButtonPagesMail from "../components/roundButtonPagesMail";

// import Bg from "../images/agence-de-communication-background.jpg";
import Bg from "../images/agence-de-communication-bg.jpg";
// import bgDev from '../images/bg-dev.jpg';
import bgDev from '../images/cta-background-agence-web.jpg';
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
                    url="https://linkweb.fr/agence-de-communication-agen-47-toulouse-31/"
                    nom="Nos réalisations"
                    slug="agence-de-communication-agen-47-toulouse-31/"
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
                    <section className="flex items-center w-full mx-auto pb-0 mt-40 mb-24 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{background:'#000000ad url('+ Bg +')', backgroundBlendMode:'overlay', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center top'}}>
                        <div className="max-w-6xl mx-auto lg:mx-56 pt-2 lg:w-2/5 w-full flex-col items-end">
                            <div className="mt-12 -mb-24 w-full flex flex-col items-center lg:items-start">
                                <div className="w-full  text-3xl text-center font-bold text-white century">4,5/5</div>
                                    <p className="w-full  text-sm text-center font-bold text-white century -mt-2">Avis Google</p>
                                    <div className="w-full -mt-8">
                                        <svg className="mx-auto block" width="100px" viewBox="0 0 100 125">
                                            <path fill="#FFFFFF" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                            <path fill="#FFFFFF" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                            <path fill="#FFFFFF" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                            <path fill="#FFFFFF" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                            <path fill="#FFFFFF" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z   M89.8,54.7c0.1-0.1,0.4,0,0.4,0l4.2,2.2l-0.8-4.7c0-0.2,0-0.3,0.1-0.4l3.4-3.3l-4.7-0.7c-0.2,0-0.3-0.1-0.4-0.3l-2.1-4.3L89.8,54.7  z"/>
                                        </svg>                    
                                    </div>
                                </div>
                                <div className="w-full lg:w-full flex justify-center lg:justify-center">
                                <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Nos réalisations à Toulouse<span className="text-bleu">/</span>Agen</h1>
                                </div>
                                <br/>
                                <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Agence de communication à Agen/Toulouse</h2>
                                {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                                <div className="w-full lg:w-full flex flex-col lg:flex-row justify-center pb-24 lg:justify-center mx-auto" style={{maxWidth:'460px'}}>
                                    <RoundButtonPages url="tel:0533950030" text="05 33 95 00 30"/>
                                    <RoundButtonPagesMail url="/contact-agence-web-toulouse/" text="Demander un devis"/>
                                </div>
                        </div>
                            <div className="w-full flex items-end justify-center mx-auto block pb-16">
                                <img src={scroll} alt="Scroll" width="60px"/>
                            </div>
                    </section>
                    
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                        Du mal à vous projeter ? Notre agence de communication digitale a mené de nombreux projets. <span className="text-bleu">Découvrez les.</span>
                        </h2>
                        <hr className="blue"></hr>

                    </section>


                    <section className="w-full mx-auto px-4 pt-12 pb-0 z-50 my-2">
                       
                        <Tiles />
                    </section>


                    <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
          <div className="w-full xl:w-1/3 one px-auto">
            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
              <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
              <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                  <span className="text-bleu">/</span>JE VEUX EN SAVOIR PLUS SUR LA CRÉATION DE SITE INTERNET
                </h3>
                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                    Prendre conscience de l’intérêt de la <strong>création d’un site internet pour votre entreprise</strong> est essentiel à l’heure où des millions de sites voient le jour. Mettre en place un <strong>site visible sur les moteurs de recherche</strong> permet de toucher une nouvelle cible et favorise le <strong>développement de votre entreprise</strong>.
                </div>
                <Button url="/contact-agence-web-toulouse/" text="En savoir plus" position="center" />
  
              </section>
            </div>
          </div>
          <div className="w-full xl:w-1/3 two px-auto">
            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
              <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                  <span className="text-bleu">/</span>JE SUIS ACCOMPAGNÉ POUR DÉFINIR MES BESOINS
                </h3>
                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                Vous souhaitez mettre en place votre <strong>solution web</strong>, mais ne savez pas ce qui vous conviendrez le plus ? Nous définissons votre projet selon vos objectifs, vos besoins, vos cibles, ainsi que vos moyens. <Link to="/" className="text-bleu font-bold hover:text-black">Linkweb</Link> met en place votre <strong>projet web sur-mesure</strong> pour <strong>créer un site internet</strong> qui vous ressemble.
                </div>
                <Button url="/contact-agence-web-toulouse/" text="Être recontacté" position="center" />
              </section>
              </div>
            </div>
          <div className="w-full xl:w-1/3 three px-auto">
            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
              <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                  <span className="text-bleu">/</span>JE CHOISIS LINKWEB POUR CRÉER MON SITE INTERNET
                </h3>
                <div className="century content pb-6 text-justify" style={{textAlignLast:'center'}}>
                  Faites confiance à l’expertise de <strong>Linkweb</strong> dans la <strong>création de site internet</strong>. Nos <strong>consultants en <Link to="/referencement-toulouse/" className="text-bleu font-bold hover:text-black">référencement</Link> et <Link to="/creation-site-internet-toulouse/" className="text-bleu font-bold hover:text-black">développement web</Link></strong> vous apportent les meilleurs solutions pour concrétiser vos projets et mettre en place un <strong>site internet</strong> qui fonctionne.
                </div>
                <Button url="/contact-agence-web-toulouse/" text="Demander un devis" position="center" />
              </section>
              
            </div>
  
          </div>
        </section>
                    
                    
                    <section className=" w-full lg:h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bgDev + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h2 data-aos='fade-right' className="text-center text-white text-3xl md:text-4xl century">
                                <span className="text-bleu">/</span>Alors, convaincu ? Vous souhaitez être contacté ?


                            </h2>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center my-12">
                            {/* <RappelForm /> */}
                            <RoundButton url="/contact-agence-web-toulouse/" text="Je suis intéressé par une offre de création de site internet" />
                        </div>

                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start text-center my-12">
                            <div className="w-full sm:w-1/3 py-2 px-6 sm:px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                                <img src={laptop} width="80px" alt="Agence de communication Agen"/>
                                <p className="text-xl text-white century pt-3">WEBMARKETING</p>
                            </div>
                            <div className="w-full sm:w-1/3 py-2 px-12 flex flex-col items-center justify-center sm:my-0 my-6" data-aos='zoom-in' data-aos-delay="400">

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
                        <Link className="bg-bleu text-white px-16 py-3 block mx-auto hover:bg-black font-normal" to="/actualite-digitale/">Voir l'actualité digitale</Link>
                        <br/>
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
export default AgenceDeCommunicationAgen47Toulouse31;




