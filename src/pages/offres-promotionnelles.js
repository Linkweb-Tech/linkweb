import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";

import RoundButtonAccueil from "../components/roundButtonAccueil";
import RoundButtonAccueilMail from "../components/roundButtonAccueilMail";
import RoundButton from "../components/roundButton";
import RoundButtonPages from "../components/roundButtonPages";
import RoundButtonPagesMail from "../components/roundButtonPagesMail";
import SEO from "../components/seo";
import ContactLanding from '../components/contactLanding';
import "../scss/blochover.scss";
import "../scss/carousel.scss";
import stars from '../images/stars.png';
import arriereplan from "../images/anniversaire-linkweb.jpg";
import ContactEmail from "../components/contactEmail";
import ContactBlackFriday from "../components/contactBlackFriday";
import ludikstyle from "../images/ludikstyle-avis.png";
import tgcm from "../images/tgcm-avis.png";
import contis from "../images/contis-avis.png";
import scroll from "../images/motiontest.svg";



class OffresPromos extends Component {

    constructor(props) {
        super(props);

        this.metiers = ['magasin', 'créateur', 'styliste', 'maroquinier', 'modéliste'];
        this.state = {
            metier: this.metiers[0]
        };
    }

    componentDidMount() {
        let i = 0;
        this.metierInterval = setInterval(() => {
            i++;
            if (this.metiers[i] === undefined) {
                i = 0;
            }
            this.setState({ metier: this.metiers[i] });
        }, 1200);
    }

    componentWillUnmount() {
        clearInterval(this.metierInterval);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Offres promotionnelles - Découvrez les offres en cours - Linkweb"
                    description="Retrouvez les offres promotionnelles en cours de l'agence Linkweb, l'occasion idéale pour propulser votre projet digital."
                    url="https://linkweb.fr/offres-promotionnelles/"
                    nom="Offres promotionnelles"
                    slug="offres-promotionnelles/"
                />
                {/* <PageTransition
                    defaultStyle={{
                        transition: 'left 200ms cubic-bezier(0.47, 0, 0.75, 0.72)',
                        transitionDuration: '0.5s',
                        transitionDelay: '0.1s',
                        //left: '100%',
                        position: 'relative',
                        width: '100%',
                        zIndex: 20,
                        minHeight: '100vh',
                    }}
                    transitionStyles={{
                        entering: { left: '-100%' },
                        entered: { left: '0' },
                        exiting: { left: '-100%' },

                    }}
                    transitionTime={200}
                > */}

                {/* <section className="w-full flex items-center justify-start w-full mx-auto pb-0 my-0 md:my-24 lg:my-24 xl:my-24 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{background: 'url(' + arriereplan + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top', minHeight:'300px' }}>
                </section> */}
                <section className="flex bg-offres items-center w-full mx-auto pb-0 mt-40 px-4 py-6 bg-black flex flex-col justify-center items-center">
                    <div className="max-w-6xl mx-auto lg:mx-56 pt-2 lg:w-2/5 w-full flex-col items-end">
                        <div className="mt-12 -mb-24 w-full flex flex-col items-center lg:items-start">
                            <div className="w-full  text-3xl text-center font-bold text-white century">4.6/5</div>
                            <p className="w-full  text-sm text-center font-bold text-white century -mt-2">Avis Google</p>
                            <div className="w-full -mt-8">
                                <svg className="mx-auto block" width="100px" viewBox="0 0 100 125">
                                    <path fill="#FFFFFF" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                    <path fill="#FFFFFF" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                    <path fill="#FFFFFF" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                    <path fill="#FFFFFF" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                    <path fill="#FFFFFF" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z   M89.8,54.7c0.1-0.1,0.4,0,0.4,0l4.2,2.2l-0.8-4.7c0-0.2,0-0.3,0.1-0.4l3.4-3.3l-4.7-0.7c-0.2,0-0.3-0.1-0.4-0.3l-2.1-4.3L89.8,54.7  z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full lg:w-full flex justify-center lg:justify-center">
                            <h1 className="text-4xl md:text-6xl my-10 font-bold text-center text-white century leading-none">Les offres du moment</h1>
                        </div>
                        <br />
                        <h2 className="flex full lg:w-full text-white justify-center lg:justify-center mx-auto lg:mx-0 text-xl  century text-center p-1 -mt-12">Découvrez les offres Linkweb en cours.</h2>
                        {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}
                        <div className="w-full lg:w-full flex flex-col lg:flex-row justify-center pb-24 lg:justify-center mx-auto" style={{ maxWidth: '460px' }}>
                            <RoundButtonPages url="tel:0533950030" text="05 33 95 00 30" />
                            <RoundButtonPagesMail url="/contact-agence-web-toulouse/" text="Demander un devis" />
                        </div>
                    </div>
                    <div className="w-full flex items-end justify-center mx-auto block pb-16">
                        <img src={scroll} alt="Scroll" width="60px" />
                    </div>
                </section>
                <section id="offres" className="w-full flex flex-col lg:flex-row text-black px-4 my-24">
                    <div className="w-full lg:w-1/4 flex flex-col justify-center bg-white border-2 border-bleu items-center px-6 py-16 my-4 mx-0 md:mx-4">
                        <span className="raleway text-center font-bold" style={{fontSize:'35px'}}>Découverte</span>
                        <h3 className="raleway text-6xl"><span className="font-bold raleway">99€<span className="text-2xl">/mois</span> <span style={{fontSize:'16px'}}>(*)</span></span></h3>
                        <br/>
                        <p className="century text-center max-w-1/3 text-lg px-6" style={{minHeight: '100px'}}>Développez votre présence en ligne et découvrez ce que Linkweb peut apporter à votre entreprise.</p>
                        <RoundButton url="#detail-offres" color="black" text="Découvrir l'offre" />
                    </div>
                    <div className="w-full lg:w-1/4 flex flex-col justify-center bg-white border-2 border-bleu items-center px-12 py-16 my-4 mx-0 md:mx-4">
                        <span className="raleway text-center font-bold" style={{fontSize:'35px'}}>Essentiels</span>
                        <h3 className="century text-6xl "><span className="font-bold raleway">159€<span className="text-2xl">/mois</span> <span style={{fontSize:'16px'}}>(*)</span></span></h3>
                        <br/>
                        <p className="century text-center max-w-1/3 text-lg" style={{minHeight: '100px'}}>Boostez la visibilité de votre entreprise sur le Web avec la mise en place d'une stratégie web efficace.</p>
                        <RoundButton url="#detail-offres" color="black" text="Découvrir l'offre" />
                    </div>
                    <div className="w-full lg:w-1/4 flex flex-col justify-center bg-white border-2 border-bleu items-center px-12 py-16 my-4 mx-0 md:mx-4">
                        <span className="raleway text-center font-bold" style={{fontSize:'35px'}}>Confort</span>
                        <h3 className="century text-6xl"><span className="font-bold raleway">449€<span className="text-2xl">/mois</span> <span style={{fontSize:'16px'}}>(*)</span></span></h3>
                        <br/>
                        <p className="century text-center max-w-1/3 text-lg" style={{minHeight: '100px'}}>Maximisez votre impact en ligne avec une stratégie web conçue pour doper votre présence sur le Web.</p>
                        <RoundButton url="#detail-offres" color="black" text="Découvrir l'offre" />
                    </div>
                    <div className="w-full lg:w-1/4 flex flex-col justify-center bg-white border-2 border-bleu items-center px-12 py-16 my-4 mx-0 md:mx-4" >
                        <span className="raleway text-center font-bold" style={{fontSize:'35px'}}>Personnalisé</span>
                        <h3 className="century text-6xl"><span className="font-bold raleway">Devis  <span style={{fontSize:'10px'}}>(*)</span></span></h3>
                        <br/>
                        <p className="century text-center max-w-1/3 text-lg" style={{minHeight: '100px'}}>Vous souhaitez mettre en place un projet sur-mesure ? Contactez-nous pour définir vos besoins.</p>
                        <RoundButton url="#detail-offres" color="black" text="Découvrir l'offre" />
                    </div>
                </section>
                
                    <div id="detail-offres" className='offres rg-container my-12'>
                    <section className="max-w-4xl w-full mx-auto px-4 py-6 mt-12 my-0">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                            Découvrez nos offres en détail
                        </h2>
                        <br/>
                        <hr className="black" style={{borderBottom:'1px solid #000000', width:'30%'}}></hr>
                    </section>
                    <table className='rg-table my-12'>
                        <thead>
                            <tr>
                                <th className='text'></th>
                                <th className='text raleway'>Découverte<br/><span className="text-xl md:text-3xl">99€</span>/mois <span style={{fontSize:'16px'}}>(*)</span><br/><a href="#devis" className={`font-light roundedButton bg-black hover:bg-white text-white hover:text-black flex justify-center century items-center text-center text-sm md:text-md rounded-huge px-4 py-2 mx-8 my-2 w-full lg:w-2/3 mx-auto`}><span className="font-bold">Sélectionner</span></a></th>
                                <th className='text raleway'>Essentiels<br/><span className="text-xl md:text-3xl">159€</span>/mois <span style={{fontSize:'16px'}}>(*)</span><br/><a href="#devis" className={`font-light roundedButton bg-black hover:bg-white text-white hover:text-black flex justify-center century items-center text-center text-sm md:text-md rounded-huge px-4 py-2 mx-8 my-2 w-full lg:w-2/3 mx-auto`}><span className="font-bold">Sélectionner</span></a></th>
                                <th className='text raleway'>Confort<br/><span className="text-xl md:text-3xl">449€</span>/mois <span style={{fontSize:'16px'}}>(*)</span><br/><a href="#devis" className={`font-light roundedButton bg-black hover:bg-white text-white hover:text-black flex justify-center century items-center text-center text-sm md:text-md rounded-huge px-4 py-2 mx-8 my-2 w-full lg:w-2/3 mx-auto`}><span className="font-bold">Sélectionner</span></a></th>
                                <th className='text raleway'>Personnalisé<br/><span className="text-xl md:text-3xl">Devis</span><br/><a href="#devis" className={`font-light roundedButton bg-black hover:bg-white text-white hover:text-black flex justify-center century items-center text-center text-sm md:text-md rounded-huge px-4 py-2 mx-8 my-2 w-full lg:w-2/3 mx-auto`}><span className="font-bold">Sélectionner</span></a></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                <tr className='' style={{borderBottom:'1px solid rgb(193 193 193 / 19%)'}}>
                                    <td className='text font-bold' data-title=''>Compris dans l'offre</td>
                                    <td className=' ' data-title='Découverte'></td>
                                    <td className=' ' data-title='Essentiels'></td>
                                    <td className=' ' data-title='Confort'></td>
                                    <td className=' ' data-title='Personnalisé'></td>
                                </tr>
                            

                                <tr class=''>
                                    <td className='text ' data-title=''>Site internet vitrine</td>
                                    <td className=' ' data-title='Découverte'>✓</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'><svg viewBox="0 0 128 160"width="20px" className="ml-auto md:mx-auto block"><path d="M106.23722,50.82092a5.7549,5.7549,0,0,1-5.74373-4.91758,36.82369,36.82369,0,0,0-72.97836-.06341,5.73258,5.73258,0,0,1-5.6718,4.98049h0A6.40355,6.40355,0,0,0,15.43975,57.224V76.6126a6.40355,6.40355,0,0,0,6.40355,6.40355h6.93718a5.86992,5.86992,0,0,0,5.86992-5.86992V51.26594c0-16.10607,12.78961-29.546,28.8938-29.79164A29.382,29.382,0,0,1,93.3496,50.82042v26.3258a5.86992,5.86992,0,0,0,5.86992,5.86992h.20154c-.81134,6.47963-4.79686,18.7438-23.02147,22.27732a1.265,1.265,0,0,1-1.50463-1.23934h0a1.26035,1.26035,0,0,0-1.26035-1.26035H58.70821a5.6031,5.6031,0,0,0-5.6031,5.6031h0A5.6031,5.6031,0,0,0,58.70821,114H73.63461a1.26035,1.26035,0,0,0,1.26035-1.26035v-.70432a1.26557,1.26557,0,0,1,1.06759-1.24423c15.40884-2.542,22.49441-10.57194,25.73686-17.11878a31.87109,31.87109,0,0,0,3.06772-10.65617h1.38957a6.40355,6.40355,0,0,0,6.40355-6.40355V57.224A6.40355,6.40355,0,0,0,106.23722,50.82092Z"/></svg></td>
                                </tr>
                            

                                <tr className=''>
                                    <td className='text ' data-title=''>Hébergement</td>
                                    <td className=' ' data-title='Découverte'>✓</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'>✓</td>
                                </tr>
                            

                                <tr className=''>
                                    <td className='text ' data-title=''>Protocole HTTPS</td>
                                    <td className=' ' data-title='Découverte'>✓</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'>✓</td>
                                </tr>
                            

                                <tr className=''>
                                    <td className='text ' data-title=''>Responsive Design</td>
                                    <td className=' ' data-title='Découverte'>✓</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'>✓</td>
                                </tr>
                            

                                <tr className=''>
                                    <td className='text ' data-title=''>Formulaire de contact</td>
                                    <td className=' ' data-title='Découverte'>✓</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'>✓</td>
                                </tr>
                            

                                <tr className=''>
                                    <td className='text ' data-title=''>Nom de domaine personnalisé</td>
                                    <td className=' ' data-title='Découverte'>✓</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'>✓</td>
                                </tr>
                            

                                <tr className=''>
                                    <td className='text ' data-title=''>Adresse mail professionnelle</td>
                                    <td className=' ' data-title='Découverte'>✓</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'>✓</td>
                                </tr>
                            

                                <tr className=''>
                                    <td className='text ' data-title=''>Optimisation SEO</td>
                                    <td className=' ' data-title='Découverte'>1 mot-clé</td>
                                    <td className=' ' data-title='Essentiels'>3 mots-clés</td>
                                    <td className=' ' data-title='Confort'>5 mots-clés</td>
                                    <td className=' ' data-title='Personnalisé'><svg viewBox="0 0 128 160"width="20px" className="ml-auto md:mx-auto block"><path d="M106.23722,50.82092a5.7549,5.7549,0,0,1-5.74373-4.91758,36.82369,36.82369,0,0,0-72.97836-.06341,5.73258,5.73258,0,0,1-5.6718,4.98049h0A6.40355,6.40355,0,0,0,15.43975,57.224V76.6126a6.40355,6.40355,0,0,0,6.40355,6.40355h6.93718a5.86992,5.86992,0,0,0,5.86992-5.86992V51.26594c0-16.10607,12.78961-29.546,28.8938-29.79164A29.382,29.382,0,0,1,93.3496,50.82042v26.3258a5.86992,5.86992,0,0,0,5.86992,5.86992h.20154c-.81134,6.47963-4.79686,18.7438-23.02147,22.27732a1.265,1.265,0,0,1-1.50463-1.23934h0a1.26035,1.26035,0,0,0-1.26035-1.26035H58.70821a5.6031,5.6031,0,0,0-5.6031,5.6031h0A5.6031,5.6031,0,0,0,58.70821,114H73.63461a1.26035,1.26035,0,0,0,1.26035-1.26035v-.70432a1.26557,1.26557,0,0,1,1.06759-1.24423c15.40884-2.542,22.49441-10.57194,25.73686-17.11878a31.87109,31.87109,0,0,0,3.06772-10.65617h1.38957a6.40355,6.40355,0,0,0,6.40355-6.40355V57.224A6.40355,6.40355,0,0,0,106.23722,50.82092Z"/></svg></td>
                                </tr>
                            

                                <tr className=''>
                                    <td className='text ' data-title=''>Création réseaux sociaux</td>
                                    <td className=' ' data-title='Découverte'>✓</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'>✓</td>
                                </tr>
                            

                                <tr className=''>
                                    <td className='text ' data-title=''>Stratégie Social Media</td>
                                    <td className=' ' data-title='Découverte'>—</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'><svg viewBox="0 0 128 160"width="20px" className="ml-auto md:mx-auto block"><path d="M106.23722,50.82092a5.7549,5.7549,0,0,1-5.74373-4.91758,36.82369,36.82369,0,0,0-72.97836-.06341,5.73258,5.73258,0,0,1-5.6718,4.98049h0A6.40355,6.40355,0,0,0,15.43975,57.224V76.6126a6.40355,6.40355,0,0,0,6.40355,6.40355h6.93718a5.86992,5.86992,0,0,0,5.86992-5.86992V51.26594c0-16.10607,12.78961-29.546,28.8938-29.79164A29.382,29.382,0,0,1,93.3496,50.82042v26.3258a5.86992,5.86992,0,0,0,5.86992,5.86992h.20154c-.81134,6.47963-4.79686,18.7438-23.02147,22.27732a1.265,1.265,0,0,1-1.50463-1.23934h0a1.26035,1.26035,0,0,0-1.26035-1.26035H58.70821a5.6031,5.6031,0,0,0-5.6031,5.6031h0A5.6031,5.6031,0,0,0,58.70821,114H73.63461a1.26035,1.26035,0,0,0,1.26035-1.26035v-.70432a1.26557,1.26557,0,0,1,1.06759-1.24423c15.40884-2.542,22.49441-10.57194,25.73686-17.11878a31.87109,31.87109,0,0,0,3.06772-10.65617h1.38957a6.40355,6.40355,0,0,0,6.40355-6.40355V57.224A6.40355,6.40355,0,0,0,106.23722,50.82092Z"/></svg></td>
                                </tr>
                            

                                <tr className=''>
                                    <td className='text ' data-title=''>Mise à jour réseaux sociaux</td>
                                    <td className=' ' data-title='Découverte'>—</td>
                                    <td className=' ' data-title='Essentiels'>—</td>
                                    <td className=' ' data-title='Confort'>1 post/semaine</td>
                                    <td className=' ' data-title='Personnalisé'><svg viewBox="0 0 128 160"width="20px" className="ml-auto md:mx-auto block"><path d="M106.23722,50.82092a5.7549,5.7549,0,0,1-5.74373-4.91758,36.82369,36.82369,0,0,0-72.97836-.06341,5.73258,5.73258,0,0,1-5.6718,4.98049h0A6.40355,6.40355,0,0,0,15.43975,57.224V76.6126a6.40355,6.40355,0,0,0,6.40355,6.40355h6.93718a5.86992,5.86992,0,0,0,5.86992-5.86992V51.26594c0-16.10607,12.78961-29.546,28.8938-29.79164A29.382,29.382,0,0,1,93.3496,50.82042v26.3258a5.86992,5.86992,0,0,0,5.86992,5.86992h.20154c-.81134,6.47963-4.79686,18.7438-23.02147,22.27732a1.265,1.265,0,0,1-1.50463-1.23934h0a1.26035,1.26035,0,0,0-1.26035-1.26035H58.70821a5.6031,5.6031,0,0,0-5.6031,5.6031h0A5.6031,5.6031,0,0,0,58.70821,114H73.63461a1.26035,1.26035,0,0,0,1.26035-1.26035v-.70432a1.26557,1.26557,0,0,1,1.06759-1.24423c15.40884-2.542,22.49441-10.57194,25.73686-17.11878a31.87109,31.87109,0,0,0,3.06772-10.65617h1.38957a6.40355,6.40355,0,0,0,6.40355-6.40355V57.224A6.40355,6.40355,0,0,0,106.23722,50.82092Z"/></svg></td>
                                </tr>
                            

                                <tr className=''>
                                    <td className='text ' data-title=''>Création Google My Business</td>
                                    <td className=' ' data-title='Découverte'>—</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'>✓</td>
                                </tr>
                            

                                <tr className=''>
                                    <td className='text ' data-title=''>Mise à jour Google My Business</td>
                                    <td className=' ' data-title='Découverte'>—</td>
                                    <td className=' ' data-title='Essentiels'>—</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'><svg viewBox="0 0 128 160"width="20px" className="ml-auto md:mx-auto block"><path d="M106.23722,50.82092a5.7549,5.7549,0,0,1-5.74373-4.91758,36.82369,36.82369,0,0,0-72.97836-.06341,5.73258,5.73258,0,0,1-5.6718,4.98049h0A6.40355,6.40355,0,0,0,15.43975,57.224V76.6126a6.40355,6.40355,0,0,0,6.40355,6.40355h6.93718a5.86992,5.86992,0,0,0,5.86992-5.86992V51.26594c0-16.10607,12.78961-29.546,28.8938-29.79164A29.382,29.382,0,0,1,93.3496,50.82042v26.3258a5.86992,5.86992,0,0,0,5.86992,5.86992h.20154c-.81134,6.47963-4.79686,18.7438-23.02147,22.27732a1.265,1.265,0,0,1-1.50463-1.23934h0a1.26035,1.26035,0,0,0-1.26035-1.26035H58.70821a5.6031,5.6031,0,0,0-5.6031,5.6031h0A5.6031,5.6031,0,0,0,58.70821,114H73.63461a1.26035,1.26035,0,0,0,1.26035-1.26035v-.70432a1.26557,1.26557,0,0,1,1.06759-1.24423c15.40884-2.542,22.49441-10.57194,25.73686-17.11878a31.87109,31.87109,0,0,0,3.06772-10.65617h1.38957a6.40355,6.40355,0,0,0,6.40355-6.40355V57.224A6.40355,6.40355,0,0,0,106.23722,50.82092Z"/></svg></td>
                                </tr>
                            

                                <tr className='' style={{borderBottom:'1px solid rgb(193 193 193 / 19%)'}}>
                                    <td className='text font-bold' data-title=''>Rapports</td>
                                    <td className=' ' data-title='Découverte'></td>
                                    <td className=' ' data-title='Essentiels'></td>
                                    <td className=' ' data-title='Confort'></td>
                                    <td className=' ' data-title='Personnalisé'></td>
                                </tr>
                            

                                <tr class=''>
                                    <td className='text ' data-title=''>Configuration Google</td>
                                    <td className=' ' data-title='Découverte'>✓</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'>✓</td>
                                </tr>
                            

                                <tr class=''>
                                    <td className='text ' data-title=''>Suivi de performances</td>
                                    <td className=' ' data-title='Découverte'>—</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'>✓</td>
                                </tr>
                            

                                <tr class=''>
                                    <td className='text ' data-title=''>Rapport téléphonique</td>
                                    <td className=' ' data-title='Découverte'>—</td>
                                    <td className=' ' data-title='Essentiels'>Trimestriel</td>
                                    <td className=' ' data-title='Confort'>Mensuel</td>
                                    <td className=' ' data-title='Personnalisé'><svg viewBox="0 0 128 160"width="20px" className="ml-auto md:mx-auto block"><path d="M106.23722,50.82092a5.7549,5.7549,0,0,1-5.74373-4.91758,36.82369,36.82369,0,0,0-72.97836-.06341,5.73258,5.73258,0,0,1-5.6718,4.98049h0A6.40355,6.40355,0,0,0,15.43975,57.224V76.6126a6.40355,6.40355,0,0,0,6.40355,6.40355h6.93718a5.86992,5.86992,0,0,0,5.86992-5.86992V51.26594c0-16.10607,12.78961-29.546,28.8938-29.79164A29.382,29.382,0,0,1,93.3496,50.82042v26.3258a5.86992,5.86992,0,0,0,5.86992,5.86992h.20154c-.81134,6.47963-4.79686,18.7438-23.02147,22.27732a1.265,1.265,0,0,1-1.50463-1.23934h0a1.26035,1.26035,0,0,0-1.26035-1.26035H58.70821a5.6031,5.6031,0,0,0-5.6031,5.6031h0A5.6031,5.6031,0,0,0,58.70821,114H73.63461a1.26035,1.26035,0,0,0,1.26035-1.26035v-.70432a1.26557,1.26557,0,0,1,1.06759-1.24423c15.40884-2.542,22.49441-10.57194,25.73686-17.11878a31.87109,31.87109,0,0,0,3.06772-10.65617h1.38957a6.40355,6.40355,0,0,0,6.40355-6.40355V57.224A6.40355,6.40355,0,0,0,106.23722,50.82092Z"/></svg></td>
                                </tr>
                            

                                <tr class='' style={{borderBottom:'1px solid rgb(193 193 193 / 19%)'}}>
                                    <td className='text font-bold' data-title=''>Support</td>
                                    <td className=' ' data-title='Découverte'></td>
                                    <td className=' ' data-title='Essentiels'></td>
                                    <td className=' ' data-title='Confort'></td>
                                    <td className=' ' data-title='Personnalisé'></td>
                                </tr>
                            
                                <tr className=''>
                                    <td className='text ' data-title=''>Gestion</td>
                                    <td className=' ' data-title='Découverte'>✓</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'>✓</td>
                                </tr>


                                <tr className=''>
                                    <td className='text ' data-title=''>Maintenance</td>
                                    <td className=' ' data-title='Découverte'>✓</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'>✓</td>
                                </tr>
                            

                                <tr class=''>
                                    <td className='text ' data-title=''>Support technique</td>
                                    <td className=' ' data-title='Découverte'>✓</td>
                                    <td className=' ' data-title='Essentiels'>✓</td>
                                    <td className=' ' data-title='Confort'>✓</td>
                                    <td className=' ' data-title='Personnalisé'>✓</td>
                                </tr>
                            

                                <tr className=''>
                                    <td className='text ' data-title=''></td>
                                    <td className=' ' data-title='Découverte'><a href="#devis" className={`font-light roundedButton bg-black hover:bg-white text-white hover:text-black flex justify-center century items-center text-center text-sm md:text-md rounded-huge px-4 py-2 my-2 w-full lg:w-2/3 mx-auto`}><span className="font-bold">Sélectionner</span></a></td>
                                    <td className=' ' data-title='Essentiels'><a href="#devis" className={`font-light roundedButton bg-black hover:bg-white text-white hover:text-black flex justify-center century items-center text-center text-sm md:text-md rounded-huge px-4 py-2 my-2 w-full lg:w-2/3 mx-auto`}><span className="font-bold">Sélectionner</span></a></td>
                                    <td className=' ' data-title='Confort'><a href="#devis" className={`font-light roundedButton bg-black hover:bg-white text-white hover:text-black flex justify-center century items-center text-center text-sm md:text-md rounded-huge px-4 py-2 my-2 w-full lg:w-2/3 mx-auto`}><span className="font-bold">Sélectionner</span></a></td>
                                    <td className=' ' data-title='Personnalisé'><a href="#devis" className={`font-light roundedButton bg-black hover:bg-white text-white hover:text-black flex justify-center century items-center text-center text-sm md:text-md rounded-huge px-4 py-2 my-2 w-full lg:w-2/3 mx-auto`}><span className="font-bold">Sélectionner</span></a></td>
                                </tr>
                            
                        </tbody>
                    </table>
                    <section className="w-full flex flex-col px-4 lg:px-48 items-center lg:justify-start lg:items-start century mt-12 mb-8 justify-center" style={{fontSize:'10px'}}>
                        (*) Avec un engagement de 2 ans au minimum.<br/>
                    </section>
                </div>
                <section id="devis" className="w-full flex-col lg:flex-row flex px-4 xl:px-8">
                        <div className="w-full lg:w-1/2 flex justify-center items-center my-12 lg:mb-0 bg-bleu text-black py-8 shadow-2xl lg:mt-24 xl:mt-0 flex flex-col justify-center mx-auto lg:mx-12 xl:mx-auto" style={{height:'fit-content', background: '#000000'}}>
                            <h2 className="flex justify-center text-3xl lg:text-4xl century text-center text-white"><span className="font-bold">Parlez-nous de votre projet !</span></h2>
                            <br />
                            <ContactBlackFriday origin="Black Friday" />
                        </div>
                        <div className="w-full lg:w-1/2 century text-xl flex flex-col items-center justify-center text-center">
                            <div className="my-4 flex flex-row items-center justify-center">
                                <svg width="50px" className="mx-auto block px-2" viewBox="0 0 95 118.75" fill="#37cfee"><path d="M93.629,17.681,78.381,2.433a1.27,1.27,0,0,0-.9-.371H28.806A1.266,1.266,0,0,0,27.54,3.329v7.327L10.8,14.8a1.267,1.267,0,0,0-.925,1.534l1.517,6.127-9.8,6.189A1.266,1.266,0,0,0,1.2,30.4L21.188,62.047,28.6,91.975a1.268,1.268,0,0,0,1.228.963,1.288,1.288,0,0,0,.306-.038l23.641-5.852H92.733A1.266,1.266,0,0,0,94,85.782v-67.2A1.266,1.266,0,0,0,93.629,17.681ZM78.752,6.387,89.676,17.311H78.752ZM27.54,13.266v63.9l-14.9-60.21ZM4.014,30.116l8.016-5.064,7.227,29.2ZM30.751,90.137l-.765-3.089H43.229Zm-.678-5.622V4.6H76.219V18.577a1.266,1.266,0,0,0,1.266,1.267H91.467V84.515ZM36.41,21.353a1.266,1.266,0,0,1,1.266-1.267H59.612a1.267,1.267,0,1,1,0,2.533H37.676A1.266,1.266,0,0,1,36.41,21.353Zm0,6.039a1.266,1.266,0,0,1,1.266-1.266h27.81a1.267,1.267,0,1,1,0,2.533H37.676A1.266,1.266,0,0,1,36.41,27.392Zm48.72,9.515a1.267,1.267,0,0,1-1.267,1.267H49.928a1.267,1.267,0,1,1,0-2.533H83.863A1.266,1.266,0,0,1,85.13,36.907Zm-48.72,0a1.266,1.266,0,0,1,1.266-1.266h8.015a1.267,1.267,0,0,1,0,2.533H37.676A1.266,1.266,0,0,1,36.41,36.907Zm0,6.814a1.266,1.266,0,0,1,1.266-1.267H62.541a1.267,1.267,0,0,1,0,2.533H37.676A1.266,1.266,0,0,1,36.41,43.721Zm48.72,0a1.266,1.266,0,0,1-1.267,1.266H66.778a1.267,1.267,0,1,1,0-2.533H83.863A1.267,1.267,0,0,1,85.13,43.721Zm0,6.813A1.267,1.267,0,0,1,83.863,51.8H37.676a1.267,1.267,0,0,1,0-2.533H83.863A1.266,1.266,0,0,1,85.13,50.534Zm0,6.814a1.266,1.266,0,0,1-1.267,1.266H58.8a1.267,1.267,0,0,1,0-2.533H83.863A1.267,1.267,0,0,1,85.13,57.348Zm-48.72,0a1.266,1.266,0,0,1,1.266-1.267H54.559a1.267,1.267,0,1,1,0,2.533H37.676A1.266,1.266,0,0,1,36.41,57.348Zm30.3,6.813a1.267,1.267,0,0,1-1.267,1.267H37.676a1.267,1.267,0,0,1,0-2.533H65.44A1.266,1.266,0,0,1,66.707,64.161Zm18.423,0a1.267,1.267,0,0,1-1.267,1.267H69.678a1.267,1.267,0,1,1,0-2.533H83.863A1.266,1.266,0,0,1,85.13,64.161Z"/></svg>
                                <h3 className="font-bold px-2 text-black">Devis gratuit et détaillé</h3>
                            </div>
                            <div className="my-4 flex flex-row items-center justify-center">
                                <svg width="50px" className="mx-auto block px-2" viewBox="0 0 95 118.75" fill="#37cfee"><path d="M53.584,74.1H41.416a3.2,3.2,0,0,0-3.195,3.2v1.814a3.2,3.2,0,0,0,2.753,3.161,3.29,3.29,0,0,0-.031.423c0,4.624,3.3,7.043,6.557,7.043s6.557-2.419,6.557-7.043a3.29,3.29,0,0,0-.031-.423,3.2,3.2,0,0,0,2.753-3.161V77.292A3.2,3.2,0,0,0,53.584,74.1ZM47.5,87.554c-2.179,0-4.377-1.5-4.377-4.864A.991.991,0,0,1,43.2,82.3h8.6a.991.991,0,0,1,.079.389C51.877,86.05,49.679,87.554,47.5,87.554Zm7.1-8.448a1.016,1.016,0,0,1-1.015,1.015H41.416A1.016,1.016,0,0,1,40.4,79.106V77.292a1.017,1.017,0,0,1,1.015-1.016H53.584A1.017,1.017,0,0,1,54.6,77.292Zm7.07-50.982-2.316-.334a12.356,12.356,0,0,0-.979-2.252L59.7,23.762a1.089,1.089,0,0,0-.1-1.423l-3.114-3.114a1.09,1.09,0,0,0-1.423-.1l-1.875,1.4a12.359,12.359,0,0,0-2.284-.9l-.316-2.194a1.091,1.091,0,0,0-1.079-.935h-4.4a1.091,1.091,0,0,0-1.079.935l-.333,2.316a12.3,12.3,0,0,0-2.253.979L39.664,19.4a1.09,1.09,0,0,0-1.423.1l-3.114,3.115a1.089,1.089,0,0,0-.1,1.423l1.4,1.875a12.258,12.258,0,0,0-.9,2.284l-2.2.316a1.09,1.09,0,0,0-.934,1.079v4.4a1.089,1.089,0,0,0,.934,1.078l2.316.334a12.4,12.4,0,0,0,.979,2.253L35.3,39.433a1.09,1.09,0,0,0,.1,1.424l3.114,3.114a1.09,1.09,0,0,0,1.423.1l1.875-1.4a12.328,12.328,0,0,0,2.284.9l.316,2.2a1.091,1.091,0,0,0,1.079.934h4.4a1.091,1.091,0,0,0,1.079-.934l.333-2.316a12.4,12.4,0,0,0,2.253-.979L55.336,43.8a1.089,1.089,0,0,0,1.423-.1l3.114-3.114a1.089,1.089,0,0,0,.1-1.423l-1.4-1.875a12.313,12.313,0,0,0,.9-2.284l2.2-.317a1.089,1.089,0,0,0,.934-1.078V29.2A1.09,1.09,0,0,0,61.669,28.124Zm-1.245,4.539-1.984.286a1.088,1.088,0,0,0-.909.846,10.208,10.208,0,0,1-1.19,3.025,1.09,1.09,0,0,0,.065,1.208l1.258,1.682-1.779,1.779-1.6-1.2a1.089,1.089,0,0,0-1.242-.045,10.214,10.214,0,0,1-2.98,1.3,1.09,1.09,0,0,0-.808.9l-.3,2.077H46.435l-.286-1.983a1.09,1.09,0,0,0-.846-.909,10.2,10.2,0,0,1-3.026-1.19,1.09,1.09,0,0,0-1.208.065l-1.682,1.258-1.778-1.779,1.2-1.6a1.09,1.09,0,0,0,.045-1.242,10.184,10.184,0,0,1-1.3-2.98,1.09,1.09,0,0,0-.9-.808l-2.078-.3V30.533l1.984-.286a1.089,1.089,0,0,0,.909-.847,10.208,10.208,0,0,1,1.19-3.025,1.09,1.09,0,0,0-.065-1.208l-1.258-1.682,1.779-1.779,1.6,1.2a1.091,1.091,0,0,0,1.241.045,10.178,10.178,0,0,1,2.981-1.3,1.091,1.091,0,0,0,.808-.9l.3-2.078h2.516l.286,1.984a1.09,1.09,0,0,0,.846.909,10.187,10.187,0,0,1,3.026,1.19,1.09,1.09,0,0,0,1.207-.065l1.683-1.259,1.779,1.779-1.2,1.606a1.089,1.089,0,0,0-.045,1.241,10.232,10.232,0,0,1,1.3,2.981,1.087,1.087,0,0,0,.9.807l2.078.3ZM47.5,25.269A6.329,6.329,0,1,0,53.829,31.6,6.336,6.336,0,0,0,47.5,25.269Zm0,10.478A4.149,4.149,0,1,1,51.649,31.6,4.153,4.153,0,0,1,47.5,35.747Zm43.088-4.571A3.415,3.415,0,0,0,87.357,33.5H73.762c.044-.63.069-1.263.069-1.9q0-1.334-.131-2.633h6.1a1.09,1.09,0,0,0,0-2.179H73.389a26.087,26.087,0,0,0-1.54-5.208h5.985a1.093,1.093,0,0,0,.771-.319l4.342-4.342h2.288a3.412,3.412,0,1,0,0-2.18H82.5a1.092,1.092,0,0,0-.771.319L77.383,19.4H70.829a26.306,26.306,0,0,0-1.857-3.026h5.853a1.09,1.09,0,1,0,0-2.18H67.241a26.293,26.293,0,0,0-39.482,0H20.175a1.09,1.09,0,1,0,0,2.18h5.853A26.306,26.306,0,0,0,24.171,19.4H17.617l-4.342-4.343a1.092,1.092,0,0,0-.771-.319H9.765a3.412,3.412,0,1,0,0,2.18h2.288L16.4,21.259a1.093,1.093,0,0,0,.771.319h5.985a26.087,26.087,0,0,0-1.54,5.208H15.2a1.09,1.09,0,0,0,0,2.179h6.1q-.129,1.3-.131,2.633c0,.638.025,1.271.069,1.9H7.643a3.413,3.413,0,1,0,0,2.179H21.482a26.174,26.174,0,0,0,1.056,4.353H14.5a1.09,1.09,0,0,0,0,2.18h8.877a26.108,26.108,0,0,0,5.8,8.3H18.031a1.087,1.087,0,0,0-.764.313l-3.244,3.191h-.886a3.413,3.413,0,1,0,0,2.179h1.332a1.087,1.087,0,0,0,.764-.313l3.244-3.19H31.734a9.76,9.76,0,0,1,3.891,7.965V67.1a3.471,3.471,0,0,0,3.467,3.467H55.908A3.471,3.471,0,0,0,59.375,67.1V60.658a9.76,9.76,0,0,1,3.891-7.965H76.523l3.244,3.19a1.087,1.087,0,0,0,.764.313h1.332a3.413,3.413,0,1,0,0-2.179h-.886l-3.244-3.191a1.087,1.087,0,0,0-.764-.313H65.821a26.108,26.108,0,0,0,5.8-8.3H80.5a1.09,1.09,0,0,0,0-2.18H72.462a26.174,26.174,0,0,0,1.056-4.353H87.357a3.411,3.411,0,1,0,3.231-4.5ZM88.466,14.594a1.233,1.233,0,1,1-1.233,1.233A1.234,1.234,0,0,1,88.466,14.594ZM6.534,17.06a1.233,1.233,0,1,1,1.233-1.233A1.234,1.234,0,0,1,6.534,17.06ZM4.412,35.821a1.233,1.233,0,1,1,1.233-1.233A1.234,1.234,0,0,1,4.412,35.821Zm5.5,20.518a1.233,1.233,0,1,1,1.232-1.233A1.234,1.234,0,0,1,9.907,56.339Zm75.186-2.465a1.233,1.233,0,1,1-1.232,1.232A1.234,1.234,0,0,1,85.093,53.874ZM55.908,68.392H39.092A1.29,1.29,0,0,1,37.8,67.1V62.558H57.2V67.1A1.29,1.29,0,0,1,55.908,68.392Zm6.157-17.529A12.019,12.019,0,0,0,57.2,60.378H37.8a12.017,12.017,0,0,0-4.863-9.515,24.082,24.082,0,0,1-7.761-10.012,1.108,1.108,0,0,0-.115-.28,24.151,24.151,0,1,1,44.884,0,1.087,1.087,0,0,0-.115.279A24.076,24.076,0,0,1,62.065,50.863ZM90.588,35.821a1.233,1.233,0,1,1,1.232-1.233A1.234,1.234,0,0,1,90.588,35.821Z"/></svg>
                                <h3 className="font-bold px-2 text-black">Projet à votre image</h3>
                            </div>
                            <div className="my-4 flex flex-row items-center justify-center">
                                <svg  width="50px" className="mx-auto block px-2" viewBox="0 0 100 125" fill="#37cfee"><g><path d="M90.245,32.998c-2.2-5.201-5.349-9.872-9.36-13.883c-4.011-4.011-8.681-7.16-13.883-9.36   C61.616,7.477,55.896,6.322,50,6.322c-5.896,0-11.616,1.155-17.002,3.433c-5.201,2.2-9.872,5.349-13.883,9.36   c-4.011,4.011-7.16,8.682-9.36,13.883C7.477,38.384,6.322,44.104,6.322,50c0,5.896,1.155,11.616,3.433,17.002   c2.2,5.201,5.349,9.872,9.36,13.883c4.011,4.011,8.682,7.16,13.883,9.36c5.386,2.278,11.106,3.433,17.002,3.433   c5.896,0,11.616-1.155,17.002-3.433c5.201-2.2,9.872-5.349,13.883-9.36c4.011-4.011,7.16-8.682,9.36-13.883   c2.278-5.386,3.433-11.106,3.433-17.002C93.678,44.104,92.523,38.384,90.245,32.998z M50,89.94c-22.023,0-39.94-17.917-39.94-39.94   c0-22.023,17.917-39.94,39.94-39.94c22.023,0,39.94,17.917,39.94,39.94C89.94,72.023,72.023,89.94,50,89.94z"/><path d="M50,17.834c0.191,0,0.346-0.155,0.346-0.346v-6.022c0-0.191-0.155-0.346-0.346-0.346s-0.346,0.155-0.346,0.346v6.022   C49.654,17.679,49.809,17.834,50,17.834z"/><path d="M53.292,16.801c0.003,0,0.006,0,0.01,0c0.05,0,0.093-0.038,0.097-0.089l0.294-3.01c0-0.003,0.001-0.006,0.001-0.01   c0-0.05-0.038-0.093-0.089-0.097c-0.055-0.005-0.102,0.034-0.107,0.088l-0.294,3.01c0,0.003-0.001,0.007-0.001,0.01   C53.203,16.754,53.241,16.796,53.292,16.801z"/><path d="M55.775,17.141c0.047,0,0.088-0.034,0.097-0.081l0.259-1.49l0.259-1.49c0.001-0.006,0.001-0.011,0.001-0.017   c0-0.047-0.034-0.088-0.081-0.096c-0.054-0.01-0.104,0.026-0.113,0.08l-0.518,2.979c-0.001,0.006-0.001,0.011-0.001,0.017   c0,0.047,0.034,0.088,0.081,0.097C55.764,17.14,55.769,17.141,55.775,17.141z"/><path d="M58.216,17.663c0.044,0,0.084-0.03,0.095-0.074l0.369-1.466l0.369-1.466c0.002-0.008,0.003-0.016,0.003-0.024   c0-0.044-0.03-0.084-0.074-0.095c-0.053-0.013-0.106,0.019-0.119,0.071l-0.738,2.932c-0.002,0.008-0.003,0.016-0.003,0.024   c0,0.044,0.03,0.084,0.074,0.095C58.2,17.662,58.209,17.663,58.216,17.663z"/><path d="M60.612,18.366c0.041,0,0.079-0.026,0.093-0.067l0.955-2.869c0.003-0.01,0.005-0.021,0.005-0.031   c0-0.041-0.026-0.079-0.067-0.093c-0.052-0.017-0.107,0.011-0.124,0.062l-0.955,2.869c-0.003,0.01-0.005,0.021-0.005,0.031   c0,0.041,0.026,0.079,0.067,0.093C60.592,18.365,60.602,18.366,60.612,18.366z"/><path d="M62.949,19.246c0.038,0,0.075-0.023,0.091-0.06l1.166-2.79c0.005-0.012,0.008-0.025,0.008-0.038   c0-0.038-0.023-0.075-0.06-0.09c-0.049-0.021-0.107,0.003-0.128,0.053l-0.583,1.395v0l-0.583,1.395   c-0.005,0.012-0.008,0.025-0.008,0.038c0,0.038,0.023,0.075,0.06,0.09C62.923,19.243,62.936,19.246,62.949,19.246z"/><path d="M69.857,23.168c0.03,0,0.06-0.014,0.079-0.04l1.791-2.437c0.013-0.017,0.019-0.038,0.019-0.058   c0-0.03-0.014-0.06-0.04-0.079c-0.044-0.032-0.105-0.023-0.137,0.021l-1.791,2.437c-0.013,0.017-0.019,0.038-0.019,0.058   c0,0.03,0.014,0.06,0.04,0.079C69.816,23.162,69.837,23.168,69.857,23.168z"/><path d="M71.712,24.625c0,0.028,0.012,0.055,0.034,0.075c0.018,0.016,0.041,0.024,0.064,0.024c0.028,0,0.055-0.012,0.074-0.034   l1.968-2.296c0.016-0.018,0.024-0.041,0.024-0.064c0-0.028-0.012-0.055-0.034-0.075c-0.041-0.035-0.103-0.03-0.138,0.011   l-0.984,1.148l-0.984,1.148C71.72,24.58,71.712,24.603,71.712,24.625z"/><path d="M73.543,26.322c0,0.025,0.01,0.05,0.029,0.07c0.019,0.019,0.044,0.029,0.069,0.029c0.025,0,0.05-0.01,0.07-0.029   l2.134-2.143c0.019-0.019,0.029-0.044,0.029-0.069c0-0.025-0.01-0.05-0.029-0.07c-0.038-0.038-0.1-0.038-0.139,0l-2.133,2.143   C73.553,26.272,73.543,26.297,73.543,26.322z"/><path d="M75.243,28.151c0,0.023,0.008,0.046,0.024,0.064c0.019,0.022,0.047,0.034,0.074,0.034c0.023,0,0.046-0.008,0.064-0.024   l2.287-1.978c0.022-0.019,0.034-0.047,0.034-0.074c0-0.023-0.008-0.046-0.024-0.064c-0.036-0.041-0.097-0.045-0.138-0.01   l-1.144,0.989l-1.144,0.989C75.254,28.097,75.243,28.124,75.243,28.151z"/><rect x="76.602" y="29.103" transform="matrix(-0.8031 0.5959 -0.5959 -0.8031 158.2456 6.1044)" width="3.024" height="0.196"/><path d="M80.794,36.914c-0.037,0.016-0.06,0.052-0.06,0.09c0,0.013,0.003,0.026,0.008,0.038c0.016,0.037,0.052,0.06,0.09,0.06   c0.013,0,0.026-0.003,0.038-0.008l2.785-1.179l-0.076-0.181L80.794,36.914z"/><path d="M81.618,39.339c0,0.01,0.002,0.021,0.005,0.031c0.014,0.041,0.052,0.067,0.093,0.067c0.01,0,0.021-0.002,0.031-0.005   l2.865-0.968c0.041-0.014,0.067-0.052,0.067-0.093c0-0.01-0.002-0.021-0.005-0.031c-0.017-0.051-0.073-0.079-0.124-0.062   l-2.865,0.968C81.643,39.26,81.618,39.298,81.618,39.339z"/><path d="M82.398,41.639c-0.044,0.011-0.074,0.051-0.074,0.095c0,0.008,0.001,0.016,0.003,0.025   c0.011,0.044,0.051,0.074,0.095,0.074c0.008,0,0.016-0.001,0.024-0.003l2.929-0.751c0.044-0.011,0.074-0.051,0.074-0.095   c0-0.008-0.001-0.016-0.003-0.025c-0.013-0.052-0.068-0.084-0.119-0.071l-1.465,0.376L82.398,41.639z"/><path d="M82.85,44.175c0,0.006,0.001,0.012,0.002,0.017c0.008,0.048,0.05,0.081,0.096,0.081c0.006,0,0.012,0,0.017-0.002   l1.489-0.265l1.489-0.265c0.047-0.008,0.081-0.05,0.081-0.096c0-0.006,0-0.012-0.002-0.017c-0.009-0.053-0.06-0.089-0.114-0.079   l-2.977,0.531C82.884,44.087,82.85,44.128,82.85,44.175z"/><path d="M83.193,46.648c0,0.003,0,0.007,0.001,0.01c0.005,0.05,0.048,0.088,0.097,0.088c0.003,0,0.007,0,0.01-0.001l3.008-0.307   c0.051-0.005,0.088-0.048,0.088-0.098c0-0.003,0-0.007,0-0.01c-0.005-0.054-0.053-0.093-0.108-0.088l-3.008,0.307   C83.231,46.556,83.193,46.598,83.193,46.648z"/><path d="M83.157,54.493c-0.053-0.007-0.103,0.03-0.111,0.084c-0.001,0.005-0.001,0.009-0.001,0.013c0,0.048,0.036,0.09,0.085,0.097   l2.996,0.41c0.005,0.001,0.009,0.001,0.013,0.001c0.048,0,0.09-0.036,0.097-0.085c0.001-0.005,0.001-0.009,0.001-0.013   c0-0.048-0.036-0.09-0.085-0.097L83.157,54.493z"/><path d="M82.729,56.953c-0.054-0.011-0.105,0.022-0.117,0.075c-0.001,0.007-0.002,0.014-0.002,0.021   c0,0.045,0.032,0.086,0.078,0.096l2.957,0.633c0.007,0.001,0.014,0.002,0.021,0.002c0.045,0,0.086-0.032,0.096-0.078   c0.001-0.007,0.002-0.014,0.002-0.021c0-0.045-0.031-0.086-0.078-0.096L82.729,56.953z"/><path d="M82.119,59.374c-0.052-0.015-0.107,0.015-0.122,0.066c-0.003,0.009-0.004,0.019-0.004,0.028   c0,0.042,0.028,0.081,0.07,0.094l2.902,0.851c0.009,0.003,0.018,0.004,0.028,0.004c0.042,0,0.082-0.028,0.094-0.07   c0.003-0.009,0.004-0.019,0.004-0.028c0-0.042-0.028-0.081-0.07-0.094L82.119,59.374z"/><path d="M81.331,61.743c-0.05-0.019-0.107,0.006-0.126,0.057c-0.004,0.011-0.006,0.023-0.006,0.035c0,0.04,0.024,0.077,0.064,0.092   l2.83,1.065c0.011,0.004,0.023,0.006,0.035,0.006c0.04,0,0.077-0.024,0.092-0.064c0.004-0.011,0.006-0.023,0.006-0.035   c0-0.04-0.024-0.077-0.064-0.092L81.331,61.743z"/><path d="M83.069,65.508c0.037,0,0.072-0.021,0.089-0.057c0.006-0.013,0.009-0.027,0.009-0.041c0-0.037-0.021-0.073-0.057-0.089   l-2.743-1.274c-0.049-0.023-0.107-0.001-0.13,0.048c-0.006,0.013-0.009,0.027-0.009,0.041c0,0.037,0.021,0.072,0.057,0.089   l2.743,1.273C83.041,65.505,83.056,65.508,83.069,65.508z"/><rect x="75.81" y="71.731" transform="matrix(-0.7822 -0.6231 0.6231 -0.7822 93.0465 176.188)" width="3.024" height="0.196"/><path d="M74.576,72.706c-0.04-0.037-0.102-0.034-0.139,0.005c-0.018,0.019-0.026,0.043-0.026,0.067   c0,0.026,0.011,0.053,0.031,0.072l2.218,2.055c0.019,0.018,0.043,0.026,0.067,0.026c0.026,0,0.053-0.011,0.072-0.031   c0.017-0.019,0.026-0.043,0.026-0.067c0-0.026-0.011-0.053-0.031-0.072L74.576,72.706z"/><path d="M72.814,74.475c-0.037-0.04-0.099-0.042-0.139-0.005c-0.021,0.019-0.031,0.046-0.031,0.072   c0,0.024,0.009,0.048,0.026,0.067l2.059,2.215c0.019,0.021,0.046,0.031,0.072,0.031c0.024,0,0.048-0.009,0.067-0.026   c0.021-0.019,0.031-0.045,0.031-0.072c0-0.024-0.009-0.048-0.026-0.067L72.814,74.475z"/><path d="M70.926,76.108c-0.034-0.042-0.096-0.049-0.138-0.015c-0.024,0.019-0.037,0.048-0.037,0.077   c0,0.021,0.007,0.043,0.021,0.061l0.944,1.181l0.944,1.181c0.019,0.024,0.048,0.037,0.077,0.037c0.021,0,0.043-0.007,0.061-0.022   c0.024-0.019,0.037-0.048,0.037-0.077c0-0.021-0.007-0.043-0.021-0.061L70.926,76.108z"/><path d="M68.921,77.596c-0.031-0.044-0.091-0.056-0.136-0.026c-0.028,0.019-0.043,0.05-0.043,0.081   c0,0.019,0.006,0.039,0.017,0.055l1.706,2.497c0.019,0.028,0.05,0.043,0.081,0.043c0.019,0,0.038-0.005,0.055-0.017   c0.028-0.019,0.043-0.05,0.043-0.081c0-0.019-0.006-0.038-0.017-0.055L68.921,77.596z"/><path d="M61.882,81.279c-0.019-0.051-0.076-0.076-0.126-0.057c-0.039,0.015-0.063,0.052-0.063,0.092   c0,0.011,0.002,0.023,0.006,0.034l1.07,2.828c0.015,0.039,0.052,0.063,0.092,0.063c0.011,0,0.023-0.002,0.035-0.006   c0.039-0.015,0.063-0.052,0.063-0.092c0-0.011-0.002-0.023-0.006-0.035L61.882,81.279z"/><path d="M59.516,82.078c-0.015-0.052-0.07-0.081-0.122-0.066c-0.043,0.013-0.07,0.052-0.07,0.094c0,0.009,0.001,0.018,0.004,0.028   l0.856,2.9c0.013,0.043,0.052,0.07,0.094,0.07c0.009,0,0.018-0.001,0.028-0.004c0.043-0.013,0.07-0.052,0.07-0.094   c0-0.009-0.001-0.018-0.004-0.028L59.516,82.078z"/><path d="M57.098,82.698c-0.011-0.053-0.064-0.087-0.117-0.075c-0.046,0.01-0.078,0.051-0.077,0.096   c0,0.007,0.001,0.014,0.002,0.021l0.319,1.478l0.319,1.478c0.01,0.046,0.051,0.077,0.096,0.077c0.007,0,0.014-0.001,0.021-0.002   c0.046-0.01,0.078-0.05,0.078-0.096c0-0.007-0.001-0.014-0.002-0.021L57.098,82.698z"/><path d="M54.64,83.136c-0.007-0.054-0.057-0.091-0.111-0.084c-0.049,0.007-0.085,0.049-0.085,0.097c0,0.005,0,0.009,0.001,0.014   l0.207,1.498l0.208,1.498c0.007,0.049,0.049,0.085,0.097,0.085c0.004,0,0.009,0,0.014-0.001c0.049-0.007,0.085-0.049,0.085-0.097   c0-0.005,0-0.009-0.001-0.014L54.64,83.136z"/><path d="M52.156,83.39c-0.003-0.054-0.05-0.094-0.104-0.092C52,83.301,51.96,83.345,51.96,83.396c0,0.002,0,0.004,0,0.006   l0.19,3.018c0.003,0.052,0.046,0.092,0.098,0.092c0.002,0,0.004,0,0.006,0c0.052-0.003,0.092-0.046,0.092-0.098   c0-0.002,0-0.004,0-0.006L52.156,83.39z"/><path d="M45.357,83.136l-0.406,2.997c-0.001,0.005-0.001,0.009-0.001,0.013c0,0.048,0.036,0.09,0.085,0.097   c0.004,0.001,0.009,0.001,0.013,0.001c0.048,0,0.09-0.036,0.097-0.085l0.203-1.498l0.203-1.498   c0.001-0.004,0.001-0.009,0.001-0.013c0-0.048-0.036-0.09-0.085-0.097C45.414,83.045,45.364,83.082,45.357,83.136z"/><path d="M42.899,82.697l-0.629,2.958c-0.001,0.007-0.002,0.014-0.002,0.02c0,0.045,0.032,0.086,0.078,0.096   c0.007,0.001,0.014,0.002,0.021,0.002c0.045,0,0.086-0.032,0.096-0.078l0.629-2.958c0.001-0.007,0.002-0.014,0.002-0.02   c0-0.045-0.032-0.086-0.078-0.096C42.962,82.611,42.91,82.645,42.899,82.697z"/><path d="M40.48,82.077l-0.848,2.903c-0.003,0.009-0.004,0.018-0.004,0.027c0,0.043,0.028,0.082,0.071,0.094   c0.009,0.003,0.018,0.004,0.028,0.004c0.043,0,0.082-0.028,0.094-0.071l0.424-1.451l0.424-1.451   c0.003-0.009,0.004-0.018,0.004-0.027c0-0.042-0.028-0.082-0.071-0.094C40.549,81.995,40.495,82.025,40.48,82.077z"/><path d="M38.115,81.278l-0.531,1.416l-0.531,1.416l0.184,0.069l1.062-2.831c0.004-0.011,0.006-0.023,0.006-0.034   c0-0.04-0.024-0.077-0.064-0.092C38.19,81.201,38.134,81.227,38.115,81.278z"/><path d="M35.815,80.304l-1.27,2.744c-0.006,0.013-0.009,0.027-0.009,0.041c0,0.037,0.021,0.072,0.057,0.089   c0.013,0.006,0.027,0.009,0.041,0.009c0.037,0,0.073-0.021,0.089-0.057l1.27-2.744c0.006-0.013,0.009-0.027,0.009-0.041   c0-0.037-0.021-0.072-0.057-0.089C35.896,80.234,35.838,80.255,35.815,80.304z"/><path d="M27.565,78.77c-0.014,0.018-0.021,0.039-0.021,0.06c0,0.029,0.013,0.058,0.038,0.078c0.018,0.014,0.039,0.021,0.06,0.021   c0.029,0,0.058-0.013,0.078-0.038l1.85-2.392l-0.155-0.12L27.565,78.77z"/><path d="M27.676,74.835c0-0.027-0.011-0.054-0.032-0.073c-0.04-0.036-0.102-0.033-0.139,0.007l-2.023,2.248   c-0.017,0.019-0.025,0.042-0.025,0.065c0,0.027,0.011,0.054,0.032,0.073c0.019,0.017,0.042,0.025,0.066,0.025   c0.027,0,0.053-0.011,0.073-0.032l2.023-2.247C27.668,74.882,27.676,74.859,27.676,74.835z"/><path d="M25.721,73.023l-2.185,2.09c-0.02,0.019-0.03,0.045-0.03,0.071c0,0.024,0.009,0.049,0.027,0.068   c0.019,0.02,0.045,0.03,0.071,0.03c0.024,0,0.049-0.009,0.068-0.027l1.093-1.045l1.092-1.045L25.721,73.023z"/><path d="M24.232,71.224c0-0.022-0.007-0.044-0.022-0.062c-0.034-0.042-0.096-0.048-0.138-0.013l-2.335,1.922   c-0.023,0.019-0.036,0.047-0.036,0.076c0,0.022,0.007,0.044,0.022,0.062c0.019,0.023,0.047,0.036,0.076,0.036   c0.022,0,0.044-0.007,0.062-0.022l2.335-1.922C24.22,71.281,24.232,71.253,24.232,71.224z"/><path d="M22.721,69.236c0-0.019-0.006-0.039-0.018-0.056c-0.031-0.044-0.092-0.055-0.137-0.024l-1.236,0.871l-1.236,0.871   c-0.027,0.019-0.042,0.049-0.042,0.08c0,0.019,0.006,0.039,0.018,0.056c0.019,0.027,0.049,0.042,0.08,0.042   c0.019,0,0.039-0.006,0.056-0.018l2.472-1.742C22.707,69.297,22.721,69.267,22.721,69.236z"/><path d="M18.986,62.556l-1.399,0.574l-1.399,0.573c-0.038,0.016-0.061,0.052-0.061,0.091c0,0.012,0.002,0.025,0.007,0.037   c0.016,0.038,0.052,0.061,0.091,0.061c0.012,0,0.025-0.002,0.037-0.007l2.798-1.147c0.038-0.016,0.061-0.052,0.061-0.091   c0-0.012-0.002-0.025-0.007-0.037C19.093,62.56,19.035,62.536,18.986,62.556z"/><path d="M18.264,60.302c0-0.01-0.002-0.02-0.005-0.03c-0.017-0.052-0.072-0.08-0.124-0.063l-1.438,0.468l-1.438,0.468   c-0.042,0.013-0.068,0.052-0.068,0.093c0,0.01,0.002,0.02,0.005,0.03c0.013,0.042,0.052,0.068,0.093,0.068   c0.01,0,0.02-0.002,0.03-0.005l2.876-0.935C18.238,60.382,18.264,60.343,18.264,60.302z"/><path d="M17.585,57.899c0-0.008-0.001-0.015-0.003-0.023c-0.013-0.053-0.066-0.085-0.119-0.072l-1.469,0.359v0l-1.469,0.359   c-0.045,0.011-0.075,0.051-0.075,0.095c0,0.008,0.001,0.016,0.003,0.023c0.011,0.045,0.051,0.075,0.095,0.075   c0.008,0,0.016-0.001,0.023-0.003l2.937-0.718C17.555,57.984,17.585,57.944,17.585,57.899z"/><path d="M17.004,55.55c0.048-0.008,0.082-0.05,0.082-0.097c0-0.005,0-0.011-0.001-0.016c-0.009-0.053-0.06-0.09-0.113-0.081   l-2.983,0.497c-0.048,0.008-0.082,0.05-0.082,0.097c0,0.005,0,0.011,0.001,0.016c0.008,0.048,0.05,0.082,0.097,0.082   c0.005,0,0.011,0,0.016-0.001l1.491-0.249L17.004,55.55z"/><path d="M16.771,52.976c0-0.003,0-0.006,0-0.009c-0.005-0.054-0.054-0.094-0.107-0.089l-3.012,0.273   c-0.051,0.005-0.089,0.047-0.089,0.098c0,0.003,0,0.006,0,0.009c0.005,0.051,0.047,0.089,0.098,0.089c0.003,0,0.006,0,0.009,0   l3.012-0.273C16.733,53.069,16.771,53.026,16.771,52.976z"/><path d="M16.836,45.567c0.005,0.001,0.009,0.001,0.013,0.001c0.048,0,0.09-0.036,0.097-0.085c0.001-0.005,0.001-0.009,0.001-0.013   c0-0.048-0.036-0.09-0.085-0.097l-2.997-0.405c-0.055-0.008-0.103,0.03-0.11,0.084c-0.001,0.004-0.001,0.009-0.001,0.013   c0,0.048,0.036,0.09,0.085,0.097L16.836,45.567z"/><path d="M15.78,42.792l1.479,0.314l0.041-0.192l-2.958-0.627c-0.053-0.011-0.105,0.023-0.116,0.076   c-0.001,0.007-0.002,0.014-0.002,0.02c0,0.045,0.032,0.086,0.078,0.096L15.78,42.792z"/><path d="M16.412,40.26l1.452,0.423l0.055-0.188l-2.903-0.846c-0.052-0.015-0.106,0.015-0.122,0.067   c-0.003,0.009-0.004,0.018-0.004,0.027c0,0.043,0.028,0.082,0.071,0.094L16.412,40.26z"/><path d="M18.648,38.313c0.011,0.004,0.023,0.006,0.034,0.006c0.04,0,0.077-0.024,0.092-0.064c0.004-0.011,0.006-0.023,0.006-0.034   c0-0.04-0.024-0.077-0.064-0.092l-1.416-0.53l-1.416-0.53c-0.051-0.019-0.107,0.007-0.126,0.057   c-0.004,0.011-0.006,0.023-0.006,0.034c0,0.04,0.024,0.077,0.064,0.092L18.648,38.313z"/><path d="M18.234,35.373l1.372,0.634c0.013,0.006,0.027,0.009,0.041,0.009c0.037,0,0.073-0.021,0.089-0.057   c0.006-0.013,0.009-0.027,0.009-0.041c0-0.037-0.021-0.073-0.057-0.089l-2.745-1.268l-0.082,0.178L18.234,35.373L18.234,35.373z"/><path d="M23.492,29.582c0.018,0.014,0.039,0.021,0.06,0.021c0.029,0,0.058-0.013,0.078-0.038c0.014-0.018,0.02-0.039,0.02-0.06   c0-0.029-0.013-0.058-0.038-0.078l-2.393-1.849c-0.043-0.033-0.104-0.025-0.138,0.018c-0.014,0.018-0.02,0.039-0.02,0.06   c0,0.029,0.013,0.059,0.038,0.078L23.492,29.582z"/><path d="M25.089,27.663c0.019,0.017,0.042,0.025,0.066,0.025c0.027,0,0.054-0.011,0.073-0.033c0.017-0.019,0.025-0.042,0.025-0.065   c0-0.027-0.011-0.054-0.032-0.073l-1.124-1.011h0l-1.124-1.011c-0.04-0.036-0.102-0.033-0.139,0.007   c-0.017,0.019-0.025,0.042-0.025,0.065c0,0.027,0.011,0.054,0.032,0.073L25.089,27.663z"/><path d="M25.778,24.775l1.046,1.092c0.019,0.02,0.045,0.03,0.071,0.03c0.024,0,0.049-0.009,0.068-0.027   c0.02-0.019,0.03-0.045,0.03-0.071c0-0.024-0.009-0.049-0.027-0.068l-2.091-2.184c-0.038-0.039-0.1-0.04-0.139-0.003   c-0.02,0.019-0.03,0.045-0.03,0.071c0,0.024,0.009,0.049,0.027,0.068L25.778,24.775z"/><path d="M28.688,24.206c0.019,0.024,0.047,0.036,0.076,0.036c0.022,0,0.044-0.007,0.062-0.022c0.024-0.019,0.036-0.047,0.036-0.076   c0-0.022-0.007-0.044-0.022-0.062l-1.923-2.334c-0.034-0.042-0.096-0.048-0.138-0.013c-0.023,0.019-0.036,0.047-0.036,0.076   c0,0.022,0.007,0.044,0.022,0.062L28.688,24.206z"/><path d="M29.799,21.453l0.872,1.235c0.019,0.027,0.049,0.042,0.08,0.042c0.02,0,0.039-0.006,0.056-0.018   c0.027-0.019,0.042-0.049,0.042-0.08c0-0.019-0.006-0.039-0.018-0.057l-1.743-2.471c-0.031-0.044-0.092-0.055-0.137-0.024   c-0.027,0.019-0.042,0.049-0.042,0.08c0,0.02,0.006,0.039,0.018,0.057L29.799,21.453z"/><path d="M37.248,19.066c0.016,0.038,0.052,0.061,0.091,0.061c0.012,0,0.025-0.002,0.037-0.007c0.038-0.016,0.061-0.052,0.061-0.091   c0-0.012-0.002-0.025-0.007-0.037l-0.574-1.399l-0.574-1.399c-0.02-0.05-0.078-0.074-0.128-0.054   c-0.038,0.016-0.061,0.052-0.061,0.091c0,0.012,0.002,0.025,0.007,0.037L37.248,19.066z"/><path d="M39.59,18.201c0.013,0.041,0.052,0.068,0.093,0.068c0.01,0,0.02-0.002,0.03-0.005c0.041-0.014,0.068-0.052,0.068-0.093   c0-0.01-0.002-0.02-0.005-0.03l-0.468-1.438v0l-0.468-1.438c-0.017-0.052-0.073-0.08-0.124-0.063   c-0.041,0.013-0.068,0.052-0.068,0.093c0,0.01,0.002,0.02,0.005,0.03L39.59,18.201z"/><rect x="40.214" y="15.923" transform="matrix(0.238 0.9713 -0.9713 0.238 47.3577 -28.318)" width="3.024" height="0.196"/><path d="M44.186,15.515l0.249,1.491c0.008,0.048,0.05,0.082,0.097,0.082c0.005,0,0.011,0,0.016-0.001   c0.048-0.008,0.082-0.05,0.082-0.097c0-0.005,0-0.011-0.001-0.016l-0.499-2.983c-0.009-0.053-0.06-0.089-0.113-0.081   c-0.048,0.008-0.082,0.05-0.082,0.097c0,0.005,0,0.011,0.001,0.016L44.186,15.515z"/><path d="M46.773,15.178L46.773,15.178l0.137,1.506c0.005,0.051,0.047,0.089,0.098,0.089c0.003,0,0.006,0,0.009,0   c0.051-0.005,0.089-0.047,0.089-0.098c0-0.003,0-0.006,0-0.009l-0.137-1.506v0l-0.138-1.506c-0.005-0.054-0.051-0.093-0.107-0.089   c-0.051,0.005-0.089,0.047-0.089,0.097c0,0.003,0,0.006,0,0.009L46.773,15.178z"/><path d="M66.322,22.228c0.119,0,0.235-0.062,0.3-0.172l3.023-5.208c0.032-0.055,0.047-0.115,0.047-0.174   c0-0.119-0.062-0.235-0.172-0.299c-0.165-0.096-0.377-0.04-0.473,0.126l-1.512,2.604v0l-1.512,2.604   c-0.032,0.055-0.047,0.115-0.047,0.174c0,0.119,0.062,0.235,0.172,0.299C66.203,22.213,66.263,22.228,66.322,22.228z"/><rect x="77.836" y="32.037" transform="matrix(-0.8684 0.4959 -0.4959 -0.8684 167.1113 20.4103)" width="6.022" height="0.692"/><path d="M82.511,49.883c-0.19,0-0.345,0.153-0.346,0.344c0,0.001,0,0.002,0,0.002c0,0.19,0.153,0.345,0.344,0.346l6.022,0.042   c0.001,0,0.002,0,0.002,0c0.19,0,0.345-0.153,0.346-0.344c0-0.001,0-0.002,0-0.002c0-0.19-0.153-0.345-0.344-0.346l-6.022-0.042   C82.513,49.883,82.512,49.883,82.511,49.883z"/><path d="M78.178,66.222c-0.165-0.097-0.377-0.043-0.474,0.122c-0.033,0.055-0.048,0.116-0.048,0.175   c0,0.119,0.061,0.234,0.17,0.299l5.187,3.06c0.055,0.033,0.116,0.048,0.175,0.048c0.118,0,0.234-0.061,0.298-0.17   c0.033-0.055,0.048-0.116,0.048-0.175c0-0.119-0.061-0.234-0.17-0.299L78.178,66.222z"/><path d="M65.755,78.044c-0.113,0.064-0.177,0.181-0.177,0.302c0,0.057,0.014,0.116,0.044,0.169l2.949,5.25l0.604-0.339l-2.95-5.25   C66.132,78.009,65.921,77.95,65.755,78.044z"/><path d="M49.547,82.163c-0.002,0-0.003,0-0.005,0c-0.189,0-0.343,0.152-0.346,0.341l-0.085,6.021c0,0.002,0,0.003,0,0.005   c0,0.189,0.152,0.343,0.341,0.346c0.002,0,0.003,0,0.005,0c0.189,0,0.343-0.152,0.346-0.341l0.085-6.021c0-0.002,0-0.003,0-0.005   C49.888,82.32,49.736,82.165,49.547,82.163z"/><path d="M29.89,82.872c-0.033,0.056-0.049,0.117-0.049,0.178c0,0.118,0.06,0.232,0.168,0.297c0.056,0.033,0.117,0.049,0.178,0.049   c0.118,0,0.232-0.06,0.297-0.168l3.096-5.165l-0.594-0.356L29.89,82.872z"/><path d="M21.889,65.724c0-0.057-0.014-0.114-0.043-0.167c-0.092-0.167-0.303-0.228-0.47-0.135l-5.271,2.912   c-0.114,0.063-0.179,0.181-0.179,0.303c0,0.057,0.014,0.114,0.043,0.167c0.063,0.114,0.181,0.179,0.303,0.179   c0.057,0,0.114-0.014,0.167-0.043l5.271-2.912C21.825,65.964,21.889,65.846,21.889,65.724z"/><path d="M17.495,49.659c0.188,0,0.342-0.15,0.346-0.339c0-0.002,0-0.005,0-0.007c0-0.188-0.15-0.342-0.339-0.346l-6.02-0.127   c-0.195-0.003-0.349,0.148-0.353,0.339c0,0.002,0,0.005,0,0.007c0,0.188,0.15,0.342,0.339,0.346l6.02,0.127   C17.49,49.658,17.493,49.659,17.495,49.659z"/><rect x="16.651" y="31.174" transform="matrix(0.854 0.5202 -0.5202 0.854 19.2671 -5.6276)" width="6.022" height="0.692"/><path d="M34.173,21.598c0.063,0.115,0.182,0.181,0.304,0.181c0.056,0,0.112-0.013,0.165-0.042c0.115-0.063,0.181-0.182,0.181-0.305   c0-0.056-0.014-0.112-0.042-0.165l-1.438-2.646l-1.438-2.646c-0.091-0.168-0.301-0.23-0.469-0.139   c-0.115,0.063-0.181,0.182-0.181,0.305c0,0.056,0.014,0.112,0.042,0.165L34.173,21.598z"/><path d="M68.025,62.492c0.445,0,0.879-0.226,1.127-0.635c0.376-0.622,0.177-1.43-0.445-1.806L52.163,50.046   c0-0.015,0.002-0.031,0.002-0.046c0-1.196-0.969-2.165-2.165-2.165c-1.196,0-2.165,0.969-2.165,2.165   c0,0.073,0.004,0.144,0.011,0.215L24.914,63.318c-0.465,0.266-0.626,0.857-0.361,1.322c0.179,0.313,0.506,0.489,0.842,0.489   c0.163,0,0.328-0.041,0.48-0.128l23.01-13.147c0.326,0.197,0.707,0.312,1.115,0.312c0.169,0,0.332-0.021,0.489-0.058l16.857,10.194   C67.559,62.431,67.794,62.492,68.025,62.492z"/></g></svg>
                                <h3 className="font-bold px-2 text-black">Rappel rapide</h3>
                            </div>
                            <div className="w-full lg:mx-0 flex flex-col md:flex-row justify-center lg:justify-center" /*data-aos="fade-in"*/>
                                <RoundButtonAccueil url="tel:0533950030" color="black" text="05 33 95 00 30"/>
                                <RoundButtonAccueilMail url="mailto:contact@linkweb.fr" color="black" text="Demander un devis"/>
                            </div>
                        </div>
                </section>
                

                {/* <section className="w-full mt-4 mb-12 lg:mb-24">
                <h2 /*data-aos='fade-right' className="text-center text-2xl lg:text-3xl text-bleu century">
                    <span className="font-bold">Votre projet web en 4 étapes avec Linkweb</span>
                </h2>
                <br/>
                <hr className="border-solid w-1/2 lg:w-1/4 border-bleu"/>
                <br/>
                <div className="w-full  py-3">
                    <div className="w-full xl:w-2/3 mx-auto flex flex-col lg:flex-row justify-center items-center">
                        <div className="w-full lg:w-1/4 relative z-50">
                        <div className="relative mb-2">
                            <div className="mx-auto rounded-full text-lg text-white flex items-center" style={{backgroundColor:'#37cfee', borderRadius:'9999px', height:'100px', width:'100px'}}>
                            <span className="text-center text-gray-600 w-full century text-4xl">1
                                {/*<svg className="w-full m-0" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                                <path className="heroicon-ui" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>}
                            </span>
                            </div>
                        </div>

                        <div className="text-lg text-center sm:text-base lg:text-xl century px-16 text-bleu"><span className="font-bold">Vous prenez contact pour mettre en place votre projet.</span></div>
                        </div>

                        <div className="w-full lg:w-1/4 my-6">
                        <div className="relative z-0 mb-2">
                            <div className="frise-etape absolute flex align-center items-center align-middle content-center" style={{width: 'calc(100% - 2.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)'}}>
                            <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                                <div className="xs:w-0 md:w-full xs:bg-white md:bg-darkgrey py-1 rounded" ></div>
                            </div>
                            </div>

                            <div className="w-16 h-16 mx-auto rounded-full text-lg text-white flex items-center" style={{backgroundColor:'#3c3c3c', borderRadius:'9999px'}}>
                            <span className="text-center text-gray-600 w-full century text-2xl">2
                                {/*<svg className="w-full m-0" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" width="24" height="24">
                                <path className="heroicon-ui" d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z"/>
                                </svg>}
                            </span>
                            </div>
                        </div>

                        <div className="text-lg px-16 text-center sm:text-base lg:text-xl century">Nous définissons votre projet en fonction de vos besoins.</div>
                        </div>

                        <div className="w-full lg:w-1/4 my-6">
                        <div className="relative mb-2">
                            <div className="frise-etape absolute flex align-center items-center align-middle content-center" style={{width: 'calc(100% - 2.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)'}}>
                            <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                                <div className="xs:w-0 md:w-full xs:bg-white md:bg-darkgrey py-1 rounded"></div>
                            </div>
                            </div>

                            <div className="w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center" style={{backgroundColor:'#3c3c3c', borderRadius:'9999px'}}>
                            <span className="text-center text-gray-600 w-full century text-2xl">3
                                {/*<svg className="w-full m-0" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path className="heroicon-ui" d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                </svg>}
                            </span>
                            </div>
                        </div>

                        <div className="text-lg px-16 text-center sm:text-base lg:text-xl mx-auto century">Vous validez le projet une fois qu'il vous correspond.</div>
                        </div>

                        <div className="w-full lg:w-1/4 my-6">
                        <div className="relative mb-2">
                            <div className="frise-etape absolute flex align-center items-center align-middle content-center" style={{width: 'calc(100% - 2.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)'}}>
                            <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                                <div className="xs:w-0 md:w-full xs:bg-white md:bg-darkgrey py-1 rounded"></div>
                            </div>
                            </div>

                            <div className="w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center" style={{backgroundColor:'#3c3c3c', borderRadius:'9999px'}}>
                            <span className="text-center text-gray-600 w-full century text-2xl">4
                                {/*<svg className="w-full m-0" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
                                </svg>}
                            </span>
                            </div>
                        </div>

                        <div className="text-lg px-16 text-center sm:text-base lg:text-xl century">Le projet est validé, il entre en phase de production.</div>
                        </div>
                    </div>
                    </div>
                </section> */}
               
                        {/*<section className="bg-darkgrey sidetitle py-10">
                    <section className="w-full lg:w-2/3 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
                        <h2 className="century text-center lg:text-left text-white text-3xl md:text-4xl leading-none">Nos sites internet sont <span className="text-bleu">fonctionnels</span></h2>
                        <br />
                        <hr className="w-1/2 border-bleu lg:w-1/12" />
                    </section>
                    <section className="flex justify-center flex-col items-center">
                        <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 text-white century text-center lg:text-left">
                            <svg width="50px" viewBox="0 0 64 80" fill="#37cfee"><g><path d="M48,62c-7.7,0-14-6.3-14-14s6.3-14,14-14s14,6.3,14,14S55.7,62,48,62z M48,36c-6.6,0-12,5.4-12,12s5.4,12,12,12   s12-5.4,12-12S54.6,36,48,36z"/></g><path d="M54.7,40.8c-1.1-1.1-3.1-1.1-4.2,0l-8.7,8.7l-1.1,5.3l5.3-1.1l8.7-8.7c0.6-0.6,0.9-1.3,0.9-2.1S55.3,41.3,54.7,40.8z   M45,51.9l-1.8,0.4l0.4-1.8l6.1-6.1l1.4,1.4L45,51.9z M53.3,43.6l-0.7,0.7l-1.4-1.4l0.7-0.7c0.4-0.4,1-0.4,1.4,0  c0.2,0.2,0.3,0.4,0.3,0.7S53.5,43.4,53.3,43.6z"/><path d="M2,2v44h30.1c0.1-0.7,0.3-1.3,0.4-2H4V12h50v21.2c0.7,0.3,1.4,0.6,2,1V2H2z M4,4h42v6H4V4z M48,10V4h6v6H48z"/><g><polygon points="13.3,27.7 6.6,21 13.3,14.3 14.7,15.7 9.4,21 14.7,26.3  "/></g><g><polygon points="22.7,27.7 21.3,26.3 26.6,21 21.3,15.7 22.7,14.3 29.4,21  "/></g><g><rect x="17" y="13.7" transform="matrix(-0.9615 -0.2749 0.2749 -0.9615 29.5355 46.1401)" width="2" height="14.6"/></g></svg>
                                <h4 className="font-bold century"><span className="font-bold">Design sur-mesure</span></h4>
                                <p>Nous garantissons l'installation d'un <strong className="font-normal">certificat de sécurité</strong> pour une navigation en toute confiance.</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="60px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><g><path fill="#37cfee" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   " /><path fill="#37cfee" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z" /><g><path fill="#37cfee" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z" /><rect x="72.041" y="56.851" width="0.312" height="5.159" /></g><path fill="#37cfee" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z" /><path fill="#37cfee" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z" /></g></svg>
                                <h4 className="font-bold century -mt-4"><span className="font-bold">Adaptation tous supports</span></h4>
                                <p>Nous créons des sites internet adaptés à chaque <strong>support de navigation</strong> et à sa taille d'écran (responsive design).</p>
                            </div>
                            <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" fill="#37cfee" viewBox="0 0 64 80"><path d="M7,57h36.434c1.349,1.543,2.92,2.901,4.694,4.01l1.342,0.838C49.632,61.949,49.816,62,50,62s0.368-0.051,0.53-0.152  l1.342-0.838c4.507-2.818,7.76-7.194,9.159-12.322l0.934-3.425c0.144-0.528-0.164-1.074-0.69-1.225l-0.843-0.241  c-3.827-1.094-7.165-3.314-9.651-6.422c-0.379-0.475-1.183-0.475-1.562,0c-0.384,0.48-0.796,0.932-1.219,1.369V26  c0-0.552-0.448-1-1-1h-2v-3c0-11.028-8.972-20-20-20S5,10.972,5,22v3H3c-0.552,0-1,0.448-1,1v26C2,54.757,4.243,57,7,57z M50,39.546  c2.624,2.925,5.979,5.038,9.775,6.144l-0.674,2.472c-1.266,4.642-4.209,8.602-8.289,11.152L50,59.821l-0.812-0.507  c-4.08-2.55-7.024-6.51-8.29-11.152l-0.674-2.472C44.021,44.584,47.376,42.472,50,39.546z M7,22c0-9.925,8.075-18,18-18  s18,8.075,18,18v3h-4v-3c0-7.72-6.28-14-14-14s-14,6.28-14,14v3H7V22z M13,25v-3c0-6.617,5.383-12,12-12s12,5.383,12,12v3H13z M4,27  h42v13.544c-1.902,1.474-4.073,2.579-6.431,3.254l-0.843,0.241c-0.527,0.15-0.834,0.696-0.69,1.225l0.934,3.425  c0.622,2.281,1.629,4.4,2.932,6.312H7c-1.654,0-3-1.346-3-3V27z" /><path d="M48,54c0.256,0,0.512-0.098,0.707-0.293l7-7l-1.414-1.414L48,51.586l-2.293-2.293l-1.414,1.414l3,3  C47.488,53.902,47.744,54,48,54z" /><path d="M6.914,49.836l-0.369,1.98c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L10,51.915l2.037,0.985  c0.139,0.067,0.287,0.1,0.436,0.1c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418  c0.291-0.261,0.403-0.667,0.288-1.039c-0.115-0.373-0.436-0.645-0.823-0.697l-2.257-0.302l-0.994-1.854  c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302c-0.387,0.052-0.708,0.324-0.823,0.697  c-0.115,0.373-0.002,0.778,0.288,1.039L6.914,49.836z M8.896,48.295c0.318-0.042,0.597-0.235,0.749-0.519L10,47.116l0.354,0.661  c0.152,0.283,0.431,0.476,0.749,0.519l0.614,0.082l-0.385,0.345c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345L8.896,48.295z" /><path d="M25.132,46.683l-2.257-0.302l-0.994-1.854c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302  c-0.387,0.052-0.708,0.324-0.823,0.697c-0.115,0.373-0.002,0.778,0.288,1.039l1.582,1.418l-0.369,1.98  c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L21,51.915l2.037,0.985c0.139,0.067,0.287,0.1,0.436,0.1  c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418c0.291-0.261,0.403-0.667,0.288-1.039  C25.841,47.006,25.52,46.734,25.132,46.683z M22.333,48.723c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345l0.614-0.082c0.318-0.042,0.597-0.235,0.749-0.519L21,47.116l0.354,0.661c0.152,0.283,0.431,0.476,0.749,0.519  l0.614,0.082L22.333,48.723z" /><path d="M36.132,46.683l-2.257-0.302l-0.994-1.854c-0.349-0.649-1.414-0.649-1.763,0l-0.994,1.854l-2.257,0.302  c-0.387,0.052-0.708,0.324-0.823,0.697c-0.115,0.373-0.002,0.778,0.288,1.039l1.582,1.418l-0.369,1.98  c-0.069,0.371,0.076,0.749,0.376,0.978c0.3,0.229,0.704,0.269,1.042,0.105L32,51.915l2.037,0.985c0.139,0.067,0.287,0.1,0.436,0.1  c0.215,0,0.429-0.07,0.607-0.205c0.3-0.229,0.445-0.607,0.376-0.978l-0.369-1.98l1.582-1.418c0.291-0.261,0.403-0.667,0.288-1.039  C36.841,47.006,36.52,46.734,36.132,46.683z M33.333,48.723c-0.26,0.233-0.379,0.585-0.315,0.928l0.109,0.588l-0.691-0.334  c-0.138-0.066-0.287-0.1-0.436-0.1s-0.298,0.033-0.436,0.1l-0.691,0.334l0.109-0.588c0.064-0.343-0.056-0.695-0.315-0.928  l-0.385-0.345l0.614-0.082c0.318-0.042,0.597-0.235,0.749-0.519L32,47.116l0.354,0.661c0.152,0.283,0.431,0.476,0.749,0.519  l0.614,0.082L33.333,48.723z" /><path d="M17,42c2.155,0,4.127-1.158,5.191-3h3.573l1.789,0.895c0.281,0.141,0.613,0.141,0.895,0L30,39.118l1.553,0.776  c0.281,0.141,0.613,0.141,0.895,0L34.236,39H36c0.265,0,0.52-0.105,0.707-0.293l2-2c0.391-0.391,0.391-1.023,0-1.414l-2-2  C36.52,33.105,36.265,33,36,33H22.191c-1.064-1.842-3.036-3-5.191-3c-3.309,0-6,2.691-6,6S13.691,42,17,42z M17,32  c1.586,0,3.023,0.942,3.662,2.401C20.821,34.765,21.181,35,21.578,35h14.008l1,1l-1,1H34c-0.155,0-0.309,0.036-0.447,0.105  L32,37.882l-1.553-0.776c-0.281-0.141-0.613-0.141-0.895,0L28,37.882l-1.553-0.776C26.309,37.036,26.155,37,26,37h-4.422  c-0.397,0-0.757,0.235-0.916,0.599C20.023,39.058,18.586,40,17,40c-2.206,0-4-1.794-4-4S14.794,32,17,32z" /><rect x="15" y="35" width="2" height="2" /></svg>
                                <h4 className="font-bold century"><span className="font-bold">Conformité RGPD</span></h4>
                                <p>Nous respectons les données personnelles de vos utilisateurs grâce à des procédés en conformité avec le <strong>RGPD</strong> (*).</p>
                                <p className="text-xs">(*) Réglement Général pour la Protection des Données</p>
                            </div>
                        </div>
                        <div className="w-full text-white flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
                            <div className="w-full svgtransform -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125" fill="#37cfee"><g><g><g><path d="M82.3,81.7c-0.8,0-1.5-0.7-1.5-1.5c0-17-13.8-30.9-30.9-30.9c-17,0-30.9,13.8-30.9,30.9     c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5c0-18.6,15.1-33.8,33.8-33.8s33.8,15.1,33.8,33.8C83.8,81.1,83.1,81.7,82.3,81.7z" /></g><g><path d="M1.5,67.4c-0.1,0-0.3,0-0.4-0.1c-0.8-0.2-1.2-1-1-1.8c1-3.5,2.5-6.9,4.2-10.2c1-1.8,0.6-4.1-0.8-5.5     c-3-3-3-7.8,0-10.7l5.4-5.4c1.4-1.4,3.3-2.2,5.4-2.2c2,0,3.9,0.8,5.3,2.2c0,0,0,0,0,0c1.5,1.5,3.7,1.8,5.5,0.8     c3.2-1.8,6.7-3.2,10.2-4.2c1.9-0.6,3.3-2.4,3.3-4.5c0-4.2,3.4-7.6,7.6-7.6h7.6c4.2,0,7.6,3.4,7.6,7.6c0,2.1,1.4,3.9,3.3,4.5     c3.5,1,6.9,2.5,10.2,4.2c1.8,1,4.1,0.6,5.5-0.8c0,0,0,0,0,0c1.4-1.4,3.3-2.2,5.3-2.2c2,0,3.9,0.8,5.4,2.2l5.4,5.4     c1.4,1.4,2.2,3.3,2.2,5.4s-0.8,3.9-2.2,5.4c-1.5,1.5-1.8,3.7-0.8,5.5c1.8,3.2,3.2,6.6,4.2,10.2c0.2,0.8-0.2,1.6-1,1.8     c-0.8,0.2-1.6-0.2-1.8-1c-1-3.3-2.3-6.6-4-9.6c-1.6-2.9-1.1-6.6,1.3-9c1.8-1.8,1.8-4.8,0-6.6l-5.4-5.4c-0.9-0.9-2.1-1.4-3.3-1.4     c-1.3,0-2.4,0.5-3.3,1.4c0,0,0,0,0,0c-2.4,2.3-6,2.9-8.9,1.3c-3.1-1.7-6.3-3-9.6-4c-3.2-0.9-5.4-3.9-5.4-7.3     c0-2.6-2.1-4.7-4.7-4.7h-7.6c-2.6,0-4.7,2.1-4.7,4.7c0,3.3-2.2,6.3-5.4,7.3c-3.3,1-6.5,2.3-9.6,4c-2.9,1.6-6.6,1.1-8.9-1.3     c0,0,0,0,0,0c-0.9-0.9-2.1-1.4-3.3-1.4c-1.3,0-2.4,0.5-3.3,1.4l-5.4,5.4c-1.8,1.8-1.8,4.8,0,6.6c2.4,2.4,2.9,6.1,1.3,9     c-1.7,3.1-3,6.3-4,9.6C2.7,67,2.1,67.4,1.5,67.4z" /></g></g><g><path d="M98.5,81.7H1.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h97.1c0.8,0,1.5,0.7,1.5,1.5S99.3,81.7,98.5,81.7z    " /></g></g></svg>
                                <h4 className="font-bold century"><span className="font-bold">Hébergement et nom de domaine</span></h4>
                                <p>Nous utilisons un CMS adapté en fonction des besoins techniques de votre interface (<strong>Wordpress</strong>, <strong>Prestashop</strong>, <strong>Joomla</strong>, etc.).</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="12.937 19.988 486.829 591.2012500000001"><g><path fill="#37cfee" d="M453.892,19.988H58.84c-25.311,0-45.903,20.595-45.903,45.909v263.348c0,25.312,20.592,45.903,45.903,45.903h83.62v81.085   c0,20.245,16.483,36.716,36.744,36.716h152.511c21.244,0,38.528-17.287,38.528-38.535v-79.265h83.648   c25.295,0,45.874-20.592,45.874-45.903V65.897C499.766,40.583,479.187,19.988,453.892,19.988z M58.84,27.988h395.052   c20.884,0,37.874,17.006,37.874,37.909v38.814H20.937V65.897C20.937,44.994,37.94,27.988,58.84,27.988z M237.442,197.73h37.855   c29.951,0,54.318,24.355,54.318,54.291V306.2H183.117v-54.18c0-14.968,6.092-28.54,15.929-38.371   C208.883,203.819,222.465,197.73,237.442,197.73z M362.243,454.414c0,16.837-13.695,30.535-30.528,30.535H179.204   c-15.85,0-28.744-12.882-28.744-28.716v-85.085v-55.511c0-0.806,0.647-1.438,1.474-1.438h26.075   c0.354,0.102,0.72,0.175,1.107,0.175h154.499c0.387,0,0.753-0.072,1.107-0.175h26.076c0.81,0,1.444,0.632,1.444,1.438V454.414z    M453.892,367.149h-83.647v-51.512c0-5.204-4.236-9.438-9.444-9.438h-0.001h-23.183v-54.18c0-34.347-27.956-62.291-62.318-62.291   h-37.855c-17.184,0-32.765,6.986-44.051,18.266c-11.286,11.279-18.276,26.852-18.276,44.026v54.178h-23.182   c-5.224,0-9.474,4.233-9.474,9.438v0.001v51.511H58.84c-20.9,0-37.903-17.003-37.903-37.903V112.711h470.829v216.535   C491.766,350.146,474.775,367.149,453.892,367.149z" /><path fill="#37cfee" d="M256.369,364.854c-11.108,0-20.146,9.034-20.146,20.14c0,7.416,3.978,14.056,10.338,17.592v27.703c0,2.209,1.791,4,4,4   h11.611c2.209,0,4-1.791,4-4v-27.703c6.36-3.537,10.338-10.177,10.338-17.592C276.51,373.888,267.475,364.854,256.369,364.854z    M260.719,396.329c-1.536,0.599-2.547,2.078-2.547,3.727v26.232h-3.611v-26.232c0-1.648-1.011-3.128-2.547-3.727   c-4.66-1.817-7.791-6.373-7.791-11.336c0-6.693,5.449-12.14,12.146-12.14c6.694,0,12.141,5.446,12.141,12.14   C268.51,389.956,265.379,394.512,260.719,396.329z" /><path fill="#37cfee" d="M65.828,82.413c8.805,0,15.969-7.164,15.969-15.969c0-8.809-7.164-15.976-15.969-15.976   c-8.809,0-15.975,7.167-15.975,15.976C49.853,75.25,57.02,82.413,65.828,82.413z M65.828,58.468c4.394,0,7.969,3.578,7.969,7.976   c0,4.394-3.575,7.969-7.969,7.969c-4.397,0-7.975-3.575-7.975-7.969C57.853,62.046,61.431,58.468,65.828,58.468z" /><path fill="#37cfee" d="M114.807,82.413c8.809,0,15.975-7.164,15.975-15.97c-0.002-8.809-7.168-15.975-15.975-15.975   c-8.809,0-15.975,7.167-15.975,15.976C98.832,75.25,105.999,82.413,114.807,82.413z M114.807,58.468   c4.396,0,7.974,3.579,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969s-7.975-3.575-7.975-7.969   C106.832,62.046,110.41,58.468,114.807,58.468z" /><path fill="#37cfee" d="M163.815,82.413c8.809,0,15.975-7.164,15.975-15.969c0-8.809-7.167-15.976-15.975-15.976   c-8.805,0-15.969,7.167-15.969,15.976C147.846,75.25,155.01,82.413,163.815,82.413z M163.815,58.468   c4.397,0,7.975,3.578,7.975,7.976c0,4.394-3.578,7.969-7.975,7.969c-4.394,0-7.969-3.575-7.969-7.969   C155.846,62.046,159.421,58.468,163.815,58.468z" /></g></svg>
                                <h4 className="font-bold century"><span className="font-bold">Navigation sécurisée</span></h4>
                                <p>Nous optimisons vos contenus pour obtenir une <strong className="font-normal">visibilité maximale</strong> grâce au <strong className="font-normal">référencement naturel</strong>.</p>
                            </div>
                            <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#37cfee" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#37cfee" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#37cfee" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>
                                <h4 className="font-bold century"><span className="font-bold">Optimisation SEO</span></h4>
                                <p>Nous effectuons une <strong className="font-normal">maintenance</strong> et un suivi de performances pour vous tenir informé de l'évolution de <strong className="font-normal">vos performances online</strong>.</p>
                            </div>
                        </div>
                    </section>
                </section>*/}

                <section className="bg-white mt-32 mb-10">
                    <section className="max-w-4xl w-full mx-auto px-4 py-0 my-0">
                        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
                            Nos services ? <br/>Ce sont nos clients qui en parlent le mieux !
                        </h2>
                        <br/>
                        <hr style={{borderBottom:'1px solid #37cfee', width:'30%'}}/>
                            <br/>
                        <h3 /*data-aos='fade-left'*/ className="text-md text-center text-black century pb-0">Ils ont fait appel aux services de notre agence web et sont satisfaits.</h3>
                    </section>
                    <section className="w-full flex flex-col lg:flex-row px-4 mt-24 century text-center">
                            <div className="w-full lg:w-1/3 flex flex-col justify-center items-center px-12 py-24 my-4 mx-4 bg-bleu">
                                        <div className="flex flex-col ">
                                            <img className="w-6/12 mx-auto block" src={ludikstyle} alt="Avis Google"/>
                                            <svg className="-my-8" width="100px" viewBox="0 0 100 125">
                                                <path fill="#000000" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                                <path fill="#000000" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                                <path fill="#000000" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                                <path fill="#000000" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                                <path fill="#000000" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                            </svg>
                                        </div>
                                <h4 className="font-bold text-3xl">LUDIKSTYL</h4>
                                <br/>
                                <p>
                                    Une équipe à l'écoute et très réactive. En collaboration avec <strong>Linkweb</strong> depuis bientôt 8 ans. Je recommande fortement pour leur dynamisme et leur gentillesse. Que cela dure encore longtemps. 😉
                                </p>
                            </div>
                            <div className="w-full lg:w-1/3 flex flex-col justify-center items-center px-12 py-24 my-4 mx-4 bg-bleu">
                                        <div className="flex flex-col">
                                            <img className="w-6/12 mx-auto block" src={contis} alt="Avis Google" />
                                            <svg className="-my-8" width="100px" viewBox="0 0 100 125">
                                                <path fill="#000000" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                                <path fill="#000000" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                                <path fill="#000000" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                                <path fill="#000000" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                                <path fill="#000000" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                            </svg>
                                        </div>
                                <h4 className="font-bold text-3xl">CONTIS ÉQUITATION</h4>
                                <br/>
                                <p>
                                    Le suivi est super, ils ne font pas QUE vous <strong>créer un site web</strong>, ils conseillent, donnent leurs idées, font des [...] des créations pour vous et tout ça avec rapidité ! Je recommande cette entreprise qui m'a apporté une bonne partie de ma clientèle.
                                </p>
                            </div>
                            <div className="w-full lg:w-1/3 flex flex-col justify-center items-center px-12 py-24 my-4 mx-4 bg-bleu" >
                                        <div className="flex flex-col">
                                            <img className="w-6/12 mx-auto block" src={tgcm} alt="Avis Google"/>
                                            <svg className="-my-8" width="100px" viewBox="0 0 100 125">
                                                <path fill="#000000" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z"/>
                                                <path fill="#000000" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z"/>
                                                <path fill="#000000" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z"/>
                                                <path fill="#000000" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z"/>
                                                <path fill="#000000" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z"/>
                                            </svg>
                                        </div>
                                <h4 className="font-bold text-3xl">TGCM</h4>
                                <br/>
                                <p>
                                    Depuis le début de notre collaboration, en 2015, nous trouvons des interlocuteurs à notre écoute, compétents et, cerise sur le gâteau, très sympathiques. Cette culture d'entreprise rejaillit de façon positive sur la qualité du travail. Rejoignez les.
                                </p>
                            </div>
                        </section>
                    </section>
                    
                {/* <section className="max-w-5xl w-full mx-auto flex flex-col px-4 py-0 mt-12">
                <div className="w-full flex-col lg:items-center lg:justify-center xl:items-end mb-12">
                    {/* <div className="max-w-6xl mx-auto lg:mx-56 py-2 w-full flex-col items-end"> }
                    <div className="mt-6 -mb-24 w-full flex flex-col items-black lg:items-start">
                        <div className="w-full  text-3xl text-black font-bold text-center text-white century">4.6/5</div>
                            <p className="w-full  text-sm text-black font-bold text-center text-white century -mt-2">Avis Google</p>
                                <div className="w-full -mt-8">
                                    <svg className="mx-auto block" width="100px" viewBox="0 0 100 125">
                                        <path fill="#f9b404" d="M19.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.8-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C19.6,47.8,19.5,47.7,19.3,47.7z" />
                                        <path fill="#f9b404" d="M38.8,47.7l-5.4-0.8L31,42c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8L25,57.8c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.2,0.1,0.4,0.1,0.5,0  c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C39.2,47.8,39,47.7,38.8,47.7z" />
                                        <path fill="#f9b404" d="M58.3,47.7l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-2.4,4.9l-5.4,0.8c-0.2,0-0.3,0.2-0.4,0.3  c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5c0.1,0,0.1,0.1,0.2,0.1  c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8c0.1-0.1,0.2-0.3,0.1-0.5C58.6,47.8,58.5,47.7,58.3,47.7z" />
                                        <path fill="#f9b404" d="M78.2,48c-0.1-0.2-0.2-0.3-0.4-0.3l-5.4-0.8l-2.4-4.9c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0-0.2,0.1-0.2,0.2l-2.4,4.9l-5.4,0.8  c-0.2,0-0.3,0.2-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5l3.9,3.8l-0.9,5.4c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0l4.9-2.5l4.9,2.5  c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5l-0.9-5.4l3.9-3.8C78.2,48.4,78.2,48.2,78.2,48z" />
                                        <path fill="#f9b404" d="M95.1,58.3c-0.1,0-0.2,0-0.2-0.1l-4.8-2.6l-4.9,2.6c-0.2,0.1-0.5,0-0.7-0.2c-0.1-0.1-0.1-0.2,0-0.3l0.9-5.4l-4-3.8  c-0.2-0.2-0.2-0.5,0-0.7c0.1-0.1,0.2-0.1,0.3-0.1l5.4-0.8l2.4-4.9c0.1-0.2,0.4-0.3,0.7-0.2c0.1,0,0.2,0.1,0.2,0.2l2.4,4.9l5.4,0.8  c0.3,0,0.4,0.3,0.4,0.6c0,0.1-0.1,0.2-0.1,0.3l-3.9,3.8l0.9,5.4C95.6,58,95.5,58.3,95.1,58.3C95.2,58.3,95.1,58.3,95.1,58.3z   M89.8,54.7c0.1-0.1,0.4,0,0.4,0l4.2,2.2l-0.8-4.7c0-0.2,0-0.3,0.1-0.4l3.4-3.3l-4.7-0.7c-0.2,0-0.3-0.1-0.4-0.3l-2.1-4.3L89.8,54.7  z" />
                                    </svg>
                                </div>
                            </div>
                        </div> 
                    <br />
                    {/* <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500">
                            <img 
                                src={ stars }
                                alt="Création site internet Agen"
                                className="w-32 mx-auto h-auto mt-3"
                            />
                            <div className="text-lg century my-2">De haut en bois</div><br/>
                            <div className="italic text-sm">« Cela fait quelques années que nous travaillons ensemble.
                              Sérieux, créatifs , il vous donnent de bons conseils pour améliorer le site, être très bien positionné dans les pages Google( pour ma part je suis dans la 1ère et même en 1ère position suivant la recherche).
                              Donc j’ai du recul pour dire oui au choix de Linkweb pour la création de site.
                              Merci à RA avec qui je traite.
                               »</div>
                        </div> }

                </section> */}
               
                <section className="w-full bg-black flex justify-center items-center flex-col py-12 text-center lg:flex-row">
                    <div className="w-full md:w-1/3 flex flex-col items-center century lg:border-r-2 md:border-white">
                        <span className="text-6xl text-white font-bold">
                            +300
                        </span>
                <span className="text-4xl text-white mt-0 lg:-mt-5">sites en gestion</span>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col items-center century lg:border-r-2 md:border-white">
                       <span className="text-6xl text-white font-bold">
                  +15 ans
                </span>
                <span className="text-4xl text-white mt-0 lg:-mt-5">d'expérience</span>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col items-center century">
                        <span className="text-6xl text-white font-bold">
                  +20
                </span>
                <span className="text-4xl text-white mt-0 lg:-mt-5">techniciens</span>
                    </div>
                </section>
                
                {/*<SimpleMap />*/}
                {/* <section className="w-full flex justify-end py-24" style={{background:'#00000085 url('+ map +')', backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundBlendMode:'cover'}}>
                      <div className="w-full lg:w-1/3 py-10 bg-white shadow-2xl mx-4 lg:mx-32 text-center text-black text-4xl century">
                          <h2 className="max-w-sm mx-auto">Agence Web à <span className="font-bold">Toulouse</span> et <span className="font-bold">Agen</span></h2>
                          <br/>
                          <div className="w-2/3 flex flex-row justify-start mx-auto">
                            <div className="w-2/12 flex items-center">
                               <svg width="25px" viewBox="0 0 1152.7139 1440.550375"><g transform="translate(27692.221,9619.4771)"><path  d="" fill="#37cfee"/><path d="m -27169.027,-8468.7794 c -109.212,-10.8404 -207.531,-48.9146 -293.707,-113.7383 -130.593,-98.2354 -211.705,-244.0654 -227.509,-409.0334 -3.702,-38.636 -2.09,-95.627 3.849,-136.161 28.578,-195.028 157.009,-363.429 338.035,-443.236 45.521,-20.069 99.233,-35.579 147.913,-42.712 52.931,-7.756 116.244,-7.756 169.175,0 195.027,28.578 363.428,157.009 443.236,338.035 20.068,45.521 35.578,99.233 42.711,147.913 7.756,52.931 7.756,116.244 0,169.175 -21.971,149.942 -103.984,287.0324 -226.113,377.9607 -85.78,63.8664 -184.115,101.4195 -292.848,111.8359 -23.892,2.2889 -81.506,2.2675 -104.742,-0.039 z m -18.082,-392.4707 0,-60.625 71.25,0 71.25,0 0,60.625 0,60.625 57.5,0 57.5,0 0,-111.25 0,-111.25 37.5,0 c 20.625,0 37.5,-0.466 37.5,-1.035 0,-1.573 -123.935,-125.215 -125.511,-125.215 -0.755,0 -31.708,-30.34 -68.786,-67.422 l -67.413,-67.422 -130.395,129.456 c -71.717,71.201 -130.395,129.947 -130.395,130.547 0,0.6 17.156,1.091 38.125,1.091 l 38.125,0 0,111.25 0,111.25 56.875,0 56.875,0 0,-60.625 z" fill="#37cfee"/></g></svg>                               
                            </div>
                            <div className="w10/12">
                                <h3 className="text-xl">10 rue Albert Ferrasse, 47550 Boé (près d'Agen)</h3>
                                <hr className="blue"/>
                                <h3 className="text-xl">44 rue de Bayard, 31000 Toulouse</h3>
                            </div>
                          </div>
                          <div className="w-2/3 flex flex-row my-8 justify-start mx-auto">
                              <div className="w-2/12">
                              <svg width="30px" viewBox="0 0 333 416.25"><g><path fill="#37cfee" className="fil0" d="M167 33c73,0 133,60 133,134 0,73 -60,133 -133,133 -74,0 -134,-60 -134,-133 0,-74 60,-134 134,-134zm58 212l22 -22c0,0 3,-7 -2,-13 -5,-5 -32,-19 -32,-19 0,0 -6,-4 -13,4 -8,7 -7,7 -7,7 0,0 -4,3 -9,1 -19,-10 -44,-35 -54,-54 -2,-4 1,-8 1,-8 0,0 0,0 8,-7 7,-8 3,-14 3,-14 0,0 -13,-27 -19,-32 -6,-5 -13,-1 -13,-1l-21 21c-24,49 88,161 136,137z"/></g></svg>
                               </div>
                               <div className="w-10/12">
                               <h3 className="text-xl text-left"><a className="text-bleu hover:text-black" href="tel:0533950030">05 33 95 00 30</a></h3>
                               </div>
                          </div>
                          <div className="w-2/3 flex flex-row my-8 justify-start mx-auto">
                              <div className="w-2/12">
                              <svg width="30px" viewBox="0 0 100 125"><path fill="#37cfee" d="M91.462,32.483c-2.267-5.358-5.511-10.17-9.644-14.303c-4.132-4.132-8.943-7.376-14.303-9.643  C61.967,6.191,56.074,5.001,50,5.001s-11.968,1.19-17.516,3.537c-5.358,2.267-10.171,5.511-14.303,9.643  c-4.133,4.132-7.377,8.944-9.644,14.303C6.191,38.032,5.002,43.925,5.002,50c0,6.075,1.189,11.967,3.536,17.516  c2.267,5.357,5.511,10.17,9.644,14.303c4.132,4.131,8.944,7.375,14.303,9.643c5.548,2.346,11.441,3.537,17.516,3.537  s11.967-1.191,17.516-3.537c5.359-2.268,10.171-5.512,14.303-9.643c4.133-4.133,7.377-8.945,9.644-14.303  c2.347-5.549,3.536-11.441,3.536-17.516C94.998,43.925,93.809,38.032,91.462,32.483z M77.414,66.063  c0,0.201-0.164,0.363-0.365,0.363H22.951c-0.201,0-0.364-0.162-0.364-0.363v-20.91c0-0.131,0.069-0.25,0.182-0.316  c0.112-0.064,0.251-0.064,0.364,0L50,60.295l26.867-15.458c0.113-0.064,0.252-0.064,0.364,0c0.112,0.066,0.183,0.186,0.183,0.316  V66.063z M77.414,38.708c0,0.13-0.07,0.251-0.184,0.315L50.182,54.588c-0.057,0.031-0.119,0.049-0.182,0.049  s-0.125-0.018-0.182-0.049L22.77,39.023c-0.113-0.064-0.183-0.186-0.183-0.315v-4.771c0-0.201,0.163-0.364,0.364-0.364h54.098  c0.201,0,0.365,0.163,0.365,0.364V38.708z"/></svg>              
                               </div>
                               <div className="w-10/12">
                               <h3 className="text-xl text-left"><a className="text-bleu hover:text-black" href="mailto:contact@linkweb.fr">contact@linkweb.fr</a></h3>
                               </div>
                          </div>
                          
                      </div>
                  </section>  */}
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsOffresPromos {
    allWpPost(limit: 3) {
      edges {
        node {
          id
          title
          slug
          modified(locale: "fr", formatString: "DD/MM/YYYY")
          date(locale: "fr", formatString: "dddd DD MMMM YYYY")
          link
          featuredImage {
            node {
                sourceUrl
            }
          }
        }
      }
    }
  }
  
    
`
export default OffresPromos;




