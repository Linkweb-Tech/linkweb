import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../button";

// import refads from '../../images/referencement-ads.webp';

class ModalOptimisation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="optimisation" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto py-6">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-left"*/ className="w-full xl:flex hidden lg:mt-0 mt-48 xl:w-auto">
                        {/* <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse" /> */}
                    </div>
                    <div className="blocref w-3/4 xl:w-1/3 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-white bg-grey flex flex-col justify-center" /*data-aos="fade-right"*/ style={{backgroundColor: 'rgba(62, 62, 62, 0.95)'}}>

                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-lg">
                            Chacune des pages web de votre site internet doit être techniquement optimisée pour les moteurs. Vos pages contiennent des zones chaudes auxquelles les robots accordent une importance toute particulière. De l’URL aux attributs des images, il existe plusieurs centaines de critères d’optimisation. Ce travail est indispensable pour faciliter l’indexation et maximiser le positionnement de vos pages web sur des requêtes stratégiques.
                        </p>
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalOptimisation;