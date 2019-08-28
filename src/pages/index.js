import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import "../scss/hero.scss";


function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      /> 
      <section className="hero flex items-center justify-end">
        <span className="orbs flex flex-1 justify-end max-w-6xl mx-auto"> 
          <span className="top text-white century" >l</span> 
          <span className="top text-white century" >i</span> 
          <span className="top text-white century" >n</span> 
          <span className="top text-white century" >k</span> 
          <span className="blue text-bleu" >/</span> 
          <span className="top text-white century" >w</span> 
          <span className="top text-white century" >e</span> 
          <span className="top text-white century" >b</span> 
        </span>
        
      </section>
      <section className="max-w-4xl mx-auto px-4">

      </section>
    </Layout>
  );
}

export default IndexPage;
