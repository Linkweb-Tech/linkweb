import React from "react";
import posed from 'react-pose';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/animhero";
import "../scss/hero.scss";


function IndexPage() {

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      /> 
      <Hero></Hero>
      <section className="max-w-4xl mx-auto px-4">

      </section>
    </Layout>
  );
}

export default IndexPage;
