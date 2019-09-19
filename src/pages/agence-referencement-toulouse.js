import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";

import Bg from "../images/background-agence-referencement-toulouse.jpg";
import bgDev from '../images/bg-dev.jpg';
import bureau from '../images/bureau2-min.jpg';
import fondbloc from '../images/background.jpg';
import mac from "../images/mac-agence.png";
import seo from "../images/seo-background.jpg";
import sea from "../images/sea-background.jpg";

import web from '../images/web.svg';
import bullhorn from '../images/bullhorn.svg';

class AgenceReferencementToulouse extends React.Component {

    constructor(props) {
        super(props);
    }

render() {
    return (
        <Layout location={this.props.location}>

            <SEO
                title="Agence Référencement Toulouse (31) - Agence Web Linkweb"
                description="Développez votre visibilité avec la mise en place d'une stratégie de référencement sur-mesure. Linkweb vous accompagne pour atteindre vos objectifs."
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
                <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{backgroundColor: 'rgb(110, 110, 110,0.9)', backgroundBlendMode:'multiply', backgroundImage: 'url(' + Bg + ')'}}>
                    <h1 data-aos="fade-up" data-aos-delay="500" className="century text-7xl text-center text-white">
                    Référencement Web Toulouse<span className="text-bleu">/</span>Agen
                    </h1>
                    <h3 className="italic text-2xl text-white">Agence de référencement / Toulouse</h3>
                    <RoundButton url="https://linkweb.fr/contact-agence-web-toulouse/" text="Je veux developper ma visibilité en ligne" />
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                    <h2 data-aos='fade-right' className="text-center text-4xl century">
                    Choisissez votre prestation
                    </h2>
                    <hr className="blue"></hr>
                    
                </section>
                <section className="flex-wrap flex w-full max-w-5xl mx-auto py-2 my-2 ">
                    <div className=" font-bold	w-1/2 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white bg-bleu" style={{backgroundColor: 'rgb(55, 197, 231,0.8)', backgroundBlendMode:'multiply', backgroundImage: 'url(' + fondbloc + ')',backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}} data-aos="zoom-in">
                        <h3 className="text-2xl century pb-6" ><span className="text-black">/</span>Référencement Naturel SEO</h3>
                        <RoundButton color="black" url="#" text="Je fais le choix du SEO" />
                    </div>
                    <div className="font-bold	w-1/2 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white bg-black" style={{backgroundColor: 'rgb(0, 0, 0,0.8)', backgroundBlendMode:'multiply', backgroundImage: 'url(' + fondbloc + ')', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center' }} data-aos="zoom-in" data-aos-delay="200">
                        <h3 className="text-2xl century pb-6" ><span className="text-bleu">/</span>Référencement Payant SEA</h3>
                        <RoundButton url="#" text="Je fais le choix du SEA" />
                    </div>

                </section>
                <section className="flex w-full  mx-auto px-0 py-6 my-4">

                    <div className="w-1/2 max-w-3xl px-12 py-12" >
                        <h3 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in" style={{paddingTop:'60px'}}>
                            <span className="text-bleu">/</span>NOUS METTONS EN PLACE VOTRE STRATÉGIE DE RÉFÉRENCEMENT LOCAL OU NATIONAL
                        </h3>
                        <br />
                        <p data-aos='fade-bottom' style={{paddingTop:'20px'}}>
                        Référencer son site, c’est donner vie à sa communication digitale pour rendre son activité visible. Nous mettons tout en oeuvre pour vous apporter un site internet à votre image grâce à la création de contenu de qualité. <br/>
                        <br/>
                        Audit technique, analyse des statistiques via les outils Google, nous effectuons le nécessaire pour vous permettre d’obtenir plus de trafic organique via les moteurs de recherche et générer des ventes.<br/>
                        <br/>
                        En tant que spécialiste du référencement, notre agence SEO/Google Adwords à Toulouse, fait de votre site une référence pour Google. Affinez votre image de marque grâce à un contenu éditorial sur-mesure.<br/>
                        </p>
                        
                    </div>
                    <div className="w-1/2" style={{backgroundBlendMode:'multiply', backgroundImage: 'url(' + bureau + ')', backgroundPosition:'center' }}>
                    </div>
                </section>
                <section className="flex w-full  mx-auto px-0 py-6 my-4">
                    <div className="w-1/2 ">
                        <img src={mac} />
                    </div>
                    <div className="w-1/2 max-w-3xl px-12 py-12" >
                        <h3 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in" style={{paddingTop:'250px'}}>
                            <span className="text-bleu">/</span>OBTENIR UNE MEILLEURE VISIBILITÉ GRÂCE AU RÉFÉRENCEMENT
                        </h3>
                        <br />
                        <p data-aos='fade-bottom' style={{paddingTop:'20px'}}>
                        Inclure le référencement de site web dans sa stratégie digitale.<br/>
                        <br/>
                        En création site web ou en refonte de site internet, il est nécessaire de mettre en place un audit de référencement (audit SEO) afin de déterminer les besoins de votre site internet, pour choisir les bons mots-clés et décliner la stratégie web à mettre en place en fonction de la notoriété ou visibilité souhaitée et du contexte concurrentiel.<br/>
                        </p>
                        
                    </div>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                    <h3 data-aos='fade-right' className="text-center text-3xl century">
                        Vous avez dit <span className="text-bleu">référencement</span> ?
                    </h3>
                    <hr className="blue"></hr>

                </section>
                <section className="flex w-full  mx-auto px-0 py-6 my-4" style={{marginTop:'0px', marginBottom:'0px'}}>
                        <div className="w-1/2 bg-bleu" style={{backgroundColor: 'rgb(55, 197, 231,0.4)', backgroundBlendMode:'multiply', backgroundImage: 'url(' + seo + ')', padding:'130px', color:'white'}} data-aos="zoom-in">
                            <h3 className="text-2xl century pb-6" style={{fontSize:'2.5em'}}>Search Engine Optimization (SEO)</h3>
                            <br/>
                            <p style={{fontSize:'1em'}}>
                            Faire appel à une agence référencement naturel, c’est faire le choix d’un partenaire pour l’avenir. Il se distingue du SEA de part le fait qu’il ne correspond pas à l’achat publicitaire. La stratégie de référencement naturel a plusieurs objectifs : acquisition de trafic, visibilité, e-réputation.<br/>
                            <br/>
                            Plusieurs techniques de référencement SEO existent pour positionner son site internet dans les premiers résultats de première page ou en première position des SERP de Google et doubler vos concurrents: netlinking, (backlinks) maillage interne, content marketing, optimisation SEO du site internet. Augmentez votre popularité grâce aux optimisations qui rendront votre site internet visible.
                            </p>
                        </div>
                        <div className="w-1/2 bg-black" style={{backgroundColor: 'rgb(0, 0, 0,0.4)', backgroundBlendMode:'multiply', backgroundImage: 'url(' + sea + ')', padding:'130px', color:'white' }} data-aos="zoom-in" data-aos-delay="200">
                            <h3 className="text-2xl century pb-6" style={{fontSize:'2.5em'}}>Search Engine Advertising (SEA)</h3>
                            <br/>
                            <p style={{fontSize:'1em'}}>Nous vous accompagnons dans le référencement Google Ads de votre site vitrine ou e-commerce. Référencer son site et apparaître en première position sur Google mérite un investissement conséquent en temps, mais aussi en argent. Mener une campagne, définir une annonce, ajuster la stratégie, sont autant de tâches qui incombent au référencement payant pour obtenir un retour sur investissement.<br/>
                            <br/>
                                Pour acheter de l’espace publicitaire sur Internet, le recours à un référenceur est recommandé. Accédez à une visibilité sans limite en vous confrontant à la densité concurrentielle du marché. Gagnez des parts de marché grâce à des publications très ciblées qui vous donneront visibilité et retour sur investissement.  </p>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                    <h2 data-aos='fade-right' className="text-center text-3xl century">
                    Visualiser son projet web dans sa <span className="text-bleu">globalité</span> ?
                    </h2>
                    <hr className="blue"></hr>

                </section>
                <section className="flex flex-1 max-w-6xl mx-auto home-step mt-24 mb-12 px-12">
                    <p>Optimiser le référencement de son site, en naturel ou sponsorisé, s’inscrit dans la continuité de la création du site. C’est pourquoi, tout doit être pensé, de la conception du site du point de vue technique, jusqu’à l’arborescence afin d’attirer des clients potentiels.<br/>
                    <br/>
                        Nos consultants, à Toulouse, vous apportent une expertise qualifiée pour vous accompagner au mieux dans le développement et l’optimisation de votre site internet. Force de proposition, nous mettons votre site au goût du jour grâce à une veille digitale permettant de suivre les dernières tendances.<br/>
                    <br/>
                        Néanmoins, en référencement naturel SEO, rien n’est acquis : il s’adapte à l’évolution des aglorithmes de Google. C’est en quoi, il est nécessaire de faire preuve de régularité et rigueur quant au travail à lui apporter. Notre rôle, en tant que consultant SEO, est d’apporter une réponse concrète aux fluctuations engendrées par les évolutions de Google.
                        </p>
                </section>
                <section className=" w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bgDev + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                    <div className="max-w-5xl mx-auto flex items-center">
                        <h3 data-aos='fade-right' className="text-center text-white text-4xl century">
                            <span className="text-bleu">/</span>Vous souhaitez obtenir un devis référencement ou un complément d’information en vue de créer votre site web ?


                        </h3>

                    </div>

                    <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                        <RappelForm />
                    </div>

                    <div className="max-w-6xl mx-auto flex items-start text-center my-12">
                        <div className="w-1/2 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="400">

                            <img src={web} width="80px" />
                            <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT NATUREL</p>
                        </div>
                        <div className="w-1/2 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="600">
                            <img src={bullhorn} width="80px" />
                            <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT SEA</p>
                        </div>
                    </div>
                </section>
                <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                    <h3 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                        <span className="text-bleu">/</span>Vous souhaitez plus d’informations sur nos prestations à Toulouse ?
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
query lastsThreePostsAgenceref {
allWordpressPost(limit: 3) {
  edges {
    node {
      id
      title
      slug
      modified(locale: "fr", formatString: "dd MM YYYY")
      link
      featured_media {
        source_url
      }
    }
  }
}
}


`
export default AgenceReferencementToulouse;