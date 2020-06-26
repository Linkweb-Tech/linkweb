import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import ButtonBlog from "../components/buttonblog";
import RoundButton from "../components/roundButton.js";
// import RappelForm from "../components/rappelForm";
import CategoriesList from "../components/categoriesList";
import LastPostsMini from '../components/lastpostsmini';
import { Timeline } from 'react-twitter-widgets';
import ButtonMenu from '../components/buttonmenu.js';
import BlogMenu from '../components/menublog.js';
import '../scss/global.scss';

import background from "../images/background-blog.jpg";
import blocBg from "../images/background.jpg";
import CreerSite from "../images/creer-un-site.jpg";
import RefSite from "../images/referencer-un-site.jpg";
import AgenceAds from "../images/campagne-ads.jpg";
import world from "../images/grid-world.png";
import iconseo from "../images/seo-performance-marketing-graphic.png";
import iconsea from "../images/waving-flag.png";
import fbIcon from "../images/facebook-logo.svg";
import twitterIcon from "../images/twitter-logo.svg";
import instaIcon from "../images/instagram-logo.svg";




class ActualiteDigitale extends React.Component {

    constructor(props) {
        super(props);
    }

render() {
    return (
        <Layout location={this.props.location}>

            <SEO
                title="Actualité Digitale | Blog Numérique | Agence Web Linkweb à Agen (47)"
                description="Suivez l'actualité digitale grâce au blog de l'Agence Web Linkweb située à Agen (47) et Toulouse (31), agence spécialisée dans la création de site internet."
                keywords={[`Actualité Digitale`, `Blog SEO`, `Actualités SEO`]}
                url="https://linkweb.fr/actualite-digitale/"
                nom="Blog"
                slug="actualite-digitale/"
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
                
                <section className="w-full mx-auto pb-0 px-4 bg-black flex flex-col justify-center items-center" style={{background:'#000000d9 url(' + background +')', backgroundBlendMode:'multiply', backgroundSize:'cover', backgroundPosition:'center', height:'450px', minHeight:'550px'}}>
                    <Link to="/actualite-digitale/"><h2 data-aos="fade-down" data-aos-delay="500" className="century text-4xl sm:text-6xl text-center text-white mt-40">
                    Le Blog<span className="text-bleu">/</span>Linkweb
                    </h2></Link>
                    <h1 className="century text-lg sm:text-2xl text-center text-white" data-aos="fade-up" data-aos-delay="500">Toute l'actualité digitale</h1>
                    <br/>
                    {/* Réseaux Sociaux */}
                    <section className="w-full flex flex-row justify-center text-white ">
                            <div className="w-1/3 md:w-1/6 lg:w-1/12 flex flex-row">
                                <div className="w-1/3 block mx-auto" data-aos="fade-left">
                                    <a href="https://facebook.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex justify-center no-underline text-white">
                                    <img 
                                    src={ fbIcon }
                                    alt="Réseaux sociaux"
                                    className="w-6 fill-current"
                                    />
                                    </a>
                                </div>
                                <div className="w-1/3 block, mx-auto" data-aos="fade-up">
                                    <a href="https://twitter.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex justify-center no-underline text-white">
                                    <img 
                                    src={ twitterIcon }
                                    alt="Réseaux sociaux"
                                    className="w-6 fill-current"
                                    />
                                    </a>
                                </div>
                                <div className="w-1/3 block, mx-auto" data-aos="fade-right">
                                    <a href="https://instagram.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex justify-center no-underline text-white">
                                    <img 
                                    src={ instaIcon }
                                    alt="Réseaux sociaux"
                                    className="w-6 fill-current"
                                    style={{maxHeight:'50px', minWidth:'15px'}}
                                    />
                                    </a>
                                </div>
                            </div>
                    </section>
                    {/* FIN Réseaux Sociaux */}
                </section>
                {/* Menu de catégories 
                <section className="flex flex-row justify-center" data-aos="zoom-in">
                    <div className="w-full menublog century uppercase lg:w-3/4 bg-bleu flex flex-row text-md text-center text-white p-3 py-4 font-bold -mt-6">
                        <div className="itemmenublog w-full lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/actus/">Actualités</Link></div>|
                        <div className="itemmenublog w-full lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/agence/">Agence</Link></div>|
                        <div className="itemmenublog w-full lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/referencement/"><span className="opacity-0 absolute md:opacity-100 md:ml-6 lg:ml-10 md:-mr-8 md:relative mx-auto">Référencement</span><span className="opacity-100 relative md:opacity-0">SEO/SEA</span></Link></div>|
                        <div className="itemmenublog w-full lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/tendances/">Tendances</Link></div>
                    </div>
                </section>
                FIN Menu de catégories 
                <section className="w-full flex flex-row justify-end h-4 mb-10 font-medium">
                        <section className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 flex bg-bleu text-white text-center text-xs sm:text-sm md:text-md" style={{borderBottomLeftRadius:'27px', minHeight:'48px'}}>
                            <ul className="flex flex-row w-full text-xs md:text-base uppercase font-bold mx-auto items-center text-center">
                                <li className=" w-full md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/actus/">Actualités</Link></li>
                                <li className=" w-full md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/agence/">Agence</Link></li>
                                <li className=" w-full md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/referencement/">Référencement</Link></li>
                                <li className=" w-full md:w-1/4 lg:w-1/4 hover:text-darkgrey"><Link to="/blog/category/tendances/">Tendances</Link></li>
                            </ul>
                        </section>
                </section>*/}
                <BlogMenu />
                <section className=" flex flex-col xl:flex-row flex justify-content-start mb-10 px-12 md:px-24 lg:px-32 xl:px-48">
                    <div className="w-full xl:w-3/4">
                        <section className=" flex flex-col align-center justify-center text-center md:mt-12 my-0 sm:mb-3">
                            <LastPosts lastposts={this.props.data.allWordpressPost.edges} />
                            <section className="flex justify-center">
                                <div className="w-2/3 lg:w-1/4" data-aos="fade-up">
                                    <ButtonBlog className="rounded-none century font-thin " url="/blog/category/tous-articles/" text="Voir tous les articles"/><br/>
                                </div>
                            </section>
                                <section className="w-full flex flex-col justify-center bg-bleu items-end px-4 pt-12 pb-0 sm:my-2 bg-cover my-24">
                                    <div className="max-w-5xl mx-auto flex items-center">
                                        <h2 data-aos='fade-right' className="text-center text-white text-2xl lg:text-4xl century">
                                            Vous souhaitez être recontacté pour la mise en place de votre solution web ?
                                        </h2>
                                    </div>
                                    <div className="max-w-6xl mx-auto flex text-center mb-12">
                                    {/* <RappelForm /> */}
                                    <RoundButton color="darkgrey" url="/contact-agence-web-toulouse/" text="Contactez-nous" />
                                    </div>
                                </section>
                                <section className="w-full mx-auto py-6 mt-4 mb-0">
                                    <h2 data-aos='fade-right' className="text-left text-4xl century pl-8">
                                        À propos de Référencement
                                    </h2>
                                    <br/>
                                    <LastPosts lastposts={this.props.data.ref.edges} />
                                </section>
                                <section className="flex justify-center">
                                <div className="w-2/3 md:w-1/4" data-aos="fade-up">
                                    <ButtonBlog className="rounded-none century font-thin" url="/blog/category/referencement/" text="En savoir plus"/><br/>
                                </div>
                                </section>
                                <section className="flex flex-col md:flex-row justify-center px-5 mr-0">
                                    <div data-aos="fade-in" className="blocliens w-full lg:w-1/2 xl:w-6/12 bg-darkgrey my-4 border border-darkgrey mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{background:'#00cfffe0 url( '+ blocBg +')', borderRadius: '15px', borderColor: '#d4d4d4', backgroundBlendMode: 'multiply', backgroundSize: 'cover', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
                                        <img src={world} className="w-9 h-10 mx-auto block" alt="Création site internet Toulouse/"/><br/>
                                        <Link className="w-2/3 font-bold hover:text-bleu text-left" to="/creation-site-internet-toulouse/"><h2 className="text-center text-white text-xl px-4 font-bold century">Création Web</h2></Link>
                                        <hr className="blue"></hr>
                                        <p className="text-xs px-4 text-white text-center">L’<strong>Agence web</strong> est spécialisée dans la <strong>création de site internet à Agen (47) et Toulouse (31)</strong>. <strong>Site vitrine, e-commerce ou administrable</strong>, notre équipe est en mesure de mettre en place la solution qui s’impose en fonction de vos besoins, de vos envies mais aussi des dernières <strong>tendances digitales</strong>.</p>
                                        <br />
                                        <div className="w-2/3 mx-auto block">
                                            <br />
                                            <ButtonBlog url="/creation-site-internet-toulouse/" text="Créer son site web" color="bleu" />
                                        </div>
                                    </div>
                                    <div data-aos="fade-in" className="blocliens w-full lg:w-1/2 xl:w-6/12 bg-darkgrey my-4 border border-darkgrey mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{background:'#00b1e2 url( '+ blocBg +')', borderRadius: '15px', borderColor: '#d4d4d4', backgroundBlendMode: 'multiply', backgroundSize: 'cover', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
                                        <img src={iconseo} className="w-9 h-10 mx-auto block" alt="Création site internet Toulouse/"/><br/>
                                        <Link className="w-2/3 font-bold hover:text-bleu text-left" to="/referencement-de-site-internet-47-31/"><h2 className="text-center text-white text-xl px-4 font-bold century">Référencement Naturel</h2></Link>
                                        <hr className="blue"></hr>
                                        <p className="text-xs px-4 text-white text-center">Notre <strong>agence de référencement</strong> apporte de la <strong>visibilité</strong> à <strong>votre site internet</strong> grâce à la méthode du <strong>référencement naturel (SEO)</strong>. Notre équipe de spécialistes effectue un travail à la fois technique et éditorial régulier pour vous permettre d’avoir un site qui répondant aux canons de <strong>Google</strong>.</p>
                                        <br />
                                        <div className="w-2/3 mx-auto block">
                                            <br />
                                            <ButtonBlog url="/referencement-de-site-internet-47-31/" text="Développer son SEO" color="bleu" />
                                        </div>
                                    </div>
                                    <div data-aos="fade-in" className="blocliens w-full lg:w-1/2 xl:w-6/12 bg-darkgrey my-4 border border-darkgrey mx-auto md:mx-4 hover:shadow-xl py-6 century" style={{background:'#057898 url( '+ blocBg +')', borderRadius: '15px', borderColor: '#d4d4d4', backgroundBlendMode: 'multiply', backgroundSize: 'cover', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
                                        <img src={iconsea} className="w-9 h-10 mx-auto block" alt="Création site internet Toulouse/"/><br/>
                                        <Link className="w-2/3 font-bold hover:text-bleu text-left" to="/agence-adwords-47-31/"><h2 className="text-center text-white text-xl px-4 font-bold century">Référencement Payant</h2></Link>
                                        <hr className="blue"></hr>
                                        <p className="text-xs px-4 text-white text-center">Vous souhaitez <strong>générer du trafic</strong>, attirer de nouveaux prospects ou bien convertir vos utilisateurs ? Nous mettons en place vos <strong>campagnes Google Ads</strong> basées sur la qualité et la pertinence des annonces afin de vous permettre de maximiser votre <strong>retour sur investissement</strong> grâce à votre site.</p>
                                        <br />
                                        <div className="w-2/3 mx-auto block">
                                            <br />
                                            <ButtonBlog url="/agence-adwords-47-31/" text="Créer une campagne Ads" color="bleu" />
                                        </div>
                                    </div>
                                </section>
                        </section>                    
                    </div>
                    <div className="w-full xl:w-1/4 mt-6 mb-3 px-12 mt-20">
                        <ButtonBlog className="rounded-none century font-thin" url="/contact-agence-web-toulouse/" text="Demander un devis"/><br/>
                        {/* <h3 className="font-bold pb-3">CATÉGORIES</h3>
                        <CategoriesList list={ this.props.data.allWordpressCategory.edges} /> */}
                        <h3 className="font-bold pt-3 pb-3">DERNIERS ARTICLES</h3>
                        <LastPostsMini lastposts={this.props.data.lastmini.edges} />
                        <Link to="/creation-site-internet-toulouse/"><img src={CreerSite} alt="Création site internet Agen"/></Link>
                        <Link to="/referencement-de-site-internet-47-31/"><img src={RefSite} alt="Création site internet Agen"/></Link>
                        <Link to="/agence-adwords-47-31/"><img src={AgenceAds} alt="Création site internet Agen"/></Link><br/>
                        <h3 className="font-bold">LINKWEB SUR TWITTER</h3><br/>
                        <Timeline
                            dataSource={{
                            sourceType: 'profile',
                            screenName: 'AgenceLinkweb'
                            }}
                            options={{
                            username: 'AgenceLinkweb',
                            height: '600', 
                            lang: 'fr'
                            }}
                            onLoad={() => console.log('Timeline is loaded!')}
                        />
                    </div>
                </section>

                
                
            {/* </PageTransition> */}
        </Layout>
    );
}
};


export const query = graphql`
query lastsThreePostsActualitedigitale {
    allWordpressPost(limit: 6) {
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
    lastmini: allWordpressPost(limit: 5) {
        edges {
            node {
            id
            title
            slug
            modified(locale: "fr", formatString: "DD/MM/YYYY")
            link
            featured_media {
                source_url
            }
            }
        }
    }
    allWordpressCategory {
        edges {
            node {
            slug
            name
            link
            }
        }
    }
    ref: allWordpressPost(limit: 3, filter: {categories: {elemMatch: {slug: {eq: "referencement"}}}}) {
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
export default ActualiteDigitale;
