import React, { Component } from 'react';
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";


import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";



class erreur404 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Erreurs 404 : Définition - Référencement Toulouse - Linkweb"
                    description="L'erreur 404 est un code d'erreur qui est renvoyé lorsque une page demandée est introuvable."
                    url="https://linkweb.fr/referencement-toulouse/erreur-404/"
                    nom="Erreur 404"
                    slug="referencement-toulouse/erreur-404/"
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

                <section className="w-full century mt-40 flex flex-col items-center justify-start bg-bleu" style={{ background: '#00000073 url(' + Bg + ')', minHeight: '300px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                    <div className="topdef">
                        <h2 className="text-center text-xl font-bold text-white">Définition</h2>
                    </div>
                    <div>
                        <h1 data-aos="fade-up" className="century text-5xl sm:text-6xl text-bleu text-center text-white mt-4 lg:mt-6">
                            Liens brisés et erreurs 404
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que les liens brisés et les erreurs 404 ?</h2>
                        <br />
                        <p>
                            Une <strong>erreur 404</strong> apparaît sur un <strong className="font-normal">site web</strong> lorsqu’une <strong className="font-normal">adresse URL</strong> renvoie vers une <strong className="font-normal">page web</strong> qui n’existe pas ou qui n’existe plus. Dans ce cas, le <strong className="font-normal">serveur web</strong> est incapable de restituer le contenu demandé au <strong className="font-normal">navigateur</strong> : il renvoie une <strong className="font-normal">erreur de type 404</strong>. Ainsi, lorsqu’un <strong className="font-normal">code d’erreur</strong> 404 apparaît, le lien est considéré comme brisé et constitue une entrave en termes d’<strong className="font-normal">expérience utilisateur</strong> puisqu’il participe à impacter négativement <strong className="font-normal">le taux de rebond</strong> du site. Nous veillons à ce qu’aucune erreur 404 ne soit présente sur nos <strong className="font-normal">sites web</strong> dans le cadre de notre travail de <strong><Link className="text-bleu hover:text-black font-bold" to="/referencement-toulouse/">référencement à Toulouse</Link></strong>.<br />
                            <br />
                                Ce type d’erreur est considéré comme nocif aussi bien pour l’utilisateur que pour les <strong className="font-normal">moteurs de recherche</strong>. Ces erreurs doivent impérativement être corrigées. Pour les détecter, mettre en place un <strong className="font-normal">audit technique</strong> peut être une solution. Aussi, il existe des outils permettant d’<strong className="font-normal">effectuer une recherche</strong> des <strong className="font-normal">liens brisés</strong> directement sur un <strong className="font-normal">navigateur</strong>. Dans tous les cas, veiller à la validité des liens effectués entre les pages de son site web est important pour se prémunir d’un <strong className="font-normal">message d’erreur</strong>.<br />
                        </p>
                        <br />
                        <h2 className="text-xl font-bold text-bleu">La solution : mettre en place des redirections</h2><br />
                        <p>
                            Lorsqu’une page présente sur une URL de votre site est supprimée du <strong className="font-normal">serveur FTP</strong> (File Transfer Protocol), le lien qui menait à cette page est brisé. Toutefois, si le fichier n’existe plus, il se peut que le chemin d’URL soit encore lié sur le Web. Afin que le <strong className="font-normal">serveur web</strong> ne renvoie pas d’erreur, il va être nécessaire de configurer une <strong className="font-normal">redirection</strong>.<br />
                            <br />
                                Les <strong className="font-normal">redirections</strong> sont de plusieurs types, nous parlerons ici des <strong className="font-normal">redirections de type 302</strong> (temporaires) et des <strong className="font-normal">redirections 301</strong> (permanentes).<br />
                            <br />
                                La redirection 302 va être préférée lorsqu’un site est en construction et si la page redirigée est censée retrouver son contenu original par la suite.<br />
                            <br />
                                La <strong className="font-normal">redirection 301</strong> est préférée lorsque la redirection est permanente et définitive comme lors d’une <strong className="font-normal">refonte de site web</strong> par exemple.<br />
                            <br />
                                Pour corriger les erreurs de type 404, les redirections 301 vont être à privilégier puisque ce type de redirection est recommandé par <strong className="font-normal">Google</strong>. Les liens vers des pages qui n’existent pas ou plus devront alors pointer vers une autre adresse.<br />
                            <br />
                                D’un point de vue technique, l’ensemble des redirections du site web doivent être mentionnées <strong className="font-normal">manuellement</strong> dans le <strong className="font-normal">fichier Htaccess</strong> situé à la racine du site. Il est également possible de réaliser ses redirections via l’utilisation d’un <strong className="font-normal">plugin</strong>. De plus, il faut savoir qu’il est possible de mettre en place une redirection pour une page, pour un répertoire ou bien pour un nom de domaine complet.<br />
                        </p><br />
                        <h2 className="text-xl font-bold text-bleu">Corriger une erreur 404 grâce aux redirections 301</h2><br />
                        <p>
                            Pour corriger une erreur de contenu <strong className="font-normal">introuvable</strong> sur un site web, une méthodologie rigoureuse doit s’imposer. En effet, il s’agit d’une manœuvre qui peut avoir des conséquences importantes, c’est pourquoi il va falloir la mener de façon méticuleuse. Faire appel à un <strong className="font-normal">webmaster</strong> ou à un spécialiste du <strong className="font-normal">référencement naturel</strong> est particulièrement recommandé.<br />
                            <br />
                                Tout d’abord, il va être indispensable d’identifier l’ensemble des <strong className="font-normal">liens brisés</strong> et leur emplacement. En fonction de ces liens, il faudra ensuite déterminer à quel contenu renvoyait la page <strong className="font-normal">demandée</strong>. Ce n’est qu’à partir de là qu’il va falloir définir le contenu vers lequel l'URL devra rediriger.<br />
                            <br />
                                Lorsqu’un lien renvoie vers une erreur, il existe deux possibilités :<br />
                            <br />
                            <ul className="px-12 list-disc">
                                <li>Effectuer une redirection vers le nouveau lien de la page ou vers un contenu qui s’en approche,</li>
                                <li>Effectuer une redirection vers l’accueil si aucun contenu de votre site ne se rapporte à ce lien.</li><br />
                            </ul>
                                Dans tous les cas, le lien redirigé doit renvoyer vers un contenu pertinent.<br />
                            <br />
                                Une fois que les liens brisés ont été identifiés et que les nouvelles adresses ont été définies, il va falloir remplir son <strong className="font-normal">fichier Htaccess</strong>. À ce niveau, la commande « RedirectPermanent » (pour une redirection 301 va permettre de communiquer la nouvelle adresse d’une URL en fonction de l'adresse remplacée.<br />
                            <br />
                                Pour veiller à ce que cette opération soit bien fonctionnelle et qu’aucune erreur n'ait été engagée, il faudra contrôler une nouvelle fois l’ensemble de vos liens par un nouvel audit.<br />
                            <br />
                                Attention, la mise en place de <strong className="font-normal">redirections</strong> doit être réalisée avec précaution : les URL de redirection sont considérées comme nouvelles par <strong className="font-normal">Google</strong> : un délai va donc exister avant que les URL de remplacement soient bien indexées à la place des anciennes. Par ailleurs, il est fortement déconseillé de réaliser des <strong className="font-normal">redirections en cascade</strong> (mettre en place des redirections sur d’autres redirections) : l’impact est nocif en termes de <strong className="font-normal">SEO</strong>.<br />
                        </p>

                        <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/"><img
                            src={banniere}
                            alt="Référencement Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        /></Link>
                    </div>
                    <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start" >
                        <div className="bloccontactblog w-full lg:w-full flex flex-col justify-center items-center century text-justify flex" style={{ background: '#3c3c3cfa url(' + bgbloc + ')', backgroundBlendMode: 'overlay', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                        <hr className="hrblog"></hr>
                        <br />
                        <h3 className="font-bold">Les notions liées aux Erreurs 404 :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/referencement-local/"><li>Référencement local</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/audit-seo/"><li>Audit SEO</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/"><li>Techniques de référencement</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/"><li>Optimisation interne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/"><li>Critères de qualité</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/serp/"><li>SERP</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/donnees-structurees/"><li>Données Structurées</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/landing-page/"><li>Landing Page</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/mots-cles/"><li>Mots-clés</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/"><li>Longue Traîne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/"><li>Backlinks</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/rapport-positionnement/"><li>Rapport de positionnement</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/"><li>courte traîne</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/sur-optimisation/"><li>Sur-Optimisation</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/e-reputation/"><li>E-Réputation</li></Link>
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
query lastsThreePostserreur404 {
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
export default erreur404;




