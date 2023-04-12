import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../button";

// import refads from '../../images/referencement-ads.webp';

class ModalContenuToulouse extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="contenu" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto py-6">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-left"*/ className="w-full xl:flex hidden lg:mt-0 mt-48 xl:w-auto">
                        {/* <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse" /> */}
                    </div>
                    <div className="blocref w-3/4 xl:w-1/3 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-white bg-grey flex flex-col justify-center" /*data-aos="fade-right"*/ style={{backgroundColor: 'rgba(62, 62, 62, 0.95)'}}>

                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-lg">
                            La création de contenu est au cœur d'une expérience en ligne réussie pour les utilisateurs et constitue un élément clé pour répondre aux attentes des moteurs de recherche. Cela contribue à répondre aux besoins de vos visiteurs et à optimiser judicieusement l'utilisation des mots-clés pertinents, pour que votre site web gagne en performance et en visibilité. Une organisation soignée du contenu facilite la navigation pour les utilisateurs et attire également les robots "crawlers" qui inspectent votre site. Le travail du <Link to="/referencement-toulouse/pourquoi-faire-appel-a-un-redacteur-web/" className="text-bleu hover:text-black font-bold">rédacteur web</Link> contribue à <Link to="/referencement-toulouse/comment-ameliorer-son-referencement-naturel/" className="text-bleu hover:text-black font-bold">améliorer le référencement naturel</Link> de votre site internet.
                        </p>
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalContenuToulouse;