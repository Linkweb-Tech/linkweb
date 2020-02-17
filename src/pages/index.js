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
import mac from "../images/mac-agence.jpg";
import tlse from "../images/logo_universite-federale.png";
import peugeot from "../images/peugeot.png";
import onco from "../images/logo-onco.png";
import sdis from "../images/logo-sdis47.png";
import normand from "../images/normandie.png";
import hg from "../images/logo_cd31.svg";

import Accordion from "../components/accordion";
import PageTransition from "gatsby-plugin-page-transitions";
import "../scss/hero.scss";
import "../scss/home.scss";


function IndexPage(props) {

  return (

    <Layout location={props.location}>
      <SEO
        title="Agence Web Toulouse, Agen - Création Site Internet - Linkweb"
        description="Création de site internet sur-mesure près d’Agen et Toulouse - Définition stratégique - Accompagnement professionnel - Devis rapide et gratuit."
        url="https://linkweb.fr/"
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
      <Hero></Hero>
      <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
        <h2 /*data-aos='fade-right'*/ className="text-center">
          <Link className="hover:text-bleu" to="/agence-web-toulouse/" className="text-center text-black text-4xl century">
            Agence digitale Toulouse et Agen
          </Link>
        </h2>
        <hr className="blue"></hr>
        <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center century italic pb-6">Notre savoir-faire n’est pas une compétence, il est humain</h3>
      </section>
      <section className="w-full flex flex-1 equipe min-h-0 lg:min-h-600">
        <div className="w-1/4 bg-cover  imageDouble"  >

        </div>
        <div className="w-3/4 ">
          <div className="content">
            <h3 className="century capitalize text-2xl tracking-wider pb-3" /*data-aos="zoom-in"*/>
              <span className="text-bleu">/</span>LINKWEB C’EST 20 TECHNICIENS
            </h3>
            <p /*data-aos='fade-left'*/><span className="text-bleu text-4xl">8</span>  développeurs Front-End & Back-End</p>
            <p /*data-aos='fade-left'*/><span className="text-bleu text-4xl">3</span>  spécialistes UI & <strong>UX design</strong> et professionnels du <strong>développement web</strong></p>
            <p /*data-aos='fade-left'*/><span className="text-bleu text-4xl">6</span>  professionnels du <strong><Link className="hover:text-bleu" to="/agence-referencement-toulouse/">référencement web</Link></strong> SEO & SEA pour l'optimisation des <strong>pages</strong> web.</p> 
            <p /*data-aos='fade-left'*/><span className="text-bleu text-4xl">3</span>  rédacteurs web spécialisés dans la rédaction et la <strong>gestion de contenu</strong> optimisé</p>
          </div>
          <div className="pictures w-full hidden flex-1 sm:hidden md:hidden lg:flex xl:flex">
            <div className="w-1/3 bg-cover bg-black imageSimple "></div>
            <div className="w-1/3 bg-cover bg-white imageSimple "></div>
            <div className="w-1/3 bg-cover bg-bleu imageSimple "></div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row flex-1 home-step my-12 px-4 xl:my-24 xl:px-24">
        <div className="w-full xl:w-1/3 one px-12">
          <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="blackBulle my-6" /*data-aos="fade-up"*/>1</div>
            <section>
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                <span className="text-bleu">/</span>JE SOUHAITE DYNAMISER MA COMMUNICATION WEB
              </h3>
              <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                  Faire appel à une <strong>agence de création web</strong> est une étape à franchir pour <strong>dynamiser sa communication web</strong> et définir une <strong>stratégie digitale</strong>. Définir un projet selon des objectifs précis demande une expertise toute particulière. <strong>Propulser sa communication en ligne</strong> par le <strong>webmarketing</strong> peut constituer un véritable moteur pour une entreprise.
              </div>
              <Button url="/blog/foire-aux-questions/" text="En savoir plus" position="center" />

            </section>
          </div>
        </div>
        <div className="w-full xl:w-1/3 two px-12">
          <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="blackBulle my-6" /*data-aos="fade-up"*/>2</div>
            <section>
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                <span className="text-bleu">/</span>JE SUIS ACCOMPAGNÉ POUR DÉFINIR MA SOLUTION
              </h3>
              <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                Besoins en termes de <strong>visibilité</strong>, <strong>notoriété</strong> ou bien d’<strong>image</strong> : il existe des solutions pour chaque entreprise. Nous vous accompagnons pour déterminer les <strong>contours de votre projet</strong> selon votre <strong>activité</strong> et <strong>vos besoins en termes de communication</strong>. Une <strong>étude concurrentielle</strong> sera également réalisée.
              </div>
              <Button url="/contact-agence-web-toulouse/" text="Être recontacté" position="center" />
            </section>
            </div>
          </div>
        <div className="w-full xl:w-1/3 three px-12">
          <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="blackBulle my-6" /*data-aos="fade-up"*/>3</div>
            <section>
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" /*data-aos="zoom-in"*/>
                <span className="text-bleu">/</span>JE FAIS LE CHOIX D'EXPERTS POUR MENER MON PROJET
              </h3>
              <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                Nos <strong>consultants en communication web</strong> d’<strong>Agen (47)</strong> et <strong>Toulouse (31)</strong> définissent les contours de votre projet et se chargent de l’<strong>application de votre stratégie</strong> à travers les différents axes définis. Notre équipe est composée de spécialistes de la <strong>création de site internet</strong>, de <strong>référencement naturel</strong> et <strong>Ads</strong>.
              </div>
              <Button url="/contact-agence-web-toulouse/" text="Demander un devis" position="center" />
            </section>
            
          </div>

        </div>
      </section>

      <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
        <h2 /*data-aos='fade-right'*/ className="text-center text-4xl century">
          <Link className="hover:text-bleu" to="/creation-site-internet-toulouse/">Création de <span className="text-bleu">Sites internet</span></Link> et <span className="text-bleu">Stratégies Web</span> sur-mesure 
        </h2>
        <hr className="blue"></hr>
        <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center century italic pb-6"><Link className="hover:text-bleu" to="/agence-web-toulouse/">Agence Web Toulouse</Link> et Agen</h3>
      </section>
      <section  className="crea flex flex-1 w-full ml-0">
        <div className="w-full lg:w-3/4 bg-darkgrey py-12 flex justify-center">
          <div className="w-full mx-10 lg:mx-24">
            <h3 className="century text-white flex-1 capitalize text-2xl tracking-wider px-6 pb-3 w-full "  /*data-aos="zoom-in"*/>
              <Link className="hover:text-bleu" to="/creation-de-site-internet-a-agen/"><span className="text-bleu">/</span>CRÉATION DE SITES WEB</Link>
            </h3>
            <div className="flex flex-col md:flex-row text-justify">
              <div className="w-full lg:w-10/12 my-6 px-2 text-white">
              <strong>Linkweb élabore ou réalise une refonte du site internet</strong>, <strong>site e-commerce</strong>, <strong>site vitrine</strong> de votre entreprise. Nous définissons également des <strong>solutions web</strong> sur-mesure telles qu'un <strong>intranet</strong>. <strong>Pour créer un site</strong> performant, nous étudions vos vos besoins fonctionnels ainsi que les attentes de vos utilisateurs.

              <strong>Nos sites web sont crées à partir d'un design moderne</strong> et <strong>ergonomique</strong> qui s’adapte à toutes les <strong>tailles d’écrans</strong> : mobile, tablette et desktop.<br/><br/>
              En choisissant Linkweb pour <strong>créer votre site internet</strong> à <strong>Agen</strong> et <strong>Toulouse</strong>, vous serez accompagné du choix de l'<strong>hébergement</strong>, du <strong>nom de domaine</strong>, de l'<strong>outil de création</strong> (<strong>CMS Wordpress</strong>, <strong>Drupal</strong>, <strong>Prestashop</strong>, solution <strong>HTML/CSS</strong>, etc.), jusqu'au <strong>web design</strong> ainsi que pour la création des contenus. Nous disposons de tous les <strong>outils indispensables</strong> pour vous permettre de <strong>faire un site</strong> performant pour votre entreprise.
              </div>
              <div className="w-full md:w-1/2 lg:ml-24 flex items-center">
                <div className="w-full md:w-1/3">
                <Link className="hover:text-bleu" to="/creation-de-site-internet-a-agen/"><img 
                    src={ loupe }
                    alt="Agence Web Agen"
                    className="m-auto"
                  /></Link> 
                  <Link to="/creation-de-site-internet-a-agen/" className="pt-6 block century text-sm text-center text-white capitalize tracking-widest hover:text-bleu">
                   Création site <br /> web sur-mesure
                  </Link>
                </div>
                <div className="w-full md:w-1/3">
                <Link className="hover:text-bleu" to="/creation-de-site-internet-47-31/"><img 
                    src={ menu }
                    alt="Création site internet Agen"
                    className="m-auto"
                  /></Link> 
                  <Link to="/creation-de-site-internet-47-31/" className="pt-6 block century text-sm text-center text-white capitalize tracking-widest hover:text-bleu">
                   Responsive <br />design
                  </Link>
                </div>
                <div className="w-full md:w-1/3">
                
                <Link className="hover:text-bleu" to="/creation-site-internet-agen/"><img 
                    src={ souris }
                    alt="Agence Web Toulouse"
                    className="m-auto"
                  /></Link> 
                  <Link to="/creation-site-internet-agen/" className="pt-6 block century text-sm text-center text-white capitalize tracking-widest hover:text-bleu">
                   Interface <br /> ergonomique
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ref flex flex-col md:flex-row flex-1 w-full py-12">
        <div className="w-full md:w-1/2 ">
          <img 
            src={mac}
            alt="Agence Web Toulouse"
          />
        </div>
        <div className="w-full md:w-1/2 px-10 py-16 md:py-32 max-w-lg ml-0">
          <h3 className="century capitalize text-2xl tracking-wider pb-6" /*data-aos="zoom-in"*/>
            <Link className="hover:text-bleu" to="/referencement-de-site-internet-47-31/"><span className="text-bleu">/</span>RÉFÉRENCEMENT NATUREL</Link>
          </h3>
          <h4 className="century text-lg tracking-wider pb-3 text-justify" /*data-aos='fade-left'*/>
            <span className="font-bold">Le référenceur en charge de votre site web collabore avec vous chaque mois pour vous rendre compte de l’évolution du référencement de votre site internet.</span>
          </h4>
          <p /*data-aos='fade-bottom'*/ className="text-justify">À partir d’un <strong>audit de site</strong>, notre <strong>agence de référencement</strong> élabore votre stratégie de <Link className="hover:text-bleu" to="/agence-referencement-toulouse/"><strong>référencement site internet</strong></Link> et analyse les statistiques relatives à votre site internet pour une <strong>optimisation</strong> qui vous apportera une visibilité pertinente avec les <strong>moteurs de recherche</strong> grâce au <strong>marketing digital</strong> (<strong>web marketing</strong>).</p>
          <Button url="/referencement-de-site-internet-47-31/" text="En savoir plus sur le référencement naturel SEO" position="start" />

          <h3 className="century capitalize text-2xl tracking-wider pt-12 pb-6" /*data-aos="zoom-in"*/>
            <Link className="hover:text-bleu" to="/agence-adwords-47-31/"><span className="text-bleu">/</span>RÉFÉRENCEMENT ADWORDS</Link>
          </h3>
          <h4 className="century text-lg tracking-wider pb-3 text-justify"  /*data-aos='fade-left'*/>
            <span className="font-bold">Nous optimisons le choix des mots-clés et la configuration de votre plan publicitaire pour respecter votre budget et maximiser vos conversions.</span>
          </h4>
          <p /*data-aos='fade-bottom'*/ className="text-justify">En tant qu'agence de conseil, nous créons votre <strong>campagne publicitaire Adwords</strong> en prenant en compte vos objectifs de visibilité et vos attentes de retours concrets en termes de référencement payant avec <strong>Google Adwords</strong>.</p>
          <Button url="/agence-adwords-47-31/" text="En savoir plus sur les campagnes Adwords SEA" position="start" />
        </div>
      </section>

      <section className="max-w-5xl w-full mx-auto px-4 py-2 my-2">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
          Ils nous ont fait confiance
        </h2>
        <hr className="blue"></hr>
        <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center century italic pb-6">Un échantillon de nos réalisations</h3>
      </section>
      <section className="max-w-5xl flex-wrap jusitfy-center flex w-full mx-auto px-4 py-2 my-2">
        <div className="w-1/3 md:w-1/6 mb-10" /*data-aos='fade-up'*/>
          <img 
            src={peugeot}
            alt="Création site internet Toulouse"
          />
        </div>
        <div className="w-1/3 md:w-1/6" /*data-aos='fade-up' data-aos-delay='200'*/>
          <img 
            src={normand}
            alt="Création site internet Toulouse"
          />
        </div>
        <div className="w-1/3 md:w-1/6" /*data-aos='fade-up' data-aos-delay='400'*/>
          <img 
            src={onco}
            alt="Création site internet Agen"
          />
        </div>
        <div className="w-1/3 md:w-1/6 mx-auto block" /*data-aos='fade-up' data-aos-delay='600'*/>
          <img 
            src={tlse}
            alt="Agence Web Toulouse"
          />
        </div>
        <div className="w-1/3 md:w-1/6 mx-auto block" /*data-aos='fade-up' data-aos-delay='800'*/>
          <img 
            src={sdis}
            alt="Agence Web Agen"
          />
        </div>
        <div className="w-1/3 md:w-1/6 mx-auto block" /*data-aos='fade-up' data-aos-delay='1000'*/>
          <img 
            className="mx-12"
            src={hg}
            alt="Réalisations Site Web Agen"
            width="65px"
            />
        </div>
      </section>

      <section className="max-w-5xl w-full mx-auto px-4 py-12 mb-0 mt-12">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
          Vous avez un besoin ?
        </h2>
        <hr className="blue"></hr>
        <h3 /*data-aos='fade-left'*/ className="text-xl text-grey text-center century italic pb-6">Nous sommes proactifs</h3>
      </section>
      <section  className="tabPanel flex flex-1 w-full justify-end ml-0">
        <div className="w-full md:w-3/4 py-0 flex justify-end">
          <Accordion>
            <div className="w-full" label="UNE AUGMENTATION DE VOS CONTACTS PROSPECTS ?">
              <p><span className="font-bold">Vous souhaitez développer la <strong>stratégie de communication digitale</strong> de votre entreprise ? Développer la vente de vos produits ?</span><br /><br/> Le <strong>retour sur investissement</strong> fait partie des objectifs communs à tous chefs d’entreprise. Trouver de nouveaux clients potentiels nécessite une visibilité pertinente et qui permettra de propulser <strong>votre site internet</strong> au premier plan. Le contenu que vous allez proposer sur <strong>votre site web</strong> doit donner envie de travailler avec vous.<br /><br/> Par ailleurs, le contenu n'est pas la seule clé pour rendre votre site internet performant. En effet, un <span className="font-bold"><strong>webdesign</strong> adapté</span>, une <span className="font-bold"><strong>expérience utilisateur</strong> et des <strong>outils digitaux</strong> bien construits</span> vous permettront de <strong>créer un site internet</strong> efficace.<br /><br/> Le <strong>site internet</strong> est un parfait outil pour <strong>dynamiser sa communication d’entreprise</strong> tout en la maîtrisant. Au-delà des objectifs d'image, le site web vous permettra de gagner en visibilité pour atteindre vos cibles et obtenir des contacts qualifiés. Notre méthode de travail vous permettra d'atteindre vos objectifs grâce à des <strong>projets web</strong> efficaces.<br /><br/> <span className="font-bold">Notre <strong>agence de création</strong> vous propose, de part nos compétences, un <strong>conseil en communication</strong> afin de parvenir aux objectifs fixés lors de la <strong>création de votre site internet</strong> vitrine ou <strong>site marchand</strong>.</span></p>
            </div>
            <div label="UNE VISIBILITÉ EN PREMIÈRE PAGE DE GOOGLE ?">
              <p>Pour atteindre la <span className="font-bold">meilleure visibilité possible</span>, nous accordons une importance toute particulière la <strong>qualité de vos contenus</strong> présents sur votre site. <strong>Obtenir une bonne visibilité</strong> ne tient pas uniquement compte du critère quantitatif. Obtenir la meilleure visibilité, c'est vous rendre disponible auprès <span className="font-bold">d'<strong>utilisateurs qualifiés</strong> qui seront plus à même de répondre à vos attentes</span>. <br/><br/>Dès la <strong>conception du site</strong>, nous élaborons une <strong>stratégie de référencement naturel SEO</strong> qui, grâce au travail de nos référenceurs, répondra aux <strong>critères de qualité de Google</strong> pour vous permettre d'obtenir une <span className="font-bold">visibilité pérenne en <strong>première page sur des requêtes pertinentes</strong></span>.<br /><br/>Pour une visibilité rapide, nous collaborons pour définir votre <strong>campagne Adwords</strong> : nous planifions votre <strong>plan publicitaire</strong> pour une <span className="font-bold"><strong>visibilité immédiate sur les mots clés les plus recherchés</strong></span> dans le but de vous apporter un <strong>retour concret sur votre investissement</strong>.</p>
            </div>
            <div label="UN ACCROISSEMENT DE VOTRE CHIFFRE D'AFFAIRES ?">
              <p><span className="font-bold">Accroître le chiffre d'affaires de son entreprise grâce au Web ? C'est possible !</span><br/><br/>
              En mettant en place une <strong>stratégie digitale</strong> cohérente et pertinente vous aurez l'occasion de développer la <strong>communication web</strong> de votre entreprise via le canal le plus consulté au monde : internet.<br /><br/>Un plan de communication construit pour convertir vous permettra de <span className="font-bold">développer le chiffre d’affaires de votre entreprise</span> avec un <strong>projet web</strong> sur-mesure.
             <br/><br/><strong>Avoir un site internet</strong> d'entreprise est un <span className="font-bold">gage de confiance vis-à-vis de vos prospects</span>. Faire appel à une <strong>agence de communication digitale</strong> spécialisée dans la <strong>création de site internet</strong> pour développer un outil rentable est conseillé : ce choix vous permettra d'accéder à <span className="font-bold">une solution construite à partir de vos besoins, mais aussi en corrélation avec ceux de vos prospects pour des stratégies <strong>digitales</strong> optimales.</span></p>
            </div>
          </Accordion>
        </div>
      </section>
      <section className="max-w-5xl w-full mx-auto px-4 py-6 mb-0 mt-12">
        <h2 /*data-aos='fade-right'*/ className="text-center text-black text-4xl century">
          Nous devons connaitre
        </h2>
        <hr className="blue"></hr>
      </section>
      <section className="max-w-6xl flex flex-col md:flex-row w-full mx-auto px-4 pb-12 mb-0 mt-12">
        <div className="flex-full md:w-1/3 px-6 text-sm">
          <h3 className="century capitalize text-2xl tracking-wider pb-6 text-center" /*data-aos="zoom-in"*/>
            <span className="text-bleu">1.</span>Vos exigences
          </h3>
          <p  /*data-aos='fade-left'*/  className="text-justify" style={{textAlignLast:'center'}}>Dans le cadre de la création ou du développement de votre structure, vous avez besoin de créer un outil en ligne répondant à des besoins spécifiques : nous élaborons un <strong>webdesign</strong> unique et original dans le respect de votre identité visuelle et de votre ligne de <strong>création graphique</strong>.<br /> L’ergonomie d’un <strong>site internet professionnel</strong> doit être soignée selon les principes de l’UI/UX et du <strong>responsive design</strong>.<br /> Nous développons des fonctionnalités pour une <strong>création de site internet sur mesure</strong>, tant pour l’administrateur que pour les utilisateurs.</p><br/><br/>
        </div>

        <div className="flex-full md:w-1/3 px-6 text-sm">
          <h3 className="century capitalize text-2xl tracking-wider pb-6 text-center" /*data-aos="zoom-in"*/>
            <span className="text-bleu">2.</span>Votre offre
          </h3>
          <p  /*data-aos='fade-left'*/  className="text-justify" style={{textAlignLast:'center'}}>Vos services, vos prestations, vos produits seront au cœur de l’élaboration de votre projet, auttant sur la partie graphique et ergonomique que fonctionnelle.<br /> L’élaboration d’un cahier des charges détaillé nous permettra de <strong>créer un site web</strong> qui vous correspondra.</p><br/>
          <p  /*data-aos='fade-left'*/  className="text-justify" style={{textAlignLast:'center'}}>Nous prenons en compte votre positionnement, votre charte graphique ainsi que votre <strong>image de marque</strong>, tout en étudiant votre concurrence pour une <strong>création web</strong> qui colle à votre entreprise.</p><br/><br/>
        </div>

        <div className="flex-full md:w-1/3 px-6 text-sm">
          <h3 className="century capitalize text-2xl tracking-wider pb-6 text-center" /*data-aos="zoom-in"*/>
            <span className="text-bleu">3.</span>Vos cibles
          </h3>
          <p  /*data-aos='fade-left'*/ className="text-justify" style={{textAlignLast:'center'}}>L’analyse de votre clientèle sera le fil rouge de l’élaboration de votre projet digital.<br /> Votre outil doit répondre aux attentes de vos utilisateurs cibles, tant sur l’aspect visuel comme sur la navigation.<br /> C’est le rôle de notre <strong>agence de communication web</strong> de donner lieu à un <strong>site responsive</strong>.<br /> Les informations communiquées seront intégrées dans le but d’informer et de donner envie à vos futurs clients potentiels de travailler avec vous grâce à une <strong>stratégie de communication web créative</strong>.</p>
        </div>
      </section>
      <section className="border-before-footer bg-darkgrey w-full mx-auto px-4 py-12 mb-0 mt-12">
        <h2 /*data-aos='fade-right'*/ className="text-center text-bleu text-4xl century">
          Un conseil ? Une information ? Un devis ?
        </h2>
        <hr className="white"></hr>
        <h3 /*data-aos='fade-left'*/ className="text-xl text-bleu text-center century italic pb-6">Nous sommes proactifs</h3>
        <p className="text-white text-center text-sm md:text-md"><strong>Création Sites Vitrine | Sites E-commerce | Référencement Google | Rédaction Web</strong></p>
        <div className="flex flex-col md:flex-row flex-1 w-full mt-12 mb-6 century">
          <div className="w-full md:w-1/2 text-center text-white text-4xl">
            <a href='tel:0533950030'>05 33 95 00 30</a> 
          </div>
          <div className="w-full md:w-1/2 text-center text-white text-4xl century">
            <a href='mailto:contact@linkweb.fr'>contact@linkweb.fr</a> 
          </div>
        </div>
      </section>
      {/* </PageTransition> */}
    </Layout>
    
  );
}

export default IndexPage;
