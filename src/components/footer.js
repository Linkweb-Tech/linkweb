import React, { Component } from "react";
import { Link } from 'gatsby';
import LinkwebWhite from "../images/logo-linkweb.png";
import Qualiopi from "../images/qualiopi-lw-sa.png";
import googlePartner from "../images/PartnerBadge-RGB.png";

//import loadable from '@loadable/component';
//const ClientZendesk = loadable(() => import('react-zendesk'))
//const ClientZendesk = React.lazy( ()=> import("react-zendesk"));

// ZENDESK




//const ZENDESK_KEY = "0799bea2-f202-4823-8ba0-93bc404a2ec6";
class Footer extends Component {

    // constructor(props) {
    //     super(props);

    // }


    render() {
        // Take contact form as an example
        // Let's customise our contact form appearance, launcher and add prefill content
        const setting = {
            color: {
                theme: "#37cfee"
            },
            launcher: {
                chatLabel: {
                    "fr-FR": "Besoin de renseignements ? "
                }
            },
            contactForm: {
                fields: [
                    { id: "description", prefill: { "*": "MEs info" } }
                ]
            }
        };

        return (
            
            <footer className="bg-darkgrey w-full flex flex-col items-center relative z-30 ">
                <section className="bg-darkgrey w-full flex items-center relative z-30 ">
                <section className="w-full  xl:w-9/12 flex justify-start mx-auto py-6 md:px-8 text-sm flex-col-reverse md:flex-row">
                    <section className="w-full md:w-1/2 lg:w-1/4 px-4 py-6 md:px-8" >
                        <div className="textwidget custom-html-widget">
                            <div className="copy text-white text-md">
                            <h3 className="century text-2xl text-white pl-4 pb-6">Nos agences link<span className="text-bleu">/</span>web</h3> 
                        <Link
                            to="/"
                            className="block mt-4 md:mt-0  no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Agence Web Toulouse
                        </Link>
                        <Link
                            to="/agence-web-agen/"
                            className="block mt-4 md:mt-0  no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Agence Web Agen
                        </Link>
                        <Link
                            to="/agence-web-bordeaux/"
                            className="block mt-4 md:mt-0  no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Agence Web Bordeaux
                        </Link>
                        <Link
                            to="/agence-web-lyon/"
                            className="block mt-4 md:mt-0  no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Agence Web Lyon
                        </Link>
                        <Link
                            to="/agence-web-strasbourg/"
                            className="block mt-4 md:mt-0  no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Agence Web Strasbourg
                        </Link>
                        <Link
                            to="/agence-web-marseille/"
                            className="block mt-4 md:mt-0  no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Agence Web Marseille
                        </Link>
                        <Link
                            to="/agence-web-nice/"
                            className="block mt-4 md:mt-0  no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Agence Web Nice
                        </Link>
                        <Link
                            to="/agence-web-montpellier/"
                            className="block mt-4 md:mt-0  no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Agence Web Montpellier
                        </Link>
                        <Link
                            to="/agence-web-la-rochelle/"
                            className="block mt-4 md:mt-0  no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Agence Web La Rochelle
                        </Link>
                        
                        
                                {/* <img
                                    src={LinkwebWhite}
                                    alt="Linkweb"
                                    width="150px"
                                    className="my-3 ml-4"
                                /> */}
                                {/* <h3 className="century text-2xl text-white pl-4 pt-6">Certifications</h3> */}
                                <br />
                                {/* <a href="https://www.data-dock.fr/?q=datadock" target="_blank" rel="noreferrer noopener"><img src={Datadock} width="200px" alt="Formation SEO Toulouse" /></a> */}
                                {/* <img src={googlePartner} width="200px" className="mt-3" alt="Formation SEO Toulouse" /> */}
                            </div> <br />
                        </div>
                    </section>
                    <section className="w-full md:w-1/2 lg:w-1/4 md:w-1/2 lg:w-1/4 px-4 py-6 md:px-8 flex flex-col navFooter">
                        <h3 className="century text-2xl text-white pl-4 pb-6">Navigation</h3>
                        <Link
                            to="/"
                            className="block md:inline-block mt-4 md:mt-0 no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Agence web
                        </Link>

                        <Link
                            to="/creation-site-internet-toulouse/"
                            className="block md:inline-block mt-2 md:mt-0  no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Création Site Internet à Toulouse
                        </Link>

                        <Link
                            to="/creation-de-site-internet-a-agen/"
                            className="block md:inline-block mt-2 md:mt-0  no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Création Site Internet à Agen
                        </Link>

                        <Link
                            to="/referencement-toulouse/"
                            className="block md:inline-block mt-4 md:mt-0 no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Référencement Toulouse
                        </Link>
                        <Link
                            to="/referencement-agen/"
                            className="block md:inline-block mt-4 md:mt-0 no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Référencement Agen
                        </Link>
                        <Link
                            to="/agence-communication-toulouse/"
                            className="block md:inline-block mt-4 md:mt-0 no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Agence Communication Toulouse
                        </Link>
                        <Link
                            to="/agence-community-management/"
                            className="block md:inline-block mt-4 md:mt-0 no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Social Media
                        </Link>
                        <Link
                            to="/formation-referencement/referencement-naturel-google-seo/"
                            className="block md:inline-block mt-4 md:mt-0 no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Formations
                        </Link>
                        {/* <Link
                            to="/agence-digitale-toulouse/"
                            className="block md:inline-block mt-4 md:mt-0  no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Agence Digitale
                        </Link> */}
                        <Link
                            to="/agence-de-communication-agen-47-toulouse-31/"
                            className="block md:inline-block mt-4 md:mt-0  no-underline text-white century py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Nos Réalisations
                        </Link>
                        <Link
                            to="/contact-agence-web-toulouse/"
                            className="block last md:inline-block mt-0s md:mt-0  no-underline text-white century bg-bleu text-white py-2 px-4"
                        >
                            <span className="chevronFooter">></span> Demander un devis
                        </Link>
                    </section>
                    <section className="w-full md:w-1/2 lg:w-1/4 md:px-8 py-6 pb-0 px-4  flex flex-col infos">
                        <h3 className="century text-2xl text-white pl-4 pb-6">Informations</h3>
                        <div className="">
                            <ul className="pl-4">
                                <li className="flex items-center pb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 512h256v-512h-256v512zm160-448h64v64h-64v-64zm0 128h64v64h-64v-64zm0 128h64v64h-64v-64zm-128-256h64v64h-64v-64zm0 128h64v64h-64v-64zm0 128h64v64h-64v-64zm256-160h224v32h-224zm0 352h64v-128h96v128h64v-288h-224z"></path></svg>
                                    <span className="text-white pl-2">Linkweb à Agen</span>
                                </li>
                                <li className="flex items-center pb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1792"><path d="M1408 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"></path>
                                    </svg>
                                    <span className="text-white pl-2">10 rue Albert Ferrasse 47550 Boé</span>
                                </li>
                                <li className="flex items-center pb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1408 1792"><path d="M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5t-57.5-12.5-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5t-215.5-264.5q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47.5-12.5-57.5-3.5-52.5q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"></path>
                                    </svg>
                                    <span className="text-white pl-2"><a href="tel:0533950030">05 33 95 00 30</a></span>
                                </li>
                                <li className="flex items-center pb-2">
                                    <svg viewBox="0 0 1792 1792"><path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                                    </svg>
                                    <span className="text-white pl-2"><a href="mailto:contact@linkweb.fr">contact@linkweb.fr</a></span>
                                </li>
                            </ul>
                            <ul className="pl-4 pt-6">
                                <li className="flex items-center pb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 512h256v-512h-256v512zm160-448h64v64h-64v-64zm0 128h64v64h-64v-64zm0 128h64v64h-64v-64zm-128-256h64v64h-64v-64zm0 128h64v64h-64v-64zm0 128h64v64h-64v-64zm256-160h224v32h-224zm0 352h64v-128h96v128h64v-288h-224z"></path></svg>
                                    <span className="text-white pl-2">Linkweb à Toulouse</span>
                                </li>
                                <li className="flex items-center pb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1792"><path d="M1408 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"></path>
                                    </svg>
                                    <span className="text-white pl-2">44 Rue de Bayard 31000 Toulouse</span>
                                </li>
                                {/* <li className="flex items-center pb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1408 1792"><path d="M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5t-57.5-12.5-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5t-215.5-264.5q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47.5-12.5-57.5-3.5-52.5q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"></path>
                                    </svg>
                                    <span className="text-white pl-2"><a href="tel:0533950030">05 33 95 00 30</a></span>
                                </li>
                                <li className="flex items-center pb-2">
                                    <svg viewBox="0 0 1792 1792"><path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                                    </svg>
                                    <span className="text-white pl-2"><a href="mailto:contact@linkweb.fr">contact@linkweb.fr</a></span>
                                </li> */}
                            </ul>
                            {/* <a href="https://www.data-dock.fr/?q=datadock" target="_blank" rel="noreferrer noopener"> */}<img className="ml-4 mt-4" src={Qualiopi} width="245px" alt="Formation SEO Toulouse" />{/*</a>*/}
                        </div>
                    </section>
                    <section className="w-full md:w-1/2 lg:w-1/4 py-6 md:px-4 px-4 flex flex-col liens">
                        <div className="flex flex-col  items-center">
                            <div className="flex mb-2 flex-wrap items-center">
                                <img
                                    src={LinkwebWhite}
                                    alt="Linkweb"
                                    className="w-24"
                                />
                                <span className="century text-base lg:text-xl pl-2 text-white"> le blog</span>
                            </div>
                            <Link
                                to="/actualite-digitale/"
                                className=" w-full block last md:inline-block mt-0s md:mt-0  no-underline text-white century bg-bleu text-center py-2 px-4"
                            >
                                L'actualité digitale
                            </Link>
                        </div>
                        <div className="flex flex-col mt-6 items-center">
                            <div className="flex mb-2 flex-wrap items-center">
                                <img
                                    src={LinkwebWhite}
                                    alt="Linkweb"
                                    className="w-24"
                                />
                                <span className="century text-base lg:text-xl pl-2 text-white"> recrute</span>
                            </div>
                            <Link
                                to="/recrutement-creation-site-internet-agen/"
                                className=" w-full block last md:inline-block mt-0s md:mt-0  no-underline text-white century bg-bleu text-center py-2 px-4"
                            >
                                Voir les offres
                            </Link>
                        </div>
                        <div className="flex flex-col mt-6 items-center">
                            <div className="flex mb-2 flex-wrap items-center">
                                <img
                                    src={LinkwebWhite}
                                    alt="Linkweb"
                                    className="w-24"
                                />
                                <span className="century text-base lg:text-xl pl-2 text-white"> F.A.Q.</span>
                            </div>
                            <Link
                                to="/faq/"
                                className=" w-full block last md:inline-block mt-0s md:mt-0  no-underline text-white century bg-bleu text-center py-2 px-4"
                            >
                                Foire aux Questions
                            </Link>
                        </div>
                            {/*<Link className="my-6 century text-white font-bold text-md" to="/faq/">
                            <span className="text-bleu century">></span> Foire aux Questions
                            </Link>*/}
                            <div className="flex flex-col mt-6 items-center">
                            <div className="flex mb-2 flex-wrap items-center">
                                <img
                                    src={LinkwebWhite}
                                    alt="Linkweb"
                                    className="w-24"
                                />
                                <span className="century text-base lg:text-xl pl-2 text-white"> Entreprises</span>
                            </div>
                            <Link
                                to="/creation-site-internet-toulouse/secteurs-activites/"
                                className=" w-full block last md:inline-block mt-0s md:mt-0  no-underline text-white century bg-bleu text-center py-2 px-4"
                            >
                                Votre secteur d'activité
                            </Link>
                            </div>
                            <div className="flex flex-col mt-6 items-center">
                            <div className="flex mb-2 flex-wrap items-center">
                                <img
                                    src={LinkwebWhite}
                                    alt="Linkweb"
                                    className="w-24"
                                />
                                <span className="century text-base lg:text-xl pl-2 text-white"> Formations</span>
                            </div>
                            <Link
                                to="/formation-referencement/referencement-naturel-google-seo/"
                                className=" w-full block last md:inline-block mt-0s md:mt-0  no-underline text-white century bg-bleu text-center py-2 px-4"
                            >
                                Nos formations
                            </Link>
                        </div>

                    </section>
                </section>
                </section>
                <div className="text-white century mx-auto">
                    <p className="ml-4"> © 2023 <strong>Linkweb</strong> - <a href="/mentions-legales/">Mentions légales</a></p>
                    <span className="ml-4 text-xs" title="linkweb" href="/" target="_blank" rel="noopener">Création de sites internet Agen et Toulouse</span>
                </div>
                <br />
                {/* <ClientZendesk zendeskKey={ZENDESK_KEY} {...setting} onLoaded={() => console.log('is loaded')} /> */}
            
            </footer>
        );
    }
}

export default Footer;