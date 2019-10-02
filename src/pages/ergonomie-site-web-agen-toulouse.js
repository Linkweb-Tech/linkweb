import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";

import Bg from "../images/ergonomie-web.jpg";
import imac from "../images/ecran-imac.jpg";
import bgDev from '../images/bg-dev.jpg';
import blocint from '../images/ergonomie-site-web.jpg';
import blocint1 from '../images/devices-ergonomie.png';
import ux from '../images/ux-design.jpg';
import ui from '../images/ui-design.jpg';
import ordinateurs from '../images/ordinateurs.jpg';

import web from '../images/web.svg';
import laptop from '../images/laptop.svg';
import bullhorn from '../images/bullhorn.svg';

class ErgonomieToulouse extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Création Site Internet Agen - Toulouse - Agence Web Linkweb"
                    description="Linkweb, agence web située à Agen (47) et Toulouse (31), est spécialisée dans la création et gestion de sites internet (e-commerce, administrable, vitrine)."
                    keywords={[`Création site internet ergonomique Agen`, `Création site internet Agen`, `Creation site internet Agen`, `Création site web Agen`]}
                    url="https://linkweb.fr/ergonomie-site-web-agen-toulouse"
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
                    <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{backgroundColor:`#6e6e6e`, backgroundImage: 'url(' + Bg + ')', backgroundBlendMode: `multiply` }}>
                        <h1 data-aos="fade-up" data-aos-delay="500" className="century text-3xl sm:text-6xl text-center text-white">
                        Créer un site web professionnel Ergonomique
                        </h1>
                        <h3 className="italic text-lg lg:text-2xl text-white mt-6">Ergonomie n.f. : étude des relations entre l’être humain et la machine.</h3>
                        <RoundButton url="/contact-agence-web-toulouse" text="Je souhaite créer mon site internet" />
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                    <p className="text-justify" style={{textAlignLast:`center`}}>
                    <strong>Créer un site internet professionnel</strong> fait appel à des <strong>connaissances techniques</strong> et à une réflexion très précises en termes de création et <strong>gestion de contenu</strong>, mais aussi en termes de <strong>responsive web design</strong>. En tant qu’<strong>agence de création de site internet à Agen et Toulouse</strong>, faire un <strong>site internet vitrine</strong> ou <strong>e-commerce</strong> sur-mesure fait partie de nos objectifs.</p>
                    </section>
                    <section className="mt-3 md:mt-6 p-6 md:p-24 bg-cover" style={{backgroundColor:`rgb(255, 255, 255, 0.8)`, backgroundImage: 'url(' + blocint + ')', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', backgroundBlendMode: `overlay`, marginTop:'50px', color:'black'}}>
                            <br />
                        <h2 data-aos='fade-right' className="text-center text-2xl md:text-4xl century">Créer un site internet ergonomique pour une interface intuitive</h2>
                            <br />
                            <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                            <p className="md:text-xl" style={{textAlign:'justify', textAlignLast:`center`}}>
                                Le point central de la <Link className="hover:text-bleu" to="/creation-de-site-internet-a-agen"><strong>création de votre site internet</strong></Link> professionnel reste l’<strong>ergonomie</strong>. Un <strong>site</strong> ayant un confort dans l’exécution des actions et permettant un accès intuitif à l’information recherchée <strong>permet de créer</strong> beaucoup plus d’interactions et a beaucoup plus de chances d’avoir du succès. C’est pourquoi la <strong>conception du site</strong> doit être réalisée en conséquence.
                                 <strong> Et c’est ce que nous souhaitons, votre réussite construit la nôtre.</strong></p>
                            </section>
                    </section>

                    <section className="flex flex-col lg:flex-row w-full mx-auto px-0 my-0">
                        <div className="w-full lg:w-1/2 bg-bleu p-16 xl:p-32" style={{backgroundImage: 'url(' + ui + ')', color:'white'}} data-aos="zoom-in">
                            <h3 className="text-lg lg:text-2xl century pb-6">L’interface utilisateur (UI) : ce que le visiteur voit</h3>
                            <br/>
                            <ul className="text-lg lg:text-2xl">
                                <li style={{listStyleType: 'disc'}}><strong>Responsive design</strong></li>
                                <li style={{listStyleType: 'disc'}}>Esthétisme</li>
                                <li style={{listStyleType: 'disc'}}>Équilibre</li>
                                <li style={{listStyleType: 'disc'}}>Iconographie pertinente</li>
                                <li style={{listStyleType: 'disc'}}><strong>Hiérarchisation des informations</strong></li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 bg-black p-16 xl:p-32" style={{backgroundImage: 'url(' + ux + ')', color:'white'}} data-aos="zoom-in" data-aos-delay="200">
                            <h3 className="text-lg lg:text-2xl century pb-6">L’expérience utilisateur (UX) : ce que le visiteur fera</h3>
                            <br/>
                            <ul className="text-lg lg:text-2xl">
                                <li style={{listStyleType: 'disc'}}>Prise en main</li>
                                <li style={{listStyleType: 'disc'}}>Navigation aisée</li>
                                <li style={{listStyleType: 'disc'}}>Facilité d'accès à l'information</li>
                                <li style={{listStyleType: 'disc'}}>Accessibilité médias</li>
                            </ul>
                        </div>
                    </section>
                    <section className="flex w-full mx-auto flex-row justify-end px-0 lg:px-6 py-8 lg:py-12 bg-cover bg-center text-white" style={{backgroundColor:`rgb(41, 41, 41, 0.8)`, backgroundImage: 'url(' + blocint1 + ')',backgroundBlendMode: `overlay`, backgroundRepeat:'no-repeat'}}>

                        <div className="w-full lg:w-1/2 max-w-3xl px-10 lg:px-12 py-12" >
                            <h2 className="century text-lg lg:text-2xl tracking-wider pb-6 text-center" data-aos="zoom-in">
                                Créer un site professionnel qui s’adapte à tous les supports
                            </h2>
                            <br/>
                            <p className="text-lg lg:text-2xl" data-aos='fade-bottom' style={{textAlign:'center'}}>
                            71% des <strong>recherches sur internet</strong> en France sont effectuées via un mobile… Le comportement de votre futur <strong>site internet</strong> s’adaptera à toutes les tailles d’écrans. Il est indispensable que votre site soit un <strong>site responsive</strong> et permette une lecture fluide à vos utilisateurs consultant vos <strong>pages web</strong> sur leurs smartphones. <strong>Tous nos sites sont adaptatifs selon le Responsive Design…</strong>
                            </p>
                            <br/>
                            <p className="text-sm lg:text-2xl" data-aos='fade-bottom' style={{textAlign:'left'}}>
                            Comme dirait Buzz, vers l’infini et l’au-delà !
                            </p>
                            
                        </div>
                    </section>
                    <section className="flex w-full flex-col md:flex-row mx-auto p-0 mt-0">
                        <div className="w-full md:w-1/2  bg-bleu p-10 lg:p-24 text-lg lg:text-2xl text-white">
                            <p className="text-lg lg:text-2xl text-center" data-aos="zoom-in">
                            Les équipes de développeurs de l’agence Linkweb prennent en charge la totalité de la création de votre site internet sur-mesure. A travers votre identité visuelle, nous allons créer un webdesign unique, reflétant l’image de votre entreprise pour une véritable carte de visite en ligne. Techniciens passionnés, nos développeurs mettront du cœur à l’ouvrage pour vous proposer un projet web cohérent et créer votre site web pour affirmer votre image de marque et séduire vos visiteurs.                            </p>
                            <br/>
                        </div>
                        <div className="w-full md:w-1/2 bg-bleu bg-cover bg-center text-white" style={{backgroundImage: 'url(' + ordinateurs + ')', backgroundRepeat:'no-repeat', padding:'130px'}} data-aos="zoom-in">
                        
                        </div>
                    </section>
                    <section className="flex w-full flex-col md:flex-row  mx-auto px-0 py-0 my-0">
                        <div className="w-full md:w-1/2 bg-cover bg-center text-white" style={{backgroundImage: 'url(' + imac + ')', backgroundRepeat:'no-repeat'}} data-aos="zoom-in">
                        </div>
                        <div className="w-full text-white md:w-1/2 p-10 lg:p-24" style={{backgroundColor:'#2b2b2b'}}>
                            <p className="text-lg lg:text-2xl text-center" data-aos="zoom-in">
                            À travers l’utilisation de plusieurs langages de programmation web, nous mettrons en valeur les contenus de votre site internet sublimés par les couleurs de votre charte graphique, harmonieusement intégrées. Notre agence digitale est compétente pour développer votre stratégie de webmarketing à travers une communication visuelle originale favorisant votre image de marque.                            <br/>
                            </p>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        Créer un site <span className="text-bleu">administrable</span>
                        </h2>
                        <hr className="blue"></hr>

                    </section>
                    <section className="flex flex-col lg:flex-row flex-1 home-step my-12 xl:my-24 px-5 md:px-24">
                        <div className="w-full xl:w-1/3 one px-4">
                            <div className="flex items-center xl:items-start flex-col  xl:flex-row flex-1">
                                <div className="blackBulle my-6" data-aos="fade-up">1</div><br/>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>Maîtrisez
                                </h3>
                                <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                votre <strong>communication digitale</strong> commence par avoir la main sur le contenu que vous proposez. En tant que partenaire web, nous nous attachons à construire un <strong>site sur mesure</strong>, accessible et surtout administrable. En effet, il est possible, selon vos besoins, de vous permettre d’avoir la main sur la publication et sur les permissions réparties au sein de votre entreprise quant à la modification des contenus.
                                </div>
                                </section>
                            </div>
                            </div>
                            <div className="w-full xl:w-1/3 two px-4">
                            <div className="flex items-center xl:items-start flex-col  xl:flex-row flex-1">
                                <div className="blackBulle my-6" data-aos="fade-up">2</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>Gérez
                                </h3>
                                <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                les rôles et donnez la possibilité à vos collaborateurs d’agir efficacement et en toute simplicité. Ajouter des <strong>produits en ligne dans le cadre d’un site de vente</strong>, mettre à jour ses informations, réagir à l’actualité, sont tout autant de missions vous permettant d’améliorer et mettre à jour votre contenu.
                                </div>
                                </section>
                                </div>
                            </div>
                            <div className="w-full xl:w-1/3 three px-4">
                            <div className="flex items-center xl:items-start flex-col  xl:flex-row  flex-1">
                                <div className="blackBulle my-6" data-aos="fade-up">3</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>Contrôlez
                                </h3>
                                <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                                votre back-office. Qu’il s’agisse de mettre en place un <strong>site vitrine</strong> ou <strong>créer un site de vente</strong>, profitez d’un ensemble d’<strong>outils nécessaires</strong> pour accéder à votre <strong>système de gestion de contenu</strong> si vous le souhaitez. Ainsi, nous mettons tout en oeuvre pour vous permettre de <strong>créer facilement et mettre en ligne</strong> vos contenus de marque, grâce à un outil <strong>simple d’utilisation</strong> et intuitif.
                                </div>
                                </section>
                                
                            </div>

                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-xl md:text-3xl century">
                            <span className="text-bleu">/</span>Notre objectif : créer votre site pour atteindre vos objectifs
                        </h2>
                        <hr className="blue"></hr>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-0 pb-0 my-2">
                        
                    <p style={{textAlign:'justify', textAlignCenter:'center'}}><strong>Créer son site internet</strong> sans <strong>aucune connaissance</strong> en <strong>langage informatique</strong> ou plus largement dans le domaine du web est un pari risqué, surtout lorsqu’il s’agit du <strong>site de l’entreprise</strong> que vous servez.</p>
                    <br />
                    <p style={{textAlign:'justify', textAlignCenter:'center'}}>Bien choisir parmi les <strong>noms de domaine</strong> disponibles, <strong>avoir un site</strong> compatible avec les <strong>smartphones et tablettes</strong> ou encore maîtriser les <strong>outils de référencement web</strong> tout en ayant la main sur l’<strong>arborescence</strong> et la ligne éditoriale font partie des requis pour un site internet de <strong>qualité professionnelle</strong>.</p>
                    <br />
                    <p style={{textAlign:'justify', textAlignCenter:'center'}}>Faire confiance à une agence web <strong>pour créer un site e commerce</strong> ou non marchand vous fera gagner du temps et de l’argent. <strong>Créateur de site internet</strong> et de nombreuses solutions web, <strong>Linkweb</strong> saura vous conseiller pour vous donner accès à un produit de <strong>qualité professionnelle</strong>, fonctionnel et efficace en vue d’attirer vos prospects et répondre à vos objectifs de communication.</p>
                    <br />
                    <p style={{textAlign:'justify', textAlignCenter:'center'}}>Directement depuis nos locaux d’<strong>Agen</strong> et <strong>Toulouse</strong>, nous effectuons tout le nécessaire pour vous accompagner dans la mise en place et la réalisation de votre <strong>stratégie digitale</strong> en vue d’asseoir votre domination face à vos concurrents et générer des contacts. <strong>Créer une boutique en ligne</strong>, site vitrine ou tout autre <strong>type de site web</strong> pour votre entreprise est, désormais, à portée de main.</p>
                        
                    </section>
                    
                    <section className=" w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bgDev + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h2 data-aos='fade-right' className="text-center text-white text-2xl md:text-4xl century">
                                <span className="text-bleu">/</span>Alors, convaincu ? Vous souhaitez être contacté ? N’attendez plus et entrez votre adresse mail.


                            </h2>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                            <RappelForm />
                        </div>

                        <div className="max-w-6xl mx-auto flex items-start text-center my-12">
                            <div className="w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                                <img src={laptop} width="80px" alt="Agence de Communication Toulouse"/>
                                <p className="text-xl text-white century pt-3">WEBMARKETING</p>
                            </div>
                            <div className="w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="400">

                                <img src={web} width="80px" alt="Référencement Toulouse"/>
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT NATUREL</p>
                            </div>
                            <div className="w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="600">
                                <img src={bullhorn} width="80px" alt="Référencement Toulouse"/>
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT GOOGLE ADS</p>
                            </div>
                        </div>
                    </section>

                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century capitalize text-center text-xl md:text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
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
query lastsThreePostsErgo {
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
export default ErgonomieToulouse;