import React, { Component } from "react";
import Slider from "react-slick";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} easing={"ease-in-out"}>
                <div>
                    <h3 className="century capitalize text-2xl tracking-wider pb-6 text-center" /*data-aos="zoom-in"*/>
                        <span className="text-bleu">1.</span>Vos exigences
                    </h3>
                    <p  /*data-aos='fade-left'*/ className="text-justify" style={{ textAlignLast: 'center' }}>Dans le cadre de la création ou du développement de votre structure, vous avez besoin de créer un outil en ligne répondant à des besoins spécifiques : nous élaborons un <strong>webdesign</strong> unique et original dans le respect de votre identité visuelle et de votre ligne de <strong>création graphique</strong>.<br /> <br />L’ergonomie d’un <strong>site internet professionnel</strong> doit être soignée selon les principes de l’UI/UX et du <strong>responsive design</strong>.<br /> <br />Les spécialistes de notre <strong>agence spécialisée dans le Web</strong> développent des fonctionnalités pour une <strong>création de site internet sur mesure</strong>, tant pour l’administrateur que pour les utilisateurs.</p><br /><br />
                </div>
                <div>
                    <h3 className="century capitalize text-2xl tracking-wider pb-6 text-center" /*data-aos="zoom-in"*/>
                        <span className="text-bleu">2.</span>Votre offre
                            </h3>
                    <p  /*data-aos='fade-left'*/ className="text-justify" style={{ textAlignLast: 'center' }}>Vos services, vos prestations, vos produits seront au cœur de l’élaboration de votre projet, auttant sur la partie graphique et ergonomique que fonctionnelle.<br /> L’élaboration d’un cahier des charges détaillé nous permettra de <strong>créer un site web</strong> qui vous correspondra.</p>
                    <p  /*data-aos='fade-left'*/ className="text-justify" style={{ textAlignLast: 'center' }}>Nous prenons en compte votre positionnement, votre charte graphique ainsi que votre <strong>image de marque</strong>, tout en étudiant votre concurrence pour une <strong>création web</strong> qui colle à votre entreprise, que ce soit à Agen, Toulouse, <a href="/creation-site-internet-tonneins/">Tonneins</a>, <a href="/creation-site-internet-villeneuve-sur-lot/">Villeneuve-sur-Lot</a> ou <a href="/creation-site-internet-marmande/">Marmande</a>.</p><br /><br />
                </div>
                <div id="last-item">
                    <h3 className="century capitalize text-2xl tracking-wider pb-6 text-center" /*data-aos="zoom-in"*/>
                        <span className="text-bleu">3.</span>Vos cibles
                    </h3>
                    <p  /*data-aos='fade-left'*/ className="text-justify mb-4" style={{ textAlignLast: 'center' }}>L’analyse de votre clientèle sera le fil rouge de l’élaboration de votre projet digital.<br /><br /> Votre outil doit répondre aux attentes de vos utilisateurs cibles, tant sur l’aspect visuel comme sur la navigation.<br /> C’est le rôle de notre <strong>agence de communication web</strong> de donner lieu à un <strong>site responsive</strong>.<br /><br /> Les informations communiquées seront intégrées dans le but d’informer et de donner envie à vos futurs clients potentiels de travailler avec vous grâce à une <strong>stratégie de communication web créative</strong>.</p><br /><br /><br />
                </div>
            </Slider>
        );
    }

}

export default Carousel;