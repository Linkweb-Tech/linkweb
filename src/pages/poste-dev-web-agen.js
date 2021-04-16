import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import RoundButton from "../components/roundButton";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import "../scss/global.scss";
import bgDev from '../images/cta-background-agence-web.jpg';
import bureau from '../images/bureau2-min.jpg';

import web from '../images/web.svg';
import laptop from '../images/laptop.svg';
import bullhorn from '../images/bullhorn.svg';


class PosteDevWebAgen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Web Agen et Toulouse - Mentions Légales - Agen - Linkweb"
                    description="Mentions Légales - Consulter les mentions légales de l'Agence Web Linkweb à Agen (47) : création de site internet et référencement à Agen et Toulouse (31)."
                    url="https://linkweb.fr/mentions-legales/"
                    nom="Mentions Légales"
                    slug="mentions-legales/"                    
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
                    <section className="w-full bloctitrescreen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{backgroundPosition: 'center', backgroundColor:`#6e6e6e`, backgroundImage: 'url(' + bureau + ')', backgroundBlendMode: `multiply` }}>
                        <h1 data-aos="fade-up" data-aos-delay="500" className="century text-5xl sm:text-6xl text-center text-white">
                            Poste développeur web à Agen
                        </h1>
                        <h3 className="italic text-lg sm:text-xl md:text-2xl text-white mt-3 text-center">Poste à pourvoir</h3>
                        <RoundButton url="/contact-agence-web-toulouse/" text="Contactez-nous" />
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                        Description du poste
                        </h2>
                        <hr className="blue"></hr>
                    
                   <br/>
                    <p>Dans le cadre du développement de l’équipe technique de l’agence Linkweb basée à Agen (47), nous sommes à la recherche d’un développeur back-end.

                        Intégré à l’équipe technique, vous serez en charge de participer au développement de nos différents projets web.

                        Vous contribuerez à l’élaboration de fonctionnalités pour des sites administrables ou e-commerce ainsi qu’au développement de plateformes de type intranet ou collaboratif.

                        <h4 data-aos='fade-right' className="text-center text-xl century my-5">Compétences recherchées :</h4>

                        <ul>
                            <li>– Maitrise des langages PHP / SQL</li>
                            <li> – Maitrise de la programmation orientée objet</li>
                            <li> – Maitrise des API d’au moins un CMS du marché (WP, Drupal)</li>
                            <li> – Développement de plugins</li>
                            <li> – Sensibilisation aux outils de versioning notamment GIT</li>
                            <li> – Connaissance d’un framework php (Laravel, Symfony)</li>

                        </ul>
                        <br/>
                      
             
                        

                        <RoundButton url="/contact-agence-web-toulouse/" text="Postulez à cette offre" />

                        </p>
                    <p className="text-md text-center py-12 century text-justify" style={{textAlignLast:'center'}}>Le site <b>linkweb.fr</b> ne contrôle pas les sites en connexion avec le sien, et ne saurait donc être responsable de leur contenu. Les risques liés à l’utilisation de ces sites incombent pleinement à l’utilisateur. Il se conformera à leurs conditions d’utilisation.</p>

                   </section>
                  
                {/* </PageTransition> */}
            </Layout>
        );
    }
};

export default PosteDevWebAgen;




