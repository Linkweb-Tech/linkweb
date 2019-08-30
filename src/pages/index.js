import React from "react";
import { Link } from "gatsby";
import posed from 'react-pose';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/animhero";
import "../scss/hero.scss";
import "../scss/home.scss";


function IndexPage() {

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      /> 
      <Hero></Hero>
      <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
        <h2 data-aos='fade-right' className="text-center">
          <Link to="#" className="text-center text-black text-4xl century">
            Agence digitale
          </Link>
        </h2>
        <hr className="blue"></hr>
        <h3 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Notre savoir-faire n’est pas une compétence, il est humain</h3>
      </section>
      <section className="w-full flex flex-1 equipe min-h-600">
        <div className="w-1/4 bg-cover  imageDouble"  >

        </div>
        <div className="w-3/4 ">
          <div className="content">
            <h3 className="century capitalize text-2xl tracking-wider pb-3" data-aos="zoom-in">
              <span className="text-bleu">/</span>LINKWEB C’EST 20 TECHNICIENS
            </h3>
            <p data-aos='fade-left'><span className="text-bleu text-4xl">8</span>  développeurs Front-End & Back-End</p>
            <p data-aos='fade-left'><span className="text-bleu text-4xl">3</span>  spécialistes UI & UX design</p>
            <p data-aos='fade-left'><span className="text-bleu text-4xl">6</span>  professionnels du référencement web SEO & SEA</p>
            <p data-aos='fade-left'><span className="text-bleu text-4xl">3</span>  rédacteurs web spécialisés dans la rédaction et la gestion de contenu optimisé</p>
          </div>
          <div className="pictures w-full flex flex-1">
            <div className="w-1/3 bg-cover bg-black imageSimple"></div>
            <div className="w-1/3 bg-cover bg-white imageSimple"></div>
            <div className="w-1/3 bg-cover bg-bleu imageSimple"></div>
          </div>
        </div>
      </section>
      <section className="flex flex-1 home-step my-24 px-24">
        <div className="w-1/3 one px-12">
          <div className="flex flex-1">
            <div className="blackBulle">1</div>
            <section>
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                <span className="text-bleu">/</span>JE SOUHAITE DYNAMISER MA COMMUNICATION WEB
              </h3>
              <div className="content">
                  Faire appel à une agence de création web est une étape à franchir pour dynamiser sa communication web. Définir un projet selon des objectifs précis demande une expertise toute particulière. Propulser sa communication en ligne peut constituer un véritable moteur pour une entreprise.
              </div>
              <Link to="#" className="link flex justify-center mt-12 items-center text-xl">
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>
              En savoir plus
              </Link>
            </section>
          </div>
        </div>
        <div className="w-1/3 two px-12">
          <div className="flex flex-1">
            <div className="blackBulle">2</div>
            <section>
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                <span className="text-bleu">/</span>JE SUIS ACCOMPAGNÉ POUR DÉFINIR MA SOLUTION
              </h3>
              <div className="content">
                Besoins en termes de visibilité, notoriété ou bien d’image : il existe des solutions pour chaque entreprise. Nous vous accompagnons pour déterminer les contours de votre projet selon votre activité et vos besoins en termes de communication. Une étude concurrentielle sera également réalisée.
              </div>
              <Link to="#" className="link flex justify-center mt-12 items-center text-xl">
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>
              Être recontacté
              </Link>
            </section>
            </div>
          </div>
        <div className="w-1/3 three px-12">
          <div className="flex flex-1">
            <div className="blackBulle">3</div>
            <section>
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                <span className="text-bleu">/</span>JE FAIS LE CHOIX D'EXPERTS POUR MENER MON PROJET
              </h3>
              <div className="content">
                Nos consultants en communication web d’Agen (47) et Toulouse (31) définissent les contours de votre projet et se chargent de l’application de votre stratégie à travers les différents axes définis. Notre équipe est composée de spécialistes de la création de site internet, de référencement naturel et Ads.
              </div>
              <Link to="#" className="link flex justify-center mt-12 items-center text-xl">
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>
              Demander un devis
              </Link>
            </section>
            
          </div>

        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
