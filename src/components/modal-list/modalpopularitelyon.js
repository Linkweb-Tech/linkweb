import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../button";

// import refads from '../../images/referencement-ads.webp';

class ModalPopulariteToulouse extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="popularite" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto py-6">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-left"*/ className="w-full xl:flex hidden lg:mt-0 mt-48 xl:w-auto">
                        {/* <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse" /> */}
                    </div>
                    <div className="blocref w-3/4 xl:w-1/3 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-white bg-grey flex flex-col justify-center" /*data-aos="fade-right"*/ style={{backgroundColor: 'rgba(62, 62, 62, 0.95)'}}>

                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-lg">
                            Notre <strong className="font-normal">agence de référencement</strong> réalise un travail de fond pour augmenter la <strong className="font-normal">popularité en ligne de votre site web</strong>. Qu’est-ce que cela signifie ? Nous travaillons à ce que d’autres sites parlent de vous sur le Web. Ceci a pour vocation de renforcer les signaux envoyés à destination des moteurs de recherche afin de renforcer votre crédibilité et votre autorité en ligne et ainsi <strong className="font-normal">améliorer votre classement</strong>.</p>
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalPopulariteToulouse;