import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";

import Bg from "../images/developpement-web.jpg";
import bgDev from '../images/bg-dev.jpg';
import blocint from '../images/developpement-internet.jpg';
import exemples from '../images/realisations-exemples1.jpg';
import exemples1 from '../images/realisations-exemples.jpg';
import editeur from '../images/editeur.jpg';
import mysql from '../images/mysql.png';
import postgre from '../images/postgresql.png';
import wordpress from '../images/wordpress.png';
import drupal from '../images/joomla.png';
import prestashop from '../images/prestashop.png';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import php from '../images/php.png';
import bootstrap from '../images/bootstrap.png';
import laravel from '../images/laravel.png';
import symfony from '../images/symfony.png';
import vue from '../images/vue.png';
import padlock from '../images/padlock.png';
import users from '../images/multiple-users-silhouette.png';
import circle from '../images/circle.png';
import flag from '../images/flag.png';
import placeholder from '../images/placeholder-filled-point.png';
import dashboard from '../images/home.png';
import control from '../images/controls.png';
import settings from '../images/settings.png';
import ampoule from '../images/light-bulb.png';
import main from '../images/hold.png';
import mind from '../images/mind.png';
import star from '../images/star.png';


import web from '../images/web.svg';
import laptop from '../images/laptop.svg';
import bullhorn from '../images/bullhorn.svg';

class Dev extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Création Site Internet Agen - Toulouse | E-Commerce, Vitrine - Linkweb"
                    description="Linkweb, agence web spécialisée dans la création de sites internet (e-commerce, vitrine) à Agen (47) et Toulouse (31). Nos projets sont réalisés sur-mesure."
                    keywords={[`Développement Web Agen`, `Développement site web Agen`, `Creation site internet Agen`]}
                    url="https://linkweb.fr/developpement-web-agen-toulouse"
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
                        <h1 data-aos="fade-up" data-aos-delay="500" className="century lg:text-7xl md:text-4xl text-4xl text-center text-white">
                        Développement Web
                        </h1>
                        <h3 className="italic text-lg sm:text-2xl text-white text-center mt-6">Nous développons nos solutions web sur-mesure</h3>
                        <RoundButton url="/contact-agence-web-toulouse" text="Demander un devis" />
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4 ">
                        <section className="w-full">
                             <h2 data-aos='fade-right' className="text-center text-4xl century">
                                Nos solutions web
                            </h2>
                            <hr className="blue"></hr>
                        </section>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4 flex flex-col md:flex-row">
                            <div className="w-full md:w-1/4">
                                <Link className="hover:text-bleu" to="/creation-site-internet-toulouse"><img src={mind} alt="Création Site internet Agen" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /></Link><br/>
                                <h3 style={{fontWeight:'bold', fontSize:'20px', textAlign:'center'}}><Link className="hover:text-bleu" to="/creation-site-internet-toulouse">Création d'un projet sur-mesure</Link></h3>
                                <p style={{textAlign:'center'}}><Link className="hover:text-bleu" to="/creation-site-internet-toulouse">Site internet à votre image, conforme à votre charte graphique.</Link></p>
                            </div>
                            <div className="w-full md:w-1/4">
                                <Link className="hover:text-bleu" to="/creation-de-site-internet-a-agen"><img src={settings} alt="Création site internet Agen" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /></Link><br/>
                                <h3 style={{fontWeight:'bold', fontSize:'20px', textAlign:'center'}}><Link className="hover:text-bleu" to="/creation-de-site-internet-a-agen">Projets d'envergure</Link></h3><br/>
                                <p style={{textAlign:'center'}}><Link className="hover:text-bleu" to="/creation-de-site-internet-a-agen">Création site web pour TPE PME, agence immobilière, ...</Link></p>
                            </div>
                            <div className="w-full md:w-1/4">
                                <img src={ampoule} alt="Création Site internet Toulouse" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /><br/>
                                <h3 style={{fontWeight:'bold', fontSize:'20px', textAlign:'center'}}>Facile d'utilisation</h3><br/>
                                <p style={{textAlign:'center'}}>Interface de gestion de contenu abordable, même pour les novices.</p>
                            </div>
                            <div className="w-full md:w-1/4">
                                <img src={main} alt="Création Site internet Toulouse" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /><br/>
                                <h3 style={{fontWeight:'bold', fontSize:'20px', textAlign:'center'}}>Formation à l'administration</h3>
                                <p style={{textAlign:'center'}}>Dans le cas d'un site internet e-commerce et site administrable.</p>
                            </div>
                    
                    </section>
                    <section className="py-10" style={{backgroundColor:`rgb(255, 255, 255, 0.8`, backgroundImage: 'url(' + blocint + ')', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', backgroundBlendMode: `overlay`, marginTop:'50px', color:'black'}}>
                            <br />
                        <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4 ">
                            <section className="w-full">
                                    <h2 data-aos='fade-right' className="text-center text-2xl md:text-4xl century text-bleu">Nous élaborons votre projet de création de site internet sur-mesure selon vos objectifs de communication d’entreprise.</h2>
                                    <br />
                            </section>
                        </section>
                        <section className="max-w-6xl w-full mx-auto px-4 py-6 my-4 flex md:flex-row flex-col">
                            <div className="w-full md:w-1/2 mb-10" style={{display:'inherit'}}>
                                <div className="w-1/5">
                                    <img src={placeholder} alt="Création Site internet Agen" /><br/>
                                </div>
                                <div className="w-4/5">
                                    <h3 style={{fontWeight:'bold', fontSize:'20px', textAlign:'left'}}>Point de départ</h3>
                                    <p style={{textAlign:'left'}}>
                                     Un échange collaboratif mêlant vos envies et nos conseils professionnels.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2" style={{display:'inherit'}}>
                                <div className="w-1/5">
                                    <img src={flag} alt="Développement Web Agen" /><br/>
                                </div>
                                <div className="w-4/5">
                                    <h3 style={{fontWeight:'bold', fontSize:'20px', textAlign:'left'}}>Point d'arrivée</h3>
                                    <p style={{textAlign:'left'}}>
                                     Un <strong>site internet professionnel</strong> qui remplit toutes les fonctions attendues, côté utilisateur et <strong>administrateur</strong>.</p>
                                </div>
                            </div>
                        </section>
                    </section>
                    <section>
                        <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                            <h2 data-aos='fade-right' className="text-center text-3xl century">
                                <span className="text-bleu">/</span>Site vitrine
                            </h2>
                            <hr className="blue"></hr><br/>
                            <p style={{textAlign:'center', fontSize:'20px', fontWeight:'bold'}}>TPE, PME, artisans, professions libérales : dynamisez votre communication digitale d’entreprise.</p><br/>
                        </section>

                        <section className="max-w-6xl w-full mx-auto px-4 pt-0 pb-0 my-2 flex flex-col md:flex-row">
                            <div className="w-full md:w-8/12">
                                <img src={exemples} alt="Agence Web Agen"/>
                            </div>
                            <div className="w-full md:w-8/12">
                                <p style={{fontSize:'18px', alignText:'left'}}>
                                <br/>
                                    <ul>
                                        <li><img src={star} style={{width:'20px', display: 'inline-block', verticalAlign:'sub'}} alt="Création site web Agen" />&nbsp;&nbsp;<strong>Site sur-mesure responsive design</strong></li>
                                        <li><img src={star} style={{width:'20px', display: 'inline-block', verticalAlign:'sub'}} alt="Création site web Toulouse" />&nbsp;&nbsp;<strong>Mise en page ergonomique</strong> de vos contenus</li>
                                        <li><img src={star} style={{width:'20px', display: 'inline-block', verticalAlign:'sub'}} alt="Création site web Agen" />&nbsp;&nbsp;<strong>Webdesign</strong> original et épuré</li>
                                        <li><img src={star} style={{width:'20px', display: 'inline-block', verticalAlign:'sub'}} alt="Création site web Toulouse" />&nbsp;&nbsp;<strong>Site web</strong> professionnel et évolutif
                                        <li><img src={star} style={{width:'20px', display: 'inline-block', verticalAlign:'sub'}} alt="Création site web Agen" />&nbsp;&nbsp;Vitesse de chargement des <strong>pages optimisée</strong></li>
                                        <li><img src={star} style={{width:'20px', display: 'inline-block', verticalAlign:'sub'}} alt="Création site web Toulouse" />&nbsp;&nbsp;<strong>Protocole de sécurisation HTTPS</strong></li>
                                        <li><img src={star} style={{width:'20px', display: 'inline-block', verticalAlign:'sub'}} alt="Création site web Agen" />&nbsp;&nbsp;Prise en charge technique de vos mises à jour</li>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </section>
                                <br/>
                                <hr className="blue"></hr>
                    </section>

                    <section style={{backgroundColor:`rgb(255, 255, 255, 0.8`, backgroundImage: 'url(' + editeur + ')', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', backgroundBlendMode: `overlay`, marginTop:'50px', color:'black'}}>
                            <br />
                        <section className="max-w-5xl w-full mx-auto md:px-4 px-10 md:py-6 md:my-4 ">
                            <section className="w-full">
                                    <h2 data-aos='fade-right' className="text-center text-4xl century text-bleu">Site administrable</h2>
                                    <br />
                            </section>
                        </section>
                    <section className="max-w-6xl w-full mx-auto px-4 py-6 my-4 flex">
                            <div className="w-full">
                                <p className="text-lg md:text-xl" style={{textAlign:'left'}}>Vous êtes gérant d’un restaurant et, de ce fait,  souhaitez mettre en place des réservations en ligne ?</p>
                                <br/>
                                <p className="text-lg md:text-xl" style={{textAlign:'right'}}>Vous voulez présenter vos gammes de produits de beauté, de décoration, de jardinage sur un catalogue en ligne ?</p>
                                <br/>
                                <p className="text-lg md:text-xl" style={{textAlign:'left'}}>Votre entreprise organise des évènements et vous souhaitez publier régulièrement vos actualités sur votre site professionnel ?</p><br/>
                            </div>
                    </section>
                    <section className="max-w-6xl w-full mx-auto px-4 py-6 my-4 flex flex-col md:flex-row">
                        <div className="w-full md:w-1/4 text-lg my-10" style={{marginRight:'40px', textAlign:'center'}}>
                            <img src={padlock} alt="Création de site internet Toulouse" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /><br/>
                            <p>Accès à votre <strong>administration</strong> avec des <strong>identifiants sécurisés</strong></p>
                        </div>
                        <div className="w-full md:w-1/4 text-lg my-10" style={{marginRight:'40px', textAlign:'center'}}>
                            <img src={dashboard} alt="Création de site internet Agen" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /><br/>
                            <p>Formation à l’utilisation de votre <strong>back-office</strong></p>
                        </div>
                        <div className="w-full md:w-1/4 text-lg my-10" style={{marginRight:'40px', textAlign:'center'}}>
                            <img src={users} alt="site internet Toulouse" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /><br/>
                            <p>Configuration personnalisée des accès de chacun des collaborateurs sur le site</p>
                        </div>
                        <div className="w-full md:w-1/4 text-lg my-10" style={{marginRight:'40px', textAlign:'center'}}>
                            <img src={control} alt="site web Agen" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /><br/>
                            <p>Gestion anticipée et <strong>programmation</strong> de la publication d’actualités et évènements</p>
                        </div>
                    </section>
                    <section className="max-w-6xl w-full mx-auto px-4 py-6 my-4 flex text-lg md:text-xl">
                        <p style={{textAlign:'left'}}>Votre projet web sera étudié et réalisé dans les moindres détails pour vous permettre une autonomie de gestion de vos contenus sur les éléments qui sont importants pour vous. En ce qui concerne le reste, on s’en charge !</p>
                    </section>
                </section>

                <section>
                        <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                            <h2 data-aos='fade-right' className="text-center text-3xl century">
                                <span className="text-bleu">/</span>Site e-commerce
                            </h2>
                            <hr className="blue"></hr><br/>
                            <p className="text-lg md:text-xl text-justify" style={{textAlignLast:'center'}}>82,7% des internautes français achètent sur internet ! Avoir un projet de création de boutique en ligne revient donc à monter une entreprise de toute pièce. Ainsi, il est nécessaire de faire appel à un partenaire solide pour vous accompagner dans cette aventure en vous créant un outil en ligne performant dans le but d’obtenir un retour sur investissement.</p><br/>
                        </section>

                        <section className="max-w-6xl w-full mx-auto px-4 pt-0 pb-0 my-2 flex flex-col md:flex-row">
                            <div className="w-full md:w-1/4" style={{marginTop:'auto', marginBottom:'auto'}}>
                                <img src={circle} alt="Développement Agen" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /><br/>
                                <p style={{fontSize:'25px', textAlign:'center'}}>Design rassurant et attractif</p><br/>
                                <img src={circle} alt="Développement Agen" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /><br/>
                                <p style={{fontSize:'25px', textAlign:'center'}}>Développement des fiches produits sur-mesure</p><br/>
                                <img src={circle} alt="Développement Toulouse" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /><br/>
                                <p style={{fontSize:'25px', textAlign:'center'}}>Intégration et gestion des commandes</p><br/>
                                <img src={circle} alt="Développement Toulouse" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /><br/>
                                <p style={{fontSize:'25px', textAlign:'center'}}>Interface intuitive</p>
                            </div>
                            <div className="w-full md:w-1/2">
                            <img src={exemples1} alt="Développement Agen"/>
                            </div>
                            <div className="w-full md:w-1/4" style={{marginTop:'auto', marginBottom:'auto'}}>
                                <img src={circle} alt="Création site internet Agen" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /><br/>
                                <p style={{fontSize:'25px', textAlign:'center'}}>Maintenance du site de vente en ligne</p><br/>
                                <img src={circle} alt="Création site internet Toulouse" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /><br/>
                                <p style={{fontSize:'25px', textAlign:'center'}}>Formation à l’utilisation du back-office</p><br/>
                                <img src={circle} alt="Création site internet Agen" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /><br/>
                                <p style={{fontSize:'25px', textAlign:'center'}}>Intégration d’avis clients</p><br/>
                                <img src={circle} alt="Création site internet Toulouse" style={{marginLeft:'auto', marginRight:'auto', display:'block'}} /><br/>
                                <p style={{fontSize:'25px', textAlign:'center'}}>Responsive design (design adapté aux smartphones et tablettes)</p>
                            </div>
                        </section>
                                <br/>
                    </section>


                    <section className="flex w-full flex-col md:flex-row mx-auto px-0 my-4" style={{marginTop:'0px', marginBottom:'0px'}}>
                        <div className="w-full md:w-1/2 bg-bleu" style={{backgroundColor: '#37c5ee', padding:'130px', color:'white', fontSize:'1.5em'}} data-aos="zoom-in">
                            <p className="font-bold text-4xl">Nous maitrisons …</p>
                        </div>
                        <div className="w-full md:w-1/2 bg-white text-white" style={{padding:'130px'}} data-aos="zoom-in" data-aos-delay="200">
                            <p className="text-3xl text-center text-black">les langages …</p><br/>
                            <section className="max-w-7xl w-full mx-auto px-4 pt-0 pb-0 my-2 flex flex-col md:flex-row">
                                <div className="w-full md:w-1/4 my-3">
                                    <img src={html} alt="HTML" />
                                </div>
                                <div className="w-full md:w-1/4 my-3">
                                    <img src={css} alt="CSS" />
                                </div>
                                <div className="w-full md:w-1/4 my-3">
                                    <img src={javascript} alt="Javascript" />
                                </div>
                                <div className="w-full md:w-1/4 mt-3">
                                    <img src={php} alt="Php" />
                                </div>
                            </section>
                        </div>
                    </section>
                    <section className="flex w-full flex-col md:flex-row mx-auto px-0 my-4 my-0">
                        <div className="w-full md:w-1/2 bg-white px-6 py-24" data-aos="zoom-in">
                                <p className="text-3xl text-center text-black">les gestionnaires de base de données …</p>
                            <section className="max-w-7xl w-full mx-auto px-4 pt-0 pb-0 my-2 flex">
                                <div className="w-1/2">
                                    <img src={mysql} alt="Mysql" />
                                </div>
                                <div className="w-1/2">
                                    <img src={postgre} alt="Postgre" />
                                </div>
                            </section>
                        </div>
                        <div className="w-full md:w-1/2 bg-bleu py-24 px-6 text-white" data-aos="zoom-in" data-aos-delay="200">
                        <p className="text-3xl text-center text-black">les CMS …</p><br/>
                        <section className="max-w-7xl w-full mx-auto px-1 pt-0 pb-0 my-2 flex">
                                <div className="w-1/3">
                                    <img src={wordpress} alt="Wordpress" />
                                </div>
                                <div className="w-1/3">
                                    <img src={drupal} alt="Drupal" />
                                </div>
                                <div className="w-1/3">
                                    <img src={prestashop} alt="Prestashop" />
                                </div>
                            </section>
                        </div>
                    </section>
                    <section>
                        <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                            <p className="text-3xl text-center text-black" style={{fontSize:'25px', textAlign:'center', color:'black'}}>et enfin les frameworks …</p><br/>
                        </section>

                        <section className="max-w-7xl w-full mx-auto px-4 pt-0 pb-0 my-2 flex">
                            <div className="w-1/4">
                                <img src={bootstrap} alt="Bootstrap" />
                            </div>
                            <div className="w-1/4">
                                <img src={laravel} alt="Laravel" />
                            </div>
                            <div className="w-1/4">
                                <img src={symfony} alt="Symfony" />
                            </div>
                            <div className="w-1/4">
                                <img src={vue} alt="Vue" />
                            </div>
                        </section>
                    </section>

                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4 ">
                            <section className="w-full">
                                <br/>
                                <hr className="blue"></hr><br/>
                                    <h2 data-aos='fade-right' className="text-center text-2xl md:text-4xl century text-bleu">Vous souhaitez <Link className="hover:text-black" to="/creation-de-site-internet-a-agen">créer un site web</Link> ? Vous avez pour projet de développer votre entreprise et donc créer une boutique en ligne ?</h2>
                                    <br />
                            </section>
                        </section>
                    <section className="max-w-6xl w-full mx-auto px-4 py-6 my-4 flex">
                            <div className="w-full">
                               <h3 className="text-xl font-bold">Notre équipe technique répond à vos besoins…</h3><br/>
                               <p className="text-md">Quel que soit le <strong>type de site web</strong> que vous souhaitez, l’équipe technique de notre <strong>agence de création de site internet située à Agen</strong> saura répondre à vos besoins. Nous possédons toutes les <strong>connaissances techniques</strong> ainsi que les <strong>outils nécessaires pour créer un site web</strong> de A à Z. Qu’il s’agisse de la <strong>création d’un site internet vitrine</strong> pour développer votre <strong>communication web</strong>, d’un site administrable <strong>simple d’utilisation</strong> pour que vous puissiez mettre à jour de façon autonome votre <strong>site internet en ligne</strong> ou bien encore un site <strong>boutique e-commerce</strong> pour <strong>vendre en ligne</strong> vos produits, nous vous garantissons un <strong>site responsive</strong> dans le respect de votre <strong>identité graphique</strong>.</p><br/>
                                <h3 className="text-xl font-bold">… et l’équipe du référencement se charge de vous rendre visible.</h3><br/>
                                <p className="text-md">Après la <strong>conception du site web</strong> de votre entreprise soit finalisée, l’équipe de <strong>référencement web</strong> mettra en place l’ensemble des techniques nécessaires de sorte que votre site soit positionné de façon favorable (c’est-à-dire en <strong>première page</strong>) sur les moteurs de recherche. Sans travail de <Link className="hover:text-bleu" to="/referencement-de-site-internet-47-31"><strong>référencement naturel</strong></Link> ou <Link className="hover:text-bleu" to="/agence-adwords-47-31"><strong>référencement payant</strong></Link>, votre site internet ne sera pas présent sur Google et, par conséquent, ne vous rapportera aucun contacts, ni retour sur investissement.</p>
                            </div>
                    </section>
                    
                    <section className=" w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bgDev + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h2 data-aos='fade-right' className="text-center text-white text-2xl md:text-4xl century">
                                <span className="text-bleu">/</span>Alors, convaincu ? Vous souhaitez être contacté ? N’attendez plus et entrez votre adresse mail.


                            </h2>

                        </div>

                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row text-center mt-24 mb-12">
                            <RappelForm />
                        </div>

                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start text-center my-12">
                            <div className="w-full md:w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                                <img src={laptop} width="80px" />
                                <p className="text-xl text-white century pt-3">WEBMARKETING</p>
                            </div>
                            <div className="w-full my-4 md:w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="400">

                                <img src={web} width="80px" />
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT NATUREL</p>
                            </div>
                            <div className="w-full md:w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="600">
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
query lastsThreePostsDev {
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
export default Dev;