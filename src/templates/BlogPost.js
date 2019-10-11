import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import author from "../images/author-linkweb.png";
import ButtonBlog from "../components/buttonblog";
import CategoriesList from "../components/categoriesList";
import LastPostsMini from '../components/lastpostsmini';
import { Timeline } from 'react-twitter-widgets';

import '../scss/singlepost.scss';

import CreerSite from "../images/creer-un-site.jpg";
import RefSite from "../images/referencer-un-site.jpg";
import AgenceAds from "../images/campagne-ads.jpg";
import fbIcon from "../images/facebook-logo.svg";
import twitterIcon from "../images/twitter-logo.svg";
import instaIcon from "../images/instagram-logo.svg";

const BlogPostTemplate = ({ data }) => (
    <Layout location={data.wordpressPost.title}>
        <SEO title={data.wordpressPost.yoast.title} description={data.wordpressPost.yoast.metadesc} url={data.wordpressPost.link}/>
        <section className="w-full h-screen mx-auto px-4 py-6 mb-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ backgroundColor:'#00000094', backgroundBlendMode:'multiply', backgroundImage: 'url(' + data.wordpressPost.featured_media.source_url + ')' }}>
                        <h1 data-aos="fade-up" data-aos-delay="500" className="font-bold century px-2 md:px-6 xl:px-32 text-5xl sm:text-6xl text-center text-white">
                        {data.wordpressPost.title}
                        </h1>
                        <br/>
                        <img src={author} alt="Création Site internet Agen" style={{width:'100px'}}/>
                        <p className="text-white text-center italic my-6 font-bold">
                          Par {data.wordpressPost.author.name} <br/> {data.wordpressPost.date}
                        </p>
        </section>
        <section className="px-6 lg:px-64 font-bold">
          <Link className="hover:text-bleu" to="/actualite-digitale"> Accueil du blog</Link> <span className="text-bleu">>></span> <a className="hover:text-bleu" 
          href={`/category/${$data.wordpressPost.categories[0].slug}`}>{data.wordpressPost.categories[0].name}</a> 
            <span className="text-bleu">>></span> 
            <Link className="hover:text-bleu" to={`/blog/${data.wordpressPost.slug}`}>{data.wordpressPost.title}</Link> 
        </section>
        <section className="flex flex-col xl:flex-row flex justify-content-start mb-10 px-12 md:px-24 lg:px-32 xl:px-48">
        <div className="px-6 lg:px-48 py-24 w-full xl:w-3/4 post_content" style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
        <div className="w-full xl:w-1/4 mt-6 mb-3 px-12 ">
                        <ButtonBlog className="rounded-none century font-thin" url="/contact-agence-web-toulouse" text="Demander un devis"/><br/>
                        <h3 className="font-bold pb-3">CATÉGORIES</h3>
                        <CategoriesList list={ data.allWordpressCategory.edges} />
                        <h3 className="font-bold pt-12 pb-3">DERNIERS ARTICLES</h3>
                        <LastPostsMini lastposts={data.allWordpressPost.edges} />
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
        <section className=" py-24 w-full xl:w-3/4 flex justify-center mb-0 md:mb-16 md:px-6 lg:px-48 text-white">
          <div className="w-full md:w-3/4 xl:w-full px-6 lg:px-48 py-8 md:py-8  bg-darkgrey mx-24">
            <h3 className="italic text-center text-xl">À Propos</h3>
            <br/>
            <h4 className="italic text-center font-bold text-md">linkweb47</h4>
            <br/>
            <p className="text-justify" style={{textAlignLast:'center'}}>Linkweb est une agence de communication web basée à Agen (47) et Toulouse (31). Spécialisés dans la création de site internet, le référencement SEO et le SEA, nous accompagnons nos clients pour des projets sur-mesure et qui répondent à leurs attentes.
            </p>
            <br/>
            <div className="flex mx-auto block my-4">
            <div className="w-1/3">
                <a href="https://www.facebook.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex no-underline text-white">
                <img 
                  src={ fbIcon }
                  alt="Réseaux sociaux"
                  className="w-6 fill-current mx-auto block"
                />
                </a>
          </div>
          <div className="w-1/3">
                <a href="https://twitter.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex no-underline text-white">
                <img 
                  src={ twitterIcon }
                  alt="Réseaux sociaux"
                  className="w-6 fill-current mx-auto block"
                />
                </a>
          </div>
          <div className="w-1/3">
                <a href="https://www.instagram.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex no-underline text-white">
                <img 
                  src={ instaIcon }
                  alt="Réseaux sociaux"
                  className="w-6 fill-current mx-auto block"
                />
              </a>
          </div>
          </div>
          </div>
        </section>    
    </Layout>
)
export default BlogPostTemplate
export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      slug
      date(formatString: "DD MMMM, YYYY", locale: "fr")
      link
      author {
        name
      }
      featured_media {
        source_url
      }
      yoast {
        title
        metadesc
      }
      categories {
        name
        link
      }
    }
    allWordpressPost(limit: 3) {
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
  }
`