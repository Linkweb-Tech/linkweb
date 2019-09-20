import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";


import Bg from "../images/developpement-web-agen.jpg";
import bgDev from '../images/bg-dev.jpg';
import citation from '../images/citation.png';
import smartphone from '../images/creation-site-web-agen.jpg';
import fondblanc from '../images/creation-site-internet-agen.jpg';
import un from '../images/1bis.png';
import deux from '../images/2bis.png';
import trois from '../images/3bis.png';




import web from '../images/web.svg';
import laptop from '../images/laptop.svg';
import bullhorn from '../images/bullhorn.svg';

class Crea extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Création de Site Internet Agen - Agence de Communication Linkweb"
                    description="Linkweb est le spécialiste de la création de site internet à Agen (47) et Toulouse (31). À l'écoute, l'équipe vous accompagne pour un projet web sur-mesure."
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
                    <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{backgroundColor:`#6e6e6e`, backgroundImage: 'url(' + Bg + ')', backgroundBlendMode: `multiply`, backgroundPosition:'center' }}>
                        <h1 data-aos="fade-up" data-aos-delay="500" className="century text-7xl text-center text-white">
                        Création de site internet Agen
                        </h1>
                        <h3 className="italic text-2xl text-white">Votre projet sur-mesure à Agen</h3>
                        <RoundButton url="/contact-agence-web-toulouse" text="Demander un devis" />
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4 ">
                        <section className="w-full">
                             <h2 data-aos='fade-right' className="text-center text-4xl century">
                             Création de site internet professionnel
                            </h2>
                            <hr className="blue"></hr>
                        </section>
                        <section className="w-full">
                            <br/>
                            <p className="font-bold text-center">Aujourd’hui, nous constatons que de plus en plus d’entreprises possèdent un <strong>site internet</strong>. Qu’il s’agisse d’un <strong>outil de communication</strong>, d’une <strong>boutique en ligne</strong> ou bien d’un support supplémentaire pour fidéliser des clients, <strong>créer un site internet professionnel</strong> est devenu incontournable pour assurer la pérennité d’une entreprise et optimiser sa présence <strong>sur le web</strong>.</p>
                        </section>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4 flex" style={{backgroundColor:'#f2f2f2'}}>
                        <div className="w-1/12">
                            <img src={citation} alt="Création de site internet à Agen"/>
                        </div>
                        <div className="w-11/12">
                            <p className="font-bold text-bleu">En France, plus de 80% des entreprises ayant fait faillite en 2013 ne possédaient pas de site internet.*</p>
                            <p style={{fontStyle:'italic'}}>*Source : William Vade Wiele, fondateur d’Email-Brokers</p>
                        </div>
                    </section>
                    <section className="max-w-full w-full mx-auto px-4 py-6 my-4 flex">
                        <div className="w-1/2">
                            <img src={smartphone} alt="Création site web Agen"/>
                        </div>
                        <div className="w-1/2" style={{marginTop:'auto', marginBottom:'auto'}}>
                            <p>Malgré tout, vous restez septique sur l’importance de <Link to="/creation-site-internet-toulouse-31"><strong>créer un site internet</strong></Link> de nos jours ? Vous pensez que le bouche à oreille suffit pour pérenniser votre entreprise ? Les dépenses occasionnées par la <strong>création d’un site internet</strong> vous semble inutile ?</p><br/>
                            <p>Sachez alors que la <strong>création d’un site web</strong> n’est pas une dépense. Il s’agit d’un réel investissement pour assurer le développement de votre société.</p>
                            
                            <section className="max-w-5xl w-full mx-auto py-6 my-4 flex" style={{backgroundColor:'#f2f2f2'}}>
                                <div className="w-1/12">
                                    <img src={citation} alt="Création de site internet à Agen"/>
                                </div>
                                <div className="w-11/12">
                                    <p className="font-bold">Créer un site internet n’est pas une dépense, c’est un <element className="text-bleu">investissement</element>.</p>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section style={{backgroundColor:`rgb(255, 255, 255, 0.8`, backgroundImage: 'url(' + fondblanc + ')', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', backgroundBlendMode: `overlay`, marginTop:'50px', padding:`130px`, color:'black'}}>
                            <br />
                        <section className="max-w-full w-full mx-auto px-4 px-6 py-6 my-4 ">
                            <section className="w-full">
                                    <h2 style={{backgroundColor:'black', padding:'3%'}}data-aos='fade-right' className="text-right text-4xl century text-white">Pourquoi créer un site internet pour les TPE / PME d’Agen et des alentours ?</h2>
                                    <br />
                            </section>
                        </section>
                        <section className="max-w-full w-full flex">
                            <div className="w-1/3" style={{display:'inherit'}}>
                                <div className="w-1/12">
                                    <img src={un} alt="Création site internet Agen" /><br/>
                                </div>
                                <div className="w-11/12">
                                    <h3 style={{fontWeight:'bold', fontSize:'20px', textAlign:'left'}}>Apporte une crédibilité</h3>
                                    <p style={{textAlign:'left'}}>
                                    Une entreprise possédant un <strong>site internet professionnel</strong>, design, moderne et ergonomique apporte une crédibilité indispensable à votre entreprise. Il permet également d’améliorer votre notoriété auprès des internautes.</p>
                                </div>
                            </div>
                            <div className="w-1/3" style={{display:'inherit'}}>
                                <div className="w-1/12">
                                    <img src={deux} alt="Création de site internet Agen" /><br/>
                                </div>
                                <div className="w-11/12">
                                    <h3 style={{fontWeight:'bold', fontSize:'20px', textAlign:'left'}}>Représente le meilleur outil de communication</h3>
                                    <p style={{textAlign:'left'}}>
                                    Un <strong>site web professionnel</strong> vous permet d’être visible 24h/24, 7j/7 ! Pas d’horaires, pas de jours de fermeture, pas d’imprévus… un <strong>site internet</strong> reste visible et accessible à tout moment, où que vous soyez.</p>
                                </div>
                            </div>
                            <div className="w-1/3" style={{display:'inherit'}}>
                                <div className="w-1/12">
                                    <img src={trois} alt="Création site internet à Agen" /><br/>
                                </div>
                                <div className="w-11/12">
                                    <h3 style={{fontWeight:'bold', fontSize:'20px', textAlign:'left'}}>Reflète l’image de votre entreprise</h3>
                                    <p style={{textAlign:'left'}}>
                                    Un <strong>site internet</strong> doit être réalisé à <strong>votre image</strong>. Il doit refléter vos valeurs, vos services, vos prestations, mais aussi l’<strong>identité visuelle</strong> de votre société. Nous nous attachons à définir un <strong>cahier des charges</strong> pour vous permettre la solution de votre choix.</p>
                                </div>
                            </div>
                        </section>
                    </section>
                    <section className="flex w-full  mx-auto px-0 my-4" style={{marginTop:'0px', marginBottom:'0px'}}>
                        <div className="w-1/2 bg-bleu" style={{backgroundColor: '#37c5ee', padding:'130px', color:'white', fontSize:'1.5em'}} data-aos="zoom-in">
                            <h2 className="text-white font-bold" style={{fontSize:'40px'}}>Et pour une petite entreprise locale du Lot-et-Garonne ?</h2><br/>
                            <p style={{fontSize:'15px', color:'black'}}>Pour une entreprise local, <strong>avoir un site internet</strong> est incontournable. Non seulement vous vous démarquerez de la concurrence, mais vous aurez également la possibilité de toucher une clientèle beaucoup plus large. En mettant en avant vos services et vos prestations sur votre <strong>site vitrine</strong>, vous laissez la possibilité à vos prospects d’avoir accès à toutes les informations importantes concernant votre entreprise, et cela à tout moment.</p>
                            <br/> 
                            <p style={{fontSize:'15px', color:'black'}}>Les avantages de <strong>créer votre site web</strong> ne s’arrête pas là. En effet, un <strong>site professionnel</strong>, design et moderne vous permettra de concrétiser vos contacts en mettant en avant vos réalisations, vos travaux. Distinguez vous de vos <strong>concurrents</strong> avec la mise en place de votre propre site internet ergonomique, <strong>intuitif</strong>, et adapté pour améliorer l’<strong>expérience utilisateur</strong>.</p>
                            <section className="flex w-full flex mx-auto px-0 my-4" style={{textAlign:'justify', textAlignLast:'center'}}>
                                <div className="w-1/3">
                                    <p style={{fontSize:'50px'}}>63%</p>
                                    <br/>
                                    <p style={{fontSize:'15px', color:'white', marginRight:'30px'}}><strong>des utilisateurs recherchent le site internet d’une entreprise</strong> afin de la contacter ou de la localiser (selon un rapport d’avril 2017 de Local Search Association).</p>
                                </div>
                                <div className="w-1/3">
                                    <p style={{fontSize:'50px'}}>46%</p>
                                    <br/>
                                    <p style={{fontSize:'15px', color:'white', marginRight:'30px'}}><strong>des utilisateurs détermine la confiance d’une entreprise</strong> en fonction de la crédibilité du site internet (source : recherche effectuée par Standford en 2002).</p>
                                </div>
                                <div className="w-1/3">
                                    <p style={{fontSize:'50px'}}>68%</p>
                                    <br/>
                                    <p style={{fontSize:'15px', color:'white', marginRight:'30px'}}><strong>des entreprises en France possèdent un site web</strong> (source : Observatoire du numérique).</p>
                                </div>
                            </section>
                        </div>
                        <div className="w-1/2 bg-black" style={{backgroundColor: 'black', padding:'130px', color:'white', fontSize:'1.5em'}} data-aos="zoom-in">
                            <h2 className="text-white font-bold" style={{fontSize:'40px'}}>Pour de la vente en ligne ?</h2><br/>
                            <p style={{fontSize:'15px', color:'white'}}>En 2017, 85% des internautes ont effectués des achats en ligne. Ces chiffres sont en constante évolution. Pour cause, les bénéfices sont nombreux à se lancer dans le e-commerce. Cependant, pour qu’un <strong>projet web</strong> tel que la création d’une boutique <strong>e-commerce</strong> soit pérenne, il est indispensable de faire appel à des professionnels qualifiés pour mettre en place une réelle <strong>stratégie digitale</strong> et obtenir une <strong>conception de site</strong> de qualité.</p>
                            <br/> 
                            <section className="flex w-full flex mx-auto px-0 my-4" style={{textAlign:'justify', textAlignLast:'center'}}>
                                <div className="w-1/3">
                                    <img src={un} alt="Site web Agen" style={{width:'75px'}}/><br/>
                                    <p style={{fontSize:'30px', marginRight:'30px', textAlign:'center'}}>Développer le chiffre d’affaires</p>
                                    <br/>
                                    <p style={{fontSize:'15px', color:'white', marginRight:'30px'}}><strong>Créer une boutique en ligne</strong> permet non seulement de développer son chiffre d’affaire grâce à la vente de <strong>produits en ligne</strong>, mais permet également de développer celui de votre magasin physique !</p>
                                </div>
                                <div className="w-1/3">
                                    <img src={deux} alt="Site internet Agen" style={{width:'75px'}}/><br/>
                                    <p style={{fontSize:'30px', marginRight:'30px', textAlign:'center'}}>Supprimer les contraintes de localité</p>
                                    <br/>
                                    <p style={{fontSize:'15px', color:'white', marginRight:'30px'}}>Un <strong>site de vente</strong> en ligne permet de toucher une clientèle beaucoup plus large en supprimant les contraintes de localité. Vous pouvez ainsi toucher une clientèle au niveau national, voir international !</p>
                                </div>
                                <div className="w-1/3">
                                    <img src={trois} alt="Création site web Agen" style={{width:'75px'}}/><br/>
                                    <p style={{fontSize:'30px', marginRight:'30px', textAlign:'center'}}>Proposer des articles sans limite</p>
                                    <br/>
                                    <p style={{fontSize:'15px', color:'white', marginRight:'30px'}}>Contrairement à un local physique, un <strong>site e-commerce</strong> vous permet de <strong>vendre en ligne</strong> autant d’articles que vous souhaitez, rapidement et simplement. Aucune contrainte d’espaces ou de réaménagement !</p>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section style={{backgroundColor:`rgb(255, 255, 255, 0.8`, backgroundImage: 'url(' + fondblanc + ')', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', backgroundBlendMode: `overlay`, marginTop:'50px', padding:`130px`, color:'black'}}>
                            <br />
                        <section className="max-w-full w-full mx-auto px-4 px-6 py-6 my-4 ">
                            <section style={{backgroundColor:'black', padding:'3%'}} className="w-full">
                                    <h2 data-aos='fade-right' className="text-right text-4xl century text-white">Comment créer un site internet pour les TPE / PME d’Agen et des alentours ?</h2>
                                    <br />
                                    <p style={{fontSize:'15px', textAlign:'justify', textAlignLast:'center', color:'white'}}><strong>Créer son site internet</strong> (ou bien réaliser une <strong>refonte de site internet</strong>) est une opération bien plus complexe que ce que l’on peut imaginer. Bien sûr, vous pouvez tout à fait <strong>créer votre site internet</strong> à l’aide d’un <strong>éditeur de site internet</strong> et outils de <strong>gestion de contenu gratuits</strong> tel que <strong>Wix</strong>, <strong>Jimdo</strong>, <strong>E Monsite</strong> ou <strong>Weebly</strong>, pour ne citer que les plus connus. Vous aurez ainsi la possibilité de <strong>créer un site facilement</strong>, sans <strong>aucune connaissance</strong>, en mettant en place des <strong>templates</strong> basiques, une description rapide de votre entreprise et en ajoutant quelques-unes de vos photos pour correspondre à la <strong>charte graphique</strong> de votre entreprise.</p>
                                    <br/>
                                    <p style={{fontSize:'15px', textAlign:'justify', textAlignLast:'center', color:'white'}}>Mais alors, que faites-vous de la <strong>stratégie de communication</strong> ? De l’analyse de votre cible et de vos objectifs ? De la stratégie de référencement d’un site, naturel ou payant, à mettre en place pour rendre votre site visible dans les moteurs de recherche ?</p>
                                    <br/>
                                    <p style={{fontSize:'15px', textAlign:'justify', textAlignLast:'center', color:'white'}}>C’est là que votre entreprise de création de site internet <strong>Linkweb</strong> intervient. Nous vous accompagnons tout au long de votre projet, de la création d’un <strong>site internet sur mesure</strong> au référencement de celui-ci sur les moteurs de recherche. Chaque étape pour <strong>créer un site professionnel</strong> sera effectuée avec professionnalisme et rigueur :</p>
                            </section>
                        </section>
                        <section className="max-w-full w-full flex">
                            <div className="w-1/3" style={{display:'inherit'}}>
                                <div className="w-1/12">
                                    <img src={un} alt="Création site internet Toulouse" /><br/>
                                </div>
                                <div className="w-11/12">
                                    <h3 style={{fontWeight:'bold', fontSize:'20px', textAlign:'left'}}>Analyse du projet</h3><br/>
                                    <p style={{textAlign:'left'}}>
                                        Déterminer l’objectif : trouver de nouveaux clients, fidéliser votre clientèle déjà existante, générer des ventes en ligne, bénéficier d’un support pour votre clientèle, etc.<br/>
                                        Déterminer la cible : partenaires, fournisseurs, particuliers ou professionnels, etc.<br/>
                                        Déterminer les fonctionnalités : réservation ou paiement en ligne, inscription à des évènements, etc.</p>
                                </div>
                            </div>
                            <div className="w-1/3" style={{display:'inherit'}}>
                                <div className="w-1/12">
                                    <img src={deux} alt="Création site web Toulouse" /><br/>
                                </div>
                                <div className="w-11/12">
                                    <h3 style={{fontWeight:'bold', fontSize:'20px', textAlign:'left'}}>Réalisation du projet</h3><br/>
                                    <p style={{textAlign:'left'}}>
                                        <ul>
                                            <li style={{listStyle:'inside'}}>Création d’un site <strong>responsive design</strong> adaptatif (navigation optimale sur PC (<strong>desktop</strong>), smartphones (mobiles) et <strong>tablettes</strong> en fonction de la <strong>taille de l’écran</strong>)</li>
                                            <li style={{listStyle:'inside'}}><strong>Mise en page</strong> des informations</li>
                                            <li style={{listStyle:'inside'}}><strong>Création de logo</strong> si nécessaire</li>
                                            <li style={{listStyle:'inside'}}>Achat du <strong>nom de domaine</strong></li>
                                            <li style={{listStyle:'inside'}}><strong>Hébergement</strong> du site internet</li>
                                            <li style={{listStyle:'inside'}}><strong>Rédaction de contenu</strong> optimisé pour le <strong>référencement web</strong></li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/3" style={{display:'inherit'}}>
                                <div className="w-1/12">
                                    <img src={trois} alt="Création site internet Toulouse" /><br/>
                                </div>
                                <div className="w-11/12">
                                    <h3 style={{fontWeight:'bold', fontSize:'20px', textAlign:'left'}}>Mise en place d’une stratégie de référencement</h3><br/>
                                    <p style={{textAlign:'left'}}>
                                    <li style={{listStyle:'inside'}}>Définition des mots-clés</li>
                                    <li style={{listStyle:'inside'}}>Optimisation du contenu</li>
                                    <li style={{listStyle:'inside'}}>Optimisation de la vitesse de chargement</li>
                                    <li style={{listStyle:'inside'}}>Analyse du comportement de l’utilisateur</li>
                                    <li style={{listStyle:'inside'}}>Mise en place des données structurées</li>
                                    <li style={{listStyle:'inside'}}>Netlinking</li>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </section>
                    <section className="flex w-full  mx-auto px-0 my-4" style={{marginTop:'0px', marginBottom:'0px'}}>
                        <div className="w-1/2 bg-black" style={{backgroundColor: 'black', padding:'130px', color:'white', fontSize:'1.5em'}} data-aos="zoom-in">
                            <h2 className="text-white font-bold" style={{fontSize:'40px'}}>Pourquoi faire appel à Linkweb pour créer un site ?</h2><br/>
                            <p style={{fontSize:'15px', color:'white'}}>Les entreprises de création et de référencement naturel se font de plus en plus nombreuses ces dernières années, même sur le secteur d’Agen. De plus, vous devez forcément connaître dans votre entourage une personne vous ayant proposé de vous <strong>faire un site internet</strong>. Plus encore, vous avez sans nul doute reçu de nombreux appel de la part d’entreprises vous proposant de <strong>créer un site internet gratuit</strong>. Vous n’avez donc que l’embarras du choix. Mais alors, comment choisir ? Pourquoi choisir Linkweb pour <strong>créer un site web</strong> ?</p>
                            <br/> 
                            <section className="flex w-full flex mx-auto px-0 my-4" style={{textAlign:'justify', textAlignLast:'center'}}>
                                <div className="w-1/3">
                                    <p style={{fontSize:'30px', marginRight:'30px'}}>Appel Mensuel</p>
                                    <br/>
                                    <br/>
                                    <p style={{fontSize:'15px', color:'white', marginRight:'30px'}}>nous contactons chacun de nos clients tous les mois afin d’échanger sur notre stratégie de référencement et sur les résultats obtenus</p>
                                </div>
                                <div className="w-1/3">
                                    <p style={{fontSize:'30px', marginRight:'30px'}}>Disponibilité et réactivité</p>
                                    <br/>
                                    <p style={{fontSize:'15px', color:'white', marginRight:'30px'}}>nos clients peuvent nous joindre à tous moments en cas de demandes particulières (modification du contenu, ajout d’informations, etc)</p>
                                </div>
                                <div className="w-1/3">
                                    <p style={{fontSize:'30px', marginRight:'30px'}}>Équipe jeune et dynamique</p>
                                    <br/>
                                    <p style={{fontSize:'15px', color:'white', marginRight:'30px'}}>que ce soit pour la création, la gestion ou le référencement de votre site internet, une équipe de professionnel est à votre disposition</p>
                                </div>
                            </section>
                        </div>
                        <div className="w-1/2 bg-black" style={{backgroundColor: '#37c5ee', padding:'130px', color:'white', fontSize:'1.5em'}} data-aos="zoom-in">
                            <h2 className="text-white font-bold" style={{fontSize:'40px'}}>Notre expérience à votre service</h2><br/>
                            <p style={{fontSize:'15px', color:'black'}}>Depuis plus de 10 ans, l’<strong>agence de communication web Linkweb</strong> fait partie des <strong>agences web</strong> qui travaillent en collaboration avec l’ensemble de ses clients pour répondre au mieux aux attentes de chacun. Chaque projet, de la <strong>conception du site</strong> à la stratégie de <strong>communication digitale</strong>, est réalisé avec rigueur et professionnalisme. Notre seul objectif est d’aider les entreprises locales à developper leurs activités grâce à la mise en place d’une stratégie digitale, et une utilisation du <strong>webmarketing</strong> efficace. Nous nous engageons ainsi à réaliser pour vous des <strong>sites web responsive web design</strong> à travers le <strong>développement web</strong> et l’utilisation d’outils adaptés (<strong>système de gestion de contenu</strong>) avec une <strong>interface intuitive</strong> et des contenus optimisés au référencement SEO.</p>
                            <br/> 
                            <p style={{fontSize:'15px', color:'black'}}>L’équipe technique de Linkweb possède les <strong>connaissances techniques</strong> et les <strong>outils nécessaires</strong> pour concevoir un site sur mesure, quel que soit le <strong>type de site web</strong> qu’il vous faut : <strong>site internet vitrine</strong>, <strong>site ecommerce</strong> ou bien site administrable. Pour cela, les développeurs web de Linkweb maîtrise les langages web (<strong>html</strong>, <strong>css</strong>, <strong>js</strong>, <strong>php</strong>), les gestionnaires de base de données (MySql, PostgreSQL) et certains <strong>CMS (Content Management System)</strong>, à savoir, <strong>WordPress</strong>, <strong>Joomla</strong>, <strong>Prestashop</strong>, <strong>Drupal</strong>, etc.</p>
                            <br/>
                            <p style={{fontSize:'15px', color:'black'}}>Aujourd’hui, ce sont plus de 300 entreprises dans le Lot-et-Garonne qui nous font confiance pour développer leur communication web. Pourquoi pas vous ?</p>
                        </div>
                    </section>




                    <section>
                        <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                            <br/>
                            <Link to="/agence-de-communication-agen-47-toulouse-31"><h2 data-aos='fade-right' className="text-center text-3xl century">
                                <span className="text-bleu">/</span>Découvrez nos réalisations
                            </h2></Link>
                            <hr className="blue"></hr><br/>
                        </section>
                    </section>
                    <section className=" w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ backgroundColor: '#6a6a6a', backgroundImage: 'url( ' + bgDev + ')', backgroundBlendMode: 'multiply', backgroundRepeat:'no-repeat', backgroundPosition:'center' }}>
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
query lastsThreePostsCrea {
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
export default Crea;