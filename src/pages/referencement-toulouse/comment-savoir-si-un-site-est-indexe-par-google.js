import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../../components/seo";
import ButtonBlog from "../../components/buttonblog";
import "../../scss/faqpages.scss";
import BoutonBlog from '../../components/boutonBlog.js';


import background from "../../images/foire-aux-questions.jpg";
import usage from "../../images/usages-site-internet.jpg";
import google from "../../images/savoir-si-un-site-est-indexe.jpg";

import fbIcon from "../../images/facebook-logo.svg";
import twitterIcon from "../../images/twitter-logo.svg";
import instaIcon from "../../images/instagram-logo.svg";
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";




class CommentSavoirSiUnSiteEstIndexeParGoogle extends Component {

    constructor(props) {
        super(props);
    
    }

render() {
    return (
        <Layout location={this.props.location}>

            <SEO
                title="Comment savoir si un site est indexé par Google ? | Agence SEO à Toulouse (31)"
                description="L'indexation est une phase essentielle en vue de référencer son site internet sur Google. Mais comment savoir si un site est indexé ?"
                keywords={[`Agence SEO Toulouse`, `Référencement Toulouse`]}
                url="https://linkweb.fr/referencement-toulouse/comment-savoir-si-un-site-est-indexe-par-google/"
                nom="Comment savoir si un site est indexé par Google ?"
                slug="referencement-toulouse/comment-savoir-si-un-site-est-indexe-par-google/"
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
                <section className="w-full bloctitrespages mx-auto pb-0 px-4 pt-6 bg-black flex flex-col justify-center items-center" style={{background:'#00000094 url(' + background +')', backgroundBlendMode:'multiply', backgroundSize:'cover', backgroundPosition:'center', height:'450px'}}>
                    <h1 data-aos="fade-down" data-aos-delay="500" className="century text-5xl sm:text-6xl text-center text-white mt-40">
                    Comment savoir si un site est indexé par Google ?
                    </h1>
                    <h2 className="century text-xl sm:text-2xl text-center text-white" data-aos="fade-up" data-aos-delay="500">Agence SEO à Toulouse</h2>
                    <br/>
                    {/* Réseaux Sociaux */}
                    <section className="w-full flex flex-row justify-center text-white ">
                            <div className="w-1/3 md:w-1/6 lg:w-1/12 flex flex-row">
                                <div className="w-1/3 block mx-auto" data-aos="fade-left">
                                    <a href="https://www.facebook.com/AgenceWebLinkweb" target="blank" rel="noreferrer noopener" className="flex justify-center no-underline text-white">
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
                
                <section className="w-full  flex flex-col xl:flex-row flex justify-center">
                    
                    
                    <div className="bloctextpages w-full lg:w-1/2 flex flex-col justify-center century text-justify">
                        
                        <h3>Google est le moteur de recherche le plus populaire au monde et il est indispensable pour les entreprises que leurs sites Web soient indexés par ce moteur.</h3>
                        <br/>
                        <p>Il est important de <strong className="font-bold">contrôler l'efficacité de sa stratégie en matière d'indexation, mais également de positionnement</strong> dans les résultats que propose Google en fonction de chaque requête. En vous assurant l'indexation par Google de chaque URL canonique, vous serez en mesure d'identifier les erreurs en vue de corriger problèmes qui peuvent freiner l'indexation par Google. Que vous disposiez d'un site conçu avec Wordpress comme avec un autre CMS, abordons ensemble les éléments à vérifier pour connaître le <strong>statut d'indexation des pages de votre site internet</strong>.</p>
                        <br/>
                        <img src={google} className="w-full" alt="comment savoir si un site est indexé par Google"/>
                        <br/>
                        <h2>Qu'est-ce que l'indexation et comment fonctionne le crawl des robots de Google ?</h2>
                        <br/>
                        <p>Le classement des pages par un des moteurs les plus utilisés à ce jour présente quelques subtilités importantes à connaître. Google vous aide à <strong className="font-bold">obtenir des informations de façon pertinente en se basant sur la recherche que vous effectuez</strong>. De nombreuses méthodes de référencement SEO permettent de faciliter l'<strong>indexation des pages web</strong> par les moteurs de recherche.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Une analyse de chaque page web</h3>
                        <br/>
                        <p>À partir d'un contenu comportant une quantité suffisante de mots clés, un bon usage de la balise titre, de la méta description ainsi qu'une construction de lien pertinente, <strong className="font-bold">les propriétaires de sites maximisent leurs chances de voir leurs pages indexées et de se positionner par la suite de façon visible dans les résultats de recherche</strong>.</p>
                        <p>Le robot qui effectue un crawl ou parcourt la sitemap est aussi appelé <strong>Googlebot</strong>, il assure une exploration des URL de façon approfondie et relève les problèmes et les informations de chaque page qui sera indexée par la suite. Il analyse le fichier répertoriant tout votre contenu qui est indispensable aux <strong>moteurs de recherche</strong> pour indexer les URL de manière plus pertinente et de façon complète.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Des facteurs qui ralentissent le processus d'indexation</h3>
                        <br/>
                        <p>Chaque URL peut être <strong className="font-bold">soumise à l'indexation de Google pour donner un accès rapide et simple aux robots</strong>. L'objectif est de <strong>figurer rapidement dans les SERP (Search Engine Results Pages)</strong> en vue de proposer des informations sur son service aux internautes par la suite. <strong>Google</strong> emploie de plus en plus l'intelligence artificielle dans son mode de classement et d'<strong>exploration des données de sites</strong>, ainsi que de chaque sitemap à indexer. Le <Link to="/referencement-toulouse/comment-fonctionne-un-moteur-de-recherche/" className="text-bleu hover:text-black font-bold">fonctionnement d'un moteur de recherche</Link> a évolué au cours du temps tout en étant adapté aux technologies modernes. Il arrive régulièrement que les propriétaires de sites rencontrent des <strong>problèmes d'indexation sur le Web</strong>.</p>
                        <p>Cela peut être dû à différents facteurs comme un spam de mots clés dans le contenu (abus de mots-clés dans le contenu), une mauvaise qualité de liens (backlinks de mauvaise qualité), des problèmes de réglages du site sur Wordpress, erreurs de chargement des pages ou problèmes d'ergonomie, mais pas seulement. Il faut prendre en considération <strong className="font-bold">la capacité nouvelle du moteur à détecter toute méthode frauduleuse qui a pour but de forcer la page à être plus rapidement indexée et donc positionnée</strong>.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Comment soumettre chaque page en vue de favoriser le crawl par les robots ?</h3>
                        <br/>
                        <p>Le robot chargé du crawl (de l'exploration des pages) <strong className="font-bold">débute son analyse par une phase d'exploration du web</strong> durant laquelle il scrute le <strong>contenu des pages sur le web</strong> et prend le chemin que lui indiquent les liens présents sur celles-ci pour <strong>analyser les données de page en page</strong>.</p>
                        <p>Google stocke ensuite celles-ci dans une base de données sous la forme de copies ou condensés au niveau des data centers de l'organisme. Ces derniers constituent l'index de Google. Pour ne pas être soumise à l'indexation dès sa création, la page web devra comporter une balise "noindex", un message clair pour remettre le crawl à plus tard. C'est à travers un <strong className="font-bold">formulaire de soumission présent sur la Google Search Console que vous pourrez demander au Googlebot de venir analyser votre contenu en vue de l'indexer</strong>.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>L'indexation des pages au coeur de la stratégie SEO</h3>
                        <br/>
                        <p>Indexer ses pages est <strong className="font-bold">une première étape indispensable dans le travail de référencement SEO</strong> d'un site internet. Une page indexée répond à plusieurs critères importants pour <strong>obtenir un bon référencement dans les résultats de recherche</strong> et transmettre ainsi vos informations à un large public.</p>
                        <p>Cependant, il faut être vigilant notamment concernant le <strong>nombre d'URL à indexer à la fois et le choix de l'URL canonique</strong> à mettre en avant pour éviter des erreurs, un quota est instauré pour conserver un traitement optimal. Néanmoins, vous devrez avoir un rôle de guide vis-à-vis des robots pour mener votre stratégie de référencement sans encombre. Pour savoir si un site Web est indexé par Google, vérifiez le nombre de pages qui apparaissent dans les résultats de la requête "site:nom de domaine". Si l'ensemble des URL de votre site apparaît, alors <strong>votre site Web a bien été indexé</strong>.</p>
                        <br/>
                        <h2>Comment savoir si un site est indexé par Google ? Search Console et les autres outils à disposition</h2>
                        <br/>
                        <p>Vérifier rapidement si une page est indexée est possible en utilisant l'opérateur "site:votre nom de domaine" dans Google. Cette recherche vous permet d'<strong className="font-bold">afficher une liste des résultats directement liés à vos pages</strong>, il s'agit d'un outil efficace pour contrôler chaque URL indexée et relever les erreurs s'il y en a. Il est possible d'effectuer cette vérification sur la Google Search Console. Pour pousser votre analyse, vérifiez également l'utilisation de la balise méta description et la balise title de chaque page qui ressort lors de votre travail de suivi afin de <strong className="font-bold">vérifier que la dernière version de votre page est prise en compte</strong>.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Une page indexée est un premier pas pour générer du trafic SEO</h3>
                        <br/>
                        <p>Savoir si un site web existe et, si c'est le cas, s'il est bien pris en compte à travers son <strong>statut d'indexation</strong> est une première étape. L'étape suivante consiste à <strong className="font-bold">analyser les résultats d'une recherche sur votre site web</strong>. Un outil comme la Search Console vous permet également de recenser quelconque problème et d'intervenir en conséquence. Si vous rencontrez un problème de positionnement d'URL face auquel vous êtes démuni, cet outil pourra vous apporter des réponses de façon simple et rapide sur le <strong>Web</strong>. Notre <Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">agence SEO à Toulouse</Link> et ses spécialistes sont en mesure de vous accompagner.</p>
                        <p>Le suivi de la page destinée à être référencée dans l'<strong>index de Google</strong> peut se faire notamment grâce à un outil digital comme la Google Search Console. Ces techniques vous aideront à éviter toute confusion si des pages ressortent lors de votre recherche et que vous ne souhaitiez pas qu'elles soient visibles dans les <strong>résultats que propose Google</strong>. Il sera alors possible de les éliminer en vue de les désindexer.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Monitorer ses performances</h3>
                        <br/>
                        <p>Pour un site Wordpress, quelle que soit la version, comme pour tout type de site (avec ou sans CMS), il <strong className="font-bold">reste possible avec les outils de suivi SEO (Search Engine Optimization) de Google d'assurer de bonnes performances sur son site internet</strong>. Réparer des erreurs est plus simple en passant par une bonne analyse de la liste d'URL qui apparaissent lors de la recherche "site:nom de domaine". Une autre façon de déterminer l'indexation des pages est d'<strong className="font-bold">utiliser la fonction "cache" de Google</strong>.</p>
                        <p>Lorsque lorsque vous effectuez une recherche, vous voyez, au bas de chaque résultat, un lien indiquant la mention "En cache" Si vous cliquez sur ce lien et que la page est toujours active, cela signifie que Google l'a mise en cache. Une fois que vous êtes sur la page en cache, recherchez <strong className="font-bold">le texte "Date de mise en cache : AAAA-MM-JJ" pour déterminer la date à laquelle Google l'a indexée</strong>. Cette solution s'ajoutant à l'exploration que proposent Search Console et l'opérateur "site: nom de domaine", vous disposez de toutes les clés pour positionner chaque URL de manière visible dans la <strong>première page des SERP de Google</strong>.</p>
                        <br/>
                        <h2>Favoriser l'indexation en vue de créer et référencer un site destiné à être visible grâce à Google</h2>
                        <br/>
                        <p>Faire indexer chaque page de votre site par un outil comme <strong>Google</strong> est une solution idéale pour développer la notoriété de votre entreprise. Les moteurs de recherche permettent <strong className="font-bold">d'être visible et de générer un trafic plus important grâce aux pages que vous soumettez à l'indexation en vu de leur référencement SEO</strong>. Ce travail a vocation à obtenir des résultats sur le long terme.</p>
                        <p>Grâce aux balises, aux mots clés et aux backlinks, il est possible de faciliter la tâche pour Google en vue indexer le contenu des pages. En effet, <strong className="font-bold">la phase d'optimisation technique dans la stratégie de <Link to="/referencement-toulouse/quest-ce-que-le-referencement-naturel/" className="text-bleu hover:text-black font-bold">référencement naturel</Link> permet de faciliter la lecture et la compréhension des pages par les moteurs</strong>. Répondre aux exigences des <strong>robots de Google</strong> pour atteindre la <strong>première page des résultats de recherche</strong> implique de soigner votre sitemap, votre maillage interne et votre netlinking pour ne pas entraver l'indexation de vos URLS.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Pourquoi travailler les optimisations de son site ?</h3>
                        <br/>                       
                        <p>Indexer un site est une priorité pour développer votre stratégie de référencement et <strong>améliorer votre communication web</strong>. Dénicher les erreurs qui surviennent et vous empêchent d'obtenir un meilleur classement vous <strong className="font-bold">permet de solutionner les problèmes rapidement pour améliorer le référencement</strong> et par la suite, proposer une <strong>expérience utilisateur</strong> en perpétuelle évolution sur vos pages. Votre site internet professionnel pourra apparaître durablement dans les <strong>premiers résultats de Google</strong>, qu'il s'agisse d'un site vitrine comme d'un site e-commerce. Votre taux de conversion se développera de façon plus conséquente en positionnant votre site dans les <strong>premiers résultats Google grâce à la Search Engine Optimization</strong>.</p>
                        <p>Les robots sont de plus en plus performants dans leur tri de données, c'est pour cette raison qu'il est indispensable de proposer des informations de qualité, de bien choisir l'ancre de lien qui convient, de publier des contenus pertinents pour bien indexer puis référencer son site. Afin d'éviter toute pénalité, le contenu de type spam sera à éviter, tout comme le contenu dupliqué. Il est <strong className="font-bold">essentiel de préférer un contenu unique et pertinent si vous vous demandez comment devenir plus visible sur Internet</strong>. Un temps de chargement trop long dû à des images trop lourdes pourra également nuire aux pages que Google indexe.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Élaborer un plan de site pertinent et stratégique</h3>
                        <br/>
                        <p>Le fichier de <strong>sitemap</strong> fait état de nombreuses données utiles aux robots qui indexeront et placeront votre site dans les pages de résultats des moteurs selon la requête tapée par l'utilisateur dans la search bar de Google. Face à un <strong>problème d'indexation</strong>, il faut savoir réagir : vérifiez la bonne prise en compte de la balise titre et meta-description, assurez-vous que les liens externes (liens entrants) qui pointent vers votre site soient de qualité. Les liens internes permettent aux robots de découvrir les pages, le sitemap XML constitue un autre moyen de communiquer ses URLs au moteur. L'optimisation pour mot-clé choisi et la rédaction vous permettront ensuite de vous positionner. Permettre aux pages de votre site d'être indexées est indispensable pour référencer votre support et <strong className="font-bold">bénéficier d'une meilleure présence en pages de résultats</strong>.</p>
                        <p>Suivre le statut de chaque page indexée est une étape à suivre si vous vous demandez comment référencer chaque URL, en vous assurant qu'il s'agisse bien d'une URL canonique de votre site internet sur Google. Quel que soit le moteur, <strong className="font-bold">référencer un site passe forcément par l'indexation</strong>. Afin de rendre vos informations accessibles pour les internautes mais également pour les mobinautes avec une version responsive, soumettre un site propre et pertinent au <strong>Googlebot</strong> sera bénéfique.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Des outils Google pour contrôler un maximum d'informations</h3>
                        <br/>
                        <p>En utilisant l'outil que met Google à votre disposition pour afficher toutes les pages indexées lorsque vous effectuez votre recherche, vous avez la possibilité de supprimer ou désindexer les éléments qui ne sont pas importants pour votre <strong>stratégie SEO</strong> et vous pourrez garder bien visible chaque URL. Répondre aux différents critères du moteur qui indexe les URL grâce à son robot crawler, le <strong>Googlebot</strong>, est un travail à réaliser par un référenceur pour que les sites soient indexés rapidement.</p>
                        <br/>
                    </div>
                    <div className="w-full mx-auto lg:w-1/2 xl:w-1/4 px-0 md:px-24 lg:px-10 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start" >
                        <div className="bloccontactsticky w-full lg:w-full flex flex-col justify-center items-center century text-justify flex" style={{background:'#3c3c3cfa url(' + bgbloc +')', backgroundBlendMode:'overlay', backgroundSize:'cover', backgroundPosition:'center'}}>
                                    <h2>Vous souhaitez mettre en place un projet web ?</h2>
                                    <br/>
                                    <h3>Linkweb met en place votre projet de création de site web.</h3>
                                    <br/>
                                    <div className="w-1/2 flex flex-row justify-center items-center">
                                    <br/>
                                        <BoutonBlog  url="/contact-agence-web-toulouse/" text="Contactez-nous" position="center" />
                                    </div>
                        </div>
                    </div>
                    
                </section>

                
                
            {/* </PageTransition> */}
        </Layout>
    );
}
};



export default CommentSavoirSiUnSiteEstIndexeParGoogle;
