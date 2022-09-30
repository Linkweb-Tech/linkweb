import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../button";

// import refads from '../../images/referencement-ads.webp';

class ModalEcommerce extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="site-ecommerce" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto py-6">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-left"*/ className="w-full xl:flex hidden lg:mt-0 mt-48 xl:w-auto">
                        {/* <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse" /> */}
                    </div>
                    <div className="blocref w-3/4 xl:w-1/2 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-white bg-grey flex flex-col justify-center" /*data-aos="fade-right"*/ style={{backgroundColor: 'rgba(62, 62, 62, 0.95)'}}>
                        {/* <Link to={this.props.linkTitle}> */}
                            <h4 className="century text-xl lg:text-2xl tracking-wider" /*data-aos="zoom-in"*/>
                                Pourquoi créer une boutique en ligne ?
                            </h4>
                        <br />
                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-base">
                        La <strong>création d'une boutique en ligne</strong> permet de vendre ses produits directement en ligne. Cela permet de toucher une audience beaucoup plus large grâce à Internet. De plus, les coûts de fonctionnement sont généralement moins élevés que pour une boutique physique. Enfin, il est possible de mettre en place des <strong>campagnes marketing ciblées et efficaces</strong> pour attirer les internautes sur votre site.
                        </p>
                        <br/>
                            <h4 className="century text-xl lg:text-2xl tracking-wider" /*data-aos="zoom-in"*/>
                                À qui s'adresse le site e-commerce ?
                            </h4>
                        <br/>
                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-base">
                        Le <strong>site e-commerce</strong> s'adresse aux entreprise souhaitant développer leur activité au-delà des frontières physiques. Combiné à une stratégie de référencement naturel, le <strong>site e-commerce</strong> permet aux utilisateurs de trouver facilement et rapidement les produits qu'ils recherchent, de comparer les prix et de faire des achats en toute sécurité.
                        </p>
                        <br />
                        <h4 className="century text-xl lg:text-2xl tracking-wider" /*data-aos="zoom-in"*/>
                            Combien coûte un site e-commerce ?
                        </h4>
                        <br/>
                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-base">
                        Il existe de nombreux facteurs qui peuvent influencer le <strong>coût d'un site e-commerce</strong>. En effet, ces sites peuvent être adaptés à toutes sortes de besoins spécifiques, mais ils nécessitent également une expertise technique beaucoup plus importante qu'un site vitrine. À ce titre, il est nécessaire de :
                        <br/><br/>
                        <ul>
                            <li className="list-disc">mettre en place une solution de <strong>back-office</strong> pour gérer son activité, ses stocks, etc.,</li>
                            <li className="list-disc">proposer des <strong>moyens de paiement</strong>,</li>
                            <li className="list-disc">proposer des solutions de livraison variées,</li>
                            <li className="list-disc">assurer la gestion de la <strong>facturation</strong>,</li>
                            <li className="list-disc">créer et <strong>mettre à jour ses fiches produits</strong>.</li>
                        </ul>
                        </p>
                        <br/>
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalEcommerce;