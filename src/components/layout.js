import React from "react";
import {Link} from "gatsby";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import PageTransition from "gatsby-plugin-page-transitions";
import Header from "./header";
import LinkwebWhite from "../images/logo-linkweb.png"
import "../scss/global.scss";


function Layout({ children }) {
  
  setTimeout(() => {
    console.log(location.pathname);
    if(typeof location != 'undefined' ) {
      const path = location.pathname.replace(/\//g,'');
    };
  }, 1000);
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="beforeOverlay flex flex-col font-sans min-h-screen text-gray-900 bg-white relative   pb-128">
      <Header siteTitle={data.site.siteMetadata.title} path={location.pathname} />
      {/* <PageTransition
          defaultStyle={{
            transition: 'left 200ms cubic-bezier(0.47, 0, 0.75, 0.72)',
            transitionDuration: '1s',
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
          transitionTime={600}
        > */}
      <main className="flex flex-col flex-1 md:justify-center w-full z-20 bg-white min-h-screen">
        {children}
      </main>
      {/* </PageTransition> */}
      <footer className="bg-darkgrey w-full flex items-center fixed z-10 ">
        <section className="flex justify-start max-w-6xl mx-auto p-4 md:p-8 text-sm">
          <section className="w-1/4" >
            <div className="textwidget custom-html-widget">
              <div className="copy text-white text-md">
                <img 
                  src={ LinkwebWhite }
                  className="w-full mb-6"
                />
                <p> © 2019 <strong>Linkweb</strong> - <a href="https://linkweb.fr/mentions-legales">Mentions légales</a></p> 
                <a className="text-xs"  title="linkweb" href="https://www.linkweb.fr/" target="_blank" rel="noopener">Création de sites internet Agen et Toulouse</a>
              </div> <br />
            </div>
          </section>
          <section className="w-1/4 pl-6 flex flex-col navFooter">
            <h3 className="century text-2xl text-white pl-4 pb-6">Navigation</h3>
              <Link
                to="/"
                className="block md:inline-block mt-4 md:mt-0  no-underline text-white century py-2 px-4"
              >
                <span className="chevronFooter">></span> Accueil
              </Link>
  
              <Link
                to="/about"
                className="block md:inline-block mt-2 md:mt-0  no-underline text-white century py-2 px-4"
              >
                <span className="chevronFooter">></span> Création Site Internet
              </Link>
  
              <Link
                to="/contact"
                className="block md:inline-block mt-4 md:mt-0 no-underline text-white century py-2 px-4"
              >
                <span className="chevronFooter">></span> Référencement
              </Link>
              <Link
                to="#"
                className="block md:inline-block mt-4 md:mt-0  no-underline text-white century py-2 px-4"
              >
                <span className="chevronFooter">></span> Agence Web
              </Link>
              <Link
                to="#"
                className="block md:inline-block mt-4 md:mt-0  no-underline text-white century py-2 px-4"
              >
                <span className="chevronFooter">></span> Nos Réalisations
              </Link>
              <Link
                to="#"
                className="block last md:inline-block mt-0s md:mt-0  no-underline text-white century bg-bleu text-white py-2 px-4"
              >
                <span className="chevronFooter">></span> Demander un devis
              </Link>
          </section>
          <section className="w-1/4 pl-6 flex flex-col infos">
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
                  <span className="text-white pl-2"><a href="tel:0533950030">0533950030</a></span>
                </li>
                <li className="flex items-center pb-2">
                  <svg  viewBox="0 0 1792 1792"><path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
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
                <li className="flex items-center pb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1408 1792"><path d="M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5t-57.5-12.5-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5t-215.5-264.5q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47.5-12.5-57.5-3.5-52.5q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"></path>
                  </svg>
                  <span className="text-white pl-2"><a href="tel:0533950030">0533950030</a></span>
                </li>
                <li className="flex items-center pb-2">
                  <svg  viewBox="0 0 1792 1792"><path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                  </svg>
                  <span className="text-white pl-2"><a href="mailto:contact@linkweb.fr">contact@linkweb.fr</a></span>
                </li>
              </ul>
            </div>
          </section>
          <section className="w-1/4 pl-6 flex flex-col liens">
          <div className="flex flex-col  items-center">
              <div className="flex mb-2 items-center">
                <img 
                  src={ LinkwebWhite }
                  className="w-32 mb-1"
                />
                <span className="century text-2xl pl-2 text-white">le blog</span>
              </div>
              <Link
                to="#"
                className=" w-full block last md:inline-block mt-0s md:mt-0  no-underline text-white century bg-bleu text-center py-2 px-4"
              >
                L'actualités digitale
              </Link>
            </div>
            <div className="flex flex-col mt-12 items-center">
              <div className="flex mb-2 items-center">
                <img 
                  src={ LinkwebWhite }
                  className="w-32 mb-1"
                />
                <span className="century text-2xl pl-2 text-white">recrute</span>
              </div>
              <Link
                to="#"
                className=" w-full block last md:inline-block mt-0s md:mt-0  no-underline text-white century bg-bleu text-center py-2 px-4"
              >
                Voir les offres
              </Link>
            </div>
          </section>
        </section>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
