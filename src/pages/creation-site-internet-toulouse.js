import React from "react";
import { Link } from "gatsby";
import posed from 'react-pose';
import Layout from "../components/layout";
import Button from "../components/button";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import Bg from "../images/creation-site-internet-background.jpg"


function CreationSiteInternetToulousePage() {

    return (
        
    <Layout>

        <SEO
            title="Création de site internet Toulouse"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        /> 
        <PageTransition
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
        >
            <section className="w-full h-screen mx-auto px-4 py-6 my-4 bg-no-repeat bg-cover flex justify-center items-center" style={{backgroundImage:'url(' + Bg +')'}}>
                <h1 data-aos="fade-up" data-aos-delay="500" className="century text-7xl text-center text-white">
                Création site internet Toulouse<span className="text-bleu">/</span>Agen
                </h1>
            </section>
        </PageTransition>
    </Layout>
        
    );
};

export default CreationSiteInternetToulousePage;