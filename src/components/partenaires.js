import React from 'react';
import tlse from "../images/logo_universite-federale.png";
import peugeot from "../images/peugeot.png";
import onco from "../images/logo-onco.png";
import sdis from "../images/logo-sdis47.png";
import normand from "../images/normandie.png";
import hg from "../images/logo_cd31.svg";
import cotesarmor from "../images/logo-cotes-armor.svg";

class Partenaires extends React.Component {
    constructor(props) {
    super(props);
    }

    render(){
        return (
            <section className="max-w-6xl flex-wrap md:flex-no-wrap jusitfy-center flex w-full mx-auto px-4 py-2 my-2">
          <div className="w-1/3 md:w-1/6 mb-10" /*data-aos='fade-up'*/>
            <img 
              src={peugeot}
              alt="Création site internet Toulouse"
            />
          </div>
          <div className="w-1/3 md:w-1/6 mb-10" /*data-aos='fade-up' data-aos-delay='200'*/>
            <img 
              src={normand}
              alt="Création site internet Toulouse"
            />
          </div>
          <div className="w-1/3 md:w-1/6 mb-10" /*data-aos='fade-up' data-aos-delay='400'*/>
            <img 
              src={onco}
              alt="Création site internet Agen"
            />
          </div>
          <div className="w-1/3 md:w-1/6 mb-10 mx-auto block" /*data-aos='fade-up' data-aos-delay='600'*/>
            <img 
              src={tlse}
              alt="Agence Web Toulouse"
            />
          </div>
          <div className="w-1/3 md:w-1/6 mb-10 mx-auto block" /*data-aos='fade-up' data-aos-delay='800'*/>
            <img 
              src={sdis}
              alt="Agence Web Agen"
            />
          </div>
          <div className="w-1/3 md:w-1/6 mb-10 mx-auto block" /*data-aos='fade-up' data-aos-delay='1000'*/>
            <img 
              className="mx-auto"
              src={hg}
              alt="Réalisations Site Web Agen"
              width="65px"
              />
          </div>
          <div className="w-1/3 md:w-1/6 mt-4 mb-10 mx-auto block" /*data-aos='fade-up' data-aos-delay='1000'*/>
            <img 
              className="mx-auto block"
              src={cotesarmor}
              alt="Réalisations Site Web Agen"
              />
          </div>
      </section>
            
        )
    }
}

export default Partenaires;