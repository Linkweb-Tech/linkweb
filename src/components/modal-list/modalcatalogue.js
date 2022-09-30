import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../button";

// import refads from '../../images/referencement-ads.webp';

class ModalCatalogue extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="site-catalogue" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto py-6">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-left"*/ className="w-full xl:flex hidden lg:mt-0 mt-48 xl:w-auto">
                        {/* <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse" /> */}
                    </div>
                    <div className="blocref w-3/4 xl:w-1/3 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-white bg-grey flex flex-col justify-center" /*data-aos="fade-right"*/ style={{backgroundColor: 'rgba(62, 62, 62, 0.95)'}}>
                        {/* <Link to={this.props.linkTitle}> */}
                            <h4 className="century text-xl lg:text-2xl tracking-wider" /*data-aos="zoom-in"*/>
                                Pourquoi créer un site catalogue ?
                            </h4>
                        <br />
                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-base">
                            Le <strong>site internet catalogue</strong> permet de présenter l’ensemble des produits ou services d’une entreprise, de manière claire et concise. Il est également un <strong>outil marketing</strong> puissant, qui permet de générer des leads et de fidéliser les clients. Enfin, un <strong>site catalogue</strong> est une solution rentable et facile à mettre en place. Plus simple qu'un site e-commerce car il ne permet pas la <strong>vente en ligne</strong> et toute la gestion qui s'y réfère, il est une solution pour les personnes mettre en avant leurs produits avec des fiches dédiées.
                        </p>
                        <br/>
                        <h4 className="century text-xl lg:text-2xl tracking-wider" /*data-aos="zoom-in"*/>
                               À qui s'adresse le site catalogue ?
                        </h4>
                        <br/>
                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-base">
                            Le site catalogue est un outil qui s'adresse aux professionnels souhaitant mettre en avant les spécificités techniques de leurs produits pour une présentation exhaustive <strong>sans les contraintes d'un site de type e-commerce</strong>. Il s'agit d'un outil de communication essentiel pour les entreprises, qui leur permet de présenter leurs produits et les avantages qu'ils procurent au plus grand nombre.
                        </p>
                        <br />
                        <h4 className="century text-xl lg:text-2xl tracking-wider" /*data-aos="zoom-in"*/>
                              Combien coûte un site catalogue ?
                        </h4>
                        <br/>
                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-base">
                            Le <strong>coût d'un site catalogue</strong> dépend principalement du nombre de pages et de fonctionnalités qu'il aura. Plus le site sera complexe, plus il faudra compter un budget important. La complexité des fiches produits est également un élément à prendre en compte dans les coûts de développement.
                        </p>
                        <br/>
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalCatalogue;