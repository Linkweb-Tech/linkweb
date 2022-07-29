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
import google from "../../images/referencement-google-my-business.jpg";
import mybusiness from "../../images/apparaitre-premier-google-my-business.jpg";

import fbIcon from "../../images/facebook-logo.svg";
import twitterIcon from "../../images/twitter-logo.svg";
import instaIcon from "../../images/instagram-logo.svg";
import bgbloc from "../../images/creation-sites-web-toulouse.jpg";




class CommentApparaitreEnPremierSurGoogleMyBusiness extends Component {

    constructor(props) {
        super(props);
    
    }

render() {
    return (
        <Layout location={this.props.location}>

            <SEO
                title="Comment apparaître en premier sur Google My Business ? | Agence SEO à Toulouse (31)"
                description="Le référencement local via Google My Business est un moyen supplémentaire d'étendre sa visibilité sur le Web."
                keywords={[`Agence SEO Toulouse`, `Référencement Toulouse`]}
                url="https://linkweb.fr/referencement-toulouse/comment-apparaitre-en-premier-sur-google-my-business/"
                nom="Comment apparaître en premier sur Google My Business ?"
                slug="referencement-toulouse/comment-apparaitre-en-premier-sur-google-my-business/"
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
                    Comment apparaître en premier sur Google My Business ?
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
                        
                        <h3>Le référencement local est une bonne opportunité étant donné que les internautes recherchent des informations locales. Ainsi, vous pouvez avoir une première place sur Google My Business (GMB) pour votre entreprise et ainsi attirer un plus grand nombre de clients potentiellement.</h3>
                        <br/>
                        <p>Comment faire ? Vous devrez <strong className="font-bold">créer un compte Google ainsi qu'un profil My Business</strong> afin d’optimiser le référencement de votre entreprise sur la plateforme.</p>
                        <p>Ceci est bénéfique à de nombreux points de vue. En effet, <strong className="font-bold">développer la visibilité de votre société sur un outil comme Google My Business (GMB)</strong> vous permettra de :</p>
                        <ul>
                            <li><span className="text-bleu">></span> <strong>générer du trafic vers votre site internet</strong> et des contacts pour votre société,</li>
                            <li><span className="text-bleu">></span> <strong>attirer de potentiels clients</strong> issus de votre zone de chalandise,</li>
                            <li><span className="text-bleu">></span> apporter une information pertinente à votre sujet aux utilisateurs.</li>
                        </ul>
                        <p>En somme, étendre votre visibilité sur Google My Business (GMB) est un moyen d'<strong className="font-bold">atteindre un maximum de personnes pour dynamiser l'activité de votre entreprise</strong>. Découvrez <strong>comment apparaître en premier sur Google My Business</strong>.</p>
                        <br/>
                        <img src={google} className="w-full" alt="Comment apparaître en premier sur Google My Business"/>
                        <br/>
                        <h2>Google My Business : présentation et utilisation</h2>
                        <br/>
                        <p>Google My Business est un outil mis à disposition par le <strong>moteur de recherche</strong> afin de répertorier des entreprises de tous secteurs d'activité. Il n'est <strong className="font-bold">pas nécessaire de disposer d'un site internet pour apparaître dans les suggestions de Google My Business</strong>. De plus, en plus de vous donner la possibilité de <strong>créer une fiche propre à votre société</strong>, l'outil propose de nombreuses fonctionnalités pour <strong className="font-bold">développer votre communication en ligne</strong>.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Google My Business : fonctionnement</h3>
                        <br/>
                        <p>Tout d'abord, il faut savoir que <strong>Google My Business est directement relié à Google Maps</strong>. Google My Business permet de localiser les entreprises en France et dans le monde entier. Google My Business est un service gratuit. Il n'y a pas de frais d'inscription, ni de coût pour l'utilisation du service.</p>
                        <p>Il vous suffit de créer un compte Google, puis d'ajouter votre logo et votre description. Pour une requête donnée, <strong className="font-bold">Google restituera les trois premières fiches entreprises les plus pertinentes</strong> en haut des pages de résultats de recherche. Ceci reste valable pour des requêtes locales. Il est également possible d'accéder à liste étendue des résultats via Google Maps, avec les liens vers vos pages web et vos adresses mail.</p>
                        <p>Il est donc important de figurer parmi les premiers résultats pour obtenir une visibilité accrue grâce au référencement local.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Google My Business : comment s'inscrire ?</h3>
                        <br/>
                        <p>Vous avez décidé de <strong>créer votre compte Google My Business</strong> ? Pour y accéder, il vous suffit d'aller sur https://business.google.com/ et de suivre les étapes nécessaires à l'inscription :</p>
                        <ol className="list-decimal">
                            <li><strong>Connectez-vous à votre compte Google</strong> et accédez au menu « Mon Compte » puis « Gérer mon compte ». Cliquez sur le bouton « Ajouter un nouveau service », puis sélectionnez la catégorie de vos activités (par exemple : "Divers").</li><br/>
                            <li>Inscrivez tout ce dont vous avez besoin comme adresse postale ou numéro de téléphone, nom du propriétaire/responsable etc…</li><br/>
                            <li>Vérifiez que les <strong>données sont correctement saisies et valides</strong> avant de cliquer sur le bouton « Enregistrer».</li><br/>
                            <li>Une fois votre inscription validée il deviendra possible d’<strong>ajouter des photos</strong> à partir du moteur Flickr (en utilisant l'option "Ajouter photo" située directement en haut). Choisissez le nom de votre entreprise ou du lieu dans lequel vous souhaitez être présentée (voir la liste des villes disponibles).</li><br/>
                            <li>Votre logo doit être au format .gif ou .jpg (jpeg) toutes dimensions confondues, avec une taille minimum de 100 pixels pour l’image principale et 50 pixels pour chaque image supplémentaire.</li><br/>
                            <li>Dans la zone "A propos", <strong>indiquez un descriptif</strong> qui pourra intéresser les utilisateurs potentiels venant visiter votre page web. Par exemple, si vous vendez des produits alimentaires, inscrivez une description en rapport avec cette activité. Votre description doit comporter au minimum 3 mots clés. Ensuite, sachez que ce descriptif sera visible via la liste de toutes les autres <strong>entreprises localisables via Google My Business</strong>.</li><br/>
                            <li>La dernière étape consiste à <strong>remplir au maximum votre profil</strong> pour informer chaque internaute des informations relatives à votre entreprise. Vos horaires et coordonnées sont alors disponibles via Google Maps directement depuis votre propre compte Google My Business !</li><br/>
                            <li>Si vos coordonnées ne sont pas encore disponibles sur Internet, n'hésitez pas à contacter notre service afin qu’il puisse les mettre en place.</li>
                        </ol>
                        <br/>
                        <p>Pour valider le fait que vous êtes bien le propriétaire de la fiche, Google vous adressera un code de validation par téléphone ou par courrier. Notre <strong className="font-bold"><Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold">agence SEO à Toulouse</Link> est en mesure de créer et de gérer votre profil</strong> pour un résultat optimal.</p>
                        <br/>
                        <h2>Pourquoi le référencement local est indispensable dans la stratégie de votre entreprise ?</h2>
                        <br/>
                        <p>Le référencement local est <strong className="font-bold">essentiel pour la visibilité de votre entreprise sur le web</strong>. C’est un outil indispensable pour faire connaître et découvrir vos services, produits ou événements à travers les <strong>moteurs de recherche</strong>.</p>
                        <p>En plus d'être une source d'information importante pour les internautes, ces résultats peuvent aussi être utilisés par des <strong>annonceurs publicitaires via Adwords</strong> afin d’optimiser leur budget publicitaire en fonction du <strong>nombre de clics</strong> obtenus par l’annonceur.</p>
                        <p>Toutefois, le référencement local est une discipline particulièrement exploitée dans le cadre du référencement naturel SEO, son optimisation est nécessaire pour <strong className="font-bold">accroître vos chances de gagner en visibilité et générer des contacts pour votre entreprise</strong>.</p>
                        <br/>
                        <img src={mybusiness} className="w-full" alt="Référencement sur Google"/>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Toucher des utilisateurs dans votre zone géographique</h3>
                        <br/>
                        <p>L'étude de la zone géographique permet d’avoir une idée précise du <strong className="font-bold">nombre d'utilisateurs qui se trouvent à proximité de votre site</strong>. Cela peut être un bon indicateur pour savoir si vos services ou produits sont bien visibles par les utilisateurs en question et donc, aussi, si ces derniers ont des intentions commerciales envers vous.</p>
                        <p>Toucher plusieurs zones géographiques simultanément est possible en ciblant ces dernières directement dans le contenu de son site, mais également via un outil comme Google My Business. Un <strong className="font-bold">utilisateur présent dans votre zone de chalandise sera plus à même de répondre à votre offre de service</strong> qu'un utilisateur d'une autre région. Vous multipliez donc vos chances d'obtenir un <strong>taux de conversion</strong> en adéquation avec vos objectifs.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Cibler des mots-clés moins concurrentiels</h3>
                        <br/>
                        <p>Le référencement local possède l'avantage d'<strong className="font-bold">être moins concurrentiel que le référencement national ou international</strong>. Cela s'explique principalement par une moindre présence en ligne d'entreprises alentours.</p>
                        <p>Toutefois, certains secteurs sont déjà très prisés. C'est pourquoi, il peut être utile de <strong>privilégier la longue traîne pour optimiser votre présence dans les résultats de recherche (SERP ou Search Engine Results Pages)</strong> et ainsi générer du trafic qualifié vers votre site web.</p>
                        <p>En ciblant des requêtes très précises, vous pouvez également maximiser vos chances de convertir. Plus la requête d'un utilisateur est précise, plus ce dernier sait ce qu'il recherche et <strong className="font-bold">ses chances de passer à l'action seront d'autant plus importantes</strong>.</p>
                        <br/>
                        <h2>Comment apparaître en premier sur Google My Business ?</h2>
                        <p>Pour être <strong>visible en premier sur Google My Business</strong>, vous devez créer une fiche avec une présentation complète et des informations pertinentes. À partir de là, il existe plusieurs techniques pour <strong className="font-bold">rendre votre fiche visible dans le classement de Google Maps</strong>.</p>
                        <p>S'il n'existe pas de méthode infaillible pour apparaître en premier, il existe néanmoins des techniques permettant d'être présents dans les toutes premières suggestions et ce, de façon régulière.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Renseigner et compléter sa fiche de manière exhaustive</h3>
                        <br/>
                        <p>Pour optimiser votre positionnement, il est recommandé de <strong className="font-bold">compléter et de mettre à jour régulièrement le contenu de votre fiche</strong>. En effet, Google recense les informations que vous avez inscrites dans la fiche (nom du site, nom de l'entreprise, secteurs d'activité, numéro de téléphone, horaires, etc.) pour évaluer l'importance des liens qui y sont associés. Ainsi, si vous ne modifiez pas régulièrement vos infos ou si elles n'apparaissent pas dans les résultats, alors cela peut faire perdre en <strong>visibilité au sein des moteurs de recherche</strong>.</p>
                        <p>Enfin, il est important que toutes les informations soient exactes afin que Google puisse valider la pertinence de votre fiche dans ses résultats. Néanmoins, il faut savoir que le fait de renseigner sa fiche ne créé pas d'avantage concurrentiel, mais cela reste indispensable pour mettre toutes les chances de votre côté pour <strong className="font-bold">voir Google Maps référencer votre établissement et apparaître dans la recherche Google</strong>.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Ajoutez des mots-clés dans le titre de votre établissement</h3>
                        <br/>
                        <p>C'est une bonne idée de mettre des mots-clés dans le titre de votre établissement. Cela permet à Google de catégoriser plus simplement votre entreprise, ce qui <strong className="font-bold">favorise sa présence dans les suggestions de My Business</strong>.</p>
                        <p>Toutefois, l'ajout de mots-clés ne doit pas être de nature à fausser artificiellement les résultats. En somme, votre titre pourra être révoqué par Google si ce dernier le juge abusif. C'est pourquoi, la présence de mot-clé doit être naturelle et <strong className="font-bold">ne doit pas vous servir à occulter le nom de votre établissement</strong> qui est essentiel pour être visible au sein de la première page de résultats.</p>
                        <p>Attention, il faut savoir qu'en termes de <strong><Link to="/referencement-toulouse/comment-etre-reference-google/" className="text-bleu hover:text-black font-bold">référencement Google</Link> My Business</strong>, il est plus question de fréquence d'apparition que de positionnement. Qui plus est, votre fiche est un complément de votre site dont la stratégie SEO est orientée pour vous faire figurer dans les résultats naturels.</p>
                        <br/>
                        <h3 className="text-darkgrey" style={{fontSize:'23px'}}>Créez des posts pour proposer du contenus frais et régulier</h3>
                        <br/>
                        <p>À l'image du référencement d'un site, en termes de SEO, il est important de proposer du contenu frais et ce de manière régulière. En effet, cela permet d'<strong className="font-bold">envoyer un signal de votre présence à Google</strong>, ainsi que de transmettre plus simplement vos informations à destination des utilisateurs.</p>
                        <p>De plus, il est possible d'<strong className="font-bold">ajouter des liens vers les pages de votre site pour cibler une information</strong>. Par ailleurs, ajouter des photos sur votre fiche permet également d'envoyer un signal à destination du moteur.</p>
                        <p>Apparaître dans les résultats d'un moteur de recherche comme Google nécessite un investissement de temps important. À ce titre, la création de contenus frais contribue à un bon référencement, qu'il s'agisse de travail sur un site ou bien directement sur une <strong>fiche d'établissement Google My Business</strong>.</p>
                        <br/>
                        <h2>Conclusion</h2>
                        <br/>
                        <p>En définitive, les moteurs de recherche ont besoin d'informations sur l'activité des établissements afin de pouvoir <strong className="font-bold">proposer aux internautes un contenu pertinent et adapté à leur recherche</strong>. En ce qui concerne Google, il est possible d'ajouter des informations directement depuis son moteur de recherche en utilisant les fonctionnalités de <strong>My Business</strong>. Lorsque vous avez créé votre propre compte Google My Business, vous disposez ainsi d'un outil complet permettant notamment d'envoyer un signal à destination du moteur. </p>
                        <p>Par ailleurs, cela représente une <strong className="font-bold">opportunité supplémentaire pour être visible sur le web grâce au SEO</strong>. En effet, il est important que les internautes trouvent rapidement ce qu'ils cherchent via un <strong>moteur de recherche comme Google</strong> (internaute à la recherche d'une boutique de vêtement, d'un restaurant, etc.). Le but étant que ceux-ci puissent directement accéder à votre entreprise sans passer par des pages interminables dans les résultats du moteur.</p>
                        <p>En somme, il s'agit d'un bon axe de développement pour <strong className="font-bold"><Link to="/referencement-toulouse/comment-ameliorer-son-referencement-naturel/" className="text-bleu hover:text-black font-bold">améliorer son référencement naturel (SEO)</Link></strong> en plus du travail d'optimisation de balises, de netlinking (obtention de backlinks ou notion de lien entrant) et de création de contenu de qualité en adéquation avec les <strong>algorithmes des moteurs de recherches</strong>.</p>
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



export default CommentApparaitreEnPremierSurGoogleMyBusiness;
