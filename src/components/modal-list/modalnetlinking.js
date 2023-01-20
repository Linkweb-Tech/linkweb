import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../button";

// import refads from '../../images/referencement-ads.webp';

class ModalNetlinking extends Component {

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
                        Le netlinking consiste à accroître la <strong>popularité de votre site internet</strong>. En recevant des liens externes (<strong>backlinks</strong>) en provenance de sites web possédant une forte <strong>autorité aux yeux de Google</strong>, votre site internet devient une référence dans votre secteur d’activité. Il s’agit d’un signal très favorable puisque votre site acquiert un capital de confiance non-négligeable auprès des moteurs, ce qui favorise un <strong>bon classement</strong>.
                        </p>
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalNetlinking;