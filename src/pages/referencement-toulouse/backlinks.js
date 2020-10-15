import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class Backlinks extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Backlinks : Définition - Référencement Toulouse - Linkweb"
                    description="Obtenir des liens retour, ou backlinks, est très important pour accroître la popularité de son site dans une stratégie de référencement naturel."
                    url="https://linkweb.fr/referencement-toulouse/backlinks/"
                    nom="Backlinks"
                    slug="referencement-toulouse/backlinks/"
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

                    <section className="w-full century mt-40 flex flex-col items-center justify-start bg-bleu" style={{background:'#00000073 url('+ Bg +')', minHeight:'300px', backgroundPosition:'center', backgroundSize:'cover',backgroundBlendMode:'overlay'}}>
                        <div className="topdef">
                            <h2 className="text-center text-xl font-bold text-white">Définition</h2>
                        </div>
                        <div>
                            <h1 data-aos="fade-up" className="century text-5xl sm:text-6xl text-bleu text-center text-white mt-4 lg:mt-6">
                                Backlinks
                            </h1>
                        </div>
                    </section>
                    <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br/>
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que les Backlinks ?</h2>
                            <br/>
                            <p>
                                Les <strong>backlinks</strong>, ou <strong className="font-normal">liens externes</strong>, désignent l’ensemble des liens effectués en provenance d’autres sites internet que le votre et à destination de <strong className="font-normal">vos pages web</strong>. <strong className="font-normal">Obtenir des backlinks sur son site web</strong> est très important. Ce sont ces <strong className="font-normal">liens entrants</strong> qui rendent un site internet populaire aux yeux de Google et des <strong className="font-normal">moteurs de recherche</strong>. Par ailleurs, <strong className="font-normal">obtenir des liens</strong> peut servir à <strong className="font-normal">générer du trafic vers le site</strong> de votre entreprise. La <strong className="font-normal">création de liens</strong>, ou <strong className="font-normal">link building</strong>, est une part importante du travail de <strong className="font-normal">référencement naturel (SEO)</strong> à travers le <strong className="font-normal">netlinking</strong>. Nous tenons compte de ces problématiques dans notre travail <strong><Link className="text-bleu hover:text-black font-bold" to="/referencement-toulouse/">de référencement à Toulouse</Link></strong>.<br/>
                                <br/>
                                Pour mettre en place une <strong className="font-normal">stratégie de link building</strong> efficace, il ne faut pas s’attacher à créer un grand <strong className="font-normal">nombre de liens vers votre site internet</strong> forcément, mais bien à mettre en place des <strong className="font-normal">liens de qualité</strong>. En somme, pour créer des liens vers son site, il va être nécessaire de mettre en place du <strong className="font-normal">contenu de qualité</strong>. En effet, un contenu exhaustif, bien construit et qui répond à une question de manière claire et pertinente sera plus facilement cité et relayé par d’autres sites internet.<br/>
                                <br/>
                                Toutefois, <strong className="font-normal">tous les liens</strong> ne sont pas bons à prendre : en effet, l’<strong className="font-normal">algorithme Penguin de Google</strong> est en mesure d’infliger une <strong className="font-normal">pénalité</strong> à un site web dont les <strong className="font-normal">liens entrants</strong> sont factices ou s’apparentent à du <strong className="font-normal">spam</strong>. La <strong className="font-normal">qualité des liens</strong> est un facteur qu’il faudra prioriser même s’il existe la possibilité de <strong className="font-normal">désavouer des liens indésirables</strong>.<br/>
                                <br/>
                                En termes de <strong className="font-normal">référencement naturel</strong>, les <strong className="font-normal">liens pertinents et de qualité </strong>vont permettre d’<strong className="font-normal">améliorer la popularité du domaine</strong> ainsi que son autorité. Pour ce faire, la notion de <strong className="font-normal">profil de liens</strong> est très importante. En effet, <strong className="font-normal">avoir des liens</strong> est une bonne chose, cela montre l’attractivité de votre site. En revanche, les <strong className="font-normal">liens pointant vers votre site</strong> ne doivent pas être mis en place n’importe comment. C’est pourquoi, pour s’assurer que le lien vous apporte bien ce qu’il est censé vous donner, il faut considérer plusieurs éléments : 
                                <br/><br/>
                                <ul className="px-12 list-disc">
                                    <li>Un lien vers votre site possédant un attribut <strong className="font-normal">nofollow</strong> sera lu par Google, mais ne vous procurera pas de <strong className="font-normal">« jus de lien » (link juice)</strong>. Un lien en nofollow est un lien qui a fait l'objet d'une demande de la part de son auteur pour ne pas être suivi par les <strong className="font-normal">robots de Google</strong>. Il est donc nécessaire que <strong>l’attribut soit en do follow</strong> pour qu’il présente un intérêt <strong className="font-normal">SEO</strong>.</li>
                                    <br/>
                                    <li>L’<strong>ancre de lien</strong> (<strong className="font-normal">texte d'ancrage</strong>) est également un élément à prendre en considération. Il s’agit du texte sur lequel sera déposé votre lien hypertexte. Il est conseillé d’éviter que l’ancre contiennent des formules génériques comme « en savoir plus » ou « cliquez ici ». En effet, il est bien plus pertinent que l’ancre désigne une expression pertinente par rapport au contenu de la page de destination. L’ancre peut contenir des <strong className="font-normal">mots-clés</strong> s’ils sont pertinents, mais il est nécessaire de ne pas adopter un comportement de spammeur.</li>
                                    <br/>
                                    <li>La <strong>thématique du site</strong> d’où proviennent les <strong className="font-normal">liens qui pointent vers votre site</strong> va également être comprise dans le profil de lien. Un lien en provenance d’un site en rapport avec votre thématique sera d’autant plus pertinent en vue d’<strong className="font-normal">accroître la popularité de vos pages web</strong>.</li>
                                    <br/>
                                    <li>Il est également conseillé d’<strong className="font-normal">obtenir des liens</strong> en provenance de sites à <strong>forte autorité de domaine</strong>. En effet, un <strong className="font-normal">backlink</strong> en provenance d’un site à haute autorité augmentera le jus de lien transmis vers <strong className="font-normal">votre page web</strong>.</li>
                                </ul>
                                <br/>
                                Mettre en place une <strong className="font-normal">stratégie de linkbuilding</strong> doit <strong>tenir compte des recommandations de Google</strong>. Le meilleur moyen pour améliorer la popularité de son site est de <strong className="font-normal">créer du contenu naturel</strong>, qualitatif et qui pourra facilement être relayé par d’autres sites web de votre thématique.
                        </p>
                        <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/"><img
                            src={banniere}
                            alt="Référencement Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        /></Link>
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start" >
                            <div className="bloccontactblog w-full lg:w-full flex flex-col justify-center items-center century text-justify flex" style={{background:'#3c3c3cfa url(' + bgbloc +')', backgroundBlendMode:'overlay', backgroundSize:'cover', backgroundPosition:'center'}}>
                                <h2>Vous souhaitez mettre en place un projet web ?</h2>
                                <br/>
                                <h3>Linkweb met en place votre projet de création de site web.</h3>
                                <br/>
                                <div className="w-1/2 flex flex-row justify-center items-center">
                                <br/>
                                    <BoutonBlog  url="/contact-agence-web-toulouse/" text="Contactez-nous" position="center" />
                                </div>
                            </div>
                            <br/>
                            <hr className="hrblog"></hr>
                            <br/>
                            <h3 className="font-bold">Les notions liées aux backlinks :</h3>
                            <br/>
                            <hr className="hrblog"></hr>
                            <br/>
                            <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/"><li>Référencement local</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/audit-seo/"><li>Audit SEO</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/"><li>Techniques de référencement</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/"><li>Optimisation interne</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/donnees-structurees/"><li>Données structurées</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/serp/"><li>SERP</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/e-reputation/"><li>E-Réputation</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/landing-page/"><li>Landing Page</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/mots-cles/"><li>Mots-clés</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/"><li>Longue Traîne</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/courte-traine/"><li>Courte Traîne</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/rapport-positionnement/"><li>Rapport de positionnement</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/"><li>Critères de qualité</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/sur-optimisation/"><li>Sur-Optimisation</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/erreur-404/"><li>Erreurs 404</li></Link>
                            <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/arborescence-seo/"><li>Arborescence SEO</li></Link>
                            </ul>
                        </div>
                        </div>
                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsBacklinks {
    allWordpressPost(limit: 3) {
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
export default Backlinks;




