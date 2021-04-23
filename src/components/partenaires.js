import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";

class Partenaires extends Component {
    constructor(props) {
    super(props);
    }

    render(){
        return (
            <section className="max-w-6xl flex-wrap md:flex-no-wrap jusitfy-center flex w-full mx-auto px-4 py-2 my-2">
          <div className="w-1/3 md:w-1/6 mb-10" /*data-aos='fade-up'*/>
            <StaticImage 
              src="../images/peugeot.png"
              placeholder="blurred"
              loading="lazy"
              alt="Création site internet Toulouse"
            />
          </div>
          <div className="w-1/3 md:w-1/6 mb-10" /*data-aos='fade-up' data-aos-delay='200'*/>
            <StaticImage 
              src="../images/normandie.png"
              placeholder="blurred"
              loading="lazy"
              alt="Création site internet Toulouse"
            />
          </div>
          <div className="w-1/3 md:w-1/6 mb-10" /*data-aos='fade-up' data-aos-delay='400'*/>
            <StaticImage 
              src="../images/logo-onco.png"
              placeholder="blurred"
              loading="lazy"
              alt="Création site internet Agen"
            />
          </div>
          <div className="w-1/3 md:w-1/6 mb-10 mx-auto block" /*data-aos='fade-up' data-aos-delay='600'*/>
            <StaticImage 
              src="../images/logo_universite-federale.png"
              placeholder="blurred"
              loading="lazy"
              alt="Agence Web Toulouse"
            />
          </div>
          <div className="w-1/3 md:w-1/6 mb-10 mx-auto block" /*data-aos='fade-up' data-aos-delay='800'*/>
            <StaticImage 
              src="../images/logo-sdis47.png"
              placeholder="blurred"
              loading="lazy"
              alt="Agence Web Agen"
            />
          </div>
          <div className="w-1/3 md:w-1/6 mb-10 mx-auto flex justify-center" /*data-aos='fade-up' data-aos-delay='1000'*/>
            <StaticImage 
              className="mx-auto"
              src="../images/logo_cd31.svg"
              placeholder="blurred"
              loading="lazy"
              alt="Réalisations Site Web Agen"
              objectFit="contain"
              height="62"
              objectPosition="center"
              />
          </div>
          <div className="w-1/3 md:w-1/6 mt-4 mb-10 mx-auto block" /*data-aos='fade-up' data-aos-delay='1000'*/>
            <StaticImage 
              className="mx-auto block"
              src="../images/logo-cotes-armor.svg"
              placeholder="blurred"
              loading="lazy"
              alt="Réalisations Site Web Agen"
              />
          </div>
      </section>
            
        )
    }
}

export default Partenaires;