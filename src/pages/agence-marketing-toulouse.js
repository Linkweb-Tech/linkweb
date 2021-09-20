import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
// import PageTransition from "gatsby-plugin-page-transitions";


import RoundButtonAccueilMail from "../components/roundButtonAccueilMail";
import RoundButton from "../components/roundButton";

import Accordion from "../components/accordion";
import SEO from "../components/seo";
import SimpleMap from "../components/simpleMap";
import "../scss/blochover.scss";
import "../scss/carousel.scss";

import mac from "../images/agence-web-design-linkweb.jpg";
import stars from '../images/stars.png';
import arriereplan from "../images/bg-choisir-agence-communication-web.jpg";
import siteinternet from "../images/agence-web-specialisee.jpg";
import referencement from "../images/agence-communication-globale.jpg";
import webdesign from "../images/freelance.jpg";




class AgenceMarketingToulouse extends Component {

  render() {
    return (
      <Layout location={this.props.location}>

        <SEO
          title="Agence Marketing Toulouse - Développez votre projet sur-mesure fonctionnel"
          description="Développer un projet web sur-mesure nécessite d'être accompagné par des professionnels du web marketing."
          url="https://linkweb.fr/agence-marketing-toulouse/"
          nom="Agence Marketing Toulouse"
          slug="agence-marketing-toulouse/"
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

        <section className="flex items-center justify-start w-full mx-auto pb-0 my-32 md:my-42 lg:my-42 xl:my-48 px-4 py-6 bg-black flex flex-col justify-center items-center" style={{ background: '#000000ad url(' + arriereplan + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="max-w-6xl mx-auto lg:mx-56 py-2 w-full flex-col items-end">
            <div className="w-full lg:w-3/5 flex justify-center lg:justify-start">
              <h1 className="text-5xl my-10 font-bold text-center lg:text-left text-white century leading-tight">Que fait notre <span className="text-bleu">agence marketing</span> à Toulouse ?</h1>
            </div>
            <br />
            <h2 className="flex mb-16 full lg:w-3/5 text-white justify-center lg:justify-start mx-auto lg:mx-0 text-xl  century text-center lg:text-left p-1 uppercase -mt-12">LINKWEB ACCOMPAGNE LES PROFESSIONNELS SOUHAITANT DÉVELOPPER LEUR PROJET INTERNET ET ATTIRER DE NOUVEAUX CLIENTS GRÂCE AU RÉFÉRENCEMENT ET À LA COMMUNICATION WEB</h2>
            {/*<SmallTitle className="flex flex-1 smalltitle text-white justify-center lg:justify-start century px-2" pose={this.state.isOpen ? 'open' : 'closed'}>Connectez-vous avec le reste du monde</SmallTitle>*/}

          </div>
        </section>
        <section className="w-full flex justify-end -mt-0 lg:-mt-32">
          <div className="w-11/12 lg:w-1/3 bg-bleu shadow-2xl -mt-0 lg:-mt-64 flex flex-col justify-end mx-12 lg:mx-24">
            <h2 className="flex text-white justify-center text-3xl lg:text-4xl century text-center mt-12"><span className="font-bold">Vous souhaitez développer un projet web en France ?</span></h2>
            <br />
            <p className="px-8 lg:px-16 text-white text-center century text-md">Linkweb vous accompagne de la conception à la mise en application de votre <strong className="font-normal"><Link to="/strategie-digitale-toulouse/" className="text-black hover:text-white font-bold">stratégie digitale à Toulouse</Link></strong>. Dès le lancement de votre projet, l'équipe d'experts de notre <Link to="/agence-creation-site-web-toulouse/" className="text-black hover:text-white font-bold">agence de création de site web</Link> est à votre écoute pour mettre en place une <strong className="font-normal">solution</strong> qui vous ressemble.</p>
            <br />
            <div className="w-full lg:w-1/2 flex justify-center mx-auto block mb-10">
              <button
                className="font-light mx-auto roundedButton bg-darkgrey text-white hover:text-white flex mt-10 justify-center century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 "
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/contact-agence-web-toulouse/';
                }}
              >Contactez-nous</button>
              {/* <RoundButtonAccueilMail url="/contact-agence-web-toulouse/" color="darkgrey" text="Je demande un devis" /> */}
            </div>
          </div>
        </section>
        <section className="w-full lg:w-3/5 px-10 mt-16 lg:-mt-48 mb-16 lg:mb-48">
          <br />
          <h3 className="century text-xl text-center">
            Linkweb fait partie des <Link to="/agence-web-haute-garonne/" className="text-bleu hover:text-black font-bold">agences web en Haute-Garonne</Link> qui ont un rôle de conseil en stratégie marketing et apportent des solutions concrètes pour votre entreprise.
                    </h3>
        </section>
        <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
          <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Vous apporter une solution fonctionnelle pour obtenir de la visibilité et développer votre notoriété</h2>
          <br />
          <div className="line-title my-4">
            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
            <br />
            <h3 /*data-aos='fade-left'*/ className="max-w-7xl text-xl text-black text-center lg:text-justify century pb-0">Notre rôle, en tant qu’<a href="/" className="text-bleu hover:text-black font-bold">agence web à Toulouse</a>, consiste à mettre en place une stratégie de webmarketing parfaitement adaptée en fonction de vos attentes et de vos besoins.</h3>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row mx-8 lg:mx-24 my-0 items-center lg:justify-center">
          <div data-aos="fade-in" className=" w-full lg:w-3/12 md:w-1/2 bg-white my-4 border border-darkgrey mx-10 hover:shadow-xl py-6 century" style={{ borderRadius: '15px', borderColor: '#d4d4d4', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
            <svg width="40px" className="svgtransform mx-auto block" viewBox="12.938 70.193 487.061 465.68874999999997"><g><path fill="#37cfee" d="M499.811,74.173c-0.011-2.202-1.799-3.98-4-3.98H135.94c-2.209,0-3.999,1.791-3.999,4v70.337   c0,0.003-0.001,0.006-0.001,0.01s0.001,0.006,0.001,0.01v72.281c-1.976-0.103-3.965-0.157-5.967-0.157   c-33.125,0-62.967,14.323-83.661,37.1c-0.173,0.162-0.328,0.34-0.471,0.53c-17.961,20.019-28.905,46.456-28.905,75.405   c0,28.943,10.939,55.375,28.893,75.392c0.146,0.197,0.307,0.38,0.485,0.547c20.693,22.775,50.534,37.096,83.657,37.096   c33.116,0,62.953-14.3,83.655-37.047c0.249-0.224,0.478-0.468,0.664-0.747c6.789-7.592,12.568-16.102,17.127-25.32h268.579   c2.209,0,4-1.791,4-4V112.869L499.811,74.173z M491.83,78.193l0.169,34.695v27.652H139.94l0-62.347H491.83z M230.826,336.737   c-0.027,0.404-0.05,0.809-0.081,1.212c-0.044,0.567-0.098,1.131-0.151,1.695c-0.031,0.331-0.06,0.663-0.094,0.994   c-0.063,0.611-0.136,1.219-0.21,1.827c-0.034,0.278-0.066,0.556-0.101,0.833c-0.084,0.65-0.177,1.297-0.273,1.943   c-0.034,0.227-0.067,0.454-0.102,0.68c-0.107,0.687-0.221,1.371-0.341,2.053c-0.031,0.177-0.062,0.354-0.094,0.531   c-0.132,0.727-0.271,1.451-0.418,2.173c-0.024,0.117-0.048,0.234-0.072,0.35c-0.162,0.783-0.331,1.563-0.511,2.339   c-0.006,0.026-0.012,0.053-0.019,0.079c-3.957,17.051-12.082,32.522-23.237,45.283h-47.846c4.839-19.064,7.468-42.21,7.744-65.022   h65.963c-0.019,0.508-0.035,1.017-0.061,1.525C230.896,335.736,230.859,336.236,230.826,336.737z M46.868,260.688h47.897   c-4.825,19.064-7.445,42.209-7.72,65.021H21.022C21.957,300.876,31.549,278.222,46.868,260.688z M165.02,325.709   c-0.276-22.812-2.904-45.957-7.743-65.021h47.846c15.327,17.534,24.925,40.188,25.86,65.021H165.02z M95.044,325.709   c0.294-25.694,3.406-47.972,7.998-65.021h45.952c4.609,17.05,7.732,39.328,8.028,65.021H95.044z M157.021,333.709   c-0.295,25.694-3.419,47.972-8.028,65.022h-45.952c-4.592-17.05-7.704-39.328-7.998-65.022H157.021z M155.041,252.688   c-3.425-11.13-7.709-20.404-12.812-26.756c21.094,3.287,40.126,12.87,55.117,26.756H155.041z M146.599,252.688h-41.171   c5.853-17.727,13.399-28.014,20.547-28.014C133.149,224.674,140.724,234.96,146.599,252.688z M96.994,252.688H54.64   c14.993-13.896,34.032-23.483,55.133-26.764C104.683,232.276,100.41,241.553,96.994,252.688z M87.045,333.709   c0.275,22.813,2.896,45.958,7.72,65.022H46.869c-15.319-17.535-24.912-40.189-25.847-65.022H87.045z M96.994,406.731   c3.416,11.134,7.689,20.411,12.779,26.763c-21.1-3.281-40.139-12.867-55.132-26.763H96.994z M105.427,406.731h41.171   c-5.875,17.727-13.449,28.013-20.624,28.013C118.826,434.744,111.28,424.458,105.427,406.731z M155.041,406.731h42.304   c-14.99,13.885-34.023,23.468-55.116,26.755C147.332,427.135,151.616,417.861,155.041,406.731z M231.04,371.63   c2.484-6.252,4.388-12.648,5.722-19.156c0.002-0.009,0.004-0.019,0.006-0.029c0.18-0.88,0.35-1.762,0.508-2.646   c0.013-0.072,0.026-0.143,0.038-0.215c0.147-0.825,0.284-1.652,0.412-2.481c0.019-0.122,0.038-0.244,0.057-0.367   c0.118-0.78,0.227-1.561,0.329-2.343c0.022-0.168,0.044-0.335,0.066-0.503c0.093-0.739,0.177-1.48,0.255-2.222   c0.022-0.207,0.045-0.414,0.066-0.621c0.07-0.705,0.132-1.411,0.189-2.118c0.02-0.242,0.042-0.483,0.06-0.725   c0.051-0.683,0.092-1.368,0.131-2.053c0.015-0.261,0.033-0.522,0.046-0.783c0.034-0.69,0.057-1.381,0.079-2.072   c0.008-0.255,0.021-0.509,0.027-0.765c0.023-0.939,0.036-1.88,0.036-2.822c0-0.93-0.013-1.858-0.035-2.786   c-0.008-0.334-0.024-0.665-0.035-0.998c-0.02-0.591-0.039-1.183-0.068-1.773c-0.019-0.396-0.046-0.791-0.069-1.186   c-0.031-0.524-0.062-1.047-0.1-1.57c-0.031-0.42-0.067-0.838-0.103-1.257c-0.042-0.498-0.085-0.995-0.133-1.492   c-0.041-0.423-0.087-0.844-0.133-1.265c-0.054-0.496-0.11-0.992-0.171-1.487c-0.05-0.408-0.103-0.815-0.157-1.222   c-0.069-0.517-0.141-1.034-0.218-1.549c-0.055-0.374-0.112-0.747-0.171-1.12c-0.089-0.565-0.184-1.13-0.281-1.693   c-0.055-0.315-0.109-0.63-0.166-0.943c-0.119-0.655-0.246-1.307-0.376-1.959c-0.043-0.216-0.085-0.433-0.13-0.648   c-0.169-0.817-0.347-1.632-0.534-2.444c-0.01-0.045-0.02-0.09-0.03-0.135c-4.36-18.872-13.53-36.405-26.868-50.92   c-14.275-15.535-32.39-26.606-52.326-32.273c-0.042-0.012-0.083-0.024-0.125-0.036c-1.646-0.466-3.303-0.895-4.973-1.286   c-0.171-0.04-0.341-0.082-0.512-0.122c-2.592-0.595-5.21-1.1-7.852-1.512c-0.49-0.076-0.982-0.145-1.473-0.215   c-0.696-0.099-1.388-0.218-2.088-0.305l0-68.973h352.059v223.09H231.04z" /><path fill="#37cfee" d="M185.225,124.736c8.491,0,15.399-6.908,15.399-15.398c0-8.459-6.908-15.341-15.399-15.341   c-8.459,0-15.341,6.882-15.341,15.341C169.884,117.828,176.766,124.736,185.225,124.736z M185.225,101.997   c4.08,0,7.399,3.293,7.399,7.341c0,4.079-3.319,7.398-7.399,7.398c-4.048,0-7.341-3.319-7.341-7.398   C177.884,105.222,181.108,101.997,185.225,101.997z" /><path fill="#37cfee" d="M261.857,124.736c8.494,0,15.405-6.908,15.405-15.398c0-8.459-6.911-15.341-15.405-15.341   c-8.491,0-15.399,6.882-15.399,15.341C246.458,117.828,253.366,124.736,261.857,124.736z M261.857,101.997   c4.083,0,7.405,3.293,7.405,7.341c0,4.079-3.322,7.398-7.405,7.398c-4.08,0-7.399-3.319-7.399-7.398   C254.458,105.29,257.777,101.997,261.857,101.997z" /><path fill="#37cfee" d="M338.496,124.736c8.456,0,15.335-6.908,15.335-15.398c0-8.459-6.879-15.341-15.335-15.341   c-8.494,0-15.405,6.882-15.405,15.341C323.091,117.828,330.002,124.736,338.496,124.736z M338.496,101.997   c4.113,0,7.335,3.225,7.335,7.341c0,4.079-3.29,7.398-7.335,7.398c-4.083,0-7.405-3.319-7.405-7.398   C331.091,105.29,334.413,101.997,338.496,101.997z" /><path fill="#37cfee" d="M419.925,194.432H259.551c-2.209,0-4,1.791-4,4s1.791,4,4,4h160.374c2.209,0,4-1.791,4-4S422.134,194.432,419.925,194.432z   " /><path fill="#37cfee" d="M419.925,261.972H272.699c-2.209,0-4,1.791-4,4s1.791,4,4,4h147.226c2.209,0,4-1.791,4-4S422.134,261.972,419.925,261.972z   " /><path fill="#37cfee" d="M419.925,329.448H319.612c-2.209,0-4,1.791-4,4s1.791,4,4,4h100.313c2.209,0,4-1.791,4-4S422.134,329.448,419.925,329.448z   " /></g></svg>
            <h3 className="text-center text-2xl text-black font-bold century">Développement de site internet</h3>
            <hr className="blue"></hr>
            <p className="text-center px-6 text-md"><strong className="font-normal">Site internet vitrine</strong>, <strong className="font-normal">e-commerce</strong> ou administrable, <strong className="font-normal">Linkweb</strong> développe un outil de <strong className="font-normal">communication digitale</strong> en fonction de vos besoins.</p>
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

            </ul>
            <div className="w-1/2 mx-auto block">
              <br />
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
          <div data-aos="fade-in" data-aos-delay="300" className=" w-full md:w-1/2 lg:w-3/12 bg-white my-12 border border-darkgrey mx-8 hover:shadow-xl py-6 century" style={{ borderRadius: '15px', borderColor: '#d4d4d4', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
            <svg className="svgtransform mx-auto block" width="40px" viewBox="0 0 48 60"><g><polygon fill="#37cfee" points="47,47 1,47 1,1 3,1 3,45 47,45  " /><g><path fill="#37cfee" d="M15.9,47H7.4V33h8.4V47z M9.4,45h4.4V35H9.4V45z" /><path fill="#37cfee" d="M28.7,47h-8.4V23h8.4V47z M22.3,45h4.4V25h-4.4V45z" /><path fill="#37cfee" d="M41.6,47h-8.4V13h8.4V47z M35.1,45h4.4V15h-4.4V45z" /></g><g><path fill="#37cfee" d="M10.4,26.2l-0.9-1.8c6.4-3.1,14-10.1,18.6-17l1.7,1.1C25.1,15.7,17.1,23,10.4,26.2z" /><g><polygon fill="#37cfee" points="24.4,6 32.8,10.9 31,4.2    " /></g></g></g></svg>
            <h3 className="text-center text-black text-2xl font-bold century">Référencement</h3>
            <hr className="blue"></hr>
            <p className="text-center px-6">Nous définissons et appliquons des <strong className="font-normal">techniques de référencement web</strong> adaptées pour <strong className="font-normal">générer du trafic</strong> sur votre site.</p>
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
                <div className="w-9/12 text-left">Rédaction de contenu SEO</div>
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
                <div className="w-9/12 text-left">Campagne Ads (publicité)</div>
              </li>
            </ul>
            <div className="w-1/2 mx-auto block">
              <br />
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
          <div data-aos="fade-in" data-aos-delay="700" className=" w-full md:w-1/2 lg:w-3/12 bg-white my-12 border border-grey mx-8 hover:shadow-xl py-6 century" style={{ borderRadius: '15px', borderColor: '#d4d4d4', transform: 'translateZ(0) scale(1)', transition: '0.3s' }}>
            <svg width="40px" className="svgtransform mx-auto block" viewBox="0 0 280 350" x="0px" y="0px"><defs></defs><g><path fill="#37cfee" className="fil0" d="M84.998 219.434c-0.016,-0.076 -0.03,-0.153 -0.042,-0.23l-0.018 -0.098c-0.397,-2.118 0.634,-4.173 2.412,-5.174l40.349 -41.05 -24.108 -24.84 -40.292 40.292c-0.77,2.316 -3.162,3.75 -5.618,3.261l-0.384 -0.074c-0.112,-0.017 -0.223,-0.037 -0.334,-0.061 -5.385,-0.96 -10.952,-0.645 -16.214,0.946 -5.289,1.598 -10.275,4.492 -14.461,8.678 -4.124,4.124 -6.992,9.014 -8.604,14.199 -0.62,1.992 -1.056,4.029 -1.309,6.082l15.097 -15.097 0.01 0.01c1.329,-1.327 3.365,-1.825 5.229,-1.104l23.4 9.044c1.337,0.471 2.459,1.515 2.98,2.952l8.104 22.322c0.815,1.808 0.481,4.008 -1.005,5.494l-15.097 15.097c2.054,-0.254 4.09,-0.69 6.082,-1.309 5.185,-1.612 10.075,-4.48 14.199,-8.604 4.156,-4.156 7.036,-9.08 8.64,-14.293 1.639,-5.327 1.967,-10.977 0.984,-16.443zm128.991 -18.803l-142.787 -147.114 -13.131 12.77 142.788 147.114 13.13 -12.77zm-138.498 -151.285l142.787 147.114 9.456 -9.196 -83.481 -86.016c-0.149,-0.118 -0.293,-0.246 -0.431,-0.383 -0.174,-0.175 -0.332,-0.358 -0.475,-0.55l-58.396 -60.17 -9.46 9.201zm121.078 168.226l-142.787 -147.114 -8.823 8.581 142.783 147.119 8.827 -8.586zm38.45 33.987l16.736 -16.248 -20.677 -42.935 -38.336 37.267 42.277 21.916zm23.156 -16.7l15.282 36.651c0.634,1.528 -0.09,3.28 -1.617,3.914 -0.868,0.36 -1.808,0.282 -2.575,-0.133l-34.86 -17.319c-0.069,-0.03 -0.137,-0.062 -0.204,-0.096l-47.891 -24.826c-0.331,-0.17 -0.617,-0.394 -0.852,-0.655l-50.933 -52.479 -39.513 40.199c0.774,6.226 0.229,12.591 -1.632,18.641 -2.073,6.735 -5.76,13.062 -11.059,18.361 -5.272,5.272 -11.551,8.946 -18.229,11.023 -6.909,2.147 -14.246,2.57 -21.336,1.267 -2.66,-0.487 -4.422,-3.039 -3.935,-5.699 0.187,-1.017 0.674,-1.902 1.355,-2.58l-0.011 -0.011 20.877 -20.878 -6.403 -17.636 -18.469 -7.139 -20.829 20.829c-1.919,1.919 -5.029,1.919 -6.948,0 -0.836,-0.836 -1.308,-1.901 -1.415,-2.993 -1.213,-6.965 -0.767,-14.156 1.34,-20.934 2.077,-6.679 5.751,-12.958 11.023,-18.229 5.367,-5.368 11.769,-9.08 18.567,-11.135 5.974,-1.806 12.252,-2.33 18.401,-1.571l40.439 -40.44 -58.161 -59.927 -0.049 -0.053 -0.044 -0.043 -18.217 -18.73c-3.419,-3.523 -5.087,-8.117 -5.021,-12.682 0.066,-4.576 1.866,-9.125 5.383,-12.546l22.99 -22.311c3.527,-3.423 8.131,-5.094 12.706,-5.028 4.585,0.066 9.144,1.869 12.57,5.39l18.205 18.718 0.027 0.029 0.02 0.019 57.504 59.251 38.738 -38.737c-0.8,-6.487 -0.17,-13.122 1.891,-19.394 2.116,-6.439 5.721,-12.481 10.813,-17.573 5.271,-5.271 11.551,-8.945 18.23,-11.022 6.777,-2.108 13.968,-2.554 20.933,-1.34 1.093,0.107 2.157,0.578 2.993,1.415 1.919,1.918 1.919,5.029 0,6.947l-20.828 20.829 7.139 18.47 17.636 6.403 20.877 -20.878 0.011 0.011c0.678,-0.68 1.563,-1.168 2.58,-1.354 2.66,-0.488 5.212,1.274 5.7,3.934 1.302,7.09 0.879,14.428 -1.268,21.336 -2.077,6.679 -5.751,12.958 -11.023,18.229 -5.543,5.544 -12.194,9.321 -19.249,11.332 -6.397,1.823 -13.124,2.186 -19.655,1.088l-38.147 38.809 52.075 53.656 0.01 0.011c0.231,0.237 0.414,0.503 0.55,0.785l23.361 48.506c0.055,0.103 0.104,0.21 0.147,0.318zm-17.484 19.553l24.152 11.999 -10.525 -25.246 -13.627 13.247zm-89.186 -154.283l23.701 24.421 39.649 -40.337c1.156,-1.317 2.981,-1.972 4.806,-1.546 5.753,1.343 11.786,1.202 17.486,-0.423 5.482,-1.562 10.66,-4.508 14.989,-8.837 4.124,-4.124 6.992,-9.014 8.604,-14.199 0.62,-1.992 1.056,-4.028 1.309,-6.081l-15.096 15.097c-1.486,1.485 -3.686,1.82 -5.494,1.005l-22.323 -8.105c-1.436,-0.52 -2.481,-1.643 -2.952,-2.98l-9.044 -23.399c-0.721,-1.865 -0.223,-3.9 1.105,-5.229l-0.011 -0.011 15.097 -15.096c-2.053,0.253 -4.089,0.689 -6.081,1.309 -5.186,1.612 -10.076,4.48 -14.2,8.604 -3.986,3.986 -6.797,8.68 -8.433,13.658 -1.707,5.196 -2.155,10.722 -1.344,16.099 0.027,0.177 0.043,0.354 0.051,0.529 0.518,1.684 0.111,3.591 -1.221,4.923l-40.598 40.598zm-110.806 -25.475l40.034 -38.851 -16.117 -16.57c-2.279,-2.343 -5.308,-3.542 -8.351,-3.585 -3.054,-0.044 -6.121,1.066 -8.465,3.34l-22.99 22.311c-2.337,2.273 -3.534,5.293 -3.578,8.327 -0.044,3.044 1.064,6.102 3.333,8.44l16.134 16.588z" /></g></svg>
            <h3 className="text-center text-black text-2xl font-bold century">Solution sur-mesure</h3>
            <hr className="blue"></hr>
            <p className="text-center px-6"><strong className="font-normal">Linkweb</strong> est à votre écoute pour la définition de la solution qui colle parfaitement à vos besoins.</p>
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
                <div className="w-9/12 text-left">Réalisation de module de réservation</div>
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
            </ul>
            <div className="w-1/2 mx-auto block">
              <br />
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
        <section className="sidetitle w-10/12 text-center text-black text-2xl justify-center flex flex-col century mt-10 mb-10 mx-auto">
          <h2 className="century text-center lg:text-left text-black text-3xl md:text-5xl leading-tight">Construire un projet à votre image en toute compatibilité avec les problématiques du Web</h2>
          <br />
          <div className="line-title my-4">
            <hr className="border-solid w-1/2 lg:w-1/12 border-bleu"></hr>
            <br />
            <h3 /*data-aos='fade-left'*/ className="max-w-6xl text-xl text-black text-center lg:text-justify century pb-0">Nos consultants veillent à définir une solution qui répond à vos attentes et en parfaite adéquation avec les attentes des moteurs de recherche et autres acteurs du digital.</h3>
          </div>
        </section>
        <section className="phototext mb-24">
          <section className="w-full  my-10 flex flex-col lg:flex-row items-center justify-start">
            <div className="w-full flex justify-center items-center lg:w-5/12">
              <img className="w-full" src={mac} alt="Agence Marketing Toulouse" />
            </div>
            <div className="w-full lg:w-1/2 my-10  flex flex-col">
              <div className="w-full flex-col md:flex-row flex px-auto">
                <div className="w-full md:w-1/4 blocchiffres mx-auto md:mx-0 block century text-bleu " /*data-aos="fade-up"*/>
                  <p className="text-center">1</p>
                </div>
                <div className="w-full px-6 lg:px-6 flex flex-col justify-center">
                  <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                    <span className="text-bleu">/</span>ACQUISITION DE VISIBILITÉ
                                </h3>
                  <br />
                  <h4 className="century"><span className="font-bold">Le développement d’un site web n’est pas un objectif : il est un moyen. Il est indispensable de prévoir une stratégie d’accompagnement en vue d’acquérir de la visibilité.</span></h4>
                  <br />
                  <p className="w-full century pb-4 text-justify"><p  /*data-aos='fade-left'*/ className="text-justify" ><strong className="font-normal">Avoir un site internet</strong> est indispensable. Toutefois, ce dernier doit impérativement être visible pour vous permettre de tirer tout le potentiel et exploiter toute la puissance d’un tel outil. Il constitue un moteur au sein de votre <strong className="font-normal">projet de web marketing</strong>. C'est pourquoi, notre <Link to="/agence-internet-toulouse/" className="text-bleu hover:text-black font-bold">agence internet</Link> vous accompagne pour vous permettre d'obtenir des résultats positifs pour votre entreprise.</p>
                  </p>
                  {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                </div>
              </div>
              <div className="w-full flex-col md:flex-row flex px-auto">
                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                  <p className="text-center">2</p>
                </div>
                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                  <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                    <span className="text-bleu">/</span>HÉBERGEMENT & NOM DE DOMAINE
                                    </h3>
                  <br />
                  <h4 className="century"><span className="font-bold">Faire le choix d’une formule parfaitement fonctionnelle n’est pas une condition. Nos experts vous accompagnent dans le choix et la gestion de votre hébergement et nom de domaine.</span></h4>
                  <br />
                  <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Il peut être difficile de trouver une formule adaptée à ses besoins compte tenu de la diversité de l’<strong className="font-normal">offre d’hébergement</strong>. En tant qu'<Link to="/agence-de-communication-digitale/" className="text-bleu hover:text-black font-bold">agence de communication digitale</Link>, nous vous aidons à faire le <strong className="font-normal">choix d’un hébergement</strong> et d’un <strong className="font-normal">nom de domaine</strong> en parfaite adéquation avec vos ambitions ainsi que votre <strong className="font-normal">image de marque</strong>.</p>
                  {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                </div>
              </div>
              <div className="w-full flex-col md:flex-row flex px-auto">
                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                  <p className="text-center">3</p>
                </div>
                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                  <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                    <span className="text-bleu">/</span>CONCEPTION UI & UX DESIGN
                                    </h3>
                  <br />
                  <h4 className="century"><span className="font-bold">Nous mettons notre expertise à votre service pour vous proposer le développement d’une plateforme parfaite adaptée aux attentes de vos futurs visiteurs.</span></h4>
                  <br />
                  <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">Construire une <strong className="font-normal">expérience utilisateur</strong> parfaite au sein d’une interface graphique adaptée aux tendances du moment ainsi qu’à votre <strong className="font-normal">charte graphique</strong> est indispensable pour guider vos visiteurs et asseoir votre <strong className="font-normal">identité de marque</strong>. Notre <Link to="/agence-web-design-toulouse/" className="text-bleu hover:text-black">agence de web design de Toulouse</Link> s'adapte pour vous proposer une interface de qualité.</p>
                  {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                </div>
              </div>
              <div className="w-full flex-col md:flex-row flex px-auto">
                <div className="w-full md:w-1/4 blocchiffres mx-auto block md:mx-0 century text-bleu mb-6" /*data-aos="fade-up"*/>
                  <p className="text-center">4</p>
                </div>
                <div className="w-full px-12 lg:px-6 flex flex-col justify-center">
                  <h3 className="century uppercase text-3xl md:text-4xl tracking-wider pb-3 leading-tight text-center md:text-left" /*data-aos="zoom-in"*/>
                    <span className="text-bleu">/</span>E-REPUTATION
                                    </h3>
                  <h4 className="century"><span className="font-bold">L’e-réputation fait partie des piliers du webmarketing pour une entreprise. Nous menons un travail de fond pour vous permettre de vous attirer les faveurs du Web.</span></h4>
                  <br />
                  <p  /*data-aos='fade-left'*/ className="w-full century pb-4 text-justify">L’<strong className="font-normal">e-réputation</strong> d’une entreprise est importante à plusieurs égards. Nous veillons à privilégier des procédés vous permettant d’affiner votre <strong className="font-normal">réputation en ligne</strong> à destination des <strong className="font-normal">utilisateurs</strong>. Chaque élément doit être considéré pour construire son <strong className="font-normal">image de marque</strong> et l’<strong className="font-normal">e-réputation</strong> en fait pleinement partie.</p>
                  {/*<Button url="/contact-agence-web-toulouse/" text="EN SAVOIR PLUS" position="left" />*/}
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="max-w-xl w-full mx-auto px-4 py-0 my-0">
          <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
            Enlevez votre cape d’invisibilité ! Soyez visibles auprès de vos futurs clients
        </h2>
          <hr className="blue"></hr>
        </section>
        <section className="flex flex-col lg:flex-row flex-1 home-step my-3 px-4 xl:my-12 xl:px-24">
          <div className="w-full xl:w-1/3 one px-auto">
            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
              <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>1</div>
              <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                  <span className="text-bleu">/</span>JE DÉCOUVRE LE WEBMARKETING
                </h3>
                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                  Depuis l’avènement des multiples <strong className="font-normal">supports de communication en ligne</strong>, le <strong className="font-normal">webmarketing</strong> est devenu une discipline incontournable pour les professionnels. Non seulement, cela permet de développer la présence de sa <strong className="font-normal">société en ligne</strong>, mais cela peut également vous permettre d’accéder à de nouvelles opportunités au sein d’un vaste terrain d’action.
                </div>
                {/* <Button url="/blog/foire-aux-questions/" text="En savoir plus" position="center" /> */}
                <button
                  className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/faq/';
                  }}
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> En savoir plus
                </button>
              </section>
            </div>
          </div>
          <div className="w-full xl:w-1/3 two px-auto">
            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
              <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>2</div>
              <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                  <span className="text-bleu">/</span>JE SOUHAITE DÉFINIR MES BESOINS
                </h3>
                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                  En fonction de votre secteur d’activité, du marché sur lequel vous vous insérez ou encore d'un bon nombre de critères inhérents à votre entreprise, il existe une formule qui vous correspond. Il n’existe pas une seule façon de mettre à profit la <strong className="font-normal">communication</strong> et le <strong className="font-normal">webmarketing</strong> pour une <strong className="font-normal">société</strong>. Nous déterminons le modèle qui correspond au mieux à vos besoins depuis notre <Link to="/agence-web-ramonville/" className="text-bleu hover:text-black font-bold">agence à Ramonville</Link> comme partout en France.
                </div>
                {/* <Button url="/contact-agence-web-toulouse/" text="Être recontacté" position="center" /> */}
                <button
                  className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/contact-agence-web-toulouse/';
                  }}
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> Être recontacté
                </button>
              </section>
            </div>
          </div>
          <div className="w-full xl:w-1/3 three px-auto">
            <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
              <div className="chiffres century text-bleu -mt-64 mb-6" /*data-aos="fade-up"*/>3</div>
              <section className="w-full lg:w-1/3 absolute z-10 px-auto lg:w-1/3 absolute px-12 lg:px-6 xl:px-24 pt-24">
                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                  <span className="text-bleu">/</span>JE SOUHAITE BÉNÉFICIER D’UNE EXPERTISE
                </h3>
                <div className="century content pb-6 text-justify" style={{ textAlignLast: 'center' }}>
                  <strong className="font-normal">Linkweb</strong> fait partie des <strong className="font-normal">agences de marketing en France</strong> qui sont en mesure de vous proposer des solutions ajustées à vos besoins. Qu’il s’agisse de <strong className="font-normal">création de sites sur-mesure</strong>, d’<strong className="font-normal">acquisition de visibilité</strong> ou de paramètrage de votre <strong className="font-normal">campagne de publicité Adwords (Google Ads</strong> comme sur les réseaux sociaux en <strong className="font-normal">social media marketing</strong>), <strong className="font-normal"><Link to="/agence-developpement-web-toulouse/" className="text-bleu hover:text-black font-bold">notre agence de développement web</Link></strong> est en mesure de vous proposer un des <strong className="font-normal">solutions fonctionnelles</strong>.
                </div>
                {/* <Button url="/contact-agence-web-toulouse/" text="Demander un devis" position="center" /> */}
                <button
                  className="link flex  mt-3 items-center text-black text-lg mx-auto block justify-center lg:text-xl"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/contact-agence-web-toulouse/';
                  }}
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg> Demander un devis
                </button>
              </section>
            </div>
          </div>
        </section>
        <section className="bg-bleu sidetitle py-10">
          <section className="w-full lg:w-2/3 flex flex-col justify-center century my-10 px-4 lg:px-32 md:mx-6 sm:mx-12 mt-2 lg:mx-64">
            <h2 className="century text-center lg:text-left text-white text-3xl md:text-5xl leading-none">Agence Marketing Toulouse : votre agence partenaire pour concrétiser tous vos projets</h2>
            <br />
            <div className="line-title my-4 ">
              <br />
              <hr className="w-1/2 lg:w-1/12" />
              <br />
              <h3 /*data-aos='fade-left'*/ className="text-xl text-white century pb-0">De part sa compétence ainsi que son expérience de plus de dix ans dans le secteur de la communication en ligne, notre <Link to="/agence-web-muret/" className="text-black hover:text-white font-bold">agence web à Muret</Link> est en mesure de traduire vos besoins en solutions parfaitement fonctionnelles, répondant à vos attentes ainsi qu’à celles des utilisateurs.</h3>
            </div>
          </section>
          <section className="flex justify-center flex-col items-center">
            <div className="w-full px-12 lg:px-0 flex justify-center flex-col md:flex-row lg:w-3/4 mt-5">
              <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 text-white century text-center lg:text-left">
                <svg viewBox="0 0 28 35" width="30px" className="mx-auto md:ml-0 block"><g fill="#ffffff" ><g><path d="M25.63,8.16 C25.3791233,8.2736063 25.2673479,8.56869337 25.38,8.82 C27.9835268,14.4995076 26.0128726,21.2291511 20.7570105,24.607179 C15.5011485,27.9852068 8.56093161,26.9827248 4.47584423,22.2554403 C0.390756842,17.5281557 0.405052352,10.5159253 4.50938029,5.80533611 C8.61370823,1.09474697 15.5579549,0.120570547 20.8,3.52 L20.23,4.09 C20.1366875,4.18292491 20.082937,4.30834272 20.08,4.44 L20.08,7.21 L19.64,7.65 C16.6439961,4.99569867 12.201052,4.79450437 8.97740753,7.1671551 C5.75376307,9.53980583 4.62518012,13.8417277 6.26892868,17.4913093 C7.91267724,21.1408909 11.882203,23.1466567 15.7953676,22.3049336 C19.7085322,21.4632105 22.5022531,18.0026679 22.5,14 C22.5060564,12.6917472 22.2046221,11.4003755 21.62,10.23 C21.5479513,10.0569807 21.3851924,9.93878386 21.1983704,9.92380916 C21.0115484,9.90883447 20.8320405,9.99959693 20.733352,10.1589308 C20.6346636,10.3182647 20.6333696,10.5194096 20.73,10.68 C22.4788666,14.1666095 21.2961553,18.4112488 17.9962719,20.4910925 C14.6963885,22.5709362 10.3568052,21.8068773 7.96572517,18.7250408 C5.57464511,15.6432043 5.91279959,11.2498661 8.74733809,8.57024454 C11.5818766,5.89062297 15.9872705,5.79966346 18.93,8.36 L16.09,11.21 C14.7906587,10.2456333 12.9988445,10.3008705 11.7613722,11.3434409 C10.5238998,12.3860114 10.1653515,14.1424545 10.8951986,15.58662 C11.6250458,17.0307856 13.2518533,17.7838768 14.8252069,17.4059224 C16.3985604,17.0279679 17.5057779,15.6181031 17.5,14 C17.5,13.7238576 17.2761424,13.5 17,13.5 C16.7238576,13.5 16.5,13.7238576 16.5,14 C16.5,15.3807119 15.3807119,16.5 14,16.5 C12.6192881,16.5 11.5,15.3807119 11.5,14 C11.5,12.6192881 12.6192881,11.5 14,11.5 C14.4897484,11.5018497 14.9686885,11.6441435 15.38,11.91 L13.65,13.65 C13.5533228,13.7407333 13.4984814,13.8674141 13.4984814,14 C13.4984814,14.1325859 13.5533228,14.2592667 13.65,14.35 C13.7407333,14.4466772 13.8674141,14.5015186 14,14.5015186 C14.1325859,14.5015186 14.2592667,14.4466772 14.35,14.35 L20,8.7 L20.78,7.92 L23.55,7.92 C23.6816573,7.917063 23.8070751,7.86331251 23.9,7.77 L27.36,4.31 C27.5066366,4.17107596 27.5506083,3.95521467 27.47,3.77 C27.3919291,3.57989638 27.2054872,3.45692403 27,3.46 L24.54,3.46 L24.54,1 C24.5389924,0.798149057 24.4167128,0.616701799 24.23,0.54 C24.0447853,0.459391664 23.828924,0.503363408 23.69,0.65 L21.52,2.8 C15.9401207,-0.926846735 8.46694245,0.0290172714 4.00472299,5.04030825 C-0.457496475,10.0515992 -0.543590257,17.5851679 3.8029405,22.6971255 C8.14947127,27.809083 15.5988534,28.9354824 21.2624452,25.3371263 C26.9260371,21.7387701 29.0711253,14.516536 26.29,8.41 C26.1763937,8.15912326 25.8813066,8.04734786 25.63,8.16 Z M23.35,6.92 L21.79,6.92 L24.25,4.46 L25.81,4.46 L23.35,6.92 Z M23.54,3.75 L21.08,6.21 L21.08,4.65 L23.54,2.19 L23.54,3.75 Z" /></g></g></svg>
                <h4 className="font-bold century"><span className="font-bold">Accompagnement stratégique</span></h4>
                <p>Définition de votre <strong className="font-normal">stratégie d’acquisition de visibilité et de notoriété</strong> en fonction de vos <strong className="font-normal">objectifs marketing</strong> et de <strong className="font-normal">communication</strong>.</p>
              </div>
              <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                <svg width="50px" className="mx-auto block md:ml-0" fill="#ffffff" viewBox="0 0 140 175"><g><g><g><g><path d="M107.4882812,28.375h-21.375c-0.5527344,0-1-0.4477539-1-1V6c0-0.404541,0.2431641-0.769043,0.6171875-0.9238281      c0.375-0.1540527,0.8046875-0.0695801,1.0898438,0.2167969l21.375,21.375      c0.2861328,0.2858887,0.3720703,0.7160645,0.2167969,1.0895996C108.2578125,28.1313477,107.8925781,28.375,107.4882812,28.375z       M87.1132812,26.375h17.9609375L87.1132812,8.4143066V26.375z" /></g><g><path d="M107.4882812,135H6.5585938c-0.5527344,0-1-0.4477539-1-1V6c0-0.5522461,0.4472656-1,1-1h79.5595703      c0.265625,0,0.5195312,0.1054688,0.7070312,0.2929688l21.3701172,21.3701172      c0.1875,0.1875,0.2929688,0.4418945,0.2929688,0.7070312v19.9699707c0,0.5522461-0.4472656,1-1,1s-1-0.4477539-1-1V27.7844238      L85.7041016,7H7.5585938v126h98.9296875V86.2600098c0-0.5522461,0.4472656-1,1-1s1,0.4477539,1,1V134      C108.4882812,134.5522461,108.0410156,135,107.4882812,135z" /></g></g><g><g><path d="M75.6171875,124.7570801c-0.1679688,0-0.3359375-0.0422363-0.4882812-0.1274414      c-0.3349609-0.1872559-0.5332031-0.5500488-0.5097656-0.9331055l1.3242188-21.826416      c0.0087891-0.1501465,0.0517578-0.2963867,0.125-0.4277344l39.9150391-71.3278809      c0.1953125-0.347168,0.5869141-0.5471191,0.9726562-0.5065918c7.1279297,0.715332,12.9423828,3.9689941,17.28125,9.670166      c0.2412109,0.3168945,0.2714844,0.746582,0.0771484,1.0939941l-39.9150391,71.3278809      c-0.0742188,0.1313477-0.1757812,0.2443848-0.2988281,0.3308105l-17.9091797,12.5454102      C76.0195312,124.6962891,75.8183594,124.7570801,75.6171875,124.7570801z M77.9257812,102.2194824l-1.1845703,19.529541      l16.0244141-11.2250977l39.4785156-70.548584c-3.8085938-4.7553711-8.7949219-7.5456543-14.8398438-8.3044434      L77.9257812,102.2194824z M93.5263672,111.2116699h0.0097656H93.5263672z" /></g><g><path d="M93.5253906,112.2116699c-0.1650391,0-0.3330078-0.0412598-0.4873047-0.1276855      c-1.0625-0.5947266-1.2998047-1.5097656-1.4570312-2.1149902c-0.1337891-0.5161133-0.1962891-0.7033691-0.4990234-0.8728027      c-0.3037109-0.1704102-0.4951172-0.1240234-1.0029297,0.0314941c-0.5986328,0.1835938-1.5029297,0.4599609-2.5654297-0.1352539      c-1.0634766-0.5949707-1.3007812-1.510498-1.4580078-2.1162109c-0.1337891-0.515625-0.1953125-0.7026367-0.4970703-0.8718262      c-0.3017578-0.168457-0.4921875-0.125-1.0048828,0.0319824c-0.5986328,0.1828613-1.5029297,0.4592285-2.5654297-0.1359863      c-1.0634766-0.5949707-1.3017578-1.5102539-1.4599609-2.1159668c-0.1347656-0.5168457-0.1962891-0.7043457-0.5009766-0.8745117      c-0.3046875-0.1706543-0.4960938-0.125-1.0068359,0.0305176c-0.6005859,0.1821289-1.5029297,0.458252-2.5673828-0.1374512      c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2705078-0.4816895,0.8789062-0.6552734,1.3613281-0.3842773      c0.3056641,0.1706543,0.4970703,0.1252441,1.0068359-0.0307617c0.5996094-0.182373,1.5019531-0.4584961,2.5673828,0.1374512      c1.0634766,0.5949707,1.3017578,1.5102539,1.4599609,2.1159668c0.1347656,0.5168457,0.1962891,0.7043457,0.5009766,0.8745117      c0.3027344,0.1699219,0.4951172,0.1237793,1.0039062-0.0314941c0.5996094-0.1826172,1.5039062-0.458252,2.5664062,0.135498      c1.0634766,0.5952148,1.2998047,1.5102539,1.4570312,2.1157227c0.1337891,0.5158691,0.1953125,0.7028809,0.4980469,0.8723145      c0.3027344,0.1696777,0.4941406,0.1245117,1.0029297-0.0317383c0.5996094-0.1826172,1.5039062-0.4592285,2.5654297,0.135498      c1.0634766,0.5947266,1.3007812,1.5100098,1.4580078,2.1157227c0.1337891,0.5158691,0.1953125,0.7028809,0.4980469,0.8723145      c0.4824219,0.2697754,0.6542969,0.8791504,0.3847656,1.361084      C94.2158203,112.0273438,93.8759766,112.2116699,93.5253906,112.2116699z" /></g><g><g><path d="M86.0400391,106.1291504c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855       c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398l32.2480469-57.6271973       c0.2705078-0.4819336,0.8789062-0.6555176,1.3613281-0.3842773c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398       l-32.2480469,57.6271973C86.7304688,105.9445801,86.390625,106.1291504,86.0400391,106.1291504z" /></g></g><g><path d="M81.2548828,120.8110352c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855l-5.2207031-2.9213867      c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2705078-0.4816895,0.8779297-0.6550293,1.3613281-0.3842773      l5.2207031,2.9213867c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398      C81.9453125,120.6264648,81.6054688,120.8110352,81.2548828,120.8110352z" /></g></g><g><g><path d="M61.0966797,89.505127h-8.1464844c-0.4931641,0-0.9121094-0.3591309-0.9882812-0.8461914l-1.1542969-7.4187012      c-1.6474609-0.4711914-3.2314453-1.1269531-4.7236328-1.9555664l-6.0615234,4.4284668      c-0.3974609,0.2907715-0.9492188,0.2485352-1.296875-0.1003418l-5.7607422-5.7607422      c-0.3486328-0.3483887-0.3916016-0.8989258-0.1005859-1.296875l4.4287109-6.0617676      C36.4638672,69,35.8076172,67.4160156,35.3369141,65.7700195l-7.4179688-1.1547852      c-0.4873047-0.0756836-0.8466797-0.4951172-0.8466797-0.9880371v-8.1467285c0-0.4929199,0.359375-0.9123535,0.8457031-0.9880371      l7.4189453-1.1550293c0.4707031-1.6459961,1.1269531-3.2297363,1.9560547-4.7233887l-4.4287109-6.0617676      c-0.2910156-0.3979492-0.2480469-0.9484863,0.1005859-1.296875l5.7607422-5.7602539      c0.3486328-0.3493652,0.8994141-0.3903809,1.296875-0.1003418l6.0615234,4.4282227      c1.4921875-0.8288574,3.0761719-1.4846191,4.7236328-1.9558105l1.1542969-7.4182129      c0.0761719-0.4870605,0.4951172-0.8461914,0.9882812-0.8461914h8.1464844c0.4931641,0,0.9121094,0.3591309,0.9882812,0.8461914      l1.1542969,7.4182129c1.6474609,0.4709473,3.2304688,1.126709,4.7236328,1.9558105l6.0625-4.4284668      c0.3974609-0.2907715,0.9482422-0.248291,1.296875,0.1003418l5.7597656,5.760498      c0.3486328,0.3483887,0.3916016,0.8989258,0.1005859,1.296875l-4.4287109,6.0617676      c0.8291016,1.4916992,1.484375,3.0754395,1.9560547,4.7236328l7.4179688,1.1547852      c0.4873047,0.0756836,0.8466797,0.4951172,0.8466797,0.9880371v8.1467285c0,0.4929199-0.359375,0.9123535-0.8457031,0.9880371      l-7.4189453,1.1550293c-0.4707031,1.6459961-1.1269531,3.2299805-1.9560547,4.7233887l4.4287109,6.0615234      c0.2910156,0.3979492,0.2480469,0.9482422-0.1005859,1.296875l-5.7597656,5.7607422      c-0.3486328,0.348877-0.8994141,0.3911133-1.296875,0.1003418l-6.0625-4.4284668      c-1.4921875,0.8288574-3.0761719,1.4846191-4.7236328,1.9558105l-1.1542969,7.418457      C62.0087891,89.1459961,61.5898438,89.505127,61.0966797,89.505127z M53.8066406,87.505127h6.4335938l1.1230469-7.2143555      c0.0615234-0.395752,0.3535156-0.7165527,0.7412109-0.8151855c1.9082031-0.4855957,3.7285156-1.239502,5.4121094-2.2412109      c0.3447266-0.2043457,0.7783203-0.1845703,1.1015625,0.052002l5.8955078,4.3066406L79.0625,77.043457l-4.3066406-5.8947754      c-0.2363281-0.3234863-0.2568359-0.7565918-0.0517578-1.1008301c1.0019531-1.6850586,1.7558594-3.5061035,2.2412109-5.4123535      c0.0986328-0.3881836,0.4189453-0.6799316,0.8144531-0.7414551l7.2148438-1.123291v-6.4338379l-7.2138672-1.1230469      c-0.3964844-0.0615234-0.7167969-0.3532715-0.8154297-0.7414551c-0.4863281-1.9089355-1.2402344-3.7297363-2.2412109-5.4118652      c-0.2050781-0.3442383-0.1845703-0.777832,0.0517578-1.1013184L79.0625,42.0639648l-4.5488281-4.5493164l-5.8955078,4.3066406      c-0.3232422,0.2365723-0.7578125,0.2565918-1.1015625,0.052002c-1.6845703-1.0021973-3.5048828-1.7561035-5.4111328-2.2409668      c-0.3886719-0.098877-0.6806641-0.4196777-0.7421875-0.8154297l-1.1230469-7.2141113h-6.4335938l-1.1230469,7.2141113      c-0.0615234,0.395752-0.3535156,0.7165527-0.7412109,0.8154297c-1.9082031,0.4853516-3.7285156,1.2392578-5.4121094,2.2409668      c-0.34375,0.204834-0.7783203,0.1848145-1.1015625-0.052002l-5.8945312-4.3063965l-4.5498047,4.5490723l4.3066406,5.8950195      c0.2363281,0.3234863,0.2568359,0.7565918,0.0517578,1.1008301c-1.0019531,1.6853027-1.7558594,3.5063477-2.2412109,5.4123535      c-0.0986328,0.3881836-0.4189453,0.6799316-0.8144531,0.7414551l-7.2148438,1.123291v6.4338379l7.2138672,1.1230469      c0.3964844,0.0615234,0.7167969,0.3532715,0.8154297,0.7414551c0.4853516,1.90625,1.2392578,3.7272949,2.2412109,5.4121094      c0.2050781,0.3444824,0.1845703,0.7775879-0.0517578,1.1010742L34.984375,77.043457l4.5498047,4.5495605l5.8945312-4.3066406      c0.3232422-0.2368164,0.7578125-0.2565918,1.1015625-0.052002c1.6826172,1.0012207,3.5039062,1.7553711,5.4121094,2.2412109      c0.3876953,0.0986328,0.6796875,0.4194336,0.7412109,0.8151855L53.8066406,87.505127z M85.9746094,63.6271973h0.0097656      H85.9746094z" /></g><g><path d="M57.0234375,72.3076172c-7.0322266,0-12.7539062-5.7214355-12.7539062-12.7539062      s5.7216797-12.7536621,12.7539062-12.7536621s12.7539062,5.7211914,12.7539062,12.7536621      S64.0556641,72.3076172,57.0234375,72.3076172z M57.0234375,48.8000488      c-5.9296875,0-10.7539062,4.8239746-10.7539062,10.7536621S51.09375,70.3076172,57.0234375,70.3076172      s10.7539062-4.8242188,10.7539062-10.7539062S62.953125,48.8000488,57.0234375,48.8000488z" /></g></g></g><g><path d="M126.5810547,53.1425781c-0.1650391,0-0.3330078-0.0410156-0.4873047-0.1276855l-16.5859375-9.2810059    c-0.4824219-0.2695312-0.6542969-0.8789062-0.3847656-1.3608398c0.2695312-0.4816895,0.8779297-0.6550293,1.3613281-0.3842773    l16.5859375,9.2810059c0.4824219,0.2695312,0.6542969,0.8789062,0.3847656,1.3608398    C127.2714844,52.9580078,126.9316406,53.1425781,126.5810547,53.1425781z" /></g></g></svg>
                <h4 className="font-bold century -mt-4"><span className="font-bold">Service de gestion</span></h4>
                <p>Conseil dans le choix d’une formule d’<strong className="font-normal">hébergement</strong> ajustée ainsi que de nom de domaine en total accord avec votre <strong className="font-normal">identité de marque</strong>.</p>
              </div>
              <div className="w-full svgtransform text-white md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                <svg width="60px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><g><path fill="#ffffff" d="M51.139,69.946V46.414c0-1.238-1.003-2.241-2.241-2.241H12.62c-1.238,0-2.242,1.003-2.242,2.241v23.532H5   c0.395,2.071,2.211,3.642,4.397,3.642h42.722c2.188,0,4.004-1.57,4.398-3.642H51.139z M48.498,68.571H13.019V46.369h35.479V68.571z   " /><path fill="#ffffff" d="M93.455,61.782H88.28c-0.853,0-1.545,0.693-1.545,1.544v11.517c0,0.852,0.692,1.545,1.545,1.545h5.175   c0.852,0,1.545-0.693,1.545-1.545V63.326C95,62.476,94.307,61.782,93.455,61.782z M90.099,62.275h1.537   c0.174,0,0.31,0.169,0.31,0.384s-0.136,0.384-0.31,0.384h-1.537c-0.174,0-0.309-0.169-0.309-0.384S89.925,62.275,90.099,62.275z    M90.867,75.828c-0.438,0-0.796-0.355-0.796-0.794c0-0.439,0.357-0.796,0.796-0.796s0.795,0.356,0.795,0.796   C91.662,75.473,91.306,75.828,90.867,75.828z M94.007,73.563h-6.421v-9.938h6.421V73.563z" /><g><path fill="#ffffff" d="M67.837,62.01h2.95v-5.159H51.767v5.159h3.226v3.079l-2.435,2.987c0,0.55,0.447,0.998,0.997,0.998h15.72    c0.549,0,0.996-0.448,0.996-0.998l-2.434-2.987V62.01z" /><rect x="72.041" y="56.851" width="0.312" height="5.159" /></g><path fill="#ffffff" d="M86.349,48.627h2.936v-1.661v-8.31V25.644c0-1.122-0.91-2.031-2.031-2.031H35.576c-1.122,0-2.031,0.909-2.031,2.031v13.013   v4.89h2.937V26.518h49.867V48.627z" /><path fill="#ffffff" d="M86.108,71.961H73.257V51.188h15.375v9.966h1.874V50.327c0-0.592-0.481-1.074-1.075-1.074H72.489   c-0.594,0-1.074,0.482-1.074,1.074v22.771c0,0.592,0.48,1.074,1.074,1.074h13.619V71.961z M80.96,73.759   c-0.409,0-0.744-0.333-0.744-0.744c0-0.41,0.335-0.743,0.744-0.743c0.41,0,0.744,0.333,0.744,0.743   C81.704,73.426,81.37,73.759,80.96,73.759z" /></g></svg>
                <h4 className="font-bold century"><span className="font-bold">UX Design</span></h4>
                <p>Conception d’une plateforme intuitive et adaptée aux <strong className="font-normal">besoins des utilisateurs</strong> : navigation intuitive, temps de chargement rapide, accessibilité tous supports.</p>
              </div>
            </div>
            <div className="w-full text-white flex flex-col md:flex-row justify-center lg:w-3/4 mt-5 md:mt-10 mb-12">
              <div className="w-full svgtransform -mt-2 md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125" fill="#ffffff"><g><g><g><path d="M82.3,81.7c-0.8,0-1.5-0.7-1.5-1.5c0-17-13.8-30.9-30.9-30.9c-17,0-30.9,13.8-30.9,30.9     c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5c0-18.6,15.1-33.8,33.8-33.8s33.8,15.1,33.8,33.8C83.8,81.1,83.1,81.7,82.3,81.7z" /></g><g><path d="M1.5,67.4c-0.1,0-0.3,0-0.4-0.1c-0.8-0.2-1.2-1-1-1.8c1-3.5,2.5-6.9,4.2-10.2c1-1.8,0.6-4.1-0.8-5.5     c-3-3-3-7.8,0-10.7l5.4-5.4c1.4-1.4,3.3-2.2,5.4-2.2c2,0,3.9,0.8,5.3,2.2c0,0,0,0,0,0c1.5,1.5,3.7,1.8,5.5,0.8     c3.2-1.8,6.7-3.2,10.2-4.2c1.9-0.6,3.3-2.4,3.3-4.5c0-4.2,3.4-7.6,7.6-7.6h7.6c4.2,0,7.6,3.4,7.6,7.6c0,2.1,1.4,3.9,3.3,4.5     c3.5,1,6.9,2.5,10.2,4.2c1.8,1,4.1,0.6,5.5-0.8c0,0,0,0,0,0c1.4-1.4,3.3-2.2,5.3-2.2c2,0,3.9,0.8,5.4,2.2l5.4,5.4     c1.4,1.4,2.2,3.3,2.2,5.4s-0.8,3.9-2.2,5.4c-1.5,1.5-1.8,3.7-0.8,5.5c1.8,3.2,3.2,6.6,4.2,10.2c0.2,0.8-0.2,1.6-1,1.8     c-0.8,0.2-1.6-0.2-1.8-1c-1-3.3-2.3-6.6-4-9.6c-1.6-2.9-1.1-6.6,1.3-9c1.8-1.8,1.8-4.8,0-6.6l-5.4-5.4c-0.9-0.9-2.1-1.4-3.3-1.4     c-1.3,0-2.4,0.5-3.3,1.4c0,0,0,0,0,0c-2.4,2.3-6,2.9-8.9,1.3c-3.1-1.7-6.3-3-9.6-4c-3.2-0.9-5.4-3.9-5.4-7.3     c0-2.6-2.1-4.7-4.7-4.7h-7.6c-2.6,0-4.7,2.1-4.7,4.7c0,3.3-2.2,6.3-5.4,7.3c-3.3,1-6.5,2.3-9.6,4c-2.9,1.6-6.6,1.1-8.9-1.3     c0,0,0,0,0,0c-0.9-0.9-2.1-1.4-3.3-1.4c-1.3,0-2.4,0.5-3.3,1.4l-5.4,5.4c-1.8,1.8-1.8,4.8,0,6.6c2.4,2.4,2.9,6.1,1.3,9     c-1.7,3.1-3,6.3-4,9.6C2.7,67,2.1,67.4,1.5,67.4z" /></g></g><g><path d="M98.5,81.7H1.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h97.1c0.8,0,1.5,0.7,1.5,1.5S99.3,81.7,98.5,81.7z    " /></g></g></svg>
                <h4 className="font-bold century"><span className="font-bold">Optimisation pour le référencement</span></h4>
                <p><strong className="font-normal">Rédaction de contenu optimisé pour le SEO</strong> et <strong className="font-normal">optimisation des pages de votre site</strong> en fonction d’opportunités de <strong className="font-normal">mots-clés</strong> à fort potentiel.</p>
              </div>
              <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 1024 1280"><g><g><g><path fill="#ffffff" d="M683.8,185c51.9,52.1,86.5,119.2,98.6,191.8c11.7,70,1.5,143.9-28.9,208c-35.1,74.1-95.8,134.5-170,169.3     c-64,30.1-137.7,40-207.4,28.2C303.4,770,235.9,735.1,184,682.7c-50.2-50.6-84-115.8-96.8-186c-12.2-67.4-4.2-139,23.1-201.9     c28.8-66.4,77.9-123.3,139.7-161.2C309.4,97.2,379.1,79.2,448.8,82c70.1,2.8,138.4,26.9,194.9,68.5     C658,160.9,671.3,172.5,683.8,185c9.1,9.1,23.3-5,14.1-14.1c-53.2-53-121.9-89.5-195.8-103c-72.8-13.2-148.1-4.6-216,24.5     c-69.8,30-129.5,82.2-169.3,146.8C78.3,301.7,59.1,375.6,62,448.8c2.9,74,27.9,146.7,72,206.2c46.5,62.8,111.8,110.3,186.3,134.3     c71.3,22.9,149.6,23.7,221.3,2.1c82.2-24.7,154-78,202.1-149c42.5-62.9,64.7-138.8,63.3-214.6c-1.4-76-26.3-151.3-71.3-212.7     c-11.5-15.6-24.1-30.4-37.8-44.2C688.8,161.7,674.7,175.9,683.8,185z" /></g></g><g><g><path fill="#ffffff" d="M723.3,651.3c9.7,9.7,19.4,19.4,29.1,29.1c22,22,44,44,66,66c24,24,48,48,72,72     c15.4,15.4,30.8,30.8,46.2,46.2c3.2,3.2,8,6.5,4.2,11.4c-2.1,2.7-5.1,5.1-7.5,7.5c-5.3,5.3-10.5,10.5-15.8,15.8     c-11.4,11.4-22.8,22.8-34.1,34.1c-3.7,3.7-9.2,12-14.8,7c-12.3-10.9-23.5-23.5-35.1-35.1c-22.9-22.9-45.8-45.8-68.7-68.7     c-23.5-23.5-47.1-47.1-70.6-70.6c-13.6-13.6-27.3-27.3-40.9-40.9c-0.7-0.7-1.3-1.3-2-2c-0.7,5.2-1.3,10.5-2,15.7     C684,714,714,684,739,649.3c3.2-4.4,0.8-11.1-3.6-13.7c-5-2.9-10.5-0.8-13.7,3.6c-22.9,31.7-50.9,59.7-82.6,82.6     c-5.1,3.7-6.9,10.8-2,15.7c10,10,20.1,20.1,30.1,30.1c22.8,22.8,45.7,45.7,68.5,68.5c24.2,24.2,48.5,48.5,72.7,72.7     c14.6,14.6,29.2,29.2,43.8,43.8c0.8,0.8,1.7,1.7,2.5,2.5c10.1,9.4,25.2,9.2,35.3-0.2c8.1-7.5,15.6-15.6,23.4-23.4     c11.5-11.5,23.1-23.1,34.6-34.6c2.3-2.3,4.7-4.5,6.9-6.9c9.3-10.1,9.5-25.1,0.1-35.3c-10.1-10.9-21.1-21.1-31.6-31.6     c-22.9-22.9-45.8-45.8-68.7-68.7c-24.2-24.2-48.5-48.5-72.7-72.7c-14.2-14.2-28.4-28.4-42.6-42.6c-0.7-0.7-1.4-1.4-2.1-2.1     C728.4,628,714.2,642.2,723.3,651.3z" /></g></g><g><g><path fill="#ffffff" d="M264,499.3c31.4-29.2,62.9-58.4,94.3-87.5c4.5-4.2,9-8.4,13.6-12.6c-4.7,0-9.4,0-14.1,0     c24.1,26,48.2,51.9,72.3,77.9c3.4,3.7,6.8,7.3,10.2,11c3.8,4.1,10.3,3.6,14.1,0c18.4-17.1,36.8-34.1,55.2-51.2     c29.2-27.1,58.4-54.2,87.5-81.2c6.7-6.2,13.5-12.5,20.2-18.7c-4.7,0-9.4,0-14.1,0c23.9,25.8,47.8,51.5,71.7,77.3     c3.4,3.7,6.8,7.4,10.2,11c3.8,4.1,10.3,3.6,14.1,0c23.1-21.4,46.2-42.9,69.3-64.3c36.8-34.1,73.6-68.3,110.4-102.4     c8.4-7.8,16.8-15.6,25.2-23.4c9.5-8.8-4.7-22.9-14.1-14.1c-23.1,21.4-46.2,42.9-69.3,64.3c-36.8,34.1-73.6,68.3-110.4,102.4     c-8.4,7.8-16.8,15.6-25.2,23.4c4.7,0,9.4,0,14.1,0c-23.9-25.8-47.8-51.5-71.7-77.3c-3.4-3.7-6.8-7.4-10.2-11     c-3.8-4.1-10.3-3.6-14.1,0c-18.4,17.1-36.8,34.1-55.2,51.2c-29.2,27.1-58.4,54.2-87.5,81.2c-6.7,6.2-13.5,12.5-20.2,18.7     c4.7,0,9.4,0,14.1,0c-24.1-26-48.2-51.9-72.3-77.9c-3.4-3.7-6.8-7.3-10.2-11c-3.8-4.1-10.3-3.6-14.1,0     c-31.4,29.2-62.9,58.4-94.3,87.5c-4.5,4.2-9,8.4-13.6,12.6C240.5,494,254.6,508.1,264,499.3L264,499.3z" /></g></g></g></svg>
                <h4 className="font-bold century"><span className="font-bold">Définition de campagnes Adwords</span></h4>
                <p>Configuration et paramétrage de votre <strong className="font-normal">compte publicitaire</strong> ainsi que de vos <strong className="font-normal">annonces</strong> et <strong className="font-normal">groupes d’annonces</strong> via <strong className="font-normal">Google Ads</strong> et <strong className="font-normal">Facebook Ads</strong>.</p>
              </div>
              <div className="w-full svgtransform md:w-1/4 mx-auto px-2 mb-10 md:mb-0 century text-center lg:text-left">
                <svg width="50px" className="lg:mx-0 mx-auto block" viewBox="0 0 100 125"><path fill="#ffffff" d="M66.598,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44c-0.556,0.081-1.017,0.47-1.191,1.004  c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014c-0.095,0.554,0.133,1.113,0.587,1.443  c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C67.673,71.235,67.16,70.916,66.598,70.916L66.598,70.916z M50,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169L50,82.719l2.707,1.423  c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014l2.19-2.135  c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C51.074,71.235,50.562,70.916,50,70.916L50,70.916z M33.402,70.916c-0.562,0-1.074,0.319-1.323,0.822l-1.353,2.742l-3.027,0.44  c-0.556,0.081-1.017,0.47-1.191,1.004c-0.174,0.534-0.029,1.12,0.373,1.512l2.19,2.135l-0.517,3.014  c-0.095,0.554,0.133,1.113,0.587,1.443c0.257,0.187,0.561,0.282,0.867,0.282c0.235,0,0.471-0.056,0.686-0.169l2.707-1.423  l2.707,1.423c0.216,0.113,0.452,0.169,0.686,0.169c0.306,0,0.61-0.095,0.867-0.282c0.454-0.33,0.682-0.89,0.587-1.443l-0.517-3.014  l2.19-2.135c0.402-0.392,0.547-0.978,0.373-1.512c-0.174-0.534-0.635-0.923-1.191-1.004l-3.027-0.44l-1.353-2.742  C34.476,71.235,33.963,70.916,33.402,70.916L33.402,70.916z" /><path fill="#ffffff" d="M72.131,50.738h-25.82v-1.475h25.82V50.738z M50,52.951h-3.689v1.475H50V52.951z M72.131,52.951H53.689v1.475  h18.443V52.951z M61.066,56.639H46.311v1.475h14.754V56.639z M72.131,56.639h-7.377v1.475h7.377V56.639z M57.377,60.328H46.311  v1.475h11.066V60.328z M61.066,27.131H46.311v1.475h14.754V27.131z M72.131,27.131h-7.377v1.475h7.377V27.131z M72.131,30.82h-25.82  v1.475h25.82V30.82z M57.377,34.508H46.311v1.475h11.066V34.508z M72.131,34.508H61.066v1.475h11.066V34.508z M64.754,38.197H46.311  v1.475h18.443V38.197z" /><path fill="#ffffff" d="M75.82,12.377h-4.338c-0.741-1.139-1.62-2.329-2.458-3.404l-0.257-0.33l-0.416,0.052  c-2.313,0.288-8.743,0.858-10.692,0.051c-0.341-0.141-0.869-0.895-1.294-1.501C55.592,6.141,54.793,5,53.689,5h-7.377  c-1.104,0-1.904,1.141-2.677,2.244c-0.425,0.606-0.953,1.36-1.294,1.501c-1.947,0.807-8.379,0.237-10.692-0.051l-0.416-0.052  l-0.257,0.33c-0.838,1.075-1.717,2.265-2.458,3.404H24.18c-2.441,0-4.426,1.986-4.426,4.426v73.77c0,2.441,1.985,4.426,4.426,4.426  H75.82c2.441,0,4.426-1.985,4.426-4.426v-73.77C80.246,14.363,78.26,12.377,75.82,12.377z M31.886,10.208  c1.891,0.218,8.608,0.899,11.02-0.1c0.737-0.305,1.32-1.137,1.937-2.017c0.396-0.564,1.132-1.615,1.469-1.615h7.377  c0.337,0,1.073,1.051,1.469,1.615c0.617,0.88,1.2,1.712,1.937,2.017c2.412,0.999,9.129,0.318,11.02,0.1  c1.698,2.219,3.397,4.834,3.684,5.857H28.201C28.489,15.043,30.188,12.427,31.886,10.208z M78.77,90.574  c0,1.627-1.324,2.951-2.951,2.951H24.18c-1.627,0-2.951-1.324-2.951-2.951v-73.77c0-1.627,1.324-2.951,2.951-2.951h3.449  c-0.727,1.324-1.12,2.457-0.82,3.071c0.192,0.392,0.578,0.618,1.059,0.618h44.262c0.482,0,0.867-0.225,1.059-0.618  c0.3-0.614-0.093-1.746-0.82-3.071h3.449c1.627,0,2.951,1.324,2.951,2.951V90.574z M50,13.115c-1.424,0-2.582-1.158-2.582-2.582  S48.576,7.951,50,7.951s2.582,1.158,2.582,2.582S51.424,13.115,50,13.115z M50,9.426c-0.61,0-1.107,0.496-1.107,1.107  c0,0.61,0.496,1.107,1.107,1.107s1.107-0.496,1.107-1.107C51.107,9.923,50.61,9.426,50,9.426z" /><path fill="#ffffff" d="M38.934,50v11.066H27.869V50H38.934 M38.934,48.525H27.869c-0.815,0-1.475,0.661-1.475,1.475v11.066  c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475V50C40.41,49.185,39.749,48.525,38.934,48.525  L38.934,48.525z M33.483,38.197c-0.008,0-0.016,0-0.024,0c-0.302,0-0.588-0.12-0.792-0.343l-3.77-4.111  c-0.413-0.451-0.382-1.147,0.069-1.559c0.451-0.412,1.151-0.379,1.563,0.071l2.989,3.267l7.698-7.698  c0.432-0.432,1.132-0.432,1.565,0c0.432,0.432,0.432,1.133,0,1.565l-8.516,8.5C34.058,38.097,33.776,38.197,33.483,38.197z   M38.934,34.271v4.664h-5.451H33.45h-5.581V27.869h11.066v1.194l1.45-1.45c-0.122-0.692-0.722-1.22-1.45-1.22H27.869  c-0.815,0-1.475,0.661-1.475,1.475v11.066c0,0.815,0.661,1.475,1.475,1.475h11.066c0.815,0,1.475-0.661,1.475-1.475v-6.136  L38.934,34.271z" /></svg>
                <h4 className="font-bold century"><span className="font-bold">Appel mensuel et suivi régulier</span></h4>
                <p>Maintenance permanente et suivi de performances mensuel pour vous tenir informé de l’évolution des performances de votre <strong className="font-normal">entreprise en ligne</strong>.</p>
              </div>
            </div>
          </section>
        </section>
        <section className="w-full flex mb-0 flex-col items-center lg:flex-row text-white bg-black century text-center mx-auto lg:text-justify px-16 xl:px-48 py-16">
          <div className="w-full lg:w-8/12 text-2xl">
            <h3>Vous souhaitez travailler avec <span className="text-bleu font-bold">notre agence de communication</span> à Toulouse ?</h3>
            <h4>Linkweb fait partie des agences de communication qui soutiennent les professionnels souhaitant développer leur présence online.</h4>
          </div>
          <div className="w-full mx-auto block lg:w-3/12">
            {/*<ButtonPage  text="CONTACTEZ-NOUS" url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white"/>*/}
            {/* <RoundButton url="/contact-agence-web-toulouse/" color="darkgrey" colortext="white" text="CONTACTEZ-NOUS" /> */}
            <button
              className="font-light roundedButton bg-bleu text-white hover:text-white flex justify-center mt-3 century items-center text-center text-sm md:text-md lg:text-lg rounded-huge px-8 py-4 mt-12"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/contact-agence-web-toulouse/';
              }}
            >CONTACTEZ-NOUS
                        </button>
          </div>
        </section>


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
query lastsThreePostsAgenceMarketingToulouse {
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
export default AgenceMarketingToulouse;




