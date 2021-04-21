import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../../components/seo";
import LastPosts from '../../components/lastposts';

import BoutonBlog from '../../components/boutonBlog.js';
import RoundButton from "../../components/roundButton";

import LastPostsMini from '../../components/lastpostsmini';
import { Timeline } from 'react-twitter-widgets';
import BlogMenu from "../../components/menublog.js";
import '../../scss/global.scss';

import blocBg from "../../images/background.jpg";
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";
import CreerSite from "../../images/besoins.jpg";
import RefSite from "../../images/referencement-google-toulouse.jpg";
import AgenceAds from "../../images/analytics-site-internet.jpg";
import fbIcon from "../../images/facebook-logo.svg";
import twitterIcon from "../../images/twitter-logo.svg";
import instaIcon from "../../images/instagram-logo.svg";
import background from "../../images/background-blog.jpg";




class CatTous extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Tous les articles - Agence Communication Linkweb Agen"
                    description="Retrouvez tous les articles du blog d'actualité digitale propulsé par l'agence de communication web Linkweb située à Agen (47) et Toulouse (31)."
                    keywords={[`Actualité Digitale`, `Blog SEO`, `Actualités SEO`]}
                    url="https://linkweb.fr/blog/category/tous-articles/"
                    nom="Tous les articles"
                    slug="blog/category/tous-articles/"
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
                <section className="w-full mx-auto pb-0 px-4 py-6 bg-black flex flex-col items-center" style={{ background: '#000000d9 url(' + background + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundPosition: 'center', height: '450px' }}>
                    <h1 data-aos="fade-up" data-aos-delay="500" className="century text-5xl sm:text-6xl text-center text-white mt-48">
                        Tous les articles
                    </h1>
                    <div className="w-1/2 md:w-full py-2 hover:bg-white flex text-white hover:text-black" style={{ border: 'solid 1px #ffffff', borderRadius: '15px', width: '10%', transition: 'all ease 0.5s' }}><a href="/actualite-digitale/" className="w-full flex font-bold justify-center century my-2 font-normal text-sm">Revenir à l'accueil</a></div>
                    <br />
                    <section className="w-full flex flex-row justify-center text-white">
                        <div className="w-1/3 md:w-1/6 lg:w-1/12 flex flex-row">
                            <div className="blocauteur mx-auto" data-aos="fade-left">
                                <a href="https://facebook.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex items-center no-underline text-white">
                                    <img
                                        src={fbIcon}
                                        alt="Réseaux sociaux"
                                        className="w-6 fill-current"
                                    />
                                </a>
                            </div>
                            <div className="blocauteur mx-auto" data-aos="fade-up">
                                <a href="https://twitter.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex items-center no-underline text-white">
                                    <img
                                        src={twitterIcon}
                                        alt="Réseaux sociaux"
                                        className="w-6 fill-current"
                                    />
                                </a>
                            </div>
                            <div className="blocauteur mx-auto" data-aos="fade-right">
                                <a href="https://instagram.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex items-center no-underline text-white">
                                    <img
                                        src={instaIcon}
                                        alt="Réseaux sociaux"
                                        className="w-6 fill-current"
                                    />
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
                <BlogMenu />
                <section className="flex flex-col xl:flex-row flex justify-center mb-10 px-12 md:px-24 lg:px-32 xl:px-48">
                    <div className="w-full xl:w-3/5">
                        <section className=" flex flex-col align-center justify-center text-center md:mt-12 my-0 sm:mb-3">
                            <LastPosts wrap='false' lastposts={this.props.data.tousarticles.edges} />
                            <section className="blocblog w-full flex flex-col justify-center bg-bleu items-end px-4 pt-12 pb-0 sm:my-2 bg-cover my-24" style={{ background: '#37cfeede url(' + blocBg + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', borderRadius: '15px' }}>
                                <div className="max-w-5xl mx-auto flex items-center">
                                    <h2 data-aos='fade-right' className="text-center text-white text-2xl lg:text-4xl century">
                                        Vous souhaitez être recontacté pour la mise en place de votre solution web ?
                                        </h2>
                                </div>
                                <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                                    {/* <RappelForm /> */}
                                    <RoundButton color="darkgrey" url="/contact-agence-web-toulouse/" text="Contactez-nous" />
                                </div>
                            </section>

                        </section>
                    </div>
                    <div className="w-full xl:w-1/3 mt-0 mb-3 px-12 mt-0">
                        <div className="bloccontactblog w-full lg:w-full flex flex-col justify-center items-center century text-justify order-first lg:order-last flex" style={{ background: '#3c3c3cfa url(' + bgbloc + ')', backgroundBlendMode: 'overlay', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                        {/* <h3 className="font-bold pb-3">CATÉGORIES</h3>
                        <CategoriesList list={ this.props.data.allWpCategory.edges} /> */}
                        <hr className="hrblog"></hr>
                        <h3 className="font-bold century text-bleu pt-3 pb-3">Toute l'Actualité Digitale</h3>
                        <hr className="hrblog"></hr>
                        <LastPostsMini lastposts={this.props.data.lastmini.edges} />
                        <section className="flex -mt-4 justify-center mb-3 " >
                            <div className="w-1/2 md:w-full py-2 hover:bg-bleu text-bleu hover:text-white" style={{ border: 'solid 1px #37cfee', transition: 'all ease 0.5s' }}>
                                <Link className="text-sm century font-thin" to="/blog/category/tous-articles/"><span className="font-bold py-2 mx-auto flex justify-center">Voir tous les articles</span></Link>
                            </div>
                        </section>
                        <br />
                        <Link to="/creation-site-internet-toulouse/"><section className="sidebarlinks century uppercase" style={{ background: '#000000cf url(' + CreerSite + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}><h4>Créer un site internet</h4></section></Link>
                        <Link to="/referencement-toulouse/"><section className="sidebarlinks century uppercase" style={{ background: '#000000cf url(' + RefSite + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}><h4>Optimiser mon référencement naturel</h4></section></Link>
                        <Link to="/agence-adwords-47-31/"><section className="sidebarlinks century uppercase" style={{ background: '#000000cf url(' + AgenceAds + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}><h4>Lancer une campagne Google Ads</h4></section></Link>
                        <br />
                        <hr className="hrblog"></hr>
                        <h3 className="font-bold century text-bleu pt-3 ">Retrouvez Linkweb sur Twitter</h3><br />
                        <hr className="hrblog"></hr>
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
query lastsThreePostsCatTous {
    lastmini: allWpPost(limit: 3) {
        edges {
            node {
            id
            title
            slug
            modified(locale: "fr", formatString: "DD/MM/YYYY")
            link
            featuredImage {
                node {
                    sourceUrl
                }
            }
            }
        }
    }
    allWpCategory {
        edges {
            node {
            slug
            name
            link
            }
        }
    }
    tousarticles: allWpPost(limit: 270, filter: {categories: {nodes:{elemMatch: {slug: {eq: "tous-articles"}}}}}) {
        edges {
            node {
            id
            title
            slug
            date(locale: "fr", formatString: "dddd DD MMMM YYYY")
            modified(locale: "fr", formatString: "DD/MM/YYYY")
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
export default CatTous;
