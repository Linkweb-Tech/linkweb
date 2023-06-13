import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../button";

// import refads from '../../images/referencement-ads.webp';

class ModalContenuLyon extends Component {

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
                        Le contenu est au centre d'une expérience en ligne réussie et répond aux exigences des moteurs de recherche. Il doit être adapté aux besoins des visiteurs et inclure judicieusement des <strong className="font-normal">mots-clés pertinents</strong>, ce qui permettra à votre site web d'être considéré comme pertinent dans le but de maximiser sa visibilité.
                        <br/><br/>
                        Par ailleurs, l’organisation du contenu sur le site facilite la navigation pour les utilisateurs tout en attirant l'attention des <strong className="font-normal">robots "crawlers"</strong> qui analysent votre site.

                        </p>
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalContenuLyon;