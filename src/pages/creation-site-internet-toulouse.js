import React from "react";
import { Link } from "gatsby";
import posed from 'react-pose';
import Layout from "../components/layout";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import tlse from "../images/logo_universite-federale.png";
import peugeot from "../images/peugeot.png";
import onco from "../images/logo-onco.png";
import sdis from "../images/logo-sdis47.png";
import normand from "../images/normandie.png";
import blocBg from "../images/background.jpg";
import Bg from "../images/creation-site-internet-background.jpg"


function CreationSiteInternetToulousePage(props) {

    return (
        
    <Layout location={props.location}>

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
            <section className="w-full h-screen mx-auto px-4 py-6 bg-no-repeat bg-cover flex flex-col justify-center items-center" style={{backgroundImage:'url(' + Bg +')'}}>
                <h1 data-aos="fade-up" data-aos-delay="500" className="century text-7xl text-center text-white">
                Création site internet Toulouse<span className="text-bleu">/</span>Agen
                </h1>
                <h3 className="italic text-2xl text-white">Tous les jours, des millions de sites internet voient le jour, pourquoi pas le vôtre ?</h3>
                <RoundButton url="#" text="Je veux créer mon site internet professionnel" />
            </section>
            <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                <h2 data-aos='fade-right' className="text-center text-4xl century">
                    Nous travaillons main dans la main pour mettre en place un site qui vous ressemble.
                </h2>
                <hr className="blue"></hr>
                
            </section>
            <section className="max-w-5xl flex-wrap flex w-full mx-auto px-4 py-2 my-2 ">
                <div className="w-1/5" data-aos='fade-up'>
                <img 
                    src={peugeot}
                />
                </div>
                <div className="w-1/5" data-aos='fade-up' data-aos-delay='200'>
                <img 
                    src={normand}
                />
                </div>
                <div className="w-1/5" data-aos='fade-up' data-aos-delay='400'>
                <img 
                    src={onco}
                />
                </div>
                <div className="w-1/5" data-aos='fade-up' data-aos-delay='600'>
                <img 
                    src={tlse}
                />
                </div>
                <div className="w-1/5" data-aos='fade-up' data-aos-delay='800'>
                <img 
                    src={sdis}
                />
                </div>
                <div className="w-full" data-aos='zoom-in'>
                    <p className="text-md text-center py-12 century">Vous souhaitez une création de site internet à Toulouse ? Avoir un site internet professionnel est indispensable pour chaque entreprise de nos jours. Notre agence web Linkweb répond à vos attentes pour créer un site qui s’adapte à vos besoins.</p>
                </div>
            </section>
            <section className="flex-wrap flex w-full mx-auto py-2 my-2 ">
                <div className=" font-bold	w-1/3 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white" style={{background:'#00cfff url( '+ blocBg +')', backgroundBlendMode: 'multiply', backgroundSize: 'cover'}}>
                    <h3 className="text-xl pb-6" >SITE INTERNET VITRINE</h3>
                    <p>Mettre en avant vos services, activités, et même votre entreprise va vous permettre de dynamiser votre communication. Le site internet vitrine est idéal pour les TPE/PME souhaitant faire découvrir leur activité et mettre en avant leurs prestations et ainsi acquérir de nouveaux clients près de chez eux. </p>
                    <RoundButton url="#" text="Création de site vitrine" />
                </div>
                <div className="font-bold	w-1/3 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white" style={{background:'#009991 url( '+ blocBg +')', backgroundBlendMode: 'multiply', backgroundSize: 'cover'}}>
                    <h3 className="text-xl pb-6" >SITE INTERNET E-COMMERCE</h3>
                    <p>Mettre en place un site e-commerce va vous permettre de développer une plateforme de vente en ligne de vos produits. Le site internet e-commerce s’adresse aux commerçants et boutiques qui souhaitent développer leur chiffre d’affaire en ciblant une nouvelle clientèle.</p>
                    <RoundButton  url="#" text="Créer une boutique en ligne" />
                </div>
                <div className="font-bold w-1/3 px-6 flex justify-center items-center flex-col min-h-400 text-center text-white" style={{background:'#00b1e2 url( '+ blocBg +')', backgroundBlendMode: 'multiply', backgroundSize: 'cover'}}>
                    <h3 className="text-xl pb-6" >SITE INTERNET SUR-MESURE</h3>
                    <p>Mettre en place un site internet multifonctions : réservation, simulation, configurateur et bien plus encore. Créer un site internet sur-mesure, c’est aussi faire le choix d’optimiser votre organisation grâce à un outil numérique à la portée de tous de type intranet.</p>
                    <RoundButton url="#" text="Créer un site internet sur-mesure" />
                </div>
            </section>
        </PageTransition>
    </Layout>
    );
};

export default CreationSiteInternetToulousePage;