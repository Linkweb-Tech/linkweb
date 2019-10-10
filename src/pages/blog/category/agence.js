import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../../../components/seo";
import LastPosts from '../../../components/lastposts';
import RappelForm from "../../../components/rappelForm";
import ButtonBlog from "../../../components/buttonblog";
import CategoriesList from "../../../components/categoriesList";
import LastPostsMini from '../../../components/lastpostsmini';
import { Timeline } from 'react-twitter-widgets';

import CreerSite from "../../../images/creer-un-site.jpg";
import RefSite from "../../../images/referencer-un-site.jpg";
import AgenceAds from "../../../images/campagne-ads.jpg";





class CatAgence extends React.Component {

    constructor(props) {
        super(props);
    }

render() {
    return (
        <Layout location={this.props.location}>

            <SEO
                title="Actualité de l'Agence de Communication Web - Linkweb Agen (47)"
                description="Les dernières actualités de l'agence de communication web Linkweb, présente à Agen en Lot-et-Garonne (47) et Toulouse en Haute-Garonne (31)."
                keywords={[`Actualité Digitale`, `Blog SEO`, `Actualités SEO`]}
                url="https://linkweb.fr/category/agence/"
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
                <section className="w-full mx-auto pb-0 px-4 py-6 bg-blackflex flex-col justify-center items-center" style={{backgroundColor:'black', height:'450px'}}>
                    <h1 data-aos="fade-up" data-aos-delay="500" className="century text-5xl sm:text-6xl text-center text-white mt-48">
                    Agence
                    </h1>
                </section>
                <section className=" flex flex-col xl:flex-row flex justify-content-start mb-10 px-12 md:px-24 lg:px-32 xl:px-48">
                    <div className="w-full xl:w-3/4">
                        <section className=" flex flex-col align-center justify-center text-center md:mt-12 my-0 sm:mb-3">
                            <LastPosts lastposts={this.props.data.agence.edges} />
                                <section className="w-full flex flex-col justify-center bg-bleu items-end px-4 pt-12 pb-0 sm:my-2 bg-cover my-24">
                                    <div className="max-w-5xl mx-auto flex items-center">
                                        <h2 data-aos='fade-right' className="text-center text-white text-2xl lg:text-4xl century">
                                            Vous souhaitez être recontacté pour la mise en place de votre solution web ?
                                        </h2>
                                    </div>
                                    <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                                    <RappelForm />
                                    </div>
                                </section>

                        </section>                    
                    </div>
                    <div className="w-full xl:w-1/4 mt-6 mb-3 px-12 ">
                        <ButtonBlog className="rounded-none century font-thin" url="/contact-agence-web-toulouse" text="Demander un devis"/><br/>
                        <h3 className="font-bold pb-3">CATÉGORIES</h3>
                        <CategoriesList list={ this.props.data.allWordpressCategory.edges} />
                        <h3 className="font-bold pt-12 pb-3">DERNIERS ARTICLES</h3>
                        <LastPostsMini lastposts={this.props.data.lastmini.edges} />
                        <Link to="/creation-site-internet-toulouse"><img src={CreerSite} alt="Création site internet Agen"/></Link>
                        <Link to="/referencement-de-site-internet-47-31"><img src={RefSite} alt="Création site internet Agen"/></Link>
                        <Link to="/agence-adwords-47-31"><img src={AgenceAds} alt="Création site internet Agen"/></Link><br/>
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
query lastsThreePostsCatAgence {
    lastmini: allWordpressPost(limit: 3) {
        edges {
            node {
            id
            title
            slug
            modified(locale: "fr", formatString: "ddd MM YYYY")
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
    agence: allWordpressPost(limit: 6, filter: {categories: {elemMatch: {slug: {eq: "agence"}}}}) {
        edges {
            node {
            id
            title
            slug
            modified(locale: "fr", formatString: "ddd MM YYYY")
            link
            featured_media {
                source_url
            }
            }
        }
    }

}


`
export default CatAgence;