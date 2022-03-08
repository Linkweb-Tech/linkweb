import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../button";


// import refweb from '../../images/referencement-web.jpg';


class ModalRef extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="referencement-web" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div /* data-aos="fade-right" */ className="w-full xl:flex hidden justify-end xl:w-auto">
                        {/* <img width="850px" className="h-full justify-end order-last lg:order-first" src={refweb} alt="Agence Adwords Toulouse" /> */}
                    </div>
                    <div className="blocref w-3/4 xl:w-1/3 lg:w-1/2 px-12 pt-8 lg:pt-16 lg:my-0 -my-64 shadow-xl max-h-auto lg:mx-0 py-6 lg:py-12 xl:px-12 text-white flex flex-col justify-center bg-grey" /*data-aos="fade-left"*/ style={{backgroundColor: 'rgba(62, 62, 62, 0.95)'}}>
                        {/* <Link to={this.props.linkTitle}> */}
                            <h4 className="century text-xl lg:text-3xl tracking-wider" /*data-aos="zoom-in"*/>
                                <span className="text-bleu">/</span>RÉFÉRENCEMENT NATUREL
                            </h4>
                        {/* </Link> */}
                        <br />
                        <h5 className="century text-md tracking-wider pb-6" /*data-aos='fade-left'*/>
                            <span className="font-semibold text-justify">Le référenceur en charge de votre site web collabore avec vous chaque mois pour vous rendre compte de l’évolution du référencement de votre site internet.</span>
                        </h5>
                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-md">
                            À partir d’un <strong>audit de site</strong>, notre <strong>agence de référencement SEO</strong> élabore votre stratégie de {/*<Link className="hover:text-bleu" to={this.props.linkRefAgence}>*/}<strong>référencement site internet</strong>{/*</Link>*/} et analyse les statistiques relatives à votre site internet pour une <strong>optimisation</strong> qui vous apportera une visibilité pertinente avec les <strong>moteurs de recherche</strong> grâce au <strong>marketing digital</strong> (<strong>web marketing</strong>). Ceci est rendu possible grâce à la spécialisation de notre <Link to="/agence-web-lyon/" className="text-bleu hover:text-white font-bold">agence web à Lyon</Link> et dans toute la France en termes de référencement. Nous proposons également une <Link to="/formation-referencement/referencement-naturel-google-seo/" className="text-bleu hover:text-white font-bold">formation en référencement naturel</Link> pour une meilleure appréhension de la discipline.
                                </p>
                                {/* <button
                                    className="link flex  mt-3 items-start justify-start text-white text-lg lg:text-xl"                    
                                    type="button"
                                    onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='/referencement-toulouse/';
                                    }}
                                ><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> En savoir plus sur le référencement naturel SEO
                                </button> */}
                        {/* <Button url={this.props.linkRef} text="En savoir plus sur le référencement naturel SEO" color="white" position="start" /> */}
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalRef;

