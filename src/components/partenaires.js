import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";

class Partenaires extends Component {
    constructor(props) {
      super(props);
    }

    render(){
        return (
            <section className=" md:flex-col flex-row flex-wrap  bg-bleu justify-space-between items-center flex w-full mx-auto px-8 md:px-48 py-4 my-2">
                <div className="w-full py-0 flex items-center justify-center">
                <h2 /*data-aos='fade-right'*/ className="text-left text-black text-4xl century">
                        <span className="font-bold text-black text-center text-4xl century">Ils font confiance à notre agence web toulousaine</span>
                    </h2>
                </div>
                <div className="w-full md:w-1/4 mt-4 py-0 flex items-center justify-start">
                </div>
                  <div className="w-full md:w-3/4 py-0 flex   flex-nowrap justify-end">
                    <div className="w-1/3 md:w-1/6 my-10" /*data-aos='fade-up'*/>
                      <StaticImage
                        src="../images/peugeot.png"
                        placeholder="blurred"
                        loading="lazy"
                        alt="Création site internet Toulouse"
                      />
                    </div>
                    <div className="w-1/3 md:w-1/6 my-10" /*data-aos='fade-up' data-aos-delay='200'*/>
                      <StaticImage
                        src="../images/normandie.png"
                        placeholder="blurred"
                        loading="lazy"
                        alt="Création site internet Toulouse"
                      />
                    </div>
                    <div className="w-1/3 md:w-1/6 my-10" /*data-aos='fade-up' data-aos-delay='400'*/>
                      <StaticImage
                        src="../images/logo-onco.png"
                        placeholder="blurred"
                        loading="lazy"
                        alt="Création site internet Agen"
                      />
                    </div>
                    <div className="w-1/3 md:w-1/6 my-10 mx-auto block" /*data-aos='fade-up' data-aos-delay='600'*/>
                      <StaticImage
                        src="../images/logo_universite-federale.png"
                        placeholder="blurred"
                        loading="lazy"
                        alt="Agence Web Toulouse"
                      />
                    </div>
                    <div className="w-1/3 md:w-1/6 my-10 mx-auto block" /*data-aos='fade-up' data-aos-delay='800'*/>
                      <StaticImage
                        src="../images/logo-sdis47.png"
                        placeholder="blurred"
                        loading="lazy"
                        alt="Agence Web Agen"
                      />
                    </div>
                    <div className="w-1/3 md:w-1/6 my-10 mx-auto flex justify-center" /*data-aos='fade-up' data-aos-delay='1000'*/>
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
                    <div className="w-1/3 md:w-1/6 mt-12 my-10 mx-auto block" /*data-aos='fade-up' data-aos-delay='1000'*/>
                      <StaticImage
                        className="mx-auto block"
                        src="../images/logo-cotes-armor.svg"
                        placeholder="blurred"
                        loading="lazy"
                        alt="Réalisations Site Web Agen"
                        />
                    </div>
                  </div>
            </section>
            
        )
    }
}

export default Partenaires;