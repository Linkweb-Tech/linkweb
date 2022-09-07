import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import SEO from "../../components/seo";
import ButtonBlog from "../../components/buttonblog"

import BoutonBlog from '../../components/boutonBlog.js';

import banniere from "../../images/creation-site-internet-ban.png";
import Bg from "../../images/creation-site-internet-colomiers.jpg"
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";


class refonteSiteInternet extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Refonte de site : tout ce qu'il faut savoir - Définition"
                    description="La refonte d'un site internet est une étape clé dans la vie d'un site web."
                    url="https://linkweb.fr/creation-site-internet-toulouse/refonte-site-internet/"
                    nom="Refonte site internet"
                    slug="creation-site-internet-toulouse/refonte-site-internet/"
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
                        <span className="text-center text-xl font-bold text-white">Définition</span>
                    </div>
                    <div>
                        <h1 data-aos="fade-up" className="century text-5xl sm:text-6xl text-bleu text-center text-white mt-4 lg:mt-6">
                            Refonte site internet : tout ce qu’il faut savoir
                            </h1>
                    </div>
                </section>
                <section className="w-full mt-10 text-justify century font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                    <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <br />
                        <h2 className="text-3xl text-bleu font-bold">Qu'est-ce que la refonte de site internet ?</h2>
                        <br />
                        <p>
                            La <strong className="font-bold">refonte d’un site internet</strong> consiste à réadapter la structure et/ou l’apparence d’un site existant en vue d’atteindre de <strong className="font-bold">nouveaux objectifs</strong> ou de maintenir son site techniquement à jour. 
                            <br/><br/>
                            La vie d’un site internet n’est pas un long fleuve tranquille : le Web est en constante évolution et de nouvelles tendances apparaissent régulièrement. Par ailleurs, plusieurs situations portent à se pencher sur la <strong className="font-bold">refonte de son site web</strong> : un changement de stratégie de communication, de nouveaux objectifs webmarketing ou encore l’apparition de nouvelles tendances UX design. 
                            <br/><br/>
                            De plus, le site internet doit sans arrêt s’adapter aux <strong className="font-bold">besoins des utilisateurs</strong>, mais également aux évolutions techniques. La durée de vie d’un site web est estimée à 5 ans avant d’envisager une refonte. 
                            <br/><br/>
                            Enfin, il est à noter que la refonte de site peut être conçue comme la <Link to="/creation-site-internet-toulouse/" className="text-bleu font-bold hover:text-black">création de site internet à Toulouse</Link>, même s’il ne s’agit pas totalement du même travail.</p>
                            <br/><br/>
                            <h2 className="text-3xl text-bleu font-bold">Quels sont les différents types de refonte de site internet ?</h2>
                            <br/><br/>
                            <p>Il faut savoir qu’il existe principalement deux types de refonte :</p>
                            <br/><br/>
                            <ul className="list-disc pl-12">
                            <li><strong className="font-bold">La refonte graphique :</strong> comme son nom l’indique, elle a pour objectif de proposer un nouvel habillage pour le site internet avec une priorité mise sur l’aspect responsive design et plus globalement sur l’<strong className="font-bold">expérience utilisateur</strong>. Elle est essentielle pour permettre à l’utilisateur d’accéder à l’information qu’il recherche. En ce sens, elle doit être intuitive. Un relooking pourra être nécessaire pour un visuel obsolète.</li><br/>
                            <li><strong className="font-bold">La refonte structurelle :</strong> la refonte structurelle concerne la structuration du site et du contenu présent. Elle peut répondre à un changement d’objectifs, à la mise en place d’une nouvelle arborescence axée sur le <strong className="font-bold">référencement naturel</strong> et notamment sur la création d’un cocon sémantique.</li>
                            </ul>
                            <br/><br/>
                            <p>Ainsi, la refonte peut être graphique, structurelle, mais il est aussi possible de procéder à une <strong className="font-bold">refonte complète</strong>. Avant de déterminer le type de refonte à mettre en place, il est indispensable de réaliser un état des lieux complet concernant son site internet et plus globalement sa stratégie web.</p>
                            <br/><br/>
                            <h2 className="text-3xl text-bleu font-bold">Pourquoi et quand faire une refonte totale ou partielle ?</h2>
                            <br/><br/>
                            <p>La vie d’un site internet est rythmée par des refontes régulières visant à rendre le site toujours plus performant techniquement, comme pour les utilisateurs, mais aussi en termes de visibilité dans les <strong className="font-bold">résultats de recherche des moteurs</strong>.
                            <br/><br/>
                                Toutefois, une <strong className="font-bold">refonte de son site internet</strong> n’est pas à prendre à la légère. Aussi, il ne faut pas en abuser au risque de perdre en pertinence vis-à-vis des visiteurs du site.
                            <br/><br/>
                                Avant de songer à une refonte, il est important de se poser les bonnes questions :</p>
                            <br/><br/>
                            <ul className="list-disc pl-12">
                                <li>Est-ce que mon <strong className="font-bold">site internet</strong> répond à mes priorités ou objectifs du moment ?</li>
                                <li>Est-ce que mon <strong className="font-bold">site internet</strong> est à jour techniquement ?</li>
                                <li>Est-ce que le contenu présenté sur mon site internet correspond toujours à mon entreprise ? Est-il à <strong className="font-bold">votre image</strong> ?</li>
                                <li>Est-ce que mon site internet est performant (visibilité, trafic, contacts prospects, <strong className="font-bold">tunnel de conversions</strong>, etc.) ?</li>
                            </ul>
                            <br/><br/>
                            <p>Si la plupart des réponses à ces questions est négative, alors une refonte de son site pourra devenir nécessaire. Aussi, il faut savoir qu’envisager une refonte peut être pertinent à plusieurs occasions :</p>
                            <br/><br/>
                            <ul className="list-disc pl-12">
                                <li>lorsque le <strong className="font-bold">web design de votre site internet</strong> est désuet ou que le site n’est pas responsive design,</li>
                                <li>lors d’un changement de charte graphique ou identité visuelle de la marque,</li>
                                <li>lors de la mise en place d’une <strong className="font-bold">nouvelle stratégie digitale</strong>,</li>
                                <li>lors de la mise en place d’une <strong className="font-bold">stratégie de référencement naturel SEO</strong>,</li>
                                <li>Etc.</li>
                            </ul>
                            <br/>
                            <h2 className="text-3xl text-bleu font-bold">Comment faire la refonte d'un site internet ? Les 5 étapes à suivre</h2>
                            <br/>
                            <p>Tout dépend du type de refonte que vous souhaitez réaliser. Néanmoins, il y a quelques étapes de base à suivre lorsqu'on entreprend un projet de refonte d'un site web :</p>
                            <br/>
                            <ol className="list-decimal pl-12">
                                <li><strong className="font-bold">Définissez les buts et les objectifs de la refonte.</strong> Qu'espérez-vous obtenir en redessinant votre site internet ? S'agit-il simplement de donner un nouveau look au site, ou cherchez-vous à améliorer sa fonctionnalité ou à ajouter de nouvelles fonctions ? En définissant clairement vos objectifs dès le départ, vous vous assurez que le processus de refonte est ciblé et efficace.</li><br/>
                                <li><strong className="font-bold">Effectuez un audit complet de votre site web existant.</strong> Faites le point sur ce qui fonctionne bien actuellement et ce qui doit être amélioré. Cela vous aidera à identifier les domaines qui doivent être abordés lors de la refonte.</li><br/>
                                <li><strong className="font-bold">Créez un plan détaillé pour le processus de refonte.</strong> Ce plan doit comprendre des échéances, des étapes et des responsabilités pour chaque étape du projet. La mise en place d'un plan clair vous aidera à garder le projet sur la bonne voie et à vous assurer que toutes les personnes concernées savent ce qu'il y a à faire.</li><br/>
                                <li><strong className="font-bold">Mettez en œuvre la refonte progressivement.</strong> Effectuer trop de changements d'un coup peut être accablant pour les utilisateurs et entraîner de la confusion ou de la frustration. En procédant à la refonte par étapes, vous pourrez vous assurer que tout fonctionne comme il se doit avant d'effectuer d'autres changements.</li><br/>
                                <li><strong className="font-bold">Testez, testez, testez !</strong> Une fois que le site Web remanié est en ligne, il faut le tester pour vous assurer que toutes les nouvelles fonctionnalités sont opérationnelles. Demandez à vos amis, à votre famille et même à des inconnus de l'essayer et de vous faire part de leurs commentaires. Cela vous aidera à identifier les points à améliorer.</li><br/>
                            </ol>
                            <p>En suivant ces étapes, vous veillerez à ce que votre projet de refonte de site web soit une réussite et que votre nouveau site réponde à tous vos buts et objectifs. En revanche, si vous voulez vous assurer d'obtenir un rendu professionnel, il est <strong className="font-bold">fortement conseillé de s'adresser à des professionnels de la création de site internet.</strong></p>
                            <br/>
                            <h2 className="text-3xl text-bleu font-bold">Refonte site internet : un avantage majeur pour le SEO</h2>
                            <br/>
                            <p>Il se peut que vous envisagiez une refonte en raison du manque de performance de <strong className="font-bold">votre site web</strong>. Pour cela, il est indispensable de comprendre ce qui ne fonctionnement et pourquoi. Est-ce que les utilisateurs passent du temps sur votre site ? Est-ce qu’ils naviguent bien entre les <strong className="font-bold">différentes pages de votre site web</strong> ? Très concrètement, est-ce que votre site est visible ? La <strong className="font-bold">visibilité de votre site sur le web</strong> introduit la question du référencement naturel : est-ce que votre site est optimisé pour correspondre aux attentes des moteurs de recherche ?
                            <br/><br/>
                                Ainsi, <strong className="font-bold">refondre son site internet</strong> est particulièrement intéressant en vue d’acquérir de la <strong className="font-bold">visibilité sur le web</strong> grâce aux moteurs de recherche. En effet, lancer sa stratégie à partir d’un site web existant présente un avantage non-négligeable : l’autorité acquise sur votre domaine reste présente et il va falloir savoir en tirer des bénéfices.
                                <br/><br/>
                                En effet, la présence d’un historique va être un atout important. À ce niveau, le site internet repose sur un <strong className="font-bold">nom de domaine</strong> déjà existant et dispose d’un capital d’URLs ayant déjà reçu des backlinks. C’est pourquoi, le travail effectué sur la sélection des URL et sur les <strong className="font-bold">redirections</strong> (redirection vers les nouvelles pages, ou vers la page d’accueil) va être déterminants.
                                <br/><br/>
                                Cet historique devra être intégré à la réflexion stratégique concernant le choix des mots-clés ciblés. Les url les plus performantes pourront alors être conservées en vue de disposer d’une base déjà existante à partir de laquelle se lancer. <strong className="font-bold">Refondre son site web</strong> procure un avantage considérable en termes de structuration du site. Partir de zéro permet d’avoir une vision globale et de long termes pour définir une arborescence compatible avec ses futurs cocons sémantiques afin d’<strong className="font-bold">optimiser son maillage interne (liens internes)</strong>.
                            </p>
                            <br/>
                            <h2 className="text-3xl text-bleu font-bold">Refonte site internet : une mise à jour technique non-négligeable</h2>
                            <br/>
                            <p>
                                La mise en place d’un <strong className="font-bold">nouveau site internet</strong> peut permettre d’adopter de nouvelles fonctionnalités au même titre que la <Link to="/creation-de-site-internet-a-agen/" className="text-bleu hover:text-black font-bold">création de site internet à Agen</Link> (selon le <strong className="font-bold">type de site web</strong> : site interne vitrine, e-commerce, ou administrable). En fonction de vos besoins en termes de référencement, de gestion ou des fonctionnalités à offrir à vos utilisateurs, la question de l’outil de création et de <strong>gestion de contenu du site</strong> va se poser. À ce niveau, les possibilités sont nombreuses en termes de <strong className="font-bold">développement web</strong> : utilisation d’un CMS (Wordpress, Drupal, Joomla, Prestashop, etc.) d’applications web (Progressive Web App) ou du traditionnel duo HTML/CSS, par exemple.
                                <br/><br/>
                                Également, la refonte de son site peut-être motivée par la mise en place d’une expérience utilisateur optimale en vue d’<strong className="font-bold">augmenter son taux de conversion</strong>. En effet, la refonte est une occasion parfaite pour opérer une large mise à jour technique de son site web et ainsi redéfinir vos priorités (temps de chargement, taux de rebond, optimisation des balises). Le travail de l’ergonomie et du webdesign du site constituent des phases importantes lors de la refonte d’un site internet. Cela peut être le cas si votre site internet ne dispose pas de version mobile (ou tablettes) ou au moins d’un affichage mobile adapté. La refonte sera indispensable.
                                <br/><br/>
                                En somme, mettre en place une <strong className="font-bold">refonte sur son site internet existant</strong> est bien souvent la solution lors d’un changement de ligne communicationnelle, ou lorsque le site existant ne correspond plus à ses besoins. Toutefois, même lorsque <strong className="font-bold">la refonte du site est complète</strong>, cette dernière ne s’appréhende pas comme une création de nouveau site web classique.
                                <br/><br/>
                                Avoir un site adapté à vos objectifs va permettre de mener à bien votre nouvelle <strong className="font-bold">stratégie webmarketing</strong>. En plus d’une refonte graphique, réaliser une <strong className="font-bold">refonte structurelle</strong> va également demander un travail important sur l’arborescence du site. Ce travail est fondamental en termes de référencement pour la <strong className="font-bold">réussite votre projet web</strong>. 
                                <br/><br/>
                                Tenir compte de l’historique de votre site web lors de la <strong className="font-bold">création de vos nouvelles pages web</strong> vous sera tout particulièrement bénéfique. Enfin, il faut savoir que le <strong className="font-bold">projet de refonte</strong> est envisagé aussi bien par un développeur web pour ce qui concerne la partie technique, mais également par un <strong className="font-bold">référenceur SEO</strong> en vue de coordonner les actions mises en place comme dans le cadre de notre <Link to="/" className="text-bleu hover:text-black font-bold">agence web à Agen</Link>.
                            </p>
                            <section className="w-full my-12 flex flex-col md:flex-row bg-bleu">
                                <div className="w-full md:w-1/4 flex">
                                   <img className="object-cover" src={Bg}/> 
                                </div>
                                <div className="w-full md:w-3/4 flex py-2 md:py-12 flex-col text-white justify-center items-center">
                                    <h2 className="text-2xl px-2 py-4 md:text-2xl font-bold text-center">Nos experts réalisent votre refonte de site web</h2>
                                    <h3 className="text-md px-2 text-center">Site internet vitrine - Site internet e-commerce - Solution sur-mesure</h3>
                                    <br/>
                                    <ButtonBlog url="/creation-site-internet-toulouse/" text="Notre offre de refonte de site internet" color="black" />
                                </div>
                            </section>
                        {/* <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/"><img
                            src={banniere}
                            alt="Création site internet Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        /></Link> */}
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
                        <h3 className="font-bold">Les notions liées à la refonte de site internet :</h3>
                        <br />
                        <hr className="hrblog"></hr>
                        <br />
                        <div className="flex flex-row uppercase italic justify-center">
                            <ul className="list-def flex justify-center flex-col" data-aos="fade-left">
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/ui-design/"><li>UI Design</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/framework/"><li>Framework</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/front-end/"><li>Front-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/back-end/"><li>Back-End</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/html-css/"><li>HTML/CSS</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/maquette-site-web/"><li>Maquette de site web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/nom-de-domaine/"><li>Nom de domaine</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/developpement-web/"><li>Développement Web</li></Link>
                                <Link className="text-bleu font-bold hover:text-black" to="/creation-site-internet-toulouse/webmarketing/"><li>Webmarketing</li></Link>
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
query lastsThreePostsrefonte {
    allWpPost(limit: 3) {
      edges {
        node {
          id
          title
          slug
          modified(locale: "fr", formatString: "DD/MM/YYYY")
          date(locale: "fr", formatString: "dddd DD MMMM YYYY")
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
export default refonteSiteInternet;




