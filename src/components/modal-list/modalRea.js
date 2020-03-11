import React from "react";
import { Link } from "gatsby";

import creationsite from '../../images/creation-sites-web-toulouse.jpg';
import loupe from "../../images/loupe.png";
import menu from "../../images/menu.png";
import souris from "../../images/mouse.png";

class ModalRea extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="creation-site-web" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div className="w-full xl:flex hidden justify-end xl:w-auto">
                        <img width="850px" className="h-auto justify-end order-last lg:order-first" src={creationsite} alt="Création site internet à Toulouse" />
                    </div>
                    <div className="blocrea w-3/4 xl:w-1/3 lg:w-1/2 px-12 pt-8 lg:pt-16 lg:my-0 -my-64 shadow-xl max-h-auto lg:mx-0 py-6 lg:py-12 xl:px-12 text-white flex flex-col justify-center" style={{ backgroundColor: 'rgba(62, 62, 62, 0.95)' }}>
                        <Link to={this.props.linkTitle}>
                            <h2 className="century text-xl lg:text-3xl tracking-wider">
                                <span className="text-bleu">/</span>CRÉATION DE SITES WEB
                            </h2>
                        </Link>
                        <br />
                        <h4 className="century text-md tracking-wider pb-6">
                            <span className="font-semibold text-justify">Linkweb élabore ou réalise une refonte du site internet, site e-commerce, site vitrine de votre entreprise. Nous définissons également des solutions web sur-mesure telles qu'un intranet.</span>
                        </h4>
                        <p className="century text-justify text-sm lg:text-md">
                            <strong>Pour créer un site</strong> performant, nous étudions vos vos besoins fonctionnels ainsi que les attentes de vos utilisateurs.
                            <strong>Nos sites web sont crées à partir d'un design moderne</strong> et <strong>ergonomique</strong> qui s’adapte à toutes les <strong>tailles d’écrans</strong> : mobile, tablette et desktop.<br /><br />
                            En choisissant Linkweb pour <strong>créer votre site internet</strong> à <strong>Agen</strong> et <strong>Toulouse</strong>, vous serez accompagné du choix de l'<strong>hébergement</strong>, du <strong>nom de domaine</strong>, de l'<strong>outil de création</strong> (<strong>CMS Wordpress</strong>, <strong>Drupal</strong>, <strong>Prestashop</strong>, solution <strong>HTML/CSS</strong>, etc.), jusqu'au <strong>web design</strong> ainsi que pour la création des contenus. Nous disposons de tous les <strong>outils indispensables</strong> pour vous permettre de <strong>faire un site</strong> performant pour votre entreprise.
                        </p>
                        <div className="responsive w-full mt-12 flex lg:flex-row flex-col items-center">
                            <div className="w-full flex-col mb-5 flex md:w-1/2">
                                <Link className="hover:text-bleu" to={this.props.linkLoupe}><img
                                    src={loupe}
                                    alt="Agence Web Agen"
                                    className="mx-auto"
                                />
                                </Link>
                                <Link to={this.props.linkLoupe} className="pt-6 block century text-sm text-center text-white capitalize tracking-widest hover:text-bleu">
                                    Création site <br /> web sur-mesure
                                </Link>
                            </div>
                            <div className="w-full md:w-1/3 mb-5">
                                <Link className="hover:text-bleu" to={this.props.linkResponsive}><img
                                    src={menu}
                                    alt="Création site internet Agen"
                                    className="m-auto"
                                /></Link>
                                <Link to={this.props.linkResponsive} className="pt-6 block century text-sm text-center text-white capitalize tracking-widest hover:text-bleu">
                                    Responsive <br />design
                                </Link>
                            </div>
                            <div className="w-full md:w-1/3 mb-5">
                                <Link className="hover:text-bleu" to={this.props.linkInterface}><img
                                    src={souris}
                                    alt="Agence Web Toulouse"
                                    className="m-auto"
                                /></Link>
                                <Link to={this.props.linkInterface} className="pt-6 block century text-sm text-center text-white capitalize tracking-widest hover:text-bleu">
                                    Interface <br /> ergonomique
                                </Link>
                            </div>
                        </div>
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalRea;