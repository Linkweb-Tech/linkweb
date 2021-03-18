import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Button from "../components/button";
import SEO from "../components/seo";
import Hero1 from "../components/animhero1";
import SimpleMap from "../components/simpleMap";
import Partenaires from '../components/partenaires';
import Carousel from '../components/carousel';
import Modals from "../components/modals";

import Tiles from '../components/gallery/tiles';

import bureau from "../images/bureau.jpg";
import stars from '../images/stars.png';
// import refads from '../images/referencement-ads.webp';
import besoins from '../images/besoins.jpg';


import RoundButton from "../components/roundButton";
import ButtonBlog from "../components/buttonblog";
import Accordion from "../components/accordion";
// import PageTransition from "gatsby-plugin-page-transitions";
import "../scss/heroa.scss";
import "../scss/home1.scss";
import '../scss/blogposts.scss';
import '../scss/carousel.scss';
import '../scss/popup.scss';


function IndexPage(props) {

  return (

    <Layout location="home">
      <SEO
        title="Agence Web Toulouse, Agen - Création Site Internet - Linkweb"
        description="Création de site internet sur-mesure près d’Agen et Toulouse - Définition stratégique - Accompagnement professionnel - Devis rapide et gratuit."
        url="https://linkweb.fr/"
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

          
      {/* List of modals (Creation de sites, Referencement, Solution, Google Ads) */}
      <Modals />
      <Hero1></Hero1>
      <section id="x" className="max-w-md w-full mx-auto mt-12 px-4 py-0 my-0">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
          {/*<Link to="/agence-digitale-toulouse/" className="text-center text-black text-4xl century hover:text-bleu">*/}
            <span className="font-bold">Agence digitale</span> à <span className="font-bold">Toulouse</span> et <span className="font-bold">Agen</span>
          {/*</Link>*/}
        </h2>
        <hr className="blue"></hr>
        <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center century italic pb-0">Connectez-vous avec le reste du monde</h3>
      </section>
      <section className="flex flex-col lg:flex-row mx-8 lg:mx-24 my-0 items-center lg:justify-center">
        <div data-aos="fade-in" className=" w-full lg:w-3/12 md:w-1/2 bg-white my-4 border border-darkgrey mx-10 hover:shadow-xl py-6 century" style={{ borderRadius: '15px', borderColor: '#d4d4d4', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
          <svg width="40px" className="svgtransform mx-auto block" viewBox="12.938 70.193 487.061 465.68874999999997"><g><path fill="#37cfee" d="M499.811,74.173c-0.011-2.202-1.799-3.98-4-3.98H135.94c-2.209,0-3.999,1.791-3.999,4v70.337   c0,0.003-0.001,0.006-0.001,0.01s0.001,0.006,0.001,0.01v72.281c-1.976-0.103-3.965-0.157-5.967-0.157   c-33.125,0-62.967,14.323-83.661,37.1c-0.173,0.162-0.328,0.34-0.471,0.53c-17.961,20.019-28.905,46.456-28.905,75.405   c0,28.943,10.939,55.375,28.893,75.392c0.146,0.197,0.307,0.38,0.485,0.547c20.693,22.775,50.534,37.096,83.657,37.096   c33.116,0,62.953-14.3,83.655-37.047c0.249-0.224,0.478-0.468,0.664-0.747c6.789-7.592,12.568-16.102,17.127-25.32h268.579   c2.209,0,4-1.791,4-4V112.869L499.811,74.173z M491.83,78.193l0.169,34.695v27.652H139.94l0-62.347H491.83z M230.826,336.737   c-0.027,0.404-0.05,0.809-0.081,1.212c-0.044,0.567-0.098,1.131-0.151,1.695c-0.031,0.331-0.06,0.663-0.094,0.994   c-0.063,0.611-0.136,1.219-0.21,1.827c-0.034,0.278-0.066,0.556-0.101,0.833c-0.084,0.65-0.177,1.297-0.273,1.943   c-0.034,0.227-0.067,0.454-0.102,0.68c-0.107,0.687-0.221,1.371-0.341,2.053c-0.031,0.177-0.062,0.354-0.094,0.531   c-0.132,0.727-0.271,1.451-0.418,2.173c-0.024,0.117-0.048,0.234-0.072,0.35c-0.162,0.783-0.331,1.563-0.511,2.339   c-0.006,0.026-0.012,0.053-0.019,0.079c-3.957,17.051-12.082,32.522-23.237,45.283h-47.846c4.839-19.064,7.468-42.21,7.744-65.022   h65.963c-0.019,0.508-0.035,1.017-0.061,1.525C230.896,335.736,230.859,336.236,230.826,336.737z M46.868,260.688h47.897   c-4.825,19.064-7.445,42.209-7.72,65.021H21.022C21.957,300.876,31.549,278.222,46.868,260.688z M165.02,325.709   c-0.276-22.812-2.904-45.957-7.743-65.021h47.846c15.327,17.534,24.925,40.188,25.86,65.021H165.02z M95.044,325.709   c0.294-25.694,3.406-47.972,7.998-65.021h45.952c4.609,17.05,7.732,39.328,8.028,65.021H95.044z M157.021,333.709   c-0.295,25.694-3.419,47.972-8.028,65.022h-45.952c-4.592-17.05-7.704-39.328-7.998-65.022H157.021z M155.041,252.688   c-3.425-11.13-7.709-20.404-12.812-26.756c21.094,3.287,40.126,12.87,55.117,26.756H155.041z M146.599,252.688h-41.171   c5.853-17.727,13.399-28.014,20.547-28.014C133.149,224.674,140.724,234.96,146.599,252.688z M96.994,252.688H54.64   c14.993-13.896,34.032-23.483,55.133-26.764C104.683,232.276,100.41,241.553,96.994,252.688z M87.045,333.709   c0.275,22.813,2.896,45.958,7.72,65.022H46.869c-15.319-17.535-24.912-40.189-25.847-65.022H87.045z M96.994,406.731   c3.416,11.134,7.689,20.411,12.779,26.763c-21.1-3.281-40.139-12.867-55.132-26.763H96.994z M105.427,406.731h41.171   c-5.875,17.727-13.449,28.013-20.624,28.013C118.826,434.744,111.28,424.458,105.427,406.731z M155.041,406.731h42.304   c-14.99,13.885-34.023,23.468-55.116,26.755C147.332,427.135,151.616,417.861,155.041,406.731z M231.04,371.63   c2.484-6.252,4.388-12.648,5.722-19.156c0.002-0.009,0.004-0.019,0.006-0.029c0.18-0.88,0.35-1.762,0.508-2.646   c0.013-0.072,0.026-0.143,0.038-0.215c0.147-0.825,0.284-1.652,0.412-2.481c0.019-0.122,0.038-0.244,0.057-0.367   c0.118-0.78,0.227-1.561,0.329-2.343c0.022-0.168,0.044-0.335,0.066-0.503c0.093-0.739,0.177-1.48,0.255-2.222   c0.022-0.207,0.045-0.414,0.066-0.621c0.07-0.705,0.132-1.411,0.189-2.118c0.02-0.242,0.042-0.483,0.06-0.725   c0.051-0.683,0.092-1.368,0.131-2.053c0.015-0.261,0.033-0.522,0.046-0.783c0.034-0.69,0.057-1.381,0.079-2.072   c0.008-0.255,0.021-0.509,0.027-0.765c0.023-0.939,0.036-1.88,0.036-2.822c0-0.93-0.013-1.858-0.035-2.786   c-0.008-0.334-0.024-0.665-0.035-0.998c-0.02-0.591-0.039-1.183-0.068-1.773c-0.019-0.396-0.046-0.791-0.069-1.186   c-0.031-0.524-0.062-1.047-0.1-1.57c-0.031-0.42-0.067-0.838-0.103-1.257c-0.042-0.498-0.085-0.995-0.133-1.492   c-0.041-0.423-0.087-0.844-0.133-1.265c-0.054-0.496-0.11-0.992-0.171-1.487c-0.05-0.408-0.103-0.815-0.157-1.222   c-0.069-0.517-0.141-1.034-0.218-1.549c-0.055-0.374-0.112-0.747-0.171-1.12c-0.089-0.565-0.184-1.13-0.281-1.693   c-0.055-0.315-0.109-0.63-0.166-0.943c-0.119-0.655-0.246-1.307-0.376-1.959c-0.043-0.216-0.085-0.433-0.13-0.648   c-0.169-0.817-0.347-1.632-0.534-2.444c-0.01-0.045-0.02-0.09-0.03-0.135c-4.36-18.872-13.53-36.405-26.868-50.92   c-14.275-15.535-32.39-26.606-52.326-32.273c-0.042-0.012-0.083-0.024-0.125-0.036c-1.646-0.466-3.303-0.895-4.973-1.286   c-0.171-0.04-0.341-0.082-0.512-0.122c-2.592-0.595-5.21-1.1-7.852-1.512c-0.49-0.076-0.982-0.145-1.473-0.215   c-0.696-0.099-1.388-0.218-2.088-0.305l0-68.973h352.059v223.09H231.04z" /><path fill="#37cfee" d="M185.225,124.736c8.491,0,15.399-6.908,15.399-15.398c0-8.459-6.908-15.341-15.399-15.341   c-8.459,0-15.341,6.882-15.341,15.341C169.884,117.828,176.766,124.736,185.225,124.736z M185.225,101.997   c4.08,0,7.399,3.293,7.399,7.341c0,4.079-3.319,7.398-7.399,7.398c-4.048,0-7.341-3.319-7.341-7.398   C177.884,105.222,181.108,101.997,185.225,101.997z" /><path fill="#37cfee" d="M261.857,124.736c8.494,0,15.405-6.908,15.405-15.398c0-8.459-6.911-15.341-15.405-15.341   c-8.491,0-15.399,6.882-15.399,15.341C246.458,117.828,253.366,124.736,261.857,124.736z M261.857,101.997   c4.083,0,7.405,3.293,7.405,7.341c0,4.079-3.322,7.398-7.405,7.398c-4.08,0-7.399-3.319-7.399-7.398   C254.458,105.29,257.777,101.997,261.857,101.997z" /><path fill="#37cfee" d="M338.496,124.736c8.456,0,15.335-6.908,15.335-15.398c0-8.459-6.879-15.341-15.335-15.341   c-8.494,0-15.405,6.882-15.405,15.341C323.091,117.828,330.002,124.736,338.496,124.736z M338.496,101.997   c4.113,0,7.335,3.225,7.335,7.341c0,4.079-3.29,7.398-7.335,7.398c-4.083,0-7.405-3.319-7.405-7.398   C331.091,105.29,334.413,101.997,338.496,101.997z" /><path fill="#37cfee" d="M419.925,194.432H259.551c-2.209,0-4,1.791-4,4s1.791,4,4,4h160.374c2.209,0,4-1.791,4-4S422.134,194.432,419.925,194.432z   " /><path fill="#37cfee" d="M419.925,261.972H272.699c-2.209,0-4,1.791-4,4s1.791,4,4,4h147.226c2.209,0,4-1.791,4-4S422.134,261.972,419.925,261.972z   " /><path fill="#37cfee" d="M419.925,329.448H319.612c-2.209,0-4,1.791-4,4s1.791,4,4,4h100.313c2.209,0,4-1.791,4-4S422.134,329.448,419.925,329.448z   " /></g></svg>
          <h3 className="text-center text-2xl text-black font-bold century">Création de site internet</h3>
          <hr className="blue"></hr>
          <p className="text-center px-6 text-md"><strong>Site internet</strong> <strong>{/*<Link className="text-bleu hover:text-black" to="/creation-site-internet-vitrine/">*/}vitrine{/*</Link>*/}</strong>, <strong>{/*<Link className="text-bleu hover:text-black" to="/creer-une-boutique-en-ligne/">*/}e-commerce{/*</Link>*/}</strong> ou <strong>administrable</strong>, Linkweb <strong>crée votre site</strong> selon vos besoins.</p>
          <br />
          <ul className="text-bold text-center py-2">
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Design ergonomique et personnalisé</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Site adapté tous supports</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Hébergement et nom de domaine</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Navigation sécurisée (protocole HTTPS)</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Conformité RGPD</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Mise à jour technique</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center font-extrabold text-bleu">+</div>
              <div className="w-9/12 text-left"><a href="#creation-site-web" className="text-bleu hover:text-black">Plus d'informations</a></div>
            </li>

          </ul>
          <div className="w-1/2 mx-auto block">
            <br />
            <button
                                    className="w-full font-normal roundedButton bg-darkgrey text-white flex justify-center items-center text-xs md:text-sm px-3 lg:px-4 py-4"                    
                                    type="button"
                                    onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='/creation-site-internet-toulouse/';
                                    }}
                                > Créer votre site
                                </button>
            {/* <ButtonBlog url="/creation-site-internet-toulouse/" text="Créer votre site" color="darkgrey" /> */}
          </div>
        </div>
        <div data-aos="fade-in" data-aos-delay="300" className=" w-full md:w-1/2 lg:w-3/12 bg-white my-12 border border-darkgrey mx-8 hover:shadow-xl py-6 century" style={{ borderRadius: '15px', borderColor: '#d4d4d4', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
          <svg className="svgtransform mx-auto block" width="40px" viewBox="0 0 48 60"><g><polygon fill="#37cfee" points="47,47 1,47 1,1 3,1 3,45 47,45  " /><g><path fill="#37cfee" d="M15.9,47H7.4V33h8.4V47z M9.4,45h4.4V35H9.4V45z" /><path fill="#37cfee" d="M28.7,47h-8.4V23h8.4V47z M22.3,45h4.4V25h-4.4V45z" /><path fill="#37cfee" d="M41.6,47h-8.4V13h8.4V47z M35.1,45h4.4V15h-4.4V45z" /></g><g><path fill="#37cfee" d="M10.4,26.2l-0.9-1.8c6.4-3.1,14-10.1,18.6-17l1.7,1.1C25.1,15.7,17.1,23,10.4,26.2z" /><g><polygon fill="#37cfee" points="24.4,6 32.8,10.9 31,4.2    " /></g></g></g></svg>
          <h3 className="text-center text-black text-2xl font-bold century">Référencement</h3>
          <hr className="blue"></hr>
          <p className="text-center px-6">Nous définissons et appliquons une <strong>stratégie de {/*<Link className="text-bleu hover:text-black" to="/referencement-toulouse/">*/}référencement web{/*</Link>*/}</strong> adaptée à vos besoins et à la concurrence.</p>
          <br />
          <ul className="text-bold text-center py-2">
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Choix des mots-clés</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Optimisation on-site</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Rédaction SEO</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Netlinking</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Accompagnement personnalisé</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Campagne Ads <a href="#referencement-ads"><span className="cursor-pointer text-bleu hover:text-black">(optionnel +)</span></a></div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center font-extrabold text-bleu">+</div>
              <div className="w-9/12 text-left"><a href="#referencement-web" className="text-bleu hover:text-black">Plus d'informations</a></div>
            </li>
          </ul>
          <div className="w-1/2 mx-auto block">
            <br />
            <button
                                    className="w-full font-normal roundedButton bg-darkgrey text-white flex justify-center items-center text-xs md:text-sm px-3 lg:px-4 py-4"                    
                                    type="button"
                                    onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='/referencement-toulouse/';
                                    }}
                                > Devenir visible
                                </button>
            {/* <ButtonBlog url="/referencement-toulouse/" text="Devenir visible" color="darkgrey" /> */}
          </div>
        </div>
        <div data-aos="fade-in" data-aos-delay="700" className=" w-full md:w-1/2 lg:w-3/12 bg-white my-12 border border-grey mx-8 hover:shadow-xl py-6 century" style={{ borderRadius: '15px', borderColor: '#d4d4d4', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
          <svg width="40px" className="svgtransform mx-auto block" viewBox="0 0 280 350" x="0px" y="0px"><defs></defs><g><path fill="#37cfee" className="fil0" d="M84.998 219.434c-0.016,-0.076 -0.03,-0.153 -0.042,-0.23l-0.018 -0.098c-0.397,-2.118 0.634,-4.173 2.412,-5.174l40.349 -41.05 -24.108 -24.84 -40.292 40.292c-0.77,2.316 -3.162,3.75 -5.618,3.261l-0.384 -0.074c-0.112,-0.017 -0.223,-0.037 -0.334,-0.061 -5.385,-0.96 -10.952,-0.645 -16.214,0.946 -5.289,1.598 -10.275,4.492 -14.461,8.678 -4.124,4.124 -6.992,9.014 -8.604,14.199 -0.62,1.992 -1.056,4.029 -1.309,6.082l15.097 -15.097 0.01 0.01c1.329,-1.327 3.365,-1.825 5.229,-1.104l23.4 9.044c1.337,0.471 2.459,1.515 2.98,2.952l8.104 22.322c0.815,1.808 0.481,4.008 -1.005,5.494l-15.097 15.097c2.054,-0.254 4.09,-0.69 6.082,-1.309 5.185,-1.612 10.075,-4.48 14.199,-8.604 4.156,-4.156 7.036,-9.08 8.64,-14.293 1.639,-5.327 1.967,-10.977 0.984,-16.443zm128.991 -18.803l-142.787 -147.114 -13.131 12.77 142.788 147.114 13.13 -12.77zm-138.498 -151.285l142.787 147.114 9.456 -9.196 -83.481 -86.016c-0.149,-0.118 -0.293,-0.246 -0.431,-0.383 -0.174,-0.175 -0.332,-0.358 -0.475,-0.55l-58.396 -60.17 -9.46 9.201zm121.078 168.226l-142.787 -147.114 -8.823 8.581 142.783 147.119 8.827 -8.586zm38.45 33.987l16.736 -16.248 -20.677 -42.935 -38.336 37.267 42.277 21.916zm23.156 -16.7l15.282 36.651c0.634,1.528 -0.09,3.28 -1.617,3.914 -0.868,0.36 -1.808,0.282 -2.575,-0.133l-34.86 -17.319c-0.069,-0.03 -0.137,-0.062 -0.204,-0.096l-47.891 -24.826c-0.331,-0.17 -0.617,-0.394 -0.852,-0.655l-50.933 -52.479 -39.513 40.199c0.774,6.226 0.229,12.591 -1.632,18.641 -2.073,6.735 -5.76,13.062 -11.059,18.361 -5.272,5.272 -11.551,8.946 -18.229,11.023 -6.909,2.147 -14.246,2.57 -21.336,1.267 -2.66,-0.487 -4.422,-3.039 -3.935,-5.699 0.187,-1.017 0.674,-1.902 1.355,-2.58l-0.011 -0.011 20.877 -20.878 -6.403 -17.636 -18.469 -7.139 -20.829 20.829c-1.919,1.919 -5.029,1.919 -6.948,0 -0.836,-0.836 -1.308,-1.901 -1.415,-2.993 -1.213,-6.965 -0.767,-14.156 1.34,-20.934 2.077,-6.679 5.751,-12.958 11.023,-18.229 5.367,-5.368 11.769,-9.08 18.567,-11.135 5.974,-1.806 12.252,-2.33 18.401,-1.571l40.439 -40.44 -58.161 -59.927 -0.049 -0.053 -0.044 -0.043 -18.217 -18.73c-3.419,-3.523 -5.087,-8.117 -5.021,-12.682 0.066,-4.576 1.866,-9.125 5.383,-12.546l22.99 -22.311c3.527,-3.423 8.131,-5.094 12.706,-5.028 4.585,0.066 9.144,1.869 12.57,5.39l18.205 18.718 0.027 0.029 0.02 0.019 57.504 59.251 38.738 -38.737c-0.8,-6.487 -0.17,-13.122 1.891,-19.394 2.116,-6.439 5.721,-12.481 10.813,-17.573 5.271,-5.271 11.551,-8.945 18.23,-11.022 6.777,-2.108 13.968,-2.554 20.933,-1.34 1.093,0.107 2.157,0.578 2.993,1.415 1.919,1.918 1.919,5.029 0,6.947l-20.828 20.829 7.139 18.47 17.636 6.403 20.877 -20.878 0.011 0.011c0.678,-0.68 1.563,-1.168 2.58,-1.354 2.66,-0.488 5.212,1.274 5.7,3.934 1.302,7.09 0.879,14.428 -1.268,21.336 -2.077,6.679 -5.751,12.958 -11.023,18.229 -5.543,5.544 -12.194,9.321 -19.249,11.332 -6.397,1.823 -13.124,2.186 -19.655,1.088l-38.147 38.809 52.075 53.656 0.01 0.011c0.231,0.237 0.414,0.503 0.55,0.785l23.361 48.506c0.055,0.103 0.104,0.21 0.147,0.318zm-17.484 19.553l24.152 11.999 -10.525 -25.246 -13.627 13.247zm-89.186 -154.283l23.701 24.421 39.649 -40.337c1.156,-1.317 2.981,-1.972 4.806,-1.546 5.753,1.343 11.786,1.202 17.486,-0.423 5.482,-1.562 10.66,-4.508 14.989,-8.837 4.124,-4.124 6.992,-9.014 8.604,-14.199 0.62,-1.992 1.056,-4.028 1.309,-6.081l-15.096 15.097c-1.486,1.485 -3.686,1.82 -5.494,1.005l-22.323 -8.105c-1.436,-0.52 -2.481,-1.643 -2.952,-2.98l-9.044 -23.399c-0.721,-1.865 -0.223,-3.9 1.105,-5.229l-0.011 -0.011 15.097 -15.096c-2.053,0.253 -4.089,0.689 -6.081,1.309 -5.186,1.612 -10.076,4.48 -14.2,8.604 -3.986,3.986 -6.797,8.68 -8.433,13.658 -1.707,5.196 -2.155,10.722 -1.344,16.099 0.027,0.177 0.043,0.354 0.051,0.529 0.518,1.684 0.111,3.591 -1.221,4.923l-40.598 40.598zm-110.806 -25.475l40.034 -38.851 -16.117 -16.57c-2.279,-2.343 -5.308,-3.542 -8.351,-3.585 -3.054,-0.044 -6.121,1.066 -8.465,3.34l-22.99 22.311c-2.337,2.273 -3.534,5.293 -3.578,8.327 -0.044,3.044 1.064,6.102 3.333,8.44l16.134 16.588z" /></g></svg>
          <h3 className="text-center text-black text-2xl font-bold century">Solution sur-mesure</h3>
          <hr className="blue"></hr>
          <p className="text-center px-6">Linkweb est à votre écoute pour la définition de votre {/*<Link className="text-bleu hover:text-black" to="/creation-site-internet-sur-mesure/">*/}<strong>solution</strong>{/*</Link>*/} en fonction de vos besoins.</p>
          <br />
          <ul className="text-bold text-center py-2">
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Applications Métiers et Intranet</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Web services et API</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Création module de réservation</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Outil de personnalisation des produits</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Générateur de devis</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center text-bleu">✔</div>
              <div className="w-9/12 text-left">Etc.</div>
            </li>
            <li className="py-2 flex flex-row justify-center">
              <div className="w-3/12 text-center font-extrabold text-bleu">+</div>
              <div className="w-9/12 text-left"><a href="#solution-sur-mesure" className="text-bleu hover:text-black">Plus d'informations</a></div>
            </li>
          </ul>
          <div className="w-1/2 mx-auto block">
            <br />
            {/* <ButtonBlog url="/contact-agence-web-toulouse/" text="Définir votre projet" color="darkgrey" /> */}
            <button
                                    className="w-full font-normal roundedButton bg-darkgrey text-white flex justify-center items-center text-xs md:text-sm px-3 lg:px-4 py-4"                    
                                    type="button"
                                    onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='/contact-agence-web-toulouse/';
                                    }}
                                > Définir votre projet
                                </button>
          </div>
        </div>
      </section>


      <section className="flex flex-col items-center my-24 century text-center lg:text-left" style={{ backgroundColor: '#00000094', backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundImage: 'url(' + bureau + ')', backgroundPosition: 'center' }}>
        <div className="w-full lg:w-3/4 flex justify-around px-12 lg:px-24 mb-8 pt-24 lg:flex-row flex-col">
          <div className="max-w-3xl w-full lg:w-1/2 flex pr-0 lg:pr-32 flex-col mb-12">
            <h3 className="text-6xl text-bleu font-bold">
              +10 ans
            </h3>
            <h4 className="text-4xl text-white mt-0 lg:-mt-5">d'expérience</h4>

            <p className="text-white font-normal">
              Depuis 2008, notre <strong>agence à Agen</strong> et <strong>Toulouse</strong> accompagne les professionnels pour développer leur <strong>visibilité sur le Web</strong>.
            </p>
          </div>
          <div className="max-w-3xl w-full lg:w-1/2 flex flex-col pl-0 lg:pl-32">
            <h3 className="text-6xl text-bleu font-bold">
              +20
            </h3>
            <h4 className="text-4xl text-white mt-0 lg:-mt-5">techniciens</h4>
            <p className="text-white font-normal">
              Chaque jour, ce sont plus de 20 techniciens qui officient pour rendre nos <strong>sites performants</strong>.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-3/4 flex justify-around px-12 lg:px-24 pb-24 lg:flex-row flex-col">
          <div className="max-w-3xl w-full lg:w-1/2 flex pr-0 lg:pr-32 flex-col mb-12">
            <h3 className="text-6xl text-bleu font-bold">
              +300
            </h3>
            <h4 className="text-4xl text-white mt-0 lg:-mt-5">sites en gestion</h4>
            <p className="text-white font-normal">
              Nous <strong>créons des sites web</strong> pour des professionnels d'horizons parfois très différents : TPE, PME, indépendants, etc.
            </p>
          </div>
          <div className="max-w-3xl w-full lg:w-1/2 pl-0 lg:pl-32 flex flex-col mb-12">
            <h3 className="text-6xl text-bleu font-bold">
              4.6/5
            </h3>
            <h4 className="text-4xl text-white mt-0 lg:-mt-5">sur Google</h4>
            <p className="text-white font-normal">
              Nos clients sont satisfaits du travail engagé sur leur <strong>site</strong>.<br />Note basée sur 107 avis.
            </p>
          </div>
        </div>
        <div className="w-2/3 -mt-16 mb-12">
          <Button url="/agence-digitale-toulouse/" color="white" text="Découvrir notre agence web" position="center" />
        </div>
      </section>
      <section className="max-w-xl w-full mx-auto px-4 py-0 my-0">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
          Conduire son <span className="font-bold">projet professionnel</span> avec <span className="font-bold">Linkweb</span>
        </h2>
        <hr className="blue"></hr>
        <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center century italic pb-2">Notre savoir-faire n’est pas une compétence, il est humain</h3>
      </section>
      <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
        <div className="w-full xl:w-1/3 one px-auto">
          <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                <span className="text-bleu">/</span>JE SOUHAITE DYNAMISER MA COMMUNICATION
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                Faire appel à une <strong><Link to="agence-developpement-web-toulouse/" className="text-bleu font-bold hover:text-black">agence de création web</Link></strong> est une étape à franchir pour <strong>dynamiser sa communication</strong> et définir une <strong>stratégie digitale</strong>. En effet, il est recommandé de bénéficier d'une expertise pour poursuivre des objectifs bien précis. <strong>Propulser sa communication en ligne</strong> par <Link to="/agence-web-marketing-toulouse/" className="text-bleu hover:text-black font-bold">le <strong>webmarketing (marketing digital)</strong></Link> peut constituer un véritable moteur pour une société.
                </div>
              {/* <Button url="/blog/foire-aux-questions/" text="En savoir plus" position="center" /> */}
              <button
                    className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"                    
                    type="button"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/faq/';
                    }}
                ><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> En savoir plus
                </button>
            </section>
          </div>
        </div>
        <div className="w-full xl:w-1/3 two px-auto">
          <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                <span className="text-bleu">/</span>JE SUIS ACCOMPAGNÉ POUR DÉFINIR MA SOLUTION
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                <strong>Être visible</strong>, booster sa <strong>notoriété</strong> ou bien son <strong>image</strong> (<strong>e-réputation</strong> et <strong>identité de marque</strong>) : il existe des solutions pour chaque professionnel. Grâce à nos <strong>expertises</strong>, nous vous accompagnons pour déterminer les <strong>contours de votre stratégie</strong> selon votre <strong>activité</strong> et <strong>vos besoins en termes de communication</strong>. Une <strong>étude concurrentielle</strong> sera également réalisée.
                </div>
              {/* <Button url="/contact-agence-web-toulouse/" text="Être recontacté" position="center" /> */}
              <button
                    className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"                    
                    type="button"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/contact-agence-web-toulouse/';
                    }}
                ><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> Être recontacté
                </button>
            </section>
          </div>
        </div>
        <div className="w-full xl:w-1/3 three px-auto">
          <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
            <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                <span className="text-bleu">/</span>JE FAIS LE CHOIX D'EXPERTS POUR MENER MON PROJET
                </h3>
              <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                Nos <strong>consultants en <Link to="/agence-communication-web-toulouse/" className="text-bleu font-bold hover:text-black">communication web</Link></strong> définissent les contours de votre projet, du choix de l'<strong>hébergement</strong> jusqu'à l’<strong>application de votre stratégie marketing</strong> à travers les différents axes définis. Notre équipe est composée de spécialistes de la <strong>création de site internet</strong>, de <strong>référencement naturel</strong> et <strong>Ads</strong> qui font preuve de <strong>réactivité</strong> dans le but de répondre à vos attentes.
                </div>
              {/* <Button url="/contact-agence-web-toulouse/" text="Demander un devis" position="center" /> */}
              <button
                    className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"                    
                    type="button"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/contact-agence-web-toulouse/';
                    }}
                ><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> Demander un devis
                </button>
            </section>

          </div>

        </div>
      </section>
      <section className="max-w-2xl w-full mx-auto px-4 py-0 mt-12 mb-0">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
          Création Site internet : <span className="font-bold text-black text-center text-4xl century">Ils ont fait <span className="font-bold">confiance</span> à <span className="font-bold">Linkweb</span></span>
        </h2>
        <hr className="blue"></hr>
        <br />
      </section>
      <section className="w-full mx-auto px-4 pt-0 pb-0 my-0">
        <Tiles />
      </section>
      <section className="w-full flex my-12 flex-col lg:flex-row text-white bg-bleu century text-center lg:text-justify px-4 lg:px-16 xl:px-48 py-16">
        <div className="w-full lg:w-8/12 text-xl lg:text-3xl">
          <h3>Vous désirez un <span className="font-bold">projet similaire</span> ?</h3>
          <h4>Linkweb définit votre projet en accord avec vos <span className="font-bold">ambitions</span>.</h4>
        </div>
        <div className="w-1/2 mx-auto block lg:w-3/12">
          {/* <RoundButton className="items-center" color="darkgrey" text="Contactez-nous" url="/contact-agence-web-toulouse/" /> */}
          <button
                            className="font-light mx-auto roundedButton bg-darkgrey text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4"
                            type="button"
                            formtarget="_blank"
                            onClick={(e) => {
                            e.preventDefault();
                            window.location.href='/contact-agence-web-toulouse/';
                            }}
                        >CONTACTEZ-NOUS</button>
        </div>
      </section>
      <section className="max-w-xl w-full mx-auto px-4 py-0 my-0">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
          Les retours de <span className="font-bold">nos clients</span>
        </h2>
        <hr className="blue"></hr>
      </section>
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row align-center justify-center century text-center mt-3 px-6 mb-12">
        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up"*/>
          <img
            src={stars}
            alt="Création site internet Agen"
            className="w-32 mx-auto h-auto mt-3"
          />
          <div className="text-lg century my-2">Faivre Créations</div><br />
          <div className="italic text-sm">« L'<strong className="font-normal">agence Linkweb Agen</strong> est toujours disponible et a l'écoute. Elle contribue à notre développement, et nous accorde du temps et de l'énergie pour nous assurer une <strong className="font-normal">bonne visibilité sur le Net</strong>. Nous sommes très satisfaits de leur travail et souhaitions les en remercier via ce commentaire ! Équipe agréable et bienveillante ! »</div>
        </div>
        <br />
        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="300"*/>
          <img
            src={stars}
            alt="Création site internet Toulouse"
            className="w-32 mx-auto h-auto mt-3"
          />
          <div className="text-lg century my-2">TGCM 64</div><br />
          <div className="italic text-sm">« L'équipe <strong className="font-normal">Linkweb</strong> répond toujours à l'attente de nos demandes et fait vivre le site de façon très dynamique. [...] Depuis le début de notre collaboration, en 2015, nous trouvons des interlocuteurs à notre écoute, compétents et, cerise sur le gâteau , très sympathiques. Cette culture d'entreprise rejaillit de façon positive sur la qualité du travail. Rejoignez les. »</div>
        </div><br />
        <div className="w-full md:w-1/3 px-3 flex flex-col align-center justify-center" /*data-aos="fade-up" data-aos-delay="500"*/>
          <img
            src={stars}
            alt="Création site internet Agen"
            className="w-32 mx-auto h-auto mt-3"
          />
          <div className="text-lg century my-2">De haut en bois</div><br />
          <div className="italic text-sm">« Cela fait quelques années que nous travaillons ensemble.
            Sérieux, créatifs , il vous donnent de bons conseils pour <strong className="font-normal">améliorer le site</strong>, être très <strong className="font-normal">bien positionné dans les pages Google</strong> (pour ma part je suis dans la 1ère et même en 1ère position suivant la recherche).
            Donc j’ai du recul pour dire oui au choix de <strong className="font-normal">Linkweb pour la création de site</strong>.
            Merci à RA avec qui je traite. »</div>
        </div>

      </section>
      <section className="max-w-6xl mx-auto flex align-center justify-center text-center mb-0">
        <div className="w-full flex flex-col md:flex-row justify-center">
          {/* <a
            className="century text-sm hover:text-bleu"
            target="blank" rel="noreferrer noopener"
            href="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,"
          >
            Voir plus de témoignages
                              </a>&nbsp;
          | &nbsp;
                              <a
            className="century text-sm hover:text-bleu"
            target="blank" rel="noreferrer noopener"
            href="https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,"
          >
            Vous êtes déjà clients ? Donnez nous votre avis !
                              </a> */}
                              <button
                            className="century text-sm hover:text-bleu"
                            type="button"
                            formtarget="_blank"
                            onClick={(e) => {
                            e.preventDefault();
                            window.open('https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,', '_blank')
                            }}
                        >Voir plus de témoignages</button>
                            &nbsp;
                            |&nbsp;
                            <button
                            className="century text-sm hover:text-bleu"
                            type="button"
                            target="_blank"
                            onClick={(e) => {
                            e.preventDefault();
                            window.open('https://www.google.com/search?q=linkweb&rlz=1C5CHFA_enFR832FR832&oq=lin&aqs=chrome.0.69i59j69i60l4j0.1518j0j7&sourceid=chrome&ie=UTF-8#lrd=0x12abb323e4e18603:0xb2f1e6fffa7f9cd4,1,,,', '_blank')
                        }}
                        >Vous travaillez déjà avec nous ? Donnez nous votre avis !</button>
        </div>
      </section>
      {/* <section className="max-w-xl w-full mx-auto px-4 py-0 my-0">
                        <h2 /*data-aos='fade-right' className="text-center text-black text-4xl century">
                           Nos expertises <span className="font-bold">à votre service</span>
                        </h2>
                        <hr className="blue"></hr>
                    </section>
                      <section className="flex flex-col xl:flex-row w-full justify-center mx-auto py-6 my-4">
                          <div data-aos="fade-right" className="w-full flex justify-end xl:w-1/2 py-12">
                              <img width="850px" className="h-full justify-end order-last lg:order-first" src={refweb} alt="Agence Adwords Toulouse"/>
                          </div>
                          <div className="w-3/4 xl:w-1/3 px-12 pt-8 lg:pt-16 lg:my-0 -my-64 shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-black flex flex-col justify-center" data-aos="fade-left" style={{backgroundColor:'#d3d3d3'}}>
                              <h2 className="century text-xl lg:text-4xl tracking-wider" data-aos="zoom-in">
                                  <span className="text-bleu">/</span>RÉFÉRENCEMENT NATUREL
                              </h2>
                              <br/>
                              <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                  <span className="font-semibold text-justify">Le référenceur en charge de votre site web collabore avec vous chaque mois pour vous rendre compte de l’évolution du référencement de votre site internet.</span>
                              </h4>
                              <p data-aos='fade-bottom' className="century text-justify text-sm lg:text-lg">
                              À partir d’un <strong>audit de site</strong>, notre <strong>agence de référencement</strong> élabore votre stratégie de <Link className="hover:text-bleu" to="/referencement-toulouse/"><strong>référencement site internet</strong></Link> et analyse les statistiques relatives à votre site internet pour une <strong>optimisation</strong> qui vous apportera une visibilité pertinente avec les <strong>moteurs de recherche</strong> grâce au <strong>marketing digital</strong> (<strong>web marketing</strong>).
                              </p>
                              <Button url="/referencement-de-site-internet-47-31/" text="En savoir plus sur le référencement naturel SEO" position="start" />
                          </div>
                      </section>
                      <section className="flex flex-col xl:flex-row justify-center w-full mx-auto py-6 my-4">
                          <div data-aos="fade-left" className="w-full lg:mt-0 mt-48 xl:w-1/2 py-10">
                              <img width="850px" className="h-auto justify-end order-first lg:order-last" src={refads} alt="Agence Adwords Toulouse"/>
                          </div>
                          <div className="w-3/4 xl:w-1/3 px-12 pt-8 lg:pt-16 lg:mt-0 -mt-64 lg:my-0 order-last lg:order-first shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 xl:px-12 text-white bg-grey flex flex-col justify-center" data-aos="fade-right">
                              <h2 className="century text-xl lg:text-4xl tracking-wider" data-aos="zoom-in">
                                  <span className="text-bleu">/</span> RÉFÉRENCEMENT ADWORDS
                              </h2><br/>
                              <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                  <span className="font-semibold text-justify">Nous optimisons le choix des mots-clés et la configuration de votre plan publicitaire pour respecter votre budget et maximiser vos conversions.</span>
                              </h4>
                              <p data-aos='fade-bottom' className="century text-justify text-sm lg:text-lg">
                              En tant qu'agence de conseil, nous créons votre <strong>campagne publicitaire Adwords</strong> en prenant en compte vos objectifs de visibilité et vos attentes de retours concrets en termes de référencement payant avec <strong>Google Adwords</strong>.
                              <br/><Button url="/agence-adwords-47-31/" color="white" text="En savoir plus sur les campagnes Adwords SEA" position="start" />
                              </p>
                          </div>
  
                      </section>
                      <section className="flex flex-col xl:flex-row w-full justify-center mx-auto py-6 my-4">
                          <div data-aos="fade-right" className="w-full flex justify-end xl:w-1/2 py-12">
                              <img width="850px" className="h-auto justify-end order-last lg:order-first" src={creationsite} alt="Création site internet à Toulouse"/>
                          </div>
                          <div className="w-3/4 xl:w-1/3 px-12 pt-8 lg:pt-16 lg:my-0 -my-64 shadow-xl max-h-auto mx-10 lg:mx-0 py-6 lg:py-12 bg-darkgrey xl:px-12 text-white flex flex-col justify-center" data-aos="fade-left">
                              <h2 className="century text-xl lg:text-4xl tracking-wider" data-aos="zoom-in">
                                  <span className="text-bleu">/</span>CRÉATION DE SITES WEB
                              </h2>
                              <br/>
                                  <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                  <span className="font-semibold text-justify">Linkweb élabore ou réalise une refonte du site internet, site e-commerce, site vitrine de votre entreprise. Nous définissons également des solutions web sur-mesure telles qu'un intranet.
                                  </span></h4>
                              <p data-aos='fade-bottom' className="century text-justify text-sm lg:text-lg">
                              <strong>Pour créer un site</strong> performant, nous étudions vos vos besoins fonctionnels ainsi que les attentes de vos utilisateurs.
  
                              <strong>Nos sites web sont crées à partir d'un design moderne</strong> et <strong>ergonomique</strong> qui s’adapte à toutes les <strong>tailles d’écrans</strong> : mobile, tablette et desktop.<br/><br/>
                              En choisissant Linkweb pour <strong>créer votre site internet</strong> à <strong>Agen</strong> et <strong>Toulouse</strong>, vous serez accompagné du choix de l'<strong>hébergement</strong>, du <strong>nom de domaine</strong>, de l'<strong>outil de création</strong> (<strong>CMS Wordpress</strong>, <strong>Drupal</strong>, <strong>Prestashop</strong>, solution <strong>HTML/CSS</strong>, etc.), jusqu'au <strong>web design</strong> ainsi que pour la création des contenus. Nous disposons de tous les <strong>outils indispensables</strong> pour vous permettre de <strong>faire un site</strong> performant pour votre entreprise.</p>
                              <div className="w-full mt-12 flex lg:flex-row flex-col items-center">
                                <div className="w-full flex-col mb-5 flex md:w-1/2">
                                <Link className="hover:text-bleu" to="/creation-de-site-internet-a-agen/"><img 
                                    src={ loupe }
                                    alt="Agence Web Agen"
                                    className="mx-auto"
                                  /></Link> 
                                  <Link to="/creation-de-site-internet-a-agen/" className="pt-6 block century text-sm text-center text-white capitalize tracking-widest hover:text-bleu">
                                  Création site <br /> web sur-mesure
                                  </Link>
                              </div>
                              <div className="w-full md:w-1/3 mb-5">
                                <Link className="hover:text-bleu" to="/creation-site-internet-sur-mesure/"><img 
                                    src={ menu }
                                    alt="Création site internet Agen"
                                    className="m-auto"
                                  /></Link> 
                                  <Link to="/creation-site-internet-sur-mesure/" className="pt-6 block century text-sm text-center text-white capitalize tracking-widest hover:text-bleu">
                                  Responsive <br />design
                                  </Link>
                              </div>
                              <div className="w-full md:w-1/3 mb-5">
                              
                              <Link className="hover:text-bleu" to="/creation-site-internet-vitrine/"><img 
                                  src={ souris }
                                  alt="Agence Web Toulouse"
                                  className="m-auto"
                                /></Link> 
                                <Link to="/creation-site-internet-vitrine/" className="pt-6 block century text-sm text-center text-white capitalize tracking-widest hover:text-bleu">
                                Interface <br /> ergonomique
                                </Link>
                              </div>
                            </div>
                          </div>
                      </section> */}
      <section className="max-w-2xl century w-full mx-auto mt-12 lg:mt-12 px-4 py-0 pt-12 lg:pt-6 my-0">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
          {/*<Link to="/creation-site-internet-toulouse/" className="text-center text-black text-4xl century hover:text-bleu">*/}
            Création de site internet :{/*</Link>*/}<br />
          <span className="font-bold text-center text-black text-4xl">Vous avez un besoin ?</span>

        </h2>
        <hr className="blue"></hr>
        <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center century italic pb-0">Nous sommes proactifs.</h3><br />
      </section>
      <section className="tabPanel flex flex-1 w-full justify-end ml-0">
        <div className="w-full md:w-3/4 py-0 flex justify-end">
          <Accordion>
            <div className="w-full" label="UNE AUGMENTATION DE VOS CONTACTS PROSPECTS ?">
              <p><span className="font-bold">Vous souhaitez développer la <strong>stratégie de communication digitale</strong> de votre société ? Développer la vente de vos produits ?</span><br /><br /> Le <strong>retour sur investissement</strong> fait partie des objectifs communs à tous chefs d’entreprise. Trouver de nouveaux prospects potentiels nécessite de pouvoir être trouvé en ligne. C'est votre présence en ligne et sur les moteurs de recherche qui permettra de propulser <strong>votre site</strong> au premier plan. Le contenu que vous allez proposer sur <strong>votre site</strong> doit donner envie de travailler avec vous.<br /><br /> Par ailleurs, le contenu n'est pas la seule clé pour rendre votre site performant. En effet, un <span className="font-bold"><Link to="/agence-web-design-toulouse/" className="font-bold text-bleu hover:text-black"><strong>webdesign</strong> adapté</Link></span>, une <span className="font-bold"><strong>expérience utilisateur</strong> (<strong>UX Design</strong>) et des <strong>outils digitaux</strong> bien construits</span> vous permettront de <strong>créer un site internet</strong> efficace.<br /><br /> Le <strong>site internet</strong> est un parfait outil pour <strong>dynamiser sa communication d’entreprise</strong> tout en la maîtrisant. Au-delà des objectifs d'image, le site internet vous permettra de gagner en visibilité pour atteindre vos cibles et obtenir des contacts qualifiés. Notre méthode de travail vous permettra d'atteindre vos objectifs grâce à des <strong>projets en ligne</strong> efficaces.<br /><br /> <span className="font-bold">En faisant le choix de <strong>nos solutions</strong>, notre <strong>agence de création</strong> vous propose, de part nos compétences en <strong>référencement et developpement web</strong>, un <strong>conseil en communication</strong> afin de parvenir aux objectifs fixés lors de la <strong>refonte</strong> ou de la <strong>création de votre site</strong> vitrine ou <strong>site marchand</strong>.</span></p>
            </div>
            <div label="UNE PRÉSENCE EN PREMIÈRE PAGE DE RÉSULTATS DES MOTEURS ?">
              <p>Pour atteindre la <span className="font-bold">meilleure visibilité possible</span>, nous accordons une importance toute particulière la <strong>qualité de vos contenus</strong> présents sur votre site. <strong>Être visible</strong> ne se limite pas uniquement compte du critère quantitatif. En effet, il s'agit de vous rendre accessible auprès <span className="font-bold">d'<strong>utilisateurs qualifiés</strong> qui seront plus à même de répondre à vos attentes</span>. <br /><br />Dès la <strong>conception du site</strong>, nous élaborons une <strong>stratégie de référencement naturel SEO</strong> qui, grâce au travail de nos référenceurs certifiés Google, répondra aux <strong>critères de qualité</strong> pour vous permettre d'obtenir une <span className="font-bold">présence pérenne en <strong>première page sur des requêtes pertinentes</strong></span>.<br /><br />Pour des résultats rapides, nous collaborons pour définir votre <strong>campagne Adwords</strong> : nous planifions votre <strong>plan publicitaire</strong> pour une <span className="font-bold"><strong>visibilité immédiate sur les mots clés les plus recherchés</strong></span> dans le but de vous apporter un <strong>retour concret sur votre investissement</strong>. Bien sûr, nous travaillons pour vous proposer une interface intuitive, adaptée à <strong>votre identité graphique et visuelle</strong> ainsi qu'à votre vision.</p>
            </div>
            <div label="UN ACCROISSEMENT DE VOTRE CHIFFRE D'AFFAIRES ?">
              <p><span className="font-bold">Accroître le chiffre d'affaires de son entreprise grâce au Web ? C'est possible !</span><br /><br />
                En mettant en place une <strong>stratégie digitale</strong> cohérente et pertinente vous aurez l'occasion de développer la <strong>communication en ligne</strong> de votre société via le canal le plus consulté au monde : Internet.<br /><br />Un plan de communication construit pour convertir vous permettra de <span className="font-bold">développer le chiffre d’affaires de votre société</span> avec un <strong>projet web</strong> personnalisé.
                        <br /><br /><strong>Avoir un site</strong> professionnel est un <span className="font-bold">gage de confiance vis-à-vis de vos prospects</span>. Faire appel à une <strong>agence de communication digitale</strong> spécialisée dans la <strong>création de site internet</strong> pour développer un outil rentable est conseillé : ce choix vous permettra d'accéder à <span className="font-bold">une solution construite à partir de vos besoins, mais aussi en corrélation avec ceux de vos prospects pour des stratégies <strong>digitales</strong> optimales.</span></p>
            </div>
          </Accordion>
        </div>
      </section>
      {/* <section className="max-w-2xl w-full mx-auto lg:mt-12 px-4 py-0 pt-24 lg:pt-6 my-0">
        <h2 /*data-aos='fade-right' className="text-center text-black text-4xl century">
          Nous devons connaître
                        </h2>
        <hr className="blue"></hr>
        <br />
      </section>
      <section className="w-full md:w-10/12 mx-auto lg:mx-0 xl:w-9/12 flex flex-col lg:flex-row justify-center">
        <div className="w-full lg:w-2/3 flex justify-center lg:justify-end lg:items-center">
          <img src={besoins} alt="Agence Web Toulouse" style={{ maxHeight: '395px' }} />
        </div>
        <div className="carousel century w-full lg:w-2/5 md:p-20 p-10 lg:py-10 text-black text-sm xl:text-md" style={{ backgroundColor: '#d3d3d352' }}>
            <Carousel />
        </div>

        <br />
      </section> */}
      <section className="max-w-5xl w-full mx-auto px-4 py-2 mt-16 mb-2">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
          Ils nous ont fait confiance
                      </h2>
        <hr className="blue"></hr>
        <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center century italic pb-6">Nos partenaires</h3>
      </section>
      <Partenaires />
      <SimpleMap />

      {/* </PageTransition> */}
    </Layout>

  );
}

export default IndexPage;
