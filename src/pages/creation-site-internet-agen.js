import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Button from "../components/button";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import Accordion from '../components/accordion';
import ButtonMenu from '../components/buttonmenu.js';
import ButtonMenuBack from '../components/buttonmenuback.js';


import Bg from "../images/site-vitrine-background.jpg";
import imac from "../images/creation-site-vitrine.jpg";
import bgDev from '../images/bg-dev.jpg';


class CreationSiteInternetVitrine extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Création site internet vitrine à Agen (47) et Toulouse (31) - Linkweb"
                    description="Linkweb est spécialisée dans la création de site internet : nous mettons en place votre projet de site vitrine pour vous permettre de gagner en visibilité."
                    keywords={[`Création site internet vitrine Agen`, `Création site internet vitrine Toulouse`, `Création site internet Lot-et-Garonne`, `Création site web 47`]}
                    url="https://linkweb.fr/creation-site-internet-agen/"
                    nom="Création de site vitrine"
                    slug="creation-site-internet-agen/"
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
                    <section className="w-full h-screen mx-auto px-2 md:px-4 py-6 bg-no-repeat bg-cover bg-center flex md:flex-row flex-col justify-center items-center" style={{ background:'#00000094 url(' + Bg + ')', backgroundBlendMode:'multiply', backgroundPosition:'bottom', backgroundSize:'cover', height:'650px' }}>
                        <div className="order-last md:order-first w-full md:w-1/3 max-w-5xl mx-auto p-1 my-4 md:mx-6 mx-2" >
                            <RoundButton url="/contact-agence-web-toulouse/" text="Je veux la création de mon site internet vitrine"/>
                        </div>
                        <div className="w-full md:w-2/3 mt-6 p-1">
                            <h1 data-aos="fade-up" data-aos-delay="500" className="century text-2xl sm:text-4xl md:text-6xl text-center text-white">
                            Création site internet vitrine<br/> à Agen (47)<span className="text-bleu">/</span>Toulouse(31)
                            </h1>
                            <br/>
                            <h3 className="italic text-lg text-center md:text-2xl text-white">Vous souhaitez faire connaître votre entreprise et mettre en avant vos prestations pour obtenir des contacts dans votre secteur de chalandise ? Le site internet vitrine est parfait pour présenter ses prestations et obtenir de nouveaux clients.</h3>
                        </div>
                    </section>
                    <section className="w-full flex flex-row justify-end h-8 font-medium">
                        <section className="bg-white w-1/5 lg:w-1/12 flex text-center italic text-xs sm:text-sm md:text-md text-darkgrey">
                        <div className="w-full md:w-1/2 p-1 mt-0"><ButtonMenuBack url="/creation-site-internet-toulouse/" position="center"/></div>
                        <div className="w-full md:w-1/2 p-1 text-left mt-0 hidden md:block"><Link className="hover:text-bleu" to="/creation-site-internet-toulouse/">Retour</Link></div>
                        </section>
                        <section className="w-full lg:w-2/5 flex bg-darkgrey text-xs sm:text-sm md:text-md" style={{borderBottomLeftRadius:'27px'}}>
                            <div className="w-full lg:w-1/3 text-bleu p-1"><ButtonMenu url="/creation-site-internet-agen/" text="Site vitrine" position="center" /></div>
                            <div className="w-full lg:w-1/3 text-white p-1"><ButtonMenu url="/creer-une-boutique-en-ligne/" text="E-commerce" position="center" /></div>
                            <div className="w-full lg:w-1/3 text-white p-1"><ButtonMenu url="/creation-de-site-internet-47-31/" text="Site sur-mesure" position="center" /></div>
                        </section>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <br/>
                        <h3 data-aos='fade-right' className="text-center text-4xl century">
                        TPE, PME, artisans, professions libérales : dynamisez votre <strong>communication digitale d’entreprise</strong>.
                        </h3>
                        <hr className="blue"></hr>
                    </section>
                    <section className="flex flex-col xl:flex-row w-full mx-auto px-4 py-6 my-4">
                        <div className="w-full xl:w-1/2 px-12 md:px-24 py-12">
                            <h2 className="century capitalize text-2xl tracking-wider pb-6" data-aos="zoom-in">
                                <span className="text-bleu">/</span>CRÉATION DE SITE INTERNET VITRINE : DÉVELOPPEZ VOTRE VISIBILITÉ SUR LE WEB
                            </h2>
                            <h4 className="century text-lg tracking-wider pb-6 text-justify" data-aos='fade-left'>
                                <span className="font-bold">Créer un site vitrine pour son entreprise, c’est s’assurer d’être accessible 24/24h, 7/7J pour acquérir de nouveaux clients grâce au web.</span>
                            </h4>
                            <p data-aos='fade-bottom' className="text-justify">Aujourd’hui, votre <strong>site internet professionnel</strong> fait partie des outils indispensables pour dynamiser votre <strong>communication d’entreprise</strong>, atteindre de nouveaux clients, et même fidéliser vos clients actuels grâce à une stratégie rondement menée.
                            <br/><br/>
                                                        Mettre en place un <strong>site internet vitrine</strong> pour son entreprise permet de porter un coup de projecteur sur votre activité en présentant vos prestations et en apportant l’information nécessaire pour le consommateur à la recherche d’un prestataire de votre domaine d’activité.
                            <br/><br/>
                                                        Développer une identité visuelle qui vous est propre grâce au <strong>webdesign</strong>, mettre en place un <strong><Link className="text-bleu font-bold hover:text-black" to="/ergonomie-site-web-agen-toulouse/">site ergonomique</Link> et une navigation intuitive</strong>, créer un contenu qui va permettre de <strong>rendre votre site internet visible via le référencement naturel</strong> : il existe de nombreuses façons de mettre en avant votre activité.</p>
                        </div>
                        <div className="order-first xl:order-last w-full xl:w-1/2 p-0 xl:p-12">
                            <img className="mx-auto block" src={imac} alt="Création site internet Toulouse"/>
                        </div>
                    </section>
                    <section className="w-full h-full flex flex-col justify-center items-center px-4 pt-12 pb-0 my-2 bg-darkgrey text-white">
                        <div className="w-full">
                            <h2 data-aos='fade-right' className="text-center text-3xl century">
                            <span className="text-bleu">/</span>CRÉER UN SITE INTERNET VITRINE PROFESSIONNEL À VOTRE IMAGE
                            </h2>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row mx-auto px-6 lg:px-32 py-6 my-4 lg:mt-10 lg:mb-4 lg:py-2 text-justify" >
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>INTERFACE INTUITIVE ET ERGONOMIQUE
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Créer un site internet intuitif et ergonomique pour favoriser l’expérience utilisateur et faciliter la navigation entre les contenus.</span>
                            </h4>
                            <p>Nous développons un <strong>site internet</strong> favorisant la navigation entre les pages pour permettre aux utilisateurs d’accéder à l’information qu’ils recherchent de manière rapide, efficace et de façon naturelle.</p>
                            <Button url="/ergonomie-site-web-agen-toulouse/" text="En savoir plus sur l’ergonomie web" position="left" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>ADAPTATION AU RESPONSIVE DESIGN
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Créer un site internet qui s’adapte au terminal utilisé pour faciliter son accessibilité. Nous mettons en place un site adapté pour tous les supports.</span>
                            </h4>
                            <p>Face à l’exigence des <strong>moteurs de recherche</strong> pour proposer des <strong>sites internet</strong> adaptés à chaque support, nous répondons par la mise en place de <strong>sites internet responsive</strong>, à savoir, qui s’adaptent à la largeur de l’écran utilisé.</p>
                            <Button url="/blog/importance-site-internet-responsive/" text="En savoir plus sur le responsive design" position="left" />
                        </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row mx-auto px-6 lg:px-32 py-6 my-4 lg:my-2 lg:py-2 text-justify">
                        <div className="w-full lg:w-1/2 mb-12 mb-24 mr-16">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>PARCOURS CLIENT OPTIMISÉ
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Créer un parcours client clairement identifiable pour vous permettre d’obtenir de nouveaux contacts via le site internet.</span>
                            </h4>
                            <p>Nous déterminons un parcours client qui facilite la réalisation de vos <strong>objectifs de conversion</strong> grâce à la présence de <strong>call-to-action</strong> et autres éléments visuels permettant de mettre en avant la souscription à vos prestations.</p>
                            <Button url="/blog/comment-optimiser-le-parcours-client-dun-site-internet/" text="En savoir plus sur le le parcours client" position="left" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 data-aos='fade-right' className="text-left text-2xl century">
                            <span className="text-bleu">/</span>PROTOCOLE DE SÉCURISATION HTTPS
                            </h3>
                            <br/>
                            <h4 className="century text-lg tracking-wider pb-6" data-aos='fade-left'>
                                <span className="font-bold">Mettre en place un site internet sécurisé, et rassurant pour les visiteurs via la mise en place d’un protocole HTTPS.</span>
                            </h4>
                            <p>Nous sécurisons votre domaine par la mise en place de <strong>protocole de sécurisation HTTPS (HyperText Transfer Protocole Secure)</strong> qui permet à chaque utilisateur de vérifier l’authenticité du site internet pour s’assurer qu’il s’agit bien d’un <strong>site de confiance</strong>.</p>
                            <Button url="/blog/protocole-https-a-quoi-ca-sert/" text="En savoir plus sur le le protocole de sécurisation HTTPS" position="left" />
                        </div>
                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        Vous souhaitez la création de votre site internet vitrine ?<br/> N’attendez plus !
                        </h2><br/>
                        <hr className="blue"></hr>
                        
                    </section>
                    <section className="flex flex-col lg:flex-row flex-1 home-step my-12 px-4 xl:my-24 xl:px-24">
                        <div className="w-full xl:w-1/3 one px-12">
                            <div className="flex flex-1 items-center xl:items-start flex-col xl:flex-row">
                                <div className="blackBulle my-6" data-aos="fade-up">1</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>JE DÉFINIS MES BESOINS DE COMMUNICATION WEB
                                </h3>
                                <div className="content text-justify pb-6" style={{textAlignLast:'center'}}>
                                Afin d’obtenir un <strong>site internet</strong> à votre image, il est important de définir ses besoins de la manière la plus précise possible. En effet, la collaboration est fortement recommandée pour mettre au point une solution au plus proche de vos besoins en vue d’y répondre.
                                </div>
                                <Button url="/contact-agence-web-toulouse/" text="Prendre contact" position="center" />

                                </section>
                            </div>
                            </div>
                            <div className="w-full xl:w-1/3 one px-12">
                            <div className="flex flex-1 items-center xl:items-start flex-col xl:flex-row">
                                <div className="blackBulle my-6" data-aos="fade-up">2</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>JE PRENDS RENDEZ-VOUS POUR DÉFINIR MON PROJET
                                </h3>
                                <div className="content text-justify pb-6" style={{textAlignLast:'center'}}>
                                Une fois vos besoins déterminés, nous vous invitons à nous rencontrer pour définir plus précisément votre <strong>projet de site internet vitrine</strong>. Nous vous proposerons la solution la plus à même de vous apporter un <strong>site web efficace</strong>.
                                </div>
                                <br/><Button url="/contact-agence-web-toulouse/" text="Prendre contact" position="center" />
                                </section>
                                </div>
                            </div>
                            <div className="w-full xl:w-1/3 one px-12">
                            <div className="flex flex-1 items-center xl:items-start flex-col xl:flex-row">
                                <div className="blackBulle my-6" data-aos="fade-up">3</div>
                                <section>
                                <h3 className="century capitalize text-2xl tracking-wider pb-3 leading-tight text-center" data-aos="zoom-in">
                                    <span className="text-bleu">/</span>JE DÉPLOIE MON ACTIVITÉ SUR MON SITE INTERNET VITRINE
                                </h3>
                                <div className="content text-justify pb-6" style={{textAlignLast:'center'}}>
                                Une fois le projet établi, nous vous proposons une <strong>maquette visuelle et des contenus rédigés et optimisés pour le référencement naturel</strong>, en respectant une arborescence créée tout particulièrement pour rendre <strong>votre site internet visible</strong>.
                                </div>
                                <Button url="/contact-agence-web-toulouse/" text="Prendre rendez-vous" position="center" />
                                </section>
                                
                            </div>

                        </div>
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <h2 data-aos='fade-right' className="text-center text-3xl century">
                        <span className="text-bleu">/</span>Linkweb, agence de création de site internet à Agen et Toulouse 
                        </h2>
                        <hr className="blue"></hr>
                        
                    </section>
                    <section className="max-w-6xl w-full mx-auto px-4 pt-12 pb-0 my-2">
                        <p className="text-xl font-bold century text-center">Pour la <strong>création de votre site internet</strong>, faites confiance à un spécialiste de la <strong>création de sites internet à Agen et Toulouse</strong> depuis plus de dix ans.</p>
                        <br/>
                        <div className="w-full flex flex-col sm:flex-row text-center my-6">
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center my-6 px-12" data-aos='zoom-in' data-aos-delay="200">        
                                <svg className="svg-bleu" version="1.1" width="80px" height="80px" x="0px" y="0px" viewBox="0 0 511.999 511.999">
                                    <g>
                                        <g>
                                            <path d="M481.091,27.937H30.909C13.866,27.937,0,41.803,0,58.846v310.819c0,17.043,13.866,30.909,30.909,30.909h154.26v22.49    c0,20.617-16.774,37.391-37.391,37.391h-33.997c-6.518,0-11.803,5.284-11.803,11.803c0,6.519,5.285,11.803,11.803,11.803h284.436    c6.518,0,11.803-5.284,11.803-11.803c0-6.519-5.285-11.803-11.803-11.803h-33.998c-20.617,0-37.391-16.774-37.391-37.391v-22.489    h154.26c17.043,0,30.91-13.866,30.91-30.909V58.846C512,41.803,498.134,27.937,481.091,27.937z M195.92,460.457    c8.046-10.336,12.857-23.308,12.857-37.391v-22.49h94.447v22.49c0,14.083,4.811,27.056,12.857,37.391H195.92z M488.394,369.666    c0,4.027-3.276,7.304-7.304,7.304H30.909c-4.027,0-7.304-3.276-7.304-7.304v-62.033h464.789V369.666z M488.394,284.026H23.606    V58.846c0-4.027,3.276-7.304,7.304-7.304h450.18c4.027,0,7.305,3.276,7.305,7.304V284.026z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <circle cx="256.003" cy="342.305" r="12.738" fill="#37cfee"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M276.238,109.254c-4.61-4.609-12.081-4.609-16.693,0l-83.414,83.414c-4.609,4.609-4.609,12.083,0,16.693    c2.306,2.305,5.325,3.457,8.347,3.457c3.022,0,6.041-1.152,8.346-3.457l83.414-83.414    C280.847,121.338,280.847,113.864,276.238,109.254z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M325.678,157.593c-4.608-4.609-12.079-4.609-16.692-0.001l-33.23,33.228c-4.609,4.61-4.609,12.084,0,16.693    c2.305,2.305,5.325,3.457,8.346,3.457c3.02,0,6.041-1.152,8.346-3.457l33.23-33.228    C330.287,169.676,330.287,162.202,325.678,157.593z"/>
                                        </g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                </svg>
                                <p className="text-xl century pt-3">INTERFACE INTUITIVE</p>
                            </div>
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center px-12 my-6" data-aos='zoom-in' data-aos-delay="400">
                                <svg className="svg-bleu" width="80px" height="80px" viewBox="0 0 60 60" version="1.1">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="001---Insurance-Document" fill="#000000" fill-rule="nonzero">
                                            <path d="M6,11 L12,11 C12.5522847,11 13,10.5522847 13,10 C13,9.44771525 12.5522847,9 12,9 L6,9 C5.44771525,9 5,9.44771525 5,10 C5,10.5522847 5.44771525,11 6,11 Z"/>
                                            <path d="M17,11 L26,11 C26.5522847,11 27,10.5522847 27,10 C27,9.44771525 26.5522847,9 26,9 L17,9 C16.4477153,9 16,9.44771525 16,10 C16,10.5522847 16.4477153,11 17,11 Z"/>
                                            <path d="M6,22 L38,22 C38.5522847,22 39,21.5522847 39,21 C39,20.4477153 38.5522847,20 38,20 L6,20 C5.44771525,20 5,20.4477153 5,21 C5,21.5522847 5.44771525,22 6,22 Z"/>
                                            <path d="M6,26 L20,26 C20.5522847,26 21,25.5522847 21,25 C21,24.4477153 20.5522847,24 20,24 L6,24 C5.44771525,24 5,24.4477153 5,25 C5,25.5522847 5.44771525,26 6,26 Z"/>
                                            <path d="M6,34 L20,34 C20.5522847,34 21,33.5522847 21,33 C21,32.4477153 20.5522847,32 20,32 L6,32 C5.44771525,32 5,32.4477153 5,33 C5,33.5522847 5.44771525,34 6,34 Z"/>
                                            <path d="M6,42 L20,42 C20.5522847,42 21,41.5522847 21,41 C21,40.4477153 20.5522847,40 20,40 L6,40 C5.44771525,40 5,40.4477153 5,41 C5,41.5522847 5.44771525,42 6,42 Z"/>
                                            <path d="M6,50 L20,50 C20.5522847,50 21,49.5522847 21,49 C21,48.4477153 20.5522847,48 20,48 L6,48 C5.44771525,48 5,48.4477153 5,49 C5,49.5522847 5.44771525,50 6,50 Z"/>
                                            <path d="M59.4,29.13 L48,24.207 L48,3 C48,1.34314575 46.6568542,1.01453063e-16 45,0 L7,0 C5.34314575,-1.01453063e-16 4,1.34314575 4,3 L4,4 L3,4 C1.34314575,4 2.02906125e-16,5.34314575 0,7 L0,57 C2.02906125e-16,58.6568542 1.34314575,60 3,60 L41,60 C41.8090309,59.9981857 42.5828431,59.6688195 43.145,59.087 L43.965,59.67 C44.5848485,60.1100206 45.4151515,60.1100206 46.035,59.67 L55.71,52.783 C58.3920283,50.8794247 59.9897805,47.7978858 60,44.509 L60,30.048 C60.000591,29.649839 59.7649212,29.2892641 59.4,29.13 Z M6,3 C6,2.44771525 6.44771525,2 7,2 L45,2 C45.5522847,2 46,2.44771525 46,3 L46,23.343 L45.4,23.082 C45.1472508,22.9730007 44.8607492,22.9730007 44.608,23.082 L44.008,23.343 L44.008,17 C44.008,16.978 43.997,16.957 43.995,16.935 C43.990041,16.8512265 43.9738978,16.7684928 43.947,16.689 C43.94,16.666 43.941,16.642 43.932,16.62 C43.923,16.598 43.916,16.598 43.911,16.586 C43.8623283,16.4771943 43.7945961,16.3779666 43.711,16.293 L31.711,4.293 C31.6260334,4.20940395 31.5268057,4.14167171 31.418,4.093 C31.405,4.087 31.396,4.077 31.384,4.072 C31.372,4.067 31.338,4.064 31.316,4.057 C31.2354177,4.03015853 31.1517441,4.01369264 31.067,4.008 C31.042,4.011 31.022,4 31,4 L6,4 L6,3 Z M32,7.414 L40.586,16 L33,16 C32.4477153,16 32,15.5522847 32,15 L32,7.414 Z M41,58 L3,58 C2.44771525,58 2,57.5522847 2,57 L2,7 C2,6.44771525 2.44771525,6 3,6 L30,6 L30,15 C30,16.6568542 31.3431458,18 33,18 L42,18 L42,24.207 L38.781,25.6 C38.9191601,25.4301844 38.9962835,25.2188875 39,25 C39,24.4477153 38.5522847,24 38,24 L24,24 C23.4477153,24 23,24.4477153 23,25 C23,25.5522847 23.4477153,26 24,26 L37.849,26 L33.219,28 L6,28 C5.44771525,28 5,28.4477153 5,29 C5,29.5522847 5.44771525,30 6,30 L30.007,30 C30.007,30.016 30,30.031 30,30.048 L30,32 L24,32 C23.4477153,32 23,32.4477153 23,33 C23,33.5522847 23.4477153,34 24,34 L30,34 L30,36 L6,36 C5.44771525,36 5,36.4477153 5,37 C5,37.5522847 5.44771525,38 6,38 L30,38 L30,40 L24,40 C23.4477153,40 23,40.4477153 23,41 C23,41.5522847 23.4477153,42 24,42 L30,42 L30,44 L6,44 C5.44771525,44 5,44.4477153 5,45 C5,45.5522847 5.44771525,46 6,46 L30.125,46 C30.2244326,46.682295 30.3939971,47.3525102 30.631,48 L24,48 C23.4477153,48 23,48.4477153 23,49 C23,49.5522847 23.4477153,50 24,50 L31.641,50 C32.1135779,50.7357522 32.6785144,51.4078957 33.322,52 L6,52 C5.44771525,52 5,52.4477153 5,53 C5,53.5522847 5.44771525,54 6,54 L36,54 L41.448,57.878 C41.310655,57.9541131 41.1569731,57.995964 41,58 Z M58,44.509 C57.9902639,47.1505786 56.7057822,49.624947 54.551,51.153 L45,57.952 L35.449,51.152 C33.2945042,49.624152 32.0100584,47.1502252 32,44.509 L32,30.709 L33.81,29.927 L33.829,29.919 L45,25.089 L58,30.705 L58,44.509 Z"/>
                                            <path d="M44.6,27.439 L34.6,31.759 C34.2350788,31.9182641 33.999409,32.278839 34,32.677 L34,44.509 C34.009086,46.503312 34.9803344,48.3705817 36.608,49.523 L44.42,55.084 C44.7671643,55.331178 45.2328357,55.331178 45.58,55.084 L53.392,49.523 C55.0194082,48.3703573 55.9905824,46.5032302 56,44.509 L56,32.677 C56.000591,32.278839 55.7649212,31.9182641 55.4,31.759 L45.4,27.439 C45.1449495,27.3276869 44.8550505,27.3276869 44.6,27.439 Z M54,33.339 L54,44.509 C53.9926973,45.8587211 53.3337961,47.1217704 52.231,47.9 L45,53.042 L37.769,47.894 C36.6675346,47.1173365 36.0087381,45.8567225 36,44.509 L36,33.334 L45,29.447 L54,33.339 Z"/>
                                            <path d="M39.6,42.2 C39.3141875,41.9856406 38.9357266,41.9400436 38.6071797,42.0803848 C38.2786328,42.2207259 38.0499141,42.5256842 38.0071797,42.8803848 C37.9644453,43.2350853 38.1141875,43.5856406 38.4,43.8 L42.4,46.8 C42.8320438,47.1242308 43.4434866,47.0467489 43.781,46.625 L51.781,36.625 C52.126178,36.1936656 52.0563344,35.564178 51.625,35.219 C51.1936656,34.873822 50.564178,34.9436656 50.219,35.375 L42.825,44.619 L39.6,42.2 Z"/>
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-xl century pt-3">RESPECT DE LA CHARTE GRAPHIQUE</p>
                            </div>
                            <div className="w-full sm:w-1/3 flex flex-col items-center justify-center px-12 my-6"  data-aos='zoom-in' data-aos-delay="600">
                                <svg width="80px" height="80px" x="0px" y="0px" viewBox="0 0 480 480" className="svg-bleu">
                                    <g>
                                        <g>
                                            <path d="M456,240h-8V72c-0.026-22.08-17.92-39.974-40-40H72c-22.08,0.026-39.974,17.92-40,40v120h-8c-13.255,0-24,10.745-24,24    v208c0,13.255,10.745,24,24,24h304c4.418,0,8-3.582,8-8c-0.026-22.08-17.92-39.974-40-40h-24v-48h96v72c0,13.255,10.745,24,24,24    h64c13.255,0,24-10.745,24-24V264C480,250.745,469.255,240,456,240z M176,424c0,4.418-3.582,8-8,8H24c-4.418,0-8-3.582-8-8v-8h160    V424z M176,400H16V216c0-4.418,3.582-8,8-8h144c4.418,0,8,3.582,8,8V400z M296,416c10.168,0.012,19.229,6.418,22.632,16H190.528    c0.948-2.562,1.445-5.268,1.472-8v-8H296z M192,400v-48h16v48H192z M224,400v-48h32v48H224z M368,336H192v-48h176V336z M368,264v8    H192v-56c-0.027-3.796-0.966-7.53-2.736-10.888c0.12-0.112,0.28-0.144,0.392-0.264l79.2-79.2c3.07-3.178,2.982-8.243-0.196-11.312    c-3.1-2.994-8.015-2.994-11.116,0l-79.2,79.2c-0.192,0.2-0.272,0.456-0.44,0.664c-3.104-1.44-6.483-2.19-9.904-2.2H48V72    c0-13.255,10.745-24,24-24h336c13.255,0,24,10.745,24,24v168h-40C378.745,240,368,250.745,368,264z M464,424c0,4.418-3.582,8-8,8    h-64c-4.418,0-8-3.582-8-8v-8h80V424z M464,400h-80V264c0-4.418,3.582-8,8-8h64c4.418,0,8,3.582,8,8V400z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M95.592,289.376c-3.124-3.123-8.188-3.123-11.312,0l-33.936,33.936c-3.178,3.07-3.266,8.134-0.196,11.312    c3.07,3.178,8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196l33.936-33.936    C97.02,298.213,94.15,293.508,95.592,289.376z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M143.396,289.376c-3.1-2.994-8.015-2.994-11.116,0l-33.936,33.936c-3.178,3.069-3.266,8.134-0.196,11.312    c3.069,3.178,8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196l33.936-33.936    C146.661,297.51,146.574,292.445,143.396,289.376z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M317.46,114.344c-3.1-2.994-8.015-2.994-11.116,0l-79.2,79.2c-3.178,3.069-3.266,8.134-0.197,11.312    c3.069,3.178,8.134,3.266,11.312,0.197c0.067-0.064,0.132-0.13,0.197-0.197l79.2-79.2    C320.726,122.478,320.638,117.413,317.46,114.344z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M440.772,311.032c-3.1-2.995-8.016-2.995-11.116,0l-22.624,22.624c-3.178,3.07-3.266,8.134-0.196,11.312    c3.07,3.178,8.134,3.266,11.312,0.196c0.066-0.064,0.132-0.13,0.196-0.196l22.624-22.624    C444.038,319.166,443.95,314.102,440.772,311.032z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M240.16,304h-0.08c-4.418,0.022-7.982,3.622-7.96,8.04s3.622,7.982,8.04,7.96c4.418,0,8-3.582,8-8S244.578,304,240.16,304    z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M256,64h-32c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S260.418,64,256,64z"/>
                                        </g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                </svg>
                                <p className="text-xl century pt-3">ADAPTATION AU RESPONSIVE DESIGN</p>
                            </div>
                        </div>
                    </section>
                    <section className=" w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{background:'#000000ba url( '+ bgDev +')', backgroundSize:'cover', backgroundBlendMode: 'overlay'}}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h2 data-aos='fade-right' className="text-center text-white text-2xl md:text-4xl century">
                            <span className="text-bleu">/</span>Vous souhaitez opter pour une création de site vitrine ?
                            </h2>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                            {/* <RappelForm /> */}
                            <RoundButton url="/contact-agence-web-toulouse/" text="Je veux la création de mon site internet vitrine"/>
                        </div>

                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row text-center my-12">
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                                <svg className="svg-white" width="80px" height="80px" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.002 512.002">
                                    <g>
                                        <g>
                                            <path d="M502.002,10.249H10c-5.523,0-10,4.478-10,10v102.859c0,5.522,4.477,10,10,10h492.002c5.523,0,10-4.478,10-10V20.249    C512.002,14.727,507.525,10.249,502.002,10.249z M492.002,113.108H20V30.249h472.002V113.108z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M469.41,90.394l-8.167-8.167c2.229-4.408,3.416-9.306,3.416-14.388c0-8.533-3.323-16.557-9.357-22.591    c-12.456-12.455-32.723-12.456-45.18,0c-6.034,6.034-9.357,14.058-9.357,22.591c0,8.533,3.324,16.557,9.357,22.59    c6.035,6.034,14.058,9.357,22.591,9.357c5.083,0,9.98-1.188,14.388-3.416l8.167,8.167c1.953,1.952,4.512,2.929,7.071,2.929    s5.119-0.977,7.071-2.929C473.315,100.632,473.315,94.3,469.41,90.394z M441.161,76.286c-2.256,2.257-5.256,3.5-8.448,3.5    c-3.192,0-6.191-1.243-8.448-3.5c-2.256-2.257-3.5-5.256-3.5-8.447s1.244-6.192,3.5-8.448c2.329-2.329,5.389-3.493,8.448-3.493    c3.059,0,6.119,1.164,8.448,3.493c2.256,2.257,3.5,5.257,3.5,8.448S443.418,74.03,441.161,76.286z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M358.341,87.831c-0.13-0.641-0.32-1.271-0.57-1.87c-0.25-0.601-0.56-1.19-0.92-1.73c-0.36-0.54-0.78-1.06-1.24-1.52    c-0.46-0.46-0.97-0.88-1.52-1.24c-0.54-0.36-1.12-0.67-1.73-0.92c-0.6-0.25-1.23-0.44-1.87-0.57c-1.29-0.26-2.62-0.26-3.91,0    c-0.64,0.13-1.27,0.32-1.87,0.57c-0.6,0.25-1.18,0.56-1.72,0.92c-0.55,0.36-1.06,0.78-1.53,1.24c-0.46,0.46-0.87,0.979-1.24,1.52    c-0.36,0.54-0.67,1.13-0.92,1.73c-0.25,0.6-0.44,1.229-0.57,1.87c-0.13,0.649-0.19,1.3-0.19,1.96c0,0.649,0.06,1.3,0.19,1.95    c0.13,0.64,0.32,1.27,0.57,1.869c0.25,0.601,0.56,1.181,0.92,1.73c0.37,0.54,0.78,1.06,1.24,1.52c0.47,0.46,0.98,0.881,1.53,1.24    c0.54,0.36,1.12,0.67,1.72,0.92c0.61,0.25,1.24,0.44,1.87,0.57c0.65,0.13,1.31,0.19,1.96,0.19c0.65,0,1.31-0.061,1.95-0.19    c0.64-0.129,1.27-0.32,1.87-0.57c0.6-0.25,1.19-0.56,1.73-0.92c0.55-0.359,1.06-0.78,1.52-1.24c1.86-1.869,2.93-4.439,2.93-7.069    C358.541,89.131,358.471,88.48,358.341,87.831z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M310.627,79.786H102.794c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h207.833c5.523,0,10-4.478,10-10    C320.627,84.264,316.15,79.786,310.627,79.786z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M314.821,147.364H11.181c-5.523,0-10,4.478-10,10v197.199c0,5.523,4.477,10,10,10h303.64c5.523,0,10-4.478,10-10V157.364    C324.821,151.842,320.344,147.364,314.821,147.364z M121.806,344.562H36.925l57.165-66.186l41.4,47.94L121.806,344.562z     M146.806,344.562l18.646-24.861h48.489c5.523,0,10-4.478,10-10c0-5.522-4.477-10-10-10h-33.488l7.016-9.354h62.789l40.665,54.215    H146.806z M202.468,270.347l16.395-21.859l16.395,21.859H202.468z M304.821,329.76l-77.958-103.94c-1.889-2.518-4.853-4-8-4    c-3.147,0-6.111,1.482-8,4l-63.09,84.119l-46.114-53.4c-1.899-2.199-4.662-3.464-7.568-3.464s-5.668,1.265-7.568,3.464    l-65.342,75.653V167.364h283.64V329.76z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M137.648,178.846c-19.494,0-35.353,15.859-35.353,35.353c0,19.494,15.86,35.353,35.353,35.353    c19.494,0,35.353-15.859,35.353-35.353C173.001,194.705,157.142,178.846,137.648,178.846z M137.648,229.553    c-8.466,0-15.353-6.887-15.353-15.353s6.888-15.353,15.353-15.353c8.465,0,15.353,6.887,15.353,15.353    S146.114,229.553,137.648,229.553z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M502.002,147.364h-153.69c-5.523,0-10,4.478-10,10v197.199c0,5.522,4.477,10,10,10h153.69c5.523,0,10-4.478,10-10V157.364    C512.002,151.842,507.525,147.364,502.002,147.364z M492.002,344.563h-133.69V167.364h133.69V344.563z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M468.719,183.835h-87.124c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h87.124c5.523,0,10-4.478,10-10    C478.719,188.313,474.242,183.835,468.719,183.835z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M468.719,223.969h-87.124c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h87.124c5.523,0,10-4.478,10-10    C478.719,228.447,474.242,223.969,468.719,223.969z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M468.719,264.103h-87.124c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h87.124c5.523,0,10-4.478,10-10    C478.719,268.581,474.242,264.103,468.719,264.103z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M391.401,312.281c-0.13-0.641-0.32-1.271-0.57-1.87c-0.25-0.601-0.56-1.181-0.92-1.73c-0.37-0.54-0.78-1.06-1.25-1.52    c-2.32-2.32-5.77-3.391-9.02-2.73c-0.64,0.13-1.27,0.32-1.87,0.57c-0.6,0.25-1.18,0.56-1.73,0.92c-0.54,0.36-1.06,0.78-1.52,1.24    c-0.46,0.46-0.88,0.979-1.24,1.52c-0.36,0.55-0.67,1.13-0.92,1.73c-0.25,0.6-0.44,1.229-0.57,1.87c-0.13,0.649-0.2,1.3-0.2,1.949    c0,0.66,0.07,1.311,0.2,1.96c0.13,0.641,0.32,1.271,0.57,1.871c0.25,0.601,0.56,1.181,0.92,1.73c0.36,0.54,0.78,1.06,1.24,1.52    c0.46,0.46,0.98,0.88,1.52,1.24c0.55,0.36,1.13,0.67,1.73,0.92c0.6,0.25,1.23,0.44,1.87,0.57c0.65,0.13,1.3,0.2,1.96,0.2    c2.63,0,5.2-1.07,7.06-2.931c0.46-0.46,0.88-0.979,1.25-1.52c0.36-0.55,0.67-1.13,0.92-1.73c0.25-0.6,0.44-1.229,0.57-1.87    c0.13-0.649,0.19-1.3,0.19-1.96C391.591,313.581,391.531,312.93,391.401,312.281z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M468.719,304.236h-49.214c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h49.214c5.523,0,10-4.478,10-10    C478.719,308.714,474.242,304.236,468.719,304.236z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M164.871,378.751H11.181c-5.523,0-10,4.478-10,10v103.002c0,5.522,4.477,10,10,10h153.69c5.523,0,10-4.478,10-10V388.751    C174.871,383.229,170.394,378.751,164.871,378.751z M154.871,481.753H21.181v-83.002h133.69V481.753z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M502.002,378.751H199.728c-5.523,0-10,4.478-10,10v103.002c0,5.522,4.477,10,10,10h302.274c5.523,0,10-4.478,10-10    V388.751C512.002,383.229,507.525,378.751,502.002,378.751z M492.002,481.753H209.728v-83.002h282.274V481.753z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M255.281,438.302c-0.13-0.639-0.32-1.27-0.57-1.87c-0.25-0.61-0.56-1.189-0.92-1.729c-0.36-0.551-0.78-1.061-1.24-1.521    c-0.46-0.46-0.97-0.88-1.52-1.24c-0.54-0.359-1.12-0.67-1.73-0.92c-0.6-0.25-1.23-0.45-1.87-0.58c-1.29-0.25-2.62-0.25-3.91,0    c-0.63,0.13-1.26,0.33-1.87,0.58c-0.6,0.25-1.18,0.561-1.72,0.92c-0.55,0.36-1.06,0.78-1.52,1.24c-0.46,0.46-0.88,0.97-1.25,1.521    c-0.36,0.54-0.67,1.119-0.92,1.729c-0.25,0.601-0.44,1.23-0.57,1.87c-0.13,0.64-0.19,1.3-0.19,1.95c0,0.649,0.06,1.31,0.19,1.95    c0.13,0.639,0.32,1.269,0.57,1.879c0.25,0.6,0.56,1.18,0.92,1.72c0.37,0.55,0.79,1.06,1.25,1.52c1.86,1.86,4.44,2.931,7.07,2.931    c0.65,0,1.31-0.061,1.95-0.19c0.64-0.13,1.27-0.33,1.87-0.58c0.61-0.25,1.19-0.55,1.73-0.92c0.55-0.359,1.06-0.779,1.52-1.24    c0.46-0.46,0.88-0.97,1.24-1.52c0.36-0.54,0.67-1.12,0.92-1.72c0.25-0.61,0.44-1.24,0.57-1.88c0.13-0.641,0.2-1.301,0.2-1.95    C255.481,439.602,255.411,438.941,255.281,438.302z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M451.319,430.252h-167.93c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h167.93c5.523,0,10-4.478,10-10    C461.319,434.73,456.842,430.252,451.319,430.252z"/>
                                        </g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                </svg>
                                <p className="text-xl text-white century pt-3">SITE ERGONOMIQUE ET INTUITIF</p>
                            </div>
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center my-6" data-aos='zoom-in' data-aos-delay="400">
                                <svg className="svg-white" width="80px" height="80px" version="1.1" x="0px" y="0px" viewBox="0 0 60.017 60.017" >
                                    <path d="M59.144,3.731l-2.85-2.851c-1.164-1.161-3.057-1.162-4.221,0.001l-3.126,3.126H0v56h56V11.097l0.305-0.305l0,0l2.839-2.839  C60.308,6.789,60.308,4.895,59.144,3.731z M20.047,36.759l3.22,3.22l-4.428,1.208L20.047,36.759z M52.062,12.206L47.82,7.964  l1.414-1.414l4.243,4.242L52.062,12.206z M50.648,13.62L25.192,39.076l-4.242-4.242L46.406,9.378L50.648,13.62z M54,13.097v44.91H2  v-52h44.947L18.829,34.127l-0.188,0.188l-2.121,7.779l-1.226,1.226c-0.391,0.391-0.391,1.023,0,1.414  c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l1.226-1.226l7.779-2.123l26.351-26.35h0l0.447-0.447L54,13.097z   M57.73,6.539l-2.839,2.839l-4.243-4.243l2.839-2.839c0.384-0.384,1.009-0.383,1.393,0l2.85,2.85  C58.114,5.529,58.114,6.155,57.73,6.539z"/>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                </svg>
                                <p className="text-xl century text-white pt-3">CONTENUS OPTIMISÉS POUR VOTRE VISIBILITÉ</p>
                            </div>
                            <div className="w-full py-1 sm:w-1/3 px-12 flex flex-col items-center justify-center"  data-aos='zoom-in' data-aos-delay="600">
                                <svg className="svg-white" height="80px" viewBox="0 0 512 512" width="80px">
                                    <path d="m34.132812 443.734375h131.261719l-8.535156 17.066406h-3.257813c-26.71875 0-42.667968 12.757813-42.667968 34.132813 0 9.425781 7.640625 17.066406 17.066406 17.066406h256c9.425781 0 17.066406-7.640625 17.066406-17.066406 0-21.375-15.949218-34.132813-42.667968-34.132813h-3.257813l-8.535156-17.066406h131.261719c18.851562 0 34.132812-15.28125 34.132812-34.132813v-298.667968c0-18.851563-15.28125-34.132813-34.132812-34.132813h-93.867188c-4.710938 0-8.535156 3.820313-8.535156 8.53125 0 4.714844 3.824218 8.535157 8.535156 8.535157h93.867188c9.425781 0 17.066406 7.640624 17.066406 17.066406v298.667968c0 9.425782-7.640625 17.066407-17.066406 17.066407h-443.734376c-9.425781 0-17.066406-7.640625-17.066406-17.066407v-298.667968c0-9.425782 7.640625-17.066406 17.066406-17.066406h93.867188c4.710938 0 8.535156-3.820313 8.535156-8.535157 0-4.710937-3.824218-8.53125-8.535156-8.53125h-93.867188c-18.851562 0-34.132812 15.28125-34.132812 34.132813v298.667968c0 18.851563 15.28125 34.132813 34.132812 34.132813zm349.867188 51.199219h-256c0-4.222656 0-17.066406 25.601562-17.066406h204.796876c25.601562 0 25.601562 12.84375 25.601562 17.066406zm-56.480469-51.199219 8.53125 17.066406h-160.109375l8.53125-17.066406zm0 0"/>
                                    <path d="m452.265625 358.398438h-392.53125c-4.714844 0-8.535156-3.820313-8.535156-8.53125v-213.332032c0-4.714844 3.820312-8.535156 8.535156-8.535156h25.597656c4.714844 0 8.535157-3.820312 8.535157-8.535156 0-4.710938-3.820313-8.53125-8.535157-8.53125h-25.597656c-14.140625 0-25.601563 11.460937-25.601563 25.601562v213.332032c0 14.136718 11.460938 25.597656 25.601563 25.597656h392.53125c14.140625 0 25.601563-11.460938 25.601563-25.597656v-213.332032c0-14.140625-11.460938-25.601562-25.601563-25.601562h-25.597656c-4.714844 0-8.535157 3.820312-8.535157 8.53125 0 4.714844 3.820313 8.535156 8.535157 8.535156h25.597656c4.714844 0 8.535156 3.820312 8.535156 8.535156v213.332032c0 4.710937-3.820312 8.53125-8.535156 8.53125zm0 0"/>
                                    <path d="m213.332031 392.535156c-4.710937 0-8.53125 3.820313-8.53125 8.53125 0 4.714844 3.820313 8.535156 8.53125 8.535156h85.335938c4.710937 0 8.53125-3.820312 8.53125-8.535156 0-4.710937-3.820313-8.53125-8.53125-8.53125zm0 0"/>
                                    <path d="m365.703125 49.605469-14.230469-14.242188c-5.769531-5.75-14.796875-6.621093-21.558594-2.082031l-21.332031 14.085938c-6.597656-3.550782-13.558593-6.390626-20.761719-8.464844l-5.027343-25.15625c-1.582031-7.984375-8.582031-13.7382815-16.722657-13.746094h-20.140624c-8.132813 0-15.136719 5.738281-16.734376 13.714844l-5.160156 25.121094c-7.1875 2.128906-14.121094 5.015624-20.695312 8.617187l-21.246094-14.171875c-6.769531-4.53125-15.796875-3.644531-21.554688 2.113281l-14.253906 14.242188c-5.699218 5.773437-6.566406 14.757812-2.070312 21.515625l14.09375 21.332031c-3.546875 6.601563-6.382813 13.5625-8.464844 20.761719l-25.15625 5.015625c-7.972656 1.601562-13.722656 8.59375-13.753906 16.726562v20.15625c.019531 8.128907 5.753906 15.121094 13.722656 16.734375l25.113281 5.121094c2.132813 7.179688 5.019531 14.117188 8.609375 20.691406l-14.164062 21.289063c-4.507813 6.777343-3.617188 15.789062 2.125 21.558593l14.230468 14.230469c5.761719 5.761719 14.785157 6.644531 21.554688 2.117188l21.335938-14.085938c6.597656 3.550781 13.558593 6.386719 20.761718 8.464844l5.023438 25.15625c1.597656 7.953125 8.570312 13.6875 16.683594 13.710937h20.140624c8.132813 0 15.136719-5.738281 16.734376-13.710937l5.160156-25.125c7.1875-2.125 14.121094-5.015625 20.695312-8.617187l21.246094 14.207031c6.773438 4.535156 15.804688 3.648437 21.566406-2.117188l14.242188-14.230469c5.734375-5.773437 6.617187-14.78125 2.113281-21.558593l-14.097656-21.332031c3.535156-6.570313 6.394531-13.480469 8.535156-20.625l-8.175781-2.429688 8.140625 2.292969 25.15625-5.015625c7.945312-1.632813 13.65625-8.617188 13.679687-16.726563v-20.15625c-.019531-8.128906-5.753906-15.121093-13.722656-16.734375l-25.113281-5.117187c-2.132813-7.183594-5.019531-14.121094-8.609375-20.695313l14.207031-21.257812c4.542969-6.777344 3.652344-15.816406-2.125-21.578125zm-26.28125 33.328125c-3.476563 5.285156-3.757813 12.050781-.734375 17.605468 2.980469 5.550782 5.390625 11.386719 7.1875 17.425782 1.757812 6.105468 6.761719 10.726562 12.984375 11.996094l25.140625 5.027343v20.15625l-25.140625 5.027344c-6.222656 1.269531-11.226563 5.890625-12.984375 11.996094-1.800781 6.039062-4.207031 11.882812-7.1875 17.433593-3.035156 5.550782-2.75 12.328126.742188 17.605469l14.207031 21.257813-14.242188 14.238281-21.253906-14.207031c-5.28125-3.480469-12.054687-3.769532-17.613281-.75-5.550782 2.984375-11.394532 5.394531-17.433594 7.195312-6.078125 1.78125-10.675781 6.773438-11.945312 12.976563l-5.078126 25.148437h-20.140624l-5.035157-25.15625c-1.285156-6.21875-5.90625-11.210937-12.003906-12.980468-6.035156-1.792969-11.871094-4.199219-17.417969-7.175782-2.535156-1.367187-5.371094-2.085937-8.25-2.089844-3.34375-.007812-6.609375.976563-9.386718 2.832032l-21.257813 14.207031-14.242187-14.238281 14.214843-21.265625c3.476563-5.285157 3.757813-12.050781.734375-17.605469-2.980468-5.550781-5.386718-11.386719-7.183594-17.425781-1.757812-6.105469-6.761718-10.726563-12.988281-11.996094l-25.113281-5.027344v-20.15625l25.140625-5.027343c6.222656-1.269532 11.226563-5.890626 12.984375-11.996094 1.800781-6.039063 4.207031-11.878906 7.1875-17.433594 3.035156-5.550781 2.75-12.328125-.742188-17.605469l-14.207031-21.253906 14.242188-14.242187 21.253906 14.207031c5.277344 3.496093 12.058594 3.785156 17.613281.75 5.550782-2.984375 11.394532-5.394531 17.433594-7.191407 6.09375-1.769531 10.710938-6.765624 11.988281-12.980468l5.035157-25.148438h20.140624l5.035157 25.15625c1.285156 6.21875 5.90625 11.214844 12.003906 12.980469 6.035156 1.792969 11.871094 4.199219 17.417969 7.175781 5.554687 3.039063 12.332031 2.753906 17.613281-.742187l21.253906-14.207031 14.242188 14.242187zm0 0"/>
                                    <path d="m256 76.800781c-37.703125 0-68.265625 30.5625-68.265625 68.265625s30.5625 68.265625 68.265625 68.265625 68.265625-30.5625 68.265625-68.265625c-.042969-37.683594-30.582031-68.222656-68.265625-68.265625zm0 119.464844c-28.277344 0-51.199219-22.921875-51.199219-51.199219s22.921875-51.199218 51.199219-51.199218 51.199219 22.921874 51.199219 51.199218c-.027344 28.265625-22.933594 51.171875-51.199219 51.199219zm0 0"/>
                                    <path d="m264.535156 145.066406c0 4.714844-3.824218 8.535156-8.535156 8.535156s-8.535156-3.820312-8.535156-8.535156c0-4.710937 3.824218-8.53125 8.535156-8.53125s8.535156 3.820313 8.535156 8.53125zm0 0"/>
                                </svg>
                                <p className="text-xl century text-white pt-3">SITE ADAPTÉ POUR TOUS SUPPORTS</p>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center px-4 mt-12 mb-3">
                        <h2 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Linkweb se plie en 4 pour la création de votre site vitrine à Agen et Toulouse
                        </h2>
                        <hr className="blue"></hr>
                        <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">Le site internet vitrine constitue la carte de visite en ligne de votre entreprise. Accessible de jour, comme de nuit, il vous apporte une visibilité considérable pour promouvoir vos prestations.</h4>
                    </section>
                    <section  className="tabPanel flex flex-1 w-full justify-end ml-0 mb-12">
                        <div className="w-full md:w-3/4 py-0 flex justify-end">
                            <Accordion>
                                <div className="w-full" label="DANS QUELS CAS AI-JE BESOIN D'UN SITE INTERNET VITRINE ?">
                                <p>La <strong>mise en place d’un site internet vitrine</strong> est particulièrement utile lorsqu’il est question de mettre en avant votre activité, vos services, et obtenir des contacts locaux. En effet, un site internet vitrine doit répondre aux besoins des utilisateurs en proposant une solution concrète face à leur requête. Il va permettre d’affirmer votre présence sur le marché et également, vous donner la possibilité de travailler votre image grâce à la mise en place d’une <strong>stratégie web</strong> efficace. Tout l’intérêt d’un <strong>site vitrine</strong> réside dans la visibilité qu’il va apporter à votre activité, tout en vous permettant de créer des contenus qui vont permettre de <strong>développer votre image et votre notoriété</strong> pour <strong>acquérir de nouveaux clients</strong> sur le long terme.</p>
                                </div>
                                <div label="QUE PUIS-JE FAIRE GRÂCE À UN SITE INTERNET VITRINE ?">
                                <p>Un <strong>site internet vitrine</strong> peut répondre à des objectifs commerciaux, tels qu’obtenir de nouveaux contacts en vue de les convertir des clients, ou bien à des objectifs d’image. Il va permettre de <strong>développer des contenus</strong> sur la présentation de vos services, de votre manière de travailler, l’histoire de votre entreprise et bien plus encore. Également, le site vitrine va vous permettre d’<strong>améliorer votre positionnement</strong> sur les <strong>moteurs de recherche</strong>. Enfin, il vous donne la possibilité de vous affirmer comme un expert dans votre secteur d’activité pour donner confiance aux utilisateurs qui visiteront votre <strong>site internet</strong>.</p>
                                </div>
                                <div label="J'AI UN BESOIN PARTICULIER, EST-CE POSSIBLE D'ADAPTER UN SITE VITRINE ?">
                                <p>Bien sûr ! Sur un <strong>site internet</strong>, tout est possible. En effet, ajouter des fonctionnalités à destination des utilisateurs, ou bien en vue d’optimiser la gestion de votre entreprise via un <strong>outil numérique</strong>, est une réalité. Pour ceci, nous vous invitons à vous rediriger vers notre <strong><Link className="hover:text-bleu" to="/creation-de-site-internet-47-31/">page sur la création de site internet sur-mesure</Link></strong> pour obtenir plus d’informations à ce propos. En fonction de vos besoins et des spécificités de votre projet, nous déterminerons tout ce qui va être nécessaire pour vous permettre d’accéder à un site qui vous ressemble et qui sera utile pour votre entreprise.</p>
                                </div>
                            </Accordion>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Les dernières actualités
                        </h3>
                        <hr className="blue"></hr>
                        <LastPosts lastposts={ this.props.data.allWordpressPost.edges } />
                        <Link className="bg-bleu text-white px-16 py-3 block mx-auto hover:bg-black font-normal" to="/actualite-digitale/">Voir l'actualité digitale</Link>
                        <br/>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center px-4 mt-12 mb-3">
                        <h3 className="century text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Vous pourriez également être intéressé
                        </h3>
                        <hr className="blue"></hr>
                        <br/>
                        <h4 data-aos='fade-left' className="text-xl text-grey text-center century italic pb-6">
                            Vous souhaitez en savoir plus sur nos prestations d’agence web à Agen (47) et Toulouse (31) ? Découvrez nos autres prestations, ainsi que nos différentes réalisations.</h4>
                        <br/>
                        <section className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 mr-5 p-2 font-bold text-white" style={{borderRadius:'5px'}}>
                                <Link to="/referencement-toulouse/">Référencement</Link>
                            </div>
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 mr-5 p-2 font-bold text-white" style={{borderRadius:'5px'}}>
                                <Link to="/agence-web-toulouse/">Agence Web</Link>
                            </div>
                            <div className="w-full md:w-1/3 bg-bleu hover:bg-black my-4 mr-5 p-2 font-bold text-white" style={{borderRadius:'5px'}}>
                                <Link to="/agence-de-communication-agen-47-toulouse-31/">Nos réalisations</Link>
                            </div>
                        </section>
                        <br/>
                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsCreationSiteInternetVitrine {
    allWordpressPost(limit: 3) {
      edges {
        node {
          id
          title
          slug
          modified(locale: "fr", formatString: "DD/MM/YYYY")
          date(locale: "fr", formatString: "dddd DD MMMM YYYY")
          link
          featured_media {
            source_url
          }
        }
      }
    }
  }
  
    
`
export default CreationSiteInternetVitrine;




