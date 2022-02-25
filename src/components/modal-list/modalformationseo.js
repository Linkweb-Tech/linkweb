import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../button";

// import refads from '../../images/referencement-ads.webp';

class ModalFormationSEO extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="formationseo" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto py-6">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-left"*/ className="w-full xl:flex hidden lg:mt-0 mt-48 xl:w-auto">
                        {/* <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse" /> */}
                    </div>
                    <div className="blocref w-3/4 xl:w-1/2 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-white bg-grey flex flex-col justify-center" /*data-aos="fade-right"*/ style={{backgroundColor: 'rgba(62, 62, 62, 0.95)'}}>
                        {/* <Link to={this.props.linkTitle}> */}
                        {/* </Link> */}
                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-lg">
                        Au même titre que les réseaux sociaux, le référencement SEO constitue une <strong>source de trafic importante pour rendre un site web et chaque page (et URL) visible</strong>. À partir d’une stratégie de contenu parfaitement maîtrisée, le <strong>référencement SEO</strong> vous permet de dynamiser votre communication tout en vous rendant disponible pour les internautes.
                        <br/><br/>
                        De la compréhension des <strong>facteurs de référencement SEO</strong> à la maîtrise des outils d’analyse (Google Analytics ou Search Console), la formation devra vous permettre de : 
                        <br/><br/>
                        <ul className="pl-5">
                            <li className="list-disc">Appréhender et <strong>comprendre les problématiques du référencement naturel SEO</strong> pour atteindre ses objectifs webmarketing.</li>
                            <li className="list-disc">Maitriser les techniques et les <strong>fondamentaux du référencement SEO</strong>.</li>
                            <li className="list-disc">Apprendre à déceler les facteurs bloquants pour le référencement SEO.</li>
                            <li className="list-disc">Acquérir une méthode pour définir un plan d’actions adapté à son site internet.</li>
                            <li className="list-disc">Renforcer la <strong>visibilité naturelle de son site internet</strong> et sa notoriété en ligne.</li>
                        </ul>
                        <br/>
                        Le <strong>formateur</strong> pourra répondre à chacune de vos questions et procèdera à la validation de chaque module durant les sessions pour s’assurer de la bonne assimilation du contenu de la formation.
                              <br />
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

export default ModalFormationSEO;