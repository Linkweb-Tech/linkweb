import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import LastPosts from '../components/lastposts';
import SEO from "../components/seo";
import author from "../images/author-linkweb.png";
import ButtonBlog from "../components/buttonblog";
import RoundButton from "../components/roundButton.js";
import CategoriesList from "../components/categoriesList";
import LastPostsMini from '../components/lastpostsmini';
import { Timeline } from 'react-twitter-widgets';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  EmailIcon,
} from 'react-share';

import '../scss/singlepost.scss';

import CreerSite from "../images/creer-un-site.jpg";
import RefSite from "../images/referencer-un-site.jpg";
import AgenceAds from "../images/campagne-ads.jpg";
import fbIcon from "../images/facebook-logo.svg";
import twitterIcon from "../images/twitter-logo.svg";
import instaIcon from "../images/instagram-logo.svg";

const BlogPostTemplate = ({ data }) => (
    <Layout location={data.wordpressPost.title}>
        <SEO article={true} title={data.wordpressPost.yoast.title} description={data.wordpressPost.yoast.metadesc} url={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} date={data.wordpressPost.date} slug={data.wordpressPost.slug} modified={data.wordpressPost.modified} />
        <section className="w-full h-screen mx-auto px-4 py-6 mb-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{ backgroundColor:'#00000094', backgroundBlendMode:'multiply', backgroundImage: 'url(' + data.wordpressPost.featured_media.source_url + ')' }}>
                        <a href={`/blog/category/${data.wordpressPost.categories[0].slug}/`} data-aos="zoom-in" data-aos-delay="700" className="bg-bleu py-3 px-12 text-white font-bold hover:shadow-xl">{data.wordpressPost.categories[0].name}</a>
                        <h1 data-aos="fade-up" data-aos-delay="500" className="font-bold century px-2 md:px-6 xl:px-48 text-5xl sm:text-6xl text-center text-white">
                        {data.wordpressPost.title}
                        </h1>
                        <br/>
                        <img src={author} alt="Création Site internet Agen" style={{width:'100px'}} data-aos="fade-right"/>
                        <p className="text-white text-center italic my-6 font-bold" data-aos="fade-left">
                          Par {data.wordpressPost.author.name} <br/> {data.wordpressPost.date}
                        </p>
                        <a href="/actualite-digitale/" className="text-white my-2 font-normal text-sm hover:text-bleu" data-aos="fade-up">> Revenir à l'accueil</a>

        </section>
        <section className="px-6 lg:px-64 font-bold" data-aos="fade-left">
          <Link className="hover:text-bleu" to="/actualite-digitale/"> Accueil du blog</Link> <span className="text-bleu">>></span> <a className="hover:text-bleu" 
          href={`/blog/category/${data.wordpressPost.categories[0].slug}/`}>{data.wordpressPost.categories[0].name}</a> 
            <span className="text-bleu">>></span> 
            <Link className="hover:text-bleu" to={`/blog/${data.wordpressPost.slug}/`}>{data.wordpressPost.title}</Link> 
        </section>
        <section className="flex flex-col xl:flex-row flex px-12 md:px-24 lg:px-32 xl:px-64">
            <section className="lg:pl-32 md:pr-24 pt-6 pb-0 w-full xl:w-3/4 flex flex-col">
              <div className="post_content" style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} data-aos="fade-up"/>
              <br/>
              <h3 className="font-bold mt-8 lg:mt-18 mb-6 text-lg text-center">Vous souhaitez partager cet article ?</h3>
              <div className="flex flex-row justify-center">
                  <FacebookShareButton className="px-1" url={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} shareURL={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} quote={data.wordpressPost.yoast.metadesc}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                  <TwitterShareButton className="px-1" url={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} shareURL={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} title={data.wordpressPost.yoast.title} via="AgenceLinkweb"><TwitterIcon size={32} round={true} /></TwitterShareButton>
                  <LinkedinShareButton className="px-1" url={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} shareURL={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`}><LinkedinIcon size={32} round={true} /></LinkedinShareButton>
                  <EmailShareButton className="px-1" url={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} shareURL={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} subject={data.wordpressPost.yoast.title} body={data.wordpressPost.yoast.metadesc} separator=" - "><EmailIcon size={32} round={true} /></EmailShareButton>
              </div>
              <div className="w-full flex flex-col justify-center bg-bleu items-end px-4 pt-12 pb-0 sm:mt-10 bg-cover my-8">
                  <div className="max-w-5xl mx-auto flex items-center">
                      <h2 data-aos='fade-right' className="text-center text-white text-2xl lg:text-4xl century">
                        Vous souhaitez être recontacté pour la mise en place de votre solution web ?
                      </h2>
                  </div>
                  <div className="max-w-6xl mx-auto flex text-center mb-12">
                  {/* <RappelForm /> */}
                  <RoundButton color="darkgrey" url="/contact-agence-web-toulouse/" text="Contactez-nous" />
                  </div>
              </div>
            </section>
            <div className="w-full xl:w-1/4 mt-6 mb-3 px-6 py-10">
              <section className="flex justify-center mb-6 text-white">
                <div className="w-full md:w-3/4 xl:w-full  py-8 md:py-8 px-6 bg-darkgrey" style={{borderRadius:'5%'}} >
                  <h3 className="italic text-center text-xl">À Propos</h3>
                  <br/>
                  <h4 className="italic text-center font-bold text-md">linkweb47</h4>
                  <br/>
                  <p className="text-justify" style={{textAlignLast:'center'}}>
                      Linkweb est une agence de communication web basée à Agen (47) et Toulouse (31). Spécialisés dans la création de site internet, le référencement SEO et le SEA, nous accompagnons nos clients pour des projets sur-mesure et qui répondent à leurs attentes.
                  </p>
                  <br/>
            <div className="w-2/3 md:w-1/3 lg:w-1/2 xl:w-2/3 flex mx-auto block my-4">
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
                        <ButtonBlog className="rounded-none century font-thin" url="/contact-agence-web-toulouse/" text="Demander un devis"/><br/>
                        <h3 className="font-bold pb-3">CATÉGORIES</h3>
                        <CategoriesList list={ data.allWordpressCategory.edges} />
                        <h3 className="font-bold pt-12 pb-3">DERNIERS ARTICLES</h3>
                        <LastPostsMini lastposts={data.allWordpressPost.edges} />
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
        
        <section className="flex flex-col items-center px-12">
          <div className="w-full xl:w-2/3 font-bold text-2xl text-left ">
                <br/>
                <h3 className="ml-8">Plus d'informations...</h3>
                <br/>
                <LastPosts lastposts={data.allWordpressPost.edges} />
          </div>
          <div className="w-2/3 md:w-1/5 mb-6" data-aos="fade-up">
               <ButtonBlog className="rounded-none century font-thin " url="/blog/category/tous-articles/" text="Voir tous les articles"/><br/>
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
      date(formatString: "DD/MM/YYYY", locale: "fr")
      modified(locale: "fr", formatString: "DD/MM/YYYY")
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
        slug
      }
    }
    allWordpressPost(limit: 6) {
      edges {
          node {
          id
          title
          slug
          date(formatString: "DD/MM/YYYY", locale: "fr")
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
  }
`