import React from "react";
import { Link } from "gatsby";
import Button from "../button";

import refads from '../../images/referencement-ads.jpg';

class ModalAds extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="referencement-ads" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto py-6">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-left"*/ className="w-full xl:flex hidden lg:mt-0 mt-48 xl:w-1/2 py-10">
                        <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse" />
                    </div>
                    <div className="blocref w-3/4 xl:w-1/3 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-white bg-grey flex flex-col justify-center" /*data-aos="fade-right"*/>
                        <Link to={this.props.linkTitle}>
                            <h2 className="century text-xl lg:text-4xl tracking-wider" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">/</span> RÉFÉRENCEMENT ADWORDS
                            </h2>
                        </Link><br />
                        <h4 className="century text-lg tracking-wider pb-6" /*data-aos='fade-left'*/>
                            <span className="font-semibold text-justify">Nous optimisons le choix des mots-clés et la configuration de votre plan publicitaire pour respecter votre budget et maximiser vos conversions.</span>
                        </h4>
                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-lg">
                            En tant qu'<strong className="font-normal">agence digitale</strong> de <strong className="font-normal">conseil en stratégie</strong>, nous créons votre <strong>campagne publicitaire Adwords</strong> en prenant en compte vos objectifs de visibilité et vos attentes de retours concrets en termes de référencement payant avec <strong>Google Adwords</strong>.
                              <br />
                            <Button url={this.props.linkAds} color="white" text="En savoir plus sur les campagnes Adwords SEA" position="start" />
                        </p>
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalAds;