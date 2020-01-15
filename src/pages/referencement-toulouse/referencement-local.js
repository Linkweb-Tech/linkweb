import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import posed from 'react-pose';

import SEO from "../../components/seo";


import banniere from "../../images/referencement-ban.jpg";



class RéférencementLocaldef extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>

                <SEO
                    title="Référencement local : Définition - Référencement Toulouse - Linkweb"
                    description="Le référencement local est une branche du référencement qui permet d'obtenir une visibilité ciblée et pertinente pour son site web."
                    url="https://linkweb.fr/referencement-toulouse/referencement-local/"
                    nom="Référencement Local"
                    slug="referencement-toulouse/referencement-local/"
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

                    <section className="w-full mt-40 text-justify font-normal flex flex-col lg:flex-row lg:justify-end" data-aos="fade-right">
                        <div className="w-full lg:w-2/3 px-16 md:px-24 lg:px-24 xl:pl-40 xl:ml-64 mb-24">
                        <h1 data-aos="fade-up" className="century text-4xl sm:text-5xl text-center text-bleu mt-4 lg:mt-6">
                            Référencement Local
                        </h1>
                        <hr className="blue" data-aos="fade-up"></hr>
                        <br/>
                            <p>
                                Le <strong>référencement local</strong> est l'une des branches qui fait partie du travail de <strong className="font-normal">référencement d’un site internet</strong>. Il désigne l’ensemble des <strong className="font-normal">techniques de référencement</strong> qui vont permettre à un site d’<strong className="font-normal">être visible</strong> sur des zones de prospection ciblées à partir des <strong className="font-normal">moteurs de recherche</strong>. Il peut se décliner en termes de <strong className="font-normal">référencement naturel</strong> comme de <strong className="font-normal">référencement payant (Adwords)</strong>. Le référencement local constitue une part importante de nos stratégies de <Link to="/referencement-toulouse/" className="text-bleu hover:text-black font-bold"><strong>référencement à Toulouse</strong></Link>. Cela s’explique par les avantages qu’il peut procurer à une entreprise en termes de <strong className="font-normal">visibilité</strong> au sein des <strong className="font-normal">pages de résultats</strong> :<br/>
                                <br/>
                                <ul className="list-disc px-12">
                                <li>Prospecter auprès d’utilisateurs proches de son entreprise,</li>
                                <li>Être <strong className="font-normal">pertinent</strong> vis-à-vis des besoins exprimés par les utilisateurs grâce à des <strong className="font-normal">mots-clés</strong> ciblés,</li>
                                <li><strong className="font-normal">Être visible</strong> auprès d’utilisateurs plus à même de se diriger sur <strong className="font-normal">votre site web</strong>,</li>
                                <li>Gagner en visibilité grâce à <strong className="font-normal">Google My Business</strong>.</li>
                                </ul><br/>
                                Mettre en place une <strong className="font-normal">stratégie de référencement naturel local</strong> est particulièrement utile lorsqu’il s’agit d’obtenir des résultats de façon rapide en termes de visibilité.<br/>
                                <br/>
                                <strong className="font-normal">Référencer un site internet</strong> du point de vue local demande de mettre en place des <strong className="font-normal">optimisations sur vos pages web</strong>. L’éclosion du <strong className="font-normal">référencement local</strong> a fait apparaître des requêtes de moyenne et longue traînes composées d’un <strong className="font-normal">mot-clé</strong> ciblé suivi du nom de la localité visée. Afin d'être visible sur ce type de requête, il est nécessaire que l'expression ciblée apparaisse sur <strong className="font-normal">votre site internet</strong>. C'est ce travail notamment qui permettre à votre site d’apparaître correctement dans les <strong className="font-normal">résultats des moteurs de recherche</strong>.<br/>
                                <br/>
                                Pour atteindre un <strong className="font-normal">bon référencement</strong> dans les <strong className="font-normal">résultats naturels</strong>, l’<strong className="font-normal">optimisation des balises title</strong>, <strong className="font-normal">méta descriptions</strong> ou balises headings des <strong className="font-normal">pages de votre site</strong> doit être réalisée en conséquence. Si obtenir des bons <strong className="font-normal">backlinks</strong> (<strong className="font-normal">liens entrants</strong>) via le <strong className="font-normal">netlinking</strong> vous permettra d’obtenir de la visibilité en <strong className="font-normal">première page</strong> au sein des <strong className="font-normal">résultats de recherche (SERP)</strong>, l’optimisation on-site va également être très importante afin de développer votre présence sur des secteurs pertinents pour vous attirer votre cible <strong className="font-normal">vers votre site</strong>.<br/>
                                <br/>
                                En somme, le <strong className="font-normal">référencement local</strong> peut-être un sacré atout en vue d’<strong className="font-normal">améliorer la visibilité d’un site</strong> grâce au <strong className="font-normal">référencement SEO</strong>. Pour cela, il est bon d’activer tous les <strong className="font-normal">leviers</strong> qui vous permettront de booster votre visibilité sur les <strong className="font-normal">moteurs de recherches</strong> en termes de <strong className="font-normal">référencement web</strong>. En ce sens, le référencement local va vous permettre de générer des <strong className="font-normal">clics</strong> pertinents <strong className="font-normal">vers votre site</strong> et qui pourront vous permettre d’améliorer votre <strong className="font-normal">taux de conversion</strong>.<br/>
                        </p>
                        <img
                            src={banniere}
                            alt="Référencement Toulouse"
                            className="mx-auto block max-w-full mt-12"
                        />
                        </div>
                        <div className="w-full lg:w-1/3 px-16 md:px-24 lg:px-10 xl:pr-24 md:mr-12  xl:mx-12 mb-32 text-justify font-normal flex flex-col justify-start items-center lg:items-start lg:mt-40" >
                            <p className="flex justify-center" data-aos="fade-left"><b>Les autres notions liées au Référencement local :</b></p>
                            <br/>
                            <div className="flex flex-row justify-center">
                            <ul className="list-disc pl-4 flex justify-center flex-col" data-aos="fade-left">
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/backlinks/">Backlinks</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/techniques-referencement/">Techniques de référencement</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/optimisation-interne/">Optimisation interne</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/arborescence-seo/">Arborescence SEO</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/serp/">SERP</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/e-reputation/">E-Réputation</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/mots-cles/">Mots-clés</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/longue-traine/">Longue Traîne</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/courte-traine/">Courte Traîne</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/rapport-positionnement/">Rapport de positionnement</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/criteres-qualite/">Critères de qualité</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/sur-optimisation/">Sur-Optimisation</Link></li>
                            <li><Link className="text-bleu font-bold hover:text-black" to="/referencement-toulouse/audit-seo/">Audit SEO</Link></li>
                            </ul>
                        </div>
                        </div>
                    </section>
                {/* </PageTransition> */}
            </Layout>
        );
    }
};


export const query = graphql`
query lastsThreePostsReflocaldef {
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
export default RéférencementLocaldef;




