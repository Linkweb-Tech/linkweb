import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class webmarketing extends Component {

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

                <section className="w-full century mt-40 flex flex-col items-center justify-start bg-bleu" style={{ background: '#00000073 url(' + Bg + ')', minHeight: '300px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                    <div className="topdef">
                        <span className="text-center text-xl font-bold text-white">Définition</span>
                    </div>
                    <div>
                        <h1 data-aos="fade-up" className="century text-5xl sm:text-6xl text-bleu text-center text-white mt-4 lg:mt-6">
                            Webmarketing
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que le Webmarketing ?</h2>
                        <br />
                        <p>
                            Le <strong>web marketing</strong> est une discipline qui désigne l’ensemble des <strong className="font-normal">pratiques promotionnelles (et publicitaires)</strong> mises en œuvre par une annonce via l’utilisation d’<strong className="font-normal">outils en ligne</strong>. Le <strong className="font-normal">webmarketing</strong> est une notion large pour désigner tous les <strong className="font-normal">leviers</strong> permettant de remplir des objectifs relevant d’une <strong className="font-normal">stratégie digitale</strong>. Les <strong className="font-normal">réseaux sociaux</strong> (<strong className="font-normal">community management</strong>), l'affiliation, le <strong className="font-normal">référencement naturel (SEO)</strong>, l’<strong className="font-normal">emailing</strong>, la <strong className="font-normal">sponsorisation</strong> ou le <strong className="font-normal">content marketing</strong> sont des exemples de domaines qui prennent part au webmarketing et relèvent de la <strong className="font-normal">communication digitale</strong>.<br />
                            <br />
                                L’ensemble des actions menées <strong className="font-normal">sur le web</strong>, de la <strong className="font-normal">création de site web</strong> à la définition de <strong className="font-normal">stratégie social media</strong>, doivent permettre de remplir des objectifs qui relèvent de la <strong>notoriété</strong>, de la <strong>visibilité</strong>, de l’<strong>image de marque</strong> ou de la <strong>fidélisation</strong>. C’est pourquoi mettre en place une <strong className="font-normal">stratégie marketing digital</strong> demande une certaine expertise pour utiliser les différents outils à bon escient. Lancer une campagne de <strong className="font-normal">liens sponsorisés (Adwords)</strong> demande une certaine préparation en amont, tout autant que mener une campagne de <strong className="font-normal">mailing</strong> par exemple.<br />
                            <br />
                                Notre <strong><Link className="text-bleu hover:text-black font-bold" to="/creation-site-internet-toulouse/">solution de création de site internet à Toulouse</Link></strong> s’inscrit dans un <strong className="font-normal">projet web</strong> global qui doit vous permettre de tirer profit d’<strong className="font-normal">actions marketing</strong> adaptées à vos projets. La mise en place d’une <strong className="font-normal">stratégie web</strong> basée sur la <strong className="font-normal">création d’un site internet</strong> peut permettre de :<br />
                            <br />
                            <ul className="list-disc pl-12">
                                <li>rendre visible <strong className="font-normal">votre site web</strong> grâce au référencement,</li>
                                <li><strong className="font-normal">générer du trafic sur votre site internet</strong> vitrine ou <strong className="font-normal">e commerce</strong>,</li>
                                <li>ou bien augmenter votre <strong className="font-normal">taux de conversion</strong> grâce à un <strong className="font-normal">ciblage</strong> pertinent.</li>
                            </ul>
                            <br />
                                En somme, la <strong className="font-normal">création de site web</strong> appuyée par le <strong className="font-normal">référencement naturel</strong> fait partie des <strong className="font-normal">techniques de marketing web</strong> qui permettent à une entreprise de tirer profit de l’utilisation des <strong className="font-normal">outils digitaux</strong> pour générer de la croissance. Le <strong className="font-normal">digital marketing</strong> a pour objectif de procurer un <strong className="font-normal">retour sur investissement</strong> via un <strong className="font-normal">projet digital</strong> taillé sur-mesure. L’objectif est de capter de <strong className="font-normal">nouveaux clients</strong> régulièrement grâce à des actions pensées spécialement pour l’<strong className="font-normal">acquisition de trafic</strong> et la conversion. Définir une <strong className="font-normal">stratégie de communication web</strong> qui se déploie via plusieurs canaux et sur plusieurs supports digitaux permet d’attirer de nombreux prospects sur vos contenus pertinents.<br />
                        </p>
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Quels sont les outils employés dans les stratégies webmarketing ?</h2>
                        <br/>
                        <p>
                        Il existe de nombreux <strong className="font-normal">leviers digitaux dans le webmarketing</strong>, ils sont activés en fonction du secteur d’activité du professionnel et de ses offres pour apporter une meilleure visibilité aux professionnels présents. De nombreuses solutions pour <strong className="font-normal">être bien visible dans les résultats des moteurs de recherche</strong> existent. Définir une <strong className="font-normal">stratégie digitale sur-mesure</strong> passe par la sélection des bons outils, à savoir, les médias sociaux, le netlinking, l’e-mailing, le réseau display de Google qui viennentt compléter l’action des emails et de la newsletter, pour fidéliser.<br/>
                        <br/>
                        Pour bien utiliser ces <strong className="font-normal">outils de marketing internet</strong>, définir ses clients cibles est une des étapes incontournables de la stratégie de marketing digital. Le choix du plan marketing et des <strong className="font-normal">leviers d’acquisition de trafic</strong> se fait à partir des besoins que présentent les entreprises afin de produire un maximum de résultats pertinents. Les outils marketing sont sélectionnés avec soin en vue d’améliorer la relation-client et les tunnels de conversions pour mener une campagne web marketing percutante.<br/>
                        <br/>
                        Les métiers du web sont importants pour appréhender les <strong className="font-normal">différents canaux digitaux</strong> et l’ensemble des techniques pour développer de techniques de marketing opérationnel. Par l'intermédiaire d'une agence spécialisée en marketing ou d'un consultant webmarketing, chacun est en mesure d’<strong className="font-normal">élaborer un plan de communication digitale</strong> efficace pour déployer la notoriété d’une entreprise et lui permettre d’<strong className="font-normal">être visible</strong> sur des supports variés.
                        </p>
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Webmarketing : une discipline en perpétuelle évolution</h2>
                        <br/>
                        <p>
                            Pour générer des résultats importants pour une entreprise, cette discipline doit être rigoureusement exploitée. Aussi, il faut avoir conscience que les différentes techniques citées dans le <strong className="font-normal">marketing digital</strong> sont basées sur les comportements des utilisateurs. Cela explique qu’il pourra exister de larges fluctuations entre les stratégies d’hier, d’aujourd’hui et de demain. À ce niveau, il est indispensable de <strong className="font-normal">mener une veille sur le sujet</strong>. Cela est bénéfique à plusieurs niveaux : 
                            <br/><br/>
                            <ul className="list-disc pl-12">
                                <li>Pour détecter les nouveaux acteurs présents sur le marché,</li>
                                <li>Suivre les dernières tendances,</li>
                                <li>Découvrir de <strong className="font-normal">nouveaux outils</strong>,</li>
                                <li>Échanger avec des acteurs du même secteur professionnel.</li>
                            </ul>
                            <br/>
                            Il faut savoir qu’il existe plusieurs moyens de mener sa veille. Certains <strong className="font-normal">réseaux sociaux</strong> pourront être très utiles comme Twitter (et notamment Tweetdeck), LinkedIn, voire Reddit. D’autres outils comme le forum spécialisé, l’agrégateur de contenu ou le <strong className="font-normal"><a href="https://le-consultant-digital.com/" className="text-bleu hover:text-black font-bold" target="_blank" rel="noopener noreferer">blog webmarketing</a></strong> pourront être utilisés. Ces outils sont parfaits pour centraliser l’information. En réalité, il peut s’avérer judicieux de les combiner. En effet, détecter les bons outils est la première étape pour une <strong className="font-normal">veille digitale</strong> efficace.
                            <br/><br/>
                            Une fois ce travail effectué, vous ne perdrez plus de vue les informations qui comptent pour vous. Toutefois, il sera nécessaire de garder du recul vis-à-vis de l’actualité pour mettre en perspective les dernières informations avec vos <strong className="font-normal">connaissances acquises</strong> dans votre domaine de prédilection.
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
                        <h3 className="font-bold">Les notions liées au Webmarketing :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/"><li>UI Design</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/"><li>Framework</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/"><li>Front-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/back-end/"><li>Back-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/"><li>HTML/CSS</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/refonte-site-internet/"><li>Refonte site internet</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/"><li>Maquette de site web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/nom-de-domaine/"><li>Nom de domaine</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/"><li>Développement Web</li></Link>
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
export default webmarketing;




