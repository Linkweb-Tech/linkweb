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
        url="https://linkweb.fr"
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
        <h2 data-aos='fade-right' className="text-center">
          <Link className="hover:text-bleu" to="/agence-web-toulouse" className="text-center text-black text-4xl century">
            Agence digitale
          </Link>
        </h2>
        <hr className="blue"></hr>
        <h3 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Notre savoir-faire n’est pas une compétence, il est humain</h3>
      </section>
      <section className="w-full flex flex-1 equipe min-h-0 lg:min-h-600">
        <div className="w-1/4 bg-cover  imageDouble"  >

        </div>
        <div className="w-3/4 ">
          <div className="content">
            <h3 className="century capitalize text-2xl tracking-wider pb-3" data-aos="zoom-in">
              <span className="text-bleu">/</span>LINKWEB C’EST 20 TECHNICIENS
            </h3>
            <p data-aos='fade-left'><span className="text-bleu text-4xl">8</span>  développeurs Front-End & Back-End</p>
            <p data-aos='fade-left'><span className="text-bleu text-4xl">3</span>  spécialistes UI & <strong>UX design</strong></p>
            <p data-aos='fade-left'><span className="text-bleu text-4xl">6</span>  professionnels du <strong><Link className="hover:text-bleu" to="/agence-referencement-toulouse">référencement web</Link></strong> SEO & SEA</p>
            <p data-aos='fade-left'><span className="text-bleu text-4xl">3</span>  rédacteurs web spécialisés dans la rédaction et la <strong>gestion de contenu</strong> optimisé</p>
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
            <div className="blackBulle my-6" data-aos="fade-up">1</div>
            <section>
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                <span className="text-bleu">/</span>JE SOUHAITE DYNAMISER MA COMMUNICATION WEB
              </h3>
              <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                  Faire appel à une <strong>agence de création web</strong> est une étape à franchir pour <strong>dynamiser sa communication web</strong>. Définir un projet selon des objectifs précis demande une expertise toute particulière. <strong>Propulser sa communication en ligne</strong> peut constituer un véritable moteur pour une entreprise.
              </div>
              <Button url="/blog/foire-aux-questions/" text="En savoir plus" position="center" />

            </section>
          </div>
        </div>
        <div className="w-full xl:w-1/3 two px-12">
          <div className="flex items-center xl:items-start flex-col xl:flex-row flex-1">
            <div className="blackBulle my-6" data-aos="fade-up">2</div>
            <section>
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
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
            <div className="blackBulle my-6" data-aos="fade-up">3</div>
            <section>
              <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                <span className="text-bleu">/</span>JE FAIS LE CHOIX D'EXPERTS POUR MENER MON PROJET
              </h3>
              <div className="content pb-6 text-justify" style={{textAlignLast:'center'}}>
                Nos <strong>consultants en communication web</strong> d’<strong>Agen (47)</strong> et <strong>Toulouse (31)</strong> définissent les contours de votre projet et se chargent de l’<strong>application de votre stratégie</strong> à travers les différents axes définis. Notre équipe est composée de spécialistes de la <strong>création de site internet</strong>, de <strong>référencement naturel</strong> et <strong>Ads</strong>.
              </div>
              <Button url="/contact-agence-web-toulouse" text="Demander un devis" position="center" />
            </section>
            
          </div>

        </div>
      </section>

      <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
        <h2 data-aos='fade-right' className="text-center text-4xl century">
          <Link className="hover:text-bleu" to="/creation-site-internet-toulouse">Création de <span className="text-bleu">Sites internet</span></Link> et <span className="text-bleu">Stratégies Web</span> sur-mesure 
        </h2>
        <hr className="blue"></hr>
        <h3 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6"><Link className="hover:text-bleu" to="/agence-web-toulouse">Agence Web Toulouse</Link> et Agen</h3>
      </section>
      <section  className="crea flex flex-1 w-full ml-0">
        <div className="w-full lg:w-3/4 bg-darkgrey py-12 flex justify-end">
          <div className="max-w-4xl w-full mr-0">
            <h3 className="century text-white flex-1 capitalize text-2xl tracking-wider px-6 pb-3 w-full "  data-aos="zoom-in">
              <Link className="hover:text-bleu" to="/creation-de-site-internet-a-agen"><span className="text-bleu">/</span>CRÉATION DE SITES WEB</Link>
            </h3>
            <div className="flex flex-col md:flex-row ">
              <div className="w-full lg:w-1/2 my-6 px-6 text-white">
              <strong>Élaboration et refonte de site internet</strong>, <strong>site e-commerce</strong>,  <strong>site vitrine</strong>, <strong>solutions web</strong> et <strong>intranet</strong> sur-mesure selon vos besoins fonctionnels et les attentes de vos utilisateurs.<br /><br />

              <strong>Création de design moderne</strong> et <strong>ergonomique</strong> qui s’adapte à toutes les <strong>tailles d’écrans</strong> : mobile, tablette et desktop.
              </div>
              <div className="w-full md:w-1/2 flex mr-4">
                <div className="w-full md:w-1/3">
                <Link className="hover:text-bleu" to="/creation-de-site-internet-a-agen"><img 
                    src={ loupe }
                    alt="Agence Web Agen"
                    className="m-auto"
                  /></Link> 
                  <Link to="/creation-de-site-internet-a-agen" className="pt-6 block century text-sm text-center text-white capitalize tracking-widest hover:text-bleu">
                   Création site <br /> web sur-mesure
                  </Link>
                </div>
                <div className="w-full md:w-1/3">
                <Link className="hover:text-bleu" to="/creation-de-site-internet-47-31"><img 
                    src={ menu }
                    alt="Création site internet Agen"
                    className="m-auto"
                  /></Link> 
                  <Link to="/creation-de-site-internet-47-31" className="pt-6 block century text-sm text-center text-white capitalize tracking-widest hover:text-bleu">
                   Responsive <br />design
                  </Link>
                </div>
                <div className="w-full md:w-1/3">
                
                <Link className="hover:text-bleu" to="/creation-site-internet-agen"><img 
                    src={ souris }
                    alt="Agence Web Toulouse"
                    className="m-auto"
                  /></Link> 
                  <Link to="/creation-site-internet-agen" className="pt-6 block century text-sm text-center text-white capitalize tracking-widest hover:text-bleu">
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
          <h3 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in">
            <Link className="hover:text-bleu" to="/referencement-de-site-internet-47-31"><span className="text-bleu">/</span>RÉFÉRENCEMENT NATUREL</Link>
          </h3>
          <h4 className="century text-lg tracking-wider pb-3 text-justify" data-aos='fade-left'>
            <span className="font-bold">Le référenceur en charge de votre site web collabore avec vous chaque mois pour vous rendre compte de l’évolution du référencement de votre site internet.</span>
          </h4>
          <p data-aos='fade-bottom' className="text-justify">À partir d’un <strong>audit de site</strong>, nous élaborons votre stratégie de <Link className="hover:text-bleu" to="/agence-referencement-toulouse"><strong>référencement site internet</strong></Link> et analysons les statistiques relatives à votre site internet pour une <strong>optimisation</strong> qui vous apportera une visibilité pertinente avec les <strong>moteurs de recherche</strong>.</p>
          <Button url="/referencement-de-site-internet-47-31/" text="En savoir plus sur le référencement naturel SEO" position="start" />

          <h3 className="century capitalize text-2xl tracking-wider pt-12 pb-6" data-aos="zoom-in">
            <Link className="hover:text-bleu" to="/agence-adwords-47-31"><span className="text-bleu">/</span>RÉFÉRENCEMENT ADWORDS</Link>
          </h3>
          <h4 className="century text-lg tracking-wider pb-3 text-justify"  data-aos='fade-left'>
            <span className="font-bold">Nous optimisons le choix des mots-clés et la configuration de votre plan publicitaire pour respecter votre budget et maximiser vos conversions.</span>
          </h4>
          <p data-aos='fade-bottom' className="text-justify">Nous créons votre <strong>campagne publicitaire Adwords</strong> en prenant en compte vos objectifs de visibilité et vos attentes de retours concrets en termes de référencement payant.</p>
          <Button url="/agence-adwords-47-31" text="En savoir plus sur les campagnes Adwords SEA" position="start" />
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
            alt="Création site internet Toulouse"
          />
        </div>
        <div className="w-1/5" data-aos='fade-up' data-aos-delay='200'>
          <img 
            src={normand}
            alt="Création site internet Toulouse"
          />
        </div>
        <div className="w-1/5" data-aos='fade-up' data-aos-delay='400'>
          <img 
            src={onco}
            alt="Création site internet Agen"
          />
        </div>
        <div className="w-1/5" data-aos='fade-up' data-aos-delay='600'>
          <img 
            src={tlse}
            alt="Agence Web Toulouse"
          />
        </div>
        <div className="w-1/5" data-aos='fade-up' data-aos-delay='800'>
          <img 
            src={sdis}
            alt="Agence Web Agen"
          />
        </div>
      </section>

      <section className="max-w-5xl w-full mx-auto px-4 py-12 mb-0 mt-12">
        <h2 data-aos='fade-right' className="text-center text-black text-4xl century">
          Vous avez un besoin ?
        </h2>
        <hr className="blue"></hr>
        <h3 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Nous sommes proactifs</h3>
      </section>
      <section  className="tabPanel flex flex-1 w-full justify-end ml-0">
        <div className="w-full md:w-3/4 py-0 flex justify-end">
          <Accordion>
            <div className="w-full" label="UNE AUGMENTATION DE VOS CONTACTS PROSPECTS ?">
              <p>Vous souhaitez développer la <strong>stratégie de communication digitale</strong> de votre entreprise ?<br /> Développer la vente de vos produits ?<br /> Le <strong>retour sur investissement</strong> fait partie des objectifs communs à tous chefs d’entreprise.<br /> Pour trouver des clients potentiels, il est nécessaire d’avoir une visibilité pertinente qui permet à chacun de consulter <strong>votre site internet</strong> et de leur donner envie de travailler avec vous.<br /> Un <strong>webdesign</strong> adapté et des outils digitaux bien construits vous permettront de <strong>créer un site internet</strong> performant.<br /> Dynamiser sa communication d’entreprise tout en la maîtrisant vous permettra de gagner en visibilité, mais également de toucher vos cibles afin d’obtenir des contacts qualifiés.<br /> Notre <strong>agence de création</strong> vous propose, grâce à nos compétences, un <strong>conseil en communication</strong> afin de parvenir aux objectifs fixés lors de la <strong>création de votre site internet</strong> vitrine ou <strong>site marchand</strong>.</p>
            </div>
            <div label="UNE VISIBILITÉ EN PREMIÈRE PAGE DE GOOGLE ?">
              <p>En travaillant sur la qualité de vos contenus, dès la conception du site, et en répondant aux critères de qualité de Google, vous obtenez une visibilité pérenne en première page grâce au <strong>référencement naturel SEO</strong> optimisé par nos référenceurs.<br /> En élaborant une campagne Adwords, nous planifions votre plan publicitaire pour une visibilité immédiate sur les mots clés les plus recherchés dans le but de vous apporter un retour concret sur votre investissement.</p>
            </div>
            <div label="UN ACCROISSEMENT DE VOTRE CHIFFRE D'AFFAIRES ?">
              <p>Mettre en place une <strong>stratégie digitale</strong> pertinente vous permettra de développer la <strong>communication web</strong> de votre entreprise via le canal le plus consulté au monde : internet.<br /> Un plan de communication construit autour de la conversion pour vous permettre de développer le chiffre d’affaires de votre entreprise avec un <strong>projet web</strong> sur-mesure.</p><p><strong>Avoir un site internet</strong> est un gage de confiance vis-à-vis de vos prospects. Faire appel à une <strong>agence de communication digitale</strong> pour la <strong>création de site internet</strong> répond à un choix réalisé à partir de vos besoins, mais aussi en corrélation avec ceux de vos prospects.</p>
            </div>
          </Accordion>
        </div>
      </section>
      <section className="max-w-5xl w-full mx-auto px-4 py-6 mb-0 mt-12">
        <h2 data-aos='fade-right' className="text-center text-black text-4xl century">
          Nous devons connaitre
        </h2>
        <hr className="blue"></hr>
      </section>
      <section className="max-w-6xl flex flex-col md:flex-row w-full mx-auto px-4 pb-12 mb-0 mt-12">
        <div className="flex-full md:w-1/3 px-6 text-sm">
          <h3 className="century capitalize text-2xl tracking-wider pb-6 text-center" data-aos="zoom-in">
            <span className="text-bleu">1.</span>Vos exigences
          </h3>
          <p  data-aos='fade-left'  className="text-justify" style={{textAlignLast:'center'}}>Dans le cadre de la création ou du développement de votre structure, vous avez besoin de créer un outil en ligne répondant à des besoins spécifiques : nous élaborons un <strong>webdesign</strong> unique et original dans le respect de votre identité visuelle.<br /> L’ergonomie d’un <strong>site internet professionnel</strong> doit être soignée selon les principes de l’UI/UX et du <strong>responsive design</strong>.<br /> Nous développons des fonctionnalités pour un <strong>site internet sur mesure</strong>, tant pour l’administrateur que pour les utilisateurs.</p><br/><br/>
        </div>

        <div className="flex-full md:w-1/3 px-6 text-sm">
          <h3 className="century capitalize text-2xl tracking-wider pb-6 text-center" data-aos="zoom-in">
            <span className="text-bleu">2.</span>Votre offre
          </h3>
          <p  data-aos='fade-left'  className="text-justify" style={{textAlignLast:'center'}}>Vos services, vos prestations, vos produits seront au cœur de l’élaboration de votre projet, tant sur la partie graphique et ergonomique que fonctionnelle.<br /> L’élaboration d’un cahier des charges détaillé nous permettra de <strong>créer un site web</strong> qui vous correspondra.</p><br/>
          <p  data-aos='fade-left'  className="text-justify" style={{textAlignLast:'center'}}>Nous prenons en compte votre positionnement, votre charte graphique ainsi que votre <strong>image de marque</strong>, tout en étudiant votre concurrence pour une <strong>création web</strong> qui colle à votre entreprise.</p><br/><br/>
        </div>

        <div className="flex-full md:w-1/3 px-6 text-sm">
          <h3 className="century capitalize text-2xl tracking-wider pb-6 text-center" data-aos="zoom-in">
            <span className="text-bleu">3.</span>Vos cibles
          </h3>
          <p  data-aos='fade-left' className="text-justify" style={{textAlignLast:'center'}}>L’analyse de votre clientèle sera le fil rouge de l’élaboration de votre projet digital.<br /> Votre outil doit répondre aux attentes de vos utilisateurs cibles, tant sur l’aspect visuel comme sur la navigation.<br /> C’est pourquoi, il est nécessaire de donner lieu à un <strong>site responsive</strong>.<br /> Les informations communiquées seront intégrées dans le but d’informer et de donner envie à vos futurs clients potentiels de travailler avec vous.</p>
        </div>
      </section>
      <section className="border-before-footer bg-darkgrey w-full mx-auto px-4 py-12 mb-0 mt-12">
        <h2 data-aos='fade-right' className="text-center text-bleu text-4xl century">
          Un conseil ? Une information ? Un devis ?
        </h2>
        <hr className="white"></hr>
        <h3 data-aos='fade-left' className="text-xl text-bleu text-center century italic pb-6">Nous sommes proactifs</h3>
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
