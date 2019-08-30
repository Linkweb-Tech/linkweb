import React from "react";
import { Link } from "gatsby";
import posed from 'react-pose';
import Layout from "../components/layout";
import Button from "../components/button";
import SEO from "../components/seo";
import Hero from "../components/animhero";
import loupe from "../images/loupe.png";
import menu from "../images/menu.png";
import souris from "../images/mouse.png";
import mac from "../images/mac-agence.png";
import tlse from "../images/logo_universite-federale.png";
import peugeot from "../images/peugeot.png";
import onco from "../images/logo-onco.png";
import sdis from "../images/logo-sdis47.png";
import normand from "../images/normandie.png";
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
            <div className="blackBulle" data-aos="fade-up">1</div>
            <section>
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                <span className="text-bleu">/</span>JE SOUHAITE DYNAMISER MA COMMUNICATION WEB
              </h3>
              <div className="content pb-6">
                  Faire appel à une agence de création web est une étape à franchir pour dynamiser sa communication web. Définir un projet selon des objectifs précis demande une expertise toute particulière. Propulser sa communication en ligne peut constituer un véritable moteur pour une entreprise.
              </div>
              <Button url="#" text="En savoir plus" position="center" />

            </section>
          </div>
        </div>
        <div className="w-1/3 two px-12">
          <div className="flex flex-1">
            <div className="blackBulle" data-aos="fade-up">2</div>
            <section>
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                <span className="text-bleu">/</span>JE SUIS ACCOMPAGNÉ POUR DÉFINIR MA SOLUTION
              </h3>
              <div className="content pb-6">
                Besoins en termes de visibilité, notoriété ou bien d’image : il existe des solutions pour chaque entreprise. Nous vous accompagnons pour déterminer les contours de votre projet selon votre activité et vos besoins en termes de communication. Une étude concurrentielle sera également réalisée.
              </div>
              <Button url="#" text="Être recontacté" position="center" />
            </section>
            </div>
          </div>
        <div className="w-1/3 three px-12">
          <div className="flex flex-1">
            <div className="blackBulle" data-aos="fade-up">3</div>
            <section>
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                <span className="text-bleu">/</span>JE FAIS LE CHOIX D'EXPERTS POUR MENER MON PROJET
              </h3>
              <div className="content pb-6">
                Nos consultants en communication web d’Agen (47) et Toulouse (31) définissent les contours de votre projet et se chargent de l’application de votre stratégie à travers les différents axes définis. Notre équipe est composée de spécialistes de la création de site internet, de référencement naturel et Ads.
              </div>
              <Button url="#" text="Demander un devis" position="center" />
            </section>
            
          </div>

        </div>
      </section>

      <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
        <h2 data-aos='fade-right' className="text-center text-4xl century">
          Création de <span className="text-bleu">Sites internet</span> et <span className="text-bleu">Stratégies Web</span> sur-mesure 
        </h2>
        <hr className="blue"></hr>
        <h3 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Agence Web Toulouse et Agen</h3>
      </section>
      <section  className="crea flex flex-1 w-full ml-0">
        <div className="w-3/4 bg-darkgrey py-12 flex justify-end">
          <div className="max-w-4xl w-full mr-0">
            <h3 className="century text-white flex-1 capitalize text-2xl tracking-wider pb-3 w-full "  data-aos="zoom-in">
              <span className="text-bleu">/</span>CRÉATION DE SITES WEB
            </h3>
            <div className="flex">
              <div className="w-1/2 text-white">
              Élaboration et refonte de site internet, site e-commerce,  site vitrine, solutions web et intranet sur-mesure selon vos besoins fonctionnels et les attentes de vos utilisateurs.<br /><br />

              Création de design moderne et ergonomique qui s’adapte à toutes les tailles d’écrans : mobile, tablette et desktop.
              </div>
              <div className="w-1/2 flex">
                <div className="w-1/3">
                  <img 
                    src={ loupe }
                    className="m-auto"
                  />
                  <Link to="#" className="pt-6 block century text-sm text-center text-white capitalize tracking-widest">
                   Création site <br /> web sur-mesure
                  </Link>
                </div>
                <div className="w-1/3">
                  <img 
                    src={ menu }
                    className="m-auto"
                  />
                  <Link to="#" className="pt-6 block century text-sm text-center text-white capitalize tracking-widest">
                   Responsive <br />design
                  </Link>
                </div>
                <div className="w-1/3">
                
                  <img 
                    src={ souris }
                    className="m-auto"
                  />
                  <Link to="#" className="pt-6 block century text-sm text-center text-white capitalize tracking-widest">
                   Interface <br /> ergonomique
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ref flex flex-1 w-full py-12">
        <div className="w-1/2 ">
          <img 
            src={mac}
          />
        </div>
        <div className="w-1/2 py-32 max-w-lg ml-0">
          <h3 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in">
            <span className="text-bleu">/</span>RÉFÉRENCEMENT NATUREL
          </h3>
          <h4 className="century text-lg tracking-wider pb-3">
            <strong className="font-bold">Le référenceur en charge de votre site web collabore avec vous chaque mois pour vous rendre compte de l’évolution du référencement de votre site internet.</strong>
          </h4>
          <p>À partir d’un audit de site, nous élaborons votre stratégie de référencement site internet et analysons les statistiques relatives à votre site internet pour une optimisation qui vous apportera une visibilité pertinente avec les moteurs de recherche.</p>
          <Button url="#" text="En savoir plus sur le référencement naturel SEO" position="start" />

          <h3 className="century capitalize text-2xl tracking-wider pt-12 pb-6" data-aos="zoom-in">
            <span className="text-bleu">/</span>RÉFÉRENCEMENT ADWORDS
          </h3>
          <h4 className="century text-lg tracking-wider pb-3">
            <strong className="font-bold">Nous optimisons le choix des mots-clés et la configuration de votre plan publicitaire pour respecter votre budget et maximiser vos conversions.</strong>
          </h4>
          <p>Nous créons votre campagne publicitaire Adwords en prenant en compte vos objectifs de visibilité et vos attentes de retours concrets en termes de référencement payant.</p>
          <Button url="#" text="En savoir plus sur les campagnes Adwords SEA" position="start" />
        </div>
      </section>

      <section className="max-w-5xl w-full mx-auto px-4 py-2 my-2">
        <h2 data-aos='fade-right' className="text-center text-black text-4xl century">
          Ils nous ont fait confiance
        </h2>
        <hr className="blue"></hr>
        <h3 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Un échantillon de nos réalisations</h3>
      </section>
      <section className="max-w-5xl flex w-full mx-auto px-4 py-2 my-2">
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
      </section>

      <section className="max-w-5xl w-full mx-auto px-4 py-12 my-12">
        <h2 data-aos='fade-right' className="text-center text-black text-4xl century">
          Vous avez un besoin ?
        </h2>
        <hr className="blue"></hr>
        <h3 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Nous sommes proactifs</h3>
      </section>
    </Layout>
  );
}

export default IndexPage;
