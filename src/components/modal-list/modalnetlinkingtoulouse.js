import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../button";

// import refads from '../../images/referencement-ads.webp';

class ModalNetlinkingToulouse extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="netlinking" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto py-6">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-left"*/ className="w-full xl:flex hidden lg:mt-0 mt-48 xl:w-auto">
                        {/* <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse" /> */}
                    </div>
                    <div className="blocref w-3/4 xl:w-1/3 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-white bg-grey flex flex-col justify-center" /*data-aos="fade-right"*/ style={{backgroundColor: 'rgba(62, 62, 62, 0.95)'}}>

                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-lg">
                        Le <strong><Link to="/referencement-toulouse/comment-faire-du-netlinking/" className="font-bold text-bleu hover:text-white">netlinking</Link></strong> joue un rôle essentiel dans l'accroissement de la popularité et du rayonnement de votre site web. L'obtention de liens externes (<strong>backlinks</strong>) provenant de sites web reconnus par Google renforce le statut d'autorité de votre site dans votre domaine d'activité. Cette stratégie génère un signal positif envers les moteurs de recherche, qui accordent alors une confiance accrue à votre site. En conséquence, vous bénéficierez d'un classement amélioré grâce à l'obtention de backlinks (liens externes) d’autorité. 
                        </p>
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalNetlinkingToulouse;