import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import RoundButton from "../components/roundButton";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import Accordion from '../components/accordion';
import "../scss/global.scss";
import Bg from "../images/developpement-web-agen.jpg";



class Recrutement extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Recrutement - Agence Web Agen - Création Site Internet - Linkweb"
                    description="Vous êtes passionné(e) par le web et motivé(e) par le développement web ou le référencement naturel ? Votre profil nous intéresse. Contactez-nous."
                    keywords={[`Développeur Web Agen`, `Développement Agen`, `Référencement Agen`, `Rédaction Web Agen`]}
                    url="https://linkweb.fr/recrutement-creation-site-internet-agen/"
                    nom="Recrutement"
                    slug="recrutement-creation-site-internet-agen/"
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
                <section className="w-full bloctitrescreen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ backgroundPosition: 'center', backgroundColor: `#6e6e6e`, backgroundImage: 'url(' + Bg + ')', backgroundBlendMode: `multiply` }}>
                    <h1 data-aos="fade-up" data-aos-delay="500" className="century text-5xl sm:text-6xl text-center text-white">
                        Recrutement
                        </h1>
                    <h3 className="italic text-xl md:text-2xl text-white text-center">Vous êtes attiré par l’univers du digital ? La création de site internet n’a plus de secrets pour vous ?<br /> Découvrez nos offres d’emplois en développement et référencement.</h3>
                    <RoundButton url="/contact-agence-web-toulouse/" text="Votre profil nous intéresse !" />
                </section>
                <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                    <h2 data-aos='fade-right' className="text-center text-4xl century">
                        Nos offres d'emploi
                        </h2>
                    <hr className="blue"></hr>
                </section>
                <section className="tabPanel recrutement flex flex-1 w-full justify-end ml-0 mb-12">
                    <div className="w-full md:w-3/4 py-0 flex justify-end">
                        <Accordion>
                            <div className="w-full" label="RÉDACTEUR WEB / RÉFÉRENCEUR SEO">
                                <p>Description du poste :<br />
                                    <br />
                                        Intégré au sein du service référencement de l’Agence Linkweb, vous serez en charge d’assurer le référencement naturel d’un portefeuille client de profils variés (artisans, bases de loisirs, restaurants, …).<br />
                                    <br />
                                        Vous êtes passionné par l’univers du web, vous maitrisez le principe du référencement naturel et avez des bases en HTML/CSS. Vous savez utiliser le CMS WordPress et ses outils de travail de référencement naturel. Vous connaissez les règles et les techniques d’optimisation SEO et vous êtes en mesure de les appliquer.<br />
                                    <br />
                                        Vous adorez la rédaction, vous prenez plaisir à lire des articles sur de nombreux sujets, vous êtes curieux et vous voulez approfondir vos connaissances en rédaction de contenu optimisé. L’orthographe, la grammaire et la syntaxe n’ont aucun secret pour vous.<br />
                                    <br />
                                        Vous êtes intéressé par la gestion de la relation client, vous êtes capable d’effectuer un compte rendu téléphonique sur la visibilité du site avec le client, en fonction des différents critères d’analyses de positionnement et de popularité.<br />
                                    <br />
                                        Vous saurez être force de proposition dans le but d’améliorer la stratégie de communication en ligne du client.<br />
                                    <br />
                                        Des connaissances en community management seraient un plus.</p>
                                <br />
                                <p>Compétences recherchées</p>
                                <ul>
                                    <li>Des collègues sympas</li>
                                    <li>Du café et du thé</li>
                                    <li>Des chouquettes !</li>
                                    <li>Une Xbox</li>
                                    <li>…et des sourires</li>
                                </ul>
                                <section className="w-40">
                                    <RoundButton url="/contact-agence-web-toulouse/" text="Postuler" />
                                </section>
                            </div>
                            <div label="DÉVELOPPEUR WEB BACK-END">
                                <p>Description du poste :<br />
                                    <br />
                                    Dans le cadre du développement de l’équipe technique de l’agence Linkweb basée à Agen (47), nous sommes à la recherche d’un développeur back-end.<br />
                                    <br />
                                    Intégré à l’équipe technique, vous serez en charge de participer au développement de nos différents projets web.<br />
                                    <br />
                                    Vous contribuerez à l’élaboration de fonctionnalités pour des sites administrables ou e-commerce ainsi qu’au développement de plateformes de type intranet ou collaboratif.<br />
                                    <br />
                                    Voici les compétences nécessaires pour ce poste :<br />
                                    <br />
                                    – Maitrise des langages PHP / SQL<br />
                                    <br />
                                    – Maitrise de la programmation orientée objet<br />
                                    <br />
                                    – Maitrise des API d’au moins un CMS du marché (WP, Drupal)<br />
                                    <br />
                                    – Développement de plugins<br />
                                    <br />
                                    – Sensibilisation aux outils de versioning notamment GIT<br />
                                    <br />
                                    – Connaissance d’un framework php (Laravel, Symfony)
                                </p>
                                <p>Compétences recherchées :</p>
                                <ul>Des développeurs comme toi
                                   <li>3 écrans</li>
                                    <li>Du café mais pas de thé</li>
                                    <li>Des blagues un peu lourdes</li>
                                    <li>…et de la bonne humeur</li>
                                </ul>
                                <section className="w-40">
                                    <RoundButton url="/contact-agence-web-toulouse/" text="Postuler" />
                                </section>
                            </div>
                                <div label="DÉVELOPPEUR FULL STACK TOULOUSE">
                                    <p>Afin d’accompagner sa croissance dynamique, l’agence Linkweb Marchés Publics, filiale du Groupe Linkweb, située au centre-ville de Toulouse souhaite renforcer son équipe actuelle.</p>
                                    <br/>
                                    <p>Nous recherchons des développeurs web passionnés.</p>
                                    <br/>
                                    <p>Le développement actuel de l'entreprise, issue d'un groupe solide et structuré, offre de réelles possibilités d'évolution de carrière.</p>
                                    <br/>
                                    <p>Nous sommes spécialisés dans les prestations de développement sur mesure et de mise en œuvre d’applicatifs métiers, pour le compte d’institutions publiques (Régions, Départements, Universités, État, etc.)</p>
                                    <br/>
                                    <p>Afin d'être à l'aise et autonome dans les différents projets qui vous seront confiés, il est nécessaire de disposer des aptitudes suivantes :</p>
                                    <br/>
                                    <ul>
                                        <li>– Maitrise du langage PHP et de la programmation orientée objet ;</li>
                                        <li>– Maitrise du langage Javascript ;</li>
                                        <li>– Connaissance de frameworks PHP, tel que Symfony ;</li>
                                        <li>– Connaissance de frameworks Javascript, tel que Vue JS ;</li>
                                        <li>– Connaissance de frameworks CSS, tels que Bootstrap ;</li>
                                        <li>– Utilisation de la solution GIT ;</li>
                                        <li>– Autonomie ;</li>
                                        <li>– Communication avec les équipes (échanges avec le CTO et les autres développeurs) ;</li>
                                        <li>– Bon état d'esprit (Linkweb est une entreprise à taille humaine, très attachée à la qualité des relations entre ses équipes et ses différents partenaires) ;</li>
                                    </ul>
                                    <br/>
                                    <p>Au sein du service Développement Web, vous serez amené à concevoir des plateformes et applications web pour le compte de nos clients du secteur public.</p>
                                    <br/>
                                    <p>Vous interviendrez également sur des environnements web existants, dans le cadre de nos contrats de tierce maintenance applicative.</p>
                                    <br/>
                                    <p>La majeure partie des solutions que nous développons ou que nous maintenons, sont conçues sur le CMS Drupal, versions 8 et 9.</p>
                                    <br/>
                                    <p>À ce titre, nous utilisons les technologies telles que Symfony, VueJS, Twig, Bootstrap, etc.</p>
                                    <br/>
                                    <p>Si vous êtes passionné par le Web, le développement et les nouvelles technologies, vous pourrez au sein de notre équipe et sous la supervisons du CTO exprimer pleinement votre talent et votre créativité.</p>
                                    <br/>
                                    <p>Vous vous reconnaissez dans cette annonce ? N’attendez plus pour nous contacter, afin de convenir d’un entretien et démarrer l’aventure Linkweb !</p>
                                    <br/>
                                    <p>Au plaisir de vous retrouver à la réunion de briefing du lundi, autour d'un café... d'un clavier.</p>       
                                    <br/>
                                    <p>Salaire motivant selon profil, évolution de carrière au sein du groupe.</p>                  
                                    <section className="w-40">
                                        <RoundButton url="/contact-agence-web-toulouse/" text="Postuler" />
                                    </section>
                                </div>
                            </Accordion>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-3 mb-3">
                    <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                        <span className="text-bleu">/</span>Les dernières actualités
                        </h3>
                    <hr className="blue"></hr>
                    <LastPosts lastposts={this.props.data.allWpPost.edges} />
                    <Link className="bg-bleu text-white px-16 py-3 block mx-auto hover:bg-black font-normal" to="/actualite-digitale/">Voir l'actualité digitale</Link>
                    <br />
                </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsRecrutement {
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
export default Recrutement;




