import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import RoundButton from "../components/roundButton";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import LastPosts from '../components/lastposts';
import RappelForm from "../components/rappelForm";
import "../scss/global.scss";
import bgDev from '../images/bg-dev.jpg';
import bureau from '../images/bureau2-min.jpg';

import web from '../images/web.svg';
import laptop from '../images/laptop.svg';
import bullhorn from '../images/bullhorn.svg';


class MentionsLegales extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Agence Web Agen et Toulouse - Mentions Légales - Agen - Linkweb"
                    description="Mentions Légales - Consulter les mentions légales de l'Agence Web Linkweb à Agen (47) : création de site internet et référencement à Agen et Toulouse (31)."
                    url="https://linkweb.fr/mentions-legales/"
                    nom="Mentions Légales"
                    slug="mentions-legales/"                    
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
                    <section className="w-full bloctitrescreen mx-auto px-4 py-6 bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center" style={{backgroundPosition: 'center', backgroundColor:`#6e6e6e`, backgroundImage: 'url(' + bureau + ')', backgroundBlendMode: `multiply` }}>
                        <h1 data-aos="fade-up" data-aos-delay="500" className="century text-5xl sm:text-6xl text-center text-white">
                            Mentions Légales
                        </h1>
                        <h3 className="italic text-lg sm:text-xl md:text-2xl text-white mt-3 text-center">Vous êtes à la recherche de professionnels du web ?</h3>
                        <RoundButton url="/contact-agence-web-toulouse/" text="Contactez-nous" />
                    </section>
                    <section className="max-w-5xl w-full mx-auto px-4 py-6 my-4">
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                        Confidentialité
                        </h2>
                        <hr className="blue"></hr>
                    
                    <p className="text-md text-center py-12 century text-justify" style={{textAlignLast:'center'}}>Le site <Link to="/" className="hover:text-bleu">linkweb.fr</Link> n’enregistre pas d’informations personnelles permettant l’identification, à l’exception des formulaires que l’utilisateur est libre de remplir. Ces informations ne seront pas utilisées sans votre accord, nous les utiliserons seulement pour vous adresser des courriers, des brochures, des devis ou vous contacter.<br/>
                    <br/>
                        Les informations recueillies sur les sites bénéficient de la protection de la loi « Informatique et Libertés » n° 78-17 du 06 janvier 1978. Elles bénéficient d’un droit d’accès, de rectification, d’opposition à communication et de suppression sur simple demande par email à <a href="mailto:contact@linkweb.fr">contact@linkweb.fr</a>.
                        <br/>
                        Le site <Link to="/" className="hover:text-bleu">linkweb.fr</Link> pourra procéder à des analyses statistiques sans que celles-ci soient nominatives et pourra en informer des tiers (organismes d’évaluation de fréquentation) sous une forme résumée et non nominative.</p>
                    
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                        Liens hypertexte
                        </h2>
                        <hr className="blue"></hr>
                    
                    <p className="text-md text-center py-12 century text-justify" style={{textAlignLast:'center'}}>Le site <b>linkweb.fr</b> ne contrôle pas les sites en connexion avec le sien, et ne saurait donc être responsable de leur contenu. Les risques liés à l’utilisation de ces sites incombent pleinement à l’utilisateur. Il se conformera à leurs conditions d’utilisation.</p>

                    <h2 data-aos='fade-right' className="text-center text-4xl century">
                    Collecte de Cookies
                        </h2>
                        <hr className="blue"></hr>

                    <p className="text-md text-center py-12 century text-justify">Nos serveurs ne collectent aucunes informations personnelles sur les visiteurs du site.<br/>
                    <br/>
                    Les données de trafic et les fichiers de cookies implantés sur votre ordinateur ont pour seule finalité de permettre d’analyser la fréquentation des différentes pages du site valognes-menuiseries.fr afin d’en améliorer le contenu. Ces données sont conservées 12 mois.<br/>
                    <br/>
                    Les données relatives à la navigation des visiteurs ne sont pas exploitées nominativement. Il s’agit de statistiques permettant de connaître le trafic de chacune des pages, les parcours de navigation, le taux de consultations par jour de la semaine et par heure de la journée ainsi que les différentes erreurs possibles côté clients ou serveur.<br/>
                    <br/>
                    Pour plus d’informations, vous pouvez consulter les conditions générales de Google Analytics.<br/>
                    <br/>
                    Par le biais de votre navigateur, vous avez la possibilité de bloquer l’implantation de cookies sur votre ordinateur :<br/>
                    <br />
                    <ul className="text-left">
                        <li><span className="font-bold">Mozilla Firefox :</span> <a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" target="blank" rel="noreferrer noopener" className="hover:text-bleu">https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent</a></li>
                        <li><span className="font-bold">Google Chrome :</span> <a href="https://support.google.com/chrome/answer/95647?hl=fr" target="blank" rel="noreferrer noopener"className="hover:text-bleu">https://support.google.com/chrome/answer/95647?hl=fr</a></li>
                        <li><span className="font-bold">Safari :</span> <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="blank" rel="noreferrer noopener" className="hover:text-bleu">https://support.apple.com/fr-fr/guide/safari/sfri11471/mac</a></li>
                        <li><span className="font-bold">Internet Explorer :</span> <a href="https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies" target="blank" rel="noreferrer noopener" className="hover:text-bleu">https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
                        <li><span className="font-bold">Opera :</span> <a href="http://help.opera.com/Windows/10.20/fr/cookies.html" target="blank" rel="noreferrer noopener" className="hover:text-bleu">http://help.opera.com/Windows/10.20/fr/cookies.html</a></li>
                    </ul>
                    </p>
                    <h2 data-aos='fade-right' className="text-center text-4xl century">
                    Données personnelles
                        </h2>
                        <hr className="blue"></hr>

                        <p className="text-md text-center py-12 century text-justify">Nous ne collectons, dans aucun cas, l’adresse e-mail des visiteurs sans que ceux-ci la communiquent de manière pleine et entière.<br/>
                        <br/>
                        En complétant le formulaire et en cochant la case à cocher de consentement du formulaire, le visiteur donne son accord afin que les données à caractère personnel soient traitées.<br/>
                        <br/>
                        Les données saisies et envoyées via les formulaires ont pour finalités la prise de contact avec les personnes ayant complétées un formulaire (envoi de devis, réponses mails, demandes d’informations, …) ; la gestion des prospects et clients générale avec les personnes intéressées par nos services ; le suivi relationnel avec les personnes ayant proposé leurs candidatures dans le cadre d’une demande de recrutement.<br/>
                        <br/>
                        Dans tous les cas, vous pouvez refuser de fournir vos données personnelles.<br/>
                        <br/>
                        Dans ce cas, vous ne pourrez pas utiliser les services du site, notamment celui de solliciter des renseignements sur l’entreprise.<br/>
                        <br/>
                        Vos informations ne sont pas stockées à des fins commerciales, ni cédées, ni communiquées à des tiers.</p>
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                        Droit d’accès, de rectification ou suppression des données personnelles
                        </h2>
                        <hr className="blue"></hr>
                        <p className="text-md text-center py-12 century text-justify">Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, ainsi qu’au Règlement Européen Général sur la Protection des Données (RGPD), vous disposez des droits d’accès, de rectification et de suppression des données personnelles vous concernant. Vous pouvez exercer ce droit en utilisant le <Link to="/contact-agence-web-toulouse/" className="hover:text-bleu">formulaire de contact du site</Link> ou sur simple demande par email à <a href="mailto:contact@linkweb.fr" className="hover:text-bleu">contact@linkweb.fr</a> ou par adresse postale : 10 rue Albert Ferrasse – 47550 Boé
                        </p>
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                        Éditeur
                        </h2>
                        <hr className="blue"></hr>
                        <p className="text-md text-center py-12 century text-justify" style={{textAlignLast:'center'}}>Linkweb<br/>
                        <br/>
                        RCS : Agen B 509 580 585<br/>
                        Siret : 50958058500032<br/>
                        Code APE/NAF : 6201Z<br/>
                        Convention : Programmation informatique<br/>
                        Siège social : 10, rue Albert Ferrasse 47550 Boé<br/>
                        N° de téléphone : <a href="tel:0533950030" className="hover:text-bleu">05 33 95 00 30</a></p>
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                        Directeur de publication
                        </h2>
                        <hr className="blue"></hr>
                        <p className="text-md text-center py-12 century text-justify" style={{textAlignLast:'center'}}>Aurélien CIEMNIEWSKI</p>
                        <h2 data-aos='fade-right' className="text-center text-4xl century">
                        Hébergement
                        </h2>
                        <hr className="blue"></hr>
                        <p className="text-md text-center py-12 century text-justify" style={{textAlignLast:'center'}}>Linkweb
                        SARL au capital de 7 000 Euros<br/>
                        RCS : Agen B 509 580 585<br/>
                        Siège social : 10, rue Albert Ferrasse 47550 Boé<br/>
                        N° de téléphone : <a href="tel:0533950030" className="hover:text-bleu">05 33 95 00 30</a></p>
                    </section>
                    
                    <section className=" w-full h-screen flex flex-col justify-center items-end px-4 pt-12 pb-0 my-2 bg-cover my-24" style={{ background: '#6a6a6a url( ' + bgDev + ')', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                        <div className="max-w-5xl mx-auto flex items-center">
                            <h3 data-aos='fade-right' className="text-center text-white mt-24 text-4xl century">
                                <span className="text-bleu">/</span>Un projet, besoin de renseignements ?


                            </h3>

                        </div>

                        <div className="max-w-6xl mx-auto flex text-center mt-24 mb-12">
                            {/* <RappelForm /> */}
                            <RoundButton url="/contact-agence-web-toulouse/" text="Contactez-nous" />
                        </div>

                        <div className="max-w-6xl mx-auto flex items-start text-center my-12 flex-col md:flex-row">
                            <div className="w-full my-6 md:w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="200">
                                <img src={laptop} width="80px" alt="Création Site Internet Toulouse"/>
                                <p className="text-xl text-white century pt-3">CRÉATION DE SITE INTERNET</p>
                            </div>
                            <div className="w-full my-6 md:w-1/3 px-12 flex flex-col items-center justify-center my-6" data-aos='zoom-in' data-aos-delay="400">

                                <img src={web} width="80px" alt="Référencement Toulouse"/>
                                <p className="text-xl century text-white pt-3">RÉFÉRENCEMENT NATUREL</p>
                            </div>
                            <div className="w-full my-6 md:w-1/3 px-12 flex flex-col items-center justify-center" data-aos='zoom-in' data-aos-delay="600">
                                <img src={bullhorn} width="80px" alt="Référencement Toulouse"/>
                                <p className="text-xl mb-16 century text-white pt-3">RÉFÉRENCEMENT GOOGLE ADS</p>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-6xl mx-auto flex flex-col align-center justify-center text-center mt-12 mb-3">
                        <h3 className="century capitalize text-center text-2xl tracking-wider pb-3 leading-tight" data-aos="zoom-in">
                            <span className="text-bleu">/</span>Les dernières actualités
                        </h3>
                        <hr className="blue"></hr>
                        <LastPosts lastposts={this.props.data.allWordpressPost.edges} />
                        <Link className="bg-bleu text-white px-16 py-3 block mx-auto hover:bg-black font-normal" to="/actualite-digitale/">Voir l'actualité digitale</Link>
                        <br/>
                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsMentionsLegales {
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
export default MentionsLegales;




