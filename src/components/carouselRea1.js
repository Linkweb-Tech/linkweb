import React, { Component } from "react";
import Slider from "react-slick";

import faivre3 from '../images/vignette-faivre.png';
import csd from '../images/vignette-csd.png';
import sia from '../images/vignette-sia.png';
import sdis from '../images/vignette-sdis.png';
import atpt from '../images/vignette-atpt.png';
import gabriel from '../images/vignette-gabriel-services.png';
import ledil from '../images/vignette-ledilimmo.png';
import aqua from '../images/vignette-aquapensezvous.png';
import cdhg from '../images/vignette-cdhg.png';


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {StaticImage} from "gatsby-plugin-image";
import Tile from "./gallery/tile";

class CarouselRea1 extends Component {

    constructor(props) {
        super(props);
        }

    render() {
        const data = [{
            id: 1,
            name: "SIA Université Toulouse 2",
            image: sia,
            url: "/realisations/sia/",
            Solution:"Création site internet",
            li: [
                "Création d'une plateforme web",
                "Parcours de navigation et expérience utilisateur",
                "Webdesign et ergonomie",
            ]

            
        }, {
            id: 2,
            name: "Atouts pour Tous",
            image: atpt,
            url: "/realisations/atpt/",
            Solution:"Création site internet",
            li: [
                "Création site internet vitrine",
                "Webdesign et ergonomie",
                "Intranet collaboratif et espace membre",
                
            ]
  
        }, {
            id: 3,
            name: "SDIS 47",
            image: sdis,
            url: "/realisations/sdis47/",
            Solution:"Création site internet",
            li: [
                "Création site internet vitrine",
                "Intranet collaboratif et espace membre",
                "Webdesign et ergonomie",
                "Parcours de navigation et expérience utilisateur"
            ]

        }, /*{
            id: 4,
            name: "Cypière Paysages Services",
            image: faivre1,
            url: "https://services.faivre-environnement.com/"
        },*/ 
        {
            id: 5,
            name: "Faivre Environnement",
            image: faivre3,
            url: "/realisations/groupe-faivre-environnement/",
            Solution:"Solution personnalisée",
            li: [
                "Multisite",
                "Référencement Naturel",
                "Web Analyse et maximisation du taux de conversion",
            ]
        }, {
            id: 6,
            name: "Gabriel Services",
            image: gabriel,
            url: "/realisations/gabriel-services/",
            Solution:"Solution personnalisée",
            li: [
                "Création site internet vitrine",
                "Référencement local",
                "Expérience utilisateur (UX & UI design)",
                "Web Analyse et maximisation du taux de conversion"
            ]
        }, /*{
            id: 7,
            name: "Cypière Paysages",
            image: faivre2,
            url: "https://paysages.faivre-environnement.com"
        },*/ {
            id: 8,
            name: "Ledil Immo",
            image: ledil,
            url: "/realisations/ledilimmo/",
            Solution:"Solution personnalisée",
            li: [
                "Développement de site internet catalogue",
                "Plateforme d'échange et espace membre",
                "Référencement Naturel",
                "Web Analyse et maximisation du taux de conversion"
            ]
        }, {
            id: 9,
            name: "CSD Menuiserie",
            image: csd,
            url: "/realisations/csd-menuiserie/",
            Solution:"Solution personnalisée",
            li: [
                "Création site internet vitrine",
                "Référencement local",
                "Web Analyse et maximisation du taux de conversion",
            ]
        },
            {
                id: 10,
                name: "Aqua Pensez-Vous",
                image: aqua,
                url: "/realisations/aquapensezvous/",
                Solution:"Solution personnalisée",
                li: [
                    "Création de site internet vitrine et catalogue",
                    "Fiches produits sur-mesure",
                    "Référencement local et national",
                    "Web Analyse et maximisation du taux de conversion"
                ]
            },
            {
                id: 11,
                name: "Conseil Départemental de Haute-Garonne",
                image: cdhg,
                url: "/realisations/conseil-departemental-haute-garonne/",
                Solution:"Création site internet",
                li: [
                "Refonte de site internet",
                "Webdesign et ergonomie",
                "Parcours de navigation et expérience utilisateur",
                "Maintenance de site internet"]
            }
    ];
        const settings = {
            dots            : true,
            infinite        : true,
            autoplay        : true,
            speed           : 500,
            slidesPerRow:  1,
            slidesToShow    : 1,
            slidesToScroll  : 1,
            centerMode: true,
            easing          : "ease-in-out",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        }

        return (
            <Slider {...settings}>
                {data.map((data) => {
                    return <div className="slick-slideragen flex flex-col xl:flex-row">
                                <img
                                            src={data.image}
                                            placeholder="blurred"
                                            loading="lazy"
                                            alt={data.name}
                                />
                                <div className="bg-gris century flex flex-col items-center px-12">
                                    <br/>
                                    <h4 className="font-bold text-xl">{data.name}</h4>
                                    <hr className="border-bleu w-1/4 my-2"/>                        
                                    <span className="font-bold text-lg">{data.solution}</span>
                                    <br/>
                                    <ul className="list-disc text-sm">
                                        {
                                            data.li.map((item)=>{
                                            return <li>{item}</li>
                                            })
                                        }
                                        {/* <li>{data.li1}</li>
                                        <li>{data.li2}</li>
                                        <li>{data.li3}</li>
                                        <li>{data.li4}</li> */}
                                    </ul>
                                    <button
                                            className="link font-light mx-auto font-bold text-black hover:text-bleu flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-sm rounded-huge px-8 py-4 "
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = `https://linkweb.fr${data.url}`;
                                            }}
                                        >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792">
                                        <path
                                            d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                                    </svg> Voir le projet</button>
                                </div>
                                {/*<Tile data={data} key={data.id} name={data.name} url={data.url}/>*/}
                            </div>
                    })}

            </Slider>
        );
    }

}

export default CarouselRea1;