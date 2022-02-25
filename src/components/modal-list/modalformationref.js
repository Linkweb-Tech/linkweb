import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../button";

// import refads from '../../images/referencement-ads.webp';

class ModalFormationRef extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="formationref" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto py-6">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-left"*/ className="w-full xl:flex hidden lg:mt-0 mt-48 xl:w-auto">
                        {/* <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse" /> */}
                    </div>
                    <div className="blocref w-3/4 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-white bg-grey flex flex-col justify-center" /*data-aos="fade-right"*/ style={{backgroundColor: 'rgba(62, 62, 62, 0.95)'}}>
                        {/* <Link to={this.props.linkTitle}> */}
                        {/* </Link> */}
                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-lg">
                        Le <strong>référencement SEO</strong> est une discipline qui nécessite du temps, mais aussi des connaissances techniques. À ce niveau, maîtriser les différentes techniques d’optimisation avant de se lancer offre un gain de temps considérable.
                        <br/><br/>
                        En effet, <strong>le référencement naturel fait appel à des compétences techniques</strong> avancées. En confiant son projet à un professionnel compétent, vous profitez non seulement de la connaissance de la discipline, mais également de l’expérience de l’expert. 
                        <br/><br/>
                        Par ailleurs, le référencement SEO constitue la <strong>première source de trafic pour un site internet</strong>. C’est pourquoi, la mise en place d’une stratégie de référencement procure un avantage considérable pour un site internet professionnel en termes de visibilité.
                        <br/><br/>
                        Également, bien connaître son marché ainsi que sa cible est fondamental pour <strong>proposer des contenus pertinents et parfaitement ciblés</strong> en vue de maximiser ses chances de convertir ses utilisateurs en prospects ainsi que d’en faire de nouveaux clients.
                        <br/><br />
                        Pour cela, <strong>réaliser un audit SEO est la première étape</strong> pour déterminer les actions d’optimisations à mettre en place : optimisation des balises, indexation des pages, popularité du nom de domaine (quête de backlinks ou liens externes), évaluation des requêtes ciblées, pertinence du maillage interne (liens internes), optimisation de l’utilisation de l’outil de création (CMS type <strong>Wordpress</strong>), optimisation sémantique de la rédaction pour un contenu de qualité, etc.
                        <br/><br/>
                        Au cours de la <strong>formation SEO</strong>, nous vous permettrons de réaliser un audit pour analyser votre site au même titre que les robots de Google, ainsi que d’appréhender l’analyse des données. Ce travail est essentiel vis-à-vis de la pertinence des actions à mener. La pratique est la clé pour aboutir à des résultats positifs en matière de communication web et optimiser au mieux chaque page intégrée à votre stratégie de <strong>référencement SEO</strong>.
                            {/* <Button url={this.props.linkAds} color="white" text="En savoir plus sur les campagnes Adwords SEA" position="start" /> */}
                            {/* <button
                                    className="link flex  mt-3 items-start justify-start text-white text-lg lg:text-xl"                    
                                    type="button"
                                    onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='/agence-adwords-47-31/';
                                    }}
                                ><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> En savoir plus sur les campagnes Adwords SEA
                                </button> */}
                        </p>
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalFormationRef;