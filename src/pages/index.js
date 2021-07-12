import React, {Component} from "react";
import {graphql, Link} from "gatsby";

import Layout from "../components/layout";
import CarouselRea from '../components/carouselRea';
import Modals from "../components/modals";
import Tiles from '../components/gallery/tiles';
import { StaticImage } from "gatsby-plugin-image";
import bureau from "../images/bureau.jpg";
import Accordion from "../components/accordion";
import "../scss/heroa.scss";
import "../scss/home1.scss";
import '../scss/blogposts.scss';
import '../scss/carousel.scss';
import '../scss/popup.scss';
import SEO from "../components/seo";
import Hero1 from "../components/animhero1";
import GoogleMapReact from 'google-map-react';


import loadable from '@loadable/component';
//import SimpleMap from "../components/simpleMap";
//import Partenaires from '../components/partenaires';
const SimpleMap = loadable(() => import('../components/simpleMap'));
const Partenaires = loadable(() => import('../components/partenaires'));
const LastPostList = loadable(() => import('../components/lastpostslist'));



class  IndexPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      },
      zoom: 11
    };
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
          <Modals/>
          <Hero1></Hero1>
          <section id="x" className=" w-full mx-auto mt-12 px-4 py-0 my-0">
            <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
              {/*<Link to="/agence-digitale-toulouse/" className="text-center text-black text-4xl century hover:text-bleu">*/}
              <span className="font-bold">Agence web</span> à <span className="font-bold">Toulouse</span> et <span
                className="font-bold">Agen</span>
              {/*</Link>*/}
            </h2>
            <hr className="blue"></hr>
            <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center century italic pb-0">Connectez-vous
              avec le reste du monde</h3>
          </section>
          <section className="flex flex-col lg:flex-row mx-8 lg:mx-24 my-0 items-center lg:justify-center">
            <div data-aos="fade-in"
                 className=" w-full lg:w-3/12 md:w-1/2 bg-white my-4 border border-darkgrey mx-10 hover:shadow-xl py-6 century"
                 style={{
                   borderRadius: '15px',
                   borderColor: '#d4d4d4',
                   transform: 'translateZ(0) scale(1)',
                   transition: '0.3s'
                 }}>
              <svg width="40px" className="svgtransform mx-auto block"
                   viewBox="12.938 70.193 487.061 465.68874999999997">
                <g>
                  <path fill="#37cfee"
                        d="M499.811,74.173c-0.011-2.202-1.799-3.98-4-3.98H135.94c-2.209,0-3.999,1.791-3.999,4v70.337   c0,0.003-0.001,0.006-0.001,0.01s0.001,0.006,0.001,0.01v72.281c-1.976-0.103-3.965-0.157-5.967-0.157   c-33.125,0-62.967,14.323-83.661,37.1c-0.173,0.162-0.328,0.34-0.471,0.53c-17.961,20.019-28.905,46.456-28.905,75.405   c0,28.943,10.939,55.375,28.893,75.392c0.146,0.197,0.307,0.38,0.485,0.547c20.693,22.775,50.534,37.096,83.657,37.096   c33.116,0,62.953-14.3,83.655-37.047c0.249-0.224,0.478-0.468,0.664-0.747c6.789-7.592,12.568-16.102,17.127-25.32h268.579   c2.209,0,4-1.791,4-4V112.869L499.811,74.173z M491.83,78.193l0.169,34.695v27.652H139.94l0-62.347H491.83z M230.826,336.737   c-0.027,0.404-0.05,0.809-0.081,1.212c-0.044,0.567-0.098,1.131-0.151,1.695c-0.031,0.331-0.06,0.663-0.094,0.994   c-0.063,0.611-0.136,1.219-0.21,1.827c-0.034,0.278-0.066,0.556-0.101,0.833c-0.084,0.65-0.177,1.297-0.273,1.943   c-0.034,0.227-0.067,0.454-0.102,0.68c-0.107,0.687-0.221,1.371-0.341,2.053c-0.031,0.177-0.062,0.354-0.094,0.531   c-0.132,0.727-0.271,1.451-0.418,2.173c-0.024,0.117-0.048,0.234-0.072,0.35c-0.162,0.783-0.331,1.563-0.511,2.339   c-0.006,0.026-0.012,0.053-0.019,0.079c-3.957,17.051-12.082,32.522-23.237,45.283h-47.846c4.839-19.064,7.468-42.21,7.744-65.022   h65.963c-0.019,0.508-0.035,1.017-0.061,1.525C230.896,335.736,230.859,336.236,230.826,336.737z M46.868,260.688h47.897   c-4.825,19.064-7.445,42.209-7.72,65.021H21.022C21.957,300.876,31.549,278.222,46.868,260.688z M165.02,325.709   c-0.276-22.812-2.904-45.957-7.743-65.021h47.846c15.327,17.534,24.925,40.188,25.86,65.021H165.02z M95.044,325.709   c0.294-25.694,3.406-47.972,7.998-65.021h45.952c4.609,17.05,7.732,39.328,8.028,65.021H95.044z M157.021,333.709   c-0.295,25.694-3.419,47.972-8.028,65.022h-45.952c-4.592-17.05-7.704-39.328-7.998-65.022H157.021z M155.041,252.688   c-3.425-11.13-7.709-20.404-12.812-26.756c21.094,3.287,40.126,12.87,55.117,26.756H155.041z M146.599,252.688h-41.171   c5.853-17.727,13.399-28.014,20.547-28.014C133.149,224.674,140.724,234.96,146.599,252.688z M96.994,252.688H54.64   c14.993-13.896,34.032-23.483,55.133-26.764C104.683,232.276,100.41,241.553,96.994,252.688z M87.045,333.709   c0.275,22.813,2.896,45.958,7.72,65.022H46.869c-15.319-17.535-24.912-40.189-25.847-65.022H87.045z M96.994,406.731   c3.416,11.134,7.689,20.411,12.779,26.763c-21.1-3.281-40.139-12.867-55.132-26.763H96.994z M105.427,406.731h41.171   c-5.875,17.727-13.449,28.013-20.624,28.013C118.826,434.744,111.28,424.458,105.427,406.731z M155.041,406.731h42.304   c-14.99,13.885-34.023,23.468-55.116,26.755C147.332,427.135,151.616,417.861,155.041,406.731z M231.04,371.63   c2.484-6.252,4.388-12.648,5.722-19.156c0.002-0.009,0.004-0.019,0.006-0.029c0.18-0.88,0.35-1.762,0.508-2.646   c0.013-0.072,0.026-0.143,0.038-0.215c0.147-0.825,0.284-1.652,0.412-2.481c0.019-0.122,0.038-0.244,0.057-0.367   c0.118-0.78,0.227-1.561,0.329-2.343c0.022-0.168,0.044-0.335,0.066-0.503c0.093-0.739,0.177-1.48,0.255-2.222   c0.022-0.207,0.045-0.414,0.066-0.621c0.07-0.705,0.132-1.411,0.189-2.118c0.02-0.242,0.042-0.483,0.06-0.725   c0.051-0.683,0.092-1.368,0.131-2.053c0.015-0.261,0.033-0.522,0.046-0.783c0.034-0.69,0.057-1.381,0.079-2.072   c0.008-0.255,0.021-0.509,0.027-0.765c0.023-0.939,0.036-1.88,0.036-2.822c0-0.93-0.013-1.858-0.035-2.786   c-0.008-0.334-0.024-0.665-0.035-0.998c-0.02-0.591-0.039-1.183-0.068-1.773c-0.019-0.396-0.046-0.791-0.069-1.186   c-0.031-0.524-0.062-1.047-0.1-1.57c-0.031-0.42-0.067-0.838-0.103-1.257c-0.042-0.498-0.085-0.995-0.133-1.492   c-0.041-0.423-0.087-0.844-0.133-1.265c-0.054-0.496-0.11-0.992-0.171-1.487c-0.05-0.408-0.103-0.815-0.157-1.222   c-0.069-0.517-0.141-1.034-0.218-1.549c-0.055-0.374-0.112-0.747-0.171-1.12c-0.089-0.565-0.184-1.13-0.281-1.693   c-0.055-0.315-0.109-0.63-0.166-0.943c-0.119-0.655-0.246-1.307-0.376-1.959c-0.043-0.216-0.085-0.433-0.13-0.648   c-0.169-0.817-0.347-1.632-0.534-2.444c-0.01-0.045-0.02-0.09-0.03-0.135c-4.36-18.872-13.53-36.405-26.868-50.92   c-14.275-15.535-32.39-26.606-52.326-32.273c-0.042-0.012-0.083-0.024-0.125-0.036c-1.646-0.466-3.303-0.895-4.973-1.286   c-0.171-0.04-0.341-0.082-0.512-0.122c-2.592-0.595-5.21-1.1-7.852-1.512c-0.49-0.076-0.982-0.145-1.473-0.215   c-0.696-0.099-1.388-0.218-2.088-0.305l0-68.973h352.059v223.09H231.04z"/>
                  <path fill="#37cfee"
                        d="M185.225,124.736c8.491,0,15.399-6.908,15.399-15.398c0-8.459-6.908-15.341-15.399-15.341   c-8.459,0-15.341,6.882-15.341,15.341C169.884,117.828,176.766,124.736,185.225,124.736z M185.225,101.997   c4.08,0,7.399,3.293,7.399,7.341c0,4.079-3.319,7.398-7.399,7.398c-4.048,0-7.341-3.319-7.341-7.398   C177.884,105.222,181.108,101.997,185.225,101.997z"/>
                  <path fill="#37cfee"
                        d="M261.857,124.736c8.494,0,15.405-6.908,15.405-15.398c0-8.459-6.911-15.341-15.405-15.341   c-8.491,0-15.399,6.882-15.399,15.341C246.458,117.828,253.366,124.736,261.857,124.736z M261.857,101.997   c4.083,0,7.405,3.293,7.405,7.341c0,4.079-3.322,7.398-7.405,7.398c-4.08,0-7.399-3.319-7.399-7.398   C254.458,105.29,257.777,101.997,261.857,101.997z"/>
                  <path fill="#37cfee"
                        d="M338.496,124.736c8.456,0,15.335-6.908,15.335-15.398c0-8.459-6.879-15.341-15.335-15.341   c-8.494,0-15.405,6.882-15.405,15.341C323.091,117.828,330.002,124.736,338.496,124.736z M338.496,101.997   c4.113,0,7.335,3.225,7.335,7.341c0,4.079-3.29,7.398-7.335,7.398c-4.083,0-7.405-3.319-7.405-7.398   C331.091,105.29,334.413,101.997,338.496,101.997z"/>
                  <path fill="#37cfee"
                        d="M419.925,194.432H259.551c-2.209,0-4,1.791-4,4s1.791,4,4,4h160.374c2.209,0,4-1.791,4-4S422.134,194.432,419.925,194.432z   "/>
                  <path fill="#37cfee"
                        d="M419.925,261.972H272.699c-2.209,0-4,1.791-4,4s1.791,4,4,4h147.226c2.209,0,4-1.791,4-4S422.134,261.972,419.925,261.972z   "/>
                  <path fill="#37cfee"
                        d="M419.925,329.448H319.612c-2.209,0-4,1.791-4,4s1.791,4,4,4h100.313c2.209,0,4-1.791,4-4S422.134,329.448,419.925,329.448z   "/>
                </g>
              </svg>
              <h3 className="text-center text-2xl text-black font-bold century">Création de site internet</h3>
              <hr className="blue"></hr>
              <p className="text-center px-6 text-md"><strong>Site internet</strong>
                <strong>{/*<Link className="text-bleu hover:text-black" to="/creation-site-internet-vitrine/">*/}vitrine{/*</Link>*/}</strong>, <strong>{/*<Link className="text-bleu hover:text-black" to="/creer-une-boutique-en-ligne/">*/}e-commerce{/*</Link>*/}</strong> ou <strong>administrable</strong>,
                Linkweb <strong>crée votre site</strong> selon vos besoins.</p>
              <br/>
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
                  <div className="w-9/12 text-left"><a href="#creation-site-web" className="text-bleu hover:text-black">Plus
                    d'informations</a></div>
                </li>

              </ul>
              <div className="w-1/2 mx-auto block">
                <br/>
                <button
                    className="w-full font-normal roundedButton bg-darkgrey text-white flex justify-center items-center text-xs md:text-sm px-3 lg:px-4 py-4"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/creation-site-internet-toulouse/';
                    }}
                > Créer votre site
                </button>
                {/* <ButtonBlog url="/creation-site-internet-toulouse/" text="Créer votre site" color="darkgrey" /> */}
              </div>
            </div>
            <div data-aos="fade-in" data-aos-delay="300"
                 className=" w-full md:w-1/2 lg:w-3/12 bg-white my-12 border border-darkgrey mx-8 hover:shadow-xl py-6 century"
                 style={{
                   borderRadius: '15px',
                   borderColor: '#d4d4d4',
                   transform: 'translateZ(0) scale(1)',
                   transition: '0.3s'
                 }}>
              <svg className="svgtransform mx-auto block" width="40px" viewBox="0 0 48 60">
                <g>
                  <polygon fill="#37cfee" points="47,47 1,47 1,1 3,1 3,45 47,45  "/>
                  <g>
                    <path fill="#37cfee" d="M15.9,47H7.4V33h8.4V47z M9.4,45h4.4V35H9.4V45z"/>
                    <path fill="#37cfee" d="M28.7,47h-8.4V23h8.4V47z M22.3,45h4.4V25h-4.4V45z"/>
                    <path fill="#37cfee" d="M41.6,47h-8.4V13h8.4V47z M35.1,45h4.4V15h-4.4V45z"/>
                  </g>
                  <g>
                    <path fill="#37cfee"
                          d="M10.4,26.2l-0.9-1.8c6.4-3.1,14-10.1,18.6-17l1.7,1.1C25.1,15.7,17.1,23,10.4,26.2z"/>
                    <g>
                      <polygon fill="#37cfee" points="24.4,6 32.8,10.9 31,4.2    "/>
                    </g>
                  </g>
                </g>
              </svg>
              <h3 className="text-center text-black text-2xl font-bold century">Référencement</h3>
              <hr className="blue"></hr>
              <p className="text-center px-6">Nous définissons et appliquons une <strong>stratégie
                de {/*<Link className="text-bleu hover:text-black" to="/referencement-toulouse/">*/}référencement web
                (SEO comme SEA){/*</Link>*/}</strong> adaptée à vos besoins et à la concurrence.</p>
              <br/>
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
                  <div className="w-9/12 text-left">Campagne Ads <a href="#referencement-ads"><span
                      className="cursor-pointer text-bleu hover:text-black">(optionnel +)</span></a></div>
                </li>
                <li className="py-2 flex flex-row justify-center">
                  <div className="w-3/12 text-center font-extrabold text-bleu">+</div>
                  <div className="w-9/12 text-left"><a href="#referencement-web" className="text-bleu hover:text-black">Plus
                    d'informations</a></div>
                </li>
              </ul>
              <div className="w-1/2 mx-auto block">
                <br/>
                <button
                    className="w-full font-normal roundedButton bg-darkgrey text-white flex justify-center items-center text-xs md:text-sm px-3 lg:px-4 py-4"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/referencement-toulouse/';
                    }}
                > Devenir visible
                </button>
                {/* <ButtonBlog url="/referencement-toulouse/" text="Devenir visible" color="darkgrey" /> */}
              </div>
            </div>
            <div data-aos="fade-in" data-aos-delay="700"
                 className=" w-full md:w-1/2 lg:w-3/12 bg-white my-12 border border-grey mx-8 hover:shadow-xl py-6 century"
                 style={{
                   borderRadius: '15px',
                   borderColor: '#d4d4d4',
                   transform: 'translateZ(0) scale(1)',
                   transition: '0.3s'
                 }}>
              <svg width="40px" className="svgtransform mx-auto block" viewBox="0 0 280 350" x="0px" y="0px">
                <defs></defs>
                <g>
                  <path fill="#37cfee" className="fil0"
                        d="M84.998 219.434c-0.016,-0.076 -0.03,-0.153 -0.042,-0.23l-0.018 -0.098c-0.397,-2.118 0.634,-4.173 2.412,-5.174l40.349 -41.05 -24.108 -24.84 -40.292 40.292c-0.77,2.316 -3.162,3.75 -5.618,3.261l-0.384 -0.074c-0.112,-0.017 -0.223,-0.037 -0.334,-0.061 -5.385,-0.96 -10.952,-0.645 -16.214,0.946 -5.289,1.598 -10.275,4.492 -14.461,8.678 -4.124,4.124 -6.992,9.014 -8.604,14.199 -0.62,1.992 -1.056,4.029 -1.309,6.082l15.097 -15.097 0.01 0.01c1.329,-1.327 3.365,-1.825 5.229,-1.104l23.4 9.044c1.337,0.471 2.459,1.515 2.98,2.952l8.104 22.322c0.815,1.808 0.481,4.008 -1.005,5.494l-15.097 15.097c2.054,-0.254 4.09,-0.69 6.082,-1.309 5.185,-1.612 10.075,-4.48 14.199,-8.604 4.156,-4.156 7.036,-9.08 8.64,-14.293 1.639,-5.327 1.967,-10.977 0.984,-16.443zm128.991 -18.803l-142.787 -147.114 -13.131 12.77 142.788 147.114 13.13 -12.77zm-138.498 -151.285l142.787 147.114 9.456 -9.196 -83.481 -86.016c-0.149,-0.118 -0.293,-0.246 -0.431,-0.383 -0.174,-0.175 -0.332,-0.358 -0.475,-0.55l-58.396 -60.17 -9.46 9.201zm121.078 168.226l-142.787 -147.114 -8.823 8.581 142.783 147.119 8.827 -8.586zm38.45 33.987l16.736 -16.248 -20.677 -42.935 -38.336 37.267 42.277 21.916zm23.156 -16.7l15.282 36.651c0.634,1.528 -0.09,3.28 -1.617,3.914 -0.868,0.36 -1.808,0.282 -2.575,-0.133l-34.86 -17.319c-0.069,-0.03 -0.137,-0.062 -0.204,-0.096l-47.891 -24.826c-0.331,-0.17 -0.617,-0.394 -0.852,-0.655l-50.933 -52.479 -39.513 40.199c0.774,6.226 0.229,12.591 -1.632,18.641 -2.073,6.735 -5.76,13.062 -11.059,18.361 -5.272,5.272 -11.551,8.946 -18.229,11.023 -6.909,2.147 -14.246,2.57 -21.336,1.267 -2.66,-0.487 -4.422,-3.039 -3.935,-5.699 0.187,-1.017 0.674,-1.902 1.355,-2.58l-0.011 -0.011 20.877 -20.878 -6.403 -17.636 -18.469 -7.139 -20.829 20.829c-1.919,1.919 -5.029,1.919 -6.948,0 -0.836,-0.836 -1.308,-1.901 -1.415,-2.993 -1.213,-6.965 -0.767,-14.156 1.34,-20.934 2.077,-6.679 5.751,-12.958 11.023,-18.229 5.367,-5.368 11.769,-9.08 18.567,-11.135 5.974,-1.806 12.252,-2.33 18.401,-1.571l40.439 -40.44 -58.161 -59.927 -0.049 -0.053 -0.044 -0.043 -18.217 -18.73c-3.419,-3.523 -5.087,-8.117 -5.021,-12.682 0.066,-4.576 1.866,-9.125 5.383,-12.546l22.99 -22.311c3.527,-3.423 8.131,-5.094 12.706,-5.028 4.585,0.066 9.144,1.869 12.57,5.39l18.205 18.718 0.027 0.029 0.02 0.019 57.504 59.251 38.738 -38.737c-0.8,-6.487 -0.17,-13.122 1.891,-19.394 2.116,-6.439 5.721,-12.481 10.813,-17.573 5.271,-5.271 11.551,-8.945 18.23,-11.022 6.777,-2.108 13.968,-2.554 20.933,-1.34 1.093,0.107 2.157,0.578 2.993,1.415 1.919,1.918 1.919,5.029 0,6.947l-20.828 20.829 7.139 18.47 17.636 6.403 20.877 -20.878 0.011 0.011c0.678,-0.68 1.563,-1.168 2.58,-1.354 2.66,-0.488 5.212,1.274 5.7,3.934 1.302,7.09 0.879,14.428 -1.268,21.336 -2.077,6.679 -5.751,12.958 -11.023,18.229 -5.543,5.544 -12.194,9.321 -19.249,11.332 -6.397,1.823 -13.124,2.186 -19.655,1.088l-38.147 38.809 52.075 53.656 0.01 0.011c0.231,0.237 0.414,0.503 0.55,0.785l23.361 48.506c0.055,0.103 0.104,0.21 0.147,0.318zm-17.484 19.553l24.152 11.999 -10.525 -25.246 -13.627 13.247zm-89.186 -154.283l23.701 24.421 39.649 -40.337c1.156,-1.317 2.981,-1.972 4.806,-1.546 5.753,1.343 11.786,1.202 17.486,-0.423 5.482,-1.562 10.66,-4.508 14.989,-8.837 4.124,-4.124 6.992,-9.014 8.604,-14.199 0.62,-1.992 1.056,-4.028 1.309,-6.081l-15.096 15.097c-1.486,1.485 -3.686,1.82 -5.494,1.005l-22.323 -8.105c-1.436,-0.52 -2.481,-1.643 -2.952,-2.98l-9.044 -23.399c-0.721,-1.865 -0.223,-3.9 1.105,-5.229l-0.011 -0.011 15.097 -15.096c-2.053,0.253 -4.089,0.689 -6.081,1.309 -5.186,1.612 -10.076,4.48 -14.2,8.604 -3.986,3.986 -6.797,8.68 -8.433,13.658 -1.707,5.196 -2.155,10.722 -1.344,16.099 0.027,0.177 0.043,0.354 0.051,0.529 0.518,1.684 0.111,3.591 -1.221,4.923l-40.598 40.598zm-110.806 -25.475l40.034 -38.851 -16.117 -16.57c-2.279,-2.343 -5.308,-3.542 -8.351,-3.585 -3.054,-0.044 -6.121,1.066 -8.465,3.34l-22.99 22.311c-2.337,2.273 -3.534,5.293 -3.578,8.327 -0.044,3.044 1.064,6.102 3.333,8.44l16.134 16.588z"/>
                </g>
              </svg>
              <h3 className="text-center text-black text-2xl font-bold century">Solution sur-mesure</h3>
              <hr className="blue"></hr>
              <p className="text-center px-6">Linkweb est à votre écoute pour la définition de
                votre {/*<Link className="text-bleu hover:text-black" to="/creation-site-internet-sur-mesure/">*/}<strong>solution</strong>{/*</Link>*/} en
                fonction de vos besoins.</p>
              <br/>
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
                  <div className="w-9/12 text-left"><a href="#solution-sur-mesure"
                                                       className="text-bleu hover:text-black">Plus d'informations</a>
                  </div>
                </li>
              </ul>
              <div className="w-1/2 mx-auto block">
                <br/>
                {/* <ButtonBlog url="/contact-agence-web-toulouse/" text="Définir votre projet" color="darkgrey" /> */}
                <button
                    className="w-full font-normal roundedButton bg-darkgrey text-white flex justify-center items-center text-xs md:text-sm px-3 lg:px-4 py-4"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/contact-agence-web-toulouse/';
                    }}
                > Définir votre projet
                </button>
              </div>
            </div>
          </section>


          <section className="flex flex-col items-center my-24 century text-center lg:text-left" style={{
            backgroundColor: '#00000094',
            backgroundSize: 'cover',
            backgroundBlendMode: 'overlay',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(' + bureau + ')',
            backgroundPosition: 'center'
          }}>
            <div className="w-full lg:w-3/4 flex justify-around px-12 lg:px-24 mb-8 pt-24 lg:flex-row flex-col">
              <div className="max-w-3xl w-full lg:w-1/2 flex pr-0 lg:pr-32 flex-col mb-12">
                <h3 className="text-6xl text-bleu font-bold">
                  +10 ans
                </h3>
                <h4 className="text-4xl text-white mt-0 lg:-mt-5">d'expérience</h4>

                <p className="text-white font-normal">
                  Depuis 2008, notre <strong>agence à Agen</strong> et <strong>Toulouse</strong> accompagne les
                  professionnels pour développer leur <strong>visibilité sur le Web</strong>.
                </p>
              </div>
              <div className="max-w-3xl w-full lg:w-1/2 flex flex-col pl-0 lg:pl-32">
                <h3 className="text-6xl text-bleu font-bold">
                  +20
                </h3>
                <h4 className="text-4xl text-white mt-0 lg:-mt-5">techniciens</h4>
                <p className="text-white font-normal">
                  Chaque jour, ce sont plus de 20 techniciens qui officient au sein de notre agence web pour rendre
                  nos <strong>sites performants</strong>.
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
                  Notre agence <strong>crée des sites web</strong> pour des professionnels d'horizons parfois très
                  différents : TPE, PME, indépendants, etc.
                </p>
              </div>
              <div className="max-w-3xl w-full lg:w-1/2 pl-0 lg:pl-32 flex flex-col mb-12">
                <h3 className="text-6xl text-bleu font-bold">
                  4.6/5
                </h3>
                <h4 className="text-4xl text-white mt-0 lg:-mt-5">sur Google</h4>
                <p className="text-white font-normal">
                  Nos clients sont satisfaits du travail engagé sur leur <strong>site</strong> par notre agence web.
                  Note basée sur 111 avis.
                </p>
              </div>
            </div>
            <div className="w-2/3 -mt-16 mb-12 century text-center">
              {/* <p className="text-white text-xl"><span className="text-bleu">>></span> Découvrir notre <Link to="/agence-digitale-toulouse/" className="text-white hover:text-bleu font-bold">agence digitale</Link></p> */}
            </div>
          </section>
          <section className=" w-full mx-auto px-4 py-0 my-0">
            <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
              Conduire son <span className="font-bold">projet professionnel</span> avec <span
                className="font-bold">Linkweb</span>
            </h2>
            <hr className="blue"></hr>
            <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center century italic pb-2">Notre
              savoir-faire n’est pas une compétence, il est humain</h3>
          </section>
          <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
            <div className="w-full xl:w-1/3 one px-auto">
              <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
                <section
                    className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                  <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                    <span className="text-bleu">/</span>JE SOUHAITE DYNAMISER MA COMMUNICATION
                  </h3>
                  <div className="century content pb-6 text-left">
                    Faire appel à une <strong><Link to="agence-creation-site-web-toulouse/"
                                                    className="text-bleu font-bold hover:text-black">agence de création
                    web</Link></strong> est une étape à franchir pour <strong>dynamiser sa communication</strong> et
                    définir une <strong>stratégie digitale</strong>.<br/><br/> En effet, il est recommandé de bénéficier d'une
                    expertise pour poursuivre des objectifs bien précis.<br/> <br/><strong>Propulser sa communication en
                    ligne</strong> par <Link to="/agence-marketing-toulouse/"
                                             className="text-bleu hover:text-black font-bold">le <strong>webmarketing
                    (marketing digital)</strong></Link> peut constituer un véritable moteur pour une société. Les
                    agences comme Linkweb constituent un partenaire essentiel pour cela.
                  </div>
                  {/* <Button url="/blog/foire-aux-questions/" text="En savoir plus" position="center" /> */}
                  <button
                      className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/faq/';
                      }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792">
                      <path
                          d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                    </svg>
                    En savoir plus
                  </button>
                </section>
              </div>
            </div>
            <div className="w-full xl:w-1/3 two px-auto">
              <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
                <section
                    className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                  <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                    <span className="text-bleu">/</span>JE SUIS ACCOMPAGNÉ POUR DÉFINIR MA SOLUTION
                  </h3>
                  <div className="century content pb-6 text-left">
                    <strong>Être visible</strong>, booster sa <strong>notoriété</strong> ou bien
                    son <strong>image</strong> (<strong>e-réputation</strong> et <strong>identité de marque</strong>) :
                    il existe des solutions web pour chaque professionnel.<br/><br/> Grâce à nos <strong>expertises</strong>, nous
                    vous accompagnons pour déterminer les <strong>contours de votre stratégie</strong> selon
                    votre <strong>activité</strong> et <strong>vos besoins en termes de communication</strong>.<br/>
                    Une <strong>étude concurrentielle</strong> sera également réalisée.
                  </div>
                  {/* <Button url="/contact-agence-web-toulouse/" text="Être recontacté" position="center" /> */}
                  <button
                      className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/contact-agence-web-toulouse/';
                      }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792">
                      <path
                          d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                    </svg>
                    Être recontacté
                  </button>
                </section>
              </div>
            </div>
            <div className="w-full xl:w-1/3 three px-auto">
              <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
                <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
                <section
                    className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                  <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                    <span className="text-bleu">/</span>JE FAIS LE CHOIX D'EXPERTS POUR MENER MON PROJET
                  </h3>
                  <div className="century content pb-6 text-left" >
                    Nos <strong>consultants en communication web</strong> définissent les contours de votre projet, du
                    choix de l'<strong>hébergement</strong> jusqu'à l’<strong>application de votre stratégie
                    marketing</strong> à travers les différents axes définis.<br/><br/> Notre équipe est composée de spécialistes
                    de la <strong>conception de sites internet</strong>, de <strong>référencement naturel
                    (SEO)</strong> et <strong>Ads</strong> qui font preuve de <strong>réactivité</strong> dans le but de
                    répondre à vos attentes.
                  </div>
                  {/* <Button url="/contact-agence-web-toulouse/" text="Demander un devis" position="center" /> */}
                  <button
                      className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/contact-agence-web-toulouse/';
                      }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792">
                      <path
                          d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                    </svg>
                    Demander un devis
                  </button>
                </section>

              </div>

            </div>
          </section>

          <Partenaires/>


          <section className="w-full mx-auto px-4 py-4 xl:px-48 mt-24 mb-0">
            <h2 /*data-aos='fade-right'*/ className="text-left text-black text-4xl century">
              Création Site internet : <span
                className="font-bold text-black text-left text-4xl century">Un échantillon de nos réalisations</span>
            </h2>
            <hr className="blue"></hr>
            <br/>
          </section>
          <section className="w-full mx-auto px-24 pt-0 pb-0 my-0">
            <CarouselRea/>
          </section>

          <section className=" century w-full mx-auto mt-12 lg:mt-24 px-4 py-0 pt-12 lg:pt-6 my-0">
            <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
              {/*<Link to="/creation-site-internet-toulouse/" className="text-center text-black text-4xl century hover:text-bleu">*/}
              Création de site internet :{/*</Link>*/}
              <span className="font-bold text-center text-black text-4xl"> Vous avez un besoin ?</span>

            </h2>
            <hr className="blue"></hr>
            <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center century italic pb-0">Nous sommes
              proactifs.</h3><br/>
          </section>
          <section className="tabPanel flex flex-1 w-full justify-end ml-0">
            <div className="w-full md:w-3/4 py-0 flex justify-end">
              <Accordion>
                <div className="w-full" label="UNE AUGMENTATION DE VOS CONTACTS PROSPECTS ?">
                  <p><span className="font-bold">Vous souhaitez développer la <strong><Link
                      to="/agence-de-communication-digitale/" className="text-bleu hover:text-black font-bold">stratégie de communication digitale</Link></strong> de votre société ? Développer la vente de vos produits ?</span><br/><br/> Le <strong>retour
                    sur investissement</strong> fait partie des objectifs communs à tous chefs d’entreprise. Trouver de
                    nouveaux prospects potentiels nécessite de pouvoir être trouvé en ligne grâce au web marketing.
                    C'est votre présence en ligne et sur les moteurs de recherche qui permettra de propulser <strong>votre
                      site</strong> au premier plan. Le contenu que vous allez proposer sur <strong>votre
                      site</strong> doit donner envie aux divers acteurs (entreprises, associations, organismes) de
                    travailler avec vous.<br/><br/> Par ailleurs, le contenu n'est pas la seule clé pour rendre votre
                    site performant. En effet, un <span className="font-bold"><strong>webdesign</strong> adapté</span>,
                    une <span className="font-bold"><strong>expérience utilisateur</strong> (<strong>UX Design</strong>) et des <strong>outils digitaux</strong> bien construits</span> vous
                    permettront de <strong>créer un site internet</strong> efficace.<br/><br/> Le <strong>site
                      internet</strong> est un parfait outil pour <strong>dynamiser sa communication
                      d’entreprise</strong> tout en la maîtrisant. Au-delà des objectifs d'image, le site internet vous
                    permettra de gagner en visibilité pour atteindre vos cibles et obtenir des contacts qualifiés. De ce
                    point de vue, notre <strong>agence web</strong> vous apporte toute l'expertise dont vous avez besoin
                    pour mener votre stratégie digitale en France. Notre méthode de travail vous permettra d'atteindre
                    vos objectifs grâce à la mise en place et la mise en application de <strong>projets en
                      ligne</strong> efficaces.<br/><br/> <span className="font-bold">En faisant le choix de <strong>nos solutions</strong>, notre <strong>agence de création</strong> vous propose, de part nos compétences en <strong>référencement et développement web</strong>, un <strong>conseil en communication</strong> afin de parvenir aux objectifs fixés lors de la <strong>refonte</strong> ou de la <strong>création de votre site</strong> vitrine ou <strong>site marchand</strong>. Enfin, les agences SEO comme Linkweb sont en mesure de vous fournir une solution sur-mesure répondant aux besoins de votre société, mais aussi du marché sur lequel vous souhaitez vous inscrire.</span>
                  </p>
                </div>
                <div label="UNE PRÉSENCE EN PREMIÈRE PAGE DE RÉSULTATS DES MOTEURS ?">
                  <p>Pour atteindre la <span className="font-bold">meilleure visibilité possible</span>, nous accordons
                    une importance toute particulière la <strong>qualité de vos contenus</strong> et de chaque média
                    présents sur votre site. <strong>Être visible</strong> ne se limite pas uniquement compte du critère
                    quantitatif. Pour les agences comme Linkweb, il s'agit de vous rendre accessible auprès <span
                        className="font-bold">d'<strong>utilisateurs qualifiés</strong> qui seront plus à même de répondre à vos attentes</span>. <br/><br/>Dès
                    la <strong>conception du site</strong>, nous élaborons une <strong>stratégie de référencement
                      naturel SEO</strong> qui, grâce au travail de nos référenceurs certifiés Google, répondra
                    aux <strong>critères de qualité</strong> pour vous permettre d'obtenir une <span
                        className="font-bold">présence pérenne en <strong>première page sur des requêtes pertinentes</strong></span>.<br/><br/>Pour
                    des résultats rapides, nous collaborons pour définir votre <strong>campagne Adwords</strong> : nous
                    planifions votre <strong>plan publicitaire</strong> pour une <span className="font-bold"><strong>visibilité immédiate sur les mots clés les plus recherchés</strong></span> dans
                    le but de vous apporter un <strong>retour concret sur votre investissement</strong> grâce au
                    référencement. Bien sûr, nous travaillons pour vous proposer une interface intuitive (compatible
                    pour le mobile, comme pour chaque taille d'écran), adaptée à <strong>votre identité graphique et
                      visuelle</strong> ainsi qu'à votre vision.</p>
                </div>
                <div label="UN ACCROISSEMENT DE VOTRE CHIFFRE D'AFFAIRES ?">
                  <p><span className="font-bold">Accroître le chiffre d'affaires de son entreprise en France grâce au Web ? C'est possible !</span><br/><br/>
                    En mettant en place une <strong>stratégie digitale</strong> cohérente et pertinente vous aurez
                    l'occasion de développer la <strong>communication en ligne</strong> de votre société via le canal le
                    plus consulté en France et dans le monde : Internet.<br/><br/>Un plan de communication construit
                    pour convertir vous permettra de <span className="font-bold">développer le chiffre d’affaires de votre société</span> avec
                    un <strong>projet web</strong> marketing personnalisé.
                    <br/><br/><strong>Avoir un site</strong> professionnel est un <span className="font-bold">gage de confiance vis-à-vis de vos prospects</span> (entreprises
                    et organismes ciblés). Faire appel à une <strong>agence de communication
                      digitale</strong> spécialisée dans la <strong>création de site internet</strong> pour développer
                    un outil rentable est conseillé : ce choix vous permettra d'accéder à <span className="font-bold">une solution construite à partir de vos besoins, mais aussi en corrélation avec ceux de vos prospects pour des stratégies <strong>digitales</strong> optimales.</span> Les
                    agences comme Linkweb en France établissent un projet pour vous permettre d'obtenir un retour sur
                    investissement grâce au marketing digital.</p>
                </div>
                <div label="LA CRÉATION DE VOTRE IMAGE DE MARQUE ?">
                  <p>Linkweb fait partie des <strong>agences en France</strong> qui définissent des <span
                      className="font-bold">stratégies en parfait accord avec les projets des professionnels</span>.
                    Nous mettons le <strong>digital au coeur de votre stratégie</strong> pour vous permettre de
                    poursuivre des objectifs de positionnement, mais également de branding.

                    <br/><br/>En effet, la <span
                        className="font-bold"><strong>formation de votre image de marque</strong></span> passe avant
                    tout par une interconnexion entre chaque media (réseaux sociaux, site internet, newsletter, etc.)
                    dont vous disposez. Notre entreprise est <span className="font-bold">spécialisée dans les <strong>problématiques du digital</strong></span> (de
                    la mise en place d'interface mobile au développement du web design de vos sites internet) et vous
                    apporte un conseil pertinent ainsi qu'un accompagnement personnalisé en fonction de vos besoins et
                    de votre activité.

                    <br/><br/>Les <strong>agences comme Linkweb en France</strong> ont pour ambition de <span
                        className="font-bold">conduire vos projets jusqu'au succès</span>, que ce soit en termes
                    d’<strong>image</strong>, de <strong>visibilité</strong>, mais également
                    de <strong>conversion</strong>.</p>
                </div>
              </Accordion>
            </div>
          </section>

          <section
              className="w-full flex my-12 flex-col lg:flex-row text-white bg-bleu century text-center lg:text-justify px-4 lg:px-16 xl:px-48 py-16">
            <div className="w-full lg:w-8/12 text-xl lg:text-3xl">
              <h3>Vous désirez mener un <span className="font-bold">projet similaire</span> avec notre agence web à
                Toulouse ?</h3>
              <h4>Linkweb définit votre projet en accord avec vos <span className="font-bold">ambitions</span>.</h4>
            </div>
            <div className="w-1/2 mx-auto block lg:w-3/12">
              {/* <RoundButton className="items-center" color="darkgrey" text="Contactez-nous" url="/contact-agence-web-toulouse/" /> */}
              <button
                  className="font-light mx-auto roundedButton bg-darkgrey text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4"
                  type="button"
                  formTarget="_blank"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/contact-agence-web-toulouse/';
                  }}
              >CONTACTEZ-NOUS
              </button>
            </div>
          </section>

          <section className=" w-full bg-white mx-auto px-24  py-2 mt-6 mb-2">
            <h2 className="text-xl md:text-3xl mx-auto text-center">Agence Web à <span className="font-bold">Toulouse</span> et <span className="font-bold">Agen</span></h2>
            <hr className="blue"></hr>
            <section className='flex justify-center items-start '>
              <div className='w-full md:w-1/3 lg:w-1/3 miniList px-4'>
                <LastPostList lastposts={this.props.data.lastList.edges}/>
              </div>
              <div className='w-full md:w-1/3 lg:w-1/3 pt-8'>
                <div className="w-full flex flex-col items-end pt-10 bg-white   text-center text-black text-4xl century relative" >
                  <div className="w-2/3 flex flex-row justify-start mx-auto">
                    <div className="w-2/12 flex items-center">
                      <svg width="25px" viewBox="0 0 1152.7139 1440.550375"><g transform="translate(27692.221,9619.4771)"><path  d="" fill="#37cfee"/><path d="m -27169.027,-8468.7794 c -109.212,-10.8404 -207.531,-48.9146 -293.707,-113.7383 -130.593,-98.2354 -211.705,-244.0654 -227.509,-409.0334 -3.702,-38.636 -2.09,-95.627 3.849,-136.161 28.578,-195.028 157.009,-363.429 338.035,-443.236 45.521,-20.069 99.233,-35.579 147.913,-42.712 52.931,-7.756 116.244,-7.756 169.175,0 195.027,28.578 363.428,157.009 443.236,338.035 20.068,45.521 35.578,99.233 42.711,147.913 7.756,52.931 7.756,116.244 0,169.175 -21.971,149.942 -103.984,287.0324 -226.113,377.9607 -85.78,63.8664 -184.115,101.4195 -292.848,111.8359 -23.892,2.2889 -81.506,2.2675 -104.742,-0.039 z m -18.082,-392.4707 0,-60.625 71.25,0 71.25,0 0,60.625 0,60.625 57.5,0 57.5,0 0,-111.25 0,-111.25 37.5,0 c 20.625,0 37.5,-0.466 37.5,-1.035 0,-1.573 -123.935,-125.215 -125.511,-125.215 -0.755,0 -31.708,-30.34 -68.786,-67.422 l -67.413,-67.422 -130.395,129.456 c -71.717,71.201 -130.395,129.947 -130.395,130.547 0,0.6 17.156,1.091 38.125,1.091 l 38.125,0 0,111.25 0,111.25 56.875,0 56.875,0 0,-60.625 z" fill="#37cfee"/></g></svg>
                    </div>
                    <div className="w10/12">
                      <h3 className="lg:text-xl text-lg">10 rue Albert Ferrasse, 47550 Boé (près d'Agen)</h3>
                      <hr className="blue"/>
                      <h3 className="lg:text-xl text-lg">44 rue de Bayard, 31000 Toulouse</h3>
                    </div>
                  </div>
                  <div className="w-2/3 flex flex-row my-8 justify-start mx-auto">
                    <div className="w-2/12">
                      <svg width="30px" viewBox="0 0 333 416.25"><g><path fill="#37cfee" className="fil0" d="M167 33c73,0 133,60 133,134 0,73 -60,133 -133,133 -74,0 -134,-60 -134,-133 0,-74 60,-134 134,-134zm58 212l22 -22c0,0 3,-7 -2,-13 -5,-5 -32,-19 -32,-19 0,0 -6,-4 -13,4 -8,7 -7,7 -7,7 0,0 -4,3 -9,1 -19,-10 -44,-35 -54,-54 -2,-4 1,-8 1,-8 0,0 0,0 8,-7 7,-8 3,-14 3,-14 0,0 -13,-27 -19,-32 -6,-5 -13,-1 -13,-1l-21 21c-24,49 88,161 136,137z"/></g></svg>
                    </div>
                    <div className="w-10/12">
                      <h3 className="text-lg lg:text-xl text-left"><a className="text-bleu hover:text-black" href="tel:0533950030">05 33 95 00 30</a></h3>
                    </div>
                  </div>
                  <div className="w-2/3 flex flex-row my-8 justify-start mx-auto">
                    <div className="w-2/12">
                      <svg width="30px" viewBox="0 0 100 125"><path fill="#37cfee" d="M91.462,32.483c-2.267-5.358-5.511-10.17-9.644-14.303c-4.132-4.132-8.943-7.376-14.303-9.643  C61.967,6.191,56.074,5.001,50,5.001s-11.968,1.19-17.516,3.537c-5.358,2.267-10.171,5.511-14.303,9.643  c-4.133,4.132-7.377,8.944-9.644,14.303C6.191,38.032,5.002,43.925,5.002,50c0,6.075,1.189,11.967,3.536,17.516  c2.267,5.357,5.511,10.17,9.644,14.303c4.132,4.131,8.944,7.375,14.303,9.643c5.548,2.346,11.441,3.537,17.516,3.537  s11.967-1.191,17.516-3.537c5.359-2.268,10.171-5.512,14.303-9.643c4.133-4.133,7.377-8.945,9.644-14.303  c2.347-5.549,3.536-11.441,3.536-17.516C94.998,43.925,93.809,38.032,91.462,32.483z M77.414,66.063  c0,0.201-0.164,0.363-0.365,0.363H22.951c-0.201,0-0.364-0.162-0.364-0.363v-20.91c0-0.131,0.069-0.25,0.182-0.316  c0.112-0.064,0.251-0.064,0.364,0L50,60.295l26.867-15.458c0.113-0.064,0.252-0.064,0.364,0c0.112,0.066,0.183,0.186,0.183,0.316  V66.063z M77.414,38.708c0,0.13-0.07,0.251-0.184,0.315L50.182,54.588c-0.057,0.031-0.119,0.049-0.182,0.049  s-0.125-0.018-0.182-0.049L22.77,39.023c-0.113-0.064-0.183-0.186-0.183-0.315v-4.771c0-0.201,0.163-0.364,0.364-0.364h54.098  c0.201,0,0.365,0.163,0.365,0.364V38.708z"/></svg>
                    </div>
                    <div className="w-10/12">
                      <h3 className="text-lg lg:text-xl text-left"><a className="text-bleu hover:text-black" href="mailto:contact@linkweb.fr">contact@linkweb.fr</a></h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3 lg:w-1/3  px-4' style={{minHeight:'550px'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCPh6TRRONtNAdF-ZTswCzJIgXjWoK7VTQ" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}/>
              </div>
            </section>

          </section>
     {/*     <SimpleMap/>*/}

          {/* </PageTransition> */}
        </Layout>

    );
  }
}


export const query = graphql`
query lastsMiniHome {
    lastList: allWpPost(limit: 3) {
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

export default IndexPage;
