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
      <section className="h-screen">

      </section>
    </Layout>
  );
}

export default IndexPage;
