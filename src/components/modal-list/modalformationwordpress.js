import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../button";

// import refads from '../../images/referencement-ads.webp';

class ModalFormationWordpress extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="formationwp" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto py-6">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-left"*/ className="w-full xl:flex hidden lg:mt-0 mt-48 xl:w-auto">
                        {/* <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse" /> */}
                    </div>
                    <div className="blocref w-3/4 xl:w-1/2 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-white bg-grey flex flex-col justify-center" /*data-aos="fade-right"*/ style={{backgroundColor: 'rgba(62, 62, 62, 0.95)'}}>
                        {/* <Link to={this.props.linkTitle}> */}
                        {/* </Link> */}
                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-lg">
                        Selon l’outil de création, les <strong>techniques de référencement</strong> peuvent différer. Toutefois, cela ne modifie pas la stratégie. En effet, chaque système fonctionne de manière indépendante. Dans le cas de <strong>Wordpress</strong>, ce dernier comporte des fonctionnalités natives liées à l’<strong>optimisation pour les moteurs de recherche</strong>. En revanche, pour aller plus loin dans l’optimisation technique, il faudra utiliser des extensions (ou plugin).
                        <br/><br/>
                        Ce système d’extensions est propre à <strong>Wordpress</strong> et si d’autres CMS utilisent également un système d’extensions, ces derniers auront un fonctionnement qui leur est propre et totalement indépendant. 
                        <br/>
                        <br/>
                        Une majeure partie du Web étant couverte par <strong>Wordpress</strong>, <strong>se former aux techniques de référencement sur Wordpress</strong> est essentiel afin d’être en mesure de référencer un blog ou un site internet professionnel dans les résultats des moteurs de recherche.                              <br />
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

export default ModalFormationWordpress;