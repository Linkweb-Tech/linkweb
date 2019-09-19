import React from "react";
import { graphql } from "gatsby";
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
                    <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{backgroundColor:`#6e6e6e`, backgroundImage: 'url(' + Bg + ')', backgroundBlendMode: `multiply` }}>
                        <h1 data-aos="fade-up" data-aos-delay="500" className="century text-7xl text-center text-white">
                        Créer un site web professionnel Ergonomique
                        </h1>
                        <h3 className="italic text-2xl text-white">Ergonomie n.f. : étude des relations entre l’être humain et la machine.</h3>
                        <RoundButton url="https://linkweb.fr/contact-agence-web-toulouse/" text="Je souhaite créer mon site internet" />
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                        Création de site internet professionnel
                        </h2>
                        <hr className="blue"></hr>
                    <p style={{textAlign:`justify`, textAlignLast:`center`}}>Aujourd’hui, nous constatons que de plus en plus d’entreprises possèdent un site internet. Qu’il s’agisse d’un outil de communication, d’une boutique en ligne ou bien d’un support supplémentaire pour fidéliser des clients, créer un site internet professionnel est devenu incontournable pour assurer la pérennité d’une entreprise et optimiser sa présence sur le web.</p>
                    </section>
                    <section style={{backgroundColor:`rgb(255, 255, 255, 0.8`, backgroundImage: 'url(' + blocint + ')', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', backgroundBlendMode: `overlay`, marginTop:'50px', padding:`130px`, color:'black'}}>
                            <br />
                        <h2 data-aos='fade-right' className="text-center text-4xl century">Créer un site internet ergonomique pour une interface intuitive</h2>
                            <br />
                            <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                            <p style={{textAlign:'justify', textAlignLast:`center`, fontSize:`20px`}}>
                                Le point central de la création de votre site internet professionnel reste l’ergonomie. Un site ayant un confort dans l’exécution des actions et permettant un accès intuitif à l’information recherchée permet de créer beaucoup plus d’interactions et a beaucoup plus de chances d’avoir du succès. C’est pourquoi la conception du site doit être réalisée en conséquence.
                                Et c’est ce que nous souhaitons, votre réussite construit la nôtre.</p>
                            </section>
                    </section>

                    <section className="flex w-full  mx-auto px-0 py-6 my-4" style={{marginTop:'0px', marginBottom:'0px'}}>
                        <div className="w-1/2 bg-bleu" style={{backgroundImage: 'url(' + ui + ')', padding:'130px', color:'white', fontSize:'1.5em'}} data-aos="zoom-in">
                            <h3 className="text-2xl century pb-6">L’interface utilisateur (UI) : ce que le visiteur voit</h3>
                            <br/>
                            <ul>
                                <li>Responsive design</li>
                                <li>Esthétisme</li>
                                <li>Équilibre</li>
                                <li>Iconographie pertinente</li>
                                <li>Hiérarchisation des informations</li>
                            </ul>
                        </div>
                        <div className="w-1/2 bg-black" style={{backgroundImage: 'url(' + ux + ')', padding:'130px', color:'white', fontSize:'1.5em'}} data-aos="zoom-in" data-aos-delay="200">
                            <h3 className="text-2xl century pb-6">L’expérience utilisateur (UX) : ce que le visiteur fera</h3>
                            <br/>
                            <ul>
                                <li>Prise en main</li>
                                <li>Navigation aisée</li>
                                <li>Facilité d'accès à l'information</li>
                                <li>Accessibilité médias</li>
                            </ul>
                        </div>
                    </section>
                    <section className="flex w-full  mx-auto px-0 py-6 my-4" style={{backgroundColor:`rgb(41, 41, 41, 0.8`, backgroundImage: 'url(' + blocint1 + ')',backgroundBlendMode: `overlay`, marginTop:'50px', padding:`120px`, color:'white'}}>
                        <div className="w-1/2 ">
                        </div>
                        <div className="w-1/2 max-w-3xl px-12 py-12" >
                            <h2 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in" style={{fontSize:'40px', textAlign:'center'}}>
                                Créer un site professionnel qui s’adapte à tous les supports
                            </h2>
                            <br/>
                            <p data-aos='fade-bottom' style={{fontSize:'30px', textAlign:'center'}}>
                            71% des recherches sur internet en France sont effectuées via un mobile… Le comportement de votre futur site internet s’adaptera à toutes les tailles d’écrans. Il est indispensable que votre site soit un site responsive et permette une lecture fluide à vos utilisateurs consultant vos pages web sur leurs smartphones. Tous nos sites sont adaptatifs selon le Responsive Design…
                            </p>
                            <br/>
                            <p data-aos='fade-bottom' style={{fontSize:'15px', textAlign:'left'}}>
                            Comme dirait Buzz, vers l’infini et l’au-delà !
                            </p>
                            
                        </div>
                    </section>
                    <section className="flex w-full  mx-auto px-0 py-6 my-4" style={{paddingTop:'0em', paddingBottom:'0em'}}>
                        <div className="w-1/2 bg-bleu" style={{padding:'130px', color:'white', fontSize:'1.5em'}}>
                            <p  data-aos="zoom-in" style={{fontSize:'30px', textAlign:'center'}}>
                            Les équipes de développeurs de l’agence Linkweb prennent en charge la totalité de la création de votre site internet sur-mesure. A travers votre identité visuelle, nous allons créer un webdesign unique, reflétant l’image de votre entreprise pour une véritable carte de visite en ligne. Techniciens passionnés, nos développeurs mettront du cœur à l’ouvrage pour vous proposer un projet web cohérent et créer votre site web pour affirmer votre image de marque et séduire vos visiteurs.                            </p>
                            <br/>
                        </div>
                        <div className="w-1/2 bg-bleu" style={{backgroundImage: 'url(' + ordinateurs + ')', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', padding:'130px', color:'white', fontSize:'1.5em'}} data-aos="zoom-in">
                        </div>
                    </section>
                    <section className="flex w-full  mx-auto px-0 py-6 my-4" style={{paddingTop:'0px', paddingBottom:'0px'}}>
                        <div className="w-1/2" style={{backgroundImage: 'url(' + imac + ')', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', padding:'130px', color:'white', fontSize:'1.5em'}} data-aos="zoom-in">
                        </div>
                        <div className="w-1/2" style={{backgroundColor:'#2b2b2b', padding:'130px', color:'white', fontSize:'1.5em'}}>
                            <p  data-aos="zoom-in" style={{fontSize:'30px', textAlign:'center'}}>
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
                    <section className="flex flex-1 home-step my-24 px-24">
                        <div className="w-1/3 one px-12">
                            <div className="flex flex-1">
                                <div className="blackBulle" data-aos="fade-up">1</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>Maîtrisez
                                </h3>
                                <div className="content pb-6">
                                votre communication digitale commence par avoir la main sur le contenu que vous proposez. En tant que partenaire web, nous nous attachons à construire un site sur mesure, accessible et surtout administrable. En effet, il est possible, selon vos besoins, de vous permettre d’avoir la main sur la publication et sur les permissions réparties au sein de votre entreprise quant à la modification des contenus.
                                </div>
                                </section>
                            </div>
                            </div>
                            <div className="w-1/3 two px-12">
                            <div className="flex flex-1">
                                <div className="blackBulle" data-aos="fade-up">2</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>Gérez
                                </h3>
                                <div className="content pb-6">
                                les rôles et donnez la possibilité à vos collaborateurs d’agir efficacement et en toute simplicité. Ajouter des produits en ligne dans le cadre d’un site de vente, mettre à jour ses informations, réagir à l’actualité, sont tout autant de missions vous permettant d’améliorer et mettre à jour votre contenu.
                                </div>
                                </section>
                                </div>
                            </div>
                            <div className="w-1/3 three px-12">
                            <div className="flex flex-1">
                                <div className="blackBulle" data-aos="fade-up">3</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>Contrôlez
                                </h3>
                                <div className="content pb-6">
                                votre back-office. Qu’il s’agisse de mettre en place un site vitrine ou créer un site de vente, profitez d’un ensemble d’outils nécessaires pour accéder à votre système de gestion de contenu si vous le souhaitez. Ainsi, nous mettons tout en oeuvre pour vous permettre de créer facilement et mettre en ligne vos contenus de marque, grâce à un outil simple d’utilisation et intuitif.
                                </div>
                                </section>
                                
                            </div>

                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                            <span className="text-bleu">/</span>Notre objectif : créer votre site pour atteindre vos objectifs
                        </h2>
                        <hr className="blue"></hr>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-0 pb-0 my-2">
                        
                    <p style={{textAlign:'justify', textAlignCenter:'center'}}>Créer son site internet sans aucune connaissance en langage informatique ou plus largement dans le domaine du web est un pari risqué, surtout lorsqu’il s’agit du site de l’entreprise que vous servez.</p>
                    <br />
                    <p style={{textAlign:'justify', textAlignCenter:'center'}}>Bien choisir parmi les noms de domaine disponibles, avoir un site compatible avec les smartphones et tablettes ou encore maîtriser les outils de référencement web tout en ayant la main sur l’arborescence et la ligne éditoriale font partie des requis pour un site internet de qualité professionnelle.</p>
                    <br />
                    <p style={{textAlign:'justify', textAlignCenter:'center'}}>Faire confiance à une agence web pour créer un site e commerce ou non marchand vous fera gagner du temps et de l’argent. Créateur de site internet et de nombreuses solutions web, Linkweb saura vous conseiller pour vous donner accès à un produit de qualité professionnelle, fonctionnel et efficace en vue d’attirer vos prospects et répondre à vos objectifs de communication.</p>
                    <br />
                    <p style={{textAlign:'justify', textAlignCenter:'center'}}>Directement depuis nos locaux d’Agen et Toulouse, nous effectuons tout le nécessaire pour vous accompagner dans la mise en place et la réalisation de votre stratégie digitale en vue d’asseoir votre domination face à vos concurrents et générer des contacts. Créer une boutique en ligne, site vitrine ou tout autre type de site web pour votre entreprise est, désormais, à portée de main.</p>
                        
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