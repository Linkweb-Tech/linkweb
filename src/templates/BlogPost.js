import React, { Component } from 'react';
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import LastPosts from '../components/lastposts';
import SEO from "../components/seo";
import author from "../images/author-linkweb.png";
import linkweb from "../images/lw.png";
import BoutonBlog from '../components/boutonBlog.js';
import ButtonBlog from "../components/buttonblog";
import RoundButton from "../components/roundButton.js";
import CategoriesList from "../components/categoriesList";
import LastPostsMini from '../components/lastpostsmini';
import { TwitterTweetEmbed } from 'react-twitter-embed';
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
  LinkedinIcon,
  EmailIcon,
} from 'react-share';
import '../scss/global.scss';
import '../scss/singlepost.scss';

import blocBg from "../images/background.jpg";
import bgbloc from "../images/creation-sites-web-toulouse.jpg";
import CreerSite from "../images/besoins.jpg";
import RefSite from "../images/referencement-google-toulouse.jpg";
import AgenceAds from "../images/analytics-site-internet.jpg";
import fbIcon from "../images/facebook-logo.svg";
import twitterIcon from "../images/twitter-logo.svg";
import instaIcon from "../images/instagram-logo.svg";

const BlogPostTemplate = ({ data }) => (
  <Layout location={data.wordpressPost.title}>
    <SEO article={true} title={data.wordpressPost.yoast.title} description={data.wordpressPost.yoast.metadesc} url={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} date={data.wordpressPost.date} slug={data.wordpressPost.slug} modified={data.wordpressPost.modified} image={data.wordpressPost.featured_media.source_url} />
    <section className="bloctitrearticle w-full century mx-auto px-4 py-6 mb-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center z-40" style={{ backgroundColor: '#00000094', backgroundBlendMode: 'multiply', backgroundImage: 'url(' + data.wordpressPost.featured_media.source_url + ')' }}>
      <a href={`/blog/${data.wordpressPost.categories[0].slug}/`} className="w-1/2 md:w-full py-2 bg-bleu hover:bg-transparent flex text-white century justify-center" style={{ border: 'solid 1px #37cfee', borderRadius: '15px', width: '10%', transition: 'all ease 0.5s' }}><span className="font-bold">{data.wordpressPost.categories[0].name}</span></a>
      <h1 data-aos="fade-up" data-aos-delay="500" className="font-bold century px-2 md:px-6 xl:px-48 text-3xl sm:text-6xl text-center text-white" dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }} />
      {/*</section>{data.wordpressPost.title}
                        </h1>*/}
      <br />
      <img src={author} alt="Création Site internet Agen" style={{ width: '100px' }} data-aos="fade-right" />
      <p className="text-white text-center italic my-6 font-bold" data-aos="fade-left">
        Par {data.wordpressPost.author.name} <br /> Le {data.wordpressPost.date}
      </p>
      <div className="w-1/2 md:w-full py-2 hover:bg-white flex text-white hover:text-black" style={{ border: 'solid 1px #ffffff', borderRadius: '15px', width: '10%', transition: 'all ease 0.5s' }}><a href="/actualite-digitale/" className="w-full flex font-bold justify-center century my-2 font-normal text-sm">Revenir à l'accueil</a></div>

    </section>
    <section className="px-6 lg:px-64 font-bold" data-aos="fade-left">
      <Link className="hover:text-bleu" to="/actualite-digitale/"> Accueil du blog</Link> <span className="text-bleu">>></span> <a className="hover:text-bleu"
        href={`/blog/${data.wordpressPost.categories[0].slug}/`}>{data.wordpressPost.categories[0].name}</a>
      <span className="text-bleu">>></span>
      <Link className="hover:text-bleu" to={`/blog/${data.wordpressPost.slug}/`}>{data.wordpressPost.title}</Link>
    </section>
    <section className="flex flex-col xl:flex-row flex justify-center px-12 md:px-24 lg:px-32 xl:px-48">
      <section className="lg:pl-32 pr-0 lg:pr-24 pt-6 pb-0 w-full xl:w-3/5 flex flex-col">
        <div className="post_content" style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} data-aos="fade-up" />
        <br />
        <h3 className="font-bold mt-8 lg:mt-18 mb-6 text-lg text-center">Vous souhaitez partager cet article ?</h3>
        <div className="flex flex-row justify-center">
          <FacebookShareButton className="px-1" url={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} shareURL={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} quote={data.wordpressPost.yoast.metadesc}><FacebookIcon size={32} round={true} /></FacebookShareButton>
          <TwitterShareButton className="px-1" url={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} shareURL={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} title={data.wordpressPost.yoast.title} via="AgenceLinkweb"><TwitterIcon size={32} round={true} /></TwitterShareButton>
          <LinkedinShareButton className="px-1" url={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} shareURL={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`}><LinkedinIcon size={32} round={true} /></LinkedinShareButton>
          <EmailShareButton className="px-1" url={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} shareURL={`https://linkweb.fr/blog/${data.wordpressPost.slug}/`} subject={data.wordpressPost.yoast.title} body={data.wordpressPost.yoast.metadesc} separator=" - "><EmailIcon size={32} round={true} /></EmailShareButton>
        </div>
        <div className="blocblog w-full flex flex-col justify-center bg-bleu items-end px-4 pt-12 pb-0 sm:mt-10 bg-cover my-8" style={{ background: '#37cfeede url(' + blocBg + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', borderRadius: '15px' }}>
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
      <div className="w-full xl:w-1/3 mt-0 mb-3 px-12 mt-0 xl:mt-16">
        <section className="blocauteur flex justify-center mb-6 text-white">
          <div className="w-full md:w-3/4 xl:w-full  py-8 md:py-8 px-6 bg-darkgrey" style={{ borderRadius: '15px' }} >
            <h3 className="italic text-center text-xl font-bold">À propos de l'auteur</h3>
            <br />
            <img
              src={linkweb}
              alt="Actualité digitale"
              width="80px"
              className="mx-auto block mb-4"
            />
            <h4 className="italic text-center font-medium text-md">linkweb47</h4>
            <br />
            <p className="text-center font-light">
              Linkweb est une agence de communication web basée à Agen (47) et Toulouse (31). Spécialisés dans la création de site internet, le référencement SEO et le SEA, nous accompagnons nos clients pour des projets sur-mesure et qui répondent à leurs attentes.
                  </p>
            <br />
            <div className="w-2/3 lg:w-1/2 xl:w-2/3 flex mx-auto block my-4">
              <div className="w-1/3">
                <a href="https://www.facebook.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex no-underline text-white">
                  <img
                    src={fbIcon}
                    alt="Réseaux sociaux"
                    className="w-6 fill-current mx-auto block"
                  />
                </a>
              </div>
              <div className="w-1/3">
                <a href="https://twitter.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex no-underline text-white">
                  <img
                    src={twitterIcon}
                    alt="Réseaux sociaux"
                    className="w-6 fill-current mx-auto block"
                  />
                </a>
              </div>
              <div className="w-1/3">
                <a href="https://www.instagram.com/AgenceLinkweb" target="blank" rel="noreferrer noopener" className="flex no-underline text-white">
                  <img
                    src={instaIcon}
                    alt="Réseaux sociaux"
                    className="w-6 fill-current mx-auto block"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

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
                        <CategoriesList list={ this.props.data.allWordpressCategory.edges} /> */}
        {/* <hr className="hrblog"></hr>
                        <h3 className="font-bold century text-bleu pt-3 pb-3">Toute l'Actualité Digitale</h3>
                        <hr className="hrblog"></hr>
                        <LastPostsMini lastposts={this.props.data.lastmini.edges} />
                        <section className="flex -mt-4 justify-center mb-3 " >
                            <div className="w-1/2 md:w-full py-2 hover:bg-bleu text-bleu hover:text-white" style={{border:'solid 1px #37cfee', transition:'all ease 0.5s'}}>
                                <Link className="text-sm century font-thin" to="/blog/category/tous-articles/"><span className="font-bold py-2 mx-auto flex justify-center">Voir tous les articles</span></Link>
                            </div>
                        </section>
                        <br/> */}
        <Link to="/creation-site-internet-toulouse/"><section className="sidebarlinks century uppercase" style={{ background: '#000000cf url(' + CreerSite + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}><h4>Créer un site internet</h4></section></Link>
        <Link to="/referencement-de-site-internet-47-31/"><section className="sidebarlinks century uppercase" style={{ background: '#000000cf url(' + RefSite + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}><h4>Optimiser mon référencement naturel</h4></section></Link>
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

    <section className="flex flex-col items-center px-12">
      <div className="w-full xl:w-2/3 font-bold text-2xl text-left ">
        <br />
        <h3 className="text-center">En savoir plus sur l'actualité digitale</h3>
        <hr className="blue" />
        <br />
        <LastPosts wrap='false' lastposts={data.allWordpressPost.edges} />
      </div>
      <div className="w-2/3 md:w-2/5 mb-6" data-aos="fade-up">
        <ButtonBlog className="rounded-none century font-thin " url="/blog/tous-articles/" text="Voir tous les articles" /><br />
      </div>
    </section>
    <div className="w-full flex justify-end flex-row enhautblog">
      <a href="#" className="w-2/12"><svg width="50px" viewBox="0 0 100 125"><g><path d="M50,23.929c-14.375,0-26.07,11.695-26.07,26.07c0,14.376,11.695,26.072,26.07,26.072c14.376,0,26.071-11.696,26.071-26.072   C76.071,35.624,64.376,23.929,50,23.929z M62.984,58.046c-0.652,0.512-1.595,0.396-2.105-0.255l-10.814-13.8L39.341,58.406   c-0.294,0.396-0.746,0.605-1.204,0.605c-0.312,0-0.625-0.096-0.895-0.296c-0.664-0.495-0.803-1.434-0.308-2.099L48.83,40.624   c0.278-0.375,0.717-0.599,1.185-0.605c0.476,0.024,0.911,0.208,1.199,0.575L63.24,55.94C63.751,56.592,63.637,57.535,62.984,58.046   z" /><path d="M77.879,8.771H22.906c-7.59,0-13.742,6.153-13.742,13.743v54.973c0,7.59,6.152,13.743,13.742,13.743h54.973   c7.59,0,13.742-6.153,13.742-13.743V22.514C91.621,14.924,85.469,8.771,77.879,8.771z M50,79.071   c-16.029,0-29.07-13.042-29.07-29.072c0-16.029,13.041-29.07,29.07-29.07c16.03,0,29.071,13.041,29.071,29.07   C79.071,66.029,66.03,79.071,50,79.071z" /></g></svg></a>
    </div>

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