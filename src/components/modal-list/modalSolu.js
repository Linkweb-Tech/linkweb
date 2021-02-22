import React, { Component } from 'react';
//import Button from "../button";

// import sitesurmesure from '../../images/creation-de-site-sur-mesure.webp';

class ModalSolu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="solution-sur-mesure" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-right"*/ className="w-full xl:flex hidden justify-end xl:w-auto">
                        {/* <img width="850px" className="h-full justify-end order-last lg:order-first" src={sitesurmesure} alt="Agence Adwords Toulouse" /> */}
                    </div>
                    <div className="blocref w-3/4 xl:w-1/3 lg:w-1/2 px-12 pt-8 lg:pt-16 lg:my-0 -my-64 shadow-xl max-h-auto lg:mx-0 py-6 lg:py-12 xl:px-12 text-white flex flex-col justify-center" /*data-aos="fade-left"*/ style={{ backgroundColor: 'rgba(62, 62, 62, 0.95)' }}>
                        <h2 className="century text-xl lg:text-3xl tracking-wider" /* data-aos="zoom-in"*/>
                            <span className="text-bleu">/</span>SOLUTION SUR-MESURE
                        </h2>
                        <br />
                        <h4 className="century text-whide text-md tracking-wider pb-6" /*data-aos='fade-left'*/>
                            <span className="font-semibold text-justify">Nous créons une solution web qui colle parfaitement à vos besoins. En fonction de vos objectifs, nous vous proposerons des fonctionnalités pertinentes pour un projet tel que le votre.</span>
                        </h4>
                        <p /*data-aos='fade-bottom'*/ className="century text-white text-justify text-sm lg:text-md">
                            Nos <strong>concepteurs de sites internet</strong> analysent vos besoins pour vous proposer une solution pertinente pour vous et vos utilisateurs. Du <strong>simulateur de devis</strong> au <strong>configurateur de produits</strong>, nous <strong>créons des sites web sur-mesure</strong> pour vous apporter une plus-value par rapport à vos concurrents grâce à <strong>votre site internet</strong>.
                            </p>
                        {/* <Button url={this.props.linkSolutions} text="En savoir plus sur les solutions web sur-mesure" position="start" /> */}
                        {/* <button
                                    className="link flex  mt-3 items-start justify-start text-black text-lg lg:text-xl"                    
                                    type="button"
                                    onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='/creation-site-internet-sur-mesure/';
                                    }}
                                ><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> En savoir plus sur les solutions web sur-mesure
                                </button> */}
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalSolu;