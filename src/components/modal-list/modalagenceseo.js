import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../button";

// import refads from '../../images/referencement-ads.webp';

class ModalAgenceSEO extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="agenceseo" className="popup flex flex-col xl:flex-row w-full justify-center mx-auto py-6">
                <div className="popup-inner flex justify-center xl:overflow-visible">
                    <div /*data-aos="fade-left"*/ className="w-full xl:flex hidden lg:mt-0 mt-48 xl:w-auto">
                        {/* <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse" /> */}
                    </div>
                    <div className="blocref w-10/12 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-white bg-grey flex flex-col justify-center" /*data-aos="fade-right"*/ style={{backgroundColor: 'rgba(62, 62, 62, 0.95)'}}>
                        {/* <Link to={this.props.linkTitle}> */}
                        {/* </Link> */}
                        <h2 className="century leading-none text-2xl md:text-4xl">Comparer les meilleures agences SEO à Toulouse</h2>
                        <br/><br/>
                        <table className="w-full century text-sm text-center py-2">
                            <tbody>
                                <tr className="bg-grey headertable font-black h-16 py-2 md:py-0">
                                    <th>Nom de l'agence</th>
                                    <th>Services</th>
                                    <th>Localisation</th>
                                    <th>Adresse</th>
                                    <th>Site internet</th>
                                </tr>
                                <tr className="flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td>LINKWEB ⭐</td>
                                    <td>Référencement SEO<br/>Référencement SEA <br/>Création de site internet <br/>Community Management <br/>Formation SEO </td>
                                    <td>Toulouse</td>
                                    <td>44 rue Bayard</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = '/';
                                            }}>linkweb.fr
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-grey flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td>VELCOME SEO</td>
                                    <td>Référencement SEO <br/>Référencement SEA <br/>Formation SEO</td>
                                    <td>Toulouse</td>
                                    <td>150 Rue Louis Nicolas Vauquelin</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://velcomeseo.fr/';
                                            }}>velcomeseo.fr
                                        </button>
                                    </td>
                                </tr>
                                <tr className="flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td>VALE TUDO</td>
                                    <td>Création de site internet <br/>Référencement SEO</td>
                                    <td>Toulouse</td>
                                    <td>2 rue d’Austerlitz</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://www.valetudo.io/';
                                            }}>valetudo.io
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-grey flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td>YUMENS</td>
                                    <td>Référencement SEO <br/>Veille stratégique <br/>Social Media <br/>Formation SEO</td>
                                    <td>Toulouse</td>
                                    <td>5 rue du Moulin Bayard</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://www.yumens.fr/';
                                            }}>yumens.fr
                                        </button>
                                    </td>
                                </tr>
                                <tr className="flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td>LA MANDRETTE</td>
                                    <td>Référencement SEO <br/>E-Réputation <br/>Formation SEO</td>
                                    <td>Toulouse</td>
                                    <td>272, route de Launaguet</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://www.lamandrette.com/';
                                            }}>lamandrette.com
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-grey flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td>TRANSFONUMÉRIQUE</td>
                                    <td>Référencement SEO <br/>Référencement SEA <br/>Création de site internet</td>
                                    <td>Balma</td>
                                    <td>12 Av. Charles de Gaulle</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://transfonumerique.fr';
                                            }}>transfonumerique.fr
                                        </button>
                                    </td>
                                </tr>
                                <tr className="flex flex-col h-auto md:table-row md:h-16 py-2 md:py-0">
                                    <td>MERIDIGITAL</td>
                                    <td>Référencement SEO <br/>Rédaction Web</td>
                                    <td>Toulouse</td>
                                    <td>19 Rue de la Concorde</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://www.meridigital.com/';
                                            }}>meridigital.com
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <a class="popup__close" href="#x">X</a>
                    </div>
                </div>
            </section>
        );
    }

}

export default ModalAgenceSEO;