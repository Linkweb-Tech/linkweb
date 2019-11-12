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
                keywords={[`Agence Référencement Toulouse`, `Agence de Référencement à Toulouse`, `Référencement Naturel Toulouse`, `Agence Adowrds Toulouse`]}
                url="https://linkweb.fr/agence-referencement-toulouse/"
                nom="Agence de Référencement"
                slug="agence-referencement-toulouse/"
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
                <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{backgroundColor: 'rgb(110, 110, 110,0.9)', backgroundBlendMode:'multiply', backgroundImage: 'url(' + Bg + ')'}}>
                    <h2 data-aos="fade-up" data-aos-delay="500" className="century text-4xl sm:text-6xl text-center text-white">
                    Référencement Web Toulouse<span className="text-bleu">/</span>Agen
                    </h2>
                    <h1 className="italic text-lg sm:text-2xl text-white pt-3">Agence de référencement Toulouse / Agen</h1>
                    <RoundButton url="/contact-agence-web-toulouse/" text="Je veux developper ma visibilité en ligne" />
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                    <h2 data-aos='fade-right' className="text-center text-4xl century">
                    Choisissez votre prestation
                    </h2>
                    <hr className="blue"></hr>
                    
                </section>
                <section className="flex-wrap flex w-full max-w-5xl flex-col md:flex-row lg:flex-row mx-auto py-2 my-2 ">
                    <div className=" font-bold w-full	md:w-1/2  px-6 flex justify-center items-center flex-col min-h-400 text-center text-white bg-bleu" style={{backgroundColor: 'rgb(55, 197, 231,0.8)', backgroundBlendMode:'multiply', backgroundImage: 'url(' + fondbloc + ')',backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}} data-aos="zoom-in">
                        <h3 className="text-2xl century pb-6" ><span className="text-black">/</span>Référencement Naturel SEO</h3>
                        <RoundButton color="black" url="/referencement-de-site-internet-47-31/" text="Je fais le choix du SEO" />
                    </div>
                    <div className="font-bold	md:w-1/2 w-full px-6 flex justify-center items-center flex-col min-h-400 text-center text-white bg-black" style={{backgroundColor: 'rgb(0, 0, 0,0.8)', backgroundBlendMode:'multiply', backgroundImage: 'url(' + fondbloc + ')', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center' }} data-aos="zoom-in" data-aos-delay="200">
                        <h3 className="text-2xl century pb-6" ><span className="text-bleu">/</span>Référencement Payant SEA</h3>
                        <RoundButton url="/agence-adwords-47-31/" text="Je fais le choix du SEA" />
                    </div>

                </section>
                <section className="flex-col lg:flex-row   flex w-full   mx-auto px-0 py-6 my-4">
                    <div className="w-full flex-col lg:w-1/2 flex-row">
                        <img src={bureau}  alt="Référencement Toulouse" style={{position:'center'}}/>
                    </div>
                    <div className="lg:w-1/2 w-full max-w-3xl px-12 py-12" >
                        <h2 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in" style={{paddingTop:'60px'}}>
                            <span className="text-bleu">/</span>NOUS METTONS EN PLACE VOTRE STRATÉGIE DE RÉFÉRENCEMENT LOCAL OU NATIONAL
                        </h2>
                        <br />
                        <p className="text-justify pt-8" data-aos='fade-bottom'>
                        Référencer son site, c’est donner vie à sa <strong>communication digitale</strong> pour rendre son activité visible. Nous mettons tout en oeuvre pour vous apporter un site internet à votre image grâce à la création de contenu de qualité. <br/>
                        <br/>
                        <strong>Audit technique</strong>, analyse des statistiques via les <strong>outils Google</strong>, nous effectuons le nécessaire pour vous permettre d’obtenir <strong>plus de trafic organique</strong> via les <strong>moteurs de recherche</strong> et générer des ventes.<br/>
                        <br/>
                        En tant que <strong>spécialiste du référencement</strong>, notre <strong>agence SEO/Google Adwords</strong> à <strong>Toulouse</strong>, fait de votre site une référence pour Google. Affinez votre <strong>image de marque</strong> grâce à un <strong>contenu éditorial sur-mesure</strong>.<br/>
                        </p>
                        
                    </div>
                </section>
                <section className="flex w-full flex-col lg:flex-row  mx-auto px-0 py-6 my-4">
                    <div className="w-full lg:w-1/2 ">
                        <img src={mac} alt="Agence de Référencement Toulouse"/>
                    </div>
                    <div className="w-full lg:w-1/2 max-w-3xl px-12 py-12" >
                        <h2 className="century capitalize text-2xl tracking-wider pb-6 lg:pt-64" data-aos="zoom-in">
                            <span className="text-bleu">/</span>OBTENIR UNE MEILLEURE VISIBILITÉ GRÂCE AU RÉFÉRENCEMENT
                        </h2>
                        <br />
                        <p className="text-justify pt-8" data-aos='fade-bottom'>
                        Inclure le <strong>référencement de site web</strong> dans sa <strong>stratégie digitale</strong>.<br/>
                        <br/>
                        En <strong>création site web</strong> ou en <strong>refonte de site internet</strong>, il est nécessaire de mettre en place un <strong>audit de référencement (audit SEO)</strong> afin de déterminer les besoins de <strong>votre site internet</strong>, pour choisir les bons <strong>mots-clés</strong> et décliner la <strong>stratégie web</strong> à mettre en place en fonction de la <strong>notoriété</strong> ou <strong>visibilité</strong> souhaitée et du <strong>contexte concurrentiel</strong>.<br/>
                        </p>
                        
                    </div>
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 pt-0 lg:pt-12 pb-0 my-2">
                    <h2 data-aos='fade-right' className="text-center text-3xl century">
                        Vous avez dit <span className="text-bleu">référencement</span> ?
                    </h2>
                    <hr className="blue"></hr>

                </section>
                <section className="flex-col lg:flex-row flex w-full  mx-auto px-0 py-6 my-4" style={{marginTop:'0px', marginBottom:'0px'}}>
                        <div className="w-full lg:w-1/2 bg-bleu" style={{backgroundColor: 'rgb(55, 197, 231,0.4)', backgroundBlendMode:'multiply', backgroundImage: 'url(' + seo + ')', color:'white'}} data-aos="zoom-in">
                            <h3 className="text-4xl pb-0 mb-0 md:text-2xl century p-10 pb-1 md:p-24">Search Engine Optimization (SEO)</h3>
                            <br/>
                            <p className="px-10 pb-24 pt-0 text-justify text-md">
                            Faire appel à une <strong>agence de référencement naturel</strong>, c’est faire le choix d’un partenaire pour l’avenir. Il se distingue du SEA de part le fait qu’il ne correspond pas à l’achat publicitaire. La <strong>stratégie de référencement naturel</strong> a plusieurs objectifs : <strong>acquisition de trafic</strong>, <strong>visibilité</strong>, <strong>e-réputation</strong>.<br/>
                            <br/>
                            Plusieurs <strong>techniques de référencement SEO</strong> existent pour <strong>positionner son site internet</strong> dans les <strong>premiers résultats de première page</strong> ou en <strong>première position des SERP de Google</strong> et doubler vos <strong>concurrents</strong> : <strong>netlinking (backlinks)</strong>, <strong>maillage interne</strong>, <strong>content marketing</strong>, <strong>optimisation SEO</strong> du site internet. Augmentez votre <strong>popularité</strong> grâce aux <strong>optimisations</strong> qui rendront votre site internet visible.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 bg-black" style={{backgroundColor: 'rgb(0, 0, 0,0.4)', backgroundBlendMode:'multiply', backgroundImage: 'url(' + sea + ')', color:'white' }} data-aos="zoom-in" data-aos-delay="200">
                            <h3 className="text-4xl pb-0 mb-0 md:text-2xl century p-10 pb-1 md:p-24">Search Engine Advertising (SEA)</h3>
                            <br/>
                            <p className="px-10 pb-24 pt-0 text-justify text-md">Nous vous accompagnons dans le <strong>référencement Google Ads</strong> de votre <strong>site vitrine</strong> ou <strong>e-commerce</strong>. <strong>Référencer son site</strong> et apparaître en <strong>première position sur Google</strong> mérite un investissement conséquent en temps, mais aussi en argent. Mener une campagne, définir une annonce, ajuster la stratégie, sont autant de tâches qui incombent au <strong>référencement payant</strong> pour obtenir un <strong>retour sur investissement</strong>.<br/>
                            <br/>
                                Pour acheter de l’espace publicitaire sur <strong>Internet</strong>, le recours à un <strong>référenceur</strong> est recommandé. Accédez à une <strong>visibilité</strong> sans limite en vous confrontant à la densité <strong>concurrentielle</strong> du marché. Gagnez des parts de marché grâce à des publications très ciblées qui vous donneront visibilité et <strong>retour sur investissement</strong>.  </p>
                        </div>
                    </section>
                    <section className=" w-full max-w-5xl w-full mx-auto px-0 md:px-4 pt-0 md:pt-12 pb-0 my-2">
                    <h2 data-aos='fade-right' className="text-xl md:text-3xl text-center century">
                    Visualiser son projet web dans sa <span className="text-bleu">globalité</span> ?
                    </h2>
                    <hr className="blue"></hr>

                </section>
                <section className="flex flex-1 max-w-6xl mx-auto home-step mt-12 md:mt-24 mb-12 px-12 text-justify">
                    <p><strong>Optimiser le référencement de son site</strong>, en <strong>naturel</strong> ou <strong>sponsorisé</strong>, s’inscrit dans la continuité de la <Link className="hover:text-bleu" to="/creation-de-site-internet-a-agen/"><strong>création du site</strong></Link>. C’est pourquoi, tout doit être pensé, de la <strong>conception du site</strong> du point de vue technique, jusqu’à l’<strong>arborescence</strong> afin d’attirer des <strong>clients potentiels</strong>.<br/>
                    <br/>
                    <strong>Nos consultants, à Toulouse</strong>, vous apportent une expertise qualifiée pour vous accompagner au mieux dans le <strong>développement</strong> et l’<strong>optimisation de votre site internet</strong>. Force de proposition, nous mettons votre site au goût du jour grâce à une veille digitale permettant de suivre les <strong>dernières tendances</strong>.<br/>
                    <br/>
                        Néanmoins, en <strong>référencement naturel SEO</strong>, rien n’est acquis : il s’adapte à l’évolution des <strong>aglorithmes de Google</strong>. C’est en quoi, il est nécessaire de faire preuve de régularité et rigueur quant au travail à lui apporter. Notre rôle, en tant que <strong>consultant SEO</strong>, est d’apporter une réponse concrète aux fluctuations engendrées par les évolutions de <strong>Google</strong>.
                    </p>
                </section>
                <section className=" w-full h-screen flex flex-col justify-center items-end px-4 pt-3 md:pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bgDev + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                    <div className="max-w-5xl mx-auto flex items-start md:items-center">
                        <h2 data-aos='fade-right' className="text-center text-white text-xl md:text-4xl century">
                            <span className="text-bleu">/</span>Vous souhaitez obtenir un devis référencement ou un complément d’information en vue de créer votre site web ?


                        </h2>

                    </div>

                    <div className="flex-col md:flex-row max-w-6xl mx-auto flex text-center mt-24 mb-12">
                        {/* <RappelForm /> */}
                        <RoundButton url="/contact-agence-web-toulouse/" text="Je veux developper ma visibilité en ligne" />
                    </div>

                    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start text-center my-12">
                        <div className="w-full sm:w-1/2 px-12 flex flex-col items-center justify-center my-3 sm:my-0 my-6" data-aos='zoom-in' data-aos-delay="400">

                            <img src={web} width="80px" alt="Référencement Toulouse" />
                            <p className="text-lg md:text-xl century text-white pt-3">RÉFÉRENCEMENT NATUREL</p>
                        </div>
                        <div className="w-full sm:w-1/2 px-12 flex flex-col items-center justify-center my-3" data-aos='zoom-in' data-aos-delay="600">
                            <img src={bullhorn} width="80px" alt="Référencement Toulouse" />
                            <p className="text-lg md:text-xl century text-white pt-3">RÉFÉRENCEMENT SEA</p>
                        </div>
                    </div>
                </section>
                <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                    <h3 className="century text-center text-xl md:text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                        <span className="text-bleu">/</span>Vous souhaitez plus d’informations sur nos prestations à Toulouse ?
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
query lastsThreePostsAgenceref {
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
export default AgenceReferencementToulouse;