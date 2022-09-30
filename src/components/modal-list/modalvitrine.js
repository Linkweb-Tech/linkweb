import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../button";

// import refads from '../../images/referencement-ads.webp';

class ModalVitrine extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="site-vitrine" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto py-6">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-left"*/ className="w-full xl:flex hidden lg:mt-0 mt-48 xl:w-auto">
                        {/* <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse" /> */}
                    </div>
                    <div className="blocref w-3/4 xl:w-1/3 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-white bg-grey flex flex-col justify-center" /*data-aos="fade-right"*/ style={{backgroundColor: 'rgba(62, 62, 62, 0.95)'}}>
                        {/* <Link to={this.props.linkTitle}> */}
                            <h4 className="century text-xl lg:text-2xl tracking-wider" /*data-aos="zoom-in"*/>
                                Pourquoi créer un site vitrine ?
                            </h4>
                        <br />
                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-base">
                            Il y a plusieurs raisons pour lesquelles il est important de <strong>créer un site vitrine</strong> pour votre entreprise. En effet, un site vitrine vous permettra de mettre en avant vos produits ou services et de vous démarquer de la concurrence. De plus, un <strong>site vitrine</strong> sera un excellent moyen de communiquer avec vos clients et prospects, et de leur fournir des informations sur votre entreprise. Enfin, un site vitrine vous permettra d'augmenter votre visibilité sur internet et de <strong>générer du trafic qualifié</strong> vers votre entreprise.
                        </p>
                        <br/>
                        <h4 className="century text-xl lg:text-2xl tracking-wider" /*data-aos="zoom-in"*/>
                               À qui s'adresse le site vitrine ?
                        </h4>
                        <br/>
                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-base">
                            Le site vitrine est un <strong>type de site web</strong> qui présente généralement une entreprise ou une organisation et leurs produits ou services. Les sites vitrines sont destinés à promouvoir une marque, à fournir des informations sur les produits ou services qu'une entreprise offre et à permettre aux visiteurs de contacter l'entreprise.
                        </p>
                        <br />
                        <h4 className="century text-xl lg:text-2xl tracking-wider" /*data-aos="zoom-in"*/>
                              Combien coûte un site vitrine ?
                        </h4>
                        <br/>
                        <p /*data-aos='fade-bottom'*/ className="century text-justify text-sm lg:text-base">
                            Le <strong>coût d'un site vitrine</strong> peut varier considérablement en fonction du type de site que vous souhaitez créer et des fonctionnalités que vous souhaitez y inclure. Le nombre de pages, la technologie utilisée, l'aspect graphique ou encore la création de contenus sont des éléments qui font varier le prix. Néanmoins, le site internet vitrine est généralement le <strong>type de site web le moins onéreux</strong>.
                        </p>
                        <br/>
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalVitrine;